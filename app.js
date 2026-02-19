const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')); //정적파일(public 디렉토리에 정적파일 넣어놓기)

app.get('/route', (req, res) => {
  res.send('<h1>Hello Router!</h1>, <img src="/dddd.jpg">')
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})