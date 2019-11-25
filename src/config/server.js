const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AllowCors = require ('./cors')

//middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AllowCors)

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server