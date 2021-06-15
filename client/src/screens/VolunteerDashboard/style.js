import styled from 'styled-components';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  height: ${props => props.welcome ? null : '100vh'};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;

export const Center = styled.div`
  width: 70vw;
  height: 30vw;
  background-color: #f7f9fb;
  display: flex;
  margin-top: 5vw;
`;

export const Right = styled.div`
  width: 30vw;
  height: 30vw;
  background-color: #35363a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4vw;
  padding-right: 7vw;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: 2.5vw;
  color: #FFF;
  font-weight: 900;
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: 1.2vw;
  padding: 2vw 0;
  color: #FFF;
`;

export const Button = styled.button`
  width: 20vw;
  height: 4vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  color: #35363a;
  letter-spacing: 0.1vw;
  border: 0;
  transition: background-color 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #439bd7;
    color:  #FFF;
  }
  &:focus {
    outline: none;
  }
`;

export const Image = styled.img`
  width: 17vw;
  height: 18vw;
  margin-left: 5.5vw;
  margin-top: 5vw;
`;

export const Calendario = styled.div`
  width: 72vw;
  padding-bottom: -20vw;
  margin-left: 2vw;
  position: relative;
`;