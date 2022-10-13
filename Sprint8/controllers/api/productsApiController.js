const db = require('../../src/database/models');
const Op = db.Sequelize.Op
const path = require("path")

module.exports = {
    list: (req,res) => {
        db.Product.findAll({
            include: [{association: "category"}]
        })
        .then(products => {
            console.log("prueba msj");
            console.log(products);
            return res.json({
                status: 200,
                url: "api/products",
                count: products.length,
                data: products.map(product => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        categoria: product.category.name,
                        url: "http://localhost:3005/api/products/" + product.id
                    }
                })
            })
        })

    },

    detail:(req,res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "category"}]
        })
        .then(product => {
            return res.json({
                status: 200,
                url:`api/product/${req.params.id}`,
                data: {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    categoria: product.category.name,
                    price: product.price,
                    creado: product.created_at,
                    img: path.join(__dirname, "./public/images" + product.img)
            
                }
            }) 
        })
    }
}