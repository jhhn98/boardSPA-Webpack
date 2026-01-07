import type { BoardPost } from '../../types/board'
const boardListContext = require.context('./', true, /bbsList\.json$/)
export function loadBoardList(bbsNo: string): BoardPost[] {
    try {
        const result = boardListContext(`./${bbsNo}/bbsList.json`)
        const response = result.default ?? result
        const posts = response.data as BoardPost[]

        return [...posts].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
    } catch {
        return []
    }
}
