import { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import List from './pages/board/List'
import View from './pages/board/View'
import Home from './pages/Home'

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/bbsList/:bbsNo" element={<List />} />
                    <Route path="/bbsView" element={<View />} />
                </Route>
            </Routes>
        </Fragment>
    )
}
