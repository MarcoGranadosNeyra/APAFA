'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class ModuloController {

    async listarModulo({}){
        const res = await Database.raw('SELECT * FROM listarModulo()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };






}

module.exports = ModuloController
