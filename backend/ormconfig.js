module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "extra": {
      "ssl": {
         rejectUnauthorized: false
      }
   },
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
   }
}