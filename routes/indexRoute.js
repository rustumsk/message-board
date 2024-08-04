const { Router } = require('express');
const indexRoute = Router();
const {getIndex, postInfo, getForm} = require('../controller/indexController');


indexRoute.get('/', getIndex);
indexRoute.get('/new', getForm);
indexRoute.post('/new', postInfo);


module.exports = {indexRoute};


