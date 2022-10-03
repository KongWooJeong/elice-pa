
# 💻  Elice

<br>

# ⚙️ Installation

```
npm install
npm start
```

<br>

# 🛠 Folder-structure
```
  src
    - components: 리액트 컴포넌트
    - hooks: 커스텀 훅
    - pages: 각 페이지 
    - store: 리코일 상태 관련
    - styles: 글로벌 스타일
```

<br>

# 🧗 외부 라이브러리
### 1. 리코일
전역 상태 관리를 하기 위해서 리코일을 사용하였습니다. 
이번 과제를 진행하면 그동안 Redux, Context API를 사용하여서 새롭게 리코일을 한번 적용을 해보았습니다. 
리코일 사용하면서 느낀점은 확실히 개발자 측면에서는 보일러플레이트가 많은 리덕스 보다 처음 사용하는 사람에게는 접근하기가 수월했습니다. 
그리고 리코일도 페이스북에서 개발되어서 리액트의 Suspense와 ErrorBoundary 호환성이 좋아 사용하기가 수월했던점도 있는것 같습니다.

### 2. lodash
useDebounce 커스텀 훅을 만들기 위해서 lodash에 있는 디바운스 함수를 이용하였습니다.

<br>

# 구현 사항
### 1. 검색어 입력
검섹어 입력창에 디바운싱을 적용하여 해당 검색어를 기반으로 API 요청을 통해 화면에 응답받은 결과를 나타냈습니다.

### 2. 필터
가격 유료, 무료에 조건에 따라 API 요청을 통해 응답받은 결과를 나타냈습니다.

### 4. 페이지네이션
각 검색어, 필터를 통해서 상태가 바뀔때는 페이지네이션 정보를 초기화하여 관리하였습니다.

세부 구현 로직
페이지네이션 컴포넌트에는
 - pageList: 현재 화면에 보여지는 페이지 번호 리스트
 - lastPage: 현재 화면이 아니라 전체 페이지의 마지막 페이지 번호
 - currentPage: 현재 페이지 
로 구성 되어 있습니다.

-pageList 구현 로직
```
    const startPage = Math.max(currentPage - 4, 1);
    const endPage = Math.min(
      currentPage + 4,
      Math.ceil(data.course_count / 20)
    );
    const pageArr = [];

    for (let i = startPage; i <= endPage; i++) {
      pageArr.push(i);
    }

```
- 시작 페이지와 끝 페이지 번호를 구해 반복문을 진행하여 구성하였습니다.
