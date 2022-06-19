namespace ProductReview.CommonLayer.Model
{
    public class ProductModel
    {
        public string productName { get; set; }
        public string description { get; set; }
        public double productPrice { get; set; }
        public string productImg { get; set; }
    }
    public class ProductEditModel
    {
        public string productName { get; set; }
        public string description { get; set; }
        public double productPrice { get; set; }
        public string productImgBlob { get; set; }
        public int productId { get; set; }
    }
    public class ProductModelResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
    }

    
}
