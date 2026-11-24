// Собрано tools/render/build_base3d.sh из tools/render/baseview.js (three.js 0.162.0). Не править вручную.
(()=>{var ql="162",ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Uc=1,Yd=2;var fu=1,Zl=2,ii=3,bi=0,nn=1,en=2,yi=0,Os=1,sl=2,Oc=3,Fc=4,qd=5,Wi=100,Zd=101,$d=102,zc=103,kc=104,Jd=200,Kd=201,jd=202,Qd=203,rl=204,ol=205,tf=206,ef=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,hf=0,uf=1,df=2,wo=3,ff=4,pf=5,mf=6,gf=7,pu=0,xf=1,_f=2,vi=0,yf=1,vf=2,Mf=3,$l=4,bf=5,Ef=6,wf=7;var mu=300,ks=301,Hs=302,al=303,ll=304,ta=306,$i=1e3,Ye=1001,cl=1002,Xe=1003,Hc=1004;var ar=1005;var un=1006,ba=1007;var Yi=1008;var Mi=1009,Sf=1010,Tf=1011,Jl=1012,gu=1013,_i=1014,qn=1015,Mr=1016,xu=1017,_u=1018,qi=1020,Af=1021,kn=1023,Rf=1024,Cf=1025,Zi=1026,Bs=1027,yu=1028,vu=1029,Pf=1030,Mu=1031,bu=1033,Ea=33776,wa=33777,Sa=33778,Ta=33779,Bc=35840,Gc=35841,Vc=35842,Wc=35843,Eu=36196,Xc=37492,Yc=37496,qc=37808,Zc=37809,$c=37810,Jc=37811,Kc=37812,jc=37813,Qc=37814,th=37815,eh=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,Aa=36492,ah=36494,lh=36495,If=36283,ch=36284,hh=36285,uh=36286;var So=2300,To=2301,Ra=2302,dh=2400,fh=2401,ph=2402;var Lf=3200,wu=3201,Su=0,Df=1,xi="",dn="srgb",Ti="srgb-linear",Kl="display-p3",ea="display-p3-linear",Ao="linear",xe="srgb",Ro="rec709",Co="p3";var ps=7680;var mh=519,Nf=512,Uf=513,Of=514,Tu=515,Ff=516,zf=517,kf=518,Hf=519,gh=35044;var xh="300 es",hl=1035,si=2e3,Po=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=1234567,mr=Math.PI/180,br=180/Math.PI;function os(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function jl(i,t){return(i%t+t)%t}function Bf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gf(i,t,e){return i!==t?(e-i)/(t-i):0}function gr(i,t,e){return(1-e)*i+e*t}function Vf(i,t,e,n){return gr(i,t,1-Math.exp(-e*n))}function Wf(i,t=1){return t-Math.abs(jl(i,t*2)-t)}function Xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zf(i,t){return i+Math.random()*(t-i)}function $f(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(_h=i);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kf(i){return i*mr}function jf(i){return i*br}function ul(i){return(i&i-1)===0&&i!==0}function Qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Io(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ai={DEG2RAD:mr,RAD2DEG:br,generateUUID:os,clamp:Ne,euclideanModulo:jl,mapLinear:Bf,inverseLerp:Gf,lerp:gr,damp:Vf,pingpong:Wf,smoothstep:Xf,smootherstep:Yf,randInt:qf,randFloat:Zf,randFloatSpread:$f,seededRandom:Jf,degToRad:Kf,radToDeg:jf,isPowerOfTwo:ul,ceilPowerOfTwo:Qf,floorPowerOfTwo:Io,setQuaternionFromProperEuler:t0,normalize:rn,denormalize:Is},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],_=s[4],M=s[7],I=s[2],P=s[5],C=s[8];return r[0]=o*x+a*y+l*I,r[3]=o*m+a*_+l*P,r[6]=o*g+a*M+l*C,r[1]=c*x+h*y+u*I,r[4]=c*m+h*_+u*P,r[7]=c*g+h*M+u*C,r[2]=d*x+f*y+p*I,r[5]=d*m+f*_+p*P,r[8]=d*g+f*M+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new ee;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function e0(){let i=Lo("canvas");return i.style.display="block",i}var yh={};function n0(i){i in yh||(yh[i]=!0,console.warn(i))}var vh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[Ti]:{transfer:Ao,primaries:Ro,toReference:i=>i,fromReference:i=>i},[dn]:{transfer:xe,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ea]:{transfer:Ao,primaries:Co,toReference:i=>i.applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(vh)},[Kl]:{transfer:xe,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(vh).convertLinearToSRGB()}},i0=new Set([Ti,ea]),de={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!i0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Kr[t].toReference,s=Kr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Kr[i].primaries},getTransfer:function(i){return i===xi?Ao:Kr[i].transfer}};function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,Do=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Lo("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},s0=0,No=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var r0=0,fn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ye,s=Ye,r=un,o=Yi,a=kn,l=Mi,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=os(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=mu;fn.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,I=(g+1)/2,P=(h+d)/4,C=(u+x)/4,v=(p+m)/4;return _>M&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=C/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=v/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Uo=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let m=1-a,g=l*d+c*f+h*p+u*x,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let I=Math.sqrt(_),P=Math.atan2(I,g*y);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}let M=a*y;if(l=l*m+d*M,c=c*m+f*M,h=h*m+p*M,u=u*m+x*M,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new L,bh=new En,Hn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Qr.subVectors(this.max,lr),gs.subVectors(t.a,lr),xs.subVectors(t.b,lr),_s.subVectors(t.c,lr),ui.subVectors(xs,gs),di.subVectors(_s,xs),Fi.subVectors(gs,_s);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!Da(e,gs,xs,_s,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,gs,xs,_s,Qr))?!1:(to.crossVectors(ui,di),e=[to.x,to.y,to.z],Da(e,gs,xs,_s,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,jr=new Hn,gs=new L,xs=new L,_s=new L,ui=new L,di=new L,Fi=new L,lr=new L,Qr=new L,to=new L,zi=new L;function Da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var o0=new Hn,cr=new L,Na=new L,Ji=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):o0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Na)),this.expandByPoint(cr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new L,Ua=new L,eo=new L,fi=new L,Oa=new L,no=new L,Fa=new L,Er=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=fi.dot(this.direction),l=-fi.dot(eo),c=fi.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector(eo,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),no.subVectors(n,t),Fa.crossVectors(Oa,no);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let l=a*this.direction.dot(no.crossVectors(fi,no));if(l<0)return null;let c=a*this.direction.dot(Oa.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,l0)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),pi.crossVectors(n,vn),pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),pi.crossVectors(n,vn)),pi.normalize(),io.crossVectors(vn,pi),s[0]=pi.x,s[4]=io.x,s[8]=vn.x,s[1]=pi.y,s[5]=io.y,s[9]=vn.y,s[2]=pi.z,s[6]=io.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],_=n[7],M=n[11],I=n[15],P=s[0],C=s[4],v=s[8],z=s[12],b=s[1],S=s[5],rt=s[9],$=s[13],D=s[2],H=s[6],G=s[10],q=s[14],N=s[3],E=s[7],B=s[11],Y=s[15];return r[0]=o*P+a*b+l*D+c*N,r[4]=o*C+a*S+l*H+c*E,r[8]=o*v+a*rt+l*G+c*B,r[12]=o*z+a*$+l*q+c*Y,r[1]=h*P+u*b+d*D+f*N,r[5]=h*C+u*S+d*H+f*E,r[9]=h*v+u*rt+d*G+f*B,r[13]=h*z+u*$+d*q+f*Y,r[2]=p*P+x*b+m*D+g*N,r[6]=p*C+x*S+m*H+g*E,r[10]=p*v+x*rt+m*G+g*B,r[14]=p*z+x*$+m*q+g*Y,r[3]=y*P+_*b+M*D+I*N,r[7]=y*C+_*S+M*H+I*E,r[11]=y*v+_*rt+M*G+I*B,r[15]=y*z+_*$+M*q+I*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=u*m*c-x*d*c+x*l*f-a*m*f-u*l*g+a*d*g,_=p*d*c-h*m*c-p*l*f+o*m*f+h*l*g-o*d*g,M=h*x*c-p*u*c+p*a*f-o*x*f-h*a*g+o*u*g,I=p*u*l-h*x*l-p*a*d+o*x*d+h*a*m-o*u*m,P=e*y+n*_+s*M+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return t[0]=y*C,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*g-n*d*g)*C,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*g+n*l*g)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-p*d*r+p*s*f-e*m*f-h*s*g+e*d*g)*C,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=M*C,t[9]=(p*u*r-h*x*r-p*n*f+e*x*f+h*n*g-e*u*g)*C,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*g+e*a*g)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*x*s-p*u*s+p*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,_=l*h,M=l*u,I=n.x,P=n.y,C=n.z;return s[0]=(1-(x+g))*I,s[1]=(f+M)*I,s[2]=(p-_)*I,s[3]=0,s[4]=(f-M)*P,s[5]=(1-(d+g))*P,s[6]=(m+y)*P,s[7]=0,s[8]=(p+_)*C,s[9]=(m-y)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);let c=1/r,h=1/o,u=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===si)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Po)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,x;if(a===si)p=(o+r)*u,x=-2*u;else if(a===Po)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new L,Fn=new le,a0=new L(0,0,0),l0=new L(1,1,1),pi=new L,io=new L,vn=new L,Eh=new le,wh=new En,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},c0=0,Sh=new L,vs=new En,ti=new le,so=new L,hr=new L,h0=new L,u0=new En,Th=new L(1,0,0),Ah=new L(0,1,0),Rh=new L(0,0,1),d0={type:"added"},f0={type:"removed"},za={type:"childadded",child:null},ka={type:"childremoved",child:null},an=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Cn,n=new En,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new ee}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Rh,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hr,so,this.up):ti.lookAt(so,hr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ti),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(d0),za.child=t,this.dispatchEvent(za),za.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f0),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new L(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new L,ei=new L,Ha=new L,ni=new L,Ms=new L,bs=new L,Ch=new L,Ba=new L,Ga=new L,Va=new L,Ls=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),ei.subVectors(n,e),Ha.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ei),l=zn.dot(Ha),c=ei.dot(ei),h=ei.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ei.subVectors(t,e),zn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),zn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,n),bs.subVectors(r,n),Ba.subVectors(t,n);let l=Ms.dot(Ba),c=bs.dot(Ba);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,s);let h=Ms.dot(Ga),u=bs.dot(Ga);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ms,o);Va.subVectors(t,r);let f=Ms.dot(Va),p=bs.dot(Va);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(bs,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Ch.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Ch,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(Ms,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=jl(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return de.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ne(Qe.r*255,0,255))*65536+Math.round(Ne(Qe.g*255,0,255))*256+Math.round(Ne(Qe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=dn){de.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ro);let n=gr(mi.h,ro.h,e),s=gr(mi.s,ro.s,e),r=gr(mi.l,ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Jt;Jt.NAMES=Ru;var p0=0,Ki=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Os,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ji=class extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new L,oo=new pt,Ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return n0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gh&&(t.usage=this.usage),t}};var Fo=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zo=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},m0=0,Rn=new le,Xa=new an,Es=new L,Mn=new Hn,ur=new Hn,Ge=new L,Ae=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?zo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Mn.min,ur.min),Mn.expandByPoint(Ge),Ge.addVectors(Mn.max,ur.max),Mn.expandByPoint(Ge)):(Mn.expandByPoint(ur.min),Mn.expandByPoint(ur.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),Ge.add(Es)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new L,l[v]=new L;let c=new L,h=new L,u=new L,d=new pt,f=new pt,p=new pt,x=new L,m=new L;function g(v,z,b){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[v].add(x),a[z].add(x),a[b].add(x),l[v].add(m),l[z].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,z=y.length;v<z;++v){let b=y[v],S=b.start,rt=b.count;for(let $=S,D=S+rt;$<D;$+=3)g(t.getX($+0),t.getX($+1),t.getX($+2))}let _=new L,M=new L,I=new L,P=new L;function C(v){I.fromBufferAttribute(s,v),P.copy(I);let z=a[v];_.copy(z),_.sub(I.multiplyScalar(I.dot(z))).normalize(),M.crossVectors(P,z);let S=M.dot(l[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,S)}for(let v=0,z=y.length;v<z;++v){let b=y[v],S=b.start,rt=b.count;for(let $=S,D=S+rt;$<D;$+=3)C(t.getX($+0)),C(t.getX($+1)),C(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new le,ki=new Er,ao=new Ji,Ih=new L,ws=new L,Ss=new L,Ts=new L,Ya=new L,lo=new L,co=new pt,ho=new pt,uo=new pt,Lh=new L,Dh=new L,Nh=new L,fo=new L,po=new L,wt=class extends an{constructor(t=new Ae,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ya.fromBufferAttribute(u,t),o?lo.addScaledVector(Ya,h):lo.addScaledVector(Ya.sub(e),h))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(ao.containsPoint(ki.origin)===!1&&(ki.intersectSphere(ao,Ih)===null||ki.origin.distanceToSquared(Ih)>(t.far-t.near)**2))&&(Ph.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=_;M<I;M+=3){let P=a.getX(M),C=a.getX(M+1),v=a.getX(M+2);s=mo(this,g,t,n,c,h,u,P,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=mo(this,o,t,n,c,h,u,y,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=_;M<I;M+=3){let P=M,C=M+1,v=M+2;s=mo(this,g,t,n,c,h,u,P,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,_=m+1,M=m+2;s=mo(this,o,t,n,c,h,u,y,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function g0(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ws),i.getVertexPosition(l,Ss),i.getVertexPosition(c,Ts);let h=g0(i,t,e,n,ws,Ss,Ts,fo);if(h){s&&(co.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,c),h.uv=Ls.getInterpolation(fo,ws,Ss,Ts,co,ho,uo,new pt)),r&&(co.fromBufferAttribute(r,a),ho.fromBufferAttribute(r,l),uo.fromBufferAttribute(r,c),h.uv1=Ls.getInterpolation(fo,ws,Ss,Ts,co,ho,uo,new pt)),o&&(Lh.fromBufferAttribute(o,a),Dh.fromBufferAttribute(o,l),Nh.fromBufferAttribute(o,c),h.normal=Ls.getInterpolation(fo,ws,Ss,Ts,Lh,Dh,Nh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Ls.getNormal(ws,Ss,Ts,u.normal),h.face=u}return h}var pe=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(x,m,g,y,_,M,I,P,C,v,z){let b=M/C,S=I/v,rt=M/2,$=I/2,D=P/2,H=C+1,G=v+1,q=0,N=0,E=new L;for(let B=0;B<G;B++){let Y=B*S-$;for(let it=0;it<H;it++){let gt=it*b-rt;E[x]=gt*y,E[m]=Y*_,E[g]=D,c.push(E.x,E.y,E.z),E[x]=0,E[m]=0,E[g]=P>0?1:-1,h.push(E.x,E.y,E.z),u.push(it/C),u.push(1-B/v),q+=1}}for(let B=0;B<v;B++)for(let Y=0;Y<C;Y++){let it=d+Y+H*B,gt=d+Y+H*(B+1),W=d+(Y+1)+H*(B+1),ut=d+(Y+1)+H*B;l.push(it,gt,ut),l.push(gt,W,ut),N+=6}a.addGroup(f,N,z),f+=N,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Gs(i[e]);for(let s in n)t[s]=n[s]}return t}function x0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){return i.getRenderTarget()===null?i.outputColorSpace:de.workingColorSpace}var _0={clone:Gs,merge:on},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=x0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ko=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new L,Uh=new pt,Oh=new pt,tn=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Oh),e.subVectors(Oh,Uh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Rs=1,pl=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new tn(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new tn(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new tn(As,Rs,t,e);a.layers=this.layers,this.add(a);let l=new tn(As,Rs,t,e);l.layers=this.layers,this.add(l);let c=new tn(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ho(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:yi});r.uniforms.tEquirect.value=e;let o=new wt(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=un),new pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qa=new L,M0=new L,b0=new ee,bn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qa.subVectors(n,e).cross(M0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||b0.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Ji,go=new L,wr=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],x=s[10],m=s[11],g=s[12],y=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-g).normalize(),n[1].setComponents(l+r,d+c,m+f,M+g).normalize(),n[2].setComponents(l+o,d+h,m+p,M+y).normalize(),n[3].setComponents(l-o,d-h,m-p,M-y).normalize(),n[4].setComponents(l-a,d-u,m-x,M-_).normalize(),e===si)n[5].setComponents(l+a,d+u,m+x,M+_).normalize();else if(e===Po)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function E0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,p=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&p.length===0&&i.bufferSubData(u,0,d),p.length!==0){for(let x=0,m=p.length;x<m;x++){let g=p[x];e?i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count):i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ei=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let _=0;_<c;_++){let M=_*u-r;p.push(M,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let _=y+c*g,M=y+c*(g+1),I=y+1+c*(g+1),P=y+1+c*g;f.push(_,M,P),f.push(M,I,P)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,wp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Lm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,Km=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ig=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:w0,alphahash_pars_fragment:S0,alphamap_fragment:T0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:I0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:z0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:G0,color_fragment:V0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:$0,displacementmap_pars_vertex:J0,displacementmap_vertex:K0,emissivemap_fragment:j0,emissivemap_pars_fragment:Q0,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:xp,envmap_vertex:op,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:_p,lights_toon_pars_fragment:yp,lights_phong_fragment:vp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Sp,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Np,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Op,morphinstance_vertex:Fp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Bp,normal_fragment_begin:Gp,normal_fragment_maps:Vp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:Yp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:bm,worldpos_vertex:Em,background_vert:wm,background_frag:Sm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Nm,equirect_frag:Um,linedashed_vert:Om,linedashed_frag:Fm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Bm,meshmatcap_vert:Gm,meshmatcap_frag:Vm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:Ym,meshphong_frag:qm,meshphysical_vert:Zm,meshphysical_frag:$m,meshtoon_vert:Jm,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},Rt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Yn={basic:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:on([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:on([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:on([Rt.points,Rt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:on([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:on([Rt.common,Rt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:on([Rt.sprite,Rt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:on([Rt.common,Rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:on([Rt.lights,Rt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var xo={r:0,b:0,g:0},Bi=new Cn,sg=new le;function rg(i,t,e,n,s,r,o){let a=new Jt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(m,g){let y=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ta)?(h===void 0&&(h=new wt(new pe(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Gs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(g.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Bi)),h.material.toneMapped=de.getTransfer(_.colorSpace)!==xe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new wt(new Ei(2,2),new $n({name:"BackgroundMaterial",uniforms:Gs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=de.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,g){m.getRGB(xo,Cu(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:p}}function og(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(D,H,G,q,N){let E=!1;if(o){let B=x(q,G,H);c!==B&&(c=B,f(c.object)),E=g(D,q,G,N),E&&y(D,q,G,N)}else{let B=H.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==B)&&(c.geometry=q.id,c.program=G.id,c.wireframe=B,E=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(E||h)&&(h=!1,v(D,H,G,q),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function p(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,H,G){let q=G.wireframe===!0,N=a[D.id];N===void 0&&(N={},a[D.id]=N);let E=N[H.id];E===void 0&&(E={},N[H.id]=E);let B=E[q];return B===void 0&&(B=m(d()),E[q]=B),B}function m(D){let H=[],G=[],q=[];for(let N=0;N<s;N++)H[N]=0,G[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:q,object:D,attributes:{},index:null}}function g(D,H,G,q){let N=c.attributes,E=H.attributes,B=0,Y=G.getAttributes();for(let it in Y)if(Y[it].location>=0){let W=N[it],ut=E[it];if(ut===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor)),W===void 0||W.attribute!==ut||ut&&W.data!==ut.data)return!0;B++}return c.attributesNum!==B||c.index!==q}function y(D,H,G,q){let N={},E=H.attributes,B=0,Y=G.getAttributes();for(let it in Y)if(Y[it].location>=0){let W=E[it];W===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));let ut={};ut.attribute=W,W&&W.data&&(ut.data=W.data),N[it]=ut,B++}c.attributes=N,c.attributesNum=B,c.index=q}function _(){let D=c.newAttributes;for(let H=0,G=D.length;H<G;H++)D[H]=0}function M(D){I(D,0)}function I(D,H){let G=c.newAttributes,q=c.enabledAttributes,N=c.attributeDivisors;G[D]=1,q[D]===0&&(i.enableVertexAttribArray(D),q[D]=1),N[D]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),N[D]=H)}function P(){let D=c.newAttributes,H=c.enabledAttributes;for(let G=0,q=H.length;G<q;G++)H[G]!==D[G]&&(i.disableVertexAttribArray(G),H[G]=0)}function C(D,H,G,q,N,E,B){B===!0?i.vertexAttribIPointer(D,H,G,N,E):i.vertexAttribPointer(D,H,G,q,N,E)}function v(D,H,G,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let N=q.attributes,E=G.getAttributes(),B=H.defaultAttributeValues;for(let Y in E){let it=E[Y];if(it.location>=0){let gt=N[Y];if(gt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),gt!==void 0){let W=gt.normalized,ut=gt.itemSize,vt=e.get(gt);if(vt===void 0)continue;let k=vt.buffer,K=vt.type,tt=vt.bytesPerElement,xt=n.isWebGL2===!0&&(K===i.INT||K===i.UNSIGNED_INT||gt.gpuType===gu);if(gt.isInterleavedBufferAttribute){let st=gt.data,R=st.stride,at=gt.offset;if(st.isInstancedInterleavedBuffer){for(let Q=0;Q<it.locationSize;Q++)I(it.location+Q,st.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<it.locationSize;Q++)M(it.location+Q);i.bindBuffer(i.ARRAY_BUFFER,k);for(let Q=0;Q<it.locationSize;Q++)C(it.location+Q,ut/it.locationSize,K,W,R*tt,(at+ut/it.locationSize*Q)*tt,xt)}else{if(gt.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)I(it.location+st,gt.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<it.locationSize;st++)M(it.location+st);i.bindBuffer(i.ARRAY_BUFFER,k);for(let st=0;st<it.locationSize;st++)C(it.location+st,ut/it.locationSize,K,W,ut*tt,ut/it.locationSize*st*tt,xt)}}else if(B!==void 0){let W=B[Y];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(it.location,W);break;case 3:i.vertexAttrib3fv(it.location,W);break;case 4:i.vertexAttrib4fv(it.location,W);break;default:i.vertexAttrib1fv(it.location,W)}}}}P()}function z(){rt();for(let D in a){let H=a[D];for(let G in H){let q=H[G];for(let N in q)p(q[N].object),delete q[N];delete H[G]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;let H=a[D.id];for(let G in H){let q=H[G];for(let N in q)p(q[N].object),delete q[N];delete H[G]}delete a[D.id]}function S(D){for(let H in a){let G=a[H];if(G[D.id]===void 0)continue;let q=G[D.id];for(let N in q)p(q[N].object),delete q[N];delete G[D.id]}}function rt(){$(),h=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:rt,resetDefaultState:$,dispose:z,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:M,disableUnusedAttributes:P}}function ag(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(h[p],u[p]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];e.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function lg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||t.has("OES_texture_float"),I=_&&M,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:P}}function cg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,M=g.clippingState||null;l.value=M,M=h(p,d,_,f);for(let I=0;I!==_;++I)M[I]=e[I];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hg(i){let t=new WeakMap;function e(o,a){return a===al?o.mapping=ks:a===ll&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ll)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ml(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bo=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,Fh=[.125,.215,.35,.446,.526,.582],Xi=20,Za=new Bo,zh=new Jt,$a=null,Ja=0,Ka=0,Vi=(1+Math.sqrt(5))/2,Cs=1/Vi,kh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Vi,Cs),new L(0,Vi,-Cs),new L(Cs,0,Vi),new L(-Cs,0,Vi),new L(Vi,Cs,0),new L(-Vi,Cs,0)],Vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ja,Ka),t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Mr,format:kn,colorSpace:Ti,depthBuffer:!1},s=Hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,s){let a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=vi,h.autoClear=!1;let f=new ji({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),p=new wt(new pe,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(zh),x=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;_o(s,y*_,g>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;_o(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kh[(s-1)%kh.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let g=[],y=0;for(let C=0;C<Xi;++C){let v=C/x,z=Math.exp(-v*v/2);g.push(z),C===0?y+=z:C<m&&(y+=2*z)}for(let C=0;C<g.length;C++)g[C]=g[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let M=this._sizeLods[s],I=3*M*(s>_-Ds?s-_+Ds:0),P=4*(this._cubeSize-M);_o(e,I,P,3*M,2*M),l.setRenderTarget(e),l.render(u,Za)}};function ug(i){let t=[],e=[],n=[],s=i,r=i-Ds+1+Fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ds?l=Fh[o-i+Ds-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*f),_=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let P=0;P<f;P++){let C=P%3*2/3-1,v=P>2?0:-1,z=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(z,x*p*P),_.set(d,m*p*P);let b=[P,P,P,P,P,P];M.set(b,g*p*P)}let I=new Ae;I.setAttribute("position",new Ve(y,x)),I.setAttribute("uv",new Ve(_,m)),I.setAttribute("faceIndex",new Ve(M,g)),t.push(I),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hh(i,t,e){let n=new ri(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){let n=new Float32Array(Xi),s=new L(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Bh(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gh(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function fg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===al||l===ll,h=l===ks||l===Hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Vs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Vs(i));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,M=y.length;_<M;_+=3){let I=y[_+0],P=y[_+1],C=y[_+2];d.push(I,P,P,C,C,I)}}else if(p!==void 0){let y=p.array;x=p.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let I=_+0,P=_+1,C=_+2;d.push(I,P,P,C,C,I)}}else return;let m=new(Au(d)?zo:Fo)(d,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gg(i,t,e,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){i.drawElements(r,p,a,f*l),e.update(p,r,1)}function u(f,p,x){if(x===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,p,a,f*l,x),e.update(p,r,x)}function d(f,p,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<x;g++)this.render(f[g]/l,p[g]);else{m.multiDrawElementsWEBGL(r,p,0,a,f,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];e.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t){return i[0]-t[0]}function yg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function vg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==p){let rt=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",rt)};x!==void 0&&x.texture.dispose();let m=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),y===!0&&(P=3);let C=h.attributes.position.count*P,v=1;C>t.maxTextureSize&&(v=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let z=new Float32Array(C*v*4*p),b=new Uo(z,C,v,p);b.type=qn,b.needsUpdate=!0;let S=P*4;for(let $=0;$<p;$++){let D=_[$],H=M[$],G=I[$],q=C*v*4*$;for(let N=0;N<D.count;N++){let E=N*S;m===!0&&(o.fromBufferAttribute(D,N),z[q+E+0]=o.x,z[q+E+1]=o.y,z[q+E+2]=o.z,z[q+E+3]=0),g===!0&&(o.fromBufferAttribute(H,N),z[q+E+4]=o.x,z[q+E+5]=o.y,z[q+E+6]=o.z,z[q+E+7]=0),y===!0&&(o.fromBufferAttribute(G,N),z[q+E+8]=o.x,z[q+E+9]=o.y,z[q+E+10]=o.z,z[q+E+11]=G.itemSize===4?o.w:1)}}x={count:p,texture:b,size:new pt(C,v)},r.set(h,x),h.addEventListener("dispose",rt)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let m=0;for(let y=0;y<d.length;y++)m+=d[y];let g=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let _=0;_<f;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<f;_++){let M=p[_];M[0]=_,M[1]=d[_]}p.sort(yg);for(let _=0;_<8;_++)_<f&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(_g);let x=h.morphAttributes.position,m=h.morphAttributes.normal,g=0;for(let _=0;_<8;_++){let M=a[_],I=M[0],P=M[1];I!==Number.MAX_SAFE_INTEGER&&P?(x&&h.getAttribute("morphTarget"+_)!==x[I]&&h.setAttribute("morphTarget"+_,x[I]),m&&h.getAttribute("morphNormal"+_)!==m[I]&&h.setAttribute("morphNormal"+_,m[I]),s[_]=P,g+=P):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Mg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Go=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Zi,h!==Zi&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=_i),n===void 0&&h===Bs&&(n=qi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Iu=new fn,Lu=new Go(1,1);Lu.compareFunction=Tu;var Du=new Uo,Nu=new fl,Uu=new Ho,Vh=[],Wh=[],Xh=new Float32Array(16),Yh=new Float32Array(9),qh=new Float32Array(4);function $s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),ze(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),ze(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),ze(e,n)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Lu:Iu;e.setTexture2D(t||r,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uu,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Du,s)}function Bg(i){switch(i){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Sg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ng;case 36295:return Ug;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function Wg(i,t){let e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function Xg(i,t){let e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function Yg(i,t){let e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){let e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zg(i,t){let e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Jg(i,t){i.uniform2iv(this.addr,t)}function Kg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function t1(i,t){i.uniform2uiv(this.addr,t)}function e1(i,t){i.uniform3uiv(this.addr,t)}function n1(i,t){i.uniform4uiv(this.addr,t)}function i1(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Iu,r[o])}function s1(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nu,r[o])}function r1(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uu,r[o])}function o1(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function a1(i){switch(i){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}var gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}},xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a1(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ja=/(\w+)(\])?(\[|\.)?/g;function Zh(i,t){i.seq.push(t),i.map[t.id]=t}function l1(i,t,e){let n=i.name,s=n.length;for(ja.lastIndex=0;;){let r=ja.exec(n),o=ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zh(e,c===void 0?new gl(a,i,t):new xl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new _l(a),Zh(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);l1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $h(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var c1=37297,h1=0;function u1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function d1(i){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i),n;switch(t===e?n="":t===Co&&e===Ro?n="LinearDisplayP3ToLinearSRGB":t===Ro&&e===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case Ti:case ea:return[n,"LinearTransferOETF"];case dn:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u1(i.getShaderSource(t),o)}else return s}function f1(i,t){let e=d1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function p1(i,t){let e;switch(t){case yf:e="Linear";break;case vf:e="Reinhard";break;case Mf:e="OptimizedCineon";break;case $l:e="ACESFilmic";break;case Ef:e="AgX";break;case wf:e="Neutral";break;case bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function m1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function g1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function x1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ns(i){return i!==""}function Kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(y1,M1)}var v1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function M1(i,t){let e=te[t];if(e===void 0){let n=v1.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(b1,E1)}function E1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function S1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function A1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pu:t="ENVMAP_BLENDING_MULTIPLY";break;case xf:t="ENVMAP_BLENDING_MIX";break;case _f:t="ENVMAP_BLENDING_ADD";break}return t}function R1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function C1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=w1(e),c=S1(e),h=T1(e),u=A1(e),d=R1(e),f=e.isWebGL2?"":m1(e),p=g1(e),x=x1(r),m=s.createProgram(),g,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),g.length>0&&(g+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),y.length>0&&(y+=`
`)):(g=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),y=[f,tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?te.tonemapping_pars_fragment:"",e.toneMapping!==vi?p1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,f1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=yl(o),o=Kh(o,e),o=jh(o,e),a=yl(a),a=Kh(a,e),a=jh(a,e),o=Qh(o),a=Qh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+g+o,I=_+y+a,P=$h(s,s.VERTEX_SHADER,M),C=$h(s,s.FRAGMENT_SHADER,I);s.attachShader(m,P),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function v(rt){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(C).trim(),G=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,P,C);else{let N=Jh(s,P,"vertex"),E=Jh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+rt.name+`
Material Type: `+rt.type+`

Program Info Log: `+$+`
`+N+`
`+E)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||H==="")&&(q=!1);q&&(rt.diagnostics={runnable:G,programLog:$,vertexShader:{log:D,prefix:g},fragmentShader:{log:H,prefix:y}})}s.deleteShader(P),s.deleteShader(C),z=new zs(s,m),b=_1(s,m)}let z;this.getUniforms=function(){return z===void 0&&v(this),z};let b;this.getAttributes=function(){return b===void 0&&v(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(m,c1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=C,this}var P1=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ml(t),e.set(t,n)),n}},Ml=class{constructor(t){this.id=P1++,this.code=t,this.usedTimes=0}};function I1(i,t,e,n,s,r,o){let a=new Oo,l=new vl,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,rt,$,D){let H=$.fog,G=D.geometry,q=b.isMeshStandardMaterial?$.environment:null,N=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),E=N&&N.mapping===ta?N.image.height:null,B=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Y!==void 0?Y.length:0,gt=0;G.morphAttributes.position!==void 0&&(gt=1),G.morphAttributes.normal!==void 0&&(gt=2),G.morphAttributes.color!==void 0&&(gt=3);let W,ut,vt,k;if(B){let ue=Yn[B];W=ue.vertexShader,ut=ue.fragmentShader}else W=b.vertexShader,ut=b.fragmentShader,l.update(b),vt=l.getVertexShaderID(b),k=l.getFragmentShaderID(b);let K=i.getRenderTarget(),tt=D.isInstancedMesh===!0,xt=D.isBatchedMesh===!0,st=!!b.map,R=!!b.matcap,at=!!N,Q=!!b.aoMap,X=!!b.lightMap,Z=!!b.bumpMap,F=!!b.normalMap,j=!!b.displacementMap,_t=!!b.emissiveMap,Ut=!!b.metalnessMap,T=!!b.roughnessMap,w=b.anisotropy>0,ht=b.clearcoat>0,dt=b.iridescence>0,Mt=b.sheen>0,yt=b.transmission>0,qt=w&&!!b.anisotropyMap,Vt=ht&&!!b.clearcoatMap,Tt=ht&&!!b.clearcoatNormalMap,Ct=ht&&!!b.clearcoatRoughnessMap,Zt=dt&&!!b.iridescenceMap,St=dt&&!!b.iridescenceThicknessMap,Se=Mt&&!!b.sheenColorMap,ie=Mt&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,Ot=!!b.specularColorMap,Ht=!!b.specularIntensityMap,O=yt&&!!b.transmissionMap,mt=yt&&!!b.thicknessMap,Ft=!!b.gradientMap,V=!!b.alphaMap,Et=b.alphaTest>0,et=!!b.alphaHash,bt=!!b.extensions,Lt=vi;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let re={isWebGL2:u,shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:ut,defines:b.defines,customVertexShaderID:vt,customFragmentShaderID:k,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:xt,instancing:tt,instancingColor:tt&&D.instanceColor!==null,instancingMorph:tt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:R,envMap:at,envMapMode:at&&N.mapping,envMapCubeUVHeight:E,aoMap:Q,lightMap:X,bumpMap:Z,normalMap:F,displacementMap:f&&j,emissiveMap:_t,normalMapObjectSpace:F&&b.normalMapType===Df,normalMapTangentSpace:F&&b.normalMapType===Su,metalnessMap:Ut,roughnessMap:T,anisotropy:w,anisotropyMap:qt,clearcoat:ht,clearcoatMap:Vt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ct,iridescence:dt,iridescenceMap:Zt,iridescenceThicknessMap:St,sheen:Mt,sheenColorMap:Se,sheenRoughnessMap:ie,specularMap:Gt,specularColorMap:Ot,specularIntensityMap:Ht,transmission:yt,transmissionMap:O,thicknessMap:mt,gradientMap:Ft,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:V,alphaTest:Et,alphaHash:et,combine:b.combine,mapUv:st&&m(b.map.channel),aoMapUv:Q&&m(b.aoMap.channel),lightMapUv:X&&m(b.lightMap.channel),bumpMapUv:Z&&m(b.bumpMap.channel),normalMapUv:F&&m(b.normalMap.channel),displacementMapUv:j&&m(b.displacementMap.channel),emissiveMapUv:_t&&m(b.emissiveMap.channel),metalnessMapUv:Ut&&m(b.metalnessMap.channel),roughnessMapUv:T&&m(b.roughnessMap.channel),anisotropyMapUv:qt&&m(b.anisotropyMap.channel),clearcoatMapUv:Vt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:ie&&m(b.sheenRoughnessMap.channel),specularMapUv:Gt&&m(b.specularMap.channel),specularColorMapUv:Ot&&m(b.specularColorMap.channel),specularIntensityMapUv:Ht&&m(b.specularIntensityMap.channel),transmissionMapUv:O&&m(b.transmissionMap.channel),thicknessMapUv:mt&&m(b.thicknessMap.channel),alphaMapUv:V&&m(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(F||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(st||V),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&rt.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&de.getTransfer(b.map.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===en,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:bt&&b.extensions.derivatives===!0,extensionFragDepth:bt&&b.extensions.fragDepth===!0,extensionDrawBuffers:bt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function y(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let rt in b.defines)S.push(rt),S.push(b.defines[rt]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),b.push(a.mask)}function I(b){let S=x[b.type],rt;if(S){let $=Yn[S];rt=_0.clone($.uniforms)}else rt=b.uniforms;return rt}function P(b,S){let rt;for(let $=0,D=h.length;$<D;$++){let H=h[$];if(H.cacheKey===S){rt=H,++rt.usedTimes;break}}return rt===void 0&&(rt=new C1(i,S,b,r),h.push(rt)),rt}function C(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function v(b){l.remove(b)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:v,programs:h,dispose:z}}function L1(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function D1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,x,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=x,g.group=m),t++,g}function a(u,d,f,p,x,m){let g=o(u,d,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,p,x,m){let g=o(u,d,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||D1),n.length>1&&n.sort(d||eu),s.length>1&&s.sort(d||eu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function N1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new nu,i.set(n,[o])):s>=r.length?(o=new nu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Jt};break;case"SpotLight":e={position:new L,direction:new L,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function O1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F1=0;function z1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i,t){let e=new U1,n=O1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new le,a=new le;function l(h,u){let d=0,f=0,p=0;for(let rt=0;rt<9;rt++)s.probe[rt].set(0,0,0);let x=0,m=0,g=0,y=0,_=0,M=0,I=0,P=0,C=0,v=0,z=0;h.sort(z1);let b=u===!0?Math.PI:1;for(let rt=0,$=h.length;rt<$;rt++){let D=h[rt],H=D.color,G=D.intensity,q=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=H.r*G*b,f+=H.g*G*b,p+=H.b*G*b;else if(D.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(D.sh.coefficients[E],G);z++}else if(D.isDirectionalLight){let E=e.get(D);if(E.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let B=D.shadow,Y=n.get(D);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,s.directionalShadow[x]=Y,s.directionalShadowMap[x]=N,s.directionalShadowMatrix[x]=D.shadow.matrix,M++}s.directional[x]=E,x++}else if(D.isSpotLight){let E=e.get(D);E.position.setFromMatrixPosition(D.matrixWorld),E.color.copy(H).multiplyScalar(G*b),E.distance=q,E.coneCos=Math.cos(D.angle),E.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),E.decay=D.decay,s.spot[g]=E;let B=D.shadow;if(D.map&&(s.spotLightMap[C]=D.map,C++,B.updateMatrices(D),D.castShadow&&v++),s.spotLightMatrix[g]=B.matrix,D.castShadow){let Y=n.get(D);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,s.spotShadow[g]=Y,s.spotShadowMap[g]=N,P++}g++}else if(D.isRectAreaLight){let E=e.get(D);E.color.copy(H).multiplyScalar(G),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=E,y++}else if(D.isPointLight){let E=e.get(D);if(E.color.copy(D.color).multiplyScalar(D.intensity*b),E.distance=D.distance,E.decay=D.decay,D.castShadow){let B=D.shadow,Y=n.get(D);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,s.pointShadow[m]=Y,s.pointShadowMap[m]=N,s.pointShadowMatrix[m]=D.shadow.matrix,I++}s.point[m]=E,m++}else if(D.isHemisphereLight){let E=e.get(D);E.skyColor.copy(D.color).multiplyScalar(G*b),E.groundColor.copy(D.groundColor).multiplyScalar(G*b),s.hemi[_]=E,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Rt.LTC_FLOAT_1,s.rectAreaLTC2=Rt.LTC_FLOAT_2):(s.rectAreaLTC1=Rt.LTC_HALF_1,s.rectAreaLTC2=Rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Rt.LTC_FLOAT_1,s.rectAreaLTC2=Rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Rt.LTC_HALF_1,s.rectAreaLTC2=Rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=p;let S=s.hash;(S.directionalLength!==x||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==y||S.hemiLength!==_||S.numDirectionalShadows!==M||S.numPointShadows!==I||S.numSpotShadows!==P||S.numSpotMaps!==C||S.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=P+C-v,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=z,S.directionalLength=x,S.pointLength=m,S.spotLength=g,S.rectAreaLength=y,S.hemiLength=_,S.numDirectionalShadows=M,S.numPointShadows=I,S.numSpotShadows=P,S.numSpotMaps=C,S.numLightProbes=z,s.version=F1++)}function c(h,u){let d=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(g),d++}else if(M.isSpotLight){let I=s.spot[p];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let I=s.point[f];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:s}}function iu(i,t){let e=new k1(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function H1(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new iu(i,t),e.set(r,[l])):o>=a.length?(l=new iu(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Vo=class extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`;function V1(i,t,e){let n=new wr,s=new pt,r=new pt,o=new Me,a=new Vo({depthPacking:wu}),l=new bl,c={},h=e.maxTextureSize,u={[bi]:nn,[nn]:bi,[en]:en},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:B1,fragmentShader:G1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ae;p.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new wt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let g=this.type;this.render=function(P,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let z=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(yi),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);let $=g!==ii&&this.type===ii,D=g===ii&&this.type!==ii;for(let H=0,G=P.length;H<G;H++){let q=P[H],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let E=N.getFrameExtents();if(s.multiply(E),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/E.x),s.x=r.x*E.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/E.y),s.y=r.y*E.y,N.mapSize.y=r.y)),N.map===null||$===!0||D===!0){let Y=this.type!==ii?{minFilter:Xe,magFilter:Xe}:{};N.map!==null&&N.map.dispose(),N.map=new ri(s.x,s.y,Y),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let B=N.getViewportCount();for(let Y=0;Y<B;Y++){let it=N.getViewport(Y);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),rt.viewport(o),N.updateMatrices(q,Y),n=N.getFrustum(),M(C,v,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===ii&&y(N,v),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(z,b,S)};function y(P,C){let v=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ri(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,v,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,v,f,x,null)}function _(P,C,v,z){let b=null,S=v.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)b=S;else if(b=v.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let rt=b.uuid,$=C.uuid,D=c[rt];D===void 0&&(D={},c[rt]=D);let H=D[$];H===void 0&&(H=b.clone(),D[$]=H,C.addEventListener("dispose",I)),b=H}if(b.visible=C.visible,b.wireframe=C.wireframe,z===ii?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let rt=i.properties.get(b);rt.light=v}return b}function M(P,C,v,z,b){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===ii)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,P.matrixWorld);let $=t.update(P),D=P.material;if(Array.isArray(D)){let H=$.groups;for(let G=0,q=H.length;G<q;G++){let N=H[G],E=D[N.materialIndex];if(E&&E.visible){let B=_(P,E,z,b);P.onBeforeShadow(i,P,C,v,$,B,N),i.renderBufferDirect(v,null,$,B,P,N),P.onAfterShadow(i,P,C,v,$,B,N)}}}else if(D.visible){let H=_(P,D,z,b);P.onBeforeShadow(i,P,C,v,$,H,null),i.renderBufferDirect(v,null,$,H,P,null),P.onAfterShadow(i,P,C,v,$,H,null)}}let rt=P.children;for(let $=0,D=rt.length;$<D;$++)M(rt[$],C,v,z,b)}function I(P){P.target.removeEventListener("dispose",I);for(let v in c){let z=c[v],b=P.target.uuid;b in z&&(z[b].dispose(),delete z[b])}}}function W1(i,t,e){let n=e.isWebGL2;function s(){let V=!1,Et=new Me,et=null,bt=new Me(0,0,0,0);return{setMask:function(Lt){et!==Lt&&!V&&(i.colorMask(Lt,Lt,Lt,Lt),et=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,re,ue,fe,Te){Te===!0&&(Lt*=fe,re*=fe,ue*=fe),Et.set(Lt,re,ue,fe),bt.equals(Et)===!1&&(i.clearColor(Lt,re,ue,fe),bt.copy(Et))},reset:function(){V=!1,et=null,bt.set(-1,0,0,0)}}}function r(){let V=!1,Et=null,et=null,bt=null;return{setTest:function(Lt){Lt?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Lt){Et!==Lt&&!V&&(i.depthMask(Lt),Et=Lt)},setFunc:function(Lt){if(et!==Lt){switch(Lt){case hf:i.depthFunc(i.NEVER);break;case uf:i.depthFunc(i.ALWAYS);break;case df:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case ff:i.depthFunc(i.EQUAL);break;case pf:i.depthFunc(i.GEQUAL);break;case mf:i.depthFunc(i.GREATER);break;case gf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Lt}},setLocked:function(Lt){V=Lt},setClear:function(Lt){bt!==Lt&&(i.clearDepth(Lt),bt=Lt)},reset:function(){V=!1,Et=null,et=null,bt=null}}}function o(){let V=!1,Et=null,et=null,bt=null,Lt=null,re=null,ue=null,fe=null,Te=null;return{setTest:function(ae){V||(ae?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ae){Et!==ae&&!V&&(i.stencilMask(ae),Et=ae)},setFunc:function(ae,ge,Je){(et!==ae||bt!==ge||Lt!==Je)&&(i.stencilFunc(ae,ge,Je),et=ae,bt=ge,Lt=Je)},setOp:function(ae,ge,Je){(re!==ae||ue!==ge||fe!==Je)&&(i.stencilOp(ae,ge,Je),re=ae,ue=ge,fe=Je)},setLocked:function(ae){V=ae},setClear:function(ae){Te!==ae&&(i.clearStencil(ae),Te=ae)},reset:function(){V=!1,Et=null,et=null,bt=null,Lt=null,re=null,ue=null,fe=null,Te=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},p=new WeakMap,x=[],m=null,g=!1,y=null,_=null,M=null,I=null,P=null,C=null,v=null,z=new Jt(0,0,0),b=0,S=!1,rt=null,$=null,D=null,H=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,E=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=E>=1):B.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=E>=2);let Y=null,it={},gt=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ut=new Me().fromArray(gt),vt=new Me().fromArray(W);function k(V,Et,et,bt){let Lt=new Uint8Array(4),re=i.createTexture();i.bindTexture(V,re),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<et;ue++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Et,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Et+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return re}let K={};K[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(K[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),tt(i.DEPTH_TEST),l.setFunc(wo),j(!1),_t(Uc),tt(i.CULL_FACE),Z(yi);function tt(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function xt(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function st(V,Et){return f[V]!==Et?(i.bindFramebuffer(V,Et),f[V]=Et,n&&(V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et)),!0):!1}function R(V,Et){let et=x,bt=!1;if(V){et=p.get(Et),et===void 0&&(et=[],p.set(Et,et));let Lt=V.textures;if(et.length!==Lt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ue=Lt.length;re<ue;re++)et[re]=i.COLOR_ATTACHMENT0+re;et.length=Lt.length,bt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,bt=!0);if(bt)if(e.isWebGL2)i.drawBuffers(et);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function at(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let Q={[Wi]:i.FUNC_ADD,[Zd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[zc]=i.MIN,Q[kc]=i.MAX;else{let V=t.get("EXT_blend_minmax");V!==null&&(Q[zc]=V.MIN_EXT,Q[kc]=V.MAX_EXT)}let X={[Jd]:i.ZERO,[Kd]:i.ONE,[jd]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[sf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(V,Et,et,bt,Lt,re,ue,fe,Te,ae){if(V===yi){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),V!==qd){if(V!==y||ae!==S){if((_!==Wi||P!==Wi)&&(i.blendEquation(i.FUNC_ADD),_=Wi,P=Wi),ae)switch(V){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,I=null,C=null,v=null,z.set(0,0,0),b=0,y=V,S=ae}return}Lt=Lt||Et,re=re||et,ue=ue||bt,(Et!==_||Lt!==P)&&(i.blendEquationSeparate(Q[Et],Q[Lt]),_=Et,P=Lt),(et!==M||bt!==I||re!==C||ue!==v)&&(i.blendFuncSeparate(X[et],X[bt],X[re],X[ue]),M=et,I=bt,C=re,v=ue),(fe.equals(z)===!1||Te!==b)&&(i.blendColor(fe.r,fe.g,fe.b,Te),z.copy(fe),b=Te),y=V,S=!1}function F(V,Et){V.side===en?xt(i.CULL_FACE):tt(i.CULL_FACE);let et=V.side===nn;Et&&(et=!et),j(et),V.blending===Os&&V.transparent===!1?Z(yi):Z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);let bt=V.stencilWrite;c.setTest(bt),bt&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),T(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(V){rt!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),rt=V)}function _t(V){V!==Xd?(tt(i.CULL_FACE),V!==$&&(V===Uc?i.cullFace(i.BACK):V===Yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),$=V}function Ut(V){V!==D&&(N&&i.lineWidth(V),D=V)}function T(V,Et,et){V?(tt(i.POLYGON_OFFSET_FILL),(H!==Et||G!==et)&&(i.polygonOffset(Et,et),H=Et,G=et)):xt(i.POLYGON_OFFSET_FILL)}function w(V){V?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function ht(V){V===void 0&&(V=i.TEXTURE0+q-1),Y!==V&&(i.activeTexture(V),Y=V)}function dt(V,Et,et){et===void 0&&(Y===null?et=i.TEXTURE0+q-1:et=Y);let bt=it[et];bt===void 0&&(bt={type:void 0,texture:void 0},it[et]=bt),(bt.type!==V||bt.texture!==Et)&&(Y!==et&&(i.activeTexture(et),Y=et),i.bindTexture(V,Et||K[V]),bt.type=V,bt.texture=Et)}function Mt(){let V=it[Y];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(V){ut.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ut.copy(V))}function Ht(V){vt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),vt.copy(V))}function O(V,Et){let et=u.get(Et);et===void 0&&(et=new WeakMap,u.set(Et,et));let bt=et.get(V);bt===void 0&&(bt=i.getUniformBlockIndex(Et,V.name),et.set(V,bt))}function mt(V,Et){let bt=u.get(Et).get(V);h.get(Et)!==bt&&(i.uniformBlockBinding(Et,bt,V.__bindingPointIndex),h.set(Et,bt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Y=null,it={},f={},p=new WeakMap,x=[],m=null,g=!1,y=null,_=null,M=null,I=null,P=null,C=null,v=null,z=new Jt(0,0,0),b=0,S=!1,rt=null,$=null,D=null,H=null,G=null,ut.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:tt,disable:xt,bindFramebuffer:st,drawBuffers:R,useProgram:at,setBlending:Z,setMaterial:F,setFlipSided:j,setCullFace:_t,setLineWidth:Ut,setPolygonOffset:T,setScissorTest:w,activeTexture:ht,bindTexture:dt,unbindTexture:Mt,compressedTexImage2D:yt,compressedTexImage3D:qt,texImage2D:ie,texImage3D:Gt,updateUBOMapping:O,uniformBlockBinding:mt,texStorage2D:St,texStorage3D:Se,texSubImage2D:Vt,texSubImage3D:Tt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Zt,scissor:Ot,viewport:Ht,reset:Ft}}function X1(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,w){return p?new OffscreenCanvas(T,w):Lo("canvas")}function m(T,w,ht,dt){let Mt=1,yt=Ut(T);if((yt.width>dt||yt.height>dt)&&(Mt=dt/Math.max(yt.width,yt.height)),Mt<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let qt=w?Io:Math.floor,Vt=qt(Mt*yt.width),Tt=qt(Mt*yt.height);d===void 0&&(d=x(Vt,Tt));let Ct=ht?x(Vt,Tt):d;return Ct.width=Vt,Ct.height=Tt,Ct.getContext("2d").drawImage(T,0,0,Vt,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Vt+"x"+Tt+")."),Ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),T;return T}function g(T){let w=Ut(T);return ul(w.width)&&ul(w.height)}function y(T){return a?!1:T.wrapS!==Ye||T.wrapT!==Ye||T.minFilter!==Xe&&T.minFilter!==un}function _(T,w){return T.generateMipmaps&&w&&T.minFilter!==Xe&&T.minFilter!==un}function M(T){i.generateMipmap(T)}function I(T,w,ht,dt,Mt=!1){if(a===!1)return w;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let yt=w;if(w===i.RED&&(ht===i.FLOAT&&(yt=i.R32F),ht===i.HALF_FLOAT&&(yt=i.R16F),ht===i.UNSIGNED_BYTE&&(yt=i.R8)),w===i.RED_INTEGER&&(ht===i.UNSIGNED_BYTE&&(yt=i.R8UI),ht===i.UNSIGNED_SHORT&&(yt=i.R16UI),ht===i.UNSIGNED_INT&&(yt=i.R32UI),ht===i.BYTE&&(yt=i.R8I),ht===i.SHORT&&(yt=i.R16I),ht===i.INT&&(yt=i.R32I)),w===i.RG&&(ht===i.FLOAT&&(yt=i.RG32F),ht===i.HALF_FLOAT&&(yt=i.RG16F),ht===i.UNSIGNED_BYTE&&(yt=i.RG8)),w===i.RG_INTEGER&&(ht===i.UNSIGNED_BYTE&&(yt=i.RG8UI),ht===i.UNSIGNED_SHORT&&(yt=i.RG16UI),ht===i.UNSIGNED_INT&&(yt=i.RG32UI),ht===i.BYTE&&(yt=i.RG8I),ht===i.SHORT&&(yt=i.RG16I),ht===i.INT&&(yt=i.RG32I)),w===i.RGBA){let qt=Mt?Ao:de.getTransfer(dt);ht===i.FLOAT&&(yt=i.RGBA32F),ht===i.HALF_FLOAT&&(yt=i.RGBA16F),ht===i.UNSIGNED_BYTE&&(yt=qt===xe?i.SRGB8_ALPHA8:i.RGBA8),ht===i.UNSIGNED_SHORT_4_4_4_4&&(yt=i.RGBA4),ht===i.UNSIGNED_SHORT_5_5_5_1&&(yt=i.RGB5_A1)}return(yt===i.R16F||yt===i.R32F||yt===i.RG16F||yt===i.RG32F||yt===i.RGBA16F||yt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function P(T,w,ht){return _(T,ht)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function C(T){return T===Xe||T===Hc||T===ar?i.NEAREST:i.LINEAR}function v(T){let w=T.target;w.removeEventListener("dispose",v),b(w),w.isVideoTexture&&u.delete(w)}function z(T){let w=T.target;w.removeEventListener("dispose",z),rt(w)}function b(T){let w=n.get(T);if(w.__webglInit===void 0)return;let ht=T.source,dt=f.get(ht);if(dt){let Mt=dt[w.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&S(T),Object.keys(dt).length===0&&f.delete(ht)}n.remove(T)}function S(T){let w=n.get(T);i.deleteTexture(w.__webglTexture);let ht=T.source,dt=f.get(ht);delete dt[w.__cacheKey],o.memory.textures--}function rt(T){let w=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(w.__webglFramebuffer[dt]))for(let Mt=0;Mt<w.__webglFramebuffer[dt].length;Mt++)i.deleteFramebuffer(w.__webglFramebuffer[dt][Mt]);else i.deleteFramebuffer(w.__webglFramebuffer[dt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[dt])}else{if(Array.isArray(w.__webglFramebuffer))for(let dt=0;dt<w.__webglFramebuffer.length;dt++)i.deleteFramebuffer(w.__webglFramebuffer[dt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let dt=0;dt<w.__webglColorRenderbuffer.length;dt++)w.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[dt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ht=T.textures;for(let dt=0,Mt=ht.length;dt<Mt;dt++){let yt=n.get(ht[dt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(ht[dt])}n.remove(T)}let $=0;function D(){$=0}function H(){let T=$;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),$+=1,T}function G(T){let w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function q(T,w){let ht=n.get(T);if(T.isVideoTexture&&j(T),T.isRenderTargetTexture===!1&&T.version>0&&ht.__version!==T.version){let dt=T.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(ht,T,w);return}}e.bindTexture(i.TEXTURE_2D,ht.__webglTexture,i.TEXTURE0+w)}function N(T,w){let ht=n.get(T);if(T.version>0&&ht.__version!==T.version){vt(ht,T,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ht.__webglTexture,i.TEXTURE0+w)}function E(T,w){let ht=n.get(T);if(T.version>0&&ht.__version!==T.version){vt(ht,T,w);return}e.bindTexture(i.TEXTURE_3D,ht.__webglTexture,i.TEXTURE0+w)}function B(T,w){let ht=n.get(T);if(T.version>0&&ht.__version!==T.version){k(ht,T,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture,i.TEXTURE0+w)}let Y={[$i]:i.REPEAT,[Ye]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},it={[Xe]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},gt={[Nf]:i.NEVER,[Hf]:i.ALWAYS,[Uf]:i.LESS,[Tu]:i.LEQUAL,[Of]:i.EQUAL,[kf]:i.GEQUAL,[Ff]:i.GREATER,[zf]:i.NOTEQUAL};function W(T,w,ht){if(w.type===qn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===ba||w.magFilter===ar||w.magFilter===Yi||w.minFilter===un||w.minFilter===ba||w.minFilter===ar||w.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ht?(i.texParameteri(T,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[w.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[w.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[w.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Ye||w.wrapT!==Ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,C(w.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,C(w.minFilter)),w.minFilter!==Xe&&w.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==ar&&w.minFilter!==Yi||w.type===qn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Mr&&t.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ut(T,w){let ht=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",v));let dt=w.source,Mt=f.get(dt);Mt===void 0&&(Mt={},f.set(dt,Mt));let yt=G(w);if(yt!==T.__cacheKey){Mt[yt]===void 0&&(Mt[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ht=!0),Mt[yt].usedTimes++;let qt=Mt[T.__cacheKey];qt!==void 0&&(Mt[T.__cacheKey].usedTimes--,qt.usedTimes===0&&S(w)),T.__cacheKey=yt,T.__webglTexture=Mt[yt].texture}return ht}function vt(T,w,ht){let dt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(dt=i.TEXTURE_3D);let Mt=ut(T,w),yt=w.source;e.bindTexture(dt,T.__webglTexture,i.TEXTURE0+ht);let qt=n.get(yt);if(yt.version!==qt.__version||Mt===!0){e.activeTexture(i.TEXTURE0+ht);let Vt=de.getPrimaries(de.workingColorSpace),Tt=w.colorSpace===xi?null:de.getPrimaries(w.colorSpace),Ct=w.colorSpace===xi||Vt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Zt=y(w)&&g(w.image)===!1,St=m(w.image,Zt,!1,s.maxTextureSize);St=_t(w,St);let Se=g(St)||a,ie=r.convert(w.format,w.colorSpace),Gt=r.convert(w.type),Ot=I(w.internalFormat,ie,Gt,w.colorSpace,w.isVideoTexture);W(dt,w,Se);let Ht,O=w.mipmaps,mt=a&&w.isVideoTexture!==!0&&Ot!==Eu,Ft=qt.__version===void 0||Mt===!0,V=yt.dataReady,Et=P(w,St,Se);if(w.isDepthTexture)Ot=i.DEPTH_COMPONENT,a?w.type===qn?Ot=i.DEPTH_COMPONENT32F:w.type===_i?Ot=i.DEPTH_COMPONENT24:w.type===qi?Ot=i.DEPTH24_STENCIL8:Ot=i.DEPTH_COMPONENT16:w.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zi&&Ot===i.DEPTH_COMPONENT&&w.type!==Jl&&w.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_i,Gt=r.convert(w.type)),w.format===Bs&&Ot===i.DEPTH_COMPONENT&&(Ot=i.DEPTH_STENCIL,w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=qi,Gt=r.convert(w.type))),Ft&&(mt?e.texStorage2D(i.TEXTURE_2D,1,Ot,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,Ot,St.width,St.height,0,ie,Gt,null));else if(w.isDataTexture)if(O.length>0&&Se){mt&&Ft&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,O[0].width,O[0].height);for(let et=0,bt=O.length;et<bt;et++)Ht=O[et],mt?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,ie,Gt,Ht.data):e.texImage2D(i.TEXTURE_2D,et,Ot,Ht.width,Ht.height,0,ie,Gt,Ht.data);w.generateMipmaps=!1}else mt?(Ft&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,St.width,St.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,ie,Gt,St.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,St.width,St.height,0,ie,Gt,St.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ot,O[0].width,O[0].height,St.depth);for(let et=0,bt=O.length;et<bt;et++)Ht=O[et],w.format!==kn?ie!==null?mt?V&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ht.width,Ht.height,St.depth,ie,Ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Ot,Ht.width,Ht.height,St.depth,0,Ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ht.width,Ht.height,St.depth,ie,Gt,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Ot,Ht.width,Ht.height,St.depth,0,ie,Gt,Ht.data)}else{mt&&Ft&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,O[0].width,O[0].height);for(let et=0,bt=O.length;et<bt;et++)Ht=O[et],w.format!==kn?ie!==null?mt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,ie,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Ot,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,ie,Gt,Ht.data):e.texImage2D(i.TEXTURE_2D,et,Ot,Ht.width,Ht.height,0,ie,Gt,Ht.data)}else if(w.isDataArrayTexture)mt?(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ot,St.width,St.height,St.depth),V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,ie,Gt,St.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,St.width,St.height,St.depth,0,ie,Gt,St.data);else if(w.isData3DTexture)mt?(Ft&&e.texStorage3D(i.TEXTURE_3D,Et,Ot,St.width,St.height,St.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,ie,Gt,St.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,St.width,St.height,St.depth,0,ie,Gt,St.data);else if(w.isFramebufferTexture){if(Ft)if(mt)e.texStorage2D(i.TEXTURE_2D,Et,Ot,St.width,St.height);else{let et=St.width,bt=St.height;for(let Lt=0;Lt<Et;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Ot,et,bt,0,ie,Gt,null),et>>=1,bt>>=1}}else if(O.length>0&&Se){if(mt&&Ft){let et=Ut(O[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ot,et.width,et.height)}for(let et=0,bt=O.length;et<bt;et++)Ht=O[et],mt?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ie,Gt,Ht):e.texImage2D(i.TEXTURE_2D,et,Ot,ie,Gt,Ht);w.generateMipmaps=!1}else if(mt){if(Ft){let et=Ut(St);e.texStorage2D(i.TEXTURE_2D,Et,Ot,et.width,et.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Gt,St)}else e.texImage2D(i.TEXTURE_2D,0,Ot,ie,Gt,St);_(w,Se)&&M(dt),qt.__version=yt.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function k(T,w,ht){if(w.image.length!==6)return;let dt=ut(T,w),Mt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+ht);let yt=n.get(Mt);if(Mt.version!==yt.__version||dt===!0){e.activeTexture(i.TEXTURE0+ht);let qt=de.getPrimaries(de.workingColorSpace),Vt=w.colorSpace===xi?null:de.getPrimaries(w.colorSpace),Tt=w.colorSpace===xi||qt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Zt=w.image[0]&&w.image[0].isDataTexture,St=[];for(let et=0;et<6;et++)!Ct&&!Zt?St[et]=m(w.image[et],!1,!0,s.maxCubemapSize):St[et]=Zt?w.image[et].image:w.image[et],St[et]=_t(w,St[et]);let Se=St[0],ie=g(Se)||a,Gt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type),Ht=I(w.internalFormat,Gt,Ot,w.colorSpace),O=a&&w.isVideoTexture!==!0,mt=yt.__version===void 0||dt===!0,Ft=Mt.dataReady,V=P(w,Se,ie);W(i.TEXTURE_CUBE_MAP,w,ie);let Et;if(Ct){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ht,Se.width,Se.height);for(let et=0;et<6;et++){Et=St[et].mipmaps;for(let bt=0;bt<Et.length;bt++){let Lt=Et[bt];w.format!==kn?Gt!==null?O?Ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,Lt.width,Lt.height,Gt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,Ht,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,Lt.width,Lt.height,Gt,Ot,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,Ht,Lt.width,Lt.height,0,Gt,Ot,Lt.data)}}}else{if(Et=w.mipmaps,O&&mt){Et.length>0&&V++;let et=Ut(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ht,et.width,et.height)}for(let et=0;et<6;et++)if(Zt){O?Ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,St[et].width,St[et].height,Gt,Ot,St[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,St[et].width,St[et].height,0,Gt,Ot,St[et].data);for(let bt=0;bt<Et.length;bt++){let re=Et[bt].image[et].image;O?Ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,re.width,re.height,Gt,Ot,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,Ht,re.width,re.height,0,Gt,Ot,re.data)}}else{O?Ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Ot,St[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,Gt,Ot,St[et]);for(let bt=0;bt<Et.length;bt++){let Lt=Et[bt];O?Ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,Gt,Ot,Lt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,Ht,Gt,Ot,Lt.image[et])}}}_(w,ie)&&M(i.TEXTURE_CUBE_MAP),yt.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function K(T,w,ht,dt,Mt,yt){let qt=r.convert(ht.format,ht.colorSpace),Vt=r.convert(ht.type),Tt=I(ht.internalFormat,qt,Vt,ht.colorSpace);if(!n.get(w).__hasExternalTextures){let Zt=Math.max(1,w.width>>yt),St=Math.max(1,w.height>>yt);Mt===i.TEXTURE_3D||Mt===i.TEXTURE_2D_ARRAY?e.texImage3D(Mt,yt,Tt,Zt,St,w.depth,0,qt,Vt,null):e.texImage2D(Mt,yt,Tt,Zt,St,0,qt,Vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,Mt,n.get(ht).__webglTexture,0,Z(w)):(Mt===i.TEXTURE_2D||Mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,Mt,n.get(ht).__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,w,ht){if(i.bindRenderbuffer(i.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let dt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ht||F(w)){let Mt=w.depthTexture;Mt&&Mt.isDepthTexture&&(Mt.type===qn?dt=i.DEPTH_COMPONENT32F:Mt.type===_i&&(dt=i.DEPTH_COMPONENT24));let yt=Z(w);F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,dt,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,dt,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,dt,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){let dt=Z(w);ht&&F(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,i.DEPTH24_STENCIL8,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let dt=w.textures;for(let Mt=0;Mt<dt.length;Mt++){let yt=dt[Mt],qt=r.convert(yt.format,yt.colorSpace),Vt=r.convert(yt.type),Tt=I(yt.internalFormat,qt,Vt,yt.colorSpace),Ct=Z(w);ht&&F(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Tt,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let dt=n.get(w.depthTexture).__webglTexture,Mt=Z(w);if(w.depthTexture.format===Zi)F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(w.depthTexture.format===Bs)F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function st(T){let w=n.get(T),ht=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(ht)throw new Error("target.depthTexture not supported in Cube render targets");xt(w.__webglFramebuffer,T)}else if(ht){w.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[dt]),w.__webglDepthbuffer[dt]=i.createRenderbuffer(),tt(w.__webglDepthbuffer[dt],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),tt(w.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function R(T,w,ht){let dt=n.get(T);w!==void 0&&K(dt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ht!==void 0&&st(T)}function at(T){let w=T.texture,ht=n.get(T),dt=n.get(w);T.addEventListener("dispose",z);let Mt=T.textures,yt=T.isWebGLCubeRenderTarget===!0,qt=Mt.length>1,Vt=g(T)||a;if(qt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=w.version,o.memory.textures++),yt){ht.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(a&&w.mipmaps&&w.mipmaps.length>0){ht.__webglFramebuffer[Tt]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)ht.__webglFramebuffer[Tt][Ct]=i.createFramebuffer()}else ht.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){ht.__webglFramebuffer=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)ht.__webglFramebuffer[Tt]=i.createFramebuffer()}else ht.__webglFramebuffer=i.createFramebuffer();if(qt)if(s.drawBuffers)for(let Tt=0,Ct=Mt.length;Tt<Ct;Tt++){let Zt=n.get(Mt[Tt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&F(T)===!1){ht.__webglMultisampledFramebuffer=i.createFramebuffer(),ht.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer);for(let Tt=0;Tt<Mt.length;Tt++){let Ct=Mt[Tt];ht.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]);let Zt=r.convert(Ct.format,Ct.colorSpace),St=r.convert(Ct.type),Se=I(Ct.internalFormat,Zt,St,Ct.colorSpace,T.isXRRenderTarget===!0),ie=Z(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Se,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(ht.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(ht.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),W(i.TEXTURE_CUBE_MAP,w,Vt);for(let Tt=0;Tt<6;Tt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)K(ht.__webglFramebuffer[Tt][Ct],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct);else K(ht.__webglFramebuffer[Tt],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);_(w,Vt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(qt){for(let Tt=0,Ct=Mt.length;Tt<Ct;Tt++){let Zt=Mt[Tt],St=n.get(Zt);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),W(i.TEXTURE_2D,Zt,Vt),K(ht.__webglFramebuffer,T,Zt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),_(Zt,Vt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?Tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Tt,dt.__webglTexture),W(Tt,w,Vt),a&&w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)K(ht.__webglFramebuffer[Ct],T,w,i.COLOR_ATTACHMENT0,Tt,Ct);else K(ht.__webglFramebuffer,T,w,i.COLOR_ATTACHMENT0,Tt,0);_(w,Vt)&&M(Tt),e.unbindTexture()}T.depthBuffer&&st(T)}function Q(T){let w=g(T)||a,ht=T.textures;for(let dt=0,Mt=ht.length;dt<Mt;dt++){let yt=ht[dt];if(_(yt,w)){let qt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Vt=n.get(yt).__webglTexture;e.bindTexture(qt,Vt),M(qt),e.unbindTexture()}}}function X(T){if(a&&T.samples>0&&F(T)===!1){let w=T.textures,ht=T.width,dt=T.height,Mt=i.COLOR_BUFFER_BIT,yt=[],qt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(T),Tt=w.length>1;if(Tt)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){yt.push(i.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&yt.push(qt);let Zt=Vt.__ignoreDepthValues!==void 0?Vt.__ignoreDepthValues:!1;if(Zt===!1&&(T.depthBuffer&&(Mt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Mt|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]),Zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qt])),Tt){let St=n.get(w[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,ht,dt,0,0,ht,dt,Mt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]);let Zt=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}}function Z(T){return Math.min(s.maxSamples,T.samples)}function F(T){let w=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function j(T){let w=o.render.frame;u.get(T)!==w&&(u.set(T,w),T.update())}function _t(T,w){let ht=T.colorSpace,dt=T.format,Mt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===hl||ht!==Ti&&ht!==xi&&(de.getTransfer(ht)===xe?a===!1?t.has("EXT_sRGB")===!0&&dt===kn?(T.format=hl,T.minFilter=un,T.generateMipmaps=!1):w=Do.sRGBToLinear(w):(dt!==kn||Mt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ht)),w}function Ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=N,this.setTexture3D=E,this.setTextureCube=B,this.rebindTextures=R,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=K,this.useMultisampledRTT=F}function Y1(i,t,e){let n=e.isWebGL2;function s(r,o=xi){let a,l=de.getTransfer(o);if(r===Mi)return i.UNSIGNED_BYTE;if(r===xu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===_u)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Sf)return i.BYTE;if(r===Tf)return i.SHORT;if(r===Jl)return i.UNSIGNED_SHORT;if(r===gu)return i.INT;if(r===_i)return i.UNSIGNED_INT;if(r===qn)return i.FLOAT;if(r===Mr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Af)return i.ALPHA;if(r===kn)return i.RGBA;if(r===Rf)return i.LUMINANCE;if(r===Cf)return i.LUMINANCE_ALPHA;if(r===Zi)return i.DEPTH_COMPONENT;if(r===Bs)return i.DEPTH_STENCIL;if(r===hl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yu)return i.RED;if(r===vu)return i.RED_INTEGER;if(r===Pf)return i.RG;if(r===Mu)return i.RG_INTEGER;if(r===bu)return i.RGBA_INTEGER;if(r===Ea||r===wa||r===Sa||r===Ta)if(l===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bc||r===Gc||r===Vc||r===Wc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xc||r===Yc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xc)return l===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qc||r===Zc||r===$c||r===Jc||r===Kc||r===jc||r===Qc||r===th||r===eh||r===nh||r===ih||r===sh||r===rh||r===oh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$c)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qc)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eh)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nh)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ih)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sh)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rh)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Aa||r===ah||r===lh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Aa)return l===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===If||r===ch||r===hh||r===uh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ch)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var El=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},zt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},q1={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new $n({extensions:{fragDepth:!0},vertexShader:Z1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new Ei(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Sl=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new wl,m=e.getContextAttributes(),g=null,y=null,_=[],M=[],I=new pt,P=null,C=new tn;C.layers.enable(1),C.viewport=new Me;let v=new tn;v.layers.enable(2),v.viewport=new Me;let z=[C,v],b=new El;b.layers.enable(1),b.layers.enable(2);let S=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ut=_[W];return ut===void 0&&(ut=new xr,_[W]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(W){let ut=_[W];return ut===void 0&&(ut=new xr,_[W]=ut),ut.getGripSpace()},this.getHand=function(W){let ut=_[W];return ut===void 0&&(ut=new xr,_[W]=ut),ut.getHandSpace()};function $(W){let ut=M.indexOf(W.inputSource);if(ut===-1)return;let vt=_[ut];vt!==void 0&&(vt.update(W.inputSource,W.frame,c||o),vt.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",H);for(let W=0;W<_.length;W++){let ut=M[W];ut!==null&&(M[W]=null,_[W].disconnect(ut))}S=null,rt=null,x.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,y=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",D),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ut={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ri(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,vt=null,k=null;m.depth&&(k=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Bs:Zi,vt=m.stencil?qi:_i);let K={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(K),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ri(d.textureWidth,d.textureHeight,{format:kn,type:Mi,depthTexture:new Go(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});let tt=t.properties.get(y);tt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(W){for(let ut=0;ut<W.removed.length;ut++){let vt=W.removed[ut],k=M.indexOf(vt);k>=0&&(M[k]=null,_[k].disconnect(vt))}for(let ut=0;ut<W.added.length;ut++){let vt=W.added[ut],k=M.indexOf(vt);if(k===-1){for(let tt=0;tt<_.length;tt++)if(tt>=M.length){M.push(vt),k=tt;break}else if(M[tt]===null){M[tt]=vt,k=tt;break}if(k===-1)break}let K=_[k];K&&K.connect(vt)}}let G=new L,q=new L;function N(W,ut,vt){G.setFromMatrixPosition(ut.matrixWorld),q.setFromMatrixPosition(vt.matrixWorld);let k=G.distanceTo(q),K=ut.projectionMatrix.elements,tt=vt.projectionMatrix.elements,xt=K[14]/(K[10]-1),st=K[14]/(K[10]+1),R=(K[9]+1)/K[5],at=(K[9]-1)/K[5],Q=(K[8]-1)/K[0],X=(tt[8]+1)/tt[0],Z=xt*Q,F=xt*X,j=k/(-Q+X),_t=j*-Q;ut.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(j),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let Ut=xt+j,T=st+j,w=Z-_t,ht=F+(k-_t),dt=R*st/T*Ut,Mt=at*st/T*Ut;W.projectionMatrix.makePerspective(w,ht,dt,Mt,Ut,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function E(W,ut){ut===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ut.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),b.near=v.near=C.near=W.near,b.far=v.far=C.far=W.far,(S!==b.near||rt!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,rt=b.far,C.near=S,C.far=rt,v.near=S,v.far=rt,C.updateProjectionMatrix(),v.updateProjectionMatrix(),W.updateProjectionMatrix());let ut=W.parent,vt=b.cameras;E(b,ut);for(let k=0;k<vt.length;k++)E(vt[k],ut);vt.length===2?N(b,C,v):b.projectionMatrix.copy(C.projectionMatrix),B(W,b,ut)};function B(W,ut,vt){vt===null?W.matrix.copy(ut.matrixWorld):(W.matrix.copy(vt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ut.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ut.projectionMatrix),W.projectionMatrixInverse.copy(ut.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=br*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let Y=null;function it(W,ut){if(h=ut.getViewerPose(c||o),p=ut,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let k=!1;vt.length!==b.cameras.length&&(b.cameras.length=0,k=!0);for(let tt=0;tt<vt.length;tt++){let xt=vt[tt],st=null;if(f!==null)st=f.getViewport(xt);else{let at=u.getViewSubImage(d,xt);st=at.viewport,tt===0&&(t.setRenderTargetTextures(y,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(y))}let R=z[tt];R===void 0&&(R=new tn,R.layers.enable(tt),R.viewport=new Me,z[tt]=R),R.matrix.fromArray(xt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(xt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(st.x,st.y,st.width,st.height),tt===0&&(b.matrix.copy(R.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),k===!0&&b.cameras.push(R)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let tt=u.getDepthInformation(vt[0]);tt&&tt.isValid&&tt.texture&&x.init(t,tt,s.renderState)}}for(let vt=0;vt<_.length;vt++){let k=M[vt],K=_[vt];k!==null&&K!==void 0&&K.update(k,ut,c||o)}x.render(t,b),Y&&Y(W,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),p=null}let gt=new Pu;gt.setAnimationLoop(it),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}},Gi=new Cn,J1=new le;function K1(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,_,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),_=y.envMap,M=y.envMapRotation;if(_&&(m.envMap.value=_,Gi.copy(M),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Gi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;let I=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*I,e(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),t.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j1(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let M=_.program;n.uniformBlockBinding(y,M)}function c(y,_){let M=s[y.id];M===void 0&&(p(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(y,I);let P=t.render.frame;r[y.id]!==P&&(d(y),r[y.id]=P)}function h(y){let _=u();y.__bindingPointIndex=_;let M=i.createBuffer(),I=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],M=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,C=M.length;P<C;P++){let v=Array.isArray(M[P])?M[P]:[M[P]];for(let z=0,b=v.length;z<b;z++){let S=v[z];if(f(S,P,z,I)===!0){let rt=S.__offset,$=Array.isArray(S.value)?S.value:[S.value],D=0;for(let H=0;H<$.length;H++){let G=$[H],q=x(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,rt+D,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,M,I){let P=y.value,C=_+"_"+M;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{let v=I[C];if(typeof P=="number"||typeof P=="boolean"){if(v!==P)return I[C]=P,!0}else if(v.equals(P)===!1)return v.copy(P),!0}return!1}function p(y){let _=y.uniforms,M=0,I=16;for(let C=0,v=_.length;C<v;C++){let z=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,S=z.length;b<S;b++){let rt=z[b],$=Array.isArray(rt.value)?rt.value:[rt.value];for(let D=0,H=$.length;D<H;D++){let G=$[D],q=x(G),N=M%I;N!==0&&I-N<q.boundary&&(M+=I-N),rt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=M,M+=q.storage}}}let P=M%I;return P>0&&(M+=I-P),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Sr=class{constructor(t={}){let{canvas:e=e0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),p=new Int32Array(4),x=null,m=null,g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let _=this,M=!1,I=0,P=0,C=null,v=-1,z=null,b=new Me,S=new Me,rt=null,$=new Jt(0),D=0,H=e.width,G=e.height,q=1,N=null,E=null,B=new Me(0,0,H,G),Y=new Me(0,0,H,G),it=!1,gt=new wr,W=!1,ut=!1,vt=null,k=new le,K=new pt,tt=new L,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return C===null?q:1}let R=n;function at(A,J){for(let ot=0;ot<A.length;ot++){let ct=A[ot],nt=e.getContext(ct,J);if(nt!==null)return nt}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ql}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){let J=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&J.shift(),R=at(J,A),R===null)throw at(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,X,Z,F,j,_t,Ut,T,w,ht,dt,Mt,yt,qt,Vt,Tt,Ct,Zt,St,Se,ie,Gt,Ot,Ht;function O(){Q=new pg(R),X=new lg(R,Q,t),Q.init(X),Gt=new Y1(R,Q,X),Z=new W1(R,Q,X),F=new xg(R),j=new L1,_t=new X1(R,Q,Z,j,X,Gt,F),Ut=new hg(_),T=new fg(_),w=new E0(R,X),Ot=new og(R,Q,w,X),ht=new mg(R,w,F,Ot),dt=new Mg(R,ht,w,F),St=new vg(R,X,_t),Tt=new cg(j),Mt=new I1(_,Ut,T,Q,X,Ot,Tt),yt=new K1(_,j),qt=new N1,Vt=new H1(Q,X),Zt=new rg(_,Ut,T,Z,dt,d,l),Ct=new V1(_,dt,X),Ht=new j1(R,F,X,Z),Se=new ag(R,Q,F,X),ie=new gg(R,Q,F,X),F.programs=Mt.programs,_.capabilities=X,_.extensions=Q,_.properties=j,_.renderLists=qt,_.shadowMap=Ct,_.state=Z,_.info=F}O();let mt=new Sl(_,R);this.xr=mt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(H,G,!1))},this.getSize=function(A){return A.set(H,G)},this.setSize=function(A,J,ot=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,G=J,e.width=Math.floor(A*q),e.height=Math.floor(J*q),ot===!0&&(e.style.width=A+"px",e.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(H*q,G*q).floor()},this.setDrawingBufferSize=function(A,J,ot){H=A,G=J,q=ot,e.width=Math.floor(A*ot),e.height=Math.floor(J*ot),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,J,ot,ct){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,J,ot,ct),Z.viewport(b.copy(B).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,J,ot,ct){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,J,ot,ct),Z.scissor(S.copy(Y).multiplyScalar(q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){Z.setScissorTest(it=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){E=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(A=!0,J=!0,ot=!0){let ct=0;if(A){let nt=!1;if(C!==null){let Nt=C.texture.format;nt=Nt===bu||Nt===Mu||Nt===vu}if(nt){let Nt=C.texture.type,Bt=Nt===Mi||Nt===_i||Nt===Jl||Nt===qi||Nt===xu||Nt===_u,Yt=Zt.getClearColor(),$t=Zt.getClearAlpha(),se=Yt.r,Kt=Yt.g,jt=Yt.b;Bt?(f[0]=se,f[1]=Kt,f[2]=jt,f[3]=$t,R.clearBufferuiv(R.COLOR,0,f)):(p[0]=se,p[1]=Kt,p[2]=jt,p[3]=$t,R.clearBufferiv(R.COLOR,0,p))}else ct|=R.COLOR_BUFFER_BIT}J&&(ct|=R.DEPTH_BUFFER_BIT),ot&&(ct|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),Vt.dispose(),j.dispose(),Ut.dispose(),T.dispose(),dt.dispose(),Ot.dispose(),Ht.dispose(),Mt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Te),mt.removeEventListener("sessionend",ae),vt&&(vt.dispose(),vt=null),ge.stop()};function Ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=F.autoReset,J=Ct.enabled,ot=Ct.autoUpdate,ct=Ct.needsUpdate,nt=Ct.type;O(),F.autoReset=A,Ct.enabled=J,Ct.autoUpdate=ot,Ct.needsUpdate=ct,Ct.type=nt}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){let J=A.target;J.removeEventListener("dispose",et),bt(J)}function bt(A){Lt(A),j.remove(A)}function Lt(A){let J=j.get(A).programs;J!==void 0&&(J.forEach(function(ot){Mt.releaseProgram(ot)}),A.isShaderMaterial&&Mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ot,ct,nt,Nt){J===null&&(J=xt);let Bt=nt.isMesh&&nt.matrixWorld.determinant()<0,Yt=Bd(A,J,ot,ct,nt);Z.setMaterial(ct,Bt);let $t=ot.index,se=1;if(ct.wireframe===!0){if($t=ht.getWireframeAttribute(ot),$t===void 0)return;se=2}let Kt=ot.drawRange,jt=ot.attributes.position,Pe=Kt.start*se,yn=(Kt.start+Kt.count)*se;Nt!==null&&(Pe=Math.max(Pe,Nt.start*se),yn=Math.min(yn,(Nt.start+Nt.count)*se)),$t!==null?(Pe=Math.max(Pe,0),yn=Math.min(yn,$t.count)):jt!=null&&(Pe=Math.max(Pe,0),yn=Math.min(yn,jt.count));let Be=yn-Pe;if(Be<0||Be===1/0)return;Ot.setup(nt,ct,Yt,ot,$t);let Kn,Ee=Se;if($t!==null&&(Kn=w.get($t),Ee=ie,Ee.setIndex(Kn)),nt.isMesh)ct.wireframe===!0?(Z.setLineWidth(ct.wireframeLinewidth*st()),Ee.setMode(R.LINES)):Ee.setMode(R.TRIANGLES);else if(nt.isLine){let Qt=ct.linewidth;Qt===void 0&&(Qt=1),Z.setLineWidth(Qt*st()),nt.isLineSegments?Ee.setMode(R.LINES):nt.isLineLoop?Ee.setMode(R.LINE_LOOP):Ee.setMode(R.LINE_STRIP)}else nt.isPoints?Ee.setMode(R.POINTS):nt.isSprite&&Ee.setMode(R.TRIANGLES);if(nt.isBatchedMesh)Ee.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)Ee.renderInstances(Pe,Be,nt.count);else if(ot.isInstancedBufferGeometry){let Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,_a=Math.min(ot.instanceCount,Qt);Ee.renderInstances(Pe,Be,_a)}else Ee.render(Pe,Be)};function re(A,J,ot){A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,Jr(A,J,ot),A.side=bi,A.needsUpdate=!0,Jr(A,J,ot),A.side=en):Jr(A,J,ot)}this.compile=function(A,J,ot=null){ot===null&&(ot=A),m=Vt.get(ot),m.init(),y.push(m),ot.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),A!==ot&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),m.setupLights(_._useLegacyLights);let ct=new Set;return A.traverse(function(nt){let Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let Bt=0;Bt<Nt.length;Bt++){let Yt=Nt[Bt];re(Yt,ot,nt),ct.add(Yt)}else re(Nt,ot,nt),ct.add(Nt)}),y.pop(),m=null,ct},this.compileAsync=function(A,J,ot=null){let ct=this.compile(A,J,ot);return new Promise(nt=>{function Nt(){if(ct.forEach(function(Bt){j.get(Bt).currentProgram.isReady()&&ct.delete(Bt)}),ct.size===0){nt(A);return}setTimeout(Nt,10)}Q.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ue=null;function fe(A){ue&&ue(A)}function Te(){ge.stop()}function ae(){ge.start()}let ge=new Pu;ge.setAnimationLoop(fe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){ue=A,mt.setAnimationLoop(A),A===null?ge.stop():ge.start()},mt.addEventListener("sessionstart",Te),mt.addEventListener("sessionend",ae),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(J),J=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,J,C),m=Vt.get(A,y.length),m.init(),y.push(m),k.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),gt.setFromProjectionMatrix(k),ut=this.localClippingEnabled,W=Tt.init(this.clippingPlanes,ut),x=qt.get(A,g.length),x.init(),g.push(x),Je(A,J,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,E),this.info.render.frame++,W===!0&&Tt.beginShadows();let ot=m.state.shadowsArray;if(Ct.render(ot,A,J),W===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1)&&Zt.render(x,A),m.setupLights(_._useLegacyLights),J.isArrayCamera){let ct=J.cameras;for(let nt=0,Nt=ct.length;nt<Nt;nt++){let Bt=ct[nt];Ni(x,A,Bt,Bt.viewport)}}else Ni(x,A,J);C!==null&&(_t.updateMultisampleRenderTarget(C),_t.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,J),Ot.resetDefaultState(),v=-1,z=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Je(A,J,ot,ct){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){ct&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(k);let Bt=dt.update(A),Yt=A.material;Yt.visible&&x.push(A,Bt,Yt,ot,tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){let Bt=dt.update(A),Yt=A.material;if(ct&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tt.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),tt.copy(Bt.boundingSphere.center)),tt.applyMatrix4(A.matrixWorld).applyMatrix4(k)),Array.isArray(Yt)){let $t=Bt.groups;for(let se=0,Kt=$t.length;se<Kt;se++){let jt=$t[se],Pe=Yt[jt.materialIndex];Pe&&Pe.visible&&x.push(A,Bt,Pe,ot,tt.z,jt)}}else Yt.visible&&x.push(A,Bt,Yt,ot,tt.z,null)}}let Nt=A.children;for(let Bt=0,Yt=Nt.length;Bt<Yt;Bt++)Je(Nt[Bt],J,ot,ct)}function Ni(A,J,ot,ct){let nt=A.opaque,Nt=A.transmissive,Bt=A.transparent;m.setupLightsView(ot),W===!0&&Tt.setGlobalState(_.clippingPlanes,ot),Nt.length>0&&Zr(nt,Nt,J,ot),ct&&Z.viewport(b.copy(ct)),nt.length>0&&$r(nt,J,ot),Nt.length>0&&$r(Nt,J,ot),Bt.length>0&&$r(Bt,J,ot),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Zr(A,J,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;let Nt=X.isWebGL2;vt===null&&(vt=new ri(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Mr:Mi,minFilter:Yi,samples:Nt?4:0})),_.getDrawingBufferSize(K),Nt?vt.setSize(K.x,K.y):vt.setSize(Io(K.x),Io(K.y));let Bt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor($),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();let Yt=_.toneMapping;_.toneMapping=vi,$r(A,ot,ct),_t.updateMultisampleRenderTarget(vt),_t.updateRenderTargetMipmap(vt);let $t=!1;for(let se=0,Kt=J.length;se<Kt;se++){let jt=J[se],Pe=jt.object,yn=jt.geometry,Be=jt.material,Kn=jt.group;if(Be.side===en&&Pe.layers.test(ct.layers)){let Ee=Be.side;Be.side=nn,Be.needsUpdate=!0,Pc(Pe,ot,ct,yn,Be,Kn),Be.side=Ee,Be.needsUpdate=!0,$t=!0}}$t===!0&&(_t.updateMultisampleRenderTarget(vt),_t.updateRenderTargetMipmap(vt)),_.setRenderTarget(Bt),_.setClearColor($,D),_.toneMapping=Yt}function $r(A,J,ot){let ct=J.isScene===!0?J.overrideMaterial:null;for(let nt=0,Nt=A.length;nt<Nt;nt++){let Bt=A[nt],Yt=Bt.object,$t=Bt.geometry,se=ct===null?Bt.material:ct,Kt=Bt.group;Yt.layers.test(ot.layers)&&Pc(Yt,J,ot,$t,se,Kt)}}function Pc(A,J,ot,ct,nt,Nt){A.onBeforeRender(_,J,ot,ct,nt,Nt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(_,J,ot,ct,A,Nt),nt.transparent===!0&&nt.side===en&&nt.forceSinglePass===!1?(nt.side=nn,nt.needsUpdate=!0,_.renderBufferDirect(ot,J,ct,nt,A,Nt),nt.side=bi,nt.needsUpdate=!0,_.renderBufferDirect(ot,J,ct,nt,A,Nt),nt.side=en):_.renderBufferDirect(ot,J,ct,nt,A,Nt),A.onAfterRender(_,J,ot,ct,nt,Nt)}function Jr(A,J,ot){J.isScene!==!0&&(J=xt);let ct=j.get(A),nt=m.state.lights,Nt=m.state.shadowsArray,Bt=nt.state.version,Yt=Mt.getParameters(A,nt.state,Nt,J,ot),$t=Mt.getProgramCacheKey(Yt),se=ct.programs;ct.environment=A.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(A.isMeshStandardMaterial?T:Ut).get(A.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,se===void 0&&(A.addEventListener("dispose",et),se=new Map,ct.programs=se);let Kt=se.get($t);if(Kt!==void 0){if(ct.currentProgram===Kt&&ct.lightsStateVersion===Bt)return Lc(A,Yt),Kt}else Yt.uniforms=Mt.getUniforms(A),A.onBuild(ot,Yt,_),A.onBeforeCompile(Yt,_),Kt=Mt.acquireProgram(Yt,$t),se.set($t,Kt),ct.uniforms=Yt.uniforms;let jt=ct.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Lc(A,Yt),ct.needsLights=Vd(A),ct.lightsStateVersion=Bt,ct.needsLights&&(jt.ambientLightColor.value=nt.state.ambient,jt.lightProbe.value=nt.state.probe,jt.directionalLights.value=nt.state.directional,jt.directionalLightShadows.value=nt.state.directionalShadow,jt.spotLights.value=nt.state.spot,jt.spotLightShadows.value=nt.state.spotShadow,jt.rectAreaLights.value=nt.state.rectArea,jt.ltc_1.value=nt.state.rectAreaLTC1,jt.ltc_2.value=nt.state.rectAreaLTC2,jt.pointLights.value=nt.state.point,jt.pointLightShadows.value=nt.state.pointShadow,jt.hemisphereLights.value=nt.state.hemi,jt.directionalShadowMap.value=nt.state.directionalShadowMap,jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,jt.spotShadowMap.value=nt.state.spotShadowMap,jt.spotLightMatrix.value=nt.state.spotLightMatrix,jt.spotLightMap.value=nt.state.spotLightMap,jt.pointShadowMap.value=nt.state.pointShadowMap,jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=Kt,ct.uniformsList=null,Kt}function Ic(A){if(A.uniformsList===null){let J=A.currentProgram.getUniforms();A.uniformsList=zs.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Lc(A,J){let ot=j.get(A);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Bd(A,J,ot,ct,nt){J.isScene!==!0&&(J=xt),_t.resetTextureUnits();let Nt=J.fog,Bt=ct.isMeshStandardMaterial?J.environment:null,Yt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ti,$t=(ct.isMeshStandardMaterial?T:Ut).get(ct.envMap||Bt),se=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Kt=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),jt=!!ot.morphAttributes.position,Pe=!!ot.morphAttributes.normal,yn=!!ot.morphAttributes.color,Be=vi;ct.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Be=_.toneMapping);let Kn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ee=Kn!==void 0?Kn.length:0,Qt=j.get(ct),_a=m.state.lights;if(W===!0&&(ut===!0||A!==z)){let An=A===z&&ct.id===v;Tt.setState(ct,A,An)}let ye=!1;ct.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==_a.state.version||Qt.outputColorSpace!==Yt||nt.isBatchedMesh&&Qt.batching===!1||!nt.isBatchedMesh&&Qt.batching===!0||nt.isInstancedMesh&&Qt.instancing===!1||!nt.isInstancedMesh&&Qt.instancing===!0||nt.isSkinnedMesh&&Qt.skinning===!1||!nt.isSkinnedMesh&&Qt.skinning===!0||nt.isInstancedMesh&&Qt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Qt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Qt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Qt.instancingMorph===!1&&nt.morphTexture!==null||Qt.envMap!==$t||ct.fog===!0&&Qt.fog!==Nt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Tt.numPlanes||Qt.numIntersection!==Tt.numIntersection)||Qt.vertexAlphas!==se||Qt.vertexTangents!==Kt||Qt.morphTargets!==jt||Qt.morphNormals!==Pe||Qt.morphColors!==yn||Qt.toneMapping!==Be||X.isWebGL2===!0&&Qt.morphTargetsCount!==Ee)&&(ye=!0):(ye=!0,Qt.__version=ct.version);let Ui=Qt.currentProgram;ye===!0&&(Ui=Jr(ct,J,nt));let Dc=!1,or=!1,ya=!1,Ke=Ui.getUniforms(),Oi=Qt.uniforms;if(Z.useProgram(Ui.program)&&(Dc=!0,or=!0,ya=!0),ct.id!==v&&(v=ct.id,or=!0),Dc||z!==A){Ke.setValue(R,"projectionMatrix",A.projectionMatrix),Ke.setValue(R,"viewMatrix",A.matrixWorldInverse);let An=Ke.map.cameraPosition;An!==void 0&&An.setValue(R,tt.setFromMatrixPosition(A.matrixWorld)),X.logarithmicDepthBuffer&&Ke.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ke.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,or=!0,ya=!0)}if(nt.isSkinnedMesh){Ke.setOptional(R,nt,"bindMatrix"),Ke.setOptional(R,nt,"bindMatrixInverse");let An=nt.skeleton;An&&(X.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ke.setValue(R,"boneTexture",An.boneTexture,_t)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&(Ke.setOptional(R,nt,"batchingTexture"),Ke.setValue(R,"batchingTexture",nt._matricesTexture,_t));let va=ot.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&X.isWebGL2===!0)&&St.update(nt,ot,Ui),(or||Qt.receiveShadow!==nt.receiveShadow)&&(Qt.receiveShadow=nt.receiveShadow,Ke.setValue(R,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Oi.envMap.value=$t,Oi.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),or&&(Ke.setValue(R,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights&&Gd(Oi,ya),Nt&&ct.fog===!0&&yt.refreshFogUniforms(Oi,Nt),yt.refreshMaterialUniforms(Oi,ct,q,G,vt),zs.upload(R,Ic(Qt),Oi,_t)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(zs.upload(R,Ic(Qt),Oi,_t),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ke.setValue(R,"center",nt.center),Ke.setValue(R,"modelViewMatrix",nt.modelViewMatrix),Ke.setValue(R,"normalMatrix",nt.normalMatrix),Ke.setValue(R,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let An=ct.uniformsGroups;for(let Ma=0,Wd=An.length;Ma<Wd;Ma++)if(X.isWebGL2){let Nc=An[Ma];Ht.update(Nc,Ui),Ht.bind(Nc,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Gd(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Vd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,J,ot){j.get(A.texture).__webglTexture=J,j.get(A.depthTexture).__webglTexture=ot;let ct=j.get(A);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,J){let ot=j.get(A);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,ot=0){C=A,I=J,P=ot;let ct=!0,nt=null,Nt=!1,Bt=!1;if(A){let $t=j.get(A);$t.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(R.FRAMEBUFFER,null),ct=!1):$t.__webglFramebuffer===void 0?_t.setupRenderTarget(A):$t.__hasExternalTextures&&_t.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);let se=A.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Bt=!0);let Kt=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[J])?nt=Kt[J][ot]:nt=Kt[J],Nt=!0):X.isWebGL2&&A.samples>0&&_t.useMultisampledRTT(A)===!1?nt=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?nt=Kt[ot]:nt=Kt,b.copy(A.viewport),S.copy(A.scissor),rt=A.scissorTest}else b.copy(B).multiplyScalar(q).floor(),S.copy(Y).multiplyScalar(q).floor(),rt=it;if(Z.bindFramebuffer(R.FRAMEBUFFER,nt)&&X.drawBuffers&&ct&&Z.drawBuffers(A,nt),Z.viewport(b),Z.scissor(S),Z.setScissorTest(rt),Nt){let $t=j.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+J,$t.__webglTexture,ot)}else if(Bt){let $t=j.get(A.texture),se=J||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,ot||0,se)}v=-1},this.readRenderTargetPixels=function(A,J,ot,ct,nt,Nt,Bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Yt=Yt[Bt]),Yt){Z.bindFramebuffer(R.FRAMEBUFFER,Yt);try{let $t=A.texture,se=$t.format,Kt=$t.type;if(se!==kn&&Gt.convert(se)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let jt=Kt===Mr&&(Q.has("EXT_color_buffer_half_float")||X.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Kt!==Mi&&Gt.convert(Kt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Kt===qn&&(X.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-ct&&ot>=0&&ot<=A.height-nt&&R.readPixels(J,ot,ct,nt,Gt.convert(se),Gt.convert(Kt),Nt)}finally{let $t=C!==null?j.get(C).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(A,J,ot=0){let ct=Math.pow(2,-ot),nt=Math.floor(J.image.width*ct),Nt=Math.floor(J.image.height*ct);_t.setTexture2D(J,0),R.copyTexSubImage2D(R.TEXTURE_2D,ot,0,0,A.x,A.y,nt,Nt),Z.unbindTexture()},this.copyTextureToTexture=function(A,J,ot,ct=0){let nt=J.image.width,Nt=J.image.height,Bt=Gt.convert(ot.format),Yt=Gt.convert(ot.type);_t.setTexture2D(ot,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ot.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ot.unpackAlignment),J.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ct,A.x,A.y,nt,Nt,Bt,Yt,J.image.data):J.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ct,A.x,A.y,J.mipmaps[0].width,J.mipmaps[0].height,Bt,J.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,ct,A.x,A.y,Bt,Yt,J.image),ct===0&&ot.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(A,J,ot,ct,nt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Nt=Math.round(A.max.x-A.min.x),Bt=Math.round(A.max.y-A.min.y),Yt=A.max.z-A.min.z+1,$t=Gt.convert(ct.format),se=Gt.convert(ct.type),Kt;if(ct.isData3DTexture)_t.setTexture3D(ct,0),Kt=R.TEXTURE_3D;else if(ct.isDataArrayTexture||ct.isCompressedArrayTexture)_t.setTexture2DArray(ct,0),Kt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ct.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ct.unpackAlignment);let jt=R.getParameter(R.UNPACK_ROW_LENGTH),Pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),yn=R.getParameter(R.UNPACK_SKIP_PIXELS),Be=R.getParameter(R.UNPACK_SKIP_ROWS),Kn=R.getParameter(R.UNPACK_SKIP_IMAGES),Ee=ot.isCompressedTexture?ot.mipmaps[nt]:ot.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,A.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,A.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,A.min.z),ot.isDataTexture||ot.isData3DTexture?R.texSubImage3D(Kt,nt,J.x,J.y,J.z,Nt,Bt,Yt,$t,se,Ee.data):ct.isCompressedArrayTexture?R.compressedTexSubImage3D(Kt,nt,J.x,J.y,J.z,Nt,Bt,Yt,$t,Ee.data):R.texSubImage3D(Kt,nt,J.x,J.y,J.z,Nt,Bt,Yt,$t,se,Ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,jt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,yn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Kn),nt===0&&ct.generateMipmaps&&R.generateMipmap(Kt),Z.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?_t.setTextureCube(A,0):A.isData3DTexture?_t.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_t.setTexture2DArray(A,0):_t.setTexture2D(A,0),Z.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,Z.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===ea?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Tl=class extends Sr{};Tl.prototype.isWebGL1Renderer=!0;var Ws=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Al=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ps=new le,su=new le,yo=[],ru=new Hn,Q1=new le,dr=new wt,fr=new Ji,Xs=class extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),ru.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),fr.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),su.multiplyMatrices(n,Ps),dr.matrixWorld=su,dr.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){let l=yo[o];l.instanceId=r,l.object=this,e.push(l)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(s*this.count),s,this.count,yu,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class extends fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new le;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rl=class extends Ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var vo=new L,Qa=new tc,tl=new tc,el=new tc,Ys=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),tl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),el.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),el.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qa.calc(l),tl.calc(l),el.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function tx(i,t){let e=1-i;return e*e*t}function ex(i,t){return 2*(1-i)*i*t}function nx(i,t){return i*i*t}function _r(i,t,e,n){return tx(i,t)+ex(i,e)+nx(i,n)}function ix(i,t){let e=1-i;return e*e*e*t}function sx(i,t){let e=1-i;return 3*e*e*i*t}function rx(i,t){return 3*(1-i)*i*i*t}function ox(i,t){return i*i*i*t}function yr(i,t,e,n,s){return ix(i,t)+sx(i,e)+rx(i,n)+ox(i,s)}var Xo=class extends Pn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cl=class extends Pn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends Pn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends Pn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Pn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends Pn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ou(a,l.x,c.x,h.x,u.x),ou(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Ys,CubicBezierCurve:Xo,CubicBezierCurve3:Cl,EllipseCurve:Ar,LineCurve:Yo,LineCurve3:Pl,QuadraticBezierCurve:qo,QuadraticBezierCurve3:Zo,SplineCurve:$o}),Il=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}},qs=class extends Il{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Yo(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new qo(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Xo(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ar(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qi=class i extends Ae{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new pt,f=new L,p=new L,x=new L,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let _=n+y*h*s,M=Math.sin(_),I=Math.cos(_);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*M,u.y=t[P].y,u.z=t[P].x*I,o.push(u.x,u.y,u.z),d.x=y/e,d.y=P/(t.length-1),a.push(d.x,d.y);let C=l[3*P+0]*M,v=l[3*P+1],z=l[3*P+0]*I;c.push(C,v,z)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let M=_+y*t.length,I=M,P=M+t.length,C=M+t.length+1,v=M+1;r.push(I,P,v),r.push(C,v,P)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var wi=class i extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){let M=new L,I=new L,P=0,C=(e-t)/n;for(let v=0;v<=r;v++){let z=[],b=v/r,S=b*(e-t)+t;for(let rt=0;rt<=s;rt++){let $=rt/s,D=$*l+a,H=Math.sin(D),G=Math.cos(D);I.x=S*H,I.y=-b*n+m,I.z=S*G,u.push(I.x,I.y,I.z),M.set(H,C,G).normalize(),d.push(M.x,M.y,M.z),f.push($,1-b),z.push(p++)}x.push(z)}for(let v=0;v<s;v++)for(let z=0;z<r;z++){let b=x[z][v],S=x[z+1][v],rt=x[z+1][v+1],$=x[z][v+1];h.push(b,S,$),h.push(S,rt,$),P+=6}c.addGroup(g,P,0),g+=P}function _(M){let I=p,P=new pt,C=new L,v=0,z=M===!0?t:e,b=M===!0?1:-1;for(let rt=1;rt<=s;rt++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),p++;let S=p;for(let rt=0;rt<=s;rt++){let D=rt/s*l+a,H=Math.cos(D),G=Math.sin(D);C.x=z*G,C.y=m*b,C.z=z*H,u.push(C.x,C.y,C.z),d.push(0,b,0),P.x=H*.5+.5,P.y=G*.5*b+.5,f.push(P.x,P.y),p++}for(let rt=0;rt<s;rt++){let $=I+rt,D=S+rt;M===!0?h.push(D,D+1,$):h.push(D+1,D,$),v+=3}c.addGroup(g,v,M===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ko=class i extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ll=class i extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new L,M=new L,I=new L;for(let P=0;P<e.length;P+=3)f(e[P+0],_),f(e[P+1],M),f(e[P+2],I),l(_,M,I,y)}function l(y,_,M,I){let P=I+1,C=[];for(let v=0;v<=P;v++){C[v]=[];let z=y.clone().lerp(M,v/P),b=_.clone().lerp(M,v/P),S=P-v;for(let rt=0;rt<=S;rt++)rt===0&&v===P?C[v][rt]=z:C[v][rt]=z.clone().lerp(b,rt/S)}for(let v=0;v<P;v++)for(let z=0;z<2*(P-v)-1;z++){let b=Math.floor(z/2);z%2===0?(d(C[v][b+1]),d(C[v+1][b]),d(C[v][b])):(d(C[v][b+1]),d(C[v+1][b+1]),d(C[v+1][b]))}}function c(y){let _=new L;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=m(y)/2/Math.PI+.5,I=g(y)/Math.PI+.5;o.push(M,1-I)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],M=o[y+2],I=o[y+4],P=Math.max(_,M,I),C=Math.min(_,M,I);P>.9&&C<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function p(){let y=new L,_=new L,M=new L,I=new L,P=new pt,C=new pt,v=new pt;for(let z=0,b=0;z<r.length;z+=9,b+=6){y.set(r[z+0],r[z+1],r[z+2]),_.set(r[z+3],r[z+4],r[z+5]),M.set(r[z+6],r[z+7],r[z+8]),P.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),v.set(o[b+4],o[b+5]),I.copy(y).add(_).add(M).divideScalar(3);let S=m(I);x(P,b+0,y,S),x(C,b+2,_,S),x(v,b+4,M,S)}}function x(y,_,M,I){I<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var qe=class extends qs{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qs().fromJSON(s))}return this}},ax={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ou(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=dx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Rr(r,o,e,a,l,f,0),o}};function Ou(i,t,e,n,s){let r,o;if(s===Ex(i,t,e,n)>0)for(r=t;r<e;r+=n)o=au(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=au(r,i[r],i[r+1],o);return o&&ia(o,o.next)&&(Pr(o),o=o.next),o}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ia(e,e.next)||we(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?cx(i,n,s,r):lx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Pr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hx(ts(i),t,e),Rr(i,t,e,n,s,r,2)):o===2&&ux(i,t,e,n,s,r):Rr(ts(i),t,e,n,s,r,1);break}}}function lx(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Us(s,a,r,l,o,c,p.x,p.y)&&we(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=Dl(f,p,t,e,n),y=Dl(x,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=g&&M&&M.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Us(a,h,l,u,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Us(a,h,l,u,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function hx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ia(s,r)&&Fu(s,n,n.next,r)&&Cr(s,r)&&Cr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Pr(n),Pr(n.next),n=i=r),n=n.next}while(n!==i);return ts(n)}function ux(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let l=zu(o,a);o=ts(o,o.next),l=ts(l,l.next),Rr(o,t,e,n,s,r,0),Rr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ou(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(yx(c));for(s.sort(fx),r=0;r<s.length;r++)e=px(s[r],e);return e}function fx(i,t){return i.x-t.x}function px(i,t){let e=mx(i,t);if(!e)return t;let n=zu(e,i);return ts(n,n.next),ts(e,e.next)}function mx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Us(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Cr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&gx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function gx(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function xx(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Us(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(Cr(i,t)&&Cr(t,i)&&bx(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ia(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ia(i,t){return i.x===t.x&&i.y===t.y}function Fu(i,t,e,n){let s=bo(we(i,t,e)),r=bo(we(i,t,n)),o=bo(we(e,n,i)),a=bo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Mo(i,e,t)||r===0&&Mo(i,n,t)||o===0&&Mo(e,i,n)||a===0&&Mo(e,t,n))}function Mo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zu(i,t){let e=new Nl(i.i,i.x,i.y),n=new Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(i,t,e,n){let s=new Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ex(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];lu(t),cu(n,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,cu(n,e[l]);let a=ax.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ln=class i extends Ae{constructor(t=new qe([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:wx,_,M=!1,I,P,C,v;g&&(_=g.getSpacedPoints(h),M=!0,d=!1,I=g.computeFrenetFrames(h,!1),P=new L,C=new L,v=new L),d||(m=0,f=0,p=0,x=0);let z=a.extractPoints(c),b=z.shape,S=z.holes;if(!vr.isClockWise(b)){b=b.reverse();for(let R=0,at=S.length;R<at;R++){let Q=S[R];vr.isClockWise(Q)&&(S[R]=Q.reverse())}}let $=vr.triangulateShape(b,S),D=b;for(let R=0,at=S.length;R<at;R++){let Q=S[R];b=b.concat(Q)}function H(R,at,Q){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(at,Q)}let G=b.length,q=$.length;function N(R,at,Q){let X,Z,F,j=R.x-at.x,_t=R.y-at.y,Ut=Q.x-R.x,T=Q.y-R.y,w=j*j+_t*_t,ht=j*T-_t*Ut;if(Math.abs(ht)>Number.EPSILON){let dt=Math.sqrt(w),Mt=Math.sqrt(Ut*Ut+T*T),yt=at.x-_t/dt,qt=at.y+j/dt,Vt=Q.x-T/Mt,Tt=Q.y+Ut/Mt,Ct=((Vt-yt)*T-(Tt-qt)*Ut)/(j*T-_t*Ut);X=yt+j*Ct-R.x,Z=qt+_t*Ct-R.y;let Zt=X*X+Z*Z;if(Zt<=2)return new pt(X,Z);F=Math.sqrt(Zt/2)}else{let dt=!1;j>Number.EPSILON?Ut>Number.EPSILON&&(dt=!0):j<-Number.EPSILON?Ut<-Number.EPSILON&&(dt=!0):Math.sign(_t)===Math.sign(T)&&(dt=!0),dt?(X=-_t,Z=j,F=Math.sqrt(w)):(X=j,Z=_t,F=Math.sqrt(w/2))}return new pt(X/F,Z/F)}let E=[];for(let R=0,at=D.length,Q=at-1,X=R+1;R<at;R++,Q++,X++)Q===at&&(Q=0),X===at&&(X=0),E[R]=N(D[R],D[Q],D[X]);let B=[],Y,it=E.concat();for(let R=0,at=S.length;R<at;R++){let Q=S[R];Y=[];for(let X=0,Z=Q.length,F=Z-1,j=X+1;X<Z;X++,F++,j++)F===Z&&(F=0),j===Z&&(j=0),Y[X]=N(Q[X],Q[F],Q[j]);B.push(Y),it=it.concat(Y)}for(let R=0;R<m;R++){let at=R/m,Q=f*Math.cos(at*Math.PI/2),X=p*Math.sin(at*Math.PI/2)+x;for(let Z=0,F=D.length;Z<F;Z++){let j=H(D[Z],E[Z],X);k(j.x,j.y,-Q)}for(let Z=0,F=S.length;Z<F;Z++){let j=S[Z];Y=B[Z];for(let _t=0,Ut=j.length;_t<Ut;_t++){let T=H(j[_t],Y[_t],X);k(T.x,T.y,-Q)}}}let gt=p+x;for(let R=0;R<G;R++){let at=d?H(b[R],it[R],gt):b[R];M?(C.copy(I.normals[0]).multiplyScalar(at.x),P.copy(I.binormals[0]).multiplyScalar(at.y),v.copy(_[0]).add(C).add(P),k(v.x,v.y,v.z)):k(at.x,at.y,0)}for(let R=1;R<=h;R++)for(let at=0;at<G;at++){let Q=d?H(b[at],it[at],gt):b[at];M?(C.copy(I.normals[R]).multiplyScalar(Q.x),P.copy(I.binormals[R]).multiplyScalar(Q.y),v.copy(_[R]).add(C).add(P),k(v.x,v.y,v.z)):k(Q.x,Q.y,u/h*R)}for(let R=m-1;R>=0;R--){let at=R/m,Q=f*Math.cos(at*Math.PI/2),X=p*Math.sin(at*Math.PI/2)+x;for(let Z=0,F=D.length;Z<F;Z++){let j=H(D[Z],E[Z],X);k(j.x,j.y,u+Q)}for(let Z=0,F=S.length;Z<F;Z++){let j=S[Z];Y=B[Z];for(let _t=0,Ut=j.length;_t<Ut;_t++){let T=H(j[_t],Y[_t],X);M?k(T.x,T.y+_[h-1].y,_[h-1].x+Q):k(T.x,T.y,u+Q)}}}W(),ut();function W(){let R=s.length/3;if(d){let at=0,Q=G*at;for(let X=0;X<q;X++){let Z=$[X];K(Z[2]+Q,Z[1]+Q,Z[0]+Q)}at=h+m*2,Q=G*at;for(let X=0;X<q;X++){let Z=$[X];K(Z[0]+Q,Z[1]+Q,Z[2]+Q)}}else{for(let at=0;at<q;at++){let Q=$[at];K(Q[2],Q[1],Q[0])}for(let at=0;at<q;at++){let Q=$[at];K(Q[0]+G*h,Q[1]+G*h,Q[2]+G*h)}}n.addGroup(R,s.length/3-R,0)}function ut(){let R=s.length/3,at=0;vt(D,at),at+=D.length;for(let Q=0,X=S.length;Q<X;Q++){let Z=S[Q];vt(Z,at),at+=Z.length}n.addGroup(R,s.length/3-R,1)}function vt(R,at){let Q=R.length;for(;--Q>=0;){let X=Q,Z=Q-1;Z<0&&(Z=R.length-1);for(let F=0,j=h+m*2;F<j;F++){let _t=G*F,Ut=G*(F+1),T=at+X+_t,w=at+Z+_t,ht=at+Z+Ut,dt=at+X+Ut;tt(T,w,ht,dt)}}}function k(R,at,Q){l.push(R),l.push(at),l.push(Q)}function K(R,at,Q){xt(R),xt(at),xt(Q);let X=s.length/3,Z=y.generateTopUV(n,s,X-3,X-2,X-1);st(Z[0]),st(Z[1]),st(Z[2])}function tt(R,at,Q,X){xt(R),xt(at),xt(X),xt(at),xt(Q),xt(X);let Z=s.length/3,F=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);st(F[0]),st(F[1]),st(F[3]),st(F[1]),st(F[2]),st(F[3])}function xt(R){s.push(l[R*3+0]),s.push(l[R*3+1]),s.push(l[R*3+2])}function st(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new i(n,t.options)}},wx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(d,1-p),new pt(x,1-g)]:[new pt(a,1-l),new pt(h,1-u),new pt(f,1-p),new pt(m,1-g)]}};function Sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var es=class i extends Ll{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Bn=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],_=g/n,M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){let P=I/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+M,1-_),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let _=h[g][y+1],M=h[g][y],I=h[g+1][y],P=h[g+1][y+1];(g!==0||o>0)&&f.push(_,M,P),(g!==n-1||l<Math.PI)&&f.push(M,I,P)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Si=class i extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,y=(s+1)*f+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ir=class i extends Ae{constructor(t=new Zo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new pt,h=new L,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),g()}function m(_){h=t.getPointAt(_/e,h);let M=o.normals[_],I=o.binormals[_];for(let P=0;P<=s;P++){let C=P/s*Math.PI*2,v=Math.sin(C),z=-Math.cos(C);l.x=z*M.x+v*I.x,l.y=z*M.y+v*I.y,l.z=z*M.z+v*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){let I=(s+1)*(_-1)+(M-1),P=(s+1)*_+(M-1),C=(s+1)*_+M,v=(s+1)*(_-1)+M;p.push(I,P,v),p.push(P,C,v)}}function y(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)c.x=_/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Wt=class extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},In=class extends Wt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Eo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=t,a=2*e-n;break;case ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,l=2*n-e;break;case ph:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+y*o[c+I]+_*o[l+I]+M*o[u+I];return r}},Ol=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Fl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Tx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=To;var ns=class extends Gn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=So;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Gn{};zl.prototype.ValueTypeName="color";var kl=class extends Gn{};kl.prototype.ValueTypeName="number";var Hl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lr=class extends Gn{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=To;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Gn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=So;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Gn{};Bl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Ax=new Gl,Vl=class{constructor(t){this.manager=t!==void 0?t:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Nr=class extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},nl=new le,hu=new L,uu=new L,jo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var du=new le,pr=new L,il=new L,Wl=class extends jo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(pr),il.copy(n.position),il.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(il),n.updateMatrixWorld(),s.makeTranslation(-pr.x,-pr.y,-pr.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}},Ur=class extends Dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xl=class extends jo{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ec="\\[\\]\\.:\\/",Rx=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",Cx="[^"+ec.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",nc),Ix=/(WCOD+)?/.source.replace("WCOD",Cx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Nx=new RegExp("^"+Px+Ix+Lx+Dx+"$"),Ux=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rx,"")}static parseTrackName(t){let e=Nx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ux.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Yl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S_=new Float32Array(1);var Or=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);var ku={type:"change"},ic={type:"start"},Hu={type:"end"},sa=new Er,Bu=new bn,Ox=Math.cos(70*Ai.DEG2RAD),ra=class extends Zn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Vt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Vt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ku),n.update(),r=s.NONE},this.update=function(){let O=new L,mt=new En().setFromUnitVectors(t.up,new L(0,1,0)),Ft=mt.clone().invert(),V=new L,Et=new En,et=new L,bt=2*Math.PI;return function(re=null){let ue=n.object.position;O.copy(ue).sub(n.target),O.applyQuaternion(mt),a.setFromVector3(O),n.autoRotate&&r===s.NONE&&rt(b(re)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let fe=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(fe)&&isFinite(Te)&&(fe<-Math.PI?fe+=bt:fe>Math.PI&&(fe-=bt),Te<-Math.PI?Te+=bt:Te>Math.PI&&(Te-=bt),fe<=Te?a.theta=Math.max(fe,Math.min(Te,a.theta)):a.theta=a.theta>(fe+Te)/2?Math.max(fe,a.theta):Math.min(Te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ae=!1;if(n.zoomToCursor&&P||n.object.isOrthographicCamera)a.radius=B(a.radius);else{let ge=a.radius;a.radius=B(a.radius*c),ae=ge!=a.radius}if(O.setFromSpherical(a),O.applyQuaternion(Ft),ue.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&P){let ge=null;if(n.object.isPerspectiveCamera){let Je=O.length();ge=B(Je*c);let Ni=Je-ge;n.object.position.addScaledVector(M,Ni),n.object.updateMatrixWorld(),ae=!!Ni}else if(n.object.isOrthographicCamera){let Je=new L(I.x,I.y,0);Je.unproject(n.object);let Ni=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ae=Ni!==n.object.zoom;let Zr=new L(I.x,I.y,0);Zr.unproject(n.object),n.object.position.sub(Zr).add(Je),n.object.updateMatrixWorld(),ge=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ge).add(n.object.position):(sa.origin.copy(n.object.position),sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sa.direction))<Ox?t.lookAt(n.target):(Bu.setFromNormalAndCoplanarPoint(n.object.up,n.target),sa.intersectPlane(Bu,n.target))))}else if(n.object.isOrthographicCamera){let ge=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ge!==n.object.zoom&&(n.object.updateProjectionMatrix(),ae=!0)}return c=1,P=!1,ae||V.distanceToSquared(n.object.position)>o||8*(1-Et.dot(n.object.quaternion))>o||et.distanceToSquared(n.target)>o?(n.dispatchEvent(ku),V.copy(n.object.position),Et.copy(n.object.quaternion),et.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Zt),n.domElement.removeEventListener("pointerdown",_t),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",dt),n.domElement.removeEventListener("pointermove",Ut),n.domElement.removeEventListener("pointerup",T),n.domElement.getRootNode().removeEventListener("keydown",yt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Vt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Or,l=new Or,c=1,h=new L,u=new pt,d=new pt,f=new pt,p=new pt,x=new pt,m=new pt,g=new pt,y=new pt,_=new pt,M=new L,I=new pt,P=!1,C=[],v={},z=!1;function b(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function S(O){let mt=Math.abs(O*.01);return Math.pow(.95,n.zoomSpeed*mt)}function rt(O){l.theta-=O}function $(O){l.phi-=O}let D=function(){let O=new L;return function(Ft,V){O.setFromMatrixColumn(V,0),O.multiplyScalar(-Ft),h.add(O)}}(),H=function(){let O=new L;return function(Ft,V){n.screenSpacePanning===!0?O.setFromMatrixColumn(V,1):(O.setFromMatrixColumn(V,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Ft),h.add(O)}}(),G=function(){let O=new L;return function(Ft,V){let Et=n.domElement;if(n.object.isPerspectiveCamera){let et=n.object.position;O.copy(et).sub(n.target);let bt=O.length();bt*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Ft*bt/Et.clientHeight,n.object.matrix),H(2*V*bt/Et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Ft*(n.object.right-n.object.left)/n.object.zoom/Et.clientWidth,n.object.matrix),H(V*(n.object.top-n.object.bottom)/n.object.zoom/Et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function E(O,mt){if(!n.zoomToCursor)return;P=!0;let Ft=n.domElement.getBoundingClientRect(),V=O-Ft.left,Et=mt-Ft.top,et=Ft.width,bt=Ft.height;I.x=V/et*2-1,I.y=-(Et/bt)*2+1,M.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function B(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function Y(O){u.set(O.clientX,O.clientY)}function it(O){E(O.clientX,O.clientX),g.set(O.clientX,O.clientY)}function gt(O){p.set(O.clientX,O.clientY)}function W(O){d.set(O.clientX,O.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let mt=n.domElement;rt(2*Math.PI*f.x/mt.clientHeight),$(2*Math.PI*f.y/mt.clientHeight),u.copy(d),n.update()}function ut(O){y.set(O.clientX,O.clientY),_.subVectors(y,g),_.y>0?q(S(_.y)):_.y<0&&N(S(_.y)),g.copy(y),n.update()}function vt(O){x.set(O.clientX,O.clientY),m.subVectors(x,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(x),n.update()}function k(O){E(O.clientX,O.clientY),O.deltaY<0?N(S(O.deltaY)):O.deltaY>0&&q(S(O.deltaY)),n.update()}function K(O){let mt=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),mt=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),mt=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?rt(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),mt=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?rt(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),mt=!0;break}mt&&(O.preventDefault(),n.update())}function tt(O){if(C.length===1)u.set(O.pageX,O.pageY);else{let mt=Ot(O),Ft=.5*(O.pageX+mt.x),V=.5*(O.pageY+mt.y);u.set(Ft,V)}}function xt(O){if(C.length===1)p.set(O.pageX,O.pageY);else{let mt=Ot(O),Ft=.5*(O.pageX+mt.x),V=.5*(O.pageY+mt.y);p.set(Ft,V)}}function st(O){let mt=Ot(O),Ft=O.pageX-mt.x,V=O.pageY-mt.y,Et=Math.sqrt(Ft*Ft+V*V);g.set(0,Et)}function R(O){n.enableZoom&&st(O),n.enablePan&&xt(O)}function at(O){n.enableZoom&&st(O),n.enableRotate&&tt(O)}function Q(O){if(C.length==1)d.set(O.pageX,O.pageY);else{let Ft=Ot(O),V=.5*(O.pageX+Ft.x),Et=.5*(O.pageY+Ft.y);d.set(V,Et)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let mt=n.domElement;rt(2*Math.PI*f.x/mt.clientHeight),$(2*Math.PI*f.y/mt.clientHeight),u.copy(d)}function X(O){if(C.length===1)x.set(O.pageX,O.pageY);else{let mt=Ot(O),Ft=.5*(O.pageX+mt.x),V=.5*(O.pageY+mt.y);x.set(Ft,V)}m.subVectors(x,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(x)}function Z(O){let mt=Ot(O),Ft=O.pageX-mt.x,V=O.pageY-mt.y,Et=Math.sqrt(Ft*Ft+V*V);y.set(0,Et),_.set(0,Math.pow(y.y/g.y,n.zoomSpeed)),q(_.y),g.copy(y);let et=(O.pageX+mt.x)*.5,bt=(O.pageY+mt.y)*.5;E(et,bt)}function F(O){n.enableZoom&&Z(O),n.enablePan&&X(O)}function j(O){n.enableZoom&&Z(O),n.enableRotate&&Q(O)}function _t(O){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",Ut),n.domElement.addEventListener("pointerup",T)),!ie(O)&&(St(O),O.pointerType==="touch"?Tt(O):w(O)))}function Ut(O){n.enabled!==!1&&(O.pointerType==="touch"?Ct(O):ht(O))}function T(O){switch(Se(O),C.length){case 0:n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",Ut),n.domElement.removeEventListener("pointerup",T),n.dispatchEvent(Hu),r=s.NONE;break;case 1:let mt=C[0],Ft=v[mt];Tt({pointerId:mt,pageX:Ft.x,pageY:Ft.y});break}}function w(O){let mt;switch(O.button){case 0:mt=n.mouseButtons.LEFT;break;case 1:mt=n.mouseButtons.MIDDLE;break;case 2:mt=n.mouseButtons.RIGHT;break;default:mt=-1}switch(mt){case ss.DOLLY:if(n.enableZoom===!1)return;it(O),r=s.DOLLY;break;case ss.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;gt(O),r=s.PAN}else{if(n.enableRotate===!1)return;Y(O),r=s.ROTATE}break;case ss.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;Y(O),r=s.ROTATE}else{if(n.enablePan===!1)return;gt(O),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ic)}function ht(O){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(O);break;case s.DOLLY:if(n.enableZoom===!1)return;ut(O);break;case s.PAN:if(n.enablePan===!1)return;vt(O);break}}function dt(O){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(O.preventDefault(),n.dispatchEvent(ic),k(Mt(O)),n.dispatchEvent(Hu))}function Mt(O){let mt=O.deltaMode,Ft={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(mt){case 1:Ft.deltaY*=16;break;case 2:Ft.deltaY*=100;break}return O.ctrlKey&&!z&&(Ft.deltaY*=10),Ft}function yt(O){O.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",qt,{passive:!0,capture:!0}))}function qt(O){O.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",qt,{passive:!0,capture:!0}))}function Vt(O){n.enabled===!1||n.enablePan===!1||K(O)}function Tt(O){switch(Gt(O),C.length){case 1:switch(n.touches.ONE){case rs.ROTATE:if(n.enableRotate===!1)return;tt(O),r=s.TOUCH_ROTATE;break;case rs.PAN:if(n.enablePan===!1)return;xt(O),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case rs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(O),r=s.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(O),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ic)}function Ct(O){switch(Gt(O),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;X(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(O),n.update();break;default:r=s.NONE}}function Zt(O){n.enabled!==!1&&O.preventDefault()}function St(O){C.push(O.pointerId)}function Se(O){delete v[O.pointerId];for(let mt=0;mt<C.length;mt++)if(C[mt]==O.pointerId){C.splice(mt,1);return}}function ie(O){for(let mt=0;mt<C.length;mt++)if(C[mt]==O.pointerId)return!0;return!1}function Gt(O){let mt=v[O.pointerId];mt===void 0&&(mt=new pt,v[O.pointerId]=mt),mt.set(O.pageX,O.pageY)}function Ot(O){let mt=O.pointerId===C[0]?C[1]:C[0];return v[mt]}n.domElement.addEventListener("contextmenu",Zt),n.domElement.addEventListener("pointerdown",_t),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",dt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",yt,{passive:!0,capture:!0}),this.update()}};function Vu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Gu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Gu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Gu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ve(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Wu(i){i.updateMatrixWorld(!0);let t=new Map,e=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){e.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new ne(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&zx(o);let l=o.attributes.position.count,c=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:l,materialIndex:0}];for(let h of c){let u=r[h.materialIndex||0];if(!u||!u.visible)continue;let d=Math.min(h.count,l-h.start);if(d<=0)continue;let f=c.length===1?o:Fx(o,h.start,d),p=!!u.vertexColors&&!!f.attributes.color;!p&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${u.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${p?1:0}`;t.has(x)||t.set(x,{material:u,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),t.get(x).geometries.push(f)}c.length>1&&o.dispose()});let n=new zt;for(let s of t.values()){let r=Vu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new wt(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of e)n.attach(s);return n}function Fx(i,t,e){let n=new Ae;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Ve(r.array.slice(t*o,(t+e)*o),o,r.normalized))}return n}function zx(i){for(let t of Object.values(i.attributes)){let e=t.itemSize,n=t.array;for(let s=0;s+2<t.count;s+=3)for(let r=0;r<e;r++){let o=(s+1)*e+r,a=(s+2)*e+r,l=n[o];n[o]=n[a],n[a]=l}t.needsUpdate=!0}}function sc(i){i.traverse(t=>{t.isMesh&&t.geometry&&t.geometry.dispose()})}var Js={cellMeters:1.25,levelMeters:2.5,grid:[56,33],modules:{1:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u0448\u043B\u044E\u0437",2:"\u0410\u043D\u0433\u0430\u0440",3:"\u041A\u0430\u044E\u0442\u044B \u0438 \u0441\u0442\u043E\u043B\u043E\u0432\u0430\u044F",4:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438",6:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0438\u0435",7:"\u0416\u0438\u043B\u043E\u0439 \u0431\u043B\u043E\u043A \u0443\u0447\u0451\u043D\u044B\u0445 \u0438 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432",8:"\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B"},rooms:[{module:2,name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:1,width:20,height:20,levels:4,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C: \u043F\u043E\u0434 \u043A\u043E\u0440\u0430\u0431\u043B\u0438 \u0434\u043E 22 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6 \u2014 10\xD712 \u043A\u043B\u0435\u0442\u043E\u043A \u0441 \u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0439 \u0440\u0430\u043C\u043F\u043E\u0439; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,name:"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:1,width:4,height:20,levels:4,note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:6,name:"\u0426\u0435\u0445",x:24,y:15,width:8,height:6,levels:2,note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u043E\u0440\u043E\u0442\u0430 3 \u043A\u043B\u0435\u0442\u043A\u0438 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:6,name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:24,y:11,width:4,height:4,levels:1,note:"\u0434\u0432\u0435\u0440\u044C \u0432 \u0446\u0435\u0445"},{module:8,name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F",x:28,y:11,width:5,height:4,levels:1,note:"\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B; \u0434\u0432\u0435\u0440\u044C \u0432 \u0446\u0435\u0445"},{module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F 1",x:33,y:16,width:6,height:5,levels:1,note:""},{module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F 2",x:39,y:16,width:6,height:5,levels:1,note:""},{module:5,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:33,y:12,width:4,height:4,levels:1,note:"\u0432\u0445\u043E\u0434 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044E 1"},{module:1,name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:52,y:9,width:4,height:4,levels:1,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,name:"\u0428\u043B\u044E\u0437",x:52,y:13,width:4,height:2,levels:1,note:"\u0434\u0432\u0435 \u0433\u0435\u0440\u043C\u043E\u0434\u0432\u0435\u0440\u0438"},{module:1,name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:52,y:15,width:4,height:4,levels:1,note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430"},{module:1,name:"\u041A\u041F\u041F",x:52,y:19,width:2,height:2,levels:1,note:"\u043F\u043E\u0441\u0442 \u043E\u0445\u0440\u0430\u043D\u044B \u0443 \u0432\u044B\u0445\u043E\u0434\u0430 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:1,name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:48,y:15,width:4,height:6,levels:1,note:"\u0434\u0432\u0435\u0440\u0438 \u0432 \u043F\u0440\u0438\u0451\u043C\u043A\u0443 \u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:8,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:48,y:11,width:4,height:4,levels:1,note:"\u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F \u043E\u0442 \u0448\u0430\u0445\u0442\u044B \u043B\u0438\u0444\u0442\u0430, \u0432\u043E\u0434\u0430, \u0444\u0438\u043B\u044C\u0442\u0440\u044B; \u0434\u0432\u0435\u0440\u044C \u0432 \u0441\u043A\u043B\u0430\u0434"},{module:4,name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:8,y:24,width:4,height:4,levels:1,note:"\u0440\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:12,y:24,width:5,height:4,levels:1,note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u043D\u0430 14 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:17,y:24,width:3,height:4,levels:1,note:"\u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C, \u0432\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0443\u044E"},{module:8,name:"\u041C\u0435\u0434\u043F\u0443\u043D\u043A\u0442",x:20,y:24,width:4,height:4,levels:1,note:""},{module:8,name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442",x:25,y:24,width:5,height:4,levels:1,note:"\u0441\u0432\u044F\u0437\u044C, \u0440\u0430\u0434\u0430\u0440, \u0433\u043B\u043E\u0431\u0443\u0441"},{module:3,name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F",x:30,y:24,width:6,height:4,levels:1,note:"16 \u043C\u0435\u0441\u0442, 2 \u0441\u043C\u0435\u043D\u044B"},{module:3,name:"\u041A\u0443\u0445\u043D\u044F",x:36,y:24,width:3,height:4,levels:1,note:"\u0441 \u043F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434\u043E\u043C"},{module:8,name:"\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u043E\u0442\u0434\u044B\u0445\u0430",x:39,y:24,width:5,height:4,levels:1,note:"\u043E\u0431\u0449\u0430\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 1",x:8,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 2",x:11,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 3",x:14,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 4",x:17,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 5",x:20,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 6",x:23,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 7",x:26,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A",x:29,y:29,width:4,height:3,levels:1,note:"\u0434\u0443\u0448, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04231",x:33,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04232",x:36,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04233",x:39,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04234",x:42,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04235",x:45,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04236",x:48,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04237",x:51,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04238",x:45,y:25,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A",x:48,y:25,width:4,height:3,levels:1,note:"\u0434\u0443\u0448, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"}],corridors:[{name:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0433\u0430\u043B\u0435\u0440\u0435\u044F",x:0,y:21,width:56,height:3,note:"\u0448\u0438\u0440\u0438\u043D\u0430 3 \u043A\u043B\u0435\u0442\u043A\u0438 (3,75 \u043C): K7 \u0432 \u043C\u043E\u0434\u0435\u043B\u0438 3,1 \u043C \u0448\u0438\u0440\u0438\u043D\u043E\u0439; \u0430\u043D\u0433\u0430\u0440, \u0446\u0435\u0445, \u0441\u043A\u043B\u0430\u0434 \u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0430 \u0432\u044B\u0445\u043E\u0434\u044F\u0442 \u0432 \u043D\u0435\u0451"},{name:"\u0412\u044B\u0445\u043E\u0434 \u043F\u0440\u0438\u0451\u043C\u043A\u0438",x:54,y:19,width:2,height:2,note:"\u043A \u0433\u0430\u043B\u0435\u0440\u0435\u0435"},{name:"\u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440",x:8,y:28,width:46,height:1,note:"\u0432\u0434\u043E\u043B\u044C \u0432\u0441\u0435\u0445 \u043A\u0430\u044E\u0442"},{name:"\u041F\u0440\u043E\u0445\u043E\u0434 \u043A \u0436\u0438\u043B\u043E\u043C\u0443 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0443",x:24,y:24,width:1,height:4,note:""},{name:"\u041F\u0440\u043E\u0445\u043E\u0434 \u043A \u043A\u0430\u044E\u0442\u0430\u043C \u0443\u0447\u0451\u043D\u044B\u0445",x:44,y:24,width:1,height:4,note:""}],doors:[{x:20,y:20,side:"S",size:4,kind:"gate"},{x:26,y:20,side:"S",size:3,kind:"gate"},{x:25,y:15,side:"N",size:1,kind:"door"},{x:29,y:15,side:"N",size:1,kind:"door"},{x:35,y:20,side:"S",size:1,kind:"door"},{x:41,y:20,side:"S",size:1,kind:"door"},{x:38,y:18,side:"E",size:1,kind:"door"},{x:34,y:16,side:"N",size:1,kind:"hatch"},{x:53,y:12,side:"S",size:2,kind:"hatch"},{x:53,y:14,side:"S",size:2,kind:"hatch"},{x:52,y:16,side:"W",size:2,kind:"door"},{x:54,y:18,side:"S",size:2,kind:"gate"},{x:53,y:19,side:"E",size:1,kind:"door"},{x:49,y:20,side:"S",size:2,kind:"gate"},{x:49,y:15,side:"N",size:1,kind:"door"},{x:10,y:24,side:"N",size:1,kind:"door"},{x:11,y:25,side:"E",size:1,kind:"door"},{x:14,y:24,side:"N",size:1,kind:"door"},{x:17,y:26,side:"W",size:1,kind:"hatch"},{x:21,y:24,side:"N",size:1,kind:"door"},{x:27,y:24,side:"N",size:1,kind:"door"},{x:32,y:24,side:"N",size:2,kind:"door"},{x:33,y:27,side:"S",size:1,kind:"door"},{x:36,y:25,side:"W",size:1,kind:"door"},{x:41,y:24,side:"N",size:1,kind:"door"},{x:41,y:27,side:"S",size:1,kind:"door"},{x:46,y:27,side:"S",size:1,kind:"door"},{x:49,y:27,side:"S",size:1,kind:"door"},{x:9,y:29,side:"N",size:1,kind:"door"},{x:12,y:29,side:"N",size:1,kind:"door"},{x:15,y:29,side:"N",size:1,kind:"door"},{x:18,y:29,side:"N",size:1,kind:"door"},{x:21,y:29,side:"N",size:1,kind:"door"},{x:24,y:29,side:"N",size:1,kind:"door"},{x:27,y:29,side:"N",size:1,kind:"door"},{x:34,y:29,side:"N",size:1,kind:"door"},{x:37,y:29,side:"N",size:1,kind:"door"},{x:40,y:29,side:"N",size:1,kind:"door"},{x:43,y:29,side:"N",size:1,kind:"door"},{x:46,y:29,side:"N",size:1,kind:"door"},{x:49,y:29,side:"N",size:1,kind:"door"},{x:52,y:29,side:"N",size:1,kind:"door"},{x:30,y:29,side:"N",size:1,kind:"door"}],cells:{2:480,6:64,8:92,5:76,1:68,4:48,3:111,7:84,0:226},total:1249};var We={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function Xu(i){let{TILES:t,LEVEL_H:e,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:l,building:c,stairRun:h,tiltrotor:u,block:d,surface:f,marking:p,floorStyle:x}=i,m=(E,B,Y,it,gt)=>{for(let W=Math.max(0,B);W<=Math.min(t-1,it);W++)for(let ut=Math.max(0,E);ut<=Math.min(t-1,Y);ut++)f[W][ut]=gt},g=(E,B,Y,it)=>{for(let gt=0;gt<t;gt++)for(let W=0;W<t;W++)Math.hypot(W+.5-E,gt+.5-B)<=Y&&(f[gt][W]=it)},y=(E,B)=>E===0?"g":E===B-1?"t":"u",_=(E,B,Y)=>`${E}_${y(B,Y)}`;m(0,0,t-1,t-1,We.grass),m(0,27,t-1,30,We.sidewalk),m(0,31,t-1,48,We.asphalt),m(0,49,t-1,52,We.sidewalk);for(let E=0;E<t;E++)E%4<2&&(E<44||E>48)&&(p[40][E]="dash");for(let E=31;E<=48;E++)for(let B=44;B<=48;B++)p[E][B]="zebra";function M(E,B,Y,it,gt,W,ut,vt,k={}){let K=c({name:E,col0:B,row0:Y,col1:it,row1:gt,levels:W,style:ut});for(let X=0;X<W;X++){r(X,B,Y,it,gt),X>0&&s(X,B,Y,it,gt,n.interior);for(let F=Y;F<=gt;F++)for(let j=B;j<=it;j++)x[X][F][j]=k.floor||"parquet";let Z=_(ut,X,W);for(let F=Y;F<=gt;F++)o(X,B,F,"wall",Z),o(X,it+1,F,"wall",Z);for(let F=B;F<=it;F++)a(X,F,Y,"wall",Z),a(X,F,gt+1,"wall",Z);for(let F=B+1;F<it;F++)(F-B)%2===1&&(a(X,F,Y,"window",Z),a(X,F,gt+1,"window",Z));for(let F=Y+1;F<gt;F++)(F-Y)%2===1&&(o(X,B,F,"window",Z),o(X,it+1,F,"window",Z))}l("roof",W,B,Y,it-B+1,gt-Y+1,{blocks:!1,type:k.roof||"tile",facade:ut});let tt=Math.floor((B+it)/2),xt=vt==="S"?gt+1:Y,st=vt==="S"?Y:gt+1,R=_(ut,0,W);a(0,tt+1,xt,"door",R),k.backDoor!==!1&&a(0,tt+1,st,"door",R);let at=vt==="S"?Y+1:gt-5;I(tt-1,at,W-1,ut);let Q=Math.floor((Y+gt)/2)+1;for(let X=0;X<W;X++){for(let F=Y;F<=gt;F++)o(X,tt-1,F,"wall","inner"),o(X,tt+2,F,"wall","inner");for(let F=B;F<tt-1;F++)a(X,F,Q,"wall","inner");for(let F=tt+2;F<=it;F++)a(X,F,Q,"wall","inner");[{col0:B,col1:tt-2,row0:Y,row1:Q-1,side:"W"},{col0:B,col1:tt-2,row0:Q,row1:gt,side:"W"},{col0:tt+2,col1:it,row0:Y,row1:Q-1,side:"E"},{col0:tt+2,col1:it,row0:Q,row1:gt,side:"E"}].forEach((F,j)=>{let _t=[];for(let T=F.row0+1;T<F.row1;T++)(T<at||T>at+4)&&_t.push(T);let Ut=_t.length?_t[Math.floor(_t.length/2)]:F.row0;F.side==="W"?o(X,tt-1,Ut,"door","inner"):o(X,tt+2,Ut,"door","inner"),k.furnish!==!1&&C(X,F,F.side==="W"?[F.col1,Ut]:[F.col0,Ut],(j+X+B)%4)})}return{...K,midCol:tt,stairRow:at,front:xt,back:st}}function I(E,B,Y,it){let gt=[];for(let W=0;W<Y;W++)W%2===0?(h(W,E,B+3,0,-1,3,"classic"),gt.push({level:W,col:E,cells:[B+3,B+2,B+1],exit:[E,B]})):(h(W,E+1,B+1,0,1,3,"classic"),gt.push({level:W,col:E+1,cells:[B+1,B+2,B+3],exit:[E+1,B+4]}));for(let W of gt){let ut=W.level+1,vt=(k,K)=>k===W.col&&W.cells.includes(K);for(let k of W.cells){let K=[[W.col-1,k,"W",W.col,k],[W.col+1,k,"W",W.col+1,k],[W.col,k-1,"N",W.col,k],[W.col,k+1,"N",W.col,k+1]];for(let[tt,xt,st,R,at]of K)vt(tt,xt)||tt===W.exit[0]&&xt===W.exit[1]||(st==="W"?o(ut,R,at,"rail","iron"):a(ut,R,at,"rail","iron"))}}}let P=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function C(E,B,Y,it){let gt=B.col1-B.col0+1,W=B.row1-B.row0+1;if(gt<3||W<3)return;[[B.col0,B.row0],[B.col1-1,B.row0],[B.col0,B.row1],[B.col1-1,B.row1]].forEach((vt,k)=>{let[K,tt,xt]=P[(it+k)%P.length],st=tt===2?vt[0]:k%2?B.col1:B.col0,R=vt[1];for(let at=0;at<tt;at++)if(Math.abs(st+at-Y[0])<=1&&Math.abs(R-Y[1])<=1)return;l(K,E,st,R,tt,xt,{rotation:R===B.row0?0:2})})}let v={col0:2,row0:7,col1:15,row1:21};m(v.col0,v.row0,v.col1,v.row1,We.sand);for(let E=v.row0;E<=v.row1;E++)o(0,v.col0,E,"rail","fence"),o(0,v.col1+1,E,"rail","fence");for(let E=v.col0;E<=v.col1;E++)a(0,E,v.row0,"rail","fence"),(E<8||E>9)&&a(0,E,v.row1+1,"rail","fence");o(0,v.col1+1,14,null),m(8,22,9,26,We.path),l("playhouse",0,3,8,2,2),l("slide",0,7,8,1,3),l("swing",0,11,8,3,1),l("sandbox",0,4,15,3,3,{blocks:!1}),l("carousel",0,11,13,2,2),l("bench",0,2,12,1,1,{rotation:3}),l("bench",0,2,18,1,1,{rotation:3}),l("bench",0,15,19,1,1,{rotation:1}),l("bin",0,15,20);for(let[E,B]of[[13,19],[7,20]])l("tree",0,E,B,1,1,{type:"linden"});for(let E of[4,9,14,20,26,32,61,67,73,80,86,92])l("tree",0,E,1,1,1,{type:E%3?"linden":"chestnut"});M("houseA",19,7,31,21,3,"ochre","S"),m(25,22,27,26,We.path);let z={col0:36,row0:4,col1:58,row1:22};c({name:"bank",...z,levels:2,style:"bank"});for(let E=0;E<2;E++){r(E,z.col0,z.row0,z.col1,z.row1),E>0&&s(E,z.col0,z.row0,z.col1,z.row1,n.interior);for(let Y=z.row0;Y<=z.row1;Y++)for(let it=z.col0;it<=z.col1;it++)x[E][Y][it]="marble";let B=_("bank",E,2);for(let Y=z.row0;Y<=z.row1;Y++)o(E,z.col0,Y,"wall",B),o(E,z.col1+1,Y,"wall",B);for(let Y=z.col0;Y<=z.col1;Y++)a(E,Y,z.row0,"wall",B),a(E,Y,z.row1+1,"wall",B);for(let Y=z.col0+1;Y<z.col1;Y++)(Y-z.col0)%2===1&&a(E,Y,z.row1+1,"window",B);for(let Y of[37,39,53,55,57])a(E,Y,z.row0,"window",B);for(let Y=z.row0+1;Y<z.row1;Y++)(Y-z.row0)%2===1&&(o(E,z.col0,Y,"window",B),o(E,z.col1+1,Y,"window",B))}l("roof",2,z.col0,z.row0,z.col1-z.col0+1,z.row1-z.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let E of[46,47,48])a(0,E,z.row1+1,"door","bank_g");a(1,47,z.row1+1,"window","bank_t"),l("balcony",1,45,23,5,1,{blocks:!1});for(let E of[45,49])l("column",0,E,23,1,1);o(0,z.col1+1,7,"door","bank_g"),m(34,23,60,26,We.paving);for(let E=z.col0;E<=z.col1;E++)a(0,E,13,"wall","inner");for(let E of[39,55])a(0,E,13,"door","inner");let b={col0:43,row0:4,col1:51,row1:9};for(let E=b.row0;E<=b.row1;E++)o(0,b.col0,E,"wall","vault"),o(0,b.col1+1,E,"wall","vault");for(let E=b.col0;E<=b.col1;E++)a(0,E,b.row1+1,"wall","vault");a(0,47,b.row1+1,"door","vault");for(let E=b.row0;E<=b.row1;E++)for(let B=b.col0;B<=b.col1;B++)x[0][E][B]="steel";for(let E=z.row0;E<=10;E++)o(0,40,E,"wall","inner"),o(0,55,E,"wall","inner");for(let E=z.col0;E<40;E++)a(0,E,11,"wall","inner");for(let E=55;E<=z.col1;E++)a(0,E,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let E of[37,38,41,42,43,44,50,51,52,53,56,57])l("counter",0,E,15,1,1);l("sofa",0,38,20,2,1),l("sofa",0,55,20,2,1),l("table",0,41,19,2,1),l("table",0,52,19,2,1);for(let[E,B]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])l("plant",0,E,B);for(let E=b.col0;E<=b.col1;E++)l("deposits",0,E,b.row0);for(let E of[5,6,7])l("deposits",0,b.col0,E,1,1,{rotation:3}),l("deposits",0,b.col1,E,1,1,{rotation:1});l("table",0,46,7,2,1),l("desk",0,36,4,2,1),l("console",0,39,4),l("locker",0,36,9),l("locker",0,37,9),l("desk",0,56,5,2,1),l("cabinet",0,58,4),l("cabinet",0,58,9),l("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let E=z.row0;E<=z.row1;E++)o(1,41,E,"wall","inner"),o(1,53,E,"wall","inner");for(let E=41;E<=52;E++)a(1,E,10,"wall","inner"),a(1,E,13,"wall","inner");for(let E of[7,17])for(let[B,Y]of[[z.col0,40],[53,z.col1]])for(let it=B;it<=Y;it++)a(1,it,E,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),l("table",1,45,16,4,2),l("bookcase",1,42,21),l("bookcase",1,52,21),l("desk",1,37,4,2,1),l("bookcase",1,36,6),l("sofa",1,37,9,2,1),l("desk",1,56,4,2,1),l("cabinet",1,58,6),l("desk",1,37,12,2,1),l("cabinet",1,36,16),l("desk",1,56,12,2,1),l("cabinet",1,58,16),l("desk",1,37,19,2,1),l("desk",1,56,19,2,1),l("table",1,45,5,3,2),l("bookcase",1,42,4),l("bookcase",1,52,4),m(61,4,73,26,We.asphalt),m(64,27,70,30,We.asphalt);for(let E=62;E<=72;E+=2)l("paint",0,E,5,1,4,{blocks:!1,line:"W"}),l("paint",0,E,17,1,4,{blocks:!1,line:"W"});let S=(E,B,Y,it,gt)=>l("car",0,Y,it,2,4,{type:E,color:B,flip:!!gt});S("suv","police",62,5),S("suv","police",64,5),S("van","white",68,5),S("suv","graphite",62,17,!0),S("suv","red",70,17,!0),l("lamp",0,61,12),l("lamp",0,73,12);let rt=M("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),m(83,22,85,26,We.path);for(let E of[80,81,86,87])l("counter",0,E,19,1,1);l("locker",0,76,6),l("locker",0,77,6),l("locker",0,78,6),l("desk",0,76,10,2,1),l("rack",0,91,6),l("rack",0,91,7),l("rack",0,90,6),l("crate",0,91,10),l("bunk",0,76,17,2,1),l("bunk",0,90,17,2,1),l("desk",0,89,21,2,1),l("cabinet",0,75,21),l("desk",1,76,7,2,1),l("desk",1,89,7,2,1),l("cabinet",1,75,10),l("cabinet",1,91,10),l("desk",1,76,18,2,1),l("desk",1,89,18,2,1),l("bookcase",1,75,21),l("bookcase",1,91,21);for(let E=3;E<t;E+=10)(E<63||E>71)&&l("streetLamp",0,E,30),E+5<t&&(E+5<43||E+5>49)&&l("streetLamp",0,E+5,49);for(let E of[17,58,88])l("bin",0,E,28);l("busStop",0,30,50,3,1),l("bench",0,31,51,1,1,{rotation:0}),l("bin",0,34,51);let $=(E,B,Y,it,gt)=>l("car",0,Y,it,4,2,{type:E,color:B,flip:!!gt});$("suv","white",20,33),$("van","sand",36,42,!0),$("suv","blue",58,36),$("suv","olive",74,45,!0),$("suv","graphite",81,33),$("van","white",6,45,!0),M("houseB",3,55,16,69,3,"cream","N"),M("houseC",22,56,34,70,2,"green","N"),M("houseD",51,55,63,70,3,"pink","N"),M("houseE",72,56,86,70,3,"ochre","N");for(let[E,B,Y]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])m(E,53,B,Y,We.path);for(let E=1;E<=32;E++)[10,11,29,30].includes(E)||l("hedge",0,E,73);for(let E=59;E<=91;E++)[80,81].includes(E)||l("hedge",0,E,73);m(0,76,36,77,We.path),m(56,76,91,77,We.path);for(let[E,B]of[[10,11],[29,30],[57,58],[80,81]])m(E,71,B,75,We.path);for(let E=3;E<=33;E+=5)l("tree",0,E,83,1,1,{type:E%2?"chestnut":"linden"});for(let E of[5,20,35])l("bench",0,E,78,1,1,{rotation:2});for(let E of[60,66])l("tree",0,19,E,1,1,{type:"linden"}),l("tree",0,68,E,1,1,{type:"chestnut"}),l("tree",0,90,E,1,1,{type:"linden"});let D={col:46.5,row:82.5};g(D.col,D.row,12,We.paving),m(44,53,48,71,We.paving),l("fountain",0,42,78,9,9,{blocks:!1});for(let E=78;E<=86;E++)for(let B=42;B<=50;B++)Math.hypot(B+.5-D.col,E+.5-D.row)<4.4&&d(0,B,E);for(let E=0;E<8;E++){let B=E/8*Math.PI*2+Math.PI/8,Y=Math.floor(D.col+Math.cos(B)*8.6),it=Math.floor(D.row+Math.sin(B)*8.6),gt=[[0,-1],[1,0],[0,1],[-1,0]].map(([W,ut])=>W*Math.cos(B)+ut*Math.sin(B));l(E%2?"streetLamp":"bench",0,Y,it,1,1,{rotation:gt.indexOf(Math.max(...gt))})}m(60,81,82,95,We.paving);let H=68,G=87,q=u(H,G);for(let[E,B]of[[60,81],[82,81],[60,95],[82,95]])l("lamp",0,E,B);l("crate",0,80,84),l("crate",0,81,84),l("barrels",0,62,93);let N=(E,B,Y,it)=>[E,B,Y,it];return{spawns:{squad:[N(H+1,G,0,1),N(H+2,G,0,1),N(H+3,G,0,1),N(H+1,G+3,0,5),N(H+2,G+3,0,5),N(H+3,G+3,0,5)],mech:[N(H,G+1,0,7)],aliens:[N(44,17,0,0),N(51,19,0,0),N(47,11,0,1),N(40,8,1,3),N(6,13,0,7),N(12,17,0,5),N(28,37,0,3),N(62,44,0,5),N(84,36,0,1),N(83,16,0,3),N(88,9,1,5),N(68,13,0,1)]},extraction:q,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var Yu=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),ke=typeof globalThis<"u"&&globalThis.ALIENS_MAP||Yu.get("map")||"outpost",js=24,U=1.25,as=4,ce=2.5,be=ke==="big"?js*2:ke==="base"?58:ke==="city"?96:js,Fr=1,zr=12;var Re={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function Ks(i){return Array.from({length:as},()=>Array.from({length:be+1},()=>new Array(be+1).fill(i)))}function qu(){let i=Ks(0),t=Ks(0),e=Ks(null),n=Ks(null),s=Ks(0),r=[],o=[],a=[],l=[],c=[],h=[],u=ke==="city"?Array.from({length:be},()=>new Array(be).fill(0)):null,d=ke==="city"?Array.from({length:be},()=>new Array(be).fill(null)):null,f=ke==="city"?Ks(null):null;if(ke!=="base")for(let k=0;k<be;k++)for(let K=0;K<be;K++)i[0][k][K]=Re.ground;let p=0,x=0,m=(k,K,tt,xt,st,R)=>{for(let at=tt;at<=st;at++)for(let Q=K;Q<=xt;Q++)i[k][at+x][Q+p]=R},g=(k,K,tt,xt,st)=>{for(let R=tt;R<=st;R++)for(let at=K;at<=xt;at++)s[k][R+x][at+p]=1},y=(k,K,tt,xt)=>{t[k][tt+x][K+p]=xt},_=(k,K,tt,xt,st)=>{e[k][tt+x][K+p]=xt?{type:xt,style:st}:null},M=(k,K,tt,xt,st)=>{n[k][tt+x][K+p]=xt?{type:xt,style:st}:null},I=(k,K,tt,xt,st,R,at)=>{for(let Q=tt;Q<=st;Q++)_(k,K,Q,R,at),_(k,xt+1,Q,R,at);for(let Q=K;Q<=xt;Q++)M(k,Q,tt,R,at),M(k,Q,st+1,R,at)},P=(k,K,tt,xt,st,R)=>{for(let at=tt;at<=xt;at++)_(k,K,at,st,R)},C=(k,K,tt,xt,st,R)=>{for(let at=tt;at<=xt;at++)M(k,at,K,st,R)},v=(k,K,tt,xt,st=1,R=1,at={})=>r.push({kind:k,level:K,col:tt+p,row:xt+x,cols:st,rows:R,rotation:0,blocks:!0,...at}),z=k=>{let K={...k,col0:k.col0+p,row0:k.row0+x,col1:k.col1+p,row1:k.row1+x};return l.push(K),K},b=k=>a.push({...k,from:[k.from[0]+p,k.from[1]+x,k.from[2]],to:[k.to[0]+p,k.to[1]+x,k.to[2]],col:k.col+p,row:k.row+x}),S=(k,K,tt,xt,st)=>r.push({kind:"ladder",level:k,col:K+p,row:tt+x,cols:1,rows:1,blocks:!1,height:xt,side:st}),rt=(k,K,tt,xt)=>c.push({rect:[(k+p)*U,(K+x)*U,(tt+p)*U,(xt+x)*U]}),$=(k,K,tt)=>c.push({circle:[(k+p)*U,(K+x)*U,tt*U]}),D=(k,K,tt)=>h.push([k,K+p,tt+x]),H=(k,K,tt,xt,st,R,at)=>{o.push({level:k,col:K+p,row:tt+x,dirCol:xt,dirRow:st,count:R,style:at});for(let Q=0;Q<R;Q++){let X=K+xt*Q,Z=tt+st*Q;m(k,X,Z,X,Z,Re.stairs),y(k,X,Z,(Q+.5)/R*ce),k+1<as&&m(k+1,X,Z,X,Z,Re.none)}};function G(){z({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),m(1,3,3,10,9,Re.interior),m(2,3,3,10,9,Re.roof),g(0,3,3,10,9),g(1,3,3,10,9);for(let k of[0,1])I(k,3,3,10,9,"wall","hab");I(2,3,3,10,9,"parapet","hab"),P(0,7,3,5,"wall","inner"),_(0,7,5,"door","inner"),C(0,6,3,10,"wall","inner"),M(0,4,6,"door","inner"),M(0,9,6,"door","inner"),C(0,7,3,10,"wall","inner"),M(0,6,7,"door","inner"),M(0,9,7,"door","inner"),P(0,8,7,9,"wall","inner"),M(0,6,10,"door","hab"),_(0,11,6,"door","hab");for(let k of[4,8,10])M(0,k,10,"window","hab");for(let k of[4,8])_(0,11,k,"window","hab");M(0,5,3,"window","hab"),_(0,3,4,"window","hab"),H(0,4,8,1,0,3,"hab"),P(1,7,3,5,"wall","inner"),_(1,7,4,"door","inner"),C(1,6,3,10,"wall","inner"),M(1,5,6,"door","inner"),M(1,9,6,"door","inner"),P(1,8,7,9,"wall","inner"),C(1,7,8,10,"wall","inner"),M(1,9,7,"door","inner"),C(1,8,4,6,"rail","hab"),C(1,9,4,6,"rail","hab"),_(1,4,8,"rail","hab");for(let k of[4,5,7,9,10])M(1,k,10,"window","hab");for(let k of[4,5,8])_(1,11,k,"window","hab");M(1,4,3,"window","hab"),M(1,8,3,"window","hab"),_(1,3,5,"window","hab"),v("console",0,3,3),v("console",0,4,3),v("locker",0,6,3),v("bunk",0,9,3,2,1),v("locker",0,10,5),v("labTable",0,9,8,2,1),v("cabinet",0,10,9),v("crate",0,7,9),v("crate",0,3,7),v("rack",1,10,7),v("rack",1,10,8),v("rack",1,10,9),v("desk",1,4,3,2,1),v("console",1,9,3),v("crate",1,3,5),v("crate",1,3,6),v("acUnit",2,5,4,2,1),v("acUnit",2,8,6,1,1),v("antenna",2,4,8),v("solar",2,6,7,2,2),b({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),S(0,11,9,2*ce+.9,"W"),z({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),m(1,15,4,19,8,Re.deck),I(1,15,4,19,8,"rail","deck"),M(1,17,9,null);for(let[k,K]of[[15,4],[19,4],[15,8],[19,8],[17,4]])v("pylon",0,k,K);H(0,17,11,0,-1,3,"deck"),z({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),I(1,16,4,18,6,"wall","cabin"),M(1,17,7,"door","cabin"),_(1,19,5,"window","cabin"),M(1,16,7,"window","cabin"),m(1,16,4,18,6,Re.interior),m(2,16,4,18,6,Re.roof),I(2,16,4,18,6,"parapet","cabin"),g(1,16,4,18,6),v("console",1,16,4),v("rack",1,18,4),v("dish",2,17,5),b({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),S(1,19,6,ce+.9,"W"),v("barrels",0,16,6),v("crate",0,18,7),z({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),m(3,20,14,21,15,Re.deck),I(3,20,14,21,15,"rail","tower");for(let[k,K]of[[20,14],[21,14],[20,15],[21,15]])v("towerLeg",0,k,K);v("searchlight",3,21,14),b({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),S(0,20,16,3*ce+.9,"N"),M(3,20,16,null),v("container",0,13,13,2,4,{color:"orange"}),v("container",0,1,12,2,4,{color:"blue"}),v("truck",0,8,12,2,5),v("tank",0,21,4,2,3),v("generator",0,12,1,2,2);for(let[k,K]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])v("crate",0,k,K);v("barrels",0,12,4),v("barrels",0,20,10),v("lamp",0,12,11),v("lamp",0,15,12),C(0,20,10,13,"barrier","concrete"),P(0,16,17,19,"barrier","concrete");for(let[k,K,tt]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])v("rock",0,k,K,tt,tt);rt(1.3,1.3,12.6,11.7),rt(14.2,3,20.8,12.8),rt(19.4,13.4,22.6,16.8),$(4.6,19,3.6)}function q(){z({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),g(0,2,2,13,9),m(1,2,2,13,9,Re.roof),I(0,2,2,13,9,"wall","hab"),I(1,2,2,13,9,"parapet","hab"),M(0,6,10,"door","hab"),M(0,7,10,"door","hab"),_(0,14,5,"door","hab"),_(0,2,6,"door","hab");for(let k of[3,4,9,10,12])M(0,k,10,"window","hab");for(let k of[4,8,11])M(0,k,2,"window","hab");for(let k of[3,7,8])_(0,14,k,"window","hab");for(let k of[3,4,5,9,10,11])v("rack",0,k,2);v("crate",0,4,5),v("crate",0,5,5),v("crate",0,4,6),v("crate",0,10,6),v("crate",0,11,6),v("barrels",0,12,8),v("desk",0,2,8,2,1),v("cabinet",0,13,3),v("acUnit",1,4,4,2,1),v("acUnit",1,9,6,2,1),z({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),m(1,13,13,20,19,Re.interior),m(2,13,13,20,19,Re.roof),g(0,13,13,20,19),g(1,13,13,20,19);for(let k of[0,1])I(k,13,13,20,19,"wall","hab");I(2,13,13,20,19,"parapet","hab"),P(0,17,13,19,"wall","inner"),_(0,17,15,"door","inner"),_(0,17,16,"door","inner"),M(0,18,20,"door","hab"),_(0,13,15,"door","hab");for(let k of[14,15,19])M(0,k,20,"window","hab");for(let k of[17,18])_(0,21,k,"window","hab");M(0,15,13,"window","hab"),M(0,19,13,"window","hab"),H(0,14,18,1,0,3,"hab"),C(1,18,14,16,"rail","hab"),_(1,14,19,"rail","hab"),_(1,14,18,"rail","hab");for(let k of[14,16,18,19])M(1,k,20,"window","hab");for(let k of[14,16,18])_(1,21,k,"window","hab");for(let k of[14,17,19])M(1,k,13,"window","hab");v("desk",0,14,14,2,1),v("console",0,19,14),v("locker",0,20,17),v("desk",1,15,14,2,1),v("desk",1,18,16,2,1),v("rack",1,20,14),v("crate",1,20,19),v("antenna",2,19,18),v("acUnit",2,15,15,2,1),v("container",0,17,3,2,4,{color:"orange"}),v("generator",0,9,13,2,2),v("barrels",0,12,12),v("crate",0,8,16),v("crate",0,9,17),v("lamp",0,15,10),v("lamp",0,11,19),C(0,11,18,21,"barrier","concrete");for(let[k,K,tt]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])v("rock",0,k,K,tt,tt);rt(1.3,1.3,14.7,11.7),rt(12.3,12.3,21.7,20.7),rt(6.3,11.3,12.7,13.2)}function N(){rt(.6,.6,22.4,22.4);let k=(tt,xt,st)=>v("paint",0,tt,xt,1,st,{blocks:!1,line:"W"});for(let[tt,xt]of[[2,4],[10,4],[14,4]])for(let st=2;st<=20;st+=2)k(st,tt,xt);let K=(tt,xt,st,R,at)=>v("car",0,st,R,2,4,{type:tt,color:xt,flip:!!at});K("suv","white",2,2),K("van","sand",8,2),K("suv","graphite",10,2),K("suv","red",16,2),K("suv","blue",4,10,!0),K("van","white",12,10,!0),K("suv","olive",18,10,!0),K("suv","graphite",6,14),K("suv","white",14,14),v("truck",0,21,15,2,5);for(let[tt,xt]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])v("lamp",0,tt,xt);P(0,1,2,5,"barrier","concrete"),P(0,1,10,17,"barrier","concrete"),C(0,23,2,9,"barrier","concrete"),C(0,23,13,20,"barrier","concrete"),v("crate",0,21,3),v("crate",0,21,4),v("barrels",0,22,12);for(let[tt,xt,st]of[[0,22,2],[23,0,1]])v("rock",0,tt,xt,st,st)}function E(k,K){v("tiltrotor",0,k,K,6,4,{blocks:!1});for(let st=k;st<=k+5;st++)for(let R=K;R<=K+3;R++)y(0,st,R,.6);for(let st=K;st<=K+3;st++)y(0,k+6,st,.45),y(0,k+7,st,.15);let tt={col:k+4,row:K+4};y(0,tt.col,tt.row,.3),g(0,k,K,k+5,K+3);for(let st=k;st<=k+5;st++)M(0,st,K,"hull","tiltrotor"),st!==tt.col&&M(0,st,K+4,"hull","tiltrotor");for(let st=K;st<=K+3;st++)_(0,k,st,"hull","tiltrotor");for(let st=k-4;st<=k+5;st++)D(0,st,K-1),st!==tt.col&&D(0,st,K+4);for(let st=k-4;st<=k-1;st++)for(let R=K;R<=K+3;R++)D(0,st,R);let xt=[];for(let st=k;st<=k+7;st++)for(let R=K;R<=K+3;R++)xt.push([st+p,R+x,0]);return xt}function B(){let tt=E(10,10);rt(4.3,4.3,21.7,19.7),v("crate",0,20,8),v("crate",0,20,9),v("crate",0,21,9),v("barrels",0,19,16),v("generator",0,5,17,2,2);for(let[st,R]of[[4,4],[21,4],[4,19],[21,19]])v("lamp",0,st,R);for(let[st,R,at]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])v("rock",0,st,R,at,at);let xt=(st,R,at)=>[st+p,R+x,0,at];return{squad:[xt(11,10,1),xt(12,10,1),xt(13,10,1),xt(11,13,5),xt(12,13,5),xt(13,13,5)],mech:[xt(10,11,7)],extraction:tt}}function Y(){p=Fr,x=zr;let k=Js,K=k.grid[0],tt=k.grid[1],xt=Array.from({length:tt},()=>new Array(K).fill(null)),st=Array.from({length:tt},()=>new Array(K).fill(0)),R=(F,j,_t)=>{for(let Ut=F.y;Ut<F.y+F.height;Ut++)for(let T=F.x;T<F.x+F.width;T++)xt[Ut][T]=j,st[Ut][T]=_t};k.rooms.forEach((F,j)=>R(F,F.module===2?"hangar":"room"+j,F.levels)),k.corridors.forEach(F=>R(F,"corridor",1));let at=(F,j)=>F>=0&&j>=0&&F<K&&j<tt?xt[j][F]:null,Q=(F,j)=>at(F,j)?st[j][F]:0;for(let F=0;F<tt;F++)for(let j=0;j<K;j++)if(xt[F][j]){m(0,j,F,j,F,Re.interior);for(let _t=0;_t<st[F][j];_t++)g(_t,j,F,j,F)}for(let F=0;F<=tt;F++)for(let j=0;j<=K;j++){if(F<tt){let _t=at(j-1,F),Ut=at(j,F);if(_t!==Ut)for(let T=0;T<Math.max(Q(j-1,F),Q(j,F));T++)_(T,j,F,"wall","inner")}if(j<K){let _t=at(j,F-1),Ut=at(j,F);if(_t!==Ut)for(let T=0;T<Math.max(Q(j,F-1),Q(j,F));T++)M(T,j,F,"wall","inner")}}for(let F of k.doors){let j=F.kind==="gate"?null:"door";for(let _t=0;_t<F.size;_t++)F.side==="N"?M(0,F.x+_t,F.y,j,"inner"):F.side==="S"?M(0,F.x+_t,F.y+1,j,"inner"):F.side==="W"?_(0,F.x,F.y+_t,j,"inner"):_(0,F.x+1,F.y+_t,j,"inner")}for(let F=-1;F<=tt;F++)for(let j=-1;j<=K;j++){if(at(j,F)||F+x<0||F+x>=be||j+p<0||j+p>=be)continue;let _t=0;for(let T=-1;T<=1;T++)for(let w=-1;w<=1;w++)_t=Math.max(_t,Q(j+w,F+T));if(!_t)continue;let Ut=((j+p)*7+(F+x)*13)%3;v("rockFill",0,j,F,1,1,{type:`h${_t}v${Ut}`,height:_t*ce,variant:Ut})}v("liftPlatform",0,0,1,20,20,{blocks:!1});let X=E(8,9);v("barrels",0,20,1),v("barrels",0,21,1),v("generator",0,22,1,2,2),v("crate",0,20,3),v("crate",0,21,3),v("console",0,23,4),v("crate",0,22,17),v("crate",0,23,17),v("crate",0,23,18),v("generator",0,24,17,2,2),v("desk",0,24,19,2,1),v("desk",0,27,15,2,1),v("rack",0,31,15),v("rack",0,31,16),v("crate",0,31,20),v("crate",0,30,20),v("rack",0,24,11),v("rack",0,24,12),v("crate",0,26,11),v("crate",0,27,11),v("crate",0,27,12),v("generator",0,28,11,2,2),v("generator",0,31,11,2,2),v("rack",0,32,13),v("barrels",0,32,14),v("tank",0,35,12,2,3),v("cabinet",0,33,12),v("console",0,33,14),v("labTable",0,36,16,2,1),v("labTable",0,36,19,2,1),v("console",0,33,17),v("cabinet",0,33,20),v("rack",0,38,16),v("labTable",0,41,17,2,1),v("labTable",0,42,19,2,1),v("cabinet",0,39,16),v("console",0,44,16),v("crate",0,39,20),v("liftPlatform",0,52,9,4,4,{blocks:!1}),v("crate",0,52,9),v("crate",0,55,12),v("crate",0,55,15),v("crate",0,52,15),v("console",0,52,19),v("console",0,52,20),v("rack",0,48,15),v("rack",0,48,16),v("rack",0,48,17),v("crate",0,48,19),v("crate",0,48,20),v("crate",0,51,19),v("crate",0,51,20),v("crate",0,51,15),v("acUnit",0,48,11,2,1),v("tank",0,50,11,2,3),v("barrels",0,48,13);for(let F of[24,25,26,27])v("locker",0,8,F);v("locker",0,9,27),v("locker",0,11,27);for(let F of[12,13,14,15])v("locker",0,F,27);v("desk",0,12,24,2,1);for(let[F,j]of[[18,24],[19,24],[19,25],[19,27],[18,27]])v("crate",0,F,j);v("bunk",0,20,27,2,1),v("bunk",0,22,27,2,1),v("cabinet",0,23,24),v("console",0,20,24);for(let F of[25,26,28,29])v("console",0,F,27);v("desk",0,28,25,2,1),v("rack",0,25,24),v("desk",0,30,25,2,1),v("desk",0,30,27,2,1),v("desk",0,34,26,2,1),v("galleyFloor",0,36,24,3,4,{blocks:!1,drain:[2.84,1.4,2.92,4.8]}),v("galleyCounter",0,36,24,1,1,{face:"N",variant:"drawers",upper:!0}),v("galleyRange",0,37,24,1,1,{face:"N"}),v("galleyFridge",0,38,24,1,1,{face:"N"}),v("galleyCounter",0,38,25,1,1,{face:"E",variant:"sink2"}),v("galleyCounter",0,38,26,1,1,{face:"E",variant:"drawers"}),v("galleyCounter",0,38,27,1,1,{face:"E",variant:"microwave"}),v("galleyCounter",0,37,27,1,1,{face:"S",variant:"doors"}),v("galleyCounter",0,36,27,1,1,{face:"S",variant:"grinder"}),v("galleyIsland",0,37,25,1,2),v("desk",0,39,25,2,1),v("console",0,43,24),k.rooms.filter(F=>F.width===3&&F.height===3).forEach(F=>{let j=k.doors.some(Ut=>Ut.side==="S"&&Ut.y===F.y+F.height-1&&Ut.x>=F.x&&Ut.x<F.x+F.width),_t=j?F.y:F.y+F.height-1;v("bunk",0,F.x,_t,2,1),v("locker",0,F.x+2,j?F.y+F.height-1:F.y)}),v("locker",0,32,29),v("locker",0,32,30),v("locker",0,32,31),v("cabinet",0,29,31),v("cabinet",0,30,31),v("locker",0,51,25),v("locker",0,51,26),v("cabinet",0,48,25),v("cabinet",0,49,25);let Z=(F,j,_t)=>[F+p,j+x,0,_t];return{squad:[Z(21,9,1),Z(22,9,1),Z(21,10,1),Z(22,10,1),Z(21,11,1),Z(22,11,1)],mech:[Z(16,21,7)],aliens:[Z(53,10,1),Z(54,10,1),Z(53,11,1),Z(54,11,1),Z(52,13,3),Z(55,14,3),Z(53,16,3),Z(54,17,3)],extraction:X}}let it,gt=null,W=null,ut=null,vt=null;if(ke==="city"){let k=Xu({TILES:be,LEVEL_H:ce,FLOOR:Re,setFloor:m,setIndoor:g,setW:_,setN:M,object:v,building:z,stairRun:H,tiltrotor:E,block:D,surface:u,marking:d,floorStyle:f});it=k.spawns,gt=k.extraction,W=k.mission,ut=k.name,vt=k.caption}else if(ke==="big"){p=0,x=0,G(),p=js,x=0,q(),p=0,x=js,N(),p=js,x=js;let k=B();gt=k.extraction,it={squad:k.squad,mech:k.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(ke==="base"){let k=Y();gt=k.extraction,it={squad:k.squad,mech:k.mech,aliens:k.aliens}}else G(),it=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:ke,TILE:U,TILES:be,LEVELS:as,LEVEL_H:ce,floor:i,offset:t,wallW:e,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:l,spawns:it,extraction:gt,concrete:c,blockedCells:h,surface:u,marking:d,floorStyle:f,mission:W,caption:vt,name:ut||(ke==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":ke==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:ke==="big"||ke==="base"||ke==="city"}}var Zu=((Number(Yu.get("rot"))||0)%4+4)%4;function $u(i,t){let e=i;for(let n=0;n<t;n++)e=kx(e,n+1);return e}function kx(i,t){let e=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(c,h)=>c.map(u=>u.map(d=>d.map(()=>h))),s=(c,h)=>{let u=n(c,h);for(let d=0;d<c.length;d++)for(let f=0;f<e;f++)for(let p=0;p<e;p++)u[d][p][e-1-f]=c[d][f][p];return u},r=n(i.wallW,null),o=n(i.wallN,null);for(let c=0;c<i.wallW.length;c++)for(let h=0;h<=e;h++)for(let u=0;u<=e;u++){let d=i.wallW[c][h][u];d&&h<e&&(o[c][u][e-1-h]=d);let f=i.wallN[c][h][u];f&&u<e&&(r[c][u][e-h]=f)}let a=([c,h,...u])=>[e-1-h,c,...u],l=i.objects.map(c=>{let h={col:e-c.row-c.rows,row:c.col,cols:c.rows,rows:c.cols};if(c.kind==="rockFill")return{...c,...h};let u=c.source||c;return{...c,...h,source:u,turns:t}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:l,blockedCells:i.blockedCells.map(([c,h,u])=>[c,e-1-u,h]),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(c=>c.circle?{...c,circle:[e*i.TILE-c.circle[1],c.circle[0],c.circle[2]]}:{...c,rect:[e*i.TILE-c.rect[3],c.rect[0],e*i.TILE-c.rect[1],c.rect[2]]}),viewTurns:t}}var oa=class extends Ws{constructor(t=null){super();let e=new pe;e.deleteAttribute("uv");let n=new Wt({side:nn}),s=new Wt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new Ur(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new wt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new wt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new wt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new wt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new wt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new wt(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new wt(e,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new wt(e,Qs(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let x=new wt(e,Qs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new wt(e,Qs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let g=new wt(e,Qs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let y=new wt(e,Qs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new wt(e,Qs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Qs(i){let t=new ji;return t.color.setScalar(i),t}function _e(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var W_=_e(20261121);var cn=new Uint8Array(512);{let i=_e(7),t=Array.from({length:256},(e,n)=>n);for(let e=255;e>0;e--){let n=Math.floor(i()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<512;e++)cn[e]=t[e&255]}var rc=i=>i*i*i*(i*(i*6-15)+10),ls=(i,t,e)=>i+(t-i)*e;function Ri(i,t,e,n){let s=i&15,r=s<8?t:e,o=s<4?e:s===12||s===14?t:n;return(s&1?-r:r)+(s&2?-o:o)}function Ku(i,t,e){let n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);let o=rc(i),a=rc(t),l=rc(e),c=cn[n]+s,h=cn[c]+r,u=cn[c+1]+r,d=cn[n+1]+s,f=cn[d]+r,p=cn[d+1]+r;return ls(ls(ls(Ri(cn[h],i,t,e),Ri(cn[f],i-1,t,e),o),ls(Ri(cn[u],i,t-1,e),Ri(cn[p],i-1,t-1,e),o),a),ls(ls(Ri(cn[h+1],i,t,e-1),Ri(cn[f+1],i-1,t,e-1),o),ls(Ri(cn[u+1],i,t-1,e-1),Ri(cn[p+1],i-1,t-1,e-1),o),a),l)}function Ju(i,t,e,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*Ku(i*o,t*o,e*o),o*=2,r*=.5;return s}function Ci(i,t,e,n=5,s=0){let r=i*Math.PI*2,o=t*Math.PI*2,a=e/(Math.PI*2),l=0,c=.5,h=1;for(let u=0;u<n;u++)l+=c*Ku(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,c*=.5;return l}function ju(i){let t=document.createElement("canvas");return t.width=t.height=i,t}function Ce(i,{srgb:t=!0,repeat:e=1}={}){let n=new Wo(i);return t&&(n.colorSpace=dn),n.wrapS=n.wrapT=$i,n.repeat.set(e,e),n.anisotropy=8,n}function Hx(i,t,e=2){let n=ju(t),s=n.getContext("2d"),r=s.createImageData(t,t),o=(a,l)=>i[(l+t)%t*t+(a+t)%t];for(let a=0;a<t;a++)for(let l=0;l<t;l++){let c=(o(l+1,a)-o(l-1,a))*e,h=(o(l,a+1)-o(l,a-1))*e,u=Math.hypot(c,h,1),d=(a*t+l)*4;r.data[d]=(-c/u*.5+.5)*255,r.data[d+1]=(h/u*.5+.5)*255,r.data[d+2]=(1/u*.5+.5)*255,r.data[d+3]=255}return s.putImageData(r,0,0),Ce(n,{srgb:!1})}function Bx(i,t,e){let n=new Float32Array(i*i),s=ju(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=l/i,h=a/i,u=t(c,h,l,a);n[a*i+l]=u;let[d,f,p]=e(c,h,u,l,a),x=(a*i+l)*4;o.data[x]=d,o.data[x+1]=f,o.data[x+2]=p,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var oc=i=>Math.max(0,Math.min(255,i));function kr(i=3,t=[128,120,108]){let n=_e(i),{canvas:s,ctx:r,heights:o}=Bx(512,(a,l)=>{let c=Ci(a,l,6,6,i),h=Math.abs(Ci(a,l,14,3,i+9));return c*.8-Math.max(0,.06-h)*6},(a,l,c)=>{let h=Ci(a,l,20,3,i+3),u=.72+c*.55+(n()-.5)*.1,d=t[0]*u,f=t[1]*u,p=t[2]*u;return h>.22&&(d=d*.7+60,f=f*.75+75,p=p*.6+30),[oc(d),oc(f),oc(p)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:Ce(s),normalMap:Hx(o,512,5)}}function aa(i="#ffb347",t=1,e="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=_e(t);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,e==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let l=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,l):s.lineTo(a,l)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let l=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,l,6),a+=l+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return Ce(n)}var X_=new L(0,1,0);function ac(i,t,{flatten:e=.75,roughness:n=.35,detail:s=3}={}){let r=new es(i,s),o=r.attributes.position,a=new L;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l);let c=a.clone().normalize(),h=1+Ju(c.x*1.6+t,c.y*1.6,c.z*1.6-t,4)*n*2+Math.max(0,Ju(c.x*4+t,c.y*4,c.z*4,2))*.15;a.copy(c).multiplyScalar(i*h);let u=Math.floor((c.x*3+t)*1.3)*.02;a.y*=e,a.x+=u,o.setXYZ(l,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function lc(i,t){i.traverse(e=>{if(e.material)for(let n of Array.isArray(e.material)?e.material:[e.material])"envMapIntensity"in n&&(n.envMapIntensity=t*(n.userData.envBoost||1))})}var Qu=Math.SQRT1_2,td=(i,t)=>new pt((i+t)*Qu,(t-i)*Qu);var sy=new pt(.75,-.66).normalize();var Hr=new L;function Ln(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Hr.copy(t),Hr[n]=0,Hr.normalize();let c=.5*o/(o+a),h=1-Hr.angleTo(i)/l;return Math.sign(Hr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var la=class extends pe{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new L,x=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:p.set(1,0,0),d[g+0]=Ln(p,l,"z","y",r,n),d[g+1]=1-Ln(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[g+0]=1-Ln(p,l,"z","y",r,n),d[g+1]=1-Ln(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[g+0]=1-Ln(p,l,"x","z",r,t),d[g+1]=Ln(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[g+0]=1-Ln(p,l,"x","z",r,t),d[g+1]=1-Ln(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[g+0]=1-Ln(p,l,"x","y",r,t),d[g+1]=1-Ln(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[g+0]=Ln(p,l,"x","y",r,t),d[g+1]=1-Ln(p,l,"y","x",r,e);break}}};var Vx=(i,t,e)=>new L(i,t,e),ca=null;function nd(){if(ca)return ca;let i=(t,e=.75,n=.15,s={})=>new Wt({color:t,roughness:e,metalness:n,...s});return ca={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new In({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},ca}function Ze(i){return i.castShadow=i.receiveShadow=!0,i}function At(i,t,e,n,s,r,o,a,l=0){let c=l>0?new la(t,e,n,3,Math.min(l,t/2.1,e/2.1,n/2.1)):new pe(t,e,n),h=Ze(new wt(c,s));return h.position.set(r,o,a),i.add(h),h}function Le(i,t,e,n,s,r,o,a="x",l=20,c=t){let h=Ze(new wt(new Ie(t,c,e,l),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function ha(i,t,e,n){let s=new Ys(t.map(r=>Vx(...r)),!1,"catmullrom",.05);i.add(Ze(new wt(new Ir(s,t.length*8,e,8),n)))}function ai(i,t,e,n,s,r=.025){let o=new qe;t.forEach(([c,h],u)=>{u===0?o.moveTo(-c,h):o.lineTo(-c,h)});let a=new ln(o,{depth:e-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let l=Ze(new wt(a,n));return l.position.x=s-e/2+r,i.add(l),l}function Br(i,t,e,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new qe;t.forEach(([d,f],p)=>{p===0?a.moveTo(d,f):a.lineTo(d,f)});let l=n-e,c=new ln(a,{depth:l-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=c.attributes.position;for(let d=0;d<h.count;d++){let f=Math.min(1,Math.max(0,(h.getZ(d)+o)/l)),{scale:p,drop:x}=r(f);h.setX(d,h.getX(d)*p),h.setY(d,h.getY(d)-x*Math.max(0,h.getY(d)))}c.computeVertexNormals();let u=Ze(new wt(c,s));return u.position.z=e+o,i.add(u),u}function Wx(i,t,e,n=.03,s=0){let r=[],o=i/2,a=(l,c,h,u,d)=>{for(let f=0;f<=6;f++){let p=u+(d-u)*f/6;r.push([l+Math.cos(p)*h,c+Math.sin(p)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-e,s+t-e,e,0,Math.PI/2),a(-o+e,s+t-e,e,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function Gr(i,t,e,n,s,r){return Wx(i-r*2,t-r*2,Math.max(.01,e-r),Math.max(.01,n-r),s+r)}function Xx(i,t,e,n,s,r,o){let a=nd(),l=s*.58,c=.09,h=r/2,u=[new pt(l,-h)];for(let x=0;x<=6;x++){let m=-Math.PI/2+x/6*Math.PI/2;u.push(new pt(s-c+Math.cos(m)*c,-h+c+Math.sin(m)*c))}for(let x=0;x<=6;x++){let m=x/6*Math.PI/2;u.push(new pt(s-c+Math.cos(m)*c,h-c+Math.sin(m)*c))}u.push(new pt(l,h));let d=Ze(new wt(new Qi(u,36),a.rubber));d.rotation.z=Math.PI/2,d.position.set(t,e,n),i.add(d);let f=20;for(let x=0;x<f;x++){let m=x/f*Math.PI*2;for(let g of[-1,1])At(i,r*.36,.04,.075,a.rubber,t+g*r*.2,e+Math.cos(m)*(s+.005),n+Math.sin(m)*(s+.005),.015).rotation.set(m,g*.5,0)}let p=t+o*(h-.03);Le(i,l,.05,a.hub,p,e,n,"x",28),Le(i,s*.24,.08,a.hub,p+o*.04,e,n,"x",18),Le(i,s*.12,.05,a.frame,p+o*.08,e,n,"x",12);for(let x=0;x<8;x++){let m=x/8*Math.PI*2;Le(i,.018,.04,a.steel,p+o*.03,e+Math.cos(m)*s*.36,n+Math.sin(m)*s*.36,"x",6)}}var id={length:6.15,width:2.35};function sd(){let i=nd(),t=new zt,e=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let N of o)for(let E of[-1,1])Xx(t,E*s,e,N,e,n,E);for(let N of[-1,1])At(t,.12,.22,5.75,i.frame,N*.45,a-.11,3.1);for(let N of o){Le(t,.065,s*2-.25,i.frame,0,e,N,"x",12);let E=new wt(new Bn(.2,16,10),i.frame);E.scale.set(1.1,.9,.9),E.position.set(0,e,N),t.add(Ze(E))}At(t,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let N of[-1,1]){let E=new wt(new Si(.055,.018,6,12,Math.PI*1.4),i.frame);E.position.set(N*.6,.72,6.16),E.rotation.set(0,Math.PI/2,Math.PI*.8),t.add(Ze(E))}At(t,.6,.24,.24,i.frame,0,.84,5.86,.06),Le(t,.1,.48,i.steel,0,.88,5.86,"x",14);let l=4.72,c=6;Br(t,Gr(1.14,.78,.24,.02,.98,.03),l,c,i.olive,N=>({scale:1-.1*N,drop:.045*N*N}),.03),At(t,.03,.02,c-l-.1,i.oliveDark,0,1.755,(l+c)/2);for(let N of[-1,1])for(let E=0;E<6;E++){let B=At(t,.02,.2,.05,i.frame,N*.552,1.38,4.95+E*.11,.008);B.rotation.y=N*.15}Br(t,Gr(1,.68,.12,.04,1.02,.012),c-.02,c+.05,i.olive,void 0,.012);for(let N=-4;N<=4;N++)At(t,.045,.5,.04,i.frame,N*.09,1.34,c+.045,.012);let h=[],u=(N,E,B,Y,it)=>{let gt=[];for(let W=0;W<=20;W++){let ut=B+(Y-B)*W/20;gt.push([r+Math.cos(ut)*N,e+Math.sin(ut)*E])}return it?gt.reverse():gt};h.push(...u(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...u(.92,.66,.2,2.75,!0).slice(0,-1));let d=[[r+Math.cos(2.75)*.92,e+Math.sin(2.75)*.66]];for(let N of[-1,1]){ai(t,h,.44,i.olive,N*.93,.03),At(t,.05,.45,1.05,i.oliveDark,N*.7,1,r+.05);let E=new wt(new Bn(.12,18,12),i.olive);E.scale.set(1,1,.75),E.position.set(N*.83,1.13,5.86),t.add(Ze(E)),Le(t,.09,.02,i.lens,N*.83,1.13,5.95,"z",18);for(let B of[-.05,0,.05])At(t,.012,.2,.012,i.frame,N*.83+B,1.13,5.99);At(t,.07,.045,.04,i.amber,N*1,1.2,5.7,.01),At(t,.36,.4,.02,i.rubber,N*.93,.55,r-.82)}let f=4.74,p=3.62,x=(f+p)/2,m=f-p;At(t,1.3,.24,m-.1,i.frame,0,1.06,x),Br(t,Gr(2.18,.98,.1,.05,1,.05),p,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},y={z:f-.24,y:2.44},_=[[p+.02,1.95],[f-.02,1.95],[g.z,g.y]],M=2.6,I=.16,P=.24;for(let N=1;N<=10;N++){let E=N/10*Math.PI/2;_.push([y.z-P*(1-Math.cos(E)),y.y+(M-y.y)*Math.sin(E)])}for(let N=0;N<=8;N++){let E=N/8*Math.PI/2;_.push([p+.04+I-Math.sin(E)*I,M-I+Math.cos(E)*I])}ai(t,_,2.1,i.olive,0,.09);let C=Math.atan2(g.z-y.z,y.y-g.y),v=(g.z+y.z)/2+.1*Math.cos(C),z=(g.y+y.y)/2+.1*Math.sin(C);for(let N of[-1,1]){let E=At(t,.84,.44,.03,i.glass,N*.48,z,v,.02);E.rotation.x=-C,At(t,.03,.36,.6,i.glass,N*1.06,2.22,x+.02,.02),At(t,.03,.85,.02,i.oliveDark,N*1.1,1.55,x-.28),At(t,.03,.03,.12,i.steel,N*1.105,1.8,x-.16),ha(t,[[N*1.05,2,f-.1],[N*1.28,2.12,f],[N*1.31,2.34,f]],.014,i.frame),At(t,.04,.26,.16,i.frame,N*1.32,2.36,f,.015)}let b=At(t,.06,.46,.04,i.oliveDark,0,z,v+.01);b.rotation.x=-C,At(t,1.1,.28,.03,i.glass,0,2.22,p+.03,.02);for(let N of[-.25,0,.25])At(t,.07,.04,.05,i.amber,N,2.7,f-.4,.01);Le(t,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let N of[2.75,3.35])At(t,.04,.58,.05,i.frame,.88,.78,N);At(t,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),ha(t,[[.55,1,p-.02],[.75,1.25,p-.08],[.78,2.65,p-.08]],.045,i.frame);let S=3.5,rt=.12,$=S-rt,D=(S+rt)/2,H=1.1,G=2.08;At(t,2.08,.12,$,i.frame,0,H-.06,D),Br(t,Gr(2.35,G,.2,.05,H,.08),rt,S,i.olive,void 0,.08);for(let N of[-1,1]){for(let E of[.88,1.78,2.68])At(t,.03,.44,.62,i.oliveDark,N*1.177,H+1.45,E,.03),At(t,.03,.34,.52,i.glass,N*1.186,H+1.45,E,.02);for(let E of[H+.38,H+1.02])At(t,.02,.03,$-.3,i.oliveDark,N*1.178,E,D);At(t,.3,.36,.5,i.oliveDark,N*1,H-.24,1.71,.05)}At(t,.86,1.75,.03,i.oliveDark,-.45,H+.92,rt-.01,.03),At(t,.3,.26,.03,i.glass,-.45,H+1.45,rt-.03,.02),At(t,.03,.03,.14,i.steel,-.1,H+.9,rt-.05);for(let N of[-.75,-.15])At(t,.03,.9,.03,i.frame,N,H-.3,rt-.12);for(let N=0;N<4;N++)At(t,.6,.025,.03,i.frame,-.45,H-.65+N*.22,rt-.12);for(let N of[-1,1])At(t,.14,.08,.04,i.red,N*.95,.92,rt-.02,.02),At(t,.4,.4,.02,i.rubber,N*.95,.58,.45);let q=H+G;for(let N of[-1,1])ha(t,[[N*.98,q-.02,.35],[N*.98,q+.14,.5],[N*.98,q+.14,3.05],[N*.98,q-.02,3.2]],.02,i.frame);for(let N of[.65,1.45,2.25,3])At(t,1.96,.025,.025,i.frame,0,q+.14,N);return At(t,1.2,.18,.9,i.canvas,-.2,q+.08,1.25,.08),At(t,.6,.55,.3,i.oliveDark,.55,q-.38,S+.16,.08),Le(t,.12,.42,i.frame,.55,q+.12,S+.16,"y",16),Le(t,.16,.04,i.oliveDark,.55,q+.34,S+.16,"y",16),Le(t,.035,.9,i.frame,-.7,q+.38,S-.2,"y",8),Br(t,Gr(2.37,.16,.02,.05,H-.005,.01),rt+.01,S-.01,i.dusty,void 0,.01),t}var Vn={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function Yx(i){let t=i?{clippingPlanes:i,clipShadows:!0,side:en}:{},e=(n,s=.7,r=.25,o={})=>new Wt({color:n,roughness:s,metalness:r,...t,...o});return{hull:e(4870469,.62,.3),hullDark:e(3554355,.66,.3),belly:e(7370092,.7,.25),panel:e(2830378,.6,.4),interior:e(9409933,.8,.15),floor:e(2764074,.85,.35),seat:e(4082230,.95,0),frame:e(1908508,.6,.6),steel:e(9212042,.35,.8),rubber:e(1710617,.95,0),yellow:e(13214234,.6,.1),glass:new In({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...t}),red:e(11540496,.4,.1,{emissive:5244933}),green:e(1089584,.4,.1,{emissive:342544}),white:e(15263968,.4,.1,{emissive:3158064})}}function Vr(i,t,e,n,s){let r=[],o=(a,l,c,h,u,d)=>{for(let f=0;f<=d;f++){let p=h+(u-h)*f/d;r.push([a+Math.cos(p)*c,l+Math.sin(p)*c])}};return o(i-s,t+s,s,-Math.PI/2,0,4),o(i-n,e-n,n,0,Math.PI/2,10),o(-i+n,e-n,n,Math.PI/2,Math.PI,10),o(-i+s,t+s,s,Math.PI,Math.PI*1.5,4),r}function cc(i,t,e,n,s,r,o=32,a=null){let l=new qe;t.forEach(([p,x],m)=>{m===0?l.moveTo(p,x):l.lineTo(p,x)});let c=new ln(l,{depth:n-e,bevelEnabled:!1,steps:o,curveSegments:6}),h=c.attributes.position,u=a?a.bottom:Math.min(...t.map(p=>p[1])),d=a?a.top:Math.max(...t.map(p=>p[1]));for(let p=0;p<h.count;p++){let x=r(e+h.getZ(p));h.setX(p,h.getX(p)*x.scale),h.setY(p,x.bottom+(h.getY(p)-u)*(x.top-x.bottom)/(d-u))}c.computeVertexNormals();let f=Ze(new wt(c,s));return f.position.z=e,i.add(f),f}function qx(i,t,e,n,s){let r=new zt,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([c,h])=>new pt(c,h));r.add(Ze(new wt(new Qi(o,56),t.hull)));let a=Ze(new wt(new Si(1.555,.03,6,56),t.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Le(r,.3,.7,t.hullDark,0,0,0,"y",24);let l=Ze(new wt(new Bn(.3,20,10,0,Math.PI*2,0,Math.PI/2),t.steel));l.position.y=.35,r.add(l);for(let c=0;c<7;c++){let h=new zt;h.rotation.y=c*Math.PI*2/7+.2;let u=Ze(new wt(new pe(1.08,.03,.24),t.frame));u.position.x=.84,u.position.y=.12,u.rotation.x=.42,h.add(u),r.add(h)}for(let c=0;c<3;c++){let h=new zt;h.rotation.y=c*Math.PI*2/3;let u=Ze(new wt(new pe(1.1,.12,.05),t.hullDark));u.position.x=.85,u.position.y=-.2,h.add(u),r.add(h)}return Le(r,.16,.5,t.steel,-Math.sign(e)*1.7,0,0,"x",16),r.position.set(e,n,s),i.add(r),r}function Zx(i,t,e,n,s,r,o,a){let l=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,u])=>[o+h,r+u]),c=s-n;ai(i,l,c,t.hull,e*(n+c/2),.03)}function rd({cutaway:i=!1,rampOpen:t=!0}={}){let e=i?[new bn(new L(0,-1,0),3)]:null,n=Yx(e),s=new zt,r=new zt;s.name="floor",r.name="back";let o=new zt;o.name="shell";let a=2.8,l=.25,c=5,h=Vn.floor,u=Vn.cabin;At(s,a*2,h-l,u.front-u.rear,n.belly,0,(h+l)/2,(u.front+u.rear)/2,.12).userData.solid=!0,At(s,u.right-u.left-.02,.03,u.front-u.rear,n.floor,0,h+.015,(u.front+u.rear)/2);let d=3.5,f=d-l-.12,p=l+.12+f/2;At(o,a-u.right,f,u.front-u.rear,n.hull,-(a+u.right)/2,p,(u.front+u.rear)/2);let x=Vn.sideDoor,m=(a+u.right)/2;At(o,a-u.right,f,x.rear-u.rear,n.hull,m,p,(x.rear+u.rear)/2),At(o,a-u.right,f,u.front-x.front,n.hull,m,p,(u.front+x.front)/2);let g=h+x.height;At(o,a-u.right,d-g,x.front-x.rear,n.hull,m,(d+g)/2,(x.rear+x.front)/2),At(o,a-u.right,h-l-.12,x.front-x.rear,n.hull,m,(h+l+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([X])=>At(o,.36,x.height+.1,.08,n.hullDark,m,h+x.height/2,X)),At(o,.36,.08,x.front-x.rear+.08,n.hullDark,m,g,(x.rear+x.front)/2);let y=Vr(a,l,c,1.3,.3).filter(([,X])=>X>=d-.001),_=Vr(u.right,h,u.ceiling,.9,.01).filter(([,X])=>X>=d-.001).reverse(),M=[[a,d]].concat(y,[[-a,d],[u.left,d]],_,[[u.right,d]]),I=new ln(new qe(M.map(([X,Z])=>new pt(X,Z))),{depth:u.front-u.rear,bevelEnabled:!1,curveSegments:4}),P=Ze(new wt(I,n.hull));P.position.z=u.rear,o.add(P);let C=Vr(a+.04,l+.1,c+.04,1.32,.3),v=Vr(u.right-.03,h+.02,u.ceiling-.03,.87,.01),z=new qe(C.map(([X,Z])=>new pt(X,Z)));z.holes.push(new qs(v.slice().reverse().map(([X,Z])=>new pt(X,Z))));let b=Ze(new wt(new ln(z,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));b.position.z=u.rear,b.userData.hollow=!0,o.add(b),b.castShadow=b.receiveShadow=!1;let S=u.front,rt=Vn.length,$=rt-S,D=(X,Z,F)=>{let j=Math.min(1,Math.max(0,(F-X)/(Z-X)));return j*j*(3-2*j)},H=X=>{let Z=(X-S)/$;return{scale:1-.1*D(.25,.65,Z)-.55*Math.pow(D(.55,1,Z),1.3),top:c-2*D(.18,.66,Z)-1.45*Math.pow(D(.62,1,Z),1.4),bottom:l+.85*Math.pow(D(.5,1,Z),1.6)}},G=Vr(a,l,c,1.3,.3);cc(o,G,S,rt,n.hull,H,40);let q=(()=>{let X=G.filter(([,j])=>j>=2.85),Z=[0,2.6],F=(j,_t)=>{let Ut=Math.hypot(j[0]-Z[0],j[1]-Z[1]);return[j[0]+(j[0]-Z[0])/Ut*_t,j[1]+(j[1]-Z[1])/Ut*_t]};return X.map(j=>F(j,.035)).concat(X.slice().reverse().map(j=>F(j,-.01)))})(),N=S+$*.2,E=S+$*.7;cc(o,q,N,E,n.glass,H,24,{bottom:l,top:c});let B=q.map(([X,Z])=>[X*1.004,Z+.004]);cc(o,B,N+(E-N)*.45,N+(E-N)*.45+.1,n.hullDark,H,2,{bottom:l,top:c}),At(r,u.right-u.left,u.ceiling-h,.08,n.interior,0,(u.ceiling+h)/2,u.front-.04);let Y=Vn.cockpitDoor;At(r,Y.right-Y.left-.2,Y.height,.06,n.hullDark,(Y.left+Y.right)/2,h+Y.height/2,u.front-.09),At(r,.25,.25,.05,n.glass,(Y.left+Y.right)/2,h+1.6,u.front-.13),[-1,1].forEach(X=>{At(o,.5,1,4,n.hullDark,X*(a+.2),.85,7.4,.2),[6,8.8].forEach(Z=>{Le(o,.07,.5,n.steel,X*(a+.2),.45,Z,"y",10),Le(o,.27,.22,n.rubber,X*(a+.2),.27,Z,"x",20)})}),Le(o,.07,.4,n.steel,0,.35,13.6,"y",10),Le(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let it=new zt,gt=Math.hypot(Vn.ramp.to-Vn.ramp.from,h);At(it,u.right-u.left,.12,gt,n.hullDark,0,-.06,-gt/2);for(let X=0;X<9;X++)At(it,u.right-u.left-.3,.025,.05,n.frame,0,.012,-.2-X*(gt-.4)/8);[-1,1].forEach(X=>At(it,.06,.18,gt,n.yellow,X*(u.right-.03),.09,-gt/2)),it.position.set(0,h,u.rear),it.rotation.x=t?-Math.atan2(h,Vn.ramp.to-Vn.ramp.from):Math.PI/2-.15,s.add(it);let W=a+.55,ut=x.front-x.rear-.15;for(let X=0;X<3;X++){let Z=h-(X+1)*h/3.2;At(s,.36,.05,ut,n.steel,a+.15+X*.32,Z,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(X=>ha(o,[[a+.05,h+.95,X],[a+.5,h+.7,X],[W+.4,.75,X]],.025,n.steel)),[-1,1].forEach(X=>At(X<0?r:o,.03,2.9,u.front-u.rear-.2,n.interior,X*(u.right-.015),h+1.6,(u.front+u.rear)/2));let vt=Vn.cells.cell,k=X=>u.front-(X-.5)*vt;Vn.seats.forEach(([X,Z])=>{let F=X==="A"?-1:1,j=F*(u.right-.35),_t=k(Z);At(s,.5,.1,.9,n.seat,j,h+.48,_t,.03),At(s,.1,.75,.9,n.seat,F*(u.right-.08),h+.95,_t,.03),At(s,.04,.45,.04,n.frame,j-F*.2,h+.22,_t-.38),At(s,.04,.45,.04,n.frame,j-F*.2,h+.22,_t+.38),At(s,.03,.6,.06,n.yellow,F*(u.right-.05),h+1,_t-.25)});let K=-vt,tt=vt,xt=k(2)-vt/2,st=u.front;[[K,xt,tt,xt],[K,xt,K,st-.1],[tt,xt,tt,st-.1]].forEach(([X,Z,F,j])=>{At(s,Math.max(.08,Math.abs(F-X)),.012,Math.max(.08,Math.abs(j-Z)),n.yellow,(X+F)/2,h+.036,(Z+j)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([X,Z])=>Le(s,.07,.03,n.steel,X,h+.045,Z,"y",12)),[-1,1].forEach(X=>{let Z=ai(o,[[2.55,c-.25],[4.9,c-.25],[3.55,c+1.35],[2.75,c+1.4]],.16,n.hull,0,.04);Z.rotation.z=X*-.18,Z.position.x+=X*1.55,At(o,.06,.06,.06,X<0?n.red:n.green,X*1.82,c+1.38,2.85)}),At(o,2.2,.5,4.2,n.hullDark,0,c+.12,7.3,.22),[-.6,.6].forEach(X=>At(o,.6,.12,.8,n.frame,X,c+.38,6,.04)),At(o,.08,.06,.08,n.white,0,c+.4,9.2);let R=a+.35+1.5,at=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([X,Z])=>{[-1,1].forEach(F=>{Zx(o,n,F,a-.1,R-1.45,at,X,Z),qx(o,n,F*R,at,X)})}),[-1,1].forEach(X=>{At(o,.02,.08,2.4,n.yellow,X*(a+.01),2.9,7.4),At(o,.02,.4,.4,n.white,X*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(X=>{if(!X.isMesh)return;let Z=new Hn().setFromObject(X).getSize(new L);Math.min(Z.x,Z.y,Z.z)>=.12&&!X.userData.hollow&&(X.userData.solid=!0)});let Q=new zt;return Q.add(s,r,o),Q}var ua={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},ed={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function $x(i,t,e,n,s,r,o,a){let l=Le(i,r,o,t.rubber,e,n,s,"x",28);Le(i,r*.62,o+.01,t.rim,e+a*.005,n,s,"x",20),Le(i,r*.2,o+.03,t.frame,e+a*.01,n,s,"x",12)}function od({type:i="suv",color:t="white",seed:e=1}={}){let n=ua[i],s=(d,f=.45,p=.35,x={})=>new Wt({color:d,roughness:f,metalness:p,...x}),r={body:s(ed[t]||ed.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new In({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new zt,a=n.width,l=n.length,c=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){ai(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),ai(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),ai(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let d of[[.26,.3],[1.6,1.68],[3.2,3.3]])At(o,a-.16,.62,d[1]-d[0]+.05,r.body,0,1.39,(d[0]+d[1])/2+(d[0]>3?.08:0));for(let d of[-1,1])At(o,.05,.05,2.2,r.trim,d*(a/2-.2),1.83,1.6)}else ai(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),ai(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),At(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,At(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),At(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);At(o,a+.04,.22,.18,r.trim,0,h+.3,l-.04,.05),At(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let d of[-1,1])At(o,.32,.12,.05,r.lamp,d*(a/2-.3),.9,l+.005,.02),At(o,.18,.26,.05,r.tail,d*(a/2-.15),i==="van"?1.2:.95,-.005,.02),At(o,.06,.12,.2,r.trim,d*(a/2+.06),i==="van"?1.75:1.2,l-(i==="van"?1.35:1.15),.02);At(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,l+.01,.02);let u=i==="van"?[.95,4.15]:[.9,3.8];for(let d of u)for(let f of[-1,1])$x(o,r,f*(a/2-.12),c,d,c,.26,f);if(At(o,a+.02,.08,l-.3,r.dust,0,h+.12,l/2),t==="police"){let d=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),p=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])At(o,.02,.16,l-.8,d,x*(a/2+.005),.78,l/2);At(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,l*.45),At(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,l*.45),At(o,.45,.12,.26,p,.3,i==="van"?2.3:1.95,l*.45)}return o}var tr=i=>Math.max(0,Math.min(255,Math.round(i)));function Dn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Wr(i,t=3,e=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Dn(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(u,d)=>(e?(u=(u+n)%n,d=(d+s)%s):(u=Math.max(0,Math.min(n-1,u)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+u)*4]/255);for(let u=0;u<s;u++)for(let d=0;d<n;d++){let f=(c(d+1,u)-c(d-1,u))*t,p=(c(d,u+1)-c(d,u-1))*t,x=Math.hypot(f,p,1),m=(u*n+d)*4;l.data[m]=(-f/x*.5+.5)*255,l.data[m+1]=(p/x*.5+.5)*255,l.data[m+2]=(1/x*.5+.5)*255,l.data[m+3]=255}return a.putImageData(l,0,0),Ce(o,{srgb:!1})}function er(i,t,e,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:l=0}={}){let c=_e(s),h=i.createImageData(t,e);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let f=d/t,p=u/e,x=Ci(f,p,a,4,s)*o,m=l?Math.max(0,Ci(f*7,.3,30,2,s+3))*l*(1-p):0,g=1+x-m+(c()-.5)*r/255,y=(u*t+d)*4;h.data[y]=tr(n[0]*g),h.data[y+1]=tr(n[1]*g),h.data[y+2]=tr(n[2]*g),h.data[y+3]=255}i.putImageData(h,0,0)}function ad(i,t){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,l=Dn(512,936),c=l.getContext("2d"),h=Dn(512,936),u=h.getContext("2d");er(c,512,936,r.base,{seed:11+t*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),u.fillStyle="#808080",u.fillRect(0,0,512,936);let d=_e(31+t*13+i.length);c.fillStyle=`rgb(${r.band.join(",")})`,c.fillRect(0,a(.3),512,.3*o),c.fillStyle=`rgb(${r.stripe.join(",")})`,c.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),u.fillStyle="#9a9a9a",u.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],p=a(1.22);c.fillStyle="rgba(30,32,34,0.75)",u.fillStyle="#202020";for(let g of f)c.fillRect(g-2,0,4,936),u.fillRect(g-2,0,4,936);c.fillRect(0,p-2,512,3),u.fillRect(0,p-2,512,3),c.fillStyle="rgba(255,255,255,0.25)";for(let g of f)c.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let y=30;y<a(.32);y+=54)for(let _ of[-9,9])c.fillStyle="rgba(60,62,64,0.8)",c.beginPath(),c.arc(g+_,y,2.6,0,Math.PI*2),c.fill(),u.fillStyle="#c8c8c8",u.beginPath(),u.arc(g+_,y,2.6,0,Math.PI*2),u.fill();if(i!=="inner"&&t===1){let y=a(1.95),_=512*.3;for(let M=0;M<7;M++)c.fillStyle="rgba(28,30,32,0.85)",c.fillRect(296.96,y+M*11,_,6),u.fillStyle="#303030",u.fillRect(296.96,y+M*11,_,6)}i!=="inner"&&t===2&&(c.fillStyle="rgba(40,44,46,0.9)",c.fillRect(512*.12,a(1.75),512*.22,.18*o),c.fillStyle="rgba(230,180,60,0.9)",c.font="bold 26px Arial",c.fillText("N8",512*.14,a(1.62)),u.fillStyle="#a8a8a8",u.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=c.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),c.fillStyle=x,c.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let y=d()*512,_=40+d()*300,M=c.createLinearGradient(0,0,0,_);M.addColorStop(0,"rgba(50,46,40,0.22)"),M.addColorStop(1,"rgba(50,46,40,0)"),c.fillStyle=M,c.fillRect(y,0,2+d()*5,_)}let m=Ce(l);return m.wrapS=m.wrapT=Ye,{map:m,normalMap:Wr(h,4,!1)}}function ld(){let t=Dn(512,512),e=t.getContext("2d"),n=Dn(512,512),s=n.getContext("2d");er(e,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=_e(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let l=(a+o)/16%2?.8:-.8;e.save(),e.translate(a,o),e.rotate(l),e.fillStyle="rgba(160,166,166,0.5)",e.fillRect(-5,-1.2,10,2.4),e.restore(),s.save(),s.translate(a,o),s.rotate(l),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}e.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])e.fillRect(o-1.5,0,3,512),e.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){e.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,e.lineWidth=.8;let a=r()*512,l=r()*512,c=r()*Math.PI,h=6+r()*30;e.beginPath(),e.moveTo(a,l),e.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),e.stroke()}return{map:Ce(t),normalMap:Wr(n,3)}}function cd(){let t=Dn(512,512),e=t.getContext("2d"),n=Dn(512,512),s=n.getContext("2d");er(e,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),e.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])e.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=_e(29);for(let o=0;o<60;o++){let a=r()*512,l=r()*512,c=10+r()*50,h=e.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),e.fillStyle=h,e.fillRect(a-c,l-c,c*2,c*2)}return{map:Ce(t),normalMap:Wr(n,2)}}function hd(){let t=Dn(256,256),e=t.getContext("2d"),n=Dn(256,256),s=n.getContext("2d");er(e,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)e.fillStyle="rgba(18,18,20,0.88)",e.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:Ce(t),normalMap:Wr(n,3)}}function ud(i=3){let n=Dn(512,256),s=n.getContext("2d"),r=Dn(512,256),o=r.getContext("2d");er(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=_e(i+5);for(let l=0;l<512;l++){let c=.5+.5*Math.sin(l/512*Math.PI*2*24);o.fillStyle=`rgb(${tr(c*255)},${tr(c*255)},${tr(c*255)})`,o.fillRect(l,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-c)*.18})`,s.fillRect(l,0,1,256)}for(let l=0;l<50;l++){let c=a()*512,h=a()*256,u=4+a()*22,d=s.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,"rgba(90,44,20,0.45)"),d.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=d,s.fillRect(c-u,h-u,u*2,u*2)}return{map:Ce(n),normalMap:Wr(r,5)}}function dd(i=7){let e=Dn(256,256),n=e.getContext("2d");return er(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:Ce(e)}}var fd=1.25,oe=.09,hc=new Map,sn=(i,t)=>(hc.has(i)||hc.set(i,t()),hc.get(i));function Jx(i,t){return sn("brushed"+i+(t?"v":"h"),()=>{let n=_e(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let l=0;l<900;l++){let c=n()*256,h=20+n()*200,u=n()*256,d=n();o.fillStyle=`rgba(${d>.5?230:150},${d>.5?232:154},${d>.5?236:158},0.10)`,a.fillStyle=`rgba(${d>.5?140:50},${d>.5?140:50},${d>.5?140:50},0.25)`,t?(o.fillRect(c,u,1,h),a.fillRect(c,u,1,h)):(o.fillRect(u,c,h,1),a.fillRect(u,c,h,1))}return{map:Ce(s,{repeat:1}),roughnessMap:Ce(r,{srgb:!1,repeat:1})}})}var uc=(i,t)=>(i.userData.envBoost=t,i),pd=(i=!1)=>sn("galleySteel"+i,()=>{let t=Jx(i?11:7,i),e=new Wt({color:15791094,map:t.map,roughnessMap:t.roughnessMap,roughness:.5,metalness:.6});return e.userData.envBoost=3.2,e}),Dt={steel:()=>pd(!1),steelVertical:()=>pd(!0),steelDark:()=>sn("galleySteelDark",()=>uc(new Wt({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>sn("galleyGroove",()=>new Wt({color:2764080,roughness:.6,metalness:.5})),plinth:()=>sn("galleyPlinth",()=>new Wt({color:2040357,roughness:.8,metalness:.2})),castIron:()=>sn("galleyIron",()=>new Wt({color:1842463,roughness:.75,metalness:.35})),knob:()=>sn("galleyKnob",()=>new Wt({color:1118740,roughness:.35,metalness:.3})),glass:()=>sn("galleyGlass",()=>new Wt({color:790290,roughness:.1,metalness:.4})),basin:()=>sn("galleyBasin",()=>uc(new Wt({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>sn("galleyChrome",()=>uc(new Wt({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>sn("galleyWhite",()=>new Wt({color:15263972,roughness:.5,metalness:.05})),display:()=>sn("galleyDisplay",()=>new Wt({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>sn("galleyLamp",()=>new Wt({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>sn("galleyRubber",()=>new Wt({color:1382170,roughness:.9})),red:()=>sn("galleyRed",()=>new Wt({color:11019292,roughness:.45,metalness:.3})),floor:()=>sn("galleyFloor",()=>{let t=_e(5),e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let l=0;l<s;l++){let c=214+Math.floor(t()*10);n.fillStyle=`rgb(${c},${c-2},${c-8})`,n.fillRect(l*r+3,a*r+3,r-6,r-6)}let o=Ce(e,{repeat:1});return new Wt({map:o,roughness:.35,metalness:0})})};function kt(i,t,e,n,s,r,o){let a=new wt(new pe(i,t,e),n);return a.position.set(s,r,o),a}function Xr(i,t,e,n,s,r,o=12){let a=new wt(new Ie(i,i,t,o),e);return a.position.set(n,s,r),a}function cs(i,t,e,n){let s=new L().subVectors(t,i),r=new wt(new Ie(e,e,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var Xt=.9,pn=.66,md=oe+pn;function Kx(i,t,e,n){let s=e-t,r=(t+e)/2;i.add(kt(s-.01,.1,pn-.06,Dt.plinth(),r,.05,oe+(pn-.06)/2)),i.add(kt(s-.01,Xt-.14,pn-.02,Dt.steelVertical(),r,.1+(Xt-.14)/2,oe+(pn-.02)/2));let o=Xt-.06,a=.12,l=oe+pn-.01,c=(d,f,p)=>i.add(kt(p?.12:.03,p?.03:.12,.012,Dt.groove(),d,f,l+.002)),h=d=>i.add(kt(.006,o-a,.006,Dt.groove(),d,(o+a)/2,l+.002)),u=(d,f,p)=>i.add(kt(p-f,.006,.006,Dt.groove(),(f+p)/2,d,l+.002));if(u(o,t,e),n==="drawers"){for(let f=1;f<3;f++)u(a+(o-a)*f/3,t+.01,e-.01);for(let f=0;f<3;f++)c(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),c(r-.05,o-.08,!1),c(r+.05,o-.08,!1)):n==="mixed"&&(u(o-.18,t+.01,e-.01),c(r,o-.07,!0),h(r),c(r-.05,o-.28,!1),c(r+.05,o-.28,!1));i.add(kt(s,.04,pn+.02,Dt.steel(),r,Xt-.02,oe+(pn+.02)/2)),i.add(kt(s,.05,.015,Dt.steel(),r,Xt-.035,md+.012)),i.add(kt(s,.1,.02,Dt.steel(),r,Xt+.05,oe+.01))}function gd(i,t,e,n){i.add(kt(e-t,n-Xt,.012,Dt.steelVertical(),(t+e)/2,(Xt+n)/2,oe+.006));for(let s=t+.6;s<e-.05;s+=.6)i.add(kt(.005,n-Xt,.004,Dt.groove(),s,(Xt+n)/2,oe+.013))}function jx(i,t,e){let o=(t+e)/2;i.add(kt(e-t-.01,2.15-1.5,.34,Dt.steelVertical(),o,(1.5+2.15)/2,oe+.34/2)),i.add(kt(.006,2.15-1.5-.02,.006,Dt.groove(),o,(1.5+2.15)/2,oe+.34+.002));for(let a of[-1,1])i.add(kt(.03,.1,.012,Dt.groove(),o+a*.05,1.5+.1,oe+.34+.004));i.add(kt(e-t-.1,.012,.04,Dt.lamp(),o,1.5-.007,oe+.34-.05))}function Qx(i,t,e){let n=e?[t-.2,t+.2]:[t];for(let a of n){i.add(kt(e?.36:.5,.012,.42,Dt.basin(),a,Xt-.14,oe+.36));for(let l of[-1,1])i.add(kt(.012,.14,.42,Dt.basin(),a+l*(e?.18:.25),Xt-.07,oe+.36));i.add(kt(e?.36:.5,.14,.012,Dt.basin(),a,Xt-.07,oe+.15)),i.add(kt(e?.36:.5,.14,.012,Dt.basin(),a,Xt-.07,oe+.57)),i.add(Xr(.025,.004,Dt.groove(),a,Xt-.132,oe+.36))}let s=t,r=oe+.08;i.add(Xr(.03,.06,Dt.chrome(),s,Xt+.03,r)),i.add(cs(new L(s,Xt+.06,r),new L(s,Xt+.48,r),.014,Dt.chrome()));let o=new wt(new Si(.12,.013,8,16,Math.PI),Dt.chrome());o.rotation.y=Math.PI/2,o.position.set(s,Xt+.48,r+.12),i.add(o),i.add(cs(new L(s,Xt+.48,r+.24),new L(s,Xt+.36,r+.24),.016,Dt.chrome())),i.add(kt(.012,.012,.08,Dt.chrome(),s+.04,Xt+.1,r+.03))}function t_(i,t){let e=new zt,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(Kx(e,.005,t-.005,s),gd(e,0,t,i.upper?1.5:1.45),i.upper&&jx(e,.005,t-.005),(n==="sink"||n==="sink2")&&Qx(e,t/2,n==="sink2"),n==="microwave"){let r=t/2,o=oe+.26;e.add(kt(.52,.3,.38,Dt.steel(),r,Xt+.15,o)),e.add(kt(.33,.21,.01,Dt.glass(),r-.07,Xt+.15,o+.19)),e.add(kt(.1,.21,.01,Dt.groove(),r+.18,Xt+.15,o+.19)),e.add(kt(.05,.015,.012,Dt.display(),r+.18,Xt+.24,o+.196))}if(n==="grinder"){let r=t/2-.1,o=oe+.3;e.add(kt(.22,.24,.36,Dt.steel(),r,Xt+.12,o)),e.add(Xr(.06,.2,Dt.chrome(),r,Xt+.3,o+.06)),e.add(kt(.26,.02,.22,Dt.chrome(),r,Xt+.41,o+.06)),e.add(kt(.04,.03,.03,Dt.red(),r+.12,Xt+.08,o+.19));let a=t/2+.22;e.add(kt(.16,.06,.26,Dt.white(),a,Xt+.03,o)),e.add(kt(.1,.3,.1,Dt.white(),a,Xt+.18,o-.08)),e.add(kt(.14,.08,.26,Dt.white(),a,Xt+.36,o)),e.add(Xr(.08,.12,Dt.chrome(),a,Xt+.12,o+.05))}return e}function e_(i,t){let e=new zt,n=t-.01,s=t/2;e.add(kt(n,.1,pn-.06,Dt.plinth(),s,.05,oe+(pn-.06)/2)),e.add(kt(n,Xt-.1,pn,Dt.steelVertical(),s,.1+(Xt-.1)/2,oe+pn/2));let r=md+.004;e.add(kt(n-.12,.46,.02,Dt.steel(),s,.42,r+.01)),e.add(kt(n-.34,.2,.01,Dt.glass(),s,.44,r+.022)),e.add(cs(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,Dt.chrome()));for(let h of[-1,1])e.add(kt(.015,.015,.05,Dt.chrome(),s+h*(n-.3)/2,.66,r+.035));e.add(kt(n-.06,.11,.02,Dt.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let u=new wt(new Ie(.022,.024,.03,14),Dt.knob());u.rotation.x=Math.PI/2,u.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),e.add(u)}e.add(kt(n,.02,pn,Dt.steelDark(),s,Xt-.01,oe+pn/2));for(let[h,u]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){e.add(Xr(.07,.015,Dt.castIron(),s+h,Xt+.007,oe+u,16));for(let d of[0,Math.PI/2]){let f=kt(.3,.018,.018,Dt.castIron(),s+h,Xt+.03,oe+u);f.rotation.y=d,e.add(f)}}gd(e,0,t,1.75);let a=1.78,l=2.25,c=.62;e.add(kt(t+.1,l-a-.12,c,Dt.steel(),s,l-(l-a-.12)/2,oe+c/2)),e.add(kt(t+.1,.12,.03,Dt.steel(),s,a+.06,oe+c-.015)),e.add(kt(t-.06,.012,c-.08,Dt.steelDark(),s,a+.01,oe+c/2));for(let h=0;h<9;h++)e.add(kt(.012,.02,c-.14,Dt.groove(),s-t*.4+t*.8*h/8,a+.02,oe+c/2-.02));for(let h of[-1,1])e.add(kt(.14,.008,.06,Dt.lamp(),s+h*t*.28,a+.004,oe+c-.08));return e}function n_(i,t){let e=new zt,n=t-.04,s=t/2,r=.72,o=2.02;e.add(kt(n,.08,r-.06,Dt.plinth(),s,.04,oe+(r-.06)/2)),e.add(kt(n,o-.08,r,Dt.steelVertical(),s,.08+(o-.08)/2,oe+r/2));let a=oe+r;e.add(kt(n-.02,.006,.006,Dt.groove(),s,1.25,a+.003)),e.add(kt(.006,o-.12,.006,Dt.groove(),s,.08+(o-.08)/2,a+.003));for(let l of[-1,1]){e.add(cs(new L(s+l*.06,.95,a+.045),new L(s+l*.06,1.55,a+.045),.012,Dt.chrome()));for(let c of[.95,1.55])e.add(kt(.015,.015,.045,Dt.chrome(),s+l*.06,c,a+.022))}return e.add(kt(.16,.06,.01,Dt.display(),s-n/4,1.82,a+.006)),e}function i_(i,t,e){let n=new zt,s=.2,r=t/2,o=e/2,a=t-s*2,l=e-s*2;n.add(kt(a-.08,.1,l-.08,Dt.plinth(),r,.05,o)),n.add(kt(a,Xt-.14,l,Dt.steelVertical(),r,.1+(Xt-.14)/2,o)),n.add(kt(a+.06,.06,l+.06,Dt.steel(),r,Xt-.06,o)),n.add(kt(a-.04,.02,l-.04,Dt.steelDark(),r,Xt-.025,o));let c=(a-.16)/2,h=(l-.16)/2;for(let p of[-1,1])for(let x of[-1,1]){let m=r+p*(c/2+.03),g=o+x*(h/2+.03);if(n.add(kt(c,.035,h,Dt.castIron(),m,Xt-.005,g)),p===x)for(let y=0;y<5;y++)n.add(kt(c*.5,.004,.012,Dt.groove(),m,Xt+.014,g-.08+y*.04))}let u=Xt+.06,d=.1,f=[[r-a/2-d,o-l/2-d],[r+a/2+d,o-l/2-d],[r+a/2+d,o+l/2+d],[r-a/2-d,o+l/2+d]];return f.forEach(([p,x],m)=>{let[g,y]=f[(m+1)%4];n.add(cs(new L(p,u,x),new L(g,u,y),.016,Dt.chrome())),n.add(cs(new L(p,Xt-.05,x),new L(p,u+.03,x),.02,Dt.chrome()));let _=new L(Math.sign(r-p)*d,0,Math.sign(o-x)*d);n.add(cs(new L(p,Xt-.05,x),new L(p+_.x,Xt-.05,x+_.z),.015,Dt.chrome()))}),n}function s_(i,t,e){let n=new zt,s=Dt.floor().clone();s.map=s.map.clone(),s.map.repeat.set(t/1.2,e/1.2),s.map.needsUpdate=!0;let r=kt(t-.02,.006,e-.02,s,t/2,.05,e/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,l,c]=i.drain;n.add(kt(l-o,.004,c-a,Dt.groove(),(o+l)/2,.055,(a+c)/2));let h=l-o>c-a,u=Math.floor((h?l-o:c-a)/.03);for(let d=0;d<u;d++){let f=(d+.5)/u;n.add(h?kt(.008,.005,c-a-.01,Dt.steelDark(),o+(l-o)*f,.058,(a+c)/2):kt(l-o-.01,.005,.008,Dt.steelDark(),(o+l)/2,.058,a+(c-a)*f))}}return n}function dc(i,t,e,n){let s=i.face||"N",r=s==="N"||s==="S"?t:e,o=s==="N"||s==="S"?e:t,a=n(i,r,o),l=new zt;a.position.set(-r/2,0,-o/2),l.add(a),l.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],l.position.set(t/2,0,e/2);let c=new zt;return c.add(l),c}var xd=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function _d(i){let t=i.cols*fd,e=i.rows*fd;switch(i.kind){case"galleyCounter":return dc(i,t,e,t_);case"galleyRange":return dc(i,t,e,e_);case"galleyFridge":return dc(i,t,e,n_);case"galleyIsland":return i_(i,t,e);case"galleyFloor":return s_(i,t,e);default:return null}}var mn=i=>Math.max(0,Math.min(255,Math.round(i))),me=(i,t,e)=>new L(i,t,e),fc=new Map,Wn=(i,t)=>(fc.has(i)||fc.set(i,t()),fc.get(i)),Ue=(i,t)=>Wn("city_"+i,()=>new Wt(t));function ci(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function fa(i,t=3,e=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=ci(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(h,u)=>(e?(h=(h+n)%n,u=(u+s)%s):(h=Math.max(0,Math.min(n-1,h)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+h)*4]/255);for(let h=0;h<s;h++)for(let u=0;u<n;u++){let d=(c(u+1,h)-c(u-1,h))*t,f=(c(u,h+1)-c(u,h-1))*t,p=Math.hypot(d,f,1),x=(h*n+u)*4;l.data[x]=(-d/p*.5+.5)*255,l.data[x+1]=(f/p*.5+.5)*255,l.data[x+2]=(1/p*.5+.5)*255,l.data[x+3]=255}return a.putImageData(l,0,0),Ce(o,{srgb:!1})}function us(i,t,e,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:l=4}={}){let c=_e(s),h=i.createImageData(t,e);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let p=1+Ci(d/t,u/e,a,l,s)*o+(c()-.5)*r/255,x=(u*t+d)*4;h.data[x]=mn(n[0]*p),h.data[x+1]=mn(n[1]*p),h.data[x+2]=mn(n[2]*p),h.data[x+3]=255}i.putImageData(h,0,0)}var da=(i,t=1)=>`rgba(${i[0]},${i[1]},${i[2]},${t})`,mc={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},gc=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Ed=i=>{let[t,e]=i.split("_");return{base:t,role:e,colors:mc[t]}};function r_(i,t){let{base:e,role:n,colors:s}=Ed(i),r=512,o=936,a=o/2.28,l=x=>o-x*a,c=ci(r,o),h=c.getContext("2d"),u=ci(r,o),d=u.getContext("2d");us(h,r,o,s.wall,{seed:41+t*5+e.length*3,grain:e==="bank"?14:8,dirt:.08,scale:3}),d.fillStyle="#808080",d.fillRect(0,0,r,o);let f=_e(61+t*11+e.length);if(e==="police"&&n!=="g"){let x=.075*a,m=.26*a;for(let g=0;g*x<o;g++){let y=o-(g+1)*x,_=g%2?m/2:0;for(let M=-_;M<r;M+=m){let I=.86+f()*.26;h.fillStyle=da(s.wall.map(P=>mn(P*I))),h.fillRect(M+2,y+2,m-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,y,r,2.5),d.fillStyle="#505050",d.fillRect(0,y,r,3);for(let M=-_;M<r;M+=m)h.fillRect(M,y,2.5,x),d.fillRect(M,y,3,x)}}if(n==="g"||e==="bank"){let m=e==="police"?[212,204,188]:null;m&&us(h,r,o,m,{seed:71+t,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let y=l(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,y-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,y+3,r,2),d.fillStyle="#202020",d.fillRect(0,y-3,r,7),e==="bank"){let _=.62*a,M=g%2?_/2:0;for(let I=M;I<r;I+=_)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(I-1.5,y,3,.32*a),d.fillStyle="#303030",d.fillRect(I-2,y,4,.32*a)}}}for(let x=0;x<8;x++){let m=f()*r,g=60+f()*240,y=h.createLinearGradient(0,0,0,g);y.addColorStop(0,"rgba(70,60,50,0.12)"),y.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=y,h.fillRect(m,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,l(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,l(.9),r,.9*a)}let p=Ce(c);return p.wrapS=p.wrapT=Ye,{map:p,normalMap:fa(u,4,!1)}}function yd(i,t="plaster"){let s=410.5263157894737,r=ci(512,936),o=r.getContext("2d"),a=ci(512,936),l=a.getContext("2d");if(l.fillStyle="#808080",l.fillRect(0,0,512,936),t==="vault"){us(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",l.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),l.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),l.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let u=24;u<512;u+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(u,h,4,0,Math.PI*2),o.fill(),l.fillStyle="#d0d0d0",l.beginPath(),l.arc(u,h,4,0,Math.PI*2),l.fill()}else us(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),l.fillStyle="#b0b0b0",l.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),l.fillStyle="#a0a0a0",l.fillRect(0,936-.95*s,512,6);let c=Ce(r);return c.wrapS=c.wrapT=Ye,{map:c,normalMap:fa(a,3,!1)}}var lt={facade:(i,t)=>Wn(`facade_${i}_${t}`,()=>{let e=r_(i,t);return new Wt({map:e.map,normalMap:e.normalMap,roughness:.85,metalness:0})}),plaster:i=>Wn("plaster"+i,()=>{let t=yd(i);return new Wt({map:t.map,normalMap:t.normalMap,roughness:.9})}),vault:()=>Wn("vaultWall",()=>{let i=yd(0,"vault");return new Wt({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Ue("trim_"+i,{color:new Jt().setRGB(...mc[i].trim.map(t=>(t/255)**2.2)),roughness:.75}),plinth:i=>Ue("plinth_"+i,{color:new Jt().setRGB(...mc[i].plinth.map(t=>(t/255)**2.2)),roughness:.9}),glass:()=>Wn("city_glass",()=>new In({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Ue("frame",{color:15789282,roughness:.6}),wood:()=>Ue("wood",{color:5913124,roughness:.65}),darkWood:()=>Ue("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Ue("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Ue("greenDoor",{color:2375726,roughness:.55}),iron:()=>Ue("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Ue("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Ue("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Ue("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Ue("stone",{color:13156528,roughness:.85}),granite:()=>Ue("granite",{color:9078402,roughness:.8}),ceiling:()=>Ue("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Ue("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Ue("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Ue("fabric"+i,{color:i,roughness:.95}),paint:i=>Ue("paint"+i,{color:i,roughness:.6}),water:()=>Wn("city_water",()=>new In({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>Wn("city_spray",()=>new Wt({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>Wn("leaves"+i,()=>new Wt({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Ue("sandFill",{color:14073994,roughness:1})};function o_(i){let e=ci(512,512),n=e.getContext("2d"),s=ci(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=_e(i.length*17+3);if(i==="parquet"){us(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,l=a/5;for(let c=-12;c<30;c++)for(let h=-2;h<14;h++)for(let u of[0,1]){let d=.8+o()*.35;n.save(),n.translate(c*l*2+h*0+u*l,h*a-c*l*0),n.rotate(u?Math.PI/4:-Math.PI/4),n.fillStyle=da([mn(158*d),mn(106*d),mn(64*d)]),n.fillRect(0,0,a*.7,l*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let c=0;c<512;c+=l*1.41)n.beginPath(),n.moveTo(0,c),n.lineTo(512,c+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let l=0;l<2;l++){let c=(l+a)%2===0;n.fillStyle=c?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(l*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*512,c=o()*512;n.moveTo(l,c);for(let h=0;h<6;h++)l+=(o()-.3)*60,c+=(o()-.5)*50,n.lineTo(l,c);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){us(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=.92+o()*.12;n.fillStyle=(c+l)%2?`rgba(${mn(110*h)},${mn(116*h)},${mn(110*h)},1)`:`rgba(${mn(206*h)},${mn(204*h)},${mn(192*h)},1)`,n.fillRect(c*512/a+1,l*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let l=0;l<=512;l+=512/a)r.fillRect(l-1,0,2,512),r.fillRect(0,l-1,512,2)}else{us(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let l=8+a/16%2*8;l<512;l+=16)n.save(),n.translate(l,a),n.rotate((l+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(l,a),r.rotate((l+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:Ce(e),normalMap:fa(s,2)}}function wd(i){return Wn("floor_"+i,()=>{let t=o_(i);return new Wt({map:t.map,normalMap:t.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function Pt(i,t,e,n,s,r,o){let a=new wt(new pe(i,t,e),n);return a.position.set(s,r,o),a}function Nn(i,t,e,n,s,r,o,a=16){let l=new wt(new Ie(i,t,e,a),n);return l.position.set(s,r,o),l}function wn(i,t,e,n,s,r=32){let o=new wt(new Qi(i.map(([a,l])=>new pt(a,l)),r),t);return o.position.set(e,n,s),o}function Yr(i,t,e,n){let s=new qe;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,t),s.closePath();let r=new ln(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new wt(r,n)}var pc=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Sd(i,t,e,n,s,r,o){let{wallBox:a,isIndoor:l,THICK:c,PANEL_H:h}=o,u=new zt,d=s.type,f=s.style,p=r?.8:h,x=c/2,m=(t*73856093^e*19349663^n*83492791)>>>0,g=l(n,t,e),y=i==="W"?l(n,t-1,e):l(n,t,e-1),_=gc(f)?Ed(f):null,M=$=>f==="vault"?lt.vault():!_||$?lt.plaster(m%3):lt.facade(f,m%3),I=_?lt.trim(_.base):lt.slabEdge(),P=M(g),C=M(y),v=i==="W"?[P,C,I,I,I,I]:[I,I,I,I,P,C],z=_?g?-1:1:0,b=n*ce,S=($,D,H,G,q,N,E)=>{let B=N-q,Y=z*(c/2+(q+N)/2),it=i==="W"?new pe(B,G-H,D-$):new pe(D-$,G-H,B),gt=new wt(it,E);return i==="W"?gt.position.set(t*U+Y,b+(H+G)/2,e*U+($+D)/2):gt.position.set(t*U+($+D)/2,b+(H+G)/2,e*U+Y),u.add(gt),gt},rt=($,D,H,G)=>{let q=new ln($,{depth:H-D,bevelEnabled:!1,curveSegments:16});(i==="W"?z<0:z>0)?q.translate(0,0,c/2+D):q.translate(0,0,-(c/2+H)),i==="W"&&q.rotateY(-Math.PI/2);let E=new wt(q,G);return E.position.set(t*U,b,e*U),u.add(E),E};if(d==="rail"){let $=f==="fence",D=$?lt.fenceGreen():lt.iron(),H=$?1.1:.95,G=(q,N,E,B,Y,it=D)=>u.add(a(i,t,e,n,q,N,E,B,Array(6).fill(it),Y));for(let q of[0,U])G(q-.03,q+.03,0,H+.04,.06);G(0,U,H-.04,H,.05,$?D:lt.darkWood()),G(0,U,.08,.12,.035),$&&G(0,U,H-.3,H-.27,.03);for(let q=.1;q<U-.05;q+=.12)G(q-.009,q+.009,.1,H-($?-.06:.02),.018),$&&G(q-.02,q+.02,H+.02,H+.07,.025);return u}if(d==="wall")u.add(a(i,t,e,n,-x,U+x,0,p,v));else if(d==="door"){let D=Math.min(2.1,p),H=(U-.92)/2,G=(U+.92)/2;u.add(a(i,t,e,n,-x,H,0,p,v)),u.add(a(i,t,e,n,G,U+x,0,p,v)),p>D+.01&&u.add(a(i,t,e,n,H,G,D,p,v));let q=f==="vault"?lt.steel():lt.wood(),N=Array(6).fill(q),E=f==="vault"?.12:.06;if(u.add(a(i,t,e,n,H-E,H,0,D,N,c+.05)),u.add(a(i,t,e,n,G,G+E,0,D,N,c+.05)),p>D+.01&&u.add(a(i,t,e,n,H-E,G+E,D,D+E,N,c+.05)),u.add(a(i,t,e,n,H,G,0,.03,Array(6).fill(lt.stone()),c+.1)),_&&!r){let B=lt.trim(_.base);if(S(H-.16,H-.04,0,D+.1,0,.05,B),S(G+.04,G+.16,0,D+.1,0,.05,B),S(H-.16,G+.16,D+.04,D+.16,0,.05,B),D+.42<p){S(H-.26,G+.26,D+.26,D+.34,0,.22,B);for(let Y of[H-.18,G+.18])S(Y-.05,Y+.05,D+.12,D+.26,0,.16,B)}}}else{let $=_&&_.base==="bank"&&_.role==="g",D=.78,H=$?.62:_&&_.role==="g"?.75:.7,G=$?2.08:2,q=(U-D)/2,N=(U+D)/2,E=$?G-D/2:G;if(r)u.add(a(i,t,e,n,-x,U+x,0,p,v));else{if(u.add(a(i,t,e,n,-x,q,0,p,v)),u.add(a(i,t,e,n,N,U+x,0,p,v)),u.add(a(i,t,e,n,q,N,0,H,v)),u.add(a(i,t,e,n,q,N,G,p,v)),$){let it=new qe;it.moveTo(q,E),it.lineTo(q,G),it.lineTo(N,G),it.lineTo(N,E),it.absarc(U/2,E,D/2,0,Math.PI,!1);let gt=new ln(it,{depth:c,bevelEnabled:!1,curveSegments:16});gt.translate(0,0,-c/2),i==="W"&&gt.rotateY(-Math.PI/2);let W=new wt(gt,z?lt.facade(f,m%3):v[i==="W"?0:4]);W.position.set(t*U,b,e*U),u.add(W)}let B=Array(6).fill(lt.glass()),Y=Array(6).fill(lt.frame());if(u.add(a(i,t,e,n,q+.03,N-.03,H,$?E+D/2-.02:G,B,.03)),u.add(a(i,t,e,n,q,q+.05,H,E,Y,.08)),u.add(a(i,t,e,n,N-.05,N,H,E,Y,.08)),u.add(a(i,t,e,n,q,N,H,H+.05,Y,.08)),$||u.add(a(i,t,e,n,q,N,G-.05,G,Y,.08)),u.add(a(i,t,e,n,U/2-.022,U/2+.022,H,$?E+D/2-.04:G,Y,.06)),u.add(a(i,t,e,n,q,N,H+(E-H)*.68-.02,H+(E-H)*.68+.02,Y,.06)),_){let it=lt.trim(_.base);if(S(q-.1,N+.1,H-.07,H,0,.1,it),$||(S(q-.1,q,H,G+.08,0,.04,it),S(N,N+.1,H,G+.08,0,.04,it),S(q-.1,N+.1,G,G+.08,0,.04,it)),_.role==="u"&&["bank","pink","cream"].includes(_.base)||_.role==="t"&&_.base==="bank"){let W=new qe;W.moveTo(q-.16,G+.1),W.lineTo(N+.16,G+.1),W.lineTo(U/2,G+.27),W.closePath(),rt(W,0,.1,it)}else _.role==="u"||_.role==="t"?S(q-.15,N+.15,G+.1,G+.17,0,.12,it):_.role==="g"&&!$&&S(U/2-.07,U/2+.07,G-.02,G+.16,0,.06,it);if($){let W=new qe;W.absarc(U/2,E,D/2+.1,0,Math.PI,!1),W.lineTo(q,E),W.absarc(U/2,E,D/2,Math.PI,0,!0),W.closePath(),rt(W,0,.05,it),S(U/2-.07,U/2+.07,G-.06,G+.14,0,.08,it),S(q-.1,q,H,E,0,.05,it),S(N,N+.1,H,E,0,.05,it);let ut=lt.iron();for(let vt=1;vt<6;vt++){let k=q+vt*D/6,K=Math.sqrt(Math.max(0,(D/2)**2-(k-U/2)**2));S(k-.01,k+.01,H,E+K-.03,-.06,-.04,ut)}for(let vt of[H+.35,H+.8])S(q+.02,N-.02,vt,vt+.02,-.065,-.035,ut)}if(_.role!=="g"&&_.base==="bank"){let W=lt.iron();S(q-.08,N+.08,H-.12,H-.07,0,.32,lt.stone()),S(q-.06,N+.06,H+.42,H+.45,.28,.31,W);for(let ut=0;ut<=8;ut++){let vt=q-.04+ut*(D+.08)/8;S(vt-.008,vt+.008,H-.07,H+.43,.285,.305,W)}}}}}if(_&&!r){let $=lt.trim(_.base);if(_.role==="g"&&S(-x,U+x,0,.5,0,.05,lt.plinth(_.base)),_.role==="t"){S(-x-.02,U+x+.02,h-.16,h+.02,0,.08,$),S(-x-.06,U+x+.06,h+.02,h+.12,0,.18,$),S(-x-.1,U+x+.1,h+.12,h+.24,0,.32,$);for(let D=.16;D<U;D+=.31)S(D-.04,D+.04,h-.02,h+.12,.08,.26,$)}else S(-x-.02,U+x+.02,h-.08,h+.24,0,.06,$),S(-x-.03,U+x+.03,h+.18,h+.24,0,.1,$)}else _&&r&&_.role==="g"&&S(-x,U+x,0,.5,0,.05,lt.plinth(_.base));return u}function Td(i,t,e,n,s,r,o,a,l){let{wallBox:c}=l,h=new zt,u=o-.01;if(a==="vault"){let m=Array(6).fill(lt.steel());h.add(c(i,t,e,n,s-.02,r+.02,.01,u,m,.2));let g=(s+r)/2;for(let y of[.26])h.add(c(i,t,e,n,g-.3,g+.3,u*.45,u*.45+.04,Array(6).fill(lt.brass()),y));return h.add(c(i,t,e,n,g-.02,g+.02,u*.45-.28,u*.45+.32,Array(6).fill(lt.brass()),.26)),h.add(c(i,t,e,n,s+.05,s+.1,.2,u-.2,Array(6).fill(lt.iron()),.24)),h}let d=a==="outer",f=Array(6).fill(d?lt.greenDoor():lt.wood()),p=Array(6).fill(lt.darkWood()),x=(s+r)/2;h.add(c(i,t,e,n,s-.02,r+.02,.01,u,f,.06)),h.add(c(i,t,e,n,x-.01,x+.01,.01,u,p,.075));for(let[m,g]of[[s+.06,x-.06],[x+.06,r-.06]])u>1&&h.add(c(i,t,e,n,m,g,.15,Math.min(.85,u-.1),p,.072)),u>1.9&&(d?h.add(c(i,t,e,n,m+.02,g-.02,1.05,u-.15,Array(6).fill(lt.glass()),.074)):h.add(c(i,t,e,n,m,g,1,u-.15,p,.072)));for(let m of[-1,1])h.add(c(i,t,e,n,x+m*.06-.015,x+m*.06+.015,Math.min(1,u-.1),Math.min(1.12,u-.05),Array(6).fill(lt.brass()),.09));return h}var Ad=()=>({body:lt.stone(),tread:lt.lightWood(),nosing:lt.darkWood(),rail:lt.iron(),handrail:lt.darkWood()});function a_(i){let n=ci(512,512),s=n.getContext("2d"),r=ci(512,512),o=r.getContext("2d"),a=_e(i==="slate"?501:503),l=512/(i==="slate"?10:8),c=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=da(h),s.fillRect(0,0,512,512);for(let f=0;f<512/c;f++){let p=f%2?l/2:0;for(let x=-p;x<512;x+=l){let m=.8+a()*.32,g=f*c,y=o.createLinearGradient(0,g,0,g+c);y.addColorStop(0,"#404040"),y.addColorStop(1,"#c8c8c8"),o.fillStyle=y,o.fillRect(x+1,g,l-2,c),s.fillStyle=da(h.map(_=>mn(_*m))),i==="slate"?s.fillRect(x+1,g+1,l-2,c-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+l-1,g),s.lineTo(x+l-1,g+c*.75),s.quadraticCurveTo(x+l/2,g+c*1.05,x+1,g+c*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+c-2,l,2)}}for(let f=0;f<40;f++){let p=a()*512,x=a()*512,m=10+a()*40,g=s.createRadialGradient(p,x,0,p,x,m);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(p-m,x-m,m*2,m*2)}let u=Ce(n),d=fa(r,3);for(let f of[u,d])f.wrapS=f.wrapT=$i;return{map:u,normalMap:d}}var vd=i=>Wn("roofMat_"+i,()=>{let t=a_(i);return new Wt({map:t.map,normalMap:t.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:en})});function Un(i,t,e){let n=new Ae,s=i[0],r=t.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),l=[],c=[];for(let u of i){l.push(u.x,u.y,u.z);let d=new L().subVectors(u,s);c.push(d.dot(r)/(2*U),d.dot(a)/(2*U))}let h=[];for(let u=1;u<i.length-1;u++)h.push(0,u,u+1);return n.setAttribute("position",new ne(l,3)),n.setAttribute("uv",new ne(c,2)),n.setIndex(h),n.computeVertexNormals(),new wt(n,e)}function Md(i,t,e,n,s,r,o,a){let l=n-t,c=s-e,h=Math.min(l,c)/2,u=h*Math.tan(o),d=l>=c,f=d?[me(t+h,r+u,(e+s)/2),me(n-h,r+u,(e+s)/2)]:[me((t+n)/2,r+u,e+h),me((t+n)/2,r+u,s-h)],p={nw:me(t,r,e),ne:me(n,r,e),se:me(n,r,s),sw:me(t,r,s)};d?(i.add(Un([p.sw,p.se,f[1],f[0]],me(1,0,0),a)),i.add(Un([p.ne,p.nw,f[0],f[1]],me(-1,0,0),a)),i.add(Un([p.se,p.ne,f[1]],me(0,0,-1),a)),i.add(Un([p.nw,p.sw,f[0]],me(0,0,1),a))):(i.add(Un([p.se,p.ne,f[0],f[1]],me(0,0,-1),a)),i.add(Un([p.nw,p.sw,f[1],f[0]],me(0,0,1),a)),i.add(Un([p.sw,p.se,f[1]],me(1,0,0),a)),i.add(Un([p.ne,p.nw,f[0]],me(-1,0,0),a)));let x=a,m=(g,y)=>{let _=new L().subVectors(y,g),M=new wt(new Ie(.07,.07,_.length(),8),x);M.position.copy(g).addScaledVector(_,.5),M.quaternion.setFromUnitVectors(me(0,1,0),_.normalize()),i.add(M)};return m(f[0],f[1]),m(p.nw,f[0]),m(p.sw,f[0]),m(p.ne,f[1]),m(p.se,f[1]),{height:u,along:d,half:h}}function bd(i,t,e,n,s,r,o,a=1){let l=new zt,c=1*a,h=1.15*a,u=1.6*a;l.add(Pt(c,h,u,r,0,h/2,-u/2)),l.add(Pt(c*.56,h*.6,.04,lt.glass(),0,h*.45,.01)),l.add(Pt(c*.66,.06,.06,lt.frame(),0,h*.14,.02)),l.add(Pt(.04,h*.6,.05,lt.frame(),0,h*.45,.02));let d=Yr(c+.24,.55*a,u+.15,o);d.position.set(0,h,-u/2+.07),l.add(d);let f=Yr(c+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),l.add(f),l.position.set(t,n,e),l.rotation.y=Math.atan2(s.x,s.z),i.add(l)}var li=i=>(i+.5)*U;function l_(i){let t=i.cols*U,e=i.rows*U;if(i.type==="mansard"){let c={x0:-.2,z0:-.2,x1:t+.2,z1:e+.2},h=(47-i.col)*U+U/2,u=[],d=.75*.36;for(let p=1;p<i.cols-1;p+=2){let x=li(p);Math.abs(x-h)<5.2||u.push({x,z:c.z1-d,facing:"S"},{x,z:c.z0+d,facing:"N"})}for(let p=1;p<i.rows-1;p+=2)u.push({x:c.x1-d,z:li(p),facing:"E"},{x:c.x0+d,z:li(p),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([p,x])=>({x:li(Math.floor(i.cols*p)),z:li(Math.floor(i.rows*x))}));return{...c,width:t,depth:e,dormers:u,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:e-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:t+n,z1:e+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let c=0;c<i.cols;c++){let h=li(c);c%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let c=0;c<i.rows;c++){let h=li(c);c%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let l=[0,1,2].map(c=>({x:li(Math.floor(i.cols*(.25+c*.25))),z:li(Math.floor(i.rows*(.42+c%2*.16)))}));return{...r,width:t,depth:e,along:o,run:s,dormers:a,chimneys:l,pediment:null}}function c_(i){let t=l_(i),e={S:me(0,0,1),N:me(0,0,-1),E:me(1,0,0),W:me(-1,0,0)},n=new zt,s=i.cols*U,r=i.rows*U,o=.42,a=_e(i.col*31+i.row*17),l=lt.trim(i.facade||"cream");if(i.type==="mansard"){let c=vd("slate"),h=.75,u=2.3,d=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},p={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(z,b,S)=>me(z,b,S),m=d+u;n.add(Un([x(f.x0,d,f.z1),x(f.x1,d,f.z1),x(p.x1,m,p.z1),x(p.x0,m,p.z1)],me(1,0,0),c)),n.add(Un([x(f.x1,d,f.z0),x(f.x0,d,f.z0),x(p.x0,m,p.z0),x(p.x1,m,p.z0)],me(-1,0,0),c)),n.add(Un([x(f.x1,d,f.z1),x(f.x1,d,f.z0),x(p.x1,m,p.z0),x(p.x1,m,p.z1)],me(0,0,-1),c)),n.add(Un([x(f.x0,d,f.z0),x(f.x0,d,f.z1),x(p.x0,m,p.z1),x(p.x0,m,p.z0)],me(0,0,1),c)),Md(n,p.x0,p.z0,p.x1,p.z1,m,.07,c),n.add(Pt(p.x1-p.x0+.1,.1,.12,lt.steel(),(p.x0+p.x1)/2,m+.05,p.z1)),n.add(Pt(p.x1-p.x0+.1,.1,.12,lt.steel(),(p.x0+p.x1)/2,m+.05,p.z0));let g=d+.35;for(let z of t.dormers)bd(n,z.x,z.z,g,e[z.facing],l,c,.95);let y=(47-i.col)*U+U/2,_=r+.12,M=Yr(9.2,2.3,.5,l);M.position.set(y,d-.02,_-.05),n.add(M);let I=Yr(8.2,1.85,.12,lt.facade("bank_u",1));I.position.set(y,d+.16,_+.22),n.add(I);let P=Math.atan2(2.3,4.6),C=Math.hypot(4.6,2.3)+.3;for(let z of[-1,1]){let b=Pt(C,.2,.7,l,y+z*2.3,d+1.15,_+.02);b.rotation.z=-z*P,n.add(b)}n.add(Pt(9.6,.22,.75,l,y,d+.02,_+.02));let v=new wt(new Ie(.42,.42,.12,32),lt.brass());v.rotation.x=Math.PI/2,v.scale.set(1,1,.72),v.position.set(y,d+.85,_+.32),n.add(v);for(let z of[-4.6,0,4.6])n.add(wn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],l,y+z,z?d+.2:d+2.4,_+.05,12));for(let{x:z,z:b}of t.chimneys)n.add(Pt(.7,1.3,.5,lt.facade("bank_t",0),z,m+.6,b)),n.add(Pt(.84,.12,.64,l,z,m+1.28,b))}else{let c=vd("tile"),h=-o,u=-o,d=s+o,f=r+o,p=.22,x=Md(n,h,u,d,f,p,.52,c);n.add(Pt(d-h,.14,.06,lt.darkWood(),(h+d)/2,p-.04,f)),n.add(Pt(d-h,.14,.06,lt.darkWood(),(h+d)/2,p-.04,u)),n.add(Pt(.06,.14,f-u,lt.darkWood(),d,p-.04,(u+f)/2)),n.add(Pt(.06,.14,f-u,lt.darkWood(),h,p-.04,(u+f)/2)),n.add(Pt(d-h,.03,f-u,lt.darkWood(),(h+d)/2,p-.1,(u+f)/2));for(let y of[u,f]){let _=Nn(.06,.06,d-h,lt.iron(),(h+d)/2,p-.02,y,8);_.rotation.z=Math.PI/2,n.add(_)}let m=Math.tan(.52),g=t.run;for(let y of t.dormers)bd(n,y.x,y.z,p+(g-.75)*m,e[y.facing],l,c);for(let y=0;y<t.chimneys.length;y++){let{x:_,z:M}=t.chimneys[y],I=p+Math.min(Math.min(_-h,d-_),Math.min(M-u,f-M))*m,P=lt.facade("police_u",y%3);n.add(Pt(.6,x.height-(I-p)+1.1,.5,P,_,I+(x.height-(I-p)+1.1)/2-.2,M)),n.add(Pt(.72,.1,.62,lt.stone(),_,p+x.height+.95,M))}}return n}function xc(i,t,e=2){let n=new es(i,e),s=n.attributes.position,r=_e(t),o=[],a=r()*10;for(let l=0;l<s.count;l++){let c=me(s.getX(l),s.getY(l),s.getZ(l)),h=1+.18*Math.sin(c.x*5+a)*Math.sin(c.y*4.3+a*.7)*Math.sin(c.z*4.7)+(r()-.5)*.12;c.multiplyScalar(h),s.setXYZ(l,c.x,c.y,c.z);let u=.75+.25*(c.y/i)+(r()-.5)*.25;o.push(u,u,u)}return n.setAttribute("color",new ne(o,3)),n.computeVertexNormals(),n}function _c(i){return Wn("leafTint"+i,()=>new Wt({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function h_(i,t,e){let n=new zt,s=_e(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Ue("bark",{color:4864556,roughness:.95});n.add(Nn(.11,.17,o+.6,a,t,(o+.6)/2,e,10));for(let h=0;h<3;h++){let u=s()*Math.PI*2,d=Nn(.04,.07,1.2,a,t+Math.cos(u)*.3,o+.6,e+Math.sin(u)*.3,6);d.rotation.set(Math.sin(u)*.6,0,-Math.cos(u)*.6),n.add(d)}let l=_c(r?6195776:4880954),c=r?7:6;for(let h=0;h<c;h++){let u=h/c*Math.PI*2+s(),d=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,p=new wt(xc(f,i.col*101+h*17+i.row),l);p.position.set(t+Math.cos(u)*d,o+1.25+(h===0?.4:(s()-.3)*.9),e+Math.sin(u)*d),n.add(p)}return n}function u_(i,t,e){let n=new zt,s=_c(4616250);for(let r=0;r<3;r++){let o=new wt(xc(.5,e*7+r,2),s);o.scale.set(i/2.4,.95,t/1.25),o.position.set(i*(.2+r*.3),.5,t/2),n.add(o)}return n}function hs(i,t,e,n){let s=new zt;return s.add(i),i.position.set(-e,0,-n),s.rotation.y=-(t.rotation||0)*Math.PI/2,s.position.set(e,0,n),s}function Rd(i){let t=i.cols*U,e=i.rows*U,n=t/2,s=e/2,r=new zt,o=l=>(r.add(l),l),a=_e(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return c_(i);case"tree":return h_(i,n,s);case"hedge":return u_(t,e,i.col+i.row*3);case"bench":{let l=new zt;for(let c of[.18,U-.18])l.add(Pt(.05,.45,.42,lt.iron(),c,.22,.45)),l.add(Pt(.05,.5,.05,lt.iron(),c,.7,.26));for(let c=0;c<4;c++)l.add(Pt(U-.12,.035,.08,lt.lightWood(),U/2,.46,.32+c*.1));for(let c=0;c<3;c++)l.add(Pt(U-.12,.08,.03,lt.lightWood(),U/2,.62+c*.12,.25));return hs(l,i,n,s)}case"bin":return o(wn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],lt.iron(),n,0,s,16)),r;case"streetLamp":return o(wn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],lt.iron(),n,0,s,12)),o(wn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],lt.lantern(),n,3.5,s,6)),o(wn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],lt.iron(),n,4,s,6)),r;case"column":return o(Pt(.66,.16,.66,lt.stone(),n,.08,s+.05)),o(wn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],lt.stone(),n,.16,s+.05,24)),o(Nn(.21,.24,ce-.62,lt.stone(),n,.28+(ce-.62)/2,s+.05,20)),o(wn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],lt.stone(),n,ce-.34,s+.05,24)),o(Pt(.7,.18,.7,lt.stone(),n,ce-.09,s+.05)),r;case"balcony":{o(Pt(t,.18,1.05,lt.stone(),n,.09,1.05/2)),o(Pt(t+.1,.06,1.05+.06,lt.stone(),n,.2,1.05/2+.03));for(let c=.15;c<t;c+=.22)o(wn(pc,lt.stone(),c,.23,1.05-.1,10));for(let c=.15;c<1.05-.1;c+=.22)o(wn(pc,lt.stone(),.08,.23,c,10)),o(wn(pc,lt.stone(),t-.08,.23,c,10));return o(Pt(t,.08,.16,lt.stone(),n,.97,1.05-.1)),o(Pt(.16,.08,1.05,lt.stone(),.08,.97,1.05/2)),o(Pt(.16,.08,1.05,lt.stone(),t-.08,.97,1.05/2)),o(Pt(3.4,.36,.06,lt.darkWood(),n,-.3,.12)),o(Pt(3.1,.2,.02,lt.brass(),n,-.3,.155)),r}case"fountain":{o(wn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],lt.granite(),n,0,s,72));let c=new wt(new wi(5.3-.38,64),lt.water());c.rotation.x=-Math.PI/2,c.position.set(n,.36,s),o(c),o(new wt(new wi(5.3-.38,64),lt.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(wn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],lt.stone(),n,0,s,48));let h=new wt(new wi(.9,32),lt.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let u=new wt(new wi(1.6,32),lt.water());u.rotation.x=-Math.PI/2,u.position.set(n,1.48,s),o(u),o(new wt(new Ie(1.62,1.95,1.1,32,1,!0),lt.spray())).position.set(n,.92,s),o(new wt(new Ie(.95,1.6,.85,32,1,!0),lt.spray())).position.set(n,1.92,s),o(new wt(new Ko(.12,1.1,12,1,!0),lt.spray())).position.set(n,3.9,s);for(let d=0;d<8;d++){let f=d/8*Math.PI*2,p=new wt(new Ie(.03,.05,1.6,6,1,!0),lt.spray());p.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),p.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(p)}return r}case"playhouse":{let l=lt.paint(14205066),c=lt.paint(11549226);o(Pt(t-.3,.1,e-.3,lt.lightWood(),n,.05,s));for(let[d,f,p,x]of[[n,.2,t-.3,.06],[.2,s,.06,e-.3],[t-.2,s,.06,e-.3]])o(Pt(p,1.3,x,l,d,.75,f));o(Pt(.8,1.3,.06,l,.55,.75,e-.2)),o(Pt(.7,1.3,.06,l,t-.5,.75,e-.2)),o(Pt(.5,.45,.07,lt.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=Pt(t*.62,.06,e-.1,c,t*.3,1.75,s);h.rotation.z=.6,o(h);let u=Pt(t*.62,.06,e-.1,c,t*.7,1.75,s);u.rotation.z=-.6,o(u);for(let d of[.2,e-.2]){let f=Yr(t-.3,.75,.06,l);f.position.set(n,1.4,d),o(f)}return r}case"slide":{let l=lt.paint(12730414),c=lt.paint(3828392);o(Pt(.9,.08,.9,lt.lightWood(),n,1.5,.55));for(let[u,d]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Nn(.04,.04,2.3,c,u,1.15,d,8));for(let u of[n-.4,n+.4])o(Pt(.05,.05,.9,c,u,2.25,.55));for(let u=0;u<5;u++)o(Pt(.6,.04,.12,lt.lightWood(),n,.3+u*.27,.05-u*0)).position.z=.08;let h=Pt(.62,.05,2.4,l,n,.82,2.05);h.rotation.x=.62,o(h);for(let u of[-1,1]){let d=Pt(.05,.16,2.4,l,n+u*.32,.9,2.05);d.rotation.x=.62,o(d)}return r}case"swing":{let l=lt.paint(3828392);for(let h of[.15,t-.15])for(let u of[-1,1]){let d=Nn(.045,.045,2.5,l,h,1.18,s+u*.45,8);d.rotation.x=u*.38,o(d)}let c=Nn(.05,.05,t-.2,l,n,2.35,s,8);c.rotation.z=Math.PI/2,o(c);for(let h of[t*.3,t*.7]){for(let u of[-.22,.22])o(Nn(.01,.01,1.75,lt.steel(),h+u,1.45,s,4));o(Pt(.5,.05,.22,lt.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[l,c,h,u]of[[n,.1,t-.2,.18],[n,e-.1,t-.2,.18],[.1,s,.18,e],[t-.1,s,.18,e]])o(Pt(h,.3,u,lt.lightWood(),l,.15,c));return o(Pt(t-.3,.12,e-.3,lt.sand(),n,.06,s)),o(Pt(.2,.18,.2,lt.paint(12730414),n-.6,.2,s+.3)),o(Nn(.12,.08,.16,lt.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Nn(1.1,1.1,.1,lt.paint(12730414),n,.25,s,32)),o(Nn(.08,.1,.9,lt.steel(),n,.7,s,10));for(let l=0;l<4;l++){let c=l*Math.PI/2,h=Pt(1.9,.04,.04,lt.paint(14196768),n,.95,s);h.rotation.y=c,o(h),o(Nn(.03,.03,.7,lt.paint(14196768),n+Math.cos(c)*.95,.6,s+Math.sin(c)*.95,6))}return r}case"busStop":{for(let l of[.15,t-.15])o(Pt(.08,2.4,.08,lt.iron(),l,1.2,.2));return o(Pt(t,.08,1.2,lt.iron(),n,2.42,.6)),o(Pt(t-.3,1.9,.03,lt.glass(),n,1.2,.18)),o(Pt(t-.6,.06,.4,lt.lightWood(),n,.48,.42)),o(Pt(.9,.6,.06,lt.paint(2775706),t-.6,2,.2)),r}case"counter":{let l=new zt;return l.add(Pt(U,1.05,.6,lt.darkWood(),U/2,.52,.55)),l.add(Pt(U+.02,.05,.7,lt.stone(),U/2,1.07,.55)),l.add(Pt(U,.55,.02,lt.glass(),U/2,1.4,.4)),l.add(Pt(.04,.6,.04,lt.brass(),.04,1.4,.4)),hs(l,i,n,s)}case"deposits":{let l=new zt;l.add(Pt(U-.02,2.1,.45,lt.steel(),U/2,1.05,.24));for(let c=0;c<9;c++)for(let h=0;h<4;h++){let u=.12+h*.3,d=.15+c*.22;l.add(Pt(.27,.19,.02,lt.paint(9081496),u+.14,d+.1,.475)),l.add(Pt(.03,.03,.02,lt.brass(),u+.14,d+.1,.49))}return hs(l,i,n,s)}case"plant":o(wn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],lt.paint(10115642),n,0,s,16));for(let l=0;l<4;l++){let c=new wt(xc(.32,i.col*3+l),_c(4090416));c.position.set(n+(a()-.5)*.3,.9+l*.22,s+(a()-.5)*.3),o(c)}return r;case"bed":{let l=new zt;return l.add(Pt(t-.2,.35,e-.25,lt.wood(),n,.18,s+.05)),l.add(Pt(t-.3,.18,e-.35,lt.fabric(15262420),n,.44,s+.05)),l.add(Pt(t*.6,.06,e-.3,lt.fabric(6961738),n+t*.17,.55,s+.05)),l.add(Pt(.45,.14,e-.5,lt.fabric(16052456),.45,.6,s+.05)),l.add(Pt(.08,1,e-.25,lt.darkWood(),.12,.5,s+.05)),hs(l,i,n,s)}case"wardrobe":{let l=new zt;l.add(Pt(U-.15,2,.6,lt.wood(),U/2,1,.36)),l.add(Pt(U-.05,.1,.68,lt.darkWood(),U/2,2.05,.36)),l.add(Pt(.02,1.8,.02,lt.darkWood(),U/2,1,.67));for(let c of[-1,1])l.add(Pt(.03,.12,.03,lt.brass(),U/2+c*.06,1.05,.68));return hs(l,i,n,s)}case"bookcase":{let l=new zt;l.add(Pt(U-.15,2,.4,lt.darkWood(),U/2,1,.26));let c=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let u=.14;for(;u<U-.2;){let d=.04+a()*.05,f=.22+a()*.1;l.add(Pt(d-.005,f,.25,lt.fabric(c[Math.floor(a()*c.length)]),u+d/2,.12+h*.38+f/2,.36)),u+=d}}return hs(l,i,n,s)}case"table":{o(Pt(t-.3,.05,e-.3,lt.wood(),n,.76,s));for(let[l,c]of[[.25,.25],[t-.25,.25],[.25,e-.25],[t-.25,e-.25]])o(Pt(.06,.74,.06,lt.darkWood(),l,.37,c));for(let l=0;l<Math.max(2,i.cols);l++){let c=(l+.5)*t/Math.max(2,i.cols);for(let h of[.05,e-.05])o(Pt(.4,.05,.4,lt.darkWood(),c,.45,h)),o(Pt(.4,.5,.04,lt.darkWood(),c,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let l=new zt,c=lt.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);l.add(Pt(t-.2,.42,.8,c,n,.21,.6)),l.add(Pt(t-.2,.5,.2,c,n,.65,.3));for(let h of[.15,t-.15])l.add(Pt(.18,.6,.8,c,h,.3,.6));return hs(l,i,n,s)}default:return null}}var ma=ke==="city",Xn=$u(qu(),Zu),Iy=1280/18.5;var hi=U*be,vc=new L(hi/2,0,hi/2),Mc=.22,Sn=.18,pa=ce-Mc,_n={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},xn=(i,t,e)=>new L(i,t,e),$e=new Sr({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});$e.setPixelRatio(1);$e.shadowMap.enabled=!0;$e.shadowMap.type=Zl;$e.toneMapping=$l;$e.outputColorSpace=dn;document.body.appendChild($e.domElement);var Pi=new Ws,ir=ke==="base";Pi.background=new Jt(ir?789258:1709584);Pi.environment=new Vs($e).fromScene(new oa,.04).texture;Pi.add(ir?new Nr(15002868,4999234,1.25):new Nr(13163775,5917236,.75));var hn=new Qo(ir?16774890:16774368,ir?2.6:4.2);{let i=td(-11,7.5),t=ir?.45:1.6;hn.position.set(vc.x+i.x*t,ir?24:17.6,vc.z+i.y*t)}hn.target.position.copy(vc);hn.castShadow=!0;hn.shadow.mapSize.set(4096,4096);Object.assign(hn.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});hn.shadow.camera.updateProjectionMatrix();hn.shadow.bias=-3e-4;hn.shadow.normalBias=.025;hn.shadow.radius=2;Pi.add(hn,hn.target);var yc=new Map,Tn=(i,t)=>(yc.has(i)||yc.set(i,t()),yc.get(i)),He=(i,t)=>Tn(i,()=>new Wt(t)),ft={trim:()=>He("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>He("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>He("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>He("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>He("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>He("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>He("rubber",{color:1842204,roughness:.9}),paint:()=>He("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>Tn("glass",()=>new In({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>He("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>He("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>He("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>Tn("screen"+i,()=>new Wt({map:aa(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:aa(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,t)=>Tn(`wall_${i}_${t}`,()=>{let e=ad(i,t);return new Wt({map:e.map,normalMap:e.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>Tn("interiorFloor",()=>{let i=ld();return new Wt({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>Tn("roof",()=>{let i=cd();return new Wt({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>Tn("grating",()=>{let i=hd();return new Wt({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>Tn("concrete",()=>{let i=dd();return new Wt({map:i.map,roughness:.95})}),container:i=>Tn("container_"+i,()=>{let t=ud(i==="orange"?3:9);return new Wt({map:t.map,normalMap:t.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>Tn("rock",()=>{let i=kr(5,[150,116,88]);return new Wt({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>Tn("baseRock"+i,()=>{let t=kr(11+i*7,[120,112,102]);return new Wt({normalMap:t.normalMap,color:6182736,roughness:.95})}),rockCut:i=>Tn("rockCut"+i,()=>{let t=kr(31+i*5,[92,86,80]);return new Wt({normalMap:t.normalMap,color:5722700,roughness:.98})})};function Jn(i,t,e,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:t,level:e,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function It(i,t,e,n,s,r,o){let a=new wt(new pe(i,t,e),n);return a.position.set(s,r,o),a}function gn(i,t,e,n,s,r,o,a=16){let l=new wt(new Ie(i,t,e,a),n);return l.position.set(s,r,o),l}function d_(i,t,e,n){let s=new L().subVectors(t,i),r=new wt(new pe(e,s.length(),e),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(xn(0,1,0),s.normalize()),r}function nr(i,t,e,n){let s=new L().subVectors(t,i),r=new wt(new Ie(e,e,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(xn(0,1,0),s.normalize()),r}var Id=(i,t,e)=>(i*73856093^t*19349663^e*83492791)>>>0,bc=(i,t,e)=>t>=0&&e>=0&&t<be&&e<be&&Xn.indoor[i][e][t]===1;function he(i,t,e,n,s,r,o,a,l,c=Sn){let h=r-s,u=a-o,d=n*ce,f=i==="W"?new pe(c,u,h):new pe(h,u,c),p=i==="W"?t*U:t*U+(s+r)/2,x=i==="W"?e*U+(s+r)/2:e*U;f.translate(p,d+(o+a)/2,x);let m=f.attributes.position,g=f.attributes.uv;for(let y=0;y<m.count;y++){let _=i==="W"?m.getZ(y)-e*U:m.getX(y)-t*U;g.setXY(y,_/U,(m.getY(y)-d)/pa)}return new wt(f,l)}function Cd(i,t,e,n,s){let r=Id(t,e,n)%3,o=(h,u)=>s==="inner"||bc(n,h,u)?ft.wall("inner",r%2):ft.wall(s,r),a=o(t,e),l=i==="W"?o(t-1,e):o(t,e-1),c=ft.trim();return i==="W"?[a,l,c,c,c,c]:[c,c,c,c,a,l]}var f_=i=>ma?i.style==="vault"?"vault":gc(i.style)?"outer":"inner":"base";function Ld(i,t,e,n,s,r){if(ma&&s.type!=="barrier"){let u=Sd(i,t,e,n,s,r,{wallBox:he,isIndoor:bc,THICK:Sn,PANEL_H:pa});if(s.type==="door"){let f=Math.min(2.1,r?.8:pa);qr.add(Pd(i,t,e,n,(U-.92)/2,(U+.92)/2,f,f_(s)))}return Jn(u,i==="W"?_n.wallW:_n.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new zt,a=s.type,l=s.style,c=r?.8:pa,h=Sn/2;if(a==="wall"||a==="door"||a==="window"){let u=Cd(i,t,e,n,l==="concrete"?"hab":l);if(a==="wall"||a==="window"&&r)o.add(he(i,t,e,n,-h,U+h,0,c,u));else if(a==="door"){let f=Math.min(2.1,c),p=(U-.92)/2,x=(U+.92)/2;o.add(he(i,t,e,n,-h,p,0,c,u)),o.add(he(i,t,e,n,x,U+h,0,c,u)),c>f+.01&&o.add(he(i,t,e,n,p,x,f,c,u));let m=[ft.orange(),ft.orange(),ft.orange(),ft.orange(),ft.orange(),ft.orange()];if(o.add(he(i,t,e,n,p-.06,p,0,f,m,Sn+.05)),o.add(he(i,t,e,n,x,x+.06,0,f,m,Sn+.05)),c>f+.01&&o.add(he(i,t,e,n,p-.06,x+.06,f,f+.07,m,Sn+.05)),o.add(he(i,t,e,n,p,x,0,.03,[ft.darkSteel(),ft.darkSteel(),ft.darkSteel(),ft.darkSteel(),ft.darkSteel(),ft.darkSteel()],Sn+.1)),qr.add(Pd(i,t,e,n,p,x,f)),l!=="inner"&&!r){let y=(bc(n,t,e)?-1:1)*(Sn/2+.06),_=U/2,M=i==="W"?It(.12,.07,.3,ft.lightOn(),t*U+y,n*ce+2.3,e*U+_):It(.3,.07,.12,ft.lightOn(),t*U+_,n*ce+2.3,e*U+y);o.add(M)}}else{let x=(U-.82)/2,m=(U+.82)/2;o.add(he(i,t,e,n,-h,x,0,c,u)),o.add(he(i,t,e,n,m,U+h,0,c,u)),o.add(he(i,t,e,n,x,m,0,.95,u)),o.add(he(i,t,e,n,x,m,1.9,c,u));let g=Array(6).fill(ft.trim());o.add(he(i,t,e,n,x,m,.95-.05,.95,g,Sn+.06)),o.add(he(i,t,e,n,x,m,1.9,1.9+.05,g,Sn+.04)),o.add(he(i,t,e,n,x,x+.04,.95,1.9,g,Sn+.03)),o.add(he(i,t,e,n,m-.04,m,.95,1.9,g,Sn+.03)),o.add(he(i,t,e,n,x+.04,m-.04,.95,1.9,Array(6).fill(ft.glass()),.03))}}else if(a==="rail"){let u=Array(6).fill(ft.yellow());for(let d of[0,U])o.add(he(i,t,e,n,d-.03,d+.03,0,1.05,u,.06));o.add(he(i,t,e,n,0,U,1,1.06,u,.05)),o.add(he(i,t,e,n,0,U,.52,.56,u,.04)),o.add(he(i,t,e,n,0,U,0,.1,Array(6).fill(ft.darkSteel()),.02))}else if(a==="parapet"){let u=Cd(i,t,e,n,l);o.add(he(i,t,e,n,-h-.02,U+h+.02,-.02,.5,u,.22)),o.add(he(i,t,e,n,-h-.04,U+h+.04,.5,.56,Array(6).fill(ft.steel()),.28))}else if(a==="barrier"){let u=new qe;u.moveTo(-.3,0),u.lineTo(.3,0),u.lineTo(.3,.08),u.lineTo(.1,.3),u.lineTo(.08,.82),u.lineTo(-.08,.82),u.lineTo(-.1,.3),u.lineTo(-.3,.08);let d=new ln(u,{depth:U-.05,bevelEnabled:!1});i==="W"?d.translate(0,0,.025):(d.rotateY(Math.PI/2),d.translate(.025,0,0));let f=new wt(d,ft.concrete());f.position.set(t*U,n*ce,e*U),i==="N"&&f.position.set(t*U,n*ce,e*U),o.add(f);let p=i==="W"?It(.17,.06,U-.1,ft.orange(),t*U,n*ce+.62,e*U+U/2):It(U-.1,.06,.17,ft.orange(),t*U+U/2,n*ce+.62,e*U);o.add(p)}return Jn(o,i==="W"?_n.wallW:_n.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var qr=new zt;function Pd(i,t,e,n,s,r,o,a="base"){if(a!=="base"){let p=Td(i,t,e,n,s,r,o,a,{wallBox:he});return p.userData.door={orient:i,col:t,row:e,level:n},Jn(p,i==="W"?_n.doorW:_n.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let l=new zt,c=Array(6).fill(ft.wall("cabin",0)),h=o-.01;l.add(he(i,t,e,n,s-.02,r+.02,.01,h,c,.06));let u=Array(6).fill(ft.orange()),d=Array(6).fill(ft.darkSteel()),f=Array(6).fill(ft.glass());return h>1.1&&l.add(he(i,t,e,n,s,r,.98,1.06,u,.075)),h>1.9&&(l.add(he(i,t,e,n,s+.36,s+.56,1.3,1.85,d,.075)),l.add(he(i,t,e,n,s+.38,s+.54,1.32,1.83,f,.08))),l.add(he(i,t,e,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),d,.085)),l.userData.door={orient:i,col:t,row:e,level:n},Jn(l,i==="W"?_n.doorW:_n.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function Dd(i,t,e,n){let s=new zt,r=i*U+U/2,o=t*U+U/2,a=e*ce;if(n===Re.deck)s.add(It(U,.06,U,ft.grating(),r,a-.03,o)),s.add(It(.12,.22,U,ft.orange(),i*U+.06,a-.17,o)),s.add(It(U,.18,.1,ft.orange(),r,a-.15,t*U+.05));else{let l=ma&&Xn.floorStyle?Xn.floorStyle[e][t][i]:null,c=l?wd(l):n===Re.roof?ft.roof():ft.interiorFloor(),h=l?lt.slabEdge():ft.slabEdge(),u=l?lt.ceiling():ft.ceiling(),d=It(U,Mc,U,[h,h,c,u,h,h],r,a-Mc/2,o);s.add(d)}return Jn(s,_n.floor,e,{biasCol:-1e-4,biasRow:-1e-4})}function Nd(i){let t=new zt,e=12,n=i.count*U,s=ce,r=i.level*ce,o=i.col*U+(i.dirCol<0?U:0),a=i.row*U+(i.dirRow<0?U:0),l=xn(i.dirCol,0,i.dirRow),c=xn(-i.dirRow,0,i.dirCol),h=i.dirCol!==0?xn(0,0,i.row*U+U/2):xn(i.col*U+U/2,0,0),u=U*.86,d=(x,m,g)=>{let y=xn(o,r+m,a).addScaledVector(l,x).addScaledVector(c,g);return i.dirCol!==0?y.z=h.z+g:y.x=h.x+g,y},f=i.style==="classic",p=f?Ad():null;for(let x=0;x<e;x++){let m=x/e*n,g=(x+1)/e*n,y=(x+1)/e*s,_=d((m+g)/2,0,0),M=g-m;if(f){let I=i.dirCol!==0?[M,y,u]:[u,y,M];t.add(It(...I,p.body,_.x,r+y/2,_.z));let P=i.dirCol!==0?[M+.02,.035,u]:[u,.035,M+.02];t.add(It(...P,p.tread,_.x,r+y+.017,_.z))}else if(i.style==="hab"){let I=i.dirCol!==0?[M,y,u]:[u,y,M];t.add(It(...I,ft.slabEdge(),_.x,r+y/2,_.z));let P=i.dirCol!==0?[M,.03,u]:[u,.03,M];t.add(It(...P,ft.darkSteel(),_.x,r+y+.015,_.z));let C=i.dirCol!==0?[.04,.035,u]:[u,.035,.04],v=d(m+.02,0,0);t.add(It(...C,ft.yellow(),v.x,r+y+.017,v.z))}else{let I=i.dirCol!==0?[M*.9,.04,u]:[u,.04,M*.9];t.add(It(...I,ft.grating(),_.x,r+y-.02,_.z))}}for(let x of[-u/2-.04,u/2+.04]){i.style!=="hab"&&t.add(d_(d(0,0,x),d(n,s,x),.09,ft.orange()));let m=d(.05,.95,x),g=d(n,s+.95,x);if(!((i.style==="hab"||f)&&x<0)){if(t.add(nr(m,g,f?.03:.025,f?p.handrail:ft.yellow())),f){for(let y=.1;y<n;y+=.2)t.add(nr(d(y,y/n*s,x),d(y,y/n*s+.93,x),.009,p.rail));continue}for(let y=0;y<=i.count;y++){let _=Math.min(n-.05,Math.max(.05,y*U));t.add(nr(d(_,_/n*s,x),d(_,_/n*s+.95,x),.022,ft.yellow()))}}}return Jn(t,_n.floor,i.level)}function p_(i,t){let e=new zt,n=i.level*ce,s=Math.min(n+i.height,t);if(s<=n+.05)return e;let r=Sn/2+.1,o=a=>i.side==="W"?[xn(i.col*U+r,n,i.row*U+U/2+a),xn(i.col*U+r,s,i.row*U+U/2+a)]:[xn(i.col*U+U/2+a,n,i.row*U+r),xn(i.col*U+U/2+a,s,i.row*U+r)];for(let a of[-.22,.22]){let[l,c]=o(a);e.add(nr(l,c,.025,ft.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[l]=o(-.22),[c]=o(.22);l.y=c.y=a,e.add(nr(l,c,.016,ft.steel()))}return Jn(e,_n.floor,i.level,{auto:!0})}function m_(i){return xn(i.col*U,i.level*ce,i.row*U)}var g_=new le().makeTranslation(U*be,0,0).multiply(new le().makeRotationY(-Math.PI/2));function Ec(i,t){if(i.source){let h=Ec({...i.source,layer:i.layer},t);if(!h)return h;let u=new zt;u.matrixAutoUpdate=!1;for(let d=0;d<i.turns;d++)u.matrix.premultiply(g_);return u.add(h),u.updateMatrixWorld(!0),u}let e=new zt,n=m_(i),s=i.cols*U,r=i.rows*U,o=s/2,a=r/2,l=_e(Id(i.col,i.row,i.level)%1e5+7),c=h=>(e.add(h),h);if(ma){let h=Rd(i);if(h)return e.add(h),e.position.copy(n),Jn(e,_n.object,i.level)}if(xd.has(i.kind))return e.add(_d(i)),e.position.copy(n),Jn(e,_n.object,i.level);switch(i.kind){case"console":{c(It(1,.75,.6,ft.trim(),o,.375,a-.15));let h=c(It(1,.05,.5,ft.screen(Math.floor(l()*3)),o,.85,a-.05));h.rotation.x=-.6,c(It(1,.5,.08,ft.darkSteel(),o,1.1,a-.42));break}case"locker":c(It(.9,1.9,.5,ft.wall("cabin",0),o,.95,a-.3)),c(It(.02,1.7,.02,ft.darkSteel(),o,.95,a-.04));break;case"cabinet":c(It(.9,1.2,.6,ft.trim(),o,.6,a)),c(It(.7,.08,.02,ft.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])c(It(s-.2,.08,r-.3,ft.trim(),o,h,a)),c(It(s-.3,.12,r-.4,He("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,u]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])c(It(.05,1.6,.05,ft.steel(),h,.8,u));break;case"labTable":c(It(s-.2,.06,r-.3,ft.white(),o,.9,a));for(let h of[.2,s-.2])c(It(.06,.9,r-.4,ft.trim(),h,.45,a));c(It(.5,.35,.4,ft.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)c(gn(.03,.03,.22,He("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":c(It(s-.3,.05,.7,ft.white(),o,.75,a-.1)),c(It(s-.4,.7,.05,ft.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])c(It(.55,.35,.04,ft.screen(Math.floor(l()*3)+1),h,1.05,a-.3)),c(It(.06,.2,.06,ft.darkSteel(),h,.85,a-.3));break;case"rack":c(It(.7,2,.9,ft.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)c(It(.02,.02,.02,He("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+l()*.6));break;case"crate":{let h=1+(l()<.45?1:0),u=l()<.5?ft.wall("cabin",2):He("crateGrey",{color:10132630,roughness:.55,metalness:.2}),d=0;for(let f=0;f<h;f++){let p=f?.65:.95,x=f?.5:.75,m=(l()-.5)*.4,g=new zt;g.add(It(p,x,p*.8,u,0,x/2,0));for(let y of[-1,1])g.add(It(p+.02,.08,.06,ft.orange(),0,x*.5,y*p*.3));g.add(It(p+.02,.04,p*.82,ft.trim(),0,x-.02,0)),g.position.set(o+(l()-.5)*.1,d,a+(l()-.5)*.1),g.rotation.y=m,c(g),d+=x}break}case"barrels":for(let h=0;h<3;h++){let u=[3104394,9058844,5923400][h];c(gn(.29,.29,.9,He("barrel"+h,{color:u,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":c(It(s-.2,.9,r-.25,ft.white(),o,.45,a));for(let h=0;h<i.cols;h++)c(gn(.38,.38,.05,ft.darkSteel(),.62+h*U,.92,a,20)).scale.set(1,1,1);break;case"antenna":c(It(.5,.15,.5,ft.trim(),o,.07,a)),c(gn(.05,.07,3.6,ft.steel(),o,1.8,a));for(let h of[2.2,3])c(It(.9,.04,.04,ft.steel(),o,h,a));c(It(.06,.06,.06,He("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let u=c(It(s-.3,.05,r/2-.15,He("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));u.rotation.x=-.45,c(It(.06,.6,.06,ft.steel(),o,.3,h*r/2+r/4))}break}case"dish":c(gn(.08,.12,.8,ft.steel(),o,.4,a));{let h=c(new wt(new Bn(.6,20,10,0,Math.PI*2,0,.9),ft.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=Tn("dishMat",()=>new Wt({color:14211798,roughness:.4,side:en}))}break;case"pylon":{let h=ce-.24;c(It(.32,h,.32,ft.orange(),o,h/2,a)),c(It(.6,.06,.6,ft.darkSteel(),o,.03,a)),c(It(.5,.12,.5,ft.orange(),o,h-.06,a));break}case"searchlight":c(It(.5,.3,.5,ft.trim(),o,.15,a)),c(It(.12,.5,.12,ft.darkSteel(),o,.55,a));{let h=c(gn(.24,.3,.45,ft.darkSteel(),o,.95,a));h.rotation.x=1.1;let u=c(gn(.22,.22,.03,ft.lightOn(),o,1.02,a+.2));u.rotation.x=1.1}break;case"container":{let h=ft.container(i.color),u=c(It(s-.15,2.5,r-.15,[h,h,ft.container(i.color),ft.trim(),h,h],o,1.25,a));for(let d of[.12,s-.12])for(let f of[.12,r-.12])for(let p of[.1,2.4])c(It(.18,.2,.18,ft.darkSteel(),d,p,f));for(let d of[o-.35,o+.35])c(It(.04,2.3,.04,ft.steel(),d,1.25,r-.06));break}case"truck":{let h=sd();h.position.set(o,0,(r-id.length)/2),c(h);break}case"rover":{let h=ft.white();c(It(s-.4,.6,r-.3,h,o,.95,a)),c(It(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),c(It(s-.6,.5,.05,ft.glass(),o,1.7,a+r/2-.33));for(let u of[-1,1])c(It(.05,.4,1,ft.glass(),o+u*(s/2-.24),1.7,a+r/2-1));c(It(s-.4,.06,r-.3,ft.orange(),o,1.27,a)),c(It(s-.6,.12,1.6,ft.trim(),o,1.31,a-.6));for(let u of[-1,1])for(let d of[.55,r/2,r-.55]){let f=c(gn(.42,.42,.34,ft.rubber(),o+u*(s/2-.2),.42,d,18));f.rotation.z=Math.PI/2;let p=c(gn(.18,.18,.36,ft.steel(),o+u*(s/2-.2),.42,d,10));p.rotation.z=Math.PI/2}c(gn(.02,.02,1.2,ft.steel(),o-.6,2.4,a+r/2-1.3)),c(It(.25,.12,.08,ft.lightOn(),o-.6,1,r-.12)),c(It(.25,.12,.08,ft.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let d of[.6,r-.6])c(It(s-.5,.6,.25,ft.darkSteel(),o,.3,d));let h=c(gn(1,1,r-.3,ft.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let u=c(gn(1.02,1.02,.25,ft.orange(),o,1.3,a,28));u.rotation.x=Math.PI/2;for(let d of[.15,r-.15]){let f=c(new wt(new Bn(1,24,12),ft.white()));f.position.set(o,1.3,d),f.scale.set(1,1,.25)}c(nr(xn(o+.6,.3,r-.4),xn(o+.6,2.2,r-.4),.06,ft.steel()));break}case"generator":c(It(s-.3,1.4,r-.4,He("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)c(It(s-.6,.04,.02,ft.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])c(gn(.08,.08,.9,ft.darkSteel(),h,1.8,a-.3));c(It(s-.2,.08,r-.3,ft.yellow(),o,1.42,a));break;case"lamp":c(It(.4,.15,.4,ft.concrete(),o,.07,a)),c(gn(.06,.08,4.2,ft.darkSteel(),o,2.1,a)),c(It(.7,.08,.1,ft.darkSteel(),o+.3,4.15,a)),c(It(.36,.1,.24,ft.trim(),o+.6,4.1,a)),c(It(.3,.02,.2,ft.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*U*.55,u=ac(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),d=c(new wt(u,ft.rock()));d.position.set(o,h*.18,a),d.rotation.y=l()*6;break}case"tiltrotor":{let h=rd();i.layer&&[...h.children].forEach(u=>{u.name!==i.layer&&h.remove(u)}),h.rotation.y=-Math.PI/2,h.position.set(8*U-.006,0,2*U+.006),c(h);break}case"car":{let h=ua[i.type]||ua.suv,u=new zt,d=od({type:i.type,color:i.color});d.position.z=-h.length/2,u.add(d),u.position.set(o,0,a),i.cols>i.rows?u.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(u.rotation.y=Math.PI),c(u);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,u=i.bottom||0,d=i.variant||0,f=ft.baseRock(d),p=ft.rockCut(d),x=c(It(U+.014,h-u,U+.014,[f,f,p,f,f,f],o-.01,(h+u)/2,a-.01));x.userData.noShadowReceive=!0;let m=x.geometry.attributes.position,g=x.geometry.attributes.uv,y=x.geometry.attributes.normal;for(let _=0;_<m.count;_++){let M=i.col*U+o+m.getX(_),I=(h+u)/2+m.getY(_),P=i.row*U+a+m.getZ(_);Math.abs(y.getY(_))>.5?g.setXY(_,M/8,P/8):Math.abs(y.getX(_))>.5?g.setXY(_,P/8,I/8):g.setXY(_,M/8,I/8)}break}case"liftPlatform":{c(It(s-.04,.03,r-.04,ft.darkSteel(),o,.06,a));for(let d=2.5;d<s-.1;d+=2.5)c(It(.03,.035,r-.3,ft.rubber(),d,.062,a));for(let d=2.5;d<r-.1;d+=2.5)c(It(s-.3,.035,.03,ft.rubber(),o,.062,d));let h=.5,u=.22;for(let d=0;d<s-1e-6;d+=h){let f=Math.round(d/h)%2?ft.rubber():ft.yellow(),p=Math.min(h,s-d);c(It(p,.04,u,f,d+p/2,.065,u/2+.03)),c(It(p,.04,u,f,d+p/2,.065,r-u/2-.03))}for(let d=u+.03;d<r-u-.03-1e-6;d+=h){let f=Math.round(d/h)%2?ft.yellow():ft.rubber(),p=Math.min(h,r-u-.03-d);c(It(u,.04,p,f,u/2+.03,.065,d+p/2)),c(It(u,.04,p,f,s-u/2-.03,.065,d+p/2))}break}case"paint":c(It(.1,.012,r-.12,ft.paint(),.06,.006,a));break;case"ladder":return p_(i,(t+1)*ce+.95);case"towerLeg":return null;default:c(It(s*.8,.8,r*.8,ft.trim(),o,.4,a))}return e.position.copy(n),Jn(e,_n.object,i.level)}var Ly=hi+4,Dy=Xn.concrete,Ny={tracks:[[[5.5*U,15.5*U],[7*U,13*U],[8.5*U,12.2*U],[12*U,12.4*U],[16*U,13.2*U],[21*U,12.5*U],[24*U,12*U]],[[9*U,16.5*U],[9.5*U,20*U],[10*U,24*U]]],lines:[{from:[1.6*U,11.2*U],to:[12.3*U,11.2*U]},{from:[12.3*U,1.6*U],to:[12.3*U,11.2*U]},{from:[14.5*U,3.3*U],to:[14.5*U,12.5*U]},{from:[14.5*U,12.5*U],to:[20.5*U,12.5*U]}],hazards:[[5.6*U,10.15*U,7.4*U,10.45*U],[11.15*U,5.6*U,11.45*U,7.4*U],[16.6*U,12.05*U,18.4*U,12.35*U]],pads:[[4.6*U,19*U,3.2*U]],stains:[[8.5*U,14*U,1.4],[13.5*U,2.5*U,1],[17*U,7*U,1.2],[4*U,18*U,.8],[21.5*U,7.8*U,.9]]};function Ud(){return qr}function Od(){return qr=new zt,qr}var x_={1:"#d8a420",2:"#7fb2d8",3:"#9fd27f",4:"#e0705a",5:"#5fd0ff",6:"#ffb347",7:"#c49be8",8:"#b8b8b8",0:"#808080"};$e.domElement.style.display="block";$e.domElement.style.outline="none";$e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));$e.shadowMap.autoUpdate=!1;$e.setSize(window.innerWidth,window.innerHeight);var ga=hi/2+2;Object.assign(hn.shadow.camera,{left:-ga,right:ga,top:ga,bottom:-ga,near:1,far:140});hn.shadow.camera.updateProjectionMatrix();hn.shadow.mapSize.set(4096,4096);var __=Js.grid[0],y_=Js.grid[1],v_=new L((Fr+__/2)*U,0,(zr+y_/2)*U),Ii=new tn(40,window.innerWidth/window.innerHeight,.3,400),Oe=new ra(Ii,$e.domElement);Oe.enableDamping=!0;Oe.dampingFactor=.12;Oe.screenSpacePanning=!1;Oe.minDistance=4;Oe.maxDistance=140;Oe.maxPolarAngle=Ai.degToRad(86);Oe.keyPanSpeed=14;Oe.listenToKeyEvents(window);function rr(i,t,e){let n=Ai.degToRad(i),s=Ai.degToRad(t);Oe.target.copy(v_).add(new L(0,1.5,0)),Ii.position.set(Oe.target.x+Math.cos(s)*Math.sin(n)*e,Oe.target.y+Math.sin(s)*e,Oe.target.z+Math.cos(s)*Math.cos(n)*e),Oe.update()}window.base3dLook=(i,t,e,n,s)=>{let r=Ai.degToRad(e),o=Ai.degToRad(n);Oe.target.set((Fr+i)*U,.9,(zr+t)*U),Ii.position.set(Oe.target.x+Math.cos(o)*Math.sin(r)*s,Oe.target.y+Math.sin(o)*s,Oe.target.z+Math.cos(o)*Math.cos(r)*s),Oe.update(),Di()};var Ac=()=>rr(45,40,78);function M_(i,t){let e=new zt;Od();let n=new wt(new Ei(hi+40,hi+40),new Wt({color:2367774,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(hi/2,-.03,hi/2),n.receiveShadow=!0,e.add(n);let s=[];for(let a=0;a<be;a++)for(let l=0;l<be;l++)Xn.floor[0][a][l]===Re.interior&&s.push([l,a]);let r=new Xs(new pe(U+.004,.04,U+.004),ft.interiorFloor(),s.length),o=new le;s.forEach(([a,l],c)=>r.setMatrixAt(c,o.makeTranslation((a+.5)*U,.025,(l+.5)*U))),r.receiveShadow=!0,e.add(r);for(let a=0;a<=i;a++){let l=t&&a===i;for(let c=0;c<=be;c++)for(let h=0;h<=be;h++){for(let u of["W","N"]){let d=(u==="W"?Xn.wallW:Xn.wallN)[a][c][h];if(!d||!d.type||d.type==="hull")continue;let f=d.type==="wall"||d.type==="door"||d.type==="window";e.add(Ld(u,h,c,a,d,f&&l))}if(a>0&&c<be&&h<be){let u=Xn.floor[a][c][h];(u===Re.interior||u===Re.roof||u===Re.deck)&&e.add(Dd(h,c,a,u))}}}for(let a of Xn.stairs)a.level<=i&&e.add(Nd(a));for(let a of Xn.objects){if(a.level>i)continue;let l=Ec(a,i);l&&e.add(l)}return e.add(Ud()),lc(e,.28),e}var ds=null,fs=as-1,Fd=!1;function Rc(){ds&&(Pi.remove(ds),sc(ds));let i=performance.now(),t=M_(fs,Fd);ds=Wu(t),sc(t),Pi.add(ds);let e={};ds.children.forEach(n=>{let s=n.isInstancedMesh?"instanced":Array.isArray(n.material)?"multi":n.geometry.groups.length>1?"groups":n.morphTargetInfluences?"morph":"merged";e[s]=(e[s]||0)+1}),window.base3dStats={buildMs:Math.round(performance.now()-i),meshes:ds.children.length,reasons:e},$e.shadowMap.needsUpdate=!0,b_(),Di()}var xa=document.createElement("div");xa.id="labels";document.body.appendChild(xa);var wc=Js.rooms.filter(i=>i.module!==0||i.width*i.height>=24).map(i=>{let t=document.createElement("div");t.className="room-label",t.textContent=i.name,t.style.borderColor=x_[i.module]||"#808080",xa.appendChild(t);let e=new L((Fr+i.x+i.width/2)*U,0,(zr+i.y+i.height/2)*U);return{element:t,room:i,position:e,baseLevel:i.level||0}}),Sc=!0;function b_(){for(let i of wc){let t=Math.min(fs,i.baseLevel+(i.room.levels||1)-1);i.position.y=Math.max(i.baseLevel,Math.min(t,fs))*ce+.4,i.hidden=i.baseLevel>fs}}var sr=new L;function E_(){if(xa.style.display=Sc?"block":"none",!Sc)return;let i=window.innerWidth,t=window.innerHeight;for(let n of wc)n.distance=Ii.position.distanceTo(n.position);let e=[];for(let n of[...wc].sort((s,r)=>s.distance-r.distance)){sr.copy(n.position).project(Ii);let s=!n.hidden&&n.distance<120&&sr.z<1&&Math.abs(sr.x)<1.1&&Math.abs(sr.y)<1.1,r=(sr.x+1)/2*i,o=(1-sr.y)/2*t;if(s){n.width||(n.width=n.element.offsetWidth||n.room.name.length*7+16);let a=[r-n.width/2,o-10,r+n.width/2,o+10];s=!e.some(l=>a[0]<l[2]&&a[2]>l[0]&&a[1]<l[3]&&a[3]>l[1]),s&&e.push(a)}n.element.style.display=s?"block":"none",s&&(n.element.style.transform=`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -50%)`,n.element.style.opacity=n.distance>85?"0.6":"1")}}var Li=document.createElement("div");Li.id="panel";Li.innerHTML=`
  <div class="title">\u041E\u0421\u041C\u041E\u0422\u0420 \u0411\u0410\u0417\u042B</div>
  <div class="row">\u0423\u0440\u043E\u0432\u043D\u0438: <span id="levels"></span></div>
  <div class="row"><label><input type="checkbox" id="cut"> \u0441\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u0442\u0435\u043D\u044B \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F</label></div>
  <div class="row"><label><input type="checkbox" id="names" checked> \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439</label></div>
  <div class="row views">
    <button data-view="home">\u041A\u0430\u043A \u0432 \u0438\u0433\u0440\u0435</button><button data-view="top">\u0421\u0432\u0435\u0440\u0445\u0443</button>
    <button data-view="n">\u0421 \u0441\u0435\u0432\u0435\u0440\u0430</button><button data-view="s">\u0421 \u044E\u0433\u0430</button>
    <button data-view="w">\u0421 \u0437\u0430\u043F\u0430\u0434\u0430</button><button data-view="e">\u0421 \u0432\u043E\u0441\u0442\u043E\u043A\u0430</button>
  </div>
  <div class="help">\u041B\u041A\u041C \u2014 \u0432\u0440\u0430\u0449\u0430\u0442\u044C \xB7 \u041F\u041A\u041C / \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u2014 \u0441\u0434\u0432\u0438\u0433 \xB7 \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 1\u20134 \u2014 \u0443\u0440\u043E\u0432\u043D\u0438 \xB7 R \u2014 \u0432\u0438\u0434 \u043A\u0430\u043A \u0432 \u0438\u0433\u0440\u0435 \xB7 Esc \u2014 \u043D\u0430\u0437\u0430\u0434</div>
  <button id="back" class="back">\u041D\u0410\u0417\u0410\u0414 \u041D\u0410 \u0411\u0410\u0417\u0423</button>`;document.body.appendChild(Li);var Cc=Li.querySelector("#levels");for(let i=0;i<as;i++){let t=document.createElement("button");t.textContent=String(i+1),t.dataset.level=String(i),Cc.appendChild(t)}function zd(){Cc.querySelectorAll("button").forEach(i=>i.classList.toggle("on",Number(i.dataset.level)<=fs))}Cc.addEventListener("click",i=>{let t=i.target.dataset&&i.target.dataset.level;t!==void 0&&kd(Number(t))});function kd(i){i!==fs&&(fs=i,zd(),Rc())}Li.querySelector("#cut").addEventListener("change",i=>{Fd=i.target.checked,Rc()});Li.querySelector("#names").addEventListener("change",i=>{Sc=i.target.checked,Di()});Li.querySelector(".views").addEventListener("click",i=>{let t=i.target.dataset&&i.target.dataset.view;t&&(t==="home"?Ac():t==="top"?rr(0,85,75):t==="n"?rr(180,30,60):t==="s"?rr(0,30,60):t==="w"?rr(-90,30,60):t==="e"&&rr(90,30,60),Di())});function Hd(){window.BASE3D_BACK?location.href=window.BASE3D_BACK:history.back()}Li.querySelector("#back").addEventListener("click",Hd);window.addEventListener("keydown",i=>{i.key==="Escape"?Hd():i.key>="1"&&i.key<=String(as)?kd(Number(i.key)-1):(i.key==="r"||i.key==="R"||i.key==="\u043A"||i.key==="\u041A")&&(Ac(),Di())});var Tc=!1;function Di(){Tc||(Tc=!0,requestAnimationFrame(w_))}function w_(){Tc=!1;let i=Oe.update();$e.render(Pi,Ii),E_(),i&&Di()}Oe.addEventListener("change",Di);window.addEventListener("resize",()=>{Ii.aspect=window.innerWidth/window.innerHeight,Ii.updateProjectionMatrix(),$e.setSize(window.innerWidth,window.innerHeight),Di()});zd();Ac();Rc();{let i=document.getElementById("loading");i&&i.remove()}window.base3dReady=!0;})();
