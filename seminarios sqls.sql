CREATE TABLE DIM_PRODUCTOS ( 
item_id INT PRIMARY KEY, 
item_numero VARCHAR(50),
item_descripcion VARCHAR(20),
item_activo BIT,
categoria_id INT,
categoria_nombre VARCHAR(50),
categoria_pf BIT,
dim_productos_ultima_actualizacion DATE ,
activo BIT
);

CREATE TABLE DIM_COMPROBANTES ( 
cpte_id INT PRIMARY KEY, 
emp_nombre VARCHAR(50),
cpte_tipo VARCHAR(20),
cpte_numero VARCHAR(50),
cpte_emision DATE,
moneda VARCHAR(20),
tasa_cambio INT,
linea_descripcion VARCHAR(50),
linea_cantidad INT,
precio_unitario INT,
dim_comprobantes_ultima_modificacion DATE,
activo BIT
);

CREATE TABLE DIM_CLIENTES (
cliente_id INT PRIMARY KEY,
cliente_numero VARCHAR (50),
cliente_nombre VARCHAR (50),
cliente_estado VARCHAR (50),
local_uso_tipo VARCHAR (20),
dim_clientes_ultima_actualizacion DATE,
activo BIT
);

CREATE TABLE DIM_PAIS (
pais_id INT PRIMARY KEY,
pais_numero INT,
pais_nombre_en VARCHAR(50),
dim_pais_ultima_actualizacion DATE,
activo BIT
);

CREATE TABLE DIM_TIEMPOS (
id_tiempo INT PRIMARY KEY,
fecha DATE,
año VARCHAR,
trimestre VARCHAR,
id_cliente int,
dim_tiempo_ultima_actualizacion DATE,
activo BIT
);


CREATE TABLE HECHOS (
emp_nombre VARCHAR(50),
cpte_tipo VARCHAR(50),
cpte_numero VARCHAR(50),
cpte_emision DATE,
cliente_nombre VARCHAR(50),
pais_nombre_en VARCHAR(50),
moneda VARCHAR(50),
tasa_cambio INT,
item_descripcion VARCHAR(50),
precio_unitario INT,
importe INT,
importe_fnc INT
);