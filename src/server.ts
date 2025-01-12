import express from "express";
import {getPayloadClient} from './get-payload'
import { nextApp, nextHandler } from "./next-utils";

const app = express()
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  //now I can call this getpayload client whenever I need some database access
  const payload = await getPayloadClient({
    initOptions: {
      // express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL}`)
      },
    },


  })
  //app.use is an express middleware created and for each request and response and response got forward to the next middleware
  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
   payload.logger.info('Next.js Started')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      )
    })
  })
}

start()
