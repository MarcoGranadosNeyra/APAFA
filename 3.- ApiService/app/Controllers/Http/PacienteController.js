'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const Handler = use('App/Exceptions/Handler')

class PacienteController {

    async listarPacienteByIdUsuario({auth}){

        const user = await auth.getUser()
        const paciente = await Database.table('paciente').where('id_persona', user.id_persona)
        const objPaciente = paciente[0]

            const objetoResult={
                result  : 1,
                message : "successful",
                paciente : objPaciente,
                }

            return objetoResult
    };

    


}

module.exports = PacienteController
