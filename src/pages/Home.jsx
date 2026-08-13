import React from "react";
import BulletList from '../components/common/BulletList';
import { useState } from 'react'


const Home = () => {
    const [count, setCount] = useState(0);

    const data = [
        {
            id: "2",
            text: "1뎁스 항목 A",
            children: [
                {
                    id: "1-1",
                    type: "bullet",
                    text: "일반 하위 불릿",
                },
                {
                    id: "1-2",
                    type: "text",
                    text: "마커 없는 부연 설명 텍스트",
                },
                {
                    id: "1-3",
                    type: "reference",
                    text: "관련 조항 3항",
                    source: "사규 12조",
                },
                {
                    id: "1-4",
                    type: "star",
                    text: "특히 중요한 항목",
                },
            ],
        },
        {
            id: "1",
            text: "1뎁스 항목 B (하위 없음)",
        },
    ];


    return (
        <>
            <div className="sections">
                <div className="page_header">
                    <div className="page_tit">Home</div>
                </div>
                <div className="section">
                    <div>
                        <h2>현재 값: {count}</h2>
                        <button onClick={() => setCount(prev => prev + 1)}>증가</button>
                        <button onClick={() => setCount(prev => prev - 1)}>감소</button>
                    </div>

                    <br />



                    <BulletList items={data} />
                </div>
            </div>
        </>
    )
}

export default Home;
