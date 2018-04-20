import axios from "axios";

export default {
  // Gets all books
  getTrends: function() {
    return axios.get("/api/trends");
  }
}