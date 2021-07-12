const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

let numberOfProjects;



const db = mysql.createPool({ 
   host: "localhost",
   user: "root",
   password: "root",
   database: "portfolio2021"
  /*
   host: "lx11.hoststar.hosting",
   user: "ch284885_benbot",
   password: "mAAyGT3ABu7igqB.q!Wdx@rG",
   database: "ch284885_portfolio"
*/
   
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//Get Menu
app.get('/api/projects', (req, res) => {
   const sqlSelect = "SELECT * from projects ORDER BY date DESC";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

app.get('/api/tags', (req, res) => {
  const sqlSelect = "SELECT * from projects_tags INNER JOIN tags WHERE projects_tags.tags_id = tags.tags_id";
  db.query(sqlSelect, (err, result) => {
     res.send(result);
  })
})

app.get('/api/exhibitions', (req, res) => {
  const sqlSelect = "SELECT * from exhibitions ORDER BY end_date DESC";
  db.query(sqlSelect, (err, result) => {
     res.send(result);
  })
})

app.get('/api/locations', (req, res) => {
  const sqlSelect = "SELECT * from exhibition_location INNER JOIN location WHERE exhibition_location.location_id = location.location_id";
  db.query(sqlSelect, (err, result) => {
     res.send(result);
  })
})


app.listen(3001, () => {
   console.log('running on port 3001');
})