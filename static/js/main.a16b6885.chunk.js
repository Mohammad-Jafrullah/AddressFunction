(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},24:function(e,a,t){e.exports=t(37)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),r=t.n(c),s=(t(32),t(1)),o=(t(33),t(2)),i=t(13);function m(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({}),m=Object(s.a)(r,2),u=m[0],f=m[1],d=Object(n.useState)({}),E=Object(s.a)(d,2),h=E[0],g=E[1],b=Object(n.useState)({}),p=Object(s.a)(b,2),v=p[0],N=p[1],O=Object(o.l)();return Object(n.useEffect)(function(){switch(O.pathname){case"/":case"/home":c({boxShadow:"1px 3px 5px #282c34"}),f({}),g({}),N({});break;case"/history":f({boxShadow:"1px 3px 5px #282c34"}),c({}),g({}),N({});break;case"/fav":g({boxShadow:"1px 3px 5px #282c34"}),f({}),c({}),N({});break;case"/setting":N({boxShadow:"1px 3px 5px #282c34"}),f({}),g({}),c({});break;default:c({}),f({}),g({}),N({})}},[O.pathname]),l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"bottom-bar"},l.a.createElement("li",{style:t},l.a.createElement("i",{className:"fa-solid fa-house-user"}),l.a.createElement(i.b,{to:"/home"},"Home")),l.a.createElement("li",{style:u},l.a.createElement("i",{className:"fa-solid fa-clock-rotate-left"}),l.a.createElement(i.b,{to:"/history"},"History")),l.a.createElement("li",{style:h},l.a.createElement("i",{className:"fa-solid fa-bookmark"}),l.a.createElement(i.b,{to:"/fav"},"Favourite")),l.a.createElement("li",{style:v},l.a.createElement("i",{className:"fa-solid fa-gear"}),l.a.createElement(i.b,{to:"/setting"},"Setting"))))}var u=t(9),f=t(20);t(21);function d(e){var a=Object(o.l)(),t=Object(n.useState)(function(){var e=localStorage.getItem("addresses");return e?JSON.parse(e):[]}()),c=Object(s.a)(t,2),r=c[0],i=c[1],m=Object(n.useState)({height:"800px"}),d=Object(s.a)(m,2),E=d[0],h=d[1];Object(n.useEffect)(function(){r.length>6?h({height:"".concat(r.length/7*800,"px")}):h({height:"800px"})},[r]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-main-body",style:E},Object(u.a)(r).reverse().map(function(e){return l.a.createElement("div",{className:"history-box"},l.a.createElement("div",{className:"icon-add"},l.a.createElement("i",{className:"fa-solid fa-location-dot"}),l.a.createElement("p",null,e.address)),l.a.createElement("div",{className:"btns"},l.a.createElement("button",{onClick:function(){return function(e){var a=r.map(function(a,t){return a.id===e?"fa-regular fa-bookmark"===a.classIcon?Object(f.a)({},a,{classIcon:"fa-solid fa-bookmark"}):Object(f.a)({},a,{classIcon:"fa-regular fa-bookmark"}):a});i(a),localStorage.setItem("addresses",JSON.stringify(a))}(e.id)}},l.a.createElement("i",{className:e.classIcon})),l.a.createElement("button",{onClick:function(){return function(e){var t=r.filter(function(a){return a.id!==e});i(t),localStorage.setItem("addresses",JSON.stringify(t)),console.log(a)}(e.id)}},l.a.createElement("i",{className:"fa-solid fa-trash-can"}))))}),0===r.length?l.a.createElement("h3",null,"No historical data available. Please first search from the homepage."):l.a.createElement("button",{className:"clear",onClick:function(){i([]),localStorage.setItem("addresses",JSON.stringify([]))}},"Clear All")))}t(34);var E=t(23);function h(){var e=Object(E.a)({googleMapsApiKey:"AIzaSyAZdAWWSIwyoRVeOnMTctWYSsWI3wdMnEM"}).isLoaded,a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(function(){var e=localStorage.getItem("addresses");return e?JSON.parse(e):[]}()),i=Object(s.a)(o,2),m=i[0],f=i[1],d=Object(n.useState)(""),h=Object(s.a)(d,2),g=h[0],b=h[1],p=Object(n.useState)({height:"150px"}),v=Object(s.a)(p,2),N=v[0],O=v[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),j=S[0],k=S[1];Object(n.useEffect)(function(){localStorage.setItem("addresses",JSON.stringify(m))},[m]);var x=function(e){var a=m.filter(function(a){return a.id!==e});f(a),localStorage.setItem("addresses",JSON.stringify(a))},w=function(e){m.map(function(a){return a.id===e&&r(a.address),[]})};return Object(n.useEffect)(function(){x(),w()},[c]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home-main-body"},l.a.createElement("div",{className:"search-box",style:N},l.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var a={id:(new Date).getTime().toString(),address:c,classIcon:"fa-regular fa-bookmark"};f([].concat(Object(u.a)(m),[a])),console.log(c),r("")}},l.a.createElement("input",{onFocus:function(){b(l.a.createElement("div",{className:"history-home-box",onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},l.a.createElement("h3",null,"History"),Object(u.a)(m).reverse().slice(0,5).map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-home",key:e.id},l.a.createElement("p",null,l.a.createElement("i",{className:"fa-solid fa-location-dot"}),e.address),l.a.createElement("div",{className:"btns"},l.a.createElement("button",{onClick:function(){return w(e.id)}},l.a.createElement("i",{className:"fa-solid fa-pen-to-square"})),l.a.createElement("button",{onClick:function(){return x(e.id)}},l.a.createElement("i",{className:"fa-solid fa-trash-can"})))),l.a.createElement("hr",null))}))),0===m.length?O({height:"150px"}):O({height:"600px"})},onBlur:function(){!0===j?(b(l.a.createElement("div",{className:"history-home-box",onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},l.a.createElement("h3",null,"History"),Object(u.a)(m).reverse().slice(0,5).map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-home",key:e.id},l.a.createElement("p",null,l.a.createElement("i",{className:"fa-solid fa-location-dot"}),e.address),l.a.createElement("div",{className:"btns"},l.a.createElement("button",{onClick:function(){return w(e.id)}},l.a.createElement("i",{className:"fa-solid fa-pen-to-square"})),l.a.createElement("button",{onClick:function(){return x(e.id)}},l.a.createElement("i",{className:"fa-solid fa-trash-can"})))),l.a.createElement("hr",null))}))),0===m.length?O({height:"150px"}):O({height:"600px"})):(b(""),O({height:"150px"}))},type:"text",value:c,onChange:function(e){return r(e.target.value)},placeholder:"Enter Address",required:!0}),l.a.createElement("button",{type:"submit"},l.a.createElement("i",{className:"fa-solid fa-magnifying-glass"}))),0===m.length?l.a.createElement(l.a.Fragment,null):g),l.a.createElement("div",{className:"show-map"},e?l.a.createElement(l.a.Fragment,null,l.a.createElement("iframe",{title:"map",src:"https://maps.google.com/maps?q=noida%20Dates%20Products&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"100%",height:"100%",allowFullscreen:!0})):l.a.createElement("div",{className:"loading-animation-container"},l.a.createElement("div",{className:"loading-spinner"})))))}t(36);function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"setting-main-body"},l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-user"}),l.a.createElement("a",{href:"/"},"Profile Settings")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-user-clock"}),l.a.createElement("a",{href:"/"},"Convert to Driver")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-money-bill"}),l.a.createElement("a",{href:"/"},"Refer & Earn")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-wand-magic-sparkles"}),l.a.createElement("a",{href:"/"},"Emergency")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-bell"}),l.a.createElement("a",{href:"/"},"Push Notifications")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-info"}),l.a.createElement("a",{href:"/"},"About Us")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"setting-options"},l.a.createElement("div",{className:"option"},l.a.createElement("i",{className:"fa-solid fa-arrow-right-to-bracket"}),l.a.createElement("a",{href:"/"},"Logout")),l.a.createElement("i",{className:"fa-solid fa-chevron-right"}))))}function b(e){var a=function(){var e=localStorage.getItem("addresses");return e?JSON.parse(e):[]}(),t=Object(n.useState)({height:"800px"}),c=Object(s.a)(t,2),r=c[0],o=c[1];return Object(n.useEffect)(function(){a.length>6?o({height:"".concat(a.length/7*800,"px")}):o({height:"800px"})},[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-main-body",style:r},a.map(function(e){return e.classIcon}).includes("fa-solid fa-bookmark")&&0!==a.length?l.a.createElement(l.a.Fragment,null,Object(u.a)(a).reverse().map(function(e){return"fa-solid fa-bookmark"===e.classIcon?l.a.createElement("div",{className:"history-box"},l.a.createElement("div",{className:"icon-add"},l.a.createElement("i",{className:"fa-solid fa-location-dot"}),l.a.createElement("p",null,e.address))):null})):l.a.createElement("h3",null,"No favourite address available. Please first bookmark from the history.")))}var p=function(){return l.a.createElement(i.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(o.a,{path:"/home",element:l.a.createElement(h,null)}),l.a.createElement(o.a,{path:"/history",element:l.a.createElement(d,null)}),l.a.createElement(o.a,{path:"/setting",element:l.a.createElement(g,null)}),l.a.createElement(o.a,{path:"/fav",element:l.a.createElement(b,null)}))))},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),v()}},[[24,1,2]]]);
//# sourceMappingURL=main.a16b6885.chunk.js.map