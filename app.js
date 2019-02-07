import express from 'express';
import bodyParser from 'body-parser';
import db from './src/db/db.js';
import router from './src/routes/index.js';

// Set up the express app
const app = express();

//parse incoming data request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

//define port @5000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
