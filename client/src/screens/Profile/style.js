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

export const Top = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
  width: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: 3vw;
  color: #000;
  font-weight: 900;
  margin-left: 1.3vw;
`;

export const Photo = styled.div`
  width: 15vw;
  box-shadow: 0.3vw 0.3vw 0.3vw #E5E3E3;
  border-radius: 0.5vw;
  margin-top: 0.5vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonUp = styled.div`
  width: 13vw;
  height: 2.5vw;
  border-radius: 1.5vw;
  font-family: 'Filson';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-bottom: 1vw;
  letter-spacing: 0.1vw;
  background-color: #35363a;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const InputUp = styled.input`
  opacity: 0;
  margin-left: -8vw;
  position: absolute;
  &:hover {
    cursor: pointer
  }
`;

export const Image = styled.img`
  width: 10vw;
  height: 10vw;
  margin-bottom: 1vw;
  margin-top: 0.5vw;
  border: 0.1vw solid #E5E3E3;
  background-color: #edf2f6;
  padding: 1vw;
  box-shadow: 0.1vw 0.1vw 1vw #E5E3E3;
`;

export const Right = styled.div`
  width: 73vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5vw;
`;

export const Name = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.delete ? '1.5vw' : '2vw'};
  color: #35363a;
  font-weight: 900;
  text-decoration: ${props => props.delete ? 'underline' : null};
  &:hover {
    cursor: ${props => props.delete ? 'pointer' : null};
    opacity: ${props => props.delete ? '0.8' : null};
  }
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: ${props => props.font ? '1vw' : '1.3vw'};
  color: #35363a;
  font-weight: ${props => props.bold ? 900 : null};
  margin-top: ${props => props.top ? '10vw' : '0.2vw'};
  margin-left: ${props => props.left ? '0.5vw' : null};
`;

export const Description = styled.div`
  width: 28vw;
  height: 9vw;
  padding-top: 1vw;
`;

export const Perfil = styled.text`
  width: 41.5vw;
  background-color: #red;
  font-family: FilsonBold;
  font-size: 2vw;
  color: #35363a;
  font-weight: 900;
  margin-bottom: 0.5vw;
  margin-top: ${props => props.top ? '3.5vw' : null};
  margin-top: ${props => props.business ? '2.6vw' : null} !important;
`;

export const Line = styled.div`
  width: 41.5vw;
  height: 0.05vw;
  background-color: ${props => props.color ? '#ccc' : '#35363a'};

`;

export const Space = styled.div`
  height: ${props => props.size ? '0.5vw' : '1vw'};
`;

export const Center = styled.div`
  width: 88vw;
  display: flex;
  margin-top: 3vw;
`;

export const Input = styled.input`
  width: 41vw;
  height: 3.5vw;
  background-color: #ecf0f1;
  border: 0;
  border-bottom: 0.1vw solid #ccc;
  color: #000;
  font-size: 1.2vw;
  &:focus {
    outline: none;
  }
`;

export const Div = styled.div`
  width: 42vw;
  margin-left: ${props => props.left ? '1.5vw' : '0.5vw'};
  margin-right: 1vw;
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  margin-bottom: -3vw;
`;

export const Select = styled.select`
  width: 41.3vw !important;
  height: 2.8vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #ccc;
  color: #000;
  font-size: 1.1vw;
  padding-left: 2vw;
  margin-top: 1vw;
  &:hover{
    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  width: 41vw;
  height: ${props => props.height ? '3vw' : '0.8vw'};
  display: flex;
  align-items: center;
  overflow-y: scroll !important;
  justify-content: ${props => props.bottom ? 'space-between' : 'none'};
  margin-top: 0.2vw;
`;

export const Skill = styled.div`
  height: 2vw; 
  font-family: Filson;
  font-size: 1.2vw;
  padding: 0.2vw 1vw;
  color: #FFF;
  display: flex;
  background-color: #2C597A;
  align-items: center;
  margin-right: 0.3vw;
`;

export const Option = styled.text`
  font-family: Filson;
  font-size: ${props => props.left ? '1.2vw' : '1vw'};
  color: #FFF;
  text-align: center;
  white-space: nowrap;
  display: ${props => props.display ? 'none' : null};
  margin-left: ${props => props.left ? '1vw' : null};
  &:hover {
    cursor: ${props => props.left ? 'pointer' : null};
    opacity: ${props => props.left ? '0.5' : null};
  }
`;

export const Buttons = styled.div`
  width: 25vw;
  height: 1vw;
  padding-top: 1vw;
  display: flex;
  align-items: center;
  margin-bottom: 0.4vw;
`;

export const Radio = styled.input`
  width: 1vw;
  height: 1vw;
  margin-left: ${props => props.left ? '1vw' : null};
  &:hover{
     cursor: pointer;
 }
`;

export const Selection = styled.div`
  width: 41vw;
  height: 4vw;
  display: ${props => props.height ? 'flex' : 'none'};
  align-items: center;
`;

export const LineOption = styled.div`
  height: 1vw;
  margin-bottom: 1vw;
  display: ${props => props.direction ? null : 'flex'};
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.left ? null : '0.5vw'};
`;

export const Options = styled.div`
  width: 42vw;
  height: ${props => props.size ? '10vw' : null};
  display: ${props => props.direction ? null : 'flex'};
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1vw;
  flex-direction: ${props => props.direction ? 'column' : null};
  padding-bottom: 0.5vw;
`;

export const Number = styled.input`
  width: 2.8vw;
  height: 1.3vw;
  font-size: 0.9vw;
  margin-left: 0.5vw;
  margin-top: 0.3vw;
  &:hover{
     cursor: pointer;
  }
`;

export const Save = styled.button`
  width: 10vw;
  height: 3.3vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0vw 2vw;
  font-size: 1.1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-left: 31.5vw;
  margin-top: -3.5vw;
  letter-spacing: 0.1vw;
  background-color: #3e9ad9;
  transition: background-color 0.5s ease;
  border: 0;
  &:hover {
    background-color: #000;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const SaveButton = styled.div`
  position: absolute;
  margin-top: ${props => props.size ? '71.5vw' : '72.4vw'};
`;

export const Ok = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  margin-top: -0.1vw;
`;

export const Erro = styled.text`
  font-family: Filson;
  font-size: 0.8vw;
  color: red;
  position: absolute;
  margin-top: 74.5vw;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  flex-direction: column;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 0s, opacity 0.2s linear;
  position: fixed;
`;

export const ContentModal = styled.div`
  width: 25vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  background: #FFF;
  padding: 2vw;
`;

export const Close = styled.img`
  width: 0.8vw;
  position: absolute;
  margin-left: 25.2vw;
  margin-top: -1vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ModalButton = styled.button`
  width: 13vw;
  height: 3.5vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-left: ${props => props.confirm ? '3vw' : null};
  margin-top: 5vw;
  letter-spacing: 0.1vw;
  background-color: ${props => props.confirm ? 'red' : '#777'};
  border: 0;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #000;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;