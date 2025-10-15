export default function Button({ children, onClick, type = "button", id = "", variant = "primary", disabled = false, className = "" }) {
    const baseClasses = "p-4 rounded-lg font-medium transition duration-200";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white border-2 border-blue-700 text-gray-800 hover:bg-gray-300",
        warning: "bg-orange-500 text-white hover:bg-orange-700",
        alert: "bg-red-600 text-white hover:bg-red-700",
    };

    const classes = `${className} ${baseClasses} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

    return (
        <button type={type} id={id} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
}
