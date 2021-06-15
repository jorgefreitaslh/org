import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  width: 94%;
  height: 6vw;
  background-color: #ecf0f1;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

export const Logo = styled.img`
  width: 12vw;
  margin-left: 1vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const TxtHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end
`;

export const Txt = styled.text`
  font-family: FilsonBold;
  font-size: 1.1vw;
  color: #000;
  font-weight: 900;
  margin-left: ${props => props.left ? null : '1vw'};
  padding: 1vw;
  &:hover {
    background-color: #afe097;
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
  color: #ecf0f1;
  margin-left: 2vw;
  margin-right: 4vw;
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

export const Modal = styled.div`
  width: 13vw;
  height: 6.6vw;
  display: flex;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  flex-direction: column;
  position: absolute;
  margin-left: 67.6vw;
  margin-top: 12.7vw;
  transition: visibility 0s, opacity 0.4s linear;
  background-color: #ecf0f1;
  box-shadow: 0.1vw 0.1vw 1vw #777;
`;

export const Sign = styled.div`
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
  margin-left: -5vw;
`;

export const SignUpDiv = styled.div`
  width: 45vw;
  height: 36vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(236, 240, 241);
  border: 0.1vw solid #000;
  padding-top: 2vw;
`;

export const SignUp = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.profile ? '1.2vw' : '2.5vw'};
  color: ${props => props.option ? '#FFF' : '#35363a'};
  font-weight: 900;
  margin-top: ${props => props.profile ? '1.5vw' : null};
`;

export const Space = styled.div`
  height: ${props => props.size ? '1vw' : '2.5vw'};
  font-family: FilsonBold;
  font-size: 1vw;
  color: red;
  font-weight: 900;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: 37.5vw;
  height: 1.5vw;
  font-family: Filson;
  font-size: 1vw;
  color: #000;
  margin-bottom: 0.5vw;
  margin-top: ${props => props.top ? '1vw' : '2.5vw'};
`;

export const Form = styled.input`
  width: 35vw;
  height: 3.5vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #777;
  color: #000;
  font-size: 1.1vw;
  padding-left: 2vw;
`;

export const SignButton = styled.button`
  width: ${props => props.profile ? '15vw' : '7.5vw'};
  height: 4vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-top: 1.5vw;
  letter-spacing: 0.1vw;
  background-color: #777;
  transition: background-color 0.3s ease;
  border: 0;
  &:hover {
    cursor: pointer;
    background-color: #000;
  }
  &:focus {
    outline: none;
  }
`;

export const Close = styled.img`
  width: 1vw;
  margin-left: 1vw;
  position: absolute;
  margin-left: 42vw;
  margin-top: -37vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;