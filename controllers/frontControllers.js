const {fetchApi} = require('../helpers/fetch');
const urlBaseBack = 'http://localhost:3000/api/articles/'; //TODO Move to env


const getIndexArticles = async (_req, res) => {
  try {
    const url = urlBaseBack;
    const {data} = await fetchApi(url, "GET");
    const info = data.data.docs;//data={}
    // const actualPage = info.page;
    console.log("articles", info)
    if (data.ok) {
      res.render('index', {
        title: "Blog - Articles",
        data:info,
        page:data.page,
        pages:data.pages,
        totalArticles: data.total
      });
    }
  } catch (error) {
    res.render('404')
  }

};

const getArticleView = async (req,res) =>{
  console.log(req.params.id)
  try{
    
    const idArticle = req.params.id;
    const url=`${urlBaseBack}${idArticle}`
    const {data}=await fetchApi(url,"GET");
    const article = data.data;
    res.render('view',{
      title:article.title,
      data:article
    })
      
  }catch(error){
    res.render('404')
  }}

  const getLogAdmin = (req, res) => {

    try{

    res.render('log',{
      title: 'log in!'
    });
    
  }catch(e){
    res.render('404')
  }

};

module.exports = {
  getIndexArticles,
  getArticleView,
  getLogAdmin
}