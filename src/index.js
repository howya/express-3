'use strict'

import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import middleware from './middleware'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/account', routes.account)

app.use(middleware.notFound)

app.listen(process.env.PORT, () => {

})