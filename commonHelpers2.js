import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".js-feedback-form");let r={email:"",message:""};const m=()=>{const e=JSON.parse(localStorage.getItem("feedback-form"));if(e===null)return;r=e;const o=Object.keys(e);for(const t of o)a.elements[t].value=e[t]};m();const l=e=>{const o=e.target.name,t=e.target.value.trim();r[o]=t,localStorage.setItem("feedback-form",JSON.stringify(r))},s=e=>{e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form")};a.addEventListener("input",l);a.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map
