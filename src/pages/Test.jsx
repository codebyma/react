import { useRef } from "react";

// Input 컴포넌트
const Input = ({
    type = 'text',
    placeholder = '입력하세요',
    disabled = false,
    autoComplete = 'off',
    ...props
}) => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.value = '';
    };

    return (
        <div>
            <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
                {...props}
            />
            <Buttons onClick={focusInput} label="삭제" />
            <button type="button">다음</button>
        </div>
    );
}

// Button 컴포넌트
const Buttons = ({ onClick, label }) => {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    )
}



const InputTest = () => {

    return (
        <div>
            InputTest
            <div>
                <Input type="password" placeholder="비밀번호" />
            </div>
            <div>
                <Input type="tel" placeholder="전화번호" />
            </div>
        </div>
    )
}

export default InputTest