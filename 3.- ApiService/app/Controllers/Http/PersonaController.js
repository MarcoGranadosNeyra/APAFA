'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const Handler = use('App/Exceptions/Handler')

class PersonaController {

    async listarDepartamento(){
        const res = await Database.raw('SELECT * FROM listarDepartamento()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async listarProvinciaByIdDepartamento({params}){
        const id = params.id;
        const res = await Database.raw('SELECT * FROM listarProvincia(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async listarDistritoByIdProvincia({params}){
        const id = params.id;
        const res = await Database.raw('SELECT * FROM listarDistrito(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
        
    };

    async listarDocumento(){
        const res = await Database.raw('SELECT * FROM listarDocumento()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
        
    };

    async listarSexo(){
        const res = await Database.raw('SELECT * FROM listarSexo()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

   
    async listarPersona(){
        const res = await Database.raw('SELECT * FROM listarPersona()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };


    async listarPersonaById({params}){
      
        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarPersonaById(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objPersona = jsonData[0]
        return objPersona
    };

    
    async listarPersonaByDNI({request}){
      
        const {id_documento,nro_documento}=request.all();

        const res = await Database.raw('SELECT * FROM listarPersonaByDNI(?,?)', [id_documento,nro_documento])
        const jsonDataPersona = JSON.parse(JSON.stringify(res.rows));
        const objPersona = jsonDataPersona[0]

       try{
            const resUsuario = await Database.raw('SELECT * FROM listarUsuarioByIdPersona(?)', [objPersona.id])
            const jsonDataUsuario = JSON.parse(JSON.stringify(resUsuario.rows));
            const objUsuario = jsonDataUsuario[0]


            if(objUsuario!=null){
                const objetoResult={
                    result  : 1,
                    message : "successful",
                    persona : objPersona,
                    usuario : objUsuario
                    }
                return objetoResult

            }else{
                const objetoResult={
                    result  : 2,
                    message : "successful",
                    persona : objPersona
                    }
                return objetoResult

            }

        }catch (e) {
            const objetoResult={
                result  : 0,
                message : "registro no encontrado",
                }
            return objetoResult
        }
        
    };

    async agregarPersona({request}){

        try {
            const {id_documento,id_departamento,id_provincia,id_distrito,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto}=request.all();
            
            const res = await Database.raw('SELECT agregarPersona(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [id_departamento,id_provincia,id_distrito,id_documento,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto])
            const jsonData = JSON.parse(JSON.stringify(res.rows));
            const objPersona = jsonData[0]

            const id_persona=objPersona.agregarpersona;
            
            return {
                result  : 1,
                message : "successful",
                id_persona : id_persona
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };

    
    async agregarPersonaLogin({request,response}){

        try {
            const {usuario,password,id_documento,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo}=request.all();

            const res = await Database.raw('SELECT agregarPersonaLogin(?,?,?,?,?,?,?,?,?,?)', [id_documento,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo])
             
             const jsonData = JSON.parse(JSON.stringify(res.rows));
             const objSucursal = jsonData[0]
 
             const id_persona=objSucursal.agregarpersonalogin;
                
             const user = await User.create({
                     id_persona:id_persona,
                     id_rol:2,
                     usuario,
                     password,
                     estado:true
             });
     
             return {
                result  : 1,
                message : "successful"
            }
        } catch (e) {

            return {
                result  : 1,
                message : e
                
            }
        }       
    };


    async actualizarPersona({params,request}){
        
        try {
            const id = parseInt(params.id);
            const {id_documento,id_departamento,id_provincia,id_distrito,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto}=request.all();
            
            const res = await Database.raw('SELECT actualizarPersona(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [id_documento,id_departamento,id_provincia,id_distrito,nro_documento,nombre,apaterno,amaterno,telefono,direccion,fecha_naci,id_sexo,correo,firma,huella,foto,id])
             
            return  {
                result  : 1,
                message : "successful"
                    }
            
        } catch (e) {
            return {
                result  : 1,
                message : e
            }
        }
        
    };

    async eliminarPersona({params,res}){
       
        try {
            const id = parseInt(params.id);
            const resultado = await Database.raw('SELECT eliminarPersona(?)', [id])

            return {
                message : 1
            }
          
        } catch (e) {
            return {
                message : 0,
                error : e
             }
        }
        
    };



}

module.exports = PersonaController
