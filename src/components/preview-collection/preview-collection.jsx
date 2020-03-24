import React from 'react';

import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1>Title</h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(item => (
        <div key={item.id} >{item.name.toUpperCase()}</div>
      ))}
    </div>
  </div>
);

export default PreviewCollection;