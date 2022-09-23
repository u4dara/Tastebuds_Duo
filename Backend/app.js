const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const outlet = require('./routes/outlets')

const port = process.env.PORT || 5000

//connect to localhost DB
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/outlets', outlet);

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on Port ${port}`))
