// var x = require("./library/request-json.js");

// x('http://www.google.com', function(e, r) {
//     e ? console.log(e) : console.log(r);
// })


//             request(urlLatLong, function(err, response, body) {
//                 if (err) {
//                     console.log("Oops! Error!");
//                 }
//                 else {
//                     var userLat = JSON.parse(body).results[0].geometry.location.lat;
//                     var userLong = JSON.parse(body).results[0].geometry.location.lng;
//                     var urlCityWeather = "https://api.forecast.io/forecast/c17c7ae26ebe857f260fa781bd7d2b0a/" + userLat + "," + userLong;
                    
//                     request(urlCityWeather, function(err, response, body) {
//                         if (err) {
//                             console.log("Oops! Error!");
//                         }
//                         else {
                            
//                             var day1 = JSON.parse(body).daily.data[0].summary;
//                             var day2 = JSON.parse(body).daily.data[1].summary;
//                             var day3 = JSON.parse(body).daily.data[2].summary;
//                             var day4 = JSON.parse(body).daily.data[3].summary;
//                             var day5 = JSON.parse(body).daily.data[4].summary;
//                         }
//                         console.log (currentWeather, day1, day2, day3, day4, day5);
//                     });
//                 }
//             });
