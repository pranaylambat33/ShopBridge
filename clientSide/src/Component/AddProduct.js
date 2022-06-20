import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from '../Services/ProductService';
import ModalPopup from './ModalPopup'
import React, { useState,useEffect } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import '../index.css'

const service = new ProductService();
const AddProduct = (props) =>{
    const [productName, setProdcutName] = useState(null);
    const [description, setDescription] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productImg, setProdcutImg]  = useState(null);

    const AddProductDetails=()=>{
        if(!(productName && description && productPrice && productImg)){
            return alert('All fields are Mandatory');
        }
        const data= {
            productName : productName,
            description: description,
            productPrice: productPrice,
            productImg:productImg,
        }
        props.closeModal(false);
        props.newProductDetails(data);
    }

    const onSelectImage=(event)=>{
        const productImg = event.target.files;
        setProdcutImg(URL.createObjectURL(productImg[0]));
    }
    
    const editProductDetails = () =>{
        const data= {
            productName : productName!=null?productName: props.data.productName,
            description: description!=null?description:props.data.description,
            productPrice:productPrice!=null?productPrice: props.data.productPrice,
            productImgBlob:productImg!=null?productImg:props.data.productImg,
            productId:props.data.productId
        }
        if(!(data.productName && data.description && data.productPrice && data.productImgBlob)){
            return alert('All fields are Mandatory');
        }
       props.EditProductDetails(data)
       props.closeModal(false);
    }
    return(
      <>
        <div style={{padding:'20px',backgroundColor:'lightgray',  marginLeft :'65px', maxWidth:'60%',marginRight:'65px',}}>
        <table >
            <tr>
                <td>Name Of Prodcut</td> 
                <td>  
                    <input defaultValue={props.isEdit ?props.data.productName:productName} type="text"  onChange={e => setProdcutName(e.target.value)}  />
                </td>
            </tr>
            <tr> 
                <td>Description</td> 
                <td>
                    <textarea defaultValue={props.isEdit ?props.data.description:description} onChange={e => setDescription(e.target.value)} />
                </td>
            </tr>
            <tr> 
                <td>Add Product photo  </td> 
                <td><input  type="file" onChange={onSelectImage}/></td>
            </tr>
            <tr> 
                <td>Price of Prodcut</td> 
                <td><input  
                defaultValue={props.isEdit ?props.data.productPrice:productPrice} type="text" onChange={e => setProductPrice(e.target.value)} /></td>
            </tr>
            <tr>
                <td>
                    <button class="add-Product-btn"
                        style={{
                        backgroundColor: '#4CAF50',
                        border: 'none',
                        color: 'white',
                        padding: '8px 22px',
                        textAlign: 'center',
                        }} 
                        onClick={props.isEdit?()=>editProductDetails():()=>AddProductDetails()}
                        >Submit</button>
                </td>
                <td>
                    <button class="add-Product-btn"
                        style={{
                        backgroundColor: '#8B0000',
                        border: 'none',
                        color: 'white',
                        padding: '8px 22px',
                        textAlign: 'center',
                        }} 
                        onClick={()=>props.closeModal(false)}
                        >Hide</button>
                </td>
            </tr>
        </table>
        </div>
      </>
    );
}
export default AddProduct;