
var request = require("request")

function requestData (err, res) {
    if(err) {
        console.log("There was an error: " + err)
    } else {
        console.log(res);
    }
}

function requestJson (url, callBack) {
    request(url, function(err, response, body) {
        if (err) {
            callBack(err);
        }
        else {
            try {
                var parsed = JSON.parse(body);
                callBack(null, parsed);
            }
            catch (err) {
                callBack(err);
            }
        }
    });
}

requestJson("http://api.open-notify.org/iss-now.json", requestData);