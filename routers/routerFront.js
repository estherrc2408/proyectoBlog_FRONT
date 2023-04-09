const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const { getIndexArticles, getArticleView, getLogAdmin } = require("../controllers/controller");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', getIndexArticles)
router.get('/search/:id',getArticleView)
router.get('/log', getLogAdmin );//vista



module.exports = router;
