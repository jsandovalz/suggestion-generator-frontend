import { useState } from 'react';
import axios from 'axios';

export const useSuggestions = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = async (prompt: string) => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post('http://localhost:8000/api/suggestions', { prompt });
      setSuggestions(data.suggestions);
    } catch (err) {
      setError('Error al generar sugerencias' + err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, suggestions, error, fetchSuggestions };
};
