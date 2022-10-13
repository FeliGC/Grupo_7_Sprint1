const { validationResult } = require('express-validator');
const db = require('../src/database/models');

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
        const errores = validationResult(req);
        
        if(!errores.isEmpty() || req.file === undefined) {
            db.Category.findAll()
            .then(allCategorys => {
                return res.render('creacion-de-productos', {
                    allCategorys,
                    errors: errores.mapped(),
                    oldData: req.body
                });
            });
        } else {
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
        }
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
        const errores = validationResult(req);
        let id = req.params.id;
        let oneProduct = db.Product.findByPk(id, {include:[{association:"category"}] });
        let categorys = db.Category.findAll();

        Promise
        .all([oneProduct, categorys])
        .then(([Product, allCategorys]) => {
            if(!errores.isEmpty() || req.file === undefined) {
                return res.render('edicion-de-productos', {
                    Product,
                    allCategorys,
                    errors: errores.mapped(),
                    oldData: req.body
                })
            } else {
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
            }
        })
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