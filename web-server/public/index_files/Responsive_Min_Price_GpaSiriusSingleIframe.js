(function(){var k=this,l=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},aa=function(a){var b=l(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},n=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var t=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},v=function(a){if(!ba.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ca,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(da,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ea,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(fa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ga,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ha,"&#0;"));return a},ca=/&/g,da=/</g,ea=/>/g,fa=/"/g,ga=/'/g,ha=/\x00/g,ba=/[\x00&<>"']/,
w=function(a,b){return a<b?-1:a>b?1:0},ia=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})},ka=function(a){var b=m(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var x=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=
a[d];return c}return[]},oa=function(a,b){a.sort(b||na)},na=function(a,b){return a>b?1:a<b?-1:0};var pa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),qa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<y.length;f++)c=y[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var z;a:{var ra=k.navigator;if(ra){var sa=ra.userAgent;if(sa){z=sa;break a}}z=""};var A=function(a,b){this.width=a;this.height=b};A.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};var B=-1!=z.indexOf("Opera"),C=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"),ta=-1!=z.indexOf("Edge"),D=-1!=z.indexOf("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&-1==z.indexOf("Edge"))&&!(-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"))&&-1==z.indexOf("Edge"),E=-1!=z.toLowerCase().indexOf("webkit")&&-1==z.indexOf("Edge"),ua=function(){var a=k.document;return a?a.documentMode:void 0},F;
a:{var G="",H=function(){var a=z;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ta)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(E)return/WebKit\/(\S+)/.exec(a);if(B)return/(?:Version)[ \/]?(\S+)/.exec(a)}();H&&(G=H?H[1]:"");if(C){var I=ua();if(null!=I&&I>parseFloat(G)){F=String(I);break a}}F=G}
var va=F,wa={},J=function(a){var b;if(!(b=wa[a])){b=0;for(var c=t(String(va)).split("."),d=t(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),q=RegExp("(\\d*)(\\D*)","g");do{var r=p.exec(g)||["","",""],u=q.exec(h)||["","",""];if(0==r[0].length&&0==u[0].length)break;b=w(0==r[1].length?0:parseInt(r[1],10),0==u[1].length?0:parseInt(u[1],10))||w(0==r[2].length,0==u[2].length)||w(r[2],u[2])}while(0==b)}b=wa[a]=0<=b}return b},
xa=k.document,K=xa&&C?ua()||("CSS1Compat"==xa.compatMode?parseInt(va,10):5):void 0;var ya=!C||9<=Number(K);!D&&!C||C&&9<=Number(K)||D&&J("1.9.1");C&&J("9");var Aa=function(a,b){pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:za.hasOwnProperty(d)?a.setAttribute(za[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},za={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Ca=function(a,
b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!ya&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',v(g.name),'"');if(g.type){f.push(' type="',v(g.type),'"');var h={};qa(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:"array"==l(g)?f.className=g.join(" "):Aa(f,g));2<d.length&&Ba(e,f,d);return f},Ba=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];if(!aa(f)||n(f)&&0<f.nodeType)d(f);
else{var g;a:{if(f&&"number"==typeof f.length){if(n(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==l(f)){g="function"==typeof f.item;break a}}g=!1}la(g?ma(f):f,d)}}};var Da=["top","right","bottom","left"],L=function(a,b,c,d){var e={};e.element=a;a={type:"element"};a.spec=e;if(4!=c.length)throw Error("The anchors should be an array of length 4.");b&&(a.alignments=b);for(b=0;b<Da.length;++b)c[b]&&(a[Da[b]]=c[b]);void 0!==d&&(a.z_index=d);return a};var M=function(a){M[" "](a);return a};M[" "]=function(){};var Ea=!C||9<=Number(K),Fa=C&&!J("9");!E||J("528");D&&J("1.9b")||C&&J("8")||B&&J("9.5")||E&&J("528");D&&!J("8")||C&&J("9");var N=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.u=!1};N.prototype.stopPropagation=function(){this.u=!0};N.prototype.preventDefault=function(){this.defaultPrevented=!0};var O=function(a,b){N.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.b=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(D){var f;a:{try{M(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=E||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=E||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,
this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.b=a;a.defaultPrevented&&this.preventDefault()}};
(function(){function a(){}a.prototype=N.prototype;O.H=N.prototype;O.prototype=new a;O.L=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return N.prototype[c].apply(a,e)}})();O.prototype.stopPropagation=function(){O.H.stopPropagation.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};
O.prototype.preventDefault=function(){O.H.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ga="closure_listenable_"+(1E6*Math.random()|0),Ha=0;var Ia=function(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.j=!!d;this.l=e;this.key=++Ha;this.c=this.i=!1},Ja=function(a){a.c=!0;a.listener=null;a.f=null;a.src=null;a.l=null};var P=function(a){this.src=a;this.a={};this.v=0};P.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.v++);var g;a:{for(g=0;g<a.length;++g){var h=a[g];if(!h.c&&h.listener==b&&h.j==!!d&&h.l==e)break a}g=-1}-1<g?(b=a[g],c||(b.i=!1)):(b=new Ia(b,this.src,f,!!d,e),b.i=c,a.push(b));return b};var Q="closure_lm_"+(1E6*Math.random()|0),R={},Ka=0,S=function(a,b,c,d,e){if("array"==l(b))for(var f=0;f<b.length;f++)S(a,b[f],c,d,e);else if(c=La(c),a&&a[Ga])a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=T(a);g||(a[Q]=g=new P(a));c=g.add(b,c,!1,d,e);if(!c.f){d=Ma();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Na(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Ka++}}},Ma=function(){var a=Oa,b=Ea?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Na=function(a){return a in R?R[a]:R[a]="on"+a},Qa=function(a,b,c,d){var e=!0;if(a=T(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.j==c&&!f.c&&(f=Pa(f,d),e=e&&!1!==f)}return e},Pa=function(a,b){var c=a.listener,d=a.l||a.src;if(a.i&&"number"!=typeof a&&a&&!a.c){var e=a.src;if(e&&e[Ga])e.M(a);else{var f=a.type,g=a.f;e.removeEventListener?
e.removeEventListener(f,g,a.j):e.detachEvent&&e.detachEvent(Na(f),g);Ka--;if(f=T(e)){var g=a.type,h;if(h=g in f.a){h=f.a[g];var p=x(h,a),q;(q=0<=p)&&Array.prototype.splice.call(h,p,1);h=q}h&&(Ja(a),0==f.a[g].length&&(delete f.a[g],f.v--));0==f.v&&(f.src=null,e[Q]=null)}else Ja(a)}}return c.call(d,b)},Oa=function(a,b){if(a.c)return!0;if(!Ea){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new O(e,this);d=!0;if(!(0>e.keyCode||void 0!=
e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.u&&0<=g;g--){c.currentTarget=e[g];var h=Qa(e[g],f,!0,c),d=d&&h}for(g=0;!c.u&&g<e.length;g++)c.currentTarget=e[g],h=Qa(e[g],f,!1,c),d=d&&h}return d}return Pa(a,new O(b,this))},T=function(a){a=a[Q];return a instanceof P?a:null},U="__closure_events_fn_"+(1E9*Math.random()>>>0),La=function(a){if("function"==
l(a))return a;a[U]||(a[U]=function(b){return a.handleEvent(b)});return a[U]};var Sa=function(a,b,c){var d=Ra[c];if(!d){var e=ia(c),d=e;void 0===a.style[e]&&(e=(E?"Webkit":D?"Moz":C?"ms":B?"O":null)+ka(e),void 0!==a.style[e]&&(d=e));Ra[c]=d}(c=d)&&(a.style[c]=b)},Ra={},Ta=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=E&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}C&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+
a.body.clientTop)}return new A(e.right-e.left,e.bottom-e.top)}return new A(b,c)};var Ua=function(a){this.g=a};
Ua.prototype.h=function(){var a;a=document;(a=m("cbprotection")?a.getElementById("cbprotection"):"cbprotection")&&a.parentNode&&a.parentNode.removeChild(a);if(a="true"!=this.g.google_template_data.adData[0].siriusFlagEnableNewBorderProtection){a=this.g;var b;b=a.google_template_data.rendering_settings;"object"!=l(b)?b=null:(b=b.format,b=m(b)?b:null);if(!m(b))if(a=a.google_template_data.adData[0].format,m(a)||null==a)b=a;else throw Error("Gets non string value from: format");a="interstitial_mb"==b}a&&
(a=this.g.google_template_data.adData[0].siriusFlagCloseButtonClickProtectorSize,a=isNaN(a)?100:parseInt(a,10),0<a&&Va(a))};var Va=function(a){var b=document.createElement("DIV");b.id="cbprotection";b.style.position="fixed";b.style.top="0";b.style.left="0";b.style.width=a+"px";b.style.height=a+"px";b.style.zIndex=3E3;S(b,"click",function(a){a.stopPropagation()});document.body.appendChild(b)};var Wa=function(a,b){var c=a.google_template_data.adData[0],d=document.getElementById("adContent"),e=c.Product_0_url,f="_blank"==a.link_target?"_blank":"_top",g=new ClickManager(a),e=window.addClickOverlay(d,e,f);g.setupClickHandler(e,"Product_0_url");for(var d=b?b:6,h=0;h<d;++h){var p=document.getElementById("product"+h);if(p){var q="Product_"+h+"_url",e=c[q],e=window.addClickOverlay(p,e,f);e.style.zIndex=1001;g.setupClickHandler(e,q)}}(new Ua(a)).h()};var V=function(a,b,c){if(2!=b.length||2!=c.length||0>=b[0]||b[1]<b[0]||0>=c[0]||c[1]<c[0])throw Error("Invalid row / column range setting.");this.F=a;this.G=b;this.B=c;this.w=this.m=this.A=this.o=0;this.C=this.D=1;this.s=0},Xa=function(a,b,c,d){this.I=a;this.J=b;this.rowIndex=c;this.K=d},Ya=function(a){a.o=4;a.A=4;return a},Za=function(a){a.m=1;a.w=1;return a},W=function(a,b,c){a.D=b;a.C=c;return a},$a=function(a,b){a.s=b;return a};
V.prototype.h=function(a){var b=ab(this),c;var d=this.F;b:{c=9==d.nodeType?d:d.ownerDocument||d.document;if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(d,null))){c=c.display||c.getPropertyValue("display")||"";break b}c=""}c||(c=d.currentStyle?d.currentStyle.display:null);if("none"!=(c||d.style&&d.style.display))c=Ta(d);else{c=d.style;var e=c.display,f=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";d=Ta(d);c.display=e;c.position=
g;c.visibility=f;c=d}for(e=0;e<b.length;++e){var f=b[e][0],d=b[e][1],g=Math.floor((c.width-(2*this.m+this.o*(d-1)))/d),h=Math.floor((c.height-(2*this.w+this.A*(f-1)))/f);if(g=g<this.D||h<this.C?null:new A(g,h)){b=f;c=g;e=this.w;for(f=0;f<b;f++){g=this.m;for(h=0;h<d;h++){var p=Ca("DIV"),q=p,r={position:"absolute",top:e+"px",left:g+"px",width:c.width+"px",height:c.height+"px"};if(m(r))Sa(q,void 0,r);else{var u=void 0;for(u in r)Sa(q,r[u],u)}this.F.appendChild(p);a(new Xa(p,d,f,h));g+=c.width+this.o}e+=
c.height+this.A}break}}};var ab=function(a){for(var b=[],c=a.G[0];c<=a.G[1];++c)for(var d=a.B[0];d<=a.B[1];++d)(0>=a.s||d*c<=a.s)&&b.push([c,d]);oa(b,function(a,b){return b[0]*b[1]-a[0]*a[1]});return b};var bb=function(a){return/^(?:|#|0x)(?:[a-fA-F\d]{3}){1,2}$/.test(a)?"#"+a.replace(/^#|0x/,""):""};var cb=function(a){return a.google_template_data.adData[0]},db=function(a){var b=cb(a);b.logoBackupText||(b.logoBackupText=b.Product_0_merchant?b.Product_0_merchant:a.visible_url);b.callToAction||(b.callToAction=b.Headline_0_cta);b.disclaimer||(b.disclaimer=b.Headline_0_disclaimer);b.promoText||(b.promoText=b.Headline_0_txt);b.Design_0_logoImageUrl&&(b.logo=b.Design_0_logoImageUrl);b.mainColor||b.Design_0_bgColor||b.secondaryColor?b.Design_0_bgColor?b.mainColor=b.Design_0_bgColor:b.mainColor||(b.mainColor=
b.secondaryColor):b.mainColor="#FFFFFF";b.accentColor||b.primaryColor?b.accentColor||(b.accentColor=b.primaryColor):b.accentColor="#FF0000";b.mainColor=bb(b.mainColor);b.accentColor=bb(b.accentColor)};var eb=function(a,b){if(a.classList)a.classList.add(b);else{var c;a.classList?c=!a.classList.contains(b):(a.classList?c=a.classList:(c=a.className,c=m(c)&&c.match(/\S+/g)||[]),c=!(0<=x(c,b)));c&&(a.className+=0<a.className.length?" "+b:b)}};var fb={canvas:{type:"shape",node_id:"bgImage",background_color_ids:"mainColor"},logo:{type:"logo",node_id:"logoImage",priority:1,weight:.09},logoBackupText:{type:"text",font_level:1,node_id:"logoImageBackupText",background_color_ids:"mainColor",priority:1},productTable:{type:"any",node_id:"products",priority:0}},gb=function(a){for(var b=document.getElementById("products"),c=document.getElementById("adContent").getAttribute("data-variation"),d=cb(a),e=0,f=0;30>f&&d["Product_"+f+"_imageUrl"];++f)e++;
var g;switch(c){case "Towers":g=W(new V(b,[1,6],[1,1]),22,15);break;case "WideTowers":g=W(new V(b,[1,6],[1,2]),22,15);break;case "Squares":g=W(new V(b,[1,2],[1,3]),50,50);break;case "InBetweenSquareAndBanner":g=W(new V(b,[1,2],[2,6]),22,15);break;case "MobileBanner320x100":g=W(new V(b,[1,2],[2,6]),22,15);break;case "TallBanners":g=W(new V(b,[1,3],[2,6]),22,15);break;case "MobileBanner320x50":g=W(new V(b,[1,1],[1,4]),22,15);break;case "Banners":g=W(new V(b,[1,2],[2,6]),22,15)}$a(Ya(Za(g)),e).h(function(a){var b=
a.rowIndex*a.J+a.K;a=a.I;a.id="product"+b;eb(a,"product");var c=Ca("DIV");eb(c,"productImage");c.style.backgroundImage="url('"+d["Product_"+b+"_imageUrl"]+"')";c.id="productImage"+b;a.appendChild(c);S(a,["mouseover","mouseout"],function(a){a.currentTarget.style.boxShadow="mouseover"==a.type?"0 0 0 1px "+d.accentColor:"0px 2px 3px rgba(0,0,0,0.2)"})});Wa(a,e)},ib=function(a){var b=a.google_template_data.adData[0];b.siriusFlagNoBorder="true";b.siriusFlagRedirectTarget="_blank";b.siriusFlagIntentfulClickDelay=
0;b.siriusFlagCloseButtonClickProtectorSize=40;b.siriusFlagClickAreaOption="none";db(a);window.renderAd(a,{elements:fb,variations:{Towers:{calibrations:["AspectRatioLE 0.0 0","AspectRatioGE 0.4 0"],logoBackupText:L("logoBackupText","left right top bottom",["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},WideTowers:{calibrations:["AspectRatioLE 0.4 0","AspectRatioGE 0.6 0"],logoBackupText:L("logoBackupText","left right top bottom",
["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},Squares:{calibrations:["AspectRatioLE 0.6 0","AspectRatioGE 2.1 0"],logoBackupText:L("logoBackupText","left right top bottom",["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},InBetweenSquareAndBanner:{calibrations:["AspectRatioLE 2.1 0","AspectRatioGE 3.1 0"],logoBackupText:L("logoBackupText","left right top bottom",
["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},MobileBanner320x100:{calibrations:["AspectRatioLE 3.1 0","AspectRatioGE 3.3 0"],logoBackupText:L("logoBackupText","left right top bottom",["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},TallBanners:{calibrations:["AspectRatioLE 3.3 0","AspectRatioGE 6.35 0"],logoBackupText:L("logoBackupText","left right top bottom",
["productTable 1px","1px","1px","1px"],1),productTable:L("productTable","left top bottom",["1px","1px","20px","0px"])},MobileBanner320x50:{calibrations:["AspectRatioLE 6.35 0","AspectRatioGE 6.5 0"],logo:L("logo","left right top bottom",["1px","1px","1px","productTable 1px"],1),productTable:L("productTable","left top bottom",["1px","90px","1px","0px"])},Banners:{calibrations:["AspectRatioLE 6.5 0"],logo:L("logo","left right top bottom",["1px","1px","1px","productTable 1px"],1),productTable:L("productTable",
"left top bottom",["1px","100px","1px","0px"])}}},function(){gb(a)})},X=["onAdData"],Y=k;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===ib?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=ib;})()