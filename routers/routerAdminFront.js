const express = require("express");
const router = express.Router();
const{getAdminIndex,getCreateArticle,getEditArticle,createArticle,updateArticle,removeArticle}=require('../controllers/adminControllers');


router.get('/adminIndex',getAdminIndex)
router.get('/createArticle',getCreateArticle)
router.get('/editArticle/:id',getEditArticle)

router.post('/createArticle',createArticle)
router.post('/editArticle/:id',updateArticle)
router.get('/removeArticle/:id',removeArticle)

module.exports=router;