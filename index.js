const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/comment.route"));
app.use(require("./routes/post.rout"));
app.use(require("./routes/user.route"));

mongoose.connect("mongodb+srv://into:code@cluster0.sdmzahh.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("УСПЕШНО СОЕДЕНИЛИСЬ С СЕРВЕРОМ MongoDB"))
  .catch(() => console.log("ОШИБКА ПРИ СОЕДИНЕНИИ С СЕРВЕРОМ MongoDB"));

app.listen(3000, () => {
  console.log("СЕРВЕР ЗАПУЩЕН");
});
