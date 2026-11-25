// Собрано tools/render/build_map3d.sh из tools/render/map3d.js (three.js 0.162.0). Не править вручную.
(()=>{var jc="162";var of=0,Fl=1,af=2;var yd=1,Qc=2,pi=3,Li=0,cn=1,$t=2,Ci=0,Os=1,ac=2,Ol=3,Hl=4,cf=5,Ki=100,lf=101,hf=102,Bl=103,Gl=104,df=200,uf=201,ff=202,pf=203,cc=204,lc=205,mf=206,gf=207,xf=208,yf=209,_f=210,vf=211,Mf=212,Ef=213,bf=214,wf=0,Sf=1,Tf=2,Ao=3,Af=4,Rf=5,Cf=6,Pf=7,_d=0,If=1,Lf=2,Pi=0,Nf=1,Df=2,Uf=3,el=4,kf=5,zf=6,Ff=7;var vd=300,Gs=301,Vs=302,hc=303,dc=304,na=306,ns=1e3,Qt=1001,uc=1002,jt=1003,Vl=1004;var dr=1005;var _n=1006,ba=1007;var Qi=1008;var Ii=1009,Of=1010,Hf=1011,tl=1012,Md=1013,Ri=1014,si=1015,wr=1016,Ed=1017,bd=1018,es=1020,Bf=1021,Zn=1023,Gf=1024,Vf=1025,ts=1026,Ws=1027,wd=1028,Sd=1029,Wf=1030,Td=1031,Ad=1033,wa=33776,Sa=33777,Ta=33778,Aa=33779,Wl=35840,Xl=35841,Yl=35842,ql=35843,Rd=36196,Zl=37492,$l=37496,Jl=37808,Kl=37809,jl=37810,Ql=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,ch=37820,lh=37821,Ra=36492,hh=36494,dh=36495,Xf=36283,uh=36284,fh=36285,ph=36286;var Ro=2300,Co=2301,Ca=2302,mh=2400,gh=2401,xh=2402;var Yf=3200,Cd=3201,Pd=0,qf=1,Ai="",an="srgb",Fi="srgb-linear",nl="display-p3",ia="display-p3-linear",Po="linear",bt="srgb",Io="rec709",Lo="p3";var ys=7680;var yh=519,Zf=512,$f=513,Jf=514,Id=515,Kf=516,jf=517,Qf=518,e0=519,_h=35044;var vh="300 es",fc=1035,mi=2e3,No=2001,Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,pc=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function t0(i,e){return(i%e+e)%e}function Ia(i,e,t){return(1-t)*i+t*e}function Mh(i){return(i&i-1)===0&&i!==0}function mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],_=s[1],y=s[4],M=s[7],C=s[2],P=s[5],I=s[8];return r[0]=o*x+a*_+c*C,r[3]=o*p+a*y+c*P,r[6]=o*g+a*M+c*I,r[1]=l*x+h*_+d*C,r[4]=l*p+h*y+d*P,r[7]=l*g+h*M+d*I,r[2]=u*x+f*_+m*C,r[5]=u*p+f*y+m*P,r[8]=u*g+f*M+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},La=new tt;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){let i=Do("canvas");return i.style.display="block",i}var Eh={};function i0(i){i in Eh||(Eh[i]=!0,console.warn(i))}var bh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[Fi]:{transfer:Po,primaries:Io,toReference:i=>i,fromReference:i=>i},[an]:{transfer:bt,primaries:Io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ia]:{transfer:Po,primaries:Lo,toReference:i=>i.applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh)},[nl]:{transfer:bt,primaries:Lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh).convertLinearToSRGB()}},s0=new Set([Fi,ia]),mt={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!s0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=eo[e].toReference,s=eo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return eo[i].primaries},getTransfer:function(i){return i===Ai?Po:eo[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,Uo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Do("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Do("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,Mn=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=_n,o=Qi,a=Zn,c=Ii,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=js(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=vd;Mn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(f+1)/2,C=(g+1)/2,P=(h+u)/4,I=(d+x)/4,k=(m+p)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=I/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=k/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=I/r,s=k/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zo=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xc=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let p=1-a,g=c*u+l*f+h*m+d*x,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let C=Math.sqrt(y),P=Math.atan2(C,g*_);p=Math.sin(p*P)/C,a=Math.sin(a*P)/C}let M=a*_;if(c=c*p+u*M,l=l*p+f*M,h=h*p+m*M,d=d*p+x*M,p===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-a*f,e[t+2]=l*m+h*f+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new L,Sh=new ri,Jn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),no.subVectors(this.max,fr),vs.subVectors(e.a,fr),Ms.subVectors(e.b,fr),Es.subVectors(e.c,fr),Mi.subVectors(Ms,vs),Ei.subVectors(Es,Ms),Wi.subVectors(vs,Es);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Wi.y,Wi.x,0];return!ka(t,vs,Ms,Es,no)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,vs,Ms,Es,no))?!1:(io.crossVectors(Mi,Ei),t=[io.x,io.y,io.z],ka(t,vs,Ms,Es,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,to=new Jn,vs=new L,Ms=new L,Es=new L,Mi=new L,Ei=new L,Wi=new L,fr=new L,no=new L,io=new L,Xi=new L;function ka(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var a0=new Jn,pr=new L,za=new L,is=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(za)),this.expandByPoint(pr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new L,Fa=new L,so=new L,bi=new L,Oa=new L,ro=new L,Ha=new L,Fo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fa.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Fa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=bi.dot(this.direction),c=-bi.dot(so),l=bi.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fa).addScaledVector(so,u),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){Oa.subVectors(t,e),ro.subVectors(n,e),Ha.crossVectors(Oa,ro);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let c=a*this.direction.dot(ro.crossVectors(bi,ro));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(bi));if(l<0||c+l>o)return null;let h=-a*bi.dot(Ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,x=l*d;t[0]=u+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,x=l*d;t[0]=u-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),wi.crossVectors(n,Tn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),wi.crossVectors(n,Tn)),wi.normalize(),oo.crossVectors(Tn,wi),s[0]=wi.x,s[4]=oo.x,s[8]=Tn.x,s[1]=wi.y,s[5]=oo.y,s[9]=Tn.y,s[2]=wi.z,s[6]=oo.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],y=n[7],M=n[11],C=n[15],P=s[0],I=s[4],k=s[8],A=s[12],v=s[1],T=s[5],le=s[9],$=s[13],N=s[2],z=s[6],B=s[10],Y=s[14],D=s[3],b=s[7],O=s[11],W=s[15];return r[0]=o*P+a*v+c*N+l*D,r[4]=o*I+a*T+c*z+l*b,r[8]=o*k+a*le+c*B+l*O,r[12]=o*A+a*$+c*Y+l*W,r[1]=h*P+d*v+u*N+f*D,r[5]=h*I+d*T+u*z+f*b,r[9]=h*k+d*le+u*B+f*O,r[13]=h*A+d*$+u*Y+f*W,r[2]=m*P+x*v+p*N+g*D,r[6]=m*I+x*T+p*z+g*b,r[10]=m*k+x*le+p*B+g*O,r[14]=m*A+x*$+p*Y+g*W,r[3]=_*P+y*v+M*N+C*D,r[7]=_*I+y*T+M*z+C*b,r[11]=_*k+y*le+M*B+C*O,r[15]=_*A+y*$+M*Y+C*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15];return m*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+p*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+g*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=d*p*l-x*u*l+x*c*f-a*p*f-d*c*g+a*u*g,y=m*u*l-h*p*l-m*c*f+o*p*f+h*c*g-o*u*g,M=h*x*l-m*d*l+m*a*f-o*x*f-h*a*g+o*d*g,C=m*d*c-h*x*c-m*a*u+o*x*u+h*a*p-o*d*p,P=t*_+n*y+s*M+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=_*I,e[1]=(x*u*r-d*p*r-x*s*f+n*p*f+d*s*g-n*u*g)*I,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*g+n*c*g)*I,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*I,e[4]=y*I,e[5]=(h*p*r-m*u*r+m*s*f-t*p*f-h*s*g+t*u*g)*I,e[6]=(m*c*r-o*p*r-m*s*l+t*p*l+o*s*g-t*c*g)*I,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*I,e[8]=M*I,e[9]=(m*d*r-h*x*r-m*n*f+t*x*f+h*n*g-t*d*g)*I,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*g+t*a*g)*I,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*I,e[12]=C*I,e[13]=(h*x*s-m*d*s+m*n*u-t*x*u-h*n*p+t*d*p)*I,e[14]=(m*a*s-o*x*s-m*n*c+t*x*c+o*n*p-t*a*p)*I,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,_=c*l,y=c*h,M=c*d,C=n.x,P=n.y,I=n.z;return s[0]=(1-(x+g))*C,s[1]=(f+M)*C,s[2]=(m-y)*C,s[3]=0,s[4]=(f-M)*P,s[5]=(1-(u+g))*P,s[6]=(p+_)*P,s[7]=0,s[8]=(m+y)*I,s[9]=(p-_)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let l=1/r,h=1/o,d=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,m;if(a===mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi){let c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*l,f=(n+s)*h,m,x;if(a===mi)m=(o+r)*d,x=-2*d;else if(a===No)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new L,Xn=new lt,c0=new L(0,0,0),l0=new L(1,1,1),wi=new L,oo=new L,Tn=new L,Th=new lt,Ah=new ri,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h0=0,Rh=new L,ws=new ri,di=new lt,ao=new L,mr=new L,d0=new L,u0=new ri,Ch=new L(1,0,0),Ph=new L(0,1,0),Ih=new L(0,0,1),f0={type:"added"},p0={type:"removed"},Ba={type:"childadded",child:null},Ga={type:"childremoved",child:null},pn=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Un,n=new ri,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new tt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(mr,ao,this.up):di.lookAt(ao,mr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(di),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f0),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};pn.DEFAULT_UP=new L(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new L,ui=new L,Va=new L,fi=new L,Ss=new L,Ts=new L,Lh=new L,Wa=new L,Xa=new L,Ya=new L,Us=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),ui.subVectors(n,t),Va.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(ui),c=Yn.dot(Va),l=ui.dot(ui),h=ui.dot(Va),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),ui.subVectors(e,t),Yn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Yn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),Ts.subVectors(r,n),Wa.subVectors(e,n);let c=Ss.dot(Wa),l=Ts.dot(Wa);if(c<=0&&l<=0)return t.copy(n);Xa.subVectors(e,s);let h=Ss.dot(Xa),d=Ts.dot(Xa);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ss,o);Ya.subVectors(e,r);let f=Ss.dot(Ya),m=Ts.dot(Ya);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ts,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Lh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Lh,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},co={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=t0(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return mt.fromWorkingColorSpace(on.copy(this),e),Math.round(Zt(on.r*255,0,255))*65536+Math.round(Zt(on.g*255,0,255))*256+Math.round(Zt(on.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=an){mt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(co);let n=Ia(Si.h,co.h,t),s=Ia(Si.s,co.s,t),r=Ia(Si.l,co.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new $e;$e.NAMES=Nd;var m0=0,ss=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,lo=new xe,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return i0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var Oo=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ho=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},g0=0,Dn=new lt,Za=new pn,As=new L,An=new Jn,gr=new Jn,qt=new L,Pt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Ho:Oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(An.min,gr.min),An.expandByPoint(qt),qt.addVectors(An.max,gr.max),An.expandByPoint(qt)):(An.expandByPoint(gr.min),An.expandByPoint(gr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(As.fromBufferAttribute(e,l),qt.add(As)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new L,c[k]=new L;let l=new L,h=new L,d=new L,u=new xe,f=new xe,m=new xe,x=new L,p=new L;function g(k,A,v){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,k),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),a[k].add(x),a[A].add(x),a[v].add(x),c[k].add(p),c[A].add(p),c[v].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,A=_.length;k<A;++k){let v=_[k],T=v.start,le=v.count;for(let $=T,N=T+le;$<N;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}let y=new L,M=new L,C=new L,P=new L;function I(k){C.fromBufferAttribute(s,k),P.copy(C);let A=a[k];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(P,A);let T=M.dot(c[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,T)}for(let k=0,A=_.length;k<A;++k){let v=_[k],T=v.start,le=v.count;for(let $=T,N=T+le;$<N;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new Ht(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new lt,Yi=new Fo,ho=new is,Dh=new L,Rs=new L,Cs=new L,Ps=new L,$a=new L,uo=new L,fo=new xe,po=new xe,mo=new xe,Uh=new L,kh=new L,zh=new L,go=new L,xo=new L,Ee=class extends pn{constructor(e=new Pt,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&($a.fromBufferAttribute(d,e),o?uo.addScaledVector($a,h):uo.addScaledVector($a.sub(t),h))}t.add(uo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(ho.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ho,Dh)===null||Yi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){let P=a.getX(M),I=a.getX(M+1),k=a.getX(M+2);s=yo(this,g,e,n,l,h,d,P,I,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=yo(this,o,e,n,l,h,d,_,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){let P=M,I=M+1,k=M+2;s=yo(this,g,e,n,l,h,d,P,I,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=p,y=p+1,M=p+2;s=yo(this,o,e,n,l,h,d,_,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function x0(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Li,a),c===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:i}}function yo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Rs),i.getVertexPosition(c,Cs),i.getVertexPosition(l,Ps);let h=x0(i,e,t,n,Rs,Cs,Ps,go);if(h){s&&(fo.fromBufferAttribute(s,a),po.fromBufferAttribute(s,c),mo.fromBufferAttribute(s,l),h.uv=Us.getInterpolation(go,Rs,Cs,Ps,fo,po,mo,new xe)),r&&(fo.fromBufferAttribute(r,a),po.fromBufferAttribute(r,c),mo.fromBufferAttribute(r,l),h.uv1=Us.getInterpolation(go,Rs,Cs,Ps,fo,po,mo,new xe)),o&&(Uh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,c),zh.fromBufferAttribute(o,l),h.normal=Us.getInterpolation(go,Rs,Cs,Ps,Uh,kh,zh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Us.getNormal(Rs,Cs,Ps,d.normal),h.face=d}return h}var gt=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function m(x,p,g,_,y,M,C,P,I,k,A){let v=M/I,T=C/k,le=M/2,$=C/2,N=P/2,z=I+1,B=k+1,Y=0,D=0,b=new L;for(let O=0;O<B;O++){let W=O*T-$;for(let oe=0;oe<z;oe++){let me=oe*v-le;b[x]=me*_,b[p]=W*y,b[g]=N,l.push(b.x,b.y,b.z),b[x]=0,b[p]=0,b[g]=P>0?1:-1,h.push(b.x,b.y,b.z),d.push(oe/I),d.push(1-O/k),Y+=1}}for(let O=0;O<k;O++)for(let W=0;W<I;W++){let oe=u+W+z*O,me=u+W+z*(O+1),G=u+(W+1)+z*(O+1),ue=u+(W+1)+z*O;c.push(oe,me,ue),c.push(me,G,ue),D+=6}a.addGroup(f,D,A),f+=D,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Xs(i[t]);for(let s in n)e[s]=n[s]}return e}function y0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){return i.getRenderTarget()===null?i.outputColorSpace:mt.workingColorSpace}var _0={clone:Xs,merge:fn},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new L,Fh=new xe,Oh=new xe,vn=class extends Bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,yc=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new vn(Is,Ls,e,t);r.layers=this.layers,this.add(r);let o=new vn(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new vn(Is,Ls,e,t);a.layers=this.layers,this.add(a);let c=new vn(Is,Ls,e,t);c.layers=this.layers,this.add(c);let l=new vn(Is,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Go=class extends Mn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_c=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new Ee(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=_n),new yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ja=new L,E0=new L,b0=new tt,qn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ja.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||b0.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new is,_o=new L,Tr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],p=s[11],g=s[12],_=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,u-l,p-f,M-g).normalize(),n[1].setComponents(c+r,u+l,p+f,M+g).normalize(),n[2].setComponents(c+o,u+h,p+m,M+_).normalize(),n[3].setComponents(c-o,u-h,p-m,M-_).normalize(),n[4].setComponents(c-a,u-d,p-x,M-y).normalize(),t===mi)n[5].setComponents(c+a,u+d,p+x,M+y).normalize();else if(t===No)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let d=l.array,u=l.usage,f=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){let u=h.array,f=h._updateRange,m=h.updateRanges;if(i.bindBuffer(d,l),f.count===-1&&m.length===0&&i.bufferSubData(d,0,u),m.length!==0){for(let x=0,p=m.length;x<p;x++){let g=m[x];t?i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var Di=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<l;y++){let M=y*d-r;m.push(M,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let y=_+l*g,M=_+l*(g+1),C=_+1+l*(g+1),P=_+1+l*g;f.push(y,M,P),f.push(M,C,P)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`
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
}`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
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
}`,fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,yp=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,Om=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:S0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:N0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:Y0,color_vertex:q0,common:Z0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:ep,colorspace_fragment:tp,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:yp,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:dp,gradientmap_pars_fragment:up,lightmap_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:_p,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Ep,lights_physical_fragment:bp,lights_physical_pars_fragment:wp,lights_fragment_begin:Sp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Np,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:kp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Hp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:Yp,normal_vertex:qp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:dm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:Mm,uv_pars_vertex:Em,uv_vertex:bm,worldpos_vertex:wm,background_vert:Sm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Nm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:km,linedashed_vert:zm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Hm,meshlambert_vert:Bm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:Ym,meshphong_vert:qm,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:jm,points_vert:Qm,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ii={basic:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:fn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:fn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:fn([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:fn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:fn([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:fn([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:fn([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:fn([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var vo={r:0,b:0,g:0},Zi=new Un,rg=new lt;function og(i,e,t,n,s,r,o){let a=new $e(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(p,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,c):y&&y.isColor&&(x(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===na)?(h===void 0&&(h=new Ee(new gt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(g.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Zi)),h.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ee(new Di(2,2),new kn({name:"BackgroundMaterial",uniforms:Xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,g){p.getRGB(vo,Dd(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),c=g,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:m}}function ag(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function d(N,z,B,Y,D){let b=!1;if(o){let O=x(Y,B,z);l!==O&&(l=O,f(l.object)),b=g(N,Y,B,D),b&&_(N,Y,B,D)}else{let O=z.wireframe===!0;(l.geometry!==Y.id||l.program!==B.id||l.wireframe!==O)&&(l.geometry=Y.id,l.program=B.id,l.wireframe=O,b=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(b||h)&&(h=!1,k(N,z,B,Y),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function m(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,z,B){let Y=B.wireframe===!0,D=a[N.id];D===void 0&&(D={},a[N.id]=D);let b=D[z.id];b===void 0&&(b={},D[z.id]=b);let O=b[Y];return O===void 0&&(O=p(u()),b[Y]=O),O}function p(N){let z=[],B=[],Y=[];for(let D=0;D<s;D++)z[D]=0,B[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:Y,object:N,attributes:{},index:null}}function g(N,z,B,Y){let D=l.attributes,b=z.attributes,O=0,W=B.getAttributes();for(let oe in W)if(W[oe].location>=0){let G=D[oe],ue=b[oe];if(ue===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),G===void 0||G.attribute!==ue||ue&&G.data!==ue.data)return!0;O++}return l.attributesNum!==O||l.index!==Y}function _(N,z,B,Y){let D={},b=z.attributes,O=0,W=B.getAttributes();for(let oe in W)if(W[oe].location>=0){let G=b[oe];G===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));let ue={};ue.attribute=G,G&&G.data&&(ue.data=G.data),D[oe]=ue,O++}l.attributes=D,l.attributesNum=O,l.index=Y}function y(){let N=l.newAttributes;for(let z=0,B=N.length;z<B;z++)N[z]=0}function M(N){C(N,0)}function C(N,z){let B=l.newAttributes,Y=l.enabledAttributes,D=l.attributeDivisors;B[N]=1,Y[N]===0&&(i.enableVertexAttribArray(N),Y[N]=1),D[N]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),D[N]=z)}function P(){let N=l.newAttributes,z=l.enabledAttributes;for(let B=0,Y=z.length;B<Y;B++)z[B]!==N[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function I(N,z,B,Y,D,b,O){O===!0?i.vertexAttribIPointer(N,z,B,D,b):i.vertexAttribPointer(N,z,B,Y,D,b)}function k(N,z,B,Y){if(n.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let D=Y.attributes,b=B.getAttributes(),O=z.defaultAttributeValues;for(let W in b){let oe=b[W];if(oe.location>=0){let me=D[W];if(me===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),me!==void 0){let G=me.normalized,ue=me.itemSize,Me=t.get(me);if(Me===void 0)continue;let Te=Me.buffer,F=Me.type,q=Me.bytesPerElement,pe=n.isWebGL2===!0&&(F===i.INT||F===i.UNSIGNED_INT||me.gpuType===Md);if(me.isInterleavedBufferAttribute){let fe=me.data,S=fe.stride,te=me.offset;if(fe.isInstancedInterleavedBuffer){for(let K=0;K<oe.locationSize;K++)C(oe.location+K,fe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let K=0;K<oe.locationSize;K++)M(oe.location+K);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let K=0;K<oe.locationSize;K++)I(oe.location+K,ue/oe.locationSize,F,G,S*q,(te+ue/oe.locationSize*K)*q,pe)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<oe.locationSize;fe++)C(oe.location+fe,me.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<oe.locationSize;fe++)M(oe.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let fe=0;fe<oe.locationSize;fe++)I(oe.location+fe,ue/oe.locationSize,F,G,ue*q,ue/oe.locationSize*fe*q,pe)}}else if(O!==void 0){let G=O[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(oe.location,G);break;case 3:i.vertexAttrib3fv(oe.location,G);break;case 4:i.vertexAttrib4fv(oe.location,G);break;default:i.vertexAttrib1fv(oe.location,G)}}}}P()}function A(){le();for(let N in a){let z=a[N];for(let B in z){let Y=z[B];for(let D in Y)m(Y[D].object),delete Y[D];delete z[B]}delete a[N]}}function v(N){if(a[N.id]===void 0)return;let z=a[N.id];for(let B in z){let Y=z[B];for(let D in Y)m(Y[D].object),delete Y[D];delete z[B]}delete a[N.id]}function T(N){for(let z in a){let B=a[z];if(B[N.id]===void 0)continue;let Y=B[N.id];for(let D in Y)m(Y[D].object),delete Y[D];delete B[N.id]}}function le(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:le,resetDefaultState:$,dispose:A,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:M,disableUnusedAttributes:P}}function cg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(h[m],d[m]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function lg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,M=o||e.has("OES_texture_float"),C=y&&M,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:P}}function hg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qn,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let _=r?0:n,y=_*4,M=g.clippingState||null;c.value=M,M=h(m,u,y,f);for(let C=0;C!==y;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function dg(i){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=Gs:a===dc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hc||a===dc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new _c(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ys=class extends Bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Hh=[.125,.215,.35,.446,.526,.582],ji=20,Ka=new Ys,Bh=new $e,ja=null,Qa=0,ec=0,Ji=(1+Math.sqrt(5))/2,Ns=1/Ji,Gh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ji,Ns),new L(0,Ji,-Ns),new L(Ns,0,Ji),new L(-Ns,0,Ji),new L(Ji,Ns,0),new L(-Ji,Ns,0)],qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Qa,ec),e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:wr,format:Zn,colorSpace:Fi,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=fg(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,s){let a=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Pi,h.autoClear=!1;let f=new rs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new Ee(new gt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Bh),x=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let y=this._cubeSize;Mo(s,_*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Mo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ee(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);let g=[],_=0;for(let I=0;I<ji;++I){let k=I/x,A=Math.exp(-k*k/2);g.push(A),I===0?_+=A:I<p&&(_+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/_;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;let M=this._sizeLods[s],C=3*M*(s>y-ks?s-y+ks:0),P=4*(this._cubeSize-M);Mo(t,C,P,3*M,2*M),c.setRenderTarget(t),c.render(d,Ka)}};function ug(i){let e=[],t=[],n=[],s=i,r=i-ks+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=Hh[o-i+ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*f),y=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let P=0;P<f;P++){let I=P%3*2/3-1,k=P>2?0:-1,A=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];_.set(A,x*m*P),y.set(u,p*m*P);let v=[P,P,P,P,P,P];M.set(v,g*m*P)}let C=new Pt;C.setAttribute("position",new Ht(_,x)),C.setAttribute("uv",new Ht(y,p)),C.setAttribute("faceIndex",new Ht(M,g)),e.push(C),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){let n=new $n(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fg(i,e,t){let n=new Float32Array(ji),s=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Wh(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Xh(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function pg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===hc||c===dc,h=c===Gs||c===Vs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qs(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new qs(i));let u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let p=0,g=x.length;p<g;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,M=_.length;y<M;y+=3){let C=_[y+0],P=_[y+1],I=_[y+2];u.push(C,P,P,I,I,C)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,M=_.length/3-1;y<M;y+=3){let C=y+0,P=y+1,I=y+2;u.push(C,P,P,I,I,C)}}else return;let p=new(Ld(u)?Ho:Oo)(u,1);p.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function xg(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){i.drawElements(r,m,a,f*c),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let p,g;if(s)p=i,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,m,a,f*c,x),t.update(m,r,x)}function u(f,m,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<x;g++)this.render(f[g]/c,m[g]);else{p.multiDrawElementsWEBGL(r,m,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=m[_];t.update(g,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,e){return i[0]-e[0]}function vg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Mg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==m){let le=function(){v.dispose(),r.delete(h),h.removeEventListener("dispose",le)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],P=0;p===!0&&(P=1),g===!0&&(P=2),_===!0&&(P=3);let I=h.attributes.position.count*P,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let A=new Float32Array(I*k*4*m),v=new zo(A,I,k,m);v.type=si,v.needsUpdate=!0;let T=P*4;for(let $=0;$<m;$++){let N=y[$],z=M[$],B=C[$],Y=I*k*4*$;for(let D=0;D<N.count;D++){let b=D*T;p===!0&&(o.fromBufferAttribute(N,D),A[Y+b+0]=o.x,A[Y+b+1]=o.y,A[Y+b+2]=o.z,A[Y+b+3]=0),g===!0&&(o.fromBufferAttribute(z,D),A[Y+b+4]=o.x,A[Y+b+5]=o.y,A[Y+b+6]=o.z,A[Y+b+7]=0),_===!0&&(o.fromBufferAttribute(B,D),A[Y+b+8]=o.x,A[Y+b+9]=o.y,A[Y+b+10]=o.z,A[Y+b+11]=B.itemSize===4?o.w:1)}}x={count:m,texture:v,size:new xe(I,k)},r.set(h,x),h.addEventListener("dispose",le)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let g=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];n[h.id]=m}for(let y=0;y<f;y++){let M=m[y];M[0]=y,M[1]=u[y]}m.sort(vg);for(let y=0;y<8;y++)y<f&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(_g);let x=h.morphAttributes.position,p=h.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let M=a[y],C=M[0],P=M[1];C!==Number.MAX_SAFE_INTEGER&&P?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),p&&h.getAttribute("morphNormal"+y)!==p[C]&&h.setAttribute("morphNormal"+y,p[C]),s[y]=P,g+=P):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Eg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Vo=class extends Mn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ri),n===void 0&&h===Ws&&(n=es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kd=new Mn,zd=new Vo(1,1);zd.compareFunction=Id;var Fd=new zo,Od=new xc,Hd=new Go,Yh=[],qh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Wt(t,n)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Wt(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Wt(t,n)}}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zd:kd;t.setTexture2D(e||r,s)}function Og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fd,s)}function Gg(i){switch(i){case 5126:return bg;case 35664:return wg;case 35665:return Sg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Ng;case 5125:return Dg;case 36294:return Ug;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Vg(i,e){i.uniform1fv(this.addr,e)}function Wg(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Xg(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Yg(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function qg(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zg(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jg(i,e){i.uniform1iv(this.addr,e)}function Kg(i,e){i.uniform2iv(this.addr,e)}function jg(i,e){i.uniform3iv(this.addr,e)}function Qg(i,e){i.uniform4iv(this.addr,e)}function e1(i,e){i.uniform1uiv(this.addr,e)}function t1(i,e){i.uniform2uiv(this.addr,e)}function n1(i,e){i.uniform3uiv(this.addr,e)}function i1(i,e){i.uniform4uiv(this.addr,e)}function s1(i,e,t){let n=this.cache,s=e.length,r=sa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kd,r[o])}function r1(i,e,t){let n=this.cache,s=e.length,r=sa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function o1(i,e,t){let n=this.cache,s=e.length,r=sa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hd,r[o])}function a1(i,e,t){let n=this.cache,s=e.length,r=sa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function c1(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return Zg;case 35676:return $g;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Kh(i,e){i.seq.push(e),i.map[e.id]=e}function l1(i,e,t){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),o=tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kh(t,l===void 0?new vc(a,i,e):new Mc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ec(a),Kh(t,d)),t=d}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);l1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var h1=37297,d1=0;function u1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function f1(i){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i),n;switch(e===t?n="":e===Lo&&t===Io?n="LinearDisplayP3ToLinearSRGB":e===Io&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case ia:return[n,"LinearTransferOETF"];case an:case nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+u1(i.getShaderSource(e),o)}else return s}function p1(i,e){let t=f1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function m1(i,e){let t;switch(e){case Nf:t="Linear";break;case Df:t="Reinhard";break;case Uf:t="OptimizedCineon";break;case el:t="ACESFilmic";break;case zf:t="AgX";break;case Ff:t="Neutral";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function x1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function y1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(v1,E1)}var M1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E1(i,e){let t=et[e];if(t===void 0){let n=M1.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(b1,w1)}function w1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function S1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function T1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function C1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=S1(t),l=T1(t),h=A1(t),d=R1(t),u=C1(t),f=t.isWebGL2?"":g1(t),m=x1(t),x=y1(r),p=s.createProgram(),g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(g=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[f,id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?et.tonemapping_pars_fragment:"",t.toneMapping!==Pi?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=bc(o),o=ed(o,t),o=td(o,t),a=bc(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=y+g+o,C=y+_+a,P=jh(s,s.VERTEX_SHADER,M),I=jh(s,s.FRAGMENT_SHADER,C);s.attachShader(p,P),s.attachShader(p,I),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(le){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(I).trim(),B=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,P,I);else{let D=Qh(s,P,"vertex"),b=Qh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+$+`
`+D+`
`+b)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(N===""||z==="")&&(Y=!1);Y&&(le.diagnostics={runnable:B,programLog:$,vertexShader:{log:N,prefix:g},fragmentShader:{log:z,prefix:_}})}s.deleteShader(P),s.deleteShader(I),A=new Bs(s,p),v=_1(s,p)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let v;this.getAttributes=function(){return v===void 0&&k(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,h1)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=I,this}var I1=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}};function L1(i,e,t,n,s,r,o){let a=new Sr,c=new wc,l=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,T,le,$,N){let z=$.fog,B=N.geometry,Y=v.isMeshStandardMaterial?$.environment:null,D=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),b=D&&D.mapping===na?D.image.height:null,O=x[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let W=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=W!==void 0?W.length:0,me=0;B.morphAttributes.position!==void 0&&(me=1),B.morphAttributes.normal!==void 0&&(me=2),B.morphAttributes.color!==void 0&&(me=3);let G,ue,Me,Te;if(O){let Mt=ii[O];G=Mt.vertexShader,ue=Mt.fragmentShader}else G=v.vertexShader,ue=v.fragmentShader,c.update(v),Me=c.getVertexShaderID(v),Te=c.getFragmentShaderID(v);let F=i.getRenderTarget(),q=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,fe=!!v.map,S=!!v.matcap,te=!!D,K=!!v.aoMap,H=!!v.lightMap,Z=!!v.bumpMap,ne=!!v.normalMap,ve=!!v.displacementMap,be=!!v.emissiveMap,he=!!v.metalnessMap,w=!!v.roughnessMap,E=v.anisotropy>0,j=v.clearcoat>0,ie=v.iridescence>0,ye=v.sheen>0,_e=v.transmission>0,Ye=E&&!!v.anisotropyMap,We=j&&!!v.clearcoatMap,Re=j&&!!v.clearcoatNormalMap,Ie=j&&!!v.clearcoatRoughnessMap,Ze=ie&&!!v.iridescenceMap,we=ie&&!!v.iridescenceThicknessMap,Ft=ye&&!!v.sheenColorMap,ot=ye&&!!v.sheenRoughnessMap,Ge=!!v.specularMap,Fe=!!v.specularColorMap,He=!!v.specularIntensityMap,ct=_e&&!!v.transmissionMap,Ke=_e&&!!v.thicknessMap,Tt=!!v.gradientMap,X=!!v.alphaMap,Le=v.alphaTest>0,se=!!v.alphaHash,Ae=!!v.extensions,De=Pi;v.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(De=i.toneMapping);let at={isWebGL2:d,shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:ue,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:pe,instancing:q,instancingColor:q&&N.instanceColor!==null,instancingMorph:q&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Fi,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:S,envMap:te,envMapMode:te&&D.mapping,envMapCubeUVHeight:b,aoMap:K,lightMap:H,bumpMap:Z,normalMap:ne,displacementMap:f&&ve,emissiveMap:be,normalMapObjectSpace:ne&&v.normalMapType===qf,normalMapTangentSpace:ne&&v.normalMapType===Pd,metalnessMap:he,roughnessMap:w,anisotropy:E,anisotropyMap:Ye,clearcoat:j,clearcoatMap:We,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:we,sheen:ye,sheenColorMap:Ft,sheenRoughnessMap:ot,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:He,transmission:_e,transmissionMap:ct,thicknessMap:Ke,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:X,alphaTest:Le,alphaHash:se,combine:v.combine,mapUv:fe&&p(v.map.channel),aoMapUv:K&&p(v.aoMap.channel),lightMapUv:H&&p(v.lightMap.channel),bumpMapUv:Z&&p(v.bumpMap.channel),normalMapUv:ne&&p(v.normalMap.channel),displacementMapUv:ve&&p(v.displacementMap.channel),emissiveMapUv:be&&p(v.emissiveMap.channel),metalnessMapUv:he&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:Ye&&p(v.anisotropyMap.channel),clearcoatMapUv:We&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Re&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ot&&p(v.sheenRoughnessMap.channel),specularMapUv:Ge&&p(v.specularMap.channel),specularColorMapUv:Fe&&p(v.specularColorMap.channel),specularIntensityMapUv:He&&p(v.specularIntensityMap.channel),transmissionMapUv:ct&&p(v.transmissionMap.channel),thicknessMapUv:Ke&&p(v.thicknessMap.channel),alphaMapUv:X&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ne||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(fe||X),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&le.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$t,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ae&&v.extensions.derivatives===!0,extensionFragDepth:Ae&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function _(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let le in v.defines)T.push(le),T.push(v.defines[le]);return v.isRawShaderMaterial===!1&&(y(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let T=x[v.type],le;if(T){let $=ii[T];le=_0.clone($.uniforms)}else le=v.uniforms;return le}function P(v,T){let le;for(let $=0,N=h.length;$<N;$++){let z=h[$];if(z.cacheKey===T){le=z,++le.usedTimes;break}}return le===void 0&&(le=new P1(i,T,v,r),h.push(le)),le}function I(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function k(v){c.remove(v)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:C,acquireProgram:P,releaseProgram:I,releaseShaderCache:k,programs:h,dispose:A}}function N1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function D1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,m,x,p){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function a(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function c(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function l(d,u){t.length>1&&t.sort(d||D1),n.length>1&&n.sort(u||sd),s.length>1&&s.sort(u||sd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function U1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rd,i.set(n,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function z1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var F1=0;function O1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H1(i,e){let t=new k1,n=z1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new lt,a=new lt;function c(h,d){let u=0,f=0,m=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let x=0,p=0,g=0,_=0,y=0,M=0,C=0,P=0,I=0,k=0,A=0;h.sort(O1);let v=d===!0?Math.PI:1;for(let le=0,$=h.length;le<$;le++){let N=h[le],z=N.color,B=N.intensity,Y=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=z.r*B*v,f+=z.g*B*v,m+=z.b*B*v;else if(N.isLightProbe){for(let b=0;b<9;b++)s.probe[b].addScaledVector(N.sh.coefficients[b],B);A++}else if(N.isDirectionalLight){let b=t.get(N);if(b.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){let O=N.shadow,W=n.get(N);W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,s.directionalShadow[x]=W,s.directionalShadowMap[x]=D,s.directionalShadowMatrix[x]=N.shadow.matrix,M++}s.directional[x]=b,x++}else if(N.isSpotLight){let b=t.get(N);b.position.setFromMatrixPosition(N.matrixWorld),b.color.copy(z).multiplyScalar(B*v),b.distance=Y,b.coneCos=Math.cos(N.angle),b.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),b.decay=N.decay,s.spot[g]=b;let O=N.shadow;if(N.map&&(s.spotLightMap[I]=N.map,I++,O.updateMatrices(N),N.castShadow&&k++),s.spotLightMatrix[g]=O.matrix,N.castShadow){let W=n.get(N);W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,s.spotShadow[g]=W,s.spotShadowMap[g]=D,P++}g++}else if(N.isRectAreaLight){let b=t.get(N);b.color.copy(z).multiplyScalar(B),b.halfWidth.set(N.width*.5,0,0),b.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=b,_++}else if(N.isPointLight){let b=t.get(N);if(b.color.copy(N.color).multiplyScalar(N.intensity*v),b.distance=N.distance,b.decay=N.decay,N.castShadow){let O=N.shadow,W=n.get(N);W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,W.shadowCameraNear=O.camera.near,W.shadowCameraFar=O.camera.far,s.pointShadow[p]=W,s.pointShadowMap[p]=D,s.pointShadowMatrix[p]=N.shadow.matrix,C++}s.point[p]=b,p++}else if(N.isHemisphereLight){let b=t.get(N);b.skyColor.copy(N.color).multiplyScalar(B*v),b.groundColor.copy(N.groundColor).multiplyScalar(B*v),s.hemi[y]=b,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=m;let T=s.hash;(T.directionalLength!==x||T.pointLength!==p||T.spotLength!==g||T.rectAreaLength!==_||T.hemiLength!==y||T.numDirectionalShadows!==M||T.numPointShadows!==C||T.numSpotShadows!==P||T.numSpotMaps!==I||T.numLightProbes!==A)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=P+I-k,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=A,T.directionalLength=x,T.pointLength=p,T.spotLength=g,T.rectAreaLength=_,T.hemiLength=y,T.numDirectionalShadows=M,T.numPointShadows=C,T.numSpotShadows=P,T.numSpotMaps=I,T.numLightProbes=A,s.version=F1++)}function l(h,d){let u=0,f=0,m=0,x=0,p=0,g=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let M=h[_];if(M.isDirectionalLight){let C=s.directional[u];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),u++}else if(M.isSpotLight){let C=s.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:s}}function od(i,e){let t=new H1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new od(i,e),t.set(r,[c])):o>=a.length?(c=new od(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Wo=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
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
}`;function W1(i,e,t){let n=new Tr,s=new xe,r=new xe,o=new Ct,a=new Wo({depthPacking:Cd}),c=new Tc,l={},h=t.maxTextureSize,d={[Li]:cn,[cn]:Li,[$t]:$t},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Pt;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let g=this.type;this.render=function(P,I,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let A=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Ci),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let $=g!==pi&&this.type===pi,N=g===pi&&this.type!==pi;for(let z=0,B=P.length;z<B;z++){let Y=P[z],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let b=D.getFrameExtents();if(s.multiply(b),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/b.x),s.x=r.x*b.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/b.y),s.y=r.y*b.y,D.mapSize.y=r.y)),D.map===null||$===!0||N===!0){let W=this.type!==pi?{minFilter:jt,magFilter:jt}:{};D.map!==null&&D.map.dispose(),D.map=new $n(s.x,s.y,W),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let O=D.getViewportCount();for(let W=0;W<O;W++){let oe=D.getViewport(W);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),le.viewport(o),D.updateMatrices(Y,W),n=D.getFrustum(),M(I,k,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===pi&&_(D,k),D.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(A,v,T)};function _(P,I){let k=e.update(x);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $n(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,k,u,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,k,f,x,null)}function y(P,I,k,A){let v=null,T=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)v=T;else if(v=k.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let le=v.uuid,$=I.uuid,N=l[le];N===void 0&&(N={},l[le]=N);let z=N[$];z===void 0&&(z=v.clone(),N[$]=z,I.addEventListener("dispose",C)),v=z}if(v.visible=I.visible,v.wireframe=I.wireframe,A===pi?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:d[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let le=i.properties.get(v);le.light=k}return v}function M(P,I,k,A,v){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===pi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);let $=e.update(P),N=P.material;if(Array.isArray(N)){let z=$.groups;for(let B=0,Y=z.length;B<Y;B++){let D=z[B],b=N[D.materialIndex];if(b&&b.visible){let O=y(P,b,A,v);P.onBeforeShadow(i,P,I,k,$,O,D),i.renderBufferDirect(k,null,$,O,P,D),P.onAfterShadow(i,P,I,k,$,O,D)}}}else if(N.visible){let z=y(P,N,A,v);P.onBeforeShadow(i,P,I,k,$,z,null),i.renderBufferDirect(k,null,$,z,P,null),P.onAfterShadow(i,P,I,k,$,z,null)}}let le=P.children;for(let $=0,N=le.length;$<N;$++)M(le[$],I,k,A,v)}function C(P){P.target.removeEventListener("dispose",C);for(let k in l){let A=l[k],v=P.target.uuid;v in A&&(A[v].dispose(),delete A[v])}}}function X1(i,e,t){let n=t.isWebGL2;function s(){let X=!1,Le=new Ct,se=null,Ae=new Ct(0,0,0,0);return{setMask:function(De){se!==De&&!X&&(i.colorMask(De,De,De,De),se=De)},setLocked:function(De){X=De},setClear:function(De,at,Mt,Kt,Ln){Ln===!0&&(De*=Kt,at*=Kt,Mt*=Kt),Le.set(De,at,Mt,Kt),Ae.equals(Le)===!1&&(i.clearColor(De,at,Mt,Kt),Ae.copy(Le))},reset:function(){X=!1,se=null,Ae.set(-1,0,0,0)}}}function r(){let X=!1,Le=null,se=null,Ae=null;return{setTest:function(De){De?q(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(De){Le!==De&&!X&&(i.depthMask(De),Le=De)},setFunc:function(De){if(se!==De){switch(De){case wf:i.depthFunc(i.NEVER);break;case Sf:i.depthFunc(i.ALWAYS);break;case Tf:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case Af:i.depthFunc(i.EQUAL);break;case Rf:i.depthFunc(i.GEQUAL);break;case Cf:i.depthFunc(i.GREATER);break;case Pf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=De}},setLocked:function(De){X=De},setClear:function(De){Ae!==De&&(i.clearDepth(De),Ae=De)},reset:function(){X=!1,Le=null,se=null,Ae=null}}}function o(){let X=!1,Le=null,se=null,Ae=null,De=null,at=null,Mt=null,Kt=null,Ln=null;return{setTest:function(Et){X||(Et?q(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!X&&(i.stencilMask(Et),Le=Et)},setFunc:function(Et,un,ni){(se!==Et||Ae!==un||De!==ni)&&(i.stencilFunc(Et,un,ni),se=Et,Ae=un,De=ni)},setOp:function(Et,un,ni){(at!==Et||Mt!==un||Kt!==ni)&&(i.stencilOp(Et,un,ni),at=Et,Mt=un,Kt=ni)},setLocked:function(Et){X=Et},setClear:function(Et){Ln!==Et&&(i.clearStencil(Et),Ln=Et)},reset:function(){X=!1,Le=null,se=null,Ae=null,De=null,at=null,Mt=null,Kt=null,Ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,u={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,M=null,C=null,P=null,I=null,k=null,A=new $e(0,0,0),v=0,T=!1,le=null,$=null,N=null,z=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,b=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=b>=1):O.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=b>=2);let W=null,oe={},me=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ue=new Ct().fromArray(me),Me=new Ct().fromArray(G);function Te(X,Le,se,Ae){let De=new Uint8Array(4),at=i.createTexture();i.bindTexture(X,at),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<se;Mt++)n&&(X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Le+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return at}let F={};F[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),q(i.DEPTH_TEST),c.setFunc(Ao),ve(!1),be(Fl),q(i.CULL_FACE),Z(Ci);function q(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function pe(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function fe(X,Le){return f[X]!==Le?(i.bindFramebuffer(X,Le),f[X]=Le,n&&(X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Le),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function S(X,Le){let se=x,Ae=!1;if(X){se=m.get(Le),se===void 0&&(se=[],m.set(Le,se));let De=X.textures;if(se.length!==De.length||se[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Mt=De.length;at<Mt;at++)se[at]=i.COLOR_ATTACHMENT0+at;se.length=De.length,Ae=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Ae=!0);if(Ae)if(t.isWebGL2)i.drawBuffers(se);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function te(X){return p!==X?(i.useProgram(X),p=X,!0):!1}let K={[Ki]:i.FUNC_ADD,[lf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};if(n)K[Bl]=i.MIN,K[Gl]=i.MAX;else{let X=e.get("EXT_blend_minmax");X!==null&&(K[Bl]=X.MIN_EXT,K[Gl]=X.MAX_EXT)}let H={[df]:i.ZERO,[uf]:i.ONE,[ff]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(X,Le,se,Ae,De,at,Mt,Kt,Ln,Et){if(X===Ci){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),X!==cf){if(X!==_||Et!==T){if((y!==Ki||P!==Ki)&&(i.blendEquation(i.FUNC_ADD),y=Ki,P=Ki),Et)switch(X){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}M=null,C=null,I=null,k=null,A.set(0,0,0),v=0,_=X,T=Et}return}De=De||Le,at=at||se,Mt=Mt||Ae,(Le!==y||De!==P)&&(i.blendEquationSeparate(K[Le],K[De]),y=Le,P=De),(se!==M||Ae!==C||at!==I||Mt!==k)&&(i.blendFuncSeparate(H[se],H[Ae],H[at],H[Mt]),M=se,C=Ae,I=at,k=Mt),(Kt.equals(A)===!1||Ln!==v)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Ln),A.copy(Kt),v=Ln),_=X,T=!1}function ne(X,Le){X.side===$t?pe(i.CULL_FACE):q(i.CULL_FACE);let se=X.side===cn;Le&&(se=!se),ve(se),X.blending===Os&&X.transparent===!1?Z(Ci):Z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);let Ae=X.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),w(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(X){le!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),le=X)}function be(X){X!==of?(q(i.CULL_FACE),X!==$&&(X===Fl?i.cullFace(i.BACK):X===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),$=X}function he(X){X!==N&&(D&&i.lineWidth(X),N=X)}function w(X,Le,se){X?(q(i.POLYGON_OFFSET_FILL),(z!==Le||B!==se)&&(i.polygonOffset(Le,se),z=Le,B=se)):pe(i.POLYGON_OFFSET_FILL)}function E(X){X?q(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function j(X){X===void 0&&(X=i.TEXTURE0+Y-1),W!==X&&(i.activeTexture(X),W=X)}function ie(X,Le,se){se===void 0&&(W===null?se=i.TEXTURE0+Y-1:se=W);let Ae=oe[se];Ae===void 0&&(Ae={type:void 0,texture:void 0},oe[se]=Ae),(Ae.type!==X||Ae.texture!==Le)&&(W!==se&&(i.activeTexture(se),W=se),i.bindTexture(X,Le||F[X]),Ae.type=X,Ae.texture=Le)}function ye(){let X=oe[W];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(X){ue.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ue.copy(X))}function He(X){Me.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Me.copy(X))}function ct(X,Le){let se=d.get(Le);se===void 0&&(se=new WeakMap,d.set(Le,se));let Ae=se.get(X);Ae===void 0&&(Ae=i.getUniformBlockIndex(Le,X.name),se.set(X,Ae))}function Ke(X,Le){let Ae=d.get(Le).get(X);h.get(Le)!==Ae&&(i.uniformBlockBinding(Le,Ae,X.__bindingPointIndex),h.set(Le,Ae))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,oe={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,M=null,C=null,P=null,I=null,k=null,A=new $e(0,0,0),v=0,T=!1,le=null,$=null,N=null,z=null,B=null,ue.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:q,disable:pe,bindFramebuffer:fe,drawBuffers:S,useProgram:te,setBlending:Z,setMaterial:ne,setFlipSided:ve,setCullFace:be,setLineWidth:he,setPolygonOffset:w,setScissorTest:E,activeTexture:j,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:_e,compressedTexImage3D:Ye,texImage2D:ot,texImage3D:Ge,updateUBOMapping:ct,uniformBlockBinding:Ke,texStorage2D:we,texStorage3D:Ft,texSubImage2D:We,texSubImage3D:Re,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ze,scissor:Fe,viewport:He,reset:Tt}}function Y1(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,d=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,E){return m?new OffscreenCanvas(w,E):Do("canvas")}function p(w,E,j,ie){let ye=1,_e=he(w);if((_e.width>ie||_e.height>ie)&&(ye=ie/Math.max(_e.width,_e.height)),ye<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Ye=E?mc:Math.floor,We=Ye(ye*_e.width),Re=Ye(ye*_e.height);u===void 0&&(u=x(We,Re));let Ie=j?x(We,Re):u;return Ie.width=We,Ie.height=Re,Ie.getContext("2d").drawImage(w,0,0,We,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+We+"x"+Re+")."),Ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),w;return w}function g(w){let E=he(w);return Mh(E.width)&&Mh(E.height)}function _(w){return a?!1:w.wrapS!==Qt||w.wrapT!==Qt||w.minFilter!==jt&&w.minFilter!==_n}function y(w,E){return w.generateMipmaps&&E&&w.minFilter!==jt&&w.minFilter!==_n}function M(w){i.generateMipmap(w)}function C(w,E,j,ie,ye=!1){if(a===!1)return E;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e=E;if(E===i.RED&&(j===i.FLOAT&&(_e=i.R32F),j===i.HALF_FLOAT&&(_e=i.R16F),j===i.UNSIGNED_BYTE&&(_e=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(_e=i.R8UI),j===i.UNSIGNED_SHORT&&(_e=i.R16UI),j===i.UNSIGNED_INT&&(_e=i.R32UI),j===i.BYTE&&(_e=i.R8I),j===i.SHORT&&(_e=i.R16I),j===i.INT&&(_e=i.R32I)),E===i.RG&&(j===i.FLOAT&&(_e=i.RG32F),j===i.HALF_FLOAT&&(_e=i.RG16F),j===i.UNSIGNED_BYTE&&(_e=i.RG8)),E===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(_e=i.RG8UI),j===i.UNSIGNED_SHORT&&(_e=i.RG16UI),j===i.UNSIGNED_INT&&(_e=i.RG32UI),j===i.BYTE&&(_e=i.RG8I),j===i.SHORT&&(_e=i.RG16I),j===i.INT&&(_e=i.RG32I)),E===i.RGBA){let Ye=ye?Po:mt.getTransfer(ie);j===i.FLOAT&&(_e=i.RGBA32F),j===i.HALF_FLOAT&&(_e=i.RGBA16F),j===i.UNSIGNED_BYTE&&(_e=Ye===bt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function P(w,E,j){return y(w,j)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function I(w){return w===jt||w===Vl||w===dr?i.NEAREST:i.LINEAR}function k(w){let E=w.target;E.removeEventListener("dispose",k),v(E),E.isVideoTexture&&d.delete(E)}function A(w){let E=w.target;E.removeEventListener("dispose",A),le(E)}function v(w){let E=n.get(w);if(E.__webglInit===void 0)return;let j=w.source,ie=f.get(j);if(ie){let ye=ie[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&T(w),Object.keys(ie).length===0&&f.delete(j)}n.remove(w)}function T(w){let E=n.get(w);i.deleteTexture(E.__webglTexture);let j=w.source,ie=f.get(j);delete ie[E.__cacheKey],o.memory.textures--}function le(w){let E=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ye=0;ye<E.__webglFramebuffer[ie].length;ye++)i.deleteFramebuffer(E.__webglFramebuffer[ie][ye]);else i.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[ie]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let j=w.textures;for(let ie=0,ye=j.length;ie<ye;ie++){let _e=n.get(j[ie]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(j[ie])}n.remove(w)}let $=0;function N(){$=0}function z(){let w=$;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),$+=1,w}function B(w){let E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Y(w,E){let j=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){let ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(j,w,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function D(w,E){let j=n.get(w);if(w.version>0&&j.__version!==w.version){Me(j,w,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function b(w,E){let j=n.get(w);if(w.version>0&&j.__version!==w.version){Me(j,w,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function O(w,E){let j=n.get(w);if(w.version>0&&j.__version!==w.version){Te(j,w,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let W={[ns]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},oe={[jt]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},me={[Zf]:i.NEVER,[e0]:i.ALWAYS,[$f]:i.LESS,[Id]:i.LEQUAL,[Jf]:i.EQUAL,[Qf]:i.GEQUAL,[Kf]:i.GREATER,[jf]:i.NOTEQUAL};function G(w,E,j){if(E.type===si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===ba||E.magFilter===dr||E.magFilter===Qi||E.minFilter===_n||E.minFilter===ba||E.minFilter===dr||E.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(i.texParameteri(w,i.TEXTURE_WRAP_S,W[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,W[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,W[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[E.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Qt||E.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,I(E.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==jt&&E.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==dr&&E.minFilter!==Qi||E.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ue(w,E){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",k));let ie=E.source,ye=f.get(ie);ye===void 0&&(ye={},f.set(ie,ye));let _e=B(E);if(_e!==w.__cacheKey){ye[_e]===void 0&&(ye[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ye[_e].usedTimes++;let Ye=ye[w.__cacheKey];Ye!==void 0&&(ye[w.__cacheKey].usedTimes--,Ye.usedTimes===0&&T(E)),w.__cacheKey=_e,w.__webglTexture=ye[_e].texture}return j}function Me(w,E,j){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);let ye=ue(w,E),_e=E.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+j);let Ye=n.get(_e);if(_e.version!==Ye.__version||ye===!0){t.activeTexture(i.TEXTURE0+j);let We=mt.getPrimaries(mt.workingColorSpace),Re=E.colorSpace===Ai?null:mt.getPrimaries(E.colorSpace),Ie=E.colorSpace===Ai||We===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ze=_(E)&&g(E.image)===!1,we=p(E.image,Ze,!1,s.maxTextureSize);we=be(E,we);let Ft=g(we)||a,ot=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type),Fe=C(E.internalFormat,ot,Ge,E.colorSpace,E.isVideoTexture);G(ie,E,Ft);let He,ct=E.mipmaps,Ke=a&&E.isVideoTexture!==!0&&Fe!==Rd,Tt=Ye.__version===void 0||ye===!0,X=_e.dataReady,Le=P(E,we,Ft);if(E.isDepthTexture)Fe=i.DEPTH_COMPONENT,a?E.type===si?Fe=i.DEPTH_COMPONENT32F:E.type===Ri?Fe=i.DEPTH_COMPONENT24:E.type===es?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:E.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ts&&Fe===i.DEPTH_COMPONENT&&E.type!==tl&&E.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ri,Ge=r.convert(E.type)),E.format===Ws&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,E.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=es,Ge=r.convert(E.type))),Tt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Fe,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,Fe,we.width,we.height,0,ot,Ge,null));else if(E.isDataTexture)if(ct.length>0&&Ft){Ke&&Tt&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,ct[0].width,ct[0].height);for(let se=0,Ae=ct.length;se<Ae;se++)He=ct[se],Ke?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,ot,Ge,He.data):t.texImage2D(i.TEXTURE_2D,se,Fe,He.width,He.height,0,ot,Ge,He.data);E.generateMipmaps=!1}else Ke?(Tt&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,we.width,we.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,ot,Ge,we.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,we.width,we.height,0,ot,Ge,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Fe,ct[0].width,ct[0].height,we.depth);for(let se=0,Ae=ct.length;se<Ae;se++)He=ct[se],E.format!==Zn?ot!==null?Ke?X&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,we.depth,ot,He.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Fe,He.width,He.height,we.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,we.depth,ot,Ge,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Fe,He.width,He.height,we.depth,0,ot,Ge,He.data)}else{Ke&&Tt&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,ct[0].width,ct[0].height);for(let se=0,Ae=ct.length;se<Ae;se++)He=ct[se],E.format!==Zn?ot!==null?Ke?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,ot,He.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Fe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,ot,Ge,He.data):t.texImage2D(i.TEXTURE_2D,se,Fe,He.width,He.height,0,ot,Ge,He.data)}else if(E.isDataArrayTexture)Ke?(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Fe,we.width,we.height,we.depth),X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ot,Ge,we.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,we.width,we.height,we.depth,0,ot,Ge,we.data);else if(E.isData3DTexture)Ke?(Tt&&t.texStorage3D(i.TEXTURE_3D,Le,Fe,we.width,we.height,we.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ot,Ge,we.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,we.width,we.height,we.depth,0,ot,Ge,we.data);else if(E.isFramebufferTexture){if(Tt)if(Ke)t.texStorage2D(i.TEXTURE_2D,Le,Fe,we.width,we.height);else{let se=we.width,Ae=we.height;for(let De=0;De<Le;De++)t.texImage2D(i.TEXTURE_2D,De,Fe,se,Ae,0,ot,Ge,null),se>>=1,Ae>>=1}}else if(ct.length>0&&Ft){if(Ke&&Tt){let se=he(ct[0]);t.texStorage2D(i.TEXTURE_2D,Le,Fe,se.width,se.height)}for(let se=0,Ae=ct.length;se<Ae;se++)He=ct[se],Ke?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ot,Ge,He):t.texImage2D(i.TEXTURE_2D,se,Fe,ot,Ge,He);E.generateMipmaps=!1}else if(Ke){if(Tt){let se=he(we);t.texStorage2D(i.TEXTURE_2D,Le,Fe,se.width,se.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Ge,we)}else t.texImage2D(i.TEXTURE_2D,0,Fe,ot,Ge,we);y(E,Ft)&&M(ie),Ye.__version=_e.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Te(w,E,j){if(E.image.length!==6)return;let ie=ue(w,E),ye=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+j);let _e=n.get(ye);if(ye.version!==_e.__version||ie===!0){t.activeTexture(i.TEXTURE0+j);let Ye=mt.getPrimaries(mt.workingColorSpace),We=E.colorSpace===Ai?null:mt.getPrimaries(E.colorSpace),Re=E.colorSpace===Ai||Ye===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Ze=E.image[0]&&E.image[0].isDataTexture,we=[];for(let se=0;se<6;se++)!Ie&&!Ze?we[se]=p(E.image[se],!1,!0,s.maxCubemapSize):we[se]=Ze?E.image[se].image:E.image[se],we[se]=be(E,we[se]);let Ft=we[0],ot=g(Ft)||a,Ge=r.convert(E.format,E.colorSpace),Fe=r.convert(E.type),He=C(E.internalFormat,Ge,Fe,E.colorSpace),ct=a&&E.isVideoTexture!==!0,Ke=_e.__version===void 0||ie===!0,Tt=ye.dataReady,X=P(E,Ft,ot);G(i.TEXTURE_CUBE_MAP,E,ot);let Le;if(Ie){ct&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,X,He,Ft.width,Ft.height);for(let se=0;se<6;se++){Le=we[se].mipmaps;for(let Ae=0;Ae<Le.length;Ae++){let De=Le[Ae];E.format!==Zn?Ge!==null?ct?Tt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,De.width,De.height,Ge,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,He,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Tt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,De.width,De.height,Ge,Fe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,He,De.width,De.height,0,Ge,Fe,De.data)}}}else{if(Le=E.mipmaps,ct&&Ke){Le.length>0&&X++;let se=he(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,X,He,se.width,se.height)}for(let se=0;se<6;se++)if(Ze){ct?Tt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we[se].width,we[se].height,Ge,Fe,we[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,we[se].width,we[se].height,0,Ge,Fe,we[se].data);for(let Ae=0;Ae<Le.length;Ae++){let at=Le[Ae].image[se].image;ct?Tt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,at.width,at.height,Ge,Fe,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,He,at.width,at.height,0,Ge,Fe,at.data)}}else{ct?Tt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ge,Fe,we[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Ge,Fe,we[se]);for(let Ae=0;Ae<Le.length;Ae++){let De=Le[Ae];ct?Tt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,Ge,Fe,De.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,He,Ge,Fe,De.image[se])}}}y(E,ot)&&M(i.TEXTURE_CUBE_MAP),_e.__version=ye.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function F(w,E,j,ie,ye,_e){let Ye=r.convert(j.format,j.colorSpace),We=r.convert(j.type),Re=C(j.internalFormat,Ye,We,j.colorSpace);if(!n.get(E).__hasExternalTextures){let Ze=Math.max(1,E.width>>_e),we=Math.max(1,E.height>>_e);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,_e,Re,Ze,we,E.depth,0,Ye,We,null):t.texImage2D(ye,_e,Re,Ze,we,0,Ye,We,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ne(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ye,n.get(j).__webglTexture,0,Z(E)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ye,n.get(j).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(w,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||ne(E)){let ye=E.depthTexture;ye&&ye.isDepthTexture&&(ye.type===si?ie=i.DEPTH_COMPONENT32F:ye.type===Ri&&(ie=i.DEPTH_COMPONENT24));let _e=Z(E);ne(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ie,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ie,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){let ie=Z(E);j&&ne(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):ne(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let ie=E.textures;for(let ye=0;ye<ie.length;ye++){let _e=ie[ye],Ye=r.convert(_e.format,_e.colorSpace),We=r.convert(_e.type),Re=C(_e.internalFormat,Ye,We,_e.colorSpace),Ie=Z(E);j&&ne(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,E.width,E.height):ne(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let ie=n.get(E.depthTexture).__webglTexture,ye=Z(E);if(E.depthTexture.format===ts)ne(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ws)ne(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function fe(w){let E=n.get(w),j=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,w)}else if(j){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=i.createRenderbuffer(),q(E.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),q(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function S(w,E,j){let ie=n.get(w);E!==void 0&&F(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&fe(w)}function te(w){let E=w.texture,j=n.get(w),ie=n.get(E);w.addEventListener("dispose",A);let ye=w.textures,_e=w.isWebGLCubeRenderTarget===!0,Ye=ye.length>1,We=g(w)||a;if(Ye||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,o.memory.textures++),_e){j.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(a&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Re]=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)j.__webglFramebuffer[Re][Ie]=i.createFramebuffer()}else j.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)j.__webglFramebuffer[Re]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ye)if(s.drawBuffers)for(let Re=0,Ie=ye.length;Re<Ie;Re++){let Ze=n.get(ye[Re]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ne(w)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){let Ie=ye[Re];j.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Re]);let Ze=r.convert(Ie.format,Ie.colorSpace),we=r.convert(Ie.type),Ft=C(Ie.internalFormat,Ze,we,Ie.colorSpace,w.isXRRenderTarget===!0),ot=Z(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ft,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,j.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),q(j.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),G(i.TEXTURE_CUBE_MAP,E,We);for(let Re=0;Re<6;Re++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)F(j.__webglFramebuffer[Re][Ie],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ie);else F(j.__webglFramebuffer[Re],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(E,We)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Re=0,Ie=ye.length;Re<Ie;Re++){let Ze=ye[Re],we=n.get(Ze);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),G(i.TEXTURE_2D,Ze,We),F(j.__webglFramebuffer,w,Ze,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),y(Ze,We)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?Re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,ie.__webglTexture),G(Re,E,We),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)F(j.__webglFramebuffer[Ie],w,E,i.COLOR_ATTACHMENT0,Re,Ie);else F(j.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,Re,0);y(E,We)&&M(Re),t.unbindTexture()}w.depthBuffer&&fe(w)}function K(w){let E=g(w)||a,j=w.textures;for(let ie=0,ye=j.length;ie<ye;ie++){let _e=j[ie];if(y(_e,E)){let Ye=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,We=n.get(_e).__webglTexture;t.bindTexture(Ye,We),M(Ye),t.unbindTexture()}}}function H(w){if(a&&w.samples>0&&ne(w)===!1){let E=w.textures,j=w.width,ie=w.height,ye=i.COLOR_BUFFER_BIT,_e=[],Ye=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(w),Re=E.length>1;if(Re)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){_e.push(i.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&_e.push(Ye);let Ze=We.__ignoreDepthValues!==void 0?We.__ignoreDepthValues:!1;if(Ze===!1&&(w.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]),Ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ye])),Re){let we=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,j,ie,0,0,j,ie,ye,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);let Ze=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}}function Z(w){return Math.min(s.maxSamples,w.samples)}function ne(w){let E=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(w){let E=o.render.frame;d.get(w)!==E&&(d.set(w,E),w.update())}function be(w,E){let j=w.colorSpace,ie=w.format,ye=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===fc||j!==Fi&&j!==Ai&&(mt.getTransfer(j)===bt?a===!1?e.has("EXT_sRGB")===!0&&ie===Zn?(w.format=fc,w.minFilter=_n,w.generateMipmaps=!1):E=Uo.sRGBToLinear(E):(ie!==Zn||ye!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=D,this.setTexture3D=b,this.setTextureCube=O,this.rebindTextures=S,this.setupRenderTarget=te,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=ne}function q1(i,e,t){let n=t.isWebGL2;function s(r,o=Ai){let a,c=mt.getTransfer(o);if(r===Ii)return i.UNSIGNED_BYTE;if(r===Ed)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Of)return i.BYTE;if(r===Hf)return i.SHORT;if(r===tl)return i.UNSIGNED_SHORT;if(r===Md)return i.INT;if(r===Ri)return i.UNSIGNED_INT;if(r===si)return i.FLOAT;if(r===wr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bf)return i.ALPHA;if(r===Zn)return i.RGBA;if(r===Gf)return i.LUMINANCE;if(r===Vf)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Ws)return i.DEPTH_STENCIL;if(r===fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wd)return i.RED;if(r===Sd)return i.RED_INTEGER;if(r===Wf)return i.RG;if(r===Td)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===wa||r===Sa||r===Ta||r===Aa)if(c===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wl||r===Xl||r===Yl||r===ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zl||r===$l)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zl)return c===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$l)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jl||r===Kl||r===jl||r===Ql||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===ch||r===lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jl)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jl)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ql)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lh)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ra||r===hh||r===dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ra)return c===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xf||r===uh||r===fh||r===ph)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ra)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ac=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ge=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z1={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new kn({extensions:{fragDepth:!0},vertexShader:$1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ee(new Di(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Cc=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,x=new Rc,p=t.getContextAttributes(),g=null,_=null,y=[],M=[],C=new xe,P=null,I=new vn;I.layers.enable(1),I.viewport=new Ct;let k=new vn;k.layers.enable(2),k.viewport=new Ct;let A=[I,k],v=new Ac;v.layers.enable(1),v.layers.enable(2);let T=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ue=y[G];return ue===void 0&&(ue=new vr,y[G]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(G){let ue=y[G];return ue===void 0&&(ue=new vr,y[G]=ue),ue.getGripSpace()},this.getHand=function(G){let ue=y[G];return ue===void 0&&(ue=new vr,y[G]=ue),ue.getHandSpace()};function $(G){let ue=M.indexOf(G.inputSource);if(ue===-1)return;let Me=y[ue];Me!==void 0&&(Me.update(G.inputSource,G.frame,l||o),Me.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",z);for(let G=0;G<y.length;G++){let ue=M[G];ue!==null&&(M[G]=null,y[G].disconnect(ue))}T=null,le=null,x.reset(),e.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",N),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new $n(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,Me=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?Ws:ts,Me=p.stencil?es:Ri);let F={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(F),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new $n(u.textureWidth,u.textureHeight,{format:Zn,type:Ii,depthTexture:new Vo(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let q=e.properties.get(_);q.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(G){for(let ue=0;ue<G.removed.length;ue++){let Me=G.removed[ue],Te=M.indexOf(Me);Te>=0&&(M[Te]=null,y[Te].disconnect(Me))}for(let ue=0;ue<G.added.length;ue++){let Me=G.added[ue],Te=M.indexOf(Me);if(Te===-1){for(let q=0;q<y.length;q++)if(q>=M.length){M.push(Me),Te=q;break}else if(M[q]===null){M[q]=Me,Te=q;break}if(Te===-1)break}let F=y[Te];F&&F.connect(Me)}}let B=new L,Y=new L;function D(G,ue,Me){B.setFromMatrixPosition(ue.matrixWorld),Y.setFromMatrixPosition(Me.matrixWorld);let Te=B.distanceTo(Y),F=ue.projectionMatrix.elements,q=Me.projectionMatrix.elements,pe=F[14]/(F[10]-1),fe=F[14]/(F[10]+1),S=(F[9]+1)/F[5],te=(F[9]-1)/F[5],K=(F[8]-1)/F[0],H=(q[8]+1)/q[0],Z=pe*K,ne=pe*H,ve=Te/(-K+H),be=ve*-K;ue.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(be),G.translateZ(ve),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let he=pe+ve,w=fe+ve,E=Z-be,j=ne+(Te-be),ie=S*fe/w*he,ye=te*fe/w*he;G.projectionMatrix.makePerspective(E,j,ie,ye,he,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function b(G,ue){ue===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ue.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),v.near=k.near=I.near=G.near,v.far=k.far=I.far=G.far,(T!==v.near||le!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,le=v.far,I.near=T,I.far=le,k.near=T,k.far=le,I.updateProjectionMatrix(),k.updateProjectionMatrix(),G.updateProjectionMatrix());let ue=G.parent,Me=v.cameras;b(v,ue);for(let Te=0;Te<Me.length;Te++)b(Me[Te],ue);Me.length===2?D(v,I,k):v.projectionMatrix.copy(I.projectionMatrix),O(G,v,ue)};function O(G,ue,Me){Me===null?G.matrix.copy(ue.matrixWorld):(G.matrix.copy(Me.matrixWorld),G.matrix.invert(),G.matrix.multiply(ue.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ue.projectionMatrix),G.projectionMatrixInverse.copy(ue.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=pc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null};let W=null;function oe(G,ue){if(h=ue.getViewerPose(l||o),m=ue,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Te=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,Te=!0);for(let q=0;q<Me.length;q++){let pe=Me[q],fe=null;if(f!==null)fe=f.getViewport(pe);else{let te=d.getViewSubImage(u,pe);fe=te.viewport,q===0&&(e.setRenderTargetTextures(_,te.colorTexture,u.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(_))}let S=A[q];S===void 0&&(S=new vn,S.layers.enable(q),S.viewport=new Ct,A[q]=S),S.matrix.fromArray(pe.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(pe.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(fe.x,fe.y,fe.width,fe.height),q===0&&(v.matrix.copy(S.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Te===!0&&v.cameras.push(S)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")){let q=d.getDepthInformation(Me[0]);q&&q.isValid&&q.texture&&x.init(e,q,s.renderState)}}for(let Me=0;Me<y.length;Me++){let Te=M[Me],F=y[Me];Te!==null&&F!==void 0&&F.update(Te,ue,l||o)}x.render(e,v),W&&W(G,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}let me=new Ud;me.setAnimationLoop(oe),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}},$i=new Un,K1=new lt;function j1(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Dd(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,y):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===cn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===cn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),y=_.envMap,M=_.envMapRotation;if(y&&(p.envMap.value=y,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),p.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler($i)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;let C=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*C,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q1(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){let M=y.program;n.uniformBlockBinding(_,M)}function l(_,y){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",p));let C=y.program;n.updateUBOMapping(_,C);let P=e.render.frame;r[_.id]!==P&&(u(_),r[_.id]=P)}function h(_){let y=d();_.__bindingPointIndex=y;let M=i.createBuffer(),C=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],M=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=M.length;P<I;P++){let k=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,v=k.length;A<v;A++){let T=k[A];if(f(T,P,A,C)===!0){let le=T.__offset,$=Array.isArray(T.value)?T.value:[T.value],N=0;for(let z=0;z<$.length;z++){let B=$[z],Y=x(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,le+N,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,M,C){let P=_.value,I=y+"_"+M;if(C[I]===void 0)return typeof P=="number"||typeof P=="boolean"?C[I]=P:C[I]=P.clone(),!0;{let k=C[I];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return C[I]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function m(_){let y=_.uniforms,M=0,C=16;for(let I=0,k=y.length;I<k;I++){let A=Array.isArray(y[I])?y[I]:[y[I]];for(let v=0,T=A.length;v<T;v++){let le=A[v],$=Array.isArray(le.value)?le.value:[le.value];for(let N=0,z=$.length;N<z;N++){let B=$[N],Y=x(B),D=M%C;D!==0&&C-D<Y.boundary&&(M+=C-D),le.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=M,M+=Y.storage}}}let P=M%C;return P>0&&(M+=C-P),_.__size=M,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var Ar=class{constructor(e={}){let{canvas:t=n0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let y=this,M=!1,C=0,P=0,I=null,k=-1,A=null,v=new Ct,T=new Ct,le=null,$=new $e(0),N=0,z=t.width,B=t.height,Y=1,D=null,b=null,O=new Ct(0,0,z,B),W=new Ct(0,0,z,B),oe=!1,me=new Tr,G=!1,ue=!1,Me=null,Te=new lt,F=new xe,q=new L,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return I===null?Y:1}let S=n;function te(R,J){for(let re=0;re<R.length;re++){let ae=R[re],Q=t.getContext(ae,J);if(Q!==null)return Q}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",Le,!1),S===null){let J=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&J.shift(),S=te(J,R),S===null)throw te(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,H,Z,ne,ve,be,he,w,E,j,ie,ye,_e,Ye,We,Re,Ie,Ze,we,Ft,ot,Ge,Fe,He;function ct(){K=new mg(S),H=new lg(S,K,e),K.init(H),Ge=new q1(S,K,H),Z=new X1(S,K,H),ne=new yg(S),ve=new N1,be=new Y1(S,K,Z,ve,H,Ge,ne),he=new dg(y),w=new pg(y),E=new w0(S,H),Fe=new ag(S,K,E,H),j=new gg(S,E,ne,Fe),ie=new Eg(S,j,E,ne),we=new Mg(S,H,be),Re=new hg(ve),ye=new L1(y,he,w,K,H,Fe,Re),_e=new j1(y,ve),Ye=new U1,We=new B1(K,H),Ze=new og(y,he,w,Z,ie,u,c),Ie=new W1(y,ie,H),He=new Q1(S,ne,H,Z),Ft=new cg(S,K,ne,H),ot=new xg(S,K,ne,H),ne.programs=ye.programs,y.capabilities=H,y.extensions=K,y.properties=ve,y.renderLists=Ye,y.shadowMap=Ie,y.state=Z,y.info=ne}ct();let Ke=new Cc(y,S);this.xr=Ke,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,B,!1))},this.getSize=function(R){return R.set(z,B)},this.setSize=function(R,J,re=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,B=J,t.width=Math.floor(R*Y),t.height=Math.floor(J*Y),re===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(z*Y,B*Y).floor()},this.setDrawingBufferSize=function(R,J,re){z=R,B=J,Y=re,t.width=Math.floor(R*re),t.height=Math.floor(J*re),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(v)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,J,re,ae){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,J,re,ae),Z.viewport(v.copy(O).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,J,re,ae){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,J,re,ae),Z.scissor(T.copy(W).multiplyScalar(Y).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(R){Z.setScissorTest(oe=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){b=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(R=!0,J=!0,re=!0){let ae=0;if(R){let Q=!1;if(I!==null){let ke=I.texture.format;Q=ke===Ad||ke===Td||ke===Sd}if(Q){let ke=I.texture.type,Be=ke===Ii||ke===Ri||ke===tl||ke===es||ke===Ed||ke===bd,Xe=Ze.getClearColor(),qe=Ze.getClearAlpha(),rt=Xe.r,Je=Xe.g,je=Xe.b;Be?(f[0]=rt,f[1]=Je,f[2]=je,f[3]=qe,S.clearBufferuiv(S.COLOR,0,f)):(m[0]=rt,m[1]=Je,m[2]=je,m[3]=qe,S.clearBufferiv(S.COLOR,0,m))}else ae|=S.COLOR_BUFFER_BIT}J&&(ae|=S.DEPTH_BUFFER_BIT),re&&(ae|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ye.dispose(),We.dispose(),ve.dispose(),he.dispose(),w.dispose(),ie.dispose(),Fe.dispose(),He.dispose(),ye.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Ln),Ke.removeEventListener("sessionend",Et),Me&&(Me.dispose(),Me=null),un.stop()};function Tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=ne.autoReset,J=Ie.enabled,re=Ie.autoUpdate,ae=Ie.needsUpdate,Q=Ie.type;ct(),ne.autoReset=R,Ie.enabled=J,Ie.autoUpdate=re,Ie.needsUpdate=ae,Ie.type=Q}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){let J=R.target;J.removeEventListener("dispose",se),Ae(J)}function Ae(R){De(R),ve.remove(R)}function De(R){let J=ve.get(R).programs;J!==void 0&&(J.forEach(function(re){ye.releaseProgram(re)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,re,ae,Q,ke){J===null&&(J=pe);let Be=Q.isMesh&&Q.matrixWorld.determinant()<0,Xe=tf(R,J,re,ae,Q);Z.setMaterial(ae,Be);let qe=re.index,rt=1;if(ae.wireframe===!0){if(qe=j.getWireframeAttribute(re),qe===void 0)return;rt=2}let Je=re.drawRange,je=re.attributes.position,Ut=Je.start*rt,Sn=(Je.start+Je.count)*rt;ke!==null&&(Ut=Math.max(Ut,ke.start*rt),Sn=Math.min(Sn,(ke.start+ke.count)*rt)),qe!==null?(Ut=Math.max(Ut,0),Sn=Math.min(Sn,qe.count)):je!=null&&(Ut=Math.max(Ut,0),Sn=Math.min(Sn,je.count));let Yt=Sn-Ut;if(Yt<0||Yt===1/0)return;Fe.setup(Q,ae,Xe,re,qe);let ci,Lt=Ft;if(qe!==null&&(ci=E.get(qe),Lt=ot,Lt.setIndex(ci)),Q.isMesh)ae.wireframe===!0?(Z.setLineWidth(ae.wireframeLinewidth*fe()),Lt.setMode(S.LINES)):Lt.setMode(S.TRIANGLES);else if(Q.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),Z.setLineWidth(Qe*fe()),Q.isLineSegments?Lt.setMode(S.LINES):Q.isLineLoop?Lt.setMode(S.LINE_LOOP):Lt.setMode(S.LINE_STRIP)}else Q.isPoints?Lt.setMode(S.POINTS):Q.isSprite&&Lt.setMode(S.TRIANGLES);if(Q.isBatchedMesh)Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Lt.renderInstances(Ut,Yt,Q.count);else if(re.isInstancedBufferGeometry){let Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,_a=Math.min(re.instanceCount,Qe);Lt.renderInstances(Ut,Yt,_a)}else Lt.render(Ut,Yt)};function at(R,J,re){R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,Qr(R,J,re),R.side=Li,R.needsUpdate=!0,Qr(R,J,re),R.side=$t):Qr(R,J,re)}this.compile=function(R,J,re=null){re===null&&(re=R),p=We.get(re),p.init(),_.push(p),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),R!==re&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(y._useLegacyLights);let ae=new Set;return R.traverse(function(Q){let ke=Q.material;if(ke)if(Array.isArray(ke))for(let Be=0;Be<ke.length;Be++){let Xe=ke[Be];at(Xe,re,Q),ae.add(Xe)}else at(ke,re,Q),ae.add(ke)}),_.pop(),p=null,ae},this.compileAsync=function(R,J,re=null){let ae=this.compile(R,J,re);return new Promise(Q=>{function ke(){if(ae.forEach(function(Be){ve.get(Be).currentProgram.isReady()&&ae.delete(Be)}),ae.size===0){Q(R);return}setTimeout(ke,10)}K.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Mt=null;function Kt(R){Mt&&Mt(R)}function Ln(){un.stop()}function Et(){un.start()}let un=new Ud;un.setAnimationLoop(Kt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(R){Mt=R,Ke.setAnimationLoop(R),R===null?un.stop():un.start()},Ke.addEventListener("sessionstart",Ln),Ke.addEventListener("sessionend",Et),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(J),J=Ke.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,J,I),p=We.get(R,_.length),p.init(),_.push(p),Te.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),me.setFromProjectionMatrix(Te),ue=this.localClippingEnabled,G=Re.init(this.clippingPlanes,ue),x=Ye.get(R,g.length),x.init(),g.push(x),ni(R,J,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(D,b),this.info.render.frame++,G===!0&&Re.beginShadows();let re=p.state.shadowsArray;if(Ie.render(re,R,J),G===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1)&&Ze.render(x,R),p.setupLights(y._useLegacyLights),J.isArrayCamera){let ae=J.cameras;for(let Q=0,ke=ae.length;Q<ke;Q++){let Be=ae[Q];Ll(x,R,Be,Be.viewport)}}else Ll(x,R,J);I!==null&&(be.updateMultisampleRenderTarget(I),be.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(y,R,J),Fe.resetDefaultState(),k=-1,A=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function ni(R,J,re,ae){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||me.intersectsSprite(R)){ae&&q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);let Be=ie.update(R),Xe=R.material;Xe.visible&&x.push(R,Be,Xe,re,q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||me.intersectsObject(R))){let Be=ie.update(R),Xe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),q.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),q.copy(Be.boundingSphere.center)),q.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(Xe)){let qe=Be.groups;for(let rt=0,Je=qe.length;rt<Je;rt++){let je=qe[rt],Ut=Xe[je.materialIndex];Ut&&Ut.visible&&x.push(R,Be,Ut,re,q.z,je)}}else Xe.visible&&x.push(R,Be,Xe,re,q.z,null)}}let ke=R.children;for(let Be=0,Xe=ke.length;Be<Xe;Be++)ni(ke[Be],J,re,ae)}function Ll(R,J,re,ae){let Q=R.opaque,ke=R.transmissive,Be=R.transparent;p.setupLightsView(re),G===!0&&Re.setGlobalState(y.clippingPlanes,re),ke.length>0&&ef(Q,ke,J,re),ae&&Z.viewport(v.copy(ae)),Q.length>0&&jr(Q,J,re),ke.length>0&&jr(ke,J,re),Be.length>0&&jr(Be,J,re),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function ef(R,J,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;let ke=H.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?wr:Ii,minFilter:Qi,samples:ke?4:0})),y.getDrawingBufferSize(F),ke?Me.setSize(F.x,F.y):Me.setSize(mc(F.x),mc(F.y));let Be=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor($),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let Xe=y.toneMapping;y.toneMapping=Pi,jr(R,re,ae),be.updateMultisampleRenderTarget(Me),be.updateRenderTargetMipmap(Me);let qe=!1;for(let rt=0,Je=J.length;rt<Je;rt++){let je=J[rt],Ut=je.object,Sn=je.geometry,Yt=je.material,ci=je.group;if(Yt.side===$t&&Ut.layers.test(ae.layers)){let Lt=Yt.side;Yt.side=cn,Yt.needsUpdate=!0,Nl(Ut,re,ae,Sn,Yt,ci),Yt.side=Lt,Yt.needsUpdate=!0,qe=!0}}qe===!0&&(be.updateMultisampleRenderTarget(Me),be.updateRenderTargetMipmap(Me)),y.setRenderTarget(Be),y.setClearColor($,N),y.toneMapping=Xe}function jr(R,J,re){let ae=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,ke=R.length;Q<ke;Q++){let Be=R[Q],Xe=Be.object,qe=Be.geometry,rt=ae===null?Be.material:ae,Je=Be.group;Xe.layers.test(re.layers)&&Nl(Xe,J,re,qe,rt,Je)}}function Nl(R,J,re,ae,Q,ke){R.onBeforeRender(y,J,re,ae,Q,ke),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(y,J,re,ae,R,ke),Q.transparent===!0&&Q.side===$t&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,y.renderBufferDirect(re,J,ae,Q,R,ke),Q.side=Li,Q.needsUpdate=!0,y.renderBufferDirect(re,J,ae,Q,R,ke),Q.side=$t):y.renderBufferDirect(re,J,ae,Q,R,ke),R.onAfterRender(y,J,re,ae,Q,ke)}function Qr(R,J,re){J.isScene!==!0&&(J=pe);let ae=ve.get(R),Q=p.state.lights,ke=p.state.shadowsArray,Be=Q.state.version,Xe=ye.getParameters(R,Q.state,ke,J,re),qe=ye.getProgramCacheKey(Xe),rt=ae.programs;ae.environment=R.isMeshStandardMaterial?J.environment:null,ae.fog=J.fog,ae.envMap=(R.isMeshStandardMaterial?w:he).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",se),rt=new Map,ae.programs=rt);let Je=rt.get(qe);if(Je!==void 0){if(ae.currentProgram===Je&&ae.lightsStateVersion===Be)return Ul(R,Xe),Je}else Xe.uniforms=ye.getUniforms(R),R.onBuild(re,Xe,y),R.onBeforeCompile(Xe,y),Je=ye.acquireProgram(Xe,qe),rt.set(qe,Je),ae.uniforms=Xe.uniforms;let je=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Re.uniform),Ul(R,Xe),ae.needsLights=sf(R),ae.lightsStateVersion=Be,ae.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=Je,ae.uniformsList=null,Je}function Dl(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=Bs.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Ul(R,J){let re=ve.get(R);re.outputColorSpace=J.outputColorSpace,re.batching=J.batching,re.instancing=J.instancing,re.instancingColor=J.instancingColor,re.instancingMorph=J.instancingMorph,re.skinning=J.skinning,re.morphTargets=J.morphTargets,re.morphNormals=J.morphNormals,re.morphColors=J.morphColors,re.morphTargetsCount=J.morphTargetsCount,re.numClippingPlanes=J.numClippingPlanes,re.numIntersection=J.numClipIntersection,re.vertexAlphas=J.vertexAlphas,re.vertexTangents=J.vertexTangents,re.toneMapping=J.toneMapping}function tf(R,J,re,ae,Q){J.isScene!==!0&&(J=pe),be.resetTextureUnits();let ke=J.fog,Be=ae.isMeshStandardMaterial?J.environment:null,Xe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fi,qe=(ae.isMeshStandardMaterial?w:he).get(ae.envMap||Be),rt=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!re.morphAttributes.position,Ut=!!re.morphAttributes.normal,Sn=!!re.morphAttributes.color,Yt=Pi;ae.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=y.toneMapping);let ci=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Lt=ci!==void 0?ci.length:0,Qe=ve.get(ae),_a=p.state.lights;if(G===!0&&(ue===!0||R!==A)){let Nn=R===A&&ae.id===k;Re.setState(ae,R,Nn)}let At=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==_a.state.version||Qe.outputColorSpace!==Xe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==qe||ae.fog===!0&&Qe.fog!==ke||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==Je||Qe.morphTargets!==je||Qe.morphNormals!==Ut||Qe.morphColors!==Sn||Qe.toneMapping!==Yt||H.isWebGL2===!0&&Qe.morphTargetsCount!==Lt)&&(At=!0):(At=!0,Qe.__version=ae.version);let Gi=Qe.currentProgram;At===!0&&(Gi=Qr(ae,J,Q));let kl=!1,hr=!1,va=!1,sn=Gi.getUniforms(),Vi=Qe.uniforms;if(Z.useProgram(Gi.program)&&(kl=!0,hr=!0,va=!0),ae.id!==k&&(k=ae.id,hr=!0),kl||A!==R){sn.setValue(S,"projectionMatrix",R.projectionMatrix),sn.setValue(S,"viewMatrix",R.matrixWorldInverse);let Nn=sn.map.cameraPosition;Nn!==void 0&&Nn.setValue(S,q.setFromMatrixPosition(R.matrixWorld)),H.logarithmicDepthBuffer&&sn.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&sn.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,hr=!0,va=!0)}if(Q.isSkinnedMesh){sn.setOptional(S,Q,"bindMatrix"),sn.setOptional(S,Q,"bindMatrixInverse");let Nn=Q.skeleton;Nn&&(H.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),sn.setValue(S,"boneTexture",Nn.boneTexture,be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(sn.setOptional(S,Q,"batchingTexture"),sn.setValue(S,"batchingTexture",Q._matricesTexture,be));let Ma=re.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&H.isWebGL2===!0)&&we.update(Q,re,Gi),(hr||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,sn.setValue(S,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Vi.envMap.value=qe,Vi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),hr&&(sn.setValue(S,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&nf(Vi,va),ke&&ae.fog===!0&&_e.refreshFogUniforms(Vi,ke),_e.refreshMaterialUniforms(Vi,ae,Y,B,Me),Bs.upload(S,Dl(Qe),Vi,be)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bs.upload(S,Dl(Qe),Vi,be),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&sn.setValue(S,"center",Q.center),sn.setValue(S,"modelViewMatrix",Q.modelViewMatrix),sn.setValue(S,"normalMatrix",Q.normalMatrix),sn.setValue(S,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let Nn=ae.uniformsGroups;for(let Ea=0,rf=Nn.length;Ea<rf;Ea++)if(H.isWebGL2){let zl=Nn[Ea];He.update(zl,Gi),He.bind(zl,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function nf(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function sf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,J,re){ve.get(R.texture).__webglTexture=J,ve.get(R.depthTexture).__webglTexture=re;let ae=ve.get(R);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=re===void 0,ae.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,J){let re=ve.get(R);re.__webglFramebuffer=J,re.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,re=0){I=R,C=J,P=re;let ae=!0,Q=null,ke=!1,Be=!1;if(R){let qe=ve.get(R);qe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(S.FRAMEBUFFER,null),ae=!1):qe.__webglFramebuffer===void 0?be.setupRenderTarget(R):qe.__hasExternalTextures&&be.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);let rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Be=!0);let Je=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[J])?Q=Je[J][re]:Q=Je[J],ke=!0):H.isWebGL2&&R.samples>0&&be.useMultisampledRTT(R)===!1?Q=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[re]:Q=Je,v.copy(R.viewport),T.copy(R.scissor),le=R.scissorTest}else v.copy(O).multiplyScalar(Y).floor(),T.copy(W).multiplyScalar(Y).floor(),le=oe;if(Z.bindFramebuffer(S.FRAMEBUFFER,Q)&&H.drawBuffers&&ae&&Z.drawBuffers(R,Q),Z.viewport(v),Z.scissor(T),Z.setScissorTest(le),ke){let qe=ve.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+J,qe.__webglTexture,re)}else if(Be){let qe=ve.get(R.texture),rt=J||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,qe.__webglTexture,re||0,rt)}k=-1},this.readRenderTargetPixels=function(R,J,re,ae,Q,ke,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Z.bindFramebuffer(S.FRAMEBUFFER,Xe);try{let qe=R.texture,rt=qe.format,Je=qe.type;if(rt!==Zn&&Ge.convert(rt)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let je=Je===wr&&(K.has("EXT_color_buffer_half_float")||H.isWebGL2&&K.has("EXT_color_buffer_float"));if(Je!==Ii&&Ge.convert(Je)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===si&&(H.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ae&&re>=0&&re<=R.height-Q&&S.readPixels(J,re,ae,Q,Ge.convert(rt),Ge.convert(Je),ke)}finally{let qe=I!==null?ve.get(I).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(R,J,re=0){let ae=Math.pow(2,-re),Q=Math.floor(J.image.width*ae),ke=Math.floor(J.image.height*ae);be.setTexture2D(J,0),S.copyTexSubImage2D(S.TEXTURE_2D,re,0,0,R.x,R.y,Q,ke),Z.unbindTexture()},this.copyTextureToTexture=function(R,J,re,ae=0){let Q=J.image.width,ke=J.image.height,Be=Ge.convert(re.format),Xe=Ge.convert(re.type);be.setTexture2D(re,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,re.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,re.unpackAlignment),J.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ae,R.x,R.y,Q,ke,Be,Xe,J.image.data):J.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ae,R.x,R.y,J.mipmaps[0].width,J.mipmaps[0].height,Be,J.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,ae,R.x,R.y,Be,Xe,J.image),ae===0&&re.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,J,re,ae,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ke=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Xe=R.max.z-R.min.z+1,qe=Ge.convert(ae.format),rt=Ge.convert(ae.type),Je;if(ae.isData3DTexture)be.setTexture3D(ae,0),Je=S.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)be.setTexture2DArray(ae,0),Je=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ae.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ae.unpackAlignment);let je=S.getParameter(S.UNPACK_ROW_LENGTH),Ut=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Sn=S.getParameter(S.UNPACK_SKIP_PIXELS),Yt=S.getParameter(S.UNPACK_SKIP_ROWS),ci=S.getParameter(S.UNPACK_SKIP_IMAGES),Lt=re.isCompressedTexture?re.mipmaps[Q]:re.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Lt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Lt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,R.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,R.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?S.texSubImage3D(Je,Q,J.x,J.y,J.z,ke,Be,Xe,qe,rt,Lt.data):ae.isCompressedArrayTexture?S.compressedTexSubImage3D(Je,Q,J.x,J.y,J.z,ke,Be,Xe,qe,Lt.data):S.texSubImage3D(Je,Q,J.x,J.y,J.z,ke,Be,Xe,qe,rt,Lt),S.pixelStorei(S.UNPACK_ROW_LENGTH,je),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ut),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Yt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ci),Q===0&&ae.generateMipmaps&&S.generateMipmap(Je),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?be.setTextureCube(R,0):R.isData3DTexture?be.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?be.setTexture2DArray(R,0):be.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,Z.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===nl?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===ia?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Pc=class extends Ar{};Pc.prototype.isWebGL1Renderer=!0;var Ui=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ic=class extends Mn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new lt,ad=new lt,Eo=[],cd=new Jn,ex=new lt,xr=new Ee,yr=new is,Zs=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),cd.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(cd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),yr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),ad.multiplyMatrices(n,Ds),xr.matrixWorld=ad,xr.raycast(e,Eo);for(let o=0,a=Eo.length;o<a;o++){let c=Eo[o];c.instanceId=r,c.object=this,t.push(c)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(s*this.count),s,this.count,wd,si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xo=class extends Mn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new lt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends Cr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var bo=new L,nc=new sl,ic=new sl,sc=new sl,$s=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),l=bo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),nc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,x,p),ic.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,x,p),sc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ic.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),sc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ld(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function tx(i,e){let t=1-i;return t*t*e}function nx(i,e){return 2*(1-i)*i*e}function ix(i,e){return i*i*e}function Mr(i,e,t,n){return tx(i,e)+nx(i,t)+ix(i,n)}function sx(i,e){let t=1-i;return t*t*t*e}function rx(i,e){let t=1-i;return 3*t*t*i*e}function ox(i,e){return 3*(1-i)*i*i*e}function ax(i,e){return i*i*i*e}function Er(i,e,t,n,s){return sx(i,e)+rx(i,t)+ox(i,n)+ax(i,s)}var Yo=class extends zn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends zn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends zn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends zn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends zn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends zn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y),Mr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ld(a,c.x,l.x,h.x,d.x),ld(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},Ko=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:$s,CubicBezierCurve:Yo,CubicBezierCurve3:Nc,EllipseCurve:Cr,LineCurve:qo,LineCurve3:Dc,QuadraticBezierCurve:Zo,QuadraticBezierCurve3:$o,SplineCurve:Jo}),Uc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}},Js=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qo(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Zo(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Cr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class i extends Pt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Zt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new L,u=new xe,f=new L,m=new L,x=new L,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let _=0;_<=t;_++){let y=n+_*h*s,M=Math.sin(y),C=Math.cos(y);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*M,d.y=e[P].y,d.z=e[P].x*C,o.push(d.x,d.y,d.z),u.x=_/t,u.y=P/(e.length-1),a.push(u.x,u.y);let I=c[3*P+0]*M,k=c[3*P+1],A=c[3*P+0]*C;l.push(I,k,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let M=y+_*e.length,C=M,P=M+e.length,I=M+e.length+1,k=M+1;r.push(C,P,k),r.push(I,k,P)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ki=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new xe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},It=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],p=n/2,g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function _(){let M=new L,C=new L,P=0,I=(t-e)/n;for(let k=0;k<=r;k++){let A=[],v=k/r,T=v*(t-e)+e;for(let le=0;le<=s;le++){let $=le/s,N=$*c+a,z=Math.sin(N),B=Math.cos(N);C.x=T*z,C.y=-v*n+p,C.z=T*B,d.push(C.x,C.y,C.z),M.set(z,I,B).normalize(),u.push(M.x,M.y,M.z),f.push($,1-v),A.push(m++)}x.push(A)}for(let k=0;k<s;k++)for(let A=0;A<r;A++){let v=x[A][k],T=x[A+1][k],le=x[A+1][k+1],$=x[A][k+1];h.push(v,T,$),h.push(T,le,$),P+=6}l.addGroup(g,P,0),g+=P}function y(M){let C=m,P=new xe,I=new L,k=0,A=M===!0?e:t,v=M===!0?1:-1;for(let le=1;le<=s;le++)d.push(0,p*v,0),u.push(0,v,0),f.push(.5,.5),m++;let T=m;for(let le=0;le<=s;le++){let N=le/s*c+a,z=Math.cos(N),B=Math.sin(N);I.x=A*B,I.y=p*v,I.z=A*z,d.push(I.x,I.y,I.z),u.push(0,v,0),P.x=z*.5+.5,P.y=B*.5*v+.5,f.push(P.x,P.y),m++}for(let le=0;le<s;le++){let $=C+le,N=T+le;M===!0?h.push(N,N+1,$):h.push(N+1,N,$),k+=3}l.addGroup(g,k,M===!0?1:2),g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class i extends It{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kc=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,M=new L,C=new L;for(let P=0;P<t.length;P+=3)f(t[P+0],y),f(t[P+1],M),f(t[P+2],C),c(y,M,C,_)}function c(_,y,M,C){let P=C+1,I=[];for(let k=0;k<=P;k++){I[k]=[];let A=_.clone().lerp(M,k/P),v=y.clone().lerp(M,k/P),T=P-k;for(let le=0;le<=T;le++)le===0&&k===P?I[k][le]=A:I[k][le]=A.clone().lerp(v,le/T)}for(let k=0;k<P;k++)for(let A=0;A<2*(P-k)-1;A++){let v=Math.floor(A/2);A%2===0?(u(I[k][v+1]),u(I[k+1][v]),u(I[k][v])):(u(I[k][v+1]),u(I[k+1][v+1]),u(I[k+1][v]))}}function l(_){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=p(_)/2/Math.PI+.5,C=g(_)/Math.PI+.5;o.push(M,1-C)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],C=o[_+4],P=Math.max(y,M,C),I=Math.min(y,M,C);P>.9&&I<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let _=new L,y=new L,M=new L,C=new L,P=new xe,I=new xe,k=new xe;for(let A=0,v=0;A<r.length;A+=9,v+=6){_.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),P.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),k.set(o[v+4],o[v+5]),C.copy(_).add(y).add(M).divideScalar(3);let T=p(C);x(P,v+0,_,T),x(I,v+2,y,T),x(k,v+4,M,T)}}function x(_,y,M,C){C<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var en=class extends Js{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}},cx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=fx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)d=i[m],u=i[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Pr(r,o,t,a,c,f,0),o}};function Bd(i,e,t,n,s){let r,o;if(s===wx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hd(r,i[r],i[r+1],o);return o&&ra(o,o.next)&&(Lr(o),o=o.next),o}function as(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ra(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&yx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?hx(i,n,s,r):lx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Lr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dx(as(i),e,t),Pr(i,e,t,n,s,r,2)):o===2&&ux(i,e,t,n,s,r):Pr(as(i),e,t,n,s,r,1);break}}}function lx(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Fs(s,a,r,c,o,l,m.x,m.y)&&Nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,g=zc(f,m,e,t,n),_=zc(x,p,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,d,l,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Fs(a,h,c,d,l,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,d,l,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Fs(a,h,c,d,l,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function dx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ra(s,r)&&Gd(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return as(n)}function ux(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mx(o,a)){let c=Vd(o,a);o=as(o,o.next),c=as(c,c.next),Pr(o,e,t,n,s,r,0),Pr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fx(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Bd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vx(l));for(s.sort(px),r=0;r<s.length;r++)t=mx(s[r],t);return t}function px(i,e){return i.x-e.x}function mx(i,e){let t=gx(i,e);if(!t)return e;let n=Vd(t,i);return as(n,n.next),as(t,t.next)}function gx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Fs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Ir(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&xx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function xx(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function yx(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ex(i,e)&&(Ir(i,e)&&Ir(e,i)&&bx(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||ra(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ra(i,e){return i.x===e.x&&i.y===e.y}function Gd(i,e,t,n){let s=So(Nt(i,e,t)),r=So(Nt(i,e,n)),o=So(Nt(t,n,i)),a=So(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&wo(i,t,e)||r===0&&wo(i,n,e)||o===0&&wo(t,i,n)||a===0&&wo(t,e,n))}function wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function So(i){return i>0?1:i<0?-1:0}function Ex(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function bx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vd(i,e){let t=new Fc(i.i,i.x,i.y),n=new Fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(i,e,t,n){let s=new Fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var br=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dd(e),ud(n,e);let o=e.length;t.forEach(dd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ud(n,t[c]);let a=cx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ud(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mn=class i extends Pt{constructor(e=new en([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Sx,y,M=!1,C,P,I,k;g&&(y=g.getSpacedPoints(h),M=!0,u=!1,C=g.computeFrenetFrames(h,!1),P=new L,I=new L,k=new L),u||(p=0,f=0,m=0,x=0);let A=a.extractPoints(l),v=A.shape,T=A.holes;if(!br.isClockWise(v)){v=v.reverse();for(let S=0,te=T.length;S<te;S++){let K=T[S];br.isClockWise(K)&&(T[S]=K.reverse())}}let $=br.triangulateShape(v,T),N=v;for(let S=0,te=T.length;S<te;S++){let K=T[S];v=v.concat(K)}function z(S,te,K){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(te,K)}let B=v.length,Y=$.length;function D(S,te,K){let H,Z,ne,ve=S.x-te.x,be=S.y-te.y,he=K.x-S.x,w=K.y-S.y,E=ve*ve+be*be,j=ve*w-be*he;if(Math.abs(j)>Number.EPSILON){let ie=Math.sqrt(E),ye=Math.sqrt(he*he+w*w),_e=te.x-be/ie,Ye=te.y+ve/ie,We=K.x-w/ye,Re=K.y+he/ye,Ie=((We-_e)*w-(Re-Ye)*he)/(ve*w-be*he);H=_e+ve*Ie-S.x,Z=Ye+be*Ie-S.y;let Ze=H*H+Z*Z;if(Ze<=2)return new xe(H,Z);ne=Math.sqrt(Ze/2)}else{let ie=!1;ve>Number.EPSILON?he>Number.EPSILON&&(ie=!0):ve<-Number.EPSILON?he<-Number.EPSILON&&(ie=!0):Math.sign(be)===Math.sign(w)&&(ie=!0),ie?(H=-be,Z=ve,ne=Math.sqrt(E)):(H=ve,Z=be,ne=Math.sqrt(E/2))}return new xe(H/ne,Z/ne)}let b=[];for(let S=0,te=N.length,K=te-1,H=S+1;S<te;S++,K++,H++)K===te&&(K=0),H===te&&(H=0),b[S]=D(N[S],N[K],N[H]);let O=[],W,oe=b.concat();for(let S=0,te=T.length;S<te;S++){let K=T[S];W=[];for(let H=0,Z=K.length,ne=Z-1,ve=H+1;H<Z;H++,ne++,ve++)ne===Z&&(ne=0),ve===Z&&(ve=0),W[H]=D(K[H],K[ne],K[ve]);O.push(W),oe=oe.concat(W)}for(let S=0;S<p;S++){let te=S/p,K=f*Math.cos(te*Math.PI/2),H=m*Math.sin(te*Math.PI/2)+x;for(let Z=0,ne=N.length;Z<ne;Z++){let ve=z(N[Z],b[Z],H);Te(ve.x,ve.y,-K)}for(let Z=0,ne=T.length;Z<ne;Z++){let ve=T[Z];W=O[Z];for(let be=0,he=ve.length;be<he;be++){let w=z(ve[be],W[be],H);Te(w.x,w.y,-K)}}}let me=m+x;for(let S=0;S<B;S++){let te=u?z(v[S],oe[S],me):v[S];M?(I.copy(C.normals[0]).multiplyScalar(te.x),P.copy(C.binormals[0]).multiplyScalar(te.y),k.copy(y[0]).add(I).add(P),Te(k.x,k.y,k.z)):Te(te.x,te.y,0)}for(let S=1;S<=h;S++)for(let te=0;te<B;te++){let K=u?z(v[te],oe[te],me):v[te];M?(I.copy(C.normals[S]).multiplyScalar(K.x),P.copy(C.binormals[S]).multiplyScalar(K.y),k.copy(y[S]).add(I).add(P),Te(k.x,k.y,k.z)):Te(K.x,K.y,d/h*S)}for(let S=p-1;S>=0;S--){let te=S/p,K=f*Math.cos(te*Math.PI/2),H=m*Math.sin(te*Math.PI/2)+x;for(let Z=0,ne=N.length;Z<ne;Z++){let ve=z(N[Z],b[Z],H);Te(ve.x,ve.y,d+K)}for(let Z=0,ne=T.length;Z<ne;Z++){let ve=T[Z];W=O[Z];for(let be=0,he=ve.length;be<he;be++){let w=z(ve[be],W[be],H);M?Te(w.x,w.y+y[h-1].y,y[h-1].x+K):Te(w.x,w.y,d+K)}}}G(),ue();function G(){let S=s.length/3;if(u){let te=0,K=B*te;for(let H=0;H<Y;H++){let Z=$[H];F(Z[2]+K,Z[1]+K,Z[0]+K)}te=h+p*2,K=B*te;for(let H=0;H<Y;H++){let Z=$[H];F(Z[0]+K,Z[1]+K,Z[2]+K)}}else{for(let te=0;te<Y;te++){let K=$[te];F(K[2],K[1],K[0])}for(let te=0;te<Y;te++){let K=$[te];F(K[0]+B*h,K[1]+B*h,K[2]+B*h)}}n.addGroup(S,s.length/3-S,0)}function ue(){let S=s.length/3,te=0;Me(N,te),te+=N.length;for(let K=0,H=T.length;K<H;K++){let Z=T[K];Me(Z,te),te+=Z.length}n.addGroup(S,s.length/3-S,1)}function Me(S,te){let K=S.length;for(;--K>=0;){let H=K,Z=K-1;Z<0&&(Z=S.length-1);for(let ne=0,ve=h+p*2;ne<ve;ne++){let be=B*ne,he=B*(ne+1),w=te+H+be,E=te+Z+be,j=te+Z+he,ie=te+H+he;q(w,E,j,ie)}}}function Te(S,te,K){c.push(S),c.push(te),c.push(K)}function F(S,te,K){pe(S),pe(te),pe(K);let H=s.length/3,Z=_.generateTopUV(n,s,H-3,H-2,H-1);fe(Z[0]),fe(Z[1]),fe(Z[2])}function q(S,te,K,H){pe(S),pe(te),pe(H),pe(te),pe(K),pe(H);let Z=s.length/3,ne=_.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);fe(ne[0]),fe(ne[1]),fe(ne[3]),fe(ne[1]),fe(ne[2]),fe(ne[3])}function pe(S){s.push(c[S*3+0]),s.push(c[S*3+1]),s.push(c[S*3+2])}function fe(S){r.push(S.x),r.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ko[s.type]().fromJSON(s)),new i(n,e.options)}},Sx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new xe(r,o),new xe(a,c),new xe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new xe(o,1-c),new xe(l,1-d),new xe(u,1-m),new xe(x,1-g)]:[new xe(a,1-c),new xe(h,1-d),new xe(f,1-m),new xe(p,1-g)]}};function Tx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends kc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Rn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let _=[],y=g/n,M=0;g===0&&o===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let P=C/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(P+M,1-y),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let y=h[g][_+1],M=h[g][_],C=h[g+1][_],P=h[g+1][_+1];(g!==0||o>0)&&f.push(y,M,P),(g!==n-1||c<Math.PI)&&f.push(M,C,P)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zi=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,_=(s+1)*f+m;o.push(x,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class i extends Pt{constructor(e=new $o(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new xe,h=new L,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function x(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),_(),g()}function p(y){h=e.getPointAt(y/t,h);let M=o.normals[y],C=o.binormals[y];for(let P=0;P<=s;P++){let I=P/s*Math.PI*2,k=Math.sin(I),A=-Math.cos(I);c.x=A*M.x+k*C.x,c.y=A*M.y+k*C.y,c.z=A*M.z+k*C.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let C=(s+1)*(y-1)+(M-1),P=(s+1)*y+(M-1),I=(s+1)*y+M,k=(s+1)*(y-1)+M;m.push(C,P,k),m.push(P,I,k)}}function _(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)l.x=y/t,l.y=M/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ko[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Oe=class extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function To(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=e,a=2*t-n;break;case xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:o=e,c=2*n-t;break;case xh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,M=f*p-f*x;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+_*o[l+C]+y*o[c+C]+M*o[d+C];return r}},Hc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Bc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ax(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[u+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Co;var ls=class extends Kn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ro;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Kn{};Gc.prototype.ValueTypeName="color";var Vc=class extends Kn{};Vc.prototype.ValueTypeName="number";var Wc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)ri.slerpFlat(r,0,o,l-a,o,l,c);return r}},Dr=class extends Kn{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Co;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Kn{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ro;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Kn{};Xc.prototype.ValueTypeName="vector";var Yc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Rx=new Yc,qc=class{constructor(e){this.manager=e!==void 0?e:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},kr=class extends Ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rc=new lt,fd=new L,pd=new L,Qo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var md=new lt,_r=new L,oc=new L,Zc=class extends Qo{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md)}},zr=class extends Ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends Qo{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ea=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rl="\\[\\]\\.:\\/",Cx=new RegExp("["+rl+"]","g"),ol="[^"+rl+"]",Px="[^"+rl.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",ol),Lx=/(WCOD+)?/.source.replace("WCOD",Px),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),Ux=new RegExp("^"+Ix+Lx+Nx+Dx+"$"),kx=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){let t=Ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Jc;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z2=new Float32Array(1);var gd=new lt,ta=class{constructor(e,t,n=0,s=1/0){this.ray=new Fo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(e,t=!0,n=[]){return Kc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kc(e[s],this,n,t);return n.sort(xd),n}};function xd(i,e){return i.distance-e.distance}function Kc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Kc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);var Wd={cellMeters:1.25,levelMeters:2.5,grid:[66,56],modules:{0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B",1:"\u0410\u043D\u0433\u0430\u0440",2:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",3:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",4:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",6:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",7:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",8:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",9:"\u0416\u0438\u043B\u0430\u044F",10:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"},zones:[{key:"hangar",module:1,name:"\u0410\u043D\u0433\u0430\u0440",x:0,y:0,width:27,height:20},{key:"industry",module:2,name:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",x:27,y:0,width:16,height:20},{key:"support",module:3,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:46,y:0,width:10,height:20},{key:"military",module:4,name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",x:0,y:23,width:24,height:14},{key:"labs",module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",x:27,y:23,width:16,height:14},{key:"isolator",module:6,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:46,y:23,width:10,height:14},{key:"medical",module:7,name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",x:0,y:40,width:13,height:16},{key:"domestic",module:8,name:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",x:16,y:40,width:12,height:16},{key:"living",module:9,name:"\u0416\u0438\u043B\u0430\u044F",x:31,y:40,width:25,height:16},{key:"sport",module:10,name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F",x:59,y:40,width:7,height:16}],rooms:[{module:1,zone:"hangar",name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:0,width:20,height:20,levels:4,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,zone:"hangar",name:"\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:0,width:4,height:17,levels:4,kind:"room",note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:1,zone:"hangar",name:"\u041A\u041F\u041F",x:20,y:17,width:4,height:3,levels:1,kind:"room",note:"\u043F\u043E\u0441\u0442 \u0443 \u0448\u043B\u044E\u0437\u0430 \u0430\u043D\u0433\u0430\u0440\u0430"},{module:1,zone:"hangar",name:"\u041F\u0440\u043E\u0435\u0437\u0434 \u043A \u0446\u0435\u0445\u0443",x:24,y:0,width:3,height:17,levels:1,kind:"corridor",note:"K7 \u0438\u0437 \u0430\u043D\u0433\u0430\u0440\u0430 \u0432 \u0446\u0435\u0445, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u043A \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0430\u0437\u0435"},{module:1,zone:"hangar",name:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0433\u0430\u0440\u0430",x:24,y:17,width:3,height:3,levels:1,kind:"airlock",note:"\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u0437\u0434 \u0438 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440 H1, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438"},{module:2,zone:"industry",name:"\u0426\u0435\u0445 (\u0441\u0442\u0435\u043D\u0434 K7)",x:27,y:5,width:11,height:10,levels:2,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u043A\u0440\u0430\u043D-\u0431\u0430\u043B\u043A\u0430, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u044B\u0441\u043E\u0442\u0430 2 \u0443\u0440\u043E\u0432\u043D\u044F"},{module:2,zone:"industry",name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:27,y:0,width:6,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",x:33,y:0,width:5,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:38,y:0,width:5,height:5,levels:1,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,zone:"industry",name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:38,y:5,width:5,height:5,levels:1,kind:"room",note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u0438\u0444\u0442\u0430"},{module:2,zone:"industry",name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:38,y:10,width:5,height:5,levels:1,kind:"room",note:"\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B"},{module:2,zone:"industry",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:15,width:16,height:2,levels:1,kind:"corridor",note:""},{module:2,zone:"industry",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",x:27,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0428\u043B\u044E\u0437",x:33,y:17,width:4,height:3,levels:1,kind:"airlock",note:""},{module:2,zone:"industry",name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 K7",x:37,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:0,width:2,height:20,levels:1,kind:"corridor",note:""},{module:3,zone:"support",name:"\u041F\u043E\u0441\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0430",x:48,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0431\u043B\u043E\u043A\u0430, \u0441\u0432\u044F\u0437\u044C \u0441 \u044F\u0440\u0443\u0441\u043E\u043C \u22125"},{module:3,zone:"support",name:"\u041B\u0438\u0444\u0442 \u043A \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0443",x:52,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0444\u0442 \u043D\u0430 \u044F\u0440\u0443\u0441 \u22125"},{module:3,zone:"support",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440",x:48,y:4,width:8,height:5,levels:1,kind:"room",note:"\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0449\u0438\u0442\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"},{module:3,zone:"support",name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B",x:48,y:9,width:8,height:5,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u0412\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435",x:48,y:14,width:8,height:6,levels:1,kind:"room",note:""},{module:4,zone:"military",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",x:0,y:23,width:9,height:6,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442\u044B, \u043A\u0430\u0440\u0442\u0430-\u0433\u043B\u043E\u0431\u0443\u0441, \u0441\u0432\u044F\u0437\u044C"},{module:4,zone:"military",name:"\u0411\u0440\u0438\u0444\u0438\u043D\u0433",x:9,y:23,width:5,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B, \u044D\u043A\u0440\u0430\u043D"},{module:4,zone:"military",name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:14,y:23,width:6,height:6,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0431\u043E\u0439\u0446\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,zone:"military",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:29,width:20,height:2,levels:1,kind:"corridor",note:""},{module:4,zone:"military",name:"\u0423\u0437\u0435\u043B \u0441\u0432\u044F\u0437\u0438",x:20,y:23,width:4,height:5,levels:1,kind:"room",note:"\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u044F\u0437\u0438, \u0440\u0430\u0434\u0430\u0440\u044B"},{module:4,zone:"military",name:"\u0428\u043B\u044E\u0437",x:20,y:28,width:4,height:4,levels:1,kind:"airlock",note:""},{module:4,zone:"military",name:"\u0414\u0435\u0436\u0443\u0440\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C",x:20,y:32,width:4,height:5,levels:1,kind:"room",note:"\u0434\u0435\u0436\u0443\u0440\u043D\u044B\u0439 \u043E\u0444\u0438\u0446\u0435\u0440 \u043F\u043E \u0431\u0430\u0437\u0435 \u0438 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u043A\u0430\u043C\u0435\u0440"},{module:4,zone:"military",name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:0,y:31,width:7,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u0441 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,zone:"military",name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:8,y:31,width:5,height:5,levels:1,kind:"room",note:"\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C"},{module:4,zone:"military",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0438\u043A\u0430",x:14,y:31,width:6,height:6,levels:1,kind:"room",note:"\u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0440\u0443\u0436\u0438\u044F"},{module:5,zone:"labs",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0443\u0447\u0451\u043D\u044B\u0445",x:27,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B, \u0448\u043A\u0430\u0444\u044B"},{module:5,zone:"labs",name:"\u0428\u043B\u044E\u0437",x:33,y:23,width:4,height:3,levels:1,kind:"airlock",note:""},{module:5,zone:"labs",name:"\u041F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F",x:37,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B"},{module:5,zone:"labs",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:26,width:16,height:2,levels:1,kind:"corridor",note:""},{module:5,zone:"labs",name:"\u0425\u0438\u043C\u0438\u043A\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:27,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u044B, \u0445\u0440\u043E\u043C\u0430\u0442\u043E\u0433\u0440\u0430\u0444, \u0441\u043F\u0435\u043A\u0442\u0440\u043E\u043C\u0435\u0442\u0440"},{module:5,zone:"labs",name:"\u041A\u0441\u0435\u043D\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:32,y:28,width:6,height:9,levels:1,kind:"room",note:"\u0431\u043E\u043A\u0441\u044B \u0431\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F\u044B, \u0441\u0442\u043E\u043B \u0434\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F"},{module:5,zone:"labs",name:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:38,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439, \u043E\u0441\u0446\u0438\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},{module:6,zone:"isolator",name:"\u0428\u043B\u044E\u0437 \u0441\u0430\u043D\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438",x:46,y:23,width:4,height:4,levels:1,kind:"airlock",note:"\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0432\u0445\u043E\u0434\u043E\u043C \u043A \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C"},{module:6,zone:"isolator",name:"\u041F\u043E\u0441\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",x:50,y:23,width:6,height:4,levels:1,kind:"room",note:"\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u0431\u043E\u043A\u0441\u043E\u0432"},{module:6,zone:"isolator",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:27,width:2,height:10,levels:1,kind:"corridor",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 1",x:48,y:27,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 2",x:48,y:30,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 3",x:48,y:33,width:8,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u0438\u0451\u043C\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",x:0,y:40,width:5,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F, \u0430\u043F\u0442\u0435\u043A\u0430",x:5,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0432\u0440\u0430\u0447\u0430",x:9,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:44,width:13,height:2,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:6,y:46,width:2,height:10,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F",x:0,y:46,width:6,height:5,levels:1,kind:"room",note:"\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B, \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A, \u043D\u0430\u0440\u043A\u043E\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-1",x:0,y:51,width:6,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:7,zone:"medical",name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",x:8,y:46,width:5,height:5,levels:1,kind:"room",note:"\u0440\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-2",x:8,y:51,width:5,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:8,zone:"domestic",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0438 \u043E\u0442\u0434\u044B\u0445",x:16,y:40,width:8,height:7,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B \u043D\u0430 16 \u043C\u0435\u0441\u0442, \u0434\u0438\u0432\u0430\u043D\u044B"},{module:8,zone:"domestic",name:"\u041A\u0430\u043C\u0431\u0443\u0437",x:24,y:40,width:4,height:5,levels:1,kind:"room",note:"\u043F\u043B\u0438\u0442\u0430, \u043C\u043E\u0439\u043A\u0430, \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u043E\u0441\u0442\u0440\u043E\u0432"},{module:8,zone:"domestic",name:"\u041F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434",x:24,y:45,width:4,height:2,levels:1,kind:"room",note:""},{module:8,zone:"domestic",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:16,y:47,width:12,height:2,levels:1,kind:"corridor",note:""},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 1 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:16,y:49,width:6,height:7,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 2 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:22,y:49,width:6,height:4,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F",x:22,y:53,width:6,height:3,levels:1,kind:"room",note:""},{module:10,zone:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",x:59,y:40,width:7,height:11,levels:1,kind:"room",note:"\u0434\u043E\u0440\u043E\u0436\u043A\u0438, \u0432\u0435\u043B\u043E\u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u044B, \u0441\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438, \u0448\u0442\u0430\u043D\u0433\u0438, \u043C\u0430\u0442\u044B"},{module:10,zone:"sport",name:"\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0434\u0443\u0448\u0435\u0432\u044B\u0435",x:59,y:51,width:7,height:5,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0441\u043A\u0430\u043C\u044C\u0438, \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:44,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 1",x:31,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 2",x:35,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 3",x:39,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 4",x:43,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 5",x:47,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 6",x:51,y:40,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 7",x:31,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 8",x:35,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 9",x:39,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 10",x:43,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 11",x:47,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 12",x:51,y:52,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B",x:31,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041D\u0430\u0447. \u0448\u0442\u0430\u0431\u0430",x:34,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u043E\u043C. \u043E\u0442\u0440\u044F\u0434\u0430",x:37,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0432\u0440\u0430\u0447",x:40,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0425\u0438\u0440\u0443\u0440\u0433",x:43,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0443\u0447\u0451\u043D\u044B\u0439",x:46,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0438\u043D\u0436\u0435\u043D\u0435\u0440",x:49,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 13",x:52,y:46,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"}],corridors:[{name:"H1",x:0,y:20,width:56,height:3,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"H2",x:0,y:37,width:59,height:3,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V1",x:24,y:23,width:3,height:14,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V2",x:43,y:0,width:3,height:20,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V2",x:43,y:23,width:3,height:14,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V3",x:13,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V4",x:28,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V5",x:56,y:40,width:3,height:16,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"}],thickWalls:[{x:7,y:31,width:1,height:6},{x:13,y:31,width:1,height:6},{x:8,y:36,width:5,height:1}],doors:[{x:23,y:8,side:"E",size:3,kind:"gate",airlock:-1},{x:24,y:17,side:"N",size:3,kind:"gate",airlock:4},{x:24,y:19,side:"S",size:3,kind:"gate",airlock:4},{x:27,y:9,side:"W",size:3,kind:"gate",airlock:-1},{x:39,y:9,side:"S",size:3,kind:"gate",airlock:-1},{x:33,y:19,side:"S",size:3,kind:"gate",airlock:13},{x:33,y:17,side:"N",size:3,kind:"gate",airlock:13},{x:23,y:29,side:"E",size:3,kind:"gate",airlock:26},{x:20,y:29,side:"W",size:2,kind:"gate",airlock:26},{x:33,y:23,side:"N",size:3,kind:"gate",airlock:32},{x:33,y:25,side:"S",size:3,kind:"gate",airlock:32},{x:46,y:24,side:"W",size:3,kind:"gate",airlock:38},{x:46,y:26,side:"S",size:2,kind:"gate",airlock:38},{x:28,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:4,side:"S",size:3,kind:"gate",airlock:-1},{x:28,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:35,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:39,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:52,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:6,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:11,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:16,side:"W",size:1,kind:"door",airlock:-1},{x:46,y:19,side:"S",size:2,kind:"double",airlock:-1},{x:46,y:17,side:"W",size:1,kind:"door",airlock:-1},{x:23,y:18,side:"E",size:1,kind:"door",airlock:-1},{x:4,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:11,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:16,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:20,y:25,side:"W",size:1,kind:"door",airlock:-1},{x:3,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:10,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:21,y:32,side:"N",size:1,kind:"door",airlock:-1},{x:29,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:39,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:34,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:24,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:28,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:31,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:34,side:"W",size:1,kind:"door",airlock:-1},{x:2,y:40,side:"N",size:1,kind:"door",airlock:-1},{x:2,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:6,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:10,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:12,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:5,y:48,side:"E",size:1,kind:"door",airlock:-1},{x:5,y:53,side:"E",size:1,kind:"door",airlock:-1},{x:8,y:48,side:"W",size:1,kind:"door",airlock:-1},{x:8,y:53,side:"W",size:1,kind:"door",airlock:-1},{x:19,y:40,side:"N",size:2,kind:"double",airlock:-1},{x:19,y:46,side:"S",size:1,kind:"door",airlock:-1},{x:24,y:42,side:"W",size:1,kind:"door",airlock:-1},{x:25,y:45,side:"N",size:1,kind:"door",airlock:-1},{x:18,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:53,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:47,side:"W",size:2,kind:"double",airlock:-1},{x:27,y:47,side:"E",size:2,kind:"double",airlock:-1},{x:31,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:31,y:50,side:"W",size:2,kind:"double",airlock:-1},{x:55,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:55,y:50,side:"E",size:2,kind:"double",airlock:-1},{x:59,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:59,y:52,side:"W",size:1,kind:"door",airlock:-1},{x:61,y:51,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:36,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:52,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:35,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:38,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:41,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:47,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:53,y:46,side:"N",size:1,kind:"door",airlock:-1}],cells:{1:540,2:320,3:200,4:319,5:224,6:140,7:208,8:192,10:112,9:400,0:633},total:3288};function zx(i,e){let t=e==="N"||e==="S"?i.width:i.height,n=e==="N"||e==="S"?i.height:i.width,a={back:{N:"S",S:"N",W:"E",E:"W"}[e],front:e,left:e==="N"||e==="S"?"W":"N",right:e==="N"||e==="S"?"E":"S"};return{across:t,depth:n,faces:a,cell:(l,h,d=1,u=1)=>e==="S"?[i.x+l,i.y+h,d,u]:e==="N"?[i.x+l,i.y+i.height-h-u,d,u]:e==="E"?[i.x+h,i.y+l,u,d]:[i.x+i.width-h-u,i.y+l,u,d]}}function Xd(i,e){let t=r=>i.doors.find(o=>o.size===1&&o.x>=r.x&&o.x<r.x+r.width&&o.y>=r.y&&o.y<r.y+r.height),n=(r,o,a,c,l,h,d,u={})=>{let[f,m,x,p]=r.cell(a,c,l,h);e(o,f,m,x,p,{face:r.faces[d]||d,...u})},s=["64,82,110","110,64,58","70,96,70","120,100,60","80,70,110"];i.rooms.filter(r=>r.zone==="living"&&r.kind!=="corridor").forEach((r,o)=>{let a=t(r),c=zx(r,a.side),l=s[o%s.length];if(r.kind==="single"){n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"nightstand",0,2,1,1,"left"),n(c,"deskChair",2,0,1,1,"right",{seed:o}),n(c,"wardrobe",2,3,1,1,"right"),r.name==="\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B"?n(c,"safe",2,1,1,1,"right"):n(c,"shelf",2,1,1,1,"right");return}let h=c.across-1;n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"bed",h,0,1,2,"back",{color:s[(o+2)%s.length]}),n(c,"nightstand",0,2,1,1,"left"),n(c,"nightstand",h,2,1,1,"right"),n(c,"cabinTable",1,0,2,1,"back"),n(c,"wardrobe",0,3,1,1,"left"),n(c,"wardrobe",h,3,1,1,"right"),c.across===5&&n(c,"shelf",3,0,1,1,"back")}),e("liftPlatform",0,0,20,20,{blocks:!1}),e("barrels",20,0),e("barrels",21,0),e("generator",22,0,2,2),e("crate",20,2),e("crate",21,2),e("console",23,3),e("crate",22,14),e("crate",23,14),e("crate",23,15),e("rack",20,15),e("console",20,17,1,1),e("console",21,17,1,1),e("deskChair",20,19,1,1,{face:"S",seed:3}),e("locker",22,19),e("repairStand",31,8,4,4,{blocks:!1}),e("machineTool",30,5,2,1,{face:"N"}),e("machineTool",32,5,2,1,{face:"N"}),e("desk",36,5,2,1),e("rack",37,7),e("rack",37,8),e("rack",37,12),e("crate",36,13),e("crate",37,13),e("generator",34,13,2,2),e("console",27,5);for(let r of[27,29,30,31,32])e("rack",r,0);e("crate",30,2),e("crate",31,2),e("crate",32,2),e("crate",32,3),e("crate",27,3),e("desk",33,0,2,1),e("machineTool",36,0,2,1,{face:"N"}),e("rack",37,2),e("rack",37,3),e("cabinet",33,3),e("liftPlatform",38,0,5,5,{blocks:!1}),e("crate",42,0),e("crate",38,5),e("crate",42,5),e("crate",42,6),e("crate",38,9),e("console",38,7,1,1);for(let r of[10,11,12,13])e("rack",38,r),e("rack",42,r);e("crate",38,14),e("crate",42,14),e("instrumentRack",27,17,1,1,{face:"W",seed:2}),e("desk",30,19,2,1),e("console",32,18),e("labTable",27,19,2,1),e("cabinet",31,17);for(let r of[41,42])e("rack",r,17),e("rack",r,19);e("crate",37,19),e("crate",38,19),e("crate",37,17),e("console",49,0),e("console",50,0),e("console",51,0),e("deskChair",51,3,1,1,{face:"E",seed:5}),e("cabinet",48,3),e("liftPlatform",53,0,3,3,{blocks:!1}),e("console",52,3),e("generator",50,4,2,2),e("generator",53,4,2,2),e("cabinet",55,6),e("cabinet",55,7),e("cabinet",55,8),e("instrumentRack",50,8,1,1,{face:"S"}),e("acUnit",50,9,2,1),e("acUnit",53,9,2,1),e("acUnit",50,12,2,1),e("acUnit",53,12,2,1),e("barrels",55,11),e("tank",50,14,2,3),e("tank",53,14,2,3),e("barrels",55,18),e("barrels",55,19),e("console",50,19);for(let r of[1,2,3,5,6,7])e("console",r,23);e("console",0,25,1,1),e("console",0,26,1,1),e("commandTable",3,25,2,2,{face:"N"}),e("wallScreen",8,25,1,2,{face:"E",seed:4}),e("deskChair",8,27,1,1,{face:"E",seed:6}),e("wallScreen",10,23,3,1,{face:"N",seed:7}),e("chairRow",10,25,3,1,{face:"S"}),e("chairRow",10,26,3,1,{face:"S"});for(let r of[14,15,17,18,19])e("locker",r,23);e("locker",14,24),e("locker",14,25),e("locker",14,26),e("bench",16,25,3,1,{face:"N"}),e("console",21,23),e("console",22,23),e("console",23,23),e("instrumentRack",23,25,1,1,{face:"E",seed:3}),e("instrumentRack",23,26,1,1,{face:"E",seed:5}),e("cabinet",23,27),e("console",20,36,1,1),e("console",21,36,1,1),e("console",22,36,1,1),e("deskChair",23,33,1,1,{face:"E",seed:8}),e("wallScreen",20,33,1,2,{face:"W",seed:2}),e("locker",23,35);for(let r of[32,33,34,35])e("gunRack",0,r,1,1,{face:"W"});for(let r of[1,2,4,5])e("gunRack",r,36,1,1,{face:"S"});e("desk",5,32,2,1),e("locker",6,34),e("locker",6,35);for(let r of[8,9,11,12])for(let o of[32,33,35])e("crate",r,o);e("desk",14,33,1,2),e("machineTool",14,36,2,1,{face:"S"}),e("gunRack",19,33,1,1,{face:"E"}),e("gunRack",19,34,1,1,{face:"E"}),e("labTable",17,35,2,1),e("cabinet",19,36),e("deskChair",27,23,1,1,{face:"N",seed:1}),e("deskChair",28,23,1,1,{face:"N",seed:2}),e("deskChair",30,23,1,1,{face:"N",seed:3}),e("deskChair",31,23,1,1,{face:"N",seed:4}),e("shelf",32,24,1,1,{face:"E"}),e("shelf",32,25,1,1,{face:"E"});for(let r of[37,38,40,41,42])e("instrumentRack",r,23,1,1,{face:"N",seed:r});e("labTable",41,25,2,1),e("fumeHood",27,30,1,1,{face:"W"}),e("fumeHood",27,31,1,1,{face:"W"}),e("fumeHood",27,33,1,1,{face:"W"}),e("labTable",29,31,1,2),e("instrumentRack",31,30,1,1,{face:"E",seed:6}),e("instrumentRack",31,31,1,1,{face:"E",seed:7}),e("cabinet",27,35),e("cabinet",28,36),e("freezer",31,36,1,1,{face:"S"}),e("bioCabinet",32,30,1,1,{face:"W"}),e("bioCabinet",32,31,1,1,{face:"W"}),e("opTable",34,32,1,2,{face:"N"}),e("medCart",35,32,1,1,{face:"E"}),e("labTable",37,30,1,2),e("specimenTank",36,35),e("specimenTank",37,35),e("freezer",32,35,1,1,{face:"W"}),e("freezer",32,36,1,1,{face:"W"}),e("testRig",39,32,2,2,{face:"N"}),e("instrumentRack",42,30,1,1,{face:"E",seed:8}),e("instrumentRack",42,31,1,1,{face:"E",seed:9}),e("instrumentRack",42,34,1,1,{face:"E",seed:10}),e("labTable",38,30,1,2),e("desk",38,36,2,1),e("console",52,23),e("console",53,23),e("console",54,23),e("wallScreen",55,24,1,2,{face:"E",seed:5});for(let[r,o]of[[51,28],[53,28],[55,28],[51,31],[53,31],[55,31],[52,34],[54,35]])e("specimenTank",r,o);e("cabinet",55,27),e("freezer",55,33,1,1,{face:"E"}),e("medBed",0,41,1,2,{face:"W",monitor:!1}),e("deskChair",4,40,1,1,{face:"N",seed:2}),e("cabinet",4,42);for(let r of[5,7,8])e("cabinet",r,40);e("medBed",8,41,1,2,{face:"E",monitor:!1}),e("deskChair",11,40,1,1,{face:"N",seed:9}),e("cabinet",12,40),e("shelf",9,40,1,1,{face:"N"}),e("medBed",12,41,1,2,{face:"E",monitor:!1}),e("opTable",2,47,1,2,{face:"N"}),e("medCart",3,47,1,1,{face:"E"}),e("medCart",1,49,1,1,{face:"W"}),e("cabinet",0,46),e("cabinet",1,46),e("cabinet",0,50);for(let r of[51,53,55])e("medBed",0,r,2,1,{face:"W"});e("cabinet",5,51),e("medBed",11,46,2,1,{face:"E"}),e("medBed",11,48,2,1,{face:"E"}),e("medCart",12,50,1,1,{face:"E"}),e("cabinet",8,46);for(let r of[51,53,55])e("medBed",11,r,2,1,{face:"E"});e("diningTable",16,41,2,2,{face:"N"}),e("diningTable",21,41,2,2,{face:"N"}),e("diningTable",16,43,2,2,{face:"N"}),e("diningTable",21,43,2,2,{face:"N"}),e("servingCounter",23,40,1,1,{face:"E"}),e("servingCounter",23,41,1,1,{face:"E"}),e("sofa",16,46,2,1,{face:"S"}),e("sofa",21,46,2,1,{face:"S",color:"70,84,96"}),e("wallScreen",16,40,2,1,{face:"N",seed:6}),e("galleyFloor",24,40,4,5,{blocks:!1,drain:[3.6,1.4,3.7,5.8]}),e("galleyCounter",24,40,1,1,{face:"N",variant:"drawers",upper:!0}),e("galleyRange",25,40,1,1,{face:"N"}),e("galleyCounter",26,40,1,1,{face:"N",variant:"doors",upper:!0}),e("galleyFridge",27,40,1,1,{face:"N"}),e("galleyCounter",27,41,1,1,{face:"E",variant:"sink2"}),e("galleyCounter",27,42,1,1,{face:"E",variant:"drawers"}),e("galleyCounter",27,43,1,1,{face:"E",variant:"microwave"}),e("galleyCounter",27,44,1,1,{face:"S",variant:"grinder"}),e("galleyCounter",26,44,1,1,{face:"S",variant:"doors"}),e("galleyIsland",26,41,1,2),e("rack",24,46),e("rack",26,46),e("rack",27,46),e("crate",27,45);for(let r of[16,17,19,20,21])e("washbasin",r,49,1,1,{face:"N"});for(let r of[51,52,53,54,55])e("showerCabin",16,r,1,1,{face:"W"}),e("toilet",21,r,1,1,{face:"E"});e("bench",18,52,1,3,{face:"W"});for(let r of[22,23,25])e("washbasin",r,49,1,1,{face:"N"});for(let r of[50,51,52])e("showerCabin",27,r,1,1,{face:"E"});e("toilet",22,51,1,1,{face:"W"}),e("toilet",22,52,1,1,{face:"W"});for(let r of[25,26,27])e("washer",r,55,1,1,{face:"S"});e("washer",22,55,1,1,{face:"S"}),e("labTable",27,53,1,1),e("rack",22,53);for(let r of[59,60,61])e("treadmill",r,40,1,2,{face:"N"});for(let[r,o]of[[64,40],[65,40],[64,41],[65,41]])e("exerciseBike",r,o,1,1,{face:"N"});e("powerRack",64,44,2,2,{face:"E"}),e("weightBench",64,47,1,2,{face:"N"}),e("dumbbellRack",65,47,1,2,{face:"E"}),e("gymMat",60,47,3,2,{blocks:!1}),e("punchingBag",63,50),e("punchingBag",59,50),e("wallScreen",62,40,1,1,{face:"N",seed:1});for(let r of[59,60,61,62,63])e("locker",r,55);e("bench",60,53,3,1,{face:"N"});for(let r of[63,64,65])e("showerCabin",r,51,1,1,{face:"N"});e("showerCabin",65,52,1,1,{face:"E"}),e("washbasin",65,54,1,1,{face:"E"}),e("washbasin",65,55,1,1,{face:"E"})}var Jt={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function Yd(i){let{TILES:e,LEVEL_H:t,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:c,building:l,stairRun:h,tiltrotor:d,block:u,surface:f,marking:m,floorStyle:x}=i,p=(b,O,W,oe,me)=>{for(let G=Math.max(0,O);G<=Math.min(e-1,oe);G++)for(let ue=Math.max(0,b);ue<=Math.min(e-1,W);ue++)f[G][ue]=me},g=(b,O,W,oe)=>{for(let me=0;me<e;me++)for(let G=0;G<e;G++)Math.hypot(G+.5-b,me+.5-O)<=W&&(f[me][G]=oe)},_=(b,O)=>b===0?"g":b===O-1?"t":"u",y=(b,O,W)=>`${b}_${_(O,W)}`;p(0,0,e-1,e-1,Jt.grass),p(0,27,e-1,30,Jt.sidewalk),p(0,31,e-1,48,Jt.asphalt),p(0,49,e-1,52,Jt.sidewalk);for(let b=0;b<e;b++)b%4<2&&(b<44||b>48)&&(m[40][b]="dash");for(let b=31;b<=48;b++)for(let O=44;O<=48;O++)m[b][O]="zebra";function M(b,O,W,oe,me,G,ue,Me,Te={}){let F=l({name:b,col0:O,row0:W,col1:oe,row1:me,levels:G,style:ue});for(let H=0;H<G;H++){r(H,O,W,oe,me),H>0&&s(H,O,W,oe,me,n.interior);for(let ne=W;ne<=me;ne++)for(let ve=O;ve<=oe;ve++)x[H][ne][ve]=Te.floor||"parquet";let Z=y(ue,H,G);for(let ne=W;ne<=me;ne++)o(H,O,ne,"wall",Z),o(H,oe+1,ne,"wall",Z);for(let ne=O;ne<=oe;ne++)a(H,ne,W,"wall",Z),a(H,ne,me+1,"wall",Z);for(let ne=O+1;ne<oe;ne++)(ne-O)%2===1&&(a(H,ne,W,"window",Z),a(H,ne,me+1,"window",Z));for(let ne=W+1;ne<me;ne++)(ne-W)%2===1&&(o(H,O,ne,"window",Z),o(H,oe+1,ne,"window",Z))}c("roof",G,O,W,oe-O+1,me-W+1,{blocks:!1,type:Te.roof||"tile",facade:ue});let q=Math.floor((O+oe)/2),pe=Me==="S"?me+1:W,fe=Me==="S"?W:me+1,S=y(ue,0,G);a(0,q+1,pe,"door",S),Te.backDoor!==!1&&a(0,q+1,fe,"door",S);let te=Me==="S"?W+1:me-5;C(q-1,te,G-1,ue);let K=Math.floor((W+me)/2)+1;for(let H=0;H<G;H++){for(let ne=W;ne<=me;ne++)o(H,q-1,ne,"wall","inner"),o(H,q+2,ne,"wall","inner");for(let ne=O;ne<q-1;ne++)a(H,ne,K,"wall","inner");for(let ne=q+2;ne<=oe;ne++)a(H,ne,K,"wall","inner");[{col0:O,col1:q-2,row0:W,row1:K-1,side:"W"},{col0:O,col1:q-2,row0:K,row1:me,side:"W"},{col0:q+2,col1:oe,row0:W,row1:K-1,side:"E"},{col0:q+2,col1:oe,row0:K,row1:me,side:"E"}].forEach((ne,ve)=>{let be=[];for(let w=ne.row0+1;w<ne.row1;w++)(w<te||w>te+4)&&be.push(w);let he=be.length?be[Math.floor(be.length/2)]:ne.row0;ne.side==="W"?o(H,q-1,he,"door","inner"):o(H,q+2,he,"door","inner"),Te.furnish!==!1&&I(H,ne,ne.side==="W"?[ne.col1,he]:[ne.col0,he],(ve+H+O)%4)})}return{...F,midCol:q,stairRow:te,front:pe,back:fe}}function C(b,O,W,oe){let me=[];for(let G=0;G<W;G++)G%2===0?(h(G,b,O+3,0,-1,3,"classic"),me.push({level:G,col:b,cells:[O+3,O+2,O+1],exit:[b,O]})):(h(G,b+1,O+1,0,1,3,"classic"),me.push({level:G,col:b+1,cells:[O+1,O+2,O+3],exit:[b+1,O+4]}));for(let G of me){let ue=G.level+1,Me=(Te,F)=>Te===G.col&&G.cells.includes(F);for(let Te of G.cells){let F=[[G.col-1,Te,"W",G.col,Te],[G.col+1,Te,"W",G.col+1,Te],[G.col,Te-1,"N",G.col,Te],[G.col,Te+1,"N",G.col,Te+1]];for(let[q,pe,fe,S,te]of F)Me(q,pe)||q===G.exit[0]&&pe===G.exit[1]||(fe==="W"?o(ue,S,te,"rail","iron"):a(ue,S,te,"rail","iron"))}}}let P=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function I(b,O,W,oe){let me=O.col1-O.col0+1,G=O.row1-O.row0+1;if(me<3||G<3)return;[[O.col0,O.row0],[O.col1-1,O.row0],[O.col0,O.row1],[O.col1-1,O.row1]].forEach((Me,Te)=>{let[F,q,pe]=P[(oe+Te)%P.length],fe=q===2?Me[0]:Te%2?O.col1:O.col0,S=Me[1];for(let te=0;te<q;te++)if(Math.abs(fe+te-W[0])<=1&&Math.abs(S-W[1])<=1)return;c(F,b,fe,S,q,pe,{rotation:S===O.row0?0:2})})}let k={col0:2,row0:7,col1:15,row1:21};p(k.col0,k.row0,k.col1,k.row1,Jt.sand);for(let b=k.row0;b<=k.row1;b++)o(0,k.col0,b,"rail","fence"),o(0,k.col1+1,b,"rail","fence");for(let b=k.col0;b<=k.col1;b++)a(0,b,k.row0,"rail","fence"),(b<8||b>9)&&a(0,b,k.row1+1,"rail","fence");o(0,k.col1+1,14,null),p(8,22,9,26,Jt.path),c("playhouse",0,3,8,2,2),c("slide",0,7,8,1,3),c("swing",0,11,8,3,1),c("sandbox",0,4,15,3,3,{blocks:!1}),c("carousel",0,11,13,2,2),c("bench",0,2,12,1,1,{rotation:3}),c("bench",0,2,18,1,1,{rotation:3}),c("bench",0,15,19,1,1,{rotation:1}),c("bin",0,15,20);for(let[b,O]of[[13,19],[7,20]])c("tree",0,b,O,1,1,{type:"linden"});for(let b of[4,9,14,20,26,32,61,67,73,80,86,92])c("tree",0,b,1,1,1,{type:b%3?"linden":"chestnut"});M("houseA",19,7,31,21,3,"ochre","S"),p(25,22,27,26,Jt.path);let A={col0:36,row0:4,col1:58,row1:22};l({name:"bank",...A,levels:2,style:"bank"});for(let b=0;b<2;b++){r(b,A.col0,A.row0,A.col1,A.row1),b>0&&s(b,A.col0,A.row0,A.col1,A.row1,n.interior);for(let W=A.row0;W<=A.row1;W++)for(let oe=A.col0;oe<=A.col1;oe++)x[b][W][oe]="marble";let O=y("bank",b,2);for(let W=A.row0;W<=A.row1;W++)o(b,A.col0,W,"wall",O),o(b,A.col1+1,W,"wall",O);for(let W=A.col0;W<=A.col1;W++)a(b,W,A.row0,"wall",O),a(b,W,A.row1+1,"wall",O);for(let W=A.col0+1;W<A.col1;W++)(W-A.col0)%2===1&&a(b,W,A.row1+1,"window",O);for(let W of[37,39,53,55,57])a(b,W,A.row0,"window",O);for(let W=A.row0+1;W<A.row1;W++)(W-A.row0)%2===1&&(o(b,A.col0,W,"window",O),o(b,A.col1+1,W,"window",O))}c("roof",2,A.col0,A.row0,A.col1-A.col0+1,A.row1-A.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let b of[46,47,48])a(0,b,A.row1+1,"door","bank_g");a(1,47,A.row1+1,"window","bank_t"),c("balcony",1,45,23,5,1,{blocks:!1});for(let b of[45,49])c("column",0,b,23,1,1);o(0,A.col1+1,7,"door","bank_g"),p(34,23,60,26,Jt.paving);for(let b=A.col0;b<=A.col1;b++)a(0,b,13,"wall","inner");for(let b of[39,55])a(0,b,13,"door","inner");let v={col0:43,row0:4,col1:51,row1:9};for(let b=v.row0;b<=v.row1;b++)o(0,v.col0,b,"wall","vault"),o(0,v.col1+1,b,"wall","vault");for(let b=v.col0;b<=v.col1;b++)a(0,b,v.row1+1,"wall","vault");a(0,47,v.row1+1,"door","vault");for(let b=v.row0;b<=v.row1;b++)for(let O=v.col0;O<=v.col1;O++)x[0][b][O]="steel";for(let b=A.row0;b<=10;b++)o(0,40,b,"wall","inner"),o(0,55,b,"wall","inner");for(let b=A.col0;b<40;b++)a(0,b,11,"wall","inner");for(let b=55;b<=A.col1;b++)a(0,b,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let b of[37,38,41,42,43,44,50,51,52,53,56,57])c("counter",0,b,15,1,1);c("sofa",0,38,20,2,1),c("sofa",0,55,20,2,1),c("table",0,41,19,2,1),c("table",0,52,19,2,1);for(let[b,O]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])c("plant",0,b,O);for(let b=v.col0;b<=v.col1;b++)c("deposits",0,b,v.row0);for(let b of[5,6,7])c("deposits",0,v.col0,b,1,1,{rotation:3}),c("deposits",0,v.col1,b,1,1,{rotation:1});c("table",0,46,7,2,1),c("desk",0,36,4,2,1),c("console",0,39,4),c("locker",0,36,9),c("locker",0,37,9),c("desk",0,56,5,2,1),c("cabinet",0,58,4),c("cabinet",0,58,9),c("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let b=A.row0;b<=A.row1;b++)o(1,41,b,"wall","inner"),o(1,53,b,"wall","inner");for(let b=41;b<=52;b++)a(1,b,10,"wall","inner"),a(1,b,13,"wall","inner");for(let b of[7,17])for(let[O,W]of[[A.col0,40],[53,A.col1]])for(let oe=O;oe<=W;oe++)a(1,oe,b,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),c("table",1,45,16,4,2),c("bookcase",1,42,21),c("bookcase",1,52,21),c("desk",1,37,4,2,1),c("bookcase",1,36,6),c("sofa",1,37,9,2,1),c("desk",1,56,4,2,1),c("cabinet",1,58,6),c("desk",1,37,12,2,1),c("cabinet",1,36,16),c("desk",1,56,12,2,1),c("cabinet",1,58,16),c("desk",1,37,19,2,1),c("desk",1,56,19,2,1),c("table",1,45,5,3,2),c("bookcase",1,42,4),c("bookcase",1,52,4),p(61,4,73,26,Jt.asphalt),p(64,27,70,30,Jt.asphalt);for(let b=62;b<=72;b+=2)c("paint",0,b,5,1,4,{blocks:!1,line:"W"}),c("paint",0,b,17,1,4,{blocks:!1,line:"W"});let T=(b,O,W,oe,me)=>c("car",0,W,oe,2,4,{type:b,color:O,flip:!!me});T("suv","police",62,5),T("suv","police",64,5),T("van","white",68,5),T("suv","graphite",62,17,!0),T("suv","red",70,17,!0),c("lamp",0,61,12),c("lamp",0,73,12);let le=M("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),p(83,22,85,26,Jt.path);for(let b of[80,81,86,87])c("counter",0,b,19,1,1);c("locker",0,76,6),c("locker",0,77,6),c("locker",0,78,6),c("desk",0,76,10,2,1),c("rack",0,91,6),c("rack",0,91,7),c("rack",0,90,6),c("crate",0,91,10),c("bunk",0,76,17,2,1),c("bunk",0,90,17,2,1),c("desk",0,89,21,2,1),c("cabinet",0,75,21),c("desk",1,76,7,2,1),c("desk",1,89,7,2,1),c("cabinet",1,75,10),c("cabinet",1,91,10),c("desk",1,76,18,2,1),c("desk",1,89,18,2,1),c("bookcase",1,75,21),c("bookcase",1,91,21);for(let b=3;b<e;b+=10)(b<63||b>71)&&c("streetLamp",0,b,30),b+5<e&&(b+5<43||b+5>49)&&c("streetLamp",0,b+5,49);for(let b of[17,58,88])c("bin",0,b,28);c("busStop",0,30,50,3,1),c("bench",0,31,51,1,1,{rotation:0}),c("bin",0,34,51);let $=(b,O,W,oe,me)=>c("car",0,W,oe,4,2,{type:b,color:O,flip:!!me});$("suv","white",20,33),$("van","sand",36,42,!0),$("suv","blue",58,36),$("suv","olive",74,45,!0),$("suv","graphite",81,33),$("van","white",6,45,!0),M("houseB",3,55,16,69,3,"cream","N"),M("houseC",22,56,34,70,2,"green","N"),M("houseD",51,55,63,70,3,"pink","N"),M("houseE",72,56,86,70,3,"ochre","N");for(let[b,O,W]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])p(b,53,O,W,Jt.path);for(let b=1;b<=32;b++)[10,11,29,30].includes(b)||c("hedge",0,b,73);for(let b=59;b<=91;b++)[80,81].includes(b)||c("hedge",0,b,73);p(0,76,36,77,Jt.path),p(56,76,91,77,Jt.path);for(let[b,O]of[[10,11],[29,30],[57,58],[80,81]])p(b,71,O,75,Jt.path);for(let b=3;b<=33;b+=5)c("tree",0,b,83,1,1,{type:b%2?"chestnut":"linden"});for(let b of[5,20,35])c("bench",0,b,78,1,1,{rotation:2});for(let b of[60,66])c("tree",0,19,b,1,1,{type:"linden"}),c("tree",0,68,b,1,1,{type:"chestnut"}),c("tree",0,90,b,1,1,{type:"linden"});let N={col:46.5,row:82.5};g(N.col,N.row,12,Jt.paving),p(44,53,48,71,Jt.paving),c("fountain",0,42,78,9,9,{blocks:!1});for(let b=78;b<=86;b++)for(let O=42;O<=50;O++)Math.hypot(O+.5-N.col,b+.5-N.row)<4.4&&u(0,O,b);for(let b=0;b<8;b++){let O=b/8*Math.PI*2+Math.PI/8,W=Math.floor(N.col+Math.cos(O)*8.6),oe=Math.floor(N.row+Math.sin(O)*8.6),me=[[0,-1],[1,0],[0,1],[-1,0]].map(([G,ue])=>G*Math.cos(O)+ue*Math.sin(O));c(b%2?"streetLamp":"bench",0,W,oe,1,1,{rotation:me.indexOf(Math.max(...me))})}p(60,81,82,95,Jt.paving);let z=68,B=87,Y=d(z,B);for(let[b,O]of[[60,81],[82,81],[60,95],[82,95]])c("lamp",0,b,O);c("crate",0,80,84),c("crate",0,81,84),c("barrels",0,62,93);let D=(b,O,W,oe)=>[b,O,W,oe];return{spawns:{squad:[D(z+1,B,0,1),D(z+2,B,0,1),D(z+3,B,0,1),D(z+1,B+3,0,5),D(z+2,B+3,0,5),D(z+3,B+3,0,5)],mech:[D(z,B+1,0,7)],aliens:[D(44,17,0,0),D(51,19,0,0),D(47,11,0,1),D(40,8,1,3),D(6,13,0,7),D(12,17,0,5),D(28,37,0,3),D(62,44,0,5),D(84,36,0,1),D(83,16,0,3),D(88,9,1,5),D(68,13,0,1)]},extraction:Y,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var qd=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),kt=typeof globalThis<"u"&&globalThis.ALIENS_MAP||qd.get("map")||"outpost",tr=24,U=1.25,jn=4,ut=2.5,wt=kt==="big"?tr*2:kt==="base"?68:kt==="city"?96:tr,Fx=1,Ox=6;var Dt={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function er(i){return Array.from({length:jn},()=>Array.from({length:wt+1},()=>new Array(wt+1).fill(i)))}function Zd(){let i=er(0),e=er(0),t=er(null),n=er(null),s=er(0),r=[],o=[],a=[],c=[],l=[],h=[],d=[],u=kt==="city"?Array.from({length:wt},()=>new Array(wt).fill(0)):null,f=kt==="city"?Array.from({length:wt},()=>new Array(wt).fill(null)):null,m=kt==="city"?er(null):null;if(kt!=="base")for(let F=0;F<wt;F++)for(let q=0;q<wt;q++)i[0][F][q]=Dt.ground;let x=0,p=0,g=(F,q,pe,fe,S,te)=>{for(let K=pe;K<=S;K++)for(let H=q;H<=fe;H++)i[F][K+p][H+x]=te},_=(F,q,pe,fe,S)=>{for(let te=pe;te<=S;te++)for(let K=q;K<=fe;K++)s[F][te+p][K+x]=1},y=(F,q,pe,fe)=>{e[F][pe+p][q+x]=fe},M=(F,q,pe,fe,S)=>{t[F][pe+p][q+x]=fe?{type:fe,style:S}:null},C=(F,q,pe,fe,S)=>{n[F][pe+p][q+x]=fe?{type:fe,style:S}:null},P=(F,q,pe,fe,S,te,K)=>{for(let H=pe;H<=S;H++)M(F,q,H,te,K),M(F,fe+1,H,te,K);for(let H=q;H<=fe;H++)C(F,H,pe,te,K),C(F,H,S+1,te,K)},I=(F,q,pe,fe,S,te)=>{for(let K=pe;K<=fe;K++)M(F,q,K,S,te)},k=(F,q,pe,fe,S,te)=>{for(let K=pe;K<=fe;K++)C(F,K,q,S,te)},A=(F,q,pe,fe,S=1,te=1,K={})=>r.push({kind:F,level:q,col:pe+x,row:fe+p,cols:S,rows:te,rotation:0,blocks:!0,...K}),v=F=>{let q={...F,col0:F.col0+x,row0:F.row0+p,col1:F.col1+x,row1:F.row1+p};return c.push(q),q},T=F=>a.push({...F,from:[F.from[0]+x,F.from[1]+p,F.from[2]],to:[F.to[0]+x,F.to[1]+p,F.to[2]],col:F.col+x,row:F.row+p}),le=(F,q,pe,fe,S)=>r.push({kind:"ladder",level:F,col:q+x,row:pe+p,cols:1,rows:1,blocks:!1,height:fe,side:S}),$=(F,q,pe,fe)=>h.push({rect:[(F+x)*U,(q+p)*U,(pe+x)*U,(fe+p)*U]}),N=(F,q,pe)=>h.push({circle:[(F+x)*U,(q+p)*U,pe*U]}),z=(F,q,pe)=>d.push([F,q+x,pe+p]),B=(F,q,pe,fe,S,te,K)=>{o.push({level:F,col:q+x,row:pe+p,dirCol:fe,dirRow:S,count:te,style:K});for(let H=0;H<te;H++){let Z=q+fe*H,ne=pe+S*H;g(F,Z,ne,Z,ne,Dt.stairs),y(F,Z,ne,(H+.5)/te*ut),F+1<jn&&g(F+1,Z,ne,Z,ne,Dt.none)}};function Y(){v({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),g(1,3,3,10,9,Dt.interior),g(2,3,3,10,9,Dt.roof),_(0,3,3,10,9),_(1,3,3,10,9);for(let F of[0,1])P(F,3,3,10,9,"wall","hab");P(2,3,3,10,9,"parapet","hab"),I(0,7,3,5,"wall","inner"),M(0,7,5,"door","inner"),k(0,6,3,10,"wall","inner"),C(0,4,6,"door","inner"),C(0,9,6,"door","inner"),k(0,7,3,10,"wall","inner"),C(0,6,7,"door","inner"),C(0,9,7,"door","inner"),I(0,8,7,9,"wall","inner"),C(0,6,10,"door","hab"),M(0,11,6,"door","hab");for(let F of[4,8,10])C(0,F,10,"window","hab");for(let F of[4,8])M(0,11,F,"window","hab");C(0,5,3,"window","hab"),M(0,3,4,"window","hab"),B(0,4,8,1,0,3,"hab"),I(1,7,3,5,"wall","inner"),M(1,7,4,"door","inner"),k(1,6,3,10,"wall","inner"),C(1,5,6,"door","inner"),C(1,9,6,"door","inner"),I(1,8,7,9,"wall","inner"),k(1,7,8,10,"wall","inner"),C(1,9,7,"door","inner"),k(1,8,4,6,"rail","hab"),k(1,9,4,6,"rail","hab"),M(1,4,8,"rail","hab");for(let F of[4,5,7,9,10])C(1,F,10,"window","hab");for(let F of[4,5,8])M(1,11,F,"window","hab");C(1,4,3,"window","hab"),C(1,8,3,"window","hab"),M(1,3,5,"window","hab"),A("console",0,3,3),A("console",0,4,3),A("locker",0,6,3),A("bunk",0,9,3,2,1),A("locker",0,10,5),A("labTable",0,9,8,2,1),A("cabinet",0,10,9),A("crate",0,7,9),A("crate",0,3,7),A("rack",1,10,7),A("rack",1,10,8),A("rack",1,10,9),A("desk",1,4,3,2,1),A("console",1,9,3),A("crate",1,3,5),A("crate",1,3,6),A("acUnit",2,5,4,2,1),A("acUnit",2,8,6,1,1),A("antenna",2,4,8),A("solar",2,6,7,2,2),T({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),le(0,11,9,2*ut+.9,"W"),v({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),g(1,15,4,19,8,Dt.deck),P(1,15,4,19,8,"rail","deck"),C(1,17,9,null);for(let[F,q]of[[15,4],[19,4],[15,8],[19,8],[17,4]])A("pylon",0,F,q);B(0,17,11,0,-1,3,"deck"),v({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),P(1,16,4,18,6,"wall","cabin"),C(1,17,7,"door","cabin"),M(1,19,5,"window","cabin"),C(1,16,7,"window","cabin"),g(1,16,4,18,6,Dt.interior),g(2,16,4,18,6,Dt.roof),P(2,16,4,18,6,"parapet","cabin"),_(1,16,4,18,6),A("console",1,16,4),A("rack",1,18,4),A("dish",2,17,5),T({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),le(1,19,6,ut+.9,"W"),A("barrels",0,16,6),A("crate",0,18,7),v({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),g(3,20,14,21,15,Dt.deck),P(3,20,14,21,15,"rail","tower");for(let[F,q]of[[20,14],[21,14],[20,15],[21,15]])A("towerLeg",0,F,q);A("searchlight",3,21,14),T({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),le(0,20,16,3*ut+.9,"N"),C(3,20,16,null),A("container",0,13,13,2,4,{color:"orange"}),A("container",0,1,12,2,4,{color:"blue"}),A("truck",0,8,12,2,5),A("tank",0,21,4,2,3),A("generator",0,12,1,2,2);for(let[F,q]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])A("crate",0,F,q);A("barrels",0,12,4),A("barrels",0,20,10),A("lamp",0,12,11),A("lamp",0,15,12),k(0,20,10,13,"barrier","concrete"),I(0,16,17,19,"barrier","concrete");for(let[F,q,pe]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])A("rock",0,F,q,pe,pe);$(1.3,1.3,12.6,11.7),$(14.2,3,20.8,12.8),$(19.4,13.4,22.6,16.8),N(4.6,19,3.6)}function D(){v({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),_(0,2,2,13,9),g(1,2,2,13,9,Dt.roof),P(0,2,2,13,9,"wall","hab"),P(1,2,2,13,9,"parapet","hab"),C(0,6,10,"door","hab"),C(0,7,10,"door","hab"),M(0,14,5,"door","hab"),M(0,2,6,"door","hab");for(let F of[3,4,9,10,12])C(0,F,10,"window","hab");for(let F of[4,8,11])C(0,F,2,"window","hab");for(let F of[3,7,8])M(0,14,F,"window","hab");for(let F of[3,4,5,9,10,11])A("rack",0,F,2);A("crate",0,4,5),A("crate",0,5,5),A("crate",0,4,6),A("crate",0,10,6),A("crate",0,11,6),A("barrels",0,12,8),A("desk",0,2,8,2,1),A("cabinet",0,13,3),A("acUnit",1,4,4,2,1),A("acUnit",1,9,6,2,1),v({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),g(1,13,13,20,19,Dt.interior),g(2,13,13,20,19,Dt.roof),_(0,13,13,20,19),_(1,13,13,20,19);for(let F of[0,1])P(F,13,13,20,19,"wall","hab");P(2,13,13,20,19,"parapet","hab"),I(0,17,13,19,"wall","inner"),M(0,17,15,"door","inner"),M(0,17,16,"door","inner"),C(0,18,20,"door","hab"),M(0,13,15,"door","hab");for(let F of[14,15,19])C(0,F,20,"window","hab");for(let F of[17,18])M(0,21,F,"window","hab");C(0,15,13,"window","hab"),C(0,19,13,"window","hab"),B(0,14,18,1,0,3,"hab"),k(1,18,14,16,"rail","hab"),M(1,14,19,"rail","hab"),M(1,14,18,"rail","hab");for(let F of[14,16,18,19])C(1,F,20,"window","hab");for(let F of[14,16,18])M(1,21,F,"window","hab");for(let F of[14,17,19])C(1,F,13,"window","hab");A("desk",0,14,14,2,1),A("console",0,19,14),A("locker",0,20,17),A("desk",1,15,14,2,1),A("desk",1,18,16,2,1),A("rack",1,20,14),A("crate",1,20,19),A("antenna",2,19,18),A("acUnit",2,15,15,2,1),A("container",0,17,3,2,4,{color:"orange"}),A("generator",0,9,13,2,2),A("barrels",0,12,12),A("crate",0,8,16),A("crate",0,9,17),A("lamp",0,15,10),A("lamp",0,11,19),k(0,11,18,21,"barrier","concrete");for(let[F,q,pe]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])A("rock",0,F,q,pe,pe);$(1.3,1.3,14.7,11.7),$(12.3,12.3,21.7,20.7),$(6.3,11.3,12.7,13.2)}function b(){$(.6,.6,22.4,22.4);let F=(pe,fe,S)=>A("paint",0,pe,fe,1,S,{blocks:!1,line:"W"});for(let[pe,fe]of[[2,4],[10,4],[14,4]])for(let S=2;S<=20;S+=2)F(S,pe,fe);let q=(pe,fe,S,te,K)=>A("car",0,S,te,2,4,{type:pe,color:fe,flip:!!K});q("suv","white",2,2),q("van","sand",8,2),q("suv","graphite",10,2),q("suv","red",16,2),q("suv","blue",4,10,!0),q("van","white",12,10,!0),q("suv","olive",18,10,!0),q("suv","graphite",6,14),q("suv","white",14,14),A("truck",0,21,15,2,5);for(let[pe,fe]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])A("lamp",0,pe,fe);I(0,1,2,5,"barrier","concrete"),I(0,1,10,17,"barrier","concrete"),k(0,23,2,9,"barrier","concrete"),k(0,23,13,20,"barrier","concrete"),A("crate",0,21,3),A("crate",0,21,4),A("barrels",0,22,12);for(let[pe,fe,S]of[[0,22,2],[23,0,1]])A("rock",0,pe,fe,S,S)}function O(F,q){A("tiltrotor",0,F,q,6,4,{blocks:!1});for(let S=F;S<=F+5;S++)for(let te=q;te<=q+3;te++)y(0,S,te,.6);for(let S=q;S<=q+3;S++)y(0,F+6,S,.45),y(0,F+7,S,.15);let pe={col:F+4,row:q+4};y(0,pe.col,pe.row,.3),_(0,F,q,F+5,q+3);for(let S=F;S<=F+5;S++)C(0,S,q,"hull","tiltrotor"),S!==pe.col&&C(0,S,q+4,"hull","tiltrotor");for(let S=q;S<=q+3;S++)M(0,F,S,"hull","tiltrotor");for(let S=F-4;S<=F+5;S++)z(0,S,q-1),S!==pe.col&&z(0,S,q+4);for(let S=F-4;S<=F-1;S++)for(let te=q;te<=q+3;te++)z(0,S,te);let fe=[];for(let S=F;S<=F+7;S++)for(let te=q;te<=q+3;te++)fe.push([S+x,te+p,0]);return fe}function W(){let pe=O(10,10);$(4.3,4.3,21.7,19.7),A("crate",0,20,8),A("crate",0,20,9),A("crate",0,21,9),A("barrels",0,19,16),A("generator",0,5,17,2,2);for(let[S,te]of[[4,4],[21,4],[4,19],[21,19]])A("lamp",0,S,te);for(let[S,te,K]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])A("rock",0,S,te,K,K);let fe=(S,te,K)=>[S+x,te+p,0,K];return{squad:[fe(11,10,1),fe(12,10,1),fe(13,10,1),fe(11,13,5),fe(12,13,5),fe(13,13,5)],mech:[fe(10,11,7)],extraction:pe}}function oe(){x=Fx,p=Ox;let F=Wd,q=F.grid[0],pe=F.grid[1],fe=Array.from({length:pe},()=>new Array(q).fill(null)),S=Array.from({length:pe},()=>new Array(q).fill(0)),te=(he,w,E)=>{for(let j=he.y;j<he.y+he.height;j++)for(let ie=he.x;ie<he.x+he.width;ie++)fe[j][ie]=w,S[j][ie]=E},K=new Set(["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430","\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430"]);F.rooms.forEach((he,w)=>te(he,K.has(he.name)?"hangar":he.kind==="corridor"?he.zone+":corridor":"room"+w,he.levels)),F.corridors.forEach(he=>te(he,"corridor",1));let H=(he,w)=>he>=0&&w>=0&&he<q&&w<pe?fe[w][he]:null,Z=(he,w)=>H(he,w)?S[w][he]:0;for(let he=0;he<pe;he++)for(let w=0;w<q;w++)if(fe[he][w]){g(0,w,he,w,he,Dt.interior);for(let E=0;E<S[he][w];E++)_(E,w,he,w,he)}for(let he=0;he<=pe;he++)for(let w=0;w<=q;w++){if(he<pe){let E=H(w-1,he),j=H(w,he);if(E!==j)for(let ie=0;ie<Math.max(Z(w-1,he),Z(w,he));ie++)M(ie,w,he,"wall","inner")}if(w<q){let E=H(w,he-1),j=H(w,he);if(E!==j)for(let ie=0;ie<Math.max(Z(w,he-1),Z(w,he));ie++)C(ie,w,he,"wall","inner")}}F.doors.forEach(he=>{let w=he.size>1?l.length:-1,E=[];for(let j=0;j<he.size;j++){let ie=he.side==="N"?["N",he.x+j,he.y]:he.side==="S"?["N",he.x+j,he.y+1]:he.side==="W"?["W",he.x,he.y+j]:["W",he.x+1,he.y+j],[ye,_e,Ye]=ie;(ye==="N"?C:M)(0,_e,Ye,"door","inner"),w>=0&&((ye==="N"?n:t)[0][Ye+p][_e+x].gate={group:w,kind:he.kind}),E.push([_e+x,Ye+p,ye])}w>=0&&l.push({kind:he.kind,airlock:he.airlock,edges:E})});let ne=new Set;for(let he of F.thickWalls||[])for(let w=he.y;w<he.y+he.height;w++)for(let E=he.x;E<he.x+he.width;E++)ne.add(E+","+w);for(let he=-1;he<=pe;he++)for(let w=-1;w<=q;w++){if(H(w,he)||he+p<0||he+p>=wt||w+x<0||w+x>=wt)continue;let E=0;for(let ie=-1;ie<=1;ie++)for(let ye=-1;ye<=1;ye++)E=Math.max(E,Z(w+ye,he+ie));if(!E)continue;let j=((w+x)*7+(he+p)*13)%3;A("rockFill",0,w,he,1,1,{type:ne.has(w+","+he)?`h${E}c`:`h${E}v${j}`,height:E*ut,variant:j,concrete:ne.has(w+","+he)})}Xd(F,(he,w,E,j=1,ie=1,ye={})=>A(he,0,w,E,j,ie,ye));let ve=O(8,8),be=(he,w,E)=>[he+x,w+p,0,E];return{squad:[be(21,8,1),be(22,8,1),be(21,9,1),be(22,9,1),be(21,10,1),be(22,10,1)],mech:[be(24,12,3)],aliens:[be(39,1,3),be(41,1,3),be(39,3,3),be(41,3,3),be(40,6,3),be(41,8,3),be(40,11,3),be(40,13,3)],extraction:ve}}let me,G=null,ue=null,Me=null,Te=null;if(kt==="city"){let F=Yd({TILES:wt,LEVEL_H:ut,FLOOR:Dt,setFloor:g,setIndoor:_,setW:M,setN:C,object:A,building:v,stairRun:B,tiltrotor:O,block:z,surface:u,marking:f,floorStyle:m});me=F.spawns,G=F.extraction,ue=F.mission,Me=F.name,Te=F.caption}else if(kt==="big"){x=0,p=0,Y(),x=tr,p=0,D(),x=0,p=tr,b(),x=tr,p=tr;let F=W();G=F.extraction,me={squad:F.squad,mech:F.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(kt==="base"){let F=oe();G=F.extraction,me={squad:F.squad,mech:F.mech,aliens:F.aliens}}else Y(),me=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:kt,TILE:U,TILES:wt,LEVELS:jn,LEVEL_H:ut,floor:i,offset:e,wallW:t,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:c,spawns:me,extraction:G,concrete:h,blockedCells:d,gates:l,surface:u,marking:f,floorStyle:m,mission:ue,caption:Te,name:Me||(kt==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":kt==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:kt==="big"||kt==="base"||kt==="city"}}var $d=((Number(qd.get("rot"))||0)%4+4)%4;function Jd(i,e){let t=i;for(let n=0;n<e;n++)t=Hx(t,n+1);return t}function Hx(i,e){let t=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(l,h)=>l.map(d=>d.map(u=>u.map(()=>h))),s=(l,h)=>{let d=n(l,h);for(let u=0;u<l.length;u++)for(let f=0;f<t;f++)for(let m=0;m<t;m++)d[u][m][t-1-f]=l[u][f][m];return d},r=n(i.wallW,null),o=n(i.wallN,null);for(let l=0;l<i.wallW.length;l++)for(let h=0;h<=t;h++)for(let d=0;d<=t;d++){let u=i.wallW[l][h][d];u&&h<t&&(o[l][d][t-1-h]=u);let f=i.wallN[l][h][d];f&&d<t&&(r[l][d][t-h]=f)}let a=([l,h,...d])=>[t-1-h,l,...d],c=i.objects.map(l=>{let h={col:t-l.row-l.rows,row:l.col,cols:l.rows,rows:l.cols};if(l.kind==="rockFill")return{...l,...h};let d=l.source||l;return{...l,...h,source:d,turns:e}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:c,blockedCells:i.blockedCells.map(([l,h,d])=>[l,t-1-d,h]),gates:(i.gates||[]).map(l=>({...l,edges:l.edges.map(([h,d,u])=>u==="W"?[t-1-d,h,"N"]:[t-d,h,"W"])})),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(l=>l.circle?{...l,circle:[t*i.TILE-l.circle[1],l.circle[0],l.circle[2]]}:{...l,rect:[t*i.TILE-l.rect[3],l.rect[0],t*i.TILE-l.rect[1],l.rect[2]]}),viewTurns:e}}var oa=class extends Ui{constructor(e=null){super();let t=new gt;t.deleteAttribute("uv");let n=new Oe({side:cn}),s=new Oe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new zr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ee(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Ee(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Ee(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Ee(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Ee(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Ee(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Ee(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let m=new Ee(t,nr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let x=new Ee(t,nr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let p=new Ee(t,nr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let g=new Ee(t,nr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new Ee(t,nr(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let y=new Ee(t,nr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function nr(i){let e=new rs;return e.color.setScalar(i),e}function ft(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var q2=ft(20261121);var gn=new Uint8Array(512);{let i=ft(7),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)gn[t]=e[t&255]}var al=i=>i*i*i*(i*(i*6-15)+10),ds=(i,e,t)=>i+(e-i)*t;function Oi(i,e,t,n){let s=i&15,r=s<8?e:t,o=s<4?t:s===12||s===14?e:n;return(s&1?-r:r)+(s&2?-o:o)}function jd(i,e,t){let n=Math.floor(i)&255,s=Math.floor(e)&255,r=Math.floor(t)&255;i-=Math.floor(i),e-=Math.floor(e),t-=Math.floor(t);let o=al(i),a=al(e),c=al(t),l=gn[n]+s,h=gn[l]+r,d=gn[l+1]+r,u=gn[n+1]+s,f=gn[u]+r,m=gn[u+1]+r;return ds(ds(ds(Oi(gn[h],i,e,t),Oi(gn[f],i-1,e,t),o),ds(Oi(gn[d],i,e-1,t),Oi(gn[m],i-1,e-1,t),o),a),ds(ds(Oi(gn[h+1],i,e,t-1),Oi(gn[f+1],i-1,e,t-1),o),ds(Oi(gn[d+1],i,e-1,t-1),Oi(gn[m+1],i-1,e-1,t-1),o),a),c)}function Kd(i,e,t,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*jd(i*o,e*o,t*o),o*=2,r*=.5;return s}function Hi(i,e,t,n=5,s=0){let r=i*Math.PI*2,o=e*Math.PI*2,a=t/(Math.PI*2),c=0,l=.5,h=1;for(let d=0;d<n;d++)c+=l*jd(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,l*=.5;return c}function Qd(i){let e=document.createElement("canvas");return e.width=e.height=i,e}function yt(i,{srgb:e=!0,repeat:t=1}={}){let n=new Xo(i);return e&&(n.colorSpace=an),n.wrapS=n.wrapT=ns,n.repeat.set(t,t),n.anisotropy=8,n}function Bx(i,e,t=2){let n=Qd(e),s=n.getContext("2d"),r=s.createImageData(e,e),o=(a,c)=>i[(c+e)%e*e+(a+e)%e];for(let a=0;a<e;a++)for(let c=0;c<e;c++){let l=(o(c+1,a)-o(c-1,a))*t,h=(o(c,a+1)-o(c,a-1))*t,d=Math.hypot(l,h,1),u=(a*e+c)*4;r.data[u]=(-l/d*.5+.5)*255,r.data[u+1]=(h/d*.5+.5)*255,r.data[u+2]=(1/d*.5+.5)*255,r.data[u+3]=255}return s.putImageData(r,0,0),yt(n,{srgb:!1})}function Gx(i,e,t){let n=new Float32Array(i*i),s=Qd(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=c/i,h=a/i,d=e(l,h,c,a);n[a*i+c]=d;let[u,f,m]=t(l,h,d,c,a),x=(a*i+c)*4;o.data[x]=u,o.data[x+1]=f,o.data[x+2]=m,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var cl=i=>Math.max(0,Math.min(255,i));function Fr(i=3,e=[128,120,108]){let n=ft(i),{canvas:s,ctx:r,heights:o}=Gx(512,(a,c)=>{let l=Hi(a,c,6,6,i),h=Math.abs(Hi(a,c,14,3,i+9));return l*.8-Math.max(0,.06-h)*6},(a,c,l)=>{let h=Hi(a,c,20,3,i+3),d=.72+l*.55+(n()-.5)*.1,u=e[0]*d,f=e[1]*d,m=e[2]*d;return h>.22&&(u=u*.7+60,f=f*.75+75,m=m*.6+30),[cl(u),cl(f),cl(m)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:yt(s),normalMap:Bx(o,512,5)}}function ir(i="#ffb347",e=1,t="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=ft(e);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,t==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let c=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,c):s.lineTo(a,c)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let c=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,c,6),a+=c+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return yt(n)}var Z2=new L(0,1,0);function ll(i,e,{flatten:t=.75,roughness:n=.35,detail:s=3}={}){let r=new cs(i,s),o=r.attributes.position,a=new L;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);let l=a.clone().normalize(),h=1+Kd(l.x*1.6+e,l.y*1.6,l.z*1.6-e,4)*n*2+Math.max(0,Kd(l.x*4+e,l.y*4,l.z*4,2))*.15;a.copy(l).multiplyScalar(i*h);let d=Math.floor((l.x*3+e)*1.3)*.02;a.y*=t,a.x+=d,o.setXYZ(c,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function Or(i,e){i.traverse(t=>{if(t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])"envMapIntensity"in n&&(n.envMapIntensity=e*(n.userData.envBoost||1))})}var eu=Math.SQRT1_2,tu=(i,e)=>new xe((i+e)*eu,(e-i)*eu);var ay=new xe(.75,-.66).normalize();var Hr=new L;function On(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Hr.copy(e),Hr[n]=0,Hr.normalize();let l=.5*o/(o+a),h=1-Hr.angleTo(i)/c;return Math.sign(Hr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var aa=class extends gt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,m=new L,x=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/f)){case 0:m.set(1,0,0),u[g+0]=On(m,c,"z","y",r,n),u[g+1]=1-On(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),u[g+0]=1-On(m,c,"z","y",r,n),u[g+1]=1-On(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),u[g+0]=1-On(m,c,"x","z",r,e),u[g+1]=On(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),u[g+0]=1-On(m,c,"x","z",r,e),u[g+1]=1-On(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),u[g+0]=1-On(m,c,"x","y",r,e),u[g+1]=1-On(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),u[g+0]=On(m,c,"x","y",r,e),u[g+1]=1-On(m,c,"y","x",r,t);break}}};var Wx=(i,e,t)=>new L(i,e,t),ca=null;function iu(){if(ca)return ca;let i=(e,t=.75,n=.15,s={})=>new Oe({color:e,roughness:t,metalness:n,...s});return ca={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new Fn({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},ca}function tn(i){return i.castShadow=i.receiveShadow=!0,i}function Se(i,e,t,n,s,r,o,a,c=0){let l=c>0?new aa(e,t,n,3,Math.min(c,e/2.1,t/2.1,n/2.1)):new gt(e,t,n),h=tn(new Ee(l,s));return h.position.set(r,o,a),i.add(h),h}function zt(i,e,t,n,s,r,o,a="x",c=20,l=e){let h=tn(new Ee(new It(e,l,t,c),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function la(i,e,t,n){let s=new $s(e.map(r=>Wx(...r)),!1,"catmullrom",.05);i.add(tn(new Ee(new Nr(s,e.length*8,t,8),n)))}function gi(i,e,t,n,s,r=.025){let o=new en;e.forEach(([l,h],d)=>{d===0?o.moveTo(-l,h):o.lineTo(-l,h)});let a=new mn(o,{depth:t-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let c=tn(new Ee(a,n));return c.position.x=s-t/2+r,i.add(c),c}function Br(i,e,t,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new en;e.forEach(([u,f],m)=>{m===0?a.moveTo(u,f):a.lineTo(u,f)});let c=n-t,l=new mn(a,{depth:c-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=l.attributes.position;for(let u=0;u<h.count;u++){let f=Math.min(1,Math.max(0,(h.getZ(u)+o)/c)),{scale:m,drop:x}=r(f);h.setX(u,h.getX(u)*m),h.setY(u,h.getY(u)-x*Math.max(0,h.getY(u)))}l.computeVertexNormals();let d=tn(new Ee(l,s));return d.position.z=t+o,i.add(d),d}function Xx(i,e,t,n=.03,s=0){let r=[],o=i/2,a=(c,l,h,d,u)=>{for(let f=0;f<=6;f++){let m=d+(u-d)*f/6;r.push([c+Math.cos(m)*h,l+Math.sin(m)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-t,s+e-t,t,0,Math.PI/2),a(-o+t,s+e-t,t,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function Gr(i,e,t,n,s,r){return Xx(i-r*2,e-r*2,Math.max(.01,t-r),Math.max(.01,n-r),s+r)}function Yx(i,e,t,n,s,r,o){let a=iu(),c=s*.58,l=.09,h=r/2,d=[new xe(c,-h)];for(let x=0;x<=6;x++){let p=-Math.PI/2+x/6*Math.PI/2;d.push(new xe(s-l+Math.cos(p)*l,-h+l+Math.sin(p)*l))}for(let x=0;x<=6;x++){let p=x/6*Math.PI/2;d.push(new xe(s-l+Math.cos(p)*l,h-l+Math.sin(p)*l))}d.push(new xe(c,h));let u=tn(new Ee(new os(d,36),a.rubber));u.rotation.z=Math.PI/2,u.position.set(e,t,n),i.add(u);let f=20;for(let x=0;x<f;x++){let p=x/f*Math.PI*2;for(let g of[-1,1])Se(i,r*.36,.04,.075,a.rubber,e+g*r*.2,t+Math.cos(p)*(s+.005),n+Math.sin(p)*(s+.005),.015).rotation.set(p,g*.5,0)}let m=e+o*(h-.03);zt(i,c,.05,a.hub,m,t,n,"x",28),zt(i,s*.24,.08,a.hub,m+o*.04,t,n,"x",18),zt(i,s*.12,.05,a.frame,m+o*.08,t,n,"x",12);for(let x=0;x<8;x++){let p=x/8*Math.PI*2;zt(i,.018,.04,a.steel,m+o*.03,t+Math.cos(p)*s*.36,n+Math.sin(p)*s*.36,"x",6)}}var su={length:6.15,width:2.35};function ru(){let i=iu(),e=new ge,t=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let D of o)for(let b of[-1,1])Yx(e,b*s,t,D,t,n,b);for(let D of[-1,1])Se(e,.12,.22,5.75,i.frame,D*.45,a-.11,3.1);for(let D of o){zt(e,.065,s*2-.25,i.frame,0,t,D,"x",12);let b=new Ee(new Rn(.2,16,10),i.frame);b.scale.set(1.1,.9,.9),b.position.set(0,t,D),e.add(tn(b))}Se(e,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let D of[-1,1]){let b=new Ee(new zi(.055,.018,6,12,Math.PI*1.4),i.frame);b.position.set(D*.6,.72,6.16),b.rotation.set(0,Math.PI/2,Math.PI*.8),e.add(tn(b))}Se(e,.6,.24,.24,i.frame,0,.84,5.86,.06),zt(e,.1,.48,i.steel,0,.88,5.86,"x",14);let c=4.72,l=6;Br(e,Gr(1.14,.78,.24,.02,.98,.03),c,l,i.olive,D=>({scale:1-.1*D,drop:.045*D*D}),.03),Se(e,.03,.02,l-c-.1,i.oliveDark,0,1.755,(c+l)/2);for(let D of[-1,1])for(let b=0;b<6;b++){let O=Se(e,.02,.2,.05,i.frame,D*.552,1.38,4.95+b*.11,.008);O.rotation.y=D*.15}Br(e,Gr(1,.68,.12,.04,1.02,.012),l-.02,l+.05,i.olive,void 0,.012);for(let D=-4;D<=4;D++)Se(e,.045,.5,.04,i.frame,D*.09,1.34,l+.045,.012);let h=[],d=(D,b,O,W,oe)=>{let me=[];for(let G=0;G<=20;G++){let ue=O+(W-O)*G/20;me.push([r+Math.cos(ue)*D,t+Math.sin(ue)*b])}return oe?me.reverse():me};h.push(...d(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...d(.92,.66,.2,2.75,!0).slice(0,-1));let u=[[r+Math.cos(2.75)*.92,t+Math.sin(2.75)*.66]];for(let D of[-1,1]){gi(e,h,.44,i.olive,D*.93,.03),Se(e,.05,.45,1.05,i.oliveDark,D*.7,1,r+.05);let b=new Ee(new Rn(.12,18,12),i.olive);b.scale.set(1,1,.75),b.position.set(D*.83,1.13,5.86),e.add(tn(b)),zt(e,.09,.02,i.lens,D*.83,1.13,5.95,"z",18);for(let O of[-.05,0,.05])Se(e,.012,.2,.012,i.frame,D*.83+O,1.13,5.99);Se(e,.07,.045,.04,i.amber,D*1,1.2,5.7,.01),Se(e,.36,.4,.02,i.rubber,D*.93,.55,r-.82)}let f=4.74,m=3.62,x=(f+m)/2,p=f-m;Se(e,1.3,.24,p-.1,i.frame,0,1.06,x),Br(e,Gr(2.18,.98,.1,.05,1,.05),m,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},_={z:f-.24,y:2.44},y=[[m+.02,1.95],[f-.02,1.95],[g.z,g.y]],M=2.6,C=.16,P=.24;for(let D=1;D<=10;D++){let b=D/10*Math.PI/2;y.push([_.z-P*(1-Math.cos(b)),_.y+(M-_.y)*Math.sin(b)])}for(let D=0;D<=8;D++){let b=D/8*Math.PI/2;y.push([m+.04+C-Math.sin(b)*C,M-C+Math.cos(b)*C])}gi(e,y,2.1,i.olive,0,.09);let I=Math.atan2(g.z-_.z,_.y-g.y),k=(g.z+_.z)/2+.1*Math.cos(I),A=(g.y+_.y)/2+.1*Math.sin(I);for(let D of[-1,1]){let b=Se(e,.84,.44,.03,i.glass,D*.48,A,k,.02);b.rotation.x=-I,Se(e,.03,.36,.6,i.glass,D*1.06,2.22,x+.02,.02),Se(e,.03,.85,.02,i.oliveDark,D*1.1,1.55,x-.28),Se(e,.03,.03,.12,i.steel,D*1.105,1.8,x-.16),la(e,[[D*1.05,2,f-.1],[D*1.28,2.12,f],[D*1.31,2.34,f]],.014,i.frame),Se(e,.04,.26,.16,i.frame,D*1.32,2.36,f,.015)}let v=Se(e,.06,.46,.04,i.oliveDark,0,A,k+.01);v.rotation.x=-I,Se(e,1.1,.28,.03,i.glass,0,2.22,m+.03,.02);for(let D of[-.25,0,.25])Se(e,.07,.04,.05,i.amber,D,2.7,f-.4,.01);zt(e,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let D of[2.75,3.35])Se(e,.04,.58,.05,i.frame,.88,.78,D);Se(e,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),la(e,[[.55,1,m-.02],[.75,1.25,m-.08],[.78,2.65,m-.08]],.045,i.frame);let T=3.5,le=.12,$=T-le,N=(T+le)/2,z=1.1,B=2.08;Se(e,2.08,.12,$,i.frame,0,z-.06,N),Br(e,Gr(2.35,B,.2,.05,z,.08),le,T,i.olive,void 0,.08);for(let D of[-1,1]){for(let b of[.88,1.78,2.68])Se(e,.03,.44,.62,i.oliveDark,D*1.177,z+1.45,b,.03),Se(e,.03,.34,.52,i.glass,D*1.186,z+1.45,b,.02);for(let b of[z+.38,z+1.02])Se(e,.02,.03,$-.3,i.oliveDark,D*1.178,b,N);Se(e,.3,.36,.5,i.oliveDark,D*1,z-.24,1.71,.05)}Se(e,.86,1.75,.03,i.oliveDark,-.45,z+.92,le-.01,.03),Se(e,.3,.26,.03,i.glass,-.45,z+1.45,le-.03,.02),Se(e,.03,.03,.14,i.steel,-.1,z+.9,le-.05);for(let D of[-.75,-.15])Se(e,.03,.9,.03,i.frame,D,z-.3,le-.12);for(let D=0;D<4;D++)Se(e,.6,.025,.03,i.frame,-.45,z-.65+D*.22,le-.12);for(let D of[-1,1])Se(e,.14,.08,.04,i.red,D*.95,.92,le-.02,.02),Se(e,.4,.4,.02,i.rubber,D*.95,.58,.45);let Y=z+B;for(let D of[-1,1])la(e,[[D*.98,Y-.02,.35],[D*.98,Y+.14,.5],[D*.98,Y+.14,3.05],[D*.98,Y-.02,3.2]],.02,i.frame);for(let D of[.65,1.45,2.25,3])Se(e,1.96,.025,.025,i.frame,0,Y+.14,D);return Se(e,1.2,.18,.9,i.canvas,-.2,Y+.08,1.25,.08),Se(e,.6,.55,.3,i.oliveDark,.55,Y-.38,T+.16,.08),zt(e,.12,.42,i.frame,.55,Y+.12,T+.16,"y",16),zt(e,.16,.04,i.oliveDark,.55,Y+.34,T+.16,"y",16),zt(e,.035,.9,i.frame,-.7,Y+.38,T-.2,"y",8),Br(e,Gr(2.37,.16,.02,.05,z-.005,.01),le+.01,T-.01,i.dusty,void 0,.01),e}var Qn={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function qx(i){let e=i?{clippingPlanes:i,clipShadows:!0,side:$t}:{},t=(n,s=.7,r=.25,o={})=>new Oe({color:n,roughness:s,metalness:r,...e,...o});return{hull:t(4870469,.62,.3),hullDark:t(3554355,.66,.3),belly:t(7370092,.7,.25),panel:t(2830378,.6,.4),interior:t(9409933,.8,.15),floor:t(2764074,.85,.35),seat:t(4082230,.95,0),frame:t(1908508,.6,.6),steel:t(9212042,.35,.8),rubber:t(1710617,.95,0),yellow:t(13214234,.6,.1),glass:new Fn({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...e}),red:t(11540496,.4,.1,{emissive:5244933}),green:t(1089584,.4,.1,{emissive:342544}),white:t(15263968,.4,.1,{emissive:3158064})}}function Vr(i,e,t,n,s){let r=[],o=(a,c,l,h,d,u)=>{for(let f=0;f<=u;f++){let m=h+(d-h)*f/u;r.push([a+Math.cos(m)*l,c+Math.sin(m)*l])}};return o(i-s,e+s,s,-Math.PI/2,0,4),o(i-n,t-n,n,0,Math.PI/2,10),o(-i+n,t-n,n,Math.PI/2,Math.PI,10),o(-i+s,e+s,s,Math.PI,Math.PI*1.5,4),r}function hl(i,e,t,n,s,r,o=32,a=null){let c=new en;e.forEach(([m,x],p)=>{p===0?c.moveTo(m,x):c.lineTo(m,x)});let l=new mn(c,{depth:n-t,bevelEnabled:!1,steps:o,curveSegments:6}),h=l.attributes.position,d=a?a.bottom:Math.min(...e.map(m=>m[1])),u=a?a.top:Math.max(...e.map(m=>m[1]));for(let m=0;m<h.count;m++){let x=r(t+h.getZ(m));h.setX(m,h.getX(m)*x.scale),h.setY(m,x.bottom+(h.getY(m)-d)*(x.top-x.bottom)/(u-d))}l.computeVertexNormals();let f=tn(new Ee(l,s));return f.position.z=t,i.add(f),f}function Zx(i,e,t,n,s){let r=new ge,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([l,h])=>new xe(l,h));r.add(tn(new Ee(new os(o,56),e.hull)));let a=tn(new Ee(new zi(1.555,.03,6,56),e.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),zt(r,.3,.7,e.hullDark,0,0,0,"y",24);let c=tn(new Ee(new Rn(.3,20,10,0,Math.PI*2,0,Math.PI/2),e.steel));c.position.y=.35,r.add(c);for(let l=0;l<7;l++){let h=new ge;h.rotation.y=l*Math.PI*2/7+.2;let d=tn(new Ee(new gt(1.08,.03,.24),e.frame));d.position.x=.84,d.position.y=.12,d.rotation.x=.42,h.add(d),r.add(h)}for(let l=0;l<3;l++){let h=new ge;h.rotation.y=l*Math.PI*2/3;let d=tn(new Ee(new gt(1.1,.12,.05),e.hullDark));d.position.x=.85,d.position.y=-.2,h.add(d),r.add(h)}return zt(r,.16,.5,e.steel,-Math.sign(t)*1.7,0,0,"x",16),r.position.set(t,n,s),i.add(r),r}function $x(i,e,t,n,s,r,o,a){let c=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,d])=>[o+h,r+d]),l=s-n;gi(i,c,l,e.hull,t*(n+l/2),.03)}function ou({cutaway:i=!1,rampOpen:e=!0}={}){let t=i?[new qn(new L(0,-1,0),3)]:null,n=qx(t),s=new ge,r=new ge;s.name="floor",r.name="back";let o=new ge;o.name="shell";let a=2.8,c=.25,l=5,h=Qn.floor,d=Qn.cabin;Se(s,a*2,h-c,d.front-d.rear,n.belly,0,(h+c)/2,(d.front+d.rear)/2,.12).userData.solid=!0,Se(s,d.right-d.left-.02,.03,d.front-d.rear,n.floor,0,h+.015,(d.front+d.rear)/2);let u=3.5,f=u-c-.12,m=c+.12+f/2;Se(o,a-d.right,f,d.front-d.rear,n.hull,-(a+d.right)/2,m,(d.front+d.rear)/2);let x=Qn.sideDoor,p=(a+d.right)/2;Se(o,a-d.right,f,x.rear-d.rear,n.hull,p,m,(x.rear+d.rear)/2),Se(o,a-d.right,f,d.front-x.front,n.hull,p,m,(d.front+x.front)/2);let g=h+x.height;Se(o,a-d.right,u-g,x.front-x.rear,n.hull,p,(u+g)/2,(x.rear+x.front)/2),Se(o,a-d.right,h-c-.12,x.front-x.rear,n.hull,p,(h+c+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([H])=>Se(o,.36,x.height+.1,.08,n.hullDark,p,h+x.height/2,H)),Se(o,.36,.08,x.front-x.rear+.08,n.hullDark,p,g,(x.rear+x.front)/2);let _=Vr(a,c,l,1.3,.3).filter(([,H])=>H>=u-.001),y=Vr(d.right,h,d.ceiling,.9,.01).filter(([,H])=>H>=u-.001).reverse(),M=[[a,u]].concat(_,[[-a,u],[d.left,u]],y,[[d.right,u]]),C=new mn(new en(M.map(([H,Z])=>new xe(H,Z))),{depth:d.front-d.rear,bevelEnabled:!1,curveSegments:4}),P=tn(new Ee(C,n.hull));P.position.z=d.rear,o.add(P);let I=Vr(a+.04,c+.1,l+.04,1.32,.3),k=Vr(d.right-.03,h+.02,d.ceiling-.03,.87,.01),A=new en(I.map(([H,Z])=>new xe(H,Z)));A.holes.push(new Js(k.slice().reverse().map(([H,Z])=>new xe(H,Z))));let v=tn(new Ee(new mn(A,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));v.position.z=d.rear,v.userData.hollow=!0,o.add(v),v.castShadow=v.receiveShadow=!1;let T=d.front,le=Qn.length,$=le-T,N=(H,Z,ne)=>{let ve=Math.min(1,Math.max(0,(ne-H)/(Z-H)));return ve*ve*(3-2*ve)},z=H=>{let Z=(H-T)/$;return{scale:1-.1*N(.25,.65,Z)-.55*Math.pow(N(.55,1,Z),1.3),top:l-2*N(.18,.66,Z)-1.45*Math.pow(N(.62,1,Z),1.4),bottom:c+.85*Math.pow(N(.5,1,Z),1.6)}},B=Vr(a,c,l,1.3,.3);hl(o,B,T,le,n.hull,z,40);let Y=(()=>{let H=B.filter(([,ve])=>ve>=2.85),Z=[0,2.6],ne=(ve,be)=>{let he=Math.hypot(ve[0]-Z[0],ve[1]-Z[1]);return[ve[0]+(ve[0]-Z[0])/he*be,ve[1]+(ve[1]-Z[1])/he*be]};return H.map(ve=>ne(ve,.035)).concat(H.slice().reverse().map(ve=>ne(ve,-.01)))})(),D=T+$*.2,b=T+$*.7;hl(o,Y,D,b,n.glass,z,24,{bottom:c,top:l});let O=Y.map(([H,Z])=>[H*1.004,Z+.004]);hl(o,O,D+(b-D)*.45,D+(b-D)*.45+.1,n.hullDark,z,2,{bottom:c,top:l}),Se(r,d.right-d.left,d.ceiling-h,.08,n.interior,0,(d.ceiling+h)/2,d.front-.04);let W=Qn.cockpitDoor;Se(r,W.right-W.left-.2,W.height,.06,n.hullDark,(W.left+W.right)/2,h+W.height/2,d.front-.09),Se(r,.25,.25,.05,n.glass,(W.left+W.right)/2,h+1.6,d.front-.13),[-1,1].forEach(H=>{Se(o,.5,1,4,n.hullDark,H*(a+.2),.85,7.4,.2),[6,8.8].forEach(Z=>{zt(o,.07,.5,n.steel,H*(a+.2),.45,Z,"y",10),zt(o,.27,.22,n.rubber,H*(a+.2),.27,Z,"x",20)})}),zt(o,.07,.4,n.steel,0,.35,13.6,"y",10),zt(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let oe=new ge,me=Math.hypot(Qn.ramp.to-Qn.ramp.from,h);Se(oe,d.right-d.left,.12,me,n.hullDark,0,-.06,-me/2);for(let H=0;H<9;H++)Se(oe,d.right-d.left-.3,.025,.05,n.frame,0,.012,-.2-H*(me-.4)/8);[-1,1].forEach(H=>Se(oe,.06,.18,me,n.yellow,H*(d.right-.03),.09,-me/2)),oe.position.set(0,h,d.rear),oe.rotation.x=e?-Math.atan2(h,Qn.ramp.to-Qn.ramp.from):Math.PI/2-.15,s.add(oe);let G=a+.55,ue=x.front-x.rear-.15;for(let H=0;H<3;H++){let Z=h-(H+1)*h/3.2;Se(s,.36,.05,ue,n.steel,a+.15+H*.32,Z,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(H=>la(o,[[a+.05,h+.95,H],[a+.5,h+.7,H],[G+.4,.75,H]],.025,n.steel)),[-1,1].forEach(H=>Se(H<0?r:o,.03,2.9,d.front-d.rear-.2,n.interior,H*(d.right-.015),h+1.6,(d.front+d.rear)/2));let Me=Qn.cells.cell,Te=H=>d.front-(H-.5)*Me;Qn.seats.forEach(([H,Z])=>{let ne=H==="A"?-1:1,ve=ne*(d.right-.35),be=Te(Z);Se(s,.5,.1,.9,n.seat,ve,h+.48,be,.03),Se(s,.1,.75,.9,n.seat,ne*(d.right-.08),h+.95,be,.03),Se(s,.04,.45,.04,n.frame,ve-ne*.2,h+.22,be-.38),Se(s,.04,.45,.04,n.frame,ve-ne*.2,h+.22,be+.38),Se(s,.03,.6,.06,n.yellow,ne*(d.right-.05),h+1,be-.25)});let F=-Me,q=Me,pe=Te(2)-Me/2,fe=d.front;[[F,pe,q,pe],[F,pe,F,fe-.1],[q,pe,q,fe-.1]].forEach(([H,Z,ne,ve])=>{Se(s,Math.max(.08,Math.abs(ne-H)),.012,Math.max(.08,Math.abs(ve-Z)),n.yellow,(H+ne)/2,h+.036,(Z+ve)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([H,Z])=>zt(s,.07,.03,n.steel,H,h+.045,Z,"y",12)),[-1,1].forEach(H=>{let Z=gi(o,[[2.55,l-.25],[4.9,l-.25],[3.55,l+1.35],[2.75,l+1.4]],.16,n.hull,0,.04);Z.rotation.z=H*-.18,Z.position.x+=H*1.55,Se(o,.06,.06,.06,H<0?n.red:n.green,H*1.82,l+1.38,2.85)}),Se(o,2.2,.5,4.2,n.hullDark,0,l+.12,7.3,.22),[-.6,.6].forEach(H=>Se(o,.6,.12,.8,n.frame,H,l+.38,6,.04)),Se(o,.08,.06,.08,n.white,0,l+.4,9.2);let S=a+.35+1.5,te=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([H,Z])=>{[-1,1].forEach(ne=>{$x(o,n,ne,a-.1,S-1.45,te,H,Z),Zx(o,n,ne*S,te,H)})}),[-1,1].forEach(H=>{Se(o,.02,.08,2.4,n.yellow,H*(a+.01),2.9,7.4),Se(o,.02,.4,.4,n.white,H*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(H=>{if(!H.isMesh)return;let Z=new Jn().setFromObject(H).getSize(new L);Math.min(Z.x,Z.y,Z.z)>=.12&&!H.userData.hollow&&(H.userData.solid=!0)});let K=new ge;return K.add(s,r,o),K}var ha={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},nu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function Jx(i,e,t,n,s,r,o,a){let c=zt(i,r,o,e.rubber,t,n,s,"x",28);zt(i,r*.62,o+.01,e.rim,t+a*.005,n,s,"x",20),zt(i,r*.2,o+.03,e.frame,t+a*.01,n,s,"x",12)}function au({type:i="suv",color:e="white",seed:t=1}={}){let n=ha[i],s=(u,f=.45,m=.35,x={})=>new Oe({color:u,roughness:f,metalness:m,...x}),r={body:s(nu[e]||nu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new Fn({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new ge,a=n.width,c=n.length,l=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){gi(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),gi(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),gi(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let u of[[.26,.3],[1.6,1.68],[3.2,3.3]])Se(o,a-.16,.62,u[1]-u[0]+.05,r.body,0,1.39,(u[0]+u[1])/2+(u[0]>3?.08:0));for(let u of[-1,1])Se(o,.05,.05,2.2,r.trim,u*(a/2-.2),1.83,1.6)}else gi(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),gi(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),Se(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,Se(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),Se(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);Se(o,a+.04,.22,.18,r.trim,0,h+.3,c-.04,.05),Se(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let u of[-1,1])Se(o,.32,.12,.05,r.lamp,u*(a/2-.3),.9,c+.005,.02),Se(o,.18,.26,.05,r.tail,u*(a/2-.15),i==="van"?1.2:.95,-.005,.02),Se(o,.06,.12,.2,r.trim,u*(a/2+.06),i==="van"?1.75:1.2,c-(i==="van"?1.35:1.15),.02);Se(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,c+.01,.02);let d=i==="van"?[.95,4.15]:[.9,3.8];for(let u of d)for(let f of[-1,1])Jx(o,r,f*(a/2-.12),l,u,l,.26,f);if(Se(o,a+.02,.08,c-.3,r.dust,0,h+.12,c/2),e==="police"){let u=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),m=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])Se(o,.02,.16,c-.8,u,x*(a/2+.005),.78,c/2);Se(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,c*.45),Se(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,c*.45),Se(o,.45,.12,.26,m,.3,i==="van"?2.3:1.95,c*.45)}return o}var sr=i=>Math.max(0,Math.min(255,Math.round(i)));function Hn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Wr(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Hn(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let f=(l(u+1,d)-l(u-1,d))*e,m=(l(u,d+1)-l(u,d-1))*e,x=Math.hypot(f,m,1),p=(d*n+u)*4;c.data[p]=(-f/x*.5+.5)*255,c.data[p+1]=(m/x*.5+.5)*255,c.data[p+2]=(1/x*.5+.5)*255,c.data[p+3]=255}return a.putImageData(c,0,0),yt(o,{srgb:!1})}function rr(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:c=0}={}){let l=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=u/e,m=d/t,x=Hi(f,m,a,4,s)*o,p=c?Math.max(0,Hi(f*7,.3,30,2,s+3))*c*(1-m):0,g=1+x-p+(l()-.5)*r/255,_=(d*e+u)*4;h.data[_]=sr(n[0]*g),h.data[_+1]=sr(n[1]*g),h.data[_+2]=sr(n[2]*g),h.data[_+3]=255}i.putImageData(h,0,0)}function cu(i,e){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,c=Hn(512,936),l=c.getContext("2d"),h=Hn(512,936),d=h.getContext("2d");rr(l,512,936,r.base,{seed:11+e*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),d.fillStyle="#808080",d.fillRect(0,0,512,936);let u=ft(31+e*13+i.length);l.fillStyle=`rgb(${r.band.join(",")})`,l.fillRect(0,a(.3),512,.3*o),l.fillStyle=`rgb(${r.stripe.join(",")})`,l.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),d.fillStyle="#9a9a9a",d.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],m=a(1.22);l.fillStyle="rgba(30,32,34,0.75)",d.fillStyle="#202020";for(let g of f)l.fillRect(g-2,0,4,936),d.fillRect(g-2,0,4,936);l.fillRect(0,m-2,512,3),d.fillRect(0,m-2,512,3),l.fillStyle="rgba(255,255,255,0.25)";for(let g of f)l.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let _=30;_<a(.32);_+=54)for(let y of[-9,9])l.fillStyle="rgba(60,62,64,0.8)",l.beginPath(),l.arc(g+y,_,2.6,0,Math.PI*2),l.fill(),d.fillStyle="#c8c8c8",d.beginPath(),d.arc(g+y,_,2.6,0,Math.PI*2),d.fill();if(i!=="inner"&&e===1){let _=a(1.95),y=512*.3;for(let M=0;M<7;M++)l.fillStyle="rgba(28,30,32,0.85)",l.fillRect(296.96,_+M*11,y,6),d.fillStyle="#303030",d.fillRect(296.96,_+M*11,y,6)}i!=="inner"&&e===2&&(l.fillStyle="rgba(40,44,46,0.9)",l.fillRect(512*.12,a(1.75),512*.22,.18*o),l.fillStyle="rgba(230,180,60,0.9)",l.font="bold 26px Arial",l.fillText("N8",512*.14,a(1.62)),d.fillStyle="#a8a8a8",d.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=l.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),l.fillStyle=x,l.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let _=u()*512,y=40+u()*300,M=l.createLinearGradient(0,0,0,y);M.addColorStop(0,"rgba(50,46,40,0.22)"),M.addColorStop(1,"rgba(50,46,40,0)"),l.fillStyle=M,l.fillRect(_,0,2+u()*5,y)}let p=yt(c);return p.wrapS=p.wrapT=Qt,{map:p,normalMap:Wr(h,4,!1)}}function lu(){let e=Hn(512,512),t=e.getContext("2d"),n=Hn(512,512),s=n.getContext("2d");rr(t,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=ft(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let c=(a+o)/16%2?.8:-.8;t.save(),t.translate(a,o),t.rotate(c),t.fillStyle="rgba(160,166,166,0.5)",t.fillRect(-5,-1.2,10,2.4),t.restore(),s.save(),s.translate(a,o),s.rotate(c),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}t.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])t.fillRect(o-1.5,0,3,512),t.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){t.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,t.lineWidth=.8;let a=r()*512,c=r()*512,l=r()*Math.PI,h=6+r()*30;t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(l)*h,c+Math.sin(l)*h),t.stroke()}return{map:yt(e),normalMap:Wr(n,3)}}function hu(){let e=Hn(512,512),t=e.getContext("2d"),n=Hn(512,512),s=n.getContext("2d");rr(t,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),t.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])t.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=ft(29);for(let o=0;o<60;o++){let a=r()*512,c=r()*512,l=10+r()*50,h=t.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),t.fillStyle=h,t.fillRect(a-l,c-l,l*2,l*2)}return{map:yt(e),normalMap:Wr(n,2)}}function du(){let e=Hn(256,256),t=e.getContext("2d"),n=Hn(256,256),s=n.getContext("2d");rr(t,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)t.fillStyle="rgba(18,18,20,0.88)",t.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:yt(e),normalMap:Wr(n,3)}}function uu(i=3){let n=Hn(512,256),s=n.getContext("2d"),r=Hn(512,256),o=r.getContext("2d");rr(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=ft(i+5);for(let c=0;c<512;c++){let l=.5+.5*Math.sin(c/512*Math.PI*2*24);o.fillStyle=`rgb(${sr(l*255)},${sr(l*255)},${sr(l*255)})`,o.fillRect(c,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-l)*.18})`,s.fillRect(c,0,1,256)}for(let c=0;c<50;c++){let l=a()*512,h=a()*256,d=4+a()*22,u=s.createRadialGradient(l,h,0,l,h,d);u.addColorStop(0,"rgba(90,44,20,0.45)"),u.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=u,s.fillRect(l-d,h-d,d*2,d*2)}return{map:yt(n),normalMap:Wr(r,5)}}function fu(i=7){let t=Hn(256,256),n=t.getContext("2d");return rr(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:yt(t)}}var pu=1.25,ht=.09,dl=new Map,ln=(i,e)=>(dl.has(i)||dl.set(i,e()),dl.get(i));function Kx(i,e){return ln("brushed"+i+(e?"v":"h"),()=>{let n=ft(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let c=0;c<900;c++){let l=n()*256,h=20+n()*200,d=n()*256,u=n();o.fillStyle=`rgba(${u>.5?230:150},${u>.5?232:154},${u>.5?236:158},0.10)`,a.fillStyle=`rgba(${u>.5?140:50},${u>.5?140:50},${u>.5?140:50},0.25)`,e?(o.fillRect(l,d,1,h),a.fillRect(l,d,1,h)):(o.fillRect(d,l,h,1),a.fillRect(d,l,h,1))}return{map:yt(s,{repeat:1}),roughnessMap:yt(r,{srgb:!1,repeat:1})}})}var ul=(i,e)=>(i.userData.envBoost=e,i),mu=(i=!1)=>ln("galleySteel"+i,()=>{let e=Kx(i?11:7,i),t=new Oe({color:15791094,map:e.map,roughnessMap:e.roughnessMap,roughness:.5,metalness:.6});return t.userData.envBoost=3.2,t}),Ne={steel:()=>mu(!1),steelVertical:()=>mu(!0),steelDark:()=>ln("galleySteelDark",()=>ul(new Oe({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>ln("galleyGroove",()=>new Oe({color:2764080,roughness:.6,metalness:.5})),plinth:()=>ln("galleyPlinth",()=>new Oe({color:2040357,roughness:.8,metalness:.2})),castIron:()=>ln("galleyIron",()=>new Oe({color:1842463,roughness:.75,metalness:.35})),knob:()=>ln("galleyKnob",()=>new Oe({color:1118740,roughness:.35,metalness:.3})),glass:()=>ln("galleyGlass",()=>new Oe({color:790290,roughness:.1,metalness:.4})),basin:()=>ln("galleyBasin",()=>ul(new Oe({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>ln("galleyChrome",()=>ul(new Oe({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>ln("galleyWhite",()=>new Oe({color:15263972,roughness:.5,metalness:.05})),display:()=>ln("galleyDisplay",()=>new Oe({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>ln("galleyLamp",()=>new Oe({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>ln("galleyRubber",()=>new Oe({color:1382170,roughness:.9})),red:()=>ln("galleyRed",()=>new Oe({color:11019292,roughness:.45,metalness:.3})),floor:()=>ln("galleyFloor",()=>{let e=ft(5),t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let c=0;c<s;c++){let l=214+Math.floor(e()*10);n.fillStyle=`rgb(${l},${l-2},${l-8})`,n.fillRect(c*r+3,a*r+3,r-6,r-6)}let o=yt(t,{repeat:1});return new Oe({map:o,roughness:.35,metalness:0})})};function ze(i,e,t,n,s,r,o){let a=new Ee(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Xr(i,e,t,n,s,r,o=12){let a=new Ee(new It(i,i,e,o),t);return a.position.set(n,s,r),a}function us(i,e,t,n){let s=new L().subVectors(e,i),r=new Ee(new It(t,t,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var Ve=.9,En=.66,gu=ht+En;function jx(i,e,t,n){let s=t-e,r=(e+t)/2;i.add(ze(s-.01,.1,En-.06,Ne.plinth(),r,.05,ht+(En-.06)/2)),i.add(ze(s-.01,Ve-.14,En-.02,Ne.steelVertical(),r,.1+(Ve-.14)/2,ht+(En-.02)/2));let o=Ve-.06,a=.12,c=ht+En-.01,l=(u,f,m)=>i.add(ze(m?.12:.03,m?.03:.12,.012,Ne.groove(),u,f,c+.002)),h=u=>i.add(ze(.006,o-a,.006,Ne.groove(),u,(o+a)/2,c+.002)),d=(u,f,m)=>i.add(ze(m-f,.006,.006,Ne.groove(),(f+m)/2,u,c+.002));if(d(o,e,t),n==="drawers"){for(let f=1;f<3;f++)d(a+(o-a)*f/3,e+.01,t-.01);for(let f=0;f<3;f++)l(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),l(r-.05,o-.08,!1),l(r+.05,o-.08,!1)):n==="mixed"&&(d(o-.18,e+.01,t-.01),l(r,o-.07,!0),h(r),l(r-.05,o-.28,!1),l(r+.05,o-.28,!1));i.add(ze(s,.04,En+.02,Ne.steel(),r,Ve-.02,ht+(En+.02)/2)),i.add(ze(s,.05,.015,Ne.steel(),r,Ve-.035,gu+.012)),i.add(ze(s,.1,.02,Ne.steel(),r,Ve+.05,ht+.01))}function xu(i,e,t,n){i.add(ze(t-e,n-Ve,.012,Ne.steelVertical(),(e+t)/2,(Ve+n)/2,ht+.006));for(let s=e+.6;s<t-.05;s+=.6)i.add(ze(.005,n-Ve,.004,Ne.groove(),s,(Ve+n)/2,ht+.013))}function Qx(i,e,t){let o=(e+t)/2;i.add(ze(t-e-.01,2.15-1.5,.34,Ne.steelVertical(),o,(1.5+2.15)/2,ht+.34/2)),i.add(ze(.006,2.15-1.5-.02,.006,Ne.groove(),o,(1.5+2.15)/2,ht+.34+.002));for(let a of[-1,1])i.add(ze(.03,.1,.012,Ne.groove(),o+a*.05,1.5+.1,ht+.34+.004));i.add(ze(t-e-.1,.012,.04,Ne.lamp(),o,1.5-.007,ht+.34-.05))}function e2(i,e,t){let n=t?[e-.2,e+.2]:[e];for(let a of n){i.add(ze(t?.36:.5,.012,.42,Ne.basin(),a,Ve-.14,ht+.36));for(let c of[-1,1])i.add(ze(.012,.14,.42,Ne.basin(),a+c*(t?.18:.25),Ve-.07,ht+.36));i.add(ze(t?.36:.5,.14,.012,Ne.basin(),a,Ve-.07,ht+.15)),i.add(ze(t?.36:.5,.14,.012,Ne.basin(),a,Ve-.07,ht+.57)),i.add(Xr(.025,.004,Ne.groove(),a,Ve-.132,ht+.36))}let s=e,r=ht+.08;i.add(Xr(.03,.06,Ne.chrome(),s,Ve+.03,r)),i.add(us(new L(s,Ve+.06,r),new L(s,Ve+.48,r),.014,Ne.chrome()));let o=new Ee(new zi(.12,.013,8,16,Math.PI),Ne.chrome());o.rotation.y=Math.PI/2,o.position.set(s,Ve+.48,r+.12),i.add(o),i.add(us(new L(s,Ve+.48,r+.24),new L(s,Ve+.36,r+.24),.016,Ne.chrome())),i.add(ze(.012,.012,.08,Ne.chrome(),s+.04,Ve+.1,r+.03))}function t2(i,e){let t=new ge,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(jx(t,.005,e-.005,s),xu(t,0,e,i.upper?1.5:1.45),i.upper&&Qx(t,.005,e-.005),(n==="sink"||n==="sink2")&&e2(t,e/2,n==="sink2"),n==="microwave"){let r=e/2,o=ht+.26;t.add(ze(.52,.3,.38,Ne.steel(),r,Ve+.15,o)),t.add(ze(.33,.21,.01,Ne.glass(),r-.07,Ve+.15,o+.19)),t.add(ze(.1,.21,.01,Ne.groove(),r+.18,Ve+.15,o+.19)),t.add(ze(.05,.015,.012,Ne.display(),r+.18,Ve+.24,o+.196))}if(n==="grinder"){let r=e/2-.1,o=ht+.3;t.add(ze(.22,.24,.36,Ne.steel(),r,Ve+.12,o)),t.add(Xr(.06,.2,Ne.chrome(),r,Ve+.3,o+.06)),t.add(ze(.26,.02,.22,Ne.chrome(),r,Ve+.41,o+.06)),t.add(ze(.04,.03,.03,Ne.red(),r+.12,Ve+.08,o+.19));let a=e/2+.22;t.add(ze(.16,.06,.26,Ne.white(),a,Ve+.03,o)),t.add(ze(.1,.3,.1,Ne.white(),a,Ve+.18,o-.08)),t.add(ze(.14,.08,.26,Ne.white(),a,Ve+.36,o)),t.add(Xr(.08,.12,Ne.chrome(),a,Ve+.12,o+.05))}return t}function n2(i,e){let t=new ge,n=e-.01,s=e/2;t.add(ze(n,.1,En-.06,Ne.plinth(),s,.05,ht+(En-.06)/2)),t.add(ze(n,Ve-.1,En,Ne.steelVertical(),s,.1+(Ve-.1)/2,ht+En/2));let r=gu+.004;t.add(ze(n-.12,.46,.02,Ne.steel(),s,.42,r+.01)),t.add(ze(n-.34,.2,.01,Ne.glass(),s,.44,r+.022)),t.add(us(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,Ne.chrome()));for(let h of[-1,1])t.add(ze(.015,.015,.05,Ne.chrome(),s+h*(n-.3)/2,.66,r+.035));t.add(ze(n-.06,.11,.02,Ne.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let d=new Ee(new It(.022,.024,.03,14),Ne.knob());d.rotation.x=Math.PI/2,d.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),t.add(d)}t.add(ze(n,.02,En,Ne.steelDark(),s,Ve-.01,ht+En/2));for(let[h,d]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){t.add(Xr(.07,.015,Ne.castIron(),s+h,Ve+.007,ht+d,16));for(let u of[0,Math.PI/2]){let f=ze(.3,.018,.018,Ne.castIron(),s+h,Ve+.03,ht+d);f.rotation.y=u,t.add(f)}}xu(t,0,e,1.75);let a=1.78,c=2.25,l=.62;t.add(ze(e+.1,c-a-.12,l,Ne.steel(),s,c-(c-a-.12)/2,ht+l/2)),t.add(ze(e+.1,.12,.03,Ne.steel(),s,a+.06,ht+l-.015)),t.add(ze(e-.06,.012,l-.08,Ne.steelDark(),s,a+.01,ht+l/2));for(let h=0;h<9;h++)t.add(ze(.012,.02,l-.14,Ne.groove(),s-e*.4+e*.8*h/8,a+.02,ht+l/2-.02));for(let h of[-1,1])t.add(ze(.14,.008,.06,Ne.lamp(),s+h*e*.28,a+.004,ht+l-.08));return t}function i2(i,e){let t=new ge,n=e-.04,s=e/2,r=.72,o=2.02;t.add(ze(n,.08,r-.06,Ne.plinth(),s,.04,ht+(r-.06)/2)),t.add(ze(n,o-.08,r,Ne.steelVertical(),s,.08+(o-.08)/2,ht+r/2));let a=ht+r;t.add(ze(n-.02,.006,.006,Ne.groove(),s,1.25,a+.003)),t.add(ze(.006,o-.12,.006,Ne.groove(),s,.08+(o-.08)/2,a+.003));for(let c of[-1,1]){t.add(us(new L(s+c*.06,.95,a+.045),new L(s+c*.06,1.55,a+.045),.012,Ne.chrome()));for(let l of[.95,1.55])t.add(ze(.015,.015,.045,Ne.chrome(),s+c*.06,l,a+.022))}return t.add(ze(.16,.06,.01,Ne.display(),s-n/4,1.82,a+.006)),t}function s2(i,e,t){let n=new ge,s=.2,r=e/2,o=t/2,a=e-s*2,c=t-s*2;n.add(ze(a-.08,.1,c-.08,Ne.plinth(),r,.05,o)),n.add(ze(a,Ve-.14,c,Ne.steelVertical(),r,.1+(Ve-.14)/2,o)),n.add(ze(a+.06,.06,c+.06,Ne.steel(),r,Ve-.06,o)),n.add(ze(a-.04,.02,c-.04,Ne.steelDark(),r,Ve-.025,o));let l=(a-.16)/2,h=(c-.16)/2;for(let m of[-1,1])for(let x of[-1,1]){let p=r+m*(l/2+.03),g=o+x*(h/2+.03);if(n.add(ze(l,.035,h,Ne.castIron(),p,Ve-.005,g)),m===x)for(let _=0;_<5;_++)n.add(ze(l*.5,.004,.012,Ne.groove(),p,Ve+.014,g-.08+_*.04))}let d=Ve+.06,u=.1,f=[[r-a/2-u,o-c/2-u],[r+a/2+u,o-c/2-u],[r+a/2+u,o+c/2+u],[r-a/2-u,o+c/2+u]];return f.forEach(([m,x],p)=>{let[g,_]=f[(p+1)%4];n.add(us(new L(m,d,x),new L(g,d,_),.016,Ne.chrome())),n.add(us(new L(m,Ve-.05,x),new L(m,d+.03,x),.02,Ne.chrome()));let y=new L(Math.sign(r-m)*u,0,Math.sign(o-x)*u);n.add(us(new L(m,Ve-.05,x),new L(m+y.x,Ve-.05,x+y.z),.015,Ne.chrome()))}),n}function r2(i,e,t){let n=new ge,s=Ne.floor().clone();s.map=s.map.clone(),s.map.repeat.set(e/1.2,t/1.2),s.map.needsUpdate=!0;let r=ze(e-.02,.006,t-.02,s,e/2,.05,t/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,c,l]=i.drain;n.add(ze(c-o,.004,l-a,Ne.groove(),(o+c)/2,.055,(a+l)/2));let h=c-o>l-a,d=Math.floor((h?c-o:l-a)/.03);for(let u=0;u<d;u++){let f=(u+.5)/d;n.add(h?ze(.008,.005,l-a-.01,Ne.steelDark(),o+(c-o)*f,.058,(a+l)/2):ze(c-o-.01,.005,.008,Ne.steelDark(),(o+c)/2,.058,a+(l-a)*f))}}return n}function fl(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new ge;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new ge;return l.add(c),l}var yu=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function _u(i){let e=i.cols*pu,t=i.rows*pu;switch(i.kind){case"galleyCounter":return fl(i,e,t,t2);case"galleyRange":return fl(i,e,t,n2);case"galleyFridge":return fl(i,e,t,i2);case"galleyIsland":return s2(i,e,t);case"galleyFloor":return r2(i,e,t);default:return null}}var vu=1.25,pt=.09,pl=new Map,or=(i,e)=>(pl.has(i)||pl.set(i,e()),pl.get(i)),xt=(i,e,t)=>or(i,()=>{let n=new Oe(e);return t&&(n.userData.envBoost=t),n});function ml(i,e){return or("fabricTexture"+i+e,()=>{let n=ft(e),s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle=`rgb(${i})`,r.fillRect(0,0,128,128);for(let o=0;o<1400;o++){let a=n()<.5?255:0;r.fillStyle=`rgba(${a},${a},${a},${.03+n()*.04})`,r.fillRect(Math.floor(n()*128),Math.floor(n()*128),1+Math.floor(n()*2),1)}return yt(s,{repeat:2})})}function o2(){return or("woodTexture",()=>{let e=ft(17),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="rgb(150,112,74)",n.fillRect(0,0,256,256);for(let s=0;s<160;s++){let r=e()*256,o=e();n.fillStyle=`rgba(${o>.5?190:90},${o>.5?146:62},${o>.5?100:36},0.18)`,n.fillRect(0,r,256,1+e()*2)}return yt(t,{repeat:1})})}function a2(){return or("rubberTexture",()=>{let e=ft(23),t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="rgb(46,48,52)",n.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=e()<.12?"160,60,40":e()<.5?"70,72,76":"30,31,34";n.fillStyle=`rgba(${r},0.8)`,n.fillRect(Math.floor(e()*128),Math.floor(e()*128),2,2)}return yt(t,{repeat:2})})}var V={frame:()=>xt("fFrame",{color:6055018,roughness:.5,metalness:.5},1.5),steel:()=>xt("fSteel",{color:12896718,roughness:.35,metalness:.65},2.5),darkSteel:()=>xt("fDarkSteel",{color:3159354,roughness:.5,metalness:.5}),black:()=>xt("fBlack",{color:1447963,roughness:.6,metalness:.2}),white:()=>xt("fWhite",{color:15132902,roughness:.45,metalness:.05}),cream:()=>xt("fCream",{color:14209730,roughness:.6}),wood:()=>xt("fWood",{map:o2(),roughness:.55}),cabinetGrey:()=>xt("fCabinetGrey",{color:9344924,roughness:.55,metalness:.25}),olive:()=>xt("fOlive",{color:6121032,roughness:.7,metalness:.1}),blanket:i=>xt("fBlanket"+i,{map:ml(i,3),roughness:.95}),sheet:()=>xt("fSheet",{map:ml("226,228,224",5),roughness:.95}),upholstery:i=>xt("fUph"+i,{map:ml(i,9),roughness:.9}),glass:()=>xt("fGlass",{color:11061460,roughness:.05,metalness:.1,transparent:!0,opacity:.35}),tintedGlass:()=>xt("fTinted",{color:2111552,roughness:.1,metalness:.3}),ceramic:()=>xt("fCeramic",{color:15921902,roughness:.2,metalness:0},1.5),chrome:()=>xt("fChrome",{color:15265008,roughness:.15,metalness:.9},3),rubber:()=>xt("fRubber",{map:a2(),roughness:.95}),mat:()=>xt("fMat",{color:2772090,roughness:.85}),red:()=>xt("fRed",{color:11020832,roughness:.5,metalness:.2}),orange:()=>xt("fOrange",{color:14185514,roughness:.5,metalness:.2}),yellow:()=>xt("fYellow",{color:14200868,roughness:.5,metalness:.2}),green:()=>xt("fGreen",{color:3115602,roughness:.5}),leather:()=>xt("fLeather",{color:3811874,roughness:.6}),lamp:()=>xt("fLamp",{color:16774880,emissive:16773328,emissiveIntensity:1.3}),ledGreen:()=>xt("fLedGreen",{color:1060880,emissive:4259680,emissiveIntensity:1}),ledRed:()=>xt("fLedRed",{color:3149840,emissive:16724e3,emissiveIntensity:1}),liquid:()=>xt("fLiquid",{color:7002292,emissive:2792058,emissiveIntensity:.7,roughness:.08,metalness:.1,transparent:!0,opacity:.82}),specimen:()=>xt("fSpecimen",{color:6969928,roughness:.7}),screen:(i,e="text")=>or("fScreen"+i+e,()=>{let t=["#5fd0ff","#ffb347","#7dff9a","#ff6a5a"],n=ir(t[i%t.length],i+40,e);return new Oe({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.85})}),map:()=>or("fMapTable",()=>{let e=ft(31),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#071a24",n.fillRect(0,0,256,256),n.strokeStyle="rgba(80,200,255,0.25)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="rgba(90,220,140,0.55)";for(let r=0;r<7;r++)n.beginPath(),n.ellipse(e()*256,e()*256,20+e()*40,12+e()*30,e()*3,0,Math.PI*2),n.fill();n.fillStyle="#ff5a40";for(let r=0;r<5;r++)n.fillRect(e()*256,e()*256,5,5);let s=yt(t,{repeat:1});return new Oe({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.7})})};function ee(i,e,t,n,s,r,o){let a=new Ee(new gt(i,e,t),n);return a.position.set(s,r,o),a}function _t(i,e,t,n,s,r,o=14,a=i){let c=new Ee(new It(a,i,e,o),t);return c.position.set(n,s,r),c}function Bt(i,e,t,n){let s=new L().subVectors(e,i),r=new Ee(new It(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var it=(i,e,t)=>new L(i,e,t);function Yr(i,e,t,n,s="70,76,88"){i.add(ee(.44,.06,.44,V.upholstery(s),e,.44,t)),i.add(ee(.44,.42,.05,V.upholstery(s),e,.44+.24,t+n*(.44/2-.02)));for(let a of[-1,1])for(let c of[-1,1])i.add(ee(.03,.44,.03,V.frame(),e+a*(.44/2-.03),.44/2,t+c*(.44/2-.03)))}function gl(i,e,t,n,s,r,o=V.wood()){i.add(ee(n-e,.04,s-t,o,(e+n)/2,r-.02,(t+s)/2));for(let a of[e+.05,n-.05])for(let c of[t+.05,s-.05])i.add(ee(.04,r-.04,.04,V.frame(),a,(r-.04)/2,c))}function Mu(i,e,t,n,s,r,o=1){i.add(ee(s,s*.6,.04,V.black(),e,t+s*.3+.08,n)),i.add(ee(s-.04,s*.6-.04,.01,V.screen(r),e,t+s*.3+.08,n+o*.022)),i.add(ee(.04,.1,.04,V.black(),e,t+.04,n)),i.add(ee(.18,.015,.14,V.black(),e,t+.008,n))}var Eu={bed(i,e,t){let n=new ge,s=Math.min(.95,e-.2),r=e/2,o=Math.min(2.05,t-.25),a=pt+.02;return n.add(ee(s+.06,.9,.05,V.wood(),r,.45,a+.025)),n.add(ee(s+.06,.55,.05,V.wood(),r,.275,a+o)),n.add(ee(s,.18,o-.05,V.frame(),r,.25,a+o/2)),n.add(ee(s-.04,.16,o-.08,V.sheet(),r,.42,a+o/2+.01)),n.add(ee(s-.02,.06,o*.62,V.blanket(i.color||"64,82,110"),r,.52,a+o*.66)),n.add(ee(s*.7,.1,.34,V.sheet(),r,.55,a+.25)),n},nightstand(i,e){let t=new ge,n=e/2,s=pt+.24;return t.add(ee(.45,.55,.42,V.wood(),n,.275,s)),t.add(ee(.12,.02,.01,V.darkSteel(),n,.44,s+.215)),t.add(_t(.05,.03,V.darkSteel(),n-.1,.565,s-.05)),t.add(Bt(it(n-.1,.57,s-.05),it(n-.1,.82,s-.05),.008,V.darkSteel())),t.add(_t(.09,.1,V.cream(),n-.1,.86,s-.05,12,.05)),t},wardrobe(i,e){let t=new ge,n=e-.15,s=e/2,r=pt+.3;t.add(ee(n,2,.58,V.wood(),s,1,r)),t.add(ee(.006,1.86,.006,V.black(),s,1,r+.293));for(let o of[-1,1])t.add(ee(.02,.22,.02,V.chrome(),s+o*.05,1.1,r+.3));return t},cabinTable(i,e){let t=new ge,n=pt+.01;gl(t,.15,n,e-.15,n+.62,.74),t.add(ee(e-.4,.03,.24,V.wood(),e/2,1.45,n+.12));for(let s of[e*.3,e*.7])Yr(t,s,n+.82,1);return t.add(ee(.3,.22,.2,V.darkSteel(),e*.3,.85,n+.2)),t},deskChair(i,e){let t=new ge,n=pt+.01;return gl(t,.08,n,e-.08,n+.62,.74),Mu(t,e/2,.74,n+.18,.48,i.seed||1),t.add(ee(.42,.02,.14,V.black(),e/2,.75,n+.42)),Yr(t,e/2,n+.86,1,"40,44,52"),t},safe(i,e){let t=new ge,n=e/2,s=pt+.26;return t.add(ee(.55,.9,.5,V.olive(),n,.45,s)),t.add(_t(.06,.03,V.chrome(),n,.55,s+.26,16).rotateX(Math.PI/2)),t.add(ee(.03,.12,.03,V.chrome(),n+.18,.45,s+.26)),t},sofa(i,e){let t=new ge,n=i.color||"96,68,52",s=pt+.02,r=.86;t.add(ee(e-.1,.4,r,V.upholstery(n),e/2,.2,s+r/2)),t.add(ee(e-.1,.5,.18,V.upholstery(n),e/2,.6,s+.09));for(let o of[.12,e-.12])t.add(ee(.14,.62,r,V.upholstery(n),o,.31,s+r/2));for(let o=0;o<2;o++)t.add(ee((e-.4)/2-.02,.1,r-.24,V.upholstery(n),.2+(e-.4)/4+o*(e-.4)/2,.45,s+r/2+.06));return t},diningTable(i,e,t){let n=new ge,s=t/2;gl(n,.3,s-.42,e-.3,s+.42,.75,V.cabinetGrey());for(let r of[e*.3,e*.7])Yr(n,r,s-.72,-1,"120,62,40"),Yr(n,r,s+.72,1,"120,62,40");return n.add(ee(.2,.08,.2,V.white(),e/2,.79,s)),n},servingCounter(i,e){let t=new ge,n=pt+.35;t.add(ee(e-.05,.9,.68,V.steel(),e/2,.45,n)),t.add(ee(e-.05,.03,.3,V.chrome(),e/2,1.25,n+.1));for(let s of[.15,e-.15])t.add(Bt(it(s,.9,n+.2),it(s,1.25,n+.2),.01,V.chrome()));for(let s=0;s<Math.floor(e/.4);s++)t.add(ee(.3,.04,.22,V.darkSteel(),.25+s*.4,.92,n-.05));return t},medBed(i,e,t){let n=new ge,s=e/2,r=Math.min(2.05,t-.25),o=pt+.12;n.add(ee(.9,.06,r,V.white(),s,.5,o+r/2));for(let c of[-.38,.38])for(let l of[o+.1,o+r-.1])n.add(ee(.04,.4,.04,V.chrome(),s+c,.28,l)),n.add(_t(.05,.04,V.black(),s+c,.05,l,10).rotateZ(Math.PI/2));n.add(ee(.84,.12,r*.62,V.sheet(),s,.59,o+r*.62));let a=ee(.84,.12,r*.36,V.sheet(),s,.72,o+r*.2);a.rotation.x=.45,n.add(a),n.add(ee(.5,.09,.3,V.white(),s,.86,o+.22)),n.add(ee(.74,.05,r*.5,V.blanket("120,160,190"),s,.67,o+r*.68));for(let c of[-1,1])n.add(ee(.02,.2,r*.45,V.chrome(),s+c*.46,.7,o+r*.55));if(n.add(ee(.94,.5,.04,V.white(),s,.75,o)),i.monitor!==!1){let c=e-.12;n.add(Bt(it(c,0,o+.1),it(c,1.5,o+.1),.02,V.chrome())),n.add(ee(.3,.24,.08,V.white(),c,1.45,o+.15)),n.add(ee(.26,.18,.01,V.screen(2,"wave"),c,1.45,o+.195)),n.add(Bt(it(c-.05,1.6,o+.1),it(c-.05,1.9,o+.1),.01,V.chrome())),n.add(ee(.1,.16,.04,V.glass(),c-.05,1.82,o+.1))}return n},opTable(i,e,t){let n=new ge,s=e/2,r=t/2;return n.add(ee(.6,.06,.5,V.darkSteel(),s,.03,r)),n.add(_t(.12,.75,V.steel(),s,.42,r)),n.add(ee(.56,.1,1.95,V.steel(),s,.84,r)),n.add(ee(.52,.06,1.9,V.upholstery("40,96,120"),s,.92,r)),n.add(Bt(it(e-.1,0,.2),it(e-.1,2.3,.2),.04,V.white())),n.add(Bt(it(e-.1,2.3,.2),it(s,2.15,r),.03,V.white())),n.add(_t(.32,.12,V.white(),s,2.1,r,20,.2)),n.add(_t(.28,.01,V.lamp(),s,2.035,r,20)),n},medCart(i,e){let t=new ge,n=e/2,s=pt+.35;t.add(ee(.55,.9,.45,V.white(),n,.5,s));for(let r of[-.22,.22])for(let o of[-.18,.18])t.add(_t(.04,.04,V.black(),n+r,.04,s+o,8).rotateZ(Math.PI/2));for(let r=0;r<3;r++)t.add(ee(.5,.005,.005,V.darkSteel(),n,.3+r*.22,s+.226));return Mu(t,n,.95,s-.05,.42,2),t.add(_t(.06,.4,V.green(),n+.2,1.15,s+.12,10)),t},showerCabin(i,e){let t=new ge,n=Math.min(.95,e-.2),s=e/2,r=pt+.02,o=r+n;t.add(ee(n,.12,n,V.ceramic(),s,.06,(r+o)/2)),t.add(ee(n,2,.02,V.white(),s,1,r+.01));for(let a of[-1,1])t.add(ee(.012,1.9,n,V.glass(),s+a*n/2,1.07,(r+o)/2));t.add(ee(n,1.9,.012,V.glass(),s,1.07,o));for(let a of[-1,1])t.add(ee(.03,1.95,.03,V.chrome(),s+a*n/2,1.05,o));return t.add(Bt(it(s,.9,r+.05),it(s,1.95,r+.05),.012,V.chrome())),t.add(_t(.08,.02,V.chrome(),s,1.95,r+.14,14)),t.add(ee(.08,.12,.04,V.chrome(),s,1.1,r+.04)),t},washbasin(i,e){let t=new ge,n=e/2,s=pt+.26;return t.add(ee(.58,.16,.44,V.ceramic(),n,.8,s)),t.add(ee(.46,.04,.32,V.chrome(),n,.86,s+.02)),t.add(ee(.14,.7,.14,V.ceramic(),n,.36,s-.1)),t.add(Bt(it(n,.88,pt+.05),it(n,1.02,pt+.12),.012,V.chrome())),t.add(ee(.5,.65,.02,V.chrome(),n,1.45,pt+.01)),t.add(ee(.46,.6,.01,V.tintedGlass(),n,1.45,pt+.025)),t},toilet(i,e){let t=new ge,n=e/2,s=e-.1,r=pt,o=1;for(let a of[-1,1])t.add(ee(.03,1.9,o,V.cabinetGrey(),n+a*s/2,1.07,r+o/2));return t.add(ee(s-.06,1.75,.03,V.cabinetGrey(),n,1,r+o)),t.add(ee(.03,.1,.03,V.chrome(),n+s/2-.15,1,r+o+.02)),t.add(ee(.36,.36,.5,V.ceramic(),n,.2,r+.35)),t.add(ee(.38,.4,.16,V.ceramic(),n,.6,r+.1)),t},washer(i,e){let t=new ge,n=e/2,s=pt+.32;for(let[r,o]of[[.43,1],[1.29,2]])t.add(ee(.6,.84,.6,V.white(),n,r,s)),t.add(_t(.2,.02,V.tintedGlass(),n,r-.04,s+.305,18).rotateX(Math.PI/2)),t.add(_t(.23,.015,V.chrome(),n,r-.04,s+.3,18).rotateX(Math.PI/2)),t.add(ee(.12,.04,.01,o===1?V.ledGreen():V.ledRed(),n+.18,r+.33,s+.305));return t},treadmill(i,e,t){let n=new ge,s=e/2,r=pt+.15,o=Math.min(1.9,t-.4);n.add(ee(.8,.18,o,V.darkSteel(),s,.12,r+o/2+.1)),n.add(ee(.56,.02,o-.2,V.black(),s,.22,r+o/2+.1));for(let a of[-1,1])n.add(Bt(it(s+a*.36,.2,r+.15),it(s+a*.34,1.3,r+.05),.03,V.frame())),n.add(Bt(it(s+a*.34,1,r+.1),it(s+a*.34,1,r+.6),.02,V.black()));return n.add(ee(.72,.28,.12,V.black(),s,1.32,r+.08)),n.add(ee(.4,.16,.01,V.screen(0,"wave"),s,1.34,r+.145)),n},exerciseBike(i,e){let t=new ge,n=e/2,s=.62;return t.add(ee(.5,.05,.08,V.frame(),n,.03,s-.4)),t.add(ee(.5,.05,.08,V.frame(),n,.03,s+.4)),t.add(ee(.08,.06,.8,V.frame(),n,.06,s)),t.add(_t(.22,.08,V.darkSteel(),n,.32,s-.28,18).rotateZ(Math.PI/2)),t.add(Bt(it(n,.06,s-.3),it(n,1.05,s-.36),.03,V.frame())),t.add(ee(.46,.04,.06,V.black(),n,1.07,s-.36)),t.add(ee(.2,.12,.08,V.black(),n,1.16,s-.38)),t.add(Bt(it(n,.06,s+.3),it(n,.88,s+.16),.03,V.frame())),t.add(ee(.24,.07,.3,V.black(),n,.92,s+.14)),t.add(_t(.12,.05,V.red(),n,.36,s-.02,14).rotateZ(Math.PI/2)),t},powerRack(i,e,t){let n=new ge,s=e-.3,r=Math.min(1.2,t-.3),o=(e-s)/2,a=(t-r)/2;for(let c of[o,o+s])for(let l of[a,a+r])n.add(ee(.07,2.25,.07,V.black(),c,1.125,l));for(let c of[o,o+s])n.add(ee(.07,.07,r,V.black(),c,2.22,a+r/2));for(let c of[a,a+r])n.add(ee(s,.07,.07,V.black(),o+s/2,2.22,c));n.add(Bt(it(o-.35,1.35,a+.2),it(o+s+.35,1.35,a+.2),.016,V.chrome()));for(let c of[o-.22,o+s+.22])n.add(_t(.225,.05,V.black(),c,1.35,a+.2,20).rotateZ(Math.PI/2));return n.add(ee(s-.1,.02,r-.1,V.rubber(),o+s/2,.01,a+r/2)),n},weightBench(i,e,t){let n=new ge,s=e/2,r=.3,o=Math.min(1.3,t-.6);n.add(ee(.3,.08,o,V.leather(),s,.45,r+o/2+.2));for(let a of[r+.35,r+o])n.add(ee(.06,.42,.06,V.black(),s,.21,a));n.add(ee(.5,.04,.06,V.black(),s,.02,r+o));for(let a of[-1,1])n.add(ee(.05,1.2,.05,V.black(),s+a*.42,.6,r+.15));n.add(Bt(it(s-.85,1.12,r+.15),it(s+.85,1.12,r+.15),.014,V.chrome()));for(let a of[-1,1])n.add(_t(.17,.04,V.black(),s+a*.6,1.12,r+.15,18).rotateZ(Math.PI/2));return n},dumbbellRack(i,e){let t=new ge,n=pt+.3;for(let s of[.1,e-.1])t.add(ee(.05,.8,.45,V.black(),s,.4,n));for(let[s,r]of[[.45,0],[.75,0]]){t.add(ee(e-.2,.03,.4,V.darkSteel(),e/2,s+r,n));let o=Math.floor((e-.3)/.22);for(let a=0;a<o;a++){let c=.25+a*.22,l=.05+a*.006;for(let h of[-.08,.08])t.add(_t(l,.05,V.black(),c,s+l+.02,n+h,10).rotateX(Math.PI/2));t.add(Bt(it(c,s+l+.02,n-.1),it(c,s+l+.02,n+.1),.012,V.chrome()))}}return t},gymMat(i,e,t){let n=new ge;return n.add(ee(e-.1,.05,t-.1,V.mat(),e/2,.025,t/2)),n.add(ee(e-.1,.006,.02,V.white(),e/2,.053,t/2)),n},punchingBag(i,e,t){let n=new ge,s=e/2,r=t/2;return n.add(ee(.5,.05,.5,V.black(),s-.3,.025,r)),n.add(Bt(it(s-.45,0,r),it(s-.45,2.3,r),.035,V.black())),n.add(Bt(it(s-.45,2.25,r),it(s,2.25,r),.03,V.black())),n.add(Bt(it(s,2.25,r),it(s,1.75,r),.006,V.chrome())),n.add(_t(.17,1,V.red(),s,1.2,r,16)),n},gunRack(i,e){let t=new ge,n=pt+.22;t.add(ee(e-.08,1.9,.04,V.olive(),e/2,.95,pt+.02)),t.add(ee(e-.08,.5,.4,V.olive(),e/2,.25,n)),t.add(ee(e-.1,.04,.3,V.darkSteel(),e/2,1.5,n-.03));for(let r of[.04,e-.04])t.add(ee(.04,1.9,.42,V.olive(),r,.95,n));let s=Math.max(2,Math.floor((e-.2)/.16));for(let r=0;r<s;r++){let o=.15+r*(e-.3)/(s-1);t.add(ee(.05,.85,.08,V.black(),o,.98,n)),t.add(ee(.035,.22,.12,V.black(),o,.68,n+.04)),t.add(ee(.03,.12,.05,V.darkSteel(),o,1.44,n+.04))}return t},fumeHood(i,e){let t=new ge,n=e/2,s=pt+.36;t.add(ee(e-.1,.9,.7,V.cabinetGrey(),n,.45,s)),t.add(ee(e-.1,.04,.72,V.black(),n,.92,s));for(let r of[-1,1])t.add(ee(.04,1.05,.7,V.white(),n+r*(e/2-.07),1.45,s));return t.add(ee(e-.1,.06,.7,V.white(),n,2,s)),t.add(ee(e-.18,.02,.36,V.white(),n,1.97,s)),t.add(ee(e-.2,.6,.012,V.glass(),n,1.55,s+.34)),t.add(ee(.3,.45,.3,V.steel(),n,2.25,s-.12)),t.add(_t(.04,.2,V.yellow(),n-.2,1.04,s-.1,10,.03)),t.add(_t(.05,.14,V.glass(),n+.1,1.01,s,12)),t},bioCabinet(i,e){let t=new ge,n=e/2,s=pt+.38;for(let o of[-.42,.42])t.add(ee(.05,.7,.6,V.frame(),n+o,.35,s));t.add(ee(e-.12,1.15,.74,V.white(),n,1.28,s));let r=ee(e-.22,.6,.01,V.glass(),n,1.3,s+.38);return r.rotation.x=-.18,t.add(r),t.add(ee(e-.24,.02,.5,V.lamp(),n,1.62,s+.05)),t.add(ee(.2,.06,.01,V.ledGreen(),n+.3,1.78,s+.375)),t},instrumentRack(i,e){let t=new ge,n=e/2,s=pt+.32;t.add(ee(e-.15,1.85,.6,V.darkSteel(),n,.925,s));for(let r=0;r<5;r++){let o=.25+r*.33;t.add(ee(e-.25,.28,.02,r%2?V.cabinetGrey():V.black(),n,o,s+.305)),t.add(ee(.3,.16,.01,V.screen(r+(i.seed||0),r%2?"wave":"text"),n-.15,o,s+.317)),t.add(ee(.03,.03,.01,r%3?V.ledGreen():V.ledRed(),n+.25,o+.06,s+.317))}return t},testRig(i,e,t){let n=new ge,s=e/2,r=t/2,o=e-.4,a=t-.5;n.add(ee(o,.8,a,V.cabinetGrey(),s,.4,r)),n.add(ee(o+.04,.05,a+.04,V.black(),s,.82,r)),n.add(_t(.42,.9,V.steel(),s,1.3,r,20)),n.add(_t(.44,.06,V.orange(),s,1.78,r,20)),n.add(_t(.12,.02,V.tintedGlass(),s,1.3,r+.43,16).rotateX(Math.PI/2));for(let c of[.6,2.2,4])n.add(Bt(it(s+Math.cos(c)*.4,1,r+Math.sin(c)*.4),it(s+Math.cos(c)*(o/2),.84,r+Math.sin(c)*(a/2)),.02,V.black()));return n.add(ee(.5,.35,.3,V.black(),s+o/2-.3,1,r-a/2+.2)),n.add(ee(.4,.22,.01,V.screen(1,"wave"),s+o/2-.3,1.02,r-a/2+.355)),n},specimenTank(i,e,t){let n=new ge,s=e/2,r=t/2;n.add(_t(.45,.3,V.darkSteel(),s,.15,r,20)),n.add(_t(.4,1.6,V.liquid(),s,1.1,r,20));for(let a of[.8,2.4,3.9,5.5])n.add(ee(.03,1.65,.03,V.chrome(),s+Math.cos(a)*.42,1.12,r+Math.sin(a)*.42));n.add(_t(.45,.2,V.darkSteel(),s,2.03,r,20));let o=new Ee(new Rn(.22,14,10),V.specimen());o.scale.set(.8,1.6,.7),o.position.set(s,1.15,r),n.add(o);for(let a of[.5,2.6])n.add(Bt(it(s+Math.cos(a)*.3,2.1,r+Math.sin(a)*.3),it(s+Math.cos(a)*.3,2.45,r+Math.sin(a)*.3),.025,V.black()));return n.add(ee(.1,.06,.01,V.ledGreen(),s,.2,r+.455)),n},freezer(i,e){let t=new ge,n=e/2,s=pt+.38;return t.add(ee(e-.2,1.95,.72,V.white(),n,.975,s)),t.add(ee(.03,.6,.03,V.chrome(),n+e/2-.2,1.1,s+.37)),t.add(ee(.2,.08,.01,V.screen(0,"text"),n,1.75,s+.362)),t},commandTable(i,e,t){let n=new ge,s=e/2,r=t/2,o=e-.5,a=t-.5;return n.add(ee(o-.2,.85,a-.2,V.darkSteel(),s,.425,r)),n.add(ee(o,.06,a,V.black(),s,.88,r)),n.add(ee(o-.1,.01,a-.1,V.map(),s,.915,r)),n},wallScreen(i,e){let t=new ge,n=e/2,s=pt+.08;return t.add(ee(e-.2,1.1,.08,V.black(),n,1.55,s)),t.add(ee(e-.3,1,.01,V.screen(i.seed||3,"wave"),n,1.55,s+.045)),t.add(ee(e-.2,.75,.3,V.darkSteel(),n,.375,s+.12)),t},chairRow(i,e,t){let n=new ge,s=Math.max(1,Math.floor(e/.6)),r=t/2;n.add(ee(e-.1,.05,.08,V.frame(),e/2,.06,r));for(let o=0;o<s;o++)Yr(n,(o+.5)*e/s,r,-1,"52,60,74");return n},bench(i,e,t){let n=new ge,s=t/2;n.add(ee(e-.2,.05,.36,V.wood(),e/2,.45,s));for(let r of[.25,e-.25])n.add(ee(.06,.43,.3,V.frame(),r,.215,s));return n},machineTool(i,e){let t=new ge,n=pt+.45,s=e/2;return t.add(ee(e-.2,.85,.8,V.green(),s,.425,n)),t.add(ee(e-.3,.06,.6,V.steel(),s,.88,n+.05)),t.add(ee(.5,.55,.55,V.green(),.45,1.18,n-.05)),t.add(_t(.06,.3,V.chrome(),.85,1.05,n+.05,12).rotateZ(Math.PI/2)),t.add(ee(.35,.3,.35,V.green(),e-.45,1.06,n)),t.add(ee(e-.3,.45,.012,V.glass(),s,1.15,n+.38)),t.add(ee(.28,.36,.1,V.black(),e-.2,1.4,n-.2)),t.add(ee(.2,.14,.01,V.screen(1,"text"),e-.2,1.45,n-.145)),t.add(ee(.1,.06,.04,V.red(),e-.2,1.25,n-.14)),t},repairStand(i,e,t){let n=new ge;n.add(ee(e-.2,.01,t-.2,V.darkSteel(),e/2,.006,t/2));for(let s of[.12,t-.12])n.add(ee(e-.2,.012,.1,V.yellow(),e/2,.012,s));for(let s of[.12,e-.12])n.add(ee(.1,.012,t-.2,V.yellow(),s,.012,t/2));return n},shelf(i,e){let t=new ge,n=pt+.18,s=ft(i.col*31+i.row);for(let r of[.06,e-.06])t.add(ee(.03,1.9,.34,V.wood(),r,.95,n));for(let r=0;r<5;r++){let o=.05+r*.45;if(t.add(ee(e-.1,.03,.34,V.wood(),e/2,o,n)),r===4)continue;let a=.1;for(;a<e-.15;){let c=.04+s()*.05,l=.24+s()*.14,h=[V.red(),V.olive(),V.cabinetGrey(),V.yellow(),V.black()];t.add(ee(c,l,.24,h[Math.floor(s()*h.length)],a+c/2,o+.015+l/2,n)),a+=c+.005}}return t}};function c2(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new ge;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new ge;return l.add(c),l}var bu=new Set(Object.keys(Eu));function wu(i){let e=Eu[i.kind];return e?c2(i,i.cols*vu,i.rows*vu,e):null}var bn=i=>Math.max(0,Math.min(255,Math.round(i))),vt=(i,e,t)=>new L(i,e,t),xl=new Map,ei=(i,e)=>(xl.has(i)||xl.set(i,e()),xl.get(i)),Gt=(i,e)=>ei("city_"+i,()=>new Oe(e));function yi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function ua(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=yi(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(h,d)=>(t?(h=(h+n)%n,d=(d+s)%s):(h=Math.max(0,Math.min(n-1,h)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+h)*4]/255);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let u=(l(d+1,h)-l(d-1,h))*e,f=(l(d,h+1)-l(d,h-1))*e,m=Math.hypot(u,f,1),x=(h*n+d)*4;c.data[x]=(-u/m*.5+.5)*255,c.data[x+1]=(f/m*.5+.5)*255,c.data[x+2]=(1/m*.5+.5)*255,c.data[x+3]=255}return a.putImageData(c,0,0),yt(o,{srgb:!1})}function ps(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:c=4}={}){let l=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let m=1+Hi(u/e,d/t,a,c,s)*o+(l()-.5)*r/255,x=(d*e+u)*4;h.data[x]=bn(n[0]*m),h.data[x+1]=bn(n[1]*m),h.data[x+2]=bn(n[2]*m),h.data[x+3]=255}i.putImageData(h,0,0)}var da=(i,e=1)=>`rgba(${i[0]},${i[1]},${i[2]},${e})`,_l={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},vl=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Cu=i=>{let[e,t]=i.split("_");return{base:e,role:t,colors:_l[e]}};function l2(i,e){let{base:t,role:n,colors:s}=Cu(i),r=512,o=936,a=o/2.28,c=x=>o-x*a,l=yi(r,o),h=l.getContext("2d"),d=yi(r,o),u=d.getContext("2d");ps(h,r,o,s.wall,{seed:41+e*5+t.length*3,grain:t==="bank"?14:8,dirt:.08,scale:3}),u.fillStyle="#808080",u.fillRect(0,0,r,o);let f=ft(61+e*11+t.length);if(t==="police"&&n!=="g"){let x=.075*a,p=.26*a;for(let g=0;g*x<o;g++){let _=o-(g+1)*x,y=g%2?p/2:0;for(let M=-y;M<r;M+=p){let C=.86+f()*.26;h.fillStyle=da(s.wall.map(P=>bn(P*C))),h.fillRect(M+2,_+2,p-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,_,r,2.5),u.fillStyle="#505050",u.fillRect(0,_,r,3);for(let M=-y;M<r;M+=p)h.fillRect(M,_,2.5,x),u.fillRect(M,_,3,x)}}if(n==="g"||t==="bank"){let p=t==="police"?[212,204,188]:null;p&&ps(h,r,o,p,{seed:71+e,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let _=c(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,_-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,_+3,r,2),u.fillStyle="#202020",u.fillRect(0,_-3,r,7),t==="bank"){let y=.62*a,M=g%2?y/2:0;for(let C=M;C<r;C+=y)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(C-1.5,_,3,.32*a),u.fillStyle="#303030",u.fillRect(C-2,_,4,.32*a)}}}for(let x=0;x<8;x++){let p=f()*r,g=60+f()*240,_=h.createLinearGradient(0,0,0,g);_.addColorStop(0,"rgba(70,60,50,0.12)"),_.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=_,h.fillRect(p,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,c(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,c(.9),r,.9*a)}let m=yt(l);return m.wrapS=m.wrapT=Qt,{map:m,normalMap:ua(d,4,!1)}}function Su(i,e="plaster"){let s=410.5263157894737,r=yi(512,936),o=r.getContext("2d"),a=yi(512,936),c=a.getContext("2d");if(c.fillStyle="#808080",c.fillRect(0,0,512,936),e==="vault"){ps(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",c.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),c.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),c.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let d=24;d<512;d+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(d,h,4,0,Math.PI*2),o.fill(),c.fillStyle="#d0d0d0",c.beginPath(),c.arc(d,h,4,0,Math.PI*2),c.fill()}else ps(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),c.fillStyle="#b0b0b0",c.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),c.fillStyle="#a0a0a0",c.fillRect(0,936-.95*s,512,6);let l=yt(r);return l.wrapS=l.wrapT=Qt,{map:l,normalMap:ua(a,3,!1)}}var ce={facade:(i,e)=>ei(`facade_${i}_${e}`,()=>{let t=l2(i,e);return new Oe({map:t.map,normalMap:t.normalMap,roughness:.85,metalness:0})}),plaster:i=>ei("plaster"+i,()=>{let e=Su(i);return new Oe({map:e.map,normalMap:e.normalMap,roughness:.9})}),vault:()=>ei("vaultWall",()=>{let i=Su(0,"vault");return new Oe({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Gt("trim_"+i,{color:new $e().setRGB(..._l[i].trim.map(e=>(e/255)**2.2)),roughness:.75}),plinth:i=>Gt("plinth_"+i,{color:new $e().setRGB(..._l[i].plinth.map(e=>(e/255)**2.2)),roughness:.9}),glass:()=>ei("city_glass",()=>new Fn({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Gt("frame",{color:15789282,roughness:.6}),wood:()=>Gt("wood",{color:5913124,roughness:.65}),darkWood:()=>Gt("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Gt("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Gt("greenDoor",{color:2375726,roughness:.55}),iron:()=>Gt("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Gt("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Gt("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Gt("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Gt("stone",{color:13156528,roughness:.85}),granite:()=>Gt("granite",{color:9078402,roughness:.8}),ceiling:()=>Gt("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Gt("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Gt("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Gt("fabric"+i,{color:i,roughness:.95}),paint:i=>Gt("paint"+i,{color:i,roughness:.6}),water:()=>ei("city_water",()=>new Fn({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>ei("city_spray",()=>new Oe({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>ei("leaves"+i,()=>new Oe({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Gt("sandFill",{color:14073994,roughness:1})};function h2(i){let t=yi(512,512),n=t.getContext("2d"),s=yi(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=ft(i.length*17+3);if(i==="parquet"){ps(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,c=a/5;for(let l=-12;l<30;l++)for(let h=-2;h<14;h++)for(let d of[0,1]){let u=.8+o()*.35;n.save(),n.translate(l*c*2+h*0+d*c,h*a-l*c*0),n.rotate(d?Math.PI/4:-Math.PI/4),n.fillStyle=da([bn(158*u),bn(106*u),bn(64*u)]),n.fillRect(0,0,a*.7,c*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let l=0;l<512;l+=c*1.41)n.beginPath(),n.moveTo(0,l),n.lineTo(512,l+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let c=0;c<2;c++){let l=(c+a)%2===0;n.fillStyle=l?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(c*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let c=o()*512,l=o()*512;n.moveTo(c,l);for(let h=0;h<6;h++)c+=(o()-.3)*60,l+=(o()-.5)*50,n.lineTo(c,l);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){ps(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let c=0;c<a;c++)for(let l=0;l<a;l++){let h=.92+o()*.12;n.fillStyle=(l+c)%2?`rgba(${bn(110*h)},${bn(116*h)},${bn(110*h)},1)`:`rgba(${bn(206*h)},${bn(204*h)},${bn(192*h)},1)`,n.fillRect(l*512/a+1,c*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let c=0;c<=512;c+=512/a)r.fillRect(c-1,0,2,512),r.fillRect(0,c-1,512,2)}else{ps(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let c=8+a/16%2*8;c<512;c+=16)n.save(),n.translate(c,a),n.rotate((c+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(c,a),r.rotate((c+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:yt(t),normalMap:ua(s,2)}}function Pu(i){return ei("floor_"+i,()=>{let e=h2(i);return new Oe({map:e.map,normalMap:e.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function Pe(i,e,t,n,s,r,o){let a=new Ee(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Bn(i,e,t,n,s,r,o,a=16){let c=new Ee(new It(i,e,t,a),n);return c.position.set(s,r,o),c}function Cn(i,e,t,n,s,r=32){let o=new Ee(new os(i.map(([a,c])=>new xe(a,c)),r),e);return o.position.set(t,n,s),o}function qr(i,e,t,n){let s=new en;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,e),s.closePath();let r=new mn(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new Ee(r,n)}var yl=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Iu(i,e,t,n,s,r,o){let{wallBox:a,isIndoor:c,THICK:l,PANEL_H:h}=o,d=new ge,u=s.type,f=s.style,m=r?.8:h,x=l/2,p=(e*73856093^t*19349663^n*83492791)>>>0,g=c(n,e,t),_=i==="W"?c(n,e-1,t):c(n,e,t-1),y=vl(f)?Cu(f):null,M=$=>f==="vault"?ce.vault():!y||$?ce.plaster(p%3):ce.facade(f,p%3),C=y?ce.trim(y.base):ce.slabEdge(),P=M(g),I=M(_),k=i==="W"?[P,I,C,C,C,C]:[C,C,C,C,P,I],A=y?g?-1:1:0,v=n*ut,T=($,N,z,B,Y,D,b)=>{let O=D-Y,W=A*(l/2+(Y+D)/2),oe=i==="W"?new gt(O,B-z,N-$):new gt(N-$,B-z,O),me=new Ee(oe,b);return i==="W"?me.position.set(e*U+W,v+(z+B)/2,t*U+($+N)/2):me.position.set(e*U+($+N)/2,v+(z+B)/2,t*U+W),d.add(me),me},le=($,N,z,B)=>{let Y=new mn($,{depth:z-N,bevelEnabled:!1,curveSegments:16});(i==="W"?A<0:A>0)?Y.translate(0,0,l/2+N):Y.translate(0,0,-(l/2+z)),i==="W"&&Y.rotateY(-Math.PI/2);let b=new Ee(Y,B);return b.position.set(e*U,v,t*U),d.add(b),b};if(u==="rail"){let $=f==="fence",N=$?ce.fenceGreen():ce.iron(),z=$?1.1:.95,B=(Y,D,b,O,W,oe=N)=>d.add(a(i,e,t,n,Y,D,b,O,Array(6).fill(oe),W));for(let Y of[0,U])B(Y-.03,Y+.03,0,z+.04,.06);B(0,U,z-.04,z,.05,$?N:ce.darkWood()),B(0,U,.08,.12,.035),$&&B(0,U,z-.3,z-.27,.03);for(let Y=.1;Y<U-.05;Y+=.12)B(Y-.009,Y+.009,.1,z-($?-.06:.02),.018),$&&B(Y-.02,Y+.02,z+.02,z+.07,.025);return d}if(u==="wall")d.add(a(i,e,t,n,-x,U+x,0,m,k));else if(u==="door"){let N=Math.min(2.1,m),z=(U-.92)/2,B=(U+.92)/2;d.add(a(i,e,t,n,-x,z,0,m,k)),d.add(a(i,e,t,n,B,U+x,0,m,k)),m>N+.01&&d.add(a(i,e,t,n,z,B,N,m,k));let Y=f==="vault"?ce.steel():ce.wood(),D=Array(6).fill(Y),b=f==="vault"?.12:.06;if(d.add(a(i,e,t,n,z-b,z,0,N,D,l+.05)),d.add(a(i,e,t,n,B,B+b,0,N,D,l+.05)),m>N+.01&&d.add(a(i,e,t,n,z-b,B+b,N,N+b,D,l+.05)),d.add(a(i,e,t,n,z,B,0,.03,Array(6).fill(ce.stone()),l+.1)),y&&!r){let O=ce.trim(y.base);if(T(z-.16,z-.04,0,N+.1,0,.05,O),T(B+.04,B+.16,0,N+.1,0,.05,O),T(z-.16,B+.16,N+.04,N+.16,0,.05,O),N+.42<m){T(z-.26,B+.26,N+.26,N+.34,0,.22,O);for(let W of[z-.18,B+.18])T(W-.05,W+.05,N+.12,N+.26,0,.16,O)}}}else{let $=y&&y.base==="bank"&&y.role==="g",N=.78,z=$?.62:y&&y.role==="g"?.75:.7,B=$?2.08:2,Y=(U-N)/2,D=(U+N)/2,b=$?B-N/2:B;if(r)d.add(a(i,e,t,n,-x,U+x,0,m,k));else{if(d.add(a(i,e,t,n,-x,Y,0,m,k)),d.add(a(i,e,t,n,D,U+x,0,m,k)),d.add(a(i,e,t,n,Y,D,0,z,k)),d.add(a(i,e,t,n,Y,D,B,m,k)),$){let oe=new en;oe.moveTo(Y,b),oe.lineTo(Y,B),oe.lineTo(D,B),oe.lineTo(D,b),oe.absarc(U/2,b,N/2,0,Math.PI,!1);let me=new mn(oe,{depth:l,bevelEnabled:!1,curveSegments:16});me.translate(0,0,-l/2),i==="W"&&me.rotateY(-Math.PI/2);let G=new Ee(me,A?ce.facade(f,p%3):k[i==="W"?0:4]);G.position.set(e*U,v,t*U),d.add(G)}let O=Array(6).fill(ce.glass()),W=Array(6).fill(ce.frame());if(d.add(a(i,e,t,n,Y+.03,D-.03,z,$?b+N/2-.02:B,O,.03)),d.add(a(i,e,t,n,Y,Y+.05,z,b,W,.08)),d.add(a(i,e,t,n,D-.05,D,z,b,W,.08)),d.add(a(i,e,t,n,Y,D,z,z+.05,W,.08)),$||d.add(a(i,e,t,n,Y,D,B-.05,B,W,.08)),d.add(a(i,e,t,n,U/2-.022,U/2+.022,z,$?b+N/2-.04:B,W,.06)),d.add(a(i,e,t,n,Y,D,z+(b-z)*.68-.02,z+(b-z)*.68+.02,W,.06)),y){let oe=ce.trim(y.base);if(T(Y-.1,D+.1,z-.07,z,0,.1,oe),$||(T(Y-.1,Y,z,B+.08,0,.04,oe),T(D,D+.1,z,B+.08,0,.04,oe),T(Y-.1,D+.1,B,B+.08,0,.04,oe)),y.role==="u"&&["bank","pink","cream"].includes(y.base)||y.role==="t"&&y.base==="bank"){let G=new en;G.moveTo(Y-.16,B+.1),G.lineTo(D+.16,B+.1),G.lineTo(U/2,B+.27),G.closePath(),le(G,0,.1,oe)}else y.role==="u"||y.role==="t"?T(Y-.15,D+.15,B+.1,B+.17,0,.12,oe):y.role==="g"&&!$&&T(U/2-.07,U/2+.07,B-.02,B+.16,0,.06,oe);if($){let G=new en;G.absarc(U/2,b,N/2+.1,0,Math.PI,!1),G.lineTo(Y,b),G.absarc(U/2,b,N/2,Math.PI,0,!0),G.closePath(),le(G,0,.05,oe),T(U/2-.07,U/2+.07,B-.06,B+.14,0,.08,oe),T(Y-.1,Y,z,b,0,.05,oe),T(D,D+.1,z,b,0,.05,oe);let ue=ce.iron();for(let Me=1;Me<6;Me++){let Te=Y+Me*N/6,F=Math.sqrt(Math.max(0,(N/2)**2-(Te-U/2)**2));T(Te-.01,Te+.01,z,b+F-.03,-.06,-.04,ue)}for(let Me of[z+.35,z+.8])T(Y+.02,D-.02,Me,Me+.02,-.065,-.035,ue)}if(y.role!=="g"&&y.base==="bank"){let G=ce.iron();T(Y-.08,D+.08,z-.12,z-.07,0,.32,ce.stone()),T(Y-.06,D+.06,z+.42,z+.45,.28,.31,G);for(let ue=0;ue<=8;ue++){let Me=Y-.04+ue*(N+.08)/8;T(Me-.008,Me+.008,z-.07,z+.43,.285,.305,G)}}}}}if(y&&!r){let $=ce.trim(y.base);if(y.role==="g"&&T(-x,U+x,0,.5,0,.05,ce.plinth(y.base)),y.role==="t"){T(-x-.02,U+x+.02,h-.16,h+.02,0,.08,$),T(-x-.06,U+x+.06,h+.02,h+.12,0,.18,$),T(-x-.1,U+x+.1,h+.12,h+.24,0,.32,$);for(let N=.16;N<U;N+=.31)T(N-.04,N+.04,h-.02,h+.12,.08,.26,$)}else T(-x-.02,U+x+.02,h-.08,h+.24,0,.06,$),T(-x-.03,U+x+.03,h+.18,h+.24,0,.1,$)}else y&&r&&y.role==="g"&&T(-x,U+x,0,.5,0,.05,ce.plinth(y.base));return d}function Lu(i,e,t,n,s,r,o,a,c){let{wallBox:l}=c,h=new ge,d=o-.01;if(a==="vault"){let p=Array(6).fill(ce.steel());h.add(l(i,e,t,n,s-.02,r+.02,.01,d,p,.2));let g=(s+r)/2;for(let _ of[.26])h.add(l(i,e,t,n,g-.3,g+.3,d*.45,d*.45+.04,Array(6).fill(ce.brass()),_));return h.add(l(i,e,t,n,g-.02,g+.02,d*.45-.28,d*.45+.32,Array(6).fill(ce.brass()),.26)),h.add(l(i,e,t,n,s+.05,s+.1,.2,d-.2,Array(6).fill(ce.iron()),.24)),h}let u=a==="outer",f=Array(6).fill(u?ce.greenDoor():ce.wood()),m=Array(6).fill(ce.darkWood()),x=(s+r)/2;h.add(l(i,e,t,n,s-.02,r+.02,.01,d,f,.06)),h.add(l(i,e,t,n,x-.01,x+.01,.01,d,m,.075));for(let[p,g]of[[s+.06,x-.06],[x+.06,r-.06]])d>1&&h.add(l(i,e,t,n,p,g,.15,Math.min(.85,d-.1),m,.072)),d>1.9&&(u?h.add(l(i,e,t,n,p+.02,g-.02,1.05,d-.15,Array(6).fill(ce.glass()),.074)):h.add(l(i,e,t,n,p,g,1,d-.15,m,.072)));for(let p of[-1,1])h.add(l(i,e,t,n,x+p*.06-.015,x+p*.06+.015,Math.min(1,d-.1),Math.min(1.12,d-.05),Array(6).fill(ce.brass()),.09));return h}function d2(i){let n=yi(512,512),s=n.getContext("2d"),r=yi(512,512),o=r.getContext("2d"),a=ft(i==="slate"?501:503),c=512/(i==="slate"?10:8),l=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=da(h),s.fillRect(0,0,512,512);for(let f=0;f<512/l;f++){let m=f%2?c/2:0;for(let x=-m;x<512;x+=c){let p=.8+a()*.32,g=f*l,_=o.createLinearGradient(0,g,0,g+l);_.addColorStop(0,"#404040"),_.addColorStop(1,"#c8c8c8"),o.fillStyle=_,o.fillRect(x+1,g,c-2,l),s.fillStyle=da(h.map(y=>bn(y*p))),i==="slate"?s.fillRect(x+1,g+1,c-2,l-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+c-1,g),s.lineTo(x+c-1,g+l*.75),s.quadraticCurveTo(x+c/2,g+l*1.05,x+1,g+l*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+l-2,c,2)}}for(let f=0;f<40;f++){let m=a()*512,x=a()*512,p=10+a()*40,g=s.createRadialGradient(m,x,0,m,x,p);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(m-p,x-p,p*2,p*2)}let d=yt(n),u=ua(r,3);for(let f of[d,u])f.wrapS=f.wrapT=ns;return{map:d,normalMap:u}}var Tu=i=>ei("roofMat_"+i,()=>{let e=d2(i);return new Oe({map:e.map,normalMap:e.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:$t})});function Gn(i,e,t){let n=new Pt,s=i[0],r=e.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),c=[],l=[];for(let d of i){c.push(d.x,d.y,d.z);let u=new L().subVectors(d,s);l.push(u.dot(r)/(2*U),u.dot(a)/(2*U))}let h=[];for(let d=1;d<i.length-1;d++)h.push(0,d,d+1);return n.setAttribute("position",new nt(c,3)),n.setAttribute("uv",new nt(l,2)),n.setIndex(h),n.computeVertexNormals(),new Ee(n,t)}function Au(i,e,t,n,s,r,o,a){let c=n-e,l=s-t,h=Math.min(c,l)/2,d=h*Math.tan(o),u=c>=l,f=u?[vt(e+h,r+d,(t+s)/2),vt(n-h,r+d,(t+s)/2)]:[vt((e+n)/2,r+d,t+h),vt((e+n)/2,r+d,s-h)],m={nw:vt(e,r,t),ne:vt(n,r,t),se:vt(n,r,s),sw:vt(e,r,s)};u?(i.add(Gn([m.sw,m.se,f[1],f[0]],vt(1,0,0),a)),i.add(Gn([m.ne,m.nw,f[0],f[1]],vt(-1,0,0),a)),i.add(Gn([m.se,m.ne,f[1]],vt(0,0,-1),a)),i.add(Gn([m.nw,m.sw,f[0]],vt(0,0,1),a))):(i.add(Gn([m.se,m.ne,f[0],f[1]],vt(0,0,-1),a)),i.add(Gn([m.nw,m.sw,f[1],f[0]],vt(0,0,1),a)),i.add(Gn([m.sw,m.se,f[1]],vt(1,0,0),a)),i.add(Gn([m.ne,m.nw,f[0]],vt(-1,0,0),a)));let x=a,p=(g,_)=>{let y=new L().subVectors(_,g),M=new Ee(new It(.07,.07,y.length(),8),x);M.position.copy(g).addScaledVector(y,.5),M.quaternion.setFromUnitVectors(vt(0,1,0),y.normalize()),i.add(M)};return p(f[0],f[1]),p(m.nw,f[0]),p(m.sw,f[0]),p(m.ne,f[1]),p(m.se,f[1]),{height:d,along:u,half:h}}function Ru(i,e,t,n,s,r,o,a=1){let c=new ge,l=1*a,h=1.15*a,d=1.6*a;c.add(Pe(l,h,d,r,0,h/2,-d/2)),c.add(Pe(l*.56,h*.6,.04,ce.glass(),0,h*.45,.01)),c.add(Pe(l*.66,.06,.06,ce.frame(),0,h*.14,.02)),c.add(Pe(.04,h*.6,.05,ce.frame(),0,h*.45,.02));let u=qr(l+.24,.55*a,d+.15,o);u.position.set(0,h,-d/2+.07),c.add(u);let f=qr(l+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),c.add(f),c.position.set(e,n,t),c.rotation.y=Math.atan2(s.x,s.z),i.add(c)}var xi=i=>(i+.5)*U;function u2(i){let e=i.cols*U,t=i.rows*U;if(i.type==="mansard"){let l={x0:-.2,z0:-.2,x1:e+.2,z1:t+.2},h=(47-i.col)*U+U/2,d=[],u=.75*.36;for(let m=1;m<i.cols-1;m+=2){let x=xi(m);Math.abs(x-h)<5.2||d.push({x,z:l.z1-u,facing:"S"},{x,z:l.z0+u,facing:"N"})}for(let m=1;m<i.rows-1;m+=2)d.push({x:l.x1-u,z:xi(m),facing:"E"},{x:l.x0+u,z:xi(m),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([m,x])=>({x:xi(Math.floor(i.cols*m)),z:xi(Math.floor(i.rows*x))}));return{...l,width:e,depth:t,dormers:d,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:t-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:e+n,z1:t+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let l=0;l<i.cols;l++){let h=xi(l);l%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let l=0;l<i.rows;l++){let h=xi(l);l%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let c=[0,1,2].map(l=>({x:xi(Math.floor(i.cols*(.25+l*.25))),z:xi(Math.floor(i.rows*(.42+l%2*.16)))}));return{...r,width:e,depth:t,along:o,run:s,dormers:a,chimneys:c,pediment:null}}function f2(i){let e=u2(i),t={S:vt(0,0,1),N:vt(0,0,-1),E:vt(1,0,0),W:vt(-1,0,0)},n=new ge,s=i.cols*U,r=i.rows*U,o=.42,a=ft(i.col*31+i.row*17),c=ce.trim(i.facade||"cream");if(i.type==="mansard"){let l=Tu("slate"),h=.75,d=2.3,u=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},m={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(A,v,T)=>vt(A,v,T),p=u+d;n.add(Gn([x(f.x0,u,f.z1),x(f.x1,u,f.z1),x(m.x1,p,m.z1),x(m.x0,p,m.z1)],vt(1,0,0),l)),n.add(Gn([x(f.x1,u,f.z0),x(f.x0,u,f.z0),x(m.x0,p,m.z0),x(m.x1,p,m.z0)],vt(-1,0,0),l)),n.add(Gn([x(f.x1,u,f.z1),x(f.x1,u,f.z0),x(m.x1,p,m.z0),x(m.x1,p,m.z1)],vt(0,0,-1),l)),n.add(Gn([x(f.x0,u,f.z0),x(f.x0,u,f.z1),x(m.x0,p,m.z1),x(m.x0,p,m.z0)],vt(0,0,1),l)),Au(n,m.x0,m.z0,m.x1,m.z1,p,.07,l),n.add(Pe(m.x1-m.x0+.1,.1,.12,ce.steel(),(m.x0+m.x1)/2,p+.05,m.z1)),n.add(Pe(m.x1-m.x0+.1,.1,.12,ce.steel(),(m.x0+m.x1)/2,p+.05,m.z0));let g=u+.35;for(let A of e.dormers)Ru(n,A.x,A.z,g,t[A.facing],c,l,.95);let _=(47-i.col)*U+U/2,y=r+.12,M=qr(9.2,2.3,.5,c);M.position.set(_,u-.02,y-.05),n.add(M);let C=qr(8.2,1.85,.12,ce.facade("bank_u",1));C.position.set(_,u+.16,y+.22),n.add(C);let P=Math.atan2(2.3,4.6),I=Math.hypot(4.6,2.3)+.3;for(let A of[-1,1]){let v=Pe(I,.2,.7,c,_+A*2.3,u+1.15,y+.02);v.rotation.z=-A*P,n.add(v)}n.add(Pe(9.6,.22,.75,c,_,u+.02,y+.02));let k=new Ee(new It(.42,.42,.12,32),ce.brass());k.rotation.x=Math.PI/2,k.scale.set(1,1,.72),k.position.set(_,u+.85,y+.32),n.add(k);for(let A of[-4.6,0,4.6])n.add(Cn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],c,_+A,A?u+.2:u+2.4,y+.05,12));for(let{x:A,z:v}of e.chimneys)n.add(Pe(.7,1.3,.5,ce.facade("bank_t",0),A,p+.6,v)),n.add(Pe(.84,.12,.64,c,A,p+1.28,v))}else{let l=Tu("tile"),h=-o,d=-o,u=s+o,f=r+o,m=.22,x=Au(n,h,d,u,f,m,.52,l);n.add(Pe(u-h,.14,.06,ce.darkWood(),(h+u)/2,m-.04,f)),n.add(Pe(u-h,.14,.06,ce.darkWood(),(h+u)/2,m-.04,d)),n.add(Pe(.06,.14,f-d,ce.darkWood(),u,m-.04,(d+f)/2)),n.add(Pe(.06,.14,f-d,ce.darkWood(),h,m-.04,(d+f)/2)),n.add(Pe(u-h,.03,f-d,ce.darkWood(),(h+u)/2,m-.1,(d+f)/2));for(let _ of[d,f]){let y=Bn(.06,.06,u-h,ce.iron(),(h+u)/2,m-.02,_,8);y.rotation.z=Math.PI/2,n.add(y)}let p=Math.tan(.52),g=e.run;for(let _ of e.dormers)Ru(n,_.x,_.z,m+(g-.75)*p,t[_.facing],c,l);for(let _=0;_<e.chimneys.length;_++){let{x:y,z:M}=e.chimneys[_],C=m+Math.min(Math.min(y-h,u-y),Math.min(M-d,f-M))*p,P=ce.facade("police_u",_%3);n.add(Pe(.6,x.height-(C-m)+1.1,.5,P,y,C+(x.height-(C-m)+1.1)/2-.2,M)),n.add(Pe(.72,.1,.62,ce.stone(),y,m+x.height+.95,M))}}return n}function Ml(i,e,t=2){let n=new cs(i,t),s=n.attributes.position,r=ft(e),o=[],a=r()*10;for(let c=0;c<s.count;c++){let l=vt(s.getX(c),s.getY(c),s.getZ(c)),h=1+.18*Math.sin(l.x*5+a)*Math.sin(l.y*4.3+a*.7)*Math.sin(l.z*4.7)+(r()-.5)*.12;l.multiplyScalar(h),s.setXYZ(c,l.x,l.y,l.z);let d=.75+.25*(l.y/i)+(r()-.5)*.25;o.push(d,d,d)}return n.setAttribute("color",new nt(o,3)),n.computeVertexNormals(),n}function El(i){return ei("leafTint"+i,()=>new Oe({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function p2(i,e,t){let n=new ge,s=ft(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Gt("bark",{color:4864556,roughness:.95});n.add(Bn(.11,.17,o+.6,a,e,(o+.6)/2,t,10));for(let h=0;h<3;h++){let d=s()*Math.PI*2,u=Bn(.04,.07,1.2,a,e+Math.cos(d)*.3,o+.6,t+Math.sin(d)*.3,6);u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),n.add(u)}let c=El(r?6195776:4880954),l=r?7:6;for(let h=0;h<l;h++){let d=h/l*Math.PI*2+s(),u=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,m=new Ee(Ml(f,i.col*101+h*17+i.row),c);m.position.set(e+Math.cos(d)*u,o+1.25+(h===0?.4:(s()-.3)*.9),t+Math.sin(d)*u),n.add(m)}return n}function m2(i,e,t){let n=new ge,s=El(4616250);for(let r=0;r<3;r++){let o=new Ee(Ml(.5,t*7+r,2),s);o.scale.set(i/2.4,.95,e/1.25),o.position.set(i*(.2+r*.3),.5,e/2),n.add(o)}return n}function fs(i,e,t,n){let s=new ge;return s.add(i),i.position.set(-t,0,-n),s.rotation.y=-(e.rotation||0)*Math.PI/2,s.position.set(t,0,n),s}function Nu(i){let e=i.cols*U,t=i.rows*U,n=e/2,s=t/2,r=new ge,o=c=>(r.add(c),c),a=ft(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return f2(i);case"tree":return p2(i,n,s);case"hedge":return m2(e,t,i.col+i.row*3);case"bench":{let c=new ge;for(let l of[.18,U-.18])c.add(Pe(.05,.45,.42,ce.iron(),l,.22,.45)),c.add(Pe(.05,.5,.05,ce.iron(),l,.7,.26));for(let l=0;l<4;l++)c.add(Pe(U-.12,.035,.08,ce.lightWood(),U/2,.46,.32+l*.1));for(let l=0;l<3;l++)c.add(Pe(U-.12,.08,.03,ce.lightWood(),U/2,.62+l*.12,.25));return fs(c,i,n,s)}case"bin":return o(Cn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],ce.iron(),n,0,s,16)),r;case"streetLamp":return o(Cn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],ce.iron(),n,0,s,12)),o(Cn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],ce.lantern(),n,3.5,s,6)),o(Cn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],ce.iron(),n,4,s,6)),r;case"column":return o(Pe(.66,.16,.66,ce.stone(),n,.08,s+.05)),o(Cn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],ce.stone(),n,.16,s+.05,24)),o(Bn(.21,.24,ut-.62,ce.stone(),n,.28+(ut-.62)/2,s+.05,20)),o(Cn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],ce.stone(),n,ut-.34,s+.05,24)),o(Pe(.7,.18,.7,ce.stone(),n,ut-.09,s+.05)),r;case"balcony":{o(Pe(e,.18,1.05,ce.stone(),n,.09,1.05/2)),o(Pe(e+.1,.06,1.05+.06,ce.stone(),n,.2,1.05/2+.03));for(let l=.15;l<e;l+=.22)o(Cn(yl,ce.stone(),l,.23,1.05-.1,10));for(let l=.15;l<1.05-.1;l+=.22)o(Cn(yl,ce.stone(),.08,.23,l,10)),o(Cn(yl,ce.stone(),e-.08,.23,l,10));return o(Pe(e,.08,.16,ce.stone(),n,.97,1.05-.1)),o(Pe(.16,.08,1.05,ce.stone(),.08,.97,1.05/2)),o(Pe(.16,.08,1.05,ce.stone(),e-.08,.97,1.05/2)),o(Pe(3.4,.36,.06,ce.darkWood(),n,-.3,.12)),o(Pe(3.1,.2,.02,ce.brass(),n,-.3,.155)),r}case"fountain":{o(Cn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],ce.granite(),n,0,s,72));let l=new Ee(new ki(5.3-.38,64),ce.water());l.rotation.x=-Math.PI/2,l.position.set(n,.36,s),o(l),o(new Ee(new ki(5.3-.38,64),ce.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(Cn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],ce.stone(),n,0,s,48));let h=new Ee(new ki(.9,32),ce.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let d=new Ee(new ki(1.6,32),ce.water());d.rotation.x=-Math.PI/2,d.position.set(n,1.48,s),o(d),o(new Ee(new It(1.62,1.95,1.1,32,1,!0),ce.spray())).position.set(n,.92,s),o(new Ee(new It(.95,1.6,.85,32,1,!0),ce.spray())).position.set(n,1.92,s),o(new Ee(new jo(.12,1.1,12,1,!0),ce.spray())).position.set(n,3.9,s);for(let u=0;u<8;u++){let f=u/8*Math.PI*2,m=new Ee(new It(.03,.05,1.6,6,1,!0),ce.spray());m.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),m.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(m)}return r}case"playhouse":{let c=ce.paint(14205066),l=ce.paint(11549226);o(Pe(e-.3,.1,t-.3,ce.lightWood(),n,.05,s));for(let[u,f,m,x]of[[n,.2,e-.3,.06],[.2,s,.06,t-.3],[e-.2,s,.06,t-.3]])o(Pe(m,1.3,x,c,u,.75,f));o(Pe(.8,1.3,.06,c,.55,.75,t-.2)),o(Pe(.7,1.3,.06,c,e-.5,.75,t-.2)),o(Pe(.5,.45,.07,ce.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=Pe(e*.62,.06,t-.1,l,e*.3,1.75,s);h.rotation.z=.6,o(h);let d=Pe(e*.62,.06,t-.1,l,e*.7,1.75,s);d.rotation.z=-.6,o(d);for(let u of[.2,t-.2]){let f=qr(e-.3,.75,.06,c);f.position.set(n,1.4,u),o(f)}return r}case"slide":{let c=ce.paint(12730414),l=ce.paint(3828392);o(Pe(.9,.08,.9,ce.lightWood(),n,1.5,.55));for(let[d,u]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Bn(.04,.04,2.3,l,d,1.15,u,8));for(let d of[n-.4,n+.4])o(Pe(.05,.05,.9,l,d,2.25,.55));for(let d=0;d<5;d++)o(Pe(.6,.04,.12,ce.lightWood(),n,.3+d*.27,.05-d*0)).position.z=.08;let h=Pe(.62,.05,2.4,c,n,.82,2.05);h.rotation.x=.62,o(h);for(let d of[-1,1]){let u=Pe(.05,.16,2.4,c,n+d*.32,.9,2.05);u.rotation.x=.62,o(u)}return r}case"swing":{let c=ce.paint(3828392);for(let h of[.15,e-.15])for(let d of[-1,1]){let u=Bn(.045,.045,2.5,c,h,1.18,s+d*.45,8);u.rotation.x=d*.38,o(u)}let l=Bn(.05,.05,e-.2,c,n,2.35,s,8);l.rotation.z=Math.PI/2,o(l);for(let h of[e*.3,e*.7]){for(let d of[-.22,.22])o(Bn(.01,.01,1.75,ce.steel(),h+d,1.45,s,4));o(Pe(.5,.05,.22,ce.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[c,l,h,d]of[[n,.1,e-.2,.18],[n,t-.1,e-.2,.18],[.1,s,.18,t],[e-.1,s,.18,t]])o(Pe(h,.3,d,ce.lightWood(),c,.15,l));return o(Pe(e-.3,.12,t-.3,ce.sand(),n,.06,s)),o(Pe(.2,.18,.2,ce.paint(12730414),n-.6,.2,s+.3)),o(Bn(.12,.08,.16,ce.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Bn(1.1,1.1,.1,ce.paint(12730414),n,.25,s,32)),o(Bn(.08,.1,.9,ce.steel(),n,.7,s,10));for(let c=0;c<4;c++){let l=c*Math.PI/2,h=Pe(1.9,.04,.04,ce.paint(14196768),n,.95,s);h.rotation.y=l,o(h),o(Bn(.03,.03,.7,ce.paint(14196768),n+Math.cos(l)*.95,.6,s+Math.sin(l)*.95,6))}return r}case"busStop":{for(let c of[.15,e-.15])o(Pe(.08,2.4,.08,ce.iron(),c,1.2,.2));return o(Pe(e,.08,1.2,ce.iron(),n,2.42,.6)),o(Pe(e-.3,1.9,.03,ce.glass(),n,1.2,.18)),o(Pe(e-.6,.06,.4,ce.lightWood(),n,.48,.42)),o(Pe(.9,.6,.06,ce.paint(2775706),e-.6,2,.2)),r}case"counter":{let c=new ge;return c.add(Pe(U,1.05,.6,ce.darkWood(),U/2,.52,.55)),c.add(Pe(U+.02,.05,.7,ce.stone(),U/2,1.07,.55)),c.add(Pe(U,.55,.02,ce.glass(),U/2,1.4,.4)),c.add(Pe(.04,.6,.04,ce.brass(),.04,1.4,.4)),fs(c,i,n,s)}case"deposits":{let c=new ge;c.add(Pe(U-.02,2.1,.45,ce.steel(),U/2,1.05,.24));for(let l=0;l<9;l++)for(let h=0;h<4;h++){let d=.12+h*.3,u=.15+l*.22;c.add(Pe(.27,.19,.02,ce.paint(9081496),d+.14,u+.1,.475)),c.add(Pe(.03,.03,.02,ce.brass(),d+.14,u+.1,.49))}return fs(c,i,n,s)}case"plant":o(Cn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],ce.paint(10115642),n,0,s,16));for(let c=0;c<4;c++){let l=new Ee(Ml(.32,i.col*3+c),El(4090416));l.position.set(n+(a()-.5)*.3,.9+c*.22,s+(a()-.5)*.3),o(l)}return r;case"bed":{let c=new ge;return c.add(Pe(e-.2,.35,t-.25,ce.wood(),n,.18,s+.05)),c.add(Pe(e-.3,.18,t-.35,ce.fabric(15262420),n,.44,s+.05)),c.add(Pe(e*.6,.06,t-.3,ce.fabric(6961738),n+e*.17,.55,s+.05)),c.add(Pe(.45,.14,t-.5,ce.fabric(16052456),.45,.6,s+.05)),c.add(Pe(.08,1,t-.25,ce.darkWood(),.12,.5,s+.05)),fs(c,i,n,s)}case"wardrobe":{let c=new ge;c.add(Pe(U-.15,2,.6,ce.wood(),U/2,1,.36)),c.add(Pe(U-.05,.1,.68,ce.darkWood(),U/2,2.05,.36)),c.add(Pe(.02,1.8,.02,ce.darkWood(),U/2,1,.67));for(let l of[-1,1])c.add(Pe(.03,.12,.03,ce.brass(),U/2+l*.06,1.05,.68));return fs(c,i,n,s)}case"bookcase":{let c=new ge;c.add(Pe(U-.15,2,.4,ce.darkWood(),U/2,1,.26));let l=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let d=.14;for(;d<U-.2;){let u=.04+a()*.05,f=.22+a()*.1;c.add(Pe(u-.005,f,.25,ce.fabric(l[Math.floor(a()*l.length)]),d+u/2,.12+h*.38+f/2,.36)),d+=u}}return fs(c,i,n,s)}case"table":{o(Pe(e-.3,.05,t-.3,ce.wood(),n,.76,s));for(let[c,l]of[[.25,.25],[e-.25,.25],[.25,t-.25],[e-.25,t-.25]])o(Pe(.06,.74,.06,ce.darkWood(),c,.37,l));for(let c=0;c<Math.max(2,i.cols);c++){let l=(c+.5)*e/Math.max(2,i.cols);for(let h of[.05,t-.05])o(Pe(.4,.05,.4,ce.darkWood(),l,.45,h)),o(Pe(.4,.5,.04,ce.darkWood(),l,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let c=new ge,l=ce.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);c.add(Pe(e-.2,.42,.8,l,n,.21,.6)),c.add(Pe(e-.2,.5,.2,l,n,.65,.3));for(let h of[.15,e-.15])c.add(Pe(.18,.6,.8,l,h,.3,.6));return fs(c,i,n,s)}default:return null}}var pa=kt==="city",Vn=Jd(Zd(),$d),Fy=1280/18.5;var _i=U*wt,ms=new L(_i/2,0,_i/2),wl=.22,nn=.18,fa=ut-wl,hn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Bi=(i,e,t)=>new L(i,e,t),dt=new Ar({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});dt.setPixelRatio(1);dt.shadowMap.enabled=!0;dt.shadowMap.type=Qc;dt.toneMapping=el;dt.outputColorSpace=an;document.body.appendChild(dt.domElement);var In=new Ui,cr=kt==="base";In.background=new $e(cr?789258:1709584);In.environment=new qs(dt).fromScene(new oa,.04).texture;In.add(cr?new kr(15002868,4999234,1.25):new kr(13163775,5917236,.75));var xn=new ea(cr?16774890:16774368,cr?2.6:4.2);{let i=tu(-11,7.5),e=cr?.45:1.6;xn.position.set(ms.x+i.x*e,cr?24:17.6,ms.z+i.y*e)}xn.target.position.copy(ms);xn.castShadow=!0;xn.shadow.mapSize.set(4096,4096);Object.assign(xn.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});xn.shadow.camera.updateProjectionMatrix();xn.shadow.bias=-3e-4;xn.shadow.normalBias=.025;xn.shadow.radius=2;In.add(xn,xn.target);var bl=new Map,Pn=(i,e)=>(bl.has(i)||bl.set(i,e()),bl.get(i)),Xt=(i,e)=>Pn(i,()=>new Oe(e)),de={trim:()=>Xt("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>Xt("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>Xt("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>Xt("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>Xt("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>Xt("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>Xt("rubber",{color:1842204,roughness:.9}),paint:()=>Xt("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>Pn("glass",()=>new Fn({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>Xt("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>Xt("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>Xt("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>Pn("screen"+i,()=>new Oe({map:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,e)=>Pn(`wall_${i}_${e}`,()=>{let t=cu(i,e);return new Oe({map:t.map,normalMap:t.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>Pn("interiorFloor",()=>{let i=lu();return new Oe({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>Pn("roof",()=>{let i=hu();return new Oe({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>Pn("grating",()=>{let i=du();return new Oe({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>Pn("concrete",()=>{let i=fu();return new Oe({map:i.map,roughness:.95})}),container:i=>Pn("container_"+i,()=>{let e=uu(i==="orange"?3:9);return new Oe({map:e.map,normalMap:e.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>Pn("rock",()=>{let i=Fr(5,[150,116,88]);return new Oe({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>Pn("baseRock"+i,()=>{let e=Fr(11+i*7,[120,112,102]);return new Oe({normalMap:e.normalMap,color:6182736,roughness:.95})}),rockCut:i=>Pn("rockCut"+i,()=>{let e=Fr(31+i*5,[92,86,80]);return new Oe({normalMap:e.normalMap,color:5722700,roughness:.98})})};function ti(i,e,t,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:e,level:t,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function Ue(i,e,t,n,s,r,o){let a=new Ee(new gt(i,e,t),n);return a.position.set(s,r,o),a}function wn(i,e,t,n,s,r,o,a=16){let c=new Ee(new It(i,e,t,a),n);return c.position.set(s,r,o),c}function Sl(i,e,t,n){let s=new L().subVectors(e,i),r=new Ee(new It(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Bi(0,1,0),s.normalize()),r}var ku=(i,e,t)=>(i*73856093^e*19349663^t*83492791)>>>0,Tl=(i,e,t)=>e>=0&&t>=0&&e<wt&&t<wt&&Vn.indoor[i][t][e]===1;function st(i,e,t,n,s,r,o,a,c,l=nn){let h=r-s,d=a-o,u=n*ut,f=i==="W"?new gt(l,d,h):new gt(h,d,l),m=i==="W"?e*U:e*U+(s+r)/2,x=i==="W"?t*U+(s+r)/2:t*U;f.translate(m,u+(o+a)/2,x);let p=f.attributes.position,g=f.attributes.uv;for(let _=0;_<p.count;_++){let y=i==="W"?p.getZ(_)-t*U:p.getX(_)-e*U;g.setXY(_,y/U,(p.getY(_)-u)/fa)}return new Ee(f,c)}function Du(i,e,t,n,s){let r=ku(e,t,n)%3,o=(h,d)=>s==="inner"||Tl(n,h,d)?de.wall("inner",r%2):de.wall(s,r),a=o(e,t),c=i==="W"?o(e-1,t):o(e,t-1),l=de.trim();return i==="W"?[a,c,l,l,l,l]:[l,l,l,l,a,c]}var g2=i=>pa?i.style==="vault"?"vault":vl(i.style)?"outer":"inner":"base";function Al(i,e,t,n,s,r){if(pa&&s.type!=="barrier"){let d=Iu(i,e,t,n,s,r,{wallBox:st,isIndoor:Tl,THICK:nn,PANEL_H:fa});if(s.type==="door"){let f=Math.min(2.1,r?.8:fa);ar.add(Uu(i,e,t,n,(U-.92)/2,(U+.92)/2,f,g2(s)))}return ti(d,i==="W"?hn.wallW:hn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new ge,a=s.type,c=s.style,l=r?.8:fa,h=nn/2;if(a==="wall"||a==="door"||a==="window"){let d=Du(i,e,t,n,c==="concrete"?"hab":c);if(a==="wall"||a==="window"&&r)o.add(st(i,e,t,n,-h,U+h,0,l,d));else if(a==="door"&&s.gate){let{startOpen:u,endOpen:f,heavy:m,left:x,right:p,post:g}=x2(i,e,t,n,s),_=Math.min(m?2.35:2.1,l);u||o.add(st(i,e,t,n,-h,0,0,l,d)),f||o.add(st(i,e,t,n,U,U+h,0,l,d)),l>_+.01&&o.add(st(i,e,t,n,u?0:-.001,f?U:U+.001,_,l,d));let y=m?de.yellow():de.orange(),M=Array(6).fill(y);u||o.add(st(i,e,t,n,0,g,0,_,M,nn+.08)),f||o.add(st(i,e,t,n,U-g,U,0,_,M,nn+.08)),l>_+.01&&o.add(st(i,e,t,n,x-.001,p+.001,_,_+.12,M,nn+.08)),o.add(st(i,e,t,n,x,p,0,.03,Array(6).fill(de.darkSteel()),nn+.14)),ar.add(y2(i,e,t,n,x,p,_,m))}else if(a==="door"){let f=Math.min(2.1,l),m=(U-.92)/2,x=(U+.92)/2;o.add(st(i,e,t,n,-h,m,0,l,d)),o.add(st(i,e,t,n,x,U+h,0,l,d)),l>f+.01&&o.add(st(i,e,t,n,m,x,f,l,d));let p=[de.orange(),de.orange(),de.orange(),de.orange(),de.orange(),de.orange()];if(o.add(st(i,e,t,n,m-.06,m,0,f,p,nn+.05)),o.add(st(i,e,t,n,x,x+.06,0,f,p,nn+.05)),l>f+.01&&o.add(st(i,e,t,n,m-.06,x+.06,f,f+.07,p,nn+.05)),o.add(st(i,e,t,n,m,x,0,.03,[de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel()],nn+.1)),ar.add(Uu(i,e,t,n,m,x,f)),c!=="inner"&&!r){let _=(Tl(n,e,t)?-1:1)*(nn/2+.06),y=U/2,M=i==="W"?Ue(.12,.07,.3,de.lightOn(),e*U+_,n*ut+2.3,t*U+y):Ue(.3,.07,.12,de.lightOn(),e*U+y,n*ut+2.3,t*U+_);o.add(M)}}else{let x=(U-.82)/2,p=(U+.82)/2;o.add(st(i,e,t,n,-h,x,0,l,d)),o.add(st(i,e,t,n,p,U+h,0,l,d)),o.add(st(i,e,t,n,x,p,0,.95,d)),o.add(st(i,e,t,n,x,p,1.9,l,d));let g=Array(6).fill(de.trim());o.add(st(i,e,t,n,x,p,.95-.05,.95,g,nn+.06)),o.add(st(i,e,t,n,x,p,1.9,1.9+.05,g,nn+.04)),o.add(st(i,e,t,n,x,x+.04,.95,1.9,g,nn+.03)),o.add(st(i,e,t,n,p-.04,p,.95,1.9,g,nn+.03)),o.add(st(i,e,t,n,x+.04,p-.04,.95,1.9,Array(6).fill(de.glass()),.03))}}else if(a==="rail"){let d=Array(6).fill(de.yellow());for(let u of[0,U])o.add(st(i,e,t,n,u-.03,u+.03,0,1.05,d,.06));o.add(st(i,e,t,n,0,U,1,1.06,d,.05)),o.add(st(i,e,t,n,0,U,.52,.56,d,.04)),o.add(st(i,e,t,n,0,U,0,.1,Array(6).fill(de.darkSteel()),.02))}else if(a==="parapet"){let d=Du(i,e,t,n,c);o.add(st(i,e,t,n,-h-.02,U+h+.02,-.02,.5,d,.22)),o.add(st(i,e,t,n,-h-.04,U+h+.04,.5,.56,Array(6).fill(de.steel()),.28))}else if(a==="barrier"){let d=new en;d.moveTo(-.3,0),d.lineTo(.3,0),d.lineTo(.3,.08),d.lineTo(.1,.3),d.lineTo(.08,.82),d.lineTo(-.08,.82),d.lineTo(-.1,.3),d.lineTo(-.3,.08);let u=new mn(d,{depth:U-.05,bevelEnabled:!1});i==="W"?u.translate(0,0,.025):(u.rotateY(Math.PI/2),u.translate(.025,0,0));let f=new Ee(u,de.concrete());f.position.set(e*U,n*ut,t*U),i==="N"&&f.position.set(e*U,n*ut,t*U),o.add(f);let m=i==="W"?Ue(.17,.06,U-.1,de.orange(),e*U,n*ut+.62,t*U+U/2):Ue(U-.1,.06,.17,de.orange(),e*U+U/2,n*ut+.62,t*U);o.add(m)}return ti(o,i==="W"?hn.wallW:hn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var ar=new ge;function Uu(i,e,t,n,s,r,o,a="base"){if(a!=="base"){let m=Lu(i,e,t,n,s,r,o,a,{wallBox:st});return m.userData.door={orient:i,col:e,row:t,level:n},ti(m,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let c=new ge,l=Array(6).fill(de.wall("cabin",0)),h=o-.01;c.add(st(i,e,t,n,s-.02,r+.02,.01,h,l,.06));let d=Array(6).fill(de.orange()),u=Array(6).fill(de.darkSteel()),f=Array(6).fill(de.glass());return h>1.1&&c.add(st(i,e,t,n,s,r,.98,1.06,d,.075)),h>1.9&&(c.add(st(i,e,t,n,s+.36,s+.56,1.3,1.85,u,.075)),c.add(st(i,e,t,n,s+.38,s+.54,1.32,1.83,f,.08))),c.add(st(i,e,t,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),u,.085)),c.userData.door={orient:i,col:e,row:t,level:n},ti(c,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function x2(i,e,t,n,s){let r=d=>!!(d&&d.gate&&d.gate.group===s.gate.group),o=i==="W"?Vn.wallW[n]:Vn.wallN[n],a=r(i==="W"?(o[t-1]||[])[e]:o[t][e-1]),c=r(i==="W"?(o[t+1]||[])[e]:o[t][e+1]),l=.1,h=s.gate.kind==="gate";return{startOpen:a,endOpen:c,heavy:h,post:l,left:a?0:l,right:c?U:U-l,signature:`gate:${s.gate.kind}:${a}:${c}`}}function y2(i,e,t,n,s,r,o,a){let c=new ge,l=new ge,h=n*ut+o;l.position.y=h,l.userData.rollUp=!0;let d=new ge;d.position.y=-h,l.add(d),c.add(l);let u=o-.01,f=Array(6).fill(a?de.wall("hab",1):de.wall("cabin",0)),m=Array(6).fill(de.darkSteel());d.add(st(i,e,t,n,s-.005,r+.005,.01,u,f,.07));let x=Math.max(3,Math.round(u/.5));for(let p=1;p<x;p++){let g=.01+(u-.01)*p/x;d.add(st(i,e,t,n,s,r,g-.015,g+.015,m,.085))}if(a&&u>.6){let g=Array(6).fill(de.yellow()),_=Array(6).fill(de.darkSteel());for(let y=0;y<4;y++){let M=s+(r-s)*y/4,C=s+(r-s)*(y+1)/4;d.add(st(i,e,t,n,M,C,.04,.3,(y+e+t)%2?g:_,.08))}}return c.userData.door={orient:i,col:e,row:t,level:n,rollUp:!0},ti(c,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function zu(i,e,t,n){let s=new ge,r=i*U+U/2,o=e*U+U/2,a=t*ut;if(n===Dt.deck)s.add(Ue(U,.06,U,de.grating(),r,a-.03,o)),s.add(Ue(.12,.22,U,de.orange(),i*U+.06,a-.17,o)),s.add(Ue(U,.18,.1,de.orange(),r,a-.15,e*U+.05));else{let c=pa&&Vn.floorStyle?Vn.floorStyle[t][e][i]:null,l=c?Pu(c):n===Dt.roof?de.roof():de.interiorFloor(),h=c?ce.slabEdge():de.slabEdge(),d=c?ce.ceiling():de.ceiling(),u=Ue(U,wl,U,[h,h,l,d,h,h],r,a-wl/2,o);s.add(u)}return ti(s,hn.floor,t,{biasCol:-1e-4,biasRow:-1e-4})}function _2(i,e){let t=new ge,n=i.level*ut,s=Math.min(n+i.height,e);if(s<=n+.05)return t;let r=nn/2+.1,o=a=>i.side==="W"?[Bi(i.col*U+r,n,i.row*U+U/2+a),Bi(i.col*U+r,s,i.row*U+U/2+a)]:[Bi(i.col*U+U/2+a,n,i.row*U+r),Bi(i.col*U+U/2+a,s,i.row*U+r)];for(let a of[-.22,.22]){let[c,l]=o(a);t.add(Sl(c,l,.025,de.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[c]=o(-.22),[l]=o(.22);c.y=l.y=a,t.add(Sl(c,l,.016,de.steel()))}return ti(t,hn.floor,i.level,{auto:!0})}function v2(i){return Bi(i.col*U,i.level*ut,i.row*U)}var M2=new lt().makeTranslation(U*wt,0,0).multiply(new lt().makeRotationY(-Math.PI/2));function ma(i,e){if(i.source){let h=ma({...i.source,layer:i.layer},e);if(!h)return h;let d=new ge;d.matrixAutoUpdate=!1;for(let u=0;u<i.turns;u++)d.matrix.premultiply(M2);return d.add(h),d.updateMatrixWorld(!0),d}let t=new ge,n=v2(i),s=i.cols*U,r=i.rows*U,o=s/2,a=r/2,c=ft(ku(i.col,i.row,i.level)%1e5+7),l=h=>(t.add(h),h);if(pa){let h=Nu(i);if(h)return t.add(h),t.position.copy(n),ti(t,hn.object,i.level)}if(yu.has(i.kind))return t.add(_u(i)),t.position.copy(n),ti(t,hn.object,i.level);if(bu.has(i.kind))return t.add(wu(i)),t.position.copy(n),ti(t,hn.object,i.level);switch(i.kind){case"console":{l(Ue(1,.75,.6,de.trim(),o,.375,a-.15));let h=l(Ue(1,.05,.5,de.screen(Math.floor(c()*3)),o,.85,a-.05));h.rotation.x=-.6,l(Ue(1,.5,.08,de.darkSteel(),o,1.1,a-.42));break}case"locker":l(Ue(.9,1.9,.5,de.wall("cabin",0),o,.95,a-.3)),l(Ue(.02,1.7,.02,de.darkSteel(),o,.95,a-.04));break;case"cabinet":l(Ue(.9,1.2,.6,de.trim(),o,.6,a)),l(Ue(.7,.08,.02,de.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])l(Ue(s-.2,.08,r-.3,de.trim(),o,h,a)),l(Ue(s-.3,.12,r-.4,Xt("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,d]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])l(Ue(.05,1.6,.05,de.steel(),h,.8,d));break;case"labTable":l(Ue(s-.2,.06,r-.3,de.white(),o,.9,a));for(let h of[.2,s-.2])l(Ue(.06,.9,r-.4,de.trim(),h,.45,a));l(Ue(.5,.35,.4,de.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)l(wn(.03,.03,.22,Xt("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":l(Ue(s-.3,.05,.7,de.white(),o,.75,a-.1)),l(Ue(s-.4,.7,.05,de.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])l(Ue(.55,.35,.04,de.screen(Math.floor(c()*3)+1),h,1.05,a-.3)),l(Ue(.06,.2,.06,de.darkSteel(),h,.85,a-.3));break;case"rack":l(Ue(.7,2,.9,de.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)l(Ue(.02,.02,.02,Xt("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+c()*.6));break;case"crate":{let h=1+(c()<.45?1:0),d=c()<.5?de.wall("cabin",2):Xt("crateGrey",{color:10132630,roughness:.55,metalness:.2}),u=0;for(let f=0;f<h;f++){let m=f?.65:.95,x=f?.5:.75,p=(c()-.5)*.4,g=new ge;g.add(Ue(m,x,m*.8,d,0,x/2,0));for(let _ of[-1,1])g.add(Ue(m+.02,.08,.06,de.orange(),0,x*.5,_*m*.3));g.add(Ue(m+.02,.04,m*.82,de.trim(),0,x-.02,0)),g.position.set(o+(c()-.5)*.1,u,a+(c()-.5)*.1),g.rotation.y=p,l(g),u+=x}break}case"barrels":for(let h=0;h<3;h++){let d=[3104394,9058844,5923400][h];l(wn(.29,.29,.9,Xt("barrel"+h,{color:d,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":l(Ue(s-.2,.9,r-.25,de.white(),o,.45,a));for(let h=0;h<i.cols;h++)l(wn(.38,.38,.05,de.darkSteel(),.62+h*U,.92,a,20)).scale.set(1,1,1);break;case"antenna":l(Ue(.5,.15,.5,de.trim(),o,.07,a)),l(wn(.05,.07,3.6,de.steel(),o,1.8,a));for(let h of[2.2,3])l(Ue(.9,.04,.04,de.steel(),o,h,a));l(Ue(.06,.06,.06,Xt("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let d=l(Ue(s-.3,.05,r/2-.15,Xt("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));d.rotation.x=-.45,l(Ue(.06,.6,.06,de.steel(),o,.3,h*r/2+r/4))}break}case"dish":l(wn(.08,.12,.8,de.steel(),o,.4,a));{let h=l(new Ee(new Rn(.6,20,10,0,Math.PI*2,0,.9),de.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=Pn("dishMat",()=>new Oe({color:14211798,roughness:.4,side:$t}))}break;case"pylon":{let h=ut-.24;l(Ue(.32,h,.32,de.orange(),o,h/2,a)),l(Ue(.6,.06,.6,de.darkSteel(),o,.03,a)),l(Ue(.5,.12,.5,de.orange(),o,h-.06,a));break}case"searchlight":l(Ue(.5,.3,.5,de.trim(),o,.15,a)),l(Ue(.12,.5,.12,de.darkSteel(),o,.55,a));{let h=l(wn(.24,.3,.45,de.darkSteel(),o,.95,a));h.rotation.x=1.1;let d=l(wn(.22,.22,.03,de.lightOn(),o,1.02,a+.2));d.rotation.x=1.1}break;case"container":{let h=de.container(i.color),d=l(Ue(s-.15,2.5,r-.15,[h,h,de.container(i.color),de.trim(),h,h],o,1.25,a));for(let u of[.12,s-.12])for(let f of[.12,r-.12])for(let m of[.1,2.4])l(Ue(.18,.2,.18,de.darkSteel(),u,m,f));for(let u of[o-.35,o+.35])l(Ue(.04,2.3,.04,de.steel(),u,1.25,r-.06));break}case"truck":{let h=ru();h.position.set(o,0,(r-su.length)/2),l(h);break}case"rover":{let h=de.white();l(Ue(s-.4,.6,r-.3,h,o,.95,a)),l(Ue(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),l(Ue(s-.6,.5,.05,de.glass(),o,1.7,a+r/2-.33));for(let d of[-1,1])l(Ue(.05,.4,1,de.glass(),o+d*(s/2-.24),1.7,a+r/2-1));l(Ue(s-.4,.06,r-.3,de.orange(),o,1.27,a)),l(Ue(s-.6,.12,1.6,de.trim(),o,1.31,a-.6));for(let d of[-1,1])for(let u of[.55,r/2,r-.55]){let f=l(wn(.42,.42,.34,de.rubber(),o+d*(s/2-.2),.42,u,18));f.rotation.z=Math.PI/2;let m=l(wn(.18,.18,.36,de.steel(),o+d*(s/2-.2),.42,u,10));m.rotation.z=Math.PI/2}l(wn(.02,.02,1.2,de.steel(),o-.6,2.4,a+r/2-1.3)),l(Ue(.25,.12,.08,de.lightOn(),o-.6,1,r-.12)),l(Ue(.25,.12,.08,de.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let u of[.6,r-.6])l(Ue(s-.5,.6,.25,de.darkSteel(),o,.3,u));let h=l(wn(1,1,r-.3,de.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let d=l(wn(1.02,1.02,.25,de.orange(),o,1.3,a,28));d.rotation.x=Math.PI/2;for(let u of[.15,r-.15]){let f=l(new Ee(new Rn(1,24,12),de.white()));f.position.set(o,1.3,u),f.scale.set(1,1,.25)}l(Sl(Bi(o+.6,.3,r-.4),Bi(o+.6,2.2,r-.4),.06,de.steel()));break}case"generator":l(Ue(s-.3,1.4,r-.4,Xt("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)l(Ue(s-.6,.04,.02,de.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])l(wn(.08,.08,.9,de.darkSteel(),h,1.8,a-.3));l(Ue(s-.2,.08,r-.3,de.yellow(),o,1.42,a));break;case"lamp":l(Ue(.4,.15,.4,de.concrete(),o,.07,a)),l(wn(.06,.08,4.2,de.darkSteel(),o,2.1,a)),l(Ue(.7,.08,.1,de.darkSteel(),o+.3,4.15,a)),l(Ue(.36,.1,.24,de.trim(),o+.6,4.1,a)),l(Ue(.3,.02,.2,de.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*U*.55,d=ll(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),u=l(new Ee(d,de.rock()));u.position.set(o,h*.18,a),u.rotation.y=c()*6;break}case"tiltrotor":{let h=ou();i.layer&&[...h.children].forEach(d=>{d.name!==i.layer&&h.remove(d)}),h.rotation.y=-Math.PI/2,h.position.set(8*U-.006,0,2*U+.006),l(h);break}case"car":{let h=ha[i.type]||ha.suv,d=new ge,u=au({type:i.type,color:i.color});u.position.z=-h.length/2,d.add(u),d.position.set(o,0,a),i.cols>i.rows?d.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(d.rotation.y=Math.PI),l(d);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,d=i.bottom||0,u=i.variant||0,f=i.concrete?de.concrete():de.baseRock(u),m=i.concrete?de.concrete():de.rockCut(u),x=l(Ue(U+.014,h-d,U+.014,[f,f,m,f,f,f],o-.01,(h+d)/2,a-.01));x.userData.noShadowReceive=!0;let p=x.geometry.attributes.position,g=x.geometry.attributes.uv,_=x.geometry.attributes.normal;for(let y=0;y<p.count;y++){let M=i.col*U+o+p.getX(y),C=(h+d)/2+p.getY(y),P=i.row*U+a+p.getZ(y);Math.abs(_.getY(y))>.5?g.setXY(y,M/8,P/8):Math.abs(_.getX(y))>.5?g.setXY(y,P/8,C/8):g.setXY(y,M/8,C/8)}break}case"liftPlatform":{l(Ue(s-.04,.03,r-.04,de.darkSteel(),o,.06,a));for(let u=2.5;u<s-.1;u+=2.5)l(Ue(.03,.035,r-.3,de.rubber(),u,.062,a));for(let u=2.5;u<r-.1;u+=2.5)l(Ue(s-.3,.035,.03,de.rubber(),o,.062,u));let h=.5,d=.22;for(let u=0;u<s-1e-6;u+=h){let f=Math.round(u/h)%2?de.rubber():de.yellow(),m=Math.min(h,s-u);l(Ue(m,.04,d,f,u+m/2,.065,d/2+.03)),l(Ue(m,.04,d,f,u+m/2,.065,r-d/2-.03))}for(let u=d+.03;u<r-d-.03-1e-6;u+=h){let f=Math.round(u/h)%2?de.yellow():de.rubber(),m=Math.min(h,r-d-.03-u);l(Ue(d,.04,m,f,d/2+.03,.065,u+m/2)),l(Ue(d,.04,m,f,s-d/2-.03,.065,u+m/2))}break}case"paint":l(Ue(.1,.012,r-.12,de.paint(),.06,.006,a));break;case"ladder":return _2(i,(e+1)*ut+.95);case"towerLeg":return null;default:l(Ue(s*.8,.8,r*.8,de.trim(),o,.4,a))}return t.position.copy(n),ti(t,hn.object,i.level)}var Oy=_i+4,Hy=Vn.concrete,By={tracks:[[[5.5*U,15.5*U],[7*U,13*U],[8.5*U,12.2*U],[12*U,12.4*U],[16*U,13.2*U],[21*U,12.5*U],[24*U,12*U]],[[9*U,16.5*U],[9.5*U,20*U],[10*U,24*U]]],lines:[{from:[1.6*U,11.2*U],to:[12.3*U,11.2*U]},{from:[12.3*U,1.6*U],to:[12.3*U,11.2*U]},{from:[14.5*U,3.3*U],to:[14.5*U,12.5*U]},{from:[14.5*U,12.5*U],to:[20.5*U,12.5*U]}],hazards:[[5.6*U,10.15*U,7.4*U,10.45*U],[11.15*U,5.6*U,11.45*U,7.4*U],[16.6*U,12.05*U,18.4*U,12.35*U]],pads:[[4.6*U,19*U,3.2*U]],stains:[[8.5*U,14*U,1.4],[13.5*U,2.5*U,1],[17*U,7*U,1.2],[4*U,18*U,.8],[21.5*U,7.8*U,.9]]};function Fu(){return ar}function Ou(){return ar=new ge,ar}function Bu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Pt,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Hu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=Hu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Hu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ht(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Gu(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){t.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new nt(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&b2(o);let c=o.attributes.position.count,l=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:c,materialIndex:0}];for(let h of l){let d=r[h.materialIndex||0];if(!d||!d.visible)continue;let u=Math.min(h.count,c-h.start);if(u<=0)continue;let f=l.length===1?o:E2(o,h.start,u),m=!!d.vertexColors&&!!f.attributes.color;!m&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${d.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${m?1:0}`;e.has(x)||e.set(x,{material:d,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),e.get(x).geometries.push(f)}l.length>1&&o.dispose()});let n=new ge;for(let s of e.values()){let r=Bu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new Ee(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of t)n.attach(s);return n}function E2(i,e,t){let n=new Pt;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Ht(r.array.slice(e*o,(e+t)*o),o,r.normalized))}return n}function b2(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,c=n[o];n[o]=n[a],n[a]=c}e.needsUpdate=!0}}var Ku=61,w2=35,lr=Ku/(U*Math.SQRT1_2),Jr=Math.asin(w2/Ku),S2=lr*Math.cos(Jr),T2=lr*Math.sin(Jr),ya=new xe(Math.SQRT1_2,Math.SQRT1_2),dn=new Ys(-1,1,1,-1,1,300);dn.position.set(ms.x+ya.x*Math.cos(Jr)*120,Math.sin(Jr)*120,ms.z+ya.y*Math.cos(Jr)*120);dn.lookAt(ms);dn.updateMatrixWorld(!0);var Vu=new L(0,0,0).applyMatrix4(dn.matrixWorldInverse),Wu=new L(ya.x,0,ya.y),Xu=new L(0,1,0),A2=new lt().makeTranslation(U*wt,0,0).multiply(new lt().makeRotationY(-Math.PI/2)),ai=new ge;ai.matrixAutoUpdate=!1;In.add(ai);var ju=[],Kr=[],gs=null,Yu=0,vi=jn-1,xs=!1,St={x:0,y:0,width:1,height:1,ratio:1},Zr=!1,$r={buildMs:0,drawCalls:0,triangles:0,proxies:0};dt.domElement.style.display="none";dt.shadowMap.autoUpdate=!1;dt.autoClear=!1;dt.localClippingEnabled=!1;{let i=_i/2+2;Object.assign(xn.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:140}),xn.shadow.camera.updateProjectionMatrix(),xn.shadow.mapSize.set(4096,4096)}var R2=()=>new Promise(i=>setTimeout(i,0));function qu(i,e,t){let n=e*ut;if(n>=i.height-1e-6)return null;let s=Math.min(i.height,t?n+.8:n+ut);return ma({...i,bottom:n,top:s},jn-1)}async function C2(i,e){let t=performance.now(),n=new Map;i.forEach((l,h)=>n.set(`${l[0]}|${l[1]}|${l[2]}|${l[3]===0?"W":"N"}`,h));let s=new ge,r=new Ee(new Di(_i+40,_i+40),new Oe({color:1315343,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(_i/2,-.03,_i/2),r.receiveShadow=!0,s.add(r);let o=[];for(let l=0;l<wt;l++)for(let h=0;h<wt;h++)Vn.floor[0][l][h]===Dt.interior&&o.push([h,l]);let a=new Zs(new gt(U+.004,.04,U+.004),de.interiorFloor(),o.length),c=new lt;o.forEach(([l,h],d)=>a.setMatrixAt(d,c.makeTranslation((l+.5)*U,.025,(h+.5)*U))),a.receiveShadow=!0,s.add(a),Or(s,.28),ai.add(s);for(let l=0;l<jn;l++){let h=new ge,d=new ge,u=new ge,f=new ge,m=new ge;for(let p=0;p<=wt;p++)for(let g=0;g<=wt;g++){for(let _ of["W","N"]){let y=(_==="W"?Vn.wallW:Vn.wallN)[l][p][g];if(!y||!y.type||y.type==="hull")continue;let M=y.type==="wall"||y.type==="door"||y.type==="window";for(let C of M?[!1,!0]:[!1]){Ou();let P=Al(_,g,p,l,y,C);(C?d:h).add(P),M||d.add(Al(_,g,p,l,y,!1));let I=Fu(),k=n.get(`${g}|${p}|${l}|${_}`);y.type==="door"&&k!==void 0&&I.children.length&&(Kr[k]||(Kr[k]={along:_==="W"?new L(0,0,1):new L(1,0,0),level:l,rollUp:!!y.gate}),Kr[k][C?"cut":"full"]=I,Or(I,.28),ai.add(I))}}if(l>0&&p<wt&&g<wt){let _=Vn.floor[l][p][g];(_===Dt.interior||_===Dt.roof||_===Dt.deck)&&m.add(zu(g,p,l,_))}}for(let p of Vn.objects){if(p.kind==="rockFill"){let _=qu(p,l,!1),y=qu(p,l,!0);_&&u.add(_),y&&f.add(y);continue}if(p.level!==l)continue;let g=ma(p,jn-1);g&&m.add(g)}let x={wallsFull:h,wallsCut:d,rockFull:u,rockCut:f,objects:m};for(let p of Object.keys(x)){Or(x[p],.28);let g=Gu(x[p]);g.name=`${p}${l}`,x[p]=g,ai.add(g)}ju[l]=x,e&&e((l+1)/jn),await R2()}$r.buildMs=Math.round(performance.now()-t)}function ga(){for(let i=0;i<jn;i++){let e=ju[i];if(!e)continue;let t=i<=vi,n=xs&&i===vi;e.wallsFull.visible=t&&!n,e.wallsCut.visible=t&&n,e.rockFull.visible=t&&!n,e.rockCut.visible=t&&n,e.objects.visible=t}Kr.forEach(i=>{if(!i)return;let e=i.level<=vi,t=xs&&i.level===vi;i.full&&(i.full.visible=e&&!t),i.cut&&(i.cut.visible=e&&t)}),dt.shadowMap.needsUpdate=!0}function xa(){let i=Vu.x+(St.x-gs.origin[0])/lr,e=Vu.y-(St.y-gs.origin[1])/lr;dn.left=i,dn.right=i+St.width/lr,dn.top=e,dn.bottom=e-St.height/lr,dn.updateProjectionMatrix()}var Rl=new Ui,P2="void main() { gl_Position = vec4(position, 1.0); }",I2="void main() { gl_FragColor = vec4(0.0); }",L2=new kn({vertexShader:P2,fragmentShader:I2,colorWrite:!1,depthWrite:!0,depthTest:!0,side:$t}),Zu=[];function N2(i,e){let t=Zu[i];if(!t||t.userData.quads<e){t&&(Rl.remove(t),t.geometry.dispose()),e=Math.ceil(e/16)*16;let n=new Pt;n.setAttribute("position",new Ht(new Float32Array(e*4*3),3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+2,r*4+1,r*4+1,r*4+2,r*4+3);n.setIndex(s),t=new Ee(n,L2),t.frustumCulled=!1,t.userData.quads=e,Zu[i]=t,Rl.add(t)}return t}var D2=new L;function Cl(i){return D2.copy(i).project(dn).z}var Pl=i=>(i-St.x)/St.width*2-1,Il=i=>1-(i-St.y)/St.height*2;function $u(i,e,t,n,s,r,o,a){[[t,s,o],[n,s,o],[t,r,a],[n,r,a]].forEach(([l,h,d],u)=>{let f=(e*4+u)*3;i[f]=Pl(l),i[f+1]=Il(h),i[f+2]=d})}var Ju=new ta;function U2(i,e,t){Ju.setFromCamera(new xe(Pl(i),Il(e)),dn);let n=Ju.ray,s=(t-n.origin.y)/n.direction.y;return Cl(n.origin.clone().addScaledVector(n.direction,s))}function k2(i,e,t){let s=new L(t.foot[0]*U,t.foot[2],t.foot[1]*U).applyMatrix4(ai.matrix).addScaledVector(Wu,t.pull),r=a=>a<=t.footY?Cl(s.clone().addScaledVector(Xu,(t.footY-a)/S2)):Cl(s.clone().addScaledVector(Wu,(a-t.footY)/T2).addScaledVector(Xu,.02)),o=Math.max(t.y0,Math.min(t.y1,t.footY));$u(i,e,t.x0,t.x1,t.y0,o,r(t.y0),r(o)),$u(i,e+1,t.x0,t.x1,o,t.y1,r(o),r(t.y1))}var Qu={supported:kt==="base",canvas:dt.domElement,stats:$r,get ready(){return Zr},async init(i){return gs=i.field,await C2(i.doors||[],i.onProgress),ga(),Zr=!0,Qu},setViewport(i,e,t,n,s){let r=t!==St.width||n!==St.height||s!==St.ratio;St={x:i,y:e,width:t,height:n,ratio:s},r&&(dt.setPixelRatio(s),dt.setSize(t,n))},setTurns(i){Yu=(i%4+4)%4,ai.matrix.identity();for(let e=0;e<Yu;e++)ai.matrix.premultiply(A2);ai.matrixWorldNeedsUpdate=!0,dt.shadowMap.needsUpdate=!0},setLevel(i,e){i===vi&&!!e===xs||(vi=i,xs=!!e,ga())},setDoor(i,e,t){let n=Kr[i];if(n)for(let s of[n.full,n.cut])s&&(n.rollUp?s.traverse(r=>{r.userData.rollUp&&(r.scale.y=Math.max(.03,1-e))}):s.position.copy(n.along).multiplyScalar(e*t))},render(){Zr&&(xa(),dt.setClearColor(In.background||0,1),dt.clear(!0,!0,!0),dt.render(In,dn),$r.drawCalls=dt.info.render.calls,$r.triangles=dt.info.render.triangles)},renderOccluders(i,e){if(!Zr)return;xa(),dt.setClearColor(0,0),dt.clear(!0,!0,!0);let t=i||[],n=N2(0,1+t.length*2),s=n.geometry.attributes.position.array,r=e+.06,o=St.x,a=St.x+St.width,c=St.y,l=St.y+St.height;[[o,c],[a,c],[o,l],[a,l]].forEach(([u,f],m)=>{s[m*3]=Pl(u),s[m*3+1]=Il(f),s[m*3+2]=U2(u,f,r)}),t.forEach((u,f)=>k2(s,1+f*2,u)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.setDrawRange(0,(1+t.length*2)*6);let d=In.background;dt.render(Rl,dn),In.background=null,dt.render(In,dn),In.background=d,$r.proxies=t.length},pixelOf(i,e,t){xa();let n=new L(i*U,t||0,e*U).applyMatrix4(ai.matrix).project(dn);return{x:St.x+(n.x+1)/2*St.width,y:St.y+(1-n.y)/2*St.height}},snapshot(i){if(!Zr)return null;let e=Math.round(i*gs.height/gs.width),t={...St},n=vi,s=xs;St={x:0,y:0,width:gs.width,height:gs.height,ratio:1},vi=jn-1,xs=!1,ga(),xa();let r=new $n(i,e,{samples:4,colorSpace:an});dt.setRenderTarget(r),dt.setClearColor(1315343,1),dt.clear(!0,!0,!0),dt.render(In,dn);let o=new Uint8Array(i*e*4);dt.readRenderTargetPixels(r,0,0,i,e,o),dt.setRenderTarget(null),r.dispose(),St=t,vi=n,xs=s,ga();let a=document.createElement("canvas");a.width=i,a.height=e;let c=a.getContext("2d"),l=c.createImageData(i,e);for(let h=0;h<e;h++)l.data.set(o.subarray((e-1-h)*i*4,(e-h)*i*4),h*i*4);return c.putImageData(l,0,0),a}};window.Map3D=Qu;})();
