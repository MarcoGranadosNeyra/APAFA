'use strict'

const Database = use('Database')

class CitaController {

    async listarCita(){
        const res = await Database.raw('SELECT * FROM listarCita()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };


    async listarCitaById({params}){

        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarCitaById(?)',[id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objCita = jsonData[0]
        return objCita
    };

 
    async agregarCita({request}){

        try {
            const {id_paciente,id_calendario,id_especialidad,id_examen,fecha,hora}=request.all();
                const calendario = await Database.raw('SELECT * FROM listarCalendarioLibre(?)',[id_calendario])
                const jsonData = JSON.parse(JSON.stringify(calendario.rows));
                const objCalendario = jsonData[0]
                if (objCalendario==null) {
                    return {
                        result : 0,
                        message : "Esta cita ya esta reservada!"
                    }

                } else {
                    const res = await Database.raw('SELECT agregarCita(?,?,?,?,?,?)',[id_paciente,id_calendario,id_especialidad,id_examen,fecha,hora])
                    const jsonData = JSON.parse(JSON.stringify(res.rows));
                    const objetCita=jsonData[0]
            
                    const id_cita=objetCita.agregarcita;
    
                    return {
                        result  : 1,
                        message : "successful",
                        id_cita : id_cita
                    }
                }

        } catch (error) {
            return {
                result  : 0,
                message : error
            }
        }

 
        
};


    async actualizarCita({params,request}){
        try {
            const id = parseInt(params.id);
            const {id_calendario,fecha,hora}=request.all();
            
            const res = await Database.raw('SELECT actualizarCita(?,?,?,?)',  [id_calendario,fecha,hora,id])
            return {
                message : 1
            }
            Database.close()
        } catch (e) {
            return {
                message : 0
            }
        }    
    };

    async eliminarCita({params,res}){
       
        try {
            const id = parseInt(params.id);
            const resultado = await Database.raw('SELECT eliminarCita(?)', [id])

            return {
                message : 1
            }
          
        } catch (e) {
            return {
                message : 0
             }
        }
        
    };


/*LISTA POR ID DE USUARIO LOGEADO CON TOKEN Y OBTIENE EL ID CITA PARA REGISTRAR EL PAGO */

async listarMiCita({params,request,auth,response}){

    const id_cita = parseInt(params.id);

    const user = await auth.getUser()
   
    const usuario = await Database.table('users').where('id', user.id)
    const objUsuario = usuario[0]

    const persona = await Database.table('persona').where('id', user.id_persona)
    const objPersona= persona[0]


    const cita = await Database.table('cita').where('id', parseInt(id_cita))
    const objCita= cita[0]

    const calendario = await Database.table('calendario').where('id', objCita.id_calendario)
    const objCalendario= calendario[0]

    const medico = await Database.table('medico').where('id', objCalendario.id_medico)
    const objMedico= medico[0]

    const res = await Database.raw('SELECT * FROM listarEspecialidadById(?)',[objMedico.id_especialidad])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objEspecialidad = jsonData[0]
    
    const objet={
        persona         : objPersona,
        cita            : objCita,
        especialidad    : objEspecialidad
        }

    return response.json(objet)

};


/*LISTA POR ID DE USUARIO LOGEADO CON TOKEN Y OBTIENE EL ID CITA PARA REGISTRAR EL PAGO */

async listarCitaRecepcion({params,request,response}){

    const id_cita = parseInt(params.id);

    const cita = await Database.table('cita').where('id', parseInt(id_cita))
    const objCita= cita[0]

    
    const paciente = await Database.table('paciente').where('id', objCita.id_paciente)
    const objPaciente= paciente[0]

    
    const persona = await Database.table('persona').where('id', objPaciente.id_persona)
    const objPersona= persona[0]

    const calendario = await Database.table('calendario').where('id', objCita.id_calendario)
    const objCalendario= calendario[0]

    const medico = await Database.table('medico').where('id', objCalendario.id_medico)
    const objMedico= medico[0]

    const res = await Database.raw('SELECT * FROM listarEspecialidadById(?)',[objMedico.id_especialidad])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objEspecialidad = jsonData[0]
    
    const objet={
        persona         : objPersona,
        cita            : objCita,
        especialidad    : objEspecialidad
        }

    return response.json(objet)

};



async listarCitaByIdRecepcion({params}){

    const id = parseInt(params.id);
    const res = await Database.raw('SELECT * FROM listarCitaByIdRecepcion(?)',[id])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objCita = jsonData[0]
    return objCita
};



}

module.exports = CitaController
