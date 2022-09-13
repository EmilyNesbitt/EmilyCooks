const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

require("./config/recipes.config");

app.use(cors(), express.json(), express.urlencoded({extended:true}));

const AllMyRoutes = require("./routes/recipes.routes.js");
AllMyRoutes(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );