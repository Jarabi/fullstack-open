import Country from "./Country"
import CountryDetails from "./CountryDetails"

const Countries = ({ countries, selected, setSelected, onSelectCountry }) => {
    if (countries.length > 10)
        return 'Too many matches, specify another filter';

    if (countries.length === 1) {
        // Update state for selected country
        selected && setSelected(null);
        return <CountryDetails country={countries[0]} />;
    }

    return (
        <div>
            <table>
                <tbody>
                    {countries.map((country) => (
                        <Country
                            key={country.name.common}
                            country={country}
                            selected={selected}
                            onSelectCountry={onSelectCountry}
                        />
                    ))}
                </tbody>
            </table>
            {selected && (
                <CountryDetails
                    country={countries.find((c) => c.name.common === selected)}
                />
            )}
        </div>
    );
};

export default Countries;
