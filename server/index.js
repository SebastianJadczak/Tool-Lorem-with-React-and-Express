const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs')

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(pino);

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);


app.get('/ipsumTaskList', (req, res) => {
    const data = fs.readFileSync('./src/database/database.json')
    const newData = JSON.parse(data)
    res.json({
        data: newData
    })
})