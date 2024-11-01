"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[3949],{8923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(4848),i=t(8453);const o={sidebar_position:1,title:"Model"},s=void 0,c={id:"data-modelling/model",title:"Model",description:"Introduction",source:"@site/docs/data-modelling/model.md",sourceDirName:"data-modelling",slug:"/data-modelling/model",permalink:"/forked-pockettojs.github.io/docs/data-modelling/model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Model"},sidebar:"tutorialSidebar",previous:{title:"Data Modelling"},next:{title:"Query Builder",permalink:"/forked-pockettojs.github.io/docs/data-modelling/query-builder"}},d={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Define a Model",id:"define-a-model",level:3},{value:"Create an Instance",id:"create-an-instance",level:3},{value:"Save an Instance",id:"save-an-instance",level:3},{value:"Find an Instance",id:"find-an-instance",level:3},{value:"Update an Instance",id:"update-an-instance",level:3},{value:"Delete an Instance",id:"delete-an-instance",level:3}];function r(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Pocketto Model allow you to create a model for your data. It is a simple and easy way to create a model for your data."}),"\n",(0,a.jsx)(n.p,{children:"You can share the model in different platforms, so all the platforms can use the same model with same application logic."}),"\n",(0,a.jsx)(n.h3,{id:"define-a-model",children:"Define a Model"}),"\n",(0,a.jsxs)(n.p,{children:["To define a model, you need to create a class that extends the ",(0,a.jsx)(n.code,{children:"Model"})," class. The ",(0,a.jsx)(n.code,{children:"Model"})," class is a base class that provides the basic functionality for a model."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following example, we define a ",(0,a.jsx)(n.code,{children:"SalesInvoiceItem"})," model and a ",(0,a.jsx)(n.code,{children:"SalesInvoice"})," model."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Model } from 'pocketto';\n\n@Relational\nexport class SalesInvoiceItem extends Model {\n  static dbName = 'my-database';\n  static collectionName = 'SalesInvoiceItems';\n\n  description!: string;\n  quantity!: number;\n  unitPrice!: number;\n\n  get amount() {\n    return this.quantity * this.unitPrice;\n  }\n}\n\n@Relational\nexport class SalesInvoice extends Model {\n  static dbName = 'my-database';\n  static collectionName = 'SalesInvoices';\n\n  invoiceNumber!: string;\n  customerName!: string;\n  remarks?: string;\n\n  @HasMany('SalesInvoiceItem')\n  items?: SalesInvoiceItem[];\n\n  get totalAmount() {\n    return this.items?.reduce((total, item) => total + item.amount, 0) ?? 0;\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The decorator ",(0,a.jsx)(n.code,{children:"@Relational"})," is used to define the model as a relational model. The ",(0,a.jsx)(n.code,{children:"@HasMany"})," decorator is used to define a one-to-many relationship between the ",(0,a.jsx)(n.code,{children:"SalesInvoice"})," model and the ",(0,a.jsx)(n.code,{children:"SalesInvoiceItem"})," model."]}),"\n",(0,a.jsx)(n.h3,{id:"create-an-instance",children:"Create an Instance"}),"\n",(0,a.jsxs)(n.p,{children:["To create an instance of a model, you can use the ",(0,a.jsx)(n.code,{children:"new"})," keyword."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const invoice = new SalesInvoice();\ninvoice.invoiceNumber = 'INV-001';\ninvoice.customerName = 'John Doe';\ninvoice.remarks = 'This is a sample invoice.';\ninvoice.items = [\n  { description: 'Item 1', quantity: 2, unitPrice: 100 },\n  { description: 'Item 2', quantity: 3, unitPrice: 150 },\n];\n\n// or\n\nconst invoice = new SalesInvoice({\n  invoiceNumber = 'INV-001',\n  customerName = 'John Doe',\n  remarks = 'This is a sample invoice.';\n  items = [\n    { description: 'Item 1', quantity: 2, unitPrice: 100 },\n    { description: 'Item 2', quantity: 3, unitPrice: 150 },\n  ],\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"save-an-instance",children:"Save an Instance"}),"\n",(0,a.jsxs)(n.p,{children:["To save an instance of a model, you can use the ",(0,a.jsx)(n.code,{children:"save"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"await invoice.save();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"find-an-instance",children:"Find an Instance"}),"\n",(0,a.jsxs)(n.p,{children:["To find an instance of a model, you can use the ",(0,a.jsx)(n.code,{children:"find"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const invoice = await SalesInvoice.find('INV-001');\n"})}),"\n",(0,a.jsx)(n.h3,{id:"update-an-instance",children:"Update an Instance"}),"\n",(0,a.jsxs)(n.p,{children:["To update an instance of a model, you can use the ",(0,a.jsx)(n.code,{children:"update"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"invoice.update({\n  remarks: 'This is an updated invoice.',\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"delete-an-instance",children:"Delete an Instance"}),"\n",(0,a.jsxs)(n.p,{children:["To delete an instance of a model, you can use the ",(0,a.jsx)(n.code,{children:"delete"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"await invoice.delete();\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);