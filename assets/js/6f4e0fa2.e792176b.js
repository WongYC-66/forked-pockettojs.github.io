"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[9569],{4843:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=n(4848),s=n(8453);const i={sidebar_label:"Database Manager",title:"Database Manager",sidebar_position:1},d=void 0,r={id:"data-management/database-manager",title:"Database Manager",description:"Introduction",source:"@site/docs/data-management/database-manager.md",sourceDirName:"data-management",slug:"/data-management/database-manager",permalink:"/forked-pockettojs.github.io/docs/data-management/database-manager",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Database Manager",title:"Database Manager",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advance: Data Management"},next:{title:"Data Syncing",permalink:"/forked-pockettojs.github.io/docs/data-management/data-syncing"}},c={},o=[{value:"Introduction",id:"introduction",level:3},{value:"Slient Connect",id:"slient-connect",level:3},{value:"Database Name",id:"database-name",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Adapters",id:"adapters",level:3},{value:"React Native Adapters",id:"react-native-adapters",level:3},{value:"Encryption",id:"encryption",level:3}];function l(e){const a={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"DatabaseManager"})," is a class that provides a set of methods to interact with the database. It is responsible for creating, updating, and deleting records in the database."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"import { DatabaseManager } from 'pocketto';\n\nDatabaseManager.connect('default', {\n    encryption: false,\n    silentConnect: false,\n    dbName: 'default',\n    adapter: 'memory',\n    auth: {\n        username: 'admin',\n        password: 'password'\n    },\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"slient-connect",children:"Slient Connect"}),"\n",(0,t.jsx)(a.p,{children:"By default, when connected to the database, it will show a message in the console."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Slient Connect",src:n(347).A+"",width:"2880",height:"1750"})}),"\n",(0,t.jsxs)(a.p,{children:["You can disable this message by setting the ",(0,t.jsx)(a.code,{children:"silentConnect"})," option to ",(0,t.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"DatabaseManager.connect('default', {\n    silentConnect: true,\n});\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Slient Connect Enabled",src:n(3483).A+"",width:"2880",height:"1748"})}),"\n",(0,t.jsx)(a.h3,{id:"database-name",children:"Database Name"}),"\n",(0,t.jsxs)(a.p,{children:["You can specify the name of the database by setting the ",(0,t.jsx)(a.code,{children:"dbName"})," option."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"DatabaseManager.connect('default', {\n    dbName: 'my-database',\n});\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Then, you can use ",(0,t.jsx)(a.code,{children:"DatabaseManager.get()"})," to get the database instance."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"const db = DatabaseManager.get('my-database');\n"})}),"\n",(0,t.jsx)(a.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(a.p,{children:"You can specify the username and password to authenticate with the remote server."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"DatabaseManager.connect('http://localhost:5984', {\n    dbName: 'remote-database',\n    adapter: 'http',\n    auth: {\n        username: 'admin',\n        password: 'password'\n    },\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"adapters",children:"Adapters"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"DatabaseManager"})," uses adapters to interact with the database including:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"memory"}),": An adapter to store data in memory."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"idb"}),": An adapter to store data in IndexedDB."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"leveldb"}),": An adapter to store data in LevelDB."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"websql"}),": An adapter to store data in WebSQL."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"http"}),": An adapter to store data in a remote server."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"react-native-adapters",children:"React Native Adapters"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"react-native-sqlite"}),": An adapter to store data in SQLite database in React Native."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"encryption",children:"Encryption"}),"\n",(0,t.jsxs)(a.p,{children:["For more information on how to encrypt data, see ",(0,t.jsx)(a.a,{href:"/forked-pockettojs.github.io/docs/data-management/encryption",children:"Data Encryption"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3483:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/slient-connect-enable-bc9f37a019365c66fcb9af7225b6ad06.png"},347:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/slient-connect-5920876d7b24b7883092b4db6610babc.png"},8453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>r});var t=n(6540);const s={},i=t.createContext(s);function d(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);