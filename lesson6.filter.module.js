/* Method 1:
Use forEach and path.extname to match
 */
// module.exports = function(dir,filter, callback){
//   var rf=require("fs");
//   var path =require("path");
//   rf.readdir(dir,function(err,list){
//     if (err)
//     return callback(err)
//     var a = [];
//     list.forEach(function (filename) {
//       //console.log(filter);
//       if (path.extname(filename)===("." + filter)) {
//       //console.log(filename);
//       a.push(filename);
//       }
//     });
//
//     return callback(null, a);
//
//   });
// }

/* Method 2:
Use list.filter and regex to match
*/
// var fs = require('fs')
//
// module.exports = function (dir, filterStr, callback) {
// var regex = new RegExp('\\.' + filterStr + '$')
//
// fs.readdir(dir, function (err, list) {
//
// // callback err if the readdir method fails
//
//   if (err)
//     return callback(err)
//
//   list = list.filter(function (file) {
//     return regex.test(file)
//   })
//
//  // IS THIS CALLBACK SO IT LOOP AND IS ABLE TO EXECUTE ADDED CODE in the solution.js filterFn()
//
//   callback(null, list)
//   })
//  }


/* Method 3:
Use list.filter and path.extname to match
*/

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
