const express = require('express')
const dotenv = require("dotenv");
const app = express()


dotenv.config({ path: "./config.env" });

const host = process.env.HOST;
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Klubhop App backend is running in NodeJs Backend Server');
})

app.listen(port, host, () => {
//   console.log(`Klubhop app listening at http://${host}:${port}`);
})