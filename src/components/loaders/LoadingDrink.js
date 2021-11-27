import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingDrink() {
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
      <rect x="7" y="68" rx="5" ry="5" width="166" height="32" />
      <rect x="184" y="68" rx="5" ry="5" width="166" height="32" />
      <rect x="7" y="108" rx="5" ry="5" width="166" height="32" />
      <rect x="184" y="108" rx="5" ry="5" width="166" height="32" />
      <rect x="7" y="148" rx="5" ry="5" width="166" height="32" />
      <rect x="184" y="148" rx="5" ry="5" width="166" height="32" />
      <rect x="7" y="194" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="194" rx="5" ry="5" width="166" height="160" />
      <rect x="7" y="362" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="362" rx="5" ry="5" width="166" height="160" />
      <rect x="7" y="530" rx="5" ry="5" width="166" height="160" />
      <rect x="184" y="530" rx="5" ry="5" width="166" height="160" />
    </ContentLoader>
  );
}

export default LoadingDrink;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
