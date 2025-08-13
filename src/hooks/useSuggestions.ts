import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';


export const useSuggestions = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = async (prompt: string) => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(`${API_BASE_URL}/suggestions`, { prompt });
      setSuggestions(data.suggestions);
    } catch (err) {
      setError('Error generating suggestions' + err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, suggestions, error, fetchSuggestions };
};
