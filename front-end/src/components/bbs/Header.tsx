import { Fragment } from 'react'
type HeaderProps = {
    totalPosts: number
    totalPages: number
    currentPage: number
    bbsName?: string
}
export default function Header({ totalPosts, totalPages, currentPage, bbsName }: HeaderProps) {
    return (
        <Fragment>
            <h2>{bbsName ?? '게시판'} - 목록</h2>
            <div className="board-function">
                <div className="block-left">
                    <span className="board-post-count">
                        총 {totalPosts} 개 | {currentPage} / {totalPages} 페이지
                    </span>
                </div>
                <div className="block-right">
                    {/**
                     추가기능
                     <button type="button" className="handle-button type-table">
                     목록으로 보기
                     </button>
                     <button type="button" className="handle-button type-thumbnail">
                     썸네일로 보기
                     </button>
                     */}
                </div>
            </div>
        </Fragment>
    )
}
