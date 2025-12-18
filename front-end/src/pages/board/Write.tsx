import { Fragment } from 'react'
import Input from '../../components/ui/Input'
import FormField from '../../components/ui/FormField'
import Textarea from '../../components/ui/Textarea'
import DatePicker from '../../components/ui/datePicker/DatePicker'
import FilePicker from '../../components/ui/FilePicker/FilePicker'
export default function Write() {
    return (
        <Fragment>
            <h2>&#39;게시판 이름&#39; 게시물 작성</h2>
            <form>
                <fieldset>
                    <legend>게시물 작성</legend>
                    <ul className="post-what editor">
                        <li className="title">
                            <FormField label="제목" htmlFor="title">
                                <Input id="title" />
                            </FormField>
                        </li>
                        <li className="date">
                            <FormField label="작성일" htmlFor="date_write">
                                <Input id="date_write" readOnly value="2025-12-09" />
                            </FormField>
                        </li>
                        <li className="date notice">
                            <strong id="noticeDate" className="form-label">
                                공지기간
                            </strong>
                            <div aria-labelledby="noticeDate">
                                <DatePicker />
                            </div>
                        </li>
                        <li className="author">
                            <FormField label="작성자" htmlFor="author">
                                <Input id="author" />
                            </FormField>
                        </li>
                        <li className="content">
                            <FormField label="내용" htmlFor="content">
                                <Textarea id="content" />
                            </FormField>
                        </li>
                        <li className="attachment">
                            <strong id="postAttachment" className="form-label">
                                첨부파일
                            </strong>
                            <FilePicker />
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
