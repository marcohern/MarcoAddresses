CREATE PROCEDURE [dbo].[CreateCustomer]
	@Name VARCHAR(128),
	@Email VARCHAR(128)
AS BEGIN
	DECLARE @Id INT
	DECLARE @cnt INT
	INSERT INTO Customers(Name, Email) VALUES (@Name, @Email)

	SET @id = SCOPE_IDENTITY()
	SET @cnt = @@ROWCOUNT

	SELECT Id, Name, Email FROM Customers WHERE Id = @Id

	RETURN @cnt
END
