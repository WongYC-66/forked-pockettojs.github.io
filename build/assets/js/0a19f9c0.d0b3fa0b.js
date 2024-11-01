"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[2942],{9980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),i=t(8453);const s={sidebar_label:"Svelte",title:"Svelte",sidebar_position:4},a=void 0,l={id:"installation/frontend/svelte",title:"Svelte",description:"Please make sure you have go through the Environment Setup before you proceed with the installation.",source:"@site/docs/installation/frontend/svelte.md",sourceDirName:"installation/frontend",slug:"/installation/frontend/svelte",permalink:"/forked-pockettojs.github.io/docs/installation/frontend/svelte",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Svelte",title:"Svelte",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/forked-pockettojs.github.io/docs/installation/frontend/vue"},next:{title:"Backend Frameworks"}},r={},c=[{value:"Installation",id:"installation",level:3},{value:"Using Vite",id:"using-vite",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Please make sure you have go through the ",(0,o.jsx)(n.a,{href:"/docs/environment-setup",children:"Environment Setup"})," before you proceed with the installation."]})}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["To use Pocketto in a Svelte project, you need to install the ",(0,o.jsx)(n.code,{children:"pocketto"})," and ",(0,o.jsx)(n.code,{children:"pocketto-svelte"})," package. Also, need to install ",(0,o.jsx)(n.code,{children:"patch-package"})," to patch the ",(0,o.jsx)(n.code,{children:"pouchdb-browser"})," to fix package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install pocketto pocketto-svelte patch-package\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After installing the package, you need to patch the ",(0,o.jsx)(n.code,{children:"pouchdb-browser"})," package. You can do this by running the following command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir patches\ncp node_modules/pocketto-svelte/patches/pouchdb-browser+8.0.1.patch patches/\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following script to your ",(0,o.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "postinstall": "patch-package"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then, run the following command to patch the ",(0,o.jsx)(n.code,{children:"pouchdb-browser"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["You might facing issue when install the package. In this case, ",(0,o.jsx)(n.a,{href:"/docs/environment-setup#debug-for-npmyarn-install",children:"please refer to this solution"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,o.jsxs)(n.p,{children:["If you are using vite, make sure you have enable global and decorators in ",(0,o.jsx)(n.code,{children:"vite.config.ts"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"import { sveltekit } from '@sveltejs/kit/vite';\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  plugins: [sveltekit()],\n  define: {\n    global: {},\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Disable the ",(0,o.jsx)(n.code,{children:"ssr"})," in the ",(0,o.jsx)(n.code,{children:"+layout.ts"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="src/+layout.ts"',children:"export const ssr = false;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["You can connect to a database via the ",(0,o.jsx)(n.code,{children:"DatabaseManager.connect()"})," function. ",(0,o.jsx)("br",{}),"\nAlso, you need to set the environment to ",(0,o.jsx)(n.code,{children:"browser"}),". ",(0,o.jsx)("br",{}),"\nYou can also set the id method to ",(0,o.jsx)(n.code,{children:"timestamp"})," which is optional. ",(0,o.jsx)(n.a,{href:"/docs/data-modelling/id",children:"All available id method"})," in here."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="src/+layout.svelte"',children:"<script lang=\"ts\">\n import Header from './Header.svelte';\n import '../app.css';\n let { children } = $props();\n import { DatabaseManager, p } from 'pocketto';\n\n p.setEnvironment('browser');\n p.setIdMethod('timestamp');\n DatabaseManager.connect('default', {\n  dbName: 'default',\n  adapter: 'idb'\n }).then(async (localDb) => {\n    p.setRealtime(true);\n });\n<\/script>\n\n<div class=\"app\">\n <Header />\n\n <main>\n  {@render children()}\n </main>\n\n <footer>\n  <p>\n   visit <a href=\"https://svelte.dev/docs/kit\">svelte.dev/docs/kit</a> to learn about SvelteKit\n  </p>\n </footer>\n</div>\n\n<style>\n .app {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n }\n\n main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  width: 100%;\n  max-width: 64rem;\n  margin: 0 auto;\n  box-sizing: border-box;\n }\n\n footer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n }\n\n footer a {\n  font-weight: bold;\n }\n\n @media (min-width: 480px) {\n  footer {\n   padding: 12px 0;\n  }\n }\n</style>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);