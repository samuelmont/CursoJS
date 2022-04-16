const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors); // mostra o erro
            req.session.save(function() {
                return res.redirect('/login/index');  //nos mandará para a pagina que já estavamos caso ocorrer um erro
            });
            return; //retorna o if
        }
    
        req.flash('success', 'Seu usuario foi cadastrado'); // mostra o erro
        req.session.save(function() {
            return res.redirect('/login/index');  //nos mandará para a pagina que já estavamos informando successo
        });

    }  catch(e) {
        console.log(e);
        return res.render('404');
    }
};