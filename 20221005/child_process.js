const spawn = require('child_process').spawn;
var varPath = ['class_gai\\child_process.py']

var process = spawn('python', ['class_gai\\child_process.py']);

process.stdout.on('data', function(data) {console.log(data.toString());})


process.stderr.on('data', function(data) {console.log(data.toString());})