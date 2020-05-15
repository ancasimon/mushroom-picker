import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

class Reward extends React.Component {
  static propTypes = {
    fullBasket: this.props,
  }

  // RewardFullBasket = (props) => {
  //   const { fullBasket } = props;
  //   if (fullBasket) {
  //     return <h1 className="encounter-title p-3 funAnimation">CONGRATULATIONS!</h1>;
  //   }
  // }

  render() {
    return (
      // <h1 className="encounter-title p-3 funAnimation">CONGRATULATIONS!</h1>
    // );
      this.fullBasket ? (
        <h1 className="encounter-title p-3 funAnimation">CONGRATULATIONS!</h1>
      ) : ('')
    );
  }
}

// ReactDOM.render(
//   <Reward fullBasket={true} />,
//   document.getElementById('root')
// );

export default Reward;
