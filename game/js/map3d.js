// Собрано tools/render/build_map3d.sh из tools/render/map3d.js (three.js 0.162.0). Не править вручную.
(()=>{var jc="162";var of=0,Fl=1,af=2;var yd=1,Qc=2,pi=3,Li=0,cn=1,$t=2,Ci=0,Os=1,ac=2,Ol=3,Hl=4,cf=5,Ki=100,lf=101,hf=102,Bl=103,Gl=104,df=200,uf=201,ff=202,pf=203,cc=204,lc=205,mf=206,gf=207,xf=208,yf=209,_f=210,vf=211,Mf=212,Ef=213,bf=214,wf=0,Sf=1,Tf=2,Ro=3,Af=4,Rf=5,Cf=6,Pf=7,_d=0,If=1,Lf=2,Pi=0,Nf=1,Df=2,Uf=3,el=4,kf=5,zf=6,Ff=7;var vd=300,Gs=301,Vs=302,hc=303,dc=304,ia=306,ns=1e3,Qt=1001,uc=1002,jt=1003,Vl=1004;var dr=1005;var _n=1006,ba=1007;var Qi=1008;var Ii=1009,Of=1010,Hf=1011,tl=1012,Md=1013,Ri=1014,si=1015,wr=1016,Ed=1017,bd=1018,es=1020,Bf=1021,Zn=1023,Gf=1024,Vf=1025,ts=1026,Ws=1027,wd=1028,Sd=1029,Wf=1030,Td=1031,Ad=1033,wa=33776,Sa=33777,Ta=33778,Aa=33779,Wl=35840,Xl=35841,Yl=35842,ql=35843,Rd=36196,Zl=37492,$l=37496,Jl=37808,Kl=37809,jl=37810,Ql=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,ch=37820,lh=37821,Ra=36492,hh=36494,dh=36495,Xf=36283,uh=36284,fh=36285,ph=36286;var Co=2300,Po=2301,Ca=2302,mh=2400,gh=2401,xh=2402;var Yf=3200,Cd=3201,Pd=0,qf=1,Ai="",an="srgb",Fi="srgb-linear",nl="display-p3",sa="display-p3-linear",Io="linear",wt="srgb",Lo="rec709",No="p3";var ys=7680;var yh=519,Zf=512,$f=513,Jf=514,Id=515,Kf=516,jf=517,Qf=518,e0=519,_h=35044;var vh="300 es",fc=1035,mi=2e3,Do=2001,Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,pc=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function t0(i,e){return(i%e+e)%e}function Ia(i,e,t){return(1-t)*i+t*e}function Mh(i){return(i&i-1)===0&&i!==0}function mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],_=s[1],y=s[4],M=s[7],R=s[2],C=s[5],I=s[8];return r[0]=o*x+a*_+c*R,r[3]=o*p+a*y+c*C,r[6]=o*g+a*M+c*I,r[1]=l*x+h*_+d*R,r[4]=l*p+h*y+d*C,r[7]=l*g+h*M+d*I,r[2]=u*x+f*_+m*R,r[5]=u*p+f*y+m*C,r[8]=u*g+f*M+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},La=new nt;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){let i=Uo("canvas");return i.style.display="block",i}var Eh={};function i0(i){i in Eh||(Eh[i]=!0,console.warn(i))}var bh=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[Fi]:{transfer:Io,primaries:Lo,toReference:i=>i,fromReference:i=>i},[an]:{transfer:wt,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sa]:{transfer:Io,primaries:No,toReference:i=>i.applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh)},[nl]:{transfer:wt,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh).convertLinearToSRGB()}},s0=new Set([Fi,sa]),mt={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!s0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=to[e].toReference,s=to[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return to[i].primaries},getTransfer:function(i){return i===Ai?Io:to[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,ko=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Uo("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,Mn=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=_n,o=Qi,a=Zn,c=Ii,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=js(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=vd;Mn.DEFAULT_ANISOTROPY=1;var Pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(f+1)/2,R=(g+1)/2,C=(h+u)/4,I=(d+x)/4,k=(m+p)/4;return y>M&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=I/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=k/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=k/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xc=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let p=1-a,g=c*u+l*f+h*m+d*x,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let R=Math.sqrt(y),C=Math.atan2(R,g*_);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}let M=a*_;if(c=c*p+u*M,l=l*p+f*M,h=h*p+m*M,d=d*p+x*M,p===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-a*f,e[t+2]=l*m+h*f+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new L,Sh=new ri,Jn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),io.subVectors(this.max,fr),vs.subVectors(e.a,fr),Ms.subVectors(e.b,fr),Es.subVectors(e.c,fr),Mi.subVectors(Ms,vs),Ei.subVectors(Es,Ms),Wi.subVectors(vs,Es);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Wi.y,Wi.x,0];return!ka(t,vs,Ms,Es,io)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,vs,Ms,Es,io))?!1:(so.crossVectors(Mi,Ei),t=[so.x,so.y,so.z],ka(t,vs,Ms,Es,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,no=new Jn,vs=new L,Ms=new L,Es=new L,Mi=new L,Ei=new L,Wi=new L,fr=new L,io=new L,so=new L,Xi=new L;function ka(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var a0=new Jn,pr=new L,za=new L,is=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(za)),this.expandByPoint(pr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new L,Fa=new L,ro=new L,bi=new L,Oa=new L,oo=new L,Ha=new L,Oo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fa.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Fa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ro),a=bi.dot(this.direction),c=-bi.dot(ro),l=bi.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fa).addScaledVector(ro,u),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){Oa.subVectors(t,e),oo.subVectors(n,e),Ha.crossVectors(Oa,oo);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let c=a*this.direction.dot(oo.crossVectors(bi,oo));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(bi));if(l<0||c+l>o)return null;let h=-a*bi.dot(Ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,x=l*d;t[0]=u+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,x=l*d;t[0]=u-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),wi.crossVectors(n,Tn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),wi.crossVectors(n,Tn)),wi.normalize(),ao.crossVectors(Tn,wi),s[0]=wi.x,s[4]=ao.x,s[8]=Tn.x,s[1]=wi.y,s[5]=ao.y,s[9]=Tn.y,s[2]=wi.z,s[6]=ao.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],y=n[7],M=n[11],R=n[15],C=s[0],I=s[4],k=s[8],T=s[12],v=s[1],S=s[5],le=s[9],K=s[13],N=s[2],F=s[6],G=s[10],q=s[14],D=s[3],E=s[7],H=s[11],X=s[15];return r[0]=o*C+a*v+c*N+l*D,r[4]=o*I+a*S+c*F+l*E,r[8]=o*k+a*le+c*G+l*H,r[12]=o*T+a*K+c*q+l*X,r[1]=h*C+d*v+u*N+f*D,r[5]=h*I+d*S+u*F+f*E,r[9]=h*k+d*le+u*G+f*H,r[13]=h*T+d*K+u*q+f*X,r[2]=m*C+x*v+p*N+g*D,r[6]=m*I+x*S+p*F+g*E,r[10]=m*k+x*le+p*G+g*H,r[14]=m*T+x*K+p*q+g*X,r[3]=_*C+y*v+M*N+R*D,r[7]=_*I+y*S+M*F+R*E,r[11]=_*k+y*le+M*G+R*H,r[15]=_*T+y*K+M*q+R*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15];return m*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+p*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+g*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=d*p*l-x*u*l+x*c*f-a*p*f-d*c*g+a*u*g,y=m*u*l-h*p*l-m*c*f+o*p*f+h*c*g-o*u*g,M=h*x*l-m*d*l+m*a*f-o*x*f-h*a*g+o*d*g,R=m*d*c-h*x*c-m*a*u+o*x*u+h*a*p-o*d*p,C=t*_+n*y+s*M+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=_*I,e[1]=(x*u*r-d*p*r-x*s*f+n*p*f+d*s*g-n*u*g)*I,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*g+n*c*g)*I,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*I,e[4]=y*I,e[5]=(h*p*r-m*u*r+m*s*f-t*p*f-h*s*g+t*u*g)*I,e[6]=(m*c*r-o*p*r-m*s*l+t*p*l+o*s*g-t*c*g)*I,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*I,e[8]=M*I,e[9]=(m*d*r-h*x*r-m*n*f+t*x*f+h*n*g-t*d*g)*I,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*g+t*a*g)*I,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*I,e[12]=R*I,e[13]=(h*x*s-m*d*s+m*n*u-t*x*u-h*n*p+t*d*p)*I,e[14]=(m*a*s-o*x*s-m*n*c+t*x*c+o*n*p-t*a*p)*I,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,_=c*l,y=c*h,M=c*d,R=n.x,C=n.y,I=n.z;return s[0]=(1-(x+g))*R,s[1]=(f+M)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(u+g))*C,s[6]=(p+_)*C,s[7]=0,s[8]=(m+y)*I,s[9]=(p-_)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let l=1/r,h=1/o,d=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,m;if(a===mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Do)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi){let c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*l,f=(n+s)*h,m,x;if(a===mi)m=(o+r)*d,x=-2*d;else if(a===Do)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new L,Xn=new ht,c0=new L(0,0,0),l0=new L(1,1,1),wi=new L,ao=new L,Tn=new L,Th=new ht,Ah=new ri,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h0=0,Rh=new L,ws=new ri,di=new ht,co=new L,mr=new L,d0=new L,u0=new ri,Ch=new L(1,0,0),Ph=new L(0,1,0),Ih=new L(0,0,1),f0={type:"added"},p0={type:"removed"},Ba={type:"childadded",child:null},Ga={type:"childremoved",child:null},pn=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Un,n=new ri,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new nt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(mr,co,this.up):di.lookAt(co,mr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(di),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f0),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};pn.DEFAULT_UP=new L(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new L,ui=new L,Va=new L,fi=new L,Ss=new L,Ts=new L,Lh=new L,Wa=new L,Xa=new L,Ya=new L,Us=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),ui.subVectors(n,t),Va.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(ui),c=Yn.dot(Va),l=ui.dot(ui),h=ui.dot(Va),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),ui.subVectors(e,t),Yn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Yn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),Ts.subVectors(r,n),Wa.subVectors(e,n);let c=Ss.dot(Wa),l=Ts.dot(Wa);if(c<=0&&l<=0)return t.copy(n);Xa.subVectors(e,s);let h=Ss.dot(Xa),d=Ts.dot(Xa);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ss,o);Ya.subVectors(e,r);let f=Ss.dot(Ya),m=Ts.dot(Ya);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ts,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Lh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Lh,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},lo={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=t0(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return mt.fromWorkingColorSpace(on.copy(this),e),Math.round(Zt(on.r*255,0,255))*65536+Math.round(Zt(on.g*255,0,255))*256+Math.round(Zt(on.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=an){mt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(lo);let n=Ia(Si.h,lo.h,t),s=Ia(Si.s,lo.s,t),r=Ia(Si.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new $e;$e.NAMES=Nd;var m0=0,ss=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,ho=new ye,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return i0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var Ho=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bo=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},g0=0,Dn=new ht,Za=new pn,As=new L,An=new Jn,gr=new Jn,qt=new L,It=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Bo:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(An.min,gr.min),An.expandByPoint(qt),qt.addVectors(An.max,gr.max),An.expandByPoint(qt)):(An.expandByPoint(gr.min),An.expandByPoint(gr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(As.fromBufferAttribute(e,l),qt.add(As)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new L,c[k]=new L;let l=new L,h=new L,d=new L,u=new ye,f=new ye,m=new ye,x=new L,p=new L;function g(k,T,v){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,k),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[k].add(x),a[T].add(x),a[v].add(x),c[k].add(p),c[T].add(p),c[v].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,T=_.length;k<T;++k){let v=_[k],S=v.start,le=v.count;for(let K=S,N=S+le;K<N;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let y=new L,M=new L,R=new L,C=new L;function I(k){R.fromBufferAttribute(s,k),C.copy(R);let T=a[k];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(C,T);let S=M.dot(c[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,S)}for(let k=0,T=_.length;k<T;++k){let v=_[k],S=v.start,le=v.count;for(let K=S,N=S+le;K<N;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new Ht(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new ht,Yi=new Oo,uo=new is,Dh=new L,Rs=new L,Cs=new L,Ps=new L,$a=new L,fo=new L,po=new ye,mo=new ye,go=new ye,Uh=new L,kh=new L,zh=new L,xo=new L,yo=new L,be=class extends pn{constructor(e=new It,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&($a.fromBufferAttribute(d,e),o?fo.addScaledVector($a,h):fo.addScaledVector($a.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(uo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(uo,Dh)===null||Yi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,R=y;M<R;M+=3){let C=a.getX(M),I=a.getX(M+1),k=a.getX(M+2);s=_o(this,g,e,n,l,h,d,C,I,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=_o(this,o,e,n,l,h,d,_,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,R=y;M<R;M+=3){let C=M,I=M+1,k=M+2;s=_o(this,g,e,n,l,h,d,C,I,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=p,y=p+1,M=p+2;s=_o(this,o,e,n,l,h,d,_,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function x0(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Li,a),c===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:i}}function _o(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Rs),i.getVertexPosition(c,Cs),i.getVertexPosition(l,Ps);let h=x0(i,e,t,n,Rs,Cs,Ps,xo);if(h){s&&(po.fromBufferAttribute(s,a),mo.fromBufferAttribute(s,c),go.fromBufferAttribute(s,l),h.uv=Us.getInterpolation(xo,Rs,Cs,Ps,po,mo,go,new ye)),r&&(po.fromBufferAttribute(r,a),mo.fromBufferAttribute(r,c),go.fromBufferAttribute(r,l),h.uv1=Us.getInterpolation(xo,Rs,Cs,Ps,po,mo,go,new ye)),o&&(Uh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,c),zh.fromBufferAttribute(o,l),h.normal=Us.getInterpolation(xo,Rs,Cs,Ps,Uh,kh,zh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Us.getNormal(Rs,Cs,Ps,d.normal),h.face=d}return h}var gt=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function m(x,p,g,_,y,M,R,C,I,k,T){let v=M/I,S=R/k,le=M/2,K=R/2,N=C/2,F=I+1,G=k+1,q=0,D=0,E=new L;for(let H=0;H<G;H++){let X=H*S-K;for(let oe=0;oe<F;oe++){let ge=oe*v-le;E[x]=ge*_,E[p]=X*y,E[g]=N,l.push(E.x,E.y,E.z),E[x]=0,E[p]=0,E[g]=C>0?1:-1,h.push(E.x,E.y,E.z),d.push(oe/I),d.push(1-H/k),q+=1}}for(let H=0;H<k;H++)for(let X=0;X<I;X++){let oe=u+X+F*H,ge=u+X+F*(H+1),V=u+(X+1)+F*(H+1),de=u+(X+1)+F*H;c.push(oe,ge,de),c.push(ge,V,de),D+=6}a.addGroup(f,D,T),f+=D,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Xs(i[t]);for(let s in n)e[s]=n[s]}return e}function y0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){return i.getRenderTarget()===null?i.outputColorSpace:mt.workingColorSpace}var _0={clone:Xs,merge:fn},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Go=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new L,Fh=new ye,Oh=new ye,vn=class extends Go{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,yc=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new vn(Is,Ls,e,t);r.layers=this.layers,this.add(r);let o=new vn(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new vn(Is,Ls,e,t);a.layers=this.layers,this.add(a);let c=new vn(Is,Ls,e,t);c.layers=this.layers,this.add(c);let l=new vn(Is,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vo=class extends Mn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_c=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new be(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=_n),new yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ja=new L,E0=new L,b0=new nt,qn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ja.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||b0.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new is,vo=new L,Tr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],p=s[11],g=s[12],_=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,u-l,p-f,M-g).normalize(),n[1].setComponents(c+r,u+l,p+f,M+g).normalize(),n[2].setComponents(c+o,u+h,p+m,M+_).normalize(),n[3].setComponents(c-o,u-h,p-m,M-_).normalize(),n[4].setComponents(c-a,u-d,p-x,M-y).normalize(),t===mi)n[5].setComponents(c+a,u+d,p+x,M+y).normalize();else if(t===Do)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let d=l.array,u=l.usage,f=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){let u=h.array,f=h._updateRange,m=h.updateRanges;if(i.bindBuffer(d,l),f.count===-1&&m.length===0&&i.bufferSubData(d,0,u),m.length!==0){for(let x=0,p=m.length;x<p;x++){let g=m[x];t?i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var Di=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<l;y++){let M=y*d-r;m.push(M,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let y=_+l*g,M=_+l*(g+1),R=_+1+l*(g+1),C=_+1+l*g;f.push(y,M,C),f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},S0=`#ifdef USE_ALPHAHASH
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
}`,tt={alphahash_fragment:S0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:N0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:Y0,color_vertex:q0,common:Z0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:ep,colorspace_fragment:tp,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:yp,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:dp,gradientmap_pars_fragment:up,lightmap_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:_p,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Ep,lights_physical_fragment:bp,lights_physical_pars_fragment:wp,lights_fragment_begin:Sp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Np,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:kp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Hp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:Yp,normal_vertex:qp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:dm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:Mm,uv_pars_vertex:Em,uv_vertex:bm,worldpos_vertex:wm,background_vert:Sm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Nm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:km,linedashed_vert:zm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Hm,meshlambert_vert:Bm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:Ym,meshphong_vert:qm,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:jm,points_vert:Qm,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Re={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ii={basic:{uniforms:fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:fn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:fn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:fn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:fn([Re.points,Re.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:fn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:fn([Re.common,Re.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:fn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:fn([Re.sprite,Re.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:fn([Re.common,Re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:fn([Re.lights,Re.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Mo={r:0,b:0,g:0},Zi=new Un,rg=new ht;function og(i,e,t,n,s,r,o){let a=new $e(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(p,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,c):y&&y.isColor&&(x(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new be(new gt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(g.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Zi)),h.material.toneMapped=mt.getTransfer(y.colorSpace)!==wt,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new be(new Di(2,2),new kn({name:"BackgroundMaterial",uniforms:Xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,g){p.getRGB(Mo,Dd(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),c=g,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:m}}function ag(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function d(N,F,G,q,D){let E=!1;if(o){let H=x(q,G,F);l!==H&&(l=H,f(l.object)),E=g(N,q,G,D),E&&_(N,q,G,D)}else{let H=F.wireframe===!0;(l.geometry!==q.id||l.program!==G.id||l.wireframe!==H)&&(l.geometry=q.id,l.program=G.id,l.wireframe=H,E=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(E||h)&&(h=!1,k(N,F,G,q),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function m(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,F,G){let q=G.wireframe===!0,D=a[N.id];D===void 0&&(D={},a[N.id]=D);let E=D[F.id];E===void 0&&(E={},D[F.id]=E);let H=E[q];return H===void 0&&(H=p(u()),E[q]=H),H}function p(N){let F=[],G=[],q=[];for(let D=0;D<s;D++)F[D]=0,G[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:q,object:N,attributes:{},index:null}}function g(N,F,G,q){let D=l.attributes,E=F.attributes,H=0,X=G.getAttributes();for(let oe in X)if(X[oe].location>=0){let V=D[oe],de=E[oe];if(de===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),V===void 0||V.attribute!==de||de&&V.data!==de.data)return!0;H++}return l.attributesNum!==H||l.index!==q}function _(N,F,G,q){let D={},E=F.attributes,H=0,X=G.getAttributes();for(let oe in X)if(X[oe].location>=0){let V=E[oe];V===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(V=N.instanceColor));let de={};de.attribute=V,V&&V.data&&(de.data=V.data),D[oe]=de,H++}l.attributes=D,l.attributesNum=H,l.index=q}function y(){let N=l.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function M(N){R(N,0)}function R(N,F){let G=l.newAttributes,q=l.enabledAttributes,D=l.attributeDivisors;G[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),D[N]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,F),D[N]=F)}function C(){let N=l.newAttributes,F=l.enabledAttributes;for(let G=0,q=F.length;G<q;G++)F[G]!==N[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function I(N,F,G,q,D,E,H){H===!0?i.vertexAttribIPointer(N,F,G,D,E):i.vertexAttribPointer(N,F,G,q,D,E)}function k(N,F,G,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let D=q.attributes,E=G.getAttributes(),H=F.defaultAttributeValues;for(let X in E){let oe=E[X];if(oe.location>=0){let ge=D[X];if(ge===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ge!==void 0){let V=ge.normalized,de=ge.itemSize,Me=t.get(ge);if(Me===void 0)continue;let Se=Me.buffer,O=Me.type,$=Me.bytesPerElement,me=n.isWebGL2===!0&&(O===i.INT||O===i.UNSIGNED_INT||ge.gpuType===Md);if(ge.isInterleavedBufferAttribute){let fe=ge.data,w=fe.stride,ne=ge.offset;if(fe.isInstancedInterleavedBuffer){for(let Q=0;Q<oe.locationSize;Q++)R(oe.location+Q,fe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Q=0;Q<oe.locationSize;Q++)M(oe.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Q=0;Q<oe.locationSize;Q++)I(oe.location+Q,de/oe.locationSize,O,V,w*$,(ne+de/oe.locationSize*Q)*$,me)}else{if(ge.isInstancedBufferAttribute){for(let fe=0;fe<oe.locationSize;fe++)R(oe.location+fe,ge.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let fe=0;fe<oe.locationSize;fe++)M(oe.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let fe=0;fe<oe.locationSize;fe++)I(oe.location+fe,de/oe.locationSize,O,V,de*$,de/oe.locationSize*fe*$,me)}}else if(H!==void 0){let V=H[X];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(oe.location,V);break;case 3:i.vertexAttrib3fv(oe.location,V);break;case 4:i.vertexAttrib4fv(oe.location,V);break;default:i.vertexAttrib1fv(oe.location,V)}}}}C()}function T(){le();for(let N in a){let F=a[N];for(let G in F){let q=F[G];for(let D in q)m(q[D].object),delete q[D];delete F[G]}delete a[N]}}function v(N){if(a[N.id]===void 0)return;let F=a[N.id];for(let G in F){let q=F[G];for(let D in q)m(q[D].object),delete q[D];delete F[G]}delete a[N.id]}function S(N){for(let F in a){let G=a[F];if(G[N.id]===void 0)continue;let q=G[N.id];for(let D in q)m(q[D].object),delete q[D];delete G[N.id]}}function le(){K(),h=!0,l!==c&&(l=c,f(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:le,resetDefaultState:K,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:M,disableUnusedAttributes:C}}function cg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(h[m],d[m]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function lg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,M=o||e.has("OES_texture_float"),R=y&&M,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:C}}function hg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qn,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let _=r?0:n,y=_*4,M=g.clippingState||null;c.value=M,M=h(m,u,y,f);for(let R=0;R!==y;++R)M[R]=t[R];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function dg(i){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=Gs:a===dc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hc||a===dc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new _c(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ys=class extends Go{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Hh=[.125,.215,.35,.446,.526,.582],ji=20,Ka=new Ys,Bh=new $e,ja=null,Qa=0,ec=0,Ji=(1+Math.sqrt(5))/2,Ns=1/Ji,Gh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ji,Ns),new L(0,Ji,-Ns),new L(Ns,0,Ji),new L(-Ns,0,Ji),new L(Ji,Ns,0),new L(-Ji,Ns,0)],qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Qa,ec),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:wr,format:Zn,colorSpace:Fi,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=fg(r,e,t)}return s}_compileMaterial(e){let t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,s){let a=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Pi,h.autoClear=!1;let f=new rs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new be(new gt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Bh),x=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let y=this._cubeSize;Eo(s,_*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new be(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);let g=[],_=0;for(let I=0;I<ji;++I){let k=I/x,T=Math.exp(-k*k/2);g.push(T),I===0?_+=T:I<p&&(_+=2*T)}for(let I=0;I<g.length;I++)g[I]=g[I]/_;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;let M=this._sizeLods[s],R=3*M*(s>y-ks?s-y+ks:0),C=4*(this._cubeSize-M);Eo(t,R,C,3*M,2*M),c.setRenderTarget(t),c.render(d,Ka)}};function ug(i){let e=[],t=[],n=[],s=i,r=i-ks+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=Hh[o-i+ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*f),y=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let C=0;C<f;C++){let I=C%3*2/3-1,k=C>2?0:-1,T=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];_.set(T,x*m*C),y.set(u,p*m*C);let v=[C,C,C,C,C,C];M.set(v,g*m*C)}let R=new It;R.setAttribute("position",new Ht(_,x)),R.setAttribute("uv",new Ht(y,p)),R.setAttribute("faceIndex",new Ht(M,g)),e.push(R),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){let n=new $n(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fg(i,e,t){let n=new Float32Array(ji),s=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
	`}function pg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===hc||c===dc,h=c===Gs||c===Vs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qs(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new qs(i));let u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let p=0,g=x.length;p<g;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,M=_.length;y<M;y+=3){let R=_[y+0],C=_[y+1],I=_[y+2];u.push(R,C,C,I,I,R)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,M=_.length/3-1;y<M;y+=3){let R=y+0,C=y+1,I=y+2;u.push(R,C,C,I,I,R)}}else return;let p=new(Ld(u)?Bo:Ho)(u,1);p.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function xg(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){i.drawElements(r,m,a,f*c),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let p,g;if(s)p=i,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,m,a,f*c,x),t.update(m,r,x)}function u(f,m,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<x;g++)this.render(f[g]/c,m[g]);else{p.multiDrawElementsWEBGL(r,m,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=m[_];t.update(g,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,e){return i[0]-e[0]}function vg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Mg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==m){let le=function(){v.dispose(),r.delete(h),h.removeEventListener("dispose",le)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],C=0;p===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let I=h.attributes.position.count*C,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let T=new Float32Array(I*k*4*m),v=new Fo(T,I,k,m);v.type=si,v.needsUpdate=!0;let S=C*4;for(let K=0;K<m;K++){let N=y[K],F=M[K],G=R[K],q=I*k*4*K;for(let D=0;D<N.count;D++){let E=D*S;p===!0&&(o.fromBufferAttribute(N,D),T[q+E+0]=o.x,T[q+E+1]=o.y,T[q+E+2]=o.z,T[q+E+3]=0),g===!0&&(o.fromBufferAttribute(F,D),T[q+E+4]=o.x,T[q+E+5]=o.y,T[q+E+6]=o.z,T[q+E+7]=0),_===!0&&(o.fromBufferAttribute(G,D),T[q+E+8]=o.x,T[q+E+9]=o.y,T[q+E+10]=o.z,T[q+E+11]=G.itemSize===4?o.w:1)}}x={count:m,texture:v,size:new ye(I,k)},r.set(h,x),h.addEventListener("dispose",le)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let g=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];n[h.id]=m}for(let y=0;y<f;y++){let M=m[y];M[0]=y,M[1]=u[y]}m.sort(vg);for(let y=0;y<8;y++)y<f&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(_g);let x=h.morphAttributes.position,p=h.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let M=a[y],R=M[0],C=M[1];R!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+y)!==x[R]&&h.setAttribute("morphTarget"+y,x[R]),p&&h.getAttribute("morphNormal"+y)!==p[R]&&h.setAttribute("morphNormal"+y,p[R]),s[y]=C,g+=C):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Eg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Wo=class extends Mn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ri),n===void 0&&h===Ws&&(n=es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kd=new Mn,zd=new Wo(1,1);zd.compareFunction=Id;var Fd=new Fo,Od=new xc,Hd=new Vo,Yh=[],qh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Wt(t,n)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Wt(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Wt(t,n)}}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zd:kd;t.setTexture2D(e||r,s)}function Og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fd,s)}function Gg(i){switch(i){case 5126:return bg;case 35664:return wg;case 35665:return Sg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Ng;case 5125:return Dg;case 36294:return Ug;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Vg(i,e){i.uniform1fv(this.addr,e)}function Wg(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Xg(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Yg(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function qg(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zg(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jg(i,e){i.uniform1iv(this.addr,e)}function Kg(i,e){i.uniform2iv(this.addr,e)}function jg(i,e){i.uniform3iv(this.addr,e)}function Qg(i,e){i.uniform4iv(this.addr,e)}function e1(i,e){i.uniform1uiv(this.addr,e)}function t1(i,e){i.uniform2uiv(this.addr,e)}function n1(i,e){i.uniform3uiv(this.addr,e)}function i1(i,e){i.uniform4uiv(this.addr,e)}function s1(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kd,r[o])}function r1(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function o1(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hd,r[o])}function a1(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function c1(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return Zg;case 35676:return $g;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Kh(i,e){i.seq.push(e),i.map[e.id]=e}function l1(i,e,t){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),o=tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kh(t,l===void 0?new vc(a,i,e):new Mc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ec(a),Kh(t,d)),t=d}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);l1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var h1=37297,d1=0;function u1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function f1(i){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i),n;switch(e===t?n="":e===No&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case sa:return[n,"LinearTransferOETF"];case an:case nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+u1(i.getShaderSource(e),o)}else return s}function p1(i,e){let t=f1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function m1(i,e){let t;switch(e){case Nf:t="Linear";break;case Df:t="Reinhard";break;case Uf:t="OptimizedCineon";break;case el:t="ACESFilmic";break;case zf:t="AgX";break;case Ff:t="Neutral";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function x1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function y1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(v1,E1)}var M1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E1(i,e){let t=tt[e];if(t===void 0){let n=M1.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(b1,w1)}function w1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function S1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function T1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function C1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=S1(t),l=T1(t),h=A1(t),d=R1(t),u=C1(t),f=t.isWebGL2?"":g1(t),m=x1(t),x=y1(r),p=s.createProgram(),g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(g=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[f,id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=bc(o),o=ed(o,t),o=td(o,t),a=bc(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=y+g+o,R=y+_+a,C=jh(s,s.VERTEX_SHADER,M),I=jh(s,s.FRAGMENT_SHADER,R);s.attachShader(p,C),s.attachShader(p,I),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(le){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(I).trim(),G=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,C,I);else{let D=Qh(s,C,"vertex"),E=Qh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+K+`
`+D+`
`+E)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||F==="")&&(q=!1);q&&(le.diagnostics={runnable:G,programLog:K,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:_}})}s.deleteShader(C),s.deleteShader(I),T=new Bs(s,p),v=_1(s,p)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let v;this.getAttributes=function(){return v===void 0&&k(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(p,h1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=I,this}var I1=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}};function L1(i,e,t,n,s,r,o){let a=new Sr,c=new wc,l=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,S,le,K,N){let F=K.fog,G=N.geometry,q=v.isMeshStandardMaterial?K.environment:null,D=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),E=D&&D.mapping===ia?D.image.height:null,H=x[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=X!==void 0?X.length:0,ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let V,de,Me,Se;if(H){let Mt=ii[H];V=Mt.vertexShader,de=Mt.fragmentShader}else V=v.vertexShader,de=v.fragmentShader,c.update(v),Me=c.getVertexShaderID(v),Se=c.getFragmentShaderID(v);let O=i.getRenderTarget(),$=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,fe=!!v.map,w=!!v.matcap,ne=!!D,Q=!!v.aoMap,B=!!v.lightMap,J=!!v.bumpMap,se=!!v.normalMap,_e=!!v.displacementMap,Pe=!!v.emissiveMap,Xe=!!v.metalnessMap,P=!!v.roughnessMap,b=v.anisotropy>0,z=v.clearcoat>0,Z=v.iridescence>0,ue=v.sheen>0,pe=v.transmission>0,ke=b&&!!v.anisotropyMap,ze=z&&!!v.clearcoatMap,ve=z&&!!v.clearcoatNormalMap,Te=z&&!!v.clearcoatRoughnessMap,We=Z&&!!v.iridescenceMap,Ee=Z&&!!v.iridescenceThicknessMap,bt=ue&&!!v.sheenColorMap,Qe=ue&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Oe=!!v.specularColorMap,Be=!!v.specularIntensityMap,lt=pe&&!!v.transmissionMap,Ke=pe&&!!v.thicknessMap,At=!!v.gradientMap,Y=!!v.alphaMap,Ie=v.alphaTest>0,ie=!!v.alphaHash,Ae=!!v.extensions,Ne=Pi;v.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let ct={isWebGL2:d,shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:de,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:me,instancing:$,instancingColor:$&&N.instanceColor!==null,instancingMorph:$&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fi,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:w,envMap:ne,envMapMode:ne&&D.mapping,envMapCubeUVHeight:E,aoMap:Q,lightMap:B,bumpMap:J,normalMap:se,displacementMap:f&&_e,emissiveMap:Pe,normalMapObjectSpace:se&&v.normalMapType===qf,normalMapTangentSpace:se&&v.normalMapType===Pd,metalnessMap:Xe,roughnessMap:P,anisotropy:b,anisotropyMap:ke,clearcoat:z,clearcoatMap:ze,clearcoatNormalMap:ve,clearcoatRoughnessMap:Te,iridescence:Z,iridescenceMap:We,iridescenceThicknessMap:Ee,sheen:ue,sheenColorMap:bt,sheenRoughnessMap:Qe,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:Be,transmission:pe,transmissionMap:lt,thicknessMap:Ke,gradientMap:At,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:Y,alphaTest:Ie,alphaHash:ie,combine:v.combine,mapUv:fe&&p(v.map.channel),aoMapUv:Q&&p(v.aoMap.channel),lightMapUv:B&&p(v.lightMap.channel),bumpMapUv:J&&p(v.bumpMap.channel),normalMapUv:se&&p(v.normalMap.channel),displacementMapUv:_e&&p(v.displacementMap.channel),emissiveMapUv:Pe&&p(v.emissiveMap.channel),metalnessMapUv:Xe&&p(v.metalnessMap.channel),roughnessMapUv:P&&p(v.roughnessMap.channel),anisotropyMapUv:ke&&p(v.anisotropyMap.channel),clearcoatMapUv:ze&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(v.sheenRoughnessMap.channel),specularMapUv:Ve&&p(v.specularMap.channel),specularColorMapUv:Oe&&p(v.specularColorMap.channel),specularIntensityMapUv:Be&&p(v.specularIntensityMap.channel),transmissionMapUv:lt&&p(v.transmissionMap.channel),thicknessMapUv:Ke&&p(v.thicknessMap.channel),alphaMapUv:Y&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(se||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(fe||Y),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&le.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$t,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ae&&v.extensions.derivatives===!0,extensionFragDepth:Ae&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function _(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let le in v.defines)S.push(le),S.push(v.defines[le]);return v.isRawShaderMaterial===!1&&(y(S,v),M(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){let S=x[v.type],le;if(S){let K=ii[S];le=_0.clone(K.uniforms)}else le=v.uniforms;return le}function C(v,S){let le;for(let K=0,N=h.length;K<N;K++){let F=h[K];if(F.cacheKey===S){le=F,++le.usedTimes;break}}return le===void 0&&(le=new P1(i,S,v,r),h.push(le)),le}function I(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function k(v){c.remove(v)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:R,acquireProgram:C,releaseProgram:I,releaseShaderCache:k,programs:h,dispose:T}}function N1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function D1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,m,x,p){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function a(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function c(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function l(d,u){t.length>1&&t.sort(d||D1),n.length>1&&n.sort(u||sd),s.length>1&&s.sort(u||sd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function U1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rd,i.set(n,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function z1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var F1=0;function O1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H1(i,e){let t=new k1,n=z1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new ht,a=new ht;function c(h,d){let u=0,f=0,m=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let x=0,p=0,g=0,_=0,y=0,M=0,R=0,C=0,I=0,k=0,T=0;h.sort(O1);let v=d===!0?Math.PI:1;for(let le=0,K=h.length;le<K;le++){let N=h[le],F=N.color,G=N.intensity,q=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*G*v,f+=F.g*G*v,m+=F.b*G*v;else if(N.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(N.sh.coefficients[E],G);T++}else if(N.isDirectionalLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){let H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,s.directionalShadow[x]=X,s.directionalShadowMap[x]=D,s.directionalShadowMatrix[x]=N.shadow.matrix,M++}s.directional[x]=E,x++}else if(N.isSpotLight){let E=t.get(N);E.position.setFromMatrixPosition(N.matrixWorld),E.color.copy(F).multiplyScalar(G*v),E.distance=q,E.coneCos=Math.cos(N.angle),E.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),E.decay=N.decay,s.spot[g]=E;let H=N.shadow;if(N.map&&(s.spotLightMap[I]=N.map,I++,H.updateMatrices(N),N.castShadow&&k++),s.spotLightMatrix[g]=H.matrix,N.castShadow){let X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,s.spotShadow[g]=X,s.spotShadowMap[g]=D,C++}g++}else if(N.isRectAreaLight){let E=t.get(N);E.color.copy(F).multiplyScalar(G),E.halfWidth.set(N.width*.5,0,0),E.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=E,_++}else if(N.isPointLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*v),E.distance=N.distance,E.decay=N.decay,N.castShadow){let H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,s.pointShadow[p]=X,s.pointShadowMap[p]=D,s.pointShadowMatrix[p]=N.shadow.matrix,R++}s.point[p]=E,p++}else if(N.isHemisphereLight){let E=t.get(N);E.skyColor.copy(N.color).multiplyScalar(G*v),E.groundColor.copy(N.groundColor).multiplyScalar(G*v),s.hemi[y]=E,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=m;let S=s.hash;(S.directionalLength!==x||S.pointLength!==p||S.spotLength!==g||S.rectAreaLength!==_||S.hemiLength!==y||S.numDirectionalShadows!==M||S.numPointShadows!==R||S.numSpotShadows!==C||S.numSpotMaps!==I||S.numLightProbes!==T)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=C+I-k,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=T,S.directionalLength=x,S.pointLength=p,S.spotLength=g,S.rectAreaLength=_,S.hemiLength=y,S.numDirectionalShadows=M,S.numPointShadows=R,S.numSpotShadows=C,S.numSpotMaps=I,S.numLightProbes=T,s.version=F1++)}function l(h,d){let u=0,f=0,m=0,x=0,p=0,g=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let M=h[_];if(M.isDirectionalLight){let R=s.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),u++}else if(M.isSpotLight){let R=s.spot[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:s}}function od(i,e){let t=new H1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new od(i,e),t.set(r,[c])):o>=a.length?(c=new od(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xo=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G1=`void main() {
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
}`;function W1(i,e,t){let n=new Tr,s=new ye,r=new ye,o=new Pt,a=new Xo({depthPacking:Cd}),c=new Tc,l={},h=t.maxTextureSize,d={[Li]:cn,[cn]:Li,[$t]:$t},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let g=this.type;this.render=function(C,I,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let T=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Ci),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let K=g!==pi&&this.type===pi,N=g===pi&&this.type!==pi;for(let F=0,G=C.length;F<G;F++){let q=C[F],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let E=D.getFrameExtents();if(s.multiply(E),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/E.x),s.x=r.x*E.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/E.y),s.y=r.y*E.y,D.mapSize.y=r.y)),D.map===null||K===!0||N===!0){let X=this.type!==pi?{minFilter:jt,magFilter:jt}:{};D.map!==null&&D.map.dispose(),D.map=new $n(s.x,s.y,X),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let H=D.getViewportCount();for(let X=0;X<H;X++){let oe=D.getViewport(X);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),le.viewport(o),D.updateMatrices(q,X),n=D.getFrustum(),M(I,k,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===pi&&_(D,k),D.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,v,S)};function _(C,I){let k=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,k,u,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,k,f,x,null)}function y(C,I,k,T){let v=null,S=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)v=S;else if(v=k.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let le=v.uuid,K=I.uuid,N=l[le];N===void 0&&(N={},l[le]=N);let F=N[K];F===void 0&&(F=v.clone(),N[K]=F,I.addEventListener("dispose",R)),v=F}if(v.visible=I.visible,v.wireframe=I.wireframe,T===pi?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:d[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let le=i.properties.get(v);le.light=k}return v}function M(C,I,k,T,v){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===pi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let K=e.update(C),N=C.material;if(Array.isArray(N)){let F=K.groups;for(let G=0,q=F.length;G<q;G++){let D=F[G],E=N[D.materialIndex];if(E&&E.visible){let H=y(C,E,T,v);C.onBeforeShadow(i,C,I,k,K,H,D),i.renderBufferDirect(k,null,K,H,C,D),C.onAfterShadow(i,C,I,k,K,H,D)}}}else if(N.visible){let F=y(C,N,T,v);C.onBeforeShadow(i,C,I,k,K,F,null),i.renderBufferDirect(k,null,K,F,C,null),C.onAfterShadow(i,C,I,k,K,F,null)}}let le=C.children;for(let K=0,N=le.length;K<N;K++)M(le[K],I,k,T,v)}function R(C){C.target.removeEventListener("dispose",R);for(let k in l){let T=l[k],v=C.target.uuid;v in T&&(T[v].dispose(),delete T[v])}}}function X1(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,Ie=new Pt,ie=null,Ae=new Pt(0,0,0,0);return{setMask:function(Ne){ie!==Ne&&!Y&&(i.colorMask(Ne,Ne,Ne,Ne),ie=Ne)},setLocked:function(Ne){Y=Ne},setClear:function(Ne,ct,Mt,Kt,Ln){Ln===!0&&(Ne*=Kt,ct*=Kt,Mt*=Kt),Ie.set(Ne,ct,Mt,Kt),Ae.equals(Ie)===!1&&(i.clearColor(Ne,ct,Mt,Kt),Ae.copy(Ie))},reset:function(){Y=!1,ie=null,Ae.set(-1,0,0,0)}}}function r(){let Y=!1,Ie=null,ie=null,Ae=null;return{setTest:function(Ne){Ne?$(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Ne){Ie!==Ne&&!Y&&(i.depthMask(Ne),Ie=Ne)},setFunc:function(Ne){if(ie!==Ne){switch(Ne){case wf:i.depthFunc(i.NEVER);break;case Sf:i.depthFunc(i.ALWAYS);break;case Tf:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Af:i.depthFunc(i.EQUAL);break;case Rf:i.depthFunc(i.GEQUAL);break;case Cf:i.depthFunc(i.GREATER);break;case Pf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Ne}},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Ae!==Ne&&(i.clearDepth(Ne),Ae=Ne)},reset:function(){Y=!1,Ie=null,ie=null,Ae=null}}}function o(){let Y=!1,Ie=null,ie=null,Ae=null,Ne=null,ct=null,Mt=null,Kt=null,Ln=null;return{setTest:function(Et){Y||(Et?$(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Et){Ie!==Et&&!Y&&(i.stencilMask(Et),Ie=Et)},setFunc:function(Et,un,ni){(ie!==Et||Ae!==un||Ne!==ni)&&(i.stencilFunc(Et,un,ni),ie=Et,Ae=un,Ne=ni)},setOp:function(Et,un,ni){(ct!==Et||Mt!==un||Kt!==ni)&&(i.stencilOp(Et,un,ni),ct=Et,Mt=un,Kt=ni)},setLocked:function(Et){Y=Et},setClear:function(Et){Ln!==Et&&(i.clearStencil(Et),Ln=Et)},reset:function(){Y=!1,Ie=null,ie=null,Ae=null,Ne=null,ct=null,Mt=null,Kt=null,Ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,u={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,M=null,R=null,C=null,I=null,k=null,T=new $e(0,0,0),v=0,S=!1,le=null,K=null,N=null,F=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,E=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=E>=1):H.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=E>=2);let X=null,oe={},ge=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),de=new Pt().fromArray(ge),Me=new Pt().fromArray(V);function Se(Y,Ie,ie,Ae){let Ne=new Uint8Array(4),ct=i.createTexture();i.bindTexture(Y,ct),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<ie;Mt++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Ie+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ct}let O={};O[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),$(i.DEPTH_TEST),c.setFunc(Ro),_e(!1),Pe(Fl),$(i.CULL_FACE),J(Ci);function $(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function me(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function fe(Y,Ie){return f[Y]!==Ie?(i.bindFramebuffer(Y,Ie),f[Y]=Ie,n&&(Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ie),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function w(Y,Ie){let ie=x,Ae=!1;if(Y){ie=m.get(Ie),ie===void 0&&(ie=[],m.set(Ie,ie));let Ne=Y.textures;if(ie.length!==Ne.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Mt=Ne.length;ct<Mt;ct++)ie[ct]=i.COLOR_ATTACHMENT0+ct;ie.length=Ne.length,Ae=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Ae=!0);if(Ae)if(t.isWebGL2)i.drawBuffers(ie);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ne(Y){return p!==Y?(i.useProgram(Y),p=Y,!0):!1}let Q={[Ki]:i.FUNC_ADD,[lf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[Bl]=i.MIN,Q[Gl]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(Q[Bl]=Y.MIN_EXT,Q[Gl]=Y.MAX_EXT)}let B={[df]:i.ZERO,[uf]:i.ONE,[ff]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function J(Y,Ie,ie,Ae,Ne,ct,Mt,Kt,Ln,Et){if(Y===Ci){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),Y!==cf){if(Y!==_||Et!==S){if((y!==Ki||C!==Ki)&&(i.blendEquation(i.FUNC_ADD),y=Ki,C=Ki),Et)switch(Y){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}M=null,R=null,I=null,k=null,T.set(0,0,0),v=0,_=Y,S=Et}return}Ne=Ne||Ie,ct=ct||ie,Mt=Mt||Ae,(Ie!==y||Ne!==C)&&(i.blendEquationSeparate(Q[Ie],Q[Ne]),y=Ie,C=Ne),(ie!==M||Ae!==R||ct!==I||Mt!==k)&&(i.blendFuncSeparate(B[ie],B[Ae],B[ct],B[Mt]),M=ie,R=Ae,I=ct,k=Mt),(Kt.equals(T)===!1||Ln!==v)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Ln),T.copy(Kt),v=Ln),_=Y,S=!1}function se(Y,Ie){Y.side===$t?me(i.CULL_FACE):$(i.CULL_FACE);let ie=Y.side===cn;Ie&&(ie=!ie),_e(ie),Y.blending===Os&&Y.transparent===!1?J(Ci):J(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),a.setMask(Y.colorWrite);let Ae=Y.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(Y.stencilWriteMask),l.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),l.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),P(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(Y){le!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),le=Y)}function Pe(Y){Y!==of?($(i.CULL_FACE),Y!==K&&(Y===Fl?i.cullFace(i.BACK):Y===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),K=Y}function Xe(Y){Y!==N&&(D&&i.lineWidth(Y),N=Y)}function P(Y,Ie,ie){Y?($(i.POLYGON_OFFSET_FILL),(F!==Ie||G!==ie)&&(i.polygonOffset(Ie,ie),F=Ie,G=ie)):me(i.POLYGON_OFFSET_FILL)}function b(Y){Y?$(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function z(Y){Y===void 0&&(Y=i.TEXTURE0+q-1),X!==Y&&(i.activeTexture(Y),X=Y)}function Z(Y,Ie,ie){ie===void 0&&(X===null?ie=i.TEXTURE0+q-1:ie=X);let Ae=oe[ie];Ae===void 0&&(Ae={type:void 0,texture:void 0},oe[ie]=Ae),(Ae.type!==Y||Ae.texture!==Ie)&&(X!==ie&&(i.activeTexture(ie),X=ie),i.bindTexture(Y,Ie||O[Y]),Ae.type=Y,Ae.texture=Ie)}function ue(){let Y=oe[X];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qe(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(Y){de.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function Be(Y){Me.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function lt(Y,Ie){let ie=d.get(Ie);ie===void 0&&(ie=new WeakMap,d.set(Ie,ie));let Ae=ie.get(Y);Ae===void 0&&(Ae=i.getUniformBlockIndex(Ie,Y.name),ie.set(Y,Ae))}function Ke(Y,Ie){let Ae=d.get(Ie).get(Y);h.get(Ie)!==Ae&&(i.uniformBlockBinding(Ie,Ae,Y.__bindingPointIndex),h.set(Ie,Ae))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,oe={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,M=null,R=null,C=null,I=null,k=null,T=new $e(0,0,0),v=0,S=!1,le=null,K=null,N=null,F=null,G=null,de.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:$,disable:me,bindFramebuffer:fe,drawBuffers:w,useProgram:ne,setBlending:J,setMaterial:se,setFlipSided:_e,setCullFace:Pe,setLineWidth:Xe,setPolygonOffset:P,setScissorTest:b,activeTexture:z,bindTexture:Z,unbindTexture:ue,compressedTexImage2D:pe,compressedTexImage3D:ke,texImage2D:Qe,texImage3D:Ve,updateUBOMapping:lt,uniformBlockBinding:Ke,texStorage2D:Ee,texStorage3D:bt,texSubImage2D:ze,texSubImage3D:ve,compressedTexSubImage2D:Te,compressedTexSubImage3D:We,scissor:Oe,viewport:Be,reset:At}}function Y1(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ye,d=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return m?new OffscreenCanvas(P,b):Uo("canvas")}function p(P,b,z,Z){let ue=1,pe=Xe(P);if((pe.width>Z||pe.height>Z)&&(ue=Z/Math.max(pe.width,pe.height)),ue<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ke=b?mc:Math.floor,ze=ke(ue*pe.width),ve=ke(ue*pe.height);u===void 0&&(u=x(ze,ve));let Te=z?x(ze,ve):u;return Te.width=ze,Te.height=ve,Te.getContext("2d").drawImage(P,0,0,ze,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ze+"x"+ve+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function g(P){let b=Xe(P);return Mh(b.width)&&Mh(b.height)}function _(P){return a?!1:P.wrapS!==Qt||P.wrapT!==Qt||P.minFilter!==jt&&P.minFilter!==_n}function y(P,b){return P.generateMipmaps&&b&&P.minFilter!==jt&&P.minFilter!==_n}function M(P){i.generateMipmap(P)}function R(P,b,z,Z,ue=!1){if(a===!1)return b;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=b;if(b===i.RED&&(z===i.FLOAT&&(pe=i.R32F),z===i.HALF_FLOAT&&(pe=i.R16F),z===i.UNSIGNED_BYTE&&(pe=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(pe=i.R8UI),z===i.UNSIGNED_SHORT&&(pe=i.R16UI),z===i.UNSIGNED_INT&&(pe=i.R32UI),z===i.BYTE&&(pe=i.R8I),z===i.SHORT&&(pe=i.R16I),z===i.INT&&(pe=i.R32I)),b===i.RG&&(z===i.FLOAT&&(pe=i.RG32F),z===i.HALF_FLOAT&&(pe=i.RG16F),z===i.UNSIGNED_BYTE&&(pe=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(pe=i.RG8UI),z===i.UNSIGNED_SHORT&&(pe=i.RG16UI),z===i.UNSIGNED_INT&&(pe=i.RG32UI),z===i.BYTE&&(pe=i.RG8I),z===i.SHORT&&(pe=i.RG16I),z===i.INT&&(pe=i.RG32I)),b===i.RGBA){let ke=ue?Io:mt.getTransfer(Z);z===i.FLOAT&&(pe=i.RGBA32F),z===i.HALF_FLOAT&&(pe=i.RGBA16F),z===i.UNSIGNED_BYTE&&(pe=ke===wt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(P,b,z){return y(P,z)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){return P===jt||P===Vl||P===dr?i.NEAREST:i.LINEAR}function k(P){let b=P.target;b.removeEventListener("dispose",k),v(b),b.isVideoTexture&&d.delete(b)}function T(P){let b=P.target;b.removeEventListener("dispose",T),le(b)}function v(P){let b=n.get(P);if(b.__webglInit===void 0)return;let z=P.source,Z=f.get(z);if(Z){let ue=Z[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(P),Object.keys(Z).length===0&&f.delete(z)}n.remove(P)}function S(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let z=P.source,Z=f.get(z);delete Z[b.__cacheKey],o.memory.textures--}function le(P){let b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ue=0;ue<b.__webglFramebuffer[Z].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[Z][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=P.textures;for(let Z=0,ue=z.length;Z<ue;Z++){let pe=n.get(z[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(P)}let K=0;function N(){K=0}function F(){let P=K;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),K+=1,P}function G(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function q(P,b){let z=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(z,P,b);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function D(P,b){let z=n.get(P);if(P.version>0&&z.__version!==P.version){Me(z,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function E(P,b){let z=n.get(P);if(P.version>0&&z.__version!==P.version){Me(z,P,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function H(P,b){let z=n.get(P);if(P.version>0&&z.__version!==P.version){Se(z,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let X={[ns]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},oe={[jt]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ge={[Zf]:i.NEVER,[e0]:i.ALWAYS,[$f]:i.LESS,[Id]:i.LEQUAL,[Jf]:i.EQUAL,[Qf]:i.GEQUAL,[Kf]:i.GREATER,[jf]:i.NOTEQUAL};function V(P,b,z){if(b.type===si&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===ba||b.magFilter===dr||b.magFilter===Qi||b.minFilter===_n||b.minFilter===ba||b.minFilter===dr||b.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(P,i.TEXTURE_WRAP_S,X[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,X[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,X[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,oe[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,oe[b.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Qt||b.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==jt&&b.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==dr&&b.minFilter!==Qi||b.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function de(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",k));let Z=b.source,ue=f.get(Z);ue===void 0&&(ue={},f.set(Z,ue));let pe=G(b);if(pe!==P.__cacheKey){ue[pe]===void 0&&(ue[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ue[pe].usedTimes++;let ke=ue[P.__cacheKey];ke!==void 0&&(ue[P.__cacheKey].usedTimes--,ke.usedTimes===0&&S(b)),P.__cacheKey=pe,P.__webglTexture=ue[pe].texture}return z}function Me(P,b,z){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let ue=de(P,b),pe=b.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+z);let ke=n.get(pe);if(pe.version!==ke.__version||ue===!0){t.activeTexture(i.TEXTURE0+z);let ze=mt.getPrimaries(mt.workingColorSpace),ve=b.colorSpace===Ai?null:mt.getPrimaries(b.colorSpace),Te=b.colorSpace===Ai||ze===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let We=_(b)&&g(b.image)===!1,Ee=p(b.image,We,!1,s.maxTextureSize);Ee=Pe(b,Ee);let bt=g(Ee)||a,Qe=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type),Oe=R(b.internalFormat,Qe,Ve,b.colorSpace,b.isVideoTexture);V(Z,b,bt);let Be,lt=b.mipmaps,Ke=a&&b.isVideoTexture!==!0&&Oe!==Rd,At=ke.__version===void 0||ue===!0,Y=pe.dataReady,Ie=C(b,Ee,bt);if(b.isDepthTexture)Oe=i.DEPTH_COMPONENT,a?b.type===si?Oe=i.DEPTH_COMPONENT32F:b.type===Ri?Oe=i.DEPTH_COMPONENT24:b.type===es?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:b.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ts&&Oe===i.DEPTH_COMPONENT&&b.type!==tl&&b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ri,Ve=r.convert(b.type)),b.format===Ws&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,b.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=es,Ve=r.convert(b.type))),At&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Oe,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Qe,Ve,null));else if(b.isDataTexture)if(lt.length>0&&bt){Ke&&At&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,lt[0].width,lt[0].height);for(let ie=0,Ae=lt.length;ie<Ae;ie++)Be=lt[ie],Ke?Y&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Be.width,Be.height,Qe,Ve,Be.data):t.texImage2D(i.TEXTURE_2D,ie,Oe,Be.width,Be.height,0,Qe,Ve,Be.data);b.generateMipmaps=!1}else Ke?(At&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,Ee.width,Ee.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Qe,Ve,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Qe,Ve,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,lt[0].width,lt[0].height,Ee.depth);for(let ie=0,Ae=lt.length;ie<Ae;ie++)Be=lt[ie],b.format!==Zn?Qe!==null?Ke?Y&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Ee.depth,Qe,Be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Oe,Be.width,Be.height,Ee.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Ee.depth,Qe,Ve,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Oe,Be.width,Be.height,Ee.depth,0,Qe,Ve,Be.data)}else{Ke&&At&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,lt[0].width,lt[0].height);for(let ie=0,Ae=lt.length;ie<Ae;ie++)Be=lt[ie],b.format!==Zn?Qe!==null?Ke?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Be.width,Be.height,Qe,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Oe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Y&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Be.width,Be.height,Qe,Ve,Be.data):t.texImage2D(i.TEXTURE_2D,ie,Oe,Be.width,Be.height,0,Qe,Ve,Be.data)}else if(b.isDataArrayTexture)Ke?(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Qe,Ve,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,Ee.width,Ee.height,Ee.depth,0,Qe,Ve,Ee.data);else if(b.isData3DTexture)Ke?(At&&t.texStorage3D(i.TEXTURE_3D,Ie,Oe,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Qe,Ve,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,Ee.width,Ee.height,Ee.depth,0,Qe,Ve,Ee.data);else if(b.isFramebufferTexture){if(At)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ie,Oe,Ee.width,Ee.height);else{let ie=Ee.width,Ae=Ee.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Oe,ie,Ae,0,Qe,Ve,null),ie>>=1,Ae>>=1}}else if(lt.length>0&&bt){if(Ke&&At){let ie=Xe(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ie.width,ie.height)}for(let ie=0,Ae=lt.length;ie<Ae;ie++)Be=lt[ie],Ke?Y&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Qe,Ve,Be):t.texImage2D(i.TEXTURE_2D,ie,Oe,Qe,Ve,Be);b.generateMipmaps=!1}else if(Ke){if(At){let ie=Xe(Ee);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ie.width,ie.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Qe,Ve,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Qe,Ve,Ee);y(b,bt)&&M(Z),ke.__version=pe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Se(P,b,z){if(b.image.length!==6)return;let Z=de(P,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let pe=n.get(ue);if(ue.version!==pe.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);let ke=mt.getPrimaries(mt.workingColorSpace),ze=b.colorSpace===Ai?null:mt.getPrimaries(b.colorSpace),ve=b.colorSpace===Ai||ke===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Te=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!Te&&!We?Ee[ie]=p(b.image[ie],!1,!0,s.maxCubemapSize):Ee[ie]=We?b.image[ie].image:b.image[ie],Ee[ie]=Pe(b,Ee[ie]);let bt=Ee[0],Qe=g(bt)||a,Ve=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Be=R(b.internalFormat,Ve,Oe,b.colorSpace),lt=a&&b.isVideoTexture!==!0,Ke=pe.__version===void 0||Z===!0,At=ue.dataReady,Y=C(b,bt,Qe);V(i.TEXTURE_CUBE_MAP,b,Qe);let Ie;if(Te){lt&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Be,bt.width,bt.height);for(let ie=0;ie<6;ie++){Ie=Ee[ie].mipmaps;for(let Ae=0;Ae<Ie.length;Ae++){let Ne=Ie[Ae];b.format!==Zn?Ve!==null?lt?At&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Ne.width,Ne.height,Ve,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Ne.width,Ne.height,Ve,Oe,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Be,Ne.width,Ne.height,0,Ve,Oe,Ne.data)}}}else{if(Ie=b.mipmaps,lt&&Ke){Ie.length>0&&Y++;let ie=Xe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(We){lt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,Ve,Oe,Ee[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Ee[ie].width,Ee[ie].height,0,Ve,Oe,Ee[ie].data);for(let Ae=0;Ae<Ie.length;Ae++){let ct=Ie[Ae].image[ie].image;lt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,ct.width,ct.height,Ve,Oe,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Be,ct.width,ct.height,0,Ve,Oe,ct.data)}}else{lt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Oe,Ee[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Ve,Oe,Ee[ie]);for(let Ae=0;Ae<Ie.length;Ae++){let Ne=Ie[Ae];lt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Ve,Oe,Ne.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Be,Ve,Oe,Ne.image[ie])}}}y(b,Qe)&&M(i.TEXTURE_CUBE_MAP),pe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function O(P,b,z,Z,ue,pe){let ke=r.convert(z.format,z.colorSpace),ze=r.convert(z.type),ve=R(z.internalFormat,ke,ze,z.colorSpace);if(!n.get(b).__hasExternalTextures){let We=Math.max(1,b.width>>pe),Ee=Math.max(1,b.height>>pe);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,pe,ve,We,Ee,b.depth,0,ke,ze,null):t.texImage2D(ue,pe,ve,We,Ee,0,ke,ze,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ue,n.get(z).__webglTexture,0,J(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ue,n.get(z).__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(P,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let Z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||se(b)){let ue=b.depthTexture;ue&&ue.isDepthTexture&&(ue.type===si?Z=i.DEPTH_COMPONENT32F:ue.type===Ri&&(Z=i.DEPTH_COMPONENT24));let pe=J(b);se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Z,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Z,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){let Z=J(b);z&&se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,b.width,b.height):se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{let Z=b.textures;for(let ue=0;ue<Z.length;ue++){let pe=Z[ue],ke=r.convert(pe.format,pe.colorSpace),ze=r.convert(pe.type),ve=R(pe.internalFormat,ke,ze,pe.colorSpace),Te=J(b);z&&se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ve,b.width,b.height):se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let Z=n.get(b.depthTexture).__webglTexture,ue=J(b);if(b.depthTexture.format===ts)se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Ws)se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function fe(P){let b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=i.createRenderbuffer(),$(b.__webglDepthbuffer[Z],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),$(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function w(P,b,z){let Z=n.get(P);b!==void 0&&O(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&fe(P)}function ne(P){let b=P.texture,z=n.get(P),Z=n.get(b);P.addEventListener("dispose",T);let ue=P.textures,pe=P.isWebGLCubeRenderTarget===!0,ke=ue.length>1,ze=g(P)||a;if(ke||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,o.memory.textures++),pe){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Te=0;Te<b.mipmaps.length;Te++)z.__webglFramebuffer[ve][Te]=i.createFramebuffer()}else z.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)z.__webglFramebuffer[ve]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ke)if(s.drawBuffers)for(let ve=0,Te=ue.length;ve<Te;ve++){let We=n.get(ue[ve]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&se(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){let Te=ue[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);let We=r.convert(Te.format,Te.colorSpace),Ee=r.convert(Te.type),bt=R(Te.internalFormat,We,Ee,Te.colorSpace,P.isXRRenderTarget===!0),Qe=J(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,bt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),$(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),V(i.TEXTURE_CUBE_MAP,b,ze);for(let ve=0;ve<6;ve++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)O(z.__webglFramebuffer[ve][Te],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else O(z.__webglFramebuffer[ve],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(b,ze)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ve=0,Te=ue.length;ve<Te;ve++){let We=ue[ve],Ee=n.get(We);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),V(i.TEXTURE_2D,We,ze),O(z.__webglFramebuffer,P,We,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),y(We,ze)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,Z.__webglTexture),V(ve,b,ze),a&&b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)O(z.__webglFramebuffer[Te],P,b,i.COLOR_ATTACHMENT0,ve,Te);else O(z.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,ve,0);y(b,ze)&&M(ve),t.unbindTexture()}P.depthBuffer&&fe(P)}function Q(P){let b=g(P)||a,z=P.textures;for(let Z=0,ue=z.length;Z<ue;Z++){let pe=z[Z];if(y(pe,b)){let ke=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ze=n.get(pe).__webglTexture;t.bindTexture(ke,ze),M(ke),t.unbindTexture()}}}function B(P){if(a&&P.samples>0&&se(P)===!1){let b=P.textures,z=P.width,Z=P.height,ue=i.COLOR_BUFFER_BIT,pe=[],ke=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(P),ve=b.length>1;if(ve)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){pe.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&pe.push(ke);let We=ze.__ignoreDepthValues!==void 0?ze.__ignoreDepthValues:!1;if(We===!1&&(P.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ke])),ve){let Ee=n.get(b[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,ue,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]);let We=n.get(b[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}}function J(P){return Math.min(s.maxSamples,P.samples)}function se(P){let b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(P){let b=o.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function Pe(P,b){let z=P.colorSpace,Z=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===fc||z!==Fi&&z!==Ai&&(mt.getTransfer(z)===wt?a===!1?e.has("EXT_sRGB")===!0&&Z===Zn?(P.format=fc,P.minFilter=_n,P.generateMipmaps=!1):b=ko.sRGBToLinear(b):(Z!==Zn||ue!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=D,this.setTexture3D=E,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=O,this.useMultisampledRTT=se}function q1(i,e,t){let n=t.isWebGL2;function s(r,o=Ai){let a,c=mt.getTransfer(o);if(r===Ii)return i.UNSIGNED_BYTE;if(r===Ed)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Of)return i.BYTE;if(r===Hf)return i.SHORT;if(r===tl)return i.UNSIGNED_SHORT;if(r===Md)return i.INT;if(r===Ri)return i.UNSIGNED_INT;if(r===si)return i.FLOAT;if(r===wr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bf)return i.ALPHA;if(r===Zn)return i.RGBA;if(r===Gf)return i.LUMINANCE;if(r===Vf)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Ws)return i.DEPTH_STENCIL;if(r===fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wd)return i.RED;if(r===Sd)return i.RED_INTEGER;if(r===Wf)return i.RG;if(r===Td)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===wa||r===Sa||r===Ta||r===Aa)if(c===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wl||r===Xl||r===Yl||r===ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zl||r===$l)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zl)return c===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$l)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jl||r===Kl||r===jl||r===Ql||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===ch||r===lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jl)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jl)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ql)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lh)return c===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ra||r===hh||r===dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ra)return c===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xf||r===uh||r===fh||r===ph)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ra)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ac=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xe=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z1={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$1=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new kn({extensions:{fragDepth:!0},vertexShader:$1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new be(new Di(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Cc=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,x=new Rc,p=t.getContextAttributes(),g=null,_=null,y=[],M=[],R=new ye,C=null,I=new vn;I.layers.enable(1),I.viewport=new Pt;let k=new vn;k.layers.enable(2),k.viewport=new Pt;let T=[I,k],v=new Ac;v.layers.enable(1),v.layers.enable(2);let S=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let de=y[V];return de===void 0&&(de=new vr,y[V]=de),de.getTargetRaySpace()},this.getControllerGrip=function(V){let de=y[V];return de===void 0&&(de=new vr,y[V]=de),de.getGripSpace()},this.getHand=function(V){let de=y[V];return de===void 0&&(de=new vr,y[V]=de),de.getHandSpace()};function K(V){let de=M.indexOf(V.inputSource);if(de===-1)return;let Me=y[de];Me!==void 0&&(Me.update(V.inputSource,V.frame,l||o),Me.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let V=0;V<y.length;V++){let de=M[V];de!==null&&(M[V]=null,y[V].disconnect(de))}S=null,le=null,x.reset(),e.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new $n(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Me=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Ws:ts,Me=p.stencil?es:Ri);let O={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(O),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new $n(u.textureWidth,u.textureHeight,{format:Zn,type:Ii,depthTexture:new Wo(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let $=e.properties.get(_);$.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(V){for(let de=0;de<V.removed.length;de++){let Me=V.removed[de],Se=M.indexOf(Me);Se>=0&&(M[Se]=null,y[Se].disconnect(Me))}for(let de=0;de<V.added.length;de++){let Me=V.added[de],Se=M.indexOf(Me);if(Se===-1){for(let $=0;$<y.length;$++)if($>=M.length){M.push(Me),Se=$;break}else if(M[$]===null){M[$]=Me,Se=$;break}if(Se===-1)break}let O=y[Se];O&&O.connect(Me)}}let G=new L,q=new L;function D(V,de,Me){G.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);let Se=G.distanceTo(q),O=de.projectionMatrix.elements,$=Me.projectionMatrix.elements,me=O[14]/(O[10]-1),fe=O[14]/(O[10]+1),w=(O[9]+1)/O[5],ne=(O[9]-1)/O[5],Q=(O[8]-1)/O[0],B=($[8]+1)/$[0],J=me*Q,se=me*B,_e=Se/(-Q+B),Pe=_e*-Q;de.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Pe),V.translateZ(_e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let Xe=me+_e,P=fe+_e,b=J-Pe,z=se+(Se-Pe),Z=w*fe/P*Xe,ue=ne*fe/P*Xe;V.projectionMatrix.makePerspective(b,z,Z,ue,Xe,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function E(V,de){de===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(de.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),v.near=k.near=I.near=V.near,v.far=k.far=I.far=V.far,(S!==v.near||le!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,le=v.far,I.near=S,I.far=le,k.near=S,k.far=le,I.updateProjectionMatrix(),k.updateProjectionMatrix(),V.updateProjectionMatrix());let de=V.parent,Me=v.cameras;E(v,de);for(let Se=0;Se<Me.length;Se++)E(Me[Se],de);Me.length===2?D(v,I,k):v.projectionMatrix.copy(I.projectionMatrix),H(V,v,de)};function H(V,de,Me){Me===null?V.matrix.copy(de.matrixWorld):(V.matrix.copy(Me.matrixWorld),V.matrix.invert(),V.matrix.multiply(de.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(de.projectionMatrix),V.projectionMatrixInverse.copy(de.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=pc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null};let X=null;function oe(V,de){if(h=de.getViewerPose(l||o),m=de,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Se=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,Se=!0);for(let $=0;$<Me.length;$++){let me=Me[$],fe=null;if(f!==null)fe=f.getViewport(me);else{let ne=d.getViewSubImage(u,me);fe=ne.viewport,$===0&&(e.setRenderTargetTextures(_,ne.colorTexture,u.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(_))}let w=T[$];w===void 0&&(w=new vn,w.layers.enable($),w.viewport=new Pt,T[$]=w),w.matrix.fromArray(me.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(me.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(fe.x,fe.y,fe.width,fe.height),$===0&&(v.matrix.copy(w.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Se===!0&&v.cameras.push(w)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")){let $=d.getDepthInformation(Me[0]);$&&$.isValid&&$.texture&&x.init(e,$,s.renderState)}}for(let Me=0;Me<y.length;Me++){let Se=M[Me],O=y[Me];Se!==null&&O!==void 0&&O.update(Se,de,l||o)}x.render(e,v),X&&X(V,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),m=null}let ge=new Ud;ge.setAnimationLoop(oe),this.setAnimationLoop=function(V){X=V},this.dispose=function(){}}},$i=new Un,K1=new ht;function j1(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Dd(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,y):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===cn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===cn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),y=_.envMap,M=_.envMapRotation;if(y&&(p.envMap.value=y,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),p.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler($i)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;let R=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*R,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q1(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){let M=y.program;n.uniformBlockBinding(_,M)}function l(_,y){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",p));let R=y.program;n.updateUBOMapping(_,R);let C=e.render.frame;r[_.id]!==C&&(u(_),r[_.id]=C)}function h(_){let y=d();_.__bindingPointIndex=y;let M=i.createBuffer(),R=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],M=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,I=M.length;C<I;C++){let k=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,v=k.length;T<v;T++){let S=k[T];if(f(S,C,T,R)===!0){let le=S.__offset,K=Array.isArray(S.value)?S.value:[S.value],N=0;for(let F=0;F<K.length;F++){let G=K[F],q=x(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,le+N,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,M,R){let C=_.value,I=y+"_"+M;if(R[I]===void 0)return typeof C=="number"||typeof C=="boolean"?R[I]=C:R[I]=C.clone(),!0;{let k=R[I];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return R[I]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function m(_){let y=_.uniforms,M=0,R=16;for(let I=0,k=y.length;I<k;I++){let T=Array.isArray(y[I])?y[I]:[y[I]];for(let v=0,S=T.length;v<S;v++){let le=T[v],K=Array.isArray(le.value)?le.value:[le.value];for(let N=0,F=K.length;N<F;N++){let G=K[N],q=x(G),D=M%R;D!==0&&R-D<q.boundary&&(M+=R-D),le.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=M,M+=q.storage}}}let C=M%R;return C>0&&(M+=R-C),_.__size=M,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var Ar=class{constructor(e={}){let{canvas:t=n0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let y=this,M=!1,R=0,C=0,I=null,k=-1,T=null,v=new Pt,S=new Pt,le=null,K=new $e(0),N=0,F=t.width,G=t.height,q=1,D=null,E=null,H=new Pt(0,0,F,G),X=new Pt(0,0,F,G),oe=!1,ge=new Tr,V=!1,de=!1,Me=null,Se=new ht,O=new ye,$=new L,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return I===null?q:1}let w=n;function ne(A,j){for(let re=0;re<A.length;re++){let ae=A[re],ee=t.getContext(ae,j);if(ee!==null)return ee}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),w===null){let j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),w=ne(j,A),w===null)throw ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,B,J,se,_e,Pe,Xe,P,b,z,Z,ue,pe,ke,ze,ve,Te,We,Ee,bt,Qe,Ve,Oe,Be;function lt(){Q=new mg(w),B=new lg(w,Q,e),Q.init(B),Ve=new q1(w,Q,B),J=new X1(w,Q,B),se=new yg(w),_e=new N1,Pe=new Y1(w,Q,J,_e,B,Ve,se),Xe=new dg(y),P=new pg(y),b=new w0(w,B),Oe=new ag(w,Q,b,B),z=new gg(w,b,se,Oe),Z=new Eg(w,z,b,se),Ee=new Mg(w,B,Pe),ve=new hg(_e),ue=new L1(y,Xe,P,Q,B,Oe,ve),pe=new j1(y,_e),ke=new U1,ze=new B1(Q,B),We=new og(y,Xe,P,J,Z,u,c),Te=new W1(y,Z,B),Be=new Q1(w,se,B,J),bt=new cg(w,Q,se,B),Qe=new xg(w,Q,se,B),se.programs=ue.programs,y.capabilities=B,y.extensions=Q,y.properties=_e,y.renderLists=ke,y.shadowMap=Te,y.state=J,y.info=se}lt();let Ke=new Cc(y,w);this.xr=Ke,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,G,!1))},this.getSize=function(A){return A.set(F,G)},this.setSize=function(A,j,re=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,G=j,t.width=Math.floor(A*q),t.height=Math.floor(j*q),re===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(F*q,G*q).floor()},this.setDrawingBufferSize=function(A,j,re){F=A,G=j,q=re,t.width=Math.floor(A*re),t.height=Math.floor(j*re),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,j,re,ae){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,j,re,ae),J.viewport(v.copy(H).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,j,re,ae){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,j,re,ae),J.scissor(S.copy(X).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){J.setScissorTest(oe=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){E=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(A=!0,j=!0,re=!0){let ae=0;if(A){let ee=!1;if(I!==null){let Ue=I.texture.format;ee=Ue===Ad||Ue===Td||Ue===Sd}if(ee){let Ue=I.texture.type,Ge=Ue===Ii||Ue===Ri||Ue===tl||Ue===es||Ue===Ed||Ue===bd,qe=We.getClearColor(),Ze=We.getClearAlpha(),ot=qe.r,Je=qe.g,je=qe.b;Ge?(f[0]=ot,f[1]=Je,f[2]=je,f[3]=Ze,w.clearBufferuiv(w.COLOR,0,f)):(m[0]=ot,m[1]=Je,m[2]=je,m[3]=Ze,w.clearBufferiv(w.COLOR,0,m))}else ae|=w.COLOR_BUFFER_BIT}j&&(ae|=w.DEPTH_BUFFER_BIT),re&&(ae|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ke.dispose(),ze.dispose(),_e.dispose(),Xe.dispose(),P.dispose(),Z.dispose(),Oe.dispose(),Be.dispose(),ue.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Ln),Ke.removeEventListener("sessionend",Et),Me&&(Me.dispose(),Me=null),un.stop()};function At(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=se.autoReset,j=Te.enabled,re=Te.autoUpdate,ae=Te.needsUpdate,ee=Te.type;lt(),se.autoReset=A,Te.enabled=j,Te.autoUpdate=re,Te.needsUpdate=ae,Te.type=ee}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){let j=A.target;j.removeEventListener("dispose",ie),Ae(j)}function Ae(A){Ne(A),_e.remove(A)}function Ne(A){let j=_e.get(A).programs;j!==void 0&&(j.forEach(function(re){ue.releaseProgram(re)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,re,ae,ee,Ue){j===null&&(j=me);let Ge=ee.isMesh&&ee.matrixWorld.determinant()<0,qe=tf(A,j,re,ae,ee);J.setMaterial(ae,Ge);let Ze=re.index,ot=1;if(ae.wireframe===!0){if(Ze=z.getWireframeAttribute(re),Ze===void 0)return;ot=2}let Je=re.drawRange,je=re.attributes.position,kt=Je.start*ot,Sn=(Je.start+Je.count)*ot;Ue!==null&&(kt=Math.max(kt,Ue.start*ot),Sn=Math.min(Sn,(Ue.start+Ue.count)*ot)),Ze!==null?(kt=Math.max(kt,0),Sn=Math.min(Sn,Ze.count)):je!=null&&(kt=Math.max(kt,0),Sn=Math.min(Sn,je.count));let Yt=Sn-kt;if(Yt<0||Yt===1/0)return;Oe.setup(ee,ae,qe,re,Ze);let ci,Nt=bt;if(Ze!==null&&(ci=b.get(Ze),Nt=Qe,Nt.setIndex(ci)),ee.isMesh)ae.wireframe===!0?(J.setLineWidth(ae.wireframeLinewidth*fe()),Nt.setMode(w.LINES)):Nt.setMode(w.TRIANGLES);else if(ee.isLine){let et=ae.linewidth;et===void 0&&(et=1),J.setLineWidth(et*fe()),ee.isLineSegments?Nt.setMode(w.LINES):ee.isLineLoop?Nt.setMode(w.LINE_LOOP):Nt.setMode(w.LINE_STRIP)}else ee.isPoints?Nt.setMode(w.POINTS):ee.isSprite&&Nt.setMode(w.TRIANGLES);if(ee.isBatchedMesh)Nt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Nt.renderInstances(kt,Yt,ee.count);else if(re.isInstancedBufferGeometry){let et=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,_a=Math.min(re.instanceCount,et);Nt.renderInstances(kt,Yt,_a)}else Nt.render(kt,Yt)};function ct(A,j,re){A.transparent===!0&&A.side===$t&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,eo(A,j,re),A.side=Li,A.needsUpdate=!0,eo(A,j,re),A.side=$t):eo(A,j,re)}this.compile=function(A,j,re=null){re===null&&(re=A),p=ze.get(re),p.init(),_.push(p),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),A!==re&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(y._useLegacyLights);let ae=new Set;return A.traverse(function(ee){let Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let Ge=0;Ge<Ue.length;Ge++){let qe=Ue[Ge];ct(qe,re,ee),ae.add(qe)}else ct(Ue,re,ee),ae.add(Ue)}),_.pop(),p=null,ae},this.compileAsync=function(A,j,re=null){let ae=this.compile(A,j,re);return new Promise(ee=>{function Ue(){if(ae.forEach(function(Ge){_e.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){ee(A);return}setTimeout(Ue,10)}Q.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Mt=null;function Kt(A){Mt&&Mt(A)}function Ln(){un.stop()}function Et(){un.start()}let un=new Ud;un.setAnimationLoop(Kt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(A){Mt=A,Ke.setAnimationLoop(A),A===null?un.stop():un.start()},Ke.addEventListener("sessionstart",Ln),Ke.addEventListener("sessionend",Et),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(j),j=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,j,I),p=ze.get(A,_.length),p.init(),_.push(p),Se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ge.setFromProjectionMatrix(Se),de=this.localClippingEnabled,V=ve.init(this.clippingPlanes,de),x=ke.get(A,g.length),x.init(),g.push(x),ni(A,j,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(D,E),this.info.render.frame++,V===!0&&ve.beginShadows();let re=p.state.shadowsArray;if(Te.render(re,A,j),V===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1)&&We.render(x,A),p.setupLights(y._useLegacyLights),j.isArrayCamera){let ae=j.cameras;for(let ee=0,Ue=ae.length;ee<Ue;ee++){let Ge=ae[ee];Ll(x,A,Ge,Ge.viewport)}}else Ll(x,A,j);I!==null&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,j),Oe.resetDefaultState(),k=-1,T=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function ni(A,j,re,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ge.intersectsSprite(A)){ae&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);let Ge=Z.update(A),qe=A.material;qe.visible&&x.push(A,Ge,qe,re,$.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ge.intersectsObject(A))){let Ge=Z.update(A),qe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),$.copy(Ge.boundingSphere.center)),$.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(qe)){let Ze=Ge.groups;for(let ot=0,Je=Ze.length;ot<Je;ot++){let je=Ze[ot],kt=qe[je.materialIndex];kt&&kt.visible&&x.push(A,Ge,kt,re,$.z,je)}}else qe.visible&&x.push(A,Ge,qe,re,$.z,null)}}let Ue=A.children;for(let Ge=0,qe=Ue.length;Ge<qe;Ge++)ni(Ue[Ge],j,re,ae)}function Ll(A,j,re,ae){let ee=A.opaque,Ue=A.transmissive,Ge=A.transparent;p.setupLightsView(re),V===!0&&ve.setGlobalState(y.clippingPlanes,re),Ue.length>0&&ef(ee,Ue,j,re),ae&&J.viewport(v.copy(ae)),ee.length>0&&Qr(ee,j,re),Ue.length>0&&Qr(Ue,j,re),Ge.length>0&&Qr(Ge,j,re),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function ef(A,j,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;let Ue=B.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?wr:Ii,minFilter:Qi,samples:Ue?4:0})),y.getDrawingBufferSize(O),Ue?Me.setSize(O.x,O.y):Me.setSize(mc(O.x),mc(O.y));let Ge=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(K),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let qe=y.toneMapping;y.toneMapping=Pi,Qr(A,re,ae),Pe.updateMultisampleRenderTarget(Me),Pe.updateRenderTargetMipmap(Me);let Ze=!1;for(let ot=0,Je=j.length;ot<Je;ot++){let je=j[ot],kt=je.object,Sn=je.geometry,Yt=je.material,ci=je.group;if(Yt.side===$t&&kt.layers.test(ae.layers)){let Nt=Yt.side;Yt.side=cn,Yt.needsUpdate=!0,Nl(kt,re,ae,Sn,Yt,ci),Yt.side=Nt,Yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Pe.updateMultisampleRenderTarget(Me),Pe.updateRenderTargetMipmap(Me)),y.setRenderTarget(Ge),y.setClearColor(K,N),y.toneMapping=qe}function Qr(A,j,re){let ae=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Ue=A.length;ee<Ue;ee++){let Ge=A[ee],qe=Ge.object,Ze=Ge.geometry,ot=ae===null?Ge.material:ae,Je=Ge.group;qe.layers.test(re.layers)&&Nl(qe,j,re,Ze,ot,Je)}}function Nl(A,j,re,ae,ee,Ue){A.onBeforeRender(y,j,re,ae,ee,Ue),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(y,j,re,ae,A,Ue),ee.transparent===!0&&ee.side===$t&&ee.forceSinglePass===!1?(ee.side=cn,ee.needsUpdate=!0,y.renderBufferDirect(re,j,ae,ee,A,Ue),ee.side=Li,ee.needsUpdate=!0,y.renderBufferDirect(re,j,ae,ee,A,Ue),ee.side=$t):y.renderBufferDirect(re,j,ae,ee,A,Ue),A.onAfterRender(y,j,re,ae,ee,Ue)}function eo(A,j,re){j.isScene!==!0&&(j=me);let ae=_e.get(A),ee=p.state.lights,Ue=p.state.shadowsArray,Ge=ee.state.version,qe=ue.getParameters(A,ee.state,Ue,j,re),Ze=ue.getProgramCacheKey(qe),ot=ae.programs;ae.environment=A.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(A.isMeshStandardMaterial?P:Xe).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",ie),ot=new Map,ae.programs=ot);let Je=ot.get(Ze);if(Je!==void 0){if(ae.currentProgram===Je&&ae.lightsStateVersion===Ge)return Ul(A,qe),Je}else qe.uniforms=ue.getUniforms(A),A.onBuild(re,qe,y),A.onBeforeCompile(qe,y),Je=ue.acquireProgram(qe,Ze),ot.set(Ze,Je),ae.uniforms=qe.uniforms;let je=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ve.uniform),Ul(A,qe),ae.needsLights=sf(A),ae.lightsStateVersion=Ge,ae.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.directionalShadowMap.value=ee.state.directionalShadowMap,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotShadowMap.value=ee.state.spotShadowMap,je.spotLightMatrix.value=ee.state.spotLightMatrix,je.spotLightMap.value=ee.state.spotLightMap,je.pointShadowMap.value=ee.state.pointShadowMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=Je,ae.uniformsList=null,Je}function Dl(A){if(A.uniformsList===null){let j=A.currentProgram.getUniforms();A.uniformsList=Bs.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ul(A,j){let re=_e.get(A);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function tf(A,j,re,ae,ee){j.isScene!==!0&&(j=me),Pe.resetTextureUnits();let Ue=j.fog,Ge=ae.isMeshStandardMaterial?j.environment:null,qe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fi,Ze=(ae.isMeshStandardMaterial?P:Xe).get(ae.envMap||Ge),ot=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!re.morphAttributes.position,kt=!!re.morphAttributes.normal,Sn=!!re.morphAttributes.color,Yt=Pi;ae.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=y.toneMapping);let ci=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Nt=ci!==void 0?ci.length:0,et=_e.get(ae),_a=p.state.lights;if(V===!0&&(de===!0||A!==T)){let Nn=A===T&&ae.id===k;ve.setState(ae,A,Nn)}let Rt=!1;ae.version===et.__version?(et.needsLights&&et.lightsStateVersion!==_a.state.version||et.outputColorSpace!==qe||ee.isBatchedMesh&&et.batching===!1||!ee.isBatchedMesh&&et.batching===!0||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&et.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&et.instancingMorph===!1&&ee.morphTexture!==null||et.envMap!==Ze||ae.fog===!0&&et.fog!==Ue||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ve.numPlanes||et.numIntersection!==ve.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==Je||et.morphTargets!==je||et.morphNormals!==kt||et.morphColors!==Sn||et.toneMapping!==Yt||B.isWebGL2===!0&&et.morphTargetsCount!==Nt)&&(Rt=!0):(Rt=!0,et.__version=ae.version);let Gi=et.currentProgram;Rt===!0&&(Gi=eo(ae,j,ee));let kl=!1,hr=!1,va=!1,sn=Gi.getUniforms(),Vi=et.uniforms;if(J.useProgram(Gi.program)&&(kl=!0,hr=!0,va=!0),ae.id!==k&&(k=ae.id,hr=!0),kl||T!==A){sn.setValue(w,"projectionMatrix",A.projectionMatrix),sn.setValue(w,"viewMatrix",A.matrixWorldInverse);let Nn=sn.map.cameraPosition;Nn!==void 0&&Nn.setValue(w,$.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&sn.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&sn.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,hr=!0,va=!0)}if(ee.isSkinnedMesh){sn.setOptional(w,ee,"bindMatrix"),sn.setOptional(w,ee,"bindMatrixInverse");let Nn=ee.skeleton;Nn&&(B.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),sn.setValue(w,"boneTexture",Nn.boneTexture,Pe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(sn.setOptional(w,ee,"batchingTexture"),sn.setValue(w,"batchingTexture",ee._matricesTexture,Pe));let Ma=re.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&B.isWebGL2===!0)&&Ee.update(ee,re,Gi),(hr||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,sn.setValue(w,"receiveShadow",ee.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Vi.envMap.value=Ze,Vi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),hr&&(sn.setValue(w,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&nf(Vi,va),Ue&&ae.fog===!0&&pe.refreshFogUniforms(Vi,Ue),pe.refreshMaterialUniforms(Vi,ae,q,G,Me),Bs.upload(w,Dl(et),Vi,Pe)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bs.upload(w,Dl(et),Vi,Pe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&sn.setValue(w,"center",ee.center),sn.setValue(w,"modelViewMatrix",ee.modelViewMatrix),sn.setValue(w,"normalMatrix",ee.normalMatrix),sn.setValue(w,"modelMatrix",ee.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let Nn=ae.uniformsGroups;for(let Ea=0,rf=Nn.length;Ea<rf;Ea++)if(B.isWebGL2){let zl=Nn[Ea];Be.update(zl,Gi),Be.bind(zl,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function nf(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function sf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,j,re){_e.get(A.texture).__webglTexture=j,_e.get(A.depthTexture).__webglTexture=re;let ae=_e.get(A);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=re===void 0,ae.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){let re=_e.get(A);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,re=0){I=A,R=j,C=re;let ae=!0,ee=null,Ue=!1,Ge=!1;if(A){let Ze=_e.get(A);Ze.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(w.FRAMEBUFFER,null),ae=!1):Ze.__webglFramebuffer===void 0?Pe.setupRenderTarget(A):Ze.__hasExternalTextures&&Pe.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);let ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ge=!0);let Je=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?ee=Je[j][re]:ee=Je[j],Ue=!0):B.isWebGL2&&A.samples>0&&Pe.useMultisampledRTT(A)===!1?ee=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?ee=Je[re]:ee=Je,v.copy(A.viewport),S.copy(A.scissor),le=A.scissorTest}else v.copy(H).multiplyScalar(q).floor(),S.copy(X).multiplyScalar(q).floor(),le=oe;if(J.bindFramebuffer(w.FRAMEBUFFER,ee)&&B.drawBuffers&&ae&&J.drawBuffers(A,ee),J.viewport(v),J.scissor(S),J.setScissorTest(le),Ue){let Ze=_e.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ze.__webglTexture,re)}else if(Ge){let Ze=_e.get(A.texture),ot=j||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ze.__webglTexture,re||0,ot)}k=-1},this.readRenderTargetPixels=function(A,j,re,ae,ee,Ue,Ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){J.bindFramebuffer(w.FRAMEBUFFER,qe);try{let Ze=A.texture,ot=Ze.format,Je=Ze.type;if(ot!==Zn&&Ve.convert(ot)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let je=Je===wr&&(Q.has("EXT_color_buffer_half_float")||B.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Je!==Ii&&Ve.convert(Je)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===si&&(B.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&re>=0&&re<=A.height-ee&&w.readPixels(j,re,ae,ee,Ve.convert(ot),Ve.convert(Je),Ue)}finally{let Ze=I!==null?_e.get(I).__webglFramebuffer:null;J.bindFramebuffer(w.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(A,j,re=0){let ae=Math.pow(2,-re),ee=Math.floor(j.image.width*ae),Ue=Math.floor(j.image.height*ae);Pe.setTexture2D(j,0),w.copyTexSubImage2D(w.TEXTURE_2D,re,0,0,A.x,A.y,ee,Ue),J.unbindTexture()},this.copyTextureToTexture=function(A,j,re,ae=0){let ee=j.image.width,Ue=j.image.height,Ge=Ve.convert(re.format),qe=Ve.convert(re.type);Pe.setTexture2D(re,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,re.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ae,A.x,A.y,ee,Ue,Ge,qe,j.image.data):j.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ae,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,Ge,j.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,ae,A.x,A.y,Ge,qe,j.image),ae===0&&re.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(A,j,re,ae,ee=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ue=Math.round(A.max.x-A.min.x),Ge=Math.round(A.max.y-A.min.y),qe=A.max.z-A.min.z+1,Ze=Ve.convert(ae.format),ot=Ve.convert(ae.type),Je;if(ae.isData3DTexture)Pe.setTexture3D(ae,0),Je=w.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)Pe.setTexture2DArray(ae,0),Je=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ae.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ae.unpackAlignment);let je=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Sn=w.getParameter(w.UNPACK_SKIP_PIXELS),Yt=w.getParameter(w.UNPACK_SKIP_ROWS),ci=w.getParameter(w.UNPACK_SKIP_IMAGES),Nt=re.isCompressedTexture?re.mipmaps[ee]:re.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,A.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,A.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,A.min.z),re.isDataTexture||re.isData3DTexture?w.texSubImage3D(Je,ee,j.x,j.y,j.z,Ue,Ge,qe,Ze,ot,Nt.data):ae.isCompressedArrayTexture?w.compressedTexSubImage3D(Je,ee,j.x,j.y,j.z,Ue,Ge,qe,Ze,Nt.data):w.texSubImage3D(Je,ee,j.x,j.y,j.z,Ue,Ge,qe,Ze,ot,Nt),w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Sn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Yt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ci),ee===0&&ae.generateMipmaps&&w.generateMipmap(Je),J.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Pe.setTextureCube(A,0):A.isData3DTexture?Pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pe.setTexture2DArray(A,0):Pe.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){R=0,C=0,I=null,J.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===nl?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===sa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Pc=class extends Ar{};Pc.prototype.isWebGL1Renderer=!0;var Ui=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ic=class extends Mn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new ht,ad=new ht,bo=[],cd=new Jn,ex=new ht,xr=new be,yr=new is,Zs=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),cd.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(cd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),yr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),ad.multiplyMatrices(n,Ds),xr.matrixWorld=ad,xr.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){let c=bo[o];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(s*this.count),s,this.count,wd,si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends Mn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new ht;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends Cr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wo=new L,nc=new sl,ic=new sl,sc=new sl,$s=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),l=wo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),nc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,x,p),ic.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,x,p),sc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ic.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),sc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ld(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function tx(i,e){let t=1-i;return t*t*e}function nx(i,e){return 2*(1-i)*i*e}function ix(i,e){return i*i*e}function Mr(i,e,t,n){return tx(i,e)+nx(i,t)+ix(i,n)}function sx(i,e){let t=1-i;return t*t*t*e}function rx(i,e){let t=1-i;return 3*t*t*i*e}function ox(i,e){return 3*(1-i)*i*i*e}function ax(i,e){return i*i*i*e}function Er(i,e,t,n,s){return sx(i,e)+rx(i,t)+ox(i,n)+ax(i,s)}var qo=class extends zn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends zn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zo=class extends zn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends zn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends zn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends zn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y),Mr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ld(a,c.x,l.x,h.x,d.x),ld(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:$s,CubicBezierCurve:qo,CubicBezierCurve3:Nc,EllipseCurve:Cr,LineCurve:Zo,LineCurve3:Dc,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Jo,SplineCurve:Ko}),Uc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jo[s.type]().fromJSON(s))}return this}},Js=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zo(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $o(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new qo(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Cr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class i extends It{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Zt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new L,u=new ye,f=new L,m=new L,x=new L,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let _=0;_<=t;_++){let y=n+_*h*s,M=Math.sin(y),R=Math.cos(y);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*M,d.y=e[C].y,d.z=e[C].x*R,o.push(d.x,d.y,d.z),u.x=_/t,u.y=C/(e.length-1),a.push(u.x,u.y);let I=c[3*C+0]*M,k=c[3*C+1],T=c[3*C+0]*R;l.push(I,k,T)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let M=y+_*e.length,R=M,C=M+e.length,I=M+e.length+1,k=M+1;r.push(R,C,k),r.push(I,k,C)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ki=class i extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],p=n/2,g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function _(){let M=new L,R=new L,C=0,I=(t-e)/n;for(let k=0;k<=r;k++){let T=[],v=k/r,S=v*(t-e)+e;for(let le=0;le<=s;le++){let K=le/s,N=K*c+a,F=Math.sin(N),G=Math.cos(N);R.x=S*F,R.y=-v*n+p,R.z=S*G,d.push(R.x,R.y,R.z),M.set(F,I,G).normalize(),u.push(M.x,M.y,M.z),f.push(K,1-v),T.push(m++)}x.push(T)}for(let k=0;k<s;k++)for(let T=0;T<r;T++){let v=x[T][k],S=x[T+1][k],le=x[T+1][k+1],K=x[T][k+1];h.push(v,S,K),h.push(S,le,K),C+=6}l.addGroup(g,C,0),g+=C}function y(M){let R=m,C=new ye,I=new L,k=0,T=M===!0?e:t,v=M===!0?1:-1;for(let le=1;le<=s;le++)d.push(0,p*v,0),u.push(0,v,0),f.push(.5,.5),m++;let S=m;for(let le=0;le<=s;le++){let N=le/s*c+a,F=Math.cos(N),G=Math.sin(N);I.x=T*G,I.y=p*v,I.z=T*F,d.push(I.x,I.y,I.z),u.push(0,v,0),C.x=F*.5+.5,C.y=G*.5*v+.5,f.push(C.x,C.y),m++}for(let le=0;le<s;le++){let K=R+le,N=S+le;M===!0?h.push(N,N+1,K):h.push(N+1,N,K),k+=3}l.addGroup(g,k,M===!0?1:2),g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qo=class i extends Lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kc=class i extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,M=new L,R=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],M),f(t[C+2],R),c(y,M,R,_)}function c(_,y,M,R){let C=R+1,I=[];for(let k=0;k<=C;k++){I[k]=[];let T=_.clone().lerp(M,k/C),v=y.clone().lerp(M,k/C),S=C-k;for(let le=0;le<=S;le++)le===0&&k===C?I[k][le]=T:I[k][le]=T.clone().lerp(v,le/S)}for(let k=0;k<C;k++)for(let T=0;T<2*(C-k)-1;T++){let v=Math.floor(T/2);T%2===0?(u(I[k][v+1]),u(I[k+1][v]),u(I[k][v])):(u(I[k][v+1]),u(I[k+1][v+1]),u(I[k+1][v]))}}function l(_){let y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=p(_)/2/Math.PI+.5,R=g(_)/Math.PI+.5;o.push(M,1-R)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],R=o[_+4],C=Math.max(y,M,R),I=Math.min(y,M,R);C>.9&&I<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let _=new L,y=new L,M=new L,R=new L,C=new ye,I=new ye,k=new ye;for(let T=0,v=0;T<r.length;T+=9,v+=6){_.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),C.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),k.set(o[v+4],o[v+5]),R.copy(_).add(y).add(M).divideScalar(3);let S=p(R);x(C,v+0,_,S),x(I,v+2,y,S),x(k,v+4,M,S)}}function x(_,y,M,R){R<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var en=class extends Js{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}},cx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=fx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)d=i[m],u=i[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Pr(r,o,t,a,c,f,0),o}};function Bd(i,e,t,n,s){let r,o;if(s===wx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hd(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Lr(o),o=o.next),o}function as(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&yx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?hx(i,n,s,r):lx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Lr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dx(as(i),e,t),Pr(i,e,t,n,s,r,2)):o===2&&ux(i,e,t,n,s,r):Pr(as(i),e,t,n,s,r,1);break}}}function lx(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Fs(s,a,r,c,o,l,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,g=zc(f,m,e,t,n),_=zc(x,p,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,d,l,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Fs(a,h,c,d,l,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,d,l,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Fs(a,h,c,d,l,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function dx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!oa(s,r)&&Gd(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return as(n)}function ux(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mx(o,a)){let c=Vd(o,a);o=as(o,o.next),c=as(c,c.next),Pr(o,e,t,n,s,r,0),Pr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fx(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Bd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vx(l));for(s.sort(px),r=0;r<s.length;r++)t=mx(s[r],t);return t}function px(i,e){return i.x-e.x}function mx(i,e){let t=gx(i,e);if(!t)return e;let n=Vd(t,i);return as(n,n.next),as(t,t.next)}function gx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Fs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Ir(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&xx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function xx(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function yx(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ex(i,e)&&(Ir(i,e)&&Ir(e,i)&&bx(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||oa(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oa(i,e){return i.x===e.x&&i.y===e.y}function Gd(i,e,t,n){let s=To(Dt(i,e,t)),r=To(Dt(i,e,n)),o=To(Dt(t,n,i)),a=To(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&So(i,t,e)||r===0&&So(i,n,e)||o===0&&So(t,i,n)||a===0&&So(t,e,n))}function So(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function To(i){return i>0?1:i<0?-1:0}function Ex(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function bx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vd(i,e){let t=new Fc(i.i,i.x,i.y),n=new Fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(i,e,t,n){let s=new Fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var br=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dd(e),ud(n,e);let o=e.length;t.forEach(dd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ud(n,t[c]);let a=cx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ud(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mn=class i extends It{constructor(e=new en([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Sx,y,M=!1,R,C,I,k;g&&(y=g.getSpacedPoints(h),M=!0,u=!1,R=g.computeFrenetFrames(h,!1),C=new L,I=new L,k=new L),u||(p=0,f=0,m=0,x=0);let T=a.extractPoints(l),v=T.shape,S=T.holes;if(!br.isClockWise(v)){v=v.reverse();for(let w=0,ne=S.length;w<ne;w++){let Q=S[w];br.isClockWise(Q)&&(S[w]=Q.reverse())}}let K=br.triangulateShape(v,S),N=v;for(let w=0,ne=S.length;w<ne;w++){let Q=S[w];v=v.concat(Q)}function F(w,ne,Q){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(ne,Q)}let G=v.length,q=K.length;function D(w,ne,Q){let B,J,se,_e=w.x-ne.x,Pe=w.y-ne.y,Xe=Q.x-w.x,P=Q.y-w.y,b=_e*_e+Pe*Pe,z=_e*P-Pe*Xe;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(b),ue=Math.sqrt(Xe*Xe+P*P),pe=ne.x-Pe/Z,ke=ne.y+_e/Z,ze=Q.x-P/ue,ve=Q.y+Xe/ue,Te=((ze-pe)*P-(ve-ke)*Xe)/(_e*P-Pe*Xe);B=pe+_e*Te-w.x,J=ke+Pe*Te-w.y;let We=B*B+J*J;if(We<=2)return new ye(B,J);se=Math.sqrt(We/2)}else{let Z=!1;_e>Number.EPSILON?Xe>Number.EPSILON&&(Z=!0):_e<-Number.EPSILON?Xe<-Number.EPSILON&&(Z=!0):Math.sign(Pe)===Math.sign(P)&&(Z=!0),Z?(B=-Pe,J=_e,se=Math.sqrt(b)):(B=_e,J=Pe,se=Math.sqrt(b/2))}return new ye(B/se,J/se)}let E=[];for(let w=0,ne=N.length,Q=ne-1,B=w+1;w<ne;w++,Q++,B++)Q===ne&&(Q=0),B===ne&&(B=0),E[w]=D(N[w],N[Q],N[B]);let H=[],X,oe=E.concat();for(let w=0,ne=S.length;w<ne;w++){let Q=S[w];X=[];for(let B=0,J=Q.length,se=J-1,_e=B+1;B<J;B++,se++,_e++)se===J&&(se=0),_e===J&&(_e=0),X[B]=D(Q[B],Q[se],Q[_e]);H.push(X),oe=oe.concat(X)}for(let w=0;w<p;w++){let ne=w/p,Q=f*Math.cos(ne*Math.PI/2),B=m*Math.sin(ne*Math.PI/2)+x;for(let J=0,se=N.length;J<se;J++){let _e=F(N[J],E[J],B);Se(_e.x,_e.y,-Q)}for(let J=0,se=S.length;J<se;J++){let _e=S[J];X=H[J];for(let Pe=0,Xe=_e.length;Pe<Xe;Pe++){let P=F(_e[Pe],X[Pe],B);Se(P.x,P.y,-Q)}}}let ge=m+x;for(let w=0;w<G;w++){let ne=u?F(v[w],oe[w],ge):v[w];M?(I.copy(R.normals[0]).multiplyScalar(ne.x),C.copy(R.binormals[0]).multiplyScalar(ne.y),k.copy(y[0]).add(I).add(C),Se(k.x,k.y,k.z)):Se(ne.x,ne.y,0)}for(let w=1;w<=h;w++)for(let ne=0;ne<G;ne++){let Q=u?F(v[ne],oe[ne],ge):v[ne];M?(I.copy(R.normals[w]).multiplyScalar(Q.x),C.copy(R.binormals[w]).multiplyScalar(Q.y),k.copy(y[w]).add(I).add(C),Se(k.x,k.y,k.z)):Se(Q.x,Q.y,d/h*w)}for(let w=p-1;w>=0;w--){let ne=w/p,Q=f*Math.cos(ne*Math.PI/2),B=m*Math.sin(ne*Math.PI/2)+x;for(let J=0,se=N.length;J<se;J++){let _e=F(N[J],E[J],B);Se(_e.x,_e.y,d+Q)}for(let J=0,se=S.length;J<se;J++){let _e=S[J];X=H[J];for(let Pe=0,Xe=_e.length;Pe<Xe;Pe++){let P=F(_e[Pe],X[Pe],B);M?Se(P.x,P.y+y[h-1].y,y[h-1].x+Q):Se(P.x,P.y,d+Q)}}}V(),de();function V(){let w=s.length/3;if(u){let ne=0,Q=G*ne;for(let B=0;B<q;B++){let J=K[B];O(J[2]+Q,J[1]+Q,J[0]+Q)}ne=h+p*2,Q=G*ne;for(let B=0;B<q;B++){let J=K[B];O(J[0]+Q,J[1]+Q,J[2]+Q)}}else{for(let ne=0;ne<q;ne++){let Q=K[ne];O(Q[2],Q[1],Q[0])}for(let ne=0;ne<q;ne++){let Q=K[ne];O(Q[0]+G*h,Q[1]+G*h,Q[2]+G*h)}}n.addGroup(w,s.length/3-w,0)}function de(){let w=s.length/3,ne=0;Me(N,ne),ne+=N.length;for(let Q=0,B=S.length;Q<B;Q++){let J=S[Q];Me(J,ne),ne+=J.length}n.addGroup(w,s.length/3-w,1)}function Me(w,ne){let Q=w.length;for(;--Q>=0;){let B=Q,J=Q-1;J<0&&(J=w.length-1);for(let se=0,_e=h+p*2;se<_e;se++){let Pe=G*se,Xe=G*(se+1),P=ne+B+Pe,b=ne+J+Pe,z=ne+J+Xe,Z=ne+B+Xe;$(P,b,z,Z)}}}function Se(w,ne,Q){c.push(w),c.push(ne),c.push(Q)}function O(w,ne,Q){me(w),me(ne),me(Q);let B=s.length/3,J=_.generateTopUV(n,s,B-3,B-2,B-1);fe(J[0]),fe(J[1]),fe(J[2])}function $(w,ne,Q,B){me(w),me(ne),me(B),me(ne),me(Q),me(B);let J=s.length/3,se=_.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);fe(se[0]),fe(se[1]),fe(se[3]),fe(se[1]),fe(se[2]),fe(se[3])}function me(w){s.push(c[w*3+0]),s.push(c[w*3+1]),s.push(c[w*3+2])}function fe(w){r.push(w.x),r.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jo[s.type]().fromJSON(s)),new i(n,e.options)}},Sx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-d),new ye(u,1-m),new ye(x,1-g)]:[new ye(a,1-c),new ye(h,1-d),new ye(f,1-m),new ye(p,1-g)]}};function Tx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends kc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Rn=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let _=[],y=g/n,M=0;g===0&&o===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let C=R/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(C+M,1-y),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let y=h[g][_+1],M=h[g][_],R=h[g+1][_],C=h[g+1][_+1];(g!==0||o>0)&&f.push(y,M,C),(g!==n-1||c<Math.PI)&&f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zi=class i extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,_=(s+1)*f+m;o.push(x,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class i extends It{constructor(e=new Jo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ye,h=new L,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function x(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),_(),g()}function p(y){h=e.getPointAt(y/t,h);let M=o.normals[y],R=o.binormals[y];for(let C=0;C<=s;C++){let I=C/s*Math.PI*2,k=Math.sin(I),T=-Math.cos(I);c.x=T*M.x+k*R.x,c.y=T*M.y+k*R.y,c.z=T*M.z+k*R.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let R=(s+1)*(y-1)+(M-1),C=(s+1)*y+(M-1),I=(s+1)*y+M,k=(s+1)*(y-1)+M;m.push(R,C,k),m.push(C,I,k)}}function _(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)l.x=y/t,l.y=M/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var He=class extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends He{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ao(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=e,a=2*t-n;break;case xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:o=e,c=2*n-t;break;case xh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,M=f*p-f*x;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+_*o[l+R]+y*o[c+R]+M*o[d+R];return r}},Hc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Bc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ao(t,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ao(e.times,Array),values:Ao(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Co:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ax(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[u+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Po;var ls=class extends Kn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Co;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Kn{};Gc.prototype.ValueTypeName="color";var Vc=class extends Kn{};Vc.prototype.ValueTypeName="number";var Wc=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)ri.slerpFlat(r,0,o,l-a,o,l,c);return r}},Dr=class extends Kn{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Po;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Kn{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Co;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Kn{};Xc.prototype.ValueTypeName="vector";var Yc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Rx=new Yc,qc=class{constructor(e){this.manager=e!==void 0?e:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},kr=class extends Ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rc=new ht,fd=new L,pd=new L,ea=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var md=new ht,_r=new L,oc=new L,Zc=class extends ea{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md)}},zr=class extends Ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends ea{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rl="\\[\\]\\.:\\/",Cx=new RegExp("["+rl+"]","g"),ol="[^"+rl+"]",Px="[^"+rl.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",ol),Lx=/(WCOD+)?/.source.replace("WCOD",Px),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),Ux=new RegExp("^"+Ix+Lx+Nx+Dx+"$"),kx=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){let t=Ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Jc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F2=new Float32Array(1);var gd=new ht,na=class{constructor(e,t,n=0,s=1/0){this.ray=new Oo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(e,t=!0,n=[]){return Kc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kc(e[s],this,n,t);return n.sort(xd),n}};function xd(i,e){return i.distance-e.distance}function Kc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Kc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);var Wd={cellMeters:1.25,levelMeters:2.5,grid:[66,56],modules:{0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B",1:"\u0410\u043D\u0433\u0430\u0440",2:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",3:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",4:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",6:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",7:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",8:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",9:"\u0416\u0438\u043B\u0430\u044F",10:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"},zones:[{key:"hangar",module:1,name:"\u0410\u043D\u0433\u0430\u0440",x:0,y:0,width:27,height:20},{key:"industry",module:2,name:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",x:27,y:0,width:16,height:20},{key:"support",module:3,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:46,y:0,width:10,height:20},{key:"military",module:4,name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",x:0,y:23,width:24,height:14},{key:"labs",module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",x:27,y:23,width:16,height:14},{key:"isolator",module:6,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:46,y:23,width:10,height:14},{key:"medical",module:7,name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",x:0,y:40,width:13,height:16},{key:"domestic",module:8,name:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",x:16,y:40,width:12,height:16},{key:"living",module:9,name:"\u0416\u0438\u043B\u0430\u044F",x:31,y:40,width:25,height:16},{key:"sport",module:10,name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F",x:59,y:40,width:7,height:16}],rooms:[{module:1,zone:"hangar",name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:0,width:20,height:20,levels:4,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,zone:"hangar",name:"\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:0,width:4,height:17,levels:4,kind:"room",note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:1,zone:"hangar",name:"\u041A\u041F\u041F",x:20,y:17,width:4,height:3,levels:1,kind:"room",note:"\u043F\u043E\u0441\u0442 \u0443 \u0448\u043B\u044E\u0437\u0430 \u0430\u043D\u0433\u0430\u0440\u0430"},{module:1,zone:"hangar",name:"\u041F\u0440\u043E\u0435\u0437\u0434 \u043A \u0446\u0435\u0445\u0443",x:24,y:0,width:3,height:17,levels:2,kind:"corridor",note:"K7 \u0438\u0437 \u0430\u043D\u0433\u0430\u0440\u0430 \u0432 \u0446\u0435\u0445, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u043A \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0430\u0437\u0435"},{module:1,zone:"hangar",name:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0433\u0430\u0440\u0430",x:24,y:17,width:3,height:3,levels:2,kind:"airlock",note:"\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u0437\u0434 \u0438 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440 H1, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438"},{module:2,zone:"industry",name:"\u0426\u0435\u0445 (\u0441\u0442\u0435\u043D\u0434 K7)",x:27,y:5,width:11,height:10,levels:2,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u043A\u0440\u0430\u043D-\u0431\u0430\u043B\u043A\u0430, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u044B\u0441\u043E\u0442\u0430 2 \u0443\u0440\u043E\u0432\u043D\u044F"},{module:2,zone:"industry",name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:27,y:0,width:6,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",x:33,y:0,width:5,height:5,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:38,y:0,width:5,height:5,levels:2,kind:"room",note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,zone:"industry",name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:38,y:5,width:5,height:5,levels:2,kind:"room",note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u0438\u0444\u0442\u0430"},{module:2,zone:"industry",name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:38,y:10,width:5,height:5,levels:2,kind:"room",note:"\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B"},{module:2,zone:"industry",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:15,width:16,height:2,levels:2,kind:"corridor",note:""},{module:2,zone:"industry",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",x:27,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:2,zone:"industry",name:"\u0428\u043B\u044E\u0437",x:33,y:17,width:4,height:3,levels:2,kind:"airlock",note:""},{module:2,zone:"industry",name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 K7",x:37,y:17,width:6,height:3,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:0,width:2,height:20,levels:1,kind:"corridor",note:""},{module:3,zone:"support",name:"\u041F\u043E\u0441\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0430",x:48,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0431\u043B\u043E\u043A\u0430, \u0441\u0432\u044F\u0437\u044C \u0441 \u044F\u0440\u0443\u0441\u043E\u043C \u22125"},{module:3,zone:"support",name:"\u041B\u0438\u0444\u0442 \u043A \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0443",x:52,y:0,width:4,height:4,levels:1,kind:"room",note:"\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0444\u0442 \u043D\u0430 \u044F\u0440\u0443\u0441 \u22125"},{module:3,zone:"support",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440",x:48,y:4,width:8,height:5,levels:1,kind:"room",note:"\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0449\u0438\u0442\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"},{module:3,zone:"support",name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B",x:48,y:9,width:8,height:5,levels:1,kind:"room",note:""},{module:3,zone:"support",name:"\u0412\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435",x:48,y:14,width:8,height:6,levels:1,kind:"room",note:""},{module:4,zone:"military",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",x:0,y:23,width:9,height:6,levels:1,kind:"room",note:"\u043F\u0443\u043B\u044C\u0442\u044B, \u043A\u0430\u0440\u0442\u0430-\u0433\u043B\u043E\u0431\u0443\u0441, \u0441\u0432\u044F\u0437\u044C"},{module:4,zone:"military",name:"\u0411\u0440\u0438\u0444\u0438\u043D\u0433",x:9,y:23,width:5,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B, \u044D\u043A\u0440\u0430\u043D"},{module:4,zone:"military",name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:14,y:23,width:6,height:6,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0431\u043E\u0439\u0446\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,zone:"military",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:29,width:20,height:2,levels:2,kind:"corridor",note:""},{module:4,zone:"military",name:"\u0423\u0437\u0435\u043B \u0441\u0432\u044F\u0437\u0438",x:20,y:23,width:4,height:5,levels:1,kind:"room",note:"\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u044F\u0437\u0438, \u0440\u0430\u0434\u0430\u0440\u044B"},{module:4,zone:"military",name:"\u0428\u043B\u044E\u0437",x:20,y:28,width:4,height:4,levels:2,kind:"airlock",note:""},{module:4,zone:"military",name:"\u0414\u0435\u0436\u0443\u0440\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C",x:20,y:32,width:4,height:5,levels:1,kind:"room",note:"\u0434\u0435\u0436\u0443\u0440\u043D\u044B\u0439 \u043E\u0444\u0438\u0446\u0435\u0440 \u043F\u043E \u0431\u0430\u0437\u0435 \u0438 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u043A\u0430\u043C\u0435\u0440"},{module:4,zone:"military",name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:0,y:31,width:7,height:6,levels:1,kind:"room",note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u0441 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,zone:"military",name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:8,y:31,width:5,height:5,levels:1,kind:"room",note:"\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C"},{module:4,zone:"military",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0438\u043A\u0430",x:14,y:31,width:6,height:6,levels:1,kind:"room",note:"\u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0440\u0443\u0436\u0438\u044F"},{module:5,zone:"labs",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0443\u0447\u0451\u043D\u044B\u0445",x:27,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B, \u0448\u043A\u0430\u0444\u044B"},{module:5,zone:"labs",name:"\u0428\u043B\u044E\u0437",x:33,y:23,width:4,height:3,levels:2,kind:"airlock",note:""},{module:5,zone:"labs",name:"\u041F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F",x:37,y:23,width:6,height:3,levels:1,kind:"room",note:"\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B"},{module:5,zone:"labs",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:26,width:16,height:2,levels:2,kind:"corridor",note:""},{module:5,zone:"labs",name:"\u0425\u0438\u043C\u0438\u043A\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:27,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u044B, \u0445\u0440\u043E\u043C\u0430\u0442\u043E\u0433\u0440\u0430\u0444, \u0441\u043F\u0435\u043A\u0442\u0440\u043E\u043C\u0435\u0442\u0440"},{module:5,zone:"labs",name:"\u041A\u0441\u0435\u043D\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:32,y:28,width:6,height:9,levels:1,kind:"room",note:"\u0431\u043E\u043A\u0441\u044B \u0431\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F\u044B, \u0441\u0442\u043E\u043B \u0434\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F"},{module:5,zone:"labs",name:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:38,y:28,width:5,height:9,levels:1,kind:"room",note:"\u0441\u0442\u0435\u043D\u0434\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439, \u043E\u0441\u0446\u0438\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},{module:6,zone:"isolator",name:"\u0428\u043B\u044E\u0437 \u0441\u0430\u043D\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438",x:46,y:23,width:4,height:4,levels:2,kind:"airlock",note:"\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0432\u0445\u043E\u0434\u043E\u043C \u043A \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C"},{module:6,zone:"isolator",name:"\u041F\u043E\u0441\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",x:50,y:23,width:6,height:4,levels:1,kind:"room",note:"\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u0431\u043E\u043A\u0441\u043E\u0432"},{module:6,zone:"isolator",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:27,width:2,height:10,levels:2,kind:"corridor",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 1",x:48,y:27,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 2",x:48,y:30,width:8,height:3,levels:1,kind:"room",note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 3",x:48,y:33,width:8,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u0438\u0451\u043C\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",x:0,y:40,width:5,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F, \u0430\u043F\u0442\u0435\u043A\u0430",x:5,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0432\u0440\u0430\u0447\u0430",x:9,y:40,width:4,height:4,levels:1,kind:"room",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:44,width:13,height:2,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:6,y:46,width:2,height:10,levels:1,kind:"corridor",note:""},{module:7,zone:"medical",name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F",x:0,y:46,width:6,height:5,levels:1,kind:"room",note:"\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B, \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A, \u043D\u0430\u0440\u043A\u043E\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-1",x:0,y:51,width:6,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:7,zone:"medical",name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",x:8,y:46,width:5,height:5,levels:1,kind:"room",note:"\u0440\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-2",x:8,y:51,width:5,height:5,levels:1,kind:"room",note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:8,zone:"domestic",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0438 \u043E\u0442\u0434\u044B\u0445",x:16,y:40,width:8,height:7,levels:1,kind:"room",note:"\u0441\u0442\u043E\u043B\u044B \u043D\u0430 16 \u043C\u0435\u0441\u0442, \u0434\u0438\u0432\u0430\u043D\u044B"},{module:8,zone:"domestic",name:"\u041A\u0430\u043C\u0431\u0443\u0437",x:24,y:40,width:4,height:5,levels:1,kind:"room",note:"\u043F\u043B\u0438\u0442\u0430, \u043C\u043E\u0439\u043A\u0430, \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u043E\u0441\u0442\u0440\u043E\u0432"},{module:8,zone:"domestic",name:"\u041F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434",x:24,y:45,width:4,height:2,levels:1,kind:"room",note:""},{module:8,zone:"domestic",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:16,y:47,width:12,height:2,levels:1,kind:"corridor",note:""},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 1 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:16,y:49,width:6,height:7,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 2 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:22,y:49,width:6,height:4,levels:1,kind:"room",note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F",x:22,y:53,width:6,height:3,levels:1,kind:"room",note:""},{module:10,zone:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",x:59,y:40,width:7,height:11,levels:1,kind:"room",note:"\u0434\u043E\u0440\u043E\u0436\u043A\u0438, \u0432\u0435\u043B\u043E\u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u044B, \u0441\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438, \u0448\u0442\u0430\u043D\u0433\u0438, \u043C\u0430\u0442\u044B"},{module:10,zone:"sport",name:"\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0434\u0443\u0448\u0435\u0432\u044B\u0435",x:59,y:51,width:7,height:5,levels:1,kind:"room",note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0441\u043A\u0430\u043C\u044C\u0438, \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:44,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 1",x:31,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 2",x:35,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 3",x:39,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 4",x:43,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 5",x:47,y:40,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 6",x:51,y:40,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 7",x:31,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 8",x:35,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 9",x:39,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 10",x:43,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 11",x:47,y:52,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 12",x:51,y:52,width:5,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B",x:31,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041D\u0430\u0447. \u0448\u0442\u0430\u0431\u0430",x:34,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u043E\u043C. \u043E\u0442\u0440\u044F\u0434\u0430",x:37,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0432\u0440\u0430\u0447",x:40,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0425\u0438\u0440\u0443\u0440\u0433",x:43,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0443\u0447\u0451\u043D\u044B\u0439",x:46,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0438\u043D\u0436\u0435\u043D\u0435\u0440",x:49,y:46,width:3,height:4,levels:1,kind:"single",note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 13",x:52,y:46,width:4,height:4,levels:1,kind:"room",note:"2 \u043C\u0435\u0441\u0442\u0430"}],corridors:[{name:"H1",x:0,y:20,width:56,height:3,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"H2",x:0,y:37,width:59,height:3,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V1",x:24,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:0,width:3,height:20,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V3",x:13,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V4",x:28,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V5",x:56,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"}],thickWalls:[{x:7,y:31,width:1,height:6},{x:13,y:31,width:1,height:6},{x:8,y:36,width:5,height:1}],doors:[{x:23,y:8,side:"E",size:3,kind:"gate",airlock:-1},{x:24,y:17,side:"N",size:3,kind:"gate",airlock:4},{x:24,y:19,side:"S",size:3,kind:"gate",airlock:4},{x:27,y:9,side:"W",size:3,kind:"gate",airlock:-1},{x:39,y:9,side:"S",size:3,kind:"gate",airlock:-1},{x:33,y:19,side:"S",size:3,kind:"gate",airlock:13},{x:33,y:17,side:"N",size:3,kind:"gate",airlock:13},{x:23,y:29,side:"E",size:3,kind:"gate",airlock:26},{x:20,y:29,side:"W",size:2,kind:"gate",airlock:26},{x:33,y:23,side:"N",size:3,kind:"gate",airlock:32},{x:33,y:25,side:"S",size:3,kind:"gate",airlock:32},{x:46,y:24,side:"W",size:3,kind:"gate",airlock:38},{x:46,y:26,side:"S",size:2,kind:"gate",airlock:38},{x:28,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:14,side:"S",size:3,kind:"gate",airlock:-1},{x:39,y:4,side:"S",size:3,kind:"gate",airlock:-1},{x:28,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:35,y:4,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:39,y:17,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:52,y:1,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:6,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:11,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:16,side:"W",size:1,kind:"door",airlock:-1},{x:46,y:19,side:"S",size:2,kind:"double",airlock:-1},{x:46,y:17,side:"W",size:1,kind:"door",airlock:-1},{x:23,y:18,side:"E",size:1,kind:"door",airlock:-1},{x:4,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:11,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:16,y:28,side:"S",size:1,kind:"door",airlock:-1},{x:20,y:25,side:"W",size:1,kind:"door",airlock:-1},{x:3,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:10,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:31,side:"N",size:1,kind:"door",airlock:-1},{x:21,y:32,side:"N",size:1,kind:"door",airlock:-1},{x:29,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:39,y:25,side:"S",size:1,kind:"door",airlock:-1},{x:29,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:34,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:28,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:24,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:28,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:31,side:"W",size:1,kind:"door",airlock:-1},{x:48,y:34,side:"W",size:1,kind:"door",airlock:-1},{x:2,y:40,side:"N",size:1,kind:"door",airlock:-1},{x:2,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:6,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:10,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:12,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:5,y:48,side:"E",size:1,kind:"door",airlock:-1},{x:5,y:53,side:"E",size:1,kind:"door",airlock:-1},{x:8,y:48,side:"W",size:1,kind:"door",airlock:-1},{x:8,y:53,side:"W",size:1,kind:"door",airlock:-1},{x:19,y:40,side:"N",size:2,kind:"double",airlock:-1},{x:19,y:46,side:"S",size:1,kind:"door",airlock:-1},{x:24,y:42,side:"W",size:1,kind:"door",airlock:-1},{x:25,y:45,side:"N",size:1,kind:"door",airlock:-1},{x:18,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:49,side:"N",size:1,kind:"door",airlock:-1},{x:24,y:53,side:"N",size:1,kind:"door",airlock:-1},{x:16,y:47,side:"W",size:2,kind:"double",airlock:-1},{x:27,y:47,side:"E",size:2,kind:"double",airlock:-1},{x:31,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:31,y:50,side:"W",size:2,kind:"double",airlock:-1},{x:55,y:44,side:"E",size:2,kind:"double",airlock:-1},{x:55,y:50,side:"E",size:2,kind:"double",airlock:-1},{x:59,y:44,side:"W",size:2,kind:"double",airlock:-1},{x:59,y:52,side:"W",size:1,kind:"door",airlock:-1},{x:61,y:51,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:36,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:40,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:48,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:52,y:43,side:"S",size:1,kind:"door",airlock:-1},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1},{x:32,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:35,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:38,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:41,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:44,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:47,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:50,y:46,side:"N",size:1,kind:"door",airlock:-1},{x:53,y:46,side:"N",size:1,kind:"door",airlock:-1}],cells:{1:540,2:320,3:200,4:319,5:224,6:140,7:208,8:192,10:112,9:400,0:633},total:3288};function zx(i,e){let t=e==="N"||e==="S"?i.width:i.height,n=e==="N"||e==="S"?i.height:i.width,a={back:{N:"S",S:"N",W:"E",E:"W"}[e],front:e,left:e==="N"||e==="S"?"W":"N",right:e==="N"||e==="S"?"E":"S"};return{across:t,depth:n,faces:a,cell:(l,h,d=1,u=1)=>e==="S"?[i.x+l,i.y+h,d,u]:e==="N"?[i.x+l,i.y+i.height-h-u,d,u]:e==="E"?[i.x+h,i.y+l,u,d]:[i.x+i.width-h-u,i.y+l,u,d]}}function Xd(i,e){let t=r=>i.doors.find(o=>o.size===1&&o.x>=r.x&&o.x<r.x+r.width&&o.y>=r.y&&o.y<r.y+r.height),n=(r,o,a,c,l,h,d,u={})=>{let[f,m,x,p]=r.cell(a,c,l,h);e(o,f,m,x,p,{face:r.faces[d]||d,...u})},s=["64,82,110","110,64,58","70,96,70","120,100,60","80,70,110"];i.rooms.filter(r=>r.zone==="living"&&r.kind!=="corridor").forEach((r,o)=>{let a=t(r),c=zx(r,a.side),l=s[o%s.length];if(r.kind==="single"){n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"nightstand",0,2,1,1,"left"),n(c,"deskChair",2,0,1,1,"right",{seed:o}),n(c,"wardrobe",2,3,1,1,"right"),r.name==="\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B"?n(c,"safe",2,1,1,1,"right"):n(c,"shelf",2,1,1,1,"right");return}let h=c.across-1;n(c,"bed",0,0,1,2,"back",{color:l}),n(c,"bed",h,0,1,2,"back",{color:s[(o+2)%s.length]}),n(c,"nightstand",0,2,1,1,"left"),n(c,"nightstand",h,2,1,1,"right"),n(c,"cabinTable",1,0,2,1,"back"),n(c,"wardrobe",0,3,1,1,"left"),n(c,"wardrobe",h,3,1,1,"right"),c.across===5&&n(c,"shelf",3,0,1,1,"back")}),e("liftPlatform",0,0,20,20,{blocks:!1}),e("barrels",20,0),e("barrels",21,0),e("generator",22,0,2,2),e("crate",20,2),e("crate",21,2),e("console",23,3),e("crate",22,14),e("crate",23,14),e("crate",23,15),e("rack",20,15),e("console",20,17,1,1),e("console",21,17,1,1),e("deskChair",20,19,1,1,{face:"S",seed:3}),e("locker",22,19),e("repairStand",31,8,4,4,{blocks:!1}),e("machineTool",30,5,2,1,{face:"N"}),e("machineTool",32,5,2,1,{face:"N"}),e("desk",36,5,2,1),e("rack",37,7),e("rack",37,8),e("rack",37,12),e("crate",36,13),e("crate",37,13),e("generator",34,13,2,2),e("console",27,5);for(let r of[27,29,30,31,32])e("rack",r,0);e("crate",30,2),e("crate",31,2),e("crate",32,2),e("crate",32,3),e("crate",27,3),e("desk",33,0,2,1),e("machineTool",36,0,2,1,{face:"N"}),e("rack",37,2),e("rack",37,3),e("cabinet",33,3),e("liftPlatform",38,0,5,5,{blocks:!1}),e("crate",42,0),e("crate",38,5),e("crate",42,5),e("crate",42,6),e("crate",38,9),e("console",38,7,1,1);for(let r of[10,11,12,13])e("rack",38,r),e("rack",42,r);e("crate",38,14),e("crate",42,14),e("instrumentRack",27,17,1,1,{face:"W",seed:2}),e("desk",30,19,2,1),e("console",32,18),e("labTable",27,19,2,1),e("cabinet",31,17);for(let r of[41,42])e("rack",r,17),e("rack",r,19);e("crate",37,19),e("crate",38,19),e("crate",37,17),e("console",49,0),e("console",50,0),e("console",51,0),e("deskChair",51,3,1,1,{face:"E",seed:5}),e("cabinet",48,3),e("liftPlatform",53,0,3,3,{blocks:!1}),e("console",52,3),e("generator",50,4,2,2),e("generator",53,4,2,2),e("cabinet",55,6),e("cabinet",55,7),e("cabinet",55,8),e("instrumentRack",50,8,1,1,{face:"S"}),e("acUnit",50,9,2,1),e("acUnit",53,9,2,1),e("acUnit",50,12,2,1),e("acUnit",53,12,2,1),e("barrels",55,11),e("tank",50,14,2,3),e("tank",53,14,2,3),e("barrels",55,18),e("barrels",55,19),e("console",50,19);for(let r of[1,2,3,5,6,7])e("console",r,23);e("console",0,25,1,1),e("console",0,26,1,1),e("commandTable",3,25,2,2,{face:"N"}),e("wallScreen",8,25,1,2,{face:"E",seed:4}),e("deskChair",8,27,1,1,{face:"E",seed:6}),e("wallScreen",10,23,3,1,{face:"N",seed:7}),e("chairRow",10,25,3,1,{face:"S"}),e("chairRow",10,26,3,1,{face:"S"});for(let r of[14,15,17,18,19])e("locker",r,23);e("locker",14,24),e("locker",14,25),e("locker",14,26),e("bench",16,25,3,1,{face:"N"}),e("console",21,23),e("console",22,23),e("console",23,23),e("instrumentRack",23,25,1,1,{face:"E",seed:3}),e("instrumentRack",23,26,1,1,{face:"E",seed:5}),e("cabinet",23,27),e("console",20,36,1,1),e("console",21,36,1,1),e("console",22,36,1,1),e("deskChair",23,33,1,1,{face:"E",seed:8}),e("wallScreen",20,33,1,2,{face:"W",seed:2}),e("locker",23,35);for(let r of[32,33,34,35])e("gunRack",0,r,1,1,{face:"W"});for(let r of[1,2,4,5])e("gunRack",r,36,1,1,{face:"S"});e("desk",5,32,2,1),e("locker",6,34),e("locker",6,35);for(let r of[8,9,11,12])for(let o of[32,33,35])e("crate",r,o);e("desk",14,33,1,2),e("machineTool",14,36,2,1,{face:"S"}),e("gunRack",19,33,1,1,{face:"E"}),e("gunRack",19,34,1,1,{face:"E"}),e("labTable",17,35,2,1),e("cabinet",19,36),e("deskChair",27,23,1,1,{face:"N",seed:1}),e("deskChair",28,23,1,1,{face:"N",seed:2}),e("deskChair",30,23,1,1,{face:"N",seed:3}),e("deskChair",31,23,1,1,{face:"N",seed:4}),e("shelf",32,24,1,1,{face:"E"}),e("shelf",32,25,1,1,{face:"E"});for(let r of[37,38,40,41,42])e("instrumentRack",r,23,1,1,{face:"N",seed:r});e("labTable",41,25,2,1),e("fumeHood",27,30,1,1,{face:"W"}),e("fumeHood",27,31,1,1,{face:"W"}),e("fumeHood",27,33,1,1,{face:"W"}),e("labTable",29,31,1,2),e("instrumentRack",31,30,1,1,{face:"E",seed:6}),e("instrumentRack",31,31,1,1,{face:"E",seed:7}),e("cabinet",27,35),e("cabinet",28,36),e("freezer",31,36,1,1,{face:"S"}),e("bioCabinet",32,30,1,1,{face:"W"}),e("bioCabinet",32,31,1,1,{face:"W"}),e("opTable",34,32,1,2,{face:"N"}),e("medCart",35,32,1,1,{face:"E"}),e("labTable",37,30,1,2),e("specimenTank",36,35),e("specimenTank",37,35),e("freezer",32,35,1,1,{face:"W"}),e("freezer",32,36,1,1,{face:"W"}),e("testRig",39,32,2,2,{face:"N"}),e("instrumentRack",42,30,1,1,{face:"E",seed:8}),e("instrumentRack",42,31,1,1,{face:"E",seed:9}),e("instrumentRack",42,34,1,1,{face:"E",seed:10}),e("labTable",38,30,1,2),e("desk",38,36,2,1),e("console",52,23),e("console",53,23),e("console",54,23),e("wallScreen",55,24,1,2,{face:"E",seed:5});for(let[r,o]of[[51,28],[53,28],[55,28],[51,31],[53,31],[55,31],[52,34],[54,35]])e("specimenTank",r,o);e("cabinet",55,27),e("freezer",55,33,1,1,{face:"E"}),e("medBed",0,41,1,2,{face:"W",monitor:!1}),e("deskChair",4,40,1,1,{face:"N",seed:2}),e("cabinet",4,42);for(let r of[5,7,8])e("cabinet",r,40);e("medBed",8,41,1,2,{face:"E",monitor:!1}),e("deskChair",11,40,1,1,{face:"N",seed:9}),e("cabinet",12,40),e("shelf",9,40,1,1,{face:"N"}),e("medBed",12,41,1,2,{face:"E",monitor:!1}),e("opTable",2,47,1,2,{face:"N"}),e("medCart",3,47,1,1,{face:"E"}),e("medCart",1,49,1,1,{face:"W"}),e("cabinet",0,46),e("cabinet",1,46),e("cabinet",0,50);for(let r of[51,53,55])e("medBed",0,r,2,1,{face:"W"});e("cabinet",5,51),e("medBed",11,46,2,1,{face:"E"}),e("medBed",11,48,2,1,{face:"E"}),e("medCart",12,50,1,1,{face:"E"}),e("cabinet",8,46);for(let r of[51,53,55])e("medBed",11,r,2,1,{face:"E"});e("diningTable",16,41,2,2,{face:"N"}),e("diningTable",21,41,2,2,{face:"N"}),e("diningTable",16,43,2,2,{face:"N"}),e("diningTable",21,43,2,2,{face:"N"}),e("servingCounter",23,40,1,1,{face:"E"}),e("servingCounter",23,41,1,1,{face:"E"}),e("sofa",16,46,2,1,{face:"S"}),e("sofa",21,46,2,1,{face:"S",color:"70,84,96"}),e("wallScreen",16,40,2,1,{face:"N",seed:6}),e("galleyFloor",24,40,4,5,{blocks:!1,drain:[3.6,1.4,3.7,5.8]}),e("galleyCounter",24,40,1,1,{face:"N",variant:"drawers",upper:!0}),e("galleyRange",25,40,1,1,{face:"N"}),e("galleyCounter",26,40,1,1,{face:"N",variant:"doors",upper:!0}),e("galleyFridge",27,40,1,1,{face:"N"}),e("galleyCounter",27,41,1,1,{face:"E",variant:"sink2"}),e("galleyCounter",27,42,1,1,{face:"E",variant:"drawers"}),e("galleyCounter",27,43,1,1,{face:"E",variant:"microwave"}),e("galleyCounter",27,44,1,1,{face:"S",variant:"grinder"}),e("galleyCounter",26,44,1,1,{face:"S",variant:"doors"}),e("galleyIsland",26,41,1,2),e("rack",24,46),e("rack",26,46),e("rack",27,46),e("crate",27,45);for(let r of[16,17,19,20,21])e("washbasin",r,49,1,1,{face:"N"});for(let r of[51,52,53,54,55])e("showerCabin",16,r,1,1,{face:"W"}),e("toilet",21,r,1,1,{face:"E"});e("bench",18,52,1,3,{face:"W"});for(let r of[22,23,25])e("washbasin",r,49,1,1,{face:"N"});for(let r of[50,51,52])e("showerCabin",27,r,1,1,{face:"E"});e("toilet",22,51,1,1,{face:"W"}),e("toilet",22,52,1,1,{face:"W"});for(let r of[25,26,27])e("washer",r,55,1,1,{face:"S"});e("washer",22,55,1,1,{face:"S"}),e("labTable",27,53,1,1),e("rack",22,53);for(let r of[59,60,61])e("treadmill",r,40,1,2,{face:"N"});for(let[r,o]of[[64,40],[65,40],[64,41],[65,41]])e("exerciseBike",r,o,1,1,{face:"N"});e("powerRack",64,44,2,2,{face:"E"}),e("weightBench",64,47,1,2,{face:"N"}),e("dumbbellRack",65,47,1,2,{face:"E"}),e("gymMat",60,47,3,2,{blocks:!1}),e("punchingBag",63,50),e("punchingBag",59,50),e("wallScreen",62,40,1,1,{face:"N",seed:1});for(let r of[59,60,61,62,63])e("locker",r,55);e("bench",60,53,3,1,{face:"N"});for(let r of[63,64,65])e("showerCabin",r,51,1,1,{face:"N"});e("showerCabin",65,52,1,1,{face:"E"}),e("washbasin",65,54,1,1,{face:"E"}),e("washbasin",65,55,1,1,{face:"E"})}var Jt={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function Yd(i){let{TILES:e,LEVEL_H:t,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:c,building:l,stairRun:h,tiltrotor:d,block:u,surface:f,marking:m,floorStyle:x}=i,p=(E,H,X,oe,ge)=>{for(let V=Math.max(0,H);V<=Math.min(e-1,oe);V++)for(let de=Math.max(0,E);de<=Math.min(e-1,X);de++)f[V][de]=ge},g=(E,H,X,oe)=>{for(let ge=0;ge<e;ge++)for(let V=0;V<e;V++)Math.hypot(V+.5-E,ge+.5-H)<=X&&(f[ge][V]=oe)},_=(E,H)=>E===0?"g":E===H-1?"t":"u",y=(E,H,X)=>`${E}_${_(H,X)}`;p(0,0,e-1,e-1,Jt.grass),p(0,27,e-1,30,Jt.sidewalk),p(0,31,e-1,48,Jt.asphalt),p(0,49,e-1,52,Jt.sidewalk);for(let E=0;E<e;E++)E%4<2&&(E<44||E>48)&&(m[40][E]="dash");for(let E=31;E<=48;E++)for(let H=44;H<=48;H++)m[E][H]="zebra";function M(E,H,X,oe,ge,V,de,Me,Se={}){let O=l({name:E,col0:H,row0:X,col1:oe,row1:ge,levels:V,style:de});for(let B=0;B<V;B++){r(B,H,X,oe,ge),B>0&&s(B,H,X,oe,ge,n.interior);for(let se=X;se<=ge;se++)for(let _e=H;_e<=oe;_e++)x[B][se][_e]=Se.floor||"parquet";let J=y(de,B,V);for(let se=X;se<=ge;se++)o(B,H,se,"wall",J),o(B,oe+1,se,"wall",J);for(let se=H;se<=oe;se++)a(B,se,X,"wall",J),a(B,se,ge+1,"wall",J);for(let se=H+1;se<oe;se++)(se-H)%2===1&&(a(B,se,X,"window",J),a(B,se,ge+1,"window",J));for(let se=X+1;se<ge;se++)(se-X)%2===1&&(o(B,H,se,"window",J),o(B,oe+1,se,"window",J))}c("roof",V,H,X,oe-H+1,ge-X+1,{blocks:!1,type:Se.roof||"tile",facade:de});let $=Math.floor((H+oe)/2),me=Me==="S"?ge+1:X,fe=Me==="S"?X:ge+1,w=y(de,0,V);a(0,$+1,me,"door",w),Se.backDoor!==!1&&a(0,$+1,fe,"door",w);let ne=Me==="S"?X+1:ge-5;R($-1,ne,V-1,de);let Q=Math.floor((X+ge)/2)+1;for(let B=0;B<V;B++){for(let se=X;se<=ge;se++)o(B,$-1,se,"wall","inner"),o(B,$+2,se,"wall","inner");for(let se=H;se<$-1;se++)a(B,se,Q,"wall","inner");for(let se=$+2;se<=oe;se++)a(B,se,Q,"wall","inner");[{col0:H,col1:$-2,row0:X,row1:Q-1,side:"W"},{col0:H,col1:$-2,row0:Q,row1:ge,side:"W"},{col0:$+2,col1:oe,row0:X,row1:Q-1,side:"E"},{col0:$+2,col1:oe,row0:Q,row1:ge,side:"E"}].forEach((se,_e)=>{let Pe=[];for(let P=se.row0+1;P<se.row1;P++)(P<ne||P>ne+4)&&Pe.push(P);let Xe=Pe.length?Pe[Math.floor(Pe.length/2)]:se.row0;se.side==="W"?o(B,$-1,Xe,"door","inner"):o(B,$+2,Xe,"door","inner"),Se.furnish!==!1&&I(B,se,se.side==="W"?[se.col1,Xe]:[se.col0,Xe],(_e+B+H)%4)})}return{...O,midCol:$,stairRow:ne,front:me,back:fe}}function R(E,H,X,oe){let ge=[];for(let V=0;V<X;V++)V%2===0?(h(V,E,H+3,0,-1,3,"classic"),ge.push({level:V,col:E,cells:[H+3,H+2,H+1],exit:[E,H]})):(h(V,E+1,H+1,0,1,3,"classic"),ge.push({level:V,col:E+1,cells:[H+1,H+2,H+3],exit:[E+1,H+4]}));for(let V of ge){let de=V.level+1,Me=(Se,O)=>Se===V.col&&V.cells.includes(O);for(let Se of V.cells){let O=[[V.col-1,Se,"W",V.col,Se],[V.col+1,Se,"W",V.col+1,Se],[V.col,Se-1,"N",V.col,Se],[V.col,Se+1,"N",V.col,Se+1]];for(let[$,me,fe,w,ne]of O)Me($,me)||$===V.exit[0]&&me===V.exit[1]||(fe==="W"?o(de,w,ne,"rail","iron"):a(de,w,ne,"rail","iron"))}}}let C=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function I(E,H,X,oe){let ge=H.col1-H.col0+1,V=H.row1-H.row0+1;if(ge<3||V<3)return;[[H.col0,H.row0],[H.col1-1,H.row0],[H.col0,H.row1],[H.col1-1,H.row1]].forEach((Me,Se)=>{let[O,$,me]=C[(oe+Se)%C.length],fe=$===2?Me[0]:Se%2?H.col1:H.col0,w=Me[1];for(let ne=0;ne<$;ne++)if(Math.abs(fe+ne-X[0])<=1&&Math.abs(w-X[1])<=1)return;c(O,E,fe,w,$,me,{rotation:w===H.row0?0:2})})}let k={col0:2,row0:7,col1:15,row1:21};p(k.col0,k.row0,k.col1,k.row1,Jt.sand);for(let E=k.row0;E<=k.row1;E++)o(0,k.col0,E,"rail","fence"),o(0,k.col1+1,E,"rail","fence");for(let E=k.col0;E<=k.col1;E++)a(0,E,k.row0,"rail","fence"),(E<8||E>9)&&a(0,E,k.row1+1,"rail","fence");o(0,k.col1+1,14,null),p(8,22,9,26,Jt.path),c("playhouse",0,3,8,2,2),c("slide",0,7,8,1,3),c("swing",0,11,8,3,1),c("sandbox",0,4,15,3,3,{blocks:!1}),c("carousel",0,11,13,2,2),c("bench",0,2,12,1,1,{rotation:3}),c("bench",0,2,18,1,1,{rotation:3}),c("bench",0,15,19,1,1,{rotation:1}),c("bin",0,15,20);for(let[E,H]of[[13,19],[7,20]])c("tree",0,E,H,1,1,{type:"linden"});for(let E of[4,9,14,20,26,32,61,67,73,80,86,92])c("tree",0,E,1,1,1,{type:E%3?"linden":"chestnut"});M("houseA",19,7,31,21,3,"ochre","S"),p(25,22,27,26,Jt.path);let T={col0:36,row0:4,col1:58,row1:22};l({name:"bank",...T,levels:2,style:"bank"});for(let E=0;E<2;E++){r(E,T.col0,T.row0,T.col1,T.row1),E>0&&s(E,T.col0,T.row0,T.col1,T.row1,n.interior);for(let X=T.row0;X<=T.row1;X++)for(let oe=T.col0;oe<=T.col1;oe++)x[E][X][oe]="marble";let H=y("bank",E,2);for(let X=T.row0;X<=T.row1;X++)o(E,T.col0,X,"wall",H),o(E,T.col1+1,X,"wall",H);for(let X=T.col0;X<=T.col1;X++)a(E,X,T.row0,"wall",H),a(E,X,T.row1+1,"wall",H);for(let X=T.col0+1;X<T.col1;X++)(X-T.col0)%2===1&&a(E,X,T.row1+1,"window",H);for(let X of[37,39,53,55,57])a(E,X,T.row0,"window",H);for(let X=T.row0+1;X<T.row1;X++)(X-T.row0)%2===1&&(o(E,T.col0,X,"window",H),o(E,T.col1+1,X,"window",H))}c("roof",2,T.col0,T.row0,T.col1-T.col0+1,T.row1-T.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let E of[46,47,48])a(0,E,T.row1+1,"door","bank_g");a(1,47,T.row1+1,"window","bank_t"),c("balcony",1,45,23,5,1,{blocks:!1});for(let E of[45,49])c("column",0,E,23,1,1);o(0,T.col1+1,7,"door","bank_g"),p(34,23,60,26,Jt.paving);for(let E=T.col0;E<=T.col1;E++)a(0,E,13,"wall","inner");for(let E of[39,55])a(0,E,13,"door","inner");let v={col0:43,row0:4,col1:51,row1:9};for(let E=v.row0;E<=v.row1;E++)o(0,v.col0,E,"wall","vault"),o(0,v.col1+1,E,"wall","vault");for(let E=v.col0;E<=v.col1;E++)a(0,E,v.row1+1,"wall","vault");a(0,47,v.row1+1,"door","vault");for(let E=v.row0;E<=v.row1;E++)for(let H=v.col0;H<=v.col1;H++)x[0][E][H]="steel";for(let E=T.row0;E<=10;E++)o(0,40,E,"wall","inner"),o(0,55,E,"wall","inner");for(let E=T.col0;E<40;E++)a(0,E,11,"wall","inner");for(let E=55;E<=T.col1;E++)a(0,E,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let E of[37,38,41,42,43,44,50,51,52,53,56,57])c("counter",0,E,15,1,1);c("sofa",0,38,20,2,1),c("sofa",0,55,20,2,1),c("table",0,41,19,2,1),c("table",0,52,19,2,1);for(let[E,H]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])c("plant",0,E,H);for(let E=v.col0;E<=v.col1;E++)c("deposits",0,E,v.row0);for(let E of[5,6,7])c("deposits",0,v.col0,E,1,1,{rotation:3}),c("deposits",0,v.col1,E,1,1,{rotation:1});c("table",0,46,7,2,1),c("desk",0,36,4,2,1),c("console",0,39,4),c("locker",0,36,9),c("locker",0,37,9),c("desk",0,56,5,2,1),c("cabinet",0,58,4),c("cabinet",0,58,9),c("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let E=T.row0;E<=T.row1;E++)o(1,41,E,"wall","inner"),o(1,53,E,"wall","inner");for(let E=41;E<=52;E++)a(1,E,10,"wall","inner"),a(1,E,13,"wall","inner");for(let E of[7,17])for(let[H,X]of[[T.col0,40],[53,T.col1]])for(let oe=H;oe<=X;oe++)a(1,oe,E,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),c("table",1,45,16,4,2),c("bookcase",1,42,21),c("bookcase",1,52,21),c("desk",1,37,4,2,1),c("bookcase",1,36,6),c("sofa",1,37,9,2,1),c("desk",1,56,4,2,1),c("cabinet",1,58,6),c("desk",1,37,12,2,1),c("cabinet",1,36,16),c("desk",1,56,12,2,1),c("cabinet",1,58,16),c("desk",1,37,19,2,1),c("desk",1,56,19,2,1),c("table",1,45,5,3,2),c("bookcase",1,42,4),c("bookcase",1,52,4),p(61,4,73,26,Jt.asphalt),p(64,27,70,30,Jt.asphalt);for(let E=62;E<=72;E+=2)c("paint",0,E,5,1,4,{blocks:!1,line:"W"}),c("paint",0,E,17,1,4,{blocks:!1,line:"W"});let S=(E,H,X,oe,ge)=>c("car",0,X,oe,2,4,{type:E,color:H,flip:!!ge});S("suv","police",62,5),S("suv","police",64,5),S("van","white",68,5),S("suv","graphite",62,17,!0),S("suv","red",70,17,!0),c("lamp",0,61,12),c("lamp",0,73,12);let le=M("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),p(83,22,85,26,Jt.path);for(let E of[80,81,86,87])c("counter",0,E,19,1,1);c("locker",0,76,6),c("locker",0,77,6),c("locker",0,78,6),c("desk",0,76,10,2,1),c("rack",0,91,6),c("rack",0,91,7),c("rack",0,90,6),c("crate",0,91,10),c("bunk",0,76,17,2,1),c("bunk",0,90,17,2,1),c("desk",0,89,21,2,1),c("cabinet",0,75,21),c("desk",1,76,7,2,1),c("desk",1,89,7,2,1),c("cabinet",1,75,10),c("cabinet",1,91,10),c("desk",1,76,18,2,1),c("desk",1,89,18,2,1),c("bookcase",1,75,21),c("bookcase",1,91,21);for(let E=3;E<e;E+=10)(E<63||E>71)&&c("streetLamp",0,E,30),E+5<e&&(E+5<43||E+5>49)&&c("streetLamp",0,E+5,49);for(let E of[17,58,88])c("bin",0,E,28);c("busStop",0,30,50,3,1),c("bench",0,31,51,1,1,{rotation:0}),c("bin",0,34,51);let K=(E,H,X,oe,ge)=>c("car",0,X,oe,4,2,{type:E,color:H,flip:!!ge});K("suv","white",20,33),K("van","sand",36,42,!0),K("suv","blue",58,36),K("suv","olive",74,45,!0),K("suv","graphite",81,33),K("van","white",6,45,!0),M("houseB",3,55,16,69,3,"cream","N"),M("houseC",22,56,34,70,2,"green","N"),M("houseD",51,55,63,70,3,"pink","N"),M("houseE",72,56,86,70,3,"ochre","N");for(let[E,H,X]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])p(E,53,H,X,Jt.path);for(let E=1;E<=32;E++)[10,11,29,30].includes(E)||c("hedge",0,E,73);for(let E=59;E<=91;E++)[80,81].includes(E)||c("hedge",0,E,73);p(0,76,36,77,Jt.path),p(56,76,91,77,Jt.path);for(let[E,H]of[[10,11],[29,30],[57,58],[80,81]])p(E,71,H,75,Jt.path);for(let E=3;E<=33;E+=5)c("tree",0,E,83,1,1,{type:E%2?"chestnut":"linden"});for(let E of[5,20,35])c("bench",0,E,78,1,1,{rotation:2});for(let E of[60,66])c("tree",0,19,E,1,1,{type:"linden"}),c("tree",0,68,E,1,1,{type:"chestnut"}),c("tree",0,90,E,1,1,{type:"linden"});let N={col:46.5,row:82.5};g(N.col,N.row,12,Jt.paving),p(44,53,48,71,Jt.paving),c("fountain",0,42,78,9,9,{blocks:!1});for(let E=78;E<=86;E++)for(let H=42;H<=50;H++)Math.hypot(H+.5-N.col,E+.5-N.row)<4.4&&u(0,H,E);for(let E=0;E<8;E++){let H=E/8*Math.PI*2+Math.PI/8,X=Math.floor(N.col+Math.cos(H)*8.6),oe=Math.floor(N.row+Math.sin(H)*8.6),ge=[[0,-1],[1,0],[0,1],[-1,0]].map(([V,de])=>V*Math.cos(H)+de*Math.sin(H));c(E%2?"streetLamp":"bench",0,X,oe,1,1,{rotation:ge.indexOf(Math.max(...ge))})}p(60,81,82,95,Jt.paving);let F=68,G=87,q=d(F,G);for(let[E,H]of[[60,81],[82,81],[60,95],[82,95]])c("lamp",0,E,H);c("crate",0,80,84),c("crate",0,81,84),c("barrels",0,62,93);let D=(E,H,X,oe)=>[E,H,X,oe];return{spawns:{squad:[D(F+1,G,0,1),D(F+2,G,0,1),D(F+3,G,0,1),D(F+1,G+3,0,5),D(F+2,G+3,0,5),D(F+3,G+3,0,5)],mech:[D(F,G+1,0,7)],aliens:[D(44,17,0,0),D(51,19,0,0),D(47,11,0,1),D(40,8,1,3),D(6,13,0,7),D(12,17,0,5),D(28,37,0,3),D(62,44,0,5),D(84,36,0,1),D(83,16,0,3),D(88,9,1,5),D(68,13,0,1)]},extraction:q,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var qd=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),zt=typeof globalThis<"u"&&globalThis.ALIENS_MAP||qd.get("map")||"outpost",tr=24,U=1.25,jn=4,at=2.5,St=zt==="big"?tr*2:zt==="base"?68:zt==="city"?96:tr,Fx=1,Ox=6;var Ut={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function er(i){return Array.from({length:jn},()=>Array.from({length:St+1},()=>new Array(St+1).fill(i)))}function Zd(){let i=er(0),e=er(0),t=er(null),n=er(null),s=er(0),r=[],o=[],a=[],c=[],l=[],h=[],d=[],u=zt==="city"?Array.from({length:St},()=>new Array(St).fill(0)):null,f=zt==="city"?Array.from({length:St},()=>new Array(St).fill(null)):null,m=zt==="city"?er(null):null;if(zt!=="base")for(let O=0;O<St;O++)for(let $=0;$<St;$++)i[0][O][$]=Ut.ground;let x=0,p=0,g=(O,$,me,fe,w,ne)=>{for(let Q=me;Q<=w;Q++)for(let B=$;B<=fe;B++)i[O][Q+p][B+x]=ne},_=(O,$,me,fe,w)=>{for(let ne=me;ne<=w;ne++)for(let Q=$;Q<=fe;Q++)s[O][ne+p][Q+x]=1},y=(O,$,me,fe)=>{e[O][me+p][$+x]=fe},M=(O,$,me,fe,w)=>{t[O][me+p][$+x]=fe?{type:fe,style:w}:null},R=(O,$,me,fe,w)=>{n[O][me+p][$+x]=fe?{type:fe,style:w}:null},C=(O,$,me,fe,w,ne,Q)=>{for(let B=me;B<=w;B++)M(O,$,B,ne,Q),M(O,fe+1,B,ne,Q);for(let B=$;B<=fe;B++)R(O,B,me,ne,Q),R(O,B,w+1,ne,Q)},I=(O,$,me,fe,w,ne)=>{for(let Q=me;Q<=fe;Q++)M(O,$,Q,w,ne)},k=(O,$,me,fe,w,ne)=>{for(let Q=me;Q<=fe;Q++)R(O,Q,$,w,ne)},T=(O,$,me,fe,w=1,ne=1,Q={})=>r.push({kind:O,level:$,col:me+x,row:fe+p,cols:w,rows:ne,rotation:0,blocks:!0,...Q}),v=O=>{let $={...O,col0:O.col0+x,row0:O.row0+p,col1:O.col1+x,row1:O.row1+p};return c.push($),$},S=O=>a.push({...O,from:[O.from[0]+x,O.from[1]+p,O.from[2]],to:[O.to[0]+x,O.to[1]+p,O.to[2]],col:O.col+x,row:O.row+p}),le=(O,$,me,fe,w)=>r.push({kind:"ladder",level:O,col:$+x,row:me+p,cols:1,rows:1,blocks:!1,height:fe,side:w}),K=(O,$,me,fe)=>h.push({rect:[(O+x)*U,($+p)*U,(me+x)*U,(fe+p)*U]}),N=(O,$,me)=>h.push({circle:[(O+x)*U,($+p)*U,me*U]}),F=(O,$,me)=>d.push([O,$+x,me+p]),G=(O,$,me,fe,w,ne,Q)=>{o.push({level:O,col:$+x,row:me+p,dirCol:fe,dirRow:w,count:ne,style:Q});for(let B=0;B<ne;B++){let J=$+fe*B,se=me+w*B;g(O,J,se,J,se,Ut.stairs),y(O,J,se,(B+.5)/ne*at),O+1<jn&&g(O+1,J,se,J,se,Ut.none)}};function q(){v({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),g(1,3,3,10,9,Ut.interior),g(2,3,3,10,9,Ut.roof),_(0,3,3,10,9),_(1,3,3,10,9);for(let O of[0,1])C(O,3,3,10,9,"wall","hab");C(2,3,3,10,9,"parapet","hab"),I(0,7,3,5,"wall","inner"),M(0,7,5,"door","inner"),k(0,6,3,10,"wall","inner"),R(0,4,6,"door","inner"),R(0,9,6,"door","inner"),k(0,7,3,10,"wall","inner"),R(0,6,7,"door","inner"),R(0,9,7,"door","inner"),I(0,8,7,9,"wall","inner"),R(0,6,10,"door","hab"),M(0,11,6,"door","hab");for(let O of[4,8,10])R(0,O,10,"window","hab");for(let O of[4,8])M(0,11,O,"window","hab");R(0,5,3,"window","hab"),M(0,3,4,"window","hab"),G(0,4,8,1,0,3,"hab"),I(1,7,3,5,"wall","inner"),M(1,7,4,"door","inner"),k(1,6,3,10,"wall","inner"),R(1,5,6,"door","inner"),R(1,9,6,"door","inner"),I(1,8,7,9,"wall","inner"),k(1,7,8,10,"wall","inner"),R(1,9,7,"door","inner"),k(1,8,4,6,"rail","hab"),k(1,9,4,6,"rail","hab"),M(1,4,8,"rail","hab");for(let O of[4,5,7,9,10])R(1,O,10,"window","hab");for(let O of[4,5,8])M(1,11,O,"window","hab");R(1,4,3,"window","hab"),R(1,8,3,"window","hab"),M(1,3,5,"window","hab"),T("console",0,3,3),T("console",0,4,3),T("locker",0,6,3),T("bunk",0,9,3,2,1),T("locker",0,10,5),T("labTable",0,9,8,2,1),T("cabinet",0,10,9),T("crate",0,7,9),T("crate",0,3,7),T("rack",1,10,7),T("rack",1,10,8),T("rack",1,10,9),T("desk",1,4,3,2,1),T("console",1,9,3),T("crate",1,3,5),T("crate",1,3,6),T("acUnit",2,5,4,2,1),T("acUnit",2,8,6,1,1),T("antenna",2,4,8),T("solar",2,6,7,2,2),S({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),le(0,11,9,2*at+.9,"W"),v({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),g(1,15,4,19,8,Ut.deck),C(1,15,4,19,8,"rail","deck"),R(1,17,9,null);for(let[O,$]of[[15,4],[19,4],[15,8],[19,8],[17,4]])T("pylon",0,O,$);G(0,17,11,0,-1,3,"deck"),v({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),C(1,16,4,18,6,"wall","cabin"),R(1,17,7,"door","cabin"),M(1,19,5,"window","cabin"),R(1,16,7,"window","cabin"),g(1,16,4,18,6,Ut.interior),g(2,16,4,18,6,Ut.roof),C(2,16,4,18,6,"parapet","cabin"),_(1,16,4,18,6),T("console",1,16,4),T("rack",1,18,4),T("dish",2,17,5),S({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),le(1,19,6,at+.9,"W"),T("barrels",0,16,6),T("crate",0,18,7),v({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),g(3,20,14,21,15,Ut.deck),C(3,20,14,21,15,"rail","tower");for(let[O,$]of[[20,14],[21,14],[20,15],[21,15]])T("towerLeg",0,O,$);T("searchlight",3,21,14),S({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),le(0,20,16,3*at+.9,"N"),R(3,20,16,null),T("container",0,13,13,2,4,{color:"orange"}),T("container",0,1,12,2,4,{color:"blue"}),T("truck",0,8,12,2,5),T("tank",0,21,4,2,3),T("generator",0,12,1,2,2);for(let[O,$]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])T("crate",0,O,$);T("barrels",0,12,4),T("barrels",0,20,10),T("lamp",0,12,11),T("lamp",0,15,12),k(0,20,10,13,"barrier","concrete"),I(0,16,17,19,"barrier","concrete");for(let[O,$,me]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])T("rock",0,O,$,me,me);K(1.3,1.3,12.6,11.7),K(14.2,3,20.8,12.8),K(19.4,13.4,22.6,16.8),N(4.6,19,3.6)}function D(){v({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),_(0,2,2,13,9),g(1,2,2,13,9,Ut.roof),C(0,2,2,13,9,"wall","hab"),C(1,2,2,13,9,"parapet","hab"),R(0,6,10,"door","hab"),R(0,7,10,"door","hab"),M(0,14,5,"door","hab"),M(0,2,6,"door","hab");for(let O of[3,4,9,10,12])R(0,O,10,"window","hab");for(let O of[4,8,11])R(0,O,2,"window","hab");for(let O of[3,7,8])M(0,14,O,"window","hab");for(let O of[3,4,5,9,10,11])T("rack",0,O,2);T("crate",0,4,5),T("crate",0,5,5),T("crate",0,4,6),T("crate",0,10,6),T("crate",0,11,6),T("barrels",0,12,8),T("desk",0,2,8,2,1),T("cabinet",0,13,3),T("acUnit",1,4,4,2,1),T("acUnit",1,9,6,2,1),v({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),g(1,13,13,20,19,Ut.interior),g(2,13,13,20,19,Ut.roof),_(0,13,13,20,19),_(1,13,13,20,19);for(let O of[0,1])C(O,13,13,20,19,"wall","hab");C(2,13,13,20,19,"parapet","hab"),I(0,17,13,19,"wall","inner"),M(0,17,15,"door","inner"),M(0,17,16,"door","inner"),R(0,18,20,"door","hab"),M(0,13,15,"door","hab");for(let O of[14,15,19])R(0,O,20,"window","hab");for(let O of[17,18])M(0,21,O,"window","hab");R(0,15,13,"window","hab"),R(0,19,13,"window","hab"),G(0,14,18,1,0,3,"hab"),k(1,18,14,16,"rail","hab"),M(1,14,19,"rail","hab"),M(1,14,18,"rail","hab");for(let O of[14,16,18,19])R(1,O,20,"window","hab");for(let O of[14,16,18])M(1,21,O,"window","hab");for(let O of[14,17,19])R(1,O,13,"window","hab");T("desk",0,14,14,2,1),T("console",0,19,14),T("locker",0,20,17),T("desk",1,15,14,2,1),T("desk",1,18,16,2,1),T("rack",1,20,14),T("crate",1,20,19),T("antenna",2,19,18),T("acUnit",2,15,15,2,1),T("container",0,17,3,2,4,{color:"orange"}),T("generator",0,9,13,2,2),T("barrels",0,12,12),T("crate",0,8,16),T("crate",0,9,17),T("lamp",0,15,10),T("lamp",0,11,19),k(0,11,18,21,"barrier","concrete");for(let[O,$,me]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])T("rock",0,O,$,me,me);K(1.3,1.3,14.7,11.7),K(12.3,12.3,21.7,20.7),K(6.3,11.3,12.7,13.2)}function E(){K(.6,.6,22.4,22.4);let O=(me,fe,w)=>T("paint",0,me,fe,1,w,{blocks:!1,line:"W"});for(let[me,fe]of[[2,4],[10,4],[14,4]])for(let w=2;w<=20;w+=2)O(w,me,fe);let $=(me,fe,w,ne,Q)=>T("car",0,w,ne,2,4,{type:me,color:fe,flip:!!Q});$("suv","white",2,2),$("van","sand",8,2),$("suv","graphite",10,2),$("suv","red",16,2),$("suv","blue",4,10,!0),$("van","white",12,10,!0),$("suv","olive",18,10,!0),$("suv","graphite",6,14),$("suv","white",14,14),T("truck",0,21,15,2,5);for(let[me,fe]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])T("lamp",0,me,fe);I(0,1,2,5,"barrier","concrete"),I(0,1,10,17,"barrier","concrete"),k(0,23,2,9,"barrier","concrete"),k(0,23,13,20,"barrier","concrete"),T("crate",0,21,3),T("crate",0,21,4),T("barrels",0,22,12);for(let[me,fe,w]of[[0,22,2],[23,0,1]])T("rock",0,me,fe,w,w)}function H(O,$){T("tiltrotor",0,O,$,6,4,{blocks:!1});for(let w=O;w<=O+5;w++)for(let ne=$;ne<=$+3;ne++)y(0,w,ne,.6);for(let w=$;w<=$+3;w++)y(0,O+6,w,.45),y(0,O+7,w,.15);let me={col:O+4,row:$+4};y(0,me.col,me.row,.3),_(0,O,$,O+5,$+3);for(let w=O;w<=O+5;w++)R(0,w,$,"hull","tiltrotor"),w!==me.col&&R(0,w,$+4,"hull","tiltrotor");for(let w=$;w<=$+3;w++)M(0,O,w,"hull","tiltrotor");for(let w=O-4;w<=O+5;w++)F(0,w,$-1),w!==me.col&&F(0,w,$+4);for(let w=O-4;w<=O-1;w++)for(let ne=$;ne<=$+3;ne++)F(0,w,ne);let fe=[];for(let w=O;w<=O+7;w++)for(let ne=$;ne<=$+3;ne++)fe.push([w+x,ne+p,0]);return fe}function X(){let me=H(10,10);K(4.3,4.3,21.7,19.7),T("crate",0,20,8),T("crate",0,20,9),T("crate",0,21,9),T("barrels",0,19,16),T("generator",0,5,17,2,2);for(let[w,ne]of[[4,4],[21,4],[4,19],[21,19]])T("lamp",0,w,ne);for(let[w,ne,Q]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])T("rock",0,w,ne,Q,Q);let fe=(w,ne,Q)=>[w+x,ne+p,0,Q];return{squad:[fe(11,10,1),fe(12,10,1),fe(13,10,1),fe(11,13,5),fe(12,13,5),fe(13,13,5)],mech:[fe(10,11,7)],extraction:me}}function oe(){x=Fx,p=Ox;let O=Wd,$=O.grid[0],me=O.grid[1],fe=Array.from({length:me},()=>new Array($).fill(null)),w=Array.from({length:me},()=>new Array($).fill(0)),ne=(z,Z,ue)=>{for(let pe=z.y;pe<z.y+z.height;pe++)for(let ke=z.x;ke<z.x+z.width;ke++)fe[pe][ke]=Z,w[pe][ke]=ue},Q=new Set(["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430","\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430"]);O.rooms.forEach((z,Z)=>ne(z,Q.has(z.name)?"hangar":z.kind==="corridor"?z.zone+":corridor":"room"+Z,z.levels)),O.corridors.forEach(z=>ne(z,"corridor",z.levels||1));let B=(z,Z)=>z>=0&&Z>=0&&z<$&&Z<me?fe[Z][z]:null,J=(z,Z)=>B(z,Z)?w[Z][z]:0;for(let z=0;z<me;z++)for(let Z=0;Z<$;Z++)if(fe[z][Z]){g(0,Z,z,Z,z,Ut.interior);for(let ue=0;ue<w[z][Z];ue++)_(ue,Z,z,Z,z)}let se=(z,Z,ue,pe,ke)=>{let ze=z!==ue?0:Math.min(Z,pe);for(let ve=ze;ve<Math.max(Z,pe);ve++)ke(ve)};for(let z=0;z<=me;z++)for(let Z=0;Z<=$;Z++)z<me&&se(B(Z-1,z),J(Z-1,z),B(Z,z),J(Z,z),ue=>M(ue,Z,z,"wall","inner")),Z<$&&se(B(Z,z-1),J(Z,z-1),B(Z,z),J(Z,z),ue=>R(ue,Z,z,"wall","inner"));let _e={gate:2.35,double:2.1},Pe=4.4;O.doors.forEach(z=>{let Z=z.size>1?l.length:-1,ue=[];for(let ve=0;ve<z.size;ve++){let Te=z.side==="N"?["N",z.x+ve,z.y]:z.side==="S"?["N",z.x+ve,z.y+1]:z.side==="W"?["W",z.x,z.y+ve]:["W",z.x+1,z.y+ve],[We,Ee,bt]=Te,Qe=We==="N"?[Ee,bt-1]:[Ee-1,bt];ue.push({orient:We,col:Ee,row:bt,levels:Math.min(J(Ee,bt),J(Qe[0],Qe[1]))})}let pe=z.kind==="gate"&&ue.every(ve=>ve.levels>=2),ke=pe?Pe:_e[z.kind]||2.1,ze=[];for(let{orient:ve,col:Te,row:We}of ue)for(let Ee=0;Ee<(pe?2:1);Ee++)(ve==="N"?R:M)(Ee,Te,We,"door","inner"),Z>=0&&((ve==="N"?n:t)[Ee][We+p][Te+x].gate={group:Z,kind:z.kind,height:ke}),ze.push([Te+x,We+p,ve,Ee]);Z>=0&&l.push({kind:z.kind,airlock:z.airlock,height:ke,edges:ze})});let Xe=new Set;for(let z of O.thickWalls||[])for(let Z=z.y;Z<z.y+z.height;Z++)for(let ue=z.x;ue<z.x+z.width;ue++)Xe.add(ue+","+Z);for(let z=-1;z<=me;z++)for(let Z=-1;Z<=$;Z++){if(B(Z,z)||z+p<0||z+p>=St||Z+x<0||Z+x>=St)continue;let ue=0;for(let ke=-1;ke<=1;ke++)for(let ze=-1;ze<=1;ze++)ue=Math.max(ue,J(Z+ze,z+ke));if(!ue)continue;let pe=((Z+x)*7+(z+p)*13)%3;T("rockFill",0,Z,z,1,1,{type:Xe.has(Z+","+z)?`h${ue}c`:`h${ue}v${pe}`,height:ue*at,variant:pe,concrete:Xe.has(Z+","+z)})}Xd(O,(z,Z,ue,pe=1,ke=1,ze={})=>T(z,0,Z,ue,pe,ke,ze));let P=H(8,8),b=(z,Z,ue)=>[z+x,Z+p,0,ue];return{squad:[b(21,8,1),b(22,8,1),b(21,9,1),b(22,9,1),b(21,10,1),b(22,10,1)],mech:[b(24,12,3)],aliens:[b(39,1,3),b(41,1,3),b(39,3,3),b(41,3,3),b(40,6,3),b(41,8,3),b(40,11,3),b(40,13,3)],extraction:P}}let ge,V=null,de=null,Me=null,Se=null;if(zt==="city"){let O=Yd({TILES:St,LEVEL_H:at,FLOOR:Ut,setFloor:g,setIndoor:_,setW:M,setN:R,object:T,building:v,stairRun:G,tiltrotor:H,block:F,surface:u,marking:f,floorStyle:m});ge=O.spawns,V=O.extraction,de=O.mission,Me=O.name,Se=O.caption}else if(zt==="big"){x=0,p=0,q(),x=tr,p=0,D(),x=0,p=tr,E(),x=tr,p=tr;let O=X();V=O.extraction,ge={squad:O.squad,mech:O.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(zt==="base"){let O=oe();V=O.extraction,ge={squad:O.squad,mech:O.mech,aliens:O.aliens}}else q(),ge=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:zt,TILE:U,TILES:St,LEVELS:jn,LEVEL_H:at,floor:i,offset:e,wallW:t,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:c,spawns:ge,extraction:V,concrete:h,blockedCells:d,gates:l,surface:u,marking:f,floorStyle:m,mission:de,caption:Se,name:Me||(zt==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":zt==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:zt==="big"||zt==="base"||zt==="city"}}var $d=((Number(qd.get("rot"))||0)%4+4)%4;function Jd(i,e){let t=i;for(let n=0;n<e;n++)t=Hx(t,n+1);return t}function Hx(i,e){let t=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(l,h)=>l.map(d=>d.map(u=>u.map(()=>h))),s=(l,h)=>{let d=n(l,h);for(let u=0;u<l.length;u++)for(let f=0;f<t;f++)for(let m=0;m<t;m++)d[u][m][t-1-f]=l[u][f][m];return d},r=n(i.wallW,null),o=n(i.wallN,null);for(let l=0;l<i.wallW.length;l++)for(let h=0;h<=t;h++)for(let d=0;d<=t;d++){let u=i.wallW[l][h][d];u&&h<t&&(o[l][d][t-1-h]=u);let f=i.wallN[l][h][d];f&&d<t&&(r[l][d][t-h]=f)}let a=([l,h,...d])=>[t-1-h,l,...d],c=i.objects.map(l=>{let h={col:t-l.row-l.rows,row:l.col,cols:l.rows,rows:l.cols};if(l.kind==="rockFill")return{...l,...h};let d=l.source||l;return{...l,...h,source:d,turns:e}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:c,blockedCells:i.blockedCells.map(([l,h,d])=>[l,t-1-d,h]),gates:(i.gates||[]).map(l=>({...l,edges:l.edges.map(([h,d,u,f])=>u==="W"?[t-1-d,h,"N",f]:[t-d,h,"W",f])})),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(l=>l.circle?{...l,circle:[t*i.TILE-l.circle[1],l.circle[0],l.circle[2]]}:{...l,rect:[t*i.TILE-l.rect[3],l.rect[0],t*i.TILE-l.rect[1],l.rect[2]]}),viewTurns:e}}var aa=class extends Ui{constructor(e=null){super();let t=new gt;t.deleteAttribute("uv");let n=new He({side:cn}),s=new He,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new zr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new be(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new be(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new be(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new be(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new be(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new be(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new be(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let m=new be(t,nr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let x=new be(t,nr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let p=new be(t,nr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let g=new be(t,nr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new be(t,nr(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let y=new be(t,nr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function nr(i){let e=new rs;return e.color.setScalar(i),e}function ft(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Z2=ft(20261121);var gn=new Uint8Array(512);{let i=ft(7),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)gn[t]=e[t&255]}var al=i=>i*i*i*(i*(i*6-15)+10),ds=(i,e,t)=>i+(e-i)*t;function Oi(i,e,t,n){let s=i&15,r=s<8?e:t,o=s<4?t:s===12||s===14?e:n;return(s&1?-r:r)+(s&2?-o:o)}function jd(i,e,t){let n=Math.floor(i)&255,s=Math.floor(e)&255,r=Math.floor(t)&255;i-=Math.floor(i),e-=Math.floor(e),t-=Math.floor(t);let o=al(i),a=al(e),c=al(t),l=gn[n]+s,h=gn[l]+r,d=gn[l+1]+r,u=gn[n+1]+s,f=gn[u]+r,m=gn[u+1]+r;return ds(ds(ds(Oi(gn[h],i,e,t),Oi(gn[f],i-1,e,t),o),ds(Oi(gn[d],i,e-1,t),Oi(gn[m],i-1,e-1,t),o),a),ds(ds(Oi(gn[h+1],i,e,t-1),Oi(gn[f+1],i-1,e,t-1),o),ds(Oi(gn[d+1],i,e-1,t-1),Oi(gn[m+1],i-1,e-1,t-1),o),a),c)}function Kd(i,e,t,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*jd(i*o,e*o,t*o),o*=2,r*=.5;return s}function Hi(i,e,t,n=5,s=0){let r=i*Math.PI*2,o=e*Math.PI*2,a=t/(Math.PI*2),c=0,l=.5,h=1;for(let d=0;d<n;d++)c+=l*jd(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,l*=.5;return c}function Qd(i){let e=document.createElement("canvas");return e.width=e.height=i,e}function yt(i,{srgb:e=!0,repeat:t=1}={}){let n=new Yo(i);return e&&(n.colorSpace=an),n.wrapS=n.wrapT=ns,n.repeat.set(t,t),n.anisotropy=8,n}function Bx(i,e,t=2){let n=Qd(e),s=n.getContext("2d"),r=s.createImageData(e,e),o=(a,c)=>i[(c+e)%e*e+(a+e)%e];for(let a=0;a<e;a++)for(let c=0;c<e;c++){let l=(o(c+1,a)-o(c-1,a))*t,h=(o(c,a+1)-o(c,a-1))*t,d=Math.hypot(l,h,1),u=(a*e+c)*4;r.data[u]=(-l/d*.5+.5)*255,r.data[u+1]=(h/d*.5+.5)*255,r.data[u+2]=(1/d*.5+.5)*255,r.data[u+3]=255}return s.putImageData(r,0,0),yt(n,{srgb:!1})}function Gx(i,e,t){let n=new Float32Array(i*i),s=Qd(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=c/i,h=a/i,d=e(l,h,c,a);n[a*i+c]=d;let[u,f,m]=t(l,h,d,c,a),x=(a*i+c)*4;o.data[x]=u,o.data[x+1]=f,o.data[x+2]=m,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var cl=i=>Math.max(0,Math.min(255,i));function Fr(i=3,e=[128,120,108]){let n=ft(i),{canvas:s,ctx:r,heights:o}=Gx(512,(a,c)=>{let l=Hi(a,c,6,6,i),h=Math.abs(Hi(a,c,14,3,i+9));return l*.8-Math.max(0,.06-h)*6},(a,c,l)=>{let h=Hi(a,c,20,3,i+3),d=.72+l*.55+(n()-.5)*.1,u=e[0]*d,f=e[1]*d,m=e[2]*d;return h>.22&&(u=u*.7+60,f=f*.75+75,m=m*.6+30),[cl(u),cl(f),cl(m)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:yt(s),normalMap:Bx(o,512,5)}}function ir(i="#ffb347",e=1,t="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=ft(e);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,t==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let c=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,c):s.lineTo(a,c)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let c=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,c,6),a+=c+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return yt(n)}var $2=new L(0,1,0);function ll(i,e,{flatten:t=.75,roughness:n=.35,detail:s=3}={}){let r=new cs(i,s),o=r.attributes.position,a=new L;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);let l=a.clone().normalize(),h=1+Kd(l.x*1.6+e,l.y*1.6,l.z*1.6-e,4)*n*2+Math.max(0,Kd(l.x*4+e,l.y*4,l.z*4,2))*.15;a.copy(l).multiplyScalar(i*h);let d=Math.floor((l.x*3+e)*1.3)*.02;a.y*=t,a.x+=d,o.setXYZ(c,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function Or(i,e){i.traverse(t=>{if(t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])"envMapIntensity"in n&&(n.envMapIntensity=e*(n.userData.envBoost||1))})}var eu=Math.SQRT1_2,tu=(i,e)=>new ye((i+e)*eu,(e-i)*eu);var cy=new ye(.75,-.66).normalize();var Hr=new L;function On(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Hr.copy(e),Hr[n]=0,Hr.normalize();let l=.5*o/(o+a),h=1-Hr.angleTo(i)/c;return Math.sign(Hr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var ca=class extends gt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,m=new L,x=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/f)){case 0:m.set(1,0,0),u[g+0]=On(m,c,"z","y",r,n),u[g+1]=1-On(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),u[g+0]=1-On(m,c,"z","y",r,n),u[g+1]=1-On(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),u[g+0]=1-On(m,c,"x","z",r,e),u[g+1]=On(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),u[g+0]=1-On(m,c,"x","z",r,e),u[g+1]=1-On(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),u[g+0]=1-On(m,c,"x","y",r,e),u[g+1]=1-On(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),u[g+0]=On(m,c,"x","y",r,e),u[g+1]=1-On(m,c,"y","x",r,t);break}}};var Wx=(i,e,t)=>new L(i,e,t),la=null;function iu(){if(la)return la;let i=(e,t=.75,n=.15,s={})=>new He({color:e,roughness:t,metalness:n,...s});return la={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new Fn({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},la}function tn(i){return i.castShadow=i.receiveShadow=!0,i}function we(i,e,t,n,s,r,o,a,c=0){let l=c>0?new ca(e,t,n,3,Math.min(c,e/2.1,t/2.1,n/2.1)):new gt(e,t,n),h=tn(new be(l,s));return h.position.set(r,o,a),i.add(h),h}function Ft(i,e,t,n,s,r,o,a="x",c=20,l=e){let h=tn(new be(new Lt(e,l,t,c),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function ha(i,e,t,n){let s=new $s(e.map(r=>Wx(...r)),!1,"catmullrom",.05);i.add(tn(new be(new Nr(s,e.length*8,t,8),n)))}function gi(i,e,t,n,s,r=.025){let o=new en;e.forEach(([l,h],d)=>{d===0?o.moveTo(-l,h):o.lineTo(-l,h)});let a=new mn(o,{depth:t-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let c=tn(new be(a,n));return c.position.x=s-t/2+r,i.add(c),c}function Br(i,e,t,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new en;e.forEach(([u,f],m)=>{m===0?a.moveTo(u,f):a.lineTo(u,f)});let c=n-t,l=new mn(a,{depth:c-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=l.attributes.position;for(let u=0;u<h.count;u++){let f=Math.min(1,Math.max(0,(h.getZ(u)+o)/c)),{scale:m,drop:x}=r(f);h.setX(u,h.getX(u)*m),h.setY(u,h.getY(u)-x*Math.max(0,h.getY(u)))}l.computeVertexNormals();let d=tn(new be(l,s));return d.position.z=t+o,i.add(d),d}function Xx(i,e,t,n=.03,s=0){let r=[],o=i/2,a=(c,l,h,d,u)=>{for(let f=0;f<=6;f++){let m=d+(u-d)*f/6;r.push([c+Math.cos(m)*h,l+Math.sin(m)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-t,s+e-t,t,0,Math.PI/2),a(-o+t,s+e-t,t,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function Gr(i,e,t,n,s,r){return Xx(i-r*2,e-r*2,Math.max(.01,t-r),Math.max(.01,n-r),s+r)}function Yx(i,e,t,n,s,r,o){let a=iu(),c=s*.58,l=.09,h=r/2,d=[new ye(c,-h)];for(let x=0;x<=6;x++){let p=-Math.PI/2+x/6*Math.PI/2;d.push(new ye(s-l+Math.cos(p)*l,-h+l+Math.sin(p)*l))}for(let x=0;x<=6;x++){let p=x/6*Math.PI/2;d.push(new ye(s-l+Math.cos(p)*l,h-l+Math.sin(p)*l))}d.push(new ye(c,h));let u=tn(new be(new os(d,36),a.rubber));u.rotation.z=Math.PI/2,u.position.set(e,t,n),i.add(u);let f=20;for(let x=0;x<f;x++){let p=x/f*Math.PI*2;for(let g of[-1,1])we(i,r*.36,.04,.075,a.rubber,e+g*r*.2,t+Math.cos(p)*(s+.005),n+Math.sin(p)*(s+.005),.015).rotation.set(p,g*.5,0)}let m=e+o*(h-.03);Ft(i,c,.05,a.hub,m,t,n,"x",28),Ft(i,s*.24,.08,a.hub,m+o*.04,t,n,"x",18),Ft(i,s*.12,.05,a.frame,m+o*.08,t,n,"x",12);for(let x=0;x<8;x++){let p=x/8*Math.PI*2;Ft(i,.018,.04,a.steel,m+o*.03,t+Math.cos(p)*s*.36,n+Math.sin(p)*s*.36,"x",6)}}var su={length:6.15,width:2.35};function ru(){let i=iu(),e=new xe,t=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let D of o)for(let E of[-1,1])Yx(e,E*s,t,D,t,n,E);for(let D of[-1,1])we(e,.12,.22,5.75,i.frame,D*.45,a-.11,3.1);for(let D of o){Ft(e,.065,s*2-.25,i.frame,0,t,D,"x",12);let E=new be(new Rn(.2,16,10),i.frame);E.scale.set(1.1,.9,.9),E.position.set(0,t,D),e.add(tn(E))}we(e,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let D of[-1,1]){let E=new be(new zi(.055,.018,6,12,Math.PI*1.4),i.frame);E.position.set(D*.6,.72,6.16),E.rotation.set(0,Math.PI/2,Math.PI*.8),e.add(tn(E))}we(e,.6,.24,.24,i.frame,0,.84,5.86,.06),Ft(e,.1,.48,i.steel,0,.88,5.86,"x",14);let c=4.72,l=6;Br(e,Gr(1.14,.78,.24,.02,.98,.03),c,l,i.olive,D=>({scale:1-.1*D,drop:.045*D*D}),.03),we(e,.03,.02,l-c-.1,i.oliveDark,0,1.755,(c+l)/2);for(let D of[-1,1])for(let E=0;E<6;E++){let H=we(e,.02,.2,.05,i.frame,D*.552,1.38,4.95+E*.11,.008);H.rotation.y=D*.15}Br(e,Gr(1,.68,.12,.04,1.02,.012),l-.02,l+.05,i.olive,void 0,.012);for(let D=-4;D<=4;D++)we(e,.045,.5,.04,i.frame,D*.09,1.34,l+.045,.012);let h=[],d=(D,E,H,X,oe)=>{let ge=[];for(let V=0;V<=20;V++){let de=H+(X-H)*V/20;ge.push([r+Math.cos(de)*D,t+Math.sin(de)*E])}return oe?ge.reverse():ge};h.push(...d(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...d(.92,.66,.2,2.75,!0).slice(0,-1));let u=[[r+Math.cos(2.75)*.92,t+Math.sin(2.75)*.66]];for(let D of[-1,1]){gi(e,h,.44,i.olive,D*.93,.03),we(e,.05,.45,1.05,i.oliveDark,D*.7,1,r+.05);let E=new be(new Rn(.12,18,12),i.olive);E.scale.set(1,1,.75),E.position.set(D*.83,1.13,5.86),e.add(tn(E)),Ft(e,.09,.02,i.lens,D*.83,1.13,5.95,"z",18);for(let H of[-.05,0,.05])we(e,.012,.2,.012,i.frame,D*.83+H,1.13,5.99);we(e,.07,.045,.04,i.amber,D*1,1.2,5.7,.01),we(e,.36,.4,.02,i.rubber,D*.93,.55,r-.82)}let f=4.74,m=3.62,x=(f+m)/2,p=f-m;we(e,1.3,.24,p-.1,i.frame,0,1.06,x),Br(e,Gr(2.18,.98,.1,.05,1,.05),m,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},_={z:f-.24,y:2.44},y=[[m+.02,1.95],[f-.02,1.95],[g.z,g.y]],M=2.6,R=.16,C=.24;for(let D=1;D<=10;D++){let E=D/10*Math.PI/2;y.push([_.z-C*(1-Math.cos(E)),_.y+(M-_.y)*Math.sin(E)])}for(let D=0;D<=8;D++){let E=D/8*Math.PI/2;y.push([m+.04+R-Math.sin(E)*R,M-R+Math.cos(E)*R])}gi(e,y,2.1,i.olive,0,.09);let I=Math.atan2(g.z-_.z,_.y-g.y),k=(g.z+_.z)/2+.1*Math.cos(I),T=(g.y+_.y)/2+.1*Math.sin(I);for(let D of[-1,1]){let E=we(e,.84,.44,.03,i.glass,D*.48,T,k,.02);E.rotation.x=-I,we(e,.03,.36,.6,i.glass,D*1.06,2.22,x+.02,.02),we(e,.03,.85,.02,i.oliveDark,D*1.1,1.55,x-.28),we(e,.03,.03,.12,i.steel,D*1.105,1.8,x-.16),ha(e,[[D*1.05,2,f-.1],[D*1.28,2.12,f],[D*1.31,2.34,f]],.014,i.frame),we(e,.04,.26,.16,i.frame,D*1.32,2.36,f,.015)}let v=we(e,.06,.46,.04,i.oliveDark,0,T,k+.01);v.rotation.x=-I,we(e,1.1,.28,.03,i.glass,0,2.22,m+.03,.02);for(let D of[-.25,0,.25])we(e,.07,.04,.05,i.amber,D,2.7,f-.4,.01);Ft(e,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let D of[2.75,3.35])we(e,.04,.58,.05,i.frame,.88,.78,D);we(e,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),ha(e,[[.55,1,m-.02],[.75,1.25,m-.08],[.78,2.65,m-.08]],.045,i.frame);let S=3.5,le=.12,K=S-le,N=(S+le)/2,F=1.1,G=2.08;we(e,2.08,.12,K,i.frame,0,F-.06,N),Br(e,Gr(2.35,G,.2,.05,F,.08),le,S,i.olive,void 0,.08);for(let D of[-1,1]){for(let E of[.88,1.78,2.68])we(e,.03,.44,.62,i.oliveDark,D*1.177,F+1.45,E,.03),we(e,.03,.34,.52,i.glass,D*1.186,F+1.45,E,.02);for(let E of[F+.38,F+1.02])we(e,.02,.03,K-.3,i.oliveDark,D*1.178,E,N);we(e,.3,.36,.5,i.oliveDark,D*1,F-.24,1.71,.05)}we(e,.86,1.75,.03,i.oliveDark,-.45,F+.92,le-.01,.03),we(e,.3,.26,.03,i.glass,-.45,F+1.45,le-.03,.02),we(e,.03,.03,.14,i.steel,-.1,F+.9,le-.05);for(let D of[-.75,-.15])we(e,.03,.9,.03,i.frame,D,F-.3,le-.12);for(let D=0;D<4;D++)we(e,.6,.025,.03,i.frame,-.45,F-.65+D*.22,le-.12);for(let D of[-1,1])we(e,.14,.08,.04,i.red,D*.95,.92,le-.02,.02),we(e,.4,.4,.02,i.rubber,D*.95,.58,.45);let q=F+G;for(let D of[-1,1])ha(e,[[D*.98,q-.02,.35],[D*.98,q+.14,.5],[D*.98,q+.14,3.05],[D*.98,q-.02,3.2]],.02,i.frame);for(let D of[.65,1.45,2.25,3])we(e,1.96,.025,.025,i.frame,0,q+.14,D);return we(e,1.2,.18,.9,i.canvas,-.2,q+.08,1.25,.08),we(e,.6,.55,.3,i.oliveDark,.55,q-.38,S+.16,.08),Ft(e,.12,.42,i.frame,.55,q+.12,S+.16,"y",16),Ft(e,.16,.04,i.oliveDark,.55,q+.34,S+.16,"y",16),Ft(e,.035,.9,i.frame,-.7,q+.38,S-.2,"y",8),Br(e,Gr(2.37,.16,.02,.05,F-.005,.01),le+.01,S-.01,i.dusty,void 0,.01),e}var Qn={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function qx(i){let e=i?{clippingPlanes:i,clipShadows:!0,side:$t}:{},t=(n,s=.7,r=.25,o={})=>new He({color:n,roughness:s,metalness:r,...e,...o});return{hull:t(4870469,.62,.3),hullDark:t(3554355,.66,.3),belly:t(7370092,.7,.25),panel:t(2830378,.6,.4),interior:t(9409933,.8,.15),floor:t(2764074,.85,.35),seat:t(4082230,.95,0),frame:t(1908508,.6,.6),steel:t(9212042,.35,.8),rubber:t(1710617,.95,0),yellow:t(13214234,.6,.1),glass:new Fn({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...e}),red:t(11540496,.4,.1,{emissive:5244933}),green:t(1089584,.4,.1,{emissive:342544}),white:t(15263968,.4,.1,{emissive:3158064})}}function Vr(i,e,t,n,s){let r=[],o=(a,c,l,h,d,u)=>{for(let f=0;f<=u;f++){let m=h+(d-h)*f/u;r.push([a+Math.cos(m)*l,c+Math.sin(m)*l])}};return o(i-s,e+s,s,-Math.PI/2,0,4),o(i-n,t-n,n,0,Math.PI/2,10),o(-i+n,t-n,n,Math.PI/2,Math.PI,10),o(-i+s,e+s,s,Math.PI,Math.PI*1.5,4),r}function hl(i,e,t,n,s,r,o=32,a=null){let c=new en;e.forEach(([m,x],p)=>{p===0?c.moveTo(m,x):c.lineTo(m,x)});let l=new mn(c,{depth:n-t,bevelEnabled:!1,steps:o,curveSegments:6}),h=l.attributes.position,d=a?a.bottom:Math.min(...e.map(m=>m[1])),u=a?a.top:Math.max(...e.map(m=>m[1]));for(let m=0;m<h.count;m++){let x=r(t+h.getZ(m));h.setX(m,h.getX(m)*x.scale),h.setY(m,x.bottom+(h.getY(m)-d)*(x.top-x.bottom)/(u-d))}l.computeVertexNormals();let f=tn(new be(l,s));return f.position.z=t,i.add(f),f}function Zx(i,e,t,n,s){let r=new xe,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([l,h])=>new ye(l,h));r.add(tn(new be(new os(o,56),e.hull)));let a=tn(new be(new zi(1.555,.03,6,56),e.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Ft(r,.3,.7,e.hullDark,0,0,0,"y",24);let c=tn(new be(new Rn(.3,20,10,0,Math.PI*2,0,Math.PI/2),e.steel));c.position.y=.35,r.add(c);for(let l=0;l<7;l++){let h=new xe;h.rotation.y=l*Math.PI*2/7+.2;let d=tn(new be(new gt(1.08,.03,.24),e.frame));d.position.x=.84,d.position.y=.12,d.rotation.x=.42,h.add(d),r.add(h)}for(let l=0;l<3;l++){let h=new xe;h.rotation.y=l*Math.PI*2/3;let d=tn(new be(new gt(1.1,.12,.05),e.hullDark));d.position.x=.85,d.position.y=-.2,h.add(d),r.add(h)}return Ft(r,.16,.5,e.steel,-Math.sign(t)*1.7,0,0,"x",16),r.position.set(t,n,s),i.add(r),r}function $x(i,e,t,n,s,r,o,a){let c=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,d])=>[o+h,r+d]),l=s-n;gi(i,c,l,e.hull,t*(n+l/2),.03)}function ou({cutaway:i=!1,rampOpen:e=!0}={}){let t=i?[new qn(new L(0,-1,0),3)]:null,n=qx(t),s=new xe,r=new xe;s.name="floor",r.name="back";let o=new xe;o.name="shell";let a=2.8,c=.25,l=5,h=Qn.floor,d=Qn.cabin;we(s,a*2,h-c,d.front-d.rear,n.belly,0,(h+c)/2,(d.front+d.rear)/2,.12).userData.solid=!0,we(s,d.right-d.left-.02,.03,d.front-d.rear,n.floor,0,h+.015,(d.front+d.rear)/2);let u=3.5,f=u-c-.12,m=c+.12+f/2;we(o,a-d.right,f,d.front-d.rear,n.hull,-(a+d.right)/2,m,(d.front+d.rear)/2);let x=Qn.sideDoor,p=(a+d.right)/2;we(o,a-d.right,f,x.rear-d.rear,n.hull,p,m,(x.rear+d.rear)/2),we(o,a-d.right,f,d.front-x.front,n.hull,p,m,(d.front+x.front)/2);let g=h+x.height;we(o,a-d.right,u-g,x.front-x.rear,n.hull,p,(u+g)/2,(x.rear+x.front)/2),we(o,a-d.right,h-c-.12,x.front-x.rear,n.hull,p,(h+c+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([B])=>we(o,.36,x.height+.1,.08,n.hullDark,p,h+x.height/2,B)),we(o,.36,.08,x.front-x.rear+.08,n.hullDark,p,g,(x.rear+x.front)/2);let _=Vr(a,c,l,1.3,.3).filter(([,B])=>B>=u-.001),y=Vr(d.right,h,d.ceiling,.9,.01).filter(([,B])=>B>=u-.001).reverse(),M=[[a,u]].concat(_,[[-a,u],[d.left,u]],y,[[d.right,u]]),R=new mn(new en(M.map(([B,J])=>new ye(B,J))),{depth:d.front-d.rear,bevelEnabled:!1,curveSegments:4}),C=tn(new be(R,n.hull));C.position.z=d.rear,o.add(C);let I=Vr(a+.04,c+.1,l+.04,1.32,.3),k=Vr(d.right-.03,h+.02,d.ceiling-.03,.87,.01),T=new en(I.map(([B,J])=>new ye(B,J)));T.holes.push(new Js(k.slice().reverse().map(([B,J])=>new ye(B,J))));let v=tn(new be(new mn(T,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));v.position.z=d.rear,v.userData.hollow=!0,o.add(v),v.castShadow=v.receiveShadow=!1;let S=d.front,le=Qn.length,K=le-S,N=(B,J,se)=>{let _e=Math.min(1,Math.max(0,(se-B)/(J-B)));return _e*_e*(3-2*_e)},F=B=>{let J=(B-S)/K;return{scale:1-.1*N(.25,.65,J)-.55*Math.pow(N(.55,1,J),1.3),top:l-2*N(.18,.66,J)-1.45*Math.pow(N(.62,1,J),1.4),bottom:c+.85*Math.pow(N(.5,1,J),1.6)}},G=Vr(a,c,l,1.3,.3);hl(o,G,S,le,n.hull,F,40);let q=(()=>{let B=G.filter(([,_e])=>_e>=2.85),J=[0,2.6],se=(_e,Pe)=>{let Xe=Math.hypot(_e[0]-J[0],_e[1]-J[1]);return[_e[0]+(_e[0]-J[0])/Xe*Pe,_e[1]+(_e[1]-J[1])/Xe*Pe]};return B.map(_e=>se(_e,.035)).concat(B.slice().reverse().map(_e=>se(_e,-.01)))})(),D=S+K*.2,E=S+K*.7;hl(o,q,D,E,n.glass,F,24,{bottom:c,top:l});let H=q.map(([B,J])=>[B*1.004,J+.004]);hl(o,H,D+(E-D)*.45,D+(E-D)*.45+.1,n.hullDark,F,2,{bottom:c,top:l}),we(r,d.right-d.left,d.ceiling-h,.08,n.interior,0,(d.ceiling+h)/2,d.front-.04);let X=Qn.cockpitDoor;we(r,X.right-X.left-.2,X.height,.06,n.hullDark,(X.left+X.right)/2,h+X.height/2,d.front-.09),we(r,.25,.25,.05,n.glass,(X.left+X.right)/2,h+1.6,d.front-.13),[-1,1].forEach(B=>{we(o,.5,1,4,n.hullDark,B*(a+.2),.85,7.4,.2),[6,8.8].forEach(J=>{Ft(o,.07,.5,n.steel,B*(a+.2),.45,J,"y",10),Ft(o,.27,.22,n.rubber,B*(a+.2),.27,J,"x",20)})}),Ft(o,.07,.4,n.steel,0,.35,13.6,"y",10),Ft(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let oe=new xe,ge=Math.hypot(Qn.ramp.to-Qn.ramp.from,h);we(oe,d.right-d.left,.12,ge,n.hullDark,0,-.06,-ge/2);for(let B=0;B<9;B++)we(oe,d.right-d.left-.3,.025,.05,n.frame,0,.012,-.2-B*(ge-.4)/8);[-1,1].forEach(B=>we(oe,.06,.18,ge,n.yellow,B*(d.right-.03),.09,-ge/2)),oe.position.set(0,h,d.rear),oe.rotation.x=e?-Math.atan2(h,Qn.ramp.to-Qn.ramp.from):Math.PI/2-.15,s.add(oe);let V=a+.55,de=x.front-x.rear-.15;for(let B=0;B<3;B++){let J=h-(B+1)*h/3.2;we(s,.36,.05,de,n.steel,a+.15+B*.32,J,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(B=>ha(o,[[a+.05,h+.95,B],[a+.5,h+.7,B],[V+.4,.75,B]],.025,n.steel)),[-1,1].forEach(B=>we(B<0?r:o,.03,2.9,d.front-d.rear-.2,n.interior,B*(d.right-.015),h+1.6,(d.front+d.rear)/2));let Me=Qn.cells.cell,Se=B=>d.front-(B-.5)*Me;Qn.seats.forEach(([B,J])=>{let se=B==="A"?-1:1,_e=se*(d.right-.35),Pe=Se(J);we(s,.5,.1,.9,n.seat,_e,h+.48,Pe,.03),we(s,.1,.75,.9,n.seat,se*(d.right-.08),h+.95,Pe,.03),we(s,.04,.45,.04,n.frame,_e-se*.2,h+.22,Pe-.38),we(s,.04,.45,.04,n.frame,_e-se*.2,h+.22,Pe+.38),we(s,.03,.6,.06,n.yellow,se*(d.right-.05),h+1,Pe-.25)});let O=-Me,$=Me,me=Se(2)-Me/2,fe=d.front;[[O,me,$,me],[O,me,O,fe-.1],[$,me,$,fe-.1]].forEach(([B,J,se,_e])=>{we(s,Math.max(.08,Math.abs(se-B)),.012,Math.max(.08,Math.abs(_e-J)),n.yellow,(B+se)/2,h+.036,(J+_e)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([B,J])=>Ft(s,.07,.03,n.steel,B,h+.045,J,"y",12)),[-1,1].forEach(B=>{let J=gi(o,[[2.55,l-.25],[4.9,l-.25],[3.55,l+1.35],[2.75,l+1.4]],.16,n.hull,0,.04);J.rotation.z=B*-.18,J.position.x+=B*1.55,we(o,.06,.06,.06,B<0?n.red:n.green,B*1.82,l+1.38,2.85)}),we(o,2.2,.5,4.2,n.hullDark,0,l+.12,7.3,.22),[-.6,.6].forEach(B=>we(o,.6,.12,.8,n.frame,B,l+.38,6,.04)),we(o,.08,.06,.08,n.white,0,l+.4,9.2);let w=a+.35+1.5,ne=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([B,J])=>{[-1,1].forEach(se=>{$x(o,n,se,a-.1,w-1.45,ne,B,J),Zx(o,n,se*w,ne,B)})}),[-1,1].forEach(B=>{we(o,.02,.08,2.4,n.yellow,B*(a+.01),2.9,7.4),we(o,.02,.4,.4,n.white,B*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(B=>{if(!B.isMesh)return;let J=new Jn().setFromObject(B).getSize(new L);Math.min(J.x,J.y,J.z)>=.12&&!B.userData.hollow&&(B.userData.solid=!0)});let Q=new xe;return Q.add(s,r,o),Q}var da={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},nu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function Jx(i,e,t,n,s,r,o,a){let c=Ft(i,r,o,e.rubber,t,n,s,"x",28);Ft(i,r*.62,o+.01,e.rim,t+a*.005,n,s,"x",20),Ft(i,r*.2,o+.03,e.frame,t+a*.01,n,s,"x",12)}function au({type:i="suv",color:e="white",seed:t=1}={}){let n=da[i],s=(u,f=.45,m=.35,x={})=>new He({color:u,roughness:f,metalness:m,...x}),r={body:s(nu[e]||nu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new Fn({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new xe,a=n.width,c=n.length,l=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){gi(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),gi(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),gi(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let u of[[.26,.3],[1.6,1.68],[3.2,3.3]])we(o,a-.16,.62,u[1]-u[0]+.05,r.body,0,1.39,(u[0]+u[1])/2+(u[0]>3?.08:0));for(let u of[-1,1])we(o,.05,.05,2.2,r.trim,u*(a/2-.2),1.83,1.6)}else gi(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),gi(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),we(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,we(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),we(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);we(o,a+.04,.22,.18,r.trim,0,h+.3,c-.04,.05),we(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let u of[-1,1])we(o,.32,.12,.05,r.lamp,u*(a/2-.3),.9,c+.005,.02),we(o,.18,.26,.05,r.tail,u*(a/2-.15),i==="van"?1.2:.95,-.005,.02),we(o,.06,.12,.2,r.trim,u*(a/2+.06),i==="van"?1.75:1.2,c-(i==="van"?1.35:1.15),.02);we(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,c+.01,.02);let d=i==="van"?[.95,4.15]:[.9,3.8];for(let u of d)for(let f of[-1,1])Jx(o,r,f*(a/2-.12),l,u,l,.26,f);if(we(o,a+.02,.08,c-.3,r.dust,0,h+.12,c/2),e==="police"){let u=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),m=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])we(o,.02,.16,c-.8,u,x*(a/2+.005),.78,c/2);we(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,c*.45),we(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,c*.45),we(o,.45,.12,.26,m,.3,i==="van"?2.3:1.95,c*.45)}return o}var sr=i=>Math.max(0,Math.min(255,Math.round(i)));function Hn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Wr(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Hn(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let f=(l(u+1,d)-l(u-1,d))*e,m=(l(u,d+1)-l(u,d-1))*e,x=Math.hypot(f,m,1),p=(d*n+u)*4;c.data[p]=(-f/x*.5+.5)*255,c.data[p+1]=(m/x*.5+.5)*255,c.data[p+2]=(1/x*.5+.5)*255,c.data[p+3]=255}return a.putImageData(c,0,0),yt(o,{srgb:!1})}function rr(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:c=0}={}){let l=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=u/e,m=d/t,x=Hi(f,m,a,4,s)*o,p=c?Math.max(0,Hi(f*7,.3,30,2,s+3))*c*(1-m):0,g=1+x-p+(l()-.5)*r/255,_=(d*e+u)*4;h.data[_]=sr(n[0]*g),h.data[_+1]=sr(n[1]*g),h.data[_+2]=sr(n[2]*g),h.data[_+3]=255}i.putImageData(h,0,0)}function cu(i,e){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,c=Hn(512,936),l=c.getContext("2d"),h=Hn(512,936),d=h.getContext("2d");rr(l,512,936,r.base,{seed:11+e*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),d.fillStyle="#808080",d.fillRect(0,0,512,936);let u=ft(31+e*13+i.length);l.fillStyle=`rgb(${r.band.join(",")})`,l.fillRect(0,a(.3),512,.3*o),l.fillStyle=`rgb(${r.stripe.join(",")})`,l.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),d.fillStyle="#9a9a9a",d.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],m=a(1.22);l.fillStyle="rgba(30,32,34,0.75)",d.fillStyle="#202020";for(let g of f)l.fillRect(g-2,0,4,936),d.fillRect(g-2,0,4,936);l.fillRect(0,m-2,512,3),d.fillRect(0,m-2,512,3),l.fillStyle="rgba(255,255,255,0.25)";for(let g of f)l.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let _=30;_<a(.32);_+=54)for(let y of[-9,9])l.fillStyle="rgba(60,62,64,0.8)",l.beginPath(),l.arc(g+y,_,2.6,0,Math.PI*2),l.fill(),d.fillStyle="#c8c8c8",d.beginPath(),d.arc(g+y,_,2.6,0,Math.PI*2),d.fill();if(i!=="inner"&&e===1){let _=a(1.95),y=512*.3;for(let M=0;M<7;M++)l.fillStyle="rgba(28,30,32,0.85)",l.fillRect(296.96,_+M*11,y,6),d.fillStyle="#303030",d.fillRect(296.96,_+M*11,y,6)}i!=="inner"&&e===2&&(l.fillStyle="rgba(40,44,46,0.9)",l.fillRect(512*.12,a(1.75),512*.22,.18*o),l.fillStyle="rgba(230,180,60,0.9)",l.font="bold 26px Arial",l.fillText("N8",512*.14,a(1.62)),d.fillStyle="#a8a8a8",d.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=l.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),l.fillStyle=x,l.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let _=u()*512,y=40+u()*300,M=l.createLinearGradient(0,0,0,y);M.addColorStop(0,"rgba(50,46,40,0.22)"),M.addColorStop(1,"rgba(50,46,40,0)"),l.fillStyle=M,l.fillRect(_,0,2+u()*5,y)}let p=yt(c);return p.wrapS=p.wrapT=Qt,{map:p,normalMap:Wr(h,4,!1)}}function lu(){let e=Hn(512,512),t=e.getContext("2d"),n=Hn(512,512),s=n.getContext("2d");rr(t,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=ft(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let c=(a+o)/16%2?.8:-.8;t.save(),t.translate(a,o),t.rotate(c),t.fillStyle="rgba(160,166,166,0.5)",t.fillRect(-5,-1.2,10,2.4),t.restore(),s.save(),s.translate(a,o),s.rotate(c),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}t.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])t.fillRect(o-1.5,0,3,512),t.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){t.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,t.lineWidth=.8;let a=r()*512,c=r()*512,l=r()*Math.PI,h=6+r()*30;t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(l)*h,c+Math.sin(l)*h),t.stroke()}return{map:yt(e),normalMap:Wr(n,3)}}function hu(){let e=Hn(512,512),t=e.getContext("2d"),n=Hn(512,512),s=n.getContext("2d");rr(t,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),t.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])t.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=ft(29);for(let o=0;o<60;o++){let a=r()*512,c=r()*512,l=10+r()*50,h=t.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),t.fillStyle=h,t.fillRect(a-l,c-l,l*2,l*2)}return{map:yt(e),normalMap:Wr(n,2)}}function du(){let e=Hn(256,256),t=e.getContext("2d"),n=Hn(256,256),s=n.getContext("2d");rr(t,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)t.fillStyle="rgba(18,18,20,0.88)",t.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:yt(e),normalMap:Wr(n,3)}}function uu(i=3){let n=Hn(512,256),s=n.getContext("2d"),r=Hn(512,256),o=r.getContext("2d");rr(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=ft(i+5);for(let c=0;c<512;c++){let l=.5+.5*Math.sin(c/512*Math.PI*2*24);o.fillStyle=`rgb(${sr(l*255)},${sr(l*255)},${sr(l*255)})`,o.fillRect(c,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-l)*.18})`,s.fillRect(c,0,1,256)}for(let c=0;c<50;c++){let l=a()*512,h=a()*256,d=4+a()*22,u=s.createRadialGradient(l,h,0,l,h,d);u.addColorStop(0,"rgba(90,44,20,0.45)"),u.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=u,s.fillRect(l-d,h-d,d*2,d*2)}return{map:yt(n),normalMap:Wr(r,5)}}function fu(i=7){let t=Hn(256,256),n=t.getContext("2d");return rr(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:yt(t)}}var pu=1.25,dt=.09,dl=new Map,ln=(i,e)=>(dl.has(i)||dl.set(i,e()),dl.get(i));function Kx(i,e){return ln("brushed"+i+(e?"v":"h"),()=>{let n=ft(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let c=0;c<900;c++){let l=n()*256,h=20+n()*200,d=n()*256,u=n();o.fillStyle=`rgba(${u>.5?230:150},${u>.5?232:154},${u>.5?236:158},0.10)`,a.fillStyle=`rgba(${u>.5?140:50},${u>.5?140:50},${u>.5?140:50},0.25)`,e?(o.fillRect(l,d,1,h),a.fillRect(l,d,1,h)):(o.fillRect(d,l,h,1),a.fillRect(d,l,h,1))}return{map:yt(s,{repeat:1}),roughnessMap:yt(r,{srgb:!1,repeat:1})}})}var ul=(i,e)=>(i.userData.envBoost=e,i),mu=(i=!1)=>ln("galleySteel"+i,()=>{let e=Kx(i?11:7,i),t=new He({color:15791094,map:e.map,roughnessMap:e.roughnessMap,roughness:.5,metalness:.6});return t.userData.envBoost=3.2,t}),Le={steel:()=>mu(!1),steelVertical:()=>mu(!0),steelDark:()=>ln("galleySteelDark",()=>ul(new He({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>ln("galleyGroove",()=>new He({color:2764080,roughness:.6,metalness:.5})),plinth:()=>ln("galleyPlinth",()=>new He({color:2040357,roughness:.8,metalness:.2})),castIron:()=>ln("galleyIron",()=>new He({color:1842463,roughness:.75,metalness:.35})),knob:()=>ln("galleyKnob",()=>new He({color:1118740,roughness:.35,metalness:.3})),glass:()=>ln("galleyGlass",()=>new He({color:790290,roughness:.1,metalness:.4})),basin:()=>ln("galleyBasin",()=>ul(new He({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>ln("galleyChrome",()=>ul(new He({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>ln("galleyWhite",()=>new He({color:15263972,roughness:.5,metalness:.05})),display:()=>ln("galleyDisplay",()=>new He({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>ln("galleyLamp",()=>new He({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>ln("galleyRubber",()=>new He({color:1382170,roughness:.9})),red:()=>ln("galleyRed",()=>new He({color:11019292,roughness:.45,metalness:.3})),floor:()=>ln("galleyFloor",()=>{let e=ft(5),t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let c=0;c<s;c++){let l=214+Math.floor(e()*10);n.fillStyle=`rgb(${l},${l-2},${l-8})`,n.fillRect(c*r+3,a*r+3,r-6,r-6)}let o=yt(t,{repeat:1});return new He({map:o,roughness:.35,metalness:0})})};function Fe(i,e,t,n,s,r,o){let a=new be(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Xr(i,e,t,n,s,r,o=12){let a=new be(new Lt(i,i,e,o),t);return a.position.set(n,s,r),a}function us(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var Ye=.9,En=.66,gu=dt+En;function jx(i,e,t,n){let s=t-e,r=(e+t)/2;i.add(Fe(s-.01,.1,En-.06,Le.plinth(),r,.05,dt+(En-.06)/2)),i.add(Fe(s-.01,Ye-.14,En-.02,Le.steelVertical(),r,.1+(Ye-.14)/2,dt+(En-.02)/2));let o=Ye-.06,a=.12,c=dt+En-.01,l=(u,f,m)=>i.add(Fe(m?.12:.03,m?.03:.12,.012,Le.groove(),u,f,c+.002)),h=u=>i.add(Fe(.006,o-a,.006,Le.groove(),u,(o+a)/2,c+.002)),d=(u,f,m)=>i.add(Fe(m-f,.006,.006,Le.groove(),(f+m)/2,u,c+.002));if(d(o,e,t),n==="drawers"){for(let f=1;f<3;f++)d(a+(o-a)*f/3,e+.01,t-.01);for(let f=0;f<3;f++)l(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),l(r-.05,o-.08,!1),l(r+.05,o-.08,!1)):n==="mixed"&&(d(o-.18,e+.01,t-.01),l(r,o-.07,!0),h(r),l(r-.05,o-.28,!1),l(r+.05,o-.28,!1));i.add(Fe(s,.04,En+.02,Le.steel(),r,Ye-.02,dt+(En+.02)/2)),i.add(Fe(s,.05,.015,Le.steel(),r,Ye-.035,gu+.012)),i.add(Fe(s,.1,.02,Le.steel(),r,Ye+.05,dt+.01))}function xu(i,e,t,n){i.add(Fe(t-e,n-Ye,.012,Le.steelVertical(),(e+t)/2,(Ye+n)/2,dt+.006));for(let s=e+.6;s<t-.05;s+=.6)i.add(Fe(.005,n-Ye,.004,Le.groove(),s,(Ye+n)/2,dt+.013))}function Qx(i,e,t){let o=(e+t)/2;i.add(Fe(t-e-.01,2.15-1.5,.34,Le.steelVertical(),o,(1.5+2.15)/2,dt+.34/2)),i.add(Fe(.006,2.15-1.5-.02,.006,Le.groove(),o,(1.5+2.15)/2,dt+.34+.002));for(let a of[-1,1])i.add(Fe(.03,.1,.012,Le.groove(),o+a*.05,1.5+.1,dt+.34+.004));i.add(Fe(t-e-.1,.012,.04,Le.lamp(),o,1.5-.007,dt+.34-.05))}function e2(i,e,t){let n=t?[e-.2,e+.2]:[e];for(let a of n){i.add(Fe(t?.36:.5,.012,.42,Le.basin(),a,Ye-.14,dt+.36));for(let c of[-1,1])i.add(Fe(.012,.14,.42,Le.basin(),a+c*(t?.18:.25),Ye-.07,dt+.36));i.add(Fe(t?.36:.5,.14,.012,Le.basin(),a,Ye-.07,dt+.15)),i.add(Fe(t?.36:.5,.14,.012,Le.basin(),a,Ye-.07,dt+.57)),i.add(Xr(.025,.004,Le.groove(),a,Ye-.132,dt+.36))}let s=e,r=dt+.08;i.add(Xr(.03,.06,Le.chrome(),s,Ye+.03,r)),i.add(us(new L(s,Ye+.06,r),new L(s,Ye+.48,r),.014,Le.chrome()));let o=new be(new zi(.12,.013,8,16,Math.PI),Le.chrome());o.rotation.y=Math.PI/2,o.position.set(s,Ye+.48,r+.12),i.add(o),i.add(us(new L(s,Ye+.48,r+.24),new L(s,Ye+.36,r+.24),.016,Le.chrome())),i.add(Fe(.012,.012,.08,Le.chrome(),s+.04,Ye+.1,r+.03))}function t2(i,e){let t=new xe,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(jx(t,.005,e-.005,s),xu(t,0,e,i.upper?1.5:1.45),i.upper&&Qx(t,.005,e-.005),(n==="sink"||n==="sink2")&&e2(t,e/2,n==="sink2"),n==="microwave"){let r=e/2,o=dt+.26;t.add(Fe(.52,.3,.38,Le.steel(),r,Ye+.15,o)),t.add(Fe(.33,.21,.01,Le.glass(),r-.07,Ye+.15,o+.19)),t.add(Fe(.1,.21,.01,Le.groove(),r+.18,Ye+.15,o+.19)),t.add(Fe(.05,.015,.012,Le.display(),r+.18,Ye+.24,o+.196))}if(n==="grinder"){let r=e/2-.1,o=dt+.3;t.add(Fe(.22,.24,.36,Le.steel(),r,Ye+.12,o)),t.add(Xr(.06,.2,Le.chrome(),r,Ye+.3,o+.06)),t.add(Fe(.26,.02,.22,Le.chrome(),r,Ye+.41,o+.06)),t.add(Fe(.04,.03,.03,Le.red(),r+.12,Ye+.08,o+.19));let a=e/2+.22;t.add(Fe(.16,.06,.26,Le.white(),a,Ye+.03,o)),t.add(Fe(.1,.3,.1,Le.white(),a,Ye+.18,o-.08)),t.add(Fe(.14,.08,.26,Le.white(),a,Ye+.36,o)),t.add(Xr(.08,.12,Le.chrome(),a,Ye+.12,o+.05))}return t}function n2(i,e){let t=new xe,n=e-.01,s=e/2;t.add(Fe(n,.1,En-.06,Le.plinth(),s,.05,dt+(En-.06)/2)),t.add(Fe(n,Ye-.1,En,Le.steelVertical(),s,.1+(Ye-.1)/2,dt+En/2));let r=gu+.004;t.add(Fe(n-.12,.46,.02,Le.steel(),s,.42,r+.01)),t.add(Fe(n-.34,.2,.01,Le.glass(),s,.44,r+.022)),t.add(us(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,Le.chrome()));for(let h of[-1,1])t.add(Fe(.015,.015,.05,Le.chrome(),s+h*(n-.3)/2,.66,r+.035));t.add(Fe(n-.06,.11,.02,Le.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let d=new be(new Lt(.022,.024,.03,14),Le.knob());d.rotation.x=Math.PI/2,d.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),t.add(d)}t.add(Fe(n,.02,En,Le.steelDark(),s,Ye-.01,dt+En/2));for(let[h,d]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){t.add(Xr(.07,.015,Le.castIron(),s+h,Ye+.007,dt+d,16));for(let u of[0,Math.PI/2]){let f=Fe(.3,.018,.018,Le.castIron(),s+h,Ye+.03,dt+d);f.rotation.y=u,t.add(f)}}xu(t,0,e,1.75);let a=1.78,c=2.25,l=.62;t.add(Fe(e+.1,c-a-.12,l,Le.steel(),s,c-(c-a-.12)/2,dt+l/2)),t.add(Fe(e+.1,.12,.03,Le.steel(),s,a+.06,dt+l-.015)),t.add(Fe(e-.06,.012,l-.08,Le.steelDark(),s,a+.01,dt+l/2));for(let h=0;h<9;h++)t.add(Fe(.012,.02,l-.14,Le.groove(),s-e*.4+e*.8*h/8,a+.02,dt+l/2-.02));for(let h of[-1,1])t.add(Fe(.14,.008,.06,Le.lamp(),s+h*e*.28,a+.004,dt+l-.08));return t}function i2(i,e){let t=new xe,n=e-.04,s=e/2,r=.72,o=2.02;t.add(Fe(n,.08,r-.06,Le.plinth(),s,.04,dt+(r-.06)/2)),t.add(Fe(n,o-.08,r,Le.steelVertical(),s,.08+(o-.08)/2,dt+r/2));let a=dt+r;t.add(Fe(n-.02,.006,.006,Le.groove(),s,1.25,a+.003)),t.add(Fe(.006,o-.12,.006,Le.groove(),s,.08+(o-.08)/2,a+.003));for(let c of[-1,1]){t.add(us(new L(s+c*.06,.95,a+.045),new L(s+c*.06,1.55,a+.045),.012,Le.chrome()));for(let l of[.95,1.55])t.add(Fe(.015,.015,.045,Le.chrome(),s+c*.06,l,a+.022))}return t.add(Fe(.16,.06,.01,Le.display(),s-n/4,1.82,a+.006)),t}function s2(i,e,t){let n=new xe,s=.2,r=e/2,o=t/2,a=e-s*2,c=t-s*2;n.add(Fe(a-.08,.1,c-.08,Le.plinth(),r,.05,o)),n.add(Fe(a,Ye-.14,c,Le.steelVertical(),r,.1+(Ye-.14)/2,o)),n.add(Fe(a+.06,.06,c+.06,Le.steel(),r,Ye-.06,o)),n.add(Fe(a-.04,.02,c-.04,Le.steelDark(),r,Ye-.025,o));let l=(a-.16)/2,h=(c-.16)/2;for(let m of[-1,1])for(let x of[-1,1]){let p=r+m*(l/2+.03),g=o+x*(h/2+.03);if(n.add(Fe(l,.035,h,Le.castIron(),p,Ye-.005,g)),m===x)for(let _=0;_<5;_++)n.add(Fe(l*.5,.004,.012,Le.groove(),p,Ye+.014,g-.08+_*.04))}let d=Ye+.06,u=.1,f=[[r-a/2-u,o-c/2-u],[r+a/2+u,o-c/2-u],[r+a/2+u,o+c/2+u],[r-a/2-u,o+c/2+u]];return f.forEach(([m,x],p)=>{let[g,_]=f[(p+1)%4];n.add(us(new L(m,d,x),new L(g,d,_),.016,Le.chrome())),n.add(us(new L(m,Ye-.05,x),new L(m,d+.03,x),.02,Le.chrome()));let y=new L(Math.sign(r-m)*u,0,Math.sign(o-x)*u);n.add(us(new L(m,Ye-.05,x),new L(m+y.x,Ye-.05,x+y.z),.015,Le.chrome()))}),n}function r2(i,e,t){let n=new xe,s=Le.floor().clone();s.map=s.map.clone(),s.map.repeat.set(e/1.2,t/1.2),s.map.needsUpdate=!0;let r=Fe(e-.02,.006,t-.02,s,e/2,.05,t/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,c,l]=i.drain;n.add(Fe(c-o,.004,l-a,Le.groove(),(o+c)/2,.055,(a+l)/2));let h=c-o>l-a,d=Math.floor((h?c-o:l-a)/.03);for(let u=0;u<d;u++){let f=(u+.5)/d;n.add(h?Fe(.008,.005,l-a-.01,Le.steelDark(),o+(c-o)*f,.058,(a+l)/2):Fe(c-o-.01,.005,.008,Le.steelDark(),(o+c)/2,.058,a+(l-a)*f))}}return n}function fl(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new xe;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new xe;return l.add(c),l}var yu=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function _u(i){let e=i.cols*pu,t=i.rows*pu;switch(i.kind){case"galleyCounter":return fl(i,e,t,t2);case"galleyRange":return fl(i,e,t,n2);case"galleyFridge":return fl(i,e,t,i2);case"galleyIsland":return s2(i,e,t);case"galleyFloor":return r2(i,e,t);default:return null}}var vu=1.25,pt=.09,pl=new Map,or=(i,e)=>(pl.has(i)||pl.set(i,e()),pl.get(i)),xt=(i,e,t)=>or(i,()=>{let n=new He(e);return t&&(n.userData.envBoost=t),n});function ml(i,e){return or("fabricTexture"+i+e,()=>{let n=ft(e),s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle=`rgb(${i})`,r.fillRect(0,0,128,128);for(let o=0;o<1400;o++){let a=n()<.5?255:0;r.fillStyle=`rgba(${a},${a},${a},${.03+n()*.04})`,r.fillRect(Math.floor(n()*128),Math.floor(n()*128),1+Math.floor(n()*2),1)}return yt(s,{repeat:2})})}function o2(){return or("woodTexture",()=>{let e=ft(17),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="rgb(150,112,74)",n.fillRect(0,0,256,256);for(let s=0;s<160;s++){let r=e()*256,o=e();n.fillStyle=`rgba(${o>.5?190:90},${o>.5?146:62},${o>.5?100:36},0.18)`,n.fillRect(0,r,256,1+e()*2)}return yt(t,{repeat:1})})}function a2(){return or("rubberTexture",()=>{let e=ft(23),t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="rgb(46,48,52)",n.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=e()<.12?"160,60,40":e()<.5?"70,72,76":"30,31,34";n.fillStyle=`rgba(${r},0.8)`,n.fillRect(Math.floor(e()*128),Math.floor(e()*128),2,2)}return yt(t,{repeat:2})})}var W={frame:()=>xt("fFrame",{color:6055018,roughness:.5,metalness:.5},1.5),steel:()=>xt("fSteel",{color:12896718,roughness:.35,metalness:.65},2.5),darkSteel:()=>xt("fDarkSteel",{color:3159354,roughness:.5,metalness:.5}),black:()=>xt("fBlack",{color:1447963,roughness:.6,metalness:.2}),white:()=>xt("fWhite",{color:15132902,roughness:.45,metalness:.05}),cream:()=>xt("fCream",{color:14209730,roughness:.6}),wood:()=>xt("fWood",{map:o2(),roughness:.55}),cabinetGrey:()=>xt("fCabinetGrey",{color:9344924,roughness:.55,metalness:.25}),olive:()=>xt("fOlive",{color:6121032,roughness:.7,metalness:.1}),blanket:i=>xt("fBlanket"+i,{map:ml(i,3),roughness:.95}),sheet:()=>xt("fSheet",{map:ml("226,228,224",5),roughness:.95}),upholstery:i=>xt("fUph"+i,{map:ml(i,9),roughness:.9}),glass:()=>xt("fGlass",{color:11061460,roughness:.05,metalness:.1,transparent:!0,opacity:.35}),tintedGlass:()=>xt("fTinted",{color:2111552,roughness:.1,metalness:.3}),ceramic:()=>xt("fCeramic",{color:15921902,roughness:.2,metalness:0},1.5),chrome:()=>xt("fChrome",{color:15265008,roughness:.15,metalness:.9},3),rubber:()=>xt("fRubber",{map:a2(),roughness:.95}),mat:()=>xt("fMat",{color:2772090,roughness:.85}),red:()=>xt("fRed",{color:11020832,roughness:.5,metalness:.2}),orange:()=>xt("fOrange",{color:14185514,roughness:.5,metalness:.2}),yellow:()=>xt("fYellow",{color:14200868,roughness:.5,metalness:.2}),green:()=>xt("fGreen",{color:3115602,roughness:.5}),leather:()=>xt("fLeather",{color:3811874,roughness:.6}),lamp:()=>xt("fLamp",{color:16774880,emissive:16773328,emissiveIntensity:1.3}),ledGreen:()=>xt("fLedGreen",{color:1060880,emissive:4259680,emissiveIntensity:1}),ledRed:()=>xt("fLedRed",{color:3149840,emissive:16724e3,emissiveIntensity:1}),liquid:()=>xt("fLiquid",{color:7002292,emissive:2792058,emissiveIntensity:.7,roughness:.08,metalness:.1,transparent:!0,opacity:.82}),specimen:()=>xt("fSpecimen",{color:6969928,roughness:.7}),screen:(i,e="text")=>or("fScreen"+i+e,()=>{let t=["#5fd0ff","#ffb347","#7dff9a","#ff6a5a"],n=ir(t[i%t.length],i+40,e);return new He({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.85})}),map:()=>or("fMapTable",()=>{let e=ft(31),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#071a24",n.fillRect(0,0,256,256),n.strokeStyle="rgba(80,200,255,0.25)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="rgba(90,220,140,0.55)";for(let r=0;r<7;r++)n.beginPath(),n.ellipse(e()*256,e()*256,20+e()*40,12+e()*30,e()*3,0,Math.PI*2),n.fill();n.fillStyle="#ff5a40";for(let r=0;r<5;r++)n.fillRect(e()*256,e()*256,5,5);let s=yt(t,{repeat:1});return new He({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.7})})};function te(i,e,t,n,s,r,o){let a=new be(new gt(i,e,t),n);return a.position.set(s,r,o),a}function _t(i,e,t,n,s,r,o=14,a=i){let c=new be(new Lt(a,i,e,o),t);return c.position.set(n,s,r),c}function Bt(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var st=(i,e,t)=>new L(i,e,t);function Yr(i,e,t,n,s="70,76,88"){i.add(te(.44,.06,.44,W.upholstery(s),e,.44,t)),i.add(te(.44,.42,.05,W.upholstery(s),e,.44+.24,t+n*(.44/2-.02)));for(let a of[-1,1])for(let c of[-1,1])i.add(te(.03,.44,.03,W.frame(),e+a*(.44/2-.03),.44/2,t+c*(.44/2-.03)))}function gl(i,e,t,n,s,r,o=W.wood()){i.add(te(n-e,.04,s-t,o,(e+n)/2,r-.02,(t+s)/2));for(let a of[e+.05,n-.05])for(let c of[t+.05,s-.05])i.add(te(.04,r-.04,.04,W.frame(),a,(r-.04)/2,c))}function Mu(i,e,t,n,s,r,o=1){i.add(te(s,s*.6,.04,W.black(),e,t+s*.3+.08,n)),i.add(te(s-.04,s*.6-.04,.01,W.screen(r),e,t+s*.3+.08,n+o*.022)),i.add(te(.04,.1,.04,W.black(),e,t+.04,n)),i.add(te(.18,.015,.14,W.black(),e,t+.008,n))}var Eu={bed(i,e,t){let n=new xe,s=Math.min(.95,e-.2),r=e/2,o=Math.min(2.05,t-.25),a=pt+.02;return n.add(te(s+.06,.9,.05,W.wood(),r,.45,a+.025)),n.add(te(s+.06,.55,.05,W.wood(),r,.275,a+o)),n.add(te(s,.18,o-.05,W.frame(),r,.25,a+o/2)),n.add(te(s-.04,.16,o-.08,W.sheet(),r,.42,a+o/2+.01)),n.add(te(s-.02,.06,o*.62,W.blanket(i.color||"64,82,110"),r,.52,a+o*.66)),n.add(te(s*.7,.1,.34,W.sheet(),r,.55,a+.25)),n},nightstand(i,e){let t=new xe,n=e/2,s=pt+.24;return t.add(te(.45,.55,.42,W.wood(),n,.275,s)),t.add(te(.12,.02,.01,W.darkSteel(),n,.44,s+.215)),t.add(_t(.05,.03,W.darkSteel(),n-.1,.565,s-.05)),t.add(Bt(st(n-.1,.57,s-.05),st(n-.1,.82,s-.05),.008,W.darkSteel())),t.add(_t(.09,.1,W.cream(),n-.1,.86,s-.05,12,.05)),t},wardrobe(i,e){let t=new xe,n=e-.15,s=e/2,r=pt+.3;t.add(te(n,2,.58,W.wood(),s,1,r)),t.add(te(.006,1.86,.006,W.black(),s,1,r+.293));for(let o of[-1,1])t.add(te(.02,.22,.02,W.chrome(),s+o*.05,1.1,r+.3));return t},cabinTable(i,e){let t=new xe,n=pt+.01;gl(t,.15,n,e-.15,n+.62,.74),t.add(te(e-.4,.03,.24,W.wood(),e/2,1.45,n+.12));for(let s of[e*.3,e*.7])Yr(t,s,n+.82,1);return t.add(te(.3,.22,.2,W.darkSteel(),e*.3,.85,n+.2)),t},deskChair(i,e){let t=new xe,n=pt+.01;return gl(t,.08,n,e-.08,n+.62,.74),Mu(t,e/2,.74,n+.18,.48,i.seed||1),t.add(te(.42,.02,.14,W.black(),e/2,.75,n+.42)),Yr(t,e/2,n+.86,1,"40,44,52"),t},safe(i,e){let t=new xe,n=e/2,s=pt+.26;return t.add(te(.55,.9,.5,W.olive(),n,.45,s)),t.add(_t(.06,.03,W.chrome(),n,.55,s+.26,16).rotateX(Math.PI/2)),t.add(te(.03,.12,.03,W.chrome(),n+.18,.45,s+.26)),t},sofa(i,e){let t=new xe,n=i.color||"96,68,52",s=pt+.02,r=.86;t.add(te(e-.1,.4,r,W.upholstery(n),e/2,.2,s+r/2)),t.add(te(e-.1,.5,.18,W.upholstery(n),e/2,.6,s+.09));for(let o of[.12,e-.12])t.add(te(.14,.62,r,W.upholstery(n),o,.31,s+r/2));for(let o=0;o<2;o++)t.add(te((e-.4)/2-.02,.1,r-.24,W.upholstery(n),.2+(e-.4)/4+o*(e-.4)/2,.45,s+r/2+.06));return t},diningTable(i,e,t){let n=new xe,s=t/2;gl(n,.3,s-.42,e-.3,s+.42,.75,W.cabinetGrey());for(let r of[e*.3,e*.7])Yr(n,r,s-.72,-1,"120,62,40"),Yr(n,r,s+.72,1,"120,62,40");return n.add(te(.2,.08,.2,W.white(),e/2,.79,s)),n},servingCounter(i,e){let t=new xe,n=pt+.35;t.add(te(e-.05,.9,.68,W.steel(),e/2,.45,n)),t.add(te(e-.05,.03,.3,W.chrome(),e/2,1.25,n+.1));for(let s of[.15,e-.15])t.add(Bt(st(s,.9,n+.2),st(s,1.25,n+.2),.01,W.chrome()));for(let s=0;s<Math.floor(e/.4);s++)t.add(te(.3,.04,.22,W.darkSteel(),.25+s*.4,.92,n-.05));return t},medBed(i,e,t){let n=new xe,s=e/2,r=Math.min(2.05,t-.25),o=pt+.12;n.add(te(.9,.06,r,W.white(),s,.5,o+r/2));for(let c of[-.38,.38])for(let l of[o+.1,o+r-.1])n.add(te(.04,.4,.04,W.chrome(),s+c,.28,l)),n.add(_t(.05,.04,W.black(),s+c,.05,l,10).rotateZ(Math.PI/2));n.add(te(.84,.12,r*.62,W.sheet(),s,.59,o+r*.62));let a=te(.84,.12,r*.36,W.sheet(),s,.72,o+r*.2);a.rotation.x=.45,n.add(a),n.add(te(.5,.09,.3,W.white(),s,.86,o+.22)),n.add(te(.74,.05,r*.5,W.blanket("120,160,190"),s,.67,o+r*.68));for(let c of[-1,1])n.add(te(.02,.2,r*.45,W.chrome(),s+c*.46,.7,o+r*.55));if(n.add(te(.94,.5,.04,W.white(),s,.75,o)),i.monitor!==!1){let c=e-.12;n.add(Bt(st(c,0,o+.1),st(c,1.5,o+.1),.02,W.chrome())),n.add(te(.3,.24,.08,W.white(),c,1.45,o+.15)),n.add(te(.26,.18,.01,W.screen(2,"wave"),c,1.45,o+.195)),n.add(Bt(st(c-.05,1.6,o+.1),st(c-.05,1.9,o+.1),.01,W.chrome())),n.add(te(.1,.16,.04,W.glass(),c-.05,1.82,o+.1))}return n},opTable(i,e,t){let n=new xe,s=e/2,r=t/2;return n.add(te(.6,.06,.5,W.darkSteel(),s,.03,r)),n.add(_t(.12,.75,W.steel(),s,.42,r)),n.add(te(.56,.1,1.95,W.steel(),s,.84,r)),n.add(te(.52,.06,1.9,W.upholstery("40,96,120"),s,.92,r)),n.add(Bt(st(e-.1,0,.2),st(e-.1,2.3,.2),.04,W.white())),n.add(Bt(st(e-.1,2.3,.2),st(s,2.15,r),.03,W.white())),n.add(_t(.32,.12,W.white(),s,2.1,r,20,.2)),n.add(_t(.28,.01,W.lamp(),s,2.035,r,20)),n},medCart(i,e){let t=new xe,n=e/2,s=pt+.35;t.add(te(.55,.9,.45,W.white(),n,.5,s));for(let r of[-.22,.22])for(let o of[-.18,.18])t.add(_t(.04,.04,W.black(),n+r,.04,s+o,8).rotateZ(Math.PI/2));for(let r=0;r<3;r++)t.add(te(.5,.005,.005,W.darkSteel(),n,.3+r*.22,s+.226));return Mu(t,n,.95,s-.05,.42,2),t.add(_t(.06,.4,W.green(),n+.2,1.15,s+.12,10)),t},showerCabin(i,e){let t=new xe,n=Math.min(.95,e-.2),s=e/2,r=pt+.02,o=r+n;t.add(te(n,.12,n,W.ceramic(),s,.06,(r+o)/2)),t.add(te(n,2,.02,W.white(),s,1,r+.01));for(let a of[-1,1])t.add(te(.012,1.9,n,W.glass(),s+a*n/2,1.07,(r+o)/2));t.add(te(n,1.9,.012,W.glass(),s,1.07,o));for(let a of[-1,1])t.add(te(.03,1.95,.03,W.chrome(),s+a*n/2,1.05,o));return t.add(Bt(st(s,.9,r+.05),st(s,1.95,r+.05),.012,W.chrome())),t.add(_t(.08,.02,W.chrome(),s,1.95,r+.14,14)),t.add(te(.08,.12,.04,W.chrome(),s,1.1,r+.04)),t},washbasin(i,e){let t=new xe,n=e/2,s=pt+.26;return t.add(te(.58,.16,.44,W.ceramic(),n,.8,s)),t.add(te(.46,.04,.32,W.chrome(),n,.86,s+.02)),t.add(te(.14,.7,.14,W.ceramic(),n,.36,s-.1)),t.add(Bt(st(n,.88,pt+.05),st(n,1.02,pt+.12),.012,W.chrome())),t.add(te(.5,.65,.02,W.chrome(),n,1.45,pt+.01)),t.add(te(.46,.6,.01,W.tintedGlass(),n,1.45,pt+.025)),t},toilet(i,e){let t=new xe,n=e/2,s=e-.1,r=pt,o=1;for(let a of[-1,1])t.add(te(.03,1.9,o,W.cabinetGrey(),n+a*s/2,1.07,r+o/2));return t.add(te(s-.06,1.75,.03,W.cabinetGrey(),n,1,r+o)),t.add(te(.03,.1,.03,W.chrome(),n+s/2-.15,1,r+o+.02)),t.add(te(.36,.36,.5,W.ceramic(),n,.2,r+.35)),t.add(te(.38,.4,.16,W.ceramic(),n,.6,r+.1)),t},washer(i,e){let t=new xe,n=e/2,s=pt+.32;for(let[r,o]of[[.43,1],[1.29,2]])t.add(te(.6,.84,.6,W.white(),n,r,s)),t.add(_t(.2,.02,W.tintedGlass(),n,r-.04,s+.305,18).rotateX(Math.PI/2)),t.add(_t(.23,.015,W.chrome(),n,r-.04,s+.3,18).rotateX(Math.PI/2)),t.add(te(.12,.04,.01,o===1?W.ledGreen():W.ledRed(),n+.18,r+.33,s+.305));return t},treadmill(i,e,t){let n=new xe,s=e/2,r=pt+.15,o=Math.min(1.9,t-.4);n.add(te(.8,.18,o,W.darkSteel(),s,.12,r+o/2+.1)),n.add(te(.56,.02,o-.2,W.black(),s,.22,r+o/2+.1));for(let a of[-1,1])n.add(Bt(st(s+a*.36,.2,r+.15),st(s+a*.34,1.3,r+.05),.03,W.frame())),n.add(Bt(st(s+a*.34,1,r+.1),st(s+a*.34,1,r+.6),.02,W.black()));return n.add(te(.72,.28,.12,W.black(),s,1.32,r+.08)),n.add(te(.4,.16,.01,W.screen(0,"wave"),s,1.34,r+.145)),n},exerciseBike(i,e){let t=new xe,n=e/2,s=.62;return t.add(te(.5,.05,.08,W.frame(),n,.03,s-.4)),t.add(te(.5,.05,.08,W.frame(),n,.03,s+.4)),t.add(te(.08,.06,.8,W.frame(),n,.06,s)),t.add(_t(.22,.08,W.darkSteel(),n,.32,s-.28,18).rotateZ(Math.PI/2)),t.add(Bt(st(n,.06,s-.3),st(n,1.05,s-.36),.03,W.frame())),t.add(te(.46,.04,.06,W.black(),n,1.07,s-.36)),t.add(te(.2,.12,.08,W.black(),n,1.16,s-.38)),t.add(Bt(st(n,.06,s+.3),st(n,.88,s+.16),.03,W.frame())),t.add(te(.24,.07,.3,W.black(),n,.92,s+.14)),t.add(_t(.12,.05,W.red(),n,.36,s-.02,14).rotateZ(Math.PI/2)),t},powerRack(i,e,t){let n=new xe,s=e-.3,r=Math.min(1.2,t-.3),o=(e-s)/2,a=(t-r)/2;for(let c of[o,o+s])for(let l of[a,a+r])n.add(te(.07,2.25,.07,W.black(),c,1.125,l));for(let c of[o,o+s])n.add(te(.07,.07,r,W.black(),c,2.22,a+r/2));for(let c of[a,a+r])n.add(te(s,.07,.07,W.black(),o+s/2,2.22,c));n.add(Bt(st(o-.35,1.35,a+.2),st(o+s+.35,1.35,a+.2),.016,W.chrome()));for(let c of[o-.22,o+s+.22])n.add(_t(.225,.05,W.black(),c,1.35,a+.2,20).rotateZ(Math.PI/2));return n.add(te(s-.1,.02,r-.1,W.rubber(),o+s/2,.01,a+r/2)),n},weightBench(i,e,t){let n=new xe,s=e/2,r=.3,o=Math.min(1.3,t-.6);n.add(te(.3,.08,o,W.leather(),s,.45,r+o/2+.2));for(let a of[r+.35,r+o])n.add(te(.06,.42,.06,W.black(),s,.21,a));n.add(te(.5,.04,.06,W.black(),s,.02,r+o));for(let a of[-1,1])n.add(te(.05,1.2,.05,W.black(),s+a*.42,.6,r+.15));n.add(Bt(st(s-.85,1.12,r+.15),st(s+.85,1.12,r+.15),.014,W.chrome()));for(let a of[-1,1])n.add(_t(.17,.04,W.black(),s+a*.6,1.12,r+.15,18).rotateZ(Math.PI/2));return n},dumbbellRack(i,e){let t=new xe,n=pt+.3;for(let s of[.1,e-.1])t.add(te(.05,.8,.45,W.black(),s,.4,n));for(let[s,r]of[[.45,0],[.75,0]]){t.add(te(e-.2,.03,.4,W.darkSteel(),e/2,s+r,n));let o=Math.floor((e-.3)/.22);for(let a=0;a<o;a++){let c=.25+a*.22,l=.05+a*.006;for(let h of[-.08,.08])t.add(_t(l,.05,W.black(),c,s+l+.02,n+h,10).rotateX(Math.PI/2));t.add(Bt(st(c,s+l+.02,n-.1),st(c,s+l+.02,n+.1),.012,W.chrome()))}}return t},gymMat(i,e,t){let n=new xe;return n.add(te(e-.1,.05,t-.1,W.mat(),e/2,.025,t/2)),n.add(te(e-.1,.006,.02,W.white(),e/2,.053,t/2)),n},punchingBag(i,e,t){let n=new xe,s=e/2,r=t/2;return n.add(te(.5,.05,.5,W.black(),s-.3,.025,r)),n.add(Bt(st(s-.45,0,r),st(s-.45,2.3,r),.035,W.black())),n.add(Bt(st(s-.45,2.25,r),st(s,2.25,r),.03,W.black())),n.add(Bt(st(s,2.25,r),st(s,1.75,r),.006,W.chrome())),n.add(_t(.17,1,W.red(),s,1.2,r,16)),n},gunRack(i,e){let t=new xe,n=pt+.22;t.add(te(e-.08,1.9,.04,W.olive(),e/2,.95,pt+.02)),t.add(te(e-.08,.5,.4,W.olive(),e/2,.25,n)),t.add(te(e-.1,.04,.3,W.darkSteel(),e/2,1.5,n-.03));for(let r of[.04,e-.04])t.add(te(.04,1.9,.42,W.olive(),r,.95,n));let s=Math.max(2,Math.floor((e-.2)/.16));for(let r=0;r<s;r++){let o=.15+r*(e-.3)/(s-1);t.add(te(.05,.85,.08,W.black(),o,.98,n)),t.add(te(.035,.22,.12,W.black(),o,.68,n+.04)),t.add(te(.03,.12,.05,W.darkSteel(),o,1.44,n+.04))}return t},fumeHood(i,e){let t=new xe,n=e/2,s=pt+.36;t.add(te(e-.1,.9,.7,W.cabinetGrey(),n,.45,s)),t.add(te(e-.1,.04,.72,W.black(),n,.92,s));for(let r of[-1,1])t.add(te(.04,1.05,.7,W.white(),n+r*(e/2-.07),1.45,s));return t.add(te(e-.1,.06,.7,W.white(),n,2,s)),t.add(te(e-.18,.02,.36,W.white(),n,1.97,s)),t.add(te(e-.2,.6,.012,W.glass(),n,1.55,s+.34)),t.add(te(.3,.45,.3,W.steel(),n,2.25,s-.12)),t.add(_t(.04,.2,W.yellow(),n-.2,1.04,s-.1,10,.03)),t.add(_t(.05,.14,W.glass(),n+.1,1.01,s,12)),t},bioCabinet(i,e){let t=new xe,n=e/2,s=pt+.38;for(let o of[-.42,.42])t.add(te(.05,.7,.6,W.frame(),n+o,.35,s));t.add(te(e-.12,1.15,.74,W.white(),n,1.28,s));let r=te(e-.22,.6,.01,W.glass(),n,1.3,s+.38);return r.rotation.x=-.18,t.add(r),t.add(te(e-.24,.02,.5,W.lamp(),n,1.62,s+.05)),t.add(te(.2,.06,.01,W.ledGreen(),n+.3,1.78,s+.375)),t},instrumentRack(i,e){let t=new xe,n=e/2,s=pt+.32;t.add(te(e-.15,1.85,.6,W.darkSteel(),n,.925,s));for(let r=0;r<5;r++){let o=.25+r*.33;t.add(te(e-.25,.28,.02,r%2?W.cabinetGrey():W.black(),n,o,s+.305)),t.add(te(.3,.16,.01,W.screen(r+(i.seed||0),r%2?"wave":"text"),n-.15,o,s+.317)),t.add(te(.03,.03,.01,r%3?W.ledGreen():W.ledRed(),n+.25,o+.06,s+.317))}return t},testRig(i,e,t){let n=new xe,s=e/2,r=t/2,o=e-.4,a=t-.5;n.add(te(o,.8,a,W.cabinetGrey(),s,.4,r)),n.add(te(o+.04,.05,a+.04,W.black(),s,.82,r)),n.add(_t(.42,.9,W.steel(),s,1.3,r,20)),n.add(_t(.44,.06,W.orange(),s,1.78,r,20)),n.add(_t(.12,.02,W.tintedGlass(),s,1.3,r+.43,16).rotateX(Math.PI/2));for(let c of[.6,2.2,4])n.add(Bt(st(s+Math.cos(c)*.4,1,r+Math.sin(c)*.4),st(s+Math.cos(c)*(o/2),.84,r+Math.sin(c)*(a/2)),.02,W.black()));return n.add(te(.5,.35,.3,W.black(),s+o/2-.3,1,r-a/2+.2)),n.add(te(.4,.22,.01,W.screen(1,"wave"),s+o/2-.3,1.02,r-a/2+.355)),n},specimenTank(i,e,t){let n=new xe,s=e/2,r=t/2;n.add(_t(.45,.3,W.darkSteel(),s,.15,r,20)),n.add(_t(.4,1.6,W.liquid(),s,1.1,r,20));for(let a of[.8,2.4,3.9,5.5])n.add(te(.03,1.65,.03,W.chrome(),s+Math.cos(a)*.42,1.12,r+Math.sin(a)*.42));n.add(_t(.45,.2,W.darkSteel(),s,2.03,r,20));let o=new be(new Rn(.22,14,10),W.specimen());o.scale.set(.8,1.6,.7),o.position.set(s,1.15,r),n.add(o);for(let a of[.5,2.6])n.add(Bt(st(s+Math.cos(a)*.3,2.1,r+Math.sin(a)*.3),st(s+Math.cos(a)*.3,2.45,r+Math.sin(a)*.3),.025,W.black()));return n.add(te(.1,.06,.01,W.ledGreen(),s,.2,r+.455)),n},freezer(i,e){let t=new xe,n=e/2,s=pt+.38;return t.add(te(e-.2,1.95,.72,W.white(),n,.975,s)),t.add(te(.03,.6,.03,W.chrome(),n+e/2-.2,1.1,s+.37)),t.add(te(.2,.08,.01,W.screen(0,"text"),n,1.75,s+.362)),t},commandTable(i,e,t){let n=new xe,s=e/2,r=t/2,o=e-.5,a=t-.5;return n.add(te(o-.2,.85,a-.2,W.darkSteel(),s,.425,r)),n.add(te(o,.06,a,W.black(),s,.88,r)),n.add(te(o-.1,.01,a-.1,W.map(),s,.915,r)),n},wallScreen(i,e){let t=new xe,n=e/2,s=pt+.08;return t.add(te(e-.2,1.1,.08,W.black(),n,1.55,s)),t.add(te(e-.3,1,.01,W.screen(i.seed||3,"wave"),n,1.55,s+.045)),t.add(te(e-.2,.75,.3,W.darkSteel(),n,.375,s+.12)),t},chairRow(i,e,t){let n=new xe,s=Math.max(1,Math.floor(e/.6)),r=t/2;n.add(te(e-.1,.05,.08,W.frame(),e/2,.06,r));for(let o=0;o<s;o++)Yr(n,(o+.5)*e/s,r,-1,"52,60,74");return n},bench(i,e,t){let n=new xe,s=t/2;n.add(te(e-.2,.05,.36,W.wood(),e/2,.45,s));for(let r of[.25,e-.25])n.add(te(.06,.43,.3,W.frame(),r,.215,s));return n},machineTool(i,e){let t=new xe,n=pt+.45,s=e/2;return t.add(te(e-.2,.85,.8,W.green(),s,.425,n)),t.add(te(e-.3,.06,.6,W.steel(),s,.88,n+.05)),t.add(te(.5,.55,.55,W.green(),.45,1.18,n-.05)),t.add(_t(.06,.3,W.chrome(),.85,1.05,n+.05,12).rotateZ(Math.PI/2)),t.add(te(.35,.3,.35,W.green(),e-.45,1.06,n)),t.add(te(e-.3,.45,.012,W.glass(),s,1.15,n+.38)),t.add(te(.28,.36,.1,W.black(),e-.2,1.4,n-.2)),t.add(te(.2,.14,.01,W.screen(1,"text"),e-.2,1.45,n-.145)),t.add(te(.1,.06,.04,W.red(),e-.2,1.25,n-.14)),t},repairStand(i,e,t){let n=new xe;n.add(te(e-.2,.01,t-.2,W.darkSteel(),e/2,.006,t/2));for(let s of[.12,t-.12])n.add(te(e-.2,.012,.1,W.yellow(),e/2,.012,s));for(let s of[.12,e-.12])n.add(te(.1,.012,t-.2,W.yellow(),s,.012,t/2));return n},shelf(i,e){let t=new xe,n=pt+.18,s=ft(i.col*31+i.row);for(let r of[.06,e-.06])t.add(te(.03,1.9,.34,W.wood(),r,.95,n));for(let r=0;r<5;r++){let o=.05+r*.45;if(t.add(te(e-.1,.03,.34,W.wood(),e/2,o,n)),r===4)continue;let a=.1;for(;a<e-.15;){let c=.04+s()*.05,l=.24+s()*.14,h=[W.red(),W.olive(),W.cabinetGrey(),W.yellow(),W.black()];t.add(te(c,l,.24,h[Math.floor(s()*h.length)],a+c/2,o+.015+l/2,n)),a+=c+.005}}return t}};function c2(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),c=new xe;a.position.set(-r/2,0,-o/2),c.add(a),c.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],c.position.set(e/2,0,t/2);let l=new xe;return l.add(c),l}var bu=new Set(Object.keys(Eu));function wu(i){let e=Eu[i.kind];return e?c2(i,i.cols*vu,i.rows*vu,e):null}var bn=i=>Math.max(0,Math.min(255,Math.round(i))),vt=(i,e,t)=>new L(i,e,t),xl=new Map,ei=(i,e)=>(xl.has(i)||xl.set(i,e()),xl.get(i)),Gt=(i,e)=>ei("city_"+i,()=>new He(e));function yi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function fa(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=yi(n,s),a=o.getContext("2d"),c=a.createImageData(n,s),l=(h,d)=>(t?(h=(h+n)%n,d=(d+s)%s):(h=Math.max(0,Math.min(n-1,h)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+h)*4]/255);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let u=(l(d+1,h)-l(d-1,h))*e,f=(l(d,h+1)-l(d,h-1))*e,m=Math.hypot(u,f,1),x=(h*n+d)*4;c.data[x]=(-u/m*.5+.5)*255,c.data[x+1]=(f/m*.5+.5)*255,c.data[x+2]=(1/m*.5+.5)*255,c.data[x+3]=255}return a.putImageData(c,0,0),yt(o,{srgb:!1})}function ps(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:c=4}={}){let l=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let m=1+Hi(u/e,d/t,a,c,s)*o+(l()-.5)*r/255,x=(d*e+u)*4;h.data[x]=bn(n[0]*m),h.data[x+1]=bn(n[1]*m),h.data[x+2]=bn(n[2]*m),h.data[x+3]=255}i.putImageData(h,0,0)}var ua=(i,e=1)=>`rgba(${i[0]},${i[1]},${i[2]},${e})`,_l={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},vl=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Cu=i=>{let[e,t]=i.split("_");return{base:e,role:t,colors:_l[e]}};function l2(i,e){let{base:t,role:n,colors:s}=Cu(i),r=512,o=936,a=o/2.28,c=x=>o-x*a,l=yi(r,o),h=l.getContext("2d"),d=yi(r,o),u=d.getContext("2d");ps(h,r,o,s.wall,{seed:41+e*5+t.length*3,grain:t==="bank"?14:8,dirt:.08,scale:3}),u.fillStyle="#808080",u.fillRect(0,0,r,o);let f=ft(61+e*11+t.length);if(t==="police"&&n!=="g"){let x=.075*a,p=.26*a;for(let g=0;g*x<o;g++){let _=o-(g+1)*x,y=g%2?p/2:0;for(let M=-y;M<r;M+=p){let R=.86+f()*.26;h.fillStyle=ua(s.wall.map(C=>bn(C*R))),h.fillRect(M+2,_+2,p-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,_,r,2.5),u.fillStyle="#505050",u.fillRect(0,_,r,3);for(let M=-y;M<r;M+=p)h.fillRect(M,_,2.5,x),u.fillRect(M,_,3,x)}}if(n==="g"||t==="bank"){let p=t==="police"?[212,204,188]:null;p&&ps(h,r,o,p,{seed:71+e,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let _=c(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,_-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,_+3,r,2),u.fillStyle="#202020",u.fillRect(0,_-3,r,7),t==="bank"){let y=.62*a,M=g%2?y/2:0;for(let R=M;R<r;R+=y)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(R-1.5,_,3,.32*a),u.fillStyle="#303030",u.fillRect(R-2,_,4,.32*a)}}}for(let x=0;x<8;x++){let p=f()*r,g=60+f()*240,_=h.createLinearGradient(0,0,0,g);_.addColorStop(0,"rgba(70,60,50,0.12)"),_.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=_,h.fillRect(p,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,c(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,c(.9),r,.9*a)}let m=yt(l);return m.wrapS=m.wrapT=Qt,{map:m,normalMap:fa(d,4,!1)}}function Su(i,e="plaster"){let s=410.5263157894737,r=yi(512,936),o=r.getContext("2d"),a=yi(512,936),c=a.getContext("2d");if(c.fillStyle="#808080",c.fillRect(0,0,512,936),e==="vault"){ps(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",c.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),c.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),c.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let d=24;d<512;d+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(d,h,4,0,Math.PI*2),o.fill(),c.fillStyle="#d0d0d0",c.beginPath(),c.arc(d,h,4,0,Math.PI*2),c.fill()}else ps(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),c.fillStyle="#b0b0b0",c.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),c.fillStyle="#a0a0a0",c.fillRect(0,936-.95*s,512,6);let l=yt(r);return l.wrapS=l.wrapT=Qt,{map:l,normalMap:fa(a,3,!1)}}var ce={facade:(i,e)=>ei(`facade_${i}_${e}`,()=>{let t=l2(i,e);return new He({map:t.map,normalMap:t.normalMap,roughness:.85,metalness:0})}),plaster:i=>ei("plaster"+i,()=>{let e=Su(i);return new He({map:e.map,normalMap:e.normalMap,roughness:.9})}),vault:()=>ei("vaultWall",()=>{let i=Su(0,"vault");return new He({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Gt("trim_"+i,{color:new $e().setRGB(..._l[i].trim.map(e=>(e/255)**2.2)),roughness:.75}),plinth:i=>Gt("plinth_"+i,{color:new $e().setRGB(..._l[i].plinth.map(e=>(e/255)**2.2)),roughness:.9}),glass:()=>ei("city_glass",()=>new Fn({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Gt("frame",{color:15789282,roughness:.6}),wood:()=>Gt("wood",{color:5913124,roughness:.65}),darkWood:()=>Gt("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Gt("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Gt("greenDoor",{color:2375726,roughness:.55}),iron:()=>Gt("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Gt("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Gt("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Gt("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Gt("stone",{color:13156528,roughness:.85}),granite:()=>Gt("granite",{color:9078402,roughness:.8}),ceiling:()=>Gt("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Gt("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Gt("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Gt("fabric"+i,{color:i,roughness:.95}),paint:i=>Gt("paint"+i,{color:i,roughness:.6}),water:()=>ei("city_water",()=>new Fn({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>ei("city_spray",()=>new He({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>ei("leaves"+i,()=>new He({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Gt("sandFill",{color:14073994,roughness:1})};function h2(i){let t=yi(512,512),n=t.getContext("2d"),s=yi(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=ft(i.length*17+3);if(i==="parquet"){ps(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,c=a/5;for(let l=-12;l<30;l++)for(let h=-2;h<14;h++)for(let d of[0,1]){let u=.8+o()*.35;n.save(),n.translate(l*c*2+h*0+d*c,h*a-l*c*0),n.rotate(d?Math.PI/4:-Math.PI/4),n.fillStyle=ua([bn(158*u),bn(106*u),bn(64*u)]),n.fillRect(0,0,a*.7,c*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let l=0;l<512;l+=c*1.41)n.beginPath(),n.moveTo(0,l),n.lineTo(512,l+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let c=0;c<2;c++){let l=(c+a)%2===0;n.fillStyle=l?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(c*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let c=o()*512,l=o()*512;n.moveTo(c,l);for(let h=0;h<6;h++)c+=(o()-.3)*60,l+=(o()-.5)*50,n.lineTo(c,l);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){ps(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let c=0;c<a;c++)for(let l=0;l<a;l++){let h=.92+o()*.12;n.fillStyle=(l+c)%2?`rgba(${bn(110*h)},${bn(116*h)},${bn(110*h)},1)`:`rgba(${bn(206*h)},${bn(204*h)},${bn(192*h)},1)`,n.fillRect(l*512/a+1,c*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let c=0;c<=512;c+=512/a)r.fillRect(c-1,0,2,512),r.fillRect(0,c-1,512,2)}else{ps(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let c=8+a/16%2*8;c<512;c+=16)n.save(),n.translate(c,a),n.rotate((c+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(c,a),r.rotate((c+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:yt(t),normalMap:fa(s,2)}}function Pu(i){return ei("floor_"+i,()=>{let e=h2(i);return new He({map:e.map,normalMap:e.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function Ce(i,e,t,n,s,r,o){let a=new be(new gt(i,e,t),n);return a.position.set(s,r,o),a}function Bn(i,e,t,n,s,r,o,a=16){let c=new be(new Lt(i,e,t,a),n);return c.position.set(s,r,o),c}function Cn(i,e,t,n,s,r=32){let o=new be(new os(i.map(([a,c])=>new ye(a,c)),r),e);return o.position.set(t,n,s),o}function qr(i,e,t,n){let s=new en;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,e),s.closePath();let r=new mn(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new be(r,n)}var yl=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Iu(i,e,t,n,s,r,o){let{wallBox:a,isIndoor:c,THICK:l,PANEL_H:h}=o,d=new xe,u=s.type,f=s.style,m=r?.8:h,x=l/2,p=(e*73856093^t*19349663^n*83492791)>>>0,g=c(n,e,t),_=i==="W"?c(n,e-1,t):c(n,e,t-1),y=vl(f)?Cu(f):null,M=K=>f==="vault"?ce.vault():!y||K?ce.plaster(p%3):ce.facade(f,p%3),R=y?ce.trim(y.base):ce.slabEdge(),C=M(g),I=M(_),k=i==="W"?[C,I,R,R,R,R]:[R,R,R,R,C,I],T=y?g?-1:1:0,v=n*at,S=(K,N,F,G,q,D,E)=>{let H=D-q,X=T*(l/2+(q+D)/2),oe=i==="W"?new gt(H,G-F,N-K):new gt(N-K,G-F,H),ge=new be(oe,E);return i==="W"?ge.position.set(e*U+X,v+(F+G)/2,t*U+(K+N)/2):ge.position.set(e*U+(K+N)/2,v+(F+G)/2,t*U+X),d.add(ge),ge},le=(K,N,F,G)=>{let q=new mn(K,{depth:F-N,bevelEnabled:!1,curveSegments:16});(i==="W"?T<0:T>0)?q.translate(0,0,l/2+N):q.translate(0,0,-(l/2+F)),i==="W"&&q.rotateY(-Math.PI/2);let E=new be(q,G);return E.position.set(e*U,v,t*U),d.add(E),E};if(u==="rail"){let K=f==="fence",N=K?ce.fenceGreen():ce.iron(),F=K?1.1:.95,G=(q,D,E,H,X,oe=N)=>d.add(a(i,e,t,n,q,D,E,H,Array(6).fill(oe),X));for(let q of[0,U])G(q-.03,q+.03,0,F+.04,.06);G(0,U,F-.04,F,.05,K?N:ce.darkWood()),G(0,U,.08,.12,.035),K&&G(0,U,F-.3,F-.27,.03);for(let q=.1;q<U-.05;q+=.12)G(q-.009,q+.009,.1,F-(K?-.06:.02),.018),K&&G(q-.02,q+.02,F+.02,F+.07,.025);return d}if(u==="wall")d.add(a(i,e,t,n,-x,U+x,0,m,k));else if(u==="door"){let N=Math.min(2.1,m),F=(U-.92)/2,G=(U+.92)/2;d.add(a(i,e,t,n,-x,F,0,m,k)),d.add(a(i,e,t,n,G,U+x,0,m,k)),m>N+.01&&d.add(a(i,e,t,n,F,G,N,m,k));let q=f==="vault"?ce.steel():ce.wood(),D=Array(6).fill(q),E=f==="vault"?.12:.06;if(d.add(a(i,e,t,n,F-E,F,0,N,D,l+.05)),d.add(a(i,e,t,n,G,G+E,0,N,D,l+.05)),m>N+.01&&d.add(a(i,e,t,n,F-E,G+E,N,N+E,D,l+.05)),d.add(a(i,e,t,n,F,G,0,.03,Array(6).fill(ce.stone()),l+.1)),y&&!r){let H=ce.trim(y.base);if(S(F-.16,F-.04,0,N+.1,0,.05,H),S(G+.04,G+.16,0,N+.1,0,.05,H),S(F-.16,G+.16,N+.04,N+.16,0,.05,H),N+.42<m){S(F-.26,G+.26,N+.26,N+.34,0,.22,H);for(let X of[F-.18,G+.18])S(X-.05,X+.05,N+.12,N+.26,0,.16,H)}}}else{let K=y&&y.base==="bank"&&y.role==="g",N=.78,F=K?.62:y&&y.role==="g"?.75:.7,G=K?2.08:2,q=(U-N)/2,D=(U+N)/2,E=K?G-N/2:G;if(r)d.add(a(i,e,t,n,-x,U+x,0,m,k));else{if(d.add(a(i,e,t,n,-x,q,0,m,k)),d.add(a(i,e,t,n,D,U+x,0,m,k)),d.add(a(i,e,t,n,q,D,0,F,k)),d.add(a(i,e,t,n,q,D,G,m,k)),K){let oe=new en;oe.moveTo(q,E),oe.lineTo(q,G),oe.lineTo(D,G),oe.lineTo(D,E),oe.absarc(U/2,E,N/2,0,Math.PI,!1);let ge=new mn(oe,{depth:l,bevelEnabled:!1,curveSegments:16});ge.translate(0,0,-l/2),i==="W"&&ge.rotateY(-Math.PI/2);let V=new be(ge,T?ce.facade(f,p%3):k[i==="W"?0:4]);V.position.set(e*U,v,t*U),d.add(V)}let H=Array(6).fill(ce.glass()),X=Array(6).fill(ce.frame());if(d.add(a(i,e,t,n,q+.03,D-.03,F,K?E+N/2-.02:G,H,.03)),d.add(a(i,e,t,n,q,q+.05,F,E,X,.08)),d.add(a(i,e,t,n,D-.05,D,F,E,X,.08)),d.add(a(i,e,t,n,q,D,F,F+.05,X,.08)),K||d.add(a(i,e,t,n,q,D,G-.05,G,X,.08)),d.add(a(i,e,t,n,U/2-.022,U/2+.022,F,K?E+N/2-.04:G,X,.06)),d.add(a(i,e,t,n,q,D,F+(E-F)*.68-.02,F+(E-F)*.68+.02,X,.06)),y){let oe=ce.trim(y.base);if(S(q-.1,D+.1,F-.07,F,0,.1,oe),K||(S(q-.1,q,F,G+.08,0,.04,oe),S(D,D+.1,F,G+.08,0,.04,oe),S(q-.1,D+.1,G,G+.08,0,.04,oe)),y.role==="u"&&["bank","pink","cream"].includes(y.base)||y.role==="t"&&y.base==="bank"){let V=new en;V.moveTo(q-.16,G+.1),V.lineTo(D+.16,G+.1),V.lineTo(U/2,G+.27),V.closePath(),le(V,0,.1,oe)}else y.role==="u"||y.role==="t"?S(q-.15,D+.15,G+.1,G+.17,0,.12,oe):y.role==="g"&&!K&&S(U/2-.07,U/2+.07,G-.02,G+.16,0,.06,oe);if(K){let V=new en;V.absarc(U/2,E,N/2+.1,0,Math.PI,!1),V.lineTo(q,E),V.absarc(U/2,E,N/2,Math.PI,0,!0),V.closePath(),le(V,0,.05,oe),S(U/2-.07,U/2+.07,G-.06,G+.14,0,.08,oe),S(q-.1,q,F,E,0,.05,oe),S(D,D+.1,F,E,0,.05,oe);let de=ce.iron();for(let Me=1;Me<6;Me++){let Se=q+Me*N/6,O=Math.sqrt(Math.max(0,(N/2)**2-(Se-U/2)**2));S(Se-.01,Se+.01,F,E+O-.03,-.06,-.04,de)}for(let Me of[F+.35,F+.8])S(q+.02,D-.02,Me,Me+.02,-.065,-.035,de)}if(y.role!=="g"&&y.base==="bank"){let V=ce.iron();S(q-.08,D+.08,F-.12,F-.07,0,.32,ce.stone()),S(q-.06,D+.06,F+.42,F+.45,.28,.31,V);for(let de=0;de<=8;de++){let Me=q-.04+de*(N+.08)/8;S(Me-.008,Me+.008,F-.07,F+.43,.285,.305,V)}}}}}if(y&&!r){let K=ce.trim(y.base);if(y.role==="g"&&S(-x,U+x,0,.5,0,.05,ce.plinth(y.base)),y.role==="t"){S(-x-.02,U+x+.02,h-.16,h+.02,0,.08,K),S(-x-.06,U+x+.06,h+.02,h+.12,0,.18,K),S(-x-.1,U+x+.1,h+.12,h+.24,0,.32,K);for(let N=.16;N<U;N+=.31)S(N-.04,N+.04,h-.02,h+.12,.08,.26,K)}else S(-x-.02,U+x+.02,h-.08,h+.24,0,.06,K),S(-x-.03,U+x+.03,h+.18,h+.24,0,.1,K)}else y&&r&&y.role==="g"&&S(-x,U+x,0,.5,0,.05,ce.plinth(y.base));return d}function Lu(i,e,t,n,s,r,o,a,c){let{wallBox:l}=c,h=new xe,d=o-.01;if(a==="vault"){let p=Array(6).fill(ce.steel());h.add(l(i,e,t,n,s-.02,r+.02,.01,d,p,.2));let g=(s+r)/2;for(let _ of[.26])h.add(l(i,e,t,n,g-.3,g+.3,d*.45,d*.45+.04,Array(6).fill(ce.brass()),_));return h.add(l(i,e,t,n,g-.02,g+.02,d*.45-.28,d*.45+.32,Array(6).fill(ce.brass()),.26)),h.add(l(i,e,t,n,s+.05,s+.1,.2,d-.2,Array(6).fill(ce.iron()),.24)),h}let u=a==="outer",f=Array(6).fill(u?ce.greenDoor():ce.wood()),m=Array(6).fill(ce.darkWood()),x=(s+r)/2;h.add(l(i,e,t,n,s-.02,r+.02,.01,d,f,.06)),h.add(l(i,e,t,n,x-.01,x+.01,.01,d,m,.075));for(let[p,g]of[[s+.06,x-.06],[x+.06,r-.06]])d>1&&h.add(l(i,e,t,n,p,g,.15,Math.min(.85,d-.1),m,.072)),d>1.9&&(u?h.add(l(i,e,t,n,p+.02,g-.02,1.05,d-.15,Array(6).fill(ce.glass()),.074)):h.add(l(i,e,t,n,p,g,1,d-.15,m,.072)));for(let p of[-1,1])h.add(l(i,e,t,n,x+p*.06-.015,x+p*.06+.015,Math.min(1,d-.1),Math.min(1.12,d-.05),Array(6).fill(ce.brass()),.09));return h}function d2(i){let n=yi(512,512),s=n.getContext("2d"),r=yi(512,512),o=r.getContext("2d"),a=ft(i==="slate"?501:503),c=512/(i==="slate"?10:8),l=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=ua(h),s.fillRect(0,0,512,512);for(let f=0;f<512/l;f++){let m=f%2?c/2:0;for(let x=-m;x<512;x+=c){let p=.8+a()*.32,g=f*l,_=o.createLinearGradient(0,g,0,g+l);_.addColorStop(0,"#404040"),_.addColorStop(1,"#c8c8c8"),o.fillStyle=_,o.fillRect(x+1,g,c-2,l),s.fillStyle=ua(h.map(y=>bn(y*p))),i==="slate"?s.fillRect(x+1,g+1,c-2,l-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+c-1,g),s.lineTo(x+c-1,g+l*.75),s.quadraticCurveTo(x+c/2,g+l*1.05,x+1,g+l*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+l-2,c,2)}}for(let f=0;f<40;f++){let m=a()*512,x=a()*512,p=10+a()*40,g=s.createRadialGradient(m,x,0,m,x,p);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(m-p,x-p,p*2,p*2)}let d=yt(n),u=fa(r,3);for(let f of[d,u])f.wrapS=f.wrapT=ns;return{map:d,normalMap:u}}var Tu=i=>ei("roofMat_"+i,()=>{let e=d2(i);return new He({map:e.map,normalMap:e.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:$t})});function Gn(i,e,t){let n=new It,s=i[0],r=e.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),c=[],l=[];for(let d of i){c.push(d.x,d.y,d.z);let u=new L().subVectors(d,s);l.push(u.dot(r)/(2*U),u.dot(a)/(2*U))}let h=[];for(let d=1;d<i.length-1;d++)h.push(0,d,d+1);return n.setAttribute("position",new it(c,3)),n.setAttribute("uv",new it(l,2)),n.setIndex(h),n.computeVertexNormals(),new be(n,t)}function Au(i,e,t,n,s,r,o,a){let c=n-e,l=s-t,h=Math.min(c,l)/2,d=h*Math.tan(o),u=c>=l,f=u?[vt(e+h,r+d,(t+s)/2),vt(n-h,r+d,(t+s)/2)]:[vt((e+n)/2,r+d,t+h),vt((e+n)/2,r+d,s-h)],m={nw:vt(e,r,t),ne:vt(n,r,t),se:vt(n,r,s),sw:vt(e,r,s)};u?(i.add(Gn([m.sw,m.se,f[1],f[0]],vt(1,0,0),a)),i.add(Gn([m.ne,m.nw,f[0],f[1]],vt(-1,0,0),a)),i.add(Gn([m.se,m.ne,f[1]],vt(0,0,-1),a)),i.add(Gn([m.nw,m.sw,f[0]],vt(0,0,1),a))):(i.add(Gn([m.se,m.ne,f[0],f[1]],vt(0,0,-1),a)),i.add(Gn([m.nw,m.sw,f[1],f[0]],vt(0,0,1),a)),i.add(Gn([m.sw,m.se,f[1]],vt(1,0,0),a)),i.add(Gn([m.ne,m.nw,f[0]],vt(-1,0,0),a)));let x=a,p=(g,_)=>{let y=new L().subVectors(_,g),M=new be(new Lt(.07,.07,y.length(),8),x);M.position.copy(g).addScaledVector(y,.5),M.quaternion.setFromUnitVectors(vt(0,1,0),y.normalize()),i.add(M)};return p(f[0],f[1]),p(m.nw,f[0]),p(m.sw,f[0]),p(m.ne,f[1]),p(m.se,f[1]),{height:d,along:u,half:h}}function Ru(i,e,t,n,s,r,o,a=1){let c=new xe,l=1*a,h=1.15*a,d=1.6*a;c.add(Ce(l,h,d,r,0,h/2,-d/2)),c.add(Ce(l*.56,h*.6,.04,ce.glass(),0,h*.45,.01)),c.add(Ce(l*.66,.06,.06,ce.frame(),0,h*.14,.02)),c.add(Ce(.04,h*.6,.05,ce.frame(),0,h*.45,.02));let u=qr(l+.24,.55*a,d+.15,o);u.position.set(0,h,-d/2+.07),c.add(u);let f=qr(l+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),c.add(f),c.position.set(e,n,t),c.rotation.y=Math.atan2(s.x,s.z),i.add(c)}var xi=i=>(i+.5)*U;function u2(i){let e=i.cols*U,t=i.rows*U;if(i.type==="mansard"){let l={x0:-.2,z0:-.2,x1:e+.2,z1:t+.2},h=(47-i.col)*U+U/2,d=[],u=.75*.36;for(let m=1;m<i.cols-1;m+=2){let x=xi(m);Math.abs(x-h)<5.2||d.push({x,z:l.z1-u,facing:"S"},{x,z:l.z0+u,facing:"N"})}for(let m=1;m<i.rows-1;m+=2)d.push({x:l.x1-u,z:xi(m),facing:"E"},{x:l.x0+u,z:xi(m),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([m,x])=>({x:xi(Math.floor(i.cols*m)),z:xi(Math.floor(i.rows*x))}));return{...l,width:e,depth:t,dormers:d,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:t-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:e+n,z1:t+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let l=0;l<i.cols;l++){let h=xi(l);l%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let l=0;l<i.rows;l++){let h=xi(l);l%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let c=[0,1,2].map(l=>({x:xi(Math.floor(i.cols*(.25+l*.25))),z:xi(Math.floor(i.rows*(.42+l%2*.16)))}));return{...r,width:e,depth:t,along:o,run:s,dormers:a,chimneys:c,pediment:null}}function f2(i){let e=u2(i),t={S:vt(0,0,1),N:vt(0,0,-1),E:vt(1,0,0),W:vt(-1,0,0)},n=new xe,s=i.cols*U,r=i.rows*U,o=.42,a=ft(i.col*31+i.row*17),c=ce.trim(i.facade||"cream");if(i.type==="mansard"){let l=Tu("slate"),h=.75,d=2.3,u=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},m={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(T,v,S)=>vt(T,v,S),p=u+d;n.add(Gn([x(f.x0,u,f.z1),x(f.x1,u,f.z1),x(m.x1,p,m.z1),x(m.x0,p,m.z1)],vt(1,0,0),l)),n.add(Gn([x(f.x1,u,f.z0),x(f.x0,u,f.z0),x(m.x0,p,m.z0),x(m.x1,p,m.z0)],vt(-1,0,0),l)),n.add(Gn([x(f.x1,u,f.z1),x(f.x1,u,f.z0),x(m.x1,p,m.z0),x(m.x1,p,m.z1)],vt(0,0,-1),l)),n.add(Gn([x(f.x0,u,f.z0),x(f.x0,u,f.z1),x(m.x0,p,m.z1),x(m.x0,p,m.z0)],vt(0,0,1),l)),Au(n,m.x0,m.z0,m.x1,m.z1,p,.07,l),n.add(Ce(m.x1-m.x0+.1,.1,.12,ce.steel(),(m.x0+m.x1)/2,p+.05,m.z1)),n.add(Ce(m.x1-m.x0+.1,.1,.12,ce.steel(),(m.x0+m.x1)/2,p+.05,m.z0));let g=u+.35;for(let T of e.dormers)Ru(n,T.x,T.z,g,t[T.facing],c,l,.95);let _=(47-i.col)*U+U/2,y=r+.12,M=qr(9.2,2.3,.5,c);M.position.set(_,u-.02,y-.05),n.add(M);let R=qr(8.2,1.85,.12,ce.facade("bank_u",1));R.position.set(_,u+.16,y+.22),n.add(R);let C=Math.atan2(2.3,4.6),I=Math.hypot(4.6,2.3)+.3;for(let T of[-1,1]){let v=Ce(I,.2,.7,c,_+T*2.3,u+1.15,y+.02);v.rotation.z=-T*C,n.add(v)}n.add(Ce(9.6,.22,.75,c,_,u+.02,y+.02));let k=new be(new Lt(.42,.42,.12,32),ce.brass());k.rotation.x=Math.PI/2,k.scale.set(1,1,.72),k.position.set(_,u+.85,y+.32),n.add(k);for(let T of[-4.6,0,4.6])n.add(Cn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],c,_+T,T?u+.2:u+2.4,y+.05,12));for(let{x:T,z:v}of e.chimneys)n.add(Ce(.7,1.3,.5,ce.facade("bank_t",0),T,p+.6,v)),n.add(Ce(.84,.12,.64,c,T,p+1.28,v))}else{let l=Tu("tile"),h=-o,d=-o,u=s+o,f=r+o,m=.22,x=Au(n,h,d,u,f,m,.52,l);n.add(Ce(u-h,.14,.06,ce.darkWood(),(h+u)/2,m-.04,f)),n.add(Ce(u-h,.14,.06,ce.darkWood(),(h+u)/2,m-.04,d)),n.add(Ce(.06,.14,f-d,ce.darkWood(),u,m-.04,(d+f)/2)),n.add(Ce(.06,.14,f-d,ce.darkWood(),h,m-.04,(d+f)/2)),n.add(Ce(u-h,.03,f-d,ce.darkWood(),(h+u)/2,m-.1,(d+f)/2));for(let _ of[d,f]){let y=Bn(.06,.06,u-h,ce.iron(),(h+u)/2,m-.02,_,8);y.rotation.z=Math.PI/2,n.add(y)}let p=Math.tan(.52),g=e.run;for(let _ of e.dormers)Ru(n,_.x,_.z,m+(g-.75)*p,t[_.facing],c,l);for(let _=0;_<e.chimneys.length;_++){let{x:y,z:M}=e.chimneys[_],R=m+Math.min(Math.min(y-h,u-y),Math.min(M-d,f-M))*p,C=ce.facade("police_u",_%3);n.add(Ce(.6,x.height-(R-m)+1.1,.5,C,y,R+(x.height-(R-m)+1.1)/2-.2,M)),n.add(Ce(.72,.1,.62,ce.stone(),y,m+x.height+.95,M))}}return n}function Ml(i,e,t=2){let n=new cs(i,t),s=n.attributes.position,r=ft(e),o=[],a=r()*10;for(let c=0;c<s.count;c++){let l=vt(s.getX(c),s.getY(c),s.getZ(c)),h=1+.18*Math.sin(l.x*5+a)*Math.sin(l.y*4.3+a*.7)*Math.sin(l.z*4.7)+(r()-.5)*.12;l.multiplyScalar(h),s.setXYZ(c,l.x,l.y,l.z);let d=.75+.25*(l.y/i)+(r()-.5)*.25;o.push(d,d,d)}return n.setAttribute("color",new it(o,3)),n.computeVertexNormals(),n}function El(i){return ei("leafTint"+i,()=>new He({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function p2(i,e,t){let n=new xe,s=ft(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Gt("bark",{color:4864556,roughness:.95});n.add(Bn(.11,.17,o+.6,a,e,(o+.6)/2,t,10));for(let h=0;h<3;h++){let d=s()*Math.PI*2,u=Bn(.04,.07,1.2,a,e+Math.cos(d)*.3,o+.6,t+Math.sin(d)*.3,6);u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),n.add(u)}let c=El(r?6195776:4880954),l=r?7:6;for(let h=0;h<l;h++){let d=h/l*Math.PI*2+s(),u=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,m=new be(Ml(f,i.col*101+h*17+i.row),c);m.position.set(e+Math.cos(d)*u,o+1.25+(h===0?.4:(s()-.3)*.9),t+Math.sin(d)*u),n.add(m)}return n}function m2(i,e,t){let n=new xe,s=El(4616250);for(let r=0;r<3;r++){let o=new be(Ml(.5,t*7+r,2),s);o.scale.set(i/2.4,.95,e/1.25),o.position.set(i*(.2+r*.3),.5,e/2),n.add(o)}return n}function fs(i,e,t,n){let s=new xe;return s.add(i),i.position.set(-t,0,-n),s.rotation.y=-(e.rotation||0)*Math.PI/2,s.position.set(t,0,n),s}function Nu(i){let e=i.cols*U,t=i.rows*U,n=e/2,s=t/2,r=new xe,o=c=>(r.add(c),c),a=ft(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return f2(i);case"tree":return p2(i,n,s);case"hedge":return m2(e,t,i.col+i.row*3);case"bench":{let c=new xe;for(let l of[.18,U-.18])c.add(Ce(.05,.45,.42,ce.iron(),l,.22,.45)),c.add(Ce(.05,.5,.05,ce.iron(),l,.7,.26));for(let l=0;l<4;l++)c.add(Ce(U-.12,.035,.08,ce.lightWood(),U/2,.46,.32+l*.1));for(let l=0;l<3;l++)c.add(Ce(U-.12,.08,.03,ce.lightWood(),U/2,.62+l*.12,.25));return fs(c,i,n,s)}case"bin":return o(Cn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],ce.iron(),n,0,s,16)),r;case"streetLamp":return o(Cn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],ce.iron(),n,0,s,12)),o(Cn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],ce.lantern(),n,3.5,s,6)),o(Cn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],ce.iron(),n,4,s,6)),r;case"column":return o(Ce(.66,.16,.66,ce.stone(),n,.08,s+.05)),o(Cn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],ce.stone(),n,.16,s+.05,24)),o(Bn(.21,.24,at-.62,ce.stone(),n,.28+(at-.62)/2,s+.05,20)),o(Cn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],ce.stone(),n,at-.34,s+.05,24)),o(Ce(.7,.18,.7,ce.stone(),n,at-.09,s+.05)),r;case"balcony":{o(Ce(e,.18,1.05,ce.stone(),n,.09,1.05/2)),o(Ce(e+.1,.06,1.05+.06,ce.stone(),n,.2,1.05/2+.03));for(let l=.15;l<e;l+=.22)o(Cn(yl,ce.stone(),l,.23,1.05-.1,10));for(let l=.15;l<1.05-.1;l+=.22)o(Cn(yl,ce.stone(),.08,.23,l,10)),o(Cn(yl,ce.stone(),e-.08,.23,l,10));return o(Ce(e,.08,.16,ce.stone(),n,.97,1.05-.1)),o(Ce(.16,.08,1.05,ce.stone(),.08,.97,1.05/2)),o(Ce(.16,.08,1.05,ce.stone(),e-.08,.97,1.05/2)),o(Ce(3.4,.36,.06,ce.darkWood(),n,-.3,.12)),o(Ce(3.1,.2,.02,ce.brass(),n,-.3,.155)),r}case"fountain":{o(Cn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],ce.granite(),n,0,s,72));let l=new be(new ki(5.3-.38,64),ce.water());l.rotation.x=-Math.PI/2,l.position.set(n,.36,s),o(l),o(new be(new ki(5.3-.38,64),ce.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(Cn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],ce.stone(),n,0,s,48));let h=new be(new ki(.9,32),ce.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let d=new be(new ki(1.6,32),ce.water());d.rotation.x=-Math.PI/2,d.position.set(n,1.48,s),o(d),o(new be(new Lt(1.62,1.95,1.1,32,1,!0),ce.spray())).position.set(n,.92,s),o(new be(new Lt(.95,1.6,.85,32,1,!0),ce.spray())).position.set(n,1.92,s),o(new be(new Qo(.12,1.1,12,1,!0),ce.spray())).position.set(n,3.9,s);for(let u=0;u<8;u++){let f=u/8*Math.PI*2,m=new be(new Lt(.03,.05,1.6,6,1,!0),ce.spray());m.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),m.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(m)}return r}case"playhouse":{let c=ce.paint(14205066),l=ce.paint(11549226);o(Ce(e-.3,.1,t-.3,ce.lightWood(),n,.05,s));for(let[u,f,m,x]of[[n,.2,e-.3,.06],[.2,s,.06,t-.3],[e-.2,s,.06,t-.3]])o(Ce(m,1.3,x,c,u,.75,f));o(Ce(.8,1.3,.06,c,.55,.75,t-.2)),o(Ce(.7,1.3,.06,c,e-.5,.75,t-.2)),o(Ce(.5,.45,.07,ce.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=Ce(e*.62,.06,t-.1,l,e*.3,1.75,s);h.rotation.z=.6,o(h);let d=Ce(e*.62,.06,t-.1,l,e*.7,1.75,s);d.rotation.z=-.6,o(d);for(let u of[.2,t-.2]){let f=qr(e-.3,.75,.06,c);f.position.set(n,1.4,u),o(f)}return r}case"slide":{let c=ce.paint(12730414),l=ce.paint(3828392);o(Ce(.9,.08,.9,ce.lightWood(),n,1.5,.55));for(let[d,u]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Bn(.04,.04,2.3,l,d,1.15,u,8));for(let d of[n-.4,n+.4])o(Ce(.05,.05,.9,l,d,2.25,.55));for(let d=0;d<5;d++)o(Ce(.6,.04,.12,ce.lightWood(),n,.3+d*.27,.05-d*0)).position.z=.08;let h=Ce(.62,.05,2.4,c,n,.82,2.05);h.rotation.x=.62,o(h);for(let d of[-1,1]){let u=Ce(.05,.16,2.4,c,n+d*.32,.9,2.05);u.rotation.x=.62,o(u)}return r}case"swing":{let c=ce.paint(3828392);for(let h of[.15,e-.15])for(let d of[-1,1]){let u=Bn(.045,.045,2.5,c,h,1.18,s+d*.45,8);u.rotation.x=d*.38,o(u)}let l=Bn(.05,.05,e-.2,c,n,2.35,s,8);l.rotation.z=Math.PI/2,o(l);for(let h of[e*.3,e*.7]){for(let d of[-.22,.22])o(Bn(.01,.01,1.75,ce.steel(),h+d,1.45,s,4));o(Ce(.5,.05,.22,ce.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[c,l,h,d]of[[n,.1,e-.2,.18],[n,t-.1,e-.2,.18],[.1,s,.18,t],[e-.1,s,.18,t]])o(Ce(h,.3,d,ce.lightWood(),c,.15,l));return o(Ce(e-.3,.12,t-.3,ce.sand(),n,.06,s)),o(Ce(.2,.18,.2,ce.paint(12730414),n-.6,.2,s+.3)),o(Bn(.12,.08,.16,ce.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Bn(1.1,1.1,.1,ce.paint(12730414),n,.25,s,32)),o(Bn(.08,.1,.9,ce.steel(),n,.7,s,10));for(let c=0;c<4;c++){let l=c*Math.PI/2,h=Ce(1.9,.04,.04,ce.paint(14196768),n,.95,s);h.rotation.y=l,o(h),o(Bn(.03,.03,.7,ce.paint(14196768),n+Math.cos(l)*.95,.6,s+Math.sin(l)*.95,6))}return r}case"busStop":{for(let c of[.15,e-.15])o(Ce(.08,2.4,.08,ce.iron(),c,1.2,.2));return o(Ce(e,.08,1.2,ce.iron(),n,2.42,.6)),o(Ce(e-.3,1.9,.03,ce.glass(),n,1.2,.18)),o(Ce(e-.6,.06,.4,ce.lightWood(),n,.48,.42)),o(Ce(.9,.6,.06,ce.paint(2775706),e-.6,2,.2)),r}case"counter":{let c=new xe;return c.add(Ce(U,1.05,.6,ce.darkWood(),U/2,.52,.55)),c.add(Ce(U+.02,.05,.7,ce.stone(),U/2,1.07,.55)),c.add(Ce(U,.55,.02,ce.glass(),U/2,1.4,.4)),c.add(Ce(.04,.6,.04,ce.brass(),.04,1.4,.4)),fs(c,i,n,s)}case"deposits":{let c=new xe;c.add(Ce(U-.02,2.1,.45,ce.steel(),U/2,1.05,.24));for(let l=0;l<9;l++)for(let h=0;h<4;h++){let d=.12+h*.3,u=.15+l*.22;c.add(Ce(.27,.19,.02,ce.paint(9081496),d+.14,u+.1,.475)),c.add(Ce(.03,.03,.02,ce.brass(),d+.14,u+.1,.49))}return fs(c,i,n,s)}case"plant":o(Cn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],ce.paint(10115642),n,0,s,16));for(let c=0;c<4;c++){let l=new be(Ml(.32,i.col*3+c),El(4090416));l.position.set(n+(a()-.5)*.3,.9+c*.22,s+(a()-.5)*.3),o(l)}return r;case"bed":{let c=new xe;return c.add(Ce(e-.2,.35,t-.25,ce.wood(),n,.18,s+.05)),c.add(Ce(e-.3,.18,t-.35,ce.fabric(15262420),n,.44,s+.05)),c.add(Ce(e*.6,.06,t-.3,ce.fabric(6961738),n+e*.17,.55,s+.05)),c.add(Ce(.45,.14,t-.5,ce.fabric(16052456),.45,.6,s+.05)),c.add(Ce(.08,1,t-.25,ce.darkWood(),.12,.5,s+.05)),fs(c,i,n,s)}case"wardrobe":{let c=new xe;c.add(Ce(U-.15,2,.6,ce.wood(),U/2,1,.36)),c.add(Ce(U-.05,.1,.68,ce.darkWood(),U/2,2.05,.36)),c.add(Ce(.02,1.8,.02,ce.darkWood(),U/2,1,.67));for(let l of[-1,1])c.add(Ce(.03,.12,.03,ce.brass(),U/2+l*.06,1.05,.68));return fs(c,i,n,s)}case"bookcase":{let c=new xe;c.add(Ce(U-.15,2,.4,ce.darkWood(),U/2,1,.26));let l=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let d=.14;for(;d<U-.2;){let u=.04+a()*.05,f=.22+a()*.1;c.add(Ce(u-.005,f,.25,ce.fabric(l[Math.floor(a()*l.length)]),d+u/2,.12+h*.38+f/2,.36)),d+=u}}return fs(c,i,n,s)}case"table":{o(Ce(e-.3,.05,t-.3,ce.wood(),n,.76,s));for(let[c,l]of[[.25,.25],[e-.25,.25],[.25,t-.25],[e-.25,t-.25]])o(Ce(.06,.74,.06,ce.darkWood(),c,.37,l));for(let c=0;c<Math.max(2,i.cols);c++){let l=(c+.5)*e/Math.max(2,i.cols);for(let h of[.05,t-.05])o(Ce(.4,.05,.4,ce.darkWood(),l,.45,h)),o(Ce(.4,.5,.04,ce.darkWood(),l,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let c=new xe,l=ce.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);c.add(Ce(e-.2,.42,.8,l,n,.21,.6)),c.add(Ce(e-.2,.5,.2,l,n,.65,.3));for(let h of[.15,e-.15])c.add(Ce(.18,.6,.8,l,h,.3,.6));return fs(c,i,n,s)}default:return null}}var pa=zt==="city",Vn=Jd(Zd(),$d),Oy=1280/18.5;var _i=U*St,ms=new L(_i/2,0,_i/2),wl=.22,nn=.18,Zr=at-wl,hn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Bi=(i,e,t)=>new L(i,e,t),ut=new Ar({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});ut.setPixelRatio(1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Qc;ut.toneMapping=el;ut.outputColorSpace=an;document.body.appendChild(ut.domElement);var In=new Ui,cr=zt==="base";In.background=new $e(cr?789258:1709584);In.environment=new qs(ut).fromScene(new aa,.04).texture;In.add(cr?new kr(15002868,4999234,1.25):new kr(13163775,5917236,.75));var xn=new ta(cr?16774890:16774368,cr?2.6:4.2);{let i=tu(-11,7.5),e=cr?.45:1.6;xn.position.set(ms.x+i.x*e,cr?24:17.6,ms.z+i.y*e)}xn.target.position.copy(ms);xn.castShadow=!0;xn.shadow.mapSize.set(4096,4096);Object.assign(xn.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});xn.shadow.camera.updateProjectionMatrix();xn.shadow.bias=-3e-4;xn.shadow.normalBias=.025;xn.shadow.radius=2;In.add(xn,xn.target);var bl=new Map,Pn=(i,e)=>(bl.has(i)||bl.set(i,e()),bl.get(i)),Xt=(i,e)=>Pn(i,()=>new He(e)),he={trim:()=>Xt("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>Xt("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>Xt("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>Xt("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>Xt("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>Xt("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>Xt("rubber",{color:1842204,roughness:.9}),paint:()=>Xt("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>Pn("glass",()=>new Fn({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>Xt("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>Xt("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>Xt("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>Pn("screen"+i,()=>new He({map:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,e)=>Pn(`wall_${i}_${e}`,()=>{let t=cu(i,e);return new He({map:t.map,normalMap:t.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>Pn("interiorFloor",()=>{let i=lu();return new He({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>Pn("roof",()=>{let i=hu();return new He({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>Pn("grating",()=>{let i=du();return new He({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>Pn("concrete",()=>{let i=fu();return new He({map:i.map,roughness:.95})}),container:i=>Pn("container_"+i,()=>{let e=uu(i==="orange"?3:9);return new He({map:e.map,normalMap:e.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>Pn("rock",()=>{let i=Fr(5,[150,116,88]);return new He({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>Pn("baseRock"+i,()=>{let e=Fr(11+i*7,[120,112,102]);return new He({normalMap:e.normalMap,color:6182736,roughness:.95})}),rockCut:i=>Pn("rockCut"+i,()=>{let e=Fr(31+i*5,[92,86,80]);return new He({normalMap:e.normalMap,color:5722700,roughness:.98})})};function ti(i,e,t,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:e,level:t,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function De(i,e,t,n,s,r,o){let a=new be(new gt(i,e,t),n);return a.position.set(s,r,o),a}function wn(i,e,t,n,s,r,o,a=16){let c=new be(new Lt(i,e,t,a),n);return c.position.set(s,r,o),c}function Sl(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Bi(0,1,0),s.normalize()),r}var ku=(i,e,t)=>(i*73856093^e*19349663^t*83492791)>>>0,Tl=(i,e,t)=>e>=0&&t>=0&&e<St&&t<St&&Vn.indoor[i][t][e]===1;function rt(i,e,t,n,s,r,o,a,c,l=nn){let h=r-s,d=a-o,u=n*at,f=i==="W"?new gt(l,d,h):new gt(h,d,l),m=i==="W"?e*U:e*U+(s+r)/2,x=i==="W"?t*U+(s+r)/2:t*U;f.translate(m,u+(o+a)/2,x);let p=f.attributes.position,g=f.attributes.uv;for(let _=0;_<p.count;_++){let y=i==="W"?p.getZ(_)-t*U:p.getX(_)-e*U;g.setXY(_,y/U,(p.getY(_)-u)/Zr)}return new be(f,c)}function Du(i,e,t,n,s){let r=ku(e,t,n)%3,o=(h,d)=>s==="inner"||Tl(n,h,d)?he.wall("inner",r%2):he.wall(s,r),a=o(e,t),c=i==="W"?o(e-1,t):o(e,t-1),l=he.trim();return i==="W"?[a,c,l,l,l,l]:[l,l,l,l,a,c]}var g2=i=>pa?i.style==="vault"?"vault":vl(i.style)?"outer":"inner":"base";function Al(i,e,t,n,s,r){if(pa&&s.type!=="barrier"){let d=Iu(i,e,t,n,s,r,{wallBox:rt,isIndoor:Tl,THICK:nn,PANEL_H:Zr});if(s.type==="door"){let f=Math.min(2.1,r?.8:Zr);ar.add(Uu(i,e,t,n,(U-.92)/2,(U+.92)/2,f,g2(s)))}return ti(d,i==="W"?hn.wallW:hn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new xe,a=s.type,c=s.style,l=r?.8:Zr,h=nn/2;if(a==="wall"||a==="door"||a==="window"){let d=Du(i,e,t,n,c==="concrete"?"hab":c);if(a==="wall"||a==="window"&&r)o.add(rt(i,e,t,n,-h,U+h,0,l,d));else if(a==="door"&&s.gate){let{startOpen:u,endOpen:f,heavy:m,left:x,right:p,post:g}=y2(i,e,t,n,s),_=Math.min(s.gate.height-n*at,l),y=x2(n,s,r);u||o.add(rt(i,e,t,n,-h,0,0,l,d)),f||o.add(rt(i,e,t,n,U,U+h,0,l,d)),l>_+.01&&o.add(rt(i,e,t,n,u?0:-.001,f?U:U+.001,_,l,d));let M=m?he.yellow():he.orange(),R=Array(6).fill(M);u||o.add(rt(i,e,t,n,0,g,0,y,R,nn+.08)),f||o.add(rt(i,e,t,n,U-g,U,0,y,R,nn+.08)),l>_+.01&&o.add(rt(i,e,t,n,x-.001,p+.001,_,_+.12,R,nn+.08)),n===0&&o.add(rt(i,e,t,n,x,p,0,.03,Array(6).fill(he.darkSteel()),nn+.14)),ar.add(_2(i,e,t,n,x,p,y,m,s.gate.height))}else if(a==="door"){let f=Math.min(2.1,l),m=(U-.92)/2,x=(U+.92)/2;o.add(rt(i,e,t,n,-h,m,0,l,d)),o.add(rt(i,e,t,n,x,U+h,0,l,d)),l>f+.01&&o.add(rt(i,e,t,n,m,x,f,l,d));let p=[he.orange(),he.orange(),he.orange(),he.orange(),he.orange(),he.orange()];if(o.add(rt(i,e,t,n,m-.06,m,0,f,p,nn+.05)),o.add(rt(i,e,t,n,x,x+.06,0,f,p,nn+.05)),l>f+.01&&o.add(rt(i,e,t,n,m-.06,x+.06,f,f+.07,p,nn+.05)),o.add(rt(i,e,t,n,m,x,0,.03,[he.darkSteel(),he.darkSteel(),he.darkSteel(),he.darkSteel(),he.darkSteel(),he.darkSteel()],nn+.1)),ar.add(Uu(i,e,t,n,m,x,f)),c!=="inner"&&!r){let _=(Tl(n,e,t)?-1:1)*(nn/2+.06),y=U/2,M=i==="W"?De(.12,.07,.3,he.lightOn(),e*U+_,n*at+2.3,t*U+y):De(.3,.07,.12,he.lightOn(),e*U+y,n*at+2.3,t*U+_);o.add(M)}}else{let x=(U-.82)/2,p=(U+.82)/2;o.add(rt(i,e,t,n,-h,x,0,l,d)),o.add(rt(i,e,t,n,p,U+h,0,l,d)),o.add(rt(i,e,t,n,x,p,0,.95,d)),o.add(rt(i,e,t,n,x,p,1.9,l,d));let g=Array(6).fill(he.trim());o.add(rt(i,e,t,n,x,p,.95-.05,.95,g,nn+.06)),o.add(rt(i,e,t,n,x,p,1.9,1.9+.05,g,nn+.04)),o.add(rt(i,e,t,n,x,x+.04,.95,1.9,g,nn+.03)),o.add(rt(i,e,t,n,p-.04,p,.95,1.9,g,nn+.03)),o.add(rt(i,e,t,n,x+.04,p-.04,.95,1.9,Array(6).fill(he.glass()),.03))}}else if(a==="rail"){let d=Array(6).fill(he.yellow());for(let u of[0,U])o.add(rt(i,e,t,n,u-.03,u+.03,0,1.05,d,.06));o.add(rt(i,e,t,n,0,U,1,1.06,d,.05)),o.add(rt(i,e,t,n,0,U,.52,.56,d,.04)),o.add(rt(i,e,t,n,0,U,0,.1,Array(6).fill(he.darkSteel()),.02))}else if(a==="parapet"){let d=Du(i,e,t,n,c);o.add(rt(i,e,t,n,-h-.02,U+h+.02,-.02,.5,d,.22)),o.add(rt(i,e,t,n,-h-.04,U+h+.04,.5,.56,Array(6).fill(he.steel()),.28))}else if(a==="barrier"){let d=new en;d.moveTo(-.3,0),d.lineTo(.3,0),d.lineTo(.3,.08),d.lineTo(.1,.3),d.lineTo(.08,.82),d.lineTo(-.08,.82),d.lineTo(-.1,.3),d.lineTo(-.3,.08);let u=new mn(d,{depth:U-.05,bevelEnabled:!1});i==="W"?u.translate(0,0,.025):(u.rotateY(Math.PI/2),u.translate(.025,0,0));let f=new be(u,he.concrete());f.position.set(e*U,n*at,t*U),i==="N"&&f.position.set(e*U,n*at,t*U),o.add(f);let m=i==="W"?De(.17,.06,U-.1,he.orange(),e*U,n*at+.62,t*U+U/2):De(U-.1,.06,.17,he.orange(),e*U+U/2,n*at+.62,t*U);o.add(m)}return ti(o,i==="W"?hn.wallW:hn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var ar=new xe;function Uu(i,e,t,n,s,r,o,a="base"){if(a!=="base"){let m=Lu(i,e,t,n,s,r,o,a,{wallBox:rt});return m.userData.door={orient:i,col:e,row:t,level:n},ti(m,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let c=new xe,l=Array(6).fill(he.wall("cabin",0)),h=o-.01;c.add(rt(i,e,t,n,s-.02,r+.02,.01,h,l,.06));let d=Array(6).fill(he.orange()),u=Array(6).fill(he.darkSteel()),f=Array(6).fill(he.glass());return h>1.1&&c.add(rt(i,e,t,n,s,r,.98,1.06,d,.075)),h>1.9&&(c.add(rt(i,e,t,n,s+.36,s+.56,1.3,1.85,u,.075)),c.add(rt(i,e,t,n,s+.38,s+.54,1.32,1.83,f,.08))),c.add(rt(i,e,t,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),u,.085)),c.userData.door={orient:i,col:e,row:t,level:n},ti(c,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function x2(i,e,t){return t?Math.min(e.gate.height-i*at,.8):e.gate.height>(i+1)*at?at:Math.min(e.gate.height-i*at,Zr)}function y2(i,e,t,n,s){let r=d=>!!(d&&d.gate&&d.gate.group===s.gate.group),o=i==="W"?Vn.wallW[n]:Vn.wallN[n],a=r(i==="W"?(o[t-1]||[])[e]:o[t][e-1]),c=r(i==="W"?(o[t+1]||[])[e]:o[t][e+1]),l=.1,h=s.gate.kind==="gate";return{startOpen:a,endOpen:c,heavy:h,post:l,left:a?0:l,right:c?U:U-l,signature:`gate:${s.gate.kind}:${s.gate.height}:${a}:${c}`}}function _2(i,e,t,n,s,r,o,a,c=o){let l=new xe,h=new xe,d=n*at+o;h.position.y=d,h.userData.rollUp={bottom:n*at,top:d,gateHeight:c};let u=new xe;u.position.y=-d,h.add(u),l.add(h);let f=o-.01,m=Array(6).fill(a?he.wall("hab",1):he.wall("cabin",0)),x=Array(6).fill(he.darkSteel());u.add(rt(i,e,t,n,s-.005,r+.005,.01,f,m,.07));let p=Math.max(3,Math.round(f/.5));for(let g=1;g<p;g++){let _=.01+(f-.01)*g/p;u.add(rt(i,e,t,n,s,r,_-.015,_+.015,x,.085))}if(a&&f>.6&&n===0){let _=Array(6).fill(he.yellow()),y=Array(6).fill(he.darkSteel());for(let M=0;M<4;M++){let R=s+(r-s)*M/4,C=s+(r-s)*(M+1)/4;u.add(rt(i,e,t,n,R,C,.04,.3,(M+e+t)%2?_:y,.08))}}return l.userData.door={orient:i,col:e,row:t,level:n,rollUp:!0},ti(l,i==="W"?hn.doorW:hn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function zu(i,e,t,n){let s=new xe,r=i*U+U/2,o=e*U+U/2,a=t*at;if(n===Ut.deck)s.add(De(U,.06,U,he.grating(),r,a-.03,o)),s.add(De(.12,.22,U,he.orange(),i*U+.06,a-.17,o)),s.add(De(U,.18,.1,he.orange(),r,a-.15,e*U+.05));else{let c=pa&&Vn.floorStyle?Vn.floorStyle[t][e][i]:null,l=c?Pu(c):n===Ut.roof?he.roof():he.interiorFloor(),h=c?ce.slabEdge():he.slabEdge(),d=c?ce.ceiling():he.ceiling(),u=De(U,wl,U,[h,h,l,d,h,h],r,a-wl/2,o);s.add(u)}return ti(s,hn.floor,t,{biasCol:-1e-4,biasRow:-1e-4})}function v2(i,e){let t=new xe,n=i.level*at,s=Math.min(n+i.height,e);if(s<=n+.05)return t;let r=nn/2+.1,o=a=>i.side==="W"?[Bi(i.col*U+r,n,i.row*U+U/2+a),Bi(i.col*U+r,s,i.row*U+U/2+a)]:[Bi(i.col*U+U/2+a,n,i.row*U+r),Bi(i.col*U+U/2+a,s,i.row*U+r)];for(let a of[-.22,.22]){let[c,l]=o(a);t.add(Sl(c,l,.025,he.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[c]=o(-.22),[l]=o(.22);c.y=l.y=a,t.add(Sl(c,l,.016,he.steel()))}return ti(t,hn.floor,i.level,{auto:!0})}function M2(i){return Bi(i.col*U,i.level*at,i.row*U)}var E2=new ht().makeTranslation(U*St,0,0).multiply(new ht().makeRotationY(-Math.PI/2));function ma(i,e){if(i.source){let h=ma({...i.source,layer:i.layer},e);if(!h)return h;let d=new xe;d.matrixAutoUpdate=!1;for(let u=0;u<i.turns;u++)d.matrix.premultiply(E2);return d.add(h),d.updateMatrixWorld(!0),d}let t=new xe,n=M2(i),s=i.cols*U,r=i.rows*U,o=s/2,a=r/2,c=ft(ku(i.col,i.row,i.level)%1e5+7),l=h=>(t.add(h),h);if(pa){let h=Nu(i);if(h)return t.add(h),t.position.copy(n),ti(t,hn.object,i.level)}if(yu.has(i.kind))return t.add(_u(i)),t.position.copy(n),ti(t,hn.object,i.level);if(bu.has(i.kind))return t.add(wu(i)),t.position.copy(n),ti(t,hn.object,i.level);switch(i.kind){case"console":{l(De(1,.75,.6,he.trim(),o,.375,a-.15));let h=l(De(1,.05,.5,he.screen(Math.floor(c()*3)),o,.85,a-.05));h.rotation.x=-.6,l(De(1,.5,.08,he.darkSteel(),o,1.1,a-.42));break}case"locker":l(De(.9,1.9,.5,he.wall("cabin",0),o,.95,a-.3)),l(De(.02,1.7,.02,he.darkSteel(),o,.95,a-.04));break;case"cabinet":l(De(.9,1.2,.6,he.trim(),o,.6,a)),l(De(.7,.08,.02,he.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])l(De(s-.2,.08,r-.3,he.trim(),o,h,a)),l(De(s-.3,.12,r-.4,Xt("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,d]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])l(De(.05,1.6,.05,he.steel(),h,.8,d));break;case"labTable":l(De(s-.2,.06,r-.3,he.white(),o,.9,a));for(let h of[.2,s-.2])l(De(.06,.9,r-.4,he.trim(),h,.45,a));l(De(.5,.35,.4,he.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)l(wn(.03,.03,.22,Xt("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":l(De(s-.3,.05,.7,he.white(),o,.75,a-.1)),l(De(s-.4,.7,.05,he.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])l(De(.55,.35,.04,he.screen(Math.floor(c()*3)+1),h,1.05,a-.3)),l(De(.06,.2,.06,he.darkSteel(),h,.85,a-.3));break;case"rack":l(De(.7,2,.9,he.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)l(De(.02,.02,.02,Xt("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+c()*.6));break;case"crate":{let h=1+(c()<.45?1:0),d=c()<.5?he.wall("cabin",2):Xt("crateGrey",{color:10132630,roughness:.55,metalness:.2}),u=0;for(let f=0;f<h;f++){let m=f?.65:.95,x=f?.5:.75,p=(c()-.5)*.4,g=new xe;g.add(De(m,x,m*.8,d,0,x/2,0));for(let _ of[-1,1])g.add(De(m+.02,.08,.06,he.orange(),0,x*.5,_*m*.3));g.add(De(m+.02,.04,m*.82,he.trim(),0,x-.02,0)),g.position.set(o+(c()-.5)*.1,u,a+(c()-.5)*.1),g.rotation.y=p,l(g),u+=x}break}case"barrels":for(let h=0;h<3;h++){let d=[3104394,9058844,5923400][h];l(wn(.29,.29,.9,Xt("barrel"+h,{color:d,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":l(De(s-.2,.9,r-.25,he.white(),o,.45,a));for(let h=0;h<i.cols;h++)l(wn(.38,.38,.05,he.darkSteel(),.62+h*U,.92,a,20)).scale.set(1,1,1);break;case"antenna":l(De(.5,.15,.5,he.trim(),o,.07,a)),l(wn(.05,.07,3.6,he.steel(),o,1.8,a));for(let h of[2.2,3])l(De(.9,.04,.04,he.steel(),o,h,a));l(De(.06,.06,.06,Xt("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let d=l(De(s-.3,.05,r/2-.15,Xt("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));d.rotation.x=-.45,l(De(.06,.6,.06,he.steel(),o,.3,h*r/2+r/4))}break}case"dish":l(wn(.08,.12,.8,he.steel(),o,.4,a));{let h=l(new be(new Rn(.6,20,10,0,Math.PI*2,0,.9),he.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=Pn("dishMat",()=>new He({color:14211798,roughness:.4,side:$t}))}break;case"pylon":{let h=at-.24;l(De(.32,h,.32,he.orange(),o,h/2,a)),l(De(.6,.06,.6,he.darkSteel(),o,.03,a)),l(De(.5,.12,.5,he.orange(),o,h-.06,a));break}case"searchlight":l(De(.5,.3,.5,he.trim(),o,.15,a)),l(De(.12,.5,.12,he.darkSteel(),o,.55,a));{let h=l(wn(.24,.3,.45,he.darkSteel(),o,.95,a));h.rotation.x=1.1;let d=l(wn(.22,.22,.03,he.lightOn(),o,1.02,a+.2));d.rotation.x=1.1}break;case"container":{let h=he.container(i.color),d=l(De(s-.15,2.5,r-.15,[h,h,he.container(i.color),he.trim(),h,h],o,1.25,a));for(let u of[.12,s-.12])for(let f of[.12,r-.12])for(let m of[.1,2.4])l(De(.18,.2,.18,he.darkSteel(),u,m,f));for(let u of[o-.35,o+.35])l(De(.04,2.3,.04,he.steel(),u,1.25,r-.06));break}case"truck":{let h=ru();h.position.set(o,0,(r-su.length)/2),l(h);break}case"rover":{let h=he.white();l(De(s-.4,.6,r-.3,h,o,.95,a)),l(De(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),l(De(s-.6,.5,.05,he.glass(),o,1.7,a+r/2-.33));for(let d of[-1,1])l(De(.05,.4,1,he.glass(),o+d*(s/2-.24),1.7,a+r/2-1));l(De(s-.4,.06,r-.3,he.orange(),o,1.27,a)),l(De(s-.6,.12,1.6,he.trim(),o,1.31,a-.6));for(let d of[-1,1])for(let u of[.55,r/2,r-.55]){let f=l(wn(.42,.42,.34,he.rubber(),o+d*(s/2-.2),.42,u,18));f.rotation.z=Math.PI/2;let m=l(wn(.18,.18,.36,he.steel(),o+d*(s/2-.2),.42,u,10));m.rotation.z=Math.PI/2}l(wn(.02,.02,1.2,he.steel(),o-.6,2.4,a+r/2-1.3)),l(De(.25,.12,.08,he.lightOn(),o-.6,1,r-.12)),l(De(.25,.12,.08,he.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let u of[.6,r-.6])l(De(s-.5,.6,.25,he.darkSteel(),o,.3,u));let h=l(wn(1,1,r-.3,he.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let d=l(wn(1.02,1.02,.25,he.orange(),o,1.3,a,28));d.rotation.x=Math.PI/2;for(let u of[.15,r-.15]){let f=l(new be(new Rn(1,24,12),he.white()));f.position.set(o,1.3,u),f.scale.set(1,1,.25)}l(Sl(Bi(o+.6,.3,r-.4),Bi(o+.6,2.2,r-.4),.06,he.steel()));break}case"generator":l(De(s-.3,1.4,r-.4,Xt("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)l(De(s-.6,.04,.02,he.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])l(wn(.08,.08,.9,he.darkSteel(),h,1.8,a-.3));l(De(s-.2,.08,r-.3,he.yellow(),o,1.42,a));break;case"lamp":l(De(.4,.15,.4,he.concrete(),o,.07,a)),l(wn(.06,.08,4.2,he.darkSteel(),o,2.1,a)),l(De(.7,.08,.1,he.darkSteel(),o+.3,4.15,a)),l(De(.36,.1,.24,he.trim(),o+.6,4.1,a)),l(De(.3,.02,.2,he.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*U*.55,d=ll(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),u=l(new be(d,he.rock()));u.position.set(o,h*.18,a),u.rotation.y=c()*6;break}case"tiltrotor":{let h=ou();i.layer&&[...h.children].forEach(d=>{d.name!==i.layer&&h.remove(d)}),h.rotation.y=-Math.PI/2,h.position.set(8*U-.006,0,2*U+.006),l(h);break}case"car":{let h=da[i.type]||da.suv,d=new xe,u=au({type:i.type,color:i.color});u.position.z=-h.length/2,d.add(u),d.position.set(o,0,a),i.cols>i.rows?d.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(d.rotation.y=Math.PI),l(d);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,d=i.bottom||0,u=i.variant||0,f=i.concrete?he.concrete():he.baseRock(u),m=i.concrete?he.concrete():he.rockCut(u),x=l(De(U+.014,h-d,U+.014,[f,f,m,f,f,f],o-.01,(h+d)/2,a-.01));x.userData.noShadowReceive=!0;let p=x.geometry.attributes.position,g=x.geometry.attributes.uv,_=x.geometry.attributes.normal;for(let y=0;y<p.count;y++){let M=i.col*U+o+p.getX(y),R=(h+d)/2+p.getY(y),C=i.row*U+a+p.getZ(y);Math.abs(_.getY(y))>.5?g.setXY(y,M/8,C/8):Math.abs(_.getX(y))>.5?g.setXY(y,C/8,R/8):g.setXY(y,M/8,R/8)}break}case"liftPlatform":{l(De(s-.04,.03,r-.04,he.darkSteel(),o,.06,a));for(let u=2.5;u<s-.1;u+=2.5)l(De(.03,.035,r-.3,he.rubber(),u,.062,a));for(let u=2.5;u<r-.1;u+=2.5)l(De(s-.3,.035,.03,he.rubber(),o,.062,u));let h=.5,d=.22;for(let u=0;u<s-1e-6;u+=h){let f=Math.round(u/h)%2?he.rubber():he.yellow(),m=Math.min(h,s-u);l(De(m,.04,d,f,u+m/2,.065,d/2+.03)),l(De(m,.04,d,f,u+m/2,.065,r-d/2-.03))}for(let u=d+.03;u<r-d-.03-1e-6;u+=h){let f=Math.round(u/h)%2?he.yellow():he.rubber(),m=Math.min(h,r-d-.03-u);l(De(d,.04,m,f,d/2+.03,.065,u+m/2)),l(De(d,.04,m,f,s-d/2-.03,.065,u+m/2))}break}case"paint":l(De(.1,.012,r-.12,he.paint(),.06,.006,a));break;case"ladder":return v2(i,(e+1)*at+.95);case"towerLeg":return null;default:l(De(s*.8,.8,r*.8,he.trim(),o,.4,a))}return t.position.copy(n),ti(t,hn.object,i.level)}var Hy=_i+4,By=Vn.concrete,Gy={tracks:[[[5.5*U,15.5*U],[7*U,13*U],[8.5*U,12.2*U],[12*U,12.4*U],[16*U,13.2*U],[21*U,12.5*U],[24*U,12*U]],[[9*U,16.5*U],[9.5*U,20*U],[10*U,24*U]]],lines:[{from:[1.6*U,11.2*U],to:[12.3*U,11.2*U]},{from:[12.3*U,1.6*U],to:[12.3*U,11.2*U]},{from:[14.5*U,3.3*U],to:[14.5*U,12.5*U]},{from:[14.5*U,12.5*U],to:[20.5*U,12.5*U]}],hazards:[[5.6*U,10.15*U,7.4*U,10.45*U],[11.15*U,5.6*U,11.45*U,7.4*U],[16.6*U,12.05*U,18.4*U,12.35*U]],pads:[[4.6*U,19*U,3.2*U]],stains:[[8.5*U,14*U,1.4],[13.5*U,2.5*U,1],[17*U,7*U,1.2],[4*U,18*U,.8],[21.5*U,7.8*U,.9]]};function Fu(){return ar}function Ou(){return ar=new xe,ar}function Bu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new It,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Hu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=Hu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Hu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ht(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Gu(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){t.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new it(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&w2(o);let c=o.attributes.position.count,l=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:c,materialIndex:0}];for(let h of l){let d=r[h.materialIndex||0];if(!d||!d.visible)continue;let u=Math.min(h.count,c-h.start);if(u<=0)continue;let f=l.length===1?o:b2(o,h.start,u),m=!!d.vertexColors&&!!f.attributes.color;!m&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${d.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${m?1:0}`;e.has(x)||e.set(x,{material:d,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),e.get(x).geometries.push(f)}l.length>1&&o.dispose()});let n=new xe;for(let s of e.values()){let r=Bu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new be(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of t)n.attach(s);return n}function b2(i,e,t){let n=new It;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Ht(r.array.slice(e*o,(e+t)*o),o,r.normalized))}return n}function w2(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,c=n[o];n[o]=n[a],n[a]=c}e.needsUpdate=!0}}var Ku=61,S2=35,lr=Ku/(U*Math.SQRT1_2),Kr=Math.asin(S2/Ku),T2=lr*Math.cos(Kr),A2=lr*Math.sin(Kr),ya=new ye(Math.SQRT1_2,Math.SQRT1_2),dn=new Ys(-1,1,1,-1,1,300);dn.position.set(ms.x+ya.x*Math.cos(Kr)*120,Math.sin(Kr)*120,ms.z+ya.y*Math.cos(Kr)*120);dn.lookAt(ms);dn.updateMatrixWorld(!0);var Vu=new L(0,0,0).applyMatrix4(dn.matrixWorldInverse),Wu=new L(ya.x,0,ya.y),Xu=new L(0,1,0),R2=new ht().makeTranslation(U*St,0,0).multiply(new ht().makeRotationY(-Math.PI/2)),ai=new xe;ai.matrixAutoUpdate=!1;In.add(ai);var ju=[],jr=[],gs=null,Yu=0,vi=jn-1,xs=!1,Tt={x:0,y:0,width:1,height:1,ratio:1},$r=!1,Jr={buildMs:0,drawCalls:0,triangles:0,proxies:0};ut.domElement.style.display="none";ut.shadowMap.autoUpdate=!1;ut.autoClear=!1;ut.localClippingEnabled=!1;{let i=_i/2+2;Object.assign(xn.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:140}),xn.shadow.camera.updateProjectionMatrix(),xn.shadow.mapSize.set(4096,4096)}var C2=()=>new Promise(i=>setTimeout(i,0));function qu(i,e,t){let n=e*at;if(n>=i.height-1e-6)return null;let s=Math.min(i.height,t?n+.8:n+at);return ma({...i,bottom:n,top:s},jn-1)}async function P2(i,e){let t=performance.now(),n=new Map;i.forEach((l,h)=>n.set(`${l[0]}|${l[1]}|${l[2]}|${l[3]===0?"W":"N"}`,h));let s=new xe,r=new be(new Di(_i+40,_i+40),new He({color:1315343,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(_i/2,-.03,_i/2),r.receiveShadow=!0,s.add(r);let o=[];for(let l=0;l<St;l++)for(let h=0;h<St;h++)Vn.floor[0][l][h]===Ut.interior&&o.push([h,l]);let a=new Zs(new gt(U+.004,.04,U+.004),he.interiorFloor(),o.length),c=new ht;o.forEach(([l,h],d)=>a.setMatrixAt(d,c.makeTranslation((l+.5)*U,.025,(h+.5)*U))),a.receiveShadow=!0,s.add(a),Or(s,.28),ai.add(s);for(let l=0;l<jn;l++){let h=new xe,d=new xe,u=new xe,f=new xe,m=new xe;for(let p=0;p<=St;p++)for(let g=0;g<=St;g++){for(let _ of["W","N"]){let y=(_==="W"?Vn.wallW:Vn.wallN)[l][p][g];if(!y||!y.type||y.type==="hull")continue;let M=y.type==="wall"||y.type==="door"||y.type==="window";for(let R of M?[!1,!0]:[!1]){Ou();let C=Al(_,g,p,l,y,R);(R?d:h).add(C),M||d.add(Al(_,g,p,l,y,!1));let I=Fu(),k=n.get(`${g}|${p}|${l}|${_}`);y.type==="door"&&k!==void 0&&I.children.length&&(jr[k]||(jr[k]={along:_==="W"?new L(0,0,1):new L(1,0,0),level:l,rollUp:!!y.gate}),jr[k][R?"cut":"full"]=I,Or(I,.28),ai.add(I))}}if(l>0&&p<St&&g<St){let _=Vn.floor[l][p][g];(_===Ut.interior||_===Ut.roof||_===Ut.deck)&&m.add(zu(g,p,l,_))}}for(let p of Vn.objects){if(p.kind==="rockFill"){let _=qu(p,l,!1),y=qu(p,l,!0);_&&u.add(_),y&&f.add(y);continue}if(p.level!==l)continue;let g=ma(p,jn-1);g&&m.add(g)}let x={wallsFull:h,wallsCut:d,rockFull:u,rockCut:f,objects:m};for(let p of Object.keys(x)){Or(x[p],.28);let g=Gu(x[p]);g.name=`${p}${l}`,x[p]=g,ai.add(g)}ju[l]=x,e&&e((l+1)/jn),await C2()}Jr.buildMs=Math.round(performance.now()-t)}function ga(){for(let i=0;i<jn;i++){let e=ju[i];if(!e)continue;let t=i<=vi,n=xs&&i===vi;e.wallsFull.visible=t&&!n,e.wallsCut.visible=t&&n,e.rockFull.visible=t&&!n,e.rockCut.visible=t&&n,e.objects.visible=t}jr.forEach(i=>{if(!i)return;let e=i.level<=vi,t=xs&&i.level===vi;i.full&&(i.full.visible=e&&!t),i.cut&&(i.cut.visible=e&&t)}),ut.shadowMap.needsUpdate=!0}function xa(){let i=Vu.x+(Tt.x-gs.origin[0])/lr,e=Vu.y-(Tt.y-gs.origin[1])/lr;dn.left=i,dn.right=i+Tt.width/lr,dn.top=e,dn.bottom=e-Tt.height/lr,dn.updateProjectionMatrix()}var Rl=new Ui,I2="void main() { gl_Position = vec4(position, 1.0); }",L2="void main() { gl_FragColor = vec4(0.0); }",N2=new kn({vertexShader:I2,fragmentShader:L2,colorWrite:!1,depthWrite:!0,depthTest:!0,side:$t}),Zu=[];function D2(i,e){let t=Zu[i];if(!t||t.userData.quads<e){t&&(Rl.remove(t),t.geometry.dispose()),e=Math.ceil(e/16)*16;let n=new It;n.setAttribute("position",new Ht(new Float32Array(e*4*3),3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+2,r*4+1,r*4+1,r*4+2,r*4+3);n.setIndex(s),t=new be(n,N2),t.frustumCulled=!1,t.userData.quads=e,Zu[i]=t,Rl.add(t)}return t}var U2=new L;function Cl(i){return U2.copy(i).project(dn).z}var Pl=i=>(i-Tt.x)/Tt.width*2-1,Il=i=>1-(i-Tt.y)/Tt.height*2;function $u(i,e,t,n,s,r,o,a){[[t,s,o],[n,s,o],[t,r,a],[n,r,a]].forEach(([l,h,d],u)=>{let f=(e*4+u)*3;i[f]=Pl(l),i[f+1]=Il(h),i[f+2]=d})}var Ju=new na;function k2(i,e,t){Ju.setFromCamera(new ye(Pl(i),Il(e)),dn);let n=Ju.ray,s=(t-n.origin.y)/n.direction.y;return Cl(n.origin.clone().addScaledVector(n.direction,s))}function z2(i,e,t){let s=new L(t.foot[0]*U,t.foot[2],t.foot[1]*U).applyMatrix4(ai.matrix).addScaledVector(Wu,t.pull),r=a=>a<=t.footY?Cl(s.clone().addScaledVector(Xu,(t.footY-a)/T2)):Cl(s.clone().addScaledVector(Wu,(a-t.footY)/A2).addScaledVector(Xu,.02)),o=Math.max(t.y0,Math.min(t.y1,t.footY));$u(i,e,t.x0,t.x1,t.y0,o,r(t.y0),r(o)),$u(i,e+1,t.x0,t.x1,o,t.y1,r(o),r(t.y1))}var Qu={supported:zt==="base",canvas:ut.domElement,stats:Jr,get ready(){return $r},async init(i){return gs=i.field,await P2(i.doors||[],i.onProgress),ga(),$r=!0,Qu},setViewport(i,e,t,n,s){let r=t!==Tt.width||n!==Tt.height||s!==Tt.ratio;Tt={x:i,y:e,width:t,height:n,ratio:s},r&&(ut.setPixelRatio(s),ut.setSize(t,n))},setTurns(i){Yu=(i%4+4)%4,ai.matrix.identity();for(let e=0;e<Yu;e++)ai.matrix.premultiply(R2);ai.matrixWorldNeedsUpdate=!0,ut.shadowMap.needsUpdate=!0},setLevel(i,e){i===vi&&!!e===xs||(vi=i,xs=!!e,ga())},setDoor(i,e,t){let n=jr[i];if(n)for(let s of[n.full,n.cut])s&&(n.rollUp?s.traverse(r=>{let o=r.userData.rollUp;if(!o)return;let a=e*o.gateHeight;r.scale.y=Math.max(.002,(o.top-Math.max(o.bottom,a))/(o.top-o.bottom))}):s.position.copy(n.along).multiplyScalar(e*t))},render(){$r&&(xa(),ut.setClearColor(In.background||0,1),ut.clear(!0,!0,!0),ut.render(In,dn),Jr.drawCalls=ut.info.render.calls,Jr.triangles=ut.info.render.triangles)},renderOccluders(i,e){if(!$r)return;xa(),ut.setClearColor(0,0),ut.clear(!0,!0,!0);let t=i||[],n=D2(0,1+t.length*2),s=n.geometry.attributes.position.array,r=e+.06,o=Tt.x,a=Tt.x+Tt.width,c=Tt.y,l=Tt.y+Tt.height;[[o,c],[a,c],[o,l],[a,l]].forEach(([u,f],m)=>{s[m*3]=Pl(u),s[m*3+1]=Il(f),s[m*3+2]=k2(u,f,r)}),t.forEach((u,f)=>z2(s,1+f*2,u)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.setDrawRange(0,(1+t.length*2)*6);let d=In.background;ut.render(Rl,dn),In.background=null,ut.render(In,dn),In.background=d,Jr.proxies=t.length},pixelOf(i,e,t){xa();let n=new L(i*U,t||0,e*U).applyMatrix4(ai.matrix).project(dn);return{x:Tt.x+(n.x+1)/2*Tt.width,y:Tt.y+(1-n.y)/2*Tt.height}},snapshot(i){if(!$r)return null;let e=Math.round(i*gs.height/gs.width),t={...Tt},n=vi,s=xs;Tt={x:0,y:0,width:gs.width,height:gs.height,ratio:1},vi=jn-1,xs=!1,ga(),xa();let r=new $n(i,e,{samples:4,colorSpace:an});ut.setRenderTarget(r),ut.setClearColor(1315343,1),ut.clear(!0,!0,!0),ut.render(In,dn);let o=new Uint8Array(i*e*4);ut.readRenderTargetPixels(r,0,0,i,e,o),ut.setRenderTarget(null),r.dispose(),Tt=t,vi=n,xs=s,ga();let a=document.createElement("canvas");a.width=i,a.height=e;let c=a.getContext("2d"),l=c.createImageData(i,e);for(let h=0;h<e;h++)l.data.set(o.subarray((e-1-h)*i*4,(e-h)*i*4),h*i*4);return c.putImageData(l,0,0),a}};window.Map3D=Qu;})();
