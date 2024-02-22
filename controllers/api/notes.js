const Note = require('../../models/note')

module.exports = {
  index,
  create
}

async function index(req, res) {
  const notes = await Note.find({user: req.user._id})
  res.json(notes)
}

async function create(req, res) {
  req.body.user = req.user._id
  const note = await Note.create(req.body)
  res.json(note)
}