const db = require('../src/database/models');

const mainController = {
    index: (req, res) => {
        db.Product.findAll()
        .then(allProducts => {
            res.render('home', {allProducts});
        })
    }
};


module.exports = mainController 