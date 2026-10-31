(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const so="187",gh=0,Ho=1,xh=2,ea=1,_h=2,as=3,fi=0,Vt=1,kt=2,Oi=0,zi=1,dn=2,Vo=3,Wo=4,vh=5,Ui=100,Mh=101,Sh=102,yh=103,bh=104,Eh=200,wh=201,Th=202,Ah=203,rc=204,oc=205,Rh=206,Ch=207,Ph=208,Lh=209,Ih=210,Dh=211,Nh=212,Uh=213,Fh=214,dr=0,fr=1,pr=2,us=3,mr=4,gr=5,xr=6,_r=7,ao=0,Oh=1,zh=2,xn=0,lc=1,cc=2,hc=3,uc=4,dc=5,fc=6,pc=7,mc=300,Hi=301,ds=302,Ca=303,Pa=304,ca=1e3,Nn=1001,vr=1002,Nt=1003,kh=1004,bs=1005,qt=1006,La=1007,Kn=1008,Jt=1009,gc=1010,xc=1011,fs=1012,ro=1013,wn=1014,mn=1015,Tn=1016,oo=1017,lo=1018,Vi=1020,_c=35902,vc=35899,Mc=1021,Sc=1022,bn=1023,Qn=1026,Jn=1027,co=1028,ho=1029,pi=1030,uo=1031,fo=1033,ta=33776,na=33777,ia=33778,sa=33779,Mr=35840,Sr=35841,yr=35842,br=35843,Er=36196,wr=37492,Tr=37496,Ar=37488,Rr=37489,ha=37490,Cr=37491,Pr=37808,Lr=37809,Ir=37810,Dr=37811,Nr=37812,Ur=37813,Fr=37814,Or=37815,zr=37816,kr=37817,Br=37818,Gr=37819,Hr=37820,Vr=37821,Wr=36492,Xr=36494,qr=36495,Yr=36283,Zr=36284,ua=36285,$r=36286,Bh=3200,Kr=0,Gh=1,$n="",It="srgb",da="srgb-linear",fa="linear",it="srgb",Ia=7680,Hh=519,Vh=512,Wh=513,Xh=514,yc=515,qh=516,Yh=517,bc=518,Ec=519,Zh=35044,Xo=35048,qo="300 es",gn=2e3,ps=2001;function $h(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kh(){const s=pa("canvas");return s.style.display="block",s}const Yo={};function Zo(...s){const e="THREE."+s.shift();console.log(e,...s)}function wc(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=wc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function je(...s){s=wc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function aa(...s){const e=s.join(" ");e in Yo||(Yo[e]=!0,De(...s))}function Jh(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Qh={[dr]:dr,[pr]:xr,[mr]:mr,[us]:gr,[fr]:fr,[xr]:pr,[_r]:_r,[gr]:us};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,Jr=180/Math.PI;function gs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function jh(s,e){return(s%e+e)%e}function Na(s,e,t){return(1-t)*s+t*e}function eu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function po(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tu(s,e){if(e.constructor===Float32Array)return s;const t=po(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function nu(s,e){if(e.constructor===Float32Array)return s;const t=po(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Ao=class Ao{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ao.prototype.isVector2=!0;let Re=Ao;class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,o=Math.sin(o*v)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(a/2),u=l(n/2),d=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-i)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ro=class Ro{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-a*i),f=2*(a*n-r*t);return this.x=t+l*c+r*f-o*h,this.y=n+l*h+o*c-a*f,this.z=i+l*f+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ro.prototype.isVector3=!0;let R=Ro;const Ua=new R,$o=new jn,Co=class Co{constructor(e,t,n,i,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],E=i[4],S=i[7],T=i[2],w=i[5],x=i[8];return a[0]=r*_+o*v+l*T,a[3]=r*p+o*E+l*w,a[6]=r*m+o*S+l*x,a[1]=c*_+h*v+f*T,a[4]=c*p+h*E+f*w,a[7]=c*m+h*S+f*x,a[2]=u*_+d*v+g*T,a[5]=u*p+d*E+g*w,a[8]=u*m+d*S+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,u=o*l-h*a,d=c*a-r*l,g=t*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*r)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*a-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Co.prototype.isMatrix3=!0;let Fe=Co;const Fa=new Fe,Ko=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iu(){const s={enabled:!0,workingColorSpace:da,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===it&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===it&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[da]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const $e=iu();function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=pa("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Un(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let au=0;class mo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Oa(i[r].image)):a.push(Oa(i[r]))}else a=Oa(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let ru=0;const za=new R;class Bt extends gi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Nn,i=Nn,a=qt,r=Kn,o=bn,l=Jt,c=Bt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=gs(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=mc;Bt.DEFAULT_ANISOTROPY=1;const Po=class Po{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,T=(m+1)/2,w=(h+u)/4,x=(f+_)/4,b=(g+p)/4;return E>S&&E>T?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=w/n,a=x/n):S>T?S<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),n=w/i,a=b/i):T<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(T),n=x/a,i=b/a),this.set(n,i,a,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Po.prototype.isVector4=!0;let mt=Po;class ou extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i=n.count;for(let a=0;a<i;a++)this.textures[a]=new Bt({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tc extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const va=class va{constructor(e,t,n,i,a,r,o,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,h,f,u,d,g,_,p)}set(e,t,n,i,a,r,o,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Si.setFromMatrixColumn(e,0).length(),a=1/Si.setFromMatrixColumn(e,1).length(),r=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=r*h,d=r*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=_+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*o,t[4]=-r*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=_-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,d=r*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=r*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cu,e,hu)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Hn.crossVectors(n,Zt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Hn.crossVectors(n,Zt)),Hn.normalize(),Es.crossVectors(Zt,Hn),i[0]=Hn.x,i[4]=Es.x,i[8]=Zt.x,i[1]=Hn.y,i[5]=Es.y,i[9]=Zt.y,i[2]=Hn.z,i[6]=Es.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],E=n[7],S=n[11],T=n[15],w=i[0],x=i[4],b=i[8],N=i[12],C=i[1],I=i[5],U=i[9],W=i[13],L=i[2],V=i[6],$=i[10],k=i[14],ie=i[3],Y=i[7],ee=i[11],F=i[15];return a[0]=r*w+o*C+l*L+c*ie,a[4]=r*x+o*I+l*V+c*Y,a[8]=r*b+o*U+l*$+c*ee,a[12]=r*N+o*W+l*k+c*F,a[1]=h*w+f*C+u*L+d*ie,a[5]=h*x+f*I+u*V+d*Y,a[9]=h*b+f*U+u*$+d*ee,a[13]=h*N+f*W+u*k+d*F,a[2]=g*w+_*C+p*L+m*ie,a[6]=g*x+_*I+p*V+m*Y,a[10]=g*b+_*U+p*$+m*ee,a[14]=g*N+_*W+p*k+m*F,a[3]=v*w+E*C+S*L+T*ie,a[7]=v*x+E*I+S*V+T*Y,a[11]=v*b+E*U+S*$+T*ee,a[15]=v*N+E*W+S*k+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*d-c*u,E=o*d-c*f,S=o*u-l*f,T=r*d-c*h,w=r*u-l*h,x=r*f-o*h;return t*(_*v-p*E+m*S)-n*(g*v-p*T+m*w)+i*(g*E-_*T+m*x)-a*(g*S-_*w+p*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+i*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-n*r,E=t*l-i*r,S=t*c-a*r,T=n*l-i*o,w=n*c-a*o,x=i*c-a*l,b=h*_-f*g,N=h*p-u*g,C=h*m-d*g,I=f*p-u*_,U=f*m-d*_,W=u*m-d*p,L=v*W-E*U+S*I+T*C-w*N+x*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=(o*W-l*U+c*I)*V,e[1]=(i*U-n*W-a*I)*V,e[2]=(_*x-p*w+m*T)*V,e[3]=(u*w-f*x-d*T)*V,e[4]=(l*C-r*W-c*N)*V,e[5]=(t*W-i*C+a*N)*V,e[6]=(p*S-g*x-m*E)*V,e[7]=(h*x-u*S+d*E)*V,e[8]=(r*U-o*C+c*b)*V,e[9]=(n*C-t*U-a*b)*V,e[10]=(g*w-_*S+m*v)*V,e[11]=(f*S-h*w-d*v)*V,e[12]=(o*N-r*I-l*b)*V,e[13]=(t*I-n*N+i*b)*V,e[14]=(_*E-g*T-p*v)*V,e[15]=(h*T-f*E+u*v)*V,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,f=o+o,u=a*c,d=a*h,g=a*f,_=r*h,p=r*f,m=o*f,v=l*c,E=l*h,S=l*f,T=n.x,w=n.y,x=n.z;return i[0]=(1-(_+m))*T,i[1]=(d+S)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(u+m))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+E)*x,i[9]=(p-v)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=Si.set(i[0],i[1],i[2]).length();const o=Si.set(i[4],i[5],i[6]).length(),l=Si.set(i[8],i[9],i[10]).length();a<0&&(r=-r),ln.copy(this);const c=1/r,h=1/o,f=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,a,r,o=gn,l=!1){const c=this.elements,h=2*a/(t-e),f=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===gn)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===ps)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=gn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===gn)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===ps)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};va.prototype.isMatrix4=!0;let et=va;const Si=new R,ln=new et,cu=new R(0,0,0),hu=new R(1,1,1),Hn=new R,Es=new R,Zt=new R,Qo=new et,jo=new jn;class On{constructor(e=0,t=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uu=0;const el=new R,yi=new jn,Rn=new et,ws=new R,$i=new R,du=new R,fu=new jn,tl=new R(1,0,0),nl=new R(0,1,0),il=new R(0,0,1),sl={type:"added"},pu={type:"removed"},bi={type:"childadded",child:null},ka={type:"childremoved",child:null};class gt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new R,t=new On,n=new jn,i=new R(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Fe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt($i,ws,this.up):Rn.lookAt(ws,$i,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(Rn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),bi.child=e,this.dispatchEvent(bi),bi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gt.DEFAULT_UP=new R(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mu={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Ga(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=jh(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Ga(r,a,e+1/3),this.g=Ga(r,a,e),this.b=Ga(r,a,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(a){a!==void 0&&parseFloat(a)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return $e.workingToColorSpace(zt.copy(this),e),Math.round(qe(zt.r*255,0,255))*65536+Math.round(qe(zt.g*255,0,255))*256+Math.round(qe(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,a=zt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-n)/f+2;break;case a:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){$e.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Ts);const n=Na(Vn.h,Ts.h,t),i=Na(Vn.s,Ts.s,t),a=Na(Vn.l,Ts.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ee;Ee.NAMES=Rc;class go{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cc extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new R,Cn=new R,Ha=new R,Pn=new R,Ei=new R,wi=new R,al=new R,Va=new R,Wa=new R,Xa=new R,qa=new mt,Ya=new mt,Za=new mt;class pn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){cn.subVectors(i,t),Cn.subVectors(n,t),Ha.subVectors(e,t);const r=cn.dot(cn),o=cn.dot(Cn),l=cn.dot(Ha),c=Cn.dot(Cn),h=Cn.dot(Ha),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pn.x),l.addScaledVector(r,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return qa.setScalar(0),Ya.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,n),Za.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(qa,a.x),r.addScaledVector(Ya,a.y),r.addScaledVector(Za,a.z),r}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Cn.subVectors(e,t),cn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Ei.subVectors(i,n),wi.subVectors(a,n),Va.subVectors(e,n);const l=Ei.dot(Va),c=wi.dot(Va);if(l<=0&&c<=0)return t.copy(n);Wa.subVectors(e,i);const h=Ei.dot(Wa),f=wi.dot(Wa);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(n).addScaledVector(Ei,r);Xa.subVectors(e,a);const d=Ei.dot(Xa),g=wi.dot(Xa);if(g>=0&&d<=g)return t.copy(a);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(wi,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return al.subVectors(a,i),o=(f-h)/(f-h+(d-g)),t.copy(i).addScaledVector(al,o);const m=1/(p+_+u);return r=_*m,o=u*m,t.copy(n).addScaledVector(Ei,r).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,hn):hn.fromBufferAttribute(a,r),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Rs.subVectors(this.max,Ki),Ti.subVectors(e.a,Ki),Ai.subVectors(e.b,Ki),Ri.subVectors(e.c,Ki),Wn.subVectors(Ai,Ti),Xn.subVectors(Ri,Ai),si.subVectors(Ti,Ri);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-si.y,si.x,0];return!$a(t,Ti,Ai,Ri,Rs)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Ti,Ai,Ri,Rs))?!1:(Cs.crossVectors(Wn,Xn),t=[Cs.x,Cs.y,Cs.z],$a(t,Ti,Ai,Ri,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new R,new R,new R,new R,new R,new R,new R,new R],hn=new R,As=new xi,Ti=new R,Ai=new R,Ri=new R,Wn=new R,Xn=new R,si=new R,Ki=new R,Rs=new R,Cs=new R,ai=new R;function $a(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){ai.fromArray(s,a);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mt=new R,Ps=new Re;let gu=0;class pt extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=e!==void 0?po(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):nu(e,this.array)}}class Pc extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lc extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const xu=new xi,Ji=new R,Ka=new R;class _i{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xu.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Ka)),this.expandByPoint(Ji.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _u=0;const nn=new et,Ja=new gt,Ci=new R,$t=new xi,Qi=new xi,Pt=new R;class ot extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?Lc:Pc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Fe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Je(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors($t.min,Qi.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,Qi.max),$t.expandByPoint(Pt)):($t.expandByPoint(Qi.min),$t.expandByPoint(Qi.max))}$t.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)Pt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),Pt.add(Ci)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new R,l[N]=new R;const h=new R,f=new R,u=new R,d=new Re,g=new Re,_=new Re,p=new R,m=new R;function v(N,C,I){c[N]=c[C]=c[I]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,I),d.fromBufferAttribute(a,N),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,I),f.sub(h),u.sub(h),g.sub(d),_.sub(d);const U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(U),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(U),o[N].add(p),o[C].add(p),o[I].add(p),l[N].add(m),l[C].add(m),l[I].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,C=E.length;N<C;++N){const I=E[N],U=I.start,W=I.count;for(let L=U,V=U+W;L<V;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new R,T=new R,w=new R,x=new R;function b(N){w.fromBufferAttribute(i,N),x.copy(w);const C=o[N];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(x,C);const U=T.dot(l[N])<0?-1:1;r.setXYZW(N,S.x,S.y,S.z,U)}for(let N=0,C=n.count;N<C;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new pt(u,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new R,vu=new R,Mu=new Fe;class Zn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Qa),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mu.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Su=0;class vi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=zi,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new R,ja=new R,Ls=new R,Is=new R;class xo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ja.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Is.copy(this.origin).sub(ja);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ls),o=Is.dot(this.direction),l=-Is.dot(Ls),c=Is.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-o,u=r*o-l,g=a*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ja).addScaledVector(Ls,u),d}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-r.x,u=e.y-r.y,d=e.z-r.z,g=t.x-r.x,_=t.y-r.y,p=t.z-r.z,m=n.x-r.x,v=n.y-r.y,E=n.z-r.z,S=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let x,b,N,C,I,U,W,L,V,$,k,ie;if(S>=T&&S>=w?(N=l,U=f,V=g,ie=m,l>=0?(x=c,b=h,C=u,I=d,W=_,L=p,$=v,k=E):(x=h,b=c,C=d,I=u,W=p,L=_,$=E,k=v)):T>=w?(N=c,U=u,V=_,ie=v,c>=0?(x=h,b=l,C=d,I=f,W=p,L=g,$=E,k=m):(x=l,b=h,C=f,I=d,W=g,L=p,$=m,k=E)):(N=h,U=d,V=p,ie=E,h>=0?(x=l,b=c,C=f,I=u,W=g,L=_,$=m,k=v):(x=c,b=l,C=u,I=f,W=_,L=g,$=v,k=m)),N===0)return null;const Y=x/N,ee=b/N,F=1/N,te=C-Y*U,se=I-ee*U,z=W-Y*V,X=L-ee*V,re=$-Y*ie,ge=k-ee*ie,ne=re*X-ge*z,Se=te*ge-se*re,ke=z*se-X*te;if(i){if(ne<0||Se<0||ke<0)return null}else if((ne<0||Se<0||ke<0)&&(ne>0||Se>0||ke>0))return null;const ye=ne+Se+ke;if(ye===0)return null;const Ie=F*(ne*U+Se*V+ke*ie);return(ye>0?Ie<0:Ie>0)?null:this.at(Ie/ye,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rl=new et,ri=new xo,Ds=new _i,ol=new R,Ns=new R,Us=new R,Fs=new R,er=new R,Os=new R,ll=new R,zs=new R;class Xe extends gt{constructor(e=new ot,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Os.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&(er.fromBufferAttribute(f,e),r?Os.addScaledVector(er,h):Os.addScaledVector(er.sub(t),h))}t.add(Os)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(a),ri.copy(e.ray).recast(e.near),!(Ds.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Ds,ol)===null||ri.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(rl.copy(a).invert(),ri.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,T=E;S<T;S+=3){const w=o.getX(S),x=o.getX(S+1),b=o.getX(S+2);i=ks(this,m,e,n,c,h,f,w,x,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);i=ks(this,r,e,n,c,h,f,v,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,T=E;S<T;S+=3){const w=S,x=S+1,b=S+2;i=ks(this,m,e,n,c,h,f,w,x,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=p,E=p+1,S=p+2;i=ks(this,r,e,n,c,h,f,v,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function yu(s,e,t,n,i,a,r,o){let l;if(e.side===Vt?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===fi,o),l===null)return null;zs.copy(o),zs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:s}}function ks(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,Ns),s.getVertexPosition(l,Us),s.getVertexPosition(c,Fs);const h=yu(s,e,t,n,Ns,Us,Fs,ll);if(h){const f=new R;pn.getBarycoord(ll,Ns,Us,Fs,f),i&&(h.uv=pn.getInterpolatedAttribute(i,o,l,c,f,new Re)),a&&(h.uv1=pn.getInterpolatedAttribute(a,o,l,c,f,new Re)),r&&(h.normal=pn.getInterpolatedAttribute(r,o,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};pn.getNormal(Ns,Us,Fs,u.normal),h.face=u,h.barycoord=f}return h}class Ic extends Bt{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Nt,h=Nt,f,u){super(null,r,o,l,c,h,i,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new et,hl=new et,Bs=[],ul=new xi,bu=new et,ji=new Xe,es=new _i;class os extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ul.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),es.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),e.ray.intersectsSphere(es)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Pi),hl.multiplyMatrices(n,Pi),ji.matrixWorld=hl,ji.raycast(e,Bs);for(let r=0,o=Bs.length;r<o;r++){const l=Bs[r];l.instanceId=a,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(i*this.count),i,this.count,co,mn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oi=new _i,Eu=new Re(.5,.5),Gs=new R;class ms{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,a=new Zn,r=new Zn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],d=a[7],g=a[8],_=a[9],p=a[10],m=a[11],v=a[12],E=a[13],S=a[14],T=a[15];if(i[0].setComponents(c-r,d-h,m-g,T-v).normalize(),i[1].setComponents(c+r,d+h,m+g,T+v).normalize(),i[2].setComponents(c+o,d+f,m+_,T+E).normalize(),i[3].setComponents(c-o,d-f,m-_,T-E).normalize(),n)i[4].setComponents(l,u,p,S).normalize(),i[5].setComponents(c-l,d-u,m-p,T-S).normalize();else if(i[4].setComponents(c-l,d-u,m-p,T-S).normalize(),t===gn)i[5].setComponents(c+l,d+u,m+p,T+S).normalize();else if(t===ps)i[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Eu.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gs.x=i.normal.x>0?e.max.x:e.min.x,Gs.y=i.normal.y>0?e.max.y:e.min.y,Gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const dl=new et;class _o{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const a=t[i];dl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[i]===void 0&&(n[i]=new ms),n[i].setFromProjectionMatrix(dl,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ms),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new _o().copy(this)}}class vo extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new R,ga=new R,fl=new et,ts=new xo,Hs=new _i,tr=new R,pl=new R;class wu extends gt{constructor(e=new ot,t=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)ma.fromBufferAttribute(t,i-1),ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new Je(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=a,e.ray.intersectsSphere(Hs)===!1)return;fl.copy(i).invert(),ts.copy(e.ray).applyMatrix4(fl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=h.getX(_),v=h.getX(_+1),E=Vs(this,e,ts,l,m,v,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Vs(this,e,ts,l,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=Vs(this,e,ts,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Vs(this,e,ts,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Vs(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(ma.fromBufferAttribute(o,i),ga.fromBufferAttribute(o,a),t.distanceSqToSegment(ma,ga,tr,pl)>n)return;tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tr);if(!(c<e.near||c>e.far))return{distance:c,point:pl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const ml=new R,gl=new R;class Dc extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)ml.fromBufferAttribute(t,i),gl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ml.distanceTo(gl);e.setAttribute("lineDistance",new Je(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class di extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new et,Qr=new xo,Ws=new _i,Xs=new R;class Bi extends gt{constructor(e=new ot,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=a,e.ray.intersectsSphere(Ws)===!1)return;xl.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(xl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);Xs.fromBufferAttribute(f,p),_l(Xs,p,l,i,e,t,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,_=d;g<_;g++)Xs.fromBufferAttribute(f,g),_l(Xs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function _l(s,e,t,n,i,a,r){const o=Qr.distanceSqToPoint(s);if(o<t){const l=new R;Qr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Nc extends Bt{constructor(e=[],t=Hi,n,i,a,r,o,l,c,h){super(e,t,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends Bt{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi extends Bt{constructor(e,t,n=wn,i,a,r,o=Nt,l=Nt,c,h=Qn,f=1){if(h!==Qn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Uc extends Wi{constructor(e,t=wn,n=Hi,i,a,r=Nt,o=Nt,l,c=Qn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class We extends ot{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function g(_,p,m,v,E,S,T,w,x,b,N){const C=S/x,I=T/b,U=S/2,W=T/2,L=w/2,V=x+1,$=b+1;let k=0,ie=0;const Y=new R;for(let ee=0;ee<$;ee++){const F=ee*I-W;for(let te=0;te<V;te++){const se=te*C-U;Y[_]=se*v,Y[p]=F*E,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(te/x),f.push(1-ee/b),k+=1}}for(let ee=0;ee<b;ee++)for(let F=0;F<x;F++){const te=u+F+V*ee,se=u+F+V*(ee+1),z=u+(F+1)+V*(ee+1),X=u+(F+1)+V*ee;l.push(te,se,X),l.push(se,z,X),ie+=6}o.addGroup(d,ie,N),d+=ie,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xs extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new R,h=new Re;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends ot{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;v(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function v(){const S=new R,T=new R;let w=0;const x=(t-e)/n;for(let b=0;b<=a;b++){const N=[],C=b/a,I=C*(t-e)+e;for(let U=0;U<=i;U++){const W=U/i,L=W*l+o,V=Math.sin(L),$=Math.cos(L);T.x=I*V,T.y=-C*n+p,T.z=I*$,f.push(T.x,T.y,T.z),S.set(V,x,$).normalize(),u.push(S.x,S.y,S.z),d.push(W,1-C),N.push(g++)}_.push(N)}for(let b=0;b<i;b++)for(let N=0;N<a;N++){const C=_[N][b],I=_[N+1][b],U=_[N+1][b+1],W=_[N][b+1];(e>0||N!==0)&&(h.push(C,I,W),w+=3),(t>0||N!==a-1)&&(h.push(I,U,W),w+=3)}c.addGroup(m,w,0),m+=w}function E(S){const T=g,w=new Re,x=new R;let b=0;const N=S===!0?e:t,C=S===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),g++;const I=g;for(let U=0;U<=i;U++){const L=U/i*l+o,V=Math.cos(L),$=Math.sin(L);x.x=N*$,x.y=p*C,x.z=N*V,f.push(x.x,x.y,x.z),u.push(0,C,0),w.x=V*.5+.5,w.y=$*.5*C+.5,d.push(w.x,w.y),g++}for(let U=0;U<i;U++){const W=T+U,L=I+U;S===!0?h.push(L,L+1,W):h.push(L+1,L,W),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fn extends st{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Fn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(a.slice(),3)),this.setAttribute("uv",new Je(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new R,S=new R,T=new R;for(let w=0;w<t.length;w+=3)d(t[w+0],E),d(t[w+1],S),d(t[w+2],T),l(E,S,T,v)}function l(v,E,S,T){const w=T+1,x=[];for(let b=0;b<=w;b++){x[b]=[];const N=v.clone().lerp(S,b/w),C=E.clone().lerp(S,b/w),I=w-b;for(let U=0;U<=I;U++)U===0&&b===w?x[b][U]=N:x[b][U]=N.clone().lerp(C,U/I)}for(let b=0;b<w;b++)for(let N=0;N<2*(w-b)-1;N++){const C=Math.floor(N/2);N%2===0?(u(x[b][C+1]),u(x[b+1][C]),u(x[b][C])):(u(x[b][C+1]),u(x[b+1][C+1]),u(x[b+1][C]))}}function c(v){const E=new R;for(let S=0;S<a.length;S+=3)E.x=a[S+0],E.y=a[S+1],E.z=a[S+2],E.normalize().multiplyScalar(v),a[S+0]=E.x,a[S+1]=E.y,a[S+2]=E.z}function h(){const v=new R;for(let E=0;E<a.length;E+=3){v.x=a[E+0],v.y=a[E+1],v.z=a[E+2];const S=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;r.push(S,1-T)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const E=r[v+0],S=r[v+2],T=r[v+4],w=Math.max(E,S,T),x=Math.min(E,S,T);w>.9&&x<.1&&(E<.2&&(r[v+0]+=1),S<.2&&(r[v+2]+=1),T<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function d(v,E){const S=v*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function g(){const v=new R,E=new R,S=new R,T=new R,w=new Re,x=new Re,b=new Re;for(let N=0,C=0;N<a.length;N+=9,C+=6){v.set(a[N+0],a[N+1],a[N+2]),E.set(a[N+3],a[N+4],a[N+5]),S.set(a[N+6],a[N+7],a[N+8]),w.set(r[C+0],r[C+1]),x.set(r[C+2],r[C+3]),b.set(r[C+4],r[C+5]),T.copy(v).add(E).add(S).divideScalar(3);const I=p(T);_(w,C+0,v,I),_(x,C+2,E,I),_(b,C+4,S,I)}}function _(v,E,S,T){T<0&&v.x===1&&(r[E]=v.x-1),S.x===0&&S.z===0&&(r[E]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.vertices,e.indices,e.radius,e.detail)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=t||(r.isVector2?new Re:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],a=[],r=[],o=new R,l=new et;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new R)}a[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qe(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(qe(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Oc extends kn{constructor(e=0,t=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Re){const n=t,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tu extends Oc{constructor(e,t,n,i,a,r){super(e,t,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let s=0,e=0,t=0,n=0;function i(a,r,o,l){s=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,f){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+f)+(l-o)/f;u*=h,d*=h,i(r,o,u,d)},calc:function(a){const r=a*a,o=r*a;return s+e*a+t*r+n*o}}}const vl=new R,Ml=new R,nr=new So,ir=new So,sr=new So;class yo extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,a=i.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(Ml.subVectors(i[0],i[1]).add(i[0]),c=Ml);const f=i[o%a],u=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(vl.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=vl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),nr.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),ir.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),sr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(nr.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ir.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),sr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(nr.calc(l),ir.calc(l),sr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sl(s,e,t,n,i){const a=(n-e)*.5,r=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*s+t}function Au(s,e){const t=1-s;return t*t*e}function Ru(s,e){return 2*(1-s)*s*e}function Cu(s,e){return s*s*e}function ls(s,e,t,n){return Au(s,e)+Ru(s,t)+Cu(s,n)}function Pu(s,e){const t=1-s;return t*t*t*e}function Lu(s,e){const t=1-s;return 3*t*t*s*e}function Iu(s,e){return 3*(1-s)*s*s*e}function Du(s,e){return s*s*s*e}function cs(s,e,t,n,i){return Pu(s,e)+Lu(s,t)+Iu(s,n)+Du(s,i)}class Nu extends kn{constructor(e=new Re,t=new Re,n=new Re,i=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Re){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(cs(e,i.x,a.x,r.x,o.x),cs(e,i.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uu extends kn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(cs(e,i.x,a.x,r.x,o.x),cs(e,i.y,a.y,r.y,o.y),cs(e,i.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fu extends kn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends kn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zu extends kn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(ls(e,i.x,a.x,r.x),ls(e,i.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends kn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(ls(e,i.x,a.x,r.x),ls(e,i.y,a.y,r.y),ls(e,i.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ku extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,i=this.points,a=(i.length-1)*e,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(Sl(o,l.x,c.x,h.x,f.x),Sl(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Re().fromArray(i))}return this}}var Bu=Object.freeze({__proto__:null,ArcCurve:Tu,CatmullRomCurve3:yo,CubicBezierCurve:Nu,CubicBezierCurve3:Uu,EllipseCurve:Oc,LineCurve:Fu,LineCurve3:Ou,QuadraticBezierCurve:zu,QuadraticBezierCurve3:zc,SplineCurve:ku});class zn extends Ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zn(e.radius,e.detail)}}class bo extends Ma{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bo(e.radius,e.detail)}}class mi extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let E=0;E<c;E++){const S=E*f-a;g.push(S,-v,0),_.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const E=v+c*m,S=v+c*(m+1),T=v+1+c*(m+1),w=v+1+c*m;d.push(E,S,w),d.push(S,T,w)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class qi extends ot{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new R,g=new Re;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=a+p/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const v=m+p,E=v,S=v+n+1,T=v+n+2,w=v+1;o.push(E,S,w),o.push(S,T,w)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sa extends ot{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],f=new R,u=new R,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],E=m/n,S=r+E*o,T=e*Math.cos(S),w=Math.sqrt(e*e-T*T);let x=0;m===0&&r===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const N=b/t,C=i+N*a;f.x=-w*Math.cos(C),f.y=T,f.z=w*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(N+x,1-E),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const E=h[m][v+1],S=h[m][v],T=h[m+1][v],w=h[m+1][v+1];(m!==0||r>0)&&d.push(E,S,w),(m!==n-1||l<Math.PI)&&d.push(S,T,w)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eo extends ot{constructor(e=new zc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new R,l=new R,c=new Re;let h=new R;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function _(){for(let E=0;E<t;E++)p(E);p(a===!1?t:0),v(),m()}function p(E){h=e.getPointAt(E/t,h);const S=r.normals[E],T=r.binormals[E];for(let w=0;w<=i;w++){const x=w/i*Math.PI*2,b=Math.sin(x),N=-Math.cos(x);l.x=N*S.x+b*T.x,l.y=N*S.y+b*T.y,l.z=N*S.z+b*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let S=1;S<=i;S++){const T=(i+1)*(E-1)+(S-1),w=(i+1)*E+(S-1),x=(i+1)*E+S,b=(i+1)*(E-1)+S;g.push(T,w,b),g.push(w,x,b)}}function v(){for(let E=0;E<=t;E++)for(let S=0;S<=i;S++)c.x=E/t,c.y=S/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Eo(new Bu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(yl(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yl(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Xi(s[t]);for(const i in n)e[i]=n[i]}return e}function yl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Hu={clone:Xi,merge:Ht};var Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(i.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new et().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xu extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qu extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yu extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bc extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gc extends Bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ar=new et,bl=new R,El=new R;class Zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ar,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,l=i?i.x/a.x:0,c=i?i.y/a.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qs=new R,Ys=new jn,vn=new R;class Hc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Ys,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Ys,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new R,wl=new Re,Tl=new Re;class sn extends Hc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Tl),t.subVectors(Tl,wl)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vc extends Hc{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $u extends Zu{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xa extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Li=-90,Ii=1;class jr extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Li,Ii,e,t);i.layers=this.layers,this.add(i);const a=new sn(Li,Ii,e,t);a.layers=this.layers,this.add(a);const r=new sn(Li,Ii,e,t);r.layers=this.layers,this.add(r);const o=new sn(Li,Ii,e,t);o.layers=this.layers,this.add(o);const l=new sn(Li,Ii,e,t);l.layers=this.layers,this.add(l);const c=new sn(Li,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ku extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Ju extends Dc{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);const a=t/2,r=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,g=-o;u<=t;u++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=u===a?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new ot;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const f=new vo({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Al(s,e,t,n){const i=Qu(n);switch(t){case Mc:return s*e;case co:return s*e/i.components*i.byteLength;case ho:return s*e/i.components*i.byteLength;case pi:return s*e*2/i.components*i.byteLength;case uo:return s*e*2/i.components*i.byteLength;case Sc:return s*e*3/i.components*i.byteLength;case bn:return s*e*4/i.components*i.byteLength;case fo:return s*e*4/i.components*i.byteLength;case ta:case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sr:case br:return Math.max(s,16)*Math.max(e,8)/4;case Mr:case yr:return Math.max(s,8)*Math.max(e,8)/2;case Er:case wr:case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:case ha:case Cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Or:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Br:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wr:case Xr:case qr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yr:case Zr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ua:case $r:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qu(s){switch(s){case Jt:case gc:return{byteLength:1,components:1};case fs:case xc:case Tn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case wn:case ro:case mn:return{byteLength:4,components:1};case _c:case vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);function Wc(){let s=null,e=!1,t=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function ju(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_p=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yp=`#define PHONG
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
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ep=`#define STANDARD
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
}`,wp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Tp=`#define TOON
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
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Rp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Ip=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:ad,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:xd,clipping_planes_vertex:_d,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:yd,common:bd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Ld,envmap_common_pars_fragment:Id,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:$d,lights_physical_fragment:Kd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:jd,lights_fragment_end:ef,lightprobes_pars_fragment:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:xf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:yf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Af,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:If,dithering_pars_fragment:Df,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:zf,shadowmask_pars_fragment:kf,skinbase_vertex:Bf,skinning_pars_vertex:Gf,skinning_vertex:Hf,skinnormal_vertex:Vf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Zf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:jf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:ap,depth_vert:rp,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:xp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:yp,meshphong_frag:bp,meshphysical_vert:Ep,meshphysical_frag:wp,meshtoon_vert:Tp,meshtoon_frag:Ap,points_vert:Rp,points_frag:Cp,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Ip,sprite_frag:Dp},ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},yn={basic:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ht([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ht([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ht([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ht([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ht([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ht([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ht([ve.common,ve.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ht([ve.lights,ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};yn.physical={uniforms:Ht([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Zs={r:0,b:0,g:0},Np=new et,Xc=new Fe;Xc.set(-1,0,0,0,1,0,0,0,1);function Up(s,e,t,n,i,a){const r=new Ee(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(v){let E=!1;const S=d(v);S===null?p(r,o):S&&S.isColor&&(p(S,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,E){const S=d(E);S&&S.isCubeTexture?(c===void 0&&(c=new Xe(new We(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Xi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xc),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,(h!==S||f!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xe(new mi(2,2),new ei({name:"BackgroundMaterial",uniforms:Xi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(Zs,kc(s)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,E,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,E=1){r.set(v),o=E,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(r,o)},render:g,addToRenderList:_,dispose:m}}function Fp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(I,U,W,L,V){let $=!1;const k=f(I,L,W,U);a!==k&&(a=k,c(a.object)),$=d(I,L,W,V),$&&g(I,L,W,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,S(I,U,W,L),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,U,W,L){const V=L.wireframe===!0;let $=n[U.id];$===void 0&&($={},n[U.id]=$);const k=I.isInstancedMesh===!0?I.id:0;let ie=$[k];ie===void 0&&(ie={},$[k]=ie);let Y=ie[W.id];Y===void 0&&(Y={},ie[W.id]=Y);let ee=Y[V];return ee===void 0&&(ee=u(l()),Y[V]=ee),ee}function u(I){const U=[],W=[],L=[];for(let V=0;V<t;V++)U[V]=0,W[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,U,W,L){const V=a.attributes,$=U.attributes;let k=0;const ie=W.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const F=V[Y];let te=$[Y];if(te===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;k++}return a.attributesNum!==k||a.index!==L}function g(I,U,W,L){const V={},$=U.attributes;let k=0;const ie=W.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let F=$[Y];F===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(F=I.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),V[Y]=te,k++}a.attributes=V,a.attributesNum=k,a.index=L}function _(){const I=a.newAttributes;for(let U=0,W=I.length;U<W;U++)I[U]=0}function p(I){m(I,0)}function m(I,U){const W=a.newAttributes,L=a.enabledAttributes,V=a.attributeDivisors;W[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),V[I]!==U&&(s.vertexAttribDivisor(I,U),V[I]=U)}function v(){const I=a.newAttributes,U=a.enabledAttributes;for(let W=0,L=U.length;W<L;W++)U[W]!==I[W]&&(s.disableVertexAttribArray(W),U[W]=0)}function E(I,U,W,L,V,$,k){k===!0?s.vertexAttribIPointer(I,U,W,V,$):s.vertexAttribPointer(I,U,W,L,V,$)}function S(I,U,W,L){_();const V=L.attributes,$=W.getAttributes(),k=U.defaultAttributeValues;for(const ie in $){const Y=$[ie];if(Y.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const F=ee.normalized,te=ee.itemSize,se=e.get(ee);if(se===void 0)continue;const z=se.buffer,X=se.type,re=se.bytesPerElement,ge=X===s.INT||X===s.UNSIGNED_INT||ee.gpuType===ro;if(ee.isInterleavedBufferAttribute){const ne=ee.data,Se=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,ke=ee.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,ne.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ye=0;ye<Y.locationSize;ye++)E(Y.location+ye,te/Y.locationSize,X,F,Se*re,(ke+te/Y.locationSize*ye)*re,ge)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne,ee.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<Y.locationSize;ne++)p(Y.location+ne);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ne=0;ne<Y.locationSize;ne++)E(Y.location+ne,te/Y.locationSize,X,F,te*re,te/Y.locationSize*ne*re,ge)}}else if(k!==void 0){const F=k[ie];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(Y.location,F);break;case 3:s.vertexAttrib3fv(Y.location,F);break;case 4:s.vertexAttrib4fv(Y.location,F);break;default:s.vertexAttrib1fv(Y.location,F)}}}}v()}function T(){N();for(const I in n){const U=n[I];for(const W in U){const L=U[W];for(const V in L){const $=L[V];for(const k in $)h($[k].object),delete $[k];delete L[V]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const U=n[I.id];for(const W in U){const L=U[W];for(const V in L){const $=L[V];for(const k in $)h($[k].object),delete $[k];delete L[V]}}delete n[I.id]}function x(I){for(const U in n){const W=n[U];for(const L in W){const V=W[L];if(V[I.id]===void 0)continue;const $=V[I.id];for(const k in $)h($[k].object),delete $[k];delete V[I.id]}}}function b(I){for(const U in n){const W=n[U],L=I.isInstancedMesh===!0?I.id:0,V=W[L];if(V!==void 0){for(const $ in V){const k=V[$];for(const ie in k)h(k[ie].object),delete k[ie];delete V[$]}delete W[L],Object.keys(W).length===0&&delete n[U]}}}function N(){C(),r=!0,a!==i&&(a=i,c(a.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Op(s,e,t){let n;function i(l){n=l}function a(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function zp(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){return!(x!==bn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Jt&&x!==mn&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:w}}function kp(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Zn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||a&&!p)a?h(null):c();else{const v=a?0:n,E=v*4;let S=m.clippingState||null;l.value=S,S=h(g,u,E,d);for(let T=0;T!==E;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=d;E!==_;++E,S+=4)r.copy(f[E]).applyMatrix4(v,o),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class wo extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new We(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Oi});a.uniforms.tEquirect.value=t;const r=new Xe(i,a),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=qt),new jr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const Rl=256,Bp=3,Gp=20,qc=256,Yc=16,Hp=3,Vp=new R,Wp=new Ee;class _a{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jr(1,10,null),this._boxMesh=new Xe(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=Vp}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Wp));const p=new jr(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rl,eu(e))}_fromTexture(e,t){e.mapping===Hi||e.mapping===ds?this._setSize(e.image.length===0?Rl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Cl(e,!1,!1),n=Math.log2(e)-Bp;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,a=this._cubeCamera;i.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hi||e.mapping===ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Xp(),this._integrationMaterial=qp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/Yc);for(let r=0;r<=n;r++){const o=_a.lodToRoughness(r,n);if(r>n-Hp)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(qc*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yp());const n=this._blurMaterial,i=n.uniforms,a=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=a.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(a,0,n)}}function Cl(s,e,t){return new wo(s,{minFilter:Kn,generateMipmaps:e,type:Tn,colorSpace:da,depthBuffer:t})}function _s(s,e,t){return new ei({name:s,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Vt,blending:Oi,depthTest:!1,depthWrite:!1})}function Xp(){return _s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qp(){return _s("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yp(){return _s("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Pl(){return _s("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ll(){return _s("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zp(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ca||d===Pa)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new wo(g.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,g=d===Ca||d===Pa,_=d===Hi||d===ds;if(g||_){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new _a(s)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new _a(s)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Ca?u.mapping=Hi:d===Pa&&(u.mapping=ds),u}function l(u){let d=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function $p(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&aa("WebGLRenderer: "+n+" extension not supported."),i}}}function Kp(s,e,t,n){const i={},a=new WeakMap,r=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],r.unregister(g);const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),r.register(_,_.id,_),t.memory.geometries++),_}function h(g){const _=g.attributes;for(const p in _)e.update(_[p],s.ARRAY_BUFFER)}function f(g){const _=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Lc:Pc,S=new E(Math.ceil(v/3)*6,1),T=S.array;if(_!==null){const x=_.array;m=_.version;for(let b=0,N=0;b<v;b+=3){const C=x[b+0],I=x[b+1],U=x[b+2];T[N++]=C,T[N++]=I,T[N++]=I,T[N++]=U,T[N++]=U,T[N++]=C}}else{m=p.version;for(let x=0,b=0;x<v;x+=3){const N=x+0,C=x+1,I=x+2;T[b++]=N,T[b++]=C,T[b++]=C,T[b++]=I,T[b++]=I,T[b++]=N}}S.version=m;const w=a.get(g);w&&e.remove(w),a.set(g,S)}function u(g){const _=a.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&f(g)}else f(g);return a.get(g)}function d(){for(const g in i){const _=i[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Jp(s,e,t){let n;function i(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,u){s.drawElements(n,u,a,f*r),t.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,a,f*r,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:je("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jp(s,e,t){const n=new WeakMap,i=new mt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let C=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*w*4*f),b=new Tc(x,T,w,f);b.type=mn,b.needsUpdate=!0;const N=S*4;for(let I=0;I<f;I++){const U=m[I],W=v[I],L=E[I],V=T*w*4*I;for(let $=0;$<U.count;$++){const k=$*N;g===!0&&(i.fromBufferAttribute(U,$),x[V+k+0]=i.x,x[V+k+1]=i.y,x[V+k+2]=i.z,x[V+k+3]=0),_===!0&&(i.fromBufferAttribute(W,$),x[V+k+4]=i.x,x[V+k+5]=i.y,x[V+k+6]=i.z,x[V+k+7]=0),p===!0&&(i.fromBufferAttribute(L,$),x[V+k+8]=i.x,x[V+k+9]=i.y,x[V+k+10]=i.z,x[V+k+11]=L.itemSize===4?i.w:1)}}u={count:f,texture:b,size:new Re(T,w)},n.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function em(s,e,t,n,i){let a=new WeakMap;function r(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const tm={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[fc]:"AGX_TONE_MAPPING",[pc]:"NEUTRAL_TONE_MAPPING",[dc]:"CUSTOM_TONE_MAPPING"};function nm(s,e,t,n,i,a){const r=new En(e,t,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new ot;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));const f=new Xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xe(h,f),d=new Vc(-1,1,1,-1,0,1);let g=null,_=null,p=!1,m,v=null,E=[],S=!1;this.setSize=function(T,w){r.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let x=0;x<E.length;x++){const b=E[x];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){E=T,S=E.length>0&&E[0].isRenderPass===!0;const w=r.width,x=r.height;E.length>0&&o===null&&(o=new En(w,x,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new En(w,x,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&c===null&&(c=new Wi(w,x),a===!0&&(c.format=Jn,c.type=Vi)),r.dispose(),r.depthTexture=b?c:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){const C=E[N];C.setSize&&C.setSize(w,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===xn&&E.length===0)return!1;if(v=w,w!==null){const x=w.width,b=w.height;(r.width!==x||r.height!==b)&&this.setSize(x,b)}return S===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=xn,!0},this.hasRenderPass=function(){return S},this.end=function(T,w){T.toneMapping=m,p=!0;let x=r,b=o;for(let N=0;N<E.length;N++){const C=E[N];C.enabled!==!1&&(C.render(T,b,x,w),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,f.defines={},$e.getTransfer(g)===it&&(f.defines.SRGB_TRANSFER="");const N=tm[_];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Zc=new Bt,$c=new Wi(1,1),Kc=new Uc(1),Jc=new Tc,Qc=new lu,jc=new Nc,Il=[],Dl=[],Nl=new Float32Array(16),Ul=new Float32Array(9),Fl=new Float32Array(4);function Yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Il[i];if(a===void 0&&(a=new Float32Array(i),Il[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ya(s,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function im(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function om(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Fl.set(n),s.uniformMatrix2fv(this.addr,!1,Fl),Tt(t,n)}}function lm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Ul.set(n),s.uniformMatrix3fv(this.addr,!1,Ul),Tt(t,n)}}function cm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Nl.set(n),s.uniformMatrix4fv(this.addr,!1,Nl),Tt(t,n)}}function hm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function ba(s){return s.version===0&&(s.compareFunction=Ec,s.needsUpdate=!0),s}function _m(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?a=ba($c):a=Zc,t.setTexture2D(e||a,i)}function vm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qc,i)}function Mm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ba(Kc):a=jc,t.setTextureCube(e||a,i)}function Sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}function ym(s){switch(s){case 5126:return im;case 35664:return sm;case 35665:return am;case 35666:return rm;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}function bm(s,e){s.uniform1fv(this.addr,e)}function Em(s,e){const t=Yi(e,this.size,2);s.uniform2fv(this.addr,t)}function wm(s,e){const t=Yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Tm(s,e){const t=Yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Am(s,e){const t=Yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rm(s,e){const t=Yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cm(s,e){const t=Yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pm(s,e){s.uniform1iv(this.addr,e)}function Lm(s,e){s.uniform2iv(this.addr,e)}function Im(s,e){s.uniform3iv(this.addr,e)}function Dm(s,e){s.uniform4iv(this.addr,e)}function Nm(s,e){s.uniform1uiv(this.addr,e)}function Um(s,e){s.uniform2uiv(this.addr,e)}function Fm(s,e){s.uniform3uiv(this.addr,e)}function Om(s,e){s.uniform4uiv(this.addr,e)}function zm(s,e,t){const n=this.cache,i=e.length,a=ya(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),Tt(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=ba($c):r=Zc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,a[o])}function km(s,e,t){const n=this.cache,i=e.length,a=ya(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Qc,a[r])}function Bm(s,e,t){const n=this.cache,i=e.length,a=ya(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),Tt(n,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ba(Kc):r=jc;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,a[o])}function Gm(s,e,t){const n=this.cache,i=e.length,a=ya(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Jc,a[r])}function Hm(s){switch(s){case 5126:return bm;case 35664:return Em;case 35665:return wm;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ym(t.type)}}class Wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hm(t.type)}}class Xm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function Ol(s,e){s.seq.push(e),s.map[e.id]=e}function qm(s,e,t){const n=s.name,i=n.length;for(rr.lastIndex=0;;){const a=rr.exec(n),r=rr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ol(t,c===void 0?new Vm(o,s,e):new Wm(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Xm(o),Ol(t,f)),t=f}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);qm(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function zl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ym=37297;let Zm=0;function $m(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const kl=new Fe;function Km(s){$e._getMatrix(kl,$e.workingColorSpace,s);const e=`mat3( ${kl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case fa:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+$m(s.getShaderSource(e),o)}else return a}function Jm(s,e){const t=Km(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Qm={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[uc]:"ACESFilmic",[fc]:"AgX",[pc]:"Neutral",[dc]:"Custom"};function jm(s,e){const t=Qm[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new R;function e0(){$e.getLuminanceCoefficients($s);const s=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function n0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function rs(s){return s!==""}function Gl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Hl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(s){return s.replace(s0,a0)}function a0(s,e){const t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eo(t)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(s){return s.replace(r0,o0)}function o0(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Wl(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l0={[ea]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function c0(s){return l0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h0={[ds]:"ENVMAP_MODE_REFRACTION"};function u0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":h0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d0={[ao]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function f0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":d0[s.combine]||"ENVMAP_BLENDING_NONE"}function p0(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=c0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=u0(t),f=f0(t),u=t0(t),d=n0(a),g=i.createProgram();let _,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(_=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?He.tonemapping_pars_fragment:"",t.toneMapping!==xn?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Jm("linearToOutputTexel",t.outputColorSpace),e0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),r=eo(r),r=Gl(r,t),r=Hl(r,t),o=eo(o),o=Gl(o,t),o=Hl(o,t),r=Vl(r),o=Vl(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+_+r,E=m+p+o,S=zl(i,i.VERTEX_SHADER,v),T=zl(i,i.FRAGMENT_SHADER,E);i.attachShader(g,S),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(C){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(S)||"",W=i.getShaderInfoLog(T)||"",L=I.trim(),V=U.trim(),$=W.trim();let k=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,T);else{const Y=Bl(i,S,"vertex"),ee=Bl(i,T,"fragment");je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+Y+`
`+ee)}else L!==""?De("WebGLProgram: Program Info Log:",L):(V===""||$==="")&&(ie=!1);ie&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:V,prefix:_},fragmentShader:{log:$,prefix:p}})}i.deleteShader(S),i.deleteShader(T),x=new ra(i,g),b=i0(i,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(g,Ym)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x0(e),t.set(e,n)),n}}class x0{constructor(e){this.id=m0++,this.code=e,this.usedTimes=0}}function _0(s){return s===pi||s===ha||s===ua}function v0(s,e,t,n,i,a){const r=new Ac,o=new g0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,N,C,I,U){const W=C.fog,L=I.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||V,$),ie=u[x.type];let Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,F=ee!==void 0?ee.length:0;let te=0;L.morphAttributes.position!==void 0&&(te=1),L.morphAttributes.normal!==void 0&&(te=2),L.morphAttributes.color!==void 0&&(te=3);let se,z,X,re;if(ie){const _e=yn[ie];se=_e.vertexShader,z=_e.fragmentShader}else{se=x.vertexShader,z=x.fragmentShader;const _e=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,_e,nt),X=_e.id,re=nt.id}const ge=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),Se=I.isInstancedMesh===!0,ke=I.isBatchedMesh===!0,ye=!!x.map,Ie=!!x.matcap,tt=!!k,Ve=tt&&k.isPMREMTexture===!0,yt=!!x.aoMap,ut=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,_n=!!x.displacementMap,At=!!x.emissiveMap,Qt=!!x.metalnessMap,jt=!!x.roughnessMap,en=x.anisotropy>0,O=x.clearcoat>0,tn=x.diffuseRoughness>0,lt=x.dispersion>0,ct=x.retroreflectivity>0,xe=x.iridescence>0,bt=x.sheen>0,Le=x.transmission>0,Ue=en&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,M=O&&!!x.clearcoatNormalMap,G=O&&!!x.clearcoatRoughnessMap,ae=tn&&!!x.diffuseRoughnessMap,j=xe&&!!x.iridescenceMap,ce=xe&&!!x.iridescenceThicknessMap,pe=bt&&!!x.sheenColorMap,K=bt&&!!x.sheenRoughnessMap,J=!!x.specularMap,ue=!!x.specularColorMap,P=!!x.specularIntensityMap,Q=Le&&!!x.transmissionMap,Z=Le&&!!x.thicknessMap,de=!!x.gradientMap,le=!!x.alphaMap,he=x.alphaTest>0,Ce=!!x.alphaHash,Ge=!!x.extensions;let oe=xn;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(oe=s.toneMapping);const Pe=Ve?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Be={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:z,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:ke,batchingColor:ke&&I._colorsTexture!==null,instancing:Se,instancingColor:Se&&I.instanceColor!==null,instancingMorph:Se&&I.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:Ie,envMap:tt,envMapMode:tt&&k.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Pe.length-1:null,envMapSize:Ve?Pe[0].width:null,aoMap:yt,lightMap:ut,bumpMap:Wt,normalMap:dt,displacementMap:_n,emissiveMap:At,normalMapObjectSpace:dt&&x.normalMapType===Gh,normalMapTangentSpace:dt&&x.normalMapType===Kr,packedNormalMap:dt&&x.normalMapType===Kr&&_0(x.normalMap.format),metalnessMap:Qt,roughnessMap:jt,anisotropy:en,anisotropyMap:Ue,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:tn,diffuseRoughnessMap:ae,dispersion:lt,retroreflection:ct,iridescence:xe,iridescenceMap:j,iridescenceThicknessMap:ce,sheen:bt,sheenColorMap:pe,sheenRoughnessMap:K,specularMap:J,specularColorMap:ue,specularIntensityMap:P,transmission:Le,transmissionMap:Q,thicknessMap:Z,gradientMap:de,opaque:x.transparent===!1&&x.blending===zi&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:Ce,combine:x.combine,mapUv:ye&&d(x.map.channel),aoMapUv:yt&&d(x.aoMap.channel),lightMapUv:ut&&d(x.lightMap.channel),bumpMapUv:Wt&&d(x.bumpMap.channel),normalMapUv:dt&&d(x.normalMap.channel),displacementMapUv:_n&&d(x.displacementMap.channel),emissiveMapUv:At&&d(x.emissiveMap.channel),metalnessMapUv:Qt&&d(x.metalnessMap.channel),roughnessMapUv:jt&&d(x.roughnessMap.channel),anisotropyMapUv:Ue&&d(x.anisotropyMap.channel),clearcoatMapUv:A&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(x.sheenRoughnessMap.channel),specularMapUv:J&&d(x.specularMap.channel),specularColorMapUv:ue&&d(x.specularColorMap.channel),specularIntensityMapUv:P&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:Z&&d(x.thicknessMap.channel),alphaMapUv:le&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||en),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(ye||le),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(_e=>_e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kt,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function v(x){const b=u[x.type];let N;if(b){const C=yn[b];N=Hu.clone(C.uniforms)}else N=x.uniforms;return N}function E(x,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new p0(s,b,x,i),c.push(N),h.set(b,N)),N}function S(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function M0(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function S0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Xl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ql(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,p,m){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},s[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function l(u,d,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const E=o(u,d,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function c(u,d,g,_,p,m){const v=o(u,d,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||S0),n.length>1&&n.sort(d||Xl),i.length>1&&i.sort(d||Xl)}function f(){for(let u=e,d=s.length;u<d;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:f,sort:h}}function y0(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new ql,s.set(n,[r])):i>=a.length?(r=new ql,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function b0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ee};break;case"SpotLight":t={position:new R,direction:new R,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function E0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let w0=0;function T0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A0(s){const e=new b0,t=E0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,a=new et,r=new et;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,E=0,S=0,T=0,w=0,x=0,b=0,N=0,C=0;c.sort(T0);for(let U=0,W=c.length;U<W;U++){const L=c[U],V=L.color,$=L.intensity,k=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===pi?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*$,f+=V.g*$,u+=V.b*$;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],$);C++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,F=t.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=F,n.sunShadowMap[g]=ie;const te=ee.getViewportCount();for(let se=0;se<te;se++)n.sunShadowMatrix[_+se]=ee.getMatrix(se),n.sunShadowCascade[_+se]=ee._cascadeData[se];_+=te,g++}n.sun[d]=Y,d++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,F=t.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(V).multiplyScalar($),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;const ee=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,ee.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[v]=ee.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=ie,x++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(V).multiplyScalar($),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=Y,E++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const ee=L.shadow,F=t.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar($),Y.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[S]=Y,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=C,n.version=w0++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){const S=c[v];if(S.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),f++}else if(S.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),u++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),r.identity(),a.copy(S.matrixWorld),a.premultiply(m),r.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Yl(s){const e=new A0(s),t=[],n=[],i=[];function a(f){h.camera=f,t.length=0,n.length=0,i.length=0}function r(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function R0(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new Yl(s),e.set(i,[o])):a>=r.length?(o=new Yl(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],I0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Zl=new et,ns=new R,or=new R;function D0(s,e,t){let n=new ms;const i=new Re,a=new Re,r=new mt,o=new qu,l=new Yu,c={},h=t.maxTextureSize,f={[fi]:Vt,[Vt]:fi,[kt]:kt},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:C0,fragmentShader:P0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new ot;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let m=this.type;this.render=function(w,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===_h&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ea);const N=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=m!==this.type;W&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=w.length;L<V;L++){const $=w[L],k=$.shadow;if(k===void 0){De("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ie=k.getFrameExtents();i.multiply(ie),a.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/ie.x),i.x=a.x*ie.x,k.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/ie.y),i.y=a.y*ie.y,k.mapSize.y=a.y));const Y=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===as){if($.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new En(i.x,i.y,{format:pi,type:Tn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new Wi(i.x,i.y,mn),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=Qn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt}else $.isPointLight?(k.map=new wo(i.x),k.map.depthTexture=new Uc(i.x,wn)):(k.map=new En(i.x,i.y),k.map.depthTexture=new Wi(i.x,i.y,wn)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=Qn,this.type===ea?(k.map.depthTexture.compareFunction=Y?bc:yc,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const ee=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();$.isPointLight!==!0&&k.updateMatrices($,b);const F=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:b.layers;for(let te=0;te<ee;te++){const se=k.getCamera(te);if($.isPointLight){const z=k.camera,X=k.matrix,re=$.distance||z.far;re!==z.far&&(z.far=re,z.updateProjectionMatrix()),ns.setFromMatrixPosition($.matrixWorld),z.position.copy(ns),or.copy(z.position),or.add(L0[te]),z.up.copy(I0[te]),z.lookAt(or),z.updateMatrixWorld(),X.makeTranslation(-ns.x,-ns.y,-ns.z),Zl.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Zl,z.coordinateSystem,z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,te),s.clear();else{te===0&&(s.setRenderTarget(k.map),s.clear());const z=k.getViewport(te);r.set(a.x*z.x,a.y*z.y,a.x*z.z,a.y*z.w),U.viewport(r)}n=k.getFrustum(te),S(x,b,se,$,F,this.type)}k.isPointLightShadow!==!0&&this.type===as&&v(k,b),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(N,C,I)};function v(w,x){const b=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new En(i.x,i.y,{format:pi,type:Tn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,b,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,b,d,_,null)}function E(w,x,b,N){let C=null;const I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=b.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=C.uuid,W=x.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let V=L[W];V===void 0&&(V=C.clone(),L[W]=V,x.addEventListener("dispose",T)),C=V}if(C.visible=x.visible,C.wireframe=x.wireframe,N===as?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=b}return C}function S(w,x,b,N,C,I){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===as)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const L=e.update(w),V=w.material;if(Array.isArray(V)){const $=L.groups;for(let k=0,ie=$.length;k<ie;k++){const Y=$[k],ee=V[Y.materialIndex];if(ee&&ee.visible){const F=E(w,ee,N,I);w.onBeforeShadow(s,w,x,b,L,F,Y),s.renderBufferDirect(b,null,L,F,w,Y),w.onAfterShadow(s,w,x,b,L,F,Y)}}}else if(V.visible){const $=E(w,V,N,I);w.onBeforeShadow(s,w,x,b,L,$,null),s.renderBufferDirect(b,null,L,$,w,null),w.onAfterShadow(s,w,x,b,L,$,null)}}const W=w.children;for(let L=0,V=W.length;L<V;L++)S(W[L],x,b,N,C,I)}function T(w){w.target.removeEventListener("dispose",T);for(const b in c){const N=c[b],C=w.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function N0(s,e){function t(){let P=!1;const Q=new mt;let Z=null;const de=new mt(0,0,0,0);return{setMask:function(le){Z!==le&&!P&&(s.colorMask(le,le,le,le),Z=le)},setLocked:function(le){P=le},setClear:function(le,he,Ce,Ge,oe){oe===!0&&(le*=Ge,he*=Ge,Ce*=Ge),Q.set(le,he,Ce,Ge),de.equals(Q)===!1&&(s.clearColor(le,he,Ce,Ge),de.copy(Q))},reset:function(){P=!1,Z=null,de.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,Z=null,de=null,le=null;return{setReversed:function(he){if(Q!==he){const Ce=e.get("EXT_clip_control");he?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Q=he;const Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return Q},setTest:function(he){he?ne(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(he){Z!==he&&!P&&(s.depthMask(he),Z=he)},setFunc:function(he){if(Q&&(he=Qh[he]),de!==he){switch(he){case dr:s.depthFunc(s.NEVER);break;case fr:s.depthFunc(s.ALWAYS);break;case pr:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case mr:s.depthFunc(s.EQUAL);break;case gr:s.depthFunc(s.GEQUAL);break;case xr:s.depthFunc(s.GREATER);break;case _r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=he}},setLocked:function(he){P=he},setClear:function(he){le!==he&&(le=he,Q&&(he=1-he),s.clearDepth(he))},reset:function(){P=!1,Z=null,de=null,le=null,Q=!1}}}function i(){let P=!1,Q=null,Z=null,de=null,le=null,he=null,Ce=null,Ge=null,oe=null;return{setTest:function(Pe){P||(Pe?ne(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Pe){Q!==Pe&&!P&&(s.stencilMask(Pe),Q=Pe)},setFunc:function(Pe,Be,_e){(Z!==Pe||de!==Be||le!==_e)&&(s.stencilFunc(Pe,Be,_e),Z=Pe,de=Be,le=_e)},setOp:function(Pe,Be,_e){(he!==Pe||Ce!==Be||Ge!==_e)&&(s.stencilOp(Pe,Be,_e),he=Pe,Ce=Be,Ge=_e)},setLocked:function(Pe){P=Pe},setClear:function(Pe){oe!==Pe&&(s.clearStencil(Pe),oe=Pe)},reset:function(){P=!1,Q=null,Z=null,de=null,le=null,he=null,Ce=null,Ge=null,oe=null}}}const a=new t,r=new n,o=new i;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,E=null,S=null,T=null,w=null,x=null,b=new Ee(0,0,0),N=0,C=!1,I=null,U=null,W=null,L=null,V=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ie=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=ie>=2);let ee=null,F={};const te=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),z=new mt().fromArray(te),X=new mt().fromArray(se);function re(P,Q,Z,de){const le=new Uint8Array(4),he=s.createTexture();s.bindTexture(P,he),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Z;Ce++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(Q+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return he}const ge={};ge[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),r.setFunc(us),Wt(!1),dt(Ho),ne(s.CULL_FACE),yt(Oi);function ne(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Se(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function ke(P,Q){return u[P]!==Q?(s.bindFramebuffer(P,Q),u[P]=Q,P===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),P===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function ye(P,Q){let Z=g,de=!1;if(P){Z=d.get(Q),Z===void 0&&(Z=[],d.set(Q,Z));const le=P.textures;if(Z.length!==le.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ce=le.length;he<Ce;he++)Z[he]=s.COLOR_ATTACHMENT0+he;Z.length=le.length,de=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,de=!0);de&&s.drawBuffers(Z)}function Ie(P){return _!==P?(s.useProgram(P),_=P,!0):!1}const tt={[Ui]:s.FUNC_ADD,[Mh]:s.FUNC_SUBTRACT,[Sh]:s.FUNC_REVERSE_SUBTRACT};tt[yh]=s.MIN,tt[bh]=s.MAX;const Ve={[Eh]:s.ZERO,[wh]:s.ONE,[Th]:s.SRC_COLOR,[rc]:s.SRC_ALPHA,[Ih]:s.SRC_ALPHA_SATURATE,[Ph]:s.DST_COLOR,[Rh]:s.DST_ALPHA,[Ah]:s.ONE_MINUS_SRC_COLOR,[oc]:s.ONE_MINUS_SRC_ALPHA,[Lh]:s.ONE_MINUS_DST_COLOR,[Ch]:s.ONE_MINUS_DST_ALPHA,[Dh]:s.CONSTANT_COLOR,[Nh]:s.ONE_MINUS_CONSTANT_COLOR,[Uh]:s.CONSTANT_ALPHA,[Fh]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(P,Q,Z,de,le,he,Ce,Ge,oe,Pe){if(P===Oi){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(ne(s.BLEND),p=!0),P!==vh){if(P!==m||Pe!==C){if((v!==Ui||T!==Ui)&&(s.blendEquation(s.FUNC_ADD),v=Ui,T=Ui),Pe)switch(P){case zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFunc(s.ONE,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:je("WebGLState: Invalid blending: ",P);break}else switch(P){case zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vo:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",P);break}E=null,S=null,w=null,x=null,b.set(0,0,0),N=0,m=P,C=Pe}return}le=le||Q,he=he||Z,Ce=Ce||de,(Q!==v||le!==T)&&(s.blendEquationSeparate(tt[Q],tt[le]),v=Q,T=le),(Z!==E||de!==S||he!==w||Ce!==x)&&(s.blendFuncSeparate(Ve[Z],Ve[de],Ve[he],Ve[Ce]),E=Z,S=de,w=he,x=Ce),(Ge.equals(b)===!1||oe!==N)&&(s.blendColor(Ge.r,Ge.g,Ge.b,oe),b.copy(Ge),N=oe),m=P,C=!1}function ut(P,Q){P.side===kt?Se(s.CULL_FACE):ne(s.CULL_FACE);let Z=P.side===Vt;Q&&(Z=!Z),Wt(Z),P.blending===zi&&P.transparent===!1?yt(Oi):yt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(P){I!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),I=P)}function dt(P){P!==gh?(ne(s.CULL_FACE),P!==U&&(P===Ho?s.cullFace(s.BACK):P===xh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),U=P}function _n(P){P!==W&&(k&&s.lineWidth(P),W=P)}function At(P,Q,Z){P?(ne(s.POLYGON_OFFSET_FILL),(L!==Q||V!==Z)&&(L=Q,V=Z,r.getReversed()&&(Q=-Q,Z=-Z),s.polygonOffset(Q,Z))):Se(s.POLYGON_OFFSET_FILL)}function Qt(P){P?ne(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function jt(P){P===void 0&&(P=s.TEXTURE0+$-1),ee!==P&&(s.activeTexture(P),ee=P)}function en(P,Q,Z){Z===void 0&&(ee===null?Z=s.TEXTURE0+$-1:Z=ee);let de=F[Z];de===void 0&&(de={type:void 0,texture:void 0},F[Z]=de),(de.type!==P||de.texture!==Q)&&(ee!==Z&&(s.activeTexture(Z),ee=Z),s.bindTexture(P,Q||ge[P]),de.type=P,de.texture=Q)}function O(){const P=F[ee];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function tn(){try{s.compressedTexImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function lt(){try{s.compressedTexImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function ct(){try{s.texSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function xe(){try{s.texSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function bt(){try{s.compressedTexSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function Le(){try{s.compressedTexSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function Ue(){try{s.texStorage2D(...arguments)}catch(P){je("WebGLState:",P)}}function A(){try{s.texStorage3D(...arguments)}catch(P){je("WebGLState:",P)}}function M(){try{s.texImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function G(){try{s.texImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function ae(P){return f[P]!==void 0?f[P]:s.getParameter(P)}function j(P,Q){f[P]!==Q&&(s.pixelStorei(P,Q),f[P]=Q)}function ce(P){z.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),z.copy(P))}function pe(P){X.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function K(P,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let de=Z.get(P);de===void 0&&(de=s.getUniformBlockIndex(Q,P.name),s.uniformBlockBinding(Q,de,de),Z.set(P,de))}function J(P,Q,Z){const le=c.get(Q).get(P);l[le]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,Z),l[le]=Z)}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,F={},u={},l={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,E=null,S=null,T=null,w=null,x=null,b=new Ee(0,0,0),N=0,C=!1,I=null,U=null,W=null,L=null,V=null,z.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ne,disable:Se,bindFramebuffer:ke,drawBuffers:ye,useProgram:Ie,setBlending:yt,setMaterial:ut,setFlipSided:Wt,setCullFace:dt,setLineWidth:_n,setPolygonOffset:At,setScissorTest:Qt,activeTexture:jt,bindTexture:en,unbindTexture:O,compressedTexImage2D:tn,compressedTexImage3D:lt,texImage2D:M,texImage3D:G,pixelStorei:j,getParameter:ae,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ue,texStorage3D:A,texSubImage2D:ct,texSubImage3D:xe,compressedTexSubImage2D:bt,compressedTexSubImage3D:Le,scissor:ce,viewport:pe,reset:ue}}function U0(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap,f=new Set;let u;const d=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return p?new OffscreenCanvas(A,M):pa("canvas")}function v(A,M,G){let ae=1;const j=Ue(A);if((j.width>G||j.height>G)&&(ae=G/Math.max(j.width,j.height)),ae<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ce=Math.floor(ae*j.width),pe=Math.floor(ae*j.height);u===void 0&&(u=m(ce,pe));const K=M?m(ce,pe):u;return K.width=ce,K.height=pe,K.getContext("2d").drawImage(A,0,0,ce,pe),De("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+pe+")."),K}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function E(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,M,G,ae,j,ce=!1){if(A!==null){if(s[A]!==void 0)return s[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;ae&&(pe=e.get("EXT_texture_norm16"),pe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8),G===s.UNSIGNED_SHORT&&pe&&(K=pe.R16_EXT),G===s.SHORT&&pe&&(K=pe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),M===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8),G===s.UNSIGNED_SHORT&&pe&&(K=pe.RG16_EXT),G===s.SHORT&&pe&&(K=pe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_SHORT&&pe&&(K=pe.RGB16_EXT),G===s.SHORT&&pe&&(K=pe.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),M===s.RGBA){const J=ce?fa:$e.getTransfer(j);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=J===it?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&pe&&(K=pe.RGBA16_EXT),G===s.SHORT&&pe&&(K=pe.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,M){let G;return A?M===null||M===wn||M===Vi?G=s.DEPTH24_STENCIL8:M===mn?G=s.DEPTH32F_STENCIL8:M===fs&&(G=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wn||M===Vi?G=s.DEPTH_COMPONENT24:M===mn?G=s.DEPTH_COMPONENT32F:M===fs&&(G=s.DEPTH_COMPONENT16),G}function b(A,M){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function N(A){const M=new WeakRef(A);n.get(A).__ref=M,g.add(M),_.register(A,M,M)}function C(A){const M=n.get(A).__ref;M!==void 0&&(g.delete(M),_.unregister(M))}function I(A){W(A.target)}function U(A){L(A.target)}function W(A){A.removeEventListener("dispose",I),C(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",U),C(A),ie(A)}function V(){for(const A of g){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):W(M))}g.clear(),f.clear()}function $(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,ae=d.get(G);if(ae){const j=ae[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(A),Object.keys(ae).length===0&&d.delete(G)}n.remove(A)}function k(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const G=A.source,ae=d.get(G);delete ae[M.__cacheKey],r.memory.textures--}function ie(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&W(G),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ce=0;ce<M.__webglFramebuffer[j].length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[j][ce]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ae=A.textures;for(let j=0,ce=ae.length;j<ce;j++){const pe=n.get(ae[j]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),r.memory.textures--),n.remove(ae[j])}n.remove(A)}let Y=0;function ee(){Y=0}function F(){return Y}function te(A){Y=A}function se(){const A=Y;return A>=i.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),Y+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const G=n.get(A);if(A.isVideoTexture&&bt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ae=A.image;if(ae===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function re(A,M){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ut(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function ge(A,M){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ut(G,A,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function ne(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Wt(G,A,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const Se={[ca]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},ke={[Nt]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[La]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ye={[Vh]:s.NEVER,[Ec]:s.ALWAYS,[Wh]:s.LESS,[yc]:s.LEQUAL,[Xh]:s.EQUAL,[bc]:s.GEQUAL,[qh]:s.GREATER,[Yh]:s.NOTEQUAL};function Ie(A,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===La||M.magFilter===bs||M.magFilter===Kn||M.minFilter===qt||M.minFilter===La||M.minFilter===bs||M.minFilter===Kn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Se[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Se[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Se[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ke[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ke[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nt||M.minFilter!==bs&&M.minFilter!==Kn||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I),N(M));const ae=M.source;let j=d.get(ae);j===void 0&&(j={},d.set(ae,j));const ce=z(M);if(ce!==A.__cacheKey){j[ce]===void 0&&(j[ce]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,G=!0),j[ce].usedTimes++;const pe=j[A.__cacheKey];pe!==void 0&&(j[A.__cacheKey].usedTimes--,pe.usedTimes===0&&k(M)),A.__cacheKey=ce,A.__webglTexture=j[ce].texture}return G}function Ve(A,M,G){return Math.floor(Math.floor(A/G)/M)}function yt(A,M,G,ae){const ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,ae,M.data);else{ce.sort((P,Q)=>P.start-Q.start);let pe=0;for(let P=1;P<ce.length;P++){const Q=ce[pe],Z=ce[P],de=Q.start+Q.count,le=Ve(Z.start,M.width,4),he=Ve(Q.start,M.width,4);Z.start<=de+1&&le===he&&Ve(Z.start+Z.count-1,M.width,4)===le?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++pe,ce[pe]=Z)}ce.length=pe+1;const K=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let P=0,Q=ce.length;P<Q;P++){const Z=ce[P],de=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),he=de%M.width,Ce=Math.floor(de/M.width),Ge=le,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(s.TEXTURE_2D,0,he,Ce,Ge,oe,G,ae,M.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,ue)}}function ut(A,M,G){let ae=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=s.TEXTURE_3D);const j=tt(A,M),ce=M.source;t.bindTexture(ae,A.__webglTexture,s.TEXTURE0+G);const pe=n.get(ce);if(ce.version!==pe.__version||j===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const oe=$e.getPrimaries($e.workingColorSpace),Pe=M.colorSpace===$n?null:$e.getPrimaries(M.colorSpace),Be=M.colorSpace===$n||oe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,i.maxTextureSize);J=Le(M,J);const ue=a.convert(M.format,M.colorSpace),P=a.convert(M.type);let Q=w(M.internalFormat,ue,P,M.normalized,M.colorSpace,M.isVideoTexture);Ie(ae,M);let Z;const de=M.mipmaps,le=M.isVideoTexture!==!0,he=pe.__version===void 0||j===!0,Ce=ce.dataReady,Ge=b(M,J);if(M.isDepthTexture)Q=x(M.format===Jn,M.type),he&&(le?t.texStorage2D(s.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Q,J.width,J.height,0,ue,P,null));else if(M.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(s.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let oe=0,Pe=de.length;oe<Pe;oe++)Z=de[oe],le?Ce&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Z.width,Z.height,ue,P,Z.data):t.texImage2D(s.TEXTURE_2D,oe,Q,Z.width,Z.height,0,ue,P,Z.data);M.generateMipmaps=!1}else le?(he&&t.texStorage2D(s.TEXTURE_2D,Ge,Q,J.width,J.height),Ce&&yt(M,J,ue,P)):t.texImage2D(s.TEXTURE_2D,0,Q,J.width,J.height,0,ue,P,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Q,de[0].width,de[0].height,J.depth);for(let oe=0,Pe=de.length;oe<Pe;oe++)if(Z=de[oe],M.format!==bn)if(ue!==null)if(le){if(Ce)if(M.layerUpdates.size>0){const Be=Al(Z.width,Z.height,M.format,M.type);for(const _e of M.layerUpdates){const nt=Z.data.subarray(_e*Be/Z.data.BYTES_PER_ELEMENT,(_e+1)*Be/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,_e,Z.width,Z.height,1,ue,nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,J.depth,ue,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Q,Z.width,Z.height,J.depth,0,Z.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,J.depth,ue,P,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Q,Z.width,Z.height,J.depth,0,ue,P,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&he&&t.texStorage2D(s.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let oe=0,Pe=de.length;oe<Pe;oe++)Z=de[oe],M.format!==bn?ue!==null?le?Ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Z.width,Z.height,ue,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Q,Z.width,Z.height,0,Z.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ce&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Z.width,Z.height,ue,P,Z.data):t.texImage2D(s.TEXTURE_2D,oe,Q,Z.width,Z.height,0,ue,P,Z.data)}else if(M.isDataArrayTexture)if(le){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Q,J.width,J.height,J.depth),Ce)if(M.layerUpdates.size>0){const oe=Al(J.width,J.height,M.format,M.type);for(const Pe of M.layerUpdates){const Be=J.data.subarray(Pe*oe/J.data.BYTES_PER_ELEMENT,(Pe+1)*oe/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,J.width,J.height,1,ue,P,Be)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,P,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ue,P,J.data);else if(M.isData3DTexture)le?(he&&t.texStorage3D(s.TEXTURE_3D,Ge,Q,J.width,J.height,J.depth),Ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,P,J.data)):t.texImage3D(s.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ue,P,J.data);else if(M.isFramebufferTexture){if(he)if(le)t.texStorage2D(s.TEXTURE_2D,Ge,Q,J.width,J.height);else{let oe=J.width,Pe=J.height;for(let Be=0;Be<Ge;Be++)t.texImage2D(s.TEXTURE_2D,Be,Q,oe,Pe,0,ue,P,null),oe>>=1,Pe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),J.parentNode!==oe){oe.appendChild(J),f.add(M),oe.onpaint=Pe=>{const Be=Pe.changedElements;for(const _e of f)Be.includes(_e.image)&&(_e.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const Be=s.RGBA,_e=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,_e,nt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){const oe=Ue(de[0]);t.texStorage2D(s.TEXTURE_2D,Ge,Q,oe.width,oe.height)}for(let oe=0,Pe=de.length;oe<Pe;oe++)Z=de[oe],le?Ce&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ue,P,Z):t.texImage2D(s.TEXTURE_2D,oe,Q,ue,P,Z);M.generateMipmaps=!1}else if(le){if(he){const oe=Ue(J);t.texStorage2D(s.TEXTURE_2D,Ge,Q,oe.width,oe.height)}Ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,P,J)}else t.texImage2D(s.TEXTURE_2D,0,Q,ue,P,J);E(M)&&M.mipmapsAutoUpdate===!0&&S(ae),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Wt(A,M,G){if(M.image.length!==6)return;const ae=tt(A,M),j=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const ce=n.get(j);if(j.version!==ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+G);const pe=$e.getPrimaries($e.workingColorSpace),K=M.colorSpace===$n?null:$e.getPrimaries(M.colorSpace),J=M.colorSpace===$n||pe===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ue&&!P?Q[_e]=v(M.image[_e],!0,i.maxCubemapSize):Q[_e]=P?M.image[_e].image:M.image[_e],Q[_e]=Le(M,Q[_e]);const Z=Q[0],de=a.convert(M.format,M.colorSpace),le=a.convert(M.type);let he=w(M.internalFormat,de,le,M.normalized,M.colorSpace);const Ce=M.isVideoTexture!==!0,Ge=ce.__version===void 0||ae===!0,oe=j.dataReady;let Pe=b(M,Z);Ie(s.TEXTURE_CUBE_MAP,M);let Be;if(M.isDepthTexture){if(he=x(M.format===Jn,M.type),Ge)if(Ce)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let _e=0;_e<6;_e++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,Z.width,Z.height,0,de,le,null)}else if(ue){Ce&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,he,Z.width,Z.height);for(let _e=0;_e<6;_e++){Be=Q[_e].mipmaps;for(let nt=0;nt<Be.length;nt++){const Rt=Be[nt];M.format!==bn?de!==null?Ce?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,Rt.width,Rt.height,de,Rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,he,Rt.width,Rt.height,0,Rt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,Rt.width,Rt.height,de,le,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,he,Rt.width,Rt.height,0,de,le,Rt.data)}}}else{if(Be=M.mipmaps,Ce&&Ge){Be.length>0&&Pe++;const _e=Ue(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,he,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(P){Ce?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,de,le,Q[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,Q[_e].width,Q[_e].height,0,de,le,Q[_e].data);for(let nt=0;nt<Be.length;nt++){const Bn=Be[nt].image[_e].image;Ce?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,Bn.width,Bn.height,de,le,Bn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,he,Bn.width,Bn.height,0,de,le,Bn.data)}}else{Ce?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,le,Q[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,de,le,Q[_e]);for(let nt=0;nt<Be.length;nt++){const Rt=Be[nt];Ce?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,de,le,Rt.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,he,de,le,Rt.image[_e])}}}E(M)&&M.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),ce.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function dt(A,M,G,ae,j,ce){const pe=a.convert(G.format,G.colorSpace),K=a.convert(G.type),J=w(G.internalFormat,pe,K,G.normalized,G.colorSpace),ue=n.get(M),P=n.get(G);if(P.__renderTarget=M,!ue.__hasExternalTextures){const Q=Math.max(1,M.width>>ce),Z=Math.max(1,M.height>>ce);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,J,Q,Z,M.depth,0,pe,K,null):t.texImage2D(j,ce,J,Q,Z,0,pe,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),xe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,j,P.__webglTexture,0,ct(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,j,P.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _n(A,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const ae=M.depthTexture,j=ae&&ae.isDepthTexture?ae.type:null,ce=x(M.stencilBuffer,j),pe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(M),ce,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(M),ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,A)}else{const ae=M.textures;for(let j=0;j<ae.length;j++){const ce=ae[j],pe=a.convert(ce.format,ce.colorSpace),K=a.convert(ce.type),J=w(ce.internalFormat,pe,K,ce.normalized,ce.colorSpace);xe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(M),J,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(M),J,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(A,M,G){const ae=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(M.depthTexture);j.__renderTarget=M;const ce=ae?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),ae?ne(M.depthTexture,0):X(M.depthTexture,0);const pe=j.__webglTexture,K=ct(M),J=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ue=M.depthTexture.format===Jn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Qn)xe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,J,pe,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ue,J,pe,0);else if(M.depthTexture.format===Jn)xe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,J,pe,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ue,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const ae=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",j)};ae.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=ae}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)At(M.__webglFramebuffer[ae],A,ae);else A.texture.mipmaps.length>0?At(M.__webglFramebuffer[0],A,0):At(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=s.createRenderbuffer(),_n(M.__webglDepthbuffer[ae],A,!1);else{const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),_n(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(A,M,G){const ae=n.get(A);M!==void 0&&dt(ae.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Qt(A)}function en(A){const M=A.texture,G=n.get(A),ae=n.get(M);A.addEventListener("dispose",U),N(A);const j=A.textures,ce=A.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=M.version,r.memory.textures++),ce){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[K][J]=s.createFramebuffer()}else G.__webglFramebuffer[K]=s.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)G.__webglFramebuffer[K]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(pe)for(let K=0,J=j.length;K<J;K++){const ue=n.get(j[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&xe(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){const J=j[K];G.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const ue=a.convert(J.format,J.colorSpace),P=a.convert(J.type),Q=w(J.internalFormat,ue,P,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),Z=ct(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,G.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),_n(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)dt(G.__webglFramebuffer[K][J],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else dt(G.__webglFramebuffer[K],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(M)?S(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let K=0,J=j.length;K<J;K++){const ue=j[K],P=n.get(ue);let Q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),Ie(Q,ue),dt(G.__webglFramebuffer,A,ue,s.COLOR_ATTACHMENT0+K,Q,0),E(ue)&&S(Q)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,ae.__webglTexture),Ie(K,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)dt(G.__webglFramebuffer[J],A,M,s.COLOR_ATTACHMENT0,K,J);else dt(G.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,K,0);E(M)?S(K):M.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Qt(A)}function O(A){const M=A.textures;for(let G=0,ae=M.length;G<ae;G++){const j=M[G];if(E(j)&&j.mipmapsAutoUpdate===!0){const ce=T(A),pe=n.get(j).__webglTexture;t.bindTexture(ce,pe),S(ce),t.unbindTexture()}}}const tn=[];function lt(A){if(A.samples>0){if(xe(A)===!1){const M=A.textures,G=A.width,ae=A.height;let j=s.COLOR_BUFFER_BIT;const ce=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=n.get(A),K=M.length>1;if(K)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const P=n.get(M[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,G,ae,0,0,G,ae,j,s.NEAREST),l===!0&&(tn.length=0,tn.push(s.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&tn.push(ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const P=n.get(M[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,P,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ct(A){return Math.min(i.maxSamples,A.samples)}function xe(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Le(A,M){const G=A.colorSpace,ae=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==da&&G!==$n&&($e.getTransfer(G)===it?(ae!==bn||j!==Jt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",G)),M}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=ee,this.getTextureUnits=F,this.setTextureUnits=te,this.setTexture2D=X,this.setTexture2DArray=re,this.setTexture3D=ge,this.setTextureCube=ne,this.rebindTextures=jt,this.setupRenderTarget=en,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=xe,this.dispose=V}function F0(s,e){function t(n,i=$n){let a;const r=$e.getTransfer(i);if(n===Jt)return s.UNSIGNED_BYTE;if(n===oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===gc)return s.BYTE;if(n===xc)return s.SHORT;if(n===fs)return s.UNSIGNED_SHORT;if(n===ro)return s.INT;if(n===wn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Tn)return s.HALF_FLOAT;if(n===Mc)return s.ALPHA;if(n===Sc)return s.RGB;if(n===bn)return s.RGBA;if(n===Qn)return s.DEPTH_COMPONENT;if(n===Jn)return s.DEPTH_STENCIL;if(n===co)return s.RED;if(n===ho)return s.RED_INTEGER;if(n===pi)return s.RG;if(n===uo)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===sa)if(r===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mr||n===Sr||n===yr||n===br)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Mr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===br)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Er||n===wr||n===Tr||n===Ar||n===Rr||n===ha||n===Cr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Er||n===wr)return r===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Tr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ar)return a.COMPRESSED_R11_EAC;if(n===Rr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return a.COMPRESSED_RG11_EAC;if(n===Cr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pr||n===Lr||n===Ir||n===Dr||n===Nr||n===Ur||n===Fr||n===Or||n===zr||n===kr||n===Br||n===Gr||n===Hr||n===Vr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Pr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ir)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Or)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Xr||n===qr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Wr)return r===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yr||n===Zr||n===ua||n===$r)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Yr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:O0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends gi{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new k0,m={},v=t.getContextAttributes();let E=null,S=null;const T=[],w=[],x=new Re;let b=null,N=null;const C=new sn;C.viewport=new mt;const I=new sn;I.viewport=new mt;const U=[C,I],W=new Ku;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=T[z];return X===void 0&&(X=new Ba,T[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=T[z];return X===void 0&&(X=new Ba,T[z]=X),X.getGripSpace()},this.getHand=function(z){let X=T[z];return X===void 0&&(X=new Ba,T[z]=X),X.getHandSpace()};function $(z){const X=w.indexOf(z.inputSource);if(X===-1)return;const re=T[X];re!==void 0&&(re.update(z.inputSource,z.frame,c||r),re.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",ie);for(let z=0;z<T.length;z++){const X=w[z];X!==null&&(w[z]=null,T[z].disconnect(X))}L=null,V=null,p.reset();for(const z in m)delete m[z];if(e.setRenderTarget(E),d=null,u=null,f=null,i=null,S=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),N!==null){const z=N.camera;z.fov=N.fov,z.zoom=N.zoom,z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",k),i.addEventListener("inputsourceschange",ie),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ge=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?Jn:Qn,ge=v.stencil?Vi:wn);const Se={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Se),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new En(u.textureWidth,u.textureHeight,{format:bn,type:Jt,depthTexture:new Wi(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new En(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(z){for(let X=0;X<z.removed.length;X++){const re=z.removed[X],ge=w.indexOf(re);ge>=0&&(w[ge]=null,T[ge].disconnect(re))}for(let X=0;X<z.added.length;X++){const re=z.added[X];let ge=w.indexOf(re);if(ge===-1){for(let Se=0;Se<T.length;Se++)if(Se>=w.length){w.push(re),ge=Se;break}else if(w[Se]===null){w[Se]=re,ge=Se;break}if(ge===-1)break}const ne=T[ge];ne&&ne.connect(re)}}function Y(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let X=z.near,re=z.far;p.texture!==null&&(p.depthNear>0&&(X=p.depthNear),p.depthFar>0&&(re=p.depthFar)),W.near=I.near=C.near=X,W.far=I.far=C.far=re,(L!==W.near||V!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,V=W.far),W.layers.mask=z.layers.mask|6,C.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const ge=z.parent,ne=W.cameras;Y(W,ge);for(let Se=0;Se<ne.length;Se++)Y(ne[Se],ge);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&z.isPerspectiveCamera&&(N={camera:z,fov:z.fov,zoom:z.zoom}),ee(z,W,ge)};function ee(z,X,re){re===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(re.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Jr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(z){return m[z]};let F=null;function te(z,X){if(h=X.getViewerPose(c||r),g=X,h!==null){const re=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ge=!1;re.length!==W.cameras.length&&(W.cameras.length=0,ge=!0);for(let ye=0;ye<re.length;ye++){const Ie=re[ye];let tt=null;if(d!==null)tt=d.getViewport(Ie);else{const yt=f.getViewSubImage(u,Ie);tt=yt.viewport,ye===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Ve=U[ye];Ve===void 0&&(Ve=new sn,Ve.layers.enable(ye),Ve.viewport=new mt,U[ye]=Ve),Ve.matrix.fromArray(Ie.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ie.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),ye===0&&(W.matrix.copy(Ve.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ge===!0&&W.cameras.push(Ve)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const ye=f.getDepthInformation(re[0]);ye&&ye.isValid&&ye.texture&&p.init(ye,i.renderState)}if(ne&&ne.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let ye=0;ye<re.length;ye++){const Ie=re[ye].camera;if(Ie){let tt=m[Ie];tt||(tt=new Fc,m[Ie]=tt);const Ve=f.getCameraImage(Ie);tt.sourceTexture=Ve}}}}for(let re=0;re<T.length;re++){const ge=w[re],ne=T[re];ge!==null&&ne!==void 0&&ne.update(ge,X,c||r)}F&&F(z,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const se=new Wc;se.setAnimationLoop(te),this.setAnimationLoop=function(z){F=z},this.dispose=function(){}}}const G0=new et,eh=new Fe;eh.set(-1,0,0,0,1,0,0,0,1);function H0(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),f(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),_(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),E=v.envMap,S=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(eh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V0(s,e,t,n){let i={},a={};function r(v,E){const S=E.program;n.uniformBlockBinding(v,S,i[v.id])}function o(v,E){let S=i[v.id];S===void 0&&(g(v),S=l(v),i[v.id]=S,v.addEventListener("dispose",p));const T=E.program;n.updateUBOMapping(v,T);const w=e.render.frame;a[v.id]!==w&&(c(v),a[v.id]=w)}function l(v){const E=s.createBuffer(),S=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(v){const E=i[v.id],S=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,x=S.length;w<x;w++){const b=S[w];if(Array.isArray(b))for(let N=0,C=b.length;N<C;N++)h(b[N],w,N,T);else h(b,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,E,S,T){if(u(v,E,S,T)===!0){const w=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let N=0;N<x.length;N++){const C=x[N],I=_(C,!0);f(C,v.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function f(v,E,S){typeof v=="number"||typeof v=="boolean"?E[S]=v:v.isMatrix3?(E[S]=v.elements[0],E[S+1]=v.elements[1],E[S+2]=v.elements[2],E[S+3]=0,E[S+4]=v.elements[3],E[S+5]=v.elements[4],E[S+6]=v.elements[5],E[S+7]=0,E[S+8]=v.elements[6],E[S+9]=v.elements[7],E[S+10]=v.elements[8],E[S+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-S),S):v.toArray(E,S)}function u(v,E,S,T){const w=v.value,x=E+"_"+S;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);const b=T[x];let N=!1;for(let C=0;C<w.length;C++)d(w[C],b,C)===!0&&(N=!0);return N}return d(w,T,x)}function d(v,E,S){if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{const T=E[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){const E=v.uniforms;let S=0;const T=16;for(let x=0,b=E.length;x<b;x++){const N=Array.isArray(E[x])?E[x]:[E[x]];for(let C=0,I=N.length;C<I;C++){const U=N[C],W=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(E[x])||Array.isArray(U.value);let V=S;for(let k=0,ie=W.length;k<ie;k++){const Y=W[k],ee=_(Y,L),F=S%T,te=F%ee.boundary,se=F+te;S+=te,se!==0&&T-se<ee.storage&&(S+=T-se),k===0&&(V=S),S+=ee.storage}const $=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new $((S-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}const w=S%T;return w>0&&(S+=T-w),v.__size=S,v.__cache={},this}function _(v,E){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){const E=v.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);i={},a={}}return{bind:r,update:o,dispose:m}}const W0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function X0(){return Mn===null&&(Mn=new Ic(W0,16,16,pi,Tn),Mn.name="DFG_LUT",Mn.minFilter=qt,Mn.magFilter=qt,Mn.wrapS=Nn,Mn.wrapT=Nn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class th{constructor(e={}){const{canvas:t=Kh(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=d,p=new Set([fo,uo,ho]),m=new Set([Jt,wn,fs,Vi,oo,lo]),v=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const x=[],b=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,U=null,W=null,L=null,V=null;this._outputColorSpace=It;let $=0,k=0,ie=null,Y=-1,ee=null;const F=new mt,te=new mt;let se=null;const z=new Ee(0);let X=0,re=t.width,ge=t.height,ne=1,Se=null,ke=null;const ye=new mt(0,0,re,ge),Ie=new mt(0,0,re,ge);let tt=!1;const Ve=new ms,yt=new _o;let ut=!1,Wt=!1;const dt=new et,_n=new R,At=new mt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function en(){return ie===null?ne:1}let O=n;function tn(y,D){return t.getContext(y,D)}let lt,ct,xe,bt,Le,Ue,A,M,G,ae,j,ce,pe,K,J,ue,P,Q,Z,de,le,he,Ce;try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${so}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){const D="webgl2";if(O=tn(D,y),O===null)throw tn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(y){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),je("WebGLRenderer: "+y.message),y}function Ge(){lt=new $p(O),lt.init(),le=new F0(O,lt),ct=new zp(O,lt,e,le),xe=new N0(O,lt),ct.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),W=O.createFramebuffer(),L=O.createFramebuffer(),V=O.createFramebuffer(),bt=new Qp(O),Le=new M0,Ue=new U0(O,lt,xe,Le,ct,le,bt),A=new Zp(C),M=new ju(O),he=new Fp(O,M),G=new Kp(O,M,bt,he),ae=new em(O,G,M,he,bt),Q=new jp(O,ct,Ue),J=new kp(Le),j=new v0(C,A,lt,ct,he,J),ce=new H0(C,Le),pe=new y0,K=new R0(lt),P=new Up(C,A,xe,ae,g,l),ue=new D0(C,ae,ct),Ce=new V0(O,bt,ct,xe),Z=new Op(O,lt,bt),de=new Jp(O,lt,bt),bt.programs=j.programs,C.capabilities=ct,C.extensions=lt,C.properties=Le,C.renderLists=pe,C.shadowMap=ue,C.state=xe,C.info=bt}_!==Jt&&(N=new nm(_,t.width,t.height,o,i,a));const oe=new B0(C,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(re,ge,!1))},this.getSize=function(y){return y.set(re,ge)},this.setSize=function(y,D,q=!0){if(oe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}re=y,ge=D,t.width=Math.floor(y*ne),t.height=Math.floor(D*ne),q===!0&&(t.style.width=y+"px",t.style.height=D+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(re*ne,ge*ne).floor()},this.setDrawingBufferSize=function(y,D,q){re=y,ge=D,ne=q,t.width=Math.floor(y*q),t.height=Math.floor(D*q),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(_===Jt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(F)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,D,q,B){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,D,q,B),xe.viewport(F.copy(ye).multiplyScalar(en()).round())},this.getScissor=function(y){return y.copy(Ie)},this.setScissor=function(y,D,q,B){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,D,q,B),xe.scissor(te.copy(Ie).multiplyScalar(en()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){xe.setScissorTest(tt=y)},this.setOpaqueSort=function(y){Se=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,q=!0){let B=0;if(y){let H=!1;if(ie!==null){const me=ie.texture.format;H=p.has(me)}if(H){const me=ie.texture.type,be=m.has(me),fe=P.getClearColor(),Me=P.getClearAlpha(),Ae=fe.r,Oe=fe.g,Ye=fe.b;be?(v[0]=Ae,v[1]=Oe,v[2]=Ye,v[3]=Me,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Ae,E[1]=Oe,E[2]=Ye,E[3]=Me,O.clearBufferiv(O.COLOR,0,E))}else B|=O.COLOR_BUFFER_BIT}D&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),P.dispose(),pe.dispose(),K.dispose(),Ue.dispose(),Le.dispose(),A.dispose(),ae.dispose(),G.dispose(),he.dispose(),Ce.dispose(),j.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Io),oe.removeEventListener("sessionend",Do),ti.stop()};function Pe(y){y.preventDefault(),Zo("WebGLRenderer: Context Lost."),I=!0}function Be(){Zo("WebGLRenderer: Context Restored."),I=!1;const y=bt.autoReset,D=ue.enabled,q=ue.autoUpdate,B=ue.needsUpdate,H=ue.type;Ge(),bt.autoReset=y,ue.enabled=D,ue.autoUpdate=q,ue.needsUpdate=B,ue.type=H}function _e(y){je("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function nt(y){const D=y.target;D.removeEventListener("dispose",nt),Rt(D)}function Rt(y){Bn(y),Le.remove(y)}function Bn(y){const D=Le.get(y).programs;D!==void 0&&(D.forEach(function(q){j.releaseProgram(q)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,q,B,H,me){D===null&&(D=Qt);const be=H.isMesh&&H.matrixWorld.determinantAffine()<0,fe=fh(y,D,q,B,H);xe.setMaterial(B,be);let Me=q.index,Ae=1;if(B.wireframe===!0){if(Me=G.getWireframeAttribute(q),Me===void 0)return;Ae=2}const Oe=q.drawRange,Ye=q.attributes.position;let we=Oe.start*Ae,Ze=(Oe.start+Oe.count)*Ae;me!==null&&(we=Math.max(we,me.start*Ae),Ze=Math.min(Ze,(me.start+me.count)*Ae)),Me!==null?(we=Math.max(we,0),Ze=Math.min(Ze,Me.count)):Ye!=null&&(we=Math.max(we,0),Ze=Math.min(Ze,Ye.count));const vt=Ze-we;if(vt<0||vt===1/0)return;he.setup(H,B,fe,q,Me);let rt,at=Z;if(Me!==null&&(rt=M.get(Me),at=de,at.setIndex(rt)),H.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*en()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(H.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),xe.setLineWidth(Ut*en()),H.isLineSegments?at.setMode(O.LINES):H.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else H.isPoints?at.setMode(O.POINTS):H.isSprite&&at.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Te=H._multiDrawCounts,Gt=H._multiDrawCount,Qe=Me?M.get(Me).bytesPerElement:1,ni=Le.get(B).currentProgram.getUniforms();for(let Ft=0;Ft<Gt;Ft++)ni.setValue(O,"_gl_DrawID",Ft),at.render(Ut[Ft]/Qe,Te[Ft])}else if(H.isInstancedMesh)at.renderInstances(we,vt,H.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,Ut);at.renderInstances(we,vt,Te)}else at.render(we,vt)};function Lo(y,D,q,B){U!==null&&y.isNodeMaterial&&U.setObject(B,y),ut===!0&&J.setState(y,q,!1),y.transparent===!0&&y.side===kt&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,Zi(y,D,B),y.side=fi,y.needsUpdate=!0,Zi(y,D,B),y.side=kt):Zi(y,D,B)}this.compile=function(y,D,q=null){q===null&&(q=y),U!==null&&U.renderStart(y,D,q),w=K.get(q),w.init(D),b.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),y!==q&&y.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Wt=this.localClippingEnabled,ut=J.init(this.clippingPlanes,Wt),ut===!0&&J.setGlobalState(this.clippingPlanes,D),U!==null&&ue.render(w.state.shadowsArray,q,D);const B=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const fe=me[be];Lo(fe,q,D,H),B.add(fe)}else Lo(me,q,D,H),B.add(me)}),w=b.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(y,D,q=null){const B=this.compile(y,D,q);return new Promise(H=>{function me(){if(B.forEach(function(be){const Me=Le.get(be).currentProgram;(Me===void 0||Me.isReady())&&B.delete(be)}),B.size===0){H(y);return}setTimeout(me,10)}lt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Aa=null;function uh(y){Aa&&Aa(y)}function Io(){ti.stop()}function Do(){ti.start()}const ti=new Wc;ti.setAnimationLoop(uh),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(y){Aa=y,oe.setAnimationLoop(y),y===null?ti.stop():ti.start()},oe.addEventListener("sessionstart",Io),oe.addEventListener("sessionend",Do),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(y,D);const q=oe.enabled===!0&&oe.isPresenting===!0,B=N!==null&&(ie===null||q)&&N.begin(C,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(D),D=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,D,ie),w=K.get(y,b.length),w.init(D),w.state.textureUnits=Ue.getTextureUnits(),b.push(w),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?yt.setFromArrayCamera(D):Ve.setFromProjectionMatrix(dt,gn,D.reversedDepth),Wt=this.localClippingEnabled,ut=J.init(this.clippingPlanes,Wt),T=pe.get(y,x.length),T.init(),x.push(T),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&Ra(be,D,-1/0,C.sortObjects)}Ra(y,D,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Se,ke),jt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,jt&&P.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),ut===!0&&J.beginShadows();const H=w.state.shadowsArray;if(ue.render(H,y,D),ut===!0&&J.endShadows(),(B&&N.hasRenderPass())===!1){const be=T.opaque,fe=T.transmissive;if(w.setupLights(),D.isArrayCamera){const Me=D.cameras;if(fe.length>0)for(let Ae=0,Oe=Me.length;Ae<Oe;Ae++){const Ye=Me[Ae];Uo(be,fe,y,Ye)}jt&&P.render(y);for(let Ae=0,Oe=Me.length;Ae<Oe;Ae++){const Ye=Me[Ae];No(T,y,Ye,Ye.viewport)}}else fe.length>0&&Uo(be,fe,y,D),jt&&P.render(y),No(T,y,D)}ie!==null&&k===0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie)),B&&N.end(C),y.isScene===!0&&y.onAfterRender(C,y,D),he.resetDefaultState(),Y=-1,ee=null,b.pop(),b.length>0?(w=b[b.length-1],Ue.setTextureUnits(w.state.textureUnits),ut===!0&&J.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,U!==null&&U.renderEnd()};function Ra(y,D,q,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){const be=D.isArrayCamera?yt:Ve;if(!y.frustumCulled||y.intersectsFrustum(be)){B&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(dt);const fe=ae.update(y),Me=y.material;Me.visible&&T.push(y,fe,Me,q,At.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){const be=D.isArrayCamera?yt:Ve;if(!y.frustumCulled||y.intersectsFrustum(be)){const fe=ae.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),At.copy(fe.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(dt)),Array.isArray(Me)){const Ae=fe.groups;for(let Oe=0,Ye=Ae.length;Oe<Ye;Oe++){const we=Ae[Oe],Ze=Me[we.materialIndex];Ze&&Ze.visible&&T.push(y,fe,Ze,q,At.z,we,D)}}else Me.visible&&T.push(y,fe,Me,q,At.z,null,D)}}}const me=y.children;for(let be=0,fe=me.length;be<fe;be++)Ra(me[be],D,q,B)}function No(y,D,q,B){const{opaque:H,transmissive:me,transparent:be}=y;w.setupLightsView(q),ut===!0&&J.setGlobalState(C.clippingPlanes,q),B&&xe.viewport(F.copy(B)),H.length>0&&Ss(H,D,q),me.length>0&&Ss(me,D,q),be.length>0&&Ss(be,D,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Uo(y,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const we=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:we?Tn:Jt,minFilter:Kn,samples:Math.max(4,ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const me=w.state.transmissionRenderTarget[B.id],be=B.viewport||F;me.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(z),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear(),jt&&P.render(q);const Oe=C.toneMapping;C.toneMapping=xn;const Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ut===!0&&J.setGlobalState(C.clippingPlanes,B),Ss(y,q,B),Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me),lt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ze=0,vt=D.length;Ze<vt;Ze++){const rt=D[Ze],{object:at,geometry:Ut,material:Te,group:Gt}=rt;if(Te.side===kt&&at.layers.test(B.layers)){const Qe=Te.side;Te.side=Vt,Te.needsUpdate=!0,Fo(at,q,B,Ut,Te,Gt),Te.side=Qe,Te.needsUpdate=!0,we=!0}}we===!0&&(Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me))}C.setRenderTarget(fe,Me,Ae),C.setClearColor(z,X),Ye!==void 0&&(B.viewport=Ye),C.toneMapping=Oe}function Ss(y,D,q){const B=D.isScene===!0?D.overrideMaterial:null;for(let H=0,me=y.length;H<me;H++){const be=y[H],{object:fe,geometry:Me,group:Ae}=be;let Oe=be.material;Oe.allowOverride===!0&&B!==null&&(Oe=B),fe.layers.test(q.layers)&&Fo(fe,D,q,Me,Oe,Ae)}}function Fo(y,D,q,B,H,me){U!==null&&H.isNodeMaterial&&U.setObject(y,H),y.onBeforeRender(C,D,q,B,H,me),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(C,D,q,B,y,me),H.transparent===!0&&H.side===kt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,C.renderBufferDirect(q,D,B,H,y,me),H.side=fi,H.needsUpdate=!0,C.renderBufferDirect(q,D,B,H,y,me),H.side=kt):C.renderBufferDirect(q,D,B,H,y,me),y.onAfterRender(C,D,q,B,H,me)}function Oo(y){let D=0;for(const q of y)q.texture!==null&&D++;return D}function Zi(y,D,q){D.isScene!==!0&&(D=Qt);const B=Le.get(y),H=w.state.lights,me=w.state.shadowsArray,be=H.state.version,fe=j.getParameters(y,H.state,me,D,q,w.state.lightProbeGridArray),Me=j.getProgramCacheKey(fe);let Ae=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=A.get(y.envMap||B.environment,Oe),B.envMapRotation=B.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",nt),Ae=new Map,B.programs=Ae,B.programVariants=new Map);let Ye=Ae.get(Me);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===be)return ko(y,fe),Ye}else fe.uniforms=j.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,q,fe),y.onBeforeCompile(fe,C),Ye=j.acquireProgram(fe,Me),Ae.set(Me,Ye),B.uniforms=fe.uniforms;const we=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=J.uniform),ko(y,fe),B.needsLights=mh(y),B.lightsStateVersion=be,B.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Oo(w.state.lightProbeGridArray),B.currentProgram=Ye,B.uniformsList=null,Ye}function dh(y,D,q,B,H){const me=Le.get(y),be=me.currentProgram.id+","+B+","+H;let fe=me.programVariants.get(be);return fe===void 0?(fe=Zi(y,D,q),me.programVariants.set(be,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=B,me.toneMapping=H),fe}function zo(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=ra.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function ko(y,D){const q=Le.get(y);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function fh(y,D,q,B,H){D.isScene!==!0&&(D=Qt),Ue.resetTextureUnits();const me=D.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,fe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=A.get(B.envMap||be,Me),Oe=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,vt=!!q.morphAttributes.color;let rt=xn;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(rt=C.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ut=at!==void 0?at.length:0,Te=Le.get(B),Gt=w.state.lights;if(ut===!0&&(Wt===!0||y!==ee)){const ft=y===ee&&B.id===Y;J.setState(B,y,ft)}let Qe=!1,ni=!1;B.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Gt.state.version||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Ae||B.fog===!0&&Te.fog!==me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==J.numPlanes||Te.numIntersection!==J.numIntersection)||Te.vertexAlphas!==Oe||Te.vertexTangents!==Ye||Te.morphTargets!==we||Te.morphNormals!==Ze||Te.morphColors!==vt||Te.morphTargetsCount!==Ut||Te.numLightProbeGrids!==Oo(w.state.lightProbeGridArray)?Qe=!0:(Te.outputColorSpace!==fe||Te.toneMapping!==rt)&&(ni=!0):(Qe=!0,Te.__version=B.version);let Ft=Te.currentProgram;(Qe===!0||ni===!0)&&(Ft=ni===!0?dh(B,D,H,fe,rt):Zi(B,D,H),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Ft,Te));let ys=!1,Gn=!1,ii=!1;const Ke=Ft.getUniforms(),Lt=Te.uniforms;if(xe.useProgram(Ft.program)&&(ys=!0,Gn=!0,ii=!0),B.id!==Y&&(Y=B.id,Gn=!0),ys||ee!==y){xe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ke.setValue(O,"projectionMatrix",y.projectionMatrix),Ke.setValue(O,"viewMatrix",y.matrixWorldInverse);const Ct=Ke.map.cameraPosition;Ct!==void 0&&Ct.setValue(O,_n.setFromMatrixPosition(y.matrixWorld)),ct.logarithmicDepthBuffer&&Ke.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ke.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,Gn=!0,ii=!0)}if(Te.needsLights&&(Gt.state.sunShadowMap.length>0&&Ke.setValue(O,"sunShadowMap",Gt.state.sunShadowMap,Ue),Gt.state.directionalShadowMap.length>0&&Ke.setValue(O,"directionalShadowMap",Gt.state.directionalShadowMap,Ue),Gt.state.spotShadowMap.length>0&&Ke.setValue(O,"spotShadowMap",Gt.state.spotShadowMap,Ue),Gt.state.pointShadowMap.length>0&&Ke.setValue(O,"pointShadowMap",Gt.state.pointShadowMap,Ue)),H.isSkinnedMesh){Ke.setOptional(O,H,"bindMatrix"),Ke.setOptional(O,H,"bindMatrixInverse");const ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ke.setValue(O,"boneTexture",ft.boneTexture,Ue))}H.isBatchedMesh&&(Ke.setOptional(O,H,"batchingTexture"),Ke.setValue(O,"batchingTexture",H._matricesTexture,Ue),Ke.setOptional(O,H,"batchingIdTexture"),Ke.setValue(O,"batchingIdTexture",H._indirectTexture,Ue),Ke.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Ke.setValue(O,"batchingColorTexture",H._colorsTexture,Ue));const on=q.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Q.update(H,q,Ft),(Gn||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,Ke.setValue(O,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=X0()),Gn){if(Ke.setValue(O,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&ph(Lt,ii),me&&B.fog===!0&&ce.refreshFogUniforms(Lt,me),ce.refreshMaterialUniforms(Lt,B,ne,ge,w.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.numLightProbeGrids>0){const ft=S;let Ct=0;for(const An of w.state.lightProbeGridArray)An.texture!==null&&(ft.textures[Ct]=An.texture,ft.min[Ct]=An.boundingBox.min,ft.max[Ct]=An.boundingBox.max,ft.resolution[Ct]=An.resolution,Ct++);for(const An in ft)ft[An].length=Ct;Lt.probesSH.value=ft.textures,Lt.probesMin.value=ft.min,Lt.probesMax.value=ft.max,Lt.probesResolution.value=ft.resolution}ra.upload(O,zo(Te),Lt,Ue)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ra.upload(O,zo(Te),Lt,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ke.setValue(O,"center",H.center),Ke.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ke.setValue(O,"normalMatrix",H.normalMatrix),Ke.setValue(O,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let Ct=0,An=ft.length;Ct<An;Ct++){const Go=ft[Ct];Ce.update(Go,Ft),Ce.bind(Go,Ft)}}return Ft}function ph(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function mh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,D,q){const B=Le.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Le.get(y.texture).__webglTexture=D,Le.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const q=Le.get(y);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,q=0){ie=y,$=D,k=q;let B=null,H=!1,me=!1;if(y){const fe=Le.get(y);if(fe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(y.viewport),te.copy(y.scissor),se=y.scissorTest,xe.viewport(F),xe.scissor(te),xe.setScissorTest(se),Y=-1;return}else if(fe.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(fe.__hasExternalTextures)Ue.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Oe=y.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&Le.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Ae=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?B=Ae[D][q]:B=Ae[D],H=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?B=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[q]:B=Ae,F.copy(y.viewport),te.copy(y.scissor),se=y.scissorTest}else F.copy(ye).multiplyScalar(ne).floor(),te.copy(Ie).multiplyScalar(ne).floor(),se=tt;if(q!==0&&(B=W),xe.bindFramebuffer(O.FRAMEBUFFER,B)&&xe.drawBuffers(y,B),xe.viewport(F),xe.scissor(te),xe.setScissorTest(se),H){const fe=Le.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,q)}else if(me){const fe=D;for(let Me=0;Me<y.textures.length;Me++){const Ae=Le.get(y.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,q,fe)}}else if(y!==null&&q!==0){const fe=Le.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,q)}Y=-1};function Bo(y){const D=Le.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=ct.textureFormatReadable(y.format),D.__typeReadable=ct.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,q,B,H,me,be,fe=0){if(!(y&&y.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be],Array.isArray(Me)&&(Me=Me[0])),Me){xe.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Ae=y.textures[fe],Oe=Ae.format,Ye=Ae.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const we=Bo(Ae);if(we.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&q>=0&&q<=y.height-H&&O.readPixels(D,q,B,H,le.convert(Oe),le.convert(Ye),me)}finally{const Ae=ie!==null?Le.get(ie).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,D,q,B,H,me,be,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be],Array.isArray(Me)&&(Me=Me[0])),Me)if(D>=0&&D<=y.width-B&&q>=0&&q<=y.height-H){xe.bindFramebuffer(O.FRAMEBUFFER,Me);const Ae=y.textures[fe],Oe=Ae.format,Ye=Ae.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const we=Bo(Ae);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(D,q,B,H,le.convert(Oe),le.convert(Ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const vt=ie!==null?Le.get(ie).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,vt);const rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jh(O,rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ze),O.deleteSync(rt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,q=0){const B=Math.pow(2,-q),H=Math.floor(y.image.width*B),me=Math.floor(y.image.height*B),be=D!==null?D.x:0,fe=D!==null?D.y:0;Ue.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,be,fe,H,me),xe.unbindTexture()},this.copyTextureToTexture=function(y,D,q=null,B=null,H=0,me=0){let be,fe,Me,Ae,Oe,Ye,we,Ze,vt;const rt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(q!==null)be=q.max.x-q.min.x,fe=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Oe=q.min.y,Ye=q.isBox3?q.min.z:0;else{const Ke=Math.pow(2,-H);be=Math.floor(rt.width*Ke),fe=Math.floor(rt.height*Ke),y.isDataArrayTexture?Me=rt.depth:y.isData3DTexture?Me=Math.floor(rt.depth*Ke):Me=1,Ae=0,Oe=0,Ye=0}B!==null?(we=B.x,Ze=B.y,vt=B.z):(we=0,Ze=0,vt=0);const at=le.convert(D.format),Ut=le.convert(D.type);let Te;D.isData3DTexture?(Ue.setTexture3D(D,0),Te=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ue.setTexture2DArray(D,0),Te=O.TEXTURE_2D_ARRAY):(Ue.setTexture2D(D,0),Te=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Gt=xe.getParameter(O.UNPACK_ROW_LENGTH),Qe=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),ni=xe.getParameter(O.UNPACK_SKIP_PIXELS),Ft=xe.getParameter(O.UNPACK_SKIP_ROWS),ys=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Oe),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const Gn=y.isDataArrayTexture||y.isData3DTexture,ii=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Ke=Le.get(y),Lt=Le.get(D),on=Le.get(Ke.__renderTarget),ft=Le.get(Lt.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,on.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Ct=0;Ct<Me;Ct++)Gn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(y).__webglTexture,H,Ye+Ct),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(D).__webglTexture,me,vt+Ct)),O.blitFramebuffer(Ae,Oe,Ae+be,Oe+fe,we,Ze,we+be,Ze+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Le.has(y)){const Ke=Le.get(y),Lt=Le.get(D);xe.bindFramebuffer(O.READ_FRAMEBUFFER,L),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let on=0;on<Me;on++)Gn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,H,Ye+on):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ke.__webglTexture,H),ii?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,me,vt+on):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,me),H!==0?O.blitFramebuffer(Ae,Oe,Ae+be,Oe+fe,we,Ze,we+be,Ze+fe,O.COLOR_BUFFER_BIT,O.NEAREST):ii?O.copyTexSubImage3D(Te,me,we,Ze,vt+on,Ae,Oe,be,fe):O.copyTexSubImage2D(Te,me,we,Ze,Ae,Oe,be,fe);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ii?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Te,me,we,Ze,vt,be,fe,Me,at,Ut,rt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,me,we,Ze,vt,be,fe,Me,at,rt.data):O.texSubImage3D(Te,me,we,Ze,vt,be,fe,Me,at,Ut,rt):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,we,Ze,be,fe,at,Ut,rt.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,we,Ze,rt.width,rt.height,at,rt.data):O.texSubImage2D(O.TEXTURE_2D,me,we,Ze,be,fe,at,Ut,rt);xe.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,ni),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,ys),me===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Te),xe.unbindTexture()},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){$=0,k=0,ie=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const $l=[{id:"erupcion",name:"La Zona de la Erupción",tag:"VOLCÁNICO",emoji:"🌋",subtitle:"La ciudad, el pueblo y la cordillera rodean un volcán a punto de estallar.",hazard:"A los 2 minutos el volcán entra en erupción: rocas ardientes y ríos de lava te obligan a moverte sin parar.",hazardShort:"Erupción a los 2:00",zoneName:"LAVA",accent:"#ff6b35",accent2:"#ffb02e",sky:{top:"#241018",mid:"#6b2a1c",bottom:"#ff9a4d",fog:6960420,fogDensity:.0029,sunDir:[-.35,.22,.9]},sun:16757370,ambient:8018770,hemi:11565658,ground:"#5c3a2c",lava:!0,storm:!1,toxic:!1,ruined:!1,weather:"ember"},{id:"posapocalipsis",name:"El Posapocalipsis",tag:"RUINAS",emoji:"☢️",subtitle:"El mismo mapa, arrasado. La ciudad y el pueblo son escombros; hay un búnker en la cordillera.",hazard:"Una tormenta de ceniza avanza desde los bordes hacia el centro. El terreno se cierra y solo queda pelear.",hazardShort:"Tormenta de ceniza",zoneName:"CENIZA",accent:"#c9b18a",accent2:"#8a7a5a",sky:{top:"#20242a",mid:"#565a58",bottom:"#c8bda4",fog:7828840,fogDensity:.0048,sunDir:[.2,.4,.85]},sun:15259832,ambient:6974048,hemi:11050632,ground:"#4b4a3f",lava:!1,storm:!0,toxic:!1,ruined:!0,weather:"ash"},{id:"neon",name:"Neón Ciber-Barrio",tag:"CYBERPUNK",emoji:"🌆",subtitle:"Callejones estrechos, letreros de neón podridos y generadores a punto de colapsar.",hazard:"Los leus liberan humo tóxico. Busca máscaras de gas antiguas o la contaminación te manda al lobby.",hazardShort:"Humo tóxico · máscaras",zoneName:"TÓXICO",accent:"#ff3ea5",accent2:"#35f0ff",sky:{top:"#120a24",mid:"#4a1a6a",bottom:"#b02a8a",fog:2757188,fogDensity:.0055,sunDir:[.35,.28,-.75]},sun:16743129,ambient:4864634,hemi:10115839,ground:"#241a33",lava:!1,storm:!1,toxic:!0,ruined:!1,weather:"neon"}],lr=[{id:"miguel",name:"El Pana Miguel",tag:"El pana de siempre",desc:"Gatito tierno de 1.02 m y 12 kg. Pelaje realista en píxel art adaptado al 3D, traje táctico completo y cola animada. Sin guantes por defecto.",gloves:!1,meleeBonus:0},{id:"furia",name:"Miguel Furioso",tag:"Furia Gatuna",desc:"Miguel con los guantes de combate equipados. Mantiene compatibilidad visual con las animaciones de ataque rápido cuerpo a cuerpo. +15% daño de melé.",gloves:!0,meleeBonus:.15}],q0=["Cheems","Doge","El Pepe","Etesech","Doña Gladys","Juancho","La Rata","Pepito","Among Us","Gigachad","Sr. Barriga","El Risas","Chabelo","Momo","Snoop Dogg","La Chancla","Pollo Juan","Paloma Cósmica","Tilín","El Bromas","Michi","Don Ramón","La Vecina","Bodoque","Freddy","El Chavo","Pikachu","Sans","Shrek","El Temach"],Kl=["alguien vio un pollo por el pueblo?","no entren a la ciudad, hay camper con sniper","quién quiere duo?","me caí del mapa y me salvaron las palomas","el volcán está raro...","vendo chancla divina, 3 kills","no me funen, solo estaba looteando","GG","la lava me comió el loot","Miguel > todos","hay un tipo con guantes en el pueblo","esto está más caliente que el reactor","me teleportó un pollo ayuda","el que dispara primero pierde","quedan muy pocos, cuidado"];function Ea(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new ot;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.morphAttributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in a){const f=Jl(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const g=Jl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Jl(s){let e,t,n,i=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new pt(r,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);o.setComponent(u+f,g,_)}}else r.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function wa(s,e){const t=new Ee(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let a=0;a<n;a++)i[a*3]=t.r,i[a*3+1]=t.g,i[a*3+2]=t.b;return s.setAttribute("color",new pt(i,3)),s}function Et(s,e,t,n,i,a,r,o=0,l=0,c=0){const h=new We(s,e,t);return wa(h,r),o&&h.rotateX(o),l&&h.rotateY(l),c&&h.rotateZ(c),h.translate(n,i,a),h}function Yn(s,e,t,n,i,a=1,r=1,o=1){const l=new zn(s,1);return wa(l,i),l.scale(a,r,o),l.translate(e,t,n),l}function li(s,e,t,n,i,a,r=0,o=0,l=0,c=6){const h=new Fn(s,e,c);return wa(h,a),r&&h.rotateX(r),o&&h.rotateY(o),l&&h.rotateZ(l),h.translate(t,n,i),h}function Y0(s,e,t,n,i,a,r,o=6,l=0,c=0){const h=new st(s,e,t,o);return wa(h,r),l&&h.rotateX(l),c&&h.rotateZ(c),h.translate(n,i,a),h}function nh(s){return Ea(s.map(e=>e.index?e.toNonIndexed():e),!1)}function oa(s,e){const t=nh(s);return new Xe(t,e)}const Kt={miguel:"#d9894a",miguelDark:"#b5652f",cream:"#f2d9b0",vest:"#3c4a34",strap:"#1d241a",glove:"#ff7a2f",claw:"#d9d9d9"};function Z0(s=0){const e=[{fur:"#d9894a",dark:"#b5652f",cream:"#f2d9b0"},{fur:"#8f8f96",dark:"#6a6a72",cream:"#e8e2d4"},{fur:"#2f2b2a",dark:"#1c1918",cream:"#b9aa98"},{fur:"#e8dfd0",dark:"#c4b8a4",cream:"#fff6e8"},{fur:"#b06a3a",dark:"#7d4422",cream:"#f0d0a8"},{fur:"#6b5a4a",dark:"#4a3d31",cream:"#d8c4a8"}];return e[s%e.length]}const Ql=["#3c4a34","#3a3f4a","#4a3a34","#2f3a3a","#4a4430","#352f42"];function to(s,e,t,n=!0){const i=[];if(i.push(Et(.44,.34,.3,0,.52,0,s.fur)),i.push(Et(.46,.16,.32,0,.62,.01,e)),i.push(Et(.5,.07,.34,0,.72,0,Kt.strap)),i.push(Et(.08,.38,.34,0,.53,.01,Kt.strap)),i.push(Et(.2,.15,.04,0,.6,.17,"#6b6f5a")),i.push(Yn(.23,0,.86,0,s.fur,1,.94,1)),i.push(Yn(.15,0,.8,.1,s.cream,1,.8,.8)),i.push(Yn(.06,0,.81,.21,"#f7b7a0",1.2,.8,.9)),i.push(Et(.045,.035,.035,0,.835,.255,"#3a2424")),i.push(Yn(.042,-.085,.89,.185,"#1a1a1a",1,1.15,.7)),i.push(Yn(.042,.085,.89,.185,"#1a1a1a",1,1.15,.7)),i.push(Yn(.012,-.08,.9,.213,"#ffffff")),i.push(Yn(.012,.09,.9,.213,"#ffffff")),i.push(li(.09,.2,-.14,1.02,0,s.fur,0,0,-.16)),i.push(li(.09,.2,.14,1.02,0,s.fur,0,0,.16)),i.push(li(.05,.12,-.14,1,.02,"#e8a8a0",0,0,-.16)),i.push(li(.05,.12,.14,1,.02,"#e8a8a0",0,0,.16)),n&&(i.push(Et(.05,.02,.22,-.1,1.045,0,s.dark)),i.push(Et(.05,.02,.22,.08,1.05,0,s.dark)),i.push(Et(.24,.04,.02,0,.71,-.14,s.dark))),t){i.push(Et(.11,.11,.12,-.31,.42,.02,Kt.glove)),i.push(Et(.11,.11,.12,.31,.42,.02,Kt.glove));for(let a=-1;a<=1;a++)i.push(li(.018,.1,-.34+a*.03,.36,.08,Kt.claw,.5,0,0)),i.push(li(.018,.1,.28+a*.03,.36,.08,Kt.claw,.5,0,0))}return i.push(Et(.26,.24,.12,0,.58,-.2,"#3a3a2e")),i}function ih(s,e){const t={fur:Kt.miguel,dark:Kt.miguelDark,cream:Kt.cream},n=!!e.gloves,i=new Yt({vertexColors:!0}),a=new an;a.name="miguel";const r=new an;a.add(r);const o=oa(to(t,Kt.vest,n),i);o.castShadow=!1,r.add(o);const l=C=>{const I=[];I.push(Et(.1,.26,.1,0,-.1,0,t.fur)),I.push(Yn(.075,0,-.25,0,n?Kt.glove:t.cream,1,.9,1)),n&&I.push(li(.02,.09,0,-.31,.02,Kt.claw,.3,0,0));const U=oa(I,i);return U.position.set(C*.29,.74,0),U},c=l(-1),h=l(1);r.add(c,h);const f=()=>{const C=[];return C.push(Et(.12,.28,.13,0,-.13,0,t.fur)),C.push(Et(.14,.08,.2,0,-.29,.03,t.cream)),oa(C,i)},u=f(),d=f();u.position.set(-.13,.36,0),d.position.set(.13,.36,0),r.add(u,d);const g=new an,_=[],p=new Yt({color:t.fur});for(let C=0;C<3;C++){const I=new Xe(new st(.045-C*.008,.05-C*.008,.2,5),p);I.position.y=.1;const U=new an;U.add(I),U.position.set(0,C===0?0:.18,0),U.rotation.x=.5+C*.15,_.push(U),C===0?g.add(U):_[C-1].add(U)}g.position.set(0,.52,-.18),g.rotation.x=-.4,r.add(g);const m=new an;m.position.set(.34,.45,.06),r.add(m);let v=null,E=new gt;E.position.set(0,.02,.35),m.add(E);const S=new Xe(new xs(.42,12),new ht({color:0,transparent:!0,opacity:.28,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=.03,a.add(S);let T=0,w=0,x=0;function b(C){v&&(m.remove(v),sh(v)),v=To(C),m.add(v),E.position.set(0,.03,v.userData.muzzleZ||.35)}function N(C,I,U,W,L){const V=I>.3;T+=C*(V?I*6.2:2.2),x+=((W?1:0)-x)*Math.min(1,C*10),w+=C*(V?I*5:1.5);const $=V?Math.sin(T)*.65:0;u.rotation.x=$,d.rotation.x=-$,c.rotation.x=-$*.7-x*.9,h.rotation.x=$*.7-x*1.25+(L?Math.sin(performance.now()*.03)*.4:0),c.rotation.z=-.08,h.rotation.z=.08+x*.18,r.position.y=V?Math.abs(Math.sin(T*2))*.025:Math.sin(w)*.008,r.rotation.z=V?Math.sin(T)*.035:0,r.rotation.x=x*.06,g.rotation.y=Math.sin(w*1.4)*.4,g.rotation.x=-.4+Math.sin(w*1.1)*.12;for(let k=0;k<_.length;k++)_[k].rotation.z=Math.sin(w*1.6+k)*.18;S.position.y=.03,m.rotation.x=x*-.15}return s.add(a),{root:a,rig:r,weaponMount:m,muzzle:E,shadow:S,setWeapon:b,update:N,setGloves(C){o.geometry.dispose(),o.geometry=nh(to(t,Kt.vest,C))},getWeaponMesh:()=>v}}function $0(s,e=0,t){const n=Z0(e*7+3),i=Ql[e%Ql.length],a=e%9===0,r=to(n,i,a,e%3!==0);r.push(Et(.12,.3,.13,-.13,.18,0,n.fur)),r.push(Et(.12,.3,.13,.13,.18,0,n.fur)),r.push(Et(.14,.07,.2,-.13,.035,.03,n.cream)),r.push(Et(.14,.07,.2,.13,.035,.03,n.cream)),r.push(Y0(.035,.05,.34,0,.5,-.32,n.fur,5,.9,0));const o=new Yt({vertexColors:!0}),l=oa(r,o),c=new an;c.add(l);const h=To(e%4===0?"ak47":e%4===1?"mp5":e%4===2?"remington":"m1911");return h.position.set(.3,.48,.15),h.scale.setScalar(.9),c.add(h),s.add(c),{group:c,mesh:l,weaponMesh:h,palette:n,vest:i}}const Gi=new Map;function Xt(s,e=0,t=0){const n=`${s}-${e}-${t}`;return Gi.has(n)||Gi.set(n,new Yt({color:s,emissive:e,emissiveIntensity:t})),Gi.get(n)}function un(s){const e=`b-${s}`;return Gi.has(e)||Gi.set(e,new ht({color:s,toneMapped:!1})),Gi.get(e)}function Ne(s,e,t,n,i,a=0,r=0,o=0){const l=new Xe(s,e);return l.position.set(t,n,i),l.rotation.set(a,r,o),l}function To(s){const e=new an,t=Xt(2369066),n=Xt(5593696),i=Xt(8014376);Xt(9075290);const a=un(16731501);let r=.35;switch(s){case"garras":{const o=un(16756782);for(let l=-1;l<=1;l++){const c=Ne(new Fn(.035,.42,5),o,l*.07,.02,.16,Math.PI/2);e.add(c)}e.add(Ne(new We(.16,.1,.16),Xt(16742959),0,-.04,.02)),r=.34;break}case"bate":{const o=Ne(new st(.045,.075,.8,7),i,0,0,.28,Math.PI/2);e.add(o),e.add(Ne(new st(.055,.045,.18,7),t,0,0,-.14,Math.PI/2)),e.add(Ne(new We(.14,.02,.1),un(16765286),0,.07,.45)),r=.66;break}case"chancla":{e.add(Ne(new We(.18,.05,.5),un(16731546),0,0,.18)),e.add(Ne(new We(.1,.06,.16),un(16756782),0,.02,.12)),e.add(Ne(new We(.02,.08,.4),un(16765286),0,.05,.2)),r=.44;break}case"chismes":{e.add(Ne(new st(.06,.075,.55,8),n,0,0,.18,Math.PI/2)),e.add(Ne(new st(.11,.11,.3,8),Xt(9056047),0,-.12,-.1,Math.PI/2)),e.add(Ne(new Fn(.12,.18,8),un(16742959),0,0,.48,Math.PI/2)),r=.58;break}case"memes":{e.add(Ne(new We(.18,.2,.5),Xt(3816010),0,0,.14)),e.add(Ne(new st(.07,.09,.28,8),un(11561983),0,0,.42,Math.PI/2)),e.add(Ne(new Sa(.08,8,6),a,0,0,.5)),r=.58;break}case"rpg":case"javelin":case"m79":{e.add(Ne(new st(.085,.085,1,8),Xt(4147765),0,0,.2,Math.PI/2)),e.add(Ne(new Fn(.14,.3,8),Xt(6961706),0,0,.55,Math.PI/2)),e.add(Ne(new We(.06,.16,.12),t,0,-.12,.05)),r=.7;break}case"minigun":case"m249":case"m60":case"pkm":{e.add(Ne(new We(.2,.18,.55),Xt(3817274),0,0,.15)),e.add(Ne(new st(.06,.06,.55,8),n,0,.01,.48,Math.PI/2)),e.add(Ne(new st(.12,.12,.18,8),t,0,-.1,.12,Math.PI/2)),r=.78;break}case"awm":case"barrett":case"mosin":case"svd":case"vss":{e.add(Ne(new We(.1,.12,.7),Xt(3818040),0,0,.25)),e.add(Ne(new st(.035,.035,.55,6),n,0,.02,.68,Math.PI/2)),e.add(Ne(new We(.12,.12,.26),t,0,.1,.12)),e.add(Ne(new st(.05,.05,.2,8),un(8321535),0,.11,.12,Math.PI/2)),e.add(Ne(new We(.06,.18,.1),t,0,-.12,.1)),r=.95;break}case"remington":case"doblecano":case"benelli":case"spas":case"aa12":{e.add(Ne(new We(.13,.13,.62),i,0,0,.2)),e.add(Ne(new st(.045,.045,.5,6),n,0,.03,.62,Math.PI/2)),e.add(Ne(new st(.04,.04,.4,6),n,0,-.03,.6,Math.PI/2)),r=.9;break}case"uzi":case"mp5":case"tec9":case"p90":case"vector":case"mp7":{e.add(Ne(new We(.13,.16,.38),t,0,0,.12)),e.add(Ne(new st(.03,.03,.22,6),n,0,.03,.38,Math.PI/2)),e.add(Ne(new We(.07,.2,.08),n,0,-.13,.1)),r=.52;break}case"ak47":case"m4a1":case"scar":case"fal":case"g36":case"m16":case"famas":case"galil":{e.add(Ne(new We(.11,.14,.58),Xt(3357234),0,0,.2)),e.add(Ne(new st(.028,.028,.38,6),n,0,.03,.62,Math.PI/2)),e.add(Ne(new We(.08,.22,.09),t,0,-.15,.14)),e.add(Ne(new We(.07,.12,.16),t,0,.09,.22)),r=.86;break}case"deagle":case"magnum":{e.add(Ne(new We(.1,.13,.34),n,0,.02,.14)),e.add(Ne(new We(.09,.18,.1),t,0,-.1,.02)),r=.34;break}case"katana":{e.add(Ne(new We(.035,.045,.95),un(14214896),0,.02,.45)),e.add(Ne(new st(.03,.03,.18,6),t,0,0,-.06,Math.PI/2)),r=.9;break}case"cuchillo":{e.add(Ne(new We(.03,.06,.32),un(13162208),0,.02,.2)),e.add(Ne(new We(.05,.05,.12),t,0,0,-.02)),r=.36;break}case"mazo":{e.add(Ne(new st(.03,.035,.55,6),i,0,0,.2,Math.PI/2)),e.add(Ne(new We(.18,.18,.22),n,0,0,.48)),r=.56;break}case"palanca":{e.add(Ne(new st(.025,.03,.8,6),Xt(9058858),0,0,.3,Math.PI/2)),e.add(Ne(new We(.12,.05,.1),n,0,.04,.7)),r=.7;break}case"bate_beisbol":{e.add(Ne(new st(.04,.07,.72,7),i,0,0,.26,Math.PI/2)),r=.62;break}default:e.add(Ne(new We(.09,.12,.3),t,0,.02,.12)),e.add(Ne(new We(.08,.16,.1),Xt(3815994),0,-.1,.02)),r=.3}return e.userData.muzzleZ=r,e}function sh(s){s.traverse(e=>{e.geometry&&e.geometry.dispose()})}const cr=["auto","alta","baja"],K0={auto:"AUTO",alta:"ALTA",baja:"BAJA"};class J0{constructor({onPlay:e}){this.onPlay=e,this.selectedMap=$l[0],this.selectedSkin=lr[0],this.quality=localStorage.getItem("ms-quality")||"auto",this.raf=0,this.visible=!0,this.buildMaps(),this.bindSkin(),this.bindButtons(),this.initPreview(),this.applyQualityLabel()}buildMaps(){const e=document.getElementById("map-list");e.innerHTML="";const t={erupcion:"linear-gradient(160deg, #ff7a3d 0%, #6b2318 45%, #1b1216 100%)",posapocalipsis:"linear-gradient(160deg, #b9ad94 0%, #55534a 45%, #1a1c1d 100%)",neon:"linear-gradient(160deg, #ff3ea5 0%, #4b1a7a 45%, #090616 100%)"};$l.forEach(n=>{const i=document.createElement("button");i.className=`map-card ${n.id===this.selectedMap.id?"active":""}`,i.style.setProperty("--accent",n.accent),i.style.setProperty("--thumb",t[n.id]),i.innerHTML=`
        <div class="map-thumb">${n.emoji}</div>
        <div class="map-info">
          <b>${n.name}</b>
          <small>${n.subtitle}</small>
        </div>
        <div class="map-hazard">${n.hazardShort}<span>${n.tag}</span></div>`,i.addEventListener("click",()=>{this.selectedMap=n,document.querySelectorAll(".map-card").forEach(a=>a.classList.remove("active")),i.classList.add("active"),document.documentElement.style.setProperty("--accent",n.accent)}),e.appendChild(i)}),document.documentElement.style.setProperty("--accent",this.selectedMap.accent)}bindSkin(){const e=[...document.querySelectorAll("#skin-toggle button")],t=document.getElementById("skin-desc"),n=document.getElementById("skin-badge"),i=document.getElementById("skin-bonus"),a=r=>{this.selectedSkin=lr.find(o=>o.id===r)||lr[0],e.forEach(o=>o.classList.toggle("active",o.dataset.skin===r)),t.textContent=this.selectedSkin.desc,n.textContent=this.selectedSkin.gloves?"GUANTES EQUIPADOS":"SIN GUANTES",n.style.color=this.selectedSkin.gloves?"#ff9a6b":"#7dffb0",n.style.borderColor=this.selectedSkin.gloves?"rgba(255,154,107,0.4)":"rgba(125,255,176,0.3)",i.textContent=`+${Math.round(this.selectedSkin.meleeBonus*100)}%`,this.previewChar&&(this.previewChar.setGloves(this.selectedSkin.gloves),this.previewChar.setWeapon(this.selectedSkin.gloves?"garras":"pio"),this.previewChar.rig.rotation.y=0)};e.forEach(r=>r.addEventListener("click",()=>a(r.dataset.skin))),a("miguel"),this.applySkin=a}bindButtons(){document.getElementById("play-btn").addEventListener("click",()=>{this.visible&&this.onPlay(this.selectedMap,this.selectedSkin,this.quality)}),document.getElementById("quality-btn").addEventListener("click",()=>{const t=cr.indexOf(this.quality);this.quality=cr[(t+1)%cr.length],localStorage.setItem("ms-quality",this.quality),this.applyQualityLabel()});const e=document.getElementById("how-modal");document.getElementById("how-btn").addEventListener("click",()=>e.classList.remove("hidden")),document.getElementById("how-close").addEventListener("click",()=>e.classList.add("hidden")),e.addEventListener("click",t=>{t.target===e&&e.classList.add("hidden")})}applyQualityLabel(){const e=document.getElementById("quality-label");e&&(e.textContent=K0[this.quality])}initPreview(){const e=document.getElementById("skin-preview");if(!e)return;const t=new th({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor(0,0),t.outputColorSpace=It,this.previewRenderer=t;const n=new Cc,i=new sn(38,1,.1,30);i.position.set(0,1.15,2.6),i.lookAt(0,.62,0),n.add(new Gc(16767408,2759216,2));const a=new xa(16752736,3);a.position.set(2,3,3),n.add(a);const r=new xa(3535103,2);r.position.set(-2,1.5,-2),n.add(r);const o=new Xe(new st(.72,.86,.12,24),new Yt({color:2759216}));o.position.y=-.06,n.add(o);const l=new Xe(new qi(.78,.86,32),new ht({color:16742959,transparent:!0,opacity:.7,side:kt}));l.rotation.x=-Math.PI/2,l.position.y=.01,n.add(l);const c=new Ju(6,24,6961802,2759216);c.position.y=-.07,n.add(c),this.previewChar=ih(n,this.selectedSkin),this.previewChar.setWeapon("pio"),this.previewChar.root.scale.setScalar(1.25),this.previewScene=n,this.previewCamera=i;const h=()=>{const d=e.getBoundingClientRect();d.width<2||(t.setSize(d.width,d.height,!1),i.aspect=d.width/Math.max(1,d.height),i.updateProjectionMatrix())};this.previewResize=h,h(),addEventListener("resize",h);let f=0;const u=()=>{if(!this.visible){this.raf=0;return}this.raf=requestAnimationFrame(u),f+=.016,h(),this.previewChar&&(this.previewChar.root.rotation.y=Math.sin(f*.5)*.6+f*.12,this.previewChar.update(.016,0,!0,!1,!1)),l.rotation.z+=.004,l.material.opacity=.5+Math.sin(f*2)*.2,t.render(n,i)};u()}hide(){this.visible=!1,cancelAnimationFrame(this.raf),this.raf=0,document.getElementById("menu").classList.add("hidden"),this.previewRenderer&&(this.previewRenderer.dispose(),this.previewRenderer=null),removeEventListener("resize",this.previewResize)}show(){this.visible=!0,document.getElementById("menu").classList.remove("hidden"),this.previewRenderer||this.initPreview()}}const no=(s,e,t)=>Math.min(t,Math.max(e,s)),hr=(s,e,t)=>s+(e-s)*t,Ks=(s,e,t)=>{const n=no((t-s)/(e-s),0,1);return n*n*(3-2*n)};function ah(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vs(s,e){const t=new Ee(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let a=0;a<n;a++)i[a*3]=t.r,i[a*3+1]=t.g,i[a*3+2]=t.b;return s.setAttribute("color",new pt(i,3)),s}function St(s,e,t,n,i,a,r,o=0){const l=new We(s,e,t);return vs(l,r),o&&l.rotateY(o),l.translate(n,i,a),l}function rn(s,e,t,n,i,a,r,o=7){const l=new st(s,e,t,o);return vs(l,r),l.translate(n,i,a),l}function jl(s,e,t,n,i,a,r=0,o=0,l=0,c=6){const h=new Fn(s,e,c);return vs(h,a),r&&h.rotateX(r),o&&h.rotateY(o),l&&h.rotateZ(l),h.translate(t,n,i),h}function Ms(s,e,t,n,i,a=0){const r=new zn(s,a);return vs(r,i),r.scale(1,.72+Math.random()*.4,1),r.rotateY(Math.random()*Math.PI),r.translate(e,t,n),r}function io(s,e){if(!s.length)return null;const t=Ea(s.map(i=>i.index?i.toNonIndexed():i),!1),n=new Xe(t,e);return n.frustumCulled=!0,n}function Q0(s,e,t,n=256,i=128){const a=document.createElement("canvas");a.width=n,a.height=i;const r=a.getContext("2d");r.fillStyle=e,r.fillRect(0,0,n,i),r.strokeStyle=t,r.lineWidth=6,r.strokeRect(8,8,n-16,i-16),r.font=`900 ${Math.floor(i*.42)}px Impact, Arial Black, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillStyle=t,r.shadowColor=t,r.shadowBlur=18,r.fillText(s,n/2,i/2+4);const o=new Mo(a);return o.colorSpace=It,o.anisotropy=2,o}function j0(s){const e={x:-58,z:-120,r:16,y:14};return function(n,i){let a=2.2+Math.sin(n*.025)*1.25+Math.cos(i*.021)*1.05+Math.sin((n+i)*.052)*.45;const r=Math.exp(-Math.pow((i+145)/58,2))*(13+9*Math.sin(n*.019)+7*Math.cos(n*.043+1.7));a+=Math.max(0,r);const o=Math.hypot(n-10,i-105);if(o<80){const f=1-o/80;a+=Math.pow(f,1.65)*48,o<15&&(a-=(1-o/15)*14)}const l=Math.hypot(n-95,i+40);l<68&&(a=hr(a,2.6,Ks(68,34,l)*.94));const c=Math.hypot(n+95,i-35);if(c<52&&(a=hr(a,2.3,Ks(52,24,c)*.92)),s.ruined){const f=Math.hypot(n-e.x,i-e.z);f<e.r&&(a=hr(a,e.y,Ks(e.r,7,f)))}const h=Math.hypot(n,i);return a-=Ks(168,210,h)*22,a}}function eg(s,e,t){const a=new mi(420,420,108,108);a.rotateX(-Math.PI/2);const r=a.attributes.position,o=new Float32Array(r.count*3),l=new Ee,c=ah(e.id==="neon"?77:e.id==="posapocalipsis"?42:13);for(let d=0;d<r.count;d++){const g=r.getX(d),_=r.getZ(d),p=t(g,_);r.setY(d,p);const m=Math.hypot(g-95,_+40)<68,v=Math.hypot(g+95,_-35)<52,E=Math.hypot(g-10,_-105),S=_<-92;if(E<82){const w=1-E/82;l.set(e.lava?"#6a4030":"#4a4a44").lerp(new Ee("#2a1a16"),w*.7),E<20&&l.lerp(new Ee("#ff6a24"),(1-E/20)*.55)}else m?l.set(e.ruined?"#55504a":e.toxic?"#302646":"#6b6458"):v?l.set(e.ruined?"#5a5342":e.toxic?"#352b4c":"#5f7d43"):S?l.set(e.ruined?"#5c5b53":e.toxic?"#362c4e":"#756a58"):l.set(e.ruined?"#635d4a":e.toxic?"#332a46":e.ground);const T=(c()-.5)*.09;l.offsetHSL((c()-.5)*.015,0,T),o[d*3]=l.r,o[d*3+1]=l.g,o[d*3+2]=l.b}a.setAttribute("color",new pt(o,3)),a.computeVertexNormals();const h=new Yt({vertexColors:!0}),f=new Xe(a,h);f.receiveShadow=!1,f.name="terrain",s.add(f);const u=new Xe(new mi(900,900),new ht({color:e.toxic?727588:e.lava?2758162:1320238,transparent:!0,opacity:.9}));return u.rotation.x=-Math.PI/2,u.position.y=-.4,s.add(u),f}function tg(s){const{map:e,heightAt:t,buildings:n,windows:i,neonStrips:a,signs:r,colliders:o,rng:l}=s,c=e.toxic?["#1d1730","#241a3a","#191226","#2b1c44","#120e20"]:e.ruined?["#3e3a34","#4a453d","#35312c","#524b40"]:["#6b6154","#7a6c5b","#5c554c","#8a7a64","#4f4a44"],h=27,f=58,u=-98;for(let p=0;p<4;p++)for(let m=0;m<4;m++){if(l()<.12)continue;const v=f+p*h+(l()-.5)*4,E=u+m*h+(l()-.5)*4,S=10+l()*9,T=10+l()*9,w=t(v,E);let x=8+l()*(e.toxic?46:30);e.ruined&&(x*=.45+l()*.3),e.toxic&&(x=Math.max(x,18));const b=c[Math.floor(l()*c.length)];if(n.push(St(S,x,T,v,w+x/2,E,b)),o.push({minX:v-S/2,maxX:v+S/2,minY:w-1,maxY:w+x,minZ:E-T/2,maxZ:E+T/2,tag:"building"}),!e.ruined&&l()<.6&&n.push(St(S*.5,.6,T*.5,v,w+x+.3,E,"#2c2a28")),e.ruined){for(let U=0;U<3;U++){const W=3+l()*4,L=1+l()*3;n.push(St(W,L,3+l()*4,v+(l()-.5)*S,w+L/2,E+(l()-.5)*T,b))}for(let U=0;U<4;U++)s.rocks.push(Ms(.8+l()*1.6,v+(l()-.5)*(S+8),w+.4,E+(l()-.5)*(T+8),"#4b463d"))}const N=Math.max(1,Math.floor(x/3.4)),C=Math.max(1,Math.floor(S/3.2)),I=e.toxic?["#ff3ea5","#35f0ff","#ffd166","#a06bff"]:e.ruined?["#ffb35a"]:["#ffd98a","#ffb35a","#9fd8ff"];for(let U=0;U<4;U++){if(e.ruined&&U>1)continue;const W=U<2,L=U%2===0?1:-1,V=W?C:Math.max(1,Math.floor(T/3.2));for(let $=0;$<N;$++)for(let k=0;k<V;k++){if(l()<.38)continue;const ie=(k+.5)/V-.5,Y=W?v+L*(S/2+.06):v+ie*S,ee=W?E+ie*T:E+L*(T/2+.06);i.push({x:Y,y:w+1.9+$*3.3,z:ee,ry:W?Math.PI/2:0,color:I[Math.floor(l()*I.length)],sx:e.toxic?.55:.8,sy:e.toxic?.18:.9})}}if(e.toxic&&l()<.85){const U=l()<.5?"#ff3ea5":"#35f0ff";if(a.push({x:v-S/2-.1,y:w+x*.55,z:E,sx:.12,sy:x*.7,sz:.12,color:U}),a.push({x:v,y:w+x-.3,z:E-T/2-.1,sx:S,sy:.14,sz:.14,color:U}),l()<.5){const W=["LEUS","24/7","RAMEN","CYBER","NO FUTURO","POLLO"][Math.floor(l()*6)];r.push({x:v+S/2+.25,y:w+5+l()*6,z:E+(l()-.5)*T*.5,ry:Math.PI/2,tex:W,w:5+l()*2,h:2.2,color:U})}}}const d=122,g=-22,_=t(d,g);n.push(rn(6,7,12,d,_+6,g,e.ruined?"#3b3b38":"#8b8f87",10)),n.push(rn(7.4,7.4,1.2,d,_+12.4,g,"#2c2e2c",10)),n.push(rn(3.2,3.2,4,d,_+14.6,g,"#4a4e4a",8)),o.push({minX:d-7,maxX:d+7,minY:_-1,maxY:_+16,minZ:g-7,maxZ:g+7,tag:"reactor"}),e.ruined||a.push({x:d,y:_+7,z:g-7.1,sx:1.2,sy:4,sz:.2,color:"#7dffb0"})}function ng(s){const{map:e,heightAt:t,buildings:n,colliders:i,rocks:a,rng:r}=s,o=e.ruined?"#4a4336":"#8a6a4a",l=e.ruined?"#3a332a":"#7a3f2e";for(let u=0;u<11;u++){const d=u/11*Math.PI*2,g=16+r()*26,_=-95+Math.cos(d)*g,p=35+Math.sin(d)*g,m=t(_,p),v=7+r()*5,E=7+r()*5,S=3.6+r()*2.2;if(n.push(St(v,S,E,_,m+S/2,p,o)),i.push({minX:_-v/2,maxX:_+v/2,minY:m-1,maxY:m+S,minZ:p-E/2,maxZ:p+E/2,tag:"house"}),e.ruined)n.push(St(v*.9,.5,E*.9,_,m+S+.2,p,l)),a.push(Ms(1.2+r(),_+(r()-.5)*v,m+.4,p+(r()-.5)*E,"#5a5142"));else{const T=new Fn(Math.max(v,E)*.76,2.4,4);vs(T,l),T.rotateY(Math.PI/4),T.translate(_,m+S+1.2,p),n.push(T)}n.push(St(1.2,2.1,.2,_,m+1.05,p+E/2+.08,"#241d17")),n.push(St(1.2,1.1,.2,_-v*.28,m+S*.6,p+E/2+.08,e.ruined?"#1d1b17":"#ffcf7a"))}for(let u=0;u<9;u++){const d=-130+r()*65,g=10+r()*55,_=t(d,g),p=5+r()*9;n.push(St(p,.16,.16,d,_+.9,g,"#6b5a42"));for(let m=0;m<=4;m++)n.push(St(.18,1.1,.18,d-p/2+p*m/4,_+.55,g,"#5a4a36"))}for(let u=0;u<7;u++){const d=-120+r()*45,g=12+r()*48,_=t(d,g);n.push(rn(1.5,1.5,1.8,d,_+.9,g,"#b08a3e",9))}const c=-68,h=54,f=t(c,h);n.push(rn(.4,.55,9,c-2,f+4.5,h,"#5a4a36",5)),n.push(rn(.4,.55,9,c+2,f+4.5,h,"#5a4a36",5)),n.push(rn(3,3,3.2,c,f+10.2,h,e.ruined?"#4a3a2a":"#7a6a52",9)),i.push({minX:c-3,maxX:c+3,minY:f-1,maxY:f+12,minZ:h-3,maxZ:h+3,tag:"tower"})}function ig(s){const{map:e,heightAt:t,rocks:n,colliders:i,buildings:a,rng:r}=s;for(let o=0;o<34;o++){const l=-150+r()*300,c=-175+r()*55,h=t(l,c);n.push(Ms(1.4+r()*4.2,l,h+.4,c,e.toxic?"#2a2038":e.ruined?"#55514a":"#665c4c"))}if(e.ruined){const h="#4a4a44";a.push(St(18,.5,12,-58,14+.25,-120,"#2b2b27")),a.push(St(18,4.6,.6,-58,14+2.5,-126,h)),a.push(St(18,4.6,.6,-58,14+2.5,-114,h)),a.push(St(.6,4.6,12,-67,14+2.5,-120,h)),a.push(St(.6,4.6,5,-49,14+2.5,-120-3.5,h)),a.push(St(.6,4.6,4,-49,14+2.5,-116,h)),a.push(St(18.6,.5,12.6,-58,14+4.85,-120,"#3c3c36")),a.push(St(.5,4.6,7,-58+1.5,14+2.5,-120,"#3a3a34")),a.push(St(6,2.4,.6,-63,14+1.7,-120+2.2,"#55554e")),i.push({minX:-58-9.3,maxX:-58+9.3,minY:14,maxY:19,minZ:-120-6.3,maxZ:-120-5.7,tag:"bunker"}),i.push({minX:-58-9.3,maxX:-58+9.3,minY:14,maxY:19,minZ:-120+5.7,maxZ:-120+6.3,tag:"bunker"}),i.push({minX:-58-9.3,maxX:-58-8.7,minY:14,maxY:19,minZ:-126,maxZ:-114,tag:"bunker"}),i.push({minX:-58+8.7,maxX:-58+9.3,minY:14,maxY:19,minZ:-126,maxZ:-121,tag:"bunker"}),i.push({minX:-58+8.7,maxX:-58+9.3,minY:14,maxY:19,minZ:-118,maxZ:-114,tag:"bunker"}),i.push({minX:-58+1.2,maxX:-58+1.8,minY:14,maxY:19,minZ:-120-3.5,maxZ:-120+3.5,tag:"bunker"});for(let u=0;u<5;u++)a.push(St(1.1,1.1,1.1,-64+r()*3,14+1.1,-123+r()*6,"#6a5a3a"));s.neonStrips.push({x:-58+9.35,y:14+3.2,z:-120+.5,sx:.2,sy:.25,sz:3,color:"#ffb35a"})}}function sg(s){const{map:e,heightAt:t,buildings:n,lava:i,rng:a}=s,r=10,o=105,l=new Xe(new xs(13,24),new ht({color:e.lava?16734751:5579298,transparent:!0,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.set(r,t(r,o)+.15,o),s.scene.add(l),s.crater=l;for(let c=0;c<7;c++){const h=c/7*Math.PI*2+.3,f=[];for(let p=0;p<=14;p++){const m=p/14,v=10+m*(58+a()*12),E=Math.sin(m*7+c)*5*m,S=r+Math.cos(h)*v+Math.cos(h+Math.PI/2)*E,T=o+Math.sin(h)*v+Math.sin(h+Math.PI/2)*E;f.push(new R(S,t(S,T)+.25,T))}const u=new yo(f),d=new Eo(u,24,1.4+a()*1.2,5,!1),g=new ht({color:e.lava?16734751:3807764,transparent:!0,opacity:e.lava?.92:.45}),_=new Xe(d,g);s.scene.add(_),i.push(_)}for(let c=0;c<26;c++){const h=a()*Math.PI*2,f=16+a()*60,u=r+Math.cos(h)*f,d=o+Math.sin(h)*f;s.rocks.push(Ms(1+a()*2.4,u,t(u,d)+.3,d,"#3a2a24"))}s.smokeOrigin.set(r,t(r,o)+2,o)}function ag(s,e){const t=e.weather==="neon"?500:380,n=new ot,i=new Float32Array(t*3),a=new Float32Array(t);for(let c=0;c<t;c++)i[c*3]=(Math.random()-.5)*110,i[c*3+1]=Math.random()*60,i[c*3+2]=(Math.random()-.5)*110,a[c]=Math.random();n.setAttribute("position",new pt(i,3));const r=e.weather==="ash"?14209214:e.weather==="neon"?8321535:16752736,o=new di({color:r,size:e.weather==="neon"?.16:.34,transparent:!0,opacity:e.weather==="neon"?.55:.7,depthWrite:!1,blending:e.weather==="neon"?dn:zi}),l=new Bi(n,o);return l.frustumCulled=!1,s.add(l),{points:l,positions:i,seeds:a,count:t}}function rg(s){const{map:e,heightAt:t}=s,n=[[[-95,35],[-45,22],[25,-8],[95,-40]],[[95,-40],[72,25],[38,78],[12,102]],[[-95,35],[-48,68],[10,100]],[[95,-40],[118,-82],[45,-118],[-52,-118]]],i=[],a=[],r=new Ee(e.toxic?"#241a36":e.ruined?"#3d3a33":"#40382e"),o=new Ee(e.toxic?"#ff3ea5":e.ruined?"#555047":"#5a4a38");for(const h of n){const f=new yo(h.map(([p,m])=>new R(p,0,m))),u=46,d=5.5,g=[],_=[];for(let p=0;p<=u;p++){const m=f.getPoint(p/u),v=f.getTangent(p/u).normalize(),E=new R(-v.z,0,v.x).multiplyScalar(d/2),S=t(m.x,m.z)+.1;g.push(new R(m.x+E.x,S,m.z+E.z)),_.push(new R(m.x-E.x,S,m.z-E.z))}for(let p=0;p<u;p++){const m=g[p],v=g[p+1],E=_[p],S=_[p+1],T=[m,E,v,v,E,S];for(const w of T)i.push(w.x,w.y,w.z),a.push(r.r,r.g,r.b);if(p%6===0){const w=m.clone().add(new R(0,.03,0)),x=v.clone().add(new R(0,.03,0)),b=m.clone().add(new R(0,.03,0)).add(new R(0,0,.3));for(const N of[w,x,b])i.push(N.x,N.y,N.z),a.push(o.r,o.g,o.b)}}}const l=new ot;l.setAttribute("position",new Je(i,3)),l.setAttribute("color",new Je(a,3)),l.computeVertexNormals();const c=new Xe(l,new Yt({vertexColors:!0}));c.name="roads",s.scene.add(c)}function og(s){const{map:e,heightAt:t,rocks:n,rng:i}=s,a=[],r=e.lava?"#4a3528":e.ruined?"#4a4034":"#5a4030",o=e.lava?"#4a3a24":e.ruined?"#4a4a38":e.toxic?"#2a3a44":"#3f6b34",l=e.lava?"#5a4428":e.ruined?"#55543f":e.toxic?"#3a4a5a":"#4f7a3c";for(let h=0;h<150;h++){const f=i()*Math.PI*2,u=25+i()*165,d=Math.cos(f)*u,g=Math.sin(f)*u;if(Math.hypot(d-95,g+40)<66||Math.hypot(d-10,g-105)<40||g<-105&&i()<.5)continue;const _=t(d,g);if(_<1)continue;const p=2.2+i()*3.4;e.toxic?(a.push(rn(.06,.09,p,d,_+p/2,g,"#2a2a3a",5)),a.push(St(.7,.08,.08,d,_+p-.2,g,i()<.5?"#ff3ea5":"#35f0ff"))):e.lava&&i()<.45?(a.push(rn(.1,.18,p*.8,d,_+p*.4,g,r,5)),a.push(rn(.05,.08,p*.5,d+.4,_+p*.55,g,r,4)),a.push(rn(.05,.08,p*.45,d-.35,_+p*.5,g,r,4))):(a.push(rn(.12,.2,p,d,_+p/2,g,r,5)),a.push(jl(1+i()*.7,2.2+i()*1.4,d,_+p+.8,g,o,0,i()*3,0,6)),a.push(jl(.8+i()*.5,1.8,d,_+p+2,g,l,0,i()*3,0,6)))}for(let h=0;h<42;h++){const f=i()*Math.PI*2,u=30+i()*160,d=Math.cos(f)*u,g=Math.sin(f)*u;Math.hypot(d-95,g+40)<62||n.push(Ms(.5+i()*2.2,d,t(d,g)+.3,g,e.toxic?"#3a2f50":e.ruined?"#5a5750":"#6a5c4a"))}const c=io(a,new Yt({vertexColors:!0,flatShading:!0}));c&&(c.name="vegetation",s.scene.add(c))}function lg(s,e,t={}){const n=ah(e.id==="neon"?9001:e.id==="posapocalipsis"?4242:1337),i=j0(e),a=[],r=[],o=[],l=[],c=[],h=[],f=[],u=new R,d=[],g=[],_=[],p=new an;p.name="world";const m=new Sa(420,24,14),v=new ei({side:Vt,depthWrite:!1,uniforms:{top:{value:new Ee(e.sky.top)},mid:{value:new Ee(e.sky.mid)},bottom:{value:new Ee(e.sky.bottom)},sunColor:{value:new Ee(e.sun)},sunDir:{value:new R(...e.sky.sunDir||[-.35,.28,.9]).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunColor; uniform vec3 sunDir; varying vec3 vP;
      void main(){
        vec3 n = normalize(vP);
        float h = n.y;
        vec3 c = h > 0.05 ? mix(mid, top, smoothstep(0.05,0.75,h)) : mix(bottom, mid, smoothstep(-0.28,0.05,h));
        float sd = max(dot(n, normalize(sunDir)), 0.0);
        c += sunColor * pow(sd, 10.0) * 0.22;
        c += sunColor * pow(sd, 180.0) * 1.6;
        gl_FragColor = vec4(c,1.0);
      }`}),E=new Xe(m,v);if(E.frustumCulled=!1,p.add(E),e.toxic){const te=new Float32Array(780);for(let X=0;X<260;X++){const re=Math.random()*Math.PI*2,ge=.25+Math.random()*.7,ne=Math.sqrt(1-ge*ge);te[X*3]=Math.cos(re)*ne*390,te[X*3+1]=ge*390,te[X*3+2]=Math.sin(re)*ne*390}const se=new ot;se.setAttribute("position",new pt(te,3));const z=new Bi(se,new di({color:16762613,size:1.4,transparent:!0,opacity:.75,depthWrite:!1}));z.frustumCulled=!1,p.add(z)}const S=new Gc(e.hemi,2365976,1.25);p.add(S);const T=new xa(e.sun,1.9);T.position.set(-80,140,40),p.add(T);const w=new xa(e.accent2?new Ee(e.accent2):16777215,e.toxic?.7:.4);w.position.set(120,60,-90),p.add(w),eg(s,e,i);const x={scene:s,map:e,heightAt:i,buildings:r,rocks:o,windows:l,neonStrips:c,signs:h,lava:f,colliders:a,smokeOrigin:u,rng:n};tg(x),ng(x),ig(x),sg(x),rg(x),og(x);const b=new Yt({vertexColors:!0}),N=io(r,b);N&&(N.name="structures",p.add(N));const C=io(o,new Yt({vertexColors:!0,flatShading:!0}));if(C&&(C.name="rocks",p.add(C)),l.length){const F=new We(1,1,.1),te=new ht({toneMapped:!1}),se=new os(F,te,l.length),z=new et,X=new jn,re=new On;l.forEach((ge,ne)=>{re.set(0,ge.ry,0),X.setFromEuler(re),z.compose(new R(ge.x,ge.y,ge.z),X,new R(ge.sx,ge.sy,.12)),se.setMatrixAt(ne,z),se.setColorAt(ne,new Ee(ge.color))}),se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0),se.name="windows",p.add(se)}if(c.length){const F=new We(1,1,1),te=new ht({toneMapped:!1}),se=new os(F,te,c.length),z=new et,X=new jn;c.forEach((re,ge)=>{z.compose(new R(re.x,re.y,re.z),X,new R(re.sx,re.sy,re.sz)),se.setMatrixAt(ge,z),se.setColorAt(ge,new Ee(re.color))}),se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0),se.name="neon",p.add(se)}const I={};h.slice(0,22).forEach(F=>{I[F.tex]||(I[F.tex]=Q0(F.tex,"#120a1d",F.color));const te=new ht({map:I[F.tex],transparent:!0,side:kt,toneMapped:!1}),se=new Xe(new mi(F.w,F.h),te);se.position.set(F.x,F.y,F.z),se.rotation.y=F.ry,p.add(se)}),s.fog=new go(e.sky.fog,e.sky.fogDensity),s.background=new Ee(e.sky.fog),s.add(p);const U=ag(s,e),W=(F,te)=>a.some(se=>F>se.minX-1&&F<se.maxX+1&&te>se.minZ-1&&te<se.maxZ+1);function L(F,te,se,z,X){let re=0;for(;z.length<F&&re<F*40;){re++;const ge=n()*Math.PI*2,ne=te+n()*(se-te),Se=Math.cos(ge)*ne+(n()-.5)*20,ke=Math.sin(ge)*ne+(n()-.5)*20;Math.hypot(Se,ke)>195||W(Se,ke)||X&&!X(Se,ke)||z.push({x:Se,z:ke,y:i(Se,ke)})}}L(52,18,175,d),L(16,20,165,g,(F,te)=>{const se=Math.hypot(F-95,te+40)<72,z=Math.hypot(F+95,te-35)<55;return!se||z||n()<.2}),e.toxic&&L(7,30,165,_);for(const F of[d,g,_])for(const te of F)te.y<.6&&(te.y=Math.max(te.y,i(te.x*.8,te.z*.8)));function V(F,te){let se=1;const z=te.x-F.x,X=te.y-F.y,re=te.z-F.z;for(const ne of a){let Se=0,ke=1;if(Math.abs(z)<1e-8){if(F.x<ne.minX||F.x>ne.maxX)continue}else{let ye=(ne.minX-F.x)/z,Ie=(ne.maxX-F.x)/z;if(ye>Ie&&([ye,Ie]=[Ie,ye]),Se=Math.max(Se,ye),ke=Math.min(ke,Ie),Se>ke)continue}if(Math.abs(X)<1e-8){if(F.y<ne.minY||F.y>ne.maxY)continue}else{let ye=(ne.minY-F.y)/X,Ie=(ne.maxY-F.y)/X;if(ye>Ie&&([ye,Ie]=[Ie,ye]),Se=Math.max(Se,ye),ke=Math.min(ke,Ie),Se>ke)continue}if(Math.abs(re)<1e-8){if(F.z<ne.minZ||F.z>ne.maxZ)continue}else{let ye=(ne.minZ-F.z)/re,Ie=(ne.maxZ-F.z)/re;if(ye>Ie&&([ye,Ie]=[Ie,ye]),Se=Math.max(Se,ye),ke=Math.min(ke,Ie),Se>ke)continue}Se>.001&&Se<se&&(se=Se)}const ge=12;for(let ne=1;ne<=ge;ne++){const Se=ne/ge;if(Se>=se)break;const ke=F.x+z*Se,ye=F.y+X*Se,Ie=F.z+re*Se;if(ye<i(ke,Ie)){se=Se;break}}return{hit:se<1,t:se,point:new R(F.x+z*se,F.y+X*se,F.z+re*se)}}function $(F,te,se){let z=null;for(const X of a){if(F.y+se<X.minY||F.y>X.maxY)continue;const re=no(F.x,X.minX,X.maxX),ge=no(F.z,X.minZ,X.maxZ),ne=F.x-re,Se=F.z-ge,ke=ne*ne+Se*Se;if(ke<te*te){const ye=Math.sqrt(ke)||1e-4;if(ke>1e-6)F.x+=ne/ye*(te-ye),F.z+=Se/ye*(te-ye);else{const Ie=F.x-X.minX,tt=X.maxX-F.x,Ve=F.z-X.minZ,yt=X.maxZ-F.z,ut=Math.min(Ie,tt,Ve,yt);ut===Ie?F.x=X.minX-te:ut===tt?F.x=X.maxX+te:ut===Ve?F.z=X.minZ-te:F.z=X.maxZ+te}}F.x>X.minX-.4&&F.x<X.maxX+.4&&F.z>X.minZ-.4&&F.z<X.maxZ+.4&&F.y<=X.maxY+.35&&F.y>=X.maxY-.8&&(z=Math.max(z||-1/0,X.maxY))}return z}function k(F,te){return i(F,te)}let ie=0;function Y(F,te){ie+=F;const se=U.positions;for(let z=0;z<U.count;z++){const X=z*3;e.weather==="ember"?(se[X+1]-=F*(1.4+U.seeds[z]*2.2),se[X]+=Math.sin(ie*1.2+z)*F*.5):e.weather==="ash"?(se[X+1]-=F*(2.4+U.seeds[z]*3),se[X]+=Math.sin(ie*.7+z)*F*1.3):se[X+1]-=F*(12+U.seeds[z]*8),se[X+1]<-2&&(se[X+1]=55,se[X]=te.position.x+(Math.random()-.5)*100,se[X+2]=te.position.z+(Math.random()-.5)*100),Math.abs(se[X]-te.position.x)>60&&(se[X]=te.position.x+(Math.random()-.5)*90),Math.abs(se[X+2]-te.position.z)>60&&(se[X+2]=te.position.z+(Math.random()-.5)*90)}if(U.points.geometry.attributes.position.needsUpdate=!0,f.length){const z=.8+Math.sin(ie*2.2)*.12;for(let X=0;X<f.length;X++)f[X].material.opacity=(e.lava?.82:.4)*z;x.crater&&(x.crater.material.opacity=.65+Math.sin(ie*3)*.2)}if(x.smokeOrigin&&!x.smoke){const X=new ot,re=new Float32Array(210);for(let ge=0;ge<70;ge++)re[ge*3]=x.smokeOrigin.x+(Math.random()-.5)*8,re[ge*3+1]=x.smokeOrigin.y+Math.random()*25,re[ge*3+2]=x.smokeOrigin.z+(Math.random()-.5)*8;X.setAttribute("position",new pt(re,3)),x.smoke=new Bi(X,new di({color:e.lava?4866104:6974054,size:5,transparent:!0,opacity:.35,depthWrite:!1})),x.smoke.frustumCulled=!1,s.add(x.smoke)}if(x.smoke){const z=x.smoke.geometry.attributes.position.array;for(let X=0;X<z.length/3;X++)z[X*3+1]+=F*3,z[X*3]+=F*1.2,z[X*3+1]>x.smokeOrigin.y+30&&(z[X*3]=x.smokeOrigin.x+(Math.random()-.5)*8,z[X*3+1]=x.smokeOrigin.y,z[X*3+2]=x.smokeOrigin.z+(Math.random()-.5)*8);x.smoke.geometry.attributes.position.needsUpdate=!0}}function ee(F){for(const te of f)te.material.color.set(F?16738847:3807764),te.material.opacity=F?.95:.45;x.crater&&x.crater.material.color.set(F?16742943:5579298)}return{group:p,heightAt:i,groundAt:k,colliders:a,lootSpots:d,chickenSpots:g,gasMaskSpots:_,update:Y,segmentHit:V,resolveCollisions:$,setEruption:ee,weather:U,dispose(){s.remove(p),s.remove(U.points),x.smoke&&s.remove(x.smoke),s.fog=null,s.background=null,s.traverse(F=>{(F.isMesh||F.isPoints)&&(F.geometry?.dispose?.(),Array.isArray(F.material)?F.material.forEach(te=>te.dispose?.()):F.material?.dispose?.())})}}}const is=(s,e,t,n,i={})=>({name:s,desc:e,cooldown:t,type:n,...i}),Dn={garras:{id:"garras",name:"Furia de Garras",emoji:"🐾",category:"Mítica",rarity:"mythic",damage:46,fireRate:.19,mag:1/0,reserve:1/0,reload:0,spread:.02,range:3.1,melee:!0,moveSpeed:1.12,knockback:2.5,desc:"Zarpazos mecánicos ultra rápidos. La furia de Miguel.",special:is("Frenesí Gatuno","Dash + 5 zarpazos impecables",12,"flurry",{hits:5,damage:46})},bate:{id:"bate",name:"Bate Bonk",emoji:"🏏",category:"Mítica",rarity:"mythic",damage:78,fireRate:1,mag:1/0,reserve:1/0,reload:0,spread:0,range:3.4,melee:!0,stun:1.5,knockback:3,desc:"Le perteneció a Cheems alguna vez... (nostalgia porque falleció)",special:is("Palazo Cheems Gigachat","Manda a volar al rival · 128 de daño",10,"smash",{damage:128,knockback:16})},memes:{id:"memes",name:"Cañón de Memes Añejos",emoji:"🗿",category:"Mítica",rarity:"mythic",damage:80,fireRate:.9,mag:4,reserve:24,reload:2.1,spread:.01,projectileSpeed:42,aoe:1,range:120,desc:"Tira los mejores memes del siglo (el etesech, el Pepe XD y esas vainas)",special:is("Láser Nostálgico","Rayo multicolor: 100 daño + 50/s durante 10s",16,"laser",{damage:100,burn:50,duration:10})},chancla:{id:"chancla",name:"Chancla Divina / Latina",emoji:"🩴",category:"Mítica",rarity:"mythic",damage:80,fireRate:.4,mag:1/0,reserve:1/0,reload:0,spread:0,range:50,melee:!0,rangedMelee:!0,boomerang:!0,knockback:2,desc:"Búmeran cuántico guiado por la ley materna. Viaja 50 m y regresa.",special:is("¡Perdiste el año! 💀","Combo de chanclazos: 300 de daño",14,"smash",{damage:300,knockback:10})},chismes:{id:"chismes",name:"El Lanza-Chismes",emoji:"👵",category:"Mítica",rarity:"mythic",damage:28,fireRate:.16,mag:60,reserve:180,reload:2.8,spread:.09,range:18,flame:!0,moveSpeed:.92,desc:"Lanzallamas artesanal con doña Gladys amarrada en la punta. Fuego y cotilleo continuo.",special:is("Chisme a todo pulmón","Doña Gladys grita: 280 de daño en área",18,"aoe",{damage:280,radius:7})},pio:{id:"pio",name:"Pio-Pío Glock",emoji:"🐤",category:"Pistola",rarity:"common",damage:17,fireRate:.16,mag:15,reserve:90,reload:1.1,spread:.035,range:70,desc:"Pistola de billetes de Monopoly. Arma de emergencia al caer del paracaídas."},m1911:{id:"m1911",name:"M1911",emoji:"🔫",category:"Pistola",rarity:"common",damage:35,fireRate:.24,mag:8,reserve:64,reload:1.3,spread:.025,range:80,desc:"Precisión y cadencia equilibradas para empezar."},beretta:{id:"beretta",name:"Beretta 92FS",emoji:"🔫",category:"Pistola",rarity:"common",damage:35,fireRate:.2,mag:15,reserve:90,reload:1.4,spread:.022,range:80,desc:"La clásica de los policías de película."},glock:{id:"glock",name:"Glock 17",emoji:"🔫",category:"Pistola",rarity:"common",damage:35,fireRate:.17,mag:17,reserve:102,reload:1.2,spread:.028,range:78,desc:"Ligera, fiable y con cargador generoso."},deagle:{id:"deagle",name:"Desert Eagle",emoji:"🦅",category:"Pistola",rarity:"rare",damage:85,fireRate:.62,mag:7,reserve:42,reload:1.9,spread:.02,recoil:.05,range:110,desc:"Alto impacto por bala, pero cadencia lenta y retroceso fuerte."},magnum:{id:"magnum",name:".44 Magnum",emoji:"🤠",category:"Pistola",rarity:"rare",damage:85,fireRate:.72,mag:6,reserve:36,reload:2.1,spread:.018,recoil:.06,range:115,desc:"Seis balas. Seis razones para no asomarte."},uzi:{id:"uzi",name:"Uzi",emoji:"💨",category:"Subfusil",rarity:"common",damage:25,fireRate:.075,mag:32,reserve:160,reload:1.6,spread:.055,range:55,desc:"Cadencia altísima para fundir enemigos de cerca."},mp5:{id:"mp5",name:"MP5",emoji:"💨",category:"Subfusil",rarity:"rare",damage:27,fireRate:.08,mag:30,reserve:150,reload:1.7,spread:.045,range:62,desc:"El equilibrio alemán entre precisión y rociada."},tec9:{id:"tec9",name:"TEC-9",emoji:"💨",category:"Subfusil",rarity:"common",damage:25,fireRate:.07,mag:32,reserve:160,reload:1.8,spread:.065,range:50,desc:"Rocía sin piedad. Precisión opcional."},p90:{id:"p90",name:"P90",emoji:"💨",category:"Subfusil",rarity:"rare",damage:26,fireRate:.07,mag:50,reserve:150,reload:2,spread:.05,range:60,desc:"Cargador de 50. La presión no se acaba."},vector:{id:"vector",name:"KRISS Vector",emoji:"💨",category:"Subfusil",rarity:"epic",damage:30,fireRate:.062,mag:33,reserve:165,reload:1.9,spread:.038,range:58,desc:"Cadencia de vértigo y control sorprendente."},mp7:{id:"mp7",name:"HK MP7",emoji:"💨",category:"Subfusil",rarity:"rare",damage:26,fireRate:.068,mag:40,reserve:160,reload:1.7,spread:.042,range:60,desc:"Compacta, rápida y letal en pasillos."},remington:{id:"remington",name:"Remington 870",emoji:"💥",category:"Escopeta",rarity:"rare",damage:135,fireRate:.85,mag:6,reserve:30,reload:2.6,spread:.14,pellets:8,range:28,desc:"Daño masivo a corta distancia si impactan todos los perdigones."},doblecano:{id:"doblecano",name:"Doble Cañón",emoji:"💥",category:"Escopeta",rarity:"rare",damage:150,fireRate:.6,mag:2,reserve:20,reload:2.2,spread:.16,pellets:10,range:25,desc:"Dos tiros. Suficiente para mandar a alguien al lobby."},benelli:{id:"benelli",name:"Benelli M4",emoji:"💥",category:"Escopeta",rarity:"epic",damage:125,fireRate:.42,mag:7,reserve:35,reload:2.8,spread:.13,pellets:8,range:30,desc:"Semiautomática. El pasillo es tuyo."},spas:{id:"spas",name:"SPAS-12",emoji:"💥",category:"Escopeta",rarity:"epic",damage:140,fireRate:.5,mag:8,reserve:32,reload:3,spread:.135,pellets:9,range:29,desc:"Pompa o semiautomática, tú decides cómo duele."},aa12:{id:"aa12",name:"AA-12",emoji:"💥",category:"Escopeta",rarity:"legendary",damage:75,fireRate:.24,mag:20,reserve:60,reload:3.2,spread:.15,pellets:6,range:26,desc:"Fuego continuo de escopeta para presionar pasillos."},ak47:{id:"ak47",name:"AK-47",emoji:"🎯",category:"Rifle",rarity:"rare",damage:52,fireRate:.105,mag:30,reserve:120,reload:2.2,spread:.04,range:140,desc:"El equilibrio perfecto para terrenos abiertos. Y para todo lo demás."},m4a1:{id:"m4a1",name:"M4A1",emoji:"🎯",category:"Rifle",rarity:"rare",damage:48,fireRate:.095,mag:30,reserve:120,reload:2,spread:.032,range:150,desc:"Precisión y control. El rifle de los que leen las instrucciones."},scar:{id:"scar",name:"SCAR-H",emoji:"🎯",category:"Rifle",rarity:"epic",damage:55,fireRate:.12,mag:20,reserve:100,reload:2.3,spread:.034,range:155,desc:"Pega como camión y suena como trueno."},fal:{id:"fal",name:"FAL",emoji:"🎯",category:"Rifle",rarity:"epic",damage:54,fireRate:.13,mag:20,reserve:100,reload:2.4,spread:.036,range:160,desc:"El rifle de los clásicos. Retroceso con carácter."},g36:{id:"g36",name:"G36",emoji:"🎯",category:"Rifle",rarity:"rare",damage:47,fireRate:.1,mag:30,reserve:120,reload:2.1,spread:.035,range:145,desc:"Ligero, versátil y muy alemán."},m16:{id:"m16",name:"M16A4",emoji:"🎯",category:"Rifle",rarity:"rare",damage:49,fireRate:.11,mag:30,reserve:120,reload:2.2,spread:.03,range:160,desc:"Ráfagas limpias a larga distancia."},famas:{id:"famas",name:"FAMAS",emoji:"🎯",category:"Rifle",rarity:"epic",damage:46,fireRate:.085,mag:25,reserve:125,reload:2,spread:.038,range:140,desc:"Cadencia francesa. Elegancia discutible, resultados claros."},galil:{id:"galil",name:"Galil ACE",emoji:"🎯",category:"Rifle",rarity:"rare",damage:51,fireRate:.1,mag:35,reserve:140,reload:2.3,spread:.042,range:135,desc:"Cargador grande y aguante de sobra."},awm:{id:"awm",name:"AWM",emoji:"🔭",category:"Francotirador",rarity:"legendary",damage:200,headshot:360,fireRate:1.45,mag:5,reserve:25,reload:3,spread:.001,range:320,scope:3,desc:"Puntería milimétrica. 360 a la cabeza y a otra cosa."},barrett:{id:"barrett",name:"Barrett M82",emoji:"🔭",category:"Francotirador",rarity:"legendary",damage:200,headshot:400,fireRate:1.8,mag:10,reserve:30,reload:3.6,spread:.0015,range:340,scope:3.5,desc:"Un rifle antimateria para gente con prisa."},mosin:{id:"mosin",name:"Mosin-Nagant",emoji:"🔭",category:"Francotirador",rarity:"epic",damage:200,headshot:300,fireRate:1.6,mag:5,reserve:25,reload:2.8,spread:.001,range:300,scope:3,desc:"Cerrojo viejo, resultados eternos."},svd:{id:"svd",name:"SVD",emoji:"🔭",category:"Francotirador",rarity:"epic",damage:200,headshot:300,fireRate:1.1,mag:10,reserve:40,reload:2.8,spread:.002,range:290,scope:2.5,desc:"Precisión soviética con cargador de sobra."},vss:{id:"vss",name:"VSS Vintorez",emoji:"🔭",category:"Francotirador",rarity:"epic",damage:200,headshot:300,fireRate:.9,mag:10,reserve:40,reload:2.6,spread:.003,range:250,scope:2.5,silenced:!0,desc:"Silencioso. Nadie sabe de dónde vino el susto."},rpg:{id:"rpg",name:"RPG-7",emoji:"🚀",category:"Pesada",rarity:"legendary",damage:350,fireRate:2.2,mag:1,reserve:6,reload:3.8,spread:.01,range:200,aoe:6,projectileSpeed:38,heavy:!0,desc:"Daño de 350 en área con explosión masiva."},javelin:{id:"javelin",name:"Javelin",emoji:"🚀",category:"Pesada",rarity:"legendary",damage:350,fireRate:3,mag:1,reserve:5,reload:4.2,spread:.01,range:220,aoe:7,projectileSpeed:30,heavy:!0,desc:"Busca el calor de tus problemas y los borra del mapa."},m79:{id:"m79",name:"M79",emoji:"🚀",category:"Pesada",rarity:"epic",damage:350,fireRate:1.9,mag:1,reserve:10,reload:3.2,spread:.015,range:150,aoe:5,projectileSpeed:34,desc:"Lanzagranadas. Un tubo, una lección."},minigun:{id:"minigun",name:"Minigun",emoji:"🌀",category:"Pesada",rarity:"legendary",damage:40,fireRate:.05,mag:150,reserve:300,reload:5,spread:.08,range:130,heavy:!0,moveSpeed:.68,desc:"Fuego sostenido masivo a cambio de movilidad."},m249:{id:"m249",name:"M249 SAW",emoji:"🌀",category:"Pesada",rarity:"epic",damage:40,fireRate:.07,mag:100,reserve:300,reload:4.6,spread:.06,range:130,heavy:!0,moveSpeed:.78,desc:"Aguanta el gatillo. Aguanta el pasillo."},m60:{id:"m60",name:"M60",emoji:"🌀",category:"Pesada",rarity:"rare",damage:40,fireRate:.09,mag:100,reserve:300,reload:4.8,spread:.07,range:125,heavy:!0,moveSpeed:.8,desc:"Vieja escuela. Sigue escupiendo plomo."},pkm:{id:"pkm",name:"PKM",emoji:"🌀",category:"Pesada",rarity:"rare",damage:40,fireRate:.08,mag:100,reserve:300,reload:4.7,spread:.075,range:125,heavy:!0,moveSpeed:.8,desc:"Fuego de supresión con acento eslavo."},bate_beisbol:{id:"bate_beisbol",name:"Bate de béisbol",emoji:"🏏",category:"Melé",rarity:"common",damage:40,fireRate:.7,mag:1/0,reserve:1/0,reload:0,spread:0,range:2.8,melee:!0,desc:"Remates sigilosos o destrucción del entorno."},palanca:{id:"palanca",name:"Palanca",emoji:"🪓",category:"Melé",rarity:"common",damage:55,fireRate:.9,mag:1/0,reserve:1/0,reload:0,spread:0,range:2.9,melee:!0,desc:"Para abrir puertas. Y cráneos."},cuchillo:{id:"cuchillo",name:"Cuchillo de combate",emoji:"🔪",category:"Melé",rarity:"rare",damage:60,fireRate:.45,mag:1/0,reserve:1/0,reload:0,spread:0,range:2.3,melee:!0,desc:"Rápido, silencioso, eficaz."},katana:{id:"katana",name:"Katana",emoji:"⚔️",category:"Melé",rarity:"epic",damage:90,fireRate:.85,mag:1/0,reserve:1/0,reload:0,spread:0,range:3.2,melee:!0,desc:"Corte limpio. Estética impecable."},mazo:{id:"mazo",name:"Mazo",emoji:"🔨",category:"Melé",rarity:"rare",damage:85,fireRate:1.2,mag:1/0,reserve:1/0,reload:0,spread:0,range:2.9,melee:!0,desc:"Lento, contundente, memorable."}},ec="pio",ss={common:["pio","m1911","beretta","glock","uzi","tec9","bate_beisbol","palanca"],rare:["deagle","magnum","mp5","p90","mp7","remington","doblecano","ak47","m4a1","g36","m16","galil","m60","pkm","cuchillo","mazo"],epic:["vector","benelli","spas","scar","fal","famas","mosin","svd","vss","m79","m249","katana"],legendary:["aa12","awm","barrett","rpg","javelin","minigun"],mythic:["garras","bate","memes","chancla","chismes"]},ci={common:{label:"Común",color:"#9fb3c8",glow:10466248},rare:{label:"Raro",color:"#4aa3ff",glow:4891647},epic:{label:"Épico",color:"#b06bff",glow:11561983},legendary:{label:"Legendario",color:"#ffb02e",glow:16756782},mythic:{label:"Mítico",color:"#ff4d6d",glow:16731501}};function tc(s=Math.random,e=0){const t=s()+e;let n=ss.common;return t>.985?n=ss.mythic:t>.93?n=ss.legendary:t>.75?n=ss.epic:t>.4&&(n=ss.rare),n[Math.floor(s()*n.length)]}class cg{constructor(e,t){this.game=e,this.skin=t,this.pos=new R(0,80,0),this.vel=new R,this.yaw=Math.random()*Math.PI*2,this.pitch=.08,this.hp=1e3,this.maxHp=1e3,this.alive=!0,this.grounded=!1,this.dropping=!0,this.dropSpeed=11,this.stun=0,this.fireCooldown=0,this.reloadTimer=0,this.reloading=!1,this.specialCooldown=0,this.aiming=!1,this.attacking=0,this.maskTime=0,this.spawnGuard=0,this.funado=!1,this.slots=[],this.slotIndex=0,this.lastDamage="",this.character=ih(e.scene,t),this.character.root.position.copy(this.pos),this.addWeapon(ec,!0)}get weapon(){return Dn[this.slots[this.slotIndex]?.id]||Dn[ec]}get item(){return this.slots[this.slotIndex]}get chest(){return new R(this.pos.x,this.pos.y+.62,this.pos.z)}get head(){return new R(this.pos.x,this.pos.y+.9,this.pos.z)}addWeapon(e,t=!1){const n=Dn[e];if(!n)return!1;const i=this.slots.find(r=>r.id===e);if(i)return i.mag=n.mag===1/0?1/0:n.mag,i.reserve=n.reserve,this.slotIndex=this.slots.indexOf(i),this.character.setWeapon(e),t||this.game.hud.toast(`${n.name} recargada`),!0;const a={id:e,mag:n.mag===1/0?1/0:n.mag,reserve:n.reserve};return this.slots.length<3?(this.slots.push(a),this.slotIndex=this.slots.length-1):this.slots[this.slotIndex]=a,this.character.setWeapon(e),this.fireCooldown=.15,this.reloading=!1,this.reloadTimer=0,t||this.game.hud.toast(`Equipado: ${n.name}`),!0}switchSlot(e){e<0||e>=this.slots.length||e===this.slotIndex||(this.slotIndex=e,this.character.setWeapon(this.item.id),this.reloading=!1,this.reloadTimer=0,this.fireCooldown=Math.max(this.fireCooldown,.18))}cycleSlot(e=1){if(this.slots.length<2)return;const t=this.slots.length;this.switchSlot((this.slotIndex+e+t)%t)}startReload(){const e=this.weapon;e.melee||this.reloading||this.item.mag>=e.mag||this.item.reserve<=0||(this.reloading=!0,this.reloadTimer=e.reload,this.game.hud.toast("Recargando..."))}finishReload(){const e=this.weapon,t=this.item,n=e.mag-t.mag,i=Math.min(n,t.reserve);t.mag+=i,t.reserve!==1/0&&(t.reserve-=i),this.reloading=!1}heal(e){const t=this.hp;this.hp=Math.min(this.maxHp,this.hp+e),this.hp>t&&this.game.hud.damage(this.pos.clone().add(new R(0,1.3,0)),this.hp-t,"heal")}takeDamage(e,t="El caos",n=""){!this.alive||this.dropping||this.spawnGuard>0||(this.hp-=e,this.lastDamage=n?`${t} con ${n}`:t,this.game.hud.hurt(e),this.game.shake=Math.min(1.2,this.game.shake+e/180),this.game.hud.damage(this.pos.clone().add(new R(0,1.4,0)),e,""),this.hp<=0&&(this.hp=0,this.game.killPlayer(t,n)))}respawnAtSpawn(e){this.pos.set(e.x,e.y,e.z),this.vel.set(0,0,0),this.character.root.position.copy(this.pos)}update(e,t){if(!this.alive)return;const n=this.weapon,i=this.game.world,a=(this.aiming?.0016:.0026)*(this.game.quality==="baja"?1.1:1);if(this.yaw+=t.lookX*a,this.pitch-=t.lookY*a,this.pitch=Math.max(-.52,Math.min(.95,this.pitch)),this.yaw>Math.PI&&(this.yaw-=Math.PI*2),this.yaw<-Math.PI&&(this.yaw+=Math.PI*2),this.aiming=!!t.aiming,this.stun>0&&(this.stun-=e),this.fireCooldown=Math.max(0,this.fireCooldown-e),this.specialCooldown=Math.max(0,this.specialCooldown-e),this.attacking=Math.max(0,this.attacking-e),this.maskTime=Math.max(0,this.maskTime-e),this.spawnGuard=Math.max(0,this.spawnGuard-e),this.reloading&&(this.reloadTimer-=e,this.reloadTimer<=0&&this.finishReload()),this.dropping){const p=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)),m=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw));this.pos.addScaledVector(p,-t.moveY*9*e),this.pos.addScaledVector(m,t.moveX*9*e),this.pos.y-=this.dropSpeed*e;const v=i.heightAt(this.pos.x,this.pos.z);this.game.hud.setDrop(this.pos.y-v),this.pos.y<=v+.02&&(this.pos.y=v,this.dropping=!1,this.grounded=!0,this.spawnGuard=6,this.vel.set(0,0,0),this.game.effects.ring(this.pos,2.2,16765286),this.game.effects.smokeAt(this.pos,9075290,8,2),this.game.hud.setDrop(null),this.game.hud.toast("¡Aterrizaste! 6s de protección. Busca armas."),this.game.shake=Math.max(this.game.shake,.25)),this.character.root.position.copy(this.pos),this.character.root.rotation.y=this.yaw,this.character.rig.rotation.x=-.35,this.character.rig.rotation.z=Math.sin(performance.now()*.003)*.1,this.character.update(e,0,!1,!1,!1);return}this.character.rig.rotation.x=0;const r=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)),o=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=new R;l.addScaledVector(r,-t.moveY),l.addScaledVector(o,t.moveX),l.lengthSq()>1&&l.normalize();let c=5.4;t.sprint&&t.moveY<-.2&&!this.aiming&&(c=8.4),this.aiming&&(c=3),c*=n.moveSpeed||1,this.stun>0&&(c*=.25);const h=l.x*c,f=l.z*c,u=this.grounded?14:4;this.vel.x+=(h-this.vel.x)*Math.min(1,u*e),this.vel.z+=(f-this.vel.z)*Math.min(1,u*e),t.jump&&this.grounded&&this.stun<=0&&(this.vel.y=7.4,this.grounded=!1,this.game.effects.ring(this.pos,.9,16777215)),this.vel.y-=20*e,this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.pos.y+=this.vel.y*e;const d=i.resolveCollisions(this.pos,.34,1.02);let g=i.heightAt(this.pos.x,this.pos.z);if(d!=null&&(g=Math.max(g,d)),this.pos.y<=g?(this.pos.y=g,this.vel.y<-6&&(this.game.effects.ring(this.pos,1.2,16777215),this.game.shake=Math.max(this.game.shake,Math.min(.35,-this.vel.y/40))),this.vel.y=0,this.grounded=!0):this.grounded=!1,this.pos.y<.35){this.pos.y=Math.max(this.pos.y,.1),this._waterT||(this._waterT=0),this._waterT+=e,this._waterT>.6&&(this._waterT=0,this.takeDamage(18,"El agua",""));const p=-this.pos.x,m=-this.pos.z,v=Math.hypot(p,m)||1;this.pos.x+=p/v*e*3,this.pos.z+=m/v*e*3}Math.hypot(this.pos.x,this.pos.z)>230&&(this.pos.x*=.98,this.pos.z*=.98),t.reload&&this.startReload(),t.swapTo!=null?this.switchSlot(t.swapTo):t.swap&&this.cycleSlot(t.swapDir||1),t.firing&&this.fireCooldown<=0&&this.stun<=0&&!this.reloading&&this.game.playerShoot();const _=Math.hypot(this.vel.x,this.vel.z);this.character.root.position.copy(this.pos),this.character.root.rotation.y=this.yaw,this.character.rig.rotation.y=0,this.character.update(e,_,this.grounded,this.aiming,this.attacking>0),this.character.muzzle.getWorldPosition(this.game.tmpMuzzle)}dispose(){this.character.root.parent?.remove(this.character.root)}}const nc=["pio","m1911","uzi","mp5","ak47","m4a1","remington","deagle","mp7","scar","g36","mosin","m249","bate_beisbol","katana","p90"];class hg{constructor(e,t,n,i){this.game=e,this.name=t,this.seed=n,this.alive=!0,this.hp=1e3,this.maxHp=1e3,this.pos=new R(i.x,i.y??0,i.z),this.vel=new R,this.knock=new R,this.yaw=Math.random()*Math.PI*2,this.dropping=i.drop!==!1,this.landed=!this.dropping,this.dropSpeed=10+Math.random()*6,this.stun=0,this.dead=!1,this.target=null,this.targetTimer=Math.random()*.6,this.fireTimer=2+Math.random()*3,this.thinkTimer=Math.random(),this.wander=new R(i.x,0,i.z),this.accuracy=.28+Math.random()*.3,this.aggression=.4+Math.random()*.6,this.speed=3.8+Math.random()*1.5,this.weapon=Dn[nc[Math.floor(Math.random()*nc.length)]],this.meshData=$0(e.scene,n,e.map),this.meshData.group.remove(this.meshData.weaponMesh),sh(this.meshData.weaponMesh);const a=To(this.weapon.id);a.position.set(.3,.48,.15),a.scale.setScalar(.9),this.meshData.group.add(a),this.meshData.weaponMesh=a,this.mesh=this.meshData.group,this.mesh.position.copy(this.pos),this.bobPhase=Math.random()*10,this.lastHitBy=null,this.meleeTimer=0,this.dropping?(this.pos.y=60+Math.random()*25,this.mesh.position.y=this.pos.y):(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z),this.mesh.position.y=this.pos.y)}get chest(){return new R(this.pos.x,this.pos.y+.62,this.pos.z)}get head(){return new R(this.pos.x,this.pos.y+.9,this.pos.z)}takeDamage(e,t,n=""){this.alive&&(this.hp-=e,this.lastHitBy=t,this.stun=Math.max(this.stun,.08),t===this.game.player&&this.game.hud.damage(this.head.clone().add(new R(0,.25,0)),e,e>=100?"crit":""),this.hp<=0&&this.game.killBot(this,t,n))}applyKnockback(e,t){this.knock.addScaledVector(e,t),this.stun=Math.max(this.stun,.35)}update(e){if(!this.alive)return;const t=this.game.world;if(this.dropping){this.pos.y-=this.dropSpeed*e;const f=t.heightAt(this.pos.x,this.pos.z);this.mesh.rotation.z=Math.sin(performance.now()*.004+this.seed)*.18,this.pos.y<=f+.05&&(this.pos.y=f,this.dropping=!1,this.landed=!0,this.mesh.rotation.z=0,this.game.effects.ring(this.pos,1.2,16777215)),this.mesh.position.copy(this.pos);return}this.stun=Math.max(0,this.stun-e),this.fireTimer=Math.max(0,this.fireTimer-e),this.targetTimer-=e,this.thinkTimer-=e,(this.targetTimer<=0||!this.target||!this.target.alive)&&(this.targetTimer=.7+Math.random()*.7,this.target=this.pickTarget());const n=this.game.hazards.safe,i=Math.hypot(this.pos.x-n.x,this.pos.z-n.z)>n.r-3,a=this.game.hazards.lavaAt(this.pos.x,this.pos.z);let r=null,o=this.speed,l=!1;if(i||a)r=new R(n.x,0,n.z),o*=1.25;else if(this.target){const f=this.pos.distanceTo(this.target.pos),u=this.weapon.melee?2.2:Math.min(28,this.weapon.range*.55);if(f>u*1.15)r=this.target.pos;else if(f<u*.55)r=this.pos.clone().add(this.pos.clone().sub(this.target.pos).setY(0).normalize().multiplyScalar(4)),l=!0;else{const d=new R(this.target.pos.x-this.pos.x,0,this.target.pos.z-this.pos.z).normalize(),g=new R(-d.z,0,d.x).multiplyScalar(this.seed%2?1:-1);r=this.pos.clone().add(g.multiplyScalar(5)),l=!0,o*=.7}}else{if(this.thinkTimer<=0){this.thinkTimer=2+Math.random()*3;const f=Math.random()*Math.PI*2,u=20+Math.random()*120;this.wander.set(n.x+Math.cos(f)*u*.5,0,n.z+Math.sin(f)*u*.5)}r=this.wander,o*=.55}if(this.stun>0&&(r=null,o=0),r){const f=new R(r.x-this.pos.x,0,r.z-this.pos.z);f.length()>.5&&(f.normalize(),this.pos.x+=f.x*o*e,this.pos.z+=f.z*o*e,l||(this.yaw=Math.atan2(f.x,f.z)))}if(this.target&&this.fireTimer>0){const f=this.target.pos.x-this.pos.x,u=this.target.pos.z-this.pos.z;let g=Math.atan2(f,u)-this.yaw;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;this.yaw+=g*Math.min(1,e*5)}this.pos.x+=this.knock.x*e,this.pos.z+=this.knock.z*e,this.knock.multiplyScalar(Math.max(0,1-e*7));const c=t.resolveCollisions(this.pos,.32,1);let h=t.heightAt(this.pos.x,this.pos.z);if(c!=null&&(h=Math.max(h,c)),this.pos.y=h,this.pos.y<.4){const f=-this.pos.x,u=-this.pos.z,d=Math.hypot(f,u)||1;this.pos.x+=f/d*e*4,this.pos.z+=u/d*e*4,this.pos.y=t.heightAt(this.pos.x,this.pos.z)}if(this.target&&this.fireTimer<=0&&!this.dropping&&this.stun<=0){const f=this.pos.distanceTo(this.target.pos),u=this.weapon.melee?2.6:this.weapon.range;f<u&&(this.game.botShoot(this,this.target,this.weapon),this.fireTimer=this.weapon.melee?this.weapon.fireRate*(1.2+Math.random()):this.weapon.fireRate*(1.4+Math.random()*1.4))}this.bobPhase+=e*(r&&this.stun<=0?9:2),this.mesh.position.set(this.pos.x,this.pos.y+Math.abs(Math.sin(this.bobPhase))*.02,this.pos.z),this.mesh.rotation.y=this.yaw,this.mesh.rotation.z=this.stun>0?Math.sin(performance.now()*.03)*.12:0,this.meshData.weaponMesh.rotation.x=this.target?-.15:0}pickTarget(){const e=this.game;let t=null,n=50;const i=e.aliveEntities();for(const a of i){if(a===this||!a.alive)continue;const r=this.pos.distanceTo(a.pos);r<n&&(n=r,t=a)}return e.player.alive&&this.pos.distanceTo(e.player.pos)<30&&Math.random()<.3?e.player:t}dispose(){this.mesh.parent?.remove(this.mesh),this.mesh.traverse(e=>{e.geometry?.dispose?.()})}}const ur=56,Di=420,Ni=120,Js=10;function ug(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,220,150,0.9)"),t.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Mo(s);return n.colorSpace=It,n}class dg{constructor(e){this.scene=e,this.tmp=new R,this.tmp2=new R,this.tracerPos=new Float32Array(ur*6),this.tracerCol=new Float32Array(ur*6);const t=new ot;t.setAttribute("position",new pt(this.tracerPos,3)),t.setAttribute("color",new pt(this.tracerCol,3)),this.tracerMesh=new Dc(t,new vo({vertexColors:!0,transparent:!0,opacity:.95,blending:dn,depthWrite:!1})),this.tracerMesh.frustumCulled=!1,e.add(this.tracerMesh),this.tracers=[],this.sparkPos=new Float32Array(Di*3).fill(-999),this.sparkCol=new Float32Array(Di*3),this.sparkVel=new Float32Array(Di*3),this.sparkLife=new Float32Array(Di);const n=new ot;n.setAttribute("position",new pt(this.sparkPos,3)),n.setAttribute("color",new pt(this.sparkCol,3)),this.sparks=new Bi(n,new di({size:.19,vertexColors:!0,transparent:!0,opacity:.95,blending:dn,depthWrite:!1,sizeAttenuation:!0})),this.sparks.frustumCulled=!1,e.add(this.sparks),this.sparkIdx=0,this.smokePos=new Float32Array(Ni*3).fill(-999),this.smokeCol=new Float32Array(Ni*3),this.smokeVel=new Float32Array(Ni*3),this.smokeLife=new Float32Array(Ni);const i=new ot;i.setAttribute("position",new pt(this.smokePos,3)),i.setAttribute("color",new pt(this.smokeCol,3)),this.smoke=new Bi(i,new di({size:1.4,vertexColors:!0,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0})),this.smoke.frustumCulled=!1,e.add(this.smoke),this.smokeIdx=0;const a=ug();this.flashPos=new Float32Array(Js*3).fill(-999);const r=new ot;r.setAttribute("position",new pt(this.flashPos,3)),this.flash=new Bi(r,new di({map:a,size:1.3,transparent:!0,opacity:.9,blending:dn,depthWrite:!1,sizeAttenuation:!0})),this.flash.frustumCulled=!1,e.add(this.flash),this.flashLife=new Float32Array(Js),this.flashIdx=0,this.booms=[];for(let o=0;o<4;o++){const l=new Xe(new zn(1,1),new ht({color:16742959,transparent:!0,opacity:0,blending:dn,depthWrite:!1}));l.visible=!1,e.add(l),this.booms.push({mesh:l,life:0,max:.5,radius:4})}this.rings=[];for(let o=0;o<6;o++){const l=new Xe(new qi(.86,1,28),new ht({color:16765286,transparent:!0,opacity:0,side:kt,blending:dn,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.visible=!1,e.add(l),this.rings.push({mesh:l,life:0,max:.5,radius:4})}this.beams=[];for(let o=0;o<5;o++){const l=new Xe(new st(.05,.05,1,6,1,!0),new ht({color:3535103,transparent:!0,opacity:0,blending:dn,depthWrite:!1}));l.visible=!1,e.add(l),this.beams.push({mesh:l,life:0,max:.2})}}tracer(e,t,n=16765286){const i=this.tracers.length%ur,a=this.tracerPos,r=this.tracerCol;a[i*6]=e.x,a[i*6+1]=e.y,a[i*6+2]=e.z,a[i*6+3]=t.x,a[i*6+4]=t.y,a[i*6+5]=t.z;const o=new Ee(n);r[i*6]=o.r,r[i*6+1]=o.g,r[i*6+2]=o.b,r[i*6+3]=o.r*.15,r[i*6+4]=o.g*.15,r[i*6+5]=o.b*.15;const l=this.tracers.find(c=>c.slot===i);l?(l.life=.12,l.max=.12):this.tracers.push({slot:i,life:.12,max:.12}),this.tracerMesh.geometry.attributes.position.needsUpdate=!0,this.tracerMesh.geometry.attributes.color.needsUpdate=!0}muzzle(e){const t=this.flashIdx++%Js;this.flashPos[t*3]=e.x,this.flashPos[t*3+1]=e.y,this.flashPos[t*3+2]=e.z,this.flashLife[t]=.06,this.flash.geometry.attributes.position.needsUpdate=!0}sparksAt(e,t=16765286,n=6,i=4,a=1){const r=new Ee(t);for(let o=0;o<n;o++){const l=this.sparkIdx++%Di;this.sparkPos[l*3]=e.x,this.sparkPos[l*3+1]=e.y,this.sparkPos[l*3+2]=e.z,this.sparkVel[l*3]=(Math.random()-.5)*i*a,this.sparkVel[l*3+1]=Math.random()*i,this.sparkVel[l*3+2]=(Math.random()-.5)*i*a,this.sparkCol[l*3]=r.r,this.sparkCol[l*3+1]=r.g,this.sparkCol[l*3+2]=r.b,this.sparkLife[l]=.35+Math.random()*.4}this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0}smokeAt(e,t=5592405,n=5,i=2){const a=new Ee(t);for(let r=0;r<n;r++){const o=this.smokeIdx++%Ni;this.smokePos[o*3]=e.x+(Math.random()-.5)*1.2,this.smokePos[o*3+1]=e.y+Math.random()*.6,this.smokePos[o*3+2]=e.z+(Math.random()-.5)*1.2,this.smokeVel[o*3]=(Math.random()-.5)*1.5,this.smokeVel[o*3+1]=i*(.4+Math.random()),this.smokeVel[o*3+2]=(Math.random()-.5)*1.5,this.smokeCol[o*3]=a.r,this.smokeCol[o*3+1]=a.g,this.smokeCol[o*3+2]=a.b,this.smokeLife[o]=.8+Math.random()*.7}this.smoke.geometry.attributes.position.needsUpdate=!0,this.smoke.geometry.attributes.color.needsUpdate=!0}explosion(e,t=5,n=16742959){const i=this.booms.find(r=>r.life<=0)||this.booms[0];i.mesh.position.copy(e),i.mesh.material.color.set(n),i.mesh.material.opacity=.9,i.mesh.scale.setScalar(.6),i.mesh.visible=!0,i.life=i.max=.5,i.radius=t;const a=this.rings.find(r=>r.life<=0)||this.rings[0];a.mesh.position.set(e.x,Math.max(.3,e.y-.4),e.z),a.mesh.material.color.set(n),a.mesh.material.opacity=.9,a.mesh.scale.setScalar(1),a.mesh.visible=!0,a.life=a.max=.6,a.radius=t*1.3,this.sparksAt(e,n,26,12,1.4),this.smokeAt(e,3815994,12,3.5)}ring(e,t=3,n=16765286){const i=this.rings.find(a=>a.life<=0)||this.rings[0];i.mesh.position.set(e.x,Math.max(.25,e.y-.35),e.z),i.mesh.material.color.set(n),i.mesh.material.opacity=.85,i.mesh.scale.setScalar(1),i.mesh.visible=!0,i.life=i.max=.45,i.radius=t}beam(e,t,n=3535103,i=1){const a=this.beams.find(l=>l.life<=0)||this.beams[0],r=this.tmp.copy(e).add(t).multiplyScalar(.5),o=e.distanceTo(t);a.mesh.position.copy(r),a.mesh.scale.set(i,o,i),a.mesh.quaternion.setFromUnitVectors(new R(0,1,0),this.tmp2.copy(t).sub(e).normalize()),a.mesh.material.color.set(n),a.mesh.material.opacity=.9,a.mesh.visible=!0,a.life=a.max=.16}update(e){for(const t of this.tracers)if(t.life-=e,t.life<=0)for(let n=0;n<6;n++)this.tracerCol[t.slot*6+n]=0;this.tracers=this.tracers.filter(t=>t.life>0),this.tracerMesh.geometry.attributes.color.needsUpdate=!0;for(let t=0;t<Di;t++)this.sparkLife[t]<=0||(this.sparkLife[t]-=e,this.sparkVel[t*3+1]-=e*9,this.sparkPos[t*3]+=this.sparkVel[t*3]*e,this.sparkPos[t*3+1]+=this.sparkVel[t*3+1]*e,this.sparkPos[t*3+2]+=this.sparkVel[t*3+2]*e,Math.max(0,this.sparkLife[t]),this.sparkCol[t*3]*=.94,this.sparkCol[t*3+1]*=.94,this.sparkCol[t*3+2]*=.94,this.sparkLife[t]<=0&&(this.sparkPos[t*3+1]=-999));this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(let t=0;t<Ni;t++)this.smokeLife[t]<=0||(this.smokeLife[t]-=e,this.smokePos[t*3]+=this.smokeVel[t*3]*e,this.smokePos[t*3+1]+=this.smokeVel[t*3+1]*e,this.smokePos[t*3+2]+=this.smokeVel[t*3+2]*e,this.smokeCol[t*3]*=.985,this.smokeCol[t*3+1]*=.985,this.smokeCol[t*3+2]*=.985,this.smokeLife[t]<=0&&(this.smokePos[t*3+1]=-999));this.smoke.geometry.attributes.position.needsUpdate=!0,this.smoke.geometry.attributes.color.needsUpdate=!0;for(let t=0;t<Js;t++)this.flashLife[t]<=0||(this.flashLife[t]-=e,this.flashLife[t]<=0&&(this.flashPos[t*3+1]=-999,this.flash.geometry.attributes.position.needsUpdate=!0));for(const t of this.booms){if(t.life<=0)continue;t.life-=e;const n=1-t.life/t.max;t.mesh.scale.setScalar(.6+n*t.radius),t.mesh.material.opacity=Math.max(0,.9*(1-n)),t.life<=0&&(t.mesh.visible=!1)}for(const t of this.rings){if(t.life<=0)continue;t.life-=e;const n=1-t.life/t.max;t.mesh.scale.setScalar(1+n*t.radius),t.mesh.material.opacity=Math.max(0,.85*(1-n)),t.life<=0&&(t.mesh.visible=!1)}for(const t of this.beams)t.life<=0||(t.life-=e,t.mesh.material.opacity=Math.max(0,.9*(t.life/t.max)),t.life<=0&&(t.mesh.visible=!1))}dispose(){this.scene.remove(this.tracerMesh,this.sparks,this.smoke,this.flash);for(const e of this.booms)this.scene.remove(e.mesh);for(const e of this.rings)this.scene.remove(e.mesh);for(const e of this.beams)this.scene.remove(e.mesh)}}function Ta(s,e){const t=new Ee(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let a=0;a<n;a++)i[a*3]=t.r,i[a*3+1]=t.g,i[a*3+2]=t.b;return s.setAttribute("color",new pt(i,3)),s}function ui(s,e,t,n,i,a,r){const o=new We(s,e,t);return Ta(o,r),o.translate(n,i,a),o}function fn(s,e,t,n,i,a=1,r=1,o=1){const l=new zn(s,1);return Ta(l,i),l.scale(a,r,o),l.translate(e,t,n),l}function hi(s,e,t,n,i,a,r=0,o=0,l=0){const c=new Fn(s,e,6);return Ta(c,a),r&&c.rotateX(r),o&&c.rotateY(o),l&&c.rotateZ(l),c.translate(t,n,i),c}function ic(s,e,t,n,i,a,r,o=0){const l=new st(s,e,t,5);return Ta(l,r),o&&l.rotateX(o),l.translate(n,i,a),l}function sc(s=!1){const e=s?"#f4e8d0":"#f7f1e3",t=s?"#ff3b4e":"#e04545",n=[];return n.push(fn(.24,0,.34,0,e,1,.9,1.25)),n.push(fn(.15,0,.55,.2,e,1,.95,1)),n.push(hi(.045,.13,0,.68,.19,t,0,0,0)),n.push(hi(.035,.1,-.04,.67,.18,t,0,0,.3)),n.push(hi(.035,.1,.04,.67,.18,t,0,0,-.3)),n.push(hi(.055,.14,0,.55,.37,"#f2a33a",Math.PI/2,0,0)),n.push(fn(.035,-.055,.59,.29,"#1a1a1a")),n.push(fn(.035,.055,.59,.29,"#1a1a1a")),s&&(n.push(fn(.022,-.055,.61,.32,"#ff2a3a")),n.push(fn(.022,.055,.61,.32,"#ff2a3a"))),n.push(ui(.08,.18,.28,-.22,.36,.02,s?"#d8c8a8":"#e8e0cc")),n.push(ui(.08,.18,.28,.22,.36,.02,s?"#d8c8a8":"#e8e0cc")),n.push(hi(.08,.24,0,.42,-.24,"#e8e0cc",-.9,0,0)),n.push(ic(.018,.018,.16,-.08,.12,0,"#d99a3a")),n.push(ic(.018,.018,.16,.08,.12,0,"#d99a3a")),s&&n.push(ui(.34,.02,.34,0,.05,0,"#ff3b4e")),Ea(n.map(i=>i.index?i.toNonIndexed():i),!1)}function fg(){const s=[],e="#b9c4d0",t="#7d8a99",n="#e8eef4";return s.push(fn(.5,0,.5,0,e,1,.9,1.4)),s.push(fn(.26,0,.86,.5,e,1,1,1)),s.push(hi(.12,.32,0,.86,.82,"#f2a33a",Math.PI/2,0,0)),s.push(fn(.06,-.12,.94,.68,"#1a1a1a")),s.push(fn(.06,.12,.94,.68,"#1a1a1a")),s.push(fn(.09,0,.9,.6,"#ff6b8a")),s.push(ui(.9,.1,.55,-.6,.62,-.05,t)),s.push(ui(.9,.1,.55,.6,.62,-.05,t)),s.push(ui(.5,.08,.3,-.6,.55,-.1,n)),s.push(ui(.5,.08,.3,.6,.55,-.1,n)),s.push(hi(.18,.6,0,.42,-.55,t,-1.1,0,0)),Ea(s.map(i=>i.index?i.toNonIndexed():i),!1)}function pg(s){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=s,t.fillRect(0,0,128,256);for(let i=0;i<90;i++){t.fillStyle=`rgba(255,255,255,${Math.random()*.12})`;const a=Math.random()*128;t.fillRect(a,Math.random()*256,1+Math.random()*2,10+Math.random()*70)}const n=new Mo(e);return n.wrapS=n.wrapT=ca,n.repeat.set(10,1),n}class mg{constructor(e,t,n,i){this.scene=e,this.world=t,this.map=n,this.game=i,this.safe={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40,r:190},this.zonePhase=0,this.erupted=!1,this.lavaRadius=0,this.chickenKills=0,this.funado=!1,this.meteorTimer=16+Math.random()*8,this.meteors=[],this.rockTimer=0,this.rocks=[],this.pigeonTimer=0,this.pigeons=[],this.chickens=[],this.immortalChickens=[],this.zoneTick=0,this.peckTick=0,this._pigeonWarned=!1,this._lastZoneLabel="",this.createChickens(),this.createZoneWall()}createChickens(){const e=new Yt({vertexColors:!0}),t=sc(!1);this.world.chickenSpots.slice(0,12).forEach((n,i)=>{const a=new Xe(t,e);a.position.set(n.x,n.y,n.z),a.rotation.y=Math.random()*Math.PI*2,this.scene.add(a),this.chickens.push({mesh:a,pos:new R(n.x,n.y,n.z),alive:!0,phase:Math.random()*10,target:this.randomChickenTarget(n),speed:.5+Math.random()*.7,immortal:!1,id:i})})}randomChickenTarget(e){const t=Math.random()*Math.PI*2,n=2+Math.random()*8;return new R(e.x+Math.cos(t)*n,0,e.z+Math.sin(t)*n)}hitChicken(e,t,n){let i=null,a=n;const r=o=>{for(const l of o){if(!l.alive)continue;const c=l.pos.clone().add(new R(0,.38,0)),f=c.clone().sub(e).dot(t);if(f<0||f>a)continue;e.clone().addScaledVector(t,f).distanceTo(c)<.42&&(i=l,a=f)}};return r(this.chickens),r(this.immortalChickens),i?{chicken:i,t:a}:null}killChicken(e,t=!1){if(e.alive){if(e.immortal){this.teleportImmortal(e),t&&this.game.hud.toast("Los pollos inmortales no mueren. Solo se enfadan.");return}e.alive=!1,e.mesh.visible=!1,this.game.effects.sparksAt(e.pos.clone().add(new R(0,.4,0)),16777215,12,5,1.2),this.game.effects.smokeAt(e.pos,15261900,5,1.5),this.game.effects.ring(e.pos,1.1,16765286),t&&(this.chickenKills++,this.game.player.chickenKills=this.chickenKills,this.game.hud.chat(`🐔 <b>Pollo juez</b> eliminado · ${this.chickenKills}/10`,"chicken"),this.game.hud.toast(`Pollos jueces: ${this.chickenKills}/10`),this.chickenKills===10&&!this.funado&&this.triggerApocalypse())}}triggerApocalypse(){if(this.funado)return;this.funado=!0;const e=this.game.playerName;this.game.hud.chat(`🐔 <b>A ${e} lo funaron los pollos por hate</b>`,"chicken"),this.game.hud.banner("APOCALIPSIS AVÍCOLA","La justicia de los pollos no descansa",5,"#ffd166"),this.game.hud.toast("🐔 ¡Los pollos inmortales te persiguen!"),this.game.player.funado=!0;const t=new Yt({vertexColors:!0}),n=sc(!0);for(let i=0;i<6;i++){const a=new Xe(n,t),r=this.game.player.pos.clone().add(new R((Math.random()-.5)*8,0,(Math.random()-.5)*8));r.y=this.world.heightAt(r.x,r.z),a.position.copy(r),this.scene.add(a),this.immortalChickens.push({mesh:a,pos:r,alive:!0,immortal:!0,phase:Math.random()*10,teleportTimer:1+Math.random()*2,peckTimer:0,id:i})}}teleportImmortal(e){const t=this.game.player,n=new R(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=new R(Math.cos(t.yaw),0,-Math.sin(t.yaw)),a=n.clone().multiplyScalar(-(3.5+Math.random()*3)).addScaledVector(i,(Math.random()-.5)*5),r=t.pos.x+a.x,o=t.pos.z+a.z,l=this.world.heightAt(r,o);this.game.effects.smokeAt(e.pos.clone().add(new R(0,.3,0)),16765286,6,1.5),e.pos.set(r,l,o),e.mesh.position.copy(e.pos),e.teleportTimer=2.5+Math.random()*2,this.game.effects.sparksAt(e.pos.clone().add(new R(0,.4,0)),16765286,8,4,1)}updateChickens(e){for(const n of this.chickens){if(!n.alive)continue;n.phase+=e*2;const i=n.target.clone().sub(n.pos);i.y=0,i.length()<1.2?n.target=this.randomChickenTarget(n.pos):(i.normalize(),n.pos.x+=i.x*n.speed*e,n.pos.z+=i.z*n.speed*e,n.pos.y=this.world.heightAt(n.pos.x,n.pos.z),n.mesh.rotation.y=Math.atan2(i.x,i.z)),n.mesh.position.set(n.pos.x,n.pos.y+Math.abs(Math.sin(n.phase))*.035,n.pos.z)}if(!this.funado)return;const t=this.game.player;for(const n of this.immortalChickens){if(!n.alive)continue;n.phase+=e*5,n.teleportTimer-=e,n.peckTimer-=e;const i=new R(t.pos.x-n.pos.x,0,t.pos.z-n.pos.z),a=i.length();if(n.teleportTimer<=0){const r=new R(n.pos.x-t.pos.x,0,n.pos.z-t.pos.z).normalize(),o=new R(Math.sin(t.yaw),0,Math.cos(t.yaw));r.dot(o)>.2||a>18?this.teleportImmortal(n):n.teleportTimer=1.2}a>1.2?(i.normalize(),n.pos.x+=i.x*4.6*e,n.pos.z+=i.z*4.6*e,n.pos.y=this.world.heightAt(n.pos.x,n.pos.z),n.mesh.rotation.y=Math.atan2(i.x,i.z)):n.peckTimer<=0&&(n.peckTimer=.65+Math.random()*.35,t.alive&&!t.dropping&&(t.takeDamage(2,"Los Pollos Justicieros","picotazo"),this.game.aimWobble=Math.max(this.game.aimWobble,.9),this.game.shake=Math.max(this.game.shake,.18),this.game.hud.chat("🐔 <b>PICOTAZO</b> · -2 HP · los pollos te están funando","chicken"))),n.mesh.position.set(n.pos.x,n.pos.y+Math.abs(Math.sin(n.phase))*.08,n.pos.z),n.mesh.rotation.z=Math.sin(n.phase*2)*.12}}createZoneWall(){const e=this.map.toxic?"#5affb0":this.map.storm?"#d8d0be":"#ff8a3d",t=pg(e),n=new ht({map:t,color:new Ee(e),transparent:!0,opacity:.16,side:kt,depthWrite:!1}),i=new st(1,1,1,48,1,!0);this.wall=new Xe(i,n),this.wall.position.y=35,this.wall.renderOrder=2,this.scene.add(this.wall);const a=new ht({color:new Ee(e),transparent:!0,opacity:.55,side:kt,depthWrite:!1});this.zoneRing=new Xe(new qi(.985,1,64),a),this.zoneRing.rotation.x=-Math.PI/2,this.zoneRing.position.y=.5,this.scene.add(this.zoneRing)}zoneRadiusAt(e){return e<80?190:e<140?190+-70*((e-80)/60):e<160?120:e<205?120+-45*((e-160)/45):e<220?75:e<260?75+-35*((e-220)/40):e<270?40:e<300?40+-22*((e-270)/30):18}zoneLabel(e){return e<80?`${Math.ceil(80-e)}s`:e<140?"CERRANDO":e<160?`${Math.ceil(160-e)}s`:e<205?"CERRANDO":e<220?`${Math.ceil(220-e)}s`:e<260?"CERRANDO":e<270?`${Math.ceil(270-e)}s`:(e<300,"FINAL")}lavaAt(e,t){return this.erupted?Math.hypot(e-10,t-105)<this.lavaRadius:!1}updateZone(e,t){this.safe.r=this.zoneRadiusAt(t);const n=this.safe;if(this.wall.position.set(n.x,35,n.z),this.wall.scale.set(n.r,80,n.r),this.zoneRing.position.set(n.x,.5,n.z),this.zoneRing.scale.setScalar(n.r),this.zoneRing.material.opacity=.35+Math.sin(t*3)*.12,this.map.lava&&t>=120&&!this.erupted&&(this.erupted=!0,this.lavaRadius=26,this.world.setEruption(!0),this.game.hud.banner("🌋 ERUPCIÓN MASIVA","Rocas ardientes y lava se extienden por el mapa",5.5,"#ff7a2f"),this.game.hud.chat("🌋 <b>El volcán entró en erupción</b> · la lava avanza","meteor"),this.game.scene.fog.color.setHex(4856850),this.game.scene.fog.density=.006,this.game.hud.toast("🌋 ¡Corre! La lava avanza desde el volcán")),this.erupted&&(this.lavaRadius=Math.min(175,26+(t-120)*1.15),this.rockTimer-=e,this.rockTimer<=0&&(this.rockTimer=1.6+Math.random()*2,this.spawnBurningRock())),this.zoneTick-=e,this.zoneTick<=0&&t>80){this.zoneTick=.5;for(const i of this.game.aliveEntities()){if(!i.alive||i.dropping)continue;const a=i===this.game.player,r=Math.hypot(i.pos.x-n.x,i.pos.z-n.z)>n.r,o=this.lavaAt(i.pos.x,i.pos.z);if(r||o){if(a&&this.map.toxic&&this.game.player.maskTime>0&&r&&!o)continue;let c=o?12:this.map.toxic?11:this.map.storm?8:9;a?this.game.player.takeDamage(c,o?"La lava":"La zona",""):this.game.damageEntity(i,c,"La zona","")}}}this.updateRocks(e),this.updateMeteors(e),this.updatePigeons(e)}spawnBurningRock(){const e=Math.random()*Math.PI*2,t=20+Math.random()*120,n=10+Math.cos(e)*t,i=105+Math.sin(e)*t,a=new Xe(new zn(.7+Math.random()*.9,0),new ht({color:16734751,toneMapped:!1}));a.position.set(n+(Math.random()-.5)*12,70,i+(Math.random()-.5)*12),this.scene.add(a),this.rocks.push({mesh:a,vy:26+Math.random()*12,targetY:this.world.heightAt(n,i),life:8,x:n,z:i})}updateRocks(e){for(let t=this.rocks.length-1;t>=0;t--){const n=this.rocks[t];if(n.life-=e,n.mesh.position.y-=n.vy*e,n.mesh.rotation.x+=e*4,n.mesh.rotation.z+=e*3,Math.random()<.6&&this.game.effects.sparksAt(n.mesh.position,16742959,1,2,.4),n.mesh.position.y<=n.targetY){const i=n.mesh.position.clone();this.game.effects.explosion(i,3.5,16734751),this.game.effects.ring(i,3.5,16742959);for(const a of this.game.aliveEntities())a.alive&&a.pos.distanceTo(i)<4&&(a===this.game.player?(this.game.player.takeDamage(24,"Una roca ardiente",""),this.game.shake=Math.max(this.game.shake,.5)):this.game.damageEntity(a,24,"Una roca ardiente",""));this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.rocks.splice(t,1)}else n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.rocks.splice(t,1))}}updateMeteors(e){this.meteorTimer-=e,this.meteorTimer<=0&&(this.meteorTimer=20+Math.random()*16,this.spawnMeteor());for(let t=this.meteors.length-1;t>=0;t--){const n=this.meteors[t];n.t-=e;const i=1-n.t/n.dur;if(n.mesh.position.lerpVectors(n.from,n.to,i),n.mesh.rotation.x+=e*8,Math.random()<.7&&this.game.effects.sparksAt(n.mesh.position,16742959,1,1.5,.3),n.t<=0){const a=n.to.clone();this.game.effects.explosion(a,2.4,16742959),this.game.effects.ring(a,2.2,16742959),this.game.effects.smokeAt(a,3811876,8,2),n.target&&n.target.alive&&(n.target===this.game.player?(this.game.player.takeDamage(5,"El Meteorito de la Humillación",""),this.game.shake=Math.max(this.game.shake,.35)):this.game.damageEntity(n.target,5,"El Meteorito de la Humillación","")),this.game.hud.chat(`☄️ <b>«A ${n.targetName} le cayó un meteorito, qué pena, terrible...»</b>`,"meteor"),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.meteors.splice(t,1)}}}spawnMeteor(){const e=this.game.aliveEntities().filter(o=>o.alive&&!o.dropping);if(!e.length)return;const t=e[Math.floor(Math.random()*e.length)],n=t===this.game.player?this.game.playerName:t.name,i=t.pos.clone();i.y=this.world.heightAt(i.x,i.z)+.2;const a=i.clone().add(new R(12+Math.random()*18,90+Math.random()*30,12+Math.random()*18)),r=new Xe(new zn(.75,0),new ht({color:16742959,toneMapped:!1}));r.position.copy(a),this.scene.add(r),this.meteors.push({mesh:r,from:a,to:i,t:1.8,dur:1.8,target:t,targetName:n})}updatePigeons(e){const t=this.game.player;if(this.pigeonTimer-=e,this.pigeonTimer<=0&&t.alive&&!t.dropping){this.pigeonTimer=.5;const n=Math.hypot(t.pos.x,t.pos.z)>205,i=t.pos.y>42,a=t.pos.y<-2;(n||i||a)&&!this._pigeonWarned&&(this._pigeonWarned=!0,this.game.hud.banner("🚫 ZONA NO AUTORIZADA","Las Palomas Cósmicas han detectado un camper",3.5,"#35f0ff"),this.game.hud.chat("🐦 <b>Las Palomas Cósmicas descienden...</b>","pigeon"),this.spawnPigeons(t.pos.clone(),()=>{t.alive&&(this.game.hud.chat(`🐦 <b>Las Palomas Cósmicas ajusticiaron a ${this.game.playerName} por camper</b>`,"pigeon"),this.game.killPlayer("Las Palomas Cósmicas","justicia divina"))}))}this._pigeonWarned&&t.alive&&!this.pigeons.length&&(this._pigeonWarned=!1);for(let n=this.pigeons.length-1;n>=0;n--){const i=this.pigeons[n];i.t-=e;const a=Math.min(1,1-i.t/i.dur);i.mesh.position.lerpVectors(i.from,i.to,a*a),i.mesh.rotation.z=Math.sin(performance.now()*.02+n)*.3,i.wingL.rotation.z=Math.sin(performance.now()*.03+n)*.9,i.wingR.rotation.z=-Math.sin(performance.now()*.03+n)*.9,i.t<=0&&(i.onDone?.(),this.scene.remove(i.mesh),this.pigeons.splice(n,1),setTimeout(()=>{this._pigeonWarned=!1},1500))}}spawnPigeons(e,t){const n=fg(),i=new Yt({vertexColors:!0});for(let a=0;a<3;a++){const r=new Xe(n,i);r.scale.setScalar(3.2);const o=e.clone().add(new R((a-1)*14+(Math.random()-.5)*6,34+a*5,10+Math.random()*12));r.position.copy(o);const l=new Xe(new We(1.6,.12,.9),new Yt({color:8227481})),c=l.clone();l.position.set(-1,.6,0),c.position.set(1,.6,0),r.add(l,c),this.scene.add(r),this.pigeons.push({mesh:r,from:o,to:e.clone().add(new R(0,1.2,0)),t:1.35+a*.12,dur:1.35,wingL:l,wingR:c,onDone:a===0?t:null})}}update(e,t){this.updateZone(e,t),this.updateChickens(e),this.wall.material.opacity=.12+Math.sin(t*2)*.03}dispose(){this.scene.remove(this.wall,this.zoneRing);for(const e of this.chickens)this.scene.remove(e.mesh);for(const e of this.immortalChickens)this.scene.remove(e.mesh);for(const e of this.meteors)this.scene.remove(e.mesh);for(const e of this.rocks)this.scene.remove(e.mesh);for(const e of this.pigeons)this.scene.remove(e.mesh)}}const ze=s=>document.getElementById(s),gg=s=>(s=Math.max(0,Math.floor(s)),`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`);class xg{constructor({map:e,skin:t,world:n}){this.map=e,this.skin=t,this.world=n,this.el={hud:ze("hud"),feed:ze("feed"),killfeed:ze("killfeed"),alive:ze("alive-count"),timer:ze("match-timer"),mapName:ze("map-name"),zonePill:ze("zone-pill"),zoneLabel:ze("zone-label"),zoneTimer:ze("zone-timer"),zoneIcon:ze("zone-icon"),hpValue:ze("hp-value"),hpFill:ze("hp-fill"),hpLag:ze("hp-lag"),hpTrack:document.querySelector(".hp-track"),weaponIcon:ze("weapon-icon"),weaponName:ze("weapon-name"),weaponCat:ze("weapon-cat"),ammoMag:ze("ammo-mag"),ammoReserve:ze("ammo-reserve"),weaponSlots:ze("weapon-slots"),specialBtn:ze("special-btn"),specialIcon:ze("special-icon"),specialName:ze("special-name"),specialDesc:ze("special-desc"),specialCd:ze("special-cd"),prompt:ze("interact-prompt"),promptText:ze("interact-text"),toast:ze("toast"),vignette:ze("vignette"),floatLayer:ze("float-layer"),banner:ze("event-banner"),bannerTitle:ze("event-title"),bannerSub:ze("event-sub"),drop:ze("drop-info"),altitude:ze("altitude"),crosshair:ze("crosshair"),hitmarker:ze("hitmarker"),statusGloves:ze("status-gloves"),statusZone:ze("status-zone"),statusMask:ze("status-mask"),statusChickens:ze("status-chickens"),statusGuard:ze("status-guard"),playerName:ze("player-name"),skinTag:ze("skin-tag"),minimap:ze("minimap")},this.mctx=this.el.minimap.getContext("2d"),this.floats=[],this.feedLines=[],this.bannerTimer=0,this.toastTimer=0,this.hitTimer=0,this.minimapT=0,this.el.mapName.textContent=e.name.toUpperCase(),this.el.zoneIcon.textContent=e.emoji,this.el.zoneLabel.textContent=e.zoneName,this.el.playerName.textContent=t.gloves?"MIGUEL FURIOSO":"MIGUEL",this.el.skinTag.textContent=t.gloves?"FURIA GATUNA · GUANTES":"EL PANA DE SIEMPRE",this.el.statusGloves.textContent=t.gloves?"🥊 FURIA +15%":"🐾 SIN GUANTES",this.el.statusGloves.style.display="",this.lastHp=1e3}show(){this.el.hud.classList.remove("hidden")}hide(){this.el.hud.classList.add("hidden")}setDrop(e){if(e==null){this.el.drop.classList.add("hidden");return}this.el.drop.classList.remove("hidden"),this.el.altitude.textContent=`${Math.max(0,Math.round(e))} m`}chat(e,t=""){const n=document.createElement("div");for(n.className=`feed-line ${t}`,n.innerHTML=e,this.el.feed.appendChild(n),this.feedLines.push(n);this.feedLines.length>6;)this.feedLines.shift().remove();setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.5s",setTimeout(()=>n.remove(),520),this.feedLines=this.feedLines.filter(i=>i!==n)},11e3)}kill(e,t,n,i=!1){const a=document.createElement("div");a.className="kill-line",a.innerHTML=`<b>${e}</b> <span class="wep">${n}</span> <b>${t}</b>`,this.el.killfeed.appendChild(a);const r=[...this.el.killfeed.children];for(;r.length>5;)r.shift().remove();setTimeout(()=>{a.remove()},8e3),i&&(a.style.borderColor="rgba(255,122,47,0.6)")}banner(e,t="",n=3.2,i="#ffd166"){this.el.bannerTitle.textContent=e,this.el.bannerSub.textContent=t,this.el.bannerTitle.style.color=i,this.el.banner.classList.remove("hidden"),this.bannerTimer=n}toast(e){this.el.toast.textContent=e,this.el.toast.classList.add("show"),this.toastTimer=2.2}setPrompt(e){if(!e){this.el.prompt.classList.add("hidden");return}this.el.prompt.classList.remove("hidden"),this.el.promptText.textContent=e}hitmarker(e=!1){this.el.crosshair.classList.add("hit"),this.el.hitmarker.style.color=e?"#ffd166":"#ff3b4e",this.hitTimer=.12}hurt(e){this.el.vignette.classList.add("hurt"),clearTimeout(this._hurtT),this._hurtT=setTimeout(()=>this.el.vignette.classList.remove("hurt"),140)}damage(e,t,n=""){const i=document.createElement("div");for(i.className=`dmg-float ${n}`,i.textContent=n==="heal"?`+${Math.round(t)}`:`${Math.round(t)}`,this.el.floatLayer.appendChild(i),this.floats.push({el:i,pos:e.clone(),life:.85,vy:0});this.floats.length>18;)this.floats.shift().el.remove()}updateFloats(e,t){const n=new R;for(let i=this.floats.length-1;i>=0;i--){const a=this.floats[i];if(a.life-=e,a.pos.y+=e*1.1,a.life<=0){a.el.remove(),this.floats.splice(i,1);continue}if(n.copy(a.pos).project(t),n.z>1||n.z<-1){a.el.style.opacity="0";continue}const r=(n.x*.5+.5)*innerWidth,o=(-n.y*.5+.5)*innerHeight;a.el.style.left=`${r}px`,a.el.style.top=`${o}px`,a.el.style.opacity=String(Math.min(1,a.life*2.2)),a.el.style.fontSize=(a.life>.6,"")}}update(e,t){const{hp:n,maxHp:i=1e3,ammo:a,reserve:r,weapon:o,slots:l=[],slotIndex:c=0,alive:h,timer:f,specialRemaining:u=0,specialTotal:d=1,reloading:g=!1,zoneDanger:_=!1,maskTime:p=0,funado:m=!1,zoneTime:v="",spawnGuard:E=0}=t,S=Math.max(0,n/i)*100;if(this.el.hpValue.textContent=Math.max(0,Math.ceil(n)),this.el.hpFill.style.width=`${S}%`,this.el.hpLag.style.width=`${S}%`,this.el.hpTrack.classList.toggle("low",n<300),this.el.hpValue.style.color=n<300?"#ff6b6b":n<600?"#ffd166":"#7dffb0",this.lastHp=n,this.el.alive.textContent=h,this.el.timer.textContent=gg(f),this.el.zoneTimer.textContent=v,this.el.zonePill.classList.toggle("danger",_),o){this.el.weaponIcon.textContent=o.emoji,this.el.weaponName.textContent=o.name;const T=ci[o.rarity]||ci.common;if(this.el.weaponCat.textContent=`${o.category.toUpperCase()} · ${T.label.toUpperCase()}`,this.el.weaponCat.style.color=T.color,this.el.weaponIcon.style.borderColor=T.color+"66",this.el.ammoMag.textContent=o.melee?"∞":g?"···":a,this.el.ammoReserve.textContent=o.melee?"∞":r,this.el.ammoMag.style.color=!o.melee&&a===0?"#ff3b4e":"",o.special){this.el.specialBtn.disabled=!1,this.el.specialIcon.textContent=o.emoji,this.el.specialName.textContent=o.special.name,this.el.specialDesc.textContent=o.special.desc;const w=u>0?u/d:0;this.el.specialCd.style.width=`${w*100}%`,this.el.specialBtn.classList.toggle("ready",u<=0)}else this.el.specialBtn.disabled=!0,this.el.specialIcon.textContent="✨",this.el.specialName.textContent="SIN ESPECIAL",this.el.specialDesc.textContent="Busca un arma mítica",this.el.specialCd.style.width="0%",this.el.specialBtn.classList.remove("ready")}this.el.weaponSlots.innerHTML="";for(let T=0;T<3;T++){const w=l[T],x=document.createElement("div");x.className=`wslot ${T===c?"active":""}`,x.innerHTML=w?`<b>${w.emoji}</b><i>${w.name}</i>`:"<b>·</b><i>vacío</i>",this.el.weaponSlots.appendChild(x)}this.el.statusZone.classList.toggle("hidden",!_),this.el.statusGuard.classList.toggle("hidden",!(E>0)),E>0&&(this.el.statusGuard.textContent=`🛡️ PROTEGIDO ${Math.ceil(E)}s`),this.el.statusMask.classList.toggle("hidden",!(p>0)),p>0&&(this.el.statusMask.textContent=`😷 MÁSCARA ${Math.ceil(p)}s`),this.el.statusChickens.classList.toggle("hidden",!m),this.bannerTimer>0&&(this.bannerTimer-=e,this.bannerTimer<=0&&this.el.banner.classList.add("hidden")),this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.el.toast.classList.remove("show")),this.hitTimer>0&&(this.hitTimer-=e,this.hitTimer<=0&&this.el.crosshair.classList.remove("hit")),this.minimapT-=e,this.minimapT<=0&&(this.minimapT=.1,this.drawMinimap(t.minimap||{}))}drawMinimap(e){const t=this.mctx,n=this.el.minimap.width,i=this.el.minimap.height,a=n/420,r=n/2,o=i/2;if(t.clearRect(0,0,n,i),t.fillStyle="#0b0810",t.fillRect(0,0,n,i),t.fillStyle=this.map.toxic?"#1c1230":this.map.ruined?"#33312c":"#2b2a22",t.beginPath(),t.arc(r,o,196*a,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.14)",t.lineWidth=1,t.stroke(),t.fillStyle=this.map.toxic?"rgba(255,62,165,0.18)":"rgba(255,255,255,0.09)",t.fillRect(r+27*a,o+-108*a,136*a,136*a),t.fillStyle="rgba(120,255,140,0.12)",t.beginPath(),t.arc(r-95*a,o+35*a,52*a,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,90,31,0.35)",t.beginPath(),t.arc(r+10*a,o+105*a,30*a,0,Math.PI*2),t.fill(),e.safe){const l=r+e.safe.x*a,c=o+e.safe.z*a;t.save(),t.beginPath(),t.rect(0,0,n,i),t.arc(l,c,e.safe.r*a,0,Math.PI*2,!0),t.fillStyle="rgba(255,40,60,0.16)",t.fill(),t.restore(),t.strokeStyle=this.map.accent,t.lineWidth=1.6,t.beginPath(),t.arc(l,c,e.safe.r*a,0,Math.PI*2),t.stroke()}if(e.hazardRadius>0&&(t.strokeStyle=this.map.accent,t.lineWidth=1.4,t.setLineDash([3,3]),t.beginPath(),t.arc(r+10*a,o+105*a,e.hazardRadius*a,0,Math.PI*2),t.stroke(),t.setLineDash([])),e.loot){t.fillStyle="rgba(255,209,102,0.65)";for(const l of e.loot)t.fillRect(r+l.x*a-1,o+l.z*a-1,2,2)}if(e.enemies){t.fillStyle="#ff4d5e";for(const l of e.enemies)t.beginPath(),t.arc(r+l.x*a,o+l.z*a,1.9,0,Math.PI*2),t.fill()}if(e.player){const l=r+e.player.x*a,c=o+e.player.z*a;t.save(),t.translate(l,c),t.rotate(e.player.yaw),t.fillStyle="#fff",t.beginPath(),t.moveTo(0,-5),t.lineTo(3.6,4),t.lineTo(0,2.2),t.lineTo(-3.6,4),t.closePath(),t.fill(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.beginPath(),t.arc(l,c,6,0,Math.PI*2),t.stroke()}t.strokeStyle="rgba(255,255,255,0.15)",t.strokeRect(.5,.5,n-1,i-1)}destroy(){this.el.feed.innerHTML="",this.el.killfeed.innerHTML="",this.el.floatLayer.innerHTML=""}}class _g{constructor(e,t={}){this.canvas=e,this.onPause=t.onPause||(()=>{}),this.onFirstLock=t.onFirstLock||(()=>{}),this.touch=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&innerWidth<1024,this.keys=new Set,this.lookX=0,this.lookY=0,this.firing=!1,this.aiming=!1,this.locked=!1,this.enabled=!1,this.pressed={jump:!1,reload:!1,swap:!1,special:!1,interact:!1,pause:!1},this.moveX=0,this.moveY=0,this.lookPointer=null,this.stickPointer=null,this.handlers=[],this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.applyTouchVisibility()}on(e,t,n,i){e.addEventListener(t,n,i),this.handlers.push({target:e,type:t,fn:n,opts:i})}applyTouchVisibility(){const e=document.getElementById("touch-ui");e&&e.classList.toggle("hidden",!this.touch),document.body.classList.toggle("is-touch",this.touch)}setEnabled(e){this.enabled=e,e||(this.firing=!1,this.aiming=!1,this.moveX=this.moveY=0,this.keys.clear(),this.pressed={jump:!1,reload:!1,swap:!1,special:!1,interact:!1,pause:!1},this.releaseStick())}requestLock(){if(!this.touch&&document.pointerLockElement!==this.canvas)try{this.canvas.requestPointerLock?.()}catch{}}bindKeyboard(){this.on(window,"keydown",e=>{if(this.enabled&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),!e.repeat))switch(this.keys.add(e.code),e.code){case"Space":this.pressed.jump=!0;break;case"KeyR":this.pressed.reload=!0;break;case"KeyE":this.pressed.interact=!0;break;case"KeyQ":this.pressed.special=!0;break;case"Digit1":this.swapTo=0;break;case"Digit2":this.swapTo=1;break;case"Digit3":this.swapTo=2;break;case"KeyX":this.pressed.swap=!0;break;case"Escape":this.pressed.pause=!0;break;case"KeyP":this.pressed.pause=!0;break;case"KeyM":this.aiming=!this.aiming;break;case"KeyH":this.pressed.interact=!0;break}}),this.on(window,"keyup",e=>this.keys.delete(e.code)),this.on(window,"blur",()=>{this.keys.clear(),this.firing=!1}),this.on(window,"wheel",e=>{this.enabled&&(this.pressed.swap=!0,this.swapDir=e.deltaY>0?1:-1)},{passive:!0})}bindMouse(){this.on(this.canvas,"mousedown",e=>{if(!(!this.enabled||this.touch)){if(!this.locked){this.requestLock();return}e.button===0&&(this.firing=!0),e.button===2&&(this.aiming=!0)}}),this.on(window,"mouseup",e=>{e.button===0&&(this.firing=!1),e.button===2&&(this.aiming=!1)}),this.on(this.canvas,"contextmenu",e=>e.preventDefault()),this.on(window,"mousemove",e=>{!this.enabled||this.touch||!this.locked||(this.lookX+=e.movementX||0,this.lookY+=e.movementY||0)}),this.on(document,"pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked?this.onFirstLock():this.enabled&&!this.touch&&this.onPause()})}bindTouch(){const e=document.getElementById("joystick"),t=document.getElementById("stick"),n=document.getElementById("look-zone");if(!e||!t||!n)return;const i=l=>{const c=e.getBoundingClientRect(),h=c.left+c.width/2,f=c.top+c.height/2;let u=l.clientX-h,d=l.clientY-f;const g=Math.hypot(u,d)||1,_=c.width*.38;g>_&&(u=u/g*_,d=d/g*_),t.style.transform=`translate(${u}px, ${d}px)`,this.moveX=u/_,this.moveY=d/_};this.on(e,"pointerdown",l=>{this.enabled&&(l.preventDefault(),this.stickPointer=l.pointerId,e.setPointerCapture?.(l.pointerId),i(l))}),this.on(e,"pointermove",l=>{l.pointerId===this.stickPointer&&(l.preventDefault(),i(l))});const a=l=>{l.pointerId===this.stickPointer&&this.releaseStick()};this.on(e,"pointerup",a),this.on(e,"pointercancel",a),this.on(n,"pointerdown",l=>{this.enabled&&(l.preventDefault(),this.lookPointer=l.pointerId,n.setPointerCapture?.(l.pointerId),this.lastLook={x:l.clientX,y:l.clientY})}),this.on(n,"pointermove",l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=l.clientX-this.lastLook.x,h=l.clientY-this.lastLook.y;this.lastLook={x:l.clientX,y:l.clientY},this.lookX+=c*.42,this.lookY+=h*.42});const r=l=>{l.pointerId===this.lookPointer&&(this.lookPointer=null)};this.on(n,"pointerup",r),this.on(n,"pointercancel",r);const o=(l,c,h)=>{const f=document.getElementById(l);if(!f)return;this.on(f,"pointerdown",d=>{this.enabled&&(d.preventDefault(),d.stopPropagation(),c(d))});const u=d=>{d.preventDefault(),h?.(d)};this.on(f,"pointerup",u),this.on(f,"pointercancel",u),this.on(f,"pointerleave",u)};o("btn-fire",()=>{this.firing=!0},()=>{this.firing=!1}),o("btn-jump",()=>{this.pressed.jump=!0}),o("btn-reload",()=>{this.pressed.reload=!0}),o("btn-swap",()=>{this.pressed.swap=!0,this.swapDir=1}),o("btn-special",()=>{this.pressed.special=!0}),o("btn-pickup",()=>{this.pressed.interact=!0}),o("btn-aim",()=>{this.aiming=!this.aiming}),this.on(document,"gesturestart",l=>l.preventDefault()),this.on(document,"dblclick",l=>l.preventDefault(),{passive:!1})}releaseStick(){this.stickPointer=null,this.moveX=0,this.moveY=0;const e=document.getElementById("stick");e&&(e.style.transform="translate(0px, 0px)")}sample(){let e=0,t=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),this.touch&&(e+=this.moveX,t+=this.moveY);const n=Math.hypot(e,t);n>1&&(e/=n,t/=n);const i={moveX:e,moveY:t,lookX:this.lookX,lookY:this.lookY,firing:this.firing,aiming:this.aiming,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),jump:this.pressed.jump,reload:this.pressed.reload,swap:this.pressed.swap,swapDir:this.swapDir||1,special:this.pressed.special,interact:this.pressed.interact,pause:this.pressed.pause,swapTo:this.swapTo};return this.lookX=0,this.lookY=0,this.pressed={jump:!1,reload:!1,swap:!1,special:!1,interact:!1,pause:!1},this.swapTo=void 0,this.swapDir=void 0,i}dispose(){for(const e of this.handlers)e.target.removeEventListener(e.type,e.fn,e.opts);this.handlers=[]}}const xt=s=>document.getElementById(s),_t=(s,e)=>s+Math.random()*(e-s),Qs=(s,e,t)=>Math.min(t,Math.max(e,s));function js(s,e,t,n){const i=t.clone().sub(s),a=i.dot(e);if(a<0)return-1;const r=i.lengthSq()-a*a,o=n*n;return r>o?-1:a-Math.sqrt(o-r)}class vg{constructor({renderer:e,map:t,skin:n,quality:i,onRestart:a,onExit:r}){this.renderer=e,this.map=t,this.skin=n,this.quality=i,this.opts={onRestart:a,onExit:r},this.canvas=e.domElement,this.scene=new Cc,this.camera=new sn(70,innerWidth/innerHeight,.08,460),this.time=0,this.state="drop",this.aliveCount=30,this.kills=0,this.damageDealt=0,this.shake=0,this.aimWobble=0,this.tmpMuzzle=new R,this.projectiles=[],this.boomerangs=[],this.burnZones=[],this.ambientTimer=14,this.lastFrame=0,this.fpsAcc=0,this.fpsFrames=0,this.fpsCheck=0,this.downgraded=!1,this.pausedFrom="drop",this.disposed=!1,this.ac=new AbortController,this.playerName=n.gloves?"Miguel Furioso":"Miguel";const o=Math.min(devicePixelRatio||1,2);let l=o;i==="baja"?l=1:i==="auto"&&(l=Math.min(o,matchMedia("(pointer: coarse)").matches?1.4:2)),e.setPixelRatio(l),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=It,e.toneMapping=xn,this.world=lg(this.scene,t,{}),this.effects=new dg(this.scene),this.hud=new xg({map:t,skin:n,world:this.world});const c=[{x:95,z:-40},{x:-95,z:35},{x:0,z:0},{x:45,z:-85}],h=c[Math.floor(Math.random()*c.length)],f=this.findSpawn(18,42,null,0,h);this.player=new cg(this,n),this.player.pos.set(f.x,92,f.z),this.player.yaw=Math.atan2(h.x-f.x,h.z-f.z),this.player.character.root.position.copy(this.player.pos),this.hazards=new mg(this.scene,this.world,t,this),this.bots=[];const u=[...q0].sort(()=>Math.random()-.5);for(let d=0;d<29;d++){const g=this.findSpawn(20,178,f,22),_=new hg(this,u[d%u.length],d+1,{x:g.x,y:60,z:g.z,drop:!0});this.bots.push(_)}this.createPickups(),this.createBotShadows(),this.input=new _g(this.canvas,{onPause:()=>this.pause(),onFirstLock:()=>this.hud.toast("Clic para bloquear el ratón · Esc para pausar")}),xt("pause-btn").onclick=()=>this.pause(),xt("resume-btn").onclick=()=>this.resume(),xt("quit-btn").onclick=()=>this.quit(),xt("again-btn").onclick=()=>this.opts.onRestart?.(),xt("menu-btn").onclick=()=>this.quit(),xt("special-btn").onclick=()=>this.useSpecial(),xt("reload-btn").onclick=()=>this.player.startReload(),addEventListener("resize",()=>this.resize(),{signal:this.ac.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="playing"||this.state==="drop")&&this.pause()},{signal:this.ac.signal}),this.updateCamera(.016,!0),this.hud.show(),this.hud.setDrop(92),this.hud.banner("SALTO EN PARACAÍDAS","Elige dónde aterrizar · WASD / joystick para planear",4,"#35f0ff"),this.hud.chat("💬 <b>Cheems:</b> que empiece el caos",""),this.hud.chat("🐔 <b>Sistema:</b> 12 pollos jueces vigilan el mapa","chicken"),this.input.setEnabled(!0),this.input.requestLock(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}findSpawn(e,t,n,i=0,a=null){const r=this.world;for(let o=0;o<120;o++){const l=Math.random()*Math.PI*2,c=_t(e,t),h=a?a.x:0,f=a?a.z:0,u=h+Math.cos(l)*c,d=f+Math.sin(l)*c;if(Math.hypot(u,d)>190||r.heightAt(u,d)<1.2)continue;let g=!1;for(const _ of r.colliders)if(u>_.minX-2&&u<_.maxX+2&&d>_.minZ-2&&d<_.maxZ+2){g=!0;break}if(!g&&!(n&&Math.hypot(u-n.x,d-n.z)<i))return{x:u,z:d}}return{x:_t(-50,50),z:_t(-50,50)}}createPickups(){this.pickupCap=170,this.pickups=[];const t=new bo(.34,0),n=new ht({toneMapped:!1});this.pickupMesh=new os(t,n,170),this.pickupMesh.instanceMatrix.setUsage(Xo),this.pickupMesh.frustumCulled=!1,this.scene.add(this.pickupMesh);const i=new We(.07,1.7,.07),a=new ht({transparent:!0,opacity:.3,blending:dn,depthWrite:!1,toneMapped:!1});this.beamMesh=new os(i,a,170),this.beamMesh.instanceMatrix.setUsage(Xo),this.beamMesh.frustumCulled=!1,this.scene.add(this.beamMesh);for(const r of this.world.lootSpots)this.addPickup("weapon",r.x,r.z,r.y,tc());for(let r=0;r<14;r++){const o=this.world.lootSpots[(r*7+3)%this.world.lootSpots.length];this.addPickup("health",o.x+_t(-7,7),o.z+_t(-7,7))}for(let r=0;r<14;r++){const o=this.world.lootSpots[(r*5+1)%this.world.lootSpots.length];this.addPickup("ammo",o.x+_t(-7,7),o.z+_t(-7,7))}if(this.map.toxic)for(const r of this.world.gasMaskSpots)this.addPickup("mask",r.x,r.z,r.y);else for(let r=0;r<3;r++){const o=this.world.lootSpots[(r*13+5)%this.world.lootSpots.length];this.addPickup("mask",o.x+_t(-5,5),o.z+_t(-5,5))}for(let r=0;r<this.pickups.length;r++){const o=this.pickups[r],l=this.pickupColor(o);this.pickupMesh.setColorAt(r,l),this.beamMesh.setColorAt(r,l)}this.pickupMesh.instanceColor&&(this.pickupMesh.instanceColor.needsUpdate=!0),this.beamMesh.instanceColor&&(this.beamMesh.instanceColor.needsUpdate=!0),this.updatePickupInstances(0)}pickupColor(e){if(e.type==="health")return new Ee(8257456);if(e.type==="ammo")return new Ee(16765286);if(e.type==="mask")return new Ee(3535103);const t=Dn[e.weaponId];return new Ee(ci[t?.rarity||"common"].glow)}addPickup(e,t,n,i,a){if(this.pickups.length>=this.pickupCap)return null;const r=i??this.world.heightAt(t,n),o={type:e,x:t,z:n,y:r,weaponId:a,taken:!1,phase:Math.random()*Math.PI*2,idx:this.pickups.length};return this.pickups.push(o),o}updatePickupInstances(e){const t=this._dummy||(this._dummy=new gt),n=this._beamDummy||(this._beamDummy=new gt);for(let i=0;i<this.pickupCap;i++){const a=this.pickups[i];if(!a||a.taken){t.position.set(0,-999,0),t.scale.setScalar(1e-4),t.updateMatrix(),this.pickupMesh.setMatrixAt(i,t.matrix),this.beamMesh.setMatrixAt(i,t.matrix);continue}const r=Math.sin(e*2.2+a.phase)*.12;t.position.set(a.x,a.y+.55+r,a.z),t.rotation.set(.25,e*1.2+a.phase,.1),t.scale.setScalar(1),t.updateMatrix(),this.pickupMesh.setMatrixAt(i,t.matrix),n.position.set(a.x,a.y+1.45+r,a.z),n.rotation.set(0,0,0),n.scale.set(1,1,1),n.updateMatrix(),this.beamMesh.setMatrixAt(i,n.matrix)}this.pickupMesh.instanceMatrix.needsUpdate=!0,this.beamMesh.instanceMatrix.needsUpdate=!0}takePickup(e){if(!(!e||e.taken))if(e.type==="weapon"){const t=Dn[e.weaponId];if(!t)return;this.player.addWeapon(e.weaponId),e.taken=!0,this.effects.ring(new R(e.x,e.y,e.z),1.6,ci[t.rarity].glow),this.effects.sparksAt(new R(e.x,e.y+.5,e.z),ci[t.rarity].glow,10,4,1),this.hud.chat(`🎁 <b>${this.playerName}</b> recogió ${t.emoji} ${t.name}`,"")}else if(e.type==="health")this.player.heal(250),e.taken=!0,this.hud.toast("❤️ +250 HP"),this.effects.sparksAt(new R(e.x,e.y+.5,e.z),8257456,10,3,1);else if(e.type==="ammo"){for(const t of this.player.slots){const n=Dn[t.id];n.reserve!==1/0&&(t.reserve=Math.min(n.reserve*2,t.reserve+Math.ceil(n.reserve*.6)))}e.taken=!0,this.hud.toast("📦 Munición recargada")}else e.type==="mask"&&(this.player.maskTime=60,e.taken=!0,this.hud.toast("😷 Máscara de gas · 60s de inmunidad tóxica"),this.hud.chat("😷 <b>Máscara de gas antigua</b> equipada · 60s",""),this.effects.ring(new R(e.x,e.y,e.z),1.4,3535103))}nearestPickup(e=3){let t=null,n=e;const i=this.player.pos;for(const a of this.pickups){if(a.taken||a.type!=="weapon")continue;const r=Math.hypot(a.x-i.x,a.z-i.z);r<n&&Math.abs(a.y-i.y)<3&&(t=a,n=r)}return t}updatePickups(e){if(this.updatePickupInstances(this.time),!this.player.alive||this.player.dropping){this.hud.setPrompt(null);return}if(this._autoT=(this._autoT||0)-e,this._autoT<=0){this._autoT=.18;for(const n of this.pickups)n.taken||n.type==="weapon"||Math.hypot(n.x-this.player.pos.x,n.z-this.player.pos.z)<1.9&&Math.abs(n.y-this.player.pos.y)<2.2&&this.takePickup(n)}const t=this.nearestPickup(3.2);if(this.nearPickup=t,t){const n=Dn[t.weaponId];this.hud.setPrompt(`Recoger ${n.emoji} ${n.name} · ${ci[n.rarity].label}`)}else this.hud.setPrompt(null)}createBotShadows(){const e=new xs(.4,10),t=new ht({color:0,transparent:!0,opacity:.28,depthWrite:!1});this.botShadows=new os(e,t,this.bots.length),this.botShadows.frustumCulled=!1,this.scene.add(this.botShadows)}updateBotShadows(){const e=this._shadowDummy||(this._shadowDummy=new gt);for(let t=0;t<this.bots.length;t++){const n=this.bots[t];e.position.set(n.pos.x,n.pos.y+.03,n.pos.z),e.rotation.x=-Math.PI/2,e.scale.setScalar(n.alive?1:1e-4),e.updateMatrix(),this.botShadows.setMatrixAt(t,e.matrix)}this.botShadows.instanceMatrix.needsUpdate=!0}getAimDir(e=0){const t=new R;return this.camera.getWorldDirection(t),e>0&&(t.x+=(Math.random()-.5)*e*2,t.y+=(Math.random()-.5)*e*2,t.z+=(Math.random()-.5)*e*2,t.normalize()),t}playerShoot(){const e=this.player;if(!e.alive||e.dropping)return;const t=e.weapon,n=e.item;if(!n)return;if(!t.melee&&n.mag<=0){e.startReload();return}if(e.fireCooldown=t.fireRate,e.attacking=.18,e.character.muzzle.getWorldPosition(this.tmpMuzzle),t.melee){t.rangedMelee?this.chanclaThrow(t):this.meleeAttack(t);return}n.mag!==1/0&&n.mag--;const i=t.spread+(e.grounded?0:.025)+(e.aiming?-t.spread*.45:0);if(this.effects.muzzle(this.tmpMuzzle),this.effects.sparksAt(this.tmpMuzzle,16765286,2,2,.4),this.shake=Math.max(this.shake,(t.recoil||.02)*1.2),t.flame)this.flameAttack(t);else if(t.projectileSpeed)this.spawnProjectile(t);else{const a=t.pellets||1,r=t.pellets?t.damage/t.pellets:t.damage;for(let o=0;o<a;o++)this.hitscan(t,Math.max(.002,i),r,o===0)}e.pitch=Qs(e.pitch+(t.recoil||.012)*.5,-.52,.95),e.yaw+=(Math.random()-.5)*(t.recoil||.01)*.5,n.mag===0&&n.reserve>0&&e.startReload()}hitscan(e,t,n,i=!0){const a=this.camera.position.clone(),r=this.getAimDir(t),o=e.range||100,l=a.clone().addScaledVector(r,o),c=this.world.segmentHit(a,l);let h=c.hit?c.t*o:o,f=null,u=!1;for(const p of this.bots){if(!p.alive||p.dropping)continue;const m=js(a,r,p.chest,.42),v=js(a,r,p.head,.24);let E=-1,S=!1;v>0&&(m<0||v<m)?(E=v,S=!0):m>0&&(E=m),E>0&&E<h&&(h=E,f=p,u=S)}let d=null;const g=this.hazards.hitChicken(a,r,Math.min(o,h));g&&(d=g.chicken,h=g.t,f=null);const _=a.clone().addScaledVector(r,h);if(i&&this.effects.tracer(this.tmpMuzzle.clone(),_,ci[e.rarity]?.glow||16765286),f){let p=n,m=!1;u&&e.headshot&&(p=e.headshot,m=!0),e.melee&&this.skin.meleeBonus&&(p*=1+this.skin.meleeBonus),this.applyHit(f,p,e,_,m)}else d?(this.hazards.killChicken(d,!0),this.hud.hitmarker(),this.effects.sparksAt(_,16765286,8,4,1)):c.hit&&this.effects.sparksAt(_,16765286,4,3,.8)}applyHit(e,t,n,i,a){if(e.alive&&(this.damageDealt+=t,e.takeDamage(t,this.player,n.name),this.hud.hitmarker(a),this.effects.sparksAt(i,a?16765286:16734810,a?14:7,5,1),n.stun&&(e.stun=Math.max(e.stun,n.stun)),n.knockback)){const r=new R(e.pos.x-this.player.pos.x,0,e.pos.z-this.player.pos.z).normalize();e.applyKnockback(r,n.knockback)}}meleeAttack(e){const t=this.player,n=t.chest.clone(),i=this.getAimDir(0);let a=!1,r=null,o=e.range+.5;for(const l of this.bots){if(!l.alive||l.dropping)continue;const c=l.chest.clone().sub(n),h=c.length();h>o||(c.normalize(),!(c.dot(i)<.3)&&(r=l,o=h))}if(this.effects.ring(t.pos.clone().addScaledVector(new R(Math.sin(t.yaw),0,Math.cos(t.yaw)),1.2),1.8,16765286),this.shake=Math.max(this.shake,.12),r){let l=e.damage*(1+(this.skin.meleeBonus||0));this.damageDealt+=l,r.takeDamage(l,t,e.name),r.applyKnockback(new R(Math.sin(t.yaw),0,Math.cos(t.yaw)),e.knockback||3),e.stun&&(r.stun=Math.max(r.stun,e.stun)),this.hud.hitmarker(),this.effects.sparksAt(r.chest,16734810,10,5,1),a=!0}a||this.effects.sparksAt(n.clone().addScaledVector(i,1.5),16777215,4,2,.6)}chanclaThrow(e){const t=this.player,n=this.getAimDir(.005),i=t.chest.clone(),a=50;let r=a,o=null,l=null;const c=this.world.segmentHit(i,i.clone().addScaledVector(n,a));c.hit&&(r=c.t*a);for(const d of this.bots){if(!d.alive||d.dropping)continue;const g=js(i,n,d.chest,.45);g>0&&g<r&&(r=g,o=d)}const h=this.hazards.hitChicken(i,n,r);h&&(l=h.chicken,r=h.t,o=null);const f=i.clone().addScaledVector(n,r),u=new Xe(new We(.18,.05,.5),new ht({color:16731546,toneMapped:!1}));if(u.position.copy(t.chest),this.scene.add(u),this.boomerangs.push({mesh:u,from:t.chest.clone(),to:f.clone(),t:0,phase:"out",target:o,chicken:l}),o){const d=e.damage*(1+(this.skin.meleeBonus||0));this.damageDealt+=d,o.takeDamage(d,t,e.name),o.applyKnockback(n.clone().setY(0).normalize(),4),this.hud.hitmarker(),this.effects.sparksAt(f,16731546,12,5,1)}else l&&this.hazards.killChicken(l,!0);this.shake=Math.max(this.shake,.14)}flameAttack(e){const t=this.player,n=t.chest.clone(),i=this.getAimDir(.03),a=this.tmpMuzzle.clone();n.clone().addScaledVector(i,16),this.effects.smokeAt(a,16742959,2,1),this.effects.sparksAt(a.clone().addScaledVector(i,3),16742959,4,3,1.4);for(const r of this.bots){if(!r.alive||r.dropping)continue;const o=r.chest.clone().sub(n);o.length()>18||(o.normalize(),o.dot(i)<.82)||this.world.segmentHit(a,r.chest).hit||(this.damageDealt+=e.damage,r.takeDamage(e.damage,t,e.name),this.hud.hitmarker(),this.effects.sparksAt(r.chest,16742959,3,2,.8))}}spawnProjectile(e){const t=this.getAimDir(e.spread||.01),n=this.tmpMuzzle.clone(),i=e.id==="memes"?11561983:16742959,a=new Xe(new zn(e.id==="memes"?.18:.28,0),new ht({color:i,toneMapped:!1}));a.position.copy(n),this.scene.add(a),this.projectiles.push({mesh:a,pos:n.clone(),vel:t.multiplyScalar(e.projectileSpeed),damage:e.damage,aoe:e.aoe||1.5,weapon:e,life:4,color:i,gravity:e.id==="m79"?9:0})}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){const n=this.projectiles[t];n.life-=e,n.vel.y-=n.gravity*e,n.pos.addScaledVector(n.vel,e),n.mesh.position.copy(n.pos),n.mesh.rotation.x+=e*10,Math.random()<.7&&this.effects.smokeAt(n.pos,n.color,1,.3);let i=n.life<=0;n.pos.y<=this.world.heightAt(n.pos.x,n.pos.z)&&(i=!0);for(const a of this.bots)if(!(!a.alive||a.dropping)&&a.chest.distanceTo(n.pos)<.8){i=!0;break}i||this.world.segmentHit(n.pos.clone().addScaledVector(n.vel,-e),n.pos).hit&&(i=!0),i&&(this.explode(n.pos.clone(),n.aoe,n.damage,n.weapon,n.color),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.projectiles.splice(t,1))}}explode(e,t,n,i,a=16742959){this.effects.explosion(e,t,a),this.shake=Math.max(this.shake,.35);for(const r of this.bots){if(!r.alive||r.dropping)continue;const o=r.chest.distanceTo(e);if(o<t){const l=Math.max(.35,1-o/t),c=n*l;this.damageDealt+=c,r.takeDamage(c,this.player,i.name),r.applyKnockback(r.pos.clone().sub(e).setY(0).normalize(),8*l),this.hud.hitmarker(c>=100)}}this.player.pos.distanceTo(e)<t*.7&&this.player.alive&&this.player.takeDamage(n*.25,"Tu propia explosión",i.name)}useSpecial(){const e=this.player;if(!e.alive||e.dropping)return;const t=e.weapon;if(!(!t.special||e.specialCooldown>0)){if(e.specialCooldown=t.special.cooldown,this.hud.banner(t.special.name.toUpperCase(),t.special.desc,2.2,"#ff4d6d"),this.shake=Math.max(this.shake,.3),e.attacking=.3,t.special.type==="smash"){const n=this.getAimDir(0);let i=null,a=5;for(const r of this.bots){if(!r.alive||r.dropping)continue;const o=r.chest.distanceTo(e.chest);o<a&&(i=r,a=o)}this.effects.ring(e.pos,4,16731501),this.effects.sparksAt(e.pos.clone().add(new R(0,.8,0)),16731501,22,9,1.5),i&&(this.damageDealt+=t.special.damage,i.takeDamage(t.special.damage,e,t.special.name),i.applyKnockback(n.clone().setY(0).normalize(),t.special.knockback||10),i.stun=Math.max(i.stun,1.2),this.effects.explosion(i.chest,2,16731501))}else if(t.special.type==="flurry"){const n=new R(Math.sin(e.yaw),0,Math.cos(e.yaw));e.pos.addScaledVector(n,4.5),e.pos.y=this.world.heightAt(e.pos.x,e.pos.z),this.effects.ring(e.pos,3,16765286),this.effects.beam(e.chest,e.chest.clone().addScaledVector(n,6),16765286,2);for(const i of this.bots)if(!(!i.alive||i.dropping)&&i.chest.distanceTo(e.chest)<6){for(let a=0;a<t.special.hits;a++){const r=t.special.damage;this.damageDealt+=r,i.takeDamage(r,e,t.special.name)}i.applyKnockback(n,8),this.effects.sparksAt(i.chest,16765286,14,6,1.2),this.hud.hitmarker(!0)}}else if(t.special.type==="laser"){const n=this.getAimDir(0),i=this.camera.position.clone(),a=i.clone().addScaledVector(n,120),r=this.world.segmentHit(i,a);let o=r.hit?r.t*120:120,l=null;for(const h of this.bots){if(!h.alive||h.dropping)continue;const f=js(i,n,h.chest,.5);f>0&&f<o&&(o=f,l=h)}const c=i.clone().addScaledVector(n,o);this.effects.beam(this.tmpMuzzle,c,16727717,2.5),this.effects.beam(this.tmpMuzzle,c,3535103,1.2),this.effects.explosion(c,2,11561983),l&&(this.damageDealt+=t.special.damage,l.takeDamage(t.special.damage,e,t.special.name),this.hud.hitmarker(!0)),this.addBurnZone(c,4,t.special.burn,t.special.duration,16727717)}else if(t.special.type==="aoe"){const n=this.getAimDir(0),i=this.camera.position.clone(),a=this.world.segmentHit(i,i.clone().addScaledVector(n,60)),r=i.clone().addScaledVector(n,a.hit?a.t*60:60);r.y=Math.max(r.y,this.world.heightAt(r.x,r.z)),this.explode(r,t.special.radius,t.special.damage,t.special,16742959),this.effects.smokeAt(r,2763306,16,4)}}}addBurnZone(e,t,n,i,a){const r=new Xe(new st(t,t,.08,28,1,!0),new ht({color:a,transparent:!0,opacity:.35,side:kt,depthWrite:!1,blending:dn}));r.position.set(e.x,Math.max(.4,e.y),e.z),this.scene.add(r);const o=new Xe(new qi(t*.92,t,32),new ht({color:a,transparent:!0,opacity:.8,side:kt,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set(e.x,Math.max(.42,e.y+.05),e.z),this.scene.add(o),this.burnZones.push({mesh:r,ring:o,pos:e.clone(),radius:t,dps:n,until:this.time+i,tick:0}),this.hud.toast(`🔥 Zona láser activa · ${n} daño/s durante ${i}s`)}updateBurnZones(e){for(let t=this.burnZones.length-1;t>=0;t--){const n=this.burnZones[t];if(this.time>n.until){this.scene.remove(n.mesh,n.ring),n.mesh.geometry.dispose(),n.mesh.material.dispose(),n.ring.geometry.dispose(),n.ring.material.dispose(),this.burnZones.splice(t,1);continue}if(n.mesh.material.opacity=.25+Math.sin(this.time*6)*.1,n.ring.material.opacity=.5+Math.sin(this.time*4)*.25,n.tick-=e,n.tick<=0){n.tick=.5;for(const i of this.bots)if(i.alive&&i.chest.distanceTo(n.pos)<n.radius){const a=n.dps*.5;this.damageDealt+=a,i.takeDamage(a,this.player,"Láser Nostálgico")}}}}updateBoomerangs(e){for(let t=this.boomerangs.length-1;t>=0;t--){const n=this.boomerangs[t];if(n.t+=e,n.phase==="out"){const i=Math.min(1,n.t/.35);n.mesh.position.lerpVectors(n.from,n.to,i),i>=1&&(n.phase="back",n.t=0)}else{const i=Math.min(1,n.t/.4);if(n.mesh.position.lerpVectors(n.to,this.player.chest,i),i>=1){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.boomerangs.splice(t,1);continue}}n.mesh.rotation.x+=e*22,n.mesh.rotation.y+=e*12}}aliveEntities(){return[this.player,...this.bots]}damageEntity(e,t,n,i){!e||!e.alive||(this.player,e.takeDamage(t,n,i))}botShoot(e,t,n){if(!t||!t.alive)return;const i=e.chest.clone().add(new R(0,.25,0)),a=(t===this.player,t.chest),r=this.world.segmentHit(i,a);if(r.hit&&r.t<.98)return;const o=i.distanceTo(a);let l=e.accuracy;if(t===this.player){const u=Math.hypot(this.player.vel.x,this.player.vel.z);if(l*=Qs(1-u/22,.45,1),this.player.dropping)return}else l*=1;l*=Qs(1.25-o/(n.range*1.4),.25,1),n.melee&&(l=o<n.range?.85:0),n.pellets&&(l*=.55);const c=e.pos.clone().add(new R(Math.sin(e.yaw)*.35,.55,Math.cos(e.yaw)*.35));this.effects.muzzle(c);const h=Math.random()<l,f=h?a.clone():a.clone().add(new R(_t(-2,2),_t(-1,2),_t(-2,2)));if(this.effects.tracer(c,f,16734810),h){let u=n.damage;n.pellets&&(u*=.5),t===this.player?this.player.takeDamage(u,e.name,n.name):t.takeDamage(u*.85,e,n.name),this.effects.sparksAt(a,16734810,4,3,.7)}else this.effects.sparksAt(f,16765286,2,2,.6)}killBot(e,t,n=""){e.alive&&(e.alive=!1,e.mesh.visible=!1,this.aliveCount=Math.max(1,this.aliveCount-1),this.effects.explosion(e.pos.clone().add(new R(0,.5,0)),1.4,16734810),this.effects.smokeAt(e.pos,6969946,6,1.5),this.dropLoot(e),t===this.player?(this.kills++,this.hud.kill(this.playerName,e.name,n||"el caos",!0),this.hud.chat(`💀 <b>${this.playerName}</b> eliminó a <b>${e.name}</b> con ${n}`,""),this.hud.toast(`💀 Eliminaste a ${e.name}`)):t&&t.name?this.hud.kill(t.name,e.name,n||"el caos"):this.hud.kill(t||"☠️ El caos",e.name,n||""),this.aliveCount===1&&this.player.alive&&this.state!=="over"&&setTimeout(()=>this.win(),700))}dropLoot(e){const t=Math.random(),n=e.pos;if(t<.62){const a=tc(Math.random,.12);this.addPickup("weapon",n.x+_t(-.5,.5),n.z+_t(-.5,.5),n.y,a)}else t<.84?this.addPickup("health",n.x+_t(-.5,.5),n.z+_t(-.5,.5),n.y):this.addPickup("ammo",n.x+_t(-.5,.5),n.z+_t(-.5,.5),n.y);const i=this.pickups.length-1;if(i>=0&&i<this.pickupCap){const a=this.pickups[i],r=this.pickupColor(a);this.pickupMesh.setColorAt(i,r),this.beamMesh.setColorAt(i,r),this.pickupMesh.instanceColor&&(this.pickupMesh.instanceColor.needsUpdate=!0),this.beamMesh.instanceColor&&(this.beamMesh.instanceColor.needsUpdate=!0)}}killPlayer(e,t=""){if(!this.player.alive)return;const n=this.aliveCount;this.player.alive=!1,this.player.hp=0,this.aliveCount=Math.max(1,this.aliveCount-1),this.state="over",this.input.setEnabled(!1),document.exitPointerLock?.(),this.player.character.rig.rotation.z=1.45,this.player.character.rig.rotation.x=-.3,this.player.character.rig.position.y=-.15,this.effects.explosion(this.player.pos.clone().add(new R(0,.6,0)),1.6,16726862),this.hud.kill(e,this.playerName,t||"el caos",!0),this.hud.chat(`☠️ <b>${this.playerName}</b> fue eliminado por ${e}`,"event"),this.hud.hide(),this.showEnd({win:!1,placement:n,reason:t?`${e} te eliminó con ${t}`:`${e} te eliminó`})}win(){if(this.state!=="over"){this.state="over",this.input.setEnabled(!1),document.exitPointerLock?.(),this.hud.hide();for(let e=0;e<6;e++)setTimeout(()=>{const t=this.player.pos.clone().add(new R(_t(-6,6),_t(1,5),_t(-6,6)));this.effects.explosion(t,2.5,[16765286,16727717,3535103][e%3])},e*180);this.showEnd({win:!0,placement:1,reason:"El último meme en pie"})}}showEnd({win:e,placement:t,reason:n}){const i=xt("end-screen");xt("end-kicker").textContent=e?"ÚLTIMO EN PIE":"PARTIDA TERMINADA",xt("end-title").textContent=e?"¡VICTORIA!":"ELIMINADO",xt("end-title").classList.toggle("win",e),xt("end-sub").textContent=e?"Miguel sobrevivió al caos, a los pollos y al meteorito.":"Los memes te recordarán. O no.",xt("end-place").textContent=`#${t}`,xt("stat-kills").textContent=this.kills,xt("stat-damage").textContent=Math.round(this.damageDealt),xt("stat-chickens").textContent=this.hazards?.chickenKills||0,xt("stat-time").textContent=`${String(Math.floor(this.time/60)).padStart(2,"0")}:${String(Math.floor(this.time%60)).padStart(2,"0")}`,xt("end-reason").textContent=n,i.classList.remove("hidden")}pause(){this.state!=="playing"&&this.state!=="drop"||(this.pausedFrom=this.state,this.state="paused",this.input.setEnabled(!1),xt("pause").classList.remove("hidden"),document.exitPointerLock?.())}resume(){this.state==="paused"&&(this.state=this.pausedFrom,xt("pause").classList.add("hidden"),this.input.setEnabled(!0),this.input.requestLock())}quit(){this.dispose(),this.opts.onExit?.()}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight,!1)}updateCamera(e,t=!1){const n=this.player;if(!n)return;const i=n.pos.clone().add(new R(0,.9,0)),a=n.aiming&&!n.dropping,r=n.weapon,o=n.dropping?5.8:a?r.scope?1.4:1.9:3,l=n.dropping?72:a?r.scope?38:54:68;this.camera.fov+=(l-this.camera.fov)*Math.min(1,e*9),this.camera.updateProjectionMatrix();const c=this.aimWobble;this.aimWobble=Math.max(0,this.aimWobble-e*1.5);const h=(Math.random()-.5)*c*.05,f=(Math.random()-.5)*c*.05,u=n.yaw+h,d=Qs(n.pitch+f,-.52,.95),g=new R(Math.sin(u)*Math.cos(d),Math.sin(d),Math.cos(u)*Math.cos(d)),_=new R(Math.sin(u),0,Math.cos(u)),p=i.clone().addScaledVector(_,-o*Math.cos(d*.55)).add(new R(0,.55+Math.max(0,d)*1.5+(n.dropping?2.4:0),0)),m=this.world.segmentHit(i,p);m.hit&&p.copy(m.point).lerp(i,.18);const v=this.world.heightAt(p.x,p.z)+.35;p.y<v&&(p.y=v),t?this.camera.position.copy(p):this.camera.position.lerp(p,Math.min(1,e*16)),this.shake=Math.max(0,this.shake-e*3.5),this.shake>.01&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.35,this.camera.position.y+=(Math.random()-.5)*this.shake*.35,this.camera.position.z+=(Math.random()-.5)*this.shake*.35);const E=i.clone().addScaledVector(g,14);this.camera.lookAt(E)}updateHUD(e=1/60){const t=this.player,n=t.weapon,i=t.item,a=this.hazards.safe,r=Math.hypot(t.pos.x-a.x,t.pos.z-a.z)>a.r,o=this.hazards.lavaAt(t.pos.x,t.pos.z),l=(r||o)&&this.time>80;let c=this.hazards.zoneLabel(this.time);this.map.lava&&this.time<120?c=`🌋 ${Math.ceil(120-this.time)}s`:this.hazards.erupted&&(c="LAVA");const h=this.bots.filter(u=>u.alive).map(u=>({x:u.pos.x,z:u.pos.z})),f=[];for(let u=0;u<this.pickups.length;u+=2){const d=this.pickups[u];!d.taken&&d.type==="weapon"&&f.push({x:d.x,z:d.z})}this.hud.update(e,{hp:t.hp,ammo:i?i.mag:0,reserve:i?i.reserve:0,weapon:n,slots:t.slots.map(u=>Dn[u.id]),slotIndex:t.slotIndex,alive:this.aliveCount,timer:this.time,specialRemaining:t.specialCooldown,specialTotal:n.special?.cooldown||1,reloading:t.reloading,zoneDanger:l,maskTime:t.maskTime,spawnGuard:t.spawnGuard,funado:t.funado,zoneTime:c,minimap:{safe:a,hazardRadius:this.hazards.erupted?this.hazards.lavaRadius:0,player:{x:t.pos.x,z:t.pos.z,yaw:Math.PI-t.yaw},enemies:h,loot:f}})}loop(e){if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const t=this.lastFrame?Math.min(.05,(e-this.lastFrame)/1e3):.016;if(this.lastFrame=e,this.state==="playing"||this.state==="drop"){this.time+=t;const n=this.input.sample();n.pause&&this.pause(),this.player.update(t,n),this.state==="drop"&&!this.player.dropping&&(this.state="playing"),this.player.alive&&(n.interact&&this.nearPickup&&this.takePickup(this.nearPickup),n.special&&this.useSpecial());for(const i of this.bots)i.update(t);if(this.hazards.update(t,this.time),this.updateProjectiles(t),this.updateBurnZones(t),this.updateBoomerangs(t),this.updatePickups(t),this.updateBotShadows(),this.effects.update(t),this.ambientTimer-=t,this.ambientTimer<=0){this.ambientTimer=18+Math.random()*16;const i=this.bots.find(a=>a.alive)?.name||"Cheems";this.hud.chat(`💬 <b>${i}:</b> ${Kl[Math.floor(Math.random()*Kl.length)]}`,"")}if(this.state==="over"){this.updateHUD(t),this.updateCamera(t),this.renderer.render(this.scene,this.camera);return}this.updateCamera(t),this.updateHUD(t),this.hud.updateFloats(t,this.camera)}else this.updateCamera(t);if(this.renderer.render(this.scene,this.camera),this.fpsAcc+=t,this.fpsFrames++,this.fpsCheck+=t,this.fpsCheck>2.5){const n=this.fpsFrames/this.fpsAcc;if(this.fpsAcc=0,this.fpsFrames=0,this.fpsCheck=0,n<47&&this.renderer.getPixelRatio()>.85&&!this.downgraded){const i=Math.max(.85,this.renderer.getPixelRatio()-.2);this.renderer.setPixelRatio(i),this.renderer.setSize(innerWidth,innerHeight,!1),this.downgraded=i<=.86,this.hud.toast("⚙️ Calidad ajustada para mantener 60 FPS")}}}dispose(){if(!this.disposed){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.setEnabled(!1),this.input?.dispose?.(),this.ac.abort(),this.hud?.destroy(),this.hazards?.dispose(),this.effects?.dispose();for(const e of this.bots)e.dispose();this.player?.dispose(),this.world?.dispose(),this.scene.clear(),xt("end-screen").classList.add("hidden"),xt("pause").classList.add("hidden"),this.hud?.hide()}}}const Mg=document.getElementById("game-canvas"),ac=document.getElementById("loading"),hs=document.getElementById("load-fill"),rh=document.getElementById("load-title"),oh=document.getElementById("load-sub");let Sn=null,Dt=null,Fi=!1,la={map:null,skin:null,quality:"auto"};const Sg=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&innerWidth<1024;function yg(){return Sn||(Sn=new th({canvas:Mg,antialias:!Sg,powerPreference:"high-performance",stencil:!1,alpha:!1}),Sn.setSize(innerWidth,innerHeight,!1),Sn.outputColorSpace=It,Sn.toneMapping=xn,Sn)}function bg(s="GENERANDO EL CAOS",e="Colocando pollos jueces..."){rh.textContent=s,oh.textContent=e,hs.style.width="8%",ac.classList.remove("hidden");let t=8;const n=setInterval(()=>{t=Math.min(92,t+7+Math.random()*14),hs.style.width=`${t}%`},70);return()=>{clearInterval(n),hs.style.width="100%",setTimeout(()=>ac.classList.add("hidden"),180)}}function Eg(){return new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))}async function lh(s,e,t){if(Fi)return;Fi=!0,la={map:s,skin:e,quality:t},document.getElementById("end-screen").classList.add("hidden"),document.getElementById("pause").classList.add("hidden"),ch.hide();const n=bg("GENERANDO EL CAOS",`${s.name} · ${e.name}`);await Eg(),await new Promise(i=>setTimeout(i,160));try{yg(),Dt&&(Dt.dispose(),Dt=null),Dt=new vg({renderer:Sn,map:s,skin:e,quality:t,onRestart:()=>wg(),onExit:()=>Tg()}),window.__game=Dt,document.body.classList.add("playing")}catch(i){console.error(i),rh.textContent="ALGO EXPLOTÓ",oh.textContent=String(i?.message||i),hs.style.width="100%",hs.style.background="#ff3b4e",Fi=!1;return}n(),Fi=!1}function wg(){Fi||(Dt&&(Dt.dispose(),Dt=null),document.getElementById("end-screen").classList.add("hidden"),document.getElementById("hud").classList.add("hidden"),lh(la.map,la.skin,la.quality))}function Tg(){Fi||(Dt&&(Dt.dispose(),Dt=null),document.body.classList.remove("playing"),document.getElementById("end-screen").classList.add("hidden"),document.getElementById("pause").classList.add("hidden"),document.getElementById("hud").classList.add("hidden"),ch.show())}const ch=new J0({onPlay:(s,e,t)=>lh(s,e,t)});function hh(){Sn&&Sn.setSize(innerWidth,innerHeight,!1),Dt&&Dt.resize()}addEventListener("resize",hh);addEventListener("orientationchange",()=>setTimeout(hh,120));addEventListener("blur",()=>{Dt&&(Dt.state==="playing"||Dt.state==="drop")&&Dt.pause()});document.addEventListener("touchmove",s=>{s.touches.length>1&&s.preventDefault()},{passive:!1});console.log("%cMEME·SHOTER","background:linear-gradient(90deg,#ff7a2f,#ff3ea5);color:#1a0c08;font:900 28px Impact;padding:6px 14px;border-radius:6px");console.log("%c30 jugadores · 1000 HP · 60 FPS móvil · pollos justicieros","color:#ffd166;font:12px system-ui");
