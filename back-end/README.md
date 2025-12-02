# boardSPA: Express + MySQL API Server
## 프로젝트 구조
```bash
    ├── node_modules // Express 서버 진입점
    ├── server.js // MySQL 연결 설정
    ├── db.js
    └── package.json
```
## 실행 방법
### 1) 패키지 설치
```bash
   npm install
```
### 2) 개발 서버 실행
```bash
   node server.js
```
#### 서버 실행 성공시
```bash
   Server running on http://localhost:4000
```
### 3) 프로덕션 빌드
```bash
   npm run build
```
### 4) 로컬 서버 접속
```bash
   http://localhost:5173
```