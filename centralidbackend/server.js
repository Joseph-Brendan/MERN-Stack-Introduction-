const express = require('express')
const app = express()
const cors = require('cors')
const routesUrls = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, { useUnifiedTopology: true }, ()=> console.log('Database Connected'))

app.use(express.json())
app.use(cors())
app.use('/central', routesUrls)
app.listen(4000, () => console.log('Server Is Up And Running'))