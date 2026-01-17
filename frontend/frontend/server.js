const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h2>User Form</h2>
    <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="Enter Name" required/>
      <br><br>
      <input type="email" name="email" placeholder="Enter Email" required/>
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/api", req.body);
    res.send(response.data.message);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
