const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../src/database/models');

const usersController = {
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);

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
            } else if (!errors.isEmpty() || req.file === undefined) {
                return res.render('register', {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            } else {
                db.User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    img: req.file.filename
                })
                .then(() => {
                    return res.redirect('/users/login');
                })
            }
        })
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
                    let userInLogin = req.session.userLogged;

                    if (req.body.remember_user) {
                        res.cookie("userEmail", userInLogin.email, { maxAge: (1000 * 60) * 60 })
                    }

                    return res.redirect("/users/profile");
                } else {
                    return res.render('login', {
                        errors: {
                            password: {
                                msg: 'La contraseña no coincide'
                            },
                            oldData: req.body
                        }
                    });
                }
            } else {
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra éste email en la base'
                        },
                        oldData: req.body
                    }
                })
            }
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