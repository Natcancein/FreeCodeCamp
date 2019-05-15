
//Animating Intro
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const animation = keyframes`${bounce}`;

export const BouncyDiv = styled.div`
  animation: 1s ${animation};
`;
