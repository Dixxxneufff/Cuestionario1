var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
	title: "Proyecto Hotel Paraíso", 
    description: "Explora la página oficial de nuestro Hotel Paraíso y descubre todo lo que tiene para ofrecer.",
    renderLink: "https://lab-1-ctmj.onrender.com"
  });
});

module.exports = router;
