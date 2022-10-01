const express = require("express");
const User = require("./Model/user")
const http = require("http");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
// mongodb+srv://Shahnaina1998:<password>@cluster0.bejfmkb.mongodb.net/?retryWrites=true&w=majority
// Rapido@2022#
dotenv.config({
    path:"./.env"
})
const app = express();
app.use(morgan("dev"));
app.use("/", async(req, res, next) => {
    await User.create({firstName:"naina", lastName:"shah",email:"shahnaina1998@gmail.com"})
  res.status(200).json({ message: "i am naina" });
});

const server = http.createServer(app);
console.log(process.env);

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
); 
mongoose
  .connect(
    DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
