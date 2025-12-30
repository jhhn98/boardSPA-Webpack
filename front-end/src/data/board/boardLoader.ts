import type { BoardPost } from '../../types/board'
const boardListContext = require.context('./', true, /bbsList\.json$/)
export function loadBoardList(bbsNo: string): BoardPost[] {
    try {
        const result = boardListContext(`./${bbsNo}/bbsList.json`)
        const response = result.default ?? result
        console.log(result)
        console.log(response.data)
        return response.data as BoardPost[]
    } catch {
        return []
    }
}
