var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja/fact';

// const catsCtrl = require('../models/cat')

/* GET users listing. */

// starts with /cats/fact 

router.get('/', async function(req, res, next) {
  const catFact = await fetch(ROOT_URL)
    .then(res => res.json()); 
  res.render( 'cats/fact', { catFact } )
})

module.exports = router;
