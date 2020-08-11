(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{40:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(13),i=a(2),s=(a(45),a(46),a(18)),u=a(10),m=a(8),d=a(36),p=a.n(d).a.create({baseURL:"http://localhost:8085/api",headers:{"Content-type":"application/json"}}),f=function(){return p.get("/gateways/supported")},b=function(){return p.delete("/tutorials")},v=function(e){return p.post("/gateways",e)},E=function(){return p.get("/merchants")},g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),i=o[0],d=o[1],p=Object(n.useState)(null),g=Object(m.a)(p,2),h=g[0],y=g[1],N=Object(n.useState)(-1),O=Object(m.a)(N,2),w=O[0],j=O[1],C=Object(n.useState)(""),k=Object(m.a)(C,2),S=k[0],x=k[1],_=Object(n.useState)({}),L=Object(m.a)(_,2),T=L[0],q=L[1],A=Object(n.useState)([]),I=Object(m.a)(A,2),R=I[0],D=I[1],G=Object(n.useState)(-1),F=Object(m.a)(G,2),P=F[0],M=F[1];Object(n.useEffect)((function(){$(),B()}),[]);var U=function(e){var t=e.target,a=t.name,n=t.value;q(Object(u.a)(Object(u.a)({},T),{},Object(s.a)({},a,n)))},$=function(){f().then((function(e){var t=e.data.gateways;r(t),d(t),console.log(e.data)})).catch((function(e){console.log(e)}))},B=function(){E().then((function(e){D(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"list row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by name",autoComplete:"off",value:S,onChange:function(e){var t=e.target.value;x(t);var n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));d(n)}}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var e=a.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));d(e)}},"Search")))),c.a.createElement("div",{className:"col-md-5 mt-3"},c.a.createElement("h4",null,"Supported Gateways"),c.a.createElement("i",null,"Showing ",c.a.createElement("b",null,i.length)," of ",c.a.createElement("b",null,a.length)),c.a.createElement("ul",{className:"list-group scroll overflow-auto mt-3"},i&&i.map((function(e,t){return c.a.createElement("li",{className:"list-group-item "+(t===w?"active":""),onClick:function(){return function(e,t){y(e),j(t)}(e,t)},key:t},e.name)}))),c.a.createElement("button",{className:"m-3 btn btn-sm btn-secondary",onClick:function(){b().then((function(e){console.log(e.data),$(),y(null),j(-1)})).catch((function(e){console.log(e)}))}},"Refresh")),c.a.createElement("div",{className:"col-md-1"}),c.a.createElement("div",{className:"col-md-6 mt-3"},h?c.a.createElement("div",null,c.a.createElement("h4",null,"Gateway"),c.a.createElement("div",{className:"mt-3"},c.a.createElement("label",null,c.a.createElement("strong",null,"Name:"))," ",h.name),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Gateway Type:"))," ",h.gateway_type),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Company Name:"))," ",h.company_name),c.a.createElement("div",{className:"form-group mb-3 mt-3"},c.a.createElement("label",{htmlFor:"sel1"},c.a.createElement("strong",null,"Select a Merchant:")),c.a.createElement("select",{className:"form-control form-control-sm",id:"sel1",onChange:function(e){M(e.target.value)},value:P},c.a.createElement("option",{value:"",className:"font-weight-bold"},"Choose..."),R&&R.map((function(e,t){return c.a.createElement("option",{value:e.id,key:t},e.name)})))),h.auth_modes&&h.auth_modes[0].credentials.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("label",{htmlFor:e.name+t},e.label),c.a.createElement("input",{type:e.safe?"text":"password",className:"form-control form-control-sm",name:e.name,id:e.name+t,required:!0,value:T.name,onChange:U}))})),c.a.createElement("button",{className:"m-3 btn btn-sm btn-success",onClick:function(){var e={qudiniMerchantId:P,gatewayType:h.gateway_type,gatewayCredentials:T};console.log(" we have some data - woohoo! ",e),v(e).then((function(e){console.log("we have a response",e.data)})).catch((function(e){console.log("oh! oh!",e)}))}},"Submit")):c.a.createElement("div",null,c.a.createElement("h5",null,c.a.createElement("i",null,"Please click on a Gateway...")))))},h=a(9),y=a(23),N=a.n(y),O=a(38),w="ADD_PRODUCT_TO_CART",j="REMOVE_PRODUCT_FROM_CART",C="CATEGORIES_IS_LOADING",k="CATEGORIES_FETCH_DATA_SUCCESS",S=function(e){return fetch(e).then((function(e){return e})).then((function(e){return e.json()}))},x=function(e){return{type:C,isLoading:e}},_=function(e){return{type:k,categories:e}},L=function(e){var t=e.active,a=e.item,n=e.index,r=e.handleSelection;return c.a.createElement("a",{className:t?"nav-link active":"nav-link",key:n,index:n,onClick:r},a.name," (",a.products.length,")")},T=Object(h.b)((function(e){return{products:e.products}}),(function(e){return{addProduct:function(t){return e(function(e){return{type:w,product:e}}(t))}}}))((function(e){var t=e.item;return c.a.createElement("div",{className:"card mb-4 box-shadow"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"my-0 font-weight-normal"},t.name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title pricing-card-title"},"$",t.price),c.a.createElement("div",{className:"mb-3"},c.a.createElement("i",null,"description goes here")),c.a.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary",onClick:function(){return e.addProduct(t)}},"Add to cart")))})),q=Object(h.b)((function(e){return{categories:e.categories,isLoading:e.categoriesIsLoading}}),(function(e){return{fetchData:function(t){return e(function(e){return function(){var t=Object(O.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x(!0)),t.next=3,S(e);case 3:n=t.sent,a(_(n)),a(x(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],l=a[1],o=function(e){e.preventDefault();var t=parseInt(e.target.getAttribute("index"),10);return l(t)},i=function(e){return e===r};return Object(n.useEffect)((function(){return e.fetchData("https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories"),function(){}}),[]),e.isLoading?c.a.createElement("span",null,"loading..."):c.a.createElement("div",null,c.a.createElement("nav",{className:"nav nav-tabs mb-3"},e.categories.map((function(e,t){return c.a.createElement(L,{key:t,active:i(t),item:e,index:t,handleSelection:o})}))),c.a.createElement("div",{className:"card-deck mb-3 text-center"},!!e.categories[r]&&e.categories[r].products.map((function(e,t){return c.a.createElement(T,{key:t,item:e})}))))})),A=Object(h.b)((function(e){return{products:e.products}}),(function(e){return{removeProduct:function(t){return e(function(e){return{type:j,index:e}}(t))}}}))((function(e){return c.a.createElement("div",{className:"card mb-4 box-shadow"},c.a.createElement("div",{className:"card-header"},"Cart (",e.products.reduce((function(e,t){return parseFloat(e+(t.quantity||1))}),0).toFixed(0)," items)"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title pricing-card-title"},e.products.length?e.products.map((function(t,a){return c.a.createElement("div",{key:a},c.a.createElement("span",null,t.name," "),c.a.createElement("span",{className:"ml-3"}," $",t.price," "),c.a.createElement("span",{className:"ml-3"},t.quantity),c.a.createElement("input",{className:"mt-3 ml-3",type:"button",onClick:function(){return e.removeProduct(a)},value:"x"}))})):"Cart is empty.")),c.a.createElement("div",{className:"card-footer"},c.a.createElement("span",null,"Total "),c.a.createElement("span",null," $",e.products.reduce((function(e,t){return parseFloat(e+t.price*(t.quantity||1))}),0).toFixed(2))))})),I=a(11),R=a(39),D=a(20),G=function(e){return e.quantity?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):Object(u.a)(Object(u.a)({},e),{},{quantity:2})},F=Object(I.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.categories;default:return e}},categoriesIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.isLoading;default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var a=e.find((function(e){return e.id===t.product.id}));return a?e.map((function(e){return e.id===t.product.id?G(e):e})):[].concat(Object(D.a)(e),[t.product]);case j:return[].concat(Object(D.a)(e.slice(0,t.index)),Object(D.a)(e.slice(t.index+1)));default:return e}}}),P=function(e){e.active,e.item,e.index,e.handleSelection;var t=function(e){return Object(I.d)(F,e,Object(I.a)(R.a))}({categories:[],categoriesIsLoading:!1,products:[]});return c.a.createElement(h.a,{store:t},c.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},c.a.createElement("h1",{className:"display-4"},"Online Services"),c.a.createElement("p",{className:"lead"},"Get something.")),c.a.createElement(q,null),c.a.createElement("div",{className:"pt-4 my-md-5 pt-md-5 border-top"},c.a.createElement(A,null)))};var M=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},c.a.createElement("a",{href:"/gateways",className:"navbar-brand"},"qudini-spreedly"),c.a.createElement("div",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/gateways",className:"nav-link"},"Gateways")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/store",className:"nav-link"},"Store")))),c.a.createElement("div",{className:"container mt-3"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:["/","/gateways"],component:g}),c.a.createElement(i.a,{exact:!0,path:"/store",component:P})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.38a4f7a8.chunk.js.map