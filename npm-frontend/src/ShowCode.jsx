import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';
import {RightArrowCircle} from 'styled-icons/boxicons-regular/RightArrowCircle';

const EventCode = styled.div`
  color: white;
  font-size: 80px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  color: white;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px 0;
`;

const JoinEventCodeButton = styled.button`
  background-color: #2A77C9;
  color: white;
  height: 131px;
  width: 400px;
  font-size: 55px;
  border-radius: 13px;
  cursor: pointer;
  margin: 35px;
  border-color: #272727;
  font-weight: bold;
  box-shadow: inset 0px 0px 30px #000000, 13px 12px 20px -5px black;
  display: flex;
  justify-content: center;

  transition: width .5s, height .5s, font-size .5s, background-color .5s;

  &:hover {
    height: 150px;
    width: 450px;
    font-size: 60px;
    background-color: #2A77D6;
  }
`;

const Arrow = styled(RightArrowCircle)`
  height: 66px;
  margin: 0px 0px 0px 10px;
  transition: height .5s;

  ${JoinEventCodeButton}:hover & {
    height: 72px;
  }
`;

class ShowCode extends Component {
  render() {
    return (
      <Container>
        This is your Event Code:
        <EventCode>{this.props.thisEvent}</EventCode>
        <Link to='/host' style={{ textDecoration: 'none' }}>
          <JoinEventCodeButton>Start Event <Arrow /></JoinEventCodeButton>
        </Link>
      </Container>
    );
  }
}

export default ShowCode;