//const { response } = require('express');
const express = require('express');
//모듈 추출
const app = express();
//서버 생성

//request 이벤트 리스너 설정
app.get('/name/:day1/*',(request,response)=>{
    console.log(request.params.name);
    response.send(request.query);
});
//서버 실행
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273');
});