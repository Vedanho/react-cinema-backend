const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const cookieParser = require("cookie-parser")
require("dotenv").config()
const errorMiddlewares = require("./middlewares/error-middlewares")
const path = require("path")

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use(errorMiddlewares)

const bodyParser = require("body-parser")

const mail = require("./mail.js")

app.use(bodyParser.json())

app.get("/", (req, res) =>
  res.send(`Requested from ${req.hostname} : <h1>Hello World</h1>`)
)

app.post("/mail", async (req, res) => {
  const { email, message } = req.body

  mail("root@localhost.ru", email, "subj", message)

  return res.json("отправлено")
})

app.use(require("./routes/User.route"))

app.use(require("./routes/Cinema.route"))
app.use(require("./routes/User.route"))
app.use(require("./routes/Genre.route"))
app.use(require("./routes/Hall.route"))
app.use(require("./routes/Movie.route"))
app.use(require("./routes/Book.route"))
app.use(require("./routes/Session.route"))
// app.use(require("./routes/Review.route"))

app.use("/images", express.static(path.resolve(__dirname, "images")))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch((e) => console.log(e.message))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
