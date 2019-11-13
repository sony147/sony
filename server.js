const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port !`))

app.vibha('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  