# docs-developer-test
개발자가이드 테스트용 소스

## 수정할 가이드문서 파일
- "./website/docs/*"
- https://github.com/genesisnest/docs-developer-test/tree/main/website/docs


## 문서빌드 확인
- https://docs-test.genesisnest.io/docs/welcome

## 기타 주요 파일 설명

- docusaurus.config.js
  - 기본 문서 빌드 설정
- sidebar.js
  - 왼쪽 사이드메뉴 구성으로 현재는 문서파일을 서치하여 자동으로 구성하도록 세팅
- Custom 도메인 적용을 위한 CNAME 경로
  - "website/static/CNAME"
- index.tsx
  - 사이트 Root메인 인덱스페이지
