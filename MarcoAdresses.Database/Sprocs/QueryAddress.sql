CREATE PROCEDURE [dbo].[QueryAddress]
	@CustomerId INT = NULL
AS BEGIN
	SELECT a.Id, a.Type, a.Address1, a.Address2, a.CityId, a.Zip, a.CustomerId,
		c.Name AS City, s.Id AS StateId, s.Name AS State, co.Id AS CountryId, co.Name AS Country, co.Continent AS Continent,
		cu.Name AS Customer
	FROM Addresses a
	INNER JOIN Cities c ON a.CityId = c.Id
	INNER JOIN States s ON c.StateId = s.Id
	INNER JOIN Countries co ON s.CountryId = co.Id
	INNER JOIN Customers cu ON a.CustomerId = cu.Id
	WHERE (@CustomerId IS NULL OR @CustomerId = cu.Id)

	RETURN @@ROWCOUNT
END
