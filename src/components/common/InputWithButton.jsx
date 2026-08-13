import { useRef } from 'react'
import Input from './Input'

const InputWithButton = () => {
    const inputRef = useRef(null);

    const clearAndFocus = () => {
        inputRef.current.value = '';  // 또는 controlled라면 setState('')
        inputRef.current.focus();
    };

    return (
        <div className="input-group">
            <Input ref={inputRef} placeholder={placeholder} />
            <button onClick={clearAndFocus}>Clear</button>
        </div>
    );
};


export default InputWithButton