import { useState } from "react";
const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(title.trim() === "" || content.trim() === ""){
        setError("Both fields should not be empty!");
        return;
    }
    setError("");
    setIsSubmitting(true);
    try {
        const res = await fetch("http://localhost:5000/api/notes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content})
        });
        if(!res.ok){
            throw new Error("Failed to add note!");
        }
        setTitle("");
        setContent("");
        alert("Note saved successfully!");
    } catch (error) {
        setError(error.message);
    } finally {
        setIsSubmitting(false);
    }
  }
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow"
      >
        <h1 className="text-xl font-semibold mb-4">Create a new note</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="title"
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="text"
          placeholder="content"
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default NoteForm;
