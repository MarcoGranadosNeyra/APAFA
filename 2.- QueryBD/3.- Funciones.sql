create or replace function listarDepartamento()
returns table (
  id            varchar, 
  departamento  varchar)
as $$
	select id,departamento from departamento order by id asc;
$$ language sql;

create or replace function buscarDepartamento(_id varchar)
returns table (
  id            varchar, 
  departamento  varchar)
as $$
	select id,departamento from departamento where id=_id;
$$ language sql;

create or replace function listarProvincia(_id_departamento varchar)
returns table (
  id            	varchar, 
  provincia     	varchar,
  id_departamento  	varchar)
as $$
	select id,provincia,id_departamento from provincia where id_departamento=_id_departamento
$$ language sql;

create or replace function buscarProvincia(_id varchar)
returns table (
  id            	varchar, 
  provincia     	varchar,
  id_departamento  	varchar)
as $$
	SELECT id,provincia,id_departamento FROM provincia where id=_id
$$ language sql;

create or replace function listarDistrito(_id_provincia varchar)
returns table (
  	id            	varchar, 
  	distrito  		varchar,
	id_provincia	varchar,
	id_departamento	varchar)
as $$
	select id,distrito,id_provincia,id_departamento from distrito where id_provincia=_id_provincia;
$$ language sql;

create or replace function buscarDistrito(_id varchar)
returns table (
  	id            	varchar, 
  	distrito  		varchar,
	id_provincia	varchar,
	id_departamento	varchar)
as $$
	select id,distrito,id_provincia,id_departamento from distrito where id=_id;
$$ language sql;


create or replace function listarDocumento()
returns table (
	id 				integer,
	documento		varchar)
as $$
	select id,documento from documento order by id asc
$$ language sql;

create or replace function listarSexo()
returns table (
	id 					integer,
	sexo				varchar)
as $$
	select id,upper(sexo) from sexo order by id asc

$$ language sql;


create or replace function listarPersona()
returns table (
	id 					    integer,
	documento	 		  	varchar,
	departamento 			varchar,
	provincia 				varchar,
	distrito			  	varchar,
	nro_documento			varchar,
	nombres				  	varchar,
	telefono			  	varchar,
	direccion			  	varchar,
	fecha_naci				varchar,
	sexo				    varchar,
	correo				  	varchar,
	firma				    varchar,
	huella				  	varchar,
	foto				    varchar)
as $$
	select per.id,doc.documento,upper(d.departamento) as departamento,upper(pro.provincia) as provincia,upper(di.distrito) as distrito,nro_documento,upper(nombre|| ' ' || apaterno || ' ' || amaterno) as Nombres,telefono,upper(direccion) as direccion,to_char(fecha_naci,'DD/MM/YYYY'),UPPER(s.sexo),upper(correo) as correo,firma,huella,foto from Persona per
	INNER JOIN departamento d on d.id=per.id_departamento
	INNER JOIN provincia pro on pro.id=per.id_provincia
	INNER JOIN distrito di on di.id=per.id_distrito
	INNER JOIN documento doc on doc.id=per.id_documento
	INNER JOIN sexo s on s.id=per.id_sexo
	WHERE per.estado=true order by per.id desc;
$$ language sql;

create or replace function listarPersonaById(_id int)
returns table (
	id 						integer,
	id_documento 		 	integer,
	id_departamento			varchar,
	id_provincia		  	varchar,
	id_distrito			  	varchar,
	nro_documento	  		varchar,
	nombre				    varchar,
	apaterno			    varchar,
	amaterno		    	varchar,
	telefono		    	varchar,
	direccion		    	varchar,
	fecha_naci		  		varchar,
	id_sexo 		 		integer,
	correo			    	varchar,
	firma				    varchar,
	huella			      	varchar,
	foto				    varchar)
as $$
	select id,id_documento,id_departamento,id_provincia,id_distrito,nro_documento,upper(nombre) as nombre,upper(apaterno) as apaterno,upper(amaterno) as amaterno,telefono,upper(direccion) as direccion,to_char(fecha_naci,'YYYY-MM-DD'),id_sexo,upper(correo) as correo,firma,huella,foto from Persona 
	WHERE id=_id;
	
$$ language sql;


create or replace function listarPersonaByDNI(_id_documento int,_nro_documento varchar)
returns table (
	id 					   	integer,
	id_departamento 		varchar,
	id_provincia 		  	varchar,
	id_distrito			  	varchar,
	id_documento 		  	integer,
	nro_documento		  	varchar,
	nombre				    varchar,
	apaterno			    varchar,
	amaterno			    varchar,
	telefono			    varchar,
	direccion			    varchar,
	fecha_naci			  	date,
	id_sexo		 		 	integer,
	correo				    varchar,
	firma				    varchar,
	huella				    varchar,
	foto				    varchar,
	estado				    boolean)
