var express = require("express");
var router = express.Router();
var db = require("../config/mySQL");
var bodyParser = require("body-parser");

router.use(bodyParser.json());

// Example of Table

/*
    
CREATE TABLE products (
  id int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  price decimal(8,2) NOT NULL,
  active int(1) NOT NULL,
  created_at datetime NOT NULL
);

INSERT INTO products ('id', 'name', 'price', 'active', 'created_at') VALUES
(1, 'Laptop', 'Laptop', '40000.00', 1),
(2, 'CPU', 'cpu', '8000.00', 1),
(3, 'Keyboard', 'Keyboard', '600.00', 1);

*/

/* get method for fetch all products. */
router.get("/", function (req, res) {
   var sql = "SELECT * FROM products";
   db.query(sql, function (err, rows, fields) {
      if (err) {
         res.status(500).send({ error: "Internal Server error!" });
      }
      res.json(rows);
   });
});

/*get method for fetch single product*/
router.get("/:id", function (req, res) {
   var id = req.params.id;
   var sql = `SELECT * FROM products WHERE id=${id}`;
   db.query(sql, function (err, row, fields) {
      if (err) {
         res.status(500).send({ error: "Internal Server error!" });
      }
      res.json(row[0]);
   });
});

/*post method for create product*/
router.post("/create", function (req, res) {
   var name = req.body.name;
   var price = req.body.price;

   var sql = `INSERT INTO products (name, price, active, created_at) VALUES ("${name}", "${price}", 1, NOW())`;
   db.query(sql, function (err, result) {
      if (err) {
         res.status(500).send({ error: "Internal Server error!" });
      }
      res.json({ status: "success", id: result.insertId });
   });
});

/*put method for update product*/
router.put("/update/:id", function (req, res) {
   var id = req.params.id;
   var name = req.body.name;
   var price = req.body.price;

   var sql = `UPDATE products SET name="${name}", price="${price}" WHERE id=${id}`;
   db.query(sql, function (err, result) {
      if (err) {
         res.status(500).send({ error: "Internal Server error!" });
      }
      res.json({ status: "success" });
   });
});

/*delete method for delete product*/
router.delete("/delete/:id", function (req, res) {
   var id = req.params.id;
   var sql = `DELETE FROM products WHERE id=${id}`;
   db.query(sql, function (err, result) {
      if (err) {
         res.status(500).send({ error: "Internal Server error!" });
      }
      res.json({ status: "success" });
   });
});

module.exports = router;
