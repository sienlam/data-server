const config = {};

config.PORT = 1200;
config.PAYMENT_PORT = 8002;
config.PRIVATE_PORT = 8200;
config.REDIS_PORT = 6300;
config.REDIS_HOST = 'redis';
config.REDIS_PASSWORD = 'ss123123';
config.MAX_PLAYERS = 1000;
config.DEFAULT_DATABASE_TYPE = 'mysql';

config.DB_HOST = '127.0.0.1';
config.DB_USER = 'root';
config.DB_PASSWORD = 'ss123123';
config.DB_PORT = '3306';
config.DB_SCHEMA = 'test';

config.SQLITE_PATH = "./temp.sqlite3";

module.exports = config;
