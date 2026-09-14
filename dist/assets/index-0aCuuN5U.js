(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="170",ml=0,Ta=1,gl=2,Po=1,_l=2,un=3,gn=0,Ce=1,dn=2,Pn=0,pi=1,wa=2,ba=3,Aa=4,vl=5,Gn=100,xl=101,yl=102,Ml=103,Sl=104,El=200,Tl=201,wl=202,bl=203,pr=204,mr=205,Al=206,Cl=207,Rl=208,Pl=209,Ll=210,Dl=211,Il=212,Ul=213,Nl=214,gr=0,_r=1,vr=2,vi=3,xr=4,yr=5,Mr=6,Sr=7,Lo=0,Fl=1,Ol=2,Ln=0,Bl=1,zl=2,kl=3,Hl=4,Gl=5,Vl=6,Wl=7,Do=300,xi=301,yi=302,Er=303,Tr=304,Cs=306,wr=1e3,Wn=1001,br=1002,Ee=1003,ql=1004,Ki=1005,tn=1006,Us=1007,qn=1008,_n=1009,Io=1010,Uo=1011,ki=1012,sa=1013,Xn=1014,en=1015,Gi=1016,ra=1017,aa=1018,Mi=1020,No=35902,Fo=1021,Oo=1022,Oe=1023,Bo=1024,zo=1025,mi=1026,Si=1027,oa=1028,la=1029,ko=1030,ca=1031,ha=1033,_s=33776,vs=33777,xs=33778,ys=33779,Ar=35840,Cr=35841,Rr=35842,Pr=35843,Lr=36196,Dr=37492,Ir=37496,Ur=37808,Nr=37809,Fr=37810,Or=37811,Br=37812,zr=37813,kr=37814,Hr=37815,Gr=37816,Vr=37817,Wr=37818,qr=37819,Xr=37820,Yr=37821,Ms=36492,Kr=36494,Jr=36495,Ho=36283,Zr=36284,$r=36285,jr=36286,Xl=3200,Yl=3201,Kl=0,Jl=1,Rn="",Ne="srgb",Kn="srgb-linear",Rs="linear",Zt="srgb",jn=7680,Ca=519,Zl=512,$l=513,jl=514,Go=515,Ql=516,tc=517,ec=518,nc=519,Ra=35044,ws=35048,Pa="300 es",fn=2e3,bs=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,Qr=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function ic(s,t){return(s%t+t)%t}function Fs(s,t,e){return(1-e)*s+e*t}function Ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,i,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],w=i[1],E=i[4],v=i[7],U=i[2],A=i[5],C=i[8];return r[0]=a*_+o*w+l*U,r[3]=a*m+o*E+l*A,r[6]=a*f+o*v+l*C,r[1]=c*_+h*w+u*U,r[4]=c*m+h*E+u*A,r[7]=c*f+h*v+u*C,r[2]=d*_+p*w+g*U,r[5]=d*m+p*E+g*A,r[8]=d*f+p*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Lt;function Vo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sc(){const s=As("canvas");return s.style.display="block",s}const La={};function Fi(s){s in La||(La[s]=!0,console.warn(s))}function rc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ac(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function oc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Rs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Da=[.64,.33,.3,.6,.15,.06],Ia=[.2126,.7152,.0722],Ua=[.3127,.329],Na=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Kn]:{primaries:Da,whitePoint:Ua,transfer:Rs,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:Ia,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Da,whitePoint:Ua,transfer:Zt,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:Ia,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Qn;class lc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=As("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cc=0;class Wo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bs(i[a].image)):r.push(Bs(i[a]))}else r=Bs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Bs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hc=0;class Te extends Ti{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Wn,i=Wn,r=tn,a=qn,o=Oe,l=_n,c=Te.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Vi(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Do)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Do;Te.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,U=(f+1)/2,A=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return E>v&&E>U?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=C/n):v>U?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=P/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=C/r,i=P/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uc extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qo extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const U=Math.sqrt(E),A=Math.atan2(U,f*w);m=Math.sin(m*A)/U,o=Math.sin(o*A)/U}const v=o*w;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new T,Oa=new mn;class Jn{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),Zi.subVectors(this.max,Ri),ti.subVectors(t.a,Ri),ei.subVectors(t.b,Ri),ni.subVectors(t.c,Ri),Mn.subVectors(ei,ti),Sn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!ks(e,ti,ei,ni,Zi)||(e=[1,0,0,0,1,0,0,0,1],!ks(e,ti,ei,ni,Zi))?!1:($i.crossVectors(Mn,Sn),e=[$i.x,$i.y,$i.z],ks(e,ti,ei,ni,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new T,new T,new T,new T,new T,new T,new T,new T],He=new T,Ji=new Jn,ti=new T,ei=new T,ni=new T,Mn=new T,Sn=new T,Un=new T,Ri=new T,Zi=new T,$i=new T,Nn=new T;function ks(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const fc=new Jn,Pi=new T,Hs=new T;class Wi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Hs)),this.expandByPoint(Pi.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new T,Gs=new T,ji=new T,En=new T,Vs=new T,Qi=new T,Ws=new T;class pc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gs.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ji),o=En.dot(this.direction),l=-En.dot(ji),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gs).addScaledVector(ji,d),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){Vs.subVectors(e,t),Qi.subVectors(n,t),Ws.crossVectors(Vs,Qi);let a=this.direction.dot(Ws),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const l=o*this.direction.dot(Qi.crossVectors(En,Qi));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(Ws);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mc,t,gc)}lookAt(t,e,n){const i=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Tn.crossVectors(n,Pe),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Tn.crossVectors(n,Pe)),Tn.normalize(),ts.crossVectors(Pe,Tn),i[0]=Tn.x,i[4]=ts.x,i[8]=Pe.x,i[1]=Tn.y,i[5]=ts.y,i[9]=Pe.y,i[2]=Tn.z,i[6]=ts.z,i[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],E=n[7],v=n[11],U=n[15],A=i[0],C=i[4],P=i[8],S=i[12],M=i[1],R=i[5],k=i[9],F=i[13],V=i[2],q=i[6],W=i[10],Z=i[14],G=i[3],it=i[7],ct=i[11],xt=i[15];return r[0]=a*A+o*M+l*V+c*G,r[4]=a*C+o*R+l*q+c*it,r[8]=a*P+o*k+l*W+c*ct,r[12]=a*S+o*F+l*Z+c*xt,r[1]=h*A+u*M+d*V+p*G,r[5]=h*C+u*R+d*q+p*it,r[9]=h*P+u*k+d*W+p*ct,r[13]=h*S+u*F+d*Z+p*xt,r[2]=g*A+_*M+m*V+f*G,r[6]=g*C+_*R+m*q+f*it,r[10]=g*P+_*k+m*W+f*ct,r[14]=g*S+_*F+m*Z+f*xt,r[3]=w*A+E*M+v*V+U*G,r[7]=w*C+E*R+v*q+U*it,r[11]=w*P+E*k+v*W+U*ct,r[15]=w*S+E*F+v*Z+U*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],w=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,U=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*w+n*E+i*v+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*C,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*C,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=U*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,w=l*c,E=l*h,v=l*u,U=n.x,A=n.y,C=n.z;return i[0]=(1-(_+f))*U,i[1]=(p+v)*U,i[2]=(g-E)*U,i[3]=0,i[4]=(p-v)*A,i[5]=(1-(d+f))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+E)*C,i[9]=(m-w)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const a=ii.set(i[4],i[5],i[6]).length(),o=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const c=1/r,h=1/a,u=1/o;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===fn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===bs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===fn)g=(a+r)*u,_=-2*u;else if(o===bs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new T,Ge=new te,mc=new T(0,0,0),gc=new T(1,1,1),Tn=new T,ts=new T,Pe=new T,Ba=new te,za=new mn;class Xe{constructor(t=0,e=0,n=0,i=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _c=0;const ka=new T,si=new mn,ln=new te,es=new T,Li=new T,vc=new T,xc=new mn,Ha=new T(1,0,0),Ga=new T(0,1,0),Va=new T(0,0,1),Wa={type:"added"},yc={type:"removed"},ri={type:"childadded",child:null},qs={type:"childremoved",child:null};class me extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new T,e=new Xe,n=new mn,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Lt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Li,es,this.up):ln.lookAt(es,Li,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),si.setFromRotationMatrix(ln),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wa),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yc),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wa),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,vc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new T(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new T,cn=new T,Xs=new T,hn=new T,ai=new T,oi=new T,qa=new T,Ys=new T,Ks=new T,Js=new T,Zs=new le,$s=new le,js=new le;class We{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ve.subVectors(t,e),i.cross(Ve);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ve.subVectors(i,e),cn.subVectors(n,e),Xs.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(cn),l=Ve.dot(Xs),c=cn.dot(cn),h=cn.dot(Xs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Zs.setScalar(0),$s.setScalar(0),js.setScalar(0),Zs.fromBufferAttribute(t,e),$s.fromBufferAttribute(t,n),js.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Zs,r.x),a.addScaledVector($s,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(t,e,n,i){return Ve.subVectors(n,e),cn.subVectors(t,e),Ve.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ve.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ai.subVectors(i,n),oi.subVectors(r,n),Ys.subVectors(t,n);const l=ai.dot(Ys),c=oi.dot(Ys);if(l<=0&&c<=0)return e.copy(n);Ks.subVectors(t,i);const h=ai.dot(Ks),u=oi.dot(Ks);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ai,a);Js.subVectors(t,r);const p=ai.dot(Js),g=oi.dot(Js);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(oi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return qa.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(qa,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=ic(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qs(a,r,t+1/3),this.g=Qs(a,r,t),this.b=Qs(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Yo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Wt.fromWorkingColorSpace(ve.copy(this),t),Math.round(xe(ve.r*255,0,255))*65536+Math.round(xe(ve.g*255,0,255))*256+Math.round(xe(ve.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,r=ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Ne){Wt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(ns);const n=Fs(wn.h,ns.h,e),i=Fs(wn.s,ns.s,e),r=Fs(wn.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Jt;Jt.NAMES=Yo;let Mc=0;class Ps extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Vi(),this.name="",this.blending=pi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ua extends Ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new T,is=new wt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class Ko extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jo extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sc=0;const Ue=new te,tr=new me,li=new T,Le=new Jn,Di=new Jn,fe=new T;class Ke extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vo(t)?Jo:Ko)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Le.min,Di.min),Le.expandByPoint(fe),fe.addVectors(Le.max,Di.max),Le.expandByPoint(fe)):(Le.expandByPoint(Di.min),Le.expandByPoint(Di.max))}Le.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(li.fromBufferAttribute(t,c),fe.add(li)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,u=new T,d=new wt,p=new wt,g=new wt,_=new T,m=new T;function f(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const M=w[P],R=M.start,k=M.count;for(let F=R,V=R+k;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new T,v=new T,U=new T,A=new T;function C(P){U.fromBufferAttribute(i,P),A.copy(U);const S=o[P];E.copy(S),E.sub(U.multiplyScalar(U.dot(S))).normalize(),v.crossVectors(A,S);const R=v.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,S=w.length;P<S;++P){const M=w[P],R=M.start,k=M.count;for(let F=R,V=R+k;F<V;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new te,Fn=new pc,ss=new Wi,Ya=new T,rs=new T,as=new T,os=new T,er=new T,ls=new T,Ka=new T,cs=new T;class kt extends me{constructor(t=new Ke,e=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(er.fromBufferAttribute(u,t),a?ls.addScaledVector(er,h):ls.addScaledVector(er.sub(e),h))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(ss.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(ss,Ya)===null||Fn.origin.distanceToSquared(Ya)>(t.far-t.near)**2))&&(Xa.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,U=E;v<U;v+=3){const A=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);i=hs(this,f,t,n,c,h,u,A,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=hs(this,a,t,n,c,h,u,w,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,U=E;v<U;v+=3){const A=v,C=v+1,P=v+2;i=hs(this,f,t,n,c,h,u,A,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,E=m+1,v=m+2;i=hs(this,a,t,n,c,h,u,w,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ec(s,t,e,n,i,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===gn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:s}}function hs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,as),s.getVertexPosition(c,os);const h=Ec(s,t,e,n,rs,as,os,Ka);if(h){const u=new T;We.getBarycoord(Ka,rs,as,os,u),i&&(h.uv=We.getInterpolatedAttribute(i,o,l,c,u,new wt)),r&&(h.uv1=We.getInterpolatedAttribute(r,o,l,c,u,new wt)),a&&(h.normal=We.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};We.getNormal(rs,as,os,d.normal),h.face=d,h.barycoord=u}return h}class we extends Ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(_,m,f,w,E,v,U,A,C,P,S){const M=v/C,R=U/P,k=v/2,F=U/2,V=A/2,q=C+1,W=P+1;let Z=0,G=0;const it=new T;for(let ct=0;ct<W;ct++){const xt=ct*R-F;for(let Ut=0;Ut<q;Ut++){const $t=Ut*M-k;it[_]=$t*w,it[m]=xt*E,it[f]=V,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[f]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ut/C),u.push(1-ct/P),Z+=1}}for(let ct=0;ct<P;ct++)for(let xt=0;xt<C;xt++){const Ut=d+xt+q*ct,$t=d+xt+q*(ct+1),Y=d+(xt+1)+q*(ct+1),tt=d+(xt+1)+q*ct;l.push(Ut,$t,tt),l.push($t,Y,tt),G+=6}o.addGroup(p,G,S),p+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(s){const t={};for(let e=0;e<s.length;e++){const n=Ei(s[e]);for(const i in n)t[i]=n[i]}return t}function Tc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zo(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const wc={clone:Ei,merge:Me};var bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Tc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new T,Ja=new wt,Za=new wt;class Fe extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Ja,Za),e.subVectors(Za,Ja)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,hi=1;class Cc extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(ci,hi,t,e);i.layers=this.layers,this.add(i);const r=new Fe(ci,hi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(ci,hi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ci,hi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ci,hi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ci,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jo extends Te{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rc extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new we(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Pn});r.uniforms.tEquirect.value=e;const a=new kt(i,r),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=tn),new Cc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const nr=new T,Pc=new T,Lc=new Lt;class kn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(Pc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lc.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Wi,us=new T;class Qo{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],w=i[13],E=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+g,v+w).normalize(),n[3].setComponents(l-a,d-h,m-g,v-w).normalize(),n[4].setComponents(l-o,d-u,m-_,v-E).normalize(),e===fn)n[5].setComponents(l+o,d+u,m+_,v+E).normalize();else if(e===bs)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Dc(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class qi extends Ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const w=f*d-a;for(let E=0;E<c;E++){const v=E*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const E=w+c*f,v=w+c*(f+1),U=w+1+c*(f+1),A=w+1+c*f;p.push(E,v,A),p.push(v,U,A)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ou=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Au=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ku=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,td=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,id=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Ic,alphahash_pars_fragment:Uc,alphamap_fragment:Nc,alphamap_pars_fragment:Fc,alphatest_fragment:Oc,alphatest_pars_fragment:Bc,aomap_fragment:zc,aomap_pars_fragment:kc,batching_pars_vertex:Hc,batching_vertex:Gc,begin_vertex:Vc,beginnormal_vertex:Wc,bsdfs:qc,iridescence_fragment:Xc,bumpmap_pars_fragment:Yc,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:Jc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:$c,color_fragment:jc,color_pars_fragment:Qc,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:hh,envmap_fragment:uh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:wh,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:xh,gradientmap_pars_fragment:yh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Th,lights_toon_fragment:bh,lights_toon_pars_fragment:Ah,lights_phong_fragment:Ch,lights_phong_pars_fragment:Rh,lights_physical_fragment:Ph,lights_physical_pars_fragment:Lh,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Hh,map_particle_pars_fragment:Gh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:qh,morphcolor_vertex:Xh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Jh,normal_fragment_begin:Zh,normal_fragment_maps:$h,normal_pars_fragment:jh,normal_pars_vertex:Qh,normal_vertex:tu,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:ru,opaque_fragment:au,packing:ou,premultiplied_alpha_fragment:lu,project_vertex:cu,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:du,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:pu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:_u,skinbase_vertex:vu,skinning_pars_vertex:xu,skinning_vertex:yu,skinnormal_vertex:Mu,specularmap_fragment:Su,specularmap_pars_fragment:Eu,tonemapping_fragment:Tu,tonemapping_pars_fragment:wu,transmission_fragment:bu,transmission_pars_fragment:Au,uv_pars_fragment:Cu,uv_pars_vertex:Ru,uv_vertex:Pu,worldpos_vertex:Lu,background_vert:Du,background_frag:Iu,backgroundCube_vert:Uu,backgroundCube_frag:Nu,cube_vert:Fu,cube_frag:Ou,depth_vert:Bu,depth_frag:zu,distanceRGBA_vert:ku,distanceRGBA_frag:Hu,equirect_vert:Gu,equirect_frag:Vu,linedashed_vert:Wu,linedashed_frag:qu,meshbasic_vert:Xu,meshbasic_frag:Yu,meshlambert_vert:Ku,meshlambert_frag:Ju,meshmatcap_vert:Zu,meshmatcap_frag:$u,meshnormal_vert:ju,meshnormal_frag:Qu,meshphong_vert:td,meshphong_frag:ed,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:sd,meshtoon_frag:rd,points_vert:ad,points_frag:od,shadow_vert:ld,shadow_frag:cd,sprite_vert:hd,sprite_frag:ud},et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Qe={basic:{uniforms:Me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Me([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Me([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Me([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Me([et.points,et.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Me([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Me([et.common,et.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Me([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Me([et.sprite,et.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Me([et.common,et.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Me([et.lights,et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Qe.physical={uniforms:Me([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const ds={r:0,b:0,g:0},Bn=new Xe,dd=new te;function fd(s,t,e,n,i,r,a){const o=new Jt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function _(w){let E=!1;const v=g(w);v===null?f(o,l):v&&v.isColor&&(f(v,1),E=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===Cs)?(h===void 0&&(h=new kt(new we(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ei(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(E.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dd.makeRotationFromEuler(Bn)),h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Zt,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kt(new qi(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ei(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,E){w.getRGB(ds,Zo(s)),n.buffers.color.setClear(ds.r,ds.g,ds.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:_,addToRenderList:m}}function pd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,R,k,F,V){let q=!1;const W=u(F,k,R);r!==W&&(r=W,c(r.object)),q=p(M,F,k,V),q&&g(M,F,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,R,k,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,R,k){const F=k.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[R.id];q===void 0&&(q={},V[R.id]=q);let W=q[F];return W===void 0&&(W=d(l()),q[F]=W),W}function d(M){const R=[],k=[],F=[];for(let V=0;V<e;V++)R[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,R,k,F){const V=r.attributes,q=R.attributes;let W=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const ct=V[G];let xt=q[G];if(xt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ct===void 0||ct.attribute!==xt||xt&&ct.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,R,k,F){const V={},q=R.attributes;let W=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let ct=q[G];ct===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const xt={};xt.attribute=ct,ct&&ct.data&&(xt.data=ct.data),V[G]=xt,W++}r.attributes=V,r.attributesNum=W,r.index=F}function _(){const M=r.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),V[M]!==R&&(s.vertexAttribDivisor(M,R),V[M]=R)}function w(){const M=r.newAttributes,R=r.enabledAttributes;for(let k=0,F=R.length;k<F;k++)R[k]!==M[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function E(M,R,k,F,V,q,W){W===!0?s.vertexAttribIPointer(M,R,k,V,q):s.vertexAttribPointer(M,R,k,F,V,q)}function v(M,R,k,F){_();const V=F.attributes,q=k.getAttributes(),W=R.defaultAttributeValues;for(const Z in q){const G=q[Z];if(G.location>=0){let it=V[Z];if(it===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ct=it.normalized,xt=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const $t=Ut.buffer,Y=Ut.type,tt=Ut.bytesPerElement,gt=Y===s.INT||Y===s.UNSIGNED_INT||it.gpuType===sa;if(it.isInterleavedBufferAttribute){const st=it.data,Tt=st.stride,Ct=it.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)f(G.location+Nt,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)m(G.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Nt=0;Nt<G.locationSize;Nt++)E(G.location+Nt,xt/G.locationSize,Y,ct,Tt*tt,(Ct+xt/G.locationSize*Nt)*tt,gt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)f(G.location+st,it.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)m(G.location+st);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let st=0;st<G.locationSize;st++)E(G.location+st,xt/G.locationSize,Y,ct,xt*tt,xt/G.locationSize*st*tt,gt)}}else if(W!==void 0){const ct=W[Z];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(G.location,ct);break;case 3:s.vertexAttrib3fv(G.location,ct);break;case 4:s.vertexAttrib4fv(G.location,ct);break;default:s.vertexAttrib1fv(G.location,ct)}}}}w()}function U(){P();for(const M in n){const R=n[M];for(const k in R){const F=R[k];for(const V in F)h(F[V].object),delete F[V];delete R[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const k in R){const F=R[k];for(const V in F)h(F[V].object),delete F[V];delete R[k]}delete n[M.id]}function C(M){for(const R in n){const k=n[R];if(k[M.id]===void 0)continue;const F=k[M.id];for(const V in F)h(F[V].object),delete F[V];delete k[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function md(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Oe&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!P)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:U,maxSamples:A}}function _d(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new kn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,E=w*4;let v=f.clippingState||null;l.value=v,v=h(g,d,E,p);for(let U=0;U!==E;++U)v[U]=e[U];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vd(s){let t=new WeakMap;function e(a,o){return o===Er?a.mapping=xi:o===Tr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Er||o===Tr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class el extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,$a=[.125,.215,.35,.446,.526,.582],Vn=20,ir=new el,ja=new Jt;let sr=null,rr=0,ar=0,or=!1;const Hn=(1+Math.sqrt(5))/2,ui=1/Hn,Qa=[new T(-Hn,ui,0),new T(Hn,ui,0),new T(-ui,0,Hn),new T(ui,0,Hn),new T(0,Hn,-ui),new T(0,Hn,ui),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class to{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sr,rr,ar),this._renderer.xr.enabled=or,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Gi,format:Oe,colorSpace:Kn,depthBuffer:!1},i=eo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(r)),this._blurMaterial=yd(r,t,e)}return i}_compileMaterial(t){const e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ja),h.toneMapping=Ln,h.autoClear=!1;const p=new ua({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new kt(new we,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ja),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;fs(i,w*E,f>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qa[(i-r-1)%Qa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let w=0;for(let C=0;C<Vn;++C){const P=C/_,S=Math.exp(-P*P/2);f.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[i],U=3*v*(i>E-fi?i-E+fi:0),A=4*(this._cubeSize-v);fs(e,U,A,3*v,2*v),l.setRenderTarget(e),l.render(u,ir)}}function xd(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+$a.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-fi?l=$a[a-s+fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(S,_*g*A),E.set(d,m*g*A);const M=[A,A,A,A,A,A];v.set(M,f*g*A)}const U=new Ke;U.setAttribute("position",new Be(w,_)),U.setAttribute("uv",new Be(E,m)),U.setAttribute("faceIndex",new Be(v,f)),t.push(U),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eo(s,t,e){const n=new Dn(s,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function yd(s,t,e){const n=new Float32Array(Vn),i=new T(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function no(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function io(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Md(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Er||l===Tr,h=l===xi||l===yi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new to(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new to(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ed(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let E=0,v=w.length;E<v;E+=3){const U=w[E+0],A=w[E+1],C=w[E+2];d.push(U,A,A,C,C,U)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,v=w.length/3-1;E<v;E+=3){const U=E+0,A=E+1,C=E+2;d.push(U,A,A,C,C,U)}}else return;const m=new(Vo(d)?Jo:Ko)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Td(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bd(s,t,e){const n=new WeakMap,i=new le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=o.attributes.position.count*v,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const C=new Float32Array(U*A*4*u),P=new qo(C,U,A,u);P.type=en,P.needsUpdate=!0;const S=v*4;for(let R=0;R<u;R++){const k=f[R],F=w[R],V=E[R],q=U*A*4*R;for(let W=0;W<k.count;W++){const Z=W*S;g===!0&&(i.fromBufferAttribute(k,W),C[q+Z+0]=i.x,C[q+Z+1]=i.y,C[q+Z+2]=i.z,C[q+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,W),C[q+Z+4]=i.x,C[q+Z+5]=i.y,C[q+Z+6]=i.z,C[q+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,W),C[q+Z+8]=i.x,C[q+Z+9]=i.y,C[q+Z+10]=i.z,C[q+Z+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new wt(U,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ad(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class fa extends Te{constructor(t,e,n,i,r,a,o,l,c,h=mi){if(h!==mi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=Xn),n===void 0&&h===Si&&(n=Mi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nl=new Te,so=new fa(1,1),il=new qo,sl=new dc,rl=new jo,ro=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ro[i];if(r===void 0&&(r=new Float32Array(i),ro[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ls(s,t){let e=ao[t];e===void 0&&(e=new Int32Array(t),ao[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function Pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function Ld(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function Dd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;co.set(n),s.uniformMatrix2fv(this.addr,!1,co),de(e,n)}}function Id(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;lo.set(n),s.uniformMatrix3fv(this.addr,!1,lo),de(e,n)}}function Ud(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;oo.set(n),s.uniformMatrix4fv(this.addr,!1,oo),de(e,n)}}function Nd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function Od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function zd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function Hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function Gd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function Vd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(so.compareFunction=Go,r=so):r=nl,e.setTexture2D(t||r,i)}function Wd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sl,i)}function qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rl,i)}function Xd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||il,i)}function Yd(s){switch(s){case 5126:return Cd;case 35664:return Rd;case 35665:return Pd;case 35666:return Ld;case 35674:return Dd;case 35675:return Id;case 35676:return Ud;case 5124:case 35670:return Nd;case 35667:case 35671:return Fd;case 35668:case 35672:return Od;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return kd;case 36295:return Hd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Xd}}function Kd(s,t){s.uniform1fv(this.addr,t)}function Jd(s,t){const e=wi(t,this.size,2);s.uniform2fv(this.addr,e)}function Zd(s,t){const e=wi(t,this.size,3);s.uniform3fv(this.addr,e)}function $d(s,t){const e=wi(t,this.size,4);s.uniform4fv(this.addr,e)}function jd(s,t){const e=wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qd(s,t){const e=wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tf(s,t){const e=wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ef(s,t){s.uniform1iv(this.addr,t)}function nf(s,t){s.uniform2iv(this.addr,t)}function sf(s,t){s.uniform3iv(this.addr,t)}function rf(s,t){s.uniform4iv(this.addr,t)}function af(s,t){s.uniform1uiv(this.addr,t)}function of(s,t){s.uniform2uiv(this.addr,t)}function lf(s,t){s.uniform3uiv(this.addr,t)}function cf(s,t){s.uniform4uiv(this.addr,t)}function hf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||nl,r[a])}function uf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||sl,r[a])}function df(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||rl,r[a])}function ff(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||il,r[a])}function pf(s){switch(s){case 5126:return Kd;case 35664:return Jd;case 35665:return Zd;case 35666:return $d;case 35674:return jd;case 35675:return Qd;case 35676:return tf;case 5124:case 35670:return ef;case 35667:case 35671:return nf;case 35668:case 35672:return sf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}class mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yd(e.type)}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pf(e.type)}}class _f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const lr=/(\w+)(\])?(\[|\.)?/g;function ho(s,t){s.seq.push(t),s.map[t.id]=t}function vf(s,t,e){const n=s.name,i=n.length;for(lr.lastIndex=0;;){const r=lr.exec(n),a=lr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ho(e,c===void 0?new mf(o,s,t):new gf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new _f(o),ho(e,u)),e=u}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);vf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function uo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const xf=37297;let yf=0;function Mf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fo=new Lt;function Sf(s){Wt._getMatrix(fo,Wt.workingColorSpace,s);const t=`mat3( ${fo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Rs:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function po(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Mf(s.getShaderSource(t),a)}else return i}function Ef(s,t){const e=Sf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tf(s,t){let e;switch(t){case Bl:e="Linear";break;case zl:e="Reinhard";break;case kl:e="Cineon";break;case Hl:e="ACESFilmic";break;case Vl:e="AgX";break;case Wl:e="Neutral";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new T;function wf(){Wt.getLuminanceCoefficients(ps);const s=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Af(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Oi(s){return s!==""}function mo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function go(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(s){return s.replace(Rf,Lf)}const Pf=new Map;function Lf(s,t){let e=It[t];if(e===void 0){const n=Pf.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _o(s){return s.replace(Df,If)}function If(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Uf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Nf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case yi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Of(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Ol:t="ENVMAP_BLENDING_ADD";break}return t}function Bf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Uf(e),c=Nf(e),h=Ff(e),u=Of(e),d=Bf(e),p=bf(e),g=Af(r),_=i.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(m=[vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?It.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Ef("linearToOutputTexel",e.outputColorSpace),wf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=ta(a),a=mo(a,e),a=go(a,e),o=ta(o),o=mo(o,e),o=go(o,e),a=_o(a),o=_o(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+m+a,v=w+f+o,U=uo(i,i.VERTEX_SHADER,E),A=uo(i,i.FRAGMENT_SHADER,v);i.attachShader(_,U),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(U).trim(),V=i.getShaderInfoLog(A).trim();let q=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,A);else{const Z=po(i,U,"vertex"),G=po(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Z+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(W=!1);W&&(R.diagnostics={runnable:q,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(U),i.deleteShader(A),P=new Ss(i,_),S=Cf(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,xf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let kf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gf(t),e.set(t,n)),n}}class Gf{constructor(t){this.id=kf++,this.code=t,this.usedTimes=0}}function Vf(s,t,e,n,i,r,a){const o=new Xo,l=new Hf,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,k,F){const V=k.fog,q=F.geometry,W=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),G=Z&&Z.mapping===Cs?Z.image.height:null,it=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=ct!==void 0?ct.length:0;let Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let $t,Y,tt,gt;if(it){const Kt=Qe[it];$t=Kt.vertexShader,Y=Kt.fragmentShader}else $t=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const st=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,se=!!S.map,Ht=!!S.matcap,ae=!!Z,N=!!S.aoMap,De=!!S.lightMap,Ot=!!S.bumpMap,Bt=!!S.normalMap,St=!!S.displacementMap,ee=!!S.emissiveMap,Mt=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,$=S.iridescence>0,X=S.sheen>0,_t=S.transmission>0,rt=x&&!!S.anisotropyMap,ht=O&&!!S.clearcoatMap,Gt=O&&!!S.clearcoatNormalMap,j=O&&!!S.clearcoatRoughnessMap,ut=$&&!!S.iridescenceMap,Et=$&&!!S.iridescenceThicknessMap,bt=X&&!!S.sheenColorMap,dt=X&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Dt=!!S.specularColorMap,jt=!!S.specularIntensityMap,L=_t&&!!S.transmissionMap,nt=_t&&!!S.thicknessMap,H=!!S.gradientMap,J=!!S.alphaMap,lt=S.alphaTest>0,at=!!S.alphaHash,Rt=!!S.extensions;let re=Ln;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=s.toneMapping);const ge={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Kn,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:Ht,envMap:ae,envMapMode:ae&&Z.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:De,bumpMap:Ot,normalMap:Bt,displacementMap:d&&St,emissiveMap:ee,normalMapObjectSpace:Bt&&S.normalMapType===Jl,normalMapTangentSpace:Bt&&S.normalMapType===Kl,metalnessMap:Mt,roughnessMap:b,anisotropy:x,anisotropyMap:rt,clearcoat:O,clearcoatMap:ht,clearcoatNormalMap:Gt,clearcoatRoughnessMap:j,dispersion:K,iridescence:$,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:bt,sheenRoughnessMap:dt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:jt,transmission:_t,transmissionMap:L,thicknessMap:nt,gradientMap:H,opaque:S.transparent===!1&&S.blending===pi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:lt,alphaHash:at,combine:S.combine,mapUv:se&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:De&&_(S.lightMap.channel),bumpMapUv:Ot&&_(S.bumpMap.channel),normalMapUv:Bt&&_(S.normalMap.channel),displacementMapUv:St&&_(S.displacementMap.channel),emissiveMapUv:ee&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(S.sheenRoughnessMap.channel),specularMapUv:zt&&_(S.specularMap.channel),specularColorMapUv:Dt&&_(S.specularColorMap.channel),specularIntensityMapUv:jt&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:nt&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Bt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(se||J),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Zt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Zt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Ce,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(M,S),E(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let R;if(M){const k=Qe[M];R=wc.clone(k.uniforms)}else R=S.uniforms;return R}function U(S,M){let R;for(let k=0,F=h.length;k<F;k++){const V=h[k];if(V.cacheKey===M){R=V,++R.usedTimes;break}}return R===void 0&&(R=new zf(s,M,S,r),h.push(R)),R}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:U,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Wf(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||qf),n.length>1&&n.sort(d||xo),i.length>1&&i.sort(d||xo)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Xf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new yo,s.set(n,[a])):i>=r.length?(a=new yo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Yf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Jt};break;case"SpotLight":e={position:new T,direction:new T,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Kf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jf=0;function Zf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $f(s){const t=new Yf,e=Kf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,E=0,v=0,U=0,A=0,C=0;c.sort(Zf);for(let S=0,M=c.length;S<M;S++){const R=c[S],k=R.color,F=R.intensity,V=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);C++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(k).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const Z=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,Z.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(k).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Z=R.shadow,G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==U||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=U,P.numLightProbes=C,n.version=Jf++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Mo(s){const t=new $f(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jf(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Mo(s),t.set(i,[o])):r>=a.length?(o=new Mo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qf extends Ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tp extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ip(s,t,e){let n=new Qo;const i=new wt,r=new wt,a=new le,o=new Qf({depthPacking:Yl}),l=new tp,c={},h=e.maxTextureSize,u={[gn]:Ce,[Ce]:gn,[dn]:dn},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:ep,fragmentShader:np}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let f=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Pn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==un&&this.type===un,V=f===un&&this.type!==un;for(let q=0,W=A.length;q<W;q++){const Z=A[q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const it=G.getFrameExtents();if(i.multiply(it),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||F===!0||V===!0){const xt=this.type!==un?{minFilter:Ee,magFilter:Ee}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(i.x,i.y,xt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ct=G.getViewportCount();for(let xt=0;xt<ct;xt++){const Ut=G.getViewport(xt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),k.viewport(a),G.updateMatrices(Z,xt),n=G.getFrustum(),v(C,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===un&&w(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,R)};function w(A,C){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,P,p,_,null)}function E(A,C,P,S){let M=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,F=C.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let q=V[F];q===void 0&&(q=M.clone(),V[F]=q,C.addEventListener("dispose",U)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,S===un?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=P}return M}function v(A,C,P,S,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const q=F.groups;for(let W=0,Z=q.length;W<Z;W++){const G=q[W],it=V[G.materialIndex];if(it&&it.visible){const ct=E(A,it,S,M);A.onBeforeShadow(s,A,C,P,F,ct,G),s.renderBufferDirect(P,null,F,ct,A,G),A.onAfterShadow(s,A,C,P,F,ct,G)}}}else if(V.visible){const q=E(A,V,S,M);A.onBeforeShadow(s,A,C,P,F,q,null),s.renderBufferDirect(P,null,F,q,A,null),A.onAfterShadow(s,A,C,P,F,q,null)}}const k=A.children;for(let F=0,V=k.length;F<V;F++)v(k[F],C,P,S,M)}function U(A){A.target.removeEventListener("dispose",U);for(const P in c){const S=c[P],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const sp={[gr]:_r,[vr]:Mr,[xr]:Sr,[vi]:yr,[_r]:gr,[Mr]:vr,[Sr]:xr,[yr]:vi};function rp(s,t){function e(){let L=!1;const nt=new le;let H=null;const J=new le(0,0,0,0);return{setMask:function(lt){H!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),H=lt)},setLocked:function(lt){L=lt},setClear:function(lt,at,Rt,re,ge){ge===!0&&(lt*=re,at*=re,Rt*=re),nt.set(lt,at,Rt,re),J.equals(nt)===!1&&(s.clearColor(lt,at,Rt,re),J.copy(nt))},reset:function(){L=!1,H=null,J.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,H=null,J=null,lt=null;return{setReversed:function(at){if(nt!==at){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const re=lt;lt=null,this.setClear(re)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(at){H!==at&&!L&&(s.depthMask(at),H=at)},setFunc:function(at){if(nt&&(at=sp[at]),J!==at){switch(at){case gr:s.depthFunc(s.NEVER);break;case _r:s.depthFunc(s.ALWAYS);break;case vr:s.depthFunc(s.LESS);break;case vi:s.depthFunc(s.LEQUAL);break;case xr:s.depthFunc(s.EQUAL);break;case yr:s.depthFunc(s.GEQUAL);break;case Mr:s.depthFunc(s.GREATER);break;case Sr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=at}},setLocked:function(at){L=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),s.clearDepth(at),lt=at)},reset:function(){L=!1,H=null,J=null,lt=null,nt=!1}}}function i(){let L=!1,nt=null,H=null,J=null,lt=null,at=null,Rt=null,re=null,ge=null;return{setTest:function(Kt){L||(Kt?st(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!L&&(s.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,ze,sn){(H!==Kt||J!==ze||lt!==sn)&&(s.stencilFunc(Kt,ze,sn),H=Kt,J=ze,lt=sn)},setOp:function(Kt,ze,sn){(at!==Kt||Rt!==ze||re!==sn)&&(s.stencilOp(Kt,ze,sn),at=Kt,Rt=ze,re=sn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ge!==Kt&&(s.clearStencil(Kt),ge=Kt)},reset:function(){L=!1,nt=null,H=null,J=null,lt=null,at=null,Rt=null,re=null,ge=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,E=null,v=null,U=null,A=null,C=new Jt(0,0,0),P=0,S=!1,M=null,R=null,k=null,F=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Z>=2);let it=null,ct={};const xt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),$t=new le().fromArray(xt),Y=new le().fromArray(Ut);function tt(L,nt,H,J){const lt=new Uint8Array(4),at=s.createTexture();s.bindTexture(L,at),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<H;Rt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(nt+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return at}const gt={};gt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(s.DEPTH_TEST),a.setFunc(vi),Ot(!1),Bt(Ta),st(s.CULL_FACE),N(Pn);function st(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Tt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ct(L,nt){return u[L]!==nt?(s.bindFramebuffer(L,nt),u[L]=nt,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Nt(L,nt){let H=p,J=!1;if(L){H=d.get(nt),H===void 0&&(H=[],d.set(nt,H));const lt=L.textures;if(H.length!==lt.length||H[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Rt=lt.length;at<Rt;at++)H[at]=s.COLOR_ATTACHMENT0+at;H.length=lt.length,J=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,J=!0);J&&s.drawBuffers(H)}function se(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Ht={[Gn]:s.FUNC_ADD,[xl]:s.FUNC_SUBTRACT,[yl]:s.FUNC_REVERSE_SUBTRACT};Ht[Ml]=s.MIN,Ht[Sl]=s.MAX;const ae={[El]:s.ZERO,[Tl]:s.ONE,[wl]:s.SRC_COLOR,[pr]:s.SRC_ALPHA,[Ll]:s.SRC_ALPHA_SATURATE,[Rl]:s.DST_COLOR,[Al]:s.DST_ALPHA,[bl]:s.ONE_MINUS_SRC_COLOR,[mr]:s.ONE_MINUS_SRC_ALPHA,[Pl]:s.ONE_MINUS_DST_COLOR,[Cl]:s.ONE_MINUS_DST_ALPHA,[Dl]:s.CONSTANT_COLOR,[Il]:s.ONE_MINUS_CONSTANT_COLOR,[Ul]:s.CONSTANT_ALPHA,[Nl]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,nt,H,J,lt,at,Rt,re,ge,Kt){if(L===Pn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(st(s.BLEND),_=!0),L!==vl){if(L!==m||Kt!==S){if((f!==Gn||v!==Gn)&&(s.blendEquation(s.FUNC_ADD),f=Gn,v=Gn),Kt)switch(L){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wa:s.blendFunc(s.ONE,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Aa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,E=null,U=null,A=null,C.set(0,0,0),P=0,m=L,S=Kt}return}lt=lt||nt,at=at||H,Rt=Rt||J,(nt!==f||lt!==v)&&(s.blendEquationSeparate(Ht[nt],Ht[lt]),f=nt,v=lt),(H!==w||J!==E||at!==U||Rt!==A)&&(s.blendFuncSeparate(ae[H],ae[J],ae[at],ae[Rt]),w=H,E=J,U=at,A=Rt),(re.equals(C)===!1||ge!==P)&&(s.blendColor(re.r,re.g,re.b,ge),C.copy(re),P=ge),m=L,S=!1}function De(L,nt){L.side===dn?Tt(s.CULL_FACE):st(s.CULL_FACE);let H=L.side===Ce;nt&&(H=!H),Ot(H),L.blending===pi&&L.transparent===!1?N(Pn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function Bt(L){L!==ml?(st(s.CULL_FACE),L!==R&&(L===Ta?s.cullFace(s.BACK):L===gl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),R=L}function St(L){L!==k&&(W&&s.lineWidth(L),k=L)}function ee(L,nt,H){L?(st(s.POLYGON_OFFSET_FILL),(F!==nt||V!==H)&&(s.polygonOffset(nt,H),F=nt,V=H)):Tt(s.POLYGON_OFFSET_FILL)}function Mt(L){L?st(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function b(L){L===void 0&&(L=s.TEXTURE0+q-1),it!==L&&(s.activeTexture(L),it=L)}function x(L,nt,H){H===void 0&&(it===null?H=s.TEXTURE0+q-1:H=it);let J=ct[H];J===void 0&&(J={type:void 0,texture:void 0},ct[H]=J),(J.type!==L||J.texture!==nt)&&(it!==H&&(s.activeTexture(H),it=H),s.bindTexture(L,nt||gt[L]),J.type=L,J.texture=nt)}function O(){const L=ct[it];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){$t.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function dt(L){Y.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function zt(L,nt){let H=c.get(nt);H===void 0&&(H=new WeakMap,c.set(nt,H));let J=H.get(L);J===void 0&&(J=s.getUniformBlockIndex(nt,L.name),H.set(L,J))}function Dt(L,nt){const J=c.get(nt).get(L);l.get(nt)!==J&&(s.uniformBlockBinding(nt,J,L.__bindingPointIndex),l.set(nt,J))}function jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,ct={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,E=null,v=null,U=null,A=null,C=new Jt(0,0,0),P=0,S=!1,M=null,R=null,k=null,F=null,V=null,$t.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Tt,bindFramebuffer:Ct,drawBuffers:Nt,useProgram:se,setBlending:N,setMaterial:De,setFlipSided:Ot,setCullFace:Bt,setLineWidth:St,setPolygonOffset:ee,setScissorTest:Mt,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:ut,texImage3D:Et,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Gt,texStorage3D:j,texSubImage2D:X,texSubImage3D:_t,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:bt,viewport:dt,reset:jt}}function So(s,t,e,n){const i=ap(n);switch(e){case Fo:return s*t;case Bo:return s*t;case zo:return s*t*2;case oa:return s*t/i.components*i.byteLength;case la:return s*t/i.components*i.byteLength;case ko:return s*t*2/i.components*i.byteLength;case ca:return s*t*2/i.components*i.byteLength;case Oo:return s*t*3/i.components*i.byteLength;case Oe:return s*t*4/i.components*i.byteLength;case ha:return s*t*4/i.components*i.byteLength;case _s:case vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xs:case ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Pr:return Math.max(s,16)*Math.max(t,8)/4;case Ar:case Rr:return Math.max(s,8)*Math.max(t,8)/2;case Lr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ms:case Kr:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ho:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $r:case jr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(s){switch(s){case _n:case Io:return{byteLength:1,components:1};case ki:case Uo:case Gi:return{byteLength:2,components:1};case ra:case aa:return{byteLength:2,components:4};case Xn:case sa:case en:return{byteLength:4,components:1};case No:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function op(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):As("canvas")}function _(b,x,O){let K=1;const $=Mt(b);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(K*$.width),_t=Math.floor(K*$.height);u===void 0&&(u=g(X,_t));const rt=x?g(X,_t):u;return rt.width=X,rt.height=_t,rt.getContext("2d").drawImage(b,0,0,X,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+_t+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,x,O,K,$=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),x===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),x===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),x===s.RGBA){const _t=$?Rs:Wt.getTransfer(K);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=_t===Zt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(b,x){let O;return b?x===null||x===Xn||x===Mi?O=s.DEPTH24_STENCIL8:x===en?O=s.DEPTH32F_STENCIL8:x===ki&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Mi?O=s.DEPTH_COMPONENT24:x===en?O=s.DEPTH_COMPONENT32F:x===ki&&(O=s.DEPTH_COMPONENT16),O}function U(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ee&&b.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),M(x)}function P(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,K=d.get(O);if(K){const $=K[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(b),Object.keys(K).length===0&&d.delete(O)}n.remove(b)}function S(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const O=b.source,K=d.get(O);delete K[x.__cacheKey],a.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let $=0;$<x.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[K][$]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,$=O.length;K<$;K++){const X=n.get(O[K]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(b)}let R=0;function k(){R=0}function F(){const b=R;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),R+=1,b}function V(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const O=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,x);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function W(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function G(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){tt(O,b,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const it={[wr]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},ct={[Ee]:s.NEAREST,[ql]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Us]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},xt={[Zl]:s.NEVER,[nc]:s.ALWAYS,[$l]:s.LESS,[Go]:s.LEQUAL,[jl]:s.EQUAL,[ec]:s.GEQUAL,[Ql]:s.GREATER,[tc]:s.NOTEQUAL};function Ut(b,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Us||x.magFilter===Ki||x.magFilter===qn||x.minFilter===tn||x.minFilter===Us||x.minFilter===Ki||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,it[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,it[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,it[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ct[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ee||x.minFilter!==Ki&&x.minFilter!==qn||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const X=V(x);if(X!==b.__cacheKey){$[X]===void 0&&($[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[X].usedTimes++;const _t=$[b.__cacheKey];_t!==void 0&&($[b.__cacheKey].usedTimes--,_t.usedTimes===0&&S(x)),b.__cacheKey=X,b.__webglTexture=$[X].texture}return O}function Y(b,x,O){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const $=$t(b,x),X=x.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+O);const _t=n.get(X);if(X.version!==_t.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const rt=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===Rn?null:Wt.getPrimaries(x.colorSpace),Gt=x.colorSpace===Rn||rt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let j=_(x.image,!1,i.maxTextureSize);j=ee(x,j);const ut=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let bt=E(x.internalFormat,ut,Et,x.colorSpace,x.isVideoTexture);Ut(K,x);let dt;const zt=x.mipmaps,Dt=x.isVideoTexture!==!0,jt=_t.__version===void 0||$===!0,L=X.dataReady,nt=U(x,j);if(x.isDepthTexture)bt=v(x.format===Si,x.type),jt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,bt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,bt,j.width,j.height,0,ut,Et,null));else if(x.isDataTexture)if(zt.length>0){Dt&&jt&&e.texStorage2D(s.TEXTURE_2D,nt,bt,zt[0].width,zt[0].height);for(let H=0,J=zt.length;H<J;H++)dt=zt[H],Dt?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(s.TEXTURE_2D,H,bt,dt.width,dt.height,0,ut,Et,dt.data);x.generateMipmaps=!1}else Dt?(jt&&e.texStorage2D(s.TEXTURE_2D,nt,bt,j.width,j.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,ut,Et,j.data)):e.texImage2D(s.TEXTURE_2D,0,bt,j.width,j.height,0,ut,Et,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,bt,zt[0].width,zt[0].height,j.depth);for(let H=0,J=zt.length;H<J;H++)if(dt=zt[H],x.format!==Oe)if(ut!==null)if(Dt){if(L)if(x.layerUpdates.size>0){const lt=So(dt.width,dt.height,x.format,x.type);for(const at of x.layerUpdates){const Rt=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,at,dt.width,dt.height,1,ut,Rt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,j.depth,ut,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,bt,dt.width,dt.height,j.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,j.depth,ut,Et,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,bt,dt.width,dt.height,j.depth,0,ut,Et,dt.data)}else{Dt&&jt&&e.texStorage2D(s.TEXTURE_2D,nt,bt,zt[0].width,zt[0].height);for(let H=0,J=zt.length;H<J;H++)dt=zt[H],x.format!==Oe?ut!==null?Dt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(s.TEXTURE_2D,H,bt,dt.width,dt.height,0,ut,Et,dt.data)}else if(x.isDataArrayTexture)if(Dt){if(jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,bt,j.width,j.height,j.depth),L)if(x.layerUpdates.size>0){const H=So(j.width,j.height,x.format,x.type);for(const J of x.layerUpdates){const lt=j.data.subarray(J*H/j.data.BYTES_PER_ELEMENT,(J+1)*H/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,ut,Et,lt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,Et,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,j.width,j.height,j.depth,0,ut,Et,j.data);else if(x.isData3DTexture)Dt?(jt&&e.texStorage3D(s.TEXTURE_3D,nt,bt,j.width,j.height,j.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,Et,j.data)):e.texImage3D(s.TEXTURE_3D,0,bt,j.width,j.height,j.depth,0,ut,Et,j.data);else if(x.isFramebufferTexture){if(jt)if(Dt)e.texStorage2D(s.TEXTURE_2D,nt,bt,j.width,j.height);else{let H=j.width,J=j.height;for(let lt=0;lt<nt;lt++)e.texImage2D(s.TEXTURE_2D,lt,bt,H,J,0,ut,Et,null),H>>=1,J>>=1}}else if(zt.length>0){if(Dt&&jt){const H=Mt(zt[0]);e.texStorage2D(s.TEXTURE_2D,nt,bt,H.width,H.height)}for(let H=0,J=zt.length;H<J;H++)dt=zt[H],Dt?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ut,Et,dt):e.texImage2D(s.TEXTURE_2D,H,bt,ut,Et,dt);x.generateMipmaps=!1}else if(Dt){if(jt){const H=Mt(j);e.texStorage2D(s.TEXTURE_2D,nt,bt,H.width,H.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Et,j)}else e.texImage2D(s.TEXTURE_2D,0,bt,ut,Et,j);m(x)&&f(K),_t.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function tt(b,x,O){if(x.image.length!==6)return;const K=$t(b,x),$=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const X=n.get($);if($.version!==X.__version||K===!0){e.activeTexture(s.TEXTURE0+O);const _t=Wt.getPrimaries(Wt.workingColorSpace),rt=x.colorSpace===Rn?null:Wt.getPrimaries(x.colorSpace),ht=x.colorSpace===Rn||_t===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let J=0;J<6;J++)!Gt&&!j?ut[J]=_(x.image[J],!0,i.maxCubemapSize):ut[J]=j?x.image[J].image:x.image[J],ut[J]=ee(x,ut[J]);const Et=ut[0],bt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),zt=E(x.internalFormat,bt,dt,x.colorSpace),Dt=x.isVideoTexture!==!0,jt=X.__version===void 0||K===!0,L=$.dataReady;let nt=U(x,Et);Ut(s.TEXTURE_CUBE_MAP,x);let H;if(Gt){Dt&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,zt,Et.width,Et.height);for(let J=0;J<6;J++){H=ut[J].mipmaps;for(let lt=0;lt<H.length;lt++){const at=H[lt];x.format!==Oe?bt!==null?Dt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,at.width,at.height,bt,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,at.width,at.height,bt,dt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,zt,at.width,at.height,0,bt,dt,at.data)}}}else{if(H=x.mipmaps,Dt&&jt){H.length>0&&nt++;const J=Mt(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,zt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Dt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ut[J].width,ut[J].height,bt,dt,ut[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,ut[J].width,ut[J].height,0,bt,dt,ut[J].data);for(let lt=0;lt<H.length;lt++){const Rt=H[lt].image[J].image;Dt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,Rt.width,Rt.height,bt,dt,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,zt,Rt.width,Rt.height,0,bt,dt,Rt.data)}}else{Dt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt,dt,ut[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,bt,dt,ut[J]);for(let lt=0;lt<H.length;lt++){const at=H[lt];Dt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,bt,dt,at.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,zt,bt,dt,at.image[J])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),X.__version=$.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function gt(b,x,O,K,$,X){const _t=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),ht=E(O.internalFormat,_t,rt,O.colorSpace),Gt=n.get(x),j=n.get(O);if(j.__renderTarget=x,!Gt.__hasExternalTextures){const ut=Math.max(1,x.width>>X),Et=Math.max(1,x.height>>X);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,X,ht,ut,Et,x.depth,0,_t,rt,null):e.texImage2D($,X,ht,ut,Et,0,_t,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,j.__webglTexture,0,Ot(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,j.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(b,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){const K=x.depthTexture,$=K&&K.isDepthTexture?K.type:null,X=v(x.stencilBuffer,$),_t=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Ot(x);Bt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,X,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,X,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,X,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,b)}else{const K=x.textures;for(let $=0;$<K.length;$++){const X=K[$],_t=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ht=E(X.internalFormat,_t,rt,X.colorSpace),Gt=Ot(x);O&&Bt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,ht,x.width,x.height):Bt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,ht,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ht,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const $=K.__webglTexture,X=Ot(x);if(x.depthTexture.format===mi)Bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(x.depthTexture.format===Si)Bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=K}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=s.createRenderbuffer(),st(x.__webglDepthbuffer[K],b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),st(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(b,x,O){const K=n.get(b);x!==void 0&&gt(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ct(b)}function se(b){const x=b.texture,O=n.get(b),K=n.get(x);b.addEventListener("dispose",C);const $=b.textures,X=b.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)O.__webglFramebuffer[rt][ht]=s.createFramebuffer()}else O.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)O.__webglFramebuffer[rt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(_t)for(let rt=0,ht=$.length;rt<ht;rt++){const Gt=n.get($[rt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Bt(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const ht=$[rt];O.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const Gt=r.convert(ht.format,ht.colorSpace),j=r.convert(ht.type),ut=E(ht.internalFormat,Gt,j,ht.colorSpace,b.isXRRenderTarget===!0),Et=Ot(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),st(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)gt(O.__webglFramebuffer[rt][ht],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else gt(O.__webglFramebuffer[rt],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let rt=0,ht=$.length;rt<ht;rt++){const Gt=$[rt],j=n.get(Gt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),Ut(s.TEXTURE_2D,Gt),gt(O.__webglFramebuffer,b,Gt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Gt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Ut(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)gt(O.__webglFramebuffer[ht],b,x,s.COLOR_ATTACHMENT0,rt,ht);else gt(O.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,rt,0);m(x)&&f(rt),e.unbindTexture()}b.depthBuffer&&Ct(b)}function Ht(b){const x=b.textures;for(let O=0,K=x.length;O<K;O++){const $=x[O];if(m($)){const X=w(b),_t=n.get($).__webglTexture;e.bindTexture(X,_t),f(X),e.unbindTexture()}}}const ae=[],N=[];function De(b){if(b.samples>0){if(Bt(b)===!1){const x=b.textures,O=b.width,K=b.height;let $=s.COLOR_BUFFER_BIT;const X=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(b),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=n.get(x[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,$,s.NEAREST),l===!0&&(ae.length=0,N.length=0,ae.push(s.COLOR_ATTACHMENT0+ht),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ae.push(X),N.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ot(b){return Math.min(i.maxSamples,b.samples)}function Bt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ee(b,x){const O=b.colorSpace,K=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Kn&&O!==Rn&&(Wt.getTransfer(O)===Zt?(K!==Oe||$!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Bt}function lp(s,t){function e(n,i=Rn){let r;const a=Wt.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===No)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return s.BYTE;if(n===Uo)return s.SHORT;if(n===ki)return s.UNSIGNED_SHORT;if(n===sa)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===Fo)return s.ALPHA;if(n===Oo)return s.RGB;if(n===Oe)return s.RGBA;if(n===Bo)return s.LUMINANCE;if(n===zo)return s.LUMINANCE_ALPHA;if(n===mi)return s.DEPTH_COMPONENT;if(n===Si)return s.DEPTH_STENCIL;if(n===oa)return s.RED;if(n===la)return s.RED_INTEGER;if(n===ko)return s.RG;if(n===ca)return s.RG_INTEGER;if(n===ha)return s.RGBA_INTEGER;if(n===_s||n===vs||n===xs||n===ys)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===Cr||n===Rr||n===Pr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Dr||n===Ir)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Dr)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Hr||n===Gr||n===Vr||n===Wr||n===qr||n===Xr||n===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ur)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===Kr||n===Jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ms)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Zr||n===$r||n===jr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ms)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class cp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ft extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:up,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pp extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new fp,m=e.getContextAttributes();let f=null,w=null;const E=[],v=[],U=new wt;let A=null;const C=new Fe;C.viewport=new le;const P=new Fe;P.viewport=new le;const S=[C,P],M=new cp;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=E[Y];return tt===void 0&&(tt=new cr,E[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=E[Y];return tt===void 0&&(tt=new cr,E[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=E[Y];return tt===void 0&&(tt=new cr,E[Y]=tt),tt.getHandSpace()};function F(Y){const tt=v.indexOf(Y.inputSource);if(tt===-1)return;const gt=E[tt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<E.length;Y++){const tt=v[Y];tt!==null&&(v[Y]=null,E[Y].disconnect(tt))}R=null,k=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,w=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Dn(p.framebufferWidth,p.framebufferHeight,{format:Oe,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Si:mi,gt=m.stencil?Mi:Xn);const Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Dn(d.textureWidth,d.textureHeight,{format:Oe,type:_n,depthTexture:new fa(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let tt=0;tt<Y.removed.length;tt++){const gt=Y.removed[tt],st=v.indexOf(gt);st>=0&&(v[st]=null,E[st].disconnect(gt))}for(let tt=0;tt<Y.added.length;tt++){const gt=Y.added[tt];let st=v.indexOf(gt);if(st===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=v.length){v.push(gt),st=Ct;break}else if(v[Ct]===null){v[Ct]=gt,st=Ct;break}if(st===-1)break}const Tt=E[st];Tt&&Tt.connect(gt)}}const W=new T,Z=new T;function G(Y,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const st=W.distanceTo(Z),Tt=tt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Nt=Tt[14]/(Tt[10]-1),se=Tt[14]/(Tt[10]+1),Ht=(Tt[9]+1)/Tt[5],ae=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],De=(Ct[8]+1)/Ct[0],Ot=Nt*N,Bt=Nt*De,St=st/(-N+De),ee=St*-N;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Mt=Nt+St,b=se+St,x=Ot-ee,O=Bt+(st-ee),K=Ht*se/b*Mt,$=ae*se/b*Mt;Y.projectionMatrix.makePerspective(x,O,K,$,Mt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=P.near=C.near=tt,M.far=P.far=C.far=gt,(R!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),C.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const st=Y.parent,Tt=M.cameras;it(M,st);for(let Ct=0;Ct<Tt.length;Ct++)it(Tt[Ct],st);Tt.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),ct(Y,M,st)};function ct(Y,tt,gt){gt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function Ut(Y,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let st=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Ct=0;Ct<gt.length;Ct++){const Nt=gt[Ct];let se=null;if(p!==null)se=p.getViewport(Nt);else{const ae=u.getViewSubImage(d,Nt);se=ae.viewport,Ct===0&&(t.setRenderTargetTextures(w,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(w))}let Ht=S[Ct];Ht===void 0&&(Ht=new Fe,Ht.layers.enable(Ct),Ht.viewport=new le,S[Ct]=Ht),Ht.matrix.fromArray(Nt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Nt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(se.x,se.y,se.width,se.height),Ct===0&&(M.matrix.copy(Ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Ht)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Ct=u.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let gt=0;gt<E.length;gt++){const st=v[gt],Tt=E[gt];st!==null&&Tt!==void 0&&Tt.update(st,tt,c||a)}xt&&xt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const $t=new tl;$t.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const zn=new Xe,mp=new te;function gp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Zo(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),E=w.envMap,v=w.envMapRotation;E&&(m.envMap.value=E,zn.copy(v),zn.x*=-1,zn.y*=-1,zn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(zn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _p(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const v=E.program;n.uniformBlockBinding(w,v)}function c(w,E){let v=i[w.id];v===void 0&&(g(w),v=h(w),i[w.id]=v,w.addEventListener("dispose",m));const U=E.program;n.updateUBOMapping(w,U);const A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){const E=u();w.__bindingPointIndex=E;const v=s.createBuffer(),U=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,U,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=i[w.id],v=w.uniforms,U=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,C=v.length;A<C;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,M=P.length;S<M;S++){const R=P[S];if(p(R,A,S,U)===!0){const k=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let q=0;q<F.length;q++){const W=F[q],Z=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+V,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,E,v,U){const A=w.value,C=E+"_"+v;if(U[C]===void 0)return typeof A=="number"||typeof A=="boolean"?U[C]=A:U[C]=A.clone(),!0;{const P=U[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return U[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){const E=w.uniforms;let v=0;const U=16;for(let C=0,P=E.length;C<P;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,R=S.length;M<R;M++){const k=S[M],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,q=F.length;V<q;V++){const W=F[V],Z=_(W),G=v%U,it=G%Z.boundary,ct=G+it;v+=it,ct!==0&&U-ct<Z.storage&&(v+=U-ct),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Z.storage}}}const A=v%U;return A>0&&(v+=U-A),w.__size=v,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class vp{constructor(t={}){const{canvas:e=sc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let U=!1,A=0,C=0,P=null,S=-1,M=null;const R=new le,k=new le;let F=null;const V=new Jt(0);let q=0,W=e.width,Z=e.height,G=1,it=null,ct=null;const xt=new le(0,0,W,Z),Ut=new le(0,0,W,Z);let $t=!1;const Y=new Qo;let tt=!1,gt=!1;const st=new te,Tt=new te,Ct=new T,Nt=new le,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ae(){return P===null?G:1}let N=n;function De(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){const D="webgl2";if(N=De(D,y),N===null)throw De(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ot,Bt,St,ee,Mt,b,x,O,K,$,X,_t,rt,ht,Gt,j,ut,Et,bt,dt,zt,Dt,jt,L;function nt(){Ot=new Sd(N),Ot.init(),Dt=new lp(N,Ot),Bt=new gd(N,Ot,t,Dt),St=new rp(N,Ot),Bt.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),ee=new wd(N),Mt=new Wf,b=new op(N,Ot,St,Mt,Bt,Dt,ee),x=new vd(v),O=new Md(v),K=new Dc(N),jt=new pd(N,K),$=new Ed(N,K,ee,jt),X=new Ad(N,$,K,ee),bt=new bd(N,Bt,b),j=new _d(Mt),_t=new Vf(v,x,O,Ot,Bt,jt,j),rt=new gp(v,Mt),ht=new Xf,Gt=new jf(Ot),Et=new fd(v,x,O,St,X,p,l),ut=new ip(v,X,Bt),L=new _p(N,ee,Bt,St),dt=new md(N,Ot,ee),zt=new Td(N,Ot,ee),ee.programs=_t.programs,v.capabilities=Bt,v.extensions=Ot,v.properties=Mt,v.renderLists=ht,v.shadowMap=ut,v.state=St,v.info=ee}nt();const H=new pp(v,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(W,Z,!1))},this.getSize=function(y){return y.set(W,Z)},this.setSize=function(y,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Z=D,e.width=Math.floor(y*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*G,Z*G).floor()},this.setDrawingBufferSize=function(y,D,B){W=y,Z=D,G=B,e.width=Math.floor(y*B),e.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(xt)},this.setViewport=function(y,D,B,z){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,D,B,z),St.viewport(R.copy(xt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,D,B,z){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,D,B,z),St.scissor(k.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(y){St.setScissorTest($t=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,D=!0,B=!0){let z=0;if(y){let I=!1;if(P!==null){const Q=P.texture.format;I=Q===ha||Q===ca||Q===la}if(I){const Q=P.texture.type,ot=Q===_n||Q===Xn||Q===ki||Q===Mi||Q===ra||Q===aa,ft=Et.getClearColor(),pt=Et.getClearAlpha(),At=ft.r,Pt=ft.g,mt=ft.b;ot?(g[0]=At,g[1]=Pt,g[2]=mt,g[3]=pt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=At,_[1]=Pt,_[2]=mt,_[3]=pt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Gt.dispose(),Mt.dispose(),x.dispose(),O.dispose(),X.dispose(),jt.dispose(),L.dispose(),_t.dispose(),H.dispose(),H.removeEventListener("sessionstart",ga),H.removeEventListener("sessionend",_a),In.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=ee.autoReset,D=ut.enabled,B=ut.autoUpdate,z=ut.needsUpdate,I=ut.type;nt(),ee.autoReset=y,ut.enabled=D,ut.autoUpdate=B,ut.needsUpdate=z,ut.type=I}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Rt(y){const D=y.target;D.removeEventListener("dispose",Rt),re(D)}function re(y){ge(y),Mt.remove(y)}function ge(y){const D=Mt.get(y).programs;D!==void 0&&(D.forEach(function(B){_t.releaseProgram(B)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,z,I,Q){D===null&&(D=se);const ot=I.isMesh&&I.matrixWorld.determinant()<0,ft=dl(y,D,B,z,I);St.setMaterial(z,ot);let pt=B.index,At=1;if(z.wireframe===!0){if(pt=$.getWireframeAttribute(B),pt===void 0)return;At=2}const Pt=B.drawRange,mt=B.attributes.position;let qt=Pt.start*At,Qt=(Pt.start+Pt.count)*At;Q!==null&&(qt=Math.max(qt,Q.start*At),Qt=Math.min(Qt,(Q.start+Q.count)*At)),pt!==null?(qt=Math.max(qt,0),Qt=Math.min(Qt,pt.count)):mt!=null&&(qt=Math.max(qt,0),Qt=Math.min(Qt,mt.count));const ne=Qt-qt;if(ne<0||ne===1/0)return;jt.setup(I,z,ft,B,pt);let be,Xt=dt;if(pt!==null&&(be=K.get(pt),Xt=zt,Xt.setIndex(be)),I.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*ae()),Xt.setMode(N.LINES)):Xt.setMode(N.TRIANGLES);else if(I.isLine){let vt=z.linewidth;vt===void 0&&(vt=1),St.setLineWidth(vt*ae()),I.isLineSegments?Xt.setMode(N.LINES):I.isLineLoop?Xt.setMode(N.LINE_LOOP):Xt.setMode(N.LINE_STRIP)}else I.isPoints?Xt.setMode(N.POINTS):I.isSprite&&Xt.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const vt=I._multiDrawStarts,rn=I._multiDrawCounts,Yt=I._multiDrawCount,ke=pt?K.get(pt).bytesPerElement:1,$n=Mt.get(z).currentProgram.getUniforms();for(let Re=0;Re<Yt;Re++)$n.setValue(N,"_gl_DrawID",Re),Xt.render(vt[Re]/ke,rn[Re])}else if(I.isInstancedMesh)Xt.renderInstances(qt,ne,I.count);else if(B.isInstancedBufferGeometry){const vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,rn=Math.min(B.instanceCount,vt);Xt.renderInstances(qt,ne,rn)}else Xt.render(qt,ne)};function Kt(y,D,B){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=Ce,y.needsUpdate=!0,Yi(y,D,B),y.side=gn,y.needsUpdate=!0,Yi(y,D,B),y.side=dn):Yi(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),f=Gt.get(B),f.init(D),E.push(f),B.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),y!==B&&y.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const z=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];Kt(ft,B,I),z.add(ft)}else Kt(Q,B,I),z.add(Q)}),E.pop(),f=null,z},this.compileAsync=function(y,D,B=null){const z=this.compile(y,D,B);return new Promise(I=>{function Q(){if(z.forEach(function(ot){Mt.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){I(y);return}setTimeout(Q,10)}Ot.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ze=null;function sn(y){ze&&ze(y)}function ga(){In.stop()}function _a(){In.start()}const In=new tl;In.setAnimationLoop(sn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(y){ze=y,H.setAnimationLoop(y),y===null?In.stop():In.start()},H.addEventListener("sessionstart",ga),H.addEventListener("sessionend",_a),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,P),f=Gt.get(y,E.length),f.init(D),E.push(f),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,gt),m=ht.get(y,w.length),m.init(),w.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&Is(Q,D,-1/0,v.sortObjects)}Is(y,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ct),Ht=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ht&&Et.addToRenderList(m,y),this.info.render.frame++,tt===!0&&j.beginShadows();const B=f.state.shadowsArray;ut.render(B,y,D),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,I=m.transmissive;if(f.setupLights(),D.isArrayCamera){const Q=D.cameras;if(I.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];xa(z,I,y,pt)}Ht&&Et.render(y);for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];va(m,y,pt,pt.viewport)}}else I.length>0&&xa(z,I,y,D),Ht&&Et.render(y),va(m,y,D);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,D),jt.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],tt===!0&&j.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Is(y,D,B,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){z&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);const ot=X.update(y),ft=y.material;ft.visible&&m.push(y,ot,ft,B,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ot=X.update(y),ft=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Nt.copy(ot.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(ft)){const pt=ot.groups;for(let At=0,Pt=pt.length;At<Pt;At++){const mt=pt[At],qt=ft[mt.materialIndex];qt&&qt.visible&&m.push(y,ot,qt,B,Nt.z,mt)}}else ft.visible&&m.push(y,ot,ft,B,Nt.z,null)}}const Q=y.children;for(let ot=0,ft=Q.length;ot<ft;ot++)Is(Q[ot],D,B,z)}function va(y,D,B,z){const I=y.opaque,Q=y.transmissive,ot=y.transparent;f.setupLightsView(B),tt===!0&&j.setGlobalState(v.clippingPlanes,B),z&&St.viewport(R.copy(z)),I.length>0&&Xi(I,D,B),Q.length>0&&Xi(Q,D,B),ot.length>0&&Xi(ot,D,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function xa(y,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Dn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Gi:_n,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[z.id],ot=z.viewport||R;Q.setSize(ot.z,ot.w);const ft=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&Et.render(B);const pt=v.toneMapping;v.toneMapping=Ln;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),tt===!0&&j.setGlobalState(v.clippingPlanes,z),Xi(y,B,z),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let mt=0,qt=D.length;mt<qt;mt++){const Qt=D[mt],ne=Qt.object,be=Qt.geometry,Xt=Qt.material,vt=Qt.group;if(Xt.side===dn&&ne.layers.test(z.layers)){const rn=Xt.side;Xt.side=Ce,Xt.needsUpdate=!0,ya(ne,B,z,be,Xt,vt),Xt.side=rn,Xt.needsUpdate=!0,Pt=!0}}Pt===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}v.setRenderTarget(ft),v.setClearColor(V,q),At!==void 0&&(z.viewport=At),v.toneMapping=pt}function Xi(y,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let I=0,Q=y.length;I<Q;I++){const ot=y[I],ft=ot.object,pt=ot.geometry,At=z===null?ot.material:z,Pt=ot.group;ft.layers.test(B.layers)&&ya(ft,D,B,pt,At,Pt)}}function ya(y,D,B,z,I,Q){y.onBeforeRender(v,D,B,z,I,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(v,D,B,z,y,Q),I.transparent===!0&&I.side===dn&&I.forceSinglePass===!1?(I.side=Ce,I.needsUpdate=!0,v.renderBufferDirect(B,D,z,I,y,Q),I.side=gn,I.needsUpdate=!0,v.renderBufferDirect(B,D,z,I,y,Q),I.side=dn):v.renderBufferDirect(B,D,z,I,y,Q),y.onAfterRender(v,D,B,z,I,Q)}function Yi(y,D,B){D.isScene!==!0&&(D=se);const z=Mt.get(y),I=f.state.lights,Q=f.state.shadowsArray,ot=I.state.version,ft=_t.getParameters(y,I.state,Q,D,B),pt=_t.getProgramCacheKey(ft);let At=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",Rt),At=new Map,z.programs=At);let Pt=At.get(pt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===ot)return Sa(y,ft),Pt}else ft.uniforms=_t.getUniforms(y),y.onBeforeCompile(ft,v),Pt=_t.acquireProgram(ft,pt),At.set(pt,Pt),z.uniforms=ft.uniforms;const mt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(mt.clippingPlanes=j.uniform),Sa(y,ft),z.needsLights=pl(y),z.lightsStateVersion=ot,z.needsLights&&(mt.ambientLightColor.value=I.state.ambient,mt.lightProbe.value=I.state.probe,mt.directionalLights.value=I.state.directional,mt.directionalLightShadows.value=I.state.directionalShadow,mt.spotLights.value=I.state.spot,mt.spotLightShadows.value=I.state.spotShadow,mt.rectAreaLights.value=I.state.rectArea,mt.ltc_1.value=I.state.rectAreaLTC1,mt.ltc_2.value=I.state.rectAreaLTC2,mt.pointLights.value=I.state.point,mt.pointLightShadows.value=I.state.pointShadow,mt.hemisphereLights.value=I.state.hemi,mt.directionalShadowMap.value=I.state.directionalShadowMap,mt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,mt.spotShadowMap.value=I.state.spotShadowMap,mt.spotLightMatrix.value=I.state.spotLightMatrix,mt.spotLightMap.value=I.state.spotLightMap,mt.pointShadowMap.value=I.state.pointShadowMap,mt.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function Ma(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Ss.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Sa(y,D){const B=Mt.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function dl(y,D,B,z,I){D.isScene!==!0&&(D=se),b.resetTextureUnits();const Q=D.fog,ot=z.isMeshStandardMaterial?D.environment:null,ft=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kn,pt=(z.isMeshStandardMaterial?O:x).get(z.envMap||ot),At=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,Qt=!!B.morphAttributes.color;let ne=Ln;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ne=v.toneMapping);const be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xt=be!==void 0?be.length:0,vt=Mt.get(z),rn=f.state.lights;if(tt===!0&&(gt===!0||y!==M)){const Ie=y===M&&z.id===S;j.setState(z,y,Ie)}let Yt=!1;z.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==rn.state.version||vt.outputColorSpace!==ft||I.isBatchedMesh&&vt.batching===!1||!I.isBatchedMesh&&vt.batching===!0||I.isBatchedMesh&&vt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&vt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&vt.instancing===!1||!I.isInstancedMesh&&vt.instancing===!0||I.isSkinnedMesh&&vt.skinning===!1||!I.isSkinnedMesh&&vt.skinning===!0||I.isInstancedMesh&&vt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&vt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&vt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&vt.instancingMorph===!1&&I.morphTexture!==null||vt.envMap!==pt||z.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==j.numPlanes||vt.numIntersection!==j.numIntersection)||vt.vertexAlphas!==At||vt.vertexTangents!==Pt||vt.morphTargets!==mt||vt.morphNormals!==qt||vt.morphColors!==Qt||vt.toneMapping!==ne||vt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,vt.__version=z.version);let ke=vt.currentProgram;Yt===!0&&(ke=Yi(z,D,I));let $n=!1,Re=!1,bi=!1;const ie=ke.getUniforms(),Je=vt.uniforms;if(St.useProgram(ke.program)&&($n=!0,Re=!0,bi=!0),z.id!==S&&(S=z.id,Re=!0),$n||M!==y){St.buffers.depth.getReversed()?(st.copy(y.projectionMatrix),ac(st),oc(st),ie.setValue(N,"projectionMatrix",st)):ie.setValue(N,"projectionMatrix",y.projectionMatrix),ie.setValue(N,"viewMatrix",y.matrixWorldInverse);const xn=ie.map.cameraPosition;xn!==void 0&&xn.setValue(N,Ct.setFromMatrixPosition(y.matrixWorld)),Bt.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ie.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Re=!0,bi=!0)}if(I.isSkinnedMesh){ie.setOptional(N,I,"bindMatrix"),ie.setOptional(N,I,"bindMatrixInverse");const Ie=I.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ie.setValue(N,"boneTexture",Ie.boneTexture,b))}I.isBatchedMesh&&(ie.setOptional(N,I,"batchingTexture"),ie.setValue(N,"batchingTexture",I._matricesTexture,b),ie.setOptional(N,I,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",I._indirectTexture,b),ie.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",I._colorsTexture,b));const Ai=B.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&bt.update(I,B,ke),(Re||vt.receiveShadow!==I.receiveShadow)&&(vt.receiveShadow=I.receiveShadow,ie.setValue(N,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Je.envMap.value=pt,Je.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Je.envMapIntensity.value=D.environmentIntensity),Re&&(ie.setValue(N,"toneMappingExposure",v.toneMappingExposure),vt.needsLights&&fl(Je,bi),Q&&z.fog===!0&&rt.refreshFogUniforms(Je,Q),rt.refreshMaterialUniforms(Je,z,G,Z,f.state.transmissionRenderTarget[y.id]),Ss.upload(N,Ma(vt),Je,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ss.upload(N,Ma(vt),Je,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ie.setValue(N,"center",I.center),ie.setValue(N,"modelViewMatrix",I.modelViewMatrix),ie.setValue(N,"normalMatrix",I.normalMatrix),ie.setValue(N,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ie=z.uniformsGroups;for(let xn=0,yn=Ie.length;xn<yn;xn++){const Ea=Ie[xn];L.update(Ea,ke),L.bind(Ea,ke)}}return ke}function fl(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function pl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,D,B){Mt.get(y.texture).__webglTexture=D,Mt.get(y.depthTexture).__webglTexture=B;const z=Mt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=Mt.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,B=0){P=y,A=D,C=B;let z=!0,I=null,Q=!1,ot=!1;if(y){const pt=Mt.get(y);if(pt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(pt.__hasExternalTextures)b.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const mt=y.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&Mt.has(mt)&&(y.width!==mt.image.width||y.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ot=!0);const Pt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?I=Pt[D][B]:I=Pt[D],Q=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?I=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?I=Pt[B]:I=Pt,R.copy(y.viewport),k.copy(y.scissor),F=y.scissorTest}else R.copy(xt).multiplyScalar(G).floor(),k.copy(Ut).multiplyScalar(G).floor(),F=$t;if(St.bindFramebuffer(N.FRAMEBUFFER,I)&&z&&St.drawBuffers(y,I),St.viewport(R),St.scissor(k),St.setScissorTest(F),Q){const pt=Mt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,B)}else if(ot){const pt=Mt.get(y.texture),At=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.__webglTexture,B||0,At)}S=-1},this.readRenderTargetPixels=function(y,D,B,z,I,Q,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){St.bindFramebuffer(N.FRAMEBUFFER,ft);try{const pt=y.texture,At=pt.format,Pt=pt.type;if(!Bt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&B>=0&&B<=y.height-I&&N.readPixels(D,B,z,I,Dt.convert(At),Dt.convert(Pt),Q)}finally{const pt=P!==null?Mt.get(P).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,z,I,Q,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){const pt=y.texture,At=pt.format,Pt=pt.type;if(!Bt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-z&&B>=0&&B<=y.height-I){St.bindFramebuffer(N.FRAMEBUFFER,ft);const mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,B,z,I,Dt.convert(At),Dt.convert(Pt),0);const qt=P!==null?Mt.get(P).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,qt);const Qt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rc(N,Qt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(mt),N.deleteSync(Qt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(Fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),I=Math.floor(y.image.width*z),Q=Math.floor(y.image.height*z),ot=D!==null?D.x:0,ft=D!==null?D.y:0;b.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ot,ft,I,Q),St.unbindTexture()},this.copyTextureToTexture=function(y,D,B=null,z=null,I=0){y.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],D=arguments[2],I=arguments[3]||0,B=null);let Q,ot,ft,pt,At,Pt,mt,qt,Qt;const ne=y.isCompressedTexture?y.mipmaps[I]:y.image;B!==null?(Q=B.max.x-B.min.x,ot=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,pt=B.min.x,At=B.min.y,Pt=B.isBox3?B.min.z:0):(Q=ne.width,ot=ne.height,ft=ne.depth||1,pt=0,At=0,Pt=0),z!==null?(mt=z.x,qt=z.y,Qt=z.z):(mt=0,qt=0,Qt=0);const be=Dt.convert(D.format),Xt=Dt.convert(D.type);let vt;D.isData3DTexture?(b.setTexture3D(D,0),vt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),vt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const rn=N.getParameter(N.UNPACK_ROW_LENGTH),Yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ke=N.getParameter(N.UNPACK_SKIP_PIXELS),$n=N.getParameter(N.UNPACK_SKIP_ROWS),Re=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pt),N.pixelStorei(N.UNPACK_SKIP_ROWS,At),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const bi=y.isDataArrayTexture||y.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Je=Mt.get(y),Ai=Mt.get(D),Ie=Mt.get(Je.__renderTarget),xn=Mt.get(Ai.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,Ie.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let yn=0;yn<ft;yn++)bi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,I,Pt+yn),y.isDepthTexture?(ie&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,I,Qt+yn),N.blitFramebuffer(pt,At,Q,ot,mt,qt,Q,ot,N.DEPTH_BUFFER_BIT,N.NEAREST)):ie?N.copyTexSubImage3D(vt,I,mt,qt,Qt+yn,pt,At,Q,ot):N.copyTexSubImage2D(vt,I,mt,qt,Qt+yn,pt,At,Q,ot);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(vt,I,mt,qt,Qt,Q,ot,ft,be,Xt,ne.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,I,mt,qt,Qt,Q,ot,ft,be,ne.data):N.texSubImage3D(vt,I,mt,qt,Qt,Q,ot,ft,be,Xt,ne):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,mt,qt,Q,ot,be,Xt,ne.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,mt,qt,ne.width,ne.height,be,ne.data):N.texSubImage2D(N.TEXTURE_2D,I,mt,qt,Q,ot,be,Xt,ne);N.pixelStorei(N.UNPACK_ROW_LENGTH,rn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,$n),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re),I===0&&D.generateMipmaps&&N.generateMipmap(vt),St.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,z=null,I=0){return y.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],D=arguments[3],I=arguments[4]||0),Fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,z,I)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,St.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Eo extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xp extends Te{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ee,h=Ee,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi extends Be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new te,To=new te,ms=[],wo=new Jn,yp=new te,Ii=new kt,Ui=new Wi;class ea extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),wo.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(wo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Ui.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Ui)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),t.ray.intersectsSphere(Ui)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,di),To.multiplyMatrices(n,di),Ii.matrixWorld=To,Ii.raycast(t,ms);for(let a=0,o=ms.length;a<o;a++){const l=ms[a];l.instanceId=r,l.object=this,e.push(l)}ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xp(new Float32Array(i*this.count),i,this.count,oa,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new wt:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],a=[],o=new T,l=new te;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(xe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class al extends vn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new wt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mp extends al{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pa(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const gs=new T,hr=new pa,ur=new pa,dr=new pa;class Sp extends vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(gs.subVectors(i[0],i[1]).add(i[0]),c=gs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),hr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ur.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),dr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(hr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ur.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),dr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(hr.calc(l),ur.calc(l),dr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ep(s,t){const e=1-s;return e*e*t}function Tp(s,t){return 2*(1-s)*s*t}function wp(s,t){return s*s*t}function Bi(s,t,e,n){return Ep(s,t)+Tp(s,e)+wp(s,n)}function bp(s,t){const e=1-s;return e*e*e*t}function Ap(s,t){const e=1-s;return 3*e*e*s*t}function Cp(s,t){return 3*(1-s)*s*s*t}function Rp(s,t){return s*s*s*t}function zi(s,t,e,n,i){return bp(s,t)+Ap(s,e)+Cp(s,n)+Rp(s,i)}class Pp extends vn{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zi(t,i.x,r.x,a.x,o.x),zi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lp extends vn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zi(t,i.x,r.x,a.x,o.x),zi(t,i.y,r.y,a.y,o.y),zi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dp extends vn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ol extends vn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ip extends vn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bi(t,i.x,r.x,a.x),Bi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ll extends vn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bi(t,i.x,r.x,a.x),Bi(t,i.y,r.y,a.y),Bi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Up extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(bo(o,l.x,c.x,h.x,u.x),bo(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new wt().fromArray(i))}return this}}var Np=Object.freeze({__proto__:null,ArcCurve:Mp,CatmullRomCurve3:Sp,CubicBezierCurve:Pp,CubicBezierCurve3:Lp,EllipseCurve:al,LineCurve:Dp,LineCurve3:ol,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:ll,SplineCurve:Up});class Zn extends Ke{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function w(){const v=new T,U=new T;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,R=M*(e-t)+t;for(let k=0;k<=i;k++){const F=k/i,V=F*l+o,q=Math.sin(V),W=Math.cos(V);U.x=R*q,U.y=-M*n+m,U.z=R*W,u.push(U.x,U.y,U.z),v.set(q,C,W).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-M),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=_[S][P],R=_[S+1][P],k=_[S+1][P+1],F=_[S][P+1];(t>0||S!==0)&&(h.push(M,R,F),A+=3),(e>0||S!==r-1)&&(h.push(R,k,F),A+=3)}c.addGroup(f,A,0),f+=A}function E(v){const U=g,A=new wt,C=new T;let P=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let k=0;k<=i;k++){const V=k/i*l+o,q=Math.cos(V),W=Math.sin(V);C.x=S*W,C.y=m*M,C.z=S*q,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=q*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let k=0;k<i;k++){const F=U+k,V=R+k;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends Zn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qe extends Ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],E=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const A=U/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-E),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const E=h[f][w+1],v=h[f][w],U=h[f+1][w],A=h[f+1][w+1];(f!==0||a>0)&&p.push(E,v,A),(f!==n-1||l<Math.PI)&&p.push(v,U,A)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ma extends Ke{constructor(t=new ll(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new wt;let h=new T;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),w(),f()}function m(E){h=t.getPointAt(E/e,h);const v=a.normals[E],U=a.binormals[E];for(let A=0;A<=i;A++){const C=A/i*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);l.x=S*v.x+P*U.x,l.y=S*v.y+P*U.y,l.z=S*v.z+P*U.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=e;E++)for(let v=1;v<=i;v++){const U=(i+1)*(E-1)+(v-1),A=(i+1)*E+(v-1),C=(i+1)*E+v,P=(i+1)*(E-1)+v;g.push(U,A,P),g.push(A,C,P)}}function w(){for(let E=0;E<=e;E++)for(let v=0;v<=i;v++)c.x=E/e,c.y=v/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ma(new Np[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const he={BLUE:0,RED:1,BLACK:2},Fp=[new T(.1,.19,.76),new T(.86,.12,.2),new T(.18,.2,.26),new T(.92,.55,.08),new T(.12,.6,.3),new T(.9,.4,.66)],Op=new T(.38,.82,.42).normalize(),Es={uLightDir:{value:new T},uTime:{value:0}},Bp=`
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
`,zp=`
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
`;function nn(s={}){let t=he.BLACK,e=0,n=1,i=0,r=gn;typeof s=="number"?(t=s,arguments[1]&&(e=1),arguments[2]!==void 0&&(n=arguments[2]),arguments[3]!==void 0&&(i=arguments[3])):(s.ink!==void 0&&(t=s.ink),s.fill&&(e=1),s.shadeScale!==void 0&&(n=s.shadeScale),s.shadeBias!==void 0&&(i=s.shadeBias),s.side!==void 0&&(r=s.side));const a=new Ye({vertexShader:Bp,fragmentShader:zp,uniforms:{uLightDir:Es.uLightDir,uInkId:{value:t},uFill:{value:e},uShadeScale:{value:n},uShadeBias:{value:i}},side:r});return a.inkId=t,a}function Ao(s,t){s.uniforms&&s.uniforms.uFill&&(s.uniforms.uFill.value=t?1:0)}const kp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,Hp=`
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
`;class Gp{constructor(t){this.canvas=t,this.renderer=new vp({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Kn,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.scene=new Eo,this.camera=new Fe(80,1,.1,1e3);const e=this.canvas.clientWidth,n=this.canvas.clientHeight;this.renderTarget=new Dn(e,n,{minFilter:Ee,magFilter:Ee,format:Oe,depthBuffer:!0,depthTexture:new fa}),this.postScene=new Eo,this.postCamera=new el(-1,1,1,-1,0,1),this.postUniforms={tDiffuse:{value:this.renderTarget.texture},tDepth:{value:this.renderTarget.depthTexture},uResolution:{value:new wt(e,n)},uTime:Es.uTime,uInkColors:{value:Fp},uProjectionMatrixInverse:{value:new te},uLineMode:{value:0},uPaperColor:{value:new T(.98,.98,.95)},uHurt:{value:0},uFlash:{value:0},uSlow:{value:0},uLowHp:{value:0}};const i=new Ye({vertexShader:kp,fragmentShader:Hp,uniforms:this.postUniforms,depthWrite:!1,depthTest:!1}),r=new kt(new qi(2,2),i);this.postScene.add(r),this.resize()}resize(){const t=this.renderer.getPixelRatio(),e=this.canvas.clientWidth,n=this.canvas.clientHeight;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderTarget.setSize(e*t,n*t),this.postUniforms.uResolution.value.set(e*t,n*t),this.postUniforms.uProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}setStyle(t={}){t.lineMode!==void 0&&(this.postUniforms.uLineMode.value=t.lineMode),t.paperColor!==void 0&&this.postUniforms.uPaperColor.value.copy(t.paperColor)}render(t,e={}){Es.uTime.value=t;const n=Op.clone().transformDirection(this.camera.matrixWorldInverse).normalize();Es.uLightDir.value.copy(n),this.postUniforms.uProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.postUniforms.uHurt.value=e.hurt||0,this.postUniforms.uFlash.value=e.flash||0,this.postUniforms.uSlow.value=e.slow||0,this.postUniforms.uLowHp.value=e.lowHp||0,this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.postScene,this.postCamera)}}let An=0;class Vp{constructor(t=8){this.cell=t,this.boxes=[],this.grid=new Map,this.bounds={min:new T,max:new T}}clear(){this.boxes=[],this.grid.clear()}addBox(t,e,n={}){this.boxes.push({min:new T(t.x,t.y,t.z),max:new T(e.x,e.y,e.z),data:n,id:++An,q:0})}finalize(){this.grid.clear();for(const t of this.boxes)this._insert(t)}removeBox(t){const e=this.boxes.indexOf(t);e!==-1&&(this.boxes.splice(e,1),this.finalize())}insertBox(t,e,n={}){const i={min:new T(t.x,t.y,t.z),max:new T(e.x,e.y,e.z),data:n,id:++An,q:0};return this.boxes.push(i),this._insert(i),i}_key(t,e){return(t+4096)*8192+(e+4096)}_insert(t){const e=Math.floor(t.min.x/this.cell),n=Math.floor(t.max.x/this.cell),i=Math.floor(t.min.z/this.cell),r=Math.floor(t.max.z/this.cell);for(let a=e;a<=n;a++)for(let o=i;o<=r;o++){const l=this._key(a,o);let c=this.grid.get(l);c||(c=[],this.grid.set(l,c)),c.push(t)}}query(t,e,n=[]){n.length=0,An++;const i=Math.floor(t.x/this.cell),r=Math.floor(e.x/this.cell),a=Math.floor(t.z/this.cell),o=Math.floor(e.z/this.cell);for(let l=i;l<=r;l++)for(let c=a;c<=o;c++){const h=this.grid.get(this._key(l,c));if(h)for(const u of h)u.q!==An&&(u.q=An,e.x>u.min.x&&t.x<u.max.x&&e.y>u.min.y&&t.y<u.max.y&&e.z>u.min.z&&t.z<u.max.z&&n.push(u))}return n}overlapsAABB(t,e){An++;const n=Math.floor(t.x/this.cell),i=Math.floor(e.x/this.cell),r=Math.floor(t.z/this.cell),a=Math.floor(e.z/this.cell);for(let o=n;o<=i;o++)for(let l=r;l<=a;l++){const c=this.grid.get(this._key(o,l));if(c){for(const h of c)if(h.q!==An&&(h.q=An,e.x>h.min.x&&t.x<h.max.x&&e.y>h.min.y&&t.y<h.max.y&&e.z>h.min.z&&t.z<h.max.z))return!0}}return!1}overlapsBody(t){const e=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),n=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);return this.overlapsAABB(e,n)}_resolveAxis(t,e,n,i,r){const a=[];this.query(i,r,a);let o=0,l=0;for(const c of a)if(n>0){const h=r[e]-c.min[e];h>0&&h>o&&(o=h,l=-1)}else if(n<0){const h=c.max[e]-i[e];h>0&&h>o&&(o=h,l=1)}return o>0?(t.pos[e]+=o*l,l):0}_moveHoriz(t,e,n,i){if(e===0&&n===0)return;const r=t.pos.x,a=t.pos.y,o=t.pos.z;t.pos.x+=e;let l=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),c=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);const h=e!==0?this._resolveAxis(t,"x",e,l,c):0;t.pos.z+=n,l=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),c=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);const u=n!==0?this._resolveAxis(t,"z",n,l,c):0;if(!i||h===0&&u===0){(h!==0||u!==0)&&(t.hitWall=!0,t.wallNormal.set(h,0,u).normalize());return}const d={x:t.pos.x,y:t.pos.y,z:t.pos.z};t.pos.set(r,a+t.stepHeight,o),t.pos.x+=e,l=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),c=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);const p=e!==0?this._resolveAxis(t,"x",e,l,c):0;t.pos.z+=n,l=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),c=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);const g=n!==0?this._resolveAxis(t,"z",n,l,c):0;t.pos.y-=t.stepHeight,l=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),c=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);const _=-t.stepHeight,m=this._resolveAxis(t,"y",_,l,c),f=Math.abs(d.x-r)+Math.abs(d.z-o);Math.abs(t.pos.x-r)+Math.abs(t.pos.z-o)>f&&m>0?(p!==0||g!==0)&&(t.hitWall=!0,t.wallNormal.set(p,0,g).normalize()):(t.pos.set(d.x,d.y,d.z),(h!==0||u!==0)&&(t.hitWall=!0,t.wallNormal.set(h,0,u).normalize()))}moveBody(t,e){const n=t.vel.length(),i=Math.max(.2,t.halfW*.8);let r=Math.max(1,Math.ceil(n*e/i));r>10&&(r=10);const a=e/r,o=t.vel.x*a,l=t.vel.y*a,c=t.vel.z*a,h=t.onGround;t.onGround=!1,t.hitWall=!1,t.hitCeiling=!1,t.wallNormal.set(0,0,0),t.landVel=0;for(let u=0;u<r;u++){const d=(h||t.onGround||t.alwaysStep)&&t.stepHeight>0;this._moveHoriz(t,o,c,d),t.pos.y+=l,t._bx=0,t._bz=0;const p=new T(t.pos.x-t.halfW,t.pos.y,t.pos.z-t.halfW),g=new T(t.pos.x+t.halfW,t.pos.y+t.height,t.pos.z+t.halfW);if(l!==0){const _=this._resolveAxis(t,"y",l,p,g);_>0?(t.onGround=!0,t.vel.y<0&&t.landVel===0&&(t.landVel=t.vel.y),t.vel.y=0):_<0&&(t.hitCeiling=!0,t.vel.y=0)}}if(!t.noSnap&&h&&!t.onGround&&t.vel.y<=0){const u=this.groundBelow(t.pos.x,t.pos.y+.1,t.pos.z,t.stepHeight+.2);u!==null&&(t.pos.y=u,t.onGround=!0,t.vel.y=0)}}raycast(t,e,n=100,i=null){let r=null,a=n;for(const o of this.boxes){if(i&&(typeof i=="function"&&i(o)||i===1&&o.data&&o.data.noCollide))continue;let l=-1/0,c=1/0,h=new T,u=!0;for(let d=0;d<3;d++){const p=d===0?"x":d===1?"y":"z",g=1/e[p];let _=(o.min[p]-t[p])*g,m=(o.max[p]-t[p])*g,f=new T;f[p]=-1;let w=new T;if(w[p]=1,g<0){const E=_;_=m,m=E;const v=f;f=w,w=v}if(_>l&&(l=_,h.copy(f)),m<c&&(c=m),c<l){u=!1;break}}if(u&&c>=0&&c>=l&&l<a){const d=l<0?0:l;d<a&&(a=d,r={dist:a,point:t.clone().add(e.clone().multiplyScalar(a)),normal:h,box:o})}}return r}groundBelow(t,e,n,i){const r=new T(t,e,n),a=new T(0,-1,0),o=this.raycast(r,a,i);return o?o.point.y:null}hasLineOfSight(t,e,n=null){const i=new T().subVectors(e,t),r=i.length();return i.normalize(),this.raycast(t,i,r,n)===null}}function cl(s,t,e,n=.55){let i=new T,r=.36,a=1.85,o=.55;if(typeof s=="number"&&typeof t=="number"&&typeof e=="number")i.set(s,t,e),r=typeof arguments[3]=="number"?arguments[3]:.36,a=typeof arguments[4]=="number"?arguments[4]:1.85,o=typeof arguments[5]=="number"?arguments[5]:.55;else if(s&&typeof s=="object")if(s.pos!==void 0){const l=s;Array.isArray(l.pos)?i.set(l.pos[0],l.pos[1],l.pos[2]):l.pos&&typeof l.pos.x=="number"&&i.copy(l.pos),r=l.halfW!==void 0?l.halfW:r,a=l.height!==void 0?l.height:a,o=l.stepHeight!==void 0?l.stepHeight:o}else Array.isArray(s)?(i.set(s[0],s[1],s[2]),r=t!==void 0?t:r,a=e!==void 0?e:a,o=n!==void 0?n:o):typeof s.x=="number"&&(i.copy(s),r=t!==void 0?t:r,a=e!==void 0?e:a,o=n!==void 0?n:o);return{pos:i,vel:new T,halfW:r,height:a,stepHeight:o,onGround:!1,hitWall:!1,hitCeiling:!1,wallNormal:new T,landVel:0,noSnap:!1,alwaysStep:!1,_bx:0,_bz:0}}const hl=s=>s.data.noShoot===!0;class Wp{constructor(t){this.canvas=t,this.state={},this.prev={},this.keys={},this.mouseBtns={},this.move={x:0,y:0},this.look={x:0,y:0},this.mx=0,this.my=0,this.wheel=0,this.mouseSens=.0022,this.padSensX=3.4,this.padSensY=2.6,this.usingGamepad=!1,this.pointerLocked=!1,this.anyInput=!1,this.invertY=!1,this.trackpad=!1,this.onLockChange=null,this.onAnyInput=null,this.onDeviceChange=null,this.idleSeconds=0,this.padIndex=-1,this.lookHoldTime=0,this.wTapTimer=0,this._bindEvents()}_bindEvents(){this.keyMap={KeyW:"forward",KeyS:"back",KeyA:"left",KeyD:"right",ArrowUp:"forward",ArrowDown:"back",ArrowLeft:"left",ArrowRight:"right",Space:"jump",ShiftLeft:"sprint",ShiftRight:"sprint",ControlLeft:"crouch",KeyC:"crouch",KeyR:"reload",KeyQ:"grapple",KeyE:"grapple",KeyF:"melee",KeyV:"melee",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",Digit4:"slot4",Digit5:"slot5",Escape:"pause",KeyP:"pause",Enter:"confirm",KeyG:"grenade",KeyX:"dash",AltLeft:"dash",KeyM:"music",KeyT:"talk",Tab:"score"},this.mouseMap={0:"fire",2:"aim",1:"grapple",3:"grapple",4:"melee"},this.padMap={0:"jump",1:"crouch",2:"reload",3:"nextWeapon",4:"grapple",5:"melee",6:"aim",7:"fire",9:"pause",10:"sprint",11:"grenade",12:"grenade",13:"slot5",14:"prevWeapon",15:"nextWeapon",8:"score",17:"confirm"},window.addEventListener("keydown",t=>{this._registerInput(!1);const e=this.keyMap[t.code];if(e&&(this.keys[e]=!0),t.code==="KeyW"&&!t.repeat){const n=performance.now();n-this.wTapTimer<300&&(this.keys.doubleTapW=!0),this.wTapTimer=n}["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{const e=this.keyMap[t.code];e&&(this.keys[e]=!1),t.code==="KeyW"&&(this.keys.doubleTapW=!1)}),window.addEventListener("blur",()=>this._clearAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._clearAll()}),document.addEventListener("mousemove",t=>{if(!this.pointerLocked)return;this._registerInput(!1);let e=t.movementX,n=t.movementY;Math.abs(e)>400&&(e=0),Math.abs(n)>400&&(n=0),this.mx+=e,this.my+=n}),document.addEventListener("mousedown",t=>{this._registerInput(!1);const e=this.mouseMap[t.button];e&&(this.mouseBtns[e]=!0)}),document.addEventListener("mouseup",t=>{const e=this.mouseMap[t.button];e&&(this.mouseBtns[e]=!1)}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("wheel",t=>{this.wheel+=Math.sign(t.deltaY)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas,this.onLockChange&&this.onLockChange(this.pointerLocked)}),window.addEventListener("gamepadconnected",t=>{this.padIndex=t.gamepad.index,this._registerInput(!0)})}_clearAll(){this.keys={},this.mouseBtns={};for(let t in this.state)this.state[t]=!1}_registerInput(t){this.idleSeconds=0,this.anyInput||(this.anyInput=!0,this.onAnyInput&&this.onAnyInput()),this.usingGamepad!==t&&(this.usingGamepad=t,this.onDeviceChange&&this.onDeviceChange(t))}async requestLock(){if(!this.pointerLocked)try{if(this.canvas.requestPointerLock)try{await this.canvas.requestPointerLock({unadjustedMovement:!0})}catch{await this.canvas.requestPointerLock()}}catch(t){console.warn("Pointer lock failed",t)}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}_getPad(){return this.padIndex<0?null:navigator.getGamepads()[this.padIndex]||null}_applyDeadzone(t){return Math.abs(t)<.14?0:(t-Math.sign(t)*.14)/.86}_applyCurve(t){return Math.sign(t)*Math.pow(Math.abs(t),1.8)}update(t){this.idleSeconds+=t;for(const a in this.state)this.prev[a]=this.state[a];this.state={...this.keys,...this.mouseBtns},this.wheel<0?this.state.prevWeapon=!0:this.wheel>0&&(this.state.nextWeapon=!0),this.trackpad&&(this.state.sprint&&(this.state.aim=!0,this.state.sprint=!1),this.state.doubleTapW&&(this.state.sprint=!0));let e=0,n=0;this.state.forward&&(n-=1),this.state.back&&(n+=1),this.state.left&&(e-=1),this.state.right&&(e+=1);let i=Math.sqrt(e*e+n*n);i>1&&(e/=i,n/=i),this.move.x=e,this.move.y=-n,this.look.x=this.mx*this.mouseSens,this.look.y=this.my*this.mouseSens*(this.invertY?-1:1);const r=this._getPad();if(r){const a=this._applyDeadzone(r.axes[0]),o=this._applyDeadzone(r.axes[1]),l=this._applyDeadzone(r.axes[2]),c=this._applyDeadzone(r.axes[3]);if((a!==0||o!==0||l!==0||c!==0)&&this._registerInput(!0),a!==0||o!==0){let u=Math.sqrt(a*a+o*o);u>1?(this.move.x=a/u,this.move.y=-(o/u)):(this.move.x=a,this.move.y=-o)}if(Math.sqrt(l*l+c*c)>0){this.lookHoldTime+=t;let u=1;this.lookHoldTime>.25&&(u=Math.min(1.9,1+(this.lookHoldTime-.25)*2));const d=this._applyCurve(l),p=this._applyCurve(c);this.look.x+=d*this.padSensX*t*u,this.look.y+=p*this.padSensY*t*u*(this.invertY?-1:1)}else this.lookHoldTime=0;for(let u=0;u<r.buttons.length;u++)if(r.buttons[u].pressed){this._registerInput(!0);const d=this.padMap[u];d&&(this.state[d]=!0)}}this.mx=0,this.my=0,this.wheel=0}down(t){return!!this.state[t]}pressed(t){return!!this.state[t]&&!this.prev[t]}released(t){return!this.state[t]&&!!this.prev[t]}consume(t){this.state[t]=!1}anyPressed(){for(const t in this.state)if(this.state[t]&&!this.prev[t])return!0;return!1}rumble(t,e,n){const i=this._getPad();if(i&&i.vibrationActuator)try{i.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:n,weakMagnitude:e,strongMagnitude:t})}catch{}}}class qp{constructor(){this.ctx=null,this.master=null,this.compressor=null,this.noiseBuffer=null,this._vol=.55,this.listenerPos=new T,this.listenerRight=new T(1,0,0),this._musicPlaying=!1,this.intensity=0,this.tune=0,this.musicInterval=null,this.musicStep=0,this.reelOsc=null,this.reelGain=null}get volume(){return this._vol}set volume(t){this._vol=t,this.master&&(this.master.gain.value=t)}init(){if(this.ctx)return;this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-16,this.compressor.ratio.value=5,this.master=this.ctx.createGain(),this.master.gain.value=this._vol,this.master.connect(this.compressor),this.compressor.connect(this.ctx.destination);const t=this.ctx.sampleRate*2;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setListener(t,e){this.listenerPos.copy(t),this.listenerRight.copy(e)}_out(t,e=1){const n=this.ctx.createGain();if(!t)return n.gain.value=e,n.connect(this.master),n;const r=1/(1+this.listenerPos.distanceTo(t)*.09);let o=new T().subVectors(t,this.listenerPos).normalize().dot(this.listenerRight);o=Math.max(-1,Math.min(1,o));const l=this.ctx.createStereoPanner();return l.pan.value=o,n.gain.value=e*r,n.connect(l),l.connect(this.master),n}noise({dur:t,gain:e=1,type:n="lowpass",freq:i=1e3,freqEnd:r,q:a=1,attack:o=.01,pos:l,delay:c=0,hp:h=0,at:u}){if(!this.ctx)return;const d=u!==void 0?u:this.ctx.currentTime+c,p=this.ctx.createBufferSource();p.buffer=this.noiseBuffer,p.loop=!0;const g=this.ctx.createBiquadFilter();g.type=n,g.frequency.setValueAtTime(i,d),r!==void 0&&g.frequency.exponentialRampToValueAtTime(Math.max(10,r),d+t),g.Q.value=a;const _=this.ctx.createGain();_.gain.setValueAtTime(0,d),_.gain.linearRampToValueAtTime(e,d+o),_.gain.exponentialRampToValueAtTime(.001,d+t),p.connect(g);let m=g;if(h>0){const f=this.ctx.createBiquadFilter();f.type="highpass",f.frequency.value=h,m.connect(f),m=f}return m.connect(_),_.connect(this._out(l)),p.start(d),p.stop(d+t),p}tone({freq:t,freqEnd:e,dur:n,gain:i=1,type:r="sine",attack:a=.01,pos:o,delay:l=0,at:c,out:h}){if(!this.ctx)return;const u=c!==void 0?c:this.ctx.currentTime+l,d=this.ctx.createOscillator();d.type=r,d.frequency.setValueAtTime(t,u),e!==void 0&&d.frequency.exponentialRampToValueAtTime(Math.max(1,e),u+n);const p=this.ctx.createGain();return p.gain.setValueAtTime(0,u),p.gain.linearRampToValueAtTime(i,u+a),p.gain.exponentialRampToValueAtTime(.001,u+n),d.connect(p),h?p.connect(h):p.connect(this._out(o)),d.start(u),d.stop(u+n),{osc:d,env:p}}shot(){this.noise({dur:.2,gain:.6,type:"bandpass",freq:1200,freqEnd:250}),this.noise({dur:.1,gain:.3,type:"highpass",freq:2800}),this.tone({type:"triangle",freq:160,freqEnd:40,dur:.25,gain:.8})}shotgunFire(){this.noise({dur:.35,gain:.8,type:"lowpass",freq:1800,freqEnd:120}),this.noise({dur:.15,gain:.4,type:"highpass",freq:2500}),this.tone({type:"triangle",freq:110,freqEnd:30,dur:.3,gain:.9})}sniperFire(){this.noise({dur:.4,gain:.7,type:"bandpass",freq:1400,freqEnd:90}),this.noise({dur:.15,gain:.4,type:"highpass",freq:3500}),this.tone({type:"sawtooth",freq:260,freqEnd:30,dur:.3,gain:.6}),this.tone({type:"sine",freq:1800,freqEnd:400,dur:.15,gain:.3})}revolver(){this.noise({dur:.25,gain:.6,type:"bandpass",freq:900,freqEnd:180}),this.noise({dur:.1,gain:.3,type:"highpass",freq:3e3}),this.tone({type:"sawtooth",freq:200,freqEnd:35,dur:.2,gain:.7}),this.tone({type:"sine",freq:2600,freqEnd:900,dur:.1,gain:.2})}katanaSwing(){this.noise({dur:.15,gain:.5,type:"bandpass",freq:500,freqEnd:3e3})}katanaHit(){this.noise({dur:.2,gain:.6,type:"lowpass",freq:900,freqEnd:200}),this.noise({dur:.1,gain:.3,type:"bandpass",freq:2500}),this.tone({type:"triangle",freq:180,freqEnd:70,dur:.2,gain:.7})}empty(){this.noise({dur:.03,gain:.4,type:"highpass",freq:3e3})}reload(){if(!this.ctx)return;const t=this.ctx.currentTime;this.noise({at:t,dur:.05,gain:.3,type:"highpass",freq:2e3}),this.noise({at:t+.25,dur:.05,gain:.3,type:"highpass",freq:2e3}),this.noise({at:t+.9,dur:.05,gain:.4,type:"highpass",freq:1800}),this.tone({at:t+1.25,type:"triangle",freq:400,freqEnd:600,dur:.1,gain:.3})}hitEnemy(t){this.noise({dur:.15,gain:.5,type:"lowpass",freq:900,pos:t}),this.tone({type:"square",freq:200,freqEnd:120,dur:.15,gain:.4,pos:t})}headshot(t){this.noise({dur:.2,gain:.5,type:"highpass",freq:3e3,pos:t}),this.tone({type:"triangle",freq:1500,freqEnd:500,dur:.2,gain:.6,pos:t})}kill(t){this.tone({type:"square",freq:880,dur:.2,gain:.4}),this.tone({type:"square",freq:1320,dur:.3,gain:.4,delay:.1}),this.tone({type:"sine",freq:140,freqEnd:50,dur:.4,gain:.5})}enemyDie(t){this.tone({type:"sawtooth",freq:160,freqEnd:40,dur:.3,gain:.4,pos:t}),this.noise({dur:.3,gain:.5,type:"lowpass",freq:600,freqEnd:100,pos:t}),this.noise({dur:.1,gain:.3,type:"bandpass",freq:1400,pos:t})}gib(t){this.noise({dur:.25,gain:.6,type:"lowpass",freq:500,freqEnd:120,pos:t}),this.noise({dur:.15,gain:.4,type:"bandpass",freq:2e3,pos:t})}hurt(){this.tone({type:"sawtooth",freq:200,freqEnd:90,dur:.25,gain:.6}),this.noise({dur:.2,gain:.5,type:"lowpass",freq:500})}death(){this.tone({type:"sawtooth",freq:220,freqEnd:30,dur:1.2,gain:.7}),this.noise({dur:.8,gain:.6,type:"lowpass",freq:800,freqEnd:80})}footstep(t){this.noise({dur:.05,gain:.12*t,type:"lowpass",freq:600})}jump(){this.tone({type:"triangle",freq:260,freqEnd:480,dur:.15,gain:.3}),this.noise({dur:.1,gain:.2,type:"lowpass",freq:600})}land(t){this.noise({dur:.1,gain:.15*t,type:"lowpass",freq:350})}slide(){this.noise({dur:.45,gain:.25,type:"lowpass",freq:1200,freqEnd:300})}wallJump(){this.noise({dur:.15,gain:.25,type:"lowpass",freq:700}),this.tone({type:"triangle",freq:300,freqEnd:600,dur:.15,gain:.3})}mantle(){this.noise({dur:.2,gain:.3,type:"lowpass",freq:900,freqEnd:300})}dash(){this.noise({dur:.2,gain:.4,type:"bandpass",freq:800,freqEnd:2500})}grappleFire(){this.noise({dur:.15,gain:.3,type:"highpass",freq:1500}),this.tone({type:"sawtooth",freq:500,freqEnd:1500,dur:.15,gain:.4})}grappleHit(){this.noise({dur:.1,gain:.4,type:"highpass",freq:2e3}),this.tone({type:"square",freq:300,freqEnd:200,dur:.1,gain:.3})}grappleRelease(){this.tone({type:"sawtooth",freq:900,freqEnd:300,dur:.15,gain:.3})}reelLoop(t){if(this.ctx)if(t&&!this.reelGain){this.reelGain=this.ctx.createGain(),this.reelGain.gain.setValueAtTime(0,this.ctx.currentTime),this.reelGain.gain.linearRampToValueAtTime(.2,this.ctx.currentTime+.1),this.reelGain.connect(this.master),this.reelOsc=this.ctx.createBufferSource(),this.reelOsc.buffer=this.noiseBuffer,this.reelOsc.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=600,this.reelOsc.connect(e),e.connect(this.reelGain),this.reelOsc.start()}else!t&&this.reelGain&&(this.reelGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.1),setTimeout(()=>{this.reelOsc&&this.reelOsc.stop(),this.reelOsc=null,this.reelGain=null},100))}enemyShot(t){this.noise({dur:.2,gain:.5,type:"bandpass",freq:1200,freqEnd:200,pos:t}),this.tone({type:"square",freq:220,freqEnd:60,dur:.15,gain:.4,pos:t})}remoteShot(t,e){t==="shotgun"?this.shotgun(e):t==="sniper"?this.sniperShot(e):this.enemyShot(e)}spawn(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(let n=0;n<5;n++)this.noise({at:e+n*.05,dur:.04,gain:.3,type:"highpass",freq:2500,pos:t})}lunge(t){this.tone({type:"sawtooth",freq:200,freqEnd:700,dur:.3,gain:.5,pos:t})}shieldHit(t){this.tone({type:"square",freq:700,freqEnd:300,dur:.15,gain:.5,pos:t}),this.noise({dur:.1,gain:.4,type:"highpass",freq:3e3,pos:t})}explosion(t){this.noise({dur:.7,gain:.8,type:"lowpass",freq:900,freqEnd:60,pos:t}),this.tone({type:"triangle",freq:80,freqEnd:25,dur:.7,gain:.7,pos:t}),this.noise({dur:.2,gain:.5,type:"bandpass",freq:3e3,pos:t})}fuse(t){this.noise({dur:.1,gain:.2,type:"highpass",freq:5e3,pos:t})}bulletImpact(t){this.noise({dur:.05,gain:.3,type:"highpass",freq:1500,pos:t})}ricochet(t){this.tone({type:"sine",freq:2500,freqEnd:800,dur:.15,gain:.4,pos:t})}pickup(){this.tone({type:"triangle",freq:700,freqEnd:1100,dur:.1,gain:.4}),this.tone({type:"triangle",freq:1100,freqEnd:1500,dur:.15,gain:.4,delay:.1})}wave(){[440,554,659,880].forEach((e,n)=>{this.tone({type:"triangle",freq:e,dur:.15,gain:.3,delay:n*.1})})}waveClear(){[659,880,1108,1318].forEach((e,n)=>{this.tone({type:"triangle",freq:e,dur:.2,gain:.4,delay:n*.15})})}switchWeapon(){this.noise({dur:.1,gain:.3,type:"bandpass",freq:1800})}heartbeat(){this.tone({type:"sine",freq:55,dur:.15,gain:.5}),this.tone({type:"sine",freq:50,dur:.2,gain:.4,delay:.2})}tick(){this.noise({dur:.02,gain:.2,type:"highpass",freq:4e3})}hitstop(){this.tone({type:"sine",freq:60,dur:.1,gain:.5})}stomp(t){this.noise({dur:.3,gain:.6,type:"lowpass",freq:400,freqEnd:60,pos:t}),this.tone({type:"sine",freq:60,freqEnd:25,dur:.3,gain:.7,pos:t})}bossRoar(t){this.tone({type:"sawtooth",freq:90,freqEnd:60,dur:.8,gain:.6,pos:t}),this.noise({dur:.8,gain:.5,type:"bandpass",freq:500,pos:t})}smash(t,e){this.noise({dur:e?.5:.3,gain:e?.7:.5,type:"lowpass",freq:600,freqEnd:100,pos:t}),this.noise({dur:.1,gain:.4,type:"highpass",freq:2e3,pos:t}),this.tone({type:"triangle",freq:120,freqEnd:40,dur:e?.5:.3,gain:.6,pos:t})}parry(){[2200,3300,4700].forEach(e=>{this.tone({type:"sine",freq:e,dur:.1,gain:.3})}),this.noise({dur:.05,gain:.4,type:"highpass",freq:3e3})}perfectParry(){this.parry(),this.tone({type:"triangle",freq:880,freqEnd:1760,dur:.2,gain:.5})}focusIn(){this.tone({type:"sine",freq:1200,freqEnd:420,dur:.4,gain:.5}),this.noise({dur:.4,gain:.3,type:"bandpass",freq:800})}focusSlash(){this.noise({dur:.2,gain:.5,type:"bandpass",freq:600,freqEnd:4e3}),this.tone({type:"triangle",freq:180,freqEnd:60,dur:.2,gain:.6}),this.tone({type:"sine",freq:1200,dur:.1,gain:.2}),this.tone({type:"sine",freq:2400,dur:.1,gain:.1})}pump(){this.noise({dur:.1,gain:.4,type:"bandpass",freq:1500}),this.noise({dur:.1,gain:.3,type:"bandpass",freq:900,delay:.15})}shell(){this.noise({dur:.05,gain:.2,type:"highpass",freq:2500}),this.tone({type:"square",freq:1400,freqEnd:900,dur:.1,gain:.15,delay:.05})}cylinder(){this.noise({dur:.05,gain:.3,type:"highpass",freq:2e3}),this.tone({type:"square",freq:700,freqEnd:400,dur:.05,gain:.2,delay:.1}),this.noise({dur:.05,gain:.2,type:"highpass",freq:2500,delay:.2})}airdrop(){this.tone({type:"triangle",freq:660,dur:.2,gain:.4}),this.tone({type:"triangle",freq:880,dur:.3,gain:.4,delay:.1})}crateLand(t){this.noise({dur:.4,gain:.6,type:"lowpass",freq:500,freqEnd:80,pos:t})}flyerDive(t){this.tone({type:"sawtooth",freq:900,freqEnd:300,dur:.4,gain:.4,pos:t}),this.noise({dur:.4,gain:.3,type:"bandpass",freq:1200,pos:t})}flyerBuzz(t){this.tone({type:"sawtooth",freq:420,dur:.1,gain:.05,pos:t})}shotgun(t){this.noise({dur:.3,gain:.6,type:"lowpass",freq:1500,freqEnd:150,pos:t}),this.tone({type:"triangle",freq:90,freqEnd:30,dur:.25,gain:.7,pos:t})}sniperShot(t){this.noise({dur:.35,gain:.6,type:"bandpass",freq:700,freqEnd:120,pos:t}),this.tone({type:"sawtooth",freq:400,freqEnd:50,dur:.3,gain:.5,pos:t})}sniperAim(t){this.tone({type:"sine",freq:1800,dur:.12,gain:.2,pos:t})}winded(){this.tone({type:"triangle",freq:220,freqEnd:140,dur:.3,gain:.4})}get musicPlaying(){return this._musicPlaying}musicOn(t){t!==this._musicPlaying&&(this._musicPlaying=t,t?(this.ctx||this.init(),this.musicStep=0,this.musicInterval=setInterval(()=>this.playMusicStep(),150)):clearInterval(this.musicInterval))}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}setTune(t){this.tune=t}playMusicStep(){if(!this.ctx||this.intensity<.1)return;const t=this.musicStep%16,e=[220,246,261,293,329,349,392,440];if(t%4===0){const n=e[(this.tune+t)%e.length]/2;this.tone({type:"triangle",freq:n,dur:.2,gain:.2*this.intensity})}if(t%2===0&&this.noise({dur:.05,gain:.05*this.intensity,type:"highpass",freq:4e3}),t%4===2&&this.noise({dur:.1,gain:.1*this.intensity,type:"lowpass",freq:800,freqEnd:200}),this.intensity>.5&&Math.random()<.5){const n=e[Math.floor(Math.random()*e.length)];this.tone({type:"square",freq:n,dur:.1,gain:.1*this.intensity}),this.tone({type:"square",freq:n*1.01,dur:.1,gain:.1*this.intensity})}this.musicStep++}setVolume(t){this.volume=t}play(t,...e){if(t){if(t==="step"||t==="footstep")return this.footstep(...e);if(t==="waveStart"||t==="wave")return this.wave(...e);if(t==="waveClear")return this.waveClear(...e);if(typeof this[t]=="function")return this[t](...e)}}}const yt=new qp,_i=Math.PI*2,Se=(s,t,e)=>s<t?t:s>e?e:s,Xp=(s,t,e)=>s+(t-s)*e,pe=(s,t,e,n)=>Xp(s,t,1-Math.exp(-e*n)),oe=(s=0,t=1)=>s+Math.random()*(t-s),Ni=s=>s[Math.floor(Math.random()*s.length)],ul=s=>((s+Math.PI)%_i+_i)%_i-Math.PI,Yp=(s,t,e)=>s+ul(t-s)*e;class fr{constructor(t=120,e=14){this.value=0,this.vel=0,this.target=0,this.k=t,this.d=e}update(t){const e=t>.02?3:1,n=t/e;for(let i=0;i<e;i++){const r=(this.target-this.value)*this.k-this.vel*this.d;this.vel+=r*n,this.value+=this.vel*n}return this.value}kick(t){this.vel+=t}set(t){this.value=t,this.vel=0}}class na{constructor(t=120,e=14){this.value=new T,this.vel=new T,this.target=new T,this.k=t,this.d=e,this._f=new T}update(t){const e=t>.02?3:1,n=t/e;for(let i=0;i<e;i++)this._f.copy(this.target).sub(this.value).multiplyScalar(this.k).addScaledVector(this.vel,-this.d),this.vel.addScaledVector(this._f,n),this.value.addScaledVector(this.vel,n);return this.value}kick(t,e,n){this.vel.x+=t,this.vel.y+=e,this.vel.z+=n}}new T(0,1,0);const je=new T,Ts=new T,Vt=new T,Ze=new T;new te;class Kp{constructor(t,e,n,i,r){this.camera=t,this.world=e,this.input=n,this.effects=i,this.hud=r,this.body=cl(new T(0,5,0),.36,1.85,.55),this.alive=!0,this.maxHp=100,this.hp=this.maxHp,this.yaw=0,this.pitch=0,this.center=new T,this.eye=new T,this.forward=new T,this.speed=0,this.isLocal=!0,this.weapons=null,this.SPEED=8,this.SPRINT_MULT=1.6,this.CROUCH_MULT=.5,this.JUMP_FORCE=9,this.crouchT=0,this.slideT=0,this.slideDir=new T,this.dashCool=0,this.coyoteT=0,this.wallJumpT=0,this.footstepTimer=0,this.viewBob=new fr(15,.5),this.recoilSpring=new na(20,.4),this.landBob=new fr(12,.5),this.fovSpring=new fr(10,.6),this.baseFOV=80,this.grappling=!1,this.grappleTarget=new T,this.grappleT=0,this.grappleStamina=1,this.grappleMaxDist=60,this.grappleLine=new kt(new Zn(.02,.02,1,8),new ua({color:2236962,transparent:!0,opacity:.8})),this.grappleLine.geometry.translate(0,.5,0),this.grappleLine.geometry.rotateX(Math.PI/2),this.grappleLine.visible=!1,this.hurtT=0,this.regenDelay=4,this.regenTimer=0,this.regenRate=15,this.blockRadius=0}get health(){return this.hp}set health(t){this.hp=t}get maxHealth(){return this.maxHp}get pos(){return this.body.pos}spawn(t){Array.isArray(t)?this.body.pos.set(t[0],t[1],t[2]):t&&typeof t.x=="number"&&this.body.pos.copy(t),this.body.vel.set(0,0,0),this.hp=this.maxHp,this.alive=!0,this.regenTimer=0,this.hurtT=0,this.crouchT=0,this.slideT=0,this.dashCool=0,this.coyoteT=0,this.grappling=!1,this.grappleStamina=1,!this.grappleLine.parent&&this.camera.parent&&this.camera.parent.add(this.grappleLine)}update(t){if(!this.alive)return;this.yaw+=this.input.look.x,this.pitch=Se(this.pitch+this.input.look.y,-Math.PI/2+.01,Math.PI/2-.01);let e=this.input.move.x,n=this.input.move.y,i=Math.abs(e)>.1||Math.abs(n)>.1,r=this.input.down("sprint")&&n>0&&this.body.onGround&&this.crouchT<.5&&!this.input.down("crouch"),a=1;r&&(a=this.SPRINT_MULT),this.crouchT>.5&&(a=this.CROUCH_MULT);let o=this.SPEED*a;this.speed=i?o:0;let l=Math.sqrt(e*e+n*n);l>1&&(e/=l,n/=l);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),u=(e*h-n*c)*o,d=(e*c+n*h)*o,p=this.input.down("crouch");if(p&&r&&this.body.onGround&&this.slideT<=0&&(this.slideT=.5,this.slideDir.set(u,0,d).normalize().multiplyScalar(this.SPEED*1.8),yt.play("slide")),p?this.crouchT=pe(this.crouchT,1,10,t):this.crouchT=pe(this.crouchT,0,10,t),this.body.height=1.85-this.crouchT*.75,this.slideT>0&&(this.slideT-=t,u=this.slideDir.x*(this.slideT/.5),d=this.slideDir.z*(this.slideT/.5)),this.body.onGround?(this.body.vel.x=pe(this.body.vel.x,u,15,t),this.body.vel.z=pe(this.body.vel.z,d,15,t)):(this.body.vel.x=pe(this.body.vel.x,u,5,t),this.body.vel.z=pe(this.body.vel.z,d,5,t)),this.body.onGround?(this.coyoteT=.12,this.wallJumpT=0):(this.coyoteT-=t,this.body.hitWall?this.wallJumpT=.2:this.wallJumpT-=t),this.input.pressed("jump")&&(this.body.onGround||this.coyoteT>0?(this.body.vel.y=this.JUMP_FORCE,this.coyoteT=0,yt.play("jump")):this.body.hitWall&&this.wallJumpT>0&&(this.body.vel.y=8,this.body.vel.x+=this.body.wallNormal.x*6,this.body.vel.z+=this.body.wallNormal.z*6,this.wallJumpT=0,yt.play("jump"))),this.dashCool>0&&(this.dashCool-=t),this.input.pressed("dash")&&this.dashCool<=0){let f=u,w=d;i||(f=-c*this.SPEED,w=h*this.SPEED);let E=Math.sqrt(f*f+w*w);E>0&&(f/=E,w/=E),this.body.vel.x+=f*15,this.body.vel.z+=w*15,this.dashCool=1.5,yt.play("dash"),this.effects.shakeAmt+=.2,this.fovSpring.velocity+=20}this.grappling||(this.body.vel.y-=24*t);let g=this.body.onGround;if(this.world.moveBody(this.body,t),!g&&this.body.onGround&&this.body.landVel<-4&&(yt.play("land"),this.landBob.kick(-this.body.landVel*.05)),this.body.onGround&&i){this.footstepTimer+=t;let f=r?.25:.35;this.footstepTimer>f&&(this.footstepTimer=0,yt.play("step"))}else this.footstepTimer=0;let _=1.65-this.crouchT*.65;if(this.input.pressed("grapple")&&!this.grappling&&this.grappleStamina>.2){je.set(this.body.pos.x,this.body.pos.y+_,this.body.pos.z),Ts.set(0,0,-1).applyEuler(new Xe(this.pitch,this.yaw,0,"YXZ"));let f=this.world.raycast(je,Ts,this.grappleMaxDist,hl);f&&(this.grappleTarget.copy(f.point),this.grappling=!0,yt.play("grappleFire"),!this.grappleLine.parent&&this.camera.parent&&this.camera.parent.add(this.grappleLine),this.grappleLine.visible=!0)}if(this.grappling){je.set(this.body.pos.x,this.body.pos.y+1,this.body.pos.z);let f=Ts.copy(this.grappleTarget).sub(je),w=f.length();w>1&&(f.normalize(),this.body.vel.x=pe(this.body.vel.x,f.x*25,5,t),this.body.vel.y=pe(this.body.vel.y,f.y*25,5,t),this.body.vel.z=pe(this.body.vel.z,f.z*25,5,t)),this.grappleStamina-=t*.5;let E=Vt.copy(this.eye).add(this.forward.clone().multiplyScalar(.5)).add(new T(.2,-.2,0).applyEuler(this.camera.rotation));this.grappleLine.position.copy(E),this.grappleLine.lookAt(this.grappleTarget),this.grappleLine.scale.set(1,1,E.distanceTo(this.grappleTarget)),yt.reelLoop&&yt.reelLoop(!0),(this.input.released("grapple")||this.grappleStamina<=0||w<1.5)&&(this.grappling=!1,yt.reelLoop&&yt.reelLoop(!1),this.grappleLine.visible=!1)}else this.grappleStamina=Math.min(1,this.grappleStamina+t*.3),yt.reelLoop&&yt.reelLoop(!1);this.viewBob.update(t),this.recoilSpring.update(t),this.landBob.update(t),this.fovSpring.update(t),this.body.onGround&&i?this.viewBob.target=Math.sin(performance.now()*.015)*.05*a:this.viewBob.target=0;let m=this.baseFOV;r&&(m+=10),this.grappling&&(m+=15),this.fovSpring.target=m-this.baseFOV,this.eye.set(this.body.pos.x,this.body.pos.y+_+this.landBob.value+this.viewBob.value,this.body.pos.z),this.eye.add(this.recoilSpring.value),this.camera.position.copy(this.eye),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.camera.fov=this.baseFOV+this.fovSpring.value,this.camera.updateProjectionMatrix(),this.center.set(this.body.pos.x,this.body.pos.y+this.body.height/2,this.body.pos.z),this.camera.getWorldDirection(this.forward),this.regenTimer+=t,this.regenTimer>this.regenDelay&&this.hp<this.maxHp&&(this.hp+=this.regenRate*t,this.hp>this.maxHp&&(this.hp=this.maxHp)),this.hud&&this.hud.updateHealth?this.hud.updateHealth(this.hp,this.maxHp):this.hud&&this.hud.setHealth&&this.hud.setHealth(this.hp,this.maxHp),this.hurtT>0&&(this.hurtT-=t),this.body.pos.y<-15&&this.die()}takeDamage(t,e){if(this.alive){if(this.hp-=t,yt.play("hurt"),this.hurtT=1,this.regenTimer=0,this.effects.shakeAmt+=.3,e&&this.hud&&this.hud.addDamageIndicator){je.copy(e).sub(this.center),je.y=0,je.normalize();let n=Math.atan2(je.x,je.z)-this.yaw;this.hud.addDamageIndicator(n)}this.hp<=0&&this.die()}}knockback(t,e){this.body.vel.x+=t.x*e,this.body.vel.y+=e*.5,this.body.vel.z+=t.z*e,this.body.onGround=!1}die(){this.alive&&(this.alive=!1,yt.play("death"),this.effects.shakeAmt+=.5,this.hp=0)}tryDeflect(t){const e=this.weapons?this.weapons.getActiveWeapon():null;return e&&e.name.toLowerCase()==="katana"&&this.weapons.swingT>0?{ret:!0,perfect:!1}:null}tryBlockMelee(t){const e=this.weapons?this.weapons.getActiveWeapon():null;return e&&e.name.toLowerCase()==="katana"&&(this.input.down("aim")||this.weapons.swingT>0)?(yt.play("parry"),!0):!1}getHurt(){return Math.max(0,this.hurtT)}getFlash(){return this.hurtT>.8?(this.hurtT-.8)/.2:0}getLowHp(){return this.hp<30?1-this.hp/30:0}}const $e={rifle:{name:"Rifle",ammo:30,reserve:120,fireRate:.1,dmg:18,spread:.02,recoilUp:1.8,recoilSide:.4,reloadTime:1.5,auto:!0,hitscan:!0,slot:1,pos:new T(.25,-.22,-.45)},shotgun:{name:"Shotgun",ammo:6,reserve:30,fireRate:.7,dmg:12,spread:.09,pellets:8,recoilUp:4,recoilSide:1.2,reloadTime:2.2,auto:!1,hitscan:!0,slot:2,pumpTime:.35,pos:new T(.28,-.25,-.5)},sniper:{name:"Sniper",ammo:5,reserve:20,fireRate:1.2,dmg:85,spread:.002,recoilUp:6,recoilSide:2,reloadTime:2.8,auto:!1,hitscan:!0,slot:3,adsZoom:-25,adsSpread:.001,pos:new T(.22,-.2,-.5)},katana:{name:"Katana",ammo:1/0,reserve:1/0,fireRate:.35,dmg:55,reach:3.5,arc:Math.cos(.8),recoilUp:0,recoilSide:0,reloadTime:0,auto:!1,hitscan:!1,slot:4,swingDur:.3,pos:new T(.3,-.3,-.4)}};class Jp{constructor(t,e,n,i,r,a,o){this.camera=t,this.scene=e,this.world=n,this.player=i,this.enemies=r,this.effects=a,this.hud=o,this.slots=[{def:$e.rifle,ammo:$e.rifle.ammo,reserve:$e.rifle.reserve,cooldown:0,reloading:!1,reloadT:0},{def:$e.shotgun,ammo:$e.shotgun.ammo,reserve:$e.shotgun.reserve,cooldown:0,reloading:!1,reloadT:0},{def:$e.sniper,ammo:$e.sniper.ammo,reserve:$e.sniper.reserve,cooldown:0,reloading:!1,reloadT:0},{def:$e.katana,ammo:1/0,reserve:1/0,cooldown:0,reloading:!1,reloadT:0}],this.activeSlot=0,this.ads=!1,this.adsT=0,this.swingT=0,this.focusMeter=0,this.focusReady=!1,this.grenades=3,this.grenadeCool=0,this.viewmodel=new Ft,this.camera.add(this.viewmodel),this.swaySpring=new na(100,15),this.kickSpring=new na(150,15),this.meshes=[],this.buildMeshes(),this.switchWeapon(0)}buildMeshes(){const t=(c,h,u,d,p,g,_)=>{const m=new kt(new we(c,h,u),nn({ink:d}));return m.position.set(p,g,_),m},e=(c,h,u,d,p,g,_=Math.PI/2)=>{const m=new kt(new Zn(c,c,h,8),nn({ink:u}));return m.position.set(d,p,g),m.rotation.x=_,m},n=new Ft;n.add(t(.06,.08,.45,he.BLUE,0,0,0)),n.add(e(.018,.3,he.BLUE,0,0,-.35)),n.add(t(.04,.12,.06,he.BLACK,0,-.1,.05)),n.add(t(.05,.07,.15,he.BLACK,0,-.02,.3)),this.meshes.push(n);const i=new Ft;i.add(t(.07,.1,.5,he.BLUE,0,0,0)),i.add(e(.025,.4,he.BLUE,0,0,-.45)),i.add(t(.06,.06,.15,he.BLACK,0,-.08,-.25)),this.meshes.push(i);const r=new Ft;r.add(t(.05,.08,.55,he.BLUE,0,0,0)),r.add(e(.015,.7,he.BLUE,0,0,-.6)),r.add(t(.04,.04,.12,he.BLACK,0,.06,0));const a=e(.005,.1,he.BLACK,-.03,-.08,-.4,0);a.rotation.z=Math.PI/6;const o=e(.005,.1,he.BLACK,.03,-.08,-.4,0);o.rotation.z=-Math.PI/6,r.add(a,o),this.meshes.push(r);const l=new Ft;l.add(t(.02,.015,.85,he.BLACK,0,0,-.4)),l.add(t(.12,.03,.02,he.BLACK,0,0,0)),l.add(t(.03,.025,.22,he.BLACK,0,0,.12)),this.meshes.push(l),this.meshes.forEach(c=>{c.visible=!1,this.viewmodel.add(c)})}getActiveWeapon(){return this.slots[this.activeSlot].def}switchWeapon(t){t===this.activeSlot&&this.meshes[t].visible||(this.slots[this.activeSlot].reloading=!1,this.meshes[this.activeSlot].visible=!1,this.activeSlot=t,this.meshes[this.activeSlot].visible=!0,yt.switchWeapon&&yt.switchWeapon(),this.ads=!1,this.hud&&this.hud.setWeaponSlots&&this.hud.setWeaponSlots(this.slots.map(e=>e.def),this.activeSlot),this.updateHUDAmmo())}updateHUDAmmo(){if(!this.hud||!this.hud.setAmmo)return;const t=this.slots[this.activeSlot];this.hud.setAmmo(t.ammo,t.reserve)}addAmmo(t,e){for(const n of this.slots)if(n.def.name.toLowerCase()===t.toLowerCase()){n.reserve+=e,this.activeSlot===this.slots.indexOf(n)&&this.updateHUDAmmo();break}}addFocus(t){this.focusMeter=Se(this.focusMeter+t,0,1),this.focusMeter>=1&&(this.focusReady=!0),this.hud&&this.hud.setFocus&&this.hud.setFocus(this.focusMeter,this.focusReady)}update(t,e){if(e.pressed("1")&&this.switchWeapon(0),e.pressed("2")&&this.switchWeapon(1),e.pressed("3")&&this.switchWeapon(2),e.pressed("4")&&this.switchWeapon(3),e.wheelDir){let f=(this.activeSlot+Math.sign(e.wheelDir))%this.slots.length;f<0&&(f+=this.slots.length),this.switchWeapon(f),e.wheelDir=0}const n=this.slots[this.activeSlot],i=n.def;n.cooldown>0&&(n.cooldown-=t),this.grenadeCool>0&&(this.grenadeCool-=t),this.swingT>0&&(this.swingT-=t);const r=i.name==="Rifle"||i.name==="Sniper"||i.name==="Shotgun";if(this.ads=r&&e.down("aim"),this.adsT=pe(this.adsT,this.ads?1:0,15,t),this.player&&this.player.fovSpring){const f=i.adsZoom&&this.ads?i.adsZoom:0;this.player.fovSpring.target=f}this.hud&&this.hud.setSniperScope&&this.hud.setSniperScope(i.name==="Sniper"&&this.adsT>.8);let a=i.spread||0;if(this.ads&&i.adsSpread!==void 0?a=i.adsSpread:this.ads&&(a*=.5),this.hud&&this.hud.setCrosshairSpread&&(this.hud.setCrosshairSpread(a*1e3),this.hud.setCrosshairStyle&&this.hud.setCrosshairStyle(i.name==="Sniper"&&this.adsT>.5?"none":"default")),i.ammo!==1/0&&((e.pressed("reload")||n.ammo<=0&&(e.pressed("fire")||e.down("fire")))&&n.reserve>0&&n.ammo<i.ammo&&!n.reloading&&(n.reloading=!0,n.reloadT=i.reloadTime,yt.reload&&yt.reload(),this.hud&&this.hud.setReloading&&this.hud.setReloading(!0)),n.reloading&&(n.reloadT-=t,n.reloadT<=0))){n.reloading=!1;const f=i.ammo-n.ammo,w=Math.min(f,n.reserve);n.ammo+=w,n.reserve-=w,this.updateHUDAmmo(),this.hud&&this.hud.setReloading&&this.hud.setReloading(!1)}(i.auto?e.down("fire"):e.pressed("fire"))&&n.cooldown<=0&&!n.reloading&&(n.ammo>0||i.ammo===1/0)&&this.fire(i,n,a),i.name==="Katana"&&this.focusReady&&e.pressed("focus")&&(this.focusReady=!1,this.focusMeter=0,this.hud&&this.hud.setFocus&&this.hud.setFocus(this.focusMeter,this.focusReady),this.fireKatanaSpecial(i)),e.pressed("grenade")&&this.grenades>0&&this.grenadeCool<=0&&(this.grenades--,this.grenadeCool=1,this.spawnGrenade()),this.swaySpring.update(t),this.kickSpring.update(t);const l=performance.now()*.001,c=this.player&&this.player.onGround&&this.player.vel&&(Math.abs(this.player.vel.x)>1||Math.abs(this.player.vel.z)>1),h=c?.015:.005,u=c?12:3,d=Math.cos(l*u)*h,p=Math.sin(l*u*2)*h,g=i.pos.clone(),_=new T(0,-.15,-.3),m=g.clone().lerp(_,this.adsT);if(m.add(this.swaySpring.value),m.add(this.kickSpring.value),m.x+=d,m.y+=p,this.viewmodel.position.copy(m),this.viewmodel.rotation.set(0,0,0),this.player&&this.player.yawDelta&&(this.viewmodel.rotation.y=Se(this.player.yawDelta*-.1,-.1,.1),this.viewmodel.rotation.x=Se(this.player.pitchDelta*-.1,-.1,.1)),this.player&&this.player.sprinting&&!this.ads&&c&&i.name!=="Katana"&&(this.viewmodel.rotation.z=-.3,this.viewmodel.position.x+=.1,this.viewmodel.position.y-=.1),n.reloading){const f=n.reloadT/i.reloadTime;this.viewmodel.rotation.x-=Math.sin(f*Math.PI)*.5,this.viewmodel.rotation.y+=Math.sin(f*Math.PI)*.3,this.viewmodel.position.y-=Math.sin(f*Math.PI)*.1}if(i.name==="Katana"&&this.swingT>0){const f=1-this.swingT/i.swingDur;this.viewmodel.rotation.y=Math.sin(f*Math.PI)*-1.5,this.viewmodel.rotation.x=Math.sin(f*Math.PI)*-1,this.viewmodel.position.z-=Math.sin(f*Math.PI)*.5}}fire(t,e,n){e.cooldown=t.fireRate,t.ammo!==1/0&&(e.ammo--,this.updateHUDAmmo()),this.kickSpring&&(this.kickSpring.kick(0,0,.05),this.kickSpring.target.set(0,0,0)),this.player&&this.player.recoilSpring&&this.player.recoilSpring.kick(t.recoilUp,oe(-t.recoilSide,t.recoilSide));const i=this.camera.position,r=new T(0,0,-1).applyQuaternion(this.camera.quaternion);if(t.hitscan){const a=t.pellets||1;for(let o=0;o<a;o++){const l=r.clone();n>0&&l.add(new T(oe(-n,n),oe(-n,n),oe(-n,n))),l.normalize();const c=this.enemies&&this.enemies.raycast?this.enemies.raycast(i,l):null,h=this.world&&this.world.raycast?this.world.raycast(i,l,100,hl):null;let u=null,d=null;c&&(!h||c.dist<h.dist)?(this.enemies.damage&&this.enemies.damage(c.enemy,t.dmg,l,i),u=c.point,d=c.normal):h?(u=h.point,d=h.normal,this.effects&&this.effects.bulletImpact&&this.effects.bulletImpact(u,d)):u=i.clone().add(l.multiplyScalar(50))}}else if(t.name==="Katana"){if(this.swingT=t.swingDur,this.enemies&&this.enemies.inArc){const a=this.enemies.inArc(i,r,t.reach,t.arc);for(const o of a)this.enemies.damage&&this.enemies.damage(o,t.dmg,r,i)}this.effects&&this.effects.katanaDeflect&&this.effects.katanaDeflect(i,t.reach)}this.effects&&this.effects.muzzleFlash&&t.hitscan&&this.effects.muzzleFlash(this.viewmodel.children[this.activeSlot]),t.name==="Shotgun"?yt.shotgunFire&&yt.shotgunFire():t.name==="Sniper"?yt.sniperFire&&yt.sniperFire():t.name==="Katana"?yt.katanaSwing&&yt.katanaSwing():yt.shot&&yt.shot()}fireKatanaSpecial(t){this.swingT=t.swingDur*1.5,this.effects&&this.effects.timeSlow&&this.effects.timeSlow(2);const e=this.camera.position,n=new T(0,0,-1).applyQuaternion(this.camera.quaternion);if(this.enemies&&this.enemies.inArc){const i=this.enemies.inArc(e,n,t.reach*1.5,Math.cos(1.2));for(const r of i)this.enemies.damage&&this.enemies.damage(r,t.dmg*3,n,e)}yt.katanaSpecial&&yt.katanaSpecial()}spawnGrenade(){const t=this.camera.position.clone(),e=new T(0,0,-1).applyQuaternion(this.camera.quaternion);e.add(new T(0,.2,0)).normalize(),this.world&&this.world.spawnGrenade?this.world.spawnGrenade(t,e.multiplyScalar(20)):this.effects&&this.effects.spawnGrenade&&this.effects.spawnGrenade(t,e.multiplyScalar(20)),yt.throwGrenade&&yt.throwGrenade(),this.hud&&this.hud.setGrenades&&this.hud.setGrenades(this.grenades)}}const Yn={grunt:{hp:100,speed:5.2,weapon:"rifle",range:28,stop:16,keep:7,burst:3,burstInt:.15,cool:[1.6,2.6],dmg:6,spread:.055,pspeed:36,score:100,scale:1,name:"GRUNT",hat:"cap",build:{bodyW:1,headS:1,limbR:.032}},rusher:{hp:70,speed:7.6,weapon:"blade",lunge:2.9,reach:3,standoff:1.9,cool:[1,1.5],dmg:15,score:120,scale:.95,name:"RUSHER",hat:"band",build:{bodyW:.82,headS:.95,limbR:.027}},heavy:{hp:320,speed:3,weapon:"shotgun",range:18,stop:9,keep:5,pellets:7,cool:[2.4,3.2],dmg:5,spread:.13,pspeed:32,score:260,scale:1.25,name:"HEAVY",hat:"helmet",build:{bodyW:1.55,headS:.88,limbR:.05}},sniper:{hp:60,speed:3.6,weapon:"sniper",range:90,stop:90,keep:15,aimTime:1.7,cool:[2.8,3.8],dmg:22,spread:.006,pspeed:95,score:180,scale:1.05,name:"SNIPER",stationary:!0,hat:"hood",build:{bodyW:.78,headS:.92,limbR:.026}},shield:{hp:150,speed:3.8,weapon:"pistol",range:20,stop:8,keep:4,burst:2,burstInt:.2,cool:[1.8,2.6],dmg:5,spread:.06,pspeed:34,score:200,scale:1.05,name:"SHIELDBEARER",hat:"helmet",shield:!0,build:{bodyW:1.2,headS:.9,limbR:.042}},bomber:{hp:26,speed:6.5,weapon:"bomb",fuseRange:3.4,fuse:1.05,blast:4.2,dmg:24,score:150,scale:.9,name:"INK BOMB",ink:2,model:"bomber"},flyer:{hp:40,speed:6.2,weapon:"dive",dmg:10,cool:[2.8,4.2],score:140,scale:1.5,name:"PAPER WASP",flying:!0,model:"flyer"},boss:{hp:2600,speed:3.2,weapon:"boss",bossKind:"doodler",range:32,stop:6,keep:0,cool:[2.6,3.6],dmg:22,score:2500,scale:2.7,name:"THE DOODLER",boss:!0,ink:2,hat:"crown",build:{bodyW:1.35,headS:1.15,limbR:.06}},eraser:{hp:3400,speed:4.2,weapon:"boss",bossKind:"eraser",range:30,stop:8,keep:0,cool:[2.2,3.2],dmg:26,score:3200,scale:2.6,name:"THE ERASER",boss:!0,ink:5,model:"blob",build:{}},inkblot:{hp:3e3,speed:3,weapon:"boss",bossKind:"inkblot",range:34,stop:10,keep:0,cool:[2.4,3.4],dmg:20,score:3600,scale:2.4,name:"THE INKBLOT",boss:!0,ink:2,model:"blob",build:{}}};Yn.boss_doodler=Yn.boss;Yn.boss_eraser=Yn.eraser;Yn.boss_inkblot=Yn.inkblot;const Cn=(s,t,e)=>{const n=new ol(new T(0,0,0),new T(0,-e,0)),i=new ma(n,4,t,6,!1);return new kt(i,s)};function Zp(s,t,e){const n=new Ft,i={},r={},a={eyes:new Ft,xeyes:new Ft},o=new me,l=[],c=e.build||{bodyW:1,headS:1,limbR:.032};e.shield&&l.push(["shield",.66]),l.push(["head",.3],["torso",.33],["hips",.2]),l.push(["armL",.11],["armR",.11],["foreL",.1],["foreR",.1]),l.push(["legL",.13],["legR",.13],["shinL",.11],["shinR",.11]);const h=new Ft;h.position.y=.86,n.add(h),r.hips=h,i.hips=h;const u=new Ft;u.position.y=.26,h.add(u),r.torso=u,i.torso=u;const d=new qe(1,16,16);d.scale(.15*c.bodyW,.15,.095*c.bodyW);const p=new kt(d,s);u.add(p);const g=new kt(new Zn(.04,.04,.1),s);g.position.y=.56,u.add(g);const _=new Ft;_.position.y=.62,u.add(_),r.headG=_;const m=new Ft;_.add(m),i.head=m;const f=new qe(1,16,16);f.scale(.1375*c.headS,.15*c.headS,.125*c.headS);const w=new kt(f,s);m.add(w);const E=new kt(new qe(.02),t);E.position.set(-.05,.02,.12*c.headS);const v=E.clone();if(v.position.x=.05,a.eyes.add(E,v),m.add(a.eyes),a.xeyes.visible=!1,m.add(a.xeyes),e.hat){const q=new Ft;if(q.position.y=.14*c.headS,e.hat==="cap"){const W=new kt(new qe(.12,16,8,0,Math.PI*2,0,Math.PI/2),s),Z=new kt(new we(.2,.02,.2),s);Z.position.set(0,0,.1),q.add(W,Z)}else if(e.hat==="helmet"){const W=new kt(new qe(.14,16,8,0,Math.PI*2,0,Math.PI/2),s);q.add(W)}m.add(q)}const U=new Ft;U.position.set(-.26*c.bodyW,.46,0),u.add(U),r.armL=U,i.armL=U,U.add(Cn(s,c.limbR,.3));const A=new Ft;A.position.y=-.3,U.add(A),r.foreL=A,i.foreL=A,A.add(Cn(s,c.limbR,.28));const C=new Ft;C.position.set(.26*c.bodyW,.46,0),u.add(C),r.armR=C,i.armR=C,C.add(Cn(s,c.limbR,.3));const P=new Ft;P.position.y=-.3,C.add(P),r.foreR=P,i.foreR=P,P.add(Cn(s,c.limbR,.28));const S=new Ft;S.position.y=-.28,P.add(S),r.gun=S;const M=new kt(new we(.08,.08,.3),s);S.add(M),o.position.set(0,0,.15),S.add(o);const R=new Ft;R.position.set(-.13*c.bodyW,-.02,0),h.add(R),r.legL=R,i.legL=R,R.add(Cn(s,c.limbR,.42));const k=new Ft;k.position.y=-.42,R.add(k),r.shinL=k,i.shinL=k,k.add(Cn(s,c.limbR,.42));const F=new Ft;F.position.set(.13*c.bodyW,-.02,0),h.add(F),r.legR=F,i.legR=F,F.add(Cn(s,c.limbR,.42));const V=new Ft;if(V.position.y=-.42,F.add(V),r.shinR=V,i.shinR=V,V.add(Cn(s,c.limbR,.42)),e.shield){const q=new Ft;q.position.set(0,0,.2),u.add(q),r.shieldG=q;const W=new kt(new we(.92,1.3,.07),s);q.add(W),i.shield=q}return e.scale&&n.scale.setScalar(e.scale),{root:n,parts:i,J:r,tip:o,face:a,hit:l}}function $p(s,t,e,n){const i=new Ft,r={},a={},o={eyes:new Ft,xeyes:new Ft},l=new me,c=[];c.push(["torso",.5]);const h=new Ft;h.position.y=.5,i.add(h),a.torso=h,r.torso=h;const u=new kt(new qe(.5,16,16),s);h.add(u),o.eyes.position.set(0,.1,.48);const d=new kt(new qe(.04),t);d.position.x=-.15;const p=d.clone();return p.position.x=.15,o.eyes.add(d,p),h.add(o.eyes),o.xeyes.visible=!1,h.add(o.xeyes),h.add(l),e.scale&&i.scale.setScalar(e.scale),{root:i,parts:r,J:a,tip:l,face:o,hit:c}}function jp(s,t,e){const n=new Ft,i={},r={},a={eyes:new Ft,xeyes:new Ft},o=new me,l=[];l.push(["torso",.3]);const c=new Ft;c.position.y=1,n.add(c),r.torso=c,i.torso=c;const h=new kt(new Ds(.2,.6,16),s);h.rotation.x=-Math.PI/2,c.add(h),a.eyes.position.set(0,.05,.28);const u=new kt(new qe(.02),t);u.position.x=-.06;const d=u.clone();return d.position.x=.06,a.eyes.add(u,d),c.add(a.eyes),c.add(o),e.scale&&n.scale.setScalar(e.scale),{root:n,parts:i,J:r,tip:o,face:a,hit:l}}class Qp{constructor(t,e,n){this.scene=t,this.world=e,this.enemyMgr=n,this.list=[],this.max=240,this.geom=new we(1,1,1),this.mat=nn({ink:he.RED,fill:!0}),this.mesh=new ea(this.geom,this.mat,this.max),this.mesh.instanceMatrix.setUsage(ws),this.mesh.instanceColor=new Hi(new Float32Array(this.max*3),3),this.mesh.instanceColor.setUsage(ws),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.onFire=null,this._dummy=new me}fire(t,e,n,i,r,a=2,o=.045,l=0){if(this.list.length>=this.max)return;const c={id:Math.random(),pos:t.clone(),prev:t.clone(),vel:e.clone().normalize().multiplyScalar(n),dmg:i,owner:r,life:4,deflected:!1,ink:a,thick:o,origin:t.clone(),blast:l};this.list.push(c),this.onFire&&this.onFire(c)}clear(){this.list=[],this.mesh.count=0}update(t,e){let n=0;for(let i=this.list.length-1;i>=0;i--){const r=this.list[i];if(r.life-=t,r.life<=0){this.list.splice(i,1);continue}r.prev.copy(r.pos),r.blast>0&&(r.vel.y-=15*t),r.pos.addScaledVector(r.vel,t),Math.ceil(r.prev.distanceTo(r.pos)/.5);let a=!1;if(r.pos.y<0&&(a=!0,r.pos.y=0),a){r.blast>0&&this._burst(r,r.pos),this.list.splice(i,1);continue}let o=!1;if(!r.deflected){for(const c of e)if(this._segHitsPlayer(r.prev,r.pos,c,.4)){o=!0;break}}if(o){r.blast>0&&this._burst(r,r.pos),this.list.splice(i,1);continue}const l=r.vel.length()*.05+.2;this._dummy.position.copy(r.pos),this._dummy.quaternion.setFromUnitVectors(new T(0,0,1),r.vel.clone().normalize()),this._dummy.scale.set(r.thick,r.thick,r.blast>0?r.thick*2:l),this._dummy.updateMatrix(),this.mesh.setMatrixAt(n,this._dummy.matrix),this.mesh.instanceColor.setXYZ(n,r.ink,1,0),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}deflectArc(t,e,n,i,r){for(const a of this.list){if(a.deflected)continue;if(a.pos.distanceTo(t)<n){const l=a.pos.clone().sub(t).normalize();e.dot(l)>i&&(a.deflected=!0,a.ink=1,a.dmg*=2,a.vel.negate(),a.life=4)}}}_segHitsPlayer(t,e,n,i){const r=n.pos;return r?r.distanceTo(t)<i:!1}_burst(t,e){}}class tm{constructor(t){this.ctx=t,this.scene=t.scene,this.world=t.world,this.enemies=[],this.alive=0,this.projectiles=new Qp(t.scene,t.world,this),this.mods={speed:1,damage:1},this.onKill=null,this.onBoss=null,this.nextId=1,this.byId=new Map}get active(){return this.enemies.filter(t=>t.alive)}spawn(t,e,n=null){const i=Yn[t];if(!i)return null;const r=nn(i.ink||1,1),a=nn(0,2);let o;i.model==="blob"?o=$p(r,a,i):i.model==="flyer"?o=jp(r,a,i):o=Zp(r,a,i);const{root:l,parts:c,tip:h,face:u,hitSpheres:d}=o,p=cl(e.x,e.y,e.z,i.radius,i.height||i.radius*2,i.mass||1);p.stepHeight=i.stepHeight!==void 0?i.stepHeight:.5;const g={id:n||this.nextId++,type:t,T:i,mat:r,root:l,parts:c,J:o.J||{},tip:h,face:u,hit:d||[],hp:i.hp,maxHp:i.hp,alive:!0,state:"spawn",t:0,body:p,center:new T,yaw:0,yawT:0,phase:0,walk:0,aimAmt:0,flinch:0,flashT:0,flashOn:!1,path:null,pathI:0,pathT:0,pathGoal:new T,losT:0,los:!1,cool:2,burstLeft:0,burstT:0,aimT:0,attackT:0,attackHit:!1,stunDur:0,stuckT:0,strafeDir:oe()>.5?1:-1,strafeT:0,keepMul:1,deadT:0,fuseT:0,shieldHp:i.shield||0,flyState:"orbit",flyT:0,orbitDir:oe()>.5?1:-1,bossAtk:0,target:null};return l.position.copy(e),l.scale.setScalar(.01),this.scene.add(l),this.enemies.push(g),this.byId.set(g.id,g),g.alive&&this.alive++,this.ctx.effects&&this.ctx.effects.burst(e,i.ink||1,10),yt.play("spawn",e,1),g}clear(){for(const t of this.enemies)this.scene.remove(t.root);this.enemies=[],this.alive=0,this.byId.clear(),this.projectiles.clear()}update(t){for(let e=0;e<this.enemies.length;e++){const n=this.enemies[e];if(!(!n.alive||n.T.model==="flyer"))for(let i=e+1;i<this.enemies.length;i++){const r=this.enemies[i];if(!r.alive||r.T.model==="flyer")continue;const a=r.body.pos.x-n.body.pos.x,o=r.body.pos.z-n.body.pos.z,l=a*a+o*o,c=n.T.radius+r.T.radius;if(l>0&&l<c*c){const h=Math.sqrt(l),u=(c-h)*.5,d=a/h*u,p=o/h*u;n.body.pos.x-=d,n.body.pos.z-=p,r.body.pos.x+=d,r.body.pos.z+=p}}}for(let e=this.enemies.length-1;e>=0;e--){const n=this.enemies[e];if(n.t+=t,!n.alive){n.deadT+=t,n.J&&n.J.root&&n.T.model!=="flyer"&&(n.J.root.rotation.x=pe(n.J.root.rotation.x,Math.PI/2,5,t),n.J.root.position.y=pe(n.J.root.position.y,-n.T.height*.3,5,t)),n.deadT>8&&n.root.scale.setScalar(Se(1-(n.deadT-8),0,1)),n.deadT>9&&(this.scene.remove(n.root),this.byId.delete(n.id),this.enemies.splice(e,1));continue}if(n.state==="spawn"){const a=Se(n.t/.6,0,1);n.root.scale.setScalar(a),a===1&&(n.state="active")}n.target=this.ctx.player;let i=je.copy(n.target.body.pos),r=Ts.copy(i);r.y+=1,n.flashT>0?(n.flashT-=t,n.flashOn||(Ao(n.mat,!0),n.flashOn=!0)):n.flashOn&&(Ao(n.mat,!1),n.flashOn=!1),n.flinch=pe(n.flinch,0,10,t),n.stunDur>0?n.stunDur-=t:n.T.model==="flyer"?this._thinkFlyer(n,t,i,r):n.T.isBoss?this._thinkBoss(n,t,i,r):n.T.weapon==="blade"?this._thinkBlade(n,t,i):this._think(n,t,i,r,n.target),n.T.model!=="flyer"&&(n.body.vel.y-=25*t,this.world.move(n.body,t),n.body.pos.y<-6&&this.kill(n,{point:n.body.pos,dir:new T(0,-1,0),crit:!1})),n.yaw=Yp(n.yaw,n.yawT,t*10),n.root.position.copy(n.body.pos),n.T.model==="flyer"?this._animateFlyer(n,t):this._animate(n,t,r),n.center.copy(n.root.position),n.center.y+=n.T.height*.5;for(let a=0;a<n.hit.length;a++){const o=n.hit[a];o.bone&&o.obj&&o.bone.getWorldPosition(o.obj.position)}}this.projectiles.update(t)}_think(t,e,n,i,r){if(t.losT-=e,t.cool-=e,t.losT<=0){t.losT=.12+oe()*.05,t.center.copy(t.root.position),t.center.y+=t.T.height*.7,Vt.subVectors(i,t.center);const u=Vt.length();if(u<t.T.range*1.5){Vt.divideScalar(u);const d=this.world.raycast(t.center,Vt,u,1);t.los=!d}else t.los=!1}Vt.subVectors(n,t.root.position),Vt.length(),Vt.y=0;const a=Vt.length();a>0&&(t.yawT=Math.atan2(Vt.x,Vt.z));const o=t.T.range,l=t.T.keep||o*.5;t.strafeT-=e,t.strafeT<=0&&(t.strafeT=1+oe()*2,t.strafeDir=oe()>.5?1:-1,t.keepMul=.8+oe()*.4);let c=t.T.speed*this.mods.speed;if(t.los&&a<o){t.path=null;let u=0;a<l*t.keepMul*.8?u=-1:a>l*t.keepMul*1.2&&(u=1);const d=Math.sin(t.yawT),p=Math.cos(t.yawT),g=Math.sin(t.yawT+Math.PI/2),_=Math.cos(t.yawT+Math.PI/2);let m=t.root.position.x+d*u*2+g*t.strafeDir*2,f=t.root.position.z+p*u*2+_*t.strafeDir*2;(t.attackT>0||t.aimT>0)&&(c*=.3),this._steer(t,e,m,f,c,20),t.cool<=0&&t.burstLeft<=0&&(t.T.weapon==="sniper"?(t.aimT=1.5,t.cool=t.T.rof):(t.burstLeft=t.T.burst||1,t.burstT=0,t.cool=t.T.rof))}else t.attackT<=0&&t.aimT<=0&&this._follow(t,e,n,c);t.aimT>0?(t.aimT-=e,t.aimT<=0&&this._shoot(t,e,n,r)):t.burstLeft>0&&(t.burstT-=e,t.burstT<=0&&(this._shoot(t,e,n,r),t.burstLeft--,t.burstT=t.T.burstInt||.1));const h=Math.hypot(t.body.vel.x,t.body.vel.z);h>.5?(t.walk=Se(t.walk+e*5,0,1),t.phase+=h*e*.5):t.walk=Se(t.walk-e*5,0,1),t.aimAmt=Se(t.aimAmt+(t.los&&a<o?e*5:-e*5),0,1)}_thinkBlade(t,e,n){const i=t.T.speed*this.mods.speed;Vt.subVectors(n,t.root.position),Vt.y=0;const r=Vt.length();if(t.attackT>0){if(t.attackT-=e,t.walk=pe(t.walk,0,10,e),t.attackT<.6&&t.attackT>.4&&!t.attackHit){t.attackHit=!0;const a=15;t.body.vel.x+=Math.sin(t.yawT)*a,t.body.vel.z+=Math.cos(t.yawT)*a,yt.play("swing",t.root.position,1)}t.attackHit&&r<3&&this.ctx.player&&this.ctx.player.damage&&this.ctx.player.damage(t.T.damage||20)}else t.attackHit=!1,r<2.5?(t.attackT=1,t.yawT=Math.atan2(Vt.x,Vt.z)):(this._follow(t,e,n,i),t.walk=Se(t.walk+e*5,0,1),t.phase+=Math.hypot(t.body.vel.x,t.body.vel.z)*e*.5)}_thinkBoss(t,e,n,i){this._follow(t,e,n,t.T.speed),t.walk=Se(t.walk+e*5,0,1),t.phase+=e*2}_thinkFlyer(t,e,n,i){Vt.subVectors(n,t.root.position);const r=Vt.length();if(t.flyState==="orbit"){t.flyT-=e;const a=11,o=6,l=Math.atan2(Vt.x,Vt.z)+Math.PI/2*t.orbitDir,c=n.x+Math.sin(l)*a,h=n.z+Math.cos(l)*a,u=n.y+o;t.yawT=Math.atan2(c-t.root.position.x,h-t.root.position.z),Ze.set(c,u,h).sub(t.root.position).normalize(),t.body.pos.addScaledVector(Ze,t.T.speed*e),t.flyT<=0&&(t.flyState="dive",t.flyT=2,yt.play("alert",t.root.position,1))}else t.flyState==="dive"?(t.flyT-=e,t.yawT=Math.atan2(Vt.x,Vt.z),Ze.copy(Vt).normalize(),t.body.pos.addScaledVector(Ze,t.T.speed*2.5*e),r<2?(this.ctx.player&&this.ctx.player.damage&&this.ctx.player.damage(t.T.damage||15),t.flyState="climb",t.flyT=1.5):(t.flyT<=0||t.body.onGround)&&(t.flyState="climb",t.flyT=1.5)):t.flyState==="climb"&&(t.flyT-=e,t.body.pos.y+=t.T.speed*1.5*e,t.flyT<=0&&(t.flyState="orbit",t.flyT=3+oe()*2,t.orbitDir*=-1))}_follow(t,e,n,i){if(t.pathT-=e,(t.pathT<=0||!t.path)&&(t.pathT=.5+oe()*.5,this.ctx.nav&&(t.path=this.ctx.nav.findPath(t.root.position,n),t.pathI=0)),t.path&&t.pathI<t.path.length){const r=t.path[t.pathI];Ze.subVectors(r,t.root.position),Ze.y=0,Ze.length()<1?t.pathI++:(this._steer(t,e,r.x,r.z,i,15),r.y>t.root.position.y+.5&&t.body.onGround&&(t.body.vel.y=8))}else this._steer(t,e,n.x,n.z,i,10);t.body.hitWall&&t.body.onGround?(t.stuckT+=e,t.stuckT>.5&&(t.body.vel.y=10,t.stuckT=0)):t.stuckT=0}_steer(t,e,n,i,r,a){const o=n-t.body.pos.x,l=i-t.body.pos.z,c=Math.hypot(o,l);if(c>.1){t.yawT=Math.atan2(o,l);const h=o/c*r,u=l/c*r;t.body.vel.x=pe(t.body.vel.x,h,a,e),t.body.vel.z=pe(t.body.vel.z,u,a,e)}}_shoot(t,e,n,i){if(!t.tip)return;const r=new T;t.tip.getWorldPosition(r);const a=new T().subVectors(n,r);a.y+=1,a.normalize();const o=t.T.proj||"bullet",c=(this.projectiles.TYPES[o]||{dmg:10}).dmg*this.mods.damage;if(t.T.weapon==="shotgun"){for(let h=0;h<5;h++){const u=a.clone();u.x+=(oe()-.5)*.2,u.y+=(oe()-.5)*.2,u.z+=(oe()-.5)*.2,u.normalize(),this.projectiles.fire(r,u,o,!1,t,c)}yt.play("shotgun",r,1)}else a.x+=(oe()-.5)*.05,a.y+=(oe()-.5)*.05,a.z+=(oe()-.5)*.05,a.normalize(),this.projectiles.fire(r,a,o,!1,t,c),yt.play("shoot",r,1);this.ctx.effects&&this.ctx.effects.muzzle(r,a,t.T.ink||1)}damage(t,e,n){if(!t.alive)return!1;t.flashT=.1;let i=e;if(t.shieldHp>0)if(t.shieldHp-=i,t.shieldHp<=0||n.source==="katana"||n.source==="blast")t.shieldHp=0,yt.play("shield_break",t.root.position,1);else return yt.play("shield_hit",t.root.position,1),!0;return n.crit&&(i*=2,yt.play("crit",t.root.position,1)),t.hp-=i,t.flinch=1,this.ctx.effects&&n.point&&this.ctx.effects.blood(n.point,n.dir||new T(0,1,0),t.T.ink||1),t.hp<=0?(this.kill(t,n),!0):(yt.play("hit",t.root.position,1),!1)}kill(t,e){t.alive&&(t.alive=!1,this.alive--,t.face&&t.face.material,yt.play("death",t.root.position,1),this.ctx.effects&&this.ctx.effects.burst(t.root.position,t.T.ink||1,20),(t.T.model==="bomber"||t.T.isBoss)&&this.ctx.effects&&this.ctx.effects.explosion(t.root.position,5,t.T.ink),t.T.isBoss&&this.onBoss&&this.onBoss(t),this.onKill&&this.onKill(t,e,e.crit||e.source==="katana"))}raycast(t,e,n,i=null){let r=null,a=n;for(const o of this.enemies)if(!(!o.alive||o===i))for(const l of o.hit){const c=l.obj?l.obj.position:o.center,h=l.r||o.T.radius;Vt.subVectors(c,t);const u=Vt.dot(e);if(u<0||u>a)continue;Ze.copy(t).addScaledVector(e,u),Ze.distanceToSquared(c)<=h*h&&(a=u,r={enemy:o,part:l.part,dist:u,point:Ze.clone()})}return r}inArc(t,e,n,i){const r=[];for(const a of this.enemies){if(!a.alive)continue;Vt.subVectors(a.center,t);const o=Vt.length();if(o>n)continue;Vt.divideScalar(o),Vt.dot(e)>i&&r.push({enemy:a,dist:o})}return r.sort((a,o)=>a.dist-o.dist),r}_animate(t,e,n){if(!t.J||!t.J.root)return;t.J.root.rotation.y=t.yaw,t.J.root.rotation.x=t.flinch*-.3;const i=Math.sin(t.phase*_i),r=Math.cos(t.phase*_i);if(t.J.hips&&(t.J.hips.position.y=Math.abs(i)*.2*t.walk),t.J.legL&&t.J.legR&&(t.J.legL.rotation.x=r*.8*t.walk,t.J.legR.rotation.x=-r*.8*t.walk),t.J.armL&&t.J.armR){const a=-r*.5*t.walk,o=r*.5*t.walk,l=-Math.PI/2,c=-Math.PI/2;t.J.armL.rotation.x=a*(1-t.aimAmt)+l*t.aimAmt,t.J.armR.rotation.x=o*(1-t.aimAmt)+c*t.aimAmt}if(t.J.head){Vt.subVectors(n,t.center).normalize();const a=Math.asin(Vt.y);let o=Math.atan2(Vt.x,Vt.z)-t.yaw;o=ul(o),t.J.head.rotation.x=Se(a,-1,1)*t.aimAmt,t.J.head.rotation.y=Se(o,-1,1)*t.aimAmt}if(t.T.weapon==="blade"&&t.attackT>0){const a=1-t.attackT/1;t.J.armR&&(a<.3?t.J.armR.rotation.x=Math.PI:a<.6?t.J.armR.rotation.x=-Math.PI/4:t.J.armR.rotation.x=pe(t.J.armR.rotation.x,0,5,e))}}_animateFlyer(t,e){if(!t.J||!t.J.root)return;t.J.root.rotation.y=t.yaw,t.phase+=e*5;const n=Math.sin(t.phase*_i)*.5;t.J.wingL&&(t.J.wingL.rotation.z=n),t.J.wingR&&(t.J.wingR.rotation.z=-n);const i=t.body.vel.x*t.body.vel.x+t.body.vel.z*t.body.vel.z;let r=0;i>1&&(r=Math.PI/4),t.J.root.rotation.x=pe(t.J.root.rotation.x,r,5,e)}}class Co{constructor(){this.active=!1,this.pos=new T,this.vel=new T,this.scale=new T(1,1,1),this.rot=new mn,this.life=0,this.maxLife=1,this.ink=0,this.gravity=0,this.drag=0,this.stretch=0,this.alignToVel=!1,this.isSplat=!1}}class em{constructor(t){this.scene=t,this.shakeAmt=0,this.shakeOffset=new T,this.maxStrokes=800,this.strokes=Array.from({length:this.maxStrokes},()=>new Co),this.maxSplats=200,this.splats=Array.from({length:this.maxSplats},()=>new Co),this.debrisList=[];const e=new Ye({vertexShader:`
                varying vec4 vColorData;
                void main() {
                    vec3 transformed = position;
                    #ifdef USE_INSTANCING
                      transformed = (instanceMatrix * vec4(position, 1.0)).xyz;
                    #endif
                    vec4 mvPosition = viewMatrix * modelMatrix * vec4(transformed, 1.0);
                    #ifdef USE_INSTANCING
                      vColorData = vec4(instanceColor, 1.0);
                    #else
                      vColorData = vec4(1.0);
                    #endif
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                varying vec4 vColorData;
                void main() {
                    gl_FragColor = vec4(-1.0, vColorData.r, 0.0, 0.0);
                }
            `}),n=new we(1,1,1);this.strokesMesh=new ea(n,e,this.maxStrokes),this.strokesMesh.instanceMatrix.setUsage(ws),this.strokesMesh.frustumCulled=!1,this.scene.add(this.strokesMesh);const i=new Float32Array(this.maxStrokes*3);this.strokesMesh.instanceColor=new Hi(i,3);const r=new we(1,.1,1);this.splatsMesh=new ea(r,e,this.maxSplats),this.splatsMesh.instanceMatrix.setUsage(ws),this.splatsMesh.frustumCulled=!1,this.scene.add(this.splatsMesh);const a=new Float32Array(this.maxSplats*3);this.splatsMesh.instanceColor=new Hi(a,3),this.dummy=new me,this.color=new Jt}_spawn(t,e,n,i={}){const r=t==="strokes"?this.strokes:this.splats,a=t==="strokes"?this.maxStrokes:this.maxSplats;let o=null,l=r[0];for(let h=0;h<a;h++){if(!r[h].active){o=r[h];break}r[h].life<l.life&&(l=r[h])}o||(o=l),o.active=!0,o.pos.copy(e),n?o.vel.copy(n):o.vel.set(0,0,0);const c=i.size||.1;return c.isVector3?o.scale.copy(c):o.scale.set(c,c,c),i.rot?o.rot.copy(i.rot):o.rot.identity(),o.life=i.life||1,o.maxLife=o.life,o.ink=i.ink!==void 0?i.ink:1,o.gravity=i.gravity!==void 0?i.gravity:9.8,o.drag=i.drag!==void 0?i.drag:0,o.stretch=i.stretch||0,o.alignToVel=i.alignToVel||!1,o.isSplat=t==="splats",o}addShake(t){this.shakeAmt=Math.min(this.shakeAmt+t,2)}getShake(){return this.shakeOffset}update(t){this.shakeAmt>.01?(this.shakeOffset.set((Math.random()-.5)*this.shakeAmt,(Math.random()-.5)*this.shakeAmt,(Math.random()-.5)*this.shakeAmt),this.shakeAmt*=Math.exp(-10*t)):(this.shakeAmt=0,this.shakeOffset.set(0,0,0)),this._updatePool(this.strokes,this.strokesMesh,t),this._updatePool(this.splats,this.splatsMesh,t);for(let e=this.debrisList.length-1;e>=0;e--){const n=this.debrisList[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),this.debrisList.splice(e,1);continue}if(n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t),n.mesh.position.copy(n.pos),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.mesh.rotation.z+=n.spin.z*t,n.vel.multiplyScalar(1-2*t),n.blood&&Math.random()<.2){const i=new T((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);this.blood(n.pos,i,1,{size:n.radius*.2,ink:he.RED})}if(n.life<.5){const i=n.life/.5;n.mesh.scale.setScalar(Math.max(i,.001))}}}_updatePool(t,e,n){let i=0;for(let r=0;r<t.length;r++){const a=t[r];if(a.active){if(a.life-=n,a.life<=0){a.active=!1;continue}if(a.drag>0&&a.vel.multiplyScalar(1-a.drag*n),a.vel.y-=a.gravity*n,a.pos.addScaledVector(a.vel,n),this.dummy.position.copy(a.pos),a.alignToVel&&a.vel.lengthSq()>.001){const o=a.vel.clone().normalize();this.dummy.quaternion.setFromUnitVectors(new T(0,0,1),o),a.stretch>0?this.dummy.scale.set(a.scale.x,a.scale.y,a.scale.z+a.vel.length()*a.stretch):this.dummy.scale.copy(a.scale)}else if(this.dummy.quaternion.copy(a.rot),this.dummy.scale.copy(a.scale),a.life<.5&&!a.isSplat){const o=a.life/.5;this.dummy.scale.multiplyScalar(Math.max(o,.01))}this.dummy.updateMatrix(),e.setMatrixAt(i,this.dummy.matrix),this.color.setRGB(a.ink,0,0),e.setColorAt(i,this.color),i++}}e.count=i,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}sparks(t,e,n,i=10,r=15){for(let a=0;a<i;a++){const o=e.clone().multiplyScalar(r*(.5+Math.random()));o.add(new T((Math.random()-.5)*r*.5,(Math.random()-.5)*r*.5,(Math.random()-.5)*r*.5)),this._spawn("strokes",t,o,{size:.05+Math.random()*.05,life:.2+Math.random()*.3,ink:n,gravity:5,drag:2,stretch:.02,alignToVel:!0})}}blood(t,e,n=10,i={}){const r=i.ink!==void 0?i.ink:he.RED,a=i.size||.15;for(let o=0;o<n;o++){const l=5+Math.random()*10,c=e.clone().multiplyScalar(l);c.add(new T((Math.random()-.5)*l*.8,(Math.random()-.5)*l*.8,(Math.random()-.5)*l*.8)),this._spawn("strokes",t,c,{size:a*(.5+Math.random()),life:.5+Math.random(),ink:r,gravity:15,drag:1,stretch:.01,alignToVel:!0})}}bloodPool(t,e,n){const i=new mn().setFromAxisAngle(new T(0,1,0),Math.random()*Math.PI*2);this._spawn("splats",t,new T(0,0,0),{size:new T(e,.1,e),rot:i,life:10+Math.random()*5,ink:n,gravity:0,drag:0})}bulletImpact(t,e,n){this.sparks(t,e,n,5,20);for(let i=0;i<3;i++){const r=5+Math.random()*10,a=e.clone().multiplyScalar(r);a.add(new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(r));const o=new mn().setFromEuler(new Xe(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI));this._spawn("strokes",t,a,{size:.1+Math.random()*.2,life:1+Math.random(),ink:n,gravity:20,drag:.5,rot:o,alignToVel:!1})}}strokeBurst(t,e,n=20,i=10,r={}){for(let a=0;a<n;a++){const l=new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(i*(.5+Math.random()));this._spawn("strokes",t,l,{size:r.size||.1,life:r.life||.5,ink:e,gravity:r.gravity!==void 0?r.gravity:5,drag:r.drag||1,stretch:r.stretch||0,alignToVel:r.alignToVel||!1})}}explosion(t,e,n){this.addShake(1.5),this.strokeBurst(t,n,50,e*10,{size:.2,life:.8,gravity:0,drag:5,stretch:.05,alignToVel:!0}),this._spawn("strokes",t,new T,{size:e*2,life:.2,ink:n,gravity:0,alignToVel:!1})}tracer(t,e,n,i=.05,r=.1){const a=t.distanceTo(e),o=new T().subVectors(e,t).normalize(),l=new T().addVectors(t,e).multiplyScalar(.5),c=new mn().setFromUnitVectors(new T(0,0,1),o);this._spawn("strokes",l,new T,{size:new T(i,i,a),life:r,ink:n,gravity:0,rot:c,alignToVel:!1})}fountain(t,e,n=1,i){for(let r=0;r<n;r++){const a=8+Math.random()*4,o=e.clone().multiplyScalar(a);o.add(new T((Math.random()-.5)*a*.4,Math.random()*a*.2,(Math.random()-.5)*a*.4)),this._spawn("strokes",t,o,{size:.1+Math.random()*.1,life:1+Math.random()*.5,ink:i,gravity:15,drag:.5,stretch:.02,alignToVel:!0})}}debris(t,e,n,i,r={}){this.scene.add(t),t.position.copy(e),this.debrisList.push({mesh:t,pos:e.clone(),vel:n.clone(),spin:i.clone(),life:r.life||3,maxLife:r.life||3,blood:r.blood||!1,radius:r.radius||1})}muzzleFlash(t,e,n){this.sparks(t,e,n,3,10),this._spawn("strokes",t,new T,{size:.3,life:.05,ink:n,gravity:0,alignToVel:!1})}}class nm{constructor(t){this.el=t,this.el.innerHTML="",this.tl=document.createElement("div"),this.tl.className="hud-tl",this.waveTxt=document.createElement("div"),this.waveTxt.className="wave-txt",this.tl.appendChild(this.waveTxt),this.tally=document.createElement("div"),this.tally.className="tally",this.tl.appendChild(this.tally),this.el.appendChild(this.tl),this.tr=document.createElement("div"),this.tr.className="hud-tr",this.scoreTxt=document.createElement("div"),this.scoreTxt.className="score",this.tr.appendChild(this.scoreTxt),this.comboTxt=document.createElement("div"),this.comboTxt.className="combo",this.tr.appendChild(this.comboTxt),this.el.appendChild(this.tr),this.bl=document.createElement("div"),this.bl.className="hud-bl",this.healthContainer=document.createElement("div"),this.healthContainer.className="health";const e=document.createElement("div");e.className="label",e.textContent="HP",this.healthContainer.appendChild(e);const n=document.createElement("div");n.className="bar",this.hpFill=document.createElement("div"),this.hpFill.className="fill",n.appendChild(this.hpFill),this.healthContainer.appendChild(n),this.bl.appendChild(this.healthContainer),this.el.appendChild(this.bl),this.br=document.createElement("div"),this.br.className="hud-br",this.slots=document.createElement("div"),this.slots.className="slots",this.br.appendChild(this.slots),this.ammoContainer=document.createElement("div"),this.ammoContainer.className="ammo",this.ammoCurrent=document.createElement("span"),this.ammoCurrent.className="current",this.ammoReserve=document.createElement("span"),this.ammoReserve.className="reserve",this.ammoContainer.appendChild(this.ammoCurrent),this.ammoContainer.appendChild(this.ammoReserve),this.br.appendChild(this.ammoContainer),this.nades=document.createElement("div"),this.nades.className="nades",this.br.appendChild(this.nades),this.el.appendChild(this.br),this.center=document.createElement("div"),this.center.className="hud-center",this.crosshair=document.createElement("div"),this.crosshair.className="crosshair";for(let d=0;d<4;d++){const p=document.createElement("div");p.className="bar",this.crosshair.appendChild(p)}const i=document.createElement("div");i.className="dot",this.crosshair.appendChild(i),this.center.appendChild(this.crosshair),this.grappleRet=document.createElement("div"),this.grappleRet.className="grapple-ret",this.center.appendChild(this.grappleRet),this.hitmarkerEl=document.createElement("div"),this.hitmarkerEl.className="hitmarker";const r=document.createElement("div");r.className="bar";const a=document.createElement("div");a.className="bar",this.hitmarkerEl.appendChild(r),this.hitmarkerEl.appendChild(a),this.center.appendChild(this.hitmarkerEl),this.scope=document.createElement("div"),this.scope.className="scope";const o=document.createElement("div");o.className="ring";const l=document.createElement("div");l.className="h-line";const c=document.createElement("div");c.className="v-line";const h=document.createElement("div");h.className="s-dot",this.scope.appendChild(o),this.scope.appendChild(l),this.scope.appendChild(c),this.scope.appendChild(h),this.center.appendChild(this.scope),this.gstam=document.createElement("div"),this.gstam.className="gstam",this.gstamFill=document.createElement("div"),this.gstamFill.className="fill",this.gstam.appendChild(this.gstamFill),this.center.appendChild(this.gstam),this.el.appendChild(this.center),this.focusMark=document.createElement("div"),this.focusMark.className="focus-mark";for(let d=0;d<4;d++){const p=document.createElement("div");p.className="bracket",this.focusMark.appendChild(p)}this.el.appendChild(this.focusMark),this.focusMeterContainer=document.createElement("div"),this.focusMeterContainer.className="focus-meter",this.focusMeterFill=document.createElement("div"),this.focusMeterFill.className="fill",this.focusMeterContainer.appendChild(this.focusMeterFill),this.el.appendChild(this.focusMeterContainer),this.dmgIndContainer=document.createElement("div"),this.dmgIndContainer.className="dmg-ind-container",this.el.appendChild(this.dmgIndContainer),this.messageEl=document.createElement("div"),this.messageEl.className="message",this.msgMain=document.createElement("div"),this.msgMain.className="main",this.msgSub=document.createElement("div"),this.msgSub.className="sub",this.messageEl.appendChild(this.msgMain),this.messageEl.appendChild(this.msgSub),this.el.appendChild(this.messageEl),this.killfeed=document.createElement("div"),this.killfeed.className="killfeed",this.el.appendChild(this.killfeed),this.bossbarContainer=document.createElement("div"),this.bossbarContainer.className="bossbar",this.bossName=document.createElement("div"),this.bossName.className="name";const u=document.createElement("div");u.className="bar",this.bossFill=document.createElement("div"),this.bossFill.className="fill",u.appendChild(this.bossFill),this.bossbarContainer.appendChild(this.bossName),this.bossbarContainer.appendChild(u),this.el.appendChild(this.bossbarContainer),this.buildMenu(),this.buildGameOver(),this.msgTimeout=null}buildMenu(){this.menuScreen=document.createElement("div"),this.menuScreen.className="screen",this.menuScreen.id="menu";const t=document.createElement("h1");t.innerHTML="DOODLE DISTRICT<br><span>a sketchy shooter</span>",this.menuScreen.appendChild(t);const e=document.createElement("div");e.className="cols";const n=document.createElement("div");n.className="col",n.innerHTML=`
            <h3>CONTROLS</h3>
            <p>WASD — move</p>
            <p>Mouse — look</p>
            <p>Click — shoot</p>
            <p>Right Click — aim</p>
            <p>R — reload</p>
            <p>Shift — sprint</p>
            <p>Space — jump</p>
            <p>C — crouch</p>
            <p>Scroll — switch weapon</p>
        `,e.appendChild(n);const i=document.createElement("div");i.className="col",i.innerHTML=`
            <h3>MORE</h3>
            <p>Q/E — grapple</p>
            <p>F — melee/katana</p>
            <p>G — grenade</p>
            <p>X — dash</p>
            <p>1-4 — weapon slots</p>
            <div class="settings">
                <label>Sens: <input type="range" id="sens-slider" min="0.1" max="5" step="0.1" value="1"></label>
                <label>Vol: <input type="range" id="vol-slider" min="0" max="1" step="0.05" value="0.5"></label>
                <label><input type="checkbox" id="inv-y"> Invert Y</label>
            </div>
        `,e.appendChild(i),this.menuScreen.appendChild(e),this.playBtn=document.createElement("button"),this.playBtn.className="start",this.playBtn.innerHTML="PLAY<br><span>click to draw</span>",this.menuScreen.appendChild(this.playBtn),this.el.appendChild(this.menuScreen)}buildGameOver(){this.goScreen=document.createElement("div"),this.goScreen.className="screen",this.goScreen.id="gameover";const t=document.createElement("h1");t.textContent="ERASED",this.goScreen.appendChild(t),this.goStats=document.createElement("p"),this.goStats.className="stats",this.goScreen.appendChild(this.goStats),this.menuBtn=document.createElement("button"),this.menuBtn.className="start",this.menuBtn.innerHTML="MAIN MENU<br><span>click to draw again</span>",this.goScreen.appendChild(this.menuBtn),this.el.appendChild(this.goScreen)}setHealth(t,e){const n=Math.max(0,Math.min(100,t/e*100));this.hpFill.style.width=n+"%",t<30?this.healthContainer.classList.add("low"):this.healthContainer.classList.remove("low")}setAmmo(t,e,n){t===-1?(this.ammoCurrent.textContent="∞",this.ammoReserve.textContent=""):(this.ammoCurrent.textContent=t,this.ammoReserve.textContent=e===-1?"/ ∞":"/ "+e),n?this.ammoContainer.classList.add("reloading"):this.ammoContainer.classList.remove("reloading")}setWeaponSlots(t,e){this.slots.innerHTML="";for(let n=0;n<t.length;n++){const i=t[n],r=document.createElement("div");r.className="slot"+(n===e?" active":"");const a=document.createElement("span");a.className="num",a.textContent=n+1,r.appendChild(a);const o=document.createElement("span");if(o.className="name",o.textContent=i.name,r.appendChild(o),i.currentAmmo!==void 0){const l=document.createElement("span");l.className="sammo",i.currentAmmo===-1?l.textContent="∞":l.textContent=i.currentAmmo+(i.reserveAmmo===-1?"":"/"+i.reserveAmmo),r.appendChild(l)}this.slots.appendChild(r)}}setWave(t){this.waveTxt.textContent="WAVE "+t}setScore(t){this.scoreTxt.textContent=String(t).padStart(6,"0")}setKills(t){this.tally.innerHTML="";for(let e=0;e<t;e++){const n=document.createElement("i");(e+1)%5===0&&(n.className="cross"),this.tally.appendChild(n)}}setCombo(t){this.comboTxt.textContent=t,t&&(this.comboTxt.classList.remove("anim"),this.comboTxt.offsetWidth,this.comboTxt.classList.add("anim"))}setCrosshairSpread(t){this.crosshair.style.setProperty("--s",t+"px")}setCrosshairStyle(t){t==="katana"?this.crosshair.classList.add("katana"):this.crosshair.classList.remove("katana")}setAds(t){t?this.crosshair.classList.add("ads"):this.crosshair.classList.remove("ads")}showGrappleReticle(t){this.grappleRet.className="grapple-ret "+t}showScope(t){this.scope.style.display=t?"block":"none"}hitmarker(t,e){this.hitmarkerEl.className="hitmarker anim",t&&this.hitmarkerEl.classList.add("kill"),e&&this.hitmarkerEl.classList.add("crit"),setTimeout(()=>{this.hitmarkerEl.classList.remove("anim")},150)}showMessage(t,e){this.msgMain.textContent=t,this.msgSub.textContent=e||"",this.messageEl.classList.add("show"),this.msgTimeout&&clearTimeout(this.msgTimeout),this.msgTimeout=setTimeout(()=>{this.messageEl.classList.remove("show")},2e3)}addKillFeed(t,e){const n=document.createElement("div");n.className="item",n.innerHTML=t+(e?" <span>+"+e+"</span>":""),this.killfeed.appendChild(n),setTimeout(()=>{n.classList.add("fade"),setTimeout(()=>n.remove(),500)},3e3)}addDamageIndicator(t){const e=document.createElement("div");e.className="dmg-ind",e.style.transform="translate(-50%, -50%) rotate("+t+"rad)",this.dmgIndContainer.appendChild(e),setTimeout(()=>e.remove(),1e3)}showBossBar(t,e,n){this.bossbarContainer.classList.add("show"),this.bossName.textContent=t;const i=Math.max(0,Math.min(100,e/n*100));this.bossFill.style.width=i+"%"}hideBossBar(){this.bossbarContainer.classList.remove("show")}setFocusMeter(t,e){this.focusMeterFill.style.height=Math.max(0,Math.min(100,t*100))+"%",e?this.focusMeterContainer.classList.add("ready"):this.focusMeterContainer.classList.remove("ready")}showFocusMark(t,e,n){n?(this.focusMark.classList.add("show"),this.focusMark.style.left=t+"px",this.focusMark.style.top=e+"px"):this.focusMark.classList.remove("show")}setGrappleStamina(t){t<1?(this.gstam.classList.add("show"),this.gstamFill.style.width=t*100+"%"):this.gstam.classList.remove("show")}setGrenades(t){this.nades.innerHTML="";for(let e=0;e<t;e++){const n=document.createElement("div");n.className="nade",this.nades.appendChild(n)}}showMenu(){this.menuScreen.style.display="flex",this.el.classList.add("nogame")}hideMenu(){this.menuScreen.style.display="none",this.el.classList.remove("nogame")}showGameOver(t,e,n){let i=0,r=0,a=0,o=0;typeof t=="object"&&t!==null?(i=t.score||0,r=t.wave||0,a=t.kills||0,o=t.bestScore||0):(i=t||0,r=e||0,a=n||0,o=parseInt(localStorage.getItem("dd_bestScore"))||i),this.goScreen.style.display="flex",this.goStats.textContent=`you survived ${r} waves · ${a} kills · score ${i} · best ${o}`,this.el.classList.add("nogame")}hideGameOver(){this.goScreen.style.display="none",this.el.classList.remove("nogame")}setGameActive(t){t?this.el.classList.remove("nogame"):this.el.classList.add("nogame")}show(){this.setGameActive(!0)}hide(){this.setGameActive(!1)}showPause(){}updateHealth(t,e){this.setHealth(t,e)}updateScore(t,e){this.setScore(t)}updateKills(t){this.setKills(t)}updateCombo(t){this.setCombo(t&&t.count>1?`${t.count}x COMBO (${t.multiplier.toFixed(1)}x)`:"")}addScore(t,e){this.addKillFeed(e,t)}announce(t,e){this.showMessage(t,e)}setFocus(t,e){this.setFocusMeter(t,e)}setSniperScope(t){this.showScope(t)}setReloading(t){}}class im{constructor(t){this.world=t,this.grid=null,this.cellSize=2,this.built=!1,this.min=new T,this.max=new T,this.width=0,this.depth=0}buildGrid(t,e){this.build({min:t,max:e})}build(t){if(!t)return;t.min&&t.min.x!==void 0&&this.min.copy(t.min),t.max&&t.max.x!==void 0&&this.max.copy(t.max),this.min.x=Math.floor(this.min.x/this.cellSize)*this.cellSize,this.min.z=Math.floor(this.min.z/this.cellSize)*this.cellSize,this.max.x=Math.ceil(this.max.x/this.cellSize)*this.cellSize,this.max.z=Math.ceil(this.max.z/this.cellSize)*this.cellSize,this.width=Math.round((this.max.x-this.min.x)/this.cellSize),this.depth=Math.round((this.max.z-this.min.z)/this.cellSize),this.grid=new Array(this.width*this.depth);const e=this.max.y+10,n=new T,i=new T(0,-1,0);for(let r=0;r<this.depth;r++)for(let a=0;a<this.width;a++){n.set(this.min.x+a*this.cellSize+this.cellSize*.5,e,this.min.z+r*this.cellSize+this.cellSize*.5);const o=this.world.raycast(n,i,1e3,1),l={walkable:!1,y:0,x:a,z:r};o&&(n.y=o.point.y+1,this.world.raycast(n,new T(0,1,0),2,1)||(l.walkable=!0,l.y=o.point.y)),this.grid[r*this.width+a]=l}this.built=!0}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.depth?null:this.grid[e*this.width+t]}findPath(t,e){if(!this.built)return null;const n=Math.floor((t.x-this.min.x)/this.cellSize),i=Math.floor((t.z-this.min.z)/this.cellSize),r=Math.floor((e.x-this.min.x)/this.cellSize),a=Math.floor((e.z-this.min.z)/this.cellSize),o=this.getCell(n,i),l=this.getCell(r,a);if(!o||!l)return null;const c=[],h=new Set,u=new Map,d=new Map,p=new Map,g=(v,U)=>{const A=Math.abs(v.x-U.x),C=Math.abs(v.z-U.z);return 1*(A+C)+(1.414-2)*Math.min(A,C)},_=v=>`${v.x},${v.z}`;c.push(o),d.set(_(o),0),p.set(_(o),g(o,l));let m=0;const f=2e3;let w=o,E=g(o,l);for(;c.length>0&&m<f;){m++;let v=0,U=p.get(_(c[0]))||1/0;for(let P=1;P<c.length;P++){const S=p.get(_(c[P]))||1/0;S<U&&(v=P,U=S)}const A=c[v];if(A===l)return this._reconstructPath(u,A,l,!0);c.splice(v,1),h.add(_(A));const C=[{x:0,z:-1,cost:1},{x:1,z:-1,cost:1.414},{x:1,z:0,cost:1},{x:1,z:1,cost:1.414},{x:0,z:1,cost:1},{x:-1,z:1,cost:1.414},{x:-1,z:0,cost:1},{x:-1,z:-1,cost:1.414}];for(const P of C){const S=A.x+P.x,M=A.z+P.z,R=this.getCell(S,M);if(!R||!R.walkable||Math.abs(R.y-A.y)>2)continue;if(Math.abs(P.x)===1&&Math.abs(P.z)===1){const V=this.getCell(A.x+P.x,A.z),q=this.getCell(A.x,A.z+P.z);if(!V||!V.walkable||!q||!q.walkable)continue}if(h.has(_(R)))continue;const k=(d.get(_(A))||1/0)+P.cost;if(!c.includes(R))c.push(R);else if(k>=(d.get(_(R))||1/0))continue;u.set(_(R),A),d.set(_(R),k);const F=g(R,l);F<E&&(E=F,w=R),p.set(_(R),k+F)}}return w!==o?this._reconstructPath(u,w,l,!1):null}_reconstructPath(t,e,n,i){const r=[],a=o=>`${o.x},${o.z}`;for(;e;){const o=this.min.x+e.x*this.cellSize+this.cellSize*.5,l=this.min.z+e.z*this.cellSize+this.cellSize*.5;r.unshift(new T(o,e.y,l));const c=a(e);e=t.get(c)}return r.complete=i,r}}class sm{constructor(t){this.ctx=t,this.state="menu",this.wave=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("dd_bestScore"))||0,this.kills=0,this.combo={count:0,timer:0,multiplier:1},this.spawnQueue=[],this.spawnTimer=0,this.waveDelay=0,this.hitstopT=0,this.hitstopScale=1,this.pickupTimer=30,this.pickups=[],this.pickupGeo=new we(1,1,1),this.pickupMat=nn(3,1)}start(){this.state="playing",this.score=0,this.kills=0,this.wave=0,this.combo={count:0,timer:0,multiplier:1},this.ctx.enemies.clear(),this.ctx.player.spawn(this.ctx.mapData.playerStart),this.ctx.player.health=this.ctx.player.maxHealth,this.ctx.input.requestLock(),this.ctx.hud.hideMenu(),this.ctx.hud.show(),this.clearPickups(),this.pickupTimer=oe(30,45),this.beginWave(1)}beginWave(t){this.wave=t,this.spawnQueue=[];let e=Math.min(4+this.wave*2,24);if(this.wave===5)this.spawnQueue.push("boss_doodler"),e=Math.max(0,e-5);else if(this.wave===10)this.spawnQueue.push("boss_eraser"),e=Math.max(0,e-10);else if(this.wave===15)this.spawnQueue.push("boss_inkblot"),e=Math.max(0,e-15);else if(this.wave>15&&this.wave%5===0){const i=["boss_doodler","boss_eraser","boss_inkblot"];this.spawnQueue.push(Ni(i)),e=Math.max(0,e-10)}const n=["grunt"];this.wave>=3&&n.push("rusher"),this.wave>=4&&n.push("sniper"),this.wave>=5&&n.push("heavy"),this.wave>=6&&n.push("shield"),this.wave>=7&&n.push("bomber"),this.wave>=8&&n.push("flyer");for(let i=0;i<e;i++)this.spawnQueue.push(Ni(n));this.ctx.hud.announce(`WAVE ${this.wave}`,"Incoming..."),yt.play("waveStart",this.ctx.player.eye,1,1),this.spawnTimer=2}spawnNext(){if(this.spawnQueue.length===0)return;const t=this.ctx.mapData.spawns;if(!t||t.length===0)return;let e=null,n=0;for(let r=0;r<5;r++){const a=Ni(t),o=a.distanceTo(this.ctx.player.pos);if(o>15){e=a;break}o>n&&(n=o,e=a)}e||(e=Ni(t));const i=this.spawnQueue.shift();this.ctx.enemies.spawn(i,e),this.spawnTimer=Se(2-this.wave*.1,.8,2)}spawnPickup(){if(this.pickups.length>=3)return;const t=this.ctx.mapData.pickups;if(!t||t.length===0)return;const e=Ni(t),n=new kt(this.pickupGeo,this.pickupMat);n.position.copy(e),n.position.y+=.5,this.ctx.scene.add(n),this.pickups.push({mesh:n,pos:e,bob:oe(0,Math.PI*2)})}clearPickups(){for(let t of this.pickups)this.ctx.scene.remove(t.mesh);this.pickups=[]}update(t){if(this.state==="playing"){this.hitstopT>0&&(this.hitstopT-=t),this.combo.timer>0&&(this.combo.timer-=t,this.combo.timer<=0&&(this.combo.count=0,this.combo.multiplier=1,this.ctx.hud.updateCombo(this.combo))),this.spawnQueue.length>0?(this.spawnTimer-=t,this.spawnTimer<=0&&this.spawnNext()):this.ctx.enemies.active.length===0&&(this.waveDelay<=0?this.waveDelay=4:(this.waveDelay-=t,this.waveDelay<=0&&this.beginWave(this.wave+1))),this.pickupTimer-=t,this.pickupTimer<=0&&(this.spawnPickup(),this.pickupTimer=oe(30,45));for(let e=this.pickups.length-1;e>=0;e--){const n=this.pickups[e];n.bob+=t*2,n.mesh.position.y=n.pos.y+.5+Math.sin(n.bob)*.2,n.mesh.rotation.y+=t,this.ctx.player.pos.distanceTo(n.pos)<2&&(this.ctx.player.addAmmo(50),yt.play("pickup",n.pos,1,1),this.ctx.scene.remove(n.mesh),this.pickups.splice(e,1))}this.ctx.player.health<=0&&this.state!=="dead"&&this.gameOver()}}addScore(t,e){this.combo.count++,this.combo.timer=3,this.combo.multiplier=Se(1+(this.combo.count-1)*.1,1,3);const n=Math.floor(t*this.combo.multiplier);this.score+=n,this.score>this.bestScore&&(this.bestScore=this.score),this.ctx.hud.addScore(n,e),this.ctx.hud.updateCombo(this.combo),this.ctx.hud.updateScore(this.score,this.bestScore)}addKill(t,e,n){this.kills++,this.addScore(t.T.score||100,t.T.name),t.T.isBoss&&(yt.play("waveClear",this.ctx.player.eye,1,1),this.ctx.hud.announce("BOSS DEFEATED","Bonus points!"),this.addScore(1e3,"Boss Kill")),this.ctx.player.weapons.addFocus(10),this.ctx.hud.updateKills(this.kills)}hitstop(t,e){this.hitstopT=t,this.hitstopScale=e}getTimeScale(){return this.hitstopT>0?this.hitstopScale:1}gameOver(){this.state="dead",this.ctx.input.exitLock(),this.ctx.hud.showGameOver(this.score,this.wave,this.kills),localStorage.setItem("dd_bestScore",this.bestScore)}restart(){this.state="menu",this.ctx.enemies.clear(),this.clearPickups(),this.ctx.hud.showMenu()}}function rm(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ke;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ro(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);const g=Ro(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ro(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Be(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function am(s,t){const e={rings:[],spawns:[],snipers:[],pickups:[],animated:[],meshes:[],playerStart:new T,bounds:null,arenaSpawns:[],grappleMovers:[],breakables:[],props:[],style:null},n={};function i(a,o){const l=`${a}_${o}`;return n[l]||(n[l]=[]),n[l]}const r={L:e,box(a,o,l,c,h,u,d={}){const p=new we(c,h,u),g=a,_=o+h/2,m=l;return p.translate(g,_,m),i(d.ink||0,!!d.fill).push(p),!d.noCollide&&t&&t.addBox({x:g-c/2,y:o,z:m-u/2},{x:g+c/2,y:o+h,z:m+u/2},d),r},slab(a,o,l,c,h,u,d={}){const p=Math.abs(l-a),g=Math.abs(c-o),_=(a+l)/2,m=(o+c)/2;return r.box(_,h,m,p,u,g,d)},wallX(a,o,l,c,h,u,d=[],p={}){let g=[{x1:Math.min(a,o),x2:Math.max(a,o),y1:c,y2:c+h}];for(const[_,m,f,w]of d){const E=[];for(const v of g){if(m<=v.x1||_>=v.x2||w<=v.y1||f>=v.y2){E.push(v);continue}_>v.x1&&E.push({x1:v.x1,x2:_,y1:v.y1,y2:v.y2}),m<v.x2&&E.push({x1:m,x2:v.x2,y1:v.y1,y2:v.y2});const U=Math.max(v.x1,_),A=Math.min(v.x2,m);f>v.y1&&E.push({x1:U,x2:A,y1:v.y1,y2:f}),w<v.y2&&E.push({x1:U,x2:A,y1:w,y2:v.y2})}g=E}for(const _ of g)r.box((_.x1+_.x2)/2,_.y1,l,_.x2-_.x1,_.y2-_.y1,u,p);return r},wallZ(a,o,l,c,h,u,d=[],p={}){let g=[{z1:Math.min(o,l),z2:Math.max(o,l),y1:c,y2:c+h}];for(const[_,m,f,w]of d){const E=[];for(const v of g){if(m<=v.z1||_>=v.z2||w<=v.y1||f>=v.y2){E.push(v);continue}_>v.z1&&E.push({z1:v.z1,z2:_,y1:v.y1,y2:v.y2}),m<v.z2&&E.push({z1:m,z2:v.z2,y1:v.y1,y2:v.y2});const U=Math.max(v.z1,_),A=Math.min(v.z2,m);f>v.y1&&E.push({z1:U,z2:A,y1:v.y1,y2:f}),w<v.y2&&E.push({z1:U,z2:A,y1:w,y2:v.y2})}g=E}for(const _ of g)r.box(a,_.y1,(_.z1+_.z2)/2,u,_.y2-_.y1,_.z2-_.z1,p);return r},stairs(a,o,l,c,h,u,d={}){let _=a,m=l;for(let f=0;f<h;f++){const w=o+f*1;let E=u,v=1.5;c==="+x"||c==="-x"?(E=1.5,v=u,_=c==="+x"?a+f*1.5:a-f*1.5,m=l):(m=c==="+z"?l+f*1.5:l-f*1.5,_=a),r.box(_,w,m,E,1,v,d)}return{x:_,y:o+h*1,z:m}},rail(a,o,l,c,h,u={}){const d=Math.abs(l-a)||.5,p=Math.abs(c-o)||.5,g=(a+l)/2,_=(o+c)/2;return r.box(g,h,_,d,1,p,u)},cyl(a,o,l,c,h,u={}){const d=new Zn(c,c,h,u.seg||8);return d.translate(a,o+h/2,l),i(u.ink||0,!!u.fill).push(d),!u.noCollide&&t&&t.addBox({x:a-c,y:o,z:l-c},{x:a+c,y:o+h,z:l+c},u),r},sphere(a,o,l,c,h={}){const u=new qe(c,h.seg||8,h.seg||8);return u.translate(a,o,l),i(h.ink||0,!!h.fill).push(u),r},ring(a,o,l,c="y"){return e.rings.push({x:a,y:o,z:l,axis:c}),r},collider(a,o,l,c,h,u,d={}){return t&&t.addBox({x:a-c/2,y:o,z:l-u/2},{x:a+c/2,y:o+h,z:l+u/2},d),r},spawn(a,o,l){return e.spawns.push(new T(a,o,l)),r},sniper(a,o,l){return e.snipers.push(new T(a,o,l)),r},pickup(a,o,l){return e.pickups.push(new T(a,o,l)),r},addGeo(a,o=0,l=!1){return i(o,l).push(a),r},mesh(a,o=0,l=!1){const c=new kt(a,nn(o,l));return s.add(c),e.meshes.push(c),c},planes(a,o,l,c={}){for(let h=0;h<a;h++){const u=new Ds(2,1,4),d=new kt(u,nn(c.ink||0,!!c.fill)),p=h/a*Math.PI*2;d.position.set(Math.cos(p)*o,l,Math.sin(p)*o),d.userData={angle:p,radius:o,speed:.5+Math.random()*.5},s.add(d),e.meshes.push(d),e.grappleMovers.push(d),e.animated.push({mesh:d,update:g=>{d.userData.angle+=d.userData.speed*g,d.position.x=Math.cos(d.userData.angle)*d.userData.radius,d.position.z=Math.sin(d.userData.angle)*d.userData.radius,d.rotation.y=-d.userData.angle}})}return r},birds(a,o,l,c={}){for(let h=0;h<a;h++){const u=new we(1,.2,1),d=new kt(u,nn(c.ink||0,!!c.fill)),p=h/a*Math.PI*2;d.position.set(Math.cos(p)*o,l+Math.random()*5,Math.sin(p)*o),d.userData={angle:p,radius:o+Math.random()*10,speed:.2+Math.random()*.3,yOffset:Math.random()*100},s.add(d),e.meshes.push(d),e.animated.push({mesh:d,update:g=>{d.userData.angle+=d.userData.speed*g,d.position.x=Math.cos(d.userData.angle)*d.userData.radius,d.position.z=Math.sin(d.userData.angle)*d.userData.radius,d.position.y=l+Math.sin(d.userData.angle*2+d.userData.yOffset)*2,d.rotation.y=-d.userData.angle}})}return r},finish(){for(const a in n){if(n[a].length===0)continue;const[o,l]=a.split("_"),c=parseInt(o,10),h=l==="true",u=rm(n[a],!1),d=new kt(u,nn(c,h));s.add(d),e.meshes.push(d)}return e}};return r}function om(s,t){const e=am(s,t);e.L.playerStart.set(0,0,42),e.L.bounds={min:{x:-55,y:-1,z:-55},max:{x:55,y:56,z:55}};const n={ink:0},i={ink:1,fill:!0},r={ink:0,fill:!0};e.slab(-55,-55,55,55,-1,1,i),e.collider(0,56,0,110,2,110),e.wallX(-55,55,-55,0,18,2,[],n),e.wallX(-55,55,55,0,18,2,[],n),e.wallZ(-55,-55,55,0,18,2,[],n),e.wallZ(55,-55,55,0,18,2,[],n),e.slab(-7,-7,7,7,4,1,i),e.slab(-5,-5,5,5,8,1,i),e.slab(-3,-3,3,3,12,1,i),e.slab(-2,-2,2,2,16,1,i);for(let a=0;a<8;a++){const o=a/8*Math.PI*2,l=Math.cos(o)*7,c=Math.sin(o)*7;e.box(l,0,c,1,16,1,n)}e.box(5.5,0,5.5,2,16,2,n),e.slab(4.5,4.5,6.5,6.5,16,1,i),e.box(2.5,15,5.5,4,1,1,n),e.rail(-7,-7,7,-7,5,r),e.rail(-7,7,7,7,5,r),e.rail(-7,-7,-7,7,5,r),e.rail(7,-7,7,7,5,r),e.stairs(-7,0,0,"+x",4,2,n),e.stairs(-5,4,0,"+x",4,2,n),e.stairs(-3,8,0,"+x",4,2,n),e.slab(24,24,44,44,4,1,i),e.slab(24,24,44,44,8,1,i),e.slab(24,24,44,44,12,1,i),e.wallX(24,44,24,0,12,1,[[30,34,0,3],[30,34,4,7],[30,34,8,11]],n),e.wallX(24,44,44,0,12,1,[[30,34,0,3]],n),e.wallZ(24,24,44,0,12,1,[[30,34,0,3]],n),e.wallZ(44,24,44,0,12,1,[[30,34,0,3]],n),e.stairs(40,0,40,"-z",4,2,n),e.stairs(40,4,34,"+z",4,2,n),e.stairs(40,8,40,"-z",4,2,n),e.stairs(20,0,34,"+x",4,2,n),e.slab(-43,4,-25,20,4,1,i),e.slab(-43,4,-25,20,8,1,i),e.slab(-43,4,-25,20,12,1,i),e.wallX(-43,-25,4,0,12,1,[[-36,-32,0,3],[-36,-32,4,7],[-36,-32,8,11]],n),e.wallX(-43,-25,20,0,12,1,[[-36,-32,0,3]],n),e.wallZ(-43,4,20,0,12,1,[],n),e.wallZ(-25,4,20,0,12,1,[[8,12,0,3],[8,12,4,7],[8,12,8,11]],n),e.stairs(-45,0,10,"+z",4,2,n),e.stairs(-45,4,16,"-z",4,2,n),e.stairs(-45,8,10,"+z",4,2,n),e.slab(-25,6,-7,10,8,1,i),e.rail(-25,6,-7,6,9,r),e.rail(-25,10,-7,10,9,r),e.slab(-50,-32,50,-28,7,1,i);for(let a=-48;a<=48;a+=12)e.box(a,0,-30,2,7,2,n);return e.stairs(-52,0,-30,"+x",7,4,n),e.stairs(52,0,-30,"-x",7,4,n),e.slab(-40,-50,-20,-40,7,1,i),e.wallX(-40,-20,-40,0,7,1,[],n),e.slab(-10,-50,10,-40,11,1,i),e.wallX(-10,10,-40,0,11,1,[],n),e.cyl(0,11,-45,2,6,n),e.slab(20,-50,40,-40,7,1,i),e.wallX(20,40,-40,0,7,1,[],n),e.stairs(-20,7,-45,"+x",4,2,n),e.stairs(20,7,-45,"-x",4,2,n),e.box(-30,0,40,4,4,4,{ink:2,fill:!0}),e.box(-20,0,38,6,2,2,{ink:3,fill:!0}),e.cyl(-40,0,40,2,10,{ink:4}),e.cyl(-10,0,35,.5,8,n),e.ring(-10,8,35,"y"),e.cyl(10,0,35,.5,8,n),e.ring(10,8,35,"y"),e.ring(5.5,17,5.5,"y"),e.ring(34,13,34,"y"),e.ring(-34,13,12,"y"),e.ring(0,12,-45,"y"),e.spawn(0,0,45),e.spawn(34,0,34),e.spawn(-34,0,12),e.spawn(0,8,-30),e.spawn(-40,0,-20),e.spawn(40,0,-20),e.spawn(-45,8,-45),e.spawn(45,8,-45),e.spawn(0,12,0),e.spawn(34,12,34),e.pickup(0,17,0),e.pickup(34,13,34),e.pickup(-34,13,12),e.pickup(0,12,-45),e.pickup(0,8,-30),e.planes(5,20,15,{ink:1}),e.planes(3,30,25,{ink:2}),e.birds(10,40,30,{ink:0}),e.sphere(-90,110,-160,20,{ink:1,fill:!0}),e.sphere(50,60,-100,10,{ink:0,fill:!1}),e.sphere(60,65,-95,12,{ink:0,fill:!1}),e.sphere(40,58,-105,8,{ink:0,fill:!1}),e.sphere(-60,70,80,15,{ink:0,fill:!1}),e.sphere(-45,65,85,10,{ink:0,fill:!1}),e.finish()}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("c")||document.getElementById("game-canvas"),t=document.getElementById("hud"),e=new Gp(s),n=new Vp,i=new Wp(s),r=new nm(t),a=new em(e.scene),o=om(e.scene,n),l=new im(n);o.bounds&&l.buildGrid(o.bounds.min,o.bounds.max);const c={scene:e.scene,world:n,renderer:e,camera:e.camera,input:i,effects:a,hud:r,nav:l,mapData:o,targets:()=>[c.player]},h=new Kp(c.camera,n,i,a,r);c.player=h;const u=new tm(c);c.enemies=u;const d=new Jp(c.camera,c.scene,n,h,u,a,r);h.weapons=d,c.weapons=d;const p=new sm(c);c.game=p,u.onKill=p.addKill.bind(p),i.onLockChange=m=>{m&&p.state==="menu"?p.start():!m&&p.state==="playing"&&r.showPause()},r.onStart=()=>{p.state==="menu"?p.start():p.state==="dead"&&p.restart()},r.onSettingsChange=m=>{m.sensitivity!==void 0&&(i.mouseSens=m.sensitivity*.0022,i.sensitivity=m.sensitivity),m.invertY!==void 0&&(i.invertY=m.invertY),m.volume!==void 0&&yt.setVolume(m.volume)};let g=0;function _(m){requestAnimationFrame(_);const f=Math.min((m-g)/1e3,.1);g=m;const w=p.state==="playing"?f*p.getTimeScale():f;if(i.update(w),i.anyInput&&!yt.ctx&&(yt.init(),i.anyInput=!1),yt.ctx&&yt.resume(),p.state==="playing"&&(h.update(w),d.update(w,i),u.update(w),p.update(w)),a.update(w),yt.ctx){const E=new T;e.camera.getWorldDirection(E);const v=new T(0,1,0),U=new T().crossVectors(E,v).normalize();yt.setListener(h.eye,U)}e.render(m/1e3,{hurt:h.getHurt?h.getHurt():0,flash:h.getFlash?h.getFlash():0,slow:0,lowHp:h.getLowHp?h.getLowHp():0}),p.state==="dead"&&i.anyPressed()&&p.restart()}r.showMenu(),p.state="menu",requestAnimationFrame(_)});
