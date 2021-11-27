var inquirer = require("inquirer");
// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kourtney",
  database: "employee_db",
  port: 3306,
});

function start() {
  return connectio
}

function newEmployee() {
  const employeeQuestions = [
    {
      type: "input",
      name: "firstname",
      message: "What is their first name?",
    },
    {
      type: "input",
      name: "lastname",
      message: "What is their last name?",
    },
    {
      type: "input",
      name: "managerid",
      message: "What is their last name?",
    },
    {
      type: "input",
      name: "em",
      message: "What is their last name?",
    },
  ];
  //role respone is add response
  inquirer.prompt(employeeQuestions).then((addResponse) => {
    connection.query(
      "INSERT INTO employee SET ?",
      // QUESTION: What does the || 0 do?
      {
        first_name: addResponse.first_name,
        category: answer.category,
        starting_bid: answer.startingBid || 0,
        highest_bid: answer.startingBid || 0,
      },
      (err) => {
        if (err) throw err;
        console.log("Your auction was created successfully!");
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });
}
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "office",
    message: "Please provide you office number.",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Engineer's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide the Engineer's github username.",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Where does this intern go to school?",
  },
];

connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  //test below
  connection.query("SELECT * FROM employee", function (err, results, fields) {
    console.table(results); // results contains rows returned by server

    console.log(fields); // fields contains extra meta data about results, if available
  });
  
});
