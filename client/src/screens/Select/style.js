import styled from 'styled-components';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vw;
  margin-top: 10vw;
`;

export const Option = styled.div`
  border: 0;
  width: 35vw;
  height: 15vw;
  background-color: #B9D2E3;
  display: flex;
  flex-direction: column;
  padding: 5vw;
  margin-left: ${props => props.left ? '2vw' : null};
  &:hover {
    cursor: pointer;
    border: 0.15vw solid #afe097;
  }
`;

export const Icon = styled.img`
  width: 4vw;
  height: 4vw;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: 2vw;
  color: #35363a;
  font-weight: 900;
  margin-bottom: 1vw;
  margin-top: 1vw;
`;

export const Button = styled.div`
  width: ${props => props.button ? '8.5vw' : '12vw'};
  height: 2.5vw;
  margin-top: 2vw;
  border-bottom: 0.2vw solid #afe097;
  font-family: Filson;
  font-size: 1.4vw;
  display: flex;
`;