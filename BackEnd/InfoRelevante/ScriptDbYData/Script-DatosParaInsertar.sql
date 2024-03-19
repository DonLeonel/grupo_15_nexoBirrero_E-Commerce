/*datos para la tabla roles*/

INSERT INTO roles (nombre, descripcion, createdAt, updatedAt) 
values ('CLIENTE', 'Un cliente solo puede consumir la App sin permisos de modificar productos', now(), null);
INSERT INTO roles (nombre, descripcion, createdAt, updatedAt) 
values ('ADMINISTRADOR', 'Un Admin tiene acceso a cualquier rincon de la App.', now(), null);

/*datos para la tabla categorias*/

insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('AFRUTADAS', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('ALE', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('STOUT', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('TRIGO', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('PORTER', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('LAGER', 'Descripcion', null, now());
insert into categorias (nombre, descripcion, updatedAt, createdAt) 
values ('ESPECIAL', 'Descripcion', null, now());

/*dato para usuario administrador (Seguramente al crear otro usuario desde la app la contraseña sea diferente al registro de abajo.)*/

insert into usuarios (correo, contrasenia, avatar, rolId, nombre, apellido, telefono, ciudadId, fechaNac, activo, updatedAt, createdAt)
values ('admin@hotmail.com', '$2b$10$gLhZe5Lx38EEVy45UA/W8.xQgbQlZqplHCih0HcUeq5j5NMUakrSm','user.png', 2, 'Admin', 'istrador', null, null, null, 1, null, now());

/*datos para productos*/

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Vera Ipa', 'Esta cerveza nace en ni idea', 2, 2500, 'Argentina', 'TRAPENSE', 'Patagonia', 10, 500, '1710274077976_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Liefmans Fruitesse', 'Entre los estilos cerveceros más antiguos del mundo se encuentran las lambic, que son a la cerveza como el Jerez al vino. Todo un reto para el paladar cervecero', 1, 1500, 'Bélgica', 'LAMBIC', 'Brewery Liefmans', 4, 500, '1710266935020_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Barbar', 'Entre los estilos cerveceros más antiguos del mundo se encuentran las lambic, que son a la cerveza como el Jerez al vino. Todo un reto para el paladar cervecero', 1, 1500, 'Bélgica', 'LAMBIC', 'Brasserie Lefebvre', 9, 1000, '1710267424272_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('St. Louis Premium Gueuze', 'Entre los estilos cerveceros más antiguos del mundo se encuentran las lambic, que son a la cerveza como el Jerez al vino. Todo un reto para el paladar cervecero', 1, 2500, 'Bélgica', 'LAMBIC', 'Brouwerij Van Honseb', 5, 750, '1710267624398_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Lindemans Apple', 'Entre los estilos cerveceros más antiguos del mundo se encuentran las lambic, que son a la cerveza como el Jerez al vino. Todo un reto para el paladar cervecero', 1, 1000, 'Bélgica', 'LAMBIC', 'Brouwerij Lindemansk', 4, 750, '1710268230578_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Blue Moon', 'Las cervezas que sustituyen en su elaboración una gran parte de la cebada por trigo constituyen un estilo propio y lleno de variedades que ha sobrevivido a períodos privaciones de trigo como las de la Ley de la Pureza de 1516.', 4, 2000, 'Estadounidense', 'TRIGO', 'Molson Coors', 5, 750, '1710268794768_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Zundertt', 'Entre los estilos cerveceros más antiguos del mundo se encuentran las lambic, que son a la cerveza como el Jerez al vino. Todo un reto para el paladar cervecero', 6, 2500, 'Argentina', 'LAMBIC', 'Alemanquiss', 11, 750, '1710270223451_IMG.jpg', 1, now(), now());

insert into productos (nombre,descripcion, categoriaId, precio, nacionalidad, variedad, cervecera, graduacion, volContenido, img, activo, updatedAt, createdAt)
values ('Weihenstephaner Hefe', 'Las cervezas que sustituyen en su elaboración una gran parte de la cebada por trigo constituyen un estilo propio y lleno de variedades que ha sobrevivido a períodos privaciones de trigo como las de la Ley de la Pureza de 1516.', 4, 1900, 'Alemana', 'TRIGO', 'Bayerische Staatsbra', 5, 1500, '1710269645742_IMG.jpg', 1, now(), now());