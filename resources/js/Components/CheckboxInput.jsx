export default function CheckboxInput({ key, id, label, labelClass="", boxed = false, full = false, ...props }) {
    return (
        <label key={id} htmlFor={id} className={`flex flex-row items-center cursor-pointer gap-4 ${boxed ? 'border border-border rounded-md p-2' : ''} ${full ? 'w-full' : ''}`}>
            <div className="w-8">
                <input type="checkbox"
                    id={id}
                    className="w-7 h-7 accent-blue-600 cursor-pointer"
                    {...props}
                />
            </div>
            <label htmlFor={id} className={labelClass}>{label}</label>
        </label>
    );
}
