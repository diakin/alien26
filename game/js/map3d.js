// Собрано tools/render/build_map3d.sh из tools/render/map3d.js (three.js 0.162.0). Не править вручную.
(()=>{var Ul="162";var wd=0,mc=1,Sd=2;var $h=1,Fl=2,jn=3,xi=0,$e=1,Fe=2,pi=0,ws=1,Wa=2,gc=3,xc=4,Td=5,Oi=100,Ad=101,Rd=102,_c=103,yc=104,Cd=200,Pd=201,Id=202,Ld=203,Xa=204,Ya=205,Dd=206,Nd=207,Ud=208,Fd=209,Od=210,zd=211,Bd=212,Hd=213,kd=214,Gd=0,Vd=1,Wd=2,lo=3,Xd=4,Yd=5,qd=6,Zd=7,Jh=0,$d=1,Jd=2,mi=0,Kd=1,Qd=2,jd=3,Ol=4,tf=5,ef=6,nf=7;var Kh=300,As=301,Rs=302,qa=303,Za=304,zo=306,Gi=1e3,ke=1001,$a=1002,He=1003,vc=1004;var Zs=1005;var rn=1006,oa=1007;var Bi=1008;var gi=1009,sf=1010,rf=1011,zl=1012,Qh=1013,fi=1014,Vn=1015,ar=1016,jh=1017,tu=1018,Hi=1020,of=1021,Dn=1023,af=1024,lf=1025,ki=1026,Cs=1027,eu=1028,nu=1029,cf=1030,iu=1031,su=1033,aa=33776,la=33777,ca=33778,ha=33779,Mc=35840,bc=35841,Ec=35842,wc=35843,ru=36196,Sc=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Nc=37815,Uc=37816,Fc=37817,Oc=37818,zc=37819,Bc=37820,Hc=37821,ua=36492,kc=36494,Gc=36495,hf=36283,Vc=36284,Wc=36285,Xc=36286;var co=2300,ho=2301,da=2302,Yc=2400,qc=2401,Zc=2402;var uf=3200,ou=3201,au=0,df=1,di="",Ze="srgb",bi="srgb-linear",Bl="display-p3",Bo="display-p3-linear",uo="linear",he="srgb",fo="rec709",po="p3";var is=7680;var $c=519,ff=512,pf=513,mf=514,lu=515,gf=516,xf=517,_f=518,yf=519,Jc=35044;var Kc="300 es",Ja=1035,ti=2e3,mo=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fa=Math.PI/180,Ka=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function vf(i,t){return(i%t+t)%t}function pa(i,t,e){return(1-e)*i+e*t}function Qc(i){return(i&i-1)===0&&i!==0}function Qa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],_=s[4],b=s[7],L=s[2],C=s[5],P=s[8];return r[0]=o*x+a*y+l*L,r[3]=o*m+a*_+l*C,r[6]=o*g+a*b+l*P,r[1]=c*x+h*y+u*L,r[4]=c*m+h*_+u*C,r[7]=c*g+h*b+u*P,r[2]=d*x+f*y+p*L,r[5]=d*m+f*_+p*C,r[8]=d*g+f*b+p*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ma=new $t;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){let i=go("canvas");return i.style.display="block",i}var jc={};function bf(i){i in jc||(jc[i]=!0,console.warn(i))}var th=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[bi]:{transfer:uo,primaries:fo,toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:he,primaries:fo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Bo]:{transfer:uo,primaries:po,toReference:i=>i.applyMatrix3(eh),fromReference:i=>i.applyMatrix3(th)},[Bl]:{transfer:he,primaries:po,toReference:i=>i.convertSRGBToLinear().applyMatrix3(eh),fromReference:i=>i.applyMatrix3(th).convertLinearToSRGB()}},Ef=new Set([bi,Bo]),oe={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ef.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Fr[t].toReference,s=Fr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Fr[i].primaries},getTransfer:function(i){return i===di?uo:Fr[i].transfer}};function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,xo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=go("canvas")),ss.width=t.width,ss.height=t.height;let n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sf=0,an=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ke,s=ke,r=rn,o=Bi,a=Dn,l=gi,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=zs(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Kh;an.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(f+1)/2,L=(g+1)/2,C=(h+d)/4,P=(u+x)/4,v=(p+m)/4;return _>b&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=P/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=v/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let m=1-a,g=l*d+c*f+h*p+u*x,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let L=Math.sqrt(_),C=Math.atan2(L,g*y);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let b=a*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+p*b,u=u*m+x*b,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_a=new N,nh=new Wn,Un=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),zr.subVectors(this.max,Js),rs.subVectors(t.a,Js),os.subVectors(t.b,Js),as.subVectors(t.c,Js),oi.subVectors(os,rs),ai.subVectors(as,os),Pi.subVectors(rs,as);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!ya(e,rs,os,as,zr)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,rs,os,as,zr))?!1:(Br.crossVectors(oi,ai),e=[Br.x,Br.y,Br.z],ya(e,rs,os,as,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Cn=new N,Or=new Un,rs=new N,os=new N,as=new N,oi=new N,ai=new N,Pi=new N,Js=new N,zr=new N,Br=new N,Ii=new N;function ya(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Tf=new Un,Ks=new N,va=new N,Vi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(va)),this.expandByPoint(Ks.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new N,Ma=new N,Hr=new N,li=new N,ba=new N,kr=new N,Ea=new N,vo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ma.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=li.dot(this.direction),l=-li.dot(Hr),c=li.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(Hr,d),f}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),kr.subVectors(n,t),Ea.crossVectors(ba,kr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);let l=a*this.direction.dot(kr.crossVectors(li,kr));if(l<0)return null;let c=a*this.direction.dot(ba.cross(li));if(c<0||l+c>o)return null;let h=-a*li.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(n,un),ci.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(n,un)),ci.normalize(),Gr.crossVectors(un,ci),s[0]=ci.x,s[4]=Gr.x,s[8]=un.x,s[1]=ci.y,s[5]=Gr.y,s[9]=un.y,s[2]=ci.z,s[6]=Gr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],_=n[7],b=n[11],L=n[15],C=s[0],P=s[4],v=s[8],z=s[12],M=s[1],S=s[5],rt=s[9],$=s[13],I=s[2],B=s[6],k=s[10],q=s[14],D=s[3],E=s[7],H=s[11],W=s[15];return r[0]=o*C+a*M+l*I+c*D,r[4]=o*P+a*S+l*B+c*E,r[8]=o*v+a*rt+l*k+c*H,r[12]=o*z+a*$+l*q+c*W,r[1]=h*C+u*M+d*I+f*D,r[5]=h*P+u*S+d*B+f*E,r[9]=h*v+u*rt+d*k+f*H,r[13]=h*z+u*$+d*q+f*W,r[2]=p*C+x*M+m*I+g*D,r[6]=p*P+x*S+m*B+g*E,r[10]=p*v+x*rt+m*k+g*H,r[14]=p*z+x*$+m*q+g*W,r[3]=y*C+_*M+b*I+L*D,r[7]=y*P+_*S+b*B+L*E,r[11]=y*v+_*rt+b*k+L*H,r[15]=y*z+_*$+b*q+L*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=u*m*c-x*d*c+x*l*f-a*m*f-u*l*g+a*d*g,_=p*d*c-h*m*c-p*l*f+o*m*f+h*l*g-o*d*g,b=h*x*c-p*u*c+p*a*f-o*x*f-h*a*g+o*u*g,L=p*u*l-h*x*l-p*a*d+o*x*d+h*a*m-o*u*m,C=e*y+n*_+s*b+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=y*P,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*g-n*d*g)*P,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*g+n*l*g)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,t[4]=_*P,t[5]=(h*m*r-p*d*r+p*s*f-e*m*f-h*s*g+e*d*g)*P,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=b*P,t[9]=(p*u*r-h*x*r-p*n*f+e*x*f+h*n*g-e*u*g)*P,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*g+e*a*g)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=L*P,t[13]=(h*x*s-p*u*s+p*n*d-e*x*d-h*n*m+e*u*m)*P,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,_=l*h,b=l*u,L=n.x,C=n.y,P=n.z;return s[0]=(1-(x+g))*L,s[1]=(f+b)*L,s[2]=(p-_)*L,s[3]=0,s[4]=(f-b)*C,s[5]=(1-(d+g))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(p+_)*P,s[9]=(m-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ti){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===ti)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===mo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,x;if(a===ti)p=(o+r)*u,x=-2*u;else if(a===mo)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new N,Pn=new ne,Af=new N(0,0,0),Rf=new N(1,1,1),ci=new N,Gr=new N,un=new N,ih=new ne,sh=new Wn,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cf=0,rh=new N,cs=new Wn,Jn=new ne,Vr=new N,Qs=new N,Pf=new N,If=new Wn,oh=new N(1,0,0),ah=new N(0,1,0),lh=new N(0,0,1),Lf={type:"added"},Df={type:"removed"},wa={type:"childadded",child:null},Sa={type:"childremoved",child:null},je=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new vn,n=new Wn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Qs,Vr,this.up):Jn.lookAt(Vr,Qs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Jn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lf),wa.child=t,this.dispatchEvent(wa),wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};je.DEFAULT_UP=new N(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new N,Kn=new N,Ta=new N,Qn=new N,hs=new N,us=new N,ch=new N,Aa=new N,Ra=new N,Ca=new N,vs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Kn.subVectors(n,e),Ta.subVectors(t,e);let o=In.dot(In),a=In.dot(Kn),l=In.dot(Ta),c=Kn.dot(Kn),h=Kn.dot(Ta),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Kn.subVectors(t,e),In.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),Aa.subVectors(t,n);let l=hs.dot(Aa),c=us.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);let h=hs.dot(Ra),u=us.dot(Ra);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hs,o);Ca.subVectors(t,r);let f=hs.dot(Ca),p=us.dot(Ca);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(us,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ch.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ch,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=vf(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return oe.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ue(qe.r*255,0,255))*65536+Math.round(Ue(qe.g*255,0,255))*256+Math.round(Ue(qe.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ze){oe.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Wr);let n=pa(hi.h,Wr.h,e),s=pa(hi.s,Wr.s,e),r=pa(hi.l,Wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Vt;Vt.NAMES=hu;var Nf=0,Wi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ws,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Xi=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new N,Xr=new mt,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}};var Mo=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bo=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Uf=0,yn=new ne,Ia=new je,ds=new N,dn=new Un,js=new Un,Ne=new N,xe=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?bo:Mo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(dn.min,js.min),dn.expandByPoint(Ne),Ne.addVectors(dn.max,js.max),dn.expandByPoint(Ne)):(dn.expandByPoint(js.min),dn.expandByPoint(js.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Ne.add(ds)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new N,l[v]=new N;let c=new N,h=new N,u=new N,d=new mt,f=new mt,p=new mt,x=new N,m=new N;function g(v,z,M){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[v].add(x),a[z].add(x),a[M].add(x),l[v].add(m),l[z].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,z=y.length;v<z;++v){let M=y[v],S=M.start,rt=M.count;for(let $=S,I=S+rt;$<I;$+=3)g(t.getX($+0),t.getX($+1),t.getX($+2))}let _=new N,b=new N,L=new N,C=new N;function P(v){L.fromBufferAttribute(s,v),C.copy(L);let z=a[v];_.copy(z),_.sub(L.multiplyScalar(L.dot(z))).normalize(),b.crossVectors(C,z);let S=b.dot(l[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,S)}for(let v=0,z=y.length;v<z;++v){let M=y[v],S=M.start,rt=M.count;for(let $=S,I=S+rt;$<I;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new ne,Li=new vo,Yr=new Vi,uh=new N,fs=new N,ps=new N,ms=new N,La=new N,qr=new N,Zr=new mt,$r=new mt,Jr=new mt,dh=new N,fh=new N,ph=new N,Kr=new N,Qr=new N,Mt=class extends je{constructor(t=new xe,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?qr.addScaledVector(La,h):qr.addScaledVector(La.sub(e),h))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Yr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Yr,uh)===null||Li.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=_;b<L;b+=3){let C=a.getX(b),P=a.getX(b+1),v=a.getX(b+2);s=jr(this,g,t,n,c,h,u,C,P,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=jr(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=_;b<L;b+=3){let C=b,P=b+1,v=b+2;s=jr(this,g,t,n,c,h,u,C,P,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,_=m+1,b=m+2;s=jr(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ff(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:i}}function jr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fs),i.getVertexPosition(l,ps),i.getVertexPosition(c,ms);let h=Ff(i,t,e,n,fs,ps,ms,Kr);if(h){s&&(Zr.fromBufferAttribute(s,a),$r.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),h.uv=vs.getInterpolation(Kr,fs,ps,ms,Zr,$r,Jr,new mt)),r&&(Zr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),h.uv1=vs.getInterpolation(Kr,fs,ps,ms,Zr,$r,Jr,new mt)),o&&(dh.fromBufferAttribute(o,a),fh.fromBufferAttribute(o,l),ph.fromBufferAttribute(o,c),h.normal=vs.getInterpolation(Kr,fs,ps,ms,dh,fh,ph,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};vs.getNormal(fs,ps,ms,u.normal),h.face=u}return h}var _e=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function p(x,m,g,y,_,b,L,C,P,v,z){let M=b/P,S=L/v,rt=b/2,$=L/2,I=C/2,B=P+1,k=v+1,q=0,D=0,E=new N;for(let H=0;H<k;H++){let W=H*S-$;for(let et=0;et<B;et++){let ft=et*M-rt;E[x]=ft*y,E[m]=W*_,E[g]=I,c.push(E.x,E.y,E.z),E[x]=0,E[m]=0,E[g]=C>0?1:-1,h.push(E.x,E.y,E.z),u.push(et/P),u.push(1-H/v),q+=1}}for(let H=0;H<v;H++)for(let W=0;W<P;W++){let et=d+W+B*H,ft=d+W+B*(H+1),G=d+(W+1)+B*(H+1),ht=d+(W+1)+B*H;l.push(et,ft,ht),l.push(ft,G,ht),D+=6}a.addGroup(f,D,z),f+=D,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ps(i[e]);for(let s in n)t[s]=n[s]}return t}function Of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}var zf={clone:Ps,merge:Qe},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Eo=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new N,mh=new mt,gh=new mt,on=class extends Eo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,el=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new on(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new on(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new on(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new on(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new on(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wo=class extends an{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:pi});r.uniforms.tEquirect.value=e;let o=new Mt(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=rn),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Da=new N,kf=new N,Gf=new $t,Ln=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Da.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Vi,to=new N,cr=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],x=s[10],m=s[11],g=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-g).normalize(),n[1].setComponents(l+r,d+c,m+f,b+g).normalize(),n[2].setComponents(l+o,d+h,m+p,b+y).normalize(),n[3].setComponents(l-o,d-h,m-p,b-y).normalize(),n[4].setComponents(l-a,d-u,m-x,b-_).normalize(),e===ti)n[5].setComponents(l+a,d+u,m+x,b+_).normalize();else if(e===mo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,p=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&p.length===0&&i.bufferSubData(u,0,d),p.length!==0){for(let x=0,m=p.length;x<m;x++){let g=p[x];e?i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count):i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var yi=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let _=0;_<c;_++){let b=_*u-r;p.push(b,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let _=y+c*g,b=y+c*(g+1),L=y+1+c*(g+1),C=y+1+c*g;f.push(_,b,C),f.push(b,L,C)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`
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
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,xm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:Yf,alphamap_pars_fragment:qf,alphatest_fragment:Zf,alphatest_pars_fragment:$f,aomap_fragment:Jf,aomap_pars_fragment:Kf,batching_pars_vertex:Qf,batching_vertex:jf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:_p,emissivemap_pars_fragment:yp,colorspace_fragment:vp,colorspace_pars_fragment:Mp,envmap_fragment:bp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:wp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Op,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Fp,lights_toon_fragment:zp,lights_toon_pars_fragment:Bp,lights_phong_fragment:Hp,lights_phong_pars_fragment:kp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:Yp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Jp,map_fragment:Kp,map_pars_fragment:Qp,map_particle_fragment:jp,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:b0,dithering_pars_fragment:E0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:z0,transmission_pars_fragment:B0,uv_pars_fragment:H0,uv_pars_vertex:k0,uv_vertex:G0,worldpos_vertex:V0,background_vert:W0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:q0,cube_vert:Z0,cube_frag:$0,depth_vert:J0,depth_frag:K0,distanceRGBA_vert:Q0,distanceRGBA_frag:j0,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:xm,points_vert:_m,points_frag:ym,shadow_vert:vm,shadow_frag:Mm,sprite_vert:bm,sprite_frag:Em},St={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Gn={basic:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Qe([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Qe([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Qe([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Qe([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Qe([St.lights,St.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Gn.physical={uniforms:Qe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var eo={r:0,b:0,g:0},Ni=new vn,wm=new ne;function Sm(i,t,e,n,s,r,o){let a=new Vt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(m,g){let y=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===zo)?(h===void 0&&(h=new Mt(new _e(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ps(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(g.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Ni)),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==he,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Mt(new yi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ps(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=oe.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,g){m.getRGB(eo,uu(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:p}}function Tm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(I,B,k,q,D){let E=!1;if(o){let H=x(q,k,B);c!==H&&(c=H,f(c.object)),E=g(I,q,k,D),E&&y(I,q,k,D)}else{let H=B.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=q.id,c.program=k.id,c.wireframe=H,E=!0)}D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(E||h)&&(h=!1,v(I,B,k,q),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,B,k){let q=k.wireframe===!0,D=a[I.id];D===void 0&&(D={},a[I.id]=D);let E=D[B.id];E===void 0&&(E={},D[B.id]=E);let H=E[q];return H===void 0&&(H=m(d()),E[q]=H),H}function m(I){let B=[],k=[],q=[];for(let D=0;D<s;D++)B[D]=0,k[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:q,object:I,attributes:{},index:null}}function g(I,B,k,q){let D=c.attributes,E=B.attributes,H=0,W=k.getAttributes();for(let et in W)if(W[et].location>=0){let G=D[et],ht=E[et];if(ht===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),G===void 0||G.attribute!==ht||ht&&G.data!==ht.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function y(I,B,k,q){let D={},E=B.attributes,H=0,W=k.getAttributes();for(let et in W)if(W[et].location>=0){let G=E[et];G===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let ht={};ht.attribute=G,G&&G.data&&(ht.data=G.data),D[et]=ht,H++}c.attributes=D,c.attributesNum=H,c.index=q}function _(){let I=c.newAttributes;for(let B=0,k=I.length;B<k;B++)I[B]=0}function b(I){L(I,0)}function L(I,B){let k=c.newAttributes,q=c.enabledAttributes,D=c.attributeDivisors;k[I]=1,q[I]===0&&(i.enableVertexAttribArray(I),q[I]=1),D[I]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),D[I]=B)}function C(){let I=c.newAttributes,B=c.enabledAttributes;for(let k=0,q=B.length;k<q;k++)B[k]!==I[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function P(I,B,k,q,D,E,H){H===!0?i.vertexAttribIPointer(I,B,k,D,E):i.vertexAttribPointer(I,B,k,q,D,E)}function v(I,B,k,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let D=q.attributes,E=k.getAttributes(),H=B.defaultAttributeValues;for(let W in E){let et=E[W];if(et.location>=0){let ft=D[W];if(ft===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),ft!==void 0){let G=ft.normalized,ht=ft.itemSize,_t=e.get(ft);if(_t===void 0)continue;let O=_t.buffer,J=_t.type,j=_t.bytesPerElement,pt=n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT||ft.gpuType===Qh);if(ft.isInterleavedBufferAttribute){let nt=ft.data,R=nt.stride,ot=ft.offset;if(nt.isInstancedInterleavedBuffer){for(let Q=0;Q<et.locationSize;Q++)L(et.location+Q,nt.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<et.locationSize;Q++)b(et.location+Q);i.bindBuffer(i.ARRAY_BUFFER,O);for(let Q=0;Q<et.locationSize;Q++)P(et.location+Q,ht/et.locationSize,J,G,R*j,(ot+ht/et.locationSize*Q)*j,pt)}else{if(ft.isInstancedBufferAttribute){for(let nt=0;nt<et.locationSize;nt++)L(et.location+nt,ft.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let nt=0;nt<et.locationSize;nt++)b(et.location+nt);i.bindBuffer(i.ARRAY_BUFFER,O);for(let nt=0;nt<et.locationSize;nt++)P(et.location+nt,ht/et.locationSize,J,G,ht*j,ht/et.locationSize*nt*j,pt)}}else if(H!==void 0){let G=H[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(et.location,G);break;case 3:i.vertexAttrib3fv(et.location,G);break;case 4:i.vertexAttrib4fv(et.location,G);break;default:i.vertexAttrib1fv(et.location,G)}}}}C()}function z(){rt();for(let I in a){let B=a[I];for(let k in B){let q=B[k];for(let D in q)p(q[D].object),delete q[D];delete B[k]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;let B=a[I.id];for(let k in B){let q=B[k];for(let D in q)p(q[D].object),delete q[D];delete B[k]}delete a[I.id]}function S(I){for(let B in a){let k=a[B];if(k[I.id]===void 0)continue;let q=k[I.id];for(let D in q)p(q[D].object),delete q[D];delete k[I.id]}}function rt(){$(),h=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:rt,resetDefaultState:$,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:b,disableUnusedAttributes:C}}function Am(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(h[p],u[p]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];e.update(p,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Rm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||t.has("OES_texture_float"),L=_&&b,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:C}}function Cm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,b=g.clippingState||null;l.value=b,b=h(p,d,_,f);for(let L=0;L!==_;++L)b[L]=e[L];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Pm(i){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=As:a===Za&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Za)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=class extends Eo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,xh=[.125,.215,.35,.446,.526,.582],zi=20,Na=new Is,_h=new Vt,Ua=null,Fa=0,Oa=0,Fi=(1+Math.sqrt(5))/2,_s=1/Fi,yh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Fi,_s),new N(0,Fi,-_s),new N(_s,0,Fi),new N(-_s,0,Fi),new N(Fi,_s,0),new N(-Fi,_s,0)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Fa,Oa),t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ar,format:Dn,colorSpace:bi,depthBuffer:!1},s=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s){let a=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=mi,h.autoClear=!1;let f=new Xi({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),p=new Mt(new _e,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(_h),x=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;no(s,y*_,g>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===As||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;no(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yh[(s-1)%yh.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let g=[],y=0;for(let P=0;P<zi;++P){let v=P/x,z=Math.exp(-v*v/2);g.push(z),P===0?y+=z:P<m&&(y+=2*z)}for(let P=0;P<g.length;P++)g[P]=g[P]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let b=this._sizeLods[s],L=3*b*(s>_-Ms?s-_+Ms:0),C=4*(this._cubeSize-b);no(e,L,C,3*b,2*b),l.setRenderTarget(e),l.render(u,Na)}};function Im(i){let t=[],e=[],n=[],s=i,r=i-Ms+1+xh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ms?l=xh[o-i+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*f),_=new Float32Array(m*p*f),b=new Float32Array(g*p*f);for(let C=0;C<f;C++){let P=C%3*2/3-1,v=C>2?0:-1,z=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];y.set(z,x*p*C),_.set(d,m*p*C);let M=[C,C,C,C,C,C];b.set(M,g*p*C)}let L=new xe;L.setAttribute("position",new Re(y,x)),L.setAttribute("uv",new Re(_,m)),L.setAttribute("faceIndex",new Re(b,g)),t.push(L),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){let n=new Float32Array(zi),s=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Mh(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function bh(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function Dm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qa||l===Za,h=l===As||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ls(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ls(i));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,b=y.length;_<b;_+=3){let L=y[_+0],C=y[_+1],P=y[_+2];d.push(L,C,C,P,P,L)}}else if(p!==void 0){let y=p.array;x=p.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let L=_+0,C=_+1,P=_+2;d.push(L,C,C,P,P,L)}}else return;let m=new(cu(d)?bo:Mo)(d,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fm(i,t,e,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){i.drawElements(r,p,a,f*l),e.update(p,r,1)}function u(f,p,x){if(x===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,p,a,f*l,x),e.update(p,r,x)}function d(f,p,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<x;g++)this.render(f[g]/l,p[g]);else{m.multiDrawElementsWEBGL(r,p,0,a,f,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];e.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Om(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t){return i[0]-t[0]}function Bm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Hm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==p){let rt=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",rt)};x!==void 0&&x.texture.dispose();let m=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],C=0;m===!0&&(C=1),g===!0&&(C=2),y===!0&&(C=3);let P=h.attributes.position.count*C,v=1;P>t.maxTextureSize&&(v=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let z=new Float32Array(P*v*4*p),M=new yo(z,P,v,p);M.type=Vn,M.needsUpdate=!0;let S=C*4;for(let $=0;$<p;$++){let I=_[$],B=b[$],k=L[$],q=P*v*4*$;for(let D=0;D<I.count;D++){let E=D*S;m===!0&&(o.fromBufferAttribute(I,D),z[q+E+0]=o.x,z[q+E+1]=o.y,z[q+E+2]=o.z,z[q+E+3]=0),g===!0&&(o.fromBufferAttribute(B,D),z[q+E+4]=o.x,z[q+E+5]=o.y,z[q+E+6]=o.z,z[q+E+7]=0),y===!0&&(o.fromBufferAttribute(k,D),z[q+E+8]=o.x,z[q+E+9]=o.y,z[q+E+10]=o.z,z[q+E+11]=k.itemSize===4?o.w:1)}}x={count:p,texture:M,size:new mt(P,v)},r.set(h,x),h.addEventListener("dispose",rt)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let m=0;for(let y=0;y<d.length;y++)m+=d[y];let g=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let _=0;_<f;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<f;_++){let b=p[_];b[0]=_,b[1]=d[_]}p.sort(Bm);for(let _=0;_<8;_++)_<f&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(zm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,g=0;for(let _=0;_<8;_++){let b=a[_],L=b[0],C=b[1];L!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=C,g+=C):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function km(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var So=class extends an{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=fi),n===void 0&&h===Cs&&(n=Hi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new an,pu=new So(1,1);pu.compareFunction=lu;var mu=new yo,gu=new tl,xu=new wo,Eh=[],wh=[],Sh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function Bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),Ie(e,n)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),Ie(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),Ie(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?pu:fu;e.setTexture2D(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gu,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xu,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mu,s)}function ag(i){switch(i){case 5126:return Gm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(i,t){i.uniform1fv(this.addr,t)}function cg(i,t){let e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function hg(i,t){let e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function ug(i,t){let e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function dg(i,t){let e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){let e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){let e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function bg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fu,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gu,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xu,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mu,r[o])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Tg}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},za=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(za.lastIndex=0;;){let r=za.exec(n),o=za.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(e,c===void 0?new il(a,i,t):new sl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Rh(e,u)),e=u}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ch(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cg=37297,Pg=0;function Ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Lg(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===po&&e===fo?n="LinearDisplayP3ToLinearSRGB":t===fo&&e===po&&(n="LinearSRGBToLinearDisplayP3"),i){case bi:case Bo:return[n,"LinearTransferOETF"];case Ze:case Bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ph(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ig(i.getShaderSource(t),o)}else return s}function Dg(i,t){let e=Lg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ng(i,t){let e;switch(t){case Kd:e="Linear";break;case Qd:e="Reinhard";break;case jd:e="OptimizedCineon";break;case Ol:e="ACESFilmic";break;case ef:e="AgX";break;case nf:e="Neutral";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ug(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function Ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Bg,kg)}var Hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kg(i,t){let e=Zt[t];if(e===void 0){let n=Hg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(Gg,Vg)}function Vg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case $d:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function Zg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $g(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Wg(e),c=Xg(e),h=Yg(e),u=qg(e),d=Zg(e),f=e.isWebGL2?"":Ug(e),p=Fg(e),x=Og(r),m=s.createProgram(),g,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),g.length>0&&(g+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),y.length>0&&(y+=`
`)):(g=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),y=[f,Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=ol(o),o=Ih(o,e),o=Lh(o,e),a=ol(a),a=Ih(a,e),a=Lh(a,e),o=Dh(o),a=Dh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+g+o,L=_+y+a,C=Ch(s,s.VERTEX_SHADER,b),P=Ch(s,s.FRAGMENT_SHADER,L);s.attachShader(m,C),s.attachShader(m,P),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function v(rt){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(P).trim(),k=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,P);else{let D=Ph(s,C,"vertex"),E=Ph(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+rt.name+`
Material Type: `+rt.type+`

Program Info Log: `+$+`
`+D+`
`+E)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||B==="")&&(q=!1);q&&(rt.diagnostics={runnable:k,programLog:$,vertexShader:{log:I,prefix:g},fragmentShader:{log:B,prefix:y}})}s.deleteShader(C),s.deleteShader(P),z=new Ts(s,m),M=zg(s,m)}let z;this.getUniforms=function(){return z===void 0&&v(this),z};let M;this.getAttributes=function(){return M===void 0&&v(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(m,Cg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=P,this}var Jg=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ll(t),e.set(t,n)),n}},ll=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(i,t,e,n,s,r,o){let a=new lr,l=new al,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,rt,$,I){let B=$.fog,k=I.geometry,q=M.isMeshStandardMaterial?$.environment:null,D=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),E=D&&D.mapping===zo?D.image.height:null,H=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=W!==void 0?W.length:0,ft=0;k.morphAttributes.position!==void 0&&(ft=1),k.morphAttributes.normal!==void 0&&(ft=2),k.morphAttributes.color!==void 0&&(ft=3);let G,ht,_t,O;if(H){let le=Gn[H];G=le.vertexShader,ht=le.fragmentShader}else G=M.vertexShader,ht=M.fragmentShader,l.update(M),_t=l.getVertexShaderID(M),O=l.getFragmentShaderID(M);let J=i.getRenderTarget(),j=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,nt=!!M.map,R=!!M.matcap,ot=!!D,Q=!!M.aoMap,V=!!M.lightMap,Y=!!M.bumpMap,F=!!M.normalMap,K=!!M.displacementMap,gt=!!M.emissiveMap,Lt=!!M.metalnessMap,A=!!M.roughnessMap,w=M.anisotropy>0,ct=M.clearcoat>0,ut=M.iridescence>0,yt=M.sheen>0,xt=M.transmission>0,kt=w&&!!M.anisotropyMap,zt=ct&&!!M.clearcoatMap,wt=ct&&!!M.clearcoatNormalMap,At=ct&&!!M.clearcoatRoughnessMap,Gt=ut&&!!M.iridescenceMap,vt=ut&&!!M.iridescenceThicknessMap,Te=yt&&!!M.sheenColorMap,Qt=yt&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,Dt=!!M.specularColorMap,Nt=!!M.specularIntensityMap,ee=xt&&!!M.transmissionMap,Xt=xt&&!!M.thicknessMap,fe=!!M.gradientMap,X=!!M.alphaMap,Rt=M.alphaTest>0,it=!!M.alphaHash,Et=!!M.extensions,Ct=mi;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let jt={isWebGL2:u,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:ht,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:O,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:pt,instancing:j,instancingColor:j&&I.instanceColor!==null,instancingMorph:j&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:bi,alphaToCoverage:!!M.alphaToCoverage,map:nt,matcap:R,envMap:ot,envMapMode:ot&&D.mapping,envMapCubeUVHeight:E,aoMap:Q,lightMap:V,bumpMap:Y,normalMap:F,displacementMap:f&&K,emissiveMap:gt,normalMapObjectSpace:F&&M.normalMapType===df,normalMapTangentSpace:F&&M.normalMapType===au,metalnessMap:Lt,roughnessMap:A,anisotropy:w,anisotropyMap:kt,clearcoat:ct,clearcoatMap:zt,clearcoatNormalMap:wt,clearcoatRoughnessMap:At,iridescence:ut,iridescenceMap:Gt,iridescenceThicknessMap:vt,sheen:yt,sheenColorMap:Te,sheenRoughnessMap:Qt,specularMap:Ot,specularColorMap:Dt,specularIntensityMap:Nt,transmission:xt,transmissionMap:ee,thicknessMap:Xt,gradientMap:fe,opaque:M.transparent===!1&&M.blending===ws&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:Rt,alphaHash:it,combine:M.combine,mapUv:nt&&m(M.map.channel),aoMapUv:Q&&m(M.aoMap.channel),lightMapUv:V&&m(M.lightMap.channel),bumpMapUv:Y&&m(M.bumpMap.channel),normalMapUv:F&&m(M.normalMap.channel),displacementMapUv:K&&m(M.displacementMap.channel),emissiveMapUv:gt&&m(M.emissiveMap.channel),metalnessMapUv:Lt&&m(M.metalnessMap.channel),roughnessMapUv:A&&m(M.roughnessMap.channel),anisotropyMapUv:kt&&m(M.anisotropyMap.channel),clearcoatMapUv:zt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&m(M.sheenRoughnessMap.channel),specularMapUv:Ot&&m(M.specularMap.channel),specularColorMapUv:Dt&&m(M.specularColorMap.channel),specularIntensityMapUv:Nt&&m(M.specularIntensityMap.channel),transmissionMapUv:ee&&m(M.transmissionMap.channel),thicknessMapUv:Xt&&m(M.thicknessMap.channel),alphaMapUv:X&&m(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(F||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(nt||X),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&rt.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:nt&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fe,flipSided:M.side===$e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Et&&M.extensions.derivatives===!0,extensionFragDepth:Et&&M.extensions.fragDepth===!0,extensionDrawBuffers:Et&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Et&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function y(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let rt in M.defines)S.push(rt),S.push(M.defines[rt]);return M.isRawShaderMaterial===!1&&(_(S,M),b(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){let S=x[M.type],rt;if(S){let $=Gn[S];rt=zf.clone($.uniforms)}else rt=M.uniforms;return rt}function C(M,S){let rt;for(let $=0,I=h.length;$<I;$++){let B=h[$];if(B.cacheKey===S){rt=B,++rt.usedTimes;break}}return rt===void 0&&(rt=new $g(i,S,M,r),h.push(rt)),rt}function P(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function v(M){l.remove(M)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:P,releaseShaderCache:v,programs:h,dispose:z}}function Qg(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,x,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=x,g.group=m),t++,g}function a(u,d,f,p,x,m){let g=o(u,d,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,p,x,m){let g=o(u,d,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||jg),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function t1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function n1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i1=0;function s1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r1(i,t){let e=new e1,n=n1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new ne,a=new ne;function l(h,u){let d=0,f=0,p=0;for(let rt=0;rt<9;rt++)s.probe[rt].set(0,0,0);let x=0,m=0,g=0,y=0,_=0,b=0,L=0,C=0,P=0,v=0,z=0;h.sort(s1);let M=u===!0?Math.PI:1;for(let rt=0,$=h.length;rt<$;rt++){let I=h[rt],B=I.color,k=I.intensity,q=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*k*M,f+=B.g*k*M,p+=B.b*k*M;else if(I.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(I.sh.coefficients[E],k);z++}else if(I.isDirectionalLight){let E=e.get(I);if(E.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let H=I.shadow,W=n.get(I);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,s.directionalShadow[x]=W,s.directionalShadowMap[x]=D,s.directionalShadowMatrix[x]=I.shadow.matrix,b++}s.directional[x]=E,x++}else if(I.isSpotLight){let E=e.get(I);E.position.setFromMatrixPosition(I.matrixWorld),E.color.copy(B).multiplyScalar(k*M),E.distance=q,E.coneCos=Math.cos(I.angle),E.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),E.decay=I.decay,s.spot[g]=E;let H=I.shadow;if(I.map&&(s.spotLightMap[P]=I.map,P++,H.updateMatrices(I),I.castShadow&&v++),s.spotLightMatrix[g]=H.matrix,I.castShadow){let W=n.get(I);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,s.spotShadow[g]=W,s.spotShadowMap[g]=D,C++}g++}else if(I.isRectAreaLight){let E=e.get(I);E.color.copy(B).multiplyScalar(k),E.halfWidth.set(I.width*.5,0,0),E.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=E,y++}else if(I.isPointLight){let E=e.get(I);if(E.color.copy(I.color).multiplyScalar(I.intensity*M),E.distance=I.distance,E.decay=I.decay,I.castShadow){let H=I.shadow,W=n.get(I);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,s.pointShadow[m]=W,s.pointShadowMap[m]=D,s.pointShadowMatrix[m]=I.shadow.matrix,L++}s.point[m]=E,m++}else if(I.isHemisphereLight){let E=e.get(I);E.skyColor.copy(I.color).multiplyScalar(k*M),E.groundColor.copy(I.groundColor).multiplyScalar(k*M),s.hemi[_]=E,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=p;let S=s.hash;(S.directionalLength!==x||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==y||S.hemiLength!==_||S.numDirectionalShadows!==b||S.numPointShadows!==L||S.numSpotShadows!==C||S.numSpotMaps!==P||S.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=g,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+P-v,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=z,S.directionalLength=x,S.pointLength=m,S.spotLength=g,S.rectAreaLength=y,S.hemiLength=_,S.numDirectionalShadows=b,S.numPointShadows=L,S.numSpotShadows=C,S.numSpotMaps=P,S.numLightProbes=z,s.version=i1++)}function c(h,u){let d=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let b=h[y];if(b.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(g),d++}else if(b.isSpotLight){let L=s.spot[p];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let L=s.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:s}}function Oh(i,t){let e=new r1(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o1(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Oh(i,t),e.set(r,[l])):o>=a.length?(l=new Oh(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var To=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
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
}`;function c1(i,t,e){let n=new cr,s=new mt,r=new mt,o=new ge,a=new To({depthPacking:ou}),l=new cl,c={},h=e.maxTextureSize,u={[xi]:$e,[$e]:xi,[Fe]:Fe},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:a1,fragmentShader:l1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xe;p.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let g=this.type;this.render=function(C,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let z=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(pi),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);let $=g!==jn&&this.type===jn,I=g===jn&&this.type!==jn;for(let B=0,k=C.length;B<k;B++){let q=C[B],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let E=D.getFrameExtents();if(s.multiply(E),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/E.x),s.x=r.x*E.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/E.y),s.y=r.y*E.y,D.mapSize.y=r.y)),D.map===null||$===!0||I===!0){let W=this.type!==jn?{minFilter:He,magFilter:He}:{};D.map!==null&&D.map.dispose(),D.map=new Nn(s.x,s.y,W),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let H=D.getViewportCount();for(let W=0;W<H;W++){let et=D.getViewport(W);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),rt.viewport(o),D.updateMatrices(q,W),n=D.getFrustum(),b(P,v,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===jn&&y(D,v),D.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(z,M,S)};function y(C,P){let v=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,v,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,v,f,x,null)}function _(C,P,v,z){let M=null,S=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)M=S;else if(M=v.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let rt=M.uuid,$=P.uuid,I=c[rt];I===void 0&&(I={},c[rt]=I);let B=I[$];B===void 0&&(B=M.clone(),I[$]=B,P.addEventListener("dispose",L)),M=B}if(M.visible=P.visible,M.wireframe=P.wireframe,z===jn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,v.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let rt=i.properties.get(M);rt.light=v}return M}function b(C,P,v,z,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===jn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let $=t.update(C),I=C.material;if(Array.isArray(I)){let B=$.groups;for(let k=0,q=B.length;k<q;k++){let D=B[k],E=I[D.materialIndex];if(E&&E.visible){let H=_(C,E,z,M);C.onBeforeShadow(i,C,P,v,$,H,D),i.renderBufferDirect(v,null,$,H,C,D),C.onAfterShadow(i,C,P,v,$,H,D)}}}else if(I.visible){let B=_(C,I,z,M);C.onBeforeShadow(i,C,P,v,$,B,null),i.renderBufferDirect(v,null,$,B,C,null),C.onAfterShadow(i,C,P,v,$,B,null)}}let rt=C.children;for(let $=0,I=rt.length;$<I;$++)b(rt[$],P,v,z,M)}function L(C){C.target.removeEventListener("dispose",L);for(let v in c){let z=c[v],M=C.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function h1(i,t,e){let n=e.isWebGL2;function s(){let X=!1,Rt=new ge,it=null,Et=new ge(0,0,0,0);return{setMask:function(Ct){it!==Ct&&!X&&(i.colorMask(Ct,Ct,Ct,Ct),it=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,jt,le,Be,xn){xn===!0&&(Ct*=Be,jt*=Be,le*=Be),Rt.set(Ct,jt,le,Be),Et.equals(Rt)===!1&&(i.clearColor(Ct,jt,le,Be),Et.copy(Rt))},reset:function(){X=!1,it=null,Et.set(-1,0,0,0)}}}function r(){let X=!1,Rt=null,it=null,Et=null;return{setTest:function(Ct){Ct?j(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Ct){Rt!==Ct&&!X&&(i.depthMask(Ct),Rt=Ct)},setFunc:function(Ct){if(it!==Ct){switch(Ct){case Gd:i.depthFunc(i.NEVER);break;case Vd:i.depthFunc(i.ALWAYS);break;case Wd:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case Xd:i.depthFunc(i.EQUAL);break;case Yd:i.depthFunc(i.GEQUAL);break;case qd:i.depthFunc(i.GREATER);break;case Zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Ct}},setLocked:function(Ct){X=Ct},setClear:function(Ct){Et!==Ct&&(i.clearDepth(Ct),Et=Ct)},reset:function(){X=!1,Rt=null,it=null,Et=null}}}function o(){let X=!1,Rt=null,it=null,Et=null,Ct=null,jt=null,le=null,Be=null,xn=null;return{setTest:function(ce){X||(ce?j(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ce){Rt!==ce&&!X&&(i.stencilMask(ce),Rt=ce)},setFunc:function(ce,Ke,kn){(it!==ce||Et!==Ke||Ct!==kn)&&(i.stencilFunc(ce,Ke,kn),it=ce,Et=Ke,Ct=kn)},setOp:function(ce,Ke,kn){(jt!==ce||le!==Ke||Be!==kn)&&(i.stencilOp(ce,Ke,kn),jt=ce,le=Ke,Be=kn)},setLocked:function(ce){X=ce},setClear:function(ce){xn!==ce&&(i.clearStencil(ce),xn=ce)},reset:function(){X=!1,Rt=null,it=null,Et=null,Ct=null,jt=null,le=null,Be=null,xn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},p=new WeakMap,x=[],m=null,g=!1,y=null,_=null,b=null,L=null,C=null,P=null,v=null,z=new Vt(0,0,0),M=0,S=!1,rt=null,$=null,I=null,B=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,E=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=E>=1):H.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=E>=2);let W=null,et={},ft=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ht=new ge().fromArray(ft),_t=new ge().fromArray(G);function O(X,Rt,it,Et){let Ct=new Uint8Array(4),jt=i.createTexture();i.bindTexture(X,jt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<it;le++)n&&(X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY)?i.texImage3D(Rt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Rt+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return jt}let J={};J[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(J[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(i.DEPTH_TEST),l.setFunc(lo),K(!1),gt(mc),j(i.CULL_FACE),Y(pi);function j(X){d[X]!==!0&&(i.enable(X),d[X]=!0)}function pt(X){d[X]!==!1&&(i.disable(X),d[X]=!1)}function nt(X,Rt){return f[X]!==Rt?(i.bindFramebuffer(X,Rt),f[X]=Rt,n&&(X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Rt),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function R(X,Rt){let it=x,Et=!1;if(X){it=p.get(Rt),it===void 0&&(it=[],p.set(Rt,it));let Ct=X.textures;if(it.length!==Ct.length||it[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,le=Ct.length;jt<le;jt++)it[jt]=i.COLOR_ATTACHMENT0+jt;it.length=Ct.length,Et=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Et=!0);if(Et)if(e.isWebGL2)i.drawBuffers(it);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ot(X){return m!==X?(i.useProgram(X),m=X,!0):!1}let Q={[Oi]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[_c]=i.MIN,Q[yc]=i.MAX;else{let X=t.get("EXT_blend_minmax");X!==null&&(Q[_c]=X.MIN_EXT,Q[yc]=X.MAX_EXT)}let V={[Cd]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Ld]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Bd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(X,Rt,it,Et,Ct,jt,le,Be,xn,ce){if(X===pi){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),X!==Td){if(X!==y||ce!==S){if((_!==Oi||C!==Oi)&&(i.blendEquation(i.FUNC_ADD),_=Oi,C=Oi),ce)switch(X){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,L=null,P=null,v=null,z.set(0,0,0),M=0,y=X,S=ce}return}Ct=Ct||Rt,jt=jt||it,le=le||Et,(Rt!==_||Ct!==C)&&(i.blendEquationSeparate(Q[Rt],Q[Ct]),_=Rt,C=Ct),(it!==b||Et!==L||jt!==P||le!==v)&&(i.blendFuncSeparate(V[it],V[Et],V[jt],V[le]),b=it,L=Et,P=jt,v=le),(Be.equals(z)===!1||xn!==M)&&(i.blendColor(Be.r,Be.g,Be.b,xn),z.copy(Be),M=xn),y=X,S=!1}function F(X,Rt){X.side===Fe?pt(i.CULL_FACE):j(i.CULL_FACE);let it=X.side===$e;Rt&&(it=!it),K(it),X.blending===ws&&X.transparent===!1?Y(pi):Y(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);let Et=X.stencilWrite;c.setTest(Et),Et&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),A(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(X){rt!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),rt=X)}function gt(X){X!==wd?(j(i.CULL_FACE),X!==$&&(X===mc?i.cullFace(i.BACK):X===Sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),$=X}function Lt(X){X!==I&&(D&&i.lineWidth(X),I=X)}function A(X,Rt,it){X?(j(i.POLYGON_OFFSET_FILL),(B!==Rt||k!==it)&&(i.polygonOffset(Rt,it),B=Rt,k=it)):pt(i.POLYGON_OFFSET_FILL)}function w(X){X?j(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function ct(X){X===void 0&&(X=i.TEXTURE0+q-1),W!==X&&(i.activeTexture(X),W=X)}function ut(X,Rt,it){it===void 0&&(W===null?it=i.TEXTURE0+q-1:it=W);let Et=et[it];Et===void 0&&(Et={type:void 0,texture:void 0},et[it]=Et),(Et.type!==X||Et.texture!==Rt)&&(W!==it&&(i.activeTexture(it),W=it),i.bindTexture(X,Rt||J[X]),Et.type=X,Et.texture=Rt)}function yt(){let X=et[W];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(X){ht.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ht.copy(X))}function Nt(X){_t.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),_t.copy(X))}function ee(X,Rt){let it=u.get(Rt);it===void 0&&(it=new WeakMap,u.set(Rt,it));let Et=it.get(X);Et===void 0&&(Et=i.getUniformBlockIndex(Rt,X.name),it.set(X,Et))}function Xt(X,Rt){let Et=u.get(Rt).get(X);h.get(Rt)!==Et&&(i.uniformBlockBinding(Rt,Et,X.__bindingPointIndex),h.set(Rt,Et))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},W=null,et={},f={},p=new WeakMap,x=[],m=null,g=!1,y=null,_=null,b=null,L=null,C=null,P=null,v=null,z=new Vt(0,0,0),M=0,S=!1,rt=null,$=null,I=null,B=null,k=null,ht.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:j,disable:pt,bindFramebuffer:nt,drawBuffers:R,useProgram:ot,setBlending:Y,setMaterial:F,setFlipSided:K,setCullFace:gt,setLineWidth:Lt,setPolygonOffset:A,setScissorTest:w,activeTexture:ct,bindTexture:ut,unbindTexture:yt,compressedTexImage2D:xt,compressedTexImage3D:kt,texImage2D:Qt,texImage3D:Ot,updateUBOMapping:ee,uniformBlockBinding:Xt,texStorage2D:vt,texStorage3D:Te,texSubImage2D:zt,texSubImage3D:wt,compressedTexSubImage2D:At,compressedTexSubImage3D:Gt,scissor:Dt,viewport:Nt,reset:fe}}function u1(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,w){return p?new OffscreenCanvas(A,w):go("canvas")}function m(A,w,ct,ut){let yt=1,xt=Lt(A);if((xt.width>ut||xt.height>ut)&&(yt=ut/Math.max(xt.width,xt.height)),yt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let kt=w?Qa:Math.floor,zt=kt(yt*xt.width),wt=kt(yt*xt.height);d===void 0&&(d=x(zt,wt));let At=ct?x(zt,wt):d;return At.width=zt,At.height=wt,At.getContext("2d").drawImage(A,0,0,zt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+zt+"x"+wt+")."),At}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),A;return A}function g(A){let w=Lt(A);return Qc(w.width)&&Qc(w.height)}function y(A){return a?!1:A.wrapS!==ke||A.wrapT!==ke||A.minFilter!==He&&A.minFilter!==rn}function _(A,w){return A.generateMipmaps&&w&&A.minFilter!==He&&A.minFilter!==rn}function b(A){i.generateMipmap(A)}function L(A,w,ct,ut,yt=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xt=w;if(w===i.RED&&(ct===i.FLOAT&&(xt=i.R32F),ct===i.HALF_FLOAT&&(xt=i.R16F),ct===i.UNSIGNED_BYTE&&(xt=i.R8)),w===i.RED_INTEGER&&(ct===i.UNSIGNED_BYTE&&(xt=i.R8UI),ct===i.UNSIGNED_SHORT&&(xt=i.R16UI),ct===i.UNSIGNED_INT&&(xt=i.R32UI),ct===i.BYTE&&(xt=i.R8I),ct===i.SHORT&&(xt=i.R16I),ct===i.INT&&(xt=i.R32I)),w===i.RG&&(ct===i.FLOAT&&(xt=i.RG32F),ct===i.HALF_FLOAT&&(xt=i.RG16F),ct===i.UNSIGNED_BYTE&&(xt=i.RG8)),w===i.RG_INTEGER&&(ct===i.UNSIGNED_BYTE&&(xt=i.RG8UI),ct===i.UNSIGNED_SHORT&&(xt=i.RG16UI),ct===i.UNSIGNED_INT&&(xt=i.RG32UI),ct===i.BYTE&&(xt=i.RG8I),ct===i.SHORT&&(xt=i.RG16I),ct===i.INT&&(xt=i.RG32I)),w===i.RGBA){let kt=yt?uo:oe.getTransfer(ut);ct===i.FLOAT&&(xt=i.RGBA32F),ct===i.HALF_FLOAT&&(xt=i.RGBA16F),ct===i.UNSIGNED_BYTE&&(xt=kt===he?i.SRGB8_ALPHA8:i.RGBA8),ct===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),ct===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)}return(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function C(A,w,ct){return _(A,ct)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===He||A===vc||A===Zs?i.NEAREST:i.LINEAR}function v(A){let w=A.target;w.removeEventListener("dispose",v),M(w),w.isVideoTexture&&u.delete(w)}function z(A){let w=A.target;w.removeEventListener("dispose",z),rt(w)}function M(A){let w=n.get(A);if(w.__webglInit===void 0)return;let ct=A.source,ut=f.get(ct);if(ut){let yt=ut[w.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&S(A),Object.keys(ut).length===0&&f.delete(ct)}n.remove(A)}function S(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let ct=A.source,ut=f.get(ct);delete ut[w.__cacheKey],o.memory.textures--}function rt(A){let w=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(w.__webglFramebuffer[ut]))for(let yt=0;yt<w.__webglFramebuffer[ut].length;yt++)i.deleteFramebuffer(w.__webglFramebuffer[ut][yt]);else i.deleteFramebuffer(w.__webglFramebuffer[ut]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ut])}else{if(Array.isArray(w.__webglFramebuffer))for(let ut=0;ut<w.__webglFramebuffer.length;ut++)i.deleteFramebuffer(w.__webglFramebuffer[ut]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ut=0;ut<w.__webglColorRenderbuffer.length;ut++)w.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ut]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ct=A.textures;for(let ut=0,yt=ct.length;ut<yt;ut++){let xt=n.get(ct[ut]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ct[ut])}n.remove(A)}let $=0;function I(){$=0}function B(){let A=$;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function k(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function q(A,w){let ct=n.get(A);if(A.isVideoTexture&&K(A),A.isRenderTargetTexture===!1&&A.version>0&&ct.__version!==A.version){let ut=A.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(ct,A,w);return}}e.bindTexture(i.TEXTURE_2D,ct.__webglTexture,i.TEXTURE0+w)}function D(A,w){let ct=n.get(A);if(A.version>0&&ct.__version!==A.version){_t(ct,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ct.__webglTexture,i.TEXTURE0+w)}function E(A,w){let ct=n.get(A);if(A.version>0&&ct.__version!==A.version){_t(ct,A,w);return}e.bindTexture(i.TEXTURE_3D,ct.__webglTexture,i.TEXTURE0+w)}function H(A,w){let ct=n.get(A);if(A.version>0&&ct.__version!==A.version){O(ct,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture,i.TEXTURE0+w)}let W={[Gi]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},et={[He]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},ft={[ff]:i.NEVER,[yf]:i.ALWAYS,[pf]:i.LESS,[lu]:i.LEQUAL,[mf]:i.EQUAL,[_f]:i.GEQUAL,[gf]:i.GREATER,[xf]:i.NOTEQUAL};function G(A,w,ct){if(w.type===Vn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===oa||w.magFilter===Zs||w.magFilter===Bi||w.minFilter===rn||w.minFilter===oa||w.minFilter===Zs||w.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ct?(i.texParameteri(A,i.TEXTURE_WRAP_S,W[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,et[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,et[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==ke||w.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,P(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,P(w.minFilter)),w.minFilter!==He&&w.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===He||w.minFilter!==Zs&&w.minFilter!==Bi||w.type===Vn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ar&&t.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let ut=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ht(A,w){let ct=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",v));let ut=w.source,yt=f.get(ut);yt===void 0&&(yt={},f.set(ut,yt));let xt=k(w);if(xt!==A.__cacheKey){yt[xt]===void 0&&(yt[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ct=!0),yt[xt].usedTimes++;let kt=yt[A.__cacheKey];kt!==void 0&&(yt[A.__cacheKey].usedTimes--,kt.usedTimes===0&&S(w)),A.__cacheKey=xt,A.__webglTexture=yt[xt].texture}return ct}function _t(A,w,ct){let ut=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ut=i.TEXTURE_3D);let yt=ht(A,w),xt=w.source;e.bindTexture(ut,A.__webglTexture,i.TEXTURE0+ct);let kt=n.get(xt);if(xt.version!==kt.__version||yt===!0){e.activeTexture(i.TEXTURE0+ct);let zt=oe.getPrimaries(oe.workingColorSpace),wt=w.colorSpace===di?null:oe.getPrimaries(w.colorSpace),At=w.colorSpace===di||zt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Gt=y(w)&&g(w.image)===!1,vt=m(w.image,Gt,!1,s.maxTextureSize);vt=gt(w,vt);let Te=g(vt)||a,Qt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type),Dt=L(w.internalFormat,Qt,Ot,w.colorSpace,w.isVideoTexture);G(ut,w,Te);let Nt,ee=w.mipmaps,Xt=a&&w.isVideoTexture!==!0&&Dt!==ru,fe=kt.__version===void 0||yt===!0,X=xt.dataReady,Rt=C(w,vt,Te);if(w.isDepthTexture)Dt=i.DEPTH_COMPONENT,a?w.type===Vn?Dt=i.DEPTH_COMPONENT32F:w.type===fi?Dt=i.DEPTH_COMPONENT24:w.type===Hi?Dt=i.DEPTH24_STENCIL8:Dt=i.DEPTH_COMPONENT16:w.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ki&&Dt===i.DEPTH_COMPONENT&&w.type!==zl&&w.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fi,Ot=r.convert(w.type)),w.format===Cs&&Dt===i.DEPTH_COMPONENT&&(Dt=i.DEPTH_STENCIL,w.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Hi,Ot=r.convert(w.type))),fe&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Dt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,vt.width,vt.height,0,Qt,Ot,null));else if(w.isDataTexture)if(ee.length>0&&Te){Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ee[0].width,ee[0].height);for(let it=0,Et=ee.length;it<Et;it++)Nt=ee[it],Xt?X&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Qt,Ot,Nt.data):e.texImage2D(i.TEXTURE_2D,it,Dt,Nt.width,Nt.height,0,Qt,Ot,Nt.data);w.generateMipmaps=!1}else Xt?(fe&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,vt.width,vt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Qt,Ot,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,vt.width,vt.height,0,Qt,Ot,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Dt,ee[0].width,ee[0].height,vt.depth);for(let it=0,Et=ee.length;it<Et;it++)Nt=ee[it],w.format!==Dn?Qt!==null?Xt?X&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Nt.width,Nt.height,vt.depth,Qt,Nt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Dt,Nt.width,Nt.height,vt.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Nt.width,Nt.height,vt.depth,Qt,Ot,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Dt,Nt.width,Nt.height,vt.depth,0,Qt,Ot,Nt.data)}else{Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ee[0].width,ee[0].height);for(let it=0,Et=ee.length;it<Et;it++)Nt=ee[it],w.format!==Dn?Qt!==null?Xt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Qt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Dt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?X&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Qt,Ot,Nt.data):e.texImage2D(i.TEXTURE_2D,it,Dt,Nt.width,Nt.height,0,Qt,Ot,Nt.data)}else if(w.isDataArrayTexture)Xt?(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Dt,vt.width,vt.height,vt.depth),X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Qt,Ot,vt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,vt.width,vt.height,vt.depth,0,Qt,Ot,vt.data);else if(w.isData3DTexture)Xt?(fe&&e.texStorage3D(i.TEXTURE_3D,Rt,Dt,vt.width,vt.height,vt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Qt,Ot,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,vt.width,vt.height,vt.depth,0,Qt,Ot,vt.data);else if(w.isFramebufferTexture){if(fe)if(Xt)e.texStorage2D(i.TEXTURE_2D,Rt,Dt,vt.width,vt.height);else{let it=vt.width,Et=vt.height;for(let Ct=0;Ct<Rt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Dt,it,Et,0,Qt,Ot,null),it>>=1,Et>>=1}}else if(ee.length>0&&Te){if(Xt&&fe){let it=Lt(ee[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Dt,it.width,it.height)}for(let it=0,Et=ee.length;it<Et;it++)Nt=ee[it],Xt?X&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Qt,Ot,Nt):e.texImage2D(i.TEXTURE_2D,it,Dt,Qt,Ot,Nt);w.generateMipmaps=!1}else if(Xt){if(fe){let it=Lt(vt);e.texStorage2D(i.TEXTURE_2D,Rt,Dt,it.width,it.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Qt,Ot,vt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Qt,Ot,vt);_(w,Te)&&b(ut),kt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function O(A,w,ct){if(w.image.length!==6)return;let ut=ht(A,w),yt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+ct);let xt=n.get(yt);if(yt.version!==xt.__version||ut===!0){e.activeTexture(i.TEXTURE0+ct);let kt=oe.getPrimaries(oe.workingColorSpace),zt=w.colorSpace===di?null:oe.getPrimaries(w.colorSpace),wt=w.colorSpace===di||kt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let At=w.isCompressedTexture||w.image[0].isCompressedTexture,Gt=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!At&&!Gt?vt[it]=m(w.image[it],!1,!0,s.maxCubemapSize):vt[it]=Gt?w.image[it].image:w.image[it],vt[it]=gt(w,vt[it]);let Te=vt[0],Qt=g(Te)||a,Ot=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type),Nt=L(w.internalFormat,Ot,Dt,w.colorSpace),ee=a&&w.isVideoTexture!==!0,Xt=xt.__version===void 0||ut===!0,fe=yt.dataReady,X=C(w,Te,Qt);G(i.TEXTURE_CUBE_MAP,w,Qt);let Rt;if(At){ee&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Nt,Te.width,Te.height);for(let it=0;it<6;it++){Rt=vt[it].mipmaps;for(let Et=0;Et<Rt.length;Et++){let Ct=Rt[Et];w.format!==Dn?Ot!==null?ee?fe&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Ct.width,Ct.height,Ot,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?fe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Ct.width,Ct.height,Ot,Dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Nt,Ct.width,Ct.height,0,Ot,Dt,Ct.data)}}}else{if(Rt=w.mipmaps,ee&&Xt){Rt.length>0&&X++;let it=Lt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Nt,it.width,it.height)}for(let it=0;it<6;it++)if(Gt){ee?fe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,Ot,Dt,vt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Nt,vt[it].width,vt[it].height,0,Ot,Dt,vt[it].data);for(let Et=0;Et<Rt.length;Et++){let jt=Rt[Et].image[it].image;ee?fe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,jt.width,jt.height,Ot,Dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Nt,jt.width,jt.height,0,Ot,Dt,jt.data)}}else{ee?fe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Dt,vt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Nt,Ot,Dt,vt[it]);for(let Et=0;Et<Rt.length;Et++){let Ct=Rt[Et];ee?fe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,Ot,Dt,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Nt,Ot,Dt,Ct.image[it])}}}_(w,Qt)&&b(i.TEXTURE_CUBE_MAP),xt.__version=yt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function J(A,w,ct,ut,yt,xt){let kt=r.convert(ct.format,ct.colorSpace),zt=r.convert(ct.type),wt=L(ct.internalFormat,kt,zt,ct.colorSpace);if(!n.get(w).__hasExternalTextures){let Gt=Math.max(1,w.width>>xt),vt=Math.max(1,w.height>>xt);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,xt,wt,Gt,vt,w.depth,0,kt,zt,null):e.texImage2D(yt,xt,wt,Gt,vt,0,kt,zt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,yt,n.get(ct).__webglTexture,0,Y(w)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,yt,n.get(ct).__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(A,w,ct){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ut=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ct||F(w)){let yt=w.depthTexture;yt&&yt.isDepthTexture&&(yt.type===Vn?ut=i.DEPTH_COMPONENT32F:yt.type===fi&&(ut=i.DEPTH_COMPONENT24));let xt=Y(w);F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,ut,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ut,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ut,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let ut=Y(w);ct&&F(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ut=w.textures;for(let yt=0;yt<ut.length;yt++){let xt=ut[yt],kt=r.convert(xt.format,xt.colorSpace),zt=r.convert(xt.type),wt=L(xt.internalFormat,kt,zt,xt.colorSpace),At=Y(w);ct&&F(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,wt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,wt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let ut=n.get(w.depthTexture).__webglTexture,yt=Y(w);if(w.depthTexture.format===ki)F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(w.depthTexture.format===Cs)F(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function nt(A){let w=n.get(A),ct=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(ct)throw new Error("target.depthTexture not supported in Cube render targets");pt(w.__webglFramebuffer,A)}else if(ct){w.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ut]),w.__webglDepthbuffer[ut]=i.createRenderbuffer(),j(w.__webglDepthbuffer[ut],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),j(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function R(A,w,ct){let ut=n.get(A);w!==void 0&&J(ut.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ct!==void 0&&nt(A)}function ot(A){let w=A.texture,ct=n.get(A),ut=n.get(w);A.addEventListener("dispose",z);let yt=A.textures,xt=A.isWebGLCubeRenderTarget===!0,kt=yt.length>1,zt=g(A)||a;if(kt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=w.version,o.memory.textures++),xt){ct.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(a&&w.mipmaps&&w.mipmaps.length>0){ct.__webglFramebuffer[wt]=[];for(let At=0;At<w.mipmaps.length;At++)ct.__webglFramebuffer[wt][At]=i.createFramebuffer()}else ct.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){ct.__webglFramebuffer=[];for(let wt=0;wt<w.mipmaps.length;wt++)ct.__webglFramebuffer[wt]=i.createFramebuffer()}else ct.__webglFramebuffer=i.createFramebuffer();if(kt)if(s.drawBuffers)for(let wt=0,At=yt.length;wt<At;wt++){let Gt=n.get(yt[wt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&F(A)===!1){ct.__webglMultisampledFramebuffer=i.createFramebuffer(),ct.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){let At=yt[wt];ct.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ct.__webglColorRenderbuffer[wt]);let Gt=r.convert(At.format,At.colorSpace),vt=r.convert(At.type),Te=L(At.internalFormat,Gt,vt,At.colorSpace,A.isXRRenderTarget===!0),Qt=Y(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(ct.__webglDepthRenderbuffer=i.createRenderbuffer(),j(ct.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),G(i.TEXTURE_CUBE_MAP,w,zt);for(let wt=0;wt<6;wt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)J(ct.__webglFramebuffer[wt][At],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At);else J(ct.__webglFramebuffer[wt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);_(w,zt)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let wt=0,At=yt.length;wt<At;wt++){let Gt=yt[wt],vt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),G(i.TEXTURE_2D,Gt,zt),J(ct.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),_(Gt,zt)&&b(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?wt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(wt,ut.__webglTexture),G(wt,w,zt),a&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)J(ct.__webglFramebuffer[At],A,w,i.COLOR_ATTACHMENT0,wt,At);else J(ct.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,wt,0);_(w,zt)&&b(wt),e.unbindTexture()}A.depthBuffer&&nt(A)}function Q(A){let w=g(A)||a,ct=A.textures;for(let ut=0,yt=ct.length;ut<yt;ut++){let xt=ct[ut];if(_(xt,w)){let kt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,zt=n.get(xt).__webglTexture;e.bindTexture(kt,zt),b(kt),e.unbindTexture()}}}function V(A){if(a&&A.samples>0&&F(A)===!1){let w=A.textures,ct=A.width,ut=A.height,yt=i.COLOR_BUFFER_BIT,xt=[],kt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(A),wt=w.length>1;if(wt)for(let At=0;At<w.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let At=0;At<w.length;At++){xt.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&xt.push(kt);let Gt=zt.__ignoreDepthValues!==void 0?zt.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),wt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[At]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[kt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[kt])),wt){let vt=n.get(w[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,ct,ut,0,0,ct,ut,yt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let At=0;At<w.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,zt.__webglColorRenderbuffer[At]);let Gt=n.get(w[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}}function Y(A){return Math.min(s.maxSamples,A.samples)}function F(A){let w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function K(A){let w=o.render.frame;u.get(A)!==w&&(u.set(A,w),A.update())}function gt(A,w){let ct=A.colorSpace,ut=A.format,yt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ja||ct!==bi&&ct!==di&&(oe.getTransfer(ct)===he?a===!1?t.has("EXT_sRGB")===!0&&ut===Dn?(A.format=Ja,A.minFilter=rn,A.generateMipmaps=!1):w=xo.sRGBToLinear(w):(ut!==Dn||yt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ct)),w}function Lt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=D,this.setTexture3D=E,this.setTextureCube=H,this.rebindTextures=R,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=F}function d1(i,t,e){let n=e.isWebGL2;function s(r,o=di){let a,l=oe.getTransfer(o);if(r===gi)return i.UNSIGNED_BYTE;if(r===jh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===tu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===sf)return i.BYTE;if(r===rf)return i.SHORT;if(r===zl)return i.UNSIGNED_SHORT;if(r===Qh)return i.INT;if(r===fi)return i.UNSIGNED_INT;if(r===Vn)return i.FLOAT;if(r===ar)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===of)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===af)return i.LUMINANCE;if(r===lf)return i.LUMINANCE_ALPHA;if(r===ki)return i.DEPTH_COMPONENT;if(r===Cs)return i.DEPTH_STENCIL;if(r===Ja)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===eu)return i.RED;if(r===nu)return i.RED_INTEGER;if(r===cf)return i.RG;if(r===iu)return i.RG_INTEGER;if(r===su)return i.RGBA_INTEGER;if(r===aa||r===la||r===ca||r===ha)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===la)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mc||r===bc||r===Ec||r===wc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ru)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sc||r===Tc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Sc)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Tc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ac||r===Rc||r===Cc||r===Pc||r===Ic||r===Lc||r===Dc||r===Nc||r===Uc||r===Fc||r===Oc||r===zc||r===Bc||r===Hc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ac)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ic)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hc)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ua||r===kc||r===Gc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ua)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===Vc||r===Wc||r===Xc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ua)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var hl=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ft=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},f1={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},p1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m1=`
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

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new Mn({extensions:{fragDepth:!0},vertexShader:p1,fragmentShader:m1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new yi(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},dl=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new ul,m=e.getContextAttributes(),g=null,y=null,_=[],b=[],L=new mt,C=null,P=new on;P.layers.enable(1),P.viewport=new ge;let v=new on;v.layers.enable(2),v.viewport=new ge;let z=[P,v],M=new hl;M.layers.enable(1),M.layers.enable(2);let S=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ht=_[G];return ht===void 0&&(ht=new ir,_[G]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(G){let ht=_[G];return ht===void 0&&(ht=new ir,_[G]=ht),ht.getGripSpace()},this.getHand=function(G){let ht=_[G];return ht===void 0&&(ht=new ir,_[G]=ht),ht.getHandSpace()};function $(G){let ht=b.indexOf(G.inputSource);if(ht===-1)return;let _t=_[ht];_t!==void 0&&(_t.update(G.inputSource,G.frame,c||o),_t.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",B);for(let G=0;G<_.length;G++){let ht=b[G];ht!==null&&(b[G]=null,_[G].disconnect(ht))}S=null,rt=null,x.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,y=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",I),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ht={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,_t=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?Cs:ki,_t=m.stencil?Hi:fi);let J={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(J),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Nn(d.textureWidth,d.textureHeight,{format:Dn,type:gi,depthTexture:new So(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});let j=t.properties.get(y);j.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(G){for(let ht=0;ht<G.removed.length;ht++){let _t=G.removed[ht],O=b.indexOf(_t);O>=0&&(b[O]=null,_[O].disconnect(_t))}for(let ht=0;ht<G.added.length;ht++){let _t=G.added[ht],O=b.indexOf(_t);if(O===-1){for(let j=0;j<_.length;j++)if(j>=b.length){b.push(_t),O=j;break}else if(b[j]===null){b[j]=_t,O=j;break}if(O===-1)break}let J=_[O];J&&J.connect(_t)}}let k=new N,q=new N;function D(G,ht,_t){k.setFromMatrixPosition(ht.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);let O=k.distanceTo(q),J=ht.projectionMatrix.elements,j=_t.projectionMatrix.elements,pt=J[14]/(J[10]-1),nt=J[14]/(J[10]+1),R=(J[9]+1)/J[5],ot=(J[9]-1)/J[5],Q=(J[8]-1)/J[0],V=(j[8]+1)/j[0],Y=pt*Q,F=pt*V,K=O/(-Q+V),gt=K*-Q;ht.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(gt),G.translateZ(K),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let Lt=pt+K,A=nt+K,w=Y-gt,ct=F+(O-gt),ut=R*nt/A*Lt,yt=ot*nt/A*Lt;G.projectionMatrix.makePerspective(w,ct,ut,yt,Lt,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function E(G,ht){ht===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ht.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),M.near=v.near=P.near=G.near,M.far=v.far=P.far=G.far,(S!==M.near||rt!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,rt=M.far,P.near=S,P.far=rt,v.near=S,v.far=rt,P.updateProjectionMatrix(),v.updateProjectionMatrix(),G.updateProjectionMatrix());let ht=G.parent,_t=M.cameras;E(M,ht);for(let O=0;O<_t.length;O++)E(_t[O],ht);_t.length===2?D(M,P,v):M.projectionMatrix.copy(P.projectionMatrix),H(G,M,ht)};function H(G,ht,_t){_t===null?G.matrix.copy(ht.matrixWorld):(G.matrix.copy(_t.matrixWorld),G.matrix.invert(),G.matrix.multiply(ht.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ht.projectionMatrix),G.projectionMatrixInverse.copy(ht.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ka*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null};let W=null;function et(G,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let O=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let j=0;j<_t.length;j++){let pt=_t[j],nt=null;if(f!==null)nt=f.getViewport(pt);else{let ot=u.getViewSubImage(d,pt);nt=ot.viewport,j===0&&(t.setRenderTargetTextures(y,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(y))}let R=z[j];R===void 0&&(R=new on,R.layers.enable(j),R.viewport=new ge,z[j]=R),R.matrix.fromArray(pt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(pt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(nt.x,nt.y,nt.width,nt.height),j===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(R)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")){let j=u.getDepthInformation(_t[0]);j&&j.isValid&&j.texture&&x.init(t,j,s.renderState)}}for(let _t=0;_t<_.length;_t++){let O=b[_t],J=_[_t];O!==null&&J!==void 0&&J.update(O,ht,c||o)}x.render(t,M),W&&W(G,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let ft=new du;ft.setAnimationLoop(et),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}},Ui=new vn,g1=new ne;function x1(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,uu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,_,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),_=y.envMap,b=y.envMapRotation;if(_&&(m.envMap.value=_,Ui.copy(b),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Ui)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;let L=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*L,e(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),t.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _1(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(p(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(y,L);let C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,P=b.length;C<P;C++){let v=Array.isArray(b[C])?b[C]:[b[C]];for(let z=0,M=v.length;z<M;z++){let S=v[z];if(f(S,C,z,L)===!0){let rt=S.__offset,$=Array.isArray(S.value)?S.value:[S.value],I=0;for(let B=0;B<$.length;B++){let k=$[B],q=x(k);typeof k=="number"||typeof k=="boolean"?(S.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,rt+I,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=0,S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=0,S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=0):(k.toArray(S.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,L){let C=y.value,P=_+"_"+b;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{let v=L[P];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return L[P]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function p(y){let _=y.uniforms,b=0,L=16;for(let P=0,v=_.length;P<v;P++){let z=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,S=z.length;M<S;M++){let rt=z[M],$=Array.isArray(rt.value)?rt.value:[rt.value];for(let I=0,B=$.length;I<B;I++){let k=$[I],q=x(k),D=b%L;D!==0&&L-D<q.boundary&&(b+=L-D),rt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=b,b+=q.storage}}}let C=b%L;return C>0&&(b+=L-C),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var hr=class{constructor(t={}){let{canvas:e=Mf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),p=new Int32Array(4),x=null,m=null,g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;let _=this,b=!1,L=0,C=0,P=null,v=-1,z=null,M=new ge,S=new ge,rt=null,$=new Vt(0),I=0,B=e.width,k=e.height,q=1,D=null,E=null,H=new ge(0,0,B,k),W=new ge(0,0,B,k),et=!1,ft=new cr,G=!1,ht=!1,_t=null,O=new ne,J=new mt,j=new N,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return P===null?q:1}let R=n;function ot(T,Z){for(let st=0;st<T.length;st++){let at=T[st],tt=e.getContext(at,Z);if(tt!==null)return tt}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),R===null){let Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),R=ot(Z,T),R===null)throw ot(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,V,Y,F,K,gt,Lt,A,w,ct,ut,yt,xt,kt,zt,wt,At,Gt,vt,Te,Qt,Ot,Dt,Nt;function ee(){Q=new Nm(R),V=new Rm(R,Q,t),Q.init(V),Ot=new d1(R,Q,V),Y=new h1(R,Q,V),F=new Om(R),K=new Qg,gt=new u1(R,Q,Y,K,V,Ot,F),Lt=new Pm(_),A=new Dm(_),w=new Vf(R,V),Dt=new Tm(R,Q,w,V),ct=new Um(R,w,F,Dt),ut=new km(R,ct,w,F),vt=new Hm(R,V,gt),wt=new Cm(K),yt=new Kg(_,Lt,A,Q,V,Dt,wt),xt=new x1(_,K),kt=new t1,zt=new o1(Q,V),Gt=new Sm(_,Lt,A,Y,ut,d,l),At=new c1(_,ut,V),Nt=new _1(R,F,V,Y),Te=new Am(R,Q,F,V),Qt=new Fm(R,Q,F,V),F.programs=yt.programs,_.capabilities=V,_.extensions=Q,_.properties=K,_.renderLists=kt,_.shadowMap=At,_.state=Y,_.info=F}ee();let Xt=new dl(_,R);this.xr=Xt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(B,k,!1))},this.getSize=function(T){return T.set(B,k)},this.setSize=function(T,Z,st=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,k=Z,e.width=Math.floor(T*q),e.height=Math.floor(Z*q),st===!0&&(e.style.width=T+"px",e.style.height=Z+"px"),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set(B*q,k*q).floor()},this.setDrawingBufferSize=function(T,Z,st){B=T,k=Z,q=st,e.width=Math.floor(T*st),e.height=Math.floor(Z*st),this.setViewport(0,0,T,Z)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(H)},this.setViewport=function(T,Z,st,at){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,Z,st,at),Y.viewport(M.copy(H).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(W)},this.setScissor=function(T,Z,st,at){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,Z,st,at),Y.scissor(S.copy(W).multiplyScalar(q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){Y.setScissorTest(et=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){E=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,Z=!0,st=!0){let at=0;if(T){let tt=!1;if(P!==null){let It=P.texture.format;tt=It===su||It===iu||It===nu}if(tt){let It=P.texture.type,Ut=It===gi||It===fi||It===zl||It===Hi||It===jh||It===tu,Bt=Gt.getClearColor(),Ht=Gt.getClearAlpha(),Kt=Bt.r,Wt=Bt.g,Yt=Bt.b;Ut?(f[0]=Kt,f[1]=Wt,f[2]=Yt,f[3]=Ht,R.clearBufferuiv(R.COLOR,0,f)):(p[0]=Kt,p[1]=Wt,p[2]=Yt,p[3]=Ht,R.clearBufferiv(R.COLOR,0,p))}else at|=R.COLOR_BUFFER_BIT}Z&&(at|=R.DEPTH_BUFFER_BIT),st&&(at|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),kt.dispose(),zt.dispose(),K.dispose(),Lt.dispose(),A.dispose(),ut.dispose(),Dt.dispose(),Nt.dispose(),yt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",xn),Xt.removeEventListener("sessionend",ce),_t&&(_t.dispose(),_t=null),Ke.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=F.autoReset,Z=At.enabled,st=At.autoUpdate,at=At.needsUpdate,tt=At.type;ee(),F.autoReset=T,At.enabled=Z,At.autoUpdate=st,At.needsUpdate=at,At.type=tt}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){let Z=T.target;Z.removeEventListener("dispose",it),Et(Z)}function Et(T){Ct(T),K.remove(T)}function Ct(T){let Z=K.get(T).programs;Z!==void 0&&(Z.forEach(function(st){yt.releaseProgram(st)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,st,at,tt,It){Z===null&&(Z=pt);let Ut=tt.isMesh&&tt.matrixWorld.determinant()<0,Bt=vd(T,Z,st,at,tt);Y.setMaterial(at,Ut);let Ht=st.index,Kt=1;if(at.wireframe===!0){if(Ht=ct.getWireframeAttribute(st),Ht===void 0)return;Kt=2}let Wt=st.drawRange,Yt=st.attributes.position,Ee=Wt.start*Kt,hn=(Wt.start+Wt.count)*Kt;It!==null&&(Ee=Math.max(Ee,It.start*Kt),hn=Math.min(hn,(It.start+It.count)*Kt)),Ht!==null?(Ee=Math.max(Ee,0),hn=Math.min(hn,Ht.count)):Yt!=null&&(Ee=Math.max(Ee,0),hn=Math.min(hn,Yt.count));let De=hn-Ee;if(De<0||De===1/0)return;Dt.setup(tt,at,Bt,st,Ht);let qn,ye=Te;if(Ht!==null&&(qn=w.get(Ht),ye=Qt,ye.setIndex(qn)),tt.isMesh)at.wireframe===!0?(Y.setLineWidth(at.wireframeLinewidth*nt()),ye.setMode(R.LINES)):ye.setMode(R.TRIANGLES);else if(tt.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Y.setLineWidth(qt*nt()),tt.isLineSegments?ye.setMode(R.LINES):tt.isLineLoop?ye.setMode(R.LINE_LOOP):ye.setMode(R.LINE_STRIP)}else tt.isPoints?ye.setMode(R.POINTS):tt.isSprite&&ye.setMode(R.TRIANGLES);if(tt.isBatchedMesh)ye.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ye.renderInstances(Ee,De,tt.count);else if(st.isInstancedBufferGeometry){let qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,na=Math.min(st.instanceCount,qt);ye.renderInstances(Ee,De,na)}else ye.render(Ee,De)};function jt(T,Z,st){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,Ur(T,Z,st),T.side=xi,T.needsUpdate=!0,Ur(T,Z,st),T.side=Fe):Ur(T,Z,st)}this.compile=function(T,Z,st=null){st===null&&(st=T),m=zt.get(st),m.init(),y.push(m),st.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),T!==st&&T.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights(_._useLegacyLights);let at=new Set;return T.traverse(function(tt){let It=tt.material;if(It)if(Array.isArray(It))for(let Ut=0;Ut<It.length;Ut++){let Bt=It[Ut];jt(Bt,st,tt),at.add(Bt)}else jt(It,st,tt),at.add(It)}),y.pop(),m=null,at},this.compileAsync=function(T,Z,st=null){let at=this.compile(T,Z,st);return new Promise(tt=>{function It(){if(at.forEach(function(Ut){K.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){tt(T);return}setTimeout(It,10)}Q.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let le=null;function Be(T){le&&le(T)}function xn(){Ke.stop()}function ce(){Ke.start()}let Ke=new du;Ke.setAnimationLoop(Be),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){le=T,Xt.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},Xt.addEventListener("sessionstart",xn),Xt.addEventListener("sessionend",ce),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(Z),Z=Xt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,Z,P),m=zt.get(T,y.length),m.init(),y.push(m),O.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ft.setFromProjectionMatrix(O),ht=this.localClippingEnabled,G=wt.init(this.clippingPlanes,ht),x=kt.get(T,g.length),x.init(),g.push(x),kn(T,Z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,E),this.info.render.frame++,G===!0&&wt.beginShadows();let st=m.state.shadowsArray;if(At.render(st,T,Z),G===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1)&&Gt.render(x,T),m.setupLights(_._useLegacyLights),Z.isArrayCamera){let at=Z.cameras;for(let tt=0,It=at.length;tt<It;tt++){let Ut=at[tt];cc(x,T,Ut,Ut.viewport)}}else cc(x,T,Z);P!==null&&(gt.updateMultisampleRenderTarget(P),gt.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,Z),Dt.resetDefaultState(),v=-1,z=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function kn(T,Z,st,at){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ft.intersectsSprite(T)){at&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(O);let Ut=ut.update(T),Bt=T.material;Bt.visible&&x.push(T,Ut,Bt,st,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ft.intersectsObject(T))){let Ut=ut.update(T),Bt=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),j.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),j.copy(Ut.boundingSphere.center)),j.applyMatrix4(T.matrixWorld).applyMatrix4(O)),Array.isArray(Bt)){let Ht=Ut.groups;for(let Kt=0,Wt=Ht.length;Kt<Wt;Kt++){let Yt=Ht[Kt],Ee=Bt[Yt.materialIndex];Ee&&Ee.visible&&x.push(T,Ut,Ee,st,j.z,Yt)}}else Bt.visible&&x.push(T,Ut,Bt,st,j.z,null)}}let It=T.children;for(let Ut=0,Bt=It.length;Ut<Bt;Ut++)kn(It[Ut],Z,st,at)}function cc(T,Z,st,at){let tt=T.opaque,It=T.transmissive,Ut=T.transparent;m.setupLightsView(st),G===!0&&wt.setGlobalState(_.clippingPlanes,st),It.length>0&&yd(tt,It,Z,st),at&&Y.viewport(M.copy(at)),tt.length>0&&Nr(tt,Z,st),It.length>0&&Nr(It,Z,st),Ut.length>0&&Nr(Ut,Z,st),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function yd(T,Z,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;let It=V.isWebGL2;_t===null&&(_t=new Nn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ar:gi,minFilter:Bi,samples:It?4:0})),_.getDrawingBufferSize(J),It?_t.setSize(J.x,J.y):_t.setSize(Qa(J.x),Qa(J.y));let Ut=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor($),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Bt=_.toneMapping;_.toneMapping=mi,Nr(T,st,at),gt.updateMultisampleRenderTarget(_t),gt.updateRenderTargetMipmap(_t);let Ht=!1;for(let Kt=0,Wt=Z.length;Kt<Wt;Kt++){let Yt=Z[Kt],Ee=Yt.object,hn=Yt.geometry,De=Yt.material,qn=Yt.group;if(De.side===Fe&&Ee.layers.test(at.layers)){let ye=De.side;De.side=$e,De.needsUpdate=!0,hc(Ee,st,at,hn,De,qn),De.side=ye,De.needsUpdate=!0,Ht=!0}}Ht===!0&&(gt.updateMultisampleRenderTarget(_t),gt.updateRenderTargetMipmap(_t)),_.setRenderTarget(Ut),_.setClearColor($,I),_.toneMapping=Bt}function Nr(T,Z,st){let at=Z.isScene===!0?Z.overrideMaterial:null;for(let tt=0,It=T.length;tt<It;tt++){let Ut=T[tt],Bt=Ut.object,Ht=Ut.geometry,Kt=at===null?Ut.material:at,Wt=Ut.group;Bt.layers.test(st.layers)&&hc(Bt,Z,st,Ht,Kt,Wt)}}function hc(T,Z,st,at,tt,It){T.onBeforeRender(_,Z,st,at,tt,It),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),tt.onBeforeRender(_,Z,st,at,T,It),tt.transparent===!0&&tt.side===Fe&&tt.forceSinglePass===!1?(tt.side=$e,tt.needsUpdate=!0,_.renderBufferDirect(st,Z,at,tt,T,It),tt.side=xi,tt.needsUpdate=!0,_.renderBufferDirect(st,Z,at,tt,T,It),tt.side=Fe):_.renderBufferDirect(st,Z,at,tt,T,It),T.onAfterRender(_,Z,st,at,tt,It)}function Ur(T,Z,st){Z.isScene!==!0&&(Z=pt);let at=K.get(T),tt=m.state.lights,It=m.state.shadowsArray,Ut=tt.state.version,Bt=yt.getParameters(T,tt.state,It,Z,st),Ht=yt.getProgramCacheKey(Bt),Kt=at.programs;at.environment=T.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(T.isMeshStandardMaterial?A:Lt).get(T.envMap||at.environment),at.envMapRotation=at.environment!==null&&T.envMap===null?Z.environmentRotation:T.envMapRotation,Kt===void 0&&(T.addEventListener("dispose",it),Kt=new Map,at.programs=Kt);let Wt=Kt.get(Ht);if(Wt!==void 0){if(at.currentProgram===Wt&&at.lightsStateVersion===Ut)return dc(T,Bt),Wt}else Bt.uniforms=yt.getUniforms(T),T.onBuild(st,Bt,_),T.onBeforeCompile(Bt,_),Wt=yt.acquireProgram(Bt,Ht),Kt.set(Ht,Wt),at.uniforms=Bt.uniforms;let Yt=at.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),dc(T,Bt),at.needsLights=bd(T),at.lightsStateVersion=Ut,at.needsLights&&(Yt.ambientLightColor.value=tt.state.ambient,Yt.lightProbe.value=tt.state.probe,Yt.directionalLights.value=tt.state.directional,Yt.directionalLightShadows.value=tt.state.directionalShadow,Yt.spotLights.value=tt.state.spot,Yt.spotLightShadows.value=tt.state.spotShadow,Yt.rectAreaLights.value=tt.state.rectArea,Yt.ltc_1.value=tt.state.rectAreaLTC1,Yt.ltc_2.value=tt.state.rectAreaLTC2,Yt.pointLights.value=tt.state.point,Yt.pointLightShadows.value=tt.state.pointShadow,Yt.hemisphereLights.value=tt.state.hemi,Yt.directionalShadowMap.value=tt.state.directionalShadowMap,Yt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Yt.spotShadowMap.value=tt.state.spotShadowMap,Yt.spotLightMatrix.value=tt.state.spotLightMatrix,Yt.spotLightMap.value=tt.state.spotLightMap,Yt.pointShadowMap.value=tt.state.pointShadowMap,Yt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=Wt,at.uniformsList=null,Wt}function uc(T){if(T.uniformsList===null){let Z=T.currentProgram.getUniforms();T.uniformsList=Ts.seqWithValue(Z.seq,T.uniforms)}return T.uniformsList}function dc(T,Z){let st=K.get(T);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function vd(T,Z,st,at,tt){Z.isScene!==!0&&(Z=pt),gt.resetTextureUnits();let It=Z.fog,Ut=at.isMeshStandardMaterial?Z.environment:null,Bt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bi,Ht=(at.isMeshStandardMaterial?A:Lt).get(at.envMap||Ut),Kt=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Wt=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!st.morphAttributes.position,Ee=!!st.morphAttributes.normal,hn=!!st.morphAttributes.color,De=mi;at.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(De=_.toneMapping);let qn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ye=qn!==void 0?qn.length:0,qt=K.get(at),na=m.state.lights;if(G===!0&&(ht===!0||T!==z)){let _n=T===z&&at.id===v;wt.setState(at,T,_n)}let pe=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==na.state.version||qt.outputColorSpace!==Bt||tt.isBatchedMesh&&qt.batching===!1||!tt.isBatchedMesh&&qt.batching===!0||tt.isInstancedMesh&&qt.instancing===!1||!tt.isInstancedMesh&&qt.instancing===!0||tt.isSkinnedMesh&&qt.skinning===!1||!tt.isSkinnedMesh&&qt.skinning===!0||tt.isInstancedMesh&&qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&qt.instancingMorph===!1&&tt.morphTexture!==null||qt.envMap!==Ht||at.fog===!0&&qt.fog!==It||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==wt.numPlanes||qt.numIntersection!==wt.numIntersection)||qt.vertexAlphas!==Kt||qt.vertexTangents!==Wt||qt.morphTargets!==Yt||qt.morphNormals!==Ee||qt.morphColors!==hn||qt.toneMapping!==De||V.isWebGL2===!0&&qt.morphTargetsCount!==ye)&&(pe=!0):(pe=!0,qt.__version=at.version);let Ri=qt.currentProgram;pe===!0&&(Ri=Ur(at,Z,tt));let fc=!1,qs=!1,ia=!1,Xe=Ri.getUniforms(),Ci=qt.uniforms;if(Y.useProgram(Ri.program)&&(fc=!0,qs=!0,ia=!0),at.id!==v&&(v=at.id,qs=!0),fc||z!==T){Xe.setValue(R,"projectionMatrix",T.projectionMatrix),Xe.setValue(R,"viewMatrix",T.matrixWorldInverse);let _n=Xe.map.cameraPosition;_n!==void 0&&_n.setValue(R,j.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&Xe.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Xe.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,qs=!0,ia=!0)}if(tt.isSkinnedMesh){Xe.setOptional(R,tt,"bindMatrix"),Xe.setOptional(R,tt,"bindMatrixInverse");let _n=tt.skeleton;_n&&(V.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Xe.setValue(R,"boneTexture",_n.boneTexture,gt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(Xe.setOptional(R,tt,"batchingTexture"),Xe.setValue(R,"batchingTexture",tt._matricesTexture,gt));let sa=st.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&V.isWebGL2===!0)&&vt.update(tt,st,Ri),(qs||qt.receiveShadow!==tt.receiveShadow)&&(qt.receiveShadow=tt.receiveShadow,Xe.setValue(R,"receiveShadow",tt.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Ci.envMap.value=Ht,Ci.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),qs&&(Xe.setValue(R,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&Md(Ci,ia),It&&at.fog===!0&&xt.refreshFogUniforms(Ci,It),xt.refreshMaterialUniforms(Ci,at,q,k,_t),Ts.upload(R,uc(qt),Ci,gt)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Ts.upload(R,uc(qt),Ci,gt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Xe.setValue(R,"center",tt.center),Xe.setValue(R,"modelViewMatrix",tt.modelViewMatrix),Xe.setValue(R,"normalMatrix",tt.normalMatrix),Xe.setValue(R,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let _n=at.uniformsGroups;for(let ra=0,Ed=_n.length;ra<Ed;ra++)if(V.isWebGL2){let pc=_n[ra];Nt.update(pc,Ri),Nt.bind(pc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Md(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function bd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,Z,st){K.get(T.texture).__webglTexture=Z,K.get(T.depthTexture).__webglTexture=st;let at=K.get(T);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=st===void 0,at.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,Z){let st=K.get(T);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(T,Z=0,st=0){P=T,L=Z,C=st;let at=!0,tt=null,It=!1,Ut=!1;if(T){let Ht=K.get(T);Ht.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(R.FRAMEBUFFER,null),at=!1):Ht.__webglFramebuffer===void 0?gt.setupRenderTarget(T):Ht.__hasExternalTextures&&gt.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);let Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);let Wt=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?tt=Wt[Z][st]:tt=Wt[Z],It=!0):V.isWebGL2&&T.samples>0&&gt.useMultisampledRTT(T)===!1?tt=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?tt=Wt[st]:tt=Wt,M.copy(T.viewport),S.copy(T.scissor),rt=T.scissorTest}else M.copy(H).multiplyScalar(q).floor(),S.copy(W).multiplyScalar(q).floor(),rt=et;if(Y.bindFramebuffer(R.FRAMEBUFFER,tt)&&V.drawBuffers&&at&&Y.drawBuffers(T,tt),Y.viewport(M),Y.scissor(S),Y.setScissorTest(rt),It){let Ht=K.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ht.__webglTexture,st)}else if(Ut){let Ht=K.get(T.texture),Kt=Z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.__webglTexture,st||0,Kt)}v=-1},this.readRenderTargetPixels=function(T,Z,st,at,tt,It,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Y.bindFramebuffer(R.FRAMEBUFFER,Bt);try{let Ht=T.texture,Kt=Ht.format,Wt=Ht.type;if(Kt!==Dn&&Ot.convert(Kt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Wt===ar&&(Q.has("EXT_color_buffer_half_float")||V.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Wt!==gi&&Ot.convert(Wt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Vn&&(V.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-at&&st>=0&&st<=T.height-tt&&R.readPixels(Z,st,at,tt,Ot.convert(Kt),Ot.convert(Wt),It)}finally{let Ht=P!==null?K.get(P).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(T,Z,st=0){let at=Math.pow(2,-st),tt=Math.floor(Z.image.width*at),It=Math.floor(Z.image.height*at);gt.setTexture2D(Z,0),R.copyTexSubImage2D(R.TEXTURE_2D,st,0,0,T.x,T.y,tt,It),Y.unbindTexture()},this.copyTextureToTexture=function(T,Z,st,at=0){let tt=Z.image.width,It=Z.image.height,Ut=Ot.convert(st.format),Bt=Ot.convert(st.type);gt.setTexture2D(st,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,st.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,st.unpackAlignment),Z.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,at,T.x,T.y,tt,It,Ut,Bt,Z.image.data):Z.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,at,T.x,T.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ut,Z.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,at,T.x,T.y,Ut,Bt,Z.image),at===0&&st.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,Z,st,at,tt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let It=Math.round(T.max.x-T.min.x),Ut=Math.round(T.max.y-T.min.y),Bt=T.max.z-T.min.z+1,Ht=Ot.convert(at.format),Kt=Ot.convert(at.type),Wt;if(at.isData3DTexture)gt.setTexture3D(at,0),Wt=R.TEXTURE_3D;else if(at.isDataArrayTexture||at.isCompressedArrayTexture)gt.setTexture2DArray(at,0),Wt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,at.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,at.unpackAlignment);let Yt=R.getParameter(R.UNPACK_ROW_LENGTH),Ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),hn=R.getParameter(R.UNPACK_SKIP_PIXELS),De=R.getParameter(R.UNPACK_SKIP_ROWS),qn=R.getParameter(R.UNPACK_SKIP_IMAGES),ye=st.isCompressedTexture?st.mipmaps[tt]:st.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,T.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,T.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,T.min.z),st.isDataTexture||st.isData3DTexture?R.texSubImage3D(Wt,tt,Z.x,Z.y,Z.z,It,Ut,Bt,Ht,Kt,ye.data):at.isCompressedArrayTexture?R.compressedTexSubImage3D(Wt,tt,Z.x,Z.y,Z.z,It,Ut,Bt,Ht,ye.data):R.texSubImage3D(Wt,tt,Z.x,Z.y,Z.z,It,Ut,Bt,Ht,Kt,ye),R.pixelStorei(R.UNPACK_ROW_LENGTH,Yt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qn),tt===0&&at.generateMipmaps&&R.generateMipmap(Wt),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?gt.setTextureCube(T,0):T.isData3DTexture?gt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?gt.setTexture2DArray(T,0):gt.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){L=0,C=0,P=null,Y.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Bl?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Bo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},fl=class extends hr{};fl.prototype.isWebGL1Renderer=!0;var vi=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var pl=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ne,zh=new ne,io=[],Bh=new Un,y1=new ne,tr=new Mt,er=new Vi,Ds=class extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),Bh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(Bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),er.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),zh.multiplyMatrices(n,ys),tr.matrixWorld=zh,tr.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pl(new Float32Array(s*this.count),s,this.count,eu,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ao=class extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,l=new ne;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},dr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends dr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var so=new N,Ba=new kl,Ha=new kl,ka=new kl,Ns=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),c=so);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=so),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ba.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ba.calc(l),Ha.calc(l),ka.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function v1(i,t){let e=1-i;return e*e*t}function M1(i,t){return 2*(1-i)*i*t}function b1(i,t){return i*i*t}function sr(i,t,e,n){return v1(i,t)+M1(i,e)+b1(i,n)}function E1(i,t){let e=1-i;return e*e*e*t}function w1(i,t){let e=1-i;return 3*e*e*i*t}function S1(i,t){return 3*(1-i)*i*i*t}function T1(i,t){return i*i*i*t}function rr(i,t,e,n,s){return E1(i,t)+w1(i,e)+S1(i,n)+T1(i,s)}var Ro=class extends bn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends bn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y),rr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends bn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends bn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends bn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends bn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y),sr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hh(a,l.x,c.x,h.x,u.x),Hh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},Do=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:Ns,CubicBezierCurve:Ro,CubicBezierCurve3:gl,EllipseCurve:dr,LineCurve:Co,LineCurve3:xl,QuadraticBezierCurve:Po,QuadraticBezierCurve3:Io,SplineCurve:Lo}),_l=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Do[s.type]().fromJSON(s))}return this}},Us=class extends _l{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Po(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new dr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yi=class i extends xe{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new N,d=new mt,f=new N,p=new N,x=new N,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let _=n+y*h*s,b=Math.sin(_),L=Math.cos(_);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=C/(t.length-1),a.push(d.x,d.y);let P=l[3*C+0]*b,v=l[3*C+1],z=l[3*C+0]*L;c.push(P,v,z)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let b=_+y*t.length,L=b,C=b+t.length,P=b+t.length+1,v=b+1;r.push(L,C,v),r.push(P,v,C)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mi=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ge=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function y(){let b=new N,L=new N,C=0,P=(e-t)/n;for(let v=0;v<=r;v++){let z=[],M=v/r,S=M*(e-t)+t;for(let rt=0;rt<=s;rt++){let $=rt/s,I=$*l+a,B=Math.sin(I),k=Math.cos(I);L.x=S*B,L.y=-M*n+m,L.z=S*k,u.push(L.x,L.y,L.z),b.set(B,P,k).normalize(),d.push(b.x,b.y,b.z),f.push($,1-M),z.push(p++)}x.push(z)}for(let v=0;v<s;v++)for(let z=0;z<r;z++){let M=x[z][v],S=x[z+1][v],rt=x[z+1][v+1],$=x[z][v+1];h.push(M,S,$),h.push(S,rt,$),C+=6}c.addGroup(g,C,0),g+=C}function _(b){let L=p,C=new mt,P=new N,v=0,z=b===!0?t:e,M=b===!0?1:-1;for(let rt=1;rt<=s;rt++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),p++;let S=p;for(let rt=0;rt<=s;rt++){let I=rt/s*l+a,B=Math.cos(I),k=Math.sin(I);P.x=z*k,P.y=m*M,P.z=z*B,u.push(P.x,P.y,P.z),d.push(0,M,0),C.x=B*.5+.5,C.y=k*.5*M+.5,f.push(C.x,C.y),p++}for(let rt=0;rt<s;rt++){let $=L+rt,I=S+rt;b===!0?h.push(I,I+1,$):h.push(I+1,I,$),v+=3}c.addGroup(g,v,b===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class i extends Ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yl=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new N,b=new N,L=new N;for(let C=0;C<e.length;C+=3)f(e[C+0],_),f(e[C+1],b),f(e[C+2],L),l(_,b,L,y)}function l(y,_,b,L){let C=L+1,P=[];for(let v=0;v<=C;v++){P[v]=[];let z=y.clone().lerp(b,v/C),M=_.clone().lerp(b,v/C),S=C-v;for(let rt=0;rt<=S;rt++)rt===0&&v===C?P[v][rt]=z:P[v][rt]=z.clone().lerp(M,rt/S)}for(let v=0;v<C;v++)for(let z=0;z<2*(C-v)-1;z++){let M=Math.floor(z/2);z%2===0?(d(P[v][M+1]),d(P[v+1][M]),d(P[v][M])):(d(P[v][M+1]),d(P[v+1][M+1]),d(P[v+1][M]))}}function c(y){let _=new N;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let y=new N;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=m(y)/2/Math.PI+.5,L=g(y)/Math.PI+.5;o.push(b,1-L)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],b=o[y+2],L=o[y+4],C=Math.max(_,b,L),P=Math.min(_,b,L);C>.9&&P<.1&&(_<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let b=y*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function p(){let y=new N,_=new N,b=new N,L=new N,C=new mt,P=new mt,v=new mt;for(let z=0,M=0;z<r.length;z+=9,M+=6){y.set(r[z+0],r[z+1],r[z+2]),_.set(r[z+3],r[z+4],r[z+5]),b.set(r[z+6],r[z+7],r[z+8]),C.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),v.set(o[M+4],o[M+5]),L.copy(y).add(_).add(b).divideScalar(3);let S=m(L);x(C,M+0,y,S),x(P,M+2,_,S),x(v,M+4,b,S)}}function x(y,_,b,L){L<0&&y.x===1&&(o[_]=y.x-1),b.x===0&&b.z===0&&(o[_]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ve=class extends Us{constructor(t){super(t),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Us().fromJSON(s))}return this}},A1={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_u(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=L1(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return fr(r,o,e,a,l,f,0),o}};function _u(i,t,e,n,s){let r,o;if(s===V1(i,t,e,n)>0)for(r=t;r<e;r+=n)o=kh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=kh(r,i[r],i[r+1],o);return o&&ko(o,o.next)&&(mr(o),o=o.next),o}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||ve(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&O1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?C1(i,n,s,r):R1(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=P1(qi(i),t,e),fr(i,t,e,n,s,r,2)):o===2&&I1(i,t,e,n,s,r):fr(qi(i),t,e,n,s,r,1);break}}}function R1(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Es(s,a,r,l,o,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function C1(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=vl(f,p,t,e,n),y=vl(x,m,t,e,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=g&&b&&b.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Es(a,h,l,u,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Es(a,h,l,u,c,d,b.x,b.y)&&ve(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Es(a,h,l,u,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Es(a,h,l,u,c,d,b.x,b.y)&&ve(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function P1(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ko(s,r)&&yu(s,n,n.next,r)&&pr(s,r)&&pr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),mr(n),mr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function I1(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H1(o,a)){let l=vu(o,a);o=qi(o,o.next),l=qi(l,l.next),fr(o,t,e,n,s,r,0),fr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function L1(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=_u(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(B1(c));for(s.sort(D1),r=0;r<s.length;r++)e=N1(s[r],e);return e}function D1(i,t){return i.x-t.x}function N1(i,t){let e=U1(i,t);if(!e)return t;let n=vu(e,i);return qi(n,n.next),qi(e,e.next)}function U1(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Es(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),pr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&F1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function F1(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function O1(i,t,e,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,z1(s)}function z1(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function B1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function H1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!k1(i,t)&&(pr(i,t)&&pr(t,i)&&G1(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||ko(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ko(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){let s=oo(ve(i,t,e)),r=oo(ve(i,t,n)),o=oo(ve(e,n,i)),a=oo(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&ro(i,e,t)||r===0&&ro(i,n,t)||o===0&&ro(e,i,n)||a===0&&ro(e,t,n))}function ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oo(i){return i>0?1:i<0?-1:0}function k1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function G1(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vu(i,t){let e=new Ml(i.i,i.x,i.y),n=new Ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kh(i,t,e,n){let s=new Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V1(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var or=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gh(t),Vh(n,t);let o=t.length;e.forEach(Gh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vh(n,e[l]);let a=A1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var tn=class i extends xe{constructor(t=new Ve([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:W1,_,b=!1,L,C,P,v;g&&(_=g.getSpacedPoints(h),b=!0,d=!1,L=g.computeFrenetFrames(h,!1),C=new N,P=new N,v=new N),d||(m=0,f=0,p=0,x=0);let z=a.extractPoints(c),M=z.shape,S=z.holes;if(!or.isClockWise(M)){M=M.reverse();for(let R=0,ot=S.length;R<ot;R++){let Q=S[R];or.isClockWise(Q)&&(S[R]=Q.reverse())}}let $=or.triangulateShape(M,S),I=M;for(let R=0,ot=S.length;R<ot;R++){let Q=S[R];M=M.concat(Q)}function B(R,ot,Q){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ot,Q)}let k=M.length,q=$.length;function D(R,ot,Q){let V,Y,F,K=R.x-ot.x,gt=R.y-ot.y,Lt=Q.x-R.x,A=Q.y-R.y,w=K*K+gt*gt,ct=K*A-gt*Lt;if(Math.abs(ct)>Number.EPSILON){let ut=Math.sqrt(w),yt=Math.sqrt(Lt*Lt+A*A),xt=ot.x-gt/ut,kt=ot.y+K/ut,zt=Q.x-A/yt,wt=Q.y+Lt/yt,At=((zt-xt)*A-(wt-kt)*Lt)/(K*A-gt*Lt);V=xt+K*At-R.x,Y=kt+gt*At-R.y;let Gt=V*V+Y*Y;if(Gt<=2)return new mt(V,Y);F=Math.sqrt(Gt/2)}else{let ut=!1;K>Number.EPSILON?Lt>Number.EPSILON&&(ut=!0):K<-Number.EPSILON?Lt<-Number.EPSILON&&(ut=!0):Math.sign(gt)===Math.sign(A)&&(ut=!0),ut?(V=-gt,Y=K,F=Math.sqrt(w)):(V=K,Y=gt,F=Math.sqrt(w/2))}return new mt(V/F,Y/F)}let E=[];for(let R=0,ot=I.length,Q=ot-1,V=R+1;R<ot;R++,Q++,V++)Q===ot&&(Q=0),V===ot&&(V=0),E[R]=D(I[R],I[Q],I[V]);let H=[],W,et=E.concat();for(let R=0,ot=S.length;R<ot;R++){let Q=S[R];W=[];for(let V=0,Y=Q.length,F=Y-1,K=V+1;V<Y;V++,F++,K++)F===Y&&(F=0),K===Y&&(K=0),W[V]=D(Q[V],Q[F],Q[K]);H.push(W),et=et.concat(W)}for(let R=0;R<m;R++){let ot=R/m,Q=f*Math.cos(ot*Math.PI/2),V=p*Math.sin(ot*Math.PI/2)+x;for(let Y=0,F=I.length;Y<F;Y++){let K=B(I[Y],E[Y],V);O(K.x,K.y,-Q)}for(let Y=0,F=S.length;Y<F;Y++){let K=S[Y];W=H[Y];for(let gt=0,Lt=K.length;gt<Lt;gt++){let A=B(K[gt],W[gt],V);O(A.x,A.y,-Q)}}}let ft=p+x;for(let R=0;R<k;R++){let ot=d?B(M[R],et[R],ft):M[R];b?(P.copy(L.normals[0]).multiplyScalar(ot.x),C.copy(L.binormals[0]).multiplyScalar(ot.y),v.copy(_[0]).add(P).add(C),O(v.x,v.y,v.z)):O(ot.x,ot.y,0)}for(let R=1;R<=h;R++)for(let ot=0;ot<k;ot++){let Q=d?B(M[ot],et[ot],ft):M[ot];b?(P.copy(L.normals[R]).multiplyScalar(Q.x),C.copy(L.binormals[R]).multiplyScalar(Q.y),v.copy(_[R]).add(P).add(C),O(v.x,v.y,v.z)):O(Q.x,Q.y,u/h*R)}for(let R=m-1;R>=0;R--){let ot=R/m,Q=f*Math.cos(ot*Math.PI/2),V=p*Math.sin(ot*Math.PI/2)+x;for(let Y=0,F=I.length;Y<F;Y++){let K=B(I[Y],E[Y],V);O(K.x,K.y,u+Q)}for(let Y=0,F=S.length;Y<F;Y++){let K=S[Y];W=H[Y];for(let gt=0,Lt=K.length;gt<Lt;gt++){let A=B(K[gt],W[gt],V);b?O(A.x,A.y+_[h-1].y,_[h-1].x+Q):O(A.x,A.y,u+Q)}}}G(),ht();function G(){let R=s.length/3;if(d){let ot=0,Q=k*ot;for(let V=0;V<q;V++){let Y=$[V];J(Y[2]+Q,Y[1]+Q,Y[0]+Q)}ot=h+m*2,Q=k*ot;for(let V=0;V<q;V++){let Y=$[V];J(Y[0]+Q,Y[1]+Q,Y[2]+Q)}}else{for(let ot=0;ot<q;ot++){let Q=$[ot];J(Q[2],Q[1],Q[0])}for(let ot=0;ot<q;ot++){let Q=$[ot];J(Q[0]+k*h,Q[1]+k*h,Q[2]+k*h)}}n.addGroup(R,s.length/3-R,0)}function ht(){let R=s.length/3,ot=0;_t(I,ot),ot+=I.length;for(let Q=0,V=S.length;Q<V;Q++){let Y=S[Q];_t(Y,ot),ot+=Y.length}n.addGroup(R,s.length/3-R,1)}function _t(R,ot){let Q=R.length;for(;--Q>=0;){let V=Q,Y=Q-1;Y<0&&(Y=R.length-1);for(let F=0,K=h+m*2;F<K;F++){let gt=k*F,Lt=k*(F+1),A=ot+V+gt,w=ot+Y+gt,ct=ot+Y+Lt,ut=ot+V+Lt;j(A,w,ct,ut)}}}function O(R,ot,Q){l.push(R),l.push(ot),l.push(Q)}function J(R,ot,Q){pt(R),pt(ot),pt(Q);let V=s.length/3,Y=y.generateTopUV(n,s,V-3,V-2,V-1);nt(Y[0]),nt(Y[1]),nt(Y[2])}function j(R,ot,Q,V){pt(R),pt(ot),pt(V),pt(ot),pt(Q),pt(V);let Y=s.length/3,F=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);nt(F[0]),nt(F[1]),nt(F[3]),nt(F[1]),nt(F[2]),nt(F[3])}function pt(R){s.push(l[R*3+0]),s.push(l[R*3+1]),s.push(l[R*3+2])}function nt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X1(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Do[s.type]().fromJSON(s)),new i(n,t.options)}},W1={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-p),new mt(x,1-g)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-p),new mt(m,1-g)]}};function X1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zi=class i extends yl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fn=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],_=g/n,b=0;g===0&&o===0?b=.5/e:g===n&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+b,1-_),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let _=h[g][y+1],b=h[g][y],L=h[g+1][y],C=h[g+1][y+1];(g!==0||o>0)&&f.push(_,b,C),(g!==n-1||l<Math.PI)&&f.push(b,L,C)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fs=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,y=(s+1)*f+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var gr=class i extends xe{constructor(t=new Io(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new mt,h=new N,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),g()}function m(_){h=t.getPointAt(_/e,h);let b=o.normals[_],L=o.binormals[_];for(let C=0;C<=s;C++){let P=C/s*Math.PI*2,v=Math.sin(P),z=-Math.cos(P);l.x=z*b.x+v*L.x,l.y=z*b.y+v*L.y,l.z=z*b.z+v*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){let L=(s+1)*(_-1)+(b-1),C=(s+1)*_+(b-1),P=(s+1)*_+b,v=(s+1)*(_-1)+b;p.push(L,C,v),p.push(C,P,v)}}function y(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)c.x=_/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Do[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var te=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},En=class extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Y1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=t,a=2*e-n;break;case Zc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=t,l=2*n-e;break;case Zc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*x+.5*p,b=f*m-f*x;for(let L=0;L!==a;++L)r[L]=g*o[h+L]+y*o[c+L]+_*o[l+L]+b*o[u+L];return r}},El=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},wl=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case ho:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Y1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ho;var $i=class extends On{};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=co;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends On{};Sl.prototype.ValueTypeName="color";var Tl=class extends On{};Tl.prototype.ValueTypeName="number";var Al=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},xr=class extends On{InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.DefaultInterpolation=ho;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends On{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=co;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends On{};Rl.prototype.ValueTypeName="vector";var Cl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},q1=new Cl,Pl=class{constructor(t){this.manager=t!==void 0?t:q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},yr=class extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ga=new ne,Wh=new N,Xh=new N,Uo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yh=new ne,nr=new N,Va=new N,Il=class extends Uo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),Yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}},vr=class extends _r{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ll=class extends Uo{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Gl="\\[\\]\\.:\\/",Z1=new RegExp("["+Gl+"]","g"),Vl="[^"+Gl+"]",$1="[^"+Gl.replace("\\.","")+"]",J1=/((?:WC+[\/:])*)/.source.replace("WC",Vl),K1=/(WCOD+)?/.source.replace("WCOD",$1),Q1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),j1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),tx=new RegExp("^"+J1+K1+Q1+j1+"$"),ex=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z1,"")}static parseTrackName(t){let e=tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Dl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kx=new Float32Array(1);var qh=new ne,Oo=class{constructor(t,e,n=0,s=1/0){this.ray=new vo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,n=[]){return Nl(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nl(t[s],this,n,e);return n.sort(Zh),n}};function Zh(i,t){return i.distance-t.distance}function Nl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Nl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var Mu={cellMeters:1.25,levelMeters:2.5,grid:[56,33],modules:{1:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u0448\u043B\u044E\u0437",2:"\u0410\u043D\u0433\u0430\u0440",3:"\u041A\u0430\u044E\u0442\u044B \u0438 \u0441\u0442\u043E\u043B\u043E\u0432\u0430\u044F",4:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",5:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438",6:"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0438\u0435",7:"\u0416\u0438\u043B\u043E\u0439 \u0431\u043B\u043E\u043A \u0443\u0447\u0451\u043D\u044B\u0445 \u0438 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432",8:"\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",0:"\u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B"},rooms:[{module:2,name:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430",x:0,y:1,width:20,height:20,levels:4,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 25 \xD7 25 \u043C, \u0432\u044B\u0441\u043E\u0442\u0430 10 \u043C: \u043F\u043E\u0434 \u043A\u043E\u0440\u0430\u0431\u043B\u0438 \u0434\u043E 22 \u043C; \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u043F\u043B\u0430\u043D \u041A\u0422-6 \u2014 10\xD712 \u043A\u043B\u0435\u0442\u043E\u043A \u0441 \u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0439 \u0440\u0430\u043C\u043F\u043E\u0439; \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:2,name:"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430",x:20,y:1,width:4,height:20,levels:4,note:"\u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430, \u043F\u043E\u0434\u0432\u043E\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432, \u043F\u0443\u043B\u044C\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u0438\u043A\u0430"},{module:6,name:"\u0426\u0435\u0445",x:24,y:15,width:8,height:6,levels:2,note:"\u0441\u0442\u0435\u043D\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 K7, \u0441\u0442\u0430\u043D\u043A\u0438; \u0432\u043E\u0440\u043E\u0442\u0430 3 \u043A\u043B\u0435\u0442\u043A\u0438 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:6,name:"\u0421\u043A\u043B\u0430\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",x:24,y:11,width:4,height:4,levels:1,note:"\u0434\u0432\u0435\u0440\u044C \u0432 \u0446\u0435\u0445"},{module:8,name:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F",x:28,y:11,width:5,height:4,levels:1,note:"\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B, \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B; \u0434\u0432\u0435\u0440\u044C \u0432 \u0446\u0435\u0445"},{module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F 1",x:33,y:16,width:6,height:5,levels:1,note:""},{module:5,name:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F 2",x:39,y:16,width:6,height:5,levels:1,note:""},{module:5,name:"\u0418\u0437\u043E\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",x:33,y:12,width:4,height:4,levels:1,note:"\u0432\u0445\u043E\u0434 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044E 1"},{module:1,name:"\u0413\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043B\u0438\u0444\u0442",x:52,y:9,width:4,height:4,levels:1,note:"\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 5\xD75 \u043C, \u0448\u0430\u0445\u0442\u0430 \u0434\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438"},{module:1,name:"\u0428\u043B\u044E\u0437",x:52,y:13,width:4,height:2,levels:1,note:"\u0434\u0432\u0435 \u0433\u0435\u0440\u043C\u043E\u0434\u0432\u0435\u0440\u0438"},{module:1,name:"\u041F\u0440\u0438\u0451\u043C\u043A\u0430",x:52,y:15,width:4,height:4,levels:1,note:"\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430"},{module:1,name:"\u041A\u041F\u041F",x:52,y:19,width:2,height:2,levels:1,note:"\u043F\u043E\u0441\u0442 \u043E\u0445\u0440\u0430\u043D\u044B \u0443 \u0432\u044B\u0445\u043E\u0434\u0430 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:1,name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043A\u043B\u0430\u0434",x:48,y:15,width:4,height:6,levels:1,note:"\u0434\u0432\u0435\u0440\u0438 \u0432 \u043F\u0440\u0438\u0451\u043C\u043A\u0443 \u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"},{module:8,name:"\u0416\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",x:48,y:11,width:4,height:4,levels:1,note:"\u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F \u043E\u0442 \u0448\u0430\u0445\u0442\u044B \u043B\u0438\u0444\u0442\u0430, \u0432\u043E\u0434\u0430, \u0444\u0438\u043B\u044C\u0442\u0440\u044B; \u0434\u0432\u0435\u0440\u044C \u0432 \u0441\u043A\u043B\u0430\u0434"},{module:4,name:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",x:8,y:24,width:4,height:4,levels:1,note:"\u0440\u0430\u0437\u0434\u0435\u0432\u0430\u043B\u043A\u0430, \u0441\u0431\u043E\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u043B\u0435\u0442\u043E\u043C"},{module:4,name:"\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F",x:12,y:24,width:5,height:4,levels:1,note:"\u0441\u0442\u043E\u0439\u043A\u0438 \u043D\u0430 14 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432, \u0432\u0435\u0440\u0441\u0442\u0430\u043A"},{module:4,name:"\u0421\u043A\u043B\u0430\u0434 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432",x:17,y:24,width:3,height:4,levels:1,note:"\u0431\u0440\u043E\u043D\u0435\u0434\u0432\u0435\u0440\u044C, \u0432\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u0443\u044E"},{module:8,name:"\u041C\u0435\u0434\u043F\u0443\u043D\u043A\u0442",x:20,y:24,width:4,height:4,levels:1,note:""},{module:8,name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442",x:25,y:24,width:5,height:4,levels:1,note:"\u0441\u0432\u044F\u0437\u044C, \u0440\u0430\u0434\u0430\u0440, \u0433\u043B\u043E\u0431\u0443\u0441"},{module:3,name:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F",x:30,y:24,width:6,height:4,levels:1,note:"16 \u043C\u0435\u0441\u0442, 2 \u0441\u043C\u0435\u043D\u044B"},{module:3,name:"\u041A\u0443\u0445\u043D\u044F",x:36,y:24,width:3,height:4,levels:1,note:"\u0441 \u043F\u0440\u043E\u0434\u0441\u043A\u043B\u0430\u0434\u043E\u043C"},{module:8,name:"\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u043E\u0442\u0434\u044B\u0445\u0430",x:39,y:24,width:5,height:4,levels:1,note:"\u043E\u0431\u0449\u0430\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 1",x:8,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 2",x:11,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 3",x:14,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 4",x:17,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 5",x:20,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 6",x:23,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u041A\u0430\u044E\u0442\u0430 7",x:26,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:3,name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A",x:29,y:29,width:4,height:3,levels:1,note:"\u0434\u0443\u0448, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04231",x:33,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04232",x:36,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04233",x:39,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04234",x:42,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04235",x:45,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04236",x:48,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04237",x:51,y:29,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u041A\u0430\u044E\u0442\u0430 \u04238",x:45,y:25,width:3,height:3,levels:1,note:"2 \u043C\u0435\u0441\u0442\u0430"},{module:7,name:"\u0421\u0430\u043D\u0431\u043B\u043E\u043A",x:48,y:25,width:4,height:3,levels:1,note:"\u0434\u0443\u0448, \u0442\u0443\u0430\u043B\u0435\u0442\u044B"}],corridors:[{name:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0433\u0430\u043B\u0435\u0440\u0435\u044F",x:0,y:21,width:56,height:3,note:"\u0448\u0438\u0440\u0438\u043D\u0430 3 \u043A\u043B\u0435\u0442\u043A\u0438 (3,75 \u043C): K7 \u0432 \u043C\u043E\u0434\u0435\u043B\u0438 3,1 \u043C \u0448\u0438\u0440\u0438\u043D\u043E\u0439; \u0430\u043D\u0433\u0430\u0440, \u0446\u0435\u0445, \u0441\u043A\u043B\u0430\u0434 \u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0430 \u0432\u044B\u0445\u043E\u0434\u044F\u0442 \u0432 \u043D\u0435\u0451"},{name:"\u0412\u044B\u0445\u043E\u0434 \u043F\u0440\u0438\u0451\u043C\u043A\u0438",x:54,y:19,width:2,height:2,note:"\u043A \u0433\u0430\u043B\u0435\u0440\u0435\u0435"},{name:"\u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440",x:8,y:28,width:46,height:1,note:"\u0432\u0434\u043E\u043B\u044C \u0432\u0441\u0435\u0445 \u043A\u0430\u044E\u0442"},{name:"\u041F\u0440\u043E\u0445\u043E\u0434 \u043A \u0436\u0438\u043B\u043E\u043C\u0443 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0443",x:24,y:24,width:1,height:4,note:""},{name:"\u041F\u0440\u043E\u0445\u043E\u0434 \u043A \u043A\u0430\u044E\u0442\u0430\u043C \u0443\u0447\u0451\u043D\u044B\u0445",x:44,y:24,width:1,height:4,note:""}],doors:[{x:20,y:20,side:"S",size:4,kind:"gate"},{x:26,y:20,side:"S",size:3,kind:"gate"},{x:25,y:15,side:"N",size:1,kind:"door"},{x:29,y:15,side:"N",size:1,kind:"door"},{x:35,y:20,side:"S",size:1,kind:"door"},{x:41,y:20,side:"S",size:1,kind:"door"},{x:38,y:18,side:"E",size:1,kind:"door"},{x:34,y:16,side:"N",size:1,kind:"hatch"},{x:53,y:12,side:"S",size:2,kind:"hatch"},{x:53,y:14,side:"S",size:2,kind:"hatch"},{x:52,y:16,side:"W",size:2,kind:"door"},{x:54,y:18,side:"S",size:2,kind:"gate"},{x:53,y:19,side:"E",size:1,kind:"door"},{x:49,y:20,side:"S",size:2,kind:"gate"},{x:49,y:15,side:"N",size:1,kind:"door"},{x:10,y:24,side:"N",size:1,kind:"door"},{x:11,y:25,side:"E",size:1,kind:"door"},{x:14,y:24,side:"N",size:1,kind:"door"},{x:17,y:26,side:"W",size:1,kind:"hatch"},{x:21,y:24,side:"N",size:1,kind:"door"},{x:27,y:24,side:"N",size:1,kind:"door"},{x:32,y:24,side:"N",size:2,kind:"door"},{x:33,y:27,side:"S",size:1,kind:"door"},{x:36,y:25,side:"W",size:1,kind:"door"},{x:41,y:24,side:"N",size:1,kind:"door"},{x:41,y:27,side:"S",size:1,kind:"door"},{x:46,y:27,side:"S",size:1,kind:"door"},{x:49,y:27,side:"S",size:1,kind:"door"},{x:9,y:29,side:"N",size:1,kind:"door"},{x:12,y:29,side:"N",size:1,kind:"door"},{x:15,y:29,side:"N",size:1,kind:"door"},{x:18,y:29,side:"N",size:1,kind:"door"},{x:21,y:29,side:"N",size:1,kind:"door"},{x:24,y:29,side:"N",size:1,kind:"door"},{x:27,y:29,side:"N",size:1,kind:"door"},{x:34,y:29,side:"N",size:1,kind:"door"},{x:37,y:29,side:"N",size:1,kind:"door"},{x:40,y:29,side:"N",size:1,kind:"door"},{x:43,y:29,side:"N",size:1,kind:"door"},{x:46,y:29,side:"N",size:1,kind:"door"},{x:49,y:29,side:"N",size:1,kind:"door"},{x:52,y:29,side:"N",size:1,kind:"door"},{x:30,y:29,side:"N",size:1,kind:"door"}],cells:{2:480,6:64,8:92,5:76,1:68,4:48,3:111,7:84,0:226},total:1249};var Oe={dirt:0,asphalt:1,sidewalk:2,grass:3,path:4,paving:5,sand:6};function bu(i){let{TILES:t,LEVEL_H:e,FLOOR:n,setFloor:s,setIndoor:r,setW:o,setN:a,object:l,building:c,stairRun:h,tiltrotor:u,block:d,surface:f,marking:p,floorStyle:x}=i,m=(E,H,W,et,ft)=>{for(let G=Math.max(0,H);G<=Math.min(t-1,et);G++)for(let ht=Math.max(0,E);ht<=Math.min(t-1,W);ht++)f[G][ht]=ft},g=(E,H,W,et)=>{for(let ft=0;ft<t;ft++)for(let G=0;G<t;G++)Math.hypot(G+.5-E,ft+.5-H)<=W&&(f[ft][G]=et)},y=(E,H)=>E===0?"g":E===H-1?"t":"u",_=(E,H,W)=>`${E}_${y(H,W)}`;m(0,0,t-1,t-1,Oe.grass),m(0,27,t-1,30,Oe.sidewalk),m(0,31,t-1,48,Oe.asphalt),m(0,49,t-1,52,Oe.sidewalk);for(let E=0;E<t;E++)E%4<2&&(E<44||E>48)&&(p[40][E]="dash");for(let E=31;E<=48;E++)for(let H=44;H<=48;H++)p[E][H]="zebra";function b(E,H,W,et,ft,G,ht,_t,O={}){let J=c({name:E,col0:H,row0:W,col1:et,row1:ft,levels:G,style:ht});for(let V=0;V<G;V++){r(V,H,W,et,ft),V>0&&s(V,H,W,et,ft,n.interior);for(let F=W;F<=ft;F++)for(let K=H;K<=et;K++)x[V][F][K]=O.floor||"parquet";let Y=_(ht,V,G);for(let F=W;F<=ft;F++)o(V,H,F,"wall",Y),o(V,et+1,F,"wall",Y);for(let F=H;F<=et;F++)a(V,F,W,"wall",Y),a(V,F,ft+1,"wall",Y);for(let F=H+1;F<et;F++)(F-H)%2===1&&(a(V,F,W,"window",Y),a(V,F,ft+1,"window",Y));for(let F=W+1;F<ft;F++)(F-W)%2===1&&(o(V,H,F,"window",Y),o(V,et+1,F,"window",Y))}l("roof",G,H,W,et-H+1,ft-W+1,{blocks:!1,type:O.roof||"tile",facade:ht});let j=Math.floor((H+et)/2),pt=_t==="S"?ft+1:W,nt=_t==="S"?W:ft+1,R=_(ht,0,G);a(0,j+1,pt,"door",R),O.backDoor!==!1&&a(0,j+1,nt,"door",R);let ot=_t==="S"?W+1:ft-5;L(j-1,ot,G-1,ht);let Q=Math.floor((W+ft)/2)+1;for(let V=0;V<G;V++){for(let F=W;F<=ft;F++)o(V,j-1,F,"wall","inner"),o(V,j+2,F,"wall","inner");for(let F=H;F<j-1;F++)a(V,F,Q,"wall","inner");for(let F=j+2;F<=et;F++)a(V,F,Q,"wall","inner");[{col0:H,col1:j-2,row0:W,row1:Q-1,side:"W"},{col0:H,col1:j-2,row0:Q,row1:ft,side:"W"},{col0:j+2,col1:et,row0:W,row1:Q-1,side:"E"},{col0:j+2,col1:et,row0:Q,row1:ft,side:"E"}].forEach((F,K)=>{let gt=[];for(let A=F.row0+1;A<F.row1;A++)(A<ot||A>ot+4)&&gt.push(A);let Lt=gt.length?gt[Math.floor(gt.length/2)]:F.row0;F.side==="W"?o(V,j-1,Lt,"door","inner"):o(V,j+2,Lt,"door","inner"),O.furnish!==!1&&P(V,F,F.side==="W"?[F.col1,Lt]:[F.col0,Lt],(K+V+H)%4)})}return{...J,midCol:j,stairRow:ot,front:pt,back:nt}}function L(E,H,W,et){let ft=[];for(let G=0;G<W;G++)G%2===0?(h(G,E,H+3,0,-1,3,"classic"),ft.push({level:G,col:E,cells:[H+3,H+2,H+1],exit:[E,H]})):(h(G,E+1,H+1,0,1,3,"classic"),ft.push({level:G,col:E+1,cells:[H+1,H+2,H+3],exit:[E+1,H+4]}));for(let G of ft){let ht=G.level+1,_t=(O,J)=>O===G.col&&G.cells.includes(J);for(let O of G.cells){let J=[[G.col-1,O,"W",G.col,O],[G.col+1,O,"W",G.col+1,O],[G.col,O-1,"N",G.col,O],[G.col,O+1,"N",G.col,O+1]];for(let[j,pt,nt,R,ot]of J)_t(j,pt)||j===G.exit[0]&&pt===G.exit[1]||(nt==="W"?o(ht,R,ot,"rail","iron"):a(ht,R,ot,"rail","iron"))}}}let C=[["bed",2,1],["wardrobe",1,1],["table",2,1],["sofa",2,1],["bookcase",1,1]];function P(E,H,W,et){let ft=H.col1-H.col0+1,G=H.row1-H.row0+1;if(ft<3||G<3)return;[[H.col0,H.row0],[H.col1-1,H.row0],[H.col0,H.row1],[H.col1-1,H.row1]].forEach((_t,O)=>{let[J,j,pt]=C[(et+O)%C.length],nt=j===2?_t[0]:O%2?H.col1:H.col0,R=_t[1];for(let ot=0;ot<j;ot++)if(Math.abs(nt+ot-W[0])<=1&&Math.abs(R-W[1])<=1)return;l(J,E,nt,R,j,pt,{rotation:R===H.row0?0:2})})}let v={col0:2,row0:7,col1:15,row1:21};m(v.col0,v.row0,v.col1,v.row1,Oe.sand);for(let E=v.row0;E<=v.row1;E++)o(0,v.col0,E,"rail","fence"),o(0,v.col1+1,E,"rail","fence");for(let E=v.col0;E<=v.col1;E++)a(0,E,v.row0,"rail","fence"),(E<8||E>9)&&a(0,E,v.row1+1,"rail","fence");o(0,v.col1+1,14,null),m(8,22,9,26,Oe.path),l("playhouse",0,3,8,2,2),l("slide",0,7,8,1,3),l("swing",0,11,8,3,1),l("sandbox",0,4,15,3,3,{blocks:!1}),l("carousel",0,11,13,2,2),l("bench",0,2,12,1,1,{rotation:3}),l("bench",0,2,18,1,1,{rotation:3}),l("bench",0,15,19,1,1,{rotation:1}),l("bin",0,15,20);for(let[E,H]of[[13,19],[7,20]])l("tree",0,E,H,1,1,{type:"linden"});for(let E of[4,9,14,20,26,32,61,67,73,80,86,92])l("tree",0,E,1,1,1,{type:E%3?"linden":"chestnut"});b("houseA",19,7,31,21,3,"ochre","S"),m(25,22,27,26,Oe.path);let z={col0:36,row0:4,col1:58,row1:22};c({name:"bank",...z,levels:2,style:"bank"});for(let E=0;E<2;E++){r(E,z.col0,z.row0,z.col1,z.row1),E>0&&s(E,z.col0,z.row0,z.col1,z.row1,n.interior);for(let W=z.row0;W<=z.row1;W++)for(let et=z.col0;et<=z.col1;et++)x[E][W][et]="marble";let H=_("bank",E,2);for(let W=z.row0;W<=z.row1;W++)o(E,z.col0,W,"wall",H),o(E,z.col1+1,W,"wall",H);for(let W=z.col0;W<=z.col1;W++)a(E,W,z.row0,"wall",H),a(E,W,z.row1+1,"wall",H);for(let W=z.col0+1;W<z.col1;W++)(W-z.col0)%2===1&&a(E,W,z.row1+1,"window",H);for(let W of[37,39,53,55,57])a(E,W,z.row0,"window",H);for(let W=z.row0+1;W<z.row1;W++)(W-z.row0)%2===1&&(o(E,z.col0,W,"window",H),o(E,z.col1+1,W,"window",H))}l("roof",2,z.col0,z.row0,z.col1-z.col0+1,z.row1-z.row0+1,{blocks:!1,type:"mansard",facade:"bank"});for(let E of[46,47,48])a(0,E,z.row1+1,"door","bank_g");a(1,47,z.row1+1,"window","bank_t"),l("balcony",1,45,23,5,1,{blocks:!1});for(let E of[45,49])l("column",0,E,23,1,1);o(0,z.col1+1,7,"door","bank_g"),m(34,23,60,26,Oe.paving);for(let E=z.col0;E<=z.col1;E++)a(0,E,13,"wall","inner");for(let E of[39,55])a(0,E,13,"door","inner");let M={col0:43,row0:4,col1:51,row1:9};for(let E=M.row0;E<=M.row1;E++)o(0,M.col0,E,"wall","vault"),o(0,M.col1+1,E,"wall","vault");for(let E=M.col0;E<=M.col1;E++)a(0,E,M.row1+1,"wall","vault");a(0,47,M.row1+1,"door","vault");for(let E=M.row0;E<=M.row1;E++)for(let H=M.col0;H<=M.col1;H++)x[0][E][H]="steel";for(let E=z.row0;E<=10;E++)o(0,40,E,"wall","inner"),o(0,55,E,"wall","inner");for(let E=z.col0;E<40;E++)a(0,E,11,"wall","inner");for(let E=55;E<=z.col1;E++)a(0,E,11,"wall","inner");a(0,38,11,"door","inner"),a(0,56,11,"door","inner"),o(0,40,6,"door","inner");for(let E of[37,38,41,42,43,44,50,51,52,53,56,57])l("counter",0,E,15,1,1);l("sofa",0,38,20,2,1),l("sofa",0,55,20,2,1),l("table",0,41,19,2,1),l("table",0,52,19,2,1);for(let[E,H]of[[36,22],[58,22],[45,14],[49,14],[36,14],[58,14]])l("plant",0,E,H);for(let E=M.col0;E<=M.col1;E++)l("deposits",0,E,M.row0);for(let E of[5,6,7])l("deposits",0,M.col0,E,1,1,{rotation:3}),l("deposits",0,M.col1,E,1,1,{rotation:1});l("table",0,46,7,2,1),l("desk",0,36,4,2,1),l("console",0,39,4),l("locker",0,36,9),l("locker",0,37,9),l("desk",0,56,5,2,1),l("cabinet",0,58,4),l("cabinet",0,58,9),l("table",0,56,8,2,1),h(0,41,11,1,0,3,"classic");for(let E=z.row0;E<=z.row1;E++)o(1,41,E,"wall","inner"),o(1,53,E,"wall","inner");for(let E=41;E<=52;E++)a(1,E,10,"wall","inner"),a(1,E,13,"wall","inner");for(let E of[7,17])for(let[H,W]of[[z.col0,40],[53,z.col1]])for(let et=H;et<=W;et++)a(1,et,E,"wall","inner");o(1,41,12,"door","inner"),o(1,53,12,"door","inner"),a(1,47,10,"door","inner"),a(1,47,13,"door","inner"),o(1,41,5,"door","inner"),o(1,53,5,"door","inner"),o(1,41,15,"door","inner"),o(1,53,15,"door","inner"),o(1,41,20,"door","inner"),o(1,53,20,"door","inner"),a(1,41,11,"rail","iron"),a(1,42,11,"rail","iron"),a(1,43,11,"rail","iron"),a(1,41,12,"rail","iron"),a(1,42,12,"rail","iron"),a(1,43,12,"rail","iron"),l("table",1,45,16,4,2),l("bookcase",1,42,21),l("bookcase",1,52,21),l("desk",1,37,4,2,1),l("bookcase",1,36,6),l("sofa",1,37,9,2,1),l("desk",1,56,4,2,1),l("cabinet",1,58,6),l("desk",1,37,12,2,1),l("cabinet",1,36,16),l("desk",1,56,12,2,1),l("cabinet",1,58,16),l("desk",1,37,19,2,1),l("desk",1,56,19,2,1),l("table",1,45,5,3,2),l("bookcase",1,42,4),l("bookcase",1,52,4),m(61,4,73,26,Oe.asphalt),m(64,27,70,30,Oe.asphalt);for(let E=62;E<=72;E+=2)l("paint",0,E,5,1,4,{blocks:!1,line:"W"}),l("paint",0,E,17,1,4,{blocks:!1,line:"W"});let S=(E,H,W,et,ft)=>l("car",0,W,et,2,4,{type:E,color:H,flip:!!ft});S("suv","police",62,5),S("suv","police",64,5),S("van","white",68,5),S("suv","graphite",62,17,!0),S("suv","red",70,17,!0),l("lamp",0,61,12),l("lamp",0,73,12);let rt=b("police",75,6,91,21,2,"police","S",{furnish:!1,floor:"tiles",roof:"tile"});o(0,75,14,"door","police_g"),m(83,22,85,26,Oe.path);for(let E of[80,81,86,87])l("counter",0,E,19,1,1);l("locker",0,76,6),l("locker",0,77,6),l("locker",0,78,6),l("desk",0,76,10,2,1),l("rack",0,91,6),l("rack",0,91,7),l("rack",0,90,6),l("crate",0,91,10),l("bunk",0,76,17,2,1),l("bunk",0,90,17,2,1),l("desk",0,89,21,2,1),l("cabinet",0,75,21),l("desk",1,76,7,2,1),l("desk",1,89,7,2,1),l("cabinet",1,75,10),l("cabinet",1,91,10),l("desk",1,76,18,2,1),l("desk",1,89,18,2,1),l("bookcase",1,75,21),l("bookcase",1,91,21);for(let E=3;E<t;E+=10)(E<63||E>71)&&l("streetLamp",0,E,30),E+5<t&&(E+5<43||E+5>49)&&l("streetLamp",0,E+5,49);for(let E of[17,58,88])l("bin",0,E,28);l("busStop",0,30,50,3,1),l("bench",0,31,51,1,1,{rotation:0}),l("bin",0,34,51);let $=(E,H,W,et,ft)=>l("car",0,W,et,4,2,{type:E,color:H,flip:!!ft});$("suv","white",20,33),$("van","sand",36,42,!0),$("suv","blue",58,36),$("suv","olive",74,45,!0),$("suv","graphite",81,33),$("van","white",6,45,!0),b("houseB",3,55,16,69,3,"cream","N"),b("houseC",22,56,34,70,2,"green","N"),b("houseD",51,55,63,70,3,"pink","N"),b("houseE",72,56,86,70,3,"ochre","N");for(let[E,H,W]of[[9,11,54],[28,30,55],[57,59,54],[79,81,55]])m(E,53,H,W,Oe.path);for(let E=1;E<=32;E++)[10,11,29,30].includes(E)||l("hedge",0,E,73);for(let E=59;E<=91;E++)[80,81].includes(E)||l("hedge",0,E,73);m(0,76,36,77,Oe.path),m(56,76,91,77,Oe.path);for(let[E,H]of[[10,11],[29,30],[57,58],[80,81]])m(E,71,H,75,Oe.path);for(let E=3;E<=33;E+=5)l("tree",0,E,83,1,1,{type:E%2?"chestnut":"linden"});for(let E of[5,20,35])l("bench",0,E,78,1,1,{rotation:2});for(let E of[60,66])l("tree",0,19,E,1,1,{type:"linden"}),l("tree",0,68,E,1,1,{type:"chestnut"}),l("tree",0,90,E,1,1,{type:"linden"});let I={col:46.5,row:82.5};g(I.col,I.row,12,Oe.paving),m(44,53,48,71,Oe.paving),l("fountain",0,42,78,9,9,{blocks:!1});for(let E=78;E<=86;E++)for(let H=42;H<=50;H++)Math.hypot(H+.5-I.col,E+.5-I.row)<4.4&&d(0,H,E);for(let E=0;E<8;E++){let H=E/8*Math.PI*2+Math.PI/8,W=Math.floor(I.col+Math.cos(H)*8.6),et=Math.floor(I.row+Math.sin(H)*8.6),ft=[[0,-1],[1,0],[0,1],[-1,0]].map(([G,ht])=>G*Math.cos(H)+ht*Math.sin(H));l(E%2?"streetLamp":"bench",0,W,et,1,1,{rotation:ft.indexOf(Math.max(...ft))})}m(60,81,82,95,Oe.paving);let B=68,k=87,q=u(B,k);for(let[E,H]of[[60,81],[82,81],[60,95],[82,95]])l("lamp",0,E,H);l("crate",0,80,84),l("crate",0,81,84),l("barrels",0,62,93);let D=(E,H,W,et)=>[E,H,W,et];return{spawns:{squad:[D(B+1,k,0,1),D(B+2,k,0,1),D(B+3,k,0,1),D(B+1,k+3,0,5),D(B+2,k+3,0,5),D(B+3,k+3,0,5)],mech:[D(B,k+1,0,7)],aliens:[D(44,17,0,0),D(51,19,0,0),D(47,11,0,1),D(40,8,1,3),D(6,13,0,7),D(12,17,0,5),D(28,37,0,3),D(62,44,0,5),D(84,36,0,1),D(83,16,0,3),D(88,9,1,5),D(68,13,0,1)]},extraction:q,mission:{kind:"rescue",title:"\u0421\u043F\u0430\u0441\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",timeLimit:1800,portal:[10,39,0],civilians:[{col:47,row:5,level:0,dir:1,kind:"scientist",vip:!0,name:"\u041F\u0440\u043E\u0444. \u041B\u0435\u0431\u0435\u0434\u0435\u0432"},{col:45,row:6,level:0,dir:2,kind:"man",name:"\u041A\u0430\u0441\u0441\u0438\u0440"},{col:49,row:6,level:0,dir:0,kind:"woman",name:"\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430"},{col:44,row:8,level:0,dir:1,kind:"engineer",name:"\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0442\u043E\u0440"},{col:50,row:8,level:0,dir:1,kind:"worker",name:"\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A"},{col:5,row:8,level:0,dir:3,kind:"boy",child:!0,name:"\u041C\u0430\u043B\u044C\u0447\u0438\u043A"},{col:5,row:9,level:0,dir:3,kind:"girl",child:!0,name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430"}]},name:"\u0426\u0435\u043D\u0442\u0440 \u0433\u043E\u0440\u043E\u0434\u0430",caption:"\u0426\u0415\u041D\u0422\u0420 \u0413\u041E\u0420\u041E\u0414\u0410"}}var Eu=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams(""),we=typeof globalThis<"u"&&globalThis.ALIENS_MAP||Eu.get("map")||"outpost",ks=24,U=1.25,zn=4,se=2.5,ue=we==="big"?ks*2:we==="base"?58:we==="city"?96:ks,nx=1,ix=12;var Me={none:0,ground:1,interior:2,roof:3,deck:4,stairs:5};function Hs(i){return Array.from({length:zn},()=>Array.from({length:ue+1},()=>new Array(ue+1).fill(i)))}function wu(){let i=Hs(0),t=Hs(0),e=Hs(null),n=Hs(null),s=Hs(0),r=[],o=[],a=[],l=[],c=[],h=[],u=we==="city"?Array.from({length:ue},()=>new Array(ue).fill(0)):null,d=we==="city"?Array.from({length:ue},()=>new Array(ue).fill(null)):null,f=we==="city"?Hs(null):null;if(we!=="base")for(let O=0;O<ue;O++)for(let J=0;J<ue;J++)i[0][O][J]=Me.ground;let p=0,x=0,m=(O,J,j,pt,nt,R)=>{for(let ot=j;ot<=nt;ot++)for(let Q=J;Q<=pt;Q++)i[O][ot+x][Q+p]=R},g=(O,J,j,pt,nt)=>{for(let R=j;R<=nt;R++)for(let ot=J;ot<=pt;ot++)s[O][R+x][ot+p]=1},y=(O,J,j,pt)=>{t[O][j+x][J+p]=pt},_=(O,J,j,pt,nt)=>{e[O][j+x][J+p]=pt?{type:pt,style:nt}:null},b=(O,J,j,pt,nt)=>{n[O][j+x][J+p]=pt?{type:pt,style:nt}:null},L=(O,J,j,pt,nt,R,ot)=>{for(let Q=j;Q<=nt;Q++)_(O,J,Q,R,ot),_(O,pt+1,Q,R,ot);for(let Q=J;Q<=pt;Q++)b(O,Q,j,R,ot),b(O,Q,nt+1,R,ot)},C=(O,J,j,pt,nt,R)=>{for(let ot=j;ot<=pt;ot++)_(O,J,ot,nt,R)},P=(O,J,j,pt,nt,R)=>{for(let ot=j;ot<=pt;ot++)b(O,ot,J,nt,R)},v=(O,J,j,pt,nt=1,R=1,ot={})=>r.push({kind:O,level:J,col:j+p,row:pt+x,cols:nt,rows:R,rotation:0,blocks:!0,...ot}),z=O=>{let J={...O,col0:O.col0+p,row0:O.row0+x,col1:O.col1+p,row1:O.row1+x};return l.push(J),J},M=O=>a.push({...O,from:[O.from[0]+p,O.from[1]+x,O.from[2]],to:[O.to[0]+p,O.to[1]+x,O.to[2]],col:O.col+p,row:O.row+x}),S=(O,J,j,pt,nt)=>r.push({kind:"ladder",level:O,col:J+p,row:j+x,cols:1,rows:1,blocks:!1,height:pt,side:nt}),rt=(O,J,j,pt)=>c.push({rect:[(O+p)*U,(J+x)*U,(j+p)*U,(pt+x)*U]}),$=(O,J,j)=>c.push({circle:[(O+p)*U,(J+x)*U,j*U]}),I=(O,J,j)=>h.push([O,J+p,j+x]),B=(O,J,j,pt,nt,R,ot)=>{o.push({level:O,col:J+p,row:j+x,dirCol:pt,dirRow:nt,count:R,style:ot});for(let Q=0;Q<R;Q++){let V=J+pt*Q,Y=j+nt*Q;m(O,V,Y,V,Y,Me.stairs),y(O,V,Y,(Q+.5)/R*se),O+1<zn&&m(O+1,V,Y,V,Y,Me.none)}};function k(){z({name:"hab",col0:3,row0:3,col1:10,row1:9,levels:2,style:"hab"}),m(1,3,3,10,9,Me.interior),m(2,3,3,10,9,Me.roof),g(0,3,3,10,9),g(1,3,3,10,9);for(let O of[0,1])L(O,3,3,10,9,"wall","hab");L(2,3,3,10,9,"parapet","hab"),C(0,7,3,5,"wall","inner"),_(0,7,5,"door","inner"),P(0,6,3,10,"wall","inner"),b(0,4,6,"door","inner"),b(0,9,6,"door","inner"),P(0,7,3,10,"wall","inner"),b(0,6,7,"door","inner"),b(0,9,7,"door","inner"),C(0,8,7,9,"wall","inner"),b(0,6,10,"door","hab"),_(0,11,6,"door","hab");for(let O of[4,8,10])b(0,O,10,"window","hab");for(let O of[4,8])_(0,11,O,"window","hab");b(0,5,3,"window","hab"),_(0,3,4,"window","hab"),B(0,4,8,1,0,3,"hab"),C(1,7,3,5,"wall","inner"),_(1,7,4,"door","inner"),P(1,6,3,10,"wall","inner"),b(1,5,6,"door","inner"),b(1,9,6,"door","inner"),C(1,8,7,9,"wall","inner"),P(1,7,8,10,"wall","inner"),b(1,9,7,"door","inner"),P(1,8,4,6,"rail","hab"),P(1,9,4,6,"rail","hab"),_(1,4,8,"rail","hab");for(let O of[4,5,7,9,10])b(1,O,10,"window","hab");for(let O of[4,5,8])_(1,11,O,"window","hab");b(1,4,3,"window","hab"),b(1,8,3,"window","hab"),_(1,3,5,"window","hab"),v("console",0,3,3),v("console",0,4,3),v("locker",0,6,3),v("bunk",0,9,3,2,1),v("locker",0,10,5),v("labTable",0,9,8,2,1),v("cabinet",0,10,9),v("crate",0,7,9),v("crate",0,3,7),v("rack",1,10,7),v("rack",1,10,8),v("rack",1,10,9),v("desk",1,4,3,2,1),v("console",1,9,3),v("crate",1,3,5),v("crate",1,3,6),v("acUnit",2,5,4,2,1),v("acUnit",2,8,6,1,1),v("antenna",2,4,8),v("solar",2,6,7,2,2),M({from:[11,9,0],to:[10,9,2],cost:16,kind:"ladder",wall:"W",col:11,row:9}),S(0,11,9,2*se+.9,"W"),z({name:"deck",col0:15,row0:4,col1:19,row1:8,style:"deck"}),m(1,15,4,19,8,Me.deck),L(1,15,4,19,8,"rail","deck"),b(1,17,9,null);for(let[O,J]of[[15,4],[19,4],[15,8],[19,8],[17,4]])v("pylon",0,O,J);B(0,17,11,0,-1,3,"deck"),z({name:"cabin",col0:16,row0:4,col1:18,row1:6,levels:1,style:"cabin",base:1}),L(1,16,4,18,6,"wall","cabin"),b(1,17,7,"door","cabin"),_(1,19,5,"window","cabin"),b(1,16,7,"window","cabin"),m(1,16,4,18,6,Me.interior),m(2,16,4,18,6,Me.roof),L(2,16,4,18,6,"parapet","cabin"),g(1,16,4,18,6),v("console",1,16,4),v("rack",1,18,4),v("dish",2,17,5),M({from:[19,6,1],to:[18,6,2],cost:10,kind:"ladder",wall:"W",col:19,row:6}),S(1,19,6,se+.9,"W"),v("barrels",0,16,6),v("crate",0,18,7),z({name:"tower",col0:20,row0:14,col1:21,row1:15,style:"tower"}),m(3,20,14,21,15,Me.deck),L(3,20,14,21,15,"rail","tower");for(let[O,J]of[[20,14],[21,14],[20,15],[21,15]])v("towerLeg",0,O,J);v("searchlight",3,21,14),M({from:[20,16,0],to:[20,15,3],cost:24,kind:"ladder",wall:"N",col:20,row:16}),S(0,20,16,3*se+.9,"N"),b(3,20,16,null),v("container",0,13,13,2,4,{color:"orange"}),v("container",0,1,12,2,4,{color:"blue"}),v("truck",0,8,12,2,5),v("tank",0,21,4,2,3),v("generator",0,12,1,2,2);for(let[O,J]of[[13,9],[14,10],[13,10],[2,10],[12,7],[11,12],[6,12]])v("crate",0,O,J);v("barrels",0,12,4),v("barrels",0,20,10),v("lamp",0,12,11),v("lamp",0,15,12),P(0,20,10,13,"barrier","concrete"),C(0,16,17,19,"barrier","concrete");for(let[O,J,j]of[[0,21,2],[2,22,1],[0,19,1],[22,0,2],[21,0,1],[23,9,1],[22,22,2],[23,20,1],[8,0,1],[0,6,1]])v("rock",0,O,J,j,j);rt(1.3,1.3,12.6,11.7),rt(14.2,3,20.8,12.8),rt(19.4,13.4,22.6,16.8),$(4.6,19,3.6)}function q(){z({name:"warehouse",col0:2,row0:2,col1:13,row1:9,levels:1,style:"hab"}),g(0,2,2,13,9),m(1,2,2,13,9,Me.roof),L(0,2,2,13,9,"wall","hab"),L(1,2,2,13,9,"parapet","hab"),b(0,6,10,"door","hab"),b(0,7,10,"door","hab"),_(0,14,5,"door","hab"),_(0,2,6,"door","hab");for(let O of[3,4,9,10,12])b(0,O,10,"window","hab");for(let O of[4,8,11])b(0,O,2,"window","hab");for(let O of[3,7,8])_(0,14,O,"window","hab");for(let O of[3,4,5,9,10,11])v("rack",0,O,2);v("crate",0,4,5),v("crate",0,5,5),v("crate",0,4,6),v("crate",0,10,6),v("crate",0,11,6),v("barrels",0,12,8),v("desk",0,2,8,2,1),v("cabinet",0,13,3),v("acUnit",1,4,4,2,1),v("acUnit",1,9,6,2,1),z({name:"office",col0:13,row0:13,col1:20,row1:19,levels:2,style:"hab"}),m(1,13,13,20,19,Me.interior),m(2,13,13,20,19,Me.roof),g(0,13,13,20,19),g(1,13,13,20,19);for(let O of[0,1])L(O,13,13,20,19,"wall","hab");L(2,13,13,20,19,"parapet","hab"),C(0,17,13,19,"wall","inner"),_(0,17,15,"door","inner"),_(0,17,16,"door","inner"),b(0,18,20,"door","hab"),_(0,13,15,"door","hab");for(let O of[14,15,19])b(0,O,20,"window","hab");for(let O of[17,18])_(0,21,O,"window","hab");b(0,15,13,"window","hab"),b(0,19,13,"window","hab"),B(0,14,18,1,0,3,"hab"),P(1,18,14,16,"rail","hab"),_(1,14,19,"rail","hab"),_(1,14,18,"rail","hab");for(let O of[14,16,18,19])b(1,O,20,"window","hab");for(let O of[14,16,18])_(1,21,O,"window","hab");for(let O of[14,17,19])b(1,O,13,"window","hab");v("desk",0,14,14,2,1),v("console",0,19,14),v("locker",0,20,17),v("desk",1,15,14,2,1),v("desk",1,18,16,2,1),v("rack",1,20,14),v("crate",1,20,19),v("antenna",2,19,18),v("acUnit",2,15,15,2,1),v("container",0,17,3,2,4,{color:"orange"}),v("generator",0,9,13,2,2),v("barrels",0,12,12),v("crate",0,8,16),v("crate",0,9,17),v("lamp",0,15,10),v("lamp",0,11,19),P(0,11,18,21,"barrier","concrete");for(let[O,J,j]of[[22,22,2],[0,21,2],[22,0,1],[23,11,1]])v("rock",0,O,J,j,j);rt(1.3,1.3,14.7,11.7),rt(12.3,12.3,21.7,20.7),rt(6.3,11.3,12.7,13.2)}function D(){rt(.6,.6,22.4,22.4);let O=(j,pt,nt)=>v("paint",0,j,pt,1,nt,{blocks:!1,line:"W"});for(let[j,pt]of[[2,4],[10,4],[14,4]])for(let nt=2;nt<=20;nt+=2)O(nt,j,pt);let J=(j,pt,nt,R,ot)=>v("car",0,nt,R,2,4,{type:j,color:pt,flip:!!ot});J("suv","white",2,2),J("van","sand",8,2),J("suv","graphite",10,2),J("suv","red",16,2),J("suv","blue",4,10,!0),J("van","white",12,10,!0),J("suv","olive",18,10,!0),J("suv","graphite",6,14),J("suv","white",14,14),v("truck",0,21,15,2,5);for(let[j,pt]of[[1,7],[11,7],[21,7],[1,19],[11,19],[21,19]])v("lamp",0,j,pt);C(0,1,2,5,"barrier","concrete"),C(0,1,10,17,"barrier","concrete"),P(0,23,2,9,"barrier","concrete"),P(0,23,13,20,"barrier","concrete"),v("crate",0,21,3),v("crate",0,21,4),v("barrels",0,22,12);for(let[j,pt,nt]of[[0,22,2],[23,0,1]])v("rock",0,j,pt,nt,nt)}function E(O,J){v("tiltrotor",0,O,J,6,4,{blocks:!1});for(let nt=O;nt<=O+5;nt++)for(let R=J;R<=J+3;R++)y(0,nt,R,.6);for(let nt=J;nt<=J+3;nt++)y(0,O+6,nt,.45),y(0,O+7,nt,.15);let j={col:O+4,row:J+4};y(0,j.col,j.row,.3),g(0,O,J,O+5,J+3);for(let nt=O;nt<=O+5;nt++)b(0,nt,J,"hull","tiltrotor"),nt!==j.col&&b(0,nt,J+4,"hull","tiltrotor");for(let nt=J;nt<=J+3;nt++)_(0,O,nt,"hull","tiltrotor");for(let nt=O-4;nt<=O+5;nt++)I(0,nt,J-1),nt!==j.col&&I(0,nt,J+4);for(let nt=O-4;nt<=O-1;nt++)for(let R=J;R<=J+3;R++)I(0,nt,R);let pt=[];for(let nt=O;nt<=O+7;nt++)for(let R=J;R<=J+3;R++)pt.push([nt+p,R+x,0]);return pt}function H(){let j=E(10,10);rt(4.3,4.3,21.7,19.7),v("crate",0,20,8),v("crate",0,20,9),v("crate",0,21,9),v("barrels",0,19,16),v("generator",0,5,17,2,2);for(let[nt,R]of[[4,4],[21,4],[4,19],[21,19]])v("lamp",0,nt,R);for(let[nt,R,ot]of[[22,22,2],[0,0,2],[23,13,1],[1,21,1],[12,0,1]])v("rock",0,nt,R,ot,ot);let pt=(nt,R,ot)=>[nt+p,R+x,0,ot];return{squad:[pt(11,10,1),pt(12,10,1),pt(13,10,1),pt(11,13,5),pt(12,13,5),pt(13,13,5)],mech:[pt(10,11,7)],extraction:j}}function W(){p=nx,x=ix;let O=Mu,J=O.grid[0],j=O.grid[1],pt=Array.from({length:j},()=>new Array(J).fill(null)),nt=Array.from({length:j},()=>new Array(J).fill(0)),R=(F,K,gt)=>{for(let Lt=F.y;Lt<F.y+F.height;Lt++)for(let A=F.x;A<F.x+F.width;A++)pt[Lt][A]=K,nt[Lt][A]=gt};O.rooms.forEach((F,K)=>R(F,F.module===2?"hangar":"room"+K,F.levels)),O.corridors.forEach(F=>R(F,"corridor",1));let ot=(F,K)=>F>=0&&K>=0&&F<J&&K<j?pt[K][F]:null,Q=(F,K)=>ot(F,K)?nt[K][F]:0;for(let F=0;F<j;F++)for(let K=0;K<J;K++)if(pt[F][K]){m(0,K,F,K,F,Me.interior);for(let gt=0;gt<nt[F][K];gt++)g(gt,K,F,K,F)}for(let F=0;F<=j;F++)for(let K=0;K<=J;K++){if(F<j){let gt=ot(K-1,F),Lt=ot(K,F);if(gt!==Lt)for(let A=0;A<Math.max(Q(K-1,F),Q(K,F));A++)_(A,K,F,"wall","inner")}if(K<J){let gt=ot(K,F-1),Lt=ot(K,F);if(gt!==Lt)for(let A=0;A<Math.max(Q(K,F-1),Q(K,F));A++)b(A,K,F,"wall","inner")}}for(let F of O.doors){let K=F.kind==="gate"?null:"door";for(let gt=0;gt<F.size;gt++)F.side==="N"?b(0,F.x+gt,F.y,K,"inner"):F.side==="S"?b(0,F.x+gt,F.y+1,K,"inner"):F.side==="W"?_(0,F.x,F.y+gt,K,"inner"):_(0,F.x+1,F.y+gt,K,"inner")}for(let F=-1;F<=j;F++)for(let K=-1;K<=J;K++){if(ot(K,F)||F+x<0||F+x>=ue||K+p<0||K+p>=ue)continue;let gt=0;for(let A=-1;A<=1;A++)for(let w=-1;w<=1;w++)gt=Math.max(gt,Q(K+w,F+A));if(!gt)continue;let Lt=((K+p)*7+(F+x)*13)%3;v("rockFill",0,K,F,1,1,{type:`h${gt}v${Lt}`,height:gt*se,variant:Lt})}v("liftPlatform",0,0,1,20,20,{blocks:!1});let V=E(8,9);v("barrels",0,20,1),v("barrels",0,21,1),v("generator",0,22,1,2,2),v("crate",0,20,3),v("crate",0,21,3),v("console",0,23,4),v("crate",0,22,17),v("crate",0,23,17),v("crate",0,23,18),v("generator",0,24,17,2,2),v("desk",0,24,19,2,1),v("desk",0,27,15,2,1),v("rack",0,31,15),v("rack",0,31,16),v("crate",0,31,20),v("crate",0,30,20),v("rack",0,24,11),v("rack",0,24,12),v("crate",0,26,11),v("crate",0,27,11),v("crate",0,27,12),v("generator",0,28,11,2,2),v("generator",0,31,11,2,2),v("rack",0,32,13),v("barrels",0,32,14),v("tank",0,35,12,2,3),v("cabinet",0,33,12),v("console",0,33,14),v("labTable",0,36,16,2,1),v("labTable",0,36,19,2,1),v("console",0,33,17),v("cabinet",0,33,20),v("rack",0,38,16),v("labTable",0,41,17,2,1),v("labTable",0,42,19,2,1),v("cabinet",0,39,16),v("console",0,44,16),v("crate",0,39,20),v("liftPlatform",0,52,9,4,4,{blocks:!1}),v("crate",0,52,9),v("crate",0,55,12),v("crate",0,55,15),v("crate",0,52,15),v("console",0,52,19),v("console",0,52,20),v("rack",0,48,15),v("rack",0,48,16),v("rack",0,48,17),v("crate",0,48,19),v("crate",0,48,20),v("crate",0,51,19),v("crate",0,51,20),v("crate",0,51,15),v("acUnit",0,48,11,2,1),v("tank",0,50,11,2,3),v("barrels",0,48,13);for(let F of[24,25,26,27])v("locker",0,8,F);v("locker",0,9,27),v("locker",0,11,27);for(let F of[12,13,14,15])v("locker",0,F,27);v("desk",0,12,24,2,1);for(let[F,K]of[[18,24],[19,24],[19,25],[19,27],[18,27]])v("crate",0,F,K);v("bunk",0,20,27,2,1),v("bunk",0,22,27,2,1),v("cabinet",0,23,24),v("console",0,20,24);for(let F of[25,26,28,29])v("console",0,F,27);v("desk",0,28,25,2,1),v("rack",0,25,24),v("desk",0,30,25,2,1),v("desk",0,30,27,2,1),v("desk",0,34,26,2,1),v("cabinet",0,38,24),v("cabinet",0,38,25),v("cabinet",0,38,26),v("crate",0,36,27),v("desk",0,39,25,2,1),v("console",0,43,24),O.rooms.filter(F=>F.width===3&&F.height===3).forEach(F=>{let K=O.doors.some(Lt=>Lt.side==="S"&&Lt.y===F.y+F.height-1&&Lt.x>=F.x&&Lt.x<F.x+F.width),gt=K?F.y:F.y+F.height-1;v("bunk",0,F.x,gt,2,1),v("locker",0,F.x+2,K?F.y+F.height-1:F.y)}),v("locker",0,32,29),v("locker",0,32,30),v("locker",0,32,31),v("cabinet",0,29,31),v("cabinet",0,30,31),v("locker",0,51,25),v("locker",0,51,26),v("cabinet",0,48,25),v("cabinet",0,49,25);let Y=(F,K,gt)=>[F+p,K+x,0,gt];return{squad:[Y(21,9,1),Y(22,9,1),Y(21,10,1),Y(22,10,1),Y(21,11,1),Y(22,11,1)],mech:[Y(16,21,7)],aliens:[Y(53,10,1),Y(54,10,1),Y(53,11,1),Y(54,11,1),Y(52,13,3),Y(55,14,3),Y(53,16,3),Y(54,17,3)],extraction:V}}let et,ft=null,G=null,ht=null,_t=null;if(we==="city"){let O=bu({TILES:ue,LEVEL_H:se,FLOOR:Me,setFloor:m,setIndoor:g,setW:_,setN:b,object:v,building:z,stairRun:B,tiltrotor:E,block:I,surface:u,marking:d,floorStyle:f});et=O.spawns,ft=O.extraction,G=O.mission,ht=O.name,_t=O.caption}else if(we==="big"){p=0,x=0,k(),p=ks,x=0,q(),p=0,x=ks,D(),p=ks,x=ks;let O=H();ft=O.extraction,et={squad:O.squad,mech:O.mech,aliens:[[9,4,1,1],[4,4,1,1],[5,7,0,1],[9,4,0,3],[17,6,0,1],[17,5,1,1],[20,14,3,1],[11,14,0,1],[3,15,0,0],[16,11,0,7]]}}else if(we==="base"){let O=W();ft=O.extraction,et={squad:O.squad,mech:O.mech,aliens:O.aliens}}else k(),et=[[3,18,0,7],[5,18,0,7],[3,20,0,0],[5,20,0,0],[9,4,1,1],[17,6,0,1],[10,18,0,6]];return{MAP_NAME:we,TILE:U,TILES:ue,LEVELS:zn,LEVEL_H:se,floor:i,offset:t,wallW:e,wallN:n,indoor:s,objects:r,stairs:o,links:a,buildings:l,spawns:et,extraction:ft,concrete:c,blockedCells:h,surface:u,marking:d,floorStyle:f,mission:G,caption:_t,name:ht||(we==="big"?"\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0443 \u0431\u0430\u0437\u044B (48\xD748)":we==="base"?"\u0411\u0430\u0437\u0430 \xAB\u042F\u043C\u0430\u043D\u0442\u0430\u0443\xBB":"\u0411\u0430\u0437\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u043E"),combat:we==="big"||we==="base"||we==="city"}}var Su=((Number(Eu.get("rot"))||0)%4+4)%4;function Tu(i,t){let e=i;for(let n=0;n<t;n++)e=sx(e,n+1);return e}function sx(i,t){let e=i.TILES;if(i.surface||i.buildings.length||i.stairs.length||i.links.length)throw new Error("rotateLayout: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0430\u0440\u0442 \u0431\u0435\u0437 \u0437\u0434\u0430\u043D\u0438\u0439, \u043B\u0435\u0441\u0442\u043D\u0438\u0446 \u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F (base)");let n=(c,h)=>c.map(u=>u.map(d=>d.map(()=>h))),s=(c,h)=>{let u=n(c,h);for(let d=0;d<c.length;d++)for(let f=0;f<e;f++)for(let p=0;p<e;p++)u[d][p][e-1-f]=c[d][f][p];return u},r=n(i.wallW,null),o=n(i.wallN,null);for(let c=0;c<i.wallW.length;c++)for(let h=0;h<=e;h++)for(let u=0;u<=e;u++){let d=i.wallW[c][h][u];d&&h<e&&(o[c][u][e-1-h]=d);let f=i.wallN[c][h][u];f&&u<e&&(r[c][u][e-h]=f)}let a=([c,h,...u])=>[e-1-h,c,...u],l=i.objects.map(c=>{let h={col:e-c.row-c.rows,row:c.col,cols:c.rows,rows:c.cols};if(c.kind==="rockFill")return{...c,...h};let u=c.source||c;return{...c,...h,source:u,turns:t}});return{...i,floor:s(i.floor,0),offset:s(i.offset,0),indoor:s(i.indoor,0),wallW:r,wallN:o,objects:l,blockedCells:i.blockedCells.map(([c,h,u])=>[c,e-1-u,h]),extraction:i.extraction?i.extraction.map(a):i.extraction,concrete:i.concrete.map(c=>c.circle?{...c,circle:[e*i.TILE-c.circle[1],c.circle[0],c.circle[2]]}:{...c,rect:[e*i.TILE-c.rect[3],c.rect[0],e*i.TILE-c.rect[1],c.rect[2]]}),viewTurns:t}}var Go=class extends vi{constructor(t=null){super();let e=new _e;e.deleteAttribute("uv");let n=new te({side:$e}),s=new te,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new vr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Mt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Mt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Mt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Mt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Mt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Mt(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Mt(e,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new Mt(e,Gs(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let x=new Mt(e,Gs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Mt(e,Gs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let g=new Mt(e,Gs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let y=new Mt(e,Gs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new Mt(e,Gs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){let t=new Xi;return t.color.setScalar(i),t}function be(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var $x=be(20261121);var en=new Uint8Array(512);{let i=be(7),t=Array.from({length:256},(e,n)=>n);for(let e=255;e>0;e--){let n=Math.floor(i()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<512;e++)en[e]=t[e&255]}var Wl=i=>i*i*i*(i*(i*6-15)+10),Ki=(i,t,e)=>i+(t-i)*e;function wi(i,t,e,n){let s=i&15,r=s<8?t:e,o=s<4?e:s===12||s===14?t:n;return(s&1?-r:r)+(s&2?-o:o)}function Ru(i,t,e){let n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);let o=Wl(i),a=Wl(t),l=Wl(e),c=en[n]+s,h=en[c]+r,u=en[c+1]+r,d=en[n+1]+s,f=en[d]+r,p=en[d+1]+r;return Ki(Ki(Ki(wi(en[h],i,t,e),wi(en[f],i-1,t,e),o),Ki(wi(en[u],i,t-1,e),wi(en[p],i-1,t-1,e),o),a),Ki(Ki(wi(en[h+1],i,t,e-1),wi(en[f+1],i-1,t,e-1),o),Ki(wi(en[u+1],i,t-1,e-1),wi(en[p+1],i-1,t-1,e-1),o),a),l)}function Au(i,t,e,n=4){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*Ru(i*o,t*o,e*o),o*=2,r*=.5;return s}function Si(i,t,e,n=5,s=0){let r=i*Math.PI*2,o=t*Math.PI*2,a=e/(Math.PI*2),l=0,c=.5,h=1;for(let u=0;u<n;u++)l+=c*Ru(Math.cos(r)*a*h+s,Math.sin(r)*a*h+Math.cos(o)*a*h,Math.sin(o)*a*h+s*.7),h*=2,c*=.5;return l}function Cu(i){let t=document.createElement("canvas");return t.width=t.height=i,t}function ze(i,{srgb:t=!0,repeat:e=1}={}){let n=new Ao(i);return t&&(n.colorSpace=Ze),n.wrapS=n.wrapT=Gi,n.repeat.set(e,e),n.anisotropy=8,n}function rx(i,t,e=2){let n=Cu(t),s=n.getContext("2d"),r=s.createImageData(t,t),o=(a,l)=>i[(l+t)%t*t+(a+t)%t];for(let a=0;a<t;a++)for(let l=0;l<t;l++){let c=(o(l+1,a)-o(l-1,a))*e,h=(o(l,a+1)-o(l,a-1))*e,u=Math.hypot(c,h,1),d=(a*t+l)*4;r.data[d]=(-c/u*.5+.5)*255,r.data[d+1]=(h/u*.5+.5)*255,r.data[d+2]=(1/u*.5+.5)*255,r.data[d+3]=255}return s.putImageData(r,0,0),ze(n,{srgb:!1})}function ox(i,t,e){let n=new Float32Array(i*i),s=Cu(i),r=s.getContext("2d"),o=r.createImageData(i,i);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=l/i,h=a/i,u=t(c,h,l,a);n[a*i+l]=u;let[d,f,p]=e(c,h,u,l,a),x=(a*i+l)*4;o.data[x]=d,o.data[x+1]=f,o.data[x+2]=p,o.data[x+3]=255}return r.putImageData(o,0,0),{canvas:s,ctx:r,heights:n}}var Xl=i=>Math.max(0,Math.min(255,i));function Mr(i=3,t=[128,120,108]){let n=be(i),{canvas:s,ctx:r,heights:o}=ox(512,(a,l)=>{let c=Si(a,l,6,6,i),h=Math.abs(Si(a,l,14,3,i+9));return c*.8-Math.max(0,.06-h)*6},(a,l,c)=>{let h=Si(a,l,20,3,i+3),u=.72+c*.55+(n()-.5)*.1,d=t[0]*u,f=t[1]*u,p=t[2]*u;return h>.22&&(d=d*.7+60,f=f*.75+75,p=p*.6+30),[Xl(d),Xl(f),Xl(p)]});for(let a=0;a<4e3;a++)r.fillStyle=n()<.5?"rgba(30,28,24,0.35)":"rgba(210,205,190,0.25)",r.fillRect(n()*512,n()*512,1+n()*2,1+n()*2);return{map:ze(s),normalMap:rx(o,512,5)}}function Vo(i="#ffb347",t=1,e="text"){let n=document.createElement("canvas");n.width=256,n.height=160;let s=n.getContext("2d"),r=be(t);if(s.fillStyle="#05090a",s.fillRect(0,0,256,160),s.strokeStyle=i,s.fillStyle=i,e==="wave"){s.lineWidth=2;for(let o=0;o<3;o++){s.globalAlpha=.9-o*.25,s.beginPath();for(let a=0;a<=256;a+=4){let l=80+Math.sin(a*.05+o)*30*Math.exp(-(((a-128)/80)**2))+(r()-.5)*6+o*20-20;a===0?s.moveTo(a,l):s.lineTo(a,l)}s.stroke()}}else for(let o=0;o<12;o++){let a=10;for(;a<240;){let l=4+r()*14;s.globalAlpha=.5+r()*.5,s.fillRect(a,10+o*12,l,6),a+=l+4+r()*6}}s.globalAlpha=.15;for(let o=0;o<160;o+=3)s.fillRect(0,o,256,1);return ze(n)}var Jx=new N(0,1,0);function Yl(i,t,{flatten:e=.75,roughness:n=.35,detail:s=3}={}){let r=new Zi(i,s),o=r.attributes.position,a=new N;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l);let c=a.clone().normalize(),h=1+Au(c.x*1.6+t,c.y*1.6,c.z*1.6-t,4)*n*2+Math.max(0,Au(c.x*4+t,c.y*4,c.z*4,2))*.15;a.copy(c).multiplyScalar(i*h);let u=Math.floor((c.x*3+t)*1.3)*.02;a.y*=e,a.x+=u,o.setXYZ(l,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function br(i,t){i.traverse(e=>{if(e.material)for(let n of Array.isArray(e.material)?e.material:[e.material])"envMapIntensity"in n&&(n.envMapIntensity=t)})}var Pu=Math.SQRT1_2,Iu=(i,t)=>new mt((i+t)*Pu,(t-i)*Pu);var c_=new mt(.75,-.66).normalize();var Er=new N;function wn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Er.copy(t),Er[n]=0,Er.normalize();let c=.5*o/(o+a),h=1-Er.angleTo(i)/l;return Math.sign(Er[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Wo=class extends _e{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,l=new N,c=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new N,x=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:p.set(1,0,0),d[g+0]=wn(p,l,"z","y",r,n),d[g+1]=1-wn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[g+0]=1-wn(p,l,"z","y",r,n),d[g+1]=1-wn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[g+0]=1-wn(p,l,"x","z",r,t),d[g+1]=wn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[g+0]=1-wn(p,l,"x","z",r,t),d[g+1]=1-wn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[g+0]=1-wn(p,l,"x","y",r,t),d[g+1]=1-wn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[g+0]=wn(p,l,"x","y",r,t),d[g+1]=1-wn(p,l,"y","x",r,e);break}}};var lx=(i,t,e)=>new N(i,t,e),Xo=null;function Du(){if(Xo)return Xo;let i=(t,e=.75,n=.15,s={})=>new te({color:t,roughness:e,metalness:n,...s});return Xo={olive:i(5068344,.78,.18),oliveDark:i(3818025,.8,.18),dusty:i(7038024,.95,.05),frame:i(1908507,.7,.4),rubber:i(1776410,.95,0),rubberDusty:i(3814960,.98,0),hub:i(4409906,.7,.3),steel:i(9080200,.4,.75),glass:new En({color:1713192,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.4}),lens:i(14212304,.15,.6,{emissive:1118481}),red:i(9050642,.4,.1),amber:i(12614170,.4,.1),canvas:i(5921344,.95,0)},Xo}function We(i){return i.castShadow=i.receiveShadow=!0,i}function bt(i,t,e,n,s,r,o,a,l=0){let c=l>0?new Wo(t,e,n,3,Math.min(l,t/2.1,e/2.1,n/2.1)):new _e(t,e,n),h=We(new Mt(c,s));return h.position.set(r,o,a),i.add(h),h}function Se(i,t,e,n,s,r,o,a="x",l=20,c=t){let h=We(new Mt(new Ge(t,c,e,l),n));return a==="x"&&(h.rotation.z=Math.PI/2),a==="z"&&(h.rotation.x=Math.PI/2),h.position.set(s,r,o),i.add(h),h}function Yo(i,t,e,n){let s=new Ns(t.map(r=>lx(...r)),!1,"catmullrom",.05);i.add(We(new Mt(new gr(s,t.length*8,e,8),n)))}function ei(i,t,e,n,s,r=.025){let o=new Ve;t.forEach(([c,h],u)=>{u===0?o.moveTo(-c,h):o.lineTo(-c,h)});let a=new tn(o,{depth:e-r*2,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:4});a.rotateY(Math.PI/2);let l=We(new Mt(a,n));return l.position.x=s-e/2+r,i.add(l),l}function wr(i,t,e,n,s,r=()=>({scale:1,drop:0}),o=.02){let a=new Ve;t.forEach(([d,f],p)=>{p===0?a.moveTo(d,f):a.lineTo(d,f)});let l=n-e,c=new tn(a,{depth:l-o*2,bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:8,curveSegments:6}),h=c.attributes.position;for(let d=0;d<h.count;d++){let f=Math.min(1,Math.max(0,(h.getZ(d)+o)/l)),{scale:p,drop:x}=r(f);h.setX(d,h.getX(d)*p),h.setY(d,h.getY(d)-x*Math.max(0,h.getY(d)))}c.computeVertexNormals();let u=We(new Mt(c,s));return u.position.z=e+o,i.add(u),u}function cx(i,t,e,n=.03,s=0){let r=[],o=i/2,a=(l,c,h,u,d)=>{for(let f=0;f<=6;f++){let p=u+(d-u)*f/6;r.push([l+Math.cos(p)*h,c+Math.sin(p)*h])}};return a(o-n,s+n,n,-Math.PI/2,0),a(o-e,s+t-e,e,0,Math.PI/2),a(-o+e,s+t-e,e,Math.PI/2,Math.PI),a(-o+n,s+n,n,Math.PI,Math.PI*1.5),r}function Sr(i,t,e,n,s,r){return cx(i-r*2,t-r*2,Math.max(.01,e-r),Math.max(.01,n-r),s+r)}function hx(i,t,e,n,s,r,o){let a=Du(),l=s*.58,c=.09,h=r/2,u=[new mt(l,-h)];for(let x=0;x<=6;x++){let m=-Math.PI/2+x/6*Math.PI/2;u.push(new mt(s-c+Math.cos(m)*c,-h+c+Math.sin(m)*c))}for(let x=0;x<=6;x++){let m=x/6*Math.PI/2;u.push(new mt(s-c+Math.cos(m)*c,h-c+Math.sin(m)*c))}u.push(new mt(l,h));let d=We(new Mt(new Yi(u,36),a.rubber));d.rotation.z=Math.PI/2,d.position.set(t,e,n),i.add(d);let f=20;for(let x=0;x<f;x++){let m=x/f*Math.PI*2;for(let g of[-1,1])bt(i,r*.36,.04,.075,a.rubber,t+g*r*.2,e+Math.cos(m)*(s+.005),n+Math.sin(m)*(s+.005),.015).rotation.set(m,g*.5,0)}let p=t+o*(h-.03);Se(i,l,.05,a.hub,p,e,n,"x",28),Se(i,s*.24,.08,a.hub,p+o*.04,e,n,"x",18),Se(i,s*.12,.05,a.frame,p+o*.08,e,n,"x",12);for(let x=0;x<8;x++){let m=x/8*Math.PI*2;Se(i,.018,.04,a.steel,p+o*.03,e+Math.cos(m)*s*.36,n+Math.sin(m)*s*.36,"x",6)}}var Nu={length:6.15,width:2.35};function Uu(){let i=Du(),t=new Ft,e=.5,n=.34,s=.95,r=5.1,o=[1.12,2.3,r],a=.95;for(let D of o)for(let E of[-1,1])hx(t,E*s,e,D,e,n,E);for(let D of[-1,1])bt(t,.12,.22,5.75,i.frame,D*.45,a-.11,3.1);for(let D of o){Se(t,.065,s*2-.25,i.frame,0,e,D,"x",12);let E=new Mt(new Fn(.2,16,10),i.frame);E.scale.set(1.1,.9,.9),E.position.set(0,e,D),t.add(We(E))}bt(t,2.25,.2,.16,i.oliveDark,0,.8,6.06,.06);for(let D of[-1,1]){let E=new Mt(new Fs(.055,.018,6,12,Math.PI*1.4),i.frame);E.position.set(D*.6,.72,6.16),E.rotation.set(0,Math.PI/2,Math.PI*.8),t.add(We(E))}bt(t,.6,.24,.24,i.frame,0,.84,5.86,.06),Se(t,.1,.48,i.steel,0,.88,5.86,"x",14);let l=4.72,c=6;wr(t,Sr(1.14,.78,.24,.02,.98,.03),l,c,i.olive,D=>({scale:1-.1*D,drop:.045*D*D}),.03),bt(t,.03,.02,c-l-.1,i.oliveDark,0,1.755,(l+c)/2);for(let D of[-1,1])for(let E=0;E<6;E++){let H=bt(t,.02,.2,.05,i.frame,D*.552,1.38,4.95+E*.11,.008);H.rotation.y=D*.15}wr(t,Sr(1,.68,.12,.04,1.02,.012),c-.02,c+.05,i.olive,void 0,.012);for(let D=-4;D<=4;D++)bt(t,.045,.5,.04,i.frame,D*.09,1.34,c+.045,.012);let h=[],u=(D,E,H,W,et)=>{let ft=[];for(let G=0;G<=20;G++){let ht=H+(W-H)*G/20;ft.push([r+Math.cos(ht)*D,e+Math.sin(ht)*E])}return et?ft.reverse():ft};h.push(...u(.98,.72,.2,2.75,!1)),h.push([3.62,.78],[3.62,.72]),h.push(...u(.92,.66,.2,2.75,!0).slice(0,-1));let d=[[r+Math.cos(2.75)*.92,e+Math.sin(2.75)*.66]];for(let D of[-1,1]){ei(t,h,.44,i.olive,D*.93,.03),bt(t,.05,.45,1.05,i.oliveDark,D*.7,1,r+.05);let E=new Mt(new Fn(.12,18,12),i.olive);E.scale.set(1,1,.75),E.position.set(D*.83,1.13,5.86),t.add(We(E)),Se(t,.09,.02,i.lens,D*.83,1.13,5.95,"z",18);for(let H of[-.05,0,.05])bt(t,.012,.2,.012,i.frame,D*.83+H,1.13,5.99);bt(t,.07,.045,.04,i.amber,D*1,1.2,5.7,.01),bt(t,.36,.4,.02,i.rubber,D*.93,.55,r-.82)}let f=4.74,p=3.62,x=(f+p)/2,m=f-p;bt(t,1.3,.24,m-.1,i.frame,0,1.06,x),wr(t,Sr(2.18,.98,.1,.05,1,.05),p,f,i.olive,void 0,.05);let g={z:f-.02,y:1.96},y={z:f-.24,y:2.44},_=[[p+.02,1.95],[f-.02,1.95],[g.z,g.y]],b=2.6,L=.16,C=.24;for(let D=1;D<=10;D++){let E=D/10*Math.PI/2;_.push([y.z-C*(1-Math.cos(E)),y.y+(b-y.y)*Math.sin(E)])}for(let D=0;D<=8;D++){let E=D/8*Math.PI/2;_.push([p+.04+L-Math.sin(E)*L,b-L+Math.cos(E)*L])}ei(t,_,2.1,i.olive,0,.09);let P=Math.atan2(g.z-y.z,y.y-g.y),v=(g.z+y.z)/2+.1*Math.cos(P),z=(g.y+y.y)/2+.1*Math.sin(P);for(let D of[-1,1]){let E=bt(t,.84,.44,.03,i.glass,D*.48,z,v,.02);E.rotation.x=-P,bt(t,.03,.36,.6,i.glass,D*1.06,2.22,x+.02,.02),bt(t,.03,.85,.02,i.oliveDark,D*1.1,1.55,x-.28),bt(t,.03,.03,.12,i.steel,D*1.105,1.8,x-.16),Yo(t,[[D*1.05,2,f-.1],[D*1.28,2.12,f],[D*1.31,2.34,f]],.014,i.frame),bt(t,.04,.26,.16,i.frame,D*1.32,2.36,f,.015)}let M=bt(t,.06,.46,.04,i.oliveDark,0,z,v+.01);M.rotation.x=-P,bt(t,1.1,.28,.03,i.glass,0,2.22,p+.03,.02);for(let D of[-.25,0,.25])bt(t,.07,.04,.05,i.amber,D,2.7,f-.4,.01);Se(t,.26,.85,i.oliveDark,.88,.78,3.05,"z",20);for(let D of[2.75,3.35])bt(t,.04,.58,.05,i.frame,.88,.78,D);bt(t,.5,.4,.62,i.oliveDark,-.88,.82,3.05,.05),Yo(t,[[.55,1,p-.02],[.75,1.25,p-.08],[.78,2.65,p-.08]],.045,i.frame);let S=3.5,rt=.12,$=S-rt,I=(S+rt)/2,B=1.1,k=2.08;bt(t,2.08,.12,$,i.frame,0,B-.06,I),wr(t,Sr(2.35,k,.2,.05,B,.08),rt,S,i.olive,void 0,.08);for(let D of[-1,1]){for(let E of[.88,1.78,2.68])bt(t,.03,.44,.62,i.oliveDark,D*1.177,B+1.45,E,.03),bt(t,.03,.34,.52,i.glass,D*1.186,B+1.45,E,.02);for(let E of[B+.38,B+1.02])bt(t,.02,.03,$-.3,i.oliveDark,D*1.178,E,I);bt(t,.3,.36,.5,i.oliveDark,D*1,B-.24,1.71,.05)}bt(t,.86,1.75,.03,i.oliveDark,-.45,B+.92,rt-.01,.03),bt(t,.3,.26,.03,i.glass,-.45,B+1.45,rt-.03,.02),bt(t,.03,.03,.14,i.steel,-.1,B+.9,rt-.05);for(let D of[-.75,-.15])bt(t,.03,.9,.03,i.frame,D,B-.3,rt-.12);for(let D=0;D<4;D++)bt(t,.6,.025,.03,i.frame,-.45,B-.65+D*.22,rt-.12);for(let D of[-1,1])bt(t,.14,.08,.04,i.red,D*.95,.92,rt-.02,.02),bt(t,.4,.4,.02,i.rubber,D*.95,.58,.45);let q=B+k;for(let D of[-1,1])Yo(t,[[D*.98,q-.02,.35],[D*.98,q+.14,.5],[D*.98,q+.14,3.05],[D*.98,q-.02,3.2]],.02,i.frame);for(let D of[.65,1.45,2.25,3])bt(t,1.96,.025,.025,i.frame,0,q+.14,D);return bt(t,1.2,.18,.9,i.canvas,-.2,q+.08,1.25,.08),bt(t,.6,.55,.3,i.oliveDark,.55,q-.38,S+.16,.08),Se(t,.12,.42,i.frame,.55,q+.12,S+.16,"y",16),Se(t,.16,.04,i.oliveDark,.55,q+.34,S+.16,"y",16),Se(t,.035,.9,i.frame,-.7,q+.38,S-.2,"y",8),wr(t,Sr(2.37,.16,.02,.05,B-.005,.01),rt+.01,S-.01,i.dusty,void 0,.01),t}var Bn={length:15,width:12.4,height:6.45,floor:.6,cabin:{left:-2.5,right:2.5,rear:2.5,front:10,ceiling:4.6},cells:{columns:4,rows:6,cell:1.25},ramp:{from:0,to:2.5},sideDoor:{side:"right",rear:3.75,front:5,height:2.1},cockpitDoor:{left:-2.5,right:-1.25,height:2.1},seats:[["A",2],["A",3],["A",4],["D",2],["D",3],["D",4]],mechBay:{columns:["B","C"],rows:[1,2]}};function ux(i){let t=i?{clippingPlanes:i,clipShadows:!0,side:Fe}:{},e=(n,s=.7,r=.25,o={})=>new te({color:n,roughness:s,metalness:r,...t,...o});return{hull:e(4870469,.62,.3),hullDark:e(3554355,.66,.3),belly:e(7370092,.7,.25),panel:e(2830378,.6,.4),interior:e(9409933,.8,.15),floor:e(2764074,.85,.35),seat:e(4082230,.95,0),frame:e(1908508,.6,.6),steel:e(9212042,.35,.8),rubber:e(1710617,.95,0),yellow:e(13214234,.6,.1),glass:new En({color:1318954,roughness:.06,metalness:.2,clearcoat:1,envMapIntensity:1.6,...t}),red:e(11540496,.4,.1,{emissive:5244933}),green:e(1089584,.4,.1,{emissive:342544}),white:e(15263968,.4,.1,{emissive:3158064})}}function Tr(i,t,e,n,s){let r=[],o=(a,l,c,h,u,d)=>{for(let f=0;f<=d;f++){let p=h+(u-h)*f/d;r.push([a+Math.cos(p)*c,l+Math.sin(p)*c])}};return o(i-s,t+s,s,-Math.PI/2,0,4),o(i-n,e-n,n,0,Math.PI/2,10),o(-i+n,e-n,n,Math.PI/2,Math.PI,10),o(-i+s,t+s,s,Math.PI,Math.PI*1.5,4),r}function ql(i,t,e,n,s,r,o=32,a=null){let l=new Ve;t.forEach(([p,x],m)=>{m===0?l.moveTo(p,x):l.lineTo(p,x)});let c=new tn(l,{depth:n-e,bevelEnabled:!1,steps:o,curveSegments:6}),h=c.attributes.position,u=a?a.bottom:Math.min(...t.map(p=>p[1])),d=a?a.top:Math.max(...t.map(p=>p[1]));for(let p=0;p<h.count;p++){let x=r(e+h.getZ(p));h.setX(p,h.getX(p)*x.scale),h.setY(p,x.bottom+(h.getY(p)-u)*(x.top-x.bottom)/(d-u))}c.computeVertexNormals();let f=We(new Mt(c,s));return f.position.z=e,i.add(f),f}function dx(i,t,e,n,s){let r=new Ft,o=[[1.38,.32],[1.41,.44],[1.47,.47],[1.53,.4],[1.56,.1],[1.55,-.3],[1.5,-.45],[1.44,-.45],[1.39,-.25],[1.38,.32]].map(([c,h])=>new mt(c,h));r.add(We(new Mt(new Yi(o,56),t.hull)));let a=We(new Mt(new Fs(1.555,.03,6,56),t.yellow));a.rotation.x=Math.PI/2,a.position.y=.05,r.add(a),Se(r,.3,.7,t.hullDark,0,0,0,"y",24);let l=We(new Mt(new Fn(.3,20,10,0,Math.PI*2,0,Math.PI/2),t.steel));l.position.y=.35,r.add(l);for(let c=0;c<7;c++){let h=new Ft;h.rotation.y=c*Math.PI*2/7+.2;let u=We(new Mt(new _e(1.08,.03,.24),t.frame));u.position.x=.84,u.position.y=.12,u.rotation.x=.42,h.add(u),r.add(h)}for(let c=0;c<3;c++){let h=new Ft;h.rotation.y=c*Math.PI*2/3;let u=We(new Mt(new _e(1.1,.12,.05),t.hullDark));u.position.x=.85,u.position.y=-.2,h.add(u),r.add(h)}return Se(r,.16,.5,t.steel,-Math.sign(e)*1.7,0,0,"x",16),r.position.set(e,n,s),i.add(r),r}function fx(i,t,e,n,s,r,o,a){let l=[[a*.5,0],[a*.35,.12],[-a*.2,.14],[-a*.5,.03],[-a*.5,-.03],[-a*.2,-.12],[a*.35,-.1]].map(([h,u])=>[o+h,r+u]),c=s-n;ei(i,l,c,t.hull,e*(n+c/2),.03)}function Fu({cutaway:i=!1,rampOpen:t=!0}={}){let e=i?[new Ln(new N(0,-1,0),3)]:null,n=ux(e),s=new Ft,r=new Ft;s.name="floor",r.name="back";let o=new Ft;o.name="shell";let a=2.8,l=.25,c=5,h=Bn.floor,u=Bn.cabin;bt(s,a*2,h-l,u.front-u.rear,n.belly,0,(h+l)/2,(u.front+u.rear)/2,.12).userData.solid=!0,bt(s,u.right-u.left-.02,.03,u.front-u.rear,n.floor,0,h+.015,(u.front+u.rear)/2);let d=3.5,f=d-l-.12,p=l+.12+f/2;bt(o,a-u.right,f,u.front-u.rear,n.hull,-(a+u.right)/2,p,(u.front+u.rear)/2);let x=Bn.sideDoor,m=(a+u.right)/2;bt(o,a-u.right,f,x.rear-u.rear,n.hull,m,p,(x.rear+u.rear)/2),bt(o,a-u.right,f,u.front-x.front,n.hull,m,p,(u.front+x.front)/2);let g=h+x.height;bt(o,a-u.right,d-g,x.front-x.rear,n.hull,m,(d+g)/2,(x.rear+x.front)/2),bt(o,a-u.right,h-l-.12,x.front-x.rear,n.hull,m,(h+l+.12)/2,(x.rear+x.front)/2),[[x.rear,0],[x.front,0]].forEach(([V])=>bt(o,.36,x.height+.1,.08,n.hullDark,m,h+x.height/2,V)),bt(o,.36,.08,x.front-x.rear+.08,n.hullDark,m,g,(x.rear+x.front)/2);let y=Tr(a,l,c,1.3,.3).filter(([,V])=>V>=d-.001),_=Tr(u.right,h,u.ceiling,.9,.01).filter(([,V])=>V>=d-.001).reverse(),b=[[a,d]].concat(y,[[-a,d],[u.left,d]],_,[[u.right,d]]),L=new tn(new Ve(b.map(([V,Y])=>new mt(V,Y))),{depth:u.front-u.rear,bevelEnabled:!1,curveSegments:4}),C=We(new Mt(L,n.hull));C.position.z=u.rear,o.add(C);let P=Tr(a+.04,l+.1,c+.04,1.32,.3),v=Tr(u.right-.03,h+.02,u.ceiling-.03,.87,.01),z=new Ve(P.map(([V,Y])=>new mt(V,Y)));z.holes.push(new Us(v.slice().reverse().map(([V,Y])=>new mt(V,Y))));let M=We(new Mt(new tn(z,{depth:.3,bevelEnabled:!1,curveSegments:4}),n.hullDark));M.position.z=u.rear,M.userData.hollow=!0,o.add(M),M.castShadow=M.receiveShadow=!1;let S=u.front,rt=Bn.length,$=rt-S,I=(V,Y,F)=>{let K=Math.min(1,Math.max(0,(F-V)/(Y-V)));return K*K*(3-2*K)},B=V=>{let Y=(V-S)/$;return{scale:1-.1*I(.25,.65,Y)-.55*Math.pow(I(.55,1,Y),1.3),top:c-2*I(.18,.66,Y)-1.45*Math.pow(I(.62,1,Y),1.4),bottom:l+.85*Math.pow(I(.5,1,Y),1.6)}},k=Tr(a,l,c,1.3,.3);ql(o,k,S,rt,n.hull,B,40);let q=(()=>{let V=k.filter(([,K])=>K>=2.85),Y=[0,2.6],F=(K,gt)=>{let Lt=Math.hypot(K[0]-Y[0],K[1]-Y[1]);return[K[0]+(K[0]-Y[0])/Lt*gt,K[1]+(K[1]-Y[1])/Lt*gt]};return V.map(K=>F(K,.035)).concat(V.slice().reverse().map(K=>F(K,-.01)))})(),D=S+$*.2,E=S+$*.7;ql(o,q,D,E,n.glass,B,24,{bottom:l,top:c});let H=q.map(([V,Y])=>[V*1.004,Y+.004]);ql(o,H,D+(E-D)*.45,D+(E-D)*.45+.1,n.hullDark,B,2,{bottom:l,top:c}),bt(r,u.right-u.left,u.ceiling-h,.08,n.interior,0,(u.ceiling+h)/2,u.front-.04);let W=Bn.cockpitDoor;bt(r,W.right-W.left-.2,W.height,.06,n.hullDark,(W.left+W.right)/2,h+W.height/2,u.front-.09),bt(r,.25,.25,.05,n.glass,(W.left+W.right)/2,h+1.6,u.front-.13),[-1,1].forEach(V=>{bt(o,.5,1,4,n.hullDark,V*(a+.2),.85,7.4,.2),[6,8.8].forEach(Y=>{Se(o,.07,.5,n.steel,V*(a+.2),.45,Y,"y",10),Se(o,.27,.22,n.rubber,V*(a+.2),.27,Y,"x",20)})}),Se(o,.07,.4,n.steel,0,.35,13.6,"y",10),Se(o,.22,.18,n.rubber,0,.22,13.6,"x",18);let et=new Ft,ft=Math.hypot(Bn.ramp.to-Bn.ramp.from,h);bt(et,u.right-u.left,.12,ft,n.hullDark,0,-.06,-ft/2);for(let V=0;V<9;V++)bt(et,u.right-u.left-.3,.025,.05,n.frame,0,.012,-.2-V*(ft-.4)/8);[-1,1].forEach(V=>bt(et,.06,.18,ft,n.yellow,V*(u.right-.03),.09,-ft/2)),et.position.set(0,h,u.rear),et.rotation.x=t?-Math.atan2(h,Bn.ramp.to-Bn.ramp.from):Math.PI/2-.15,s.add(et);let G=a+.55,ht=x.front-x.rear-.15;for(let V=0;V<3;V++){let Y=h-(V+1)*h/3.2;bt(s,.36,.05,ht,n.steel,a+.15+V*.32,Y,(x.rear+x.front)/2)}[x.rear+.1,x.front-.1].forEach(V=>Yo(o,[[a+.05,h+.95,V],[a+.5,h+.7,V],[G+.4,.75,V]],.025,n.steel)),[-1,1].forEach(V=>bt(V<0?r:o,.03,2.9,u.front-u.rear-.2,n.interior,V*(u.right-.015),h+1.6,(u.front+u.rear)/2));let _t=Bn.cells.cell,O=V=>u.front-(V-.5)*_t;Bn.seats.forEach(([V,Y])=>{let F=V==="A"?-1:1,K=F*(u.right-.35),gt=O(Y);bt(s,.5,.1,.9,n.seat,K,h+.48,gt,.03),bt(s,.1,.75,.9,n.seat,F*(u.right-.08),h+.95,gt,.03),bt(s,.04,.45,.04,n.frame,K-F*.2,h+.22,gt-.38),bt(s,.04,.45,.04,n.frame,K-F*.2,h+.22,gt+.38),bt(s,.03,.6,.06,n.yellow,F*(u.right-.05),h+1,gt-.25)});let J=-_t,j=_t,pt=O(2)-_t/2,nt=u.front;[[J,pt,j,pt],[J,pt,J,nt-.1],[j,pt,j,nt-.1]].forEach(([V,Y,F,K])=>{bt(s,Math.max(.08,Math.abs(F-V)),.012,Math.max(.08,Math.abs(K-Y)),n.yellow,(V+F)/2,h+.036,(Y+K)/2)}),[[-.8,9.4],[.8,9.4],[-.8,7.8],[.8,7.8]].forEach(([V,Y])=>Se(s,.07,.03,n.steel,V,h+.045,Y,"y",12)),[-1,1].forEach(V=>{let Y=ei(o,[[2.55,c-.25],[4.9,c-.25],[3.55,c+1.35],[2.75,c+1.4]],.16,n.hull,0,.04);Y.rotation.z=V*-.18,Y.position.x+=V*1.55,bt(o,.06,.06,.06,V<0?n.red:n.green,V*1.82,c+1.38,2.85)}),bt(o,2.2,.5,4.2,n.hullDark,0,c+.12,7.3,.22),[-.6,.6].forEach(V=>bt(o,.6,.12,.8,n.frame,V,c+.38,6,.04)),bt(o,.08,.06,.08,n.white,0,c+.4,9.2);let R=a+.35+1.5,ot=3.85;[[4.2,1.7],[11.6,1.5]].forEach(([V,Y])=>{[-1,1].forEach(F=>{fx(o,n,F,a-.1,R-1.45,ot,V,Y),dx(o,n,F*R,ot,V)})}),[-1,1].forEach(V=>{bt(o,.02,.08,2.4,n.yellow,V*(a+.01),2.9,7.4),bt(o,.02,.4,.4,n.white,V*(a+.01),3.25,9.2)}),o.updateMatrixWorld(!0),o.traverse(V=>{if(!V.isMesh)return;let Y=new Un().setFromObject(V).getSize(new N);Math.min(Y.x,Y.y,Y.z)>=.12&&!V.userData.hollow&&(V.userData.solid=!0)});let Q=new Ft;return Q.add(s,r,o),Q}var qo={suv:{length:4.7,width:1.9,height:1.8},van:{length:5.1,width:2,height:2.15}},Lu={police:15001314,white:14080212,graphite:3817026,red:8006178,olive:5199416,blue:3099238,sand:11048042};function px(i,t,e,n,s,r,o,a){let l=Se(i,r,o,t.rubber,e,n,s,"x",28);Se(i,r*.62,o+.01,t.rim,e+a*.005,n,s,"x",20),Se(i,r*.2,o+.03,t.frame,e+a*.01,n,s,"x",12)}function Ou({type:i="suv",color:t="white",seed:e=1}={}){let n=qo[i],s=(d,f=.45,p=.35,x={})=>new te({color:d,roughness:f,metalness:p,...x}),r={body:s(Lu[t]||Lu.white,.38,.45),trim:s(2040356,.7,.2),rubber:s(1579034,.95,0),rim:s(10133154,.35,.8),frame:s(2763822,.6,.5),glass:new En({color:1317922,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.5}),lamp:s(15262928,.2,.3,{emissive:2236440}),tail:s(9050644,.3,.2,{emissive:2753795}),dust:s(9075294,.95,0)},o=new Ft,a=n.width,l=n.length,c=i==="van"?.36:.4,h=i==="van"?.18:.26;if(i==="suv"){ei(o,[[0,h+.22],[0,1],[.12,1.08],[3.75,1.1],[4.55,1],[4.7,.86],[4.7,h+.22],[4.45,h+.1],[.25,h+.1]],a,r.body,0,.09),ei(o,[[.22,1.06],[.32,1.66],[2.95,1.7],[3.62,1.08]],a-.18,r.glass,0,.06),ei(o,[[.3,1.66],[.34,1.78],[2.92,1.8],[2.98,1.68]],a-.12,r.body,0,.05);for(let d of[[.26,.3],[1.6,1.68],[3.2,3.3]])bt(o,a-.16,.62,d[1]-d[0]+.05,r.body,0,1.39,(d[0]+d[1])/2+(d[0]>3?.08:0));for(let d of[-1,1])bt(o,.05,.05,2.2,r.trim,d*(a/2-.2),1.83,1.6)}else ei(o,[[0,h+.2],[0,2.08],[.1,2.15],[4.05,2.15],[4.25,1.55],[4.95,1.1],[5.1,.95],[5.1,h+.2],[4.9,h+.08],[.2,h+.08]],a,r.body,0,.08),ei(o,[[3.6,1.15],[3.6,1.95],[4.02,1.95],[4.32,1.18]],a+.01,r.glass,0,.02),bt(o,a-.2,.7,.04,r.glass,0,1.55,4.27).rotation.x=-.75,bt(o,.02,1.7,.02,r.trim,a/2+.005,1.15,2.2),bt(o,.02,1.7,.02,r.trim,-a/2-.005,1.15,2.2);bt(o,a+.04,.22,.18,r.trim,0,h+.3,l-.04,.05),bt(o,a+.04,.22,.16,r.trim,0,h+.3,.05,.05);for(let d of[-1,1])bt(o,.32,.12,.05,r.lamp,d*(a/2-.3),.9,l+.005,.02),bt(o,.18,.26,.05,r.tail,d*(a/2-.15),i==="van"?1.2:.95,-.005,.02),bt(o,.06,.12,.2,r.trim,d*(a/2+.06),i==="van"?1.75:1.2,l-(i==="van"?1.35:1.15),.02);bt(o,a*.5,.18,.04,r.frame,0,i==="van"?.85:.82,l+.01,.02);let u=i==="van"?[.95,4.15]:[.9,3.8];for(let d of u)for(let f of[-1,1])px(o,r,f*(a/2-.12),c,d,c,.26,f);if(bt(o,a+.02,.08,l-.3,r.dust,0,h+.12,l/2),t==="police"){let d=s(2050714,.4,.3),f=s(12591136,.3,.2,{emissive:4194304}),p=s(2117840,.3,.2,{emissive:4160});for(let x of[-1,1])bt(o,.02,.16,l-.8,d,x*(a/2+.005),.78,l/2);bt(o,1.1,.1,.3,r.trim,0,i==="van"?2.2:1.85,l*.45),bt(o,.45,.12,.26,f,-.3,i==="van"?2.3:1.95,l*.45),bt(o,.45,.12,.26,p,.3,i==="van"?2.3:1.95,l*.45)}return o}var Vs=i=>Math.max(0,Math.min(255,Math.round(i)));function Sn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ar(i,t=3,e=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Sn(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(u,d)=>(e?(u=(u+n)%n,d=(d+s)%s):(u=Math.max(0,Math.min(n-1,u)),d=Math.max(0,Math.min(s-1,d))),r[(d*n+u)*4]/255);for(let u=0;u<s;u++)for(let d=0;d<n;d++){let f=(c(d+1,u)-c(d-1,u))*t,p=(c(d,u+1)-c(d,u-1))*t,x=Math.hypot(f,p,1),m=(u*n+d)*4;l.data[m]=(-f/x*.5+.5)*255,l.data[m+1]=(p/x*.5+.5)*255,l.data[m+2]=(1/x*.5+.5)*255,l.data[m+3]=255}return a.putImageData(l,0,0),ze(o,{srgb:!1})}function Ws(i,t,e,n,{seed:s=1,grain:r=10,dirt:o=.25,scale:a=3,streaks:l=0}={}){let c=be(s),h=i.createImageData(t,e);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let f=d/t,p=u/e,x=Si(f,p,a,4,s)*o,m=l?Math.max(0,Si(f*7,.3,30,2,s+3))*l*(1-p):0,g=1+x-m+(c()-.5)*r/255,y=(u*t+d)*4;h.data[y]=Vs(n[0]*g),h.data[y+1]=Vs(n[1]*g),h.data[y+2]=Vs(n[2]*g),h.data[y+3]=255}i.putImageData(h,0,0)}function zu(i,t){let r={hab:{base:[192,194,190],band:[74,78,80],stripe:[214,96,30]},inner:{base:[178,172,158],band:[96,98,96],stripe:[120,132,136]},cabin:{base:[126,132,136],band:[52,56,58],stripe:[222,120,30]}}[i],o=936/2.28,a=g=>936-g*o,l=Sn(512,936),c=l.getContext("2d"),h=Sn(512,936),u=h.getContext("2d");Ws(c,512,936,r.base,{seed:11+t*7+i.length,grain:9,dirt:i==="inner"?.08:.16,scale:3,streaks:i==="inner"?0:.35}),u.fillStyle="#808080",u.fillRect(0,0,512,936);let d=be(31+t*13+i.length);c.fillStyle=`rgb(${r.band.join(",")})`,c.fillRect(0,a(.3),512,.3*o),c.fillStyle=`rgb(${r.stripe.join(",")})`,c.fillRect(0,a(i==="inner"?.95:2.06),512,.08*o),u.fillStyle="#9a9a9a",u.fillRect(0,a(.3),512,.3*o);let f=i==="inner"?[0,512]:[0,512/2,512],p=a(1.22);c.fillStyle="rgba(30,32,34,0.75)",u.fillStyle="#202020";for(let g of f)c.fillRect(g-2,0,4,936),u.fillRect(g-2,0,4,936);c.fillRect(0,p-2,512,3),u.fillRect(0,p-2,512,3),c.fillStyle="rgba(255,255,255,0.25)";for(let g of f)c.fillRect(g+2,0,1,936);if(i!=="inner")for(let g of f)for(let y=30;y<a(.32);y+=54)for(let _ of[-9,9])c.fillStyle="rgba(60,62,64,0.8)",c.beginPath(),c.arc(g+_,y,2.6,0,Math.PI*2),c.fill(),u.fillStyle="#c8c8c8",u.beginPath(),u.arc(g+_,y,2.6,0,Math.PI*2),u.fill();if(i!=="inner"&&t===1){let y=a(1.95),_=512*.3;for(let b=0;b<7;b++)c.fillStyle="rgba(28,30,32,0.85)",c.fillRect(296.96,y+b*11,_,6),u.fillStyle="#303030",u.fillRect(296.96,y+b*11,_,6)}i!=="inner"&&t===2&&(c.fillStyle="rgba(40,44,46,0.9)",c.fillRect(512*.12,a(1.75),512*.22,.18*o),c.fillStyle="rgba(230,180,60,0.9)",c.font="bold 26px Arial",c.fillText("N8",512*.14,a(1.62)),u.fillStyle="#a8a8a8",u.fillRect(512*.12,a(1.75),512*.22,.18*o));let x=c.createLinearGradient(0,a(.7),0,936);if(x.addColorStop(0,"rgba(120,96,70,0)"),x.addColorStop(1,`rgba(120,96,70,${i==="inner"?.15:.45})`),c.fillStyle=x,c.fillRect(0,a(.7),512,.7*o),i!=="inner")for(let g=0;g<14;g++){let y=d()*512,_=40+d()*300,b=c.createLinearGradient(0,0,0,_);b.addColorStop(0,"rgba(50,46,40,0.22)"),b.addColorStop(1,"rgba(50,46,40,0)"),c.fillStyle=b,c.fillRect(y,0,2+d()*5,_)}let m=ze(l);return m.wrapS=m.wrapT=ke,{map:m,normalMap:Ar(h,4,!1)}}function Bu(){let t=Sn(512,512),e=t.getContext("2d"),n=Sn(512,512),s=n.getContext("2d");Ws(e,512,512,[120,124,124],{seed:5,grain:10,dirt:.15,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512);let r=be(17);for(let o=8;o<512;o+=16)for(let a=8+o/16%2*8;a<512;a+=16){let l=(a+o)/16%2?.8:-.8;e.save(),e.translate(a,o),e.rotate(l),e.fillStyle="rgba(160,166,166,0.5)",e.fillRect(-5,-1.2,10,2.4),e.restore(),s.save(),s.translate(a,o),s.rotate(l),s.fillStyle="#b0b0b0",s.fillRect(-5,-1.2,10,2.4),s.restore()}e.fillStyle="rgba(20,22,24,0.8)",s.fillStyle="#202020";for(let o of[0,512/2])e.fillRect(o-1.5,0,3,512),e.fillRect(0,o-1.5,512,3),s.fillRect(o-1.5,0,3,512),s.fillRect(0,o-1.5,512,3);for(let o=0;o<300;o++){e.strokeStyle=`rgba(220,224,226,${.05+r()*.1})`,e.lineWidth=.8;let a=r()*512,l=r()*512,c=r()*Math.PI,h=6+r()*30;e.beginPath(),e.moveTo(a,l),e.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),e.stroke()}return{map:ze(t),normalMap:Ar(n,3)}}function Hu(){let t=Sn(512,512),e=t.getContext("2d"),n=Sn(512,512),s=n.getContext("2d");Ws(e,512,512,[86,88,90],{seed:23,grain:14,dirt:.3,scale:2}),s.fillStyle="#808080",s.fillRect(0,0,512,512),e.fillStyle="rgba(40,40,42,0.7)",s.fillStyle="#b8b8b8";for(let o of[0,512/2])e.fillRect(o-3,0,6,512),s.fillRect(o-3,0,6,512);let r=be(29);for(let o=0;o<60;o++){let a=r()*512,l=r()*512,c=10+r()*50,h=e.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(150,126,96,0.18)"),h.addColorStop(1,"rgba(150,126,96,0)"),e.fillStyle=h,e.fillRect(a-c,l-c,c*2,c*2)}return{map:ze(t),normalMap:Ar(n,2)}}function ku(){let t=Sn(256,256),e=t.getContext("2d"),n=Sn(256,256),s=n.getContext("2d");Ws(e,256,256,[92,96,98],{seed:41,grain:12,dirt:.2,scale:2}),s.fillStyle="#d0d0d0",s.fillRect(0,0,256,256);let r=256/16;for(let o=0;o<16;o++)for(let a=0;a<16;a++)e.fillStyle="rgba(18,18,20,0.88)",e.fillRect(a*r+2,o*r+3,r-4,r-6),s.fillStyle="#202020",s.fillRect(a*r+2,o*r+3,r-4,r-6);return{map:ze(t),normalMap:Ar(n,3)}}function Gu(i=3){let n=Sn(512,256),s=n.getContext("2d"),r=Sn(512,256),o=r.getContext("2d");Ws(s,512,256,[230,230,230],{seed:i,grain:10,dirt:.25,scale:3});let a=be(i+5);for(let l=0;l<512;l++){let c=.5+.5*Math.sin(l/512*Math.PI*2*24);o.fillStyle=`rgb(${Vs(c*255)},${Vs(c*255)},${Vs(c*255)})`,o.fillRect(l,0,1,256),s.fillStyle=`rgba(0,0,0,${(1-c)*.18})`,s.fillRect(l,0,1,256)}for(let l=0;l<50;l++){let c=a()*512,h=a()*256,u=4+a()*22,d=s.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,"rgba(90,44,20,0.45)"),d.addColorStop(1,"rgba(90,44,20,0)"),s.fillStyle=d,s.fillRect(c-u,h-u,u*2,u*2)}return{map:ze(n),normalMap:Ar(r,5)}}function Vu(i=7){let e=Sn(256,256),n=e.getContext("2d");return Ws(n,256,256,[168,164,154],{seed:i,grain:22,dirt:.25,scale:3}),{map:ze(e)}}var ln=i=>Math.max(0,Math.min(255,Math.round(i))),ae=(i,t,e)=>new N(i,t,e),Zl=new Map,Hn=(i,t)=>(Zl.has(i)||Zl.set(i,t()),Zl.get(i)),Ce=(i,t)=>Hn("city_"+i,()=>new te(t));function ii(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function $o(i,t=3,e=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=ii(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=(h,u)=>(e?(h=(h+n)%n,u=(u+s)%s):(h=Math.max(0,Math.min(n-1,h)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+h)*4]/255);for(let h=0;h<s;h++)for(let u=0;u<n;u++){let d=(c(u+1,h)-c(u-1,h))*t,f=(c(u,h+1)-c(u,h-1))*t,p=Math.hypot(d,f,1),x=(h*n+u)*4;l.data[x]=(-d/p*.5+.5)*255,l.data[x+1]=(f/p*.5+.5)*255,l.data[x+2]=(1/p*.5+.5)*255,l.data[x+3]=255}return a.putImageData(l,0,0),ze(o,{srgb:!1})}function ji(i,t,e,n,{seed:s=1,grain:r=10,dirt:o=.2,scale:a=3,octaves:l=4}={}){let c=be(s),h=i.createImageData(t,e);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let p=1+Si(d/t,u/e,a,l,s)*o+(c()-.5)*r/255,x=(u*t+d)*4;h.data[x]=ln(n[0]*p),h.data[x+1]=ln(n[1]*p),h.data[x+2]=ln(n[2]*p),h.data[x+3]=255}i.putImageData(h,0,0)}var Zo=(i,t=1)=>`rgba(${i[0]},${i[1]},${i[2]},${t})`,Jl={ochre:{wall:[212,168,98],trim:[238,228,204],plinth:[150,128,104]},cream:{wall:[226,212,178],trim:[246,240,226],plinth:[148,136,118]},green:{wall:[164,184,150],trim:[236,236,222],plinth:[128,130,116]},pink:{wall:[222,178,166],trim:[244,236,226],plinth:[150,128,120]},bank:{wall:[206,190,156],trim:[222,210,182],plinth:[138,128,112]},police:{wall:[150,70,52],trim:[232,226,212],plinth:[118,108,100]}},Kl=i=>typeof i=="string"&&/^(ochre|cream|green|pink|bank|police)_[gut]$/.test(i),Zu=i=>{let[t,e]=i.split("_");return{base:t,role:e,colors:Jl[t]}};function mx(i,t){let{base:e,role:n,colors:s}=Zu(i),r=512,o=936,a=o/2.28,l=x=>o-x*a,c=ii(r,o),h=c.getContext("2d"),u=ii(r,o),d=u.getContext("2d");ji(h,r,o,s.wall,{seed:41+t*5+e.length*3,grain:e==="bank"?14:8,dirt:.08,scale:3}),d.fillStyle="#808080",d.fillRect(0,0,r,o);let f=be(61+t*11+e.length);if(e==="police"&&n!=="g"){let x=.075*a,m=.26*a;for(let g=0;g*x<o;g++){let y=o-(g+1)*x,_=g%2?m/2:0;for(let b=-_;b<r;b+=m){let L=.86+f()*.26;h.fillStyle=Zo(s.wall.map(C=>ln(C*L))),h.fillRect(b+2,y+2,m-4,x-4)}h.fillStyle="rgba(206,196,182,0.9)",h.fillRect(0,y,r,2.5),d.fillStyle="#505050",d.fillRect(0,y,r,3);for(let b=-_;b<r;b+=m)h.fillRect(b,y,2.5,x),d.fillRect(b,y,3,x)}}if(n==="g"||e==="bank"){let m=e==="police"?[212,204,188]:null;m&&ji(h,r,o,m,{seed:71+t,grain:10,dirt:.08,scale:3});for(let g=1;g*.32<2.4;g++){let y=l(g*.32);if(h.fillStyle="rgba(60,50,40,0.55)",h.fillRect(0,y-2,r,5),h.fillStyle="rgba(255,250,240,0.35)",h.fillRect(0,y+3,r,2),d.fillStyle="#202020",d.fillRect(0,y-3,r,7),e==="bank"){let _=.62*a,b=g%2?_/2:0;for(let L=b;L<r;L+=_)h.fillStyle="rgba(60,50,40,0.45)",h.fillRect(L-1.5,y,3,.32*a),d.fillStyle="#303030",d.fillRect(L-2,y,4,.32*a)}}}for(let x=0;x<8;x++){let m=f()*r,g=60+f()*240,y=h.createLinearGradient(0,0,0,g);y.addColorStop(0,"rgba(70,60,50,0.12)"),y.addColorStop(1,"rgba(70,60,50,0)"),h.fillStyle=y,h.fillRect(m,0,2+f()*4,g)}if(n==="g"){let x=h.createLinearGradient(0,l(.9),0,o);x.addColorStop(0,"rgba(80,70,60,0)"),x.addColorStop(1,"rgba(80,70,60,0.35)"),h.fillStyle=x,h.fillRect(0,l(.9),r,.9*a)}let p=ze(c);return p.wrapS=p.wrapT=ke,{map:p,normalMap:$o(u,4,!1)}}function Wu(i,t="plaster"){let s=410.5263157894737,r=ii(512,936),o=r.getContext("2d"),a=ii(512,936),l=a.getContext("2d");if(l.fillStyle="#808080",l.fillRect(0,0,512,936),t==="vault"){ji(o,512,936,[128,134,138],{seed:91+i,grain:12,dirt:.12,scale:2}),o.fillStyle="rgba(30,32,34,0.8)",l.fillStyle="#202020";for(let h of[0,936/2])o.fillRect(0,h-2,512,4),l.fillRect(0,h-2,512,4);for(let h of[0,512])o.fillRect(h-2,0,4,936),l.fillRect(h-2,0,4,936);for(let h of[24,936/2-24,936/2+24,912])for(let u=24;u<512;u+=58)o.fillStyle="rgba(70,74,76,0.9)",o.beginPath(),o.arc(u,h,4,0,Math.PI*2),o.fill(),l.fillStyle="#d0d0d0",l.beginPath(),l.arc(u,h,4,0,Math.PI*2),l.fill()}else ji(o,512,936,[[226,218,198],[214,210,192],[222,206,186]][i%3],{seed:81+i,grain:6,dirt:.05,scale:2}),o.fillStyle="rgb(104,72,48)",o.fillRect(0,936-.12*s,512,.12*s),l.fillStyle="#b0b0b0",l.fillRect(0,936-.12*s,512,.12*s),o.fillStyle="rgba(160,140,110,0.6)",o.fillRect(0,936-.95*s,512,6),l.fillStyle="#a0a0a0",l.fillRect(0,936-.95*s,512,6);let c=ze(r);return c.wrapS=c.wrapT=ke,{map:c,normalMap:$o(a,3,!1)}}var lt={facade:(i,t)=>Hn(`facade_${i}_${t}`,()=>{let e=mx(i,t);return new te({map:e.map,normalMap:e.normalMap,roughness:.85,metalness:0})}),plaster:i=>Hn("plaster"+i,()=>{let t=Wu(i);return new te({map:t.map,normalMap:t.normalMap,roughness:.9})}),vault:()=>Hn("vaultWall",()=>{let i=Wu(0,"vault");return new te({map:i.map,normalMap:i.normalMap,roughness:.45,metalness:.7})}),trim:i=>Ce("trim_"+i,{color:new Vt().setRGB(...Jl[i].trim.map(t=>(t/255)**2.2)),roughness:.75}),plinth:i=>Ce("plinth_"+i,{color:new Vt().setRGB(...Jl[i].plinth.map(t=>(t/255)**2.2)),roughness:.9}),glass:()=>Hn("city_glass",()=>new En({color:1713712,roughness:.06,metalness:.1,clearcoat:1,envMapIntensity:1.6})),frame:()=>Ce("frame",{color:15789282,roughness:.6}),wood:()=>Ce("wood",{color:5913124,roughness:.65}),darkWood:()=>Ce("darkWood",{color:3810840,roughness:.6}),lightWood:()=>Ce("lightWood",{color:11041358,roughness:.7}),greenDoor:()=>Ce("greenDoor",{color:2375726,roughness:.55}),iron:()=>Ce("iron",{color:1842462,roughness:.5,metalness:.6}),fenceGreen:()=>Ce("fenceGreen",{color:3033652,roughness:.5,metalness:.4}),brass:()=>Ce("brass",{color:11569722,roughness:.35,metalness:.9}),steel:()=>Ce("steel",{color:10133670,roughness:.3,metalness:.85}),stone:()=>Ce("stone",{color:13156528,roughness:.85}),granite:()=>Ce("granite",{color:9078402,roughness:.8}),ceiling:()=>Ce("ceiling",{color:15131352,roughness:.95}),slabEdge:()=>Ce("slabEdge",{color:12103840,roughness:.9}),lantern:()=>Ce("lantern",{color:16773320,emissive:16767120,emissiveIntensity:1.6}),fabric:i=>Ce("fabric"+i,{color:i,roughness:.95}),paint:i=>Ce("paint"+i,{color:i,roughness:.6}),water:()=>Hn("city_water",()=>new En({color:3828354,roughness:.05,metalness:.1,clearcoat:1,envMapIntensity:1.4,transparent:!0,opacity:.88})),spray:()=>Hn("city_spray",()=>new te({color:15267071,roughness:.2,transparent:!0,opacity:.45,depthWrite:!1})),leaves:i=>Hn("leaves"+i,()=>new te({color:16777215,vertexColors:!0,roughness:.85})),sand:()=>Ce("sandFill",{color:14073994,roughness:1})};function gx(i){let e=ii(512,512),n=e.getContext("2d"),s=ii(512,512),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);let o=be(i.length*17+3);if(i==="parquet"){ji(n,512,512,[150,102,62],{seed:7,grain:6,dirt:.05});let a=512/2.5,l=a/5;for(let c=-12;c<30;c++)for(let h=-2;h<14;h++)for(let u of[0,1]){let d=.8+o()*.35;n.save(),n.translate(c*l*2+h*0+u*l,h*a-c*l*0),n.rotate(u?Math.PI/4:-Math.PI/4),n.fillStyle=Zo([ln(158*d),ln(106*d),ln(64*d)]),n.fillRect(0,0,a*.7,l*.95),n.restore()}n.strokeStyle="rgba(60,36,20,0.35)",n.lineWidth=1;for(let c=0;c<512;c+=l*1.41)n.beginPath(),n.moveTo(0,c),n.lineTo(512,c+512),n.stroke()}else if(i==="marble"){for(let a=0;a<2;a++)for(let l=0;l<2;l++){let c=(l+a)%2===0;n.fillStyle=c?"rgb(232,228,220)":"rgb(150,148,146)",n.fillRect(l*512/2,a*512/2,512/2,512/2)}for(let a=0;a<40;a++){n.strokeStyle=`rgba(110,106,100,${.1+o()*.2})`,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*512,c=o()*512;n.moveTo(l,c);for(let h=0;h<6;h++)l+=(o()-.3)*60,c+=(o()-.5)*50,n.lineTo(l,c);n.stroke()}n.fillStyle="rgba(80,76,70,0.7)",r.fillStyle="#404040";for(let a of[0,512/2])n.fillRect(a-1,0,2,512),n.fillRect(0,a-1,512,2),r.fillRect(a-1,0,2,512),r.fillRect(0,a-1,512,2)}else if(i==="tiles"){ji(n,512,512,[196,196,186],{seed:13,grain:8,dirt:.05});let a=4;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=.92+o()*.12;n.fillStyle=(c+l)%2?`rgba(${ln(110*h)},${ln(116*h)},${ln(110*h)},1)`:`rgba(${ln(206*h)},${ln(204*h)},${ln(192*h)},1)`,n.fillRect(c*512/a+1,l*512/a+1,512/a-2,512/a-2)}r.fillStyle="#505050";for(let l=0;l<=512;l+=512/a)r.fillRect(l-1,0,2,512),r.fillRect(0,l-1,512,2)}else{ji(n,512,512,[118,124,128],{seed:19,grain:10,dirt:.12,scale:2});for(let a=8;a<512;a+=16)for(let l=8+a/16%2*8;l<512;l+=16)n.save(),n.translate(l,a),n.rotate((l+a)/16%2?.8:-.8),n.fillStyle="rgba(170,176,178,0.5)",n.fillRect(-5,-1.2,10,2.4),n.restore(),r.save(),r.translate(l,a),r.rotate((l+a)/16%2?.8:-.8),r.fillStyle="#b0b0b0",r.fillRect(-5,-1.2,10,2.4),r.restore()}return{map:ze(e),normalMap:$o(s,2)}}function $u(i){return Hn("floor_"+i,()=>{let t=gx(i);return new te({map:t.map,normalMap:t.normalMap,roughness:i==="marble"?.25:i==="steel"?.45:.6,metalness:i==="steel"?.6:0})})}function Tt(i,t,e,n,s,r,o){let a=new Mt(new _e(i,t,e),n);return a.position.set(s,r,o),a}function Tn(i,t,e,n,s,r,o,a=16){let l=new Mt(new Ge(i,t,e,a),n);return l.position.set(s,r,o),l}function fn(i,t,e,n,s,r=32){let o=new Mt(new Yi(i.map(([a,l])=>new mt(a,l)),r),t);return o.position.set(e,n,s),o}function Rr(i,t,e,n){let s=new Ve;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,t),s.closePath();let r=new tn(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new Mt(r,n)}var $l=[[0,0],[.06,0],[.06,.06],[.035,.1],[.05,.28],[.07,.42],[.04,.6],[.06,.66],[.06,.7],[0,.7]];function Ju(i,t,e,n,s,r,o){let{wallBox:a,isIndoor:l,THICK:c,PANEL_H:h}=o,u=new Ft,d=s.type,f=s.style,p=r?.8:h,x=c/2,m=(t*73856093^e*19349663^n*83492791)>>>0,g=l(n,t,e),y=i==="W"?l(n,t-1,e):l(n,t,e-1),_=Kl(f)?Zu(f):null,b=$=>f==="vault"?lt.vault():!_||$?lt.plaster(m%3):lt.facade(f,m%3),L=_?lt.trim(_.base):lt.slabEdge(),C=b(g),P=b(y),v=i==="W"?[C,P,L,L,L,L]:[L,L,L,L,C,P],z=_?g?-1:1:0,M=n*se,S=($,I,B,k,q,D,E)=>{let H=D-q,W=z*(c/2+(q+D)/2),et=i==="W"?new _e(H,k-B,I-$):new _e(I-$,k-B,H),ft=new Mt(et,E);return i==="W"?ft.position.set(t*U+W,M+(B+k)/2,e*U+($+I)/2):ft.position.set(t*U+($+I)/2,M+(B+k)/2,e*U+W),u.add(ft),ft},rt=($,I,B,k)=>{let q=new tn($,{depth:B-I,bevelEnabled:!1,curveSegments:16});(i==="W"?z<0:z>0)?q.translate(0,0,c/2+I):q.translate(0,0,-(c/2+B)),i==="W"&&q.rotateY(-Math.PI/2);let E=new Mt(q,k);return E.position.set(t*U,M,e*U),u.add(E),E};if(d==="rail"){let $=f==="fence",I=$?lt.fenceGreen():lt.iron(),B=$?1.1:.95,k=(q,D,E,H,W,et=I)=>u.add(a(i,t,e,n,q,D,E,H,Array(6).fill(et),W));for(let q of[0,U])k(q-.03,q+.03,0,B+.04,.06);k(0,U,B-.04,B,.05,$?I:lt.darkWood()),k(0,U,.08,.12,.035),$&&k(0,U,B-.3,B-.27,.03);for(let q=.1;q<U-.05;q+=.12)k(q-.009,q+.009,.1,B-($?-.06:.02),.018),$&&k(q-.02,q+.02,B+.02,B+.07,.025);return u}if(d==="wall")u.add(a(i,t,e,n,-x,U+x,0,p,v));else if(d==="door"){let I=Math.min(2.1,p),B=(U-.92)/2,k=(U+.92)/2;u.add(a(i,t,e,n,-x,B,0,p,v)),u.add(a(i,t,e,n,k,U+x,0,p,v)),p>I+.01&&u.add(a(i,t,e,n,B,k,I,p,v));let q=f==="vault"?lt.steel():lt.wood(),D=Array(6).fill(q),E=f==="vault"?.12:.06;if(u.add(a(i,t,e,n,B-E,B,0,I,D,c+.05)),u.add(a(i,t,e,n,k,k+E,0,I,D,c+.05)),p>I+.01&&u.add(a(i,t,e,n,B-E,k+E,I,I+E,D,c+.05)),u.add(a(i,t,e,n,B,k,0,.03,Array(6).fill(lt.stone()),c+.1)),_&&!r){let H=lt.trim(_.base);if(S(B-.16,B-.04,0,I+.1,0,.05,H),S(k+.04,k+.16,0,I+.1,0,.05,H),S(B-.16,k+.16,I+.04,I+.16,0,.05,H),I+.42<p){S(B-.26,k+.26,I+.26,I+.34,0,.22,H);for(let W of[B-.18,k+.18])S(W-.05,W+.05,I+.12,I+.26,0,.16,H)}}}else{let $=_&&_.base==="bank"&&_.role==="g",I=.78,B=$?.62:_&&_.role==="g"?.75:.7,k=$?2.08:2,q=(U-I)/2,D=(U+I)/2,E=$?k-I/2:k;if(r)u.add(a(i,t,e,n,-x,U+x,0,p,v));else{if(u.add(a(i,t,e,n,-x,q,0,p,v)),u.add(a(i,t,e,n,D,U+x,0,p,v)),u.add(a(i,t,e,n,q,D,0,B,v)),u.add(a(i,t,e,n,q,D,k,p,v)),$){let et=new Ve;et.moveTo(q,E),et.lineTo(q,k),et.lineTo(D,k),et.lineTo(D,E),et.absarc(U/2,E,I/2,0,Math.PI,!1);let ft=new tn(et,{depth:c,bevelEnabled:!1,curveSegments:16});ft.translate(0,0,-c/2),i==="W"&&ft.rotateY(-Math.PI/2);let G=new Mt(ft,z?lt.facade(f,m%3):v[i==="W"?0:4]);G.position.set(t*U,M,e*U),u.add(G)}let H=Array(6).fill(lt.glass()),W=Array(6).fill(lt.frame());if(u.add(a(i,t,e,n,q+.03,D-.03,B,$?E+I/2-.02:k,H,.03)),u.add(a(i,t,e,n,q,q+.05,B,E,W,.08)),u.add(a(i,t,e,n,D-.05,D,B,E,W,.08)),u.add(a(i,t,e,n,q,D,B,B+.05,W,.08)),$||u.add(a(i,t,e,n,q,D,k-.05,k,W,.08)),u.add(a(i,t,e,n,U/2-.022,U/2+.022,B,$?E+I/2-.04:k,W,.06)),u.add(a(i,t,e,n,q,D,B+(E-B)*.68-.02,B+(E-B)*.68+.02,W,.06)),_){let et=lt.trim(_.base);if(S(q-.1,D+.1,B-.07,B,0,.1,et),$||(S(q-.1,q,B,k+.08,0,.04,et),S(D,D+.1,B,k+.08,0,.04,et),S(q-.1,D+.1,k,k+.08,0,.04,et)),_.role==="u"&&["bank","pink","cream"].includes(_.base)||_.role==="t"&&_.base==="bank"){let G=new Ve;G.moveTo(q-.16,k+.1),G.lineTo(D+.16,k+.1),G.lineTo(U/2,k+.27),G.closePath(),rt(G,0,.1,et)}else _.role==="u"||_.role==="t"?S(q-.15,D+.15,k+.1,k+.17,0,.12,et):_.role==="g"&&!$&&S(U/2-.07,U/2+.07,k-.02,k+.16,0,.06,et);if($){let G=new Ve;G.absarc(U/2,E,I/2+.1,0,Math.PI,!1),G.lineTo(q,E),G.absarc(U/2,E,I/2,Math.PI,0,!0),G.closePath(),rt(G,0,.05,et),S(U/2-.07,U/2+.07,k-.06,k+.14,0,.08,et),S(q-.1,q,B,E,0,.05,et),S(D,D+.1,B,E,0,.05,et);let ht=lt.iron();for(let _t=1;_t<6;_t++){let O=q+_t*I/6,J=Math.sqrt(Math.max(0,(I/2)**2-(O-U/2)**2));S(O-.01,O+.01,B,E+J-.03,-.06,-.04,ht)}for(let _t of[B+.35,B+.8])S(q+.02,D-.02,_t,_t+.02,-.065,-.035,ht)}if(_.role!=="g"&&_.base==="bank"){let G=lt.iron();S(q-.08,D+.08,B-.12,B-.07,0,.32,lt.stone()),S(q-.06,D+.06,B+.42,B+.45,.28,.31,G);for(let ht=0;ht<=8;ht++){let _t=q-.04+ht*(I+.08)/8;S(_t-.008,_t+.008,B-.07,B+.43,.285,.305,G)}}}}}if(_&&!r){let $=lt.trim(_.base);if(_.role==="g"&&S(-x,U+x,0,.5,0,.05,lt.plinth(_.base)),_.role==="t"){S(-x-.02,U+x+.02,h-.16,h+.02,0,.08,$),S(-x-.06,U+x+.06,h+.02,h+.12,0,.18,$),S(-x-.1,U+x+.1,h+.12,h+.24,0,.32,$);for(let I=.16;I<U;I+=.31)S(I-.04,I+.04,h-.02,h+.12,.08,.26,$)}else S(-x-.02,U+x+.02,h-.08,h+.24,0,.06,$),S(-x-.03,U+x+.03,h+.18,h+.24,0,.1,$)}else _&&r&&_.role==="g"&&S(-x,U+x,0,.5,0,.05,lt.plinth(_.base));return u}function Ku(i,t,e,n,s,r,o,a,l){let{wallBox:c}=l,h=new Ft,u=o-.01;if(a==="vault"){let m=Array(6).fill(lt.steel());h.add(c(i,t,e,n,s-.02,r+.02,.01,u,m,.2));let g=(s+r)/2;for(let y of[.26])h.add(c(i,t,e,n,g-.3,g+.3,u*.45,u*.45+.04,Array(6).fill(lt.brass()),y));return h.add(c(i,t,e,n,g-.02,g+.02,u*.45-.28,u*.45+.32,Array(6).fill(lt.brass()),.26)),h.add(c(i,t,e,n,s+.05,s+.1,.2,u-.2,Array(6).fill(lt.iron()),.24)),h}let d=a==="outer",f=Array(6).fill(d?lt.greenDoor():lt.wood()),p=Array(6).fill(lt.darkWood()),x=(s+r)/2;h.add(c(i,t,e,n,s-.02,r+.02,.01,u,f,.06)),h.add(c(i,t,e,n,x-.01,x+.01,.01,u,p,.075));for(let[m,g]of[[s+.06,x-.06],[x+.06,r-.06]])u>1&&h.add(c(i,t,e,n,m,g,.15,Math.min(.85,u-.1),p,.072)),u>1.9&&(d?h.add(c(i,t,e,n,m+.02,g-.02,1.05,u-.15,Array(6).fill(lt.glass()),.074)):h.add(c(i,t,e,n,m,g,1,u-.15,p,.072)));for(let m of[-1,1])h.add(c(i,t,e,n,x+m*.06-.015,x+m*.06+.015,Math.min(1,u-.1),Math.min(1.12,u-.05),Array(6).fill(lt.brass()),.09));return h}function xx(i){let n=ii(512,512),s=n.getContext("2d"),r=ii(512,512),o=r.getContext("2d"),a=be(i==="slate"?501:503),l=512/(i==="slate"?10:8),c=512/(i==="slate"?14:10),h=i==="slate"?[92,98,106]:[176,82,50];s.fillStyle=Zo(h),s.fillRect(0,0,512,512);for(let f=0;f<512/c;f++){let p=f%2?l/2:0;for(let x=-p;x<512;x+=l){let m=.8+a()*.32,g=f*c,y=o.createLinearGradient(0,g,0,g+c);y.addColorStop(0,"#404040"),y.addColorStop(1,"#c8c8c8"),o.fillStyle=y,o.fillRect(x+1,g,l-2,c),s.fillStyle=Zo(h.map(_=>ln(_*m))),i==="slate"?s.fillRect(x+1,g+1,l-2,c-1):(s.beginPath(),s.moveTo(x+1,g),s.lineTo(x+l-1,g),s.lineTo(x+l-1,g+c*.75),s.quadraticCurveTo(x+l/2,g+c*1.05,x+1,g+c*.75),s.fill()),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(x,g+c-2,l,2)}}for(let f=0;f<40;f++){let p=a()*512,x=a()*512,m=10+a()*40,g=s.createRadialGradient(p,x,0,p,x,m);g.addColorStop(0,i==="slate"?"rgba(140,150,140,0.15)":"rgba(70,60,40,0.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(p-m,x-m,m*2,m*2)}let u=ze(n),d=$o(r,3);for(let f of[u,d])f.wrapS=f.wrapT=Gi;return{map:u,normalMap:d}}var Xu=i=>Hn("roofMat_"+i,()=>{let t=xx(i);return new te({map:t.map,normalMap:t.normalMap,roughness:i==="slate"?.55:.8,metalness:i==="slate"?.15:0,side:Fe})});function An(i,t,e){let n=new xe,s=i[0],r=t.clone().normalize(),o=new N().subVectors(i[1],i[0]).cross(new N().subVectors(i[2],i[0])).normalize(),a=new N().crossVectors(o,r).normalize(),l=[],c=[];for(let u of i){l.push(u.x,u.y,u.z);let d=new N().subVectors(u,s);c.push(d.dot(r)/(2*U),d.dot(a)/(2*U))}let h=[];for(let u=1;u<i.length-1;u++)h.push(0,u,u+1);return n.setAttribute("position",new Jt(l,3)),n.setAttribute("uv",new Jt(c,2)),n.setIndex(h),n.computeVertexNormals(),new Mt(n,e)}function Yu(i,t,e,n,s,r,o,a){let l=n-t,c=s-e,h=Math.min(l,c)/2,u=h*Math.tan(o),d=l>=c,f=d?[ae(t+h,r+u,(e+s)/2),ae(n-h,r+u,(e+s)/2)]:[ae((t+n)/2,r+u,e+h),ae((t+n)/2,r+u,s-h)],p={nw:ae(t,r,e),ne:ae(n,r,e),se:ae(n,r,s),sw:ae(t,r,s)};d?(i.add(An([p.sw,p.se,f[1],f[0]],ae(1,0,0),a)),i.add(An([p.ne,p.nw,f[0],f[1]],ae(-1,0,0),a)),i.add(An([p.se,p.ne,f[1]],ae(0,0,-1),a)),i.add(An([p.nw,p.sw,f[0]],ae(0,0,1),a))):(i.add(An([p.se,p.ne,f[0],f[1]],ae(0,0,-1),a)),i.add(An([p.nw,p.sw,f[1],f[0]],ae(0,0,1),a)),i.add(An([p.sw,p.se,f[1]],ae(1,0,0),a)),i.add(An([p.ne,p.nw,f[0]],ae(-1,0,0),a)));let x=a,m=(g,y)=>{let _=new N().subVectors(y,g),b=new Mt(new Ge(.07,.07,_.length(),8),x);b.position.copy(g).addScaledVector(_,.5),b.quaternion.setFromUnitVectors(ae(0,1,0),_.normalize()),i.add(b)};return m(f[0],f[1]),m(p.nw,f[0]),m(p.sw,f[0]),m(p.ne,f[1]),m(p.se,f[1]),{height:u,along:d,half:h}}function qu(i,t,e,n,s,r,o,a=1){let l=new Ft,c=1*a,h=1.15*a,u=1.6*a;l.add(Tt(c,h,u,r,0,h/2,-u/2)),l.add(Tt(c*.56,h*.6,.04,lt.glass(),0,h*.45,.01)),l.add(Tt(c*.66,.06,.06,lt.frame(),0,h*.14,.02)),l.add(Tt(.04,h*.6,.05,lt.frame(),0,h*.45,.02));let d=Rr(c+.24,.55*a,u+.15,o);d.position.set(0,h,-u/2+.07),l.add(d);let f=Rr(c+.1,.5*a,.06,r);f.position.set(0,h+.01,.03),l.add(f),l.position.set(t,n,e),l.rotation.y=Math.atan2(s.x,s.z),i.add(l)}var ni=i=>(i+.5)*U;function _x(i){let t=i.cols*U,e=i.rows*U;if(i.type==="mansard"){let c={x0:-.2,z0:-.2,x1:t+.2,z1:e+.2},h=(47-i.col)*U+U/2,u=[],d=.75*.36;for(let p=1;p<i.cols-1;p+=2){let x=ni(p);Math.abs(x-h)<5.2||u.push({x,z:c.z1-d,facing:"S"},{x,z:c.z0+d,facing:"N"})}for(let p=1;p<i.rows-1;p+=2)u.push({x:c.x1-d,z:ni(p),facing:"E"},{x:c.x0+d,z:ni(p),facing:"W"});let f=[[.22,.3],[.78,.3],[.5,.62]].map(([p,x])=>({x:ni(Math.floor(i.cols*p)),z:ni(Math.floor(i.rows*x))}));return{...c,width:t,depth:e,dormers:u,chimneys:f,pediment:{x0:h-5.4,x1:h+5.4,z0:e-1}}}let n=.42,s=1.5,r={x0:-n,z0:-n,x1:t+n,z1:e+n},o=r.x1-r.x0>=r.z1-r.z0,a=[];if(o)for(let c=0;c<i.cols;c++){let h=ni(c);c%3!==1||h<r.x0+s+1||h>r.x1-s-.9||a.push({x:h,z:r.z1-s,facing:"S"},{x:h,z:r.z0+s,facing:"N"})}else for(let c=0;c<i.rows;c++){let h=ni(c);c%3!==1||h<r.z0+s+1||h>r.z1-s-.9||a.push({x:r.x1-s,z:h,facing:"E"},{x:r.x0+s,z:h,facing:"W"})}let l=[0,1,2].map(c=>({x:ni(Math.floor(i.cols*(.25+c*.25))),z:ni(Math.floor(i.rows*(.42+c%2*.16)))}));return{...r,width:t,depth:e,along:o,run:s,dormers:a,chimneys:l,pediment:null}}function yx(i){let t=_x(i),e={S:ae(0,0,1),N:ae(0,0,-1),E:ae(1,0,0),W:ae(-1,0,0)},n=new Ft,s=i.cols*U,r=i.rows*U,o=.42,a=be(i.col*31+i.row*17),l=lt.trim(i.facade||"cream");if(i.type==="mansard"){let c=Xu("slate"),h=.75,u=2.3,d=.24,f={x0:-.2,z0:-.2,x1:s+.2,z1:r+.2},p={x0:f.x0+h,z0:f.z0+h,x1:f.x1-h,z1:f.z1-h},x=(z,M,S)=>ae(z,M,S),m=d+u;n.add(An([x(f.x0,d,f.z1),x(f.x1,d,f.z1),x(p.x1,m,p.z1),x(p.x0,m,p.z1)],ae(1,0,0),c)),n.add(An([x(f.x1,d,f.z0),x(f.x0,d,f.z0),x(p.x0,m,p.z0),x(p.x1,m,p.z0)],ae(-1,0,0),c)),n.add(An([x(f.x1,d,f.z1),x(f.x1,d,f.z0),x(p.x1,m,p.z0),x(p.x1,m,p.z1)],ae(0,0,-1),c)),n.add(An([x(f.x0,d,f.z0),x(f.x0,d,f.z1),x(p.x0,m,p.z1),x(p.x0,m,p.z0)],ae(0,0,1),c)),Yu(n,p.x0,p.z0,p.x1,p.z1,m,.07,c),n.add(Tt(p.x1-p.x0+.1,.1,.12,lt.steel(),(p.x0+p.x1)/2,m+.05,p.z1)),n.add(Tt(p.x1-p.x0+.1,.1,.12,lt.steel(),(p.x0+p.x1)/2,m+.05,p.z0));let g=d+.35;for(let z of t.dormers)qu(n,z.x,z.z,g,e[z.facing],l,c,.95);let y=(47-i.col)*U+U/2,_=r+.12,b=Rr(9.2,2.3,.5,l);b.position.set(y,d-.02,_-.05),n.add(b);let L=Rr(8.2,1.85,.12,lt.facade("bank_u",1));L.position.set(y,d+.16,_+.22),n.add(L);let C=Math.atan2(2.3,4.6),P=Math.hypot(4.6,2.3)+.3;for(let z of[-1,1]){let M=Tt(P,.2,.7,l,y+z*2.3,d+1.15,_+.02);M.rotation.z=-z*C,n.add(M)}n.add(Tt(9.6,.22,.75,l,y,d+.02,_+.02));let v=new Mt(new Ge(.42,.42,.12,32),lt.brass());v.rotation.x=Math.PI/2,v.scale.set(1,1,.72),v.position.set(y,d+.85,_+.32),n.add(v);for(let z of[-4.6,0,4.6])n.add(fn([[0,0],[.18,0],[.18,.12],[.1,.2],[.16,.45],[.05,.6],[0,.65]],l,y+z,z?d+.2:d+2.4,_+.05,12));for(let{x:z,z:M}of t.chimneys)n.add(Tt(.7,1.3,.5,lt.facade("bank_t",0),z,m+.6,M)),n.add(Tt(.84,.12,.64,l,z,m+1.28,M))}else{let c=Xu("tile"),h=-o,u=-o,d=s+o,f=r+o,p=.22,x=Yu(n,h,u,d,f,p,.52,c);n.add(Tt(d-h,.14,.06,lt.darkWood(),(h+d)/2,p-.04,f)),n.add(Tt(d-h,.14,.06,lt.darkWood(),(h+d)/2,p-.04,u)),n.add(Tt(.06,.14,f-u,lt.darkWood(),d,p-.04,(u+f)/2)),n.add(Tt(.06,.14,f-u,lt.darkWood(),h,p-.04,(u+f)/2)),n.add(Tt(d-h,.03,f-u,lt.darkWood(),(h+d)/2,p-.1,(u+f)/2));for(let y of[u,f]){let _=Tn(.06,.06,d-h,lt.iron(),(h+d)/2,p-.02,y,8);_.rotation.z=Math.PI/2,n.add(_)}let m=Math.tan(.52),g=t.run;for(let y of t.dormers)qu(n,y.x,y.z,p+(g-.75)*m,e[y.facing],l,c);for(let y=0;y<t.chimneys.length;y++){let{x:_,z:b}=t.chimneys[y],L=p+Math.min(Math.min(_-h,d-_),Math.min(b-u,f-b))*m,C=lt.facade("police_u",y%3);n.add(Tt(.6,x.height-(L-p)+1.1,.5,C,_,L+(x.height-(L-p)+1.1)/2-.2,b)),n.add(Tt(.72,.1,.62,lt.stone(),_,p+x.height+.95,b))}}return n}function Ql(i,t,e=2){let n=new Zi(i,e),s=n.attributes.position,r=be(t),o=[],a=r()*10;for(let l=0;l<s.count;l++){let c=ae(s.getX(l),s.getY(l),s.getZ(l)),h=1+.18*Math.sin(c.x*5+a)*Math.sin(c.y*4.3+a*.7)*Math.sin(c.z*4.7)+(r()-.5)*.12;c.multiplyScalar(h),s.setXYZ(l,c.x,c.y,c.z);let u=.75+.25*(c.y/i)+(r()-.5)*.25;o.push(u,u,u)}return n.setAttribute("color",new Jt(o,3)),n.computeVertexNormals(),n}function jl(i){return Hn("leafTint"+i,()=>new te({color:i,vertexColors:!0,roughness:.9,flatShading:!0}))}function vx(i,t,e){let n=new Ft,s=be(i.col*13+i.row*7+(i.type==="chestnut"?5:0)),r=i.type==="chestnut",o=r?2.1:2.4,a=Ce("bark",{color:4864556,roughness:.95});n.add(Tn(.11,.17,o+.6,a,t,(o+.6)/2,e,10));for(let h=0;h<3;h++){let u=s()*Math.PI*2,d=Tn(.04,.07,1.2,a,t+Math.cos(u)*.3,o+.6,e+Math.sin(u)*.3,6);d.rotation.set(Math.sin(u)*.6,0,-Math.cos(u)*.6),n.add(d)}let l=jl(r?6195776:4880954),c=r?7:6;for(let h=0;h<c;h++){let u=h/c*Math.PI*2+s(),d=h===0?0:.55+s()*.35,f=h===0?1.15:.7+s()*.35,p=new Mt(Ql(f,i.col*101+h*17+i.row),l);p.position.set(t+Math.cos(u)*d,o+1.25+(h===0?.4:(s()-.3)*.9),e+Math.sin(u)*d),n.add(p)}return n}function Mx(i,t,e){let n=new Ft,s=jl(4616250);for(let r=0;r<3;r++){let o=new Mt(Ql(.5,e*7+r,2),s);o.scale.set(i/2.4,.95,t/1.25),o.position.set(i*(.2+r*.3),.5,t/2),n.add(o)}return n}function Qi(i,t,e,n){let s=new Ft;return s.add(i),i.position.set(-e,0,-n),s.rotation.y=-(t.rotation||0)*Math.PI/2,s.position.set(e,0,n),s}function Qu(i){let t=i.cols*U,e=i.rows*U,n=t/2,s=e/2,r=new Ft,o=l=>(r.add(l),l),a=be(i.col*977+i.row*131+i.level*7);switch(i.kind){case"roof":return yx(i);case"tree":return vx(i,n,s);case"hedge":return Mx(t,e,i.col+i.row*3);case"bench":{let l=new Ft;for(let c of[.18,U-.18])l.add(Tt(.05,.45,.42,lt.iron(),c,.22,.45)),l.add(Tt(.05,.5,.05,lt.iron(),c,.7,.26));for(let c=0;c<4;c++)l.add(Tt(U-.12,.035,.08,lt.lightWood(),U/2,.46,.32+c*.1));for(let c=0;c<3;c++)l.add(Tt(U-.12,.08,.03,lt.lightWood(),U/2,.62+c*.12,.25));return Qi(l,i,n,s)}case"bin":return o(fn([[0,0],[.16,0],[.18,.05],[.2,.6],[.24,.66],[.24,.7],[0,.7]],lt.iron(),n,0,s,16)),r;case"streetLamp":return o(fn([[0,0],[.22,0],[.22,.12],[.12,.3],[.09,.9],[.06,1],[.05,3.4],[.08,3.5],[0,3.5]],lt.iron(),n,0,s,12)),o(fn([[0,0],[.1,0],[.18,.45],[.2,.5],[0,.5]],lt.lantern(),n,3.5,s,6)),o(fn([[0,0],[.24,0],[.12,.16],[.03,.26],[0,.32]],lt.iron(),n,4,s,6)),r;case"column":return o(Tt(.66,.16,.66,lt.stone(),n,.08,s+.05)),o(fn([[0,0],[.3,0],[.3,.06],[.26,.12],[0,.12]],lt.stone(),n,.16,s+.05,24)),o(Tn(.21,.24,se-.62,lt.stone(),n,.28+(se-.62)/2,s+.05,20)),o(fn([[0,0],[.22,0],[.3,.12],[.3,.16],[0,.16]],lt.stone(),n,se-.34,s+.05,24)),o(Tt(.7,.18,.7,lt.stone(),n,se-.09,s+.05)),r;case"balcony":{o(Tt(t,.18,1.05,lt.stone(),n,.09,1.05/2)),o(Tt(t+.1,.06,1.05+.06,lt.stone(),n,.2,1.05/2+.03));for(let c=.15;c<t;c+=.22)o(fn($l,lt.stone(),c,.23,1.05-.1,10));for(let c=.15;c<1.05-.1;c+=.22)o(fn($l,lt.stone(),.08,.23,c,10)),o(fn($l,lt.stone(),t-.08,.23,c,10));return o(Tt(t,.08,.16,lt.stone(),n,.97,1.05-.1)),o(Tt(.16,.08,1.05,lt.stone(),.08,.97,1.05/2)),o(Tt(.16,.08,1.05,lt.stone(),t-.08,.97,1.05/2)),o(Tt(3.4,.36,.06,lt.darkWood(),n,-.3,.12)),o(Tt(3.1,.2,.02,lt.brass(),n,-.3,.155)),r}case"fountain":{o(fn([[5.3-.4,0],[5.3+.05,0],[5.3+.05,.42],[5.3-.05,.55],[5.3-.35,.55],[5.3-.4,.5],[5.3-.4,0]],lt.granite(),n,0,s,72));let c=new Mt(new Mi(5.3-.38,64),lt.water());c.rotation.x=-Math.PI/2,c.position.set(n,.36,s),o(c),o(new Mt(new Mi(5.3-.38,64),lt.granite())).rotation.x=-Math.PI/2,r.children[r.children.length-1].position.set(n,.05,s),o(fn([[0,0],[.75,0],[.75,.3],[.35,.45],[.25,1.1],[.35,1.2],[1.7,1.35],[1.75,1.5],[1.6,1.55],[.3,1.45],[.18,2],[.28,2.1],[1,2.25],[1.05,2.36],[.9,2.4],[.16,2.3],[.1,2.9],[.2,3],[.06,3.3],[0,3.35]],lt.stone(),n,0,s,48));let h=new Mt(new Mi(.9,32),lt.water());h.rotation.x=-Math.PI/2,h.position.set(n,2.33,s),o(h);let u=new Mt(new Mi(1.6,32),lt.water());u.rotation.x=-Math.PI/2,u.position.set(n,1.48,s),o(u),o(new Mt(new Ge(1.62,1.95,1.1,32,1,!0),lt.spray())).position.set(n,.92,s),o(new Mt(new Ge(.95,1.6,.85,32,1,!0),lt.spray())).position.set(n,1.92,s),o(new Mt(new No(.12,1.1,12,1,!0),lt.spray())).position.set(n,3.9,s);for(let d=0;d<8;d++){let f=d/8*Math.PI*2,p=new Mt(new Ge(.03,.05,1.6,6,1,!0),lt.spray());p.position.set(n+Math.cos(f)*(5.3-1.2),.9,s+Math.sin(f)*(5.3-1.2)),p.rotation.set(Math.sin(f)*.6,0,-Math.cos(f)*.6),o(p)}return r}case"playhouse":{let l=lt.paint(14205066),c=lt.paint(11549226);o(Tt(t-.3,.1,e-.3,lt.lightWood(),n,.05,s));for(let[d,f,p,x]of[[n,.2,t-.3,.06],[.2,s,.06,e-.3],[t-.2,s,.06,e-.3]])o(Tt(p,1.3,x,l,d,.75,f));o(Tt(.8,1.3,.06,l,.55,.75,e-.2)),o(Tt(.7,1.3,.06,l,t-.5,.75,e-.2)),o(Tt(.5,.45,.07,lt.glass(),.2,.95,s)).rotation.y=Math.PI/2;let h=Tt(t*.62,.06,e-.1,c,t*.3,1.75,s);h.rotation.z=.6,o(h);let u=Tt(t*.62,.06,e-.1,c,t*.7,1.75,s);u.rotation.z=-.6,o(u);for(let d of[.2,e-.2]){let f=Rr(t-.3,.75,.06,l);f.position.set(n,1.4,d),o(f)}return r}case"slide":{let l=lt.paint(12730414),c=lt.paint(3828392);o(Tt(.9,.08,.9,lt.lightWood(),n,1.5,.55));for(let[u,d]of[[n-.4,.15],[n+.4,.15],[n-.4,.95],[n+.4,.95]])o(Tn(.04,.04,2.3,c,u,1.15,d,8));for(let u of[n-.4,n+.4])o(Tt(.05,.05,.9,c,u,2.25,.55));for(let u=0;u<5;u++)o(Tt(.6,.04,.12,lt.lightWood(),n,.3+u*.27,.05-u*0)).position.z=.08;let h=Tt(.62,.05,2.4,l,n,.82,2.05);h.rotation.x=.62,o(h);for(let u of[-1,1]){let d=Tt(.05,.16,2.4,l,n+u*.32,.9,2.05);d.rotation.x=.62,o(d)}return r}case"swing":{let l=lt.paint(3828392);for(let h of[.15,t-.15])for(let u of[-1,1]){let d=Tn(.045,.045,2.5,l,h,1.18,s+u*.45,8);d.rotation.x=u*.38,o(d)}let c=Tn(.05,.05,t-.2,l,n,2.35,s,8);c.rotation.z=Math.PI/2,o(c);for(let h of[t*.3,t*.7]){for(let u of[-.22,.22])o(Tn(.01,.01,1.75,lt.steel(),h+u,1.45,s,4));o(Tt(.5,.05,.22,lt.paint(14196768),h,.55,s))}return r}case"sandbox":{for(let[l,c,h,u]of[[n,.1,t-.2,.18],[n,e-.1,t-.2,.18],[.1,s,.18,e],[t-.1,s,.18,e]])o(Tt(h,.3,u,lt.lightWood(),l,.15,c));return o(Tt(t-.3,.12,e-.3,lt.sand(),n,.06,s)),o(Tt(.2,.18,.2,lt.paint(12730414),n-.6,.2,s+.3)),o(Tn(.12,.08,.16,lt.paint(3828392),n+.5,.2,s-.4,12)),r}case"carousel":{o(Tn(1.1,1.1,.1,lt.paint(12730414),n,.25,s,32)),o(Tn(.08,.1,.9,lt.steel(),n,.7,s,10));for(let l=0;l<4;l++){let c=l*Math.PI/2,h=Tt(1.9,.04,.04,lt.paint(14196768),n,.95,s);h.rotation.y=c,o(h),o(Tn(.03,.03,.7,lt.paint(14196768),n+Math.cos(c)*.95,.6,s+Math.sin(c)*.95,6))}return r}case"busStop":{for(let l of[.15,t-.15])o(Tt(.08,2.4,.08,lt.iron(),l,1.2,.2));return o(Tt(t,.08,1.2,lt.iron(),n,2.42,.6)),o(Tt(t-.3,1.9,.03,lt.glass(),n,1.2,.18)),o(Tt(t-.6,.06,.4,lt.lightWood(),n,.48,.42)),o(Tt(.9,.6,.06,lt.paint(2775706),t-.6,2,.2)),r}case"counter":{let l=new Ft;return l.add(Tt(U,1.05,.6,lt.darkWood(),U/2,.52,.55)),l.add(Tt(U+.02,.05,.7,lt.stone(),U/2,1.07,.55)),l.add(Tt(U,.55,.02,lt.glass(),U/2,1.4,.4)),l.add(Tt(.04,.6,.04,lt.brass(),.04,1.4,.4)),Qi(l,i,n,s)}case"deposits":{let l=new Ft;l.add(Tt(U-.02,2.1,.45,lt.steel(),U/2,1.05,.24));for(let c=0;c<9;c++)for(let h=0;h<4;h++){let u=.12+h*.3,d=.15+c*.22;l.add(Tt(.27,.19,.02,lt.paint(9081496),u+.14,d+.1,.475)),l.add(Tt(.03,.03,.02,lt.brass(),u+.14,d+.1,.49))}return Qi(l,i,n,s)}case"plant":o(fn([[0,0],[.2,0],[.26,.45],[.28,.5],[0,.5]],lt.paint(10115642),n,0,s,16));for(let l=0;l<4;l++){let c=new Mt(Ql(.32,i.col*3+l),jl(4090416));c.position.set(n+(a()-.5)*.3,.9+l*.22,s+(a()-.5)*.3),o(c)}return r;case"bed":{let l=new Ft;return l.add(Tt(t-.2,.35,e-.25,lt.wood(),n,.18,s+.05)),l.add(Tt(t-.3,.18,e-.35,lt.fabric(15262420),n,.44,s+.05)),l.add(Tt(t*.6,.06,e-.3,lt.fabric(6961738),n+t*.17,.55,s+.05)),l.add(Tt(.45,.14,e-.5,lt.fabric(16052456),.45,.6,s+.05)),l.add(Tt(.08,1,e-.25,lt.darkWood(),.12,.5,s+.05)),Qi(l,i,n,s)}case"wardrobe":{let l=new Ft;l.add(Tt(U-.15,2,.6,lt.wood(),U/2,1,.36)),l.add(Tt(U-.05,.1,.68,lt.darkWood(),U/2,2.05,.36)),l.add(Tt(.02,1.8,.02,lt.darkWood(),U/2,1,.67));for(let c of[-1,1])l.add(Tt(.03,.12,.03,lt.brass(),U/2+c*.06,1.05,.68));return Qi(l,i,n,s)}case"bookcase":{let l=new Ft;l.add(Tt(U-.15,2,.4,lt.darkWood(),U/2,1,.26));let c=[8006178,3099238,5199416,11048042,3817026,9067050];for(let h=0;h<5;h++){let u=.14;for(;u<U-.2;){let d=.04+a()*.05,f=.22+a()*.1;l.add(Tt(d-.005,f,.25,lt.fabric(c[Math.floor(a()*c.length)]),u+d/2,.12+h*.38+f/2,.36)),u+=d}}return Qi(l,i,n,s)}case"table":{o(Tt(t-.3,.05,e-.3,lt.wood(),n,.76,s));for(let[l,c]of[[.25,.25],[t-.25,.25],[.25,e-.25],[t-.25,e-.25]])o(Tt(.06,.74,.06,lt.darkWood(),l,.37,c));for(let l=0;l<Math.max(2,i.cols);l++){let c=(l+.5)*t/Math.max(2,i.cols);for(let h of[.05,e-.05])o(Tt(.4,.05,.4,lt.darkWood(),c,.45,h)),o(Tt(.4,.5,.04,lt.darkWood(),c,.72,h<s?h-.18:h+.18))}return r}case"sofa":{let l=new Ft,c=lt.fabric([6957610,3099194,4868714][(i.col+i.row)%3]);l.add(Tt(t-.2,.42,.8,c,n,.21,.6)),l.add(Tt(t-.2,.5,.2,c,n,.65,.3));for(let h of[.15,t-.15])l.add(Tt(.18,.6,.8,c,h,.3,.6));return Qi(l,i,n,s)}default:return null}}var Ko=we==="city",Xn=Tu(wu(),Su),N_=1280/18.5;var si=U*ue,ts=new N(si/2,0,si/2),ec=.22,pn=.18,Jo=se-ec,Rn={ground:0,floor:1,wallW:2,wallN:3,object:4,doorW:5,doorN:6},Ti=(i,t,e)=>new N(i,t,e),ie=new hr({antialias:!0,preserveDrawingBuffer:!0,alpha:!!(typeof globalThis<"u"&&globalThis.ALIENS_RENDERER_ALPHA)});ie.setPixelRatio(1);ie.shadowMap.enabled=!0;ie.shadowMap.type=Fl;ie.toneMapping=Ol;ie.outputColorSpace=Ze;document.body.appendChild(ie.domElement);var gn=new vi,Xs=we==="base";gn.background=new Vt(Xs?789258:1709584);gn.environment=new Ls(ie).fromScene(new Go,.04).texture;gn.add(Xs?new yr(15002868,4999234,1.25):new yr(13163775,5917236,.75));var nn=new Fo(Xs?16774890:16774368,Xs?2.6:4.2);{let i=Iu(-11,7.5),t=Xs?.45:1.6;nn.position.set(ts.x+i.x*t,Xs?24:17.6,ts.z+i.y*t)}nn.target.position.copy(ts);nn.castShadow=!0;nn.shadow.mapSize.set(4096,4096);Object.assign(nn.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90});nn.shadow.camera.updateProjectionMatrix();nn.shadow.bias=-3e-4;nn.shadow.normalBias=.025;nn.shadow.radius=2;gn.add(nn,nn.target);var tc=new Map,mn=(i,t)=>(tc.has(i)||tc.set(i,t()),tc.get(i)),Le=(i,t)=>mn(i,()=>new te(t)),dt={trim:()=>Le("trim",{color:3817026,roughness:.55,metalness:.4}),orange:()=>Le("orange",{color:13787678,roughness:.5,metalness:.2}),yellow:()=>Le("yellow",{color:14197792,roughness:.5,metalness:.2}),steel:()=>Le("steel",{color:9080982,roughness:.35,metalness:.8}),darkSteel:()=>Le("darkSteel",{color:2895924,roughness:.5,metalness:.6}),white:()=>Le("white",{color:14211798,roughness:.45,metalness:.1}),rubber:()=>Le("rubber",{color:1842204,roughness:.9}),paint:()=>Le("paint",{color:14868176,roughness:.8,metalness:0}),glass:()=>mn("glass",()=>new En({color:1054752,roughness:.08,metalness:.1,clearcoat:1,envMapIntensity:1.5})),ceiling:()=>Le("ceiling",{color:4869196,roughness:.8}),slabEdge:()=>Le("slabEdge",{color:6053986,roughness:.7,metalness:.2}),lightOn:()=>Le("lightOn",{color:16773840,emissive:16769696,emissiveIntensity:2.2}),screen:i=>mn("screen"+i,()=>new te({map:Vo(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissive:16777215,emissiveMap:Vo(["#5fd0ff","#ffb347","#7dff9a"][i%3],i,"text"),emissiveIntensity:.9})),wall:(i,t)=>mn(`wall_${i}_${t}`,()=>{let e=zu(i,t);return new te({map:e.map,normalMap:e.normalMap,roughness:i==="inner"?.8:.6,metalness:i==="inner"?0:.15})}),interiorFloor:()=>mn("interiorFloor",()=>{let i=Bu();return new te({map:i.map,normalMap:i.normalMap,roughness:.55,metalness:.5})}),roof:()=>mn("roof",()=>{let i=Hu();return new te({map:i.map,normalMap:i.normalMap,roughness:.9})}),grating:()=>mn("grating",()=>{let i=ku();return new te({map:i.map,normalMap:i.normalMap,roughness:.5,metalness:.7})}),concrete:()=>mn("concrete",()=>{let i=Vu();return new te({map:i.map,roughness:.95})}),container:i=>mn("container_"+i,()=>{let t=Gu(i==="orange"?3:9);return new te({map:t.map,normalMap:t.normalMap,color:i==="orange"?12735772:3104394,roughness:.6,metalness:.3})}),rock:()=>mn("rock",()=>{let i=Mr(5,[150,116,88]);return new te({normalMap:i.normalMap,color:10254942,roughness:.92})}),baseRock:i=>mn("baseRock"+i,()=>{let t=Mr(11+i*7,[120,112,102]);return new te({normalMap:t.normalMap,color:6182736,roughness:.95})}),rockCut:i=>mn("rockCut"+i,()=>{let t=Mr(31+i*5,[92,86,80]);return new te({normalMap:t.normalMap,color:5722700,roughness:.98})})};function Ai(i,t,e,{biasCol:n=0,biasRow:s=0,auto:r=!1}={}){return i.traverse(o=>{o.isMesh&&(o.userData.id={part:t,level:e,biasCol:n,biasRow:s,auto:r},o.castShadow=!0,o.receiveShadow=!o.userData.noShadowReceive)}),i}function Pt(i,t,e,n,s,r,o){let a=new Mt(new _e(i,t,e),n);return a.position.set(s,r,o),a}function cn(i,t,e,n,s,r,o,a=16){let l=new Mt(new Ge(i,t,e,a),n);return l.position.set(s,r,o),l}function nc(i,t,e,n){let s=new N().subVectors(t,i),r=new Mt(new Ge(e,e,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(Ti(0,1,0),s.normalize()),r}var ed=(i,t,e)=>(i*73856093^t*19349663^e*83492791)>>>0,ic=(i,t,e)=>t>=0&&e>=0&&t<ue&&e<ue&&Xn.indoor[i][e][t]===1;function re(i,t,e,n,s,r,o,a,l,c=pn){let h=r-s,u=a-o,d=n*se,f=i==="W"?new _e(c,u,h):new _e(h,u,c),p=i==="W"?t*U:t*U+(s+r)/2,x=i==="W"?e*U+(s+r)/2:e*U;f.translate(p,d+(o+a)/2,x);let m=f.attributes.position,g=f.attributes.uv;for(let y=0;y<m.count;y++){let _=i==="W"?m.getZ(y)-e*U:m.getX(y)-t*U;g.setXY(y,_/U,(m.getY(y)-d)/Jo)}return new Mt(f,l)}function ju(i,t,e,n,s){let r=ed(t,e,n)%3,o=(h,u)=>s==="inner"||ic(n,h,u)?dt.wall("inner",r%2):dt.wall(s,r),a=o(t,e),l=i==="W"?o(t-1,e):o(t,e-1),c=dt.trim();return i==="W"?[a,l,c,c,c,c]:[c,c,c,c,a,l]}var bx=i=>Ko?i.style==="vault"?"vault":Kl(i.style)?"outer":"inner":"base";function sc(i,t,e,n,s,r){if(Ko&&s.type!=="barrier"){let u=Ju(i,t,e,n,s,r,{wallBox:re,isIndoor:ic,THICK:pn,PANEL_H:Jo});if(s.type==="door"){let f=Math.min(2.1,r?.8:Jo);Cr.add(td(i,t,e,n,(U-.92)/2,(U+.92)/2,f,bx(s)))}return Ai(u,i==="W"?Rn.wallW:Rn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let o=new Ft,a=s.type,l=s.style,c=r?.8:Jo,h=pn/2;if(a==="wall"||a==="door"||a==="window"){let u=ju(i,t,e,n,l==="concrete"?"hab":l);if(a==="wall"||a==="window"&&r)o.add(re(i,t,e,n,-h,U+h,0,c,u));else if(a==="door"){let f=Math.min(2.1,c),p=(U-.92)/2,x=(U+.92)/2;o.add(re(i,t,e,n,-h,p,0,c,u)),o.add(re(i,t,e,n,x,U+h,0,c,u)),c>f+.01&&o.add(re(i,t,e,n,p,x,f,c,u));let m=[dt.orange(),dt.orange(),dt.orange(),dt.orange(),dt.orange(),dt.orange()];if(o.add(re(i,t,e,n,p-.06,p,0,f,m,pn+.05)),o.add(re(i,t,e,n,x,x+.06,0,f,m,pn+.05)),c>f+.01&&o.add(re(i,t,e,n,p-.06,x+.06,f,f+.07,m,pn+.05)),o.add(re(i,t,e,n,p,x,0,.03,[dt.darkSteel(),dt.darkSteel(),dt.darkSteel(),dt.darkSteel(),dt.darkSteel(),dt.darkSteel()],pn+.1)),Cr.add(td(i,t,e,n,p,x,f)),l!=="inner"&&!r){let y=(ic(n,t,e)?-1:1)*(pn/2+.06),_=U/2,b=i==="W"?Pt(.12,.07,.3,dt.lightOn(),t*U+y,n*se+2.3,e*U+_):Pt(.3,.07,.12,dt.lightOn(),t*U+_,n*se+2.3,e*U+y);o.add(b)}}else{let x=(U-.82)/2,m=(U+.82)/2;o.add(re(i,t,e,n,-h,x,0,c,u)),o.add(re(i,t,e,n,m,U+h,0,c,u)),o.add(re(i,t,e,n,x,m,0,.95,u)),o.add(re(i,t,e,n,x,m,1.9,c,u));let g=Array(6).fill(dt.trim());o.add(re(i,t,e,n,x,m,.95-.05,.95,g,pn+.06)),o.add(re(i,t,e,n,x,m,1.9,1.9+.05,g,pn+.04)),o.add(re(i,t,e,n,x,x+.04,.95,1.9,g,pn+.03)),o.add(re(i,t,e,n,m-.04,m,.95,1.9,g,pn+.03)),o.add(re(i,t,e,n,x+.04,m-.04,.95,1.9,Array(6).fill(dt.glass()),.03))}}else if(a==="rail"){let u=Array(6).fill(dt.yellow());for(let d of[0,U])o.add(re(i,t,e,n,d-.03,d+.03,0,1.05,u,.06));o.add(re(i,t,e,n,0,U,1,1.06,u,.05)),o.add(re(i,t,e,n,0,U,.52,.56,u,.04)),o.add(re(i,t,e,n,0,U,0,.1,Array(6).fill(dt.darkSteel()),.02))}else if(a==="parapet"){let u=ju(i,t,e,n,l);o.add(re(i,t,e,n,-h-.02,U+h+.02,-.02,.5,u,.22)),o.add(re(i,t,e,n,-h-.04,U+h+.04,.5,.56,Array(6).fill(dt.steel()),.28))}else if(a==="barrier"){let u=new Ve;u.moveTo(-.3,0),u.lineTo(.3,0),u.lineTo(.3,.08),u.lineTo(.1,.3),u.lineTo(.08,.82),u.lineTo(-.08,.82),u.lineTo(-.1,.3),u.lineTo(-.3,.08);let d=new tn(u,{depth:U-.05,bevelEnabled:!1});i==="W"?d.translate(0,0,.025):(d.rotateY(Math.PI/2),d.translate(.025,0,0));let f=new Mt(d,dt.concrete());f.position.set(t*U,n*se,e*U),i==="N"&&f.position.set(t*U,n*se,e*U),o.add(f);let p=i==="W"?Pt(.17,.06,U-.1,dt.orange(),t*U,n*se+.62,e*U+U/2):Pt(U-.1,.06,.17,dt.orange(),t*U+U/2,n*se+.62,e*U);o.add(p)}return Ai(o,i==="W"?Rn.wallW:Rn.wallN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}var Cr=new Ft;function td(i,t,e,n,s,r,o,a="base"){if(a!=="base"){let p=Ku(i,t,e,n,s,r,o,a,{wallBox:re});return p.userData.door={orient:i,col:t,row:e,level:n},Ai(p,i==="W"?Rn.doorW:Rn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}let l=new Ft,c=Array(6).fill(dt.wall("cabin",0)),h=o-.01;l.add(re(i,t,e,n,s-.02,r+.02,.01,h,c,.06));let u=Array(6).fill(dt.orange()),d=Array(6).fill(dt.darkSteel()),f=Array(6).fill(dt.glass());return h>1.1&&l.add(re(i,t,e,n,s,r,.98,1.06,u,.075)),h>1.9&&(l.add(re(i,t,e,n,s+.36,s+.56,1.3,1.85,d,.075)),l.add(re(i,t,e,n,s+.38,s+.54,1.32,1.83,f,.08))),l.add(re(i,t,e,n,s+.06,s+.1,Math.min(.85,h-.1),Math.min(1.15,h-.05),d,.085)),l.userData.door={orient:i,col:t,row:e,level:n},Ai(l,i==="W"?Rn.doorW:Rn.doorN,n,i==="W"?{biasCol:.15}:{biasRow:.15})}function nd(i,t,e,n){let s=new Ft,r=i*U+U/2,o=t*U+U/2,a=e*se;if(n===Me.deck)s.add(Pt(U,.06,U,dt.grating(),r,a-.03,o)),s.add(Pt(.12,.22,U,dt.orange(),i*U+.06,a-.17,o)),s.add(Pt(U,.18,.1,dt.orange(),r,a-.15,t*U+.05));else{let l=Ko&&Xn.floorStyle?Xn.floorStyle[e][t][i]:null,c=l?$u(l):n===Me.roof?dt.roof():dt.interiorFloor(),h=l?lt.slabEdge():dt.slabEdge(),u=l?lt.ceiling():dt.ceiling(),d=Pt(U,ec,U,[h,h,c,u,h,h],r,a-ec/2,o);s.add(d)}return Ai(s,Rn.floor,e,{biasCol:-1e-4,biasRow:-1e-4})}function Ex(i,t){let e=new Ft,n=i.level*se,s=Math.min(n+i.height,t);if(s<=n+.05)return e;let r=pn/2+.1,o=a=>i.side==="W"?[Ti(i.col*U+r,n,i.row*U+U/2+a),Ti(i.col*U+r,s,i.row*U+U/2+a)]:[Ti(i.col*U+U/2+a,n,i.row*U+r),Ti(i.col*U+U/2+a,s,i.row*U+r)];for(let a of[-.22,.22]){let[l,c]=o(a);e.add(nc(l,c,.025,dt.steel()))}for(let a=n+.3;a<s-.05;a+=.3){let[l]=o(-.22),[c]=o(.22);l.y=c.y=a,e.add(nc(l,c,.016,dt.steel()))}return Ai(e,Rn.floor,i.level,{auto:!0})}function wx(i){return Ti(i.col*U,i.level*se,i.row*U)}var Sx=new ne().makeTranslation(U*ue,0,0).multiply(new ne().makeRotationY(-Math.PI/2));function Qo(i,t){if(i.source){let h=Qo({...i.source,layer:i.layer},t);if(!h)return h;let u=new Ft;u.matrixAutoUpdate=!1;for(let d=0;d<i.turns;d++)u.matrix.premultiply(Sx);return u.add(h),u.updateMatrixWorld(!0),u}let e=new Ft,n=wx(i),s=i.cols*U,r=i.rows*U,o=s/2,a=r/2,l=be(ed(i.col,i.row,i.level)%1e5+7),c=h=>(e.add(h),h);if(Ko){let h=Qu(i);if(h)return e.add(h),e.position.copy(n),Ai(e,Rn.object,i.level)}switch(i.kind){case"console":{c(Pt(1,.75,.6,dt.trim(),o,.375,a-.15));let h=c(Pt(1,.05,.5,dt.screen(Math.floor(l()*3)),o,.85,a-.05));h.rotation.x=-.6,c(Pt(1,.5,.08,dt.darkSteel(),o,1.1,a-.42));break}case"locker":c(Pt(.9,1.9,.5,dt.wall("cabin",0),o,.95,a-.3)),c(Pt(.02,1.7,.02,dt.darkSteel(),o,.95,a-.04));break;case"cabinet":c(Pt(.9,1.2,.6,dt.trim(),o,.6,a)),c(Pt(.7,.08,.02,dt.lightOn(),o,1.05,a+.31));break;case"bunk":for(let h of[.35,1.25])c(Pt(s-.2,.08,r-.3,dt.trim(),o,h,a)),c(Pt(s-.3,.12,r-.4,Le("mattress",{color:5134920,roughness:.95}),o,h+.1,a));for(let[h,u]of[[.15,.2],[s-.15,.2],[.15,r-.2],[s-.15,r-.2]])c(Pt(.05,1.6,.05,dt.steel(),h,.8,u));break;case"labTable":c(Pt(s-.2,.06,r-.3,dt.white(),o,.9,a));for(let h of[.2,s-.2])c(Pt(.06,.9,r-.4,dt.trim(),h,.45,a));c(Pt(.5,.35,.4,dt.trim(),o-.6,1.1,a));for(let h=0;h<5;h++)c(cn(.03,.03,.22,Le("sample",{color:7270576,emissive:3195008,emissiveIntensity:1.2}),o+.2+h*.1,1.04,a));break;case"desk":c(Pt(s-.3,.05,.7,dt.white(),o,.75,a-.1)),c(Pt(s-.4,.7,.05,dt.trim(),o,.38,a-.4));for(let h of[o-.5,o+.5])c(Pt(.55,.35,.04,dt.screen(Math.floor(l()*3)+1),h,1.05,a-.3)),c(Pt(.06,.2,.06,dt.darkSteel(),h,.85,a-.3));break;case"rack":c(Pt(.7,2,.9,dt.darkSteel(),o+.15,1,a));for(let h=0;h<12;h++)c(Pt(.02,.02,.02,Le("led"+h%3,{color:0,emissive:[4259696,16752688,4243711][h%3],emissiveIntensity:2}),o-.21,.3+h*.14,a-.3+l()*.6));break;case"crate":{let h=1+(l()<.45?1:0),u=l()<.5?dt.wall("cabin",2):Le("crateGrey",{color:10132630,roughness:.55,metalness:.2}),d=0;for(let f=0;f<h;f++){let p=f?.65:.95,x=f?.5:.75,m=(l()-.5)*.4,g=new Ft;g.add(Pt(p,x,p*.8,u,0,x/2,0));for(let y of[-1,1])g.add(Pt(p+.02,.08,.06,dt.orange(),0,x*.5,y*p*.3));g.add(Pt(p+.02,.04,p*.82,dt.trim(),0,x-.02,0)),g.position.set(o+(l()-.5)*.1,d,a+(l()-.5)*.1),g.rotation.y=m,c(g),d+=x}break}case"barrels":for(let h=0;h<3;h++){let u=[3104394,9058844,5923400][h];c(cn(.29,.29,.9,Le("barrel"+h,{color:u,roughness:.55,metalness:.5}),.35+h%2*.55,.45,.35+Math.floor(h/2)*.55))}break;case"acUnit":c(Pt(s-.2,.9,r-.25,dt.white(),o,.45,a));for(let h=0;h<i.cols;h++)c(cn(.38,.38,.05,dt.darkSteel(),.62+h*U,.92,a,20)).scale.set(1,1,1);break;case"antenna":c(Pt(.5,.15,.5,dt.trim(),o,.07,a)),c(cn(.05,.07,3.6,dt.steel(),o,1.8,a));for(let h of[2.2,3])c(Pt(.9,.04,.04,dt.steel(),o,h,a));c(Pt(.06,.06,.06,Le("redLight",{color:2097152,emissive:16719888,emissiveIntensity:3}),o,3.62,a));break;case"solar":{for(let h=0;h<2;h++){let u=c(Pt(s-.3,.05,r/2-.15,Le("solar",{color:1714756,roughness:.2,metalness:.4}),o,.6,h*r/2+r/4));u.rotation.x=-.45,c(Pt(.06,.6,.06,dt.steel(),o,.3,h*r/2+r/4))}break}case"dish":c(cn(.08,.12,.8,dt.steel(),o,.4,a));{let h=c(new Mt(new Fn(.6,20,10,0,Math.PI*2,0,.9),dt.white()));h.position.set(o,1,a),h.rotation.set(-2.1,0,.4),h.material=mn("dishMat",()=>new te({color:14211798,roughness:.4,side:Fe}))}break;case"pylon":{let h=se-.24;c(Pt(.32,h,.32,dt.orange(),o,h/2,a)),c(Pt(.6,.06,.6,dt.darkSteel(),o,.03,a)),c(Pt(.5,.12,.5,dt.orange(),o,h-.06,a));break}case"searchlight":c(Pt(.5,.3,.5,dt.trim(),o,.15,a)),c(Pt(.12,.5,.12,dt.darkSteel(),o,.55,a));{let h=c(cn(.24,.3,.45,dt.darkSteel(),o,.95,a));h.rotation.x=1.1;let u=c(cn(.22,.22,.03,dt.lightOn(),o,1.02,a+.2));u.rotation.x=1.1}break;case"container":{let h=dt.container(i.color),u=c(Pt(s-.15,2.5,r-.15,[h,h,dt.container(i.color),dt.trim(),h,h],o,1.25,a));for(let d of[.12,s-.12])for(let f of[.12,r-.12])for(let p of[.1,2.4])c(Pt(.18,.2,.18,dt.darkSteel(),d,p,f));for(let d of[o-.35,o+.35])c(Pt(.04,2.3,.04,dt.steel(),d,1.25,r-.06));break}case"truck":{let h=Uu();h.position.set(o,0,(r-Nu.length)/2),c(h);break}case"rover":{let h=dt.white();c(Pt(s-.4,.6,r-.3,h,o,.95,a)),c(Pt(s-.5,.75,1.3,h,o,1.6,a+r/2-1)),c(Pt(s-.6,.5,.05,dt.glass(),o,1.7,a+r/2-.33));for(let u of[-1,1])c(Pt(.05,.4,1,dt.glass(),o+u*(s/2-.24),1.7,a+r/2-1));c(Pt(s-.4,.06,r-.3,dt.orange(),o,1.27,a)),c(Pt(s-.6,.12,1.6,dt.trim(),o,1.31,a-.6));for(let u of[-1,1])for(let d of[.55,r/2,r-.55]){let f=c(cn(.42,.42,.34,dt.rubber(),o+u*(s/2-.2),.42,d,18));f.rotation.z=Math.PI/2;let p=c(cn(.18,.18,.36,dt.steel(),o+u*(s/2-.2),.42,d,10));p.rotation.z=Math.PI/2}c(cn(.02,.02,1.2,dt.steel(),o-.6,2.4,a+r/2-1.3)),c(Pt(.25,.12,.08,dt.lightOn(),o-.6,1,r-.12)),c(Pt(.25,.12,.08,dt.lightOn(),o+.6,1,r-.12));break}case"tank":{for(let d of[.6,r-.6])c(Pt(s-.5,.6,.25,dt.darkSteel(),o,.3,d));let h=c(cn(1,1,r-.3,dt.white(),o,1.3,a,28));h.rotation.x=Math.PI/2;let u=c(cn(1.02,1.02,.25,dt.orange(),o,1.3,a,28));u.rotation.x=Math.PI/2;for(let d of[.15,r-.15]){let f=c(new Mt(new Fn(1,24,12),dt.white()));f.position.set(o,1.3,d),f.scale.set(1,1,.25)}c(nc(Ti(o+.6,.3,r-.4),Ti(o+.6,2.2,r-.4),.06,dt.steel()));break}case"generator":c(Pt(s-.3,1.4,r-.4,Le("genBody",{color:6122066,roughness:.6,metalness:.3}),o,.7,a));for(let h=0;h<6;h++)c(Pt(s-.6,.04,.02,dt.darkSteel(),o,.35+h*.15,r-.19));for(let h of[o-.5,o+.4])c(cn(.08,.08,.9,dt.darkSteel(),h,1.8,a-.3));c(Pt(s-.2,.08,r-.3,dt.yellow(),o,1.42,a));break;case"lamp":c(Pt(.4,.15,.4,dt.concrete(),o,.07,a)),c(cn(.06,.08,4.2,dt.darkSteel(),o,2.1,a)),c(Pt(.7,.08,.1,dt.darkSteel(),o+.3,4.15,a)),c(Pt(.36,.1,.24,dt.trim(),o+.6,4.1,a)),c(Pt(.3,.02,.2,dt.lightOn(),o+.6,4.04,a));break;case"rock":{let h=i.cols*U*.55,u=Yl(h,i.col*3+i.row,{flatten:.55,roughness:.45,detail:3}),d=c(new Mt(u,dt.rock()));d.position.set(o,h*.18,a),d.rotation.y=l()*6;break}case"tiltrotor":{let h=Fu();i.layer&&[...h.children].forEach(u=>{u.name!==i.layer&&h.remove(u)}),h.rotation.y=-Math.PI/2,h.position.set(8*U-.006,0,2*U+.006),c(h);break}case"car":{let h=qo[i.type]||qo.suv,u=new Ft,d=Ou({type:i.type,color:i.color});d.position.z=-h.length/2,u.add(d),u.position.set(o,0,a),i.cols>i.rows?u.rotation.y=i.flip?-Math.PI/2:Math.PI/2:i.flip&&(u.rotation.y=Math.PI),c(u);break}case"rockFill":{let h=i.top!==void 0?Math.min(i.top,i.height):i.height,u=i.bottom||0,d=i.variant||0,f=dt.baseRock(d),p=dt.rockCut(d),x=c(Pt(U+.014,h-u,U+.014,[f,f,p,f,f,f],o-.01,(h+u)/2,a-.01));x.userData.noShadowReceive=!0;let m=x.geometry.attributes.position,g=x.geometry.attributes.uv,y=x.geometry.attributes.normal;for(let _=0;_<m.count;_++){let b=i.col*U+o+m.getX(_),L=(h+u)/2+m.getY(_),C=i.row*U+a+m.getZ(_);Math.abs(y.getY(_))>.5?g.setXY(_,b/8,C/8):Math.abs(y.getX(_))>.5?g.setXY(_,C/8,L/8):g.setXY(_,b/8,L/8)}break}case"liftPlatform":{c(Pt(s-.04,.03,r-.04,dt.darkSteel(),o,.06,a));for(let d=2.5;d<s-.1;d+=2.5)c(Pt(.03,.035,r-.3,dt.rubber(),d,.062,a));for(let d=2.5;d<r-.1;d+=2.5)c(Pt(s-.3,.035,.03,dt.rubber(),o,.062,d));let h=.5,u=.22;for(let d=0;d<s-1e-6;d+=h){let f=Math.round(d/h)%2?dt.rubber():dt.yellow(),p=Math.min(h,s-d);c(Pt(p,.04,u,f,d+p/2,.065,u/2+.03)),c(Pt(p,.04,u,f,d+p/2,.065,r-u/2-.03))}for(let d=u+.03;d<r-u-.03-1e-6;d+=h){let f=Math.round(d/h)%2?dt.yellow():dt.rubber(),p=Math.min(h,r-u-.03-d);c(Pt(u,.04,p,f,u/2+.03,.065,d+p/2)),c(Pt(u,.04,p,f,s-u/2-.03,.065,d+p/2))}break}case"paint":c(Pt(.1,.012,r-.12,dt.paint(),.06,.006,a));break;case"ladder":return Ex(i,(t+1)*se+.95);case"towerLeg":return null;default:c(Pt(s*.8,.8,r*.8,dt.trim(),o,.4,a))}return e.position.copy(n),Ai(e,Rn.object,i.level)}var U_=si+4,F_=Xn.concrete,O_={tracks:[[[5.5*U,15.5*U],[7*U,13*U],[8.5*U,12.2*U],[12*U,12.4*U],[16*U,13.2*U],[21*U,12.5*U],[24*U,12*U]],[[9*U,16.5*U],[9.5*U,20*U],[10*U,24*U]]],lines:[{from:[1.6*U,11.2*U],to:[12.3*U,11.2*U]},{from:[12.3*U,1.6*U],to:[12.3*U,11.2*U]},{from:[14.5*U,3.3*U],to:[14.5*U,12.5*U]},{from:[14.5*U,12.5*U],to:[20.5*U,12.5*U]}],hazards:[[5.6*U,10.15*U,7.4*U,10.45*U],[11.15*U,5.6*U,11.45*U,7.4*U],[16.6*U,12.05*U,18.4*U,12.35*U]],pads:[[4.6*U,19*U,3.2*U]],stains:[[8.5*U,14*U,1.4],[13.5*U,2.5*U,1],[17*U,7*U,1.2],[4*U,18*U,.8],[21.5*U,7.8*U,.9]]};function id(){return Cr}function sd(){return Cr=new Ft,Cr}function od(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=rd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function rd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Re(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ad(i){i.updateMatrixWorld(!0);let t=new Map,e=[];i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences){e.push(s);return}let r=Array.isArray(s.material)?s.material:[s.material],o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone(),a=r.some(h=>h.vertexColors)&&!!o.attributes.color;for(let h of Object.keys(o.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&!(a&&h==="color")&&o.deleteAttribute(h);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new Jt(new Float32Array(o.attributes.position.count*2),2)),o.morphAttributes={},o.applyMatrix4(s.matrixWorld),s.matrixWorld.determinant()<0&&Ax(o);let l=o.attributes.position.count,c=Array.isArray(s.material)&&o.groups.length?o.groups:[{start:0,count:l,materialIndex:0}];for(let h of c){let u=r[h.materialIndex||0];if(!u||!u.visible)continue;let d=Math.min(h.count,l-h.start);if(d<=0)continue;let f=c.length===1?o:Tx(o,h.start,d),p=!!u.vertexColors&&!!f.attributes.color;!p&&f.attributes.color&&f.deleteAttribute("color"),f.clearGroups();let x=`${u.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}|${p?1:0}`;t.has(x)||t.set(x,{material:u,castShadow:s.castShadow,receiveShadow:s.receiveShadow,geometries:[]}),t.get(x).geometries.push(f)}c.length>1&&o.dispose()});let n=new Ft;for(let s of t.values()){let r=od(s.geometries,!1);if(s.geometries.forEach(a=>a.dispose()),!r)continue;let o=new Mt(r,s.material);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,n.add(o)}for(let s of e)n.attach(s);return n}function Tx(i,t,e){let n=new xe;for(let[s,r]of Object.entries(i.attributes)){let o=r.itemSize;n.setAttribute(s,new Re(r.array.slice(t*o,(t+e)*o),o,r.normalized))}return n}function Ax(i){for(let t of Object.values(i.attributes)){let e=t.itemSize,n=t.array;for(let s=0;s+2<t.count;s+=3)for(let r=0;r<e;r++){let o=(s+1)*e+r,a=(s+2)*e+r,l=n[o];n[o]=n[a],n[a]=l}t.needsUpdate=!0}}var gd=61,Rx=35,Ys=gd/(U*Math.SQRT1_2),Lr=Math.asin(Rx/gd),Cx=Ys*Math.cos(Lr),Px=Ys*Math.sin(Lr),ea=new mt(Math.SQRT1_2,Math.SQRT1_2),Je=new Is(-1,1,1,-1,1,300);Je.position.set(ts.x+ea.x*Math.cos(Lr)*120,Math.sin(Lr)*120,ts.z+ea.y*Math.cos(Lr)*120);Je.lookAt(ts);Je.updateMatrixWorld(!0);var ld=new N(0,0,0).applyMatrix4(Je.matrixWorldInverse),cd=new N(ea.x,0,ea.y),hd=new N(0,1,0),Ix=new ne().makeTranslation(U*ue,0,0).multiply(new ne().makeRotationY(-Math.PI/2)),Yn=new Ft;Yn.matrixAutoUpdate=!1;gn.add(Yn);var xd=[],Dr=[],es=null,ud=0,ri=zn-1,ns=!1,de={x:0,y:0,width:1,height:1,ratio:1},Pr=!1,Ir={buildMs:0,drawCalls:0,triangles:0,proxies:0};ie.domElement.style.display="none";ie.shadowMap.autoUpdate=!1;ie.autoClear=!1;ie.localClippingEnabled=!1;{let i=si/2+2;Object.assign(nn.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:140}),nn.shadow.camera.updateProjectionMatrix(),nn.shadow.mapSize.set(4096,4096)}var Lx=()=>new Promise(i=>setTimeout(i,0));function dd(i,t,e){let n=t*se;if(n>=i.height-1e-6)return null;let s=Math.min(i.height,e?n+.8:n+se);return Qo({...i,bottom:n,top:s},zn-1)}async function Dx(i,t){let e=performance.now(),n=new Map;i.forEach((c,h)=>n.set(`${c[0]}|${c[1]}|${c[2]}|${c[3]===0?"W":"N"}`,h));let s=new Ft,r=new Mt(new yi(si+40,si+40),new te({color:1315343,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(si/2,-.03,si/2),r.receiveShadow=!0,s.add(r);let o=[];for(let c=0;c<ue;c++)for(let h=0;h<ue;h++)Xn.floor[0][c][h]===Me.interior&&o.push([h,c]);let a=new Ds(new _e(U+.004,.04,U+.004),dt.interiorFloor(),o.length),l=new ne;o.forEach(([c,h],u)=>a.setMatrixAt(u,l.makeTranslation((c+.5)*U,.025,(h+.5)*U))),a.receiveShadow=!0,s.add(a),br(s,.28),Yn.add(s);for(let c=0;c<zn;c++){let h=new Ft,u=new Ft,d=new Ft,f=new Ft,p=new Ft;for(let m=0;m<=ue;m++)for(let g=0;g<=ue;g++){for(let y of["W","N"]){let _=(y==="W"?Xn.wallW:Xn.wallN)[c][m][g];if(!_||!_.type||_.type==="hull")continue;let b=_.type==="wall"||_.type==="door"||_.type==="window";for(let L of b?[!1,!0]:[!1]){sd();let C=sc(y,g,m,c,_,L);(L?u:h).add(C),b||u.add(sc(y,g,m,c,_,!1));let P=id(),v=n.get(`${g}|${m}|${c}|${y}`);_.type==="door"&&v!==void 0&&P.children.length&&(Dr[v]||(Dr[v]={along:y==="W"?new N(0,0,1):new N(1,0,0),level:c}),Dr[v][L?"cut":"full"]=P,br(P,.28),Yn.add(P))}}if(c>0&&m<ue&&g<ue){let y=Xn.floor[c][m][g];(y===Me.interior||y===Me.roof||y===Me.deck)&&p.add(nd(g,m,c,y))}}for(let m of Xn.objects){if(m.kind==="rockFill"){let y=dd(m,c,!1),_=dd(m,c,!0);y&&d.add(y),_&&f.add(_);continue}if(m.level!==c)continue;let g=Qo(m,zn-1);g&&p.add(g)}let x={wallsFull:h,wallsCut:u,rockFull:d,rockCut:f,objects:p};for(let m of Object.keys(x)){br(x[m],.28);let g=ad(x[m]);g.name=`${m}${c}`,x[m]=g,Yn.add(g)}xd[c]=x,t&&t((c+1)/zn),await Lx()}Ir.buildMs=Math.round(performance.now()-e)}function jo(){for(let i=0;i<zn;i++){let t=xd[i];if(!t)continue;let e=i<=ri,n=ns&&i===ri;t.wallsFull.visible=e&&!n,t.wallsCut.visible=e&&n,t.rockFull.visible=e&&!n,t.rockCut.visible=e&&n,t.objects.visible=e}Dr.forEach(i=>{if(!i)return;let t=i.level<=ri,e=ns&&i.level===ri;i.full&&(i.full.visible=t&&!e),i.cut&&(i.cut.visible=t&&e)}),ie.shadowMap.needsUpdate=!0}function ta(){let i=ld.x+(de.x-es.origin[0])/Ys,t=ld.y-(de.y-es.origin[1])/Ys;Je.left=i,Je.right=i+de.width/Ys,Je.top=t,Je.bottom=t-de.height/Ys,Je.updateProjectionMatrix()}var rc=new vi,Nx="void main() { gl_Position = vec4(position, 1.0); }",Ux="void main() { gl_FragColor = vec4(0.0); }",Fx=new Mn({vertexShader:Nx,fragmentShader:Ux,colorWrite:!1,depthWrite:!0,depthTest:!0,side:Fe}),fd=[];function Ox(i,t){let e=fd[i];if(!e||e.userData.quads<t){e&&(rc.remove(e),e.geometry.dispose()),t=Math.ceil(t/16)*16;let n=new xe;n.setAttribute("position",new Re(new Float32Array(t*4*3),3));let s=[];for(let r=0;r<t;r++)s.push(r*4,r*4+2,r*4+1,r*4+1,r*4+2,r*4+3);n.setIndex(s),e=new Mt(n,Fx),e.frustumCulled=!1,e.userData.quads=t,fd[i]=e,rc.add(e)}return e}var zx=new N;function oc(i){return zx.copy(i).project(Je).z}var ac=i=>(i-de.x)/de.width*2-1,lc=i=>1-(i-de.y)/de.height*2;function pd(i,t,e,n,s,r,o,a){[[e,s,o],[n,s,o],[e,r,a],[n,r,a]].forEach(([c,h,u],d)=>{let f=(t*4+d)*3;i[f]=ac(c),i[f+1]=lc(h),i[f+2]=u})}var md=new Oo;function Bx(i,t,e){md.setFromCamera(new mt(ac(i),lc(t)),Je);let n=md.ray,s=(e-n.origin.y)/n.direction.y;return oc(n.origin.clone().addScaledVector(n.direction,s))}function Hx(i,t,e){let s=new N(e.foot[0]*U,e.foot[2],e.foot[1]*U).applyMatrix4(Yn.matrix).addScaledVector(cd,e.pull),r=a=>a<=e.footY?oc(s.clone().addScaledVector(hd,(e.footY-a)/Cx)):oc(s.clone().addScaledVector(cd,(a-e.footY)/Px).addScaledVector(hd,.02)),o=Math.max(e.y0,Math.min(e.y1,e.footY));pd(i,t,e.x0,e.x1,e.y0,o,r(e.y0),r(o)),pd(i,t+1,e.x0,e.x1,o,e.y1,r(o),r(e.y1))}var _d={supported:we==="base",canvas:ie.domElement,stats:Ir,get ready(){return Pr},async init(i){return es=i.field,await Dx(i.doors||[],i.onProgress),jo(),Pr=!0,_d},setViewport(i,t,e,n,s){let r=e!==de.width||n!==de.height||s!==de.ratio;de={x:i,y:t,width:e,height:n,ratio:s},r&&(ie.setPixelRatio(s),ie.setSize(e,n))},setTurns(i){ud=(i%4+4)%4,Yn.matrix.identity();for(let t=0;t<ud;t++)Yn.matrix.premultiply(Ix);Yn.matrixWorldNeedsUpdate=!0,ie.shadowMap.needsUpdate=!0},setLevel(i,t){i===ri&&!!t===ns||(ri=i,ns=!!t,jo())},setDoor(i,t,e){let n=Dr[i];if(n)for(let s of[n.full,n.cut])s&&s.position.copy(n.along).multiplyScalar(t*e)},render(){Pr&&(ta(),ie.setClearColor(gn.background||0,1),ie.clear(!0,!0,!0),ie.render(gn,Je),Ir.drawCalls=ie.info.render.calls,Ir.triangles=ie.info.render.triangles)},renderOccluders(i,t){if(!Pr)return;ta(),ie.setClearColor(0,0),ie.clear(!0,!0,!0);let e=i||[],n=Ox(0,1+e.length*2),s=n.geometry.attributes.position.array,r=t+.06,o=de.x,a=de.x+de.width,l=de.y,c=de.y+de.height;[[o,l],[a,l],[o,c],[a,c]].forEach(([d,f],p)=>{s[p*3]=ac(d),s[p*3+1]=lc(f),s[p*3+2]=Bx(d,f,r)}),e.forEach((d,f)=>Hx(s,1+f*2,d)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.setDrawRange(0,(1+e.length*2)*6);let u=gn.background;ie.render(rc,Je),gn.background=null,ie.render(gn,Je),gn.background=u,Ir.proxies=e.length},pixelOf(i,t,e){ta();let n=new N(i*U,e||0,t*U).applyMatrix4(Yn.matrix).project(Je);return{x:de.x+(n.x+1)/2*de.width,y:de.y+(1-n.y)/2*de.height}},snapshot(i){if(!Pr)return null;let t=Math.round(i*es.height/es.width),e={...de},n=ri,s=ns;de={x:0,y:0,width:es.width,height:es.height,ratio:1},ri=zn-1,ns=!1,jo(),ta();let r=new Nn(i,t,{samples:4,colorSpace:Ze});ie.setRenderTarget(r),ie.setClearColor(1315343,1),ie.clear(!0,!0,!0),ie.render(gn,Je);let o=new Uint8Array(i*t*4);ie.readRenderTargetPixels(r,0,0,i,t,o),ie.setRenderTarget(null),r.dispose(),de=e,ri=n,ns=s,jo();let a=document.createElement("canvas");a.width=i,a.height=t;let l=a.getContext("2d"),c=l.createImageData(i,t);for(let h=0;h<t;h++)c.data.set(o.subarray((t-1-h)*i*4,(t-h)*i*4),h*i*4);return l.putImageData(c,0,0),a}};window.Map3D=_d;})();
