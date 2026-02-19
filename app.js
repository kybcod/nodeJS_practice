const express = require('express')
const app = express()
const port = 3000

app.locals.pretty = true;
app.set('view engine', 'pug'); // 템블릿 엔진 연결
app.set('views','./views'); //생략가능

app.use(express.static('public')); //정적파일(public 디렉토리에 정적파일 넣어놓기)

app.get('/template', (req, res) => {
  res.render('temp', {time: Date(), _title:'Pug'});
})

app.get('/route', (req, res) => {
  res.send('<h1>Hello Router!</h1>, <img src="/dddd.jpg">')
})

app.get('/dynamic', (req, res) => {
  var lis = '';
  for (var i = 0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();

  var output = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
      Hello Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
      </body>
      </html>`
  res.send(output)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})