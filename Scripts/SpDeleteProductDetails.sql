USE [ShopBridge_DB]
GO
/****** Object:  StoredProcedure [dbo].[DeleteProductDetails]    Script Date: 19-06-2022 20:08:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[DeleteProductDetails]
(
@ProductId int
)
AS
BEGIN
delete from tbl_productdetails where ProductId = @ProductId
END
