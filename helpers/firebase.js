const {initializeApp}=require('firebase/app');//init
const {getAuth}=require('firebase/auth');
const {firebaseConfig} =require('../config/firebase');

const firebaseApp = initializeApp(firebaseConfig);//init config
const authFirebase = getAuth(firebaseApp);//authentification

module.exports={
    authFirebase
};