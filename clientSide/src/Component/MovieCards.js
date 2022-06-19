import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieReviewService from '../Services/MovieReviewService';
import ModalPopup from './ModalPopup'
import React, { useState,useEffect } from 'react';
import { OverlayTrigger } from 'react-bootstrap';

let MovieData1 =[];
const service = new MovieReviewService();
const MovieCards = () =>{
    const [MovieName, setMovieName] = useState('');
    const [Rating, setRating] = useState('');
    const [Review, setReview] = useState('');
    const [isModalClose, setIsModalClose] = useState('');
    const [User, setUser] = React.useState({
        id: 0,
        MovieName: "",
        Rating : 0,
        Review: ""
      }); 
      const [MovieData, setMovieData] = React.useState(
       []
      ); 

    const isShowPopup = (status) => {  
        setIsModalClose(status);  
      }; 

    const EditMovieDetails = (status, Movie) =>{
        setIsModalClose(status)
        setUser(prev => ({...prev, MovieName: Movie.movieName,id:Movie.movieId,Rating:Movie.rating,Review:Movie.review}))
    }

    const DeleteMovieDetails = (Movie)=>{
        const data ={
            MovieId : Movie.movieId
        }
        service.DeleteMovie(data).then((data)=>{
            console.log(data)
            service.ReadMovieDetails().then((data)=>{
                console.log(data)
                MovieData1 = data.data;
                setMovieData(data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        });
    }

    const editMovies = (m) =>{
        const data = {
           movieId : m.MovieId,
            movieName: m.movieName,
            rating: m.rating,
            review: m.review,
        }
        service.EditMovie(data).then(()=>{
            service.ReadMovieDetails().then((data)=>{
                console.log(data)
                MovieData1 = data.data;
                setMovieData(data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        })
       
    }

    const AddNewMovie =()=>{
        const data = {
            movieName: MovieName,
            rating: Rating,
            review: Review,
        }
        service.AddMovie(data).then(()=>{
            service.ReadMovieDetails().then((data)=>{
                console.log(data)
                MovieData1 = data.data;
                setMovieData(data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        service.ReadMovieDetails().then((data)=>{
        console.log(data)
        MovieData1 = data.data;
        setMovieData(data.data)
    }).catch((error)=>{
        console.log(error)
    })
      },[]);

    return(
        <div className='col-lg-10'  style={{justifyContent:'center',margin:'auto',backgroundColor:'whitesmoke'}}>
            <div style={{margin:'auto',borderStyle:'outset'}}>
                <div style={{margin:'0 35%',padding:'10px 0'}}>
                    <div style={{padding:'10px 0'}} > 
                        <b >Movie Name :</b>
                        <input  onChange={e => setMovieName(e.target.value)} style={{marginLeft:'20px'}} type={'text'}/>
                    </div>
                    <div style={{padding:'10px 0',marginRight:'60px'}} ><b>Rating :</b>
                        <input onChange={e => setRating(e.target.value)}  style={{marginLeft:'60px'}} type={'text'}/>
                    </div>
                    <div style={{padding:'10px 0'}} ><b>Review :</b>
                        <input  onChange={e => setReview(e.target.value)}  style={{marginLeft:'55px'}} type='textbox'/>
                    </div>
                    <button 
                    style={{margin:'10px 0 10px 80px', 
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '8px 22px',
                    textAlign: 'center',
                    }} 
                    onClick={()=>AddNewMovie()}>Add Movie</button>
                </div>
            </div>
            <ModalPopup  
            showModalPopup={isModalClose}  
            onPopupClose={isShowPopup}  
            data = {User}
            EditMovieDetails = {editMovies}
            ></ModalPopup> 
           
        {MovieData1 &&  MovieData1.map((Movie, i)=>{
            return(
                <div  style={{position:'relative',display:'inline-block',margin:' 20px 0 45px 65px'}}>
                    <span>
                        <img style= {{width: '200px', height :'150px',}} src="https://th.bing.com/th/id/OIP._UHVO8UCPqjiCU2Mfgyv4wHaED?pid=ImgDet&w=629&h=345&rs=1"></img>
                        <div style={{maxWidth:'220px'}}>
                            <div><b>Movie Name :</b> {Movie.movieName}</div>
                            <div><b >Rating :</b> {Movie.rating}</div>
                            <div><b >Review :</b> {Movie.review}</div>
                            <button style= {{backgroundColor:'green', marginRight:'20px', border: 'none',
                                color: 'white',
                                padding: '4px 12px',
                                textAlign: 'center',}}  
                                onClick={()=>EditMovieDetails(true,Movie)}
                                >
                                <span style= {{fontSize:'small',float:'right', }}>Edit</span>
                            </button>
                            <button style= {{backgroundColor:'red',border: 'none',
                                        color: 'white',
                                        padding: '4px 12px',
                                        textAlign: 'center',}}
                                 onClick={()=>DeleteMovieDetails(Movie)}
                                >
                                <span style= {{fontSize:'small',float:'right'}}>Delete</span>
                            </button>
                            </div>
                        </span>
                        </div>
                    );                
                })
            
        } 
   </div>
      
    );
}
export default MovieCards;