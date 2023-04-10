const { signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { authFb } = require('../helpers/firebase')

const getAdminIndex = async (_req, res) => {
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

const getCreateArticle = async (req,res) =>{
    
}

const getEditArticle = async (req,res) =>{

}

const createArticle = async (req,res) =>{

}

const updateArticle = async (req,res) =>{

}

const removeArticle = async (req,res) =>{

}

const logInAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        await signInWithEmailAndPassword(authFb, email, password)
        res.redirect('/adminIndex')
    } catch (error) {
        res.render('../views/log.ejs', {
            error
        });
    }
};

const logOutAdmin = async (_req, res) => {
    try {
        await signOut(authFb)
        console.log("log out");
        res.redirect('/')//index
    } catch (error) {
        console.log(error)
    }
};

module.exports={

    getAdminIndex,
    getCreateArticle,
    getEditArticle,
    createArticle,
    updateArticle,
    removeArticle,
    logInAdmin,
    logOutAdmin

}