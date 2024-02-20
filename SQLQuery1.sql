--USE DATABASE ShoppingCartReact

CREATE TABLE Products(Id INT PRIMARY KEY IDENTITY(1,1), Nombre VARCHAR(100), Precio DECIMAL(18,2), Stock INT, FechaRegistro DATETIME);

SELECT * FROM Products

INSERT INTO Products(Nombre, Image, Precio) VALUES('Test1', 'Test1.jpg', 300)
INSERT INTO Products(Nombre, Image, Precio) VALUES('Test2', 'Test2.jpg', 250)
INSERT INTO Products(Nombre, Image, Precio) VALUES('Test3', 'Test3.jpg', 400)
INSERT INTO Products(Nombre, Image, Precio) VALUES('Test4', 'Test4.jpg', 700)
INSERT INTO Products(Nombre, Image, Precio) VALUES('Test5', 'Test5.jpg', 200)

CREATE TABLE CART(Id int IDENTITY(1,1) PRIMARY KEY, ProductId int)

ALTER TABLE Products
ALTER COLUMN Image VARCHAR(200);

GO

CREATE PROCEDURE GetProducts
AS
    SELECT * FROM Products;
GO

CREATE PROCEDURE GetProductById @id int
AS
    SELECT * FROM Products WHERE Id =@id;
GO

CREATE PROCEDURE AddNewProduct @Nombre VARCHAR(100), @Image VARCHAR(100), @Precio DECIMAL(18,2)
As
  INSERT INTO Products(Nombre,Image, Precio) VALUES (@Nombre, @Image, @Precio)
GO

ALTER PROCEDURE AddNewProduct
    @Nombre VARCHAR(100),
    @Image VARCHAR(200),  
    @Precio DECIMAL(18,2)
AS
    INSERT INTO Products (Nombre, Image, Precio)
    VALUES (@Nombre, @Image, @Precio);
GO

CREATE PROCEDURE UpdateProduct @Id int,@Nombre VARCHAR(100), @Image VARCHAR(100), @Precio DECIMAL(18,2)
As
  UPDATE Products SET Nombre = @Nombre, Image = @Image, Precio = @Precio WHERE Id=@Id
GO

ALTER PROCEDURE UpdateProduct @Id int,@Nombre VARCHAR(100), @Image VARCHAR(200), @Precio DECIMAL(18,2)
As
  UPDATE Products SET Nombre = @Nombre, Image = @Image, Precio = @Precio WHERE Id=@Id
GO

CREATE PROCEDURE DeleteProduct @Id int
As
  DELETE FROM Products WHERE Id=@Id
GO

CREATE PROCEDURE GetCartItems
As
	SELECT P.Id, P.Nombre, P.Image, P.Precio FROM CART C INNER JOIN Products P ON C.ProductId = P.Id
GO

CREATE PROCEDURE DeleteCartProduct @Id int
As
	DELETE FROM CART WHERE Id=@Id
GO

CREATE PROCEDURE DeleteCartProductById @Id int
As
	DELETE FROM CART WHERE ProductId=@Id
GO

EXEC GetProducts;

EXEC GetProductById @id = 3;

EXEC AddNewProduct @Nombre = 'Test6',@Image ='Test6.jpg',@Precio = 125

EXEC UpdateProduct @Id=1004, @Nombre = 'Test81.jpg', @Image = 'Test81.jpg',@Precio=325.6

EXEC DeleteProduct @Id=1004

EXEC GetCartItems

EXEC DeleteCartProduct @Id=1

EXEC sp_reNombre 'DeleteCartProduct', 'DeleteCartProductById';
DROP PROCEDURE DeleteCartProductById

EXEC DeleteCartProductById @Id=1006


Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;