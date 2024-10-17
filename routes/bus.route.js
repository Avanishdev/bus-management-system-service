const express = require('express');
const { createBus, updateBusLocation } = require('../controllers/bus.controller');
const router = express.Router();

router.post('/', createBus);
router.put('/location', updateBusLocation);

module.exports = router;
