const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Schema = mongoose.Schema;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Connect Server
app.listen(4000, () => {
  console.log("server is up and running on port 4000");
});

const db = "mongodb+srv://dylm:mu9f3kyd@cluster0.5zslh0h.mongodb.net/Customers";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("successfully connected to db"))
  .catch((err) => console.log(err));

//Todo Schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  data: {
    type: [[mongoose.Schema.Types.Mixed]],
    required: false
  }
});

// 2. Définir un modèle pour la collection "Customers" en utilisant le schéma de modèle
const Customer = mongoose.model('Customer', customerSchema, 'Customers');


// Server-side code
app.get('/customers', function(req, res) {
  Customer.find({}, function(err, customers) {
    if (err) throw err;
    res.json(customers);
  });
});


// Server-side code
app.put('/customers/:id', function(req, res) {
  const id = req.params.id;
  const update = { name: req.body.name };

  Customer.findByIdAndUpdate(id, update, { new: true }, function(err, updatedCustomer) {
    if (err) throw err;
    console.log("Les données du client ont été mises à jour : ", updatedCustomer);
    res.json(updatedCustomer);
  });
});


// Server-side code
app.post('/customers', function(req, res) {
  const newCustomer = new Customer({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    data: req.body.data
  });

  newCustomer.save(function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de l\'enregistrement du client dans la base de données');
    } else {
      res.status(200).send('Client enregistré avec succès dans la base de données');
    }
  });
});



// Server-side code
app.delete('/customers/:id', function(req, res) {
  const id = req.params.id;

  Customer.findByIdAndDelete(id, function(err, deletedCustomer) {
    if (err) throw err;
    console.log("Le client a été supprimé de la collection : ", deletedCustomer);
    res.json(deletedCustomer);
  });
});



