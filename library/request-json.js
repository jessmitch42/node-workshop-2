var request = require("request");
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

module.exports = requestJson; 