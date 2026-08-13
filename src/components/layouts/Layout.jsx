import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div id="wrap">
            <Header />
            <main id="container">
                <Outlet /> {/* 여기에 Home, About, Contact 페이지가 렌더링 */}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
