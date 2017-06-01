CREATE PROCEDURE [dbo].[UpdateAddress]
	@Id INT,
	@Type CHAR(1),
	@Address1 VARCHAR(128),
	@Address2 VARCHAR(128),
	@CityId INT,
	@Zip INT,
	@CustomerId INT
AS
	UPDATE Addresses 
	SET Type = @Type,
		Address1 = @Address1,
		Address2 = @Address2,
		CityId = @CityId,
		Zip = @Zip,
		CustomerId = @CustomerId
	WHERE Id = @Id

	SELECT * FROM Addresses WHERE Id = @id
RETURN 0
