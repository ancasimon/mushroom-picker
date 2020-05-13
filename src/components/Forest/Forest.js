import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';

import Mushroom from '../SingleMushroom/SingleMushroom';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    console.error('mushrooms coming into Forest', mushrooms);
    const buildForest = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));

    return (
      <div className="Forest d-flex flex-wrap">
        <h2>Our Forest</h2>
        {buildForest}
      </div>
    );
  }
}

export default Forest;
