import axios from "axios";

export default {
  // Gets all books
  getTrends: function(index) {
    console.log("index", index)
    return axios.get("/api/trends/"+index);
  },

  getCities: function() {
    return axios.get("/api/cities");
  },

  getCity: function(index) {
    return axios.get("/api/cities/"+index);
  },

  getSessionData: () => {
    return axios.get("/api/cities");
  }, 

  getNews: (trend) => {
    if (trend.charAt(0) === "#") {
      trend = trend.slice(1)
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var today = yyyy +'-'+mm+'-'+ dd;
    return axios.get("http://newsapi.org/v2/everything?q="+ trend + "&apiKey=81d539d156bc4c269ae2cc68f5c4df8d")
  }
}