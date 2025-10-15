export default function Input({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    error = "",
    ...rest
}) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block font-medium mb-3.5 text-gray-700 text-[30px]">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"
                    }`}
                {...rest}
            />
            {error && <p className="text-red-500 text-[30px] mt-1">{error}</p>}
        </div>
    );
}
