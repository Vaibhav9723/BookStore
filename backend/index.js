// const express = require('express')
// const dotenv = require('dotenv')
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"


const app = express()
app.use(express.json()); 
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 4000;
const MongoURL = process.env.MongoURL;

//Connect Database
try {
    mongoose.connect(MongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connect successful")
} catch (error) {
    console.log("Error :",error)
}

// defining routes
app.use("/book",bookRoute)

app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`BookStore app listening on port ${PORT}`)
})
