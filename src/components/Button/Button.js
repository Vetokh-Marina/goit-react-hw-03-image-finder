import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class Button extends Component {
  static propTypes = { fetchImages: PropTypes.func.isRequired };

  render() {
    return (
      <button onClick={this.props.fetchImages} className={s.Button}>
        Загрузить еще
      </button>
    );
  }
}

export default Button;