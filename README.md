# About

This software generates all valid words of different lengths for given set of letters. Developed in the interest of generating solutions for the famous word-cookie game.

![screenshot_2017-07-23-10-01-22-003_com bitmango go wordcookies](https://user-images.githubusercontent.com/8801972/28496651-6e147eea-6f8e-11e7-888c-798ff757bb76.png)


## Getting Started

**Install**

```
npm install word-cookie
```

**Use**

```
var wrdCookieSolver = require('word-cookie');
wrdCookieSolver.generateValidWords("tpnri", function(validWords){
	console.log(validWords);
});
```

## Sample output

```
[ 'inr',
  'rip',
  'pin',
  'nip',
  'prn',
  'tin',
  'nit',
  'tip',
  'pit',
  'tpn',
  'nipr',
  'nrti',
  'trip',
  'pint',
  'print' ]
```
