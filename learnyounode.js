/*Lesson 1: HELLO WORLD */
//console.log("HELLO WORLD")


/*Lesson 2: BABY STEPS
Write a program that accepts one or more numbers as command-line arguments and p
rints the sum of those numbers to the console (stdout).
 */
// var sum =0;
// for (var i = 0; i < process.argv.length; i++) {
//    if(!isNaN(process.argv[i])){
//    sum += Number(process.argv[i]);
//      //console.log(+process.argv[i]);
//  }
// }
//    console.log(sum);



/*Lesson 3: MY FIRDT I/O
Write a program that uses a single synchronous filesystem operation to read a fi
le and print the number of newlines (\n) it contains to the console (stdout), si
milar to running cat file | wc -l.
To perform a filesystem operation you are going to need the fs module from the N
ode core library.*/
// var rf=require("fs");
// var data=rf.readFileSync(process.argv[2]);
// var lines= data.toString().split('\n').length -1;
// console.log(lines);


/* Lesson 4: MY FIRST AYSNC I/O
The solution to this problem is almost the same as the previous problem except you
e Node.js way: asynchronous.

Instead of fs.readFileSync() you will want to use fs.readFile() and instead of usin
e of this method you need to collect the value from a callback function that you pa
nd argument. To learn more about callbacks, check out: [https://github.com/maxogden
backs](https://github.com/maxogden/art-of-node#callbacks).
*/

// var rf=require("fs");
// rf.readFile(process.argv[2],function(err,data){
//   if (err) throw err;
//   var lines= data.toString().split('\n').length -1;
//   console.log(lines);
// });

/* Lesson 5: FILTERED LS
Create a program that prints a list of files in a given directory, filtered by the extension of the
files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/d
ir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only f
iles that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O
.
*/

// var rf=require("fs");
// var path =require("path");
// rf.readdir(process.argv[2],function(err,list){
//   if (err) throw err;
//   list.forEach(function (filename) {
//     if (path.extname(filename)===("." + process.argv[3])) {
//     console.log(filename);
//     }
//   });
// });



/* Lesson 6 MAKE IT MODULAR */

// var filterFn= require('./lesson6.filter.module.js')
// filterFn(process.argv[2],process.argv[3],function mycallback(err,list) {
//   if(err)
//   console.error('There was an error:', err);
//   list.forEach(function (filename) {
//     console.log(filename);
//   });
// });


/* Lesson 7 HTTP CLIENT
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line
 argument. Write the String contents of each "data" event from the response to a new line on the con
sole (stdout).
file://C:\Users\niliu\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html
*/

// var http = require('http');
// http.get(process.argv[2], function (response) {
// 	response.setEncoding('utf-8');
// 	response.on("data", function (data) {
// 		console.log(data);
// 	});
// 	response.on("end", function () {
// 	});
//   response.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
//   });
// });



/* Lesson 8 HTTP collect

*/
// var http = require('http');
// var str='';
// 	http.get(process.argv[2], function (response) {
// 		response.setEncoding('utf-8');
// 		response.on("data", function (data) {
// 			str = str + data;
// 		});
//       response.on('error', function(e) {
//       console.log('problem with request: ' + e.message);
//     });
// 		response.on("end", function () {
// 			console.log(str.length);
//       console.log(str);
// 			});
// 	});
//

/*alternative solution using bl(buffer list) module */

  // var http = require('http')
  // var bl = require('bl')
  //
  // http.get(process.argv[2], function (response) {
  //   response.pipe(bl(function (err, data) {
  //     if (err)
  //       return console.error(err)
  //     data = data.toString()
  //     console.log(data.length)
  //     console.log(data)
  //   }))
  // })


/* Lesson 9 Juggling asynchronous

*/


// var http = require('http');
// var i = 0;
// var results = ['','',''];
//
// var startGet = function (url, pos) {
// 	http.get(url, function (response) {
// 		var str = '';
// 		response.setEncoding('utf-8');
// 		response.on("data", function (data) {
// 			str = str + data;
// 		});
// 		response.on("end", function () {
// 			i++;
// 			results[pos] = str;
// 			if (i == 3) {
// 				showResult();
// 			}
// 		});
// 	});
// };
//
// var showResult = function () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// };
//
// startGet(process.argv[2], 0);
// startGet(process.argv[3], 1);
// startGet(process.argv[4], 2);


/*Lesson 10 Time Server
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your prog
ram. For each connection you must write the current date & 24 hour time in the format:
*/

// var net = require("net")
// var server = net.createServer(function (socket){
//   socket.end(now() + "\n");
// });
//
// server.listen(process.argv[2]);
//
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
//
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }


/* Lesson 11 HTTP FILE SERVER
Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You
 must use the fs.createReadStream() method to stream the file contents to the response.

-------------------------------------------------------------------------------
*/

// var http = require('http');
// var fs= require('fs');
// var fstream= fs.createReadStream(process.argv[3]);
// var server =http.createServer(function(request,response){
//     response.writeHead(200, { 'content-type': 'text/plain' })
//     fstream.pipe(response);
// });
//
// server.listen(process.argv[2])



/* Lesson 12 HTTP uppercaserer

To install through2-map type:
    $ npm install through2-map
*/

// var map = require('through2-map')
// var http = require('http')
// http.createServer(function(inStream, outStream) {
// 	if(inStream.method == 'POST') {
// 		inStream.pipe(map(function (chunk) {
//   		return chunk.toString().toUpperCase()
// 	})).pipe(outStream)
// 	}
// }).listen(process.argv[2]);



/* Lesson 13 HTTP JSON API SERVER
*/

var http = require('http')
var url = require('url')
http.createServer(function(inStream, outStream) {
var result = '';
var d = '';
var urlObject = url.parse(inStream.url, true);
if(urlObject.pathname === '/api/parsetime') {
	result = urlObject.query.iso;
	d = new Date(result);
	result = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
}
else if (urlObject.pathname === '/api/unixtime') {
	result = urlObject.query.iso;
	d = new Date(result);
	result = {"unixtime": d.getTime()};
}
if (result) {
    outStream.writeHead(200, { 'Content-Type': 'application/json' });
    outStream.end(JSON.stringify(result));
	}
	else {
	outStream.writeHead(404);
	  	outStream.end();
	}
}).listen(process.argv[2]);
