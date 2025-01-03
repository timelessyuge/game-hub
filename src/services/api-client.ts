import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a76385dae6b84e84a55c98198839a79d",
  },
});
