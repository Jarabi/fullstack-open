const Person = ({ id, name, number, onRemove }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <button onClick={() => onRemove(id, name)}>Delete</button>
            </td>
        </tr>
    );
};

export default Person;
