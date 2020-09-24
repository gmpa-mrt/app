require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const db = require("./model/db.model");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.send('Hello World')
});
app.use('/user', require('./routes/user.route'));



app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});


const PORT = process.env.PORT || 4000 ;
app.listen(PORT, (req, res) => {
  console.log(`Server started ${PORT}`);
});
