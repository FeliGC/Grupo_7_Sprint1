const db = require('../../src/database/models');
const Op = db.Sequelize.Op
const path = require("path")
module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then(users => {
            return res.json({
                status: 200,
                url: "api/users",
                count: users.length,
                data: users.map(user => {
                    return {
                        id: user.id,
                        name: user.first_name + " " + user.last_name,
                        email: user.email,
                        url: "http://localhost:3005/api/users/" + user.id,
                        img: path.join(__dirname,"./public/images/usersAvatars" + user.img)
                    }
                })
            })
        })

    },

    detail:(req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            return res.json({
                status: 200,
                url:`api/users/${req.params.id}`,
                data: {
                    id: user.id,
                    name: user.first_name + " " + user.last_name,
                    email: user.email,
                    img: path.join(__dirname, "./public/images/usersAvatars" + user.img)
                }
            })
        })

    }
}