"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[6522],{7431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=t(4848),c=t(8453);const o={sidebar_label:"Data Conflict",title:"Data Conflict",sidebar_position:4},a=void 0,r={id:"data-management/data-conflict",title:"Data Conflict",description:"Introduction",source:"@site/docs/data-management/data-conflict.md",sourceDirName:"data-management",slug:"/data-management/data-conflict",permalink:"/docs/data-management/data-conflict",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Data Conflict",title:"Data Conflict",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Encryption",permalink:"/docs/data-management/encryption"},next:{title:"Data Sharding",permalink:"/docs/data-management/data-sharding"}},l={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Two Types of Conflicts",id:"two-types-of-conflicts",level:3},{value:"Immediate Conflicts",id:"immediate-conflicts",level:3},{value:"Eventual Conflicts",id:"eventual-conflicts",level:3},{value:"Solution",id:"solution",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Under the hoods, Pocketto are rely on the field ",(0,i.jsx)(n.code,{children:"document._meta._rev"})," to trace for the revision of the document."]}),"\n",(0,i.jsx)(n.p,{children:"When a document is updated, the revision number is incremented. This allows Pocketto to detect conflicts when two clients try to update the same document at the same time."}),"\n",(0,i.jsx)(n.p,{children:"When a conflict occurs, it will return a 409 (conflict) error to the client. The client can then resolve the conflict by fetching the latest version of the document, merging the changes, and then trying to update the document again."}),"\n",(0,i.jsx)(n.h3,{id:"two-types-of-conflicts",children:"Two Types of Conflicts"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of conflicts that can occur in the database:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Immediate conflicts"}),"\n",(0,i.jsx)(n.li,{children:"Eventual conflicts"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"immediate-conflicts",children:"Immediate Conflicts"}),"\n",(0,i.jsx)(n.p,{children:"Immediate conflicts can occur with any API that using the same ref to store. They manifest as a 409 (conflict) error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { SalesInvoice } from 'src/models/SalesInvoice.p';\n// 1. Client A create a document call `A`\nconst invoiceA = new SalesInvoice();\ninvoiceA.id = '1';\ninvoiceA.number = 'INV-001';\nawait invoiceA.save();\n\nconsole.log(invoice._meta._rev); // 1-x\n\n// 2. Client B create a document call `A` at the same time\ntry {\n  const invoiceB = new SalesInvoice();\n  invoiceA.id = '1';\n  invoiceA.number = 'INV-001';\n  await invoiceA.save();\n} catch (error) {\n  if (err.name !== 'conflict') return;\n  console.log('Conflict happen!:', error); // 409 (conflict)\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Normally, ",(0,i.jsx)(n.code,{children:"_rev"})," look more like ",(0,i.jsx)(n.code,{children:"2-c1592ce7b31cc26e91d2f2029c57e621"}),", i.e. a digit followed by a very long hash. In these examples, x and y are used in place of the hash, for simplicity\u2019s sake."]})}),"\n",(0,i.jsx)(n.h3,{id:"eventual-conflicts",children:"Eventual Conflicts"}),"\n",(0,i.jsx)(n.p,{children:"Eventual conflicts can occur when both clients are fully offline and then come back online. They manifest as a 409 (conflict) error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const invoiceA = await SalesInvoice.find('1');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Imagine the return are the below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'SalesInvoice {\n  id: "1",\n  _meta: {\n    _rev: "10-x",\n    _before_update: {},\n    _dirty: {}\n  }\n  number: "INV-001",\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In another client that also fetch the same document, and just connect to the internet and update the document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const invoiceB = await SalesInvoice.find('1');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'SalesInvoice {\n  id: "1",\n  _meta: {\n    _rev: "10-y",\n    _before_update: {},\n    _dirty: {}\n  }\n  number: "INV-002",\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"When the first client try to update the document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"invoiceA.number = 'INV-003';\nawait invoiceA.save();\n"})}),"\n",(0,i.jsx)(n.p,{children:"The server will return a 409 (conflict) error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  name: 'conflict',\n  message: 'Document update conflict',\n  status: 409,\n  error: true,\n  reason: 'Document update conflict',\n  revision: '10-y'\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"To handle the conflict, you can do the below step to ensure the document is updated correctly:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Get the latest document via ",(0,i.jsx)(n.code,{children:"find"})," method."]}),"\n",(0,i.jsx)(n.li,{children:"Update the field you wish to replace."}),"\n",(0,i.jsx)(n.li,{children:"Save the document again."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"let invoiceA = await SalesInvoice.find('1');\ninvoiceA.number = 'INV-003';\ntry {\n  await invoiceA.save();\n} catch (error) {\n  if (err.name !== 'conflict') return;\n\n // Get the latest document\n  invoiceA = await SalesInvoice.find('1');\n\n  // Merge the changes\n  invoiceA.number = 'INV-003';\n\n  // Save the document again\n  await invoiceA.save();\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const c={},o=i.createContext(c);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);