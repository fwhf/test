const express = require('express');
const app = new express();
app.use(express.static('./'));
app.listen(80,function(){
	console.log('sucess');
})