CREATE PROCEDURE [dbo].[GetAddress]
	@id int
AS
	SELECT a.Id, a.Type, a.Address1, a.Address2, a.CityId, a.Zip, 
		s.Id AS StateId, co.Id AS CountryId
	FROM Addresses a
	LEFT JOIN Cities c ON c.Id = a.CityId
	LEFT JOIN States s ON s.Id = c.StateId
	LEFT JOIN Countries co ON co.Id = s.CountryId
	WHERE a.Id = @id;
RETURN 0
