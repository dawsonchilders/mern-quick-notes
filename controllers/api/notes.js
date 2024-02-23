const Note = require('../../models/note')

module.exports = {
  index,
  create,
  deleteNote
}

async function index(req, res) {
  const { sortOrder } = req.query
  const sortCriteria = sortOrder === 'asc' ? 'createdAt' : '-createdAt';
  const notes = await Note.find({user: req.user._id}).sort(sortCriteria);
  res.json(notes)
}

async function create(req, res) {
  req.body.user = req.user._id
  const note = await Note.create(req.body)
  res.json(note)
}

async function deleteNote(req, res) {
  await Note.findByIdAndDelete(req.params.noteId);
  const notes = await Note.find({user: req.user._id}).sort('createdAt');
  res.json(notes);
}