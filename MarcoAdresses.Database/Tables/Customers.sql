﻿CREATE TABLE [dbo].[Customers]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	[Name] VARCHAR(128) NOT NULL,
	[Email] VARCHAR(128) NOT NULL
)
