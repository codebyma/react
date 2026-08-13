import React, { useRef, useEffect } from "react";

function ScrollDemo() {
    const listRef = useRef();

    useEffect(() => {
        // 컴포넌트 마운트 후 스크롤 위치를 가장 아래로
        const list = listRef.current;
        list.scrollTop = list.scrollHeight;
    }, []);

    return (
        <>
            <div
                ref={listRef}
                style={{
                    height: "150px",
                    overflowY: "scroll",
                    border: "1px solid gray",
                }}
            >
                {Array.from({ length: 20 }, (_, i) => (
                    <p key={i}>아이템 {i + 1}</p>
                ))}
            </div>
            useRef로 DOM 접근 → 스크롤 위치 조정.<br />
            useEffect에서 마운트 시 실행 → 스크롤을 자동으로 맨 아래로 이동.<br />
            실시간 채팅 UI 구현 시 자주 사용되는 패턴.
        </>
    );
}

export default ScrollDemo;