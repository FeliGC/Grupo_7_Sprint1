const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(3000, () => {
    console.log("Server en marcha");
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