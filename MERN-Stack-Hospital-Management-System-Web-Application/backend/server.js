import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';

dotenv.config();

const app = express();

dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
