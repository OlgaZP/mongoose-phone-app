const { Router } = require('express');
const { brandController } = require('./../controllers');

const brandRouter = Router();

//brands
brandRouter.get('/', brandController.getBrands);

module.exports = brandRouter;
