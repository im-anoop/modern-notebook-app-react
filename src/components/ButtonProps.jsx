const ButtonProps = ({ label, callFunction }) => {
    const colorClass = label === "Success" ? "bg-green-300" : "bg-red-300"

    label === "Success"
        ? "bg-green-500 hover:bg-green-600"
        : label === "Danger"
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600";

    return (
        <div>
            <button onClick={callFunction} className={colorClass}>Okay</button>
        </div>
    )
}
export default ButtonProps;