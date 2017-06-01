CREATE PROCEDURE [dbo].[QueryCustomerOptions]
AS
	SELECT Id, Name FROM Customers ORDER BY Name
RETURN 0
