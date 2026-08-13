const Isa = () => {
    return (
        <>
            <>
                <div className="page_header">
                    <div className="page_tit">ISA</div>
                </div>
                <div className="section">
                    <h2 className="h_tit1">ISA 계좌</h2>
                    <h3 className="h_tit2">가입자격</h3>
                    <p className="body_txt">
                        가입일 또는 만기 연장일 기준 만 19세 이상 거주자
                        전 금융기관 1인 1계좌 개설 가능
                        직전 3개월 금융소득종합과제 대상자는 가입 불가
                    </p>

                    <h3 className="h_tit2">납입한도</h3>
                    <p className="body_txt">
                        연 2천만원 / 5년간 최대 1억원까지 절세
                        납입 한도는 이월됨
                    </p>

                    <h3 className="h_tit2">의무 가입기간</h3>
                    <p className="body_txt">3년(만기 연장 가능)</p>

                    <h3 className="h_tit2">중도인출</h3>
                    <p className="body_txt">납입 원금이내 언제든 출금 가능</p>

                    <h3 className="h_tit2">혜택</h3>
                    <h4 className="h_tit3">비과세 & 분리과세 혜택</h4>
                    <p className="body_txt">
                        비과세 한도는 200만원
                        초과 수익은9.9% 분리과세
                        (참고로 일반 계좌에서 해외 주식형 ETF 매매하면 15.4% 배당소득세가 부과됨)
                    </p>
                    <h4 className="h_tit3">손익통산</h4>
                    <p className="body_txt">
                        계좌 내 수익과 손실을 모두 반영하여 최종 순수익에 대해서면 과세
                        (참고로 일반계좌에서 ETF 투자를 하면 상품별로 과세를 하지 계좌 단위로 하지 않음)
                    </p>
                    <h5 className="h_tit4">손익 예시</h5>
                    <div className="table_wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>일반계좌</th>
                                    <th>ISA계좌</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A주식</td>
                                    <td colSpan="2" className="align_c">+5,000,000</td>
                                </tr>
                                <tr>
                                    <td>B주식</td>
                                    <td colSpan="2" className="align_c">-1.000.000</td>
                                </tr>
                                <tr>
                                    <td>과세 대상</td>
                                    <td>5,000,000</td>
                                    <td>4,000,000</td>
                                </tr>
                                <tr>
                                    <td>비과세 한도</td>
                                    <td>0</td>
                                    <td>2,000,000</td>
                                </tr>
                                <tr>
                                    <td>최종 과세 대상</td>
                                    <td>5,000,000</td>
                                    <td>2,000,000</td>
                                </tr>
                                <tr>
                                    <td>세율</td>
                                    <td>15.4%</td>
                                    <td>9.9%</td>
                                </tr>
                                <tr>
                                    <td>세금</td>
                                    <td>770,000</td>
                                    <td>198,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="h_tit3">과세이연</h4>
                    <p className="body_txt">
                        매매차익을 손익 통산하여 ISA 계좌 해지 시점에 과세
                        과세 이연으로 인해 복리 효과 극대화 됨.
                        일반 계좌는 ETF를 매도하면 매도하는 즉시 수익에 대해 원천징수가 되고 난 세후 분배금을 계좌로 받는다.
                        ISA의 과세 시점은 해지 시점이기에 매매차익이 발생하여도 당장 납부할 세금이 없기에 재투자시 투자 원금의 규모가 달라진다.
                    </p>
                    <h5 className="h_tit4">투자 예시</h5>
                    <div className="table_wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>일반 계좌</th>
                                    <th>ISA 계좌</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>투자원금</td>
                                    <td colSpan="2" className="align_c">20,000,000</td>
                                </tr>
                                <tr>
                                    <td>20% 수익</td>
                                    <td colSpan="2" className="align_c">4,000,000</td>
                                </tr>
                                <tr>
                                    <td>매도 시 세금</td>
                                    <td>616,000</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>세후 수익금</td>
                                    <td>3,384,000</td>
                                    <td>4,000,000</td>
                                </tr>
                                <tr>
                                    <td>세후 수익률</td>
                                    <td>16.9%</td>
                                    <td>20.0%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 className="h_tit4">ETF와 세금</h5>
                    <div className="table_wrap scroll">
                        <table>
                            <colgroup>
                                <col className="w20" />
                                <col className="w30" />
                                <col className="" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>매매차익</th>
                                    <th>분배(배당)금</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>국내 ETF</td>
                                    <td>비과세</td>
                                    <td>15.4%<br /><small>(배당소득세)</small></td>
                                </tr>
                                <tr>
                                    <td>해외 ETF<br /><small>(국내상장)</small></td>
                                    <td>15.4%<br /><small>(매매차익 과세)</small></td>
                                    <td>15.4%<br /><small>(배당소득세)</small></td>
                                </tr>
                                <tr>
                                    <td>해외 ETF<br /><small>(해외상장)</small></td>
                                    <td>22%<br /><small>(250만원 비과세/<br />양도소득세)</small></td>
                                    <td>
                                        <ul className="bullet_dot mgt0">
                                            <li>미국: 15% 원천징수</li>
                                            <li>국내: 원천징수 된 금액에서 추가로 15.4%</li>
                                            <li>단, 외국납부세액공제로 인해 국내세금 - 미국세금 만 추가 납부</li>
                                            <li>
                                                예를 들어 배당금이 10만원이라면<br />
                                                미국 원천징수: 1.5만원<br />
                                                한국 분리과세: 1.54만원<br />
                                                외국납부세액 공제: 1.54만원 - 1.5만원 = 0.04만원 추가 납부
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>연금저축</td>
                                    <td colSpan="2">
                                        계좌내 발생한 수익은 비과세/<br />
                                        55세 이후 연금 수령시<br />
                                        3.3~5.5% 소득세</td>
                                </tr>
                                <tr>
                                    <td>ISA</td>
                                    <td colSpan="2">손익통산 후 9.9% 분리과세<br /><small>(200만원 비과세)</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="body_txt">
                        국내 주식형 ETF는 ISA 계좌를 통해 투자할 필요가 없다.<br />
                        왜냐면 매매 차익이 비과세이기 때문이다.<br />
                        ISA계좌는 한도가 있기 때문에 우선순위를 따지면 해외 주식형 ETF를 투자하는 게 좋다.<br />
                        그럼에도 불구하고 국내 주식형 ETF를 담고 싶다면 고배당 ETF를 담아주면 된다.
                    </p>
                </div>
            </>
        </>
    )
}

export default Isa