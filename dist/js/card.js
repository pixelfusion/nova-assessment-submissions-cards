(()=>{"use strict";var e,n={20:(e,n,r)=>{const s=Vue;var t={class:"flex items-center justify-between px-8"},o={class:"text-center px-2 py-3"},i=["href"];const c={props:["card"],mounted:function(){},methods:{lensUrl:function(e){var n="/nova/resources/assessment-submissions";return"all"===e?n:n+"/lens/"+e}}};const l=(0,r(744).Z)(c,[["render",function(e,n,r,c,l,a){var u=(0,s.resolveComponent)("Card",!0);return(0,s.openBlock)(),(0,s.createBlock)(u,null,{default:(0,s.withCtx)((function(){return[(0,s.createElementVNode)("div",t,[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(r.card.counts,(function(e){return(0,s.openBlock)(),(0,s.createElementBlock)("div",o,[(0,s.createElementVNode)("a",{href:a.lensUrl(e.urikey),class:"no-underline text-90 font-semibold"},(0,s.toDisplayString)(e.title)+" ("+(0,s.toDisplayString)(e.count)+")",9,i)])})),256))])]})),_:1})}]]);Nova.booting((function(e,n){e.component("assessment-submissions-cards",l)}))},56:()=>{},744:(e,n)=>{n.Z=(e,n)=>{const r=e.__vccOpts||e;for(const[e,s]of n)r[e]=s;return r}}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,s),o.exports}s.m=n,e=[],s.O=(n,r,t,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,t,o]=e[u],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var a=t();void 0!==a&&(n=a)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,t,o]},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={440:0,458:0};s.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[i,c,l]=r,a=0;if(i.some((n=>0!==e[n]))){for(t in c)s.o(c,t)&&(s.m[t]=c[t]);if(l)var u=l(s)}for(n&&n(r);a<i.length;a++)o=i[a],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=self.webpackChunkpixelfusion_assessment_submissions_cards=self.webpackChunkpixelfusion_assessment_submissions_cards||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),s.O(void 0,[458],(()=>s(20)));var t=s.O(void 0,[458],(()=>s(56)));t=s.O(t)})();