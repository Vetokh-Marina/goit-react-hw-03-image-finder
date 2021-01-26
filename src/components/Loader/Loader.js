import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
     
    );
  }
}