const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv')

dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/api', function (req, res) {
    console.log('post-call: ', req.body.text);
    textapi.sentiment({ 'text': req.body.text}, function(error, response) {
        console.log('error:', error);
        console.log('response:', response);
        if (error === null) {
            res.send({
                'response': response
            });
        } else {
            res.send({
                'error': error
            })
        }
    })
})
