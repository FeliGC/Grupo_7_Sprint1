const db = require('../src/database/models');
const { validationResult } = require('express-validator');

const productsController = {
    mostrarProductos: (req, res) => {
        db.Product.findAll()
            .then(allProducts => {
                res.render('productos', { allProducts })
            })
    },
    detalle: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [{association: "category"}]
        })
        .then(product => {
            res.render('detalle-de-los-productos', { product });
        })
    },
    crearProducto: (req, res) => {
        db.Category.findAll()
            .then(allCategorys => {
                res.render('creacion-de-productos', {allCategorys});
            });
    },
    guardado: (req, res) => {
        const validation = validationResult(req);

        if (!validation.isEmpty()) {
            return res.render('creacion-de-productos', {
                errors: validation.mapped(),
                oldData: req.body
            });
        }

        db.Product.create({
            img: req.file.filename,
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
            price: req.body.price,
        })
        .then(() => {
            return res.redirect('/products');
        })
    },
    editar: (req, res) => {
        let id = req.params.id;
        let oneProduct = db.Product.findByPk(id, {include:[{association:"category"}] });
        let categorys = db.Category.findAll();

        Promise
        .all([oneProduct, categorys])
        .then(([Product, allCategorys]) => {
            res.render('edicion-de-productos', {Product, allCategorys});
        })
        .catch(error => {
            console.log(error);
        });
    },
    update: (req, res) => {
        let id = req.params.id;

        db.Product.update({
            img: req.file.filename,
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
            price: req.body.price,
        },
        {
            where: {
                id: id
            }
        })
        .then(() => {
            return res.redirect('/products');
        })
        .catch(error => {
            res.send(error);
        });
    },
    carritoProductos: (req, res) => {
        res.render('productCart', {})
    },
    borrar: (req, res) => {
        let id = req.params.id;

        db.Product.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            return res.redirect('/products');
        })
        .catch(error => {
            console.log(error);
        })
    }
}


module.exports = productsController;