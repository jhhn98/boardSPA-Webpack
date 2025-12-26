import { Fragment } from 'react'
import { Outlet } from "react-router"
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}
