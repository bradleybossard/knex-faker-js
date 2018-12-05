module.exports = {
  development: {
    client: "postgresql", // Ensure you specify your particular client here
    connection: "postgresql://localhost:5432/{$databaseName}, // Make sure you use your specific database connection here
    migration: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
}
