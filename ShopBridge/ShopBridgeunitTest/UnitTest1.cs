using Moq;
using ProductReview.CommonLayer.Model;
using ProductReview.ServiceLayer;
using ShopBridge.Controllers;
using Xunit;

namespace ShopBridgeunitTest
{
    public class UnitTest1
    {
        [Fact]
        public void GetProductDetails_ShouldNotReturnNull()
        {
            var productDetails = new Mock<IProductSLcs>();
            productDetails.Setup(_ => _.GetProductDetails()).Returns(ProductMockData.GetProductsDetails());
            var sut = new ProductController(productDetails.Object,null);
            var result = sut.GetProductDetails();
            Assert.NotNull(result);
        }
    }
}