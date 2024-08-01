const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

require("./database/db")

const port = process.env.PORT;

const server = app.listen(port, (err) => {
  console.log(`App running on port ${port}`);
});
