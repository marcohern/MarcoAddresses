CREATE PROCEDURE [dbo].[QueryStateOptions]
	@CountryId INT = NULL
AS
	SELECT Id, Name FROM States WHERE @CountryId IS NOT NULL AND CountryId = @CountryId
	ORDER BY Name ASC
RETURN 0
