const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.use((req, res) => {
  res.status(200).send('Hello World')
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl + C to quit')
})
