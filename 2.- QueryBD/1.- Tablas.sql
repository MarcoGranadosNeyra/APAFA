CREATE TABLE apertura(
id			 	SERIAL,
apertura 		DATE NOT NULL,
cierre    		DATE NULL,
ingresos		DECIMAL(8,2) NOT NULL,
descuentos		DECIMAL(8,2) NOT NULL,
gastos 			DECIMAL(8,2) NOT NULL,
estado		 boolean NOT NULL,
CONSTRAINT pk_id_apertura PRIMARY KEY(id)
);

CREATE TABLE departamento (
id VARCHAR(2) NOT NULL,
departamento VARCHAR(20) NOT NULL,
CONSTRAINT uq_departamento UNIQUE(departamento),
CONSTRAINT pk_id_departamento PRIMARY KEY(id)
);

CREATE TABLE provincia(
id VARCHAR(4) NOT NULL,
provincia VARCHAR(30) NOT NULL,
id_departamento VARCHAR(2) NOT NULL,
CONSTRAINT uq_provincia UNIQUE(provincia),
CONSTRAINT pk_id_provincia PRIMARY KEY(id),
CONSTRAINT fk_id_departamento_provincia FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);


CREATE TABLE distrito(
id VARCHAR(6) NOT NULL,
distrito VARCHAR(40) NOT NULL,
id_provincia VARCHAR(4) NOT NULL,
id_departamento VARCHAR(2) NOT NULL,
CONSTRAINT pk_id_distrito PRIMARY KEY(id),
CONSTRAINT fk_id_provincia_distrito FOREIGN KEY(id_provincia) REFERENCES provincia(id),
CONSTRAINT fk_id_departamento_distrito FOREIGN KEY(id_departamento) REFERENCES departamento(id)
);


CREATE TABLE documento(
id 			SERIAL,
documento 	VARCHAR(20) NOT NULL,
descripion	 VARCHAR(60) NOT NULL,
CONSTRAINT uq_documento UNIQUE(documento),
CONSTRAINT pk_id_documento PRIMARY KEY(id)
);

CREATE TABLE sexo(
id			SERIAL,
sexo		VARCHAR(60) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_sexo PRIMARY KEY (id)
);


CREATE TABLE seguro(
id			SERIAL,
seguro		 VARCHAR(60) NOT NULL,
descripion	 VARCHAR(60) NOT NULL,
estado		 boolean NOT NULL,
CONSTRAINT pk_id_seguro PRIMARY KEY (id)
);

CREATE TABLE persona(
id 				SERIAL,
id_departamento VARCHAR(2) NOT NULL,
id_provincia 	VARCHAR(4) NOT NULL,
id_distrito 	VARCHAR(6) NOT NULL,
id_documento	INT NOT NULL,
nro_documento	VARCHAR(30) NOT NULL,
nombre			VARCHAR(30) NOT NULL,
apaterno		VARCHAR(30) NOT NULL,
amaterno		VARCHAR(30) NOT NULL,
telefono		VARCHAR(15) NULL,
direccion		VARCHAR(80) NULL,
fecha_naci		DATE NOT NULL,
id_sexo			INT NOT NULL,
correo			VARCHAR(80) NULL,
firma			VARCHAR(200) NULL,
huella			VARCHAR(200) NULL,
foto			VARCHAR(200) NULL,
estado			boolean 	NOT NULL,
CONSTRAINT pk_id_persona PRIMARY KEY(id),
CONSTRAINT uq_id_documento_nro_documento UNIQUE(id_documento,nro_documento),
CONSTRAINT fk_id_documento_persona FOREIGN KEY (id_documento) REFERENCES documento(id),
CONSTRAINT fk_id_departamento_persona FOREIGN KEY (id_departamento) REFERENCES departamento(id),
CONSTRAINT fk_id_provincia_persona FOREIGN KEY (id_provincia) REFERENCES provincia(id),
CONSTRAINT fk_id_distrito_persona FOREIGN KEY (id_distrito) REFERENCES distrito(id),
CONSTRAINT fk_id_sexo_persona FOREIGN KEY (id_sexo) REFERENCES sexo(id)
);


CREATE TABLE rol(
id 			SERIAL,
rol 		VARCHAR(40) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT uq_rol UNIQUE(rol),
CONSTRAINT pk_id_rol PRIMARY KEY (id)
);

CREATE TABLE padre_apoderado(
id 			SERIAL,
id_persona	INT NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_padre_apoderado PRIMARY KEY (id)
);

