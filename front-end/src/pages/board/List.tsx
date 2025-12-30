import { Fragment } from 'react'
import { Link, useParams } from 'react-router'
import Header from '../../components/bbs/Header'
import Footer from '../../components/bbs/Footer'
import { loadBoardList } from '../../data/board/boardLoader'

export default function List() {
    const { bbsNo } = useParams<{ bbsNo: string }>()
    const posts = bbsNo ? loadBoardList(bbsNo) : []
    console.log('Data: ', posts)
    return (
        <Fragment>
            <Header />
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
                    {posts.length === 0 && (
                        <tr className="none-post" key="post-none">
                            <td colSpan={6}>등록된 게시물이 없습니다.</td>
                        </tr>
                    )}
                    {posts.map((post) => (
                        <tr key={post.postNo}>
                            {/*게시물번호 postNo*/}
                            <td className="text-align-right">{post.postNo}</td>
                            {/*제목 title*/}
                            <td className="text-align-left">
                                <Link to="/bbsView">{post.title}</Link>
                            </td>
                            {/*작성자 author*/}
                            <td>{post.author}</td>
                            {/*작성일 createdAt*/}
                            <td>{post.createdAt}</td>
                            {/*첨부파일 attachments*/}
                            <td>
                                <button type="button" className="handle-button">
                                    첨부파일 보기
                                </button>
                                {post.attachments && post.attachments.length > 0 && (
                                    <ul>
                                        {post.attachments.map((file) => (
                                            <li key={file.fileId}>
                                                <a href={file.url}>
                                                    <span className="file-name">{file.name}</span>
                                                    <span className="file-size">{file.size}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                            {/*조회수 views*/}
                            <td>{post.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </Fragment>
    )
}
