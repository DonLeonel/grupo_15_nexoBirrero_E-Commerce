create database nexoBirrero;
use nexoBirrero;

CREATE TABLE `usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `correo` VARCHAR(100) NOT NULL,
   `contrasenia` VARCHAR(150) NOT NULL,
   `avatar` VARCHAR(50) NOT NULL,
   `rolId` INT NOT NULL DEFAULT 1,
   `nombre` VARCHAR(50) NOT NULL,
   `apellido` VARCHAR(50) NOT NULL,
   `telefono` VARCHAR(20),
   `ciudadId` INT,
   `fechaNac` DATE,
   `activo` INT(1) NOT NULL DEFAULT 1,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(50) NOT NULL,
   `descripcion` VARCHAR(250) NOT NULL,
   `categoriaId` INT NOT NULL,
   `precio` DECIMAL NOT NULL,
   `nacionalidad` VARCHAR(30) NOT NULL,
   `variedad` VARCHAR(20) NOT NULL,
   `cervecera` VARCHAR(20) NOT NULL,
   `graduacion` DECIMAL NOT NULL,
   `volContenido` INT NOT NULL,
   `img` VARCHAR(60) NOT NULL,
   `activo` INT(1) NOT NULL DEFAULT 1,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ciudades` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(50) NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carritos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `usuarioId` INT NOT NULL,
   `activo` INT(1) NOT NULL DEFAULT 1,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(20) NOT NULL,
   `descripcion` VARCHAR(100) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorias` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(30) NOT NULL,
   `descripcion` VARCHAR(80) NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `facturas` (
   `id` INT AUTO_INCREMENT,
   `metodoPagoId` INT NOT NULL,
   `usuarioId` INT NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `detalles_facturas` (
   `id` INT AUTO_INCREMENT,
   `facturaId` INT NOT NULL,
   `productoId` INT NOT NULL,
   `cantidad` INT NOT NULL,
   `precio` DECIMAL NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `metodos_pagos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(30) NOT NULL,
   `descripcion` VARCHAR(30) NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carritos_productos` (
   `id` INT AUTO_INCREMENT,
   `productoId` INT NOT NULL,
   `carritoId` INT NOT NULL,
   `cantidad` INT NOT NULL,
   `precio` DECIMAL NOT NULL,
   `updatedAt` DATETIME,
   `createdAt` DATETIME,
   PRIMARY KEY (`id`)
);


ALTER TABLE `usuarios` ADD CONSTRAINT `FK_d4b5f053-18e9-4005-b7af-a876d5e9a8f9` FOREIGN KEY (`rolId`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `usuarios` ADD CONSTRAINT `FK_61f1f50c-9fba-4e53-aca5-7db656a3611a` FOREIGN KEY (`ciudadId`) REFERENCES `ciudades`(`id`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_84edb8b0-7305-4ece-bae4-a736f1891fdc` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`)  ;

ALTER TABLE `carritos` ADD CONSTRAINT `FK_f18db624-8d37-46f1-bb5e-f22766d24942` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`)  ;

ALTER TABLE `facturas` ADD CONSTRAINT `FK_4d07158b-1984-4a74-807a-0ac664accea8` FOREIGN KEY (`metodoPagoId`) REFERENCES `metodos_pagos`(`id`)  ;

ALTER TABLE `facturas` ADD CONSTRAINT `FK_623e5e21-4c94-4986-a9dd-5e81ba45a00d` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`)  ;

ALTER TABLE `detalles_facturas` ADD CONSTRAINT `FK_894caf86-42bf-460b-be66-0645889709e2` FOREIGN KEY (`facturaId`) REFERENCES `facturas`(`id`)  ;

ALTER TABLE `detalles_facturas` ADD CONSTRAINT `FK_ed958763-4b4f-4e8e-a2a7-73b35d1acdd7` FOREIGN KEY (`productoId`) REFERENCES `productos`(`id`)  ;

ALTER TABLE `carritos_productos` ADD CONSTRAINT `FK_74e59632-c781-4249-aa3c-a1b6e6ebe75e` FOREIGN KEY (`productoId`) REFERENCES `productos`(`id`)  ;

ALTER TABLE `carritos_productos` ADD CONSTRAINT `FK_4653bf5c-3a03-496c-9a31-826b26458b10` FOREIGN KEY (`carritoId`) REFERENCES `carritos`(`id`)  ;