const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
  <h2>Reciprocity Image API</h2>
  
  <p>Example endpoint:</p>
  
  <a href="compressed-1495195134817-aeb325a55b65-Lukas-Blazek.jpg">compressed-1495195134817-aeb325a55b65-Lukas-Blazek.jpg</a>

  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// TESTING 123 (Delete this line!)