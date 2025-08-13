import React from "react";
import '../styles.css';

interface Props {
    suggestions: string [];
}

const SuggestionList: React.FC<Props> = React.memo(({ suggestions }) => {
    if(suggestions.length === 0) return null;

    return (
        <div className="suggestions-list">
            {suggestions.map((s,i) => (
                <div key={i} className="suggestion-item">
                    {s}
                </div>
            ))}
        </div>
    );
});

export default SuggestionList;