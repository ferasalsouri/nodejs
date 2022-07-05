// file system module that's exists into module.
//const fs =require('fs');


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// 1 - read file docs using fs module 

/*fs.readFile('./docs/blog.text',(err,data)=>{

	if(err){
		console.log(err);
	}

	console.log(data.toString());
});*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



// 2 -  write words into file using fs module exists into node.

/*fs.writeFile('./docs/blog.text','Hello World',(err)=>{
	if(err){
		console.log(err);
	}
	console.log('data has been added into file.')
});*/


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// 3 -  if file doesn't exists into directory the fs module is create new file

/*fs.writeFile('./docs/blog2.text','Hello World added with created new file.',(err)=>{
	if(err){
		console.log(err);
	}
	console.log('data has been added into file.')
});*/


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// 4 -  create new directory and deleted it

/*if(!fs.existsSync('./assets')){
	fs.mkdir('./assets',(err)=>{
	if(err){
		console.log(err);
	}
})
}else{
	fs.rmdir('./assets',(err)=>{
		if(err){
			console.log(err)
		}
		console.log('folder deleted success.')
	})
}*/


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// 5- deleted file exists into folder.


/*if(fs.existsSync('./docs/removeText.text')){
	fs.unlink('./docs/removeText.text',(err)=>{
		if(err){
			console.log(err);
		}

		console.log('file has been deleted.');
	})
}*/
