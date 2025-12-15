# 프론트엔드 아키텍처
## 개발환경
* 개발언어: HTML, SCSS, Javascript
* 라이브러리
  * 자바스크립트 라이브러리: React
  * CSS-in-JS 라이브러리: vanilla-extract
* 번들러: Webpack
* React Hook
  * 상태관리: useState, useReducer, useContext
  * 폼 제어: useRef
  * 사이드 이펙트: useEffect
  * 기타:
* 데이터 통신: Fetch API
* 라우팅: CSR, Lazy Loading, Code splitting
* 버전관리: Git
* CI/CD: Git Actions
* 테스트: 
## 코딩 컨벤션
### 네이밍 규칙
* Component
  * 
* Function
  * 
* Variable
  * 
* CSS class
  * 
* Folder
  * 
* File
  * Image
## Commit
| Format    | ex | comment |
|-----------|----|---------|
| feat:     |    |         |
| refactor: |    |         |
| docs:     |    |         |
  * feat: 새로운 기능 추가 및 변경
    - 새 컴포넌트 추가
    - 버튼 이벤트 추가
    - 페이지 추가
  * refactor: 기능 변화 없이 구조만 변경
    - 로직 정리, 중복 제거
    - 폴더 구조 변경
    - 컴포넌트 분리/합치기
    - 태그 구조 변경(예: table > ul 변경)
  * docs: 프로젝트 문서 추가 및 변경
  * chore: 빌드/환경 등의 설정 및 기타 작업.. 기타 작업이라..
    - 설정 파일 변경
    - 패키지 설치
    - 아이콘, 이미지 같은 assets 단순 추가
  * build: 빌드 도구 관련 작업
    - 빌드 설정 변경
    - output 구조 변경 등
  * style: 동작외에 시각적인 변경
    - CSS/SCSS 수정
      + 들여쓰기 등의 문서 레이아웃 정리
      + color, margin 등의 단순 수정
  * ci: 빌드/테스트 파이프 라인 관련 작업
  * test: test 추가/수정, 리팩토링
  * perf: 성능개선
    - 렌더링 최적화
    - 불필요한 동작 제거
    - 번들 사이즈 감소
  * fix: 버그 수정
    - 기능 오류 수정(예: 오타 수정 등)
  * revert: commit 되돌리기 
# 백엔드 아키텍처
## 개발환경
* 서버(API): Node.js + Express
* 데이터 관리: MySQL