import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://super-box-server-7k6wq4vgv-super-boxs-projects.vercel.app"
});


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;