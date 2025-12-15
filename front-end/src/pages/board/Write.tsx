import { Fragment } from 'react'
import Icon from '../../components/ui/icons/Icon'
import Input from '../../components/ui/Input'
import DatePicker from '../../components/ui/DatePicker/DatePicker'
import FormField from '../../components/ui/FormField'
import Textarea from '../../components/ui/Textarea'
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
                            <div aria-labelledby="postAttachment">
                                {/**
                                 첨부파일 최초 입력란에는 + 버튼만 추가
                                 두번째 입력란부터는 +, - 버튼 추가
                                 입력란 추가는 최대 10개까지 기본값으로 최대갯수는 옵션으로 받아 설정할 수 있음.
                                 */}
                                <div className="form-element custom-input-file">
                                    <div className="file-picker">
                                        <div className="file-dropzone">
                                            <p className="file-dropzone-comment">파일을 여기로 드래그하거나</p>
                                            <label htmlFor="file1" className="file-dropzone-pick">
                                                <span>파일 선택</span>
                                                <input type="file" id="file1" className="input-file" multiple />
                                            </label>
                                            <p className="file-dropzone-pick-comment">여러 파일 선택 가능</p>
                                        </div>
                                        <div className="file-queue">
                                            <ul className="file-queue-list">
                                                <li className="file-queue-item">
                                                    <span className="name">
                                                        <em className="file-name">aasdfasdfasdfasdfasdfqwerdgkasjefhqpwoeiufpisudhfkqwjehrlksjdhf</em>
                                                        <em className="extension">.html</em>
                                                    </span>
                                                    <span className="meta">12 KB</span>
                                                    <button type="button" className="file-item-remove">
                                                        <span>파일 제거</span>
                                                        <Icon name="crossSmall" width={20} height={20} />
                                                    </button>
                                                </li>
                                                <li className="file-queue-item">
                                                    <span className="name">
                                                        <em className="file-name">a</em>
                                                        <em className="extension">.html</em>
                                                    </span>
                                                    <span className="meta">12 KB</span>
                                                    <button type="button" className="file-item-remove">
                                                        <span>파일 제거</span>
                                                        <Icon name="crossSmall" width={20} height={20} />
                                                    </button>
                                                </li>
                                                <li className="file-queue-item">
                                                    <span className="name">a.html</span>
                                                    <span className="meta">12 KB</span>
                                                    <button type="button" className="file-item-remove">
                                                        <span>파일 제거</span>
                                                        <Icon name="crossSmall" width={20} height={20} />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="file-actions">
                                            <button type="button" className="submit">
                                                <span>첨부하기</span>
                                                <Icon name="diskArrowRight" width={20} height={20} />
                                            </button>
                                            <button type="button" className="cancel">
                                                <span>전체 취소</span>
                                                <Icon name="diskXMark" width={20} height={20} />
                                            </button>
                                            <p className="file-message"></p>
                                        </div>
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
