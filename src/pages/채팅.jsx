import React, { useState, useRef, useEffect } from "react";

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const prevMessagesRef = useRef([]);

    // 메시지 전송 함수
    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages(prev => [...prev, input]);
        setInput("");
    };

    // 이전 메시지 참조 저장
    useEffect(() => {
        prevMessagesRef.current = messages;
    }, [messages]);

    // 스크롤 항상 맨 아래로
    useEffect(() => {
        const messagesEnd = messagesEndRef.current;
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const prevMessages = prevMessagesRef.current;

    return (
        <div style={{ width: "300px", margin: "20px auto" }}>
            <div
                style={{
                    height: "200px",
                    border: "1px solid gray",
                    overflowY: "auto",
                    padding: "10px",
                }}
            >
                {messages.map((msg, idx) => (
                    <p key={idx}>
                        {msg} {prevMessages[idx] !== msg && idx > 0 ? "(새 메시지)" : ""}
                    </p>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="메시지 입력"
                style={{ width: "80%", padding: "5px" }}
            />
            <button onClick={sendMessage} style={{ width: "18%", marginLeft: "2%" }}>
                전송
            </button>
            <div>
                ✅ 기능 설명<br /><br />

                1. messages 상태<br />
                메시지를 배열로 관리.<br /><br />

                2. prevMessagesRef<br />
                이전 렌더 메시지를 저장해서 새 메시지 표시 가능.<br /><br />

                3. messagesEndRef<br />
                채팅창 스크롤을 항상 맨 아래로 이동시키는 용도.<br />
                behavior: "smooth" 로 부드럽게 이동.<br /><br />

                4. useEffect 활용<br />
                첫 번째: prevMessagesRef.current = messages → 이전 메시지 저장.<br />
                두 번째: messagesEndRef 사용 → 메시지 추가 시 스크롤 아래로 이동.
            </div>
        </div>
    );
}

export default ChatApp;