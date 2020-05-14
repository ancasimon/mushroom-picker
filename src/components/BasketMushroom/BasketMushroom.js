import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './BasketMushroom.scss';

class BasketMushroom extends React.Component {
  static propTypes = {
    basketMushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { basketMushroom } = this.props;

    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={basketMushroom.imgUrl} className="card-img img-thumbnail mushroomPic" alt="Mushroom pic" />
          </div>
          <div className="flip-card-back">
            <h5>{basketMushroom.name} x {basketMushroom.count}</h5>
            <p className="description"><small>{basketMushroom.description}</small></p>
          </div>
        </div>
      </div>
    );
  }
}


export default BasketMushroom;
