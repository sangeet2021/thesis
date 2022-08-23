const express = require('express');
const { createRequest, getRequests, getRequest, deleteRequest } = require('../controllers/requestController');
const router = express.Router();

router.post('/',createRequest);

router.get('/',getRequests);

router.get('/:id',getRequest);

router.put('/:id',);

router.delete('/:id',deleteRequest);

module.exports = router;