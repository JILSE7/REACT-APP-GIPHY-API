(this["webpackJsonp04-gif-app"]=this["webpackJsonp04-gif-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},o=(n(15),n(2)),u=n(9),j=n(0),d=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(j.jsx)("form",{className:"header",onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t((function(e){return[s].concat(Object(u.a)(e))})),r(""),console.log("Submit hecho"))},children:Object(j.jsx)("input",{type:"text",placeholder:"Busca un gift",value:s,onChange:function(e){return r(e.target.value)}})})},l=n(10),h=function(e){var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounceInUp",children:[Object(j.jsx)("h4",{children:t}),Object(j.jsx)("img",{src:n,alt:t})]})},b=n(6),f=n.n(b),O=n(8),p=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,c,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://api.giphy.com/v1/gifs/search?api_key=ATPfkfhaLp9yPC0iPbss4sbZ1CJ8hzkp&q=".concat(encodeURI(t),"&limit=20"),e.next=4,fetch(n);case 4:return e.next=6,e.sent.json();case 6:return c=e.sent,a=c.data,s=a.map((function(e){var t;return{id:e.id,title:e.title,url:(null===(t=e.images)||void 0===t?void 0:t.downsized_medium).url}})),e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),m=(n(18),function(){return Object(j.jsxs)("div",{className:"sk-chase",children:[Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"})]})}),x=function(e){var t,n=e.categoria,a=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),1e3)}))}),[e]),console.log(a),a}(n),s=a.data;return a.loading&&(t=Object(j.jsx)(m,{})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:n}),t,Object(j.jsx)("div",{className:"cards",children:s.map((function(e){return Object(j.jsx)(h,Object(l.a)({},e),e.id)}))})]})},v=function(){var e=Object(c.useState)(["One Punch"]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:a})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(x,{categoria:e},e)}))})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),i()}},[[19,1,2]]]);
//# sourceMappingURL=main.00fc4785.chunk.js.map