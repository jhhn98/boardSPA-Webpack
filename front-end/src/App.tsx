import { Fragment } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import List from './pages/board/List'
import View from './pages/board/View'
import Write from './pages/board/Write'
import './styles/index.scss'

export default function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <List/>
                <View/>
                <Write/>
            </main>
            <Footer/>
        </Fragment>
    )
}