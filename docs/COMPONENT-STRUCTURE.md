# 컴포넌트 아키텍처
## 공통 요소
* 프로젝트 이름: h1
* 페이지 제목: h2
* 버튼: button - 폼데이터 submit, button onClick 핸들이벤트
* 링크: a - 페이지 라우터
* 폼 요소:
  * form
  * fieldset
  * legend
  * input 컴포넌트 안에서 분기처리
    * text
    * password
    * number
    * date
    * custom datePicker 제작해서 사용.
    * checkbox
    * radio
    * file
    * custom file..? 제작해서 사용.
    * textarea 등등
## 목록 페이지
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
