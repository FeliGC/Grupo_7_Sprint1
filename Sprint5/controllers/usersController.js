const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/usersModels');

const usersController = {
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        let validation = validationResult(req);

        if(!validation.isEmpty()) {
            return res.render('register', {
                errors: validation.mapped(),
                oldData: req.body
            });
        }
        
        let userInDB = User.findByField('email', req.body.email);

        if(userInDB) {
            return res.render('register', { 
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            img: req.file.filename
        }

        User.create(userToCreate);
        res.redirect('/');
    },
    login: (req, res) => {
        res.render('login')
    },

};


module.exports = usersController