CREATE TABLE grado(
id 			SERIAL,
grado		VARCHAR(10) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_grado PRIMARY KEY (id)
);

CREATE TABLE seccion(
id 			SERIAL,
seccion		VARCHAR(10) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_seccion PRIMARY KEY (id)
);

CREATE TABLE alumno(
id 			SERIAL,
id_persona	INT NOT NULL,
id_grado	INT NOT NULL,
id_seccion	INT NOT NULL,
id_seguro	INT NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_alumno PRIMARY KEY (id),
CONSTRAINT fk_id_persona_alumno FOREIGN KEY(id_persona) REFERENCES persona(id),
CONSTRAINT fk_id_grado_alumno FOREIGN KEY(id_grado) REFERENCES grado(id),
CONSTRAINT fk_id_seccion_alumno FOREIGN KEY(id_seccion) REFERENCES seccion(id),
CONSTRAINT fk_id_seguro_alumno FOREIGN KEY(id_seguro) REFERENCES seguro(id)
);

CREATE TABLE detalle_padre_apoderado(
id_padre_apoderado	INT NOT NULL,
id_alumno			INT NOT NULL,
estado				boolean NOT NULL,
CONSTRAINT pk_id_padre_apoderado_id_alumno_detalle_padre_apoderado PRIMARY KEY (id_padre_apoderado,id_alumno),
CONSTRAINT fk_id_padre_apoderado_detalle_padre_apoderado FOREIGN KEY (id_padre_apoderado) REFERENCES padre_apoderado(id),
CONSTRAINT fk_id_alumno_detalle_padre_apoderado FOREIGN KEY (id_alumno) REFERENCES alumno(id)
);


/*
CREATE TABLE users(
id			        INT NOT NULL,
id_persona	        INT NOT NULL,
id_rol  	        INT NOT NULL,
usuario		        VARCHAR(80) NOT NULL,
password	        VARCHAR(80) NOT NULL,
estado		        boolean NOT NULL,
CONSTRAINT pk_id_usuario PRIMARY KEY(id),
CONSTRAINT fk_id_persona_usuario FOREIGN KEY(id_persona) REFERENCES persona(id),
CONSTRAINT fk_id_rol_usuario FOREIGN KEY(id_rol) references rol(id)
);
*/

ALTER TABLE users 
    ADD CONSTRAINT uq_id_persona UNIQUE (id_persona);
	
ALTER TABLE users 
    ADD CONSTRAINT uq_id_persona_id_rol UNIQUE (id_persona, id_rol);

CREATE TABLE modulo(
id			SERIAL,
modulo		varchar(40) NOT NULL,
url			varchar(200) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_modulo PRIMARY KEY(id)
);

CREATE TABLE permiso(
id			SERIAL,
id_rol	    INT NOT NULL,
id_modulo	INT NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT uq_id_rol_id_modulo_permiso UNIQUE(id_rol,id_modulo),
CONSTRAINT pk_rol_modulo PRIMARY KEY(id),
CONSTRAINT fk_id_rol_rol_modulo FOREIGN KEY (id_rol) REFERENCES rol(id),
CONSTRAINT fk_id_modulo_rol_modulo FOREIGN KEY (id_modulo) REFERENCES modulo(id)
);


CREATE TABLE empresa(
id 					SERIAL,
id_documento		INT NOT NULL,
nro_documento		VARCHAR(30) NOT NULL,
razon_social		VARCHAR(200) NOT NULL,
actividad_economica	VARCHAR(200) NOT NULL,
telefono			VARCHAR(200) NOT NULL,
direccion			VARCHAR(200) NOT NULL,
correo				VARCHAR(200) NOT NULL,
contacto			VARCHAR(200) NOT NULL,
estado				boolean NOT NULL,
CONSTRAINT pk_id_empresa PRIMARY KEY (id),
CONSTRAINT uq_id_documento_nro_documento_empresa UNIQUE(id_documento,nro_documento),
CONSTRAINT fk_id_documento_empresa FOREIGN KEY (id_documento) REFERENCES documento(id)
);


CREATE TABLE cotizacion(
id 				SERIAL,
id_empresa		INT NOT NULL,
id_usuario		INT NOT NULL,
fecha			DATE NOT NULL,
hora			VARCHAR(10) NOT NULL,
cotizacion		VARCHAR(100) NOT NULL,
total			DECIMAL(8,2) NOT NULL,
descuento		DECIMAL(8,2) NOT NULL,
observaciones	VARCHAR(200) NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_cotizacion PRIMARY KEY (id),
CONSTRAINT fk_id_empresa_cotizacion FOREIGN KEY (id_empresa) REFERENCES empresa(id),
CONSTRAINT fk_id_usuario_cotizacion FOREIGN KEY (id_usuario) REFERENCES users(id)
);

