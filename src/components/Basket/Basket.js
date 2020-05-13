import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Basket.scss';
import Mushroom from '../SingleMushroom/SingleMushroom';

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    console.error('anything in basket??', basket);
    const buildBasket = basket.map((item) => (
      <Mushroom key={item.id} item={item} />
    ));

    return (
      <div className="Basket d-flex flex-wrap">
        {buildBasket}
      </div>
    );
  }
}

export default Basket;
