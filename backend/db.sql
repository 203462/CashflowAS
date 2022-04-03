/* Primer paso: crear a base de datos */
CREATE DATABASE dbCashflow;



/* Luego crear las tablas una por una  */
use dbCashflow;
CREATE TABLE usuarios(
id int auto_increment primary key not null,
user varchar(45),
password varchar(45),
cargo varchar(45)
);


/* Segunda tabla  */
use dbCashflow;
CREATE TABLE categorias(
id int auto_increment primary key not null,
categoria varchar(100),
subcategoria varchar(100)
);


/* TABLA DE INDICADORES */
use dbCashflow;
CREATE TABLE indicadores(
id int auto_increment primary key not null,
num_sem int not null,
mes VARCHAR(255) not null,
descrip VARCHAR(255) not null,
monto DOUBLE not null,
tipo_registro VARCHAR (255) NOT NULL
);


/*Tabla de flujos de efectivo */
use dbCashflow;
CREATE TABLE flujos(
id int auto_increment primary key not null,
es_ingreso BIT not null,
id_categoria INT NOT NULL,
categoria VARCHAR(255)  not null,
sub_categoria VARCHAR(255)  not null,
descripcion VARCHAR(255) not null,
cantidad DOUBLE not null,
fecha VARCHAR(255) not null
);