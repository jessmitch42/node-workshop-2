var request = require("request");
var prompt = require("prompt");

SynonymAPI (API);
var API = "b8daf4bb4b587b8f599d668472103d51"; 
// function requestData (err, res) {
//     if(err) {
//         console.log("There was an error: " + err)
//     } else {
//         console.log(res);
//     }
// }

var getParsedData = require("./library/synonyms.js");

function synonyms () {
    prompt.get("word", function (err, results) {
        if (err) {
            throw err;
        }
        else {
            var userURL = 
            getParsedData(url, function(err, response, body) {
                
            })
        }
    })
}