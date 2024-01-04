const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./routes/userRoutes")(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running`);
});