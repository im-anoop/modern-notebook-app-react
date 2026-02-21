import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import ShowNotes from "./ShowNotes";

const STORAGE_KEY = "notes";

const Homepage = () => {
    const [notes, setNotes] = useState(() => {
        // Load from localStorage on first render
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Persist to localStorage whenever notes change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        } catch {
            // ignore storage errors (quota/private mode)
        }
    }, [notes]);

    const updateNote = (id, updatedFields) => {
        setNotes((prev) =>
            prev.map((note) => (note.id === id ? { ...note, ...updatedFields } : note))
        );
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-900 p-6">
            <NoteForm setNotes={setNotes} />
            <ShowNotes notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
        </div>
    );
};

export default Homepage;