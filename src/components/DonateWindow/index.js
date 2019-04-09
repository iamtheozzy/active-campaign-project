import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './donate.module.scss';


class DonateWindow extends Component {

  state = {
    input: "5",
    goal: 5000,
    currentBalance: 0,
    donors: 0,
    wrongInputType: false,
    success: false
  }

  // updates form input
  updateInput = (event) => {
    this.setState({
      input: event.target.value.trim()
    })
  }

  // check if input is a number && over $5
  inputValidation = () => {
    console.log("Create this validation");
  }

  // Updates current goal, number of donors, and resets input to 0
  updateGoal = () => {
    this.setState({
      goal: this.state.goal - parseInt(this.state.input),
      donors: this.state.donors + 1,
      input: "0"
    })
  }

  // Initiates input validation, updates goals
  submit = () => {
    console.log("submitted");
    // Create Validation for inputs
    this.updateGoal();
  }

  componentDidMount() {
    console.log(this.state.wrongInputType)
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
