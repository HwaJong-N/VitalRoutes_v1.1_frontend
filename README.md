<p align="center">
  <img src="https://velog.velcdn.com/images/hj_/post/f9d065e4-34d8-4e3d-8acd-abdf8808a7f0/image.png">
</p>
<hr>

<div align="center">
  이 Repository 의 코드는 스위프 3기에서 진행한 팀 프로젝트의 프론트엔드 코드를 clone 개선 및 추가 개발한 것입니다.
  프로젝트에 대한 설명은 <a href="https://github.com/HwaJong-N/VitalRoutes_v1.1">백엔드 개선 Repository</a> 에서 확인하실 수 있습니다.
</div>


<br><br>

# 🛠 개발 before & after

### 1. 회원가입 및 소셜 로그인

1. 중복되는 닉네임이 존재해도 닉네임 인증 완료라는 메세지가 뜬다. 
    
    ➜ 서버 응답에 따른 분기처리 작성
    
2. 중복확인 없이 회원가입을 요청했을 때 닉네임 중복 확인을 해달라는 메세지가 뜨지 않는다. 
    
    ➜ 중복확인 여부 체크 로직 추가
    
3. 소셜 로그인 기능이 동작하지 않는다. 
    
    ➜ 백엔드 소셜 로그인 API 와 연결

<br><br>

### 2. 챌린지 목록 페이지 - 조회

![](https://velog.velcdn.com/images/hj_/post/2be95fa5-93d5-4104-b963-88581f930780/image.png)


1. 신규, 인기순, 추천순 조회 기능이 없다
    
    ➜ ( BE ) 동적쿼리를 사용해 챌린지 목록 조회 조건 생성 
    
    ➜ ( FE ) 조건을 쿼리 스트링으로 연결하여 API 를 요청하도록 수정
    

<br><br>


### 3. 챌린지 목록 페이지 - 챌린지 카드

![](https://velog.velcdn.com/images/hj_/post/786f29c8-66f9-42df-8187-bc87b393e88c/image.png)


1. 참여한 사용자가 존재하도 0 명 참가중으로 뜬다
    
    ➜ ( FE ) 참가 인원을 나타내는 서버 응답 필드와 연결
    
2. 북마크, 좋아요 버튼이 동작하지 않는다
    
    ➜ ( BE ) 북마크, 좋아요 기능 개발
    
    ➜ ( FE ) 버튼을 클릭했을 때 API 를 요청하도록 로직 개발
    

<br><br>


### 4. 챌린지 상세 페이지 - 배너

![](https://velog.velcdn.com/images/hj_/post/fdefcf54-d315-4da3-86d4-08ce1c792bc5/image.png)


1. 좋아요 수 표시, 북마크 버튼, 좋아요 버튼이 동작하지 않는다
    
    ➜ ( FE ) 서버의 응답과 좋아요 수 연결 및 버튼 클릭 시 API 를 요청하도록 로직 개발
    

<br><br>


### 5. 챌린지 상세 페이지  - 태그

![](https://velog.velcdn.com/images/hj_/post/ebfcb9d3-496b-47a4-afe4-7e53d16062f9/image.png)

1. 태그의 앞뒤에 대괄호가 붙어서 표현된다
    
    ➜ ( BE ) 올바른 형식으로 데이터를 전달하도록 개발
    
    ➜ ( FE, BE ) 이동 방법을 전달하여 태그 위에 표시되도록 추가하였다
    

<br><br>


### 6. 챌린지 상세 페이지 - 참여 및 댓글

![](https://velog.velcdn.com/images/hj_/post/ea74fce9-98a7-46df-8ec1-d93fe054badb/image.png)


1. 자신이 작성한 게시글이 아니어도 수정, 삭제를 할 수 있다
    
     ➜ ( FE ) 로그인 정보를 확인해서 자신이 작성한 게시글이  아니면 숨기기, 신고하기를 출력
    
2. 댓글 작성과 관련된 기능이 없다
    
    ➜ ( FE ) 댓글 작성과 관련된 페이지, 컴포넌트, 커스텀 훅을 개발하여 백엔드 API 와 연결



<br><br> 

### 7. 프로필 페이지

![](https://velog.velcdn.com/images/hj_/post/247a0c98-eeb6-4aec-a4f3-ff20ff2c722f/image.png)


1. 나의 챌린지, 참여 중인 챌린지, 좋아요한 챌린지, 북마크한 챌린지 조회 기능이 없다
    
    ➜ ( BE ) 각 조회 API 와 쿼리를 작성하여 원하는 챌린지를 조회할 수 있도록 개발
    
    ➜ ( FE ) 각 버튼과 조회 API 를 연결 및 컴포넌트를 통해 조회 결과 출력
    

<br><br>


### 8. 프로필 수정

![](https://velog.velcdn.com/images/hj_/post/ead12aa3-00fb-4f3b-8d0d-3f30b9543f7f/image.png)


1. 프로필 수정 시 모든 데이터를 입력하도록 되어 있어, 비밀번호 수정을 원치 않아도 해야 한다
    
    ➜ ( FE ) 수정 API 요청 전 validation 수정
    

<br><br>


### 9. 비밀번호 재설정

![](https://velog.velcdn.com/images/hj_/post/34447153-ca16-4bbf-9bc0-deedc81591e3/image.png)


1. 비밀번호 재설정 메일을 보내는 API 가 존재하지 않는다.
    
    ➜ ( FE ) API 를 요청하는 커스텀 훅 개발
    
2. 신규 비밀번호 입력 페이지, 비밀번호 요청 API 가 존재하지 않는다.
    
    ➜ ( FE ) 신규 비밀번호 입력 페이지 및 컴포넌트 개발, API 요청 커스텀 훅 개발


<br><br>

# 🔗 링크

> 프론트엔드 원본 Repository : https://github.com/VitalRoutes/frontend
