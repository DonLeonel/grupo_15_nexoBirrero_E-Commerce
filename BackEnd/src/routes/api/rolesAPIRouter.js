const express = require('express');
const router = express.Router();
const rolesApiController = require('../../controllers/api/rolesAPIController');

router.get('/roles', rolesApiController.listado);
router.get('/rol/:id', rolesApiController.detalle);

module.exports = router;