CREATE PROCEDURE [dbo].[CreateAddress]
	@Type CHAR(1),
	@Address1 VARCHAR(128),
	@Address2 VARCHAR(128),
	@CityId INT,
	@Zip INT,
	@CustomerId INT
AS BEGIN
	DECLARE @Id INT
	DECLARE @cnt INT

	INSERT INTO Addresses([Type], Address1, Address2, CityId, Zip, CustomerId) VALUES
	(@Type, @Address1, @Address2, @CityId, @Zip, @CustomerId)

	SET @id = SCOPE_IDENTITY()
	SET @cnt = @@ROWCOUNT

	SELECT Id, [Type], Address1, Address2, CityId, Zip, CustomerId
	FROM Addresses WHERE Id = @id

	RETURN @cnt
END