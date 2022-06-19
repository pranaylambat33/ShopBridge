USE [ShopBridge_DB]
GO
/****** Object:  StoredProcedure [dbo].[InsertProductDetails]    Script Date: 19-06-2022 20:10:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[InsertProductDetails] 
(
@ProductName varchar(max),
@ProducPrice varchar(max),
@Description nvarchar(max),
@ProductImg nvarchar(max)
)
AS

Insert Into tbl_productdetails (ProductName,ProductPrice,ProductImgBlob,[Description]) 
values(@ProductName,@ProducPrice,@ProductImg,@Description)
--SELECT * FROM tbl_productdetails

