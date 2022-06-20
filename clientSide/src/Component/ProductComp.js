import react from "react";
import ProductCard from "./ProductCard";
import AppHeader from "./AppHeader";


const ProductComp = () =>{
    return(
        <div>
            {/* <h1 style={{textAlign:'center',padding:'15px 0',backgroundColor:'lightblue'}}>ShopBridge</h1> */}
             <AppHeader/>
            <ProductCard/>
        </div>
    );
}
export default ProductComp;