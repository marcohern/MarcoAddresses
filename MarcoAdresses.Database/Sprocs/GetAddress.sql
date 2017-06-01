CREATE PROCEDURE [dbo].[GetAddress]
	@id int
AS BEGIN
	SELECT a.Id, a.Type, a.Address1, a.Address2, a.CityId, a.Zip, a.CustomerId,
		s.Id AS StateId, co.Id AS CountryId
	FROM Addresses a
	INNER JOIN Cities c ON c.Id = a.CityId
	INNER JOIN States s ON s.Id = c.StateId
	INNER JOIN Countries co ON co.Id = s.CountryId
	WHERE a.Id = @id

	RETURN @@ROWCOUNT
END
