const express = require('express');
const app = express()
const timestampRoutes = require('./routes/timestampRoutes')


app.use(express.json())

app.use('/api/timestamp', timestampRoutes)


app.listen(3000, () => {
  console.log('Listening on PORT 3000');
})
