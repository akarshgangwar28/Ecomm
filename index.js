const express=require("express");
const res = require("express/lib/response");

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Server is running</h1>");
});





app.listen(8000,()=>
{
    console.log("Server is running");
})