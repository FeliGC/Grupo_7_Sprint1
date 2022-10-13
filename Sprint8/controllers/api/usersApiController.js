const db = require('../../src/database/models');
const Op = db.Sequelize.Op

module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then(users => {
            return res.json({
                status: 200,
                url: "api/users",
                count: users.length,
                data: users
            })
        })

    },

    detail:(req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            return res.json({
                status: 200,
                url:`api/users/${req.params.id}`,
                data: user
            })
        })

    }
}