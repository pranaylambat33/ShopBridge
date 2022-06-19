
import Axios from './AxiosService';



const axios = new Axios();

export default class MovieReviewService {
    AddMovie(data){
        
        return axios.post("https://localhost:7269/api/Movie/AddMovie",data,false)
    }
    EditMovie(data){
     
        return axios.put("https://localhost:7269/api/Movie/EditMovie",data,false)
    }
    DeleteMovie(data){
        return axios.delete("https://localhost:7269/api/Movie/DeleteMovie",data,false)
    }
    ReadMovieDetails(){
        return axios.get("https://localhost:7269/api/Movie/GetMoviesDetails",false)
    }
}