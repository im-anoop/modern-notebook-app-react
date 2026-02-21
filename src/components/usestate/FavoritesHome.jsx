import { useState } from "react";
import ItemCard from "./ItemCard";

const FavoritesHome = () => {
    const items = [
        { id: 1, name: "Laptop", image: "https://pixabay.com/photos/cat-red-cat-cats-eyes-lying-cat-3059075/" },
        { id: 2, name: "Mobile Phone", image: "https://via.placeholder.com/300x200" },
        { id: 3, name: "Smart Watch", image: "https://via.placeholder.com/300x200" },
        { id: 4, name: "Bluetooth Speaker", image: "https://via.placeholder.com/300x200" }
    ];

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (itemId) => {
        setFavorites(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">❤️ Wishlist Mini Project</h1>

            <h2 className="text-xl font-semibold mb-4">
                Favorites Count: {favorites.length}
            </h2>

            {/* HORIZONTAL CARD UI */}
            <div className="grid grid-cols-4 gap-6">
                {items.map(item => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        isFavorite={favorites.includes(item.id)}
                        onToggle={toggleFavorite}
                    />
                ))}
            </div>

            {/* WISHLIST SECTION */}
            <div className="mt-8 p-4 border rounded bg-gray-50">
                <h2 className="text-2xl font-bold mb-3">Your Favorites ❤️</h2>

                {favorites.length === 0 ? (
                    <p className="text-gray-500">No items added yet.</p>
                ) : (
                    <ul className="list-disc pl-5">
                        {items
                            .filter(item => favorites.includes(item.id))
                            .map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FavoritesHome;