import Note from "../models/note.model.js";
// @desc    Get all notes
// @route   GET /api/notes
export const getAllNotes = async (req, res) => {
    const notes = await Note.find().sort({createdAt : -1});
    res.json(notes);
};
// @desc    Get a single note
// @route   GET /api/notes/:id 
export const getSingleNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({messsage: "Note not found!"});
    }
    res.status(201).json(note);
};
// @desc    Create a new note
// @route   POST /api/notes
export const newNote = async (req, res) => {
    const {title, content} = req.body;
    if(!title || !content){
        return res.json({message: "All fields are required!"});
    }
    const newNote = new Note({title, content});
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
};
// @desc    Update a note
// @route   PUT /api/notes/:id
export const updateNote = async (req, res) => {
    const {title, content} = req.body;
    const note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({message: "Note not found!"});
    }
    note.title = title || note.title;
    note.content = content || note.content;
    const updatedNote = await note.save();
    res.json(updatedNote);
};
// @desc    Delete a note
// @route   DELETE /api/notes/:id
export const deleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({message: " Note not found!"});
    }
    await note.deleteOne();
    res.json({message: "Note deleted!"});
}