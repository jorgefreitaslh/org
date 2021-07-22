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
  padding-top: 8vw;
  padding-bottom: 5vw;
`;

export const Div = styled.div`
  width: ${props => props.bottom ? '90vw' : '88vw'};
  height: ${props => props.bottom ? null : '7vw'};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.bottom ? null : 'center'};
  border-bottom: ${props => props.bottom ? '0.1vw solid #CCC' : '0.1vw solid #35363a'};
  border-bottom: ${props => props.nobottom ? 'none' : null} !important;
  margin-top: ${props => props.bottom ? '3vw' : null};
  padding-left: ${props => props.bottom ? null : '2vw'};
  border: ${props => props.div ? 0 : null} !important;
  padding-left: ${props => props.div ? 0 : null} !important;
  margin-top: ${props => props.div ? '6vw' : null} !important;
  width: ${props => props.div ? '90vw' : null} !important;
`;

export const Space = styled.div`
  height: 5vw;
`;

export const DivCourses = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  margin-left: 7vw;
`;

export const ColumnCourses = styled.div`
  width: 35vw;
`;

export const Courses = styled.div`
  width: 35vw;
  margin: 2vw 0 3vw 0;
  display: flex;
  flex-direction: column;
  background-color: #F6F9F9;
  box-shadow: 0.1vw 0.1vw 1vw #ccc;
  &:hover {
    cursor: pointer;
    box-shadow: 0.1vw 0.1vw 1vw 0.5vw #ccc;
  }
`;

export const ImageCourses = styled.img`
  width: 32vw;
  filter:grayscale(100%);
  margin-left: 1.5vw;
  margin-top: 1.5vw;
`;

export const TextCourses = styled.text`
  font-family: FilsonBold;
  font-size: 1.5vw;
  font-weight: 900;
  color: #35363a;
  margin-left: 1.5vw;
  margin-bottom: 0.5vw;
  padding: 1vw 0;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.bottom ? '2vw' : '2.3vw'};
  color: #35363a;
  font-weight: 900;
  margin-left: ${props => props.bottom ? '2vw' : null};
  padding: ${props => props.padding ? '7vw 2vw' : null};
  font-size: ${props => props.modal ? '1.5vw' : null};
  margin-left: ${props => props.left ? '2vw' : null};
  color: ${props => props.left ? '#439bd7' : null};
  padding-bottom: ${props => props.modal ? '2vw' : null};
`;

export const Menu = styled.div`
  width: 89vw;
  border-bottom: 0.1vw solid #CCC;
  margin-top: 1vw;
  padding-left: 1vw;
  padding-bottom: 1vw;
`;

export const Text = styled.text`
  font-family: Filson;
  font-size: ${props => props.modal ? '1vw' : '1.2vw'};
  padding: ${props => props.modal ? null : '1vw 2vw'};
  font-weight: 900;
  color: #35363a;
  height: 1.2vw;
  border-bottom: ${props => props.click ? '0.2vw solid #439bd7' : null};
  transition: border 0.1s ease-in-out;
  margin-left: ${props => props.modal ? '2vw' : null};
  margin-right: ${props => props.modal ? '2vw' : null};
  margin-top: ${props => props.modal ? '1vw' : null};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: ${props => props.modal ? null : 'pointer'};
  }
`;

export const Information = styled.div`
  width: 88vw;
  padding: 2vw 1vw;
  display: flex;
  overflow-y: scroll !important;
`;

export const Info = styled.div`
  width: 30vw;
  height: 21.5vw;
  padding: 1vw;
  background: linear-gradient(180deg, #000 25%, #fff 0%);
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
`;

export const InfoText = styled.text`
  font-family: Filson;
  font-size: ${props => props.title ? '1.8vw' : '1vw'};
  margin-bottom: ${props => props.title ? '1.5vw' : null};
  font-size: ${props => props.modal ? '3vw' : null} !important;
  margin-top: ${props => props.top ? '1vw' : '2.5vw'};
  margin-top: ${props => props.completed ? '1vw' : null} !important;
  margin-left: ${props => props.completed ? '2vw' : '1vw'};
  font-weight: 900;
  line-height: 1.5vw;
  color: ${props => props.title ? '#439bd7' : '#777'};
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

export const Button = styled.button`
  width: ${props => props.div ? '35vw' : '28vw'};
  height: ${props => props.div ? '6vw' : '3.5vw'};
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.div ? '1.5vw' : '1.1vw'};
  font-weight: 900;
  color: ${props => props.div ? '#35363a' : '#ecf0f1'};
  margin-left: ${props => props.div ? null : '1vw'};
  margin-top: ${props => props.div ? '3vw' : '1.5vw'};
  margin-top: ${props => props.completed ? '4vw' : null} !important;
  letter-spacing: 0.1vw;
  background-color: ${props => props.div ? '#F6F9F9' : '#3e9ad9'};
  border: 0;
  box-shadow: ${props => props.div ? '0.1vw 0.1vw 1vw #ccc' : null};
  transition: background-color 0.5s ease;
  background-color: ${props => props.off ? '#CCC' : null} !important;
  &:hover {
    background-color: #000;
    cursor: pointer;
    cursor: ${props => props.off ? 'default' : null} !important;
    color: ${props => props.div ? '#FFF' : null};
  }
  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
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
  width: ${props => props.completed ? '35vw' : '45vw'};
  height: ${props => props.completed ? '25vw' : '36vw'};
  display: flex;
  flex-direction: column;
  background: ${props => props.completed ? 'linear-gradient(180deg, #000 30%, #fff 0%)' : 'linear-gradient(180deg, #000 25%, #fff 0%)'};
  padding-top:${props => props.completed ? '1.5vw' : '2vw'};
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
  width: 1vw;
  margin-left: 1vw;
  position: absolute;
  margin-left: ${props => props.completed ? '32vw' : '42vw'};
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
  width: 13vw;
  height: 3.5vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-left: ${props => props.completed ? '15vw' : '2vw'};
  margin-top: 2.7vw;
  letter-spacing: 0.1vw;
  background-color: ${props => props.completed ? '#3e9ad9' : 'red'};
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

export const Evaluate = styled.button`
  width: 12vw;
  height: 3vw;
  font-family: FilsonBold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: 900;
  color: #ecf0f1;
  margin-left: 21vw;
  margin-top: 4vw;
  letter-spacing: 0.1vw;
  background-color: #3e9ad9;
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