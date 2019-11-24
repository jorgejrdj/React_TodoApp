const mongoose = require('mongoose')
moongose.Promise = global.Promise
module.exports = moongose.connect('mongodb://localhost/todo')