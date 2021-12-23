import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingMealDetails() {
  return (
    <ContentLoader
      speed={ 2 }
      width={ 360 }
      height={ 640 }
      viewBox="0 0 360 640"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="0" y="0" rx="3" ry="3" width="360" height="200" />
      <rect x="18" y="222" rx="13" ry="13" width="180" height="26" />
      <rect x="18" y="255" rx="9" ry="9" width="100" height="18" />
      <rect x="255" y="220" rx="13" ry="13" width="32" height="26" />
      <rect x="300" y="220" rx="13" ry="13" width="32" height="26" />
      <rect x="18" y="325" rx="10" ry="10" width="120" height="20" />
      <rect x="18" y="356" rx="10" ry="10" width="324" height="250" />
    </ContentLoader>
  );
}

export default LoadingMealDetails;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
