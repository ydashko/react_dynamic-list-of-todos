(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),r=c(2),i=c(1),d=(c(13),c(14),c(6)),o=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.title,a=e.id,n=e.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:a}),Object(j.jsx)("td",{className:"is-vcentered",children:n&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:o()({"has-text-danger":!n,"has-text-success":n}),children:t})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",{"fa-eye":c!==e,"fa-eye-slash":c===e})})})})})]},a)}))})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var b=function(e){var t=e.query,c=e.onChangeQuery,a=e.onChangeFilter;return Object(j.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(),a=Object(r.a)(s,2),n=a[0],l=a[1];Object(i.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then(l)}),[t.userId]);var d=t.id,o=t.title;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(d)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(j.jsx)(h,{})]})},x=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),d=Object(r.a)(n,2),o=d[0],x=d[1],f=Object(i.useState)(s.All),p=Object(r.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(""),g=Object(r.a)(y,2),C=g[0],S=g[1],k=Object(i.useState)(!1),T=Object(r.a)(k,2),w=T[0],A=T[1];Object(i.useEffect)((function(){A(!0),m("/todos").then(a).finally((function(){return A(!1)}))}),[]);var _=Object(i.useMemo)((function(){var e=Object(l.a)(c);switch(C.trim()&&(e=e.filter((function(e){return e.title.toLowerCase().includes(C.toLowerCase())}))),v){case s.Active:return e.filter((function(e){return!e.completed}));case s.Completed:return e.filter((function(e){return e.completed}));default:return e}}),[c,C,v]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:C,onChangeQuery:S,onChangeFilter:N})}),Object(j.jsx)("div",{className:"block",children:w?Object(j.jsx)(h,{}):Object(j.jsx)(u,{todos:_,setSelectedTodo:x,selectedTodo:o})})]})})}),o&&Object(j.jsx)(O,{selectedTodo:o,setSelectedTodo:x})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.39ef2974.chunk.js.map