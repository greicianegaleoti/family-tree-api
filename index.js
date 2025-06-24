const express = require('express');
const cors = require('cors'); // Adicionado para habilitar o CORS

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //  Isso habilita o CORS para todas as origens
app.use(express.json());


// Dados fictícios da Família Corleone com imagens
let members = [
  {
    id: 1,
    name: 'Vito Corleone',
    role: 'Don',
    loyalty: 'High',
    location: 'New York',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Marlon_Brando_as_Vito_Corleone.jpg'
  },
  {
    id: 2,
    name: 'Michael Corleone',
    role: 'Underboss',
    loyalty: 'High',
    location: 'Nevada',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Al_Pacino_as_Michael_Corleone.png'
  },
  {
    id: 3,
    name: 'Tom Hagen',
    role: 'Consigliere',
    loyalty: 'Medium',
    location: 'New York',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Tom_Hagen.JPG'
  }
];

// GET all members
app.get('/members', (req, res) => {
  res.json(members);
});

// GET a member by ID
app.get('/members/:id', (req, res) => {
  const member = members.find(m => m.id === parseInt(req.params.id));
  if (!member) return res.status(404).send('Member not found.');
  res.json(member);
});

// POST a new member
app.post('/members', (req, res) => {
  const newMember = {
    id: members.length > 0 ? members[members.length - 1].id + 1 : 1,
    ...req.body
  };
  members.push(newMember);
  res.status(201).json(newMember);
});

// PUT update a member by ID
app.put('/members/:id', (req, res) => {
  const member = members.find(m => m.id === parseInt(req.params.id));
  if (!member) return res.status(404).send('Member not found.');
  Object.assign(member, req.body);
  res.json(member);
});

// DELETE a member by ID
app.delete('/members/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  const index = members.findIndex(m => m.id === memberId);
  if (index === -1) return res.status(404).send('Member not found.');
  members.splice(index, 1);
  res.status(204).send();
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Family Tree API is running at http://localhost:${port}`);
});
