const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


const app = express();
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3001, () => {
    console.log("Server is listening on port 3000");
});

const UserRoute = require('./routes/User')

app.use('/user',UserRoute)