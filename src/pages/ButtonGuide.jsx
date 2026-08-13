import { useRef, useEffect } from 'react';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/ButtonGroup';
import SvgIcon from '../components/common/SvgIcon';
const ButtonGuide = () => {

    const buttonRef = useRef(null)

    useEffect(() => {
        console.log(buttonRef)
        console.log(buttonRef.current.focus())
    }, []); // 마운트 시 한 번만 실행되는 예제
    return (
        <>
            <div className="sections guide">
                <div className="page_header">
                    <h2 className="page_tit">버튼 가이드</h2>
                </div>
                <div className="section">
                    <div className="box">
                        <h3 className="h_tit1">버튼</h3>
                        <h3 className="h_tit2">컬러</h3>
                        <ButtonGroup>
                            <Button color="primary" ref={buttonRef}>주요 버튼</Button>
                            <Button color="secondary">보조 버튼</Button>
                            <Button color="danger">위험 버튼</Button>
                            <Button color="light">라이트 버튼</Button>
                            <Button color="dark">다크 버튼</Button>
                        </ButtonGroup>

                        <h3 className="h_tit2">라인형</h3>
                        <ButtonGroup>
                            <Button color="primary" outline>주요 버튼</Button>
                            <Button color="secondary" outline>보조 버튼</Button>
                            <Button color="danger" outline>위험 버튼</Button>
                            <Button color="light" outline>라이트 버튼</Button>
                            <Button color="dark" outline>다크 버튼</Button>
                        </ButtonGroup>

                        <h3 className="h_tit2">크기</h3>
                        <h3 className="h_tit3">Small</h3>
                        <ButtonGroup>
                            <Button color="primary" size="sm">주요 버튼</Button>
                            <Button color="secondary" size="sm">보조 버튼</Button>
                            <Button color="danger" size="sm">위험 버튼</Button>
                            <Button color="light" size="sm">라이트 버튼</Button>
                            <Button color="dark" size="sm">다크 버튼</Button>
                        </ButtonGroup>
                        <h3 className="h_tit3">Medium</h3>
                        <ButtonGroup>
                            <Button color="primary">주요 버튼</Button>
                            <Button color="secondary">보조 버튼</Button>
                            <Button color="danger">위험 버튼</Button>
                            <Button color="light">라이트 버튼</Button>
                            <Button color="dark">다크 버튼</Button>
                        </ButtonGroup>
                        <h3 className="h_tit3">Large</h3>
                        <ButtonGroup>
                            <Button color="primary" size="lg">주요 버튼</Button>
                            <Button color="secondary" size="lg">보조 버튼</Button>
                            <Button color="danger" size="lg">위험 버튼</Button>
                            <Button color="light" size="lg">라이트 버튼</Button>
                            <Button color="dark" size="lg">다크 버튼</Button>
                        </ButtonGroup>

                        <h3 className="h_tit2">형태</h3>
                        <ButtonGroup>
                            <Button color="primary">일반 버튼</Button>
                            <Button color="secondary" round>라운드 버튼</Button>
                        </ButtonGroup>
                        <h3 className="h_tit2">비활성화</h3>
                        <ButtonGroup>
                            <Button color="primary" disabled>주요 버튼</Button>
                            <Button color="secondary" disabled>보조 버튼</Button>
                        </ButtonGroup>
                        <h3 className="h_tit2">Full 버튼</h3>
                        <ButtonGroup>
                            <Button color="primary" fullWidth>주요 버튼</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button color="secondary" fullWidth>보조 버튼</Button>
                        </ButtonGroup>
                    </div>
                    <div className="box">
                        <h3 className="h_tit1">버튼 그룹</h3>
                        <h2 className="h_tit2">정렬</h2>
                        <ButtonGroup size="sm" align="center">
                            <Button color="primary" icon={<SvgIcon name="house" size={16} />} aria-label="집">버튼</Button>
                            <Button color="primary" icon={<SvgIcon name="circleUser" size={24} color="lightblue" />} iconPosition="right">버튼</Button>
                            <Button color="primary" icon={<SvgIcon name="house" size={16} />} iconPosition="top">버튼</Button>
                            <Button color="primary" icon={<SvgIcon name="house" size={16} />} iconPosition="bottom">버튼</Button>
                            <Button color="danger" >버튼</Button>
                        </ButtonGroup>
                        <br />
                        <Button color="primary" disabled icon={<SvgIcon name="house" size={16} />} aria-label="집"></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ButtonGuide;
