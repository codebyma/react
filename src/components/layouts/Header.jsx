
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header id="header">
            {/* <h1 className={styles.h1}>Header1</h1> */}
            <nav id={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/page/User">User</Link>
                <Link to="/page/List">List</Link>
                <Link to="/page/Stock/Stock">Stc</Link>
                <Link to="/page/ButtonGuide">Button</Link>
                <Link to="/page/AccordionPage">Accordion</Link>
                <Link to="/components/lifting/Lifting">LiftingHome</Link>
            </nav>
        </header>
    );
};

export default Header;
