import React from "react";
import { Link, Outlet } from "react-router-dom";

const Stock = () => {
    return (
        <>
            <div className="sections">
                {/* Stock 내부 라우팅용 버튼 */}
                <nav class="sub_menu">
                    <Link to="Isa"><button>ISA</button></Link>
                    <Link to="AccountStocks"><button>계좌별주식</button></Link>
                </nav>
                {/* 여기서 서브 라우트 컴포넌트를 렌더링 */}
                <Outlet />
            </div>
        </>
    )
}

export default Stock;