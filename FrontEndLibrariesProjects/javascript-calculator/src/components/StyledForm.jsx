import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

 //now below style a parent div as a variable and name it 
 //Note: always use Pascal Case for Naming Styled Components
 //we use styled.variableType to create a variable 

 const bounceAnimation = keyframes`${fadeInDown}`;

const ParentForm = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default ParentForm