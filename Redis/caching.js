/* Client side caching in redis */
/* We can use client-side caching in Redis to enhance the performance of our application .
Normally when some data is required, the application server ask the database for information/data.
But When we use client side caching, the application will store the reply of popular query directly inside the application memory,so that it can reuse such replies later, without contacting the database again and the application performance is increases
if we have some data coming from a third-party API, and that data won't be changed in the future we can store them in cache once we retrieve them and avoid unnecessary service calls. In this way, we do not have to wait for the API call to complete, as we already have them, and we can retrieve them from cache.*/

/* You can follow this reference */
const express = require("express");
const axios = require("axios");
const redis = require("redis");
const PORT = process.env.PORT || 8000;
const REDIS_PORT = process.env.PORT || 6379;
const app = express();

const client = redis.createClient(REDIS_PORT);

// Route for get request
app.get("/", getData());

// get your data from api
async function getData(req, res, next) {
   try {
      const response = await axios.get("PUT YOUR URL HERE");
      const data = await response.json();

      // Set your data into Redis
      client.setex(names, data); // Here "name" is key and "data" is value
      next();
   } catch (err) {
      console.log("Error", err);
   }
}

app.listen(PORT, (err) => {
   if (err) {
      console.log(`Error in running the server on port: ${PORT}`);
   }
   console.log(`Server is running on port ${PORT}`);
});
