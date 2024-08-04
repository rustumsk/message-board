const {getUser,addUser} = require('../model/queries');

const getIndex = async (req,res) =>{
    const messages = await getUser();
    console.log( messages );
    res.render('index', {messages});
}

const postInfo = async (req,res) =>{
    addUser(req.body.authorName, req.body.message);
    res.redirect('/');
}

const getForm = (req,res) =>{
    res.render('form');
}

module.exports = { getIndex, postInfo, getForm };