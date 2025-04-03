# Glosario

- **PK** - _LLAVE PRIMARIA_
- **FK** - _LLAVE FORÁNEA_
- **UQ** - _ATRIBUTO ÚNICO_
- **ED** - _ENTIDAD DE DATOS_
- **EP** - _ENTIDAD PIVOTE_
- **EC** - _ENTIDAD CATALOGO_

## Entidades

### landscapes **(ED)**

- landscape_id INT GENERATED ALWAYS AS IDENTITY **(PK)**
- name VARCHAR(255) NOT NULL
- location_id INT NOT NULL **(FK)**
- landscape_type_id INT NOT NULL **(FK)**
- description TEXT
- image_url VARCHAR(255)

### locations **(EC)**

- location_id INT GENERATED ALWAYS AS IDENTITY **(PK)**
- province_id INT **(FK)**
- district VARCHAR(255) NOT NULL
- coordinates VARCHAR(100) NOT NULL
- altitude DECIMAL(8,2)

### landscape_type **(EC)**

- landscape_type_id INT GENERATED ALWAYS AS IDENTITY **(PK)**
- name VARCHAR(255) NOT NULL

### province **(EC)**

- province_id INT GENERATED ALWAYS AS IDENTITY **(PK)**
- name VARCHAR(255) NOT NULL

## Relaciones

1. Un **landscape** tiene una **location** _(1 a 1)_
2. Un **landscape** tiene un **landscape_type** _(1 a 1)_
3. Una **location** pertenece a una **province** _(1 a 1)_

## Modelo relacional de la base de datos

![Modelo relacional de la base de datos GameNest](/relational-model-v1.png)
