var wordnet = require('wordnet');
var wor = "got";
wordnet.lookup(wor, function(err, definitions) {
	try{
		definitions.forEach(function(definition) {
	  	var words = '';
		definition.meta.words.forEach(function(word) {
			words += word.word + ' ';
		});
		console.log("For word: ", wor);
	    console.log('  words: %s', words.trim());
	    console.log('  %s', definition.glossary);
	  });
	}catch(err){
		console.log("no match for word : " + wor); 
		//console.log(err);
	}
});