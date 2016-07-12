var request = require("request");
var prompt = require("prompt");
var clc = require('cli-color');
var Table = require('cli-table');
var emoji = require('node-emoji');

var getParsedData = require("./library/request-json.js");

function weatherForecast() {
    prompt.get("location", function(err, result) {
        if (err) {
            console.log("Oops! There was an error!");
        }
        else {
            var urlLatLong = ("https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location);

            getParsedData(urlLatLong, function(err, res) {
                if (err) {
                    throw err;
                }
                var userLat = res.results[0].geometry.location.lat;
                var userLong = res.results[0].geometry.location.lng;
                var urlCityWeather = "https://api.forecast.io/forecast/c17c7ae26ebe857f260fa781bd7d2b0a/" + userLat + "," + userLong;
                getParsedData(urlCityWeather, function(err, res2) {
                    if (err) {
                        throw err;
                    }
                    var currentWeather = res2.currently.summary;
                    console.log("Today's weather is: " + clc.blue(currentWeather));
                    console.log("The rest of the week looks like: ");
                    for (var i = 0; i < 5; i++) {
                        console.log(clc.green(res2.daily.data[i].summary));
                    }
                })
            })
        }
    })

}

weatherForecast();

console.log(emoji.get('smile'))

// res.daily.data.forEach(function(dailyData) {
//     console.log(dailyData.summary);
