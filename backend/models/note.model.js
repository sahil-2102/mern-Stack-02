import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
