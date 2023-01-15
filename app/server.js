/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** initializing server */
const app = express()

/** middlewares */
app.use(json())

app.listen(
  process.env.APP_PORT,
  console.log(`app running in port ${process.env.APP_PORT} 🚀🚀🚀🚀`)
)
