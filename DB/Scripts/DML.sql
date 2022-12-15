USE SE_db

INSERT INTO Usuarios(NomeUsuario, DDD, Celular, Senha)
VALUES ('ADM', '11', '962666205', '$2a$12$m1dCDXA.N9yxkTpvevG/IOIHN7OwnSyAhi157utvvezUOiZNX5je.')
SELECT * FROM Usuarios

INSERT INTO TiposAnuncios(TipoAnuncio)
VALUES ('Venda'),('Aluguel'),('Ambos')
SELECT * FROM TiposAnuncios

INSERT INTO Categorias(Categoria)
VALUES ('Casa Terrea'),('Sobrado'),('Apartamento'),('Galpão'),('Espaço Comercial')
SELECT * FROM Categorias

INSERT INTO Aprovacao(Estado)
VALUES ('Aprovado'),('Negado'),('Em processo')
SELECT * FROM Aprovacao

INSERT INTO TipoInfo(TipoInfo)
VALUES ('Quartos'),('Salas'),('Cozinhas'),('Banheiros'),('Garagens')
SELECT * FROM TipoInfo