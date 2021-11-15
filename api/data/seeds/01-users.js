exports.seed = function (knex) {
 

  const users = [
    {
      username: "Priscila", password: "1234", email: "priscila@test.com"
    },
    {
      username: "Amethyst", password: "1234", email: "amethyst@test.com"
    },
    {
      username: "David", password: "1234", email: "david@test.com"
    },
    {
      username: "Irvin", password: "1234", email: "irvin@test.com"
    },
    {
      username: "Matt", password: "1234", email: "matt@test.com"
    },
    {
      username: "Nelson", password: "1234", email: "nelson@test.com"
    },
    {
      username: "Shanae", password: "1234", email: "shanae@test.com"
    }
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
