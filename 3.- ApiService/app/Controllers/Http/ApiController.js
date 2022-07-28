'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class ApiController {

    async listarDia(){
        const res=  await Database.table('dia').orderBy('id', 'asc')
        return res;
    };

    async listarHora(){
        const res=  await Database.table('hora').orderBy('id', 'asc')
        return res;
    };

    async agregarPago({request}){

        try {
            
            const {id_cita,id_paciente,id_especialidad,precio_pago,number_card,expire_card,ccv_card}=request.all();

            const res = await Database.raw('SELECT agregarPago(?,?,?,?,?,?,?)', [id_cita,id_paciente,id_especialidad,precio_pago,number_card,expire_card,ccv_card])
            return {
                message : 1
            }
           
        } catch (e) {
            return {
                message : 0
            }
        }  
    };

async cancelarPago({params,response}){
    try {
        const id = parseInt(params.id);
        const res = await Database.raw('SELECT cancelarPago(?)', [id])
        return {
            message : 1
        }
       
    } catch (e) {
        return {
            message : 0
        }
    }  
};


/*LISTA LAS CITAS PENDIENTES DEL USUARIO - PARAMETRO ID USUARIO */
async listarCitasPendientes({params,auth,response}){
      
    //const id = parseInt(params.id);
    const user = await auth.getUser()
    const paciente = await Database.table('paciente').where('id_persona', user.id_persona)
    const objPaciente = paciente[0]
    const res = await Database.raw('SELECT * FROM listarCitasPendientes(?)',[objPaciente.id])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

/*LISTA LAS CITAS REPROGRAMADAS POR EL MEDICO - PARAMETRO ID USUARIO */
async listarCitasreprogramadas({params,auth,response}){
    
    const user = await auth.getUser()
    const paciente = await Database.table('paciente').where('id_persona', user.id_persona)
    const objPaciente = paciente[0]
    const res = await Database.raw('SELECT * FROM listarCitasreprogramadas(?)',[objPaciente.id])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

/*LISTA LAS CITAS PENDIENTES DEL MEDICO - PARAMETRO ID MEDICO */

async listarPacientesPorMedico({request,auth,response}){

    const user = await auth.getUser()
    const medico = await Database.table('medico').where('id_persona', user.id_persona)
    const objMedico = medico[0]
    const res = await Database.raw('SELECT * FROM listarPacientesPorMedico(?)',[objMedico.id])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData
    
};

/*REPORTE DE ATENCIONES DEL MEDICO - PARAMETRO ID MEDICO */
async reportePacientesAtendidos({request,auth,response}){

    const {fecha1,fecha2}=request.all();
    const user = await auth.getUser()
    const medico = await Database.table('medico').where('id_persona', user.id_persona)
    const objMedico = medico[0]
    const res = await Database.raw('SELECT * FROM reportePacientesAtendidos(?,?,?)',[objMedico.id,fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData
};

/*REPORTE DE CITAS ATENDIDAS DEL PACIENTE - PARAMETRO ID PACIENTE DEL TOKEN, Y FECHAN1 Y FECHA2*/
async reporteCitasAtendidas({request,auth,response}){

    const {fecha1,fecha2}=request.all();
    const user = await auth.getUser()
    const paciente = await Database.table('paciente').where('id_persona', user.id_persona)
    const objPaciente = paciente[0]
    const res = await Database.raw('SELECT * FROM reporteCitasAtendidas(?,?,?)',[objPaciente.id,fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData
};

/*CAMBIA EL ESTADO DE CITA PENDIENTE A CITA ATENDIDA - atendido=true */
async atenderCita({params,response}){
       try{
        const id = parseInt(params.id);
        const resultado = await Database.raw('SELECT atenderCita(?)', [id])
        return {
            message : 1
        }
       
    } catch (e) {
        return {
            message : 0
        }
    }  
};

async reprogramarCita({params,response}){
    try{
    const id = parseInt(params.id);
    const resultado = await Database.raw('SELECT reprogramarCita(?)', [id])
    return {
        message : 1
    }
   
} catch (e) {
    return {
        message : 0
    }
}  
};



async listarTotalIngresos(){
      
    const res = await Database.raw('SELECT * FROM listarTotalIngresos()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
};


async listarTotalIngresosHoy(){
      
    const res = await Database.raw('SELECT * FROM listarTotalIngresosHoy()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
};

async listarTotalDescuentos(){
      
    const res = await Database.raw('SELECT * FROM listarTotalDescuentos()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
};

async listarTotalDescuentosHoy(){
      
    const res = await Database.raw('SELECT * FROM listarTotalDescuentosHoy()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
};

async totalCitasPendientes(){
    
    const res = await Database.raw('SELECT * FROM totalCitasPendientes()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData

};


async totalCitasAtendidas(){
    
    const res = await Database.raw('SELECT * FROM totalCitasAtendidas()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
    
};


async listarFormaPago(){
    
    const res = await Database.raw('SELECT * FROM listarFormaPago()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

async agregarPagoRecepcion({request}){

    try {
        
        const {id_cita,id_forma_pago,id_paciente,id_especialidad,precio_pago,descuento}=request.all();

        const res = await Database.raw('SELECT agregarPagoRecepcion(?,?,?,?,?,?)', [id_cita,id_forma_pago,id_paciente,id_especialidad,precio_pago,descuento])
        return {
            message : 1
        }
       
    } catch (e) {
        return {
            message : 0
        }
    }  
};



async listarSeguro(){
    
    const res = await Database.raw('SELECT * FROM listarSeguro()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};


async reporteIngresos({request,response}){

    const {fecha1,fecha2}=request.all();
    const res = await Database.raw('SELECT * FROM reporteIngresos(?,?)',[fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

async reporteIngresosTotal({request,response}){

    const {fecha1,fecha2}=request.all();
    const res = await Database.raw('SELECT * FROM reporteIngresosTotal(?,?)',[fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
    
};

/*REPORTE DE ATENCIONES DEL MEDICO - PARAMETRO ID MEDICO */
async reporteDescuentos({request,response}){

    const {fecha1,fecha2}=request.all();
    const res = await Database.raw('SELECT * FROM reporteDescuentos(?,?)',[fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData
    
};

async reporteDescuentosTotal({request,response}){

    const {fecha1,fecha2}=request.all();
    const res = await Database.raw('SELECT * FROM reporteDescuentosTotal(?,?)',[fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData
    
};

/*LISTA LAS CITAS PENDIENTES DEL USUARIO - PARAMETRO ID USUARIO */
async listarCitasPendientesRecepcion({params,response}){
      
    const res = await Database.raw('SELECT * FROM listarCitasPendientesRecepcion()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

async listarIngresosRecepcion({params,response}){
      
    const res = await Database.raw('SELECT * FROM listarIngresosRecepcion()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

async cuadrarCajaRecepcion({params,response}){
      
    const res = await Database.raw('SELECT * FROM cuadrarCajaRecepcion()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    return jsonData

};

async listarIngresosEfectivorecepcion({params,response}){
      
    const res = await Database.raw('SELECT * FROM listarIngresosEfectivorecepcion()')
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    const objsonData = jsonData[0]
    return objsonData

};


async listarReporteEspecialidades({request,response}){

    const {fecha1,fecha2}=request.all();
    const res = await Database.raw('SELECT * FROM listarReporteEspecialidades(?,?)',[fecha1,fecha2])
    const jsonData = JSON.parse(JSON.stringify(res.rows));
    //const objsonData = jsonData[0]
    return jsonData
    
};

async recibirData({request,response}){

    console.log(request.all())

};



}

module.exports = ApiController
