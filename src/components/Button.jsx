import Rating from './Rating';

const Button = ({ children, onClick, Rating, className = "" }) => {

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded
                 hover:bg-blue-600 focus:outline-none focus:ring-2
                  focus:ring-blue-300
                   ${className}`}
        >
            {children}
            <p>you rated: {Rating}/5</p>
        </button>
    );
};

export default Button;