const express = require('express')
const app = express()
//express 라이브러리를 사용하겠다는 뜻 
//이렇게 하면 이제 express문법으로 서버 개발 쉽게 가능

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
//ejs 셋팅 끝!

const { MongoClient } = require('mongodb')

//몽고 db 연결 하는 법 
let db
const url = '';
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공')
    db = client.db('forum')
    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행중')
    })
}).catch((err) => {
    console.log(err)
})

//밑 코드 서버 띄울↙️↙️ 포트 번호
// app.listen(8080, () => {
//     console.log('http://localhost:8080 에서 서버 실행중')
// })

// 밑 코드 해석하면 누가 메인페이지 접속 시 '반갑다'라고 보내달라는 의미!
//누가 /URL 이런 URL로 접속하면 밑에응답.send('데이터~~~') 에서 데이터~~~ 보내주라는 뜻1
// app.get('/', (요청, 응답) => {
//     응답.send('반갑다')
// })

app.get('/news', (요청, 응답) => {
    db.collection('post').insertOne({ title: '어쩌구' })
    //db에서 가져오려면 db.collection('db에서의 collection이름')이 코드가 실행되면 insertOne({ title: '어쩌구' })이 데이터가 저장이 된다는 뜻!
    // 응답.send('오늘 비옴~~~')
})

//콜백함수 : 다른 함수 파라미터에 들어가는 함수(밑 코드에서 보면 get함수 밑에 function 함수가 들어가 있음. 이때 function을 콜백함수라고 볼 수 있음!)
//shop 먼저 실행 후 콜백함수 실행 됨! 
app.get('/shop', function (요청, 응답) {
    응답.send('쇼핑페이지임~~~')
})
//간단한 서버 기능임 
//새로운 페이지를 만들고 싶으면 위 app.get 코드를 복붙하면 새로운 페이지를 만들 수 있음!

//유저에게 html 파일을 보내주려면 
app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
})
//위 코드는 경로를 잡아준 것! 
//__dirname : 현재 프로젝트 절대 경로!
//  /index.html : 이렇게 한 이유는 지금 index.html을 어떤 폴더 안에 넣어준게 아니라 루트에 있으니까 앞에 루트라고 해준 것!

//누가 메인페이지 방문시 html 파일 보내라고 코드는 이렇게 짭니다. 

/*
1. 응답.send가 아니라.sendFile('파일경로') 입력하면 이 파일을 유저에게 보내줍니다. 

2. 파일경로를 적고 싶으면 

__dirname이라고 쓰면(언더바 2개) 현재 server.js 파일의 절대경로가 나옵니다.

근데 index.html은 server.js와 같은 폴더에 있으니까

__dirname 뒤에 / index.html 만 추가하면 index.html 파일경로가 나옵니다. */


//숙제 완료~~!
app.get('/about', (요청, 응답) => {
    응답.sendFile(__dirname + '/my.html')
})

app.get('/list', async (요청, 응답) => {
    let result = await db.collection('post').find().toArray()
    //컬렉션의 document 전부 출력하는 법
    //응답.send(result[0], title)
    //array, object에서 데이터 뽑는 법
    //응답.send(result[0].title)
    응답.render('list.ejs', { 글목록 : result })
})

app.get('/time', async (요청, 응답) => {
    
    응답.render('list.ejs', { data : new Date() })
})



