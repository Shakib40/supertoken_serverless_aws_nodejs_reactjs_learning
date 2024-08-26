const USER = require("../schema/user.schema");

// Create a new note
exports.createNote = (req, res) => {
  const { title, content } = req.body;
  const id = notes.length + 1;
  const newNote = { id, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
};

// Get all notes
exports.getAllNotes = (req, res) => {
  res.json(notes);
};

// Get a note by ID
exports.GET_LIST = (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json(note);
};
