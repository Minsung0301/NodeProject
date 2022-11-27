"use strict"

const express = require("express");
const app = express();

const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home")
app.use("/", home)

app.listen(PORT, function (){
    console.log("서버 가동");
});