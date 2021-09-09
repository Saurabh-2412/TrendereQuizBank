const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const quiz = require('./Quiz/QuizData');
app.use('/quiz', quiz);

app.get('',(req,res) => {
  res.send("Hello! Welcoming you to EXPRESS your world");
})

app.listen(3000, () => {
  console.log('server started');
});