
const rootDir = (process.env.NODE_ENV || "").toLocaleLowerCase() === 'production' ? 'dist' : 'src'

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
      `${rootDir}/domain/entities/**/*`
   ],
   "migrations": [
      `${rootDir}/database/migration/**/*`
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
   }
}