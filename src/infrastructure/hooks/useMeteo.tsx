import { useState, useEffect } from 'react';

const API_URL = 'https://api.open-meteo.com/v1/forecast';
const DEFAULT_LOCATION = { lat: 48.8566, lon: 2.3522 };

interface MeteoData {
  temperature: number;
  condition: string;
}

const useMeteo = () => {
  const [meteoData, setMeteoData] = useState<MeteoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeteoData = async (lat: number, lon: number) => {
      try {
        const response = await fetch(
          `${API_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        const { current_weather } = data;

        setMeteoData({
          temperature: Math.round(current_weather.temperature),
          condition: current_weather.weathercode <= 2 ? 'Ensoleillé' : 'Nuageux',
        });
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        setMeteoData(null);
      } finally {
        setLoading(false);
      }
    };

    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchMeteoData(latitude, longitude);
        },
        () => {
          fetchMeteoData(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon);
        }
      );
    };

    getUserLocation();
  }, []);

  return { meteoData, loading, error };
};

export default useMeteo;
