import { buildConfig } from 'payload'
 //import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import dotenv from 'dotenv'


dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  secret: process.env.PAYLOAD_SECRET || "" ,
  collections: [],
  routes: {
    admin: '/sell',
  },
  admin: {
    user: 'users',
    //buildPath: webpackBundler(),
    meta: {
      titleSuffix: '- Hippo',
      icons: [{
        rel: "icon",
        type: "image/png",
        url: "/favicon.png",
      }],
    },
  },
  //rateLimit: 2000,
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts' ),
  }
})
