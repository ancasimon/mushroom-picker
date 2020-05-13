import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './SingleMushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={mushroom.imgUrl} className="card-img img-thumbnail mushroomPic" alt="Mushroom pic" />
          </div>
          <div class="flip-card-back">
            <h5>{mushroom.name}</h5>
            <p className="description"><small>{mushroom.description}</small></p>
          </div>
        </div>
      </div>
    );
  }
}


export default Mushroom;
