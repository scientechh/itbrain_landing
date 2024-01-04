import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/ex/Frame 39.svg';
import img2 from '../../assets/ex/Frame 40.svg';
import img3 from '../../assets/ex/Frame 41.svg';
import img4 from '../../assets/ex/Frame 42.svg';
import img5 from '../../assets/ex/Frame 43.svg';
import img6 from '../../assets/ex/Frame 44.svg';
import img7 from '../../assets/ex/Frame 45.svg';
import img8 from '../../assets/ex/Frame 46.svg';
import img9 from '../../assets/ex/Frame 47.svg';
import img10 from '../../assets/ex/Frame 48.svg';
import img11 from '../../assets/ex/Frame 49.svg';
import img12 from '../../assets/ex/Frame 50.svg';
import img13 from '../../assets/ex/Frame 51.svg';
import img14 from '../../assets/ex/Frame 52.svg';
import img15 from '../../assets/ex/Frame 53.svg';
import img16 from '../../assets/ex/Frame 54.svg';
import img17 from '../../assets/ex/Frame 55.svg';
import img18 from '../../assets/ex/Frame 56.svg';
import img19 from '../../assets/ex/Frame 57.svg';
import img20 from '../../assets/ex/Frame 58.svg';
import img21 from '../../assets/ex/Frame 59.svg';
import img22 from '../../assets/ex/Frame 60.svg';
import img23 from '../../assets/ex/Frame 61.svg';
import img24 from '../../assets/ex/Frame 62.svg';
import img25 from '../../assets/ex/Frame 63.svg';
import img26 from '../../assets/ex/Frame 64.svg';

import ETH from '../../assets/images/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 80%;
  height: auto;
  padding: 30px 0;
  margin: 0 auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400}  src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
          <img width={200} height={200}  src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(
    <Section id="showcase">
    <Row direction="none" ref={Row1Ref}>
      <NftItem img={img1}  number={852} price={1}   passRef = {Row1Ref} />
      <NftItem img={img2}  number={123} price={1.2}   passRef = {Row1Ref} />
      <NftItem img={img3}  number={456} price={2.5}   passRef = {Row1Ref} />
      <NftItem img={img4}  number={666} price={3.5}   passRef = {Row1Ref} />
      <NftItem img={img5}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img6}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img7}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img8}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img9}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img10}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img11}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img12}  number={452} price={4.7}   passRef = {Row1Ref} />
      <NftItem img={img13}  number={452} price={4.7}   passRef = {Row1Ref} />


    </Row>
    <Row direction="reverse" ref={Row2Ref}>
    <NftItem img={img14}  number={888} price={1.2}   passRef = {Row2Ref} />
    <NftItem img={img15}  number={211} price={3.2}   passRef = {Row2Ref} />
    <NftItem img={img16}  number={455} price={1.8}   passRef = {Row2Ref} />
    <NftItem img={img17}  number={456} price={5.1}   passRef = {Row2Ref} />
    <NftItem img={img18}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img19}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img20}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img21}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img22}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img23}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img24}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img25}  number={865} price={3.7}   passRef = {Row2Ref} />
    <NftItem img={img26}  number={865} price={3.7}   passRef = {Row2Ref} />


    </Row>
    </Section>
  )
}

export default Showcase