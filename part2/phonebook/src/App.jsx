import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

// Services
import personServices from './services/persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        personServices.getAll().then((data) => setPersons(data));
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
                personServices
                    .create({
                        name: cleanedName,
                        number: newNumber,
                    })
                    .then((data) => setPersons(persons.concat(data)));
                setNewName('');
                setNewNumber('');
            }
        }
    };

    const handleRemove = (id, name) => {
        const confirmRemove = window.confirm(`Delete ${name}`);

        if (confirmRemove) {
            personServices.remove(id).then((status) => {
                if (status === 200) {
                    setPersons(persons.filter((person) => person.id !== id));
                }
            });
        }
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
            {persons ? (
                <Persons persons={filterPersons} onRemove={handleRemove} />
            ) : (
                <p>Loading contacts...</p>
            )}
        </div>
    );
};

export default App;
