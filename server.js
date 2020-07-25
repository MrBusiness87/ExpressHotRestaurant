// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { getMaxListeners } = require("process");
const { clearLine } = require("readline");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Customer Questions (DATA)
// =============================================================
var table = [
{
    customerName: Healey,  
    phoneNumber: 1-919-555-5555, 
    customerEmail:summer.healey@gmail.com,
    customerID: 725001, 
},
{
    customerName: Kumar, 
    phoneNumber: 1-919-555-5555, 
    customerEmail:suresh.kumar@gmail.com,
    customerID: 725002, 
},
{
    customerName: Sims, 
    phoneNumber: 1-919-555-5555, 
    customerEmail: aaron.sims@gmail.com,
    customerID: 725003, 
},
{
    customerName: Bartula, 
    phoneNumber: 1-919-555-5555,  
    customerEmail: borjan.bartula@gmail.com,
    customerID: 725004, 
},
{
    customerName: Vega, 
    phoneNumber: 1-919-555-5555,  
    customerEmail: carl.vega@gmail.com,
    customerID: 725005, 
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all customers
app.get("/api/customers", function(req, res) {
  return res.json(customers);
});

// Displays a single character, or returns false
app.get("/api/customers/:customers", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < customers.length; i++) {
    if (chosen === customers[i].routeName) {
      return res.json(customers[i]);
    }
  }

  return res.json(false);
});

// Create New customers - takes in JSON input
app.post("/api/customers", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCustomer = req.body;

  // Using a RegEx Pattern to remove spaces from newCustomer
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  customers.push(newCustomer);

  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


