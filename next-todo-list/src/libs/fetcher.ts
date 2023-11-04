import axios from "axios";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getFetcher = (url: any, params?: object) =>
    axios.get(url, { params: params }).then((res) => res.data);
