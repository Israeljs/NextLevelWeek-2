import Knex from 'knex';

// Parâmetros para fazer as configurações no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('create_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

// Parâmetros para desfazer as alterações listadas acima no banco, caso seja necessário
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}