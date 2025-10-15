export default function TableHeaderCell({ children, className = '' }) {
    return (
        <th
            className={`px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider ${className}`}
        >
            {children}
        </th>
    );
}
