import axios from "axios";

const instance = axios.create({
  baseURL:
    " https://career-magnet-server-c39eufv93-islam-rafikuls-projects.vercel.app/",
  withCredentials: true,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
