const express = require("express");
const {getProductsByPId,getProductsByRegion}=require('./controller');
const router = express.Router();

router.get('/getProductsByRegion',getProductsByRegion);
router.get('/getProductsByPId',getProductsByPId);

module.exports = router;