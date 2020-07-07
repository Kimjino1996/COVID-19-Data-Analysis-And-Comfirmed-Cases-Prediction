## COVID-19-Data-Analysis-And-Comfirmed-Cases-Prediction

### SIR 모형과 LSTM 기반의 COVID-19확진자 예측 비교 및 분석과 웹서비스 개발

<hr/>
<hr/>
<hr/>



### 수행 기간 TERM
> 2020.3.1~ 2020.6.30   
   
   
    
     



### 과제 목표 OBJECT

  + [LSTM, Logistic 회귀, SIR 모델을 통한 미래 확진자 예측]

  + [진행 정도에 따른 예측모델 비교를 통해 방역수준 측정]

  + [해당 정보를 제공하는 웹서비스 제공]
     
    
    
     


### 과제 구현 계획 PLAN

> 프로젝트 개요도

![cdp2_capture](https://user-images.githubusercontent.com/45062255/79193613-f4147700-7e65-11ea-9aeb-cd64161f5da4.png)

> Project ManageMent

  + Hangout, Slack 등의 Project Management Tool을 활용

  + Agile 기법의 Sprint (2주 기준) 방식으로 Project를 진행할 예정


> 프로젝트 환경

  + 사용 OS : Window

  + 개발 Tool : Jupyter Notebook, CoLab

  + 사용 언어 : Python

  + UI : WebService 제공
     
     
    
     

### 구현 결과 RESULT

  + LSTM 을 통한 예측 결과

  ![image](https://user-images.githubusercontent.com/45062255/86722273-b472bb00-c061-11ea-9bbf-807a13cc8f20.png)

  + Logistic 회귀를 통한 예측 결과

  ![image](https://user-images.githubusercontent.com/45062255/86722343-c3596d80-c061-11ea-8891-2c5674a63874.png)

  + SIR 을 통한 예측 결과

  ![image](https://user-images.githubusercontent.com/45062255/86722379-cbb1a880-c061-11ea-9f26-c7c5e6588a69.png)
  
  + 누적확진자와 신규확진자 관계 그래프 [Log_Scale]

  ![image](https://user-images.githubusercontent.com/45062255/86723327-c143de80-c062-11ea-8ac7-6ab13ad0376a.png)

  + 웹 페이지 스크린샷

  ![image](https://user-images.githubusercontent.com/45062255/86724555-d9682d80-c063-11ea-8bc3-7f88ead8a455.png)

    
     
     
    

### 오픈소스 사용 설명서 USAGE

  + git clone 을 통해 코드를 전부 다운 받는다.

  + Web Service build 를 위해서는 front end 부분은 react front/src 로 들아가서 APp.js 부분을 원하는대로 수정하고 npm run build 를 통하여 적용한다.

  + flask-backend 로 들어가 python main.py 로 main 을 실행시키면 웹 페이지가 실행된다.

  + Model Directory 에는 LSTM 기반 예측모델과 Logistic 회귀 기반 예측모델을 구현한 코드가 제시되어 있으며,   
 누적확진자 - 신규확진자 로그스케일 그래프 코드 또한 구현되어 있다.

  + Model_SIR 에는 SIR 모형 기반 예측모델 코드가 제시되어 있다.