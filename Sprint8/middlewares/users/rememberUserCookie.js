const db = require('../../src/database/models');

function rememberUserCookie(req, res, next) {
    let userCookie = req.cookies.userEmail;

    if(userCookie != undefined && req.session.userLogged == undefined) {
        db.User.findOne({
            where: {
                email: userCookie
            }
        })
        .then(email => {
            req.session.userLogged = email;
        })
    }

    next()
}

module.exports = rememberUserCookie;