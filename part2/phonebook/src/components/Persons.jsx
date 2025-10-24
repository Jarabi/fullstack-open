import Person from "./Person"

const Persons = ({ persons, onRemove }) => {
    return (
        <table>
            <thead>
                <tr align='left'>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((person) => (
                    <Person
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        number={person.number}
                        onRemove={onRemove}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Persons