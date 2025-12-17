# boardSPA

## 프로젝트 개요
실무에서 MPA(Multi Page Application) 방식으로 운영되던 게시판을<br/>
React 기반 SPA(Single Page Application) 방식으로 구현한 학습용 프로젝트이다.
<br/><br/>
기존의 게시판은 페이지 이동 시마다 전체 화면이 새로 로드되어 사용자 경험이 저하되고,<br/>
화면 단위로 기능 및 로직이 이루어져 있어 유지보수가 어렵다.
<br/><br/>
실무에서 운영되던 게시판을 SPA 방식으로 전환했을 경우<br/>
구조적 차이, 사용자 경험, 유지보수성을 직접 비교하고 학습해본다.

## 목적
* SPA 방식 적용으로 사용자 경험을 향상
  - 사용자의 요청에 의한 부분만 리렌더링
  - 렌더링이 오래 걸리는 부분에 대한 시각적 피드백을 제공
* 프로젝트의 관리와 유지보수의 용이성 향상
  - UI, 상태, 로직을 역할별로 분리
  - 유지보수 시 컴포넌트간 받는 영향 범위를 최소화하는 구조 설계

## 문서 바로가기(Google Docs)
* [게시판 구성요소 정의 draft v.0.1](https://docs.google.com/document/d/1ZDeb8x_owsRJ2W0VEScAEJ1_F2DCSU83bIQLfmFNYRs/edit?tab=t.0#heading=h.ebs7a467nvde)
* [기술 스택 v.0.01](https://docs.google.com/document/d/13IUA0OhlTIzZGOLC8oaN6l23uPzR1U2VuMT-1y7dp-M/edit?tab=t.0#heading=h.2yvlcc8n5jkg)
* [디렉토리 구조 설계 v.0.01](https://docs.google.com/document/d/1kiauAK40bWetP8i3WHu4vfXFFlfV-vVuAw8SvDKvX-o/edit?tab=t.0#heading=h.sy38djkwpupd)
* [컴포넌트 설계 v.0.01](https://docs.google.com/document/d/1BX8eC_1rgmYnKwb8XybcMKq70JkCW06vThOKwep6B08/edit?tab=t.0)
* [커스텀 훅 v.0.01](https://docs.google.com/document/d/135vXnlHezRp9_7hJ17kuhiN9Anb7Pk3KKg8C1fYHFtg/edit?tab=t.0)