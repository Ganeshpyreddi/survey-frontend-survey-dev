import axios from "axios";

const baseurl = "http://3.17.36.249/api/";
 
export default axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    crossDomain: true
  }
});
