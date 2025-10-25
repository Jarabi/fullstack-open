import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';

// Services
import personServices from './services/persons';
import notificationServices from './services/notifications';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');
    const [notification, setNotification] = useState({
        type: null,
        text: null,
    });
    const notify = notificationServices.createNotifier(setNotification);

    useEffect(() => {
        personServices.getAll().then((data) => setPersons(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newName) {
            const cleanedName = newName.trim();
            const personExists = persons.find(
                (person) =>
                    person.name.toLowerCase() === cleanedName.toLowerCase()
            );

            if (personExists) {
                const approveReplace = window.confirm(
                    `${cleanedName} is already added to phonebook. Replace the old number with the new one?`
                );

                if (approveReplace) {
                    const updatedPerson = {
                        name: cleanedName,
                        number: newNumber,
                    };

                    personServices
                        .update(personExists.id, updatedPerson)
                        .then((returnedPerson) =>
                            setPersons(
                                persons.map((person) =>
                                    person.id === personExists.id
                                        ? returnedPerson
                                        : person
                                )
                            )
                        );
                    notify(`Phone number for ${cleanedName} updated`);
                }
            } else {
                personServices
                    .create({
                        name: cleanedName,
                        number: newNumber,
                    })
                    .then((data) => setPersons(persons.concat(data)));
                notify(`Added ${cleanedName}`);
            }
            setNewName('');
            setNewNumber('');
        }
    };

    const handleRemove = (id, name) => {
        const confirmRemove = window.confirm(`Delete ${name}`);

        if (confirmRemove) {
            try {
                personServices.remove(id).then((status) => {
                    if (status === 200) {
                        setPersons(
                            persons.filter((person) => person.id !== id)
                        );
                    }
                });
                notify(`${name} removed successfully`);
            } catch (error) {
                notify('An error occurred while removing user', 'error');
                console.error(error);
            }
        }
    };

    const filterPersons = search
        ? persons.filter((person) => person.name.toLowerCase().includes(search))
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            {notification.text && (
                <Notification
                    type={notification.type}
                    text={notification.text}
                />
            )}
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
