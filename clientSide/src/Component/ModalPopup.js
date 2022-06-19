import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
  
class ModalPopup extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false  ,
            MovieName:null,
            Rating : null,
            Review  : null,
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  
    AddNewMovie=()=>{
        const data= {
            MovieId : this.props.data.id,
            movieName: this.state.MovieName ==null?this.props.data.MovieName:this.state.MovieName,
            rating: this.state.Rating==null?this.props.data.Rating:this.state.Rating,
            review: this.state.Review==null?this.props.data.Review:this.state.Review,
        }
        this.props.EditMovieDetails(data);
        this.props.onPopupClose(false); 
    }
  
    render() { 
        
        return (  
            <Fragment>  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="lg"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header closeButton>  
                        <Modal.Title id="sign-in-title">  
                            Edit Movie Details
                         </Modal.Title>  
                    </Modal.Header>  
                    <Modal.Body>  
                        <hr />  
                        <div style={{marginLeft:'200px'}}>
            <div style={{padding:'10px 0'}} > 
                <span >Movie Name</span>
                <input onChange={e => this.setState({MovieName : e.target.value})} defaultValue={this.props.data.MovieName} style={{marginLeft:'20px'}} type={'text'}/>
                
            </div>
            <div style={{padding:'10px 0'}} ><span>Rating</span>
                <input  onChange={e => this.setState({Rating : e.target.value})} defaultValue={this.props.data.Rating} style={{marginLeft:'60px'}} type={'text'}/>
            </div>
            <div style={{padding:'10px 0'}} ><span>Review</span>
                <input  onChange={e => this.setState({Review : e.target.value})} defaultValue={this.props.data.Review}  style={{marginLeft:'55px'}} type='textbox'/>
            </div>
            <button style={{margin:'10px 0 10px 80px', 
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '8px 22px',
            textAlign: 'center',}}  onClick={this.AddNewMovie} >SUBMIT</button>
            </div>
                        {/* <div className="signUp">  
                            <p>Want to close the pop up?<button type="button" className="link-button" onClick={() => this.isShowModal(true)}> Close</button></p>  
                        </div>   */}
                    </Modal.Body>  
  
                </Modal >  
            </Fragment >  
  
        );  
    }  
}  
  
export default (ModalPopup);