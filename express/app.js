const express = require('express');

const app = express();

app.listen(3000);

// home page

app.get('/',(req,res)=>{

//res.send("<p>Hello there</p>");

	res.sendFile('/views/index.html',{root: __dirname});
});
// about page
app.get('/about',(req,res)=>{

	res.sendFile('/views/index.html',{root: __dirname});
});

// redirect page

app.get('/about-us',(req,res)=>{
	res.redirect('/about');
});

app.use((req,res)=>{
	res.status(404).sendFile('/views/404.html',{root: __dirname});
});