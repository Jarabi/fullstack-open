import Country from "./Country"
import CountryDetails from "./CountryDetails"

const Countries = ({ countries }) => {
    if (countries.length > 10) return ('Too many matches, specify another filter')

    return (
        <div>
            {countries.length === 1 ? (
                <CountryDetails country={countries[0]} />
            ) :
            (countries.map((country) => (
                <Country key={country.name.common} country={country} />
            )))}
        </div>
    );
};

export default Countries;
