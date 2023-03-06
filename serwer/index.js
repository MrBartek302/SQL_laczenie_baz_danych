 const express = require('express')
 const cors = require('cors')
 const mysql = require('mysql')

const app = express()

app.use(cors())

const port = 3000
//łączymy się z bazą danych
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "1pro"
})
//potwierdzenie połączenia
con.connect(function(err){
    if(err){ 
        console.log(err)}
    else console.log("Połączono z bazą danych")    
})

app.get("/", (req, res)=>{
    res.send("ok")
})

app.get("/select", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT * FROM nwm"
    //zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        
        else res.send(result)
    })
})

app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
}) 

