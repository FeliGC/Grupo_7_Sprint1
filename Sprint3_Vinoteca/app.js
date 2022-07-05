const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require ('./routers/mainRoutes');
const productsRoutes = require ('./routers/productsRoutes');
const usersRoutes = require ('./routers/usersRoutes');

app.use(express.static('public'));
/*
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );
*/

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

/*

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

*/

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});