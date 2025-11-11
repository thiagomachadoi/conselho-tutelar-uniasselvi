import ReactSelect from "react-select";

export default function Select({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Selecione...",
    error = "",
    isMulti = false,
    isClearable = true,
    isDisabled = false,
}) {
    return (
        <div className="mb-4">
            {label && (
                <label className="block font-medium mb-3.5 text-gray-700 text-[30px]" htmlFor={name}>
                    {label}
                </label>
            )}
            <ReactSelect
                id={name}
                name={name}
                value={options.find((opt) => opt.value === value) || null}
                onChange={(selected) => {
                    const val = isMulti
                        ? selected?.map((s) => s.value)
                        : selected?.value || "";
                    onChange(val);
                }}
                options={options}
                placeholder={placeholder}
                isMulti={isMulti}
                isClearable={isClearable}
                isDisabled={isDisabled}
                noOptionsMessage={() => "Nenhuma opção disponível"}
                classNames={{
                    control: () => "border rounded-md shadow-sm",
                }}
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: error ? "#f87171" : "#d1d5db",
                        boxShadow: state.isFocused ? "0 0 0 2px rgba(59,130,246,0.5)" : "none",
                    }),
                }}
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
}
