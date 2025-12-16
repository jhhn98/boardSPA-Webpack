# boardSPA: React + Webpack

## 프론트엔드 프로젝트 구조

```bash
    ├── node_modules
    ├── public
    │   └── index.html
    ├── src
    │   ├── assets // 웹폰트, svg아이콘
    │   ├── components
    │   │   ├── common // 페이지 공통으로 들어가는 레이아웃 요소
    │   │   └── ui // 작은 단위의 구성요소들 컴포넌트
    │   ├── data // 임시 데이터
    │   ├── hooks // 커스텀 훅
    │   ├── pages // 라우팅
    │   ├── styles // css, scss 파일
    │   ├── state // 상태관리 
    │   ├── types // 공용으로 쓰는 타입. 컴포넌트 전용으로 쓰는 타입은 각 컴포넌트 파일과 동일한 디렉토리에 넣는다.
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── webpack.config.cjs
```

## 설치 및 실행 (Installation & Run)

### 1) 패키지 설치

```bash
   npm install
```

### 2) 개발 서버 실행

```bash
   npm run dev
```

### 3) 프로덕션 빌드

```bash
   npm run build
```

### 4) 로컬 서버 접속

```bash
   http://localhost:5173
```
