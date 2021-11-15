exports.seed = function (knex) {
 

  const users = [
    {
      username: "Priscila", password: "1234"
    },
    {
      username: "Amethyst", password: "1234"
    },
    {
      username: "David", password: "1234"
    },
    {
      username: "Irvin", password: "1234"
    },
    {
      username: "Matt", password: "1234"
    },
    {
      username: "Nelson", password: "1234"
    },
    {
      username: "Shanae", password: "1234"
    }
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
