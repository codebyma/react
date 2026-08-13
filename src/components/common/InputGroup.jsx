const InputGroup = ({ children, direction = "row" }) => {
    return (
        <div className={`input-group ${direction}`}>
            {children}
        </div>
    );
};

export default InputGroup