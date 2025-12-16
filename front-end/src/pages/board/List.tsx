import { Fragment } from 'react'
import Pagination from '../../components/ui/Pagination'
export default function List() {
    return (
        <Fragment>
            <h2>&#39;게시판 이름&#39; - 목록</h2>
            <div className="board-function">
                <div className="block-left">
                    <span className="board-post-count">0 / 0</span>
                </div>
                <div className="block-right">
                    <button type="button" className="handle-button type-table">
                        목록으로 보기
                    </button>
                    <button type="button" className="handle-button type-thumbnail">
                        썸네일로 보기
                    </button>
                </div>
            </div>
            <table className="board-list">
                <caption>게시판 목록-게시물번호, 제목, 작성자, 작성일, 첨부파일, 조회수</caption>
                <colgroup>
                    <col style={{ width: '50px' }} />
                    <col />
                    <col style={{ width: '100px' }} />
                    <col style={{ width: '120px' }} />
                    <col style={{ width: '120px' }} />
                    <col style={{ width: '80px' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col">첨부파일</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="none-post">
                        <td colSpan={6}>등록된 게시물이 없습니다.</td>
                    </tr>
                    <tr>
                        <td className="text-align-right">1</td>
                        <td className="text-align-left">
                            <a href="">게시물 테스트입니다.</a>
                        </td>
                        <td>관리자</td>
                        <td>2025-10-04</td>
                        <td>
                            <button type="button" className="handle-button">
                                첨부파일 보기
                            </button>
                        </td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </Fragment>
    )
}
