import axios from "axios";

export default axios.create({
  params: {
    baseURL: "https://api.rawg.io/api",
    key: "a27cbda49e294309827fe170cbc1e688",
  },
});
