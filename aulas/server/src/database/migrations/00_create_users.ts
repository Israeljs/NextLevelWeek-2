import knex from 'knex';
import Knex from 'knex';

// Parâmetros para fazer as configurações no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  })
}

// Parâmetros para desfazer as alterações listadas acima no banco, caso seja necessário
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}