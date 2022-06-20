
import Axios from './AxiosService';



const axios = new Axios();

export default class ProductService {
    AddProduct(data){
        
        return axios.post("https://localhost:7269/api/Product/AddProduct",data,false)
    }
    EditProduct(data){
     
        return axios.put("https://localhost:7269/api/Product/EditProduct",data,false)
    }
    DeleteProduct(data){
        return axios.delete("https://localhost:7269/api/Product/DeleteProduct",data,false)
    }
    ReadProductDetails(){
        return axios.get("https://localhost:7269/api/Product/GetProductDetails",false)
    }
}