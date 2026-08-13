import { useEffect } from 'react';
import Accordion from '../components/common/Accordion';
const AccodianPage = () => {

    // const buttonRef = useRef(null)

    useEffect(() => {
        // console.log(buttonRef)
        // console.log(buttonRef.current.focus())
    }, []); // 마운트 시 한 번만 실행되는 예제
    return (
        <>
            <div className="sections guide">
                <div className="page_header">
                    <h2 className="page_tit">아코디언</h2>
                </div>
                <div className="section">
                    <div className="box">
                        <h3 className="h_tit1">버튼</h3>
                        <Accordion title="타이틀">
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            내용이 길어져도 scrollHeight를 통해 정확히 계산됩니다.
                        </Accordion>
                        <Accordion title="타이틀2">
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            첫 번째 아코디언 내용입니다.<br />
                            내용이 길어져도 scrollHeight를 통해 정확히 계산됩니다.
                        </Accordion>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AccodianPage;
