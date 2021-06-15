import styled from 'styled-components';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  display: flex;
  padding: 5vw 0;
  align-items: center;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  margin-top: 3vw
`;

export const Div = styled.div`
  width: ${props => props.direita ? '45vw' : '23vw'};
  margin-top: 3vw;
  display: ${props => props.direita ? 'flex' : null};
  flex-direction: ${props => props.direita ? 'column' : null};
`;

export const ImageTeam = styled.img`
  width: 22vw;
  height: 23vw;
  filter: grayscale(100%);
`;

export const Title = styled.text`
  font-size: 2vw;
  font-family: FilsonBold;
`;

export const Info = styled.text`
  font-size: ${props => props.bold ? '1.5vw' : '1.3vw'};
  font-family: Filson;
  font-weight: ${props => props.bold ? '900' : null};
  margin-top: ${props => props.bold ? null : '0.5vw'};
`;