"use strict";(self.webpackChunkpocketto_docs=self.webpackChunkpocketto_docs||[]).push([[2054],{4852:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(4848),s=a(8453);const o={sidebar_label:"Bun + Elysia.js",title:"Bun + Elysia.js",sidebar_position:2},r=void 0,c={id:"installation/backend/bun",title:"Bun + Elysia.js",description:"Please make sure you have go through the Environment Setup before you proceed with the installation.",source:"@site/docs/installation/backend/bun.md",sourceDirName:"installation/backend",slug:"/installation/backend/bun",permalink:"/docs/installation/backend/bun",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Bun + Elysia.js",title:"Bun + Elysia.js",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backend Frameworks"},next:{title:"Data Modelling"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Usage",id:"usage",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please make sure you have go through the ",(0,t.jsx)(n.a,{href:"/docs/environment-setup",children:"Environment Setup"})," before you proceed with the installation."]})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"We are using MongoDB as the database for this project. You can use any database you prefer."})}),"\n",(0,t.jsx)(n.p,{children:"Before you start setting up your environment, make sure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://bun.sh",children:"Bun"}),", a superfast and new javascript runtime, natively support typescript."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.mongodb.com/try/download/community",children:"MongoDB"}),", a NoSQL database that popular by using MERN stack."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Start by creating a new project using Bun CLI."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun create elysia my-bun-app\ncd my-bun-app\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, install the required dependencies. And install the MongoDB driver, and pocketto dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun install\nbun add mongoose pocketto\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you are setup your CouchDB to support ",(0,t.jsx)(n.a,{href:"https://docs.couchdb.org/en/stable/config/couch-peruser.html",children:"couch_peruser"}),", so the database will automatically create a new database for each user created."]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["To start, create a file ",(0,t.jsx)(n.code,{children:"src/models/master/Database.ts"})," and add the following code:"]}),"\n",(0,t.jsx)(n.p,{children:"Add the dependencies file from below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/utils/couchdb.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/utils/couchdb.ts",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/utils/database.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/utils/database.ts",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="src/models/master/Database.ts"',children:"import * as mongoose from 'mongoose';\nimport initiateCouchDB from '../../utils/couchdb';\nimport createUser, { connectSlaveDb } from '../../utils/database';\nimport Company from './Company';\n\nexport type Database = {\n    name: string;\n    protocol: string;\n    databasableType: string;\n    databasableId: mongoose.Types.ObjectId;\n    host: string;\n    port: number;\n    username: string;\n    password: string;\n    database: string;\n    encryption: boolean;\n    encryptionPassword: string;\n};\n\nconst DatabaseSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true,\n    },\n    protocol: {\n        type: String,\n        default: 'http',\n    },\n    databasableType: {\n        type: String,\n        required: true,\n    },\n    databasableId: {\n        type: mongoose.Schema.Types.ObjectId,\n        required: true,\n    },\n    host: {\n        type: String,\n        required: true,\n    },\n    port: {\n        type: Number,\n        required: true,\n    },\n    username: {\n        type: String,\n        required: true,\n    },\n    password: {\n        type: String,\n        required: true,\n    },\n    database: {\n        type: String,\n        required: true,\n    },\n    encryption: {\n        type: Boolean,\n        default: false,\n    },\n    encryptionPassword: {\n        type: String,\n    },\n}, {\n    statics: {\n        async checkDatabaseAccess(databaseId: string, userId: string, set) {\n            const database = await this.findOne({ _id: databaseId });\n            if (!database) return;\n            if (database.databasableType === 'User' && database.databasableId.toString() !== userId) {\n                set.status = 403;\n                return {\n                    message: \"Unauthorized\",\n                }\n            }\n            if (database.databasableType === 'Company') {\n                const invalidAccess = await Company.checkCompanyAccess(database.databasableId.toString(), userId, set);\n                if (invalidAccess) {\n                    return invalidAccess;\n                }\n            }\n        },\n    },\n    methods: {\n        createUserAndDatabase: async function () {\n            const host = Bun.env.COUCHDB_HOST as string;\n            const auth = {\n                username: Bun.env.COUCHDB_USERNAME as string,\n                password: Bun.env.COUCHDB_PASSWORD as string,\n            };\n            await initiateCouchDB(host, auth);\n            await createUser(host, this.username, this.password, auth);\n        },\n        async connect() {\n            return connectSlaveDb(this.toJSON() as Database);\n        },\n    },\n    toJSON: {\n        virtuals: true,\n        versionKey: false,\n        transform: (_, ret) => {\n            ret.id = ret._id;\n            delete ret._id;\n        }\n    },\n});\n\nexport default mongoose.model('Database', DatabaseSchema);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can now bind the database into any master model you want to use. For example, you can bind the database into the ",(0,t.jsx)(n.code,{children:"Company"})," or ",(0,t.jsx)(n.code,{children:"User"})," master model."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/models/master/Company.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/models/master/Company.ts",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/models/master/User.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/models/master/User.ts",children:"here"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Also, in this example, we are using the ",(0,t.jsx)(n.code,{children:"SalesInvoice"})," and ",(0,t.jsx)(n.code,{children:"Guide"})," slave model."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/models/slave/SalesInvoice.p.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/models/slave/SalesInvoice.p.ts",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/models/slave/Guide.p.ts"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/models/slave/Guide.p.ts",children:"here"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Then, you can expose the API for the database model.\nExample from ",(0,t.jsx)(n.a,{href:"https://github.com/pockettojs/pocketto-bun-example/blob/master/src/modules/DatabaseModule.ts",children:"here"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="src/modules/DatabaseModule.ts"',children:'import { ProtectedApp } from "..";\nimport createUser, { connectMasterDb, usernameToDbName } from "../utils/database";\nimport Database from "../models/master/Database";\nimport { t } from "elysia";\nimport mongoose from "mongoose";\nimport initiateCouchDB from "../utils/couchdb";\nimport shortUuid from \'short-uuid\';\nimport { SalesInvoice } from "../models/slave/SalesInvoice.p";\nimport { Guide } from "../models/slave/Guide.p";\nimport { Model } from "pocketto";\nimport { ModelStatic } from "pocketto/dist/src/definitions/Model";\n\nenum DatabasableType {\n    User = "User",\n    Company = "Company",\n};\n\nconst List = (app: ProtectedApp) => {\n    return app.get(\n        "/",\n        async ({ userId }) => {\n            await connectMasterDb();\n            const databases = await Database.find({ databasableId: userId });\n            return {\n                message: "Databases retrieved successfully",\n                data: databases.map((database) => database.toJSON()),\n            };\n        },\n    );\n}\n\nconst Read = (app: ProtectedApp) => {\n    return app.get(\n        "/:databaseId",\n        async ({ set, userId, params: { databaseId } }) => {\n            await connectMasterDb();\n            const database = await Database.findOne({ _id: databaseId });\n            if (!database) {\n                set.status = 404;\n                return {\n                    message: "Database not found",\n                };\n            }\n\n            const invalidAccess = await Database.checkDatabaseAccess(databaseId, userId, set);\n            if (invalidAccess) {\n                return invalidAccess;\n            }\n\n            return {\n                message: "Database retrieved successfully",\n                data: database.toJSON(),\n            };\n        },\n    );\n}\n\nconst Create = (app: ProtectedApp) => {\n    return app.post(\n        "/",\n        async ({ body, userId }) => {\n            await connectMasterDb();\n            const username = String(shortUuid.generate());\n            const password = String(shortUuid.generate());\n            const databaseName = usernameToDbName(username);\n\n            const database = new Database();\n            database.databasableType = body.databasableType || "User";\n            database.databasableId = new mongoose.Types.ObjectId(body.databasableId || userId);\n            database.name = `${database.databasableType}-${database.databasableId}`;\n            database.protocol = Bun.env.COUCHDB_PROTOCOL as string;\n            database.host = Bun.env.COUCHDB_HOST as string;\n            database.port = Number(Bun.env.COUCHDB_PORT);\n            database.username = username;\n            database.password = password;\n            database.database = databaseName;\n            database.encryption = body.encryption || false;\n            database.encryptionPassword = body.encryptionPassword || "";\n            await database.save();\n\n            const host = Bun.env.COUCHDB_HOST as string;\n            const auth = {\n                username: Bun.env.COUCHDB_USERNAME as string,\n                password: Bun.env.COUCHDB_PASSWORD as string,\n            };\n            await initiateCouchDB(host, auth);\n            const url = `${database.protocol}://${database.host}:${database.port}`;\n            await createUser(url, database.username, database.password, auth);\n            await new Promise((resolve) => setTimeout(resolve, 50));\n\n            return {\n                message: "Database created successfully",\n                data: database.toJSON(),\n            };\n        },\n    );\n}\n\nconst ReadDocuments = (app: ProtectedApp) => {\n    return app.get(\n        "/:databaseId/collections/:collectionName/documents",\n        async ({ set, userId, params: { databaseId, collectionName } }) => {\n            await connectMasterDb();\n            const database = await Database.findOne({ _id: databaseId });\n            if (!database) {\n                set.status = 404;\n                return {\n                    message: "Database not found",\n                };\n            }\n\n            const invalidAccess = await Database.checkDatabaseAccess(databaseId, userId, set);\n            if (invalidAccess) {\n                return invalidAccess;\n            }\n\n            const collectionMapper = {\n                [SalesInvoice.collectionName]: SalesInvoice,\n                [Guide.collectionName]: Guide,\n            } as { [key: string]: ModelStatic<Model> };\n\n            if (!collectionMapper[collectionName]) {\n                set.status = 404;\n                return {\n                    message: "Collection not found",\n                };\n            }\n\n            await database.connect();\n            const DestinationModel = collectionMapper[collectionName];\n            const databaseName = database.name;\n            const result = await (new DestinationModel()).getClass().via(databaseName).get();\n            return {\n                message: "Collection list retrieved successfully",\n                data: result,\n            };\n        },\n    );\n}\n\nconst ReadDocument = (app: ProtectedApp) => {\n    return app.get(\n        "/:databaseId/collections/:collectionName/documents/:documentId",\n        async ({ set, userId, params: { databaseId, collectionName, documentId } }) => {\n            await connectMasterDb();\n            const database = await Database.findOne({ _id: databaseId });\n            if (!database) {\n                set.status = 404;\n                return {\n                    message: "Database not found",\n                };\n            }\n\n            const invalidAccess = await Database.checkDatabaseAccess(databaseId, userId, set);\n            if (invalidAccess) {\n                return invalidAccess;\n            }\n\n            const collectionMapper = {\n                [SalesInvoice.collectionName]: SalesInvoice,\n                [Guide.collectionName]: Guide,\n            } as { [key: string]: ModelStatic<Model> };\n\n            if (!collectionMapper[collectionName]) {\n                set.status = 404;\n                return {\n                    message: "Collection not found",\n                };\n            }\n\n            await database.connect();\n            const DestinationModel = collectionMapper[collectionName];\n            const databaseName = database.name;\n            const result = await (new DestinationModel()).getClass().via(databaseName).find(documentId);\n            if (!result) {\n                set.status = 404;\n                return {\n                    message: "Document not found",\n                };\n            }\n            return {\n                message: "Document retrieved successfully",\n                data: result,\n            };\n        },\n    );\n}\n\nconst CreateDocument = (app: ProtectedApp) => {\n    return app.post(\n        "/:databaseId/collections/:collectionName/documents",\n        async ({ set, userId, params: { databaseId, collectionName }, body }) => {\n            await connectMasterDb();\n            const database = await Database.findOne({ _id: databaseId });\n            if (!database) {\n                set.status = 404;\n                return {\n                    message: "Database not found",\n                };\n            }\n\n            const invalidAccess = await Database.checkDatabaseAccess(databaseId, userId, set);\n            if (invalidAccess) {\n                return invalidAccess;\n            }\n\n            const collectionMapper = {\n                [SalesInvoice.collectionName]: SalesInvoice,\n                [Guide.collectionName]: Guide,\n            } as { [key: string]: ModelStatic<Model> };\n\n            if (!collectionMapper[collectionName]) {\n                set.status = 404;\n                return {\n                    message: "Collection not found",\n                };\n            }\n\n            await database.connect();\n            const DestinationModel = collectionMapper[collectionName];\n            const databaseName = database.name;\n            const createResult = await (new DestinationModel()).getClass().via(databaseName).create(body);\n            const result = await (new DestinationModel()).getClass().via(databaseName).find(createResult._id);\n            return {\n                message: "Document created successfully",\n                data: result,\n            };\n        },\n    );\n}\n\nconst UpdateDocument = (app: ProtectedApp) => {\n    return app.put(\n        "/:databaseId/collections/:collectionName/documents/:documentId",\n        async ({ set, userId, params: { databaseId, collectionName, documentId }, body }) => {\n            await connectMasterDb();\n            const database = await Database.findOne({ _id: databaseId });\n            if (!database) {\n                set.status = 404;\n                return {\n                    message: "Database not found",\n                };\n            }\n\n            const invalidAccess = await Database.checkDatabaseAccess(databaseId, userId, set);\n            if (invalidAccess) {\n                return invalidAccess;\n            }\n\n            const collectionMapper = {\n                [SalesInvoice.collectionName]: SalesInvoice,\n                [Guide.collectionName]: Guide,\n            } as { [key: string]: ModelStatic<Model> };\n\n            if (!collectionMapper[collectionName]) {\n                set.status = 404;\n                return {\n                    message: "Collection not found",\n                };\n            }\n\n            await database.connect();\n            const DestinationModel = collectionMapper[collectionName];\n            const databaseName = database.name;\n            const result = await (new DestinationModel()).getClass().via(databaseName).find(documentId);\n            if (!result) {\n                set.status = 404;\n                return {\n                    message: "Document not found",\n                };\n            }\n            result.fill(body);\n            result.getClass().dbName = databaseName;\n            await result.save();\n            return {\n                message: "Document updated successfully",\n                data: result,\n            };\n        },\n    );\n}\n\nexport default {\n    List,\n    Read,\n    Create,\n    ReadDocuments,\n    ReadDocument,\n    CreateDocument,\n    UpdateDocument,\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"And then, we can expose these API to the server."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="src/index.ts"',children:'const app = new Elysia()\n    .group("/databases", (group) => group\n        .use(DatabaseModule.List)\n        .use(DatabaseModule.Read)\n        .use(DatabaseModule.Create)\n        .use(DatabaseModule.ReadDocuments)\n        .use(DatabaseModule.ReadDocument)\n        .use(DatabaseModule.CreateDocument)\n        .use(DatabaseModule.UpdateDocument)\n    );\n\napp.listen(3000);\nconsole.log("Server started at http://localhost:3000");\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can now start the server by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will output the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Server started at http://localhost:3000\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);