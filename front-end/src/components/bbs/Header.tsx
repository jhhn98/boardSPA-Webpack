import { Fragment } from 'react'

export default function Header() {
    return (
        <Fragment>
            <h2>&#39;게시판 이름&#39; - 목록</h2>
            <div className="board-function">
                <div className="block-left">
                    <span className="board-post-count">총 0 개 | 총 0 페이지</span>
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
