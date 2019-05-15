import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations/lib/react-animations';


 //now below style a parent div as a variable and name it 
 //Note: always use Pascal Case for Naming Styled Components
 //we use styled.variableType to create a variable 

 const bounceAnimation = keyframes`${bounce}`;


const ParentForm = styled.div`
  animation: 1s ${bounceAnimation};
`;

// don't export default anything from styled components file

export {ParentForm}