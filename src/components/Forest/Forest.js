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
      <div className="Forest">
        <h2>Our Forest</h2>
          <div className="Forest d-flex flex-wrap">
            {buildForest}
          </div>
      </div>
    );
  }
}

export default Forest;
