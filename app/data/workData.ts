import type { Work } from "../lib/model"

const workData: Work[] = [
  {
    title: 'W사 건설사',
    year: '2015',
    desc: '페이지 컨버팅 (flash 에서 html) 및 관리자 페이지 개발',
    itemList: [
      'flash 웹접근 성에 위배되어 html 로 컨버팅 작업',
      '회원 관리, 유저 관리',
      '회원 정보 마이그레이션'
    ],
    badges: ['ASP', 'MSSQL', 'HTML', 'CSS']
  },

  {
    title: 'S사 소음측정 솔루션 업체',
    year: '2015',
    desc: 'S사 소음측정 Data 수집 및 Dashboard',
    itemList: [
      '소음 측정 데이터를 특정 주기별로 받아 데이터를 수집',
      ' Dashboard 에 각 장치에 위치 및 데시벨 정표표기',
      '정보 표기는 GoogleMap 사용',
      '코드 및 화면 관리용 관리자 화면 추가 개발'
    ],
    badges: ['JAVA', 'JavaScript', 'SPRING', 'MYSQL', 'AMChart']
  },

  {
    title: 'A사 CRM 영국의류 업체',
    year: '2016',
    desc: 'A사 CRM 구축 및 재고관리',
    itemList: [
      'MS사의 구)Dynamics CRM 현)Dynmic 365 를 이용한 CRM 구축',
      'CRM 관련 MCP license 2종 취득',
      '품목 마스터 CRM 마이그레이션',
      '바코드 입력 및 재고입력 프로세스 구현'
    ],
    badges: ['DynamicCRM', 'C#']
  },

  {
    title: 'B사 그림 판매 사이트',
    year: '2017-2018',
    desc: 'B사 그림 판매 사이트 운영',
    itemList: ['사이트 운영 및 추가 요건 사항 개발', '관리자 사이트 재 개발'],
    badges: ['DOTNET', 'MSSQL', 'JavaScript', 'IIS']
  },

  {
    title: 'G병원',
    year: '2017',
    desc: 'G 병원 운영 및 운영자 모듈 개발',
    itemList: [
      '병원 사이트 운영',
      '관리자 모듈 개발 이미지 연동',
      '사내 서버 배포 -> 웹 호스팅 이관'
    ],
    badges: ['ASP', 'MSSQL', 'JavaScript', 'IIS']
  },

  {
    title: 'K사 태권도',
    year: '2018',
    desc: 'K사 인사 회계 사이트 운영',
    itemList: ['인사 회계 사이트 운영', '월 마감 프로세스 지원'],
    badges: ['JSP', 'CYBASE', 'JavaScript', 'GAUS']
  },

  {
    title: 'N사 사내 프로젝트',
    year: '2018',
    desc: 'Data 분석 모듈 개발',
    itemList: [
      'GA 기반 분석 모듈 개발',
      '법인 별 마이그레이션 모듈 개발',
      'DevExpress 를 이용한 Dashboard 개발',
      'Fake Mail 방지 모듈 개발 ( AWS )',
      'Talend DI Tool 사용'
    ],
    badges: ['DOTNET', 'MSSQL', 'DevExpress', 'AWS', 'TOS']
  },

  {
    title: 'D사 배달업체',
    year: '2018',
    desc: '차량 배치 및 정산 모듈 개발',
    itemList: [
      '정산, 라이더관리, 실시간 지도 매핑, 배차 관리',
      '가맹점 이용 POS 프로그램',
      '포인트 관리'
    ],
    badges: ['SPRING', 'MariaDB', 'Tomcat', 'XPlatform', 'Cshap']
  },

  {
    title: 'P사 식품관련',
    year: '2019',
    desc: 'P사 매출, 손익 분석 시스템 개발',
    itemList: [
      '매출 분석 사이트 개발',
      '통합 및 부서별 Chart, Data Grid 제공',
      '각 부서별 데이터 Summary ( DI )',
      '정기적 데이터 수집을 위한 DI module 사용'
    ],
    badges: ['JSP', 'Oracle', 'WebLogic', 'MyBuilder', 'ODI']
  },

  {
    title: 'P사 식품관련',
    year: '2019-2023',
    desc: 'P사 매출 데이터 관리 시스템',
    itemList: ['M사이트 매출 분석 사이트 운영', '각 기준별 분석 장표 제공'],
    badges: ['JAVA', 'Oracle', 'Tomcat', 'STURTS']
  },

  {
    title: 'P사 푸드관련',
    year: '2019~',
    desc: 'P사 손익 분석 시스템',
    itemList: [
      '손익 분석 운영',
      'ERP 연동 및 월 마감 프로세스 운영',
      '대량 데이터 작업 지원',
      'MDB 사용 MDB to RDB 마이그레이션 개발',
      '내부 배부 프로세스 재 개발 포함',
      'MDB 데이터 조회 운영 - MDX',
      'Pentaho Data Integrator 사용'
    ],
    badges: ['JSP', 'Oracle', 'WebLogic', 'MyBuilder', 'Essbase', 'ODI', 'PDI']
  },

  {
    title: 'P사 Food',
    year: '2019',
    desc: 'P사 E사이트 개발',
    itemList: ['품목 관련 화면 개발'],
    badges: ['SPRING', 'TiberoDB', 'Tomcat', 'NexaCro']
  },

  {
    title: 'P사 health',
    year: '2020',
    desc: 'P사 재고관리 시스템',
    itemList: ['사이트 운영 지원', '로직, 화면 분석'],
    badges: ['SPRING', 'Oracle', 'Tomcat', 'KETTLE']
  },

  {
    title: 'P사 health',
    year: '2021',
    desc: 'P사 손익 분석 시스템',
    itemList: ['손익 분석 모듈 개발'],
    badges: ['JSP', 'Oracle', 'WebLogic', 'Essbase']
  },

  {
    title: 'E사 솔루션 업체',
    year: '2022',
    desc: 'E사 솔루션 모듈 분석',
    itemList: ['암호화 모듈 분리', '계층별 모듈 분리', '주입 모듈 분석'],
    badges: [
      'SPRING',
      'Tomcat',
      'JavaScript',
      'WEBIX',
      'LoDash',
      'SockJs',
      'GO',
      'FileSaver',
      'DhxGrid'
    ]
  },

  {
    title: 'P사 푸드관련',
    year: '2022',
    desc: '손익 분석 시스템 리뉴얼',
    itemList: [
      '비용 처리 모듈 개발',
      '배부 처리 프로세스 재 개발 (프로세스 추가)',
      '관련 화면 개발'
    ],
    badges: ['JSP', 'Oracle', 'WebLogic', 'Essbase', 'ODI']
  },

  {
    title: 'P사',
    year: '2022',
    desc: 'U사이트 API 호출 개발',
    itemList: [
      'API 개발',
      '알수없는 프레임워크로 소스 트래킹',
      '메소드 임의 변경 불가 하여 우회하여 개발'
    ],
    badges: ['SPRING', 'Tomcat', 'JavaScript', 'MYSQL']
  },

  {
    title: 'P사 푸드관련',
    year: '2023',
    desc: 'P사이트 Planning 개발',
    itemList: [
      '매출 생성 모듈',
      '사용자 정의 비용 산출',
      '각 금액 관련 배부 모듈 개발'
    ],
    badges: ['Oracle', 'Essbase']
  },

  {
    title: 'P사 ',
    year: '2023',
    desc: 'G 중계 서버 속성 사이트 분석',
    itemList: ['시점 별 패키지 모듈 분석', '데이터 송수신 모듈 분석'],
    badges: ['Oracle', 'JAVA']
  },

  {
    title: 'T사 ',
    year: '2023',
    desc: '솔루션 분석',
    itemList: ['Non Coding Solution 분석'],
    badges: ['SPRINGBOOT', 'JAVA', 'UNDERTOW', 'WEBIX', 'MOBX']
  },

  {
    title: 'P사 ',
    year: '2024',
    desc: '가맹관련 시스템 운영',
    itemList: [
      '가맹점 관리 시스템 운영',
      'ETL 관련 앱 포함',
      '데이터 파싱 앱 포함'
    ],
    badges: ['SPRINGBOOT', 'JAVA', 'Tomcat', 'Mustache', 'Jquery', 'AZURE']
  },

  {
    title: 'M사 ',
    year: '2024',
    desc: '내부 시스템 리뉴얼 개발 세팅 및 분석',
    itemList: ['내부 시스템 소스 세팅', '분석 및 개발 가이드'],
    badges: ['SPRINGBOOT', 'JAVA', 'Tomcat', 'React', 'MSA']
  },

  {
    title: 'P사 S',
    year: '2024',
    desc: '서버 이관',
    itemList: [
      'SSL in App -> Web Server',
      'Cloud -> OnPremise',
      'AJP 포트 연동'
    ],
    badges: ['Linux', 'SPRINGBOOT']
  }
]

export default workData
