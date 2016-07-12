var request = require("request");
function requestData(err, results) {
    if (err === null && results !== null)
    return results;
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
            catch (e) {
                callBack(err);
            }
        }
    });
}

requestJson("http://www.google.ca", requestData);