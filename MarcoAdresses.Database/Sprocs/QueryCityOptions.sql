﻿CREATE PROCEDURE [dbo].[QueryCityOptions]
	@StateId INT = NULL
AS BEGIN
	SELECT Id, Name FROM Cities
	WHERE @StateId IS NOT NULL AND StateId = @StateId
	ORDER BY Name ASC

	RETURN @@ROWCOUNT
END
