import { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import List from './pages/board/List'

export default function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board/:bbsId" element={<List />} />
                </Routes>
            </main>
            <Footer />
        </Fragment>
    )
}
