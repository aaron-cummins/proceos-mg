const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { puerto, azure } = require("./configuracion");
const userRoute =  require("./routes/usuario");

// initialize express.
const app = express();

//Variables
const DEFAULT_PORT = puerto || 3000;

//middleware
app.use(express.json());
app.use(cors());


// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan("dev"));

// Setup app folders.
app.use(express.static("app"));


//Rutas
app.use("/usuario", userRoute);

app.get("/configuracion", (req, res)=>{
  res.status(200).json({
    clid: azure.client_id, 
    autho:  azure.authority, 
    ruri: azure.resirect_url})
})



// Set up a route for index.html
app.get((req, res) => {
  res.status(500).sendFile(path.join(__dirname + "/index.html"));
});

// Start the server.
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
