CREATE PROCEDURE [dbo].[GetCustomer]
	@Id int
AS BEGIN
	SELECT c.Id, c.Name, c.Email
	FROM Customers AS c
	WHERE c.Id = @Id

	RETURN @@ROWCOUNT
END