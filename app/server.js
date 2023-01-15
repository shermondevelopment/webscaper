import express, { json } from 'express'

/** initializing server */
const app = express()

/** middlewares */
app.use(json())

app.listen(process.env.PORT_APP, console.log('app running in port 🚀🚀🚀🚀'))
