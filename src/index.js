const express = require("express");
const db = require('./database');
const app = express();

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');    
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/kereta-user', (req, res) => {
    res.send('testing');
});


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });
