import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: 2.5em;
  text-transform: capitalize;
  //width: 70%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
  }
  .text-1{
      color: mediumpurple;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 90%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
        <Title>
            Բացահայտեք գիտության նոր դարաշրջանը
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}

        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Առցանց հարթակ</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">5 ոլորտ</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">դասընթացներ</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      
    </Title>
    <SubTitle>Ձանձրացե՞լ եք: Փորձեք ինչ-որ նոր բան:</SubTitle>
    <ButtonContainer>
    <Button text="Ավելին" link="#about" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
