import axios from "axios";


const instance1 = axios.create({
baseURL: "https://api.themoviedb.org/3"

})
export default instance1;