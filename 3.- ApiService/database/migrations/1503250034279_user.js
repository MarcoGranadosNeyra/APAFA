'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
table.increments()
      table.integer('id_persona').unsigned().references('id').inTable('persona')
      table.integer('id_rol').unsigned().references('id').inTable('rol')
      table.string('usuario', 80).notNullable().unique()
      table.string('password', 80).notNullable()
      table.boolean('estado',).notNullable()
      table.timestamps()
      
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
