import React from 'react';
import PropTypes from 'prop-types';
import './SingleMushroom.scss';

class Mushroom extends React.Component {
  render() {
    const { mushroom } = this.props;

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={mushroom.imgUrl} class="card-img" alt="Mushroom pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{mushroom.name}</h5>
              <p className="card-text">{mushroom.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
