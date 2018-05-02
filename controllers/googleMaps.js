
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDwAMVJZ7_k6WW_jCgwBDI43nR_VNOJsmg'
  });

googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });
