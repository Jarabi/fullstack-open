import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newName) {
            const cleanedName = newName.trim();
            if (
                persons.find(
                    (person) =>
                        person.name.toLowerCase() === cleanedName.toLowerCase()
                )
            ) {
                alert(`${cleanedName} is already added to phonebook`);
            } else {
                setPersons([
                    ...persons,
                    {
                        name: cleanedName,
                        number: newNumber,
                        id: persons.length + 1,
                    },
                ]);
            }
        }
        setNewName('');
        setNewNumber('');
    };

    const filterPersons = search
        ? persons.filter((person) => person.name.toLowerCase().includes(search))
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with:{' '}
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Add new</h2>
                <div>
                    name:{' '}
                    <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div>
                    number:{' '}
                    <input
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filterPersons.map((person) => (
                <p key={person.id}>
                    {person.name} {person.number}
                </p>
            ))}
        </div>
    );
};

export default App;
