# KJIPizza
## 스프링부트를 활용한 객체지향적인 설계 추구
### 프로젝트 소개
* 위 프로젝트는 실생활에서 쉽게 접할수 있는 키오스크를 만들기 위한 프로젝트로 프론트(Web)과 백엔드(Java ,Spring Boot) 영역을 분담하여 프로젝트를 진행하였습니다.
* Spring boot 중점적으로 개발하였으며 Spring Security,Validation 등을 활용하였습니다.
* 제작 기간은 3주 정도 소요됐으며, 구성원은 다음과 같습니다.

### 목차

* 기능 소개

<a href = "https://github.com/syw1114"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> 서 영우 (메인페이지, 장바구니, 매출관리 View 및 백엔드)) </a>

<a href = "https://github.com/kwak-daeun"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> 곽 다은 (관리자 View, 상품등록 기능, 결제내역 조회기능)) </a>

<a href = "https://github.com/hajaeryul"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> 하 재률(메인 페이지 View, 로그인 기능, 회원가입 기능, 결제 기능)) </a>

### 기능 소개

매장 관리위해 기본적인 CRUD기능을 구현하였습니다. 어플리케이션의 모든 기능을 설명하지 않고 가장 핵심적인 기능 위주로 설명 하겠습니다.

#### 1. 로그인 및 회원가입 기능

 서비스계층의 join 메서드의 경우 JoinReqDto라는 추상클래스를 매겨변수로 받고 있습니다. 
joinReqDto는 유효성 검사를 하는 클래스입니다. 
키오스크 회원가입의 경우 관리자 회원가입영역만 존재하여 toEntity가 Dto로 변환돼서 데이터베이스에 저장되는 방식으로 처리하였습니다.

#### 2. 장바구니 기능
 
 클라이언트에 따라 자신이 담고싶은 제품을 담아 장바구니에 해당 제품을 조회할 수 있도록 구현하였습니다.
 해당 제품에 해당하는 버튼을 이용하여 수량을 증가,감소 할 수 있으며 새로고침을 한 경우에는 키오스크의 특성에 맞게 장바구니에 제품들의 정보가 남지않도록 하였습니다.
또한
 
 
