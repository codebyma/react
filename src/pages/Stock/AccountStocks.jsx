const Isa = () => {
    return (
        <>
            <>
                <div className="page_header">
                    <div className="page_tit">계좌별주식</div>
                </div>
                <div className="section">
                    {/* <h2 className="h_tit1">ISA 계좌</h2>
                        <h3 className="h_tit2">가입자격</h3> */}

                    <h3 className="h_tit2">국내주식 = 위탁계좌</h3>
                    <p className="body_txt"> - 삼전 카카오 네이버<br />
                        * 차익을 얻기위해 거래하는 주식<br />
                        * 위탁계좌 - 매매차익이 비과세이므로 세제혜탹이 있는 곳에서 매매를 할 필요가 없음</p>

                    <h3 className="h_tit2">국내 배당 주식 = ISA</h3>
                    <p className="body_txt"> - 하나금융지주 우리금융지주<br />
                        * ISA<br />
                        * 매매차익는 별로 없음. <br />
                        * 배당금에 대한 저율과세</p>

                    <h3 className="h_tit2">국내 상장 주식 ETF = 위탁계좌</h3>
                    <p className="body_txt">- 코덱스200 타이거헬스케어<br />
                        * 위탁계좌<br />
                        * 매매차익이 비과세</p>

                    <h3 className="h_tit2">국내 상장 배당 ETF = 연금계좌, IRP</h3>
                    <p className="body_txt"> - 아리랑고배당주 코덱스배당가치<br />
                        * 연금저축 그 다음 ISA<br />
                        * 연금저축은 15.4% 배당소득세를 안내고 재투자로 효과 좋음<br />
                        * ISA는 비과세 또는 9.9%</p>

                    <h3 className="h_tit2">국내 상장 미국 배당 ETF/국내 상장 미국 ETF = 연금계좌, IRP</h3>
                    <p className="body_txt">
                        - <br />
                        * 연금저축 그 다음 ISA<br />
                        * 연금저축은 15.4% 배당소득세를 안내고 재투자로 효과 좋음<br />
                        * ISA는 비과세 또는 9.9%</p>

                    <h3 className="h_tit2">미국 주식</h3>
                    <p className="body_txt">
                        - 애플 마소 아바존<br />
                        * 차익을 노림<br />
                        * 250만원 비과세 22% 양도소득세<br />
                        * 위탁 다른곳은 구매 불가</p>

                    <h3 className="h_tit2">미국 배당 주식</h3>
                    <p className="body_txt">
                        - JNJ PG ABBV KO<br />
                        * 위탁 다른곳은 구매 불가<br />
                        * 배당소득세 미국에서 15% 국내세금은 없음</p>
                    <h3 className="h_tit2">미국상장 미국ETF</h3>
                    <p className="body_txt">
                        - SPY IVV VOO QQQ<br />
                        * 위탁 다른곳은 구매 불가
                    </p>
                </div>
            </>
        </>
    )
}

export default Isa