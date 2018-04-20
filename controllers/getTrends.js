const Twitter = require("twitter")
const trendsController = require('./trendsController')


var client = new Twitter ({
    consumer_key: 'vO4n28Vrs51vjI8yh0u6YvPad',
    consumer_secret: 'QNOGjzsWF2AVGRusFS04eG8GdIIyZas1YF12dOYUS14FbQ4POv',
    access_token_key: '955363901125705728-KxIZlawF6UMBgj21FdiM1CpZjELgQZO',
    access_token_secret: 'tNJ9vZrW78nxU36ipFamTElaWtbdCXXFNCd8HSoLxH0kO',
  })

var params = {
    id: "23424977",
}

client.get('trends/place', params, function(error, tweets, response) {
    if (!error) {

     let topTen = tweets[0].trends.slice(0, 10)
     
    
     topTen.forEach((tweet) => {
        let newTrend = {
            title: tweet.name,
            tweet_volume: tweet.tweet_volume,
            country_id: params.id
        }
        
        trendsController.create(newTrend)
        
     });
     console.log("get trends runs")
        
    }
})



// var paramsClosest = {
//     lat: '37.7915939',
//     long: '-122.3943378'
// }

// client.get('trends/closest', paramsClosest, function(error, tweets, response) {
//     if (!error) {
//         console.log("closest trends by location >>>>>>>>>>>>>>>>>>>>>.")
//      tweets.forEach(tweet => console.log(tweet));
//       //console.log(response)
//     }
// });


