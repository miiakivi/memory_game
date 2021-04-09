import styled, { css, keyframes } from "styled-components";

// GENERAL COMPONENTS
const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 1em auto 0;
  background-color: rgba(0, 7, 15, 0.56);
  padding-bottom: 1em;
  ${ props=>
          props.gameboard && css`
            padding-bottom: 0.6em;
            margin-bottom: 2em;
            margin-top: 0` };
  @media (min-width: 900px) {
    padding: 0 5em 1em 5em;
  }
`;

const Paragraph = styled.p
    `
      width: 90%;
      max-width: 700px;
      text-align: center;
      margin: 0 auto;
      padding-bottom: 2em;
      color: #fdefef;
    `;

const slideTop = keyframes`
  0% {
    -webkit-transform: translateY(200px);
    transform: translateY(200px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const AnimationCont = styled.div`
  animation: ${ slideTop } 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`;

// BUTTONS
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 2em;
  transition: all 0.2s ease-in-out;
  ${ props=>
          props.start && css`
            padding-bottom: 2em` };
  @media (min-width: 550px) {
    gap: 5em
  }
`;

const Btn = styled.button`
  background-color: ${ props=>props.easy
          ? '#ffd166'
          : props.hard
                  ? '#ffafcc'
                  : '#82ddf0' };

  border: 2px solid ${ props=>props.easy
          ? '#faa13c'
          : props.hard
                  ? '#f66b92'
                  : '#00a5bd'
  };

  &:hover {
    background-color: #AFB3F7;
    border: 2px solid #7479ff;
    transform: scale(1.1);
  }
;

  &:focus {
    background-color: #AFB3F7;
    border: 2px solid #82ddf0;
    transform: scale(1.1);
    outline: 2px solid #82ddf0;
  }
;
`;

const StartBtn = styled.button`
  font-size: ${ props=>(props.active ? "1.2rem" : "1rem") };
  background-color: ${ props=>(props.active ? "#F47AE1" : "rgba(0, 7, 15, 0.56)") };
  border: ${ props=>(props.active ? "2px solid #f66b92" : "2px solid rgba(0, 7, 15, 0.56)") };

  &:hover {
    background-color: ${ props=>(props.active ? "#AFB3F7" : "rgba(0, 7, 15, 0.56)") };
    border: 2px solid ${ props=>(props.active ? "#7479ff" : "rgba(0, 7, 15, 0.56)") };
    transform: ${ props=>(props.active ? "scale(1.1)" : "none") };;
  }
`;

//HEADER

const HeaderTitle = styled.div`
  padding: 2em 1em 0 1em;

  text-align: center;
`;


// Gameboard
const GameBoardContainer = styled.main`
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 2em;
          margin-bottom: 2em;
          padding-top: 1em;
    `
;


// Scoreboard
const ScoreContainer = styled.section
    `
      display: flex;
      justify-content: space-around;
      gap: 1em;
      flex-direction: column-reverse;
      padding: 1em;
      text-align: center;
      background-color: rgba(0, 7, 15, 0.41);
      color: #e0e0e0;
      font-weight: 700;
      letter-spacing: 0.1em;
      ${ props=>
              props.primary && css`
                position: -webkit-sticky; /* Safari */
                position: sticky;
                top: 0;
                font-size: 1.2rem;
                background-color: rgba(0, 7, 15, 0.71)` };

      @media (min-width: 550px) {
        flex-direction: row;
        align-items: center;
      }
    `
;

// CARDS
const CharacterImage = styled.img
    `
      width: 100%;
      max-height: 170px;
      object-fit: cover;
      object-position: center top;
    `
;

const Card = styled.div
    `
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      max-width: 180px;
      margin-top: 2em;
      text-align: center;
      background: #FFDDE1; /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #ffdde1, #ee9ca7); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      border: 10px solid palevioletred;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    ;

      & > h3 {
        padding: 0.5em 0;
        margin-bottom: 0;
        font-size: 1.5rem;
      }
    `
;

// GAME ENDED MESSAGES
const MessageContainer = styled.div`
  position: fixed;
  width: 90%;
  max-width: 650px;
  padding: 1em 1em 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid #dfb0ff;
  background-color: rgba(255, 255, 255, 0.92);
  

  & > h2 {
    font-weight: 400;
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
    padding: 0 0 0.5em;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  ${ props=>
          props.endMsgPoints && css`
            margin: 0 auto;
            width: 80%;
            padding: 0 0.5em;
            border-bottom: 2px solid #dfb0ff;` };
  ${ props=>
          props.endMsgText && css`
            flex-direction: column;
            text-align: center;` };
`;

export {
    GameBoardContainer,
    ScoreContainer,
    Container,
    CharacterImage,
    Card,
    Paragraph,
    HeaderTitle,
    Btn,
    StartBtn,
    BtnContainer,
    AnimationCont,
    MessageContainer,
    Flex,
};