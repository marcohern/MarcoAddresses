CREATE PROCEDURE [dbo].[QueryCustomers]
AS BEGIN
	SELECT c.Id, c.Name, c.Email
	FROM Customers AS c

	RETURN @@ROWCOUNT
END
