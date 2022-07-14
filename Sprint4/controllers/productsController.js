const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const productsController = {
    mostrarProductos: (req, res) => {
        res.render('productos', {listaDeProductos: productos});
    },
    detalleProducto: (req, res) => {
        let id = req.params.productoId;

        let producto = productos.find((producto) => {
            return producto.id == id;
        });

        res.render('detalle-de-los-productos', { producto: producto });
    },
    carritoProductos: (req, res) => {
        res.render('productCart', {})
    },
    crearProducto: (req, res) => {
        res.render('creacion-de-productos', {listaDeProductos: productos})
    },
    store: (req,res) => {
     res.redirect('home', {});
    },
    editarProducto: (req, res) => {
        res.render('edicion-de-productos', {listaDeProductos: productos})
    },
    update: (req,res) => {
        res.redirect('home', {});
    },
    borrar: (req,res) => {
        res.redirect('home', {});
}
}


module.exports = productsController