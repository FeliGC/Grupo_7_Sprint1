const db = require('../../src/database/models');
const Op = db.Sequelize.Op
const path = require("path")

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            return res.json({
                status: 200,
                url: "api/products",
                count: products.length,
                data: products.map(product => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        url: "http://localhost:3000/api/products/" + product.id
                    }
                })
            })
        })

    },

    detail:(req,res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.json({
                status: 200,
                url:`api/product/${req.params.id}`,
                data: {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    img: path.join(__dirname, "./public/images" + product.img)
                }
            })
        })

    }
}