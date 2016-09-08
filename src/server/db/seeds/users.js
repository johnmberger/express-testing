
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'jberger', email: 'jberger@gmail.com'}),
        knex('users').insert({username: 'aglassford', email: 'alex@gmail.com'}),
        knex('users').insert({username: 'icollier', email: 'isacol@gmail.com'}),
        knex('users').insert({username: 'amahan', email: 'austin@yahoo.com'})
      ]);
    });
};
