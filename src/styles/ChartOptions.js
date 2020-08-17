import styled from 'styled-components';
import { ButtonStyle } from './CurrenciesList';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding-left: 1vw;
  width: 100%;
  @media only screen and (max-width: 800px) {
    display: inline-block;
  }
`;

export const ButtonsContainer = styled(Container)`
  flex-direction: row;
  margin-bottom: 1vh;
`;

export const InputContainer = styled(Container)`
  flex-direction: row;
  margin-bottom: 1vh;
  label {
    min-width: 70px;
  }
  input {
    box-shadow: none;
    min-width: 25px;
  }
`;

export const ChartButton = styled(ButtonStyle)`
  color: ${({ color = '#00000' }) => color};
  height: unset;
  min-height: 25px;
`;

export const H3 = styled.h3`
  margin: 0;
  width: 100px;
`;
