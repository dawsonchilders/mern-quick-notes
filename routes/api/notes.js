const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// ALL paths start with '/' (root)

//POST ('/') index

router.post('/', ensureLoggedIn, notesCtrl.index);

module.exports = router;