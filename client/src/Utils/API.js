import axios from "axios";
const BASEURL = "https://api.meetup.com/find/topics?query= ";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};