import express from "express";
import {
    getAllNotes,
    getSingleNote,
    newNote,
    updateNote,
    deleteNote
}
from "../controllers/note.controller.js";
const router = express.Router();
router.route("/").get(getAllNotes).post(newNote);
router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

export default router;