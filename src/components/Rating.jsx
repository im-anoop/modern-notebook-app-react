import Button from "./Button";
import Star from "./Star";
import { useState } from "react";

const Rating = () => {
    const StarsList = Array.from({ length: 5 }, (_, index) => index + 1);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex gap-2 mt-4">
            {StarsList.map((value) => (
                <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                >
                    <Star filled={value <= (hoverRating || rating)} />
                </button>
            ))}
            <Button Rating={rating} />
        </div>
    );
};

export default Rating;