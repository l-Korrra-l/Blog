const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer")
//nodemon restart for any changes
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Connected to  mongo"))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb ) => {
    cb(null, "images")
  },
  filename: (req, file, cb) =>{
    cb(null, "a.jpeg")
  }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.use("/", (req, resp) => {
  console.log(req);
});

app.listen("5000", () => {
  console.log("running");
});
