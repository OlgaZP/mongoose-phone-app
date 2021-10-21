const { Router } = require('express');
const phoneRouter = require('./routes/phoneRouter');
const brandRouter = require('./routes/brandRouter');

const router = Router();

router.use('/phones', phoneRouter);

router.use('/brands', brandRouter);

module.exports = router;
