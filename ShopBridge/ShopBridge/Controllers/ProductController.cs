using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductReview.CommonLayer.Model;
using ProductReview.ServiceLayer;

namespace ShopBridge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        public readonly IProductSLcs _ProductSL;
        public ProductModelResult _ProductModelResult;

        public ProductController(IProductSLcs ProductSL,ProductModelResult productModelResult)
        {
            _ProductSL = ProductSL;
            _ProductModelResult = productModelResult;
        }

        [HttpPost]
        [Route("AddProduct")]
        public async Task<IActionResult> AddProduct(ProductModel request)
        {
            try
            {
                var response = await _ProductSL.AddProduct(request);
                return Ok(response);
            }
            catch(Exception ex)
            {
                _ProductModelResult.Success = false;
                _ProductModelResult.Message=ex.Message;
                return BadRequest(_ProductModelResult);
               
            }
          
        }

        [HttpPut]
        [Route("EditProduct")]
        public async Task<IActionResult> EditProduct(ProductEditModel request)
        {
            ProductModelResult response = null;
            try
            {
                response = await _ProductSL.EditProduct(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _ProductModelResult.Success = false;
                _ProductModelResult.Message = ex.Message;
                return BadRequest(_ProductModelResult);
            }
            
        }

        [HttpDelete]
        [Route("DeleteProduct")]
        public async Task<IActionResult> DeleteProduct([FromHeader (Name = "ProductId")] int ProductId)
        {
            ProductModelResult response = null;
            try
            {
                response = await _ProductSL.DeleteProduct(ProductId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _ProductModelResult.Success = false;
                _ProductModelResult.Message = ex.Message;
                return BadRequest(_ProductModelResult);
            }
          
        }

        [HttpGet]
        [Route("GetProductDetails")]
        public async Task<IActionResult> GetProductDetails()
        {
            List<ProductEditModel> response = null;
            try
            {
        
                response =  _ProductSL.GetProductDetails();
                return Ok(response);
            }
            catch (Exception ex)
            {
                _ProductModelResult.Success = false;
                _ProductModelResult.Message = ex.Message;
                return BadRequest(_ProductModelResult);
            }
            
        }

    }
}
