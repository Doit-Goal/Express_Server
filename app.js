const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello Twitter");
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
