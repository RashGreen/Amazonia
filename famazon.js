var mysql = require("mysql");
var inquirer = require("inquirer")
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "dangerdanger85",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  listProducts();
});

function listProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log( res[i].item_id + " | " + res[i].product_name + " | " 
      + res[i].price + " | " + res[i].department_name + " | " + res[i].quanity);
    }
    console.log("-----------------------------------");
  });
}
inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What would you like to purchase?",
      name: "product_name",
    },
    {
      type: "input",
      message: "How many would you like to purchase?",
      name: "quantity",
    },
    {
      type: "input",
      message: "now just give us your social... dont worry, we'll find you.",
      name: "shakedown"
    },
  ])
 
//   .then(function(inquirerResponse) {
//         if (inquirerResponse.confirm) {
//       console.log("\n you want: " + inquirerResponse.product_id);
//       console.log("Your " + inquirerResponse.quanity + " is on its way!\n");
//     }
//     else {
//       console.log("Sorry " + inquirerResponse.product_name + " is unavalible. Please, Try again.");
//     }
//     deleteProduct(inquirerResponse.affectedRows)
//   });
// function deleteProduct() {
//   console.log("Pulling from the stockroom...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       product_id: inquirerResponse
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " got it!\n");
//       // Call listProducts AFTER the DELETE completes
//       listProducts();
//     }
//   );
// }
  

