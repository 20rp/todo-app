const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send("Task app - Task Trackr 3000™");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
