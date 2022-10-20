const colors = require('colors');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Mi sexto respuesta desde mi API en ExpressJS');
})

app.use(express.json());
app.post('/create', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).send();
});

app.listen(port);

console.log(`Servidor escuchando en el puerto: ${port}`.rainbow);