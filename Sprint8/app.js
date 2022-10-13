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

const categorysApiRouter = require("./routers/api/categorysApiRouter")
const productsApiRouter = require("./routers/api/productsApiRouter")
const usersApiRouter = require('./routers/api/usersApiRouter');
app.use('/api/users', usersApiRouter);
app.use("/api/products", productsApiRouter)
app.use("/api/categorys",categorysApiRouter)


<<<<<<< HEAD
app.listen(process.env.PORT || 3005, () => {
=======
app.listen(3005, () => {
>>>>>>> 5d33b43da8c27e6eac31e62fe16dc0cfeb8c617b
    console.log('Servidor corriendo');
});
