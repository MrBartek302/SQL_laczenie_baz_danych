 const express = require('express')
 const cors = require('cors')
 const mysql = require('mysql')

const app = express()

app.use(cors())

const port = 3000

app.get("/", (req, res)=>{
    res.send("ok")
})

app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})