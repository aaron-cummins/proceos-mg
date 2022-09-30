const { config } = require("dotenv");
config();

const azure = {
  client_id: process.env.AZURE_CLIENT_ID,
  authority: process.env.AZURE_AUTHORITY,
  resirect_url: process.env.AZURE_REDIRECT_URL,
};

module.exports = {
  azure,
  puerto: process.env.PORT,
  db: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  }
};
