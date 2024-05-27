var Express = require ('express')  
var Mongoclient = require ('mongodb').MongoClient;
var cors = require ('cors');
var multer =require('multer')
var app = Express();
app.use(cors());    

var ConnectionString = "mongodb+srv://admin:Santoalbertus29!@cluster0.xowr82q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASENAME = "todo";
var database;

app.listen(5038, () =>{
    Mongoclient.connect(ConnectionString, (err, client) =>{
        database = client.db(DATABASENAME);
        console.log('Database connected');
    });
})


app.get('/api/todoapp/GetNotes', (request, response)=> {
    database.collection('todocollection').find({}).toArray((error, result) =>{
      response.send(result);
    });
})

