// Собрано tools/render/build_base3d.sh из tools/render/baseview.js (three.js 0.162.0). Не править вручную.
(()=>{var nl="162",ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,ql=1,df=2;var Sd=1,il=2,di=3,Ci=0,un=1,dn=2,Ti=0,Vs=1,fc=2,Zl=3,$l=4,uf=5,Ki=100,ff=101,pf=102,Jl=103,Kl=104,mf=200,gf=201,xf=202,yf=203,pc=204,mc=205,_f=206,vf=207,Mf=208,bf=209,Ef=210,wf=211,Sf=212,Tf=213,Af=214,Rf=0,Cf=1,Pf=2,Do=3,If=4,Lf=5,Nf=6,Df=7,Td=0,Uf=1,kf=2,Ai=0,zf=1,Of=2,Ff=3,sl=4,Hf=5,Bf=6,Gf=7;var Ad=300,Ys=301,qs=302,gc=303,xc=304,ha=306,ns=1e3,Qt=1001,yc=1002,jt=1003,jl=1004;var xr=1005;var vn=1006,Ia=1007;var Qi=1008;var Ri=1009,Vf=1010,Wf=1011,rl=1012,Rd=1013,Si=1014,ti=1015,Ir=1016,Cd=1017,Pd=1018,es=1020,Xf=1021,$n=1023,Yf=1024,qf=1025,ts=1026,Zs=1027,Id=1028,Ld=1029,Zf=1030,Nd=1031,Dd=1033,La=33776,Na=33777,Da=33778,Ua=33779,Ql=35840,eh=35841,th=35842,nh=35843,Ud=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,ch=37811,lh=37812,hh=37813,dh=37814,uh=37815,fh=37816,ph=37817,mh=37818,gh=37819,xh=37820,yh=37821,ka=36492,_h=36494,vh=36495,$f=36283,Mh=36284,bh=36285,Eh=36286;var Uo=2300,ko=2301,za=2302,wh=2400,Sh=2401,Th=2402;var Jf=3200,kd=3201,zd=0,Kf=1,wi="",Mn="srgb",Ni="srgb-linear",ol="display-p3",da="display-p3-linear",zo="linear",St="srgb",Oo="rec709",Fo="p3";var Ms=7680;var Ah=519,jf=512,Qf=513,e0=514,Od=515,t0=516,n0=517,i0=518,s0=519,Rh=35044;var Ch="300 es",_c=1035,ui=2e3,Ho=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,Sr=Math.PI/180,Lr=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function al(i,e){return(i%e+e)%e}function r0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function a0(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function c0(i,e=1){return e-Math.abs(al(i,e*2)-e)}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&(Ph=i);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*Sr}function g0(i){return i*Lr}function vc(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Di={DEG2RAD:Sr,RAD2DEG:Lr,generateUUID:fs,clamp:Ht,euclideanModulo:al,mapLinear:r0,inverseLerp:o0,lerp:Tr,damp:a0,pingpong:c0,smoothstep:l0,smootherstep:h0,randInt:d0,randFloat:u0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:vc,ceilPowerOfTwo:x0,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:y0,normalize:pn,denormalize:Os},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],y=s[4],v=s[7],R=s[2],P=s[5],I=s[8];return r[0]=o*x+a*_+c*R,r[3]=o*m+a*y+c*P,r[6]=o*g+a*v+c*I,r[1]=l*x+h*_+d*R,r[4]=l*m+h*y+d*P,r[7]=l*g+h*v+d*I,r[2]=u*x+f*_+p*R,r[5]=u*m+f*y+p*P,r[8]=u*g+f*v+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new it;function Fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _0(){let i=Go("canvas");return i.style.display="block",i}var Ih={};function v0(i){i in Ih||(Ih[i]=!0,console.warn(i))}var Lh=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[Ni]:{transfer:zo,primaries:Oo,toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:St,primaries:Oo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[da]:{transfer:zo,primaries:Fo,toReference:i=>i.applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Lh)},[ol]:{transfer:St,primaries:Fo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},M0=new Set([Ni,da]),yt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!M0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ao[e].toReference,s=ao[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ao[i].primaries},getTransfer:function(i){return i===wi?zo:ao[i].transfer}};function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bs,Vo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Go("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ws(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,Wo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var E0=0,bn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=vn,o=Qi,a=$n,c=Ri,l=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=fs(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ad;bn.DEFAULT_ANISOTROPY=1;var Rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,R=(g+1)/2,P=(h+u)/4,I=(d+x)/4,z=(p+m)/4;return y>v&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=I/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=z/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=z/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xo=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bc=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(d!==x||c!==u||l!==f||h!==p){let m=1-a,g=c*u+l*f+h*p+d*x,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let R=Math.sqrt(y),P=Math.atan2(R,g*_);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}let v=a*_;if(c=c*m+u*v,l=l*m+f*v,h=h*m+p*v,d=d*m+x*v,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-a*f,e[t+2]=l*p+h*f+a*u-c*d,e[t+3]=h*p-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new L,Dh=new In,Jn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),lo.subVectors(this.max,yr),Es.subVectors(e.a,yr),ws.subVectors(e.b,yr),Ss.subVectors(e.c,yr),yi.subVectors(ws,Es),_i.subVectors(Ss,ws),Wi.subVectors(Es,Ss);let t=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,_i.z,0,-_i.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-Wi.y,Wi.x,0];return!Ga(t,Es,ws,Ss,lo)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Es,ws,Ss,lo))?!1:(ho.crossVectors(yi,_i),t=[ho.x,ho.y,ho.z],Ga(t,Es,ws,Ss,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,co=new Jn,Es=new L,ws=new L,Ss=new L,yi=new L,_i=new L,Wi=new L,yr=new L,lo=new L,ho=new L,Xi=new L;function Ga(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var w0=new Jn,_r=new L,Va=new L,is=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Va)),this.expandByPoint(_r.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new L,Wa=new L,uo=new L,vi=new L,Xa=new L,fo=new L,Ya=new L,Nr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wa.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Wa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=vi.dot(this.direction),c=-vi.dot(uo),l=vi.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-a,u=o*a-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wa).addScaledVector(uo,u),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Xa.subVectors(t,e),fo.subVectors(n,e),Ya.crossVectors(Xa,fo);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);let c=a*this.direction.dot(fo.crossVectors(vi,fo));if(c<0)return null;let l=a*this.direction.dot(Xa.cross(vi));if(l<0||c+l>o)return null;let h=-a*vi.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,p,x,m)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,x=l*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,x=l*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,T0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Mi.crossVectors(n,Rn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Mi.crossVectors(n,Rn)),Mi.normalize(),po.crossVectors(Rn,Mi),s[0]=Mi.x,s[4]=po.x,s[8]=Rn.x,s[1]=Mi.y,s[5]=po.y,s[9]=Rn.y,s[2]=Mi.z,s[6]=po.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],v=n[11],R=n[15],P=s[0],I=s[4],z=s[8],A=s[12],M=s[1],T=s[5],le=s[9],J=s[13],N=s[2],O=s[6],B=s[10],q=s[14],U=s[3],E=s[7],F=s[11],Y=s[15];return r[0]=o*P+a*M+c*N+l*U,r[4]=o*I+a*T+c*O+l*E,r[8]=o*z+a*le+c*B+l*F,r[12]=o*A+a*J+c*q+l*Y,r[1]=h*P+d*M+u*N+f*U,r[5]=h*I+d*T+u*O+f*E,r[9]=h*z+d*le+u*B+f*F,r[13]=h*A+d*J+u*q+f*Y,r[2]=p*P+x*M+m*N+g*U,r[6]=p*I+x*T+m*O+g*E,r[10]=p*z+x*le+m*B+g*F,r[14]=p*A+x*J+m*q+g*Y,r[3]=_*P+y*M+v*N+R*U,r[7]=_*I+y*T+v*O+R*E,r[11]=_*z+y*le+v*B+R*F,r[15]=_*A+y*J+v*q+R*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+g*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=d*m*l-x*u*l+x*c*f-a*m*f-d*c*g+a*u*g,y=p*u*l-h*m*l-p*c*f+o*m*f+h*c*g-o*u*g,v=h*x*l-p*d*l+p*a*f-o*x*f-h*a*g+o*d*g,R=p*d*c-h*x*c-p*a*u+o*x*u+h*a*m-o*d*m,P=t*_+n*y+s*v+r*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=_*I,e[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*g-n*u*g)*I,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*g+n*c*g)*I,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*I,e[4]=y*I,e[5]=(h*m*r-p*u*r+p*s*f-t*m*f-h*s*g+t*u*g)*I,e[6]=(p*c*r-o*m*r-p*s*l+t*m*l+o*s*g-t*c*g)*I,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*I,e[8]=v*I,e[9]=(p*d*r-h*x*r-p*n*f+t*x*f+h*n*g-t*d*g)*I,e[10]=(o*x*r-p*a*r+p*n*l-t*x*l-o*n*g+t*a*g)*I,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*I,e[12]=R*I,e[13]=(h*x*s-p*d*s+p*n*u-t*x*u-h*n*m+t*d*m)*I,e[14]=(p*a*s-o*x*s-p*n*c+t*x*c+o*n*m-t*a*m)*I,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,_=c*l,y=c*h,v=c*d,R=n.x,P=n.y,I=n.z;return s[0]=(1-(x+g))*R,s[1]=(f+v)*R,s[2]=(p-y)*R,s[3]=0,s[4]=(f-v)*P,s[5]=(1-(u+g))*P,s[6]=(m+_)*P,s[7]=0,s[8]=(p+y)*I,s[9]=(m-_)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let l=1/r,h=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ui){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,p;if(a===ui)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ho)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ui){let c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*l,f=(n+s)*h,p,x;if(a===ui)p=(o+r)*d,x=-2*d;else if(a===Ho)p=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ts=new L,qn=new ft,S0=new L(0,0,0),T0=new L(1,1,1),Mi=new L,po=new L,Rn=new L,Uh=new ft,kh=new In,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,zh=new L,As=new In,ci=new ft,mo=new L,vr=new L,R0=new L,C0=new In,Oh=new L(1,0,0),Fh=new L(0,1,0),Hh=new L(0,0,1),P0={type:"added"},I0={type:"removed"},qa={type:"childadded",child:null},Za={type:"childremoved",child:null},gn=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new On,n=new In,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new it}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vr,mo,this.up):ci.lookAt(mo,vr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ci),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P0),qa.child=e,this.dispatchEvent(qa),qa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new L(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new L,li=new L,$a=new L,hi=new L,Rs=new L,Cs=new L,Bh=new L,Ja=new L,Ka=new L,ja=new L,Fs=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),li.subVectors(n,t),$a.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(li),c=Zn.dot($a),l=li.dot(li),h=li.dot($a),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),li.subVectors(e,t),Zn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Zn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),Ja.subVectors(e,n);let c=Rs.dot(Ja),l=Cs.dot(Ja);if(c<=0&&l<=0)return t.copy(n);Ka.subVectors(e,s);let h=Rs.dot(Ka),d=Cs.dot(Ka);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Rs,o);ja.subVectors(e,r);let f=Rs.dot(ja),p=Cs.dot(ja);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Cs,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Bh.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Bh,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=al(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return yt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Ht(ln.r*255,0,255))*65536+Math.round(Ht(ln.g*255,0,255))*256+Math.round(Ht(ln.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Mn){yt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(go);let n=Tr(bi.h,go.h,t),s=Tr(bi.s,go.s,t),r=Tr(bi.l,go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new je;je.NAMES=Hd;var L0=0,ss=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Vs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new L,xo=new ge,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return v0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}};var qo=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zo=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=0,zn=new ft,ec=new gn,Ps=new L,Cn=new Jn,Mr=new Jn,$t=new L,Ut=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Zo:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Cn.min,Mr.min),Cn.expandByPoint($t),$t.addVectors(Cn.max,Mr.max),Cn.expandByPoint($t)):(Cn.expandByPoint(Mr.min),Cn.expandByPoint(Mr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$t.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),$t.add(Ps)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new L,c[z]=new L;let l=new L,h=new L,d=new L,u=new ge,f=new ge,p=new ge,x=new L,m=new L;function g(z,A,M){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,z),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),p.sub(u);let T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(T),a[z].add(x),a[A].add(x),a[M].add(x),c[z].add(m),c[A].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,A=_.length;z<A;++z){let M=_[z],T=M.start,le=M.count;for(let J=T,N=T+le;J<N;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let y=new L,v=new L,R=new L,P=new L;function I(z){R.fromBufferAttribute(s,z),P.copy(R);let A=a[z];y.copy(A),y.sub(R.multiplyScalar(R.dot(A))).normalize(),v.crossVectors(P,A);let T=v.dot(c[z])<0?-1:1;o.setXYZW(z,y.x,y.y,y.z,T)}for(let z=0,A=_.length;z<A;++z){let M=_[z],T=M.start,le=M.count;for(let J=T,N=T+le;J<N;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)u[p++]=l[f++]}return new Jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new ft,Yi=new Nr,yo=new is,Vh=new L,Is=new L,Ls=new L,Ns=new L,tc=new L,_o=new L,vo=new ge,Mo=new ge,bo=new ge,Wh=new L,Xh=new L,Yh=new L,Eo=new L,wo=new L,Se=class extends gn{constructor(e=new Ut,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(tc.fromBufferAttribute(d,e),o?_o.addScaledVector(tc,h):_o.addScaledVector(tc.sub(t),h))}t.add(_o)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(yo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(yo,Vh)===null||Yi.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,R=y;v<R;v+=3){let P=a.getX(v),I=a.getX(v+1),z=a.getX(v+2);s=So(this,g,e,n,l,h,d,P,I,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=So(this,o,e,n,l,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,R=y;v<R;v+=3){let P=v,I=v+1,z=v+2;s=So(this,g,e,n,l,h,d,P,I,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,y=m+1,v=m+2;s=So(this,o,e,n,l,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function D0(i,e,t,n,s,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ci,a),c===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(wo);return l<t.near||l>t.far?null:{distance:l,point:wo.clone(),object:i}}function So(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Is),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Ns);let h=D0(i,e,t,n,Is,Ls,Ns,Eo);if(h){s&&(vo.fromBufferAttribute(s,a),Mo.fromBufferAttribute(s,c),bo.fromBufferAttribute(s,l),h.uv=Fs.getInterpolation(Eo,Is,Ls,Ns,vo,Mo,bo,new ge)),r&&(vo.fromBufferAttribute(r,a),Mo.fromBufferAttribute(r,c),bo.fromBufferAttribute(r,l),h.uv1=Fs.getInterpolation(Eo,Is,Ls,Ns,vo,Mo,bo,new ge)),o&&(Wh.fromBufferAttribute(o,a),Xh.fromBufferAttribute(o,c),Yh.fromBufferAttribute(o,l),h.normal=Fs.getInterpolation(Eo,Is,Ls,Ns,Wh,Xh,Yh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Fs.getNormal(Is,Ls,Ns,d.normal),h.face=d}return h}var gt=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function p(x,m,g,_,y,v,R,P,I,z,A){let M=v/I,T=R/z,le=v/2,J=R/2,N=P/2,O=I+1,B=z+1,q=0,U=0,E=new L;for(let F=0;F<B;F++){let Y=F*T-J;for(let oe=0;oe<O;oe++){let xe=oe*M-le;E[x]=xe*_,E[m]=Y*y,E[g]=N,l.push(E.x,E.y,E.z),E[x]=0,E[m]=0,E[g]=P>0?1:-1,h.push(E.x,E.y,E.z),d.push(oe/I),d.push(1-F/z),q+=1}}for(let F=0;F<z;F++)for(let Y=0;Y<I;Y++){let oe=u+Y+O*F,xe=u+Y+O*(F+1),W=u+(Y+1)+O*(F+1),fe=u+(Y+1)+O*F;c.push(oe,xe,fe),c.push(xe,W,fe),U+=6}a.addGroup(f,U,A),f+=U,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function U0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bd(i){return i.getRenderTarget()===null?i.outputColorSpace:yt.workingColorSpace}var k0={clone:$s,merge:mn},z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$o=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new L,qh=new ge,Zh=new ge,hn=class extends $o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,qh,Zh),t.subVectors(Zh,qh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Us=1,Ec=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Ds,Us,e,t);s.layers=this.layers,this.add(s);let r=new hn(Ds,Us,e,t);r.layers=this.layers,this.add(r);let o=new hn(Ds,Us,e,t);o.layers=this.layers,this.add(o);let a=new hn(Ds,Us,e,t);a.layers=this.layers,this.add(a);let c=new hn(Ds,Us,e,t);c.layers=this.layers,this.add(c);let l=new hn(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Jo=class extends bn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ti});r.uniforms.tEquirect.value=t;let o=new Se(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=vn),new Ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},nc=new L,F0=new L,H0=new it,Pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=nc.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H0.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new is,To=new L,Dr=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],x=s[10],m=s[11],g=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,m-f,v-g).normalize(),n[1].setComponents(c+r,u+l,m+f,v+g).normalize(),n[2].setComponents(c+o,u+h,m+p,v+_).normalize(),n[3].setComponents(c-o,u-h,m-p,v-_).normalize(),n[4].setComponents(c-a,u-d,m-x,v-y).normalize(),t===ui)n[5].setComponents(c+a,u+d,m+x,v+y).normalize();else if(t===Ho)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function B0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let d=l.array,u=l.usage,f=d.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){let u=h.array,f=h._updateRange,p=h.updateRanges;if(i.bindBuffer(d,l),f.count===-1&&p.length===0&&i.bufferSubData(d,0,u),p.length!==0){for(let x=0,m=p.length;x<m;x++){let g=p[x];t?i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var Pi=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<l;y++){let v=y*d-r;p.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let y=_+l*g,v=_+l*(g+1),R=_+1+l*(g+1),P=_+1+l*g;f.push(y,v,P),f.push(v,R,P)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`
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
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:G0,alphahash_pars_fragment:V0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:Y0,alphatest_pars_fragment:q0,aomap_fragment:Z0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:cp,color_pars_vertex:lp,color_vertex:hp,common:dp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:_p,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:wp,fog_vertex:Sp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Np,lights_pars_begin:Dp,lights_toon_fragment:kp,lights_toon_pars_fragment:zp,lights_phong_fragment:Op,lights_phong_pars_fragment:Fp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Bp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Zp,map_fragment:$p,map_pars_fragment:Jp,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:cm,normal_pars_vertex:lm,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Nm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:km,transmission_pars_fragment:zm,uv_pars_fragment:Om,uv_pars_vertex:Fm,uv_vertex:Hm,worldpos_vertex:Bm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:Ym,cube_frag:qm,depth_vert:Zm,depth_frag:$m,distanceRGBA_vert:Jm,distanceRGBA_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:yg,shadow_frag:_g,sprite_vert:vg,sprite_frag:Mg},Le={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ei={basic:{uniforms:mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:mn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:mn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:mn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:mn([Le.points,Le.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:mn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:mn([Le.common,Le.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:mn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:mn([Le.sprite,Le.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:mn([Le.common,Le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:mn([Le.lights,Le.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ei.physical={uniforms:mn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Ao={r:0,b:0,g:0},Zi=new On,bg=new ft;function Eg(i,e,t,n,s,r,o){let a=new je(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function p(m,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,c):y&&y.isColor&&(x(y,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new Se(new gt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:$s(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(g.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Zi)),h.material.toneMapped=yt.getTransfer(y.colorSpace)!==St,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Se(new Pi(2,2),new ii({name:"BackgroundMaterial",uniforms:$s(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=yt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,g){m.getRGB(Ao,Bd(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),c=g,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:p}}function wg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function d(N,O,B,q,U){let E=!1;if(o){let F=x(q,B,O);l!==F&&(l=F,f(l.object)),E=g(N,q,B,U),E&&_(N,q,B,U)}else{let F=O.wireframe===!0;(l.geometry!==q.id||l.program!==B.id||l.wireframe!==F)&&(l.geometry=q.id,l.program=B.id,l.wireframe=F,E=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(E||h)&&(h=!1,z(N,O,B,q),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,O,B){let q=B.wireframe===!0,U=a[N.id];U===void 0&&(U={},a[N.id]=U);let E=U[O.id];E===void 0&&(E={},U[O.id]=E);let F=E[q];return F===void 0&&(F=m(u()),E[q]=F),F}function m(N){let O=[],B=[],q=[];for(let U=0;U<s;U++)O[U]=0,B[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:q,object:N,attributes:{},index:null}}function g(N,O,B,q){let U=l.attributes,E=O.attributes,F=0,Y=B.getAttributes();for(let oe in Y)if(Y[oe].location>=0){let W=U[oe],fe=E[oe];if(fe===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),W===void 0||W.attribute!==fe||fe&&W.data!==fe.data)return!0;F++}return l.attributesNum!==F||l.index!==q}function _(N,O,B,q){let U={},E=O.attributes,F=0,Y=B.getAttributes();for(let oe in Y)if(Y[oe].location>=0){let W=E[oe];W===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let fe={};fe.attribute=W,W&&W.data&&(fe.data=W.data),U[oe]=fe,F++}l.attributes=U,l.attributesNum=F,l.index=q}function y(){let N=l.newAttributes;for(let O=0,B=N.length;O<B;O++)N[O]=0}function v(N){R(N,0)}function R(N,O){let B=l.newAttributes,q=l.enabledAttributes,U=l.attributeDivisors;B[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),U[N]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),U[N]=O)}function P(){let N=l.newAttributes,O=l.enabledAttributes;for(let B=0,q=O.length;B<q;B++)O[B]!==N[B]&&(i.disableVertexAttribArray(B),O[B]=0)}function I(N,O,B,q,U,E,F){F===!0?i.vertexAttribIPointer(N,O,B,U,E):i.vertexAttribPointer(N,O,B,q,U,E)}function z(N,O,B,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let U=q.attributes,E=B.getAttributes(),F=O.defaultAttributeValues;for(let Y in E){let oe=E[Y];if(oe.location>=0){let xe=U[Y];if(xe===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),xe!==void 0){let W=xe.normalized,fe=xe.itemSize,Ee=t.get(xe);if(Ee===void 0)continue;let Ce=Ee.buffer,H=Ee.type,Z=Ee.bytesPerElement,me=n.isWebGL2===!0&&(H===i.INT||H===i.UNSIGNED_INT||xe.gpuType===Rd);if(xe.isInterleavedBufferAttribute){let pe=xe.data,S=pe.stride,ie=xe.offset;if(pe.isInstancedInterleavedBuffer){for(let j=0;j<oe.locationSize;j++)R(oe.location+j,pe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let j=0;j<oe.locationSize;j++)v(oe.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let j=0;j<oe.locationSize;j++)I(oe.location+j,fe/oe.locationSize,H,W,S*Z,(ie+fe/oe.locationSize*j)*Z,me)}else{if(xe.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)R(oe.location+pe,xe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let pe=0;pe<oe.locationSize;pe++)v(oe.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let pe=0;pe<oe.locationSize;pe++)I(oe.location+pe,fe/oe.locationSize,H,W,fe*Z,fe/oe.locationSize*pe*Z,me)}}else if(F!==void 0){let W=F[Y];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(oe.location,W);break;case 3:i.vertexAttrib3fv(oe.location,W);break;case 4:i.vertexAttrib4fv(oe.location,W);break;default:i.vertexAttrib1fv(oe.location,W)}}}}P()}function A(){le();for(let N in a){let O=a[N];for(let B in O){let q=O[B];for(let U in q)p(q[U].object),delete q[U];delete O[B]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;let O=a[N.id];for(let B in O){let q=O[B];for(let U in q)p(q[U].object),delete q[U];delete O[B]}delete a[N.id]}function T(N){for(let O in a){let B=a[O];if(B[N.id]===void 0)continue;let q=B[N.id];for(let U in q)p(q[U].object),delete q[U];delete B[N.id]}}function le(){J(),h=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:le,resetDefaultState:J,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:P}}function Sg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u;p++)this.render(h[p],d[p]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x];t.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Tg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=o||e.has("OES_texture_float"),R=y&&v,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:P}}function Ag(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,y=_*4,v=g.clippingState||null;c.value=v,v=h(p,u,y,f);for(let R=0;R!==y;++R)v[R]=t[R];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rg(i){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=Ys:a===xc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===xc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new wc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ko=class extends $o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,$h=[.125,.215,.35,.446,.526,.582],ji=20,ic=new Ko,Jh=new je,sc=null,rc=0,oc=0,Ji=(1+Math.sqrt(5))/2,ks=1/Ji,Kh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ji,ks),new L(0,Ji,-ks),new L(ks,0,Ji),new L(-ks,0,Ji),new L(Ji,ks,0),new L(-Ji,ks,0)],Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,oc),e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ir,format:$n,colorSpace:Ni,depthBuffer:!1},s=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,s){let a=new hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Jh),h.toneMapping=Ai,h.autoClear=!1;let f=new rs({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new Se(new gt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Jh),x=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let y=this._cubeSize;Ro(s,_*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ys||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ro(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kh[(s-1)%Kh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Se(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let g=[],_=0;for(let I=0;I<ji;++I){let z=I/x,A=Math.exp(-z*z/2);g.push(A),I===0?_+=A:I<m&&(_+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-n;let v=this._sizeLods[s],R=3*v*(s>y-Hs?s-y+Hs:0),P=4*(this._cubeSize-v);Ro(t,R,P,3*v,2*v),c.setRenderTarget(t),c.render(d,ic)}};function Cg(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+$h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Hs?c=$h[o-i+Hs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,m=2,g=1,_=new Float32Array(x*p*f),y=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let P=0;P<f;P++){let I=P%3*2/3-1,z=P>2?0:-1,A=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];_.set(A,x*p*P),y.set(u,m*p*P);let M=[P,P,P,P,P,P];v.set(M,g*p*P)}let R=new Ut;R.setAttribute("position",new Jt(_,x)),R.setAttribute("uv",new Jt(y,m)),R.setAttribute("faceIndex",new Jt(v,g)),e.push(R),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(i,e,t){let n=new fi(i,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){let n=new Float32Array(ji),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Qh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ed(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function Ig(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===gc||c===xc,h=c===Ys||c===qs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Js(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Js(i));let u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);for(let p in u.morphAttributes){let x=u.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let p in f){let x=f[p];for(let m=0,g=x.length;m<g;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let R=_[y+0],P=_[y+1],I=_[y+2];u.push(R,P,P,I,I,R)}}else if(p!==void 0){let _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let R=y+0,P=y+1,I=y+2;u.push(R,P,P,I,I,R)}}else return;let m=new(Fd(u)?Zo:qo)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Dg(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,p){i.drawElements(r,p,a,f*c),t.update(p,r,1)}function d(f,p,x){if(x===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,p,a,f*c,x),t.update(p,r,x)}function u(f,p,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<x;g++)this.render(f[g]/c,p[g]);else{m.multiDrawElementsWEBGL(r,p,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=p[_];t.update(g,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Ug(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,e){return i[0]-e[0]}function zg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Og(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==p){let le=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",le)};x!==void 0&&x.texture.dispose();let m=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),_===!0&&(P=3);let I=h.attributes.position.count*P,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let A=new Float32Array(I*z*4*p),M=new Xo(A,I,z,p);M.type=ti,M.needsUpdate=!0;let T=P*4;for(let J=0;J<p;J++){let N=y[J],O=v[J],B=R[J],q=I*z*4*J;for(let U=0;U<N.count;U++){let E=U*T;m===!0&&(o.fromBufferAttribute(N,U),A[q+E+0]=o.x,A[q+E+1]=o.y,A[q+E+2]=o.z,A[q+E+3]=0),g===!0&&(o.fromBufferAttribute(O,U),A[q+E+4]=o.x,A[q+E+5]=o.y,A[q+E+6]=o.z,A[q+E+7]=0),_===!0&&(o.fromBufferAttribute(B,U),A[q+E+8]=o.x,A[q+E+9]=o.y,A[q+E+10]=o.z,A[q+E+11]=B.itemSize===4?o.w:1)}}x={count:p,texture:M,size:new ge(I,z)},r.set(h,x),h.addEventListener("dispose",le)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];let g=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<f;y++){let v=p[y];v[0]=y,v[1]=u[y]}p.sort(zg);for(let y=0;y<8;y++)y<f&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(kg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let v=a[y],R=v[0],P=v[1];R!==Number.MAX_SAFE_INTEGER&&P?(x&&h.getAttribute("morphTarget"+y)!==x[R]&&h.setAttribute("morphTarget"+y,x[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=P,g+=P):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Fg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var jo=class extends bn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Si),n===void 0&&h===Zs&&(n=es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vd=new bn,Wd=new jo(1,1);Wd.compareFunction=Od;var Xd=new Xo,Yd=new bc,qd=new Jo,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Xt(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Xt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Xt(t,n)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function e1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function t1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Wd:Vd;t.setTexture2D(e||r,s)}function n1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yd,s)}function i1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qd,s)}function s1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function r1(i){switch(i){case 5126:return Hg;case 35664:return Bg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Zg;case 35668:case 35672:return $g;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(i,e){i.uniform1fv(this.addr,e)}function a1(i,e){let t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function c1(i,e){let t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function l1(i,e){let t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function h1(i,e){let t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d1(i,e){let t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u1(i,e){let t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f1(i,e){i.uniform1iv(this.addr,e)}function p1(i,e){i.uniform2iv(this.addr,e)}function m1(i,e){i.uniform3iv(this.addr,e)}function g1(i,e){i.uniform4iv(this.addr,e)}function x1(i,e){i.uniform1uiv(this.addr,e)}function y1(i,e){i.uniform2uiv(this.addr,e)}function _1(i,e){i.uniform3uiv(this.addr,e)}function v1(i,e){i.uniform4uiv(this.addr,e)}function M1(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vd,r[o])}function b1(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yd,r[o])}function E1(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qd,r[o])}function w1(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xd,r[o])}function S1(i){switch(i){case 5126:return o1;case 35664:return a1;case 35665:return c1;case 35666:return l1;case 35674:return h1;case 35675:return d1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return x1;case 36294:return y1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}var Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S1(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function T1(i,e,t){let n=i.name,s=n.length;for(ac.lastIndex=0;;){let r=ac.exec(n),o=ac.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){od(t,l===void 0?new Sc(a,i,e):new Tc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ac(a),od(t,d)),t=d}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);T1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A1=37297,R1=0;function C1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function P1(i){let e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(i),n;switch(e===t?n="":e===Fo&&t===Oo?n="LinearDisplayP3ToLinearSRGB":e===Oo&&t===Fo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case da:return[n,"LinearTransferOETF"];case Mn:case ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+C1(i.getShaderSource(e),o)}else return s}function I1(i,e){let t=P1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L1(i,e){let t;switch(e){case zf:t="Linear";break;case Of:t="Reinhard";break;case Ff:t="OptimizedCineon";break;case sl:t="ACESFilmic";break;case Bf:t="AgX";break;case Gf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function U1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bs(i){return i!==""}function ld(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(z1,F1)}var O1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F1(i,e){let t=nt[e];if(t===void 0){let n=O1.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}var H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(H1,B1)}function B1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function X1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=G1(t),l=V1(t),h=W1(t),d=X1(t),u=Y1(t),f=t.isWebGL2?"":N1(t),p=D1(t),x=U1(r),m=s.createProgram(),g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bs).join(`
`),_.length>0&&(_+=`
`)):(g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),_=[f,ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?L1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Rc(o),o=ld(o,t),o=hd(o,t),a=Rc(a),a=ld(a,t),a=hd(a,t),o=dd(o),a=dd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+g+o,R=y+_+a,P=ad(s,s.VERTEX_SHADER,v),I=ad(s,s.FRAGMENT_SHADER,R);s.attachShader(m,P),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(le){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(I).trim(),B=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,P,I);else{let U=cd(s,P,"vertex"),E=cd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+J+`
`+U+`
`+E)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(N===""||O==="")&&(q=!1);q&&(le.diagnostics={runnable:B,programLog:J,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:_}})}s.deleteShader(P),s.deleteShader(I),A=new Xs(s,m),M=k1(s,m)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,A1)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=I,this}var Z1=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}};function $1(i,e,t,n,s,r,o){let a=new Yo,c=new Cc,l=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,T,le,J,N){let O=J.fog,B=N.geometry,q=M.isMeshStandardMaterial?J.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),E=U&&U.mapping===ha?U.image.height:null,F=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=Y!==void 0?Y.length:0,xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let W,fe,Ee,Ce;if(F){let mt=ei[F];W=mt.vertexShader,fe=mt.fragmentShader}else W=M.vertexShader,fe=M.fragmentShader,c.update(M),Ee=c.getVertexShaderID(M),Ce=c.getFragmentShaderID(M);let H=i.getRenderTarget(),Z=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,pe=!!M.map,S=!!M.matcap,ie=!!U,j=!!M.aoMap,G=!!M.lightMap,$=!!M.bumpMap,re=!!M.normalMap,Me=!!M.displacementMap,Te=!!M.emissiveMap,de=!!M.metalnessMap,w=!!M.roughnessMap,b=M.anisotropy>0,Q=M.clearcoat>0,se=M.iridescence>0,ve=M.sheen>0,_e=M.transmission>0,qe=b&&!!M.anisotropyMap,Ye=Q&&!!M.clearcoatMap,Pe=Q&&!!M.clearcoatNormalMap,Ne=Q&&!!M.clearcoatRoughnessMap,Je=se&&!!M.iridescenceMap,Re=se&&!!M.iridescenceThicknessMap,Nt=ve&&!!M.sheenColorMap,at=ve&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Fe=!!M.specularColorMap,Ge=!!M.specularIntensityMap,k=_e&&!!M.transmissionMap,ye=_e&&!!M.thicknessMap,He=!!M.gradientMap,V=!!M.alphaMap,Ae=M.alphaTest>0,ee=!!M.alphaHash,we=!!M.extensions,ke=Ai;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ke=i.toneMapping);let lt={isWebGL2:d,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:fe,defines:M.defines,customVertexShaderID:Ee,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:me,instancing:Z,instancingColor:Z&&N.instanceColor!==null,instancingMorph:Z&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ni,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:S,envMap:ie,envMapMode:ie&&U.mapping,envMapCubeUVHeight:E,aoMap:j,lightMap:G,bumpMap:$,normalMap:re,displacementMap:f&&Me,emissiveMap:Te,normalMapObjectSpace:re&&M.normalMapType===Kf,normalMapTangentSpace:re&&M.normalMapType===zd,metalnessMap:de,roughnessMap:w,anisotropy:b,anisotropyMap:qe,clearcoat:Q,clearcoatMap:Ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ne,iridescence:se,iridescenceMap:Je,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:Nt,sheenRoughnessMap:at,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:_e,transmissionMap:k,thicknessMap:ye,gradientMap:He,opaque:M.transparent===!1&&M.blending===Vs&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:Ae,alphaHash:ee,combine:M.combine,mapUv:pe&&m(M.map.channel),aoMapUv:j&&m(M.aoMap.channel),lightMapUv:G&&m(M.lightMap.channel),bumpMapUv:$&&m(M.bumpMap.channel),normalMapUv:re&&m(M.normalMap.channel),displacementMapUv:Me&&m(M.displacementMap.channel),emissiveMapUv:Te&&m(M.emissiveMap.channel),metalnessMapUv:de&&m(M.metalnessMap.channel),roughnessMapUv:w&&m(M.roughnessMap.channel),anisotropyMapUv:qe&&m(M.anisotropyMap.channel),clearcoatMapUv:Ye&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:at&&m(M.sheenRoughnessMap.channel),specularMapUv:Xe&&m(M.specularMap.channel),specularColorMapUv:Fe&&m(M.specularColorMap.channel),specularIntensityMapUv:Ge&&m(M.specularIntensityMap.channel),transmissionMapUv:k&&m(M.transmissionMap.channel),thicknessMapUv:ye&&m(M.thicknessMap.channel),alphaMapUv:V&&m(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(re||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(pe||V),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&le.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function _(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let le in M.defines)T.push(le),T.push(M.defines[le]);return M.isRawShaderMaterial===!1&&(y(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function R(M){let T=x[M.type],le;if(T){let J=ei[T];le=k0.clone(J.uniforms)}else le=M.uniforms;return le}function P(M,T){let le;for(let J=0,N=h.length;J<N;J++){let O=h[J];if(O.cacheKey===T){le=O,++le.usedTimes;break}}return le===void 0&&(le=new q1(i,T,M,r),h.push(le)),le}function I(M){if(--M.usedTimes===0){let T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function z(M){c.remove(M)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:R,acquireProgram:P,releaseProgram:I,releaseShaderCache:z,programs:h,dispose:A}}function J1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function K1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,p,x,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,u,f,p,x,m){let g=o(d,u,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function c(d,u,f,p,x,m){let g=o(d,u,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function l(d,u){t.length>1&&t.sort(d||K1),n.length>1&&n.sort(u||fd),s.length>1&&s.sort(u||fd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function j1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new je};break;case"SpotLight":t={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tx=0;function nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ix(i,e){let t=new Q1,n=ex(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new ft,a=new ft;function c(h,d){let u=0,f=0,p=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let x=0,m=0,g=0,_=0,y=0,v=0,R=0,P=0,I=0,z=0,A=0;h.sort(nx);let M=d===!0?Math.PI:1;for(let le=0,J=h.length;le<J;le++){let N=h[le],O=N.color,B=N.intensity,q=N.distance,U=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*B*M,f+=O.g*B*M,p+=O.b*B*M;else if(N.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(N.sh.coefficients[E],B);A++}else if(N.isDirectionalLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){let F=N.shadow,Y=n.get(N);Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,s.directionalShadow[x]=Y,s.directionalShadowMap[x]=U,s.directionalShadowMatrix[x]=N.shadow.matrix,v++}s.directional[x]=E,x++}else if(N.isSpotLight){let E=t.get(N);E.position.setFromMatrixPosition(N.matrixWorld),E.color.copy(O).multiplyScalar(B*M),E.distance=q,E.coneCos=Math.cos(N.angle),E.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),E.decay=N.decay,s.spot[g]=E;let F=N.shadow;if(N.map&&(s.spotLightMap[I]=N.map,I++,F.updateMatrices(N),N.castShadow&&z++),s.spotLightMatrix[g]=F.matrix,N.castShadow){let Y=n.get(N);Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,s.spotShadow[g]=Y,s.spotShadowMap[g]=U,P++}g++}else if(N.isRectAreaLight){let E=t.get(N);E.color.copy(O).multiplyScalar(B),E.halfWidth.set(N.width*.5,0,0),E.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=E,_++}else if(N.isPointLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*M),E.distance=N.distance,E.decay=N.decay,N.castShadow){let F=N.shadow,Y=n.get(N);Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,Y.shadowCameraNear=F.camera.near,Y.shadowCameraFar=F.camera.far,s.pointShadow[m]=Y,s.pointShadowMap[m]=U,s.pointShadowMatrix[m]=N.shadow.matrix,R++}s.point[m]=E,m++}else if(N.isHemisphereLight){let E=t.get(N);E.skyColor.copy(N.color).multiplyScalar(B*M),E.groundColor.copy(N.groundColor).multiplyScalar(B*M),s.hemi[y]=E,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=p;let T=s.hash;(T.directionalLength!==x||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==_||T.hemiLength!==y||T.numDirectionalShadows!==v||T.numPointShadows!==R||T.numSpotShadows!==P||T.numSpotMaps!==I||T.numLightProbes!==A)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=P+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=A,T.directionalLength=x,T.pointLength=m,T.spotLength=g,T.rectAreaLength=_,T.hemiLength=y,T.numDirectionalShadows=v,T.numPointShadows=R,T.numSpotShadows=P,T.numSpotMaps=I,T.numLightProbes=A,s.version=tx++)}function l(h,d){let u=0,f=0,p=0,x=0,m=0,g=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let v=h[_];if(v.isDirectionalLight){let R=s.directional[u];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),u++}else if(v.isSpotLight){let R=s.spot[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),a.identity(),o.copy(v.matrixWorld),o.premultiply(g),a.extractRotation(o),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:c,setupView:l,state:s}}function md(i,e){let t=new ix(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function sx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new md(i,e),t.set(r,[c])):o>=a.length?(c=new md(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Qo=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function ax(i,e,t){let n=new Dr,s=new ge,r=new ge,o=new Rt,a=new Qo({depthPacking:kd}),c=new Ic,l={},h=t.maxTextureSize,d={[Ci]:un,[un]:Ci,[dn]:dn},u=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let g=this.type;this.render=function(P,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let A=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Ti),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let J=g!==di&&this.type===di,N=g===di&&this.type!==di;for(let O=0,B=P.length;O<B;O++){let q=P[O],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let E=U.getFrameExtents();if(s.multiply(E),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/E.x),s.x=r.x*E.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/E.y),s.y=r.y*E.y,U.mapSize.y=r.y)),U.map===null||J===!0||N===!0){let Y=this.type!==di?{minFilter:jt,magFilter:jt}:{};U.map!==null&&U.map.dispose(),U.map=new fi(s.x,s.y,Y),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let F=U.getViewportCount();for(let Y=0;Y<F;Y++){let oe=U.getViewport(Y);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),le.viewport(o),U.updateMatrices(q,Y),n=U.getFrustum(),v(I,z,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===di&&_(U,z),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(A,M,T)};function _(P,I){let z=e.update(x);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new fi(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,z,u,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,z,f,x,null)}function y(P,I,z,A){let M=null,T=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=z.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let le=M.uuid,J=I.uuid,N=l[le];N===void 0&&(N={},l[le]=N);let O=N[J];O===void 0&&(O=M.clone(),N[J]=O,I.addEventListener("dispose",R)),M=O}if(M.visible=I.visible,M.wireframe=I.wireframe,A===di?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:d[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let le=i.properties.get(M);le.light=z}return M}function v(P,I,z,A,M){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===di)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);let J=e.update(P),N=P.material;if(Array.isArray(N)){let O=J.groups;for(let B=0,q=O.length;B<q;B++){let U=O[B],E=N[U.materialIndex];if(E&&E.visible){let F=y(P,E,A,M);P.onBeforeShadow(i,P,I,z,J,F,U),i.renderBufferDirect(z,null,J,F,P,U),P.onAfterShadow(i,P,I,z,J,F,U)}}}else if(N.visible){let O=y(P,N,A,M);P.onBeforeShadow(i,P,I,z,J,O,null),i.renderBufferDirect(z,null,J,O,P,null),P.onAfterShadow(i,P,I,z,J,O,null)}}let le=P.children;for(let J=0,N=le.length;J<N;J++)v(le[J],I,z,A,M)}function R(P){P.target.removeEventListener("dispose",R);for(let z in l){let A=l[z],M=P.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function cx(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Ae=new Rt,ee=null,we=new Rt(0,0,0,0);return{setMask:function(ke){ee!==ke&&!V&&(i.colorMask(ke,ke,ke,ke),ee=ke)},setLocked:function(ke){V=ke},setClear:function(ke,lt,mt,vt,Dt){Dt===!0&&(ke*=vt,lt*=vt,mt*=vt),Ae.set(ke,lt,mt,vt),we.equals(Ae)===!1&&(i.clearColor(ke,lt,mt,vt),we.copy(Ae))},reset:function(){V=!1,ee=null,we.set(-1,0,0,0)}}}function r(){let V=!1,Ae=null,ee=null,we=null;return{setTest:function(ke){ke?Z(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ke){Ae!==ke&&!V&&(i.depthMask(ke),Ae=ke)},setFunc:function(ke){if(ee!==ke){switch(ke){case Rf:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case If:i.depthFunc(i.EQUAL);break;case Lf:i.depthFunc(i.GEQUAL);break;case Nf:i.depthFunc(i.GREATER);break;case Df:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ke}},setLocked:function(ke){V=ke},setClear:function(ke){we!==ke&&(i.clearDepth(ke),we=ke)},reset:function(){V=!1,Ae=null,ee=null,we=null}}}function o(){let V=!1,Ae=null,ee=null,we=null,ke=null,lt=null,mt=null,vt=null,Dt=null;return{setTest:function(dt){V||(dt?Z(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(dt){Ae!==dt&&!V&&(i.stencilMask(dt),Ae=dt)},setFunc:function(dt,wt,on){(ee!==dt||we!==wt||ke!==on)&&(i.stencilFunc(dt,wt,on),ee=dt,we=wt,ke=on)},setOp:function(dt,wt,on){(lt!==dt||mt!==wt||vt!==on)&&(i.stencilOp(dt,wt,on),lt=dt,mt=wt,vt=on)},setLocked:function(dt){V=dt},setClear:function(dt){Dt!==dt&&(i.clearStencil(dt),Dt=dt)},reset:function(){V=!1,Ae=null,ee=null,we=null,ke=null,lt=null,mt=null,vt=null,Dt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,u={},f={},p=new WeakMap,x=[],m=null,g=!1,_=null,y=null,v=null,R=null,P=null,I=null,z=null,A=new je(0,0,0),M=0,T=!1,le=null,J=null,N=null,O=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,E=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=E>=1):F.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=E>=2);let Y=null,oe={},xe=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),fe=new Rt().fromArray(xe),Ee=new Rt().fromArray(W);function Ce(V,Ae,ee,we){let ke=new Uint8Array(4),lt=i.createTexture();i.bindTexture(V,lt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<ee;mt++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Ae+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return lt}let H={};H[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(H[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Z(i.DEPTH_TEST),c.setFunc(Do),Me(!1),Te(ql),Z(i.CULL_FACE),$(Ti);function Z(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function me(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function pe(V,Ae){return f[V]!==Ae?(i.bindFramebuffer(V,Ae),f[V]=Ae,n&&(V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ae),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function S(V,Ae){let ee=x,we=!1;if(V){ee=p.get(Ae),ee===void 0&&(ee=[],p.set(Ae,ee));let ke=V.textures;if(ee.length!==ke.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,mt=ke.length;lt<mt;lt++)ee[lt]=i.COLOR_ATTACHMENT0+lt;ee.length=ke.length,we=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,we=!0);if(we)if(t.isWebGL2)i.drawBuffers(ee);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ie(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let j={[Ki]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};if(n)j[Jl]=i.MIN,j[Kl]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(j[Jl]=V.MIN_EXT,j[Kl]=V.MAX_EXT)}let G={[mf]:i.ZERO,[gf]:i.ONE,[xf]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function $(V,Ae,ee,we,ke,lt,mt,vt,Dt,dt){if(V===Ti){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),V!==uf){if(V!==_||dt!==T){if((y!==Ki||P!==Ki)&&(i.blendEquation(i.FUNC_ADD),y=Ki,P=Ki),dt)switch(V){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,R=null,I=null,z=null,A.set(0,0,0),M=0,_=V,T=dt}return}ke=ke||Ae,lt=lt||ee,mt=mt||we,(Ae!==y||ke!==P)&&(i.blendEquationSeparate(j[Ae],j[ke]),y=Ae,P=ke),(ee!==v||we!==R||lt!==I||mt!==z)&&(i.blendFuncSeparate(G[ee],G[we],G[lt],G[mt]),v=ee,R=we,I=lt,z=mt),(vt.equals(A)===!1||Dt!==M)&&(i.blendColor(vt.r,vt.g,vt.b,Dt),A.copy(vt),M=Dt),_=V,T=!1}function re(V,Ae){V.side===dn?me(i.CULL_FACE):Z(i.CULL_FACE);let ee=V.side===un;Ae&&(ee=!ee),Me(ee),V.blending===Vs&&V.transparent===!1?$(Ti):$(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);let we=V.stencilWrite;l.setTest(we),we&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),w(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(V){le!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),le=V)}function Te(V){V!==hf?(Z(i.CULL_FACE),V!==J&&(V===ql?i.cullFace(i.BACK):V===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),J=V}function de(V){V!==N&&(U&&i.lineWidth(V),N=V)}function w(V,Ae,ee){V?(Z(i.POLYGON_OFFSET_FILL),(O!==Ae||B!==ee)&&(i.polygonOffset(Ae,ee),O=Ae,B=ee)):me(i.POLYGON_OFFSET_FILL)}function b(V){V?Z(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Q(V){V===void 0&&(V=i.TEXTURE0+q-1),Y!==V&&(i.activeTexture(V),Y=V)}function se(V,Ae,ee){ee===void 0&&(Y===null?ee=i.TEXTURE0+q-1:ee=Y);let we=oe[ee];we===void 0&&(we={type:void 0,texture:void 0},oe[ee]=we),(we.type!==V||we.texture!==Ae)&&(Y!==ee&&(i.activeTexture(ee),Y=ee),i.bindTexture(V,Ae||H[V]),we.type=V,we.texture=Ae)}function ve(){let V=oe[Y];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){fe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function Ge(V){Ee.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Ee.copy(V))}function k(V,Ae){let ee=d.get(Ae);ee===void 0&&(ee=new WeakMap,d.set(Ae,ee));let we=ee.get(V);we===void 0&&(we=i.getUniformBlockIndex(Ae,V.name),ee.set(V,we))}function ye(V,Ae){let we=d.get(Ae).get(V);h.get(Ae)!==we&&(i.uniformBlockBinding(Ae,we,V.__bindingPointIndex),h.set(Ae,we))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,oe={},f={},p=new WeakMap,x=[],m=null,g=!1,_=null,y=null,v=null,R=null,P=null,I=null,z=null,A=new je(0,0,0),M=0,T=!1,le=null,J=null,N=null,O=null,B=null,fe.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Z,disable:me,bindFramebuffer:pe,drawBuffers:S,useProgram:ie,setBlending:$,setMaterial:re,setFlipSided:Me,setCullFace:Te,setLineWidth:de,setPolygonOffset:w,setScissorTest:b,activeTexture:Q,bindTexture:se,unbindTexture:ve,compressedTexImage2D:_e,compressedTexImage3D:qe,texImage2D:at,texImage3D:Xe,updateUBOMapping:k,uniformBlockBinding:ye,texStorage2D:Re,texStorage3D:Nt,texSubImage2D:Ye,texSubImage3D:Pe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Je,scissor:Fe,viewport:Ge,reset:He}}function lx(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ge,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,b){return p?new OffscreenCanvas(w,b):Go("canvas")}function m(w,b,Q,se){let ve=1,_e=de(w);if((_e.width>se||_e.height>se)&&(ve=se/Math.max(_e.width,_e.height)),ve<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let qe=b?Bo:Math.floor,Ye=qe(ve*_e.width),Pe=qe(ve*_e.height);u===void 0&&(u=x(Ye,Pe));let Ne=Q?x(Ye,Pe):u;return Ne.width=Ye,Ne.height=Pe,Ne.getContext("2d").drawImage(w,0,0,Ye,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ye+"x"+Pe+")."),Ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),w;return w}function g(w){let b=de(w);return vc(b.width)&&vc(b.height)}function _(w){return a?!1:w.wrapS!==Qt||w.wrapT!==Qt||w.minFilter!==jt&&w.minFilter!==vn}function y(w,b){return w.generateMipmaps&&b&&w.minFilter!==jt&&w.minFilter!==vn}function v(w){i.generateMipmap(w)}function R(w,b,Q,se,ve=!1){if(a===!1)return b;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e=b;if(b===i.RED&&(Q===i.FLOAT&&(_e=i.R32F),Q===i.HALF_FLOAT&&(_e=i.R16F),Q===i.UNSIGNED_BYTE&&(_e=i.R8)),b===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(_e=i.R8UI),Q===i.UNSIGNED_SHORT&&(_e=i.R16UI),Q===i.UNSIGNED_INT&&(_e=i.R32UI),Q===i.BYTE&&(_e=i.R8I),Q===i.SHORT&&(_e=i.R16I),Q===i.INT&&(_e=i.R32I)),b===i.RG&&(Q===i.FLOAT&&(_e=i.RG32F),Q===i.HALF_FLOAT&&(_e=i.RG16F),Q===i.UNSIGNED_BYTE&&(_e=i.RG8)),b===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(_e=i.RG8UI),Q===i.UNSIGNED_SHORT&&(_e=i.RG16UI),Q===i.UNSIGNED_INT&&(_e=i.RG32UI),Q===i.BYTE&&(_e=i.RG8I),Q===i.SHORT&&(_e=i.RG16I),Q===i.INT&&(_e=i.RG32I)),b===i.RGBA){let qe=ve?zo:yt.getTransfer(se);Q===i.FLOAT&&(_e=i.RGBA32F),Q===i.HALF_FLOAT&&(_e=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(_e=qe===St?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function P(w,b,Q){return y(w,Q)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function I(w){return w===jt||w===jl||w===xr?i.NEAREST:i.LINEAR}function z(w){let b=w.target;b.removeEventListener("dispose",z),M(b),b.isVideoTexture&&d.delete(b)}function A(w){let b=w.target;b.removeEventListener("dispose",A),le(b)}function M(w){let b=n.get(w);if(b.__webglInit===void 0)return;let Q=w.source,se=f.get(Q);if(se){let ve=se[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&T(w),Object.keys(se).length===0&&f.delete(Q)}n.remove(w)}function T(w){let b=n.get(w);i.deleteTexture(b.__webglTexture);let Q=w.source,se=f.get(Q);delete se[b.__cacheKey],o.memory.textures--}function le(w){let b=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let ve=0;ve<b.__webglFramebuffer[se].length;ve++)i.deleteFramebuffer(b.__webglFramebuffer[se][ve]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Q=w.textures;for(let se=0,ve=Q.length;se<ve;se++){let _e=n.get(Q[se]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(Q[se])}n.remove(w)}let J=0;function N(){J=0}function O(){let w=J;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),J+=1,w}function B(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function q(w,b){let Q=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){let se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Q,w,b);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+b)}function U(w,b){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){Ee(Q,w,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+b)}function E(w,b){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){Ee(Q,w,b);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+b)}function F(w,b){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){Ce(Q,w,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+b)}let Y={[ns]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},oe={[jt]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},xe={[jf]:i.NEVER,[s0]:i.ALWAYS,[Qf]:i.LESS,[Od]:i.LEQUAL,[e0]:i.EQUAL,[i0]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function W(w,b,Q){if(b.type===ti&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vn||b.magFilter===Ia||b.magFilter===xr||b.magFilter===Qi||b.minFilter===vn||b.minFilter===Ia||b.minFilter===xr||b.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q?(i.texParameteri(w,i.TEXTURE_WRAP_S,Y[b.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Y[b.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Y[b.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[b.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[b.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Qt||b.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==jt&&b.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==xr&&b.minFilter!==Qi||b.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function fe(w,b){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",z));let se=b.source,ve=f.get(se);ve===void 0&&(ve={},f.set(se,ve));let _e=B(b);if(_e!==w.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ve[_e].usedTimes++;let qe=ve[w.__cacheKey];qe!==void 0&&(ve[w.__cacheKey].usedTimes--,qe.usedTimes===0&&T(b)),w.__cacheKey=_e,w.__webglTexture=ve[_e].texture}return Q}function Ee(w,b,Q){let se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=i.TEXTURE_3D);let ve=fe(w,b),_e=b.source;t.bindTexture(se,w.__webglTexture,i.TEXTURE0+Q);let qe=n.get(_e);if(_e.version!==qe.__version||ve===!0){t.activeTexture(i.TEXTURE0+Q);let Ye=yt.getPrimaries(yt.workingColorSpace),Pe=b.colorSpace===wi?null:yt.getPrimaries(b.colorSpace),Ne=b.colorSpace===wi||Ye===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Je=_(b)&&g(b.image)===!1,Re=m(b.image,Je,!1,s.maxTextureSize);Re=Te(b,Re);let Nt=g(Re)||a,at=r.convert(b.format,b.colorSpace),Xe=r.convert(b.type),Fe=R(b.internalFormat,at,Xe,b.colorSpace,b.isVideoTexture);W(se,b,Nt);let Ge,k=b.mipmaps,ye=a&&b.isVideoTexture!==!0&&Fe!==Ud,He=qe.__version===void 0||ve===!0,V=_e.dataReady,Ae=P(b,Re,Nt);if(b.isDepthTexture)Fe=i.DEPTH_COMPONENT,a?b.type===ti?Fe=i.DEPTH_COMPONENT32F:b.type===Si?Fe=i.DEPTH_COMPONENT24:b.type===es?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:b.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ts&&Fe===i.DEPTH_COMPONENT&&b.type!==rl&&b.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Si,Xe=r.convert(b.type)),b.format===Zs&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,b.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=es,Xe=r.convert(b.type))),He&&(ye?t.texStorage2D(i.TEXTURE_2D,1,Fe,Re.width,Re.height):t.texImage2D(i.TEXTURE_2D,0,Fe,Re.width,Re.height,0,at,Xe,null));else if(b.isDataTexture)if(k.length>0&&Nt){ye&&He&&t.texStorage2D(i.TEXTURE_2D,Ae,Fe,k[0].width,k[0].height);for(let ee=0,we=k.length;ee<we;ee++)Ge=k[ee],ye?V&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,at,Xe,Ge.data):t.texImage2D(i.TEXTURE_2D,ee,Fe,Ge.width,Ge.height,0,at,Xe,Ge.data);b.generateMipmaps=!1}else ye?(He&&t.texStorage2D(i.TEXTURE_2D,Ae,Fe,Re.width,Re.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re.width,Re.height,at,Xe,Re.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,Re.width,Re.height,0,at,Xe,Re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ye&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Fe,k[0].width,k[0].height,Re.depth);for(let ee=0,we=k.length;ee<we;ee++)Ge=k[ee],b.format!==$n?at!==null?ye?V&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Ge.width,Ge.height,Re.depth,at,Ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Fe,Ge.width,Ge.height,Re.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Ge.width,Ge.height,Re.depth,at,Xe,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Fe,Ge.width,Ge.height,Re.depth,0,at,Xe,Ge.data)}else{ye&&He&&t.texStorage2D(i.TEXTURE_2D,Ae,Fe,k[0].width,k[0].height);for(let ee=0,we=k.length;ee<we;ee++)Ge=k[ee],b.format!==$n?at!==null?ye?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,at,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Fe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?V&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,at,Xe,Ge.data):t.texImage2D(i.TEXTURE_2D,ee,Fe,Ge.width,Ge.height,0,at,Xe,Ge.data)}else if(b.isDataArrayTexture)ye?(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Fe,Re.width,Re.height,Re.depth),V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,at,Xe,Re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,Re.width,Re.height,Re.depth,0,at,Xe,Re.data);else if(b.isData3DTexture)ye?(He&&t.texStorage3D(i.TEXTURE_3D,Ae,Fe,Re.width,Re.height,Re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,at,Xe,Re.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,Re.width,Re.height,Re.depth,0,at,Xe,Re.data);else if(b.isFramebufferTexture){if(He)if(ye)t.texStorage2D(i.TEXTURE_2D,Ae,Fe,Re.width,Re.height);else{let ee=Re.width,we=Re.height;for(let ke=0;ke<Ae;ke++)t.texImage2D(i.TEXTURE_2D,ke,Fe,ee,we,0,at,Xe,null),ee>>=1,we>>=1}}else if(k.length>0&&Nt){if(ye&&He){let ee=de(k[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Fe,ee.width,ee.height)}for(let ee=0,we=k.length;ee<we;ee++)Ge=k[ee],ye?V&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,at,Xe,Ge):t.texImage2D(i.TEXTURE_2D,ee,Fe,at,Xe,Ge);b.generateMipmaps=!1}else if(ye){if(He){let ee=de(Re);t.texStorage2D(i.TEXTURE_2D,Ae,Fe,ee.width,ee.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Xe,Re)}else t.texImage2D(i.TEXTURE_2D,0,Fe,at,Xe,Re);y(b,Nt)&&v(se),qe.__version=_e.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ce(w,b,Q){if(b.image.length!==6)return;let se=fe(w,b),ve=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+Q);let _e=n.get(ve);if(ve.version!==_e.__version||se===!0){t.activeTexture(i.TEXTURE0+Q);let qe=yt.getPrimaries(yt.workingColorSpace),Ye=b.colorSpace===wi?null:yt.getPrimaries(b.colorSpace),Pe=b.colorSpace===wi||qe===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,Je=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ee=0;ee<6;ee++)!Ne&&!Je?Re[ee]=m(b.image[ee],!1,!0,s.maxCubemapSize):Re[ee]=Je?b.image[ee].image:b.image[ee],Re[ee]=Te(b,Re[ee]);let Nt=Re[0],at=g(Nt)||a,Xe=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),Ge=R(b.internalFormat,Xe,Fe,b.colorSpace),k=a&&b.isVideoTexture!==!0,ye=_e.__version===void 0||se===!0,He=ve.dataReady,V=P(b,Nt,at);W(i.TEXTURE_CUBE_MAP,b,at);let Ae;if(Ne){k&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ge,Nt.width,Nt.height);for(let ee=0;ee<6;ee++){Ae=Re[ee].mipmaps;for(let we=0;we<Ae.length;we++){let ke=Ae[we];b.format!==$n?Xe!==null?k?He&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,ke.width,ke.height,Xe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,ke.width,ke.height,Xe,Fe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ge,ke.width,ke.height,0,Xe,Fe,ke.data)}}}else{if(Ae=b.mipmaps,k&&ye){Ae.length>0&&V++;let ee=de(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ge,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Je){k?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re[ee].width,Re[ee].height,Xe,Fe,Re[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Re[ee].width,Re[ee].height,0,Xe,Fe,Re[ee].data);for(let we=0;we<Ae.length;we++){let lt=Ae[we].image[ee].image;k?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,lt.width,lt.height,Xe,Fe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ge,lt.width,lt.height,0,Xe,Fe,lt.data)}}else{k?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Xe,Fe,Re[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Xe,Fe,Re[ee]);for(let we=0;we<Ae.length;we++){let ke=Ae[we];k?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Xe,Fe,ke.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ge,Xe,Fe,ke.image[ee])}}}y(b,at)&&v(i.TEXTURE_CUBE_MAP),_e.__version=ve.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function H(w,b,Q,se,ve,_e){let qe=r.convert(Q.format,Q.colorSpace),Ye=r.convert(Q.type),Pe=R(Q.internalFormat,qe,Ye,Q.colorSpace);if(!n.get(b).__hasExternalTextures){let Je=Math.max(1,b.width>>_e),Re=Math.max(1,b.height>>_e);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,Pe,Je,Re,b.depth,0,qe,Ye,null):t.texImage2D(ve,_e,Pe,Je,Re,0,qe,Ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),re(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ve,n.get(Q).__webglTexture,0,$(b)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ve,n.get(Q).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(w,b,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let se=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||re(b)){let ve=b.depthTexture;ve&&ve.isDepthTexture&&(ve.type===ti?se=i.DEPTH_COMPONENT32F:ve.type===Si&&(se=i.DEPTH_COMPONENT24));let _e=$(b);re(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,se,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,se,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let se=$(b);Q&&re(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,b.width,b.height):re(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let se=b.textures;for(let ve=0;ve<se.length;ve++){let _e=se[ve],qe=r.convert(_e.format,_e.colorSpace),Ye=r.convert(_e.type),Pe=R(_e.internalFormat,qe,Ye,_e.colorSpace),Ne=$(b);Q&&re(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Pe,b.width,b.height):re(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Pe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let se=n.get(b.depthTexture).__webglTexture,ve=$(b);if(b.depthTexture.format===ts)re(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===Zs)re(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function pe(w){let b=n.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,w)}else if(Q){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=i.createRenderbuffer(),Z(b.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Z(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function S(w,b,Q){let se=n.get(w);b!==void 0&&H(se.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&pe(w)}function ie(w){let b=w.texture,Q=n.get(w),se=n.get(b);w.addEventListener("dispose",A);let ve=w.textures,_e=w.isWebGLCubeRenderTarget===!0,qe=ve.length>1,Ye=g(w)||a;if(qe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=b.version,o.memory.textures++),_e){Q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(a&&b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Pe]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)Q.__webglFramebuffer[Pe][Ne]=i.createFramebuffer()}else Q.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)Q.__webglFramebuffer[Pe]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(qe)if(s.drawBuffers)for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++){let Je=n.get(ve[Pe]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&re(w)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ve.length;Pe++){let Ne=ve[Pe];Q.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe]);let Je=r.convert(Ne.format,Ne.colorSpace),Re=r.convert(Ne.type),Nt=R(Ne.internalFormat,Je,Re,Ne.colorSpace,w.isXRRenderTarget===!0),at=$(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(Q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),W(i.TEXTURE_CUBE_MAP,b,Ye);for(let Pe=0;Pe<6;Pe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)H(Q.__webglFramebuffer[Pe][Ne],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ne);else H(Q.__webglFramebuffer[Pe],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(b,Ye)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++){let Je=ve[Pe],Re=n.get(Je);t.bindTexture(i.TEXTURE_2D,Re.__webglTexture),W(i.TEXTURE_2D,Je,Ye),H(Q.__webglFramebuffer,w,Je,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),y(Je,Ye)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?Pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,se.__webglTexture),W(Pe,b,Ye),a&&b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)H(Q.__webglFramebuffer[Ne],w,b,i.COLOR_ATTACHMENT0,Pe,Ne);else H(Q.__webglFramebuffer,w,b,i.COLOR_ATTACHMENT0,Pe,0);y(b,Ye)&&v(Pe),t.unbindTexture()}w.depthBuffer&&pe(w)}function j(w){let b=g(w)||a,Q=w.textures;for(let se=0,ve=Q.length;se<ve;se++){let _e=Q[se];if(y(_e,b)){let qe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ye=n.get(_e).__webglTexture;t.bindTexture(qe,Ye),v(qe),t.unbindTexture()}}}function G(w){if(a&&w.samples>0&&re(w)===!1){let b=w.textures,Q=w.width,se=w.height,ve=i.COLOR_BUFFER_BIT,_e=[],qe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ye=n.get(w),Pe=b.length>1;if(Pe)for(let Ne=0;Ne<b.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){_e.push(i.COLOR_ATTACHMENT0+Ne),w.depthBuffer&&_e.push(qe);let Je=Ye.__ignoreDepthValues!==void 0?Ye.__ignoreDepthValues:!1;if(Je===!1&&(w.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ne]),Je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),Pe){let Re=n.get(b[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,Q,se,0,0,Q,se,ve,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ne=0;Ne<b.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ne]);let Je=n.get(b[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}}function $(w){return Math.min(s.maxSamples,w.samples)}function re(w){let b=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(w){let b=o.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function Te(w,b){let Q=w.colorSpace,se=w.format,ve=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_c||Q!==Ni&&Q!==wi&&(yt.getTransfer(Q)===St?a===!1?e.has("EXT_sRGB")===!0&&se===$n?(w.format=_c,w.minFilter=vn,w.generateMipmaps=!1):b=Vo.sRGBToLinear(b):(se!==$n||ve!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function de(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=E,this.setTextureCube=F,this.rebindTextures=S,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=H,this.useMultisampledRTT=re}function hx(i,e,t){let n=t.isWebGL2;function s(r,o=wi){let a,c=yt.getTransfer(o);if(r===Ri)return i.UNSIGNED_BYTE;if(r===Cd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vf)return i.BYTE;if(r===Wf)return i.SHORT;if(r===rl)return i.UNSIGNED_SHORT;if(r===Rd)return i.INT;if(r===Si)return i.UNSIGNED_INT;if(r===ti)return i.FLOAT;if(r===Ir)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xf)return i.ALPHA;if(r===$n)return i.RGBA;if(r===Yf)return i.LUMINANCE;if(r===qf)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Zs)return i.DEPTH_STENCIL;if(r===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Id)return i.RED;if(r===Ld)return i.RED_INTEGER;if(r===Zf)return i.RG;if(r===Nd)return i.RG_INTEGER;if(r===Dd)return i.RGBA_INTEGER;if(r===La||r===Na||r===Da||r===Ua)if(c===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===eh||r===th||r===nh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ih||r===sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ih)return c===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===oh||r===ah||r===ch||r===lh||r===hh||r===dh||r===uh||r===fh||r===ph||r===mh||r===gh||r===xh||r===yh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ka||r===_h||r===vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ka)return c===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$f||r===Mh||r===bh||r===Eh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Lc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},be=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},dx={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new bn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new ii({extensions:{fragDepth:!0},vertexShader:ux,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Se(new Pi(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Dc=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,x=new Nc,m=t.getContextAttributes(),g=null,_=null,y=[],v=[],R=new ge,P=null,I=new hn;I.layers.enable(1),I.viewport=new Rt;let z=new hn;z.layers.enable(2),z.viewport=new Rt;let A=[I,z],M=new Lc;M.layers.enable(1),M.layers.enable(2);let T=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let fe=y[W];return fe===void 0&&(fe=new Ar,y[W]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(W){let fe=y[W];return fe===void 0&&(fe=new Ar,y[W]=fe),fe.getGripSpace()},this.getHand=function(W){let fe=y[W];return fe===void 0&&(fe=new Ar,y[W]=fe),fe.getHandSpace()};function J(W){let fe=v.indexOf(W.inputSource);if(fe===-1)return;let Ee=y[fe];Ee!==void 0&&(Ee.update(W.inputSource,W.frame,l||o),Ee.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",O);for(let W=0;W<y.length;W++){let fe=v[W];fe!==null&&(v[W]=null,y[W].disconnect(fe))}T=null,le=null,x.reset(),e.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",N),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new fi(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Ee=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Zs:ts,Ee=m.stencil?es:Si);let H={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(H),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new fi(u.textureWidth,u.textureHeight,{format:$n,type:Ri,depthTexture:new jo(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let Z=e.properties.get(_);Z.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(W){for(let fe=0;fe<W.removed.length;fe++){let Ee=W.removed[fe],Ce=v.indexOf(Ee);Ce>=0&&(v[Ce]=null,y[Ce].disconnect(Ee))}for(let fe=0;fe<W.added.length;fe++){let Ee=W.added[fe],Ce=v.indexOf(Ee);if(Ce===-1){for(let Z=0;Z<y.length;Z++)if(Z>=v.length){v.push(Ee),Ce=Z;break}else if(v[Z]===null){v[Z]=Ee,Ce=Z;break}if(Ce===-1)break}let H=y[Ce];H&&H.connect(Ee)}}let B=new L,q=new L;function U(W,fe,Ee){B.setFromMatrixPosition(fe.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);let Ce=B.distanceTo(q),H=fe.projectionMatrix.elements,Z=Ee.projectionMatrix.elements,me=H[14]/(H[10]-1),pe=H[14]/(H[10]+1),S=(H[9]+1)/H[5],ie=(H[9]-1)/H[5],j=(H[8]-1)/H[0],G=(Z[8]+1)/Z[0],$=me*j,re=me*G,Me=Ce/(-j+G),Te=Me*-j;fe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Te),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let de=me+Me,w=pe+Me,b=$-Te,Q=re+(Ce-Te),se=S*pe/w*de,ve=ie*pe/w*de;W.projectionMatrix.makePerspective(b,Q,se,ve,de,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function E(W,fe){fe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(fe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),M.near=z.near=I.near=W.near,M.far=z.far=I.far=W.far,(T!==M.near||le!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,le=M.far,I.near=T,I.far=le,z.near=T,z.far=le,I.updateProjectionMatrix(),z.updateProjectionMatrix(),W.updateProjectionMatrix());let fe=W.parent,Ee=M.cameras;E(M,fe);for(let Ce=0;Ce<Ee.length;Ce++)E(Ee[Ce],fe);Ee.length===2?U(M,I,z):M.projectionMatrix.copy(I.projectionMatrix),F(W,M,fe)};function F(W,fe,Ee){Ee===null?W.matrix.copy(fe.matrixWorld):(W.matrix.copy(Ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(fe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(fe.projectionMatrix),W.projectionMatrixInverse.copy(fe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let Y=null;function oe(W,fe){if(h=fe.getViewerPose(l||o),p=fe,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ce=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,Ce=!0);for(let Z=0;Z<Ee.length;Z++){let me=Ee[Z],pe=null;if(f!==null)pe=f.getViewport(me);else{let ie=d.getViewSubImage(u,me);pe=ie.viewport,Z===0&&(e.setRenderTargetTextures(_,ie.colorTexture,u.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(_))}let S=A[Z];S===void 0&&(S=new hn,S.layers.enable(Z),S.viewport=new Rt,A[Z]=S),S.matrix.fromArray(me.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(me.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(pe.x,pe.y,pe.width,pe.height),Z===0&&(M.matrix.copy(S.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ce===!0&&M.cameras.push(S)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){let Z=d.getDepthInformation(Ee[0]);Z&&Z.isValid&&Z.texture&&x.init(e,Z,s.renderState)}}for(let Ee=0;Ee<y.length;Ee++){let Ce=v[Ee],H=y[Ee];Ce!==null&&H!==void 0&&H.update(Ce,fe,l||o)}x.render(e,M),Y&&Y(W,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}let xe=new Gd;xe.setAnimationLoop(oe),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}},$i=new On,px=new ft;function mx(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,y,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,_,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),y=_.envMap,v=_.envMapRotation;if(y&&(m.envMap.value=y,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;let R=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*R,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=s[_.id];v===void 0&&(p(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(_,R);let P=e.render.frame;r[_.id]!==P&&(u(_),r[_.id]=P)}function h(_){let y=d();_.__bindingPointIndex=y;let v=i.createBuffer(),R=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],v=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=v.length;P<I;P++){let z=Array.isArray(v[P])?v[P]:[v[P]];for(let A=0,M=z.length;A<M;A++){let T=z[A];if(f(T,P,A,R)===!0){let le=T.__offset,J=Array.isArray(T.value)?T.value:[T.value],N=0;for(let O=0;O<J.length;O++){let B=J[O],q=x(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,le+N,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,R){let P=_.value,I=y+"_"+v;if(R[I]===void 0)return typeof P=="number"||typeof P=="boolean"?R[I]=P:R[I]=P.clone(),!0;{let z=R[I];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return R[I]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function p(_){let y=_.uniforms,v=0,R=16;for(let I=0,z=y.length;I<z;I++){let A=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,T=A.length;M<T;M++){let le=A[M],J=Array.isArray(le.value)?le.value:[le.value];for(let N=0,O=J.length;N<O;N++){let B=J[N],q=x(B),U=v%R;U!==0&&R-U<q.boundary&&(v+=R-U),le.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=v,v+=q.storage}}}let P=v%R;return P>0&&(v+=R-P),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var Ur=class{constructor(e={}){let{canvas:t=_0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),p=new Int32Array(4),x=null,m=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;let y=this,v=!1,R=0,P=0,I=null,z=-1,A=null,M=new Rt,T=new Rt,le=null,J=new je(0),N=0,O=t.width,B=t.height,q=1,U=null,E=null,F=new Rt(0,0,O,B),Y=new Rt(0,0,O,B),oe=!1,xe=new Dr,W=!1,fe=!1,Ee=null,Ce=new ft,H=new ge,Z=new L,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return I===null?q:1}let S=n;function ie(C,K){for(let ae=0;ae<C.length;ae++){let he=C[ae],te=t.getContext(he,K);if(te!==null)return te}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),S===null){let K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),S=ie(K,C),S===null)throw ie(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let j,G,$,re,Me,Te,de,w,b,Q,se,ve,_e,qe,Ye,Pe,Ne,Je,Re,Nt,at,Xe,Fe,Ge;function k(){j=new Lg(S),G=new Tg(S,j,e),j.init(G),Xe=new hx(S,j,G),$=new cx(S,j,G),re=new Ug(S),Me=new J1,Te=new lx(S,j,$,Me,G,Xe,re),de=new Rg(y),w=new Ig(y),b=new B0(S,G),Fe=new wg(S,j,b,G),Q=new Ng(S,b,re,Fe),se=new Fg(S,Q,b,re),Re=new Og(S,G,Te),Pe=new Ag(Me),ve=new $1(y,de,w,j,G,Fe,Pe),_e=new mx(y,Me),qe=new j1,Ye=new sx(j,G),Je=new Eg(y,de,w,$,se,u,c),Ne=new ax(y,se,G),Ge=new gx(S,re,G,$),Nt=new Sg(S,j,re,G),at=new Dg(S,j,re,G),re.programs=ve.programs,y.capabilities=G,y.extensions=j,y.properties=Me,y.renderLists=qe,y.shadowMap=Ne,y.state=$,y.info=re}k();let ye=new Dc(y,S);this.xr=ye,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(O,B,!1))},this.getSize=function(C){return C.set(O,B)},this.setSize=function(C,K,ae=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,B=K,t.width=Math.floor(C*q),t.height=Math.floor(K*q),ae===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(O*q,B*q).floor()},this.setDrawingBufferSize=function(C,K,ae){O=C,B=K,q=ae,t.width=Math.floor(C*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,K,ae,he){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,K,ae,he),$.viewport(M.copy(F).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,K,ae,he){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,K,ae,he),$.scissor(T.copy(Y).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){$.setScissorTest(oe=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){E=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,K=!0,ae=!0){let he=0;if(C){let te=!1;if(I!==null){let Oe=I.texture.format;te=Oe===Dd||Oe===Nd||Oe===Ld}if(te){let Oe=I.texture.type,We=Oe===Ri||Oe===Si||Oe===rl||Oe===es||Oe===Cd||Oe===Pd,$e=Je.getClearColor(),Ke=Je.getClearAlpha(),ct=$e.r,Qe=$e.g,et=$e.b;We?(f[0]=ct,f[1]=Qe,f[2]=et,f[3]=Ke,S.clearBufferuiv(S.COLOR,0,f)):(p[0]=ct,p[1]=Qe,p[2]=et,p[3]=Ke,S.clearBufferiv(S.COLOR,0,p))}else he|=S.COLOR_BUFFER_BIT}K&&(he|=S.DEPTH_BUFFER_BIT),ae&&(he|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),qe.dispose(),Ye.dispose(),Me.dispose(),de.dispose(),w.dispose(),se.dispose(),Fe.dispose(),Ge.dispose(),ve.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Dt),ye.removeEventListener("sessionend",dt),Ee&&(Ee.dispose(),Ee=null),wt.stop()};function He(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let C=re.autoReset,K=Ne.enabled,ae=Ne.autoUpdate,he=Ne.needsUpdate,te=Ne.type;k(),re.autoReset=C,Ne.enabled=K,Ne.autoUpdate=ae,Ne.needsUpdate=he,Ne.type=te}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){let K=C.target;K.removeEventListener("dispose",ee),we(K)}function we(C){ke(C),Me.remove(C)}function ke(C){let K=Me.get(C).programs;K!==void 0&&(K.forEach(function(ae){ve.releaseProgram(ae)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ae,he,te,Oe){K===null&&(K=me);let We=te.isMesh&&te.matrixWorld.determinant()<0,$e=of(C,K,ae,he,te);$.setMaterial(he,We);let Ke=ae.index,ct=1;if(he.wireframe===!0){if(Ke=Q.getWireframeAttribute(ae),Ke===void 0)return;ct=2}let Qe=ae.drawRange,et=ae.attributes.position,zt=Qe.start*ct,An=(Qe.start+Qe.count)*ct;Oe!==null&&(zt=Math.max(zt,Oe.start*ct),An=Math.min(An,(Oe.start+Oe.count)*ct)),Ke!==null?(zt=Math.max(zt,0),An=Math.min(An,Ke.count)):et!=null&&(zt=Math.max(zt,0),An=Math.min(An,et.count));let Zt=An-zt;if(Zt<0||Zt===1/0)return;Fe.setup(te,he,$e,ae,Ke);let ri,It=Nt;if(Ke!==null&&(ri=b.get(Ke),It=at,It.setIndex(ri)),te.isMesh)he.wireframe===!0?($.setLineWidth(he.wireframeLinewidth*pe()),It.setMode(S.LINES)):It.setMode(S.TRIANGLES);else if(te.isLine){let tt=he.linewidth;tt===void 0&&(tt=1),$.setLineWidth(tt*pe()),te.isLineSegments?It.setMode(S.LINES):te.isLineLoop?It.setMode(S.LINE_LOOP):It.setMode(S.LINE_STRIP)}else te.isPoints?It.setMode(S.POINTS):te.isSprite&&It.setMode(S.TRIANGLES);if(te.isBatchedMesh)It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)It.renderInstances(zt,Zt,te.count);else if(ae.isInstancedBufferGeometry){let tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Aa=Math.min(ae.instanceCount,tt);It.renderInstances(zt,Zt,Aa)}else It.render(zt,Zt)};function lt(C,K,ae){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,oo(C,K,ae),C.side=Ci,C.needsUpdate=!0,oo(C,K,ae),C.side=dn):oo(C,K,ae)}this.compile=function(C,K,ae=null){ae===null&&(ae=C),m=Ye.get(ae),m.init(),_.push(m),ae.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),C!==ae&&C.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights(y._useLegacyLights);let he=new Set;return C.traverse(function(te){let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let We=0;We<Oe.length;We++){let $e=Oe[We];lt($e,ae,te),he.add($e)}else lt(Oe,ae,te),he.add(Oe)}),_.pop(),m=null,he},this.compileAsync=function(C,K,ae=null){let he=this.compile(C,K,ae);return new Promise(te=>{function Oe(){if(he.forEach(function(We){Me.get(We).currentProgram.isReady()&&he.delete(We)}),he.size===0){te(C);return}setTimeout(Oe,10)}j.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let mt=null;function vt(C){mt&&mt(C)}function Dt(){wt.stop()}function dt(){wt.start()}let wt=new Gd;wt.setAnimationLoop(vt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(C){mt=C,ye.setAnimationLoop(C),C===null?wt.stop():wt.start()},ye.addEventListener("sessionstart",Dt),ye.addEventListener("sessionend",dt),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(K),K=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,K,I),m=Ye.get(C,_.length),m.init(),_.push(m),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),xe.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,W=Pe.init(this.clippingPlanes,fe),x=qe.get(C,g.length),x.init(),g.push(x),on(C,K,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(U,E),this.info.render.frame++,W===!0&&Pe.beginShadows();let ae=m.state.shadowsArray;if(Ne.render(ae,C,K),W===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1)&&Je.render(x,C),m.setupLights(y._useLegacyLights),K.isArrayCamera){let he=K.cameras;for(let te=0,Oe=he.length;te<Oe;te++){let We=he[te];Bi(x,C,We,We.viewport)}}else Bi(x,C,K);I!==null&&(Te.updateMultisampleRenderTarget(I),Te.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(y,C,K),Fe.resetDefaultState(),z=-1,A=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function on(C,K,ae,he){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){he&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);let We=se.update(C),$e=C.material;$e.visible&&x.push(C,We,$e,ae,Z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){let We=se.update(C),$e=C.material;if(he&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Z.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Z.copy(We.boundingSphere.center)),Z.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray($e)){let Ke=We.groups;for(let ct=0,Qe=Ke.length;ct<Qe;ct++){let et=Ke[ct],zt=$e[et.materialIndex];zt&&zt.visible&&x.push(C,We,zt,ae,Z.z,et)}}else $e.visible&&x.push(C,We,$e,ae,Z.z,null)}}let Oe=C.children;for(let We=0,$e=Oe.length;We<$e;We++)on(Oe[We],K,ae,he)}function Bi(C,K,ae,he){let te=C.opaque,Oe=C.transmissive,We=C.transparent;m.setupLightsView(ae),W===!0&&Pe.setGlobalState(y.clippingPlanes,ae),Oe.length>0&&so(te,Oe,K,ae),he&&$.viewport(M.copy(he)),te.length>0&&ro(te,K,ae),Oe.length>0&&ro(Oe,K,ae),We.length>0&&ro(We,K,ae),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function so(C,K,ae,he){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;let Oe=G.isWebGL2;Ee===null&&(Ee=new fi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Ir:Ri,minFilter:Qi,samples:Oe?4:0})),y.getDrawingBufferSize(H),Oe?Ee.setSize(H.x,H.y):Ee.setSize(Bo(H.x),Bo(H.y));let We=y.getRenderTarget();y.setRenderTarget(Ee),y.getClearColor(J),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let $e=y.toneMapping;y.toneMapping=Ai,ro(C,ae,he),Te.updateMultisampleRenderTarget(Ee),Te.updateRenderTargetMipmap(Ee);let Ke=!1;for(let ct=0,Qe=K.length;ct<Qe;ct++){let et=K[ct],zt=et.object,An=et.geometry,Zt=et.material,ri=et.group;if(Zt.side===dn&&zt.layers.test(he.layers)){let It=Zt.side;Zt.side=un,Zt.needsUpdate=!0,Gl(zt,ae,he,An,Zt,ri),Zt.side=It,Zt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Te.updateMultisampleRenderTarget(Ee),Te.updateRenderTargetMipmap(Ee)),y.setRenderTarget(We),y.setClearColor(J,N),y.toneMapping=$e}function ro(C,K,ae){let he=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Oe=C.length;te<Oe;te++){let We=C[te],$e=We.object,Ke=We.geometry,ct=he===null?We.material:he,Qe=We.group;$e.layers.test(ae.layers)&&Gl($e,K,ae,Ke,ct,Qe)}}function Gl(C,K,ae,he,te,Oe){C.onBeforeRender(y,K,ae,he,te,Oe),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(y,K,ae,he,C,Oe),te.transparent===!0&&te.side===dn&&te.forceSinglePass===!1?(te.side=un,te.needsUpdate=!0,y.renderBufferDirect(ae,K,he,te,C,Oe),te.side=Ci,te.needsUpdate=!0,y.renderBufferDirect(ae,K,he,te,C,Oe),te.side=dn):y.renderBufferDirect(ae,K,he,te,C,Oe),C.onAfterRender(y,K,ae,he,te,Oe)}function oo(C,K,ae){K.isScene!==!0&&(K=me);let he=Me.get(C),te=m.state.lights,Oe=m.state.shadowsArray,We=te.state.version,$e=ve.getParameters(C,te.state,Oe,K,ae),Ke=ve.getProgramCacheKey($e),ct=he.programs;he.environment=C.isMeshStandardMaterial?K.environment:null,he.fog=K.fog,he.envMap=(C.isMeshStandardMaterial?w:de).get(C.envMap||he.environment),he.envMapRotation=he.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",ee),ct=new Map,he.programs=ct);let Qe=ct.get(Ke);if(Qe!==void 0){if(he.currentProgram===Qe&&he.lightsStateVersion===We)return Wl(C,$e),Qe}else $e.uniforms=ve.getUniforms(C),C.onBuild(ae,$e,y),C.onBeforeCompile($e,y),Qe=ve.acquireProgram($e,Ke),ct.set(Ke,Qe),he.uniforms=$e.uniforms;let et=he.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Pe.uniform),Wl(C,$e),he.needsLights=cf(C),he.lightsStateVersion=We,he.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMap.value=te.state.directionalShadowMap,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotShadowMap.value=te.state.spotShadowMap,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMap.value=te.state.pointShadowMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),he.currentProgram=Qe,he.uniformsList=null,Qe}function Vl(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Xs.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Wl(C,K){let ae=Me.get(C);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function of(C,K,ae,he,te){K.isScene!==!0&&(K=me),Te.resetTextureUnits();let Oe=K.fog,We=he.isMeshStandardMaterial?K.environment:null,$e=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ni,Ke=(he.isMeshStandardMaterial?w:de).get(he.envMap||We),ct=he.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Qe=!!ae.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),et=!!ae.morphAttributes.position,zt=!!ae.morphAttributes.normal,An=!!ae.morphAttributes.color,Zt=Ai;he.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let ri=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,It=ri!==void 0?ri.length:0,tt=Me.get(he),Aa=m.state.lights;if(W===!0&&(fe===!0||C!==A)){let kn=C===A&&he.id===z;Pe.setState(he,C,kn)}let Tt=!1;he.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Aa.state.version||tt.outputColorSpace!==$e||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==Ke||he.fog===!0&&tt.fog!==Oe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Pe.numPlanes||tt.numIntersection!==Pe.numIntersection)||tt.vertexAlphas!==ct||tt.vertexTangents!==Qe||tt.morphTargets!==et||tt.morphNormals!==zt||tt.morphColors!==An||tt.toneMapping!==Zt||G.isWebGL2===!0&&tt.morphTargetsCount!==It)&&(Tt=!0):(Tt=!0,tt.__version=he.version);let Gi=tt.currentProgram;Tt===!0&&(Gi=oo(he,K,te));let Xl=!1,gr=!1,Ra=!1,an=Gi.getUniforms(),Vi=tt.uniforms;if($.useProgram(Gi.program)&&(Xl=!0,gr=!0,Ra=!0),he.id!==z&&(z=he.id,gr=!0),Xl||A!==C){an.setValue(S,"projectionMatrix",C.projectionMatrix),an.setValue(S,"viewMatrix",C.matrixWorldInverse);let kn=an.map.cameraPosition;kn!==void 0&&kn.setValue(S,Z.setFromMatrixPosition(C.matrixWorld)),G.logarithmicDepthBuffer&&an.setValue(S,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&an.setValue(S,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,gr=!0,Ra=!0)}if(te.isSkinnedMesh){an.setOptional(S,te,"bindMatrix"),an.setOptional(S,te,"bindMatrixInverse");let kn=te.skeleton;kn&&(G.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),an.setValue(S,"boneTexture",kn.boneTexture,Te)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(an.setOptional(S,te,"batchingTexture"),an.setValue(S,"batchingTexture",te._matricesTexture,Te));let Ca=ae.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&G.isWebGL2===!0)&&Re.update(te,ae,Gi),(gr||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,an.setValue(S,"receiveShadow",te.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Vi.envMap.value=Ke,Vi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),gr&&(an.setValue(S,"toneMappingExposure",y.toneMappingExposure),tt.needsLights&&af(Vi,Ra),Oe&&he.fog===!0&&_e.refreshFogUniforms(Vi,Oe),_e.refreshMaterialUniforms(Vi,he,q,B,Ee),Xs.upload(S,Vl(tt),Vi,Te)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Xs.upload(S,Vl(tt),Vi,Te),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&an.setValue(S,"center",te.center),an.setValue(S,"modelViewMatrix",te.modelViewMatrix),an.setValue(S,"normalMatrix",te.normalMatrix),an.setValue(S,"modelMatrix",te.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){let kn=he.uniformsGroups;for(let Pa=0,lf=kn.length;Pa<lf;Pa++)if(G.isWebGL2){let Yl=kn[Pa];Ge.update(Yl,Gi),Ge.bind(Yl,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function af(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function cf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,K,ae){Me.get(C.texture).__webglTexture=K,Me.get(C.depthTexture).__webglTexture=ae;let he=Me.get(C);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=ae===void 0,he.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){let ae=Me.get(C);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ae=0){I=C,R=K,P=ae;let he=!0,te=null,Oe=!1,We=!1;if(C){let Ke=Me.get(C);Ke.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(S.FRAMEBUFFER,null),he=!1):Ke.__webglFramebuffer===void 0?Te.setupRenderTarget(C):Ke.__hasExternalTextures&&Te.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);let ct=C.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(We=!0);let Qe=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[K])?te=Qe[K][ae]:te=Qe[K],Oe=!0):G.isWebGL2&&C.samples>0&&Te.useMultisampledRTT(C)===!1?te=Me.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?te=Qe[ae]:te=Qe,M.copy(C.viewport),T.copy(C.scissor),le=C.scissorTest}else M.copy(F).multiplyScalar(q).floor(),T.copy(Y).multiplyScalar(q).floor(),le=oe;if($.bindFramebuffer(S.FRAMEBUFFER,te)&&G.drawBuffers&&he&&$.drawBuffers(C,te),$.viewport(M),$.scissor(T),$.setScissorTest(le),Oe){let Ke=Me.get(C.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ke.__webglTexture,ae)}else if(We){let Ke=Me.get(C.texture),ct=K||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ke.__webglTexture,ae||0,ct)}z=-1},this.readRenderTargetPixels=function(C,K,ae,he,te,Oe,We){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){$.bindFramebuffer(S.FRAMEBUFFER,$e);try{let Ke=C.texture,ct=Ke.format,Qe=Ke.type;if(ct!==$n&&Xe.convert(ct)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=Qe===Ir&&(j.has("EXT_color_buffer_half_float")||G.isWebGL2&&j.has("EXT_color_buffer_float"));if(Qe!==Ri&&Xe.convert(Qe)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===ti&&(G.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-he&&ae>=0&&ae<=C.height-te&&S.readPixels(K,ae,he,te,Xe.convert(ct),Xe.convert(Qe),Oe)}finally{let Ke=I!==null?Me.get(I).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(C,K,ae=0){let he=Math.pow(2,-ae),te=Math.floor(K.image.width*he),Oe=Math.floor(K.image.height*he);Te.setTexture2D(K,0),S.copyTexSubImage2D(S.TEXTURE_2D,ae,0,0,C.x,C.y,te,Oe),$.unbindTexture()},this.copyTextureToTexture=function(C,K,ae,he=0){let te=K.image.width,Oe=K.image.height,We=Xe.convert(ae.format),$e=Xe.convert(ae.type);Te.setTexture2D(ae,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ae.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ae.unpackAlignment),K.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,he,C.x,C.y,te,Oe,We,$e,K.image.data):K.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,he,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,We,K.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,he,C.x,C.y,We,$e,K.image),he===0&&ae.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ae,he,te=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=Math.round(C.max.x-C.min.x),We=Math.round(C.max.y-C.min.y),$e=C.max.z-C.min.z+1,Ke=Xe.convert(he.format),ct=Xe.convert(he.type),Qe;if(he.isData3DTexture)Te.setTexture3D(he,0),Qe=S.TEXTURE_3D;else if(he.isDataArrayTexture||he.isCompressedArrayTexture)Te.setTexture2DArray(he,0),Qe=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,he.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,he.unpackAlignment);let et=S.getParameter(S.UNPACK_ROW_LENGTH),zt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),An=S.getParameter(S.UNPACK_SKIP_PIXELS),Zt=S.getParameter(S.UNPACK_SKIP_ROWS),ri=S.getParameter(S.UNPACK_SKIP_IMAGES),It=ae.isCompressedTexture?ae.mipmaps[te]:ae.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,It.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,It.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,C.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,C.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?S.texSubImage3D(Qe,te,K.x,K.y,K.z,Oe,We,$e,Ke,ct,It.data):he.isCompressedArrayTexture?S.compressedTexSubImage3D(Qe,te,K.x,K.y,K.z,Oe,We,$e,Ke,It.data):S.texSubImage3D(Qe,te,K.x,K.y,K.z,Oe,We,$e,Ke,ct,It),S.pixelStorei(S.UNPACK_ROW_LENGTH,et),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,zt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,An),S.pixelStorei(S.UNPACK_SKIP_ROWS,Zt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ri),te===0&&he.generateMipmaps&&S.generateMipmap(Qe),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Te.setTextureCube(C,0):C.isData3DTexture?Te.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Te.setTexture2DArray(C,0):Te.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,$.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ol?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===da?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Uc=class extends Ur{};Uc.prototype.isWebGL1Renderer=!0;var Ks=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var kc=class extends bn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new ft,gd=new ft,Co=[],xd=new Jn,xx=new ft,br=new Se,Er=new is,js=class extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),xd.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Er.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),gd.multiplyMatrices(n,zs),br.matrixWorld=gd,br.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){let c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(s*this.count),s,this.count,Id,ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ea=class extends bn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ge:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new ft;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ll(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Po=new L,cc=new ll,lc=new ll,hc=new ll,Qs=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),l=Po);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),cc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,x,m),lc.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,x,m),hc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),lc.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),hc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(cc.calc(c),lc.calc(c),hc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function yx(i,e){let t=1-i;return t*t*e}function _x(i,e){return 2*(1-i)*i*e}function vx(i,e){return i*i*e}function Rr(i,e,t,n){return yx(i,e)+_x(i,t)+vx(i,n)}function Mx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Ex(i,e){return 3*(1-i)*i*i*e}function wx(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return Mx(i,e)+bx(i,t)+Ex(i,n)+wx(i,s)}var ta=class extends Fn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oc=class extends Fn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Fn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends Fn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Fn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Fn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(yd(a,c.x,l.x,h.x,d.x),yd(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Qs,CubicBezierCurve:ta,CubicBezierCurve3:Oc,EllipseCurve:zr,LineCurve:na,LineCurve3:Fc,QuadraticBezierCurve:ia,QuadraticBezierCurve3:sa,SplineCurve:ra}),Hc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new oa[s.type]().fromJSON(s))}return this}},er=class extends Hc{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new na(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ia(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ta(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ra(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new zr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class i extends Ut{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new L,u=new ge,f=new L,p=new L,x=new L,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let y=n+_*h*s,v=Math.sin(y),R=Math.cos(y);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*v,d.y=e[P].y,d.z=e[P].x*R,o.push(d.x,d.y,d.z),u.x=_/t,u.y=P/(e.length-1),a.push(u.x,u.y);let I=c[3*P+0]*v,z=c[3*P+1],A=c[3*P+0]*R;l.push(I,z,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,R=v,P=v+e.length,I=v+e.length+1,z=v+1;r.push(R,P,z),r.push(I,z,P)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ii=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ct=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function _(){let v=new L,R=new L,P=0,I=(t-e)/n;for(let z=0;z<=r;z++){let A=[],M=z/r,T=M*(t-e)+e;for(let le=0;le<=s;le++){let J=le/s,N=J*c+a,O=Math.sin(N),B=Math.cos(N);R.x=T*O,R.y=-M*n+m,R.z=T*B,d.push(R.x,R.y,R.z),v.set(O,I,B).normalize(),u.push(v.x,v.y,v.z),f.push(J,1-M),A.push(p++)}x.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let M=x[A][z],T=x[A+1][z],le=x[A+1][z+1],J=x[A][z+1];h.push(M,T,J),h.push(T,le,J),P+=6}l.addGroup(g,P,0),g+=P}function y(v){let R=p,P=new ge,I=new L,z=0,A=v===!0?e:t,M=v===!0?1:-1;for(let le=1;le<=s;le++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),p++;let T=p;for(let le=0;le<=s;le++){let N=le/s*c+a,O=Math.cos(N),B=Math.sin(N);I.x=A*B,I.y=m*M,I.z=A*O,d.push(I.x,I.y,I.z),u.push(0,M,0),P.x=O*.5+.5,P.y=B*.5*M+.5,f.push(P.x,P.y),p++}for(let le=0;le<s;le++){let J=R+le,N=T+le;v===!0?h.push(N,N+1,J):h.push(N+1,N,J),z+=3}l.addGroup(g,z,v===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},aa=class i extends Ct{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bc=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,v=new L,R=new L;for(let P=0;P<t.length;P+=3)f(t[P+0],y),f(t[P+1],v),f(t[P+2],R),c(y,v,R,_)}function c(_,y,v,R){let P=R+1,I=[];for(let z=0;z<=P;z++){I[z]=[];let A=_.clone().lerp(v,z/P),M=y.clone().lerp(v,z/P),T=P-z;for(let le=0;le<=T;le++)le===0&&z===P?I[z][le]=A:I[z][le]=A.clone().lerp(M,le/T)}for(let z=0;z<P;z++)for(let A=0;A<2*(P-z)-1;A++){let M=Math.floor(A/2);A%2===0?(u(I[z][M+1]),u(I[z+1][M]),u(I[z][M])):(u(I[z][M+1]),u(I[z+1][M+1]),u(I[z+1][M]))}}function l(_){let y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,R=g(_)/Math.PI+.5;o.push(v,1-R)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],R=o[_+4],P=Math.max(y,v,R),I=Math.min(y,v,R);P>.9&&I<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let _=new L,y=new L,v=new L,R=new L,P=new ge,I=new ge,z=new ge;for(let A=0,M=0;A<r.length;A+=9,M+=6){_.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),P.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),z.set(o[M+4],o[M+5]),R.copy(_).add(y).add(v).divideScalar(3);let T=m(R);x(P,M+0,_,T),x(I,M+2,y,T),x(z,M+4,v,T)}}function x(_,y,v,R){R<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var en=class extends er{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new er().fromJSON(s))}return this}},Sx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=Px(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let p=t;p<s;p+=t)d=i[p],u=i[p+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Or(r,o,t,a,c,f,0),o}};function Zd(i,e,t,n,s){let r,o;if(s===Bx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=_d(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=_d(r,i[r],i[r+1],o);return o&&fa(o,o.next)&&(Hr(o),o=o.next),o}function as(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fa(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ux(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ax(i,n,s,r):Tx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rx(as(i),e,t),Or(i,e,t,n,s,r,2)):o===2&&Cx(i,e,t,n,s,r):Or(as(i),e,t,n,s,r,1);break}}}function Tx(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Gs(s,a,r,c,o,l,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ax(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,p=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,g=Gc(f,p,e,t,n),_=Gc(x,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=g&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Gs(a,h,c,d,l,u,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Gs(a,h,c,d,l,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Gs(a,h,c,d,l,u,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Gs(a,h,c,d,l,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!fa(s,r)&&$d(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return as(n)}function Cx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ox(o,a)){let c=Jd(o,a);o=as(o,o.next),c=as(c,c.next),Or(o,e,t,n,s,r,0),Or(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Px(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Zd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zx(l));for(s.sort(Ix),r=0;r<s.length;r++)t=Lx(s[r],t);return t}function Ix(i,e){return i.x-e.x}function Lx(i,e){let t=Nx(i,e);if(!t)return e;let n=Jd(t,i);return as(n,n.next),as(t,t.next)}function Nx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Gs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Fr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&Dx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function Dx(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function Ux(i,e,t,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ox(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fx(i,e)&&(Fr(i,e)&&Fr(e,i)&&Hx(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||fa(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fa(i,e){return i.x===e.x&&i.y===e.y}function $d(i,e,t,n){let s=Lo(Lt(i,e,t)),r=Lo(Lt(i,e,n)),o=Lo(Lt(t,n,i)),a=Lo(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&Io(i,t,e)||r===0&&Io(i,n,e)||o===0&&Io(t,i,n)||a===0&&Io(t,e,n))}function Io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lo(i){return i>0?1:i<0?-1:0}function Fx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fr(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function Hx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=new Vc(i.i,i.x,i.y),n=new Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _d(i,e,t,n){let s=new Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Pr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];vd(e),Md(n,e);let o=e.length;t.forEach(vd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Md(n,t[c]);let a=Sx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function vd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Md(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var xn=class i extends Ut{constructor(e=new en([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Gx,y,v=!1,R,P,I,z;g&&(y=g.getSpacedPoints(h),v=!0,u=!1,R=g.computeFrenetFrames(h,!1),P=new L,I=new L,z=new L),u||(m=0,f=0,p=0,x=0);let A=a.extractPoints(l),M=A.shape,T=A.holes;if(!Pr.isClockWise(M)){M=M.reverse();for(let S=0,ie=T.length;S<ie;S++){let j=T[S];Pr.isClockWise(j)&&(T[S]=j.reverse())}}let J=Pr.triangulateShape(M,T),N=M;for(let S=0,ie=T.length;S<ie;S++){let j=T[S];M=M.concat(j)}function O(S,ie,j){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(ie,j)}let B=M.length,q=J.length;function U(S,ie,j){let G,$,re,Me=S.x-ie.x,Te=S.y-ie.y,de=j.x-S.x,w=j.y-S.y,b=Me*Me+Te*Te,Q=Me*w-Te*de;if(Math.abs(Q)>Number.EPSILON){let se=Math.sqrt(b),ve=Math.sqrt(de*de+w*w),_e=ie.x-Te/se,qe=ie.y+Me/se,Ye=j.x-w/ve,Pe=j.y+de/ve,Ne=((Ye-_e)*w-(Pe-qe)*de)/(Me*w-Te*de);G=_e+Me*Ne-S.x,$=qe+Te*Ne-S.y;let Je=G*G+$*$;if(Je<=2)return new ge(G,$);re=Math.sqrt(Je/2)}else{let se=!1;Me>Number.EPSILON?de>Number.EPSILON&&(se=!0):Me<-Number.EPSILON?de<-Number.EPSILON&&(se=!0):Math.sign(Te)===Math.sign(w)&&(se=!0),se?(G=-Te,$=Me,re=Math.sqrt(b)):(G=Me,$=Te,re=Math.sqrt(b/2))}return new ge(G/re,$/re)}let E=[];for(let S=0,ie=N.length,j=ie-1,G=S+1;S<ie;S++,j++,G++)j===ie&&(j=0),G===ie&&(G=0),E[S]=U(N[S],N[j],N[G]);let F=[],Y,oe=E.concat();for(let S=0,ie=T.length;S<ie;S++){let j=T[S];Y=[];for(let G=0,$=j.length,re=$-1,Me=G+1;G<$;G++,re++,Me++)re===$&&(re=0),Me===$&&(Me=0),Y[G]=U(j[G],j[re],j[Me]);F.push(Y),oe=oe.concat(Y)}for(let S=0;S<m;S++){let ie=S/m,j=f*Math.cos(ie*Math.PI/2),G=p*Math.sin(ie*Math.PI/2)+x;for(let $=0,re=N.length;$<re;$++){let Me=O(N[$],E[$],G);Ce(Me.x,Me.y,-j)}for(let $=0,re=T.length;$<re;$++){let Me=T[$];Y=F[$];for(let Te=0,de=Me.length;Te<de;Te++){let w=O(Me[Te],Y[Te],G);Ce(w.x,w.y,-j)}}}let xe=p+x;for(let S=0;S<B;S++){let ie=u?O(M[S],oe[S],xe):M[S];v?(I.copy(R.normals[0]).multiplyScalar(ie.x),P.copy(R.binormals[0]).multiplyScalar(ie.y),z.copy(y[0]).add(I).add(P),Ce(z.x,z.y,z.z)):Ce(ie.x,ie.y,0)}for(let S=1;S<=h;S++)for(let ie=0;ie<B;ie++){let j=u?O(M[ie],oe[ie],xe):M[ie];v?(I.copy(R.normals[S]).multiplyScalar(j.x),P.copy(R.binormals[S]).multiplyScalar(j.y),z.copy(y[S]).add(I).add(P),Ce(z.x,z.y,z.z)):Ce(j.x,j.y,d/h*S)}for(let S=m-1;S>=0;S--){let ie=S/m,j=f*Math.cos(ie*Math.PI/2),G=p*Math.sin(ie*Math.PI/2)+x;for(let $=0,re=N.length;$<re;$++){let Me=O(N[$],E[$],G);Ce(Me.x,Me.y,d+j)}for(let $=0,re=T.length;$<re;$++){let Me=T[$];Y=F[$];for(let Te=0,de=Me.length;Te<de;Te++){let w=O(Me[Te],Y[Te],G);v?Ce(w.x,w.y+y[h-1].y,y[h-1].x+j):Ce(w.x,w.y,d+j)}}}W(),fe();function W(){let S=s.length/3;if(u){let ie=0,j=B*ie;for(let G=0;G<q;G++){let $=J[G];H($[2]+j,$[1]+j,$[0]+j)}ie=h+m*2,j=B*ie;for(let G=0;G<q;G++){let $=J[G];H($[0]+j,$[1]+j,$[2]+j)}}else{for(let ie=0;ie<q;ie++){let j=J[ie];H(j[2],j[1],j[0])}for(let ie=0;ie<q;ie++){let j=J[ie];H(j[0]+B*h,j[1]+B*h,j[2]+B*h)}}n.addGroup(S,s.length/3-S,0)}function fe(){let S=s.length/3,ie=0;Ee(N,ie),ie+=N.length;for(let j=0,G=T.length;j<G;j++){let $=T[j];Ee($,ie),ie+=$.length}n.addGroup(S,s.length/3-S,1)}function Ee(S,ie){let j=S.length;for(;--j>=0;){let G=j,$=j-1;$<0&&($=S.length-1);for(let re=0,Me=h+m*2;re<Me;re++){let Te=B*re,de=B*(re+1),w=ie+G+Te,b=ie+$+Te,Q=ie+$+de,se=ie+G+de;Z(w,b,Q,se)}}}function Ce(S,ie,j){c.push(S),c.push(ie),c.push(j)}function H(S,ie,j){me(S),me(ie),me(j);let G=s.length/3,$=_.generateTopUV(n,s,G-3,G-2,G-1);pe($[0]),pe($[1]),pe($[2])}function Z(S,ie,j,G){me(S),me(ie),me(G),me(ie),me(j),me(G);let $=s.length/3,re=_.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);pe(re[0]),pe(re[1]),pe(re[3]),pe(re[1]),pe(re[2]),pe(re[3])}function me(S){s.push(c[S*3+0]),s.push(c[S*3+1]),s.push(c[S*3+2])}function pe(S){r.push(S.x),r.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oa[s.type]().fromJSON(s)),new i(n,e.options)}},Gx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,c),new ge(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-d),new ge(u,1-p),new ge(x,1-g)]:[new ge(a,1-c),new ge(h,1-d),new ge(f,1-p),new ge(m,1-g)]}};function Vx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends Bc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ln=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],y=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let P=R/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(P+v,1-y),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let y=h[g][_+1],v=h[g][_],R=h[g+1][_],P=h[g+1][_+1];(g!==0||o>0)&&f.push(y,v,P),(g!==n-1||c<Math.PI)&&f.push(v,R,P)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Li=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,m,_),o.push(m,g,_)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Br=class i extends Ut{constructor(e=new sa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ge,h=new L,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),_(),g()}function m(y){h=e.getPointAt(y/t,h);let v=o.normals[y],R=o.binormals[y];for(let P=0;P<=s;P++){let I=P/s*Math.PI*2,z=Math.sin(I),A=-Math.cos(I);c.x=A*v.x+z*R.x,c.y=A*v.y+z*R.y,c.z=A*v.z+z*R.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let R=(s+1)*(y-1)+(v-1),P=(s+1)*y+(v-1),I=(s+1)*y+v,z=(s+1)*(y-1)+v;p.push(R,P,z),p.push(P,I,z)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ve=class extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hn=class extends Ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function No(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var tr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wc=class extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,a=2*t-n;break;case Th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,c=2*n-t;break;case Th:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+_*o[l+R]+y*o[c+R]+v*o[d+R];return r}},Xc=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Yc=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Wx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=ko;var ls=class extends Kn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Uo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Kn{};qc.prototype.ValueTypeName="color";var Zc=class extends Kn{};Zc.prototype.ValueTypeName="number";var $c=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends Kn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.DefaultInterpolation=ko;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Kn{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Uo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Kn{};Jc.prototype.ValueTypeName="vector";var Kc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Xx=new Kc,jc=class{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Wr=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dc=new ft,bd=new L,Ed=new L,ca=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wd=new ft,wr=new L,uc=new L,Qc=class extends ca{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),uc.copy(n.position),uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uc),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},Xr=class extends Vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},el=class extends ca{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new el}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hl="\\[\\]\\.:\\/",Yx=new RegExp("["+hl+"]","g"),dl="[^"+hl+"]",qx="[^"+hl.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",dl),$x=/(WCOD+)?/.source.replace("WCOD",qx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),jx=new RegExp("^"+Zx+$x+Jx+Kx+"$"),Qx=["material","materials","bones","map"],tl=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){let t=jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=tl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $2=new Float32Array(1);var Yr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);var Kd={type:"change"},ul={type:"start"},jd={type:"end"},pa=new Nr,Qd=new Pn,e2=Math.cos(70*Di.DEG2RAD),ma=class extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Ye),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kd),n.update(),r=s.NONE},this.update=function(){let k=new L,ye=new In().setFromUnitVectors(e.up,new L(0,1,0)),He=ye.clone().invert(),V=new L,Ae=new In,ee=new L,we=2*Math.PI;return function(lt=null){let mt=n.object.position;k.copy(mt).sub(n.target),k.applyQuaternion(ye),a.setFromVector3(k),n.autoRotate&&r===s.NONE&&le(M(lt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let vt=n.minAzimuthAngle,Dt=n.maxAzimuthAngle;isFinite(vt)&&isFinite(Dt)&&(vt<-Math.PI?vt+=we:vt>Math.PI&&(vt-=we),Dt<-Math.PI?Dt+=we:Dt>Math.PI&&(Dt-=we),vt<=Dt?a.theta=Math.max(vt,Math.min(Dt,a.theta)):a.theta=a.theta>(vt+Dt)/2?Math.max(vt,a.theta):Math.min(Dt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let dt=!1;if(n.zoomToCursor&&P||n.object.isOrthographicCamera)a.radius=F(a.radius);else{let wt=a.radius;a.radius=F(a.radius*l),dt=wt!=a.radius}if(k.setFromSpherical(a),k.applyQuaternion(He),mt.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&P){let wt=null;if(n.object.isPerspectiveCamera){let on=k.length();wt=F(on*l);let Bi=on-wt;n.object.position.addScaledVector(v,Bi),n.object.updateMatrixWorld(),dt=!!Bi}else if(n.object.isOrthographicCamera){let on=new L(R.x,R.y,0);on.unproject(n.object);let Bi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),dt=Bi!==n.object.zoom;let so=new L(R.x,R.y,0);so.unproject(n.object),n.object.position.sub(so).add(on),n.object.updateMatrixWorld(),wt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(pa.origin.copy(n.object.position),pa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(pa.direction))<e2?e.lookAt(n.target):(Qd.setFromNormalAndCoplanarPoint(n.object.up,n.target),pa.intersectPlane(Qd,n.target))))}else if(n.object.isOrthographicCamera){let wt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),wt!==n.object.zoom&&(n.object.updateProjectionMatrix(),dt=!0)}return l=1,P=!1,dt||V.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||ee.distanceToSquared(n.target)>o?(n.dispatchEvent(Kd),V.copy(n.object.position),Ae.copy(n.object.quaternion),ee.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ye),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Yr,c=new Yr,l=1,h=new L,d=new ge,u=new ge,f=new ge,p=new ge,x=new ge,m=new ge,g=new ge,_=new ge,y=new ge,v=new L,R=new ge,P=!1,I=[],z={},A=!1;function M(k){return k!==null?2*Math.PI/60*n.autoRotateSpeed*k:2*Math.PI/60/60*n.autoRotateSpeed}function T(k){let ye=Math.abs(k*.01);return Math.pow(.95,n.zoomSpeed*ye)}function le(k){c.theta-=k}function J(k){c.phi-=k}let N=function(){let k=new L;return function(He,V){k.setFromMatrixColumn(V,0),k.multiplyScalar(-He),h.add(k)}}(),O=function(){let k=new L;return function(He,V){n.screenSpacePanning===!0?k.setFromMatrixColumn(V,1):(k.setFromMatrixColumn(V,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(He),h.add(k)}}(),B=function(){let k=new L;return function(He,V){let Ae=n.domElement;if(n.object.isPerspectiveCamera){let ee=n.object.position;k.copy(ee).sub(n.target);let we=k.length();we*=Math.tan(n.object.fov/2*Math.PI/180),N(2*He*we/Ae.clientHeight,n.object.matrix),O(2*V*we/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(He*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),O(V*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function E(k,ye){if(!n.zoomToCursor)return;P=!0;let He=n.domElement.getBoundingClientRect(),V=k-He.left,Ae=ye-He.top,ee=He.width,we=He.height;R.x=V/ee*2-1,R.y=-(Ae/we)*2+1,v.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function F(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function Y(k){d.set(k.clientX,k.clientY)}function oe(k){E(k.clientX,k.clientX),g.set(k.clientX,k.clientY)}function xe(k){p.set(k.clientX,k.clientY)}function W(k){u.set(k.clientX,k.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ye=n.domElement;le(2*Math.PI*f.x/ye.clientHeight),J(2*Math.PI*f.y/ye.clientHeight),d.copy(u),n.update()}function fe(k){_.set(k.clientX,k.clientY),y.subVectors(_,g),y.y>0?q(T(y.y)):y.y<0&&U(T(y.y)),g.copy(_),n.update()}function Ee(k){x.set(k.clientX,k.clientY),m.subVectors(x,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(x),n.update()}function Ce(k){E(k.clientX,k.clientY),k.deltaY<0?U(T(k.deltaY)):k.deltaY>0&&q(T(k.deltaY)),n.update()}function H(k){let ye=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ye=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ye=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?le(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ye=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?le(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ye=!0;break}ye&&(k.preventDefault(),n.update())}function Z(k){if(I.length===1)d.set(k.pageX,k.pageY);else{let ye=Fe(k),He=.5*(k.pageX+ye.x),V=.5*(k.pageY+ye.y);d.set(He,V)}}function me(k){if(I.length===1)p.set(k.pageX,k.pageY);else{let ye=Fe(k),He=.5*(k.pageX+ye.x),V=.5*(k.pageY+ye.y);p.set(He,V)}}function pe(k){let ye=Fe(k),He=k.pageX-ye.x,V=k.pageY-ye.y,Ae=Math.sqrt(He*He+V*V);g.set(0,Ae)}function S(k){n.enableZoom&&pe(k),n.enablePan&&me(k)}function ie(k){n.enableZoom&&pe(k),n.enableRotate&&Z(k)}function j(k){if(I.length==1)u.set(k.pageX,k.pageY);else{let He=Fe(k),V=.5*(k.pageX+He.x),Ae=.5*(k.pageY+He.y);u.set(V,Ae)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ye=n.domElement;le(2*Math.PI*f.x/ye.clientHeight),J(2*Math.PI*f.y/ye.clientHeight),d.copy(u)}function G(k){if(I.length===1)x.set(k.pageX,k.pageY);else{let ye=Fe(k),He=.5*(k.pageX+ye.x),V=.5*(k.pageY+ye.y);x.set(He,V)}m.subVectors(x,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(x)}function $(k){let ye=Fe(k),He=k.pageX-ye.x,V=k.pageY-ye.y,Ae=Math.sqrt(He*He+V*V);_.set(0,Ae),y.set(0,Math.pow(_.y/g.y,n.zoomSpeed)),q(y.y),g.copy(_);let ee=(k.pageX+ye.x)*.5,we=(k.pageY+ye.y)*.5;E(ee,we)}function re(k){n.enableZoom&&$(k),n.enablePan&&G(k)}function Me(k){n.enableZoom&&$(k),n.enableRotate&&j(k)}function Te(k){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",w)),!at(k)&&(Re(k),k.pointerType==="touch"?Pe(k):b(k)))}function de(k){n.enabled!==!1&&(k.pointerType==="touch"?Ne(k):Q(k))}function w(k){switch(Nt(k),I.length){case 0:n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(jd),r=s.NONE;break;case 1:let ye=I[0],He=z[ye];Pe({pointerId:ye,pageX:He.x,pageY:He.y});break}}function b(k){let ye;switch(k.button){case 0:ye=n.mouseButtons.LEFT;break;case 1:ye=n.mouseButtons.MIDDLE;break;case 2:ye=n.mouseButtons.RIGHT;break;default:ye=-1}switch(ye){case ds.DOLLY:if(n.enableZoom===!1)return;oe(k),r=s.DOLLY;break;case ds.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;xe(k),r=s.PAN}else{if(n.enableRotate===!1)return;Y(k),r=s.ROTATE}break;case ds.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;Y(k),r=s.ROTATE}else{if(n.enablePan===!1)return;xe(k),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ul)}function Q(k){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(k);break;case s.DOLLY:if(n.enableZoom===!1)return;fe(k);break;case s.PAN:if(n.enablePan===!1)return;Ee(k);break}}function se(k){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(k.preventDefault(),n.dispatchEvent(ul),Ce(ve(k)),n.dispatchEvent(jd))}function ve(k){let ye=k.deltaMode,He={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(ye){case 1:He.deltaY*=16;break;case 2:He.deltaY*=100;break}return k.ctrlKey&&!A&&(He.deltaY*=10),He}function _e(k){k.key==="Control"&&(A=!0,n.domElement.getRootNode().addEventListener("keyup",qe,{passive:!0,capture:!0}))}function qe(k){k.key==="Control"&&(A=!1,n.domElement.getRootNode().removeEventListener("keyup",qe,{passive:!0,capture:!0}))}function Ye(k){n.enabled===!1||n.enablePan===!1||H(k)}function Pe(k){switch(Xe(k),I.length){case 1:switch(n.touches.ONE){case us.ROTATE:if(n.enableRotate===!1)return;Z(k),r=s.TOUCH_ROTATE;break;case us.PAN:if(n.enablePan===!1)return;me(k),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;S(k),r=s.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(k),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ul)}function Ne(k){switch(Xe(k),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;j(k),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;G(k),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(k),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(k),n.update();break;default:r=s.NONE}}function Je(k){n.enabled!==!1&&k.preventDefault()}function Re(k){I.push(k.pointerId)}function Nt(k){delete z[k.pointerId];for(let ye=0;ye<I.length;ye++)if(I[ye]==k.pointerId){I.splice(ye,1);return}}function at(k){for(let ye=0;ye<I.length;ye++)if(I[ye]==k.pointerId)return!0;return!1}function Xe(k){let ye=z[k.pointerId];ye===void 0&&(ye=new ge,z[k.pointerId]=ye),ye.set(k.pageX,k.pageY)}function Fe(k){let ye=k.pointerId===I[0]?I[1]:I[0];return z[ye]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}};function tu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ut,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=eu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=eu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function eu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Jt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function nu(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){t.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new st(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&n2(o);let c=o.attributes.position.count,l=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:c,materialIndex:0}];for(let h of l){let d=r[h.materialIndex||0];if(!d||!d.visible)continue;let u=Math.min(h.count,c-h.start);if(u<=0)continue;let f=l.length===1?o:t2(o,h.start,u),p=!!d.vertexColors&&!!f.attributes.color;!p&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${d.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${p?1:0}`;e.has(x)||e.set(x,{material:d,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),e.get(x).geometries.push(f)}l.length>1&&o.dispose()});let n=new be;for(let s of e.values()){let r=tu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new Se(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of t)n.attach(s);return n}function t2(i,e,t){let n=new Ut;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Jt(r.array.slice(e*o,(e+t)*o),o,r.normalized))}return n}function n2(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,c=n[o];n[o]=n[a],n[a]=c}e.needsUpdate=!0}}function fl(i){i.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()})}var ir={cellMeters:1.25,levelMeters:2.5,grid:[66,56],modules:{0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B",1:"\u0410\u043D\u0433\u0430\u0440",2:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",3:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",4:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",6:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",7:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",8:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",9:"\u0416\u0438\u043B\u0430\u044F",10:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"},zones:[{key:"hangar",module:1,name:"\u0410\u043D\u0433\u0430\u0440",x:0,y:0,width:27,height:20},{key:"industry",module:2,name:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",x:27,y:0,width:16,height:20},{key:"support",module:3,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:46,y:0,width:10,height:20},{key:"military",module:4,name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",x:0,y:23,width:24,height:14},{key:"labs",module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",x:27,y:23,width:16,height:14},{key:"isolator",module:6,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:46,y:23,width:10,height:14},{key:"medical",module:7,name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",x:0,y:40,width:13,height:16},{key:"domestic",module:8,name:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",x:16,y:40,width:12,height:16},{key:"living",module:9,name:"\u0416\u0438\u043B\u0430\u044F",x:31,y:40,width:25,height:16},{key:"sport",module:10,name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F",x:59,y:40,width:7,height:16}],rooms:[{module:1,zone:"hangar",name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:0,width:20,height:20,levels:4,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,zone:"hangar",name:"\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:0,width:4,height:17,levels:4,kind:"room",note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:1,zone:"hangar",name:"\u041A\u041F\u041F",x:20,y:17,width:4,height:3,levels:1,kind:"room",note:"\u043F\u043E\u0441\u0442 \u0443 \u0448\u043B\u044E\u0437\u0430 \u0430\u043D\u0433\u0430\u0440\u0430"},{module:1,zone:"hangar",name:"\u041F\u0440\u043E\u0435\u0437\u0434 \u043A \u0446\u0435\u0445\u0443",x:24,y:0,width:3,height:17,levels:1,kind:"corridor",note:"K7 \u0438\u0437 \u0430\u043D\u0433\u0430\u0440\u0430 \u0432 \u0446\u0435\u0445, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u043A \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0430\u0437\u0435"},{module:1,zone:"hangar",name:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0433\u0430\u0440\u0430",x:24,y:17,width:3,height:3,levels:1,kind:"airlock",note:"\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u0437\u0434 \u0438 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440 H1, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438"},{module:2,zone:"industry",name:"\u0426\u0435\u0445 (\u0441\u0442\u0435\u043D\u0434 K7)",x:27,y:5,width:11,height:10,levels:2,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u043A\u0440\u0430\u043D-\u0431\u0430\u043B\u043A\u0430, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u044B\u0441\u043E\u0442\u0430 2 \u0443\u0440\u043E\u0432\u043D\u044F"},{module:2,zone:"industry",name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:27,y:0,width:6,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",x:33,y:0,width:5,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:38,y:0,width:5,height:5,levels:1,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,zone:"industry",name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:38,y:5,width:5,height:5,levels:1,kind:"room",note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u0438\u0444\u0442\u0430"},{module:2,zone:"industry",name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:38,y:10,width:5,height:5,levels:1,kind:"room",note:"\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B"},{module:2,zone:"industry",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:15,width:16,height:2,levels:1,kind:"corridor",note:""},{module:2,zone:"industry",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",x:27,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0428\u043B\u044E\u0437",x:33,y:17,width:4,height:3,levels:1,kind:"airlock",note:""},{module:2,zone:"industry",name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 K7",x:37,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:0,width:2,height:20,levels:1,kind:"corridor",note:""},{module:3,zone:"support",name:"\u041F\u043E\u0441\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0430",x:48,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0431\u043B\u043E\u043A\u0430, \u0441\u0432\u044F\u0437\u044C \u0441 \u044F\u0440\u0443\u0441\u043E\u043C \u22125"},{module:3,zone:"support",name:"\u041B\u0438\u0444\u0442 \u043A \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0443",x:52,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0444\u0442 \u043D\u0430 \u044F\u0440\u0443\u0441 \u22125"},{module:3,zone:"support",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440",x:48,y:4,width:8,height:5,levels:1,kind:"room",note:"\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0449\u0438\u0442\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"},{module:3,zone:"support",name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B",x:48,y:9,width:8,height:5,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u0412\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435",x:48,y:14,width:8,height:6,levels:1,kind:"room",note:""},{module:4,zone:"military",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",x:0,y:23,width:9,height:6,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442\u044B, \u043A\u0430\u0440\u0442\u0430-\u0433\u043B\u043E\u0431\u0443\u0441, \u0441\u0432\u044F\u0437\u044C"},{module:4,zone:"military",name:"\u0411\u0440\u0438\u0444\u0438\u043D\u0433",x:9,y:23,width:5,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B, \u044D\u043A\u0440\u0430\u043D"},{module:4,zone:"military",name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:14,y:23,width:6,height:6,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0431\u043E\u0439\u0446\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,zone:"military",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:29,width:20,height:2,levels:1,kind:"corridor",note:""},{module:4,zone:"military",name:"\u0423\u0437\u0435\u043B \u0441\u0432\u044F\u0437\u0438",x:20,y:23,width:4,height:5,levels:1,kind:"room",note:"\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u044F\u0437\u0438, \u0440\u0430\u0434\u0430\u0440\u044B"},{module:4,zone:"military",name:"\u0428\u043B\u044E\u0437",x:20,y:28,width:4,height:4,levels:1,kind:"airlock",note:""},{module:4,zone:"military",name:"\u0414\u0435\u0436\u0443\u0440\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C",x:20,y:32,width:4,height:5,levels:1,kind:"room",note:"\u0434\u0435\u0436\u0443\u0440\u043D\u044B\u0439 \u043E\u0444\u0438\u0446\u0435\u0440 \u043F\u043E \u0431\u0430\u0437\u0435 \u0438 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u043A\u0430\u043C\u0435\u0440"},{module:4,zone:"military",name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:0,y:31,width:7,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u0441 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,zone:"military",name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:8,y:31,width:5,height:5,levels:1,kind:"room",note:"\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C"},{module:4,zone:"military",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0438\u043A\u0430",x:14,y:31,width:6,height:6,levels:1,kind:"room",note:"\u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0440\u0443\u0436\u0438\u044F"},{module:5,zone:"labs",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0443\u0447\u0451\u043D\u044B\u0445",x:27,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B, \u0448\u043A\u0430\u0444\u044B"},{module:5,zone:"labs",name:"\u0428\u043B\u044E\u0437",x:33,y:23,width:4,height:3,levels:1,kind:"airlock",note:""},{module:5,zone:"labs",name:"\u041F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F",x:37,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B"},{module:5,zone:"labs",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:26,width:16,height:2,levels:1,kind:"corridor",note:""},{module:5,zone:"labs",name:"\u0425\u0438\u043C\u0438\u043A\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:27,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u044B, \u0445\u0440\u043E\u043C\u0430\u0442\u043E\u0433\u0440\u0430\u0444, \u0441\u043F\u0435\u043A\u0442\u0440\u043E\u043C\u0435\u0442\u0440"},{module:5,zone:"labs",name:"\u041A\u0441\u0435\u043D\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:32,y:28,width:6,height:9,levels:1,kind:"room",note:"\u0431\u043E\u043A\u0441\u044B \u0431\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F\u044B, \u0441\u0442\u043E\u043B \u0434\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F"},{module:5,zone:"labs",name:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:38,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439, \u043E\u0441\u0446\u0438\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},{module:6,zone:"isolator",name:"\u0428\u043B\u044E\u0437 \u0441\u0430\u043D\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438",x:46,y:23,width:4,height:4,levels:1,kind:"airlock",note:"\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0432\u0445\u043E\u0434\u043E\u043C \u043A \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C"},{module:6,zone:"isolator",name:"\u041F\u043E\u0441\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",x:50,y:23,width:6,height:4,levels:1,kind:"room",note:"\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u0431\u043E\u043A\u0441\u043E\u0432"},{module:6,zone:"isolator",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:27,width:2,height:10,levels:1,kind:"corridor",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 1",x:48,y:27,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 2",x:48,y:30,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 3",x:48,y:33,width:8,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u0438\u0451\u043C\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",x:0,y:40,width:5,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F, \u0430\u043F\u0442\u0435\u043A\u0430",x:5,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0432\u0440\u0430\u0447\u0430",x:9,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:44,width:13,height:2,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:6,y:46,width:2,height:10,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F",x:0,y:46,width:6,height:5,levels:1,kind:"room",note:"\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B, \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A, \u043D\u0430\u0440\u043A\u043E\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-1",x:0,y:51,width:6,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:7,zone:"medical",name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",x:8,y:46,width:5,height:5,levels:1,kind:"room",note:"\u0440\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-2",x:8,y:51,width:5,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:8,zone:"domestic",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0438 \u043E\u0442\u0434\u044B\u0445",x:16,y:40,width:8,height:7,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B \u043D\u0430 16 \u043C\u0435\u0441\u0442, \u0434\u0438\u0432\u0430\u043D\u044B"},{module:8,zone:"domestic",name:"\u041A\u0430\u043C\u0431\u0443\u0437",x:24,y:40,width:4,height:5,levels:1,kind:"room",note:"\u043F\u043B\u0438\u0442\u0430, \u043C\u043E\u0439\u043A\u0430, \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u043E\u0441\u0442\u0440\u043E\u0432"},{module:8,zone:"domestic",name:"\u041F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434",x:24,y:45,width:4,height:2,levels:1,kind:"room",note:""},{module:8,zone:"domestic",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:16,y:47,width:12,height:2,levels:1,kind:"corridor",note:""},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 1 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:16,y:49,width:6,height:7,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 2 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:22,y:49,width:6,height:4,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F",x:22,y:53,width:6,height:3,levels:1,kind:"room",note:""},{module:10,zone:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",x:59,y:40,width:7,height:11,levels:1,kind:"room",note:"\u0434\u043E\u0440\u043E\u0436\u043A\u0438, \u0432\u0435\u043B\u043E\u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u044B, \u0441\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438, \u0448\u0442\u0430\u043D\u0433\u0438, \u043C\u0430\u0442\u044B"},{module:10,zone:"sport",name:"\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0434\u0443\u0448\u0435\u0432\u044B\u0435",x:59,y:51,width:7,height:5,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0441\u043A\u0430\u043C\u044C\u0438, \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:44,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 1",x:31,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 2",x:35,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 3",x:39,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 4",x:43,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 5",x:47,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 6",x:51,y:40,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 7",x:31,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 8",x:35,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 9",x:39,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 10",x:43,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 11",x:47,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 12",x:51,y:52,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B",x:31,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041D\u0430\u0447. \u0448\u0442\u0430\u0431\u0430",x:34,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u043E\u043C. \u043E\u0442\u0440\u044F\u0434\u0430",x:37,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0432\u0440\u0430\u0447",x:40,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0425\u0438\u0440\u0443\u0440\u0433",x:43,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0443\u0447\u0451\u043D\u044B\u0439",x:46,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0438\u043D\u0436\u0435\u043D\u0435\u0440",x:49,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 13",x:52,y:46,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"}],corridors:[{name:"H1",x:0,y:20,width:56,height:3,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"H2",x:0,y:37,width:59,height:3,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V1",x:24,y:23,width:3,height:14,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V2",x:43,y:0,width:3,height:20,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V2",x:43,y:23,width:3,height:14,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V3",x:13,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V4",x:28,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V5",x:56,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"}],thickWalls:[{x:7,y:31,width:1,height:6},{x:13,y:31,width:1,height:6},{x:8,y:36,width:5,height:1}],doors:[{x:23,y:8,side:"E",size:3,kind:"gate",airlock:-1},{x:24,y:17,side:"N",size:3,kind:"gate",airlock:4},{x:24,y:19,side:"S",size:3,kind:"gate",airlock:4},{x:27,y:9,side:"W",size:3,kind:"gate",airlock:-1},{x:39,y:9,side:"S",size:3,kind:"gate",airlock:-1},{x:33,y:19,side:"S",size:3,kind:"gate",airlock:13},{x:33,y:17,side:"N",size:3,kind:"gate",airlock:13},{x:23,y:29,side:"E",size:3,kind:"gate",airlock:26},{x:20,y:29,side:"W",size:2,kind:"gate",airlock:26},{x:33,y:23,side:"N",size:3,kind:"gate",airlock:32},{x:33,y:25,side:"S",size:3,kind:"gate",airlock:32},{x:46,y:24,side:"W",size:3,kind:"gate",airlock:38},{x:46,y:26,side:"S",size:2,kind:"gate",airlock:38},{x:28,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:4,side:"S",size:3,kind:"gate",airlock:-1},{x:28,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:35,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:39,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:52,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:6,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:11,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:16,side:"W",size:1,kind:"door",airlock:-1},{x:46,y:19,side:"S",size:2,kind:"double",airlock:-1},{x:46,y:17,side:"W",size:1,kind:"door",airlock:-1},{x:23,y:18,side:"E",size:1,kind:"door",airlock:-1},{x:4,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:11,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:16,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:20,y:25,side:"W",size:1,kind:"door",airlock:-1},{x:3,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:10,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:21,y:32,side:"N",size:1,kind:"door",airlock:-1},{x:29,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:39,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:34,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:24,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:28,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:31,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:34,side:"W",size:1,kind:"door",airlock:-1},{x:2,y:40,side:"N",size:1,kind:"door",airlock:-1},{x:2,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:6,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:10,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:12,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:5,y:48,side:"E",size:1,kind:"door",airlock:-1},{x:5,y:53,side:"E",size:1,kind:"door",airlock:-1},{x:8,y:48,side:"W",size:1,kind:"door",airlock:-1},{x:8,y:53,side:"W",size:1,kind:"door",airlock:-1},{x:19,y:40,side:"N",size:2,kind:"double",airlock:-1},{x:19,y:46,side:"S",size:1,kind:"door",airlock:-1},{x:24,y:42,side:"W",size:1,kind:"door",airlock:-1},{x:25,y:45,side:"N",size:1,kind:"door",airlock:-1},{x:18,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:53,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:47,side:"W",size:2,kind:"double",airlock:-1},{x:27,y:47,side:"E",size:2,kind:"double",airlock:-1},{x:31,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:31,y:50,side:"W",size:2,kind:"double",airlock:-1},{x:55,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:55,y:50,side:"E",size:2,kind:"double",airlock:-1},{x:59,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:59,y:52,side:"W",size:1,kind:"door",airlock:-1},{x:61,y:51,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:36,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:52,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:35,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:38,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:41,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:47,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:53,y:46,side:"N",size:1,kind:"door",airlock:-1}],cells:{1:540,2:320,3:200,4:319,5:224,6:140,7:208,8:192,10:112,9:400,0:633},total:3288};function i2(i,e){let t=e==="N"||e==="S"?i.width:i.height,n=e==="N"||e==="S"?i.height:i.width,a={back:{N:"S",S:"N",W:"E",E:"W"}[e],front:e,left:e==="N"||e==="S"?"W":"N",right:e==="N"||e==="S"?"E":"S"};return{across:t,depth:n,faces:a,cell:(l,h,d=1,u=1)=>e==="S"?[i.x+l,i.y+h,d,u]:e==="N"?[i.x+l,i.y+i.height-h-u,d,u]:e==="E"?[i.x+h,i.y+l,u,d]:[i.x+i.width-h-u,i.y+l,u,d]}}function iu(i,e){let t=r=>i.doors.find(o=>o.size===1&&o.x>=r.x&&o.x<r.x+r.width&&o.y>=r.y&&o.y<r.y+r.height),n=(r,o,a,c,l,h,d,u={})=>{let[f,p,x,m]=r.cell(a,c,l,h);e(o,f,p,x,m,{face:r.faces[d]||d,...u})},s=["64,82,110","110,64,58","70,96,70","120,100,60","80,70,110"];i.rooms.filter(r=>r.zone==="living"&&r.kind!=="corridor").forEach((r,o)=>{let a=t(r),c=i2(r,a.side),l=s[o%s.length];if(r.kind==="single"){n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"nightstand",0,2,1,1,"left"),n(c,"deskChair",2,0,1,1,"right",{seed:o}),n(c,"wardrobe",2,3,1,1,"right"),r.name==="\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B"?n(c,"safe",2,1,1,1,"right"):n(c,"shelf",2,1,1,1,"right");return}let h=c.across-1;n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"bed",h,0,1,2,"back",{color:s[(o+2)%s.length]}),n(c,"nightstand",0,2,1,1,"left"),n(c,"nightstand",h,2,1,1,"right"),n(c,"cabinTable",1,0,2,1,"back"),n(c,"wardrobe",0,3,1,1,"left"),n(c,"wardrobe",h,3,1,1,"right"),c.across===5&&n(c,"shelf",3,0,1,1,"back")}),e("liftPlatform",0,0,20,20,{blocks:!1}),e("barrels",20,0),e("barrels",21,0),e("generator",22,0,2,2),e("crate",20,2),e("crate",21,2),e("console",23,3),e("crate",22,14),e("crate",23,14),e("crate",23,15),e("rack",20,15),e("console",20,17,1,1),e("console",21,17,1,1),e("deskChair",20,19,1,1,{face:"S",seed:3}),e("locker",22,19),e("repairStand",31,8,4,4,{blocks:!1}),e("machineTool",30,5,2,1,{face:"N"}),e("machineTool",32,5,2,1,{face:"N"}),e("desk",36,5,2,1),e("rack",37,7),e("rack",37,8),e("rack",37,12),e("crate",36,13),e("crate",37,13),e("generator",34,13,2,2),e("console",27,5);for(let r of[27,29,30,31,32])e("rack",r,0);e("crate",30,2),e("crate",31,2),e("crate",32,2),e("crate",32,3),e("crate",27,3),e("desk",33,0,2,1),e("machineTool",36,0,2,1,{face:"N"}),e("rack",37,2),e("rack",37,3),e("cabinet",33,3),e("liftPlatform",38,0,5,5,{blocks:!1}),e("crate",42,0),e("crate",38,5),e("crate",42,5),e("crate",42,6),e("crate",38,9),e("console",38,7,1,1);for(let r of[10,11,12,13])e("rack",38,r),e("rack",42,r);e("crate",38,14),e("crate",42,14),e("instrumentRack",27,17,1,1,{face:"W",seed:2}),e("desk",30,19,2,1),e("console",32,18),e("labTable",27,19,2,1),e("cabinet",31,17);for(let r of[41,42])e("rack",r,17),e("rack",r,19);e("crate",37,19),e("crate",38,19),e("crate",37,17),e("console",49,0),e("console",50,0),e("console",51,0),e("deskChair",51,3,1,1,{face:"E",seed:5}),e("cabinet",48,3),e("liftPlatform",53,0,3,3,{blocks:!1}),e("console",52,3),e("generator",50,4,2,2),e("generator",53,4,2,2),e("cabinet",55,6),e("cabinet",55,7),e("cabinet",55,8),e("instrumentRack",50,8,1,1,{face:"S"}),e("acUnit",50,9,2,1),e("acUnit",53,9,2,1),e("acUnit",50,12,2,1),e("acUnit",53,12,2,1),e("barrels",55,11),e("tank",50,14,2,3),e("tank",53,14,2,3),e("barrels",55,18),e("barrels",55,19),e("console",50,19);for(let r of[1,2,3,5,6,7])e("console",r,23);e("console",0,25,1,1),e("console",0,26,1,1),e("commandTable",3,25,2,2,{face:"N"}),e("wallScreen",8,25,1,2,{face:"E",seed:4}),e("deskChair",8,27,1,1,{face:"E",seed:6}),e("wallScreen",10,23,3,1,{face:"N",seed:7}),e("chairRow",10,25,3,1,{face:"S"}),e("chairRow",10,26,3,1,{face:"S"});for(let r of[14,15,17,18,19])e("locker",r,23);e("locker",14,24),e("locker",14,25),e("locker",14,26),e("bench",16,25,3,1,{face:"N"}),e("console",21,23),e("console",22,23),e("console",23,23),e("instrumentRack",23,25,1,1,{face:"E",seed:3}),e("instrumentRack",23,26,1,1,{face:"E",seed:5}),e("cabinet",23,27),e("console",20,36,1,1),e("console",21,36,1,1),e("console",22,36,1,1),e("deskChair",23,33,1,1,{face:"E",seed:8}),e("wallScreen",20,33,1,2,{face:"W",seed:2}),e("locker",23,35);for(let r of[32,33,34,35])e("gunRack",0,r,1,1,{face:"W"});for(let r of[1,2,4,5])e("gunRack",r,36,1,1,{face:"S"});e("desk",5,32,2,1),e("locker",6,34),e("locker",6,35);for(let r of[8,9,11,12])for(let o of[32,33,35])e("crate",r,o);e("desk",14,33,1,2),e("machineTool",14,36,2,1,{face:"S"}),e("gunRack",19,33,1,1,{face:"E"}),e("gunRack",19,34,1,1,{face:"E"}),e("labTable",17,35,2,1),e("cabinet",19,36),e("deskChair",27,23,1,1,{face:"N",seed:1}),e("deskChair",28,23,1,1,{face:"N",seed:2}),e("deskChair",30,23,1,1,{face:"N",seed:3}),e("deskChair",31,23,1,1,{face:"N",seed:4}),e("shelf",32,24,1,1,{face:"E"}),e("shelf",32,25,1,1,{face:"E"});for(let r of[37,38,40,41,42])e("instrumentRack",r,23,1,1,{face:"N",seed:r});e("labTable",41,25,2,1),e("fumeHood",27,30,1,1,{face:"W"}),e("fumeHood",27,31,1,1,{face:"W"}),e("fumeHood",27,33,1,1,{face:"W"}),e("labTable",29,31,1,2),e("instrumentRack",31,30,1,1,{face:"E",seed:6}),e("instrumentRack",31,31,1,1,{face:"E",seed:7}),e("cabinet",27,35),e("cabinet",28,36),e("freezer",31,36,1,1,{face:"S"}),e("bioCabinet",32,30,1,1,{face:"W"}),e("bioCabinet",32,31,1,1,{face:"W"}),e("opTable",34,32,1,2,{face:"N"}),e("medCart",35,32,1,1,{face:"E"}),e("labTable",37,30,1,2),e("specimenTank",36,35),e("specimenTank",37,35),e("freezer",32,35,1,1,{face:"W"}),e("freezer",32,36,1,1,{face:"W"}),e("testRig",39,32,2,2,{face:"N"}),e("instrumentRack",42,30,1,1,{face:"E",seed:8}),e("instrumentRack",42,31,1,1,{face:"E",seed:9}),e("instrumentRack",42,34,1,1,{face:"E",seed:10}),e("labTable",38,30,1,2),e("desk",38,36,2,1),e("console",52,23),e("console",53,23),e("console",54,23),e("wallScreen",55,24,1,2,{face:"E",seed:5});for(let[r,o]of[[51,28],[53,28],[55,28],[51,31],[53,31],[55,31],[52,34],[54,35]])e("specimenTank",r,o);e("cabinet",55,27),e("freezer",55,33,1,1,{face:"E"}),e("medBed",0,41,1,2,{face:"W",monitor:!1}),e("deskChair",4,40,1,1,{face:"N",seed:2}),e("cabinet",4,42);for(let r of[5,7,8])e("cabinet",r,40);e("medBed",8,41,1,2,{face:"E",monitor:!1}),e("deskChair",11,40,1,1,{face:"N",seed:9}),e("cabinet",12,40),e("shelf",9,40,1,1,{face:"N"}),e("medBed",12,41,1,2,{face:"E",monitor:!1}),e("opTable",2,47,1,2,{face:"N"}),e("medCart",3,47,1,1,{face:"E"}),e("medCart",1,49,1,1,{face:"W"}),e("cabinet",0,46),e("cabinet",1,46),e("cabinet",0,50);for(let r of[51,53,55])e("medBed",0,r,2,1,{face:"W"});e("cabinet",5,51),e("medBed",11,46,2,1,{face:"E"}),e("medBed",11,48,2,1,{face:"E"}),e("medCart",12,50,1,1,{face:"E"}),e("cabinet",8,46);for(let r of[51,53,55])e("medBed",11,r,2,1,{face:"E"});e("diningTable",16,41,2,2,{face:"N"}),e("diningTable",21,41,2,2,{face:"N"}),e("diningTable",16,43,2,2,{face:"N"}),e("diningTable",21,43,2,2,{face:"N"}),e("servingCounter",23,40,1,1,{face:"E"}),e("servingCounter",23,41,1,1,{face:"E"}),e("sofa",16,46,2,1,{face:"S"}),e("sofa",21,46,2,1,{face:"S",color:"70,84,96"}),e("wallScreen",16,40,2,1,{face:"N",seed:6}),e("galleyFloor",24,40,4,5,{blocks:!1,drain:[3.6,1.4,3.7,5.8]}),e("galleyCounter",24,40,1,1,{face:"N",variant:"drawers",upper:!0}),e("galleyRange",25,40,1,1,{face:"N"}),e("galleyCounter",26,40,1,1,{face:"N",variant:"doors",upper:!0}),e("galleyFridge",27,40,1,1,{face:"N"}),e("galleyCounter",27,41,1,1,{face:"E",variant:"sink2"}),e("galleyCounter",27,42,1,1,{face:"E",variant:"drawers"}),e("galleyCounter",27,43,1,1,{face:"E",variant:"microwave"}),e("galleyCounter",27,44,1,1,{face:"S",variant:"grinder"}),e("galleyCounter",26,44,1,1,{face:"S",variant:"doors"}),e("galleyIsland",26,41,1,2),e("rack",24,46),e("rack",26,46),e("rack",27,46),e("crate",27,45);for(let r of[16,17,19,20,21])e("washbasin",r,49,1,1,{face:"N"});for(let r of[51,52,53,54,55])e("showerCabin",16,r,1,1,{face:"W"}),e("toilet",21,r,1,1,{face:"E"});e("bench",18,52,1,3,{face:"W"});for(let r of[22,23,25])e("washbasin",r,49,1,1,{face:"N"});for(let r of[50,51,52])e("showerCabin",27,r,1,1,{face:"E"});e("toilet",22,51,1,1,{face:"W"}),e("toilet",22,52,1,1,{face:"W"});for(let r of[25,26,27])e("washer",r,55,1,1,{face:"S"});e("washer",22,55,1,1,{face:"S"}),e("labTable",27,53,1,1),e("rack",22,53);for(let r of[59,60,61])e("treadmill",r,40,1,2,{face:"N"});for(let[r,o]of[[64,40],[65,40],[64,41],[65,41]])e("exerciseBike",r,o,1,1,{face:"N"});e("powerRack",64,44,2,2,{face:"E"}),e("weightBench",64,47,1,2,{face:"N"}),e("dumbbellRack",65,47,1,2,{face:"E"}),e("gymMat",60,47,3,2,{blocks:!1}),e("punchingBag",63,50),e("punchingBag",59,50),e("wallScreen",62,40,1,1,{face:"N",seed:1});for(let r of[59,60,61,62,63])e("locker",r,55);e("bench",60,53,3,1,{face:"N"});for(let r of[63,64,65])e("showerCabin",r,51,1,1,{face:"N"});e("showerCabin",65,52,1,1,{face:"E"}),e("washbasin",65,54,1,1,{face:"E"}),e("washbasin",65,55,1,1,{face:"E"})}var Kt={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function su(i){let{TILES:e,LEVEL_H:t,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:c,building:l,stairRun:h,tiltrotor:d,block:u,surface:f,marking:p,floorStyle:x}=i,m=(E,F,Y,oe,xe)=>{for(let W=Math.max(0,F);W<=Math.min(e-1,oe);W++)for(let fe=Math.max(0,E);fe<=Math.min(e-1,Y);fe++)f[W][fe]=xe},g=(E,F,Y,oe)=>{for(let xe=0;xe<e;xe++)for(let W=0;W<e;W++)Math.hypot(W+.5-E,xe+.5-F)<=Y&&(f[xe][W]=oe)},_=(E,F)=>E===0?"g":E===F-1?"t":"u",y=(E,F,Y)=>`${E}_${_(F,Y)}`;m(0,0,e-1,e-1,Kt.grass),m(0,27,e-1,30,Kt.sidewalk),m(0,31,e-1,48,Kt.asphalt),m(0,49,e-1,52,Kt.sidewalk);for(let E=0;E<e;E++)E%4<2&&(E<44||E>48)&&(p[40][E]="dash");for(let E=31;E<=48;E++)for(let F=44;F<=48;F++)p[E][F]="zebra";function v(E,F,Y,oe,xe,W,fe,Ee,Ce={}){let H=l({name:E,col0:F,row0:Y,col1:oe,row1:xe,levels:W,style:fe});for(let G=0;G<W;G++){r(G,F,Y,oe,xe),G>0&&s(G,F,Y,oe,xe,n.interior);for(let re=Y;re<=xe;re++)for(let Me=F;Me<=oe;Me++)x[G][re][Me]=Ce.floor||"parquet";let $=y(fe,G,W);for(let re=Y;re<=xe;re++)o(G,F,re,"wall",$),o(G,oe+1,re,"wall",$);for(let re=F;re<=oe;re++)a(G,re,Y,"wall",$),a(G,re,xe+1,"wall",$);for(let re=F+1;re<oe;re++)(re-F)%2===1&&(a(G,re,Y,"window",$),a(G,re,xe+1,"window",$));for(let re=Y+1;re<xe;re++)(re-Y)%2===1&&(o(G,F,re,"window",$),o(G,oe+1,re,"window",$))}c("roof",W,F,Y,oe-F+1,xe-Y+1,{blocks:!1,type:Ce.roof||"tile",facade:fe});let Z=Math.floor((F+oe)/2),me=Ee==="S"?xe+1:Y,pe=Ee==="S"?Y:xe+1,S=y(fe,0,W);a(0,Z+1,me,"door",S),Ce.backDoor!==!1&&a(0,Z+1,pe,"door",S);let ie=Ee==="S"?Y+1:xe-5;R(Z-1,ie,W-1,fe);let j=Math.floor((Y+xe)/2)+1;for(let G=0;G<W;G++){for(let re=Y;re<=xe;re++)o(G,Z-1,re,"wall","inner"),o(G,Z+2,re,"wall","inner");for(let re=F;re<Z-1;re++)a(G,re,j,"wall","inner");for(let re=Z+2;re<=oe;re++)a(G,re,j,"wall","inner");[{col0:F,col1:Z-2,row0:Y,row1:j-1,side:"W"},{col0:F,col1:Z-2,row0:j,row1:xe,side:"W"},{col0:Z+2,col1:oe,row0:Y,row1:j-1,side:"E"},{col0:Z+2,col1:oe,row0:j,row1:xe,side:"E"}].forEach((re,Me)=>{let Te=[];for(let w=re.row0+1;w<re.row1;w++)(w<ie||w>ie+4)&&Te.push(w);let de=Te.length?Te[Math.floor(Te.length/2)]:re.row0;re.side==="W"?o(G,Z-1,de,"door","inner"):o(G,Z+2,de,"door","inner"),Ce.furnish!==!1&&I(G,re,re.side==="W"?[re.col1,de]:[re.col0,de],(Me+G+F)%4)})}return{...H,midCol:Z,stairRow:ie,front:me,back:pe}}function R(E,F,Y,oe){let xe=[];for(let W=0;W<Y;W++)W%2===0?(h(W,E,F+3,0,-1,3,"classic"),xe.push({level:W,col:E,cells:[F+3,F+2,F+1],exit:[E,F]})):(h(W,E+1,F+1,0,1,3,"classic"),xe.push({level:W,col:E+1,cells:[F+1,F+2,F+3],exit:[E+1,F+4]}));for(let W of xe){let fe=W.level+1,Ee=(Ce,H)=>Ce===W.col&&W.cells.includes(H);for(let Ce of W.cells){let H=[[W.col-1,Ce,"W",W.col,Ce],[W.col+1,Ce,"W",W.col+1,Ce],[W.col,Ce-1,"N",W.col,Ce],[W.col,Ce+1,"N",W.col,Ce+1]];for(let[Z,me,pe,S,ie]of H)Ee(Z,me)||Z===W.exit[0]&&me===W.exit[1]||(pe==="W"?o(fe,S,ie,"rail","iron"):a(fe,S,ie,"rail","iron"))}}}let P=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function I(E,F,Y,oe){let xe=F.col1-F.col0+1,W=F.row1-F.row0+1;if(xe<3||W<3)return;[[F.col0,F.row0],[F.col1-1,F.row0],[F.col0,F.row1],[F.col1-1,F.row1]].forEach((Ee,Ce)=>{let[H,Z,me]=P[(oe+Ce)%P.length],pe=Z===2?Ee[0]:Ce%2?F.col1:F.col0,S=Ee[1];for(let ie=0;ie<Z;ie++)if(Math.abs(pe+ie-Y[0])<=1&&Math.abs(S-Y[1])<=1)return;c(H,E,pe,S,Z,me,{rotation:S===F.row0?0:2})})}let z={col0:2,row0:7,col1:15,row1:21};m(z.col0,z.row0,z.col1,z.row1,Kt.sand);for(let E=z.row0;E<=z.row1;E++)o(0,z.col0,E,"rail","fence"),o(0,z.col1+1,E,"rail","fence");for(let E=z.col0;E<=z.col1;E++)a(0,E,z.row0,"rail","fence"),(E<8||E>9)&&a(0,E,z.row1+1,"rail","fence");o(0,z.col1+1,14,null),m(8,22,9,26,Kt.path),c("playhouse",0,3,8,2,2),c("slide",0,7,8,1,3),c("swing",0,11,8,3,1),c("sandbox",0,4,15,3,3,{blocks:!1}),c("carousel",0,11,13,2,2),c("bench",0,2,12,1,1,{rotation:3}),c("bench",0,2,18,1,1,{rotation:3}),c("bench",0,15,19,1,1,{rotation:1}),c("bin",0,15,20);for(let[E,F]of[[13,19],[7,20]])c("tree",0,E,F,1,1,{type:"linden"});for(let E of[4,9,14,20,26,32,61,67,73,80,86,92])c("tree",0,E,1,1,1,{type:E%3?"linden":"chestnut"});v("houseA",19,7,31,21,3,"ochre","S"),m(25,22,27,26,Kt.path);let A={col0:36,row0:4,col1:58,row1:22};l({name:"bank",...A,levels:2,style:"bank"});for(let E=0;E<2;E++){r(E,A.col0,A.row0,A.col1,A.row1),E>0&&s(E,A.col0,A.row0,A.col1,A.row1,n.interior);for(let Y=A.row0;Y<=A.row1;Y++)for(let oe=A.col0;oe<=A.col1;oe++)x[E][Y][oe]="marble";let F=y("bank",E,2);for(let Y=A.row0;Y<=A.row1;Y++)o(E,A.col0,Y,"wall",F),o(E,A.col1+1,Y,"wall",F);for(let Y=A.col0;Y<=A.col1;Y++)a(E,Y,A.row0,"wall",F),a(E,Y,A.row1+1,"wall",F);for(let Y=A.col0+1;Y<A.col1;Y++)(Y-A.col0)%2===1&&a(E,Y,A.row1+1,"window",F);for(let Y of[37,39,53,55,57])a(E,Y,A.row0,"window",F);for(let Y=A.row0+1;Y<A.row1;Y++)(Y-A.row0)%2===1&&(o(E,A.col0,Y,"window",F),o(E,A.col1+1,Y,"window",F))}c("roof",2,A.col0,A.row0,A.col1-A.col0+1,A.row1-A.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let E of[46,47,48])a(0,E,A.row1+1,"door","bank_g");a(1,47,A.row1+1,"window","bank_t"),c("balcony",1,45,23,5,1,{blocks:!1});for(let E of[45,49])c("column",0,E,23,1,1);o(0,A.col1+1,7,"door","bank_g"),m(34,23,60,26,Kt.paving);for(let E=A.col0;E<=A.col1;E++)a(0,E,13,"wall","inner");for(let E of[39,55])a(0,E,13,"door","inner");let M={col0:43,row0:4,col1:51,row1:9};for(let E=M.row0;E<=M.row1;E++)o(0,M.col0,E,"wall","vault"),o(0,M.col1+1,E,"wall","vault");for(let E=M.col0;E<=M.col1;E++)a(0,E,M.row1+1,"wall","vault");a(0,47,M.row1+1,"door","vault");for(let E=M.row0;E<=M.row1;E++)for(let F=M.col0;F<=M.col1;F++)x[0][E][F]="steel";for(let E=A.row0;E<=10;E++)o(0,40,E,"wall","inner"),o(0,55,E,"wall","inner");for(let E=A.col0;E<40;E++)a(0,E,11,"wall","inner");for(let E=55;E<=A.col1;E++)a(0,E,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let E of[37,38,41,42,43,44,50,51,52,53,56,57])c("counter",0,E,15,1,1);c("sofa",0,38,20,2,1),c("sofa",0,55,20,2,1),c("table",0,41,19,2,1),c("table",0,52,19,2,1);for(let[E,F]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])c("plant",0,E,F);for(let E=M.col0;E<=M.col1;E++)c("deposits",0,E,M.row0);for(let E of[5,6,7])c("deposits",0,M.col0,E,1,1,{rotation:3}),c("deposits",0,M.col1,E,1,1,{rotation:1});c("table",0,46,7,2,1),c("desk",0,36,4,2,1),c("console",0,39,4),c("locker",0,36,9),c("locker",0,37,9),c("desk",0,56,5,2,1),c("cabinet",0,58,4),c("cabinet",0,58,9),c("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let E=A.row0;E<=A.row1;E++)o(1,41,E,"wall","inner"),o(1,53,E,"wall","inner");for(let E=41;E<=52;E++)a(1,E,10,"wall","inner"),a(1,E,13,"wall","inner");for(let E of[7,17])for(let[F,Y]of[[A.col0,40],[53,A.col1]])for(let oe=F;oe<=Y;oe++)a(1,oe,E,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),c("table",1,45,16,4,2),c("bookcase",1,42,21),c("bookcase",1,52,21),c("desk",1,37,4,2,1),c("bookcase",1,36,6),c("sofa",1,37,9,2,1),c("desk",1,56,4,2,1),c("cabinet",1,58,6),c("desk",1,37,12,2,1),c("cabinet",1,36,16),c("desk",1,56,12,2,1),c("cabinet",1,58,16),c("desk",1,37,19,2,1),c("desk",1,56,19,2,1),c("table",1,45,5,3,2),c("bookcase",1,42,4),c("bookcase",1,52,4),m(61,4,73,26,Kt.asphalt),m(64,27,70,30,Kt.asphalt);for(let E=62;E<=72;E+=2)c("paint",0,E,5,1,4,{blocks:!1,line:"W"}),c("paint",0,E,17,1,4,{blocks:!1,line:"W"});let T=(E,F,Y,oe,xe)=>c("car",0,Y,oe,2,4,{type:E,color:F,flip:!!xe});T("suv","police",62,5),T("suv","police",64,5),T("van","white",68,5),T("suv","graphite",62,17,!0),T("suv","red",70,17,!0),c("lamp",0,61,12),c("lamp",0,73,12);let le=v("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),m(83,22,85,26,Kt.path);for(let E of[80,81,86,87])c("counter",0,E,19,1,1);c("locker",0,76,6),c("locker",0,77,6),c("locker",0,78,6),c("desk",0,76,10,2,1),c("rack",0,91,6),c("rack",0,91,7),c("rack",0,90,6),c("crate",0,91,10),c("bunk",0,76,17,2,1),c("bunk",0,90,17,2,1),c("desk",0,89,21,2,1),c("cabinet",0,75,21),c("desk",1,76,7,2,1),c("desk",1,89,7,2,1),c("cabinet",1,75,10),c("cabinet",1,91,10),c("desk",1,76,18,2,1),c("desk",1,89,18,2,1),c("bookcase",1,75,21),c("bookcase",1,91,21);for(let E=3;E<e;E+=10)(E<63||E>71)&&c("streetLamp",0,E,30),E+5<e&&(E+5<43||E+5>49)&&c("streetLamp",0,E+5,49);for(let E of[17,58,88])c("bin",0,E,28);c("busStop",0,30,50,3,1),c("bench",0,31,51,1,1,{rotation:0}),c("bin",0,34,51);let J=(E,F,Y,oe,xe)=>c("car",0,Y,oe,4,2,{type:E,color:F,flip:!!xe});J("suv","white",20,33),J("van","sand",36,42,!0),J("suv","blue",58,36),J("suv","olive",74,45,!0),J("suv","graphite",81,33),J("van","white",6,45,!0),v("houseB",3,55,16,69,3,"cream","N"),v("houseC",22,56,34,70,2,"green","N"),v("houseD",51,55,63,70,3,"pink","N"),v("houseE",72,56,86,70,3,"ochre","N");for(let[E,F,Y]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])m(E,53,F,Y,Kt.path);for(let E=1;E<=32;E++)[10,11,29,30].includes(E)||c("hedge",0,E,73);for(let E=59;E<=91;E++)[80,81].includes(E)||c("hedge",0,E,73);m(0,76,36,77,Kt.path),m(56,76,91,77,Kt.path);for(let[E,F]of[[10,11],[29,30],[57,58],[80,81]])m(E,71,F,75,Kt.path);for(let E=3;E<=33;E+=5)c("tree",0,E,83,1,1,{type:E%2?"chestnut":"linden"});for(let E of[5,20,35])c("bench",0,E,78,1,1,{rotation:2});for(let E of[60,66])c("tree",0,19,E,1,1,{type:"linden"}),c("tree",0,68,E,1,1,{type:"chestnut"}),c("tree",0,90,E,1,1,{type:"linden"});let N={col:46.5,row:82.5};g(N.col,N.row,12,Kt.paving),m(44,53,48,71,Kt.paving),c("fountain",0,42,78,9,9,{blocks:!1});for(let E=78;E<=86;E++)for(let F=42;F<=50;F++)Math.hypot(F+.5-N.col,E+.5-N.row)<4.4&&u(0,F,E);for(let E=0;E<8;E++){let F=E/8*Math.PI*2+Math.PI/8,Y=Math.floor(N.col+Math.cos(F)*8.6),oe=Math.floor(N.row+Math.sin(F)*8.6),xe=[[0,-1],[1,0],[0,1],[-1,0]].map(([W,fe])=>W*Math.cos(F)+fe*Math.sin(F));c(E%2?"streetLamp":"bench",0,Y,oe,1,1,{rotation:xe.indexOf(Math.max(...xe))})}m(60,81,82,95,Kt.paving);let O=68,B=87,q=d(O,B);for(let[E,F]of[[60,81],[82,81],[60,95],[82,95]])c("lamp",0,E,F);c("crate",0,80,84),c("crate",0,81,84),c("barrels",0,62,93);let U=(E,F,Y,oe)=>[E,F,Y,oe];return{spawns:{squad:[U(O+1,B,0,1),U(O+2,B,0,1),U(O+3,B,0,1),U(O+1,B+3,0,5),U(O+2,B+3,0,5),U(O+3,B+3,0,5)],mech:[U(O,B+1,0,7)],aliens:[U(44,17,0,0),U(51,19,0,0),U(47,11,0,1),U(40,8,1,3),U(6,13,0,7),U(12,17,0,5),U(28,37,0,3),U(62,44,0,5),U(84,36,0,1),U(83,16,0,3),U(88,9,1,5),U(68,13,0,1)]},extraction:q,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var ru=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),Yt=typeof globalThis<"u"&&globalThis.ALIENS_MAP||ru.get("map")||"outpost",rr=24,D=1.25,ps=4,ut=2.5,Pt=Yt==="big"?rr*2:Yt==="base"?68:Yt==="city"?96:rr,qr=1,Zr=6;var kt={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function sr(i){return Array.from({length:ps},()=>Array.from({length:Pt+1},()=>new Array(Pt+1).fill(i)))}function ou(){let i=sr(0),e=sr(0),t=sr(null),n=sr(null),s=sr(0),r=[],o=[],a=[],c=[],l=[],h=[],d=[],u=Yt==="city"?Array.from({length:Pt},()=>new Array(Pt).fill(0)):null,f=Yt==="city"?Array.from({length:Pt},()=>new Array(Pt).fill(null)):null,p=Yt==="city"?sr(null):null;if(Yt!=="base")for(let H=0;H<Pt;H++)for(let Z=0;Z<Pt;Z++)i[0][H][Z]=kt.ground;let x=0,m=0,g=(H,Z,me,pe,S,ie)=>{for(let j=me;j<=S;j++)for(let G=Z;G<=pe;G++)i[H][j+m][G+x]=ie},_=(H,Z,me,pe,S)=>{for(let ie=me;ie<=S;ie++)for(let j=Z;j<=pe;j++)s[H][ie+m][j+x]=1},y=(H,Z,me,pe)=>{e[H][me+m][Z+x]=pe},v=(H,Z,me,pe,S)=>{t[H][me+m][Z+x]=pe?{type:pe,style:S}:null},R=(H,Z,me,pe,S)=>{n[H][me+m][Z+x]=pe?{type:pe,style:S}:null},P=(H,Z,me,pe,S,ie,j)=>{for(let G=me;G<=S;G++)v(H,Z,G,ie,j),v(H,pe+1,G,ie,j);for(let G=Z;G<=pe;G++)R(H,G,me,ie,j),R(H,G,S+1,ie,j)},I=(H,Z,me,pe,S,ie)=>{for(let j=me;j<=pe;j++)v(H,Z,j,S,ie)},z=(H,Z,me,pe,S,ie)=>{for(let j=me;j<=pe;j++)R(H,j,Z,S,ie)},A=(H,Z,me,pe,S=1,ie=1,j={})=>r.push({kind:H,level:Z,col:me+x,row:pe+m,cols:S,rows:ie,rotation:0,blocks:!0,...j}),M=H=>{let Z={...H,col0:H.col0+x,row0:H.row0+m,col1:H.col1+x,row1:H.row1+m};return c.push(Z),Z},T=H=>a.push({...H,from:[H.from[0]+x,H.from[1]+m,H.from[2]],to:[H.to[0]+x,H.to[1]+m,H.to[2]],col:H.col+x,row:H.row+m}),le=(H,Z,me,pe,S)=>r.push({kind:"ladder",level:H,col:Z+x,row:me+m,cols:1,rows:1,blocks:!1,height:pe,side:S}),J=(H,Z,me,pe)=>h.push({rect:[(H+x)*D,(Z+m)*D,(me+x)*D,(pe+m)*D]}),N=(H,Z,me)=>h.push({circle:[(H+x)*D,(Z+m)*D,me*D]}),O=(H,Z,me)=>d.push([H,Z+x,me+m]),B=(H,Z,me,pe,S,ie,j)=>{o.push({level:H,col:Z+x,row:me+m,dirCol:pe,dirRow:S,count:ie,style:j});for(let G=0;G<ie;G++){let $=Z+pe*G,re=me+S*G;g(H,$,re,$,re,kt.stairs),y(H,$,re,(G+.5)/ie*ut),H+1<ps&&g(H+1,$,re,$,re,kt.none)}};function q(){M({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),g(1,3,3,10,9,kt.interior),g(2,3,3,10,9,kt.roof),_(0,3,3,10,9),_(1,3,3,10,9);for(let H of[0,1])P(H,3,3,10,9,"wall","hab");P(2,3,3,10,9,"parapet","hab"),I(0,7,3,5,"wall","inner"),v(0,7,5,"door","inner"),z(0,6,3,10,"wall","inner"),R(0,4,6,"door","inner"),R(0,9,6,"door","inner"),z(0,7,3,10,"wall","inner"),R(0,6,7,"door","inner"),R(0,9,7,"door","inner"),I(0,8,7,9,"wall","inner"),R(0,6,10,"door","hab"),v(0,11,6,"door","hab");for(let H of[4,8,10])R(0,H,10,"window","hab");for(let H of[4,8])v(0,11,H,"window","hab");R(0,5,3,"window","hab"),v(0,3,4,"window","hab"),B(0,4,8,1,0,3,"hab"),I(1,7,3,5,"wall","inner"),v(1,7,4,"door","inner"),z(1,6,3,10,"wall","inner"),R(1,5,6,"door","inner"),R(1,9,6,"door","inner"),I(1,8,7,9,"wall","inner"),z(1,7,8,10,"wall","inner"),R(1,9,7,"door","inner"),z(1,8,4,6,"rail","hab"),z(1,9,4,6,"rail","hab"),v(1,4,8,"rail","hab");for(let H of[4,5,7,9,10])R(1,H,10,"window","hab");for(let H of[4,5,8])v(1,11,H,"window","hab");R(1,4,3,"window","hab"),R(1,8,3,"window","hab"),v(1,3,5,"window","hab"),A("console",0,3,3),A("console",0,4,3),A("locker",0,6,3),A("bunk",0,9,3,2,1),A("locker",0,10,5),A("labTable",0,9,8,2,1),A("cabinet",0,10,9),A("crate",0,7,9),A("crate",0,3,7),A("rack",1,10,7),A("rack",1,10,8),A("rack",1,10,9),A("desk",1,4,3,2,1),A("console",1,9,3),A("crate",1,3,5),A("crate",1,3,6),A("acUnit",2,5,4,2,1),A("acUnit",2,8,6,1,1),A("antenna",2,4,8),A("solar",2,6,7,2,2),T({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),le(0,11,9,2*ut+.9,"W"),M({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),g(1,15,4,19,8,kt.deck),P(1,15,4,19,8,"rail","deck"),R(1,17,9,null);for(let[H,Z]of[[15,4],[19,4],[15,8],[19,8],[17,4]])A("pylon",0,H,Z);B(0,17,11,0,-1,3,"deck"),M({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),P(1,16,4,18,6,"wall","cabin"),R(1,17,7,"door","cabin"),v(1,19,5,"window","cabin"),R(1,16,7,"window","cabin"),g(1,16,4,18,6,kt.interior),g(2,16,4,18,6,kt.roof),P(2,16,4,18,6,"parapet","cabin"),_(1,16,4,18,6),A("console",1,16,4),A("rack",1,18,4),A("dish",2,17,5),T({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),le(1,19,6,ut+.9,"W"),A("barrels",0,16,6),A("crate",0,18,7),M({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),g(3,20,14,21,15,kt.deck),P(3,20,14,21,15,"rail","tower");for(let[H,Z]of[[20,14],[21,14],[20,15],[21,15]])A("towerLeg",0,H,Z);A("searchlight",3,21,14),T({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),le(0,20,16,3*ut+.9,"N"),R(3,20,16,null),A("container",0,13,13,2,4,{color:"orange"}),A("container",0,1,12,2,4,{color:"blue"}),A("truck",0,8,12,2,5),A("tank",0,21,4,2,3),A("generator",0,12,1,2,2);for(let[H,Z]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])A("crate",0,H,Z);A("barrels",0,12,4),A("barrels",0,20,10),A("lamp",0,12,11),A("lamp",0,15,12),z(0,20,10,13,"barrier","concrete"),I(0,16,17,19,"barrier","concrete");for(let[H,Z,me]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])A("rock",0,H,Z,me,me);J(1.3,1.3,12.6,11.7),J(14.2,3,20.8,12.8),J(19.4,13.4,22.6,16.8),N(4.6,19,3.6)}function U(){M({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),_(0,2,2,13,9),g(1,2,2,13,9,kt.roof),P(0,2,2,13,9,"wall","hab"),P(1,2,2,13,9,"parapet","hab"),R(0,6,10,"door","hab"),R(0,7,10,"door","hab"),v(0,14,5,"door","hab"),v(0,2,6,"door","hab");for(let H of[3,4,9,10,12])R(0,H,10,"window","hab");for(let H of[4,8,11])R(0,H,2,"window","hab");for(let H of[3,7,8])v(0,14,H,"window","hab");for(let H of[3,4,5,9,10,11])A("rack",0,H,2);A("crate",0,4,5),A("crate",0,5,5),A("crate",0,4,6),A("crate",0,10,6),A("crate",0,11,6),A("barrels",0,12,8),A("desk",0,2,8,2,1),A("cabinet",0,13,3),A("acUnit",1,4,4,2,1),A("acUnit",1,9,6,2,1),M({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),g(1,13,13,20,19,kt.interior),g(2,13,13,20,19,kt.roof),_(0,13,13,20,19),_(1,13,13,20,19);for(let H of[0,1])P(H,13,13,20,19,"wall","hab");P(2,13,13,20,19,"parapet","hab"),I(0,17,13,19,"wall","inner"),v(0,17,15,"door","inner"),v(0,17,16,"door","inner"),R(0,18,20,"door","hab"),v(0,13,15,"door","hab");for(let H of[14,15,19])R(0,H,20,"window","hab");for(let H of[17,18])v(0,21,H,"window","hab");R(0,15,13,"window","hab"),R(0,19,13,"window","hab"),B(0,14,18,1,0,3,"hab"),z(1,18,14,16,"rail","hab"),v(1,14,19,"rail","hab"),v(1,14,18,"rail","hab");for(let H of[14,16,18,19])R(1,H,20,"window","hab");for(let H of[14,16,18])v(1,21,H,"window","hab");for(let H of[14,17,19])R(1,H,13,"window","hab");A("desk",0,14,14,2,1),A("console",0,19,14),A("locker",0,20,17),A("desk",1,15,14,2,1),A("desk",1,18,16,2,1),A("rack",1,20,14),A("crate",1,20,19),A("antenna",2,19,18),A("acUnit",2,15,15,2,1),A("container",0,17,3,2,4,{color:"orange"}),A("generator",0,9,13,2,2),A("barrels",0,12,12),A("crate",0,8,16),A("crate",0,9,17),A("lamp",0,15,10),A("lamp",0,11,19),z(0,11,18,21,"barrier","concrete");for(let[H,Z,me]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])A("rock",0,H,Z,me,me);J(1.3,1.3,14.7,11.7),J(12.3,12.3,21.7,20.7),J(6.3,11.3,12.7,13.2)}function E(){J(.6,.6,22.4,22.4);let H=(me,pe,S)=>A("paint",0,me,pe,1,S,{blocks:!1,line:"W"});for(let[me,pe]of[[2,4],[10,4],[14,4]])for(let S=2;S<=20;S+=2)H(S,me,pe);let Z=(me,pe,S,ie,j)=>A("car",0,S,ie,2,4,{type:me,color:pe,flip:!!j});Z("suv","white",2,2),Z("van","sand",8,2),Z("suv","graphite",10,2),Z("suv","red",16,2),Z("suv","blue",4,10,!0),Z("van","white",12,10,!0),Z("suv","olive",18,10,!0),Z("suv","graphite",6,14),Z("suv","white",14,14),A("truck",0,21,15,2,5);for(let[me,pe]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])A("lamp",0,me,pe);I(0,1,2,5,"barrier","concrete"),I(0,1,10,17,"barrier","concrete"),z(0,23,2,9,"barrier","concrete"),z(0,23,13,20,"barrier","concrete"),A("crate",0,21,3),A("crate",0,21,4),A("barrels",0,22,12);for(let[me,pe,S]of[[0,22,2],[23,0,1]])A("rock",0,me,pe,S,S)}function F(H,Z){A("tiltrotor",0,H,Z,6,4,{blocks:!1});for(let S=H;S<=H+5;S++)for(let ie=Z;ie<=Z+3;ie++)y(0,S,ie,.6);for(let S=Z;S<=Z+3;S++)y(0,H+6,S,.45),y(0,H+7,S,.15);let me={col:H+4,row:Z+4};y(0,me.col,me.row,.3),_(0,H,Z,H+5,Z+3);for(let S=H;S<=H+5;S++)R(0,S,Z,"hull","tiltrotor"),S!==me.col&&R(0,S,Z+4,"hull","tiltrotor");for(let S=Z;S<=Z+3;S++)v(0,H,S,"hull","tiltrotor");for(let S=H-4;S<=H+5;S++)O(0,S,Z-1),S!==me.col&&O(0,S,Z+4);for(let S=H-4;S<=H-1;S++)for(let ie=Z;ie<=Z+3;ie++)O(0,S,ie);let pe=[];for(let S=H;S<=H+7;S++)for(let ie=Z;ie<=Z+3;ie++)pe.push([S+x,ie+m,0]);return pe}function Y(){let me=F(10,10);J(4.3,4.3,21.7,19.7),A("crate",0,20,8),A("crate",0,20,9),A("crate",0,21,9),A("barrels",0,19,16),A("generator",0,5,17,2,2);for(let[S,ie]of[[4,4],[21,4],[4,19],[21,19]])A("lamp",0,S,ie);for(let[S,ie,j]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])A("rock",0,S,ie,j,j);let pe=(S,ie,j)=>[S+x,ie+m,0,j];return{squad:[pe(11,10,1),pe(12,10,1),pe(13,10,1),pe(11,13,5),pe(12,13,5),pe(13,13,5)],mech:[pe(10,11,7)],extraction:me}}function oe(){x=qr,m=Zr;let H=ir,Z=H.grid[0],me=H.grid[1],pe=Array.from({length:me},()=>new Array(Z).fill(null)),S=Array.from({length:me},()=>new Array(Z).fill(0)),ie=(de,w,b)=>{for(let Q=de.y;Q<de.y+de.height;Q++)for(let se=de.x;se<de.x+de.width;se++)pe[Q][se]=w,S[Q][se]=b},j=new Set(["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430","\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430"]);H.rooms.forEach((de,w)=>ie(de,j.has(de.name)?"hangar":de.kind==="corridor"?de.zone+":corridor":"room"+w,de.levels)),H.corridors.forEach(de=>ie(de,"corridor",1));let G=(de,w)=>de>=0&&w>=0&&de<Z&&w<me?pe[w][de]:null,$=(de,w)=>G(de,w)?S[w][de]:0;for(let de=0;de<me;de++)for(let w=0;w<Z;w++)if(pe[de][w]){g(0,w,de,w,de,kt.interior);for(let b=0;b<S[de][w];b++)_(b,w,de,w,de)}for(let de=0;de<=me;de++)for(let w=0;w<=Z;w++){if(de<me){let b=G(w-1,de),Q=G(w,de);if(b!==Q)for(let se=0;se<Math.max($(w-1,de),$(w,de));se++)v(se,w,de,"wall","inner")}if(w<Z){let b=G(w,de-1),Q=G(w,de);if(b!==Q)for(let se=0;se<Math.max($(w,de-1),$(w,de));se++)R(se,w,de,"wall","inner")}}H.doors.forEach(de=>{let w=de.size>1?l.length:-1,b=[];for(let Q=0;Q<de.size;Q++){let se=de.side==="N"?["N",de.x+Q,de.y]:de.side==="S"?["N",de.x+Q,de.y+1]:de.side==="W"?["W",de.x,de.y+Q]:["W",de.x+1,de.y+Q],[ve,_e,qe]=se;(ve==="N"?R:v)(0,_e,qe,"door","inner"),w>=0&&((ve==="N"?n:t)[0][qe+m][_e+x].gate={group:w,kind:de.kind}),b.push([_e+x,qe+m,ve])}w>=0&&l.push({kind:de.kind,airlock:de.airlock,edges:b})});let re=new Set;for(let de of H.thickWalls||[])for(let w=de.y;w<de.y+de.height;w++)for(let b=de.x;b<de.x+de.width;b++)re.add(b+","+w);for(let de=-1;de<=me;de++)for(let w=-1;w<=Z;w++){if(G(w,de)||de+m<0||de+m>=Pt||w+x<0||w+x>=Pt)continue;let b=0;for(let se=-1;se<=1;se++)for(let ve=-1;ve<=1;ve++)b=Math.max(b,$(w+ve,de+se));if(!b)continue;let Q=((w+x)*7+(de+m)*13)%3;A("rockFill",0,w,de,1,1,{type:re.has(w+","+de)?`h${b}c`:`h${b}v${Q}`,height:b*ut,variant:Q,concrete:re.has(w+","+de)})}iu(H,(de,w,b,Q=1,se=1,ve={})=>A(de,0,w,b,Q,se,ve));let Me=F(8,8),Te=(de,w,b)=>[de+x,w+m,0,b];return{squad:[Te(21,8,1),Te(22,8,1),Te(21,9,1),Te(22,9,1),Te(21,10,1),Te(22,10,1)],mech:[Te(24,12,3)],aliens:[Te(39,1,3),Te(41,1,3),Te(39,3,3),Te(41,3,3),Te(40,6,3),Te(41,8,3),Te(40,11,3),Te(40,13,3)],extraction:Me}}let xe,W=null,fe=null,Ee=null,Ce=null;if(Yt==="city"){let H=su({TILES:Pt,LEVEL_H:ut,FLOOR:kt,setFloor:g,setIndoor:_,setW:v,setN:R,object:A,building:M,stairRun:B,tiltrotor:F,block:O,surface:u,marking:f,floorStyle:p});xe=H.spawns,W=H.extraction,fe=H.mission,Ee=H.name,Ce=H.caption}else if(Yt==="big"){x=0,m=0,q(),x=rr,m=0,U(),x=0,m=rr,E(),x=rr,m=rr;let H=Y();W=H.extraction,xe={squad:H.squad,mech:H.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(Yt==="base"){let H=oe();W=H.extraction,xe={squad:H.squad,mech:H.mech,aliens:H.aliens}}else q(),xe=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:Yt,TILE:D,TILES:Pt,LEVELS:ps,LEVEL_H:ut,floor:i,offset:e,wallW:t,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:c,spawns:xe,extraction:W,concrete:h,blockedCells:d,gates:l,surface:u,marking:f,floorStyle:p,mission:fe,caption:Ce,name:Ee||(Yt==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":Yt==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:Yt==="big"||Yt==="base"||Yt==="city"}}var au=((Number(ru.get("rot"))||0)%4+4)%4;function cu(i,e){let t=i;for(let n=0;n<e;n++)t=s2(t,n+1);return t}function s2(i,e){let t=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(l,h)=>l.map(d=>d.map(u=>u.map(()=>h))),s=(l,h)=>{let d=n(l,h);for(let u=0;u<l.length;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++)d[u][p][t-1-f]=l[u][f][p];return d},r=n(i.wallW,null),o=n(i.wallN,null);for(let l=0;l<i.wallW.length;l++)for(let h=0;h<=t;h++)for(let d=0;d<=t;d++){let u=i.wallW[l][h][d];u&&h<t&&(o[l][d][t-1-h]=u);let f=i.wallN[l][h][d];f&&d<t&&(r[l][d][t-h]=f)}let a=([l,h,...d])=>[t-1-h,l,...d],c=i.objects.map(l=>{let h={col:t-l.row-l.rows,row:l.col,cols:l.rows,rows:l.cols};if(l.kind==="rockFill")return{...l,...h};let d=l.source||l;return{...l,...h,source:d,turns:e}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:c,blockedCells:i.blockedCells.map(([l,h,d])=>[l,t-1-d,h]),gates:(i.gates||[]).map(l=>({...l,edges:l.edges.map(([h,d,u])=>u==="W"?[t-1-d,h,"N"]:[t-d,h,"W"])})),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(l=>l.circle?{...l,circle:[t*i.TILE-l.circle[1],l.circle[0],l.circle[2]]}:{...l,rect:[t*i.TILE-l.rect[3],l.rect[0],t*i.TILE-l.rect[1],l.rect[2]]}),viewTurns:e}}var ga=class extends Ks{constructor(e=null){super();let t=new gt;t.deleteAttribute("uv");let n=new Ve({side:un}),s=new Ve,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Xr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Se(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Se(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Se(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Se(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Se(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Se(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Se(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new Se(t,or(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let x=new Se(t,or(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Se(t,or(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let g=new Se(t,or(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new Se(t,or(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let y=new Se(t,or(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(i){let e=new rs;return e.color.setScalar(i),e}function pt(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var gy=pt(20261121);var yn=new Uint8Array(512);{let i=pt(7),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)yn[t]=e[t&255]}var pl=i=>i*i*i*(i*(i*6-15)+10),ms=(i,e,t)=>i+(e-i)*t;function Ui(i,e,t,n){let s=i&15,r=s<8?e:t,o=s<4?t:s===12||s===14?e:n;return(s&1?-r:r)+(s&2?-o:o)}function hu(i,e,t){let n=Math.floor(i)&255,s=Math.floor(e)&255,r=Math.floor(t)&255;i-=Math.floor(i),e-=Math.floor(e),t-=Math.floor(t);let o=pl(i),a=pl(e),c=pl(t),l=yn[n]+s,h=yn[l]+r,d=yn[l+1]+r,u=yn[n+1]+s,f=yn[u]+r,p=yn[u+1]+r;return ms(ms(ms(Ui(yn[h],i,e,t),Ui(yn[f],i-1,e,t),o),ms(Ui(yn[d],i,e-1,t),Ui(yn[p],i-1,e-1,t),o),a),ms(ms(Ui(yn[h+1],i,e,t-1),Ui(yn[f+1],i-1,e,t-1),o),ms(Ui(yn[d+1],i,e-1,t-1),Ui(yn[p+1],i-1,e-1,t-1),o),a),c)}function lu(i,e,t,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*hu(i*o,e*o,t*o),o*=2,r*=.5;return s}function ki(i,e,t,n=5,s=0){let r=i*Math.PI*2,o=e*Math.PI*2,a=t/(Math.PI*2),c=0,l=.5,h=1;for(let d=0;d<n;d++)c+=l*hu(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,l*=.5;return c}function du(i){let e=document.createElement("canvas");return e.width=e.height=i,e}function Mt(i,{srgb:e=!0,repeat:t=1}={}){let n=new ea(i);return e&&(n.colorSpace=Mn),n.wrapS=n.wrapT=ns,n.repeat.set(t,t),n.anisotropy=8,n}function r2(i,e,t=2){let n=du(e),s=n.getContext("2d"),r=s.createImageData(e,e),o=(a,c)=>i[(c+e)%e*e+(a+e)%e];for(let a=0;a<e;a++)for(let c=0;c<e;c++){let l=(o(c+1,a)-o(c-1,a))*t,h=(o(c,a+1)-o(c,a-1))*t,d=Math.hypot(l,h,1),u=(a*e+c)*4;r.data[u]=(-l/d*.5+.5)*255,r.data[u+1]=(h/d*.5+.5)*255,r.data[u+2]=(1/d*.5+.5)*255,r.data[u+3]=255}return s.putImageData(r,0,0),Mt(n,{srgb:!1})}function o2(i,e,t){let n=new Float32Array(i*i),s=du(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=c/i,h=a/i,d=e(l,h,c,a);n[a*i+c]=d;let[u,f,p]=t(l,h,d,c,a),x=(a*i+c)*4;o.data[x]=u,o.data[x+1]=f,o.data[x+2]=p,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var ml=i=>Math.max(0,Math.min(255,i));function $r(i=3,e=[128,120,108]){let n=pt(i),{canvas:s,ctx:r,heights:o}=o2(512,(a,c)=>{let l=ki(a,c,6,6,i),h=Math.abs(ki(a,c,14,3,i+9));return l*.8-Math.max(0,.06-h)*6},(a,c,l)=>{let h=ki(a,c,20,3,i+3),d=.72+l*.55+(n()-.5)*.1,u=e[0]*d,f=e[1]*d,p=e[2]*d;return h>.22&&(u=u*.7+60,f=f*.75+75,p=p*.6+30),[ml(u),ml(f),ml(p)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:Mt(s),normalMap:r2(o,512,5)}}function ar(i="#ffb347",e=1,t="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=pt(e);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,t==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let c=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,c):s.lineTo(a,c)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let c=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,c,6),a+=c+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return Mt(n)}var xy=new L(0,1,0);function gl(i,e,{flatten:t=.75,roughness:n=.35,detail:s=3}={}){let r=new cs(i,s),o=r.attributes.position,a=new L;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);let l=a.clone().normalize(),h=1+lu(l.x*1.6+e,l.y*1.6,l.z*1.6-e,4)*n*2+Math.max(0,lu(l.x*4+e,l.y*4,l.z*4,2))*.15;a.copy(l).multiplyScalar(i*h);let d=Math.floor((l.x*3+e)*1.3)*.02;a.y*=t,a.x+=d,o.setXYZ(c,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function xl(i,e){i.traverse(t=>{if(t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])"envMapIntensity"in n&&(n.envMapIntensity=e*(n.userData.envBoost||1))})}var uu=Math.SQRT1_2,fu=(i,e)=>new ge((i+e)*uu,(e-i)*uu);var Py=new ge(.75,-.66).normalize();var Jr=new L;function Bn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();let l=.5*o/(o+a),h=1-Jr.angleTo(i)/c;return Math.sign(Jr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var xa=class extends gt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,p=new L,x=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:p.set(1,0,0),u[g+0]=Bn(p,c,"z","y",r,n),u[g+1]=1-Bn(p,c,"y","z",r,t);break;case 1:p.set(-1,0,0),u[g+0]=1-Bn(p,c,"z","y",r,n),u[g+1]=1-Bn(p,c,"y","z",r,t);break;case 2:p.set(0,1,0),u[g+0]=1-Bn(p,c,"x","z",r,e),u[g+1]=Bn(p,c,"z","x",r,n);break;case 3:p.set(0,-1,0),u[g+0]=1-Bn(p,c,"x","z",r,e),u[g+1]=1-Bn(p,c,"z","x",r,n);break;case 4:p.set(0,0,1),u[g+0]=1-Bn(p,c,"x","y",r,e),u[g+1]=1-Bn(p,c,"y","x",r,t);break;case 5:p.set(0,0,-1),u[g+0]=Bn(p,c,"x","y",r,e),u[g+1]=1-Bn(p,c,"y","x",r,t);break}}};var c2=(i,e,t)=>new L(i,e,t),ya=null;function mu(){if(ya)return ya;let i=(e,t=.75,n=.15,s={})=>new Ve({color:e,roughness:t,metalness:n,...s});return ya={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new Hn({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},ya}function tn(i){return i.castShadow=i.receiveShadow=!0,i}function Ie(i,e,t,n,s,r,o,a,c=0){let l=c>0?new xa(e,t,n,3,Math.min(c,e/2.1,t/2.1,n/2.1)):new gt(e,t,n),h=tn(new Se(l,s));return h.position.set(r,o,a),i.add(h),h}function Ot(i,e,t,n,s,r,o,a="x",c=20,l=e){let h=tn(new Se(new Ct(e,l,t,c),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function _a(i,e,t,n){let s=new Qs(e.map(r=>c2(...r)),!1,"catmullrom",.05);i.add(tn(new Se(new Br(s,e.length*8,t,8),n)))}function pi(i,e,t,n,s,r=.025){let o=new en;e.forEach(([l,h],d)=>{d===0?o.moveTo(-l,h):o.lineTo(-l,h)});let a=new xn(o,{depth:t-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let c=tn(new Se(a,n));return c.position.x=s-t/2+r,i.add(c),c}function Kr(i,e,t,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new en;e.forEach(([u,f],p)=>{p===0?a.moveTo(u,f):a.lineTo(u,f)});let c=n-t,l=new xn(a,{depth:c-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=l.attributes.position;for(let u=0;u<h.count;u++){let f=Math.min(1,Math.max(0,(h.getZ(u)+o)/c)),{scale:p,drop:x}=r(f);h.setX(u,h.getX(u)*p),h.setY(u,h.getY(u)-x*Math.max(0,h.getY(u)))}l.computeVertexNormals();let d=tn(new Se(l,s));return d.position.z=t+o,i.add(d),d}function l2(i,e,t,n=.03,s=0){let r=[],o=i/2,a=(c,l,h,d,u)=>{for(let f=0;f<=6;f++){let p=d+(u-d)*f/6;r.push([c+Math.cos(p)*h,l+Math.sin(p)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-t,s+e-t,t,0,Math.PI/2),a(-o+t,s+e-t,t,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function jr(i,e,t,n,s,r){return l2(i-r*2,e-r*2,Math.max(.01,t-r),Math.max(.01,n-r),s+r)}function h2(i,e,t,n,s,r,o){let a=mu(),c=s*.58,l=.09,h=r/2,d=[new ge(c,-h)];for(let x=0;x<=6;x++){let m=-Math.PI/2+x/6*Math.PI/2;d.push(new ge(s-l+Math.cos(m)*l,-h+l+Math.sin(m)*l))}for(let x=0;x<=6;x++){let m=x/6*Math.PI/2;d.push(new ge(s-l+Math.cos(m)*l,h-l+Math.sin(m)*l))}d.push(new ge(c,h));let u=tn(new Se(new os(d,36),a.rubber));u.rotation.z=Math.PI/2,u.position.set(e,t,n),i.add(u);let f=20;for(let x=0;x<f;x++){let m=x/f*Math.PI*2;for(let g of[-1,1])Ie(i,r*.36,.04,.075,a.rubber,e+g*r*.2,t+Math.cos(m)*(s+.005),n+Math.sin(m)*(s+.005),.015).rotation.set(m,g*.5,0)}let p=e+o*(h-.03);Ot(i,c,.05,a.hub,p,t,n,"x",28),Ot(i,s*.24,.08,a.hub,p+o*.04,t,n,"x",18),Ot(i,s*.12,.05,a.frame,p+o*.08,t,n,"x",12);for(let x=0;x<8;x++){let m=x/8*Math.PI*2;Ot(i,.018,.04,a.steel,p+o*.03,t+Math.cos(m)*s*.36,n+Math.sin(m)*s*.36,"x",6)}}var gu={length:6.15,width:2.35};function xu(){let i=mu(),e=new be,t=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let U of o)for(let E of[-1,1])h2(e,E*s,t,U,t,n,E);for(let U of[-1,1])Ie(e,.12,.22,5.75,i.frame,U*.45,a-.11,3.1);for(let U of o){Ot(e,.065,s*2-.25,i.frame,0,t,U,"x",12);let E=new Se(new Ln(.2,16,10),i.frame);E.scale.set(1.1,.9,.9),E.position.set(0,t,U),e.add(tn(E))}Ie(e,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let U of[-1,1]){let E=new Se(new Li(.055,.018,6,12,Math.PI*1.4),i.frame);E.position.set(U*.6,.72,6.16),E.rotation.set(0,Math.PI/2,Math.PI*.8),e.add(tn(E))}Ie(e,.6,.24,.24,i.frame,0,.84,5.86,.06),Ot(e,.1,.48,i.steel,0,.88,5.86,"x",14);let c=4.72,l=6;Kr(e,jr(1.14,.78,.24,.02,.98,.03),c,l,i.olive,U=>({scale:1-.1*U,drop:.045*U*U}),.03),Ie(e,.03,.02,l-c-.1,i.oliveDark,0,1.755,(c+l)/2);for(let U of[-1,1])for(let E=0;E<6;E++){let F=Ie(e,.02,.2,.05,i.frame,U*.552,1.38,4.95+E*.11,.008);F.rotation.y=U*.15}Kr(e,jr(1,.68,.12,.04,1.02,.012),l-.02,l+.05,i.olive,void 0,.012);for(let U=-4;U<=4;U++)Ie(e,.045,.5,.04,i.frame,U*.09,1.34,l+.045,.012);let h=[],d=(U,E,F,Y,oe)=>{let xe=[];for(let W=0;W<=20;W++){let fe=F+(Y-F)*W/20;xe.push([r+Math.cos(fe)*U,t+Math.sin(fe)*E])}return oe?xe.reverse():xe};h.push(...d(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...d(.92,.66,.2,2.75,!0).slice(0,-1));let u=[[r+Math.cos(2.75)*.92,t+Math.sin(2.75)*.66]];for(let U of[-1,1]){pi(e,h,.44,i.olive,U*.93,.03),Ie(e,.05,.45,1.05,i.oliveDark,U*.7,1,r+.05);let E=new Se(new Ln(.12,18,12),i.olive);E.scale.set(1,1,.75),E.position.set(U*.83,1.13,5.86),e.add(tn(E)),Ot(e,.09,.02,i.lens,U*.83,1.13,5.95,"z",18);for(let F of[-.05,0,.05])Ie(e,.012,.2,.012,i.frame,U*.83+F,1.13,5.99);Ie(e,.07,.045,.04,i.amber,U*1,1.2,5.7,.01),Ie(e,.36,.4,.02,i.rubber,U*.93,.55,r-.82)}let f=4.74,p=3.62,x=(f+p)/2,m=f-p;Ie(e,1.3,.24,m-.1,i.frame,0,1.06,x),Kr(e,jr(2.18,.98,.1,.05,1,.05),p,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},_={z:f-.24,y:2.44},y=[[p+.02,1.95],[f-.02,1.95],[g.z,g.y]],v=2.6,R=.16,P=.24;for(let U=1;U<=10;U++){let E=U/10*Math.PI/2;y.push([_.z-P*(1-Math.cos(E)),_.y+(v-_.y)*Math.sin(E)])}for(let U=0;U<=8;U++){let E=U/8*Math.PI/2;y.push([p+.04+R-Math.sin(E)*R,v-R+Math.cos(E)*R])}pi(e,y,2.1,i.olive,0,.09);let I=Math.atan2(g.z-_.z,_.y-g.y),z=(g.z+_.z)/2+.1*Math.cos(I),A=(g.y+_.y)/2+.1*Math.sin(I);for(let U of[-1,1]){let E=Ie(e,.84,.44,.03,i.glass,U*.48,A,z,.02);E.rotation.x=-I,Ie(e,.03,.36,.6,i.glass,U*1.06,2.22,x+.02,.02),Ie(e,.03,.85,.02,i.oliveDark,U*1.1,1.55,x-.28),Ie(e,.03,.03,.12,i.steel,U*1.105,1.8,x-.16),_a(e,[[U*1.05,2,f-.1],[U*1.28,2.12,f],[U*1.31,2.34,f]],.014,i.frame),Ie(e,.04,.26,.16,i.frame,U*1.32,2.36,f,.015)}let M=Ie(e,.06,.46,.04,i.oliveDark,0,A,z+.01);M.rotation.x=-I,Ie(e,1.1,.28,.03,i.glass,0,2.22,p+.03,.02);for(let U of[-.25,0,.25])Ie(e,.07,.04,.05,i.amber,U,2.7,f-.4,.01);Ot(e,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let U of[2.75,3.35])Ie(e,.04,.58,.05,i.frame,.88,.78,U);Ie(e,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),_a(e,[[.55,1,p-.02],[.75,1.25,p-.08],[.78,2.65,p-.08]],.045,i.frame);let T=3.5,le=.12,J=T-le,N=(T+le)/2,O=1.1,B=2.08;Ie(e,2.08,.12,J,i.frame,0,O-.06,N),Kr(e,jr(2.35,B,.2,.05,O,.08),le,T,i.olive,void 0,.08);for(let U of[-1,1]){for(let E of[.88,1.78,2.68])Ie(e,.03,.44,.62,i.oliveDark,U*1.177,O+1.45,E,.03),Ie(e,.03,.34,.52,i.glass,U*1.186,O+1.45,E,.02);for(let E of[O+.38,O+1.02])Ie(e,.02,.03,J-.3,i.oliveDark,U*1.178,E,N);Ie(e,.3,.36,.5,i.oliveDark,U*1,O-.24,1.71,.05)}Ie(e,.86,1.75,.03,i.oliveDark,-.45,O+.92,le-.01,.03),Ie(e,.3,.26,.03,i.glass,-.45,O+1.45,le-.03,.02),Ie(e,.03,.03,.14,i.steel,-.1,O+.9,le-.05);for(let U of[-.75,-.15])Ie(e,.03,.9,.03,i.frame,U,O-.3,le-.12);for(let U=0;U<4;U++)Ie(e,.6,.025,.03,i.frame,-.45,O-.65+U*.22,le-.12);for(let U of[-1,1])Ie(e,.14,.08,.04,i.red,U*.95,.92,le-.02,.02),Ie(e,.4,.4,.02,i.rubber,U*.95,.58,.45);let q=O+B;for(let U of[-1,1])_a(e,[[U*.98,q-.02,.35],[U*.98,q+.14,.5],[U*.98,q+.14,3.05],[U*.98,q-.02,3.2]],.02,i.frame);for(let U of[.65,1.45,2.25,3])Ie(e,1.96,.025,.025,i.frame,0,q+.14,U);return Ie(e,1.2,.18,.9,i.canvas,-.2,q+.08,1.25,.08),Ie(e,.6,.55,.3,i.oliveDark,.55,q-.38,T+.16,.08),Ot(e,.12,.42,i.frame,.55,q+.12,T+.16,"y",16),Ot(e,.16,.04,i.oliveDark,.55,q+.34,T+.16,"y",16),Ot(e,.035,.9,i.frame,-.7,q+.38,T-.2,"y",8),Kr(e,jr(2.37,.16,.02,.05,O-.005,.01),le+.01,T-.01,i.dusty,void 0,.01),e}var jn={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function d2(i){let e=i?{clippingPlanes:i,clipShadows:!0,side:dn}:{},t=(n,s=.7,r=.25,o={})=>new Ve({color:n,roughness:s,metalness:r,...e,...o});return{hull:t(4870469,.62,.3),hullDark:t(3554355,.66,.3),belly:t(7370092,.7,.25),panel:t(2830378,.6,.4),interior:t(9409933,.8,.15),floor:t(2764074,.85,.35),seat:t(4082230,.95,0),frame:t(1908508,.6,.6),steel:t(9212042,.35,.8),rubber:t(1710617,.95,0),yellow:t(13214234,.6,.1),glass:new Hn({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...e}),red:t(11540496,.4,.1,{emissive:5244933}),green:t(1089584,.4,.1,{emissive:342544}),white:t(15263968,.4,.1,{emissive:3158064})}}function Qr(i,e,t,n,s){let r=[],o=(a,c,l,h,d,u)=>{for(let f=0;f<=u;f++){let p=h+(d-h)*f/u;r.push([a+Math.cos(p)*l,c+Math.sin(p)*l])}};return o(i-s,e+s,s,-Math.PI/2,0,4),o(i-n,t-n,n,0,Math.PI/2,10),o(-i+n,t-n,n,Math.PI/2,Math.PI,10),o(-i+s,e+s,s,Math.PI,Math.PI*1.5,4),r}function yl(i,e,t,n,s,r,o=32,a=null){let c=new en;e.forEach(([p,x],m)=>{m===0?c.moveTo(p,x):c.lineTo(p,x)});let l=new xn(c,{depth:n-t,bevelEnabled:!1,steps:o,curveSegments:6}),h=l.attributes.position,d=a?a.bottom:Math.min(...e.map(p=>p[1])),u=a?a.top:Math.max(...e.map(p=>p[1]));for(let p=0;p<h.count;p++){let x=r(t+h.getZ(p));h.setX(p,h.getX(p)*x.scale),h.setY(p,x.bottom+(h.getY(p)-d)*(x.top-x.bottom)/(u-d))}l.computeVertexNormals();let f=tn(new Se(l,s));return f.position.z=t,i.add(f),f}function u2(i,e,t,n,s){let r=new be,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([l,h])=>new ge(l,h));r.add(tn(new Se(new os(o,56),e.hull)));let a=tn(new Se(new Li(1.555,.03,6,56),e.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Ot(r,.3,.7,e.hullDark,0,0,0,"y",24);let c=tn(new Se(new Ln(.3,20,10,0,Math.PI*2,0,Math.PI/2),e.steel));c.position.y=.35,r.add(c);for(let l=0;l<7;l++){let h=new be;h.rotation.y=l*Math.PI*2/7+.2;let d=tn(new Se(new gt(1.08,.03,.24),e.frame));d.position.x=.84,d.position.y=.12,d.rotation.x=.42,h.add(d),r.add(h)}for(let l=0;l<3;l++){let h=new be;h.rotation.y=l*Math.PI*2/3;let d=tn(new Se(new gt(1.1,.12,.05),e.hullDark));d.position.x=.85,d.position.y=-.2,h.add(d),r.add(h)}return Ot(r,.16,.5,e.steel,-Math.sign(t)*1.7,0,0,"x",16),r.position.set(t,n,s),i.add(r),r}function f2(i,e,t,n,s,r,o,a){let c=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,d])=>[o+h,r+d]),l=s-n;pi(i,c,l,e.hull,t*(n+l/2),.03)}function yu({cutaway:i=!1,rampOpen:e=!0}={}){let t=i?[new Pn(new L(0,-1,0),3)]:null,n=d2(t),s=new be,r=new be;s.name="floor",r.name="back";let o=new be;o.name="shell";let a=2.8,c=.25,l=5,h=jn.floor,d=jn.cabin;Ie(s,a*2,h-c,d.front-d.rear,n.belly,0,(h+c)/2,(d.front+d.rear)/2,.12).userData.solid=!0,Ie(s,d.right-d.left-.02,.03,d.front-d.rear,n.floor,0,h+.015,(d.front+d.rear)/2);let u=3.5,f=u-c-.12,p=c+.12+f/2;Ie(o,a-d.right,f,d.front-d.rear,n.hull,-(a+d.right)/2,p,(d.front+d.rear)/2);let x=jn.sideDoor,m=(a+d.right)/2;Ie(o,a-d.right,f,x.rear-d.rear,n.hull,m,p,(x.rear+d.rear)/2),Ie(o,a-d.right,f,d.front-x.front,n.hull,m,p,(d.front+x.front)/2);let g=h+x.height;Ie(o,a-d.right,u-g,x.front-x.rear,n.hull,m,(u+g)/2,(x.rear+x.front)/2),Ie(o,a-d.right,h-c-.12,x.front-x.rear,n.hull,m,(h+c+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([G])=>Ie(o,.36,x.height+.1,.08,n.hullDark,m,h+x.height/2,G)),Ie(o,.36,.08,x.front-x.rear+.08,n.hullDark,m,g,(x.rear+x.front)/2);let _=Qr(a,c,l,1.3,.3).filter(([,G])=>G>=u-.001),y=Qr(d.right,h,d.ceiling,.9,.01).filter(([,G])=>G>=u-.001).reverse(),v=[[a,u]].concat(_,[[-a,u],[d.left,u]],y,[[d.right,u]]),R=new xn(new en(v.map(([G,$])=>new ge(G,$))),{depth:d.front-d.rear,bevelEnabled:!1,curveSegments:4}),P=tn(new Se(R,n.hull));P.position.z=d.rear,o.add(P);let I=Qr(a+.04,c+.1,l+.04,1.32,.3),z=Qr(d.right-.03,h+.02,d.ceiling-.03,.87,.01),A=new en(I.map(([G,$])=>new ge(G,$)));A.holes.push(new er(z.slice().reverse().map(([G,$])=>new ge(G,$))));let M=tn(new Se(new xn(A,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));M.position.z=d.rear,M.userData.hollow=!0,o.add(M),M.castShadow=M.receiveShadow=!1;let T=d.front,le=jn.length,J=le-T,N=(G,$,re)=>{let Me=Math.min(1,Math.max(0,(re-G)/($-G)));return Me*Me*(3-2*Me)},O=G=>{let $=(G-T)/J;return{scale:1-.1*N(.25,.65,$)-.55*Math.pow(N(.55,1,$),1.3),top:l-2*N(.18,.66,$)-1.45*Math.pow(N(.62,1,$),1.4),bottom:c+.85*Math.pow(N(.5,1,$),1.6)}},B=Qr(a,c,l,1.3,.3);yl(o,B,T,le,n.hull,O,40);let q=(()=>{let G=B.filter(([,Me])=>Me>=2.85),$=[0,2.6],re=(Me,Te)=>{let de=Math.hypot(Me[0]-$[0],Me[1]-$[1]);return[Me[0]+(Me[0]-$[0])/de*Te,Me[1]+(Me[1]-$[1])/de*Te]};return G.map(Me=>re(Me,.035)).concat(G.slice().reverse().map(Me=>re(Me,-.01)))})(),U=T+J*.2,E=T+J*.7;yl(o,q,U,E,n.glass,O,24,{bottom:c,top:l});let F=q.map(([G,$])=>[G*1.004,$+.004]);yl(o,F,U+(E-U)*.45,U+(E-U)*.45+.1,n.hullDark,O,2,{bottom:c,top:l}),Ie(r,d.right-d.left,d.ceiling-h,.08,n.interior,0,(d.ceiling+h)/2,d.front-.04);let Y=jn.cockpitDoor;Ie(r,Y.right-Y.left-.2,Y.height,.06,n.hullDark,(Y.left+Y.right)/2,h+Y.height/2,d.front-.09),Ie(r,.25,.25,.05,n.glass,(Y.left+Y.right)/2,h+1.6,d.front-.13),[-1,1].forEach(G=>{Ie(o,.5,1,4,n.hullDark,G*(a+.2),.85,7.4,.2),[6,8.8].forEach($=>{Ot(o,.07,.5,n.steel,G*(a+.2),.45,$,"y",10),Ot(o,.27,.22,n.rubber,G*(a+.2),.27,$,"x",20)})}),Ot(o,.07,.4,n.steel,0,.35,13.6,"y",10),Ot(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let oe=new be,xe=Math.hypot(jn.ramp.to-jn.ramp.from,h);Ie(oe,d.right-d.left,.12,xe,n.hullDark,0,-.06,-xe/2);for(let G=0;G<9;G++)Ie(oe,d.right-d.left-.3,.025,.05,n.frame,0,.012,-.2-G*(xe-.4)/8);[-1,1].forEach(G=>Ie(oe,.06,.18,xe,n.yellow,G*(d.right-.03),.09,-xe/2)),oe.position.set(0,h,d.rear),oe.rotation.x=e?-Math.atan2(h,jn.ramp.to-jn.ramp.from):Math.PI/2-.15,s.add(oe);let W=a+.55,fe=x.front-x.rear-.15;for(let G=0;G<3;G++){let $=h-(G+1)*h/3.2;Ie(s,.36,.05,fe,n.steel,a+.15+G*.32,$,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(G=>_a(o,[[a+.05,h+.95,G],[a+.5,h+.7,G],[W+.4,.75,G]],.025,n.steel)),[-1,1].forEach(G=>Ie(G<0?r:o,.03,2.9,d.front-d.rear-.2,n.interior,G*(d.right-.015),h+1.6,(d.front+d.rear)/2));let Ee=jn.cells.cell,Ce=G=>d.front-(G-.5)*Ee;jn.seats.forEach(([G,$])=>{let re=G==="A"?-1:1,Me=re*(d.right-.35),Te=Ce($);Ie(s,.5,.1,.9,n.seat,Me,h+.48,Te,.03),Ie(s,.1,.75,.9,n.seat,re*(d.right-.08),h+.95,Te,.03),Ie(s,.04,.45,.04,n.frame,Me-re*.2,h+.22,Te-.38),Ie(s,.04,.45,.04,n.frame,Me-re*.2,h+.22,Te+.38),Ie(s,.03,.6,.06,n.yellow,re*(d.right-.05),h+1,Te-.25)});let H=-Ee,Z=Ee,me=Ce(2)-Ee/2,pe=d.front;[[H,me,Z,me],[H,me,H,pe-.1],[Z,me,Z,pe-.1]].forEach(([G,$,re,Me])=>{Ie(s,Math.max(.08,Math.abs(re-G)),.012,Math.max(.08,Math.abs(Me-$)),n.yellow,(G+re)/2,h+.036,($+Me)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([G,$])=>Ot(s,.07,.03,n.steel,G,h+.045,$,"y",12)),[-1,1].forEach(G=>{let $=pi(o,[[2.55,l-.25],[4.9,l-.25],[3.55,l+1.35],[2.75,l+1.4]],.16,n.hull,0,.04);$.rotation.z=G*-.18,$.position.x+=G*1.55,Ie(o,.06,.06,.06,G<0?n.red:n.green,G*1.82,l+1.38,2.85)}),Ie(o,2.2,.5,4.2,n.hullDark,0,l+.12,7.3,.22),[-.6,.6].forEach(G=>Ie(o,.6,.12,.8,n.frame,G,l+.38,6,.04)),Ie(o,.08,.06,.08,n.white,0,l+.4,9.2);let S=a+.35+1.5,ie=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([G,$])=>{[-1,1].forEach(re=>{f2(o,n,re,a-.1,S-1.45,ie,G,$),u2(o,n,re*S,ie,G)})}),[-1,1].forEach(G=>{Ie(o,.02,.08,2.4,n.yellow,G*(a+.01),2.9,7.4),Ie(o,.02,.4,.4,n.white,G*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(G=>{if(!G.isMesh)return;let $=new Jn().setFromObject(G).getSize(new L);Math.min($.x,$.y,$.z)>=.12&&!G.userData.hollow&&(G.userData.solid=!0)});let j=new be;return j.add(s,r,o),j}var va={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},pu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function p2(i,e,t,n,s,r,o,a){let c=Ot(i,r,o,e.rubber,t,n,s,"x",28);Ot(i,r*.62,o+.01,e.rim,t+a*.005,n,s,"x",20),Ot(i,r*.2,o+.03,e.frame,t+a*.01,n,s,"x",12)}function _u({type:i="suv",color:e="white",seed:t=1}={}){let n=va[i],s=(u,f=.45,p=.35,x={})=>new Ve({color:u,roughness:f,metalness:p,...x}),r={body:s(pu[e]||pu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new Hn({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new be,a=n.width,c=n.length,l=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){pi(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),pi(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),pi(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let u of[[.26,.3],[1.6,1.68],[3.2,3.3]])Ie(o,a-.16,.62,u[1]-u[0]+.05,r.body,0,1.39,(u[0]+u[1])/2+(u[0]>3?.08:0));for(let u of[-1,1])Ie(o,.05,.05,2.2,r.trim,u*(a/2-.2),1.83,1.6)}else pi(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),pi(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),Ie(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,Ie(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),Ie(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);Ie(o,a+.04,.22,.18,r.trim,0,h+.3,c-.04,.05),Ie(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let u of[-1,1])Ie(o,.32,.12,.05,r.lamp,u*(a/2-.3),.9,c+.005,.02),Ie(o,.18,.26,.05,r.tail,u*(a/2-.15),i==="van"?1.2:.95,-.005,.02),Ie(o,.06,.12,.2,r.trim,u*(a/2+.06),i==="van"?1.75:1.2,c-(i==="van"?1.35:1.15),.02);Ie(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,c+.01,.02);let d=i==="van"?[.95,4.15]:[.9,3.8];for(let u of d)for(let f of[-1,1])p2(o,r,f*(a/2-.12),l,u,l,.26,f);if(Ie(o,a+.02,.08,c-.3,r.dust,0,h+.12,c/2),e==="police"){let u=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),p=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])Ie(o,.02,.16,c-.8,u,x*(a/2+.005),.78,c/2);Ie(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,c*.45),Ie(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,c*.45),Ie(o,.45,.12,.26,p,.3,i==="van"?2.3:1.95,c*.45)}return o}var cr=i=>Math.max(0,Math.min(255,Math.round(i)));function Gn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function eo(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Gn(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let f=(l(u+1,d)-l(u-1,d))*e,p=(l(u,d+1)-l(u,d-1))*e,x=Math.hypot(f,p,1),m=(d*n+u)*4;c.data[m]=(-f/x*.5+.5)*255,c.data[m+1]=(p/x*.5+.5)*255,c.data[m+2]=(1/x*.5+.5)*255,c.data[m+3]=255}return a.putImageData(c,0,0),Mt(o,{srgb:!1})}function lr(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:c=0}={}){let l=pt(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=u/e,p=d/t,x=ki(f,p,a,4,s)*o,m=c?Math.max(0,ki(f*7,.3,30,2,s+3))*c*(1-p):0,g=1+x-m+(l()-.5)*r/255,_=(d*e+u)*4;h.data[_]=cr(n[0]*g),h.data[_+1]=cr(n[1]*g),h.data[_+2]=cr(n[2]*g),h.data[_+3]=255}i.putImageData(h,0,0)}function vu(i,e){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,c=Gn(512,936),l=c.getContext("2d"),h=Gn(512,936),d=h.getContext("2d");lr(l,512,936,r.base,{seed:11+e*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),d.fillStyle="#808080",d.fillRect(0,0,512,936);let u=pt(31+e*13+i.length);l.fillStyle=`rgb(${r.band.join(",")})`,l.fillRect(0,a(.3),512,.3*o),l.fillStyle=`rgb(${r.stripe.join(",")})`,l.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),d.fillStyle="#9a9a9a",d.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],p=a(1.22);l.fillStyle="rgba(30,32,34,0.75)",d.fillStyle="#202020";for(let g of f)l.fillRect(g-2,0,4,936),d.fillRect(g-2,0,4,936);l.fillRect(0,p-2,512,3),d.fillRect(0,p-2,512,3),l.fillStyle="rgba(255,255,255,0.25)";for(let g of f)l.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let _=30;_<a(.32);_+=54)for(let y of[-9,9])l.fillStyle="rgba(60,62,64,0.8)",l.beginPath(),l.arc(g+y,_,2.6,0,Math.PI*2),l.fill(),d.fillStyle="#c8c8c8",d.beginPath(),d.arc(g+y,_,2.6,0,Math.PI*2),d.fill();if(i!=="inner"&&e===1){let _=a(1.95),y=512*.3;for(let v=0;v<7;v++)l.fillStyle="rgba(28,30,32,0.85)",l.fillRect(296.96,_+v*11,y,6),d.fillStyle="#303030",d.fillRect(296.96,_+v*11,y,6)}i!=="inner"&&e===2&&(l.fillStyle="rgba(40,44,46,0.9)",l.fillRect(512*.12,a(1.75),512*.22,.18*o),l.fillStyle="rgba(230,180,60,0.9)",l.font="bold 26px Arial",l.fillText("N8",512*.14,a(1.62)),d.fillStyle="#a8a8a8",d.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=l.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),l.fillStyle=x,l.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let _=u()*512,y=40+u()*300,v=l.createLinearGradient(0,0,0,y);v.addColorStop(0,"rgba(50,46,40,0.22)"),v.addColorStop(1,"rgba(50,46,40,0)"),l.fillStyle=v,l.fillRect(_,0,2+u()*5,y)}let m=Mt(c);return m.wrapS=m.wrapT=Qt,{map:m,normalMap:eo(h,4,!1)}}function Mu(){let e=Gn(512,512),t=e.getContext("2d"),n=Gn(512,512),s=n.getContext("2d");lr(t,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=pt(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let c=(a+o)/16%2?.8:-.8;t.save(),t.translate(a,o),t.rotate(c),t.fillStyle="rgba(160,166,166,0.5)",t.fillRect(-5,-1.2,10,2.4),t.restore(),s.save(),s.translate(a,o),s.rotate(c),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}t.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])t.fillRect(o-1.5,0,3,512),t.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){t.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,t.lineWidth=.8;let a=r()*512,c=r()*512,l=r()*Math.PI,h=6+r()*30;t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(l)*h,c+Math.sin(l)*h),t.stroke()}return{map:Mt(e),normalMap:eo(n,3)}}function bu(){let e=Gn(512,512),t=e.getContext("2d"),n=Gn(512,512),s=n.getContext("2d");lr(t,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),t.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])t.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=pt(29);for(let o=0;o<60;o++){let a=r()*512,c=r()*512,l=10+r()*50,h=t.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),t.fillStyle=h,t.fillRect(a-l,c-l,l*2,l*2)}return{map:Mt(e),normalMap:eo(n,2)}}function Eu(){let e=Gn(256,256),t=e.getContext("2d"),n=Gn(256,256),s=n.getContext("2d");lr(t,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)t.fillStyle="rgba(18,18,20,0.88)",t.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:Mt(e),normalMap:eo(n,3)}}function wu(i=3){let n=Gn(512,256),s=n.getContext("2d"),r=Gn(512,256),o=r.getContext("2d");lr(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=pt(i+5);for(let c=0;c<512;c++){let l=.5+.5*Math.sin(c/512*Math.PI*2*24);o.fillStyle=`rgb(${cr(l*255)},${cr(l*255)},${cr(l*255)})`,o.fillRect(c,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-l)*.18})`,s.fillRect(c,0,1,256)}for(let c=0;c<50;c++){let l=a()*512,h=a()*256,d=4+a()*22,u=s.createRadialGradient(l,h,0,l,h,d);u.addColorStop(0,"rgba(90,44,20,0.45)"),u.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=u,s.fillRect(l-d,h-d,d*2,d*2)}return{map:Mt(n),normalMap:eo(r,5)}}function Su(i=7){let t=Gn(256,256),n=t.getContext("2d");return lr(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:Mt(t)}}var Tu=1.25,ht=.09,_l=new Map,fn=(i,e)=>(_l.has(i)||_l.set(i,e()),_l.get(i));function m2(i,e){return fn("brushed"+i+(e?"v":"h"),()=>{let n=pt(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let c=0;c<900;c++){let l=n()*256,h=20+n()*200,d=n()*256,u=n();o.fillStyle=`rgba(${u>.5?230:150},${u>.5?232:154},${u>.5?236:158},0.10)`,a.fillStyle=`rgba(${u>.5?140:50},${u>.5?140:50},${u>.5?140:50},0.25)`,e?(o.fillRect(l,d,1,h),a.fillRect(l,d,1,h)):(o.fillRect(d,l,h,1),a.fillRect(d,l,h,1))}return{map:Mt(s,{repeat:1}),roughnessMap:Mt(r,{srgb:!1,repeat:1})}})}var vl=(i,e)=>(i.userData.envBoost=e,i),Au=(i=!1)=>fn("galleySteel"+i,()=>{let e=m2(i?11:7,i),t=new Ve({color:15791094,map:e.map,roughnessMap:e.roughnessMap,roughness:.5,metalness:.6});return t.userData.envBoost=3.2,t}),ze={steel:()=>Au(!1),steelVertical:()=>Au(!0),steelDark:()=>fn("galleySteelDark",()=>vl(new Ve({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>fn("galleyGroove",()=>new Ve({color:2764080,roughness:.6,metalness:.5})),plinth:()=>fn("galleyPlinth",()=>new Ve({color:2040357,roughness:.8,metalness:.2})),castIron:()=>fn("galleyIron",()=>new Ve({color:1842463,roughness:.75,metalness:.35})),knob:()=>fn("galleyKnob",()=>new Ve({color:1118740,roughness:.35,metalness:.3})),glass:()=>fn("galleyGlass",()=>new Ve({color:790290,roughness:.1,metalness:.4})),basin:()=>fn("galleyBasin",()=>vl(new Ve({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>fn("galleyChrome",()=>vl(new Ve({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>fn("galleyWhite",()=>new Ve({color:15263972,roughness:.5,metalness:.05})),display:()=>fn("galleyDisplay",()=>new Ve({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>fn("galleyLamp",()=>new Ve({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>fn("galleyRubber",()=>new Ve({color:1382170,roughness:.9})),red:()=>fn("galleyRed",()=>new Ve({color:11019292,roughness:.45,metalness:.3})),floor:()=>fn("galleyFloor",()=>{let e=pt(5),t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let c=0;c<s;c++){let l=214+Math.floor(e()*10);n.fillStyle=`rgb(${l},${l-2},${l-8})`,n.fillRect(c*r+3,a*r+3,r-6,r-6)}let o=Mt(t,{repeat:1});return new Ve({map:o,roughness:.35,metalness:0})})};function Be(i,e,t,n,s,r,o){let a=new Se(new gt(i,e,t),n);return a.position.set(s,r,o),a}function to(i,e,t,n,s,r,o=12){let a=new Se(new Ct(i,i,e,o),t);return a.position.set(n,s,r),a}function gs(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Ct(t,t,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var Ze=.9,En=.66,Ru=ht+En;function g2(i,e,t,n){let s=t-e,r=(e+t)/2;i.add(Be(s-.01,.1,En-.06,ze.plinth(),r,.05,ht+(En-.06)/2)),i.add(Be(s-.01,Ze-.14,En-.02,ze.steelVertical(),r,.1+(Ze-.14)/2,ht+(En-.02)/2));let o=Ze-.06,a=.12,c=ht+En-.01,l=(u,f,p)=>i.add(Be(p?.12:.03,p?.03:.12,.012,ze.groove(),u,f,c+.002)),h=u=>i.add(Be(.006,o-a,.006,ze.groove(),u,(o+a)/2,c+.002)),d=(u,f,p)=>i.add(Be(p-f,.006,.006,ze.groove(),(f+p)/2,u,c+.002));if(d(o,e,t),n==="drawers"){for(let f=1;f<3;f++)d(a+(o-a)*f/3,e+.01,t-.01);for(let f=0;f<3;f++)l(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),l(r-.05,o-.08,!1),l(r+.05,o-.08,!1)):n==="mixed"&&(d(o-.18,e+.01,t-.01),l(r,o-.07,!0),h(r),l(r-.05,o-.28,!1),l(r+.05,o-.28,!1));i.add(Be(s,.04,En+.02,ze.steel(),r,Ze-.02,ht+(En+.02)/2)),i.add(Be(s,.05,.015,ze.steel(),r,Ze-.035,Ru+.012)),i.add(Be(s,.1,.02,ze.steel(),r,Ze+.05,ht+.01))}function Cu(i,e,t,n){i.add(Be(t-e,n-Ze,.012,ze.steelVertical(),(e+t)/2,(Ze+n)/2,ht+.006));for(let s=e+.6;s<t-.05;s+=.6)i.add(Be(.005,n-Ze,.004,ze.groove(),s,(Ze+n)/2,ht+.013))}function x2(i,e,t){let o=(e+t)/2;i.add(Be(t-e-.01,2.15-1.5,.34,ze.steelVertical(),o,(1.5+2.15)/2,ht+.34/2)),i.add(Be(.006,2.15-1.5-.02,.006,ze.groove(),o,(1.5+2.15)/2,ht+.34+.002));for(let a of[-1,1])i.add(Be(.03,.1,.012,ze.groove(),o+a*.05,1.5+.1,ht+.34+.004));i.add(Be(t-e-.1,.012,.04,ze.lamp(),o,1.5-.007,ht+.34-.05))}function y2(i,e,t){let n=t?[e-.2,e+.2]:[e];for(let a of n){i.add(Be(t?.36:.5,.012,.42,ze.basin(),a,Ze-.14,ht+.36));for(let c of[-1,1])i.add(Be(.012,.14,.42,ze.basin(),a+c*(t?.18:.25),Ze-.07,ht+.36));i.add(Be(t?.36:.5,.14,.012,ze.basin(),a,Ze-.07,ht+.15)),i.add(Be(t?.36:.5,.14,.012,ze.basin(),a,Ze-.07,ht+.57)),i.add(to(.025,.004,ze.groove(),a,Ze-.132,ht+.36))}let s=e,r=ht+.08;i.add(to(.03,.06,ze.chrome(),s,Ze+.03,r)),i.add(gs(new L(s,Ze+.06,r),new L(s,Ze+.48,r),.014,ze.chrome()));let o=new Se(new Li(.12,.013,8,16,Math.PI),ze.chrome());o.rotation.y=Math.PI/2,o.position.set(s,Ze+.48,r+.12),i.add(o),i.add(gs(new L(s,Ze+.48,r+.24),new L(s,Ze+.36,r+.24),.016,ze.chrome())),i.add(Be(.012,.012,.08,ze.chrome(),s+.04,Ze+.1,r+.03))}function _2(i,e){let t=new be,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(g2(t,.005,e-.005,s),Cu(t,0,e,i.upper?1.5:1.45),i.upper&&x2(t,.005,e-.005),(n==="sink"||n==="sink2")&&y2(t,e/2,n==="sink2"),n==="microwave"){let r=e/2,o=ht+.26;t.add(Be(.52,.3,.38,ze.steel(),r,Ze+.15,o)),t.add(Be(.33,.21,.01,ze.glass(),r-.07,Ze+.15,o+.19)),t.add(Be(.1,.21,.01,ze.groove(),r+.18,Ze+.15,o+.19)),t.add(Be(.05,.015,.012,ze.display(),r+.18,Ze+.24,o+.196))}if(n==="grinder"){let r=e/2-.1,o=ht+.3;t.add(Be(.22,.24,.36,ze.steel(),r,Ze+.12,o)),t.add(to(.06,.2,ze.chrome(),r,Ze+.3,o+.06)),t.add(Be(.26,.02,.22,ze.chrome(),r,Ze+.41,o+.06)),t.add(Be(.04,.03,.03,ze.red(),r+.12,Ze+.08,o+.19));let a=e/2+.22;t.add(Be(.16,.06,.26,ze.white(),a,Ze+.03,o)),t.add(Be(.1,.3,.1,ze.white(),a,Ze+.18,o-.08)),t.add(Be(.14,.08,.26,ze.white(),a,Ze+.36,o)),t.add(to(.08,.12,ze.chrome(),a,Ze+.12,o+.05))}return t}function v2(i,e){let t=new be,n=e-.01,s=e/2;t.add(Be(n,.1,En-.06,ze.plinth(),s,.05,ht+(En-.06)/2)),t.add(Be(n,Ze-.1,En,ze.steelVertical(),s,.1+(Ze-.1)/2,ht+En/2));let r=Ru+.004;t.add(Be(n-.12,.46,.02,ze.steel(),s,.42,r+.01)),t.add(Be(n-.34,.2,.01,ze.glass(),s,.44,r+.022)),t.add(gs(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,ze.chrome()));for(let h of[-1,1])t.add(Be(.015,.015,.05,ze.chrome(),s+h*(n-.3)/2,.66,r+.035));t.add(Be(n-.06,.11,.02,ze.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let d=new Se(new Ct(.022,.024,.03,14),ze.knob());d.rotation.x=Math.PI/2,d.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),t.add(d)}t.add(Be(n,.02,En,ze.steelDark(),s,Ze-.01,ht+En/2));for(let[h,d]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){t.add(to(.07,.015,ze.castIron(),s+h,Ze+.007,ht+d,16));for(let u of[0,Math.PI/2]){let f=Be(.3,.018,.018,ze.castIron(),s+h,Ze+.03,ht+d);f.rotation.y=u,t.add(f)}}Cu(t,0,e,1.75);let a=1.78,c=2.25,l=.62;t.add(Be(e+.1,c-a-.12,l,ze.steel(),s,c-(c-a-.12)/2,ht+l/2)),t.add(Be(e+.1,.12,.03,ze.steel(),s,a+.06,ht+l-.015)),t.add(Be(e-.06,.012,l-.08,ze.steelDark(),s,a+.01,ht+l/2));for(let h=0;h<9;h++)t.add(Be(.012,.02,l-.14,ze.groove(),s-e*.4+e*.8*h/8,a+.02,ht+l/2-.02));for(let h of[-1,1])t.add(Be(.14,.008,.06,ze.lamp(),s+h*e*.28,a+.004,ht+l-.08));return t}function M2(i,e){let t=new be,n=e-.04,s=e/2,r=.72,o=2.02;t.add(Be(n,.08,r-.06,ze.plinth(),s,.04,ht+(r-.06)/2)),t.add(Be(n,o-.08,r,ze.steelVertical(),s,.08+(o-.08)/2,ht+r/2));let a=ht+r;t.add(Be(n-.02,.006,.006,ze.groove(),s,1.25,a+.003)),t.add(Be(.006,o-.12,.006,ze.groove(),s,.08+(o-.08)/2,a+.003));for(let c of[-1,1]){t.add(gs(new L(s+c*.06,.95,a+.045),new L(s+c*.06,1.55,a+.045),.012,ze.chrome()));for(let l of[.95,1.55])t.add(Be(.015,.015,.045,ze.chrome(),s+c*.06,l,a+.022))}return t.add(Be(.16,.06,.01,ze.display(),s-n/4,1.82,a+.006)),t}function b2(i,e,t){let n=new be,s=.2,r=e/2,o=t/2,a=e-s*2,c=t-s*2;n.add(Be(a-.08,.1,c-.08,ze.plinth(),r,.05,o)),n.add(Be(a,Ze-.14,c,ze.steelVertical(),r,.1+(Ze-.14)/2,o)),n.add(Be(a+.06,.06,c+.06,ze.steel(),r,Ze-.06,o)),n.add(Be(a-.04,.02,c-.04,ze.steelDark(),r,Ze-.025,o));let l=(a-.16)/2,h=(c-.16)/2;for(let p of[-1,1])for(let x of[-1,1]){let m=r+p*(l/2+.03),g=o+x*(h/2+.03);if(n.add(Be(l,.035,h,ze.castIron(),m,Ze-.005,g)),p===x)for(let _=0;_<5;_++)n.add(Be(l*.5,.004,.012,ze.groove(),m,Ze+.014,g-.08+_*.04))}let d=Ze+.06,u=.1,f=[[r-a/2-u,o-c/2-u],[r+a/2+u,o-c/2-u],[r+a/2+u,o+c/2+u],[r-a/2-u,o+c/2+u]];return f.forEach(([p,x],m)=>{let[g,_]=f[(m+1)%4];n.add(gs(new L(p,d,x),new L(g,d,_),.016,ze.chrome())),n.add(gs(new L(p,Ze-.05,x),new L(p,d+.03,x),.02,ze.chrome()));let y=new L(Math.sign(r-p)*u,0,Math.sign(o-x)*u);n.add(gs(new L(p,Ze-.05,x),new L(p+y.x,Ze-.05,x+y.z),.015,ze.chrome()))}),n}function E2(i,e,t){let n=new be,s=ze.floor().clone();s.map=s.map.clone(),s.map.repeat.set(e/1.2,t/1.2),s.map.needsUpdate=!0;let r=Be(e-.02,.006,t-.02,s,e/2,.05,t/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,c,l]=i.drain;n.add(Be(c-o,.004,l-a,ze.groove(),(o+c)/2,.055,(a+l)/2));let h=c-o>l-a,d=Math.floor((h?c-o:l-a)/.03);for(let u=0;u<d;u++){let f=(u+.5)/d;n.add(h?Be(.008,.005,l-a-.01,ze.steelDark(),o+(c-o)*f,.058,(a+l)/2):Be(c-o-.01,.005,.008,ze.steelDark(),(o+c)/2,.058,a+(l-a)*f))}}return n}function Ml(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new be;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new be;return l.add(c),l}var Pu=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function Iu(i){let e=i.cols*Tu,t=i.rows*Tu;switch(i.kind){case"galleyCounter":return Ml(i,e,t,_2);case"galleyRange":return Ml(i,e,t,v2);case"galleyFridge":return Ml(i,e,t,M2);case"galleyIsland":return b2(i,e,t);case"galleyFloor":return E2(i,e,t);default:return null}}var Lu=1.25,xt=.09,bl=new Map,hr=(i,e)=>(bl.has(i)||bl.set(i,e()),bl.get(i)),_t=(i,e,t)=>hr(i,()=>{let n=new Ve(e);return t&&(n.userData.envBoost=t),n});function El(i,e){return hr("fabricTexture"+i+e,()=>{let n=pt(e),s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle=`rgb(${i})`,r.fillRect(0,0,128,128);for(let o=0;o<1400;o++){let a=n()<.5?255:0;r.fillStyle=`rgba(${a},${a},${a},${.03+n()*.04})`,r.fillRect(Math.floor(n()*128),Math.floor(n()*128),1+Math.floor(n()*2),1)}return Mt(s,{repeat:2})})}function w2(){return hr("woodTexture",()=>{let e=pt(17),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="rgb(150,112,74)",n.fillRect(0,0,256,256);for(let s=0;s<160;s++){let r=e()*256,o=e();n.fillStyle=`rgba(${o>.5?190:90},${o>.5?146:62},${o>.5?100:36},0.18)`,n.fillRect(0,r,256,1+e()*2)}return Mt(t,{repeat:1})})}function S2(){return hr("rubberTexture",()=>{let e=pt(23),t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="rgb(46,48,52)",n.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=e()<.12?"160,60,40":e()<.5?"70,72,76":"30,31,34";n.fillStyle=`rgba(${r},0.8)`,n.fillRect(Math.floor(e()*128),Math.floor(e()*128),2,2)}return Mt(t,{repeat:2})})}var X={frame:()=>_t("fFrame",{color:6055018,roughness:.5,metalness:.5},1.5),steel:()=>_t("fSteel",{color:12896718,roughness:.35,metalness:.65},2.5),darkSteel:()=>_t("fDarkSteel",{color:3159354,roughness:.5,metalness:.5}),black:()=>_t("fBlack",{color:1447963,roughness:.6,metalness:.2}),white:()=>_t("fWhite",{color:15132902,roughness:.45,metalness:.05}),cream:()=>_t("fCream",{color:14209730,roughness:.6}),wood:()=>_t("fWood",{map:w2(),roughness:.55}),cabinetGrey:()=>_t("fCabinetGrey",{color:9344924,roughness:.55,metalness:.25}),olive:()=>_t("fOlive",{color:6121032,roughness:.7,metalness:.1}),blanket:i=>_t("fBlanket"+i,{map:El(i,3),roughness:.95}),sheet:()=>_t("fSheet",{map:El("226,228,224",5),roughness:.95}),upholstery:i=>_t("fUph"+i,{map:El(i,9),roughness:.9}),glass:()=>_t("fGlass",{color:11061460,roughness:.05,metalness:.1,transparent:!0,opacity:.35}),tintedGlass:()=>_t("fTinted",{color:2111552,roughness:.1,metalness:.3}),ceramic:()=>_t("fCeramic",{color:15921902,roughness:.2,metalness:0},1.5),chrome:()=>_t("fChrome",{color:15265008,roughness:.15,metalness:.9},3),rubber:()=>_t("fRubber",{map:S2(),roughness:.95}),mat:()=>_t("fMat",{color:2772090,roughness:.85}),red:()=>_t("fRed",{color:11020832,roughness:.5,metalness:.2}),orange:()=>_t("fOrange",{color:14185514,roughness:.5,metalness:.2}),yellow:()=>_t("fYellow",{color:14200868,roughness:.5,metalness:.2}),green:()=>_t("fGreen",{color:3115602,roughness:.5}),leather:()=>_t("fLeather",{color:3811874,roughness:.6}),lamp:()=>_t("fLamp",{color:16774880,emissive:16773328,emissiveIntensity:1.3}),ledGreen:()=>_t("fLedGreen",{color:1060880,emissive:4259680,emissiveIntensity:1}),ledRed:()=>_t("fLedRed",{color:3149840,emissive:16724e3,emissiveIntensity:1}),liquid:()=>_t("fLiquid",{color:7002292,emissive:2792058,emissiveIntensity:.7,roughness:.08,metalness:.1,transparent:!0,opacity:.82}),specimen:()=>_t("fSpecimen",{color:6969928,roughness:.7}),screen:(i,e="text")=>hr("fScreen"+i+e,()=>{let t=["#5fd0ff","#ffb347","#7dff9a","#ff6a5a"],n=ar(t[i%t.length],i+40,e);return new Ve({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.85})}),map:()=>hr("fMapTable",()=>{let e=pt(31),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#071a24",n.fillRect(0,0,256,256),n.strokeStyle="rgba(80,200,255,0.25)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="rgba(90,220,140,0.55)";for(let r=0;r<7;r++)n.beginPath(),n.ellipse(e()*256,e()*256,20+e()*40,12+e()*30,e()*3,0,Math.PI*2),n.fill();n.fillStyle="#ff5a40";for(let r=0;r<5;r++)n.fillRect(e()*256,e()*256,5,5);let s=Mt(t,{repeat:1});return new Ve({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.7})})};function ne(i,e,t,n,s,r,o){let a=new Se(new gt(i,e,t),n);return a.position.set(s,r,o),a}function bt(i,e,t,n,s,r,o=14,a=i){let c=new Se(new Ct(a,i,e,o),t);return c.position.set(n,s,r),c}function Bt(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Ct(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var rt=(i,e,t)=>new L(i,e,t);function no(i,e,t,n,s="70,76,88"){i.add(ne(.44,.06,.44,X.upholstery(s),e,.44,t)),i.add(ne(.44,.42,.05,X.upholstery(s),e,.44+.24,t+n*(.44/2-.02)));for(let a of[-1,1])for(let c of[-1,1])i.add(ne(.03,.44,.03,X.frame(),e+a*(.44/2-.03),.44/2,t+c*(.44/2-.03)))}function wl(i,e,t,n,s,r,o=X.wood()){i.add(ne(n-e,.04,s-t,o,(e+n)/2,r-.02,(t+s)/2));for(let a of[e+.05,n-.05])for(let c of[t+.05,s-.05])i.add(ne(.04,r-.04,.04,X.frame(),a,(r-.04)/2,c))}function Nu(i,e,t,n,s,r,o=1){i.add(ne(s,s*.6,.04,X.black(),e,t+s*.3+.08,n)),i.add(ne(s-.04,s*.6-.04,.01,X.screen(r),e,t+s*.3+.08,n+o*.022)),i.add(ne(.04,.1,.04,X.black(),e,t+.04,n)),i.add(ne(.18,.015,.14,X.black(),e,t+.008,n))}var Du={bed(i,e,t){let n=new be,s=Math.min(.95,e-.2),r=e/2,o=Math.min(2.05,t-.25),a=xt+.02;return n.add(ne(s+.06,.9,.05,X.wood(),r,.45,a+.025)),n.add(ne(s+.06,.55,.05,X.wood(),r,.275,a+o)),n.add(ne(s,.18,o-.05,X.frame(),r,.25,a+o/2)),n.add(ne(s-.04,.16,o-.08,X.sheet(),r,.42,a+o/2+.01)),n.add(ne(s-.02,.06,o*.62,X.blanket(i.color||"64,82,110"),r,.52,a+o*.66)),n.add(ne(s*.7,.1,.34,X.sheet(),r,.55,a+.25)),n},nightstand(i,e){let t=new be,n=e/2,s=xt+.24;return t.add(ne(.45,.55,.42,X.wood(),n,.275,s)),t.add(ne(.12,.02,.01,X.darkSteel(),n,.44,s+.215)),t.add(bt(.05,.03,X.darkSteel(),n-.1,.565,s-.05)),t.add(Bt(rt(n-.1,.57,s-.05),rt(n-.1,.82,s-.05),.008,X.darkSteel())),t.add(bt(.09,.1,X.cream(),n-.1,.86,s-.05,12,.05)),t},wardrobe(i,e){let t=new be,n=e-.15,s=e/2,r=xt+.3;t.add(ne(n,2,.58,X.wood(),s,1,r)),t.add(ne(.006,1.86,.006,X.black(),s,1,r+.293));for(let o of[-1,1])t.add(ne(.02,.22,.02,X.chrome(),s+o*.05,1.1,r+.3));return t},cabinTable(i,e){let t=new be,n=xt+.01;wl(t,.15,n,e-.15,n+.62,.74),t.add(ne(e-.4,.03,.24,X.wood(),e/2,1.45,n+.12));for(let s of[e*.3,e*.7])no(t,s,n+.82,1);return t.add(ne(.3,.22,.2,X.darkSteel(),e*.3,.85,n+.2)),t},deskChair(i,e){let t=new be,n=xt+.01;return wl(t,.08,n,e-.08,n+.62,.74),Nu(t,e/2,.74,n+.18,.48,i.seed||1),t.add(ne(.42,.02,.14,X.black(),e/2,.75,n+.42)),no(t,e/2,n+.86,1,"40,44,52"),t},safe(i,e){let t=new be,n=e/2,s=xt+.26;return t.add(ne(.55,.9,.5,X.olive(),n,.45,s)),t.add(bt(.06,.03,X.chrome(),n,.55,s+.26,16).rotateX(Math.PI/2)),t.add(ne(.03,.12,.03,X.chrome(),n+.18,.45,s+.26)),t},sofa(i,e){let t=new be,n=i.color||"96,68,52",s=xt+.02,r=.86;t.add(ne(e-.1,.4,r,X.upholstery(n),e/2,.2,s+r/2)),t.add(ne(e-.1,.5,.18,X.upholstery(n),e/2,.6,s+.09));for(let o of[.12,e-.12])t.add(ne(.14,.62,r,X.upholstery(n),o,.31,s+r/2));for(let o=0;o<2;o++)t.add(ne((e-.4)/2-.02,.1,r-.24,X.upholstery(n),.2+(e-.4)/4+o*(e-.4)/2,.45,s+r/2+.06));return t},diningTable(i,e,t){let n=new be,s=t/2;wl(n,.3,s-.42,e-.3,s+.42,.75,X.cabinetGrey());for(let r of[e*.3,e*.7])no(n,r,s-.72,-1,"120,62,40"),no(n,r,s+.72,1,"120,62,40");return n.add(ne(.2,.08,.2,X.white(),e/2,.79,s)),n},servingCounter(i,e){let t=new be,n=xt+.35;t.add(ne(e-.05,.9,.68,X.steel(),e/2,.45,n)),t.add(ne(e-.05,.03,.3,X.chrome(),e/2,1.25,n+.1));for(let s of[.15,e-.15])t.add(Bt(rt(s,.9,n+.2),rt(s,1.25,n+.2),.01,X.chrome()));for(let s=0;s<Math.floor(e/.4);s++)t.add(ne(.3,.04,.22,X.darkSteel(),.25+s*.4,.92,n-.05));return t},medBed(i,e,t){let n=new be,s=e/2,r=Math.min(2.05,t-.25),o=xt+.12;n.add(ne(.9,.06,r,X.white(),s,.5,o+r/2));for(let c of[-.38,.38])for(let l of[o+.1,o+r-.1])n.add(ne(.04,.4,.04,X.chrome(),s+c,.28,l)),n.add(bt(.05,.04,X.black(),s+c,.05,l,10).rotateZ(Math.PI/2));n.add(ne(.84,.12,r*.62,X.sheet(),s,.59,o+r*.62));let a=ne(.84,.12,r*.36,X.sheet(),s,.72,o+r*.2);a.rotation.x=.45,n.add(a),n.add(ne(.5,.09,.3,X.white(),s,.86,o+.22)),n.add(ne(.74,.05,r*.5,X.blanket("120,160,190"),s,.67,o+r*.68));for(let c of[-1,1])n.add(ne(.02,.2,r*.45,X.chrome(),s+c*.46,.7,o+r*.55));if(n.add(ne(.94,.5,.04,X.white(),s,.75,o)),i.monitor!==!1){let c=e-.12;n.add(Bt(rt(c,0,o+.1),rt(c,1.5,o+.1),.02,X.chrome())),n.add(ne(.3,.24,.08,X.white(),c,1.45,o+.15)),n.add(ne(.26,.18,.01,X.screen(2,"wave"),c,1.45,o+.195)),n.add(Bt(rt(c-.05,1.6,o+.1),rt(c-.05,1.9,o+.1),.01,X.chrome())),n.add(ne(.1,.16,.04,X.glass(),c-.05,1.82,o+.1))}return n},opTable(i,e,t){let n=new be,s=e/2,r=t/2;return n.add(ne(.6,.06,.5,X.darkSteel(),s,.03,r)),n.add(bt(.12,.75,X.steel(),s,.42,r)),n.add(ne(.56,.1,1.95,X.steel(),s,.84,r)),n.add(ne(.52,.06,1.9,X.upholstery("40,96,120"),s,.92,r)),n.add(Bt(rt(e-.1,0,.2),rt(e-.1,2.3,.2),.04,X.white())),n.add(Bt(rt(e-.1,2.3,.2),rt(s,2.15,r),.03,X.white())),n.add(bt(.32,.12,X.white(),s,2.1,r,20,.2)),n.add(bt(.28,.01,X.lamp(),s,2.035,r,20)),n},medCart(i,e){let t=new be,n=e/2,s=xt+.35;t.add(ne(.55,.9,.45,X.white(),n,.5,s));for(let r of[-.22,.22])for(let o of[-.18,.18])t.add(bt(.04,.04,X.black(),n+r,.04,s+o,8).rotateZ(Math.PI/2));for(let r=0;r<3;r++)t.add(ne(.5,.005,.005,X.darkSteel(),n,.3+r*.22,s+.226));return Nu(t,n,.95,s-.05,.42,2),t.add(bt(.06,.4,X.green(),n+.2,1.15,s+.12,10)),t},showerCabin(i,e){let t=new be,n=Math.min(.95,e-.2),s=e/2,r=xt+.02,o=r+n;t.add(ne(n,.12,n,X.ceramic(),s,.06,(r+o)/2)),t.add(ne(n,2,.02,X.white(),s,1,r+.01));for(let a of[-1,1])t.add(ne(.012,1.9,n,X.glass(),s+a*n/2,1.07,(r+o)/2));t.add(ne(n,1.9,.012,X.glass(),s,1.07,o));for(let a of[-1,1])t.add(ne(.03,1.95,.03,X.chrome(),s+a*n/2,1.05,o));return t.add(Bt(rt(s,.9,r+.05),rt(s,1.95,r+.05),.012,X.chrome())),t.add(bt(.08,.02,X.chrome(),s,1.95,r+.14,14)),t.add(ne(.08,.12,.04,X.chrome(),s,1.1,r+.04)),t},washbasin(i,e){let t=new be,n=e/2,s=xt+.26;return t.add(ne(.58,.16,.44,X.ceramic(),n,.8,s)),t.add(ne(.46,.04,.32,X.chrome(),n,.86,s+.02)),t.add(ne(.14,.7,.14,X.ceramic(),n,.36,s-.1)),t.add(Bt(rt(n,.88,xt+.05),rt(n,1.02,xt+.12),.012,X.chrome())),t.add(ne(.5,.65,.02,X.chrome(),n,1.45,xt+.01)),t.add(ne(.46,.6,.01,X.tintedGlass(),n,1.45,xt+.025)),t},toilet(i,e){let t=new be,n=e/2,s=e-.1,r=xt,o=1;for(let a of[-1,1])t.add(ne(.03,1.9,o,X.cabinetGrey(),n+a*s/2,1.07,r+o/2));return t.add(ne(s-.06,1.75,.03,X.cabinetGrey(),n,1,r+o)),t.add(ne(.03,.1,.03,X.chrome(),n+s/2-.15,1,r+o+.02)),t.add(ne(.36,.36,.5,X.ceramic(),n,.2,r+.35)),t.add(ne(.38,.4,.16,X.ceramic(),n,.6,r+.1)),t},washer(i,e){let t=new be,n=e/2,s=xt+.32;for(let[r,o]of[[.43,1],[1.29,2]])t.add(ne(.6,.84,.6,X.white(),n,r,s)),t.add(bt(.2,.02,X.tintedGlass(),n,r-.04,s+.305,18).rotateX(Math.PI/2)),t.add(bt(.23,.015,X.chrome(),n,r-.04,s+.3,18).rotateX(Math.PI/2)),t.add(ne(.12,.04,.01,o===1?X.ledGreen():X.ledRed(),n+.18,r+.33,s+.305));return t},treadmill(i,e,t){let n=new be,s=e/2,r=xt+.15,o=Math.min(1.9,t-.4);n.add(ne(.8,.18,o,X.darkSteel(),s,.12,r+o/2+.1)),n.add(ne(.56,.02,o-.2,X.black(),s,.22,r+o/2+.1));for(let a of[-1,1])n.add(Bt(rt(s+a*.36,.2,r+.15),rt(s+a*.34,1.3,r+.05),.03,X.frame())),n.add(Bt(rt(s+a*.34,1,r+.1),rt(s+a*.34,1,r+.6),.02,X.black()));return n.add(ne(.72,.28,.12,X.black(),s,1.32,r+.08)),n.add(ne(.4,.16,.01,X.screen(0,"wave"),s,1.34,r+.145)),n},exerciseBike(i,e){let t=new be,n=e/2,s=.62;return t.add(ne(.5,.05,.08,X.frame(),n,.03,s-.4)),t.add(ne(.5,.05,.08,X.frame(),n,.03,s+.4)),t.add(ne(.08,.06,.8,X.frame(),n,.06,s)),t.add(bt(.22,.08,X.darkSteel(),n,.32,s-.28,18).rotateZ(Math.PI/2)),t.add(Bt(rt(n,.06,s-.3),rt(n,1.05,s-.36),.03,X.frame())),t.add(ne(.46,.04,.06,X.black(),n,1.07,s-.36)),t.add(ne(.2,.12,.08,X.black(),n,1.16,s-.38)),t.add(Bt(rt(n,.06,s+.3),rt(n,.88,s+.16),.03,X.frame())),t.add(ne(.24,.07,.3,X.black(),n,.92,s+.14)),t.add(bt(.12,.05,X.red(),n,.36,s-.02,14).rotateZ(Math.PI/2)),t},powerRack(i,e,t){let n=new be,s=e-.3,r=Math.min(1.2,t-.3),o=(e-s)/2,a=(t-r)/2;for(let c of[o,o+s])for(let l of[a,a+r])n.add(ne(.07,2.25,.07,X.black(),c,1.125,l));for(let c of[o,o+s])n.add(ne(.07,.07,r,X.black(),c,2.22,a+r/2));for(let c of[a,a+r])n.add(ne(s,.07,.07,X.black(),o+s/2,2.22,c));n.add(Bt(rt(o-.35,1.35,a+.2),rt(o+s+.35,1.35,a+.2),.016,X.chrome()));for(let c of[o-.22,o+s+.22])n.add(bt(.225,.05,X.black(),c,1.35,a+.2,20).rotateZ(Math.PI/2));return n.add(ne(s-.1,.02,r-.1,X.rubber(),o+s/2,.01,a+r/2)),n},weightBench(i,e,t){let n=new be,s=e/2,r=.3,o=Math.min(1.3,t-.6);n.add(ne(.3,.08,o,X.leather(),s,.45,r+o/2+.2));for(let a of[r+.35,r+o])n.add(ne(.06,.42,.06,X.black(),s,.21,a));n.add(ne(.5,.04,.06,X.black(),s,.02,r+o));for(let a of[-1,1])n.add(ne(.05,1.2,.05,X.black(),s+a*.42,.6,r+.15));n.add(Bt(rt(s-.85,1.12,r+.15),rt(s+.85,1.12,r+.15),.014,X.chrome()));for(let a of[-1,1])n.add(bt(.17,.04,X.black(),s+a*.6,1.12,r+.15,18).rotateZ(Math.PI/2));return n},dumbbellRack(i,e){let t=new be,n=xt+.3;for(let s of[.1,e-.1])t.add(ne(.05,.8,.45,X.black(),s,.4,n));for(let[s,r]of[[.45,0],[.75,0]]){t.add(ne(e-.2,.03,.4,X.darkSteel(),e/2,s+r,n));let o=Math.floor((e-.3)/.22);for(let a=0;a<o;a++){let c=.25+a*.22,l=.05+a*.006;for(let h of[-.08,.08])t.add(bt(l,.05,X.black(),c,s+l+.02,n+h,10).rotateX(Math.PI/2));t.add(Bt(rt(c,s+l+.02,n-.1),rt(c,s+l+.02,n+.1),.012,X.chrome()))}}return t},gymMat(i,e,t){let n=new be;return n.add(ne(e-.1,.05,t-.1,X.mat(),e/2,.025,t/2)),n.add(ne(e-.1,.006,.02,X.white(),e/2,.053,t/2)),n},punchingBag(i,e,t){let n=new be,s=e/2,r=t/2;return n.add(ne(.5,.05,.5,X.black(),s-.3,.025,r)),n.add(Bt(rt(s-.45,0,r),rt(s-.45,2.3,r),.035,X.black())),n.add(Bt(rt(s-.45,2.25,r),rt(s,2.25,r),.03,X.black())),n.add(Bt(rt(s,2.25,r),rt(s,1.75,r),.006,X.chrome())),n.add(bt(.17,1,X.red(),s,1.2,r,16)),n},gunRack(i,e){let t=new be,n=xt+.22;t.add(ne(e-.08,1.9,.04,X.olive(),e/2,.95,xt+.02)),t.add(ne(e-.08,.5,.4,X.olive(),e/2,.25,n)),t.add(ne(e-.1,.04,.3,X.darkSteel(),e/2,1.5,n-.03));for(let r of[.04,e-.04])t.add(ne(.04,1.9,.42,X.olive(),r,.95,n));let s=Math.max(2,Math.floor((e-.2)/.16));for(let r=0;r<s;r++){let o=.15+r*(e-.3)/(s-1);t.add(ne(.05,.85,.08,X.black(),o,.98,n)),t.add(ne(.035,.22,.12,X.black(),o,.68,n+.04)),t.add(ne(.03,.12,.05,X.darkSteel(),o,1.44,n+.04))}return t},fumeHood(i,e){let t=new be,n=e/2,s=xt+.36;t.add(ne(e-.1,.9,.7,X.cabinetGrey(),n,.45,s)),t.add(ne(e-.1,.04,.72,X.black(),n,.92,s));for(let r of[-1,1])t.add(ne(.04,1.05,.7,X.white(),n+r*(e/2-.07),1.45,s));return t.add(ne(e-.1,.06,.7,X.white(),n,2,s)),t.add(ne(e-.18,.02,.36,X.white(),n,1.97,s)),t.add(ne(e-.2,.6,.012,X.glass(),n,1.55,s+.34)),t.add(ne(.3,.45,.3,X.steel(),n,2.25,s-.12)),t.add(bt(.04,.2,X.yellow(),n-.2,1.04,s-.1,10,.03)),t.add(bt(.05,.14,X.glass(),n+.1,1.01,s,12)),t},bioCabinet(i,e){let t=new be,n=e/2,s=xt+.38;for(let o of[-.42,.42])t.add(ne(.05,.7,.6,X.frame(),n+o,.35,s));t.add(ne(e-.12,1.15,.74,X.white(),n,1.28,s));let r=ne(e-.22,.6,.01,X.glass(),n,1.3,s+.38);return r.rotation.x=-.18,t.add(r),t.add(ne(e-.24,.02,.5,X.lamp(),n,1.62,s+.05)),t.add(ne(.2,.06,.01,X.ledGreen(),n+.3,1.78,s+.375)),t},instrumentRack(i,e){let t=new be,n=e/2,s=xt+.32;t.add(ne(e-.15,1.85,.6,X.darkSteel(),n,.925,s));for(let r=0;r<5;r++){let o=.25+r*.33;t.add(ne(e-.25,.28,.02,r%2?X.cabinetGrey():X.black(),n,o,s+.305)),t.add(ne(.3,.16,.01,X.screen(r+(i.seed||0),r%2?"wave":"text"),n-.15,o,s+.317)),t.add(ne(.03,.03,.01,r%3?X.ledGreen():X.ledRed(),n+.25,o+.06,s+.317))}return t},testRig(i,e,t){let n=new be,s=e/2,r=t/2,o=e-.4,a=t-.5;n.add(ne(o,.8,a,X.cabinetGrey(),s,.4,r)),n.add(ne(o+.04,.05,a+.04,X.black(),s,.82,r)),n.add(bt(.42,.9,X.steel(),s,1.3,r,20)),n.add(bt(.44,.06,X.orange(),s,1.78,r,20)),n.add(bt(.12,.02,X.tintedGlass(),s,1.3,r+.43,16).rotateX(Math.PI/2));for(let c of[.6,2.2,4])n.add(Bt(rt(s+Math.cos(c)*.4,1,r+Math.sin(c)*.4),rt(s+Math.cos(c)*(o/2),.84,r+Math.sin(c)*(a/2)),.02,X.black()));return n.add(ne(.5,.35,.3,X.black(),s+o/2-.3,1,r-a/2+.2)),n.add(ne(.4,.22,.01,X.screen(1,"wave"),s+o/2-.3,1.02,r-a/2+.355)),n},specimenTank(i,e,t){let n=new be,s=e/2,r=t/2;n.add(bt(.45,.3,X.darkSteel(),s,.15,r,20)),n.add(bt(.4,1.6,X.liquid(),s,1.1,r,20));for(let a of[.8,2.4,3.9,5.5])n.add(ne(.03,1.65,.03,X.chrome(),s+Math.cos(a)*.42,1.12,r+Math.sin(a)*.42));n.add(bt(.45,.2,X.darkSteel(),s,2.03,r,20));let o=new Se(new Ln(.22,14,10),X.specimen());o.scale.set(.8,1.6,.7),o.position.set(s,1.15,r),n.add(o);for(let a of[.5,2.6])n.add(Bt(rt(s+Math.cos(a)*.3,2.1,r+Math.sin(a)*.3),rt(s+Math.cos(a)*.3,2.45,r+Math.sin(a)*.3),.025,X.black()));return n.add(ne(.1,.06,.01,X.ledGreen(),s,.2,r+.455)),n},freezer(i,e){let t=new be,n=e/2,s=xt+.38;return t.add(ne(e-.2,1.95,.72,X.white(),n,.975,s)),t.add(ne(.03,.6,.03,X.chrome(),n+e/2-.2,1.1,s+.37)),t.add(ne(.2,.08,.01,X.screen(0,"text"),n,1.75,s+.362)),t},commandTable(i,e,t){let n=new be,s=e/2,r=t/2,o=e-.5,a=t-.5;return n.add(ne(o-.2,.85,a-.2,X.darkSteel(),s,.425,r)),n.add(ne(o,.06,a,X.black(),s,.88,r)),n.add(ne(o-.1,.01,a-.1,X.map(),s,.915,r)),n},wallScreen(i,e){let t=new be,n=e/2,s=xt+.08;return t.add(ne(e-.2,1.1,.08,X.black(),n,1.55,s)),t.add(ne(e-.3,1,.01,X.screen(i.seed||3,"wave"),n,1.55,s+.045)),t.add(ne(e-.2,.75,.3,X.darkSteel(),n,.375,s+.12)),t},chairRow(i,e,t){let n=new be,s=Math.max(1,Math.floor(e/.6)),r=t/2;n.add(ne(e-.1,.05,.08,X.frame(),e/2,.06,r));for(let o=0;o<s;o++)no(n,(o+.5)*e/s,r,-1,"52,60,74");return n},bench(i,e,t){let n=new be,s=t/2;n.add(ne(e-.2,.05,.36,X.wood(),e/2,.45,s));for(let r of[.25,e-.25])n.add(ne(.06,.43,.3,X.frame(),r,.215,s));return n},machineTool(i,e){let t=new be,n=xt+.45,s=e/2;return t.add(ne(e-.2,.85,.8,X.green(),s,.425,n)),t.add(ne(e-.3,.06,.6,X.steel(),s,.88,n+.05)),t.add(ne(.5,.55,.55,X.green(),.45,1.18,n-.05)),t.add(bt(.06,.3,X.chrome(),.85,1.05,n+.05,12).rotateZ(Math.PI/2)),t.add(ne(.35,.3,.35,X.green(),e-.45,1.06,n)),t.add(ne(e-.3,.45,.012,X.glass(),s,1.15,n+.38)),t.add(ne(.28,.36,.1,X.black(),e-.2,1.4,n-.2)),t.add(ne(.2,.14,.01,X.screen(1,"text"),e-.2,1.45,n-.145)),t.add(ne(.1,.06,.04,X.red(),e-.2,1.25,n-.14)),t},repairStand(i,e,t){let n=new be;n.add(ne(e-.2,.01,t-.2,X.darkSteel(),e/2,.006,t/2));for(let s of[.12,t-.12])n.add(ne(e-.2,.012,.1,X.yellow(),e/2,.012,s));for(let s of[.12,e-.12])n.add(ne(.1,.012,t-.2,X.yellow(),s,.012,t/2));return n},shelf(i,e){let t=new be,n=xt+.18,s=pt(i.col*31+i.row);for(let r of[.06,e-.06])t.add(ne(.03,1.9,.34,X.wood(),r,.95,n));for(let r=0;r<5;r++){let o=.05+r*.45;if(t.add(ne(e-.1,.03,.34,X.wood(),e/2,o,n)),r===4)continue;let a=.1;for(;a<e-.15;){let c=.04+s()*.05,l=.24+s()*.14,h=[X.red(),X.olive(),X.cabinetGrey(),X.yellow(),X.black()];t.add(ne(c,l,.24,h[Math.floor(s()*h.length)],a+c/2,o+.015+l/2,n)),a+=c+.005}}return t}};function T2(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new be;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new be;return l.add(c),l}var Uu=new Set(Object.keys(Du));function ku(i){let e=Du[i.kind];return e?T2(i,i.cols*Lu,i.rows*Lu,e):null}var wn=i=>Math.max(0,Math.min(255,Math.round(i))),Et=(i,e,t)=>new L(i,e,t),Sl=new Map,Qn=(i,e)=>(Sl.has(i)||Sl.set(i,e()),Sl.get(i)),Gt=(i,e)=>Qn("city_"+i,()=>new Ve(e));function gi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function ba(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=gi(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(h,d)=>(t?(h=(h+n)%n,d=(d+s)%s):(h=Math.max(0,Math.min(n-1,h)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+h)*4]/255);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let u=(l(d+1,h)-l(d-1,h))*e,f=(l(d,h+1)-l(d,h-1))*e,p=Math.hypot(u,f,1),x=(h*n+d)*4;c.data[x]=(-u/p*.5+.5)*255,c.data[x+1]=(f/p*.5+.5)*255,c.data[x+2]=(1/p*.5+.5)*255,c.data[x+3]=255}return a.putImageData(c,0,0),Mt(o,{srgb:!1})}function ys(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:c=4}={}){let l=pt(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let p=1+ki(u/e,d/t,a,c,s)*o+(l()-.5)*r/255,x=(d*e+u)*4;h.data[x]=wn(n[0]*p),h.data[x+1]=wn(n[1]*p),h.data[x+2]=wn(n[2]*p),h.data[x+3]=255}i.putImageData(h,0,0)}var Ma=(i,e=1)=>`rgba(${i[0]},${i[1]},${i[2]},${e})`,Al={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},Rl=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Bu=i=>{let[e,t]=i.split("_");return{base:e,role:t,colors:Al[e]}};function A2(i,e){let{base:t,role:n,colors:s}=Bu(i),r=512,o=936,a=o/2.28,c=x=>o-x*a,l=gi(r,o),h=l.getContext("2d"),d=gi(r,o),u=d.getContext("2d");ys(h,r,o,s.wall,{seed:41+e*5+t.length*3,grain:t==="bank"?14:8,dirt:.08,scale:3}),u.fillStyle="#808080",u.fillRect(0,0,r,o);let f=pt(61+e*11+t.length);if(t==="police"&&n!=="g"){let x=.075*a,m=.26*a;for(let g=0;g*x<o;g++){let _=o-(g+1)*x,y=g%2?m/2:0;for(let v=-y;v<r;v+=m){let R=.86+f()*.26;h.fillStyle=Ma(s.wall.map(P=>wn(P*R))),h.fillRect(v+2,_+2,m-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,_,r,2.5),u.fillStyle="#505050",u.fillRect(0,_,r,3);for(let v=-y;v<r;v+=m)h.fillRect(v,_,2.5,x),u.fillRect(v,_,3,x)}}if(n==="g"||t==="bank"){let m=t==="police"?[212,204,188]:null;m&&ys(h,r,o,m,{seed:71+e,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let _=c(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,_-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,_+3,r,2),u.fillStyle="#202020",u.fillRect(0,_-3,r,7),t==="bank"){let y=.62*a,v=g%2?y/2:0;for(let R=v;R<r;R+=y)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(R-1.5,_,3,.32*a),u.fillStyle="#303030",u.fillRect(R-2,_,4,.32*a)}}}for(let x=0;x<8;x++){let m=f()*r,g=60+f()*240,_=h.createLinearGradient(0,0,0,g);_.addColorStop(0,"rgba(70,60,50,0.12)"),_.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=_,h.fillRect(m,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,c(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,c(.9),r,.9*a)}let p=Mt(l);return p.wrapS=p.wrapT=Qt,{map:p,normalMap:ba(d,4,!1)}}function zu(i,e="plaster"){let s=410.5263157894737,r=gi(512,936),o=r.getContext("2d"),a=gi(512,936),c=a.getContext("2d");if(c.fillStyle="#808080",c.fillRect(0,0,512,936),e==="vault"){ys(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",c.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),c.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),c.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let d=24;d<512;d+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(d,h,4,0,Math.PI*2),o.fill(),c.fillStyle="#d0d0d0",c.beginPath(),c.arc(d,h,4,0,Math.PI*2),c.fill()}else ys(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),c.fillStyle="#b0b0b0",c.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),c.fillStyle="#a0a0a0",c.fillRect(0,936-.95*s,512,6);let l=Mt(r);return l.wrapS=l.wrapT=Qt,{map:l,normalMap:ba(a,3,!1)}}var ce={facade:(i,e)=>Qn(`facade_${i}_${e}`,()=>{let t=A2(i,e);return new Ve({map:t.map,normalMap:t.normalMap,roughness:.85,metalness:0})}),plaster:i=>Qn("plaster"+i,()=>{let e=zu(i);return new Ve({map:e.map,normalMap:e.normalMap,roughness:.9})}),vault:()=>Qn("vaultWall",()=>{let i=zu(0,"vault");return new Ve({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Gt("trim_"+i,{color:new je().setRGB(...Al[i].trim.map(e=>(e/255)**2.2)),roughness:.75}),plinth:i=>Gt("plinth_"+i,{color:new je().setRGB(...Al[i].plinth.map(e=>(e/255)**2.2)),roughness:.9}),glass:()=>Qn("city_glass",()=>new Hn({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Gt("frame",{color:15789282,roughness:.6}),wood:()=>Gt("wood",{color:5913124,roughness:.65}),darkWood:()=>Gt("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Gt("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Gt("greenDoor",{color:2375726,roughness:.55}),iron:()=>Gt("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Gt("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Gt("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Gt("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Gt("stone",{color:13156528,roughness:.85}),granite:()=>Gt("granite",{color:9078402,roughness:.8}),ceiling:()=>Gt("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Gt("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Gt("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Gt("fabric"+i,{color:i,roughness:.95}),paint:i=>Gt("paint"+i,{color:i,roughness:.6}),water:()=>Qn("city_water",()=>new Hn({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>Qn("city_spray",()=>new Ve({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>Qn("leaves"+i,()=>new Ve({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Gt("sandFill",{color:14073994,roughness:1})};function R2(i){let t=gi(512,512),n=t.getContext("2d"),s=gi(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=pt(i.length*17+3);if(i==="parquet"){ys(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,c=a/5;for(let l=-12;l<30;l++)for(let h=-2;h<14;h++)for(let d of[0,1]){let u=.8+o()*.35;n.save(),n.translate(l*c*2+h*0+d*c,h*a-l*c*0),n.rotate(d?Math.PI/4:-Math.PI/4),n.fillStyle=Ma([wn(158*u),wn(106*u),wn(64*u)]),n.fillRect(0,0,a*.7,c*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let l=0;l<512;l+=c*1.41)n.beginPath(),n.moveTo(0,l),n.lineTo(512,l+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let c=0;c<2;c++){let l=(c+a)%2===0;n.fillStyle=l?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(c*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let c=o()*512,l=o()*512;n.moveTo(c,l);for(let h=0;h<6;h++)c+=(o()-.3)*60,l+=(o()-.5)*50,n.lineTo(c,l);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){ys(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let c=0;c<a;c++)for(let l=0;l<a;l++){let h=.92+o()*.12;n.fillStyle=(l+c)%2?`rgba(${wn(110*h)},${wn(116*h)},${wn(110*h)},1)`:`rgba(${wn(206*h)},${wn(204*h)},${wn(192*h)},1)`,n.fillRect(l*512/a+1,c*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let c=0;c<=512;c+=512/a)r.fillRect(c-1,0,2,512),r.fillRect(0,c-1,512,2)}else{ys(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let c=8+a/16%2*8;c<512;c+=16)n.save(),n.translate(c,a),n.rotate((c+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(c,a),r.rotate((c+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:Mt(t),normalMap:ba(s,2)}}function Gu(i){return Qn("floor_"+i,()=>{let e=R2(i);return new Ve({map:e.map,normalMap:e.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function De(i,e,t,n,s,r,o){let a=new Se(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Vn(i,e,t,n,s,r,o,a=16){let c=new Se(new Ct(i,e,t,a),n);return c.position.set(s,r,o),c}function Nn(i,e,t,n,s,r=32){let o=new Se(new os(i.map(([a,c])=>new ge(a,c)),r),e);return o.position.set(t,n,s),o}function io(i,e,t,n){let s=new en;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,e),s.closePath();let r=new xn(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new Se(r,n)}var Tl=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Vu(i,e,t,n,s,r,o){let{wallBox:a,isIndoor:c,THICK:l,PANEL_H:h}=o,d=new be,u=s.type,f=s.style,p=r?.8:h,x=l/2,m=(e*73856093^t*19349663^n*83492791)>>>0,g=c(n,e,t),_=i==="W"?c(n,e-1,t):c(n,e,t-1),y=Rl(f)?Bu(f):null,v=J=>f==="vault"?ce.vault():!y||J?ce.plaster(m%3):ce.facade(f,m%3),R=y?ce.trim(y.base):ce.slabEdge(),P=v(g),I=v(_),z=i==="W"?[P,I,R,R,R,R]:[R,R,R,R,P,I],A=y?g?-1:1:0,M=n*ut,T=(J,N,O,B,q,U,E)=>{let F=U-q,Y=A*(l/2+(q+U)/2),oe=i==="W"?new gt(F,B-O,N-J):new gt(N-J,B-O,F),xe=new Se(oe,E);return i==="W"?xe.position.set(e*D+Y,M+(O+B)/2,t*D+(J+N)/2):xe.position.set(e*D+(J+N)/2,M+(O+B)/2,t*D+Y),d.add(xe),xe},le=(J,N,O,B)=>{let q=new xn(J,{depth:O-N,bevelEnabled:!1,curveSegments:16});(i==="W"?A<0:A>0)?q.translate(0,0,l/2+N):q.translate(0,0,-(l/2+O)),i==="W"&&q.rotateY(-Math.PI/2);let E=new Se(q,B);return E.position.set(e*D,M,t*D),d.add(E),E};if(u==="rail"){let J=f==="fence",N=J?ce.fenceGreen():ce.iron(),O=J?1.1:.95,B=(q,U,E,F,Y,oe=N)=>d.add(a(i,e,t,n,q,U,E,F,Array(6).fill(oe),Y));for(let q of[0,D])B(q-.03,q+.03,0,O+.04,.06);B(0,D,O-.04,O,.05,J?N:ce.darkWood()),B(0,D,.08,.12,.035),J&&B(0,D,O-.3,O-.27,.03);for(let q=.1;q<D-.05;q+=.12)B(q-.009,q+.009,.1,O-(J?-.06:.02),.018),J&&B(q-.02,q+.02,O+.02,O+.07,.025);return d}if(u==="wall")d.add(a(i,e,t,n,-x,D+x,0,p,z));else if(u==="door"){let N=Math.min(2.1,p),O=(D-.92)/2,B=(D+.92)/2;d.add(a(i,e,t,n,-x,O,0,p,z)),d.add(a(i,e,t,n,B,D+x,0,p,z)),p>N+.01&&d.add(a(i,e,t,n,O,B,N,p,z));let q=f==="vault"?ce.steel():ce.wood(),U=Array(6).fill(q),E=f==="vault"?.12:.06;if(d.add(a(i,e,t,n,O-E,O,0,N,U,l+.05)),d.add(a(i,e,t,n,B,B+E,0,N,U,l+.05)),p>N+.01&&d.add(a(i,e,t,n,O-E,B+E,N,N+E,U,l+.05)),d.add(a(i,e,t,n,O,B,0,.03,Array(6).fill(ce.stone()),l+.1)),y&&!r){let F=ce.trim(y.base);if(T(O-.16,O-.04,0,N+.1,0,.05,F),T(B+.04,B+.16,0,N+.1,0,.05,F),T(O-.16,B+.16,N+.04,N+.16,0,.05,F),N+.42<p){T(O-.26,B+.26,N+.26,N+.34,0,.22,F);for(let Y of[O-.18,B+.18])T(Y-.05,Y+.05,N+.12,N+.26,0,.16,F)}}}else{let J=y&&y.base==="bank"&&y.role==="g",N=.78,O=J?.62:y&&y.role==="g"?.75:.7,B=J?2.08:2,q=(D-N)/2,U=(D+N)/2,E=J?B-N/2:B;if(r)d.add(a(i,e,t,n,-x,D+x,0,p,z));else{if(d.add(a(i,e,t,n,-x,q,0,p,z)),d.add(a(i,e,t,n,U,D+x,0,p,z)),d.add(a(i,e,t,n,q,U,0,O,z)),d.add(a(i,e,t,n,q,U,B,p,z)),J){let oe=new en;oe.moveTo(q,E),oe.lineTo(q,B),oe.lineTo(U,B),oe.lineTo(U,E),oe.absarc(D/2,E,N/2,0,Math.PI,!1);let xe=new xn(oe,{depth:l,bevelEnabled:!1,curveSegments:16});xe.translate(0,0,-l/2),i==="W"&&xe.rotateY(-Math.PI/2);let W=new Se(xe,A?ce.facade(f,m%3):z[i==="W"?0:4]);W.position.set(e*D,M,t*D),d.add(W)}let F=Array(6).fill(ce.glass()),Y=Array(6).fill(ce.frame());if(d.add(a(i,e,t,n,q+.03,U-.03,O,J?E+N/2-.02:B,F,.03)),d.add(a(i,e,t,n,q,q+.05,O,E,Y,.08)),d.add(a(i,e,t,n,U-.05,U,O,E,Y,.08)),d.add(a(i,e,t,n,q,U,O,O+.05,Y,.08)),J||d.add(a(i,e,t,n,q,U,B-.05,B,Y,.08)),d.add(a(i,e,t,n,D/2-.022,D/2+.022,O,J?E+N/2-.04:B,Y,.06)),d.add(a(i,e,t,n,q,U,O+(E-O)*.68-.02,O+(E-O)*.68+.02,Y,.06)),y){let oe=ce.trim(y.base);if(T(q-.1,U+.1,O-.07,O,0,.1,oe),J||(T(q-.1,q,O,B+.08,0,.04,oe),T(U,U+.1,O,B+.08,0,.04,oe),T(q-.1,U+.1,B,B+.08,0,.04,oe)),y.role==="u"&&["bank","pink","cream"].includes(y.base)||y.role==="t"&&y.base==="bank"){let W=new en;W.moveTo(q-.16,B+.1),W.lineTo(U+.16,B+.1),W.lineTo(D/2,B+.27),W.closePath(),le(W,0,.1,oe)}else y.role==="u"||y.role==="t"?T(q-.15,U+.15,B+.1,B+.17,0,.12,oe):y.role==="g"&&!J&&T(D/2-.07,D/2+.07,B-.02,B+.16,0,.06,oe);if(J){let W=new en;W.absarc(D/2,E,N/2+.1,0,Math.PI,!1),W.lineTo(q,E),W.absarc(D/2,E,N/2,Math.PI,0,!0),W.closePath(),le(W,0,.05,oe),T(D/2-.07,D/2+.07,B-.06,B+.14,0,.08,oe),T(q-.1,q,O,E,0,.05,oe),T(U,U+.1,O,E,0,.05,oe);let fe=ce.iron();for(let Ee=1;Ee<6;Ee++){let Ce=q+Ee*N/6,H=Math.sqrt(Math.max(0,(N/2)**2-(Ce-D/2)**2));T(Ce-.01,Ce+.01,O,E+H-.03,-.06,-.04,fe)}for(let Ee of[O+.35,O+.8])T(q+.02,U-.02,Ee,Ee+.02,-.065,-.035,fe)}if(y.role!=="g"&&y.base==="bank"){let W=ce.iron();T(q-.08,U+.08,O-.12,O-.07,0,.32,ce.stone()),T(q-.06,U+.06,O+.42,O+.45,.28,.31,W);for(let fe=0;fe<=8;fe++){let Ee=q-.04+fe*(N+.08)/8;T(Ee-.008,Ee+.008,O-.07,O+.43,.285,.305,W)}}}}}if(y&&!r){let J=ce.trim(y.base);if(y.role==="g"&&T(-x,D+x,0,.5,0,.05,ce.plinth(y.base)),y.role==="t"){T(-x-.02,D+x+.02,h-.16,h+.02,0,.08,J),T(-x-.06,D+x+.06,h+.02,h+.12,0,.18,J),T(-x-.1,D+x+.1,h+.12,h+.24,0,.32,J);for(let N=.16;N<D;N+=.31)T(N-.04,N+.04,h-.02,h+.12,.08,.26,J)}else T(-x-.02,D+x+.02,h-.08,h+.24,0,.06,J),T(-x-.03,D+x+.03,h+.18,h+.24,0,.1,J)}else y&&r&&y.role==="g"&&T(-x,D+x,0,.5,0,.05,ce.plinth(y.base));return d}function Wu(i,e,t,n,s,r,o,a,c){let{wallBox:l}=c,h=new be,d=o-.01;if(a==="vault"){let m=Array(6).fill(ce.steel());h.add(l(i,e,t,n,s-.02,r+.02,.01,d,m,.2));let g=(s+r)/2;for(let _ of[.26])h.add(l(i,e,t,n,g-.3,g+.3,d*.45,d*.45+.04,Array(6).fill(ce.brass()),_));return h.add(l(i,e,t,n,g-.02,g+.02,d*.45-.28,d*.45+.32,Array(6).fill(ce.brass()),.26)),h.add(l(i,e,t,n,s+.05,s+.1,.2,d-.2,Array(6).fill(ce.iron()),.24)),h}let u=a==="outer",f=Array(6).fill(u?ce.greenDoor():ce.wood()),p=Array(6).fill(ce.darkWood()),x=(s+r)/2;h.add(l(i,e,t,n,s-.02,r+.02,.01,d,f,.06)),h.add(l(i,e,t,n,x-.01,x+.01,.01,d,p,.075));for(let[m,g]of[[s+.06,x-.06],[x+.06,r-.06]])d>1&&h.add(l(i,e,t,n,m,g,.15,Math.min(.85,d-.1),p,.072)),d>1.9&&(u?h.add(l(i,e,t,n,m+.02,g-.02,1.05,d-.15,Array(6).fill(ce.glass()),.074)):h.add(l(i,e,t,n,m,g,1,d-.15,p,.072)));for(let m of[-1,1])h.add(l(i,e,t,n,x+m*.06-.015,x+m*.06+.015,Math.min(1,d-.1),Math.min(1.12,d-.05),Array(6).fill(ce.brass()),.09));return h}var Xu=()=>({body:ce.stone(),tread:ce.lightWood(),nosing:ce.darkWood(),rail:ce.iron(),handrail:ce.darkWood()});function C2(i){let n=gi(512,512),s=n.getContext("2d"),r=gi(512,512),o=r.getContext("2d"),a=pt(i==="slate"?501:503),c=512/(i==="slate"?10:8),l=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=Ma(h),s.fillRect(0,0,512,512);for(let f=0;f<512/l;f++){let p=f%2?c/2:0;for(let x=-p;x<512;x+=c){let m=.8+a()*.32,g=f*l,_=o.createLinearGradient(0,g,0,g+l);_.addColorStop(0,"#404040"),_.addColorStop(1,"#c8c8c8"),o.fillStyle=_,o.fillRect(x+1,g,c-2,l),s.fillStyle=Ma(h.map(y=>wn(y*m))),i==="slate"?s.fillRect(x+1,g+1,c-2,l-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+c-1,g),s.lineTo(x+c-1,g+l*.75),s.quadraticCurveTo(x+c/2,g+l*1.05,x+1,g+l*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+l-2,c,2)}}for(let f=0;f<40;f++){let p=a()*512,x=a()*512,m=10+a()*40,g=s.createRadialGradient(p,x,0,p,x,m);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(p-m,x-m,m*2,m*2)}let d=Mt(n),u=ba(r,3);for(let f of[d,u])f.wrapS=f.wrapT=ns;return{map:d,normalMap:u}}var Ou=i=>Qn("roofMat_"+i,()=>{let e=C2(i);return new Ve({map:e.map,normalMap:e.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:dn})});function Wn(i,e,t){let n=new Ut,s=i[0],r=e.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),c=[],l=[];for(let d of i){c.push(d.x,d.y,d.z);let u=new L().subVectors(d,s);l.push(u.dot(r)/(2*D),u.dot(a)/(2*D))}let h=[];for(let d=1;d<i.length-1;d++)h.push(0,d,d+1);return n.setAttribute("position",new st(c,3)),n.setAttribute("uv",new st(l,2)),n.setIndex(h),n.computeVertexNormals(),new Se(n,t)}function Fu(i,e,t,n,s,r,o,a){let c=n-e,l=s-t,h=Math.min(c,l)/2,d=h*Math.tan(o),u=c>=l,f=u?[Et(e+h,r+d,(t+s)/2),Et(n-h,r+d,(t+s)/2)]:[Et((e+n)/2,r+d,t+h),Et((e+n)/2,r+d,s-h)],p={nw:Et(e,r,t),ne:Et(n,r,t),se:Et(n,r,s),sw:Et(e,r,s)};u?(i.add(Wn([p.sw,p.se,f[1],f[0]],Et(1,0,0),a)),i.add(Wn([p.ne,p.nw,f[0],f[1]],Et(-1,0,0),a)),i.add(Wn([p.se,p.ne,f[1]],Et(0,0,-1),a)),i.add(Wn([p.nw,p.sw,f[0]],Et(0,0,1),a))):(i.add(Wn([p.se,p.ne,f[0],f[1]],Et(0,0,-1),a)),i.add(Wn([p.nw,p.sw,f[1],f[0]],Et(0,0,1),a)),i.add(Wn([p.sw,p.se,f[1]],Et(1,0,0),a)),i.add(Wn([p.ne,p.nw,f[0]],Et(-1,0,0),a)));let x=a,m=(g,_)=>{let y=new L().subVectors(_,g),v=new Se(new Ct(.07,.07,y.length(),8),x);v.position.copy(g).addScaledVector(y,.5),v.quaternion.setFromUnitVectors(Et(0,1,0),y.normalize()),i.add(v)};return m(f[0],f[1]),m(p.nw,f[0]),m(p.sw,f[0]),m(p.ne,f[1]),m(p.se,f[1]),{height:d,along:u,half:h}}function Hu(i,e,t,n,s,r,o,a=1){let c=new be,l=1*a,h=1.15*a,d=1.6*a;c.add(De(l,h,d,r,0,h/2,-d/2)),c.add(De(l*.56,h*.6,.04,ce.glass(),0,h*.45,.01)),c.add(De(l*.66,.06,.06,ce.frame(),0,h*.14,.02)),c.add(De(.04,h*.6,.05,ce.frame(),0,h*.45,.02));let u=io(l+.24,.55*a,d+.15,o);u.position.set(0,h,-d/2+.07),c.add(u);let f=io(l+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),c.add(f),c.position.set(e,n,t),c.rotation.y=Math.atan2(s.x,s.z),i.add(c)}var mi=i=>(i+.5)*D;function P2(i){let e=i.cols*D,t=i.rows*D;if(i.type==="mansard"){let l={x0:-.2,z0:-.2,x1:e+.2,z1:t+.2},h=(47-i.col)*D+D/2,d=[],u=.75*.36;for(let p=1;p<i.cols-1;p+=2){let x=mi(p);Math.abs(x-h)<5.2||d.push({x,z:l.z1-u,facing:"S"},{x,z:l.z0+u,facing:"N"})}for(let p=1;p<i.rows-1;p+=2)d.push({x:l.x1-u,z:mi(p),facing:"E"},{x:l.x0+u,z:mi(p),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([p,x])=>({x:mi(Math.floor(i.cols*p)),z:mi(Math.floor(i.rows*x))}));return{...l,width:e,depth:t,dormers:d,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:t-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:e+n,z1:t+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let l=0;l<i.cols;l++){let h=mi(l);l%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let l=0;l<i.rows;l++){let h=mi(l);l%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let c=[0,1,2].map(l=>({x:mi(Math.floor(i.cols*(.25+l*.25))),z:mi(Math.floor(i.rows*(.42+l%2*.16)))}));return{...r,width:e,depth:t,along:o,run:s,dormers:a,chimneys:c,pediment:null}}function I2(i){let e=P2(i),t={S:Et(0,0,1),N:Et(0,0,-1),E:Et(1,0,0),W:Et(-1,0,0)},n=new be,s=i.cols*D,r=i.rows*D,o=.42,a=pt(i.col*31+i.row*17),c=ce.trim(i.facade||"cream");if(i.type==="mansard"){let l=Ou("slate"),h=.75,d=2.3,u=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},p={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(A,M,T)=>Et(A,M,T),m=u+d;n.add(Wn([x(f.x0,u,f.z1),x(f.x1,u,f.z1),x(p.x1,m,p.z1),x(p.x0,m,p.z1)],Et(1,0,0),l)),n.add(Wn([x(f.x1,u,f.z0),x(f.x0,u,f.z0),x(p.x0,m,p.z0),x(p.x1,m,p.z0)],Et(-1,0,0),l)),n.add(Wn([x(f.x1,u,f.z1),x(f.x1,u,f.z0),x(p.x1,m,p.z0),x(p.x1,m,p.z1)],Et(0,0,-1),l)),n.add(Wn([x(f.x0,u,f.z0),x(f.x0,u,f.z1),x(p.x0,m,p.z1),x(p.x0,m,p.z0)],Et(0,0,1),l)),Fu(n,p.x0,p.z0,p.x1,p.z1,m,.07,l),n.add(De(p.x1-p.x0+.1,.1,.12,ce.steel(),(p.x0+p.x1)/2,m+.05,p.z1)),n.add(De(p.x1-p.x0+.1,.1,.12,ce.steel(),(p.x0+p.x1)/2,m+.05,p.z0));let g=u+.35;for(let A of e.dormers)Hu(n,A.x,A.z,g,t[A.facing],c,l,.95);let _=(47-i.col)*D+D/2,y=r+.12,v=io(9.2,2.3,.5,c);v.position.set(_,u-.02,y-.05),n.add(v);let R=io(8.2,1.85,.12,ce.facade("bank_u",1));R.position.set(_,u+.16,y+.22),n.add(R);let P=Math.atan2(2.3,4.6),I=Math.hypot(4.6,2.3)+.3;for(let A of[-1,1]){let M=De(I,.2,.7,c,_+A*2.3,u+1.15,y+.02);M.rotation.z=-A*P,n.add(M)}n.add(De(9.6,.22,.75,c,_,u+.02,y+.02));let z=new Se(new Ct(.42,.42,.12,32),ce.brass());z.rotation.x=Math.PI/2,z.scale.set(1,1,.72),z.position.set(_,u+.85,y+.32),n.add(z);for(let A of[-4.6,0,4.6])n.add(Nn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],c,_+A,A?u+.2:u+2.4,y+.05,12));for(let{x:A,z:M}of e.chimneys)n.add(De(.7,1.3,.5,ce.facade("bank_t",0),A,m+.6,M)),n.add(De(.84,.12,.64,c,A,m+1.28,M))}else{let l=Ou("tile"),h=-o,d=-o,u=s+o,f=r+o,p=.22,x=Fu(n,h,d,u,f,p,.52,l);n.add(De(u-h,.14,.06,ce.darkWood(),(h+u)/2,p-.04,f)),n.add(De(u-h,.14,.06,ce.darkWood(),(h+u)/2,p-.04,d)),n.add(De(.06,.14,f-d,ce.darkWood(),u,p-.04,(d+f)/2)),n.add(De(.06,.14,f-d,ce.darkWood(),h,p-.04,(d+f)/2)),n.add(De(u-h,.03,f-d,ce.darkWood(),(h+u)/2,p-.1,(d+f)/2));for(let _ of[d,f]){let y=Vn(.06,.06,u-h,ce.iron(),(h+u)/2,p-.02,_,8);y.rotation.z=Math.PI/2,n.add(y)}let m=Math.tan(.52),g=e.run;for(let _ of e.dormers)Hu(n,_.x,_.z,p+(g-.75)*m,t[_.facing],c,l);for(let _=0;_<e.chimneys.length;_++){let{x:y,z:v}=e.chimneys[_],R=p+Math.min(Math.min(y-h,u-y),Math.min(v-d,f-v))*m,P=ce.facade("police_u",_%3);n.add(De(.6,x.height-(R-p)+1.1,.5,P,y,R+(x.height-(R-p)+1.1)/2-.2,v)),n.add(De(.72,.1,.62,ce.stone(),y,p+x.height+.95,v))}}return n}function Cl(i,e,t=2){let n=new cs(i,t),s=n.attributes.position,r=pt(e),o=[],a=r()*10;for(let c=0;c<s.count;c++){let l=Et(s.getX(c),s.getY(c),s.getZ(c)),h=1+.18*Math.sin(l.x*5+a)*Math.sin(l.y*4.3+a*.7)*Math.sin(l.z*4.7)+(r()-.5)*.12;l.multiplyScalar(h),s.setXYZ(c,l.x,l.y,l.z);let d=.75+.25*(l.y/i)+(r()-.5)*.25;o.push(d,d,d)}return n.setAttribute("color",new st(o,3)),n.computeVertexNormals(),n}function Pl(i){return Qn("leafTint"+i,()=>new Ve({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function L2(i,e,t){let n=new be,s=pt(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Gt("bark",{color:4864556,roughness:.95});n.add(Vn(.11,.17,o+.6,a,e,(o+.6)/2,t,10));for(let h=0;h<3;h++){let d=s()*Math.PI*2,u=Vn(.04,.07,1.2,a,e+Math.cos(d)*.3,o+.6,t+Math.sin(d)*.3,6);u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),n.add(u)}let c=Pl(r?6195776:4880954),l=r?7:6;for(let h=0;h<l;h++){let d=h/l*Math.PI*2+s(),u=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,p=new Se(Cl(f,i.col*101+h*17+i.row),c);p.position.set(e+Math.cos(d)*u,o+1.25+(h===0?.4:(s()-.3)*.9),t+Math.sin(d)*u),n.add(p)}return n}function N2(i,e,t){let n=new be,s=Pl(4616250);for(let r=0;r<3;r++){let o=new Se(Cl(.5,t*7+r,2),s);o.scale.set(i/2.4,.95,e/1.25),o.position.set(i*(.2+r*.3),.5,e/2),n.add(o)}return n}function xs(i,e,t,n){let s=new be;return s.add(i),i.position.set(-t,0,-n),s.rotation.y=-(e.rotation||0)*Math.PI/2,s.position.set(t,0,n),s}function Yu(i){let e=i.cols*D,t=i.rows*D,n=e/2,s=t/2,r=new be,o=c=>(r.add(c),c),a=pt(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return I2(i);case"tree":return L2(i,n,s);case"hedge":return N2(e,t,i.col+i.row*3);case"bench":{let c=new be;for(let l of[.18,D-.18])c.add(De(.05,.45,.42,ce.iron(),l,.22,.45)),c.add(De(.05,.5,.05,ce.iron(),l,.7,.26));for(let l=0;l<4;l++)c.add(De(D-.12,.035,.08,ce.lightWood(),D/2,.46,.32+l*.1));for(let l=0;l<3;l++)c.add(De(D-.12,.08,.03,ce.lightWood(),D/2,.62+l*.12,.25));return xs(c,i,n,s)}case"bin":return o(Nn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],ce.iron(),n,0,s,16)),r;case"streetLamp":return o(Nn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],ce.iron(),n,0,s,12)),o(Nn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],ce.lantern(),n,3.5,s,6)),o(Nn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],ce.iron(),n,4,s,6)),r;case"column":return o(De(.66,.16,.66,ce.stone(),n,.08,s+.05)),o(Nn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],ce.stone(),n,.16,s+.05,24)),o(Vn(.21,.24,ut-.62,ce.stone(),n,.28+(ut-.62)/2,s+.05,20)),o(Nn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],ce.stone(),n,ut-.34,s+.05,24)),o(De(.7,.18,.7,ce.stone(),n,ut-.09,s+.05)),r;case"balcony":{o(De(e,.18,1.05,ce.stone(),n,.09,1.05/2)),o(De(e+.1,.06,1.05+.06,ce.stone(),n,.2,1.05/2+.03));for(let l=.15;l<e;l+=.22)o(Nn(Tl,ce.stone(),l,.23,1.05-.1,10));for(let l=.15;l<1.05-.1;l+=.22)o(Nn(Tl,ce.stone(),.08,.23,l,10)),o(Nn(Tl,ce.stone(),e-.08,.23,l,10));return o(De(e,.08,.16,ce.stone(),n,.97,1.05-.1)),o(De(.16,.08,1.05,ce.stone(),.08,.97,1.05/2)),o(De(.16,.08,1.05,ce.stone(),e-.08,.97,1.05/2)),o(De(3.4,.36,.06,ce.darkWood(),n,-.3,.12)),o(De(3.1,.2,.02,ce.brass(),n,-.3,.155)),r}case"fountain":{o(Nn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],ce.granite(),n,0,s,72));let l=new Se(new Ii(5.3-.38,64),ce.water());l.rotation.x=-Math.PI/2,l.position.set(n,.36,s),o(l),o(new Se(new Ii(5.3-.38,64),ce.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(Nn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],ce.stone(),n,0,s,48));let h=new Se(new Ii(.9,32),ce.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let d=new Se(new Ii(1.6,32),ce.water());d.rotation.x=-Math.PI/2,d.position.set(n,1.48,s),o(d),o(new Se(new Ct(1.62,1.95,1.1,32,1,!0),ce.spray())).position.set(n,.92,s),o(new Se(new Ct(.95,1.6,.85,32,1,!0),ce.spray())).position.set(n,1.92,s),o(new Se(new aa(.12,1.1,12,1,!0),ce.spray())).position.set(n,3.9,s);for(let u=0;u<8;u++){let f=u/8*Math.PI*2,p=new Se(new Ct(.03,.05,1.6,6,1,!0),ce.spray());p.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),p.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(p)}return r}case"playhouse":{let c=ce.paint(14205066),l=ce.paint(11549226);o(De(e-.3,.1,t-.3,ce.lightWood(),n,.05,s));for(let[u,f,p,x]of[[n,.2,e-.3,.06],[.2,s,.06,t-.3],[e-.2,s,.06,t-.3]])o(De(p,1.3,x,c,u,.75,f));o(De(.8,1.3,.06,c,.55,.75,t-.2)),o(De(.7,1.3,.06,c,e-.5,.75,t-.2)),o(De(.5,.45,.07,ce.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=De(e*.62,.06,t-.1,l,e*.3,1.75,s);h.rotation.z=.6,o(h);let d=De(e*.62,.06,t-.1,l,e*.7,1.75,s);d.rotation.z=-.6,o(d);for(let u of[.2,t-.2]){let f=io(e-.3,.75,.06,c);f.position.set(n,1.4,u),o(f)}return r}case"slide":{let c=ce.paint(12730414),l=ce.paint(3828392);o(De(.9,.08,.9,ce.lightWood(),n,1.5,.55));for(let[d,u]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Vn(.04,.04,2.3,l,d,1.15,u,8));for(let d of[n-.4,n+.4])o(De(.05,.05,.9,l,d,2.25,.55));for(let d=0;d<5;d++)o(De(.6,.04,.12,ce.lightWood(),n,.3+d*.27,.05-d*0)).position.z=.08;let h=De(.62,.05,2.4,c,n,.82,2.05);h.rotation.x=.62,o(h);for(let d of[-1,1]){let u=De(.05,.16,2.4,c,n+d*.32,.9,2.05);u.rotation.x=.62,o(u)}return r}case"swing":{let c=ce.paint(3828392);for(let h of[.15,e-.15])for(let d of[-1,1]){let u=Vn(.045,.045,2.5,c,h,1.18,s+d*.45,8);u.rotation.x=d*.38,o(u)}let l=Vn(.05,.05,e-.2,c,n,2.35,s,8);l.rotation.z=Math.PI/2,o(l);for(let h of[e*.3,e*.7]){for(let d of[-.22,.22])o(Vn(.01,.01,1.75,ce.steel(),h+d,1.45,s,4));o(De(.5,.05,.22,ce.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[c,l,h,d]of[[n,.1,e-.2,.18],[n,t-.1,e-.2,.18],[.1,s,.18,t],[e-.1,s,.18,t]])o(De(h,.3,d,ce.lightWood(),c,.15,l));return o(De(e-.3,.12,t-.3,ce.sand(),n,.06,s)),o(De(.2,.18,.2,ce.paint(12730414),n-.6,.2,s+.3)),o(Vn(.12,.08,.16,ce.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Vn(1.1,1.1,.1,ce.paint(12730414),n,.25,s,32)),o(Vn(.08,.1,.9,ce.steel(),n,.7,s,10));for(let c=0;c<4;c++){let l=c*Math.PI/2,h=De(1.9,.04,.04,ce.paint(14196768),n,.95,s);h.rotation.y=l,o(h),o(Vn(.03,.03,.7,ce.paint(14196768),n+Math.cos(l)*.95,.6,s+Math.sin(l)*.95,6))}return r}case"busStop":{for(let c of[.15,e-.15])o(De(.08,2.4,.08,ce.iron(),c,1.2,.2));return o(De(e,.08,1.2,ce.iron(),n,2.42,.6)),o(De(e-.3,1.9,.03,ce.glass(),n,1.2,.18)),o(De(e-.6,.06,.4,ce.lightWood(),n,.48,.42)),o(De(.9,.6,.06,ce.paint(2775706),e-.6,2,.2)),r}case"counter":{let c=new be;return c.add(De(D,1.05,.6,ce.darkWood(),D/2,.52,.55)),c.add(De(D+.02,.05,.7,ce.stone(),D/2,1.07,.55)),c.add(De(D,.55,.02,ce.glass(),D/2,1.4,.4)),c.add(De(.04,.6,.04,ce.brass(),.04,1.4,.4)),xs(c,i,n,s)}case"deposits":{let c=new be;c.add(De(D-.02,2.1,.45,ce.steel(),D/2,1.05,.24));for(let l=0;l<9;l++)for(let h=0;h<4;h++){let d=.12+h*.3,u=.15+l*.22;c.add(De(.27,.19,.02,ce.paint(9081496),d+.14,u+.1,.475)),c.add(De(.03,.03,.02,ce.brass(),d+.14,u+.1,.49))}return xs(c,i,n,s)}case"plant":o(Nn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],ce.paint(10115642),n,0,s,16));for(let c=0;c<4;c++){let l=new Se(Cl(.32,i.col*3+c),Pl(4090416));l.position.set(n+(a()-.5)*.3,.9+c*.22,s+(a()-.5)*.3),o(l)}return r;case"bed":{let c=new be;return c.add(De(e-.2,.35,t-.25,ce.wood(),n,.18,s+.05)),c.add(De(e-.3,.18,t-.35,ce.fabric(15262420),n,.44,s+.05)),c.add(De(e*.6,.06,t-.3,ce.fabric(6961738),n+e*.17,.55,s+.05)),c.add(De(.45,.14,t-.5,ce.fabric(16052456),.45,.6,s+.05)),c.add(De(.08,1,t-.25,ce.darkWood(),.12,.5,s+.05)),xs(c,i,n,s)}case"wardrobe":{let c=new be;c.add(De(D-.15,2,.6,ce.wood(),D/2,1,.36)),c.add(De(D-.05,.1,.68,ce.darkWood(),D/2,2.05,.36)),c.add(De(.02,1.8,.02,ce.darkWood(),D/2,1,.67));for(let l of[-1,1])c.add(De(.03,.12,.03,ce.brass(),D/2+l*.06,1.05,.68));return xs(c,i,n,s)}case"bookcase":{let c=new be;c.add(De(D-.15,2,.4,ce.darkWood(),D/2,1,.26));let l=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let d=.14;for(;d<D-.2;){let u=.04+a()*.05,f=.22+a()*.1;c.add(De(u-.005,f,.25,ce.fabric(l[Math.floor(a()*l.length)]),d+u/2,.12+h*.38+f/2,.36)),d+=u}}return xs(c,i,n,s)}case"table":{o(De(e-.3,.05,t-.3,ce.wood(),n,.76,s));for(let[c,l]of[[.25,.25],[e-.25,.25],[.25,t-.25],[e-.25,t-.25]])o(De(.06,.74,.06,ce.darkWood(),c,.37,l));for(let c=0;c<Math.max(2,i.cols);c++){let l=(c+.5)*e/Math.max(2,i.cols);for(let h of[.05,t-.05])o(De(.4,.05,.4,ce.darkWood(),l,.45,h)),o(De(.4,.5,.04,ce.darkWood(),l,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let c=new be,l=ce.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);c.add(De(e-.2,.42,.8,l,n,.21,.6)),c.add(De(e-.2,.5,.2,l,n,.65,.3));for(let h of[.15,e-.15])c.add(De(.18,.6,.8,l,h,.3,.6));return xs(c,i,n,s)}default:return null}}var wa=Yt==="city",Un=cu(ou(),au),o_=1280/18.5;var xi=D*Pt,Ll=new L(xi/2,0,xi/2),Nl=.22,nn=.18,Ea=ut-Nl,sn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Tn=(i,e,t)=>new L(i,e,t),rn=new Ur({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});rn.setPixelRatio(1);rn.shadowMap.enabled=!0;rn.shadowMap.type=il;rn.toneMapping=sl;rn.outputColorSpace=Mn;document.body.appendChild(rn.domElement);var zi=new Ks,fr=Yt==="base";zi.background=new je(fr?789258:1709584);zi.environment=new Js(rn).fromScene(new ga,.04).texture;zi.add(fr?new Wr(15002868,4999234,1.25):new Wr(13163775,5917236,.75));var _n=new la(fr?16774890:16774368,fr?2.6:4.2);{let i=fu(-11,7.5),e=fr?.45:1.6;_n.position.set(Ll.x+i.x*e,fr?24:17.6,Ll.z+i.y*e)}_n.target.position.copy(Ll);_n.castShadow=!0;_n.shadow.mapSize.set(4096,4096);Object.assign(_n.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});_n.shadow.camera.updateProjectionMatrix();_n.shadow.bias=-3e-4;_n.shadow.normalBias=.025;_n.shadow.radius=2;zi.add(_n,_n.target);var Il=new Map,Dn=(i,e)=>(Il.has(i)||Il.set(i,e()),Il.get(i)),qt=(i,e)=>Dn(i,()=>new Ve(e)),ue={trim:()=>qt("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>qt("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>qt("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>qt("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>qt("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>qt("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>qt("rubber",{color:1842204,roughness:.9}),paint:()=>qt("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>Dn("glass",()=>new Hn({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>qt("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>qt("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>qt("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>Dn("screen"+i,()=>new Ve({map:ar(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:ar(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,e)=>Dn(`wall_${i}_${e}`,()=>{let t=vu(i,e);return new Ve({map:t.map,normalMap:t.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>Dn("interiorFloor",()=>{let i=Mu();return new Ve({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>Dn("roof",()=>{let i=bu();return new Ve({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>Dn("grating",()=>{let i=Eu();return new Ve({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>Dn("concrete",()=>{let i=Su();return new Ve({map:i.map,roughness:.95})}),container:i=>Dn("container_"+i,()=>{let e=wu(i==="orange"?3:9);return new Ve({map:e.map,normalMap:e.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>Dn("rock",()=>{let i=$r(5,[150,116,88]);return new Ve({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>Dn("baseRock"+i,()=>{let e=$r(11+i*7,[120,112,102]);return new Ve({normalMap:e.normalMap,color:6182736,roughness:.95})}),rockCut:i=>Dn("rockCut"+i,()=>{let e=$r(31+i*5,[92,86,80]);return new Ve({normalMap:e.normalMap,color:5722700,roughness:.98})})};function Xn(i,e,t,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:e,level:t,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function Ue(i,e,t,n,s,r,o){let a=new Se(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Sn(i,e,t,n,s,r,o,a=16){let c=new Se(new Ct(i,e,t,a),n);return c.position.set(s,r,o),c}function D2(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new gt(t,s.length(),t),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}function dr(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Ct(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}var $u=(i,e,t)=>(i*73856093^e*19349663^t*83492791)>>>0,Dl=(i,e,t)=>e>=0&&t>=0&&e<Pt&&t<Pt&&Un.indoor[i][t][e]===1;function ot(i,e,t,n,s,r,o,a,c,l=nn){let h=r-s,d=a-o,u=n*ut,f=i==="W"?new gt(l,d,h):new gt(h,d,l),p=i==="W"?e*D:e*D+(s+r)/2,x=i==="W"?t*D+(s+r)/2:t*D;f.translate(p,u+(o+a)/2,x);let m=f.attributes.position,g=f.attributes.uv;for(let _=0;_<m.count;_++){let y=i==="W"?m.getZ(_)-t*D:m.getX(_)-e*D;g.setXY(_,y/D,(m.getY(_)-u)/Ea)}return new Se(f,c)}function qu(i,e,t,n,s){let r=$u(e,t,n)%3,o=(h,d)=>s==="inner"||Dl(n,h,d)?ue.wall("inner",r%2):ue.wall(s,r),a=o(e,t),c=i==="W"?o(e-1,t):o(e,t-1),l=ue.trim();return i==="W"?[a,c,l,l,l,l]:[l,l,l,l,a,c]}var U2=i=>wa?i.style==="vault"?"vault":Rl(i.style)?"outer":"inner":"base";function Ju(i,e,t,n,s,r){if(wa&&s.type!=="barrier"){let d=Vu(i,e,t,n,s,r,{wallBox:ot,isIndoor:Dl,THICK:nn,PANEL_H:Ea});if(s.type==="door"){let f=Math.min(2.1,r?.8:Ea);ur.add(Zu(i,e,t,n,(D-.92)/2,(D+.92)/2,f,U2(s)))}return Xn(d,i==="W"?sn.wallW:sn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new be,a=s.type,c=s.style,l=r?.8:Ea,h=nn/2;if(a==="wall"||a==="door"||a==="window"){let d=qu(i,e,t,n,c==="concrete"?"hab":c);if(a==="wall"||a==="window"&&r)o.add(ot(i,e,t,n,-h,D+h,0,l,d));else if(a==="door"&&s.gate){let{startOpen:u,endOpen:f,heavy:p,left:x,right:m,post:g}=k2(i,e,t,n,s),_=Math.min(p?2.35:2.1,l);u||o.add(ot(i,e,t,n,-h,0,0,l,d)),f||o.add(ot(i,e,t,n,D,D+h,0,l,d)),l>_+.01&&o.add(ot(i,e,t,n,u?0:-.001,f?D:D+.001,_,l,d));let y=p?ue.yellow():ue.orange(),v=Array(6).fill(y);u||o.add(ot(i,e,t,n,0,g,0,_,v,nn+.08)),f||o.add(ot(i,e,t,n,D-g,D,0,_,v,nn+.08)),l>_+.01&&o.add(ot(i,e,t,n,x-.001,m+.001,_,_+.12,v,nn+.08)),o.add(ot(i,e,t,n,x,m,0,.03,Array(6).fill(ue.darkSteel()),nn+.14)),ur.add(z2(i,e,t,n,x,m,_,p))}else if(a==="door"){let f=Math.min(2.1,l),p=(D-.92)/2,x=(D+.92)/2;o.add(ot(i,e,t,n,-h,p,0,l,d)),o.add(ot(i,e,t,n,x,D+h,0,l,d)),l>f+.01&&o.add(ot(i,e,t,n,p,x,f,l,d));let m=[ue.orange(),ue.orange(),ue.orange(),ue.orange(),ue.orange(),ue.orange()];if(o.add(ot(i,e,t,n,p-.06,p,0,f,m,nn+.05)),o.add(ot(i,e,t,n,x,x+.06,0,f,m,nn+.05)),l>f+.01&&o.add(ot(i,e,t,n,p-.06,x+.06,f,f+.07,m,nn+.05)),o.add(ot(i,e,t,n,p,x,0,.03,[ue.darkSteel(),ue.darkSteel(),ue.darkSteel(),ue.darkSteel(),ue.darkSteel(),ue.darkSteel()],nn+.1)),ur.add(Zu(i,e,t,n,p,x,f)),c!=="inner"&&!r){let _=(Dl(n,e,t)?-1:1)*(nn/2+.06),y=D/2,v=i==="W"?Ue(.12,.07,.3,ue.lightOn(),e*D+_,n*ut+2.3,t*D+y):Ue(.3,.07,.12,ue.lightOn(),e*D+y,n*ut+2.3,t*D+_);o.add(v)}}else{let x=(D-.82)/2,m=(D+.82)/2;o.add(ot(i,e,t,n,-h,x,0,l,d)),o.add(ot(i,e,t,n,m,D+h,0,l,d)),o.add(ot(i,e,t,n,x,m,0,.95,d)),o.add(ot(i,e,t,n,x,m,1.9,l,d));let g=Array(6).fill(ue.trim());o.add(ot(i,e,t,n,x,m,.95-.05,.95,g,nn+.06)),o.add(ot(i,e,t,n,x,m,1.9,1.9+.05,g,nn+.04)),o.add(ot(i,e,t,n,x,x+.04,.95,1.9,g,nn+.03)),o.add(ot(i,e,t,n,m-.04,m,.95,1.9,g,nn+.03)),o.add(ot(i,e,t,n,x+.04,m-.04,.95,1.9,Array(6).fill(ue.glass()),.03))}}else if(a==="rail"){let d=Array(6).fill(ue.yellow());for(let u of[0,D])o.add(ot(i,e,t,n,u-.03,u+.03,0,1.05,d,.06));o.add(ot(i,e,t,n,0,D,1,1.06,d,.05)),o.add(ot(i,e,t,n,0,D,.52,.56,d,.04)),o.add(ot(i,e,t,n,0,D,0,.1,Array(6).fill(ue.darkSteel()),.02))}else if(a==="parapet"){let d=qu(i,e,t,n,c);o.add(ot(i,e,t,n,-h-.02,D+h+.02,-.02,.5,d,.22)),o.add(ot(i,e,t,n,-h-.04,D+h+.04,.5,.56,Array(6).fill(ue.steel()),.28))}else if(a==="barrier"){let d=new en;d.moveTo(-.3,0),d.lineTo(.3,0),d.lineTo(.3,.08),d.lineTo(.1,.3),d.lineTo(.08,.82),d.lineTo(-.08,.82),d.lineTo(-.1,.3),d.lineTo(-.3,.08);let u=new xn(d,{depth:D-.05,bevelEnabled:!1});i==="W"?u.translate(0,0,.025):(u.rotateY(Math.PI/2),u.translate(.025,0,0));let f=new Se(u,ue.concrete());f.position.set(e*D,n*ut,t*D),i==="N"&&f.position.set(e*D,n*ut,t*D),o.add(f);let p=i==="W"?Ue(.17,.06,D-.1,ue.orange(),e*D,n*ut+.62,t*D+D/2):Ue(D-.1,.06,.17,ue.orange(),e*D+D/2,n*ut+.62,t*D);o.add(p)}return Xn(o,i==="W"?sn.wallW:sn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var ur=new be;function Zu(i,e,t,n,s,r,o,a="base"){if(a!=="base"){let p=Wu(i,e,t,n,s,r,o,a,{wallBox:ot});return p.userData.door={orient:i,col:e,row:t,level:n},Xn(p,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let c=new be,l=Array(6).fill(ue.wall("cabin",0)),h=o-.01;c.add(ot(i,e,t,n,s-.02,r+.02,.01,h,l,.06));let d=Array(6).fill(ue.orange()),u=Array(6).fill(ue.darkSteel()),f=Array(6).fill(ue.glass());return h>1.1&&c.add(ot(i,e,t,n,s,r,.98,1.06,d,.075)),h>1.9&&(c.add(ot(i,e,t,n,s+.36,s+.56,1.3,1.85,u,.075)),c.add(ot(i,e,t,n,s+.38,s+.54,1.32,1.83,f,.08))),c.add(ot(i,e,t,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),u,.085)),c.userData.door={orient:i,col:e,row:t,level:n},Xn(c,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function k2(i,e,t,n,s){let r=d=>!!(d&&d.gate&&d.gate.group===s.gate.group),o=i==="W"?Un.wallW[n]:Un.wallN[n],a=r(i==="W"?(o[t-1]||[])[e]:o[t][e-1]),c=r(i==="W"?(o[t+1]||[])[e]:o[t][e+1]),l=.1,h=s.gate.kind==="gate";return{startOpen:a,endOpen:c,heavy:h,post:l,left:a?0:l,right:c?D:D-l,signature:`gate:${s.gate.kind}:${a}:${c}`}}function z2(i,e,t,n,s,r,o,a){let c=new be,l=new be,h=n*ut+o;l.position.y=h,l.userData.rollUp=!0;let d=new be;d.position.y=-h,l.add(d),c.add(l);let u=o-.01,f=Array(6).fill(a?ue.wall("hab",1):ue.wall("cabin",0)),p=Array(6).fill(ue.darkSteel());d.add(ot(i,e,t,n,s-.005,r+.005,.01,u,f,.07));let x=Math.max(3,Math.round(u/.5));for(let m=1;m<x;m++){let g=.01+(u-.01)*m/x;d.add(ot(i,e,t,n,s,r,g-.015,g+.015,p,.085))}if(a&&u>.6){let g=Array(6).fill(ue.yellow()),_=Array(6).fill(ue.darkSteel());for(let y=0;y<4;y++){let v=s+(r-s)*y/4,R=s+(r-s)*(y+1)/4;d.add(ot(i,e,t,n,v,R,.04,.3,(y+e+t)%2?g:_,.08))}}return c.userData.door={orient:i,col:e,row:t,level:n,rollUp:!0},Xn(c,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function Ku(i,e,t,n){let s=new be,r=i*D+D/2,o=e*D+D/2,a=t*ut;if(n===kt.deck)s.add(Ue(D,.06,D,ue.grating(),r,a-.03,o)),s.add(Ue(.12,.22,D,ue.orange(),i*D+.06,a-.17,o)),s.add(Ue(D,.18,.1,ue.orange(),r,a-.15,e*D+.05));else{let c=wa&&Un.floorStyle?Un.floorStyle[t][e][i]:null,l=c?Gu(c):n===kt.roof?ue.roof():ue.interiorFloor(),h=c?ce.slabEdge():ue.slabEdge(),d=c?ce.ceiling():ue.ceiling(),u=Ue(D,Nl,D,[h,h,l,d,h,h],r,a-Nl/2,o);s.add(u)}return Xn(s,sn.floor,t,{biasCol:-1e-4,biasRow:-1e-4})}function ju(i){let e=new be,t=12,n=i.count*D,s=ut,r=i.level*ut,o=i.col*D+(i.dirCol<0?D:0),a=i.row*D+(i.dirRow<0?D:0),c=Tn(i.dirCol,0,i.dirRow),l=Tn(-i.dirRow,0,i.dirCol),h=i.dirCol!==0?Tn(0,0,i.row*D+D/2):Tn(i.col*D+D/2,0,0),d=D*.86,u=(x,m,g)=>{let _=Tn(o,r+m,a).addScaledVector(c,x).addScaledVector(l,g);return i.dirCol!==0?_.z=h.z+g:_.x=h.x+g,_},f=i.style==="classic",p=f?Xu():null;for(let x=0;x<t;x++){let m=x/t*n,g=(x+1)/t*n,_=(x+1)/t*s,y=u((m+g)/2,0,0),v=g-m;if(f){let R=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Ue(...R,p.body,y.x,r+_/2,y.z));let P=i.dirCol!==0?[v+.02,.035,d]:[d,.035,v+.02];e.add(Ue(...P,p.tread,y.x,r+_+.017,y.z))}else if(i.style==="hab"){let R=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Ue(...R,ue.slabEdge(),y.x,r+_/2,y.z));let P=i.dirCol!==0?[v,.03,d]:[d,.03,v];e.add(Ue(...P,ue.darkSteel(),y.x,r+_+.015,y.z));let I=i.dirCol!==0?[.04,.035,d]:[d,.035,.04],z=u(m+.02,0,0);e.add(Ue(...I,ue.yellow(),z.x,r+_+.017,z.z))}else{let R=i.dirCol!==0?[v*.9,.04,d]:[d,.04,v*.9];e.add(Ue(...R,ue.grating(),y.x,r+_-.02,y.z))}}for(let x of[-d/2-.04,d/2+.04]){i.style!=="hab"&&e.add(D2(u(0,0,x),u(n,s,x),.09,ue.orange()));let m=u(.05,.95,x),g=u(n,s+.95,x);if(!((i.style==="hab"||f)&&x<0)){if(e.add(dr(m,g,f?.03:.025,f?p.handrail:ue.yellow())),f){for(let _=.1;_<n;_+=.2)e.add(dr(u(_,_/n*s,x),u(_,_/n*s+.93,x),.009,p.rail));continue}for(let _=0;_<=i.count;_++){let y=Math.min(n-.05,Math.max(.05,_*D));e.add(dr(u(y,y/n*s,x),u(y,y/n*s+.95,x),.022,ue.yellow()))}}}return Xn(e,sn.floor,i.level)}function O2(i,e){let t=new be,n=i.level*ut,s=Math.min(n+i.height,e);if(s<=n+.05)return t;let r=nn/2+.1,o=a=>i.side==="W"?[Tn(i.col*D+r,n,i.row*D+D/2+a),Tn(i.col*D+r,s,i.row*D+D/2+a)]:[Tn(i.col*D+D/2+a,n,i.row*D+r),Tn(i.col*D+D/2+a,s,i.row*D+r)];for(let a of[-.22,.22]){let[c,l]=o(a);t.add(dr(c,l,.025,ue.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[c]=o(-.22),[l]=o(.22);c.y=l.y=a,t.add(dr(c,l,.016,ue.steel()))}return Xn(t,sn.floor,i.level,{auto:!0})}function F2(i){return Tn(i.col*D,i.level*ut,i.row*D)}var H2=new ft().makeTranslation(D*Pt,0,0).multiply(new ft().makeRotationY(-Math.PI/2));function Ul(i,e){if(i.source){let h=Ul({...i.source,layer:i.layer},e);if(!h)return h;let d=new be;d.matrixAutoUpdate=!1;for(let u=0;u<i.turns;u++)d.matrix.premultiply(H2);return d.add(h),d.updateMatrixWorld(!0),d}let t=new be,n=F2(i),s=i.cols*D,r=i.rows*D,o=s/2,a=r/2,c=pt($u(i.col,i.row,i.level)%1e5+7),l=h=>(t.add(h),h);if(wa){let h=Yu(i);if(h)return t.add(h),t.position.copy(n),Xn(t,sn.object,i.level)}if(Pu.has(i.kind))return t.add(Iu(i)),t.position.copy(n),Xn(t,sn.object,i.level);if(Uu.has(i.kind))return t.add(ku(i)),t.position.copy(n),Xn(t,sn.object,i.level);switch(i.kind){case"console":{l(Ue(1,.75,.6,ue.trim(),o,.375,a-.15));let h=l(Ue(1,.05,.5,ue.screen(Math.floor(c()*3)),o,.85,a-.05));h.rotation.x=-.6,l(Ue(1,.5,.08,ue.darkSteel(),o,1.1,a-.42));break}case"locker":l(Ue(.9,1.9,.5,ue.wall("cabin",0),o,.95,a-.3)),l(Ue(.02,1.7,.02,ue.darkSteel(),o,.95,a-.04));break;case"cabinet":l(Ue(.9,1.2,.6,ue.trim(),o,.6,a)),l(Ue(.7,.08,.02,ue.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])l(Ue(s-.2,.08,r-.3,ue.trim(),o,h,a)),l(Ue(s-.3,.12,r-.4,qt("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,d]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])l(Ue(.05,1.6,.05,ue.steel(),h,.8,d));break;case"labTable":l(Ue(s-.2,.06,r-.3,ue.white(),o,.9,a));for(let h of[.2,s-.2])l(Ue(.06,.9,r-.4,ue.trim(),h,.45,a));l(Ue(.5,.35,.4,ue.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)l(Sn(.03,.03,.22,qt("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":l(Ue(s-.3,.05,.7,ue.white(),o,.75,a-.1)),l(Ue(s-.4,.7,.05,ue.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])l(Ue(.55,.35,.04,ue.screen(Math.floor(c()*3)+1),h,1.05,a-.3)),l(Ue(.06,.2,.06,ue.darkSteel(),h,.85,a-.3));break;case"rack":l(Ue(.7,2,.9,ue.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)l(Ue(.02,.02,.02,qt("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+c()*.6));break;case"crate":{let h=1+(c()<.45?1:0),d=c()<.5?ue.wall("cabin",2):qt("crateGrey",{color:10132630,roughness:.55,metalness:.2}),u=0;for(let f=0;f<h;f++){let p=f?.65:.95,x=f?.5:.75,m=(c()-.5)*.4,g=new be;g.add(Ue(p,x,p*.8,d,0,x/2,0));for(let _ of[-1,1])g.add(Ue(p+.02,.08,.06,ue.orange(),0,x*.5,_*p*.3));g.add(Ue(p+.02,.04,p*.82,ue.trim(),0,x-.02,0)),g.position.set(o+(c()-.5)*.1,u,a+(c()-.5)*.1),g.rotation.y=m,l(g),u+=x}break}case"barrels":for(let h=0;h<3;h++){let d=[3104394,9058844,5923400][h];l(Sn(.29,.29,.9,qt("barrel"+h,{color:d,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":l(Ue(s-.2,.9,r-.25,ue.white(),o,.45,a));for(let h=0;h<i.cols;h++)l(Sn(.38,.38,.05,ue.darkSteel(),.62+h*D,.92,a,20)).scale.set(1,1,1);break;case"antenna":l(Ue(.5,.15,.5,ue.trim(),o,.07,a)),l(Sn(.05,.07,3.6,ue.steel(),o,1.8,a));for(let h of[2.2,3])l(Ue(.9,.04,.04,ue.steel(),o,h,a));l(Ue(.06,.06,.06,qt("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let d=l(Ue(s-.3,.05,r/2-.15,qt("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));d.rotation.x=-.45,l(Ue(.06,.6,.06,ue.steel(),o,.3,h*r/2+r/4))}break}case"dish":l(Sn(.08,.12,.8,ue.steel(),o,.4,a));{let h=l(new Se(new Ln(.6,20,10,0,Math.PI*2,0,.9),ue.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=Dn("dishMat",()=>new Ve({color:14211798,roughness:.4,side:dn}))}break;case"pylon":{let h=ut-.24;l(Ue(.32,h,.32,ue.orange(),o,h/2,a)),l(Ue(.6,.06,.6,ue.darkSteel(),o,.03,a)),l(Ue(.5,.12,.5,ue.orange(),o,h-.06,a));break}case"searchlight":l(Ue(.5,.3,.5,ue.trim(),o,.15,a)),l(Ue(.12,.5,.12,ue.darkSteel(),o,.55,a));{let h=l(Sn(.24,.3,.45,ue.darkSteel(),o,.95,a));h.rotation.x=1.1;let d=l(Sn(.22,.22,.03,ue.lightOn(),o,1.02,a+.2));d.rotation.x=1.1}break;case"container":{let h=ue.container(i.color),d=l(Ue(s-.15,2.5,r-.15,[h,h,ue.container(i.color),ue.trim(),h,h],o,1.25,a));for(let u of[.12,s-.12])for(let f of[.12,r-.12])for(let p of[.1,2.4])l(Ue(.18,.2,.18,ue.darkSteel(),u,p,f));for(let u of[o-.35,o+.35])l(Ue(.04,2.3,.04,ue.steel(),u,1.25,r-.06));break}case"truck":{let h=xu();h.position.set(o,0,(r-gu.length)/2),l(h);break}case"rover":{let h=ue.white();l(Ue(s-.4,.6,r-.3,h,o,.95,a)),l(Ue(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),l(Ue(s-.6,.5,.05,ue.glass(),o,1.7,a+r/2-.33));for(let d of[-1,1])l(Ue(.05,.4,1,ue.glass(),o+d*(s/2-.24),1.7,a+r/2-1));l(Ue(s-.4,.06,r-.3,ue.orange(),o,1.27,a)),l(Ue(s-.6,.12,1.6,ue.trim(),o,1.31,a-.6));for(let d of[-1,1])for(let u of[.55,r/2,r-.55]){let f=l(Sn(.42,.42,.34,ue.rubber(),o+d*(s/2-.2),.42,u,18));f.rotation.z=Math.PI/2;let p=l(Sn(.18,.18,.36,ue.steel(),o+d*(s/2-.2),.42,u,10));p.rotation.z=Math.PI/2}l(Sn(.02,.02,1.2,ue.steel(),o-.6,2.4,a+r/2-1.3)),l(Ue(.25,.12,.08,ue.lightOn(),o-.6,1,r-.12)),l(Ue(.25,.12,.08,ue.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let u of[.6,r-.6])l(Ue(s-.5,.6,.25,ue.darkSteel(),o,.3,u));let h=l(Sn(1,1,r-.3,ue.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let d=l(Sn(1.02,1.02,.25,ue.orange(),o,1.3,a,28));d.rotation.x=Math.PI/2;for(let u of[.15,r-.15]){let f=l(new Se(new Ln(1,24,12),ue.white()));f.position.set(o,1.3,u),f.scale.set(1,1,.25)}l(dr(Tn(o+.6,.3,r-.4),Tn(o+.6,2.2,r-.4),.06,ue.steel()));break}case"generator":l(Ue(s-.3,1.4,r-.4,qt("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)l(Ue(s-.6,.04,.02,ue.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])l(Sn(.08,.08,.9,ue.darkSteel(),h,1.8,a-.3));l(Ue(s-.2,.08,r-.3,ue.yellow(),o,1.42,a));break;case"lamp":l(Ue(.4,.15,.4,ue.concrete(),o,.07,a)),l(Sn(.06,.08,4.2,ue.darkSteel(),o,2.1,a)),l(Ue(.7,.08,.1,ue.darkSteel(),o+.3,4.15,a)),l(Ue(.36,.1,.24,ue.trim(),o+.6,4.1,a)),l(Ue(.3,.02,.2,ue.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*D*.55,d=gl(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),u=l(new Se(d,ue.rock()));u.position.set(o,h*.18,a),u.rotation.y=c()*6;break}case"tiltrotor":{let h=yu();i.layer&&[...h.children].forEach(d=>{d.name!==i.layer&&h.remove(d)}),h.rotation.y=-Math.PI/2,h.position.set(8*D-.006,0,2*D+.006),l(h);break}case"car":{let h=va[i.type]||va.suv,d=new be,u=_u({type:i.type,color:i.color});u.position.z=-h.length/2,d.add(u),d.position.set(o,0,a),i.cols>i.rows?d.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(d.rotation.y=Math.PI),l(d);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,d=i.bottom||0,u=i.variant||0,f=i.concrete?ue.concrete():ue.baseRock(u),p=i.concrete?ue.concrete():ue.rockCut(u),x=l(Ue(D+.014,h-d,D+.014,[f,f,p,f,f,f],o-.01,(h+d)/2,a-.01));x.userData.noShadowReceive=!0;let m=x.geometry.attributes.position,g=x.geometry.attributes.uv,_=x.geometry.attributes.normal;for(let y=0;y<m.count;y++){let v=i.col*D+o+m.getX(y),R=(h+d)/2+m.getY(y),P=i.row*D+a+m.getZ(y);Math.abs(_.getY(y))>.5?g.setXY(y,v/8,P/8):Math.abs(_.getX(y))>.5?g.setXY(y,P/8,R/8):g.setXY(y,v/8,R/8)}break}case"liftPlatform":{l(Ue(s-.04,.03,r-.04,ue.darkSteel(),o,.06,a));for(let u=2.5;u<s-.1;u+=2.5)l(Ue(.03,.035,r-.3,ue.rubber(),u,.062,a));for(let u=2.5;u<r-.1;u+=2.5)l(Ue(s-.3,.035,.03,ue.rubber(),o,.062,u));let h=.5,d=.22;for(let u=0;u<s-1e-6;u+=h){let f=Math.round(u/h)%2?ue.rubber():ue.yellow(),p=Math.min(h,s-u);l(Ue(p,.04,d,f,u+p/2,.065,d/2+.03)),l(Ue(p,.04,d,f,u+p/2,.065,r-d/2-.03))}for(let u=d+.03;u<r-d-.03-1e-6;u+=h){let f=Math.round(u/h)%2?ue.yellow():ue.rubber(),p=Math.min(h,r-d-.03-u);l(Ue(d,.04,p,f,d/2+.03,.065,u+p/2)),l(Ue(d,.04,p,f,s-d/2-.03,.065,u+p/2))}break}case"paint":l(Ue(.1,.012,r-.12,ue.paint(),.06,.006,a));break;case"ladder":return O2(i,(e+1)*ut+.95);case"towerLeg":return null;default:l(Ue(s*.8,.8,r*.8,ue.trim(),o,.4,a))}return t.position.copy(n),Xn(t,sn.object,i.level)}var a_=xi+4,c_=Un.concrete,l_={tracks:[[[5.5*D,15.5*D],[7*D,13*D],[8.5*D,12.2*D],[12*D,12.4*D],[16*D,13.2*D],[21*D,12.5*D],[24*D,12*D]],[[9*D,16.5*D],[9.5*D,20*D],[10*D,24*D]]],lines:[{from:[1.6*D,11.2*D],to:[12.3*D,11.2*D]},{from:[12.3*D,1.6*D],to:[12.3*D,11.2*D]},{from:[14.5*D,3.3*D],to:[14.5*D,12.5*D]},{from:[14.5*D,12.5*D],to:[20.5*D,12.5*D]}],hazards:[[5.6*D,10.15*D,7.4*D,10.45*D],[11.15*D,5.6*D,11.45*D,7.4*D],[16.6*D,12.05*D,18.4*D,12.35*D]],pads:[[4.6*D,19*D,3.2*D]],stains:[[8.5*D,14*D,1.4],[13.5*D,2.5*D,1],[17*D,7*D,1.2],[4*D,18*D,.8],[21.5*D,7.8*D,.9]]};function Qu(){return ur}function ef(){return ur=new be,ur}var B2={1:"#d8a420",2:"#7fb2d8",3:"#9fd27f",4:"#e0705a",5:"#5fd0ff",6:"#ffb347",7:"#c49be8",8:"#b8b8b8",0:"#808080"};rn.domElement.style.display="block";rn.domElement.style.outline="none";rn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));rn.shadowMap.autoUpdate=!1;rn.setSize(window.innerWidth,window.innerHeight);var Sa=xi/2+2;Object.assign(_n.shadow.camera,{left:-Sa,right:Sa,top:Sa,bottom:-Sa,near:1,far:140});_n.shadow.camera.updateProjectionMatrix();_n.shadow.mapSize.set(4096,4096);var G2=ir.grid[0],V2=ir.grid[1],W2=new L((qr+G2/2)*D,0,(Zr+V2/2)*D),Oi=new hn(40,window.innerWidth/window.innerHeight,.3,400),Vt=new ma(Oi,rn.domElement);Vt.enableDamping=!0;Vt.dampingFactor=.12;Vt.screenSpacePanning=!1;Vt.minDistance=4;Vt.maxDistance=140;Vt.maxPolarAngle=Di.degToRad(86);Vt.keyPanSpeed=14;Vt.listenToKeyEvents(window);function mr(i,e,t){let n=Di.degToRad(i),s=Di.degToRad(e);Vt.target.copy(W2).add(new L(0,1.5,0)),Oi.position.set(Vt.target.x+Math.cos(s)*Math.sin(n)*t,Vt.target.y+Math.sin(s)*t,Vt.target.z+Math.cos(s)*Math.cos(n)*t),Vt.update()}window.base3dLook=(i,e,t,n,s)=>{let r=Di.degToRad(t),o=Di.degToRad(n);Vt.target.set((qr+i)*D,.9,(Zr+e)*D),Oi.position.set(Vt.target.x+Math.cos(o)*Math.sin(r)*s,Vt.target.y+Math.sin(o)*s,Vt.target.z+Math.cos(o)*Math.cos(r)*s),Vt.update(),Hi()};var Fl=()=>mr(45,40,78);function X2(i,e){let t=new be;ef();let n=new Se(new Pi(xi+40,xi+40),new Ve({color:2367774,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(xi/2,-.03,xi/2),n.receiveShadow=!0,t.add(n);let s=[];for(let a=0;a<Pt;a++)for(let c=0;c<Pt;c++)Un.floor[0][a][c]===kt.interior&&s.push([c,a]);let r=new js(new gt(D+.004,.04,D+.004),ue.interiorFloor(),s.length),o=new ft;s.forEach(([a,c],l)=>r.setMatrixAt(l,o.makeTranslation((a+.5)*D,.025,(c+.5)*D))),r.receiveShadow=!0,t.add(r);for(let a=0;a<=i;a++){let c=e&&a===i;for(let l=0;l<=Pt;l++)for(let h=0;h<=Pt;h++){for(let d of["W","N"]){let u=(d==="W"?Un.wallW:Un.wallN)[a][l][h];if(!u||!u.type||u.type==="hull")continue;let f=u.type==="wall"||u.type==="door"||u.type==="window";t.add(Ju(d,h,l,a,u,f&&c))}if(a>0&&l<Pt&&h<Pt){let d=Un.floor[a][l][h];(d===kt.interior||d===kt.roof||d===kt.deck)&&t.add(Ku(h,l,a,d))}}}for(let a of Un.stairs)a.level<=i&&t.add(ju(a));for(let a of Un.objects){if(a.level>i)continue;let c=Ul(a,i);c&&t.add(c)}return t.add(Qu()),xl(t,.28),t}var _s=null,vs=ps-1,tf=!1;function Hl(){_s&&(zi.remove(_s),fl(_s));let i=performance.now(),e=X2(vs,tf);_s=nu(e),fl(e),zi.add(_s);let t={};_s.children.forEach(n=>{let s=n.isInstancedMesh?"instanced":Array.isArray(n.material)?"multi":n.geometry.groups.length>1?"groups":n.morphTargetInfluences?"morph":"merged";t[s]=(t[s]||0)+1}),window.base3dStats={buildMs:Math.round(performance.now()-i),meshes:_s.children.length,reasons:t},rn.shadowMap.needsUpdate=!0,Y2(),Hi()}var Ta=document.createElement("div");Ta.id="labels";document.body.appendChild(Ta);var kl=ir.rooms.filter(i=>i.module!==0||i.width*i.height>=24).map(i=>{let e=document.createElement("div");e.className="room-label",e.textContent=i.name,e.style.borderColor=B2[i.module]||"#808080",Ta.appendChild(e);let t=new L((qr+i.x+i.width/2)*D,0,(Zr+i.y+i.height/2)*D);return{element:e,room:i,position:t,baseLevel:i.level||0}}),zl=!0;function Y2(){for(let i of kl){let e=Math.min(vs,i.baseLevel+(i.room.levels||1)-1);i.position.y=Math.max(i.baseLevel,Math.min(e,vs))*ut+.4,i.hidden=i.baseLevel>vs}}var pr=new L;function q2(){if(Ta.style.display=zl?"block":"none",!zl)return;let i=window.innerWidth,e=window.innerHeight;for(let n of kl)n.distance=Oi.position.distanceTo(n.position);let t=[];for(let n of[...kl].sort((s,r)=>s.distance-r.distance)){pr.copy(n.position).project(Oi);let s=!n.hidden&&n.distance<120&&pr.z<1&&Math.abs(pr.x)<1.1&&Math.abs(pr.y)<1.1,r=(pr.x+1)/2*i,o=(1-pr.y)/2*e;if(s){n.width||(n.width=n.element.offsetWidth||n.room.name.length*7+16);let a=[r-n.width/2,o-10,r+n.width/2,o+10];s=!t.some(c=>a[0]<c[2]&&a[2]>c[0]&&a[1]<c[3]&&a[3]>c[1]),s&&t.push(a)}n.element.style.display=s?"block":"none",s&&(n.element.style.transform=`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -50%)`,n.element.style.opacity=n.distance>85?"0.6":"1")}}var Fi=document.createElement("div");Fi.id="panel";Fi.innerHTML=`
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
  <button id="back" class="back">\u041D\u0410\u0417\u0410\u0414 \u041D\u0410 \u0411\u0410\u0417\u0423</button>`;document.body.appendChild(Fi);var Bl=Fi.querySelector("#levels");for(let i=0;i<ps;i++){let e=document.createElement("button");e.textContent=String(i+1),e.dataset.level=String(i),Bl.appendChild(e)}function nf(){Bl.querySelectorAll("button").forEach(i=>i.classList.toggle("on",Number(i.dataset.level)<=vs))}Bl.addEventListener("click",i=>{let e=i.target.dataset&&i.target.dataset.level;e!==void 0&&sf(Number(e))});function sf(i){i!==vs&&(vs=i,nf(),Hl())}Fi.querySelector("#cut").addEventListener("change",i=>{tf=i.target.checked,Hl()});Fi.querySelector("#names").addEventListener("change",i=>{zl=i.target.checked,Hi()});Fi.querySelector(".views").addEventListener("click",i=>{let e=i.target.dataset&&i.target.dataset.view;e&&(e==="home"?Fl():e==="top"?mr(0,85,75):e==="n"?mr(180,30,60):e==="s"?mr(0,30,60):e==="w"?mr(-90,30,60):e==="e"&&mr(90,30,60),Hi())});function rf(){window.BASE3D_BACK?location.href=window.BASE3D_BACK:history.back()}Fi.querySelector("#back").addEventListener("click",rf);window.addEventListener("keydown",i=>{i.key==="Escape"?rf():i.key>="1"&&i.key<=String(ps)?sf(Number(i.key)-1):(i.key==="r"||i.key==="R"||i.key==="\u043A"||i.key==="\u041A")&&(Fl(),Hi())});var Ol=!1;function Hi(){Ol||(Ol=!0,requestAnimationFrame(Z2))}function Z2(){Ol=!1;let i=Vt.update();rn.render(zi,Oi),q2(),i&&Hi()}Vt.addEventListener("change",Hi);window.addEventListener("resize",()=>{Oi.aspect=window.innerWidth/window.innerHeight,Oi.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight),Hi()});nf();Fl();Hl();{let i=document.getElementById("loading");i&&i.remove()}window.base3dReady=!0;})();
