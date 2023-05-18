import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a27cbda49e294309827fe170cbc1e688",
  },
});
