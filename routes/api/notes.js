const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// ALL paths start with '/api/notes' (root)

//GET ('/') index

router.get('/', ensureLoggedIn, notesCtrl.index);

//POST ()
router.post('/create', ensureLoggedIn, notesCtrl.create);

module.exports = router;