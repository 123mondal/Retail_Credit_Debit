import axios from "axios";

const instance = axios.create({
    baseURL: "https://retail-bill-7c764-default-rtdb.firebaseio.com/",
    
})

export default instance;