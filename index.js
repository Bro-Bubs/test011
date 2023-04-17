const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})
app.get('/home', (req, res) => {
  res.send('This is my hone route..... ')
})

app.get('/bubs', (req, res) => {
  res.send(' welcome to my route 🥳... ')
})

// Export the Express API
module.exports = app