CREATE TABLE cotizacion_detalle(
id            	SERIAL,
id_cotizacion	INT NOT NULL,
producto		VARCHAR(100) NOT NULL,
cantidad		INT NOT NULL,
precio			DECIMAL(8,2) NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_cotizacion_detalle PRIMARY KEY (id),
CONSTRAINT fk_id_cotizacion_cotizacion_detalle FOREIGN KEY (id_cotizacion) REFERENCES cotizacion(id)
);

CREATE TABLE ce(
id 					SERIAL,
ce	 				VARCHAR(200) NOT NULL,
razon_social 		VARCHAR(200) NOT NULL,
nombre_comercial 	VARCHAR(200) NOT NULL,
ruc			 		VARCHAR(11) NOT NULL,
direccion	 		VARCHAR(200) NOT NULL,
correo		 		VARCHAR(100) NOT NULL,
telefono		 	VARCHAR(15) NOT NULL,
estado				boolean NOT NULL,
CONSTRAINT pk_id_ce PRIMARY KEY (id)
);


CREATE TABLE apafa(
id				SERIAL,
id_persona		INT NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_apafa PRIMARY KEY(id)
);

CREATE TABLE evento(
id				SERIAL,
evento			VARCHAR(100) NOT NULL,
fecha           DATE NOT NULL,
hora    		VARCHAR(10) NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_evento PRIMARY KEY(id)
);

CREATE TABLE ingreso(
id					SERIAL,
id_usuario			INT NOT NULL,
id_apertura			INT NOT NULL,
id_evento		 	INT NOT NULL,
id_padre_apoderado 	INT NOT NULL,
monto				DECIMAL(8,2) NOT NULL,
fecha				DATE NOT NULL,
hora				VARCHAR(10) NOT NULL,
estado				boolean NOT NULL,
CONSTRAINT pk_id_ingreso PRIMARY KEY(id),
CONSTRAINT fk_id_id_usuario_ingreso FOREIGN KEY(id_usuario) REFERENCES users(id),
CONSTRAINT fk_id_id_apertura_ingreso FOREIGN KEY(id_apertura) REFERENCES apertura(id),
CONSTRAINT fk_id_evento_ingreso FOREIGN KEY(id_evento) REFERENCES evento(id),
CONSTRAINT fk_id_padre_apoderado_ingreso FOREIGN KEY(id_padre_apoderado) REFERENCES padre_apoderado(id)
);

CREATE TABLE forma_pago(
id				INT NOT NULL,
forma_pago		VARCHAR(50) NOT NULL,
orden			INT NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_forma_pago PRIMARY KEY(id),
CONSTRAINT uq_forma_pago UNIQUE(forma_pago)
);

CREATE TABLE pago(
id				SERIAL,
id_apertura		INT NOT NULL,
id_ingreso		INT NOT NULL,
id_forma_pago	INT NOT NULL,
monto			DECIMAL(8,2) NOT NULL,
fecha			DATE NOT NULL,
hora			VARCHAR(10) NOT NULL,
estado			boolean NOT NULL,
CONSTRAINT pk_id_pago PRIMARY KEY(id),
CONSTRAINT fk_id_apertura_pago FOREIGN KEY(id_apertura) REFERENCES apertura(id),
CONSTRAINT fk_id_ingreso_pago FOREIGN KEY(id_ingreso) REFERENCES ingreso(id),
CONSTRAINT fk_id_forma_pago FOREIGN KEY(id_forma_pago) REFERENCES forma_pago(id)
);


CREATE TABLE gasto(
id			SERIAL,
id_usuario	INT NOT NULL,
id_apertura	INT NOT NULL,
concepto	VARCHAR(100) NOT NULL,
monto		DECIMAL(8,2) NOT NULL,
fecha		DATE NOT NULL,
hora		VARCHAR(10) NOT NULL,
estado		boolean NOT NULL,
CONSTRAINT pk_id_gasto PRIMARY KEY (id),
CONSTRAINT fk_id_apertura_gasto FOREIGN KEY(id_apertura) REFERENCES apertura(id),
CONSTRAINT fk_id_usuario_gasto FOREIGN KEY(id_usuario) REFERENCES users(id)
);
