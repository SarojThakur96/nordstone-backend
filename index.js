const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//routes
app.get("/api/results", function (req, res) {
  const firstNumber = req.query.first_number;
  const secondNumber = req.query.second_number;
  const operator = req.query.operator;

  if (operator === "addition") {
    res.status(200).json({
      result: firstNumber + secondNumber,
    });
  } else if (operator === "subtraction") {
    res.status(200).json({
      result: firstNumber - secondNumber,
    });
  } else if (operator === "multiplication") {
    res.status(200).json({
      result: firstNumber * secondNumber,
    });
  } else {
    res.status(400).json({
      error: "Invalid operator",
    });
  }
});

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running at port ${process.env.PORT || 5000}`);
});
