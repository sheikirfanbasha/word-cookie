
var express = require('express');
var passport = require('passport');
var app = express();
var port = 9000;
var reqLib = require('request');
var querystring = require('querystring');
var x = querystring.escape
("http://localhost:9000");
console.log("result: " + x);

var cookieParser = require('cookie-parser');
var url = require('url');
app.use(cookieParser());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

app.use(logger);


app.get('/oauth', function(req, res){
	var o = url.parse(req.url,true);
	console.log("Recieved is : " + o.query.code);
	var myJSONObject = {
		"client_id" : "qtz-login",
		"grant_type" : "authorization_code",
		"code" : o.query.code,
		"redirect_uri" : "http://localhost:9000/oauth"
	}
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	reqLib({
	    url: "https://login.showcase.quantiply.net/oauth/token",
	    method: "POST",
	    json: true,   // <--Very important!!!
	    body: myJSONObject
		}, function (error, response, body){
			console.log("error: " + error);
		    console.log(response);
		    console.log(body);
		    res.send(response);
	});
	// res.redirect('https://login.showcase.quantiply.net/login?then=%2Foauth%2Ftoken%3Fclient_id%3Dqtz-login%26response_type%3Dtoken%26state%3D%252F%26redirect_uri%3Dhttp%253A%252F%252Flogin.qtz.io%253A80%252Foauth')
	// res.send("received ");
});



app.get('/login', passport.authenticate('github'), function (req, res) {
  //res.send('Hello World login!');
	var o = url.parse(req.url,true);
  if(!req.cookies['mytoken']){
  	res.redirect('https://login.showcase.quantiply.net/login?then=%2Foauth%2Fauthorize%3Fclient_id%3Dqtz-login%26response_type%3Dcode%26state%3D%252F%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A'+port+'%252Foauth')
  }else{
  	res.cookie('cookie_name' , 'cookie_value',{domain : 'qtz.io'});
  var cookies = parseCookies(req);
  res.end('Hello World login\n');
  }
 
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
});

function setCookie(cname, cvalue, exdays,domain) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; domain="+domain;
}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        console.log(parts);
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}