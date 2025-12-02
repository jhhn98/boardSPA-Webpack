import { Fragment } from 'react'

export default function Write() {
    return (
        <Fragment>
            <form>
                <fieldset>
                    <legend>게시물 작성</legend>
                    <table className='board-table'>
                        <caption>게시물 작성-제목, 작성자, 날짜, 내용, 첨부파일 항목</caption>
                        <tbody>
                        <tr>
                            <th scope='row'><label htmlFor='title'>제목</label></th>
                            <td>
                                <input type='text' id='title' className='form-input__text'/>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'><label htmlFor='date_write'>작성일</label></th>
                            <td>
                                <div className='form-input__date'>
                                    <input type='date' id='date_write'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>공지기간</th>
                            <td>
                                <div className='form-input__date'>
                                    <label htmlFor='date_notice_start'>공지시작일</label>
                                    <input type='date' id='date_notice_start'/>
                                </div>
                                <div className='form-input__date'>
                                    <label htmlFor='date_notice_end'>공지종료일</label>
                                    <input type='date' id='date_notice_end'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'><label htmlFor='author'>작성자</label></th>
                            <td>
                                <input type='text' id='author' className='form-input__text'/>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'><label htmlFor='content'>내용</label></th>
                            <td>
                                <textarea id='content' className='form-textarea'/>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>첨부파일</th>
                            <td>
                                <div className='form-attachment'>
                                    <div className='form-attachment__element'>
                                        <label htmlFor='file1'>File1</label>
                                        <input type='file' id='file1'/>
                                        <button type='button'>+</button>
                                    </div>
                                    <div className='form-attachment__element'>
                                        <label htmlFor='file2'>File2</label>
                                        <input type='file' id='file2'/>
                                        <button type='button'>+</button>
                                        <button type='button'>-</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/*
                        date picker, file input, input, textarea
                        수정폼을 따로 만들어야하나..
                    */}
                    <div className='board-actions margin-top-20'>
                        <div className='board-actions__left'>
                            <button type='submit' className='handle-button save'>저장</button>
                        </div>
                        <div className='board-actions__right'>
                            <a href='' className='handle-anchor list'>목록</a>
                        </div>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    )
}