as $$
	SELECT id,id_departamento,id_provincia,id_distrito,id_documento,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto,estado FROM persona per
	WHERE id_documento=_id_documento and nro_documento=_nro_documento;
	
$$ language sql;

CREATE OR REPLACE FUNCTION agregarPersona(
	_id_departamento 	varchar,
	_id_provincia 		varchar,
	_id_distrito		varchar,
	_id_documento	 	int,
	_nro_documento		varchar,
	_nombre				varchar,
	_apaterno			varchar,
	_amaterno			varchar,
	_telefono			varchar,
	_direccion			varchar,
	_fecha_naci			date,
	_id_sexo			int,
	_correo				varchar,
	_firma				varchar,
	_huella				varchar,
	_foto				varchar,
	out v_id_persona 	integer)
  RETURNS integer AS
  $BODY$
  DECLARE

	BEGIN
	INSERT INTO Persona	VALUES (DEFAULT,_id_departamento, _id_provincia, _id_distrito,_id_documento, _nro_documento, _nombre, _apaterno,_amaterno, _telefono, _direccion,
			_fecha_naci,_id_sexo,_correo, _firma,_huella,_foto, true) returning id INTO v_id_persona;
	END;
  $BODY$
  LANGUAGE 'plpgsql';
  
  CREATE OR REPLACE FUNCTION actualizarPersona(
	_id_documento	 	integer,
	_id_departamento 	varchar,
	_id_provincia 		varchar,
	_id_distrito		varchar,
	_nro_documento		varchar,
	_nombre				varchar,
	_apaterno			varchar,
	_amaterno			varchar,
	_telefono			varchar,
	_direccion			varchar,
	_fecha_naci			date,
	_id_sexo			integer,
	_correo				varchar,
	_firma				varchar,
	_huella				varchar,
	_foto				varchar,
	_id                 integer)
  RETURNS void AS
  $BODY$
  DECLARE
  		
	BEGIN
		UPDATE persona set id_documento=_id_documento,id_departamento=_id_departamento,id_provincia=_id_provincia,id_distrito=_id_distrito,nro_documento=_nro_documento,
		nombre=_nombre,apaterno=_apaterno,amaterno=_amaterno,telefono=_telefono,direccion=_direccion,fecha_naci=_fecha_naci,id_sexo=_id_sexo,correo=_correo,firma=_firma,
		huella=_huella,foto=_foto WHERE id=_id;
    END;
  $BODY$
  LANGUAGE 'plpgsql';

    CREATE OR REPLACE FUNCTION actualizarEmpresa(
	_id_departamento 	varchar,
	_id_provincia 		varchar,
	_id_distrito		varchar,
	_id_documento	 	integer,
	_nro_documento		varchar,
	_razon_social		varchar,
	_actividad_economica varchar,
	_telefono			varchar,
	_direccion			varchar,
	_correo				varchar,
	_contacto			varchar,
	_id                 integer)
  RETURNS void AS
  $BODY$
  DECLARE
  		
	BEGIN
		UPDATE empresa set id_departamento=_id_departamento,id_provincia=_id_provincia,id_distrito=_id_distrito,id_documento=_id_documento,nro_documento=_nro_documento,
		razon_social=_razon_social,actividad_economica=_actividad_economica,telefono=_telefono,direccion=_direccion,correo=_correo,contacto=_contacto
		WHERE id=_id;
    END;
  $BODY$
  LANGUAGE 'plpgsql';


/*
* FUNCIONES PARA LA TABLA ROL
*/

create or replace function listarRol()
returns table (
  id                integer,
  rol		        varchar,
  estado            boolean)
as $$
  select id,rol,estado from rol 
  where estado=true 
  order by id asc
$$ language sql;

create or replace function listarRolById(_id integer)
returns table (
	id 		integer,
	rol		varchar,
	estado	boolean)
as $$
	select id,rol,estado from rol 
	where id=_id
$$ language sql;

CREATE OR REPLACE FUNCTION agregarRol(
	_rol				varchar,
	out v_id_rol		int)
  RETURNS integer AS
  $BODY$
  DECLARE
		_id 			integer;
	BEGIN
	SELECT COALESCE(MAX(id+1),1) into _id from rol;
	INSERT INTO rol	VALUES (_id, _rol, true) returning id INTO v_id_rol;
	END;
  $BODY$
  LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION actualizarRol(
	_rol				varchar,
	_id					integer)
  RETURNS void AS
  $BODY$
  DECLARE
  		
	BEGIN
		UPDATE rol SET rol=_rol WHERE id=_id;
      END;
  $BODY$
  LANGUAGE 'plpgsql';


