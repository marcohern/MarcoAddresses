CREATE PROCEDURE [dbo].[DeleteAddress]
	@Id int
AS
BEGIN
	SELECT Id, Type, Address1, Address2, CityId, Zip, CustomerId
	FROM Addresses WHERE Id = @Id

	DELETE FROM Addresses WHERE Id = @Id

	RETURN @@ROWCOUNT
END