# Cybersecurity Threat Awareness App

## Description
The Cybersecurity Threat Awareness App is designed to provide users with insights into various cybersecurity threats. It offers a user-friendly interface to search, explore, and understand different types of threats, helping individuals and organizations stay informed and protected.

## Features
- **Threat Search**: Search for specific cybersecurity threats using keywords.
- **Threat Details**: View detailed information about each threat, including its impact and mitigation strategies.
- **Interactive UI**: Modern and responsive user interface built with Tailwind CSS.
- **Dynamic Routing**: Navigate through different pages and threat categories seamlessly.
- **Custom Components**: Includes reusable UI components like buttons, cards, modals, and more.

## Technologies Used
- **Next.js**: Framework for building the application.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: Ensures type safety and better developer experience.
- **Vercel**: Deployment platform for hosting the app.

## Installation
To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/Prakshil/Cybersecurity-threat-awareness.git

# Navigate to the project directory
cd Cybersecurity-threat-awareness

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

## Project Structure
```
Cybersecurity-threat-awareness/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── search/
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   ├── threat/
│   │   ├── [id]/
│   │   │   ├── page.tsx
├── components/
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── search-bar.tsx
│   ├── theme-provider.tsx
│   ├── threat-cards.tsx
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── ...other UI components...
├── data/
│   ├── threats.ts
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
├── lib/
│   ├── utils.ts
├── public/
│   ├── placeholder-logo.png
│   ├── ...other assets...
├── styles/
│   ├── globals.css
├── README.md
```

## Code Snippets
### Example: Threat Card Component
```tsx
import React from 'react';

const ThreatCard = ({ title, description }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default ThreatCard;
```

### Example: Search Bar Component
```tsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Search threats..."
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
```

## Deployment
The app is deployed on Vercel. You can access it at:

**[Cybersecurity Threat Awareness App](https://vercel.com/prakshils-projects/v0-cybersecurity-threat-app)**

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.