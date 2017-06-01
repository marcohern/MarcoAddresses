﻿CREATE PROCEDURE [dbo].[QueryAddress]
AS
	SELECT a.Id, a.Type, a.Address1, a.Address2, a.CityId, a.Zip,
		c.Name AS City, s.Name AS State, co.Name AS Country, co.Continent AS Continent
	FROM Addresses a
	LEFT JOIN Cities c ON a.CityId = c.Id
	LEFT JOIN States s ON c.StateId = s.Id
	LEFT JOIN Countries co ON s.CountryId = co.Id
	
RETURN 0