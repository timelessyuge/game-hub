import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../entities/Game";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a76385dae6b84e84a55c98198839a79d",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  getGameDetail = (id: string) =>
    axiosInstance.get<Game>(this.endpoint + "/" + id).then((res) => res.data);

  post = (data: T) =>
    axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data);
}

export default APIClient;
