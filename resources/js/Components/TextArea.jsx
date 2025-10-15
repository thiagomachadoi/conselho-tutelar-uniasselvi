export default function TextArea({
    label,
    name,
    value,
    onChange,
    placeholder = "",
    error = "",
    rows = 4,
    ...rest
}) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block font-medium mb-3.5 text-gray-700 text-[30px]">
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${error ? "border-red-500" : "border-gray-300"
                    }`}
                {...rest}
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
}
