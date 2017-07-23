var wordnet = require('wordnet');
var wordDB = require('./wordDB');
var when = require('when');

var swap = function(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
	return a;
}

var showPermutations = function(remain, prefix, lens) {
	if (remain.length){
		for(var i = 0; i < remain.length; i++){
			showPermutations(remain.substr(0,i) + remain.substr(i+1), prefix + remain[i], lens);
		}
	}
	else{
		//console.log(lens.length - 1);
		lens.map(len => {
			wrds[len].push(prefix.substr(prefix.length - len));
		})
		//console.log(prefix);
	}
}

var makePromiseForWord = function(word){
	var promise = when.promise((resolve, reject, notify) => {
		wordnet.lookup(word, function(err, definitions) {
			if(wordDB.whQues[word] || wordDB.prepositions[word] || wordDB.pronouns[word] || wordDB.tenses[word] || wordDB.conjunctions[word]){
				//console.log("For word: ", word);
				resolve(word);
				return;
			}
			try{
				definitions.forEach(function(definition) {
				  	var words = '';
					definition.meta.words.forEach(function(word) {
						words += word.word + ' ';
					});
					//console.log("For word: ", word);
					resolve(word);
				    //console.log('words: %s', words.trim());
				    //console.log('  %s', definition.glossary);
				});
			}catch(err){
				//console.log("no match for word : " + wor); 
				//console.log(err);
				resolve("", err);
			}
		});
	});
	return promise;
}

//convert ArrayList to map
var convArrayToMap = function(arr){
	var map = {};
	arr.map(item => {
		if(item){
			map[item] = true;
		}
	});
	return map;
}

var wrds = {};
var lens = [];

var generateValidWords = function(letters, callback){
	for(var i = 3; i <= letters.length; i++){
		lens.push(i);
		wrds[i] = [];
	}
	//console.log(lens);
	showPermutations(letters, "", lens);
	//console.log(wrds);
	var promises = [];
	for(key in wrds){
		var w = wrds[key];
		w.map(word => {
			promises.push(makePromiseForWord(word));
		});
	}
	when.all(promises).then(data => {
		var validWords = convArrayToMap(data);
		//console.log(Object.keys(validWords));
		callback(Object.keys(validWords));
	});
}

module.exports = {
	generateValidWords: generateValidWords
}
