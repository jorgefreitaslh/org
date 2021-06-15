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

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: 2vw;
  color: #FFF;
  font-weight: 900;
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: 1.2vw;
  padding: 1vw 2vw;
  color: #00;
`;

export const InfoData = styled.text`
  width: 7vw;
  font-family: Filson;
  font-size: 1vw;
  margin-left: ${props => props.modal ? '2.3vw' : '1.3vw'};
  color: #35363a;
  padding: 0.5vw 1vw;
  border: 0.1vw solid #000;
  border-radius: 0.3vw;
  margin-top: 1vw;
  padding-right: 0;
`;

export const ContentModal = styled.div`
  width: 41vw;
  height: 36vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #000 21%, #fff 0%);
  margin-top: -1vw;
  padding: 2vw;
`;

export const TitleModal = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.size ? '1.2vw' : '1.5vw'};
  color: ${props => props.size ? '#35363a' : '#000'};
  font-weight: 900;
  margin-left: 2vw;
  margin-top: ${props => props.size ? '1.5vw' : '3vw'};
`;

export const Close = styled.img`
  width: 2vw;
  position: absolute;
  transform: rotate(180deg);
  margin-left: 39vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Href = styled.a`
  font-family: Filson;
  font-size: 1vw;
  font-weight: 900;
  color: #35363a;
  height: 1vw;
  transition: border 0.1s ease-in-out;
  text-decoration: underline;
  margin-left: 2vw;
  margin-top: 1vw;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Cancel = styled.button`
  width: 15vw;
  height: 3.5vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-left: 26vw;
  margin-top: 4vw;
  letter-spacing: 0.1vw;
  background-color: red;
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

export const Loader = styled.img`
  width: 5vw;
  margin-top: 5vw;
`;

export const Cancelled = styled.img`
  width: 5vw;
  margin-top: 5vw;
`;

export const CancelText = styled.text`
  font-family: Filson;
  font-size: 1.4vw;
  font-weight: 900;
  color: #35363a;
  margin-top: 1.5vw;
`;