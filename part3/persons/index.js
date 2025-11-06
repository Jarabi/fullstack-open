const express = require('express');
const app = express();

app.use(express.json());

const findPerson = (id) => persons.find((person) => person.id === id);

let persons = [
    {
        id: '1',
        name: 'Arto Hellas',
        number: '040-123456',
    },
    {
        id: '2',
        name: 'Ada Lovelace',
        number: '39-44-5323523',
    },
    {
        id: '3',
        name: 'Dan Abramov',
        number: '12-43-234345',
    },
    {
        id: '4',
        name: 'Mary Poppendieck',
        number: '39-23-6423122',
    },
];

app.get('/', (req, res) => res.send('<h1>Persons Diary</p>'));

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/info', (req, res) => {
    const message = `<p>Phonebook has info for ${
        persons.length
    } people</p><p>${new Date()}</p>`;
    res.send(message);
});

app.get('/api/persons/:id', (req, res) => {
    const person = findPerson(req.params.id);

    if (!person) {
        res.status(404).end();
    } else {
        res.json(person);
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = findPerson(id);

    if (!person) {
        res.status(404).json({
            error: 'person not found',
        });
    } else {
        persons = persons.filter((person) => person.id !== id);
        res.status(204).end();
    }
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);