using ProductReview.CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopBridgeunitTest
{
    internal class ProductMockData
    {
        public static List<ProductEditModel> GetProductsDetails()
        {
            return new List<ProductEditModel>
           {
               new ProductEditModel
               {
                   productName ="Test",
                   description ="Test Desc",
                   productPrice=3233,
                   productImgBlob="someBlob",
                   productId=5
                },
                new ProductEditModel
               {
                   productName ="Test 22",
                   description ="Test Desc 22",
                   productPrice=534,
                   productImgBlob="someBlob 22",
                   productId=34
                },
           };
        }
    }
}
