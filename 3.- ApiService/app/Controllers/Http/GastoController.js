'use strict'

const Database = use('Database')

class GastoController {

    async listarGastos({request}){

        const {fecha1,fecha2}=request.all();
         const res = await Database.raw('SELECT * FROM listarGastos(?,?)',[fecha1,fecha2])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    
    };


}

module.exports = GastoController
