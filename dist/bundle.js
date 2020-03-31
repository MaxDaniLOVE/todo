!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+r().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+r().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}).call(this,n(1))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var l,d=[],a=!1,u=-1;function m(){a&&l&&(a=!1,l.length?d=l.concat(d):u=-1,d.length&&f())}function f(){if(!a){var e=s(m);a=!0;for(var t=d.length;t;){for(l=d,d=[];++u<t;)l&&l[u].run();u=-1,t=d.length}l=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new g(e,t)),1!==d.length||a||s(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=e=>{const{title:t,text:n,priority:r,isCompleted:o,id:i,dateOfCreation:c,highlight:s}=e,l=o?document.querySelector("#completedTasks"):document.querySelector("#currentTasks"),d=o?"hidden":"",a=sessionStorage.isNightTheme;l.insertAdjacentHTML("beforeend",`\n    <li class="list-group-item d-flex w-100 mb-2 ${"true"===a?"bg-grey":""}" id="${i}">\n        <div class="w-100 mr-2">\n            <div class="d-flex w-100 justify-content-between">\n                <h5 class="mb-1" style="background-color: ${"#ffffff"===s?"ffffff00":s};">${t}</h5>\n                <div>\n                    <small class="mr-2">${r} priority</small>\n                    <small>${c.toLocaleString()}</small>\n                </div>\n            </div>\n            <p class="mb-1 w-100">${n}</p>\n        </div>\n        <div class="dropdown m-2 dropleft">\n            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <div class="dropdown-menu p-2 flex-column ${"true"===a?"bg-grey":""}" aria-labelledby="dropdownMenuItem1">\n                <button type="button" class="btn btn-success w-100 ${d}" id="complete">Complete</button>\n                <button type="button" class="btn btn-info w-100 my-2 ${d}" id="edit" data-toggle="modal" data-target="#exampleModal">Edit</button>\n                <button type="button" class="btn btn-danger w-100" id="delete">Delete</button>\n            </div>\n        </div>\n    </li>\n  `)};var o=e=>{const t=document.getElementById("todo-title"),n=document.getElementById("comleted-title");t.children.length&&n.children.length&&(t.children[0].remove(),n.children[0].remove());const r=e.length,o=e.reduce((e,t)=>t.isCompleted?++e:e,0),i=e.reduce((e,t)=>t.isCompleted?e:++e,0);t.insertAdjacentHTML("beforeend",`<span class="tasks-amount">(${i} / ${r})</span>`),n.insertAdjacentHTML("beforeend",`<span class="tasks-amount">(${o} / ${r})</span>`)};var i=()=>{const e=document.querySelector(".task-title"),t=document.querySelector(".task-text"),n=document.querySelector("#Low"),r=document.querySelector("#Medium"),o=document.querySelector("#High"),i=document.querySelector("#inputColor");e.value="",t.value="",n.checked=!1,r.checked=!1,o.checked=!1,i.value="#ffffff"},c=n(0),s=n.n(c);var l=(e,t)=>{e.preventDefault();let n={...{id:s()(),title:"",text:"",priority:"",isCompleted:!1,dateOfCreation:new Date,highlight:"#ffffff00"}};const c=document.querySelector(".task-title"),l=document.querySelector(".task-text"),d=document.querySelector("#Low"),a=document.querySelector("#Medium"),u=document.querySelector("#High"),m=document.querySelector("#inputColor");n.title=c.value,n.text=l.value;const f=d.checked?d.value:a.checked?a.value:u.checked?u.value:"";n.priority=f,n.highlight=m.value;const{title:g,text:h,priority:p}=n;if(g.length&&h.length&&p.length){r(n);let e=[...t,n];if(o(e),i(),"true"===sessionStorage.isEditMode){const r=sessionStorage.editItem,i=t.findIndex(({id:e})=>e===r);return t.splice(i,1),e=[...t.slice(0,i),n,...t.slice(i)],sessionStorage.isEditMode=!1,document.getElementById(r).remove(),o(e),$("#exampleModal").modal("hide"),e}return $("#exampleModal").modal("hide"),e}return t};var d=(e,t)=>{const n=e.target.closest("li"),r=n.id,i=t.findIndex(e=>e.id===r);t.splice(i,1);const c=[...t.slice(0,i),...t.slice(i)];return n.remove(),o(c),c};var a=(e,t)=>{const n=e.target.closest("li"),i=n.id,c=t.findIndex(({id:e})=>e===i),s={...t[c],isCompleted:!0};n.remove(),r(s),t.splice(c,1);const l=[...t.slice(0,c),s,...t.slice(c)];return o(l),l};var u=e=>{const t=JSON.stringify(e);return encodeURI("data:text/json;charset=utf-8,"+t)};var m=(e,t)=>{const n=[...e],o=document.querySelector("#currentTasks"),i=document.querySelector("#completedTasks");n.sort((e,n)=>e.dateOfCreation>n.dateOfCreation?1*t:e.dateOfCreation<n.dateOfCreation?-1*t:0),o.childNodes.forEach(e=>{"#text"!==e.nodeName&&e.remove()}),i.childNodes.forEach(e=>{"#text"!==e.nodeName&&e.remove()}),n.forEach(e=>r(e))};var f=e=>{const{title:t,text:n,priority:r,highlight:o}=e,i=document.querySelector(".task-title"),c=document.querySelector(".task-text"),s=document.querySelector("#Low"),l=document.querySelector("#Medium"),d=document.querySelector("#High"),a=document.querySelector("#inputColor");switch(i.value=t,c.value=n,r){case"Low":s.checked=!0;break;case"Medium":l.checked=!0;break;case"High":d.checked=!0}a.value="#ffffff00"===o?"#ffffff":o};var g=e=>{const t=document.body,n=document.querySelector(".navbar"),r=document.querySelectorAll(".list-group-item"),o=document.querySelectorAll(".dropdown-menu"),i=document.querySelector(".modal-content");e?(t.classList.add("bg-dark"),t.style.color="#fff",n.classList.remove("bg-light"),n.classList.add("bg-grey"),r.forEach(e=>{e.classList.add("bg-grey")}),o.forEach(e=>{e.classList.add("bg-grey")}),i.classList.add("bg-grey"),i.querySelectorAll(".form-control").forEach(e=>{e.classList.add("bg-grey__input")}),sessionStorage.setItem("isNightTheme",!0)):(t.classList.remove("bg-dark"),t.style.color="#000",n.classList.add("bg-light"),n.classList.remove("bg-grey"),r.forEach(e=>{e.classList.remove("bg-grey")}),o.forEach(e=>{e.classList.remove("bg-grey")}),i.classList.remove("bg-grey"),i.querySelectorAll(".form-control").forEach(e=>{e.classList.remove("bg-grey__input")}),sessionStorage.setItem("isNightTheme",!1))};sessionStorage.setItem("isNightTheme",!1);const h={id:s()(),title:"Title",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.",priority:"High",isCompleted:!1,dateOfCreation:new Date,highlight:"#ffffff00"};let p=[h];r(h),document.querySelector("#add-task").addEventListener("click",e=>{p=l(e,p)});const y=document.getElementById("currentTasks"),v=document.getElementById("completedTasks");y.addEventListener("click",e=>{if("delete"===e.target.id&&(p=d(e,p)),"complete"===e.target.id&&(p=a(e,p)),"edit"===e.target.id){const t=((e,t)=>{const n=e.target.closest("li").id,r=t.findIndex(({id:e})=>e===n);return t[r]})(e,p);sessionStorage.setItem("isEditMode",!0),sessionStorage.setItem("editItem",t.id),f(t)}}),v.addEventListener("click",e=>{"delete"===e.target.id&&(p=d(e,p))}),document.getElementById("load-btn").addEventListener("click",e=>{e.target.href=u(p)}),document.getElementById("nine-to-one").addEventListener("click",()=>{m(p,-1)}),document.getElementById("one-to-nine").addEventListener("click",()=>{m(p,1)}),document.getElementById("night-theme").addEventListener("change",e=>{g(e.target.checked)});const b=document.querySelector(".modal"),S=document.getElementById("close-modal"),k=document.querySelector(".close");b.addEventListener("click",e=>{e.target!==b&&e.target!==S&&e.target!==k&&e.target!==k.querySelector("span")||(i(),sessionStorage.isEditMode=!1)}),o(p)}]);