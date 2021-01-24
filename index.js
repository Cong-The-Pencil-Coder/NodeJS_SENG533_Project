const express = require('express');
const path = require('path');
const persons = require('./data/Persons')

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// Get all persons
app.get('/persons', (req, res) => res.json(persons));

// Get the person with id
app.get('/persons/:id', (req, res) => {
    res.json(persons.filter(person => person.id === parseInt(req.params.id)))
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
