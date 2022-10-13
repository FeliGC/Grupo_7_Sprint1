const db = require('../../src/database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let userCookie = req.cookies.userEmail;

    if(userCookie) {
        db.User.findOne({
            where: {
                email: userCookie
            }
        })
        .then(userInDB => {
            if(userInDB) {
                req.session.userLogged = userInDB;
            }
        })
    }

    if(req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }
    
    next()
}

module.exports = userLoggedMiddleware;