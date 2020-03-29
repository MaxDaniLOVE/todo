!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+r().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+r().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}).call(this,n(1))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var d,a=[],s=!1,u=-1;function f(){s&&d&&(s=!1,d.length?a=d.concat(a):u=-1,a.length&&m())}function m(){if(!s){var e=l(f);s=!0;for(var t=a.length;t;){for(d=a,a=[];++u<t;)d&&d[u].run();u=-1,t=a.length}d=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||s||l(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=e=>{const{title:t,text:n,priority:r,isCompleted:o,id:i,dateOfCreation:c,highlight:l}=e,d=o?"hidden":"";(o?document.querySelector("#completedTasks"):document.querySelector("#currentTasks")).insertAdjacentHTML("beforeend",`\n    <li class="list-group-item d-flex w-100 mb-2" id="${i}">\n        <div class="w-100 mr-2">\n            <div class="d-flex w-100 justify-content-between">\n                <h5 class="mb-1" style="background-color: ${l};">${t}</h5>\n                <div>\n                    <small class="mr-2">${r} priority</small>\n                    <small>${c.toLocaleString()}</small>\n                </div>\n            </div>\n            <p class="mb-1 w-100">${n}</p>\n        </div>\n        <div class="dropdown m-2 dropleft">\n            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">\n                <button type="button" class="btn btn-success w-100 ${d}" id="complete">Complete</button>\n                <button type="button" class="btn btn-info w-100 my-2 ${d}" id="edit" data-toggle="modal" data-target="#exampleModal">Edit</button>\n                <button type="button" class="btn btn-danger w-100" id="delete">Delete</button>\n            </div>\n        </div>\n    </li>\n  `)};var o=e=>{const t=document.getElementById("todo-title"),n=document.getElementById("comleted-title");t.children.length&&n.children.length&&(t.children[0].remove(),n.children[0].remove());const r=e.length,o=e.reduce((e,t)=>t.isCompleted?++e:e,0),i=e.reduce((e,t)=>t.isCompleted?e:++e,0);t.insertAdjacentHTML("beforeend",`<span class="tasks-amount">(${i} / ${r})</span>`),n.insertAdjacentHTML("beforeend",`<span class="tasks-amount">(${o} / ${r})</span>`)},i=n(0),c=n.n(i);var l=(e,t)=>{e.preventDefault();let n={...{id:c()(),title:"",text:"",priority:"",isCompleted:!1,dateOfCreation:new Date,highlight:"#ffffff"}};const i=document.querySelector(".task-title"),l=document.querySelector(".task-text"),d=document.querySelector("#Low"),a=document.querySelector("#Medium"),s=document.querySelector("#High"),u=document.querySelector("#inputColor");n.title=i.value,n.text=l.value;const f=d.checked?d.value:a.checked?a.value:s.checked?s.value:"";n.priority=f,n.highlight=u.value;const{title:m,text:p,priority:h}=n;if(m.length&&p.length&&h.length){if(r(n),sessionStorage.isEditMode){const e=sessionStorage.editItem,r=t.findIndex(({id:t})=>t===e);t.splice(r,1);const i=[...t.slice(0,r),n,...t.slice(r)];return document.getElementById(e).remove(),o(i),$("#exampleModal").modal("hide"),i}const e=[...t,n];return o(e),i.value="",l.value="",d.checked=!1,a.checked=!1,s.checked=!1,u.value="#ffffff",$("#exampleModal").modal("hide"),e}};var d=(e,t)=>{const n=e.target.closest("li"),r=n.id,i=t.findIndex(e=>e.id===r);t.splice(i,1);const c=[...t.slice(0,i),...t.slice(i)];return n.remove(),o(c),c};var a=(e,t)=>{const n=e.target.closest("li"),i=n.id,c=t.findIndex(({id:e})=>e===i),l={...t[c],isCompleted:!0};n.remove(),r(l),t.splice(c,1);const d=[...t.slice(0,c),l,...t.slice(c)];return o(d),d};var s=e=>{const t=JSON.stringify(e);return encodeURI("data:text/json;charset=utf-8,"+t)};var u=(e,t)=>{const n=[...e],o=document.querySelector("#currentTasks"),i=document.querySelector("#completedTasks");n.sort((e,n)=>e.dateOfCreation>n.dateOfCreation?1*t:e.dateOfCreation<n.dateOfCreation?-1*t:0),o.childNodes.forEach(e=>{"#text"!==e.nodeName&&e.remove()}),i.childNodes.forEach(e=>{"#text"!==e.nodeName&&e.remove()}),n.forEach(e=>r(e))};var f=e=>{const{title:t,text:n,priority:r,highlight:o}=e,i=document.querySelector(".task-title"),c=document.querySelector(".task-text"),l=document.querySelector("#Low"),d=document.querySelector("#Medium"),a=document.querySelector("#High"),s=document.querySelector("#inputColor");switch(i.value=t,c.value=n,r){case"Low":l.checked=!0;break;case"Medium":d.checked=!0;break;case"High":a.checked=!0}s.value=o};const m={id:c()(),title:"Title",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.",priority:"High",isCompleted:!1,dateOfCreation:new Date,highlight:"#ffffff"};let p=[m];r(m),document.querySelector("#add-task").addEventListener("click",e=>{p=l(e,p)});const h=document.getElementById("currentTasks"),g=document.getElementById("completedTasks");h.addEventListener("click",e=>{if("delete"===e.target.id&&(p=d(e,p)),"complete"===e.target.id&&(p=a(e,p)),"edit"===e.target.id){const t=((e,t)=>{const n=e.target.closest("li").id,r=t.findIndex(({id:e})=>e===n);return t[r]})(e,p);console.log(t),sessionStorage.setItem("isEditMode",!0),sessionStorage.setItem("editItem",t.id),f(t)}}),g.addEventListener("click",e=>{"delete"===e.target.id&&(p=d(e,p))}),document.getElementById("load-btn").addEventListener("click",e=>{e.target.href=s(p)}),document.getElementById("nine-to-one").addEventListener("click",()=>{u(p,-1)}),document.getElementById("one-to-nine").addEventListener("click",()=>{u(p,1)}),o(p)}]);