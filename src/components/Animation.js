import React from 'react';
import styled from 'styled-components'

function Animation(){
  const Div = styled.div`
  @keyframes noneNow {
    0%{height: 100vh;}
    100%{height: 0;}
  }
  @keyframes slideUp {
    0%{top: 0;}
    1%{border-bottom: 1px solid black; box-shadow: 0px 20px 10px;}
    100%{top: -55vh; border-bottom: 1px solid black; box-shadow: 0px 30px 10px;}
  }
  @keyframes slideDown{
    0%{bottom: 0}
    1%{border-top: 1px solid black; box-shadow: 0px -20px 10px;}
    100%{bottom: -55vh; border-top: 1px solid black; box-shadow: 0px -30px 10px;}
  }
    animation: noneNow .1s linear forwards 4s;
    position: fixed;
    width: 100vw;
    height: 100vh;
    .top{
      animation: slideUp 2s linear forwards 2s;
      overflow: hidden;
      position: relative;
      top: 0;
      background-color: white;
      height: 50vh;
      img{
        width: 100vw;
        height: 100vh;
      }
    }
    .bottom{
      animation: slideDown 2s linear forwards 2s;
      position: relative;
      overflow: hidden;
      height: 50vh;
      background-color: white;
      bottom: 0;
      img{
        width: 100vw;
        height: 100vh;
        margin-top: -50vh;
      }
    }
  `
  return(
    <Div>
      <div class="top">
        <img src={require('../assets/images/eye.png')}/>
      </div>
      <div class="bottom">
        <img src={require('../assets/images/eye.png')}/>
      </div>
    </Div>
  )
}
export default Animation;
