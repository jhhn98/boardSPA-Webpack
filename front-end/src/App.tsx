import { Fragment } from 'react'
import List from './components/board/List'
import View from './components/board/View'
import Write from './components/board/Write'
import './styles/index.scss'

export default function App() {
    return (
        <Fragment>
            <List/>
            <View/>
            <Write/>
        </Fragment>
    )
}