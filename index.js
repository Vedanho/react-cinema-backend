const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const errorMiddlewares = require("./middlewares/error-middlewares");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(require("./routes/User.route"));
app.use(errorMiddlewares);

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
