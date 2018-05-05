const Twitter = require("twitter")
const trendsController = require('./trendsController')
const citiesController = require('./cityController')
const db = require("../models");



var client = new Twitter ({
    consumer_key: 'vO4n28Vrs51vjI8yh0u6YvPad',
    consumer_secret: 'QNOGjzsWF2AVGRusFS04eG8GdIIyZas1YF12dOYUS14FbQ4POv',
    access_token_key: '955363901125705728-KxIZlawF6UMBgj21FdiM1CpZjELgQZO',
    access_token_secret: 'tNJ9vZrW78nxU36ipFamTElaWtbdCXXFNCd8HSoLxH0kO',
  })


 



// client.get('trends/available', function(error, trendsAv, response) {
//     if (!error) {

//         //console.log("availible trends", trendsAv)
//         var usaTrends = trendsAv.filter(trend => trend.countryCode === "US")
//         //console.log('usaTrends ', usaTrends)

//         usaTrends.splice(-1,1)

//         var woeidUSATrends = []

//         usaTrends.forEach((trendCityUSA) => {

//             let trendCity = {
//                 name: trendCityUSA.name,
//                 woeid: trendCityUSA.woeid,
//                 coordinates: {}
//             }

//             woeidUSATrends.push(trendCity)
            
//             citiesController.create(trendCity)
//         })
//         console.log(woeidUSATrends)
//         console.log(woeidUSATrends.length)

//         // let i = 0
//         // var getTrendsEverySecond = setInterval(() => {
//         //     getTrends(woeidUSATrends[i])
//         //     i++
//         //     if (i === woeidUSATrends.length) {
//         //         clearInterval(getTrendsEverySecond);
//         //     }
//         // },1000);
    
//             //getTrends(woeidUSATrends)
      
//     } else {
//         console.log(error)
//     }
// })


function getTrends(cities) {
        var params = {
            id: cities.woeid,
        }
        client.get('trends/place', params, function(error, tweets, response) {
            if (!error) {

               // console.log("tweets[0]", tweets[0])
        
            let topTrends = tweets[0].trends.filter(trend => trend.tweet_volume !== null)
            console.log("topTrends ", topTrends)
            let magnitude = topTrends.length
            db.City.findOneAndUpdate({_id: cities._id}, {magnitude: magnitude}).then((response, response2) => {
                if (response) {
                    //console.log('response ', response)
                } else {
                    //console.log('response2', response2)
                }
            })
            
            
            topTrends.forEach((trend) => {
                let newTrend = {
                    title: trend.name,
                    tweet_volume: trend.tweet_volume,
                    city_id: cities._id
                }

                console.log("newTrend ", newTrend)

                console.log("cities._id ", cities._id)
                db.Trend.findOneAndUpdate({title: newTrend.title, city_id: newTrend.city_id}, {tweet_volume: newTrend.tweet_volume}).then((response) => {
                    if (response ===  null) {
                        db.Trend.create(newTrend)
                    } else {
                        console.log('response ', response)
                    }
                })
                
            });
            //console.log("tweets", tweets[0])
                
            } else {
                console.log(error)
            }
        })
}

function getCitiesCallTrends(){
    db.City.find({}).then((cities) => {
        let i = 0
    var getTrendsEverySecond = setInterval(() => {
        getTrends(cities[i])
        i++
        if (i === cities.length) {
            clearInterval(getTrendsEverySecond);
        }
    },1000);
    
        getTrends(cities)
    })
}

module.exports = getCitiesCallTrends