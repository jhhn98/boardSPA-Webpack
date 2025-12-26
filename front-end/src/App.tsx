import { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import List from './pages/board/List'
import Home from './pages/Home'

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/bbs" element={<List />} />
                </Route>
            </Routes>
        </Fragment>
    )
}
