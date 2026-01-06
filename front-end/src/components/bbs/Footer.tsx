import { Pagination } from '../ui/Pagination'
import { Fragment } from 'react'

type FooterProps = {
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
}
export default function Footer({ totalPages, currentPage, onPageChange }: FooterProps) {
    return (
        <Fragment>
            <div className="post-actions margin-top-20">
                <div className="block-left">
                    <button type="submit" className="handle-button save">
                        작성
                    </button>
                </div>
                <div className="block-right">
                    {/*<a href="" className="handle-anchor list">
                        목록
                    </a>*/}
                </div>
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onChange={onPageChange} />
        </Fragment>
    )
}
