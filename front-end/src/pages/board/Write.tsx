import { Fragment } from 'react'
import Icon from '../../components/ui/icons/Icon'
export default function Write() {
    return (
        <Fragment>
            <form>
                <fieldset>
                    <legend>게시물 작성</legend>
                    <ul className="post-what editor">
                        <li className="title">
                            <strong id="postTitle">
                                <label htmlFor="title">제목</label>
                            </strong>
                            <div aria-labelledby="postTitle">
                                <div className="form-element">
                                    <input type="text" id="title" className="input-text" />
                                </div>
                            </div>
                        </li>
                        <li className="date">
                            <strong id="postDate">
                                <label htmlFor="date_write">작성일</label>
                            </strong>
                            <div aria-labelledby="postDate">
                                {/**
                                 날짜.. datePicker
                                 */}
                                <div className="form-element">
                                    <input
                                        type="text"
                                        id="date_write"
                                        readOnly
                                        value="2025-12-09"
                                        className="input-date"
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="date notice">
                            <strong id="noticeDate">공지기간</strong>
                            <div aria-labelledby="noticeDate">
                                <div className="form-element custom-input-date">
                                    <div className="date-picker">
                                        <input
                                            type="text"
                                            id="DP_YEAR"
                                            className="year"
                                            aria-label="년도"
                                            maxLength={4}
                                            min={1900}
                                            max={9999}
                                            placeholder="yyyy"
                                        />.
                                        <input
                                            type="text"
                                            id="DP_MONTH"
                                            className="month"
                                            aria-label="월"
                                            maxLength={2}
                                            min={1}
                                            max={12}
                                            placeholder="mm"
                                        />.
                                        <input
                                            type="text"
                                            id="DP_DAY"
                                            className="day"
                                            aria-label="일"
                                            maxLength={2}
                                            min={1}
                                            max={31}
                                            placeholder="dd"
                                        />.
                                        <button type="button" className="handle-calendar-open">
                                            <Icon
                                                name="calendarDay"
                                                width={16}
                                                height={16}
                                                fill="#ec0044"
                                            />
                                            <span>달력UI열기</span>
                                        </button>
                                        <div className="calendar-pannel">
                                            <div className="select-yyyymm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="noticeDate">
                                {/**
                                 날짜 단일 선택
                                 */}
                                <div className="form-element">
                                    <div className="date-picker">
                                        <label htmlFor="datePicker1">공지일</label>
                                        <input
                                            type="date"
                                            id="datePicker1"
                                            className="input-date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="noticeDate">
                                {/**
                                 날짜 다중 선택
                                 */}
                                <div className="form-element">
                                    <div className="date-picker">
                                        <label htmlFor="datePicker2">공지일(다중)</label>
                                        <input
                                            type="date"
                                            id="datePicker2"
                                            className="input-date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="noticeDate">
                                {/**
                                 날짜 범위 선택
                                 */}
                                <div className="form-element">
                                    <div className="date-picker">
                                        <label htmlFor="datePicker3_1">공지시작일</label>
                                        <input
                                            type="date"
                                            id="datePicker3_1"
                                            className="input-date"
                                        />
                                    </div>
                                </div>
                                <div className="form-element">
                                    <div className="date-picker">
                                        <label htmlFor="datePicker3_2">공지종료일</label>
                                        <input
                                            type="date"
                                            id="datePicker3_2"
                                            className="input-date"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="author">
                            <strong id="postAuthor">
                                <label htmlFor="author">작성자</label>
                            </strong>
                            <div aria-labelledby="postAuthor">
                                <div className="form-element">
                                    <input type="text" id="author" className="input-text" />
                                </div>
                            </div>
                        </li>
                        <li className="content">
                            <strong id="postContent">
                                <label htmlFor="content">내용</label>
                            </strong>
                            <div aria-labelledby="postContent">
                                <div className="form-element">
                                    <textarea id="content" className="textarea" />
                                </div>
                            </div>
                        </li>
                        <li className="attachment">
                            <strong id="postAttachment">첨부파일</strong>
                            <div aria-labelledby="postAttachment">
                                {/**
                                 첨부파일 최초 입력란에는 + 버튼만 추가
                                 두번째 입력란부터는 +, - 버튼 추가
                                 입력란 추가는 최대 10개까지 기본값으로 최대갯수는 옵션으로 받아 설정할 수 있음.
                                 */}
                                <div className="form-attachment">
                                    <div className="form-element">
                                        <label htmlFor="file1">File1</label>
                                        <input type="file" id="file1" className="input-file" />
                                        <button type="button">+</button>
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="file2">File2</label>
                                        <input type="file" id="file2" className="input-file" />
                                        <button type="button">+</button>
                                        <button type="button">-</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/*
                        date picker, file input, input, textarea
                        수정폼을 따로 만들어야하나..
                    */}
                    <div className="post-actions margin-top-20">
                        <div className="block-left">
                            <button type="submit" className="handle-button save">
                                저장
                            </button>
                        </div>
                        <div className="block-right">
                            <a href="" className="handle-anchor list">
                                목록
                            </a>
                        </div>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    )
}
