# 공공 데이터 제공 서비스

![main](./img/loginmenu.png)

## 📖 DESCRIPTION

- 공공 데이터 제공 서비스는 외부 API를 호출하여 다양한 일상 정보를 제공하는 서비스입니다.
- 부트캠프를 통해 진행한 1개월 간의 기업협업(레드브릭)에서 실습하며 개발한 백엔드 서비스입니다.
- API 문서화, OAuth 2.0 적용, TDD, 부하 테스트 및 배포 등의 실습을 통해 전체적인 백엔드 개발 과정을 경험했습니다.

### BASIC INFORMATION

- 개발 기간: 2022.10.18 ~ 2022.11.04
- 개발 인원: 5명(BE 5명)
- API Documentation
  ![main](./img/main.png)

### FOLDER STRUCTURE

```
├── app.js
├── img
│   ├── bus1.png
│   ├── bus2.png
│   ├── loginmenu.png
│   └── main.png
├── package-lock.json
├── package.json
├── server.js
├── src
│   ├── controllers
│   │   ├── busController.js
│   │   ├── dustController.js
│   │   ├── gitController.js
│   │   ├── gituserController.js
│   │   ├── homeController.js
│   │   ├── index.js
│   │   ├── metroController.js
│   │   ├── naverController.js
│   │   ├── newsController.js
│   │   ├── userController.js
│   │   └── wetherControllers.js
│   ├── models
│   │   ├── dataSource.js
│   │   ├── gituserDao.js
│   │   ├── index.js
│   │   ├── naverDao.js
│   │   └── userDao.js
│   ├── routers
│   │   ├── busRouter.js
│   │   ├── dustRouter.js
│   │   ├── gitRouter.js
│   │   ├── gituserRouter.js
│   │   ├── homeRouter.js
│   │   ├── index.js
│   │   ├── metroRouter.js
│   │   ├── naverRouter.js
│   │   ├── newsRouter.js
│   │   ├── userRouter.js
│   │   └── wetherRouters.js
│   ├── services
│   │   ├── busService.js
│   │   ├── dustService.js
│   │   ├── gituserService.js
│   │   ├── index.js
│   │   ├── metroService.js
│   │   ├── naverService.js
│   │   ├── newsService.js
│   │   ├── userService.js
│   │   └── wetherServices.js
│   ├── swagger
│   │   ├── openapi.yaml
│   │   └── swagger.yaml
│   └── utils
│       ├── auth.js
│       └── error.js
├── test
│   ├── test.js
│   └── token.test.js
└── views
    ├── home.ejs
    └── service.ejs
```

### TECH STACK

- Server: Javascript, Node.js, Express
- Database: MySQL, TypeORM
- DevOps: Terraform
- Tools: Git, GitHub, Slack, Open API 3.0, JMeter

## ⌨️ FUNCTIONS AND WHAT I LEARNED

### API DOCUMENTATION

- Open API 3.0을 활용한 API 문서화
- YAML 문법에 대한 이해

### 소셜 로그인

- 인가 코드 - 액세스 토큰 - 사용자 정보 확인 과정에 대한 이해
- 소셜 로그인 정보와 DB 내 사용자 정보 대조에 따른 사용자 등록 또는 서비스 토큰 발행
- 네이버, 카카오, 구글, 페이스북 등 다양한 SNS 활용

### 부하 테스트

- Threads(사용자 수)와 Loop(테스트 수) 변동에 따른 응답 여부, 응답 시간 및 처리량 등의 결과 분석
- 서비스별 테스트 방식 조정의 필요성 학습
  (짧은 정보를 반복적으로 제공하는 서비스 vs 무거운 데이터를 처리하는 서비스)

### TERRAFORM

- 홈페이지 내 배포 튜토리얼 실습

### TDD(Test Driven Development)

- 외부 API 호출에 대한 테스트
- Unit Test와 End-to-End Test의 구분 및 구현 방식에 대한 학습

## 👥 TEAMMATES

- BackEnd: 김응수, 정다영, 정승렬, 정인호, 최진우

## ⚠️ LICENSE

- 이 프로젝트는 학습 목적으로 제작되었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.

## 📱 CONTACT

최진우
choiramsey8@gmail.com | https://velog.io/@choiramsey8