create or replace function eliminarRol(_id integer)
  RETURNS integer AS
  $BODY$
  DECLARE
    AFFECTEDROWS integer;
  BEGIN
    WITH a AS (UPDATE rol SET ESTADO=false  WHERE id = _id RETURNING 1)
    SELECT count(*) INTO AFFECTEDROWS FROM a;
    IF AFFECTEDROWS = 1 THEN
      RETURN 1;
    ELSE
      RETURN 0;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RETURN 0;
  END;
  $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;

/*
* FUNCIONES PARA LA TABLA USERS
*/

create or replace function listarUsuario()
returns table (
  id                integer,
  id_persona        integer,
  documento         varchar,
  nro_documento     varchar,
  nombre            varchar,
  rol            	varchar,
  usuario           varchar,
  foto              varchar,
  estado			boolean)
as $$
  select u.id,u.id_persona,d.documento,p.nro_documento,upper(p.nombre|| ' ' || p.apaterno) as nombre,r.rol,u.usuario,p.foto,u.estado from users u 
  inner join persona p on p.id=u.id_persona
  inner join documento d on d.id=p.id_documento
  inner join rol r on r.id=u.id_rol
  order by u.id asc
$$ language sql;


create or replace function listarUsuarioById(_id integer)
returns table (
  id              integer,
  id_persona      integer,
  id_rol          integer,
  usuario         varchar,
  password        varchar,
  estado		  boolean)
as $$
  select id,id_persona,id_rol,usuario,password,estado from users
  where id=_id
$$ language sql;

create or replace function listarUsuarioByIdPersona(_id_persona integer)
returns table (
	id 					integer,
	id_persona 			integer,
	id_rol 				integer,
	usuario				varchar,
	estado				boolean)
as $$
	select id,id_persona,id_rol,usuario,estado from users WHERE id_persona=_id_persona;
$$ language sql;

  create or replace function listarUsuarioByUsuario(_usuario varchar)
returns table (
	id 					integer,
	id_persona			integer,
	id_rol				integer,
	usuario				varchar,
	password			varchar)
as $$
	select id,id_persona,id_rol,usuario,password from users
	where usuario=_usuario
$$ language sql;


create or replace function validarUsuario(_usuario varchar)
returns table (
  id              integer,
  id_persona      integer,
  id_rol          integer,
  usuario         varchar,
  password        varchar,
  estado          boolean)
as $$
  select id,id_persona,id_rol,usuario,password,estado from users where usuario=_usuario and estado=true;
$$ language sql;


  create or replace function desactivarUsuario(_id integer)
  RETURNS integer AS
  $BODY$
  DECLARE
    AFFECTEDROWS integer;
  BEGIN
    WITH a AS (UPDATE users SET estado=false WHERE id = _id RETURNING 1)
    SELECT count(*) INTO AFFECTEDROWS FROM a;
    IF AFFECTEDROWS = 1 THEN
      RETURN 1;
    ELSE
      RETURN 0;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RETURN 0;
  END;
  $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;

  create or replace function activarUsuario(_id integer)
  RETURNS integer AS
  $BODY$
  DECLARE
    AFFECTEDROWS integer;
  BEGIN
    WITH a AS (UPDATE users SET estado=true WHERE id = _id RETURNING 1)
    SELECT count(*) INTO AFFECTEDROWS FROM a;
    IF AFFECTEDROWS = 1 THEN
      RETURN 1;
    ELSE
      RETURN 0;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RETURN 0;
  END;
  $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;

  
create or replace function listarModulosUsuario(_id_usuario int)
returns table (
  id            integer,
  modulo        varchar,
  url           varchar)
as $$
SELECT p.id,m.modulo,m.url FROM users u
inner join rol r on r.id=u.id_rol
inner join permiso p on p.id_rol=r.id
inner join modulo m on m.id=p.id_modulo
where u.id=_id_usuario 
order by p.id asc;

$$ language sql;

/*
* FUNCIONES PARA LA TABLA MODULO
*/

create or replace function listarModulo()
returns table (
	id 			integer, 
	modulo 		varchar,
	url 		varchar,
	estado 		boolean)
as $$
	select id,modulo,url,estado from modulo
	where estado=true order by id asc;
$$ language sql;

