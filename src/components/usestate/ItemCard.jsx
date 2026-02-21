const ItemCard = ({ item, isFavorite, onToggle }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded"
            />

            <div className="flex justify-between items-center mt-3">
                <h2 className="text-lg font-semibold">{item.name}</h2>

                <button onClick={() => onToggle(item.id)}>
                    <span className={`text-3xl ${isFavorite ? "text-red-500" : "text-gray-400"}`}>
                        {isFavorite ? "❤️" : "🤍"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ItemCard;