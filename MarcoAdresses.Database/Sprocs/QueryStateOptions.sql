CREATE PROCEDURE [dbo].[QueryStateOptions]
	@CountryId INT = NULL
AS BEGIN
	SELECT Id, Name FROM States WHERE @CountryId IS NOT NULL AND CountryId = @CountryId
	ORDER BY Name ASC

	RETURN @@ROWCOUNT
END
