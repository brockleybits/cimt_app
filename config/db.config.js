module.exports = {
  HOST: "localhost",
  USER: "user",
  PASSWORD: "pass",
  DB: "cis197_spring_2021",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
