# About
This software generates all valid words of different lengths for given set of letters

## Getting Started

1. Install

```
npm install word-cookie
```

2. Use

```
var prog = require('word-cookie');
prog.generateValidWords("sugar", function(validWords){
	console.log(validWords);
});
```
