CREATE PROCEDURE [dbo].[DeleteCustomer]
	@Id int
AS BEGIN
	DECLARE @cnt INT

	DELETE FROM Addresses WHERE CustomerId = @Id

	SET @cnt = @@ROWCOUNT

	SELECT Id, Name, Email
	FROM Customers WHERE Id = @Id

	DELETE FROM Customers WHERE Id = @Id

	RETURN @cnt + @@ROWCOUNT
END
