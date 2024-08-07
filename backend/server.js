const express = require("express");

// Create an instance of the express application
const app = express();

// Define a simple route for the home page
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the home page",
  });
});

// Define the port number to listen to
const PORT = 8080;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Node Server Running on port ${PORT}`);
});
