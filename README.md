# About

This software generates all valid words of different lengths for given set of letters. Developed in the interest of generating solutions for the famous word-cookie game.

![screenshot_2017-07-23-09-24-02-996_com bitmango go wordcookies](https://user-images.githubusercontent.com/8801972/28496441-23a6ceb2-6f89-11e7-8091-f175dbd86b96.png)

## Getting Started

**Install**

```
npm install word-cookie
```

**Use**

```
var wrdCookieSolver = require('word-cookie');
wrdCookieSolver.generateValidWords("iagme", function(validWords){
	console.log(validWords);
});
```

## Sample output

```
[ 'age',
  'meg',
  'gem',
  'emg',
  'mag',
  'gam',
  'ige',
  'iga',
  'gia',
  'mei',
  'igm',
  'aim',
  'game',
  'magi',
  'image' ]
```
