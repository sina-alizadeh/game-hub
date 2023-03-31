import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7dbe3ea221b84e3e888f9f562408c36e",
  },
});
