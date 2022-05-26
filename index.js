const express = require ("express")

const app = express()
const path = require ("path")

const amigos = [
    {
        name: "Laura",
        id: "1022"
    },

    {
        name: "Cris",
        id: "444"
    }
]


app.get ("/amigos", (req, res) => {
    res.send ("Hola Mundo Cruel");
})

app.get ("/saludomundo", (req, res) => {
    res.send ("Hola Mundo");
})


app.get ("/index", (req, res) => {
    let  htmlInfo = path.resolve (__dirname, "./vistas/index.html")
    res.sendFile (htmlInfo)
} )


app.listen (3001, () => console.log ("Servidor escuchando en puerto 3001"))