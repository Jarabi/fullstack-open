const Country = ({ country, selected, onSelectCountry }) => {
    const countryName = country.name.common;
    const buttonText = selected === countryName ? 'Hide' : 'Show';

    return (
        <tr>
            <td>{countryName}</td>
            <td>
                <button onClick={() => onSelectCountry(countryName)}>
                    {buttonText}
                </button>
            </td>
        </tr>
    );
};

export default Country;
