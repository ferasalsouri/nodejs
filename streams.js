const fs =require('fs');

// read medium big data using stream that's be chunk data as buffers.
readStream= fs.createReadStream('./docs/streams.text',{encoding:'utf8'});


// then here we write medium big data using createWriteStream.
writeStream= fs.createWriteStream('./docs/copyStream.text');

// same code to use pipe data.
pipeStream= fs.createWriteStream('./docs/copyStreamUsingPipe.text');

// write stream data into file streaming though fs module. 

readStream.on('data',(chunk)=>{

	writeStream.write('\n New chunk \n');
	writeStream.write(chunk);
});

// something like perviose chunk function there is pipe(), doing same think. 


readStream.pipe(pipeStream);

// last thing there is duplex  stream is more advance we can talk about it later.