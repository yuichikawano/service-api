/* eslint-disable */

const dotenv = require('dotenv')

const stage = process.env.STAGE || 'local'
process.env.STAGE = stage
dotenv.config({ path: `./config/.env.local` })
dotenv.config({ path: `./config/.${stage}.env` })
dotenv.config({ path: `./config/.env` })

const DB_URL = process.env.DB_URL.replace('\\\\$', '$')

module.exports = {
    type: 'mysql',
    url: DB_URL,
    synchronize: false,
    entities: ['dist/src/entities/**/*.entities.js'],
    migrations: ['dist/src/db/migrations/**/*.js'],
    subscribers: ['dist/src/db/subscribers/**/*.js'],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/db/migrations',
        subscribersDir: 'src/db/subscribers',
    },
}
