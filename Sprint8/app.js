const express = require('express');
const app = express();
const session = require('express-session');
const cookies = require('cookie-parser');

const userLoggedMiddleware = require('./middlewares/users/userLoggedMiddleware');

app.use(session({
    secret: 'secret word!',
    resave: false,
    saveUninitialized: false,
  }));

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded( {extended : false} ))
app.use(express.json())
const methodOverride = require("method-override")
app.use(methodOverride ("_method"))
app.use(express.static('public'));
app.set('view engine', 'ejs');


const mainRoutes = require ('./routers/mainRoutes');
const productsRoutes = require ('./routers/productsRoutes');
const usersRoutes = require ('./routers/usersRoutes');
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// const apiProductsRouter = require('./routers/api/???');
// const apiUsersRouter = require('./routers/api/???');
// app.use('/api/products', apiProductsRouter);
// app.use('/api/users', apiUsersRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});