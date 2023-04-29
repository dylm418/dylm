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
  name: [[String]],
});

// 2. Définir un modèle pour la collection "Customers" en utilisant le schéma de modèle
const Customer = mongoose.model('Customer', customerSchema, 'Customers');

// 1. Créer un nouveau document en utilisant le modèle Customer
const newCustomer = new Customer({
  name:[
    ['item4', 'item4'],
    ['item4', 'item4']
  ]
});

// 2. Enregistrer le nouveau document dans la collection
newCustomer.save(function(err, savedCustomer) {
  if (err) throw err;

  console.log("Le nouveau client a été ajouté à la collection : ", savedCustomer);

  // 3. Récupérer tous les documents de la collection Customers
  Customer.find({}, function(err, customers) {
    if (err) throw err;

    console.log("Tous les clients dans la collection Customers : ", customers);
  });
});


