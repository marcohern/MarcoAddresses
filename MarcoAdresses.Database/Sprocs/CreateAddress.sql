﻿CREATE PROCEDURE [dbo].[CreateAddress]
	@Type CHAR(1),
	@Address1 VARCHAR(128),
	@Address2 VARCHAR(128),
	@CityId INT,
	@Zip INT
AS BEGIN
	DECLARE @Id INT

	INSERT INTO Addresses([Type], Address1, Address2, CityId, Zip) VALUES
	(@Type, @Address1, @Address2, @CityId, @Zip)

	SET @id = SCOPE_IDENTITY()

	SELECT * FROM Addresses WHERE Id = @id

	RETURN 0
END