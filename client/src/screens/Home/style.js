import styled from 'styled-components';

//Image
import fundo from '../../assets/img/imgtop.jpeg';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  height: 148vw;
`;

export const ImgTop = styled.img`
  width: 100vw;
  height: 50vw;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8vw;
  width: 84vw;
  height: 24vw;
  margin-top: 6vw;
  background-image: url(${fundo});
  background-size: 100%;
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: ${props => props.size ? '1.5vw' : '3vw'};
  margin-bottom: 1.5vw;
  margin-left: ${props => props.left ? null : '5vw'};
  color: ${props => props.color ? '#35363a' : '#FFF'};
  font-weight: ${props => props.size ? 900 : null};
  text-decoration: ${props => props.underline ? 'underline' : null};
  &:hover {
    cursor: ${props => props.dontclick ? null : 'pointer'};
    opacity: ${props => props.dontclick ? null : '0.8'};
  }
`;

export const Button = styled.button`
  width: ${props => props.down ? '25vw' : '20vw'};
  height: 4vw;
  font-family: ${props => props.down ? 'Filson' : 'FilsonBold'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${props => props.down ? null : '5vw'};
  margin-right: ${props => props.down ? '3vw' : null};
  font-size: 1.1vw;
  font-weight: 900;
  color: ${props => props.down ? '#35363a' : '#ecf0f1'};
  margin-bottom: 1.5vw;
  letter-spacing: 0.1vw;
  background-color: ${props => props.down ? '#afe097' : '#000'};
  border: 0;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${props => props.down ? '#000' : '#FFF'};
    color: ${props => props.down ? '#ecf0f1' : '#000'};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const Information = styled.div`
  display: flex;
  padding: 5vw;
  flex-direction: column;
  width: 90vw;
  height: 30vw;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.down ? '1.5vw' : '1.9vw'};
  color: #35363a;
  font-weight: 900;
  margin-bottom: 1vw;
  margin-top: ${props => props.option ? '1vw' : null};
`;

export const TextInfo = styled.text`
  font-family: Filson;
  font-size: 1.3vw;
  color: ${props => props.bold ? '#000' : '#35363a'};
  color: ${props => props.color ? '#FFF' : null} !important;
  font-weight: ${props => props.bold ? null : 900};
  margin-bottom: ${props => props.down ? '1vw' : '2vw'};
  &:hover {
    cursor: ${props => props.button ? 'pointer' : null};
    opacity: ${props => props.button ? '0.8' : null};
  }
`;

export const Options = styled.div`
  display: flex;
  width: 90vw;
  height: 30vw;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 24vw;
  height: 18.5vw;
  padding: ${props => props.down ? '3.5vw 1vw' : '3.5vw 2.5vw'};
  margin-left: ${props => props.left ? null : '1vw'};
  background-color: ${props => props.down ? null : '#DBEAF5'};
  margin-left: ${props => props.leftdown ? '5vw' : null} !important;
`;

export const Icon = styled.img`
  width: ${props => props.size ? '2.5vw' : '3vw'};
  height: ${props => props.size ? '2.5vw' : '3vw'};
  margin-top: ${props => props.size ? '0.5vw' : null};
`;

export const Bottom = styled.div`
  display: flex;
  width: 90vw;
  height: 14vw;
  background-color: #172C36;
  margin-top: 5vw;
  padding: 5vw;
  flex-direction: column;
`;

export const BottomTitle = styled.text`
  font-family: FilsonBold;
  font-size: 3vw;
  color: #FFF;
  font-weight: 900;
`;

export const Buttons = styled.div`
  display: flex;
  width: 90vw;
  height: 10vw;
  margin-top: 2vw;
`;