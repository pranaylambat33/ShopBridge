using ProductReview.CommonLayer.Model;

namespace ProductReview.RepositoryLayer
{
    public interface IProductRF
    {
        public Task<ProductModelResult> AddProduct(ProductModel request);
        public Task<ProductModelResult> EditProduct(ProductEditModel request);
        public Task<ProductModelResult> DeleteProduct(int request); 
        public List<ProductEditModel> GetProductDetails();
    }
}
