import styled from 'styled-components';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8vw;
`;

export const Logo = styled.img`
  width: 14vw;
  position: absolute;
  left: 1vw;
  top: 2vw;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Space = styled.div`
  height: 0.5vw;
`;

export const Info = styled.div`
  width: 40vw;
  height: 35vw;
  padding: 2vw;
  background: ${props => props.load ? '#fff' : 'linear-gradient(180deg, #000 25%, #fff 0%)'};
  justify-content: ${props => props.load ? 'center' : null};
  align-items: ${props => props.load ? 'center' : null};
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  margin-top: 1.5vw;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.subtitle ? '1.8vw' : '2.5vw'};  
  margin-top: ${props => props.subtitle ? '0.5vw' : null};
  margin-bottom: ${props => props.subtitle ? '3vw' : null};    
  color: #439bd7;
  font-weight: 900;
  margin-top: ${props => props.conclude ? '0.5vw' : null} !important; 
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: ${props => props.size ? '1vw' : '1.2vw'};   
  color: ${props => props.conclude ? '#439bd7' : '#35363a'};
  font-weight: 900;
  margin-top: ${props => props.top ? '0.5vw' : '1.5vw'};
`;

export const Select = styled.select`
  width: 40vw !important;
  height: 2.8vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #ccc;
  color: #000;
  font-family: Filson;
  font-size: 1.1vw;
  padding-left: 2vw;
  margin-top: 0.7vw;
  &:hover{
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 15vw;
  height: 3.3vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  background-color: ${props => props.on ? '#777' : '#3e9ad9'};
  color: ${props => props.on ? '#CCC' : '#ecf0f1'};
  color: #;
  margin-top: 3vw;
  margin-left: 25vw;
  letter-spacing: 0.1vw;
  background-color: #;
  transition: background-color 0.5s ease;
  border: 0;
  &:hover {
    background-color: ${props => props.on ? null : '#000'};
    cursor: ${props => props.on ? 'default' : 'pointer'};
  }
  &:focus {
    outline: none;
  }
`;

export const Load = styled.img`
  width: 10vw;
`;

export const ImageOk = styled.img`
  width: 6vw;
  margin-top: 3vw;
`;