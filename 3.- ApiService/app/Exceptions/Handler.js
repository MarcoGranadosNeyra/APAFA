'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {

  async handle (error, { request, response }) {
    
      
      if (error.code === 'E_USER_NOT_FOUND') {

        return response.json({
          result: '0',
          message: 'El usuario No Existe'
        })
      }

      if (error.code === 'E_PASSWORD_MISMATCH') {
        return response.json({
          result: '0',
          message: 'La contraseña es Incorrecta'
        })
      }
  
      return super.handle(...arguments)

  }
}

module.exports = ExceptionHandler
