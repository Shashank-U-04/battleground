import * as THREE from 'three';

export const INK = {
  BLUE: 0,
  RED: 1,
  BLACK: 2,
  ORANGE: 3,
  GREEN: 4,
  PINK: 5
};

export const inkColors = [
  new THREE.Vector3(0.1, 0.19, 0.76),
  new THREE.Vector3(0.86, 0.12, 0.2),
  new THREE.Vector3(0.18, 0.2, 0.26),
  new THREE.Vector3(0.92, 0.55, 0.08),
  new THREE.Vector3(0.12, 0.6, 0.3),
  new THREE.Vector3(0.9, 0.4, 0.66)
];

export const LIGHT_DIR = new THREE.Vector3(0.38, 0.82, 0.42).normalize();
export const lightUniforms = {
  uLightDir: { value: new THREE.Vector3() },
  uTime: { value: 0 }
};

const vertexShader = `
  varying vec3 vNormalV;
  varying vec4 vColorData;
  uniform vec3 uLightDir;
  
  void main() {
    vColorData = vec4(-1.0);
    #ifdef USE_INSTANCING
      vColorData = vec4(instanceColor, 1.0);
    #endif

    vec3 objectNormal = normal;
    #ifdef USE_INSTANCING
      mat3 m = mat3(instanceMatrix);
      objectNormal /= vec3(dot(m[0], m[0]), dot(m[1], m[1]), dot(m[2], m[2]));
      objectNormal = m * objectNormal;
    #endif
    
    vec4 mvPosition = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      mvPosition = instanceMatrix * mvPosition;
    #endif
    mvPosition = modelViewMatrix * mvPosition;
    
    vNormalV = normalize((normalMatrix * objectNormal));
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vNormalV;
  varying vec4 vColorData;
  uniform vec3 uLightDir;
  uniform float uInkId;
  uniform float uFill;
  uniform float uShadeScale;
  uniform float uShadeBias;
  
  void main() {
    float inkId = uInkId;
    float fill = uFill;
    
    if (vColorData.r >= 0.0) {
      inkId = vColorData.r;
      fill = vColorData.g;
    }
    
    vec3 n = normalize(vNormalV);
    float dotNL = dot(n, uLightDir);
    float shade = dotNL * 0.5 + 0.5;
    shade = shade * uShadeScale + uShadeBias;
    
    if (fill > 0.5) {
      shade = -1.0;
    }
    
    gl_FragColor = vec4(shade, inkId, n.x, n.y);
  }
`;

export function gt(opts = {}) {
  let ink = INK.BLACK;
  let fill = 0.0;
  let shadeScale = 1.0;
  let shadeBias = 0.0;
  let side = THREE.FrontSide;

  if (typeof opts === 'number') {
    ink = opts;
    if (arguments[1]) fill = 1.0;
    if (arguments[2] !== undefined) shadeScale = arguments[2];
    if (arguments[3] !== undefined) shadeBias = arguments[3];
  } else {
    if (opts.ink !== undefined) ink = opts.ink;
    if (opts.fill) fill = 1.0;
    if (opts.shadeScale !== undefined) shadeScale = opts.shadeScale;
    if (opts.shadeBias !== undefined) shadeBias = opts.shadeBias;
    if (opts.side !== undefined) side = opts.side;
  }

  const mat = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uLightDir: lightUniforms.uLightDir,
      uInkId: { value: ink },
      uFill: { value: fill },
      uShadeScale: { value: shadeScale },
      uShadeBias: { value: shadeBias }
    },
    side: side,
  });
  mat.inkId = ink;
  return mat;
}

export function setFill(mat, fill) {
  if (mat.uniforms && mat.uniforms.uFill) {
    mat.uniforms.uFill.value = fill ? 1.0 : 0.0;
  }
}

const postVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const postFragmentShader = `
  varying vec2 vUv;
  uniform sampler2D tDiffuse;
  uniform sampler2D tDepth;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec3 uInkColors[6];
  uniform mat4 uProjectionMatrixInverse;
  uniform float uLineMode; // 0=ruled, 1=graph
  uniform vec3 uPaperColor;
  
  uniform float uHurt;
  uniform float uFlash;
  uniform float uSlow;
  uniform float uLowHp;
  
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float stripes(vec2 p, vec2 dir, float spacing, float width) {
    float t = dot(p, vec2(-dir.y, dir.x));
    float f = abs(fract(t / spacing) - 0.5) * spacing;
    float soft = width * 0.6;
    return 1.0 - smoothstep(width * 0.5 - soft, width * 0.5 + soft, f);
  }
  
  vec3 getInkColor(float id) {
    int i = int(id + 0.5);
    if (i == 0) return uInkColors[0];
    if (i == 1) return uInkColors[1];
    if (i == 2) return uInkColors[2];
    if (i == 3) return uInkColors[3];
    if (i == 4) return uInkColors[4];
    if (i == 5) return uInkColors[5];
    return uInkColors[2];
  }
  
  void main() {
    vec2 invRes = 1.0 / uResolution;
    
    // Wobble
    vec2 wuv = vUv;
    float wTime = uTime * 4.0;
    wuv.x += (vnoise(vUv * 10.0 + wTime) - 0.5) * 0.003;
    wuv.y += (vnoise(vUv * 10.0 - wTime) - 0.5) * 0.003;
    
    // Sample depth and data
    float depth = texture2D(tDepth, wuv).r;
    vec4 data = texture2D(tDiffuse, wuv);
    
    // Background paper
    vec3 col = uPaperColor;
    
    // Paper grain
    float grain = vnoise(wuv * uResolution * 0.5) * 0.03;
    col -= grain;
    
    // Ruled / Graph lines
    vec2 pcoord = wuv * uResolution;
    if (uLineMode < 0.5) {
      // Ruled
      float l = abs(fract(pcoord.y / 32.0) - 0.5) * 32.0;
      if (l < 1.0) col = mix(col, vec3(0.5, 0.7, 0.9), 0.5);
      if (abs(pcoord.x - 60.0) < 1.0) col = mix(col, vec3(0.9, 0.5, 0.5), 0.5);
    } else {
      // Graph
      float lx = abs(fract(pcoord.x / 32.0) - 0.5) * 32.0;
      float ly = abs(fract(pcoord.y / 32.0) - 0.5) * 32.0;
      if (lx < 1.0 || ly < 1.0) col = mix(col, vec3(0.6, 0.8, 0.6), 0.4);
    }
    
    if (depth < 1.0) {
      float shade = data.r;
      float inkId = data.g;
      vec2 n = data.ba;
      
      // Inverse project for world space
      vec4 ndc = vec4(wuv.x * 2.0 - 1.0, wuv.y * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      vec4 viewPos = uProjectionMatrixInverse * ndc;
      viewPos /= viewPos.w;
      float dist = -viewPos.z;
      
      // Edge detection
      float e = 0.0;
      vec2 o1 = vec2(1.5, 0.0) * invRes;
      vec2 o2 = vec2(0.0, 1.5) * invRes;
      
      float d0 = 1.0 / (texture2D(tDepth, wuv).r + 0.0001);
      float d1 = 1.0 / (texture2D(tDepth, wuv + o1).r + 0.0001);
      float d2 = 1.0 / (texture2D(tDepth, wuv - o1).r + 0.0001);
      float d3 = 1.0 / (texture2D(tDepth, wuv + o2).r + 0.0001);
      float d4 = 1.0 / (texture2D(tDepth, wuv - o2).r + 0.0001);
      
      float lapD = abs(4.0 * d0 - d1 - d2 - d3 - d4);
      float zEdge = smoothstep(0.01, 0.05, lapD / d0);
      
      vec2 n1 = texture2D(tDiffuse, wuv + o1).ba;
      vec2 n2 = texture2D(tDiffuse, wuv - o1).ba;
      vec2 n3 = texture2D(tDiffuse, wuv + o2).ba;
      vec2 n4 = texture2D(tDiffuse, wuv - o2).ba;
      
      float lapN = length(4.0 * n - n1 - n2 - n3 - n4);
      float nEdge = smoothstep(0.1, 0.3, lapN);
      
      e = max(zEdge, nEdge);
      
      // Hatching
      float hatch = 0.0;
      if (shade > -0.5) { // not filled
        vec2 hp = wuv * uResolution;
        float spacing = 6.0;
        
        if (dist > 2.0) {
           // World space anchored hatch
           hp = viewPos.xy * uResolution.y / dist;
           float lod = exp2(floor(log2(dist * 0.5)));
           spacing = 6.0 / lod;
        }
        
        float w = 1.0;
        float s1 = stripes(hp, vec2(1.0, 1.0), spacing, w);
        float s2 = stripes(hp, vec2(-1.0, 1.0), spacing, w);
        float s3 = stripes(hp, vec2(1.0, 0.0), spacing, w);
        
        if (shade < 0.6) hatch = max(hatch, s1);
        if (shade < 0.4) hatch = max(hatch, s2);
        if (shade < 0.2) hatch = max(hatch, s3);
      } else {
        hatch = 1.0; // filled
      }
      
      // Combine ink
      float inkIntensity = max(e, hatch);
      
      // Distance fade
      float fade = smoothstep(40.0, 100.0, dist);
      inkIntensity *= (1.0 - fade);
      
      vec3 inkColor = getInkColor(inkId);
      
      col = mix(col, inkColor, inkIntensity * 0.85); // 0.85 alpha for slight transparency
    }
    
    // Slow mo desat
    if (uSlow > 0.0) {
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(lum), uSlow * 0.8);
    }
    
    // Hurt vignette
    if (uHurt > 0.0 || uLowHp > 0.0) {
       vec2 cnt = wuv - 0.5;
       float d = length(cnt);
       float v = smoothstep(0.3, 0.8, d);
       float pulse = uLowHp > 0.0 ? (sin(uTime * 5.0) * 0.5 + 0.5) : 0.0;
       float amt = max(uHurt, pulse * 0.5) * v;
       float scr = vnoise(wuv * uResolution * 0.1 + uTime);
       col = mix(col, uInkColors[1], amt * scr);
    }
    
    // Flash
    if (uFlash > 0.0) {
      col = mix(col, vec3(1.0), uFlash);
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: false,
      powerPreference: 'high-performance'
    });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(80, 1, 0.1, 1000);
    this.scene.add(this.camera);
    
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    
    this.renderTarget = new THREE.WebGLRenderTarget(w, h, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: true,
      depthTexture: new THREE.DepthTexture()
    });
    
    this.postScene = new THREE.Scene();
    this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    this.postUniforms = {
      tDiffuse: { value: this.renderTarget.texture },
      tDepth: { value: this.renderTarget.depthTexture },
      uResolution: { value: new THREE.Vector2(w, h) },
      uTime: lightUniforms.uTime,
      uInkColors: { value: inkColors },
      uProjectionMatrixInverse: { value: new THREE.Matrix4() },
      uLineMode: { value: 0 },
      uPaperColor: { value: new THREE.Vector3(0.98, 0.98, 0.95) },
      uHurt: { value: 0 },
      uFlash: { value: 0 },
      uSlow: { value: 0 },
      uLowHp: { value: 0 }
    };
    
    const postMat = new THREE.ShaderMaterial({
      vertexShader: postVertexShader,
      fragmentShader: postFragmentShader,
      uniforms: this.postUniforms,
      depthWrite: false,
      depthTest: false
    });
    
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMat);
    this.postScene.add(quad);
    
    this.resize();
  }
  
  resize() {
    const pr = this.renderer.getPixelRatio();
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.renderer.setSize(w, h, false);
    
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    
    this.renderTarget.setSize(w * pr, h * pr);
    this.postUniforms.uResolution.value.set(w * pr, h * pr);
    this.postUniforms.uProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse);
  }
  
  setStyle(style = {}) {
    if (style.lineMode !== undefined) this.postUniforms.uLineMode.value = style.lineMode;
    if (style.paperColor !== undefined) this.postUniforms.uPaperColor.value.copy(style.paperColor);
  }
  
  render(time, opts = {}) {
    lightUniforms.uTime.value = time;
    
    // Update light dir in view space for shaders
    const viewLight = LIGHT_DIR.clone().transformDirection(this.camera.matrixWorldInverse).normalize();
    lightUniforms.uLightDir.value.copy(viewLight);
    
    this.postUniforms.uProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse);
    this.postUniforms.uHurt.value = opts.hurt || 0;
    this.postUniforms.uFlash.value = opts.flash || 0;
    this.postUniforms.uSlow.value = opts.slow || 0;
    this.postUniforms.uLowHp.value = opts.lowHp || 0;
    
    // Scene pass
    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    
    // Post process pass
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.postScene, this.postCamera);
  }
}
