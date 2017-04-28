var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'examPractice',
    charset: 'utf8'
  }
});

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(table) {
      table.increments().primary();
      table.string('userName');
      table.string('password');
      table.timestamps();
    }).createTable('pictures', function(table) {
      table.increments().primary();
      table.string('url');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.timestamps();
    });
  }
});

module.exports = knex;
