const express = require('express');
const app = express();

const mainRoutes = require ('./routers/mainRoutes');
const productsRoutes = require ('./routers/productsRoutes');
const usersRoutes = require ('./routers/usersRoutes');

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);



app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});