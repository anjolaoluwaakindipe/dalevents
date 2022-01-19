const Button = ({ onClick, children, extraStyles }) => {
    return (
        <div
            className={`flex flex-row justify-center items-center px-4 py-2 rounded-md cursor-pointer ease-in transition-all duration-100 ${extraStyles}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;
