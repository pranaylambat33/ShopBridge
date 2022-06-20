import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
import AddProduct from "./AddProduct";
class ModalPopup extends Component {  

    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  

    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  

    closePopUp=()=>{
        this.props.onPopupClose(false);
    }

     EditProductDetails=((product)=>{
        this.props.EditProductDetails(product);
    });

    render() { 
        
        return (  
            <Fragment >  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="lg"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>  
                        <Modal.Title id="sign-in-title" >  
                            Edit Product Details
                         </Modal.Title>  
                    </Modal.Header>  
                    <Modal.Body style={{backgroundColor:'lightgray'}}>   
                        <AddProduct
                        isEdit={true}
                        data={this.props.data}
                        closeModal={this.props.onPopupClose}
                        EditProductDetails={this.EditProductDetails}
                        />
                    </Modal.Body>  
  
                </Modal >  
            </Fragment >  
  
        );  
    }  
}  
  
export default (ModalPopup);