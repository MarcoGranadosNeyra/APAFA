'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class UsuarioController {

    async listarUsuario({request,auth}){
        const res = await Database.raw('SELECT * FROM listarUsuario()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };


    async buscarUsuario({request}){
    
        const {usuario}=request.all();
        
        const res = await Database.raw('SELECT * FROM listarUsuarioByUsuario(?)', [usuario])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objUsuario = jsonData[0]

        if (objUsuario==null) {
            return {
                result : 0,
                message : "usuario no encontrado"
            }
        } else {
            return {
                result : 1,
                message : "successful"
            }
        }
    };

    async listarUsuarioByIdPersona({params}){
      
        const id = parseInt(params.id);
        
        const respersona = await Database.raw('SELECT * FROM listarPersonaById(?)', [id])
        const jsonDataPersona = JSON.parse(JSON.stringify(respersona.rows));
        const objPersona = jsonDataPersona[0]

        const res = await Database.raw('SELECT * FROM listarUsuarioByIdPersona(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objUsuario = jsonData[0]

        if (objUsuario==null) {
            return {
                result : 0,
                message : "usuario no encontrado",
                persona : objPersona
            }
        } else {
            return {
                result : 1,
                message : "successful",
                persona : objPersona,
                usuario : objUsuario
            }
        }
        
    };
    //agregar usuario desde el modulo administracion con bcryp
    
    async agregarUsuario({request}){
        try {
            const {id_persona,id_rol,usuario,password}=request.all();
            
            const user = await User.create({
                id_persona,
                id_rol,
                usuario,
                password,
                estado:true});

            const objetoResult={
                result : 1,
                message : "successful"
                }

            return objetoResult

        } catch (e) {
            const objetoResult={
                result : 0,
                message : e
                }

            return objetoResult
        }
    };
    /*
    async agregarUsuarioPoliclinico({request}){
        try {
            const {id_persona,id_rol,usuario,password}=request.all();
            const res = await Database.raw('SELECT agregarUsuario(?,?,?,?,?)', [id_persona,id_rol,1,usuario,password])
            
            return {
                result  : 1,
                message : "successful"
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };
*/
    async agregarUsuarioPaciente({request}){

        try {
            
            const {usuario,password,id_documento,id_departamento,id_provincia,id_distrito,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto}=request.all();

            const res = await Database.raw('SELECT agregarPersona(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [id_departamento,id_provincia,id_distrito,id_documento,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto])
            const jsonData = JSON.parse(JSON.stringify(res.rows));
            const objPersona = jsonData[0]

            const id_persona=objPersona.agregarpersona;
           
            const user = await User.create({
                id_persona,
                id_rol:2,
                id_tipo_usuario:2,
                usuario,
                password,
                estado:true
            });
    
            const objetoResult={
                result : 1,
                message : "successful"
                }

            return objetoResult

        } catch (e) {
            const objetoResult={
                result : 0,
                message : e
                }

            return objetoResult
        }

    };

    async desactivarUsuario({params}){

            const id = parseInt(params.id);
            const resultado = await Database.raw('SELECT desactivarUsuario(?)', [id])
            const jsonData = JSON.parse(JSON.stringify(resultado.rows));
            const objUsuario = jsonData[0]

            var message="successful"

            if (objUsuario.desactivarusuario===0){
                message="Error al Desactivar Registro Nro : " + id
            }

            const objetoResult={
                result  : objUsuario.desactivarusuario,
                message :   message
                }

            return objetoResult
    };

    async activarUsuario({params}){

        const id = parseInt(params.id);
        const resultado = await Database.raw('SELECT activarUsuario(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objUsuario = jsonData[0]

        var message="successful"

        if (objUsuario.activarusuario===0){
            message="Error al Activar Registro Nro : " + id
        }

        const objetoResult={
            result  : objUsuario.activarusuario,
            message :   message
            }

        return objetoResult
};

    async login({request,auth,response}){

        var result = 0
        var message = ""

        const {usuario,password}=request.all();
        console.log(request.all());
        const token = await auth.attempt(usuario,password);
        const user = await Database.raw('SELECT * FROM validarUsuario(?)', [usuario])
        const jsonData = JSON.parse(JSON.stringify(user.rows));
        const objUsuario = jsonData[0]

        try{
            const rol = await Database.table('rol').where('id', objUsuario.id_rol)
            const objRol= rol[0]

            result = 1
            message = "successful"

            const objetoResult={
                result  : result,
                message : message,
                token   : token.token,
                usuario : objUsuario,
                rol : objRol
                }

            return objetoResult

        }catch (e) {
            const objetoResult={
                result  : 0,
                message : "El Usuario ha sido Desactivado por el Administrador del Sistema"
                }

            return objetoResult
        }
        
    };

    async listarModulosUsuario({auth}){

        const user = await auth.getUser()
        const modulos = await Database.raw('SELECT * FROM listarModulosUsuario(?)', [user.id])
        const jsonDataModulos = JSON.parse(JSON.stringify(modulos.rows));

        const persona = await Database.table('persona').where('id', user.id_persona)
        const objPersona = persona[0]
        const rol = await Database.table('rol').where('id', user.id_rol)
        const objRol = rol[0]

            const objetoResult={
                result  : 1,
                message : "successful",
                rol     : objRol,
                persona : objPersona,
                modulos : jsonDataModulos
                }

            return objetoResult
    };

    async perfilUsuario({auth}){

        const user = await auth.getUser()
        const persona = await Database.raw('SELECT * FROM listarPersonaById(?)', [user.id_persona])
        const jsonDataPersona = JSON.parse(JSON.stringify(persona.rows));

            const objetoResult={
                result  : 1,
                message : "successful",
                persona : jsonDataPersona,
                }

            return objetoResult
    };

}

module.exports = UsuarioController
