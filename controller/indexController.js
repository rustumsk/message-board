const getIndex = (req,res,messages) =>{
    res.render('index', {messages});
}
const postInfo = (req,res,messages) =>{
    messages.push({text: req.body.message, user: req.body.authorName, added: new Date()});
    console.log("Message Logged");
    console.log(messages);
    res.redirect('/');
}
const getForm = (req,res) =>{
    res.render('form');
}
module.exports = { getIndex, postInfo, getForm };