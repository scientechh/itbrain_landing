import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>հտհ</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="Ի՞ՆՉ ԿԱՌՈՒՑՎԱԾՔ ՈՒՆԵՆ ՎԱՐԺԱՆՔՆԵՐԸ" >
  Վարժանքները կազմված են բացատրական նյութերից և նրանց վերաբերվող հարցերից։
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="ԻՆՉՊԵ՞Ս ԵՆ ԱՆՑԿԱՑՎՈՒՄ ԴԱՍԸՆԹԱՑՆԵՐԸ" >
  Դասընթացները անցկացվում է առցանց տարբերակով որի ընթացքում ավելի են խոարցնելու վարժանքներում յուրացված նյութերը և սովորելու են նոր թեմաններ որոնք չկան վարժանքներում։

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="ՈՎՔԵ՞Ր ԿԱՐՈՂ ԵՆ ՄԻԱՆԱԼ ITBrain-ԻՆ" >
  ITBrain-ում կարող են հաշիվ ունենալ բոլոր տարիքային մարդիկ ովքեր շահագռգռված են սովորել։
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="Ե՞ՐԲ ՍՊԱՍԵԼ ԱՐԴՅՈՒՆՔ" >
Արդյունք կարող եք սպասել առաջին իսկ դասընթացից և վարժանքներից։
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="ՀՆԱՐԱՎՈՐ Է՞ ԳՈՒՄԱՐ ԱՇԽԱՏԵԼ ITBrain-ում" >
ԱՅՈ՛ ամեն ամիս բացվում է սուղ քանակությամբ րեֆերալ տեղեր։ Ամեն կայք հրավիրած անձի համար 10-50% մուտքավճարի գումար։
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Ի՞ՆՉ ԿՏԱ ITBrain-Ը" >
Այն թույլ կտա ստանալ տեսավոր և պրակտիկ հմտություններ որոնք կօգնեն կատարել աշխատանքներ ձեր ընտրած ոլորտում և ունեանալ պատրաստի պորտֆոլիո։
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq