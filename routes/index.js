const path = require('path');

const handler = app => {
    app.use('/', (req, res) => {
        res.render('home');
    });

    app.use('*', (req, res) => {
        res.redirect('/');
    });
};
  
module.exports = handler;