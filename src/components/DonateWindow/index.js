import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './donate.module.scss';


class DonateWindow extends Component {

  state = {
    input: "",
    goal: 5000,
    currentBalance: 0,
    donors: 0,
    wrongInputType: false,
    success: false,
    totallyFunded: false
  }

  // updates form input
  updateInput = (event) => {
    this.setState({
      input: event.target.value.trim()
    })
  }

  // check if input is a number && over $5
  inputValidation = () => {
    if( this.state.input < 5 ) {
      alert("input needs to be greater than 5");
      this.setState({
        input: ""
      })
    } else if ( isNaN(this.state.input) || this.state.input === "") {
      alert("input must be a number!");
    } else {
      this.updateGoal();
    }
  }

  // Updates current goal, number of donors, and resets input to 0
  updateGoal = () => {
    if( this.state.currentBalance + parseInt(this.state.input) >= this.state.goal ) {
      alert("HOORAAYY! WE HIT OUR GOAL!!");
    } 
    this.setState({
      currentBalance: this.state.currentBalance + parseInt(this.state.input),
      donors: this.state.donors + 1,
      input: ""
    })
    console.log("updated form");
  }

  // Initiates input validation, updates goals
  submit = () => {
    this.inputValidation();
  }

  componentDidUpdate() {
    console.log(this.state);
  }


  render() {
    
    const { goal, currentBalance, wrongInputType } = this.state;


    return (
      <div>
        <div className={styles.tooltip}>$<span>{goal - currentBalance}</span>  still needed to fund this project</div>
        <div className={classNames(styles.main)}>
          <h1>Only four days left to fund this project</h1>
          <p>Join the <span>{this.state.donors}</span> other donors who have already supported this project.</p>
          <div className={styles.inputDiv}>
            <span className={classNames(styles.dollarSign)}>$</span>
            <input type="text" 
            className={
              classNames(
              styles.inputStyles, 
              wrongInputType ? styles.notValid : null,
              currentBalance >= goal ? styles.succesful : null
              )} 
              onChange={this.updateInput} value={this.state.input} />
            <button className={classNames(styles.giveButton)} onClick={this.submit}>Give Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DonateWindow;
