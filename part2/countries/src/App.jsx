import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from './components/Countries';
import countryServices from './services/countries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        countryServices
            .getAll()
            .then(data => setCountries(data))
    }, [])

    const filteredCountries = filter
        ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        : countries    

    return (
        <>
            <Filter filter={filter} setFilter={setFilter} />
            {filter && <Countries countries={filteredCountries} />}
        </>
    )
};

export default App;
