USE [ShopBridge_DB]
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateProductDetails]    Script Date: 19-06-2022 20:10:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[sp_UpdateProductDetails](
@ProductName varchar(max),
@ProductId int,
@ProductPrice varchar(max),
@description nvarchar(max),
@ProductImgBlob nvarchar(max)
)
AS
Begin
update tbl_productDetails set  ProductImgBlob=@ProductImgBlob,ProductName=@ProductName, ProductPrice = @ProductPrice, description =@description where ProductId = @ProductId;
End
