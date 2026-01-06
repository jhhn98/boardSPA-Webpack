import Icon from './icon/Icon'

type PaginationProps = {
    currentPage: number
    totalPages: number
    onChange: (page: number) => void
    pageGroupSize?: number
}
export function Pagination({
    currentPage,
    totalPages,
    onChange,
    pageGroupSize = 5,
}: PaginationProps) {
    const goFirst = () => onChange(1)
    const goLast = () => onChange(totalPages)
    /*const goPrevious = () => {
        if (currentPage > 1) {
            onChange(currentPage - 1)
        }
    }
    const goNext = () => {
        if (currentPage < totalPages) {
            onChange(currentPage + 1)
        }
    }*/
    const goPreviousGroup = () => {
        if (startPage > 1) {
            onChange(startPage - 1)
        }
    }
    const goNextGroup = () => {
        if (endPage < totalPages) {
            onChange(endPage + 1)
        }
    }
    const currentGroup = Math.floor((currentPage - 1) / pageGroupSize)
    const startPage = currentGroup * pageGroupSize + 1
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages)
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    return (
        <div className="pagination">
            <button className="page-arrow first" onClick={goFirst}>
                <Icon name="angleDoubleLeft" width={16} height={16} fill="#333" />
                <span>처음 페이지로 이동</span>
            </button>
            <button className="page-arrow prev" onClick={goPreviousGroup}>
                <Icon name="angleLeft" width={16} height={16} fill="#333" />
                <span>이전 페이지로 이동</span>
            </button>
            {pages.map((page) =>
                page === currentPage ? (
                    <button key={page} className="current-page">
                        <span>{page}</span>
                    </button>
                ) : (
                    <button key={page} onClick={() => onChange(page)}>
                        <span>{page}</span>
                    </button>
                ),
            )}
            <button className="page-arrow next" onClick={goNextGroup}>
                <Icon name="angleRight" width={16} height={16} fill="#333" />
                <span>다음 페이지로 이동</span>
            </button>
            <button className="page-arrow last" onClick={goLast}>
                <Icon name="angleDoubleRight" width={16} height={16} fill="#333" />
                <span>마지막 페이지로 이동</span>
            </button>
        </div>
    )
}