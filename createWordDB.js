import fs from "node:fs"
import sql from "sqlite3"

const sqlite3 = sql.verbose();

fs.readFile("./words.txt", "utf-8", (err, data) => {
  const words = data.split("\n");
  const db = new sqlite3.Database("./data.db");

  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Words`);
    db.run(
      `CREATE TABLE Words (
        id INTEGER PRIMARY KEY,
        word VARCHAR(255)
      )`
    );
    words.forEach((word, i) => {
      db.run(
        `INSERT INTO Words (word, id) VALUES ("${word}", ${i})`
      );
    })
  });
  
  db.close();
});

