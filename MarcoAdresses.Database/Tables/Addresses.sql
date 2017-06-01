CREATE TABLE [dbo].[Addresses]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	[Type] CHAR(1) NOT NULL DEFAULT 'A', -- A:Account, M:Mailing, L:Legal
	[Address1] VARCHAR(128) NOT NULL DEFAULT '',
	[Address2] VARCHAR(128) NOT NULL DEFAULT '',
	[CityId] INT NOT NULL,
	[Zip] INT NOT NULL,
	CONSTRAINT FK_Addresses_CityId FOREIGN KEY (CityId) REFERENCES Cities ([Id])
)
