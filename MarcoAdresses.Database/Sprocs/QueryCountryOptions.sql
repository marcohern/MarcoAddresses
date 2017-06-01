CREATE PROCEDURE [dbo].[QueryCountryOptions]
AS
	SELECT Id, Name FROM Countries
	ORDER BY Name ASC
RETURN 0
