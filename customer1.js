var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,

	// My username
	user: "root",

	// My password
	password: "Black233!",
	database: "bamazon_DB"
});

// connecting to mysql
connection.connect(function(err) {
	console.log("Connected as id: "+connection.threadId);
	queryAllProducts();

});

// running through the list of all the products and information that is displayed in mysql and then displays them on the command line
function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
    startPurchase();
  });
}

function startPurchase() {

	connection.query("SELECT * FROM products", function(err, results) {
	inquirer
	 .prompt([
	 {
	 	name: "choice",
	 	type: "input",
	 	message: "What is the ID number of the product you would like to purchase?"
	 },
	 {
	 	name: "quantityDesired",
	 	type: "input",
	 	message: "How many units of the product would you like to purchase?",
	  }
		]).then(function(answer) {


			var chosenItem = results[answer.choice - 1].product_name;
			var quantity = answer.quantityDesired;

			console.log("You have purchased " + quantity + " " +  chosenItem);
			//console.log(quantity);		
			
			// statement below is checking if quantity person entered is more than we have in stock order cannot
			if(quantity > results[0].stock_quantity) {
				console.log("sorry we dont have that amount in stock to fulfill that order");
			}
			else {
				console.log("Your order will be shipped momentarily");
			}
		});

	});
};




function updateDB ()  {

	//here would be the code to update My SQL database
}










	