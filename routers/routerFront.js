const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const { getIndexArticles, getArticleView, getLogAdmin } = require("../controllers/frontControllers");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', getIndexArticles)
router.get('/:id',getArticleView)
router.get('/view/logs', getLogAdmin)


module.exports = router;
