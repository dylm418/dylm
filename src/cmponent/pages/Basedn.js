import React from 'react';
import mysql from 'mysql';

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'votreNomUtilisateur',
  password: 'votreMotDePasse',
  database: 'votreBaseDeDonnées'
});

// Connexion à la base de données
connection.connect();

// Les valeurs à stocker dans la table
const data=["item1","item2","item3","item4"];

// Insérer chaque valeur dans la table
data.forEach((valeur) => {
  const query = 'INSERT INTO liste (valeur) VALUES (?)';
  connection.query(query, [valeur], (error, results, fields) => {
    if (error) {
      console.error('Erreur lors de l\'écriture des données dans la base de données', error);
    } else {
      console.log(`La valeur ${valeur} a été ajoutée avec succès à la table liste`);
    }
  });
});

// Fermer la connexion à la base de données
connection.end();

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen !</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')
