USE [ShopBridge_DB]
GO
/****** Object:  StoredProcedure [dbo].[GetProductDetailsDetails]    Script Date: 19-06-2022 20:09:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[GetProductDetailsDetails]
AS
BEGIN
SELECT * FROM tbl_productdetails order by productid desc
END

