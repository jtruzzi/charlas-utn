const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';
const client = new MongoClient(url);
// Use connect method to connect to the server

app.get('/usuarios', (req, res) => {
    client.connect(function(err) {
        assert.equal(null, err);
        console.log('Connected successfully to server');
      
        const db = client.db(dbName);

        const usuarios = db.collection("users").find();

        res.status(200).json(usuarios);
      
        client.close();
      });
})

app.post('/usuario', (req, res) => {
    console.info("La informacion recibida es: ", req.body)

    client.connect(function(err) {
        assert.equal(null, err);
        console.log('Connected successfully to server');
      
        const db = client.db(dbName);

        db.collection("users").insert(req.body).then((nuevoUsuario) => {
            res.status(200).json(nuevoUsuario);
        }).catch(() => {
            res.status(500).json({error: "Hubo un error al crear el usuario"});
        });
      
        client.close();
      });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})