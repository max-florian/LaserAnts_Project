const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');

const app = express();
const port = process.env['PORT'] || 5000;

let cards = [
    {codigo: 1, name: "Gyarados", image: "https://assets.findthemetaverse.com/1st%20edition%20emblem.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/1st%20edition%20emblem.jpg", active: true, valor: 100},
    {codigo: 2, name: "Bulbasaur", image: "https://m.media-amazon.com/images/I/51jPhiOpGEL._AC_.jpg", active: true, valor: 200},
    {codigo: 3, name: "Pikachu", image: "https://product-images.tcgplayer.com/fit-in/400x558/88101.jpg", active: true, valor: 300},
    {codigo: 4, name: "Charizard", image: "https://m.media-amazon.com/images/I/71nbfl-JklS._AC_SL1024_.jpg", active: true, valor: 300},
    {codigo: 5, name: "Chikorita", image: "https://m.media-amazon.com/images/I/51lT52ZV56L._AC_.jpg", active: true, valor: 200},
    {codigo: 6, name: "Alakazam", image: "https://lh3.googleusercontent.com/proxy/q4PUFQOLQu09Ne_lsNTQmre7iaocNHhQM_gfmNaSk6OWfu4UODTVf43600cR87djwb2HwSyBPaESgwB2DB36TubLFtf0HJdV6ukRD2V8Fy77ECLQMMsViwQWWQ2nBkqfC5e7bRKQ-JLT8QobQnIgmxkNbWapKgMA", active: true, valor: 200},
    {codigo: 7, name: "Blastoise", image: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/203260.jpg", active: true, valor: 300}
];
let cont = 0;

app.use(cors());
app.use(bodyparser.json({ type: 'application/json' }));

app.get("/", (req, res)=> res.send("hola mundo"));

app.get("/all-cards", (req, res) => {
    const filtro = req.query.filtro;

    res.status(200);    // 200 = Codigo OK de un GET
    if (filtro)
    {
        res.json(cards.filter(p => p.nombre.indexOf(filtro) >= 0))
    } else {
        res.json(cards)
    }
});

app.post("/add-card", (req, res) => {
    cont++;
    const card = {...req.body, codigo: cont };
    cards.push(card);
    res.status(201);    // 201 = Codigo que indica que fue creado el objeto.
    res.json(card);
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}`);
});