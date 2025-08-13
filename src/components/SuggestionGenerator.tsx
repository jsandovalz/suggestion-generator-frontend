import React, { useCallback, useState } from 'react';
import { useSuggestions } from '../hooks/useSuggestions';
import SuggestionList from './SuggestionList'; 
import '../styles.css';

const SuggestionGenerator: React.FC = () => {
  const [prompt,setPrompt] = useState('');
  const {loading, suggestions, error, fetchSuggestions} = useSuggestions();
  
  const handleGenerate = useCallback(()=> {
    fetchSuggestions(prompt);
  }, [prompt,fetchSuggestions]);

  return (
    <div className='suggestions-container'>
      <h1 className='suggestions-title'>AI-Assisted Content Suggestions</h1>
      <div className='suggestion-form'>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="suggestion-input"
          aria-label="Prompt"
        />
      
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className='suggestion-button'
          aria-busy={loading}
        >
          {loading ? 'Generating...' : 'Get Suggestions'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <SuggestionList suggestions={suggestions} />

    </div>
  );
};
export default SuggestionGenerator;
