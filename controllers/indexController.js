const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

module.exports = {
    index: function (req, res) {
        return res.render('index', {
            title: 'T.P. Session y Cookies'
        })
    },
    message: function (req,res) {       
        return res.render('message')
    },
    stored: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { name, color, email, age, remember } = req.body;
            
            req.session.user = {
                name,
                color,
                email,
                age
              };

              if (remember) {
                res.cookie("color", req.session.user, {
                  maxAge: 1000 * 60 * 5,
                });
              }

            return res.redirect('/message');
        }else{
			return res.render('index', {
                title: 'T.P. Session y Cookies',
				errors: errors.mapped(),
				old: req.body
			})
		}
    },    
logout: (req, res) => {
      res.clearCookie("color");
      req.session.destroy();
      return res.redirect("/");
    },
}

