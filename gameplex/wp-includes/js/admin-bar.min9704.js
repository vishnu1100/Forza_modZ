/*! This file is auto-generated */
!function(c,l,u){function d(e){27===e.which&&(e=E(e.target,".menupop"))&&(e.querySelector(".menupop > .ab-item").focus(),y(e,"hover"))}function p(e){var t;13!==e.which||e.ctrlKey||e.shiftKey||E(e.target,".ab-sub-wrapper")||(t=E(e.target,".menupop"))&&(e.preventDefault(),(a(t,"hover")?y:v)(t,"hover"))}function m(e,t){!E(t.target,".ab-sub-wrapper")&&(t.preventDefault(),t=E(t.target,".menupop"))&&(a(t,"hover")?y:(b(e),v))(t,"hover")}function f(e){var t,r=e.target.parentNode;if(t=r?r.querySelector(".shortlink-input"):t)return e.preventDefault&&e.preventDefault(),e.returnValue=!1,v(r,"selected"),t.focus(),t.select(),!(t.onblur=function(){y(r,"selected")})}function h(){if("sessionStorage"in l)try{for(var e in sessionStorage)-1<e.indexOf("wp-autosave-")&&sessionStorage.removeItem(e)}catch(e){}}function a(e,t){return e&&(e.classList&&e.classList.contains?e.classList.contains(t):e.className&&-1<e.className.split(" ").indexOf(t))}function v(e,t){e&&(e.classList&&e.classList.add?e.classList.add(t):a(e,t)||(e.className&&(e.className+=" "),e.className+=t),e=e.querySelector("a"),"hover"===t)&&e&&e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded","true")}function y(e,t){var r,n;if(e&&a(e,t)){if(e.classList&&e.classList.remove)e.classList.remove(t);else{for(r=" "+t+" ",n=" "+e.className+" ";-1<n.indexOf(r);)n=n.replace(r,"");e.className=n.replace(/^[\s]+|[\s]+$/g,"")}e=e.querySelector("a");"hover"===t&&e&&e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded","false")}}function b(e){if(e&&e.length)for(var t=0;t<e.length;t++)y(e[t],"hover")}function g(e){if(!e.target||"wpadminbar"===e.target.id||"wp-admin-bar-top-secondary"===e.target.id)try{l.scrollTo({top:-32,left:0,behavior:"smooth"})}catch(e){l.scrollTo(0,-32)}}function E(e,t){for(l.Element.prototype.matches||(l.Element.prototype.matches=l.Element.prototype.matchesSelector||l.Element.prototype.mozMatchesSelector||l.Element.prototype.msMatchesSelector||l.Element.prototype.oMatchesSelector||l.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;0<=--r&&t.item(r)!==this;);return-1<r});e&&e!==c;e=e.parentNode)if(e.matches(t))return e;return null}c.addEventListener("DOMContentLoaded",function(){var r,e,t,n,a,o,s,i=c.getElementById("wpadminbar");if(i&&"querySelectorAll"in i){r=i.querySelectorAll("li.menupop"),e=i.querySelectorAll(".ab-item"),t=c.querySelector("#wp-admin-bar-logout a"),n=c.getElementById("adminbarsearch"),a=c.getElementById("wp-admin-bar-get-shortlink"),i.querySelector(".screen-reader-shortcut"),o=/Mobile\/.+Safari/.test(u.userAgent)?"touchstart":"click",y(i,"nojs"),"ontouchstart"in l&&(c.body.addEventListener(o,function(e){E(e.target,"li.menupop")||b(r)}),i.addEventListener("touchstart",function e(){for(var t=0;t<r.length;t++)r[t].addEventListener("click",m.bind(null,r));i.removeEventListener("touchstart",e)})),i.addEventListener("click",g);for(s=0;s<r.length;s++)l.hoverintent(r[s],v.bind(null,r[s],"hover"),y.bind(null,r[s],"hover")).options({timeout:180}),r[s].addEventListener("keydown",p);for(s=0;s<e.length;s++)e[s].addEventListener("keydown",d);n&&((o=c.getElementById("adminbar-search")).addEventListener("focus",function(){v(n,"adminbar-focused")}),o.addEventListener("blur",function(){y(n,"adminbar-focused")})),a&&a.addEventListener("click",f),l.location.hash&&l.scrollBy(0,-32),t&&t.addEventListener("click",h)}})}(document,window,navigator);