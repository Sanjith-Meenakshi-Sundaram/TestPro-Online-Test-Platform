const express= require('express');

const {createTest, getallTests, getOneTest, getSpecificTests, updateTest, deleteTest} = require('../controllers/testController');

const router = express.Router();

router.post('/create', createTest);
router.get('/tests', getallTests);
router.get('/tests/:id', getOneTest);
router.get('/getSpecificTests/filter', getSpecificTests);
router.put('/update/:id', updateTest);
router.delete('/delete/:id', deleteTest);

module.exports = router;