CREATE OR REPLACE FUNCTION agregarRolModulo(
	_id_rol			 	int,
	_id_modulo		 	int,
	out v_id_rol_modulo	int)
  RETURNS integer AS
  $BODY$
  DECLARE
		_id 			integer;
	BEGIN
	SELECT COALESCE(MAX(id+1),1) into _id from rol_modulo;
	INSERT INTO rol_modulo	VALUES (_id, _id_rol, _id_modulo, true) returning id INTO v_id_rol_modulo;
	END;
  $BODY$
  LANGUAGE 'plpgsql';

  /*
funciones para la tabla permiso
*/

  
create or replace function listarPermiso()
returns table (
	id 					integer,
	rol					varchar,
	modulo				varchar,
	estado				boolean)
as $$
	select p.id,r.rol,m.modulo,p.estado from permiso p
	inner join rol r on r.id=p.id_rol
	inner join modulo m on m.id=p.id_modulo
	order by r.rol ASC
$$ language sql;


CREATE OR REPLACE FUNCTION agregarPermiso(
	_id_rol		integer,
	_id_modulo	integer)
  RETURNS void AS
  $BODY$
  DECLARE
	BEGIN
	INSERT INTO permiso	VALUES (DEFAULT, _id_rol, _id_modulo,true);
    END;
  $BODY$
  LANGUAGE 'plpgsql';

          create or replace function eliminarPermiso(_id integer)
  RETURNS integer AS
  $BODY$
  DECLARE
    AFFECTEDROWS integer;
  BEGIN
    WITH a AS (DELETE FROM permiso WHERE id = _id RETURNING 1)
    SELECT count(*) INTO AFFECTEDROWS FROM a;
    IF AFFECTEDROWS = 1 THEN
      RETURN 1;
    ELSE
      RETURN 0;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RETURN 0;
  END;
  $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;


  /*
* FUNCIONES PARA LA TABLA EMPRESA
*/

create or replace function listarEmpresa()
returns table (
  id            varchar, 
  documento     varchar,
  nro_documento varchar,
  razon_social  varchar,
  actividad_economica  	varchar,
  telefono 	    varchar,
  direccion     varchar,
  correo    	varchar,
  contacto      varchar)
as $$
	select e.id,doc.documento,nro_documento,upper(razon_social),
	actividad_economica,telefono,direccion,correo,contacto from empresa e
	INNER JOIN documento doc on doc.id=e.id_documento
	order by e.id desc;
$$ language sql;



  create or replace function listarCotizacion(_fecha1 DATE,_fecha2 DATE)
returns table (
	id 					integer,
	empresa				varchar,
	usuario				varchar,
	cotizacion			varchar,
	total				decimal(8,2),
	descuento			decimal(8,2),
	observaciones		varchar)
as $$
	SELECT c.id,e.razon_social,pu.nombre,c.cotizacion,c.total,c.descuento,c.observaciones FROM cotizacion c
	inner join empresa e on e.id=c.id_empresa
	inner join users u on u.id=c.id_usuario
	inner join persona pu on pu.id=u.id_persona
	WHERE c.fecha between _fecha1 AND _fecha2 and c.estado=true;
$$ language sql;

  create or replace function listarEvento(_fecha1 DATE,_fecha2 DATE)
returns table (
	id 					integer,
	evento				varchar,
	fecha				varchar,
	hora				varchar)
as $$
	SELECT id,evento,to_char(fecha,'DD/MM/YYYY'),hora FROM evento e
	WHERE e.fecha between _fecha1 AND _fecha2 and e.estado=true;
$$ language sql;


create or replace function listarIngresos(_fecha1 DATE,_fecha2 DATE)
returns table (
	id 					integer,
	usuario				varchar,
	evento				varchar,
	padre_familia		varchar,
	monto				decimal(8,2),
	fecha				varchar,
	hora				varchar)
as $$
	select i.id,pu.nombre || ' ' || pu.apaterno ,e.evento,ppa.nombre || ' ' || ppa.apaterno || ' '  || ppa.amaterno,monto,to_char(i.fecha,'DD/MM/YYYY'),i.hora from ingreso i
	inner join users u on u.id=i.id_usuario
	inner join persona pu on pu.id=u.id_persona
	inner join evento e on e.id=i.id_evento
	inner join padre_apoderado pa on pa.id=i.id_padre_apoderado
	inner join persona ppa on ppa.id=pa.id_persona
$$ language sql;


create or replace function listarGastos(_fecha1 DATE,_fecha2 DATE)
returns table (
	id 					integer,
	usuario				varchar,
	concepto			varchar,
	monto				decimal(8,2),
	fecha				varchar,
	hora				varchar)
as $$
	select g.id,pu.nombre || ' ' || pu.apaterno || ' ' || pu.amaterno,concepto,monto,to_char(g.fecha,'DD/MM/YYYY'),g.hora from gasto g
	inner join users u on u.id=g.id_usuario
	inner join persona pu on pu.id=u.id_persona
$$ language sql;

select * from listarGastos('1011-04-12','1011-04-12')