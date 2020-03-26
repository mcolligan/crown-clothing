import React from 'react';

import MenuItem from '../menu-item/menu-item.jsx';
import directoryData from './directoryData.js';
import './directory.scss';

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: directoryData
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}