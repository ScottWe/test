var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('Hello World 2');
})

app.listen(3000)
