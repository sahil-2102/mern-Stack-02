import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center font-bold py-6">Notes App</h1>
      <NoteList />
    </div>
  );
}

export default App;
