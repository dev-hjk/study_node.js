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
app.get('/URL', (요청, 응답) => {
    응답.send('데이터~~~')
})
//간단한 서버 기능임 

