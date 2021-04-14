const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

    router.post('/list', listController.createList);
    router.get('/list', listController.getList);
    router.get('/list/:id', listController.getListById);
    router.put('/list/:id', listController.updateListById);
    router.delete('/list/:id', listController.deteleListById);

module.exports = router;