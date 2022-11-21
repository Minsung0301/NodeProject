const http =require("http");
const { url } = require("inspector");
const app = http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type":"text/html; charset=utf-8"});
    if (req.url === '/'){
        res.end("여기는 루트입니다")
    }
    else if (req.url === '/login'){
        res.end("여기는 로그인입니다.")
    }
});

app.listen(3000, ()=>{
    console.log("http 가동을 통한 서버입니다")
})

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("여기는 루트입니다.")
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인입니다.")
// });

// app.listen(3000, function (){
//     console.log("서버 가동");
// });.