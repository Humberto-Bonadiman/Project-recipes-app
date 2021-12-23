import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <Routes />
    </RecipesProvider>
  );
}

export default App;
