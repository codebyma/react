import React, { useState, useEffect, useRef } from "react";

function PreviousValueDemo() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count; // 렌더 후 현재 count를 ref에 저장
    }, [count]);

    const prevCount = prevCountRef.current;

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <p>이전 카운트: {prevCount !== undefined ? prevCount : "-"}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
}

export default PreviousValueDemo;