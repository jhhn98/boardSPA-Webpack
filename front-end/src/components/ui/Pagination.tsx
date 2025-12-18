import Icon from './icon/Icon'

export default function Pagination() {
    return (
        <div className="pagination">
            <a href="" className="page-arrow first">
                <Icon name="angleDoubleLeft" width={16} height={16} fill="#333" />
                <span>처음 페이지로 이동</span>
            </a>
            <a href="" className="page-arrow prev">
                <Icon name="angleLeft" width={16} height={16} fill="#333" />
                <span>이전 페이지로 이동</span>
            </a>
            <button type="button" className="current-page">
                <span>1</span>
            </button>
            <a href="">
                <span>2</span>
            </a>
            <a href="">
                <span>3</span>
            </a>
            <a href="">
                <span>4</span>
            </a>
            <a href="">
                <span>5</span>
            </a>
            <a href="" className="page-arrow next">
                <Icon name="angleRight" width={16} height={16} fill="#333" />
                <span>다음 페이지로 이동</span>
            </a>
            <a href="" className="page-arrow last">
                <Icon name="angleDoubleRight" width={16} height={16} fill="#333" />
                <span>마지막 페이지로 이동</span>
            </a>
        </div>
    )
}