import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://super-box-server-bmdh0djxl-super-boxs-projects.vercel.app"
    });


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;