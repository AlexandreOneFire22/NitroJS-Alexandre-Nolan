//https://nitro.unjs.io/config

export default defineNitroConfig({
  routeRules: {
    '/**': {
      // Configuration minimale qui marche à coup sûr
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
  },
  srcDir: "server",

  experimental: {
    database: true
  },

  database: {
    default: {
      connector: 'mysql2',
      options: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "db_cinematic"
      }
    }
  },

  compatibilityDate: '2025-03-24'
})