import { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import List from './pages/board/List'
import View from './pages/board/View'
import Write from './pages/board/Write'
import Edit from './pages/board/Edit'

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/bbsList/:bbsNo" element={<List />} />
                    <Route path="/bbsView/:bbsNo/:postNo" element={<View />} />
                    <Route path="/bbsWrite" element={<Write />} />
                    <Route path="/bbsEdit" element={<Edit />} />
                </Route>
            </Routes>
        </Fragment>
    )
}
