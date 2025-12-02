import { Fragment } from 'react'

export default function View() {
    return (
        <Fragment>
            <table className='board-table'>
                <caption>'게시물 제목' 상세보기 - 제목, 날짜, 작성자, 내용, 첨부파일</caption>
                <tbody>
                <tr>
                    <th scope='row'>제목</th>
                    <td>네오아트센터 개관 초대전에 동참해 주신 작가님들에게 감사 인사드립니다.</td>
                </tr>
                <tr>
                    <th scope='row'>작성일</th>
                    <td>2023-08-17</td>
                </tr>
                <tr>
                    <th scope='row'>작성자</th>
                    <td>관리자</td>
                </tr>
                <tr>
                    <th scope='row'>내용</th>
                    <td>
                        안녕하십니까 네오아트센터 대표 박정식입니다. 무더운 여름 건강하게 지내고 계신지요?
                        지난 4월 지역을 대표하는 상업 갤러리를 표방하면서 출발했던 네오아트센터 개관 초대전이 8월 15일로 마무리되었습니다.

                        ​무모한 용기와 열정으로 기획했던 개관 초대전에 많은 작가님들의 응원과 참여로 성공적인 개관 초대전을 마무리할 수 있었습니다.

                        ​개관 초대전에 작품을 출품해 주신 많은 작가님들과 운영위원회로 동참해 주신 작가님들에게 머리 숙여 감사 인사드립니다.

                        ​지난 봄 네오아트센터 개관을 앞두고 많은 작가분들이 희망과 걱정 그리고 응원에 힘으로 출발했던 네오아트센터가 이제 비로소 첫걸음을 내딛고 지역을 대표하는 문화공간으로 느린 걸음이지만 성장하고 있습니다.

                        앞으로 더 좋은 기획과 작품, 지역을 대표할 수 있는 복합문화공간으로 작가분들에게 도움이 되는 네오아트센터로 발전하겠습니다.​

                        다시 한번 함께하여 주신 모든 분들에게 감사 인사드립니다.
                    </td>
                </tr>
                <tr>
                    <th scope='row'>첨부파일</th>
                    <td>
                        <div className='attachment-list'>
                            <a href=''>새로운시작_네오아트1.png</a>
                            <a href=''>새로운시작_네오아트2.png</a>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className='board-post-navigation'>
                <div className='board-post-navigation__prev'><a href='' ><span>이전글: <em>이전글 제목</em></span></a></div>
                <div className='board-post-navigation__next'><a href=''><span>다음글: <em>다음글 제목</em></span></a></div>
            </div>
            <div className='board-actions'>
                <div className='board-actions__left'>
                    <a href='' className='handle-anchor edit'>수정</a>
                    <a href='' className='handle-anchor delete'>삭제</a>
                </div>
                <div className='board-actions__right'>
                    <a href='' className='handle-anchor list'>목록</a>
                </div>
            </div>
        </Fragment>
    )
}