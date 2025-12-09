import { Fragment } from 'react'

export default function View() {
    return (
        <Fragment>
            <div className='board-function margin-bottom-20'>
                <div className='board-post-count'>조회수: 987</div>
            </div>
            <ul className='post-what view'>{/* 기본으로 들어가는 클래스명을 못정하겠다..ㅠㅠ 이름짓기 어렵다. */}
                <li className='title'>
                    <strong id='postTitle'>제목</strong>
                    <div aria-labelledby='postTitle'>네오아트센터 개관 초대전에 동참해 주신 작가님들에게 감사 인사드립니다.</div>
                </li>
                <li className='date'>
                    <strong id='postDate'>작성일</strong>
                    <div aria-labelledby='postDate'>2023-08-17</div>
                </li>
                <li className='author'>
                    <strong id='postAuthor'>작성자</strong>
                    <div aria-labelledby='postAuthor'>관리자</div>
                </li>
                <li className='content'>
                    <strong id='postContent'>내용</strong>
                    <div aria-labelledby='postContent'>
                        ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅃㅆㅉ ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅒㅔㅖㅟㅘㅢㅙㅞ1234567890안녕하십니까 네오아트센터 대표 박정식입니다. 무더운 여름 건강하게 지내고 계신지요?
                        지난 4월 지역을 대표하는 상업 갤러리를 표방하면서 출발했던 네오아트센터 개관 초대전이 8월 15일로 마무리되었습니다.

                        ​무모한 용기와 열정으로 기획했던 개관 초대전에 많은 작가님들의 응원과 참여로 성공적인 개관 초대전을 마무리할 수 있었습니다.

                        ​개관 초대전에 작품을 출품해 주신 많은 작가님들과 운영위원회로 동참해 주신 작가님들에게 머리 숙여 감사 인사드립니다.

                        ​지난 봄 네오아트센터 개관을 앞두고 많은 작가분들이 희망과 걱정 그리고 응원에 힘으로 출발했던 네오아트센터가 이제 비로소 첫걸음을 내딛고 지역을 대표하는 문화공간으로 느린 걸음이지만 성장하고 있습니다.

                        앞으로 더 좋은 기획과 작품, 지역을 대표할 수 있는 복합문화공간으로 작가분들에게 도움이 되는 네오아트센터로 발전하겠습니다.​

                        다시 한번 함께하여 주신 모든 분들에게 감사 인사드립니다.
                    </div>
                </li>
                <li className='attachment'>
                    <strong id='postAttachment'>첨부파일</strong>
                    <div aria-labelledby='postAttachment'>
                        <div className='file-list'>
                            <a href=''>새로운시작_네오아트1.png</a>
                            <a href=''>새로운시작_네오아트2.png</a>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='board-post-navigation'>
                <div className='previous'><a href='' ><span>이전글: <em>이전글 제목</em></span></a></div>
                <div className='next'><a href=''><span>다음글: <em>다음글 제목</em></span></a></div>
            </div>
            <div className='post-actions'>
                <div className='block-left'>
                    <a href='' className='handle-anchor edit'>수정</a>
                    <button type='button' className='handle-anchor delete'>삭제</button>
                </div>
                <div className='block-right'>
                    <a href='' className='handle-anchor list'>목록</a>
                </div>
            </div>
        </Fragment>
    )
}