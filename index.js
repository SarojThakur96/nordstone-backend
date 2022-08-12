const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      return "Invalid operator";
  }
};

//routes
app.get("/api/results", function (req, res) {
  const firstNumber = req.query.first_number;
  const secondNumber = req.query.second_number;
  const operator = req.query.operator;

  const result = calculate(firstNumber, secondNumber, operator);

  res.send({
    result: result,
  });
});
app.get("/", function (req, res) {
  res.send("Server is running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running at port ${process.env.PORT || 5000}`);
});
