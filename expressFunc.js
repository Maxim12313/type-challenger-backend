import sql3 from "sqlite3";
import cors from "cors";

export default function runExpress(app) {
  const sqlite3 = sql3.verbose();

  const origin = "http://localhost:3000";
  app.use(cors({
    origin
  }));

  app.get("/", (req, res) => {
    res.send("<h1>Server Stuff</h1>");
  });

  app.get("/word/:freq", (req, res) => {
    const leastFreq = req.params.freq ? req.params.freq : 100;  //must be [0, 1000)
    const idx = Math.floor(Math.random() * leastFreq);
    const db = new sqlite3.Database("./data.db");
    const sql = `SELECT word FROM Words WHERE id = ?`;

    db.get(sql, [idx], (err, row) => {
      console.log(row)
      res.send(row);
    });

    db.close();
  });
}