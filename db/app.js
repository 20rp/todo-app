const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const port = 5000;

const db = sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Could not open database", err);
  } else {
    console.log("Connected to SQLite database");
    db.run(
      `CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT`
    );
  }
});

app.use(express.json());

app.post("/api/insert", (req, res) => {
  const data = req.body.data;
  db.run(`INSERT INTO tasks (data) VALUES (?)`, [data], function (err) {
    if (err) {
      res.status(500).send("Could not insert data");
    } else {
      res.send(`Row inserted with id ${this.lastID}`);
    }
  });
});

app.get("/api/data", (req, res) => {
  db.all(`SELECT * FROM tasks`, [], (err, rows) => {
    if (err) {
      res.status(500).send("Could not retrieve data");
    } else {
      res.join(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
