const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/usersModels');

const usersController = {
    register: (req, res) => {
       // res.cookie("hhhhh", "hhgg"), { maxage: 1000*30});
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

        let userCreated = User.create (userToCreate);

        return res.redirect('/users/login');

    },
    login: (req, res) => {
       return res.render('login');
    },

    //** */

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
    
        if(userToLogin){
         let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
         if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;

        if (req.body.recordarcontraseña) {
            res.cookie("userEmail", req.body.email, {maxAge:(1000*60)*60 })
        }
                return res.redirect("/users/profile");
         }
        
        return res.render('login', {
            errors: {
            passwordn: {
                msg:'Las credenciales son inválidas'
            }
        }
    });
    }
    
    
        return res.render('login', {
            errors: {
            email: {
                msg:'No se encuentra éste email en la base'
            }
        }
    });
    },
//***ver */
    Profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        });
    },

    logout: (req,res) =>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

};


module.exports = usersController