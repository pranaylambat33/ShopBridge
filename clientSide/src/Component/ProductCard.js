import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from '../Services/ProductService';
import ModalPopup from './ModalPopup'
import React, { useState,useEffect } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import AddProduct from "./AddProduct";
let ProductDetails =[];
const service = new ProductService();
const ProductCard = () =>{
    let [search, setSearch] = useState('');
    const [isEditButtonCliked, setIsEditButtonCliked] = useState(false);
    const [isModalClose, setIsModalClose] = useState('');
    const [User, setUser] = React.useState({
        productId: 0,
        productName: "",
        description : 0,
        productImg: "",
        productPrice:""
      }); 
       const [ProductDetailsState, setProductDetailsState] = React.useState(
       []
      ); 

    const isShowPopup = (status) => {  
        setIsModalClose(status);  
      }; 
      const closeProductForm =(flag)=>{
        setIsEditButtonCliked(false)
      }

    const EditProductDetails = (status, product) =>{
        setIsModalClose(status)
        setUser(prev => ({...prev, productName: product.productName,productId:product.productId,description:product.description,productImg:product.productImgBlob,productPrice:product.productPrice}))
    }

    const DeleteProduct = (Product)=>{
        const data ={
            ProductId : Product.productId
        }
        service.DeleteProduct(data).then((data)=>{
            console.log(data)
            service.ReadProductDetails().then((data)=>{
                console.log(data)
                ProductDetails = data.data;
                setProductDetailsState(data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        });
    }
const addNewProductDetails=(product)=>{
    console.log(product);
    service.AddProduct(product).then(()=>{
        service.ReadProductDetails().then((data)=>{
            console.log(data)
            ProductDetails = data.data;
            setProductDetailsState(data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }).catch((error)=>{
        console.log(error)
    })
}
    const editProducts = (product) =>{
        
        service.EditProduct(product).then(()=>{
            service.ReadProductDetails().then((data)=>{
                console.log(data)
                ProductDetails = data.data;
                setProductDetailsState(data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        })
       
    }

   

    useEffect(() => {
        service.ReadProductDetails().then((data)=>{
        console.log(data)
        ProductDetails = data.data;
        setProductDetailsState(data.data)
    }).catch((error)=>{
        console.log(error)
    })
      },[]);

    return(
        <div className='col-lg-10'  style={{justifyContent:'center',margin:'auto',backgroundColor:'whitesmoke',}}>
            <hr/>
            <div>
               
            <button style={{
                backgroundColor :'#555555', 
                border: 'none',
                color:'white',
                padding: '6px 15px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '10px 0 0 65px',
                cursor: 'pointer',
                
            }}
          onClick ={() => setIsEditButtonCliked(true)}
           >Add New Product</button>
        
        <span>
           <input type="text" placeholder="Search.." 
           onChange={e => setSearch(e.target.value)}
           style={{
            float:'right',
             padding: '6px 40px',
             margin: '8px 0 0 470px',
             
             background: '#ddd',
             backgroundColor:'white',
             fontSize: '17px',
            borderRadius:'15px'
             
           }}/>
           </span>
            </div>
            {isEditButtonCliked?
            <AddProduct
            newProductDetails = {addNewProductDetails}
            closeModal={closeProductForm} 
            />:''
            }
            <hr/>
             <div>
            
            </div>
            <ModalPopup  
            showModalPopup={isModalClose}  
            onPopupClose={isShowPopup}  
            data = {User}
            EditProductDetails = {editProducts}
            ></ModalPopup> 
        {ProductDetailsState &&  ProductDetailsState.filter(product=>((product.productName).toLowerCase()).includes(search.toLowerCase())).map((Product, i)=>{
            return(
                
                <div  style={{position:'relative',display:'inline-block',padding:'10px',margin:' 20px 0 45px 45px', borderStyle:'ridge'}}>
                    <span>
                        <img style= {{width: '230px', height :'150px',}} src={Product.productImgBlob}></img>
                        <div style={{maxWidth:'230px'}}>
                            <div><b>Product Name :</b> {Product.productName}</div>
                            <div><b >Description :</b> {Product.description}</div>
                            <div><b >Price in Rs :</b><span style={{color:'orange',fontWeight:'bold'}}>{Product.productPrice}</span></div>
                            <button style= {{backgroundColor:'green', marginRight:'20px', border: 'none',
                                color: 'white',
                                padding: '4px 12px',
                                textAlign: 'center',}}  
                                onClick={()=>EditProductDetails(true,Product)}
                                >
                                <span style= {{fontSize:'small',float:'right', }}>Edit</span>
                            </button>
                            <button style= {{backgroundColor:'red',border: 'none',
                                        color: 'white',
                                        padding: '4px 12px',
                                        textAlign: 'center',}}
                                 onClick={()=>DeleteProduct(Product)}
                                >
                                <span style= {{fontSize:'small',float:'right'}}>Delete</span>
                            </button>
                            </div>
                        </span>
                        </div>
                    );                
                })
            
        } 
         {ProductDetails.length==0?
        <div style={{margin: '80px 0 0 500px',paddingBottom:'20%'}}>
           Products are not available...
        </div>
        :''}
   </div>
      
    );
}
export default ProductCard;