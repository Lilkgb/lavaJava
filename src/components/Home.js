import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {testFunction} from './../actions';

function Home({dispatch}){
  const Something = styled.h1`
    @keyframes pulse {
      0%{color: hotpink}
      50%{color: limegreen}
      100%{color: hotpink}
    }
      animation: pulse 1s linear infinite;
      color: green;
      &:hover {
        cursor: pointer;
        animation: none;
        color: black;
      }
  `

  return(
    <div>
      <Something>Lava Java</Something>
      <button onClick={() => dispatch(testFunction())}>Test Reducer</button>
    </div>
  )
}

export default connect()(Home)
