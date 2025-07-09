const express = require("express");
// const connectDB = require("../config/database");
const connectDB = require("./src/config/database")
const cookieParser = require("cookie-parser");
const cors = require("cors")
const env = require("dotenv")

const app = express();
app.use(cookieParser()); // use for read a cookie
app.use(express.json()); // help to read json data
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
env.config()

const authRouter = require('./src/routes/auth')
const profileRouter = require("./src/routes/profile")
const requestRouter = require("./src/routes/request");
const { userRouter } = require("./src/routes/user");

app.use("/",authRouter)  // check the all routes in authROuter
app.use("/",profileRouter)
app.use("/",requestRouter)
app.use("/", userRouter)
connectDB()
  .then(() => {
    console.log("Database connection estabalish....");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database connection failed...");
  });
