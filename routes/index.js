const express = require('express');

const router = express.Router();
// Require controller modules.
const s3Controller = require('../controllers/s3controller');

/* GET home page. */
// router.get('/', (req, res, next) => {
//  res.render('index', { title: 'Express' });
// });

router.get('/', s3Controller.index);

router.post('/', s3Controller.post);
module.exports = router;
