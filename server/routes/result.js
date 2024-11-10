const express = require('express');
const { createResult, getuserResults, getOneResult } = require('../controllers/resultController');

const router=express.Router();

router.get('/userresults/:id',getuserResults);
router.get('/results/:id', getOneResult);
router.post('/saveresult', createResult);

module.exports = router;