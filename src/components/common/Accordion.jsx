import { useState, useRef, forwardRef } from "react";



const Accordion = forwardRef(
    (
        {
            children,
            title,
        },
        // ref
    ) => {
        const [openId, setOpenId] = useState(null);
        // 각 아코디언의 실제 높이(px)를 저장할 상태
        const [height, setHeight] = useState("0px");
        const contentRef = useRef(null);

        const toggleAccordion = (id) => {
            if (openId === id) {
                setOpenId(null);
                setHeight("0px");
            } else {
                setOpenId(id);
                // 렌더링 중이 아니라, 클릭 이벤트 핸들러(실행 시점)에서 ref에 접근
                const scrollHeight = contentRef.current ? contentRef.current.scrollHeight : 0;
                setHeight(`${scrollHeight}px`);
            }
        };

        return (
            <div className="accordion_item">
                <button
                    onClick={() => toggleAccordion("accordion_0")}
                    aria-expanded={openId === "accordion_0"}
                >
                    {title}
                </button>

                <div
                    className="accordion_body"
                    style={{
                        maxHeight: openId === "accordion_0" ? height : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out"
                    }}
                >
                    {/* 중요: 실제 높이를 측정할 내부 wrapper */}
                    <div ref={contentRef} className="accordion_content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);


export default Accordion;