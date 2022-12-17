// const http = require('http');
// const bl = require('bl');

// const urls = process.argv.slice(2);

// http.get(urls[0], response => {
//     response.pipe(bl((err, data) => {
//         if (err) return console.error(err);
//         data = data.toString();
//         console.log(data);
//     }));
// });

// http.get(urls[1], response => {
//     response.pipe(bl((err, data) => {
//         if (err) return console.error(err);
//         data = data.toString();
//         console.log(data);
//     }));
// });

// http.get(urls[2], response => {
//     response.pipe(bl((err, data) => {
//         if (err) return console.error(err);
//         data = data.toString();
//         console.log(data);
//     }));
// });


/////////////////////////////////////////////////////////////////////////////

// Solution without 'bl'

const http = require("http");
const url = [process.argv[2], process.argv[3], process.argv[4]];
const responses = [];
const completed_req = 0;

for(var i in url){
    http.get(url[i], function(response){    //Conactinate result with data.
        let result = "";
        //if(completed_req== url.length){
                response.setEncoding("utf-8");  //Data from response needs to be encoded with 'utf8' since it is buffer object.
                response.on("data", function(data){
                    result += data; //Conactinate result with data.
                })
                response.on("error", console.error);    //Returns error in console if an error is encountered.
                response.on("end", function(end){
                    console.log(result);    //logs results itself.
                });

    })
};