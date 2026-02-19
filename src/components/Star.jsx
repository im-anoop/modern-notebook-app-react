const Star = ({ filled }) => {
    return (
        <div className="text-5xl">
            <span className={`text-5xl ${filled ? "text-yellow-500" : "text-gray-400"}`}>
                {filled ? "★" : "☆"}
            </span>
        </div>
    );
};

export default Star;