var request = require("request");
var API = "b8daf4bb4b587b8f599d668472103d51";

function SynonymAPI (api) {
    this.api = api;
}


SynonymAPI.prototype = {
    getSynonym: function(word, callBack) {
        var url = "http://words.bighugelabs.com/api/2/" + this.api + "/" + word + "/json";
        request(url, function(err, response, body) {
            if (err) {
                callBack(err);
            }
            else {
                try {
                    var parsed = JSON.parse(body);
                    callBack(null, this.parsed);
                }
                catch (err) {
                    callBack(err);
                }
            }
        });
    }
};

function requestData (err, res) {
    if(err) {
        console.log("There was an error: " + err)
    } else {
        console.log(res);
    }
}

SynonymAPI.getSynonym("cat", requestData);


module.exports = SynonymAPI;

