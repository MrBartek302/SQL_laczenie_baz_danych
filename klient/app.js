async function dodaj_ucznia(){
    const imie = document.getElementById("imie").value
    const nazwisko = document.getElementById("nazwisko").value
    const klasa = document.getElementById("klasa").value

    const url = `${baseurl}/add/${imie}/${nazwisko}/${klasa}`

    await fetch(url)
}