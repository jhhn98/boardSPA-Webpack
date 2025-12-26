import type { BoardPost } from '../../types/board'
const boardListContext = require.context('./', true, /bbsList\.json$/)
export function loadBoardList(bbsNo: string): BoardPost[] {
    try {
        console.log('keys: ', boardListContext.keys())
        console.log('target: ', `./${bbsNo}/bbsList.json`)
        const data = boardListContext(`./${bbsNo}/bbsList.json`)
        return (data.default ?? data) as BoardPost[]
    } catch {
        return []
    }
}
