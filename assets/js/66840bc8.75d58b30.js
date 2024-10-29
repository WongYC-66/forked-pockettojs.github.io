"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[72],{9804:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(4848),o=i(8453);const r={sidebar_position:2,title:"Query Builder"},s=void 0,l={id:"data-modelling/query-builder",title:"Query Builder",description:"Introduction",source:"@site/docs/data-modelling/query-builder.md",sourceDirName:"data-modelling",slug:"/data-modelling/query-builder",permalink:"/docs/data-modelling/query-builder",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Query Builder"},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/docs/data-modelling/model"},next:{title:"ID Generation",permalink:"/docs/data-modelling/id"}},a={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Build a Query",id:"build-a-query",level:3},{value:"Complex Queries - Chaining",id:"complex-queries---chaining",level:3},{value:"Complex Queries - Callback",id:"complex-queries---callback",level:3},{value:"Complex Queries - Object",id:"complex-queries---object",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Counting",id:"counting",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Pocketto Query Builder allows you to build queries for your data. It is a simple and easy way to build queries for your data."}),"\n",(0,t.jsx)(n.h3,{id:"build-a-query",children:"Build a Query"}),"\n",(0,t.jsxs)(n.p,{children:["You can utilize ",(0,t.jsx)(n.code,{children:"Model.query()"})," to build a query. The ",(0,t.jsx)(n.code,{children:"query()"})," method returns a new instance of the ",(0,t.jsx)(n.code,{children:"QueryBuilder"})," class."]}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we build a query to get all sales invoices with a total amount greater than 1000."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { SalesInvoice } from './models';\n\nconst invoices = await SalesInvoice.query()\n  .where('totalAmount', '>', 1000)\n  .get();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"where()"})," method is used to add a condition to the query. The first argument is the field name, the second argument is the operator, and the third argument is the value."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to only get the first result, you can use the ",(0,t.jsx)(n.code,{children:"first()"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const invoice = await SalesInvoice.query()\n  .where('invoiceNumber', '=', 'INV-001')\n  .first();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"complex-queries---chaining",children:"Complex Queries - Chaining"}),"\n",(0,t.jsxs)(n.p,{children:["You can build complex queries by chaining multiple ",(0,t.jsx)(n.code,{children:"where"})," and ",(0,t.jsx)(n.code,{children:"orWhere"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we build a query to get all sales invoices with a total amount greater than 1000 or where the customer name is John Doe."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const invoices = await SalesInvoice.query()\n  .where('totalAmount', '>', 1000)\n  .orWhere('customerName', '=', 'John Doe')\n  .get();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"complex-queries---callback",children:"Complex Queries - Callback"}),"\n",(0,t.jsx)(n.p,{children:"You can also able to pass in a callback function to build complex queries."}),"\n",(0,t.jsxs)(n.p,{children:["The callback function receives a ",(0,t.jsx)(n.code,{children:"QueryBuilder"})," instance as an argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { QueryBuilder } from 'pocketto';\n\nconst invoices = await SalesInvoice.query()\n  .where((query: QueryBuilder<SalesInvoice>) => {\n    query.where('totalAmount', '>', 1000)\n      .orWhere('customerName', '=', 'John Doe');\n  })\n  .get();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"complex-queries---object",children:"Complex Queries - Object"}),"\n",(0,t.jsx)(n.p,{children:"Or, pass a object to build complex queries."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const invoices = await SalesInvoice.query()\n  .where({\n    totalAmount: ['>', 1000],\n    customerName: ['=', 'John Doe'],\n  })\n  .get();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sorting",children:"Sorting"}),"\n",(0,t.jsxs)(n.p,{children:["You can sort the results by using the ",(0,t.jsx)(n.code,{children:"orderBy()"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const invoices = await SalesInvoice.query()\n  .orderBy('invoiceNumber', 'desc')\n  .get();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first argument is the field name, and the second argument is the direction (",(0,t.jsx)(n.code,{children:"asc"})," or ",(0,t.jsx)(n.code,{children:"desc"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["You can paginate the results by using the ",(0,t.jsx)(n.code,{children:"paginate()"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const invoices = await SalesInvoice.query()\n  .paginate(1, 10);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The first argument is the page number, and the second argument is the number of items per page."}),"\n",(0,t.jsx)(n.h3,{id:"counting",children:"Counting"}),"\n",(0,t.jsxs)(n.p,{children:["You can count the results by using the ",(0,t.jsx)(n.code,{children:"count()"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const count = await SalesInvoice.query()\n  .where('totalAmount', '>', 1000)\n  .count();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);