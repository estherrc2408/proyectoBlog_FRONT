const { signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { authFb } = require('../helpers/firebase')



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

const logOutAdmin = async (req, res) => {

    try {

        await signOut(authFb)
        console.log("log out");
        res.redirect('/')//index

    } catch (error) {

        console.log(error)
    }
};

module.exports={

    logInAdmin,
    logOutAdmin

}