const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

const path = require("path")

app.use(express.json())
app.use(cors())

app.use(require("./routes/User.route"))
app.use(require("./routes/Genre.route"))
app.use(require("./routes/Hall.route"))
app.use(require("./routes/Movie.route"))
app.use(require("./routes/Review.route"))
app.use(require("./routes/Seat.route"))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
