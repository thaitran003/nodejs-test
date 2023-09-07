const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const route = require('./routes/index.js')
const bodyParser = require('body-parser')
const db = require('./config/db/db.js')
const redis = require('./config/redis/redis.js')

app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app);
app.listen(port, async () => {
    await redis.connect();
    await db.connect();
    console.log(`Example app listening at http://localhost:${port}`)
});