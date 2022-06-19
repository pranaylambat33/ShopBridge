using Dapper;
using ProductReview.CommonLayer.Model;
using System.Data;
using System.Data.SqlClient;

namespace ProductReview.RepositoryLayer
{
    public class ProductRF : IProductRF
    {
        public readonly IConfiguration _config;
        public readonly string _sqlConnection;
        public ProductModelResult _productModelResult;
        public object Response { get; private set; }

        public ProductRF(IConfiguration config, ProductModelResult productModelResult)
        {
            _config = config;
            _sqlConnection = _config["ConnectionStrings:DBSettingConnection"];
            _productModelResult = productModelResult;
        }
        public async Task<ProductModelResult> AddProduct(ProductModel request)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add("ProductName", request.productName);
                parameters.Add("ProducPrice", request.productPrice);
                parameters.Add("Description", request.description);
                parameters.Add("ProductImg", request.productImg);
                using (IDbConnection db = new SqlConnection(_sqlConnection))
                {
                    var queryLists = db.QueryMultipleAsync(@"InsertProductDetails", parameters, commandType: CommandType.StoredProcedure).Result;
                }
                _productModelResult.Success = true;
                _productModelResult.Message = "Success";
            }
            catch(Exception ex)
            {
                _productModelResult.Success = false;
                _productModelResult.Message = ex.Message;
            }
            return _productModelResult;


        }
        public async Task<ProductModelResult> EditProduct(ProductEditModel request)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add("ProductName", request.productName);
                parameters.Add("ProductId", request.productId);
                parameters.Add("ProductPrice", request.productPrice);
                parameters.Add("ProductImgBlob", request.productImgBlob);
                parameters.Add("description", request.description);
                using (IDbConnection db = new SqlConnection(_sqlConnection))
                {
                    var queryLists = db.QueryMultipleAsync(@"sp_UpdateProductDetails", parameters, commandType: CommandType.StoredProcedure).Result;
                    //List<MovieModel> res = queryLists.Read<MovieModel>().ToList();
                }
                _productModelResult.Success = true;
                _productModelResult.Message = "Success";
            }
            catch(Exception ex)
            {
                _productModelResult.Success = false;
                _productModelResult.Message = ex.Message;
            }
            return _productModelResult;


        }
        public async Task<ProductModelResult> DeleteProduct(int id)
        {

            try
            {
                var parameters = new DynamicParameters();
                
                parameters.Add("ProductId", id);
              
                using (IDbConnection db = new SqlConnection(_sqlConnection))
                {
                    var queryLists = db.QueryMultipleAsync(@"DeleteProductDetails", parameters, commandType: CommandType.StoredProcedure).Result;
                }
                _productModelResult.Success = true;
                _productModelResult.Message = "Success";
            }
            catch (Exception ex)
            {
                _productModelResult.Success = false;
                _productModelResult.Message = ex.Message;
            }
            return _productModelResult;


        }
         public  List<ProductEditModel> GetProductDetails()
        {
            List<ProductEditModel> response = null;
            try
            {
                var parameters = new DynamicParameters();
                using (IDbConnection db = new SqlConnection(_sqlConnection))
                {
                    var queryLists = db.QueryMultipleAsync(@"GetProductDetailsDetails", parameters, commandType: CommandType.StoredProcedure).Result;
                    response = queryLists.Read<ProductEditModel>().ToList();
                }
            }
            catch (Exception ex)
            {
            //found Exception 
            }
            return response;


        }

    }
}
