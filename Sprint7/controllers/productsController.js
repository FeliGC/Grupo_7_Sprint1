const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../src/database/models');
const Op = db.Sequelize.Op;


const productsController = {

    //1 ok
    mostrarProductos: (req, res) => {
        db.Product.findAll()
                .then(products => {
        res.render('productos', {listaDeProductos: productos})
    })
    },


    //2

    guardado: (req, res) => {
		db.Product.create({
			nombre: req.body.name,
          descripcion: req.body.description,
         imagen: req.file.image,
          FKcategoria : req.body.category,
          precio: req.body.price,
		});
		res.redirect('/products');
    },

        
/*Anterior

    detalleProducto: (req, res) => {
        let id = req.params.productoId;

        let producto = productos.find((producto) => {
            return producto.id == id;
        });

        res.render('detalle-de-los-productos', { producto: producto });
    },*/

    //3

    detalle: (req, res) => {
		let producto = db.Product.findAll();
		let productoEnDetalle = db.Product.findByPk(req.params.id);
		Promise.all([producto, productoEnDetalle])
		.then(([products, productoEncontrado]) => {
			res.render('./products/detail', {productoEnDetalle: productoEncontrado, producto: producto});
		})
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

/*anterior
    editarProducto: (req, res) => {
        res.render('edicion-de-productos', {listaDeProductos: productos})
    },*/
//4

    editar: (req, res) => {
		let categoria = db.Category.findAll();
		let usuario = db.User.findAll();
		let productoEnDetalle = db.Product.findByPk(req.params.id);
		Promise.all([categoria, usuario, productoEnDetalle])
		.then(([categorias, formatos, usuarios, productoEncontrado]) => {
			res.render('edicion-de-productos', {listaDeProductos: productos});
		})
	},


/*Anterior
update: (req,res) => {
        let idDelProducto = req.params.productoId;
        let productoAEditar = productos[idDelProducto];

        res.render('edicion-de-productos', {productoAEditar: productoAEditar});
    },*/
//5
update: (req, res) => {
    db.Product.update({
        nombre: req.body.name,
          descripcion: req.body.descripyion,
         imagen: req.file.image,
          FKcategoria : req.body.category,
        
    }, {where: {
        id: req.params.id
    }
});
    res.redirect('/products/' + req.params.id);


// 6
    borrar: (req,res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
        }
    });
        res.redirect('/products/');
}




}
}


module.exports = productsController;