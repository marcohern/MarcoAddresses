CREATE PROCEDURE [dbo].[DeleteCustomer]
	@Id int
AS BEGIN
	SELECT Id, Name, Email
	FROM Customers WHERE Id = @Id

	DELETE FROM Customers WHERE Id = @Id

	RETURN @@ROWCOUNT
END
