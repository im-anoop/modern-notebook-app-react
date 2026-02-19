import { useState } from "react";

const NoteForm = ({ setNotes }) => {
    const [formData, setFormData] = useState({
        title: "",
        category: "work",
        level: "Medium",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            title: "",
            category: "work",
            level: "Medium",
            description: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Title is required");
            return;
        }

        const newNote = {
            ...formData,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString()
        };

        setNotes(prev => [...prev, newNote]);
        resetForm();
    };

    return (
        <div className="max-w-xl mx-auto bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-700">
            <h2 className="text-center text-3xl font-bold text-sky-400">
                Add New Note
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Title"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white p-3 rounded-lg"
                >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="other">Other</option>
                </select>

                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white p-3 rounded-lg"
                >
                    <option>Hard</option>
                    <option>Medium</option>
                    <option>Easy</option>
                </select>

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white p-3 rounded-lg min-h-28"
                    placeholder="Write description..."
                />

                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-lg text-white font-semibold shadow hover:opacity-90 transition"
                >
                    Add Note
                </button>

            </form>
        </div>
    );
};

export default NoteForm;