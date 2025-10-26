const CountryDetails = ({country}) => {
    const {name, capital, area, languages, flag} = country
    
    return (
    <>
        <h1>{name.common}</h1>
        <p><strong>Capital</strong> {capital[0]}</p>
        <p><strong>Area</strong> {area.toLocaleString()}</p>

        <h2>Languages</h2>
        <ul>
            {Object.values(languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <span style={{fontSize:'6rem'}}>{flag}</span>
    </>
    )
}

export default CountryDetails