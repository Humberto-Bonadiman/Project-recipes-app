import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingMeal() {
  return (
    <ContentLoader
      speed={ 2 }
      width={ 360 }
      height={ 640 }
      viewBox="0 0 360 640"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="0" y="0" rx="3" ry="3" width="360" height="60" />
      <rect x="7" y="70" rx="5" ry="5" width="110" height="32" />
      <rect x="124" y="70" rx="5" ry="5" width="110" height="32" />
      <rect x="241" y="70" rx="5" ry="5" width="110" height="32" />
      <rect x="7" y="110" rx="5" ry="5" width="110" height="32" />
      <rect x="124" y="110" rx="5" ry="5" width="110" height="32" />
      <rect x="241" y="110" rx="5" ry="5" width="110" height="32" />
      <rect x="7" y="160" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="160" rx="5" ry="5" width="166" height="160" />
      <rect x="7" y="330" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="330" rx="5" ry="5" width="166" height="160" />
      <rect x="7" y="500" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="500" rx="5" ry="5" width="166" height="160" />
    </ContentLoader>
  );
}

export default LoadingMeal;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
