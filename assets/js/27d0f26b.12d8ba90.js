"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[1926],{8893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(4848),o=n(8453);const i={sidebar_label:"React Native",title:"React Native",sidebar_position:2},s=void 0,r={id:"installation/react-native",title:"React Native",description:"Please make sure you have go through the Environment Setup before you proceed with the installation.",source:"@site/docs/installation/react-native.md",sourceDirName:"installation",slug:"/installation/react-native",permalink:"/docs/installation/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/react-native.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"React Native",title:"React Native",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/installation/react"},next:{title:"Vue",permalink:"/docs/installation/vue"}},l={},c=[{value:"Installation",id:"installation",level:3},{value:"iOS Configuration",id:"ios-configuration",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Please make sure you have go through the ",(0,a.jsx)(t.a,{href:"/docs/environment-setup",children:"Environment Setup"})," before you proceed with the installation."]})}),"\n",(0,a.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["To use Pocketto in a React Native project, you need to install the ",(0,a.jsx)(t.code,{children:"pocketto"})," and ",(0,a.jsx)(t.code,{children:"pocketto-react"})," package."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install pocketto pocketto-react\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["You might facing issue when install the package. In this case, ",(0,a.jsx)(t.a,{href:"/docs/environment-setup#debug-for-npmyarn-install",children:"please refer to this solution"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"Also, to install native dependencies in order to let pocketto work properly, you need to install the following packages."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install -D @babel/plugin-proposal-decorators @babel/plugin-transform-class-static-block babel-plugin-module-resolver babel-plugin-transform-decorators-legacy rn-nodeify\nnpm install @tradle/react-native-http assert buffer https-browserify path-browserify process react-native-crypto react-native-get-random-values react-native-level-fs react-native-os react-native-randombytes react-native-sqlite-2 readable-stream stream-browserify url base-64 pouchdb-adapter-react-native-sqlite@3.0.1\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Add ",(0,a.jsx)(t.code,{children:"postinstall"})," script to your ",(0,a.jsx)(t.code,{children:"package.json"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "postinstall": "rn-nodeify --install fs,process,url,assert,crypto,http,https,os,buffer,stream,path --hack"\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Add ",(0,a.jsx)(t.code,{children:"shim.js"})," file to the root of your project."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="shim.js"',children:"import { shim } from 'react-native-quick-base64';\nshim();\n\nif (typeof __dirname === 'undefined') global.__dirname = '/';\nif (typeof __filename === 'undefined') global.__filename = '';\nif (typeof process === 'undefined') {\n    global.process = require('process');\n} else {\n    const bProcess = require('process');\n    for (var p in bProcess) {\n        if (!(p in process)) {\n            process[p] = bProcess[p];\n        }\n    }\n}\n\nprocess.browser = false;\nprocess.nextTick = setImmediate;\nif (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;\n\nconst isDev = typeof __DEV__ === 'boolean' && __DEV__;\nprocess.env['NODE_ENV'] = isDev ? 'development' : 'production';\nif (typeof localStorage !== 'undefined') {\n    localStorage.debug = isDev ? '*' : '';\n}\n\n// If using the crypto shim, uncomment the following line to ensure\n// crypto is loaded first, so it can populate global.crypto\n// require('crypto')\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Make sure you are enabled decorators in your project. If not, you can enable it by adding the following configuration to your ",(0,a.jsx)(t.code,{children:"tsconfig.json"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "experimentalDecorators": true\n  }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"ios-configuration",children:"iOS Configuration"}),"\n",(0,a.jsx)(t.p,{children:"For iOS, make sure you are running pod install after installing the packages for native dependencies."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx pod-install\n"})}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["You can connect to a database via the ",(0,a.jsx)(t.code,{children:"DatabaseManager.connect()"})," function. ",(0,a.jsx)("br",{}),"\nAlso, you need to set the environment to ",(0,a.jsx)(t.code,{children:"react-native"}),". ",(0,a.jsx)("br",{}),"\nYou can also set the id method to ",(0,a.jsx)(t.code,{children:"timestamp"})," which is optional. ",(0,a.jsx)(t.a,{href:"/docs/data-modelling/id",children:"All available id method"})," in here."]}),"\n",(0,a.jsx)(t.p,{children:"You also need to manually install the SQLite adapter for PouchDB."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="index.js"',children:"import { AppRegistry } from 'react-native';\nimport App from './App';\n\nimport 'react-native-get-random-values';\nimport PouchDB from 'pouchdb';\nimport SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite';\nimport SQLite from 'react-native-sqlite-2';\nimport { DatabaseManager, p } from \"pocketto\";\n\nconst SQLiteAdapter = SQLiteAdapterFactory(SQLite);\nPouchDB.plugin(SQLiteAdapter);\n\np.setEnvironment(\"react-native\");\np.setIdMethod('timestamp');\nDatabaseManager.connect('default', {\n  adapter: 'react-native-sqlite',\n  dbName: 'default'\n}).then((localDb) => {\n  const remoteHost = Platform.OS === 'android' ? 'http://192.168.68.107:5984' : 'http://localhost:5984';\n  p.setRealtime(true);\n});\n\nAppRegistry.registerComponent(appName, () => App);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);