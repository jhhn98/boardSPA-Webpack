import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Header from '../../components/bbs/Header'
import Footer from '../../components/bbs/Footer'
import { loadBoardList } from '@/data/board/boardLoader'
import bbsInfo from '@/data/board/bbsInfo.json'
import type { BbsInfo } from '@/types/bbsInfo'
import type { BoardPost } from '@/types/board'
import Icon from '@/components/ui/icon/Icon'

export default function List() {
    const { bbsNo } = useParams<{ bbsNo: string }>()
    if (!bbsNo) return null
    const bbsConfig = (bbsInfo.data as BbsInfo[]).find((item) => item.bbsNo === bbsNo)
    if (!bbsConfig) return null
    const posts = bbsNo ? loadBoardList(bbsNo) : []
    const totalPosts = posts.length
    /*const [openPostNo, setOpenPostNo] = useState<number | null>(null)*/
    const [openAttachmentKey, setOpenAttachmentKey] = useState<string | null>(null)
    const bbsName = bbsConfig.bbsNm
    const postViewCount = bbsConfig.postViewCount
    // pagination 상태
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        setCurrentPage(1)
    }, [bbsNo])
    const paginationGroupSize = bbsConfig.paginationGroupSize
    const visiblePosts = posts
    const totalPages = Math.ceil(visiblePosts.length / postViewCount)
    const startIndex = (currentPage - 1) * postViewCount
    const endIndex = startIndex + postViewCount
    const currentPosts = visiblePosts.slice(startIndex, endIndex)
    const isInNoticePeriod = (post: BoardPost, today = new Date()) => {
        const period = post.noticePeriod
        if (!period?.startDate || !period.endDate) return false

        const start = new Date(`${period.startDate}T00:00:00`)
        const end = new Date(`${period.endDate}T23:59:59`)

        return start <= today && today <= end
    }
    const isFirstPage = currentPage === 1
    const noticePosts = isFirstPage ? currentPosts.filter((post) => isInNoticePeriod(post)) : []

    const renderNoticeRow = (post: BoardPost) => {
        const rowKey = `notice-${post.postNo}`
        return(
            <tr key={rowKey}>
                <td>
                    <Icon name="megaphone" width={18} height={18} fill="#ec0044" />
                </td>
                <td className="text-align-left">
                    <Link to="/bbsView">{post.title}</Link>
                </td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
                <td className="attachment">
                    {post.attachments?.hasFiles && (
                        <Fragment>
                            <button
                                type="button"
                                className="handle-button"
                                onClick={() =>
                                    setOpenAttachmentKey(prev =>
                                        prev === rowKey ? null : rowKey
                                    )
                                }
                            >
                                첨부파일 보기
                            </button>
                            <ul
                                className={`attachment-list${openAttachmentKey === rowKey ? ' is-open' : ''}`}
                            >
                                {post.attachments?.files.map((file: any) => (
                                    <li key={file.fileId}>
                                        <a href={file.url}>
                                            <span className="file-name">{file.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Fragment>
                    )}
                </td>
                <td>{post.views}</td>
            </tr>
        )

    }
    const renderNormalRow = (post: BoardPost, displayNo: number) => {
        const rowKey = `post-${post.postNo}`
        return (
            <tr key={post.postNo}>
                <td>{displayNo}</td>
                <td className="text-align-left">
                    <Link to="/bbsView">{post.title}</Link>
                </td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
                <td className="attachment">
                    {post.attachments?.hasFiles && (
                        <Fragment>
                            <button
                                type="button"
                                className="handle-button"
                                onClick={() =>
                                    setOpenAttachmentKey((prev) =>
                                        prev === rowKey ? null : rowKey,
                                    )
                                }
                            >
                                첨부파일 보기
                            </button>
                            <ul
                                className={`attachment-list${openAttachmentKey === rowKey ? ' is-open' : ''}`}
                            >
                                {post.attachments?.files.map((file: any) => (
                                    <li key={file.fileId}>
                                        <a href={file.url}>
                                            <span className="file-name">{file.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Fragment>
                    )}
                </td>
                <td>{post.views}</td>
            </tr>
        )
    }
    return (
        <Fragment>
            <Header
                totalPosts={totalPosts}
                totalPages={totalPages}
                currentPage={currentPage}
                bbsName={bbsName}
            />
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
                    {/* 공지기간 게시물. 첫번째 목록 상단에 표시 */}
                    {noticePosts.map((post) => renderNoticeRow(post))}
                    {currentPosts.map((post, index) => {
                        const displayNo = totalPosts - (currentPage - 1) * postViewCount - index
                        return renderNormalRow(post, displayNo)
                    })}
                </tbody>
            </table>
            <Footer
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                paginationGroupSize={paginationGroupSize}
            />
        </Fragment>
    )
}
