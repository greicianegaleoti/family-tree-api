const express = require('express');
const cors = require('cors'); // Adicionado para habilitar o CORS

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //  Isso habilita o CORS para todas as origens


const members = [
  // Família Corleone (sangue, casamento e descendentes)
  {
    id: 1,
    name: 'Vito Corleone',
    role: 'Don',
    loyalty: 'High',
    location: 'New York',
    image: 'Vito-Corleone.jpg'
  },
  {
    id: 2,
    name: 'Carmela Corleone',
    role: "Vito's wife, Mama",
    loyalty: 'High',
    location: 'New York',
    image: 'Carmela-Corleone.jpg'
  },
  {
    id: 3,
    name: 'Sonny Corleone',
    role: "Vito's eldest son",
    loyalty: 'High',
    location: 'New York',
    image: 'Sonny-Corleone.jpg'
  },
  {
    id: 4,
    name: 'Lucy Mancini',
    role: "Sonny's mistress",
    loyalty: 'Medium',
    location: 'New York',
    image: 'Lucy-Mancini.jpg'
  },
  {
    id: 5,
    name: 'Vincent Corleone',
    role: "Sonny's illegitimate son",
    loyalty: 'High',
    location: 'New York',
    image: 'Vincent-Corleone.jpg'
  },
  {
    id: 6,
    name: 'Fredo Corleone',
    role: "Vito's middle son",
    loyalty: 'Low',
    location: 'New York',
    image: 'Fredo-Corleone.jpg'
  },
  {
    id: 7,
    name: 'Michael Corleone',
    role: "Vito's youngest son, next Don",
    loyalty: 'High',
    location: 'New York',
    image: 'Michael-Corleone.jpg'
  },
  {
    id: 8,
    name: 'Apollonia Vitelli Corleone',
    role: "Michael's first wife",
    loyalty: 'High',
    location: 'Sicily',
    image: 'Apollonia-Vitelli-Corleone.jpg'
  },
  {
    id: 9,
    name: 'Kay Adams Corleone',
    role: "Michael's second wife",
    loyalty: 'Medium',
    location: 'New York',
    image: 'Kay-Adams-Corleone.jpg'
  },
  {
    id: 10,
    name: 'Anthony Corleone',
    role: "Michael's eldest son",
    loyalty: 'Medium',
    location: 'New York',
    image: 'Anthony-Corleone.jpg'
  },
  {
    id: 11,
    name: 'Mary Corleone',
    role: "Michael's only daughter",
    loyalty: 'Medium',
    location: 'New York',
    image: 'Mary-Corleone.jpg'
  },
  {
    id: 12,
    name: 'Connie Corleone',
    role: "Vito's only daughter",
    loyalty: 'High',
    location: 'New York',
    image: 'Connie-Corleone.jpg'
  },
  {
    id: 13,
    name: 'Carlo Rizzi',
    role: "Connie's abusive husband",
    loyalty: 'Low',
    location: 'New York',
    image: 'Carlo-Rizzi.jpg'
  },
  {
    id: 14,
    name: 'Tom Hagen',
    role: "Consigliere, unofficial adopted son",
    loyalty: 'High',
    location: 'New York',
    image: 'Tom-Hagen.jpg'
  },

  // 🧱 Organização Interna (caporegimes, soldados, enforcers)
  {
    id: 20,
    name: 'Peter Clemenza',
    role: 'Caporegime',
    loyalty: 'High',
    location: 'Bronx',
    image: 'Peter-Clemenza.jpg'
  },
  {
    id: 21,
    name: 'Salvatore Tessio',
    role: 'Caporegime',
    loyalty: 'Medium',
    location: 'Brooklyn',
    image: 'Salvatore-Tessio.jpg'
  },
  {
    id: 22,
    name: 'Frank Pentangeli',
    role: 'Caporegime',
    loyalty: 'Low',
    location: 'New York',
    image: 'Frank-Pentangeli.jpg'
  },
  {
    id: 23,
    name: 'Luca Brasi',
    role: "Vito's personal enforcer",
    loyalty: 'Very High',
    location: 'New York',
    image: 'Luca-Brasi.jpg'
  },
  {
    id: 24,
    name: 'Paulie Gatto',
    role: 'Soldier (driver)',
    loyalty: 'Low',
    location: 'New York',
    image: 'Paulie-Gatto.jpg'
  },
  {
    id: 25,
    name: 'Al Neri',
    role: 'Soldier / Michael’s Enforcer',
    loyalty: 'High',
    location: 'New York',
    image: 'Al-Neri.jpg'
  },
  {
    id: 26,
    name: 'Rocco Lampone',
    role: 'Enforcer',
    loyalty: 'High',
    location: 'New York',
    image: 'Rocco-Lampone.jpg'
  },
  {
    id: 27,
    name: 'Willi Cicci',
    role: "Clemenza's Enforcer",
    loyalty: 'Medium',
    location: 'New York',
    image: 'Willi-Cicci.jpg'
  },

  // 🤝 Sicilianos e aliados externos
  {
    id: 50,
    name: 'Fabrizio',
    role: "Sicilian bodyguard (traitor)",
    loyalty: 'Low',
    location: 'Sicily',
    image: 'Fabrizio.jpg'
  },
  {
    id: 51,
    name: 'Calò',
    role: "Sicilian bodyguard (loyal)",
    loyalty: 'High',
    location: 'Sicily',
    image: 'Calo.jpg'
  },
  {
    id: 52,
    name: 'Don Tommasino',
    role: "Palermo boss, Michael’s protector",
    loyalty: 'High',
    location: 'Palermo',
    image: 'Don-Tommasino.jpg'
  }
];

app.get('/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Organizational Tree API is running at http://localhost:${port}`);
});
