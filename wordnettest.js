var wordnet = require('wordnet');
var wordDB = require('./wordDB');


var swap = function(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
	return a;
}
var wrds = {};
var showPermutations = function(remain, prefix, lens) {
	if (remain.length){
		for(var i = 0; i < remain.length; i++){
			showPermutations(remain.substr(0,i) + remain.substr(i+1), prefix + remain[i], lens);
		}
		console.log(lens);
	}
	else{
		console.log(lens.length - 1);
		lens.map(len => {
			wrds[len].push(prefix.substr(prefix.length - len));
		})
		//wrds[lens[lens.length - 1]].push(prefix); 
		console.log(prefix);
		//w.push(prefix);
	}
}
var lens = [3,4,5];
lens.map(t => {
	wrds[t] = [];
});
console.log(lens);
showPermutations("clwas", "", lens);


console.log(wrds);

var res = [];
for(key in wrds){
	var w = wrds[key];
	w.map(wor => {
	wordnet.lookup(wor, function(err, definitions) {
		if(wordDB.whQues[wor] || wordDB.prepositions[wor] || wordDB.pronouns[wor] || wordDB.tenses[wor]){
			console.log("For word: ", wor);
			res.push(wor);
			return;
		}
		try{
			definitions.forEach(function(definition) {
			  	var words = '';
				definition.meta.words.forEach(function(word) {
					words += word.word + ' ';
				});
				console.log("For word: ", wor);
				res.push(wor);
			    console.log('words: %s', words.trim());
			    //console.log('  %s', definition.glossary);
			});
		}catch(err){
			//console.log("no match for word : " + wor); 
			//console.log(err);
		}

		});
	});
}


