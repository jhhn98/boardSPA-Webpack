# 컴포넌트 아키텍처
## 공통 요소
| 컴포넌트                  | 경로         | 태그               | 속성             | 설명                                                                                                                                                          |
|-----------------------|------------|------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| &lt;ProjectName /&gt; | /component           | &lt;h1&gt;       |                | 프로젝트 이름                                                                                                                                                     |
| &lt;PageTitle /&gt;   | /component           | &lt;h2&gt;       |                | 페이지 제목                                                                                                                                                      |
| &lt;Button /&gt;      | /component           | &lt;button&gt;   |                | submit, onClick 등의 핸들 이벤트                                                                                                                                   |
| &lt;Link /&gt;        | /component           | &lt;a&gt;        |                 | 페이지 라우터                                                                                                                                                     |
| &lt;Form /&gt;        | /component | &lt;form&gt;     | method, action | 폼                                                                                                                                                           |
| &lt;Fieldset /&gt;    | /component | &lt;fieldset&gt; |                | 폼 그룹                                                                                                                                                        |
| &lt;Legend /&gt;      | /component | &lt;legend&gt;   |                   | 폼 그룹 이름                                                                                                                                                     |
| &lt;Input /&gt;       | /component |  &lt;input /&gt; | type, value      | 폼 요소<br/>type에서 text, password, number, date, datepicker(custom design), checkbox, radio, file, file(custom design), textarea의 타입을 체크하여 상황에 맞는 마크업 요소를 만든다. |
## 목록 페이지
| 컴포넌트                  | 경로         | 태그               | 속성             | 설명                                                                                                                                                          |
|-----------------------|------------|------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| &lt;ProjectName /&gt; | /component           | &lt;h1&gt;       |                | 프로젝트 이름                                                                                                                                                     |
| &lt;PageTitle /&gt;   | /component           | &lt;h2&gt;       |                | 페이지 제목                                                                                                                                                      |
| &lt;Button /&gt;      | /component           | &lt;button&gt;   |                | submit, onClick 등의 핸들 이벤트                                                                                                                                   |
| &lt;Link /&gt;        | /component           | &lt;a&gt;        |                 | 페이지 라우터                                                                                                                                                     |
| &lt;Form /&gt;        | /component | &lt;form&gt;     | method, action | 폼                                                                                                                                                           |
| &lt;Fieldset /&gt;    | /component | &lt;fieldset&gt; |                | 폼 그룹                                                                                                                                                        |
| &lt;Legend /&gt;      | /component | &lt;legend&gt;   |                   | 폼 그룹 이름                                                                                                                                                     |
| &lt;Input /&gt;       | /component |  &lt;input /&gt; | type, value      | 폼 요소<br/>type에서 text, password, number, date, datepicker(custom design), checkbox, radio, file, file(custom design), textarea의 타입을 체크하여 상황에 맞는 마크업 요소를 만든다. |
* List Header
  * 게시물수 / 페이지수
  * 목록 타입 선택
* List Body
  * 목록 테이블
    * 게시물 없을 경우 표출되는 안내문구
    * 상세보기 링크
    * 첨부파일 보기 버튼
    * 첨부파일 목록
* List Footer
  * pagination
    * 페이지 번호 - a
    * 현재 페이지 - button
    * 첫페이지, 이전페이지, 다음페이지, 마지막페이지 - a
## 상세 페이지
* View Header
  * 조회수
* View Body
  * 상세내용
  * 이전글, 다음글 - a
* View Footer
  * 수정, 삭제(button), 목록 버튼 및 링크
## 작성 페이지
* Form Header
  * 임시저장
  * 임시저장 날짜/시간
* Form Body
  * 작성 Form
* Form Footer
  * 저장, 임시저장, 취소(목록으로 가는 링크 a), 목록(a) 버튼 및 링크
## 수정 페이지
* Form Header
  * 임시저장 
  * 임시저장 날짜/시간
* Form Body
  * 작성 Form
* Form Footer
  * 저장, 임시저장, 취소(목록으로 가는 링크 a), 목록(a) 버튼 및 링크
