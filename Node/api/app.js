const express = require("express");
const app = express();
const port = 5000;

const productsRouter = require("./routes/products");

// body parser for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", productsRouter);

app.listen(port, (err) => {
   if (err) {
      console.log("Error in running the Server:", port);
   }
   console.log("Server is running on port:", port);
});
