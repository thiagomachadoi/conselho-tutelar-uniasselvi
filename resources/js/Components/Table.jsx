export default function Table({ children }) {
    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm text-left text-gray-700">
                {children}
            </table>
        </div>
    );
}
