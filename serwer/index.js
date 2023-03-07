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
    if(err) console.log(err)
    else console.log("Połączono z bazą danych")    
})

//pobieramy z bazy danych
app.get("/pobierz", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT * FROM nwm"
    //tworzymy zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})

//SELECT pobiera a INSERT dodaje

//wysyłamy do bazy danych
app.get("/add/:imie/:nazwisko/:klasa", (req,res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa
    //tworzymy zapytanie
    const sql = `INSERT INTO nwm (imie,nazwisko,klasa) VALUES ('${imie}', '${nazwisko}', '${klasa}')`
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send("Dodano record")
    })
})

app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})