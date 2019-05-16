require('dotenv').config();

const config = {
  envPort: process.env.PORT,
  sendgridKey: process.env.SENDGRID,
  emailAddress: process.env.EMAIL,
  mongoURI: process.env.MONGO,
  nodeENV: process.env.ENV,
};

module.exports = config;
