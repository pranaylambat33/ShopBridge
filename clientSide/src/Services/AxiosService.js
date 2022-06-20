const Axios = require('axios').default


export default class AxiosService{
    post(url,data,Header){
        return Axios.post(url,data,Header);
    }
    put(url,data,Header){
        return Axios.put(url,data,Header);
    }
    get(url,IsRequired=false,Header){
        return Axios.get(url,IsRequired&&Header);
    }
    delete(url,data,IsRequired=false,Header){
        return Axios.delete(url,{headers:{
            "ProductId" : data.ProductId
        }},IsRequired&&Header);
    }
}