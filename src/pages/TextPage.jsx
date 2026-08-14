import { useEffect } from 'react';
import Text from '../components/common/Text';
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
                    <h2 className="page_tit">텍스트</h2>
                </div>
                <div className="section">
                    <div className="box">
                        <h3 className="h_tit1">기본</h3>
                        <Text as="h1" size="3xl" weight="bold" color="text-slate-900">
                            h1 태그 / 3xl / bold
                        </Text>

                        <Text as="h2" size="2xl" weight="semibold" color="text-blue-600">
                            h2 태그 / 2xl / blue-600
                        </Text>

                        <Text as="p" size="md" color="text-slate-600">
                            p 태그 / 기본 본문 텍스트입니다. tailwind에 이미 정의된 컬러 클래스를
                            color prop에 그대로 넘겨서 자유롭게 바꿀 수 있습니다.
                        </Text>

                        <Text
                            as="span"
                            size="sm"
                            color="text-violet-600"
                            weight="medium"
                            className="inline-block px-2 py-0.5 bg-violet-50 rounded"
                        >
                            span 태그 / 뱃지처럼 활용
                        </Text>

                        <Text as="div" size="lg" color="text-emerald-600" weight="bold" className="tracking-tight">
                            div 태그 / 커스텀 className 병합 (tracking-tight)
                        </Text>

                        {/* tailwind 기본 팔레트에 있는 색이면 뭐든 자유롭게 사용 가능 */}
                        <Text as="p" size="sm" color="text-amber-500">
                            amber-500 예시
                        </Text>
                        <Text as="p" size="sm" color="text-cyan-600">
                            cyan-600 예시
                        </Text>
                        <Text as="p" size="sm" color="text-fuchsia-500">
                            fuchsia-500 예시
                        </Text>

                        <div className="bg-slate-800 p-4 rounded">
                            <Text as="span" color="text-white" size="sm">
                                어두운 배경에서 white 컬러
                            </Text>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AccodianPage;
