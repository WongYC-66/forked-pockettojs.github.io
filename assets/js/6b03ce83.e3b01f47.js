"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[2687],{1373:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(4848),r=t(8453);const s={sidebar_position:1,title:"Source Code Protection"},c=void 0,i={id:"extra/source-code-protection",title:"Source Code Protection",description:"Introduction",source:"@site/docs/extra/source-code-protection.md",sourceDirName:"extra",slug:"/extra/source-code-protection",permalink:"/docs/extra/source-code-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extra/source-code-protection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Source Code Protection"},sidebar:"tutorialSidebar",previous:{title:"Extra Tutorial"},next:{title:"Create a Node Module",permalink:"/docs/extra/create-a-node-module"}},a={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Obfuscation",id:"obfuscation",level:3},{value:"Steps",id:"steps",level:3}];function u(e){const o={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(o.p,{children:"This is a tutorial to guide you how to protect your source code to prevent reverse engineering."}),"\n",(0,n.jsxs)(o.admonition,{title:"Assumption",type:"info",children:[(0,n.jsxs)(o.p,{children:["This tutorial is assumed that you source code are all in ",(0,n.jsx)(o.code,{children:"src"})," folder, an you have a ",(0,n.jsx)(o.code,{children:"index.ts"})," file in the root directory of your project."]}),(0,n.jsxs)(o.p,{children:["If you have a different structure, you can modify the ",(0,n.jsx)(o.code,{children:"tsconfig.json"})," file to match your project structure."]})]}),"\n",(0,n.jsx)(o.h3,{id:"obfuscation",children:"Obfuscation"}),"\n",(0,n.jsx)(o.p,{children:"Obfuscation is a technique to make your code unreadable to humans. It is a way to protect your code from reverse engineering. There are many tools available to obfuscate your code. Here are some popular tools:"}),"\n",(0,n.jsx)(o.h3,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Install the following packages:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"npm install -D typescript @types/node ts-node tsconfig-paths eslint eslint-config-airbnb-base eslint-plugin-import jasmine ncp javascript-obfuscator tsc-alias nyc\n"})}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsxs)(o.li,{children:["Add the following scripts to your ",(0,n.jsx)(o.code,{children:"package.json"})," file:"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",metastring:"title=package.json",children:'{\n  "name": "your-module-name",\n  "main": "dist/src/index.js",\n  "types": "dist/src/index.d.ts",\n  "scripts": {\n    "obstructor:node": "ncp dist obfuscated && javascript-obfuscator dist --compact true --target node --output obfuscated",\n    "obstructor:browser": "ncp dist obfuscated && javascript-obfuscator dist --compact true --target browser --output obfuscated",\n  }\n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["You can use the ",(0,n.jsx)(o.code,{children:"obstructor:node"})," script to obfuscate your code for Node.js and the ",(0,n.jsx)(o.code,{children:"obstructor:browser"})," script to obfuscate your code for the browser."]}),"\n",(0,n.jsxs)(o.p,{children:["To compile your code into a node module, ",(0,n.jsx)(o.a,{href:"/docs/extra/create-a-node-module",children:"follow this tutorial"}),"."]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>i});var n=t(6540);const r={},s=n.createContext(r);function c(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);