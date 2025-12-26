import { Link, NavLink } from 'react-router-dom'
const getNavLinkClass = ({ isActive }: {isActive: boolean}) => `navigation-link${isActive ? ' active' : ''}`
export default function Header() {
    return (
        <header>
            <h1>
                <Link to="/">BoardSPA</Link>
            </h1>
            <nav className="navigation">
                <NavLink to="/bbsList/1" className={getNavLinkClass}>
                    공지사항
                </NavLink>
                <NavLink to="/bbsList/2" className={getNavLinkClass}>
                    자유게시판
                </NavLink>
            </nav>
        </header>
    )
}
