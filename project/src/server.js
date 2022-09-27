const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { puerto, azure } = require("./configuracion");

const DEFAULT_PORT = puerto || 3000;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan("dev"));

// Setup app folders.
app.use(express.static("app"));


app.get("/configuracion", (req, res)=>{
  res.status(200).json({
    clid: azure.client_id, 
    autho:  azure.authority, 
    ruri: azure.resirect_url})
})

// Set up a route for index.html
app.get((req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Start the server.
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
