const express = require('express');
const router = express.Router();

const {logInAdmin, logOutAdmin} =require('../controllers/adminControllers')



router.post('/login', logInAdmin );//submit 

router.get('/logout', logOutAdmin );//desloguear al index


module.exports = router;