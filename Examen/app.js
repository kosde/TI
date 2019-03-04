const express =  require("express");
const bodyParser = require("body-parser");
var app = express();


app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html" );
});

app.get('/anterior', (req, res) => {
  res.json(db.video);
});

app.post('/anterior',function(req,res){
  db.initDB();
  var alumno = req.body;
  console.log("Objeto post recibido");
  console.log(alumno);
  db.alumnos.push(alumno);
  db.saveAlumnos();
  res.json({'status' : 'OK'});
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
