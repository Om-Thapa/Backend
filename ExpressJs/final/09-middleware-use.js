const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//Note : Here sequence b/w app.use and app.get matter
//  req => middleware => res
//app.use(logger) will apply logger to all the routes while
//app.use('/api',logger) will apply logger to all router constaining /api, eg. /api/products , etc/

app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
