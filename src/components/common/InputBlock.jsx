import { useRef } from 'react'

function InputBlock({
    type = 'text',
    placeholder = '입력하세요',
    disabled = false,
    autoComplete = 'off',
    ...props
}) {
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
            <button type="button" onClick={focusInput}>삭제</button>
            <button type="button">다음</button>
        </div>
    );
}

export default InputBlock