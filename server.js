// These are the dependencies/packages
const express = require('express');
const path = require('path');
const fs = require('fs');

// This will set up the express application
const app = express();

// PORT 3001
const PORT = process.env.PORT || 3001;

// // This function will grab the CSS and JS Files
// app.use(express.static("public"));

// Middleware to parse the JSON data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// This will grab the css and js files in the public folder
app.use("/public/assets", express.static(__dirname + "/public/assets"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});