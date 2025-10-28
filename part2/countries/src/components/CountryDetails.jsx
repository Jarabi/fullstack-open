import Language from './Language';

const CountryDetails = ({ country }) => {
    if (!country) {
        return <p>Loading country list...</p>;
    }

    const { name, capital, area, languages, flags } = country;

    return (
        <>
            <h1>{name.common}</h1>
            <p>
                <strong>Capital</strong>{' '}
                {capital && capital.length > 0 ? capital[0] : 'N/A'}
            </p>
            <p>
                <strong>Area</strong> {area.toLocaleString()}
            </p>

            <h2>Languages</h2>
            <ul>
                {Object.values(languages).map((language) => (
                    <Language key={language} language={language} />
                ))}
            </ul>
            <img src={flags.png} alt={flags.alt} />
        </>
    );
};

export default CountryDetails;
