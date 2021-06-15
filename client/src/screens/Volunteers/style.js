import styled from 'styled-components';

import img from '../../assets/img/imgtop.jpeg';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  height: 235vw;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.dois ? '7vw 3vw' : '7vw 3vw 12vw 3vw'};
  width: 94vw;
  height: 24vw;
  margin-top: 6vw;
  background: ${props => props.dois ? `linear-gradient(280deg, transparent 0%, #364C55 50%), url(${img})` : '#364C55'};
  background-repeat: no-repeat;
  background-position: right;
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: ${props => props.size ? '1.4vw' : '4vw'};
  margin-bottom: 1.5vw;
  margin-top: 1vw;
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
  font-size: 1.1vw;
  font-weight: 900;
  color: ${props => props.down ? '#35363a' : '#FFF'};
  margin-top: 1vw;
  letter-spacing: 0.1vw;
  background-color: ${props => props.down ? '#afe097' : '#000'};
  margin-left: ${props => props.left ? '1vw' : null};
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
  height: ${props => props.size ? '35vw' : '15vw'};
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.down ? '1.5vw' : '2vw'};
  color: ${props => props.color ? '#fff' : '#35363a'};
  font-weight: 900;
  margin-bottom: 1vw;
  margin-top: ${props => props.option ? '1vw' : null};
`;

export const TextInfo = styled.text`
  font-family: Filson;
  font-size: 1.3vw;
  color: ${props => props.bold ? '#000' : '#35363a'};
  color:  ${props => props.color ? '#FFF' : null} !important;
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
  height: 35vw;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width ? '35vw' : '23vw'};
  height: ${props => props.height ? '35vw' : '18.5vw'};
  padding: ${props => props.down ? '3.5vw 1vw' : '1vw 1vw'};
  margin-left: ${props => props.left ? null : '10vw'};
  margin-left: ${props => props.leftdown ? '10vw' : null} !important;
`;

export const Icon = styled.img`
  width: ${props => props.size ? '2.5vw' : '3vw'};
  height: ${props => props.size ? '2.5vw' : '3vw'};
  margin-bottom: ${props => props.size ? '0.5vw' : null};
`;

export const ImageUser = styled.img`
  width: 9vw;
  height: 10vw;
  margin-left: 10vw;
`;

export const Example = styled.div`
  height: 20vw;
  margin-top: 2vw;
`;

export const Space = styled.div`
  height: ${props => props.size ? '3vw' : '0.5vw'};
`;

export const Bottom = styled.div`
  display: flex;
  width: 90vw;
  height: 19.5vw;
  background-color: #172C36;
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