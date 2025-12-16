# 프론트엔드
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
## Git
### Branch
* main: 안정 버전, 배포 기준 브랜치
* develop: 기능 개발 및 작업 브랜치
### Commit
| Format    |  comment              |
|-----------|----------------------|
| feat:     |새로운 기능 추가 및 기존 기능 변경|
| refactor: |기능 변화 없이 구조만 변경|
| docs:     |프로젝트 문서 추가 및 변경|
| chore:    |빌드/환경 등의 설정 및 기타 작업|
| build:    |빌드 도구 관련 작업|
| style:    |동작외에 시각적인 변경|
| ci:       |빌드/테스트 파이프 라인 관련 작업|
| test:     |test 추가/수정, 리팩토링|
| perf:     |성능개선|
| fix:      |버그 수정|
| revert:   |commit 되돌리기|
<!--
  * refactor: 
    - 로직 정리, 중복 제거
    - 폴더 구조 변경
    - 컴포넌트 분리/합치기
    - 태그 구조 변경(예: table > ul 변경)
  * chore: 
    - 설정 파일 변경
    - 패키지 설치
    - 아이콘, 이미지 같은 assets 단순 추가
  * build: 
    - 빌드 설정 변경
    - output 구조 변경 등
  * style: 
    - CSS/SCSS 수정
      + 들여쓰기 등의 문서 레이아웃 정리
      + color, margin 등의 단순 수정
  * ci: 
  * test: 
  * perf: 
    - 렌더링 최적화
    - 불필요한 동작 제거
    - 번들 사이즈 감소
  * fix: 
    - 기능 오류 수정(예: 오타 수정 등)
  * revert: commit 되돌리기 
-->
# 백엔드
## 개발환경
* 서버(API): Node.js + Express
* 데이터 관리: MySQL