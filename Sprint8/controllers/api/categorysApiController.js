const db = require('../../src/database/models');
const Op = db.Sequelize.Op
const path = require("path")

module.exports = {
    list: (req,res) => {
        db.Category.findAll()
        .then(categorys => {
            return res.json({
                status: 200,
                url: "api/categorys",
                count: categorys.length,
                data: categorys.map(category => {
                    return {
                        id: category.id,
                        name: category.name
                    }
                })
            })
        })

    }
}