const db = require('../../src/database/models');
const Op = db.Sequelize.Op

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            return res.json({
                status: 200,
                url: "api/products",
                count: products.length,
                data: products
            })
        })

    },

    detail:(req,res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.json({
                status: 200,
                url:`api/product/${req.params.id}`,
                data: product
            })
        })

    }
}