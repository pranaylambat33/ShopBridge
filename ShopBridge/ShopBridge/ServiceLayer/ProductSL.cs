using ProductReview.CommonLayer.Model;
using ProductReview.RepositoryLayer;
using ProductReview.ServiceLayer;

namespace ProductReview.ServiceLayer
{
    public class ProductSL : IProductSLcs
    {
        public readonly IProductRF _ProductRF;

        public ProductSL(IProductRF productRF)
        {
            _ProductRF = productRF;
        }

        public async Task<ProductModelResult> AddProduct(ProductModel request)
        {
            return await _ProductRF.AddProduct(request);
        }
        public async Task<ProductModelResult> EditProduct(ProductEditModel request)
        {
            return await _ProductRF.EditProduct(request);
        }
        public async Task<ProductModelResult> DeleteProduct(int id)
        {
            return await _ProductRF.DeleteProduct(id);
        }
        public  List<ProductEditModel> GetProductDetails()
        {
            return  _ProductRF.GetProductDetails();
        }
    }
}
