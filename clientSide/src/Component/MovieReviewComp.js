import react from "react";
import MovieCards from "./MovieCards";
const MovieReviewComp = () =>{
    return(
        <div>
            <h1 style={{textAlign:'center',padding:'15px 0',backgroundColor:'lightblue'}}>Movie Review Application</h1>
            <MovieCards/>
        </div>
    );
}
export default MovieReviewComp;