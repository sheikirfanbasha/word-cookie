var prog = require('./index');
prog.generateValidWords("image", function(validWords){
	console.log(validWords);
});