import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c438126ef7cc9334c84c3eb2e080875931acd9fb31ec180e61cb978f37722f24"
  }
});
