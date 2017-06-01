CREATE PROCEDURE [dbo].[DeleteAddress]
	@Id int
AS
BEGIN
	SELECT * FROM Addresses WHERE Id = @Id

	DELETE FROM Addresses WHERE Id = @Id

	RETURN 0
END