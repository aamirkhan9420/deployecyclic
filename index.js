const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT||8080
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/home",(req,res)=>{
    res.send("hello wellcome to home")
})
app.use(express.json())
app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`)
})