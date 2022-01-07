const express = require('express')
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
// const authMiddleware = require("./auth-middleware");

// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

dotenv.config({ path: "./config.env" });

const host = process.env.HOST;
const port = process.env.PORT;

app.use(cors());

const profileDetails = [
  {
    id: 1,
    name: "Nargeeks",
    image:
      "https://nargeeks.com/images/nargeeks-logo.png",
  },
  {
    id: 2,
    name: "Rishav",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR35UrI9uDNUMDcIGlL7XzEIiarvKPSZXx8A&usqp=CAU",
  },

  {
    id: 3,
    name: "Nishikant",
    image: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg",
  },
  
  {
    id: 4,
    name: "Tazheeb",
    image: "https://www.example.image.jpg",
  },
];


app.get("/profileDetails", (request, response) => {
  return response.send({ profileDetails });
});


app.get('/', (req, res) => {
  res.send('Klubhop App backend is running in NodeJs Backend Server');
})

app.listen(port, host, () => {
  console.log(`Klubhop app listening at http://${host}:${port}`);
})


// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials
// const storage = new Storage();

// Creates a client from a Google service account key
// const storage = new Storage({
  
//   keyFilename: 'D:/klubhopwebapp/possible-flame-337210-a71cc19b7da5.json'
  
// });

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// async function createBucket() {
//   // Creates the new bucket
//   await storage.createBucket(bucketName);
//   console.log(`Bucket ${bucketName} created.`);
// }

// createBucket().catch(console.error);