import { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/board/List'
import View from './components/board/View'
import Write from './components/board/Write'
import './styles/index.scss'

export default function App() {
    return (
        <Fragment>
            <Header/>
            <List/>
            <View/>
            <Write/>
            <Footer/>
        </Fragment>
    )
}