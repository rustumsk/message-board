const { Router } = require('express');
const indexRoute = Router();
const {getIndex, postInfo, getForm} = require('../controller/indexController');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
indexRoute.get('/', (req,res) => getIndex(req,res,messages));
indexRoute.get('/new', getForm);
indexRoute.post('/new', (req,res) => postInfo(req,res,messages));


module.exports = {indexRoute,messages};


