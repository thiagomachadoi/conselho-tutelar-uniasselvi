export default function TableCell({ children, className = '' }) {
    return (
        <td
            className={`px-4 py-2 text-sm text-gray-700 whitespace-nowrap ${className}`}
        >
            {children}
        </td>
    );
}
