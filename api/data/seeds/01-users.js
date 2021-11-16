exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          username: "priscila", password: "1234", email: "priscila@test.com"
        },
        {
          username: "amethyst", password: "1234", email: "amethyst@test.com"
        },
        {
          username: "david", password: "1234", email: "david@test.com"
        },
        {
          username: "irvin", password: "1234", email: "irvin@test.com"
        },
        {
          username: "matt", password: "1234", email: "matt@test.com"
        },
        {
          username: "nelson", password: "1234", email: "nelson@test.com"
        },
        {
          username: "shanae", password: "1234", email: "shanae@test.com"
        }
        
      ]);
    });
};
