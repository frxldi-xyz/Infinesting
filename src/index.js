const express = require('express')
const app = express()
app.get('/', function(req, res) {
  res.send('Memulai BOT...')
})
app.listen(3000)
require("./bot.js")