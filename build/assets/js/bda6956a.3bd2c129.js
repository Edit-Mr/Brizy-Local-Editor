"use strict";(self.webpackChunk_brizy_docs=self.webpackChunk_brizy_docs||[]).push([[6477],{936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=t(2540),s=t(3023);const i={sidebar_position:2,toc_max_heading_level:4},d="Input Text",r={id:"editor-controls/data-controls/inputText",title:"Input Text",description:"Brizy's inputText control offers a straightforward input field for text entry, allowing users to effortlessly input and edit text.",source:"@site/docs-internals/editor-controls/data-controls/inputText.md",sourceDirName:"editor-controls/data-controls",slug:"/editor-controls/data-controls/inputText",permalink:"/docs-internals/editor-controls/data-controls/inputText",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/docs-internals/editor-controls/data-controls/switch"},next:{title:"Paypal",permalink:"/docs-internals/editor-controls/data-controls/paypal"}},c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Basic example",id:"basic-example",level:3},{value:"Return value",id:"return-value",level:3},{value:"Usage",id:"usage",level:3},{value:"Placeholder example",id:"placeholder-example",level:4},{value:"Label example",id:"label-example",level:4},{value:"Class name example",id:"class-name-example",level:4},{value:"Icon example",id:"icon-example",level:4},{value:"Roles example",id:"roles-example",level:4},{value:"Devices examples",id:"devices-examples",level:4},{value:"Disabled examples",id:"disabled-examples",level:4},{value:"Display example",id:"display-example",level:4},{value:"Helper examples",id:"helper-examples",level:4},{value:"States examples",id:"states-examples",level:4},{value:"Default value example",id:"default-value-example",level:4},{value:"CSS example",id:"css-example",level:4},{value:"Usage in HTML example",id:"usage-in-html-example",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"input-text",children:"Input Text"}),"\n",(0,l.jsxs)(n.p,{children:["Brizy's ",(0,l.jsx)(n.code,{children:"inputText"})," control offers a straightforward input field for text entry, allowing users to effortlessly input and edit text."]}),"\n",(0,l.jsxs)(n.p,{children:["Example of the ",(0,l.jsx)(n.code,{children:"inputText"}),":"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"InputText",src:t(6316).A+"",width:"281",height:"54"})}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Default"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"id"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The identifier of the key where the control will save your data"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"type"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Type should be ",(0,l.jsx)(n.code,{children:'"inputText"'})," to use this control"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"placeholder?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The placeholder text displayed in the input field"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"label?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The label displayed on the left side of the control"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"className?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The custom CSS class name that will be set on the control. It can be used to modify the control styles."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"icon?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Icon name that will be rendered on left side of the control's label. View all ",(0,l.jsx)(n.a,{href:"/docs-internals/icons/",children:"icons"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"position?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"number"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The position of the control in toolbar"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"roles?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Array<Role>"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Render the control only if the current user's role matches one of the roles in the provided array. ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:'type Role = "admin" | "viewer" | "editor" | "designer" | "manager"'})})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"devices?"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:'"all"'})," | ",(0,l.jsx)(n.code,{children:'"desktop"'})," | ",(0,l.jsx)(n.code,{children:'"responsive"'})]}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"all"'})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Define the devices where the control will be rendered. ",(0,l.jsx)(n.code,{children:'"all"'})," renders the control on all devices. ",(0,l.jsx)(n.code,{children:'"desktop"'})," renders the control only on desktop devices. ",(0,l.jsx)(n.code,{children:'"responsive"'})," renders the control on both tablet and mobile devices"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"disabled?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Configure the condition under which the control is disabled or enabled"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"display?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:'"inline" | "block"'})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"inline"'})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Configure how the control and its label will be arranged. If ",(0,l.jsx)(n.code,{children:"display"})," is ",(0,l.jsx)(n.code,{children:'"inline"'})," then label and control will be in one row, if ",(0,l.jsx)(n.code,{children:"display"})," is ",(0,l.jsx)(n.code,{children:'"block"'})," then label will be in one row, and the next row down will be the control"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"helper?.content"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"helper?.position"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:'"top-start"'})," | ",(0,l.jsx)(n.code,{children:'"top"'})," | ",(0,l.jsx)(n.code,{children:'"top-end"'})," | ",(0,l.jsx)(n.code,{children:'"right-start"'})," | ",(0,l.jsx)(n.code,{children:'"right"'})," | ",(0,l.jsx)(n.code,{children:'"right-end"'})," | ",(0,l.jsx)(n.code,{children:'"bottom-end"'})," | ",(0,l.jsx)(n.code,{children:'"bottom"'})," | ",(0,l.jsx)(n.code,{children:'"bottom-start"'})," | ",(0,l.jsx)(n.code,{children:'"left-end"'})," | ",(0,l.jsx)(n.code,{children:'"left"'})," | ",(0,l.jsx)(n.code,{children:'"left-start"'})]}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:'"top"'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Specifies the position of the tooltip relative to the helper icon"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"states?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Array<State>"})}),(0,l.jsxs)(n.td,{style:{textAlign:"center"},children:["[",(0,l.jsx)(n.code,{children:'"normal"'}),"]"]}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows for different styles based on the element's state ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{children:(0,l.jsx)(n.code,{children:'State = "normal" | "hover" | "active"'})})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"normal"'})," - the normal state of an element, ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"hover"'})," - the state when the element is hovered over, ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:'"active"'})," - the state when the element is active (e.g., current page in pagination)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"default?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Default"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["The default control value. ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{children:(0,l.jsx)(n.code,{children:"Default: { value: string; }"})})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:"value"})," - the control's custom initial value ",(0,l.jsx)("br",{})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"style?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"function"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["This function generates CSS output based on the value from the control. The parameter is an object containing a ",(0,l.jsx)(n.code,{children:"value"})," key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values ",(0,l.jsxs)("pre",{children:[(0,l.jsx)(n.code,{children:"style: ({value}) => {"}),(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:"return {"}),(0,l.jsx)("br",{}),"  ",(0,l.jsx)(n.code,{children:'"{{WRAPPER}} .brz-border": {'}),(0,l.jsx)("br",{}),"  ",(0,l.jsx)(n.code,{children:'display: value.length > 0 ? "block" : "none"'}),(0,l.jsx)("br",{}),"  ",(0,l.jsx)(n.code,{children:"}"}),(0,l.jsx)("br",{})," ",(0,l.jsx)(n.code,{children:"}"}),(0,l.jsx)("br",{}),(0,l.jsx)(n.code,{children:"}"})]})]})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"basic-example",children:"Basic example"}),"\n",(0,l.jsx)(n.p,{children:"Standard definition with only the required keys. This control will be visible on all devices."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"return-value",children:"Return value"}),"\n",(0,l.jsxs)(n.p,{children:["The return value is a ",(0,l.jsx)(n.code,{children:"string"})," representing the text field value."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"{\n  value: string;\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"Example of value:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  value: "text inside an input"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h4,{id:"placeholder-example",children:"Placeholder example"}),"\n",(0,l.jsx)(n.p,{children:"Adding the placeholder text for the control."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  placeholder: "http://"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"label-example",children:"Label example"}),"\n",(0,l.jsx)(n.p,{children:"Adding a label on the left side of the control."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  label: "Link"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"class-name-example",children:"Class name example"}),"\n",(0,l.jsx)(n.p,{children:"Adding a CSS class to the control's DOM node."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  className: "myInputText"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"icon-example",children:"Icon example"}),"\n",(0,l.jsx)(n.p,{children:'Adding a "link" icon to the left of the control\'s label.'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  icon: "nc-link"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"roles-example",children:"Roles example"}),"\n",(0,l.jsx)(n.p,{children:"Show the control only to users with admin and designer privileges."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  roles: ["admin", "designer"]\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"devices-examples",children:"Devices examples"}),"\n",(0,l.jsxs)(n.p,{children:["It will be rendered on all devices. This value can be omitted since it defaults to ",(0,l.jsx)(n.code,{children:'"all"'}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  devices: "all"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Rendering will occur only on ",(0,l.jsx)(n.code,{children:"desktop"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  devices: "desktop"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["The display is limited to responsive modes, specifically ",(0,l.jsx)(n.code,{children:"tablet"})," and ",(0,l.jsx)(n.code,{children:"mobile"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  devices: "responsive"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"disabled-examples",children:"Disabled examples"}),"\n",(0,l.jsx)(n.p,{children:"Control will be disabled. Normally, here should be your dynamic condition."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  disabled: true\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Control will be disabled when ",(0,l.jsx)(n.code,{children:"videoType"})," variable will be ",(0,l.jsx)(n.code,{children:'"custom"'}),".\n",(0,l.jsx)(n.code,{children:"getValue"})," is a getter function that allows us to retrieve the value of controls by their id.\n",(0,l.jsx)(n.code,{children:'"videoType"'})," is the id of the ",(0,l.jsx)(n.code,{children:'"select"'})," control below."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const getToolbarContols = ({ getValue }) => {\n  const videoType = getValue("videoType");\n\n  return [\n    {\n      id: "videoType",\n      type: "select",\n      choices: [\n        { title: "Youtube", value: "youtube" },\n        { title: "Custom", value: "custom" }\n      ],\n    },\n    {\n      id: "link",\n      type: "inputText",\n      disabled: videoType === "custom"\n    }\n  ];\n};\n'})}),"\n",(0,l.jsx)(n.h4,{id:"display-example",children:"Display example"}),"\n",(0,l.jsxs)(n.p,{children:["In this example, with ",(0,l.jsx)(n.code,{children:'display: "block"'}),", the label will be rendered on the first row and the control on the second."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  display: "block"\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"helper-examples",children:"Helper examples"}),"\n",(0,l.jsxs)(n.p,{children:["The helper object contains a content property with the value ",(0,l.jsx)(n.code,{children:'"help text"'}),", which will be displayed as additional guidance or information for the user."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  helper: {\n    content: "help text"\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["When the helper object contains a position property with the value ",(0,l.jsx)(n.code,{children:'"top-start"'}),", it indicates that the helper text will be displayed at the top left corner of the icon."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  helper: {\n    content: "help text",\n    position: "top-start"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"states-examples",children:"States examples"}),"\n",(0,l.jsx)(n.p,{children:"Allows the control to work in normal and hover states."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  states: ["normal", "hover"]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Allows the control to work in normal, hover and active states."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  states: ["normal", "hover", "active"]\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"default-value-example",children:"Default value example"}),"\n",(0,l.jsxs)(n.p,{children:["In this example, the inputText control has an initial value of ",(0,l.jsx)(n.code,{children:'"https://www.google.com/"'})," by default."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  default: {\n    value: "https://www.google.com/"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"css-example",children:"CSS example"}),"\n",(0,l.jsxs)(n.p,{children:["Show or hide the ",(0,l.jsx)(n.code,{children:".brz-border"})," element with CSS using a ",(0,l.jsx)(n.code,{children:"inputText"})," control value."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'{\n  id: "link",\n  type: "inputText",\n  style: ({ value }) => {\n    if (value.value.length > 0) {\n      return {\n        "{{WRAPPER}} .brz-border": {\n          display: "block"\n        }\n      }\n    }\n\n    return {\n      "{{WRAPPER}} .brz-border": {\n        display: "none"\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,l.jsx)(n.h4,{id:"usage-in-html-example",children:"Usage in HTML example"}),"\n",(0,l.jsxs)(n.p,{children:["The provided code defines a React functional component named ",(0,l.jsx)(n.code,{children:"Input"}),". This component serves as a customizable input control, which can be used in forms or other user interfaces where text input is required."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:'import classNames from "classnames";\nimport React, { JSX } from "react";\n\ninterface Props {\n  value: string;\n  onChange: (v: string) => void;\n}\n\nexport const Input = (props: Props): JSX.Element => {\n  const { value, onChange } = props;\n  return (\n    <div className="brz-input">\n      <input type="text" value={value} onChange={({ target: { value } }): void => onChange(value)} />\n    </div>\n  );\n};\n\nBrizy.registerComponent(Input, {\n  id: "ThirdParty.Input",\n  title: "My Input",\n  options: (props) => {\n    return [\n      {\n        selector: ".brz-input",\n        toolbar: [\n          {\n            id: "toolbarCurrentElement",\n            type: "popover",\n            config: {\n              icon: "nc-input",\n              title: "Input"\n            },\n            devices: "desktop",\n            options: [\n              {\n                id: "link",\n                type: "inputText",\n                devices: "desktop"\n              }\n            ]\n          }\n        ]\n      }\n    ];\n  }\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},6316:(e,n,t)=>{t.d(n,{A:()=>l});const l="data:image/png;base64,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"},3023:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var l=t(3696);const s={},i=l.createContext(s);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);