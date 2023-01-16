/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** initializing server */
const app = express()

/** middlewares */
app.use(json())
app.use(cors())

app.listen(
  process.env.APP_PORT,
  console.log(`app running in port ${process.env.APP_PORT} 🚀🚀🚀🚀`)
)
