CREATE DATABASE SE_db

USE SE_db

CREATE TABLE Usuarios(
idUsuario SMALLINT PRIMARY KEY IDENTITY,
NomeUsuario VARCHAR(55),
DDD CHAR(2),
Celular CHAR(9) NOT NULL,
Senha CHAR(60) NOT NULL
)
GO

CREATE TABLE TiposAnuncios(
idTipoAnuncio TINYINT PRIMARY KEY IDENTITY,
TipoAnuncio VARCHAR(7) NOT NULL UNIQUE
)
GO

CREATE TABLE Categorias(
idCategoria TINYINT PRIMARY KEY IDENTITY,
Categoria VARCHAR(30) NOT NULL UNIQUE
)
GO

CREATE TABLE Aprovacao(
idAprovacao TINYINT PRIMARY KEY IDENTITY,
Estado VARCHAR(12) UNIQUE
)
GO

CREATE TABLE Imoveis(
idImovel SMALLINT PRIMARY KEY IDENTITY,
idTipoAnuncio TINYINT FOREIGN KEY REFERENCES TiposAnuncios(idTipoAnuncio),
idCategoria TINYINT FOREIGN KEY REFERENCES Categorias(idCategoria),
idAprovacao TINYINT FOREIGN KEY REFERENCES Aprovacao(idAprovacao),
ImgPrincipal VARCHAR(255),
Titulo VARCHAR(200),
Descricao VARCHAR(300),
Bairro VARCHAR(30),
Aluguel	DECIMAL(6,2),
Valor DECIMAL(8,2),
CustosMensais DECIMAL(6,2),
Construido DECIMAL(6,2),
Terreno DECIMAL(7,2)
)
GO

CREATE TABLE dbImg(
idImg SMALLINT PRIMARY KEY IDENTITY,
idImovel SMALLINT FOREIGN KEY REFERENCES Imoveis(idImovel),
img VARCHAR(255)
)

CREATE TABLE TipoInfo(
idTipoInfo TINYINT PRIMARY KEY IDENTITY,
TipoInfo VARCHAR(20)
)
GO

CREATE TABLE InformacoesAdicionais(
idInfo SMALLINT PRIMARY KEY IDENTITY,
idTipoInfo TINYINT FOREIGN KEY REFERENCES TipoInfo(idTipoInfo),
idImovel SMALLINT FOREIGN KEY REFERENCES Imoveis(idImovel),
Quantidade TINYINT
)
GO