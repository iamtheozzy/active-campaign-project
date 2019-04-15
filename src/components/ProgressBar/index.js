import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Track = styled.div`
  position: relative;
  top: -48px;
  left: -30px;
  width: 420px;
  height: 20px;
  background-color: #B6F2E4;
  border-radius: 6px 6px 0 0;
  box-shadow: inset 0 0 5px #B6F2E4;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #19CCA3;
  border-radius: 6px 0 0 0;
`;

// Creates progress bar along with passing in a way to calculate percentage of donations
export default class ProgressBar extends Component {
  render() {
    return (
      <Track>
        <Thumb percentage={this.props.percentage}/>
      </Track>
    );
  }
}

ProgressBar.propTypes = {
  percentage: propTypes.number,
}