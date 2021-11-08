import React from 'react';
import Header from '../components/Header';
import SearchBarHeader from '../components/SearchBarHeader';
// import FirstProvider from '../context/providers/FirstProvider';

function Meals() {
  return (
    <div>
      <Header title="Comidas" showButton />
      <SearchBarHeader />
    </div>
  );
}

export default Meals;
