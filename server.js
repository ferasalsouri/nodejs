// this lesson we talk about create server 
//to request and response data using http and fs module into nodejs.

const http = require('http');
const fs= require('fs');

const _=require('lodash');

const server = http.createServer((req,res)=>{
	console.log('server mad');

	// lodash 

	//random lodash 
	const random= _.random(0,20);
	console.log(random);

	//using once lodash 
	const greet = _.once(()=>{
		console.log('hello world');
	});

	greet();
	greet();


	//server request 

	/*console.log(req.url,req.method);*/

	//resver response text/plain

	/*res.setHeader('content-type','text/plain');
	res.write('Hello World');*/

	//resver response text/html

	/*res.setHeader('content-type','text/html');
	res.write('<link rel="stylesheet" href="#"/>');
	res.write('<p>Hello World</p>');

	res.end();*/

	res.setHeader('content-type','text/html');

	let path= './views/';

	switch(req.url){
		case '/' :case '/home':
			path+='index.html';
			res.statusCode=200;
			break;
		case '/about':
			path+='about.html';
			res.statusCode=200;
			break;
		case '/about-us':
			res.statusCode=301;
			res.setHeader('Location','about');
			break;
		default:
			path+='404.html';
			res.statusCode=404;
			break;
	}

	fs.readFile(path,(err,data)=>{

		if(err){
			console.log('error page not found!');
			res.end();
		}else{

			//res.write(data);
			//res.end();

			res.end(data);
		}


	});
	
});


server.listen(3000,'localhost',()=>{
	console.log('listening for request port 3000');
});
