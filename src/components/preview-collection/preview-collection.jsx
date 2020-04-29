import React from 'react';

import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item.jsx';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default PreviewCollection;