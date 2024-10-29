"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[6982],{526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(4848),o=n(8453);const s={sidebar_label:"React Hooks",title:"React Hooks",sidebar_position:1},a=void 0,c={id:"frontend-api/pocketto-react",title:"React Hooks",description:"React Hooks API",source:"@site/docs/frontend-api/pocketto-react.md",sourceDirName:"frontend-api",slug:"/frontend-api/pocketto-react",permalink:"/docs/frontend-api/pocketto-react",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React Hooks",title:"React Hooks",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Frontend API references"},next:{title:"React Native Hooks",permalink:"/docs/frontend-api/pocketto-react-native"}},r={},l=[{value:"React Hooks API",id:"react-hooks-api",level:2},{value:"useRealtimeList",id:"userealtimelist",level:3},{value:"useRealtimeList - Configuration",id:"userealtimelist---configuration",level:3},{value:"useRealtime",id:"userealtime",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"react-hooks-api",children:"React Hooks API"}),"\n",(0,i.jsx)(t.p,{children:"Pocketto provides a set of React hooks to interact with the Pocketto model in React."}),"\n",(0,i.jsx)(t.h3,{id:"userealtimelist",children:"useRealtimeList"}),"\n",(0,i.jsxs)(t.p,{children:["By using ",(0,i.jsx)(t.code,{children:"useRealtimeList()"})," hook, the listing will auto retrieve new model when there is new data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import React, { useEffect } from 'react';\nimport { useRealtimeList } from 'pocketto-react';\nimport { SalesInvoice } from 'src/models/SalesInvoice.p';\n\nexport function SalesInvoiceList() {\n  const invoices = useRealtimeList(SalesInvoice);\n  const navigate = useNavigate();\n\n  return <div>\n    {invoices.map((invoice) => {\n      return <div key={invoice.id} onClick={() => navigate(`/invoices/${invoice.id}`)}>\n        <h1>{invoice.number}</h1>\n      </div>;\n    })}\n  </div>;\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"userealtimelist---configuration",children:"useRealtimeList - Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["There is also options that you can pass to ",(0,i.jsx)(t.code,{children:"useRealtimeList()"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["animationDelay: Delay in milliseconds to wait your custom animation done. Default: ",(0,i.jsx)(t.code,{children:"1ms"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["condition: A ",(0,i.jsx)(t.a,{href:"/docs/data-modelling/query-builder#complex-queries---callback",children:"query builder"})," condition to filter and sorting the data."]}),"\n",(0,i.jsxs)(t.li,{children:["onItemChange: Callback when the item is changed. After the ",(0,i.jsx)(t.code,{children:"animationDelay"})," is done, it will emit ",(0,i.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["onItemCreate: Callback when the item is created. After the ",(0,i.jsx)(t.code,{children:"animationDelay"})," is done, it will emit ",(0,i.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["onItemUpdate: Callback when the item is updated. After the ",(0,i.jsx)(t.code,{children:"animationDelay"})," is done, it will emit ",(0,i.jsx)(t.code,{children:"undefined"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"export function SalesInvoiceList() {\n  const invoices = useRealtimeList(SalesInvoice, {\n    animationDelay: 2000,\n    condition: (query) => query.where('status', 'draft').orderBy('date', 'desc'),\n    onItemChange: (item) => console.log('Item changed', item),\n    onItemCreate: (item) => console.log('Item created', item),\n    onItemUpdate: (item) => console.log('Item updated', item),\n  });\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"userealtime",children:"useRealtime"}),"\n",(0,i.jsxs)(t.p,{children:["By using ",(0,i.jsx)(t.code,{children:"useRealtime()"})," hook, it will auto reflected to other similar page that have same model id."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import React, { useEffect } from 'react';\nimport { useParams } from 'react-router-dom';\nimport { useRealtime } from 'pocketto-react';\nimport { SalesInvoice } from 'src/models/SalesInvoice.p';\n\nexport function SalesInvoiceList() {\n  const { id } = useParams();\n  const [invoice, setInvoice] = useRealtime(SalesInvoice, id);\n\n  return <div>\n    <h1>{invoice?.number}</h1>\n\n    <input value={invoice?.number} onChange={(e) => {\n        setInvoice({ ...invoice, number: e.target.value });\n    }} />\n\n    {/* trigger save to submit to the database */}\n    <button onClick={() => invoice.save()}>Save</button>\n  </div>;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);