using ProductReview.CommonLayer.Model;

namespace ProductReview.ServiceLayer
{
    public interface IProductSLcs
    {
        Task<ProductModelResult> AddProduct(ProductModel request);
        Task<ProductModelResult> EditProduct(ProductEditModel request);
        Task<ProductModelResult> DeleteProduct(int id);
        List<ProductEditModel> GetProductDetails();
        
    }
}
