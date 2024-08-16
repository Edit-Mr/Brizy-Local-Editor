"use strict";(self.webpackChunk_brizy_docs=self.webpackChunk_brizy_docs||[]).push([[4925],{4592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>A,frontMatter:()=>d,metadata:()=>r,toc:()=>x});var l=t(2540),s=t(3023);const d={sidebar_position:3,toc_max_heading_level:4},i="\u6587\u672c\u5340\u57df",r={id:"editor-controls/data-controls/textarea",title:"\u6587\u672c\u5340\u57df",description:"Brizy \u7684 textarea \u63a7\u4ef6\u63d0\u4f9b\u4e86\u4e00\u500b\u50b3\u7d71\u7684\u6587\u672c\u5340\u57df\u6b04\u4f4d\uff0c\u4e26\u53ef\u4ee5\u8a2d\u5b9a\u884c\u6578\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs-docs-internals/current/editor-controls/data-controls/textarea.md",sourceDirName:"editor-controls/data-controls",slug:"/editor-controls/data-controls/textarea",permalink:"/zh-Hant/docs-internals/editor-controls/data-controls/textarea",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"\u6578\u5b57",permalink:"/zh-Hant/docs-internals/editor-controls/data-controls/number"},next:{title:"\u984f\u8272\u9078\u64c7\u5668",permalink:"/zh-Hant/docs-internals/editor-controls/data-controls/colorPicker"}},c={},x=[{value:"\u53c3\u6578",id:"\u53c3\u6578",level:3},{value:"\u57fa\u672c\u7bc4\u4f8b",id:"\u57fa\u672c\u7bc4\u4f8b",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u6a19\u7c64\u7bc4\u4f8b",id:"\u6a19\u7c64\u7bc4\u4f8b",level:4},{value:"\u985e\u540d\u7bc4\u4f8b",id:"\u985e\u540d\u7bc4\u4f8b",level:4},{value:"\u5716\u6a19\u7bc4\u4f8b",id:"\u5716\u6a19\u7bc4\u4f8b",level:4},{value:"\u89d2\u8272\u7bc4\u4f8b",id:"\u89d2\u8272\u7bc4\u4f8b",level:4},{value:"\u8a2d\u5099\u7bc4\u4f8b",id:"\u8a2d\u5099\u7bc4\u4f8b",level:4},{value:"\u7981\u7528\u7bc4\u4f8b",id:"\u7981\u7528\u7bc4\u4f8b",level:4},{value:"\u986f\u793a\u7bc4\u4f8b",id:"\u986f\u793a\u7bc4\u4f8b",level:4},{value:"\u4f54\u4f4d\u7b26\u7bc4\u4f8b",id:"\u4f54\u4f4d\u7b26\u7bc4\u4f8b",level:4},{value:"\u52a9\u624b\u7bc4\u4f8b",id:"\u52a9\u624b\u7bc4\u4f8b",level:4},{value:"\u72c0\u614b\u7bc4\u4f8b",id:"\u72c0\u614b\u7bc4\u4f8b",level:4},{value:"\u914d\u7f6e\u503c\u7bc4\u4f8b\uff08<code>lines</code>\uff09",id:"\u914d\u7f6e\u503c\u7bc4\u4f8blines",level:4},{value:"\u914d\u7f6e <code>size</code> \u7bc4\u4f8b",id:"\u914d\u7f6e-size-\u7bc4\u4f8b",level:4},{value:"\u9ed8\u8a8d\u503c\u7bc4\u4f8b",id:"\u9ed8\u8a8d\u503c\u7bc4\u4f8b",level:4},{value:"CSS \u7bc4\u4f8b",id:"css-\u7bc4\u4f8b",level:4},{value:"HTML \u4f7f\u7528\u7bc4\u4f8b",id:"html-\u4f7f\u7528\u7bc4\u4f8b",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u6587\u672c\u5340\u57df",children:"\u6587\u672c\u5340\u57df"}),"\n",(0,l.jsxs)(n.p,{children:["Brizy \u7684 ",(0,l.jsx)(n.code,{children:"textarea"})," \u63a7\u4ef6\u63d0\u4f9b\u4e86\u4e00\u500b\u50b3\u7d71\u7684\u6587\u672c\u5340\u57df\u6b04\u4f4d\uff0c\u4e26\u53ef\u4ee5\u8a2d\u5b9a\u884c\u6578\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"textarea"})," \u7bc4\u4f8b\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Textarea",src:t(4595).A+"",width:"249",height:"133"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5e36\u6709\u4f54\u4f4d\u7b26\u548c 2 \u884c\u7684 ",(0,l.jsx)(n.code,{children:"textarea"})," \u7bc4\u4f8b\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"TextareaWithPlaceholder",src:t(4636).A+"",width:"251",height:"66"})}),"\n",(0,l.jsx)(n.h3,{id:"\u53c3\u6578",children:"\u53c3\u6578"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u7a31"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u985e\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"\u9810\u8a2d\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"id"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6587\u672c\u5340\u57df\u5132\u5b58\u6578\u64da\u7684\u9375\u7684\u8b58\u5225\u7b26"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"type"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u985e\u578b\u61c9\u70ba ",(0,l.jsx)(n.code,{children:'"textarea"'})," \u4ee5\u4f7f\u7528\u6b64\u63a7\u4ef6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"label?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u63a7\u4ef6\u5de6\u5074\u986f\u793a\u7684\u6a19\u7c64"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"className?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u81ea\u5b9a\u7fa9 CSS \u985e\u540d\uff0c\u5c07\u6703\u61c9\u7528\u65bc\u63a7\u4ef6\u4e0a\u3002\u53ef\u4ee5\u7528\u4f86\u4fee\u6539\u63a7\u4ef6\u6a23\u5f0f\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"icon?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u6703\u986f\u793a\u5728\u63a7\u4ef6\u6a19\u7c64\u5de6\u5074\u7684\u5716\u6a19\u540d\u7a31\u3002\u67e5\u770b\u6240\u6709 ",(0,l.jsx)(n.a,{href:"/docs-internals/icons/",children:"\u5716\u6a19"}),"\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"position?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"number"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u63a7\u4ef6\u5728\u5de5\u5177\u689d\u4e2d\u7684\u4f4d\u7f6e"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"roles?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Array<Role>"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u53ea\u6709\u7576\u7576\u524d\u7528\u6236\u7684\u89d2\u8272\u5339\u914d\u63d0\u4f9b\u7684\u89d2\u8272\u6578\u7d44\u4e2d\u7684\u4e00\u500b\u6642\uff0c\u63a7\u4ef6\u624d\u6703\u6e32\u67d3\u3002 ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:'type Role = "admin" | "viewer" | "editor" | "designer" | "manager"'})})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"devices?"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:'"all"'})," | ",(0,l.jsx)(n.code,{children:'"desktop"'})," | ",(0,l.jsx)(n.code,{children:'"responsive"'})]}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"all"'})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u5b9a\u7fa9\u63a7\u4ef6\u5c07\u5728\u54ea\u4e9b\u8a2d\u5099\u4e0a\u6e32\u67d3\u3002",(0,l.jsx)(n.code,{children:'"all"'})," \u5728\u6240\u6709\u8a2d\u5099\u4e0a\u6e32\u67d3\u63a7\u4ef6\u3002",(0,l.jsx)(n.code,{children:'"desktop"'})," \u50c5\u5728\u684c\u9762\u8a2d\u5099\u4e0a\u6e32\u67d3\u63a7\u4ef6\u3002",(0,l.jsx)(n.code,{children:'"responsive"'})," \u5728\u5e73\u677f\u96fb\u8166\u548c\u624b\u6a5f\u8a2d\u5099\u4e0a\u6e32\u67d3\u63a7\u4ef6\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"disabled?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u914d\u7f6e\u63a7\u4ef6\u5728\u4f55\u7a2e\u689d\u4ef6\u4e0b\u88ab\u7981\u7528\u6216\u555f\u7528\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"display?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:'"inline" | "block"'})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"inline"'})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u914d\u7f6e\u63a7\u4ef6\u53ca\u5176\u6a19\u7c64\u7684\u6392\u5217\u65b9\u5f0f\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"display"})," \u70ba ",(0,l.jsx)(n.code,{children:'"inline"'}),"\uff0c\u5247\u6a19\u7c64\u548c\u63a7\u4ef6\u5c07\u5728\u540c\u4e00\u884c\uff1b\u5982\u679c ",(0,l.jsx)(n.code,{children:"display"})," \u70ba ",(0,l.jsx)(n.code,{children:'"block"'}),"\uff0c\u5247\u6a19\u7c64\u6703\u5728\u4e00\u884c\uff0c\u63a7\u4ef6\u6703\u5728\u4e0b\u4e00\u884c\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"placeholder?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u986f\u793a\u5728\u8f38\u5165\u6b04\u4f4d\u4e2d\u7684\u4f54\u4f4d\u7b26\u6587\u672c\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"helper?.content"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5982\u679c\u63d0\u4f9b\uff0c\u5c07\u5728\u6a19\u7c64\u65c1\u986f\u793a\u4e00\u500b\u5716\u6a19\u3002\u7576\u61f8\u505c\u5728\u6b64\u5716\u6a19\u4e0a\u6642\uff0c\u6703\u986f\u793a\u5e36\u6709\u984d\u5916\u4fe1\u606f\u7684\u5de5\u5177\u63d0\u793a\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"helper?.position"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:'"top-start"'})," | ",(0,l.jsx)(n.code,{children:'"top"'})," | ",(0,l.jsx)(n.code,{children:'"top-end"'})," | ",(0,l.jsx)(n.code,{children:'"right-start"'})," | ",(0,l.jsx)(n.code,{children:'"right"'})," | ",(0,l.jsx)(n.code,{children:'"right-end"'})," | ",(0,l.jsx)(n.code,{children:'"bottom-end"'})," | ",(0,l.jsx)(n.code,{children:'"bottom"'})," | ",(0,l.jsx)(n.code,{children:'"bottom-start"'})," | ",(0,l.jsx)(n.code,{children:'"left-end"'})," | ",(0,l.jsx)(n.code,{children:'"left"'})," | ",(0,l.jsx)(n.code,{children:'"left-start"'})]}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"top"'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u5de5\u5177\u63d0\u793a\u76f8\u5c0d\u65bc\u52a9\u624b\u5716\u6a19\u7684\u4f4d\u7f6e\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"states?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Array<State>"})}),(0,l.jsxs)(n.td,{style:{textAlign:"center"},children:["[",(0,l.jsx)(n.code,{children:'"normal"'}),"]"]}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u5141\u8a31\u6839\u64da\u5143\u7d20\u7684\u72c0\u614b\u61c9\u7528\u4e0d\u540c\u7684\u6a23\u5f0f ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{children:(0,l.jsx)(n.code,{children:'State = "normal" | "hover" | "active"'})})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"normal"'})," - \u5143\u7d20\u7684\u6b63\u5e38\u72c0\u614b\uff0c",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"hover"'})," - \u7576\u5143\u7d20\u88ab\u61f8\u505c\u6642\u7684\u72c0\u614b\uff0c",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"active"'})," - \u7576\u5143\u7d20\u8655\u65bc\u6d3b\u52d5\u72c0\u614b\uff08\u4f8b\u5982\uff0c\u5206\u9801\u4e2d\u7684\u7576\u524d\u9801\uff09\u6642\u7684\u72c0\u614b"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"config?.lines"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"number"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u6587\u672c\u5340\u57df\u7d44\u4ef6\u7684\u884c\u6578\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"config?.size"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:'"short"'})," | ",(0,l.jsx)(n.code,{children:'"medium"'})," | ",(0,l.jsx)(n.code,{children:'"large"'})," | ",(0,l.jsx)(n.code,{children:'"auto"'})]}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"auto"'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5b57\u7b26\u4e32\uff0c\u6307\u5b9a\u8f38\u5165\u6b04\u4f4d\u7684\u5927\u5c0f\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"default?  "})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Default"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u9ed8\u8a8d\u63a7\u4ef6\u503c\u3002 ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{children:(0,l.jsx)(n.code,{children:"Default: { value: string; }"})})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:"value"})," - \u63a7\u4ef6\u7684\u81ea\u5b9a\u7fa9\u521d\u59cb\u503c ",(0,l.jsx)("br",{})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"style?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"function"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u6b64\u51fd\u6578\u6839\u64da\u63a7\u4ef6\u7684\u503c\u751f\u6210 CSS \u8f38\u51fa\u3002\u53c3\u6578\u662f\u4e00\u500b\u5305\u542b ",(0,l.jsx)(n.code,{children:"value"})," \u9375\u7684\u5c0d\u8c61\uff0c\u8a72\u9375\u6301\u6709\u63a7\u4ef6\u7684\u7576\u524d\u503c\u3002\u51fd\u6578\u8fd4\u56de\u4e00\u500b\u5305\u542b CSS \u9078\u64c7\u5668\u9375\u548c CSS \u5c6c\u6027\u503c\u7684\u5c0d\u8c61\u3002 ",(0,l.jsxs)("pre",{children:[(0,l.jsx)(n.code,{children:"style: ({value}) => {"}),(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:"return {"}),(0,l.jsx)("br",{})," \xa0",(0,l.jsx)(n.code,{children:'"{{WRAPPER}} .brz-text": {'}),(0,l.jsx)("br",{})," \xa0 \xa0 ",(0,l.jsx)(n.code,{children:'display: value === "none" ? "none" : "block"'}),(0,l.jsx)("br",{})," \xa0 \xa0 ",(0,l.jsx)(n.code,{children:"}"}),(0,l.jsx)("br",{})," \xa0 ",(0,l.jsx)(n.code,{children:"}"}),(0,l.jsx)("br",{}),(0,l.jsx)(n.code,{children:"}"})]})]})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u57fa\u672c\u7bc4\u4f8b",children:"\u57fa\u672c\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u4f7f\u7528\u5fc5\u8981\u9375\u7684\u6a19\u6e96\u5b9a\u7fa9\u3002\u6b64\u63a7\u4ef6\u5c07\u5728\u6240\u6709\u8a2d\u5099\u4e0a\u986f\u793a\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u70ba ",(0,l.jsx)(n.code,{children:"string"}),"\uff0c\u8868\u793a\u6587\u672c\u6b04\u4f4d\u7684\u503c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"{\n  value: string;\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u503c\u7684\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  value: "demo example value";\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,l.jsx)(n.h4,{id:"\u6a19\u7c64\u7bc4\u4f8b",children:"\u6a19\u7c64\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u63a7\u4ef6\u7684\u5de6\u5074\u6dfb\u52a0\u6a19\u7c64\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  label: "Description"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u985e\u540d\u7bc4\u4f8b",children:"\u985e\u540d\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5c07 CSS \u985e\u540d\u6dfb\u52a0\u5230\u63a7\u4ef6\u7684 DOM \u7bc0\u9ede\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  className: "myClass"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5716\u6a19\u7bc4\u4f8b",children:"\u5716\u6a19\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u63a7\u4ef6\u6a19\u7c64\u7684\u5de6\u5074\u6dfb\u52a0\u201c\u91cd\u8907\u201d\u5716\u6a19\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  icon: "nc-repeat"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u89d2\u8272\u7bc4\u4f8b",children:"\u89d2\u8272\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u50c5\u5c0d\u64c1\u6709 admin \u548c designer \u6b0a\u9650\u7684\u7528\u6236\u986f\u793a\u63a7\u4ef6\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  roles: ["admin", "designer"]\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8a2d\u5099\u7bc4\u4f8b",children:"\u8a2d\u5099\u7bc4\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u63a7\u4ef6\u5c07\u5728\u6240\u6709\u8a2d\u5099\u4e0a\u6e32\u67d3\u3002\u9019\u500b\u503c\u53ef\u4ee5\u7701\u7565\uff0c\u56e0\u70ba\u9ed8\u8a8d\u70ba ",(0,l.jsx)(n.code,{children:'"all"'}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  devices: "all"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u50c5\u5728 ",(0,l.jsx)(n.code,{children:"desktop"})," \u4e0a\u6e32\u67d3\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  devices: "desktop"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u50c5\u5728\u97ff\u61c9\u6a21\u5f0f\u4e0b\u986f\u793a\uff0c\u7279\u5225\u662f ",(0,l.jsx)(n.code,{children:"tablet"})," \u548c ",(0,l.jsx)(n.code,{children:"mobile"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  devices: "responsive"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u7981\u7528\u7bc4\u4f8b",children:"\u7981\u7528\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u63a7\u4ef6\u5c07\u88ab\u7981\u7528\u3002\u901a\u5e38\u9019\u88e1\u61c9\u8a72\u662f\u4f60\u7684\u52d5\u614b\u689d\u4ef6\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  disabled: true\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7576 ",(0,l.jsx)(n.code,{children:"videoType"})," \u8b8a\u91cf\u70ba ",(0,l.jsx)(n.code,{children:'"custom"'})," \u6642\uff0c\u63a7\u4ef6\u5c07\u88ab\u7981\u7528\u3002\n",(0,l.jsx)(n.code,{children:"getValue"})," \u662f\u4e00\u500b getter \u51fd\u6578\uff0c\u5141\u8a31\u6211\u5011\u901a\u904e id \u7372\u53d6\u63a7\u4ef6\u7684\u503c\u3002\n",(0,l.jsx)(n.code,{children:'"videoType"'})," \u662f\u4e0b\u65b9 ",(0,l.jsx)(n.code,{children:'"select"'})," \u63a7\u4ef6\u7684 id\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const getToolbarContols = ({ getValue }) => {\n  const videoType = getValue("videoType");\n\n  return [\n    {\n      id: "videoType",\n      type: "select",\n      choices: [\n        { title: "Youtube", value: "youtube" },\n        { title: "Custom", value: "custom" },\n      ],\n    },\n    {\n      id: "description",\n      type: "textarea",\n      disabled: videoType === "custom",\n    },\n  ];\n};\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u986f\u793a\u7bc4\u4f8b",children:"\u986f\u793a\u7bc4\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6b64\u7bc4\u4f8b\u4e2d\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:'display: "block"'}),"\uff0c\u6a19\u7c64\u5c07\u986f\u793a\u5728\u7b2c\u4e00\u884c\uff0c\u63a7\u4ef6\u5c07\u986f\u793a\u5728\u7b2c\u4e8c\u884c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  display: "block"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f54\u4f4d\u7b26\u7bc4\u4f8b",children:"\u4f54\u4f4d\u7b26\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u70ba\u63a7\u4ef6\u6dfb\u52a0\u4f54\u4f4d\u7b26\u6587\u672c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  placeholder: "Start typing here..."\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u52a9\u624b\u7bc4\u4f8b",children:"\u52a9\u624b\u7bc4\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u52a9\u624b\u5c0d\u8c61\u5305\u542b\u4e00\u500b\u5167\u5bb9\u5c6c\u6027\uff0c\u503c\u70ba ",(0,l.jsx)(n.code,{children:'"help text"'}),"\uff0c\u5c07\u986f\u793a\u70ba\u984d\u5916\u7684\u6307\u5c0e\u6216\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  helper: {\n    content: "help text"\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7576\u52a9\u624b\u5c0d\u8c61\u5305\u542b\u4f4d\u7f6e\u5c6c\u6027\uff0c\u503c\u70ba ",(0,l.jsx)(n.code,{children:'"top-start"'})," \u6642\uff0c\u8868\u793a\u52a9\u624b\u6587\u672c\u5c07\u986f\u793a\u5728\u5716\u6a19\u7684\u5de6\u4e0a\u89d2\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  helper: {\n    content: "help text",\n    position: "top-start"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u72c0\u614b\u7bc4\u4f8b",children:"\u72c0\u614b\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5141\u8a31\u63a7\u4ef6\u5728\u6b63\u5e38\u548c\u61f8\u505c\u72c0\u614b\u4e0b\u5de5\u4f5c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  states: ["normal", "hover"]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5141\u8a31\u63a7\u4ef6\u5728\u6b63\u5e38\u3001\u61f8\u505c\u548c\u6d3b\u52d5\u72c0\u614b\u4e0b\u5de5\u4f5c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  states: ["normal", "hover", "active"]\n}\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"\u914d\u7f6e\u503c\u7bc4\u4f8blines",children:["\u914d\u7f6e\u503c\u7bc4\u4f8b\uff08",(0,l.jsx)(n.code,{children:"lines"}),"\uff09"]}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u6587\u672c\u5340\u57df\u7d44\u4ef6\u7684\u884c\u6578\u3002\u9019\u6c7a\u5b9a\u4e86\u6587\u672c\u5340\u57df\u8f38\u5165\u6b04\u4f4d\u7684\u53ef\u898b\u9ad8\u5ea6\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  config: {\n    lines: 3\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"\u914d\u7f6e-size-\u7bc4\u4f8b",children:["\u914d\u7f6e ",(0,l.jsx)(n.code,{children:"size"})," \u7bc4\u4f8b"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"size"})," \u5c6c\u6027\u8a2d\u7f6e\u70ba ",(0,l.jsx)(n.code,{children:'"medium"'}),"\uff0c\u8868\u793a\u8f38\u5165\u6b04\u4f4d\u5c07\u4ee5\u4e2d\u7b49\u5c3a\u5bf8\u6e32\u67d3\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  config: {\n    size: "medium"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u9ed8\u8a8d\u503c\u7bc4\u4f8b",children:"\u9ed8\u8a8d\u503c\u7bc4\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6b64\u7bc4\u4f8b\u4e2d\uff0c\u6587\u672c\u5340\u57df\u63a7\u4ef6\u9ed8\u8a8d\u503c\u70ba ",(0,l.jsx)(n.code,{children:'"Default text"'}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  default: {\n    value: "Default text"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"css-\u7bc4\u4f8b",children:"CSS \u7bc4\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528\u4f86\u81ea ",(0,l.jsx)(n.code,{children:"textarea"})," \u63a7\u4ef6\u7684\u81ea\u5b9a\u7fa9\u503c\u66f4\u6539 ",(0,l.jsx)(n.code,{children:".brz-text::after"})," \u5143\u7d20\u7684\u5167\u5bb9\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "description",\n  type: "textarea",\n  style: ({ value }) => {\n    return {\n      "{{WRAPPER}} .brz-text::after": {\n        content: value.value\n      }\n    }\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"html-\u4f7f\u7528\u7bc4\u4f8b",children:"HTML \u4f7f\u7528\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4e0b\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528 textarea \u7684\u8f38\u51fa\u503c\u4f86\u78ba\u5b9a Text \u5143\u7d20\u4e2d\u7684\u6a19\u7c64\u5167\u5bb9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:'import { Brizy } from "@brizy/core";\nimport React, { JSX } from "react";\n\ninterface Props {\n  description: string;\n}\n\nconst Text = (props: Props): JSX.Element => {\n  const { description } = props;\n\n  return (\n    <div className="brz-text">\n      <span>{description}</span>\n    </div>\n  );\n};\n\nBrizy.registerComponent({\n  id: "ThirdParty.Text",\n  component: { editor: Text, view: Text },\n  title: "My Text",\n  category: "custom",\n  options: (props) => {\n    return [\n      {\n        selector: ".brz-text",\n        toolbar: [\n          {\n            id: "toolbarCurrentElement",\n            type: "popover",\n            config: {\n              icon: "nc-text",\n              title: "Text",\n            },\n            devices: "desktop",\n            options: [\n              {\n                id: "description",\n                type: "textarea",\n                devices: "desktop",\n              },\n            ],\n          },\n        ],\n      },\n    ];\n  },\n});\n'})})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},4595:(e,n,t)=>{t.d(n,{A:()=>l});const l="data:image/png;base64,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"},4636:(e,n,t)=>{t.d(n,{A:()=>l});const l="data:image/png;base64,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"},3023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(3696);const s={},d=l.createContext(s);function i(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);