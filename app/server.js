/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** router */
import appRouter from './routers/product'

/** initializing server */
const app = express()

/** middlewares */
app.use(json())
app.use(cors())
app.use(appRouter)

app.listen(
  process.env.APP_PORT,
  console.log(`app running in port ${process.env.APP_PORT} 🚀🚀🚀🚀`)
)
