CREATE PROCEDURE [dbo].[UpdateCustomer]
	@Id INT,
	@Name VARCHAR(128),
	@Email VARCHAR(128)
AS BEGIN
	UPDATE Customers
	SET Name = @Name,
		Email = @Email
	WHERE Id = @Id

	SELECT Id, Name, Email FROM Customers
	WHERE Id = @Id

	RETURN @@ROWCOUNT
END
