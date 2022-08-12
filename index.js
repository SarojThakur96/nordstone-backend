const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//routes
app.get("/api/users", function (req, res) {
  const user_id = req.query.id;

  res.send({
    user_id: user_id,
  });
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
