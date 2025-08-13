# 💡 Suggestion Generator Frontend (React + TypeScript)

This is the frontend for the Suggestion Generator app. It allows users to input a topic and receive content suggestions from the backend API.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/jsandovalz/suggestion-generator-frontend.git
cd suggestion-generator-frontend

```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

🔗 Backend Connection
Make sure the Laravel backend is running at http://localhost:8000. The frontend sends requests to /api/suggestions.
You may need to configure CORS in backend to allow requests from localhost:3000


```bash
📁 Project Structure
src/
├── hooks/
│   └── useSuggestions.ts         // Custom hook for API logic
├── components/
│   ├── SuggestionGenerator.tsx   // Main UI component
│   └── SuggestionList.tsx        // Presentational component
├── styles.css                    // Classic CSS styling
├── App.tsx                       // Root component
```

