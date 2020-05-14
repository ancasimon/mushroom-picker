import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Basket.scss';

import BasketMushroom from '../BasketMushroom/BasketMushroom';

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    const buildBasket = basket.map((basketMushroom) => (
      <BasketMushroom key={basketMushroom.id} basketMushroom={basketMushroom} />
    ));

    return (
      <div className="Basket">
        <h2>Your Basket</h2>
        <div className="d-flex flex-wrap">
          {buildBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
