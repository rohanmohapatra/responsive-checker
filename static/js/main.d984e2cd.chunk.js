(this["webpackJsonpreact-responsive-checker"]=this["webpackJsonpreact-responsive-checker"]||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"devices":{"mobilePhone":[{"key":"iPhone6","name":"IPhone 6","width":375,"height":667},{"key":"iPhone7","name":"IPhone 7","width":375,"height":667},{"key":"iPhone8","name":"IPhone 8","width":375,"height":667},{"key":"iPhone8Plus","name":"IPhone 8 Plus","width":414,"height":736},{"key":"iPhoneX","name":"IPhone X","width":375,"height":812},{"key":"iPhoneXR","name":"IPhone XR","width":414,"height":896},{"key":"iPhone11","name":"IPhone 11","width":414,"height":896},{"key":"iPhone11ProMax","name":"IPhone 11 Pro Max","width":414,"height":896},{"key":"iPhone11Pro","name":"IPhone 11 Pro","width":375,"height":812}],"desktop":[{"key":"1280x800","name":"Desktop 1280","width":1280,"height":800},{"key":"1440x900","name":"Desktop 1440","width":1440,"height":900},{"key":"1536x960","name":"Desktop 1536","width":1536,"height":960}]}}')},50:function(e,t,a){e.exports=a(60)},55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),l=a.n(i),r=(a(55),a(56),a(12)),c=a(93),h=a(96),s=a(98),d=a(99),u=a(100),m=a(106),v=a(103),p=a(104),g=a(105),y=a(40),k=a(41),b=function(e,t){for(var a=0;a<e.length;a++)if(e[a].key===t)return e[a]},E=Object(c.a)((function(e){return{select:{},top:{paddingLeft:10,paddingRight:10},topColor:{color:"black"},iFrame:{border:"1px solid black"}}}));function P(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(),c=Object(r.a)(l,2),P=c[0],w=c[1],f=Object(n.useState)(),j=Object(r.a)(f,2),I=j[0],C=j[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),N=x[0],D=x[1],S=E();return o.a.createElement("div",null,o.a.createElement(h.a,{style:{backgroundColor:"white"},position:"relative"},o.a.createElement(s.a,null,o.a.createElement(d.a,{container:!0,justify:"center"},o.a.createElement(u.a,{variant:"h6",className:[S.top,S.topColor].join(" ")},"Responsive Checker"))),o.a.createElement(s.a,null,o.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center"},o.a.createElement(m.a,{id:"device-label"},"Device: "),o.a.createElement(v.a,{label:"Device",value:a,labelId:"device-label",id:"device",onChange:function(e){i(e.target.value),w(k.devices[e.target.value])},variant:"outlined",color:"primary",className:[S.top,S.topColor,S.select].join(" ")},o.a.createElement(p.a,{value:"mobilePhone"},"Mobile Phone"),o.a.createElement(p.a,{value:"desktop"},"Desktop")),o.a.createElement(m.a,{id:"device-type-label"},"DeviceType: "),o.a.createElement(v.a,{label:"Device Type",value:null===I||void 0===I?void 0:I.key,onChange:function(e){console.log(b(P,e.target.value)),C(b(P,e.target.value))},variant:"outlined",labelId:"device-type-label",id:"device-type",color:"primary",className:[S.top,S.topColor].join(" ")},null===P||void 0===P?void 0:P.map((function(e){return o.a.createElement(p.a,{value:e.key},e.name)}))),console.log(I),o.a.createElement(u.a,{variant:"body2",className:[S.top,S.topColor].join(" ")}," ","Height:"," "),o.a.createElement(g.a,{color:"primary",value:null===I||void 0===I?void 0:I.height,disabled:!0,variant:"outlined",className:S.topColor}),o.a.createElement(u.a,{variant:"body2",className:[S.top,S.topColor].join(" ")}," ","Width:"," "),o.a.createElement(g.a,{color:"primary",value:null===I||void 0===I?void 0:I.width,disabled:!0,variant:"outlined",className:S.topColor})))),o.a.createElement("div",{style:{paddingTop:10}},o.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center"},o.a.createElement(g.a,{color:"primary",value:N,onChange:function(e){return D(e.target.value)},variant:"outlined",fullWidth:!0,label:"URL",helperText:"Please provide URL to check responsiveness"})),o.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center"},I&&""!==N&&o.a.createElement(y.a,{url:N,height:String(null===I||void 0===I?void 0:I.height),width:String(null===I||void 0===I?void 0:I.width),className:S.iFrame}))))}var w=function(){return o.a.createElement("div",null,o.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.d984e2cd.chunk.js.map