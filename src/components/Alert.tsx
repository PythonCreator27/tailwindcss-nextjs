const Alert: React.FC<{ alertTitle: string }> = ({ children, alertTitle }) => {
    return (
        <div
            className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative my-5 border-2"
            role="alert"
        >
            <strong className="font-bold">{alertTitle}</strong>
            <span className="block sm:inline sm:ml-1">{children}</span>
        </div>
    );
};

export default Alert;
