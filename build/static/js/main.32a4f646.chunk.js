(this.webpackJsonpmdtex=this.webpackJsonpmdtex||[]).push([[0],{103:function(n,t,r){},104:function(n,t,r){},105:function(n,t,r){},106:function(n,t,r){},120:function(n,t,r){},123:function(n,t,r){},124:function(n,t,r){},125:function(n,t,r){},127:function(n,t,r){},128:function(n,t,r){},129:function(n,t,r){},130:function(n,t,r){},133:function(n,t,r){"use strict";r.r(t);var e=r(0),c=r.n(e),o=r(9),s=r.n(o),a=(r(103),r(104),r(20)),i=r(21),l=r(23),u=r(22),m=r(30),j=r(12),b=(r(105),r(106),r(172)),d=r(173),p=r(170),h=(r(107),r(2)),f=function(){return Object(h.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)(b.a.Brand,{children:"MdTex"})}),Object(h.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(d.a,{className:"mr-auto",children:[Object(h.jsx)(d.a.Link,{children:"Help"}),Object(h.jsxs)(p.a,{title:"Download",id:"collasible-nav-dropdown",children:[Object(h.jsx)(p.a.Item,{children:"File"}),Object(h.jsx)(p.a.Item,{onClick:function(){return console.log("clicked"),void window.ipcRenderer.send("printPDF",document.getElementById("capture").innerHTML)},children:"pdf"}),Object(h.jsx)(p.a.Divider,{}),Object(h.jsx)(p.a.Item,{children:"help"})]})]}),Object(h.jsx)(d.a,{children:Object(h.jsx)(d.a.Link,{children:"Github"})})]})]})},x=r(39),O=r(41),g=r(57),v=r(58),y=r(85);r(120);r(77),r(78),r(79),r(80),r(123),r(124),r(125);var k='.cm-s-custom-0 {\r\n\tbackground: rgb(19, 19, 37);\r\n\tcolor: rgb(173, 170, 204);\r\n  font-weight: 300;\r\n\tline-height: 1.6;\r\n\tfont-family: "IBM Plex Mono", monospace;\r\n  letter-spacing: 0.425px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-cursor {\r\n\tborder-color: #fff;\r\n\toutline: 1px solid #fff;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-activeline-background {\r\n\tbackground: rgba(240, 240, 255, 0.8);\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-selected {\r\n\tbackground: rgba(55, 55, 77, 0.3);\r\n}\r\n\r\n.cm-s-custom-0 .cm-comment {\r\n\tfont-style: italic;\r\n\tcolor: #676b79;\r\n}\r\n\r\n.cm-s-custom-0 .cm-operator {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string {\r\n\tcolor: #c267f9;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string-2 {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-tag {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-meta {\r\n\tcolor: #b084eb;\r\n}\r\n\r\n.cm-s-custom-0 .cm-number {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-atom {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-keyword {\r\n\tcolor: #b095e4;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable {\r\n\tcolor: #f73c91;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-2 {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-3,\r\n.cm-s-custom-0 .cm-type {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-def {\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .cm-property {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-unit {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-attribute {\r\n\tcolor: #d8baea;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-matchingbracket {\r\n\tborder-bottom: 1px dotted #19f9d8;\r\n\tpadding-bottom: 2px;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-gutters {\r\n  background: rgb(19, 19, 37);\r\n  border-right-color: rgb(19, 19, 37);\r\n  width: 40px;\r\n  margin-right: 9px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-linenumber {\r\n  color: rgb(173, 170, 204);\r\n  opacity: 0.75;\r\n  background: rgb(19, 19, 37);\r\n  padding: 0 10px 0 4px;\r\n  font-size: 14px;\r\n  border-top: 2px solid transparent;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-lines .CodeMirror-code div {\r\n  padding-left: 2px;\r\n}',C={theme:"custom-0",autoCloseBrackets:!0,cursorScrollMargin:48,mode:"markdown",lineNumbers:!0,indentUnit:2,tabSize:2,styleActiveLine:!0,viewportMargin:99},w=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){var n;Object(a.a)(this,r);for(var e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];return(n=t.call.apply(t,[this].concat(c))).state={jsValue:n.props.markdown||n.props.jsValue,cssValue:k},n.jsxOptions=Object(O.a)(Object(O.a)({},C),n.props.jsxOptions),n.onChange=function(t){return function(r,e,c){n.setState(Object(x.a)({},"".concat(t,"Value"),c))}},n}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(e.Fragment,{children:[Object(h.jsx)("div",{className:"topbar"}),Object(h.jsxs)(v.a,{split:"vertical",defaultSize:"50%",children:[Object(h.jsx)(M,{name:"js",style:{height:"100vh"},value:this.state.jsValue,options:this.jsxOptions,onChange:this.onChange("js")}),Object(h.jsx)("div",{id:"capture",children:Object(h.jsx)(y.a,{className:"markdown-body markdown-content",children:this.state.jsValue})})]}),Object(h.jsx)(S,{css:this.state.cssValue})]})}}]),r}(e.Component),M=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return console.log("rendering -> ".concat(this.props.name)),Object(h.jsx)(g.Controlled,{style:{height:"100vh"},value:this.props.value,options:this.props.options,onBeforeChange:this.props.onChange})}}]),r}(e.PureComponent),S=function(n){return Object(h.jsx)("style",{dangerouslySetInnerHTML:{__html:n.css}})},V=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(w,{markdown:this.props.markdown})]})}}]),r}(e.Component),z=(r(126),r(86)),B=r.n(z);r(127);r(77),r(78),r(79),r(80),r(128),r(129),r(130);var T='.cm-s-custom-0 {\r\n\tbackground: rgb(19, 19, 37);\r\n\tcolor: rgb(173, 170, 204);\r\n  font-weight: 300;\r\n\tline-height: 1.6;\r\n\tfont-family: "IBM Plex Mono", monospace;\r\n  letter-spacing: 0.425px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-cursor {\r\n\tborder-color: #fff;\r\n\toutline: 1px solid #fff;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-activeline-background {\r\n\tbackground: rgba(240, 240, 255, 0.8);\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-selected {\r\n\tbackground: rgba(55, 55, 77, 0.3);\r\n}\r\n\r\n.cm-s-custom-0 .cm-comment {\r\n\tfont-style: italic;\r\n\tcolor: #676b79;\r\n}\r\n\r\n.cm-s-custom-0 .cm-operator {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string {\r\n\tcolor: #c267f9;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string-2 {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-tag {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-meta {\r\n\tcolor: #b084eb;\r\n}\r\n\r\n.cm-s-custom-0 .cm-number {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-atom {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-keyword {\r\n\tcolor: #b095e4;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable {\r\n\tcolor: #f73c91;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-2 {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-3,\r\n.cm-s-custom-0 .cm-type {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-def {\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .cm-property {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-unit {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-attribute {\r\n\tcolor: #d8baea;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-matchingbracket {\r\n\tborder-bottom: 1px dotted #19f9d8;\r\n\tpadding-bottom: 2px;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-gutters {\r\n  background: rgb(19, 19, 37);\r\n  border-right-color: rgb(19, 19, 37);\r\n  width: 40px;\r\n  margin-right: 9px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-linenumber {\r\n  color: rgb(173, 170, 204);\r\n  opacity: 0.75;\r\n  background: rgb(19, 19, 37);\r\n  padding: 0 10px 0 4px;\r\n  font-size: 14px;\r\n  border-top: 2px solid transparent;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-lines .CodeMirror-code div {\r\n  padding-left: 2px;\r\n}',F={theme:"custom-0",autoCloseBrackets:!0,cursorScrollMargin:48,mode:"markdown",lineNumbers:!0,indentUnit:2,tabSize:2,styleActiveLine:!0,viewportMargin:99},L=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){var n;Object(a.a)(this,r);for(var e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];return(n=t.call.apply(t,[this].concat(c))).state={jsValue:n.props.tex||n.props.jsValue,cssValue:T,inValue:""},n.jsxOptions=Object(O.a)(Object(O.a)({},F),n.props.jsxOptions),n.onChange=function(t){return function(r,e,c){n.setState(Object(x.a)({},"".concat(t,"Value"),c))}},n}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(e.Fragment,{children:[Object(h.jsx)("div",{className:"topbar"}),Object(h.jsxs)(v.a,{split:"vertical",defaultSize:"50%",children:[Object(h.jsx)(N,{name:"js",style:{height:"100vh"},value:this.state.jsValue,options:this.jsxOptions,onChange:this.onChange("js")}),Object(h.jsx)("div",{id:"capture",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:B.a.renderToString(this.state.jsValue,{throwOnError:!1})}})})]}),Object(h.jsx)(I,{css:this.state.cssValue})]})}}]),r}(e.Component),N=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsx)(g.Controlled,{style:{height:"100vh"},value:this.props.value,options:this.props.options,onBeforeChange:this.props.onChange})}}]),r}(e.PureComponent),I=function(n){return Object(h.jsx)("style",{dangerouslySetInnerHTML:{__html:n.css}})},D=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(L,{tex:this.props.tex})]})}}]),r}(e.Component),P=(r(70),r(63)),A=r(163),H=r(171),_=r(174),E=r(160),G=r(164),J=r(165);function U(){var n=c.a.useState(null),t=Object(P.a)(n,2),r=t[0],e=t[1];return Object(h.jsxs)(E.a,{children:[Object(h.jsxs)(A.a,{style:{color:"white",display:"block"},onClick:function(n){e(n.currentTarget)},size:"large",children:[Object(h.jsx)(G.a,{style:{fontSize:55,display:"block"}}),Object(h.jsx)(J.a,{style:{fontSize:24,display:"block"},children:"New"})]}),Object(h.jsxs)(H.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:function(){e(null)},inverted:!0,children:[Object(h.jsx)(m.b,{to:"/newmd",className:"linkers",style:{textDecoration:"none",textDecorationColor:"white"},children:Object(h.jsx)(_.a,{children:"Markdown"})}),Object(h.jsx)(m.b,{to:"/newtex",className:"linkers",style:{textDecoration:"none",textDecorationColor:"white"},children:Object(h.jsx)(_.a,{children:"Latex"})})]})]})}var R=r(166),q=r(61),K=r.n(q);function Q(n){var t=Object(j.f)(),r=c.a.useState(null),e=Object(P.a)(r,2),o=e[0],s=e[1];return Object(h.jsxs)(E.a,{children:[Object(h.jsxs)(A.a,{style:{color:"white",display:"block"},onClick:function(n){s(n.currentTarget)},size:"large",children:[Object(h.jsx)(R.a,{style:{fontSize:55,display:"block"}}),Object(h.jsx)(J.a,{style:{fontSize:24,display:"block",alignContent:"center"},children:"Open"})]}),Object(h.jsxs)(H.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){s(null)},inverted:!0,children:[Object(h.jsx)(K.a,{fileTypes:[".md"],base64:!0,handleFiles:function(n){var r=n.base64.split(","),e=atob(r[1]);console.log(e),t.push({pathname:"/openmd",state:{detail:e}})},children:Object(h.jsx)(_.a,{children:"Markdown"})}),Object(h.jsx)(K.a,{fileTypes:[".tex"],base64:!0,handleFiles:function(n){var r=n.base64.split(","),e=atob(r[1]);console.log(e),t.push({pathname:"/opentex",state:{detail:e}})},children:Object(h.jsx)(_.a,{children:"Latex"})})]})]})}var W=r(167),X=r(168),Y=r(169),Z=function(n){Object(l.a)(r,n);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsx)(m.a,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/newmd",component:nn}),Object(h.jsx)(j.a,{path:"/openmd",component:rn}),Object(h.jsx)(j.a,{path:"/newtex",component:tn}),Object(h.jsx)(j.a,{path:"/opentex",component:en}),Object(h.jsx)(j.a,{path:"/",component:$})]})})}}]),r}(e.Component),$=function(){return Object(h.jsx)(E.a,{className:"something",children:Object(h.jsxs)(W.a,{container:!0,direction:"row",spacing:"1",justify:"flex-start",children:[Object(h.jsx)(W.a,{item:!0,xs:3,children:Object(h.jsx)(U,{})}),Object(h.jsx)(W.a,{item:!0,xs:3,children:Object(h.jsx)(Q,{})}),Object(h.jsxs)(W.a,{item:!0,xs:3,children:[Object(h.jsx)(X.a,{style:{fontSize:55}}),Object(h.jsx)(J.a,{variant:"h6",component:"h6",gutterBottom:!0,children:"Help"})]}),Object(h.jsxs)(W.a,{item:!0,xs:3,children:[Object(h.jsx)(Y.a,{style:{fontSize:55}}),Object(h.jsx)(J.a,{variant:"h6",component:"h6",gutterBottom:!0,children:"Github"})]})]})})},nn=function(){return Object(h.jsx)(V,{markdown:"#this is markdown"})},tn=function(){return Object(h.jsx)(D,{tex:"tex imdeed"})},rn=function(n){return Object(h.jsx)(V,{markdown:n.location.state.detail})},en=function(n){return Object(h.jsx)(D,{tex:n.location.state.detail})},cn=Z;var on=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(cn,{className:"App-header"})})},sn=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,176)).then((function(t){var r=t.getCLS,e=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;r(n),e(n),c(n),o(n),s(n)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(on,{})}),document.getElementById("root")),sn()},70:function(n,t,r){}},[[133,1,2]]]);
//# sourceMappingURL=main.32a4f646.chunk.js.map