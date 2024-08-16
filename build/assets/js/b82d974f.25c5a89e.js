"use strict";(self.webpackChunk_brizy_docs=self.webpackChunk_brizy_docs||[]).push([[1397],{9904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=t(2540),i=t(3023);const o={sidebar_position:2,toc_max_heading_level:4},r="Regular Controls",s={id:"using-controls/regular-control",title:"Regular Controls",description:"Regular controls are basic and commonly used controls for building the toolbar UI and gathering data from users.",source:"@site/docs-internals/using-controls/regular-control.md",sourceDirName:"using-controls",slug:"/using-controls/regular-control",permalink:"/docs-internals/using-controls/regular-control",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs-internals/using-controls/usage"},next:{title:"Responsive Control",permalink:"/docs-internals/using-controls/responsive-control"}},a={},c=[{value:"Control definition",id:"control-definition",level:3},{value:"Examples",id:"examples",level:3},{value:"Input text",id:"input-text",level:4},{value:"Select",id:"select",level:4},{value:"Slider",id:"slider",level:4}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"regular-controls",children:"Regular Controls"}),"\n",(0,l.jsxs)(n.p,{children:["Regular controls are basic and commonly used controls for building the toolbar UI and gathering data from users. ",(0,l.jsx)("br",{}),"\nBy default, all Brizy controls work across all devices (desktop, tablet, and mobile). To limit a control to specific devices, use the ",(0,l.jsx)(n.code,{children:'"devices"'})," property"]}),"\n",(0,l.jsx)(n.h3,{id:"control-definition",children:"Control definition"}),"\n",(0,l.jsx)(n.p,{children:"All controls are defined as JavaScript objects with only two required keys:"}),"\n",(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"id"})})," - the identifier of the key where the control will save your data"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"type"})})," - the control name that we are supposed to use"]})]}),"\n",(0,l.jsx)(n.p,{children:"Implement the following code snippet to create a control:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["In the above example, we'll use the ",(0,l.jsx)(n.code,{children:"inputText"})," control. The value entered in the ",(0,l.jsx)(n.code,{children:"inputText"})," control will be saved under the ",(0,l.jsx)(n.code,{children:'"link"'})," key."]}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h4,{id:"input-text",children:"Input text"}),"\n",(0,l.jsx)(n.p,{children:"In the following example, we'll add an input field with a label and placeholder that will allow users to set the link to any page."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText"\n  label: "Link"\n  placeholder: "Enter the link..."\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"select",children:"Select"}),"\n",(0,l.jsxs)(n.p,{children:["Example using a ",(0,l.jsx)(n.code,{children:"select"})," control to choose predefined HTML tag names."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "tagName",\n  label: "HTML Tag",\n  type: "select",\n  choices: [\n    { title: "Span", value: "span" },\n    { title: "Div", value: "div" },\n    { title: "P", value: "p" }\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"slider",children:"Slider"}),"\n",(0,l.jsxs)(n.p,{children:["Using a draggable range slider with a minimum value of ",(0,l.jsx)(n.code,{children:"0"}),", a maximum value of ",(0,l.jsx)(n.code,{children:"100"}),", and units of ",(0,l.jsx)(n.code,{children:'"px"'}),", set the width of the element."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "width",\n  label: "Width",\n  type: "slider",\n  config: {\n    min: 0,\n    max: 100,\n    units: [{ value: "px", title: "px" }]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var l=t(3696);const i={},o=l.createContext(i);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);