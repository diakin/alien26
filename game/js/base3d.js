// Собрано tools/render/build_base3d.sh из tools/render/baseview.js (three.js 0.162.0). Не править вручную.
(()=>{var ic="162",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,qc=1,df=2;var Sd=1,sc=2,fi=3,Ii=0,un=1,dn=2,Ri=0,Ws=1,pl=2,Zc=3,$c=4,uf=5,es=100,ff=101,pf=102,Jc=103,Kc=104,mf=200,gf=201,xf=202,yf=203,ml=204,gl=205,_f=206,vf=207,Mf=208,bf=209,Ef=210,wf=211,Sf=212,Tf=213,Af=214,Rf=0,Cf=1,Pf=2,ko=3,If=4,Lf=5,Nf=6,Df=7,Td=0,kf=1,Uf=2,Ci=0,zf=1,Of=2,Ff=3,rc=4,Hf=5,Bf=6,Gf=7;var Ad=300,qs=301,Zs=302,xl=303,yl=304,da=306,rs=1e3,Qt=1001,_l=1002,jt=1003,jc=1004;var xr=1005;var vn=1006,La=1007;var ns=1008;var Pi=1009,Vf=1010,Wf=1011,oc=1012,Rd=1013,Ai=1014,ii=1015,Ir=1016,Cd=1017,Pd=1018,is=1020,Xf=1021,Jn=1023,Yf=1024,qf=1025,ss=1026,$s=1027,Id=1028,Ld=1029,Zf=1030,Nd=1031,Dd=1033,Na=33776,Da=33777,ka=33778,Ua=33779,Qc=35840,eh=35841,th=35842,nh=35843,kd=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,lh=37811,ch=37812,hh=37813,dh=37814,uh=37815,fh=37816,ph=37817,mh=37818,gh=37819,xh=37820,yh=37821,za=36492,_h=36494,vh=36495,$f=36283,Mh=36284,bh=36285,Eh=36286;var Uo=2300,zo=2301,Oa=2302,wh=2400,Sh=2401,Th=2402;var Jf=3200,Ud=3201,zd=0,Kf=1,Ti="",Mn="srgb",ki="srgb-linear",ac="display-p3",ua="display-p3-linear",Oo="linear",Tt="srgb",Fo="rec709",Ho="p3";var bs=7680;var Ah=519,jf=512,Qf=513,e0=514,Od=515,t0=516,n0=517,i0=518,s0=519,Rh=35044;var Ch="300 es",vl=1035,pi=2e3,Bo=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,Sr=Math.PI/180,Lr=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function r0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function a0(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function l0(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&(Ph=i);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*Sr}function g0(i){return i*Lr}function Ml(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Go(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ui={DEG2RAD:Sr,RAD2DEG:Lr,generateUUID:ms,clamp:Ht,euclideanModulo:lc,mapLinear:r0,inverseLerp:o0,lerp:Tr,damp:a0,pingpong:l0,smoothstep:c0,smootherstep:h0,randInt:d0,randFloat:u0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:Ml,ceilPowerOfTwo:x0,floorPowerOfTwo:Go,setQuaternionFromProperEuler:y0,normalize:pn,denormalize:Fs},xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],y=s[4],v=s[7],T=s[2],C=s[5],P=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*m+a*y+l*C,r[6]=o*g+a*v+l*P,r[1]=c*x+h*_+d*T,r[4]=c*m+h*y+d*C,r[7]=c*g+h*v+d*P,r[2]=u*x+f*_+p*T,r[5]=u*m+f*y+p*C,r[8]=u*g+f*v+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new st;function Fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _0(){let i=Vo("canvas");return i.style.display="block",i}var Ih={};function v0(i){i in Ih||(Ih[i]=!0,console.warn(i))}var Lh=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[ki]:{transfer:Oo,primaries:Fo,toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:Tt,primaries:Fo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ua]:{transfer:Oo,primaries:Ho,toReference:i=>i.applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Lh)},[ac]:{transfer:Tt,primaries:Ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},M0=new Set([ki,ua]),Mt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!M0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=lo[e].toReference,s=lo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return lo[i].primaries},getTransfer:function(i){return i===Ti?Oo:lo[i].transfer}};function Xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,Wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Vo("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,Xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var E0=0,bn=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=vn,o=ns,a=Jn,l=Pi,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=ms(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ad;bn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(f+1)/2,T=(g+1)/2,C=(h+u)/4,P=(d+x)/4,z=(p+m)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=P/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=z/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=z/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yo=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var El=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==p){let m=1-a,g=l*u+c*f+h*p+d*x,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let T=Math.sqrt(y),C=Math.atan2(T,g*_);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}let v=a*_;if(l=l*m+u*v,c=c*m+f*v,h=h*m+p*v,d=d*m+x*v,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new L,Dh=new In,Kn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ho.subVectors(this.max,yr),ws.subVectors(e.a,yr),Ss.subVectors(e.b,yr),Ts.subVectors(e.c,yr),vi.subVectors(Ss,ws),Mi.subVectors(Ts,Ss),qi.subVectors(ws,Ts);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-qi.z,qi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,qi.z,0,-qi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-qi.y,qi.x,0];return!Va(t,ws,Ss,Ts,ho)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,ws,Ss,Ts,ho))?!1:(uo.crossVectors(vi,Mi),t=[uo.x,uo.y,uo.z],Va(t,ws,Ss,Ts,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,co=new Kn,ws=new L,Ss=new L,Ts=new L,vi=new L,Mi=new L,qi=new L,yr=new L,ho=new L,uo=new L,Zi=new L;function Va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var w0=new Kn,_r=new L,Wa=new L,os=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Wa)),this.expandByPoint(_r.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new L,Xa=new L,fo=new L,bi=new L,Ya=new L,po=new L,qa=new L,Nr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xa.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=bi.dot(this.direction),l=-bi.dot(fo),c=bi.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xa).addScaledVector(fo,u),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){Ya.subVectors(t,e),po.subVectors(n,e),qa.crossVectors(Ya,po);let o=this.direction.dot(qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let l=a*this.direction.dot(po.crossVectors(bi,po));if(l<0)return null;let c=a*this.direction.dot(Ya.cross(bi));if(c<0||l+c>o)return null;let h=-a*bi.dot(qa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,T0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ei.crossVectors(n,Rn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ei.crossVectors(n,Rn)),Ei.normalize(),mo.crossVectors(Rn,Ei),s[0]=Ei.x,s[4]=mo.x,s[8]=Rn.x,s[1]=Ei.y,s[5]=mo.y,s[9]=Rn.y,s[2]=Ei.z,s[6]=mo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],y=n[7],v=n[11],T=n[15],C=s[0],P=s[4],z=s[8],A=s[12],M=s[1],S=s[5],he=s[9],J=s[13],N=s[2],F=s[6],G=s[10],Z=s[14],k=s[3],b=s[7],H=s[11],q=s[15];return r[0]=o*C+a*M+l*N+c*k,r[4]=o*P+a*S+l*F+c*b,r[8]=o*z+a*he+l*G+c*H,r[12]=o*A+a*J+l*Z+c*q,r[1]=h*C+d*M+u*N+f*k,r[5]=h*P+d*S+u*F+f*b,r[9]=h*z+d*he+u*G+f*H,r[13]=h*A+d*J+u*Z+f*q,r[2]=p*C+x*M+m*N+g*k,r[6]=p*P+x*S+m*F+g*b,r[10]=p*z+x*he+m*G+g*H,r[14]=p*A+x*J+m*Z+g*q,r[3]=_*C+y*M+v*N+T*k,r[7]=_*P+y*S+v*F+T*b,r[11]=_*z+y*he+v*G+T*H,r[15]=_*A+y*J+v*Z+T*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+x*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-t*l*d+t*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=d*m*c-x*u*c+x*l*f-a*m*f-d*l*g+a*u*g,y=p*u*c-h*m*c-p*l*f+o*m*f+h*l*g-o*u*g,v=h*x*c-p*d*c+p*a*f-o*x*f-h*a*g+o*d*g,T=p*d*l-h*x*l-p*a*u+o*x*u+h*a*m-o*d*m,C=t*_+n*y+s*v+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return e[0]=_*P,e[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*g-n*u*g)*P,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*g+n*l*g)*P,e[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*P,e[4]=y*P,e[5]=(h*m*r-p*u*r+p*s*f-t*m*f-h*s*g+t*u*g)*P,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*g-t*l*g)*P,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*P,e[8]=v*P,e[9]=(p*d*r-h*x*r-p*n*f+t*x*f+h*n*g-t*d*g)*P,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*g+t*a*g)*P,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*P,e[12]=T*P,e[13]=(h*x*s-p*d*s+p*n*u-t*x*u-h*n*m+t*d*m)*P,e[14]=(p*a*s-o*x*s-p*n*l+t*x*l+o*n*m-t*a*m)*P,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*u+t*a*u)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,_=l*c,y=l*h,v=l*d,T=n.x,C=n.y,P=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+v)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(u+g))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(p+y)*P,s[9]=(m-_)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,h=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,p;if(a===pi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*c,f=(n+s)*h,p,x;if(a===pi)p=(o+r)*d,x=-2*d;else if(a===Bo)p=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new L,Zn=new xt,S0=new L(0,0,0),T0=new L(1,1,1),Ei=new L,mo=new L,Rn=new L,kh=new xt,Uh=new In,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,zh=new L,Rs=new In,hi=new xt,go=new L,vr=new L,R0=new L,C0=new In,Oh=new L(1,0,0),Fh=new L(0,1,0),Hh=new L(0,0,1),P0={type:"added"},I0={type:"removed"},Za={type:"childadded",child:null},$a={type:"childremoved",child:null},gn=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Fn,n=new In,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new st}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(vr,go,this.up):hi.lookAt(go,vr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(hi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P0),Za.child=e,this.dispatchEvent(Za),Za.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new L(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new L,di=new L,Ja=new L,ui=new L,Cs=new L,Ps=new L,Bh=new L,Ka=new L,ja=new L,Qa=new L,Hs=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),di.subVectors(n,t),Ja.subVectors(e,t);let o=$n.dot($n),a=$n.dot(di),l=$n.dot(Ja),c=di.dot(di),h=di.dot(Ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),di.subVectors(e,t),$n.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),di.subVectors(this.a,this.b),$n.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,n),Ps.subVectors(r,n),Ka.subVectors(e,n);let l=Cs.dot(Ka),c=Ps.dot(Ka);if(l<=0&&c<=0)return t.copy(n);ja.subVectors(e,s);let h=Cs.dot(ja),d=Ps.dot(ja);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Cs,o);Qa.subVectors(e,r);let f=Cs.dot(Qa),p=Ps.dot(Qa);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ps,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Bh.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Bh,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function el(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=lc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=el(o,r,e+1/3),this.g=el(o,r,e),this.b=el(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Mt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Ht(cn.r*255,0,255))*65536+Math.round(Ht(cn.g*255,0,255))*256+Math.round(Ht(cn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Mn){Mt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(xo);let n=Tr(wi.h,xo.h,t),s=Tr(wi.s,xo.s,t),r=Tr(wi.l,xo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Qe;Qe.NAMES=Hd;var L0=0,as=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Ws,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ls=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new L,yo=new xe,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return v0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}};var Zo=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $o=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=0,On=new xt,tl=new gn,Is=new L,Cn=new Kn,Mr=new Kn,$t=new L,kt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?$o:Zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Cn.min,Mr.min),Cn.expandByPoint($t),$t.addVectors(Cn.max,Mr.max),Cn.expandByPoint($t)):(Cn.expandByPoint(Mr.min),Cn.expandByPoint(Mr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),$t.add(Is)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new L,l[z]=new L;let c=new L,h=new L,d=new L,u=new xe,f=new xe,p=new xe,x=new L,m=new L;function g(z,A,M){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,z),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(S),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[z].add(x),a[A].add(x),a[M].add(x),l[z].add(m),l[A].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,A=_.length;z<A;++z){let M=_[z],S=M.start,he=M.count;for(let J=S,N=S+he;J<N;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let y=new L,v=new L,T=new L,C=new L;function P(z){T.fromBufferAttribute(s,z),C.copy(T);let A=a[z];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),v.crossVectors(C,A);let S=v.dot(l[z])<0?-1:1;o.setXYZW(z,y.x,y.y,y.z,S)}for(let z=0,A=_.length;z<A;++z){let M=_[z],S=M.start,he=M.count;for(let J=S,N=S+he;J<N;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new xt,$i=new Nr,_o=new os,Vh=new L,Ls=new L,Ns=new L,Ds=new L,nl=new L,vo=new L,Mo=new xe,bo=new xe,Eo=new xe,Wh=new L,Xh=new L,Yh=new L,wo=new L,So=new L,Se=class extends gn{constructor(e=new kt,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(nl.fromBufferAttribute(d,e),o?vo.addScaledVector(nl,h):vo.addScaledVector(nl.sub(t),h))}t.add(vo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(_o.containsPoint($i.origin)===!1&&($i.intersectSphere(_o,Vh)===null||$i.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let C=a.getX(v),P=a.getX(v+1),z=a.getX(v+2);s=To(this,g,e,n,c,h,d,C,P,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=To(this,o,e,n,c,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let C=v,P=v+1,z=v+2;s=To(this,g,e,n,c,h,d,C,P,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,y=m+1,v=m+2;s=To(this,o,e,n,c,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function D0(i,e,t,n,s,r,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ii,a),l===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:i}}function To(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ls),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Ds);let h=D0(i,e,t,n,Ls,Ns,Ds,wo);if(h){s&&(Mo.fromBufferAttribute(s,a),bo.fromBufferAttribute(s,l),Eo.fromBufferAttribute(s,c),h.uv=Hs.getInterpolation(wo,Ls,Ns,Ds,Mo,bo,Eo,new xe)),r&&(Mo.fromBufferAttribute(r,a),bo.fromBufferAttribute(r,l),Eo.fromBufferAttribute(r,c),h.uv1=Hs.getInterpolation(wo,Ls,Ns,Ds,Mo,bo,Eo,new xe)),o&&(Wh.fromBufferAttribute(o,a),Xh.fromBufferAttribute(o,l),Yh.fromBufferAttribute(o,c),h.normal=Hs.getInterpolation(wo,Ls,Ns,Ds,Wh,Xh,Yh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Hs.getNormal(Ls,Ns,Ds,d.normal),h.face=d}return h}var vt=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function p(x,m,g,_,y,v,T,C,P,z,A){let M=v/P,S=T/z,he=v/2,J=T/2,N=C/2,F=P+1,G=z+1,Z=0,k=0,b=new L;for(let H=0;H<G;H++){let q=H*S-J;for(let oe=0;oe<F;oe++){let _e=oe*M-he;b[x]=_e*_,b[m]=q*y,b[g]=N,c.push(b.x,b.y,b.z),b[x]=0,b[m]=0,b[g]=C>0?1:-1,h.push(b.x,b.y,b.z),d.push(oe/P),d.push(1-H/z),Z+=1}}for(let H=0;H<z;H++)for(let q=0;q<P;q++){let oe=u+q+F*H,_e=u+q+F*(H+1),W=u+(q+1)+F*(H+1),pe=u+(q+1)+F*H;l.push(oe,_e,pe),l.push(_e,W,pe),k+=6}a.addGroup(f,k,A),f+=k,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function k0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bd(i){return i.getRenderTarget()===null?i.outputColorSpace:Mt.workingColorSpace}var U0={clone:Js,merge:mn},z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Jo=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,qh=new xe,Zh=new xe,hn=class extends Jo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,qh,Zh),t.subVectors(Zh,qh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Us=1,wl=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ks,Us,e,t);s.layers=this.layers,this.add(s);let r=new hn(ks,Us,e,t);r.layers=this.layers,this.add(r);let o=new hn(ks,Us,e,t);o.layers=this.layers,this.add(o);let a=new hn(ks,Us,e,t);a.layers=this.layers,this.add(a);let l=new hn(ks,Us,e,t);l.layers=this.layers,this.add(l);let c=new hn(ks,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ko=class extends bn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ri});r.uniforms.tEquirect.value=t;let o=new Se(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=vn),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},il=new L,F0=new L,H0=new st,Pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=il.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H0.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new os,Ao=new L,Dr=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],x=s[10],m=s[11],g=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,m-f,v-g).normalize(),n[1].setComponents(l+r,u+c,m+f,v+g).normalize(),n[2].setComponents(l+o,u+h,m+p,v+_).normalize(),n[3].setComponents(l-o,u-h,m-p,v-_).normalize(),n[4].setComponents(l-a,u-d,m-x,v-y).normalize(),t===pi)n[5].setComponents(l+a,u+d,m+x,v+y).normalize();else if(t===Bo)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function B0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,f=d.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,p=h.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&p.length===0&&i.bufferSubData(d,0,u),p.length!==0){for(let x=0,m=p.length;x<m;x++){let g=p[x];t?i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Li=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<c;y++){let v=y*d-r;p.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,v=_+c*(g+1),T=_+1+c*(g+1),C=_+1+c*g;f.push(y,v,C),f.push(v,T,C)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},G0=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
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
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,it={alphahash_fragment:G0,alphahash_pars_fragment:V0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:Y0,alphatest_pars_fragment:q0,aomap_fragment:Z0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:dp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:_p,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:kp,envmap_vertex:wp,fog_vertex:Sp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Np,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:zp,lights_phong_fragment:Op,lights_phong_pars_fragment:Fp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Bp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Zp,map_fragment:$p,map_pars_fragment:Jp,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Nm,tonemapping_fragment:Dm,tonemapping_pars_fragment:km,transmission_fragment:Um,transmission_pars_fragment:zm,uv_pars_fragment:Om,uv_pars_vertex:Fm,uv_vertex:Hm,worldpos_vertex:Bm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:Ym,cube_frag:qm,depth_vert:Zm,depth_frag:$m,distanceRGBA_vert:Jm,distanceRGBA_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:yg,shadow_frag:_g,sprite_vert:vg,sprite_frag:Mg},Ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ni={basic:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:mn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:mn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:mn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:mn([Ne.points,Ne.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:mn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:mn([Ne.common,Ne.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:mn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:mn([Ne.sprite,Ne.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:mn([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:mn([Ne.lights,Ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ni.physical={uniforms:mn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Ro={r:0,b:0,g:0},Ki=new Fn,bg=new xt;function Eg(i,e,t,n,s,r,o){let a=new Qe(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function p(m,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===da)?(h===void 0&&(h=new Se(new vt(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Js(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(g.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Ki)),h.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Tt,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Se(new Li(2,2),new ri({name:"BackgroundMaterial",uniforms:Js(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,g){m.getRGB(Ro,Bd(i)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:p}}function wg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(N,F,G,Z,k){let b=!1;if(o){let H=x(Z,G,F);c!==H&&(c=H,f(c.object)),b=g(N,Z,G,k),b&&_(N,Z,G,k)}else{let H=F.wireframe===!0;(c.geometry!==Z.id||c.program!==G.id||c.wireframe!==H)&&(c.geometry=Z.id,c.program=G.id,c.wireframe=H,b=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(b||h)&&(h=!1,z(N,F,G,Z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,F,G){let Z=G.wireframe===!0,k=a[N.id];k===void 0&&(k={},a[N.id]=k);let b=k[F.id];b===void 0&&(b={},k[F.id]=b);let H=b[Z];return H===void 0&&(H=m(u()),b[Z]=H),H}function m(N){let F=[],G=[],Z=[];for(let k=0;k<s;k++)F[k]=0,G[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:Z,object:N,attributes:{},index:null}}function g(N,F,G,Z){let k=c.attributes,b=F.attributes,H=0,q=G.getAttributes();for(let oe in q)if(q[oe].location>=0){let W=k[oe],pe=b[oe];if(pe===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),W===void 0||W.attribute!==pe||pe&&W.data!==pe.data)return!0;H++}return c.attributesNum!==H||c.index!==Z}function _(N,F,G,Z){let k={},b=F.attributes,H=0,q=G.getAttributes();for(let oe in q)if(q[oe].location>=0){let W=b[oe];W===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let pe={};pe.attribute=W,W&&W.data&&(pe.data=W.data),k[oe]=pe,H++}c.attributes=k,c.attributesNum=H,c.index=Z}function y(){let N=c.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function v(N){T(N,0)}function T(N,F){let G=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;G[N]=1,Z[N]===0&&(i.enableVertexAttribArray(N),Z[N]=1),k[N]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,F),k[N]=F)}function C(){let N=c.newAttributes,F=c.enabledAttributes;for(let G=0,Z=F.length;G<Z;G++)F[G]!==N[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function P(N,F,G,Z,k,b,H){H===!0?i.vertexAttribIPointer(N,F,G,k,b):i.vertexAttribPointer(N,F,G,Z,k,b)}function z(N,F,G,Z){if(n.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let k=Z.attributes,b=G.getAttributes(),H=F.defaultAttributeValues;for(let q in b){let oe=b[q];if(oe.location>=0){let _e=k[q];if(_e===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){let W=_e.normalized,pe=_e.itemSize,Te=t.get(_e);if(Te===void 0)continue;let Pe=Te.buffer,B=Te.type,$=Te.bytesPerElement,ge=n.isWebGL2===!0&&(B===i.INT||B===i.UNSIGNED_INT||_e.gpuType===Rd);if(_e.isInterleavedBufferAttribute){let me=_e.data,w=me.stride,re=_e.offset;if(me.isInstancedInterleavedBuffer){for(let ee=0;ee<oe.locationSize;ee++)T(oe.location+ee,me.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ee=0;ee<oe.locationSize;ee++)v(oe.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ee=0;ee<oe.locationSize;ee++)P(oe.location+ee,pe/oe.locationSize,B,W,w*$,(re+pe/oe.locationSize*ee)*$,ge)}else{if(_e.isInstancedBufferAttribute){for(let me=0;me<oe.locationSize;me++)T(oe.location+me,_e.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let me=0;me<oe.locationSize;me++)v(oe.location+me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let me=0;me<oe.locationSize;me++)P(oe.location+me,pe/oe.locationSize,B,W,pe*$,pe/oe.locationSize*me*$,ge)}}else if(H!==void 0){let W=H[q];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(oe.location,W);break;case 3:i.vertexAttrib3fv(oe.location,W);break;case 4:i.vertexAttrib4fv(oe.location,W);break;default:i.vertexAttrib1fv(oe.location,W)}}}}C()}function A(){he();for(let N in a){let F=a[N];for(let G in F){let Z=F[G];for(let k in Z)p(Z[k].object),delete Z[k];delete F[G]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;let F=a[N.id];for(let G in F){let Z=F[G];for(let k in Z)p(Z[k].object),delete Z[k];delete F[G]}delete a[N.id]}function S(N){for(let F in a){let G=a[F];if(G[N.id]===void 0)continue;let Z=G[N.id];for(let k in Z)p(Z[k].object),delete Z[k];delete G[N.id]}}function he(){J(),h=!0,c!==l&&(c=l,f(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:he,resetDefaultState:J,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:v,disableUnusedAttributes:C}}function Sg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u;p++)this.render(h[p],d[p]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x];t.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Tg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=o||e.has("OES_texture_float"),T=y&&v,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:C}}function Ag(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,v=g.clippingState||null;l.value=v,v=h(p,u,y,f);for(let T=0;T!==y;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rg(i){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=qs:a===yl&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===yl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var jo=class extends Jo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,$h=[.125,.215,.35,.446,.526,.582],ts=20,sl=new jo,Jh=new Qe,rl=null,ol=0,al=0,Qi=(1+Math.sqrt(5))/2,zs=1/Qi,Kh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Qi,zs),new L(0,Qi,-zs),new L(zs,0,Qi),new L(-zs,0,Qi),new L(Qi,zs,0),new L(-Qi,zs,0)],Ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ir,format:Jn,colorSpace:ki,depthBuffer:!1},s=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,s){let a=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Jh),h.toneMapping=Ci,h.autoClear=!1;let f=new ls({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new Se(new vt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Jh),x=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let y=this._cubeSize;Co(s,_*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kh[(s-1)%Kh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Se(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);let g=[],_=0;for(let P=0;P<ts;++P){let z=P/x,A=Math.exp(-z*z/2);g.push(A),P===0?_+=A:P<m&&(_+=2*A)}for(let P=0;P<g.length;P++)g[P]=g[P]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-n;let v=this._sizeLods[s],T=3*v*(s>y-Bs?s-y+Bs:0),C=4*(this._cubeSize-v);Co(t,T,C,3*v,2*v),l.setRenderTarget(t),l.render(d,sl)}};function Cg(i){let e=[],t=[],n=[],s=i,r=i-Bs+1+$h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Bs?l=$h[o-i+Bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,m=2,g=1,_=new Float32Array(x*p*f),y=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let C=0;C<f;C++){let P=C%3*2/3-1,z=C>2?0:-1,A=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];_.set(A,x*p*C),y.set(u,m*p*C);let M=[C,C,C,C,C,C];v.set(M,g*p*C)}let T=new kt;T.setAttribute("position",new Jt(_,x)),T.setAttribute("uv",new Jt(y,m)),T.setAttribute("faceIndex",new Jt(v,g)),e.push(T),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(i,e,t){let n=new mi(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){let n=new Float32Array(ts),s=new L(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Qh(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ed(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function Ig(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xl||l===yl,h=l===qs||l===Zs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ks(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Ks(i));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);for(let p in u.morphAttributes){let x=u.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let p in f){let x=f[p];for(let m=0,g=x.length;m<g;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let T=_[y+0],C=_[y+1],P=_[y+2];u.push(T,C,C,P,P,T)}}else if(p!==void 0){let _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let T=y+0,C=y+1,P=y+2;u.push(T,C,C,P,P,T)}}else return;let m=new(Fd(u)?$o:Zo)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Dg(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){i.drawElements(r,p,a,f*l),t.update(p,r,1)}function d(f,p,x){if(x===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,p,a,f*l,x),t.update(p,r,x)}function u(f,p,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<x;g++)this.render(f[g]/l,p[g]);else{m.multiDrawElementsWEBGL(r,p,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=p[_];t.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function kg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ug(i,e){return i[0]-e[0]}function zg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Og(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==p){let he=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",he)};x!==void 0&&x.texture.dispose();let m=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],C=0;m===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let P=h.attributes.position.count*C,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let A=new Float32Array(P*z*4*p),M=new Yo(A,P,z,p);M.type=ii,M.needsUpdate=!0;let S=C*4;for(let J=0;J<p;J++){let N=y[J],F=v[J],G=T[J],Z=P*z*4*J;for(let k=0;k<N.count;k++){let b=k*S;m===!0&&(o.fromBufferAttribute(N,k),A[Z+b+0]=o.x,A[Z+b+1]=o.y,A[Z+b+2]=o.z,A[Z+b+3]=0),g===!0&&(o.fromBufferAttribute(F,k),A[Z+b+4]=o.x,A[Z+b+5]=o.y,A[Z+b+6]=o.z,A[Z+b+7]=0),_===!0&&(o.fromBufferAttribute(G,k),A[Z+b+8]=o.x,A[Z+b+9]=o.y,A[Z+b+10]=o.z,A[Z+b+11]=G.itemSize===4?o.w:1)}}x={count:p,texture:M,size:new xe(P,z)},r.set(h,x),h.addEventListener("dispose",he)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];let g=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<f;y++){let v=p[y];v[0]=y,v[1]=u[y]}p.sort(zg);for(let y=0;y<8;y++)y<f&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ug);let x=h.morphAttributes.position,m=h.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let v=a[y],T=v[0],C=v[1];T!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+y)!==x[T]&&h.setAttribute("morphTarget"+y,x[T]),m&&h.getAttribute("morphNormal"+y)!==m[T]&&h.setAttribute("morphNormal"+y,m[T]),s[y]=C,g+=C):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Fg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Qo=class extends bn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ss,h!==ss&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ai),n===void 0&&h===$s&&(n=is),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vd=new bn,Wd=new Qo(1,1);Wd.compareFunction=Od;var Xd=new Yo,Yd=new El,qd=new Ko,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Xt(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Xt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Xt(t,n)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function e1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function t1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Wd:Vd;t.setTexture2D(e||r,s)}function n1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yd,s)}function i1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qd,s)}function s1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function r1(i){switch(i){case 5126:return Hg;case 35664:return Bg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Zg;case 35668:case 35672:return $g;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(i,e){i.uniform1fv(this.addr,e)}function a1(i,e){let t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function l1(i,e){let t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function c1(i,e){let t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function h1(i,e){let t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d1(i,e){let t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u1(i,e){let t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f1(i,e){i.uniform1iv(this.addr,e)}function p1(i,e){i.uniform2iv(this.addr,e)}function m1(i,e){i.uniform3iv(this.addr,e)}function g1(i,e){i.uniform4iv(this.addr,e)}function x1(i,e){i.uniform1uiv(this.addr,e)}function y1(i,e){i.uniform2uiv(this.addr,e)}function _1(i,e){i.uniform3uiv(this.addr,e)}function v1(i,e){i.uniform4uiv(this.addr,e)}function M1(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vd,r[o])}function b1(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yd,r[o])}function E1(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qd,r[o])}function w1(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xd,r[o])}function S1(i){switch(i){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return h1;case 35675:return d1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return x1;case 36294:return y1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}var Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}},Al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S1(t.type)}},Rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function T1(i,e,t){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),o=ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){od(t,c===void 0?new Tl(a,i,e):new Al(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Rl(a),od(t,d)),t=d}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);T1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A1=37297,R1=0;function C1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function P1(i){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(i),n;switch(e===t?n="":e===Ho&&t===Fo?n="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case ki:case ua:return[n,"LinearTransferOETF"];case Mn:case ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+C1(i.getShaderSource(e),o)}else return s}function I1(i,e){let t=P1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L1(i,e){let t;switch(e){case zf:t="Linear";break;case Of:t="Reinhard";break;case Ff:t="OptimizedCineon";break;case rc:t="ACESFilmic";break;case Bf:t="AgX";break;case Gf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function k1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gs(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(z1,F1)}var O1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F1(i,e){let t=it[e];if(t===void 0){let n=O1.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}var H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(H1,B1)}function B1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function G1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Zs:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function X1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case kf:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=G1(t),c=V1(t),h=W1(t),d=X1(t),u=Y1(t),f=t.isWebGL2?"":N1(t),p=D1(t),x=k1(r),m=s.createProgram(),g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[f,ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?it.tonemapping_pars_fragment:"",t.toneMapping!==Ci?L1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Cl(o),o=cd(o,t),o=hd(o,t),a=Cl(a),a=cd(a,t),a=hd(a,t),o=dd(o),a=dd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+g+o,T=y+_+a,C=ad(s,s.VERTEX_SHADER,v),P=ad(s,s.FRAGMENT_SHADER,T);s.attachShader(m,C),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(he){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(P).trim(),G=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,P);else{let k=ld(s,C,"vertex"),b=ld(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+he.name+`
Material Type: `+he.type+`

Program Info Log: `+J+`
`+k+`
`+b)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(N===""||F==="")&&(Z=!1);Z&&(he.diagnostics={runnable:G,programLog:J,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:_}})}s.deleteShader(C),s.deleteShader(P),A=new Ys(s,m),M=U1(s,m)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(m,A1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=P,this}var Z1=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Il(e),t.set(e,n)),n}},Il=class{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}};function $1(i,e,t,n,s,r,o){let a=new qo,l=new Pl,c=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,he,J,N){let F=J.fog,G=N.geometry,Z=M.isMeshStandardMaterial?J.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),b=k&&k.mapping===da?k.image.height:null,H=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=q!==void 0?q.length:0,_e=0;G.morphAttributes.position!==void 0&&(_e=1),G.morphAttributes.normal!==void 0&&(_e=2),G.morphAttributes.color!==void 0&&(_e=3);let W,pe,Te,Pe;if(H){let _t=ni[H];W=_t.vertexShader,pe=_t.fragmentShader}else W=M.vertexShader,pe=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),Pe=l.getFragmentShaderID(M);let B=i.getRenderTarget(),$=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,me=!!M.map,w=!!M.matcap,re=!!k,ee=!!M.aoMap,X=!!M.lightMap,K=!!M.bumpMap,se=!!M.normalMap,Ee=!!M.displacementMap,Le=!!M.emissiveMap,Ze=!!M.metalnessMap,I=!!M.roughnessMap,E=M.anisotropy>0,ue=M.clearcoat>0,le=M.iridescence>0,Y=M.sheen>0,te=M.transmission>0,Ae=E&&!!M.anisotropyMap,De=ue&&!!M.clearcoatMap,ye=ue&&!!M.clearcoatNormalMap,be=ue&&!!M.clearcoatRoughnessMap,Ye=le&&!!M.iridescenceMap,we=le&&!!M.iridescenceThicknessMap,yt=Y&&!!M.sheenColorMap,Je=Y&&!!M.sheenRoughnessMap,He=!!M.specularMap,Fe=!!M.specularColorMap,Ve=!!M.specularIntensityMap,U=te&&!!M.transmissionMap,ve=te&&!!M.thicknessMap,Ge=!!M.gradientMap,V=!!M.alphaMap,Ce=M.alphaTest>0,ne=!!M.alphaHash,Re=!!M.extensions,ze=Ci;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ze=i.toneMapping);let ct={isWebGL2:d,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:pe,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:Pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ge,instancing:$,instancingColor:$&&N.instanceColor!==null,instancingMorph:$&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:me,matcap:w,envMap:re,envMapMode:re&&k.mapping,envMapCubeUVHeight:b,aoMap:ee,lightMap:X,bumpMap:K,normalMap:se,displacementMap:f&&Ee,emissiveMap:Le,normalMapObjectSpace:se&&M.normalMapType===Kf,normalMapTangentSpace:se&&M.normalMapType===zd,metalnessMap:Ze,roughnessMap:I,anisotropy:E,anisotropyMap:Ae,clearcoat:ue,clearcoatMap:De,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,iridescence:le,iridescenceMap:Ye,iridescenceThicknessMap:we,sheen:Y,sheenColorMap:yt,sheenRoughnessMap:Je,specularMap:He,specularColorMap:Fe,specularIntensityMap:Ve,transmission:te,transmissionMap:U,thicknessMap:ve,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:Ce,alphaHash:ne,combine:M.combine,mapUv:me&&m(M.map.channel),aoMapUv:ee&&m(M.aoMap.channel),lightMapUv:X&&m(M.lightMap.channel),bumpMapUv:K&&m(M.bumpMap.channel),normalMapUv:se&&m(M.normalMap.channel),displacementMapUv:Ee&&m(M.displacementMap.channel),emissiveMapUv:Le&&m(M.emissiveMap.channel),metalnessMapUv:Ze&&m(M.metalnessMap.channel),roughnessMapUv:I&&m(M.roughnessMap.channel),anisotropyMapUv:Ae&&m(M.anisotropyMap.channel),clearcoatMapUv:De&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Je&&m(M.sheenRoughnessMap.channel),specularMapUv:He&&m(M.specularMap.channel),specularColorMapUv:Fe&&m(M.specularColorMap.channel),specularIntensityMapUv:Ve&&m(M.specularIntensityMap.channel),transmissionMapUv:U&&m(M.transmissionMap.channel),thicknessMapUv:ve&&m(M.thicknessMap.channel),alphaMapUv:V&&m(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(se||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(me||V),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&he.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:me&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Re&&M.extensions.derivatives===!0,extensionFragDepth:Re&&M.extensions.fragDepth===!0,extensionDrawBuffers:Re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function _(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let he in M.defines)S.push(he),S.push(M.defines[he]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){let S=x[M.type],he;if(S){let J=ni[S];he=U0.clone(J.uniforms)}else he=M.uniforms;return he}function C(M,S){let he;for(let J=0,N=h.length;J<N;J++){let F=h[J];if(F.cacheKey===S){he=F,++he.usedTimes;break}}return he===void 0&&(he=new q1(i,S,M,r),h.push(he)),he}function P(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function z(M){l.remove(M)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:T,acquireProgram:C,releaseProgram:P,releaseShaderCache:z,programs:h,dispose:A}}function J1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function K1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,p,x,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,u,f,p,x,m){let g=o(d,u,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(d,u,f,p,x,m){let g=o(d,u,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(d,u){t.length>1&&t.sort(d||K1),n.length>1&&n.sort(u||fd),s.length>1&&s.sort(u||fd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function j1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Qe};break;case"SpotLight":t={position:new L,direction:new L,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tx=0;function nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ix(i,e){let t=new Q1,n=ex(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new xt,a=new xt;function l(h,d){let u=0,f=0,p=0;for(let he=0;he<9;he++)s.probe[he].set(0,0,0);let x=0,m=0,g=0,_=0,y=0,v=0,T=0,C=0,P=0,z=0,A=0;h.sort(nx);let M=d===!0?Math.PI:1;for(let he=0,J=h.length;he<J;he++){let N=h[he],F=N.color,G=N.intensity,Z=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*G*M,f+=F.g*G*M,p+=F.b*G*M;else if(N.isLightProbe){for(let b=0;b<9;b++)s.probe[b].addScaledVector(N.sh.coefficients[b],G);A++}else if(N.isDirectionalLight){let b=t.get(N);if(b.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){let H=N.shadow,q=n.get(N);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,s.directionalShadow[x]=q,s.directionalShadowMap[x]=k,s.directionalShadowMatrix[x]=N.shadow.matrix,v++}s.directional[x]=b,x++}else if(N.isSpotLight){let b=t.get(N);b.position.setFromMatrixPosition(N.matrixWorld),b.color.copy(F).multiplyScalar(G*M),b.distance=Z,b.coneCos=Math.cos(N.angle),b.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),b.decay=N.decay,s.spot[g]=b;let H=N.shadow;if(N.map&&(s.spotLightMap[P]=N.map,P++,H.updateMatrices(N),N.castShadow&&z++),s.spotLightMatrix[g]=H.matrix,N.castShadow){let q=n.get(N);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,s.spotShadow[g]=q,s.spotShadowMap[g]=k,C++}g++}else if(N.isRectAreaLight){let b=t.get(N);b.color.copy(F).multiplyScalar(G),b.halfWidth.set(N.width*.5,0,0),b.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=b,_++}else if(N.isPointLight){let b=t.get(N);if(b.color.copy(N.color).multiplyScalar(N.intensity*M),b.distance=N.distance,b.decay=N.decay,N.castShadow){let H=N.shadow,q=n.get(N);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,s.pointShadow[m]=q,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=N.shadow.matrix,T++}s.point[m]=b,m++}else if(N.isHemisphereLight){let b=t.get(N);b.skyColor.copy(N.color).multiplyScalar(G*M),b.groundColor.copy(N.groundColor).multiplyScalar(G*M),s.hemi[y]=b,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=p;let S=s.hash;(S.directionalLength!==x||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==_||S.hemiLength!==y||S.numDirectionalShadows!==v||S.numPointShadows!==T||S.numSpotShadows!==C||S.numSpotMaps!==P||S.numLightProbes!==A)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=C+P-z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=A,S.directionalLength=x,S.pointLength=m,S.spotLength=g,S.rectAreaLength=_,S.hemiLength=y,S.numDirectionalShadows=v,S.numPointShadows=T,S.numSpotShadows=C,S.numSpotMaps=P,S.numLightProbes=A,s.version=tx++)}function c(h,d){let u=0,f=0,p=0,x=0,m=0,g=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let v=h[_];if(v.isDirectionalLight){let T=s.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),u++}else if(v.isSpotLight){let T=s.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let T=s.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(v.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=s.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:s}}function md(i,e){let t=new ix(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new md(i,e),t.set(r,[l])):o>=a.length?(l=new md(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var ea=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ll=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rx=`void main() {
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
}`;function ax(i,e,t){let n=new Dr,s=new xe,r=new xe,o=new Ct,a=new ea({depthPacking:Ud}),l=new Ll,c={},h=t.maxTextureSize,d={[Ii]:un,[un]:Ii,[dn]:dn},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new kt;p.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let g=this.type;this.render=function(C,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let A=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),he=i.state;he.setBlending(Ri),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);let J=g!==fi&&this.type===fi,N=g===fi&&this.type!==fi;for(let F=0,G=C.length;F<G;F++){let Z=C[F],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let b=k.getFrameExtents();if(s.multiply(b),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/b.x),s.x=r.x*b.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/b.y),s.y=r.y*b.y,k.mapSize.y=r.y)),k.map===null||J===!0||N===!0){let q=this.type!==fi?{minFilter:jt,magFilter:jt}:{};k.map!==null&&k.map.dispose(),k.map=new mi(s.x,s.y,q),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let H=k.getViewportCount();for(let q=0;q<H;q++){let oe=k.getViewport(q);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),he.viewport(o),k.updateMatrices(Z,q),n=k.getFrustum(),v(P,z,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===fi&&_(k,z),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(A,M,S)};function _(C,P){let z=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mi(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,z,u,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,z,f,x,null)}function y(C,P,z,A){let M=null,S=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)M=S;else if(M=z.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let he=M.uuid,J=P.uuid,N=c[he];N===void 0&&(N={},c[he]=N);let F=N[J];F===void 0&&(F=M.clone(),N[J]=F,P.addEventListener("dispose",T)),M=F}if(M.visible=P.visible,M.wireframe=P.wireframe,A===fi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let he=i.properties.get(M);he.light=z}return M}function v(C,P,z,A,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let J=e.update(C),N=C.material;if(Array.isArray(N)){let F=J.groups;for(let G=0,Z=F.length;G<Z;G++){let k=F[G],b=N[k.materialIndex];if(b&&b.visible){let H=y(C,b,A,M);C.onBeforeShadow(i,C,P,z,J,H,k),i.renderBufferDirect(z,null,J,H,C,k),C.onAfterShadow(i,C,P,z,J,H,k)}}}else if(N.visible){let F=y(C,N,A,M);C.onBeforeShadow(i,C,P,z,J,F,null),i.renderBufferDirect(z,null,J,F,C,null),C.onAfterShadow(i,C,P,z,J,F,null)}}let he=C.children;for(let J=0,N=he.length;J<N;J++)v(he[J],P,z,A,M)}function T(C){C.target.removeEventListener("dispose",T);for(let z in c){let A=c[z],M=C.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function lx(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Ce=new Ct,ne=null,Re=new Ct(0,0,0,0);return{setMask:function(ze){ne!==ze&&!V&&(i.colorMask(ze,ze,ze,ze),ne=ze)},setLocked:function(ze){V=ze},setClear:function(ze,ct,_t,bt,Dt){Dt===!0&&(ze*=bt,ct*=bt,_t*=bt),Ce.set(ze,ct,_t,bt),Re.equals(Ce)===!1&&(i.clearColor(ze,ct,_t,bt),Re.copy(Ce))},reset:function(){V=!1,ne=null,Re.set(-1,0,0,0)}}}function r(){let V=!1,Ce=null,ne=null,Re=null;return{setTest:function(ze){ze?$(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ze){Ce!==ze&&!V&&(i.depthMask(ze),Ce=ze)},setFunc:function(ze){if(ne!==ze){switch(ze){case Rf:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case ko:i.depthFunc(i.LEQUAL);break;case If:i.depthFunc(i.EQUAL);break;case Lf:i.depthFunc(i.GEQUAL);break;case Nf:i.depthFunc(i.GREATER);break;case Df:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=ze}},setLocked:function(ze){V=ze},setClear:function(ze){Re!==ze&&(i.clearDepth(ze),Re=ze)},reset:function(){V=!1,Ce=null,ne=null,Re=null}}}function o(){let V=!1,Ce=null,ne=null,Re=null,ze=null,ct=null,_t=null,bt=null,Dt=null;return{setTest:function(gt){V||(gt?$(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!V&&(i.stencilMask(gt),Ce=gt)},setFunc:function(gt,St,on){(ne!==gt||Re!==St||ze!==on)&&(i.stencilFunc(gt,St,on),ne=gt,Re=St,ze=on)},setOp:function(gt,St,on){(ct!==gt||_t!==St||bt!==on)&&(i.stencilOp(gt,St,on),ct=gt,_t=St,bt=on)},setLocked:function(gt){V=gt},setClear:function(gt){Dt!==gt&&(i.clearStencil(gt),Dt=gt)},reset:function(){V=!1,Ce=null,ne=null,Re=null,ze=null,ct=null,_t=null,bt=null,Dt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},f={},p=new WeakMap,x=[],m=null,g=!1,_=null,y=null,v=null,T=null,C=null,P=null,z=null,A=new Qe(0,0,0),M=0,S=!1,he=null,J=null,N=null,F=null,G=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,b=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=b>=1):H.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=b>=2);let q=null,oe={},_e=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),pe=new Ct().fromArray(_e),Te=new Ct().fromArray(W);function Pe(V,Ce,ne,Re){let ze=new Uint8Array(4),ct=i.createTexture();i.bindTexture(V,ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<ne;_t++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ce,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Ce+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return ct}let B={};B[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(B[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(i.DEPTH_TEST),l.setFunc(ko),Ee(!1),Le(qc),$(i.CULL_FACE),K(Ri);function $(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function ge(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function me(V,Ce){return f[V]!==Ce?(i.bindFramebuffer(V,Ce),f[V]=Ce,n&&(V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ce),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function w(V,Ce){let ne=x,Re=!1;if(V){ne=p.get(Ce),ne===void 0&&(ne=[],p.set(Ce,ne));let ze=V.textures;if(ne.length!==ze.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,_t=ze.length;ct<_t;ct++)ne[ct]=i.COLOR_ATTACHMENT0+ct;ne.length=ze.length,Re=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Re=!0);if(Re)if(t.isWebGL2)i.drawBuffers(ne);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function re(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let ee={[es]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};if(n)ee[Jc]=i.MIN,ee[Kc]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(ee[Jc]=V.MIN_EXT,ee[Kc]=V.MAX_EXT)}let X={[mf]:i.ZERO,[gf]:i.ONE,[xf]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function K(V,Ce,ne,Re,ze,ct,_t,bt,Dt,gt){if(V===Ri){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),V!==uf){if(V!==_||gt!==S){if((y!==es||C!==es)&&(i.blendEquation(i.FUNC_ADD),y=es,C=es),gt)switch(V){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,T=null,P=null,z=null,A.set(0,0,0),M=0,_=V,S=gt}return}ze=ze||Ce,ct=ct||ne,_t=_t||Re,(Ce!==y||ze!==C)&&(i.blendEquationSeparate(ee[Ce],ee[ze]),y=Ce,C=ze),(ne!==v||Re!==T||ct!==P||_t!==z)&&(i.blendFuncSeparate(X[ne],X[Re],X[ct],X[_t]),v=ne,T=Re,P=ct,z=_t),(bt.equals(A)===!1||Dt!==M)&&(i.blendColor(bt.r,bt.g,bt.b,Dt),A.copy(bt),M=Dt),_=V,S=!1}function se(V,Ce){V.side===dn?ge(i.CULL_FACE):$(i.CULL_FACE);let ne=V.side===un;Ce&&(ne=!ne),Ee(ne),V.blending===Ws&&V.transparent===!1?K(Ri):K(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);let Re=V.stencilWrite;c.setTest(Re),Re&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),I(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(V){he!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),he=V)}function Le(V){V!==hf?($(i.CULL_FACE),V!==J&&(V===qc?i.cullFace(i.BACK):V===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),J=V}function Ze(V){V!==N&&(k&&i.lineWidth(V),N=V)}function I(V,Ce,ne){V?($(i.POLYGON_OFFSET_FILL),(F!==Ce||G!==ne)&&(i.polygonOffset(Ce,ne),F=Ce,G=ne)):ge(i.POLYGON_OFFSET_FILL)}function E(V){V?$(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function ue(V){V===void 0&&(V=i.TEXTURE0+Z-1),q!==V&&(i.activeTexture(V),q=V)}function le(V,Ce,ne){ne===void 0&&(q===null?ne=i.TEXTURE0+Z-1:ne=q);let Re=oe[ne];Re===void 0&&(Re={type:void 0,texture:void 0},oe[ne]=Re),(Re.type!==V||Re.texture!==Ce)&&(q!==ne&&(i.activeTexture(ne),q=ne),i.bindTexture(V,Ce||B[V]),Re.type=V,Re.texture=Ce)}function Y(){let V=oe[q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){pe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),pe.copy(V))}function Ve(V){Te.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Te.copy(V))}function U(V,Ce){let ne=d.get(Ce);ne===void 0&&(ne=new WeakMap,d.set(Ce,ne));let Re=ne.get(V);Re===void 0&&(Re=i.getUniformBlockIndex(Ce,V.name),ne.set(V,Re))}function ve(V,Ce){let Re=d.get(Ce).get(V);h.get(Ce)!==Re&&(i.uniformBlockBinding(Ce,Re,V.__bindingPointIndex),h.set(Ce,Re))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,oe={},f={},p=new WeakMap,x=[],m=null,g=!1,_=null,y=null,v=null,T=null,C=null,P=null,z=null,A=new Qe(0,0,0),M=0,S=!1,he=null,J=null,N=null,F=null,G=null,pe.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:ge,bindFramebuffer:me,drawBuffers:w,useProgram:re,setBlending:K,setMaterial:se,setFlipSided:Ee,setCullFace:Le,setLineWidth:Ze,setPolygonOffset:I,setScissorTest:E,activeTexture:ue,bindTexture:le,unbindTexture:Y,compressedTexImage2D:te,compressedTexImage3D:Ae,texImage2D:Je,texImage3D:He,updateUBOMapping:U,uniformBlockBinding:ve,texStorage2D:we,texStorage3D:yt,texSubImage2D:De,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Ye,scissor:Fe,viewport:Ve,reset:Ge}}function cx(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return p?new OffscreenCanvas(I,E):Vo("canvas")}function m(I,E,ue,le){let Y=1,te=Ze(I);if((te.width>le||te.height>le)&&(Y=le/Math.max(te.width,te.height)),Y<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Ae=E?Go:Math.floor,De=Ae(Y*te.width),ye=Ae(Y*te.height);u===void 0&&(u=x(De,ye));let be=ue?x(De,ye):u;return be.width=De,be.height=ye,be.getContext("2d").drawImage(I,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+De+"x"+ye+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function g(I){let E=Ze(I);return Ml(E.width)&&Ml(E.height)}function _(I){return a?!1:I.wrapS!==Qt||I.wrapT!==Qt||I.minFilter!==jt&&I.minFilter!==vn}function y(I,E){return I.generateMipmaps&&E&&I.minFilter!==jt&&I.minFilter!==vn}function v(I){i.generateMipmap(I)}function T(I,E,ue,le,Y=!1){if(a===!1)return E;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=E;if(E===i.RED&&(ue===i.FLOAT&&(te=i.R32F),ue===i.HALF_FLOAT&&(te=i.R16F),ue===i.UNSIGNED_BYTE&&(te=i.R8)),E===i.RED_INTEGER&&(ue===i.UNSIGNED_BYTE&&(te=i.R8UI),ue===i.UNSIGNED_SHORT&&(te=i.R16UI),ue===i.UNSIGNED_INT&&(te=i.R32UI),ue===i.BYTE&&(te=i.R8I),ue===i.SHORT&&(te=i.R16I),ue===i.INT&&(te=i.R32I)),E===i.RG&&(ue===i.FLOAT&&(te=i.RG32F),ue===i.HALF_FLOAT&&(te=i.RG16F),ue===i.UNSIGNED_BYTE&&(te=i.RG8)),E===i.RG_INTEGER&&(ue===i.UNSIGNED_BYTE&&(te=i.RG8UI),ue===i.UNSIGNED_SHORT&&(te=i.RG16UI),ue===i.UNSIGNED_INT&&(te=i.RG32UI),ue===i.BYTE&&(te=i.RG8I),ue===i.SHORT&&(te=i.RG16I),ue===i.INT&&(te=i.RG32I)),E===i.RGBA){let Ae=Y?Oo:Mt.getTransfer(le);ue===i.FLOAT&&(te=i.RGBA32F),ue===i.HALF_FLOAT&&(te=i.RGBA16F),ue===i.UNSIGNED_BYTE&&(te=Ae===Tt?i.SRGB8_ALPHA8:i.RGBA8),ue===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),ue===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(I,E,ue){return y(I,ue)===!0||I.isFramebufferTexture&&I.minFilter!==jt&&I.minFilter!==vn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function P(I){return I===jt||I===jc||I===xr?i.NEAREST:i.LINEAR}function z(I){let E=I.target;E.removeEventListener("dispose",z),M(E),E.isVideoTexture&&d.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),he(E)}function M(I){let E=n.get(I);if(E.__webglInit===void 0)return;let ue=I.source,le=f.get(ue);if(le){let Y=le[E.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(I),Object.keys(le).length===0&&f.delete(ue)}n.remove(I)}function S(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let ue=I.source,le=f.get(ue);delete le[E.__cacheKey],o.memory.textures--}function he(I){let E=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let Y=0;Y<E.__webglFramebuffer[le].length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[le][Y]);else i.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)i.deleteFramebuffer(E.__webglFramebuffer[le]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ue=I.textures;for(let le=0,Y=ue.length;le<Y;le++){let te=n.get(ue[le]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(ue[le])}n.remove(I)}let J=0;function N(){J=0}function F(){let I=J;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),J+=1,I}function G(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Z(I,E){let ue=n.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.version>0&&ue.__version!==I.version){let le=I.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ue,I,E);return}}t.bindTexture(i.TEXTURE_2D,ue.__webglTexture,i.TEXTURE0+E)}function k(I,E){let ue=n.get(I);if(I.version>0&&ue.__version!==I.version){Te(ue,I,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ue.__webglTexture,i.TEXTURE0+E)}function b(I,E){let ue=n.get(I);if(I.version>0&&ue.__version!==I.version){Te(ue,I,E);return}t.bindTexture(i.TEXTURE_3D,ue.__webglTexture,i.TEXTURE0+E)}function H(I,E){let ue=n.get(I);if(I.version>0&&ue.__version!==I.version){Pe(ue,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture,i.TEXTURE0+E)}let q={[rs]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},oe={[jt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},_e={[jf]:i.NEVER,[s0]:i.ALWAYS,[Qf]:i.LESS,[Od]:i.LEQUAL,[e0]:i.EQUAL,[i0]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function W(I,E,ue){if(E.type===ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vn||E.magFilter===La||E.magFilter===xr||E.magFilter===ns||E.minFilter===vn||E.minFilter===La||E.minFilter===xr||E.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ue?(i.texParameteri(I,i.TEXTURE_WRAP_S,q[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,oe[E.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Qt||E.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,P(E.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==jt&&E.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==xr&&E.minFilter!==ns||E.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let le=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pe(I,E){let ue=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",z));let le=E.source,Y=f.get(le);Y===void 0&&(Y={},f.set(le,Y));let te=G(E);if(te!==I.__cacheKey){Y[te]===void 0&&(Y[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ue=!0),Y[te].usedTimes++;let Ae=Y[I.__cacheKey];Ae!==void 0&&(Y[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(E)),I.__cacheKey=te,I.__webglTexture=Y[te].texture}return ue}function Te(I,E,ue){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);let Y=pe(I,E),te=E.source;t.bindTexture(le,I.__webglTexture,i.TEXTURE0+ue);let Ae=n.get(te);if(te.version!==Ae.__version||Y===!0){t.activeTexture(i.TEXTURE0+ue);let De=Mt.getPrimaries(Mt.workingColorSpace),ye=E.colorSpace===Ti?null:Mt.getPrimaries(E.colorSpace),be=E.colorSpace===Ti||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ye=_(E)&&g(E.image)===!1,we=m(E.image,Ye,!1,s.maxTextureSize);we=Le(E,we);let yt=g(we)||a,Je=r.convert(E.format,E.colorSpace),He=r.convert(E.type),Fe=T(E.internalFormat,Je,He,E.colorSpace,E.isVideoTexture);W(le,E,yt);let Ve,U=E.mipmaps,ve=a&&E.isVideoTexture!==!0&&Fe!==kd,Ge=Ae.__version===void 0||Y===!0,V=te.dataReady,Ce=C(E,we,yt);if(E.isDepthTexture)Fe=i.DEPTH_COMPONENT,a?E.type===ii?Fe=i.DEPTH_COMPONENT32F:E.type===Ai?Fe=i.DEPTH_COMPONENT24:E.type===is?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:E.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ss&&Fe===i.DEPTH_COMPONENT&&E.type!==oc&&E.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ai,He=r.convert(E.type)),E.format===$s&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,E.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=is,He=r.convert(E.type))),Ge&&(ve?t.texStorage2D(i.TEXTURE_2D,1,Fe,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,Fe,we.width,we.height,0,Je,He,null));else if(E.isDataTexture)if(U.length>0&&yt){ve&&Ge&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,U[0].width,U[0].height);for(let ne=0,Re=U.length;ne<Re;ne++)Ve=U[ne],ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ve.width,Ve.height,Je,He,Ve.data):t.texImage2D(i.TEXTURE_2D,ne,Fe,Ve.width,Ve.height,0,Je,He,Ve.data);E.generateMipmaps=!1}else ve?(Ge&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,we.width,we.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,Je,He,we.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,we.width,we.height,0,Je,He,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,U[0].width,U[0].height,we.depth);for(let ne=0,Re=U.length;ne<Re;ne++)Ve=U[ne],E.format!==Jn?Je!==null?ve?V&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ve.width,Ve.height,we.depth,Je,Ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Fe,Ve.width,Ve.height,we.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ve.width,Ve.height,we.depth,Je,He,Ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Fe,Ve.width,Ve.height,we.depth,0,Je,He,Ve.data)}else{ve&&Ge&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,U[0].width,U[0].height);for(let ne=0,Re=U.length;ne<Re;ne++)Ve=U[ne],E.format!==Jn?Je!==null?ve?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ve.width,Ve.height,Je,Ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Fe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ve.width,Ve.height,Je,He,Ve.data):t.texImage2D(i.TEXTURE_2D,ne,Fe,Ve.width,Ve.height,0,Je,He,Ve.data)}else if(E.isDataArrayTexture)ve?(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,we.width,we.height,we.depth),V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Je,He,we.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,we.width,we.height,we.depth,0,Je,He,we.data);else if(E.isData3DTexture)ve?(Ge&&t.texStorage3D(i.TEXTURE_3D,Ce,Fe,we.width,we.height,we.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Je,He,we.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,we.width,we.height,we.depth,0,Je,He,we.data);else if(E.isFramebufferTexture){if(Ge)if(ve)t.texStorage2D(i.TEXTURE_2D,Ce,Fe,we.width,we.height);else{let ne=we.width,Re=we.height;for(let ze=0;ze<Ce;ze++)t.texImage2D(i.TEXTURE_2D,ze,Fe,ne,Re,0,Je,He,null),ne>>=1,Re>>=1}}else if(U.length>0&&yt){if(ve&&Ge){let ne=Ze(U[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Fe,ne.width,ne.height)}for(let ne=0,Re=U.length;ne<Re;ne++)Ve=U[ne],ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Je,He,Ve):t.texImage2D(i.TEXTURE_2D,ne,Fe,Je,He,Ve);E.generateMipmaps=!1}else if(ve){if(Ge){let ne=Ze(we);t.texStorage2D(i.TEXTURE_2D,Ce,Fe,ne.width,ne.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,He,we)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Je,He,we);y(E,yt)&&v(le),Ae.__version=te.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Pe(I,E,ue){if(E.image.length!==6)return;let le=pe(I,E),Y=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ue);let te=n.get(Y);if(Y.version!==te.__version||le===!0){t.activeTexture(i.TEXTURE0+ue);let Ae=Mt.getPrimaries(Mt.workingColorSpace),De=E.colorSpace===Ti?null:Mt.getPrimaries(E.colorSpace),ye=E.colorSpace===Ti||Ae===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let be=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,we=[];for(let ne=0;ne<6;ne++)!be&&!Ye?we[ne]=m(E.image[ne],!1,!0,s.maxCubemapSize):we[ne]=Ye?E.image[ne].image:E.image[ne],we[ne]=Le(E,we[ne]);let yt=we[0],Je=g(yt)||a,He=r.convert(E.format,E.colorSpace),Fe=r.convert(E.type),Ve=T(E.internalFormat,He,Fe,E.colorSpace),U=a&&E.isVideoTexture!==!0,ve=te.__version===void 0||le===!0,Ge=Y.dataReady,V=C(E,yt,Je);W(i.TEXTURE_CUBE_MAP,E,Je);let Ce;if(be){U&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ve,yt.width,yt.height);for(let ne=0;ne<6;ne++){Ce=we[ne].mipmaps;for(let Re=0;Re<Ce.length;Re++){let ze=Ce[Re];E.format!==Jn?He!==null?U?Ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ze.width,ze.height,He,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ze.width,ze.height,He,Fe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ve,ze.width,ze.height,0,He,Fe,ze.data)}}}else{if(Ce=E.mipmaps,U&&ve){Ce.length>0&&V++;let ne=Ze(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ye){U?Ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we[ne].width,we[ne].height,He,Fe,we[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,we[ne].width,we[ne].height,0,He,Fe,we[ne].data);for(let Re=0;Re<Ce.length;Re++){let ct=Ce[Re].image[ne].image;U?Ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ct.width,ct.height,He,Fe,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ve,ct.width,ct.height,0,He,Fe,ct.data)}}else{U?Ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,Fe,we[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,He,Fe,we[ne]);for(let Re=0;Re<Ce.length;Re++){let ze=Ce[Re];U?Ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,He,Fe,ze.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ve,He,Fe,ze.image[ne])}}}y(E,Je)&&v(i.TEXTURE_CUBE_MAP),te.__version=Y.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function B(I,E,ue,le,Y,te){let Ae=r.convert(ue.format,ue.colorSpace),De=r.convert(ue.type),ye=T(ue.internalFormat,Ae,De,ue.colorSpace);if(!n.get(E).__hasExternalTextures){let Ye=Math.max(1,E.width>>te),we=Math.max(1,E.height>>te);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,te,ye,Ye,we,E.depth,0,Ae,De,null):t.texImage2D(Y,te,ye,Ye,we,0,Ae,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),se(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,Y,n.get(ue).__webglTexture,0,K(E)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,Y,n.get(ue).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(I,E,ue){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let le=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ue||se(E)){let Y=E.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ii?le=i.DEPTH_COMPONENT32F:Y.type===Ai&&(le=i.DEPTH_COMPONENT24));let te=K(E);se(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,le,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,le,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){let le=K(E);ue&&se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,E.width,E.height):se(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{let le=E.textures;for(let Y=0;Y<le.length;Y++){let te=le[Y],Ae=r.convert(te.format,te.colorSpace),De=r.convert(te.type),ye=T(te.internalFormat,Ae,De,te.colorSpace),be=K(E);ue&&se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,E.width,E.height):se(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);let le=n.get(E.depthTexture).__webglTexture,Y=K(E);if(E.depthTexture.format===ss)se(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(E.depthTexture.format===$s)se(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function me(I){let E=n.get(I),ue=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(ue)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,I)}else if(ue){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=i.createRenderbuffer(),$(E.__webglDepthbuffer[le],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),$(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function w(I,E,ue){let le=n.get(I);E!==void 0&&B(le.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ue!==void 0&&me(I)}function re(I){let E=I.texture,ue=n.get(I),le=n.get(E);I.addEventListener("dispose",A);let Y=I.textures,te=I.isWebGLCubeRenderTarget===!0,Ae=Y.length>1,De=g(I)||a;if(Ae||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,o.memory.textures++),te){ue.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&E.mipmaps&&E.mipmaps.length>0){ue.__webglFramebuffer[ye]=[];for(let be=0;be<E.mipmaps.length;be++)ue.__webglFramebuffer[ye][be]=i.createFramebuffer()}else ue.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){ue.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ue.__webglFramebuffer[ye]=i.createFramebuffer()}else ue.__webglFramebuffer=i.createFramebuffer();if(Ae)if(s.drawBuffers)for(let ye=0,be=Y.length;ye<be;ye++){let Ye=n.get(Y[ye]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&se(I)===!1){ue.__webglMultisampledFramebuffer=i.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let ye=0;ye<Y.length;ye++){let be=Y[ye];ue.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);let Ye=r.convert(be.format,be.colorSpace),we=r.convert(be.type),yt=T(be.internalFormat,Ye,we,be.colorSpace,I.isXRRenderTarget===!0),Je=K(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,yt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ue.__webglDepthRenderbuffer=i.createRenderbuffer(),$(ue.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,De);for(let ye=0;ye<6;ye++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)B(ue.__webglFramebuffer[ye][be],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else B(ue.__webglFramebuffer[ye],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(E,De)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ye=0,be=Y.length;ye<be;ye++){let Ye=Y[ye],we=n.get(Ye);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),W(i.TEXTURE_2D,Ye,De),B(ue.__webglFramebuffer,I,Ye,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),y(Ye,De)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,le.__webglTexture),W(ye,E,De),a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)B(ue.__webglFramebuffer[be],I,E,i.COLOR_ATTACHMENT0,ye,be);else B(ue.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,ye,0);y(E,De)&&v(ye),t.unbindTexture()}I.depthBuffer&&me(I)}function ee(I){let E=g(I)||a,ue=I.textures;for(let le=0,Y=ue.length;le<Y;le++){let te=ue[le];if(y(te,E)){let Ae=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(te).__webglTexture;t.bindTexture(Ae,De),v(Ae),t.unbindTexture()}}}function X(I){if(a&&I.samples>0&&se(I)===!1){let E=I.textures,ue=I.width,le=I.height,Y=i.COLOR_BUFFER_BIT,te=[],Ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),ye=E.length>1;if(ye)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let be=0;be<E.length;be++){te.push(i.COLOR_ATTACHMENT0+be),I.depthBuffer&&te.push(Ae);let Ye=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(Ye===!1&&(I.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),ye){let we=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,ue,le,0,0,ue,le,Y,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);let Ye=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function K(I){return Math.min(s.maxSamples,I.samples)}function se(I){let E=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(I){let E=o.render.frame;d.get(I)!==E&&(d.set(I,E),I.update())}function Le(I,E){let ue=I.colorSpace,le=I.format,Y=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===vl||ue!==ki&&ue!==Ti&&(Mt.getTransfer(ue)===Tt?a===!1?e.has("EXT_sRGB")===!0&&le===Jn?(I.format=vl,I.minFilter=vn,I.generateMipmaps=!1):E=Wo.sRGBToLinear(E):(le!==Jn||Y!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ue)),E}function Ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=b,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=B,this.useMultisampledRTT=se}function hx(i,e,t){let n=t.isWebGL2;function s(r,o=Ti){let a,l=Mt.getTransfer(o);if(r===Pi)return i.UNSIGNED_BYTE;if(r===Cd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vf)return i.BYTE;if(r===Wf)return i.SHORT;if(r===oc)return i.UNSIGNED_SHORT;if(r===Rd)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===ii)return i.FLOAT;if(r===Ir)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xf)return i.ALPHA;if(r===Jn)return i.RGBA;if(r===Yf)return i.LUMINANCE;if(r===qf)return i.LUMINANCE_ALPHA;if(r===ss)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===vl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Id)return i.RED;if(r===Ld)return i.RED_INTEGER;if(r===Zf)return i.RG;if(r===Nd)return i.RG_INTEGER;if(r===Dd)return i.RGBA_INTEGER;if(r===Na||r===Da||r===ka||r===Ua)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qc||r===eh||r===th||r===nh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Qc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ih||r===sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ih)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===dh||r===uh||r===fh||r===ph||r===mh||r===gh||r===xh||r===yh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===za||r===_h||r===vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===za)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$f||r===Mh||r===bh||r===Eh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===za)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Nl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Me=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},dx={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ux=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new bn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new ri({extensions:{fragDepth:!0},vertexShader:ux,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Se(new Li(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},kl=class extends si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=new Dl,m=t.getContextAttributes(),g=null,_=null,y=[],v=[],T=new xe,C=null,P=new hn;P.layers.enable(1),P.viewport=new Ct;let z=new hn;z.layers.enable(2),z.viewport=new Ct;let A=[P,z],M=new Nl;M.layers.enable(1),M.layers.enable(2);let S=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let pe=y[W];return pe===void 0&&(pe=new Ar,y[W]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(W){let pe=y[W];return pe===void 0&&(pe=new Ar,y[W]=pe),pe.getGripSpace()},this.getHand=function(W){let pe=y[W];return pe===void 0&&(pe=new Ar,y[W]=pe),pe.getHandSpace()};function J(W){let pe=v.indexOf(W.inputSource);if(pe===-1)return;let Te=y[pe];Te!==void 0&&(Te.update(W.inputSource,W.frame,c||o),Te.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let W=0;W<y.length;W++){let pe=v[W];pe!==null&&(v[W]=null,y[W].disconnect(pe))}S=null,he=null,x.reset(),e.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let pe={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mi(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,Te=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?$s:ss,Te=m.stencil?is:Ai);let B={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(B),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new mi(u.textureWidth,u.textureHeight,{format:Jn,type:Pi,depthTexture:new Qo(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let $=e.properties.get(_);$.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(W){for(let pe=0;pe<W.removed.length;pe++){let Te=W.removed[pe],Pe=v.indexOf(Te);Pe>=0&&(v[Pe]=null,y[Pe].disconnect(Te))}for(let pe=0;pe<W.added.length;pe++){let Te=W.added[pe],Pe=v.indexOf(Te);if(Pe===-1){for(let $=0;$<y.length;$++)if($>=v.length){v.push(Te),Pe=$;break}else if(v[$]===null){v[$]=Te,Pe=$;break}if(Pe===-1)break}let B=y[Pe];B&&B.connect(Te)}}let G=new L,Z=new L;function k(W,pe,Te){G.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(Te.matrixWorld);let Pe=G.distanceTo(Z),B=pe.projectionMatrix.elements,$=Te.projectionMatrix.elements,ge=B[14]/(B[10]-1),me=B[14]/(B[10]+1),w=(B[9]+1)/B[5],re=(B[9]-1)/B[5],ee=(B[8]-1)/B[0],X=($[8]+1)/$[0],K=ge*ee,se=ge*X,Ee=Pe/(-ee+X),Le=Ee*-ee;pe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let Ze=ge+Ee,I=me+Ee,E=K-Le,ue=se+(Pe-Le),le=w*me/I*Ze,Y=re*me/I*Ze;W.projectionMatrix.makePerspective(E,ue,le,Y,Ze,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function b(W,pe){pe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(pe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),M.near=z.near=P.near=W.near,M.far=z.far=P.far=W.far,(S!==M.near||he!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,he=M.far,P.near=S,P.far=he,z.near=S,z.far=he,P.updateProjectionMatrix(),z.updateProjectionMatrix(),W.updateProjectionMatrix());let pe=W.parent,Te=M.cameras;b(M,pe);for(let Pe=0;Pe<Te.length;Pe++)b(Te[Pe],pe);Te.length===2?k(M,P,z):M.projectionMatrix.copy(P.projectionMatrix),H(W,M,pe)};function H(W,pe,Te){Te===null?W.matrix.copy(pe.matrixWorld):(W.matrix.copy(Te.matrixWorld),W.matrix.invert(),W.matrix.multiply(pe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(pe.projectionMatrix),W.projectionMatrixInverse.copy(pe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let q=null;function oe(W,pe){if(h=pe.getViewerPose(c||o),p=pe,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Pe=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,Pe=!0);for(let $=0;$<Te.length;$++){let ge=Te[$],me=null;if(f!==null)me=f.getViewport(ge);else{let re=d.getViewSubImage(u,ge);me=re.viewport,$===0&&(e.setRenderTargetTextures(_,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(_))}let w=A[$];w===void 0&&(w=new hn,w.layers.enable($),w.viewport=new Ct,A[$]=w),w.matrix.fromArray(ge.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(ge.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(me.x,me.y,me.width,me.height),$===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Pe===!0&&M.cameras.push(w)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")){let $=d.getDepthInformation(Te[0]);$&&$.isValid&&$.texture&&x.init(e,$,s.renderState)}}for(let Te=0;Te<y.length;Te++){let Pe=v[Te],B=y[Te];Pe!==null&&B!==void 0&&B.update(Pe,pe,c||o)}x.render(e,M),q&&q(W,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),p=null}let _e=new Gd;_e.setAnimationLoop(oe),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},ji=new Fn,px=new xt;function mx(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,y,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),y=_.envMap,v=_.envMapRotation;if(y&&(m.envMap.value=y,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(ji)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;let T=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*T,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(p(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let T=y.program;n.updateUBOMapping(_,T);let C=e.render.frame;r[_.id]!==C&&(u(_),r[_.id]=C)}function h(_){let y=d();_.__bindingPointIndex=y;let v=i.createBuffer(),T=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],v=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,P=v.length;C<P;C++){let z=Array.isArray(v[C])?v[C]:[v[C]];for(let A=0,M=z.length;A<M;A++){let S=z[A];if(f(S,C,A,T)===!0){let he=S.__offset,J=Array.isArray(S.value)?S.value:[S.value],N=0;for(let F=0;F<J.length;F++){let G=J[F],Z=x(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,he+N,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,he,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,T){let C=_.value,P=y+"_"+v;if(T[P]===void 0)return typeof C=="number"||typeof C=="boolean"?T[P]=C:T[P]=C.clone(),!0;{let z=T[P];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return T[P]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function p(_){let y=_.uniforms,v=0,T=16;for(let P=0,z=y.length;P<z;P++){let A=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,S=A.length;M<S;M++){let he=A[M],J=Array.isArray(he.value)?he.value:[he.value];for(let N=0,F=J.length;N<F;N++){let G=J[N],Z=x(G),k=v%T;k!==0&&T-k<Z.boundary&&(v+=T-k),he.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=v,v+=Z.storage}}}let C=v%T;return C>0&&(v+=T-C),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var kr=class{constructor(e={}){let{canvas:t=_0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),p=new Int32Array(4),x=null,m=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;let y=this,v=!1,T=0,C=0,P=null,z=-1,A=null,M=new Ct,S=new Ct,he=null,J=new Qe(0),N=0,F=t.width,G=t.height,Z=1,k=null,b=null,H=new Ct(0,0,F,G),q=new Ct(0,0,F,G),oe=!1,_e=new Dr,W=!1,pe=!1,Te=null,Pe=new xt,B=new xe,$=new L,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return P===null?Z:1}let w=n;function re(R,Q){for(let ae=0;ae<R.length;ae++){let de=R[ae],ie=t.getContext(de,Q);if(ie!==null)return ie}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),w===null){let Q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Q.shift(),w=re(Q,R),w===null)throw re(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,X,K,se,Ee,Le,Ze,I,E,ue,le,Y,te,Ae,De,ye,be,Ye,we,yt,Je,He,Fe,Ve;function U(){ee=new Lg(w),X=new Tg(w,ee,e),ee.init(X),He=new hx(w,ee,X),K=new lx(w,ee,X),se=new kg(w),Ee=new J1,Le=new cx(w,ee,K,Ee,X,He,se),Ze=new Rg(y),I=new Ig(y),E=new B0(w,X),Fe=new wg(w,ee,E,X),ue=new Ng(w,E,se,Fe),le=new Fg(w,ue,E,se),we=new Og(w,X,Le),ye=new Ag(Ee),Y=new $1(y,Ze,I,ee,X,Fe,ye),te=new mx(y,Ee),Ae=new j1,De=new sx(ee,X),Ye=new Eg(y,Ze,I,K,le,u,l),be=new ax(y,le,X),Ve=new gx(w,se,X,K),yt=new Sg(w,ee,se,X),Je=new Dg(w,ee,se,X),se.programs=Y.programs,y.capabilities=X,y.extensions=ee,y.properties=Ee,y.renderLists=Ae,y.shadowMap=be,y.state=K,y.info=se}U();let ve=new kl(y,w);this.xr=ve,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(F,G,!1))},this.getSize=function(R){return R.set(F,G)},this.setSize=function(R,Q,ae=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,G=Q,t.width=Math.floor(R*Z),t.height=Math.floor(Q*Z),ae===!0&&(t.style.width=R+"px",t.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(F*Z,G*Z).floor()},this.setDrawingBufferSize=function(R,Q,ae){F=R,G=Q,Z=ae,t.width=Math.floor(R*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,Q,ae,de){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,Q,ae,de),K.viewport(M.copy(H).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,Q,ae,de){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,Q,ae,de),K.scissor(S.copy(q).multiplyScalar(Z).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(R){K.setScissorTest(oe=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){b=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(R=!0,Q=!0,ae=!0){let de=0;if(R){let ie=!1;if(P!==null){let Be=P.texture.format;ie=Be===Dd||Be===Nd||Be===Ld}if(ie){let Be=P.texture.type,qe=Be===Pi||Be===Ai||Be===oc||Be===is||Be===Cd||Be===Pd,Ke=Ye.getClearColor(),je=Ye.getClearAlpha(),lt=Ke.r,et=Ke.g,tt=Ke.b;qe?(f[0]=lt,f[1]=et,f[2]=tt,f[3]=je,w.clearBufferuiv(w.COLOR,0,f)):(p[0]=lt,p[1]=et,p[2]=tt,p[3]=je,w.clearBufferiv(w.COLOR,0,p))}else de|=w.COLOR_BUFFER_BIT}Q&&(de|=w.DEPTH_BUFFER_BIT),ae&&(de|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ae.dispose(),De.dispose(),Ee.dispose(),Ze.dispose(),I.dispose(),le.dispose(),Fe.dispose(),Ve.dispose(),Y.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Dt),ve.removeEventListener("sessionend",gt),Te&&(Te.dispose(),Te=null),St.stop()};function Ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let R=se.autoReset,Q=be.enabled,ae=be.autoUpdate,de=be.needsUpdate,ie=be.type;U(),se.autoReset=R,be.enabled=Q,be.autoUpdate=ae,be.needsUpdate=de,be.type=ie}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){let Q=R.target;Q.removeEventListener("dispose",ne),Re(Q)}function Re(R){ze(R),Ee.remove(R)}function ze(R){let Q=Ee.get(R).programs;Q!==void 0&&(Q.forEach(function(ae){Y.releaseProgram(ae)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ae,de,ie,Be){Q===null&&(Q=ge);let qe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ke=of(R,Q,ae,de,ie);K.setMaterial(de,qe);let je=ae.index,lt=1;if(de.wireframe===!0){if(je=ue.getWireframeAttribute(ae),je===void 0)return;lt=2}let et=ae.drawRange,tt=ae.attributes.position,zt=et.start*lt,An=(et.start+et.count)*lt;Be!==null&&(zt=Math.max(zt,Be.start*lt),An=Math.min(An,(Be.start+Be.count)*lt)),je!==null?(zt=Math.max(zt,0),An=Math.min(An,je.count)):tt!=null&&(zt=Math.max(zt,0),An=Math.min(An,tt.count));let Zt=An-zt;if(Zt<0||Zt===1/0)return;Fe.setup(ie,de,Ke,ae,je);let ai,Lt=yt;if(je!==null&&(ai=E.get(je),Lt=Je,Lt.setIndex(ai)),ie.isMesh)de.wireframe===!0?(K.setLineWidth(de.wireframeLinewidth*me()),Lt.setMode(w.LINES)):Lt.setMode(w.TRIANGLES);else if(ie.isLine){let nt=de.linewidth;nt===void 0&&(nt=1),K.setLineWidth(nt*me()),ie.isLineSegments?Lt.setMode(w.LINES):ie.isLineLoop?Lt.setMode(w.LINE_LOOP):Lt.setMode(w.LINE_STRIP)}else ie.isPoints?Lt.setMode(w.POINTS):ie.isSprite&&Lt.setMode(w.TRIANGLES);if(ie.isBatchedMesh)Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Lt.renderInstances(zt,Zt,ie.count);else if(ae.isInstancedBufferGeometry){let nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ra=Math.min(ae.instanceCount,nt);Lt.renderInstances(zt,Zt,Ra)}else Lt.render(zt,Zt)};function ct(R,Q,ae){R.transparent===!0&&R.side===dn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,ao(R,Q,ae),R.side=Ii,R.needsUpdate=!0,ao(R,Q,ae),R.side=dn):ao(R,Q,ae)}this.compile=function(R,Q,ae=null){ae===null&&(ae=R),m=De.get(ae),m.init(),_.push(m),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),R!==ae&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights(y._useLegacyLights);let de=new Set;return R.traverse(function(ie){let Be=ie.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){let Ke=Be[qe];ct(Ke,ae,ie),de.add(Ke)}else ct(Be,ae,ie),de.add(Be)}),_.pop(),m=null,de},this.compileAsync=function(R,Q,ae=null){let de=this.compile(R,Q,ae);return new Promise(ie=>{function Be(){if(de.forEach(function(qe){Ee.get(qe).currentProgram.isReady()&&de.delete(qe)}),de.size===0){ie(R);return}setTimeout(Be,10)}ee.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let _t=null;function bt(R){_t&&_t(R)}function Dt(){St.stop()}function gt(){St.start()}let St=new Gd;St.setAnimationLoop(bt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(R){_t=R,ve.setAnimationLoop(R),R===null?St.stop():St.start()},ve.addEventListener("sessionstart",Dt),ve.addEventListener("sessionend",gt),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(Q),Q=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,Q,P),m=De.get(R,_.length),m.init(),_.push(m),Pe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),_e.setFromProjectionMatrix(Pe),pe=this.localClippingEnabled,W=ye.init(this.clippingPlanes,pe),x=Ae.get(R,g.length),x.init(),g.push(x),on(R,Q,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(k,b),this.info.render.frame++,W===!0&&ye.beginShadows();let ae=m.state.shadowsArray;if(be.render(ae,R,Q),W===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1)&&Ye.render(x,R),m.setupLights(y._useLegacyLights),Q.isArrayCamera){let de=Q.cameras;for(let ie=0,Be=de.length;ie<Be;ie++){let qe=de[ie];Wi(x,R,qe,qe.viewport)}}else Wi(x,R,Q);P!==null&&(Le.updateMultisampleRenderTarget(P),Le.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(y,R,Q),Fe.resetDefaultState(),z=-1,A=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function on(R,Q,ae,de){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){de&&$.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);let qe=le.update(R),Ke=R.material;Ke.visible&&x.push(R,qe,Ke,ae,$.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){let qe=le.update(R),Ke=R.material;if(de&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$.copy(R.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),$.copy(qe.boundingSphere.center)),$.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ke)){let je=qe.groups;for(let lt=0,et=je.length;lt<et;lt++){let tt=je[lt],zt=Ke[tt.materialIndex];zt&&zt.visible&&x.push(R,qe,zt,ae,$.z,tt)}}else Ke.visible&&x.push(R,qe,Ke,ae,$.z,null)}}let Be=R.children;for(let qe=0,Ke=Be.length;qe<Ke;qe++)on(Be[qe],Q,ae,de)}function Wi(R,Q,ae,de){let ie=R.opaque,Be=R.transmissive,qe=R.transparent;m.setupLightsView(ae),W===!0&&ye.setGlobalState(y.clippingPlanes,ae),Be.length>0&&ro(ie,Be,Q,ae),de&&K.viewport(M.copy(de)),ie.length>0&&oo(ie,Q,ae),Be.length>0&&oo(Be,Q,ae),qe.length>0&&oo(qe,Q,ae),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function ro(R,Q,ae,de){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;let Be=X.isWebGL2;Te===null&&(Te=new mi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Ir:Pi,minFilter:ns,samples:Be?4:0})),y.getDrawingBufferSize(B),Be?Te.setSize(B.x,B.y):Te.setSize(Go(B.x),Go(B.y));let qe=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(J),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let Ke=y.toneMapping;y.toneMapping=Ci,oo(R,ae,de),Le.updateMultisampleRenderTarget(Te),Le.updateRenderTargetMipmap(Te);let je=!1;for(let lt=0,et=Q.length;lt<et;lt++){let tt=Q[lt],zt=tt.object,An=tt.geometry,Zt=tt.material,ai=tt.group;if(Zt.side===dn&&zt.layers.test(de.layers)){let Lt=Zt.side;Zt.side=un,Zt.needsUpdate=!0,Gc(zt,ae,de,An,Zt,ai),Zt.side=Lt,Zt.needsUpdate=!0,je=!0}}je===!0&&(Le.updateMultisampleRenderTarget(Te),Le.updateRenderTargetMipmap(Te)),y.setRenderTarget(qe),y.setClearColor(J,N),y.toneMapping=Ke}function oo(R,Q,ae){let de=Q.isScene===!0?Q.overrideMaterial:null;for(let ie=0,Be=R.length;ie<Be;ie++){let qe=R[ie],Ke=qe.object,je=qe.geometry,lt=de===null?qe.material:de,et=qe.group;Ke.layers.test(ae.layers)&&Gc(Ke,Q,ae,je,lt,et)}}function Gc(R,Q,ae,de,ie,Be){R.onBeforeRender(y,Q,ae,de,ie,Be),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(y,Q,ae,de,R,Be),ie.transparent===!0&&ie.side===dn&&ie.forceSinglePass===!1?(ie.side=un,ie.needsUpdate=!0,y.renderBufferDirect(ae,Q,de,ie,R,Be),ie.side=Ii,ie.needsUpdate=!0,y.renderBufferDirect(ae,Q,de,ie,R,Be),ie.side=dn):y.renderBufferDirect(ae,Q,de,ie,R,Be),R.onAfterRender(y,Q,ae,de,ie,Be)}function ao(R,Q,ae){Q.isScene!==!0&&(Q=ge);let de=Ee.get(R),ie=m.state.lights,Be=m.state.shadowsArray,qe=ie.state.version,Ke=Y.getParameters(R,ie.state,Be,Q,ae),je=Y.getProgramCacheKey(Ke),lt=de.programs;de.environment=R.isMeshStandardMaterial?Q.environment:null,de.fog=Q.fog,de.envMap=(R.isMeshStandardMaterial?I:Ze).get(R.envMap||de.environment),de.envMapRotation=de.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",ne),lt=new Map,de.programs=lt);let et=lt.get(je);if(et!==void 0){if(de.currentProgram===et&&de.lightsStateVersion===qe)return Wc(R,Ke),et}else Ke.uniforms=Y.getUniforms(R),R.onBuild(ae,Ke,y),R.onBeforeCompile(Ke,y),et=Y.acquireProgram(Ke,je),lt.set(je,et),de.uniforms=Ke.uniforms;let tt=de.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=ye.uniform),Wc(R,Ke),de.needsLights=lf(R),de.lightsStateVersion=qe,de.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.directionalShadowMap.value=ie.state.directionalShadowMap,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotShadowMap.value=ie.state.spotShadowMap,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMap.value=ie.state.pointShadowMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),de.currentProgram=et,de.uniformsList=null,et}function Vc(R){if(R.uniformsList===null){let Q=R.currentProgram.getUniforms();R.uniformsList=Ys.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Wc(R,Q){let ae=Ee.get(R);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.instancingMorph=Q.instancingMorph,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function of(R,Q,ae,de,ie){Q.isScene!==!0&&(Q=ge),Le.resetTextureUnits();let Be=Q.fog,qe=de.isMeshStandardMaterial?Q.environment:null,Ke=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,je=(de.isMeshStandardMaterial?I:Ze).get(de.envMap||qe),lt=de.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),tt=!!ae.morphAttributes.position,zt=!!ae.morphAttributes.normal,An=!!ae.morphAttributes.color,Zt=Ci;de.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let ai=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Lt=ai!==void 0?ai.length:0,nt=Ee.get(de),Ra=m.state.lights;if(W===!0&&(pe===!0||R!==A)){let zn=R===A&&de.id===z;ye.setState(de,R,zn)}let At=!1;de.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ra.state.version||nt.outputColorSpace!==Ke||ie.isBatchedMesh&&nt.batching===!1||!ie.isBatchedMesh&&nt.batching===!0||ie.isInstancedMesh&&nt.instancing===!1||!ie.isInstancedMesh&&nt.instancing===!0||ie.isSkinnedMesh&&nt.skinning===!1||!ie.isSkinnedMesh&&nt.skinning===!0||ie.isInstancedMesh&&nt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&nt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&nt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&nt.instancingMorph===!1&&ie.morphTexture!==null||nt.envMap!==je||de.fog===!0&&nt.fog!==Be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ye.numPlanes||nt.numIntersection!==ye.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==et||nt.morphTargets!==tt||nt.morphNormals!==zt||nt.morphColors!==An||nt.toneMapping!==Zt||X.isWebGL2===!0&&nt.morphTargetsCount!==Lt)&&(At=!0):(At=!0,nt.__version=de.version);let Xi=nt.currentProgram;At===!0&&(Xi=ao(de,Q,ie));let Xc=!1,gr=!1,Ca=!1,an=Xi.getUniforms(),Yi=nt.uniforms;if(K.useProgram(Xi.program)&&(Xc=!0,gr=!0,Ca=!0),de.id!==z&&(z=de.id,gr=!0),Xc||A!==R){an.setValue(w,"projectionMatrix",R.projectionMatrix),an.setValue(w,"viewMatrix",R.matrixWorldInverse);let zn=an.map.cameraPosition;zn!==void 0&&zn.setValue(w,$.setFromMatrixPosition(R.matrixWorld)),X.logarithmicDepthBuffer&&an.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&an.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,gr=!0,Ca=!0)}if(ie.isSkinnedMesh){an.setOptional(w,ie,"bindMatrix"),an.setOptional(w,ie,"bindMatrixInverse");let zn=ie.skeleton;zn&&(X.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),an.setValue(w,"boneTexture",zn.boneTexture,Le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(an.setOptional(w,ie,"batchingTexture"),an.setValue(w,"batchingTexture",ie._matricesTexture,Le));let Pa=ae.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&X.isWebGL2===!0)&&we.update(ie,ae,Xi),(gr||nt.receiveShadow!==ie.receiveShadow)&&(nt.receiveShadow=ie.receiveShadow,an.setValue(w,"receiveShadow",ie.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Yi.envMap.value=je,Yi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),gr&&(an.setValue(w,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&af(Yi,Ca),Be&&de.fog===!0&&te.refreshFogUniforms(Yi,Be),te.refreshMaterialUniforms(Yi,de,Z,G,Te),Ys.upload(w,Vc(nt),Yi,Le)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Ys.upload(w,Vc(nt),Yi,Le),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&an.setValue(w,"center",ie.center),an.setValue(w,"modelViewMatrix",ie.modelViewMatrix),an.setValue(w,"normalMatrix",ie.normalMatrix),an.setValue(w,"modelMatrix",ie.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let zn=de.uniformsGroups;for(let Ia=0,cf=zn.length;Ia<cf;Ia++)if(X.isWebGL2){let Yc=zn[Ia];Ve.update(Yc,Xi),Ve.bind(Yc,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function af(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function lf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,Q,ae){Ee.get(R.texture).__webglTexture=Q,Ee.get(R.depthTexture).__webglTexture=ae;let de=Ee.get(R);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ae===void 0,de.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Q){let ae=Ee.get(R);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,ae=0){P=R,T=Q,C=ae;let de=!0,ie=null,Be=!1,qe=!1;if(R){let je=Ee.get(R);je.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(w.FRAMEBUFFER,null),de=!1):je.__webglFramebuffer===void 0?Le.setupRenderTarget(R):je.__hasExternalTextures&&Le.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);let lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(qe=!0);let et=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[Q])?ie=et[Q][ae]:ie=et[Q],Be=!0):X.isWebGL2&&R.samples>0&&Le.useMultisampledRTT(R)===!1?ie=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?ie=et[ae]:ie=et,M.copy(R.viewport),S.copy(R.scissor),he=R.scissorTest}else M.copy(H).multiplyScalar(Z).floor(),S.copy(q).multiplyScalar(Z).floor(),he=oe;if(K.bindFramebuffer(w.FRAMEBUFFER,ie)&&X.drawBuffers&&de&&K.drawBuffers(R,ie),K.viewport(M),K.scissor(S),K.setScissorTest(he),Be){let je=Ee.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+Q,je.__webglTexture,ae)}else if(qe){let je=Ee.get(R.texture),lt=Q||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,lt)}z=-1},this.readRenderTargetPixels=function(R,Q,ae,de,ie,Be,qe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){K.bindFramebuffer(w.FRAMEBUFFER,Ke);try{let je=R.texture,lt=je.format,et=je.type;if(lt!==Jn&&He.convert(lt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=et===Ir&&(ee.has("EXT_color_buffer_half_float")||X.isWebGL2&&ee.has("EXT_color_buffer_float"));if(et!==Pi&&He.convert(et)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===ii&&(X.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-de&&ae>=0&&ae<=R.height-ie&&w.readPixels(Q,ae,de,ie,He.convert(lt),He.convert(et),Be)}finally{let je=P!==null?Ee.get(P).__webglFramebuffer:null;K.bindFramebuffer(w.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(R,Q,ae=0){let de=Math.pow(2,-ae),ie=Math.floor(Q.image.width*de),Be=Math.floor(Q.image.height*de);Le.setTexture2D(Q,0),w.copyTexSubImage2D(w.TEXTURE_2D,ae,0,0,R.x,R.y,ie,Be),K.unbindTexture()},this.copyTextureToTexture=function(R,Q,ae,de=0){let ie=Q.image.width,Be=Q.image.height,qe=He.convert(ae.format),Ke=He.convert(ae.type);Le.setTexture2D(ae,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ae.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ae.unpackAlignment),Q.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,de,R.x,R.y,ie,Be,qe,Ke,Q.image.data):Q.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,de,R.x,R.y,Q.mipmaps[0].width,Q.mipmaps[0].height,qe,Q.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,de,R.x,R.y,qe,Ke,Q.image),de===0&&ae.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ae,de,ie=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Be=Math.round(R.max.x-R.min.x),qe=Math.round(R.max.y-R.min.y),Ke=R.max.z-R.min.z+1,je=He.convert(de.format),lt=He.convert(de.type),et;if(de.isData3DTexture)Le.setTexture3D(de,0),et=w.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)Le.setTexture2DArray(de,0),et=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,de.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,de.unpackAlignment);let tt=w.getParameter(w.UNPACK_ROW_LENGTH),zt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),An=w.getParameter(w.UNPACK_SKIP_PIXELS),Zt=w.getParameter(w.UNPACK_SKIP_ROWS),ai=w.getParameter(w.UNPACK_SKIP_IMAGES),Lt=ae.isCompressedTexture?ae.mipmaps[ie]:ae.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Lt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,R.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,R.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,R.min.z),ae.isDataTexture||ae.isData3DTexture?w.texSubImage3D(et,ie,Q.x,Q.y,Q.z,Be,qe,Ke,je,lt,Lt.data):de.isCompressedArrayTexture?w.compressedTexSubImage3D(et,ie,Q.x,Q.y,Q.z,Be,qe,Ke,je,Lt.data):w.texSubImage3D(et,ie,Q.x,Q.y,Q.z,Be,qe,Ke,je,lt,Lt),w.pixelStorei(w.UNPACK_ROW_LENGTH,tt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,zt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,An),w.pixelStorei(w.UNPACK_SKIP_ROWS,Zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ai),ie===0&&de.generateMipmaps&&w.generateMipmap(et),K.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Le.setTextureCube(R,0):R.isData3DTexture?Le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Le.setTexture2DArray(R,0):Le.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,K.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ac?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===ua?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ul=class extends kr{};Ul.prototype.isWebGL1Renderer=!0;var js=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var zl=class extends bn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new xt,gd=new xt,Po=[],xd=new Kn,xx=new xt,br=new Se,Er=new os,Qs=class extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),xd.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Er.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),gd.multiplyMatrices(n,Os),br.matrixWorld=gd,br.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let l=Po[o];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,Id,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends bn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new xe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,l=new xt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ol=class extends zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Io=new L,cl=new hc,hl=new hc,dl=new hc,er=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),cl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),hl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),dl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),dl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(cl.calc(l),hl.calc(l),dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function yx(i,e){let t=1-i;return t*t*e}function _x(i,e){return 2*(1-i)*i*e}function vx(i,e){return i*i*e}function Rr(i,e,t,n){return yx(i,e)+_x(i,t)+vx(i,n)}function Mx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Ex(i,e){return 3*(1-i)*i*i*e}function wx(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return Mx(i,e)+bx(i,t)+Ex(i,n)+wx(i,s)}var na=class extends Hn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends Hn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Hn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Hn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(yd(a,l.x,c.x,h.x,d.x),yd(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:er,CubicBezierCurve:na,CubicBezierCurve3:Fl,EllipseCurve:zr,LineCurve:ia,LineCurve3:Hl,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ra,SplineCurve:oa}),Bl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new aa[s.type]().fromJSON(s))}return this}},tr=class extends Bl{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new sa(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new na(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new zr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cs=class i extends kt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new L,u=new xe,f=new L,p=new L,x=new L,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let y=n+_*h*s,v=Math.sin(y),T=Math.cos(y);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*v,d.y=e[C].y,d.z=e[C].x*T,o.push(d.x,d.y,d.z),u.x=_/t,u.y=C/(e.length-1),a.push(u.x,u.y);let P=l[3*C+0]*v,z=l[3*C+1],A=l[3*C+0]*T;c.push(P,z,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,T=v,C=v+e.length,P=v+e.length+1,z=v+1;r.push(T,C,z),r.push(P,z,C)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ni=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pt=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function _(){let v=new L,T=new L,C=0,P=(t-e)/n;for(let z=0;z<=r;z++){let A=[],M=z/r,S=M*(t-e)+e;for(let he=0;he<=s;he++){let J=he/s,N=J*l+a,F=Math.sin(N),G=Math.cos(N);T.x=S*F,T.y=-M*n+m,T.z=S*G,d.push(T.x,T.y,T.z),v.set(F,P,G).normalize(),u.push(v.x,v.y,v.z),f.push(J,1-M),A.push(p++)}x.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let M=x[A][z],S=x[A+1][z],he=x[A+1][z+1],J=x[A][z+1];h.push(M,S,J),h.push(S,he,J),C+=6}c.addGroup(g,C,0),g+=C}function y(v){let T=p,C=new xe,P=new L,z=0,A=v===!0?e:t,M=v===!0?1:-1;for(let he=1;he<=s;he++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),p++;let S=p;for(let he=0;he<=s;he++){let N=he/s*l+a,F=Math.cos(N),G=Math.sin(N);P.x=A*G,P.y=m*M,P.z=A*F,d.push(P.x,P.y,P.z),u.push(0,M,0),C.x=F*.5+.5,C.y=G*.5*M+.5,f.push(C.x,C.y),p++}for(let he=0;he<s;he++){let J=T+he,N=S+he;v===!0?h.push(N,N+1,J):h.push(N+1,N,J),z+=3}c.addGroup(g,z,v===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},la=class i extends Pt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gl=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,v=new L,T=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],v),f(t[C+2],T),l(y,v,T,_)}function l(_,y,v,T){let C=T+1,P=[];for(let z=0;z<=C;z++){P[z]=[];let A=_.clone().lerp(v,z/C),M=y.clone().lerp(v,z/C),S=C-z;for(let he=0;he<=S;he++)he===0&&z===C?P[z][he]=A:P[z][he]=A.clone().lerp(M,he/S)}for(let z=0;z<C;z++)for(let A=0;A<2*(C-z)-1;A++){let M=Math.floor(A/2);A%2===0?(u(P[z][M+1]),u(P[z+1][M]),u(P[z][M])):(u(P[z][M+1]),u(P[z+1][M+1]),u(P[z+1][M]))}}function c(_){let y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,T=g(_)/Math.PI+.5;o.push(v,1-T)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],T=o[_+4],C=Math.max(y,v,T),P=Math.min(y,v,T);C>.9&&P<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let _=new L,y=new L,v=new L,T=new L,C=new xe,P=new xe,z=new xe;for(let A=0,M=0;A<r.length;A+=9,M+=6){_.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),C.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),z.set(o[M+4],o[M+5]),T.copy(_).add(y).add(v).divideScalar(3);let S=m(T);x(C,M+0,_,S),x(P,M+2,y,S),x(z,M+4,v,S)}}function x(_,y,v,T){T<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var en=class extends tr{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new tr().fromJSON(s))}return this}},Sx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=Px(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let p=t;p<s;p+=t)d=i[p],u=i[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Or(r,o,t,a,l,f,0),o}};function Zd(i,e,t,n,s){let r,o;if(s===Bx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=_d(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=_d(r,i[r],i[r+1],o);return o&&pa(o,o.next)&&(Hr(o),o=o.next),o}function hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pa(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(i,e,t,n,s,r,o){if(!i)return;!o&&r&&kx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ax(i,n,s,r):Tx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rx(hs(i),e,t),Or(i,e,t,n,s,r,2)):o===2&&Cx(i,e,t,n,s,r):Or(hs(i),e,t,n,s,r,1);break}}}function Tx(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Vs(s,a,r,l,o,c,p.x,p.y)&&Nt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ax(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=Vl(f,p,e,t,n),_=Vl(x,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=g&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,l,d,c,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Vs(a,h,l,d,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,l,d,c,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Vs(a,h,l,d,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!pa(s,r)&&$d(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function Cx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ox(o,a)){let l=Jd(o,a);o=hs(o,o.next),l=hs(l,l.next),Or(o,e,t,n,s,r,0),Or(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Px(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Zd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(zx(c));for(s.sort(Ix),r=0;r<s.length;r++)t=Lx(s[r],t);return t}function Ix(i,e){return i.x-e.x}function Lx(i,e){let t=Nx(i,e);if(!t)return e;let n=Jd(t,i);return hs(n,n.next),hs(t,t.next)}function Nx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Fr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&Dx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function Dx(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function kx(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ux(s)}function Ux(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ox(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fx(i,e)&&(Fr(i,e)&&Fr(e,i)&&Hx(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||pa(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pa(i,e){return i.x===e.x&&i.y===e.y}function $d(i,e,t,n){let s=No(Nt(i,e,t)),r=No(Nt(i,e,n)),o=No(Nt(t,n,i)),a=No(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&Lo(i,t,e)||r===0&&Lo(i,n,e)||o===0&&Lo(t,i,n)||a===0&&Lo(t,e,n))}function Lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function No(i){return i>0?1:i<0?-1:0}function Fx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fr(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Hx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=new Wl(i.i,i.x,i.y),n=new Wl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _d(i,e,t,n){let s=new Wl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Pr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];vd(e),Md(n,e);let o=e.length;t.forEach(vd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Md(n,t[l]);let a=Sx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Md(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var xn=class i extends kt{constructor(e=new en([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Gx,y,v=!1,T,C,P,z;g&&(y=g.getSpacedPoints(h),v=!0,u=!1,T=g.computeFrenetFrames(h,!1),C=new L,P=new L,z=new L),u||(m=0,f=0,p=0,x=0);let A=a.extractPoints(c),M=A.shape,S=A.holes;if(!Pr.isClockWise(M)){M=M.reverse();for(let w=0,re=S.length;w<re;w++){let ee=S[w];Pr.isClockWise(ee)&&(S[w]=ee.reverse())}}let J=Pr.triangulateShape(M,S),N=M;for(let w=0,re=S.length;w<re;w++){let ee=S[w];M=M.concat(ee)}function F(w,re,ee){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(re,ee)}let G=M.length,Z=J.length;function k(w,re,ee){let X,K,se,Ee=w.x-re.x,Le=w.y-re.y,Ze=ee.x-w.x,I=ee.y-w.y,E=Ee*Ee+Le*Le,ue=Ee*I-Le*Ze;if(Math.abs(ue)>Number.EPSILON){let le=Math.sqrt(E),Y=Math.sqrt(Ze*Ze+I*I),te=re.x-Le/le,Ae=re.y+Ee/le,De=ee.x-I/Y,ye=ee.y+Ze/Y,be=((De-te)*I-(ye-Ae)*Ze)/(Ee*I-Le*Ze);X=te+Ee*be-w.x,K=Ae+Le*be-w.y;let Ye=X*X+K*K;if(Ye<=2)return new xe(X,K);se=Math.sqrt(Ye/2)}else{let le=!1;Ee>Number.EPSILON?Ze>Number.EPSILON&&(le=!0):Ee<-Number.EPSILON?Ze<-Number.EPSILON&&(le=!0):Math.sign(Le)===Math.sign(I)&&(le=!0),le?(X=-Le,K=Ee,se=Math.sqrt(E)):(X=Ee,K=Le,se=Math.sqrt(E/2))}return new xe(X/se,K/se)}let b=[];for(let w=0,re=N.length,ee=re-1,X=w+1;w<re;w++,ee++,X++)ee===re&&(ee=0),X===re&&(X=0),b[w]=k(N[w],N[ee],N[X]);let H=[],q,oe=b.concat();for(let w=0,re=S.length;w<re;w++){let ee=S[w];q=[];for(let X=0,K=ee.length,se=K-1,Ee=X+1;X<K;X++,se++,Ee++)se===K&&(se=0),Ee===K&&(Ee=0),q[X]=k(ee[X],ee[se],ee[Ee]);H.push(q),oe=oe.concat(q)}for(let w=0;w<m;w++){let re=w/m,ee=f*Math.cos(re*Math.PI/2),X=p*Math.sin(re*Math.PI/2)+x;for(let K=0,se=N.length;K<se;K++){let Ee=F(N[K],b[K],X);Pe(Ee.x,Ee.y,-ee)}for(let K=0,se=S.length;K<se;K++){let Ee=S[K];q=H[K];for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let I=F(Ee[Le],q[Le],X);Pe(I.x,I.y,-ee)}}}let _e=p+x;for(let w=0;w<G;w++){let re=u?F(M[w],oe[w],_e):M[w];v?(P.copy(T.normals[0]).multiplyScalar(re.x),C.copy(T.binormals[0]).multiplyScalar(re.y),z.copy(y[0]).add(P).add(C),Pe(z.x,z.y,z.z)):Pe(re.x,re.y,0)}for(let w=1;w<=h;w++)for(let re=0;re<G;re++){let ee=u?F(M[re],oe[re],_e):M[re];v?(P.copy(T.normals[w]).multiplyScalar(ee.x),C.copy(T.binormals[w]).multiplyScalar(ee.y),z.copy(y[w]).add(P).add(C),Pe(z.x,z.y,z.z)):Pe(ee.x,ee.y,d/h*w)}for(let w=m-1;w>=0;w--){let re=w/m,ee=f*Math.cos(re*Math.PI/2),X=p*Math.sin(re*Math.PI/2)+x;for(let K=0,se=N.length;K<se;K++){let Ee=F(N[K],b[K],X);Pe(Ee.x,Ee.y,d+ee)}for(let K=0,se=S.length;K<se;K++){let Ee=S[K];q=H[K];for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let I=F(Ee[Le],q[Le],X);v?Pe(I.x,I.y+y[h-1].y,y[h-1].x+ee):Pe(I.x,I.y,d+ee)}}}W(),pe();function W(){let w=s.length/3;if(u){let re=0,ee=G*re;for(let X=0;X<Z;X++){let K=J[X];B(K[2]+ee,K[1]+ee,K[0]+ee)}re=h+m*2,ee=G*re;for(let X=0;X<Z;X++){let K=J[X];B(K[0]+ee,K[1]+ee,K[2]+ee)}}else{for(let re=0;re<Z;re++){let ee=J[re];B(ee[2],ee[1],ee[0])}for(let re=0;re<Z;re++){let ee=J[re];B(ee[0]+G*h,ee[1]+G*h,ee[2]+G*h)}}n.addGroup(w,s.length/3-w,0)}function pe(){let w=s.length/3,re=0;Te(N,re),re+=N.length;for(let ee=0,X=S.length;ee<X;ee++){let K=S[ee];Te(K,re),re+=K.length}n.addGroup(w,s.length/3-w,1)}function Te(w,re){let ee=w.length;for(;--ee>=0;){let X=ee,K=ee-1;K<0&&(K=w.length-1);for(let se=0,Ee=h+m*2;se<Ee;se++){let Le=G*se,Ze=G*(se+1),I=re+X+Le,E=re+K+Le,ue=re+K+Ze,le=re+X+Ze;$(I,E,ue,le)}}}function Pe(w,re,ee){l.push(w),l.push(re),l.push(ee)}function B(w,re,ee){ge(w),ge(re),ge(ee);let X=s.length/3,K=_.generateTopUV(n,s,X-3,X-2,X-1);me(K[0]),me(K[1]),me(K[2])}function $(w,re,ee,X){ge(w),ge(re),ge(X),ge(re),ge(ee),ge(X);let K=s.length/3,se=_.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);me(se[0]),me(se[1]),me(se[3]),me(se[1]),me(se[2]),me(se[3])}function ge(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function me(w){r.push(w.x),r.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new aa[s.type]().fromJSON(s)),new i(n,e.options)}},Gx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new xe(r,o),new xe(a,l),new xe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-d),new xe(u,1-p),new xe(x,1-g)]:[new xe(a,1-l),new xe(h,1-d),new xe(f,1-p),new xe(m,1-g)]}};function Vx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var jn=class i extends Gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ln=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,u=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],y=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let C=T/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(C+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let y=h[g][_+1],v=h[g][_],T=h[g+1][_],C=h[g+1][_+1];(g!==0||o>0)&&f.push(y,v,C),(g!==n-1||l<Math.PI)&&f.push(v,T,C)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Di=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,m,_),o.push(m,g,_)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Br=class i extends kt{constructor(e=new ra(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new xe,h=new L,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),_(),g()}function m(y){h=e.getPointAt(y/t,h);let v=o.normals[y],T=o.binormals[y];for(let C=0;C<=s;C++){let P=C/s*Math.PI*2,z=Math.sin(P),A=-Math.cos(P);l.x=A*v.x+z*T.x,l.y=A*v.y+z*T.y,l.z=A*v.z+z*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let T=(s+1)*(y-1)+(v-1),C=(s+1)*y+(v-1),P=(s+1)*y+v,z=(s+1)*(y-1)+v;p.push(T,C,z),p.push(C,P,z)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xe=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Do(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var nr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,a=2*t-n;break;case Th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,l=2*n-t;break;case Th:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+_*o[c+T]+y*o[l+T]+v*o[d+T];return r}},Yl=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ql=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Wx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=zo;var ds=class extends Qn{};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Uo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Qn{};Zl.prototype.ValueTypeName="color";var $l=class extends Qn{};$l.prototype.ValueTypeName="number";var Jl=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gr=class extends Qn{InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.DefaultInterpolation=zo;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Qn{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Uo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Qn{};Kl.prototype.ValueTypeName="vector";var jl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Xx=new jl,Ql=class{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Wr=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ul=new xt,bd=new L,Ed=new L,ca=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wd=new xt,wr=new L,fl=new L,ec=class extends ca{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),fl.copy(n.position),fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fl),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},Xr=class extends Vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tc=class extends ca{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var dc="\\[\\]\\.:\\/",Yx=new RegExp("["+dc+"]","g"),uc="[^"+dc+"]",qx="[^"+dc.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",uc),$x=/(WCOD+)?/.source.replace("WCOD",qx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),jx=new RegExp("^"+Zx+$x+Jx+Kx+"$"),Qx=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){let t=jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=nc;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J2=new Float32Array(1);var Yr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);var Kd={type:"change"},fc={type:"start"},jd={type:"end"},ma=new Nr,Qd=new Pn,e2=Math.cos(70*Ui.DEG2RAD),ga=class extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",De),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kd),n.update(),r=s.NONE},this.update=function(){let U=new L,ve=new In().setFromUnitVectors(e.up,new L(0,1,0)),Ge=ve.clone().invert(),V=new L,Ce=new In,ne=new L,Re=2*Math.PI;return function(ct=null){let _t=n.object.position;U.copy(_t).sub(n.target),U.applyQuaternion(ve),a.setFromVector3(U),n.autoRotate&&r===s.NONE&&he(M(ct)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=n.minAzimuthAngle,Dt=n.maxAzimuthAngle;isFinite(bt)&&isFinite(Dt)&&(bt<-Math.PI?bt+=Re:bt>Math.PI&&(bt-=Re),Dt<-Math.PI?Dt+=Re:Dt>Math.PI&&(Dt-=Re),bt<=Dt?a.theta=Math.max(bt,Math.min(Dt,a.theta)):a.theta=a.theta>(bt+Dt)/2?Math.max(bt,a.theta):Math.min(Dt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let gt=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=H(a.radius);else{let St=a.radius;a.radius=H(a.radius*c),gt=St!=a.radius}if(U.setFromSpherical(a),U.applyQuaternion(Ge),_t.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&C){let St=null;if(n.object.isPerspectiveCamera){let on=U.length();St=H(on*c);let Wi=on-St;n.object.position.addScaledVector(v,Wi),n.object.updateMatrixWorld(),gt=!!Wi}else if(n.object.isOrthographicCamera){let on=new L(T.x,T.y,0);on.unproject(n.object);let Wi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),gt=Wi!==n.object.zoom;let ro=new L(T.x,T.y,0);ro.unproject(n.object),n.object.position.sub(ro).add(on),n.object.updateMatrixWorld(),St=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(ma.origin.copy(n.object.position),ma.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ma.direction))<e2?e.lookAt(n.target):(Qd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ma.intersectPlane(Qd,n.target))))}else if(n.object.isOrthographicCamera){let St=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),St!==n.object.zoom&&(n.object.updateProjectionMatrix(),gt=!0)}return c=1,C=!1,gt||V.distanceToSquared(n.object.position)>o||8*(1-Ce.dot(n.object.quaternion))>o||ne.distanceToSquared(n.target)>o?(n.dispatchEvent(Kd),V.copy(n.object.position),Ce.copy(n.object.quaternion),ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ye),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",I),n.domElement.getRootNode().removeEventListener("keydown",te,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",De),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Yr,l=new Yr,c=1,h=new L,d=new xe,u=new xe,f=new xe,p=new xe,x=new xe,m=new xe,g=new xe,_=new xe,y=new xe,v=new L,T=new xe,C=!1,P=[],z={},A=!1;function M(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function S(U){let ve=Math.abs(U*.01);return Math.pow(.95,n.zoomSpeed*ve)}function he(U){l.theta-=U}function J(U){l.phi-=U}let N=function(){let U=new L;return function(Ge,V){U.setFromMatrixColumn(V,0),U.multiplyScalar(-Ge),h.add(U)}}(),F=function(){let U=new L;return function(Ge,V){n.screenSpacePanning===!0?U.setFromMatrixColumn(V,1):(U.setFromMatrixColumn(V,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ge),h.add(U)}}(),G=function(){let U=new L;return function(Ge,V){let Ce=n.domElement;if(n.object.isPerspectiveCamera){let ne=n.object.position;U.copy(ne).sub(n.target);let Re=U.length();Re*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Ge*Re/Ce.clientHeight,n.object.matrix),F(2*V*Re/Ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Ge*(n.object.right-n.object.left)/n.object.zoom/Ce.clientWidth,n.object.matrix),F(V*(n.object.top-n.object.bottom)/n.object.zoom/Ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function b(U,ve){if(!n.zoomToCursor)return;C=!0;let Ge=n.domElement.getBoundingClientRect(),V=U-Ge.left,Ce=ve-Ge.top,ne=Ge.width,Re=Ge.height;T.x=V/ne*2-1,T.y=-(Ce/Re)*2+1,v.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function H(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function q(U){d.set(U.clientX,U.clientY)}function oe(U){b(U.clientX,U.clientX),g.set(U.clientX,U.clientY)}function _e(U){p.set(U.clientX,U.clientY)}function W(U){u.set(U.clientX,U.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ve=n.domElement;he(2*Math.PI*f.x/ve.clientHeight),J(2*Math.PI*f.y/ve.clientHeight),d.copy(u),n.update()}function pe(U){_.set(U.clientX,U.clientY),y.subVectors(_,g),y.y>0?Z(S(y.y)):y.y<0&&k(S(y.y)),g.copy(_),n.update()}function Te(U){x.set(U.clientX,U.clientY),m.subVectors(x,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(x),n.update()}function Pe(U){b(U.clientX,U.clientY),U.deltaY<0?k(S(U.deltaY)):U.deltaY>0&&Z(S(U.deltaY)),n.update()}function B(U){let ve=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ve=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ve=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?he(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ve=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?he(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ve=!0;break}ve&&(U.preventDefault(),n.update())}function $(U){if(P.length===1)d.set(U.pageX,U.pageY);else{let ve=Fe(U),Ge=.5*(U.pageX+ve.x),V=.5*(U.pageY+ve.y);d.set(Ge,V)}}function ge(U){if(P.length===1)p.set(U.pageX,U.pageY);else{let ve=Fe(U),Ge=.5*(U.pageX+ve.x),V=.5*(U.pageY+ve.y);p.set(Ge,V)}}function me(U){let ve=Fe(U),Ge=U.pageX-ve.x,V=U.pageY-ve.y,Ce=Math.sqrt(Ge*Ge+V*V);g.set(0,Ce)}function w(U){n.enableZoom&&me(U),n.enablePan&&ge(U)}function re(U){n.enableZoom&&me(U),n.enableRotate&&$(U)}function ee(U){if(P.length==1)u.set(U.pageX,U.pageY);else{let Ge=Fe(U),V=.5*(U.pageX+Ge.x),Ce=.5*(U.pageY+Ge.y);u.set(V,Ce)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ve=n.domElement;he(2*Math.PI*f.x/ve.clientHeight),J(2*Math.PI*f.y/ve.clientHeight),d.copy(u)}function X(U){if(P.length===1)x.set(U.pageX,U.pageY);else{let ve=Fe(U),Ge=.5*(U.pageX+ve.x),V=.5*(U.pageY+ve.y);x.set(Ge,V)}m.subVectors(x,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(x)}function K(U){let ve=Fe(U),Ge=U.pageX-ve.x,V=U.pageY-ve.y,Ce=Math.sqrt(Ge*Ge+V*V);_.set(0,Ce),y.set(0,Math.pow(_.y/g.y,n.zoomSpeed)),Z(y.y),g.copy(_);let ne=(U.pageX+ve.x)*.5,Re=(U.pageY+ve.y)*.5;b(ne,Re)}function se(U){n.enableZoom&&K(U),n.enablePan&&X(U)}function Ee(U){n.enableZoom&&K(U),n.enableRotate&&ee(U)}function Le(U){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Ze),n.domElement.addEventListener("pointerup",I)),!Je(U)&&(we(U),U.pointerType==="touch"?ye(U):E(U)))}function Ze(U){n.enabled!==!1&&(U.pointerType==="touch"?be(U):ue(U))}function I(U){switch(yt(U),P.length){case 0:n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",I),n.dispatchEvent(jd),r=s.NONE;break;case 1:let ve=P[0],Ge=z[ve];ye({pointerId:ve,pageX:Ge.x,pageY:Ge.y});break}}function E(U){let ve;switch(U.button){case 0:ve=n.mouseButtons.LEFT;break;case 1:ve=n.mouseButtons.MIDDLE;break;case 2:ve=n.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case fs.DOLLY:if(n.enableZoom===!1)return;oe(U),r=s.DOLLY;break;case fs.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;_e(U),r=s.PAN}else{if(n.enableRotate===!1)return;q(U),r=s.ROTATE}break;case fs.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;q(U),r=s.ROTATE}else{if(n.enablePan===!1)return;_e(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fc)}function ue(U){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(U);break;case s.DOLLY:if(n.enableZoom===!1)return;pe(U);break;case s.PAN:if(n.enablePan===!1)return;Te(U);break}}function le(U){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(U.preventDefault(),n.dispatchEvent(fc),Pe(Y(U)),n.dispatchEvent(jd))}function Y(U){let ve=U.deltaMode,Ge={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(ve){case 1:Ge.deltaY*=16;break;case 2:Ge.deltaY*=100;break}return U.ctrlKey&&!A&&(Ge.deltaY*=10),Ge}function te(U){U.key==="Control"&&(A=!0,n.domElement.getRootNode().addEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Ae(U){U.key==="Control"&&(A=!1,n.domElement.getRootNode().removeEventListener("keyup",Ae,{passive:!0,capture:!0}))}function De(U){n.enabled===!1||n.enablePan===!1||B(U)}function ye(U){switch(He(U),P.length){case 1:switch(n.touches.ONE){case ps.ROTATE:if(n.enableRotate===!1)return;$(U),r=s.TOUCH_ROTATE;break;case ps.PAN:if(n.enablePan===!1)return;ge(U),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ps.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(U),r=s.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(U),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fc)}function be(U){switch(He(U),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ee(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;X(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(U),n.update();break;default:r=s.NONE}}function Ye(U){n.enabled!==!1&&U.preventDefault()}function we(U){P.push(U.pointerId)}function yt(U){delete z[U.pointerId];for(let ve=0;ve<P.length;ve++)if(P[ve]==U.pointerId){P.splice(ve,1);return}}function Je(U){for(let ve=0;ve<P.length;ve++)if(P[ve]==U.pointerId)return!0;return!1}function He(U){let ve=z[U.pointerId];ve===void 0&&(ve=new xe,z[U.pointerId]=ve),ve.set(U.pageX,U.pageY)}function Fe(U){let ve=U.pointerId===P[0]?P[1]:P[0];return z[ve]}n.domElement.addEventListener("contextmenu",Ye),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",le,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",te,{passive:!0,capture:!0}),this.update()}};function tu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new kt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=eu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=eu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function eu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Jt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function nu(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){t.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new rt(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&n2(o);let l=o.attributes.position.count,c=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:l,materialIndex:0}];for(let h of c){let d=r[h.materialIndex||0];if(!d||!d.visible)continue;let u=Math.min(h.count,l-h.start);if(u<=0)continue;let f=c.length===1?o:t2(o,h.start,u),p=!!d.vertexColors&&!!f.attributes.color;!p&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${d.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${p?1:0}`;e.has(x)||e.set(x,{material:d,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),e.get(x).geometries.push(f)}c.length>1&&o.dispose()});let n=new Me;for(let s of e.values()){let r=tu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new Se(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of t)n.attach(s);return n}function t2(i,e,t){let n=new kt;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Jt(r.array.slice(e*o,(e+t)*o),o,r.normalized))}return n}function n2(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,l=n[o];n[o]=n[a],n[a]=l}e.needsUpdate=!0}}function pc(i){i.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()})}var gs={cellMeters:1.25,levelMeters:2.5,grid:[66,56],modules:{0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B",1:"\u0410\u043D\u0433\u0430\u0440",2:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",3:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",4:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",6:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",7:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",8:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",9:"\u0416\u0438\u043B\u0430\u044F",10:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"},zones:[{key:"hangar",module:1,name:"\u0410\u043D\u0433\u0430\u0440",x:0,y:0,width:27,height:20},{key:"industry",module:2,name:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",x:27,y:0,width:16,height:20},{key:"support",module:3,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:46,y:0,width:10,height:20},{key:"military",module:4,name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",x:0,y:23,width:24,height:14},{key:"labs",module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",x:27,y:23,width:16,height:14},{key:"isolator",module:6,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:46,y:23,width:10,height:14},{key:"medical",module:7,name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",x:0,y:40,width:13,height:16},{key:"domestic",module:8,name:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",x:16,y:40,width:12,height:16},{key:"living",module:9,name:"\u0416\u0438\u043B\u0430\u044F",x:31,y:40,width:25,height:16},{key:"sport",module:10,name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F",x:59,y:40,width:7,height:16}],rooms:[{module:1,zone:"hangar",name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:0,width:20,height:20,levels:4,kind:"room",floor:0,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,zone:"hangar",name:"\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:0,width:4,height:17,levels:4,kind:"room",floor:0,note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:1,zone:"hangar",name:"\u041A\u041F\u041F",x:20,y:17,width:4,height:3,levels:1,kind:"room",floor:0,note:"\u043F\u043E\u0441\u0442 \u0443 \u0448\u043B\u044E\u0437\u0430 \u0430\u043D\u0433\u0430\u0440\u0430"},{module:1,zone:"hangar",name:"\u041F\u0440\u043E\u0435\u0437\u0434 \u043A \u0446\u0435\u0445\u0443",x:24,y:0,width:3,height:17,levels:2,kind:"corridor",floor:0,note:"K7 \u0438\u0437 \u0430\u043D\u0433\u0430\u0440\u0430 \u0432 \u0446\u0435\u0445, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u043A \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0430\u0437\u0435"},{module:1,zone:"hangar",name:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0433\u0430\u0440\u0430",x:24,y:17,width:3,height:3,levels:2,kind:"airlock",floor:0,note:"\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u0437\u0434 \u0438 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440 H1, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438"},{module:2,zone:"industry",name:"\u0426\u0435\u0445 (\u0441\u0442\u0435\u043D\u0434 K7)",x:27,y:5,width:11,height:10,levels:2,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u043A\u0440\u0430\u043D-\u0431\u0430\u043B\u043A\u0430, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u044B\u0441\u043E\u0442\u0430 2 \u0443\u0440\u043E\u0432\u043D\u044F"},{module:2,zone:"industry",name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:27,y:0,width:6,height:5,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",x:33,y:0,width:5,height:5,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:38,y:0,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,zone:"industry",name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:38,y:5,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u0438\u0444\u0442\u0430"},{module:2,zone:"industry",name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:38,y:10,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B"},{module:2,zone:"industry",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:15,width:16,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:2,zone:"industry",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",x:27,y:17,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u0428\u043B\u044E\u0437",x:33,y:17,width:4,height:3,levels:2,kind:"airlock",floor:0,note:""},{module:2,zone:"industry",name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 K7",x:37,y:17,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:3,zone:"support",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:0,width:2,height:20,levels:1,kind:"corridor",floor:0,note:""},{module:3,zone:"support",name:"\u041F\u043E\u0441\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0430",x:48,y:0,width:4,height:4,levels:1,kind:"room",floor:0,note:"\u043F\u0443\u043B\u044C\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0431\u043B\u043E\u043A\u0430, \u0441\u0432\u044F\u0437\u044C \u0441 \u044F\u0440\u0443\u0441\u043E\u043C \u22125"},{module:3,zone:"support",name:"\u041B\u0438\u0444\u0442 \u043A \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0443",x:52,y:0,width:4,height:4,levels:1,kind:"room",floor:0,note:"\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0444\u0442 \u043D\u0430 \u044F\u0440\u0443\u0441 \u22125"},{module:3,zone:"support",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440",x:48,y:4,width:8,height:5,levels:1,kind:"room",floor:0,note:"\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0449\u0438\u0442\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"},{module:3,zone:"support",name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B",x:48,y:9,width:8,height:5,levels:1,kind:"room",floor:0,note:""},{module:3,zone:"support",name:"\u0412\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435",x:48,y:14,width:8,height:6,levels:1,kind:"room",floor:0,note:""},{module:4,zone:"military",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",x:0,y:23,width:9,height:6,levels:1,kind:"room",floor:0,note:"\u043F\u0443\u043B\u044C\u0442\u044B, \u043A\u0430\u0440\u0442\u0430-\u0433\u043B\u043E\u0431\u0443\u0441, \u0441\u0432\u044F\u0437\u044C"},{module:4,zone:"military",name:"\u0411\u0440\u0438\u0444\u0438\u043D\u0433",x:9,y:23,width:5,height:6,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B, \u044D\u043A\u0440\u0430\u043D"},{module:4,zone:"military",name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:14,y:23,width:6,height:6,levels:1,kind:"room",floor:0,note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0431\u043E\u0439\u0446\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,zone:"military",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:29,width:20,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:4,zone:"military",name:"\u0423\u0437\u0435\u043B \u0441\u0432\u044F\u0437\u0438",x:20,y:23,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u044F\u0437\u0438, \u0440\u0430\u0434\u0430\u0440\u044B"},{module:4,zone:"military",name:"\u0428\u043B\u044E\u0437",x:20,y:28,width:4,height:4,levels:2,kind:"airlock",floor:0,note:""},{module:4,zone:"military",name:"\u0414\u0435\u0436\u0443\u0440\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C",x:20,y:32,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u0434\u0435\u0436\u0443\u0440\u043D\u044B\u0439 \u043E\u0444\u0438\u0446\u0435\u0440 \u043F\u043E \u0431\u0430\u0437\u0435 \u0438 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u043A\u0430\u043C\u0435\u0440"},{module:4,zone:"military",name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:0,y:31,width:7,height:6,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u0441 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,zone:"military",name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:8,y:31,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C"},{module:4,zone:"military",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0438\u043A\u0430",x:14,y:31,width:6,height:6,levels:1,kind:"room",floor:0,note:"\u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0440\u0443\u0436\u0438\u044F"},{module:5,zone:"labs",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0443\u0447\u0451\u043D\u044B\u0445",x:27,y:23,width:6,height:3,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B\u044B, \u0448\u043A\u0430\u0444\u044B"},{module:5,zone:"labs",name:"\u0428\u043B\u044E\u0437",x:33,y:23,width:4,height:3,levels:2,kind:"airlock",floor:0,note:""},{module:5,zone:"labs",name:"\u041F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F",x:37,y:23,width:6,height:3,levels:1,kind:"room",floor:0,note:"\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B"},{module:5,zone:"labs",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:26,width:16,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:5,zone:"labs",name:"\u0425\u0438\u043C\u0438\u043A\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:27,y:28,width:5,height:9,levels:1,kind:"room",floor:0,note:"\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u044B, \u0445\u0440\u043E\u043C\u0430\u0442\u043E\u0433\u0440\u0430\u0444, \u0441\u043F\u0435\u043A\u0442\u0440\u043E\u043C\u0435\u0442\u0440"},{module:5,zone:"labs",name:"\u041A\u0441\u0435\u043D\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:32,y:28,width:6,height:9,levels:1,kind:"room",floor:0,note:"\u0431\u043E\u043A\u0441\u044B \u0431\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F\u044B, \u0441\u0442\u043E\u043B \u0434\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F"},{module:5,zone:"labs",name:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:38,y:28,width:5,height:9,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043D\u0434\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439, \u043E\u0441\u0446\u0438\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},{module:6,zone:"isolator",name:"\u0428\u043B\u044E\u0437 \u0441\u0430\u043D\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438",x:46,y:23,width:4,height:4,levels:2,kind:"airlock",floor:0,note:"\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0432\u0445\u043E\u0434\u043E\u043C \u043A \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C"},{module:6,zone:"isolator",name:"\u041F\u043E\u0441\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",x:50,y:23,width:6,height:4,levels:1,kind:"room",floor:0,note:"\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u0431\u043E\u043A\u0441\u043E\u0432"},{module:6,zone:"isolator",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:27,width:2,height:10,levels:2,kind:"corridor",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 1",x:48,y:27,width:8,height:3,levels:1,kind:"room",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 2",x:48,y:30,width:8,height:3,levels:1,kind:"room",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 3",x:48,y:33,width:8,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041F\u0440\u0438\u0451\u043C\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",x:0,y:40,width:5,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F, \u0430\u043F\u0442\u0435\u043A\u0430",x:5,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0432\u0440\u0430\u0447\u0430",x:9,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:44,width:13,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:6,y:46,width:2,height:10,levels:1,kind:"corridor",floor:0,note:""},{module:7,zone:"medical",name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F",x:0,y:46,width:6,height:5,levels:1,kind:"room",floor:0,note:"\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B, \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A, \u043D\u0430\u0440\u043A\u043E\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-1",x:0,y:51,width:6,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:7,zone:"medical",name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",x:8,y:46,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u0440\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-2",x:8,y:51,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:8,zone:"domestic",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0438 \u043E\u0442\u0434\u044B\u0445",x:16,y:40,width:8,height:7,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B\u044B \u043D\u0430 16 \u043C\u0435\u0441\u0442, \u0434\u0438\u0432\u0430\u043D\u044B"},{module:8,zone:"domestic",name:"\u041A\u0430\u043C\u0431\u0443\u0437",x:24,y:40,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u043B\u0438\u0442\u0430, \u043C\u043E\u0439\u043A\u0430, \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u043E\u0441\u0442\u0440\u043E\u0432"},{module:8,zone:"domestic",name:"\u041F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434",x:24,y:45,width:4,height:2,levels:1,kind:"room",floor:0,note:""},{module:8,zone:"domestic",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:16,y:47,width:12,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 1 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:16,y:49,width:6,height:7,levels:1,kind:"room",floor:0,note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 2 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:22,y:49,width:6,height:4,levels:1,kind:"room",floor:0,note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F",x:22,y:53,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:10,zone:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",x:59,y:40,width:7,height:11,levels:1,kind:"room",floor:0,note:"\u0434\u043E\u0440\u043E\u0436\u043A\u0438, \u0432\u0435\u043B\u043E\u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u044B, \u0441\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438, \u0448\u0442\u0430\u043D\u0433\u0438, \u043C\u0430\u0442\u044B"},{module:10,zone:"sport",name:"\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0434\u0443\u0448\u0435\u0432\u044B\u0435",x:59,y:51,width:7,height:5,levels:1,kind:"room",floor:0,note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0441\u043A\u0430\u043C\u044C\u0438, \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:44,width:25,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 1",x:31,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 2",x:35,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 3",x:39,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 4",x:43,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 5",x:47,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 6",x:51,y:40,width:5,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 7",x:31,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 8",x:35,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 9",x:39,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 10",x:43,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 11",x:47,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 12",x:51,y:52,width:5,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B",x:31,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041D\u0430\u0447. \u0448\u0442\u0430\u0431\u0430",x:34,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u043E\u043C. \u043E\u0442\u0440\u044F\u0434\u0430",x:37,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0432\u0440\u0430\u0447",x:40,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0425\u0438\u0440\u0443\u0440\u0433",x:43,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0443\u0447\u0451\u043D\u044B\u0439",x:46,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0438\u043D\u0436\u0435\u043D\u0435\u0440",x:49,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 19",x:52,y:46,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0438\u043D\u043E\u0437\u0430\u043B",x:31,y:40,width:12,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u044D\u043A\u0440\u0430\u043D, \u0440\u044F\u0434\u044B \u043A\u0440\u0435\u0441\u0435\u043B, \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440"},{module:9,zone:"living",name:"\u0424\u043E\u0439\u0435",x:43,y:40,width:3,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u0432\u0445\u043E\u0434 \u0432 \u043A\u0438\u043D\u043E\u0437\u0430\u043B \u0438 \u043E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044E"},{module:9,zone:"living",name:"\u041E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044F",x:46,y:40,width:10,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u043C\u0435\u0441\u0442\u043E \u043E\u0442\u0434\u044B\u0445\u0430 \u0441 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F\u043C\u0438, \u0433\u0438\u0434\u0440\u043E\u043F\u043E\u043D\u0438\u043A\u0430, \u0444\u043E\u043D\u0442\u0430\u043D"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",floor:1,note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 13",x:31,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 14",x:35,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 15",x:39,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 16",x:43,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 17",x:47,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 18",x:51,y:52,width:5,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"}],corridors:[{name:"H1",x:0,y:20,width:56,height:3,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"H2",x:0,y:37,width:59,height:3,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V1",x:24,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:0,width:3,height:20,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V3",x:13,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V4",x:28,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V5",x:56,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"}],thickWalls:[{x:7,y:31,width:1,height:6},{x:13,y:31,width:1,height:6},{x:8,y:36,width:5,height:1}],doors:[{x:23,y:8,side:"E",size:3,kind:"gate",airlock:-1,floor:0},{x:24,y:17,side:"N",size:3,kind:"gate",airlock:4,floor:0},{x:24,y:19,side:"S",size:3,kind:"gate",airlock:4,floor:0},{x:27,y:9,side:"W",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:9,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:33,y:19,side:"S",size:3,kind:"gate",airlock:13,floor:0},{x:33,y:17,side:"N",size:3,kind:"gate",airlock:13,floor:0},{x:23,y:29,side:"E",size:3,kind:"gate",airlock:26,floor:0},{x:20,y:29,side:"W",size:2,kind:"gate",airlock:26,floor:0},{x:33,y:23,side:"N",size:3,kind:"gate",airlock:32,floor:0},{x:33,y:25,side:"S",size:3,kind:"gate",airlock:32,floor:0},{x:46,y:24,side:"W",size:3,kind:"gate",airlock:38,floor:0},{x:46,y:26,side:"S",size:2,kind:"gate",airlock:38,floor:0},{x:28,y:14,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:14,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:4,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:28,y:4,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:4,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:17,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:39,y:17,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:1,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:1,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:6,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:11,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:16,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:46,y:19,side:"S",size:2,kind:"double",airlock:-1,floor:0},{x:46,y:17,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:23,y:18,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:4,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:11,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:20,y:25,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:3,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:10,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:21,y:32,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:25,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:39,y:25,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:34,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:50,y:24,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:28,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:31,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:34,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:2,y:40,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:2,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:6,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:10,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:12,y:44,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:5,y:48,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:5,y:53,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:8,y:48,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:8,y:53,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:19,y:40,side:"N",size:2,kind:"double",airlock:-1,floor:0},{x:19,y:46,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:42,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:25,y:45,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:18,y:49,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:49,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:53,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:47,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:27,y:47,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:31,y:44,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:31,y:50,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:55,y:44,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:55,y:50,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:59,y:44,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:59,y:52,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:61,y:51,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:36,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:38,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:41,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:47,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:50,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:53,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:49,side:"S",size:2,kind:"double",airlock:-1,floor:1},{x:44,y:49,side:"S",size:1,kind:"door",airlock:-1,floor:1},{x:53,y:49,side:"S",size:2,kind:"double",airlock:-1,floor:1},{x:43,y:44,side:"W",size:1,kind:"door",airlock:-1,floor:1},{x:45,y:44,side:"E",size:1,kind:"door",airlock:-1,floor:1},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1}],stairs:[{x:47,y:50,dirX:1,dirY:0,count:4}],cells:{1:540,2:320,3:200,4:319,5:224,6:140,7:208,8:192,10:112,9:800,0:633},total:3688};function i2(i,e){let t=e==="N"||e==="S"?i.width:i.height,n=e==="N"||e==="S"?i.height:i.width,a={back:{N:"S",S:"N",W:"E",E:"W"}[e],front:e,left:e==="N"||e==="S"?"W":"N",right:e==="N"||e==="S"?"E":"S"};return{across:t,depth:n,faces:a,cell:(c,h,d=1,u=1)=>e==="S"?[i.x+c,i.y+h,d,u]:e==="N"?[i.x+c,i.y+i.height-h-u,d,u]:e==="E"?[i.x+h,i.y+c,u,d]:[i.x+i.width-h-u,i.y+c,u,d],level:i.floor||0}}function iu(i,e){let t=o=>i.doors.find(a=>a.size===1&&(a.floor||0)===(o.floor||0)&&a.x>=o.x&&a.x<o.x+o.width&&a.y>=o.y&&a.y<o.y+o.height),n=(o,a,l,c,h,d,u,f={})=>{let[p,x,m,g]=o.cell(l,c,h,d);e(a,p,x,m,g,{face:o.faces[u]||u,level:o.level,...f})},s=["64,82,110","110,64,58","70,96,70","120,100,60","80,70,110"];i.rooms.filter(o=>o.zone==="living"&&o.kind!=="corridor"&&o.name.startsWith("\u041A\u0430\u044E\u0442\u0430")||o.kind==="single").forEach((o,a)=>{let l=t(o),c=i2(o,l.side),h=s[a%s.length];if(o.kind==="single"){n(c,"bed",0,0,1,2,"back",{color:h}),n(c,"nightstand",0,2,1,1,"left"),n(c,"deskChair",2,0,1,1,"right",{seed:a}),n(c,"wardrobe",2,3,1,1,"right"),o.name==="\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B"?n(c,"safe",2,1,1,1,"right"):n(c,"shelf",2,1,1,1,"right");return}let d=c.across-1;n(c,"bed",0,0,1,2,"back",{color:h}),n(c,"bed",d,0,1,2,"back",{color:s[(a+2)%s.length]}),n(c,"nightstand",0,2,1,1,"left"),n(c,"nightstand",d,2,1,1,"right"),n(c,"cabinTable",1,0,2,1,"back"),n(c,"wardrobe",0,3,1,1,"left"),n(c,"wardrobe",d,3,1,1,"right"),c.across===5&&n(c,"shelf",3,0,1,1,"back")}),e("liftPlatform",0,0,20,20,{blocks:!1}),e("barrels",20,0),e("barrels",21,0),e("generator",22,0,2,2),e("crate",20,2),e("crate",21,2),e("console",23,3),e("crate",22,14),e("crate",23,14),e("crate",23,15),e("rack",20,15),e("console",20,17,1,1),e("console",21,17,1,1),e("deskChair",20,19,1,1,{face:"S",seed:3}),e("locker",22,19),e("repairStand",31,8,4,4,{blocks:!1}),e("machineTool",30,5,2,1,{face:"N"}),e("machineTool",32,5,2,1,{face:"N"}),e("desk",36,5,2,1),e("rack",37,7),e("rack",37,8),e("rack",37,12),e("crate",36,13),e("crate",37,13),e("generator",34,13,2,2),e("console",27,5);for(let o of[27,29,30,31,32])e("rack",o,0);e("crate",30,2),e("crate",31,2),e("crate",32,2),e("crate",32,3),e("crate",27,3),e("desk",33,0,2,1),e("machineTool",36,0,2,1,{face:"N"}),e("rack",37,2),e("rack",37,3),e("cabinet",33,3),e("liftPlatform",38,0,5,5,{blocks:!1}),e("crate",42,0),e("crate",38,5),e("crate",42,5),e("crate",42,6),e("crate",38,9),e("console",38,7,1,1);for(let o of[10,11,12,13])e("rack",38,o),e("rack",42,o);e("crate",38,14),e("crate",42,14),e("instrumentRack",27,17,1,1,{face:"W",seed:2}),e("desk",30,19,2,1),e("console",32,18),e("labTable",27,19,2,1),e("cabinet",31,17);for(let o of[41,42])e("rack",o,17),e("rack",o,19);e("crate",37,19),e("crate",38,19),e("crate",37,17),e("console",49,0),e("console",50,0),e("console",51,0),e("deskChair",51,3,1,1,{face:"E",seed:5}),e("cabinet",48,3),e("liftPlatform",53,0,3,3,{blocks:!1}),e("console",52,3),e("generator",50,4,2,2),e("generator",53,4,2,2),e("cabinet",55,6),e("cabinet",55,7),e("cabinet",55,8),e("instrumentRack",50,8,1,1,{face:"S"}),e("acUnit",50,9,2,1),e("acUnit",53,9,2,1),e("acUnit",50,12,2,1),e("acUnit",53,12,2,1),e("barrels",55,11),e("tank",50,14,2,3),e("tank",53,14,2,3),e("barrels",55,18),e("barrels",55,19),e("console",50,19);for(let o of[1,2,3,5,6,7])e("console",o,23);e("console",0,25,1,1),e("console",0,26,1,1),e("commandTable",3,25,2,2,{face:"N"}),e("wallScreen",8,25,1,2,{face:"E",seed:4}),e("deskChair",8,27,1,1,{face:"E",seed:6}),e("wallScreen",10,23,3,1,{face:"N",seed:7}),e("chairRow",10,25,3,1,{face:"S"}),e("chairRow",10,26,3,1,{face:"S"});for(let o of[14,15,17,18,19])e("locker",o,23);e("locker",14,24),e("locker",14,25),e("locker",14,26),e("bench",16,25,3,1,{face:"N"}),e("console",21,23),e("console",22,23),e("console",23,23),e("instrumentRack",23,25,1,1,{face:"E",seed:3}),e("instrumentRack",23,26,1,1,{face:"E",seed:5}),e("cabinet",23,27),e("console",20,36,1,1),e("console",21,36,1,1),e("console",22,36,1,1),e("deskChair",23,33,1,1,{face:"E",seed:8}),e("wallScreen",20,33,1,2,{face:"W",seed:2}),e("locker",23,35);for(let o of[32,33,34,35])e("gunRack",0,o,1,1,{face:"W"});for(let o of[1,2,4,5])e("gunRack",o,36,1,1,{face:"S"});e("desk",5,32,2,1),e("locker",6,34),e("locker",6,35);for(let o of[8,9,11,12])for(let a of[32,33,35])e("crate",o,a);e("desk",14,33,1,2),e("machineTool",14,36,2,1,{face:"S"}),e("gunRack",19,33,1,1,{face:"E"}),e("gunRack",19,34,1,1,{face:"E"}),e("labTable",17,35,2,1),e("cabinet",19,36),e("deskChair",27,23,1,1,{face:"N",seed:1}),e("deskChair",28,23,1,1,{face:"N",seed:2}),e("deskChair",30,23,1,1,{face:"N",seed:3}),e("deskChair",31,23,1,1,{face:"N",seed:4}),e("shelf",32,24,1,1,{face:"E"}),e("shelf",32,25,1,1,{face:"E"});for(let o of[37,38,40,41,42])e("instrumentRack",o,23,1,1,{face:"N",seed:o});e("labTable",41,25,2,1),e("fumeHood",27,30,1,1,{face:"W"}),e("fumeHood",27,31,1,1,{face:"W"}),e("fumeHood",27,33,1,1,{face:"W"}),e("labTable",29,31,1,2),e("instrumentRack",31,30,1,1,{face:"E",seed:6}),e("instrumentRack",31,31,1,1,{face:"E",seed:7}),e("cabinet",27,35),e("cabinet",28,36),e("freezer",31,36,1,1,{face:"S"}),e("bioCabinet",32,30,1,1,{face:"W"}),e("bioCabinet",32,31,1,1,{face:"W"}),e("opTable",34,32,1,2,{face:"N"}),e("medCart",35,32,1,1,{face:"E"}),e("labTable",37,30,1,2),e("specimenTank",36,35),e("specimenTank",37,35),e("freezer",32,35,1,1,{face:"W"}),e("freezer",32,36,1,1,{face:"W"}),e("testRig",39,32,2,2,{face:"N"}),e("instrumentRack",42,30,1,1,{face:"E",seed:8}),e("instrumentRack",42,31,1,1,{face:"E",seed:9}),e("instrumentRack",42,34,1,1,{face:"E",seed:10}),e("labTable",38,30,1,2),e("desk",38,36,2,1),e("console",52,23),e("console",53,23),e("console",54,23),e("wallScreen",55,24,1,2,{face:"E",seed:5});for(let[o,a]of[[51,28],[53,28],[55,28],[51,31],[53,31],[55,31],[52,34],[54,35]])e("specimenTank",o,a);e("cabinet",55,27),e("freezer",55,33,1,1,{face:"E"}),e("medBed",0,41,1,2,{face:"W",monitor:!1}),e("deskChair",4,40,1,1,{face:"N",seed:2}),e("cabinet",4,42);for(let o of[5,7,8])e("cabinet",o,40);e("medBed",8,41,1,2,{face:"E",monitor:!1}),e("deskChair",11,40,1,1,{face:"N",seed:9}),e("cabinet",12,40),e("shelf",9,40,1,1,{face:"N"}),e("medBed",12,41,1,2,{face:"E",monitor:!1}),e("opTable",2,47,1,2,{face:"N"}),e("medCart",3,47,1,1,{face:"E"}),e("medCart",1,49,1,1,{face:"W"}),e("cabinet",0,46),e("cabinet",1,46),e("cabinet",0,50);for(let o of[51,53,55])e("medBed",0,o,2,1,{face:"W"});e("cabinet",5,51),e("medBed",11,46,2,1,{face:"E"}),e("medBed",11,48,2,1,{face:"E"}),e("medCart",12,50,1,1,{face:"E"}),e("cabinet",8,46);for(let o of[51,53,55])e("medBed",11,o,2,1,{face:"E"});e("diningTable",16,41,2,2,{face:"N"}),e("diningTable",21,41,2,2,{face:"N"}),e("diningTable",16,43,2,2,{face:"N"}),e("diningTable",21,43,2,2,{face:"N"}),e("servingCounter",23,40,1,1,{face:"E"}),e("servingCounter",23,41,1,1,{face:"E"}),e("sofa",16,46,2,1,{face:"S"}),e("sofa",21,46,2,1,{face:"S",color:"70,84,96"}),e("wallScreen",16,40,2,1,{face:"N",seed:6}),e("galleyFloor",24,40,4,5,{blocks:!1,drain:[3.6,1.4,3.7,5.8]}),e("galleyCounter",24,40,1,1,{face:"N",variant:"drawers",upper:!0}),e("galleyRange",25,40,1,1,{face:"N"}),e("galleyCounter",26,40,1,1,{face:"N",variant:"doors",upper:!0}),e("galleyFridge",27,40,1,1,{face:"N"}),e("galleyCounter",27,41,1,1,{face:"E",variant:"sink2"}),e("galleyCounter",27,42,1,1,{face:"E",variant:"drawers"}),e("galleyCounter",27,43,1,1,{face:"E",variant:"microwave"}),e("galleyCounter",27,44,1,1,{face:"S",variant:"grinder"}),e("galleyCounter",26,44,1,1,{face:"S",variant:"doors"}),e("galleyIsland",26,41,1,2),e("rack",24,46),e("rack",26,46),e("rack",27,46),e("crate",27,45);for(let o of[16,17,19,20,21])e("washbasin",o,49,1,1,{face:"N"});for(let o of[51,52,53,54,55])e("showerCabin",16,o,1,1,{face:"W"}),e("toilet",21,o,1,1,{face:"E"});e("bench",18,52,1,3,{face:"W"});for(let o of[22,23,25])e("washbasin",o,49,1,1,{face:"N"});for(let o of[50,51,52])e("showerCabin",27,o,1,1,{face:"E"});e("toilet",22,51,1,1,{face:"W"}),e("toilet",22,52,1,1,{face:"W"});for(let o of[25,26,27])e("washer",o,55,1,1,{face:"S"});e("washer",22,55,1,1,{face:"S"}),e("labTable",27,53,1,1),e("rack",22,53);let r={level:1};e("cinemaScreen",31,42,1,6,{...r,face:"W"});for(let o of[34,36,38,40])e("cinemaSeats",o,41,1,4,{...r,face:"E"}),e("cinemaSeats",o,46,1,3,{...r,face:"E"});e("projector",42,40,1,1,{...r,face:"E"}),e("sofa",43,40,2,1,{...r,face:"N",color:"70,84,96"}),e("vendingMachine",45,40,1,1,{...r,face:"N"}),e("pottedTree",43,48,1,1,r),e("pottedTree",45,48,1,1,r),e("pottedTree",45,46,1,1,r);for(let o of[47,48,50,51,52,53])e("hydroponicRack",o,40,1,1,{...r,face:"N"});e("pottedTree",46,40,1,1,r),e("pottedTree",55,40,1,1,r),e("pottedTree",46,48,1,1,r),e("pottedTree",55,48,1,1,r),e("planter",47,42,2,1,{...r,face:"N"}),e("planter",52,42,2,1,{...r,face:"N"}),e("planter",47,47,2,1,{...r,face:"S"}),e("planter",51,47,2,1,{...r,face:"S"}),e("planter",55,42,1,2,{...r,face:"E"}),e("planter",55,45,1,2,{...r,face:"E"}),e("fountain",50,44,2,2,r),e("bench",50,43,2,1,{...r,face:"N"}),e("bench",50,46,2,1,{...r,face:"S"}),e("bench",49,44,1,2,{...r,face:"W"});for(let o of[59,60,61])e("treadmill",o,40,1,2,{face:"N"});for(let[o,a]of[[64,40],[65,40],[64,41],[65,41]])e("exerciseBike",o,a,1,1,{face:"N"});e("powerRack",64,44,2,2,{face:"E"}),e("weightBench",64,47,1,2,{face:"N"}),e("dumbbellRack",65,47,1,2,{face:"E"}),e("gymMat",60,47,3,2,{blocks:!1}),e("punchingBag",63,50),e("punchingBag",59,50),e("wallScreen",62,40,1,1,{face:"N",seed:1});for(let o of[59,60,61,62,63])e("locker",o,55);e("bench",60,53,3,1,{face:"N"});for(let o of[63,64,65])e("showerCabin",o,51,1,1,{face:"N"});e("showerCabin",65,52,1,1,{face:"E"}),e("washbasin",65,54,1,1,{face:"E"}),e("washbasin",65,55,1,1,{face:"E"})}var Kt={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function su(i){let{TILES:e,LEVEL_H:t,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:l,building:c,stairRun:h,tiltrotor:d,block:u,surface:f,marking:p,floorStyle:x}=i,m=(b,H,q,oe,_e)=>{for(let W=Math.max(0,H);W<=Math.min(e-1,oe);W++)for(let pe=Math.max(0,b);pe<=Math.min(e-1,q);pe++)f[W][pe]=_e},g=(b,H,q,oe)=>{for(let _e=0;_e<e;_e++)for(let W=0;W<e;W++)Math.hypot(W+.5-b,_e+.5-H)<=q&&(f[_e][W]=oe)},_=(b,H)=>b===0?"g":b===H-1?"t":"u",y=(b,H,q)=>`${b}_${_(H,q)}`;m(0,0,e-1,e-1,Kt.grass),m(0,27,e-1,30,Kt.sidewalk),m(0,31,e-1,48,Kt.asphalt),m(0,49,e-1,52,Kt.sidewalk);for(let b=0;b<e;b++)b%4<2&&(b<44||b>48)&&(p[40][b]="dash");for(let b=31;b<=48;b++)for(let H=44;H<=48;H++)p[b][H]="zebra";function v(b,H,q,oe,_e,W,pe,Te,Pe={}){let B=c({name:b,col0:H,row0:q,col1:oe,row1:_e,levels:W,style:pe});for(let X=0;X<W;X++){r(X,H,q,oe,_e),X>0&&s(X,H,q,oe,_e,n.interior);for(let se=q;se<=_e;se++)for(let Ee=H;Ee<=oe;Ee++)x[X][se][Ee]=Pe.floor||"parquet";let K=y(pe,X,W);for(let se=q;se<=_e;se++)o(X,H,se,"wall",K),o(X,oe+1,se,"wall",K);for(let se=H;se<=oe;se++)a(X,se,q,"wall",K),a(X,se,_e+1,"wall",K);for(let se=H+1;se<oe;se++)(se-H)%2===1&&(a(X,se,q,"window",K),a(X,se,_e+1,"window",K));for(let se=q+1;se<_e;se++)(se-q)%2===1&&(o(X,H,se,"window",K),o(X,oe+1,se,"window",K))}l("roof",W,H,q,oe-H+1,_e-q+1,{blocks:!1,type:Pe.roof||"tile",facade:pe});let $=Math.floor((H+oe)/2),ge=Te==="S"?_e+1:q,me=Te==="S"?q:_e+1,w=y(pe,0,W);a(0,$+1,ge,"door",w),Pe.backDoor!==!1&&a(0,$+1,me,"door",w);let re=Te==="S"?q+1:_e-5;T($-1,re,W-1,pe);let ee=Math.floor((q+_e)/2)+1;for(let X=0;X<W;X++){for(let se=q;se<=_e;se++)o(X,$-1,se,"wall","inner"),o(X,$+2,se,"wall","inner");for(let se=H;se<$-1;se++)a(X,se,ee,"wall","inner");for(let se=$+2;se<=oe;se++)a(X,se,ee,"wall","inner");[{col0:H,col1:$-2,row0:q,row1:ee-1,side:"W"},{col0:H,col1:$-2,row0:ee,row1:_e,side:"W"},{col0:$+2,col1:oe,row0:q,row1:ee-1,side:"E"},{col0:$+2,col1:oe,row0:ee,row1:_e,side:"E"}].forEach((se,Ee)=>{let Le=[];for(let I=se.row0+1;I<se.row1;I++)(I<re||I>re+4)&&Le.push(I);let Ze=Le.length?Le[Math.floor(Le.length/2)]:se.row0;se.side==="W"?o(X,$-1,Ze,"door","inner"):o(X,$+2,Ze,"door","inner"),Pe.furnish!==!1&&P(X,se,se.side==="W"?[se.col1,Ze]:[se.col0,Ze],(Ee+X+H)%4)})}return{...B,midCol:$,stairRow:re,front:ge,back:me}}function T(b,H,q,oe){let _e=[];for(let W=0;W<q;W++)W%2===0?(h(W,b,H+3,0,-1,3,"classic"),_e.push({level:W,col:b,cells:[H+3,H+2,H+1],exit:[b,H]})):(h(W,b+1,H+1,0,1,3,"classic"),_e.push({level:W,col:b+1,cells:[H+1,H+2,H+3],exit:[b+1,H+4]}));for(let W of _e){let pe=W.level+1,Te=(Pe,B)=>Pe===W.col&&W.cells.includes(B);for(let Pe of W.cells){let B=[[W.col-1,Pe,"W",W.col,Pe],[W.col+1,Pe,"W",W.col+1,Pe],[W.col,Pe-1,"N",W.col,Pe],[W.col,Pe+1,"N",W.col,Pe+1]];for(let[$,ge,me,w,re]of B)Te($,ge)||$===W.exit[0]&&ge===W.exit[1]||(me==="W"?o(pe,w,re,"rail","iron"):a(pe,w,re,"rail","iron"))}}}let C=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function P(b,H,q,oe){let _e=H.col1-H.col0+1,W=H.row1-H.row0+1;if(_e<3||W<3)return;[[H.col0,H.row0],[H.col1-1,H.row0],[H.col0,H.row1],[H.col1-1,H.row1]].forEach((Te,Pe)=>{let[B,$,ge]=C[(oe+Pe)%C.length],me=$===2?Te[0]:Pe%2?H.col1:H.col0,w=Te[1];for(let re=0;re<$;re++)if(Math.abs(me+re-q[0])<=1&&Math.abs(w-q[1])<=1)return;l(B,b,me,w,$,ge,{rotation:w===H.row0?0:2})})}let z={col0:2,row0:7,col1:15,row1:21};m(z.col0,z.row0,z.col1,z.row1,Kt.sand);for(let b=z.row0;b<=z.row1;b++)o(0,z.col0,b,"rail","fence"),o(0,z.col1+1,b,"rail","fence");for(let b=z.col0;b<=z.col1;b++)a(0,b,z.row0,"rail","fence"),(b<8||b>9)&&a(0,b,z.row1+1,"rail","fence");o(0,z.col1+1,14,null),m(8,22,9,26,Kt.path),l("playhouse",0,3,8,2,2),l("slide",0,7,8,1,3),l("swing",0,11,8,3,1),l("sandbox",0,4,15,3,3,{blocks:!1}),l("carousel",0,11,13,2,2),l("bench",0,2,12,1,1,{rotation:3}),l("bench",0,2,18,1,1,{rotation:3}),l("bench",0,15,19,1,1,{rotation:1}),l("bin",0,15,20);for(let[b,H]of[[13,19],[7,20]])l("tree",0,b,H,1,1,{type:"linden"});for(let b of[4,9,14,20,26,32,61,67,73,80,86,92])l("tree",0,b,1,1,1,{type:b%3?"linden":"chestnut"});v("houseA",19,7,31,21,3,"ochre","S"),m(25,22,27,26,Kt.path);let A={col0:36,row0:4,col1:58,row1:22};c({name:"bank",...A,levels:2,style:"bank"});for(let b=0;b<2;b++){r(b,A.col0,A.row0,A.col1,A.row1),b>0&&s(b,A.col0,A.row0,A.col1,A.row1,n.interior);for(let q=A.row0;q<=A.row1;q++)for(let oe=A.col0;oe<=A.col1;oe++)x[b][q][oe]="marble";let H=y("bank",b,2);for(let q=A.row0;q<=A.row1;q++)o(b,A.col0,q,"wall",H),o(b,A.col1+1,q,"wall",H);for(let q=A.col0;q<=A.col1;q++)a(b,q,A.row0,"wall",H),a(b,q,A.row1+1,"wall",H);for(let q=A.col0+1;q<A.col1;q++)(q-A.col0)%2===1&&a(b,q,A.row1+1,"window",H);for(let q of[37,39,53,55,57])a(b,q,A.row0,"window",H);for(let q=A.row0+1;q<A.row1;q++)(q-A.row0)%2===1&&(o(b,A.col0,q,"window",H),o(b,A.col1+1,q,"window",H))}l("roof",2,A.col0,A.row0,A.col1-A.col0+1,A.row1-A.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let b of[46,47,48])a(0,b,A.row1+1,"door","bank_g");a(1,47,A.row1+1,"window","bank_t"),l("balcony",1,45,23,5,1,{blocks:!1});for(let b of[45,49])l("column",0,b,23,1,1);o(0,A.col1+1,7,"door","bank_g"),m(34,23,60,26,Kt.paving);for(let b=A.col0;b<=A.col1;b++)a(0,b,13,"wall","inner");for(let b of[39,55])a(0,b,13,"door","inner");let M={col0:43,row0:4,col1:51,row1:9};for(let b=M.row0;b<=M.row1;b++)o(0,M.col0,b,"wall","vault"),o(0,M.col1+1,b,"wall","vault");for(let b=M.col0;b<=M.col1;b++)a(0,b,M.row1+1,"wall","vault");a(0,47,M.row1+1,"door","vault");for(let b=M.row0;b<=M.row1;b++)for(let H=M.col0;H<=M.col1;H++)x[0][b][H]="steel";for(let b=A.row0;b<=10;b++)o(0,40,b,"wall","inner"),o(0,55,b,"wall","inner");for(let b=A.col0;b<40;b++)a(0,b,11,"wall","inner");for(let b=55;b<=A.col1;b++)a(0,b,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let b of[37,38,41,42,43,44,50,51,52,53,56,57])l("counter",0,b,15,1,1);l("sofa",0,38,20,2,1),l("sofa",0,55,20,2,1),l("table",0,41,19,2,1),l("table",0,52,19,2,1);for(let[b,H]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])l("plant",0,b,H);for(let b=M.col0;b<=M.col1;b++)l("deposits",0,b,M.row0);for(let b of[5,6,7])l("deposits",0,M.col0,b,1,1,{rotation:3}),l("deposits",0,M.col1,b,1,1,{rotation:1});l("table",0,46,7,2,1),l("desk",0,36,4,2,1),l("console",0,39,4),l("locker",0,36,9),l("locker",0,37,9),l("desk",0,56,5,2,1),l("cabinet",0,58,4),l("cabinet",0,58,9),l("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let b=A.row0;b<=A.row1;b++)o(1,41,b,"wall","inner"),o(1,53,b,"wall","inner");for(let b=41;b<=52;b++)a(1,b,10,"wall","inner"),a(1,b,13,"wall","inner");for(let b of[7,17])for(let[H,q]of[[A.col0,40],[53,A.col1]])for(let oe=H;oe<=q;oe++)a(1,oe,b,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),l("table",1,45,16,4,2),l("bookcase",1,42,21),l("bookcase",1,52,21),l("desk",1,37,4,2,1),l("bookcase",1,36,6),l("sofa",1,37,9,2,1),l("desk",1,56,4,2,1),l("cabinet",1,58,6),l("desk",1,37,12,2,1),l("cabinet",1,36,16),l("desk",1,56,12,2,1),l("cabinet",1,58,16),l("desk",1,37,19,2,1),l("desk",1,56,19,2,1),l("table",1,45,5,3,2),l("bookcase",1,42,4),l("bookcase",1,52,4),m(61,4,73,26,Kt.asphalt),m(64,27,70,30,Kt.asphalt);for(let b=62;b<=72;b+=2)l("paint",0,b,5,1,4,{blocks:!1,line:"W"}),l("paint",0,b,17,1,4,{blocks:!1,line:"W"});let S=(b,H,q,oe,_e)=>l("car",0,q,oe,2,4,{type:b,color:H,flip:!!_e});S("suv","police",62,5),S("suv","police",64,5),S("van","white",68,5),S("suv","graphite",62,17,!0),S("suv","red",70,17,!0),l("lamp",0,61,12),l("lamp",0,73,12);let he=v("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),m(83,22,85,26,Kt.path);for(let b of[80,81,86,87])l("counter",0,b,19,1,1);l("locker",0,76,6),l("locker",0,77,6),l("locker",0,78,6),l("desk",0,76,10,2,1),l("rack",0,91,6),l("rack",0,91,7),l("rack",0,90,6),l("crate",0,91,10),l("bunk",0,76,17,2,1),l("bunk",0,90,17,2,1),l("desk",0,89,21,2,1),l("cabinet",0,75,21),l("desk",1,76,7,2,1),l("desk",1,89,7,2,1),l("cabinet",1,75,10),l("cabinet",1,91,10),l("desk",1,76,18,2,1),l("desk",1,89,18,2,1),l("bookcase",1,75,21),l("bookcase",1,91,21);for(let b=3;b<e;b+=10)(b<63||b>71)&&l("streetLamp",0,b,30),b+5<e&&(b+5<43||b+5>49)&&l("streetLamp",0,b+5,49);for(let b of[17,58,88])l("bin",0,b,28);l("busStop",0,30,50,3,1),l("bench",0,31,51,1,1,{rotation:0}),l("bin",0,34,51);let J=(b,H,q,oe,_e)=>l("car",0,q,oe,4,2,{type:b,color:H,flip:!!_e});J("suv","white",20,33),J("van","sand",36,42,!0),J("suv","blue",58,36),J("suv","olive",74,45,!0),J("suv","graphite",81,33),J("van","white",6,45,!0),v("houseB",3,55,16,69,3,"cream","N"),v("houseC",22,56,34,70,2,"green","N"),v("houseD",51,55,63,70,3,"pink","N"),v("houseE",72,56,86,70,3,"ochre","N");for(let[b,H,q]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])m(b,53,H,q,Kt.path);for(let b=1;b<=32;b++)[10,11,29,30].includes(b)||l("hedge",0,b,73);for(let b=59;b<=91;b++)[80,81].includes(b)||l("hedge",0,b,73);m(0,76,36,77,Kt.path),m(56,76,91,77,Kt.path);for(let[b,H]of[[10,11],[29,30],[57,58],[80,81]])m(b,71,H,75,Kt.path);for(let b=3;b<=33;b+=5)l("tree",0,b,83,1,1,{type:b%2?"chestnut":"linden"});for(let b of[5,20,35])l("bench",0,b,78,1,1,{rotation:2});for(let b of[60,66])l("tree",0,19,b,1,1,{type:"linden"}),l("tree",0,68,b,1,1,{type:"chestnut"}),l("tree",0,90,b,1,1,{type:"linden"});let N={col:46.5,row:82.5};g(N.col,N.row,12,Kt.paving),m(44,53,48,71,Kt.paving),l("fountain",0,42,78,9,9,{blocks:!1});for(let b=78;b<=86;b++)for(let H=42;H<=50;H++)Math.hypot(H+.5-N.col,b+.5-N.row)<4.4&&u(0,H,b);for(let b=0;b<8;b++){let H=b/8*Math.PI*2+Math.PI/8,q=Math.floor(N.col+Math.cos(H)*8.6),oe=Math.floor(N.row+Math.sin(H)*8.6),_e=[[0,-1],[1,0],[0,1],[-1,0]].map(([W,pe])=>W*Math.cos(H)+pe*Math.sin(H));l(b%2?"streetLamp":"bench",0,q,oe,1,1,{rotation:_e.indexOf(Math.max(..._e))})}m(60,81,82,95,Kt.paving);let F=68,G=87,Z=d(F,G);for(let[b,H]of[[60,81],[82,81],[60,95],[82,95]])l("lamp",0,b,H);l("crate",0,80,84),l("crate",0,81,84),l("barrels",0,62,93);let k=(b,H,q,oe)=>[b,H,q,oe];return{spawns:{squad:[k(F+1,G,0,1),k(F+2,G,0,1),k(F+3,G,0,1),k(F+1,G+3,0,5),k(F+2,G+3,0,5),k(F+3,G+3,0,5)],mech:[k(F,G+1,0,7)],aliens:[k(44,17,0,0),k(51,19,0,0),k(47,11,0,1),k(40,8,1,3),k(6,13,0,7),k(12,17,0,5),k(28,37,0,3),k(62,44,0,5),k(84,36,0,1),k(83,16,0,3),k(88,9,1,5),k(68,13,0,1)]},extraction:Z,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var ru=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),Yt=typeof globalThis<"u"&&globalThis.ALIENS_MAP||ru.get("map")||"outpost",rr=24,D=1.25,Nn=4,ht=2.5,It=Yt==="big"?rr*2:Yt==="base"?68:Yt==="city"?96:rr,qr=1,Zr=6;var Ut={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function sr(i){return Array.from({length:Nn},()=>Array.from({length:It+1},()=>new Array(It+1).fill(i)))}function ou(){let i=sr(0),e=sr(0),t=sr(null),n=sr(null),s=sr(0),r=[],o=[],a=[],l=[],c=[],h=[],d=[],u=Yt==="city"?Array.from({length:It},()=>new Array(It).fill(0)):null,f=Yt==="city"?Array.from({length:It},()=>new Array(It).fill(null)):null,p=Yt==="city"?sr(null):null;if(Yt!=="base")for(let B=0;B<It;B++)for(let $=0;$<It;$++)i[0][B][$]=Ut.ground;let x=0,m=0,g=(B,$,ge,me,w,re)=>{for(let ee=ge;ee<=w;ee++)for(let X=$;X<=me;X++)i[B][ee+m][X+x]=re},_=(B,$,ge,me,w)=>{for(let re=ge;re<=w;re++)for(let ee=$;ee<=me;ee++)s[B][re+m][ee+x]=1},y=(B,$,ge,me)=>{e[B][ge+m][$+x]=me},v=(B,$,ge,me,w)=>{t[B][ge+m][$+x]=me?{type:me,style:w}:null},T=(B,$,ge,me,w)=>{n[B][ge+m][$+x]=me?{type:me,style:w}:null},C=(B,$,ge,me,w,re,ee)=>{for(let X=ge;X<=w;X++)v(B,$,X,re,ee),v(B,me+1,X,re,ee);for(let X=$;X<=me;X++)T(B,X,ge,re,ee),T(B,X,w+1,re,ee)},P=(B,$,ge,me,w,re)=>{for(let ee=ge;ee<=me;ee++)v(B,$,ee,w,re)},z=(B,$,ge,me,w,re)=>{for(let ee=ge;ee<=me;ee++)T(B,ee,$,w,re)},A=(B,$,ge,me,w=1,re=1,ee={})=>r.push({kind:B,level:$,col:ge+x,row:me+m,cols:w,rows:re,rotation:0,blocks:!0,...ee}),M=B=>{let $={...B,col0:B.col0+x,row0:B.row0+m,col1:B.col1+x,row1:B.row1+m};return l.push($),$},S=B=>a.push({...B,from:[B.from[0]+x,B.from[1]+m,B.from[2]],to:[B.to[0]+x,B.to[1]+m,B.to[2]],col:B.col+x,row:B.row+m}),he=(B,$,ge,me,w)=>r.push({kind:"ladder",level:B,col:$+x,row:ge+m,cols:1,rows:1,blocks:!1,height:me,side:w}),J=(B,$,ge,me)=>h.push({rect:[(B+x)*D,($+m)*D,(ge+x)*D,(me+m)*D]}),N=(B,$,ge)=>h.push({circle:[(B+x)*D,($+m)*D,ge*D]}),F=(B,$,ge)=>d.push([B,$+x,ge+m]),G=(B,$,ge,me,w,re,ee)=>{o.push({level:B,col:$+x,row:ge+m,dirCol:me,dirRow:w,count:re,style:ee});for(let X=0;X<re;X++){let K=$+me*X,se=ge+w*X;g(B,K,se,K,se,Ut.stairs),y(B,K,se,(X+.5)/re*ht),B+1<Nn&&g(B+1,K,se,K,se,Ut.none)}};function Z(){M({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),g(1,3,3,10,9,Ut.interior),g(2,3,3,10,9,Ut.roof),_(0,3,3,10,9),_(1,3,3,10,9);for(let B of[0,1])C(B,3,3,10,9,"wall","hab");C(2,3,3,10,9,"parapet","hab"),P(0,7,3,5,"wall","inner"),v(0,7,5,"door","inner"),z(0,6,3,10,"wall","inner"),T(0,4,6,"door","inner"),T(0,9,6,"door","inner"),z(0,7,3,10,"wall","inner"),T(0,6,7,"door","inner"),T(0,9,7,"door","inner"),P(0,8,7,9,"wall","inner"),T(0,6,10,"door","hab"),v(0,11,6,"door","hab");for(let B of[4,8,10])T(0,B,10,"window","hab");for(let B of[4,8])v(0,11,B,"window","hab");T(0,5,3,"window","hab"),v(0,3,4,"window","hab"),G(0,4,8,1,0,3,"hab"),P(1,7,3,5,"wall","inner"),v(1,7,4,"door","inner"),z(1,6,3,10,"wall","inner"),T(1,5,6,"door","inner"),T(1,9,6,"door","inner"),P(1,8,7,9,"wall","inner"),z(1,7,8,10,"wall","inner"),T(1,9,7,"door","inner"),z(1,8,4,6,"rail","hab"),z(1,9,4,6,"rail","hab"),v(1,4,8,"rail","hab");for(let B of[4,5,7,9,10])T(1,B,10,"window","hab");for(let B of[4,5,8])v(1,11,B,"window","hab");T(1,4,3,"window","hab"),T(1,8,3,"window","hab"),v(1,3,5,"window","hab"),A("console",0,3,3),A("console",0,4,3),A("locker",0,6,3),A("bunk",0,9,3,2,1),A("locker",0,10,5),A("labTable",0,9,8,2,1),A("cabinet",0,10,9),A("crate",0,7,9),A("crate",0,3,7),A("rack",1,10,7),A("rack",1,10,8),A("rack",1,10,9),A("desk",1,4,3,2,1),A("console",1,9,3),A("crate",1,3,5),A("crate",1,3,6),A("acUnit",2,5,4,2,1),A("acUnit",2,8,6,1,1),A("antenna",2,4,8),A("solar",2,6,7,2,2),S({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),he(0,11,9,2*ht+.9,"W"),M({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),g(1,15,4,19,8,Ut.deck),C(1,15,4,19,8,"rail","deck"),T(1,17,9,null);for(let[B,$]of[[15,4],[19,4],[15,8],[19,8],[17,4]])A("pylon",0,B,$);G(0,17,11,0,-1,3,"deck"),M({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),C(1,16,4,18,6,"wall","cabin"),T(1,17,7,"door","cabin"),v(1,19,5,"window","cabin"),T(1,16,7,"window","cabin"),g(1,16,4,18,6,Ut.interior),g(2,16,4,18,6,Ut.roof),C(2,16,4,18,6,"parapet","cabin"),_(1,16,4,18,6),A("console",1,16,4),A("rack",1,18,4),A("dish",2,17,5),S({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),he(1,19,6,ht+.9,"W"),A("barrels",0,16,6),A("crate",0,18,7),M({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),g(3,20,14,21,15,Ut.deck),C(3,20,14,21,15,"rail","tower");for(let[B,$]of[[20,14],[21,14],[20,15],[21,15]])A("towerLeg",0,B,$);A("searchlight",3,21,14),S({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),he(0,20,16,3*ht+.9,"N"),T(3,20,16,null),A("container",0,13,13,2,4,{color:"orange"}),A("container",0,1,12,2,4,{color:"blue"}),A("truck",0,8,12,2,5),A("tank",0,21,4,2,3),A("generator",0,12,1,2,2);for(let[B,$]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])A("crate",0,B,$);A("barrels",0,12,4),A("barrels",0,20,10),A("lamp",0,12,11),A("lamp",0,15,12),z(0,20,10,13,"barrier","concrete"),P(0,16,17,19,"barrier","concrete");for(let[B,$,ge]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])A("rock",0,B,$,ge,ge);J(1.3,1.3,12.6,11.7),J(14.2,3,20.8,12.8),J(19.4,13.4,22.6,16.8),N(4.6,19,3.6)}function k(){M({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),_(0,2,2,13,9),g(1,2,2,13,9,Ut.roof),C(0,2,2,13,9,"wall","hab"),C(1,2,2,13,9,"parapet","hab"),T(0,6,10,"door","hab"),T(0,7,10,"door","hab"),v(0,14,5,"door","hab"),v(0,2,6,"door","hab");for(let B of[3,4,9,10,12])T(0,B,10,"window","hab");for(let B of[4,8,11])T(0,B,2,"window","hab");for(let B of[3,7,8])v(0,14,B,"window","hab");for(let B of[3,4,5,9,10,11])A("rack",0,B,2);A("crate",0,4,5),A("crate",0,5,5),A("crate",0,4,6),A("crate",0,10,6),A("crate",0,11,6),A("barrels",0,12,8),A("desk",0,2,8,2,1),A("cabinet",0,13,3),A("acUnit",1,4,4,2,1),A("acUnit",1,9,6,2,1),M({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),g(1,13,13,20,19,Ut.interior),g(2,13,13,20,19,Ut.roof),_(0,13,13,20,19),_(1,13,13,20,19);for(let B of[0,1])C(B,13,13,20,19,"wall","hab");C(2,13,13,20,19,"parapet","hab"),P(0,17,13,19,"wall","inner"),v(0,17,15,"door","inner"),v(0,17,16,"door","inner"),T(0,18,20,"door","hab"),v(0,13,15,"door","hab");for(let B of[14,15,19])T(0,B,20,"window","hab");for(let B of[17,18])v(0,21,B,"window","hab");T(0,15,13,"window","hab"),T(0,19,13,"window","hab"),G(0,14,18,1,0,3,"hab"),z(1,18,14,16,"rail","hab"),v(1,14,19,"rail","hab"),v(1,14,18,"rail","hab");for(let B of[14,16,18,19])T(1,B,20,"window","hab");for(let B of[14,16,18])v(1,21,B,"window","hab");for(let B of[14,17,19])T(1,B,13,"window","hab");A("desk",0,14,14,2,1),A("console",0,19,14),A("locker",0,20,17),A("desk",1,15,14,2,1),A("desk",1,18,16,2,1),A("rack",1,20,14),A("crate",1,20,19),A("antenna",2,19,18),A("acUnit",2,15,15,2,1),A("container",0,17,3,2,4,{color:"orange"}),A("generator",0,9,13,2,2),A("barrels",0,12,12),A("crate",0,8,16),A("crate",0,9,17),A("lamp",0,15,10),A("lamp",0,11,19),z(0,11,18,21,"barrier","concrete");for(let[B,$,ge]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])A("rock",0,B,$,ge,ge);J(1.3,1.3,14.7,11.7),J(12.3,12.3,21.7,20.7),J(6.3,11.3,12.7,13.2)}function b(){J(.6,.6,22.4,22.4);let B=(ge,me,w)=>A("paint",0,ge,me,1,w,{blocks:!1,line:"W"});for(let[ge,me]of[[2,4],[10,4],[14,4]])for(let w=2;w<=20;w+=2)B(w,ge,me);let $=(ge,me,w,re,ee)=>A("car",0,w,re,2,4,{type:ge,color:me,flip:!!ee});$("suv","white",2,2),$("van","sand",8,2),$("suv","graphite",10,2),$("suv","red",16,2),$("suv","blue",4,10,!0),$("van","white",12,10,!0),$("suv","olive",18,10,!0),$("suv","graphite",6,14),$("suv","white",14,14),A("truck",0,21,15,2,5);for(let[ge,me]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])A("lamp",0,ge,me);P(0,1,2,5,"barrier","concrete"),P(0,1,10,17,"barrier","concrete"),z(0,23,2,9,"barrier","concrete"),z(0,23,13,20,"barrier","concrete"),A("crate",0,21,3),A("crate",0,21,4),A("barrels",0,22,12);for(let[ge,me,w]of[[0,22,2],[23,0,1]])A("rock",0,ge,me,w,w)}function H(B,$){A("tiltrotor",0,B,$,6,4,{blocks:!1});for(let w=B;w<=B+5;w++)for(let re=$;re<=$+3;re++)y(0,w,re,.6);for(let w=$;w<=$+3;w++)y(0,B+6,w,.45),y(0,B+7,w,.15);let ge={col:B+4,row:$+4};y(0,ge.col,ge.row,.3),_(0,B,$,B+5,$+3);for(let w=B;w<=B+5;w++)T(0,w,$,"hull","tiltrotor"),w!==ge.col&&T(0,w,$+4,"hull","tiltrotor");for(let w=$;w<=$+3;w++)v(0,B,w,"hull","tiltrotor");for(let w=B-4;w<=B+5;w++)F(0,w,$-1),w!==ge.col&&F(0,w,$+4);for(let w=B-4;w<=B-1;w++)for(let re=$;re<=$+3;re++)F(0,w,re);let me=[];for(let w=B;w<=B+7;w++)for(let re=$;re<=$+3;re++)me.push([w+x,re+m,0]);return me}function q(){let ge=H(10,10);J(4.3,4.3,21.7,19.7),A("crate",0,20,8),A("crate",0,20,9),A("crate",0,21,9),A("barrels",0,19,16),A("generator",0,5,17,2,2);for(let[w,re]of[[4,4],[21,4],[4,19],[21,19]])A("lamp",0,w,re);for(let[w,re,ee]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])A("rock",0,w,re,ee,ee);let me=(w,re,ee)=>[w+x,re+m,0,ee];return{squad:[me(11,10,1),me(12,10,1),me(13,10,1),me(11,13,5),me(12,13,5),me(13,13,5)],mech:[me(10,11,7)],extraction:ge}}function oe(){x=qr,m=Zr;let B=gs,$=B.grid[0],ge=B.grid[1],me=Array.from({length:Nn},()=>Array.from({length:ge},()=>new Array($).fill(null))),w=Array.from({length:ge},()=>new Array($).fill(0)),re=Array.from({length:Nn},()=>Array.from({length:ge},()=>new Array($).fill(!1))),ee=(Y,te,Ae,De=0)=>{for(let ye=Y.y;ye<Y.y+Y.height;ye++)for(let be=Y.x;be<Y.x+Y.width;be++){for(let Ye=De;Ye<Math.min(Nn,De+Ae);Ye++)me[Ye][ye][be]=te;re[De][ye][be]=!0,De||(w[ye][be]=Ae)}},X=new Set(["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430","\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430"]);B.rooms.forEach((Y,te)=>ee(Y,X.has(Y.name)?"hangar":Y.kind==="corridor"?Y.zone+":corridor":"room"+te,Y.levels,Y.floor||0)),B.corridors.forEach(Y=>ee(Y,"corridor",Y.levels||1));let K=(Y,te)=>Y>=0&&te>=0&&Y<$&&te<ge,se=(Y,te,Ae)=>K(te,Ae)?me[Y][Ae][te]:null,Ee=(Y,te)=>K(Y,te)?w[te][Y]:0,Le=(Y,te)=>{let Ae=0;for(let De=0;De<Nn;De++)se(De,Y,te)&&(Ae=De+1);return Ae};for(let Y=0;Y<Nn;Y++)for(let te=0;te<ge;te++)for(let Ae=0;Ae<$;Ae++)me[Y][te][Ae]&&(re[Y][te][Ae]&&g(Y,Ae,te,Ae,te,Ut.interior),_(Y,Ae,te,Ae,te));for(let Y=0;Y<Nn;Y++)for(let te=0;te<=ge;te++)for(let Ae=0;Ae<=$;Ae++)te<ge&&se(Y,Ae-1,te)!==se(Y,Ae,te)&&v(Y,Ae,te,"wall","inner"),Ae<$&&se(Y,Ae,te-1)!==se(Y,Ae,te)&&T(Y,Ae,te,"wall","inner");let Ze={gate:2.35,double:2.1},I=4.4;B.doors.forEach(Y=>{let te=Y.size>1?c.length:-1,Ae=Y.floor||0,De=[];for(let we=0;we<Y.size;we++){let yt=Y.side==="N"?["N",Y.x+we,Y.y]:Y.side==="S"?["N",Y.x+we,Y.y+1]:Y.side==="W"?["W",Y.x,Y.y+we]:["W",Y.x+1,Y.y+we],[Je,He,Fe]=yt,Ve=Je==="N"?[He,Fe-1]:[He-1,Fe];De.push({orient:Je,col:He,row:Fe,levels:Math.min(Ee(He,Fe),Ee(Ve[0],Ve[1]))})}let ye=!Ae&&Y.kind==="gate"&&De.every(we=>we.levels>=2),be=ye?I:Ze[Y.kind]||2.1,Ye=[];for(let{orient:we,col:yt,row:Je}of De)for(let He=Ae;He<Ae+(ye?2:1);He++)(we==="N"?T:v)(He,yt,Je,"door","inner"),te>=0&&((we==="N"?n:t)[He][Je+m][yt+x].gate={group:te,kind:Y.kind,height:be}),Ye.push([yt+x,Je+m,we,He]);te>=0&&c.push({kind:Y.kind,airlock:Y.airlock,height:be,edges:Ye})});for(let Y of B.stairs||[]){G(0,Y.x,Y.y,Y.dirX,Y.dirY,Y.count,"hab");let te=new Set,Ae=Y.x+Y.dirX*Y.count+","+(Y.y+Y.dirY*Y.count);for(let De=0;De<Y.count;De++)te.add(Y.x+Y.dirX*De+","+(Y.y+Y.dirY*De));for(let De of te){let[ye,be]=De.split(",").map(Number),Ye=[[ye-1,be,()=>t[1][be+m][ye+x],()=>v(1,ye,be,"rail","inner")],[ye+1,be,()=>t[1][be+m][ye+1+x],()=>v(1,ye+1,be,"rail","inner")],[ye,be-1,()=>n[1][be+m][ye+x],()=>T(1,ye,be,"rail","inner")],[ye,be+1,()=>n[1][be+1+m][ye+x],()=>T(1,ye,be+1,"rail","inner")]];for(let[we,yt,Je,He]of Ye){let Fe=we+","+yt;te.has(Fe)||Fe===Ae||Je()||He()}}}let E=new Set;for(let Y of B.thickWalls||[])for(let te=Y.y;te<Y.y+Y.height;te++)for(let Ae=Y.x;Ae<Y.x+Y.width;Ae++)E.add(Ae+","+te);for(let Y=-1;Y<=ge;Y++)for(let te=-1;te<=$;te++){if(Le(te,Y)||Y+m<0||Y+m>=It||te+x<0||te+x>=It)continue;let Ae=0;for(let ye=-1;ye<=1;ye++)for(let be=-1;be<=1;be++)Ae=Math.max(Ae,Le(te+be,Y+ye));if(!Ae)continue;let De=((te+x)*7+(Y+m)*13)%3;A("rockFill",0,te,Y,1,1,{type:E.has(te+","+Y)?`h${Ae}c`:`h${Ae}v${De}`,height:Ae*ht,variant:De,concrete:E.has(te+","+Y)})}iu(B,(Y,te,Ae,De=1,ye=1,be={})=>A(Y,be.level||0,te,Ae,De,ye,be));let ue=H(8,8),le=(Y,te,Ae)=>[Y+x,te+m,0,Ae];return{squad:[le(21,8,1),le(22,8,1),le(21,9,1),le(22,9,1),le(21,10,1),le(22,10,1)],mech:[le(24,12,3)],aliens:[le(39,1,3),le(41,1,3),le(39,3,3),le(41,3,3),le(40,6,3),le(41,8,3),le(40,11,3),le(40,13,3)],extraction:ue}}let _e,W=null,pe=null,Te=null,Pe=null;if(Yt==="city"){let B=su({TILES:It,LEVEL_H:ht,FLOOR:Ut,setFloor:g,setIndoor:_,setW:v,setN:T,object:A,building:M,stairRun:G,tiltrotor:H,block:F,surface:u,marking:f,floorStyle:p});_e=B.spawns,W=B.extraction,pe=B.mission,Te=B.name,Pe=B.caption}else if(Yt==="big"){x=0,m=0,Z(),x=rr,m=0,k(),x=0,m=rr,b(),x=rr,m=rr;let B=q();W=B.extraction,_e={squad:B.squad,mech:B.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(Yt==="base"){let B=oe();W=B.extraction,_e={squad:B.squad,mech:B.mech,aliens:B.aliens}}else Z(),_e=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:Yt,TILE:D,TILES:It,LEVELS:Nn,LEVEL_H:ht,floor:i,offset:e,wallW:t,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:l,spawns:_e,extraction:W,concrete:h,blockedCells:d,gates:c,surface:u,marking:f,floorStyle:p,mission:pe,caption:Pe,name:Te||(Yt==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":Yt==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:Yt==="big"||Yt==="base"||Yt==="city"}}var au=((Number(ru.get("rot"))||0)%4+4)%4;function lu(i,e){let t=i;for(let n=0;n<e;n++)t=s2(t,n+1);return t}function s2(i,e){let t=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(c,h)=>c.map(d=>d.map(u=>u.map(()=>h))),s=(c,h)=>{let d=n(c,h);for(let u=0;u<c.length;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++)d[u][p][t-1-f]=c[u][f][p];return d},r=n(i.wallW,null),o=n(i.wallN,null);for(let c=0;c<i.wallW.length;c++)for(let h=0;h<=t;h++)for(let d=0;d<=t;d++){let u=i.wallW[c][h][d];u&&h<t&&(o[c][d][t-1-h]=u);let f=i.wallN[c][h][d];f&&d<t&&(r[c][d][t-h]=f)}let a=([c,h,...d])=>[t-1-h,c,...d],l=i.objects.map(c=>{let h={col:t-c.row-c.rows,row:c.col,cols:c.rows,rows:c.cols};if(c.kind==="rockFill")return{...c,...h};let d=c.source||c;return{...c,...h,source:d,turns:e}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:l,blockedCells:i.blockedCells.map(([c,h,d])=>[c,t-1-d,h]),gates:(i.gates||[]).map(c=>({...c,edges:c.edges.map(([h,d,u,f])=>u==="W"?[t-1-d,h,"N",f]:[t-d,h,"W",f])})),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(c=>c.circle?{...c,circle:[t*i.TILE-c.circle[1],c.circle[0],c.circle[2]]}:{...c,rect:[t*i.TILE-c.rect[3],c.rect[0],t*i.TILE-c.rect[1],c.rect[2]]}),viewTurns:e}}var xa=class extends js{constructor(e=null){super();let t=new vt;t.deleteAttribute("uv");let n=new Xe({side:un}),s=new Xe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Xr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Se(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Se(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Se(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Se(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Se(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Se(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Se(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new Se(t,or(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let x=new Se(t,or(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Se(t,or(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let g=new Se(t,or(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new Se(t,or(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let y=new Se(t,or(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(i){let e=new ls;return e.color.setScalar(i),e}function ft(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var xy=ft(20261121);var yn=new Uint8Array(512);{let i=ft(7),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)yn[t]=e[t&255]}var mc=i=>i*i*i*(i*(i*6-15)+10),xs=(i,e,t)=>i+(e-i)*t;function zi(i,e,t,n){let s=i&15,r=s<8?e:t,o=s<4?t:s===12||s===14?e:n;return(s&1?-r:r)+(s&2?-o:o)}function hu(i,e,t){let n=Math.floor(i)&255,s=Math.floor(e)&255,r=Math.floor(t)&255;i-=Math.floor(i),e-=Math.floor(e),t-=Math.floor(t);let o=mc(i),a=mc(e),l=mc(t),c=yn[n]+s,h=yn[c]+r,d=yn[c+1]+r,u=yn[n+1]+s,f=yn[u]+r,p=yn[u+1]+r;return xs(xs(xs(zi(yn[h],i,e,t),zi(yn[f],i-1,e,t),o),xs(zi(yn[d],i,e-1,t),zi(yn[p],i-1,e-1,t),o),a),xs(xs(zi(yn[h+1],i,e,t-1),zi(yn[f+1],i-1,e,t-1),o),xs(zi(yn[d+1],i,e-1,t-1),zi(yn[p+1],i-1,e-1,t-1),o),a),l)}function cu(i,e,t,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*hu(i*o,e*o,t*o),o*=2,r*=.5;return s}function Oi(i,e,t,n=5,s=0){let r=i*Math.PI*2,o=e*Math.PI*2,a=t/(Math.PI*2),l=0,c=.5,h=1;for(let d=0;d<n;d++)l+=c*hu(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,c*=.5;return l}function du(i){let e=document.createElement("canvas");return e.width=e.height=i,e}function Et(i,{srgb:e=!0,repeat:t=1}={}){let n=new ta(i);return e&&(n.colorSpace=Mn),n.wrapS=n.wrapT=rs,n.repeat.set(t,t),n.anisotropy=8,n}function r2(i,e,t=2){let n=du(e),s=n.getContext("2d"),r=s.createImageData(e,e),o=(a,l)=>i[(l+e)%e*e+(a+e)%e];for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c=(o(l+1,a)-o(l-1,a))*t,h=(o(l,a+1)-o(l,a-1))*t,d=Math.hypot(c,h,1),u=(a*e+l)*4;r.data[u]=(-c/d*.5+.5)*255,r.data[u+1]=(h/d*.5+.5)*255,r.data[u+2]=(1/d*.5+.5)*255,r.data[u+3]=255}return s.putImageData(r,0,0),Et(n,{srgb:!1})}function o2(i,e,t){let n=new Float32Array(i*i),s=du(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=l/i,h=a/i,d=e(c,h,l,a);n[a*i+l]=d;let[u,f,p]=t(c,h,d,l,a),x=(a*i+l)*4;o.data[x]=u,o.data[x+1]=f,o.data[x+2]=p,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var gc=i=>Math.max(0,Math.min(255,i));function $r(i=3,e=[128,120,108]){let n=ft(i),{canvas:s,ctx:r,heights:o}=o2(512,(a,l)=>{let c=Oi(a,l,6,6,i),h=Math.abs(Oi(a,l,14,3,i+9));return c*.8-Math.max(0,.06-h)*6},(a,l,c)=>{let h=Oi(a,l,20,3,i+3),d=.72+c*.55+(n()-.5)*.1,u=e[0]*d,f=e[1]*d,p=e[2]*d;return h>.22&&(u=u*.7+60,f=f*.75+75,p=p*.6+30),[gc(u),gc(f),gc(p)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:Et(s),normalMap:r2(o,512,5)}}function ar(i="#ffb347",e=1,t="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=ft(e);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,t==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let l=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,l):s.lineTo(a,l)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let l=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,l,6),a+=l+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return Et(n)}var yy=new L(0,1,0);function xc(i,e,{flatten:t=.75,roughness:n=.35,detail:s=3}={}){let r=new jn(i,s),o=r.attributes.position,a=new L;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l);let c=a.clone().normalize(),h=1+cu(c.x*1.6+e,c.y*1.6,c.z*1.6-e,4)*n*2+Math.max(0,cu(c.x*4+e,c.y*4,c.z*4,2))*.15;a.copy(c).multiplyScalar(i*h);let d=Math.floor((c.x*3+e)*1.3)*.02;a.y*=t,a.x+=d,o.setXYZ(l,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function yc(i,e){i.traverse(t=>{if(t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])"envMapIntensity"in n&&(n.envMapIntensity=e*(n.userData.envBoost||1))})}var uu=Math.SQRT1_2,fu=(i,e)=>new xe((i+e)*uu,(e-i)*uu);var Iy=new xe(.75,-.66).normalize();var Jr=new L;function Gn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();let c=.5*o/(o+a),h=1-Jr.angleTo(i)/l;return Math.sign(Jr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ya=class extends vt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,p=new L,x=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:p.set(1,0,0),u[g+0]=Gn(p,l,"z","y",r,n),u[g+1]=1-Gn(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),u[g+0]=1-Gn(p,l,"z","y",r,n),u[g+1]=1-Gn(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),u[g+0]=1-Gn(p,l,"x","z",r,e),u[g+1]=Gn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),u[g+0]=1-Gn(p,l,"x","z",r,e),u[g+1]=1-Gn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),u[g+0]=1-Gn(p,l,"x","y",r,e),u[g+1]=1-Gn(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),u[g+0]=Gn(p,l,"x","y",r,e),u[g+1]=1-Gn(p,l,"y","x",r,t);break}}};var l2=(i,e,t)=>new L(i,e,t),_a=null;function mu(){if(_a)return _a;let i=(e,t=.75,n=.15,s={})=>new Xe({color:e,roughness:t,metalness:n,...s});return _a={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new Bn({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},_a}function tn(i){return i.castShadow=i.receiveShadow=!0,i}function Ie(i,e,t,n,s,r,o,a,l=0){let c=l>0?new ya(e,t,n,3,Math.min(l,e/2.1,t/2.1,n/2.1)):new vt(e,t,n),h=tn(new Se(c,s));return h.position.set(r,o,a),i.add(h),h}function Ot(i,e,t,n,s,r,o,a="x",l=20,c=e){let h=tn(new Se(new Pt(e,c,t,l),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function va(i,e,t,n){let s=new er(e.map(r=>l2(...r)),!1,"catmullrom",.05);i.add(tn(new Se(new Br(s,e.length*8,t,8),n)))}function gi(i,e,t,n,s,r=.025){let o=new en;e.forEach(([c,h],d)=>{d===0?o.moveTo(-c,h):o.lineTo(-c,h)});let a=new xn(o,{depth:t-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let l=tn(new Se(a,n));return l.position.x=s-t/2+r,i.add(l),l}function Kr(i,e,t,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new en;e.forEach(([u,f],p)=>{p===0?a.moveTo(u,f):a.lineTo(u,f)});let l=n-t,c=new xn(a,{depth:l-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=c.attributes.position;for(let u=0;u<h.count;u++){let f=Math.min(1,Math.max(0,(h.getZ(u)+o)/l)),{scale:p,drop:x}=r(f);h.setX(u,h.getX(u)*p),h.setY(u,h.getY(u)-x*Math.max(0,h.getY(u)))}c.computeVertexNormals();let d=tn(new Se(c,s));return d.position.z=t+o,i.add(d),d}function c2(i,e,t,n=.03,s=0){let r=[],o=i/2,a=(l,c,h,d,u)=>{for(let f=0;f<=6;f++){let p=d+(u-d)*f/6;r.push([l+Math.cos(p)*h,c+Math.sin(p)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-t,s+e-t,t,0,Math.PI/2),a(-o+t,s+e-t,t,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function jr(i,e,t,n,s,r){return c2(i-r*2,e-r*2,Math.max(.01,t-r),Math.max(.01,n-r),s+r)}function h2(i,e,t,n,s,r,o){let a=mu(),l=s*.58,c=.09,h=r/2,d=[new xe(l,-h)];for(let x=0;x<=6;x++){let m=-Math.PI/2+x/6*Math.PI/2;d.push(new xe(s-c+Math.cos(m)*c,-h+c+Math.sin(m)*c))}for(let x=0;x<=6;x++){let m=x/6*Math.PI/2;d.push(new xe(s-c+Math.cos(m)*c,h-c+Math.sin(m)*c))}d.push(new xe(l,h));let u=tn(new Se(new cs(d,36),a.rubber));u.rotation.z=Math.PI/2,u.position.set(e,t,n),i.add(u);let f=20;for(let x=0;x<f;x++){let m=x/f*Math.PI*2;for(let g of[-1,1])Ie(i,r*.36,.04,.075,a.rubber,e+g*r*.2,t+Math.cos(m)*(s+.005),n+Math.sin(m)*(s+.005),.015).rotation.set(m,g*.5,0)}let p=e+o*(h-.03);Ot(i,l,.05,a.hub,p,t,n,"x",28),Ot(i,s*.24,.08,a.hub,p+o*.04,t,n,"x",18),Ot(i,s*.12,.05,a.frame,p+o*.08,t,n,"x",12);for(let x=0;x<8;x++){let m=x/8*Math.PI*2;Ot(i,.018,.04,a.steel,p+o*.03,t+Math.cos(m)*s*.36,n+Math.sin(m)*s*.36,"x",6)}}var gu={length:6.15,width:2.35};function xu(){let i=mu(),e=new Me,t=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let k of o)for(let b of[-1,1])h2(e,b*s,t,k,t,n,b);for(let k of[-1,1])Ie(e,.12,.22,5.75,i.frame,k*.45,a-.11,3.1);for(let k of o){Ot(e,.065,s*2-.25,i.frame,0,t,k,"x",12);let b=new Se(new Ln(.2,16,10),i.frame);b.scale.set(1.1,.9,.9),b.position.set(0,t,k),e.add(tn(b))}Ie(e,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let k of[-1,1]){let b=new Se(new Di(.055,.018,6,12,Math.PI*1.4),i.frame);b.position.set(k*.6,.72,6.16),b.rotation.set(0,Math.PI/2,Math.PI*.8),e.add(tn(b))}Ie(e,.6,.24,.24,i.frame,0,.84,5.86,.06),Ot(e,.1,.48,i.steel,0,.88,5.86,"x",14);let l=4.72,c=6;Kr(e,jr(1.14,.78,.24,.02,.98,.03),l,c,i.olive,k=>({scale:1-.1*k,drop:.045*k*k}),.03),Ie(e,.03,.02,c-l-.1,i.oliveDark,0,1.755,(l+c)/2);for(let k of[-1,1])for(let b=0;b<6;b++){let H=Ie(e,.02,.2,.05,i.frame,k*.552,1.38,4.95+b*.11,.008);H.rotation.y=k*.15}Kr(e,jr(1,.68,.12,.04,1.02,.012),c-.02,c+.05,i.olive,void 0,.012);for(let k=-4;k<=4;k++)Ie(e,.045,.5,.04,i.frame,k*.09,1.34,c+.045,.012);let h=[],d=(k,b,H,q,oe)=>{let _e=[];for(let W=0;W<=20;W++){let pe=H+(q-H)*W/20;_e.push([r+Math.cos(pe)*k,t+Math.sin(pe)*b])}return oe?_e.reverse():_e};h.push(...d(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...d(.92,.66,.2,2.75,!0).slice(0,-1));let u=[[r+Math.cos(2.75)*.92,t+Math.sin(2.75)*.66]];for(let k of[-1,1]){gi(e,h,.44,i.olive,k*.93,.03),Ie(e,.05,.45,1.05,i.oliveDark,k*.7,1,r+.05);let b=new Se(new Ln(.12,18,12),i.olive);b.scale.set(1,1,.75),b.position.set(k*.83,1.13,5.86),e.add(tn(b)),Ot(e,.09,.02,i.lens,k*.83,1.13,5.95,"z",18);for(let H of[-.05,0,.05])Ie(e,.012,.2,.012,i.frame,k*.83+H,1.13,5.99);Ie(e,.07,.045,.04,i.amber,k*1,1.2,5.7,.01),Ie(e,.36,.4,.02,i.rubber,k*.93,.55,r-.82)}let f=4.74,p=3.62,x=(f+p)/2,m=f-p;Ie(e,1.3,.24,m-.1,i.frame,0,1.06,x),Kr(e,jr(2.18,.98,.1,.05,1,.05),p,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},_={z:f-.24,y:2.44},y=[[p+.02,1.95],[f-.02,1.95],[g.z,g.y]],v=2.6,T=.16,C=.24;for(let k=1;k<=10;k++){let b=k/10*Math.PI/2;y.push([_.z-C*(1-Math.cos(b)),_.y+(v-_.y)*Math.sin(b)])}for(let k=0;k<=8;k++){let b=k/8*Math.PI/2;y.push([p+.04+T-Math.sin(b)*T,v-T+Math.cos(b)*T])}gi(e,y,2.1,i.olive,0,.09);let P=Math.atan2(g.z-_.z,_.y-g.y),z=(g.z+_.z)/2+.1*Math.cos(P),A=(g.y+_.y)/2+.1*Math.sin(P);for(let k of[-1,1]){let b=Ie(e,.84,.44,.03,i.glass,k*.48,A,z,.02);b.rotation.x=-P,Ie(e,.03,.36,.6,i.glass,k*1.06,2.22,x+.02,.02),Ie(e,.03,.85,.02,i.oliveDark,k*1.1,1.55,x-.28),Ie(e,.03,.03,.12,i.steel,k*1.105,1.8,x-.16),va(e,[[k*1.05,2,f-.1],[k*1.28,2.12,f],[k*1.31,2.34,f]],.014,i.frame),Ie(e,.04,.26,.16,i.frame,k*1.32,2.36,f,.015)}let M=Ie(e,.06,.46,.04,i.oliveDark,0,A,z+.01);M.rotation.x=-P,Ie(e,1.1,.28,.03,i.glass,0,2.22,p+.03,.02);for(let k of[-.25,0,.25])Ie(e,.07,.04,.05,i.amber,k,2.7,f-.4,.01);Ot(e,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let k of[2.75,3.35])Ie(e,.04,.58,.05,i.frame,.88,.78,k);Ie(e,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),va(e,[[.55,1,p-.02],[.75,1.25,p-.08],[.78,2.65,p-.08]],.045,i.frame);let S=3.5,he=.12,J=S-he,N=(S+he)/2,F=1.1,G=2.08;Ie(e,2.08,.12,J,i.frame,0,F-.06,N),Kr(e,jr(2.35,G,.2,.05,F,.08),he,S,i.olive,void 0,.08);for(let k of[-1,1]){for(let b of[.88,1.78,2.68])Ie(e,.03,.44,.62,i.oliveDark,k*1.177,F+1.45,b,.03),Ie(e,.03,.34,.52,i.glass,k*1.186,F+1.45,b,.02);for(let b of[F+.38,F+1.02])Ie(e,.02,.03,J-.3,i.oliveDark,k*1.178,b,N);Ie(e,.3,.36,.5,i.oliveDark,k*1,F-.24,1.71,.05)}Ie(e,.86,1.75,.03,i.oliveDark,-.45,F+.92,he-.01,.03),Ie(e,.3,.26,.03,i.glass,-.45,F+1.45,he-.03,.02),Ie(e,.03,.03,.14,i.steel,-.1,F+.9,he-.05);for(let k of[-.75,-.15])Ie(e,.03,.9,.03,i.frame,k,F-.3,he-.12);for(let k=0;k<4;k++)Ie(e,.6,.025,.03,i.frame,-.45,F-.65+k*.22,he-.12);for(let k of[-1,1])Ie(e,.14,.08,.04,i.red,k*.95,.92,he-.02,.02),Ie(e,.4,.4,.02,i.rubber,k*.95,.58,.45);let Z=F+G;for(let k of[-1,1])va(e,[[k*.98,Z-.02,.35],[k*.98,Z+.14,.5],[k*.98,Z+.14,3.05],[k*.98,Z-.02,3.2]],.02,i.frame);for(let k of[.65,1.45,2.25,3])Ie(e,1.96,.025,.025,i.frame,0,Z+.14,k);return Ie(e,1.2,.18,.9,i.canvas,-.2,Z+.08,1.25,.08),Ie(e,.6,.55,.3,i.oliveDark,.55,Z-.38,S+.16,.08),Ot(e,.12,.42,i.frame,.55,Z+.12,S+.16,"y",16),Ot(e,.16,.04,i.oliveDark,.55,Z+.34,S+.16,"y",16),Ot(e,.035,.9,i.frame,-.7,Z+.38,S-.2,"y",8),Kr(e,jr(2.37,.16,.02,.05,F-.005,.01),he+.01,S-.01,i.dusty,void 0,.01),e}var ei={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function d2(i){let e=i?{clippingPlanes:i,clipShadows:!0,side:dn}:{},t=(n,s=.7,r=.25,o={})=>new Xe({color:n,roughness:s,metalness:r,...e,...o});return{hull:t(4870469,.62,.3),hullDark:t(3554355,.66,.3),belly:t(7370092,.7,.25),panel:t(2830378,.6,.4),interior:t(9409933,.8,.15),floor:t(2764074,.85,.35),seat:t(4082230,.95,0),frame:t(1908508,.6,.6),steel:t(9212042,.35,.8),rubber:t(1710617,.95,0),yellow:t(13214234,.6,.1),glass:new Bn({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...e}),red:t(11540496,.4,.1,{emissive:5244933}),green:t(1089584,.4,.1,{emissive:342544}),white:t(15263968,.4,.1,{emissive:3158064})}}function Qr(i,e,t,n,s){let r=[],o=(a,l,c,h,d,u)=>{for(let f=0;f<=u;f++){let p=h+(d-h)*f/u;r.push([a+Math.cos(p)*c,l+Math.sin(p)*c])}};return o(i-s,e+s,s,-Math.PI/2,0,4),o(i-n,t-n,n,0,Math.PI/2,10),o(-i+n,t-n,n,Math.PI/2,Math.PI,10),o(-i+s,e+s,s,Math.PI,Math.PI*1.5,4),r}function _c(i,e,t,n,s,r,o=32,a=null){let l=new en;e.forEach(([p,x],m)=>{m===0?l.moveTo(p,x):l.lineTo(p,x)});let c=new xn(l,{depth:n-t,bevelEnabled:!1,steps:o,curveSegments:6}),h=c.attributes.position,d=a?a.bottom:Math.min(...e.map(p=>p[1])),u=a?a.top:Math.max(...e.map(p=>p[1]));for(let p=0;p<h.count;p++){let x=r(t+h.getZ(p));h.setX(p,h.getX(p)*x.scale),h.setY(p,x.bottom+(h.getY(p)-d)*(x.top-x.bottom)/(u-d))}c.computeVertexNormals();let f=tn(new Se(c,s));return f.position.z=t,i.add(f),f}function u2(i,e,t,n,s){let r=new Me,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([c,h])=>new xe(c,h));r.add(tn(new Se(new cs(o,56),e.hull)));let a=tn(new Se(new Di(1.555,.03,6,56),e.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Ot(r,.3,.7,e.hullDark,0,0,0,"y",24);let l=tn(new Se(new Ln(.3,20,10,0,Math.PI*2,0,Math.PI/2),e.steel));l.position.y=.35,r.add(l);for(let c=0;c<7;c++){let h=new Me;h.rotation.y=c*Math.PI*2/7+.2;let d=tn(new Se(new vt(1.08,.03,.24),e.frame));d.position.x=.84,d.position.y=.12,d.rotation.x=.42,h.add(d),r.add(h)}for(let c=0;c<3;c++){let h=new Me;h.rotation.y=c*Math.PI*2/3;let d=tn(new Se(new vt(1.1,.12,.05),e.hullDark));d.position.x=.85,d.position.y=-.2,h.add(d),r.add(h)}return Ot(r,.16,.5,e.steel,-Math.sign(t)*1.7,0,0,"x",16),r.position.set(t,n,s),i.add(r),r}function f2(i,e,t,n,s,r,o,a){let l=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,d])=>[o+h,r+d]),c=s-n;gi(i,l,c,e.hull,t*(n+c/2),.03)}function yu({cutaway:i=!1,rampOpen:e=!0}={}){let t=i?[new Pn(new L(0,-1,0),3)]:null,n=d2(t),s=new Me,r=new Me;s.name="floor",r.name="back";let o=new Me;o.name="shell";let a=2.8,l=.25,c=5,h=ei.floor,d=ei.cabin;Ie(s,a*2,h-l,d.front-d.rear,n.belly,0,(h+l)/2,(d.front+d.rear)/2,.12).userData.solid=!0,Ie(s,d.right-d.left-.02,.03,d.front-d.rear,n.floor,0,h+.015,(d.front+d.rear)/2);let u=3.5,f=u-l-.12,p=l+.12+f/2;Ie(o,a-d.right,f,d.front-d.rear,n.hull,-(a+d.right)/2,p,(d.front+d.rear)/2);let x=ei.sideDoor,m=(a+d.right)/2;Ie(o,a-d.right,f,x.rear-d.rear,n.hull,m,p,(x.rear+d.rear)/2),Ie(o,a-d.right,f,d.front-x.front,n.hull,m,p,(d.front+x.front)/2);let g=h+x.height;Ie(o,a-d.right,u-g,x.front-x.rear,n.hull,m,(u+g)/2,(x.rear+x.front)/2),Ie(o,a-d.right,h-l-.12,x.front-x.rear,n.hull,m,(h+l+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([X])=>Ie(o,.36,x.height+.1,.08,n.hullDark,m,h+x.height/2,X)),Ie(o,.36,.08,x.front-x.rear+.08,n.hullDark,m,g,(x.rear+x.front)/2);let _=Qr(a,l,c,1.3,.3).filter(([,X])=>X>=u-.001),y=Qr(d.right,h,d.ceiling,.9,.01).filter(([,X])=>X>=u-.001).reverse(),v=[[a,u]].concat(_,[[-a,u],[d.left,u]],y,[[d.right,u]]),T=new xn(new en(v.map(([X,K])=>new xe(X,K))),{depth:d.front-d.rear,bevelEnabled:!1,curveSegments:4}),C=tn(new Se(T,n.hull));C.position.z=d.rear,o.add(C);let P=Qr(a+.04,l+.1,c+.04,1.32,.3),z=Qr(d.right-.03,h+.02,d.ceiling-.03,.87,.01),A=new en(P.map(([X,K])=>new xe(X,K)));A.holes.push(new tr(z.slice().reverse().map(([X,K])=>new xe(X,K))));let M=tn(new Se(new xn(A,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));M.position.z=d.rear,M.userData.hollow=!0,o.add(M),M.castShadow=M.receiveShadow=!1;let S=d.front,he=ei.length,J=he-S,N=(X,K,se)=>{let Ee=Math.min(1,Math.max(0,(se-X)/(K-X)));return Ee*Ee*(3-2*Ee)},F=X=>{let K=(X-S)/J;return{scale:1-.1*N(.25,.65,K)-.55*Math.pow(N(.55,1,K),1.3),top:c-2*N(.18,.66,K)-1.45*Math.pow(N(.62,1,K),1.4),bottom:l+.85*Math.pow(N(.5,1,K),1.6)}},G=Qr(a,l,c,1.3,.3);_c(o,G,S,he,n.hull,F,40);let Z=(()=>{let X=G.filter(([,Ee])=>Ee>=2.85),K=[0,2.6],se=(Ee,Le)=>{let Ze=Math.hypot(Ee[0]-K[0],Ee[1]-K[1]);return[Ee[0]+(Ee[0]-K[0])/Ze*Le,Ee[1]+(Ee[1]-K[1])/Ze*Le]};return X.map(Ee=>se(Ee,.035)).concat(X.slice().reverse().map(Ee=>se(Ee,-.01)))})(),k=S+J*.2,b=S+J*.7;_c(o,Z,k,b,n.glass,F,24,{bottom:l,top:c});let H=Z.map(([X,K])=>[X*1.004,K+.004]);_c(o,H,k+(b-k)*.45,k+(b-k)*.45+.1,n.hullDark,F,2,{bottom:l,top:c}),Ie(r,d.right-d.left,d.ceiling-h,.08,n.interior,0,(d.ceiling+h)/2,d.front-.04);let q=ei.cockpitDoor;Ie(r,q.right-q.left-.2,q.height,.06,n.hullDark,(q.left+q.right)/2,h+q.height/2,d.front-.09),Ie(r,.25,.25,.05,n.glass,(q.left+q.right)/2,h+1.6,d.front-.13),[-1,1].forEach(X=>{Ie(o,.5,1,4,n.hullDark,X*(a+.2),.85,7.4,.2),[6,8.8].forEach(K=>{Ot(o,.07,.5,n.steel,X*(a+.2),.45,K,"y",10),Ot(o,.27,.22,n.rubber,X*(a+.2),.27,K,"x",20)})}),Ot(o,.07,.4,n.steel,0,.35,13.6,"y",10),Ot(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let oe=new Me,_e=Math.hypot(ei.ramp.to-ei.ramp.from,h);Ie(oe,d.right-d.left,.12,_e,n.hullDark,0,-.06,-_e/2);for(let X=0;X<9;X++)Ie(oe,d.right-d.left-.3,.025,.05,n.frame,0,.012,-.2-X*(_e-.4)/8);[-1,1].forEach(X=>Ie(oe,.06,.18,_e,n.yellow,X*(d.right-.03),.09,-_e/2)),oe.position.set(0,h,d.rear),oe.rotation.x=e?-Math.atan2(h,ei.ramp.to-ei.ramp.from):Math.PI/2-.15,s.add(oe);let W=a+.55,pe=x.front-x.rear-.15;for(let X=0;X<3;X++){let K=h-(X+1)*h/3.2;Ie(s,.36,.05,pe,n.steel,a+.15+X*.32,K,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(X=>va(o,[[a+.05,h+.95,X],[a+.5,h+.7,X],[W+.4,.75,X]],.025,n.steel)),[-1,1].forEach(X=>Ie(X<0?r:o,.03,2.9,d.front-d.rear-.2,n.interior,X*(d.right-.015),h+1.6,(d.front+d.rear)/2));let Te=ei.cells.cell,Pe=X=>d.front-(X-.5)*Te;ei.seats.forEach(([X,K])=>{let se=X==="A"?-1:1,Ee=se*(d.right-.35),Le=Pe(K);Ie(s,.5,.1,.9,n.seat,Ee,h+.48,Le,.03),Ie(s,.1,.75,.9,n.seat,se*(d.right-.08),h+.95,Le,.03),Ie(s,.04,.45,.04,n.frame,Ee-se*.2,h+.22,Le-.38),Ie(s,.04,.45,.04,n.frame,Ee-se*.2,h+.22,Le+.38),Ie(s,.03,.6,.06,n.yellow,se*(d.right-.05),h+1,Le-.25)});let B=-Te,$=Te,ge=Pe(2)-Te/2,me=d.front;[[B,ge,$,ge],[B,ge,B,me-.1],[$,ge,$,me-.1]].forEach(([X,K,se,Ee])=>{Ie(s,Math.max(.08,Math.abs(se-X)),.012,Math.max(.08,Math.abs(Ee-K)),n.yellow,(X+se)/2,h+.036,(K+Ee)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([X,K])=>Ot(s,.07,.03,n.steel,X,h+.045,K,"y",12)),[-1,1].forEach(X=>{let K=gi(o,[[2.55,c-.25],[4.9,c-.25],[3.55,c+1.35],[2.75,c+1.4]],.16,n.hull,0,.04);K.rotation.z=X*-.18,K.position.x+=X*1.55,Ie(o,.06,.06,.06,X<0?n.red:n.green,X*1.82,c+1.38,2.85)}),Ie(o,2.2,.5,4.2,n.hullDark,0,c+.12,7.3,.22),[-.6,.6].forEach(X=>Ie(o,.6,.12,.8,n.frame,X,c+.38,6,.04)),Ie(o,.08,.06,.08,n.white,0,c+.4,9.2);let w=a+.35+1.5,re=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([X,K])=>{[-1,1].forEach(se=>{f2(o,n,se,a-.1,w-1.45,re,X,K),u2(o,n,se*w,re,X)})}),[-1,1].forEach(X=>{Ie(o,.02,.08,2.4,n.yellow,X*(a+.01),2.9,7.4),Ie(o,.02,.4,.4,n.white,X*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(X=>{if(!X.isMesh)return;let K=new Kn().setFromObject(X).getSize(new L);Math.min(K.x,K.y,K.z)>=.12&&!X.userData.hollow&&(X.userData.solid=!0)});let ee=new Me;return ee.add(s,r,o),ee}var Ma={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},pu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function p2(i,e,t,n,s,r,o,a){let l=Ot(i,r,o,e.rubber,t,n,s,"x",28);Ot(i,r*.62,o+.01,e.rim,t+a*.005,n,s,"x",20),Ot(i,r*.2,o+.03,e.frame,t+a*.01,n,s,"x",12)}function _u({type:i="suv",color:e="white",seed:t=1}={}){let n=Ma[i],s=(u,f=.45,p=.35,x={})=>new Xe({color:u,roughness:f,metalness:p,...x}),r={body:s(pu[e]||pu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new Bn({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new Me,a=n.width,l=n.length,c=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){gi(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),gi(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),gi(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let u of[[.26,.3],[1.6,1.68],[3.2,3.3]])Ie(o,a-.16,.62,u[1]-u[0]+.05,r.body,0,1.39,(u[0]+u[1])/2+(u[0]>3?.08:0));for(let u of[-1,1])Ie(o,.05,.05,2.2,r.trim,u*(a/2-.2),1.83,1.6)}else gi(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),gi(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),Ie(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,Ie(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),Ie(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);Ie(o,a+.04,.22,.18,r.trim,0,h+.3,l-.04,.05),Ie(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let u of[-1,1])Ie(o,.32,.12,.05,r.lamp,u*(a/2-.3),.9,l+.005,.02),Ie(o,.18,.26,.05,r.tail,u*(a/2-.15),i==="van"?1.2:.95,-.005,.02),Ie(o,.06,.12,.2,r.trim,u*(a/2+.06),i==="van"?1.75:1.2,l-(i==="van"?1.35:1.15),.02);Ie(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,l+.01,.02);let d=i==="van"?[.95,4.15]:[.9,3.8];for(let u of d)for(let f of[-1,1])p2(o,r,f*(a/2-.12),c,u,c,.26,f);if(Ie(o,a+.02,.08,l-.3,r.dust,0,h+.12,l/2),e==="police"){let u=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),p=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])Ie(o,.02,.16,l-.8,u,x*(a/2+.005),.78,l/2);Ie(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,l*.45),Ie(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,l*.45),Ie(o,.45,.12,.26,p,.3,i==="van"?2.3:1.95,l*.45)}return o}var lr=i=>Math.max(0,Math.min(255,Math.round(i)));function Vn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function eo(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Vn(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let f=(c(u+1,d)-c(u-1,d))*e,p=(c(u,d+1)-c(u,d-1))*e,x=Math.hypot(f,p,1),m=(d*n+u)*4;l.data[m]=(-f/x*.5+.5)*255,l.data[m+1]=(p/x*.5+.5)*255,l.data[m+2]=(1/x*.5+.5)*255,l.data[m+3]=255}return a.putImageData(l,0,0),Et(o,{srgb:!1})}function cr(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:l=0}={}){let c=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=u/e,p=d/t,x=Oi(f,p,a,4,s)*o,m=l?Math.max(0,Oi(f*7,.3,30,2,s+3))*l*(1-p):0,g=1+x-m+(c()-.5)*r/255,_=(d*e+u)*4;h.data[_]=lr(n[0]*g),h.data[_+1]=lr(n[1]*g),h.data[_+2]=lr(n[2]*g),h.data[_+3]=255}i.putImageData(h,0,0)}function vu(i,e){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,l=Vn(512,936),c=l.getContext("2d"),h=Vn(512,936),d=h.getContext("2d");cr(c,512,936,r.base,{seed:11+e*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),d.fillStyle="#808080",d.fillRect(0,0,512,936);let u=ft(31+e*13+i.length);c.fillStyle=`rgb(${r.band.join(",")})`,c.fillRect(0,a(.3),512,.3*o),c.fillStyle=`rgb(${r.stripe.join(",")})`,c.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),d.fillStyle="#9a9a9a",d.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],p=a(1.22);c.fillStyle="rgba(30,32,34,0.75)",d.fillStyle="#202020";for(let g of f)c.fillRect(g-2,0,4,936),d.fillRect(g-2,0,4,936);c.fillRect(0,p-2,512,3),d.fillRect(0,p-2,512,3),c.fillStyle="rgba(255,255,255,0.25)";for(let g of f)c.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let _=30;_<a(.32);_+=54)for(let y of[-9,9])c.fillStyle="rgba(60,62,64,0.8)",c.beginPath(),c.arc(g+y,_,2.6,0,Math.PI*2),c.fill(),d.fillStyle="#c8c8c8",d.beginPath(),d.arc(g+y,_,2.6,0,Math.PI*2),d.fill();if(i!=="inner"&&e===1){let _=a(1.95),y=512*.3;for(let v=0;v<7;v++)c.fillStyle="rgba(28,30,32,0.85)",c.fillRect(296.96,_+v*11,y,6),d.fillStyle="#303030",d.fillRect(296.96,_+v*11,y,6)}i!=="inner"&&e===2&&(c.fillStyle="rgba(40,44,46,0.9)",c.fillRect(512*.12,a(1.75),512*.22,.18*o),c.fillStyle="rgba(230,180,60,0.9)",c.font="bold 26px Arial",c.fillText("N8",512*.14,a(1.62)),d.fillStyle="#a8a8a8",d.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=c.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),c.fillStyle=x,c.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let _=u()*512,y=40+u()*300,v=c.createLinearGradient(0,0,0,y);v.addColorStop(0,"rgba(50,46,40,0.22)"),v.addColorStop(1,"rgba(50,46,40,0)"),c.fillStyle=v,c.fillRect(_,0,2+u()*5,y)}let m=Et(l);return m.wrapS=m.wrapT=Qt,{map:m,normalMap:eo(h,4,!1)}}function Mu(){let e=Vn(512,512),t=e.getContext("2d"),n=Vn(512,512),s=n.getContext("2d");cr(t,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=ft(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let l=(a+o)/16%2?.8:-.8;t.save(),t.translate(a,o),t.rotate(l),t.fillStyle="rgba(160,166,166,0.5)",t.fillRect(-5,-1.2,10,2.4),t.restore(),s.save(),s.translate(a,o),s.rotate(l),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}t.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])t.fillRect(o-1.5,0,3,512),t.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){t.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,t.lineWidth=.8;let a=r()*512,l=r()*512,c=r()*Math.PI,h=6+r()*30;t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}return{map:Et(e),normalMap:eo(n,3)}}function bu(){let e=Vn(512,512),t=e.getContext("2d"),n=Vn(512,512),s=n.getContext("2d");cr(t,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),t.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])t.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=ft(29);for(let o=0;o<60;o++){let a=r()*512,l=r()*512,c=10+r()*50,h=t.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),t.fillStyle=h,t.fillRect(a-c,l-c,c*2,c*2)}return{map:Et(e),normalMap:eo(n,2)}}function Eu(){let e=Vn(256,256),t=e.getContext("2d"),n=Vn(256,256),s=n.getContext("2d");cr(t,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)t.fillStyle="rgba(18,18,20,0.88)",t.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:Et(e),normalMap:eo(n,3)}}function wu(i=3){let n=Vn(512,256),s=n.getContext("2d"),r=Vn(512,256),o=r.getContext("2d");cr(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=ft(i+5);for(let l=0;l<512;l++){let c=.5+.5*Math.sin(l/512*Math.PI*2*24);o.fillStyle=`rgb(${lr(c*255)},${lr(c*255)},${lr(c*255)})`,o.fillRect(l,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-c)*.18})`,s.fillRect(l,0,1,256)}for(let l=0;l<50;l++){let c=a()*512,h=a()*256,d=4+a()*22,u=s.createRadialGradient(c,h,0,c,h,d);u.addColorStop(0,"rgba(90,44,20,0.45)"),u.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=u,s.fillRect(c-d,h-d,d*2,d*2)}return{map:Et(n),normalMap:eo(r,5)}}function Su(i=7){let t=Vn(256,256),n=t.getContext("2d");return cr(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:Et(t)}}var Tu=1.25,mt=.09,vc=new Map,fn=(i,e)=>(vc.has(i)||vc.set(i,e()),vc.get(i));function m2(i,e){return fn("brushed"+i+(e?"v":"h"),()=>{let n=ft(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let l=0;l<900;l++){let c=n()*256,h=20+n()*200,d=n()*256,u=n();o.fillStyle=`rgba(${u>.5?230:150},${u>.5?232:154},${u>.5?236:158},0.10)`,a.fillStyle=`rgba(${u>.5?140:50},${u>.5?140:50},${u>.5?140:50},0.25)`,e?(o.fillRect(c,d,1,h),a.fillRect(c,d,1,h)):(o.fillRect(d,c,h,1),a.fillRect(d,c,h,1))}return{map:Et(s,{repeat:1}),roughnessMap:Et(r,{srgb:!1,repeat:1})}})}var Mc=(i,e)=>(i.userData.envBoost=e,i),Au=(i=!1)=>fn("galleySteel"+i,()=>{let e=m2(i?11:7,i),t=new Xe({color:15791094,map:e.map,roughnessMap:e.roughnessMap,roughness:.5,metalness:.6});return t.userData.envBoost=3.2,t}),Oe={steel:()=>Au(!1),steelVertical:()=>Au(!0),steelDark:()=>fn("galleySteelDark",()=>Mc(new Xe({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>fn("galleyGroove",()=>new Xe({color:2764080,roughness:.6,metalness:.5})),plinth:()=>fn("galleyPlinth",()=>new Xe({color:2040357,roughness:.8,metalness:.2})),castIron:()=>fn("galleyIron",()=>new Xe({color:1842463,roughness:.75,metalness:.35})),knob:()=>fn("galleyKnob",()=>new Xe({color:1118740,roughness:.35,metalness:.3})),glass:()=>fn("galleyGlass",()=>new Xe({color:790290,roughness:.1,metalness:.4})),basin:()=>fn("galleyBasin",()=>Mc(new Xe({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>fn("galleyChrome",()=>Mc(new Xe({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>fn("galleyWhite",()=>new Xe({color:15263972,roughness:.5,metalness:.05})),display:()=>fn("galleyDisplay",()=>new Xe({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>fn("galleyLamp",()=>new Xe({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>fn("galleyRubber",()=>new Xe({color:1382170,roughness:.9})),red:()=>fn("galleyRed",()=>new Xe({color:11019292,roughness:.45,metalness:.3})),floor:()=>fn("galleyFloor",()=>{let e=ft(5),t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let l=0;l<s;l++){let c=214+Math.floor(e()*10);n.fillStyle=`rgb(${c},${c-2},${c-8})`,n.fillRect(l*r+3,a*r+3,r-6,r-6)}let o=Et(t,{repeat:1});return new Xe({map:o,roughness:.35,metalness:0})})};function We(i,e,t,n,s,r,o){let a=new Se(new vt(i,e,t),n);return a.position.set(s,r,o),a}function to(i,e,t,n,s,r,o=12){let a=new Se(new Pt(i,i,e,o),t);return a.position.set(n,s,r),a}function ys(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Pt(t,t,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var $e=.9,En=.66,Ru=mt+En;function g2(i,e,t,n){let s=t-e,r=(e+t)/2;i.add(We(s-.01,.1,En-.06,Oe.plinth(),r,.05,mt+(En-.06)/2)),i.add(We(s-.01,$e-.14,En-.02,Oe.steelVertical(),r,.1+($e-.14)/2,mt+(En-.02)/2));let o=$e-.06,a=.12,l=mt+En-.01,c=(u,f,p)=>i.add(We(p?.12:.03,p?.03:.12,.012,Oe.groove(),u,f,l+.002)),h=u=>i.add(We(.006,o-a,.006,Oe.groove(),u,(o+a)/2,l+.002)),d=(u,f,p)=>i.add(We(p-f,.006,.006,Oe.groove(),(f+p)/2,u,l+.002));if(d(o,e,t),n==="drawers"){for(let f=1;f<3;f++)d(a+(o-a)*f/3,e+.01,t-.01);for(let f=0;f<3;f++)c(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),c(r-.05,o-.08,!1),c(r+.05,o-.08,!1)):n==="mixed"&&(d(o-.18,e+.01,t-.01),c(r,o-.07,!0),h(r),c(r-.05,o-.28,!1),c(r+.05,o-.28,!1));i.add(We(s,.04,En+.02,Oe.steel(),r,$e-.02,mt+(En+.02)/2)),i.add(We(s,.05,.015,Oe.steel(),r,$e-.035,Ru+.012)),i.add(We(s,.1,.02,Oe.steel(),r,$e+.05,mt+.01))}function Cu(i,e,t,n){i.add(We(t-e,n-$e,.012,Oe.steelVertical(),(e+t)/2,($e+n)/2,mt+.006));for(let s=e+.6;s<t-.05;s+=.6)i.add(We(.005,n-$e,.004,Oe.groove(),s,($e+n)/2,mt+.013))}function x2(i,e,t){let o=(e+t)/2;i.add(We(t-e-.01,2.15-1.5,.34,Oe.steelVertical(),o,(1.5+2.15)/2,mt+.34/2)),i.add(We(.006,2.15-1.5-.02,.006,Oe.groove(),o,(1.5+2.15)/2,mt+.34+.002));for(let a of[-1,1])i.add(We(.03,.1,.012,Oe.groove(),o+a*.05,1.5+.1,mt+.34+.004));i.add(We(t-e-.1,.012,.04,Oe.lamp(),o,1.5-.007,mt+.34-.05))}function y2(i,e,t){let n=t?[e-.2,e+.2]:[e];for(let a of n){i.add(We(t?.36:.5,.012,.42,Oe.basin(),a,$e-.14,mt+.36));for(let l of[-1,1])i.add(We(.012,.14,.42,Oe.basin(),a+l*(t?.18:.25),$e-.07,mt+.36));i.add(We(t?.36:.5,.14,.012,Oe.basin(),a,$e-.07,mt+.15)),i.add(We(t?.36:.5,.14,.012,Oe.basin(),a,$e-.07,mt+.57)),i.add(to(.025,.004,Oe.groove(),a,$e-.132,mt+.36))}let s=e,r=mt+.08;i.add(to(.03,.06,Oe.chrome(),s,$e+.03,r)),i.add(ys(new L(s,$e+.06,r),new L(s,$e+.48,r),.014,Oe.chrome()));let o=new Se(new Di(.12,.013,8,16,Math.PI),Oe.chrome());o.rotation.y=Math.PI/2,o.position.set(s,$e+.48,r+.12),i.add(o),i.add(ys(new L(s,$e+.48,r+.24),new L(s,$e+.36,r+.24),.016,Oe.chrome())),i.add(We(.012,.012,.08,Oe.chrome(),s+.04,$e+.1,r+.03))}function _2(i,e){let t=new Me,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(g2(t,.005,e-.005,s),Cu(t,0,e,i.upper?1.5:1.45),i.upper&&x2(t,.005,e-.005),(n==="sink"||n==="sink2")&&y2(t,e/2,n==="sink2"),n==="microwave"){let r=e/2,o=mt+.26;t.add(We(.52,.3,.38,Oe.steel(),r,$e+.15,o)),t.add(We(.33,.21,.01,Oe.glass(),r-.07,$e+.15,o+.19)),t.add(We(.1,.21,.01,Oe.groove(),r+.18,$e+.15,o+.19)),t.add(We(.05,.015,.012,Oe.display(),r+.18,$e+.24,o+.196))}if(n==="grinder"){let r=e/2-.1,o=mt+.3;t.add(We(.22,.24,.36,Oe.steel(),r,$e+.12,o)),t.add(to(.06,.2,Oe.chrome(),r,$e+.3,o+.06)),t.add(We(.26,.02,.22,Oe.chrome(),r,$e+.41,o+.06)),t.add(We(.04,.03,.03,Oe.red(),r+.12,$e+.08,o+.19));let a=e/2+.22;t.add(We(.16,.06,.26,Oe.white(),a,$e+.03,o)),t.add(We(.1,.3,.1,Oe.white(),a,$e+.18,o-.08)),t.add(We(.14,.08,.26,Oe.white(),a,$e+.36,o)),t.add(to(.08,.12,Oe.chrome(),a,$e+.12,o+.05))}return t}function v2(i,e){let t=new Me,n=e-.01,s=e/2;t.add(We(n,.1,En-.06,Oe.plinth(),s,.05,mt+(En-.06)/2)),t.add(We(n,$e-.1,En,Oe.steelVertical(),s,.1+($e-.1)/2,mt+En/2));let r=Ru+.004;t.add(We(n-.12,.46,.02,Oe.steel(),s,.42,r+.01)),t.add(We(n-.34,.2,.01,Oe.glass(),s,.44,r+.022)),t.add(ys(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,Oe.chrome()));for(let h of[-1,1])t.add(We(.015,.015,.05,Oe.chrome(),s+h*(n-.3)/2,.66,r+.035));t.add(We(n-.06,.11,.02,Oe.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let d=new Se(new Pt(.022,.024,.03,14),Oe.knob());d.rotation.x=Math.PI/2,d.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),t.add(d)}t.add(We(n,.02,En,Oe.steelDark(),s,$e-.01,mt+En/2));for(let[h,d]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){t.add(to(.07,.015,Oe.castIron(),s+h,$e+.007,mt+d,16));for(let u of[0,Math.PI/2]){let f=We(.3,.018,.018,Oe.castIron(),s+h,$e+.03,mt+d);f.rotation.y=u,t.add(f)}}Cu(t,0,e,1.75);let a=1.78,l=2.25,c=.62;t.add(We(e+.1,l-a-.12,c,Oe.steel(),s,l-(l-a-.12)/2,mt+c/2)),t.add(We(e+.1,.12,.03,Oe.steel(),s,a+.06,mt+c-.015)),t.add(We(e-.06,.012,c-.08,Oe.steelDark(),s,a+.01,mt+c/2));for(let h=0;h<9;h++)t.add(We(.012,.02,c-.14,Oe.groove(),s-e*.4+e*.8*h/8,a+.02,mt+c/2-.02));for(let h of[-1,1])t.add(We(.14,.008,.06,Oe.lamp(),s+h*e*.28,a+.004,mt+c-.08));return t}function M2(i,e){let t=new Me,n=e-.04,s=e/2,r=.72,o=2.02;t.add(We(n,.08,r-.06,Oe.plinth(),s,.04,mt+(r-.06)/2)),t.add(We(n,o-.08,r,Oe.steelVertical(),s,.08+(o-.08)/2,mt+r/2));let a=mt+r;t.add(We(n-.02,.006,.006,Oe.groove(),s,1.25,a+.003)),t.add(We(.006,o-.12,.006,Oe.groove(),s,.08+(o-.08)/2,a+.003));for(let l of[-1,1]){t.add(ys(new L(s+l*.06,.95,a+.045),new L(s+l*.06,1.55,a+.045),.012,Oe.chrome()));for(let c of[.95,1.55])t.add(We(.015,.015,.045,Oe.chrome(),s+l*.06,c,a+.022))}return t.add(We(.16,.06,.01,Oe.display(),s-n/4,1.82,a+.006)),t}function b2(i,e,t){let n=new Me,s=.2,r=e/2,o=t/2,a=e-s*2,l=t-s*2;n.add(We(a-.08,.1,l-.08,Oe.plinth(),r,.05,o)),n.add(We(a,$e-.14,l,Oe.steelVertical(),r,.1+($e-.14)/2,o)),n.add(We(a+.06,.06,l+.06,Oe.steel(),r,$e-.06,o)),n.add(We(a-.04,.02,l-.04,Oe.steelDark(),r,$e-.025,o));let c=(a-.16)/2,h=(l-.16)/2;for(let p of[-1,1])for(let x of[-1,1]){let m=r+p*(c/2+.03),g=o+x*(h/2+.03);if(n.add(We(c,.035,h,Oe.castIron(),m,$e-.005,g)),p===x)for(let _=0;_<5;_++)n.add(We(c*.5,.004,.012,Oe.groove(),m,$e+.014,g-.08+_*.04))}let d=$e+.06,u=.1,f=[[r-a/2-u,o-l/2-u],[r+a/2+u,o-l/2-u],[r+a/2+u,o+l/2+u],[r-a/2-u,o+l/2+u]];return f.forEach(([p,x],m)=>{let[g,_]=f[(m+1)%4];n.add(ys(new L(p,d,x),new L(g,d,_),.016,Oe.chrome())),n.add(ys(new L(p,$e-.05,x),new L(p,d+.03,x),.02,Oe.chrome()));let y=new L(Math.sign(r-p)*u,0,Math.sign(o-x)*u);n.add(ys(new L(p,$e-.05,x),new L(p+y.x,$e-.05,x+y.z),.015,Oe.chrome()))}),n}function E2(i,e,t){let n=new Me,s=Oe.floor().clone();s.map=s.map.clone(),s.map.repeat.set(e/1.2,t/1.2),s.map.needsUpdate=!0;let r=We(e-.02,.006,t-.02,s,e/2,.05,t/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,l,c]=i.drain;n.add(We(l-o,.004,c-a,Oe.groove(),(o+l)/2,.055,(a+c)/2));let h=l-o>c-a,d=Math.floor((h?l-o:c-a)/.03);for(let u=0;u<d;u++){let f=(u+.5)/d;n.add(h?We(.008,.005,c-a-.01,Oe.steelDark(),o+(l-o)*f,.058,(a+c)/2):We(l-o-.01,.005,.008,Oe.steelDark(),(o+l)/2,.058,a+(c-a)*f))}}return n}function bc(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),l=new Me;a.position.set(-r/2,0,-o/2),l.add(a),l.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],l.position.set(e/2,0,t/2);let c=new Me;return c.add(l),c}var Pu=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function Iu(i){let e=i.cols*Tu,t=i.rows*Tu;switch(i.kind){case"galleyCounter":return bc(i,e,t,_2);case"galleyRange":return bc(i,e,t,v2);case"galleyFridge":return bc(i,e,t,M2);case"galleyIsland":return b2(i,e,t);case"galleyFloor":return E2(i,e,t);default:return null}}var Lu=1.25,pt=.09,Ec=new Map,hr=(i,e)=>(Ec.has(i)||Ec.set(i,e()),Ec.get(i)),ut=(i,e,t)=>hr(i,()=>{let n=new Xe(e);return t&&(n.userData.envBoost=t),n});function ba(i,e){return hr("fabricTexture"+i+e,()=>{let n=ft(e),s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle=`rgb(${i})`,r.fillRect(0,0,128,128);for(let o=0;o<1400;o++){let a=n()<.5?255:0;r.fillStyle=`rgba(${a},${a},${a},${.03+n()*.04})`,r.fillRect(Math.floor(n()*128),Math.floor(n()*128),1+Math.floor(n()*2),1)}return Et(s,{repeat:2})})}function w2(){return hr("woodTexture",()=>{let e=ft(17),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="rgb(150,112,74)",n.fillRect(0,0,256,256);for(let s=0;s<160;s++){let r=e()*256,o=e();n.fillStyle=`rgba(${o>.5?190:90},${o>.5?146:62},${o>.5?100:36},0.18)`,n.fillRect(0,r,256,1+e()*2)}return Et(t,{repeat:1})})}function S2(){return hr("rubberTexture",()=>{let e=ft(23),t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="rgb(46,48,52)",n.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=e()<.12?"160,60,40":e()<.5?"70,72,76":"30,31,34";n.fillStyle=`rgba(${r},0.8)`,n.fillRect(Math.floor(e()*128),Math.floor(e()*128),2,2)}return Et(t,{repeat:2})})}var O={frame:()=>ut("fFrame",{color:6055018,roughness:.5,metalness:.5},1.5),steel:()=>ut("fSteel",{color:12896718,roughness:.35,metalness:.65},2.5),darkSteel:()=>ut("fDarkSteel",{color:3159354,roughness:.5,metalness:.5}),black:()=>ut("fBlack",{color:1447963,roughness:.6,metalness:.2}),white:()=>ut("fWhite",{color:15132902,roughness:.45,metalness:.05}),cream:()=>ut("fCream",{color:14209730,roughness:.6}),wood:()=>ut("fWood",{map:w2(),roughness:.55}),cabinetGrey:()=>ut("fCabinetGrey",{color:9344924,roughness:.55,metalness:.25}),olive:()=>ut("fOlive",{color:6121032,roughness:.7,metalness:.1}),blanket:i=>ut("fBlanket"+i,{map:ba(i,3),roughness:.95}),sheet:()=>ut("fSheet",{map:ba("226,228,224",5),roughness:.95}),upholstery:i=>ut("fUph"+i,{map:ba(i,9),roughness:.9}),glass:()=>ut("fGlass",{color:11061460,roughness:.05,metalness:.1,transparent:!0,opacity:.35}),tintedGlass:()=>ut("fTinted",{color:2111552,roughness:.1,metalness:.3}),ceramic:()=>ut("fCeramic",{color:15921902,roughness:.2,metalness:0},1.5),chrome:()=>ut("fChrome",{color:15265008,roughness:.15,metalness:.9},3),rubber:()=>ut("fRubber",{map:S2(),roughness:.95}),mat:()=>ut("fMat",{color:2772090,roughness:.85}),red:()=>ut("fRed",{color:11020832,roughness:.5,metalness:.2}),orange:()=>ut("fOrange",{color:14185514,roughness:.5,metalness:.2}),yellow:()=>ut("fYellow",{color:14200868,roughness:.5,metalness:.2}),green:()=>ut("fGreen",{color:3115602,roughness:.5}),leather:()=>ut("fLeather",{color:3811874,roughness:.6}),soil:()=>ut("fSoil",{color:3811870,roughness:1}),leaf:i=>ut("fLeaf"+i,{color:[4160052,5673534,3107386,6986298][i%4],roughness:.8}),bark:()=>ut("fBark",{color:5914672,roughness:.9}),terracotta:()=>ut("fTerracotta",{color:11032634,roughness:.8}),water:()=>ut("fWater",{color:3832480,roughness:.05,metalness:.2,emissive:666170,emissiveIntensity:.5}),growLight:()=>ut("fGrowLight",{color:4198464,emissive:13656319,emissiveIntensity:1.1}),velvet:()=>ut("fVelvet",{map:ba("128,28,36",13),roughness:.95}),lamp:()=>ut("fLamp",{color:16774880,emissive:16773328,emissiveIntensity:1.3}),ledGreen:()=>ut("fLedGreen",{color:1060880,emissive:4259680,emissiveIntensity:1}),ledRed:()=>ut("fLedRed",{color:3149840,emissive:16724e3,emissiveIntensity:1}),liquid:()=>ut("fLiquid",{color:7002292,emissive:2792058,emissiveIntensity:.7,roughness:.08,metalness:.1,transparent:!0,opacity:.82}),specimen:()=>ut("fSpecimen",{color:6969928,roughness:.7}),screen:(i,e="text")=>hr("fScreen"+i+e,()=>{let t=["#5fd0ff","#ffb347","#7dff9a","#ff6a5a"],n=ar(t[i%t.length],i+40,e);return new Xe({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.85})}),map:()=>hr("fMapTable",()=>{let e=ft(31),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#071a24",n.fillRect(0,0,256,256),n.strokeStyle="rgba(80,200,255,0.25)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="rgba(90,220,140,0.55)";for(let r=0;r<7;r++)n.beginPath(),n.ellipse(e()*256,e()*256,20+e()*40,12+e()*30,e()*3,0,Math.PI*2),n.fill();n.fillStyle="#ff5a40";for(let r=0;r<5;r++)n.fillRect(e()*256,e()*256,5,5);let s=Et(t,{repeat:1});return new Xe({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.7})})};function j(i,e,t,n,s,r,o){let a=new Se(new vt(i,e,t),n);return a.position.set(s,r,o),a}function dt(i,e,t,n,s,r,o=14,a=i){let l=new Se(new Pt(a,i,e,o),t);return l.position.set(n,s,r),l}function Bt(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Pt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var ot=(i,e,t)=>new L(i,e,t);function no(i,e,t,n,s="70,76,88"){i.add(j(.44,.06,.44,O.upholstery(s),e,.44,t)),i.add(j(.44,.42,.05,O.upholstery(s),e,.44+.24,t+n*(.44/2-.02)));for(let a of[-1,1])for(let l of[-1,1])i.add(j(.03,.44,.03,O.frame(),e+a*(.44/2-.03),.44/2,t+l*(.44/2-.03)))}function wc(i,e,t,n,s,r,o=O.wood()){i.add(j(n-e,.04,s-t,o,(e+n)/2,r-.02,(t+s)/2));for(let a of[e+.05,n-.05])for(let l of[t+.05,s-.05])i.add(j(.04,r-.04,.04,O.frame(),a,(r-.04)/2,l))}function Nu(i,e,t,n,s,r,o=1){i.add(j(s,s*.6,.04,O.black(),e,t+s*.3+.08,n)),i.add(j(s-.04,s*.6-.04,.01,O.screen(r),e,t+s*.3+.08,n+o*.022)),i.add(j(.04,.1,.04,O.black(),e,t+.04,n)),i.add(j(.18,.015,.14,O.black(),e,t+.008,n))}var Du={bed(i,e,t){let n=new Me,s=Math.min(.95,e-.2),r=e/2,o=Math.min(2.05,t-.25),a=pt+.02;return n.add(j(s+.06,.9,.05,O.wood(),r,.45,a+.025)),n.add(j(s+.06,.55,.05,O.wood(),r,.275,a+o)),n.add(j(s,.18,o-.05,O.frame(),r,.25,a+o/2)),n.add(j(s-.04,.16,o-.08,O.sheet(),r,.42,a+o/2+.01)),n.add(j(s-.02,.06,o*.62,O.blanket(i.color||"64,82,110"),r,.52,a+o*.66)),n.add(j(s*.7,.1,.34,O.sheet(),r,.55,a+.25)),n},nightstand(i,e){let t=new Me,n=e/2,s=pt+.24;return t.add(j(.45,.55,.42,O.wood(),n,.275,s)),t.add(j(.12,.02,.01,O.darkSteel(),n,.44,s+.215)),t.add(dt(.05,.03,O.darkSteel(),n-.1,.565,s-.05)),t.add(Bt(ot(n-.1,.57,s-.05),ot(n-.1,.82,s-.05),.008,O.darkSteel())),t.add(dt(.09,.1,O.cream(),n-.1,.86,s-.05,12,.05)),t},wardrobe(i,e){let t=new Me,n=e-.15,s=e/2,r=pt+.3;t.add(j(n,2,.58,O.wood(),s,1,r)),t.add(j(.006,1.86,.006,O.black(),s,1,r+.293));for(let o of[-1,1])t.add(j(.02,.22,.02,O.chrome(),s+o*.05,1.1,r+.3));return t},cabinTable(i,e){let t=new Me,n=pt+.01;wc(t,.15,n,e-.15,n+.62,.74),t.add(j(e-.4,.03,.24,O.wood(),e/2,1.45,n+.12));for(let s of[e*.3,e*.7])no(t,s,n+.82,1);return t.add(j(.3,.22,.2,O.darkSteel(),e*.3,.85,n+.2)),t},deskChair(i,e){let t=new Me,n=pt+.01;return wc(t,.08,n,e-.08,n+.62,.74),Nu(t,e/2,.74,n+.18,.48,i.seed||1),t.add(j(.42,.02,.14,O.black(),e/2,.75,n+.42)),no(t,e/2,n+.86,1,"40,44,52"),t},safe(i,e){let t=new Me,n=e/2,s=pt+.26;return t.add(j(.55,.9,.5,O.olive(),n,.45,s)),t.add(dt(.06,.03,O.chrome(),n,.55,s+.26,16).rotateX(Math.PI/2)),t.add(j(.03,.12,.03,O.chrome(),n+.18,.45,s+.26)),t},sofa(i,e){let t=new Me,n=i.color||"96,68,52",s=pt+.02,r=.86;t.add(j(e-.1,.4,r,O.upholstery(n),e/2,.2,s+r/2)),t.add(j(e-.1,.5,.18,O.upholstery(n),e/2,.6,s+.09));for(let o of[.12,e-.12])t.add(j(.14,.62,r,O.upholstery(n),o,.31,s+r/2));for(let o=0;o<2;o++)t.add(j((e-.4)/2-.02,.1,r-.24,O.upholstery(n),.2+(e-.4)/4+o*(e-.4)/2,.45,s+r/2+.06));return t},diningTable(i,e,t){let n=new Me,s=t/2;wc(n,.3,s-.42,e-.3,s+.42,.75,O.cabinetGrey());for(let r of[e*.3,e*.7])no(n,r,s-.72,-1,"120,62,40"),no(n,r,s+.72,1,"120,62,40");return n.add(j(.2,.08,.2,O.white(),e/2,.79,s)),n},servingCounter(i,e){let t=new Me,n=pt+.35;t.add(j(e-.05,.9,.68,O.steel(),e/2,.45,n)),t.add(j(e-.05,.03,.3,O.chrome(),e/2,1.25,n+.1));for(let s of[.15,e-.15])t.add(Bt(ot(s,.9,n+.2),ot(s,1.25,n+.2),.01,O.chrome()));for(let s=0;s<Math.floor(e/.4);s++)t.add(j(.3,.04,.22,O.darkSteel(),.25+s*.4,.92,n-.05));return t},medBed(i,e,t){let n=new Me,s=e/2,r=Math.min(2.05,t-.25),o=pt+.12;n.add(j(.9,.06,r,O.white(),s,.5,o+r/2));for(let l of[-.38,.38])for(let c of[o+.1,o+r-.1])n.add(j(.04,.4,.04,O.chrome(),s+l,.28,c)),n.add(dt(.05,.04,O.black(),s+l,.05,c,10).rotateZ(Math.PI/2));n.add(j(.84,.12,r*.62,O.sheet(),s,.59,o+r*.62));let a=j(.84,.12,r*.36,O.sheet(),s,.72,o+r*.2);a.rotation.x=.45,n.add(a),n.add(j(.5,.09,.3,O.white(),s,.86,o+.22)),n.add(j(.74,.05,r*.5,O.blanket("120,160,190"),s,.67,o+r*.68));for(let l of[-1,1])n.add(j(.02,.2,r*.45,O.chrome(),s+l*.46,.7,o+r*.55));if(n.add(j(.94,.5,.04,O.white(),s,.75,o)),i.monitor!==!1){let l=e-.12;n.add(Bt(ot(l,0,o+.1),ot(l,1.5,o+.1),.02,O.chrome())),n.add(j(.3,.24,.08,O.white(),l,1.45,o+.15)),n.add(j(.26,.18,.01,O.screen(2,"wave"),l,1.45,o+.195)),n.add(Bt(ot(l-.05,1.6,o+.1),ot(l-.05,1.9,o+.1),.01,O.chrome())),n.add(j(.1,.16,.04,O.glass(),l-.05,1.82,o+.1))}return n},opTable(i,e,t){let n=new Me,s=e/2,r=t/2;return n.add(j(.6,.06,.5,O.darkSteel(),s,.03,r)),n.add(dt(.12,.75,O.steel(),s,.42,r)),n.add(j(.56,.1,1.95,O.steel(),s,.84,r)),n.add(j(.52,.06,1.9,O.upholstery("40,96,120"),s,.92,r)),n.add(Bt(ot(e-.1,0,.2),ot(e-.1,2.3,.2),.04,O.white())),n.add(Bt(ot(e-.1,2.3,.2),ot(s,2.15,r),.03,O.white())),n.add(dt(.32,.12,O.white(),s,2.1,r,20,.2)),n.add(dt(.28,.01,O.lamp(),s,2.035,r,20)),n},medCart(i,e){let t=new Me,n=e/2,s=pt+.35;t.add(j(.55,.9,.45,O.white(),n,.5,s));for(let r of[-.22,.22])for(let o of[-.18,.18])t.add(dt(.04,.04,O.black(),n+r,.04,s+o,8).rotateZ(Math.PI/2));for(let r=0;r<3;r++)t.add(j(.5,.005,.005,O.darkSteel(),n,.3+r*.22,s+.226));return Nu(t,n,.95,s-.05,.42,2),t.add(dt(.06,.4,O.green(),n+.2,1.15,s+.12,10)),t},showerCabin(i,e){let t=new Me,n=Math.min(.95,e-.2),s=e/2,r=pt+.02,o=r+n;t.add(j(n,.12,n,O.ceramic(),s,.06,(r+o)/2)),t.add(j(n,2,.02,O.white(),s,1,r+.01));for(let a of[-1,1])t.add(j(.012,1.9,n,O.glass(),s+a*n/2,1.07,(r+o)/2));t.add(j(n,1.9,.012,O.glass(),s,1.07,o));for(let a of[-1,1])t.add(j(.03,1.95,.03,O.chrome(),s+a*n/2,1.05,o));return t.add(Bt(ot(s,.9,r+.05),ot(s,1.95,r+.05),.012,O.chrome())),t.add(dt(.08,.02,O.chrome(),s,1.95,r+.14,14)),t.add(j(.08,.12,.04,O.chrome(),s,1.1,r+.04)),t},washbasin(i,e){let t=new Me,n=e/2,s=pt+.26;return t.add(j(.58,.16,.44,O.ceramic(),n,.8,s)),t.add(j(.46,.04,.32,O.chrome(),n,.86,s+.02)),t.add(j(.14,.7,.14,O.ceramic(),n,.36,s-.1)),t.add(Bt(ot(n,.88,pt+.05),ot(n,1.02,pt+.12),.012,O.chrome())),t.add(j(.5,.65,.02,O.chrome(),n,1.45,pt+.01)),t.add(j(.46,.6,.01,O.tintedGlass(),n,1.45,pt+.025)),t},toilet(i,e){let t=new Me,n=e/2,s=e-.1,r=pt,o=1;for(let a of[-1,1])t.add(j(.03,1.9,o,O.cabinetGrey(),n+a*s/2,1.07,r+o/2));return t.add(j(s-.06,1.75,.03,O.cabinetGrey(),n,1,r+o)),t.add(j(.03,.1,.03,O.chrome(),n+s/2-.15,1,r+o+.02)),t.add(j(.36,.36,.5,O.ceramic(),n,.2,r+.35)),t.add(j(.38,.4,.16,O.ceramic(),n,.6,r+.1)),t},washer(i,e){let t=new Me,n=e/2,s=pt+.32;for(let[r,o]of[[.43,1],[1.29,2]])t.add(j(.6,.84,.6,O.white(),n,r,s)),t.add(dt(.2,.02,O.tintedGlass(),n,r-.04,s+.305,18).rotateX(Math.PI/2)),t.add(dt(.23,.015,O.chrome(),n,r-.04,s+.3,18).rotateX(Math.PI/2)),t.add(j(.12,.04,.01,o===1?O.ledGreen():O.ledRed(),n+.18,r+.33,s+.305));return t},treadmill(i,e,t){let n=new Me,s=e/2,r=pt+.15,o=Math.min(1.9,t-.4);n.add(j(.8,.18,o,O.darkSteel(),s,.12,r+o/2+.1)),n.add(j(.56,.02,o-.2,O.black(),s,.22,r+o/2+.1));for(let a of[-1,1])n.add(Bt(ot(s+a*.36,.2,r+.15),ot(s+a*.34,1.3,r+.05),.03,O.frame())),n.add(Bt(ot(s+a*.34,1,r+.1),ot(s+a*.34,1,r+.6),.02,O.black()));return n.add(j(.72,.28,.12,O.black(),s,1.32,r+.08)),n.add(j(.4,.16,.01,O.screen(0,"wave"),s,1.34,r+.145)),n},exerciseBike(i,e){let t=new Me,n=e/2,s=.62;return t.add(j(.5,.05,.08,O.frame(),n,.03,s-.4)),t.add(j(.5,.05,.08,O.frame(),n,.03,s+.4)),t.add(j(.08,.06,.8,O.frame(),n,.06,s)),t.add(dt(.22,.08,O.darkSteel(),n,.32,s-.28,18).rotateZ(Math.PI/2)),t.add(Bt(ot(n,.06,s-.3),ot(n,1.05,s-.36),.03,O.frame())),t.add(j(.46,.04,.06,O.black(),n,1.07,s-.36)),t.add(j(.2,.12,.08,O.black(),n,1.16,s-.38)),t.add(Bt(ot(n,.06,s+.3),ot(n,.88,s+.16),.03,O.frame())),t.add(j(.24,.07,.3,O.black(),n,.92,s+.14)),t.add(dt(.12,.05,O.red(),n,.36,s-.02,14).rotateZ(Math.PI/2)),t},powerRack(i,e,t){let n=new Me,s=e-.3,r=Math.min(1.2,t-.3),o=(e-s)/2,a=(t-r)/2;for(let l of[o,o+s])for(let c of[a,a+r])n.add(j(.07,2.25,.07,O.black(),l,1.125,c));for(let l of[o,o+s])n.add(j(.07,.07,r,O.black(),l,2.22,a+r/2));for(let l of[a,a+r])n.add(j(s,.07,.07,O.black(),o+s/2,2.22,l));n.add(Bt(ot(o-.35,1.35,a+.2),ot(o+s+.35,1.35,a+.2),.016,O.chrome()));for(let l of[o-.22,o+s+.22])n.add(dt(.225,.05,O.black(),l,1.35,a+.2,20).rotateZ(Math.PI/2));return n.add(j(s-.1,.02,r-.1,O.rubber(),o+s/2,.01,a+r/2)),n},weightBench(i,e,t){let n=new Me,s=e/2,r=.3,o=Math.min(1.3,t-.6);n.add(j(.3,.08,o,O.leather(),s,.45,r+o/2+.2));for(let a of[r+.35,r+o])n.add(j(.06,.42,.06,O.black(),s,.21,a));n.add(j(.5,.04,.06,O.black(),s,.02,r+o));for(let a of[-1,1])n.add(j(.05,1.2,.05,O.black(),s+a*.42,.6,r+.15));n.add(Bt(ot(s-.85,1.12,r+.15),ot(s+.85,1.12,r+.15),.014,O.chrome()));for(let a of[-1,1])n.add(dt(.17,.04,O.black(),s+a*.6,1.12,r+.15,18).rotateZ(Math.PI/2));return n},dumbbellRack(i,e){let t=new Me,n=pt+.3;for(let s of[.1,e-.1])t.add(j(.05,.8,.45,O.black(),s,.4,n));for(let[s,r]of[[.45,0],[.75,0]]){t.add(j(e-.2,.03,.4,O.darkSteel(),e/2,s+r,n));let o=Math.floor((e-.3)/.22);for(let a=0;a<o;a++){let l=.25+a*.22,c=.05+a*.006;for(let h of[-.08,.08])t.add(dt(c,.05,O.black(),l,s+c+.02,n+h,10).rotateX(Math.PI/2));t.add(Bt(ot(l,s+c+.02,n-.1),ot(l,s+c+.02,n+.1),.012,O.chrome()))}}return t},gymMat(i,e,t){let n=new Me;return n.add(j(e-.1,.05,t-.1,O.mat(),e/2,.025,t/2)),n.add(j(e-.1,.006,.02,O.white(),e/2,.053,t/2)),n},punchingBag(i,e,t){let n=new Me,s=e/2,r=t/2;return n.add(j(.5,.05,.5,O.black(),s-.3,.025,r)),n.add(Bt(ot(s-.45,0,r),ot(s-.45,2.3,r),.035,O.black())),n.add(Bt(ot(s-.45,2.25,r),ot(s,2.25,r),.03,O.black())),n.add(Bt(ot(s,2.25,r),ot(s,1.75,r),.006,O.chrome())),n.add(dt(.17,1,O.red(),s,1.2,r,16)),n},gunRack(i,e){let t=new Me,n=pt+.22;t.add(j(e-.08,1.9,.04,O.olive(),e/2,.95,pt+.02)),t.add(j(e-.08,.5,.4,O.olive(),e/2,.25,n)),t.add(j(e-.1,.04,.3,O.darkSteel(),e/2,1.5,n-.03));for(let r of[.04,e-.04])t.add(j(.04,1.9,.42,O.olive(),r,.95,n));let s=Math.max(2,Math.floor((e-.2)/.16));for(let r=0;r<s;r++){let o=.15+r*(e-.3)/(s-1);t.add(j(.05,.85,.08,O.black(),o,.98,n)),t.add(j(.035,.22,.12,O.black(),o,.68,n+.04)),t.add(j(.03,.12,.05,O.darkSteel(),o,1.44,n+.04))}return t},fumeHood(i,e){let t=new Me,n=e/2,s=pt+.36;t.add(j(e-.1,.9,.7,O.cabinetGrey(),n,.45,s)),t.add(j(e-.1,.04,.72,O.black(),n,.92,s));for(let r of[-1,1])t.add(j(.04,1.05,.7,O.white(),n+r*(e/2-.07),1.45,s));return t.add(j(e-.1,.06,.7,O.white(),n,2,s)),t.add(j(e-.18,.02,.36,O.white(),n,1.97,s)),t.add(j(e-.2,.6,.012,O.glass(),n,1.55,s+.34)),t.add(j(.3,.45,.3,O.steel(),n,2.25,s-.12)),t.add(dt(.04,.2,O.yellow(),n-.2,1.04,s-.1,10,.03)),t.add(dt(.05,.14,O.glass(),n+.1,1.01,s,12)),t},bioCabinet(i,e){let t=new Me,n=e/2,s=pt+.38;for(let o of[-.42,.42])t.add(j(.05,.7,.6,O.frame(),n+o,.35,s));t.add(j(e-.12,1.15,.74,O.white(),n,1.28,s));let r=j(e-.22,.6,.01,O.glass(),n,1.3,s+.38);return r.rotation.x=-.18,t.add(r),t.add(j(e-.24,.02,.5,O.lamp(),n,1.62,s+.05)),t.add(j(.2,.06,.01,O.ledGreen(),n+.3,1.78,s+.375)),t},instrumentRack(i,e){let t=new Me,n=e/2,s=pt+.32;t.add(j(e-.15,1.85,.6,O.darkSteel(),n,.925,s));for(let r=0;r<5;r++){let o=.25+r*.33;t.add(j(e-.25,.28,.02,r%2?O.cabinetGrey():O.black(),n,o,s+.305)),t.add(j(.3,.16,.01,O.screen(r+(i.seed||0),r%2?"wave":"text"),n-.15,o,s+.317)),t.add(j(.03,.03,.01,r%3?O.ledGreen():O.ledRed(),n+.25,o+.06,s+.317))}return t},testRig(i,e,t){let n=new Me,s=e/2,r=t/2,o=e-.4,a=t-.5;n.add(j(o,.8,a,O.cabinetGrey(),s,.4,r)),n.add(j(o+.04,.05,a+.04,O.black(),s,.82,r)),n.add(dt(.42,.9,O.steel(),s,1.3,r,20)),n.add(dt(.44,.06,O.orange(),s,1.78,r,20)),n.add(dt(.12,.02,O.tintedGlass(),s,1.3,r+.43,16).rotateX(Math.PI/2));for(let l of[.6,2.2,4])n.add(Bt(ot(s+Math.cos(l)*.4,1,r+Math.sin(l)*.4),ot(s+Math.cos(l)*(o/2),.84,r+Math.sin(l)*(a/2)),.02,O.black()));return n.add(j(.5,.35,.3,O.black(),s+o/2-.3,1,r-a/2+.2)),n.add(j(.4,.22,.01,O.screen(1,"wave"),s+o/2-.3,1.02,r-a/2+.355)),n},specimenTank(i,e,t){let n=new Me,s=e/2,r=t/2;n.add(dt(.45,.3,O.darkSteel(),s,.15,r,20)),n.add(dt(.4,1.6,O.liquid(),s,1.1,r,20));for(let a of[.8,2.4,3.9,5.5])n.add(j(.03,1.65,.03,O.chrome(),s+Math.cos(a)*.42,1.12,r+Math.sin(a)*.42));n.add(dt(.45,.2,O.darkSteel(),s,2.03,r,20));let o=new Se(new Ln(.22,14,10),O.specimen());o.scale.set(.8,1.6,.7),o.position.set(s,1.15,r),n.add(o);for(let a of[.5,2.6])n.add(Bt(ot(s+Math.cos(a)*.3,2.1,r+Math.sin(a)*.3),ot(s+Math.cos(a)*.3,2.45,r+Math.sin(a)*.3),.025,O.black()));return n.add(j(.1,.06,.01,O.ledGreen(),s,.2,r+.455)),n},freezer(i,e){let t=new Me,n=e/2,s=pt+.38;return t.add(j(e-.2,1.95,.72,O.white(),n,.975,s)),t.add(j(.03,.6,.03,O.chrome(),n+e/2-.2,1.1,s+.37)),t.add(j(.2,.08,.01,O.screen(0,"text"),n,1.75,s+.362)),t},commandTable(i,e,t){let n=new Me,s=e/2,r=t/2,o=e-.5,a=t-.5;return n.add(j(o-.2,.85,a-.2,O.darkSteel(),s,.425,r)),n.add(j(o,.06,a,O.black(),s,.88,r)),n.add(j(o-.1,.01,a-.1,O.map(),s,.915,r)),n},wallScreen(i,e){let t=new Me,n=e/2,s=pt+.08;return t.add(j(e-.2,1.1,.08,O.black(),n,1.55,s)),t.add(j(e-.3,1,.01,O.screen(i.seed||3,"wave"),n,1.55,s+.045)),t.add(j(e-.2,.75,.3,O.darkSteel(),n,.375,s+.12)),t},chairRow(i,e,t){let n=new Me,s=Math.max(1,Math.floor(e/.6)),r=t/2;n.add(j(e-.1,.05,.08,O.frame(),e/2,.06,r));for(let o=0;o<s;o++)no(n,(o+.5)*e/s,r,-1,"52,60,74");return n},bench(i,e,t){let n=new Me,s=t/2;n.add(j(e-.2,.05,.36,O.wood(),e/2,.45,s));for(let r of[.25,e-.25])n.add(j(.06,.43,.3,O.frame(),r,.215,s));return n},machineTool(i,e){let t=new Me,n=pt+.45,s=e/2;return t.add(j(e-.2,.85,.8,O.green(),s,.425,n)),t.add(j(e-.3,.06,.6,O.steel(),s,.88,n+.05)),t.add(j(.5,.55,.55,O.green(),.45,1.18,n-.05)),t.add(dt(.06,.3,O.chrome(),.85,1.05,n+.05,12).rotateZ(Math.PI/2)),t.add(j(.35,.3,.35,O.green(),e-.45,1.06,n)),t.add(j(e-.3,.45,.012,O.glass(),s,1.15,n+.38)),t.add(j(.28,.36,.1,O.black(),e-.2,1.4,n-.2)),t.add(j(.2,.14,.01,O.screen(1,"text"),e-.2,1.45,n-.145)),t.add(j(.1,.06,.04,O.red(),e-.2,1.25,n-.14)),t},repairStand(i,e,t){let n=new Me;n.add(j(e-.2,.01,t-.2,O.darkSteel(),e/2,.006,t/2));for(let s of[.12,t-.12])n.add(j(e-.2,.012,.1,O.yellow(),e/2,.012,s));for(let s of[.12,e-.12])n.add(j(.1,.012,t-.2,O.yellow(),s,.012,t/2));return n},shelf(i,e){let t=new Me,n=pt+.18,s=ft(i.col*31+i.row);for(let r of[.06,e-.06])t.add(j(.03,1.9,.34,O.wood(),r,.95,n));for(let r=0;r<5;r++){let o=.05+r*.45;if(t.add(j(e-.1,.03,.34,O.wood(),e/2,o,n)),r===4)continue;let a=.1;for(;a<e-.15;){let l=.04+s()*.05,c=.24+s()*.14,h=[O.red(),O.olive(),O.cabinetGrey(),O.yellow(),O.black()];t.add(j(l,c,.24,h[Math.floor(s()*h.length)],a+l/2,o+.015+c/2,n)),a+=l+.005}}return t},cinemaScreen(i,e){let t=new Me,n=pt+.05;t.add(j(e-.2,1.75,.06,O.black(),e/2,1.35,n)),t.add(j(e-.36,1.6,.01,O.screen(i.seed||2,"wave"),e/2,1.35,n+.035));for(let s of[.25,e-.25])t.add(j(.36,1.1,.34,O.black(),s,.55,n+.17));return t.add(j(e-.2,.25,.4,O.darkSteel(),e/2,.125,n+.2)),t},cinemaSeats(i,e,t){let n=new Me,s=Math.max(1,Math.round(e/.62)),r=t/2+.05;n.add(j(e-.04,.12,.7,O.darkSteel(),e/2,.06,r));for(let o=0;o<s;o++){let a=(o+.5)*e/s;n.add(j(.5,.14,.5,O.velvet(),a,.42,r+.04));let l=j(.5,.62,.1,O.velvet(),a,.76,r-.24);l.rotation.x=-.12,n.add(l)}for(let o=0;o<=s;o++)n.add(j(.06,.62,.55,O.black(),o*e/s,.31,r));return n},projector(i,e){let t=new Me,n=e/2,s=pt+.35;return t.add(j(.6,.9,.55,O.black(),n,.45,s)),t.add(j(.45,.3,.6,O.darkSteel(),n,1.05,s+.05)),t.add(dt(.09,.14,O.tintedGlass(),n,1.05,s+.42,14).rotateX(Math.PI/2)),t.add(j(.06,.03,.01,O.ledGreen(),n+.15,1.15,s+.355)),t},planter(i,e,t){let n=new Me,s=ft(i.col*13+i.row*7),r=pt+.36,o=Math.min(.7,t-.2);n.add(j(e-.1,.5,o,O.wood(),e/2,.25,r)),n.add(j(e-.2,.04,o-.1,O.soil(),e/2,.5,r));let a=Math.max(2,Math.round(e/.35));for(let l=0;l<a;l++){let c=.15+(l+.5)*(e-.3)/a,h=.16+s()*.1,d=new Se(new jn(h,1),O.leaf(Math.floor(s()*4)));d.position.set(c,.55+h*.8,r+(s()-.5)*.2),d.scale.set(1,.8+s()*.6,1),n.add(d)}return n},pottedTree(i,e,t){let n=new Me,s=ft(i.col*17+i.row*5),r=e/2,o=t/2;n.add(dt(.3,.5,O.terracotta(),r,.25,o,16,.36)),n.add(dt(.33,.03,O.soil(),r,.5,o,16)),n.add(dt(.05,1.2,O.bark(),r,1.1,o,8,.035));for(let a=0;a<6;a++){let l=s()*Math.PI*2,c=.28+s()*.15,h=1.55+s()*.5,d=new Se(new jn(c,1),O.leaf(Math.floor(s()*4)));d.position.set(r+Math.cos(l)*.22,h,o+Math.sin(l)*.22),n.add(d)}return n},hydroponicRack(i,e){let t=new Me,n=ft(i.col*11+i.row*3),s=pt+.3;for(let r of[.08,e-.08])t.add(j(.04,2,.5,O.steel(),r,1,s));for(let r=0;r<4;r++){let o=.25+r*.5;t.add(j(e-.12,.08,.48,O.white(),e/2,o,s)),t.add(j(e-.2,.03,.4,O.growLight(),e/2,o+.42,s));for(let a=0;a<5;a++){let l=.06+n()*.05,c=new Se(new jn(l,0),O.leaf(Math.floor(n()*4)));c.position.set(.18+a*(e-.36)/4,o+.05+l,s+(n()-.5)*.2),t.add(c)}}return t},fountain(i,e,t){let n=new Me,s=e/2,r=t/2,o=Math.min(e,t)/2-.15;return n.add(dt(o,.45,O.cream(),s,.225,r,28)),n.add(dt(o-.1,.02,O.water(),s,.42,r,28)),n.add(dt(.12,.8,O.cream(),s,.8,r,12)),n.add(dt(.4,.08,O.cream(),s,1.2,r,18,.32)),n.add(dt(.32,.02,O.water(),s,1.25,r,18)),n},vendingMachine(i,e){let t=new Me,n=e/2,s=pt+.4;t.add(j(.85,1.85,.75,O.red(),n,.925,s)),t.add(j(.55,1.2,.01,O.tintedGlass(),n-.1,1.15,s+.38));for(let r=0;r<5;r++)t.add(j(.5,.02,.01,O.lamp(),n-.1,.65+r*.24,s+.385));return t.add(j(.15,.3,.01,O.black(),n+.3,1.2,s+.38)),t.add(j(.4,.15,.02,O.black(),n-.1,.25,s+.38)),t}};function T2(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),l=new Me;a.position.set(-r/2,0,-o/2),l.add(a),l.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],l.position.set(e/2,0,t/2);let c=new Me;return c.add(l),c}var ku=new Set(Object.keys(Du));function Uu(i){let e=Du[i.kind];return e?T2(i,i.cols*Lu,i.rows*Lu,e):null}var wn=i=>Math.max(0,Math.min(255,Math.round(i))),wt=(i,e,t)=>new L(i,e,t),Sc=new Map,ti=(i,e)=>(Sc.has(i)||Sc.set(i,e()),Sc.get(i)),Gt=(i,e)=>ti("city_"+i,()=>new Xe(e));function yi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function wa(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=yi(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(h,d)=>(t?(h=(h+n)%n,d=(d+s)%s):(h=Math.max(0,Math.min(n-1,h)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+h)*4]/255);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let u=(c(d+1,h)-c(d-1,h))*e,f=(c(d,h+1)-c(d,h-1))*e,p=Math.hypot(u,f,1),x=(h*n+d)*4;l.data[x]=(-u/p*.5+.5)*255,l.data[x+1]=(f/p*.5+.5)*255,l.data[x+2]=(1/p*.5+.5)*255,l.data[x+3]=255}return a.putImageData(l,0,0),Et(o,{srgb:!1})}function vs(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:l=4}={}){let c=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let p=1+Oi(u/e,d/t,a,l,s)*o+(c()-.5)*r/255,x=(d*e+u)*4;h.data[x]=wn(n[0]*p),h.data[x+1]=wn(n[1]*p),h.data[x+2]=wn(n[2]*p),h.data[x+3]=255}i.putImageData(h,0,0)}var Ea=(i,e=1)=>`rgba(${i[0]},${i[1]},${i[2]},${e})`,Ac={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},Rc=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Bu=i=>{let[e,t]=i.split("_");return{base:e,role:t,colors:Ac[e]}};function A2(i,e){let{base:t,role:n,colors:s}=Bu(i),r=512,o=936,a=o/2.28,l=x=>o-x*a,c=yi(r,o),h=c.getContext("2d"),d=yi(r,o),u=d.getContext("2d");vs(h,r,o,s.wall,{seed:41+e*5+t.length*3,grain:t==="bank"?14:8,dirt:.08,scale:3}),u.fillStyle="#808080",u.fillRect(0,0,r,o);let f=ft(61+e*11+t.length);if(t==="police"&&n!=="g"){let x=.075*a,m=.26*a;for(let g=0;g*x<o;g++){let _=o-(g+1)*x,y=g%2?m/2:0;for(let v=-y;v<r;v+=m){let T=.86+f()*.26;h.fillStyle=Ea(s.wall.map(C=>wn(C*T))),h.fillRect(v+2,_+2,m-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,_,r,2.5),u.fillStyle="#505050",u.fillRect(0,_,r,3);for(let v=-y;v<r;v+=m)h.fillRect(v,_,2.5,x),u.fillRect(v,_,3,x)}}if(n==="g"||t==="bank"){let m=t==="police"?[212,204,188]:null;m&&vs(h,r,o,m,{seed:71+e,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let _=l(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,_-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,_+3,r,2),u.fillStyle="#202020",u.fillRect(0,_-3,r,7),t==="bank"){let y=.62*a,v=g%2?y/2:0;for(let T=v;T<r;T+=y)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(T-1.5,_,3,.32*a),u.fillStyle="#303030",u.fillRect(T-2,_,4,.32*a)}}}for(let x=0;x<8;x++){let m=f()*r,g=60+f()*240,_=h.createLinearGradient(0,0,0,g);_.addColorStop(0,"rgba(70,60,50,0.12)"),_.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=_,h.fillRect(m,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,l(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,l(.9),r,.9*a)}let p=Et(c);return p.wrapS=p.wrapT=Qt,{map:p,normalMap:wa(d,4,!1)}}function zu(i,e="plaster"){let s=410.5263157894737,r=yi(512,936),o=r.getContext("2d"),a=yi(512,936),l=a.getContext("2d");if(l.fillStyle="#808080",l.fillRect(0,0,512,936),e==="vault"){vs(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",l.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),l.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),l.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let d=24;d<512;d+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(d,h,4,0,Math.PI*2),o.fill(),l.fillStyle="#d0d0d0",l.beginPath(),l.arc(d,h,4,0,Math.PI*2),l.fill()}else vs(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),l.fillStyle="#b0b0b0",l.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),l.fillStyle="#a0a0a0",l.fillRect(0,936-.95*s,512,6);let c=Et(r);return c.wrapS=c.wrapT=Qt,{map:c,normalMap:wa(a,3,!1)}}var ce={facade:(i,e)=>ti(`facade_${i}_${e}`,()=>{let t=A2(i,e);return new Xe({map:t.map,normalMap:t.normalMap,roughness:.85,metalness:0})}),plaster:i=>ti("plaster"+i,()=>{let e=zu(i);return new Xe({map:e.map,normalMap:e.normalMap,roughness:.9})}),vault:()=>ti("vaultWall",()=>{let i=zu(0,"vault");return new Xe({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Gt("trim_"+i,{color:new Qe().setRGB(...Ac[i].trim.map(e=>(e/255)**2.2)),roughness:.75}),plinth:i=>Gt("plinth_"+i,{color:new Qe().setRGB(...Ac[i].plinth.map(e=>(e/255)**2.2)),roughness:.9}),glass:()=>ti("city_glass",()=>new Bn({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Gt("frame",{color:15789282,roughness:.6}),wood:()=>Gt("wood",{color:5913124,roughness:.65}),darkWood:()=>Gt("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Gt("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Gt("greenDoor",{color:2375726,roughness:.55}),iron:()=>Gt("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Gt("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Gt("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Gt("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Gt("stone",{color:13156528,roughness:.85}),granite:()=>Gt("granite",{color:9078402,roughness:.8}),ceiling:()=>Gt("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Gt("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Gt("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Gt("fabric"+i,{color:i,roughness:.95}),paint:i=>Gt("paint"+i,{color:i,roughness:.6}),water:()=>ti("city_water",()=>new Bn({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>ti("city_spray",()=>new Xe({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>ti("leaves"+i,()=>new Xe({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Gt("sandFill",{color:14073994,roughness:1})};function R2(i){let t=yi(512,512),n=t.getContext("2d"),s=yi(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=ft(i.length*17+3);if(i==="parquet"){vs(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,l=a/5;for(let c=-12;c<30;c++)for(let h=-2;h<14;h++)for(let d of[0,1]){let u=.8+o()*.35;n.save(),n.translate(c*l*2+h*0+d*l,h*a-c*l*0),n.rotate(d?Math.PI/4:-Math.PI/4),n.fillStyle=Ea([wn(158*u),wn(106*u),wn(64*u)]),n.fillRect(0,0,a*.7,l*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let c=0;c<512;c+=l*1.41)n.beginPath(),n.moveTo(0,c),n.lineTo(512,c+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let l=0;l<2;l++){let c=(l+a)%2===0;n.fillStyle=c?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(l*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*512,c=o()*512;n.moveTo(l,c);for(let h=0;h<6;h++)l+=(o()-.3)*60,c+=(o()-.5)*50,n.lineTo(l,c);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){vs(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=.92+o()*.12;n.fillStyle=(c+l)%2?`rgba(${wn(110*h)},${wn(116*h)},${wn(110*h)},1)`:`rgba(${wn(206*h)},${wn(204*h)},${wn(192*h)},1)`,n.fillRect(c*512/a+1,l*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let l=0;l<=512;l+=512/a)r.fillRect(l-1,0,2,512),r.fillRect(0,l-1,512,2)}else{vs(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let l=8+a/16%2*8;l<512;l+=16)n.save(),n.translate(l,a),n.rotate((l+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(l,a),r.rotate((l+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:Et(t),normalMap:wa(s,2)}}function Gu(i){return ti("floor_"+i,()=>{let e=R2(i);return new Xe({map:e.map,normalMap:e.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function ke(i,e,t,n,s,r,o){let a=new Se(new vt(i,e,t),n);return a.position.set(s,r,o),a}function Wn(i,e,t,n,s,r,o,a=16){let l=new Se(new Pt(i,e,t,a),n);return l.position.set(s,r,o),l}function Dn(i,e,t,n,s,r=32){let o=new Se(new cs(i.map(([a,l])=>new xe(a,l)),r),e);return o.position.set(t,n,s),o}function io(i,e,t,n){let s=new en;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,e),s.closePath();let r=new xn(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new Se(r,n)}var Tc=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Vu(i,e,t,n,s,r,o){let{wallBox:a,isIndoor:l,THICK:c,PANEL_H:h}=o,d=new Me,u=s.type,f=s.style,p=r?.8:h,x=c/2,m=(e*73856093^t*19349663^n*83492791)>>>0,g=l(n,e,t),_=i==="W"?l(n,e-1,t):l(n,e,t-1),y=Rc(f)?Bu(f):null,v=J=>f==="vault"?ce.vault():!y||J?ce.plaster(m%3):ce.facade(f,m%3),T=y?ce.trim(y.base):ce.slabEdge(),C=v(g),P=v(_),z=i==="W"?[C,P,T,T,T,T]:[T,T,T,T,C,P],A=y?g?-1:1:0,M=n*ht,S=(J,N,F,G,Z,k,b)=>{let H=k-Z,q=A*(c/2+(Z+k)/2),oe=i==="W"?new vt(H,G-F,N-J):new vt(N-J,G-F,H),_e=new Se(oe,b);return i==="W"?_e.position.set(e*D+q,M+(F+G)/2,t*D+(J+N)/2):_e.position.set(e*D+(J+N)/2,M+(F+G)/2,t*D+q),d.add(_e),_e},he=(J,N,F,G)=>{let Z=new xn(J,{depth:F-N,bevelEnabled:!1,curveSegments:16});(i==="W"?A<0:A>0)?Z.translate(0,0,c/2+N):Z.translate(0,0,-(c/2+F)),i==="W"&&Z.rotateY(-Math.PI/2);let b=new Se(Z,G);return b.position.set(e*D,M,t*D),d.add(b),b};if(u==="rail"){let J=f==="fence",N=J?ce.fenceGreen():ce.iron(),F=J?1.1:.95,G=(Z,k,b,H,q,oe=N)=>d.add(a(i,e,t,n,Z,k,b,H,Array(6).fill(oe),q));for(let Z of[0,D])G(Z-.03,Z+.03,0,F+.04,.06);G(0,D,F-.04,F,.05,J?N:ce.darkWood()),G(0,D,.08,.12,.035),J&&G(0,D,F-.3,F-.27,.03);for(let Z=.1;Z<D-.05;Z+=.12)G(Z-.009,Z+.009,.1,F-(J?-.06:.02),.018),J&&G(Z-.02,Z+.02,F+.02,F+.07,.025);return d}if(u==="wall")d.add(a(i,e,t,n,-x,D+x,0,p,z));else if(u==="door"){let N=Math.min(2.1,p),F=(D-.92)/2,G=(D+.92)/2;d.add(a(i,e,t,n,-x,F,0,p,z)),d.add(a(i,e,t,n,G,D+x,0,p,z)),p>N+.01&&d.add(a(i,e,t,n,F,G,N,p,z));let Z=f==="vault"?ce.steel():ce.wood(),k=Array(6).fill(Z),b=f==="vault"?.12:.06;if(d.add(a(i,e,t,n,F-b,F,0,N,k,c+.05)),d.add(a(i,e,t,n,G,G+b,0,N,k,c+.05)),p>N+.01&&d.add(a(i,e,t,n,F-b,G+b,N,N+b,k,c+.05)),d.add(a(i,e,t,n,F,G,0,.03,Array(6).fill(ce.stone()),c+.1)),y&&!r){let H=ce.trim(y.base);if(S(F-.16,F-.04,0,N+.1,0,.05,H),S(G+.04,G+.16,0,N+.1,0,.05,H),S(F-.16,G+.16,N+.04,N+.16,0,.05,H),N+.42<p){S(F-.26,G+.26,N+.26,N+.34,0,.22,H);for(let q of[F-.18,G+.18])S(q-.05,q+.05,N+.12,N+.26,0,.16,H)}}}else{let J=y&&y.base==="bank"&&y.role==="g",N=.78,F=J?.62:y&&y.role==="g"?.75:.7,G=J?2.08:2,Z=(D-N)/2,k=(D+N)/2,b=J?G-N/2:G;if(r)d.add(a(i,e,t,n,-x,D+x,0,p,z));else{if(d.add(a(i,e,t,n,-x,Z,0,p,z)),d.add(a(i,e,t,n,k,D+x,0,p,z)),d.add(a(i,e,t,n,Z,k,0,F,z)),d.add(a(i,e,t,n,Z,k,G,p,z)),J){let oe=new en;oe.moveTo(Z,b),oe.lineTo(Z,G),oe.lineTo(k,G),oe.lineTo(k,b),oe.absarc(D/2,b,N/2,0,Math.PI,!1);let _e=new xn(oe,{depth:c,bevelEnabled:!1,curveSegments:16});_e.translate(0,0,-c/2),i==="W"&&_e.rotateY(-Math.PI/2);let W=new Se(_e,A?ce.facade(f,m%3):z[i==="W"?0:4]);W.position.set(e*D,M,t*D),d.add(W)}let H=Array(6).fill(ce.glass()),q=Array(6).fill(ce.frame());if(d.add(a(i,e,t,n,Z+.03,k-.03,F,J?b+N/2-.02:G,H,.03)),d.add(a(i,e,t,n,Z,Z+.05,F,b,q,.08)),d.add(a(i,e,t,n,k-.05,k,F,b,q,.08)),d.add(a(i,e,t,n,Z,k,F,F+.05,q,.08)),J||d.add(a(i,e,t,n,Z,k,G-.05,G,q,.08)),d.add(a(i,e,t,n,D/2-.022,D/2+.022,F,J?b+N/2-.04:G,q,.06)),d.add(a(i,e,t,n,Z,k,F+(b-F)*.68-.02,F+(b-F)*.68+.02,q,.06)),y){let oe=ce.trim(y.base);if(S(Z-.1,k+.1,F-.07,F,0,.1,oe),J||(S(Z-.1,Z,F,G+.08,0,.04,oe),S(k,k+.1,F,G+.08,0,.04,oe),S(Z-.1,k+.1,G,G+.08,0,.04,oe)),y.role==="u"&&["bank","pink","cream"].includes(y.base)||y.role==="t"&&y.base==="bank"){let W=new en;W.moveTo(Z-.16,G+.1),W.lineTo(k+.16,G+.1),W.lineTo(D/2,G+.27),W.closePath(),he(W,0,.1,oe)}else y.role==="u"||y.role==="t"?S(Z-.15,k+.15,G+.1,G+.17,0,.12,oe):y.role==="g"&&!J&&S(D/2-.07,D/2+.07,G-.02,G+.16,0,.06,oe);if(J){let W=new en;W.absarc(D/2,b,N/2+.1,0,Math.PI,!1),W.lineTo(Z,b),W.absarc(D/2,b,N/2,Math.PI,0,!0),W.closePath(),he(W,0,.05,oe),S(D/2-.07,D/2+.07,G-.06,G+.14,0,.08,oe),S(Z-.1,Z,F,b,0,.05,oe),S(k,k+.1,F,b,0,.05,oe);let pe=ce.iron();for(let Te=1;Te<6;Te++){let Pe=Z+Te*N/6,B=Math.sqrt(Math.max(0,(N/2)**2-(Pe-D/2)**2));S(Pe-.01,Pe+.01,F,b+B-.03,-.06,-.04,pe)}for(let Te of[F+.35,F+.8])S(Z+.02,k-.02,Te,Te+.02,-.065,-.035,pe)}if(y.role!=="g"&&y.base==="bank"){let W=ce.iron();S(Z-.08,k+.08,F-.12,F-.07,0,.32,ce.stone()),S(Z-.06,k+.06,F+.42,F+.45,.28,.31,W);for(let pe=0;pe<=8;pe++){let Te=Z-.04+pe*(N+.08)/8;S(Te-.008,Te+.008,F-.07,F+.43,.285,.305,W)}}}}}if(y&&!r){let J=ce.trim(y.base);if(y.role==="g"&&S(-x,D+x,0,.5,0,.05,ce.plinth(y.base)),y.role==="t"){S(-x-.02,D+x+.02,h-.16,h+.02,0,.08,J),S(-x-.06,D+x+.06,h+.02,h+.12,0,.18,J),S(-x-.1,D+x+.1,h+.12,h+.24,0,.32,J);for(let N=.16;N<D;N+=.31)S(N-.04,N+.04,h-.02,h+.12,.08,.26,J)}else S(-x-.02,D+x+.02,h-.08,h+.24,0,.06,J),S(-x-.03,D+x+.03,h+.18,h+.24,0,.1,J)}else y&&r&&y.role==="g"&&S(-x,D+x,0,.5,0,.05,ce.plinth(y.base));return d}function Wu(i,e,t,n,s,r,o,a,l){let{wallBox:c}=l,h=new Me,d=o-.01;if(a==="vault"){let m=Array(6).fill(ce.steel());h.add(c(i,e,t,n,s-.02,r+.02,.01,d,m,.2));let g=(s+r)/2;for(let _ of[.26])h.add(c(i,e,t,n,g-.3,g+.3,d*.45,d*.45+.04,Array(6).fill(ce.brass()),_));return h.add(c(i,e,t,n,g-.02,g+.02,d*.45-.28,d*.45+.32,Array(6).fill(ce.brass()),.26)),h.add(c(i,e,t,n,s+.05,s+.1,.2,d-.2,Array(6).fill(ce.iron()),.24)),h}let u=a==="outer",f=Array(6).fill(u?ce.greenDoor():ce.wood()),p=Array(6).fill(ce.darkWood()),x=(s+r)/2;h.add(c(i,e,t,n,s-.02,r+.02,.01,d,f,.06)),h.add(c(i,e,t,n,x-.01,x+.01,.01,d,p,.075));for(let[m,g]of[[s+.06,x-.06],[x+.06,r-.06]])d>1&&h.add(c(i,e,t,n,m,g,.15,Math.min(.85,d-.1),p,.072)),d>1.9&&(u?h.add(c(i,e,t,n,m+.02,g-.02,1.05,d-.15,Array(6).fill(ce.glass()),.074)):h.add(c(i,e,t,n,m,g,1,d-.15,p,.072)));for(let m of[-1,1])h.add(c(i,e,t,n,x+m*.06-.015,x+m*.06+.015,Math.min(1,d-.1),Math.min(1.12,d-.05),Array(6).fill(ce.brass()),.09));return h}var Xu=()=>({body:ce.stone(),tread:ce.lightWood(),nosing:ce.darkWood(),rail:ce.iron(),handrail:ce.darkWood()});function C2(i){let n=yi(512,512),s=n.getContext("2d"),r=yi(512,512),o=r.getContext("2d"),a=ft(i==="slate"?501:503),l=512/(i==="slate"?10:8),c=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=Ea(h),s.fillRect(0,0,512,512);for(let f=0;f<512/c;f++){let p=f%2?l/2:0;for(let x=-p;x<512;x+=l){let m=.8+a()*.32,g=f*c,_=o.createLinearGradient(0,g,0,g+c);_.addColorStop(0,"#404040"),_.addColorStop(1,"#c8c8c8"),o.fillStyle=_,o.fillRect(x+1,g,l-2,c),s.fillStyle=Ea(h.map(y=>wn(y*m))),i==="slate"?s.fillRect(x+1,g+1,l-2,c-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+l-1,g),s.lineTo(x+l-1,g+c*.75),s.quadraticCurveTo(x+l/2,g+c*1.05,x+1,g+c*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+c-2,l,2)}}for(let f=0;f<40;f++){let p=a()*512,x=a()*512,m=10+a()*40,g=s.createRadialGradient(p,x,0,p,x,m);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(p-m,x-m,m*2,m*2)}let d=Et(n),u=wa(r,3);for(let f of[d,u])f.wrapS=f.wrapT=rs;return{map:d,normalMap:u}}var Ou=i=>ti("roofMat_"+i,()=>{let e=C2(i);return new Xe({map:e.map,normalMap:e.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:dn})});function Xn(i,e,t){let n=new kt,s=i[0],r=e.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),l=[],c=[];for(let d of i){l.push(d.x,d.y,d.z);let u=new L().subVectors(d,s);c.push(u.dot(r)/(2*D),u.dot(a)/(2*D))}let h=[];for(let d=1;d<i.length-1;d++)h.push(0,d,d+1);return n.setAttribute("position",new rt(l,3)),n.setAttribute("uv",new rt(c,2)),n.setIndex(h),n.computeVertexNormals(),new Se(n,t)}function Fu(i,e,t,n,s,r,o,a){let l=n-e,c=s-t,h=Math.min(l,c)/2,d=h*Math.tan(o),u=l>=c,f=u?[wt(e+h,r+d,(t+s)/2),wt(n-h,r+d,(t+s)/2)]:[wt((e+n)/2,r+d,t+h),wt((e+n)/2,r+d,s-h)],p={nw:wt(e,r,t),ne:wt(n,r,t),se:wt(n,r,s),sw:wt(e,r,s)};u?(i.add(Xn([p.sw,p.se,f[1],f[0]],wt(1,0,0),a)),i.add(Xn([p.ne,p.nw,f[0],f[1]],wt(-1,0,0),a)),i.add(Xn([p.se,p.ne,f[1]],wt(0,0,-1),a)),i.add(Xn([p.nw,p.sw,f[0]],wt(0,0,1),a))):(i.add(Xn([p.se,p.ne,f[0],f[1]],wt(0,0,-1),a)),i.add(Xn([p.nw,p.sw,f[1],f[0]],wt(0,0,1),a)),i.add(Xn([p.sw,p.se,f[1]],wt(1,0,0),a)),i.add(Xn([p.ne,p.nw,f[0]],wt(-1,0,0),a)));let x=a,m=(g,_)=>{let y=new L().subVectors(_,g),v=new Se(new Pt(.07,.07,y.length(),8),x);v.position.copy(g).addScaledVector(y,.5),v.quaternion.setFromUnitVectors(wt(0,1,0),y.normalize()),i.add(v)};return m(f[0],f[1]),m(p.nw,f[0]),m(p.sw,f[0]),m(p.ne,f[1]),m(p.se,f[1]),{height:d,along:u,half:h}}function Hu(i,e,t,n,s,r,o,a=1){let l=new Me,c=1*a,h=1.15*a,d=1.6*a;l.add(ke(c,h,d,r,0,h/2,-d/2)),l.add(ke(c*.56,h*.6,.04,ce.glass(),0,h*.45,.01)),l.add(ke(c*.66,.06,.06,ce.frame(),0,h*.14,.02)),l.add(ke(.04,h*.6,.05,ce.frame(),0,h*.45,.02));let u=io(c+.24,.55*a,d+.15,o);u.position.set(0,h,-d/2+.07),l.add(u);let f=io(c+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),l.add(f),l.position.set(e,n,t),l.rotation.y=Math.atan2(s.x,s.z),i.add(l)}var xi=i=>(i+.5)*D;function P2(i){let e=i.cols*D,t=i.rows*D;if(i.type==="mansard"){let c={x0:-.2,z0:-.2,x1:e+.2,z1:t+.2},h=(47-i.col)*D+D/2,d=[],u=.75*.36;for(let p=1;p<i.cols-1;p+=2){let x=xi(p);Math.abs(x-h)<5.2||d.push({x,z:c.z1-u,facing:"S"},{x,z:c.z0+u,facing:"N"})}for(let p=1;p<i.rows-1;p+=2)d.push({x:c.x1-u,z:xi(p),facing:"E"},{x:c.x0+u,z:xi(p),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([p,x])=>({x:xi(Math.floor(i.cols*p)),z:xi(Math.floor(i.rows*x))}));return{...c,width:e,depth:t,dormers:d,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:t-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:e+n,z1:t+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let c=0;c<i.cols;c++){let h=xi(c);c%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let c=0;c<i.rows;c++){let h=xi(c);c%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let l=[0,1,2].map(c=>({x:xi(Math.floor(i.cols*(.25+c*.25))),z:xi(Math.floor(i.rows*(.42+c%2*.16)))}));return{...r,width:e,depth:t,along:o,run:s,dormers:a,chimneys:l,pediment:null}}function I2(i){let e=P2(i),t={S:wt(0,0,1),N:wt(0,0,-1),E:wt(1,0,0),W:wt(-1,0,0)},n=new Me,s=i.cols*D,r=i.rows*D,o=.42,a=ft(i.col*31+i.row*17),l=ce.trim(i.facade||"cream");if(i.type==="mansard"){let c=Ou("slate"),h=.75,d=2.3,u=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},p={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(A,M,S)=>wt(A,M,S),m=u+d;n.add(Xn([x(f.x0,u,f.z1),x(f.x1,u,f.z1),x(p.x1,m,p.z1),x(p.x0,m,p.z1)],wt(1,0,0),c)),n.add(Xn([x(f.x1,u,f.z0),x(f.x0,u,f.z0),x(p.x0,m,p.z0),x(p.x1,m,p.z0)],wt(-1,0,0),c)),n.add(Xn([x(f.x1,u,f.z1),x(f.x1,u,f.z0),x(p.x1,m,p.z0),x(p.x1,m,p.z1)],wt(0,0,-1),c)),n.add(Xn([x(f.x0,u,f.z0),x(f.x0,u,f.z1),x(p.x0,m,p.z1),x(p.x0,m,p.z0)],wt(0,0,1),c)),Fu(n,p.x0,p.z0,p.x1,p.z1,m,.07,c),n.add(ke(p.x1-p.x0+.1,.1,.12,ce.steel(),(p.x0+p.x1)/2,m+.05,p.z1)),n.add(ke(p.x1-p.x0+.1,.1,.12,ce.steel(),(p.x0+p.x1)/2,m+.05,p.z0));let g=u+.35;for(let A of e.dormers)Hu(n,A.x,A.z,g,t[A.facing],l,c,.95);let _=(47-i.col)*D+D/2,y=r+.12,v=io(9.2,2.3,.5,l);v.position.set(_,u-.02,y-.05),n.add(v);let T=io(8.2,1.85,.12,ce.facade("bank_u",1));T.position.set(_,u+.16,y+.22),n.add(T);let C=Math.atan2(2.3,4.6),P=Math.hypot(4.6,2.3)+.3;for(let A of[-1,1]){let M=ke(P,.2,.7,l,_+A*2.3,u+1.15,y+.02);M.rotation.z=-A*C,n.add(M)}n.add(ke(9.6,.22,.75,l,_,u+.02,y+.02));let z=new Se(new Pt(.42,.42,.12,32),ce.brass());z.rotation.x=Math.PI/2,z.scale.set(1,1,.72),z.position.set(_,u+.85,y+.32),n.add(z);for(let A of[-4.6,0,4.6])n.add(Dn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],l,_+A,A?u+.2:u+2.4,y+.05,12));for(let{x:A,z:M}of e.chimneys)n.add(ke(.7,1.3,.5,ce.facade("bank_t",0),A,m+.6,M)),n.add(ke(.84,.12,.64,l,A,m+1.28,M))}else{let c=Ou("tile"),h=-o,d=-o,u=s+o,f=r+o,p=.22,x=Fu(n,h,d,u,f,p,.52,c);n.add(ke(u-h,.14,.06,ce.darkWood(),(h+u)/2,p-.04,f)),n.add(ke(u-h,.14,.06,ce.darkWood(),(h+u)/2,p-.04,d)),n.add(ke(.06,.14,f-d,ce.darkWood(),u,p-.04,(d+f)/2)),n.add(ke(.06,.14,f-d,ce.darkWood(),h,p-.04,(d+f)/2)),n.add(ke(u-h,.03,f-d,ce.darkWood(),(h+u)/2,p-.1,(d+f)/2));for(let _ of[d,f]){let y=Wn(.06,.06,u-h,ce.iron(),(h+u)/2,p-.02,_,8);y.rotation.z=Math.PI/2,n.add(y)}let m=Math.tan(.52),g=e.run;for(let _ of e.dormers)Hu(n,_.x,_.z,p+(g-.75)*m,t[_.facing],l,c);for(let _=0;_<e.chimneys.length;_++){let{x:y,z:v}=e.chimneys[_],T=p+Math.min(Math.min(y-h,u-y),Math.min(v-d,f-v))*m,C=ce.facade("police_u",_%3);n.add(ke(.6,x.height-(T-p)+1.1,.5,C,y,T+(x.height-(T-p)+1.1)/2-.2,v)),n.add(ke(.72,.1,.62,ce.stone(),y,p+x.height+.95,v))}}return n}function Cc(i,e,t=2){let n=new jn(i,t),s=n.attributes.position,r=ft(e),o=[],a=r()*10;for(let l=0;l<s.count;l++){let c=wt(s.getX(l),s.getY(l),s.getZ(l)),h=1+.18*Math.sin(c.x*5+a)*Math.sin(c.y*4.3+a*.7)*Math.sin(c.z*4.7)+(r()-.5)*.12;c.multiplyScalar(h),s.setXYZ(l,c.x,c.y,c.z);let d=.75+.25*(c.y/i)+(r()-.5)*.25;o.push(d,d,d)}return n.setAttribute("color",new rt(o,3)),n.computeVertexNormals(),n}function Pc(i){return ti("leafTint"+i,()=>new Xe({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function L2(i,e,t){let n=new Me,s=ft(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Gt("bark",{color:4864556,roughness:.95});n.add(Wn(.11,.17,o+.6,a,e,(o+.6)/2,t,10));for(let h=0;h<3;h++){let d=s()*Math.PI*2,u=Wn(.04,.07,1.2,a,e+Math.cos(d)*.3,o+.6,t+Math.sin(d)*.3,6);u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),n.add(u)}let l=Pc(r?6195776:4880954),c=r?7:6;for(let h=0;h<c;h++){let d=h/c*Math.PI*2+s(),u=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,p=new Se(Cc(f,i.col*101+h*17+i.row),l);p.position.set(e+Math.cos(d)*u,o+1.25+(h===0?.4:(s()-.3)*.9),t+Math.sin(d)*u),n.add(p)}return n}function N2(i,e,t){let n=new Me,s=Pc(4616250);for(let r=0;r<3;r++){let o=new Se(Cc(.5,t*7+r,2),s);o.scale.set(i/2.4,.95,e/1.25),o.position.set(i*(.2+r*.3),.5,e/2),n.add(o)}return n}function _s(i,e,t,n){let s=new Me;return s.add(i),i.position.set(-t,0,-n),s.rotation.y=-(e.rotation||0)*Math.PI/2,s.position.set(t,0,n),s}function Yu(i){let e=i.cols*D,t=i.rows*D,n=e/2,s=t/2,r=new Me,o=l=>(r.add(l),l),a=ft(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return I2(i);case"tree":return L2(i,n,s);case"hedge":return N2(e,t,i.col+i.row*3);case"bench":{let l=new Me;for(let c of[.18,D-.18])l.add(ke(.05,.45,.42,ce.iron(),c,.22,.45)),l.add(ke(.05,.5,.05,ce.iron(),c,.7,.26));for(let c=0;c<4;c++)l.add(ke(D-.12,.035,.08,ce.lightWood(),D/2,.46,.32+c*.1));for(let c=0;c<3;c++)l.add(ke(D-.12,.08,.03,ce.lightWood(),D/2,.62+c*.12,.25));return _s(l,i,n,s)}case"bin":return o(Dn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],ce.iron(),n,0,s,16)),r;case"streetLamp":return o(Dn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],ce.iron(),n,0,s,12)),o(Dn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],ce.lantern(),n,3.5,s,6)),o(Dn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],ce.iron(),n,4,s,6)),r;case"column":return o(ke(.66,.16,.66,ce.stone(),n,.08,s+.05)),o(Dn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],ce.stone(),n,.16,s+.05,24)),o(Wn(.21,.24,ht-.62,ce.stone(),n,.28+(ht-.62)/2,s+.05,20)),o(Dn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],ce.stone(),n,ht-.34,s+.05,24)),o(ke(.7,.18,.7,ce.stone(),n,ht-.09,s+.05)),r;case"balcony":{o(ke(e,.18,1.05,ce.stone(),n,.09,1.05/2)),o(ke(e+.1,.06,1.05+.06,ce.stone(),n,.2,1.05/2+.03));for(let c=.15;c<e;c+=.22)o(Dn(Tc,ce.stone(),c,.23,1.05-.1,10));for(let c=.15;c<1.05-.1;c+=.22)o(Dn(Tc,ce.stone(),.08,.23,c,10)),o(Dn(Tc,ce.stone(),e-.08,.23,c,10));return o(ke(e,.08,.16,ce.stone(),n,.97,1.05-.1)),o(ke(.16,.08,1.05,ce.stone(),.08,.97,1.05/2)),o(ke(.16,.08,1.05,ce.stone(),e-.08,.97,1.05/2)),o(ke(3.4,.36,.06,ce.darkWood(),n,-.3,.12)),o(ke(3.1,.2,.02,ce.brass(),n,-.3,.155)),r}case"fountain":{o(Dn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],ce.granite(),n,0,s,72));let c=new Se(new Ni(5.3-.38,64),ce.water());c.rotation.x=-Math.PI/2,c.position.set(n,.36,s),o(c),o(new Se(new Ni(5.3-.38,64),ce.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(Dn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],ce.stone(),n,0,s,48));let h=new Se(new Ni(.9,32),ce.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let d=new Se(new Ni(1.6,32),ce.water());d.rotation.x=-Math.PI/2,d.position.set(n,1.48,s),o(d),o(new Se(new Pt(1.62,1.95,1.1,32,1,!0),ce.spray())).position.set(n,.92,s),o(new Se(new Pt(.95,1.6,.85,32,1,!0),ce.spray())).position.set(n,1.92,s),o(new Se(new la(.12,1.1,12,1,!0),ce.spray())).position.set(n,3.9,s);for(let u=0;u<8;u++){let f=u/8*Math.PI*2,p=new Se(new Pt(.03,.05,1.6,6,1,!0),ce.spray());p.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),p.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(p)}return r}case"playhouse":{let l=ce.paint(14205066),c=ce.paint(11549226);o(ke(e-.3,.1,t-.3,ce.lightWood(),n,.05,s));for(let[u,f,p,x]of[[n,.2,e-.3,.06],[.2,s,.06,t-.3],[e-.2,s,.06,t-.3]])o(ke(p,1.3,x,l,u,.75,f));o(ke(.8,1.3,.06,l,.55,.75,t-.2)),o(ke(.7,1.3,.06,l,e-.5,.75,t-.2)),o(ke(.5,.45,.07,ce.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=ke(e*.62,.06,t-.1,c,e*.3,1.75,s);h.rotation.z=.6,o(h);let d=ke(e*.62,.06,t-.1,c,e*.7,1.75,s);d.rotation.z=-.6,o(d);for(let u of[.2,t-.2]){let f=io(e-.3,.75,.06,l);f.position.set(n,1.4,u),o(f)}return r}case"slide":{let l=ce.paint(12730414),c=ce.paint(3828392);o(ke(.9,.08,.9,ce.lightWood(),n,1.5,.55));for(let[d,u]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Wn(.04,.04,2.3,c,d,1.15,u,8));for(let d of[n-.4,n+.4])o(ke(.05,.05,.9,c,d,2.25,.55));for(let d=0;d<5;d++)o(ke(.6,.04,.12,ce.lightWood(),n,.3+d*.27,.05-d*0)).position.z=.08;let h=ke(.62,.05,2.4,l,n,.82,2.05);h.rotation.x=.62,o(h);for(let d of[-1,1]){let u=ke(.05,.16,2.4,l,n+d*.32,.9,2.05);u.rotation.x=.62,o(u)}return r}case"swing":{let l=ce.paint(3828392);for(let h of[.15,e-.15])for(let d of[-1,1]){let u=Wn(.045,.045,2.5,l,h,1.18,s+d*.45,8);u.rotation.x=d*.38,o(u)}let c=Wn(.05,.05,e-.2,l,n,2.35,s,8);c.rotation.z=Math.PI/2,o(c);for(let h of[e*.3,e*.7]){for(let d of[-.22,.22])o(Wn(.01,.01,1.75,ce.steel(),h+d,1.45,s,4));o(ke(.5,.05,.22,ce.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[l,c,h,d]of[[n,.1,e-.2,.18],[n,t-.1,e-.2,.18],[.1,s,.18,t],[e-.1,s,.18,t]])o(ke(h,.3,d,ce.lightWood(),l,.15,c));return o(ke(e-.3,.12,t-.3,ce.sand(),n,.06,s)),o(ke(.2,.18,.2,ce.paint(12730414),n-.6,.2,s+.3)),o(Wn(.12,.08,.16,ce.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Wn(1.1,1.1,.1,ce.paint(12730414),n,.25,s,32)),o(Wn(.08,.1,.9,ce.steel(),n,.7,s,10));for(let l=0;l<4;l++){let c=l*Math.PI/2,h=ke(1.9,.04,.04,ce.paint(14196768),n,.95,s);h.rotation.y=c,o(h),o(Wn(.03,.03,.7,ce.paint(14196768),n+Math.cos(c)*.95,.6,s+Math.sin(c)*.95,6))}return r}case"busStop":{for(let l of[.15,e-.15])o(ke(.08,2.4,.08,ce.iron(),l,1.2,.2));return o(ke(e,.08,1.2,ce.iron(),n,2.42,.6)),o(ke(e-.3,1.9,.03,ce.glass(),n,1.2,.18)),o(ke(e-.6,.06,.4,ce.lightWood(),n,.48,.42)),o(ke(.9,.6,.06,ce.paint(2775706),e-.6,2,.2)),r}case"counter":{let l=new Me;return l.add(ke(D,1.05,.6,ce.darkWood(),D/2,.52,.55)),l.add(ke(D+.02,.05,.7,ce.stone(),D/2,1.07,.55)),l.add(ke(D,.55,.02,ce.glass(),D/2,1.4,.4)),l.add(ke(.04,.6,.04,ce.brass(),.04,1.4,.4)),_s(l,i,n,s)}case"deposits":{let l=new Me;l.add(ke(D-.02,2.1,.45,ce.steel(),D/2,1.05,.24));for(let c=0;c<9;c++)for(let h=0;h<4;h++){let d=.12+h*.3,u=.15+c*.22;l.add(ke(.27,.19,.02,ce.paint(9081496),d+.14,u+.1,.475)),l.add(ke(.03,.03,.02,ce.brass(),d+.14,u+.1,.49))}return _s(l,i,n,s)}case"plant":o(Dn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],ce.paint(10115642),n,0,s,16));for(let l=0;l<4;l++){let c=new Se(Cc(.32,i.col*3+l),Pc(4090416));c.position.set(n+(a()-.5)*.3,.9+l*.22,s+(a()-.5)*.3),o(c)}return r;case"bed":{let l=new Me;return l.add(ke(e-.2,.35,t-.25,ce.wood(),n,.18,s+.05)),l.add(ke(e-.3,.18,t-.35,ce.fabric(15262420),n,.44,s+.05)),l.add(ke(e*.6,.06,t-.3,ce.fabric(6961738),n+e*.17,.55,s+.05)),l.add(ke(.45,.14,t-.5,ce.fabric(16052456),.45,.6,s+.05)),l.add(ke(.08,1,t-.25,ce.darkWood(),.12,.5,s+.05)),_s(l,i,n,s)}case"wardrobe":{let l=new Me;l.add(ke(D-.15,2,.6,ce.wood(),D/2,1,.36)),l.add(ke(D-.05,.1,.68,ce.darkWood(),D/2,2.05,.36)),l.add(ke(.02,1.8,.02,ce.darkWood(),D/2,1,.67));for(let c of[-1,1])l.add(ke(.03,.12,.03,ce.brass(),D/2+c*.06,1.05,.68));return _s(l,i,n,s)}case"bookcase":{let l=new Me;l.add(ke(D-.15,2,.4,ce.darkWood(),D/2,1,.26));let c=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let d=.14;for(;d<D-.2;){let u=.04+a()*.05,f=.22+a()*.1;l.add(ke(u-.005,f,.25,ce.fabric(c[Math.floor(a()*c.length)]),d+u/2,.12+h*.38+f/2,.36)),d+=u}}return _s(l,i,n,s)}case"table":{o(ke(e-.3,.05,t-.3,ce.wood(),n,.76,s));for(let[l,c]of[[.25,.25],[e-.25,.25],[.25,t-.25],[e-.25,t-.25]])o(ke(.06,.74,.06,ce.darkWood(),l,.37,c));for(let l=0;l<Math.max(2,i.cols);l++){let c=(l+.5)*e/Math.max(2,i.cols);for(let h of[.05,t-.05])o(ke(.4,.05,.4,ce.darkWood(),c,.45,h)),o(ke(.4,.5,.04,ce.darkWood(),c,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let l=new Me,c=ce.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);l.add(ke(e-.2,.42,.8,c,n,.21,.6)),l.add(ke(e-.2,.5,.2,c,n,.65,.3));for(let h of[.15,e-.15])l.add(ke(.18,.6,.8,c,h,.3,.6));return _s(l,i,n,s)}default:return null}}var Sa=Yt==="city",Un=lu(ou(),au),a_=1280/18.5;var _i=D*It,Lc=new L(_i/2,0,_i/2),Nc=.22,nn=.18,so=ht-Nc,sn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Tn=(i,e,t)=>new L(i,e,t),rn=new kr({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});rn.setPixelRatio(1);rn.shadowMap.enabled=!0;rn.shadowMap.type=sc;rn.toneMapping=rc;rn.outputColorSpace=Mn;document.body.appendChild(rn.domElement);var Fi=new js,fr=Yt==="base";Fi.background=new Qe(fr?789258:1709584);Fi.environment=new Ks(rn).fromScene(new xa,.04).texture;Fi.add(fr?new Wr(15002868,4999234,1.25):new Wr(13163775,5917236,.75));var _n=new ha(fr?16774890:16774368,fr?2.6:4.2);{let i=fu(-11,7.5),e=fr?.45:1.6;_n.position.set(Lc.x+i.x*e,fr?24:17.6,Lc.z+i.y*e)}_n.target.position.copy(Lc);_n.castShadow=!0;_n.shadow.mapSize.set(4096,4096);Object.assign(_n.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});_n.shadow.camera.updateProjectionMatrix();_n.shadow.bias=-3e-4;_n.shadow.normalBias=.025;_n.shadow.radius=2;Fi.add(_n,_n.target);var Ic=new Map,kn=(i,e)=>(Ic.has(i)||Ic.set(i,e()),Ic.get(i)),qt=(i,e)=>kn(i,()=>new Xe(e)),fe={trim:()=>qt("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>qt("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>qt("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>qt("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>qt("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>qt("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>qt("rubber",{color:1842204,roughness:.9}),paint:()=>qt("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>kn("glass",()=>new Bn({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>qt("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>qt("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>qt("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>kn("screen"+i,()=>new Xe({map:ar(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:ar(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,e)=>kn(`wall_${i}_${e}`,()=>{let t=vu(i,e);return new Xe({map:t.map,normalMap:t.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>kn("interiorFloor",()=>{let i=Mu();return new Xe({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>kn("roof",()=>{let i=bu();return new Xe({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>kn("grating",()=>{let i=Eu();return new Xe({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>kn("concrete",()=>{let i=Su();return new Xe({map:i.map,roughness:.95})}),container:i=>kn("container_"+i,()=>{let e=wu(i==="orange"?3:9);return new Xe({map:e.map,normalMap:e.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>kn("rock",()=>{let i=$r(5,[150,116,88]);return new Xe({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>kn("baseRock"+i,()=>{let e=$r(11+i*7,[120,112,102]);return new Xe({normalMap:e.normalMap,color:6182736,roughness:.95})}),rockCut:i=>kn("rockCut"+i,()=>{let e=$r(31+i*5,[92,86,80]);return new Xe({normalMap:e.normalMap,color:5722700,roughness:.98})})};function Yn(i,e,t,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:e,level:t,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function Ue(i,e,t,n,s,r,o){let a=new Se(new vt(i,e,t),n);return a.position.set(s,r,o),a}function Sn(i,e,t,n,s,r,o,a=16){let l=new Se(new Pt(i,e,t,a),n);return l.position.set(s,r,o),l}function D2(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new vt(t,s.length(),t),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}function dr(i,e,t,n){let s=new L().subVectors(e,i),r=new Se(new Pt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}var $u=(i,e,t)=>(i*73856093^e*19349663^t*83492791)>>>0,Dc=(i,e,t)=>e>=0&&t>=0&&e<It&&t<It&&Un.indoor[i][t][e]===1;function at(i,e,t,n,s,r,o,a,l,c=nn){let h=r-s,d=a-o,u=n*ht,f=i==="W"?new vt(c,d,h):new vt(h,d,c),p=i==="W"?e*D:e*D+(s+r)/2,x=i==="W"?t*D+(s+r)/2:t*D;f.translate(p,u+(o+a)/2,x);let m=f.attributes.position,g=f.attributes.uv;for(let _=0;_<m.count;_++){let y=i==="W"?m.getZ(_)-t*D:m.getX(_)-e*D;g.setXY(_,y/D,(m.getY(_)-u)/so)}return new Se(f,l)}function qu(i,e,t,n,s){let r=$u(e,t,n)%3,o=(h,d)=>s==="inner"||Dc(n,h,d)?fe.wall("inner",r%2):fe.wall(s,r),a=o(e,t),l=i==="W"?o(e-1,t):o(e,t-1),c=fe.trim();return i==="W"?[a,l,c,c,c,c]:[c,c,c,c,a,l]}var k2=i=>Sa?i.style==="vault"?"vault":Rc(i.style)?"outer":"inner":"base";function Ju(i,e,t,n,s,r){if(Sa&&s.type!=="barrier"){let d=Vu(i,e,t,n,s,r,{wallBox:at,isIndoor:Dc,THICK:nn,PANEL_H:so});if(s.type==="door"){let f=Math.min(2.1,r?.8:so);ur.add(Zu(i,e,t,n,(D-.92)/2,(D+.92)/2,f,k2(s)))}return Yn(d,i==="W"?sn.wallW:sn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new Me,a=s.type,l=s.style,c=r?.8:so,h=nn/2;if(a==="wall"||a==="door"||a==="window"){let d=qu(i,e,t,n,l==="concrete"?"hab":l);if(a==="wall"||a==="window"&&r)o.add(at(i,e,t,n,-h,D+h,0,c,d));else if(a==="door"&&s.gate){let{startOpen:u,endOpen:f,heavy:p,left:x,right:m,post:g}=z2(i,e,t,n,s),_=Math.min(s.gate.height-n*ht,c),y=U2(n,s,r);u||o.add(at(i,e,t,n,-h,0,0,c,d)),f||o.add(at(i,e,t,n,D,D+h,0,c,d)),c>_+.01&&o.add(at(i,e,t,n,u?0:-.001,f?D:D+.001,_,c,d));let v=p?fe.yellow():fe.orange(),T=Array(6).fill(v);u||o.add(at(i,e,t,n,0,g,0,y,T,nn+.08)),f||o.add(at(i,e,t,n,D-g,D,0,y,T,nn+.08)),c>_+.01&&o.add(at(i,e,t,n,x-.001,m+.001,_,_+.12,T,nn+.08)),n===0&&o.add(at(i,e,t,n,x,m,0,.03,Array(6).fill(fe.darkSteel()),nn+.14)),ur.add(O2(i,e,t,n,x,m,y,p,s.gate.height))}else if(a==="door"){let f=Math.min(2.1,c),p=(D-.92)/2,x=(D+.92)/2;o.add(at(i,e,t,n,-h,p,0,c,d)),o.add(at(i,e,t,n,x,D+h,0,c,d)),c>f+.01&&o.add(at(i,e,t,n,p,x,f,c,d));let m=[fe.orange(),fe.orange(),fe.orange(),fe.orange(),fe.orange(),fe.orange()];if(o.add(at(i,e,t,n,p-.06,p,0,f,m,nn+.05)),o.add(at(i,e,t,n,x,x+.06,0,f,m,nn+.05)),c>f+.01&&o.add(at(i,e,t,n,p-.06,x+.06,f,f+.07,m,nn+.05)),o.add(at(i,e,t,n,p,x,0,.03,[fe.darkSteel(),fe.darkSteel(),fe.darkSteel(),fe.darkSteel(),fe.darkSteel(),fe.darkSteel()],nn+.1)),ur.add(Zu(i,e,t,n,p,x,f)),l!=="inner"&&!r){let _=(Dc(n,e,t)?-1:1)*(nn/2+.06),y=D/2,v=i==="W"?Ue(.12,.07,.3,fe.lightOn(),e*D+_,n*ht+2.3,t*D+y):Ue(.3,.07,.12,fe.lightOn(),e*D+y,n*ht+2.3,t*D+_);o.add(v)}}else{let x=(D-.82)/2,m=(D+.82)/2;o.add(at(i,e,t,n,-h,x,0,c,d)),o.add(at(i,e,t,n,m,D+h,0,c,d)),o.add(at(i,e,t,n,x,m,0,.95,d)),o.add(at(i,e,t,n,x,m,1.9,c,d));let g=Array(6).fill(fe.trim());o.add(at(i,e,t,n,x,m,.95-.05,.95,g,nn+.06)),o.add(at(i,e,t,n,x,m,1.9,1.9+.05,g,nn+.04)),o.add(at(i,e,t,n,x,x+.04,.95,1.9,g,nn+.03)),o.add(at(i,e,t,n,m-.04,m,.95,1.9,g,nn+.03)),o.add(at(i,e,t,n,x+.04,m-.04,.95,1.9,Array(6).fill(fe.glass()),.03))}}else if(a==="rail"){let d=Array(6).fill(fe.yellow());for(let u of[0,D])o.add(at(i,e,t,n,u-.03,u+.03,0,1.05,d,.06));o.add(at(i,e,t,n,0,D,1,1.06,d,.05)),o.add(at(i,e,t,n,0,D,.52,.56,d,.04)),o.add(at(i,e,t,n,0,D,0,.1,Array(6).fill(fe.darkSteel()),.02))}else if(a==="parapet"){let d=qu(i,e,t,n,l);o.add(at(i,e,t,n,-h-.02,D+h+.02,-.02,.5,d,.22)),o.add(at(i,e,t,n,-h-.04,D+h+.04,.5,.56,Array(6).fill(fe.steel()),.28))}else if(a==="barrier"){let d=new en;d.moveTo(-.3,0),d.lineTo(.3,0),d.lineTo(.3,.08),d.lineTo(.1,.3),d.lineTo(.08,.82),d.lineTo(-.08,.82),d.lineTo(-.1,.3),d.lineTo(-.3,.08);let u=new xn(d,{depth:D-.05,bevelEnabled:!1});i==="W"?u.translate(0,0,.025):(u.rotateY(Math.PI/2),u.translate(.025,0,0));let f=new Se(u,fe.concrete());f.position.set(e*D,n*ht,t*D),i==="N"&&f.position.set(e*D,n*ht,t*D),o.add(f);let p=i==="W"?Ue(.17,.06,D-.1,fe.orange(),e*D,n*ht+.62,t*D+D/2):Ue(D-.1,.06,.17,fe.orange(),e*D+D/2,n*ht+.62,t*D);o.add(p)}return Yn(o,i==="W"?sn.wallW:sn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var ur=new Me;function Zu(i,e,t,n,s,r,o,a="base"){if(a!=="base"){let p=Wu(i,e,t,n,s,r,o,a,{wallBox:at});return p.userData.door={orient:i,col:e,row:t,level:n},Yn(p,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let l=new Me,c=Array(6).fill(fe.wall("cabin",0)),h=o-.01;l.add(at(i,e,t,n,s-.02,r+.02,.01,h,c,.06));let d=Array(6).fill(fe.orange()),u=Array(6).fill(fe.darkSteel()),f=Array(6).fill(fe.glass());return h>1.1&&l.add(at(i,e,t,n,s,r,.98,1.06,d,.075)),h>1.9&&(l.add(at(i,e,t,n,s+.36,s+.56,1.3,1.85,u,.075)),l.add(at(i,e,t,n,s+.38,s+.54,1.32,1.83,f,.08))),l.add(at(i,e,t,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),u,.085)),l.userData.door={orient:i,col:e,row:t,level:n},Yn(l,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function U2(i,e,t){return t?Math.min(e.gate.height-i*ht,.8):e.gate.height>(i+1)*ht?ht:Math.min(e.gate.height-i*ht,so)}function z2(i,e,t,n,s){let r=d=>!!(d&&d.gate&&d.gate.group===s.gate.group),o=i==="W"?Un.wallW[n]:Un.wallN[n],a=r(i==="W"?(o[t-1]||[])[e]:o[t][e-1]),l=r(i==="W"?(o[t+1]||[])[e]:o[t][e+1]),c=.1,h=s.gate.kind==="gate";return{startOpen:a,endOpen:l,heavy:h,post:c,left:a?0:c,right:l?D:D-c,signature:`gate:${s.gate.kind}:${s.gate.height}:${a}:${l}`}}function O2(i,e,t,n,s,r,o,a,l=o){let c=new Me,h=new Me,d=n*ht+o;h.position.y=d,h.userData.rollUp={bottom:n*ht,top:d,gateHeight:l};let u=new Me;u.position.y=-d,h.add(u),c.add(h);let f=o-.01,p=Array(6).fill(a?fe.wall("hab",1):fe.wall("cabin",0)),x=Array(6).fill(fe.darkSteel());u.add(at(i,e,t,n,s-.005,r+.005,.01,f,p,.07));let m=Math.max(3,Math.round(f/.5));for(let g=1;g<m;g++){let _=.01+(f-.01)*g/m;u.add(at(i,e,t,n,s,r,_-.015,_+.015,x,.085))}if(a&&f>.6&&n===0){let _=Array(6).fill(fe.yellow()),y=Array(6).fill(fe.darkSteel());for(let v=0;v<4;v++){let T=s+(r-s)*v/4,C=s+(r-s)*(v+1)/4;u.add(at(i,e,t,n,T,C,.04,.3,(v+e+t)%2?_:y,.08))}}return c.userData.door={orient:i,col:e,row:t,level:n,rollUp:!0},Yn(c,i==="W"?sn.doorW:sn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function Ku(i,e,t,n){let s=new Me,r=i*D+D/2,o=e*D+D/2,a=t*ht;if(n===Ut.deck)s.add(Ue(D,.06,D,fe.grating(),r,a-.03,o)),s.add(Ue(.12,.22,D,fe.orange(),i*D+.06,a-.17,o)),s.add(Ue(D,.18,.1,fe.orange(),r,a-.15,e*D+.05));else{let l=Sa&&Un.floorStyle?Un.floorStyle[t][e][i]:null,c=l?Gu(l):n===Ut.roof?fe.roof():fe.interiorFloor(),h=l?ce.slabEdge():fe.slabEdge(),d=l?ce.ceiling():fe.ceiling(),u=Ue(D,Nc,D,[h,h,c,d,h,h],r,a-Nc/2,o);s.add(u)}return Yn(s,sn.floor,t,{biasCol:-1e-4,biasRow:-1e-4})}function ju(i){let e=new Me,t=12,n=i.count*D,s=ht,r=i.level*ht,o=i.col*D+(i.dirCol<0?D:0),a=i.row*D+(i.dirRow<0?D:0),l=Tn(i.dirCol,0,i.dirRow),c=Tn(-i.dirRow,0,i.dirCol),h=i.dirCol!==0?Tn(0,0,i.row*D+D/2):Tn(i.col*D+D/2,0,0),d=D*.86,u=(x,m,g)=>{let _=Tn(o,r+m,a).addScaledVector(l,x).addScaledVector(c,g);return i.dirCol!==0?_.z=h.z+g:_.x=h.x+g,_},f=i.style==="classic",p=f?Xu():null;for(let x=0;x<t;x++){let m=x/t*n,g=(x+1)/t*n,_=(x+1)/t*s,y=u((m+g)/2,0,0),v=g-m;if(f){let T=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Ue(...T,p.body,y.x,r+_/2,y.z));let C=i.dirCol!==0?[v+.02,.035,d]:[d,.035,v+.02];e.add(Ue(...C,p.tread,y.x,r+_+.017,y.z))}else if(i.style==="hab"){let T=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Ue(...T,fe.slabEdge(),y.x,r+_/2,y.z));let C=i.dirCol!==0?[v,.03,d]:[d,.03,v];e.add(Ue(...C,fe.darkSteel(),y.x,r+_+.015,y.z));let P=i.dirCol!==0?[.04,.035,d]:[d,.035,.04],z=u(m+.02,0,0);e.add(Ue(...P,fe.yellow(),z.x,r+_+.017,z.z))}else{let T=i.dirCol!==0?[v*.9,.04,d]:[d,.04,v*.9];e.add(Ue(...T,fe.grating(),y.x,r+_-.02,y.z))}}for(let x of[-d/2-.04,d/2+.04]){i.style!=="hab"&&e.add(D2(u(0,0,x),u(n,s,x),.09,fe.orange()));let m=u(.05,.95,x),g=u(n,s+.95,x);if(!((i.style==="hab"||f)&&x<0)){if(e.add(dr(m,g,f?.03:.025,f?p.handrail:fe.yellow())),f){for(let _=.1;_<n;_+=.2)e.add(dr(u(_,_/n*s,x),u(_,_/n*s+.93,x),.009,p.rail));continue}for(let _=0;_<=i.count;_++){let y=Math.min(n-.05,Math.max(.05,_*D));e.add(dr(u(y,y/n*s,x),u(y,y/n*s+.95,x),.022,fe.yellow()))}}}return Yn(e,sn.floor,i.level)}function F2(i,e){let t=new Me,n=i.level*ht,s=Math.min(n+i.height,e);if(s<=n+.05)return t;let r=nn/2+.1,o=a=>i.side==="W"?[Tn(i.col*D+r,n,i.row*D+D/2+a),Tn(i.col*D+r,s,i.row*D+D/2+a)]:[Tn(i.col*D+D/2+a,n,i.row*D+r),Tn(i.col*D+D/2+a,s,i.row*D+r)];for(let a of[-.22,.22]){let[l,c]=o(a);t.add(dr(l,c,.025,fe.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[l]=o(-.22),[c]=o(.22);l.y=c.y=a,t.add(dr(l,c,.016,fe.steel()))}return Yn(t,sn.floor,i.level,{auto:!0})}function H2(i){return Tn(i.col*D,i.level*ht,i.row*D)}var B2=new xt().makeTranslation(D*It,0,0).multiply(new xt().makeRotationY(-Math.PI/2));function kc(i,e){if(i.source){let h=kc({...i.source,layer:i.layer},e);if(!h)return h;let d=new Me;d.matrixAutoUpdate=!1;for(let u=0;u<i.turns;u++)d.matrix.premultiply(B2);return d.add(h),d.updateMatrixWorld(!0),d}let t=new Me,n=H2(i),s=i.cols*D,r=i.rows*D,o=s/2,a=r/2,l=ft($u(i.col,i.row,i.level)%1e5+7),c=h=>(t.add(h),h);if(Sa){let h=Yu(i);if(h)return t.add(h),t.position.copy(n),Yn(t,sn.object,i.level)}if(Pu.has(i.kind))return t.add(Iu(i)),t.position.copy(n),Yn(t,sn.object,i.level);if(ku.has(i.kind))return t.add(Uu(i)),t.position.copy(n),Yn(t,sn.object,i.level);switch(i.kind){case"console":{c(Ue(1,.75,.6,fe.trim(),o,.375,a-.15));let h=c(Ue(1,.05,.5,fe.screen(Math.floor(l()*3)),o,.85,a-.05));h.rotation.x=-.6,c(Ue(1,.5,.08,fe.darkSteel(),o,1.1,a-.42));break}case"locker":c(Ue(.9,1.9,.5,fe.wall("cabin",0),o,.95,a-.3)),c(Ue(.02,1.7,.02,fe.darkSteel(),o,.95,a-.04));break;case"cabinet":c(Ue(.9,1.2,.6,fe.trim(),o,.6,a)),c(Ue(.7,.08,.02,fe.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])c(Ue(s-.2,.08,r-.3,fe.trim(),o,h,a)),c(Ue(s-.3,.12,r-.4,qt("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,d]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])c(Ue(.05,1.6,.05,fe.steel(),h,.8,d));break;case"labTable":c(Ue(s-.2,.06,r-.3,fe.white(),o,.9,a));for(let h of[.2,s-.2])c(Ue(.06,.9,r-.4,fe.trim(),h,.45,a));c(Ue(.5,.35,.4,fe.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)c(Sn(.03,.03,.22,qt("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":c(Ue(s-.3,.05,.7,fe.white(),o,.75,a-.1)),c(Ue(s-.4,.7,.05,fe.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])c(Ue(.55,.35,.04,fe.screen(Math.floor(l()*3)+1),h,1.05,a-.3)),c(Ue(.06,.2,.06,fe.darkSteel(),h,.85,a-.3));break;case"rack":c(Ue(.7,2,.9,fe.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)c(Ue(.02,.02,.02,qt("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+l()*.6));break;case"crate":{let h=1+(l()<.45?1:0),d=l()<.5?fe.wall("cabin",2):qt("crateGrey",{color:10132630,roughness:.55,metalness:.2}),u=0;for(let f=0;f<h;f++){let p=f?.65:.95,x=f?.5:.75,m=(l()-.5)*.4,g=new Me;g.add(Ue(p,x,p*.8,d,0,x/2,0));for(let _ of[-1,1])g.add(Ue(p+.02,.08,.06,fe.orange(),0,x*.5,_*p*.3));g.add(Ue(p+.02,.04,p*.82,fe.trim(),0,x-.02,0)),g.position.set(o+(l()-.5)*.1,u,a+(l()-.5)*.1),g.rotation.y=m,c(g),u+=x}break}case"barrels":for(let h=0;h<3;h++){let d=[3104394,9058844,5923400][h];c(Sn(.29,.29,.9,qt("barrel"+h,{color:d,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":c(Ue(s-.2,.9,r-.25,fe.white(),o,.45,a));for(let h=0;h<i.cols;h++)c(Sn(.38,.38,.05,fe.darkSteel(),.62+h*D,.92,a,20)).scale.set(1,1,1);break;case"antenna":c(Ue(.5,.15,.5,fe.trim(),o,.07,a)),c(Sn(.05,.07,3.6,fe.steel(),o,1.8,a));for(let h of[2.2,3])c(Ue(.9,.04,.04,fe.steel(),o,h,a));c(Ue(.06,.06,.06,qt("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let d=c(Ue(s-.3,.05,r/2-.15,qt("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));d.rotation.x=-.45,c(Ue(.06,.6,.06,fe.steel(),o,.3,h*r/2+r/4))}break}case"dish":c(Sn(.08,.12,.8,fe.steel(),o,.4,a));{let h=c(new Se(new Ln(.6,20,10,0,Math.PI*2,0,.9),fe.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=kn("dishMat",()=>new Xe({color:14211798,roughness:.4,side:dn}))}break;case"pylon":{let h=ht-.24;c(Ue(.32,h,.32,fe.orange(),o,h/2,a)),c(Ue(.6,.06,.6,fe.darkSteel(),o,.03,a)),c(Ue(.5,.12,.5,fe.orange(),o,h-.06,a));break}case"searchlight":c(Ue(.5,.3,.5,fe.trim(),o,.15,a)),c(Ue(.12,.5,.12,fe.darkSteel(),o,.55,a));{let h=c(Sn(.24,.3,.45,fe.darkSteel(),o,.95,a));h.rotation.x=1.1;let d=c(Sn(.22,.22,.03,fe.lightOn(),o,1.02,a+.2));d.rotation.x=1.1}break;case"container":{let h=fe.container(i.color),d=c(Ue(s-.15,2.5,r-.15,[h,h,fe.container(i.color),fe.trim(),h,h],o,1.25,a));for(let u of[.12,s-.12])for(let f of[.12,r-.12])for(let p of[.1,2.4])c(Ue(.18,.2,.18,fe.darkSteel(),u,p,f));for(let u of[o-.35,o+.35])c(Ue(.04,2.3,.04,fe.steel(),u,1.25,r-.06));break}case"truck":{let h=xu();h.position.set(o,0,(r-gu.length)/2),c(h);break}case"rover":{let h=fe.white();c(Ue(s-.4,.6,r-.3,h,o,.95,a)),c(Ue(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),c(Ue(s-.6,.5,.05,fe.glass(),o,1.7,a+r/2-.33));for(let d of[-1,1])c(Ue(.05,.4,1,fe.glass(),o+d*(s/2-.24),1.7,a+r/2-1));c(Ue(s-.4,.06,r-.3,fe.orange(),o,1.27,a)),c(Ue(s-.6,.12,1.6,fe.trim(),o,1.31,a-.6));for(let d of[-1,1])for(let u of[.55,r/2,r-.55]){let f=c(Sn(.42,.42,.34,fe.rubber(),o+d*(s/2-.2),.42,u,18));f.rotation.z=Math.PI/2;let p=c(Sn(.18,.18,.36,fe.steel(),o+d*(s/2-.2),.42,u,10));p.rotation.z=Math.PI/2}c(Sn(.02,.02,1.2,fe.steel(),o-.6,2.4,a+r/2-1.3)),c(Ue(.25,.12,.08,fe.lightOn(),o-.6,1,r-.12)),c(Ue(.25,.12,.08,fe.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let u of[.6,r-.6])c(Ue(s-.5,.6,.25,fe.darkSteel(),o,.3,u));let h=c(Sn(1,1,r-.3,fe.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let d=c(Sn(1.02,1.02,.25,fe.orange(),o,1.3,a,28));d.rotation.x=Math.PI/2;for(let u of[.15,r-.15]){let f=c(new Se(new Ln(1,24,12),fe.white()));f.position.set(o,1.3,u),f.scale.set(1,1,.25)}c(dr(Tn(o+.6,.3,r-.4),Tn(o+.6,2.2,r-.4),.06,fe.steel()));break}case"generator":c(Ue(s-.3,1.4,r-.4,qt("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)c(Ue(s-.6,.04,.02,fe.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])c(Sn(.08,.08,.9,fe.darkSteel(),h,1.8,a-.3));c(Ue(s-.2,.08,r-.3,fe.yellow(),o,1.42,a));break;case"lamp":c(Ue(.4,.15,.4,fe.concrete(),o,.07,a)),c(Sn(.06,.08,4.2,fe.darkSteel(),o,2.1,a)),c(Ue(.7,.08,.1,fe.darkSteel(),o+.3,4.15,a)),c(Ue(.36,.1,.24,fe.trim(),o+.6,4.1,a)),c(Ue(.3,.02,.2,fe.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*D*.55,d=xc(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),u=c(new Se(d,fe.rock()));u.position.set(o,h*.18,a),u.rotation.y=l()*6;break}case"tiltrotor":{let h=yu();i.layer&&[...h.children].forEach(d=>{d.name!==i.layer&&h.remove(d)}),h.rotation.y=-Math.PI/2,h.position.set(8*D-.006,0,2*D+.006),c(h);break}case"car":{let h=Ma[i.type]||Ma.suv,d=new Me,u=_u({type:i.type,color:i.color});u.position.z=-h.length/2,d.add(u),d.position.set(o,0,a),i.cols>i.rows?d.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(d.rotation.y=Math.PI),c(d);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,d=i.bottom||0,u=i.variant||0,f=i.concrete?fe.concrete():fe.baseRock(u),p=i.concrete?fe.concrete():fe.rockCut(u),x=c(Ue(D+.014,h-d,D+.014,[f,f,p,f,f,f],o-.01,(h+d)/2,a-.01));x.userData.noShadowReceive=!0;let m=x.geometry.attributes.position,g=x.geometry.attributes.uv,_=x.geometry.attributes.normal;for(let y=0;y<m.count;y++){let v=i.col*D+o+m.getX(y),T=(h+d)/2+m.getY(y),C=i.row*D+a+m.getZ(y);Math.abs(_.getY(y))>.5?g.setXY(y,v/8,C/8):Math.abs(_.getX(y))>.5?g.setXY(y,C/8,T/8):g.setXY(y,v/8,T/8)}break}case"liftPlatform":{c(Ue(s-.04,.03,r-.04,fe.darkSteel(),o,.06,a));for(let u=2.5;u<s-.1;u+=2.5)c(Ue(.03,.035,r-.3,fe.rubber(),u,.062,a));for(let u=2.5;u<r-.1;u+=2.5)c(Ue(s-.3,.035,.03,fe.rubber(),o,.062,u));let h=.5,d=.22;for(let u=0;u<s-1e-6;u+=h){let f=Math.round(u/h)%2?fe.rubber():fe.yellow(),p=Math.min(h,s-u);c(Ue(p,.04,d,f,u+p/2,.065,d/2+.03)),c(Ue(p,.04,d,f,u+p/2,.065,r-d/2-.03))}for(let u=d+.03;u<r-d-.03-1e-6;u+=h){let f=Math.round(u/h)%2?fe.yellow():fe.rubber(),p=Math.min(h,r-d-.03-u);c(Ue(d,.04,p,f,d/2+.03,.065,u+p/2)),c(Ue(d,.04,p,f,s-d/2-.03,.065,u+p/2))}break}case"paint":c(Ue(.1,.012,r-.12,fe.paint(),.06,.006,a));break;case"ladder":return F2(i,(e+1)*ht+.95);case"towerLeg":return null;default:c(Ue(s*.8,.8,r*.8,fe.trim(),o,.4,a))}return t.position.copy(n),Yn(t,sn.object,i.level)}var l_=_i+4,c_=Un.concrete,h_={tracks:[[[5.5*D,15.5*D],[7*D,13*D],[8.5*D,12.2*D],[12*D,12.4*D],[16*D,13.2*D],[21*D,12.5*D],[24*D,12*D]],[[9*D,16.5*D],[9.5*D,20*D],[10*D,24*D]]],lines:[{from:[1.6*D,11.2*D],to:[12.3*D,11.2*D]},{from:[12.3*D,1.6*D],to:[12.3*D,11.2*D]},{from:[14.5*D,3.3*D],to:[14.5*D,12.5*D]},{from:[14.5*D,12.5*D],to:[20.5*D,12.5*D]}],hazards:[[5.6*D,10.15*D,7.4*D,10.45*D],[11.15*D,5.6*D,11.45*D,7.4*D],[16.6*D,12.05*D,18.4*D,12.35*D]],pads:[[4.6*D,19*D,3.2*D]],stains:[[8.5*D,14*D,1.4],[13.5*D,2.5*D,1],[17*D,7*D,1.2],[4*D,18*D,.8],[21.5*D,7.8*D,.9]]};function Qu(){return ur}function ef(){return ur=new Me,ur}var G2={1:"#d8a420",2:"#7fb2d8",3:"#9fd27f",4:"#e0705a",5:"#5fd0ff",6:"#ffb347",7:"#c49be8",8:"#b8b8b8",0:"#808080"};rn.domElement.style.display="block";rn.domElement.style.outline="none";rn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));rn.shadowMap.autoUpdate=!1;rn.setSize(window.innerWidth,window.innerHeight);var Ta=_i/2+2;Object.assign(_n.shadow.camera,{left:-Ta,right:Ta,top:Ta,bottom:-Ta,near:1,far:140});_n.shadow.camera.updateProjectionMatrix();_n.shadow.mapSize.set(4096,4096);var V2=gs.grid[0],W2=gs.grid[1],X2=new L((qr+V2/2)*D,0,(Zr+W2/2)*D),Bi=new hn(40,window.innerWidth/window.innerHeight,.3,400),Vt=new ga(Bi,rn.domElement);Vt.enableDamping=!0;Vt.dampingFactor=.12;Vt.screenSpacePanning=!1;Vt.minDistance=4;Vt.maxDistance=140;Vt.maxPolarAngle=Ui.degToRad(86);Vt.keyPanSpeed=14;Vt.listenToKeyEvents(window);function mr(i,e,t){let n=Ui.degToRad(i),s=Ui.degToRad(e);Vt.target.copy(X2).add(new L(0,1.5,0)),Bi.position.set(Vt.target.x+Math.cos(s)*Math.sin(n)*t,Vt.target.y+Math.sin(s)*t,Vt.target.z+Math.cos(s)*Math.cos(n)*t),Vt.update()}window.base3dLook=(i,e,t,n,s)=>{let r=Ui.degToRad(t),o=Ui.degToRad(n);Vt.target.set((qr+i)*D,.9,(Zr+e)*D),Bi.position.set(Vt.target.x+Math.cos(o)*Math.sin(r)*s,Vt.target.y+Math.sin(o)*s,Vt.target.z+Math.cos(o)*Math.cos(r)*s),Vt.update(),Vi()};var Fc=()=>mr(45,40,78);function Y2(i,e){let t=new Me;ef();let n=new Se(new Li(_i+40,_i+40),new Xe({color:2367774,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(_i/2,-.03,_i/2),n.receiveShadow=!0,t.add(n);let s=[];for(let a=0;a<It;a++)for(let l=0;l<It;l++)Un.floor[0][a][l]===Ut.interior&&s.push([l,a]);let r=new Qs(new vt(D+.004,.04,D+.004),fe.interiorFloor(),s.length),o=new xt;s.forEach(([a,l],c)=>r.setMatrixAt(c,o.makeTranslation((a+.5)*D,.025,(l+.5)*D))),r.receiveShadow=!0,t.add(r);for(let a=0;a<=i;a++){let l=e&&a===i;for(let c=0;c<=It;c++)for(let h=0;h<=It;h++){for(let d of["W","N"]){let u=(d==="W"?Un.wallW:Un.wallN)[a][c][h];if(!u||!u.type||u.type==="hull")continue;let f=u.type==="wall"||u.type==="door"||u.type==="window";t.add(Ju(d,h,c,a,u,f&&l))}if(a>0&&c<It&&h<It){let d=Un.floor[a][c][h];(d===Ut.interior||d===Ut.roof||d===Ut.deck)&&t.add(Ku(h,c,a,d))}}}for(let a of Un.stairs)a.level<=i&&t.add(ju(a));for(let a of Un.objects){if(a.level>i)continue;let l=kc(a,i);l&&t.add(l)}return t.add(Qu()),yc(t,.28),t}var Ms=null,Hi=Nn-1,tf=!1;function Hc(){Ms&&(Fi.remove(Ms),pc(Ms));let i=performance.now(),e=Y2(Hi,tf);Ms=nu(e),pc(e),Fi.add(Ms);let t={};Ms.children.forEach(n=>{let s=n.isInstancedMesh?"instanced":Array.isArray(n.material)?"multi":n.geometry.groups.length>1?"groups":n.morphTargetInfluences?"morph":"merged";t[s]=(t[s]||0)+1}),window.base3dStats={buildMs:Math.round(performance.now()-i),meshes:Ms.children.length,reasons:t},rn.shadowMap.needsUpdate=!0,q2(),Vi()}var Aa=document.createElement("div");Aa.id="labels";document.body.appendChild(Aa);var Uc=gs.rooms.filter(i=>i.module!==0||i.width*i.height>=24).map(i=>{let e=document.createElement("div");e.className="room-label",e.textContent=i.name,e.style.borderColor=G2[i.module]||"#808080",Aa.appendChild(e);let t=new L((qr+i.x+i.width/2)*D,0,(Zr+i.y+i.height/2)*D),n=i.x+i.width/2,s=i.y+i.height/2,r=gs.rooms.filter(o=>(o.floor||0)>(i.floor||0)&&n>o.x&&n<o.x+o.width&&s>o.y&&s<o.y+o.height).map(o=>o.floor);return{element:e,room:i,position:t,baseLevel:i.floor||0,coveredAt:r.length?Math.min(...r):1/0}}),zc=!0;function q2(){for(let i of Uc){let e=Math.min(Hi,i.baseLevel+(i.room.levels||1)-1);i.position.y=Math.max(i.baseLevel,Math.min(e,Hi))*ht+.4,i.hidden=i.baseLevel>Hi||i.coveredAt<=Hi}}var pr=new L;function Z2(){if(Aa.style.display=zc?"block":"none",!zc)return;let i=window.innerWidth,e=window.innerHeight;for(let n of Uc)n.distance=Bi.position.distanceTo(n.position);let t=[];for(let n of[...Uc].sort((s,r)=>s.distance-r.distance)){pr.copy(n.position).project(Bi);let s=!n.hidden&&n.distance<120&&pr.z<1&&Math.abs(pr.x)<1.1&&Math.abs(pr.y)<1.1,r=(pr.x+1)/2*i,o=(1-pr.y)/2*e;if(s){n.width||(n.width=n.element.offsetWidth||n.room.name.length*7+16);let a=[r-n.width/2,o-10,r+n.width/2,o+10];s=!t.some(l=>a[0]<l[2]&&a[2]>l[0]&&a[1]<l[3]&&a[3]>l[1]),s&&t.push(a)}n.element.style.display=s?"block":"none",s&&(n.element.style.transform=`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -50%)`,n.element.style.opacity=n.distance>85?"0.6":"1")}}var Gi=document.createElement("div");Gi.id="panel";Gi.innerHTML=`
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
  <button id="back" class="back">\u041D\u0410\u0417\u0410\u0414 \u041D\u0410 \u0411\u0410\u0417\u0423</button>`;document.body.appendChild(Gi);var Bc=Gi.querySelector("#levels");for(let i=0;i<Nn;i++){let e=document.createElement("button");e.textContent=String(i+1),e.dataset.level=String(i),Bc.appendChild(e)}function nf(){Bc.querySelectorAll("button").forEach(i=>i.classList.toggle("on",Number(i.dataset.level)<=Hi))}Bc.addEventListener("click",i=>{let e=i.target.dataset&&i.target.dataset.level;e!==void 0&&sf(Number(e))});function sf(i){i!==Hi&&(Hi=i,nf(),Hc())}Gi.querySelector("#cut").addEventListener("change",i=>{tf=i.target.checked,Hc()});Gi.querySelector("#names").addEventListener("change",i=>{zc=i.target.checked,Vi()});Gi.querySelector(".views").addEventListener("click",i=>{let e=i.target.dataset&&i.target.dataset.view;e&&(e==="home"?Fc():e==="top"?mr(0,85,75):e==="n"?mr(180,30,60):e==="s"?mr(0,30,60):e==="w"?mr(-90,30,60):e==="e"&&mr(90,30,60),Vi())});function rf(){window.BASE3D_BACK?location.href=window.BASE3D_BACK:history.back()}Gi.querySelector("#back").addEventListener("click",rf);window.addEventListener("keydown",i=>{i.key==="Escape"?rf():i.key>="1"&&i.key<=String(Nn)?sf(Number(i.key)-1):(i.key==="r"||i.key==="R"||i.key==="\u043A"||i.key==="\u041A")&&(Fc(),Vi())});var Oc=!1;function Vi(){Oc||(Oc=!0,requestAnimationFrame($2))}function $2(){Oc=!1;let i=Vt.update();rn.render(Fi,Bi),Z2(),i&&Vi()}Vt.addEventListener("change",Vi);window.addEventListener("resize",()=>{Bi.aspect=window.innerWidth/window.innerHeight,Bi.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight),Vi()});nf();Fc();Hc();{let i=document.getElementById("loading");i&&i.remove()}window.base3dReady=!0;})();
