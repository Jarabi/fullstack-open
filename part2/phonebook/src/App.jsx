import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then((res) => setPersons(res.data));
    }, []);

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
            <Filter value={search} setValue={setSearch} />
            <h3>Add new</h3>
            <PersonForm
                name={newName}
                setName={setNewName}
                number={newNumber}
                setNumber={setNewNumber}
                onFormSubmit={handleSubmit}
            />
            <h3>Numbers</h3>
            <Persons persons={filterPersons} />
        </div>
    );
};

export default App;
