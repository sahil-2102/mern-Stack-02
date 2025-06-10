import { useEffect, useState } from "react";
const NoteList = () => {
    const [Notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/notes");
                if(!res.ok){
                    throw new Error("Failed to fetch notes!");
                }
                const data = await res.json();
                setNotes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchNotes();
    }, []);

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Notes.map((note) => (
          <div
            key={note._id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-gray-600 mt-2">{note.content}</p>
            <p className="text-xs text-gray-400 mt-4">
              Created at: {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NoteList;
