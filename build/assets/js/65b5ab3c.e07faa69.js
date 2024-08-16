"use strict";(self.webpackChunk_brizy_docs=self.webpackChunk_brizy_docs||[]).push([[2904],{2742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(2540),r=t(3023);const o={toc_max_heading_level:4},l="Motion",s={id:"editor-controls/data-controls/motion",title:"Motion",description:"The motion control provides access to 8 predefined animations that are triggered when the page is scrolled. These animations include vertical movement, horizontal movement, transparency changes, blur effects, rotation, scaling, mouse tracking, and mouse tilting.",source:"@site/docs-internals/editor-controls/data-controls/motion.md",sourceDirName:"editor-controls/data-controls",slug:"/editor-controls/data-controls/motion",permalink:"/docs-internals/editor-controls/data-controls/motion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Margin",permalink:"/docs-internals/editor-controls/data-controls/margin"},next:{title:"Multi Select",permalink:"/docs-internals/editor-controls/data-controls/multiselect"}},a={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Basic example",id:"basic-example",level:3},{value:"Return value",id:"return-value",level:3},{value:"Usage",id:"usage",level:3},{value:"Label example",id:"label-example",level:4},{value:"Class name example",id:"class-name-example",level:4},{value:"Icon example",id:"icon-example",level:4},{value:"Roles example",id:"roles-example",level:4},{value:"Devices examples",id:"devices-examples",level:4},{value:"Disabled examples",id:"disabled-examples",level:4},{value:"Helper examples",id:"helper-examples",level:4},{value:"Config <code>disabled</code> example",id:"config-disabled-example",level:4},{value:"Default value examples",id:"default-value-examples",level:4},{value:"CSS examples",id:"css-examples",level:4},{value:"Usage in HTML example",id:"usage-in-html-example",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"motion",children:"Motion"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"motion"})," control provides access to 8 predefined animations that are triggered when the page is scrolled. These animations include vertical movement, horizontal movement, transparency changes, blur effects, rotation, scaling, mouse tracking, and mouse tilting."]}),"\n",(0,i.jsx)(n.p,{children:"Example of the control:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Motion",src:t(5731).A+"",width:"250",height:"325"})}),"\n",(0,i.jsxs)(n.p,{children:["Example of the control with ",(0,i.jsx)(n.code,{children:'"horizontal"'})," animation selected:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Motion",src:t(2694).A+"",width:"250",height:"480"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The identifier of the key where the ",(0,i.jsx)(n.code,{children:'"motion"'})," will save your data"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"type"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Type should be ",(0,i.jsx)(n.code,{children:'"motion"'})," to use this control"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"label?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The label displayed on the top side of the control"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"className?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The custom CSS class name that will be set on the control. It can be used to modify the control styles."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"icon?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Icon name that will be rendered on left side of the control's label. View all ",(0,i.jsx)(n.a,{href:"../../icons/",children:"icons"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"position?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The position of the control in toolbar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"roles?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Array<Role>"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Render the control only if the current user's role matches one of the roles in the provided array. ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:'type Role = "admin" | "viewer" | "editor" | "designer" | "manager"'})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"devices?"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:'"all"'})," | ",(0,i.jsx)(n.code,{children:'"desktop"'})," | ",(0,i.jsx)(n.code,{children:'"responsive"'})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'"all"'})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Define the devices where the control will be rendered. ",(0,i.jsx)(n.code,{children:'"all"'})," renders the control on all devices. ",(0,i.jsx)(n.code,{children:'"desktop"'})," renders the control only on desktop devices. ",(0,i.jsx)(n.code,{children:'"responsive"'})," renders the control on both tablet and mobile devices"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"disabled?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Configure the condition under which the control is disabled or enabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"helper?.content"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"helper?.position"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:'"top-start"'})," | ",(0,i.jsx)(n.code,{children:'"top"'})," | ",(0,i.jsx)(n.code,{children:'"top-end"'})," | ",(0,i.jsx)(n.code,{children:'"right-start"'})," | ",(0,i.jsx)(n.code,{children:'"right"'})," | ",(0,i.jsx)(n.code,{children:'"right-end"'})," | ",(0,i.jsx)(n.code,{children:'"bottom-end"'})," | ",(0,i.jsx)(n.code,{children:'"bottom"'})," | ",(0,i.jsx)(n.code,{children:'"bottom-start"'})," | ",(0,i.jsx)(n.code,{children:'"left-end"'})," | ",(0,i.jsx)(n.code,{children:'"left"'})," | ",(0,i.jsx)(n.code,{children:'"left-start"'})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'"top"'})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Specifies the position of the tooltip relative to the helper icon"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"config?.disabled"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Array<Effect>"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"[ ]"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["An array of animation names that should be disabled. They will not disappear from the list, but they cannot be selected ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("b",{children:(0,i.jsx)(n.code,{children:'Effect = "vertical" | "horizontal" | "transparency" | "blur" | "rotate" | "scale" | "mouseTrack" | "mouseTilt"'})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"default?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Default"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The default control value. ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsxs)("b",{children:[(0,i.jsx)(n.code,{children:"Default: { active: Active; verticalEnabled: boolean; verticalSpeed: number; verticalDirection: string; verticalViewportType: string; verticalViewportTop: number; verticalViewportBottom: number; horizontalEnabled: boolean; horizontalSpeed: number; horizontalDirection: string; horizontalViewportType: string; horizontalViewportBottom: number; horiztontalViewportTop: number; rotateEnabled: boolean; rotateSpeed: number; rotateDirection: string; rotateX: string; rotateY: string; rotateViewportType: string; rotateViewportBottom: number; rotateViewportTop: number; transparencyEnabled: boolean; transparencyLevel: number; transparencyDirection: string; transparencyViewportType: string; transparencyViewportBottom: number; transparencyViewportTop: number; scaleEnabled: boolean; scaleSpeed: number; scaleDirection: string; scaleX: string; scaleY: string; scaleViewportType: string; scaleViewportBottom: number; scaleViewportTop: number; blurEnabled: boolean; blurLevel: number; blurDirection: string; blurViewportType: string; blurViewportBottom: number; blurViewportTop: number; mouseTrackEnabled: boolean; mouseTrackDirection: string; mouseTrackSpeed: number; mouseTiltEnabled: boolean; mouseTiltDirection: string; mouseTiltSpeed: number; }"})," "]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:"Active"})," - indicates the currently selected motion, which can be ",(0,i.jsx)(n.code,{children:'"vertical"'}),", ",(0,i.jsx)(n.code,{children:'"horizontal"'}),", ",(0,i.jsx)(n.code,{children:'"transparency"'}),", ",(0,i.jsx)(n.code,{children:'"blur"'}),", ",(0,i.jsx)(n.code,{children:'"rotate"'}),", ",(0,i.jsx)(n.code,{children:'"scale"'}),", ",(0,i.jsx)(n.code,{children:'"mouseTrack"'}),", ",(0,i.jsx)(n.code,{children:'"mouseTilt"'})," or ",(0,i.jsx)(n.code,{children:"undefined"})," ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalSpeed"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"verticalViewportBottom"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horizontalEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horizontalSpeed"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horizontalDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horizontalViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horiztontalViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"horizontalViewportType"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateEnabled"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateX"})," - angle for rotation around the X axis. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateY"})," - angle for rotation around the Y axis. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"rotateViewportType"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyLevel"})," - indicates animation value. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"transparencyViewportBottom"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleEnabled"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleX"})," - angle for scale around the X axis. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleY"})," - angle for scale around the Y axis. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"scaleViewportBottom"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurLevel"})," - indicates animation value. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurDirection"}),"- animation direction. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurViewportType"})," - Viewport type of animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurViewportTop"})," - animation minimum offset. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"blurViewportBottom"})," - animation maximum offset. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTrackEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTrackSpeed"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTrackDirection"}),"- animation direction. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTiltEnabled"}),"- indicates enabled animation. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTiltSpeed"})," - indicates animation speed. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"mouseTiltDirection"}),"- animation direction. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"style?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"function"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["This function generates CSS output based on the value from the control. The parameter is an object containing a ",(0,i.jsx)(n.code,{children:"value"})," key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  ",(0,i.jsxs)("pre",{children:[(0,i.jsx)(n.code,{children:"style: ({value}) => {"}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"return {"}),(0,i.jsx)("br",{}),"  ",(0,i.jsx)(n.code,{children:'"{{WRAPPER}} .brz-text": {'}),(0,i.jsx)("br",{}),"   ",(0,i.jsx)(n.code,{children:'display: value?.rotate?.speed > 0 ? "flex" : "none"'}),(0,i.jsx)("br",{}),"  ",(0,i.jsx)(n.code,{children:"}"}),(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"}"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:"}"})]})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"basic-example",children:"Basic example"}),"\n",(0,i.jsx)(n.p,{children:"Standard definition with only the required keys. This control will be displayed on all devices."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns an object with the following values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  active: undefined | "vertical" | "horizontal" | "transparency" | "blur" | "rotate" | "scale" | "mouseTrack" | "mouseTilt";\n  vertical: undefined | { speed: number; direction: "up" | "down"; viewport: { bottom: number; top: number; type: "viewport"; } };\n  horizontal: undefined | { speed: number; direction: "left" | "right"; viewport: { bottom: number; top: number; type: "viewport"; } };\n  transparency: undefined | { direction: "in" | "out" | "outIn" | "inOut"; level: number; viewport: { bottom: number; top: number; type: "viewport"; } };\n  blur: undefined | { direction: "in" | "out" | "outIn" | "inOut"; level: number; viewport: { bottom: number; top: number; type: "viewport"; } };\n  rotate: undefined | { direction: "left" | "right"; x: "left" | "center" | "right"; y: "top" | "center" | "bottom"; speed: number; viewport: { bottom: number; top: number; type: "viewport"; } };\n  scale: undefined | { direction: "up" | "down" | "downUp" | "upDown"; speed: number; x: "left" | "center" | "right"; y: "top" | "center" | "bottom"; viewport: { bottom: number; top: number; type: "viewport"; } };\n  mouseTrack: undefined | { direction: "direct" | "opposite"; speed: number; };\n  mouseTilt: undefined | { direction: "direct" | "opposite"; speed: number; };\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"active"})," - indicates the currently selected animation; ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"All other object values are the animation names, which contain general parameters:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"speed"})," - the speed of the animation movement; ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"direction"})," - the direction of the animation movement; ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"viewport"})," - information about viewport: offset top and bottom; ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"level"})," - indicates the effect (transparency, blur) strength; ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"x, y"})," - indicates on which side of the axis the animation will start;"]}),"\n",(0,i.jsx)(n.p,{children:'Example of value when the option "rotate" is selected:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  active: "rotate",\n  mouseTiltEnabled: false,\n  mouseTrackEnabled: false,\n  rotateEnabled: true\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'When the settings of "rotate" are changed:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  rotateDirection: "right",\n  rotateSpeed: 0.72,\n  rotateViewportBottom: 1,\n  rotateViewportTop: 0,\n  rotateViewportType: "viewport",\n  rotateX: "center",\n  rotateY: "center"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h4,{id:"label-example",children:"Label example"}),"\n",(0,i.jsx)(n.p,{children:"Adds a label to the top of the list of animations."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  label: "Motion",\n  type: "motion"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"class-name-example",children:"Class name example"}),"\n",(0,i.jsx)(n.p,{children:"Adding a CSS class to the control's DOM node."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  className: "myMotion"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"icon-example",children:"Icon example"}),"\n",(0,i.jsx)(n.p,{children:'Adding a "star" icon to the left of the control\'s label.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  icon: "nc-star"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"roles-example",children:"Roles example"}),"\n",(0,i.jsx)(n.p,{children:"Show the control only to users with admin and designer privileges."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  roles: ["admin", "designer"]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"devices-examples",children:"Devices examples"}),"\n",(0,i.jsxs)(n.p,{children:["It will be rendered on all devices. This value can be skipped because it is set to ",(0,i.jsx)(n.code,{children:'"all"'})," by default."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  devices: "all"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Rendering will occur only on ",(0,i.jsx)(n.code,{children:"desktop"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  devices: "desktop"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The display is limited to responsive modes, specifically ",(0,i.jsx)(n.code,{children:"tablet"})," and ",(0,i.jsx)(n.code,{children:"mobile"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  devices: "responsive"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"disabled-examples",children:"Disabled examples"}),"\n",(0,i.jsx)(n.p,{children:"Control will be disabled. Normally, here should be your dynamic condition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion", \n  disabled: true\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Control will be disabled when ",(0,i.jsx)(n.code,{children:"videoType"})," variable will be ",(0,i.jsx)(n.code,{children:'"custom"'}),".\n",(0,i.jsx)(n.code,{children:"getValue"})," is a getter function that allows us to retrieve the value of controls by their id.\n",(0,i.jsx)(n.code,{children:'"videoType"'})," is the id of the ",(0,i.jsx)(n.code,{children:'"select"'})," control below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const getToolbarContols = ({ getValue }) => {\n  const videoType = getValue("videoType");\n\n  return [\n    {\n      id: "videoType",\n      type: "select",\n      choices: [\n        { title: "Youtube", value: "youtube" },\n        { title: "Custom", value: "custom" }\n      ]\n    },\n    {\n      id: "motion",\n      type: "motion",\n      disabled: videoType === "custom"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"helper-examples",children:"Helper examples"}),"\n",(0,i.jsxs)(n.p,{children:["The helper object contains a content property with the value ",(0,i.jsx)(n.code,{children:'"help text"'}),", which will be displayed as additional guidance or information for the user."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  helper: {\n    content: "help text"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When the helper object contains a position property with the value ",(0,i.jsx)(n.code,{children:'"top-start"'}),", it indicates that the helper text will be displayed in the top left corner of the icon."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  helper: {\n    content: "help text",\n    position: "top-start"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"config-disabled-example",children:["Config ",(0,i.jsx)(n.code,{children:"disabled"})," example"]}),"\n",(0,i.jsxs)(n.p,{children:["An array of animation names that should be disabled. In this case, you cannot select ",(0,i.jsx)(n.code,{children:'"vertical"'})," and ",(0,i.jsx)(n.code,{children:'"scale"'})," animations."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  config: {\n    disabled: ["vertical", "scale"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"default-value-examples",children:"Default value examples"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"motion"})," control provides extensive options for adding dynamic motion effects to elements.\nBelow is a detailed configuration object with all default values specified:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion", \n  type: "motion",\n  default: {\n    active: "rotate",\n    verticalEnabled: false,\n    verticalSpeed: 0.5,\n    verticalSpeedSuffix: "",\n    verticalDirection: "up",\n    verticalViewportType: "viewport",\n    verticalViewportTop: 0,\n    verticalViewportBottom: 100,\n    horizontalEnabled: false,\n    horizontalSpeed: 0.5,\n    horizontalSpeedSuffix: "",\n    horizontalDirection: "left",\n    horizontalViewportType: "viewport",\n    horizontalViewportBottom: 100,\n    horizontalViewportTop: 0,\n    rotateEnabled: false,\n    rotateSpeed: 0.5,\n    rotateSpeedSuffix: "",\n    rotateDirection: "left",\n    rotateX: "center",\n    rotateY: "center",\n    rotateViewportType: "viewport",\n    rotateViewportBottom: 100,\n    rotateViewportTop: 0,\n    transparencyEnabled: false,\n    transparencyLevel: 0.5,\n    transparencyLevelSuffix: "",\n    transparencyDirection: "in",\n    transparencyViewportType: "viewport",\n    transparencyViewportBottom: 100,\n    transparencyViewportTop: 0,\n    scaleEnabled: false,\n    scaleSpeed: 10,\n    scaleSpeedSuffix: "",\n    scaleDirection: "up",\n    scaleX: "center",\n    scaleY: "center",\n    scaleViewportType: "viewport",\n    scaleViewportBottom: 100,\n    scaleViewportTop: 0,\n    blurEnabled: false,\n    blurLevel: 0.5,\n    blurLevelSuffix: "",\n    blurDirection: "in",\n    blurViewportType: "viewport",\n    blurViewportBottom: 100,\n    blurViewportTop: 0,\n    mouseTrackEnabled: false,\n    mouseTrackDirection: "direct",\n    mouseTrackSpeed: 0.25,\n    mouseTrackSpeedSuffix: "",\n    mouseTiltEnabled: false,\n    mouseTiltDirection: "direct",\n    mouseTiltSpeed: 0.25,\n    mouseTiltSpeedSuffix: ""\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"css-examples",children:"CSS examples"}),"\n",(0,i.jsxs)(n.p,{children:["This example will change the transform of ",(0,i.jsx)(n.code,{children:".brz-text"})," and ",(0,i.jsx)(n.code,{children:".brz-box"})," elements based on the ",(0,i.jsx)(n.code,{children:"motion"})," control values.\nIf ",(0,i.jsx)(n.code,{children:"horizontal"})," motion is enabled and its ",(0,i.jsx)(n.code,{children:"speed"})," is greater than or equal to 0.5, the ",(0,i.jsx)(n.code,{children:".brz-text"})," element will translate\nhorizontally by that speed value multiplied by 10 pixels.\nIf ",(0,i.jsx)(n.code,{children:"vertical"})," motion is enabled and its ",(0,i.jsx)(n.code,{children:"speed"})," is greater than or equal to 0.5, the ",(0,i.jsx)(n.code,{children:".brz-box"})," element will translate\nvertically by that speed value multiplied by 10 pixels.\nAlso, if ",(0,i.jsx)(n.code,{children:"transparency"})," level >= 0.5, then we will set ",(0,i.jsx)(n.code,{children:".brz-box"})," element to display ",(0,i.jsx)(n.code,{children:'"flex"'}),",\notherwise it will be displayed ",(0,i.jsx)(n.code,{children:'"none"'}),";"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  id: "motion",\n  type: "motion",\n  style: ({ value }) => {\n    const display = value?.transparency?.level >= 0.5 ? "flex" : "none";\n    \n    const horizontalTranslate = value?.horizontal?.enabled && value?.horizontal?.speed >= 0.5\n      ? `translateX(${value.horizontal.speed * 10}px)`\n      : "translateX(0)";\n\n    const verticalTranslate = value?.vertical?.enabled && value?.vertical?.speed >= 0.5\n      ? `translateY(${value.vertical.speed * 10}px)`\n      : "translateY(0)";\n\n    return {\n      "{{WRAPPER}} .brz-text": {\n        transform: horizontalTranslate,\n      },\n      "{{WRAPPER}} .brz-box": {\n        transform: verticalTranslate,\n        display\n      }\n    }           \n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"usage-in-html-example",children:"Usage in HTML example"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we demonstrate the use of ",(0,i.jsx)(n.code,{children:"motion"})," control values (",(0,i.jsx)(n.code,{children:"horizontal"})," and ",(0,i.jsx)(n.code,{children:"rotate"}),") to dynamically transform and\ncontrol a carousel component's behavior. The ",(0,i.jsx)(n.code,{children:"Carousel"})," component reacts to changes in ",(0,i.jsx)(n.code,{children:"motion"})," settings to adjust\nits display, offering a dynamic user experience."]}),"\n",(0,i.jsxs)(n.p,{children:["This example demonstrates how ",(0,i.jsx)(n.code,{children:"motion"})," control values can be utilized to create dynamic and responsive user interfaces,\nenhancing the user experience by adjusting visual elements based on user-defined ",(0,i.jsx)(n.code,{children:"motion"})," settings."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Brizy } from "@brizy/core";\nimport React, { JSX } from "react";\n\ninterface Props {\n  active: undefined | "vertical" | "horizontal" | "transparency" | "blur" | "rotate" | "scale" | "mouseTrack" | "mouseTilt",\n  carouselVerticalEnabled: boolean,\n  carouselVerticalSpeed: number,\n  carouselVerticalSpeedSuffix: string,\n  carouselVerticalDirection: "up" | "down",\n  carouselVerticalViewportType: "viewport",\n  carouselVerticalViewportTop: number,\n  carouselVerticalViewportBottom: number,\n  carouselHorizontalEnabled: boolean,\n  carouselHorizontalSpeed: number,\n  carouselHorizontalSpeedSuffix: string,\n  carouselHorizontalDirection: "left" | "right",\n  carouselHorizontalViewportType: "viewport",\n  carouselHorizontalViewportBottom: number,\n  carouselHorizontalViewportTop: number,\n  carouselRotateEnabled: boolean,\n  carouselRotateSpeed: number,\n  carouselRotateSpeedSuffix: string,\n  carouselRotateDirection: "left" | "right",\n  carouselRrotateX: "left" | "center" | "right",\n  carouselRotateY: "top" | "center" | "bottom",\n  carouselRotateViewportType: "viewport",\n  carouselRotateViewportBottom: number,\n  carouselRotateViewportTop: number,\n  carouselTransparencyEnabled: boolean,\n  carouselTransparencyLevel: number,\n  carouselTransparencyLevelSuffix: string,\n  carouselTransparencyDirection: "in" | "out" | "outIn" | "inOut",\n  carouselTransparencyViewportType: "viewport",\n  carouselTransparencyViewportBottom: number,\n  carouselTransparencyViewportTop: number,\n  carouselScaleEnabled: boolean,\n  carouselScaleSpeed: number,\n  carouselScaleSpeedSuffix: string,\n  carouselScaleDirection: "up" | "down" | "downUp" | "upDown",\n  carouselScaleX: "left" | "center" | "right",\n  carouselScaleY: "top" | "center" | "bottom",\n  carouselScaleViewportType: "viewport",\n  carouselScaleViewportBottom: number,\n  carouselScaleViewportTop: number,\n  carouselBlurEnabled: boolean,\n  carouselBlurLevel: number,\n  carouselBlurLevelSuffix: string,\n  carouselBlurDirection: "in" | "out" | "outIn" | "inOut",\n  carouselBlurViewportType: "viewport",\n  carouselBlurViewportBottom: number,\n  carouselBlurViewportTop: number,\n  carouselMouseTrackEnabled: boolean,\n  carouselMouseTrackDirection: "direct" | "opposite",\n  carouselMouseTrackSpeed: number,\n  carouselMouseTrackSpeedSuffix: string,\n  carouselMouseTiltEnabled: boolean,\n  carouselMouseTiltDirection: "direct" | "opposite",\n  carouselMouseTiltSpeed: number,\n  carouselMouseTiltSpeedSuffix: string\n}\n\nconst Carousel = (props: Props): JSX.Element => {\n  const { active, carouselRotateSpeed, carouselRotateDirection, carouselHorizontalSpeed, carouselHorizontalDirection } = props;\n\n  const calculateRotation = (speed?: number, direction?: "left" | "right") => {\n    if (speed && direction) {\n      return `rotate${direction === "left" ? "-" : ""}${speed}deg`;\n    }\n    return "rotate(0deg)";\n  };\n\n  const calculateTranslateX = (speed?: number, direction?: "left" | "right") => {\n    if (speed && direction) {\n      return `translateX(${direction === "left" ? "-" : ""}${speed * 10}px)`;\n    }\n    return "translateX(0)";\n  };\n\n  const renderCarouselContent = () => {\n    switch (active) {\n      case "rotate":\n        return (\n          <div className="brz-carousel-item" style={{ transform: calculateRotation(carouselRotateSpeed, carouselRotateDirection) }}>\n            <img src="carousel-image.jpg" alt="Carousel Image" />\n          </div>\n        );\n      case "horizontal":\n        return (\n          <div className="brz-carousel-item" style={{ transform: calculateTranslateX(carouselHorizontalSpeed, carouselHorizontalDirection) }}>\n            <img src="carousel-image.jpg" alt="Carousel Image" />\n          </div>\n        );\n      default:\n        return null;\n    }\n  };\n\n  return (\n    <div className="brz-carousel">\n      {renderCarouselContent()}\n    </div>\n  );\n};\n\nBrizy.registerComponent({\n  id: "ThirdParty.Carousel",\n  component: { editor: Carousel, view: Carousel },\n  title: "My Carousel",\n  category: "custom",\n  options: (props) => {\n    return [\n      {\n        selector: ".brz-\u0441arousel",\n        toolbar: [\n          {\n            id: "toolbarSettings",\n            type: "popover",\n            config: {\n              icon: "nc-cog",\n              title: "Settings"\n            },\n            options: [\n              {\n                id: "carousel",\n                type: "motion",\n                devices: "desktop"\n              }\n            ]\n          }\n        ]\n      }\n    ];\n  }\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2694:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/motion-horizontal-d7bbcb6abc1c06c2b1fb0693eb716da7.png"},5731:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/motion-225fe10252deb59ca12f561c8a00e0c9.png"},3023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(3696);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);