// Собрано tools/render/build_map3d.sh из tools/render/map3d.js (three.js 0.162.0). Не править вручную.
(()=>{var ec="162";var lf=0,Fc=1,cf=2;var yd=1,tc=2,gi=3,Di=0,hn=1,$t=2,Ii=0,Os=1,cl=2,Oc=3,Hc=4,hf=5,ji=100,df=101,uf=102,Bc=103,Gc=104,ff=200,pf=201,mf=202,gf=203,hl=204,dl=205,xf=206,yf=207,_f=208,vf=209,Mf=210,Ef=211,bf=212,wf=213,Sf=214,Tf=0,Af=1,Rf=2,Co=3,Cf=4,Pf=5,If=6,Lf=7,_d=0,Nf=1,Df=2,Li=0,Uf=1,kf=2,zf=3,nc=4,Ff=5,Of=6,Hf=7;var vd=300,Gs=301,Vs=302,ul=303,fl=304,sa=306,is=1e3,Qt=1001,pl=1002,jt=1003,Vc=1004;var ur=1005;var vn=1006,Sa=1007;var es=1008;var Ni=1009,Bf=1010,Gf=1011,ic=1012,Md=1013,Pi=1014,oi=1015,Sr=1016,Ed=1017,bd=1018,ts=1020,Vf=1021,Kn=1023,Wf=1024,Xf=1025,ns=1026,Ws=1027,wd=1028,Sd=1029,Yf=1030,Td=1031,Ad=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,Wc=35840,Xc=35841,Yc=35842,qc=35843,Rd=36196,Zc=37492,$c=37496,Jc=37808,Kc=37809,jc=37810,Qc=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,Pa=36492,hh=36494,dh=36495,qf=36283,uh=36284,fh=36285,ph=36286;var Po=2300,Io=2301,Ia=2302,mh=2400,gh=2401,xh=2402;var Zf=3200,Cd=3201,Pd=0,$f=1,Ci="",cn="srgb",Hi="srgb-linear",sc="display-p3",ra="display-p3-linear",Lo="linear",wt="srgb",No="rec709",Do="p3";var ys=7680;var yh=519,Jf=512,Kf=513,jf=514,Id=515,Qf=516,e0=517,t0=518,n0=519,_h=35044;var vh="300 es",ml=1035,xi=2e3,Uo=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var La=Math.PI/180,gl=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function i0(i,e){return(i%e+e)%e}function Na(i,e,t){return(1-t)*i+t*e}function Mh(i){return(i&i-1)===0&&i!==0}function xl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],_=s[1],y=s[4],v=s[7],T=s[2],C=s[5],I=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*p+a*y+l*C,r[6]=o*g+a*v+l*I,r[1]=c*x+h*_+d*T,r[4]=c*p+h*y+d*C,r[7]=c*g+h*v+d*I,r[2]=u*x+f*_+m*T,r[5]=u*p+f*y+m*C,r[8]=u*g+f*v+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Da=new nt;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function s0(){let i=ko("canvas");return i.style.display="block",i}var Eh={};function r0(i){i in Eh||(Eh[i]=!0,console.warn(i))}var bh=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[Hi]:{transfer:Lo,primaries:No,toReference:i=>i,fromReference:i=>i},[cn]:{transfer:wt,primaries:No,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ra]:{transfer:Lo,primaries:Do,toReference:i=>i.applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh)},[sc]:{transfer:wt,primaries:Do,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh).convertLinearToSRGB()}},o0=new Set([Hi,ra]),_t={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!o0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=no[e].toReference,s=no[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return no[i].primaries},getTransfer:function(i){return i===Ci?Lo:no[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=ko("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,Fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l0=0,En=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=vn,o=es,a=Kn,l=Ni,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=js(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=vd;En.DEFAULT_ANISOTROPY=1;var Pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(f+1)/2,T=(g+1)/2,C=(h+u)/4,I=(d+x)/4,k=(m+p)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=I/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=k/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=k/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _l=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let p=1-a,g=l*u+c*f+h*m+d*x,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let T=Math.sqrt(y),C=Math.atan2(T,g*_);p=Math.sin(p*C)/T,a=Math.sin(a*C)/T}let v=a*_;if(l=l*p+u*v,c=c*p+f*v,h=h*p+m*v,d=d*p+x*v,p===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-a*f,e[t+2]=c*m+h*f+a*u-l*d,e[t+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new L,Sh=new ai,Qn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),so.subVectors(this.max,pr),vs.subVectors(e.a,pr),Ms.subVectors(e.b,pr),Es.subVectors(e.c,pr),bi.subVectors(Ms,vs),wi.subVectors(Es,Ms),Xi.subVectors(vs,Es);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Xi.z,Xi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Xi.z,0,-Xi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Xi.y,Xi.x,0];return!Fa(t,vs,Ms,Es,so)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,vs,Ms,Es,so))?!1:(ro.crossVectors(bi,wi),t=[ro.x,ro.y,ro.z],Fa(t,vs,Ms,Es,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,io=new Qn,vs=new L,Ms=new L,Es=new L,bi=new L,wi=new L,Xi=new L,pr=new L,so=new L,ro=new L,Yi=new L;function Fa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yi.fromArray(i,r);let a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var c0=new Qn,mr=new L,Oa=new L,ss=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Oa)),this.expandByPoint(mr.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new L,Ha=new L,oo=new L,Si=new L,Ba=new L,ao=new L,Ga=new L,Ho=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ha.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ha);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oo),a=Si.dot(this.direction),l=-Si.dot(oo),c=Si.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ha).addScaledVector(oo,u),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){Ba.subVectors(t,e),ao.subVectors(n,e),Ga.crossVectors(Ba,ao);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);let l=a*this.direction.dot(ao.crossVectors(Si,ao));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,d0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ti.crossVectors(n,Rn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ti.crossVectors(n,Rn)),Ti.normalize(),lo.crossVectors(Rn,Ti),s[0]=Ti.x,s[4]=lo.x,s[8]=Rn.x,s[1]=Ti.y,s[5]=lo.y,s[9]=Rn.y,s[2]=Ti.z,s[6]=lo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],y=n[7],v=n[11],T=n[15],C=s[0],I=s[4],k=s[8],A=s[12],M=s[1],S=s[5],ue=s[9],K=s[13],N=s[2],O=s[6],B=s[10],q=s[14],U=s[3],E=s[7],H=s[11],X=s[15];return r[0]=o*C+a*M+l*N+c*U,r[4]=o*I+a*S+l*O+c*E,r[8]=o*k+a*ue+l*B+c*H,r[12]=o*A+a*K+l*q+c*X,r[1]=h*C+d*M+u*N+f*U,r[5]=h*I+d*S+u*O+f*E,r[9]=h*k+d*ue+u*B+f*H,r[13]=h*A+d*K+u*q+f*X,r[2]=m*C+x*M+p*N+g*U,r[6]=m*I+x*S+p*O+g*E,r[10]=m*k+x*ue+p*B+g*H,r[14]=m*A+x*K+p*q+g*X,r[3]=_*C+y*M+v*N+T*U,r[7]=_*I+y*S+v*O+T*E,r[11]=_*k+y*ue+v*B+T*H,r[15]=_*A+y*K+v*q+T*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15];return m*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+x*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+p*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-t*l*d+t*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=d*p*c-x*u*c+x*l*f-a*p*f-d*l*g+a*u*g,y=m*u*c-h*p*c-m*l*f+o*p*f+h*l*g-o*u*g,v=h*x*c-m*d*c+m*a*f-o*x*f-h*a*g+o*d*g,T=m*d*l-h*x*l-m*a*u+o*x*u+h*a*p-o*d*p,C=t*_+n*y+s*v+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=_*I,e[1]=(x*u*r-d*p*r-x*s*f+n*p*f+d*s*g-n*u*g)*I,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*g+n*l*g)*I,e[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*I,e[4]=y*I,e[5]=(h*p*r-m*u*r+m*s*f-t*p*f-h*s*g+t*u*g)*I,e[6]=(m*l*r-o*p*r-m*s*c+t*p*c+o*s*g-t*l*g)*I,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*I,e[8]=v*I,e[9]=(m*d*r-h*x*r-m*n*f+t*x*f+h*n*g-t*d*g)*I,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*g+t*a*g)*I,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*I,e[12]=T*I,e[13]=(h*x*s-m*d*s+m*n*u-t*x*u-h*n*p+t*d*p)*I,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*p-t*a*p)*I,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*u+t*a*u)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,_=l*c,y=l*h,v=l*d,T=n.x,C=n.y,I=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+v)*T,s[2]=(m-y)*T,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(u+g))*C,s[6]=(p+_)*C,s[7]=0,s[8]=(m+y)*I,s[9]=(p-_)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,h=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,m;if(a===xi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Uo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xi){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*c,f=(n+s)*h,m,x;if(a===xi)m=(o+r)*d,x=-2*d;else if(a===Uo)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new L,Zn=new ut,h0=new L(0,0,0),d0=new L(1,1,1),Ti=new L,lo=new L,Rn=new L,Th=new ut,Ah=new ai,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,Rh=new L,ws=new ai,fi=new ut,co=new L,gr=new L,f0=new L,p0=new ai,Ch=new L(1,0,0),Ph=new L(0,1,0),Ih=new L(0,0,1),m0={type:"added"},g0={type:"removed"},Va={type:"childadded",child:null},Wa={type:"childremoved",child:null},mn=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Fn,n=new ai,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new nt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(gr,co,this.up):fi.lookAt(co,gr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(fi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(m0),Va.child=e,this.dispatchEvent(Va),Va.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,p0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mn.DEFAULT_UP=new L(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new L,pi=new L,Xa=new L,mi=new L,Ss=new L,Ts=new L,Lh=new L,Ya=new L,qa=new L,Za=new L,Us=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),pi.subVectors(n,t),Xa.subVectors(e,t);let o=$n.dot($n),a=$n.dot(pi),l=$n.dot(Xa),c=pi.dot(pi),h=pi.dot(Xa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),pi.subVectors(e,t),$n.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),$n.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),Ts.subVectors(r,n),Ya.subVectors(e,n);let l=Ss.dot(Ya),c=Ts.dot(Ya);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,s);let h=Ss.dot(qa),d=Ts.dot(qa);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ss,o);Za.subVectors(e,r);let f=Ss.dot(Za),m=Ts.dot(Za);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ts,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Lh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Lh,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ho={h:0,s:0,l:0};function $a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=i0(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return _t.fromWorkingColorSpace(ln.copy(this),e),Math.round(Zt(ln.r*255,0,255))*65536+Math.round(Zt(ln.g*255,0,255))*256+Math.round(Zt(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){_t.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ho);let n=Na(Ai.h,ho.h,t),s=Na(Ai.s,ho.s,t),r=Na(Ai.l,ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Je;Je.NAMES=Nd;var x0=0,rs=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Os,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},os=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,uo=new ve,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return r0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var Bo=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Go=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=0,zn=new ut,Ja=new mn,As=new L,Cn=new Qn,xr=new Qn,qt=new L,It=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Go:Bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Cn.min,xr.min),Cn.expandByPoint(qt),qt.addVectors(Cn.max,xr.max),Cn.expandByPoint(qt)):(Cn.expandByPoint(xr.min),Cn.expandByPoint(xr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),qt.add(As)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new L,l[k]=new L;let c=new L,h=new L,d=new L,u=new ve,f=new ve,m=new ve,x=new L,p=new L;function g(k,A,M){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,k),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[k].add(x),a[A].add(x),a[M].add(x),l[k].add(p),l[A].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,A=_.length;k<A;++k){let M=_[k],S=M.start,ue=M.count;for(let K=S,N=S+ue;K<N;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let y=new L,v=new L,T=new L,C=new L;function I(k){T.fromBufferAttribute(s,k),C.copy(T);let A=a[k];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),v.crossVectors(C,A);let S=v.dot(l[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,S)}for(let k=0,A=_.length;k<A;++k){let M=_[k],S=M.start,ue=M.count;for(let K=S,N=S+ue;K<N;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ht(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new ut,qi=new Ho,fo=new ss,Dh=new L,Rs=new L,Cs=new L,Ps=new L,Ka=new L,po=new L,mo=new ve,go=new ve,xo=new ve,Uh=new L,kh=new L,zh=new L,yo=new L,_o=new L,be=class extends mn{constructor(e=new It,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ka.fromBufferAttribute(d,e),o?po.addScaledVector(Ka,h):po.addScaledVector(Ka.sub(t),h))}t.add(po)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(fo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(fo,Dh)===null||qi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let C=a.getX(v),I=a.getX(v+1),k=a.getX(v+2);s=vo(this,g,e,n,c,h,d,C,I,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=vo(this,o,e,n,c,h,d,_,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let C=v,I=v+1,k=v+2;s=vo(this,g,e,n,c,h,d,C,I,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=p,y=p+1,v=p+2;s=vo(this,o,e,n,c,h,d,_,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function _0(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;_o.copy(a),_o.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:i}}function vo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);let h=_0(i,e,t,n,Rs,Cs,Ps,yo);if(h){s&&(mo.fromBufferAttribute(s,a),go.fromBufferAttribute(s,l),xo.fromBufferAttribute(s,c),h.uv=Us.getInterpolation(yo,Rs,Cs,Ps,mo,go,xo,new ve)),r&&(mo.fromBufferAttribute(r,a),go.fromBufferAttribute(r,l),xo.fromBufferAttribute(r,c),h.uv1=Us.getInterpolation(yo,Rs,Cs,Ps,mo,go,xo,new ve)),o&&(Uh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,l),zh.fromBufferAttribute(o,c),h.normal=Us.getInterpolation(yo,Rs,Cs,Ps,Uh,kh,zh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Us.getNormal(Rs,Cs,Ps,d.normal),h.face=d}return h}var xt=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function m(x,p,g,_,y,v,T,C,I,k,A){let M=v/I,S=T/k,ue=v/2,K=T/2,N=C/2,O=I+1,B=k+1,q=0,U=0,E=new L;for(let H=0;H<B;H++){let X=H*S-K;for(let ae=0;ae<O;ae++){let ye=ae*M-ue;E[x]=ye*_,E[p]=X*y,E[g]=N,c.push(E.x,E.y,E.z),E[x]=0,E[p]=0,E[g]=C>0?1:-1,h.push(E.x,E.y,E.z),d.push(ae/I),d.push(1-H/k),q+=1}}for(let H=0;H<k;H++)for(let X=0;X<I;X++){let ae=u+X+O*H,ye=u+X+O*(H+1),G=u+(X+1)+O*(H+1),fe=u+(X+1)+O*H;l.push(ae,ye,fe),l.push(ye,G,fe),U+=6}a.addGroup(f,U,A),f+=U,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=Xs(i[t]);for(let s in n)e[s]=n[s]}return e}function v0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}var M0={clone:Xs,merge:pn},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vo=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new L,Fh=new ve,Oh=new ve,Mn=class extends Vo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,vl=class extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new Mn(Is,Ls,e,t);r.layers=this.layers,this.add(r);let o=new Mn(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new Mn(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new Mn(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Mn(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Wo=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ii});r.uniforms.tEquirect.value=t;let o=new be(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=vn),new vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ja=new L,w0=new L,S0=new nt,Jn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ja.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S0.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new ss,Mo=new L,Ar=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],p=s[11],g=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,p-f,v-g).normalize(),n[1].setComponents(l+r,u+c,p+f,v+g).normalize(),n[2].setComponents(l+o,u+h,p+m,v+_).normalize(),n[3].setComponents(l-o,u-h,p-m,v-_).normalize(),n[4].setComponents(l-a,u-d,p-x,v-y).normalize(),t===xi)n[5].setComponents(l+a,u+d,p+x,v+y).normalize();else if(t===Uo)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,f=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,m=h.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&m.length===0&&i.bufferSubData(d,0,u),m.length!==0){for(let x=0,p=m.length;x<p;x++){let g=m[x];t?i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var ki=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<c;y++){let v=y*d-r;m.push(v,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,v=_+c*(g+1),T=_+1+c*(g+1),C=_+1+c*g;f.push(y,v,C),f.push(v,T,C)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`
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
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zp=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:N0,aomap_pars_fragment:D0,batching_pars_vertex:U0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:H0,bumpmap_pars_fragment:B0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:Y0,color_pars_fragment:q0,color_pars_vertex:Z0,color_vertex:$0,common:J0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:dp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:yp,lights_pars_begin:_p,lights_toon_fragment:Mp,lights_toon_pars_fragment:Ep,lights_phong_fragment:bp,lights_phong_pars_fragment:wp,lights_physical_fragment:Sp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ap,lights_fragment_maps:Rp,lights_fragment_end:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Np,map_fragment:Dp,map_pars_fragment:Up,map_particle_fragment:kp,map_particle_pars_fragment:zp,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Hp,morphcolor_vertex:Bp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:Yp,normal_pars_fragment:qp,normal_pars_vertex:Zp,normal_vertex:$p,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:dm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:ym,tonemapping_fragment:_m,tonemapping_pars_fragment:vm,transmission_fragment:Mm,transmission_pars_fragment:Em,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Sm,worldpos_vertex:Tm,background_vert:Am,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Lm,depth_vert:Nm,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:km,equirect_vert:zm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Hm,meshbasic_vert:Bm,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:Ym,meshnormal_vert:qm,meshnormal_frag:Zm,meshphong_vert:$m,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},Ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ri={basic:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:pn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:pn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:pn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:pn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:pn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:pn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:pn([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:pn([Ce.lights,Ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ri.physical={uniforms:pn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Eo={r:0,b:0,g:0},$i=new Fn,ag=new ut;function lg(i,e,t,n,s,r,o){let a=new Je(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(p,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===sa)?(h===void 0&&(h=new be(new xt(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Xs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(g.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler($i)),h.material.toneMapped=_t.getTransfer(y.colorSpace)!==wt,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new be(new ki(2,2),new On({name:"BackgroundMaterial",uniforms:Xs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,g){p.getRGB(Eo,Dd(i)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:m}}function cg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(N,O,B,q,U){let E=!1;if(o){let H=x(q,B,O);c!==H&&(c=H,f(c.object)),E=g(N,q,B,U),E&&_(N,q,B,U)}else{let H=O.wireframe===!0;(c.geometry!==q.id||c.program!==B.id||c.wireframe!==H)&&(c.geometry=q.id,c.program=B.id,c.wireframe=H,E=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(E||h)&&(h=!1,k(N,O,B,q),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function m(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,O,B){let q=B.wireframe===!0,U=a[N.id];U===void 0&&(U={},a[N.id]=U);let E=U[O.id];E===void 0&&(E={},U[O.id]=E);let H=E[q];return H===void 0&&(H=p(u()),E[q]=H),H}function p(N){let O=[],B=[],q=[];for(let U=0;U<s;U++)O[U]=0,B[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:q,object:N,attributes:{},index:null}}function g(N,O,B,q){let U=c.attributes,E=O.attributes,H=0,X=B.getAttributes();for(let ae in X)if(X[ae].location>=0){let G=U[ae],fe=E[ae];if(fe===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),G===void 0||G.attribute!==fe||fe&&G.data!==fe.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function _(N,O,B,q){let U={},E=O.attributes,H=0,X=B.getAttributes();for(let ae in X)if(X[ae].location>=0){let G=E[ae];G===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));let fe={};fe.attribute=G,G&&G.data&&(fe.data=G.data),U[ae]=fe,H++}c.attributes=U,c.attributesNum=H,c.index=q}function y(){let N=c.newAttributes;for(let O=0,B=N.length;O<B;O++)N[O]=0}function v(N){T(N,0)}function T(N,O){let B=c.newAttributes,q=c.enabledAttributes,U=c.attributeDivisors;B[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),U[N]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),U[N]=O)}function C(){let N=c.newAttributes,O=c.enabledAttributes;for(let B=0,q=O.length;B<q;B++)O[B]!==N[B]&&(i.disableVertexAttribArray(B),O[B]=0)}function I(N,O,B,q,U,E,H){H===!0?i.vertexAttribIPointer(N,O,B,U,E):i.vertexAttribPointer(N,O,B,q,U,E)}function k(N,O,B,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let U=q.attributes,E=B.getAttributes(),H=O.defaultAttributeValues;for(let X in E){let ae=E[X];if(ae.location>=0){let ye=U[X];if(ye===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){let G=ye.normalized,fe=ye.itemSize,we=t.get(ye);if(we===void 0)continue;let Ae=we.buffer,F=we.type,Z=we.bytesPerElement,ge=n.isWebGL2===!0&&(F===i.INT||F===i.UNSIGNED_INT||ye.gpuType===Md);if(ye.isInterleavedBufferAttribute){let pe=ye.data,w=pe.stride,ie=ye.offset;if(pe.isInstancedInterleavedBuffer){for(let Q=0;Q<ae.locationSize;Q++)T(ae.location+Q,pe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Q=0;Q<ae.locationSize;Q++)v(ae.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Q=0;Q<ae.locationSize;Q++)I(ae.location+Q,fe/ae.locationSize,F,G,w*Z,(ie+fe/ae.locationSize*Q)*Z,ge)}else{if(ye.isInstancedBufferAttribute){for(let pe=0;pe<ae.locationSize;pe++)T(ae.location+pe,ye.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let pe=0;pe<ae.locationSize;pe++)v(ae.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let pe=0;pe<ae.locationSize;pe++)I(ae.location+pe,fe/ae.locationSize,F,G,fe*Z,fe/ae.locationSize*pe*Z,ge)}}else if(H!==void 0){let G=H[X];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(ae.location,G);break;case 3:i.vertexAttrib3fv(ae.location,G);break;case 4:i.vertexAttrib4fv(ae.location,G);break;default:i.vertexAttrib1fv(ae.location,G)}}}}C()}function A(){ue();for(let N in a){let O=a[N];for(let B in O){let q=O[B];for(let U in q)m(q[U].object),delete q[U];delete O[B]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;let O=a[N.id];for(let B in O){let q=O[B];for(let U in q)m(q[U].object),delete q[U];delete O[B]}delete a[N.id]}function S(N){for(let O in a){let B=a[O];if(B[N.id]===void 0)continue;let q=B[N.id];for(let U in q)m(q[U].object),delete q[U];delete B[N.id]}}function ue(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ue,resetDefaultState:K,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:v,disableUnusedAttributes:C}}function hg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(h[m],d[m]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function dg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=o||e.has("OES_texture_float"),T=y&&v,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:C}}function ug(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Jn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,y=_*4,v=g.clippingState||null;l.value=v,v=h(m,u,y,f);for(let T=0;T!==y;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function fg(i){let e=new WeakMap;function t(o,a){return a===ul?o.mapping=Gs:a===fl&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ul||a===fl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ml(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ys=class extends Vo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Hh=[.125,.215,.35,.446,.526,.582],Qi=20,Qa=new Ys,Bh=new Je,el=null,tl=0,nl=0,Ki=(1+Math.sqrt(5))/2,Ns=1/Ki,Gh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ki,Ns),new L(0,Ki,-Ns),new L(Ns,0,Ki),new L(-Ns,0,Ki),new L(Ki,Ns,0),new L(-Ki,Ns,0)],qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Sr,format:Kn,colorSpace:Hi,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(r)),this._blurMaterial=mg(r,e,t)}return s}_compileMaterial(e){let t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,s){let a=new Mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Li,h.autoClear=!1;let f=new os({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new be(new xt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Bh),x=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let y=this._cubeSize;bo(s,_*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new be(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);let g=[],_=0;for(let I=0;I<Qi;++I){let k=I/x,A=Math.exp(-k*k/2);g.push(A),I===0?_+=A:I<p&&(_+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/_;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;let v=this._sizeLods[s],T=3*v*(s>y-ks?s-y+ks:0),C=4*(this._cubeSize-v);bo(t,T,C,3*v,2*v),l.setRenderTarget(t),l.render(d,Qa)}};function pg(i){let e=[],t=[],n=[],s=i,r=i-ks+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ks?l=Hh[o-i+ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*f),y=new Float32Array(p*m*f),v=new Float32Array(g*m*f);for(let C=0;C<f;C++){let I=C%3*2/3-1,k=C>2?0:-1,A=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];_.set(A,x*m*C),y.set(u,p*m*C);let M=[C,C,C,C,C,C];v.set(M,g*m*C)}let T=new It;T.setAttribute("position",new Ht(_,x)),T.setAttribute("uv",new Ht(y,p)),T.setAttribute("faceIndex",new Ht(v,g)),e.push(T),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){let n=new jn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mg(i,e,t){let n=new Float32Array(Qi),s=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Xh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function gg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ul||l===fl,h=l===Gs||l===Vs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qs(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new qs(i));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let p=0,g=x.length;p<g;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let T=_[y+0],C=_[y+1],I=_[y+2];u.push(T,C,C,I,I,T)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let T=y+0,C=y+1,I=y+2;u.push(T,C,C,I,I,T)}}else return;let p=new(Ld(u)?Go:Bo)(u,1);p.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function _g(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){i.drawElements(r,m,a,f*l),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let p,g;if(s)p=i,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,m,a,f*l,x),t.update(m,r,x)}function u(f,m,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<x;g++)this.render(f[g]/l,m[g]);else{p.multiDrawElementsWEBGL(r,m,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=m[_];t.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,e){return i[0]-e[0]}function Eg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function bg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==m){let ue=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",ue)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],C=0;p===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let I=h.attributes.position.count*C,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let A=new Float32Array(I*k*4*m),M=new Oo(A,I,k,m);M.type=oi,M.needsUpdate=!0;let S=C*4;for(let K=0;K<m;K++){let N=y[K],O=v[K],B=T[K],q=I*k*4*K;for(let U=0;U<N.count;U++){let E=U*S;p===!0&&(o.fromBufferAttribute(N,U),A[q+E+0]=o.x,A[q+E+1]=o.y,A[q+E+2]=o.z,A[q+E+3]=0),g===!0&&(o.fromBufferAttribute(O,U),A[q+E+4]=o.x,A[q+E+5]=o.y,A[q+E+6]=o.z,A[q+E+7]=0),_===!0&&(o.fromBufferAttribute(B,U),A[q+E+8]=o.x,A[q+E+9]=o.y,A[q+E+10]=o.z,A[q+E+11]=B.itemSize===4?o.w:1)}}x={count:m,texture:M,size:new ve(I,k)},r.set(h,x),h.addEventListener("dispose",ue)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let g=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];n[h.id]=m}for(let y=0;y<f;y++){let v=m[y];v[0]=y,v[1]=u[y]}m.sort(Eg);for(let y=0;y<8;y++)y<f&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Mg);let x=h.morphAttributes.position,p=h.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let v=a[y],T=v[0],C=v[1];T!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+y)!==x[T]&&h.setAttribute("morphTarget"+y,x[T]),p&&h.getAttribute("morphNormal"+y)!==p[T]&&h.setAttribute("morphNormal"+y,p[T]),s[y]=C,g+=C):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function wg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Xo=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ns,h!==ns&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Pi),n===void 0&&h===Ws&&(n=ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kd=new En,zd=new Xo(1,1);zd.compareFunction=Id;var Fd=new Oo,Od=new _l,Hd=new Wo,Yh=[],qh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Wt(t,n)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Wt(t,n)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Wt(t,n)}}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zd:kd;t.setTexture2D(e||r,s)}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fd,s)}function Wg(i){switch(i){case 5126:return Sg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Lg;case 35667:case 35671:return Ng;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return kg;case 36294:return zg;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Xg(i,e){i.uniform1fv(this.addr,e)}function Yg(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function qg(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Zg(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jg(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kg(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jg(i,e){i.uniform1iv(this.addr,e)}function Qg(i,e){i.uniform2iv(this.addr,e)}function e1(i,e){i.uniform3iv(this.addr,e)}function t1(i,e){i.uniform4iv(this.addr,e)}function n1(i,e){i.uniform1uiv(this.addr,e)}function i1(i,e){i.uniform2uiv(this.addr,e)}function s1(i,e){i.uniform3uiv(this.addr,e)}function r1(i,e){i.uniform4uiv(this.addr,e)}function o1(i,e,t){let n=this.cache,s=e.length,r=oa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kd,r[o])}function a1(i,e,t){let n=this.cache,s=e.length,r=oa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function l1(i,e,t){let n=this.cache,s=e.length,r=oa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hd,r[o])}function c1(i,e,t){let n=this.cache,s=e.length,r=oa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function h1(i){switch(i){case 5126:return Xg;case 35664:return Yg;case 35665:return qg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wg(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h1(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function Kh(i,e){i.seq.push(e),i.map[e.id]=e}function d1(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),o=il.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kh(t,c===void 0?new El(a,i,e):new bl(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wl(a),Kh(t,d)),t=d}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);d1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u1=37297,f1=0;function p1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function m1(i){let e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i),n;switch(e===t?n="":e===Do&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case Hi:case ra:return[n,"LinearTransferOETF"];case cn:case sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+p1(i.getShaderSource(e),o)}else return s}function g1(i,e){let t=m1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x1(i,e){let t;switch(e){case Uf:t="Linear";break;case kf:t="Reinhard";break;case zf:t="OptimizedCineon";break;case nc:t="ACESFilmic";break;case Of:t="AgX";break;case Hf:t="Neutral";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function _1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function v1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(E1,w1)}var b1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w1(i,e){let t=tt[e];if(t===void 0){let n=b1.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(S1,T1)}function T1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function A1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function R1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function I1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function L1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=A1(t),c=R1(t),h=C1(t),d=P1(t),u=I1(t),f=t.isWebGL2?"":y1(t),m=_1(t),x=v1(r),p=s.createProgram(),g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(g=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[f,id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?tt.tonemapping_pars_fragment:"",t.toneMapping!==Li?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Sl(o),o=ed(o,t),o=td(o,t),a=Sl(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+g+o,T=y+_+a,C=jh(s,s.VERTEX_SHADER,v),I=jh(s,s.FRAGMENT_SHADER,T);s.attachShader(p,C),s.attachShader(p,I),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(ue){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(C).trim(),O=s.getShaderInfoLog(I).trim(),B=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,C,I);else{let U=Qh(s,C,"vertex"),E=Qh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+ue.name+`
Material Type: `+ue.type+`

Program Info Log: `+K+`
`+U+`
`+E)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||O==="")&&(q=!1);q&&(ue.diagnostics={runnable:B,programLog:K,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:_}})}s.deleteShader(C),s.deleteShader(I),A=new Bs(s,p),M=M1(s,p)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let M;this.getAttributes=function(){return M===void 0&&k(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(p,u1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=I,this}var N1=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}};function D1(i,e,t,n,s,r,o){let a=new Tr,l=new Tl,c=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,ue,K,N){let O=K.fog,B=N.geometry,q=M.isMeshStandardMaterial?K.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),E=U&&U.mapping===sa?U.image.height:null,H=x[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=X!==void 0?X.length:0,ye=0;B.morphAttributes.position!==void 0&&(ye=1),B.morphAttributes.normal!==void 0&&(ye=2),B.morphAttributes.color!==void 0&&(ye=3);let G,fe,we,Ae;if(H){let Et=ri[H];G=Et.vertexShader,fe=Et.fragmentShader}else G=M.vertexShader,fe=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);let F=i.getRenderTarget(),Z=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,pe=!!M.map,w=!!M.matcap,ie=!!U,Q=!!M.aoMap,V=!!M.lightMap,$=!!M.bumpMap,ne=!!M.normalMap,Me=!!M.displacementMap,Pe=!!M.emissiveMap,qe=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,he=M.clearcoat>0,ce=M.iridescence>0,W=M.sheen>0,ee=M.transmission>0,Se=b&&!!M.anisotropyMap,Ne=he&&!!M.clearcoatMap,xe=he&&!!M.clearcoatNormalMap,_e=he&&!!M.clearcoatRoughnessMap,We=ce&&!!M.iridescenceMap,Ee=ce&&!!M.iridescenceThicknessMap,yt=W&&!!M.sheenColorMap,Ze=W&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,Oe=!!M.specularColorMap,He=!!M.specularIntensityMap,dt=ee&&!!M.transmissionMap,je=ee&&!!M.thicknessMap,At=!!M.gradientMap,Y=!!M.alphaMap,De=M.alphaTest>0,se=!!M.alphaHash,Re=!!M.extensions,ke=Li;M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ke=i.toneMapping);let lt={isWebGL2:d,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:fe,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ge,instancing:Z,instancingColor:Z&&N.instanceColor!==null,instancingMorph:Z&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hi,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:w,envMap:ie,envMapMode:ie&&U.mapping,envMapCubeUVHeight:E,aoMap:Q,lightMap:V,bumpMap:$,normalMap:ne,displacementMap:f&&Me,emissiveMap:Pe,normalMapObjectSpace:ne&&M.normalMapType===$f,normalMapTangentSpace:ne&&M.normalMapType===Pd,metalnessMap:qe,roughnessMap:P,anisotropy:b,anisotropyMap:Se,clearcoat:he,clearcoatMap:Ne,clearcoatNormalMap:xe,clearcoatRoughnessMap:_e,iridescence:ce,iridescenceMap:We,iridescenceThicknessMap:Ee,sheen:W,sheenColorMap:yt,sheenRoughnessMap:Ze,specularMap:Fe,specularColorMap:Oe,specularIntensityMap:He,transmission:ee,transmissionMap:dt,thicknessMap:je,gradientMap:At,opaque:M.transparent===!1&&M.blending===Os&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:De,alphaHash:se,combine:M.combine,mapUv:pe&&p(M.map.channel),aoMapUv:Q&&p(M.aoMap.channel),lightMapUv:V&&p(M.lightMap.channel),bumpMapUv:$&&p(M.bumpMap.channel),normalMapUv:ne&&p(M.normalMap.channel),displacementMapUv:Me&&p(M.displacementMap.channel),emissiveMapUv:Pe&&p(M.emissiveMap.channel),metalnessMapUv:qe&&p(M.metalnessMap.channel),roughnessMapUv:P&&p(M.roughnessMap.channel),anisotropyMapUv:Se&&p(M.anisotropyMap.channel),clearcoatMapUv:Ne&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(M.sheenRoughnessMap.channel),specularMapUv:Fe&&p(M.specularMap.channel),specularColorMapUv:Oe&&p(M.specularColorMap.channel),specularIntensityMapUv:He&&p(M.specularIntensityMap.channel),transmissionMapUv:dt&&p(M.transmissionMap.channel),thicknessMapUv:je&&p(M.thicknessMap.channel),alphaMapUv:Y&&p(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ne||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(pe||Y),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&ue.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$t,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Re&&M.extensions.derivatives===!0,extensionFragDepth:Re&&M.extensions.fragDepth===!0,extensionDrawBuffers:Re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function _(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let ue in M.defines)S.push(ue),S.push(M.defines[ue]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){let S=x[M.type],ue;if(S){let K=ri[S];ue=M0.clone(K.uniforms)}else ue=M.uniforms;return ue}function C(M,S){let ue;for(let K=0,N=h.length;K<N;K++){let O=h[K];if(O.cacheKey===S){ue=O,++ue.usedTimes;break}}return ue===void 0&&(ue=new L1(i,S,M,r),h.push(ue)),ue}function I(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function k(M){l.remove(M)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:T,acquireProgram:C,releaseProgram:I,releaseShaderCache:k,programs:h,dispose:A}}function U1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function k1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,m,x,p){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function a(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(d,u,f,m,x,p){let g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(d,u){t.length>1&&t.sort(d||k1),n.length>1&&n.sort(u||sd),s.length>1&&s.sort(u||sd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function z1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rd,i.set(n,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Je};break;case"SpotLight":t={position:new L,direction:new L,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function O1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var H1=0;function B1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G1(i,e){let t=new F1,n=O1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new ut,a=new ut;function l(h,d){let u=0,f=0,m=0;for(let ue=0;ue<9;ue++)s.probe[ue].set(0,0,0);let x=0,p=0,g=0,_=0,y=0,v=0,T=0,C=0,I=0,k=0,A=0;h.sort(B1);let M=d===!0?Math.PI:1;for(let ue=0,K=h.length;ue<K;ue++){let N=h[ue],O=N.color,B=N.intensity,q=N.distance,U=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*B*M,f+=O.g*B*M,m+=O.b*B*M;else if(N.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(N.sh.coefficients[E],B);A++}else if(N.isDirectionalLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){let H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,s.directionalShadow[x]=X,s.directionalShadowMap[x]=U,s.directionalShadowMatrix[x]=N.shadow.matrix,v++}s.directional[x]=E,x++}else if(N.isSpotLight){let E=t.get(N);E.position.setFromMatrixPosition(N.matrixWorld),E.color.copy(O).multiplyScalar(B*M),E.distance=q,E.coneCos=Math.cos(N.angle),E.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),E.decay=N.decay,s.spot[g]=E;let H=N.shadow;if(N.map&&(s.spotLightMap[I]=N.map,I++,H.updateMatrices(N),N.castShadow&&k++),s.spotLightMatrix[g]=H.matrix,N.castShadow){let X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,s.spotShadow[g]=X,s.spotShadowMap[g]=U,C++}g++}else if(N.isRectAreaLight){let E=t.get(N);E.color.copy(O).multiplyScalar(B),E.halfWidth.set(N.width*.5,0,0),E.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=E,_++}else if(N.isPointLight){let E=t.get(N);if(E.color.copy(N.color).multiplyScalar(N.intensity*M),E.distance=N.distance,E.decay=N.decay,N.castShadow){let H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,s.pointShadow[p]=X,s.pointShadowMap[p]=U,s.pointShadowMatrix[p]=N.shadow.matrix,T++}s.point[p]=E,p++}else if(N.isHemisphereLight){let E=t.get(N);E.skyColor.copy(N.color).multiplyScalar(B*M),E.groundColor.copy(N.groundColor).multiplyScalar(B*M),s.hemi[y]=E,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=m;let S=s.hash;(S.directionalLength!==x||S.pointLength!==p||S.spotLength!==g||S.rectAreaLength!==_||S.hemiLength!==y||S.numDirectionalShadows!==v||S.numPointShadows!==T||S.numSpotShadows!==C||S.numSpotMaps!==I||S.numLightProbes!==A)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=C+I-k,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=A,S.directionalLength=x,S.pointLength=p,S.spotLength=g,S.rectAreaLength=_,S.hemiLength=y,S.numDirectionalShadows=v,S.numPointShadows=T,S.numSpotShadows=C,S.numSpotMaps=I,S.numLightProbes=A,s.version=H1++)}function c(h,d){let u=0,f=0,m=0,x=0,p=0,g=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let v=h[_];if(v.isDirectionalLight){let T=s.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),u++}else if(v.isSpotLight){let T=s.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let T=s.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(v.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=s.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let T=s.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:s}}function od(i,e){let t=new G1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function V1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new od(i,e),t.set(r,[l])):o>=a.length?(l=new od(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yo=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`;function Y1(i,e,t){let n=new Ar,s=new ve,r=new ve,o=new Pt,a=new Yo({depthPacking:Cd}),l=new Rl,c={},h=t.maxTextureSize,d={[Di]:hn,[hn]:Di,[$t]:$t},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let g=this.type;this.render=function(C,I,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let A=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending(Ii),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);let K=g!==gi&&this.type===gi,N=g===gi&&this.type!==gi;for(let O=0,B=C.length;O<B;O++){let q=C[O],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let E=U.getFrameExtents();if(s.multiply(E),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/E.x),s.x=r.x*E.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/E.y),s.y=r.y*E.y,U.mapSize.y=r.y)),U.map===null||K===!0||N===!0){let X=this.type!==gi?{minFilter:jt,magFilter:jt}:{};U.map!==null&&U.map.dispose(),U.map=new jn(s.x,s.y,X),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let H=U.getViewportCount();for(let X=0;X<H;X++){let ae=U.getViewport(X);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),ue.viewport(o),U.updateMatrices(q,X),n=U.getFrustum(),v(I,k,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===gi&&_(U,k),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(A,M,S)};function _(C,I){let k=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new jn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,k,u,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,k,f,x,null)}function y(C,I,k,A){let M=null,S=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)M=S;else if(M=k.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let ue=M.uuid,K=I.uuid,N=c[ue];N===void 0&&(N={},c[ue]=N);let O=N[K];O===void 0&&(O=M.clone(),N[K]=O,I.addEventListener("dispose",T)),M=O}if(M.visible=I.visible,M.wireframe=I.wireframe,A===gi?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:d[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let ue=i.properties.get(M);ue.light=k}return M}function v(C,I,k,A,M){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===gi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let K=e.update(C),N=C.material;if(Array.isArray(N)){let O=K.groups;for(let B=0,q=O.length;B<q;B++){let U=O[B],E=N[U.materialIndex];if(E&&E.visible){let H=y(C,E,A,M);C.onBeforeShadow(i,C,I,k,K,H,U),i.renderBufferDirect(k,null,K,H,C,U),C.onAfterShadow(i,C,I,k,K,H,U)}}}else if(N.visible){let O=y(C,N,A,M);C.onBeforeShadow(i,C,I,k,K,O,null),i.renderBufferDirect(k,null,K,O,C,null),C.onAfterShadow(i,C,I,k,K,O,null)}}let ue=C.children;for(let K=0,N=ue.length;K<N;K++)v(ue[K],I,k,A,M)}function T(C){C.target.removeEventListener("dispose",T);for(let k in c){let A=c[k],M=C.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function q1(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,De=new Pt,se=null,Re=new Pt(0,0,0,0);return{setMask:function(ke){se!==ke&&!Y&&(i.colorMask(ke,ke,ke,ke),se=ke)},setLocked:function(ke){Y=ke},setClear:function(ke,lt,Et,Kt,Un){Un===!0&&(ke*=Kt,lt*=Kt,Et*=Kt),De.set(ke,lt,Et,Kt),Re.equals(De)===!1&&(i.clearColor(ke,lt,Et,Kt),Re.copy(De))},reset:function(){Y=!1,se=null,Re.set(-1,0,0,0)}}}function r(){let Y=!1,De=null,se=null,Re=null;return{setTest:function(ke){ke?Z(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ke){De!==ke&&!Y&&(i.depthMask(ke),De=ke)},setFunc:function(ke){if(se!==ke){switch(ke){case Tf:i.depthFunc(i.NEVER);break;case Af:i.depthFunc(i.ALWAYS);break;case Rf:i.depthFunc(i.LESS);break;case Co:i.depthFunc(i.LEQUAL);break;case Cf:i.depthFunc(i.EQUAL);break;case Pf:i.depthFunc(i.GEQUAL);break;case If:i.depthFunc(i.GREATER);break;case Lf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ke}},setLocked:function(ke){Y=ke},setClear:function(ke){Re!==ke&&(i.clearDepth(ke),Re=ke)},reset:function(){Y=!1,De=null,se=null,Re=null}}}function o(){let Y=!1,De=null,se=null,Re=null,ke=null,lt=null,Et=null,Kt=null,Un=null;return{setTest:function(bt){Y||(bt?Z(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(bt){De!==bt&&!Y&&(i.stencilMask(bt),De=bt)},setFunc:function(bt,fn,si){(se!==bt||Re!==fn||ke!==si)&&(i.stencilFunc(bt,fn,si),se=bt,Re=fn,ke=si)},setOp:function(bt,fn,si){(lt!==bt||Et!==fn||Kt!==si)&&(i.stencilOp(bt,fn,si),lt=bt,Et=fn,Kt=si)},setLocked:function(bt){Y=bt},setClear:function(bt){Un!==bt&&(i.clearStencil(bt),Un=bt)},reset:function(){Y=!1,De=null,se=null,Re=null,ke=null,lt=null,Et=null,Kt=null,Un=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,v=null,T=null,C=null,I=null,k=null,A=new Je(0,0,0),M=0,S=!1,ue=null,K=null,N=null,O=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,E=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=E>=1):H.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=E>=2);let X=null,ae={},ye=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),fe=new Pt().fromArray(ye),we=new Pt().fromArray(G);function Ae(Y,De,se,Re){let ke=new Uint8Array(4),lt=i.createTexture();i.bindTexture(Y,lt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<se;Et++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(De,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(De+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return lt}let F={};F[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(i.DEPTH_TEST),l.setFunc(Co),Me(!1),Pe(Fc),Z(i.CULL_FACE),$(Ii);function Z(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function ge(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function pe(Y,De){return f[Y]!==De?(i.bindFramebuffer(Y,De),f[Y]=De,n&&(Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=De),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=De)),!0):!1}function w(Y,De){let se=x,Re=!1;if(Y){se=m.get(De),se===void 0&&(se=[],m.set(De,se));let ke=Y.textures;if(se.length!==ke.length||se[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Et=ke.length;lt<Et;lt++)se[lt]=i.COLOR_ATTACHMENT0+lt;se.length=ke.length,Re=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Re=!0);if(Re)if(t.isWebGL2)i.drawBuffers(se);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ie(Y){return p!==Y?(i.useProgram(Y),p=Y,!0):!1}let Q={[ji]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[Bc]=i.MIN,Q[Gc]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(Q[Bc]=Y.MIN_EXT,Q[Gc]=Y.MAX_EXT)}let V={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[xf]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function $(Y,De,se,Re,ke,lt,Et,Kt,Un,bt){if(Y===Ii){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),Y!==hf){if(Y!==_||bt!==S){if((y!==ji||C!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,C=ji),bt)switch(Y){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}v=null,T=null,I=null,k=null,A.set(0,0,0),M=0,_=Y,S=bt}return}ke=ke||De,lt=lt||se,Et=Et||Re,(De!==y||ke!==C)&&(i.blendEquationSeparate(Q[De],Q[ke]),y=De,C=ke),(se!==v||Re!==T||lt!==I||Et!==k)&&(i.blendFuncSeparate(V[se],V[Re],V[lt],V[Et]),v=se,T=Re,I=lt,k=Et),(Kt.equals(A)===!1||Un!==M)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Un),A.copy(Kt),M=Un),_=Y,S=!1}function ne(Y,De){Y.side===$t?ge(i.CULL_FACE):Z(i.CULL_FACE);let se=Y.side===hn;De&&(se=!se),Me(se),Y.blending===Os&&Y.transparent===!1?$(Ii):$(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),a.setMask(Y.colorWrite);let Re=Y.stencilWrite;c.setTest(Re),Re&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),P(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(Y){ue!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),ue=Y)}function Pe(Y){Y!==lf?(Z(i.CULL_FACE),Y!==K&&(Y===Fc?i.cullFace(i.BACK):Y===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),K=Y}function qe(Y){Y!==N&&(U&&i.lineWidth(Y),N=Y)}function P(Y,De,se){Y?(Z(i.POLYGON_OFFSET_FILL),(O!==De||B!==se)&&(i.polygonOffset(De,se),O=De,B=se)):ge(i.POLYGON_OFFSET_FILL)}function b(Y){Y?Z(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function he(Y){Y===void 0&&(Y=i.TEXTURE0+q-1),X!==Y&&(i.activeTexture(Y),X=Y)}function ce(Y,De,se){se===void 0&&(X===null?se=i.TEXTURE0+q-1:se=X);let Re=ae[se];Re===void 0&&(Re={type:void 0,texture:void 0},ae[se]=Re),(Re.type!==Y||Re.texture!==De)&&(X!==se&&(i.activeTexture(se),X=se),i.bindTexture(Y,De||F[Y]),Re.type=Y,Re.texture=De)}function W(){let Y=ae[X];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(Y){fe.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function He(Y){we.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function dt(Y,De){let se=d.get(De);se===void 0&&(se=new WeakMap,d.set(De,se));let Re=se.get(Y);Re===void 0&&(Re=i.getUniformBlockIndex(De,Y.name),se.set(Y,Re))}function je(Y,De){let Re=d.get(De).get(Y);h.get(De)!==Re&&(i.uniformBlockBinding(De,Re,Y.__bindingPointIndex),h.set(De,Re))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,ae={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,y=null,v=null,T=null,C=null,I=null,k=null,A=new Je(0,0,0),M=0,S=!1,ue=null,K=null,N=null,O=null,B=null,fe.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:ge,bindFramebuffer:pe,drawBuffers:w,useProgram:ie,setBlending:$,setMaterial:ne,setFlipSided:Me,setCullFace:Pe,setLineWidth:qe,setPolygonOffset:P,setScissorTest:b,activeTexture:he,bindTexture:ce,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:Se,texImage2D:Ze,texImage3D:Fe,updateUBOMapping:dt,uniformBlockBinding:je,texStorage2D:Ee,texStorage3D:yt,texSubImage2D:Ne,texSubImage3D:xe,compressedTexSubImage2D:_e,compressedTexSubImage3D:We,scissor:Oe,viewport:He,reset:At}}function Z1(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ve,d=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return m?new OffscreenCanvas(P,b):ko("canvas")}function p(P,b,he,ce){let W=1,ee=qe(P);if((ee.width>ce||ee.height>ce)&&(W=ce/Math.max(ee.width,ee.height)),W<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Se=b?xl:Math.floor,Ne=Se(W*ee.width),xe=Se(W*ee.height);u===void 0&&(u=x(Ne,xe));let _e=he?x(Ne,xe):u;return _e.width=Ne,_e.height=xe,_e.getContext("2d").drawImage(P,0,0,Ne,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ne+"x"+xe+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function g(P){let b=qe(P);return Mh(b.width)&&Mh(b.height)}function _(P){return a?!1:P.wrapS!==Qt||P.wrapT!==Qt||P.minFilter!==jt&&P.minFilter!==vn}function y(P,b){return P.generateMipmaps&&b&&P.minFilter!==jt&&P.minFilter!==vn}function v(P){i.generateMipmap(P)}function T(P,b,he,ce,W=!1){if(a===!1)return b;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=b;if(b===i.RED&&(he===i.FLOAT&&(ee=i.R32F),he===i.HALF_FLOAT&&(ee=i.R16F),he===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(he===i.UNSIGNED_BYTE&&(ee=i.R8UI),he===i.UNSIGNED_SHORT&&(ee=i.R16UI),he===i.UNSIGNED_INT&&(ee=i.R32UI),he===i.BYTE&&(ee=i.R8I),he===i.SHORT&&(ee=i.R16I),he===i.INT&&(ee=i.R32I)),b===i.RG&&(he===i.FLOAT&&(ee=i.RG32F),he===i.HALF_FLOAT&&(ee=i.RG16F),he===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(he===i.UNSIGNED_BYTE&&(ee=i.RG8UI),he===i.UNSIGNED_SHORT&&(ee=i.RG16UI),he===i.UNSIGNED_INT&&(ee=i.RG32UI),he===i.BYTE&&(ee=i.RG8I),he===i.SHORT&&(ee=i.RG16I),he===i.INT&&(ee=i.RG32I)),b===i.RGBA){let Se=W?Lo:_t.getTransfer(ce);he===i.FLOAT&&(ee=i.RGBA32F),he===i.HALF_FLOAT&&(ee=i.RGBA16F),he===i.UNSIGNED_BYTE&&(ee=Se===wt?i.SRGB8_ALPHA8:i.RGBA8),he===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),he===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(P,b,he){return y(P,he)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){return P===jt||P===Vc||P===ur?i.NEAREST:i.LINEAR}function k(P){let b=P.target;b.removeEventListener("dispose",k),M(b),b.isVideoTexture&&d.delete(b)}function A(P){let b=P.target;b.removeEventListener("dispose",A),ue(b)}function M(P){let b=n.get(P);if(b.__webglInit===void 0)return;let he=P.source,ce=f.get(he);if(ce){let W=ce[b.__cacheKey];W.usedTimes--,W.usedTimes===0&&S(P),Object.keys(ce).length===0&&f.delete(he)}n.remove(P)}function S(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let he=P.source,ce=f.get(he);delete ce[b.__cacheKey],o.memory.textures--}function ue(P){let b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let W=0;W<b.__webglFramebuffer[ce].length;W++)i.deleteFramebuffer(b.__webglFramebuffer[ce][W]);else i.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[ce]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let he=P.textures;for(let ce=0,W=he.length;ce<W;ce++){let ee=n.get(he[ce]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(he[ce])}n.remove(P)}let K=0;function N(){K=0}function O(){let P=K;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),K+=1,P}function B(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function q(P,b){let he=n.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.version>0&&he.__version!==P.version){let ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(he,P,b);return}}t.bindTexture(i.TEXTURE_2D,he.__webglTexture,i.TEXTURE0+b)}function U(P,b){let he=n.get(P);if(P.version>0&&he.__version!==P.version){we(he,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,he.__webglTexture,i.TEXTURE0+b)}function E(P,b){let he=n.get(P);if(P.version>0&&he.__version!==P.version){we(he,P,b);return}t.bindTexture(i.TEXTURE_3D,he.__webglTexture,i.TEXTURE0+b)}function H(P,b){let he=n.get(P);if(P.version>0&&he.__version!==P.version){Ae(he,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture,i.TEXTURE0+b)}let X={[is]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},ae={[jt]:i.NEAREST,[Vc]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},ye={[Jf]:i.NEVER,[n0]:i.ALWAYS,[Kf]:i.LESS,[Id]:i.LEQUAL,[jf]:i.EQUAL,[t0]:i.GEQUAL,[Qf]:i.GREATER,[e0]:i.NOTEQUAL};function G(P,b,he){if(b.type===oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vn||b.magFilter===Sa||b.magFilter===ur||b.magFilter===es||b.minFilter===vn||b.minFilter===Sa||b.minFilter===ur||b.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),he?(i.texParameteri(P,i.TEXTURE_WRAP_S,X[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,X[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,X[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ae[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ae[b.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Qt||b.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==jt&&b.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==ur&&b.minFilter!==es||b.type===oi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let ce=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function fe(P,b){let he=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",k));let ce=b.source,W=f.get(ce);W===void 0&&(W={},f.set(ce,W));let ee=B(b);if(ee!==P.__cacheKey){W[ee]===void 0&&(W[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,he=!0),W[ee].usedTimes++;let Se=W[P.__cacheKey];Se!==void 0&&(W[P.__cacheKey].usedTimes--,Se.usedTimes===0&&S(b)),P.__cacheKey=ee,P.__webglTexture=W[ee].texture}return he}function we(P,b,he){let ce=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=i.TEXTURE_3D);let W=fe(P,b),ee=b.source;t.bindTexture(ce,P.__webglTexture,i.TEXTURE0+he);let Se=n.get(ee);if(ee.version!==Se.__version||W===!0){t.activeTexture(i.TEXTURE0+he);let Ne=_t.getPrimaries(_t.workingColorSpace),xe=b.colorSpace===Ci?null:_t.getPrimaries(b.colorSpace),_e=b.colorSpace===Ci||Ne===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let We=_(b)&&g(b.image)===!1,Ee=p(b.image,We,!1,s.maxTextureSize);Ee=Pe(b,Ee);let yt=g(Ee)||a,Ze=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),Oe=T(b.internalFormat,Ze,Fe,b.colorSpace,b.isVideoTexture);G(ce,b,yt);let He,dt=b.mipmaps,je=a&&b.isVideoTexture!==!0&&Oe!==Rd,At=Se.__version===void 0||W===!0,Y=ee.dataReady,De=C(b,Ee,yt);if(b.isDepthTexture)Oe=i.DEPTH_COMPONENT,a?b.type===oi?Oe=i.DEPTH_COMPONENT32F:b.type===Pi?Oe=i.DEPTH_COMPONENT24:b.type===ts?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:b.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ns&&Oe===i.DEPTH_COMPONENT&&b.type!==ic&&b.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Pi,Fe=r.convert(b.type)),b.format===Ws&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,b.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ts,Fe=r.convert(b.type))),At&&(je?t.texStorage2D(i.TEXTURE_2D,1,Oe,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Ze,Fe,null));else if(b.isDataTexture)if(dt.length>0&&yt){je&&At&&t.texStorage2D(i.TEXTURE_2D,De,Oe,dt[0].width,dt[0].height);for(let se=0,Re=dt.length;se<Re;se++)He=dt[se],je?Y&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,Ze,Fe,He.data):t.texImage2D(i.TEXTURE_2D,se,Oe,He.width,He.height,0,Ze,Fe,He.data);b.generateMipmaps=!1}else je?(At&&t.texStorage2D(i.TEXTURE_2D,De,Oe,Ee.width,Ee.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ze,Fe,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Ze,Fe,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,dt[0].width,dt[0].height,Ee.depth);for(let se=0,Re=dt.length;se<Re;se++)He=dt[se],b.format!==Kn?Ze!==null?je?Y&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,Ee.depth,Ze,He.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Oe,He.width,He.height,Ee.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,Ee.depth,Ze,Fe,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Oe,He.width,He.height,Ee.depth,0,Ze,Fe,He.data)}else{je&&At&&t.texStorage2D(i.TEXTURE_2D,De,Oe,dt[0].width,dt[0].height);for(let se=0,Re=dt.length;se<Re;se++)He=dt[se],b.format!==Kn?Ze!==null?je?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,Ze,He.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Oe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Y&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,He.width,He.height,Ze,Fe,He.data):t.texImage2D(i.TEXTURE_2D,se,Oe,He.width,He.height,0,Ze,Fe,He.data)}else if(b.isDataArrayTexture)je?(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ze,Fe,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,Ee.width,Ee.height,Ee.depth,0,Ze,Fe,Ee.data);else if(b.isData3DTexture)je?(At&&t.texStorage3D(i.TEXTURE_3D,De,Oe,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ze,Fe,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,Ee.width,Ee.height,Ee.depth,0,Ze,Fe,Ee.data);else if(b.isFramebufferTexture){if(At)if(je)t.texStorage2D(i.TEXTURE_2D,De,Oe,Ee.width,Ee.height);else{let se=Ee.width,Re=Ee.height;for(let ke=0;ke<De;ke++)t.texImage2D(i.TEXTURE_2D,ke,Oe,se,Re,0,Ze,Fe,null),se>>=1,Re>>=1}}else if(dt.length>0&&yt){if(je&&At){let se=qe(dt[0]);t.texStorage2D(i.TEXTURE_2D,De,Oe,se.width,se.height)}for(let se=0,Re=dt.length;se<Re;se++)He=dt[se],je?Y&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ze,Fe,He):t.texImage2D(i.TEXTURE_2D,se,Oe,Ze,Fe,He);b.generateMipmaps=!1}else if(je){if(At){let se=qe(Ee);t.texStorage2D(i.TEXTURE_2D,De,Oe,se.width,se.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ze,Fe,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Ze,Fe,Ee);y(b,yt)&&v(ce),Se.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ae(P,b,he){if(b.image.length!==6)return;let ce=fe(P,b),W=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+he);let ee=n.get(W);if(W.version!==ee.__version||ce===!0){t.activeTexture(i.TEXTURE0+he);let Se=_t.getPrimaries(_t.workingColorSpace),Ne=b.colorSpace===Ci?null:_t.getPrimaries(b.colorSpace),xe=b.colorSpace===Ci||Se===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let _e=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let se=0;se<6;se++)!_e&&!We?Ee[se]=p(b.image[se],!1,!0,s.maxCubemapSize):Ee[se]=We?b.image[se].image:b.image[se],Ee[se]=Pe(b,Ee[se]);let yt=Ee[0],Ze=g(yt)||a,Fe=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),He=T(b.internalFormat,Fe,Oe,b.colorSpace),dt=a&&b.isVideoTexture!==!0,je=ee.__version===void 0||ce===!0,At=W.dataReady,Y=C(b,yt,Ze);G(i.TEXTURE_CUBE_MAP,b,Ze);let De;if(_e){dt&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,He,yt.width,yt.height);for(let se=0;se<6;se++){De=Ee[se].mipmaps;for(let Re=0;Re<De.length;Re++){let ke=De[Re];b.format!==Kn?Fe!==null?dt?At&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,ke.width,ke.height,Fe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,ke.width,ke.height,Fe,Oe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,He,ke.width,ke.height,0,Fe,Oe,ke.data)}}}else{if(De=b.mipmaps,dt&&je){De.length>0&&Y++;let se=qe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,He,se.width,se.height)}for(let se=0;se<6;se++)if(We){dt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ee[se].width,Ee[se].height,Fe,Oe,Ee[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Ee[se].width,Ee[se].height,0,Fe,Oe,Ee[se].data);for(let Re=0;Re<De.length;Re++){let lt=De[Re].image[se].image;dt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,lt.width,lt.height,Fe,Oe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,He,lt.width,lt.height,0,Fe,Oe,lt.data)}}else{dt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Oe,Ee[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Fe,Oe,Ee[se]);for(let Re=0;Re<De.length;Re++){let ke=De[Re];dt?At&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Fe,Oe,ke.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,He,Fe,Oe,ke.image[se])}}}y(b,Ze)&&v(i.TEXTURE_CUBE_MAP),ee.__version=W.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function F(P,b,he,ce,W,ee){let Se=r.convert(he.format,he.colorSpace),Ne=r.convert(he.type),xe=T(he.internalFormat,Se,Ne,he.colorSpace);if(!n.get(b).__hasExternalTextures){let We=Math.max(1,b.width>>ee),Ee=Math.max(1,b.height>>ee);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ee,xe,We,Ee,b.depth,0,Se,Ne,null):t.texImage2D(W,ee,xe,We,Ee,0,Se,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ne(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,W,n.get(he).__webglTexture,0,$(b)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,W,n.get(he).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(P,b,he){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ce=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(he||ne(b)){let W=b.depthTexture;W&&W.isDepthTexture&&(W.type===oi?ce=i.DEPTH_COMPONENT32F:W.type===Pi&&(ce=i.DEPTH_COMPONENT24));let ee=$(b);ne(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,ce,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ce,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){let ce=$(b);he&&ne(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,b.width,b.height):ne(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{let ce=b.textures;for(let W=0;W<ce.length;W++){let ee=ce[W],Se=r.convert(ee.format,ee.colorSpace),Ne=r.convert(ee.type),xe=T(ee.internalFormat,Se,Ne,ee.colorSpace),_e=$(b);he&&ne(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,xe,b.width,b.height):ne(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let ce=n.get(b.depthTexture).__webglTexture,W=$(b);if(b.depthTexture.format===ns)ne(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(b.depthTexture.format===Ws)ne(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function pe(P){let b=n.get(P),he=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(he)throw new Error("target.depthTexture not supported in Cube render targets");ge(b.__webglFramebuffer,P)}else if(he){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]=i.createRenderbuffer(),Z(b.__webglDepthbuffer[ce],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Z(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function w(P,b,he){let ce=n.get(P);b!==void 0&&F(ce.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),he!==void 0&&pe(P)}function ie(P){let b=P.texture,he=n.get(P),ce=n.get(b);P.addEventListener("dispose",A);let W=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Se=W.length>1,Ne=g(P)||a;if(Se||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=b.version,o.memory.textures++),ee){he.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&b.mipmaps&&b.mipmaps.length>0){he.__webglFramebuffer[xe]=[];for(let _e=0;_e<b.mipmaps.length;_e++)he.__webglFramebuffer[xe][_e]=i.createFramebuffer()}else he.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){he.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)he.__webglFramebuffer[xe]=i.createFramebuffer()}else he.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers)for(let xe=0,_e=W.length;xe<_e;xe++){let We=n.get(W[xe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ne(P)===!1){he.__webglMultisampledFramebuffer=i.createFramebuffer(),he.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer);for(let xe=0;xe<W.length;xe++){let _e=W[xe];he.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,he.__webglColorRenderbuffer[xe]);let We=r.convert(_e.format,_e.colorSpace),Ee=r.convert(_e.type),yt=T(_e.internalFormat,We,Ee,_e.colorSpace,P.isXRRenderTarget===!0),Ze=$(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,he.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(he.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(he.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),G(i.TEXTURE_CUBE_MAP,b,Ne);for(let xe=0;xe<6;xe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)F(he.__webglFramebuffer[xe][_e],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,_e);else F(he.__webglFramebuffer[xe],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(b,Ne)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let xe=0,_e=W.length;xe<_e;xe++){let We=W[xe],Ee=n.get(We);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),G(i.TEXTURE_2D,We,Ne),F(he.__webglFramebuffer,P,We,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),y(We,Ne)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),G(xe,b,Ne),a&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)F(he.__webglFramebuffer[_e],P,b,i.COLOR_ATTACHMENT0,xe,_e);else F(he.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,xe,0);y(b,Ne)&&v(xe),t.unbindTexture()}P.depthBuffer&&pe(P)}function Q(P){let b=g(P)||a,he=P.textures;for(let ce=0,W=he.length;ce<W;ce++){let ee=he[ce];if(y(ee,b)){let Se=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(ee).__webglTexture;t.bindTexture(Se,Ne),v(Se),t.unbindTexture()}}}function V(P){if(a&&P.samples>0&&ne(P)===!1){let b=P.textures,he=P.width,ce=P.height,W=i.COLOR_BUFFER_BIT,ee=[],Se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(P),xe=b.length>1;if(xe)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){ee.push(i.COLOR_ATTACHMENT0+_e),P.depthBuffer&&ee.push(Se);let We=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(We===!1&&(P.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[_e]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),xe){let Ee=n.get(b[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,he,ce,0,0,he,ce,W,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[_e]);let We=n.get(b[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function $(P){return Math.min(s.maxSamples,P.samples)}function ne(P){let b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(P){let b=o.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function Pe(P,b){let he=P.colorSpace,ce=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ml||he!==Hi&&he!==Ci&&(_t.getTransfer(he)===wt?a===!1?e.has("EXT_sRGB")===!0&&ce===Kn?(P.format=ml,P.minFilter=vn,P.generateMipmaps=!1):b=zo.sRGBToLinear(b):(ce!==Kn||W!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",he)),b}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=E,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=ne}function $1(i,e,t){let n=t.isWebGL2;function s(r,o=Ci){let a,l=_t.getTransfer(o);if(r===Ni)return i.UNSIGNED_BYTE;if(r===Ed)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Bf)return i.BYTE;if(r===Gf)return i.SHORT;if(r===ic)return i.UNSIGNED_SHORT;if(r===Md)return i.INT;if(r===Pi)return i.UNSIGNED_INT;if(r===oi)return i.FLOAT;if(r===Sr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vf)return i.ALPHA;if(r===Kn)return i.RGBA;if(r===Wf)return i.LUMINANCE;if(r===Xf)return i.LUMINANCE_ALPHA;if(r===ns)return i.DEPTH_COMPONENT;if(r===Ws)return i.DEPTH_STENCIL;if(r===ml)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wd)return i.RED;if(r===Sd)return i.RED_INTEGER;if(r===Yf)return i.RG;if(r===Td)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===Ta||r===Aa||r===Ra||r===Ca)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===Yc||r===qc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zc||r===$c)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zc)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$c)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jc||r===Kc||r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pa||r===hh||r===dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Pa)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qf||r===uh||r===fh||r===ph)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ts?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Cl=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},me=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},J1={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
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

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new En,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new On({extensions:{fragDepth:!0},vertexShader:K1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new be(new ki(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Il=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=new Pl,p=t.getContextAttributes(),g=null,_=null,y=[],v=[],T=new ve,C=null,I=new Mn;I.layers.enable(1),I.viewport=new Pt;let k=new Mn;k.layers.enable(2),k.viewport=new Pt;let A=[I,k],M=new Cl;M.layers.enable(1),M.layers.enable(2);let S=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let fe=y[G];return fe===void 0&&(fe=new Mr,y[G]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(G){let fe=y[G];return fe===void 0&&(fe=new Mr,y[G]=fe),fe.getGripSpace()},this.getHand=function(G){let fe=y[G];return fe===void 0&&(fe=new Mr,y[G]=fe),fe.getHandSpace()};function K(G){let fe=v.indexOf(G.inputSource);if(fe===-1)return;let we=y[fe];we!==void 0&&(we.update(G.inputSource,G.frame,c||o),we.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",O);for(let G=0;G<y.length;G++){let fe=v[G];fe!==null&&(v[G]=null,y[G].disconnect(fe))}S=null,ue=null,x.reset(),e.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",N),s.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new jn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,we=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?Ws:ns,we=p.stencil?ts:Pi);let F={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(F),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new jn(u.textureWidth,u.textureHeight,{format:Kn,type:Ni,depthTexture:new Xo(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let Z=e.properties.get(_);Z.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(G){for(let fe=0;fe<G.removed.length;fe++){let we=G.removed[fe],Ae=v.indexOf(we);Ae>=0&&(v[Ae]=null,y[Ae].disconnect(we))}for(let fe=0;fe<G.added.length;fe++){let we=G.added[fe],Ae=v.indexOf(we);if(Ae===-1){for(let Z=0;Z<y.length;Z++)if(Z>=v.length){v.push(we),Ae=Z;break}else if(v[Z]===null){v[Z]=we,Ae=Z;break}if(Ae===-1)break}let F=y[Ae];F&&F.connect(we)}}let B=new L,q=new L;function U(G,fe,we){B.setFromMatrixPosition(fe.matrixWorld),q.setFromMatrixPosition(we.matrixWorld);let Ae=B.distanceTo(q),F=fe.projectionMatrix.elements,Z=we.projectionMatrix.elements,ge=F[14]/(F[10]-1),pe=F[14]/(F[10]+1),w=(F[9]+1)/F[5],ie=(F[9]-1)/F[5],Q=(F[8]-1)/F[0],V=(Z[8]+1)/Z[0],$=ge*Q,ne=ge*V,Me=Ae/(-Q+V),Pe=Me*-Q;fe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Pe),G.translateZ(Me),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let qe=ge+Me,P=pe+Me,b=$-Pe,he=ne+(Ae-Pe),ce=w*pe/P*qe,W=ie*pe/P*qe;G.projectionMatrix.makePerspective(b,he,ce,W,qe,P),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function E(G,fe){fe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(fe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),M.near=k.near=I.near=G.near,M.far=k.far=I.far=G.far,(S!==M.near||ue!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,ue=M.far,I.near=S,I.far=ue,k.near=S,k.far=ue,I.updateProjectionMatrix(),k.updateProjectionMatrix(),G.updateProjectionMatrix());let fe=G.parent,we=M.cameras;E(M,fe);for(let Ae=0;Ae<we.length;Ae++)E(we[Ae],fe);we.length===2?U(M,I,k):M.projectionMatrix.copy(I.projectionMatrix),H(G,M,fe)};function H(G,fe,we){we===null?G.matrix.copy(fe.matrixWorld):(G.matrix.copy(we.matrixWorld),G.matrix.invert(),G.matrix.multiply(fe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(fe.projectionMatrix),G.projectionMatrixInverse.copy(fe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=gl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null};let X=null;function ae(G,fe){if(h=fe.getViewerPose(c||o),m=fe,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ae=!1;we.length!==M.cameras.length&&(M.cameras.length=0,Ae=!0);for(let Z=0;Z<we.length;Z++){let ge=we[Z],pe=null;if(f!==null)pe=f.getViewport(ge);else{let ie=d.getViewSubImage(u,ge);pe=ie.viewport,Z===0&&(e.setRenderTargetTextures(_,ie.colorTexture,u.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(_))}let w=A[Z];w===void 0&&(w=new Mn,w.layers.enable(Z),w.viewport=new Pt,A[Z]=w),w.matrix.fromArray(ge.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(ge.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(pe.x,pe.y,pe.width,pe.height),Z===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ae===!0&&M.cameras.push(w)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")){let Z=d.getDepthInformation(we[0]);Z&&Z.isValid&&Z.texture&&x.init(e,Z,s.renderState)}}for(let we=0;we<y.length;we++){let Ae=v[we],F=y[we];Ae!==null&&F!==void 0&&F.update(Ae,fe,c||o)}x.render(e,M),X&&X(G,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}let ye=new Ud;ye.setAnimationLoop(ae),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}},Ji=new Fn,Q1=new ut;function ex(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Dd(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,y,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===hn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===hn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),y=_.envMap,v=_.envMapRotation;if(y&&(p.envMap.value=y,Ji.copy(v),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(Ji)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;let T=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*T,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(m(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",p));let T=y.program;n.updateUBOMapping(_,T);let C=e.render.frame;r[_.id]!==C&&(u(_),r[_.id]=C)}function h(_){let y=d();_.__bindingPointIndex=y;let v=i.createBuffer(),T=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],v=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,I=v.length;C<I;C++){let k=Array.isArray(v[C])?v[C]:[v[C]];for(let A=0,M=k.length;A<M;A++){let S=k[A];if(f(S,C,A,T)===!0){let ue=S.__offset,K=Array.isArray(S.value)?S.value:[S.value],N=0;for(let O=0;O<K.length;O++){let B=K[O],q=x(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,ue+N,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,T){let C=_.value,I=y+"_"+v;if(T[I]===void 0)return typeof C=="number"||typeof C=="boolean"?T[I]=C:T[I]=C.clone(),!0;{let k=T[I];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return T[I]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function m(_){let y=_.uniforms,v=0,T=16;for(let I=0,k=y.length;I<k;I++){let A=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,S=A.length;M<S;M++){let ue=A[M],K=Array.isArray(ue.value)?ue.value:[ue.value];for(let N=0,O=K.length;N<O;N++){let B=K[N],q=x(B),U=v%T;U!==0&&T-U<q.boundary&&(v+=T-U),ue.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=v,v+=q.storage}}}let C=v%T;return C>0&&(v+=T-C),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Rr=class{constructor(e={}){let{canvas:t=s0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;let y=this,v=!1,T=0,C=0,I=null,k=-1,A=null,M=new Pt,S=new Pt,ue=null,K=new Je(0),N=0,O=t.width,B=t.height,q=1,U=null,E=null,H=new Pt(0,0,O,B),X=new Pt(0,0,O,B),ae=!1,ye=new Ar,G=!1,fe=!1,we=null,Ae=new ut,F=new ve,Z=new L,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return I===null?q:1}let w=n;function ie(R,j){for(let re=0;re<R.length;re++){let le=R[re],te=t.getContext(le,j);if(te!==null)return te}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",De,!1),w===null){let j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),w=ie(j,R),w===null)throw ie(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,V,$,ne,Me,Pe,qe,P,b,he,ce,W,ee,Se,Ne,xe,_e,We,Ee,yt,Ze,Fe,Oe,He;function dt(){Q=new xg(w),V=new dg(w,Q,e),Q.init(V),Fe=new $1(w,Q,V),$=new q1(w,Q,V),ne=new vg(w),Me=new U1,Pe=new Z1(w,Q,$,Me,V,Fe,ne),qe=new fg(y),P=new gg(y),b=new T0(w,V),Oe=new cg(w,Q,b,V),he=new yg(w,b,ne,Oe),ce=new wg(w,he,b,ne),Ee=new bg(w,V,Pe),xe=new ug(Me),W=new D1(y,qe,P,Q,V,Oe,xe),ee=new ex(y,Me),Se=new z1,Ne=new V1(Q,V),We=new lg(y,qe,P,$,ce,u,l),_e=new Y1(y,ce,V),He=new tx(w,ne,V,$),yt=new hg(w,Q,ne,V),Ze=new _g(w,Q,ne,V),ne.programs=W.programs,y.capabilities=V,y.extensions=Q,y.properties=Me,y.renderLists=Se,y.shadowMap=_e,y.state=$,y.info=ne}dt();let je=new Il(y,w);this.xr=je,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(O,B,!1))},this.getSize=function(R){return R.set(O,B)},this.setSize=function(R,j,re=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,B=j,t.width=Math.floor(R*q),t.height=Math.floor(j*q),re===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O*q,B*q).floor()},this.setDrawingBufferSize=function(R,j,re){O=R,B=j,q=re,t.width=Math.floor(R*re),t.height=Math.floor(j*re),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,j,re,le){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,j,re,le),$.viewport(M.copy(H).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,j,re,le){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,j,re,le),$.scissor(S.copy(X).multiplyScalar(q).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(R){$.setScissorTest(ae=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){E=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(R=!0,j=!0,re=!0){let le=0;if(R){let te=!1;if(I!==null){let ze=I.texture.format;te=ze===Ad||ze===Td||ze===Sd}if(te){let ze=I.texture.type,Ve=ze===Ni||ze===Pi||ze===ic||ze===ts||ze===Ed||ze===bd,Ye=We.getClearColor(),$e=We.getClearAlpha(),ot=Ye.r,Ke=Ye.g,Qe=Ye.b;Ve?(f[0]=ot,f[1]=Ke,f[2]=Qe,f[3]=$e,w.clearBufferuiv(w.COLOR,0,f)):(m[0]=ot,m[1]=Ke,m[2]=Qe,m[3]=$e,w.clearBufferiv(w.COLOR,0,m))}else le|=w.COLOR_BUFFER_BIT}j&&(le|=w.DEPTH_BUFFER_BIT),re&&(le|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Se.dispose(),Ne.dispose(),Me.dispose(),qe.dispose(),P.dispose(),ce.dispose(),Oe.dispose(),He.dispose(),W.dispose(),je.dispose(),je.removeEventListener("sessionstart",Un),je.removeEventListener("sessionend",bt),we&&(we.dispose(),we=null),fn.stop()};function At(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let R=ne.autoReset,j=_e.enabled,re=_e.autoUpdate,le=_e.needsUpdate,te=_e.type;dt(),ne.autoReset=R,_e.enabled=j,_e.autoUpdate=re,_e.needsUpdate=le,_e.type=te}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){let j=R.target;j.removeEventListener("dispose",se),Re(j)}function Re(R){ke(R),Me.remove(R)}function ke(R){let j=Me.get(R).programs;j!==void 0&&(j.forEach(function(re){W.releaseProgram(re)}),R.isShaderMaterial&&W.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,re,le,te,ze){j===null&&(j=ge);let Ve=te.isMesh&&te.matrixWorld.determinant()<0,Ye=sf(R,j,re,le,te);$.setMaterial(le,Ve);let $e=re.index,ot=1;if(le.wireframe===!0){if($e=he.getWireframeAttribute(re),$e===void 0)return;ot=2}let Ke=re.drawRange,Qe=re.attributes.position,kt=Ke.start*ot,An=(Ke.start+Ke.count)*ot;ze!==null&&(kt=Math.max(kt,ze.start*ot),An=Math.min(An,(ze.start+ze.count)*ot)),$e!==null?(kt=Math.max(kt,0),An=Math.min(An,$e.count)):Qe!=null&&(kt=Math.max(kt,0),An=Math.min(An,Qe.count));let Yt=An-kt;if(Yt<0||Yt===1/0)return;Oe.setup(te,le,Ye,re,$e);let hi,Nt=yt;if($e!==null&&(hi=b.get($e),Nt=Ze,Nt.setIndex(hi)),te.isMesh)le.wireframe===!0?($.setLineWidth(le.wireframeLinewidth*pe()),Nt.setMode(w.LINES)):Nt.setMode(w.TRIANGLES);else if(te.isLine){let et=le.linewidth;et===void 0&&(et=1),$.setLineWidth(et*pe()),te.isLineSegments?Nt.setMode(w.LINES):te.isLineLoop?Nt.setMode(w.LINE_LOOP):Nt.setMode(w.LINE_STRIP)}else te.isPoints?Nt.setMode(w.POINTS):te.isSprite&&Nt.setMode(w.TRIANGLES);if(te.isBatchedMesh)Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Nt.renderInstances(kt,Yt,te.count);else if(re.isInstancedBufferGeometry){let et=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ma=Math.min(re.instanceCount,et);Nt.renderInstances(kt,Yt,Ma)}else Nt.render(kt,Yt)};function lt(R,j,re){R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,to(R,j,re),R.side=Di,R.needsUpdate=!0,to(R,j,re),R.side=$t):to(R,j,re)}this.compile=function(R,j,re=null){re===null&&(re=R),p=Ne.get(re),p.init(),_.push(p),re.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),R!==re&&R.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights(y._useLegacyLights);let le=new Set;return R.traverse(function(te){let ze=te.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){let Ye=ze[Ve];lt(Ye,re,te),le.add(Ye)}else lt(ze,re,te),le.add(ze)}),_.pop(),p=null,le},this.compileAsync=function(R,j,re=null){let le=this.compile(R,j,re);return new Promise(te=>{function ze(){if(le.forEach(function(Ve){Me.get(Ve).currentProgram.isReady()&&le.delete(Ve)}),le.size===0){te(R);return}setTimeout(ze,10)}Q.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Et=null;function Kt(R){Et&&Et(R)}function Un(){fn.stop()}function bt(){fn.start()}let fn=new Ud;fn.setAnimationLoop(Kt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){Et=R,je.setAnimationLoop(R),R===null?fn.stop():fn.start()},je.addEventListener("sessionstart",Un),je.addEventListener("sessionend",bt),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(j),j=je.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,j,I),p=Ne.get(R,_.length),p.init(),_.push(p),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ye.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,G=xe.init(this.clippingPlanes,fe),x=Se.get(R,g.length),x.init(),g.push(x),si(R,j,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(U,E),this.info.render.frame++,G===!0&&xe.beginShadows();let re=p.state.shadowsArray;if(_e.render(re,R,j),G===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&We.render(x,R),p.setupLights(y._useLegacyLights),j.isArrayCamera){let le=j.cameras;for(let te=0,ze=le.length;te<ze;te++){let Ve=le[te];Lc(x,R,Ve,Ve.viewport)}}else Lc(x,R,j);I!==null&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(y,R,j),Oe.resetDefaultState(),k=-1,A=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function si(R,j,re,le){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){le&&Z.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);let Ve=ce.update(R),Ye=R.material;Ye.visible&&x.push(R,Ve,Ye,re,Z.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){let Ve=ce.update(R),Ye=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Z.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Z.copy(Ve.boundingSphere.center)),Z.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ye)){let $e=Ve.groups;for(let ot=0,Ke=$e.length;ot<Ke;ot++){let Qe=$e[ot],kt=Ye[Qe.materialIndex];kt&&kt.visible&&x.push(R,Ve,kt,re,Z.z,Qe)}}else Ye.visible&&x.push(R,Ve,Ye,re,Z.z,null)}}let ze=R.children;for(let Ve=0,Ye=ze.length;Ve<Ye;Ve++)si(ze[Ve],j,re,le)}function Lc(R,j,re,le){let te=R.opaque,ze=R.transmissive,Ve=R.transparent;p.setupLightsView(re),G===!0&&xe.setGlobalState(y.clippingPlanes,re),ze.length>0&&nf(te,ze,j,re),le&&$.viewport(M.copy(le)),te.length>0&&eo(te,j,re),ze.length>0&&eo(ze,j,re),Ve.length>0&&eo(Ve,j,re),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function nf(R,j,re,le){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;let ze=V.isWebGL2;we===null&&(we=new jn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Sr:Ni,minFilter:es,samples:ze?4:0})),y.getDrawingBufferSize(F),ze?we.setSize(F.x,F.y):we.setSize(xl(F.x),xl(F.y));let Ve=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(K),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let Ye=y.toneMapping;y.toneMapping=Li,eo(R,re,le),Pe.updateMultisampleRenderTarget(we),Pe.updateRenderTargetMipmap(we);let $e=!1;for(let ot=0,Ke=j.length;ot<Ke;ot++){let Qe=j[ot],kt=Qe.object,An=Qe.geometry,Yt=Qe.material,hi=Qe.group;if(Yt.side===$t&&kt.layers.test(le.layers)){let Nt=Yt.side;Yt.side=hn,Yt.needsUpdate=!0,Nc(kt,re,le,An,Yt,hi),Yt.side=Nt,Yt.needsUpdate=!0,$e=!0}}$e===!0&&(Pe.updateMultisampleRenderTarget(we),Pe.updateRenderTargetMipmap(we)),y.setRenderTarget(Ve),y.setClearColor(K,N),y.toneMapping=Ye}function eo(R,j,re){let le=j.isScene===!0?j.overrideMaterial:null;for(let te=0,ze=R.length;te<ze;te++){let Ve=R[te],Ye=Ve.object,$e=Ve.geometry,ot=le===null?Ve.material:le,Ke=Ve.group;Ye.layers.test(re.layers)&&Nc(Ye,j,re,$e,ot,Ke)}}function Nc(R,j,re,le,te,ze){R.onBeforeRender(y,j,re,le,te,ze),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(y,j,re,le,R,ze),te.transparent===!0&&te.side===$t&&te.forceSinglePass===!1?(te.side=hn,te.needsUpdate=!0,y.renderBufferDirect(re,j,le,te,R,ze),te.side=Di,te.needsUpdate=!0,y.renderBufferDirect(re,j,le,te,R,ze),te.side=$t):y.renderBufferDirect(re,j,le,te,R,ze),R.onAfterRender(y,j,re,le,te,ze)}function to(R,j,re){j.isScene!==!0&&(j=ge);let le=Me.get(R),te=p.state.lights,ze=p.state.shadowsArray,Ve=te.state.version,Ye=W.getParameters(R,te.state,ze,j,re),$e=W.getProgramCacheKey(Ye),ot=le.programs;le.environment=R.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(R.isMeshStandardMaterial?P:qe).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ot===void 0&&(R.addEventListener("dispose",se),ot=new Map,le.programs=ot);let Ke=ot.get($e);if(Ke!==void 0){if(le.currentProgram===Ke&&le.lightsStateVersion===Ve)return Uc(R,Ye),Ke}else Ye.uniforms=W.getUniforms(R),R.onBuild(re,Ye,y),R.onBeforeCompile(Ye,y),Ke=W.acquireProgram(Ye,$e),ot.set($e,Ke),le.uniforms=Ye.uniforms;let Qe=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),Uc(R,Ye),le.needsLights=of(R),le.lightsStateVersion=Ve,le.needsLights&&(Qe.ambientLightColor.value=te.state.ambient,Qe.lightProbe.value=te.state.probe,Qe.directionalLights.value=te.state.directional,Qe.directionalLightShadows.value=te.state.directionalShadow,Qe.spotLights.value=te.state.spot,Qe.spotLightShadows.value=te.state.spotShadow,Qe.rectAreaLights.value=te.state.rectArea,Qe.ltc_1.value=te.state.rectAreaLTC1,Qe.ltc_2.value=te.state.rectAreaLTC2,Qe.pointLights.value=te.state.point,Qe.pointLightShadows.value=te.state.pointShadow,Qe.hemisphereLights.value=te.state.hemi,Qe.directionalShadowMap.value=te.state.directionalShadowMap,Qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Qe.spotShadowMap.value=te.state.spotShadowMap,Qe.spotLightMatrix.value=te.state.spotLightMatrix,Qe.spotLightMap.value=te.state.spotLightMap,Qe.pointShadowMap.value=te.state.pointShadowMap,Qe.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=Ke,le.uniformsList=null,Ke}function Dc(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=Bs.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Uc(R,j){let re=Me.get(R);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function sf(R,j,re,le,te){j.isScene!==!0&&(j=ge),Pe.resetTextureUnits();let ze=j.fog,Ve=le.isMeshStandardMaterial?j.environment:null,Ye=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hi,$e=(le.isMeshStandardMaterial?P:qe).get(le.envMap||Ve),ot=le.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!re.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!re.morphAttributes.position,kt=!!re.morphAttributes.normal,An=!!re.morphAttributes.color,Yt=Li;le.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=y.toneMapping);let hi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Nt=hi!==void 0?hi.length:0,et=Me.get(le),Ma=p.state.lights;if(G===!0&&(fe===!0||R!==A)){let kn=R===A&&le.id===k;xe.setState(le,R,kn)}let Rt=!1;le.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ma.state.version||et.outputColorSpace!==Ye||te.isBatchedMesh&&et.batching===!1||!te.isBatchedMesh&&et.batching===!0||te.isInstancedMesh&&et.instancing===!1||!te.isInstancedMesh&&et.instancing===!0||te.isSkinnedMesh&&et.skinning===!1||!te.isSkinnedMesh&&et.skinning===!0||te.isInstancedMesh&&et.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&et.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&et.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&et.instancingMorph===!1&&te.morphTexture!==null||et.envMap!==$e||le.fog===!0&&et.fog!==ze||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==xe.numPlanes||et.numIntersection!==xe.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==Ke||et.morphTargets!==Qe||et.morphNormals!==kt||et.morphColors!==An||et.toneMapping!==Yt||V.isWebGL2===!0&&et.morphTargetsCount!==Nt)&&(Rt=!0):(Rt=!0,et.__version=le.version);let Vi=et.currentProgram;Rt===!0&&(Vi=to(le,j,te));let kc=!1,dr=!1,Ea=!1,on=Vi.getUniforms(),Wi=et.uniforms;if($.useProgram(Vi.program)&&(kc=!0,dr=!0,Ea=!0),le.id!==k&&(k=le.id,dr=!0),kc||A!==R){on.setValue(w,"projectionMatrix",R.projectionMatrix),on.setValue(w,"viewMatrix",R.matrixWorldInverse);let kn=on.map.cameraPosition;kn!==void 0&&kn.setValue(w,Z.setFromMatrixPosition(R.matrixWorld)),V.logarithmicDepthBuffer&&on.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&on.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,dr=!0,Ea=!0)}if(te.isSkinnedMesh){on.setOptional(w,te,"bindMatrix"),on.setOptional(w,te,"bindMatrixInverse");let kn=te.skeleton;kn&&(V.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),on.setValue(w,"boneTexture",kn.boneTexture,Pe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(on.setOptional(w,te,"batchingTexture"),on.setValue(w,"batchingTexture",te._matricesTexture,Pe));let ba=re.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&V.isWebGL2===!0)&&Ee.update(te,re,Vi),(dr||et.receiveShadow!==te.receiveShadow)&&(et.receiveShadow=te.receiveShadow,on.setValue(w,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Wi.envMap.value=$e,Wi.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),dr&&(on.setValue(w,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&rf(Wi,Ea),ze&&le.fog===!0&&ee.refreshFogUniforms(Wi,ze),ee.refreshMaterialUniforms(Wi,le,q,B,we),Bs.upload(w,Dc(et),Wi,Pe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Bs.upload(w,Dc(et),Wi,Pe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&on.setValue(w,"center",te.center),on.setValue(w,"modelViewMatrix",te.modelViewMatrix),on.setValue(w,"normalMatrix",te.normalMatrix),on.setValue(w,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let kn=le.uniformsGroups;for(let wa=0,af=kn.length;wa<af;wa++)if(V.isWebGL2){let zc=kn[wa];He.update(zc,Vi),He.bind(zc,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function rf(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function of(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,j,re){Me.get(R.texture).__webglTexture=j,Me.get(R.depthTexture).__webglTexture=re;let le=Me.get(R);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=re===void 0,le.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){let re=Me.get(R);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,re=0){I=R,T=j,C=re;let le=!0,te=null,ze=!1,Ve=!1;if(R){let $e=Me.get(R);$e.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(w.FRAMEBUFFER,null),le=!1):$e.__webglFramebuffer===void 0?Pe.setupRenderTarget(R):$e.__hasExternalTextures&&Pe.rebindTextures(R,Me.get(R.texture).__webglTexture,Me.get(R.depthTexture).__webglTexture);let ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ve=!0);let Ke=Me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?te=Ke[j][re]:te=Ke[j],ze=!0):V.isWebGL2&&R.samples>0&&Pe.useMultisampledRTT(R)===!1?te=Me.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[re]:te=Ke,M.copy(R.viewport),S.copy(R.scissor),ue=R.scissorTest}else M.copy(H).multiplyScalar(q).floor(),S.copy(X).multiplyScalar(q).floor(),ue=ae;if($.bindFramebuffer(w.FRAMEBUFFER,te)&&V.drawBuffers&&le&&$.drawBuffers(R,te),$.viewport(M),$.scissor(S),$.setScissorTest(ue),ze){let $e=Me.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+j,$e.__webglTexture,re)}else if(Ve){let $e=Me.get(R.texture),ot=j||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,$e.__webglTexture,re||0,ot)}k=-1},this.readRenderTargetPixels=function(R,j,re,le,te,ze,Ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){$.bindFramebuffer(w.FRAMEBUFFER,Ye);try{let $e=R.texture,ot=$e.format,Ke=$e.type;if(ot!==Kn&&Fe.convert(ot)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Ke===Sr&&(Q.has("EXT_color_buffer_half_float")||V.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ke!==Ni&&Fe.convert(Ke)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===oi&&(V.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-le&&re>=0&&re<=R.height-te&&w.readPixels(j,re,le,te,Fe.convert(ot),Fe.convert(Ke),ze)}finally{let $e=I!==null?Me.get(I).__webglFramebuffer:null;$.bindFramebuffer(w.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(R,j,re=0){let le=Math.pow(2,-re),te=Math.floor(j.image.width*le),ze=Math.floor(j.image.height*le);Pe.setTexture2D(j,0),w.copyTexSubImage2D(w.TEXTURE_2D,re,0,0,R.x,R.y,te,ze),$.unbindTexture()},this.copyTextureToTexture=function(R,j,re,le=0){let te=j.image.width,ze=j.image.height,Ve=Fe.convert(re.format),Ye=Fe.convert(re.type);Pe.setTexture2D(re,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,re.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,le,R.x,R.y,te,ze,Ve,Ye,j.image.data):j.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,le,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Ve,j.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,le,R.x,R.y,Ve,Ye,j.image),le===0&&re.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,j,re,le,te=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ze=Math.round(R.max.x-R.min.x),Ve=Math.round(R.max.y-R.min.y),Ye=R.max.z-R.min.z+1,$e=Fe.convert(le.format),ot=Fe.convert(le.type),Ke;if(le.isData3DTexture)Pe.setTexture3D(le,0),Ke=w.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)Pe.setTexture2DArray(le,0),Ke=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,le.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,le.unpackAlignment);let Qe=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),An=w.getParameter(w.UNPACK_SKIP_PIXELS),Yt=w.getParameter(w.UNPACK_SKIP_ROWS),hi=w.getParameter(w.UNPACK_SKIP_IMAGES),Nt=re.isCompressedTexture?re.mipmaps[te]:re.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,R.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,R.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?w.texSubImage3D(Ke,te,j.x,j.y,j.z,ze,Ve,Ye,$e,ot,Nt.data):le.isCompressedArrayTexture?w.compressedTexSubImage3D(Ke,te,j.x,j.y,j.z,ze,Ve,Ye,$e,Nt.data):w.texSubImage3D(Ke,te,j.x,j.y,j.z,ze,Ve,Ye,$e,ot,Nt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Qe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,An),w.pixelStorei(w.UNPACK_SKIP_ROWS,Yt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,hi),te===0&&le.generateMipmaps&&w.generateMipmap(Ke),$.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Pe.setTextureCube(R,0):R.isData3DTexture?Pe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Pe.setTexture2DArray(R,0):Pe.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,$.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===sc?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===ra?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ll=class extends Rr{};Ll.prototype.isWebGL1Renderer=!0;var zi=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Nl=class extends En{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new ut,ad=new ut,wo=[],ld=new Qn,nx=new ut,yr=new be,_r=new ss,Zs=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),ld.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),_r.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),ad.multiplyMatrices(n,Ds),yr.matrixWorld=ad,yr.raycast(e,wo);for(let o=0,a=wo.length;o<a;o++){let l=wo[o];l.instanceId=r,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,wd,oi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var qo=class extends En{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,l=new ut;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends Pr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var So=new L,sl=new oc,rl=new oc,ol=new oc,$s=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),sl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,p),rl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,p),ol.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),rl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ol.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ix(i,e){let t=1-i;return t*t*e}function sx(i,e){return 2*(1-i)*i*e}function rx(i,e){return i*i*e}function Er(i,e,t,n){return ix(i,e)+sx(i,t)+rx(i,n)}function ox(i,e){let t=1-i;return t*t*t*e}function ax(i,e){let t=1-i;return 3*t*t*i*e}function lx(i,e){return 3*(1-i)*i*i*e}function cx(i,e){return i*i*i*e}function br(i,e,t,n,s){return ox(i,e)+ax(i,t)+lx(i,n)+cx(i,s)}var Zo=class extends Hn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ul=class extends Hn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends Hn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends Hn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y),Er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cd(a,l.x,c.x,h.x,d.x),cd(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:$s,CubicBezierCurve:Zo,CubicBezierCurve3:Ul,EllipseCurve:Pr,LineCurve:$o,LineCurve3:kl,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Ko,SplineCurve:jo}),zl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}},Js=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $o(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Jo(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Zo(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Pr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},as=class i extends It{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Zt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new L,u=new ve,f=new L,m=new L,x=new L,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let _=0;_<=t;_++){let y=n+_*h*s,v=Math.sin(y),T=Math.cos(y);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*v,d.y=e[C].y,d.z=e[C].x*T,o.push(d.x,d.y,d.z),u.x=_/t,u.y=C/(e.length-1),a.push(u.x,u.y);let I=l[3*C+0]*v,k=l[3*C+1],A=l[3*C+0]*T;c.push(I,k,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,T=v,C=v+e.length,I=v+e.length+1,k=v+1;r.push(T,C,k),r.push(I,k,C)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Fi=class i extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],p=n/2,g=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function _(){let v=new L,T=new L,C=0,I=(t-e)/n;for(let k=0;k<=r;k++){let A=[],M=k/r,S=M*(t-e)+e;for(let ue=0;ue<=s;ue++){let K=ue/s,N=K*l+a,O=Math.sin(N),B=Math.cos(N);T.x=S*O,T.y=-M*n+p,T.z=S*B,d.push(T.x,T.y,T.z),v.set(O,I,B).normalize(),u.push(v.x,v.y,v.z),f.push(K,1-M),A.push(m++)}x.push(A)}for(let k=0;k<s;k++)for(let A=0;A<r;A++){let M=x[A][k],S=x[A+1][k],ue=x[A+1][k+1],K=x[A][k+1];h.push(M,S,K),h.push(S,ue,K),C+=6}c.addGroup(g,C,0),g+=C}function y(v){let T=m,C=new ve,I=new L,k=0,A=v===!0?e:t,M=v===!0?1:-1;for(let ue=1;ue<=s;ue++)d.push(0,p*M,0),u.push(0,M,0),f.push(.5,.5),m++;let S=m;for(let ue=0;ue<=s;ue++){let N=ue/s*l+a,O=Math.cos(N),B=Math.sin(N);I.x=A*B,I.y=p*M,I.z=A*O,d.push(I.x,I.y,I.z),u.push(0,M,0),C.x=O*.5+.5,C.y=B*.5*M+.5,f.push(C.x,C.y),m++}for(let ue=0;ue<s;ue++){let K=T+ue,N=S+ue;v===!0?h.push(N,N+1,K):h.push(N+1,N,K),k+=3}c.addGroup(g,k,v===!0?1:2),g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ea=class i extends Lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fl=class i extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,v=new L,T=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],v),f(t[C+2],T),l(y,v,T,_)}function l(_,y,v,T){let C=T+1,I=[];for(let k=0;k<=C;k++){I[k]=[];let A=_.clone().lerp(v,k/C),M=y.clone().lerp(v,k/C),S=C-k;for(let ue=0;ue<=S;ue++)ue===0&&k===C?I[k][ue]=A:I[k][ue]=A.clone().lerp(M,ue/S)}for(let k=0;k<C;k++)for(let A=0;A<2*(C-k)-1;A++){let M=Math.floor(A/2);A%2===0?(u(I[k][M+1]),u(I[k+1][M]),u(I[k][M])):(u(I[k][M+1]),u(I[k+1][M+1]),u(I[k+1][M]))}}function c(_){let y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=p(_)/2/Math.PI+.5,T=g(_)/Math.PI+.5;o.push(v,1-T)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],T=o[_+4],C=Math.max(y,v,T),I=Math.min(y,v,T);C>.9&&I<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){let _=new L,y=new L,v=new L,T=new L,C=new ve,I=new ve,k=new ve;for(let A=0,M=0;A<r.length;A+=9,M+=6){_.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),C.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),k.set(o[M+4],o[M+5]),T.copy(_).add(y).add(v).divideScalar(3);let S=p(T);x(C,M+0,_,S),x(I,M+2,y,S),x(k,M+4,v,S)}}function x(_,y,v,T){T<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var en=class extends Js{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}},hx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=mx(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)d=i[m],u=i[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ir(r,o,t,a,l,f,0),o}};function Bd(i,e,t,n,s){let r,o;if(s===Tx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hd(r,i[r],i[r+1],o);return o&&aa(o,o.next)&&(Nr(o),o=o.next),o}function ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(aa(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(i,e,t,n,s,r,o){if(!i)return;!o&&r&&vx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ux(i,n,s,r):dx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=fx(ls(i),e,t),Ir(i,e,t,n,s,r,2)):o===2&&px(i,e,t,n,s,r):Ir(ls(i),e,t,n,s,r,1);break}}}function dx(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Fs(s,a,r,l,o,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ux(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,g=Ol(f,m,e,t,n),_=Ol(x,p,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=g&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,l,d,c,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Fs(a,h,l,d,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,l,d,c,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Fs(a,h,l,d,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!aa(s,r)&&Gd(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Nr(n),Nr(n.next),n=i=r),n=n.next}while(n!==i);return ls(n)}function px(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bx(o,a)){let l=Vd(o,a);o=ls(o,o.next),l=ls(l,l.next),Ir(o,e,t,n,s,r,0),Ir(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mx(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Bd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ex(c));for(s.sort(gx),r=0;r<s.length;r++)t=xx(s[r],t);return t}function gx(i,e){return i.x-e.x}function xx(i,e){let t=yx(i,e);if(!t)return e;let n=Vd(t,i);return ls(n,n.next),ls(t,t.next)}function yx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Lr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&_x(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function _x(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function vx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mx(s)}function Mx(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ol(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ex(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wx(i,e)&&(Lr(i,e)&&Lr(e,i)&&Sx(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||aa(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function aa(i,e){return i.x===e.x&&i.y===e.y}function Gd(i,e,t,n){let s=Ao(Dt(i,e,t)),r=Ao(Dt(i,e,n)),o=Ao(Dt(t,n,i)),a=Ao(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&To(i,t,e)||r===0&&To(i,n,e)||o===0&&To(t,i,n)||a===0&&To(t,e,n))}function To(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ao(i){return i>0?1:i<0?-1:0}function wx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Lr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Sx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vd(i,e){let t=new Hl(i.i,i.x,i.y),n=new Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(i,e,t,n){let s=new Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var wr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dd(e),ud(n,e);let o=e.length;t.forEach(dd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ud(n,t[l]);let a=hx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ud(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gn=class i extends It{constructor(e=new en([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ax,y,v=!1,T,C,I,k;g&&(y=g.getSpacedPoints(h),v=!0,u=!1,T=g.computeFrenetFrames(h,!1),C=new L,I=new L,k=new L),u||(p=0,f=0,m=0,x=0);let A=a.extractPoints(c),M=A.shape,S=A.holes;if(!wr.isClockWise(M)){M=M.reverse();for(let w=0,ie=S.length;w<ie;w++){let Q=S[w];wr.isClockWise(Q)&&(S[w]=Q.reverse())}}let K=wr.triangulateShape(M,S),N=M;for(let w=0,ie=S.length;w<ie;w++){let Q=S[w];M=M.concat(Q)}function O(w,ie,Q){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(ie,Q)}let B=M.length,q=K.length;function U(w,ie,Q){let V,$,ne,Me=w.x-ie.x,Pe=w.y-ie.y,qe=Q.x-w.x,P=Q.y-w.y,b=Me*Me+Pe*Pe,he=Me*P-Pe*qe;if(Math.abs(he)>Number.EPSILON){let ce=Math.sqrt(b),W=Math.sqrt(qe*qe+P*P),ee=ie.x-Pe/ce,Se=ie.y+Me/ce,Ne=Q.x-P/W,xe=Q.y+qe/W,_e=((Ne-ee)*P-(xe-Se)*qe)/(Me*P-Pe*qe);V=ee+Me*_e-w.x,$=Se+Pe*_e-w.y;let We=V*V+$*$;if(We<=2)return new ve(V,$);ne=Math.sqrt(We/2)}else{let ce=!1;Me>Number.EPSILON?qe>Number.EPSILON&&(ce=!0):Me<-Number.EPSILON?qe<-Number.EPSILON&&(ce=!0):Math.sign(Pe)===Math.sign(P)&&(ce=!0),ce?(V=-Pe,$=Me,ne=Math.sqrt(b)):(V=Me,$=Pe,ne=Math.sqrt(b/2))}return new ve(V/ne,$/ne)}let E=[];for(let w=0,ie=N.length,Q=ie-1,V=w+1;w<ie;w++,Q++,V++)Q===ie&&(Q=0),V===ie&&(V=0),E[w]=U(N[w],N[Q],N[V]);let H=[],X,ae=E.concat();for(let w=0,ie=S.length;w<ie;w++){let Q=S[w];X=[];for(let V=0,$=Q.length,ne=$-1,Me=V+1;V<$;V++,ne++,Me++)ne===$&&(ne=0),Me===$&&(Me=0),X[V]=U(Q[V],Q[ne],Q[Me]);H.push(X),ae=ae.concat(X)}for(let w=0;w<p;w++){let ie=w/p,Q=f*Math.cos(ie*Math.PI/2),V=m*Math.sin(ie*Math.PI/2)+x;for(let $=0,ne=N.length;$<ne;$++){let Me=O(N[$],E[$],V);Ae(Me.x,Me.y,-Q)}for(let $=0,ne=S.length;$<ne;$++){let Me=S[$];X=H[$];for(let Pe=0,qe=Me.length;Pe<qe;Pe++){let P=O(Me[Pe],X[Pe],V);Ae(P.x,P.y,-Q)}}}let ye=m+x;for(let w=0;w<B;w++){let ie=u?O(M[w],ae[w],ye):M[w];v?(I.copy(T.normals[0]).multiplyScalar(ie.x),C.copy(T.binormals[0]).multiplyScalar(ie.y),k.copy(y[0]).add(I).add(C),Ae(k.x,k.y,k.z)):Ae(ie.x,ie.y,0)}for(let w=1;w<=h;w++)for(let ie=0;ie<B;ie++){let Q=u?O(M[ie],ae[ie],ye):M[ie];v?(I.copy(T.normals[w]).multiplyScalar(Q.x),C.copy(T.binormals[w]).multiplyScalar(Q.y),k.copy(y[w]).add(I).add(C),Ae(k.x,k.y,k.z)):Ae(Q.x,Q.y,d/h*w)}for(let w=p-1;w>=0;w--){let ie=w/p,Q=f*Math.cos(ie*Math.PI/2),V=m*Math.sin(ie*Math.PI/2)+x;for(let $=0,ne=N.length;$<ne;$++){let Me=O(N[$],E[$],V);Ae(Me.x,Me.y,d+Q)}for(let $=0,ne=S.length;$<ne;$++){let Me=S[$];X=H[$];for(let Pe=0,qe=Me.length;Pe<qe;Pe++){let P=O(Me[Pe],X[Pe],V);v?Ae(P.x,P.y+y[h-1].y,y[h-1].x+Q):Ae(P.x,P.y,d+Q)}}}G(),fe();function G(){let w=s.length/3;if(u){let ie=0,Q=B*ie;for(let V=0;V<q;V++){let $=K[V];F($[2]+Q,$[1]+Q,$[0]+Q)}ie=h+p*2,Q=B*ie;for(let V=0;V<q;V++){let $=K[V];F($[0]+Q,$[1]+Q,$[2]+Q)}}else{for(let ie=0;ie<q;ie++){let Q=K[ie];F(Q[2],Q[1],Q[0])}for(let ie=0;ie<q;ie++){let Q=K[ie];F(Q[0]+B*h,Q[1]+B*h,Q[2]+B*h)}}n.addGroup(w,s.length/3-w,0)}function fe(){let w=s.length/3,ie=0;we(N,ie),ie+=N.length;for(let Q=0,V=S.length;Q<V;Q++){let $=S[Q];we($,ie),ie+=$.length}n.addGroup(w,s.length/3-w,1)}function we(w,ie){let Q=w.length;for(;--Q>=0;){let V=Q,$=Q-1;$<0&&($=w.length-1);for(let ne=0,Me=h+p*2;ne<Me;ne++){let Pe=B*ne,qe=B*(ne+1),P=ie+V+Pe,b=ie+$+Pe,he=ie+$+qe,ce=ie+V+qe;Z(P,b,he,ce)}}}function Ae(w,ie,Q){l.push(w),l.push(ie),l.push(Q)}function F(w,ie,Q){ge(w),ge(ie),ge(Q);let V=s.length/3,$=_.generateTopUV(n,s,V-3,V-2,V-1);pe($[0]),pe($[1]),pe($[2])}function Z(w,ie,Q,V){ge(w),ge(ie),ge(V),ge(ie),ge(Q),ge(V);let $=s.length/3,ne=_.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);pe(ne[0]),pe(ne[1]),pe(ne[3]),pe(ne[1]),pe(ne[2]),pe(ne[3])}function ge(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function pe(w){r.push(w.x),r.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qo[s.type]().fromJSON(s)),new i(n,e.options)}},Ax={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,o),new ve(a,l),new ve(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-d),new ve(u,1-m),new ve(x,1-g)]:[new ve(a,1-l),new ve(h,1-d),new ve(f,1-m),new ve(p,1-g)]}};function Rx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ei=class i extends Fl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Pn=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,u=new L,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let _=[],y=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let C=T/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(C+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let y=h[g][_+1],v=h[g][_],T=h[g+1][_],C=h[g+1][_+1];(g!==0||o>0)&&f.push(y,v,C),(g!==n-1||l<Math.PI)&&f.push(v,T,C)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oi=class i extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,_=(s+1)*f+m;o.push(x,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Dr=class i extends It{constructor(e=new Ko(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ve,h=new L,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function x(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),_(),g()}function p(y){h=e.getPointAt(y/t,h);let v=o.normals[y],T=o.binormals[y];for(let C=0;C<=s;C++){let I=C/s*Math.PI*2,k=Math.sin(I),A=-Math.cos(I);l.x=A*v.x+k*T.x,l.y=A*v.y+k*T.y,l.z=A*v.z+k*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let T=(s+1)*(y-1)+(v-1),C=(s+1)*y+(v-1),I=(s+1)*y+v,k=(s+1)*(y-1)+v;m.push(T,C,k),m.push(C,I,k)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ge=class extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=e,a=2*t-n;break;case xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:o=e,l=2*n-t;break;case xh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,v=f*p-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+_*o[c+T]+y*o[l+T]+v*o[d+T];return r}},Gl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Vl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Cx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[u+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Io;var cs=class extends ti{};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Po;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends ti{};Wl.prototype.ValueTypeName="color";var Xl=class extends ti{};Xl.prototype.ValueTypeName="number";var Yl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ur=class extends ti{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=Io;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends ti{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Po;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends ti{};ql.prototype.ValueTypeName="vector";var Zl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Px=new Zl,$l=class{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=class extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},zr=class extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},al=new ut,fd=new L,pd=new L,ta=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var md=new ut,vr=new L,ll=new L,Jl=class extends ta{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md)}},Fr=class extends kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kl=class extends ta{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",Ix=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",Lx="[^"+ac.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",lc),Dx=/(WCOD+)?/.source.replace("WCOD",Lx),Ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),zx=new RegExp("^"+Nx+Dx+Ux+kx+"$"),Fx=["material","materials","bones","map"],jl=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ix,"")}static parseTrackName(e){let t=zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=jl;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B2=new Float32Array(1);var gd=new ut,ia=class{constructor(e,t,n=0,s=1/0){this.ray=new Ho(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(e,t=!0,n=[]){return Ql(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,n,t);return n.sort(xd),n}};function xd(i,e){return i.distance-e.distance}function Ql(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ql(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);var Wd={cellMeters:1.25,levelMeters:2.5,grid:[66,56],modules:{0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B",1:"\u0410\u043D\u0433\u0430\u0440",2:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",3:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",4:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",6:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",7:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",8:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",9:"\u0416\u0438\u043B\u0430\u044F",10:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F"},zones:[{key:"hangar",module:1,name:"\u0410\u043D\u0433\u0430\u0440",x:0,y:0,width:27,height:20},{key:"industry",module:2,name:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F",x:27,y:0,width:16,height:20},{key:"support",module:3,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:46,y:0,width:10,height:20},{key:"military",module:4,name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F",x:0,y:23,width:24,height:14},{key:"labs",module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F",x:27,y:23,width:16,height:14},{key:"isolator",module:6,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:46,y:23,width:10,height:14},{key:"medical",module:7,name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F",x:0,y:40,width:13,height:16},{key:"domestic",module:8,name:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F",x:16,y:40,width:12,height:16},{key:"living",module:9,name:"\u0416\u0438\u043B\u0430\u044F",x:31,y:40,width:25,height:16},{key:"sport",module:10,name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F",x:59,y:40,width:7,height:16}],rooms:[{module:1,zone:"hangar",name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:0,width:20,height:20,levels:4,kind:"room",floor:0,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,zone:"hangar",name:"\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:0,width:4,height:17,levels:4,kind:"room",floor:0,note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:1,zone:"hangar",name:"\u041A\u041F\u041F",x:20,y:17,width:4,height:3,levels:1,kind:"room",floor:0,note:"\u043F\u043E\u0441\u0442 \u0443 \u0448\u043B\u044E\u0437\u0430 \u0430\u043D\u0433\u0430\u0440\u0430"},{module:1,zone:"hangar",name:"\u041F\u0440\u043E\u0435\u0437\u0434 \u043A \u0446\u0435\u0445\u0443",x:24,y:0,width:3,height:17,levels:2,kind:"corridor",floor:0,note:"K7 \u0438\u0437 \u0430\u043D\u0433\u0430\u0440\u0430 \u0432 \u0446\u0435\u0445, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u043A \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0430\u0437\u0435"},{module:1,zone:"hangar",name:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0433\u0430\u0440\u0430",x:24,y:17,width:3,height:3,levels:2,kind:"airlock",floor:0,note:"\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u0437\u0434 \u0438 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440 H1, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438"},{module:2,zone:"industry",name:"\u0426\u0435\u0445 (\u0441\u0442\u0435\u043D\u0434 K7)",x:27,y:5,width:11,height:10,levels:2,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u043A\u0440\u0430\u043D-\u0431\u0430\u043B\u043A\u0430, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u044B\u0441\u043E\u0442\u0430 2 \u0443\u0440\u043E\u0432\u043D\u044F"},{module:2,zone:"industry",name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:27,y:0,width:6,height:5,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F",x:33,y:0,width:5,height:5,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:38,y:0,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,zone:"industry",name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:38,y:5,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u0438\u0444\u0442\u0430"},{module:2,zone:"industry",name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:38,y:10,width:5,height:5,levels:2,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B"},{module:2,zone:"industry",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:15,width:16,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:2,zone:"industry",name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",x:27,y:17,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:2,zone:"industry",name:"\u0428\u043B\u044E\u0437",x:33,y:17,width:4,height:3,levels:2,kind:"airlock",floor:0,note:""},{module:2,zone:"industry",name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 K7",x:37,y:17,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:3,zone:"support",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:0,width:2,height:20,levels:1,kind:"corridor",floor:0,note:""},{module:3,zone:"support",name:"\u041F\u043E\u0441\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0430",x:48,y:0,width:4,height:4,levels:1,kind:"room",floor:0,note:"\u043F\u0443\u043B\u044C\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0431\u043B\u043E\u043A\u0430, \u0441\u0432\u044F\u0437\u044C \u0441 \u044F\u0440\u0443\u0441\u043E\u043C \u22125"},{module:3,zone:"support",name:"\u041B\u0438\u0444\u0442 \u043A \u0440\u0435\u0430\u043A\u0442\u043E\u0440\u0443",x:52,y:0,width:4,height:4,levels:1,kind:"room",floor:0,note:"\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0444\u0442 \u043D\u0430 \u044F\u0440\u0443\u0441 \u22125"},{module:3,zone:"support",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440",x:48,y:4,width:8,height:5,levels:1,kind:"room",floor:0,note:"\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0449\u0438\u0442\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"},{module:3,zone:"support",name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B",x:48,y:9,width:8,height:5,levels:1,kind:"room",floor:0,note:""},{module:3,zone:"support",name:"\u0412\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435",x:48,y:14,width:8,height:6,levels:1,kind:"room",floor:0,note:""},{module:4,zone:"military",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440",x:0,y:23,width:9,height:6,levels:1,kind:"room",floor:0,note:"\u043F\u0443\u043B\u044C\u0442\u044B, \u043A\u0430\u0440\u0442\u0430-\u0433\u043B\u043E\u0431\u0443\u0441, \u0441\u0432\u044F\u0437\u044C"},{module:4,zone:"military",name:"\u0411\u0440\u0438\u0444\u0438\u043D\u0433",x:9,y:23,width:5,height:6,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B, \u044D\u043A\u0440\u0430\u043D"},{module:4,zone:"military",name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:14,y:23,width:6,height:6,levels:1,kind:"room",floor:0,note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0431\u043E\u0439\u0446\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,zone:"military",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:29,width:20,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:4,zone:"military",name:"\u0423\u0437\u0435\u043B \u0441\u0432\u044F\u0437\u0438",x:20,y:23,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u044F\u0437\u0438, \u0440\u0430\u0434\u0430\u0440\u044B"},{module:4,zone:"military",name:"\u0428\u043B\u044E\u0437",x:20,y:28,width:4,height:4,levels:2,kind:"airlock",floor:0,note:""},{module:4,zone:"military",name:"\u0414\u0435\u0436\u0443\u0440\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C",x:20,y:32,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u0434\u0435\u0436\u0443\u0440\u043D\u044B\u0439 \u043E\u0444\u0438\u0446\u0435\u0440 \u043F\u043E \u0431\u0430\u0437\u0435 \u0438 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u043A\u0430\u043C\u0435\u0440"},{module:4,zone:"military",name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:0,y:31,width:7,height:6,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u0441 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,zone:"military",name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:8,y:31,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C"},{module:4,zone:"military",name:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0438\u043A\u0430",x:14,y:31,width:6,height:6,levels:1,kind:"room",floor:0,note:"\u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0440\u0443\u0436\u0438\u044F"},{module:5,zone:"labs",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0443\u0447\u0451\u043D\u044B\u0445",x:27,y:23,width:6,height:3,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B\u044B, \u0448\u043A\u0430\u0444\u044B"},{module:5,zone:"labs",name:"\u0428\u043B\u044E\u0437",x:33,y:23,width:4,height:3,levels:2,kind:"airlock",floor:0,note:""},{module:5,zone:"labs",name:"\u041F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F",x:37,y:23,width:6,height:3,levels:1,kind:"room",floor:0,note:"\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B"},{module:5,zone:"labs",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:27,y:26,width:16,height:2,levels:2,kind:"corridor",floor:0,note:""},{module:5,zone:"labs",name:"\u0425\u0438\u043C\u0438\u043A\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:27,y:28,width:5,height:9,levels:1,kind:"room",floor:0,note:"\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u044B, \u0445\u0440\u043E\u043C\u0430\u0442\u043E\u0433\u0440\u0430\u0444, \u0441\u043F\u0435\u043A\u0442\u0440\u043E\u043C\u0435\u0442\u0440"},{module:5,zone:"labs",name:"\u041A\u0441\u0435\u043D\u043E\u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:32,y:28,width:6,height:9,levels:1,kind:"room",floor:0,note:"\u0431\u043E\u043A\u0441\u044B \u0431\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F\u044B, \u0441\u0442\u043E\u043B \u0434\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F"},{module:5,zone:"labs",name:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F",x:38,y:28,width:5,height:9,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u0435\u043D\u0434\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439, \u043E\u0441\u0446\u0438\u043B\u043B\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},{module:6,zone:"isolator",name:"\u0428\u043B\u044E\u0437 \u0441\u0430\u043D\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438",x:46,y:23,width:4,height:4,levels:2,kind:"airlock",floor:0,note:"\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0432\u0445\u043E\u0434\u043E\u043C \u043A \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C"},{module:6,zone:"isolator",name:"\u041F\u043E\u0441\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",x:50,y:23,width:6,height:4,levels:1,kind:"room",floor:0,note:"\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B \u0431\u043E\u043A\u0441\u043E\u0432"},{module:6,zone:"isolator",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:46,y:27,width:2,height:10,levels:2,kind:"corridor",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 1",x:48,y:27,width:8,height:3,levels:1,kind:"room",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 2",x:48,y:30,width:8,height:3,levels:1,kind:"room",floor:0,note:""},{module:6,zone:"isolator",name:"\u0411\u043E\u043A\u0441 3",x:48,y:33,width:8,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041F\u0440\u0438\u0451\u043C\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",x:0,y:40,width:5,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F, \u0430\u043F\u0442\u0435\u043A\u0430",x:5,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0432\u0440\u0430\u0447\u0430",x:9,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:0,y:44,width:13,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:7,zone:"medical",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:6,y:46,width:2,height:10,levels:1,kind:"corridor",floor:0,note:""},{module:7,zone:"medical",name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F",x:0,y:46,width:6,height:5,levels:1,kind:"room",floor:0,note:"\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B, \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A, \u043D\u0430\u0440\u043A\u043E\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-1",x:0,y:51,width:6,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:7,zone:"medical",name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",x:8,y:46,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u0440\u0435\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"},{module:7,zone:"medical",name:"\u041F\u0418\u0422-2",x:8,y:51,width:5,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u0430\u043B\u0430\u0442\u0430 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438, \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438"},{module:8,zone:"domestic",name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0438 \u043E\u0442\u0434\u044B\u0445",x:16,y:40,width:8,height:7,levels:1,kind:"room",floor:0,note:"\u0441\u0442\u043E\u043B\u044B \u043D\u0430 16 \u043C\u0435\u0441\u0442, \u0434\u0438\u0432\u0430\u043D\u044B"},{module:8,zone:"domestic",name:"\u041A\u0430\u043C\u0431\u0443\u0437",x:24,y:40,width:4,height:5,levels:1,kind:"room",floor:0,note:"\u043F\u043B\u0438\u0442\u0430, \u043C\u043E\u0439\u043A\u0430, \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u043E\u0441\u0442\u0440\u043E\u0432"},{module:8,zone:"domestic",name:"\u041F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434",x:24,y:45,width:4,height:2,levels:1,kind:"room",floor:0,note:""},{module:8,zone:"domestic",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:16,y:47,width:12,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 1 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:16,y:49,width:6,height:7,levels:1,kind:"room",floor:0,note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A 2 (\u0434\u0443\u0448\u0435\u0432\u044B\u0435)",x:22,y:49,width:6,height:4,levels:1,kind:"room",floor:0,note:"\u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B, \u0443\u043C\u044B\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0438, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:8,zone:"domestic",name:"\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F",x:22,y:53,width:6,height:3,levels:1,kind:"room",floor:0,note:""},{module:10,zone:"sport",name:"\u0421\u043F\u043E\u0440\u0442\u0437\u0430\u043B",x:59,y:40,width:7,height:11,levels:1,kind:"room",floor:0,note:"\u0434\u043E\u0440\u043E\u0436\u043A\u0438, \u0432\u0435\u043B\u043E\u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u044B, \u0441\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438, \u0448\u0442\u0430\u043D\u0433\u0438, \u043C\u0430\u0442\u044B"},{module:10,zone:"sport",name:"\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0434\u0443\u0448\u0435\u0432\u044B\u0435",x:59,y:51,width:7,height:5,levels:1,kind:"room",floor:0,note:"\u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438, \u0441\u043A\u0430\u043C\u044C\u0438, \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u044B"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:44,width:25,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",floor:0,note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 1",x:31,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 2",x:35,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 3",x:39,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 4",x:43,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 5",x:47,y:40,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 6",x:51,y:40,width:5,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 7",x:31,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 8",x:35,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 9",x:39,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 10",x:43,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 11",x:47,y:52,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 12",x:51,y:52,width:5,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B",x:31,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041D\u0430\u0447. \u0448\u0442\u0430\u0431\u0430",x:34,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u043E\u043C. \u043E\u0442\u0440\u044F\u0434\u0430",x:37,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0432\u0440\u0430\u0447",x:40,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0425\u0438\u0440\u0443\u0440\u0433",x:43,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0443\u0447\u0451\u043D\u044B\u0439",x:46,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u0413\u043B. \u0438\u043D\u0436\u0435\u043D\u0435\u0440",x:49,y:46,width:3,height:4,levels:1,kind:"single",floor:0,note:"\u043E\u0434\u043D\u043E\u043C\u0435\u0441\u0442\u043D\u0430\u044F"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 19",x:52,y:46,width:4,height:4,levels:1,kind:"room",floor:0,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0438\u043D\u043E\u0437\u0430\u043B",x:31,y:40,width:12,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u044D\u043A\u0440\u0430\u043D, \u0440\u044F\u0434\u044B \u043A\u0440\u0435\u0441\u0435\u043B, \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440"},{module:9,zone:"living",name:"\u0424\u043E\u0439\u0435",x:43,y:40,width:3,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u0432\u0445\u043E\u0434 \u0432 \u043A\u0438\u043D\u043E\u0437\u0430\u043B \u0438 \u043E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044E"},{module:9,zone:"living",name:"\u041E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044F",x:46,y:40,width:10,height:10,levels:1,kind:"room",floor:1,note:"\u0432\u0442\u043E\u0440\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u043C\u0435\u0441\u0442\u043E \u043E\u0442\u0434\u044B\u0445\u0430 \u0441 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F\u043C\u0438, \u0433\u0438\u0434\u0440\u043E\u043F\u043E\u043D\u0438\u043A\u0430, \u0444\u043E\u043D\u0442\u0430\u043D"},{module:9,zone:"living",name:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440",x:31,y:50,width:25,height:2,levels:1,kind:"corridor",floor:1,note:""},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 13",x:31,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 14",x:35,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 15",x:39,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 16",x:43,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 17",x:47,y:52,width:4,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:9,zone:"living",name:"\u041A\u0430\u044E\u0442\u0430 18",x:51,y:52,width:5,height:4,levels:1,kind:"room",floor:1,note:"2 \u043C\u0435\u0441\u0442\u0430"}],corridors:[{name:"H1",x:0,y:20,width:56,height:3,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"H2",x:0,y:37,width:59,height:3,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V1",x:24,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:0,width:3,height:20,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V2",x:43,y:23,width:3,height:14,levels:2,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438, \u043C\u0430\u0440\u0448\u0440\u0443\u0442 K7, \u0432\u044B\u0441\u043E\u0442\u0430 5 \u043C"},{name:"V3",x:13,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V4",x:28,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"},{name:"V5",x:56,y:40,width:3,height:16,levels:1,note:"\u043A\u043E\u0440\u0438\u0434\u043E\u0440 \u043C\u0435\u0436\u0434\u0443 \u0437\u043E\u043D\u0430\u043C\u0438"}],thickWalls:[{x:7,y:31,width:1,height:6},{x:13,y:31,width:1,height:6},{x:8,y:36,width:5,height:1}],doors:[{x:23,y:8,side:"E",size:3,kind:"gate",airlock:-1,floor:0},{x:24,y:17,side:"N",size:3,kind:"gate",airlock:4,floor:0},{x:24,y:19,side:"S",size:3,kind:"gate",airlock:4,floor:0},{x:27,y:9,side:"W",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:9,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:33,y:19,side:"S",size:3,kind:"gate",airlock:13,floor:0},{x:33,y:17,side:"N",size:3,kind:"gate",airlock:13,floor:0},{x:23,y:29,side:"E",size:3,kind:"gate",airlock:26,floor:0},{x:20,y:29,side:"W",size:2,kind:"gate",airlock:26,floor:0},{x:33,y:23,side:"N",size:3,kind:"gate",airlock:32,floor:0},{x:33,y:25,side:"S",size:3,kind:"gate",airlock:32,floor:0},{x:46,y:24,side:"W",size:3,kind:"gate",airlock:38,floor:0},{x:46,y:26,side:"S",size:2,kind:"gate",airlock:38,floor:0},{x:28,y:14,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:14,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:39,y:4,side:"S",size:3,kind:"gate",airlock:-1,floor:0},{x:28,y:4,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:4,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:17,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:39,y:17,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:1,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:1,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:6,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:11,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:16,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:46,y:19,side:"S",size:2,kind:"double",airlock:-1,floor:0},{x:46,y:17,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:23,y:18,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:4,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:11,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:28,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:20,y:25,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:3,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:10,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:31,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:21,y:32,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:25,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:39,y:25,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:29,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:34,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:28,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:50,y:24,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:28,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:31,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:34,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:2,y:40,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:2,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:6,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:10,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:12,y:44,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:5,y:48,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:5,y:53,side:"E",size:1,kind:"door",airlock:-1,floor:0},{x:8,y:48,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:8,y:53,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:19,y:40,side:"N",size:2,kind:"double",airlock:-1,floor:0},{x:19,y:46,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:42,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:25,y:45,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:18,y:49,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:49,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:24,y:53,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:16,y:47,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:27,y:47,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:31,y:44,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:31,y:50,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:55,y:44,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:55,y:50,side:"E",size:2,kind:"double",airlock:-1,floor:0},{x:59,y:44,side:"W",size:2,kind:"double",airlock:-1,floor:0},{x:59,y:52,side:"W",size:1,kind:"door",airlock:-1,floor:0},{x:61,y:51,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:36,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:43,side:"S",size:1,kind:"door",airlock:-1,floor:0},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:32,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:38,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:41,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:44,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:47,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:50,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:53,y:46,side:"N",size:1,kind:"door",airlock:-1,floor:0},{x:35,y:49,side:"S",size:2,kind:"double",airlock:-1,floor:1},{x:44,y:49,side:"S",size:1,kind:"door",airlock:-1,floor:1},{x:53,y:49,side:"S",size:2,kind:"double",airlock:-1,floor:1},{x:43,y:44,side:"W",size:1,kind:"door",airlock:-1,floor:1},{x:45,y:44,side:"E",size:1,kind:"door",airlock:-1,floor:1},{x:32,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:36,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:40,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:44,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:48,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1},{x:52,y:52,side:"N",size:1,kind:"door",airlock:-1,floor:1}],stairs:[{x:47,y:50,dirX:1,dirY:0,count:4}],cells:{1:540,2:320,3:200,4:319,5:224,6:140,7:208,8:192,10:112,9:800,0:633},total:3688};function Ox(i,e){let t=e==="N"||e==="S"?i.width:i.height,n=e==="N"||e==="S"?i.height:i.width,a={back:{N:"S",S:"N",W:"E",E:"W"}[e],front:e,left:e==="N"||e==="S"?"W":"N",right:e==="N"||e==="S"?"E":"S"};return{across:t,depth:n,faces:a,cell:(c,h,d=1,u=1)=>e==="S"?[i.x+c,i.y+h,d,u]:e==="N"?[i.x+c,i.y+i.height-h-u,d,u]:e==="E"?[i.x+h,i.y+c,u,d]:[i.x+i.width-h-u,i.y+c,u,d],level:i.floor||0}}function Xd(i,e){let t=o=>i.doors.find(a=>a.size===1&&(a.floor||0)===(o.floor||0)&&a.x>=o.x&&a.x<o.x+o.width&&a.y>=o.y&&a.y<o.y+o.height),n=(o,a,l,c,h,d,u,f={})=>{let[m,x,p,g]=o.cell(l,c,h,d);e(a,m,x,p,g,{face:o.faces[u]||u,level:o.level,...f})},s=["64,82,110","110,64,58","70,96,70","120,100,60","80,70,110"];i.rooms.filter(o=>o.zone==="living"&&o.kind!=="corridor"&&o.name.startsWith("\u041A\u0430\u044E\u0442\u0430")||o.kind==="single").forEach((o,a)=>{let l=t(o),c=Ox(o,l.side),h=s[a%s.length];if(o.kind==="single"){n(c,"bed",0,0,1,2,"back",{color:h}),n(c,"nightstand",0,2,1,1,"left"),n(c,"deskChair",2,0,1,1,"right",{seed:a}),n(c,"wardrobe",2,3,1,1,"right"),o.name==="\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0431\u0430\u0437\u044B"?n(c,"safe",2,1,1,1,"right"):n(c,"shelf",2,1,1,1,"right");return}let d=c.across-1;n(c,"bed",0,0,1,2,"back",{color:h}),n(c,"bed",d,0,1,2,"back",{color:s[(a+2)%s.length]}),n(c,"nightstand",0,2,1,1,"left"),n(c,"nightstand",d,2,1,1,"right"),n(c,"cabinTable",1,0,2,1,"back"),n(c,"wardrobe",0,3,1,1,"left"),n(c,"wardrobe",d,3,1,1,"right"),c.across===5&&n(c,"shelf",3,0,1,1,"back")}),e("liftPlatform",0,0,20,20,{blocks:!1}),e("barrels",20,0),e("barrels",21,0),e("generator",22,0,2,2),e("crate",20,2),e("crate",21,2),e("console",23,3),e("crate",22,14),e("crate",23,14),e("crate",23,15),e("rack",20,15),e("console",20,17,1,1),e("console",21,17,1,1),e("deskChair",20,19,1,1,{face:"S",seed:3}),e("locker",22,19),e("repairStand",31,8,4,4,{blocks:!1}),e("machineTool",30,5,2,1,{face:"N"}),e("machineTool",32,5,2,1,{face:"N"}),e("desk",36,5,2,1),e("rack",37,7),e("rack",37,8),e("rack",37,12),e("crate",36,13),e("crate",37,13),e("generator",34,13,2,2),e("console",27,5);for(let o of[27,29,30,31,32])e("rack",o,0);e("crate",30,2),e("crate",31,2),e("crate",32,2),e("crate",32,3),e("crate",27,3),e("desk",33,0,2,1),e("machineTool",36,0,2,1,{face:"N"}),e("rack",37,2),e("rack",37,3),e("cabinet",33,3),e("liftPlatform",38,0,5,5,{blocks:!1}),e("crate",42,0),e("crate",38,5),e("crate",42,5),e("crate",42,6),e("crate",38,9),e("console",38,7,1,1);for(let o of[10,11,12,13])e("rack",38,o),e("rack",42,o);e("crate",38,14),e("crate",42,14),e("instrumentRack",27,17,1,1,{face:"W",seed:2}),e("desk",30,19,2,1),e("console",32,18),e("labTable",27,19,2,1),e("cabinet",31,17);for(let o of[41,42])e("rack",o,17),e("rack",o,19);e("crate",37,19),e("crate",38,19),e("crate",37,17),e("console",49,0),e("console",50,0),e("console",51,0),e("deskChair",51,3,1,1,{face:"E",seed:5}),e("cabinet",48,3),e("liftPlatform",53,0,3,3,{blocks:!1}),e("console",52,3),e("generator",50,4,2,2),e("generator",53,4,2,2),e("cabinet",55,6),e("cabinet",55,7),e("cabinet",55,8),e("instrumentRack",50,8,1,1,{face:"S"}),e("acUnit",50,9,2,1),e("acUnit",53,9,2,1),e("acUnit",50,12,2,1),e("acUnit",53,12,2,1),e("barrels",55,11),e("tank",50,14,2,3),e("tank",53,14,2,3),e("barrels",55,18),e("barrels",55,19),e("console",50,19);for(let o of[1,2,3,5,6,7])e("console",o,23);e("console",0,25,1,1),e("console",0,26,1,1),e("commandTable",3,25,2,2,{face:"N"}),e("wallScreen",8,25,1,2,{face:"E",seed:4}),e("deskChair",8,27,1,1,{face:"E",seed:6}),e("wallScreen",10,23,3,1,{face:"N",seed:7}),e("chairRow",10,25,3,1,{face:"S"}),e("chairRow",10,26,3,1,{face:"S"});for(let o of[14,15,17,18,19])e("locker",o,23);e("locker",14,24),e("locker",14,25),e("locker",14,26),e("bench",16,25,3,1,{face:"N"}),e("console",21,23),e("console",22,23),e("console",23,23),e("instrumentRack",23,25,1,1,{face:"E",seed:3}),e("instrumentRack",23,26,1,1,{face:"E",seed:5}),e("cabinet",23,27),e("console",20,36,1,1),e("console",21,36,1,1),e("console",22,36,1,1),e("deskChair",23,33,1,1,{face:"E",seed:8}),e("wallScreen",20,33,1,2,{face:"W",seed:2}),e("locker",23,35);for(let o of[32,33,34,35])e("gunRack",0,o,1,1,{face:"W"});for(let o of[1,2,4,5])e("gunRack",o,36,1,1,{face:"S"});e("desk",5,32,2,1),e("locker",6,34),e("locker",6,35);for(let o of[8,9,11,12])for(let a of[32,33,35])e("crate",o,a);e("desk",14,33,1,2),e("machineTool",14,36,2,1,{face:"S"}),e("gunRack",19,33,1,1,{face:"E"}),e("gunRack",19,34,1,1,{face:"E"}),e("labTable",17,35,2,1),e("cabinet",19,36),e("deskChair",27,23,1,1,{face:"N",seed:1}),e("deskChair",28,23,1,1,{face:"N",seed:2}),e("deskChair",30,23,1,1,{face:"N",seed:3}),e("deskChair",31,23,1,1,{face:"N",seed:4}),e("shelf",32,24,1,1,{face:"E"}),e("shelf",32,25,1,1,{face:"E"});for(let o of[37,38,40,41,42])e("instrumentRack",o,23,1,1,{face:"N",seed:o});e("labTable",41,25,2,1),e("fumeHood",27,30,1,1,{face:"W"}),e("fumeHood",27,31,1,1,{face:"W"}),e("fumeHood",27,33,1,1,{face:"W"}),e("labTable",29,31,1,2),e("instrumentRack",31,30,1,1,{face:"E",seed:6}),e("instrumentRack",31,31,1,1,{face:"E",seed:7}),e("cabinet",27,35),e("cabinet",28,36),e("freezer",31,36,1,1,{face:"S"}),e("bioCabinet",32,30,1,1,{face:"W"}),e("bioCabinet",32,31,1,1,{face:"W"}),e("opTable",34,32,1,2,{face:"N"}),e("medCart",35,32,1,1,{face:"E"}),e("labTable",37,30,1,2),e("specimenTank",36,35),e("specimenTank",37,35),e("freezer",32,35,1,1,{face:"W"}),e("freezer",32,36,1,1,{face:"W"}),e("testRig",39,32,2,2,{face:"N"}),e("instrumentRack",42,30,1,1,{face:"E",seed:8}),e("instrumentRack",42,31,1,1,{face:"E",seed:9}),e("instrumentRack",42,34,1,1,{face:"E",seed:10}),e("labTable",38,30,1,2),e("desk",38,36,2,1),e("console",52,23),e("console",53,23),e("console",54,23),e("wallScreen",55,24,1,2,{face:"E",seed:5});for(let[o,a]of[[51,28],[53,28],[55,28],[51,31],[53,31],[55,31],[52,34],[54,35]])e("specimenTank",o,a);e("cabinet",55,27),e("freezer",55,33,1,1,{face:"E"}),e("medBed",0,41,1,2,{face:"W",monitor:!1}),e("deskChair",4,40,1,1,{face:"N",seed:2}),e("cabinet",4,42);for(let o of[5,7,8])e("cabinet",o,40);e("medBed",8,41,1,2,{face:"E",monitor:!1}),e("deskChair",11,40,1,1,{face:"N",seed:9}),e("cabinet",12,40),e("shelf",9,40,1,1,{face:"N"}),e("medBed",12,41,1,2,{face:"E",monitor:!1}),e("opTable",2,47,1,2,{face:"N"}),e("medCart",3,47,1,1,{face:"E"}),e("medCart",1,49,1,1,{face:"W"}),e("cabinet",0,46),e("cabinet",1,46),e("cabinet",0,50);for(let o of[51,53,55])e("medBed",0,o,2,1,{face:"W"});e("cabinet",5,51),e("medBed",11,46,2,1,{face:"E"}),e("medBed",11,48,2,1,{face:"E"}),e("medCart",12,50,1,1,{face:"E"}),e("cabinet",8,46);for(let o of[51,53,55])e("medBed",11,o,2,1,{face:"E"});e("diningTable",16,41,2,2,{face:"N"}),e("diningTable",21,41,2,2,{face:"N"}),e("diningTable",16,43,2,2,{face:"N"}),e("diningTable",21,43,2,2,{face:"N"}),e("servingCounter",23,40,1,1,{face:"E"}),e("servingCounter",23,41,1,1,{face:"E"}),e("sofa",16,46,2,1,{face:"S"}),e("sofa",21,46,2,1,{face:"S",color:"70,84,96"}),e("wallScreen",16,40,2,1,{face:"N",seed:6}),e("galleyFloor",24,40,4,5,{blocks:!1,drain:[3.6,1.4,3.7,5.8]}),e("galleyCounter",24,40,1,1,{face:"N",variant:"drawers",upper:!0}),e("galleyRange",25,40,1,1,{face:"N"}),e("galleyCounter",26,40,1,1,{face:"N",variant:"doors",upper:!0}),e("galleyFridge",27,40,1,1,{face:"N"}),e("galleyCounter",27,41,1,1,{face:"E",variant:"sink2"}),e("galleyCounter",27,42,1,1,{face:"E",variant:"drawers"}),e("galleyCounter",27,43,1,1,{face:"E",variant:"microwave"}),e("galleyCounter",27,44,1,1,{face:"S",variant:"grinder"}),e("galleyCounter",26,44,1,1,{face:"S",variant:"doors"}),e("galleyIsland",26,41,1,2),e("rack",24,46),e("rack",26,46),e("rack",27,46),e("crate",27,45);for(let o of[16,17,19,20,21])e("washbasin",o,49,1,1,{face:"N"});for(let o of[51,52,53,54,55])e("showerCabin",16,o,1,1,{face:"W"}),e("toilet",21,o,1,1,{face:"E"});e("bench",18,52,1,3,{face:"W"});for(let o of[22,23,25])e("washbasin",o,49,1,1,{face:"N"});for(let o of[50,51,52])e("showerCabin",27,o,1,1,{face:"E"});e("toilet",22,51,1,1,{face:"W"}),e("toilet",22,52,1,1,{face:"W"});for(let o of[25,26,27])e("washer",o,55,1,1,{face:"S"});e("washer",22,55,1,1,{face:"S"}),e("labTable",27,53,1,1),e("rack",22,53);let r={level:1};e("cinemaScreen",31,42,1,6,{...r,face:"W"});for(let o of[34,36,38,40])e("cinemaSeats",o,41,1,4,{...r,face:"E"}),e("cinemaSeats",o,46,1,3,{...r,face:"E"});e("projector",42,40,1,1,{...r,face:"E"}),e("sofa",43,40,2,1,{...r,face:"N",color:"70,84,96"}),e("vendingMachine",45,40,1,1,{...r,face:"N"}),e("pottedTree",43,48,1,1,r),e("pottedTree",45,48,1,1,r),e("pottedTree",45,46,1,1,r);for(let o of[47,48,50,51,52,53])e("hydroponicRack",o,40,1,1,{...r,face:"N"});e("pottedTree",46,40,1,1,r),e("pottedTree",55,40,1,1,r),e("pottedTree",46,48,1,1,r),e("pottedTree",55,48,1,1,r),e("planter",47,42,2,1,{...r,face:"N"}),e("planter",52,42,2,1,{...r,face:"N"}),e("planter",47,47,2,1,{...r,face:"S"}),e("planter",51,47,2,1,{...r,face:"S"}),e("planter",55,42,1,2,{...r,face:"E"}),e("planter",55,45,1,2,{...r,face:"E"}),e("fountain",50,44,2,2,r),e("bench",50,43,2,1,{...r,face:"N"}),e("bench",50,46,2,1,{...r,face:"S"}),e("bench",49,44,1,2,{...r,face:"W"});for(let o of[59,60,61])e("treadmill",o,40,1,2,{face:"N"});for(let[o,a]of[[64,40],[65,40],[64,41],[65,41]])e("exerciseBike",o,a,1,1,{face:"N"});e("powerRack",64,44,2,2,{face:"E"}),e("weightBench",64,47,1,2,{face:"N"}),e("dumbbellRack",65,47,1,2,{face:"E"}),e("gymMat",60,47,3,2,{blocks:!1}),e("punchingBag",63,50),e("punchingBag",59,50),e("wallScreen",62,40,1,1,{face:"N",seed:1});for(let o of[59,60,61,62,63])e("locker",o,55);e("bench",60,53,3,1,{face:"N"});for(let o of[63,64,65])e("showerCabin",o,51,1,1,{face:"N"});e("showerCabin",65,52,1,1,{face:"E"}),e("washbasin",65,54,1,1,{face:"E"}),e("washbasin",65,55,1,1,{face:"E"})}var Jt={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function Yd(i){let{TILES:e,LEVEL_H:t,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:l,building:c,stairRun:h,tiltrotor:d,block:u,surface:f,marking:m,floorStyle:x}=i,p=(E,H,X,ae,ye)=>{for(let G=Math.max(0,H);G<=Math.min(e-1,ae);G++)for(let fe=Math.max(0,E);fe<=Math.min(e-1,X);fe++)f[G][fe]=ye},g=(E,H,X,ae)=>{for(let ye=0;ye<e;ye++)for(let G=0;G<e;G++)Math.hypot(G+.5-E,ye+.5-H)<=X&&(f[ye][G]=ae)},_=(E,H)=>E===0?"g":E===H-1?"t":"u",y=(E,H,X)=>`${E}_${_(H,X)}`;p(0,0,e-1,e-1,Jt.grass),p(0,27,e-1,30,Jt.sidewalk),p(0,31,e-1,48,Jt.asphalt),p(0,49,e-1,52,Jt.sidewalk);for(let E=0;E<e;E++)E%4<2&&(E<44||E>48)&&(m[40][E]="dash");for(let E=31;E<=48;E++)for(let H=44;H<=48;H++)m[E][H]="zebra";function v(E,H,X,ae,ye,G,fe,we,Ae={}){let F=c({name:E,col0:H,row0:X,col1:ae,row1:ye,levels:G,style:fe});for(let V=0;V<G;V++){r(V,H,X,ae,ye),V>0&&s(V,H,X,ae,ye,n.interior);for(let ne=X;ne<=ye;ne++)for(let Me=H;Me<=ae;Me++)x[V][ne][Me]=Ae.floor||"parquet";let $=y(fe,V,G);for(let ne=X;ne<=ye;ne++)o(V,H,ne,"wall",$),o(V,ae+1,ne,"wall",$);for(let ne=H;ne<=ae;ne++)a(V,ne,X,"wall",$),a(V,ne,ye+1,"wall",$);for(let ne=H+1;ne<ae;ne++)(ne-H)%2===1&&(a(V,ne,X,"window",$),a(V,ne,ye+1,"window",$));for(let ne=X+1;ne<ye;ne++)(ne-X)%2===1&&(o(V,H,ne,"window",$),o(V,ae+1,ne,"window",$))}l("roof",G,H,X,ae-H+1,ye-X+1,{blocks:!1,type:Ae.roof||"tile",facade:fe});let Z=Math.floor((H+ae)/2),ge=we==="S"?ye+1:X,pe=we==="S"?X:ye+1,w=y(fe,0,G);a(0,Z+1,ge,"door",w),Ae.backDoor!==!1&&a(0,Z+1,pe,"door",w);let ie=we==="S"?X+1:ye-5;T(Z-1,ie,G-1,fe);let Q=Math.floor((X+ye)/2)+1;for(let V=0;V<G;V++){for(let ne=X;ne<=ye;ne++)o(V,Z-1,ne,"wall","inner"),o(V,Z+2,ne,"wall","inner");for(let ne=H;ne<Z-1;ne++)a(V,ne,Q,"wall","inner");for(let ne=Z+2;ne<=ae;ne++)a(V,ne,Q,"wall","inner");[{col0:H,col1:Z-2,row0:X,row1:Q-1,side:"W"},{col0:H,col1:Z-2,row0:Q,row1:ye,side:"W"},{col0:Z+2,col1:ae,row0:X,row1:Q-1,side:"E"},{col0:Z+2,col1:ae,row0:Q,row1:ye,side:"E"}].forEach((ne,Me)=>{let Pe=[];for(let P=ne.row0+1;P<ne.row1;P++)(P<ie||P>ie+4)&&Pe.push(P);let qe=Pe.length?Pe[Math.floor(Pe.length/2)]:ne.row0;ne.side==="W"?o(V,Z-1,qe,"door","inner"):o(V,Z+2,qe,"door","inner"),Ae.furnish!==!1&&I(V,ne,ne.side==="W"?[ne.col1,qe]:[ne.col0,qe],(Me+V+H)%4)})}return{...F,midCol:Z,stairRow:ie,front:ge,back:pe}}function T(E,H,X,ae){let ye=[];for(let G=0;G<X;G++)G%2===0?(h(G,E,H+3,0,-1,3,"classic"),ye.push({level:G,col:E,cells:[H+3,H+2,H+1],exit:[E,H]})):(h(G,E+1,H+1,0,1,3,"classic"),ye.push({level:G,col:E+1,cells:[H+1,H+2,H+3],exit:[E+1,H+4]}));for(let G of ye){let fe=G.level+1,we=(Ae,F)=>Ae===G.col&&G.cells.includes(F);for(let Ae of G.cells){let F=[[G.col-1,Ae,"W",G.col,Ae],[G.col+1,Ae,"W",G.col+1,Ae],[G.col,Ae-1,"N",G.col,Ae],[G.col,Ae+1,"N",G.col,Ae+1]];for(let[Z,ge,pe,w,ie]of F)we(Z,ge)||Z===G.exit[0]&&ge===G.exit[1]||(pe==="W"?o(fe,w,ie,"rail","iron"):a(fe,w,ie,"rail","iron"))}}}let C=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function I(E,H,X,ae){let ye=H.col1-H.col0+1,G=H.row1-H.row0+1;if(ye<3||G<3)return;[[H.col0,H.row0],[H.col1-1,H.row0],[H.col0,H.row1],[H.col1-1,H.row1]].forEach((we,Ae)=>{let[F,Z,ge]=C[(ae+Ae)%C.length],pe=Z===2?we[0]:Ae%2?H.col1:H.col0,w=we[1];for(let ie=0;ie<Z;ie++)if(Math.abs(pe+ie-X[0])<=1&&Math.abs(w-X[1])<=1)return;l(F,E,pe,w,Z,ge,{rotation:w===H.row0?0:2})})}let k={col0:2,row0:7,col1:15,row1:21};p(k.col0,k.row0,k.col1,k.row1,Jt.sand);for(let E=k.row0;E<=k.row1;E++)o(0,k.col0,E,"rail","fence"),o(0,k.col1+1,E,"rail","fence");for(let E=k.col0;E<=k.col1;E++)a(0,E,k.row0,"rail","fence"),(E<8||E>9)&&a(0,E,k.row1+1,"rail","fence");o(0,k.col1+1,14,null),p(8,22,9,26,Jt.path),l("playhouse",0,3,8,2,2),l("slide",0,7,8,1,3),l("swing",0,11,8,3,1),l("sandbox",0,4,15,3,3,{blocks:!1}),l("carousel",0,11,13,2,2),l("bench",0,2,12,1,1,{rotation:3}),l("bench",0,2,18,1,1,{rotation:3}),l("bench",0,15,19,1,1,{rotation:1}),l("bin",0,15,20);for(let[E,H]of[[13,19],[7,20]])l("tree",0,E,H,1,1,{type:"linden"});for(let E of[4,9,14,20,26,32,61,67,73,80,86,92])l("tree",0,E,1,1,1,{type:E%3?"linden":"chestnut"});v("houseA",19,7,31,21,3,"ochre","S"),p(25,22,27,26,Jt.path);let A={col0:36,row0:4,col1:58,row1:22};c({name:"bank",...A,levels:2,style:"bank"});for(let E=0;E<2;E++){r(E,A.col0,A.row0,A.col1,A.row1),E>0&&s(E,A.col0,A.row0,A.col1,A.row1,n.interior);for(let X=A.row0;X<=A.row1;X++)for(let ae=A.col0;ae<=A.col1;ae++)x[E][X][ae]="marble";let H=y("bank",E,2);for(let X=A.row0;X<=A.row1;X++)o(E,A.col0,X,"wall",H),o(E,A.col1+1,X,"wall",H);for(let X=A.col0;X<=A.col1;X++)a(E,X,A.row0,"wall",H),a(E,X,A.row1+1,"wall",H);for(let X=A.col0+1;X<A.col1;X++)(X-A.col0)%2===1&&a(E,X,A.row1+1,"window",H);for(let X of[37,39,53,55,57])a(E,X,A.row0,"window",H);for(let X=A.row0+1;X<A.row1;X++)(X-A.row0)%2===1&&(o(E,A.col0,X,"window",H),o(E,A.col1+1,X,"window",H))}l("roof",2,A.col0,A.row0,A.col1-A.col0+1,A.row1-A.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let E of[46,47,48])a(0,E,A.row1+1,"door","bank_g");a(1,47,A.row1+1,"window","bank_t"),l("balcony",1,45,23,5,1,{blocks:!1});for(let E of[45,49])l("column",0,E,23,1,1);o(0,A.col1+1,7,"door","bank_g"),p(34,23,60,26,Jt.paving);for(let E=A.col0;E<=A.col1;E++)a(0,E,13,"wall","inner");for(let E of[39,55])a(0,E,13,"door","inner");let M={col0:43,row0:4,col1:51,row1:9};for(let E=M.row0;E<=M.row1;E++)o(0,M.col0,E,"wall","vault"),o(0,M.col1+1,E,"wall","vault");for(let E=M.col0;E<=M.col1;E++)a(0,E,M.row1+1,"wall","vault");a(0,47,M.row1+1,"door","vault");for(let E=M.row0;E<=M.row1;E++)for(let H=M.col0;H<=M.col1;H++)x[0][E][H]="steel";for(let E=A.row0;E<=10;E++)o(0,40,E,"wall","inner"),o(0,55,E,"wall","inner");for(let E=A.col0;E<40;E++)a(0,E,11,"wall","inner");for(let E=55;E<=A.col1;E++)a(0,E,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let E of[37,38,41,42,43,44,50,51,52,53,56,57])l("counter",0,E,15,1,1);l("sofa",0,38,20,2,1),l("sofa",0,55,20,2,1),l("table",0,41,19,2,1),l("table",0,52,19,2,1);for(let[E,H]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])l("plant",0,E,H);for(let E=M.col0;E<=M.col1;E++)l("deposits",0,E,M.row0);for(let E of[5,6,7])l("deposits",0,M.col0,E,1,1,{rotation:3}),l("deposits",0,M.col1,E,1,1,{rotation:1});l("table",0,46,7,2,1),l("desk",0,36,4,2,1),l("console",0,39,4),l("locker",0,36,9),l("locker",0,37,9),l("desk",0,56,5,2,1),l("cabinet",0,58,4),l("cabinet",0,58,9),l("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let E=A.row0;E<=A.row1;E++)o(1,41,E,"wall","inner"),o(1,53,E,"wall","inner");for(let E=41;E<=52;E++)a(1,E,10,"wall","inner"),a(1,E,13,"wall","inner");for(let E of[7,17])for(let[H,X]of[[A.col0,40],[53,A.col1]])for(let ae=H;ae<=X;ae++)a(1,ae,E,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),l("table",1,45,16,4,2),l("bookcase",1,42,21),l("bookcase",1,52,21),l("desk",1,37,4,2,1),l("bookcase",1,36,6),l("sofa",1,37,9,2,1),l("desk",1,56,4,2,1),l("cabinet",1,58,6),l("desk",1,37,12,2,1),l("cabinet",1,36,16),l("desk",1,56,12,2,1),l("cabinet",1,58,16),l("desk",1,37,19,2,1),l("desk",1,56,19,2,1),l("table",1,45,5,3,2),l("bookcase",1,42,4),l("bookcase",1,52,4),p(61,4,73,26,Jt.asphalt),p(64,27,70,30,Jt.asphalt);for(let E=62;E<=72;E+=2)l("paint",0,E,5,1,4,{blocks:!1,line:"W"}),l("paint",0,E,17,1,4,{blocks:!1,line:"W"});let S=(E,H,X,ae,ye)=>l("car",0,X,ae,2,4,{type:E,color:H,flip:!!ye});S("suv","police",62,5),S("suv","police",64,5),S("van","white",68,5),S("suv","graphite",62,17,!0),S("suv","red",70,17,!0),l("lamp",0,61,12),l("lamp",0,73,12);let ue=v("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),p(83,22,85,26,Jt.path);for(let E of[80,81,86,87])l("counter",0,E,19,1,1);l("locker",0,76,6),l("locker",0,77,6),l("locker",0,78,6),l("desk",0,76,10,2,1),l("rack",0,91,6),l("rack",0,91,7),l("rack",0,90,6),l("crate",0,91,10),l("bunk",0,76,17,2,1),l("bunk",0,90,17,2,1),l("desk",0,89,21,2,1),l("cabinet",0,75,21),l("desk",1,76,7,2,1),l("desk",1,89,7,2,1),l("cabinet",1,75,10),l("cabinet",1,91,10),l("desk",1,76,18,2,1),l("desk",1,89,18,2,1),l("bookcase",1,75,21),l("bookcase",1,91,21);for(let E=3;E<e;E+=10)(E<63||E>71)&&l("streetLamp",0,E,30),E+5<e&&(E+5<43||E+5>49)&&l("streetLamp",0,E+5,49);for(let E of[17,58,88])l("bin",0,E,28);l("busStop",0,30,50,3,1),l("bench",0,31,51,1,1,{rotation:0}),l("bin",0,34,51);let K=(E,H,X,ae,ye)=>l("car",0,X,ae,4,2,{type:E,color:H,flip:!!ye});K("suv","white",20,33),K("van","sand",36,42,!0),K("suv","blue",58,36),K("suv","olive",74,45,!0),K("suv","graphite",81,33),K("van","white",6,45,!0),v("houseB",3,55,16,69,3,"cream","N"),v("houseC",22,56,34,70,2,"green","N"),v("houseD",51,55,63,70,3,"pink","N"),v("houseE",72,56,86,70,3,"ochre","N");for(let[E,H,X]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])p(E,53,H,X,Jt.path);for(let E=1;E<=32;E++)[10,11,29,30].includes(E)||l("hedge",0,E,73);for(let E=59;E<=91;E++)[80,81].includes(E)||l("hedge",0,E,73);p(0,76,36,77,Jt.path),p(56,76,91,77,Jt.path);for(let[E,H]of[[10,11],[29,30],[57,58],[80,81]])p(E,71,H,75,Jt.path);for(let E=3;E<=33;E+=5)l("tree",0,E,83,1,1,{type:E%2?"chestnut":"linden"});for(let E of[5,20,35])l("bench",0,E,78,1,1,{rotation:2});for(let E of[60,66])l("tree",0,19,E,1,1,{type:"linden"}),l("tree",0,68,E,1,1,{type:"chestnut"}),l("tree",0,90,E,1,1,{type:"linden"});let N={col:46.5,row:82.5};g(N.col,N.row,12,Jt.paving),p(44,53,48,71,Jt.paving),l("fountain",0,42,78,9,9,{blocks:!1});for(let E=78;E<=86;E++)for(let H=42;H<=50;H++)Math.hypot(H+.5-N.col,E+.5-N.row)<4.4&&u(0,H,E);for(let E=0;E<8;E++){let H=E/8*Math.PI*2+Math.PI/8,X=Math.floor(N.col+Math.cos(H)*8.6),ae=Math.floor(N.row+Math.sin(H)*8.6),ye=[[0,-1],[1,0],[0,1],[-1,0]].map(([G,fe])=>G*Math.cos(H)+fe*Math.sin(H));l(E%2?"streetLamp":"bench",0,X,ae,1,1,{rotation:ye.indexOf(Math.max(...ye))})}p(60,81,82,95,Jt.paving);let O=68,B=87,q=d(O,B);for(let[E,H]of[[60,81],[82,81],[60,95],[82,95]])l("lamp",0,E,H);l("crate",0,80,84),l("crate",0,81,84),l("barrels",0,62,93);let U=(E,H,X,ae)=>[E,H,X,ae];return{spawns:{squad:[U(O+1,B,0,1),U(O+2,B,0,1),U(O+3,B,0,1),U(O+1,B+3,0,5),U(O+2,B+3,0,5),U(O+3,B+3,0,5)],mech:[U(O,B+1,0,7)],aliens:[U(44,17,0,0),U(51,19,0,0),U(47,11,0,1),U(40,8,1,3),U(6,13,0,7),U(12,17,0,5),U(28,37,0,3),U(62,44,0,5),U(84,36,0,1),U(83,16,0,3),U(88,9,1,5),U(68,13,0,1)]},extraction:q,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var qd=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),zt=typeof globalThis<"u"&&globalThis.ALIENS_MAP||qd.get("map")||"outpost",tr=24,D=1.25,tn=4,at=2.5,St=zt==="big"?tr*2:zt==="base"?68:zt==="city"?96:tr,Hx=1,Bx=6;var Ut={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function er(i){return Array.from({length:tn},()=>Array.from({length:St+1},()=>new Array(St+1).fill(i)))}function Zd(){let i=er(0),e=er(0),t=er(null),n=er(null),s=er(0),r=[],o=[],a=[],l=[],c=[],h=[],d=[],u=zt==="city"?Array.from({length:St},()=>new Array(St).fill(0)):null,f=zt==="city"?Array.from({length:St},()=>new Array(St).fill(null)):null,m=zt==="city"?er(null):null;if(zt!=="base")for(let F=0;F<St;F++)for(let Z=0;Z<St;Z++)i[0][F][Z]=Ut.ground;let x=0,p=0,g=(F,Z,ge,pe,w,ie)=>{for(let Q=ge;Q<=w;Q++)for(let V=Z;V<=pe;V++)i[F][Q+p][V+x]=ie},_=(F,Z,ge,pe,w)=>{for(let ie=ge;ie<=w;ie++)for(let Q=Z;Q<=pe;Q++)s[F][ie+p][Q+x]=1},y=(F,Z,ge,pe)=>{e[F][ge+p][Z+x]=pe},v=(F,Z,ge,pe,w)=>{t[F][ge+p][Z+x]=pe?{type:pe,style:w}:null},T=(F,Z,ge,pe,w)=>{n[F][ge+p][Z+x]=pe?{type:pe,style:w}:null},C=(F,Z,ge,pe,w,ie,Q)=>{for(let V=ge;V<=w;V++)v(F,Z,V,ie,Q),v(F,pe+1,V,ie,Q);for(let V=Z;V<=pe;V++)T(F,V,ge,ie,Q),T(F,V,w+1,ie,Q)},I=(F,Z,ge,pe,w,ie)=>{for(let Q=ge;Q<=pe;Q++)v(F,Z,Q,w,ie)},k=(F,Z,ge,pe,w,ie)=>{for(let Q=ge;Q<=pe;Q++)T(F,Q,Z,w,ie)},A=(F,Z,ge,pe,w=1,ie=1,Q={})=>r.push({kind:F,level:Z,col:ge+x,row:pe+p,cols:w,rows:ie,rotation:0,blocks:!0,...Q}),M=F=>{let Z={...F,col0:F.col0+x,row0:F.row0+p,col1:F.col1+x,row1:F.row1+p};return l.push(Z),Z},S=F=>a.push({...F,from:[F.from[0]+x,F.from[1]+p,F.from[2]],to:[F.to[0]+x,F.to[1]+p,F.to[2]],col:F.col+x,row:F.row+p}),ue=(F,Z,ge,pe,w)=>r.push({kind:"ladder",level:F,col:Z+x,row:ge+p,cols:1,rows:1,blocks:!1,height:pe,side:w}),K=(F,Z,ge,pe)=>h.push({rect:[(F+x)*D,(Z+p)*D,(ge+x)*D,(pe+p)*D]}),N=(F,Z,ge)=>h.push({circle:[(F+x)*D,(Z+p)*D,ge*D]}),O=(F,Z,ge)=>d.push([F,Z+x,ge+p]),B=(F,Z,ge,pe,w,ie,Q)=>{o.push({level:F,col:Z+x,row:ge+p,dirCol:pe,dirRow:w,count:ie,style:Q});for(let V=0;V<ie;V++){let $=Z+pe*V,ne=ge+w*V;g(F,$,ne,$,ne,Ut.stairs),y(F,$,ne,(V+.5)/ie*at),F+1<tn&&g(F+1,$,ne,$,ne,Ut.none)}};function q(){M({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),g(1,3,3,10,9,Ut.interior),g(2,3,3,10,9,Ut.roof),_(0,3,3,10,9),_(1,3,3,10,9);for(let F of[0,1])C(F,3,3,10,9,"wall","hab");C(2,3,3,10,9,"parapet","hab"),I(0,7,3,5,"wall","inner"),v(0,7,5,"door","inner"),k(0,6,3,10,"wall","inner"),T(0,4,6,"door","inner"),T(0,9,6,"door","inner"),k(0,7,3,10,"wall","inner"),T(0,6,7,"door","inner"),T(0,9,7,"door","inner"),I(0,8,7,9,"wall","inner"),T(0,6,10,"door","hab"),v(0,11,6,"door","hab");for(let F of[4,8,10])T(0,F,10,"window","hab");for(let F of[4,8])v(0,11,F,"window","hab");T(0,5,3,"window","hab"),v(0,3,4,"window","hab"),B(0,4,8,1,0,3,"hab"),I(1,7,3,5,"wall","inner"),v(1,7,4,"door","inner"),k(1,6,3,10,"wall","inner"),T(1,5,6,"door","inner"),T(1,9,6,"door","inner"),I(1,8,7,9,"wall","inner"),k(1,7,8,10,"wall","inner"),T(1,9,7,"door","inner"),k(1,8,4,6,"rail","hab"),k(1,9,4,6,"rail","hab"),v(1,4,8,"rail","hab");for(let F of[4,5,7,9,10])T(1,F,10,"window","hab");for(let F of[4,5,8])v(1,11,F,"window","hab");T(1,4,3,"window","hab"),T(1,8,3,"window","hab"),v(1,3,5,"window","hab"),A("console",0,3,3),A("console",0,4,3),A("locker",0,6,3),A("bunk",0,9,3,2,1),A("locker",0,10,5),A("labTable",0,9,8,2,1),A("cabinet",0,10,9),A("crate",0,7,9),A("crate",0,3,7),A("rack",1,10,7),A("rack",1,10,8),A("rack",1,10,9),A("desk",1,4,3,2,1),A("console",1,9,3),A("crate",1,3,5),A("crate",1,3,6),A("acUnit",2,5,4,2,1),A("acUnit",2,8,6,1,1),A("antenna",2,4,8),A("solar",2,6,7,2,2),S({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),ue(0,11,9,2*at+.9,"W"),M({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),g(1,15,4,19,8,Ut.deck),C(1,15,4,19,8,"rail","deck"),T(1,17,9,null);for(let[F,Z]of[[15,4],[19,4],[15,8],[19,8],[17,4]])A("pylon",0,F,Z);B(0,17,11,0,-1,3,"deck"),M({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),C(1,16,4,18,6,"wall","cabin"),T(1,17,7,"door","cabin"),v(1,19,5,"window","cabin"),T(1,16,7,"window","cabin"),g(1,16,4,18,6,Ut.interior),g(2,16,4,18,6,Ut.roof),C(2,16,4,18,6,"parapet","cabin"),_(1,16,4,18,6),A("console",1,16,4),A("rack",1,18,4),A("dish",2,17,5),S({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),ue(1,19,6,at+.9,"W"),A("barrels",0,16,6),A("crate",0,18,7),M({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),g(3,20,14,21,15,Ut.deck),C(3,20,14,21,15,"rail","tower");for(let[F,Z]of[[20,14],[21,14],[20,15],[21,15]])A("towerLeg",0,F,Z);A("searchlight",3,21,14),S({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),ue(0,20,16,3*at+.9,"N"),T(3,20,16,null),A("container",0,13,13,2,4,{color:"orange"}),A("container",0,1,12,2,4,{color:"blue"}),A("truck",0,8,12,2,5),A("tank",0,21,4,2,3),A("generator",0,12,1,2,2);for(let[F,Z]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])A("crate",0,F,Z);A("barrels",0,12,4),A("barrels",0,20,10),A("lamp",0,12,11),A("lamp",0,15,12),k(0,20,10,13,"barrier","concrete"),I(0,16,17,19,"barrier","concrete");for(let[F,Z,ge]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])A("rock",0,F,Z,ge,ge);K(1.3,1.3,12.6,11.7),K(14.2,3,20.8,12.8),K(19.4,13.4,22.6,16.8),N(4.6,19,3.6)}function U(){M({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),_(0,2,2,13,9),g(1,2,2,13,9,Ut.roof),C(0,2,2,13,9,"wall","hab"),C(1,2,2,13,9,"parapet","hab"),T(0,6,10,"door","hab"),T(0,7,10,"door","hab"),v(0,14,5,"door","hab"),v(0,2,6,"door","hab");for(let F of[3,4,9,10,12])T(0,F,10,"window","hab");for(let F of[4,8,11])T(0,F,2,"window","hab");for(let F of[3,7,8])v(0,14,F,"window","hab");for(let F of[3,4,5,9,10,11])A("rack",0,F,2);A("crate",0,4,5),A("crate",0,5,5),A("crate",0,4,6),A("crate",0,10,6),A("crate",0,11,6),A("barrels",0,12,8),A("desk",0,2,8,2,1),A("cabinet",0,13,3),A("acUnit",1,4,4,2,1),A("acUnit",1,9,6,2,1),M({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),g(1,13,13,20,19,Ut.interior),g(2,13,13,20,19,Ut.roof),_(0,13,13,20,19),_(1,13,13,20,19);for(let F of[0,1])C(F,13,13,20,19,"wall","hab");C(2,13,13,20,19,"parapet","hab"),I(0,17,13,19,"wall","inner"),v(0,17,15,"door","inner"),v(0,17,16,"door","inner"),T(0,18,20,"door","hab"),v(0,13,15,"door","hab");for(let F of[14,15,19])T(0,F,20,"window","hab");for(let F of[17,18])v(0,21,F,"window","hab");T(0,15,13,"window","hab"),T(0,19,13,"window","hab"),B(0,14,18,1,0,3,"hab"),k(1,18,14,16,"rail","hab"),v(1,14,19,"rail","hab"),v(1,14,18,"rail","hab");for(let F of[14,16,18,19])T(1,F,20,"window","hab");for(let F of[14,16,18])v(1,21,F,"window","hab");for(let F of[14,17,19])T(1,F,13,"window","hab");A("desk",0,14,14,2,1),A("console",0,19,14),A("locker",0,20,17),A("desk",1,15,14,2,1),A("desk",1,18,16,2,1),A("rack",1,20,14),A("crate",1,20,19),A("antenna",2,19,18),A("acUnit",2,15,15,2,1),A("container",0,17,3,2,4,{color:"orange"}),A("generator",0,9,13,2,2),A("barrels",0,12,12),A("crate",0,8,16),A("crate",0,9,17),A("lamp",0,15,10),A("lamp",0,11,19),k(0,11,18,21,"barrier","concrete");for(let[F,Z,ge]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])A("rock",0,F,Z,ge,ge);K(1.3,1.3,14.7,11.7),K(12.3,12.3,21.7,20.7),K(6.3,11.3,12.7,13.2)}function E(){K(.6,.6,22.4,22.4);let F=(ge,pe,w)=>A("paint",0,ge,pe,1,w,{blocks:!1,line:"W"});for(let[ge,pe]of[[2,4],[10,4],[14,4]])for(let w=2;w<=20;w+=2)F(w,ge,pe);let Z=(ge,pe,w,ie,Q)=>A("car",0,w,ie,2,4,{type:ge,color:pe,flip:!!Q});Z("suv","white",2,2),Z("van","sand",8,2),Z("suv","graphite",10,2),Z("suv","red",16,2),Z("suv","blue",4,10,!0),Z("van","white",12,10,!0),Z("suv","olive",18,10,!0),Z("suv","graphite",6,14),Z("suv","white",14,14),A("truck",0,21,15,2,5);for(let[ge,pe]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])A("lamp",0,ge,pe);I(0,1,2,5,"barrier","concrete"),I(0,1,10,17,"barrier","concrete"),k(0,23,2,9,"barrier","concrete"),k(0,23,13,20,"barrier","concrete"),A("crate",0,21,3),A("crate",0,21,4),A("barrels",0,22,12);for(let[ge,pe,w]of[[0,22,2],[23,0,1]])A("rock",0,ge,pe,w,w)}function H(F,Z){A("tiltrotor",0,F,Z,6,4,{blocks:!1});for(let w=F;w<=F+5;w++)for(let ie=Z;ie<=Z+3;ie++)y(0,w,ie,.6);for(let w=Z;w<=Z+3;w++)y(0,F+6,w,.45),y(0,F+7,w,.15);let ge={col:F+4,row:Z+4};y(0,ge.col,ge.row,.3),_(0,F,Z,F+5,Z+3);for(let w=F;w<=F+5;w++)T(0,w,Z,"hull","tiltrotor"),w!==ge.col&&T(0,w,Z+4,"hull","tiltrotor");for(let w=Z;w<=Z+3;w++)v(0,F,w,"hull","tiltrotor");for(let w=F-4;w<=F+5;w++)O(0,w,Z-1),w!==ge.col&&O(0,w,Z+4);for(let w=F-4;w<=F-1;w++)for(let ie=Z;ie<=Z+3;ie++)O(0,w,ie);let pe=[];for(let w=F;w<=F+7;w++)for(let ie=Z;ie<=Z+3;ie++)pe.push([w+x,ie+p,0]);return pe}function X(){let ge=H(10,10);K(4.3,4.3,21.7,19.7),A("crate",0,20,8),A("crate",0,20,9),A("crate",0,21,9),A("barrels",0,19,16),A("generator",0,5,17,2,2);for(let[w,ie]of[[4,4],[21,4],[4,19],[21,19]])A("lamp",0,w,ie);for(let[w,ie,Q]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])A("rock",0,w,ie,Q,Q);let pe=(w,ie,Q)=>[w+x,ie+p,0,Q];return{squad:[pe(11,10,1),pe(12,10,1),pe(13,10,1),pe(11,13,5),pe(12,13,5),pe(13,13,5)],mech:[pe(10,11,7)],extraction:ge}}function ae(){x=Hx,p=Bx;let F=Wd,Z=F.grid[0],ge=F.grid[1],pe=Array.from({length:tn},()=>Array.from({length:ge},()=>new Array(Z).fill(null))),w=Array.from({length:ge},()=>new Array(Z).fill(0)),ie=Array.from({length:tn},()=>Array.from({length:ge},()=>new Array(Z).fill(!1))),Q=(W,ee,Se,Ne=0)=>{for(let xe=W.y;xe<W.y+W.height;xe++)for(let _e=W.x;_e<W.x+W.width;_e++){for(let We=Ne;We<Math.min(tn,Ne+Se);We++)pe[We][xe][_e]=ee;ie[Ne][xe][_e]=!0,Ne||(w[xe][_e]=Se)}},V=new Set(["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430","\u0422\u0435\u0445\u043F\u043E\u043B\u043E\u0441\u0430"]);F.rooms.forEach((W,ee)=>Q(W,V.has(W.name)?"hangar":W.kind==="corridor"?W.zone+":corridor":"room"+ee,W.levels,W.floor||0)),F.corridors.forEach(W=>Q(W,"corridor",W.levels||1));let $=(W,ee)=>W>=0&&ee>=0&&W<Z&&ee<ge,ne=(W,ee,Se)=>$(ee,Se)?pe[W][Se][ee]:null,Me=(W,ee)=>$(W,ee)?w[ee][W]:0,Pe=(W,ee)=>{let Se=0;for(let Ne=0;Ne<tn;Ne++)ne(Ne,W,ee)&&(Se=Ne+1);return Se};for(let W=0;W<tn;W++)for(let ee=0;ee<ge;ee++)for(let Se=0;Se<Z;Se++)pe[W][ee][Se]&&(ie[W][ee][Se]&&g(W,Se,ee,Se,ee,Ut.interior),_(W,Se,ee,Se,ee));for(let W=0;W<tn;W++)for(let ee=0;ee<=ge;ee++)for(let Se=0;Se<=Z;Se++)ee<ge&&ne(W,Se-1,ee)!==ne(W,Se,ee)&&v(W,Se,ee,"wall","inner"),Se<Z&&ne(W,Se,ee-1)!==ne(W,Se,ee)&&T(W,Se,ee,"wall","inner");let qe={gate:2.35,double:2.1},P=4.4;F.doors.forEach(W=>{let ee=W.size>1?c.length:-1,Se=W.floor||0,Ne=[];for(let Ee=0;Ee<W.size;Ee++){let yt=W.side==="N"?["N",W.x+Ee,W.y]:W.side==="S"?["N",W.x+Ee,W.y+1]:W.side==="W"?["W",W.x,W.y+Ee]:["W",W.x+1,W.y+Ee],[Ze,Fe,Oe]=yt,He=Ze==="N"?[Fe,Oe-1]:[Fe-1,Oe];Ne.push({orient:Ze,col:Fe,row:Oe,levels:Math.min(Me(Fe,Oe),Me(He[0],He[1]))})}let xe=!Se&&W.kind==="gate"&&Ne.every(Ee=>Ee.levels>=2),_e=xe?P:qe[W.kind]||2.1,We=[];for(let{orient:Ee,col:yt,row:Ze}of Ne)for(let Fe=Se;Fe<Se+(xe?2:1);Fe++)(Ee==="N"?T:v)(Fe,yt,Ze,"door","inner"),ee>=0&&((Ee==="N"?n:t)[Fe][Ze+p][yt+x].gate={group:ee,kind:W.kind,height:_e}),We.push([yt+x,Ze+p,Ee,Fe]);ee>=0&&c.push({kind:W.kind,airlock:W.airlock,height:_e,edges:We})});for(let W of F.stairs||[]){B(0,W.x,W.y,W.dirX,W.dirY,W.count,"hab");let ee=new Set,Se=W.x+W.dirX*W.count+","+(W.y+W.dirY*W.count);for(let Ne=0;Ne<W.count;Ne++)ee.add(W.x+W.dirX*Ne+","+(W.y+W.dirY*Ne));for(let Ne of ee){let[xe,_e]=Ne.split(",").map(Number),We=[[xe-1,_e,()=>t[1][_e+p][xe+x],()=>v(1,xe,_e,"rail","inner")],[xe+1,_e,()=>t[1][_e+p][xe+1+x],()=>v(1,xe+1,_e,"rail","inner")],[xe,_e-1,()=>n[1][_e+p][xe+x],()=>T(1,xe,_e,"rail","inner")],[xe,_e+1,()=>n[1][_e+1+p][xe+x],()=>T(1,xe,_e+1,"rail","inner")]];for(let[Ee,yt,Ze,Fe]of We){let Oe=Ee+","+yt;ee.has(Oe)||Oe===Se||Ze()||Fe()}}}let b=new Set;for(let W of F.thickWalls||[])for(let ee=W.y;ee<W.y+W.height;ee++)for(let Se=W.x;Se<W.x+W.width;Se++)b.add(Se+","+ee);for(let W=-1;W<=ge;W++)for(let ee=-1;ee<=Z;ee++){if(Pe(ee,W)||W+p<0||W+p>=St||ee+x<0||ee+x>=St)continue;let Se=0;for(let xe=-1;xe<=1;xe++)for(let _e=-1;_e<=1;_e++)Se=Math.max(Se,Pe(ee+_e,W+xe));if(!Se)continue;let Ne=((ee+x)*7+(W+p)*13)%3;A("rockFill",0,ee,W,1,1,{type:b.has(ee+","+W)?`h${Se}c`:`h${Se}v${Ne}`,height:Se*at,variant:Ne,concrete:b.has(ee+","+W)})}Xd(F,(W,ee,Se,Ne=1,xe=1,_e={})=>A(W,_e.level||0,ee,Se,Ne,xe,_e));let he=H(8,8),ce=(W,ee,Se)=>[W+x,ee+p,0,Se];return{squad:[ce(21,8,1),ce(22,8,1),ce(21,9,1),ce(22,9,1),ce(21,10,1),ce(22,10,1)],mech:[ce(24,12,3)],aliens:[ce(39,1,3),ce(41,1,3),ce(39,3,3),ce(41,3,3),ce(40,6,3),ce(41,8,3),ce(40,11,3),ce(40,13,3)],extraction:he}}let ye,G=null,fe=null,we=null,Ae=null;if(zt==="city"){let F=Yd({TILES:St,LEVEL_H:at,FLOOR:Ut,setFloor:g,setIndoor:_,setW:v,setN:T,object:A,building:M,stairRun:B,tiltrotor:H,block:O,surface:u,marking:f,floorStyle:m});ye=F.spawns,G=F.extraction,fe=F.mission,we=F.name,Ae=F.caption}else if(zt==="big"){x=0,p=0,q(),x=tr,p=0,U(),x=0,p=tr,E(),x=tr,p=tr;let F=X();G=F.extraction,ye={squad:F.squad,mech:F.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(zt==="base"){let F=ae();G=F.extraction,ye={squad:F.squad,mech:F.mech,aliens:F.aliens}}else q(),ye=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:zt,TILE:D,TILES:St,LEVELS:tn,LEVEL_H:at,floor:i,offset:e,wallW:t,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:l,spawns:ye,extraction:G,concrete:h,blockedCells:d,gates:c,surface:u,marking:f,floorStyle:m,mission:fe,caption:Ae,name:we||(zt==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":zt==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:zt==="big"||zt==="base"||zt==="city"}}var $d=((Number(qd.get("rot"))||0)%4+4)%4;function Jd(i,e){let t=i;for(let n=0;n<e;n++)t=Gx(t,n+1);return t}function Gx(i,e){let t=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(c,h)=>c.map(d=>d.map(u=>u.map(()=>h))),s=(c,h)=>{let d=n(c,h);for(let u=0;u<c.length;u++)for(let f=0;f<t;f++)for(let m=0;m<t;m++)d[u][m][t-1-f]=c[u][f][m];return d},r=n(i.wallW,null),o=n(i.wallN,null);for(let c=0;c<i.wallW.length;c++)for(let h=0;h<=t;h++)for(let d=0;d<=t;d++){let u=i.wallW[c][h][d];u&&h<t&&(o[c][d][t-1-h]=u);let f=i.wallN[c][h][d];f&&d<t&&(r[c][d][t-h]=f)}let a=([c,h,...d])=>[t-1-h,c,...d],l=i.objects.map(c=>{let h={col:t-c.row-c.rows,row:c.col,cols:c.rows,rows:c.cols};if(c.kind==="rockFill")return{...c,...h};let d=c.source||c;return{...c,...h,source:d,turns:e}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:l,blockedCells:i.blockedCells.map(([c,h,d])=>[c,t-1-d,h]),gates:(i.gates||[]).map(c=>({...c,edges:c.edges.map(([h,d,u,f])=>u==="W"?[t-1-d,h,"N",f]:[t-d,h,"W",f])})),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(c=>c.circle?{...c,circle:[t*i.TILE-c.circle[1],c.circle[0],c.circle[2]]}:{...c,rect:[t*i.TILE-c.rect[3],c.rect[0],t*i.TILE-c.rect[1],c.rect[2]]}),viewTurns:e}}var la=class extends zi{constructor(e=null){super();let t=new xt;t.deleteAttribute("uv");let n=new Ge({side:hn}),s=new Ge,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Fr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new be(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new be(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new be(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new be(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new be(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new be(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new be(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let m=new be(t,nr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let x=new be(t,nr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let p=new be(t,nr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let g=new be(t,nr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new be(t,nr(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let y=new be(t,nr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function nr(i){let e=new os;return e.color.setScalar(i),e}function ft(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var K2=ft(20261121);var xn=new Uint8Array(512);{let i=ft(7),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)xn[t]=e[t&255]}var cc=i=>i*i*i*(i*(i*6-15)+10),ds=(i,e,t)=>i+(e-i)*t;function Bi(i,e,t,n){let s=i&15,r=s<8?e:t,o=s<4?t:s===12||s===14?e:n;return(s&1?-r:r)+(s&2?-o:o)}function jd(i,e,t){let n=Math.floor(i)&255,s=Math.floor(e)&255,r=Math.floor(t)&255;i-=Math.floor(i),e-=Math.floor(e),t-=Math.floor(t);let o=cc(i),a=cc(e),l=cc(t),c=xn[n]+s,h=xn[c]+r,d=xn[c+1]+r,u=xn[n+1]+s,f=xn[u]+r,m=xn[u+1]+r;return ds(ds(ds(Bi(xn[h],i,e,t),Bi(xn[f],i-1,e,t),o),ds(Bi(xn[d],i,e-1,t),Bi(xn[m],i-1,e-1,t),o),a),ds(ds(Bi(xn[h+1],i,e,t-1),Bi(xn[f+1],i-1,e,t-1),o),ds(Bi(xn[d+1],i,e-1,t-1),Bi(xn[m+1],i-1,e-1,t-1),o),a),l)}function Kd(i,e,t,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*jd(i*o,e*o,t*o),o*=2,r*=.5;return s}function Gi(i,e,t,n=5,s=0){let r=i*Math.PI*2,o=e*Math.PI*2,a=t/(Math.PI*2),l=0,c=.5,h=1;for(let d=0;d<n;d++)l+=c*jd(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,c*=.5;return l}function Qd(i){let e=document.createElement("canvas");return e.width=e.height=i,e}function vt(i,{srgb:e=!0,repeat:t=1}={}){let n=new qo(i);return e&&(n.colorSpace=cn),n.wrapS=n.wrapT=is,n.repeat.set(t,t),n.anisotropy=8,n}function Vx(i,e,t=2){let n=Qd(e),s=n.getContext("2d"),r=s.createImageData(e,e),o=(a,l)=>i[(l+e)%e*e+(a+e)%e];for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c=(o(l+1,a)-o(l-1,a))*t,h=(o(l,a+1)-o(l,a-1))*t,d=Math.hypot(c,h,1),u=(a*e+l)*4;r.data[u]=(-c/d*.5+.5)*255,r.data[u+1]=(h/d*.5+.5)*255,r.data[u+2]=(1/d*.5+.5)*255,r.data[u+3]=255}return s.putImageData(r,0,0),vt(n,{srgb:!1})}function Wx(i,e,t){let n=new Float32Array(i*i),s=Qd(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=l/i,h=a/i,d=e(c,h,l,a);n[a*i+l]=d;let[u,f,m]=t(c,h,d,l,a),x=(a*i+l)*4;o.data[x]=u,o.data[x+1]=f,o.data[x+2]=m,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var hc=i=>Math.max(0,Math.min(255,i));function Or(i=3,e=[128,120,108]){let n=ft(i),{canvas:s,ctx:r,heights:o}=Wx(512,(a,l)=>{let c=Gi(a,l,6,6,i),h=Math.abs(Gi(a,l,14,3,i+9));return c*.8-Math.max(0,.06-h)*6},(a,l,c)=>{let h=Gi(a,l,20,3,i+3),d=.72+c*.55+(n()-.5)*.1,u=e[0]*d,f=e[1]*d,m=e[2]*d;return h>.22&&(u=u*.7+60,f=f*.75+75,m=m*.6+30),[hc(u),hc(f),hc(m)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:vt(s),normalMap:Vx(o,512,5)}}function ir(i="#ffb347",e=1,t="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=ft(e);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,t==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let l=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,l):s.lineTo(a,l)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let l=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,l,6),a+=l+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return vt(n)}var j2=new L(0,1,0);function dc(i,e,{flatten:t=.75,roughness:n=.35,detail:s=3}={}){let r=new ei(i,s),o=r.attributes.position,a=new L;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l);let c=a.clone().normalize(),h=1+Kd(c.x*1.6+e,c.y*1.6,c.z*1.6-e,4)*n*2+Math.max(0,Kd(c.x*4+e,c.y*4,c.z*4,2))*.15;a.copy(c).multiplyScalar(i*h);let d=Math.floor((c.x*3+e)*1.3)*.02;a.y*=t,a.x+=d,o.setXYZ(l,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function Hr(i,e){i.traverse(t=>{if(t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])"envMapIntensity"in n&&(n.envMapIntensity=e*(n.userData.envBoost||1))})}var eu=Math.SQRT1_2,tu=(i,e)=>new ve((i+e)*eu,(e-i)*eu);var dy=new ve(.75,-.66).normalize();var Br=new L;function Gn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Br.copy(e),Br[n]=0,Br.normalize();let c=.5*o/(o+a),h=1-Br.angleTo(i)/l;return Math.sign(Br[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ca=class extends xt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,m=new L,x=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:m.set(1,0,0),u[g+0]=Gn(m,l,"z","y",r,n),u[g+1]=1-Gn(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),u[g+0]=1-Gn(m,l,"z","y",r,n),u[g+1]=1-Gn(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),u[g+0]=1-Gn(m,l,"x","z",r,e),u[g+1]=Gn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),u[g+0]=1-Gn(m,l,"x","z",r,e),u[g+1]=1-Gn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),u[g+0]=1-Gn(m,l,"x","y",r,e),u[g+1]=1-Gn(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),u[g+0]=Gn(m,l,"x","y",r,e),u[g+1]=1-Gn(m,l,"y","x",r,t);break}}};var Yx=(i,e,t)=>new L(i,e,t),ha=null;function iu(){if(ha)return ha;let i=(e,t=.75,n=.15,s={})=>new Ge({color:e,roughness:t,metalness:n,...s});return ha={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new Bn({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},ha}function nn(i){return i.castShadow=i.receiveShadow=!0,i}function Te(i,e,t,n,s,r,o,a,l=0){let c=l>0?new ca(e,t,n,3,Math.min(l,e/2.1,t/2.1,n/2.1)):new xt(e,t,n),h=nn(new be(c,s));return h.position.set(r,o,a),i.add(h),h}function Ft(i,e,t,n,s,r,o,a="x",l=20,c=e){let h=nn(new be(new Lt(e,c,t,l),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function da(i,e,t,n){let s=new $s(e.map(r=>Yx(...r)),!1,"catmullrom",.05);i.add(nn(new be(new Dr(s,e.length*8,t,8),n)))}function yi(i,e,t,n,s,r=.025){let o=new en;e.forEach(([c,h],d)=>{d===0?o.moveTo(-c,h):o.lineTo(-c,h)});let a=new gn(o,{depth:t-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let l=nn(new be(a,n));return l.position.x=s-t/2+r,i.add(l),l}function Gr(i,e,t,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new en;e.forEach(([u,f],m)=>{m===0?a.moveTo(u,f):a.lineTo(u,f)});let l=n-t,c=new gn(a,{depth:l-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=c.attributes.position;for(let u=0;u<h.count;u++){let f=Math.min(1,Math.max(0,(h.getZ(u)+o)/l)),{scale:m,drop:x}=r(f);h.setX(u,h.getX(u)*m),h.setY(u,h.getY(u)-x*Math.max(0,h.getY(u)))}c.computeVertexNormals();let d=nn(new be(c,s));return d.position.z=t+o,i.add(d),d}function qx(i,e,t,n=.03,s=0){let r=[],o=i/2,a=(l,c,h,d,u)=>{for(let f=0;f<=6;f++){let m=d+(u-d)*f/6;r.push([l+Math.cos(m)*h,c+Math.sin(m)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-t,s+e-t,t,0,Math.PI/2),a(-o+t,s+e-t,t,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function Vr(i,e,t,n,s,r){return qx(i-r*2,e-r*2,Math.max(.01,t-r),Math.max(.01,n-r),s+r)}function Zx(i,e,t,n,s,r,o){let a=iu(),l=s*.58,c=.09,h=r/2,d=[new ve(l,-h)];for(let x=0;x<=6;x++){let p=-Math.PI/2+x/6*Math.PI/2;d.push(new ve(s-c+Math.cos(p)*c,-h+c+Math.sin(p)*c))}for(let x=0;x<=6;x++){let p=x/6*Math.PI/2;d.push(new ve(s-c+Math.cos(p)*c,h-c+Math.sin(p)*c))}d.push(new ve(l,h));let u=nn(new be(new as(d,36),a.rubber));u.rotation.z=Math.PI/2,u.position.set(e,t,n),i.add(u);let f=20;for(let x=0;x<f;x++){let p=x/f*Math.PI*2;for(let g of[-1,1])Te(i,r*.36,.04,.075,a.rubber,e+g*r*.2,t+Math.cos(p)*(s+.005),n+Math.sin(p)*(s+.005),.015).rotation.set(p,g*.5,0)}let m=e+o*(h-.03);Ft(i,l,.05,a.hub,m,t,n,"x",28),Ft(i,s*.24,.08,a.hub,m+o*.04,t,n,"x",18),Ft(i,s*.12,.05,a.frame,m+o*.08,t,n,"x",12);for(let x=0;x<8;x++){let p=x/8*Math.PI*2;Ft(i,.018,.04,a.steel,m+o*.03,t+Math.cos(p)*s*.36,n+Math.sin(p)*s*.36,"x",6)}}var su={length:6.15,width:2.35};function ru(){let i=iu(),e=new me,t=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let U of o)for(let E of[-1,1])Zx(e,E*s,t,U,t,n,E);for(let U of[-1,1])Te(e,.12,.22,5.75,i.frame,U*.45,a-.11,3.1);for(let U of o){Ft(e,.065,s*2-.25,i.frame,0,t,U,"x",12);let E=new be(new Pn(.2,16,10),i.frame);E.scale.set(1.1,.9,.9),E.position.set(0,t,U),e.add(nn(E))}Te(e,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let U of[-1,1]){let E=new be(new Oi(.055,.018,6,12,Math.PI*1.4),i.frame);E.position.set(U*.6,.72,6.16),E.rotation.set(0,Math.PI/2,Math.PI*.8),e.add(nn(E))}Te(e,.6,.24,.24,i.frame,0,.84,5.86,.06),Ft(e,.1,.48,i.steel,0,.88,5.86,"x",14);let l=4.72,c=6;Gr(e,Vr(1.14,.78,.24,.02,.98,.03),l,c,i.olive,U=>({scale:1-.1*U,drop:.045*U*U}),.03),Te(e,.03,.02,c-l-.1,i.oliveDark,0,1.755,(l+c)/2);for(let U of[-1,1])for(let E=0;E<6;E++){let H=Te(e,.02,.2,.05,i.frame,U*.552,1.38,4.95+E*.11,.008);H.rotation.y=U*.15}Gr(e,Vr(1,.68,.12,.04,1.02,.012),c-.02,c+.05,i.olive,void 0,.012);for(let U=-4;U<=4;U++)Te(e,.045,.5,.04,i.frame,U*.09,1.34,c+.045,.012);let h=[],d=(U,E,H,X,ae)=>{let ye=[];for(let G=0;G<=20;G++){let fe=H+(X-H)*G/20;ye.push([r+Math.cos(fe)*U,t+Math.sin(fe)*E])}return ae?ye.reverse():ye};h.push(...d(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...d(.92,.66,.2,2.75,!0).slice(0,-1));let u=[[r+Math.cos(2.75)*.92,t+Math.sin(2.75)*.66]];for(let U of[-1,1]){yi(e,h,.44,i.olive,U*.93,.03),Te(e,.05,.45,1.05,i.oliveDark,U*.7,1,r+.05);let E=new be(new Pn(.12,18,12),i.olive);E.scale.set(1,1,.75),E.position.set(U*.83,1.13,5.86),e.add(nn(E)),Ft(e,.09,.02,i.lens,U*.83,1.13,5.95,"z",18);for(let H of[-.05,0,.05])Te(e,.012,.2,.012,i.frame,U*.83+H,1.13,5.99);Te(e,.07,.045,.04,i.amber,U*1,1.2,5.7,.01),Te(e,.36,.4,.02,i.rubber,U*.93,.55,r-.82)}let f=4.74,m=3.62,x=(f+m)/2,p=f-m;Te(e,1.3,.24,p-.1,i.frame,0,1.06,x),Gr(e,Vr(2.18,.98,.1,.05,1,.05),m,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},_={z:f-.24,y:2.44},y=[[m+.02,1.95],[f-.02,1.95],[g.z,g.y]],v=2.6,T=.16,C=.24;for(let U=1;U<=10;U++){let E=U/10*Math.PI/2;y.push([_.z-C*(1-Math.cos(E)),_.y+(v-_.y)*Math.sin(E)])}for(let U=0;U<=8;U++){let E=U/8*Math.PI/2;y.push([m+.04+T-Math.sin(E)*T,v-T+Math.cos(E)*T])}yi(e,y,2.1,i.olive,0,.09);let I=Math.atan2(g.z-_.z,_.y-g.y),k=(g.z+_.z)/2+.1*Math.cos(I),A=(g.y+_.y)/2+.1*Math.sin(I);for(let U of[-1,1]){let E=Te(e,.84,.44,.03,i.glass,U*.48,A,k,.02);E.rotation.x=-I,Te(e,.03,.36,.6,i.glass,U*1.06,2.22,x+.02,.02),Te(e,.03,.85,.02,i.oliveDark,U*1.1,1.55,x-.28),Te(e,.03,.03,.12,i.steel,U*1.105,1.8,x-.16),da(e,[[U*1.05,2,f-.1],[U*1.28,2.12,f],[U*1.31,2.34,f]],.014,i.frame),Te(e,.04,.26,.16,i.frame,U*1.32,2.36,f,.015)}let M=Te(e,.06,.46,.04,i.oliveDark,0,A,k+.01);M.rotation.x=-I,Te(e,1.1,.28,.03,i.glass,0,2.22,m+.03,.02);for(let U of[-.25,0,.25])Te(e,.07,.04,.05,i.amber,U,2.7,f-.4,.01);Ft(e,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let U of[2.75,3.35])Te(e,.04,.58,.05,i.frame,.88,.78,U);Te(e,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),da(e,[[.55,1,m-.02],[.75,1.25,m-.08],[.78,2.65,m-.08]],.045,i.frame);let S=3.5,ue=.12,K=S-ue,N=(S+ue)/2,O=1.1,B=2.08;Te(e,2.08,.12,K,i.frame,0,O-.06,N),Gr(e,Vr(2.35,B,.2,.05,O,.08),ue,S,i.olive,void 0,.08);for(let U of[-1,1]){for(let E of[.88,1.78,2.68])Te(e,.03,.44,.62,i.oliveDark,U*1.177,O+1.45,E,.03),Te(e,.03,.34,.52,i.glass,U*1.186,O+1.45,E,.02);for(let E of[O+.38,O+1.02])Te(e,.02,.03,K-.3,i.oliveDark,U*1.178,E,N);Te(e,.3,.36,.5,i.oliveDark,U*1,O-.24,1.71,.05)}Te(e,.86,1.75,.03,i.oliveDark,-.45,O+.92,ue-.01,.03),Te(e,.3,.26,.03,i.glass,-.45,O+1.45,ue-.03,.02),Te(e,.03,.03,.14,i.steel,-.1,O+.9,ue-.05);for(let U of[-.75,-.15])Te(e,.03,.9,.03,i.frame,U,O-.3,ue-.12);for(let U=0;U<4;U++)Te(e,.6,.025,.03,i.frame,-.45,O-.65+U*.22,ue-.12);for(let U of[-1,1])Te(e,.14,.08,.04,i.red,U*.95,.92,ue-.02,.02),Te(e,.4,.4,.02,i.rubber,U*.95,.58,.45);let q=O+B;for(let U of[-1,1])da(e,[[U*.98,q-.02,.35],[U*.98,q+.14,.5],[U*.98,q+.14,3.05],[U*.98,q-.02,3.2]],.02,i.frame);for(let U of[.65,1.45,2.25,3])Te(e,1.96,.025,.025,i.frame,0,q+.14,U);return Te(e,1.2,.18,.9,i.canvas,-.2,q+.08,1.25,.08),Te(e,.6,.55,.3,i.oliveDark,.55,q-.38,S+.16,.08),Ft(e,.12,.42,i.frame,.55,q+.12,S+.16,"y",16),Ft(e,.16,.04,i.oliveDark,.55,q+.34,S+.16,"y",16),Ft(e,.035,.9,i.frame,-.7,q+.38,S-.2,"y",8),Gr(e,Vr(2.37,.16,.02,.05,O-.005,.01),ue+.01,S-.01,i.dusty,void 0,.01),e}var ni={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function $x(i){let e=i?{clippingPlanes:i,clipShadows:!0,side:$t}:{},t=(n,s=.7,r=.25,o={})=>new Ge({color:n,roughness:s,metalness:r,...e,...o});return{hull:t(4870469,.62,.3),hullDark:t(3554355,.66,.3),belly:t(7370092,.7,.25),panel:t(2830378,.6,.4),interior:t(9409933,.8,.15),floor:t(2764074,.85,.35),seat:t(4082230,.95,0),frame:t(1908508,.6,.6),steel:t(9212042,.35,.8),rubber:t(1710617,.95,0),yellow:t(13214234,.6,.1),glass:new Bn({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...e}),red:t(11540496,.4,.1,{emissive:5244933}),green:t(1089584,.4,.1,{emissive:342544}),white:t(15263968,.4,.1,{emissive:3158064})}}function Wr(i,e,t,n,s){let r=[],o=(a,l,c,h,d,u)=>{for(let f=0;f<=u;f++){let m=h+(d-h)*f/u;r.push([a+Math.cos(m)*c,l+Math.sin(m)*c])}};return o(i-s,e+s,s,-Math.PI/2,0,4),o(i-n,t-n,n,0,Math.PI/2,10),o(-i+n,t-n,n,Math.PI/2,Math.PI,10),o(-i+s,e+s,s,Math.PI,Math.PI*1.5,4),r}function uc(i,e,t,n,s,r,o=32,a=null){let l=new en;e.forEach(([m,x],p)=>{p===0?l.moveTo(m,x):l.lineTo(m,x)});let c=new gn(l,{depth:n-t,bevelEnabled:!1,steps:o,curveSegments:6}),h=c.attributes.position,d=a?a.bottom:Math.min(...e.map(m=>m[1])),u=a?a.top:Math.max(...e.map(m=>m[1]));for(let m=0;m<h.count;m++){let x=r(t+h.getZ(m));h.setX(m,h.getX(m)*x.scale),h.setY(m,x.bottom+(h.getY(m)-d)*(x.top-x.bottom)/(u-d))}c.computeVertexNormals();let f=nn(new be(c,s));return f.position.z=t,i.add(f),f}function Jx(i,e,t,n,s){let r=new me,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([c,h])=>new ve(c,h));r.add(nn(new be(new as(o,56),e.hull)));let a=nn(new be(new Oi(1.555,.03,6,56),e.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Ft(r,.3,.7,e.hullDark,0,0,0,"y",24);let l=nn(new be(new Pn(.3,20,10,0,Math.PI*2,0,Math.PI/2),e.steel));l.position.y=.35,r.add(l);for(let c=0;c<7;c++){let h=new me;h.rotation.y=c*Math.PI*2/7+.2;let d=nn(new be(new xt(1.08,.03,.24),e.frame));d.position.x=.84,d.position.y=.12,d.rotation.x=.42,h.add(d),r.add(h)}for(let c=0;c<3;c++){let h=new me;h.rotation.y=c*Math.PI*2/3;let d=nn(new be(new xt(1.1,.12,.05),e.hullDark));d.position.x=.85,d.position.y=-.2,h.add(d),r.add(h)}return Ft(r,.16,.5,e.steel,-Math.sign(t)*1.7,0,0,"x",16),r.position.set(t,n,s),i.add(r),r}function Kx(i,e,t,n,s,r,o,a){let l=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,d])=>[o+h,r+d]),c=s-n;yi(i,l,c,e.hull,t*(n+c/2),.03)}function ou({cutaway:i=!1,rampOpen:e=!0}={}){let t=i?[new Jn(new L(0,-1,0),3)]:null,n=$x(t),s=new me,r=new me;s.name="floor",r.name="back";let o=new me;o.name="shell";let a=2.8,l=.25,c=5,h=ni.floor,d=ni.cabin;Te(s,a*2,h-l,d.front-d.rear,n.belly,0,(h+l)/2,(d.front+d.rear)/2,.12).userData.solid=!0,Te(s,d.right-d.left-.02,.03,d.front-d.rear,n.floor,0,h+.015,(d.front+d.rear)/2);let u=3.5,f=u-l-.12,m=l+.12+f/2;Te(o,a-d.right,f,d.front-d.rear,n.hull,-(a+d.right)/2,m,(d.front+d.rear)/2);let x=ni.sideDoor,p=(a+d.right)/2;Te(o,a-d.right,f,x.rear-d.rear,n.hull,p,m,(x.rear+d.rear)/2),Te(o,a-d.right,f,d.front-x.front,n.hull,p,m,(d.front+x.front)/2);let g=h+x.height;Te(o,a-d.right,u-g,x.front-x.rear,n.hull,p,(u+g)/2,(x.rear+x.front)/2),Te(o,a-d.right,h-l-.12,x.front-x.rear,n.hull,p,(h+l+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([V])=>Te(o,.36,x.height+.1,.08,n.hullDark,p,h+x.height/2,V)),Te(o,.36,.08,x.front-x.rear+.08,n.hullDark,p,g,(x.rear+x.front)/2);let _=Wr(a,l,c,1.3,.3).filter(([,V])=>V>=u-.001),y=Wr(d.right,h,d.ceiling,.9,.01).filter(([,V])=>V>=u-.001).reverse(),v=[[a,u]].concat(_,[[-a,u],[d.left,u]],y,[[d.right,u]]),T=new gn(new en(v.map(([V,$])=>new ve(V,$))),{depth:d.front-d.rear,bevelEnabled:!1,curveSegments:4}),C=nn(new be(T,n.hull));C.position.z=d.rear,o.add(C);let I=Wr(a+.04,l+.1,c+.04,1.32,.3),k=Wr(d.right-.03,h+.02,d.ceiling-.03,.87,.01),A=new en(I.map(([V,$])=>new ve(V,$)));A.holes.push(new Js(k.slice().reverse().map(([V,$])=>new ve(V,$))));let M=nn(new be(new gn(A,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));M.position.z=d.rear,M.userData.hollow=!0,o.add(M),M.castShadow=M.receiveShadow=!1;let S=d.front,ue=ni.length,K=ue-S,N=(V,$,ne)=>{let Me=Math.min(1,Math.max(0,(ne-V)/($-V)));return Me*Me*(3-2*Me)},O=V=>{let $=(V-S)/K;return{scale:1-.1*N(.25,.65,$)-.55*Math.pow(N(.55,1,$),1.3),top:c-2*N(.18,.66,$)-1.45*Math.pow(N(.62,1,$),1.4),bottom:l+.85*Math.pow(N(.5,1,$),1.6)}},B=Wr(a,l,c,1.3,.3);uc(o,B,S,ue,n.hull,O,40);let q=(()=>{let V=B.filter(([,Me])=>Me>=2.85),$=[0,2.6],ne=(Me,Pe)=>{let qe=Math.hypot(Me[0]-$[0],Me[1]-$[1]);return[Me[0]+(Me[0]-$[0])/qe*Pe,Me[1]+(Me[1]-$[1])/qe*Pe]};return V.map(Me=>ne(Me,.035)).concat(V.slice().reverse().map(Me=>ne(Me,-.01)))})(),U=S+K*.2,E=S+K*.7;uc(o,q,U,E,n.glass,O,24,{bottom:l,top:c});let H=q.map(([V,$])=>[V*1.004,$+.004]);uc(o,H,U+(E-U)*.45,U+(E-U)*.45+.1,n.hullDark,O,2,{bottom:l,top:c}),Te(r,d.right-d.left,d.ceiling-h,.08,n.interior,0,(d.ceiling+h)/2,d.front-.04);let X=ni.cockpitDoor;Te(r,X.right-X.left-.2,X.height,.06,n.hullDark,(X.left+X.right)/2,h+X.height/2,d.front-.09),Te(r,.25,.25,.05,n.glass,(X.left+X.right)/2,h+1.6,d.front-.13),[-1,1].forEach(V=>{Te(o,.5,1,4,n.hullDark,V*(a+.2),.85,7.4,.2),[6,8.8].forEach($=>{Ft(o,.07,.5,n.steel,V*(a+.2),.45,$,"y",10),Ft(o,.27,.22,n.rubber,V*(a+.2),.27,$,"x",20)})}),Ft(o,.07,.4,n.steel,0,.35,13.6,"y",10),Ft(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let ae=new me,ye=Math.hypot(ni.ramp.to-ni.ramp.from,h);Te(ae,d.right-d.left,.12,ye,n.hullDark,0,-.06,-ye/2);for(let V=0;V<9;V++)Te(ae,d.right-d.left-.3,.025,.05,n.frame,0,.012,-.2-V*(ye-.4)/8);[-1,1].forEach(V=>Te(ae,.06,.18,ye,n.yellow,V*(d.right-.03),.09,-ye/2)),ae.position.set(0,h,d.rear),ae.rotation.x=e?-Math.atan2(h,ni.ramp.to-ni.ramp.from):Math.PI/2-.15,s.add(ae);let G=a+.55,fe=x.front-x.rear-.15;for(let V=0;V<3;V++){let $=h-(V+1)*h/3.2;Te(s,.36,.05,fe,n.steel,a+.15+V*.32,$,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(V=>da(o,[[a+.05,h+.95,V],[a+.5,h+.7,V],[G+.4,.75,V]],.025,n.steel)),[-1,1].forEach(V=>Te(V<0?r:o,.03,2.9,d.front-d.rear-.2,n.interior,V*(d.right-.015),h+1.6,(d.front+d.rear)/2));let we=ni.cells.cell,Ae=V=>d.front-(V-.5)*we;ni.seats.forEach(([V,$])=>{let ne=V==="A"?-1:1,Me=ne*(d.right-.35),Pe=Ae($);Te(s,.5,.1,.9,n.seat,Me,h+.48,Pe,.03),Te(s,.1,.75,.9,n.seat,ne*(d.right-.08),h+.95,Pe,.03),Te(s,.04,.45,.04,n.frame,Me-ne*.2,h+.22,Pe-.38),Te(s,.04,.45,.04,n.frame,Me-ne*.2,h+.22,Pe+.38),Te(s,.03,.6,.06,n.yellow,ne*(d.right-.05),h+1,Pe-.25)});let F=-we,Z=we,ge=Ae(2)-we/2,pe=d.front;[[F,ge,Z,ge],[F,ge,F,pe-.1],[Z,ge,Z,pe-.1]].forEach(([V,$,ne,Me])=>{Te(s,Math.max(.08,Math.abs(ne-V)),.012,Math.max(.08,Math.abs(Me-$)),n.yellow,(V+ne)/2,h+.036,($+Me)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([V,$])=>Ft(s,.07,.03,n.steel,V,h+.045,$,"y",12)),[-1,1].forEach(V=>{let $=yi(o,[[2.55,c-.25],[4.9,c-.25],[3.55,c+1.35],[2.75,c+1.4]],.16,n.hull,0,.04);$.rotation.z=V*-.18,$.position.x+=V*1.55,Te(o,.06,.06,.06,V<0?n.red:n.green,V*1.82,c+1.38,2.85)}),Te(o,2.2,.5,4.2,n.hullDark,0,c+.12,7.3,.22),[-.6,.6].forEach(V=>Te(o,.6,.12,.8,n.frame,V,c+.38,6,.04)),Te(o,.08,.06,.08,n.white,0,c+.4,9.2);let w=a+.35+1.5,ie=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([V,$])=>{[-1,1].forEach(ne=>{Kx(o,n,ne,a-.1,w-1.45,ie,V,$),Jx(o,n,ne*w,ie,V)})}),[-1,1].forEach(V=>{Te(o,.02,.08,2.4,n.yellow,V*(a+.01),2.9,7.4),Te(o,.02,.4,.4,n.white,V*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(V=>{if(!V.isMesh)return;let $=new Qn().setFromObject(V).getSize(new L);Math.min($.x,$.y,$.z)>=.12&&!V.userData.hollow&&(V.userData.solid=!0)});let Q=new me;return Q.add(s,r,o),Q}var ua={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},nu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function jx(i,e,t,n,s,r,o,a){let l=Ft(i,r,o,e.rubber,t,n,s,"x",28);Ft(i,r*.62,o+.01,e.rim,t+a*.005,n,s,"x",20),Ft(i,r*.2,o+.03,e.frame,t+a*.01,n,s,"x",12)}function au({type:i="suv",color:e="white",seed:t=1}={}){let n=ua[i],s=(u,f=.45,m=.35,x={})=>new Ge({color:u,roughness:f,metalness:m,...x}),r={body:s(nu[e]||nu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new Bn({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new me,a=n.width,l=n.length,c=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){yi(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),yi(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),yi(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let u of[[.26,.3],[1.6,1.68],[3.2,3.3]])Te(o,a-.16,.62,u[1]-u[0]+.05,r.body,0,1.39,(u[0]+u[1])/2+(u[0]>3?.08:0));for(let u of[-1,1])Te(o,.05,.05,2.2,r.trim,u*(a/2-.2),1.83,1.6)}else yi(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),yi(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),Te(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,Te(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),Te(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);Te(o,a+.04,.22,.18,r.trim,0,h+.3,l-.04,.05),Te(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let u of[-1,1])Te(o,.32,.12,.05,r.lamp,u*(a/2-.3),.9,l+.005,.02),Te(o,.18,.26,.05,r.tail,u*(a/2-.15),i==="van"?1.2:.95,-.005,.02),Te(o,.06,.12,.2,r.trim,u*(a/2+.06),i==="van"?1.75:1.2,l-(i==="van"?1.35:1.15),.02);Te(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,l+.01,.02);let d=i==="van"?[.95,4.15]:[.9,3.8];for(let u of d)for(let f of[-1,1])jx(o,r,f*(a/2-.12),c,u,c,.26,f);if(Te(o,a+.02,.08,l-.3,r.dust,0,h+.12,l/2),e==="police"){let u=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),m=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])Te(o,.02,.16,l-.8,u,x*(a/2+.005),.78,l/2);Te(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,l*.45),Te(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,l*.45),Te(o,.45,.12,.26,m,.3,i==="van"?2.3:1.95,l*.45)}return o}var sr=i=>Math.max(0,Math.min(255,Math.round(i)));function Vn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Xr(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Vn(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let f=(c(u+1,d)-c(u-1,d))*e,m=(c(u,d+1)-c(u,d-1))*e,x=Math.hypot(f,m,1),p=(d*n+u)*4;l.data[p]=(-f/x*.5+.5)*255,l.data[p+1]=(m/x*.5+.5)*255,l.data[p+2]=(1/x*.5+.5)*255,l.data[p+3]=255}return a.putImageData(l,0,0),vt(o,{srgb:!1})}function rr(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:l=0}={}){let c=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=u/e,m=d/t,x=Gi(f,m,a,4,s)*o,p=l?Math.max(0,Gi(f*7,.3,30,2,s+3))*l*(1-m):0,g=1+x-p+(c()-.5)*r/255,_=(d*e+u)*4;h.data[_]=sr(n[0]*g),h.data[_+1]=sr(n[1]*g),h.data[_+2]=sr(n[2]*g),h.data[_+3]=255}i.putImageData(h,0,0)}function lu(i,e){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,l=Vn(512,936),c=l.getContext("2d"),h=Vn(512,936),d=h.getContext("2d");rr(c,512,936,r.base,{seed:11+e*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),d.fillStyle="#808080",d.fillRect(0,0,512,936);let u=ft(31+e*13+i.length);c.fillStyle=`rgb(${r.band.join(",")})`,c.fillRect(0,a(.3),512,.3*o),c.fillStyle=`rgb(${r.stripe.join(",")})`,c.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),d.fillStyle="#9a9a9a",d.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],m=a(1.22);c.fillStyle="rgba(30,32,34,0.75)",d.fillStyle="#202020";for(let g of f)c.fillRect(g-2,0,4,936),d.fillRect(g-2,0,4,936);c.fillRect(0,m-2,512,3),d.fillRect(0,m-2,512,3),c.fillStyle="rgba(255,255,255,0.25)";for(let g of f)c.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let _=30;_<a(.32);_+=54)for(let y of[-9,9])c.fillStyle="rgba(60,62,64,0.8)",c.beginPath(),c.arc(g+y,_,2.6,0,Math.PI*2),c.fill(),d.fillStyle="#c8c8c8",d.beginPath(),d.arc(g+y,_,2.6,0,Math.PI*2),d.fill();if(i!=="inner"&&e===1){let _=a(1.95),y=512*.3;for(let v=0;v<7;v++)c.fillStyle="rgba(28,30,32,0.85)",c.fillRect(296.96,_+v*11,y,6),d.fillStyle="#303030",d.fillRect(296.96,_+v*11,y,6)}i!=="inner"&&e===2&&(c.fillStyle="rgba(40,44,46,0.9)",c.fillRect(512*.12,a(1.75),512*.22,.18*o),c.fillStyle="rgba(230,180,60,0.9)",c.font="bold 26px Arial",c.fillText("N8",512*.14,a(1.62)),d.fillStyle="#a8a8a8",d.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=c.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),c.fillStyle=x,c.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let _=u()*512,y=40+u()*300,v=c.createLinearGradient(0,0,0,y);v.addColorStop(0,"rgba(50,46,40,0.22)"),v.addColorStop(1,"rgba(50,46,40,0)"),c.fillStyle=v,c.fillRect(_,0,2+u()*5,y)}let p=vt(l);return p.wrapS=p.wrapT=Qt,{map:p,normalMap:Xr(h,4,!1)}}function cu(){let e=Vn(512,512),t=e.getContext("2d"),n=Vn(512,512),s=n.getContext("2d");rr(t,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=ft(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let l=(a+o)/16%2?.8:-.8;t.save(),t.translate(a,o),t.rotate(l),t.fillStyle="rgba(160,166,166,0.5)",t.fillRect(-5,-1.2,10,2.4),t.restore(),s.save(),s.translate(a,o),s.rotate(l),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}t.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])t.fillRect(o-1.5,0,3,512),t.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){t.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,t.lineWidth=.8;let a=r()*512,l=r()*512,c=r()*Math.PI,h=6+r()*30;t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}return{map:vt(e),normalMap:Xr(n,3)}}function hu(){let e=Vn(512,512),t=e.getContext("2d"),n=Vn(512,512),s=n.getContext("2d");rr(t,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),t.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])t.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=ft(29);for(let o=0;o<60;o++){let a=r()*512,l=r()*512,c=10+r()*50,h=t.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),t.fillStyle=h,t.fillRect(a-c,l-c,c*2,c*2)}return{map:vt(e),normalMap:Xr(n,2)}}function du(){let e=Vn(256,256),t=e.getContext("2d"),n=Vn(256,256),s=n.getContext("2d");rr(t,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)t.fillStyle="rgba(18,18,20,0.88)",t.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:vt(e),normalMap:Xr(n,3)}}function uu(i=3){let n=Vn(512,256),s=n.getContext("2d"),r=Vn(512,256),o=r.getContext("2d");rr(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=ft(i+5);for(let l=0;l<512;l++){let c=.5+.5*Math.sin(l/512*Math.PI*2*24);o.fillStyle=`rgb(${sr(c*255)},${sr(c*255)},${sr(c*255)})`,o.fillRect(l,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-c)*.18})`,s.fillRect(l,0,1,256)}for(let l=0;l<50;l++){let c=a()*512,h=a()*256,d=4+a()*22,u=s.createRadialGradient(c,h,0,c,h,d);u.addColorStop(0,"rgba(90,44,20,0.45)"),u.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=u,s.fillRect(c-d,h-d,d*2,d*2)}return{map:vt(n),normalMap:Xr(r,5)}}function fu(i=7){let t=Vn(256,256),n=t.getContext("2d");return rr(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:vt(t)}}var pu=1.25,mt=.09,fc=new Map,dn=(i,e)=>(fc.has(i)||fc.set(i,e()),fc.get(i));function Qx(i,e){return dn("brushed"+i+(e?"v":"h"),()=>{let n=ft(i),s=document.createElement("canvas"),r=document.createElement("canvas");s.width=s.height=r.width=r.height=256;let o=s.getContext("2d"),a=r.getContext("2d");o.fillStyle="rgb(196,200,204)",o.fillRect(0,0,256,256),a.fillStyle="rgb(92,92,92)",a.fillRect(0,0,256,256);for(let l=0;l<900;l++){let c=n()*256,h=20+n()*200,d=n()*256,u=n();o.fillStyle=`rgba(${u>.5?230:150},${u>.5?232:154},${u>.5?236:158},0.10)`,a.fillStyle=`rgba(${u>.5?140:50},${u>.5?140:50},${u>.5?140:50},0.25)`,e?(o.fillRect(c,d,1,h),a.fillRect(c,d,1,h)):(o.fillRect(d,c,h,1),a.fillRect(d,c,h,1))}return{map:vt(s,{repeat:1}),roughnessMap:vt(r,{srgb:!1,repeat:1})}})}var pc=(i,e)=>(i.userData.envBoost=e,i),mu=(i=!1)=>dn("galleySteel"+i,()=>{let e=Qx(i?11:7,i),t=new Ge({color:15791094,map:e.map,roughnessMap:e.roughnessMap,roughness:.5,metalness:.6});return t.userData.envBoost=3.2,t}),Ue={steel:()=>mu(!1),steelVertical:()=>mu(!0),steelDark:()=>dn("galleySteelDark",()=>pc(new Ge({color:9080982,roughness:.45,metalness:.6}),2.5)),groove:()=>dn("galleyGroove",()=>new Ge({color:2764080,roughness:.6,metalness:.5})),plinth:()=>dn("galleyPlinth",()=>new Ge({color:2040357,roughness:.8,metalness:.2})),castIron:()=>dn("galleyIron",()=>new Ge({color:1842463,roughness:.75,metalness:.35})),knob:()=>dn("galleyKnob",()=>new Ge({color:1118740,roughness:.35,metalness:.3})),glass:()=>dn("galleyGlass",()=>new Ge({color:790290,roughness:.1,metalness:.4})),basin:()=>dn("galleyBasin",()=>pc(new Ge({color:11844030,roughness:.3,metalness:.7}),3)),chrome:()=>dn("galleyChrome",()=>pc(new Ge({color:15265008,roughness:.15,metalness:.9}),4)),white:()=>dn("galleyWhite",()=>new Ge({color:15263972,roughness:.5,metalness:.05})),display:()=>dn("galleyDisplay",()=>new Ge({color:660504,emissive:3844312,emissiveIntensity:.6,roughness:.3})),lamp:()=>dn("galleyLamp",()=>new Ge({color:16774880,emissive:16773328,emissiveIntensity:1.4})),rubber:()=>dn("galleyRubber",()=>new Ge({color:1382170,roughness:.9})),red:()=>dn("galleyRed",()=>new Ge({color:11019292,roughness:.45,metalness:.3})),floor:()=>dn("galleyFloor",()=>{let e=ft(5),t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle="rgb(176,178,174)",n.fillRect(0,0,512,512);let s=4,r=512/s;for(let a=0;a<s;a++)for(let l=0;l<s;l++){let c=214+Math.floor(e()*10);n.fillStyle=`rgb(${c},${c-2},${c-8})`,n.fillRect(l*r+3,a*r+3,r-6,r-6)}let o=vt(t,{repeat:1});return new Ge({map:o,roughness:.35,metalness:0})})};function Be(i,e,t,n,s,r,o){let a=new be(new xt(i,e,t),n);return a.position.set(s,r,o),a}function Yr(i,e,t,n,s,r,o=12){let a=new be(new Lt(i,i,e,o),t);return a.position.set(n,s,r),a}function us(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),10),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var Xe=.9,bn=.66,gu=mt+bn;function e2(i,e,t,n){let s=t-e,r=(e+t)/2;i.add(Be(s-.01,.1,bn-.06,Ue.plinth(),r,.05,mt+(bn-.06)/2)),i.add(Be(s-.01,Xe-.14,bn-.02,Ue.steelVertical(),r,.1+(Xe-.14)/2,mt+(bn-.02)/2));let o=Xe-.06,a=.12,l=mt+bn-.01,c=(u,f,m)=>i.add(Be(m?.12:.03,m?.03:.12,.012,Ue.groove(),u,f,l+.002)),h=u=>i.add(Be(.006,o-a,.006,Ue.groove(),u,(o+a)/2,l+.002)),d=(u,f,m)=>i.add(Be(m-f,.006,.006,Ue.groove(),(f+m)/2,u,l+.002));if(d(o,e,t),n==="drawers"){for(let f=1;f<3;f++)d(a+(o-a)*f/3,e+.01,t-.01);for(let f=0;f<3;f++)c(r,a+(o-a)*(f+.8)/3,!0)}else n==="doors"?(h(r),c(r-.05,o-.08,!1),c(r+.05,o-.08,!1)):n==="mixed"&&(d(o-.18,e+.01,t-.01),c(r,o-.07,!0),h(r),c(r-.05,o-.28,!1),c(r+.05,o-.28,!1));i.add(Be(s,.04,bn+.02,Ue.steel(),r,Xe-.02,mt+(bn+.02)/2)),i.add(Be(s,.05,.015,Ue.steel(),r,Xe-.035,gu+.012)),i.add(Be(s,.1,.02,Ue.steel(),r,Xe+.05,mt+.01))}function xu(i,e,t,n){i.add(Be(t-e,n-Xe,.012,Ue.steelVertical(),(e+t)/2,(Xe+n)/2,mt+.006));for(let s=e+.6;s<t-.05;s+=.6)i.add(Be(.005,n-Xe,.004,Ue.groove(),s,(Xe+n)/2,mt+.013))}function t2(i,e,t){let o=(e+t)/2;i.add(Be(t-e-.01,2.15-1.5,.34,Ue.steelVertical(),o,(1.5+2.15)/2,mt+.34/2)),i.add(Be(.006,2.15-1.5-.02,.006,Ue.groove(),o,(1.5+2.15)/2,mt+.34+.002));for(let a of[-1,1])i.add(Be(.03,.1,.012,Ue.groove(),o+a*.05,1.5+.1,mt+.34+.004));i.add(Be(t-e-.1,.012,.04,Ue.lamp(),o,1.5-.007,mt+.34-.05))}function n2(i,e,t){let n=t?[e-.2,e+.2]:[e];for(let a of n){i.add(Be(t?.36:.5,.012,.42,Ue.basin(),a,Xe-.14,mt+.36));for(let l of[-1,1])i.add(Be(.012,.14,.42,Ue.basin(),a+l*(t?.18:.25),Xe-.07,mt+.36));i.add(Be(t?.36:.5,.14,.012,Ue.basin(),a,Xe-.07,mt+.15)),i.add(Be(t?.36:.5,.14,.012,Ue.basin(),a,Xe-.07,mt+.57)),i.add(Yr(.025,.004,Ue.groove(),a,Xe-.132,mt+.36))}let s=e,r=mt+.08;i.add(Yr(.03,.06,Ue.chrome(),s,Xe+.03,r)),i.add(us(new L(s,Xe+.06,r),new L(s,Xe+.48,r),.014,Ue.chrome()));let o=new be(new Oi(.12,.013,8,16,Math.PI),Ue.chrome());o.rotation.y=Math.PI/2,o.position.set(s,Xe+.48,r+.12),i.add(o),i.add(us(new L(s,Xe+.48,r+.24),new L(s,Xe+.36,r+.24),.016,Ue.chrome())),i.add(Be(.012,.012,.08,Ue.chrome(),s+.04,Xe+.1,r+.03))}function i2(i,e){let t=new me,n=i.variant||"drawers",s=n==="sink"||n==="sink2"?"doors":n==="microwave"||n==="grinder"?"mixed":n;if(e2(t,.005,e-.005,s),xu(t,0,e,i.upper?1.5:1.45),i.upper&&t2(t,.005,e-.005),(n==="sink"||n==="sink2")&&n2(t,e/2,n==="sink2"),n==="microwave"){let r=e/2,o=mt+.26;t.add(Be(.52,.3,.38,Ue.steel(),r,Xe+.15,o)),t.add(Be(.33,.21,.01,Ue.glass(),r-.07,Xe+.15,o+.19)),t.add(Be(.1,.21,.01,Ue.groove(),r+.18,Xe+.15,o+.19)),t.add(Be(.05,.015,.012,Ue.display(),r+.18,Xe+.24,o+.196))}if(n==="grinder"){let r=e/2-.1,o=mt+.3;t.add(Be(.22,.24,.36,Ue.steel(),r,Xe+.12,o)),t.add(Yr(.06,.2,Ue.chrome(),r,Xe+.3,o+.06)),t.add(Be(.26,.02,.22,Ue.chrome(),r,Xe+.41,o+.06)),t.add(Be(.04,.03,.03,Ue.red(),r+.12,Xe+.08,o+.19));let a=e/2+.22;t.add(Be(.16,.06,.26,Ue.white(),a,Xe+.03,o)),t.add(Be(.1,.3,.1,Ue.white(),a,Xe+.18,o-.08)),t.add(Be(.14,.08,.26,Ue.white(),a,Xe+.36,o)),t.add(Yr(.08,.12,Ue.chrome(),a,Xe+.12,o+.05))}return t}function s2(i,e){let t=new me,n=e-.01,s=e/2;t.add(Be(n,.1,bn-.06,Ue.plinth(),s,.05,mt+(bn-.06)/2)),t.add(Be(n,Xe-.1,bn,Ue.steelVertical(),s,.1+(Xe-.1)/2,mt+bn/2));let r=gu+.004;t.add(Be(n-.12,.46,.02,Ue.steel(),s,.42,r+.01)),t.add(Be(n-.34,.2,.01,Ue.glass(),s,.44,r+.022)),t.add(us(new L(s-(n-.3)/2,.66,r+.06),new L(s+(n-.3)/2,.66,r+.06),.012,Ue.chrome()));for(let h of[-1,1])t.add(Be(.015,.015,.05,Ue.chrome(),s+h*(n-.3)/2,.66,r+.035));t.add(Be(n-.06,.11,.02,Ue.steelDark(),s,.79,r+.006));let o=6;for(let h=0;h<o;h++){let d=new be(new Lt(.022,.024,.03,14),Ue.knob());d.rotation.x=Math.PI/2,d.position.set(s-(n-.2)/2+(n-.2)*h/(o-1),.79,r+.03),t.add(d)}t.add(Be(n,.02,bn,Ue.steelDark(),s,Xe-.01,mt+bn/2));for(let[h,d]of[[-.22,.2],[.22,.2],[-.22,.48],[.22,.48]]){t.add(Yr(.07,.015,Ue.castIron(),s+h,Xe+.007,mt+d,16));for(let u of[0,Math.PI/2]){let f=Be(.3,.018,.018,Ue.castIron(),s+h,Xe+.03,mt+d);f.rotation.y=u,t.add(f)}}xu(t,0,e,1.75);let a=1.78,l=2.25,c=.62;t.add(Be(e+.1,l-a-.12,c,Ue.steel(),s,l-(l-a-.12)/2,mt+c/2)),t.add(Be(e+.1,.12,.03,Ue.steel(),s,a+.06,mt+c-.015)),t.add(Be(e-.06,.012,c-.08,Ue.steelDark(),s,a+.01,mt+c/2));for(let h=0;h<9;h++)t.add(Be(.012,.02,c-.14,Ue.groove(),s-e*.4+e*.8*h/8,a+.02,mt+c/2-.02));for(let h of[-1,1])t.add(Be(.14,.008,.06,Ue.lamp(),s+h*e*.28,a+.004,mt+c-.08));return t}function r2(i,e){let t=new me,n=e-.04,s=e/2,r=.72,o=2.02;t.add(Be(n,.08,r-.06,Ue.plinth(),s,.04,mt+(r-.06)/2)),t.add(Be(n,o-.08,r,Ue.steelVertical(),s,.08+(o-.08)/2,mt+r/2));let a=mt+r;t.add(Be(n-.02,.006,.006,Ue.groove(),s,1.25,a+.003)),t.add(Be(.006,o-.12,.006,Ue.groove(),s,.08+(o-.08)/2,a+.003));for(let l of[-1,1]){t.add(us(new L(s+l*.06,.95,a+.045),new L(s+l*.06,1.55,a+.045),.012,Ue.chrome()));for(let c of[.95,1.55])t.add(Be(.015,.015,.045,Ue.chrome(),s+l*.06,c,a+.022))}return t.add(Be(.16,.06,.01,Ue.display(),s-n/4,1.82,a+.006)),t}function o2(i,e,t){let n=new me,s=.2,r=e/2,o=t/2,a=e-s*2,l=t-s*2;n.add(Be(a-.08,.1,l-.08,Ue.plinth(),r,.05,o)),n.add(Be(a,Xe-.14,l,Ue.steelVertical(),r,.1+(Xe-.14)/2,o)),n.add(Be(a+.06,.06,l+.06,Ue.steel(),r,Xe-.06,o)),n.add(Be(a-.04,.02,l-.04,Ue.steelDark(),r,Xe-.025,o));let c=(a-.16)/2,h=(l-.16)/2;for(let m of[-1,1])for(let x of[-1,1]){let p=r+m*(c/2+.03),g=o+x*(h/2+.03);if(n.add(Be(c,.035,h,Ue.castIron(),p,Xe-.005,g)),m===x)for(let _=0;_<5;_++)n.add(Be(c*.5,.004,.012,Ue.groove(),p,Xe+.014,g-.08+_*.04))}let d=Xe+.06,u=.1,f=[[r-a/2-u,o-l/2-u],[r+a/2+u,o-l/2-u],[r+a/2+u,o+l/2+u],[r-a/2-u,o+l/2+u]];return f.forEach(([m,x],p)=>{let[g,_]=f[(p+1)%4];n.add(us(new L(m,d,x),new L(g,d,_),.016,Ue.chrome())),n.add(us(new L(m,Xe-.05,x),new L(m,d+.03,x),.02,Ue.chrome()));let y=new L(Math.sign(r-m)*u,0,Math.sign(o-x)*u);n.add(us(new L(m,Xe-.05,x),new L(m+y.x,Xe-.05,x+y.z),.015,Ue.chrome()))}),n}function a2(i,e,t){let n=new me,s=Ue.floor().clone();s.map=s.map.clone(),s.map.repeat.set(e/1.2,t/1.2),s.map.needsUpdate=!0;let r=Be(e-.02,.006,t-.02,s,e/2,.05,t/2);if(r.receiveShadow=!0,n.add(r),i.drain){let[o,a,l,c]=i.drain;n.add(Be(l-o,.004,c-a,Ue.groove(),(o+l)/2,.055,(a+c)/2));let h=l-o>c-a,d=Math.floor((h?l-o:c-a)/.03);for(let u=0;u<d;u++){let f=(u+.5)/d;n.add(h?Be(.008,.005,c-a-.01,Ue.steelDark(),o+(l-o)*f,.058,(a+c)/2):Be(l-o-.01,.005,.008,Ue.steelDark(),(o+l)/2,.058,a+(c-a)*f))}}return n}function mc(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),l=new me;a.position.set(-r/2,0,-o/2),l.add(a),l.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],l.position.set(e/2,0,t/2);let c=new me;return c.add(l),c}var yu=new Set(["galleyCounter","galleyRange","galleyFridge","galleyIsland","galleyFloor"]);function _u(i){let e=i.cols*pu,t=i.rows*pu;switch(i.kind){case"galleyCounter":return mc(i,e,t,i2);case"galleyRange":return mc(i,e,t,s2);case"galleyFridge":return mc(i,e,t,r2);case"galleyIsland":return o2(i,e,t);case"galleyFloor":return a2(i,e,t);default:return null}}var vu=1.25,pt=.09,gc=new Map,or=(i,e)=>(gc.has(i)||gc.set(i,e()),gc.get(i)),ht=(i,e,t)=>or(i,()=>{let n=new Ge(e);return t&&(n.userData.envBoost=t),n});function fa(i,e){return or("fabricTexture"+i+e,()=>{let n=ft(e),s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle=`rgb(${i})`,r.fillRect(0,0,128,128);for(let o=0;o<1400;o++){let a=n()<.5?255:0;r.fillStyle=`rgba(${a},${a},${a},${.03+n()*.04})`,r.fillRect(Math.floor(n()*128),Math.floor(n()*128),1+Math.floor(n()*2),1)}return vt(s,{repeat:2})})}function l2(){return or("woodTexture",()=>{let e=ft(17),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="rgb(150,112,74)",n.fillRect(0,0,256,256);for(let s=0;s<160;s++){let r=e()*256,o=e();n.fillStyle=`rgba(${o>.5?190:90},${o>.5?146:62},${o>.5?100:36},0.18)`,n.fillRect(0,r,256,1+e()*2)}return vt(t,{repeat:1})})}function c2(){return or("rubberTexture",()=>{let e=ft(23),t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="rgb(46,48,52)",n.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=e()<.12?"160,60,40":e()<.5?"70,72,76":"30,31,34";n.fillStyle=`rgba(${r},0.8)`,n.fillRect(Math.floor(e()*128),Math.floor(e()*128),2,2)}return vt(t,{repeat:2})})}var z={frame:()=>ht("fFrame",{color:6055018,roughness:.5,metalness:.5},1.5),steel:()=>ht("fSteel",{color:12896718,roughness:.35,metalness:.65},2.5),darkSteel:()=>ht("fDarkSteel",{color:3159354,roughness:.5,metalness:.5}),black:()=>ht("fBlack",{color:1447963,roughness:.6,metalness:.2}),white:()=>ht("fWhite",{color:15132902,roughness:.45,metalness:.05}),cream:()=>ht("fCream",{color:14209730,roughness:.6}),wood:()=>ht("fWood",{map:l2(),roughness:.55}),cabinetGrey:()=>ht("fCabinetGrey",{color:9344924,roughness:.55,metalness:.25}),olive:()=>ht("fOlive",{color:6121032,roughness:.7,metalness:.1}),blanket:i=>ht("fBlanket"+i,{map:fa(i,3),roughness:.95}),sheet:()=>ht("fSheet",{map:fa("226,228,224",5),roughness:.95}),upholstery:i=>ht("fUph"+i,{map:fa(i,9),roughness:.9}),glass:()=>ht("fGlass",{color:11061460,roughness:.05,metalness:.1,transparent:!0,opacity:.35}),tintedGlass:()=>ht("fTinted",{color:2111552,roughness:.1,metalness:.3}),ceramic:()=>ht("fCeramic",{color:15921902,roughness:.2,metalness:0},1.5),chrome:()=>ht("fChrome",{color:15265008,roughness:.15,metalness:.9},3),rubber:()=>ht("fRubber",{map:c2(),roughness:.95}),mat:()=>ht("fMat",{color:2772090,roughness:.85}),red:()=>ht("fRed",{color:11020832,roughness:.5,metalness:.2}),orange:()=>ht("fOrange",{color:14185514,roughness:.5,metalness:.2}),yellow:()=>ht("fYellow",{color:14200868,roughness:.5,metalness:.2}),green:()=>ht("fGreen",{color:3115602,roughness:.5}),leather:()=>ht("fLeather",{color:3811874,roughness:.6}),soil:()=>ht("fSoil",{color:3811870,roughness:1}),leaf:i=>ht("fLeaf"+i,{color:[4160052,5673534,3107386,6986298][i%4],roughness:.8}),bark:()=>ht("fBark",{color:5914672,roughness:.9}),terracotta:()=>ht("fTerracotta",{color:11032634,roughness:.8}),water:()=>ht("fWater",{color:3832480,roughness:.05,metalness:.2,emissive:666170,emissiveIntensity:.5}),growLight:()=>ht("fGrowLight",{color:4198464,emissive:13656319,emissiveIntensity:1.1}),velvet:()=>ht("fVelvet",{map:fa("128,28,36",13),roughness:.95}),lamp:()=>ht("fLamp",{color:16774880,emissive:16773328,emissiveIntensity:1.3}),ledGreen:()=>ht("fLedGreen",{color:1060880,emissive:4259680,emissiveIntensity:1}),ledRed:()=>ht("fLedRed",{color:3149840,emissive:16724e3,emissiveIntensity:1}),liquid:()=>ht("fLiquid",{color:7002292,emissive:2792058,emissiveIntensity:.7,roughness:.08,metalness:.1,transparent:!0,opacity:.82}),specimen:()=>ht("fSpecimen",{color:6969928,roughness:.7}),screen:(i,e="text")=>or("fScreen"+i+e,()=>{let t=["#5fd0ff","#ffb347","#7dff9a","#ff6a5a"],n=ir(t[i%t.length],i+40,e);return new Ge({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.85})}),map:()=>or("fMapTable",()=>{let e=ft(31),t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#071a24",n.fillRect(0,0,256,256),n.strokeStyle="rgba(80,200,255,0.25)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="rgba(90,220,140,0.55)";for(let r=0;r<7;r++)n.beginPath(),n.ellipse(e()*256,e()*256,20+e()*40,12+e()*30,e()*3,0,Math.PI*2),n.fill();n.fillStyle="#ff5a40";for(let r=0;r<5;r++)n.fillRect(e()*256,e()*256,5,5);let s=vt(t,{repeat:1});return new Ge({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.7})})};function J(i,e,t,n,s,r,o){let a=new be(new xt(i,e,t),n);return a.position.set(s,r,o),a}function ct(i,e,t,n,s,r,o=14,a=i){let l=new be(new Lt(a,i,e,o),t);return l.position.set(n,s,r),l}function Bt(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.normalize()),r}var st=(i,e,t)=>new L(i,e,t);function qr(i,e,t,n,s="70,76,88"){i.add(J(.44,.06,.44,z.upholstery(s),e,.44,t)),i.add(J(.44,.42,.05,z.upholstery(s),e,.44+.24,t+n*(.44/2-.02)));for(let a of[-1,1])for(let l of[-1,1])i.add(J(.03,.44,.03,z.frame(),e+a*(.44/2-.03),.44/2,t+l*(.44/2-.03)))}function xc(i,e,t,n,s,r,o=z.wood()){i.add(J(n-e,.04,s-t,o,(e+n)/2,r-.02,(t+s)/2));for(let a of[e+.05,n-.05])for(let l of[t+.05,s-.05])i.add(J(.04,r-.04,.04,z.frame(),a,(r-.04)/2,l))}function Mu(i,e,t,n,s,r,o=1){i.add(J(s,s*.6,.04,z.black(),e,t+s*.3+.08,n)),i.add(J(s-.04,s*.6-.04,.01,z.screen(r),e,t+s*.3+.08,n+o*.022)),i.add(J(.04,.1,.04,z.black(),e,t+.04,n)),i.add(J(.18,.015,.14,z.black(),e,t+.008,n))}var Eu={bed(i,e,t){let n=new me,s=Math.min(.95,e-.2),r=e/2,o=Math.min(2.05,t-.25),a=pt+.02;return n.add(J(s+.06,.9,.05,z.wood(),r,.45,a+.025)),n.add(J(s+.06,.55,.05,z.wood(),r,.275,a+o)),n.add(J(s,.18,o-.05,z.frame(),r,.25,a+o/2)),n.add(J(s-.04,.16,o-.08,z.sheet(),r,.42,a+o/2+.01)),n.add(J(s-.02,.06,o*.62,z.blanket(i.color||"64,82,110"),r,.52,a+o*.66)),n.add(J(s*.7,.1,.34,z.sheet(),r,.55,a+.25)),n},nightstand(i,e){let t=new me,n=e/2,s=pt+.24;return t.add(J(.45,.55,.42,z.wood(),n,.275,s)),t.add(J(.12,.02,.01,z.darkSteel(),n,.44,s+.215)),t.add(ct(.05,.03,z.darkSteel(),n-.1,.565,s-.05)),t.add(Bt(st(n-.1,.57,s-.05),st(n-.1,.82,s-.05),.008,z.darkSteel())),t.add(ct(.09,.1,z.cream(),n-.1,.86,s-.05,12,.05)),t},wardrobe(i,e){let t=new me,n=e-.15,s=e/2,r=pt+.3;t.add(J(n,2,.58,z.wood(),s,1,r)),t.add(J(.006,1.86,.006,z.black(),s,1,r+.293));for(let o of[-1,1])t.add(J(.02,.22,.02,z.chrome(),s+o*.05,1.1,r+.3));return t},cabinTable(i,e){let t=new me,n=pt+.01;xc(t,.15,n,e-.15,n+.62,.74),t.add(J(e-.4,.03,.24,z.wood(),e/2,1.45,n+.12));for(let s of[e*.3,e*.7])qr(t,s,n+.82,1);return t.add(J(.3,.22,.2,z.darkSteel(),e*.3,.85,n+.2)),t},deskChair(i,e){let t=new me,n=pt+.01;return xc(t,.08,n,e-.08,n+.62,.74),Mu(t,e/2,.74,n+.18,.48,i.seed||1),t.add(J(.42,.02,.14,z.black(),e/2,.75,n+.42)),qr(t,e/2,n+.86,1,"40,44,52"),t},safe(i,e){let t=new me,n=e/2,s=pt+.26;return t.add(J(.55,.9,.5,z.olive(),n,.45,s)),t.add(ct(.06,.03,z.chrome(),n,.55,s+.26,16).rotateX(Math.PI/2)),t.add(J(.03,.12,.03,z.chrome(),n+.18,.45,s+.26)),t},sofa(i,e){let t=new me,n=i.color||"96,68,52",s=pt+.02,r=.86;t.add(J(e-.1,.4,r,z.upholstery(n),e/2,.2,s+r/2)),t.add(J(e-.1,.5,.18,z.upholstery(n),e/2,.6,s+.09));for(let o of[.12,e-.12])t.add(J(.14,.62,r,z.upholstery(n),o,.31,s+r/2));for(let o=0;o<2;o++)t.add(J((e-.4)/2-.02,.1,r-.24,z.upholstery(n),.2+(e-.4)/4+o*(e-.4)/2,.45,s+r/2+.06));return t},diningTable(i,e,t){let n=new me,s=t/2;xc(n,.3,s-.42,e-.3,s+.42,.75,z.cabinetGrey());for(let r of[e*.3,e*.7])qr(n,r,s-.72,-1,"120,62,40"),qr(n,r,s+.72,1,"120,62,40");return n.add(J(.2,.08,.2,z.white(),e/2,.79,s)),n},servingCounter(i,e){let t=new me,n=pt+.35;t.add(J(e-.05,.9,.68,z.steel(),e/2,.45,n)),t.add(J(e-.05,.03,.3,z.chrome(),e/2,1.25,n+.1));for(let s of[.15,e-.15])t.add(Bt(st(s,.9,n+.2),st(s,1.25,n+.2),.01,z.chrome()));for(let s=0;s<Math.floor(e/.4);s++)t.add(J(.3,.04,.22,z.darkSteel(),.25+s*.4,.92,n-.05));return t},medBed(i,e,t){let n=new me,s=e/2,r=Math.min(2.05,t-.25),o=pt+.12;n.add(J(.9,.06,r,z.white(),s,.5,o+r/2));for(let l of[-.38,.38])for(let c of[o+.1,o+r-.1])n.add(J(.04,.4,.04,z.chrome(),s+l,.28,c)),n.add(ct(.05,.04,z.black(),s+l,.05,c,10).rotateZ(Math.PI/2));n.add(J(.84,.12,r*.62,z.sheet(),s,.59,o+r*.62));let a=J(.84,.12,r*.36,z.sheet(),s,.72,o+r*.2);a.rotation.x=.45,n.add(a),n.add(J(.5,.09,.3,z.white(),s,.86,o+.22)),n.add(J(.74,.05,r*.5,z.blanket("120,160,190"),s,.67,o+r*.68));for(let l of[-1,1])n.add(J(.02,.2,r*.45,z.chrome(),s+l*.46,.7,o+r*.55));if(n.add(J(.94,.5,.04,z.white(),s,.75,o)),i.monitor!==!1){let l=e-.12;n.add(Bt(st(l,0,o+.1),st(l,1.5,o+.1),.02,z.chrome())),n.add(J(.3,.24,.08,z.white(),l,1.45,o+.15)),n.add(J(.26,.18,.01,z.screen(2,"wave"),l,1.45,o+.195)),n.add(Bt(st(l-.05,1.6,o+.1),st(l-.05,1.9,o+.1),.01,z.chrome())),n.add(J(.1,.16,.04,z.glass(),l-.05,1.82,o+.1))}return n},opTable(i,e,t){let n=new me,s=e/2,r=t/2;return n.add(J(.6,.06,.5,z.darkSteel(),s,.03,r)),n.add(ct(.12,.75,z.steel(),s,.42,r)),n.add(J(.56,.1,1.95,z.steel(),s,.84,r)),n.add(J(.52,.06,1.9,z.upholstery("40,96,120"),s,.92,r)),n.add(Bt(st(e-.1,0,.2),st(e-.1,2.3,.2),.04,z.white())),n.add(Bt(st(e-.1,2.3,.2),st(s,2.15,r),.03,z.white())),n.add(ct(.32,.12,z.white(),s,2.1,r,20,.2)),n.add(ct(.28,.01,z.lamp(),s,2.035,r,20)),n},medCart(i,e){let t=new me,n=e/2,s=pt+.35;t.add(J(.55,.9,.45,z.white(),n,.5,s));for(let r of[-.22,.22])for(let o of[-.18,.18])t.add(ct(.04,.04,z.black(),n+r,.04,s+o,8).rotateZ(Math.PI/2));for(let r=0;r<3;r++)t.add(J(.5,.005,.005,z.darkSteel(),n,.3+r*.22,s+.226));return Mu(t,n,.95,s-.05,.42,2),t.add(ct(.06,.4,z.green(),n+.2,1.15,s+.12,10)),t},showerCabin(i,e){let t=new me,n=Math.min(.95,e-.2),s=e/2,r=pt+.02,o=r+n;t.add(J(n,.12,n,z.ceramic(),s,.06,(r+o)/2)),t.add(J(n,2,.02,z.white(),s,1,r+.01));for(let a of[-1,1])t.add(J(.012,1.9,n,z.glass(),s+a*n/2,1.07,(r+o)/2));t.add(J(n,1.9,.012,z.glass(),s,1.07,o));for(let a of[-1,1])t.add(J(.03,1.95,.03,z.chrome(),s+a*n/2,1.05,o));return t.add(Bt(st(s,.9,r+.05),st(s,1.95,r+.05),.012,z.chrome())),t.add(ct(.08,.02,z.chrome(),s,1.95,r+.14,14)),t.add(J(.08,.12,.04,z.chrome(),s,1.1,r+.04)),t},washbasin(i,e){let t=new me,n=e/2,s=pt+.26;return t.add(J(.58,.16,.44,z.ceramic(),n,.8,s)),t.add(J(.46,.04,.32,z.chrome(),n,.86,s+.02)),t.add(J(.14,.7,.14,z.ceramic(),n,.36,s-.1)),t.add(Bt(st(n,.88,pt+.05),st(n,1.02,pt+.12),.012,z.chrome())),t.add(J(.5,.65,.02,z.chrome(),n,1.45,pt+.01)),t.add(J(.46,.6,.01,z.tintedGlass(),n,1.45,pt+.025)),t},toilet(i,e){let t=new me,n=e/2,s=e-.1,r=pt,o=1;for(let a of[-1,1])t.add(J(.03,1.9,o,z.cabinetGrey(),n+a*s/2,1.07,r+o/2));return t.add(J(s-.06,1.75,.03,z.cabinetGrey(),n,1,r+o)),t.add(J(.03,.1,.03,z.chrome(),n+s/2-.15,1,r+o+.02)),t.add(J(.36,.36,.5,z.ceramic(),n,.2,r+.35)),t.add(J(.38,.4,.16,z.ceramic(),n,.6,r+.1)),t},washer(i,e){let t=new me,n=e/2,s=pt+.32;for(let[r,o]of[[.43,1],[1.29,2]])t.add(J(.6,.84,.6,z.white(),n,r,s)),t.add(ct(.2,.02,z.tintedGlass(),n,r-.04,s+.305,18).rotateX(Math.PI/2)),t.add(ct(.23,.015,z.chrome(),n,r-.04,s+.3,18).rotateX(Math.PI/2)),t.add(J(.12,.04,.01,o===1?z.ledGreen():z.ledRed(),n+.18,r+.33,s+.305));return t},treadmill(i,e,t){let n=new me,s=e/2,r=pt+.15,o=Math.min(1.9,t-.4);n.add(J(.8,.18,o,z.darkSteel(),s,.12,r+o/2+.1)),n.add(J(.56,.02,o-.2,z.black(),s,.22,r+o/2+.1));for(let a of[-1,1])n.add(Bt(st(s+a*.36,.2,r+.15),st(s+a*.34,1.3,r+.05),.03,z.frame())),n.add(Bt(st(s+a*.34,1,r+.1),st(s+a*.34,1,r+.6),.02,z.black()));return n.add(J(.72,.28,.12,z.black(),s,1.32,r+.08)),n.add(J(.4,.16,.01,z.screen(0,"wave"),s,1.34,r+.145)),n},exerciseBike(i,e){let t=new me,n=e/2,s=.62;return t.add(J(.5,.05,.08,z.frame(),n,.03,s-.4)),t.add(J(.5,.05,.08,z.frame(),n,.03,s+.4)),t.add(J(.08,.06,.8,z.frame(),n,.06,s)),t.add(ct(.22,.08,z.darkSteel(),n,.32,s-.28,18).rotateZ(Math.PI/2)),t.add(Bt(st(n,.06,s-.3),st(n,1.05,s-.36),.03,z.frame())),t.add(J(.46,.04,.06,z.black(),n,1.07,s-.36)),t.add(J(.2,.12,.08,z.black(),n,1.16,s-.38)),t.add(Bt(st(n,.06,s+.3),st(n,.88,s+.16),.03,z.frame())),t.add(J(.24,.07,.3,z.black(),n,.92,s+.14)),t.add(ct(.12,.05,z.red(),n,.36,s-.02,14).rotateZ(Math.PI/2)),t},powerRack(i,e,t){let n=new me,s=e-.3,r=Math.min(1.2,t-.3),o=(e-s)/2,a=(t-r)/2;for(let l of[o,o+s])for(let c of[a,a+r])n.add(J(.07,2.25,.07,z.black(),l,1.125,c));for(let l of[o,o+s])n.add(J(.07,.07,r,z.black(),l,2.22,a+r/2));for(let l of[a,a+r])n.add(J(s,.07,.07,z.black(),o+s/2,2.22,l));n.add(Bt(st(o-.35,1.35,a+.2),st(o+s+.35,1.35,a+.2),.016,z.chrome()));for(let l of[o-.22,o+s+.22])n.add(ct(.225,.05,z.black(),l,1.35,a+.2,20).rotateZ(Math.PI/2));return n.add(J(s-.1,.02,r-.1,z.rubber(),o+s/2,.01,a+r/2)),n},weightBench(i,e,t){let n=new me,s=e/2,r=.3,o=Math.min(1.3,t-.6);n.add(J(.3,.08,o,z.leather(),s,.45,r+o/2+.2));for(let a of[r+.35,r+o])n.add(J(.06,.42,.06,z.black(),s,.21,a));n.add(J(.5,.04,.06,z.black(),s,.02,r+o));for(let a of[-1,1])n.add(J(.05,1.2,.05,z.black(),s+a*.42,.6,r+.15));n.add(Bt(st(s-.85,1.12,r+.15),st(s+.85,1.12,r+.15),.014,z.chrome()));for(let a of[-1,1])n.add(ct(.17,.04,z.black(),s+a*.6,1.12,r+.15,18).rotateZ(Math.PI/2));return n},dumbbellRack(i,e){let t=new me,n=pt+.3;for(let s of[.1,e-.1])t.add(J(.05,.8,.45,z.black(),s,.4,n));for(let[s,r]of[[.45,0],[.75,0]]){t.add(J(e-.2,.03,.4,z.darkSteel(),e/2,s+r,n));let o=Math.floor((e-.3)/.22);for(let a=0;a<o;a++){let l=.25+a*.22,c=.05+a*.006;for(let h of[-.08,.08])t.add(ct(c,.05,z.black(),l,s+c+.02,n+h,10).rotateX(Math.PI/2));t.add(Bt(st(l,s+c+.02,n-.1),st(l,s+c+.02,n+.1),.012,z.chrome()))}}return t},gymMat(i,e,t){let n=new me;return n.add(J(e-.1,.05,t-.1,z.mat(),e/2,.025,t/2)),n.add(J(e-.1,.006,.02,z.white(),e/2,.053,t/2)),n},punchingBag(i,e,t){let n=new me,s=e/2,r=t/2;return n.add(J(.5,.05,.5,z.black(),s-.3,.025,r)),n.add(Bt(st(s-.45,0,r),st(s-.45,2.3,r),.035,z.black())),n.add(Bt(st(s-.45,2.25,r),st(s,2.25,r),.03,z.black())),n.add(Bt(st(s,2.25,r),st(s,1.75,r),.006,z.chrome())),n.add(ct(.17,1,z.red(),s,1.2,r,16)),n},gunRack(i,e){let t=new me,n=pt+.22;t.add(J(e-.08,1.9,.04,z.olive(),e/2,.95,pt+.02)),t.add(J(e-.08,.5,.4,z.olive(),e/2,.25,n)),t.add(J(e-.1,.04,.3,z.darkSteel(),e/2,1.5,n-.03));for(let r of[.04,e-.04])t.add(J(.04,1.9,.42,z.olive(),r,.95,n));let s=Math.max(2,Math.floor((e-.2)/.16));for(let r=0;r<s;r++){let o=.15+r*(e-.3)/(s-1);t.add(J(.05,.85,.08,z.black(),o,.98,n)),t.add(J(.035,.22,.12,z.black(),o,.68,n+.04)),t.add(J(.03,.12,.05,z.darkSteel(),o,1.44,n+.04))}return t},fumeHood(i,e){let t=new me,n=e/2,s=pt+.36;t.add(J(e-.1,.9,.7,z.cabinetGrey(),n,.45,s)),t.add(J(e-.1,.04,.72,z.black(),n,.92,s));for(let r of[-1,1])t.add(J(.04,1.05,.7,z.white(),n+r*(e/2-.07),1.45,s));return t.add(J(e-.1,.06,.7,z.white(),n,2,s)),t.add(J(e-.18,.02,.36,z.white(),n,1.97,s)),t.add(J(e-.2,.6,.012,z.glass(),n,1.55,s+.34)),t.add(J(.3,.45,.3,z.steel(),n,2.25,s-.12)),t.add(ct(.04,.2,z.yellow(),n-.2,1.04,s-.1,10,.03)),t.add(ct(.05,.14,z.glass(),n+.1,1.01,s,12)),t},bioCabinet(i,e){let t=new me,n=e/2,s=pt+.38;for(let o of[-.42,.42])t.add(J(.05,.7,.6,z.frame(),n+o,.35,s));t.add(J(e-.12,1.15,.74,z.white(),n,1.28,s));let r=J(e-.22,.6,.01,z.glass(),n,1.3,s+.38);return r.rotation.x=-.18,t.add(r),t.add(J(e-.24,.02,.5,z.lamp(),n,1.62,s+.05)),t.add(J(.2,.06,.01,z.ledGreen(),n+.3,1.78,s+.375)),t},instrumentRack(i,e){let t=new me,n=e/2,s=pt+.32;t.add(J(e-.15,1.85,.6,z.darkSteel(),n,.925,s));for(let r=0;r<5;r++){let o=.25+r*.33;t.add(J(e-.25,.28,.02,r%2?z.cabinetGrey():z.black(),n,o,s+.305)),t.add(J(.3,.16,.01,z.screen(r+(i.seed||0),r%2?"wave":"text"),n-.15,o,s+.317)),t.add(J(.03,.03,.01,r%3?z.ledGreen():z.ledRed(),n+.25,o+.06,s+.317))}return t},testRig(i,e,t){let n=new me,s=e/2,r=t/2,o=e-.4,a=t-.5;n.add(J(o,.8,a,z.cabinetGrey(),s,.4,r)),n.add(J(o+.04,.05,a+.04,z.black(),s,.82,r)),n.add(ct(.42,.9,z.steel(),s,1.3,r,20)),n.add(ct(.44,.06,z.orange(),s,1.78,r,20)),n.add(ct(.12,.02,z.tintedGlass(),s,1.3,r+.43,16).rotateX(Math.PI/2));for(let l of[.6,2.2,4])n.add(Bt(st(s+Math.cos(l)*.4,1,r+Math.sin(l)*.4),st(s+Math.cos(l)*(o/2),.84,r+Math.sin(l)*(a/2)),.02,z.black()));return n.add(J(.5,.35,.3,z.black(),s+o/2-.3,1,r-a/2+.2)),n.add(J(.4,.22,.01,z.screen(1,"wave"),s+o/2-.3,1.02,r-a/2+.355)),n},specimenTank(i,e,t){let n=new me,s=e/2,r=t/2;n.add(ct(.45,.3,z.darkSteel(),s,.15,r,20)),n.add(ct(.4,1.6,z.liquid(),s,1.1,r,20));for(let a of[.8,2.4,3.9,5.5])n.add(J(.03,1.65,.03,z.chrome(),s+Math.cos(a)*.42,1.12,r+Math.sin(a)*.42));n.add(ct(.45,.2,z.darkSteel(),s,2.03,r,20));let o=new be(new Pn(.22,14,10),z.specimen());o.scale.set(.8,1.6,.7),o.position.set(s,1.15,r),n.add(o);for(let a of[.5,2.6])n.add(Bt(st(s+Math.cos(a)*.3,2.1,r+Math.sin(a)*.3),st(s+Math.cos(a)*.3,2.45,r+Math.sin(a)*.3),.025,z.black()));return n.add(J(.1,.06,.01,z.ledGreen(),s,.2,r+.455)),n},freezer(i,e){let t=new me,n=e/2,s=pt+.38;return t.add(J(e-.2,1.95,.72,z.white(),n,.975,s)),t.add(J(.03,.6,.03,z.chrome(),n+e/2-.2,1.1,s+.37)),t.add(J(.2,.08,.01,z.screen(0,"text"),n,1.75,s+.362)),t},commandTable(i,e,t){let n=new me,s=e/2,r=t/2,o=e-.5,a=t-.5;return n.add(J(o-.2,.85,a-.2,z.darkSteel(),s,.425,r)),n.add(J(o,.06,a,z.black(),s,.88,r)),n.add(J(o-.1,.01,a-.1,z.map(),s,.915,r)),n},wallScreen(i,e){let t=new me,n=e/2,s=pt+.08;return t.add(J(e-.2,1.1,.08,z.black(),n,1.55,s)),t.add(J(e-.3,1,.01,z.screen(i.seed||3,"wave"),n,1.55,s+.045)),t.add(J(e-.2,.75,.3,z.darkSteel(),n,.375,s+.12)),t},chairRow(i,e,t){let n=new me,s=Math.max(1,Math.floor(e/.6)),r=t/2;n.add(J(e-.1,.05,.08,z.frame(),e/2,.06,r));for(let o=0;o<s;o++)qr(n,(o+.5)*e/s,r,-1,"52,60,74");return n},bench(i,e,t){let n=new me,s=t/2;n.add(J(e-.2,.05,.36,z.wood(),e/2,.45,s));for(let r of[.25,e-.25])n.add(J(.06,.43,.3,z.frame(),r,.215,s));return n},machineTool(i,e){let t=new me,n=pt+.45,s=e/2;return t.add(J(e-.2,.85,.8,z.green(),s,.425,n)),t.add(J(e-.3,.06,.6,z.steel(),s,.88,n+.05)),t.add(J(.5,.55,.55,z.green(),.45,1.18,n-.05)),t.add(ct(.06,.3,z.chrome(),.85,1.05,n+.05,12).rotateZ(Math.PI/2)),t.add(J(.35,.3,.35,z.green(),e-.45,1.06,n)),t.add(J(e-.3,.45,.012,z.glass(),s,1.15,n+.38)),t.add(J(.28,.36,.1,z.black(),e-.2,1.4,n-.2)),t.add(J(.2,.14,.01,z.screen(1,"text"),e-.2,1.45,n-.145)),t.add(J(.1,.06,.04,z.red(),e-.2,1.25,n-.14)),t},repairStand(i,e,t){let n=new me;n.add(J(e-.2,.01,t-.2,z.darkSteel(),e/2,.006,t/2));for(let s of[.12,t-.12])n.add(J(e-.2,.012,.1,z.yellow(),e/2,.012,s));for(let s of[.12,e-.12])n.add(J(.1,.012,t-.2,z.yellow(),s,.012,t/2));return n},shelf(i,e){let t=new me,n=pt+.18,s=ft(i.col*31+i.row);for(let r of[.06,e-.06])t.add(J(.03,1.9,.34,z.wood(),r,.95,n));for(let r=0;r<5;r++){let o=.05+r*.45;if(t.add(J(e-.1,.03,.34,z.wood(),e/2,o,n)),r===4)continue;let a=.1;for(;a<e-.15;){let l=.04+s()*.05,c=.24+s()*.14,h=[z.red(),z.olive(),z.cabinetGrey(),z.yellow(),z.black()];t.add(J(l,c,.24,h[Math.floor(s()*h.length)],a+l/2,o+.015+c/2,n)),a+=l+.005}}return t},cinemaScreen(i,e){let t=new me,n=pt+.05;t.add(J(e-.2,1.75,.06,z.black(),e/2,1.35,n)),t.add(J(e-.36,1.6,.01,z.screen(i.seed||2,"wave"),e/2,1.35,n+.035));for(let s of[.25,e-.25])t.add(J(.36,1.1,.34,z.black(),s,.55,n+.17));return t.add(J(e-.2,.25,.4,z.darkSteel(),e/2,.125,n+.2)),t},cinemaSeats(i,e,t){let n=new me,s=Math.max(1,Math.round(e/.62)),r=t/2+.05;n.add(J(e-.04,.12,.7,z.darkSteel(),e/2,.06,r));for(let o=0;o<s;o++){let a=(o+.5)*e/s;n.add(J(.5,.14,.5,z.velvet(),a,.42,r+.04));let l=J(.5,.62,.1,z.velvet(),a,.76,r-.24);l.rotation.x=-.12,n.add(l)}for(let o=0;o<=s;o++)n.add(J(.06,.62,.55,z.black(),o*e/s,.31,r));return n},projector(i,e){let t=new me,n=e/2,s=pt+.35;return t.add(J(.6,.9,.55,z.black(),n,.45,s)),t.add(J(.45,.3,.6,z.darkSteel(),n,1.05,s+.05)),t.add(ct(.09,.14,z.tintedGlass(),n,1.05,s+.42,14).rotateX(Math.PI/2)),t.add(J(.06,.03,.01,z.ledGreen(),n+.15,1.15,s+.355)),t},planter(i,e,t){let n=new me,s=ft(i.col*13+i.row*7),r=pt+.36,o=Math.min(.7,t-.2);n.add(J(e-.1,.5,o,z.wood(),e/2,.25,r)),n.add(J(e-.2,.04,o-.1,z.soil(),e/2,.5,r));let a=Math.max(2,Math.round(e/.35));for(let l=0;l<a;l++){let c=.15+(l+.5)*(e-.3)/a,h=.16+s()*.1,d=new be(new ei(h,1),z.leaf(Math.floor(s()*4)));d.position.set(c,.55+h*.8,r+(s()-.5)*.2),d.scale.set(1,.8+s()*.6,1),n.add(d)}return n},pottedTree(i,e,t){let n=new me,s=ft(i.col*17+i.row*5),r=e/2,o=t/2;n.add(ct(.3,.5,z.terracotta(),r,.25,o,16,.36)),n.add(ct(.33,.03,z.soil(),r,.5,o,16)),n.add(ct(.05,1.2,z.bark(),r,1.1,o,8,.035));for(let a=0;a<6;a++){let l=s()*Math.PI*2,c=.28+s()*.15,h=1.55+s()*.5,d=new be(new ei(c,1),z.leaf(Math.floor(s()*4)));d.position.set(r+Math.cos(l)*.22,h,o+Math.sin(l)*.22),n.add(d)}return n},hydroponicRack(i,e){let t=new me,n=ft(i.col*11+i.row*3),s=pt+.3;for(let r of[.08,e-.08])t.add(J(.04,2,.5,z.steel(),r,1,s));for(let r=0;r<4;r++){let o=.25+r*.5;t.add(J(e-.12,.08,.48,z.white(),e/2,o,s)),t.add(J(e-.2,.03,.4,z.growLight(),e/2,o+.42,s));for(let a=0;a<5;a++){let l=.06+n()*.05,c=new be(new ei(l,0),z.leaf(Math.floor(n()*4)));c.position.set(.18+a*(e-.36)/4,o+.05+l,s+(n()-.5)*.2),t.add(c)}}return t},fountain(i,e,t){let n=new me,s=e/2,r=t/2,o=Math.min(e,t)/2-.15;return n.add(ct(o,.45,z.cream(),s,.225,r,28)),n.add(ct(o-.1,.02,z.water(),s,.42,r,28)),n.add(ct(.12,.8,z.cream(),s,.8,r,12)),n.add(ct(.4,.08,z.cream(),s,1.2,r,18,.32)),n.add(ct(.32,.02,z.water(),s,1.25,r,18)),n},vendingMachine(i,e){let t=new me,n=e/2,s=pt+.4;t.add(J(.85,1.85,.75,z.red(),n,.925,s)),t.add(J(.55,1.2,.01,z.tintedGlass(),n-.1,1.15,s+.38));for(let r=0;r<5;r++)t.add(J(.5,.02,.01,z.lamp(),n-.1,.65+r*.24,s+.385));return t.add(J(.15,.3,.01,z.black(),n+.3,1.2,s+.38)),t.add(J(.4,.15,.02,z.black(),n-.1,.25,s+.38)),t}};function h2(i,e,t,n){let s=i.face||"N",r=s==="N"||s==="S"?e:t,o=s==="N"||s==="S"?t:e,a=n(i,r,o),l=new me;a.position.set(-r/2,0,-o/2),l.add(a),l.rotation.y={N:0,S:Math.PI,W:Math.PI/2,E:-Math.PI/2}[s],l.position.set(e/2,0,t/2);let c=new me;return c.add(l),c}var bu=new Set(Object.keys(Eu));function wu(i){let e=Eu[i.kind];return e?h2(i,i.cols*vu,i.rows*vu,e):null}var wn=i=>Math.max(0,Math.min(255,Math.round(i))),Mt=(i,e,t)=>new L(i,e,t),yc=new Map,ii=(i,e)=>(yc.has(i)||yc.set(i,e()),yc.get(i)),Gt=(i,e)=>ii("city_"+i,()=>new Ge(e));function vi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function ma(i,e=3,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=vi(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(h,d)=>(t?(h=(h+n)%n,d=(d+s)%s):(h=Math.max(0,Math.min(n-1,h)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+h)*4]/255);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let u=(c(d+1,h)-c(d-1,h))*e,f=(c(d,h+1)-c(d,h-1))*e,m=Math.hypot(u,f,1),x=(h*n+d)*4;l.data[x]=(-u/m*.5+.5)*255,l.data[x+1]=(f/m*.5+.5)*255,l.data[x+2]=(1/m*.5+.5)*255,l.data[x+3]=255}return a.putImageData(l,0,0),vt(o,{srgb:!1})}function ps(i,e,t,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:l=4}={}){let c=ft(s),h=i.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let m=1+Gi(u/e,d/t,a,l,s)*o+(c()-.5)*r/255,x=(d*e+u)*4;h.data[x]=wn(n[0]*m),h.data[x+1]=wn(n[1]*m),h.data[x+2]=wn(n[2]*m),h.data[x+3]=255}i.putImageData(h,0,0)}var pa=(i,e=1)=>`rgba(${i[0]},${i[1]},${i[2]},${e})`,vc={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},Mc=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Cu=i=>{let[e,t]=i.split("_");return{base:e,role:t,colors:vc[e]}};function d2(i,e){let{base:t,role:n,colors:s}=Cu(i),r=512,o=936,a=o/2.28,l=x=>o-x*a,c=vi(r,o),h=c.getContext("2d"),d=vi(r,o),u=d.getContext("2d");ps(h,r,o,s.wall,{seed:41+e*5+t.length*3,grain:t==="bank"?14:8,dirt:.08,scale:3}),u.fillStyle="#808080",u.fillRect(0,0,r,o);let f=ft(61+e*11+t.length);if(t==="police"&&n!=="g"){let x=.075*a,p=.26*a;for(let g=0;g*x<o;g++){let _=o-(g+1)*x,y=g%2?p/2:0;for(let v=-y;v<r;v+=p){let T=.86+f()*.26;h.fillStyle=pa(s.wall.map(C=>wn(C*T))),h.fillRect(v+2,_+2,p-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,_,r,2.5),u.fillStyle="#505050",u.fillRect(0,_,r,3);for(let v=-y;v<r;v+=p)h.fillRect(v,_,2.5,x),u.fillRect(v,_,3,x)}}if(n==="g"||t==="bank"){let p=t==="police"?[212,204,188]:null;p&&ps(h,r,o,p,{seed:71+e,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let _=l(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,_-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,_+3,r,2),u.fillStyle="#202020",u.fillRect(0,_-3,r,7),t==="bank"){let y=.62*a,v=g%2?y/2:0;for(let T=v;T<r;T+=y)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(T-1.5,_,3,.32*a),u.fillStyle="#303030",u.fillRect(T-2,_,4,.32*a)}}}for(let x=0;x<8;x++){let p=f()*r,g=60+f()*240,_=h.createLinearGradient(0,0,0,g);_.addColorStop(0,"rgba(70,60,50,0.12)"),_.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=_,h.fillRect(p,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,l(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,l(.9),r,.9*a)}let m=vt(c);return m.wrapS=m.wrapT=Qt,{map:m,normalMap:ma(d,4,!1)}}function Su(i,e="plaster"){let s=410.5263157894737,r=vi(512,936),o=r.getContext("2d"),a=vi(512,936),l=a.getContext("2d");if(l.fillStyle="#808080",l.fillRect(0,0,512,936),e==="vault"){ps(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",l.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),l.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),l.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let d=24;d<512;d+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(d,h,4,0,Math.PI*2),o.fill(),l.fillStyle="#d0d0d0",l.beginPath(),l.arc(d,h,4,0,Math.PI*2),l.fill()}else ps(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),l.fillStyle="#b0b0b0",l.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),l.fillStyle="#a0a0a0",l.fillRect(0,936-.95*s,512,6);let c=vt(r);return c.wrapS=c.wrapT=Qt,{map:c,normalMap:ma(a,3,!1)}}var oe={facade:(i,e)=>ii(`facade_${i}_${e}`,()=>{let t=d2(i,e);return new Ge({map:t.map,normalMap:t.normalMap,roughness:.85,metalness:0})}),plaster:i=>ii("plaster"+i,()=>{let e=Su(i);return new Ge({map:e.map,normalMap:e.normalMap,roughness:.9})}),vault:()=>ii("vaultWall",()=>{let i=Su(0,"vault");return new Ge({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Gt("trim_"+i,{color:new Je().setRGB(...vc[i].trim.map(e=>(e/255)**2.2)),roughness:.75}),plinth:i=>Gt("plinth_"+i,{color:new Je().setRGB(...vc[i].plinth.map(e=>(e/255)**2.2)),roughness:.9}),glass:()=>ii("city_glass",()=>new Bn({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Gt("frame",{color:15789282,roughness:.6}),wood:()=>Gt("wood",{color:5913124,roughness:.65}),darkWood:()=>Gt("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Gt("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Gt("greenDoor",{color:2375726,roughness:.55}),iron:()=>Gt("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Gt("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Gt("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Gt("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Gt("stone",{color:13156528,roughness:.85}),granite:()=>Gt("granite",{color:9078402,roughness:.8}),ceiling:()=>Gt("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Gt("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Gt("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Gt("fabric"+i,{color:i,roughness:.95}),paint:i=>Gt("paint"+i,{color:i,roughness:.6}),water:()=>ii("city_water",()=>new Bn({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>ii("city_spray",()=>new Ge({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>ii("leaves"+i,()=>new Ge({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Gt("sandFill",{color:14073994,roughness:1})};function u2(i){let t=vi(512,512),n=t.getContext("2d"),s=vi(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=ft(i.length*17+3);if(i==="parquet"){ps(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,l=a/5;for(let c=-12;c<30;c++)for(let h=-2;h<14;h++)for(let d of[0,1]){let u=.8+o()*.35;n.save(),n.translate(c*l*2+h*0+d*l,h*a-c*l*0),n.rotate(d?Math.PI/4:-Math.PI/4),n.fillStyle=pa([wn(158*u),wn(106*u),wn(64*u)]),n.fillRect(0,0,a*.7,l*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let c=0;c<512;c+=l*1.41)n.beginPath(),n.moveTo(0,c),n.lineTo(512,c+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let l=0;l<2;l++){let c=(l+a)%2===0;n.fillStyle=c?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(l*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*512,c=o()*512;n.moveTo(l,c);for(let h=0;h<6;h++)l+=(o()-.3)*60,c+=(o()-.5)*50,n.lineTo(l,c);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){ps(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=.92+o()*.12;n.fillStyle=(c+l)%2?`rgba(${wn(110*h)},${wn(116*h)},${wn(110*h)},1)`:`rgba(${wn(206*h)},${wn(204*h)},${wn(192*h)},1)`,n.fillRect(c*512/a+1,l*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let l=0;l<=512;l+=512/a)r.fillRect(l-1,0,2,512),r.fillRect(0,l-1,512,2)}else{ps(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let l=8+a/16%2*8;l<512;l+=16)n.save(),n.translate(l,a),n.rotate((l+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(l,a),r.rotate((l+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:vt(t),normalMap:ma(s,2)}}function Pu(i){return ii("floor_"+i,()=>{let e=u2(i);return new Ge({map:e.map,normalMap:e.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function Ie(i,e,t,n,s,r,o){let a=new be(new xt(i,e,t),n);return a.position.set(s,r,o),a}function Wn(i,e,t,n,s,r,o,a=16){let l=new be(new Lt(i,e,t,a),n);return l.position.set(s,r,o),l}function In(i,e,t,n,s,r=32){let o=new be(new as(i.map(([a,l])=>new ve(a,l)),r),e);return o.position.set(t,n,s),o}function Zr(i,e,t,n){let s=new en;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,e),s.closePath();let r=new gn(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new be(r,n)}var _c=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Iu(i,e,t,n,s,r,o){let{wallBox:a,isIndoor:l,THICK:c,PANEL_H:h}=o,d=new me,u=s.type,f=s.style,m=r?.8:h,x=c/2,p=(e*73856093^t*19349663^n*83492791)>>>0,g=l(n,e,t),_=i==="W"?l(n,e-1,t):l(n,e,t-1),y=Mc(f)?Cu(f):null,v=K=>f==="vault"?oe.vault():!y||K?oe.plaster(p%3):oe.facade(f,p%3),T=y?oe.trim(y.base):oe.slabEdge(),C=v(g),I=v(_),k=i==="W"?[C,I,T,T,T,T]:[T,T,T,T,C,I],A=y?g?-1:1:0,M=n*at,S=(K,N,O,B,q,U,E)=>{let H=U-q,X=A*(c/2+(q+U)/2),ae=i==="W"?new xt(H,B-O,N-K):new xt(N-K,B-O,H),ye=new be(ae,E);return i==="W"?ye.position.set(e*D+X,M+(O+B)/2,t*D+(K+N)/2):ye.position.set(e*D+(K+N)/2,M+(O+B)/2,t*D+X),d.add(ye),ye},ue=(K,N,O,B)=>{let q=new gn(K,{depth:O-N,bevelEnabled:!1,curveSegments:16});(i==="W"?A<0:A>0)?q.translate(0,0,c/2+N):q.translate(0,0,-(c/2+O)),i==="W"&&q.rotateY(-Math.PI/2);let E=new be(q,B);return E.position.set(e*D,M,t*D),d.add(E),E};if(u==="rail"){let K=f==="fence",N=K?oe.fenceGreen():oe.iron(),O=K?1.1:.95,B=(q,U,E,H,X,ae=N)=>d.add(a(i,e,t,n,q,U,E,H,Array(6).fill(ae),X));for(let q of[0,D])B(q-.03,q+.03,0,O+.04,.06);B(0,D,O-.04,O,.05,K?N:oe.darkWood()),B(0,D,.08,.12,.035),K&&B(0,D,O-.3,O-.27,.03);for(let q=.1;q<D-.05;q+=.12)B(q-.009,q+.009,.1,O-(K?-.06:.02),.018),K&&B(q-.02,q+.02,O+.02,O+.07,.025);return d}if(u==="wall")d.add(a(i,e,t,n,-x,D+x,0,m,k));else if(u==="door"){let N=Math.min(2.1,m),O=(D-.92)/2,B=(D+.92)/2;d.add(a(i,e,t,n,-x,O,0,m,k)),d.add(a(i,e,t,n,B,D+x,0,m,k)),m>N+.01&&d.add(a(i,e,t,n,O,B,N,m,k));let q=f==="vault"?oe.steel():oe.wood(),U=Array(6).fill(q),E=f==="vault"?.12:.06;if(d.add(a(i,e,t,n,O-E,O,0,N,U,c+.05)),d.add(a(i,e,t,n,B,B+E,0,N,U,c+.05)),m>N+.01&&d.add(a(i,e,t,n,O-E,B+E,N,N+E,U,c+.05)),d.add(a(i,e,t,n,O,B,0,.03,Array(6).fill(oe.stone()),c+.1)),y&&!r){let H=oe.trim(y.base);if(S(O-.16,O-.04,0,N+.1,0,.05,H),S(B+.04,B+.16,0,N+.1,0,.05,H),S(O-.16,B+.16,N+.04,N+.16,0,.05,H),N+.42<m){S(O-.26,B+.26,N+.26,N+.34,0,.22,H);for(let X of[O-.18,B+.18])S(X-.05,X+.05,N+.12,N+.26,0,.16,H)}}}else{let K=y&&y.base==="bank"&&y.role==="g",N=.78,O=K?.62:y&&y.role==="g"?.75:.7,B=K?2.08:2,q=(D-N)/2,U=(D+N)/2,E=K?B-N/2:B;if(r)d.add(a(i,e,t,n,-x,D+x,0,m,k));else{if(d.add(a(i,e,t,n,-x,q,0,m,k)),d.add(a(i,e,t,n,U,D+x,0,m,k)),d.add(a(i,e,t,n,q,U,0,O,k)),d.add(a(i,e,t,n,q,U,B,m,k)),K){let ae=new en;ae.moveTo(q,E),ae.lineTo(q,B),ae.lineTo(U,B),ae.lineTo(U,E),ae.absarc(D/2,E,N/2,0,Math.PI,!1);let ye=new gn(ae,{depth:c,bevelEnabled:!1,curveSegments:16});ye.translate(0,0,-c/2),i==="W"&&ye.rotateY(-Math.PI/2);let G=new be(ye,A?oe.facade(f,p%3):k[i==="W"?0:4]);G.position.set(e*D,M,t*D),d.add(G)}let H=Array(6).fill(oe.glass()),X=Array(6).fill(oe.frame());if(d.add(a(i,e,t,n,q+.03,U-.03,O,K?E+N/2-.02:B,H,.03)),d.add(a(i,e,t,n,q,q+.05,O,E,X,.08)),d.add(a(i,e,t,n,U-.05,U,O,E,X,.08)),d.add(a(i,e,t,n,q,U,O,O+.05,X,.08)),K||d.add(a(i,e,t,n,q,U,B-.05,B,X,.08)),d.add(a(i,e,t,n,D/2-.022,D/2+.022,O,K?E+N/2-.04:B,X,.06)),d.add(a(i,e,t,n,q,U,O+(E-O)*.68-.02,O+(E-O)*.68+.02,X,.06)),y){let ae=oe.trim(y.base);if(S(q-.1,U+.1,O-.07,O,0,.1,ae),K||(S(q-.1,q,O,B+.08,0,.04,ae),S(U,U+.1,O,B+.08,0,.04,ae),S(q-.1,U+.1,B,B+.08,0,.04,ae)),y.role==="u"&&["bank","pink","cream"].includes(y.base)||y.role==="t"&&y.base==="bank"){let G=new en;G.moveTo(q-.16,B+.1),G.lineTo(U+.16,B+.1),G.lineTo(D/2,B+.27),G.closePath(),ue(G,0,.1,ae)}else y.role==="u"||y.role==="t"?S(q-.15,U+.15,B+.1,B+.17,0,.12,ae):y.role==="g"&&!K&&S(D/2-.07,D/2+.07,B-.02,B+.16,0,.06,ae);if(K){let G=new en;G.absarc(D/2,E,N/2+.1,0,Math.PI,!1),G.lineTo(q,E),G.absarc(D/2,E,N/2,Math.PI,0,!0),G.closePath(),ue(G,0,.05,ae),S(D/2-.07,D/2+.07,B-.06,B+.14,0,.08,ae),S(q-.1,q,O,E,0,.05,ae),S(U,U+.1,O,E,0,.05,ae);let fe=oe.iron();for(let we=1;we<6;we++){let Ae=q+we*N/6,F=Math.sqrt(Math.max(0,(N/2)**2-(Ae-D/2)**2));S(Ae-.01,Ae+.01,O,E+F-.03,-.06,-.04,fe)}for(let we of[O+.35,O+.8])S(q+.02,U-.02,we,we+.02,-.065,-.035,fe)}if(y.role!=="g"&&y.base==="bank"){let G=oe.iron();S(q-.08,U+.08,O-.12,O-.07,0,.32,oe.stone()),S(q-.06,U+.06,O+.42,O+.45,.28,.31,G);for(let fe=0;fe<=8;fe++){let we=q-.04+fe*(N+.08)/8;S(we-.008,we+.008,O-.07,O+.43,.285,.305,G)}}}}}if(y&&!r){let K=oe.trim(y.base);if(y.role==="g"&&S(-x,D+x,0,.5,0,.05,oe.plinth(y.base)),y.role==="t"){S(-x-.02,D+x+.02,h-.16,h+.02,0,.08,K),S(-x-.06,D+x+.06,h+.02,h+.12,0,.18,K),S(-x-.1,D+x+.1,h+.12,h+.24,0,.32,K);for(let N=.16;N<D;N+=.31)S(N-.04,N+.04,h-.02,h+.12,.08,.26,K)}else S(-x-.02,D+x+.02,h-.08,h+.24,0,.06,K),S(-x-.03,D+x+.03,h+.18,h+.24,0,.1,K)}else y&&r&&y.role==="g"&&S(-x,D+x,0,.5,0,.05,oe.plinth(y.base));return d}function Lu(i,e,t,n,s,r,o,a,l){let{wallBox:c}=l,h=new me,d=o-.01;if(a==="vault"){let p=Array(6).fill(oe.steel());h.add(c(i,e,t,n,s-.02,r+.02,.01,d,p,.2));let g=(s+r)/2;for(let _ of[.26])h.add(c(i,e,t,n,g-.3,g+.3,d*.45,d*.45+.04,Array(6).fill(oe.brass()),_));return h.add(c(i,e,t,n,g-.02,g+.02,d*.45-.28,d*.45+.32,Array(6).fill(oe.brass()),.26)),h.add(c(i,e,t,n,s+.05,s+.1,.2,d-.2,Array(6).fill(oe.iron()),.24)),h}let u=a==="outer",f=Array(6).fill(u?oe.greenDoor():oe.wood()),m=Array(6).fill(oe.darkWood()),x=(s+r)/2;h.add(c(i,e,t,n,s-.02,r+.02,.01,d,f,.06)),h.add(c(i,e,t,n,x-.01,x+.01,.01,d,m,.075));for(let[p,g]of[[s+.06,x-.06],[x+.06,r-.06]])d>1&&h.add(c(i,e,t,n,p,g,.15,Math.min(.85,d-.1),m,.072)),d>1.9&&(u?h.add(c(i,e,t,n,p+.02,g-.02,1.05,d-.15,Array(6).fill(oe.glass()),.074)):h.add(c(i,e,t,n,p,g,1,d-.15,m,.072)));for(let p of[-1,1])h.add(c(i,e,t,n,x+p*.06-.015,x+p*.06+.015,Math.min(1,d-.1),Math.min(1.12,d-.05),Array(6).fill(oe.brass()),.09));return h}var Nu=()=>({body:oe.stone(),tread:oe.lightWood(),nosing:oe.darkWood(),rail:oe.iron(),handrail:oe.darkWood()});function f2(i){let n=vi(512,512),s=n.getContext("2d"),r=vi(512,512),o=r.getContext("2d"),a=ft(i==="slate"?501:503),l=512/(i==="slate"?10:8),c=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=pa(h),s.fillRect(0,0,512,512);for(let f=0;f<512/c;f++){let m=f%2?l/2:0;for(let x=-m;x<512;x+=l){let p=.8+a()*.32,g=f*c,_=o.createLinearGradient(0,g,0,g+c);_.addColorStop(0,"#404040"),_.addColorStop(1,"#c8c8c8"),o.fillStyle=_,o.fillRect(x+1,g,l-2,c),s.fillStyle=pa(h.map(y=>wn(y*p))),i==="slate"?s.fillRect(x+1,g+1,l-2,c-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+l-1,g),s.lineTo(x+l-1,g+c*.75),s.quadraticCurveTo(x+l/2,g+c*1.05,x+1,g+c*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+c-2,l,2)}}for(let f=0;f<40;f++){let m=a()*512,x=a()*512,p=10+a()*40,g=s.createRadialGradient(m,x,0,m,x,p);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(m-p,x-p,p*2,p*2)}let d=vt(n),u=ma(r,3);for(let f of[d,u])f.wrapS=f.wrapT=is;return{map:d,normalMap:u}}var Tu=i=>ii("roofMat_"+i,()=>{let e=f2(i);return new Ge({map:e.map,normalMap:e.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:$t})});function Xn(i,e,t){let n=new It,s=i[0],r=e.clone().normalize(),o=new L().subVectors(i[1],i[0]).cross(new L().subVectors(i[2],i[0])).normalize(),a=new L().crossVectors(o,r).normalize(),l=[],c=[];for(let d of i){l.push(d.x,d.y,d.z);let u=new L().subVectors(d,s);c.push(u.dot(r)/(2*D),u.dot(a)/(2*D))}let h=[];for(let d=1;d<i.length-1;d++)h.push(0,d,d+1);return n.setAttribute("position",new it(l,3)),n.setAttribute("uv",new it(c,2)),n.setIndex(h),n.computeVertexNormals(),new be(n,t)}function Au(i,e,t,n,s,r,o,a){let l=n-e,c=s-t,h=Math.min(l,c)/2,d=h*Math.tan(o),u=l>=c,f=u?[Mt(e+h,r+d,(t+s)/2),Mt(n-h,r+d,(t+s)/2)]:[Mt((e+n)/2,r+d,t+h),Mt((e+n)/2,r+d,s-h)],m={nw:Mt(e,r,t),ne:Mt(n,r,t),se:Mt(n,r,s),sw:Mt(e,r,s)};u?(i.add(Xn([m.sw,m.se,f[1],f[0]],Mt(1,0,0),a)),i.add(Xn([m.ne,m.nw,f[0],f[1]],Mt(-1,0,0),a)),i.add(Xn([m.se,m.ne,f[1]],Mt(0,0,-1),a)),i.add(Xn([m.nw,m.sw,f[0]],Mt(0,0,1),a))):(i.add(Xn([m.se,m.ne,f[0],f[1]],Mt(0,0,-1),a)),i.add(Xn([m.nw,m.sw,f[1],f[0]],Mt(0,0,1),a)),i.add(Xn([m.sw,m.se,f[1]],Mt(1,0,0),a)),i.add(Xn([m.ne,m.nw,f[0]],Mt(-1,0,0),a)));let x=a,p=(g,_)=>{let y=new L().subVectors(_,g),v=new be(new Lt(.07,.07,y.length(),8),x);v.position.copy(g).addScaledVector(y,.5),v.quaternion.setFromUnitVectors(Mt(0,1,0),y.normalize()),i.add(v)};return p(f[0],f[1]),p(m.nw,f[0]),p(m.sw,f[0]),p(m.ne,f[1]),p(m.se,f[1]),{height:d,along:u,half:h}}function Ru(i,e,t,n,s,r,o,a=1){let l=new me,c=1*a,h=1.15*a,d=1.6*a;l.add(Ie(c,h,d,r,0,h/2,-d/2)),l.add(Ie(c*.56,h*.6,.04,oe.glass(),0,h*.45,.01)),l.add(Ie(c*.66,.06,.06,oe.frame(),0,h*.14,.02)),l.add(Ie(.04,h*.6,.05,oe.frame(),0,h*.45,.02));let u=Zr(c+.24,.55*a,d+.15,o);u.position.set(0,h,-d/2+.07),l.add(u);let f=Zr(c+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),l.add(f),l.position.set(e,n,t),l.rotation.y=Math.atan2(s.x,s.z),i.add(l)}var _i=i=>(i+.5)*D;function p2(i){let e=i.cols*D,t=i.rows*D;if(i.type==="mansard"){let c={x0:-.2,z0:-.2,x1:e+.2,z1:t+.2},h=(47-i.col)*D+D/2,d=[],u=.75*.36;for(let m=1;m<i.cols-1;m+=2){let x=_i(m);Math.abs(x-h)<5.2||d.push({x,z:c.z1-u,facing:"S"},{x,z:c.z0+u,facing:"N"})}for(let m=1;m<i.rows-1;m+=2)d.push({x:c.x1-u,z:_i(m),facing:"E"},{x:c.x0+u,z:_i(m),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([m,x])=>({x:_i(Math.floor(i.cols*m)),z:_i(Math.floor(i.rows*x))}));return{...c,width:e,depth:t,dormers:d,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:t-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:e+n,z1:t+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let c=0;c<i.cols;c++){let h=_i(c);c%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let c=0;c<i.rows;c++){let h=_i(c);c%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let l=[0,1,2].map(c=>({x:_i(Math.floor(i.cols*(.25+c*.25))),z:_i(Math.floor(i.rows*(.42+c%2*.16)))}));return{...r,width:e,depth:t,along:o,run:s,dormers:a,chimneys:l,pediment:null}}function m2(i){let e=p2(i),t={S:Mt(0,0,1),N:Mt(0,0,-1),E:Mt(1,0,0),W:Mt(-1,0,0)},n=new me,s=i.cols*D,r=i.rows*D,o=.42,a=ft(i.col*31+i.row*17),l=oe.trim(i.facade||"cream");if(i.type==="mansard"){let c=Tu("slate"),h=.75,d=2.3,u=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},m={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(A,M,S)=>Mt(A,M,S),p=u+d;n.add(Xn([x(f.x0,u,f.z1),x(f.x1,u,f.z1),x(m.x1,p,m.z1),x(m.x0,p,m.z1)],Mt(1,0,0),c)),n.add(Xn([x(f.x1,u,f.z0),x(f.x0,u,f.z0),x(m.x0,p,m.z0),x(m.x1,p,m.z0)],Mt(-1,0,0),c)),n.add(Xn([x(f.x1,u,f.z1),x(f.x1,u,f.z0),x(m.x1,p,m.z0),x(m.x1,p,m.z1)],Mt(0,0,-1),c)),n.add(Xn([x(f.x0,u,f.z0),x(f.x0,u,f.z1),x(m.x0,p,m.z1),x(m.x0,p,m.z0)],Mt(0,0,1),c)),Au(n,m.x0,m.z0,m.x1,m.z1,p,.07,c),n.add(Ie(m.x1-m.x0+.1,.1,.12,oe.steel(),(m.x0+m.x1)/2,p+.05,m.z1)),n.add(Ie(m.x1-m.x0+.1,.1,.12,oe.steel(),(m.x0+m.x1)/2,p+.05,m.z0));let g=u+.35;for(let A of e.dormers)Ru(n,A.x,A.z,g,t[A.facing],l,c,.95);let _=(47-i.col)*D+D/2,y=r+.12,v=Zr(9.2,2.3,.5,l);v.position.set(_,u-.02,y-.05),n.add(v);let T=Zr(8.2,1.85,.12,oe.facade("bank_u",1));T.position.set(_,u+.16,y+.22),n.add(T);let C=Math.atan2(2.3,4.6),I=Math.hypot(4.6,2.3)+.3;for(let A of[-1,1]){let M=Ie(I,.2,.7,l,_+A*2.3,u+1.15,y+.02);M.rotation.z=-A*C,n.add(M)}n.add(Ie(9.6,.22,.75,l,_,u+.02,y+.02));let k=new be(new Lt(.42,.42,.12,32),oe.brass());k.rotation.x=Math.PI/2,k.scale.set(1,1,.72),k.position.set(_,u+.85,y+.32),n.add(k);for(let A of[-4.6,0,4.6])n.add(In([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],l,_+A,A?u+.2:u+2.4,y+.05,12));for(let{x:A,z:M}of e.chimneys)n.add(Ie(.7,1.3,.5,oe.facade("bank_t",0),A,p+.6,M)),n.add(Ie(.84,.12,.64,l,A,p+1.28,M))}else{let c=Tu("tile"),h=-o,d=-o,u=s+o,f=r+o,m=.22,x=Au(n,h,d,u,f,m,.52,c);n.add(Ie(u-h,.14,.06,oe.darkWood(),(h+u)/2,m-.04,f)),n.add(Ie(u-h,.14,.06,oe.darkWood(),(h+u)/2,m-.04,d)),n.add(Ie(.06,.14,f-d,oe.darkWood(),u,m-.04,(d+f)/2)),n.add(Ie(.06,.14,f-d,oe.darkWood(),h,m-.04,(d+f)/2)),n.add(Ie(u-h,.03,f-d,oe.darkWood(),(h+u)/2,m-.1,(d+f)/2));for(let _ of[d,f]){let y=Wn(.06,.06,u-h,oe.iron(),(h+u)/2,m-.02,_,8);y.rotation.z=Math.PI/2,n.add(y)}let p=Math.tan(.52),g=e.run;for(let _ of e.dormers)Ru(n,_.x,_.z,m+(g-.75)*p,t[_.facing],l,c);for(let _=0;_<e.chimneys.length;_++){let{x:y,z:v}=e.chimneys[_],T=m+Math.min(Math.min(y-h,u-y),Math.min(v-d,f-v))*p,C=oe.facade("police_u",_%3);n.add(Ie(.6,x.height-(T-m)+1.1,.5,C,y,T+(x.height-(T-m)+1.1)/2-.2,v)),n.add(Ie(.72,.1,.62,oe.stone(),y,m+x.height+.95,v))}}return n}function Ec(i,e,t=2){let n=new ei(i,t),s=n.attributes.position,r=ft(e),o=[],a=r()*10;for(let l=0;l<s.count;l++){let c=Mt(s.getX(l),s.getY(l),s.getZ(l)),h=1+.18*Math.sin(c.x*5+a)*Math.sin(c.y*4.3+a*.7)*Math.sin(c.z*4.7)+(r()-.5)*.12;c.multiplyScalar(h),s.setXYZ(l,c.x,c.y,c.z);let d=.75+.25*(c.y/i)+(r()-.5)*.25;o.push(d,d,d)}return n.setAttribute("color",new it(o,3)),n.computeVertexNormals(),n}function bc(i){return ii("leafTint"+i,()=>new Ge({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function g2(i,e,t){let n=new me,s=ft(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Gt("bark",{color:4864556,roughness:.95});n.add(Wn(.11,.17,o+.6,a,e,(o+.6)/2,t,10));for(let h=0;h<3;h++){let d=s()*Math.PI*2,u=Wn(.04,.07,1.2,a,e+Math.cos(d)*.3,o+.6,t+Math.sin(d)*.3,6);u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),n.add(u)}let l=bc(r?6195776:4880954),c=r?7:6;for(let h=0;h<c;h++){let d=h/c*Math.PI*2+s(),u=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,m=new be(Ec(f,i.col*101+h*17+i.row),l);m.position.set(e+Math.cos(d)*u,o+1.25+(h===0?.4:(s()-.3)*.9),t+Math.sin(d)*u),n.add(m)}return n}function x2(i,e,t){let n=new me,s=bc(4616250);for(let r=0;r<3;r++){let o=new be(Ec(.5,t*7+r,2),s);o.scale.set(i/2.4,.95,e/1.25),o.position.set(i*(.2+r*.3),.5,e/2),n.add(o)}return n}function fs(i,e,t,n){let s=new me;return s.add(i),i.position.set(-t,0,-n),s.rotation.y=-(e.rotation||0)*Math.PI/2,s.position.set(t,0,n),s}function Du(i){let e=i.cols*D,t=i.rows*D,n=e/2,s=t/2,r=new me,o=l=>(r.add(l),l),a=ft(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return m2(i);case"tree":return g2(i,n,s);case"hedge":return x2(e,t,i.col+i.row*3);case"bench":{let l=new me;for(let c of[.18,D-.18])l.add(Ie(.05,.45,.42,oe.iron(),c,.22,.45)),l.add(Ie(.05,.5,.05,oe.iron(),c,.7,.26));for(let c=0;c<4;c++)l.add(Ie(D-.12,.035,.08,oe.lightWood(),D/2,.46,.32+c*.1));for(let c=0;c<3;c++)l.add(Ie(D-.12,.08,.03,oe.lightWood(),D/2,.62+c*.12,.25));return fs(l,i,n,s)}case"bin":return o(In([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],oe.iron(),n,0,s,16)),r;case"streetLamp":return o(In([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],oe.iron(),n,0,s,12)),o(In([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],oe.lantern(),n,3.5,s,6)),o(In([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],oe.iron(),n,4,s,6)),r;case"column":return o(Ie(.66,.16,.66,oe.stone(),n,.08,s+.05)),o(In([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],oe.stone(),n,.16,s+.05,24)),o(Wn(.21,.24,at-.62,oe.stone(),n,.28+(at-.62)/2,s+.05,20)),o(In([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],oe.stone(),n,at-.34,s+.05,24)),o(Ie(.7,.18,.7,oe.stone(),n,at-.09,s+.05)),r;case"balcony":{o(Ie(e,.18,1.05,oe.stone(),n,.09,1.05/2)),o(Ie(e+.1,.06,1.05+.06,oe.stone(),n,.2,1.05/2+.03));for(let c=.15;c<e;c+=.22)o(In(_c,oe.stone(),c,.23,1.05-.1,10));for(let c=.15;c<1.05-.1;c+=.22)o(In(_c,oe.stone(),.08,.23,c,10)),o(In(_c,oe.stone(),e-.08,.23,c,10));return o(Ie(e,.08,.16,oe.stone(),n,.97,1.05-.1)),o(Ie(.16,.08,1.05,oe.stone(),.08,.97,1.05/2)),o(Ie(.16,.08,1.05,oe.stone(),e-.08,.97,1.05/2)),o(Ie(3.4,.36,.06,oe.darkWood(),n,-.3,.12)),o(Ie(3.1,.2,.02,oe.brass(),n,-.3,.155)),r}case"fountain":{o(In([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],oe.granite(),n,0,s,72));let c=new be(new Fi(5.3-.38,64),oe.water());c.rotation.x=-Math.PI/2,c.position.set(n,.36,s),o(c),o(new be(new Fi(5.3-.38,64),oe.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(In([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],oe.stone(),n,0,s,48));let h=new be(new Fi(.9,32),oe.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let d=new be(new Fi(1.6,32),oe.water());d.rotation.x=-Math.PI/2,d.position.set(n,1.48,s),o(d),o(new be(new Lt(1.62,1.95,1.1,32,1,!0),oe.spray())).position.set(n,.92,s),o(new be(new Lt(.95,1.6,.85,32,1,!0),oe.spray())).position.set(n,1.92,s),o(new be(new ea(.12,1.1,12,1,!0),oe.spray())).position.set(n,3.9,s);for(let u=0;u<8;u++){let f=u/8*Math.PI*2,m=new be(new Lt(.03,.05,1.6,6,1,!0),oe.spray());m.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),m.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(m)}return r}case"playhouse":{let l=oe.paint(14205066),c=oe.paint(11549226);o(Ie(e-.3,.1,t-.3,oe.lightWood(),n,.05,s));for(let[u,f,m,x]of[[n,.2,e-.3,.06],[.2,s,.06,t-.3],[e-.2,s,.06,t-.3]])o(Ie(m,1.3,x,l,u,.75,f));o(Ie(.8,1.3,.06,l,.55,.75,t-.2)),o(Ie(.7,1.3,.06,l,e-.5,.75,t-.2)),o(Ie(.5,.45,.07,oe.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=Ie(e*.62,.06,t-.1,c,e*.3,1.75,s);h.rotation.z=.6,o(h);let d=Ie(e*.62,.06,t-.1,c,e*.7,1.75,s);d.rotation.z=-.6,o(d);for(let u of[.2,t-.2]){let f=Zr(e-.3,.75,.06,l);f.position.set(n,1.4,u),o(f)}return r}case"slide":{let l=oe.paint(12730414),c=oe.paint(3828392);o(Ie(.9,.08,.9,oe.lightWood(),n,1.5,.55));for(let[d,u]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Wn(.04,.04,2.3,c,d,1.15,u,8));for(let d of[n-.4,n+.4])o(Ie(.05,.05,.9,c,d,2.25,.55));for(let d=0;d<5;d++)o(Ie(.6,.04,.12,oe.lightWood(),n,.3+d*.27,.05-d*0)).position.z=.08;let h=Ie(.62,.05,2.4,l,n,.82,2.05);h.rotation.x=.62,o(h);for(let d of[-1,1]){let u=Ie(.05,.16,2.4,l,n+d*.32,.9,2.05);u.rotation.x=.62,o(u)}return r}case"swing":{let l=oe.paint(3828392);for(let h of[.15,e-.15])for(let d of[-1,1]){let u=Wn(.045,.045,2.5,l,h,1.18,s+d*.45,8);u.rotation.x=d*.38,o(u)}let c=Wn(.05,.05,e-.2,l,n,2.35,s,8);c.rotation.z=Math.PI/2,o(c);for(let h of[e*.3,e*.7]){for(let d of[-.22,.22])o(Wn(.01,.01,1.75,oe.steel(),h+d,1.45,s,4));o(Ie(.5,.05,.22,oe.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[l,c,h,d]of[[n,.1,e-.2,.18],[n,t-.1,e-.2,.18],[.1,s,.18,t],[e-.1,s,.18,t]])o(Ie(h,.3,d,oe.lightWood(),l,.15,c));return o(Ie(e-.3,.12,t-.3,oe.sand(),n,.06,s)),o(Ie(.2,.18,.2,oe.paint(12730414),n-.6,.2,s+.3)),o(Wn(.12,.08,.16,oe.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Wn(1.1,1.1,.1,oe.paint(12730414),n,.25,s,32)),o(Wn(.08,.1,.9,oe.steel(),n,.7,s,10));for(let l=0;l<4;l++){let c=l*Math.PI/2,h=Ie(1.9,.04,.04,oe.paint(14196768),n,.95,s);h.rotation.y=c,o(h),o(Wn(.03,.03,.7,oe.paint(14196768),n+Math.cos(c)*.95,.6,s+Math.sin(c)*.95,6))}return r}case"busStop":{for(let l of[.15,e-.15])o(Ie(.08,2.4,.08,oe.iron(),l,1.2,.2));return o(Ie(e,.08,1.2,oe.iron(),n,2.42,.6)),o(Ie(e-.3,1.9,.03,oe.glass(),n,1.2,.18)),o(Ie(e-.6,.06,.4,oe.lightWood(),n,.48,.42)),o(Ie(.9,.6,.06,oe.paint(2775706),e-.6,2,.2)),r}case"counter":{let l=new me;return l.add(Ie(D,1.05,.6,oe.darkWood(),D/2,.52,.55)),l.add(Ie(D+.02,.05,.7,oe.stone(),D/2,1.07,.55)),l.add(Ie(D,.55,.02,oe.glass(),D/2,1.4,.4)),l.add(Ie(.04,.6,.04,oe.brass(),.04,1.4,.4)),fs(l,i,n,s)}case"deposits":{let l=new me;l.add(Ie(D-.02,2.1,.45,oe.steel(),D/2,1.05,.24));for(let c=0;c<9;c++)for(let h=0;h<4;h++){let d=.12+h*.3,u=.15+c*.22;l.add(Ie(.27,.19,.02,oe.paint(9081496),d+.14,u+.1,.475)),l.add(Ie(.03,.03,.02,oe.brass(),d+.14,u+.1,.49))}return fs(l,i,n,s)}case"plant":o(In([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],oe.paint(10115642),n,0,s,16));for(let l=0;l<4;l++){let c=new be(Ec(.32,i.col*3+l),bc(4090416));c.position.set(n+(a()-.5)*.3,.9+l*.22,s+(a()-.5)*.3),o(c)}return r;case"bed":{let l=new me;return l.add(Ie(e-.2,.35,t-.25,oe.wood(),n,.18,s+.05)),l.add(Ie(e-.3,.18,t-.35,oe.fabric(15262420),n,.44,s+.05)),l.add(Ie(e*.6,.06,t-.3,oe.fabric(6961738),n+e*.17,.55,s+.05)),l.add(Ie(.45,.14,t-.5,oe.fabric(16052456),.45,.6,s+.05)),l.add(Ie(.08,1,t-.25,oe.darkWood(),.12,.5,s+.05)),fs(l,i,n,s)}case"wardrobe":{let l=new me;l.add(Ie(D-.15,2,.6,oe.wood(),D/2,1,.36)),l.add(Ie(D-.05,.1,.68,oe.darkWood(),D/2,2.05,.36)),l.add(Ie(.02,1.8,.02,oe.darkWood(),D/2,1,.67));for(let c of[-1,1])l.add(Ie(.03,.12,.03,oe.brass(),D/2+c*.06,1.05,.68));return fs(l,i,n,s)}case"bookcase":{let l=new me;l.add(Ie(D-.15,2,.4,oe.darkWood(),D/2,1,.26));let c=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let d=.14;for(;d<D-.2;){let u=.04+a()*.05,f=.22+a()*.1;l.add(Ie(u-.005,f,.25,oe.fabric(c[Math.floor(a()*c.length)]),d+u/2,.12+h*.38+f/2,.36)),d+=u}}return fs(l,i,n,s)}case"table":{o(Ie(e-.3,.05,t-.3,oe.wood(),n,.76,s));for(let[l,c]of[[.25,.25],[e-.25,.25],[.25,t-.25],[e-.25,t-.25]])o(Ie(.06,.74,.06,oe.darkWood(),l,.37,c));for(let l=0;l<Math.max(2,i.cols);l++){let c=(l+.5)*e/Math.max(2,i.cols);for(let h of[.05,t-.05])o(Ie(.4,.05,.4,oe.darkWood(),c,.45,h)),o(Ie(.4,.5,.04,oe.darkWood(),c,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let l=new me,c=oe.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);l.add(Ie(e-.2,.42,.8,c,n,.21,.6)),l.add(Ie(e-.2,.5,.2,c,n,.65,.3));for(let h of[.15,e-.15])l.add(Ie(.18,.6,.8,c,h,.3,.6));return fs(l,i,n,s)}default:return null}}var ga=zt==="city",Nn=Jd(Zd(),$d),By=1280/18.5;var Mi=D*St,ms=new L(Mi/2,0,Mi/2),Sc=.22,sn=.18,$r=at-Sc,rn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Tn=(i,e,t)=>new L(i,e,t),gt=new Rr({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});gt.setPixelRatio(1);gt.shadowMap.enabled=!0;gt.shadowMap.type=tc;gt.toneMapping=nc;gt.outputColorSpace=cn;document.body.appendChild(gt.domElement);var Dn=new zi,cr=zt==="base";Dn.background=new Je(cr?789258:1709584);Dn.environment=new qs(gt).fromScene(new la,.04).texture;Dn.add(cr?new zr(15002868,4999234,1.25):new zr(13163775,5917236,.75));var yn=new na(cr?16774890:16774368,cr?2.6:4.2);{let i=tu(-11,7.5),e=cr?.45:1.6;yn.position.set(ms.x+i.x*e,cr?24:17.6,ms.z+i.y*e)}yn.target.position.copy(ms);yn.castShadow=!0;yn.shadow.mapSize.set(4096,4096);Object.assign(yn.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});yn.shadow.camera.updateProjectionMatrix();yn.shadow.bias=-3e-4;yn.shadow.normalBias=.025;yn.shadow.radius=2;Dn.add(yn,yn.target);var wc=new Map,Ln=(i,e)=>(wc.has(i)||wc.set(i,e()),wc.get(i)),Xt=(i,e)=>Ln(i,()=>new Ge(e)),de={trim:()=>Xt("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>Xt("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>Xt("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>Xt("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>Xt("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>Xt("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>Xt("rubber",{color:1842204,roughness:.9}),paint:()=>Xt("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>Ln("glass",()=>new Bn({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>Xt("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>Xt("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>Xt("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>Ln("screen"+i,()=>new Ge({map:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:ir(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,e)=>Ln(`wall_${i}_${e}`,()=>{let t=lu(i,e);return new Ge({map:t.map,normalMap:t.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>Ln("interiorFloor",()=>{let i=cu();return new Ge({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>Ln("roof",()=>{let i=hu();return new Ge({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>Ln("grating",()=>{let i=du();return new Ge({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>Ln("concrete",()=>{let i=fu();return new Ge({map:i.map,roughness:.95})}),container:i=>Ln("container_"+i,()=>{let e=uu(i==="orange"?3:9);return new Ge({map:e.map,normalMap:e.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>Ln("rock",()=>{let i=Or(5,[150,116,88]);return new Ge({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>Ln("baseRock"+i,()=>{let e=Or(11+i*7,[120,112,102]);return new Ge({normalMap:e.normalMap,color:6182736,roughness:.95})}),rockCut:i=>Ln("rockCut"+i,()=>{let e=Or(31+i*5,[92,86,80]);return new Ge({normalMap:e.normalMap,color:5722700,roughness:.98})})};function Yn(i,e,t,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:e,level:t,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function Le(i,e,t,n,s,r,o){let a=new be(new xt(i,e,t),n);return a.position.set(s,r,o),a}function Sn(i,e,t,n,s,r,o,a=16){let l=new be(new Lt(i,e,t,a),n);return l.position.set(s,r,o),l}function y2(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new xt(t,s.length(),t),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}function ar(i,e,t,n){let s=new L().subVectors(e,i),r=new be(new Lt(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Tn(0,1,0),s.normalize()),r}var zu=(i,e,t)=>(i*73856093^e*19349663^t*83492791)>>>0,Tc=(i,e,t)=>e>=0&&t>=0&&e<St&&t<St&&Nn.indoor[i][t][e]===1;function rt(i,e,t,n,s,r,o,a,l,c=sn){let h=r-s,d=a-o,u=n*at,f=i==="W"?new xt(c,d,h):new xt(h,d,c),m=i==="W"?e*D:e*D+(s+r)/2,x=i==="W"?t*D+(s+r)/2:t*D;f.translate(m,u+(o+a)/2,x);let p=f.attributes.position,g=f.attributes.uv;for(let _=0;_<p.count;_++){let y=i==="W"?p.getZ(_)-t*D:p.getX(_)-e*D;g.setXY(_,y/D,(p.getY(_)-u)/$r)}return new be(f,l)}function Uu(i,e,t,n,s){let r=zu(e,t,n)%3,o=(h,d)=>s==="inner"||Tc(n,h,d)?de.wall("inner",r%2):de.wall(s,r),a=o(e,t),l=i==="W"?o(e-1,t):o(e,t-1),c=de.trim();return i==="W"?[a,l,c,c,c,c]:[c,c,c,c,a,l]}var _2=i=>ga?i.style==="vault"?"vault":Mc(i.style)?"outer":"inner":"base";function Ac(i,e,t,n,s,r){if(ga&&s.type!=="barrier"){let d=Iu(i,e,t,n,s,r,{wallBox:rt,isIndoor:Tc,THICK:sn,PANEL_H:$r});if(s.type==="door"){let f=Math.min(2.1,r?.8:$r);lr.add(ku(i,e,t,n,(D-.92)/2,(D+.92)/2,f,_2(s)))}return Yn(d,i==="W"?rn.wallW:rn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new me,a=s.type,l=s.style,c=r?.8:$r,h=sn/2;if(a==="wall"||a==="door"||a==="window"){let d=Uu(i,e,t,n,l==="concrete"?"hab":l);if(a==="wall"||a==="window"&&r)o.add(rt(i,e,t,n,-h,D+h,0,c,d));else if(a==="door"&&s.gate){let{startOpen:u,endOpen:f,heavy:m,left:x,right:p,post:g}=M2(i,e,t,n,s),_=Math.min(s.gate.height-n*at,c),y=v2(n,s,r);u||o.add(rt(i,e,t,n,-h,0,0,c,d)),f||o.add(rt(i,e,t,n,D,D+h,0,c,d)),c>_+.01&&o.add(rt(i,e,t,n,u?0:-.001,f?D:D+.001,_,c,d));let v=m?de.yellow():de.orange(),T=Array(6).fill(v);u||o.add(rt(i,e,t,n,0,g,0,y,T,sn+.08)),f||o.add(rt(i,e,t,n,D-g,D,0,y,T,sn+.08)),c>_+.01&&o.add(rt(i,e,t,n,x-.001,p+.001,_,_+.12,T,sn+.08)),n===0&&o.add(rt(i,e,t,n,x,p,0,.03,Array(6).fill(de.darkSteel()),sn+.14)),lr.add(E2(i,e,t,n,x,p,y,m,s.gate.height))}else if(a==="door"){let f=Math.min(2.1,c),m=(D-.92)/2,x=(D+.92)/2;o.add(rt(i,e,t,n,-h,m,0,c,d)),o.add(rt(i,e,t,n,x,D+h,0,c,d)),c>f+.01&&o.add(rt(i,e,t,n,m,x,f,c,d));let p=[de.orange(),de.orange(),de.orange(),de.orange(),de.orange(),de.orange()];if(o.add(rt(i,e,t,n,m-.06,m,0,f,p,sn+.05)),o.add(rt(i,e,t,n,x,x+.06,0,f,p,sn+.05)),c>f+.01&&o.add(rt(i,e,t,n,m-.06,x+.06,f,f+.07,p,sn+.05)),o.add(rt(i,e,t,n,m,x,0,.03,[de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel(),de.darkSteel()],sn+.1)),lr.add(ku(i,e,t,n,m,x,f)),l!=="inner"&&!r){let _=(Tc(n,e,t)?-1:1)*(sn/2+.06),y=D/2,v=i==="W"?Le(.12,.07,.3,de.lightOn(),e*D+_,n*at+2.3,t*D+y):Le(.3,.07,.12,de.lightOn(),e*D+y,n*at+2.3,t*D+_);o.add(v)}}else{let x=(D-.82)/2,p=(D+.82)/2;o.add(rt(i,e,t,n,-h,x,0,c,d)),o.add(rt(i,e,t,n,p,D+h,0,c,d)),o.add(rt(i,e,t,n,x,p,0,.95,d)),o.add(rt(i,e,t,n,x,p,1.9,c,d));let g=Array(6).fill(de.trim());o.add(rt(i,e,t,n,x,p,.95-.05,.95,g,sn+.06)),o.add(rt(i,e,t,n,x,p,1.9,1.9+.05,g,sn+.04)),o.add(rt(i,e,t,n,x,x+.04,.95,1.9,g,sn+.03)),o.add(rt(i,e,t,n,p-.04,p,.95,1.9,g,sn+.03)),o.add(rt(i,e,t,n,x+.04,p-.04,.95,1.9,Array(6).fill(de.glass()),.03))}}else if(a==="rail"){let d=Array(6).fill(de.yellow());for(let u of[0,D])o.add(rt(i,e,t,n,u-.03,u+.03,0,1.05,d,.06));o.add(rt(i,e,t,n,0,D,1,1.06,d,.05)),o.add(rt(i,e,t,n,0,D,.52,.56,d,.04)),o.add(rt(i,e,t,n,0,D,0,.1,Array(6).fill(de.darkSteel()),.02))}else if(a==="parapet"){let d=Uu(i,e,t,n,l);o.add(rt(i,e,t,n,-h-.02,D+h+.02,-.02,.5,d,.22)),o.add(rt(i,e,t,n,-h-.04,D+h+.04,.5,.56,Array(6).fill(de.steel()),.28))}else if(a==="barrier"){let d=new en;d.moveTo(-.3,0),d.lineTo(.3,0),d.lineTo(.3,.08),d.lineTo(.1,.3),d.lineTo(.08,.82),d.lineTo(-.08,.82),d.lineTo(-.1,.3),d.lineTo(-.3,.08);let u=new gn(d,{depth:D-.05,bevelEnabled:!1});i==="W"?u.translate(0,0,.025):(u.rotateY(Math.PI/2),u.translate(.025,0,0));let f=new be(u,de.concrete());f.position.set(e*D,n*at,t*D),i==="N"&&f.position.set(e*D,n*at,t*D),o.add(f);let m=i==="W"?Le(.17,.06,D-.1,de.orange(),e*D,n*at+.62,t*D+D/2):Le(D-.1,.06,.17,de.orange(),e*D+D/2,n*at+.62,t*D);o.add(m)}return Yn(o,i==="W"?rn.wallW:rn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var lr=new me;function ku(i,e,t,n,s,r,o,a="base"){if(a!=="base"){let m=Lu(i,e,t,n,s,r,o,a,{wallBox:rt});return m.userData.door={orient:i,col:e,row:t,level:n},Yn(m,i==="W"?rn.doorW:rn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let l=new me,c=Array(6).fill(de.wall("cabin",0)),h=o-.01;l.add(rt(i,e,t,n,s-.02,r+.02,.01,h,c,.06));let d=Array(6).fill(de.orange()),u=Array(6).fill(de.darkSteel()),f=Array(6).fill(de.glass());return h>1.1&&l.add(rt(i,e,t,n,s,r,.98,1.06,d,.075)),h>1.9&&(l.add(rt(i,e,t,n,s+.36,s+.56,1.3,1.85,u,.075)),l.add(rt(i,e,t,n,s+.38,s+.54,1.32,1.83,f,.08))),l.add(rt(i,e,t,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),u,.085)),l.userData.door={orient:i,col:e,row:t,level:n},Yn(l,i==="W"?rn.doorW:rn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function v2(i,e,t){return t?Math.min(e.gate.height-i*at,.8):e.gate.height>(i+1)*at?at:Math.min(e.gate.height-i*at,$r)}function M2(i,e,t,n,s){let r=d=>!!(d&&d.gate&&d.gate.group===s.gate.group),o=i==="W"?Nn.wallW[n]:Nn.wallN[n],a=r(i==="W"?(o[t-1]||[])[e]:o[t][e-1]),l=r(i==="W"?(o[t+1]||[])[e]:o[t][e+1]),c=.1,h=s.gate.kind==="gate";return{startOpen:a,endOpen:l,heavy:h,post:c,left:a?0:c,right:l?D:D-c,signature:`gate:${s.gate.kind}:${s.gate.height}:${a}:${l}`}}function E2(i,e,t,n,s,r,o,a,l=o){let c=new me,h=new me,d=n*at+o;h.position.y=d,h.userData.rollUp={bottom:n*at,top:d,gateHeight:l};let u=new me;u.position.y=-d,h.add(u),c.add(h);let f=o-.01,m=Array(6).fill(a?de.wall("hab",1):de.wall("cabin",0)),x=Array(6).fill(de.darkSteel());u.add(rt(i,e,t,n,s-.005,r+.005,.01,f,m,.07));let p=Math.max(3,Math.round(f/.5));for(let g=1;g<p;g++){let _=.01+(f-.01)*g/p;u.add(rt(i,e,t,n,s,r,_-.015,_+.015,x,.085))}if(a&&f>.6&&n===0){let _=Array(6).fill(de.yellow()),y=Array(6).fill(de.darkSteel());for(let v=0;v<4;v++){let T=s+(r-s)*v/4,C=s+(r-s)*(v+1)/4;u.add(rt(i,e,t,n,T,C,.04,.3,(v+e+t)%2?_:y,.08))}}return c.userData.door={orient:i,col:e,row:t,level:n,rollUp:!0},Yn(c,i==="W"?rn.doorW:rn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function Fu(i,e,t,n){let s=new me,r=i*D+D/2,o=e*D+D/2,a=t*at;if(n===Ut.deck)s.add(Le(D,.06,D,de.grating(),r,a-.03,o)),s.add(Le(.12,.22,D,de.orange(),i*D+.06,a-.17,o)),s.add(Le(D,.18,.1,de.orange(),r,a-.15,e*D+.05));else{let l=ga&&Nn.floorStyle?Nn.floorStyle[t][e][i]:null,c=l?Pu(l):n===Ut.roof?de.roof():de.interiorFloor(),h=l?oe.slabEdge():de.slabEdge(),d=l?oe.ceiling():de.ceiling(),u=Le(D,Sc,D,[h,h,c,d,h,h],r,a-Sc/2,o);s.add(u)}return Yn(s,rn.floor,t,{biasCol:-1e-4,biasRow:-1e-4})}function Ou(i){let e=new me,t=12,n=i.count*D,s=at,r=i.level*at,o=i.col*D+(i.dirCol<0?D:0),a=i.row*D+(i.dirRow<0?D:0),l=Tn(i.dirCol,0,i.dirRow),c=Tn(-i.dirRow,0,i.dirCol),h=i.dirCol!==0?Tn(0,0,i.row*D+D/2):Tn(i.col*D+D/2,0,0),d=D*.86,u=(x,p,g)=>{let _=Tn(o,r+p,a).addScaledVector(l,x).addScaledVector(c,g);return i.dirCol!==0?_.z=h.z+g:_.x=h.x+g,_},f=i.style==="classic",m=f?Nu():null;for(let x=0;x<t;x++){let p=x/t*n,g=(x+1)/t*n,_=(x+1)/t*s,y=u((p+g)/2,0,0),v=g-p;if(f){let T=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Le(...T,m.body,y.x,r+_/2,y.z));let C=i.dirCol!==0?[v+.02,.035,d]:[d,.035,v+.02];e.add(Le(...C,m.tread,y.x,r+_+.017,y.z))}else if(i.style==="hab"){let T=i.dirCol!==0?[v,_,d]:[d,_,v];e.add(Le(...T,de.slabEdge(),y.x,r+_/2,y.z));let C=i.dirCol!==0?[v,.03,d]:[d,.03,v];e.add(Le(...C,de.darkSteel(),y.x,r+_+.015,y.z));let I=i.dirCol!==0?[.04,.035,d]:[d,.035,.04],k=u(p+.02,0,0);e.add(Le(...I,de.yellow(),k.x,r+_+.017,k.z))}else{let T=i.dirCol!==0?[v*.9,.04,d]:[d,.04,v*.9];e.add(Le(...T,de.grating(),y.x,r+_-.02,y.z))}}for(let x of[-d/2-.04,d/2+.04]){i.style!=="hab"&&e.add(y2(u(0,0,x),u(n,s,x),.09,de.orange()));let p=u(.05,.95,x),g=u(n,s+.95,x);if(!((i.style==="hab"||f)&&x<0)){if(e.add(ar(p,g,f?.03:.025,f?m.handrail:de.yellow())),f){for(let _=.1;_<n;_+=.2)e.add(ar(u(_,_/n*s,x),u(_,_/n*s+.93,x),.009,m.rail));continue}for(let _=0;_<=i.count;_++){let y=Math.min(n-.05,Math.max(.05,_*D));e.add(ar(u(y,y/n*s,x),u(y,y/n*s+.95,x),.022,de.yellow()))}}}return Yn(e,rn.floor,i.level)}function b2(i,e){let t=new me,n=i.level*at,s=Math.min(n+i.height,e);if(s<=n+.05)return t;let r=sn/2+.1,o=a=>i.side==="W"?[Tn(i.col*D+r,n,i.row*D+D/2+a),Tn(i.col*D+r,s,i.row*D+D/2+a)]:[Tn(i.col*D+D/2+a,n,i.row*D+r),Tn(i.col*D+D/2+a,s,i.row*D+r)];for(let a of[-.22,.22]){let[l,c]=o(a);t.add(ar(l,c,.025,de.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[l]=o(-.22),[c]=o(.22);l.y=c.y=a,t.add(ar(l,c,.016,de.steel()))}return Yn(t,rn.floor,i.level,{auto:!0})}function w2(i){return Tn(i.col*D,i.level*at,i.row*D)}var S2=new ut().makeTranslation(D*St,0,0).multiply(new ut().makeRotationY(-Math.PI/2));function xa(i,e){if(i.source){let h=xa({...i.source,layer:i.layer},e);if(!h)return h;let d=new me;d.matrixAutoUpdate=!1;for(let u=0;u<i.turns;u++)d.matrix.premultiply(S2);return d.add(h),d.updateMatrixWorld(!0),d}let t=new me,n=w2(i),s=i.cols*D,r=i.rows*D,o=s/2,a=r/2,l=ft(zu(i.col,i.row,i.level)%1e5+7),c=h=>(t.add(h),h);if(ga){let h=Du(i);if(h)return t.add(h),t.position.copy(n),Yn(t,rn.object,i.level)}if(yu.has(i.kind))return t.add(_u(i)),t.position.copy(n),Yn(t,rn.object,i.level);if(bu.has(i.kind))return t.add(wu(i)),t.position.copy(n),Yn(t,rn.object,i.level);switch(i.kind){case"console":{c(Le(1,.75,.6,de.trim(),o,.375,a-.15));let h=c(Le(1,.05,.5,de.screen(Math.floor(l()*3)),o,.85,a-.05));h.rotation.x=-.6,c(Le(1,.5,.08,de.darkSteel(),o,1.1,a-.42));break}case"locker":c(Le(.9,1.9,.5,de.wall("cabin",0),o,.95,a-.3)),c(Le(.02,1.7,.02,de.darkSteel(),o,.95,a-.04));break;case"cabinet":c(Le(.9,1.2,.6,de.trim(),o,.6,a)),c(Le(.7,.08,.02,de.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])c(Le(s-.2,.08,r-.3,de.trim(),o,h,a)),c(Le(s-.3,.12,r-.4,Xt("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,d]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])c(Le(.05,1.6,.05,de.steel(),h,.8,d));break;case"labTable":c(Le(s-.2,.06,r-.3,de.white(),o,.9,a));for(let h of[.2,s-.2])c(Le(.06,.9,r-.4,de.trim(),h,.45,a));c(Le(.5,.35,.4,de.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)c(Sn(.03,.03,.22,Xt("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":c(Le(s-.3,.05,.7,de.white(),o,.75,a-.1)),c(Le(s-.4,.7,.05,de.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])c(Le(.55,.35,.04,de.screen(Math.floor(l()*3)+1),h,1.05,a-.3)),c(Le(.06,.2,.06,de.darkSteel(),h,.85,a-.3));break;case"rack":c(Le(.7,2,.9,de.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)c(Le(.02,.02,.02,Xt("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+l()*.6));break;case"crate":{let h=1+(l()<.45?1:0),d=l()<.5?de.wall("cabin",2):Xt("crateGrey",{color:10132630,roughness:.55,metalness:.2}),u=0;for(let f=0;f<h;f++){let m=f?.65:.95,x=f?.5:.75,p=(l()-.5)*.4,g=new me;g.add(Le(m,x,m*.8,d,0,x/2,0));for(let _ of[-1,1])g.add(Le(m+.02,.08,.06,de.orange(),0,x*.5,_*m*.3));g.add(Le(m+.02,.04,m*.82,de.trim(),0,x-.02,0)),g.position.set(o+(l()-.5)*.1,u,a+(l()-.5)*.1),g.rotation.y=p,c(g),u+=x}break}case"barrels":for(let h=0;h<3;h++){let d=[3104394,9058844,5923400][h];c(Sn(.29,.29,.9,Xt("barrel"+h,{color:d,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":c(Le(s-.2,.9,r-.25,de.white(),o,.45,a));for(let h=0;h<i.cols;h++)c(Sn(.38,.38,.05,de.darkSteel(),.62+h*D,.92,a,20)).scale.set(1,1,1);break;case"antenna":c(Le(.5,.15,.5,de.trim(),o,.07,a)),c(Sn(.05,.07,3.6,de.steel(),o,1.8,a));for(let h of[2.2,3])c(Le(.9,.04,.04,de.steel(),o,h,a));c(Le(.06,.06,.06,Xt("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let d=c(Le(s-.3,.05,r/2-.15,Xt("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));d.rotation.x=-.45,c(Le(.06,.6,.06,de.steel(),o,.3,h*r/2+r/4))}break}case"dish":c(Sn(.08,.12,.8,de.steel(),o,.4,a));{let h=c(new be(new Pn(.6,20,10,0,Math.PI*2,0,.9),de.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=Ln("dishMat",()=>new Ge({color:14211798,roughness:.4,side:$t}))}break;case"pylon":{let h=at-.24;c(Le(.32,h,.32,de.orange(),o,h/2,a)),c(Le(.6,.06,.6,de.darkSteel(),o,.03,a)),c(Le(.5,.12,.5,de.orange(),o,h-.06,a));break}case"searchlight":c(Le(.5,.3,.5,de.trim(),o,.15,a)),c(Le(.12,.5,.12,de.darkSteel(),o,.55,a));{let h=c(Sn(.24,.3,.45,de.darkSteel(),o,.95,a));h.rotation.x=1.1;let d=c(Sn(.22,.22,.03,de.lightOn(),o,1.02,a+.2));d.rotation.x=1.1}break;case"container":{let h=de.container(i.color),d=c(Le(s-.15,2.5,r-.15,[h,h,de.container(i.color),de.trim(),h,h],o,1.25,a));for(let u of[.12,s-.12])for(let f of[.12,r-.12])for(let m of[.1,2.4])c(Le(.18,.2,.18,de.darkSteel(),u,m,f));for(let u of[o-.35,o+.35])c(Le(.04,2.3,.04,de.steel(),u,1.25,r-.06));break}case"truck":{let h=ru();h.position.set(o,0,(r-su.length)/2),c(h);break}case"rover":{let h=de.white();c(Le(s-.4,.6,r-.3,h,o,.95,a)),c(Le(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),c(Le(s-.6,.5,.05,de.glass(),o,1.7,a+r/2-.33));for(let d of[-1,1])c(Le(.05,.4,1,de.glass(),o+d*(s/2-.24),1.7,a+r/2-1));c(Le(s-.4,.06,r-.3,de.orange(),o,1.27,a)),c(Le(s-.6,.12,1.6,de.trim(),o,1.31,a-.6));for(let d of[-1,1])for(let u of[.55,r/2,r-.55]){let f=c(Sn(.42,.42,.34,de.rubber(),o+d*(s/2-.2),.42,u,18));f.rotation.z=Math.PI/2;let m=c(Sn(.18,.18,.36,de.steel(),o+d*(s/2-.2),.42,u,10));m.rotation.z=Math.PI/2}c(Sn(.02,.02,1.2,de.steel(),o-.6,2.4,a+r/2-1.3)),c(Le(.25,.12,.08,de.lightOn(),o-.6,1,r-.12)),c(Le(.25,.12,.08,de.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let u of[.6,r-.6])c(Le(s-.5,.6,.25,de.darkSteel(),o,.3,u));let h=c(Sn(1,1,r-.3,de.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let d=c(Sn(1.02,1.02,.25,de.orange(),o,1.3,a,28));d.rotation.x=Math.PI/2;for(let u of[.15,r-.15]){let f=c(new be(new Pn(1,24,12),de.white()));f.position.set(o,1.3,u),f.scale.set(1,1,.25)}c(ar(Tn(o+.6,.3,r-.4),Tn(o+.6,2.2,r-.4),.06,de.steel()));break}case"generator":c(Le(s-.3,1.4,r-.4,Xt("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)c(Le(s-.6,.04,.02,de.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])c(Sn(.08,.08,.9,de.darkSteel(),h,1.8,a-.3));c(Le(s-.2,.08,r-.3,de.yellow(),o,1.42,a));break;case"lamp":c(Le(.4,.15,.4,de.concrete(),o,.07,a)),c(Sn(.06,.08,4.2,de.darkSteel(),o,2.1,a)),c(Le(.7,.08,.1,de.darkSteel(),o+.3,4.15,a)),c(Le(.36,.1,.24,de.trim(),o+.6,4.1,a)),c(Le(.3,.02,.2,de.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*D*.55,d=dc(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),u=c(new be(d,de.rock()));u.position.set(o,h*.18,a),u.rotation.y=l()*6;break}case"tiltrotor":{let h=ou();i.layer&&[...h.children].forEach(d=>{d.name!==i.layer&&h.remove(d)}),h.rotation.y=-Math.PI/2,h.position.set(8*D-.006,0,2*D+.006),c(h);break}case"car":{let h=ua[i.type]||ua.suv,d=new me,u=au({type:i.type,color:i.color});u.position.z=-h.length/2,d.add(u),d.position.set(o,0,a),i.cols>i.rows?d.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(d.rotation.y=Math.PI),c(d);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,d=i.bottom||0,u=i.variant||0,f=i.concrete?de.concrete():de.baseRock(u),m=i.concrete?de.concrete():de.rockCut(u),x=c(Le(D+.014,h-d,D+.014,[f,f,m,f,f,f],o-.01,(h+d)/2,a-.01));x.userData.noShadowReceive=!0;let p=x.geometry.attributes.position,g=x.geometry.attributes.uv,_=x.geometry.attributes.normal;for(let y=0;y<p.count;y++){let v=i.col*D+o+p.getX(y),T=(h+d)/2+p.getY(y),C=i.row*D+a+p.getZ(y);Math.abs(_.getY(y))>.5?g.setXY(y,v/8,C/8):Math.abs(_.getX(y))>.5?g.setXY(y,C/8,T/8):g.setXY(y,v/8,T/8)}break}case"liftPlatform":{c(Le(s-.04,.03,r-.04,de.darkSteel(),o,.06,a));for(let u=2.5;u<s-.1;u+=2.5)c(Le(.03,.035,r-.3,de.rubber(),u,.062,a));for(let u=2.5;u<r-.1;u+=2.5)c(Le(s-.3,.035,.03,de.rubber(),o,.062,u));let h=.5,d=.22;for(let u=0;u<s-1e-6;u+=h){let f=Math.round(u/h)%2?de.rubber():de.yellow(),m=Math.min(h,s-u);c(Le(m,.04,d,f,u+m/2,.065,d/2+.03)),c(Le(m,.04,d,f,u+m/2,.065,r-d/2-.03))}for(let u=d+.03;u<r-d-.03-1e-6;u+=h){let f=Math.round(u/h)%2?de.yellow():de.rubber(),m=Math.min(h,r-d-.03-u);c(Le(d,.04,m,f,d/2+.03,.065,u+m/2)),c(Le(d,.04,m,f,s-d/2-.03,.065,u+m/2))}break}case"paint":c(Le(.1,.012,r-.12,de.paint(),.06,.006,a));break;case"ladder":return b2(i,(e+1)*at+.95);case"towerLeg":return null;default:c(Le(s*.8,.8,r*.8,de.trim(),o,.4,a))}return t.position.copy(n),Yn(t,rn.object,i.level)}var Gy=Mi+4,Vy=Nn.concrete,Wy={tracks:[[[5.5*D,15.5*D],[7*D,13*D],[8.5*D,12.2*D],[12*D,12.4*D],[16*D,13.2*D],[21*D,12.5*D],[24*D,12*D]],[[9*D,16.5*D],[9.5*D,20*D],[10*D,24*D]]],lines:[{from:[1.6*D,11.2*D],to:[12.3*D,11.2*D]},{from:[12.3*D,1.6*D],to:[12.3*D,11.2*D]},{from:[14.5*D,3.3*D],to:[14.5*D,12.5*D]},{from:[14.5*D,12.5*D],to:[20.5*D,12.5*D]}],hazards:[[5.6*D,10.15*D,7.4*D,10.45*D],[11.15*D,5.6*D,11.45*D,7.4*D],[16.6*D,12.05*D,18.4*D,12.35*D]],pads:[[4.6*D,19*D,3.2*D]],stains:[[8.5*D,14*D,1.4],[13.5*D,2.5*D,1],[17*D,7*D,1.2],[4*D,18*D,.8],[21.5*D,7.8*D,.9]]};function Hu(){return lr}function Bu(){return lr=new me,lr}function Vu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new It,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Gu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=Gu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Gu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ht(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Wu(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){t.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new it(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&A2(o);let l=o.attributes.position.count,c=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:l,materialIndex:0}];for(let h of c){let d=r[h.materialIndex||0];if(!d||!d.visible)continue;let u=Math.min(h.count,l-h.start);if(u<=0)continue;let f=c.length===1?o:T2(o,h.start,u),m=!!d.vertexColors&&!!f.attributes.color;!m&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${d.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${m?1:0}`;e.has(x)||e.set(x,{material:d,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),e.get(x).geometries.push(f)}c.length>1&&o.dispose()});let n=new me;for(let s of e.values()){let r=Vu(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new be(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of t)n.attach(s);return n}function T2(i,e,t){let n=new It;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Ht(r.array.slice(e*o,(e+t)*o),o,r.normalized))}return n}function A2(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,l=n[o];n[o]=n[a],n[a]=l}e.needsUpdate=!0}}var Qu=61,R2=35,hr=Qu/(D*Math.SQRT1_2),jr=Math.asin(R2/Qu),C2=hr*Math.cos(jr),P2=hr*Math.sin(jr),va=new ve(Math.SQRT1_2,Math.SQRT1_2),un=new Ys(-1,1,1,-1,1,300);un.position.set(ms.x+va.x*Math.cos(jr)*120,Math.sin(jr)*120,ms.z+va.y*Math.cos(jr)*120);un.lookAt(ms);un.updateMatrixWorld(!0);var Xu=new L(0,0,0).applyMatrix4(un.matrixWorldInverse),Yu=new L(va.x,0,va.y),qu=new L(0,1,0),I2=new ut().makeTranslation(D*St,0,0).multiply(new ut().makeRotationY(-Math.PI/2)),ci=new me;ci.matrixAutoUpdate=!1;Dn.add(ci);var ef=[],Qr=[],gs=null,Zu=0,Ei=tn-1,xs=!1,Tt={x:0,y:0,width:1,height:1,ratio:1},Jr=!1,Kr={buildMs:0,drawCalls:0,triangles:0,proxies:0};gt.domElement.style.display="none";gt.shadowMap.autoUpdate=!1;gt.autoClear=!1;gt.localClippingEnabled=!1;{let i=Mi/2+2;Object.assign(yn.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:140}),yn.shadow.camera.updateProjectionMatrix(),yn.shadow.mapSize.set(4096,4096)}var L2=()=>new Promise(i=>setTimeout(i,0));function $u(i,e,t){let n=e*at;if(n>=i.height-1e-6)return null;let s=Math.min(i.height,t?n+.8:n+at);return xa({...i,bottom:n,top:s},tn-1)}async function N2(i,e){let t=performance.now(),n=new Map;i.forEach((c,h)=>n.set(`${c[0]}|${c[1]}|${c[2]}|${c[3]===0?"W":"N"}`,h));let s=new me,r=new be(new ki(Mi+40,Mi+40),new Ge({color:1315343,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(Mi/2,-.03,Mi/2),r.receiveShadow=!0,s.add(r);let o=[];for(let c=0;c<St;c++)for(let h=0;h<St;h++)Nn.floor[0][c][h]===Ut.interior&&o.push([h,c]);let a=new Zs(new xt(D+.004,.04,D+.004),de.interiorFloor(),o.length),l=new ut;o.forEach(([c,h],d)=>a.setMatrixAt(d,l.makeTranslation((c+.5)*D,.025,(h+.5)*D))),a.receiveShadow=!0,s.add(a),Hr(s,.28),ci.add(s);for(let c=0;c<tn;c++){let h=new me,d=new me,u=new me,f=new me,m=new me;for(let p=0;p<=St;p++)for(let g=0;g<=St;g++){for(let _ of["W","N"]){let y=(_==="W"?Nn.wallW:Nn.wallN)[c][p][g];if(!y||!y.type||y.type==="hull")continue;let v=y.type==="wall"||y.type==="door"||y.type==="window";for(let T of v?[!1,!0]:[!1]){Bu();let C=Ac(_,g,p,c,y,T);(T?d:h).add(C),v||d.add(Ac(_,g,p,c,y,!1));let I=Hu(),k=n.get(`${g}|${p}|${c}|${_}`);y.type==="door"&&k!==void 0&&I.children.length&&(Qr[k]||(Qr[k]={along:_==="W"?new L(0,0,1):new L(1,0,0),level:c,rollUp:!!y.gate}),Qr[k][T?"cut":"full"]=I,Hr(I,.28),ci.add(I))}}if(c>0&&p<St&&g<St){let _=Nn.floor[c][p][g];(_===Ut.interior||_===Ut.roof||_===Ut.deck)&&m.add(Fu(g,p,c,_))}}for(let p of Nn.stairs)p.level===c&&m.add(Ou(p));for(let p of Nn.objects){if(p.kind==="rockFill"){let _=$u(p,c,!1),y=$u(p,c,!0);_&&u.add(_),y&&f.add(y);continue}if(p.level!==c)continue;let g=xa(p,tn-1);g&&m.add(g)}let x={wallsFull:h,wallsCut:d,rockFull:u,rockCut:f,objects:m};for(let p of Object.keys(x)){Hr(x[p],.28);let g=Wu(x[p]);g.name=`${p}${c}`,x[p]=g,ci.add(g)}ef[c]=x,e&&e((c+1)/tn),await L2()}Kr.buildMs=Math.round(performance.now()-t)}function ya(){for(let i=0;i<tn;i++){let e=ef[i];if(!e)continue;let t=i<=Ei,n=xs&&i===Ei;e.wallsFull.visible=t&&!n,e.wallsCut.visible=t&&n,e.rockFull.visible=t&&!n,e.rockCut.visible=t&&n,e.objects.visible=t}Qr.forEach(i=>{if(!i)return;let e=i.level<=Ei,t=xs&&i.level===Ei;i.full&&(i.full.visible=e&&!t),i.cut&&(i.cut.visible=e&&t)}),gt.shadowMap.needsUpdate=!0}function _a(){let i=Xu.x+(Tt.x-gs.origin[0])/hr,e=Xu.y-(Tt.y-gs.origin[1])/hr;un.left=i,un.right=i+Tt.width/hr,un.top=e,un.bottom=e-Tt.height/hr,un.updateProjectionMatrix()}var Rc=new zi,D2="void main() { gl_Position = vec4(position, 1.0); }",U2="void main() { gl_FragColor = vec4(0.0); }",k2=new On({vertexShader:D2,fragmentShader:U2,colorWrite:!1,depthWrite:!0,depthTest:!0,side:$t}),Ju=[];function z2(i,e){let t=Ju[i];if(!t||t.userData.quads<e){t&&(Rc.remove(t),t.geometry.dispose()),e=Math.ceil(e/16)*16;let n=new It;n.setAttribute("position",new Ht(new Float32Array(e*4*3),3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+2,r*4+1,r*4+1,r*4+2,r*4+3);n.setIndex(s),t=new be(n,k2),t.frustumCulled=!1,t.userData.quads=e,Ju[i]=t,Rc.add(t)}return t}var F2=new L;function Cc(i){return F2.copy(i).project(un).z}var Pc=i=>(i-Tt.x)/Tt.width*2-1,Ic=i=>1-(i-Tt.y)/Tt.height*2;function Ku(i,e,t,n,s,r,o,a){[[t,s,o],[n,s,o],[t,r,a],[n,r,a]].forEach(([c,h,d],u)=>{let f=(e*4+u)*3;i[f]=Pc(c),i[f+1]=Ic(h),i[f+2]=d})}var ju=new ia;function O2(i,e,t){ju.setFromCamera(new ve(Pc(i),Ic(e)),un);let n=ju.ray,s=(t-n.origin.y)/n.direction.y;return Cc(n.origin.clone().addScaledVector(n.direction,s))}function H2(i,e,t){let s=new L(t.foot[0]*D,t.foot[2],t.foot[1]*D).applyMatrix4(ci.matrix).addScaledVector(Yu,t.pull),r=a=>a<=t.footY?Cc(s.clone().addScaledVector(qu,(t.footY-a)/C2)):Cc(s.clone().addScaledVector(Yu,(a-t.footY)/P2).addScaledVector(qu,.02)),o=Math.max(t.y0,Math.min(t.y1,t.footY));Ku(i,e,t.x0,t.x1,t.y0,o,r(t.y0),r(o)),Ku(i,e+1,t.x0,t.x1,o,t.y1,r(o),r(t.y1))}var tf={supported:zt==="base",canvas:gt.domElement,stats:Kr,get ready(){return Jr},async init(i){return gs=i.field,await N2(i.doors||[],i.onProgress),ya(),Jr=!0,tf},setViewport(i,e,t,n,s){let r=t!==Tt.width||n!==Tt.height||s!==Tt.ratio;Tt={x:i,y:e,width:t,height:n,ratio:s},r&&(gt.setPixelRatio(s),gt.setSize(t,n))},setTurns(i){Zu=(i%4+4)%4,ci.matrix.identity();for(let e=0;e<Zu;e++)ci.matrix.premultiply(I2);ci.matrixWorldNeedsUpdate=!0,gt.shadowMap.needsUpdate=!0},setLevel(i,e){i===Ei&&!!e===xs||(Ei=i,xs=!!e,ya())},setDoor(i,e,t){let n=Qr[i];if(n)for(let s of[n.full,n.cut])s&&(n.rollUp?s.traverse(r=>{let o=r.userData.rollUp;if(!o)return;let a=e*o.gateHeight;r.scale.y=Math.max(.002,(o.top-Math.max(o.bottom,a))/(o.top-o.bottom))}):s.position.copy(n.along).multiplyScalar(e*t))},render(){Jr&&(_a(),gt.setClearColor(Dn.background||0,1),gt.clear(!0,!0,!0),gt.render(Dn,un),Kr.drawCalls=gt.info.render.calls,Kr.triangles=gt.info.render.triangles)},renderOccluders(i,e){if(!Jr)return;_a(),gt.setClearColor(0,0),gt.clear(!0,!0,!0);let t=i||[],n=z2(0,1+t.length*2),s=n.geometry.attributes.position.array,r=e+.06,o=Tt.x,a=Tt.x+Tt.width,l=Tt.y,c=Tt.y+Tt.height;[[o,l],[a,l],[o,c],[a,c]].forEach(([u,f],m)=>{s[m*3]=Pc(u),s[m*3+1]=Ic(f),s[m*3+2]=O2(u,f,r)}),t.forEach((u,f)=>H2(s,1+f*2,u)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.setDrawRange(0,(1+t.length*2)*6);let d=Dn.background;gt.render(Rc,un),Dn.background=null,gt.render(Dn,un),Dn.background=d,Kr.proxies=t.length},pixelOf(i,e,t){_a();let n=new L(i*D,t||0,e*D).applyMatrix4(ci.matrix).project(un);return{x:Tt.x+(n.x+1)/2*Tt.width,y:Tt.y+(1-n.y)/2*Tt.height}},snapshot(i){if(!Jr)return null;let e=Math.round(i*gs.height/gs.width),t={...Tt},n=Ei,s=xs;Tt={x:0,y:0,width:gs.width,height:gs.height,ratio:1},Ei=tn-1,xs=!1,ya(),_a();let r=new jn(i,e,{samples:4,colorSpace:cn});gt.setRenderTarget(r),gt.setClearColor(1315343,1),gt.clear(!0,!0,!0),gt.render(Dn,un);let o=new Uint8Array(i*e*4);gt.readRenderTargetPixels(r,0,0,i,e,o),gt.setRenderTarget(null),r.dispose(),Tt=t,Ei=n,xs=s,ya();let a=document.createElement("canvas");a.width=i,a.height=e;let l=a.getContext("2d"),c=l.createImageData(i,e);for(let h=0;h<e;h++)c.data.set(o.subarray((e-1-h)*i*4,(e-h)*i*4),h*i*4);return l.putImageData(c,0,0),a}};window.Map3D=tf;})();
