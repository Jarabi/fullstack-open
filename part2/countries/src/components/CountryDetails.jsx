import { useState } from 'react';
import Language from './Language';

import weatherService from '../services/weather';
import { useEffect } from 'react';

const CountryDetails = ({ country }) => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const {
        name,
        cca2: countryCode,
        capital,
        area,
        languages,
        flags,
    } = country;

    useEffect(() => {
        weatherService
            .getWeatherInfo(name.common, countryCode)
            .then((weatherData) => setWeatherInfo(weatherData));
    }, [name, countryCode]);

    const temperature = weatherInfo?.main?.temp;
    const wind = weatherInfo?.wind?.speed;
    const weather = weatherInfo?.weather?.[0];

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

            {capital && capital.length > 0 ? (
                <>
                    <h2>Weather in {capital[0]}</h2>
                    <p>
                        <strong>Temperature</strong> {temperature ?? 'N/A'}{' '}
                        Celcius
                    </p>
                    {weather?.icon && (
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                            alt={`${weather.description ?? ''}`}
                        />
                    )}
                    <p>
                        <strong>Wind</strong> {wind ?? 'N/A'} m/s
                    </p>
                </>
            ) : (
                <h3>No capital info</h3>
            )}
        </>
    );
};

export default CountryDetails;
