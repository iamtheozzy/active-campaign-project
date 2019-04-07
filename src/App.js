import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';

import DonateWindow from './components/DonateWindow'

class App extends Component {
  render() {
    return (
      <div className={classNames(styles.App)}>
        <DonateWindow />
      </div>
    );
  }
}

export default App;
