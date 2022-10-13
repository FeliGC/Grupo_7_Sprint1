const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../src/database/models');

const usersController = {
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        const validation = validationResult(req);

        if (!validation.isEmpty()) {
            return res.render('register', {
                errors: validation.mapped(),
                oldData: req.body
            });
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(email => {
            if (email) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya esta registrado'
                        }
                    },
                    oldData: req.body
                });
            }
        })
        .catch(error => {
            console.log(error);
        });

        db.User.create({
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            img: req.file.filename
        })
        

        return res.redirect('/users/login');
    },
    login: (req, res) => {
        return res.render('login');
    },
    loginProcess: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(email => {
            if (email) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password, email.password);

                if (isOkThePassword) {
                    req.session.userLogged = email;

                    if (req.body.remember_user) {
                        res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 })
                    }

                    return res.redirect("/users/profile");
                }
                return res.render('login', {
                    errors: {
                        password: {
                            msg: 'La contraseña no coincide'
                        },
                        oldData: req.body
                    }
                });
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra éste email en la base'
                    },
                    oldData: req.body
                }
            });
        })
        
    },
    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        return res.render('userProfile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
};


module.exports = usersController