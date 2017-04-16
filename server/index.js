//import express from 'express';
var express = require('express');
//import path from 'path';
var path= require('path');
let app = express();

app.get('/*',(req,res)=>{
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname,'./../index.html'));
});

app.listen(3001,()=>console.log('localhost running the port 3000'));