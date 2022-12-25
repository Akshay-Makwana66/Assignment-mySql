const express = require('express');
const router = express.Router();

const {uploadPost,getPost} = require('../controller/controller');

// Api's
router.post('/upload-post',uploadPost);
router.get('/get-posts',getPost);  

module.exports = router;