const express = require('express')
const app = express()
//express 라이브러리를 사용하겠다는 뜻 
//이렇게 하면 이제 express문법으로 서버 개발 쉽게 가능

//밑 코드 서버 띄울↙️↙️ 포트 번호
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

// 밑 코드 해석하면 누가 메인페이지 접속 시 '반갑다'라고 보내달라는 의미!
//누가 /URL 이런 URL로 접속하면 밑에응답.send('데이터~~~') 에서 데이터~~~ 보내주라는 뜻1
app.get('/', (요청, 응답) => {
    응답.send('반갑다')
})

app.get('/news', (요청, 응답) => {
    응답.send('오늘 비옴~~~')
})

//콜백함수 : 다른 함수 파라미터에 들어가는 함수(밑 코드에서 보면 get함수 밑에 function 함수가 들어가 있음. 이때 function을 콜백함수라고 볼 수 있음!)
//shop 먼저 실행 후 콜백함수 실행 됨! 
app.get('/shop', function(요청, 응답){
    응답.send('쇼핑페이지임~~~')
})
//간단한 서버 기능임 
//새로운 페이지를 만들고 싶으면 위 app.get 코드를 복붙하면 새로운 페이지를 만들 수 있음!
