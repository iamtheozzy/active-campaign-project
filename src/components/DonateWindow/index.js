import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './donate.module.scss';

class DonateWindow extends Component {
  render() {
    return (
      <div className={classNames(styles.main)}>
        <h1>Only four days left to fund this project</h1>
        <p>Join the 11 other donors who have already supported this project.</p>
        <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
        <input type="text" placeholder="input box 2"></input>
      </div>
    );
  }
}

export default DonateWindow;
