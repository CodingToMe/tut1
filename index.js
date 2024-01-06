require('dotenv').config()
const express =require("express")

const app =express()


// const PORT =5000

app.get('/',(req,res)=>{
    res.send("Home page data")
})

app.get('/login',(req,res)=>{
    res.send("Home login data")
})

app.get('/twitter',(req,res)=>{
    res.send("Home twitter data")
})

app.get('/mera',(req,res)=>{
    res.send("<h2>hello mera world</h2>")
})

// app.listen(PORT,()=>{
//     console.log(`app listen on port ${PORT}`)
// })



app.listen(process.env.PORT,()=>{
    console.log(`app listen on port ${process.env.PORT}`)
})