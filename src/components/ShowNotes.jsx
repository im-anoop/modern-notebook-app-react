import { useState } from "react";

const ShowNotes = ({ notes, updateNote, deleteNote }) => {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEdit = (note) => {
        setEditId(note.id);
        setEditText(note.description);
    };

    const saveEdit = (id) => {
        updateNote(id, { description: editText });
        setEditId(null);
    };

    return (
        <div className="mt-10">
            <h3 className="text-3xl text-sky-400 font-bold text-center mb-6">
                Your Notes
            </h3>

            {notes.length === 0 && (
                <p className="text-gray-400 text-center">No notes added yet.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/20 hover:scale-[1.02] transition"
                    >
                        <h4 className="text-xl font-bold text-white">{note.title}</h4>

                        <p className="text-gray-300 text-sm mt-1">
                            {note.category} • {note.level}
                        </p>

                        {editId === note.id ? (
                            <>
                                <textarea
                                    className="w-full bg-slate-700 text-white p-2 mt-3 rounded-lg"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />

                                <button
                                    onClick={() => saveEdit(note.id)}
                                    className="mt-3 w-full bg-emerald-500 p-2 rounded-lg text-white font-semibold"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <p className="mt-3 text-gray-200">{note.description}</p>
                        )}

                        <p className="text-xs text-gray-400 mt-3">
                            {new Date(note.createdAt).toLocaleString()}
                        </p>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => startEdit(note)}
                                className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteNote(note.id)}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ShowNotes;