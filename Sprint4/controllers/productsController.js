const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
        let imagen = req.file.filename;

        let nuevoProducto = {
            id: productos[productos.length - 1].id + 1,
            img: imagen,
            ...req.body
        };

        productos.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 4));

        res.redirect('/products');
    },
    editarProducto: (req, res) => {
        res.render('edicion-de-productos', {listaDeProductos: productos})
    },
    update: (req,res) => {
        let idDelProducto = req.params.productoId;
        let productoAEditar = productos[idDelProducto];

        res.render('edicion-de-productos', {productoAEditar: productoAEditar});
    },
    borrar: (req,res) => {
        res.redirect('home', {});
}
}


module.exports = productsController