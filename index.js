const express = require ('express');
const app = express ();
const port = 8080;
const users = require('./users');
var cors = require('cors');
app.use(cors());

let demoLogger = (req, res, next) => {
  console.log("Hello from logger");
  next();
};

app.use(demoLogger);

app.get('/',(req,res)=>{
  res.json({info: "CRUD_APP_RUNNING"})
});

app.get('/users', users.getInfo);
app.post('/users/create', users.create);
app.put('/users/edit',users.edit);
app.delete('/users/delete',users.remove);


app.listen(port,()=>{
  console.log("Running at port 8080")
});