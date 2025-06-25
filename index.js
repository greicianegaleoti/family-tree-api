const express = require('express');
const cors = require('cors'); // Adicionado para habilitar o CORS
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //  Isso habilita o CORS para todas as origens

const baseImageURL = 'https://mafia-family-tree.netlify.app/assets/';

const members = [
  {
    id: 1,
    name: 'Vito Corleone',
    role: 'Don',
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Vito-Corleone.jpg`
  },
  {
    id: 2,
    name: 'Carmela Corleone',
    role: "Vito's wife, Mama",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Carmela-Corleone.jpg`
  },
  {
    id: 3,
    name: 'Sonny Corleone',
    role: "Vito's eldest son",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Sonny-Corleone.jpg`
  },
  {
    id: 4,
    name: 'Lucy Mancini',
    role: "Sonny's mistress",
    loyalty: 'Medium',
    location: 'New York',
    image: `${baseImageURL}Lucy-Mancini.jpg`
  },
  {
    id: 5,
    name: 'Vincent Corleone',
    role: "Sonny's illegitimate son",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Vincent-Corleone.jpg`
  },
  {
    id: 6,
    name: 'Fredo Corleone',
    role: "Vito's middle son",
    loyalty: 'Low',
    location: 'New York',
    image: `${baseImageURL}Fredo-Corleone.jpg`
  },
  {
    id: 7,
    name: 'Michael Corleone',
    role: "Vito's youngest son, next Don",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Michael-Corleone.jpg`
  },
  {
    id: 8,
    name: 'Apollonia Vitelli Corleone',
    role: "Michael's first wife",
    loyalty: 'High',
    location: 'Sicily',
    image: `${baseImageURL}Apollonia-Vitelli-Corleone.jpg`
  },
  {
    id: 9,
    name: 'Kay Adams Corleone',
    role: "Michael's second wife",
    loyalty: 'Medium',
    location: 'New York',
    image: `${baseImageURL}Kay-Adams-Corleone.jpg`
  },
  {
    id: 10,
    name: 'Anthony Corleone',
    role: "Michael's eldest son",
    loyalty: 'Medium',
    location: 'New York',
    image: `${baseImageURL}Anthony-Corleone.jpg`
  },
  {
    id: 11,
    name: 'Mary Corleone',
    role: "Michael's only daughter",
    loyalty: 'Medium',
    location: 'New York',
    image: `${baseImageURL}Mary-Corleone.jpg`
  },
  {
    id: 12,
    name: 'Connie Corleone',
    role: "Vito's only daughter",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Connie-Corleone.jpg`
  },
  {
    id: 13,
    name: 'Carlo Rizzi',
    role: "Connie's abusive husband",
    loyalty: 'Low',
    location: 'New York',
    image: `${baseImageURL}Carlo-Rizzi.jpg`
  },
  {
    id: 14,
    name: 'Tom Hagen',
    role: "Consigliere, unofficial adopted son",
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Tom-Hagen.jpg`
  },
  {
    id: 20,
    name: 'Peter Clemenza',
    role: 'Caporegime',
    loyalty: 'High',
    location: 'Bronx',
    image: `${baseImageURL}Peter-Clemenza.jpg`
  },
  {
    id: 21,
    name: 'Salvatore Tessio',
    role: 'Caporegime',
    loyalty: 'Medium',
    location: 'Brooklyn',
    image: `${baseImageURL}Salvatore-Tessio.jpg`
  },
  {
    id: 22,
    name: 'Frank Pentangeli',
    role: 'Caporegime',
    loyalty: 'Low',
    location: 'New York',
    image: `${baseImageURL}Frank-Pentangeli.jpg`
  },
  {
    id: 23,
    name: 'Luca Brasi',
    role: "Vito's personal enforcer",
    loyalty: 'Very High',
    location: 'New York',
    image: `${baseImageURL}Luca-Brasi.jpg`
  },
  {
    id: 24,
    name: 'Paulie Gatto',
    role: 'Soldier (driver)',
    loyalty: 'Low',
    location: 'New York',
    image: `${baseImageURL}Paulie-Gatto.jpg`
  },
  {
    id: 25,
    name: 'Al Neri',
    role: 'Soldier / Michael’s Enforcer',
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Al-Neri.jpg`
  },
  {
    id: 26,
    name: 'Rocco Lampone',
    role: 'Enforcer',
    loyalty: 'High',
    location: 'New York',
    image: `${baseImageURL}Rocco-Lampone.jpg`
  },
  {
    id: 27,
    name: 'Willi Cicci',
    role: "Clemenza's Enforcer",
    loyalty: 'Medium',
    location: 'New York',
    image: `${baseImageURL}Willi-Cicci.jpg`
  },
  {
    id: 50,
    name: 'Fabrizio',
    role: "Sicilian bodyguard (traitor)",
    loyalty: 'Low',
    location: 'Sicily',
    image: `${baseImageURL}Fabrizio.jpg`
  },
  {
    id: 51,
    name: 'Calò',
    role: "Sicilian bodyguard (loyal)",
    loyalty: 'High',
    location: 'Sicily',
    image: `${baseImageURL}Calo.jpg`
  },
  {
    id: 52,
    name: 'Don Tommasino',
    role: "Palermo boss, Michael’s protector",
    loyalty: 'High',
    location: 'Palermo',
    image: `${baseImageURL}Don-Tommasino.jpg`
  }
];

app.get('/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Organizational Tree API is running at http://localhost:${port}`);
});
