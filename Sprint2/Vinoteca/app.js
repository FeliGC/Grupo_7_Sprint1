const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
res.sendFile(path.resolve(__dirname, 'views/home.html'))
});
app.get('/vino-tinto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vino-tinto.html'));
});

app.get('/vino-blanco', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vino-blanco.html'));
});

app.get('/vino-rosado', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vino-rosado.html'));
});

app.get('/vino-espumoso', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vino-espumoso.html'));
});

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"))
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname + '/views/productCart.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});