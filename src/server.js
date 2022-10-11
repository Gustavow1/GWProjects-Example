const express = require('express')
const routes = require('./Database/routes')
const cors = require('cors')

require('./Database/index')

const app = express()

app.use(cors())


app.use(express.json())
app.use(routes)

app.listen(4000)