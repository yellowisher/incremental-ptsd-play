var bh=Object.defineProperty;var Th=(i,t,e)=>t in i?bh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Re=(i,t,e)=>Th(i,typeof t!="symbol"?t+"":t,e);import"./helpers-Dfcy-Kmj.js";import{b as Ah,m as wh}from"./run-options-BWgN2C4w.js";import{l as Rh,m as Ch}from"./run-options-DrbCneWl.js";import{g as Ph}from"./game-BSry_J9k.js";import{e as ae,f as mn}from"./tree-view-B6yJx_lN.js";import"./types-4rIte7rE.js";import"./node-data-BxSTLhiI.js";import"./nodes-DGOYLgTH.js";const wu={storageKey:"raid-titan:options",options:[{id:"wBurn",label:"불기둥 잔불",owned:i=>i.flag("wBurn")},{id:"wTriple",label:"세 줄기 불기둥",owned:i=>i.flag("wTriple")},{id:"rAftershock",label:"대지 강타 여진",owned:i=>i.flag("rAftershock")},{id:"burnSpread",label:"번지는 불",owned:i=>i.flag("burnSpread")},{id:"thorns",label:"가시 피부",owned:i=>i.stat("thorns")>0},{id:"autoSweep",label:"자동 휩쓸기",owned:i=>i.flag("autoSweep")},{id:"autoQ",label:"자동 화염구",owned:i=>i.flag("autoQ")},{id:"autoW",label:"자동 불기둥",owned:i=>i.flag("autoW")}]};function Lh(i,t){return{...i,thorns:t.thorns?i.thorns:0,burnSpread:t.burnSpread&&i.burnSpread,sweep:{...i.sweep,auto:t.autoSweep&&i.sweep.auto},q:{...i.q,auto:t.autoQ&&i.q.auto},w:{...i.w,burn:t.wBurn&&i.w.burn,triple:t.wTriple&&i.w.triple,auto:t.autoW&&i.w.auto},r:{...i.r,aftershock:t.rAftershock&&i.r.aftershock}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="170",Ih=0,Cc=1,Dh=2,Ru=1,Uh=2,ti=3,Ti=0,je=1,vn=2,Si=0,Zi=1,_i=2,Pc=3,Lc=4,Nh=5,Gi=100,Fh=101,Oh=102,Bh=103,zh=104,kh=200,Hh=201,Gh=202,Vh=203,ga=204,_a=205,Wh=206,Xh=207,qh=208,Yh=209,$h=210,Kh=211,Zh=212,jh=213,Jh=214,va=0,xa=1,Ma=2,Ir=3,Sa=4,ya=5,Ea=6,ba=7,dc=0,Qh=1,tf=2,yi=0,ef=1,nf=2,rf=3,Cu=4,sf=5,of=6,af=7,Pu=300,Dr=301,Ur=302,Ta=303,Aa=304,xo=306,wa=1e3,Xi=1001,Ra=1002,hn=1003,cf=1004,vs=1005,zn=1006,Ro=1007,qi=1008,si=1009,Lu=1010,Iu=1011,ls=1012,pc=1013,ji=1014,kn=1015,ds=1016,mc=1017,gc=1018,Nr=1020,Du=35902,Uu=1021,Nu=1022,Dn=1023,Fu=1024,Ou=1025,Cr=1026,Fr=1027,_c=1028,vc=1029,Bu=1030,xc=1031,Mc=1033,to=33776,eo=33777,no=33778,io=33779,Ca=35840,Pa=35841,La=35842,Ia=35843,Da=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,$a=37820,Ka=37821,ro=36492,Za=36494,ja=36495,zu=36283,Ja=36284,Qa=36285,tc=36286,lf=3200,uf=3201,ku=0,hf=1,vi="",gn="srgb",zr="srgb-linear",Mo="linear",Se="srgb",ur=7680,Ic=519,ff=512,df=513,pf=514,Hu=515,mf=516,gf=517,_f=518,vf=519,Dc=35044,Ei=35048,Uc="300 es",ii=2e3,co=2001;class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=Math.PI/180,ec=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function xf(i,t){return(i%t+t)%t}function Po(i,t,e){return(1-e)*i+e*t}function qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,r,s,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],v=r[0],m=r[3],h=r[6],y=r[1],E=r[4],x=r[7],F=r[2],C=r[5],I=r[8];return s[0]=o*v+a*y+c*F,s[3]=o*m+a*E+c*C,s[6]=o*h+a*x+c*I,s[1]=l*v+u*y+f*F,s[4]=l*m+u*E+f*C,s[7]=l*h+u*x+f*I,s[2]=d*v+p*y+_*F,s[5]=d*m+p*E+_*C,s[8]=d*h+p*x+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,_=e*f+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(r*l-u*n)*v,t[2]=(a*n-r*o)*v,t[3]=d*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new te;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){const i=lo("canvas");return i.style.display="block",i}const Nc={};function rs(i){i in Nc||(Nc[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ef(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Mo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fc=[.64,.33,.3,.6,.15,.06],Oc=[.2126,.7152,.0722],Bc=[.3127,.329],zc=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[zr]:{primaries:Fc,whitePoint:Bc,transfer:Mo,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:Oc,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Fc,whitePoint:Bc,transfer:Se,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:Oc,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let hr;class bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hr===void 0&&(hr=lo("canvas")),hr.width=t.width,hr.height=t.height;const n=hr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class Vu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Io(r[o].image)):s.push(Io(r[o]))}else s=Io(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;class Je extends kr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Xi,r=Xi,s=zn,o=qi,a=Dn,c=si,l=Je.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ps(),this.name="",this.source=new Vu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Pu;Je.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(p+1)/2,F=(h+1)/2,C=(u+d)/4,I=(f+v)/4,D=(_+m)/4;return E>x&&E>F?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=I/n):x>F?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=D/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=I/s,r=D/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends kr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Je(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wu extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(f!==v||c!==d||l!==p||u!==_){let m=1-a;const h=c*d+l*p+u*_+f*v,y=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const F=Math.sqrt(E),C=Math.atan2(F,h*y);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}const x=a*y;if(c=c*m+d*x,l=l*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=F,l*=F,u*=F,f*=F}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return t[e]=a*_+u*f+c*p-l*d,t[e+1]=c*_+u*d+l*f-a*p,t[e+2]=l*_+u*p+a*d-c*f,t[e+3]=u*_-a*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),d=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"YZX":this._x=d*u*f+l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f-d*p*_;break;case"XZY":this._x=d*u*f-l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new q,Hc=new ms;class nr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Ms.subVectors(this.max,Yr),fr.subVectors(t.a,Yr),dr.subVectors(t.b,Yr),pr.subVectors(t.c,Yr),ci.subVectors(dr,fr),li.subVectors(pr,dr),Ri.subVectors(fr,pr);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Uo(e,fr,dr,pr,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,fr,dr,pr,Ms))?!1:(Ss.crossVectors(ci,li),e=[Ss.x,Ss.y,Ss.z],Uo(e,fr,dr,pr,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new q,new q,new q,new q,new q,new q,new q,new q],yn=new q,xs=new nr,fr=new q,dr=new q,pr=new q,ci=new q,li=new q,Ri=new q,Yr=new q,Ms=new q,Ss=new q,Ci=new q;function Uo(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ci.fromArray(i,s);const a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Cf=new nr,$r=new q,No=new q;class ir{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(No)),this.expandByPoint($r.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new q,Fo=new q,ys=new q,ui=new q,Oo=new q,Es=new q,Bo=new q;class Sc{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fo.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Fo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ys),a=ui.dot(this.direction),c=-ui.dot(ys),l=ui.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*c-a,d=o*a-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fo).addScaledVector(ys,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,r,s){Oo.subVectors(e,t),Es.subVectors(n,t),Bo.crossVectors(Oo,Es);let o=this.direction.dot(Bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const c=a*this.direction.dot(Es.crossVectors(ui,Es));if(c<0)return null;const l=a*this.direction.dot(Oo.cross(ui));if(l<0||c+l>o)return null;const u=-a*ui.dot(Bo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,r,s,o,a,c,l,u,f,d,p,_,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,f,d,p,_,v,m)}set(t,e,n,r,s,o,a,c,l,u,f,d,p,_,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/mr.setFromMatrixColumn(t,0).length(),s=1/mr.setFromMatrixColumn(t,1).length(),o=1/mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*f,_=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+_*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,_=l*u,v=l*f;e[0]=d+v*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,_=l*u,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*f,_=a*u,v=a*f;e[0]=c*u,e[4]=_*l-p,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,_=a*c,v=a*l;e[0]=c*u,e[4]=v-d*f,e[8]=_*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+_,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*c,p=o*l,_=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=o*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=a*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pf,t,Lf)}lookAt(t,e,n){const r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),hi.crossVectors(n,sn),hi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),hi.crossVectors(n,sn)),hi.normalize(),bs.crossVectors(sn,hi),r[0]=hi.x,r[4]=bs.x,r[8]=sn.x,r[1]=hi.y,r[5]=bs.y,r[9]=sn.y,r[2]=hi.z,r[6]=bs.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],v=n[6],m=n[10],h=n[14],y=n[3],E=n[7],x=n[11],F=n[15],C=r[0],I=r[4],D=r[8],M=r[12],g=r[1],L=r[5],V=r[9],H=r[13],j=r[2],O=r[6],U=r[10],K=r[14],k=r[3],it=r[7],st=r[11],J=r[15];return s[0]=o*C+a*g+c*j+l*k,s[4]=o*I+a*L+c*O+l*it,s[8]=o*D+a*V+c*U+l*st,s[12]=o*M+a*H+c*K+l*J,s[1]=u*C+f*g+d*j+p*k,s[5]=u*I+f*L+d*O+p*it,s[9]=u*D+f*V+d*U+p*st,s[13]=u*M+f*H+d*K+p*J,s[2]=_*C+v*g+m*j+h*k,s[6]=_*I+v*L+m*O+h*it,s[10]=_*D+v*V+m*U+h*st,s[14]=_*M+v*H+m*K+h*J,s[3]=y*C+E*g+x*j+F*k,s[7]=y*I+E*L+x*O+F*it,s[11]=y*D+E*V+x*U+F*st,s[15]=y*M+E*H+x*K+F*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],_=t[3],v=t[7],m=t[11],h=t[15];return _*(+s*c*f-r*l*f-s*a*d+n*l*d+r*a*p-n*c*p)+v*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+e*l*f-e*a*p-s*o*f+n*o*p+s*a*u-n*l*u)+h*(-r*a*u-e*c*f+e*a*d+r*o*f-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],_=t[12],v=t[13],m=t[14],h=t[15],y=f*m*l-v*d*l+v*c*p-a*m*p-f*c*h+a*d*h,E=_*d*l-u*m*l-_*c*p+o*m*p+u*c*h-o*d*h,x=u*v*l-_*f*l+_*a*p-o*v*p-u*a*h+o*f*h,F=_*f*c-u*v*c-_*a*d+o*v*d+u*a*m-o*f*m,C=e*y+n*E+r*x+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return t[0]=y*I,t[1]=(v*d*s-f*m*s-v*r*p+n*m*p+f*r*h-n*d*h)*I,t[2]=(a*m*s-v*c*s+v*r*l-n*m*l-a*r*h+n*c*h)*I,t[3]=(f*c*s-a*d*s-f*r*l+n*d*l+a*r*p-n*c*p)*I,t[4]=E*I,t[5]=(u*m*s-_*d*s+_*r*p-e*m*p-u*r*h+e*d*h)*I,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*h-e*c*h)*I,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*p+e*c*p)*I,t[8]=x*I,t[9]=(_*f*s-u*v*s-_*n*p+e*v*p+u*n*h-e*f*h)*I,t[10]=(o*v*s-_*a*s+_*n*l-e*v*l-o*n*h+e*a*h)*I,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*p-e*a*p)*I,t[12]=F*I,t[13]=(u*v*r-_*f*r+_*n*d-e*v*d-u*n*m+e*f*m)*I,t[14]=(_*a*r-o*v*r-_*n*c+e*v*c+o*n*m-e*a*m)*I,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,_=s*f,v=o*u,m=o*f,h=a*f,y=c*l,E=c*u,x=c*f,F=n.x,C=n.y,I=n.z;return r[0]=(1-(v+h))*F,r[1]=(p+x)*F,r[2]=(_-E)*F,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+h))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(_+E)*I,r[9]=(m-y)*I,r[10]=(1-(d+v))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],En.copy(this);const l=1/s,u=1/o,f=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ii){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(a===ii)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===co)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ii){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(o-s),d=(e+t)*l,p=(n+r)*u;let _,v;if(a===ii)_=(o+s)*f,v=-2*f;else if(a===co)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mr=new q,En=new ve,Pf=new q(0,0,0),Lf=new q(1,1,1),hi=new q,bs=new q,sn=new q,Gc=new ve,Vc=new ms;class Gn{constructor(t=0,e=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let If=0;const Wc=new q,gr=new ms,Kn=new ve,Ts=new q,Kr=new q,Df=new q,Uf=new ms,Xc=new q(1,0,0),qc=new q(0,1,0),Yc=new q(0,0,1),$c={type:"added"},Nf={type:"removed"},_r={type:"childadded",child:null},zo={type:"childremoved",child:null};class Ce extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new q,e=new Gn,n=new ms,r=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new te}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Kr,Ts,this.up):Kn.lookAt(Ts,Kr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Kn),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ce.DEFAULT_UP=new q(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new q,Zn=new q,ko=new q,jn=new q,vr=new q,xr=new q,Kc=new q,Ho=new q,Go=new q,Vo=new q,Wo=new Ae,Xo=new Ae,qo=new Ae;class In{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),bn.subVectors(t,e),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){bn.subVectors(r,e),Zn.subVectors(n,e),ko.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Zn),c=bn.dot(ko),l=Zn.dot(Zn),u=Zn.dot(ko),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Wo,s.x),o.addScaledVector(Xo,s.y),o.addScaledVector(qo,s.z),o}static isFrontFacing(t,e,n,r){return bn.subVectors(n,e),Zn.subVectors(t,e),bn.cross(Zn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return In.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vr.subVectors(r,n),xr.subVectors(s,n),Ho.subVectors(t,n);const c=vr.dot(Ho),l=xr.dot(Ho);if(c<=0&&l<=0)return e.copy(n);Go.subVectors(t,r);const u=vr.dot(Go),f=xr.dot(Go);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(vr,o);Vo.subVectors(t,s);const p=vr.dot(Vo),_=xr.dot(Vo);if(_>=0&&p<=_)return e.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(xr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Kc.subVectors(s,r),a=(f-u)/(f-u+(p-_)),e.copy(r).addScaledVector(Kc,a);const h=1/(m+v+d);return o=v*h,a=d*h,e.copy(n).addScaledVector(vr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},As={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=xf(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Yo(o,s,t+1/3),this.g=Yo(o,s,t),this.b=Yo(o,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return he.fromWorkingColorSpace(We.copy(this),t),Math.round(rn(We.r*255,0,255))*65536+Math.round(rn(We.g*255,0,255))*256+Math.round(rn(We.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(We.copy(this),e);const n=We.r,r=We.g,s=We.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=gn){he.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,r=We.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(As);const n=Po(fi.h,As.h,e),r=Po(fi.s,As.s,e),s=Po(fi.l,As.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Yt;Yt.NAMES=qu;let Ff=0;class rr extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ps(),this.name="",this.blending=Zi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qi extends rr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new q,ws=new ce;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}}class Yu extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $u extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Of=0;const pn=new ve,$o=new Ce,Mr=new q,on=new nr,Zr=new nr,ze=new q;class ke extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?$u:Yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(on.min,Zr.min),on.expandByPoint(ze),ze.addVectors(on.max,Zr.max),on.expandByPoint(ze)):(on.expandByPoint(Zr.min),on.expandByPoint(Zr.max))}on.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(t,l),ze.add(Mr)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new q,c[D]=new q;const l=new q,u=new q,f=new q,d=new ce,p=new ce,_=new ce,v=new q,m=new q;function h(D,M,g){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,g),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,g),u.sub(l),f.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[D].add(v),a[M].add(v),a[g].add(v),c[D].add(m),c[M].add(m),c[g].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,M=y.length;D<M;++D){const g=y[D],L=g.start,V=g.count;for(let H=L,j=L+V;H<j;H+=3)h(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new q,x=new q,F=new q,C=new q;function I(D){F.fromBufferAttribute(r,D),C.copy(F);const M=a[D];E.copy(M),E.sub(F.multiplyScalar(F.dot(M))).normalize(),x.crossVectors(C,M);const L=x.dot(c[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,M=y.length;D<M;++D){const g=y[D],L=g.start,V=g.count;for(let H=L,j=L+V;H<j;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new q,s=new q,o=new q,a=new q,c=new q,l=new q,u=new q,f=new q;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)d[_++]=l[p++]}return new we(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new ve,Pi=new Sc,Rs=new ir,jc=new q,Cs=new q,Ps=new q,Ls=new q,Ko=new q,Is=new q,Jc=new q,Ds=new q;class _e extends Ce{constructor(t=new ke,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Ko.fromBufferAttribute(f,t),o?Is.addScaledVector(Ko,u):Is.addScaledVector(Ko.sub(e),u))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Pi.copy(t.ray).recast(t.near),!(Rs.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Rs,jc)===null||Pi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Zc.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,F=E;x<F;x+=3){const C=a.getX(x),I=a.getX(x+1),D=a.getX(x+2);r=Us(this,h,t,n,l,u,f,C,I,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Us(this,o,t,n,l,u,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,F=E;x<F;x+=3){const C=x,I=x+1,D=x+2;r=Us(this,h,t,n,l,u,f,C,I,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=m,E=m+1,x=m+2;r=Us(this,o,t,n,l,u,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Bf(i,t,e,n,r,s,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ti,a),c===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ds);return l<e.near||l>e.far?null:{distance:l,point:Ds.clone(),object:i}}function Us(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Cs),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ls);const u=Bf(i,t,e,n,Cs,Ps,Ls,Jc);if(u){const f=new q;In.getBarycoord(Jc,Cs,Ps,Ls,f),r&&(u.uv=In.getInterpolatedAttribute(r,a,c,l,f,new ce)),s&&(u.uv1=In.getInterpolatedAttribute(s,a,c,l,f,new ce)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};In.getNormal(Cs,Ps,Ls,d.normal),u.face=d,u.barycoord=f}return u}class Xe extends ke{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function _(v,m,h,y,E,x,F,C,I,D,M){const g=x/I,L=F/D,V=x/2,H=F/2,j=C/2,O=I+1,U=D+1;let K=0,k=0;const it=new q;for(let st=0;st<U;st++){const J=st*L-H;for(let at=0;at<O;at++){const ft=at*g-V;it[v]=ft*y,it[m]=J*E,it[h]=j,l.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[h]=C>0?1:-1,u.push(it.x,it.y,it.z),f.push(at/I),f.push(1-st/D),K+=1}}for(let st=0;st<D;st++)for(let J=0;J<I;J++){const at=d+J+O*st,ft=d+J+O*(st+1),G=d+(J+1)+O*(st+1),ct=d+(J+1)+O*st;c.push(at,ft,ct),c.push(ft,G,ct),k+=6}a.addGroup(p,k,M),p+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Or(i[e]);for(const r in n)t[r]=n[r]}return t}function zf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ku(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const kf={clone:Or,merge:Ze};var Hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends rr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zu extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new q,Qc=new ce,tl=new ce;class _n extends Zu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,tl),e.subVectors(tl,Qc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Co*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Sr=-90,yr=1;class Vf extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Sr,yr,t,e);r.layers=this.layers,this.add(r);const s=new _n(Sr,yr,t,e);s.layers=this.layers,this.add(s);const o=new _n(Sr,yr,t,e);o.layers=this.layers,this.add(o);const a=new _n(Sr,yr,t,e);a.layers=this.layers,this.add(a);const c=new _n(Sr,yr,t,e);c.layers=this.layers,this.add(c);const l=new _n(Sr,yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ju extends Je{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Dr,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wf extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ju(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xe(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Si});s.uniforms.tEquirect.value=e;const o=new _e(r,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=zn),new Vf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Zo=new q,Xf=new q,qf=new te;class Fi{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Zo.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qf.getNormalMatrix(t),r=this.coplanarPoint(Zo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new ir,Ns=new q;class yc{constructor(t=new Fi,e=new Fi,n=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],y=r[13],E=r[14],x=r[15];if(n[0].setComponents(c-s,d-l,m-p,x-h).normalize(),n[1].setComponents(c+s,d+l,m+p,x+h).normalize(),n[2].setComponents(c+o,d+u,m+_,x+y).normalize(),n[3].setComponents(c-o,d-u,m-_,x-y).normalize(),n[4].setComponents(c-a,d-f,m-v,x-E).normalize(),e===ii)n[5].setComponents(c+a,d+f,m+v,x+E).normalize();else if(e===co)n[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ns.x=r.normal.x>0?t.max.x:t.min.x,Ns.y=r.normal.y>0?t.max.y:t.min.y,Ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Yf(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class tr extends ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=e/c,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*d-o;for(let E=0;E<l;E++){const x=E*f-s;_.push(x,-y,0),v.push(0,0,1),m.push(E/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const E=y+l*h,x=y+l*(h+1),F=y+1+l*(h+1),C=y+1+l*h;p.push(E,x,C),p.push(x,F,C)}this.setIndex(p),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.widthSegments,t.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_d=`#define PI 3.141592653589793
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
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,qd=`struct PhysicalMaterial {
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
}`,Yd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,um=`#define LAMBERT
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
}`,hm=`#define MATCAP
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
}`,fm=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,Mm=`#define TOON
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
}`,Sm=`uniform float size;
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
}`,Em=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Am=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:$f,alphahash_pars_fragment:Kf,alphamap_fragment:Zf,alphamap_pars_fragment:jf,alphatest_fragment:Jf,alphatest_pars_fragment:Qf,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:rd,beginnormal_vertex:sd,bsdfs:od,iridescence_fragment:ad,bumpmap_pars_fragment:cd,clipping_planes_fragment:ld,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:hd,clipping_planes_vertex:fd,color_fragment:dd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:_d,cube_uv_reflection_fragment:vd,defaultnormal_vertex:xd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:yd,emissivemap_pars_fragment:Ed,colorspace_fragment:bd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:wd,envmap_pars_fragment:Rd,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:kd,envmap_vertex:Pd,fog_vertex:Ld,fog_pars_vertex:Id,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Fd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Bd,lights_pars_begin:zd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:$d,lights_fragment_end:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Qd,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:rp,metalnessmap_pars_fragment:sp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:up,normal_fragment_begin:hp,normal_fragment_maps:fp,normal_pars_fragment:dp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:Mp,opaque_fragment:Sp,packing:yp,premultiplied_alpha_fragment:Ep,project_vertex:bp,dithering_fragment:Tp,dithering_pars_fragment:Ap,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Lp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:$p,backgroundCube_vert:Kp,backgroundCube_frag:Zp,cube_vert:jp,cube_frag:Jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:rm,linedashed_vert:sm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:um,meshmatcap_vert:hm,meshmatcap_frag:fm,meshnormal_vert:dm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:xm,meshtoon_frag:Mm,points_vert:Sm,points_frag:ym,shadow_vert:Em,shadow_frag:bm,sprite_vert:Tm,sprite_frag:Am},Lt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Bn={basic:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ze([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ze([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ze([Lt.points,Lt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ze([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ze([Lt.common,Lt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ze([Lt.sprite,Lt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ze([Lt.common,Lt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ze([Lt.lights,Lt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Bn.physical={uniforms:Ze([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Fs={r:0,b:0,g:0},Ii=new Gn,wm=new ve;function Rm(i,t,e,n,r,s,o){const a=new Yt(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function _(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function v(y){let E=!1;const x=_(y);x===null?h(a,c):x&&x.isColor&&(h(x,1),E=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const x=_(E);x&&(x.isCubeTexture||x.mapping===xo)?(u===void 0&&(u=new _e(new Xe(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Or(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ii.copy(E.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Ii)),u.material.toneMapped=he.getTransfer(x.colorSpace)!==Se,(f!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _e(new tr(2,2),new Vn({name:"BackgroundMaterial",uniforms:Or(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=he.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,E){y.getRGB(Fs,Ku(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),c=E,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(a,c)},render:v,addToRenderList:m}}function Cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(g,L,V,H,j){let O=!1;const U=f(H,V,L);s!==U&&(s=U,l(s.object)),O=p(g,H,V,j),O&&_(g,H,V,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(g,L,V,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function f(g,L,V){const H=V.wireframe===!0;let j=n[g.id];j===void 0&&(j={},n[g.id]=j);let O=j[L.id];O===void 0&&(O={},j[L.id]=O);let U=O[H];return U===void 0&&(U=d(c()),O[H]=U),U}function d(g){const L=[],V=[],H=[];for(let j=0;j<e;j++)L[j]=0,V[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:H,object:g,attributes:{},index:null}}function p(g,L,V,H){const j=s.attributes,O=L.attributes;let U=0;const K=V.getAttributes();for(const k in K)if(K[k].location>=0){const st=j[k];let J=O[k];if(J===void 0&&(k==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),k==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),st===void 0||st.attribute!==J||J&&st.data!==J.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function _(g,L,V,H){const j={},O=L.attributes;let U=0;const K=V.getAttributes();for(const k in K)if(K[k].location>=0){let st=O[k];st===void 0&&(k==="instanceMatrix"&&g.instanceMatrix&&(st=g.instanceMatrix),k==="instanceColor"&&g.instanceColor&&(st=g.instanceColor));const J={};J.attribute=st,st&&st.data&&(J.data=st.data),j[k]=J,U++}s.attributes=j,s.attributesNum=U,s.index=H}function v(){const g=s.newAttributes;for(let L=0,V=g.length;L<V;L++)g[L]=0}function m(g){h(g,0)}function h(g,L){const V=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;V[g]=1,H[g]===0&&(i.enableVertexAttribArray(g),H[g]=1),j[g]!==L&&(i.vertexAttribDivisor(g,L),j[g]=L)}function y(){const g=s.newAttributes,L=s.enabledAttributes;for(let V=0,H=L.length;V<H;V++)L[V]!==g[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function E(g,L,V,H,j,O,U){U===!0?i.vertexAttribIPointer(g,L,V,j,O):i.vertexAttribPointer(g,L,V,H,j,O)}function x(g,L,V,H){v();const j=H.attributes,O=V.getAttributes(),U=L.defaultAttributeValues;for(const K in O){const k=O[K];if(k.location>=0){let it=j[K];if(it===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(it=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(it=g.instanceColor)),it!==void 0){const st=it.normalized,J=it.itemSize,at=t.get(it);if(at===void 0)continue;const ft=at.buffer,G=at.type,ct=at.bytesPerElement,mt=G===i.INT||G===i.UNSIGNED_INT||it.gpuType===pc;if(it.isInterleavedBufferAttribute){const pt=it.data,Dt=pt.stride,Ut=it.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<k.locationSize;Xt++)h(k.location+Xt,pt.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<k.locationSize;Xt++)m(k.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Xt=0;Xt<k.locationSize;Xt++)E(k.location+Xt,J/k.locationSize,G,st,Dt*ct,(Ut+J/k.locationSize*Xt)*ct,mt)}else{if(it.isInstancedBufferAttribute){for(let pt=0;pt<k.locationSize;pt++)h(k.location+pt,it.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<k.locationSize;pt++)m(k.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let pt=0;pt<k.locationSize;pt++)E(k.location+pt,J/k.locationSize,G,st,J*ct,J/k.locationSize*pt*ct,mt)}}else if(U!==void 0){const st=U[K];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(k.location,st);break;case 3:i.vertexAttrib3fv(k.location,st);break;case 4:i.vertexAttrib4fv(k.location,st);break;default:i.vertexAttrib1fv(k.location,st)}}}}y()}function F(){D();for(const g in n){const L=n[g];for(const V in L){const H=L[V];for(const j in H)u(H[j].object),delete H[j];delete L[V]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;const L=n[g.id];for(const V in L){const H=L[V];for(const j in H)u(H[j].object),delete H[j];delete L[V]}delete n[g.id]}function I(g){for(const L in n){const V=n[L];if(V[g.id]===void 0)continue;const H=V[g.id];for(const j in H)u(H[j].object),delete H[j];delete V[g.id]}}function D(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Pm(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];e.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==si&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==kn&&!D)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:F,maxSamples:C}}function Im(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Fi,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const y=s?0:n,E=y*4;let x=h.clippingState||null;c.value=x,x=u(_,d,E,p);for(let F=0;F!==E;++F)x[F]=e[F];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const h=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Dm(i){let t=new WeakMap;function e(o,a){return a===Ta?o.mapping=Dr:a===Aa&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ta||a===Aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Wf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qu extends Zu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ar=4,el=[.125,.215,.35,.446,.526,.582],Vi=20,jo=new Qu,nl=new Yt;let Jo=null,Qo=0,ta=0,ea=!1;const Oi=(1+Math.sqrt(5))/2,Er=1/Oi,il=[new q(-Oi,Er,0),new q(Oi,Er,0),new q(-Er,0,Oi),new q(Er,0,Oi),new q(0,Oi,-Er),new q(0,Oi,Er),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ds,format:Dn,colorSpace:zr,depthBuffer:!1},r=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(s)),this._blurMaterial=Nm(s,t,e)}return r}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,r){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nl),u.toneMapping=yi,u.autoClear=!1;const p=new Qi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),_=new _e(new Xe,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(nl),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):y===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const E=this._cubeSize;Os(r,y*E,h>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Dr||t.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=il[(r-s-1)%il.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _e(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const h=[];let y=0;for(let I=0;I<Vi;++I){const D=I/v,M=Math.exp(-D*D/2);h.push(M),I===0?y+=M:I<m&&(y+=2*M)}for(let I=0;I<h.length;I++)h[I]=h[I]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const x=this._sizeLods[r],F=3*x*(r>E-Ar?r-E+Ar:0),C=4*(this._cubeSize-x);Os(e,F,C,3*x,2*x),c.setRenderTarget(e),c.render(f,jo)}}function Um(i){const t=[],e=[],n=[];let r=i;const s=i-Ar+1+el.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Ar?c=el[o-i+Ar-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,y=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let C=0;C<p;C++){const I=C%3*2/3-1,D=C>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];y.set(M,v*_*C),E.set(d,m*_*C);const g=[C,C,C,C,C,C];x.set(g,h*_*C)}const F=new ke;F.setAttribute("position",new we(y,v)),F.setAttribute("uv",new we(E,m)),F.setAttribute("faceIndex",new we(x,h)),t.push(F),r>Ar&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(i,t,e){const n=new Ji(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Nm(i,t,e){const n=new Float32Array(Vi),r=new q(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ol(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function al(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function Fm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ta||c===Aa,u=c===Dr||c===Ur;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rl(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new rl(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bm(i,t,e,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let E=0,x=y.length;E<x;E+=3){const F=y[E+0],C=y[E+1],I=y[E+2];d.push(F,C,C,I,I,F)}}else if(_!==void 0){const y=_.array;v=_.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const F=E+0,C=E+1,I=E+2;d.push(F,C,C,I,I,F)}}else return;const m=new(Gu(d)?$u:Yu)(d,1);m.version=v;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function zm(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,d*o,_),e.update(p,n,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function f(d,p,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,_);let h=0;for(let y=0;y<_;y++)h+=p[y]*v[y];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function km(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Hm(i,t,e){const n=new WeakMap,r=new Ae;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let x=a.attributes.position.count*E,F=1;x>t.maxTextureSize&&(F=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const C=new Float32Array(x*F*4*f),I=new Wu(C,x,F,f);I.type=kn,I.needsUpdate=!0;const D=E*4;for(let g=0;g<f;g++){const L=m[g],V=h[g],H=y[g],j=x*F*4*g;for(let O=0;O<L.count;O++){const U=O*D;p===!0&&(r.fromBufferAttribute(L,O),C[j+U+0]=r.x,C[j+U+1]=r.y,C[j+U+2]=r.z,C[j+U+3]=0),_===!0&&(r.fromBufferAttribute(V,O),C[j+U+4]=r.x,C[j+U+5]=r.y,C[j+U+6]=r.z,C[j+U+7]=0),v===!0&&(r.fromBufferAttribute(H,O),C[j+U+8]=r.x,C[j+U+9]=r.y,C[j+U+10]=r.z,C[j+U+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new ce(x,F)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Gm(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class th extends Je{constructor(t,e,n,r,s,o,a,c,l,u=Cr){if(u!==Cr&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cr&&(n=ji),n===void 0&&u===Fr&&(n=Nr),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eh=new Je,cl=new th(1,1),nh=new Wu,ih=new Rf,rh=new ju,ll=[],ul=[],hl=new Float32Array(16),fl=new Float32Array(9),dl=new Float32Array(4);function Hr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ll[r];if(s===void 0&&(s=new Float32Array(r),ll[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),Fe(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),Fe(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),Fe(e,n)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function r0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=Hu,s=cl):s=eh,e.setTexture2D(t||s,r)}function s0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ih,r)}function o0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||rh,r)}function a0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||nh,r)}function c0(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Zm;case 35667:case 35671:return jm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,t){i.uniform1fv(this.addr,t)}function u0(i,t){const e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function h0(i,t){const e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function f0(i,t){const e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){const e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){const e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){const e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function _0(i,t){i.uniform2iv(this.addr,t)}function v0(i,t){i.uniform3iv(this.addr,t)}function x0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function S0(i,t){i.uniform2uiv(this.addr,t)}function y0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function b0(i,t,e){const n=this.cache,r=t.length,s=So(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||eh,s[o])}function T0(i,t,e){const n=this.cache,r=t.length,s=So(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ih,s[o])}function A0(i,t,e){const n=this.cache,r=t.length,s=So(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||rh,s[o])}function w0(i,t,e){const n=this.cache,r=t.length,s=So(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||nh,s[o])}function R0(i){switch(i){case 5126:return l0;case 35664:return u0;case 35665:return h0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return M0;case 36294:return S0;case 36295:return y0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class C0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function pl(i,t){i.seq.push(t),i.map[t.id]=t}function I0(i,t,e){const n=i.name,r=n.length;for(na.lastIndex=0;;){const s=na.exec(n),o=na.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){pl(e,l===void 0?new C0(a,i,t):new P0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new L0(a),pl(e,f)),e=f}}}class so{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);I0(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ml(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D0=37297;let U0=0;function N0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gl=new te;function F0(i){he._getMatrix(gl,he.workingColorSpace,i);const t=`mat3( ${gl.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Mo:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+N0(i.getShaderSource(t),o)}else return r}function O0(i,t){const e=F0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case rf:e="Cineon";break;case Cu:e="ACESFilmic";break;case of:e="AgX";break;case af:e="Neutral";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new q;function z0(){he.getLuminanceCoefficients(Bs);const i=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function H0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function vl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(i){return i.replace(V0,X0)}const W0=new Map;function X0(i,t){let e=ne[t];if(e===void 0){const n=W0.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nc(e)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(i){return i.replace(q0,Y0)}function Y0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function j0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function J0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Q0(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$0(e),l=K0(e),u=Z0(e),f=j0(e),d=J0(e),p=k0(e),_=H0(s),v=r.createProgram();let m,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),h.length>0&&(h+=`
`)):(m=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),h=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?ne.tonemapping_pars_fragment:"",e.toneMapping!==yi?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,O0("linearToOutputTexel",e.outputColorSpace),z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=nc(o),o=vl(o,e),o=xl(o,e),a=nc(a),a=vl(a,e),a=xl(a,e),o=Ml(o),a=Ml(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=y+m+o,x=y+h+a,F=ml(r,r.VERTEX_SHADER,E),C=ml(r,r.FRAGMENT_SHADER,x);r.attachShader(v,F),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(L){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(F).trim(),j=r.getShaderInfoLog(C).trim();let O=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,F,C);else{const K=_l(r,F,"vertex"),k=_l(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+K+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||j==="")&&(U=!1);U&&(L.diagnostics={runnable:O,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(F),r.deleteShader(C),D=new so(r,v),M=G0(r,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,D0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=C,this}let tg=0;class eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ng(t),e.set(t,n)),n}}class ng{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}}function ig(i,t,e,n,r,s,o){const a=new Xu,c=new eg,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,g,L,V,H){const j=V.fog,O=H.geometry,U=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),k=K&&K.mapping===xo?K.image.height:null,it=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=st!==void 0?st.length:0;let at=0;O.morphAttributes.position!==void 0&&(at=1),O.morphAttributes.normal!==void 0&&(at=2),O.morphAttributes.color!==void 0&&(at=3);let ft,G,ct,mt;if(it){const le=Bn[it];ft=le.vertexShader,G=le.fragmentShader}else ft=M.vertexShader,G=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);const pt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Xt=H.isBatchedMesh===!0,ie=!!M.map,jt=!!M.matcap,ee=!!K,N=!!M.aoMap,rt=!!M.lightMap,xt=!!M.bumpMap,At=!!M.normalMap,Mt=!!M.displacementMap,Wt=!!M.emissiveMap,yt=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,w=M.clearcoat>0,z=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,_t=M.transmission>0,vt=S&&!!M.anisotropyMap,St=w&&!!M.clearcoatMap,Gt=w&&!!M.clearcoatNormalMap,ut=w&&!!M.clearcoatRoughnessMap,Tt=et&&!!M.iridescenceMap,Pt=et&&!!M.iridescenceThicknessMap,Rt=Z&&!!M.sheenColorMap,Et=Z&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Nt=!!M.specularColorMap,re=!!M.specularIntensityMap,B=_t&&!!M.transmissionMap,wt=_t&&!!M.thicknessMap,nt=!!M.gradientMap,lt=!!M.alphaMap,gt=M.alphaTest>0,Ct=!!M.alphaHash,$t=!!M.extensions;let pe=yi;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const be={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:ft,fragmentShader:G,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:zr,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:jt,envMap:ee,envMapMode:ee&&K.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:rt,bumpMap:xt,normalMap:At,displacementMap:d&&Mt,emissiveMap:Wt,normalMapObjectSpace:At&&M.normalMapType===hf,normalMapTangentSpace:At&&M.normalMapType===ku,metalnessMap:yt,roughnessMap:R,anisotropy:S,anisotropyMap:vt,clearcoat:w,clearcoatMap:St,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ut,dispersion:z,iridescence:et,iridescenceMap:Tt,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Rt,sheenRoughnessMap:Et,specularMap:qt,specularColorMap:Nt,specularIntensityMap:re,transmission:_t,transmissionMap:B,thicknessMap:wt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===Zi&&M.alphaToCoverage===!1,alphaMap:lt,alphaTest:gt,alphaHash:Ct,combine:M.combine,mapUv:ie&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:rt&&v(M.lightMap.channel),bumpMapUv:xt&&v(M.bumpMap.channel),normalMapUv:At&&v(M.normalMap.channel),displacementMapUv:Mt&&v(M.displacementMap.channel),emissiveMapUv:Wt&&v(M.emissiveMap.channel),metalnessMapUv:yt&&v(M.metalnessMap.channel),roughnessMapUv:R&&v(M.roughnessMap.channel),anisotropyMapUv:vt&&v(M.anisotropyMap.channel),clearcoatMapUv:St&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(M.sheenRoughnessMap.channel),specularMapUv:qt&&v(M.specularMap.channel),specularColorMapUv:Nt&&v(M.specularColorMap.channel),specularIntensityMapUv:re&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:wt&&v(M.thicknessMap.channel),alphaMapUv:lt&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(At||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(ie||lt),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:at,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===Se,decodeVideoTextureEmissive:Wt&&M.emissiveMap.isVideoTexture===!0&&he.getTransfer(M.emissiveMap.colorSpace)===Se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function h(M){const g=[];if(M.shaderID?g.push(M.shaderID):(g.push(M.customVertexShaderID),g.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)g.push(L),g.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(g,M),E(g,M),g.push(i.outputColorSpace)),g.push(M.customProgramCacheKey),g.join()}function y(M,g){M.push(g.precision),M.push(g.outputColorSpace),M.push(g.envMapMode),M.push(g.envMapCubeUVHeight),M.push(g.mapUv),M.push(g.alphaMapUv),M.push(g.lightMapUv),M.push(g.aoMapUv),M.push(g.bumpMapUv),M.push(g.normalMapUv),M.push(g.displacementMapUv),M.push(g.emissiveMapUv),M.push(g.metalnessMapUv),M.push(g.roughnessMapUv),M.push(g.anisotropyMapUv),M.push(g.clearcoatMapUv),M.push(g.clearcoatNormalMapUv),M.push(g.clearcoatRoughnessMapUv),M.push(g.iridescenceMapUv),M.push(g.iridescenceThicknessMapUv),M.push(g.sheenColorMapUv),M.push(g.sheenRoughnessMapUv),M.push(g.specularMapUv),M.push(g.specularColorMapUv),M.push(g.specularIntensityMapUv),M.push(g.transmissionMapUv),M.push(g.thicknessMapUv),M.push(g.combine),M.push(g.fogExp2),M.push(g.sizeAttenuation),M.push(g.morphTargetsCount),M.push(g.morphAttributeCount),M.push(g.numDirLights),M.push(g.numPointLights),M.push(g.numSpotLights),M.push(g.numSpotLightMaps),M.push(g.numHemiLights),M.push(g.numRectAreaLights),M.push(g.numDirLightShadows),M.push(g.numPointLightShadows),M.push(g.numSpotLightShadows),M.push(g.numSpotLightShadowsWithMaps),M.push(g.numLightProbes),M.push(g.shadowMapType),M.push(g.toneMapping),M.push(g.numClippingPlanes),M.push(g.numClipIntersection),M.push(g.depthPacking)}function E(M,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const g=_[M.type];let L;if(g){const V=Bn[g];L=kf.clone(V.uniforms)}else L=M.uniforms;return L}function F(M,g){let L;for(let V=0,H=u.length;V<H;V++){const j=u[V];if(j.cacheKey===g){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Q0(i,g,M,s),u.push(L)),L}function C(M){if(--M.usedTimes===0){const g=u.indexOf(M);u[g]=u[u.length-1],u.pop(),M.destroy()}}function I(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:F,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:D}}function rg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function El(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,d,p,_,v,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),t++,h}function a(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||sg),n.length>1&&n.sort(d||yl),r.length>1&&r.sort(d||yl)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function og(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new El,i.set(n,[o])):r>=s.length?(o=new El,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Yt};break;case"SpotLight":e={position:new q,direction:new q,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lg=0;function ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hg(i){const t=new ag,e=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const r=new q,s=new ve,o=new ve;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,y=0,E=0,x=0,F=0,C=0,I=0;l.sort(ug);for(let M=0,g=l.length;M<g;M++){const L=l[M],V=L.color,H=L.intensity,j=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=V.r*H,f+=V.g*H,d+=V.b*H;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],H);I++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=L.shadow.matrix,y++}n.directional[p]=U,p++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(V).multiplyScalar(H),U.distance=j,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;const K=L.shadow;if(L.map&&(n.spotLightMap[F]=L.map,F++,K.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,L.castShadow){const k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=O,x++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(V).multiplyScalar(H),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=U,m++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const K=L.shadow,k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=U,_++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(H),U.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[h]=U,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==F||D.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,D.directionalLength=p,D.pointLength=_,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=F,D.numLightProbes=I,n.version=lg++)}function c(l,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const E=l[h];if(E.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function bl(i){const t=new hg(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function fg(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new bl(i),t.set(r,[a])):s>=o.length?(a=new bl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class dg extends rr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pg extends rr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function _g(i,t,e){let n=new yc;const r=new ce,s=new ce,o=new Ae,a=new dg({depthPacking:uf}),c=new pg,l={},u=e.maxTextureSize,f={[Ti]:je,[je]:Ti,[vn]:vn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _e(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let h=this.type;this.render=function(C,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),g=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=h!==ti&&this.type===ti,j=h===ti&&this.type!==ti;for(let O=0,U=C.length;O<U;O++){const K=C[O],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const it=k.getFrameExtents();if(r.multiply(it),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/it.x),r.x=s.x*it.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/it.y),r.y=s.y*it.y,k.mapSize.y=s.y)),k.map===null||H===!0||j===!0){const J=this.type!==ti?{minFilter:hn,magFilter:hn}:{};k.map!==null&&k.map.dispose(),k.map=new Ji(r.x,r.y,J),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const st=k.getViewportCount();for(let J=0;J<st;J++){const at=k.getViewport(J);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),V.viewport(o),k.updateMatrices(K,J),n=k.getFrustum(),x(I,D,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===ti&&y(k,D),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(M,g,L)};function y(C,I){const D=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ji(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,D,p,v,null)}function E(C,I,D,M){let g=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)g=L;else if(g=D.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=g.uuid,H=I.uuid;let j=l[V];j===void 0&&(j={},l[V]=j);let O=j[H];O===void 0&&(O=g.clone(),j[H]=O,I.addEventListener("dispose",F)),g=O}if(g.visible=I.visible,g.wireframe=I.wireframe,M===ti?g.side=I.shadowSide!==null?I.shadowSide:I.side:g.side=I.shadowSide!==null?I.shadowSide:f[I.side],g.alphaMap=I.alphaMap,g.alphaTest=I.alphaTest,g.map=I.map,g.clipShadows=I.clipShadows,g.clippingPlanes=I.clippingPlanes,g.clipIntersection=I.clipIntersection,g.displacementMap=I.displacementMap,g.displacementScale=I.displacementScale,g.displacementBias=I.displacementBias,g.wireframeLinewidth=I.wireframeLinewidth,g.linewidth=I.linewidth,D.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=i.properties.get(g);V.light=D}return g}function x(C,I,D,M,g){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=t.update(C),j=C.material;if(Array.isArray(j)){const O=H.groups;for(let U=0,K=O.length;U<K;U++){const k=O[U],it=j[k.materialIndex];if(it&&it.visible){const st=E(C,it,M,g);C.onBeforeShadow(i,C,I,D,H,st,k),i.renderBufferDirect(D,null,H,st,C,k),C.onAfterShadow(i,C,I,D,H,st,k)}}}else if(j.visible){const O=E(C,j,M,g);C.onBeforeShadow(i,C,I,D,H,O,null),i.renderBufferDirect(D,null,H,O,C,null),C.onAfterShadow(i,C,I,D,H,O,null)}}const V=C.children;for(let H=0,j=V.length;H<j;H++)x(V[H],I,D,M,g)}function F(C){C.target.removeEventListener("dispose",F);for(const D in l){const M=l[D],g=C.target.uuid;g in M&&(M[g].dispose(),delete M[g])}}}const vg={[va]:xa,[Ma]:Ea,[Sa]:ba,[Ir]:ya,[xa]:va,[Ea]:Ma,[ba]:Sa,[ya]:Ir};function xg(i,t){function e(){let B=!1;const wt=new Ae;let nt=null;const lt=new Ae(0,0,0,0);return{setMask:function(gt){nt!==gt&&!B&&(i.colorMask(gt,gt,gt,gt),nt=gt)},setLocked:function(gt){B=gt},setClear:function(gt,Ct,$t,pe,be){be===!0&&(gt*=pe,Ct*=pe,$t*=pe),wt.set(gt,Ct,$t,pe),lt.equals(wt)===!1&&(i.clearColor(gt,Ct,$t,pe),lt.copy(wt))},reset:function(){B=!1,nt=null,lt.set(-1,0,0,0)}}}function n(){let B=!1,wt=!1,nt=null,lt=null,gt=null;return{setReversed:function(Ct){if(wt!==Ct){const $t=t.get("EXT_clip_control");wt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const pe=gt;gt=null,this.setClear(pe)}wt=Ct},getReversed:function(){return wt},setTest:function(Ct){Ct?pt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Ct){nt!==Ct&&!B&&(i.depthMask(Ct),nt=Ct)},setFunc:function(Ct){if(wt&&(Ct=vg[Ct]),lt!==Ct){switch(Ct){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Ct}},setLocked:function(Ct){B=Ct},setClear:function(Ct){gt!==Ct&&(wt&&(Ct=1-Ct),i.clearDepth(Ct),gt=Ct)},reset:function(){B=!1,nt=null,lt=null,gt=null,wt=!1}}}function r(){let B=!1,wt=null,nt=null,lt=null,gt=null,Ct=null,$t=null,pe=null,be=null;return{setTest:function(le){B||(le?pt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(le){wt!==le&&!B&&(i.stencilMask(le),wt=le)},setFunc:function(le,De,Oe){(nt!==le||lt!==De||gt!==Oe)&&(i.stencilFunc(le,De,Oe),nt=le,lt=De,gt=Oe)},setOp:function(le,De,Oe){(Ct!==le||$t!==De||pe!==Oe)&&(i.stencilOp(le,De,Oe),Ct=le,$t=De,pe=Oe)},setLocked:function(le){B=le},setClear:function(le){be!==le&&(i.clearStencil(le),be=le)},reset:function(){B=!1,wt=null,nt=null,lt=null,gt=null,Ct=null,$t=null,pe=null,be=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,E=null,x=null,F=null,C=null,I=new Yt(0,0,0),D=0,M=!1,g=null,L=null,V=null,H=null,j=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=K>=2);let it=null,st={};const J=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),ft=new Ae().fromArray(J),G=new Ae().fromArray(at);function ct(B,wt,nt,lt){const gt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(B,Ct),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<nt;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(wt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return Ct}const mt={};mt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(Ir),xt(!1),At(Cc),pt(i.CULL_FACE),N(Si);function pt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Dt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ut(B,wt){return f[B]!==wt?(i.bindFramebuffer(B,wt),f[B]=wt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(B,wt){let nt=p,lt=!1;if(B){nt=d.get(wt),nt===void 0&&(nt=[],d.set(wt,nt));const gt=B.textures;if(nt.length!==gt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,$t=gt.length;Ct<$t;Ct++)nt[Ct]=i.COLOR_ATTACHMENT0+Ct;nt.length=gt.length,lt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(nt)}function ie(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const jt={[Gi]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};jt[Bh]=i.MIN,jt[zh]=i.MAX;const ee={[kh]:i.ZERO,[Hh]:i.ONE,[Gh]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(B,wt,nt,lt,gt,Ct,$t,pe,be,le){if(B===Si){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(pt(i.BLEND),v=!0),B!==Nh){if(B!==m||le!==M){if((h!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),h=Gi,x=Gi),le)switch(B){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,F=null,C=null,I.set(0,0,0),D=0,m=B,M=le}return}gt=gt||wt,Ct=Ct||nt,$t=$t||lt,(wt!==h||gt!==x)&&(i.blendEquationSeparate(jt[wt],jt[gt]),h=wt,x=gt),(nt!==y||lt!==E||Ct!==F||$t!==C)&&(i.blendFuncSeparate(ee[nt],ee[lt],ee[Ct],ee[$t]),y=nt,E=lt,F=Ct,C=$t),(pe.equals(I)===!1||be!==D)&&(i.blendColor(pe.r,pe.g,pe.b,be),I.copy(pe),D=be),m=B,M=!1}function rt(B,wt){B.side===vn?Dt(i.CULL_FACE):pt(i.CULL_FACE);let nt=B.side===je;wt&&(nt=!nt),xt(nt),B.blending===Zi&&B.transparent===!1?N(Si):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const lt=B.stencilWrite;a.setTest(lt),lt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Wt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){g!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),g=B)}function At(B){B!==Ih?(pt(i.CULL_FACE),B!==L&&(B===Cc?i.cullFace(i.BACK):B===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),L=B}function Mt(B){B!==V&&(U&&i.lineWidth(B),V=B)}function Wt(B,wt,nt){B?(pt(i.POLYGON_OFFSET_FILL),(H!==wt||j!==nt)&&(i.polygonOffset(wt,nt),H=wt,j=nt)):Dt(i.POLYGON_OFFSET_FILL)}function yt(B){B?pt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+O-1),it!==B&&(i.activeTexture(B),it=B)}function S(B,wt,nt){nt===void 0&&(it===null?nt=i.TEXTURE0+O-1:nt=it);let lt=st[nt];lt===void 0&&(lt={type:void 0,texture:void 0},st[nt]=lt),(lt.type!==B||lt.texture!==wt)&&(it!==nt&&(i.activeTexture(nt),it=nt),i.bindTexture(B,wt||mt[B]),lt.type=B,lt.texture=wt)}function w(){const B=st[it];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(B){ft.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ft.copy(B))}function Et(B){G.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),G.copy(B))}function qt(B,wt){let nt=l.get(wt);nt===void 0&&(nt=new WeakMap,l.set(wt,nt));let lt=nt.get(B);lt===void 0&&(lt=i.getUniformBlockIndex(wt,B.name),nt.set(B,lt))}function Nt(B,wt){const lt=l.get(wt).get(B);c.get(wt)!==lt&&(i.uniformBlockBinding(wt,lt,B.__bindingPointIndex),c.set(wt,lt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,st={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,E=null,x=null,F=null,C=null,I=new Yt(0,0,0),D=0,M=!1,g=null,L=null,V=null,H=null,j=null,ft.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:Dt,bindFramebuffer:Ut,drawBuffers:Xt,useProgram:ie,setBlending:N,setMaterial:rt,setFlipSided:xt,setCullFace:At,setLineWidth:Mt,setPolygonOffset:Wt,setScissorTest:yt,activeTexture:R,bindTexture:S,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:et,texImage2D:Tt,texImage3D:Pt,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:Gt,texStorage3D:ut,texSubImage2D:Z,texSubImage3D:_t,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:Rt,viewport:Et,reset:re}}function Tl(i,t,e,n){const r=Mg(n);switch(e){case Uu:return i*t;case Fu:return i*t;case Ou:return i*t*2;case _c:return i*t/r.components*r.byteLength;case vc:return i*t/r.components*r.byteLength;case Bu:return i*t*2/r.components*r.byteLength;case xc:return i*t*2/r.components*r.byteLength;case Nu:return i*t*3/r.components*r.byteLength;case Dn:return i*t*4/r.components*r.byteLength;case Mc:return i*t*4/r.components*r.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case La:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ro:case Za:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zu:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mg(i){switch(i){case si:case Lu:return{byteLength:1,components:1};case ls:case Iu:case ds:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case ji:case pc:case kn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):lo("canvas")}function v(R,S,w){let z=1;const et=yt(R);if((et.width>w||et.height>w)&&(z=w/Math.max(et.width,et.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(z*et.width),_t=Math.floor(z*et.height);f===void 0&&(f=_(Z,_t));const vt=S?_(Z,_t):f;return vt.width=Z,vt.height=_t,vt.getContext("2d").drawImage(R,0,0,Z,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+_t+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,S,w,z,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===i.RED&&(w===i.FLOAT&&(Z=i.R32F),w===i.HALF_FLOAT&&(Z=i.R16F),w===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(w===i.UNSIGNED_BYTE&&(Z=i.R8UI),w===i.UNSIGNED_SHORT&&(Z=i.R16UI),w===i.UNSIGNED_INT&&(Z=i.R32UI),w===i.BYTE&&(Z=i.R8I),w===i.SHORT&&(Z=i.R16I),w===i.INT&&(Z=i.R32I)),S===i.RG&&(w===i.FLOAT&&(Z=i.RG32F),w===i.HALF_FLOAT&&(Z=i.RG16F),w===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(w===i.UNSIGNED_BYTE&&(Z=i.RG8UI),w===i.UNSIGNED_SHORT&&(Z=i.RG16UI),w===i.UNSIGNED_INT&&(Z=i.RG32UI),w===i.BYTE&&(Z=i.RG8I),w===i.SHORT&&(Z=i.RG16I),w===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(w===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),w===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),w===i.UNSIGNED_INT&&(Z=i.RGB32UI),w===i.BYTE&&(Z=i.RGB8I),w===i.SHORT&&(Z=i.RGB16I),w===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(w===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),w===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),w===i.UNSIGNED_INT&&(Z=i.RGBA32UI),w===i.BYTE&&(Z=i.RGBA8I),w===i.SHORT&&(Z=i.RGBA16I),w===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&w===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const _t=et?Mo:he.getTransfer(z);w===i.FLOAT&&(Z=i.RGBA32F),w===i.HALF_FLOAT&&(Z=i.RGBA16F),w===i.UNSIGNED_BYTE&&(Z=_t===Se?i.SRGB8_ALPHA8:i.RGBA8),w===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),w===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,S){let w;return R?S===null||S===ji||S===Nr?w=i.DEPTH24_STENCIL8:S===kn?w=i.DEPTH32F_STENCIL8:S===ls&&(w=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===Nr?w=i.DEPTH_COMPONENT24:S===kn?w=i.DEPTH_COMPONENT32F:S===ls&&(w=i.DEPTH_COMPONENT16),w}function F(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&u.delete(S)}function I(R){const S=R.target;S.removeEventListener("dispose",I),g(S)}function D(R){const S=n.get(R);if(S.__webglInit===void 0)return;const w=R.source,z=d.get(w);if(z){const et=z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(R),Object.keys(z).length===0&&d.delete(w)}n.remove(R)}function M(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const w=R.source,z=d.get(w);delete z[S.__cacheKey],o.memory.textures--}function g(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(S.__webglFramebuffer[z]))for(let et=0;et<S.__webglFramebuffer[z].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[z][et]);else i.deleteFramebuffer(S.__webglFramebuffer[z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[z])}else{if(Array.isArray(S.__webglFramebuffer))for(let z=0;z<S.__webglFramebuffer.length;z++)i.deleteFramebuffer(S.__webglFramebuffer[z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let z=0;z<S.__webglColorRenderbuffer.length;z++)S.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const w=R.textures;for(let z=0,et=w.length;z<et;z++){const Z=n.get(w[z]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(w[z])}n.remove(R)}let L=0;function V(){L=0}function H(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function j(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function O(R,S){const w=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&w.__version!==R.version){const z=R.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(w,R,S);return}}e.bindTexture(i.TEXTURE_2D,w.__webglTexture,i.TEXTURE0+S)}function U(R,S){const w=n.get(R);if(R.version>0&&w.__version!==R.version){G(w,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,w.__webglTexture,i.TEXTURE0+S)}function K(R,S){const w=n.get(R);if(R.version>0&&w.__version!==R.version){G(w,R,S);return}e.bindTexture(i.TEXTURE_3D,w.__webglTexture,i.TEXTURE0+S)}function k(R,S){const w=n.get(R);if(R.version>0&&w.__version!==R.version){ct(w,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+S)}const it={[wa]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},st={[hn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},J={[ff]:i.NEVER,[vf]:i.ALWAYS,[df]:i.LESS,[Hu]:i.LEQUAL,[pf]:i.EQUAL,[_f]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function at(R,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===Ro||S.magFilter===vs||S.magFilter===qi||S.minFilter===zn||S.minFilter===Ro||S.minFilter===vs||S.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==vs&&S.minFilter!==qi||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ft(R,S){let w=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const z=S.source;let et=d.get(z);et===void 0&&(et={},d.set(z,et));const Z=j(S);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,w=!0),et[Z].usedTimes++;const _t=et[R.__cacheKey];_t!==void 0&&(et[R.__cacheKey].usedTimes--,_t.usedTimes===0&&M(S)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return w}function G(R,S,w){let z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(z=i.TEXTURE_3D);const et=ft(R,S),Z=S.source;e.bindTexture(z,R.__webglTexture,i.TEXTURE0+w);const _t=n.get(Z);if(Z.version!==_t.__version||et===!0){e.activeTexture(i.TEXTURE0+w);const vt=he.getPrimaries(he.workingColorSpace),St=S.colorSpace===vi?null:he.getPrimaries(S.colorSpace),Gt=S.colorSpace===vi||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ut=v(S.image,!1,r.maxTextureSize);ut=Wt(S,ut);const Tt=s.convert(S.format,S.colorSpace),Pt=s.convert(S.type);let Rt=E(S.internalFormat,Tt,Pt,S.colorSpace,S.isVideoTexture);at(z,S);let Et;const qt=S.mipmaps,Nt=S.isVideoTexture!==!0,re=_t.__version===void 0||et===!0,B=Z.dataReady,wt=F(S,ut);if(S.isDepthTexture)Rt=x(S.format===Fr,S.type),re&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Tt,Pt,null));else if(S.isDataTexture)if(qt.length>0){Nt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,Rt,qt[0].width,qt[0].height);for(let nt=0,lt=qt.length;nt<lt;nt++)Et=qt[nt],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Et.width,Et.height,Tt,Pt,Et.data):e.texImage2D(i.TEXTURE_2D,nt,Rt,Et.width,Et.height,0,Tt,Pt,Et.data);S.generateMipmaps=!1}else Nt?(re&&e.texStorage2D(i.TEXTURE_2D,wt,Rt,ut.width,ut.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Tt,Pt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Tt,Pt,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Rt,qt[0].width,qt[0].height,ut.depth);for(let nt=0,lt=qt.length;nt<lt;nt++)if(Et=qt[nt],S.format!==Dn)if(Tt!==null)if(Nt){if(B)if(S.layerUpdates.size>0){const gt=Tl(Et.width,Et.height,S.format,S.type);for(const Ct of S.layerUpdates){const $t=Et.data.subarray(Ct*gt/Et.data.BYTES_PER_ELEMENT,(Ct+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ct,Et.width,Et.height,1,Tt,$t)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Et.width,Et.height,ut.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Rt,Et.width,Et.height,ut.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Et.width,Et.height,ut.depth,Tt,Pt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Rt,Et.width,Et.height,ut.depth,0,Tt,Pt,Et.data)}else{Nt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,Rt,qt[0].width,qt[0].height);for(let nt=0,lt=qt.length;nt<lt;nt++)Et=qt[nt],S.format!==Dn?Tt!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Et.width,Et.height,Tt,Pt,Et.data):e.texImage2D(i.TEXTURE_2D,nt,Rt,Et.width,Et.height,0,Tt,Pt,Et.data)}else if(S.isDataArrayTexture)if(Nt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Rt,ut.width,ut.height,ut.depth),B)if(S.layerUpdates.size>0){const nt=Tl(ut.width,ut.height,S.format,S.type);for(const lt of S.layerUpdates){const gt=ut.data.subarray(lt*nt/ut.data.BYTES_PER_ELEMENT,(lt+1)*nt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,Tt,Pt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Pt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,ut.width,ut.height,ut.depth,0,Tt,Pt,ut.data);else if(S.isData3DTexture)Nt?(re&&e.texStorage3D(i.TEXTURE_3D,wt,Rt,ut.width,ut.height,ut.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Pt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,ut.width,ut.height,ut.depth,0,Tt,Pt,ut.data);else if(S.isFramebufferTexture){if(re)if(Nt)e.texStorage2D(i.TEXTURE_2D,wt,Rt,ut.width,ut.height);else{let nt=ut.width,lt=ut.height;for(let gt=0;gt<wt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Rt,nt,lt,0,Tt,Pt,null),nt>>=1,lt>>=1}}else if(qt.length>0){if(Nt&&re){const nt=yt(qt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Rt,nt.width,nt.height)}for(let nt=0,lt=qt.length;nt<lt;nt++)Et=qt[nt],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Tt,Pt,Et):e.texImage2D(i.TEXTURE_2D,nt,Rt,Tt,Pt,Et);S.generateMipmaps=!1}else if(Nt){if(re){const nt=yt(ut);e.texStorage2D(i.TEXTURE_2D,wt,Rt,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Pt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Rt,Tt,Pt,ut);m(S)&&h(z),_t.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ct(R,S,w){if(S.image.length!==6)return;const z=ft(R,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+w);const Z=n.get(et);if(et.version!==Z.__version||z===!0){e.activeTexture(i.TEXTURE0+w);const _t=he.getPrimaries(he.workingColorSpace),vt=S.colorSpace===vi?null:he.getPrimaries(S.colorSpace),St=S.colorSpace===vi||_t===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,Tt=[];for(let lt=0;lt<6;lt++)!Gt&&!ut?Tt[lt]=v(S.image[lt],!0,r.maxCubemapSize):Tt[lt]=ut?S.image[lt].image:S.image[lt],Tt[lt]=Wt(S,Tt[lt]);const Pt=Tt[0],Rt=s.convert(S.format,S.colorSpace),Et=s.convert(S.type),qt=E(S.internalFormat,Rt,Et,S.colorSpace),Nt=S.isVideoTexture!==!0,re=Z.__version===void 0||z===!0,B=et.dataReady;let wt=F(S,Pt);at(i.TEXTURE_CUBE_MAP,S);let nt;if(Gt){Nt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,qt,Pt.width,Pt.height);for(let lt=0;lt<6;lt++){nt=Tt[lt].mipmaps;for(let gt=0;gt<nt.length;gt++){const Ct=nt[gt];S.format!==Dn?Rt!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt,qt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt,0,0,Ct.width,Ct.height,Rt,Et,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt,qt,Ct.width,Ct.height,0,Rt,Et,Ct.data)}}}else{if(nt=S.mipmaps,Nt&&re){nt.length>0&&wt++;const lt=yt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt[lt].width,Tt[lt].height,Rt,Et,Tt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Tt[lt].width,Tt[lt].height,0,Rt,Et,Tt[lt].data);for(let gt=0;gt<nt.length;gt++){const $t=nt[gt].image[lt].image;Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt+1,0,0,$t.width,$t.height,Rt,Et,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt+1,qt,$t.width,$t.height,0,Rt,Et,$t.data)}}else{Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt,Et,Tt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Rt,Et,Tt[lt]);for(let gt=0;gt<nt.length;gt++){const Ct=nt[gt];Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt+1,0,0,Rt,Et,Ct.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt+1,qt,Rt,Et,Ct.image[lt])}}}m(S)&&h(i.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,w,z,et,Z){const _t=s.convert(w.format,w.colorSpace),vt=s.convert(w.type),St=E(w.internalFormat,_t,vt,w.colorSpace),Gt=n.get(S),ut=n.get(w);if(ut.__renderTarget=S,!Gt.__hasExternalTextures){const Tt=Math.max(1,S.width>>Z),Pt=Math.max(1,S.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,St,Tt,Pt,S.depth,0,_t,vt,null):e.texImage2D(et,Z,St,Tt,Pt,0,_t,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,et,ut.__webglTexture,0,xt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,et,ut.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,S,w){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const z=S.depthTexture,et=z&&z.isDepthTexture?z.type:null,Z=x(S.stencilBuffer,et),_t=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=xt(S);At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,Z,S.width,S.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,R)}else{const z=S.textures;for(let et=0;et<z.length;et++){const Z=z[et],_t=s.convert(Z.format,Z.colorSpace),vt=s.convert(Z.type),St=E(Z.internalFormat,_t,vt,Z.colorSpace),Gt=xt(S);w&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,S.width,S.height):At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,St,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,St,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(S.depthTexture);z.__renderTarget=S,(!z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const et=z.__webglTexture,Z=xt(S);if(S.depthTexture.format===Cr)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===Fr)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ut(R){const S=n.get(R),w=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),z){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,z.removeEventListener("dispose",et)};z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,R)}else if(w){S.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[z]),S.__webglDepthbuffer[z]===void 0)S.__webglDepthbuffer[z]=i.createRenderbuffer(),pt(S.__webglDepthbuffer[z],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),pt(S.__webglDepthbuffer,R,!1);else{const z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(R,S,w){const z=n.get(R);S!==void 0&&mt(z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),w!==void 0&&Ut(R)}function ie(R){const S=R.texture,w=n.get(R),z=n.get(S);R.addEventListener("dispose",I);const et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=S.version,o.memory.textures++),Z){w.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){w.__webglFramebuffer[vt]=[];for(let St=0;St<S.mipmaps.length;St++)w.__webglFramebuffer[vt][St]=i.createFramebuffer()}else w.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){w.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)w.__webglFramebuffer[vt]=i.createFramebuffer()}else w.__webglFramebuffer=i.createFramebuffer();if(_t)for(let vt=0,St=et.length;vt<St;vt++){const Gt=n.get(et[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&At(R)===!1){w.__webglMultisampledFramebuffer=i.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let vt=0;vt<et.length;vt++){const St=et[vt];w.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,w.__webglColorRenderbuffer[vt]);const Gt=s.convert(St.format,St.colorSpace),ut=s.convert(St.type),Tt=E(St.internalFormat,Gt,ut,St.colorSpace,R.isXRRenderTarget===!0),Pt=xt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,w.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(w.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(w.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)mt(w.__webglFramebuffer[vt][St],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else mt(w.__webglFramebuffer[vt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(S)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let vt=0,St=et.length;vt<St;vt++){const Gt=et[vt],ut=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),at(i.TEXTURE_2D,Gt),mt(w.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Gt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,z.__webglTexture),at(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)mt(w.__webglFramebuffer[St],R,S,i.COLOR_ATTACHMENT0,vt,St);else mt(w.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,vt,0);m(S)&&h(vt),e.unbindTexture()}R.depthBuffer&&Ut(R)}function jt(R){const S=R.textures;for(let w=0,z=S.length;w<z;w++){const et=S[w];if(m(et)){const Z=y(R),_t=n.get(et).__webglTexture;e.bindTexture(Z,_t),h(Z),e.unbindTexture()}}}const ee=[],N=[];function rt(R){if(R.samples>0){if(At(R)===!1){const S=R.textures,w=R.width,z=R.height;let et=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(R),vt=S.length>1;if(vt)for(let St=0;St<S.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<S.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);const Gt=n.get(S[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,w,z,0,0,w,z,et,i.NEAREST),c===!0&&(ee.length=0,N.length=0,ee.push(i.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(Z),N.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<S.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);const Gt=n.get(S[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function xt(R){return Math.min(r.maxSamples,R.samples)}function At(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Wt(R,S){const w=R.colorSpace,z=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||w!==zr&&w!==vi&&(he.getTransfer(w)===Se?(z!==Dn||et!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),S}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Xt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=At}function yg(i,t){function e(n,r=vi){let s;const o=he.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.BYTE;if(n===Iu)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Nu)return i.RGB;if(n===Dn)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Ou)return i.LUMINANCE_ALPHA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===xc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===La||n===Ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ua||n===Na)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Da||n===Ua)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Na)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===Za||n===ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ro)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===Ja||n===Qa||n===tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Eg extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Hn extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends kr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,_=null;const v=new wg,m=e.getContextAttributes();let h=null,y=null;const E=[],x=[],F=new ce;let C=null;const I=new _n;I.viewport=new Ae;const D=new _n;D.viewport=new Ae;const M=[I,D],g=new Eg;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ct=E[G];return ct===void 0&&(ct=new ia,E[G]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(G){let ct=E[G];return ct===void 0&&(ct=new ia,E[G]=ct),ct.getGripSpace()},this.getHand=function(G){let ct=E[G];return ct===void 0&&(ct=new ia,E[G]=ct),ct.getHandSpace()};function H(G){const ct=x.indexOf(G.inputSource);if(ct===-1)return;const mt=E[ct];mt!==void 0&&(mt.update(G.inputSource,G.frame,l||o),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",O);for(let G=0;G<E.length;G++){const ct=x[G];ct!==null&&(x[G]=null,E[G].disconnect(ct))}L=null,V=null,v.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,y=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,mt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Fr:Cr,mt=m.stencil?Nr:ji);const Dt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Dt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ji(d.textureWidth,d.textureHeight,{format:Dn,type:si,depthTexture:new th(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(G){for(let ct=0;ct<G.removed.length;ct++){const mt=G.removed[ct],pt=x.indexOf(mt);pt>=0&&(x[pt]=null,E[pt].disconnect(mt))}for(let ct=0;ct<G.added.length;ct++){const mt=G.added[ct];let pt=x.indexOf(mt);if(pt===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=x.length){x.push(mt),pt=Ut;break}else if(x[Ut]===null){x[Ut]=mt,pt=Ut;break}if(pt===-1)break}const Dt=E[pt];Dt&&Dt.connect(mt)}}const U=new q,K=new q;function k(G,ct,mt){U.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(mt.matrixWorld);const pt=U.distanceTo(K),Dt=ct.projectionMatrix.elements,Ut=mt.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),ie=Dt[14]/(Dt[10]+1),jt=(Dt[9]+1)/Dt[5],ee=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],rt=(Ut[8]+1)/Ut[0],xt=Xt*N,At=Xt*rt,Mt=pt/(-N+rt),Wt=Mt*-N;if(ct.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Wt),G.translateZ(Mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Dt[10]===-1)G.projectionMatrix.copy(ct.projectionMatrix),G.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const yt=Xt+Mt,R=ie+Mt,S=xt-Wt,w=At+(pt-Wt),z=jt*ie/R*yt,et=ee*ie/R*yt;G.projectionMatrix.makePerspective(S,w,z,et,yt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function it(G,ct){ct===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ct.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ct=G.near,mt=G.far;v.texture!==null&&(v.depthNear>0&&(ct=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),g.near=D.near=I.near=ct,g.far=D.far=I.far=mt,(L!==g.near||V!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),L=g.near,V=g.far),I.layers.mask=G.layers.mask|2,D.layers.mask=G.layers.mask|4,g.layers.mask=I.layers.mask|D.layers.mask;const pt=G.parent,Dt=g.cameras;it(g,pt);for(let Ut=0;Ut<Dt.length;Ut++)it(Dt[Ut],pt);Dt.length===2?k(g,I,D):g.projectionMatrix.copy(I.projectionMatrix),st(G,g,pt)};function st(G,ct,mt){mt===null?G.matrix.copy(ct.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(ct.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ct.projectionMatrix),G.projectionMatrixInverse.copy(ct.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ec*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let J=null;function at(G,ct){if(u=ct.getViewerPose(l||o),_=ct,u!==null){const mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let pt=!1;mt.length!==g.cameras.length&&(g.cameras.length=0,pt=!0);for(let Ut=0;Ut<mt.length;Ut++){const Xt=mt[Ut];let ie=null;if(p!==null)ie=p.getViewport(Xt);else{const ee=f.getViewSubImage(d,Xt);ie=ee.viewport,Ut===0&&(t.setRenderTargetTextures(y,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(y))}let jt=M[Ut];jt===void 0&&(jt=new _n,jt.layers.enable(Ut),jt.viewport=new Ae,M[Ut]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ut===0&&(g.matrix.copy(jt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),pt===!0&&g.cameras.push(jt)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ut=f.getDepthInformation(mt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,r.renderState)}}for(let mt=0;mt<E.length;mt++){const pt=x[mt],Dt=E[mt];pt!==null&&Dt!==void 0&&Dt.update(pt,ct,l||o)}J&&J(G,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),_=null}const ft=new Ju;ft.setAnimationLoop(at),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}const Di=new Gn,Cg=new ve;function Pg(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ku(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,y,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===je&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===je&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=t.get(h),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,y,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=E*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===je&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const x=E.program;n.uniformBlockBinding(y,x)}function l(y,E){let x=r[y.id];x===void 0&&(_(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const F=E.program;n.updateUBOMapping(y,F);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const E=f();y.__bindingPointIndex=E;const x=i.createBuffer(),F=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=r[y.id],x=y.uniforms,F=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,I=x.length;C<I;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,g=D.length;M<g;M++){const L=D[M];if(p(L,C,M,F)===!0){const V=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let O=0;O<H.length;O++){const U=H[O],K=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,V+j,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,x,F){const C=y.value,I=E+"_"+x;if(F[I]===void 0)return typeof C=="number"||typeof C=="boolean"?F[I]=C:F[I]=C.clone(),!0;{const D=F[I];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return F[I]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(y){const E=y.uniforms;let x=0;const F=16;for(let I=0,D=E.length;I<D;I++){const M=Array.isArray(E[I])?E[I]:[E[I]];for(let g=0,L=M.length;g<L;g++){const V=M[g],H=Array.isArray(V.value)?V.value:[V.value];for(let j=0,O=H.length;j<O;j++){const U=H[j],K=v(U),k=x%F,it=k%K.boundary,st=k+it;x+=it,st!==0&&F-st<K.storage&&(x+=F-st),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=K.storage}}}const C=x%F;return C>0&&(x+=F-C),y.__size=x,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Ig{constructor(t={}){const{canvas:e=Mf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let F=!1,C=0,I=0,D=null,M=-1,g=null;const L=new Ae,V=new Ae;let H=null;const j=new Yt(0);let O=0,U=e.width,K=e.height,k=1,it=null,st=null;const J=new Ae(0,0,U,K),at=new Ae(0,0,U,K);let ft=!1;const G=new yc;let ct=!1,mt=!1;const pt=new ve,Dt=new ve,Ut=new q,Xt=new Ae,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ee(){return D===null?k:1}let N=n;function rt(T,W){return e.getContext(T,W)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),N===null){const W="webgl2";if(N=rt(W,T),N===null)throw rt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xt,At,Mt,Wt,yt,R,S,w,z,et,Z,_t,vt,St,Gt,ut,Tt,Pt,Rt,Et,qt,Nt,re,B;function wt(){xt=new Om(N),xt.init(),Nt=new yg(N,xt),At=new Lm(N,xt,t,Nt),Mt=new xg(N,xt),At.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Wt=new km(N),yt=new rg,R=new Sg(N,xt,Mt,yt,At,Nt,Wt),S=new Dm(x),w=new Fm(x),z=new Yf(N),re=new Cm(N,z),et=new Bm(N,z,Wt,re),Z=new Gm(N,et,z,Wt),Rt=new Hm(N,At,R),ut=new Im(yt),_t=new ig(x,S,w,xt,At,re,ut),vt=new Pg(x,yt),St=new og,Gt=new fg(xt),Pt=new Rm(x,S,w,Mt,Z,p,c),Tt=new _g(x,Z,At),B=new Lg(N,Wt,At,Mt),Et=new Pm(N,xt,Wt),qt=new zm(N,xt,Wt),Wt.programs=_t.programs,x.capabilities=At,x.extensions=xt,x.properties=yt,x.renderLists=St,x.shadowMap=Tt,x.state=Mt,x.info=Wt}wt();const nt=new Rg(x,N);this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(U,K,!1))},this.getSize=function(T){return T.set(U,K)},this.setSize=function(T,W,tt=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,K=W,e.width=Math.floor(T*k),e.height=Math.floor(W*k),tt===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(U*k,K*k).floor()},this.setDrawingBufferSize=function(T,W,tt){U=T,K=W,k=tt,e.width=Math.floor(T*tt),e.height=Math.floor(W*tt),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,W,tt,Q){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,W,tt,Q),Mt.viewport(L.copy(J).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,W,tt,Q){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,W,tt,Q),Mt.scissor(V.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(T){Mt.setScissorTest(ft=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,W=!0,tt=!0){let Q=0;if(T){let X=!1;if(D!==null){const bt=D.texture.format;X=bt===Mc||bt===xc||bt===vc}if(X){const bt=D.texture.type,It=bt===si||bt===ji||bt===ls||bt===Nr||bt===mc||bt===gc,Bt=Pt.getClearColor(),Ot=Pt.getClearAlpha(),Zt=Bt.r,Qt=Bt.g,zt=Bt.b;It?(_[0]=Zt,_[1]=Qt,_[2]=zt,_[3]=Ot,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=Zt,v[1]=Qt,v[2]=zt,v[3]=Ot,N.clearBufferiv(N.COLOR,0,v))}else Q|=N.COLOR_BUFFER_BIT}W&&(Q|=N.DEPTH_BUFFER_BIT),tt&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),St.dispose(),Gt.dispose(),yt.dispose(),S.dispose(),w.dispose(),Z.dispose(),re.dispose(),B.dispose(),_t.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Gr),nt.removeEventListener("sessionend",Vr),Un.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=Wt.autoReset,W=Tt.enabled,tt=Tt.autoUpdate,Q=Tt.needsUpdate,X=Tt.type;wt(),Wt.autoReset=T,Tt.enabled=W,Tt.autoUpdate=tt,Tt.needsUpdate=Q,Tt.type=X}function Ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $t(T){const W=T.target;W.removeEventListener("dispose",$t),pe(W)}function pe(T){be(T),yt.remove(T)}function be(T){const W=yt.get(T).programs;W!==void 0&&(W.forEach(function(tt){_t.releaseProgram(tt)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,tt,Q,X,bt){W===null&&(W=ie);const It=X.isMesh&&X.matrixWorld.determinant()<0,Bt=cr(T,W,tt,Q,X);Mt.setMaterial(Q,It);let Ot=tt.index,Zt=1;if(Q.wireframe===!0){if(Ot=et.getWireframeAttribute(tt),Ot===void 0)return;Zt=2}const Qt=tt.drawRange,zt=tt.attributes.position;let se=Qt.start*Zt,me=(Qt.start+Qt.count)*Zt;bt!==null&&(se=Math.max(se,bt.start*Zt),me=Math.min(me,(bt.start+bt.count)*Zt)),Ot!==null?(se=Math.max(se,0),me=Math.min(me,Ot.count)):zt!=null&&(se=Math.max(se,0),me=Math.min(me,zt.count));const ye=me-se;if(ye<0||ye===1/0)return;re.setup(X,Q,Bt,tt,Ot);let He,fe=Et;if(Ot!==null&&(He=z.get(Ot),fe=qt,fe.setIndex(He)),X.isMesh)Q.wireframe===!0?(Mt.setLineWidth(Q.wireframeLinewidth*ee()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(X.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),Mt.setLineWidth(Vt*ee()),X.isLineSegments?fe.setMode(N.LINES):X.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else X.isPoints?fe.setMode(N.POINTS):X.isSprite&&fe.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)fe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))fe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,xn=X._multiDrawCounts,de=X._multiDrawCount,Qe=Ot?z.get(Ot).bytesPerElement:1,ai=yt.get(Q).currentProgram.getUniforms();for(let qe=0;qe<de;qe++)ai.setValue(N,"_gl_DrawID",qe),fe.render(Vt[qe]/Qe,xn[qe])}else if(X.isInstancedMesh)fe.renderInstances(se,ye,X.count);else if(tt.isInstancedBufferGeometry){const Vt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,xn=Math.min(tt.instanceCount,Vt);fe.renderInstances(se,ye,xn)}else fe.render(se,ye)};function le(T,W,tt){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,or(T,W,tt),T.side=Ti,T.needsUpdate=!0,or(T,W,tt),T.side=vn):or(T,W,tt)}this.compile=function(T,W,tt=null){tt===null&&(tt=T),h=Gt.get(tt),h.init(W),E.push(h),tt.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),T!==tt&&T.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights();const Q=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const bt=X.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Bt=bt[It];le(Bt,tt,X),Q.add(Bt)}else le(bt,tt,X),Q.add(bt)}),E.pop(),h=null,Q},this.compileAsync=function(T,W,tt=null){const Q=this.compile(T,W,tt);return new Promise(X=>{function bt(){if(Q.forEach(function(It){yt.get(It).currentProgram.isReady()&&Q.delete(It)}),Q.size===0){X(T);return}setTimeout(bt,10)}xt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let De=null;function Oe(T){De&&De(T)}function Gr(){Un.stop()}function Vr(){Un.start()}const Un=new Ju;Un.setAnimationLoop(Oe),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(T){De=T,nt.setAnimationLoop(T),T===null?Un.stop():Un.start()},nt.addEventListener("sessionstart",Gr),nt.addEventListener("sessionend",Vr),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,W,D),h=Gt.get(T,E.length),h.init(W),E.push(h),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(Dt),mt=this.localClippingEnabled,ct=ut.init(this.clippingPlanes,mt),m=St.get(T,y.length),m.init(),y.push(m),nt.enabled===!0&&nt.isPresenting===!0){const bt=x.xr.getDepthSensingMesh();bt!==null&&Nn(bt,W,-1/0,x.sortObjects)}Nn(T,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,st),jt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,jt&&Pt.addToRenderList(m,T),this.info.render.frame++,ct===!0&&ut.beginShadows();const tt=h.state.shadowsArray;Tt.render(tt,T,W),ct===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,X=m.transmissive;if(h.setupLights(),W.isArrayCamera){const bt=W.cameras;if(X.length>0)for(let It=0,Bt=bt.length;It<Bt;It++){const Ot=bt[It];Ai(Q,X,T,Ot)}jt&&Pt.render(T);for(let It=0,Bt=bt.length;It<Bt;It++){const Ot=bt[It];Wr(m,T,Ot,Ot.viewport)}}else X.length>0&&Ai(Q,X,T,W),jt&&Pt.render(T),Wr(m,T,W);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(x,T,W),re.resetDefaultState(),M=-1,g=null,E.pop(),E.length>0?(h=E[E.length-1],ct===!0&&ut.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Nn(T,W,tt,Q){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){Q&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const It=Z.update(T),Bt=T.material;Bt.visible&&m.push(T,It,Bt,tt,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){const It=Z.update(T),Bt=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Xt.copy(It.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(Bt)){const Ot=It.groups;for(let Zt=0,Qt=Ot.length;Zt<Qt;Zt++){const zt=Ot[Zt],se=Bt[zt.materialIndex];se&&se.visible&&m.push(T,It,se,tt,Xt.z,zt)}}else Bt.visible&&m.push(T,It,Bt,tt,Xt.z,null)}}const bt=T.children;for(let It=0,Bt=bt.length;It<Bt;It++)Nn(bt[It],W,tt,Q)}function Wr(T,W,tt,Q){const X=T.opaque,bt=T.transmissive,It=T.transparent;h.setupLightsView(tt),ct===!0&&ut.setGlobalState(x.clippingPlanes,tt),Q&&Mt.viewport(L.copy(Q)),X.length>0&&sr(X,W,tt),bt.length>0&&sr(bt,W,tt),It.length>0&&sr(It,W,tt),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ai(T,W,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Q.id]===void 0&&(h.state.transmissionRenderTarget[Q.id]=new Ji(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?ds:si,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const bt=h.state.transmissionRenderTarget[Q.id],It=Q.viewport||L;bt.setSize(It.z,It.w);const Bt=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(j),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),jt&&Pt.render(tt);const Ot=x.toneMapping;x.toneMapping=yi;const Zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),h.setupLightsView(Q),ct===!0&&ut.setGlobalState(x.clippingPlanes,Q),sr(T,tt,Q),R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let zt=0,se=W.length;zt<se;zt++){const me=W[zt],ye=me.object,He=me.geometry,fe=me.material,Vt=me.group;if(fe.side===vn&&ye.layers.test(Q.layers)){const xn=fe.side;fe.side=je,fe.needsUpdate=!0,_s(ye,tt,Q,He,fe,Vt),fe.side=xn,fe.needsUpdate=!0,Qt=!0}}Qt===!0&&(R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt))}x.setRenderTarget(Bt),x.setClearColor(j,O),Zt!==void 0&&(Q.viewport=Zt),x.toneMapping=Ot}function sr(T,W,tt){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,bt=T.length;X<bt;X++){const It=T[X],Bt=It.object,Ot=It.geometry,Zt=Q===null?It.material:Q,Qt=It.group;Bt.layers.test(tt.layers)&&_s(Bt,W,tt,Ot,Zt,Qt)}}function _s(T,W,tt,Q,X,bt){T.onBeforeRender(x,W,tt,Q,X,bt),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(x,W,tt,Q,T,bt),X.transparent===!0&&X.side===vn&&X.forceSinglePass===!1?(X.side=je,X.needsUpdate=!0,x.renderBufferDirect(tt,W,Q,X,T,bt),X.side=Ti,X.needsUpdate=!0,x.renderBufferDirect(tt,W,Q,X,T,bt),X.side=vn):x.renderBufferDirect(tt,W,Q,X,T,bt),T.onAfterRender(x,W,tt,Q,X,bt)}function or(T,W,tt){W.isScene!==!0&&(W=ie);const Q=yt.get(T),X=h.state.lights,bt=h.state.shadowsArray,It=X.state.version,Bt=_t.getParameters(T,X.state,bt,W,tt),Ot=_t.getProgramCacheKey(Bt);let Zt=Q.programs;Q.environment=T.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(T.isMeshStandardMaterial?w:S).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",$t),Zt=new Map,Q.programs=Zt);let Qt=Zt.get(Ot);if(Qt!==void 0){if(Q.currentProgram===Qt&&Q.lightsStateVersion===It)return ar(T,Bt),Qt}else Bt.uniforms=_t.getUniforms(T),T.onBeforeCompile(Bt,x),Qt=_t.acquireProgram(Bt,Ot),Zt.set(Ot,Qt),Q.uniforms=Bt.uniforms;const zt=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=ut.uniform),ar(T,Bt),Q.needsLights=fn(T),Q.lightsStateVersion=It,Q.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Qt,Q.uniformsList=null,Qt}function oi(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=so.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function ar(T,W){const tt=yt.get(T);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.batchingColor=W.batchingColor,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.instancingMorph=W.instancingMorph,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function cr(T,W,tt,Q,X){W.isScene!==!0&&(W=ie),R.resetTextureUnits();const bt=W.fog,It=Q.isMeshStandardMaterial?W.environment:null,Bt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zr,Ot=(Q.isMeshStandardMaterial?w:S).get(Q.envMap||It),Zt=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),zt=!!tt.morphAttributes.position,se=!!tt.morphAttributes.normal,me=!!tt.morphAttributes.color;let ye=yi;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ye=x.toneMapping);const He=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,fe=He!==void 0?He.length:0,Vt=yt.get(Q),xn=h.state.lights;if(ct===!0&&(mt===!0||T!==g)){const tn=T===g&&Q.id===M;ut.setState(Q,T,tn)}let de=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==xn.state.version||Vt.outputColorSpace!==Bt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Ot||Q.fog===!0&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ut.numPlanes||Vt.numIntersection!==ut.numIntersection)||Vt.vertexAlphas!==Zt||Vt.vertexTangents!==Qt||Vt.morphTargets!==zt||Vt.morphNormals!==se||Vt.morphColors!==me||Vt.toneMapping!==ye||Vt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Vt.__version=Q.version);let Qe=Vt.currentProgram;de===!0&&(Qe=or(Q,W,X));let ai=!1,qe=!1,wi=!1;const xe=Qe.getUniforms(),dn=Vt.uniforms;if(Mt.useProgram(Qe.program)&&(ai=!0,qe=!0,wi=!0),Q.id!==M&&(M=Q.id,qe=!0),ai||g!==T){Mt.buffers.depth.getReversed()?(pt.copy(T.projectionMatrix),yf(pt),Ef(pt),xe.setValue(N,"projectionMatrix",pt)):xe.setValue(N,"projectionMatrix",T.projectionMatrix),xe.setValue(N,"viewMatrix",T.matrixWorldInverse);const Fn=xe.map.cameraPosition;Fn!==void 0&&Fn.setValue(N,Ut.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),g!==T&&(g=T,qe=!0,wi=!0)}if(X.isSkinnedMesh){xe.setOptional(N,X,"bindMatrix"),xe.setOptional(N,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),xe.setValue(N,"boneTexture",tn.boneTexture,R))}X.isBatchedMesh&&(xe.setOptional(N,X,"batchingTexture"),xe.setValue(N,"batchingTexture",X._matricesTexture,R),xe.setOptional(N,X,"batchingIdTexture"),xe.setValue(N,"batchingIdTexture",X._indirectTexture,R),xe.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&xe.setValue(N,"batchingColorTexture",X._colorsTexture,R));const Mn=tt.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Rt.update(X,tt,Qe),(qe||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,xe.setValue(N,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(dn.envMap.value=Ot,dn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(dn.envMapIntensity.value=W.environmentIntensity),qe&&(xe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&To(dn,wi),bt&&Q.fog===!0&&vt.refreshFogUniforms(dn,bt),vt.refreshMaterialUniforms(dn,Q,k,K,h.state.transmissionRenderTarget[T.id]),so.upload(N,oi(Vt),dn,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(so.upload(N,oi(Vt),dn,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(N,"center",X.center),xe.setValue(N,"modelViewMatrix",X.modelViewMatrix),xe.setValue(N,"normalMatrix",X.normalMatrix),xe.setValue(N,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const tn=Q.uniformsGroups;for(let Fn=0,On=tn.length;Fn<On;Fn++){const Xr=tn[Fn];B.update(Xr,Qe),B.bind(Xr,Qe)}}return Qe}function To(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function fn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,W,tt){yt.get(T.texture).__webglTexture=W,yt.get(T.depthTexture).__webglTexture=tt;const Q=yt.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const tt=yt.get(T);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,tt=0){D=T,C=W,I=tt;let Q=!0,X=null,bt=!1,It=!1;if(T){const Ot=yt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ot.__hasExternalTextures)R.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&yt.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const Qt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?X=Qt[W][tt]:X=Qt[W],bt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?X=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[tt]:X=Qt,L.copy(T.viewport),V.copy(T.scissor),H=T.scissorTest}else L.copy(J).multiplyScalar(k).floor(),V.copy(at).multiplyScalar(k).floor(),H=ft;if(Mt.bindFramebuffer(N.FRAMEBUFFER,X)&&Q&&Mt.drawBuffers(T,X),Mt.viewport(L),Mt.scissor(V),Mt.setScissorTest(H),bt){const Ot=yt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,tt)}else if(It){const Ot=yt.get(T.texture),Zt=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,tt||0,Zt)}M=-1},this.readRenderTargetPixels=function(T,W,tt,Q,X,bt,It){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){Mt.bindFramebuffer(N.FRAMEBUFFER,Bt);try{const Ot=T.texture,Zt=Ot.format,Qt=Ot.type;if(!At.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Q&&tt>=0&&tt<=T.height-X&&N.readPixels(W,tt,Q,X,Nt.convert(Zt),Nt.convert(Qt),bt)}finally{const Ot=D!==null?yt.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,W,tt,Q,X,bt,It){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){const Ot=T.texture,Zt=Ot.format,Qt=Ot.type;if(!At.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-Q&&tt>=0&&tt<=T.height-X){Mt.bindFramebuffer(N.FRAMEBUFFER,Bt);const zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.bufferData(N.PIXEL_PACK_BUFFER,bt.byteLength,N.STREAM_READ),N.readPixels(W,tt,Q,X,Nt.convert(Zt),Nt.convert(Qt),0);const se=D!==null?yt.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,se);const me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sf(N,me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,bt),N.deleteBuffer(zt),N.deleteSync(me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,tt=0){T.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-tt),X=Math.floor(T.image.width*Q),bt=Math.floor(T.image.height*Q),It=W!==null?W.x:0,Bt=W!==null?W.y:0;R.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,tt,0,0,It,Bt,X,bt),Mt.unbindTexture()},this.copyTextureToTexture=function(T,W,tt=null,Q=null,X=0){T.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],W=arguments[2],X=arguments[3]||0,tt=null);let bt,It,Bt,Ot,Zt,Qt,zt,se,me;const ye=T.isCompressedTexture?T.mipmaps[X]:T.image;tt!==null?(bt=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,Bt=tt.isBox3?tt.max.z-tt.min.z:1,Ot=tt.min.x,Zt=tt.min.y,Qt=tt.isBox3?tt.min.z:0):(bt=ye.width,It=ye.height,Bt=ye.depth||1,Ot=0,Zt=0,Qt=0),Q!==null?(zt=Q.x,se=Q.y,me=Q.z):(zt=0,se=0,me=0);const He=Nt.convert(W.format),fe=Nt.convert(W.type);let Vt;W.isData3DTexture?(R.setTexture3D(W,0),Vt=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(R.setTexture2DArray(W,0),Vt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(W,0),Vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const xn=N.getParameter(N.UNPACK_ROW_LENGTH),de=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);const wi=T.isDataArrayTexture||T.isData3DTexture,xe=W.isDataArrayTexture||W.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const dn=yt.get(T),Mn=yt.get(W),tn=yt.get(dn.__renderTarget),Fn=yt.get(Mn.__renderTarget);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Bt;On++)wi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,X,Qt+On),T.isDepthTexture?(xe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(W).__webglTexture,X,me+On),N.blitFramebuffer(Ot,Zt,bt,It,zt,se,bt,It,N.DEPTH_BUFFER_BIT,N.NEAREST)):xe?N.copyTexSubImage3D(Vt,X,zt,se,me+On,Ot,Zt,bt,It):N.copyTexSubImage2D(Vt,X,zt,se,me+On,Ot,Zt,bt,It);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Vt,X,zt,se,me,bt,It,Bt,He,fe,ye.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Vt,X,zt,se,me,bt,It,Bt,He,ye.data):N.texSubImage3D(Vt,X,zt,se,me,bt,It,Bt,He,fe,ye):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,zt,se,bt,It,He,fe,ye.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,zt,se,ye.width,ye.height,He,ye.data):N.texSubImage2D(N.TEXTURE_2D,X,zt,se,bt,It,He,fe,ye);N.pixelStorei(N.UNPACK_ROW_LENGTH,xn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe),X===0&&W.generateMipmaps&&N.generateMipmap(Vt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(T,W,tt=null,Q=null,X=0){return T.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],W=arguments[3],X=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,tt,Q,X)},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){C=0,I=0,D=null,Mt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class bc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dg extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ug extends Je{constructor(t=null,e=1,n=1,r,s,o,a,c,l=hn,u=hn,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo extends we{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const br=new ve,Al=new ve,zs=[],wl=new nr,Ng=new ve,jr=new _e,Jr=new ir;class ho extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),wl.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(wl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),Jr.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,br),Al.multiplyMatrices(n,br),jr.matrixWorld=Al,jr.raycast(t,zs);for(let o=0,a=zs.length;o<a;o++){const c=zs[o];c.instanceId=s,c.object=this,e.push(c)}zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ug(new Float32Array(r*this.count),r,this.count,_c,kn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sh extends rr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fo=new q,po=new q,Rl=new ve,Qr=new Sc,ks=new ir,ra=new q,Cl=new q;class Fg extends Ce{constructor(t=new ke,e=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)fo.fromBufferAttribute(e,r-1),po.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=fo.distanceTo(po);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,t.ray.intersectsSphere(ks)===!1)return;Rl.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(Rl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const h=u.getX(v),y=u.getX(v+1),E=Hs(this,t,Qr,c,h,y);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Hs(this,t,Qr,c,v,m);h&&e.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const h=Hs(this,t,Qr,c,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=Hs(this,t,Qr,c,_-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hs(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(fo.fromBufferAttribute(o,r),po.fromBufferAttribute(o,s),e.distanceSqToSegment(fo,po,ra,Cl)>n)return;ra.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ra);if(!(c<t.near||c>t.far))return{distance:c,point:Cl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Pl=new q,Ll=new q;class Og extends Fg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Pl.fromBufferAttribute(e,r),Ll.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Pl.distanceTo(Ll);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bg extends rr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Il=new ve,ic=new Sc,Gs=new ir,Vs=new q;class zg extends Ce{constructor(t=new ke,e=new Bg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;Il.copy(r).invert(),ic.copy(t.ray).applyMatrix4(Il);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,v=p;_<v;_++){const m=l.getX(_);Vs.fromBufferAttribute(f,m),Dl(Vs,m,c,r,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,v=p;_<v;_++)Vs.fromBufferAttribute(f,_),Dl(Vs,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dl(i,t,e,n,r,s,o){const a=ic.distanceSqToPoint(i);if(a<e){const c=new q;ic.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class yo extends ke{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new q,u=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=n+f/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wn extends ke{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let _=0;const v=[],m=n/2;let h=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2));function y(){const x=new q,F=new q;let C=0;const I=(e-t)/n;for(let D=0;D<=s;D++){const M=[],g=D/s,L=g*(e-t)+t;for(let V=0;V<=r;V++){const H=V/r,j=H*c+a,O=Math.sin(j),U=Math.cos(j);F.x=L*O,F.y=-g*n+m,F.z=L*U,f.push(F.x,F.y,F.z),x.set(O,I,U).normalize(),d.push(x.x,x.y,x.z),p.push(H,1-g),M.push(_++)}v.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const g=v[M][D],L=v[M+1][D],V=v[M+1][D+1],H=v[M][D+1];(t>0||M!==0)&&(u.push(g,L,H),C+=3),(e>0||M!==s-1)&&(u.push(L,V,H),C+=3)}l.addGroup(h,C,0),h+=C}function E(x){const F=_,C=new ce,I=new q;let D=0;const M=x===!0?t:e,g=x===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,m*g,0),d.push(0,g,0),p.push(.5,.5),_++;const L=_;for(let V=0;V<=r;V++){const j=V/r*c+a,O=Math.cos(j),U=Math.sin(j);I.x=M*U,I.y=m*g,I.z=M*O,f.push(I.x,I.y,I.z),d.push(0,g,0),C.x=O*.5+.5,C.y=U*.5*g+.5,p.push(C.x,C.y),_++}for(let V=0;V<r;V++){const H=F+V,j=L+V;x===!0?u.push(j,j+1,H):u.push(j+1,j,H),D+=3}l.addGroup(h,D,x===!0?1:2),h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bi extends Wn{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tc extends ke{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const E=new q,x=new q,F=new q;for(let C=0;C<e.length;C+=3)p(e[C+0],E),p(e[C+1],x),p(e[C+2],F),c(E,x,F,y)}function c(y,E,x,F){const C=F+1,I=[];for(let D=0;D<=C;D++){I[D]=[];const M=y.clone().lerp(x,D/C),g=E.clone().lerp(x,D/C),L=C-D;for(let V=0;V<=L;V++)V===0&&D===C?I[D][V]=M:I[D][V]=M.clone().lerp(g,V/L)}for(let D=0;D<C;D++)for(let M=0;M<2*(C-D)-1;M++){const g=Math.floor(M/2);M%2===0?(d(I[D][g+1]),d(I[D+1][g]),d(I[D][g])):(d(I[D][g+1]),d(I[D+1][g+1]),d(I[D+1][g]))}}function l(y){const E=new q;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(y),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function u(){const y=new q;for(let E=0;E<s.length;E+=3){y.x=s[E+0],y.y=s[E+1],y.z=s[E+2];const x=m(y)/2/Math.PI+.5,F=h(y)/Math.PI+.5;o.push(x,1-F)}_(),f()}function f(){for(let y=0;y<o.length;y+=6){const E=o[y+0],x=o[y+2],F=o[y+4],C=Math.max(E,x,F),I=Math.min(E,x,F);C>.9&&I<.1&&(E<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),F<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,E){const x=y*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function _(){const y=new q,E=new q,x=new q,F=new q,C=new ce,I=new ce,D=new ce;for(let M=0,g=0;M<s.length;M+=9,g+=6){y.set(s[M+0],s[M+1],s[M+2]),E.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),C.set(o[g+0],o[g+1]),I.set(o[g+2],o[g+3]),D.set(o[g+4],o[g+5]),F.copy(y).add(E).add(x).divideScalar(3);const L=m(F);v(C,g+0,y,L),v(I,g+2,E,L),v(D,g+4,x,L)}}function v(y,E,x,F){F<0&&y.x===1&&(o[E]=y.x-1),x.x===0&&x.z===0&&(o[E]=F/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.vertices,t.indices,t.radius,t.details)}}class Eo extends Tc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}class Ac extends ke{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new q,d=new q,p=[],_=[],v=[],m=[];for(let h=0;h<=n;h++){const y=[],E=h/n;let x=0;h===0&&o===0?x=.5/e:h===n&&c===Math.PI&&(x=-.5/e);for(let F=0;F<=e;F++){const C=F/e;f.x=-t*Math.cos(r+C*s)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(r+C*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(C+x,1-E),y.push(l++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const E=u[h][y+1],x=u[h][y],F=u[h+1][y],C=u[h+1][y+1];(h!==0||o>0)&&p.push(E,x,C),(h!==n-1||c<Math.PI)&&p.push(x,F,C)}this.setIndex(p),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends rr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oh extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kg extends oh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sa=new ve,Ul=new q,Nl=new q;class Hg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ul),Nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gg extends Hg{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends oh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vg extends ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const Ht={infantry:0,archer:1,tank:2,mage:3,healer:4,cavalry:5,ironclad:6,catapult:7,flyer:8},xi=9,ln=[{key:"infantry",name:"보병",mark:"보",color:"#ff8a5c",hp:4,speed:9,range:12,damage:.4,interval:1.1,bounty:1,size:.55,knockTaken:1},{key:"archer",name:"궁수",mark:"궁",color:"#9be564",hp:3,speed:8,range:46,damage:.35,interval:2,bounty:1.5,size:.5,knockTaken:1},{key:"tank",name:"탱커",mark:"탱",color:"#6fb6ff",hp:18,speed:6.5,range:11,damage:.7,interval:1.6,bounty:4,size:.75,knockTaken:.15},{key:"mage",name:"마법사",mark:"마",color:"#c98bff",hp:4,speed:7,range:36,damage:2.4,interval:4.6,bounty:2.5,size:.5,knockTaken:1},{key:"healer",name:"힐러",mark:"힐",color:"#7dffc4",hp:5,speed:7,range:56,damage:0,interval:2.8,bounty:3,size:.5,knockTaken:1},{key:"cavalry",name:"기병",mark:"기",color:"#ffd166",hp:9,speed:26,range:90,damage:1.6,interval:1,bounty:3,size:.9,knockTaken:.6,note:"돌격해 들이받고 빠졌다가 다시 달려듭니다"},{key:"ironclad",name:"철갑병",mark:"철",color:"#b8c4d6",hp:26,speed:5,range:11,damage:.9,interval:1.4,bounty:6,size:.8,knockTaken:.05,note:"두꺼운 갑옷으로 오래 버티고 좀처럼 밀리지 않습니다"},{key:"catapult",name:"투석기",mark:"투",color:"#d9a066",hp:120,speed:4.5,range:105,damage:14,interval:7,bounty:30,size:2.6,knockTaken:0,note:"손이 닿지 않는 곳에서 큰 돌을 날립니다"},{key:"flyer",name:"비행병",mark:"비",color:"#ff7fd1",hp:7,speed:12,range:34,damage:1,interval:2.4,bounty:5,size:.7,knockTaken:0,note:"하늘에서 맴돌며 공격합니다. 쓰러뜨리면 떨어집니다"}],Ws=Float32Array.from(ln.map(i=>i.knockTaken)),oa=Float32Array.from(ln.map(i=>i.size)),Wg=1/15,Xg=3,aa=1.5,qg=4,Yg=.25,ca=120,$g=.03,ah=20,Lr=[5,10,15,20],Kg=1.12,Zg=1.03,jg=.3,Jg=.92;function Qg(i){return Lr.includes(i)}function t_(i){return Math.round(60*1.3**(i-1))}function e_(i,t){return ln[i].bounty*jg*Jg**(t-1)}function n_(i){return 18+i*.5}const ch=.7,i_=125,rc=150,us=62,hs=[{center:-.85,half:.72},{center:2.25,half:.66}],Br=22,Ol=48,r_=225;function Bl(i,t){const e=(m,h)=>[Math.cos(m)*h,Math.sin(m)*h],[n,r]=e(i+t,r_),[s,o]=e(i-t*.9,135),[a,c]=e(i,us-4),l=[];for(let m=0;m<=600;m+=1){const h=m/600,y=1-h;l.push([y*y*n+2*y*h*s+h*h*a,y*y*r+2*y*h*o+h*h*c])}const u=[],f=[],d=[],p=[];let _=0,v=0;for(let m=1;m<l.length;m+=1){const h=l[m-1],y=l[m],E=y[0]-h[0],x=y[1]-h[1],F=Math.hypot(E,x);for(;v<=_+F;){const C=(v-_)/F;u.push(h[0]+E*C),f.push(h[1]+x*C),d.push(-x/F),p.push(E/F),v+=1}_+=F}return{xs:Float32Array.from(u),zs:Float32Array.from(f),nxs:Float32Array.from(d),nzs:Float32Array.from(p),length:u.length-1}}const ni=[Bl(hs[0].center,.32),Bl(hs[1].center,-.28)];function un(i){const t=Math.PI*2;return((i+Math.PI)%t+t)%t-Math.PI}function bo(i){return hs.some(t=>Math.abs(un(i-t.center))<t.half)}function s_(i){for(let t=0;t<12;t+=1){const e=i()*Math.PI*2-Math.PI;if(!bo(e))return e}return hs[0].center+Math.PI/2}const o_=70,ei=2,Ie=560,gi=Ie/2,os=new Uint8Array(Ie*Ie),lh=new Int8Array(Ie*Ie),uh=new Int8Array(Ie*Ie);(function(){for(let n=0;n<Ie;n+=1)for(let r=0;r<Ie;r+=1){const s=(r-gi+.5)*ei,o=(n-gi+.5)*ei;s*s+o*o>us*us&&bo(Math.atan2(o,s))&&(os[n*Ie+r]=1)}const t=(n,r,s)=>{const o=Math.ceil(s/ei),a=Math.floor(n/ei)+gi,c=Math.floor(r/ei)+gi;for(let l=-o;l<=o;l+=1)for(let u=-o;u<=o;u+=1){const f=a+u,d=c+l;f<0||d<0||f>=Ie||d>=Ie||(u*u+l*l)*ei*ei<=s*s&&(os[d*Ie+f]=0)}};for(const n of ni)for(let r=0;r<=n.length;r+=1)t(n.xs[r],n.zs[r],Br/2+1);const e=4;for(let n=e;n<Ie-e;n+=1)for(let r=e;r<Ie-e;r+=1){const s=n*Ie+r;if(os[s]===0)continue;let o=0,a=0;for(let l=-e;l<=e;l+=1)for(let u=-e;u<=e;u+=1)os[(n+l)*Ie+r+u]===0&&(o+=u,a+=l);o===0&&a===0&&(o=gi-r,a=gi-n);const c=Math.hypot(o,a)||1;lh[s]=Math.round(o/c*127),uh[s]=Math.round(a/c*127)}})();function Bi(i,t){const e=Math.floor(i/ei)+gi,n=Math.floor(t/ei)+gi;return e<0||n<0||e>=Ie||n>=Ie?-1:n*Ie+e}function zi(i,t){return i<0?!1:os[i]!==0&&t<o_}function sc(i){return lh[i]/127}function oc(i){return uh[i]/127}const a_=20*Math.PI/180;function c_(i){const{stat:t,flag:e}=i,n=t("sweepArc")*Math.PI/180,r=s=>({damage:t("sweepDamage"),radius:t("sweepRadius"),arc:n,center:s*(n/2-a_),cooldown:t("sweepCooldown")});return{maxHp:t("maxHp"),regen:t("regen"),damageTaken:t("damageTaken"),thorns:t("thorns"),killHeal:t("killHeal"),bounty:t("bounty"),gateBounty:t("gateBounty"),burnRatio:t("burnRatio"),burnTime:t("burnTime"),burnSpread:e("burnSpread"),sweep:{force:t("sweepForce"),auto:e("autoSweep"),left:r(-1),right:r(1)},q:{unlocked:e("skillQ"),damage:t("qDamage"),blast:t("qBlast"),count:Math.round(t("qCount")),range:t("qRange"),cooldown:t("qCooldown"),auto:e("autoQ")},w:{unlocked:e("skillW"),damage:t("wDamage"),radius:t("wRadius"),cooldown:t("wCooldown"),burn:e("wBurn"),triple:e("wTriple"),auto:e("autoW")},e:{unlocked:e("skillE"),dps:t("eDps"),length:t("eLength"),width:t("eWidth"),duration:t("eDuration"),cooldown:t("eCooldown"),free:e("eFree")},r:{unlocked:e("skillR"),damage:t("rDamage"),radius:t("rRadius"),cooldown:t("rCooldown"),stun:t("rStun"),aftershock:e("rAftershock")}}}const ac=["ML","MR","Q","W","E","R"],mo=.34,l_=58,u_=13,h_=14,la=95,zl=20,f_=.13,Xs=3.5,ua=9,kl=34,d_=24,cc=.55,Mi=120,p_=4.5,Hl=1.1,m_=.35,Gl=.1,g_=.3,as=.5,__=85,v_=.75,Vl=.5,x_=30,M_=.6,qs=8,Jn=64,ha=15,S_=.14,Wl=1.7,y_=62,E_=42,b_=40,Xl=30,T_=2.2,A_=22,Ys=6,hh=1.9,oo=2.2,w_=6,R_=10,C_=12,P_=12,L_=70,ql=24,I_=46,D_=50,Yl=7,$l=14,U_=12,Kl=.3,Zl=28,N_=14,F_=.3,O_=12,B_=3,jl=16,z_=3,Jl=.55,k_=.4,H_=1.6,G_=.7,oe=3e4,Tn=4e3,V_=1/30,ts=3,nn=192,Ql=10,Ui=16,tu=4096,go=8,fh=["sweep","fire","ring","thorns","wall","crash"],W_=0,$s=1,X_=2,eu=3,q_=4,nu=5,Y_=[{role:Ht.infantry,from:1,weight:1},{role:Ht.archer,from:2,weight:.32},{role:Ht.tank,from:3,weight:.1},{role:Ht.mage,from:4,weight:.06},{role:Ht.healer,from:6,weight:.04},{role:Ht.ironclad,from:6,weight:.025},{role:Ht.cavalry,from:11,weight:.05},{role:Ht.flyer,from:16,weight:.02},{role:Ht.catapult,from:16,weight:.002}],Le=(...i)=>i.map(([t,e,n])=>({role:t,ranks:e,...n?{every:n}:{}})),{infantry:An,archer:wn,tank:Rn,mage:Cn,healer:Pn,cavalry:ki,ironclad:Hi,catapult:cs,flyer:ao}=Ht,Ln=.73,es=-2.47,dh={5:[{lane:0,angle:Ln,files:70,rows:Le([Hi,1,5],[Rn,2],[An,12],[wn,5],[Cn,1],[Pn,1])}],10:[{lane:0,angle:Ln,files:90,rows:Le([Hi,2,3],[Rn,2],[An,14],[wn,6],[Cn,2],[Pn,1])},{lane:0,angle:Ln+.62,files:30,rows:Le([ki,5])},{lane:0,angle:Ln-.62,files:30,rows:Le([ki,5])},{lane:1,angle:0,files:10,rows:Le([Rn,3],[An,20],[wn,5],[Cn,1],[Pn,1])}],15:[{lane:0,angle:Ln,files:100,rows:Le([Hi,2,3],[Rn,2],[An,16],[wn,7],[Cn,2],[Pn,1],[cs,1,12])},{lane:0,angle:es,files:100,rows:Le([Hi,2,3],[Rn,2],[An,16],[wn,7],[Cn,2],[Pn,1],[cs,1,12])},{lane:0,angle:Ln+.62,files:40,rows:Le([ki,5])},{lane:0,angle:es-.62,files:40,rows:Le([ki,5])},{lane:0,angle:Ln,files:40,rows:Le([ao,3]),back:30},{lane:2,angle:0,files:11,rows:Le([Rn,3],[An,28],[wn,6],[Cn,2],[Pn,1])}],20:[{lane:0,angle:Ln,files:130,rows:Le([Hi,3,3],[Rn,3],[An,22],[wn,9],[Cn,3],[Pn,2],[cs,2,10])},{lane:0,angle:es,files:130,rows:Le([Hi,3,3],[Rn,3],[An,22],[wn,9],[Cn,3],[Pn,2],[cs,2,10])},{lane:0,angle:Ln,files:120,rows:Le([Rn,2],[An,22],[wn,8],[Cn,2],[Pn,1]),back:110},{lane:0,angle:Ln+.66,files:50,rows:Le([ki,6])},{lane:0,angle:es-.66,files:50,rows:Le([ki,6])},{lane:0,angle:Ln,files:60,rows:Le([ao,4]),back:30},{lane:0,angle:es,files:60,rows:Le([ao,4]),back:30},{lane:1,angle:0,files:11,rows:Le([Rn,3],[An,30],[wn,6],[Cn,2],[Pn,1])},{lane:2,angle:0,files:11,rows:Le([Rn,3],[An,30],[wn,6],[Cn,2],[Pn,1])}]},$_={5:[Hi],10:[ki],15:[cs,ao]};function K_(i){return i.rows.reduce((t,e)=>t+e.ranks*Math.ceil(i.files/(e.every??1)),0)}function Z_(i,t){const e=dh[i];if(e)return{wave:i,gate:!0,groups:[],legions:[...e]};const n=Y_.filter(l=>i>=l.from),r=n.reduce((l,u)=>l+u.weight,0),s=t_(i),o=i===1?1:Math.min(6,1+Math.floor(i/3)+(t()<.5?1:0)),a=[];let c=s;for(let l=0;l<o;l+=1){const u=l===o-1?c:Math.max(1,Math.round(s/o*(.7+t()*.6))),f=Math.min(c,u);if(f<=0)break;c-=f;const d=new Map;for(let _=0;_<f;_+=1){let v=t()*r,m=Ht.infantry;for(const h of n)if(v-=h.weight,v<=0){m=h.role;break}d.set(m,(d.get(m)??0)+1)}const p=i>=2&&t()<.28?1+Math.floor(t()*ni.length):0;a.push({lane:p,angle:i===1?ch:p>0?0:s_(t),units:[...d].map(([_,v])=>({role:_,count:v})),delay:l*1.4,duration:Math.min(7,1+f*.09)})}return{wave:i,gate:!1,groups:a,legions:[]}}function j_(i,t={}){const e=t.random??Math.random,n=t.earn??(()=>{}),r=new Float32Array(oe),s=new Float32Array(oe),o=new Float32Array(oe),a=new Float32Array(oe),c=new Float32Array(oe),l=new Float32Array(oe),u=new Float32Array(oe),f=new Float32Array(oe),d=new Float32Array(oe),p=new Float32Array(oe),_=new Float32Array(oe),v=new Float32Array(oe),m=new Float32Array(oe),h=new Float32Array(oe),y=new Float32Array(oe),E=new Float32Array(oe),x=new Float32Array(oe),F=new Float32Array(oe),C=new Float32Array(oe),I=new Float32Array(oe),D=new Float32Array(oe),M=new Float32Array(oe),g=new Float32Array(oe),L=new Float32Array(oe),V=new Float32Array(oe),H=new Uint8Array(oe),j=new Uint8Array(oe),O=new Uint8Array(oe),U=new Uint8Array(oe),K=new Uint8Array(oe),k=new Int16Array(oe),it=new Uint8Array(oe),st={left:new Int32Array(oe),right:new Int32Array(oe)};let J=0;const at=[r,s,o,a,c,l,u,f,d,p,_,v,m,h,y,E,x,F,C,I,D,M,g,L,V],ft=[H,j,O,U,K,it];let G=0;const ct=nn*nn,mt=new Int32Array(ct+1),pt=new Int32Array(oe),Dt=new Int32Array(oe);let Ut=0;const Xt=[],ie=new Uint8Array(Jn*Jn);let jt=0;const ee=new Float32Array(tu*go);let N=0;const rt=new Float32Array(xi*Ui);let xt=0,At=0;const Mt=new Float32Array(Tn),Wt=new Float32Array(Tn),yt=new Float32Array(Tn),R=new Float32Array(Tn),S=new Float32Array(Tn),w=new Float32Array(Tn),z=new Float32Array(Tn),et=new Float32Array(Tn),Z=new Float32Array(Tn),_t=new Uint8Array(Tn),vt=[Mt,Wt,yt,R,S,w,z,et,Z,_t];let St=0,Gt=i.maxHp,ut=ch,Tt=0,Pt=null;const Rt={ML:0,MR:0,Q:0,W:0,E:0,R:0},Et=[],qt=[],Nt=[],re=[],B=[],wt=[];let nt={t:0,tick:0,total:0},lt=-1;const gt=[];let Ct=0,$t=Xg,pe=!1,be=-1,le=0;const De=[],Oe=[];let Gr=0,Vr=0,Un=0,Nn=0;function Wr(b){Vr+=b,n(b)}function Ai(b,A,P,Y){if(G>=oe)return-1;const $=G;G+=1,Un+=1;const ot=ln[b],ht=Kg**(A-1);return st.left[$]=0,st.right[$]=0,M[$]=0,g[$]=0,L[$]=0,V[$]=0,K[$]=0,r[$]=P,s[$]=Y,o[$]=0,a[$]=0,c[$]=0,l[$]=0,u[$]=ot.hp*ht,f[$]=u[$],d[$]=0,p[$]=ot.interval*(.3+e()*.7),_[$]=0,v[$]=0,m[$]=ot.damage*Zg**(A-1),h[$]=ot.speed*(.9+e()*.2),y[$]=ot.range*(.86+e()*.28),E[$]=0,x[$]=0,F[$]=0,C[$]=0,I[$]=e()*Math.PI*2,D[$]=e_(b,A),H[$]=b,j[$]=0,O[$]=0,U[$]=0,k[$]=-1,it[$]=0,b===Ht.flyer&&(o[$]=ql),$}function sr(b){const A=G-1;if(b!==A){for(const P of at)P[b]=P[A];for(const P of ft)P[b]=P[A];k[b]=k[A],st.left[b]=st.left[A],st.right[b]=st.right[A]}G=A}function _s(b,A,P){const{plan:Y}=b;if(Y.lane>0){const ht=ni[Y.lane-1],dt=Ol+e()*8,Ft=(e()-.5)*(Br-4),kt=Math.floor(dt),Jt=Ai(A,P,ht.xs[kt]+ht.nxs[kt]*Ft,ht.zs[kt]+ht.nzs[kt]*Ft);Jt>=0&&(j[Jt]=Y.lane,E[Jt]=dt,x[Jt]=Ft);return}const $=Y.angle+(e()-.5)*.34,ot=i_+e()*12;Ai(A,P,Math.cos($)*ot,Math.sin($)*ot)}function or(b,A){const P=Oe.length,Y=b.rows.reduce((ht,dt)=>ht+dt.ranks,0),$=b.lane>0?Ol+Y*oo:-(b.back??0);Oe.push({lane:b.lane,angle:b.angle,s:$,speed:w_,files:b.files,depth:Y,cos:Math.cos(b.angle),sin:Math.sin(b.angle)});let ot=0;for(const ht of b.rows){const dt=ht.every??1;for(let Ft=0;Ft<ht.ranks;Ft+=1){for(let kt=0;kt<b.files;kt+=dt){const Jt=(kt-(b.files-1)/2)*hh,Kt=Ai(ht.role,A,0,0);if(Kt<0)continue;k[Kt]=P,F[Kt]=ot*oo,C[Kt]=Jt,j[Kt]=b.lane,U[Kt]=ot===0&&kt%(dt*8)===2*dt?1:0;const ue=ar(P,Kt);r[Kt]=ue[0],s[Kt]=ue[1],b.lane>0&&(E[Kt]=Math.max(0,$-F[Kt]),x[Kt]=Jt)}ot+=1}}}const oi=[0,0];function ar(b,A){const P=Oe[b],Y=F[A],$=C[A];if(P.lane>0){const ot=ni[P.lane-1],ht=Math.max(0,Math.min(ot.length,Math.floor(P.s-Y)));oi[0]=ot.xs[ht]+ot.nxs[ht]*$,oi[1]=ot.zs[ht]+ot.nzs[ht]*$}else{const ot=rc-P.s+Y;oi[0]=P.cos*ot-P.sin*$,oi[1]=P.sin*ot+P.cos*$}return oi}function cr(b){const A=Z_(b,e);Ct=b,gt.push({type:"wave",wave:b,gate:A.gate});for(const P of A.groups){const Y=[];for(const $ of P.units)for(let ot=0;ot<$.count;ot+=1)Y.push($.role);for(let $=Y.length-1;$>0;$-=1){const ot=Math.floor(e()*($+1)),ht=Y[$];Y[$]=Y[ot],Y[ot]=ht}De.push({plan:P,queue:Y,timer:P.delay,gap:P.duration/Math.max(1,Y.length)})}for(const P of A.legions)or(P,b);A.gate?pe=!0:$t=n_(b)}function To(b){for(let P=De.length-1;P>=0;P-=1){const Y=De[P];for(Y.timer-=b;Y.timer<=0&&Y.queue.length>0;)Y.timer+=Y.gap,_s(Y,Y.queue.pop(),Ct);Y.queue.length===0&&De.splice(P,1)}for(const P of Oe)if(P.lane>0){const Y=ni[P.lane-1];P.s=Math.min(Y.length+P.depth*oo,P.s+P.speed*b)}else P.s+=P.speed*b;if(be>=0){be-=b,be<0&&(cr(le),le=0);return}const A=G===0&&De.length===0;if(pe){if(Nn+=b,A&&Ct>0){Nn=0,pe=!1;const P=6*Ct*i.bounty*i.gateBounty;if(Wr(P),Gt=Math.min(i.maxHp,Gt+i.maxHp*Yg),gt.push({type:"gateClear",wave:Ct,bonus:P}),Ct>=ah){Pt="victory",gt.push({type:"victory"});return}$t=aa*2}return}if($t-=b,A&&Ct>0&&$t>aa&&($t=aa),$t<=0){const P=Ct+1;if(Qg(P)){const Y=dh[P];le=P,be=qg,Ct=P,pe=!0,gt.push({type:"gateWarning",wave:P,units:Y.reduce(($,ot)=>$+K_(ot),0),fresh:[...$_[P]??[]],angles:Y.map($=>{if($.lane===0)return $.angle;const ot=ni[$.lane-1];return Math.atan2(ot.zs[ot.length],ot.xs[ot.length])})})}else cr(P)}}function fn(b,A,P){if(u[b]<=0)return;const Y=H[b],$=O[b]&&Y!==Ht.tank?A*M_:A;u[b]=u[b]-$,_[b]=1,it[b]=P}function T(b,A,P){u[b]<=0||(g[b]=Math.max(g[b],A),M[b]=Math.max(M[b],P))}function W(){for(let b=G-1;b>=0;b-=1)if(!(u[b]>0)){if(Gr+=1,Wr(D[b]*i.bounty),i.killHeal>0&&(Gt=Math.min(i.maxHp,Gt+i.killHeal)),N<tu){const A=N*go;ee[A]=r[b],ee[A+1]=o[b],ee[A+2]=s[b],ee[A+3]=a[b],ee[A+4]=l[b],ee[A+5]=c[b],ee[A+6]=H[b],ee[A+7]=it[b],N+=1}sr(b)}}function tt(b){const A=k[b];if(A<0)return;const P=Oe[A];P.lane>0&&(E[b]=Math.max(0,P.s-F[b])),k[b]=-1}function Q(b,A,P,Y){const $=H[b],ht=u[b]<=0?$===Ht.catapult?m_:1:Ws[$];if(ht<=0)return;a[b]=a[b]+A*ht,c[b]=c[b]+P*ht,tt(b);const dt=Y*ht;dt>3&&(l[b]=Math.max(l[b],dt),o[b]=Math.max(o[b],.05))}function X(b,A,P){const Y=sc(A),$=oc(A),ot=a[b],ht=c[b],dt=-(ot*Y+ht*$);dt>$l&&(fn(b,f[b]*(dt-$l)/U_,q_),xt+=1,At<10&&(At+=1,gt.push({type:"wallHit",x:r[b],y:P,z:s[b]}))),dt>0&&(a[b]=(ot+Y*dt*(1+Kl))*.7,c[b]=(ht+$*dt*(1+Kl))*.7)}function bt(b,A,P){if(Pt)return;const Y=Nn>ca?1+(Nn-ca)*$g:1,$=b*Y*i.damageTaken;Gt-=$;const ot=Math.floor((P+Math.PI)/(Math.PI*2)*Ui)%Ui,ht=A*Ui+Math.max(0,ot);rt[ht]=rt[ht]+$,Gt<=0&&(Gt=0,Pt="dead",gt.push({type:"defeat"}))}function It(){for(let b=0;b<rt.length;b+=1){const A=rt[b];if(A<=0)continue;rt[b]=0;const P=b%Ui;gt.push({type:"bossHit",role:Math.floor(b/Ui),angle:(P+.5)/Ui*Math.PI*2-Math.PI,amount:A})}}function Bt(b,A){const P=i.sweep[b],Y=P.arc/2;J+=1,Et.push({arm:b,serial:J,yaw:A,from:b==="right"?P.center+Y:P.center-Y,to:b==="right"?P.center-Y:P.center+Y,t:0,radius:P.radius,damage:P.damage})}function Ot(b,A,P){qt.push({x:b,z:A,radius:i.w.radius,damage:i.w.damage,delay:P,total:P})}function Zt(b,A){const P=Math.hypot(b,A),Y=P>1?Math.atan2(A,b):ut,ot=(P>1&&P<Mi-1?P:i.q.range)/la,ht=i.q.count;for(let dt=0;dt<ht;dt+=1){const Ft=Y+(dt-(ht-1)/2)*f_,kt=Math.cos(Ft),Jt=Math.sin(Ft);B.push({x:kt*8,y:zl,z:Jt*8,vx:kt*la,vy:-zl/ot,vz:Jt*la,t:ot})}}function Qt(b){const A=i.q.blast,P=A*A,Y=i.q.damage*i.burnRatio,$=A+ua;for(let ot=0;ot<G;ot+=1){const ht=r[ot]-b.x,dt=s[ot]-b.z,Ft=ht*ht+dt*dt;if(Ft>P||Math.abs(o[ot]-b.y)>$)continue;fn(ot,i.q.damage,$s),T(ot,Y,i.burnTime);const kt=Math.sqrt(Ft)||1,Jt=1.15-kt/A*.6;Q(ot,ht/kt*kl*Jt,dt/kt*kl*Jt,d_*Jt*(.85+e()*.3))}gt.push({type:"fireball",x:b.x,y:b.y,z:b.z,radius:A})}function zt(b){for(let A=B.length-1;A>=0;A-=1){const P=B[A];P.t-=b,P.x+=P.vx*b,P.y+=P.vy*b,P.z+=P.vz*b;let Y=P.t<=0||P.y<=.3||zi(Bi(P.x,P.z),P.y);for(let $=0;$<G&&!Y;$+=1){const ot=r[$]-P.x;if(ot>Xs||ot<-Xs)continue;const ht=s[$]-P.z;if(ht>Xs||ht<-Xs)continue;const dt=o[$]-P.y;Y=dt<ua&&dt>-ua}Y&&(P.y=Math.max(P.y,.3),Qt(P),B.splice(A,1))}}function se(b,A=0,P=0){if(Pt||!me(b))return!1;switch(b){case"ML":case"MR":{const Y=b==="ML"?"left":"right";Bt(Y,ut),Rt[b]=i.sweep[Y].cooldown,gt.push({type:"cast",skill:b,yaw:ut,x:0,z:0,arm:Y});break}case"Q":{Zt(A,P),Rt.Q=i.q.cooldown,gt.push({type:"cast",skill:b,yaw:ut,x:A,z:P,arm:"left"});break}case"W":{const Y=Math.hypot(A,P),$=Y>Mi?Mi/Y:1,ot=A*$,ht=P*$;if(Ot(ot,ht,cc),i.w.triple){const dt=i.w.radius*1.5,Ft=e()*Math.PI*2;for(let kt=0;kt<2;kt+=1){const Jt=Ft+kt*Math.PI;Ot(ot+Math.cos(Jt)*dt,ht+Math.sin(Jt)*dt,cc+.16*(kt+1))}}Rt.W=i.w.cooldown,gt.push({type:"cast",skill:b,yaw:ut,x:ot,z:ht,arm:"left"});break}case"E":{nt={t:i.e.duration,tick:0,total:i.e.duration},Rt.E=i.e.cooldown,gt.push({type:"cast",skill:b,yaw:ut,x:0,z:0,arm:"right"});break}case"R":{lt=as,Rt.R=i.r.cooldown,gt.push({type:"cast",skill:b,yaw:ut,x:0,z:0,arm:"right"});break}}return!0}function me(b){return Rt[b]>0?!1:b==="Q"?i.q.unlocked:b==="W"?i.w.unlocked:b==="E"?i.e.unlocked&&nt.t<=0:b==="R"?i.r.unlocked&&lt<0:!0}function ye(b){for(let A=Et.length-1;A>=0;A-=1){const P=Et[A],Y=Math.min(1,P.t/mo);P.t+=b;const $=Math.min(1,P.t/mo),ot=P.from+(P.to-P.from)*Y,ht=P.from+(P.to-P.from)*$,dt=Math.min(ot,ht),Ft=Math.max(ot,ht),kt=P.radius*P.radius,Jt=P.to>P.from?1:-1,Kt=st[P.arm];for(let ue=0;ue<G;ue+=1){const Me=r[ue],Be=s[ue],Xn=Me*Me+Be*Be;if(Xn>kt||o[ue]>h_&&H[ue]!==Ht.flyer)continue;const ge=un(Math.atan2(Be,Me)-P.yaw);if(ge<dt||ge>Ft||Kt[ue]===P.serial)continue;Kt[ue]=P.serial,fn(ue,P.damage,W_);const Ee=Math.sqrt(Xn)||1,Ge=Me/Ee,Ye=Be/Ee,Sn=l_*i.sweep.force*(.85+e()*.3);Q(ue,(Ge-Ye*Jt*.7)*Sn,(Ye+Ge*Jt*.7)*Sn,u_+e()*9)}$>=1&&Et.splice(A,1)}}function He(b){const A=b.radius*b.radius,P=b.damage*i.burnRatio;for(let Y=0;Y<G;Y+=1){const $=r[Y]-b.x,ot=s[Y]-b.z,ht=$*$+ot*ot;if(ht>A)continue;V[Y]=V[Y]+b.damage,L[Y]=Math.max(L[Y],Hl*(.8+e()*.6)),_[Y]=1,T(Y,P,i.burnTime+Hl);const dt=Math.sqrt(ht)||1,Ft=dt/b.radius;Q(Y,$/dt*Yl*(.4+Ft),ot/dt*Yl*(.4+Ft),D_*(1-Ft*.4)*(.98+e()*.2))}}function fe(b){const A=b.radius*b.radius;for(let P=0;P<G;P+=1){const Y=r[P]-b.x,$=s[P]-b.z;Y*Y+$*$<=A&&T(P,b.dps,i.burnTime)}}function Vt(b){for(let A=qt.length-1;A>=0;A-=1){const P=qt[A];P.delay-=b,!(P.delay>0)&&(He(P),gt.push({type:"pillar",x:P.x,z:P.z,radius:P.radius}),i.w.burn&&Nt.push({x:P.x,z:P.z,radius:P.radius,dps:P.damage*i.burnRatio,t:p_,tick:0}),qt.splice(A,1))}for(let A=Nt.length-1;A>=0;A-=1){const P=Nt[A];P.t-=b,P.tick-=b,P.tick<=0&&(P.tick+=.3,fe(P)),P.t<=0&&Nt.splice(A,1)}}function xn(b){if(!(nt.t<=0))for(nt.t-=b,nt.tick-=b;nt.tick<=0;){nt.tick+=Gl;const A=Math.cos(ut),P=Math.sin(ut),Y=i.e.width/2,$=i.e.dps*Gl,ot=i.e.dps*i.burnRatio;for(let ht=0;ht<G;ht+=1){const dt=r[ht],Ft=s[ht],kt=dt*A+Ft*P;if(kt<0||kt>i.e.length)continue;const Jt=-dt*P+Ft*A;Jt<-Y||Jt>Y||(fn(ht,$,$s),T(ht,ot,i.burnTime))}}}function de(b){lt>=0&&(lt-=b,lt<0&&(lt=-1,gt.push({type:"slam"}),Qe(i.r.damage,1),i.r.aftershock&&wt.push({t:v_,damage:i.r.damage*Vl,power:Vl})));for(let A=wt.length-1;A>=0;A-=1){const P=wt[A];P.t-=b,P.t<=0&&(Qe(P.damage,P.power),wt.splice(A,1))}for(let A=re.length-1;A>=0;A-=1){const P=re[A],Y=P.r,$=Y+__*b;P.r=$;const ot=Y*Y,ht=$*$;for(let dt=0;dt<G;dt+=1){const Ft=r[dt],kt=s[dt],Jt=Ft*Ft+kt*kt;if(Jt<ot||Jt>=ht||Y>=P.max)continue;fn(dt,P.damage,X_);const Kt=H[dt];if(Kt===Ht.flyer)continue;const ue=Ws[Kt];d[dt]=Math.max(d[dt],P.stun*Math.max(.5,ue)),Kt===Ht.mage&&(p[dt]=Math.max(p[dt],Wl+.6));const Me=Math.sqrt(Jt)||1,Be=x_*P.power;Q(dt,Ft/Me*Be,kt/Me*Be,(12+e()*12)*P.power)}Y>=P.max&&re.splice(A,1)}}function Qe(b,A){re.push({r:Ys,max:i.r.radius,damage:b,stun:i.r.stun*A,power:A}),gt.push({type:"ring",power:A})}function ai(b,A,P,Y,$){const ot=$/(A===Ht.mage?E_:A===Ht.catapult?b_:y_),ht=Math.atan2(Y,P);if(St>=Tn){bt(m[b],A,ht);return}const dt=St;St+=1;const Ft=o[b]+2;Mt[dt]=P,Wt[dt]=Ft,yt[dt]=Y,R[dt]=-P/ot,w[dt]=-Y/ot,S[dt]=(A_-Ft)/ot+(A===Ht.catapult?.5*Xl*ot:0),z[dt]=ot,et[dt]=m[b],Z[dt]=ht,_t[dt]=A}function qe(b){for(let A=St-1;A>=0;A-=1){if(z[A]=z[A]-b,z[A]<=0){bt(et[A],_t[A],Z[A]);const P=St-1;for(const Y of vt)Y[A]=Y[P];St=P;continue}_t[A]===Ht.catapult&&(S[A]=S[A]-Xl*b),Mt[A]=Mt[A]+R[A]*b,Wt[A]=Wt[A]+S[A]*b,yt[A]=yt[A]+w[A]*b}}function wi(b,A){let P=!1;const Y=ha*ha,$=nn/2,ot=Math.ceil(ha/ts),ht=Math.floor(b/ts)+$,dt=Math.floor(A/ts)+$;for(let Ft=Math.max(0,dt-ot);Ft<=Math.min(nn-1,dt+ot);Ft+=1)for(let kt=Math.max(0,ht-ot);kt<=Math.min(nn-1,ht+ot);kt+=1){const Jt=Ft*nn+kt,Kt=mt[Jt+1];for(let ue=mt[Jt];ue<Kt;ue+=1){const Me=pt[ue],Be=u[Me],Xn=f[Me];if(Be<=0||Be>=Xn)continue;const ge=r[Me]-b,Ee=s[Me]-A;ge*ge+Ee*Ee>Y||(u[Me]=Math.min(Xn,Be+Xn*S_),P=!0)}}return P}function xe(b,A,P,Y,$,ot){if(p[b]=p[b]-ot,p[b]>0)return;const ht=ln[A];switch(p[b]=ht.interval*(.9+e()*.2),A){case Ht.infantry:case Ht.tank:case Ht.ironclad:{bt(m[b],A,Math.atan2($,Y)),v[b]=1.5,i.thorns>0&&fn(b,i.thorns,eu);break}case Ht.archer:case Ht.mage:case Ht.catapult:case Ht.flyer:{ai(b,A,Y,$,P),v[b]=1.5;break}case Ht.healer:{Xt.push(Y,$);break}}}function dn(b){if(jt-=b,jt>0)return;jt=.25,ie.fill(0);const A=Jn/2;for(let P=0;P<G;P+=1){if(H[P]!==Ht.tank)continue;const Y=Math.floor(r[P]/qs)+A,$=Math.floor(s[P]/qs)+A;Y>=0&&$>=0&&Y<Jn&&$<Jn&&(ie[$*Jn+Y]=1)}for(let P=0;P<G;P+=1){const Y=Math.floor(r[P]/qs)+A,$=Math.floor(s[P]/qs)+A;O[P]=Y>=0&&$>=0&&Y<Jn&&$<Jn?ie[$*Jn+Y]:0}}function Mn(b,A,P,Y,$,ot){const ht=A+Y*ot,dt=P+$*ot,Ft=Bi(ht,dt);if(!zi(Ft,0)){r[b]=ht,s[b]=dt;return}const kt=sc(Ft),Jt=oc(Ft),Kt=$*kt-Y*Jt,ue=Kt>.05?1:Kt<-.05?-1:I[b]>Math.PI?1:-1,Me=Math.max(ot,.15),Be=zi(Bi(A,P),0)?1:.15;r[b]=A+(Jt*-ue+kt*Be)*Me,s[b]=P+(kt*ue+Jt*Be)*Me}function tn(b,A){const P=r[b],Y=s[b],$=Math.hypot(P,Y)||1,ot=y[b],ht=h[b]*A,dt=k[b];if(o[b]=ql+Math.sin(I[b]+Tt*1.7)*2.2,dt>=0)if($<=ot+25)k[b]=-1;else{const kt=ar(dt,b),Jt=kt[0]-P,Kt=kt[1]-Y,ue=Math.hypot(Jt,Kt)||1,Me=Math.min(ue,ht*1.5);r[b]=P+Jt/ue*Me,s[b]=Y+Kt/ue*Me;return}if($>ot){r[b]=P-P/$*ht,s[b]=Y-Y/$*ht;return}const Ft=I[b]>Math.PI?1:-1;r[b]=P-Y/$*ht*Ft*.6,s[b]=Y+P/$*ht*Ft*.6,xe(b,Ht.flyer,$,P,Y,A)}function Fn(b){for(let A=0;A<G;A+=1){const P=_[A];P>0&&(_[A]=Math.max(0,P-b*5)),v[A]>0&&(v[A]=v[A]-b);const Y=L[A];Y>0&&(L[A]=Y-b,Y<=b&&(fn(A,V[A],$s),V[A]=0,u[A]<=0&&o[A]<=0&&Q(A,0,0,20+e()*10)));const $=M[A];$>0&&(M[A]=$-b,L[A]<=0&&(u[A]=u[A]-g[A]*b,it[A]=$s));const ot=H[A];if(ot===Ht.flyer){tn(A,b);continue}let ht=r[A],dt=s[A];const Ft=o[A];if(Ft>0){const ge=l[A]-I_*b;let Ee=Ft+ge*b;const Ge=ht+a[A]*b,Ye=dt+c[A]*b,Sn=Bi(Ge,Ye);if(zi(Sn,Ee)?X(A,Sn,Ee):(r[A]=Ge,s[A]=Ye),Ee<=0){const qn=-ge;qn>Zl&&Ws[ot]>.3&&fn(A,f[A]*(qn-Zl)/N_,nu),a[A]=a[A]*.65,c[A]=c[A]*.65,qn>O_?(l[A]=qn*F_,Ee=.05):(l[A]=0,Ee=0,d[A]=Math.max(d[A],.3))}else l[A]=ge;o[A]=Ee;continue}const kt=a[A],Jt=c[A];if(kt!==0||Jt!==0){const ge=ht+kt*b,Ee=dt+Jt*b,Ge=Bi(ge,Ee);zi(Ge,0)?X(A,Ge,0):(ht=ge,dt=Ee);const Ye=Math.max(0,1-7*b);a[A]=Math.abs(kt)<.05?0:a[A]*Ye,c[A]=Math.abs(Jt)<.05?0:c[A]*Ye}if(d[A]>0){d[A]=d[A]-b,r[A]=ht,s[A]=dt;continue}const Kt=Math.sqrt(ht*ht+dt*dt)||1,ue=y[A],Me=h[A]*b,Be=k[A];if(Be>=0){const ge=Oe[Be],Ee=ge.lane>0?ge.s-F[A]>=ni[ge.lane-1].length:rc-ge.s+F[A]<ue;if(Kt<=ue+2||Kt<20||Ee)tt(A),ge.lane>0&&Ee&&(j[A]=0);else{const Ge=ar(Be,A),Ye=Ge[0]-ht,Sn=Ge[1]-dt,qn=Ye*Ye+Sn*Sn;if(qn>4e-4){const lr=Math.sqrt(qn);Mn(A,ht,dt,Ye/lr,Sn/lr,Math.min(lr,Me*1.5))}else r[A]=ht,s[A]=dt;continue}}const Xn=j[A];if(Xn>0){const ge=ni[Xn-1],Ee=E[A]+Me;if(E[A]=Ee,Ee>=ge.length)j[A]=0;else{const Ge=Math.min(ge.length,Math.floor(Ee)+3),Ye=x[A],Sn=ge.xs[Ge]+ge.nxs[Ge]*Ye,qn=ge.zs[Ge]+ge.nzs[Ge]*Ye,lr=Sn-ht,wc=qn-dt,Rc=Math.hypot(lr,wc)||1;Mn(A,ht,dt,lr/Rc,wc/Rc,Me);continue}}if(ot===Ht.cavalry){const ge=K[A]===1,Ee=ge?1:-1;!ge&&Kt<P_?(bt(m[A],ot,Math.atan2(dt,ht)),v[A]=1.2,i.thorns>0&&fn(A,i.thorns,eu),K[A]=1):ge&&Kt>L_&&(K[A]=0),Mn(A,ht,dt,ht/Kt*Ee,dt/Kt*Ee,Me);continue}Kt>ue?Mn(A,ht,dt,-ht/Kt,-dt/Kt,Me):(r[A]=ht,s[A]=dt,xe(A,ot,Kt,ht,dt,b),Kt<Ys?(r[A]=ht/Kt*Ys,s[A]=dt/Kt*Ys):zi(Bi(ht,dt),0)&&Mn(A,ht,dt,-ht/Kt,-dt/Kt,.15))}}function On(){const b=nn/2;mt.fill(0);for(let A=0;A<G;A+=1){const P=Math.floor(r[A]/ts)+b,Y=Math.floor(s[A]/ts)+b;if(P<0||Y<0||P>=nn||Y>=nn){Dt[A]=-1;continue}const $=Y*nn+P;Dt[A]=$,mt[$+1]=mt[$+1]+1}for(let A=0;A<ct;A+=1)mt[A+1]=mt[A+1]+mt[A];for(let A=0;A<G;A+=1){const P=Dt[A];if(P<0)continue;const Y=mt[P];pt[Y]=A,mt[P]=Y+1}for(let A=ct;A>0;A-=1)mt[A]=mt[A-1];mt[0]=0}function Xr(b,A){if(o[b]>0||o[A]>0)return;const P=k[b]>=0,Y=k[A]>=0;if(P&&Y)return;const $=r[A]-r[b],ot=s[A]-s[b],ht=oa[H[b]]+oa[H[A]],dt=$*$+ot*ot;if(dt>=ht*ht||dt<1e-6)return;const Ft=Math.sqrt(dt),kt=(ht-Ft)*.4/Ft;P||(r[b]=r[b]-$*kt,s[b]=s[b]-ot*kt),Y||(r[A]=r[A]+$*kt,s[A]=s[A]+ot*kt)}const gh=[1,nn-1,nn,nn+1];function _h(){for(let b=0;b<ct-nn-1;b+=1){const A=mt[b],P=Math.min(mt[b+1],A+Ql);if(P!==A)for(let Y=A;Y<P;Y+=1){const $=pt[Y];if(!(oa[H[$]]<=0)){for(let ot=Y+1;ot<P;ot+=1)Xr($,pt[ot]);for(let ot=0;ot<4;ot+=1){const ht=b+gh[ot],dt=mt[ht],Ft=Math.min(mt[ht+1],dt+Ql);for(let kt=dt;kt<Ft;kt+=1)Xr($,pt[kt])}}}}}function vh(){for(let b=0;b<G;b+=1){const A=o[b];if(A<=0||A>B_||H[b]===Ht.flyer)continue;const P=a[b],Y=c[b];if(P*P+Y*Y<jl*jl)continue;const $=Dt[b];if($<0)continue;const ot=mt[$+1];let ht=0;for(let dt=mt[$];dt<ot&&ht<z_;dt+=1){const Ft=pt[dt];Ft===b||o[Ft]>0||Ws[H[Ft]]<.3||(ht+=1,fn(Ft,f[Ft]*k_,nu),Q(Ft,P*Jl,Y*Jl,5+e()*6),a[b]=a[b]*.85,c[b]=c[b]*.85)}}}function xh(b){const A=H_*b;for(let P=0;P<G;P+=1){if(M[P]<=0||e()>A)continue;const Y=Dt[P];if(Y<0)continue;const $=mt[Y],ot=mt[Y+1]-$;if(ot<2)continue;const ht=pt[$+Math.floor(e()*ot)];ht!==P&&M[ht]<=0&&T(ht,g[P]*G_,i.burnTime*.7)}}function Mh(b){if(Ut+=b,Ut<V_)return;const A=Ut;Ut=0,On(),_h(),vh(),i.burnSpread&&xh(A);for(let P=0;P<Xt.length;P+=2){const Y=Xt[P],$=Xt[P+1];wi(Y,$)&&gt.push({type:"heal",x:Y,z:$})}Xt.length=0}function Ao(b){const A=b.radius*b.radius;let P=0;for(let Y=0;Y<G;Y+=1){const $=r[Y],ot=s[Y];$*$+ot*ot>A||Math.abs(un(Math.atan2(ot,$)-ut-b.center))<=b.arc/2&&(P+=1)}return P}function wo(b,A,P){let Y=null;if(G===0)return null;const $=A*A,ot=Math.max(1,Math.floor(G/150));for(let ht=0;ht<b;ht+=1){const dt=Math.floor(e()*G),Ft=r[dt],kt=s[dt];if(Ft*Ft+kt*kt>Mi*Mi||P&&!P(Ft,kt))continue;let Jt=0;for(let Kt=0;Kt<G;Kt+=ot){const ue=r[Kt]-Ft,Me=s[Kt]-kt;ue*ue+Me*Me<=$&&(Jt+=ot)}(!Y||Jt>Y.hits)&&(Y={x:Ft,z:kt,hits:Jt})}return Y}function Sh(){if(i.sweep.auto){const{left:b,right:A}=i.sweep;Rt.ML<=0&&Ao(b)>0&&se("ML"),Rt.MR<=0&&Ao(A)>0&&se("MR")}if(i.q.auto&&i.q.unlocked&&Rt.Q<=0){const b=wo(6,i.q.blast);b&&se("Q",b.x,b.z)}if(i.w.auto&&i.w.unlocked&&Rt.W<=0){const b=wo(6,i.w.radius);b&&se("W",b.x,b.z)}}function yh(){if(!(G===0||G>R_||De.length>0||be>=0))for(let b=0;b<G;b+=1)y[b]=Math.min(y[b],C_)}function Eh(b){Tt+=b,At=0,i.regen>0&&(Gt=Math.min(i.maxHp,Gt+i.regen*b));for(const A of ac)Rt[A]>0&&(Rt[A]=Math.max(0,Rt[A]-b));To(b),!Pt&&(Sh(),dn(b),ye(b),zt(b),Vt(b),xn(b),de(b),yh(),Fn(b),qe(b),It(),Mh(b),W())}return{x:r,z:s,y:o,vx:a,vy:l,vz:c,hp:u,maxHp:f,flash:_,aggro:v,timer:p,role:H,form:k,phase:I,banner:U,stun:d,guarded:O,burnT:M,state:K,deaths:ee,px:Mt,py:Wt,pz:yt,pvx:R,pvy:S,pvz:w,prole:_t,sweeps:Et,fireballs:B,pillars:qt,burns:Nt,rings:re,legions:Oe,events:gt,cooldowns:Rt,config:i,get count(){return G},get projectileCount(){return St},get yaw(){return ut},get bossHp(){return Gt},get time(){return Tt},get wave(){return Ct},get kills(){return Gr},get wallHits(){return xt},get deathCount(){return N},clearDeaths(){N=0},get spoils(){return Vr},get spawned(){return Un},get finished(){return Pt},get gateWarning(){return be},get gateActive(){return pe},get enraged(){return Nn>ca},get breathLeft(){return nt.t},get breathTotal(){return nt.total},get slamWindup(){return lt},get waveTimeLeft(){return pe?0:Math.max(0,$t)},isCharging(b){const A=H[b];if(A!==Ht.mage&&A!==Ht.catapult)return!1;const P=A===Ht.mage?Wl:T_;return k[b]<0&&d[b]<=0&&p[b]<P&&Math.hypot(r[b],s[b])<=y[b]},canUse:me,cast:se,countInSweep:Ao,densestPoint:wo,turn(b){const A=nt.t>0&&!i.e.free?g_:1;ut=un(ut+b*A)},step(b){if(Pt||b<=0)return;const A=Math.max(1,Math.ceil(b/Wg-1e-6)),P=b/A;for(let Y=0;Y<A&&!Pt;Y+=1)Eh(P)},debugSpawn(b,A,P,Y){return Ai(b,A,P,Y)},debugSetBossHp(b){Gt=b},debugStartWave(b){cr(b)},jumpToWave(b){Pt||(G=0,St=0,De.length=0,Oe.length=0,be=-1,le=0,Nn=0,pe=!1,cr(Math.max(1,Math.min(Lr[Lr.length-1],Math.round(b)))))},debugHold(){pe=!0,Ct=Math.max(Ct,1)}}}const Qn=16,J_=.15,iu=3.2,ru=.85,Q_=.25,tv=[1,1.6,.5,2.6,1.2,1.4,.8,6,2];function ev(i,t){let e=0,n=0;const r=new Float32Array(Qn);function s(){r.fill(0);const{x:l,z:u,role:f}=i,d=Math.max(i.config.sweep.right.radius+14,i.config.e.unlocked||i.config.w.unlocked?90:60);for(let v=0;v<i.count;v+=1){const m=l[v],h=u[v],y=Math.hypot(m,h);if(y>d)continue;const E=y<i.config.sweep.left.radius?1.8:1,x=Math.floor((Math.atan2(h,m)+Math.PI)/(Math.PI*2)*Qn)%Qn;r[x]=r[x]+tv[f[v]]*E}let p=-1,_=0;for(let v=0;v<Qn;v+=1){const m=r[v]+.5*(r[(v+1)%Qn]+r[(v+Qn-1)%Qn]),h=(v+.5)/Qn*Math.PI*2-Math.PI,y=1+.35*Math.max(0,Math.cos(un(h-i.yaw)));m*y>_&&(_=m*y,p=v)}p>=0&&(n=(p+.5)/Qn*Math.PI*2-Math.PI)}function o(){const{x:l,z:u}=i,f=Math.cos(i.yaw),d=Math.sin(i.yaw),p=i.config.e.width/2;let _=0;for(let v=0;v<i.count;v+=1){const m=l[v],h=u[v],y=m*f+h*d;if(y<0||y>i.config.e.length)continue;const E=-m*d+h*f;E>=-p&&E<=p&&(_+=1)}return _}function a(l){const{x:u,z:f}=i,d=l*l;let p=0;for(let _=0;_<i.count;_+=1){const v=u[_],m=f[_];v*v+m*m<=d&&(p+=1)}return p}function c(){const{config:l}=i;if(t()<Q_)return;const{left:u,right:f}=l.sweep;if(i.canUse("ML")&&i.countInSweep(u)>=Math.min(2,i.count)&&i.cast("ML"),i.canUse("MR")&&i.countInSweep(f)>=Math.min(2,i.count)&&i.cast("MR"),i.canUse("Q")){const d=i.yaw,p=i.densestPoint(4,l.q.blast,(_,v)=>Math.abs(un(Math.atan2(v,_)-d))<ru);p&&i.cast("Q",p.x,p.z)}if(i.canUse("W")){const d=i.yaw,p=i.densestPoint(5,l.w.radius,(_,v)=>Math.hypot(_,v)<Mi&&Math.abs(un(Math.atan2(v,_)-d))<ru);p&&p.hits>=Math.min(2,i.count)&&i.cast("W",p.x,p.z)}i.canUse("E")&&o()>=Math.min(6,1+i.count/60)&&i.cast("E"),i.canUse("R")&&(a(l.r.radius)>=Math.min(30,8+i.count/12)||i.bossHp<l.maxHp*.4)&&i.cast("R")}return{act(l){e-=l,e<=0&&(e+=J_,s(),c());const u=un(n-i.yaw),f=Math.max(-iu*l,Math.min(iu*l,u));i.turn(f)}}}const nv={hit:.09,heavyHit:.2,kill:.05};function iv(){const i=window.AudioContext,t=new i,e=t.createGain();e.gain.value=.7;const n=t.createDynamicsCompressor();e.connect(n),n.connect(t.destination);const r=()=>void t.resume();window.addEventListener("pointerdown",r),window.addEventListener("keydown",r),t.resume();const s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),o=s.getChannelData(0);for(let y=0;y<o.length;y+=1)o[y]=Math.random()*2-1;function a(y,E,x,F,C,I=.01){const D=t.currentTime,M=t.createBufferSource();M.buffer=s,M.loop=!0,M.loopStart=Math.random();const g=t.createBiquadFilter();g.type=E,g.frequency.setValueAtTime(x,D),g.frequency.exponentialRampToValueAtTime(Math.max(20,F),D+y);const L=t.createGain();L.gain.setValueAtTime(1e-4,D),L.gain.exponentialRampToValueAtTime(C,D+I),L.gain.exponentialRampToValueAtTime(1e-4,D+y),M.connect(g),g.connect(L),L.connect(e),M.start(D),M.stop(D+y+.05)}function c(y,E,x,F,C,I=0){const D=t.currentTime+I,M=t.createOscillator();M.type=y,M.frequency.setValueAtTime(E,D),M.frequency.exponentialRampToValueAtTime(Math.max(20,x),D+F);const g=t.createGain();g.gain.setValueAtTime(1e-4,D),g.gain.exponentialRampToValueAtTime(C,D+.015),g.gain.exponentialRampToValueAtTime(1e-4,D+F),M.connect(g),g.connect(e),M.start(D),M.stop(D+F+.05)}function l(){for(const[y,E]of[[73.4,0],[110,4],[146.8,-5]]){const x=t.currentTime,F=t.createOscillator();F.type="sawtooth",F.detune.value=E,F.frequency.setValueAtTime(y*.8,x),F.frequency.linearRampToValueAtTime(y,x+.35),F.frequency.setValueAtTime(y,x+2.1);const C=t.createBiquadFilter();C.type="lowpass",C.frequency.value=620;const I=t.createGain();I.gain.setValueAtTime(1e-4,x),I.gain.linearRampToValueAtTime(.16,x+.4),I.gain.setValueAtTime(.16,x+1.9),I.gain.exponentialRampToValueAtTime(1e-4,x+2.8),F.connect(C),C.connect(I),I.connect(e),F.start(x),F.stop(x+2.9)}}const u=t.createBufferSource();u.buffer=s,u.loop=!0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=520,f.Q.value=.5;const d=t.createGain();d.gain.value=0,u.connect(f),f.connect(d),d.connect(e),u.start();let p=.5,_=0;const v=window.setInterval(()=>{if(document.hidden||t.state!=="running")return;_=(_+1)%8,_===0||_===3||_===6?c("sine",88,44,.32,.22*p):p>.7&&c("sine",120,70,.16,.09*p)},280),m=new Map;let h=!1;return{play(y){const E=t.currentTime,x=nv[y];if(!(x!==void 0&&E-(m.get(y)??-1)<x))switch(m.set(y,E),y){case"sweep":a(.42,"bandpass",300,1400,.5,.12),c("sine",150,55,.3,.3);break;case"cast":a(.3,"bandpass",900,2500,.16,.08);break;case"pillar":c("sine",120,34,.6,.6),a(.7,"lowpass",2400,180,.55,.008);break;case"slam":c("sine",86,24,1.1,1),a(1.1,"lowpass",1600,60,.9,.005);break;case"hit":a(.07,"highpass",2200,1400,.09);break;case"heavyHit":c("square",220,90,.14,.14),a(.18,"lowpass",1200,300,.22);break;case"kill":a(.05,"bandpass",1800,900,.1);break;case"horn":l();break;case"wave":c("sine",70,40,.5,.45);break;case"gateClear":c("triangle",262,262,.35,.3),c("triangle",392,392,.4,.3,.14),c("triangle",523,523,.7,.3,.28);break;case"victory":for(const[F,C]of[262,330,392,523,659].entries())c("triangle",C,C,1.2,.26,F*.17);l();break;case"defeat":c("sawtooth",110,28,2,.4),a(2,"lowpass",900,40,.5,.05);break}},setBreath(y){d.gain.setTargetAtTime(y?.55:0,t.currentTime,.05)},setDrums(y){p=y},toggleMute(){return h=!h,e.gain.value=h?0:.7,h},destroy(){window.clearInterval(v),window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",r),t.close().catch(()=>{})}}}const Ke=24,Ks=Math.PI*2/Ke,rv=1.8,sv=4,ov=.15,av=92,cv=140,lv={ML:"좌클릭",MR:"우클릭",Q:"Q",W:"W",E:"E",R:"R"},uv={ML:"왼손",MR:"오른손",Q:"화염구",W:"불기둥",E:"브레스",R:"대지 강타"};function hv(i){const t=i*180/Math.PI,e=Math.abs(t),n=t>=0?"오른쪽":"왼쪽";return e<25?"정면":e<65?`${n} 앞`:e<115?n:e<155?`${n} 뒤`:"뒤"}function fv(i){const t=ae("canvas","rt-overlay"),e=t.getContext("2d");let n=0,r=0,s=1;const o=()=>{const rt=i.getBoundingClientRect();n=rt.width,r=rt.height,s=Math.min(2,window.devicePixelRatio||1),t.width=Math.max(1,Math.round(n*s)),t.height=Math.max(1,Math.round(r*s))},a=new ResizeObserver(o);a.observe(i),o();const c=ae("div","rt-cross"),l=ae("div","rt-wave"),u=ae("div","rt-wave__title"),f=ae("div","rt-wave__sub");l.append(u,f);const d=ae("div","rt-banner"),p=ae("div","rt-banner__big"),_=ae("div","rt-banner__small");d.append(p,_);const v=ae("div","rt-bottom"),m=ae("div","rt-hp"),h=ae("div","rt-hp__lag"),y=ae("div","rt-hp__fill"),E=ae("div","rt-hp__text");m.append(h,y,E);const x=ae("div","rt-skills"),F=new Map;for(const rt of ac){const xt=ae("div","rt-skill"),At=ae("div","rt-skill__cd"),Mt=ae("div","rt-skill__num");xt.append(ae("div","rt-skill__key",lv[rt]),ae("div","rt-skill__name",uv[rt]),At,Mt),x.append(xt),F.set(rt,{box:xt,cd:At,num:Mt})}v.append(m,x);const C=ae("div","rt-log");C.hidden=!0;const I=ae("div","rt-log__title","받는 공격");C.append(I);const D=ln.map(rt=>{const xt=ae("div","rt-log__row");xt.style.setProperty("--c",rt.color);const At=ae("span","rt-log__dir"),Mt=ae("span","rt-log__dmg");return xt.append(ae("span","rt-log__mark",rt.mark),At,Mt),xt.hidden=!0,C.append(xt),{row:xt,dir:At,dmg:Mt}}),M=ae("div","rt-stats"),g=ae("div","rt-stats__spoils"),L=ae("div","rt-stats__kills"),V=ae("div","rt-stats__combo"),H=ae("div","rt-stats__fps");M.append(g,L,V,H);const j=ae("div","rt-hint");j.innerHTML="화면을 클릭해 시선 고정 · <b>마우스</b> 또는 <b>A D</b> 회전 · <b>왼쪽·오른쪽 클릭</b> 휩쓸기";const O=ae("div","rt-pause");O.hidden=!0;const U=ae("strong",void 0,"일시 정지"),K=ae("span",void 0,"화면을 클릭하면 계속합니다. 다시 Esc를 누르면 런을 끝냅니다.");O.append(U,K),i.append(t,c,l,d,v,C,M,j,O);const k=new Float32Array(xi*Ke),it=new Float32Array(xi*Ke),st=new Float32Array(xi),J=new Uint16Array(Ke);let at=0,ft=0,G=1,ct=0,mt=0,pt=0,Dt=-1,Ut=0;const Xt=rt=>Math.floor((un(rt)+Math.PI)/(Math.PI*2)*Ke)%Ke,ie=rt=>(rt+.5)/Ke*Math.PI*2-Math.PI;function jt(rt){const xt=n/2,At=r/2,Mt=Math.min(n,r)*.25;e.setLineDash([9,7]),e.lineCap="butt";const Wt=ln[Ht.mage];for(let yt=0;yt<Ke;yt+=1){if(J[yt]===0)continue;const w=un(ie(yt)-rt.yaw)-Math.PI/2;e.strokeStyle=(Wt==null?void 0:Wt.color)??"#c98bff",e.globalAlpha=.55+Math.sin(rt.time*14)*.25,e.lineWidth=5,e.beginPath(),e.arc(xt,At,Mt+16,w-Ks*.48,w+Ks*.48),e.stroke()}e.setLineDash([]),e.globalAlpha=1,e.font="700 13px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let yt=0;yt<Ke;yt+=1){let R=-1,S=0,w=0,z=0;for(let Tt=0;Tt<xi;Tt+=1){const Pt=k[Tt*Ke+yt];w+=Pt,z+=it[Tt*Ke+yt],Pt>S&&(S=Pt,R=Tt)}if(R<0||w<.02)continue;const et=ln[R];if(!et)continue;const _t=un(ie(yt)-rt.yaw)-Math.PI/2,vt=Math.min(1,w);e.globalAlpha=.35+vt*.65,e.strokeStyle=et.color,e.lineWidth=7+vt*12,e.beginPath(),e.arc(xt,At,Mt,_t-Ks*.46,_t+Ks*.46),e.stroke();const St=Mt+18+vt*12,Gt=xt+Math.cos(_t)*St,ut=At+Math.sin(_t)*St;if(e.fillStyle=et.color,e.beginPath(),e.moveTo(Gt,ut),e.lineTo(xt+Math.cos(_t-.05)*(Mt+8),At+Math.sin(_t-.05)*(Mt+8)),e.lineTo(xt+Math.cos(_t+.05)*(Mt+8),At+Math.sin(_t+.05)*(Mt+8)),e.closePath(),e.fill(),vt>.08){const Tt=St+20,Pt=xt+Math.cos(_t)*Tt,Rt=At+Math.sin(_t)*Tt,Et=`${et.name} ×${Math.max(1,Math.round(z))}`,qt=e.measureText(Et).width+12;e.globalAlpha=.5+vt*.5,e.fillStyle="rgba(18,8,6,0.82)",e.beginPath(),e.roundRect(Pt-qt/2,Rt-10,qt,20,5),e.fill(),e.fillStyle=et.color,e.fillText(Et,Pt,Rt+1)}}e.globalAlpha=1}function ee(){if(ft<=.01)return;const rt=e.createRadialGradient(n/2,r/2,Math.min(n,r)*.35,n/2,r/2,Math.max(n,r)*.72);rt.addColorStop(0,"rgba(200,20,10,0)"),rt.addColorStop(1,`rgba(200,20,10,${Math.min(.5,ft*.5)})`),e.fillStyle=rt,e.fillRect(0,0,n,r)}function N(rt){const xt=av,At=n-xt-18,Mt=r-xt-18;e.fillStyle="rgba(14,8,6,0.72)",e.beginPath(),e.arc(At,Mt,xt,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,200,150,0.4)",e.lineWidth=1;for(const z of[.33,.66,1])e.beginPath(),e.arc(At,Mt,xt*z,0,Math.PI*2),e.stroke();e.fillStyle="rgba(255,220,170,0.1)",e.beginPath(),e.moveTo(At,Mt),e.arc(At,Mt,xt,-Math.PI/2-.85,-Math.PI/2+.85),e.closePath(),e.fill();const Wt=Math.cos(-rt.yaw-Math.PI/2),yt=Math.sin(-rt.yaw-Math.PI/2),R=xt/cv,S=ln.map(z=>z.color),w=Math.max(1,Math.floor(rt.count/900));for(let z=0;z<rt.count;z+=w){const et=rt.x[z]*R,Z=rt.z[z]*R,_t=et*Wt-Z*yt,vt=et*yt+Z*Wt;_t*_t+vt*vt>xt*xt||(e.fillStyle=S[rt.role[z]]??"#fff",e.fillRect(At+_t-1.1,Mt+vt-1.1,2.2,2.2))}e.fillStyle="#fff",e.beginPath(),e.moveTo(At,Mt-6),e.lineTo(At-4,Mt+4),e.lineTo(At+4,Mt+4),e.closePath(),e.fill()}return{root:i,hit(rt,xt,At){const Mt=Xt(xt),Wt=rt*Ke+Mt,yt=Math.min(1,At/6+.04);k[Wt]=Math.min(1.4,k[Wt]+yt),it[Wt]=it[Wt]+1,st[rt]=st[rt]+At,ft=Math.min(1,ft+.02+At/40)},kill(){mt+=1,pt=1.4},banner(rt,xt,At,Mt){p.textContent=rt,p.className=`rt-banner__big${At==="good"?" is-good":At==="bad"?" is-bad":""}`,_.textContent=xt,d.classList.add("is-on"),ct=Mt},hideHint(){j.classList.add("is-off")},setPaused(rt,xt){O.hidden=!rt,xt&&(U.textContent=xt)},update(rt,xt,At){const Mt=Math.max(0,1-xt/rv);for(let w=0;w<k.length;w+=1){const z=k[w]*Mt-xt*.12;k[w]=z>0?z:0,z<=0&&(it[w]=0)}if(ft=Math.max(0,ft-xt*1.3),at-=xt,at<=0){at=ov,J.fill(0);for(let w=0;w<rt.count;w+=1)if(rt.isCharging(w)){const z=Xt(Math.atan2(rt.z[w],rt.x[w]));J[z]=J[z]+1}}rt.wave!==Dt&&(Dt=rt.wave,u.textContent=rt.wave===0?"전투 준비":`웨이브 ${rt.wave} / ${ah}`);const Wt=rt.gateActive&&rt.wave>0;u.classList.toggle("is-gate",Wt),f.textContent=Wt?`관문 · 남은 적 ${mn(rt.count)}${rt.enraged?" · 사기 고조":""}`:rt.wave===0?`적 ${mn(rt.count)}`:`적 ${mn(rt.count)} · 다음 웨이브 ${Math.ceil(rt.waveTimeLeft)}초`;const yt=Math.max(0,rt.bossHp/rt.config.maxHp);y.style.transform=`scaleX(${yt})`,G=Math.max(yt,G-xt*.35),h.style.transform=`scaleX(${G})`,E.textContent=`${mn(Math.ceil(rt.bossHp))} / ${mn(Math.round(rt.config.maxHp))}`,i.classList.toggle("is-hurt",yt<.3);const R={ML:!0,MR:!0,Q:rt.config.q.unlocked,W:rt.config.w.unlocked,E:rt.config.e.unlocked,R:rt.config.r.unlocked},S={ML:rt.config.sweep.left.cooldown,MR:rt.config.sweep.right.cooldown,Q:rt.config.q.cooldown,W:rt.config.w.cooldown,E:rt.config.e.cooldown,R:rt.config.r.cooldown};for(const w of ac){const z=F.get(w);if(!z)continue;const et=rt.cooldowns[w],Z=R[w];z.box.classList.toggle("is-locked",!Z),z.box.classList.toggle("is-ready",Z&&et<=0),z.box.classList.toggle("is-active",w==="E"&&rt.breathLeft>0||w==="R"&&rt.slamWindup>=0),z.cd.style.transform=`scaleY(${Z?Math.min(1,et/S[w]):1})`,z.num.textContent=Z&&et>0?et.toFixed(et<3?1:0):Z?"":"잠김"}if(Ut+=xt,Ut>.12){const w=Math.max(0,1-Ut/sv);let z=!1;const et=D.map((Z,_t)=>({row:Z,r:_t,dmg:st[_t]})).sort((Z,_t)=>_t.dmg-Z.dmg);for(const Z of et){if(Z.row.row.hidden=Z.dmg<.5,Z.row.row.hidden)continue;z=!0;let _t=0,vt=-1,St=0;for(let ut=0;ut<Ke;ut+=1){const Tt=k[Z.r*Ke+ut];St+=it[Z.r*Ke+ut],Tt>vt&&(vt=Tt,_t=ut)}const Gt=ln[Z.r];Z.row.dir.textContent=`${(Gt==null?void 0:Gt.name)??""} ${hv(un(ie(_t)-rt.yaw))}`,Z.row.dmg.textContent=St>0?`-${mn(Math.ceil(Z.dmg))}`:"",C.append(Z.row.row)}for(let Z=0;Z<xi;Z+=1)st[Z]=st[Z]*w;Ut=0,C.hidden=!z}g.textContent=`✦ +${mn(Math.floor(rt.spoils))}`,L.textContent=`처치 ${mn(rt.kills)}`,pt-=xt,pt<=0&&(mt=0),V.textContent=mt>=5?`${mt} 처치!`:"",V.style.opacity=mt>=5?String(Math.min(1,pt*2)):"0",H.textContent=At.showFps?`${At.fps.toFixed(0)} FPS · 적 ${rt.count}`:"",ct>0&&(ct-=xt,ct<=0&&d.classList.remove("is-on")),e.setTransform(s,0,0,s,0,0),e.clearRect(0,0,n,r),ee(),jt(rt),At.radar&&N(rt)},destroy(){a.disconnect()}}}function gs(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new ke;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=i[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=su(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][d]);const _=su(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}return c}function su(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new we(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let d=0,p=u.count;d<p;d++)for(let _=0;_<e;_++){const v=u.getComponent(d,_);a.setComponent(d+f,_,v)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const dv=3e4,pv=3e4,$e=6e3,ou=200,Ni=.72,au=130,cu=45,Zs=170,lu=50,mv=46,uu=4.5,gv=-1;function Wi(i,t,e,n,r){const s=i.index?i.toNonIndexed():i;s.translate(e,n,r);const o=s.attributes.position.count,a=new Yt(t),c=new Float32Array(o*3);for(let l=0;l<o;l+=1)c[l*3]=a.r,c[l*3+1]=a.g,c[l*3+2]=a.b;return s.setAttribute("color",new we(c,3)),s.deleteAttribute("uv"),s.computeVertexNormals(),s}const an=(i,t,e,n,r,s,o=0)=>Wi(new Xe(i,t,e),n,r,s,o),_v=(i,t,e,n,r,s=0,o=6)=>Wi(new bi(i,t,o),e,n,r,s);function Ue(i,t,e,n,r,s,o,a=0){const c=an(i,t,e,n,s,o,a),l=c.attributes.position,u=c.attributes.color,f=new Yt(r);for(let d=0;d<l.count;d+=1)l.getY(d)<o&&u.setXYZ(d,f.r,f.g,f.b);return c}function hu(i,t){const e="#d9b08c",n=[],r=(...s)=>{t&&n.push(...s)};switch(i){case Ht.infantry:n.push(Ue(.72,1.6,.42,"#c8452e","#3b2c26",0,.8),Ue(.46,.56,.46,"#8a8a8f",e,0,1.88)),r(Ue(.1,3.2,.1,"#eaeaea","#a8946a",.5,1.6,.22));break;case Ht.archer:n.push(Ue(.62,1.55,.36,"#6d9a35","#3a4426",0,.78),Ue(.42,.6,.42,"#40601f",e,0,1.85)),r(an(.1,2.2,.1,"#9a6b3c",-.5,1.4,.25));break;case Ht.tank:n.push(Ue(1.1,1.9,.66,"#5476b5","#2b3550",0,.95),Ue(.56,.6,.56,"#ffd166","#aeb9cf",0,2.2),Ue(1.5,2.05,.16,"#6f9bf0","#3f73d8",.08,1.24,.56));break;case Ht.mage:n.push(Wi(new bi(.62,1.9,5),"#6b34b5",0,.95,0),Wi(new bi(.42,1.2,5),"#3f1f7a",0,2.3,0)),r(Ue(.11,2.9,.11,"#f0c5ff","#6a4a2e",.55,1.45,.1));break;case Ht.cavalry:n.push(Ue(.7,.9,2,"#6b4a2e","#4d3520",0,1.2),an(.34,.9,1.7,"#3a2a1c",0,.4),Ue(.4,1.1,.5,"#5a3c24","#6b4a2e",0,1.9,1.15),Ue(.6,1.3,.42,e,"#d6a832",0,2.25,-.1)),r(an(.1,.1,3.2,"#d7c9a0",.42,2,1));break;case Ht.ironclad:n.push(Ue(1.25,2,.8,"#aab6c6","#5b6470",0,1),Ue(.62,.62,.62,"#d6dee8","#8793a3",0,2.36),an(1.6,.26,.9,"#8793a3",0,2)),r(Ue(.24,3,.24,"#8793a3","#6b7686",.85,1.5,.3));break;case Ht.catapult:n.push(an(4.2,.5,6,"#6b4a2e",0,1.1),an(5,1.6,1.3,"#3a2a1c",0,.8,2),an(5,1.6,1.3,"#3a2a1c",0,.8,-2),an(3.4,3.6,.5,"#7c5835",0,2.9,0),Wi(new Xe(.45,.45,7).rotateX(.7),"#a87c4f",0,3.4,-1.2),Wi(new Eo(.9,0),"#8f877f",0,1.6,-3.8));break;case Ht.flyer:n.push(Ue(.7,.55,2.2,"#7a3c8f","#5b2c6f",0,0,.2),an(4,.12,1.2,"#c9589f",0,.25,-.1),Ue(.5,1.1,.4,e,"#3f3a5a",0,.9,-.1));break;default:n.push(Wi(new bi(.62,1.9,5),"#f1ead2",0,.95,0),Ue(.42,.5,.42,"#7dffc4",e,0,2.05)),r(Ue(.11,2.7,.11,"#7dffc4","#d7b34a",.55,1.35,.1));break}return n.length===1?n[0]:gs(n)}function vv(){return gs([an(.16,11,.16,"#3a2a20",0,5.5),an(3.2,4.2,.08,"#b31f2d",1.65,8.6),an(.7,2.2,.1,"#ffd166",1.65,8.8),_v(.3,.7,"#ffd166",0,11.3,0,5)])}function xv(){const i=new er({vertexColors:!0});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 iA; // 위치, 방향 보정
        attribute vec4 iB; // 기울기, 크기, 번쩍임, 화상
        vec3 instRotate(vec3 v) {
          float d = max(length(iA.xz), 0.001);
          float c0 = -iA.z / d;
          float s0 = -iA.x / d;
          float co = cos(iA.w);
          float so = sin(iA.w);
          float c = c0 * co - s0 * so;
          float s = s0 * co + c0 * so;
          float ct = cos(iB.x);
          float st = sin(iB.x);
          vec3 tilted = vec3(v.x, v.y * ct - v.z * st, v.y * st + v.z * ct);
          return vec3(c * tilted.x + s * tilted.z, tilted.y, -s * tilted.x + c * tilted.z);
        }`).replace("#include <beginnormal_vertex>","vec3 objectNormal = instRotate(normal);").replace("#include <begin_vertex>","vec3 transformed = instRotate(position) * iB.y + iA.xyz;").replace("#include <color_vertex>",`#include <color_vertex>
        vColor *= 1.0 + iB.z * 2.6;
        if (iB.w > 0.0) vColor = mix(vColor, vec3(1.6, 0.62, 0.12), iB.w * 0.75);
        else if (iB.w < 0.0) vColor *= 0.13;`)},i}function fu(i,t,e){const n=new Vg;n.setAttribute("position",i.getAttribute("position")),n.setAttribute("normal",i.getAttribute("normal")),n.setAttribute("color",i.getAttribute("color"));const r=new Float32Array(e*4),s=new Float32Array(e*4),o=new uo(r,4).setUsage(Ei),a=new uo(s,4).setUsage(Ei);n.setAttribute("iA",o),n.setAttribute("iB",a),n.instanceCount=0;const c=new _e(n,t);return c.frustumCulled=!1,{mesh:c,geometry:n,a:r,b:s,attrA:o,attrB:a,capacity:e,n:0}}function Mv(){const i=new Hn,t=xv(),e=[],n=[];for(let M=0;M<xi;M+=1){const g=M===Ht.catapult,L=fu(hu(M,!0),t,g?400:pv),V=fu(hu(M,!1),t,g?400:dv);e.push(L),n.push(V),i.add(L.mesh,V.mesh)}const r=new ho(vv(),new er({vertexColors:!0}),ou);r.instanceMatrix.setUsage(Ei),r.frustumCulled=!1,r.count=0,i.add(r);const s=new ve,o=new Float32Array($e),a=new Float32Array($e),c=new Float32Array($e),l=new Float32Array($e),u=new Float32Array($e),f=new Float32Array($e),d=new Float32Array($e),p=new Float32Array($e),_=new Float32Array($e),v=new Float32Array($e),m=new Uint8Array($e),h=new Uint8Array($e),y=new Uint8Array($e),E=[o,a,c,l,u,f,d,p,_,v,m,h,y];let x=0,F=0;function C(M,g,L,V,H,j,O,U,K){const k=M.n;if(k>=M.capacity)return;M.n=k+1;const it=k*4,{a:st,b:J}=M;st[it]=g,st[it+1]=L,st[it+2]=V,st[it+3]=H,J[it]=j,J[it+1]=O,J[it+2]=U,J[it+3]=K}function I(M,g,L,V,H,j,O,U){let K=x;K>=$e?(K=F,F=(F+1)%$e):x+=1,o[K]=g,a[K]=L+.05,c[K]=V,l[K]=H+(Math.random()-.5)*3,f[K]=O+(Math.random()-.5)*3,u[K]=j!==0?j:3+Math.random()*5,d[K]=0,p[K]=4+Math.random()*10+Math.hypot(H,O)*.1,_[K]=Math.random()*6.28,v[K]=uu*(.75+Math.random()*.5),m[K]=M,h[K]=U?1:0,y[K]=0}function D(M){for(let g=x-1;g>=0;g-=1){const L=v[g]-M;if(L<=0){const at=x-1;if(g!==at)for(const ft of E)ft[g]=ft[at];x=at;continue}if(v[g]=L,y[g]===1){const at=a[g]-M*2.4;a[g]=at>0?at:0;continue}if(y[g]===2)continue;const V=o[g],H=c[g],j=a[g],O=u[g]-mv*M,U=l[g],K=f[g],k=V+U*M,it=H+K*M;let st=j+O*M;const J=Bi(k,it);if(zi(J,st)){if(-(U*sc(J)+K*oc(J))>18){y[g]=1,d[g]=1.45,v[g]=Math.min(L+1,uu);continue}l[g]=U*-.3,f[g]=K*-.3}else o[g]=k,c[g]=it;if(st<=0){st=0;const at=-O;if(at>9)u[g]=at*.3,st=.05,l[g]=l[g]*.6,f[g]=f[g]*.6,p[g]=p[g]*.6;else{y[g]=2,d[g]=1.5,a[g]=0;continue}}else u[g]=O;a[g]=st,d[g]=d[g]+p[g]*M}}return{group:i,reset(){x=0,F=0},takeDeaths(M){const{deaths:g}=M;for(let L=0;L<M.deathCount;L+=1){const V=L*go;I(g[V+6],g[V],g[V+1],g[V+2],g[V+3],g[V+4],g[V+5],fh[g[V+7]]==="fire")}},update(M,g,L,V,H){for(const N of e)N.n=0;for(const N of n)N.n=0;let j=0;const{x:O,z:U,y:K,flash:k,role:it,phase:st,aggro:J,banner:at,stun:ft,form:G,burnT:ct,state:mt}=M,pt=Math.cos(H.yaw),Dt=Math.sin(H.yaw),Ut=Math.tan(H.fov*Math.PI/360)*H.aspect*1.08,Xt=au*au,ie=cu*cu,jt=Zs*Zs,ee=(Zs-lu)**2;for(let N=0;N<M.count;N+=1){const rt=O[N],xt=U[N],At=rt-H.x,Mt=xt-H.z,Wt=At*At+Mt*Mt;if(Wt>ie){const Et=At*pt+Mt*Dt;if(Et<0)continue;const qt=Mt*pt-At*Dt,Nt=Et*Ut+8;if(qt>Nt||qt<-Nt)continue}const yt=K[N],R=it[N],S=ct[N]>0,w=k[N],z=st[N],et=R===Ht.flyer,Z=yt>0&&!et,_t=R===Ht.cavalry&&mt[N]===1?Math.PI:0,vt=S?.55+Math.sin(g*13+z)*.3:0,St=G[N]>=0,Gt=g*(St?5.5:9)+(St?0:z),ut=ft[N]>0,Tt=Z||ut||et?0:Math.abs(Math.sin(Gt))*.18,Pt=Z?yt*.45+z:ut?.5:et?Math.sin(g*3+z)*.15:Math.sin(Gt)*.09;if(C((Wt<Xt?e:n)[R],rt,yt+Tt,xt,_t,Pt,Ni,w,vt),at[N]&&yt<=0&&j<ou){const Et=Math.hypot(rt,xt)||1,qt=-rt/Et,Nt=-xt/Et;s.set(Nt*Ni,0,qt*Ni,rt,0,Ni,0,0,-qt*Ni,0,Nt*Ni,xt,0,0,0,1),r.setMatrixAt(j,s),j+=1}if(Wt>jt)continue;const Rt=Wt<ee?1:(Zs-Math.sqrt(Wt))/lu;if(S&&V.add(rt,yt+2+Math.sin(g*17+z)*.5,xt,1,.5,.1,.6*Rt,1.5),J[N]>0&&V.add(rt,yt+3.6,xt,1,.25,.12,.8*Rt,1.6),R===Ht.mage||R===Ht.catapult)if(M.isCharging(N)){const Et=3.2+Math.sin(g*18+z)*1.2;V.add(rt,yt+(R===Ht.mage?3.4:7),xt,.85,.45,1,.7*Rt,Et+(R===Ht.mage?0:3))}else R===Ht.mage&&V.add(rt,yt+3.2,xt,.7,.4,1,.6*Rt,1.2);else R===Ht.healer&&V.add(rt,yt+3.2,xt,.4,1,.75,.6*Rt,1.3)}D(L);for(let N=0;N<x;N+=1){const rt=o[N],xt=c[N],At=rt-H.x,Mt=xt-H.z,Wt=At*At+Mt*Mt;if(Wt>ie&&At*pt+Mt*Dt<0)continue;const yt=m[N],R=Math.min(1,v[N]*1.6),S=Wt<Xt?e:n;C(S[yt],rt,a[N],xt,_[N],d[N],Ni*R,0,h[N]?gv:0)}for(let N=0;N<xi;N+=1)for(const rt of[e[N],n[N]])rt.geometry.instanceCount=rt.n,rt.mesh.visible=rt.n>0,rt.n!==0&&(rt.attrA.clearUpdateRanges(),rt.attrA.addUpdateRange(0,rt.n*4),rt.attrA.needsUpdate=!0,rt.attrB.clearUpdateRanges(),rt.attrB.addUpdateRange(0,rt.n*4),rt.attrB.needsUpdate=!0);r.count=j,r.instanceMatrix.needsUpdate=!0}}}const Yi=30,js=4.5,fs="#8a6f68",lc="#5f4c4a",_o="#3d3531",ph="#ff7a2a";function vo(i,t){const e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Yt(t),s=new Float32Array(n*3);for(let o=0;o<n;o+=1)s[o*3]=r.r,s[o*3+1]=r.g,s[o*3+2]=r.b;return e.setAttribute("color",new we(s,3)),e.deleteAttribute("uv"),e.computeVertexNormals(),e}function du(i,t){const e=new Wn(i,t,1,9,4);e.translate(0,.5,0);const n=e.attributes.position;for(let s=0;s<n.count;s+=1){const o=n.getY(s),a=1+Math.sin(o*Math.PI)*.16;n.setX(s,n.getX(s)*a),n.setZ(s,n.getZ(s)*a)}const r=[vo(e,fs)];for(const s of[.24,.72]){const o=new Wn(Math.max(i,t)*1.12,Math.max(i,t)*1.12,s<.5?.05:.02,9);o.translate(0,s,0),r.push(vo(o,s<.5?_o:ph))}return gs(r)}function Sv(){const i=[],t=(e,n,r,s,o,a=0)=>{a&&e.rotateX(a),e.translate(r,s,o),i.push(vo(e,n))};t(new Xe(3.4,1.5,3.4),fs,0,0,0),t(new Xe(3.7,.5,2.2),_o,0,.9,-.4);for(let e=0;e<4;e+=1){const n=-1.25+e*.84;t(new Xe(.72,.8,1.9),lc,n,-.1,2.5,.25),t(new Xe(.62,.7,1.5),fs,n,-.65,3.9,.55),t(new bi(.28,.9,4),"#d8cbb0",n,-1.2,4.9,1.9)}return t(new Xe(.85,.85,1.9),lc,-2.3,-.2,.9,.3),gs(i)}const wr=new q(0,1,0),pu=new q,Rr=new q,ns=new q,pi=new q,fa=new q,$i=new q,mi=new q,mu=new ve;function gu(i,t,e){$i.subVectors(e,t);const n=$i.length();i.position.copy(t),i.quaternion.setFromUnitVectors(wr,$i.normalize()),i.scale.set(1,n,1)}function Js(i,t,e,n,r){i.group.visible=!0;const s=t.distanceTo(e),o=Math.max(s*.54,15),a=Math.sqrt(Math.max(0,o*o-s*s/4));fa.addVectors(t,e).multiplyScalar(.5).addScaledVector(n,a),gu(i.upper,t,fa),gu(i.lower,fa,e),i.hand.position.copy(e),pu.copy(r).normalize(),Rr.copy(e).add(pu),mu.lookAt(Rr,e,wr),i.hand.quaternion.setFromRotationMatrix(mu)}function yv(){const i=new Hn,t=new er({vertexColors:!0}),e=du(3,2.7),n=du(3,2.6),r=Sv(),s=E=>{const x=new Hn,F=new _e(e,t),C=new _e(n,t),I=new _e(r,t);I.scale.setScalar(2);for(const D of[F,C,I])D.frustumCulled=!1;return x.add(F,C,I),x.visible=!1,i.add(x),{group:x,upper:F,lower:C,hand:I,side:E}},o=s(1),a=s(-1),c=new Hn,l=[],u=(E,x,F,C,I)=>{E.translate(F,C,I),l.push(vo(E,x))};for(const E of[-1,1])u(new Wn(3.4,2.5,13,8),fs,E*4.2,15,0),u(new Wn(2.6,2.2,8,8),lc,E*4.4,6,0),u(new Xe(5.2,2.6,9),_o,E*4.5,1.3,1.6),u(new Xe(4.6,1.2,2.6),ph,E*4.5,.7,6.4);u(new Xe(14,6,7),_o,0,22,-1),u(new Xe(17,6,8.5),fs,0,26.5,-2.6);const f=new _e(gs(l),t);c.add(f),i.add(c);const d=new _e(new yo(16,24).rotateX(-Math.PI/2),new Qi({color:"#000000",transparent:!0,opacity:.32,depthWrite:!1}));d.position.y=.08,i.add(d);let p=-1,_=-1;const v=new q,m=new q;function h(E){ns.set(0,Yi-8,0).addScaledVector(m,E*13).addScaledVector(v,-2)}function y(E){v.set(Math.cos(E),0,Math.sin(E)),m.set(-v.z,0,v.x)}return{group:i,reset(){p=-1,_=-1,o.group.visible=!1,a.group.visible=!1},update(E,x,F,C){const I=E.yaw;y(I),c.rotation.y=Math.atan2(v.x,v.z),o.group.visible=!1,a.group.visible=!1;for(const D of E.sweeps){const M=D.arm==="right"?o:a,g=Math.min(1,D.t/mo),L=D.yaw+D.from+(D.to-D.from)*g,V=Math.cos(L)*D.radius,H=Math.sin(L)*D.radius;y(D.yaw),h(M.side),pi.set(V,2.6+Math.sin(g*Math.PI)*.8,H),mi.copy(m).multiplyScalar(M.side*.65).addScaledVector(wr,.75).normalize();const j=D.to>D.from?1:-1;$i.set(-Math.sin(L)*j+Math.cos(L)*1.4,0,Math.cos(L)*j+Math.sin(L)*1.4),Js(M,ns,pi,mi,Rr.copy($i)),y(I)}if(E.slamWindup>=0&&p<0&&(p=0),p>=0){p+=x;const D=as+.35,M=Math.min(1,p/(as*.7)),g=Math.max(0,(p-as*.72)/(as*.28)),L=12+M*44-Math.min(1,g)*54;for(const V of[o,a])h(V.side),pi.set(0,Math.max(2,L),0).addScaledVector(v,20).addScaledVector(m,V.side*6.5),mi.copy(m).multiplyScalar(V.side).addScaledVector(wr,.2).normalize(),Js(V,ns,pi,mi,Rr.copy(v).setY(g>0?-1.4:1.2));p>D&&(p=-1)}if(C.t>0&&(_=Math.max(_,0)),_>=0){_+=x;const D=Math.sin(Math.min(1,_/.7)*Math.PI);_>=.7?_=-1:a.group.visible||(h(-1),pi.set(0,Yi-16+D*10,0).addScaledVector(v,16+D*8).addScaledVector(m,-8+D*3),mi.copy(m).multiplyScalar(-1).addScaledVector(wr,-.3).normalize(),$i.set(C.x,-Yi,C.z).normalize(),Js(a,ns,pi,mi,Rr.copy($i)))}if(E.breathLeft>0){const D=Math.min(1,(E.breathTotal-E.breathLeft)/.2)*Math.min(1,E.breathLeft/.2),M=Math.sin(F*34)*.15;for(const g of[o,a])g.group.visible||(h(g.side),pi.set(0,Yi-18+D*6+M,0).addScaledVector(v,13).addScaledVector(m,g.side*11),mi.copy(m).multiplyScalar(g.side).addScaledVector(wr,-.4).normalize(),Js(g,ns,pi,mi,Rr.copy(v).setY(-.5)))}}}}const Ev=`
  attribute vec4 aColor;
  attribute float aSize;
  varying vec4 vColor;
  uniform float uScale;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // 눈앞의 입자는 지우고 크기도 묶어 화면을 덮지 않게 한다.
    float nearFade = clamp((-mv.z - 5.0) / 22.0, 0.0, 1.0);
    vColor = vec4(aColor.rgb, aColor.a * nearFade);
    gl_PointSize = min(aSize * uScale / -mv.z, 90.0);
    gl_Position = projectionMatrix * mv;
  }
`,bv=`
  varying vec4 vColor;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = dot(c, c) * 4.0;
    if (d > 1.0) discard;
    float a = (1.0 - d);
    gl_FragColor = vec4(vColor.rgb, vColor.a * a * a);
  }
`;class da{constructor(t,e){Re(this,"points");Re(this,"positions");Re(this,"colors");Re(this,"sizes");Re(this,"geometry",new ke);Re(this,"material");Re(this,"used",0);this.capacity=t,this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*4),this.sizes=new Float32Array(t),this.geometry.setAttribute("position",new we(this.positions,3).setUsage(Ei)),this.geometry.setAttribute("aColor",new we(this.colors,4).setUsage(Ei)),this.geometry.setAttribute("aSize",new we(this.sizes,1).setUsage(Ei)),this.material=new Vn({vertexShader:Ev,fragmentShader:bv,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:e}),this.points=new zg(this.geometry,this.material),this.points.frustumCulled=!1}setScale(t){this.material.uniforms.uScale.value=t}add(t,e,n,r,s,o,a,c){const l=this.used;l>=this.capacity||(this.used+=1,this.positions[l*3]=t,this.positions[l*3+1]=e,this.positions[l*3+2]=n,this.colors[l*4]=r,this.colors[l*4+1]=s,this.colors[l*4+2]=o,this.colors[l*4+3]=a,this.sizes[l]=c)}flush(){this.geometry.setDrawRange(0,this.used);for(const t of["position","aColor","aSize"]){const e=this.geometry.getAttribute(t);e.clearUpdateRanges(),e.addUpdateRange(0,this.used*e.itemSize),e.needsUpdate=!0}this.used=0}}class _u{constructor(t,e,n){Re(this,"x");Re(this,"y");Re(this,"z");Re(this,"vx");Re(this,"vy");Re(this,"vz");Re(this,"life");Re(this,"total");Re(this,"size");Re(this,"grow");Re(this,"gravity");Re(this,"tint");Re(this,"count",0);this.capacity=t,this.batch=e,this.fade=n,this.x=new Float32Array(t),this.y=new Float32Array(t),this.z=new Float32Array(t),this.vx=new Float32Array(t),this.vy=new Float32Array(t),this.vz=new Float32Array(t),this.life=new Float32Array(t),this.total=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.gravity=new Float32Array(t),this.tint=new Float32Array(t)}emit(t,e,n,r,s,o,a,c,l,u,f=0){let d=this.count;d>=this.capacity?d=Math.floor(Math.random()*this.capacity):this.count+=1,this.x[d]=t,this.y[d]=e,this.z[d]=n,this.vx[d]=r,this.vy[d]=s,this.vz[d]=o,this.life[d]=a,this.total[d]=a,this.size[d]=c,this.grow[d]=l,this.gravity[d]=u,this.tint[d]=f}clear(){this.count=0}update(t){const e=[0,0,0,0];for(let n=this.count-1;n>=0;n-=1){const r=this.life[n]-t;if(r<=0){const o=this.count-1;for(const a of[this.x,this.y,this.z,this.vx,this.vy,this.vz,this.life,this.total,this.size,this.grow,this.gravity,this.tint])a[n]=a[o];this.count=o;continue}this.life[n]=r,this.vy[n]=this.vy[n]-this.gravity[n]*t,this.x[n]=this.x[n]+this.vx[n]*t,this.y[n]=Math.max(.1,this.y[n]+this.vy[n]*t),this.z[n]=this.z[n]+this.vz[n]*t;const s=1-r/this.total[n];this.fade(s,e,this.tint[n]),this.batch.add(this.x[n],this.y[n],this.z[n],e[0],e[1],e[2],e[3],this.size[n]+this.grow[n]*s)}}}function is(i,t,e,n,r){const s=[],o=[],a=[];for(let l=0;l<=r;l+=1){const u=e+(n-e)*l/r,f=Math.cos(u),d=Math.sin(u);if(s.push(f*i,0,d*i,f*t,0,d*t),o.push(0,0,0,1,1,1),l<r){const p=l*2;a.push(p,p+1,p+2,p+1,p+3,p+2)}}const c=new ke;return c.setAttribute("position",new Te(s,3)),c.setAttribute("color",new Te(o,3)),c.setIndex(a),c}function Tr(i,t=1){return new Qi({color:i,opacity:t,transparent:!0,blending:_i,depthWrite:!1,side:vn,vertexColors:!0,fog:!1})}const Tv=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Av=`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uPower;
  float n(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y);
  }
  void main() {
    float side = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float flow = vn(vec2(vUv.x * 14.0 - uTime * 11.0, vUv.y * 5.0)) * 0.65 + vn(vec2(vUv.x * 34.0 - uTime * 19.0, vUv.y * 11.0)) * 0.35;
    float body = smoothstep(0.0, 0.55, side) * (0.45 + flow) * smoothstep(1.0, 0.82, vUv.x) * smoothstep(0.0, 0.03, vUv.x);
    vec3 color = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.82, 0.45), smoothstep(0.35, 1.0, body));
    gl_FragColor = vec4(color * 1.5, body * uPower);
  }
`,vu=.32,wv=3,xu=.55;function Rv(){const i=new Hn,t=new da(4500,_i),e=new da(1800,Zi),n=new da(9e3,_i);t.points.renderOrder=6,e.points.renderOrder=5,n.points.renderOrder=7,i.add(e.points,t.points,n.points);const r=new _u(4200,t,(O,U,K)=>{if(K===1){U[0]=.5,U[1]=1,U[2]=.78,U[3]=(1-O)*.8;return}if(K===2){U[0]=1,U[1]=.85,U[2]=.55,U[3]=(1-O)*.9;return}U[0]=1,U[1]=.72-O*.55,U[2]=.28-O*.26,U[3]=(1-O)*(1-O)*.9}),s=new _u(1700,e,(O,U)=>{U[0]=.5,U[1]=.42,U[2]=.34,U[3]=(1-O)*.42}),o=[],a=O=>{const U=o[O];i.remove(U.mesh),U.mesh.geometry.dispose(),U.mesh.material.dispose(),o.splice(O,1)},c=is(.86,1,0,Math.PI*2,48),l=[];for(let O=0;O<6;O+=1){const U=new _e(c,Tr("#ff8a3a"));U.position.y=.4,U.visible=!1,l.push(U),i.add(U)}const u=new Wn(1,1,1,18,1,!0);u.translate(0,.5,0);{const O=u.attributes.position,U=new Float32Array(O.count*3);for(let K=0;K<O.count;K+=1){const k=1-O.getY(K)*.9;U[K*3]=k,U[K*3+1]=k,U[K*3+2]=k}u.setAttribute("color",new we(U,3))}const f=[],d=[];for(let O=0;O<8;O+=1){const U=new _e(u,Tr("#ffb066"));U.visible=!1,U.frustumCulled=!1,d.push(U),i.add(U)}const p=new yo(1,26).rotateX(-Math.PI/2),_=[];for(let O=0;O<16;O+=1){const U=new _e(p,new Qi({color:"#a8330c",transparent:!0,opacity:.45,blending:_i,depthWrite:!1,fog:!1}));U.position.y=.3,U.visible=!1,_.push(U),i.add(U)}const v=new Vn({vertexShader:Tv,fragmentShader:Av,uniforms:{uTime:{value:0},uPower:{value:0}},transparent:!0,blending:_i,depthWrite:!1,side:vn}),m=new tr(1,1,24,4).rotateX(-Math.PI/2).translate(.5,0,0),h=new _e(m,v);h.position.y=.7,h.visible=!1,h.frustumCulled=!1,i.add(h);const y=new Wn(1,.42,1,12,8,!0).translate(0,.5,0),E=v.clone(),x=new _e(y,E);x.visible=!1,x.frustumCulled=!1,i.add(x);const F=is(.84,1,0,Math.PI*2,72),C=[];for(let O=0;O<4;O+=1){const U=new _e(F,Tr("#ffd9a0"));U.position.y=.5,U.visible=!1,U.frustumCulled=!1,C.push(U),i.add(U)}const I=new _e(is(.93,1,0,Math.PI*2,48),Tr("#ffb066",.55));I.position.y=.35,I.visible=!1,i.add(I);const D={left:null,right:null},M=new tr(1,1).rotateX(-Math.PI/2).translate(.5,0,0),g=new Qi({color:"#ff6a2a",transparent:!0,opacity:.11,blending:_i,depthWrite:!1,fog:!1,side:vn}),L=new _e(M,g);L.position.y=.3,L.visible=!1,i.add(L);const V=new q(0,1,0),H=new q;function j(){for(const O of["left","right"]){const U=D[O];U&&(i.remove(U.mesh),U.mesh.geometry.dispose(),U.mesh.material.dispose(),D[O]=null)}}return{group:i,markers:n,setViewport(O,U){const K=O/(2*Math.tan(U*Math.PI/360));t.setScale(K),e.setScale(K),n.setScale(K)},reset(){r.clear(),s.clear();for(const O of o)i.remove(O.mesh),O.mesh.geometry.dispose(),O.mesh.material.dispose();o.length=0,f.length=0;for(const O of d)O.visible=!1;j()},sweepTrail(O,U,K,k){for(;o.length>=wv;)a(0);const it=is(.88,1,O+U,O+K,28),st=new _e(it,Tr("#ffd9a0",.4));st.scale.set(k,1,k),st.position.y=.6,st.frustumCulled=!1,i.add(st),o.push({mesh:st,life:vu})},fireball(O,U,K,k){for(let it=0;it<46;it+=1){const st=Math.random()*Math.PI*2,J=k*(1+Math.random()*3);r.emit(O,U+1,K,Math.cos(st)*J,3+Math.random()*20,Math.sin(st)*J,.35+Math.random()*.45,2.6+Math.random()*2.5,3,12)}for(let it=0;it<10;it+=1){const st=Math.random()*Math.PI*2;s.emit(O,U+1,K,Math.cos(st)*k*1.4,3+Math.random()*6,Math.sin(st)*k*1.4,.7+Math.random()*.6,4,8,2)}},pillar(O,U,K){const k=d.find(st=>!st.visible);k&&(k.visible=!0,k.position.set(O,0,U),f.push({mesh:k,life:xu,radius:K}));const it=Math.min(220,60+K*8);for(let st=0;st<it;st+=1){const J=Math.random()*Math.PI*2,at=Math.sqrt(Math.random())*K,ft=6+Math.random()*16;r.emit(O+Math.cos(J)*at,.6,U+Math.sin(J)*at,Math.cos(J)*ft,6+Math.random()*30,Math.sin(J)*ft,.45+Math.random()*.7,2.6+Math.random()*3,3,12)}for(let st=0;st<24;st+=1){const J=Math.random()*Math.PI*2,at=6+Math.random()*12;s.emit(O+Math.cos(J)*K*.9,1,U+Math.sin(J)*K*.9,Math.cos(J)*at,3+Math.random()*7,Math.sin(J)*at,.9+Math.random()*.9,4,8,2)}},slam(){for(let O=0;O<260;O+=1){const U=Math.random()*Math.PI*2,K=18+Math.random()*44,k=8+Math.random()*6;s.emit(Math.cos(U)*k,1,Math.sin(U)*k,Math.cos(U)*K,3+Math.random()*16,Math.sin(U)*K,.9+Math.random()*1,4+Math.random()*3,9,3)}for(let O=0;O<90;O+=1){const U=Math.random()*Math.PI*2,K=22+Math.random()*44;r.emit(Math.cos(U)*12,1,Math.sin(U)*12,Math.cos(U)*K,8+Math.random()*18,Math.sin(U)*K,.45+Math.random()*.5,2,1,30,2)}},death(O,U,K,k){const it=k?4:2;for(let st=0;st<it;st+=1)r.emit(O,U+1,K,(Math.random()-.5)*7,4+Math.random()*8,(Math.random()-.5)*7,.35+Math.random()*.35,1.2,.6,16,k?0:2)},healPulse(O,U){for(let K=0;K<12;K+=1){const k=K/12*Math.PI*2;r.emit(O+Math.cos(k)*3,1.5,U+Math.sin(k)*3,Math.cos(k)*6,4,Math.sin(k)*6,.7,1.7,.4,0,1)}},update(O,U,K,k){const{config:it}=O;for(const J of["left","right"]){const at=it.sweep[J];let ft=D[J];if(!ft||ft.arc!==at.arc||ft.center!==at.center){ft&&(i.remove(ft.mesh),ft.mesh.geometry.dispose(),ft.mesh.material.dispose());const G=new _e(is(.985,1,at.center-at.arc/2,at.center+at.arc/2,40),Tr(J==="left"?"#ffe0b0":"#ffb27a",.3));G.position.y=.3,i.add(G),ft={mesh:G,arc:at.arc,center:at.center},D[J]=ft}ft.mesh.scale.set(at.radius,1,at.radius),ft.mesh.rotation.y=-O.yaw,ft.mesh.material.opacity=O.cooldowns[J==="left"?"ML":"MR"]<=0?.28:.07}I.visible=it.w.unlocked,it.w.unlocked&&(I.position.set(k.x,.35,k.z),I.scale.set(it.w.radius,1,it.w.radius),I.material.opacity=O.cooldowns.W<=0?.6:.14),L.visible=it.e.unlocked&&O.breathLeft<=0,L.visible&&(L.rotation.y=-O.yaw,L.scale.set(it.e.length,1,it.e.width),g.opacity=O.cooldowns.E<=0?.045:.012);for(let J=o.length-1;J>=0;J-=1){const at=o[J];at.life-=U,at.mesh.material.opacity=Math.max(0,at.life/vu)*.4,at.life<=0&&a(J)}for(const J of O.sweeps){const at=Math.min(1,J.t/mo),ft=J.yaw+J.from+(J.to-J.from)*at;for(let G=0;G<5;G+=1){const ct=J.radius*(.82+Math.random()*.22);s.emit(Math.cos(ft)*ct,.8,Math.sin(ft)*ct,(Math.random()-.5)*14,2+Math.random()*9,(Math.random()-.5)*14,.7+Math.random()*.7,3.5,7,3)}}l.forEach((J,at)=>{const ft=O.pillars[at];if(J.visible=!!ft,ft){const G=1-ft.delay/Math.max(ft.total,cc);J.position.set(ft.x,.4,ft.z);const ct=ft.radius*(1.5-G*.5);J.scale.set(ct,1,ct),J.material.opacity=.35+G*.65}});for(let J=f.length-1;J>=0;J-=1){const at=f[J];at.life-=U;const ft=Math.max(0,at.life/xu),G=at.radius*(.55+(1-ft)*.7);at.mesh.scale.set(G,150,G);const ct=Math.hypot(at.mesh.position.x,at.mesh.position.z)-G,mt=Math.min(1,Math.max(.05,ct/60));at.mesh.material.opacity=ft*ft*mt,at.life<=0&&(at.mesh.visible=!1,f.splice(J,1))}_.forEach((J,at)=>{const ft=O.burns[at];if(J.visible=!!ft,!!ft){J.position.set(ft.x,.3,ft.z),J.scale.set(ft.radius,1,ft.radius),J.material.opacity=Math.min(.3,ft.t*.3);for(let G=0;G<2;G+=1){const ct=Math.random()*Math.PI*2,mt=Math.sqrt(Math.random())*ft.radius;r.emit(ft.x+Math.cos(ct)*mt,.5,ft.z+Math.sin(ct)*mt,0,4+Math.random()*7,0,.5+Math.random()*.5,1.8,1.5,0)}}});const st=O.breathLeft>0;if(h.visible=st,x.visible=st,st){const J=Math.min(1,(O.breathTotal-O.breathLeft)/.12)*Math.min(1,O.breathLeft/.18);v.uniforms.uTime.value=K,v.uniforms.uPower.value=J,E.uniforms.uTime.value=K,E.uniforms.uPower.value=J*.32,h.rotation.y=-O.yaw,h.scale.set(it.e.length,1,it.e.width*1.25);const at=Math.cos(O.yaw),ft=Math.sin(O.yaw),G=Yi-3,ct=34;x.position.set(at*6,G,ft*6),H.set(at*(ct-6),-G,ft*(ct-6));const mt=H.length();x.quaternion.setFromUnitVectors(V,H.normalize()),x.scale.set(it.e.width*.42,mt,it.e.width*.42);for(let pt=0;pt<34;pt+=1){const Dt=Math.random()*it.e.length,Ut=(Math.random()-.5)*it.e.width;r.emit(at*Dt-ft*Ut,.8,ft*Dt+at*Ut,at*12,5+Math.random()*12,ft*12,.3+Math.random()*.45,2.6+Math.random()*2.4,2,0)}}C.forEach((J,at)=>{const ft=O.rings[at];if(J.visible=!!ft,!!ft){J.scale.set(ft.r,1,ft.r),J.material.opacity=Math.min(1,1.2-ft.r/ft.max)*ft.power;for(let G=0;G<26;G+=1){const ct=Math.random()*Math.PI*2;s.emit(Math.cos(ct)*ft.r,.8,Math.sin(ct)*ft.r,Math.cos(ct)*6,3+Math.random()*11,Math.sin(ct)*6,.5+Math.random()*.5,3.5,6,3)}}});for(const J of O.legions){if(J.lane>0||Math.random()>.65)continue;const at=rc-J.s+Math.random()*J.depth*oo;if(at<15)continue;const ft=(Math.random()-.5)*J.files*hh,G=Math.cos(J.angle),ct=Math.sin(J.angle);s.emit(G*at-ct*ft,.6,ct*at+G*ft,0,2+Math.random()*2,0,1.2,4,7,0)}for(const J of O.fireballs){t.add(J.x,J.y,J.z,1,.72,.32,1,11),t.add(J.x,J.y,J.z,1,.95,.75,1,5);for(let at=0;at<3;at+=1)r.emit(J.x+(Math.random()-.5)*2,J.y+(Math.random()-.5)*2,J.z+(Math.random()-.5)*2,J.vx*.08,2+Math.random()*4,J.vz*.08,.25+Math.random()*.25,2.6,1.5,0)}r.update(U),s.update(U),t.flush(),e.flush(),n.flush()}}}function cn(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function pa(i,t){const e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=cn(e,n),l=cn(e+1,n),u=cn(e,n+1),f=cn(e+1,n+1);return c+(l-c)*o+(u-c)*a+(c-l-u+f)*o*a}function Mu(i,t){return pa(i,t)*.55+pa(i*2.1,t*2.1)*.3+pa(i*4.3,t*4.3)*.15}function Ki(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function mh(i,t){let e=1/0;for(const n of ni)for(let r=0;r<=n.length;r+=3){const s=n.xs[r]-i,o=n.zs[r]-t,a=s*s+o*o;a<e&&(e=a)}return Math.sqrt(e)}function Cv(){const e=new tr(1100,1100,220,220);e.rotateX(-Math.PI/2);const n=e.attributes.position,r=new Float32Array(n.count*3),s=new Yt("#6b5540"),o=new Yt("#5f6238"),a=new Yt("#3a2c26"),c=new Yt("#33261f"),l=new Yt;for(let f=0;f<n.count;f+=1){const d=n.getX(f),p=n.getZ(f),_=Math.hypot(d,p),v=Mu(d*.035,p*.035);if(l.copy(s).lerp(o,Ki(.35,.68,v)),l.lerp(c,1-Ki(10,48,_)),_>40&&_<280&&bo(Math.atan2(p,d))){const h=mh(d,p);l.lerp(a,1-Ki(Br*.45,Br*.9,h))}const m=.82+v*.32;r[f*3]=l.r*m,r[f*3+1]=l.g*m,r[f*3+2]=l.b*m,n.setY(f,Ki(250,520,_)*(30+Mu(d*.012,p*.012)*110))}e.setAttribute("color",new we(r,3)),e.computeVertexNormals();const u=new _e(e,new er({vertexColors:!0}));return u.matrixAutoUpdate=!1,u}function Pv(){const i=new Wn(.62,1,1,7,2);i.translate(0,.5,0);const t=i.attributes.position;for(let c=0;c<t.count;c+=1){const l=t.getY(c),u=Math.atan2(t.getZ(c),t.getX(c)),f=1+Math.sin(u*3+l*5)*.14;t.setX(c,t.getX(c)*f),t.setZ(c,t.getZ(c)*f)}const e=i.toNonIndexed();e.computeVertexNormals();const n=[];for(const c of hs)for(let l=us+2;l<300;l+=7.5){const u=Math.ceil(c.half*2.1*l/7.5);for(let f=0;f<=u;f+=1){const d=(cn(l,f)-.5)*.04,p=c.center-c.half*1.05+f/u*c.half*2.1+d,_=l+(cn(f,l)-.5)*5,v=Math.cos(p)*_,m=Math.sin(p)*_,h=mh(v,m);if(h<Br*.5+3.5)continue;const y=Math.min(1,Math.abs(Math.abs(p-c.center)-c.half*1.05)/.12),E=(12+Ki(0,60,_-us)*34)*(.65+cn(v,m)*.7)*(.45+y*.55);n.push({x:v,z:m,w:5+cn(m,v)*4.5,h:E*(h<Br?1.15:1),tint:.75+cn(v*2,m)*.4,spin:cn(v,m*3)*6.28})}}const r=new er({color:"#ffffff"}),s=new ho(e,r,n.length),o=new Ce,a=new Yt;return n.forEach((c,l)=>{o.position.set(c.x,0,c.z),o.rotation.y=c.spin,o.scale.set(c.w,c.h,c.w),o.updateMatrix(),s.setMatrixAt(l,o.matrix),a.setRGB(.27*c.tint,.21*c.tint,.2*c.tint),s.setColorAt(l,a)}),s.matrixAutoUpdate=!1,s}function Lv(){const i=new Hn,t=new bi(1.5,5,6);t.translate(0,3.5,0);const e=new ho(t,new er({color:"#ffffff"}),420),n=new ho(new Eo(1,0),new er({color:"#6b625c"}),260),r=new Ce,s=new Yt,o=(a,c,l,u,f,d)=>{for(let p=0;p<c;p+=1){let _=0,v=0;for(let h=0;h<8;h+=1){const y=cn(p+u,h)*Math.PI*2,E=l+cn(h,p+u*2)*210;if(_=Math.cos(y)*E,v=Math.sin(y)*E,!bo(y))break}const m=cn(_,v);r.position.set(_,0,v),r.rotation.set(0,m*6.28,0),r.scale.setScalar(f(m)),r.updateMatrix(),a.setMatrixAt(p,r.matrix),d==null||d(p,m)}};return o(e,420,58,3,a=>.42+a*.5,(a,c)=>{s.setRGB(.07+c*.05,.14+c*.06,.07),e.setColorAt(a,s)}),o(n,260,20,9,a=>.3+a*a*1.3),i.add(e,n),i}function Iv(){const i=new Ac(1e3,24,16),t=i.attributes.position,e=new Float32Array(t.count*3),n=new Yt("#f09a5d"),r=new Yt("#a35a6b"),s=new Yt("#2a2247"),o=new Yt;for(let c=0;c<t.count;c+=1){const l=Math.max(0,t.getY(c)/1e3);o.copy(n).lerp(r,Ki(0,.22,l)).lerp(s,Ki(.16,.62,l)),e[c*3]=o.r,e[c*3+1]=o.g,e[c*3+2]=o.b}i.setAttribute("color",new we(e,3));const a=new _e(i,new Qi({vertexColors:!0,side:je,fog:!1,depthWrite:!1}));return a.renderOrder=-10,a}function Dv(i){i.fog=new bc("#b77a5e",150,620),i.add(new kg("#ffd9b8","#4a3a33",1.05));const t=new Fl("#ffc48a",1.9);t.position.set(-.7,.55,.45),i.add(t);const e=new Fl("#7f8fff",.5);e.position.set(.6,.4,-.6),i.add(e),i.add(Iv(),Cv(),Pv(),Lv())}const uc=72,Su=.0024,Uv=2.6,yu=1.1,Eu=-.1,bu=1.25,Nv=.36,Tu=2.6,Fv=.25,ma=[1.5,1.25,1,.8,.65],Ov=24,Bv=2,Au={KeyQ:"Q",KeyW:"W",KeyE:"E",KeyR:"R"},hc=4e3,zv=50;let Qs=null;function kv(){if(Qs)return Qs;const i=new Ig({antialias:!0,powerPreference:"high-performance"});i.setClearColor("#2a2247"),i.toneMapping=Cu,i.toneMappingExposure=1.05;const t=new Dg;Dv(t);const e=new _n(uc,16/9,.5,2400),n=Mv(),r=yv(),s=Rv(),o=new ke,a=new Float32Array(hc*6),c=new Float32Array(hc*6);o.setAttribute("position",new we(a,3).setUsage(Ei)),o.setAttribute("color",new we(c,3).setUsage(Ei));const l=new Og(o,new sh({vertexColors:!0,transparent:!0,opacity:.9,fog:!1}));return l.frustumCulled=!1,t.add(n.group,r.group,s.group,l),Qs={renderer:i,scene:t,camera:e,army:n,boss:r,effects:s,arrows:l,arrowPositions:a,arrowColors:c,qualityIndex:0},Qs}function Hv(i){const t=Rh(wu,Ah()),e=Lh(c_(i),t);return j_(e,{earn:n=>i.earn("spoils",n)})}const Gv=i=>{const t=kv(),{renderer:e,scene:n,camera:r,army:s,boss:o,effects:a}=t;s.reset(),o.reset(),a.reset();const c=ae("div","rt-root");i.view.append(c),c.append(e.domElement);const l=fv(c),u=Hv(i),f=iv(),d=i.flag("radar"),p=new URLSearchParams(location.search).has("dev");function _(){const w=c.getBoundingClientRect();if(w.width<=0||w.height<=0)return;const z=Math.min(window.devicePixelRatio||1,ma[t.qualityIndex]??1);e.setPixelRatio(z),e.setSize(w.width,w.height,!1),r.aspect=w.width/w.height,r.updateProjectionMatrix(),a.setViewport(w.height*z,uc)}const v=new ResizeObserver(_);v.observe(c),_();let m=Nv,h=!1,y=!1,E=!1;const x=new Set,F=new Set,C={left:!1,right:!1},I={left:!1,right:!1};function D(w){u.turn(w),l.hideHint()}function M(w){E||u.finished||!h&&w.target!==e.domElement&&!c.contains(w.target)||(D(w.movementX*Su),m=Math.max(Eu,Math.min(bu,m+w.movementY*Su)))}function g(){const w=e.domElement.requestPointerLock();w&&typeof w.catch=="function"&&w.catch(()=>{})}function L(w){if(w.preventDefault(),h||g(),E){j(!1);return}const z=w.button===0?"left":w.button===2?"right":null;z&&(C[z]=!0,I[z]=!0)}function V(w){w.button===0&&(C.left=!1),w.button===2&&(C.right=!1)}function H(w){w.preventDefault()}function j(w){E=w,i.clockPaused=w,l.setPaused(w),w&&f.setBreath(!1)}function O(){h=document.pointerLockElement===e.domElement,h?(y=!0,l.hideHint()):y&&!u.finished&&(y=!1,j(!0))}function U(w){w.code==="KeyM"&&!w.repeat&&f.toggleMute();const z=Au[w.code];z&&(w.preventDefault(),w.repeat||F.add(z)),x.add(w.code)}function K(w){x.delete(w.code)}function k(){x.clear(),C.left=!1,C.right=!1}function it(w){u.finished||(u.jumpToWave(w),l.banner(`웨이브 ${u.wave}로 이동`,"개발자 치트","gate",1.3))}function st(w){w.code==="PageUp"&&it(u.wave+1),w.code==="PageDown"&&it(u.wave-1)}const J=document.createElement("div");J.style.cssText="display:flex;gap:6px;align-items:center;margin-top:8px";const at=document.createElement("input");at.type="number",at.min="1",at.max=String(Lr[Lr.length-1]),at.value="5",at.style.cssText="width:56px",at.title="웨이브 번호",at.addEventListener("keydown",w=>w.stopPropagation());const ft=document.createElement("button");ft.className="btn",ft.type="button",ft.textContent="웨이브 이동",ft.addEventListener("click",()=>{it(Number(at.value)||1),ft.blur()}),J.append(at,ft),window.addEventListener("keydown",st),window.setTimeout(()=>{var w;return(w=document.querySelector(".dev-panel"))==null?void 0:w.append(J)},0),c.addEventListener("mousedown",L),c.addEventListener("contextmenu",H),window.addEventListener("mouseup",V),document.addEventListener("mousemove",M),document.addEventListener("pointerlockchange",O),window.addEventListener("keydown",U),window.addEventListener("keyup",K),window.addEventListener("blur",k);const G={x:0,z:0};function ct(){const w=Math.cos(u.yaw),z=Math.sin(u.yaw),et=m>.02?Math.min(Mi,Yi/Math.tan(m)):Mi;G.x=w*(et+js),G.z=z*(et+js)}const mt={t:0,x:0,z:0};let pt=0,Dt=-1,Ut=0,Xt=0,ie=0,jt=60,ee=0,N=0,rt=new URLSearchParams(location.search).has("bot");const xt=ev(u,Math.random);let At="";function Mt(){for(const w of u.events)switch(w.type){case"cast":if(w.skill==="ML"||w.skill==="MR"){const z=u.config.sweep[w.arm],et=w.arm==="right"?z.arc/2:-z.arc/2;a.sweepTrail(w.yaw,z.center+et,z.center-et,z.radius),f.play("sweep"),pt=Math.max(pt,.18)}else w.skill==="W"||w.skill==="Q"?(mt.t=.1,mt.x=w.x,mt.z=w.z,f.play("cast")):w.skill==="R"&&f.play("cast");l.hideHint();break;case"pillar":a.pillar(w.x,w.z,w.radius),f.play("pillar"),pt=Math.max(pt,.32);break;case"slam":a.slam(),f.play("slam"),pt=1;break;case"bossHit":{l.hit(w.role,w.angle,w.amount),f.play(w.role===Ht.mage?"heavyHit":"hit"),w.role===Ht.mage&&(pt=Math.max(pt,.28));break}case"wallHit":a.death(w.x,w.y,w.z,!1);break;case"fireball":a.fireball(w.x,w.y,w.z,w.radius),f.play("pillar"),pt=Math.max(pt,.12);break;case"heal":a.healPulse(w.x,w.z);break;case"wave":f.play("wave"),w.gate||l.banner(`웨이브 ${w.wave}`,"","gate",1.3);break;case"gateWarning":{const z=Lr.indexOf(w.wave)+1,et=w.angles.map(_t=>Wt(un(_t-u.yaw))).join(" · "),Z=w.fresh.map(_t=>{var vt,St;return`${(vt=ln[_t])==null?void 0:vt.name}: ${(St=ln[_t])==null?void 0:St.note}`}).join(" · ");l.banner(`제${z}관문: 군단 접근`,`${mn(w.units)}명 · ${et}${Z?` · ${Z}`:""}`,"gate",Z?7:4.5),f.play("horn"),f.setDrums(1),pt=Math.max(pt,.2);break}case"gateClear":l.banner("관문 돌파",`전리품 +${mn(Math.floor(w.bonus))} · 체력 회복`,"good",2.6),f.play("gateClear"),f.setDrums(.5);break;case"victory":l.banner("승리",`${mn(u.kills)}명을 쓸어버렸습니다`,"good",10),f.play("victory"),Dt=Tu,At="승리: 마지막 군단 격파";break;case"defeat":l.banner("거신이 쓰러졌습니다",`웨이브 ${u.wave} · 처치 ${mn(u.kills)}`,"bad",10),f.play("defeat"),Dt=Tu,At=`쓰러짐: 웨이브 ${u.wave}`;break}u.events.length=0,s.takeDeaths(u);for(let w=0;w<u.deathCount;w+=1){if(l.kill(),w>=zv)continue;const z=w*go;a.death(u.deaths[z],u.deaths[z+1],u.deaths[z+2],fh[u.deaths[z+7]]==="fire")}u.deathCount>0&&f.play("kill"),u.clearDeaths()}function Wt(w){const z=Math.abs(w),et=w>=0?"오른쪽":"왼쪽";return z<.5?"정면":z>2.6?"뒤":z<1.1?`${et} 앞`:z>2?`${et} 뒤`:et}function yt(){var qt;const{arrowPositions:w,arrowColors:z,arrows:et}=t,{px:Z,py:_t,pz:vt,pvx:St,pvy:Gt,pvz:ut,prole:Tt}=u,Pt=new Yt(((qt=ln[Ht.archer])==null?void 0:qt.color)??"#fff");let Rt=0;for(let Nt=0;Nt<u.projectileCount&&Rt<hc;Nt+=1){const re=Z[Nt],B=_t[Nt],wt=vt[Nt];if(Tt[Nt]===Ht.mage){a.markers.add(re,B,wt,.8,.45,1,1,5),a.markers.add(re,B,wt,1,.85,1,1,2);continue}if(Tt[Nt]===Ht.catapult){a.markers.add(re,B,wt,.55,.42,.3,1,14),a.markers.add(re,B,wt,1,.55,.2,.7,7);continue}const lt=3/(Math.hypot(St[Nt],Gt[Nt],ut[Nt])||1),gt=Rt*6;w[gt]=re,w[gt+1]=B,w[gt+2]=wt,w[gt+3]=re-St[Nt]*lt,w[gt+4]=B-Gt[Nt]*lt,w[gt+5]=wt-ut[Nt]*lt,z[gt]=1,z[gt+1]=1,z[gt+2]=.8,z[gt+3]=Pt.r,z[gt+4]=Pt.g,z[gt+5]=Pt.b,Rt+=1}const Et=et.geometry;Et.setDrawRange(0,Rt*2),Et.getAttribute("position").needsUpdate=!0,Et.getAttribute("color").needsUpdate=!0}function R(w){if(ee+=w,N+=w>Ov/1e3?1:0,ee<Bv)return;const z=N/(ee*60);ee=0,N=0,z>.25&&t.qualityIndex<ma.length-1&&(t.qualityIndex+=1,_())}const S={sim:u,get fps(){return jt},get quality(){return ma[t.qualityIndex]},setBot(w){rt=w},setPitch(w){m=w}};return window.__raid=S,{update(w){if(Ut+=w,Xt+=1,ie+=w,ie>=.5&&(jt=Xt/ie,Xt=0,ie=0),E){e.render(n,r);return}if(!u.finished){let Pt=0;(x.has("KeyA")||x.has("ArrowLeft"))&&(Pt-=1),(x.has("KeyD")||x.has("ArrowRight"))&&(Pt+=1),Pt!==0&&D(Pt*Uv*w),x.has("ArrowUp")&&(m=Math.max(Eu,m-yu*w)),x.has("ArrowDown")&&(m=Math.min(bu,m+yu*w)),ct(),rt&&xt.act(w);for(const Rt of F)u.cast(Rt,G.x,G.z);F.clear();for(const Rt of["left","right"]){const Et=Rt==="left"?"ML":"MR";(I[Rt]||C[Rt])&&u.canUse(Et)&&(u.cast(Et),I[Rt]=!1)}for(const[Rt,Et]of Object.entries(Au))x.has(Rt)&&u.canUse(Et)&&u.cast(Et,G.x,G.z)}const z=Dt>=0?w*Fv:w;u.step(z),Mt(),f.setBreath(u.breathLeft>0),mt.t>0&&(mt.t=Math.max(0,mt.t-w)),pt=Math.max(0,pt-w*2.2);const et=pt*pt,Z=Math.cos(u.yaw),_t=Math.sin(u.yaw),vt=u.breathLeft>0?.004:0,St=(Math.sin(Ut*41)*.022+Math.sin(Ut*27)*.012)*et+Math.sin(Ut*37)*vt,Gt=(Math.sin(Ut*53)*.03+Math.sin(Ut*19)*.015)*et+Math.sin(Ut*29)*vt;r.position.set(Z*js,Yi+Math.sin(Ut*67)*et*.7,_t*js);const ut=u.yaw+St,Tt=m+Gt;r.lookAt(r.position.x+Math.cos(ut)*Math.cos(Tt),r.position.y-Math.sin(Tt),r.position.z+Math.sin(ut)*Math.cos(Tt)),s.update(u,Ut,z,a.markers,{x:r.position.x,z:r.position.z,yaw:u.yaw,aspect:r.aspect,fov:uc}),o.update(u,z,Ut,mt),yt(),a.update(u,z,Ut,G),e.render(n,r),l.update(u,z,{radar:d,fps:jt,showFps:p,running:!u.finished}),R(w),Dt>=0&&(i.clockPaused=!0,Dt-=w,Dt<0&&i.end(At))},destroy(){v.disconnect(),J.remove(),window.removeEventListener("keydown",st),c.removeEventListener("mousedown",L),c.removeEventListener("contextmenu",H),window.removeEventListener("mouseup",V),document.removeEventListener("mousemove",M),document.removeEventListener("pointerlockchange",O),window.removeEventListener("keydown",U),window.removeEventListener("keyup",K),window.removeEventListener("blur",k),document.pointerLockElement===e.domElement&&document.exitPointerLock(),f.destroy(),l.destroy(),e.domElement.remove(),delete window.__raid}}},Vv=wh(document.getElementById("app"),Ph,Gv,{editorHref:"../../editor.html?game=raid-titan"});Ch(Vv,wu);
