import { NavLink, useParams } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <h1>
                <NavLink to="/">BoardSPA</NavLink>
            </h1>
            <nav className="navigation">
                <NavLink to="/board/1" className="navigation-link">
                    Board1
                </NavLink>
                <NavLink to="/board/2" className="navigation-link">
                    Board2
                </NavLink>
            </nav>
        </header>
    )
}
