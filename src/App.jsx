import { useState } from "react";
import NoteForm from "./components/NoteForm";
import ShowNotes from "./components/ShowNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  const updateNote = (id, updatedFields) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, ...updatedFields } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <NoteForm notes={notes} setNotes={setNotes} />
      <ShowNotes notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;