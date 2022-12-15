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
    http.get(url[i], function(response){
        var content = "";
        //if(completed_req== url.length){
                response.setEncoding("utf-8");
                response.on("data", function(data){
                    content += data;
                })
                response.on("error", console.error);
                response.on("end", function(end){
                    console.log(content);
                });

    })
};