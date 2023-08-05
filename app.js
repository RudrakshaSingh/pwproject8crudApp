require("dotenv").config()

const cors = require("cors")//for future use, cross origin reuest, to communicate if front end and back end are on different url

const express = require("express")

const app = express()

//befor db connected and request,we need express middleware
app.use(express.json())// to allow json data
app.use(express.urlencoded({extended:true}))//data through get send is url encoded in server we need to decode it

app.use(cors())


const connectToDb = require("./config/db.js")
// init connection to db
connectToDb()

const userRoutes = require('./routes/userRoutes.js')

app.use("/",userRoutes)

module.exports = app;