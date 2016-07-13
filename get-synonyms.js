var request = require("request");
var prompt = require("prompt");

var apiKey = "b8daf4bb4b587b8f599d668472103d51"; 

var data = require("./library/synonyms.js");


function synonyms () {
    prompt.get("word", function (err, results) {
        if (err) {
            throw err;
        }
        else {
            var x = new data(apiKey);
            x.getSynonym(results.word, function(err, res) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(res);
                }
                
            })
        }
    })
}

synonyms();