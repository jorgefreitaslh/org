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

export const Top = styled.div`
  width: 85vw;
  display: flex;
  justify-content: center;
  padding: 3vw 0vw;
  border-bottom: 0.1vw solid #35363a;
`;

export const Div = styled.div`
  width: ${props => props.right ? '35vw' : '50vw'};
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.right ? null : 'column'};
`;

export const Logo = styled.img`
  width: 15vw;
  position: absolute;  
  top: 2vw;
  left: 1.5vw;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.subtitle ? '1.7vw' : '3.5vw'};
  font-size: ${props => props.no ? '3vw' : null} !important;
  color: ${props => props.subtitle ? '#777' : '#35363a'};
  font-weight: 900;
  margin-top: ${props => props.subtitle ? '1vw' : null};
`;

export const Option = styled.div`
  width: 10vw;
  height: 4.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 2.3vw;
  margin-left: ${props => props.left ? null : '-4vw'};
`;

export const Ball = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 1.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.select ? '0.1vw solid #FFF' : '0.1vw solid #35363a'};
  position: abolute;
  background-color: ${props => props.select ? '#439bd7' : '#ecf0f1'};
  transition: background-color 0.5s ease;
  transition: border 0.5s ease;
`;

export const Line = styled.div`
  width: 8vw;
  height: 0.3vw;
  border-top: ${props => props.select ? '0.1vw solid #FFF' : '0.1vw solid #35363a'};
  border-bottom: ${props => props.select ? '0.1vw solid #FFF' : '0.1vw solid #35363a'};
  background-color: ${props => props.select ? '#439bd7' : null};
  margin-left: -3.4vw;
  margin-top: 3.2vw;
  transition: background-color 0.5s ease;
  transition: border 0.5s ease;
`

export const Text = styled.text`
  width: ${props => props.confirm ? '60vw' : null};
  text-align: ${props => props.confirm ? 'center' : null};
  font-family: Filson;
  font-size: ${props => props.size ? '1.05vw' : '1.2vw'};
  color: ${props => props.select ? '#FFF' : '#35363a'};
  margin-left: ${props => props.left ? '-0.1vw' : null};
  font-weight: 900;
  transition: color 0.5s ease;
  text-decoration: ${props => props.click ? 'underline' : null};
  margin-top: ${props => props.click ? '3.5vw' : null};
  margin-top: ${props => props.size ? '0.2vw' : null};
  margin-top: ${props => props.modal ? '0.5vw' : null} !important;
  margin-left: ${props => props.click ? '2vw' : null};
  margin-left: ${props => props.modal ? '1vw' : null} !important;
  &:hover {
    cursor: ${props => props.click ? 'pointer' : null};
  }
`;

export const Mentors = styled.div`
  width: 85vw;
  display: ${props => props.display ? 'flex' : 'none'};
  justify-content: center;
  margin-top: 2vw;
  border-top: 0.1vw solid #ccc;
`;

export const CenterLeft = styled.div`
  width: 24.5vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 2vw;
`;

export const LeftTitle = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.size ? '1.4vw' : '1.7vw'};
  color: #35363a;
  font-weight: 900;
  margin-top: ${props => props.size ? '1vw' : '3vw'};
  margin-bottom: ${props => props.size ? '1vw' : null};
  font-size: ${props => props.confirm ? '1.3vw' : null} !important;
  margin-bottom: ${props => props.confirm ? '1vw' : null} !important;
`;

export const AreaOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Area = styled.div`
  display: none;
  flex-direction: column;
`;

export const Radio = styled.input`
  width: 1.15vw;
  height: 1.15vw;
  margin-right: 0.5vw
  margin-left: 1vw;
  margin-top: 0.35vw;
  &:hover{
    cursor: pointer;
  }
`;

export const IconArea = styled.img`
  width: 1vw;
  height: 1vw;
  margin-right: 0.3vw;
`;

export const AreaSelect = styled.div`
  width: 22vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-top: -0.4vw;
  display: flex;
`;

export const AreaText = styled.text`
  font-family: Filson;
  font-size: 1.2vw;
  color: #000;
  margin-left: 0.3vw;
  margin-top: 0.3vw;
  margin-bottom: 0.7vw;
  &:hover {
    cursor: pointer;
  }
`;

export const Selected = styled.div`
  width: 25vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vw;
`;

export const SelectOption = styled.div`
  height: 3vw
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2C597A;
  padding: 0.6vw 0.8vw;
  margin-right: 0.8vw;
  margin-bottom: 0.8vw;
`;

export const CenterRight = styled.div`
  width: 59.5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4vw;
  margin-top: 1vw;
`;

export const NoVolunteers = styled.div`
  width: 59.5vw;
  display: flex;
  align-items: center;
  padding-top: 3vw;
  flex-direction: column;
`;

export const Mentor = styled.div`
  width: 18vw;
  height: 32vw;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
  border: 0.1vw solid #CFD8DF;
  margin-left: ${props => props.left ? '1.5vw' : '0.5vw'};
  margin-right: ${props => props.left ? '1.5vw' : '0.5vw'};
  margin-top: 1vw;
  &:hover{
    cursor: pointer;
    box-shadow: 0 0 2vw #CCC
  }
`;

export const Img = styled.img`
  width: ${props => props.size ? '15vw' : '18.2vw'};
  height: ${props => props.size ? '15.1vw' : '18vw'};
  margin-left: -0.1vw;
  margin-top: -0.1vw;
  border: ${props => props.size ? ' 0.1vw solid #777' : null};
`;

export const MentorName = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.size ? '1vw' : '1.7vw'};
  font-size:  ${props => props.modal ? '1.1vw' : null} !important;
  color: #35363a;
  font-weight: 900;
  margin-top: ${props => props.size ? '0.5vw' : '1vw'};
  margin-left:  ${props => props.modal ? '-1.5vw' : '1vw'};
  margin-left:  ${props => props.top ? '1vw' : null} !important;
  margin-top: ${props => props.top ? '2vw' : null} !important;
`;


export const MentorJob = styled.text`
  font-family: Filson;
  font-size: ${props => props.size ? '0.8vw' : '0.9vw'};
  font-size: ${props => props.confirm ? '1.1vw' : null} !important;
  font-size: ${props => props.modal ? '1vw' : null} !important;
  color: #35363a;
  font-weight: 900;
  margin-top: ${props => props.size ? null : '0.5vw'};
  margin-top: ${props => props.confirm ? '1vw' : null} !important;
  margin-left: ${props => props.size ? null : '1vw'};
  line-height: 1.8vw;
`;

export const Skills = styled.div`
  width: ${props => props.modal ? '23.5vw' : '16vw'};
  height: ${props => props.modal ? '7vw' : '3.5vw'};
  display: flex;
  flex-wrap: wrap;
  margin-left: ${props => props.modal ? '-1.5vw' : '1vw'};
  margin-top: ${props => props.modal ? '1vw' : null};
`;

export const Button = styled.button`
  width: 7vw;
  height: 2.5vw;
  border-radius: 1.5vw;
  border: 0.2vw solid #ace4e9;
  font-family: FilsonBold;
  font-size: 1vw;
  display: flex,
  justify-content: center;
  align-items: center;
  background-color: ${props => props.select ? '#ace4e9' : '#ecf0f1'};
  margin-top: ${props => props.position ? '-31vw' : null} !important;
  margin-bottom: ${props => props.position ? '29vw' : null} !important;
  margin-left: ${props => props.remove ? '11.5vw' : null} !important;
  margin-top: ${props => props.remove ? '-31vw' : null} !important;
  margin-bottom: ${props => props.remove ? '29vw' : null} !important;
  margin-left: ${props => props.position ? '10.5vw' : null} !important;
  margin-left: ${props => props.modal ? '20.5vw' : null};
  margin-top: ${props => props.modal ? '37vw' : '1vw'};
  position: ${props => props.modal ? 'absolute' : null};
  &:hover {
    cursor: pointer;
  }
`;

export const ShowMore = styled.button`
  width: ${props => props.back ? '12vw' : '60vw'};
  height: 3.5vw;
  border: ${props => props.color ? '0.1vw solid #777' : '0.1vw solid #35363a'};
  border: ${props => props.off ? '0.1vw solid #ccc' : null} !important;
  font-family: FilsonBold;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color ? '#777' : null};
  color: ${props => props.off ? '#ccc' : null} !important;
  background-color: #ecf0f1;
  transition: background-color 0.5s ease;
  margin-top: ${props => props.color ? '5.5vw' : '3vw'};
  margin-left: ${props => props.color ? '3vw' : null};
  &:hover {
    cursor: ${props => props.off ? 'default' : 'pointer'} !important;
    background-color: ${props => props.off ? null : '#35363a'};
    color: #FFF;
  }
`;

export const Next = styled.button`
  width: 20vw;
  height: 3.5vw;
  font-family: FilsonBold;
  font-size: 1.2vw;
  display: flex,
  justify-content: center;
  align-items: center;
  background-color: ${props => props.on ? '#777' : '#439bd7'};
  color: ${props => props.on ? '#CCC' : null};
  transition: opacity 1s ease;
  transition: background-color 1s ease;
  transition: color 1s ease;
  border: 0;
  margin-top: 3vw;
  margin-left: ${props => props.left ? '0vw' : '39.4vw'};
  &:hover {
    opacity: ${props => props.on ? null : '0.8'};
    cursor: ${props => props.on ? 'default' : 'pointer'};
  }
`;

export const Availability = styled.div`
  width: 85vw;
  display: ${props => props.display ? 'flex' : 'none'};
  justify-content: ${props => props.align ? 'center' : null};
  flex-direction: column;
`;

export const Information = styled.div`
  width: ${props => props.confirm ? '75vw' : '85vw'};
  display: flex;
  margin-top: ${props => props.top ? '1vw' : '-1vw'};
  margin-bottom: ${props => props.top ? '3vw' : null};
  border-bottom: ${props => props.confirm ? '0.1vw solid #CCC' : null};
  padding-bottom: ${props => props.confirm ? '3vw' : null};
  flex-direction: ${props => props.confirm ? 'column' : null};
  margin-top: ${props => props.confirmtop ? '-3vw' : null} !important;
  margin-bottom: ${props => props.confirmtop ? '3vw' : null} !important;
  flex-wrap: wrap;
`;

export const AvailabilityCenter = styled.div`
  width: 85vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 0.1vw solid #ccc;
  padding: 1vw 0vw;
`;

export const NumberQuestion = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 1.2vw;
  border: 0.2vw solid #439bd7;
  font-family: FilsonBold;
  font-size: 1.4vw;
  color: #35363a;
  font-weight: 900;
  margin-top: 0.6vw;
  margin-right: 0.5vw;
  margin-left: ${props => props.left ? '2.5vw' : null};
  margin-left: ${props => props.left2 ? '-25.7vw' : null};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div`
  width: ${props => props.size ? '46vw' : null};
  width: ${props => props.bottom ? '50vw' : null};
  height: ${props => props.bottom ? '6.5vw' : null};
  width: ${props => props.wrap ? '50vw' : null} !important;
  height: ${props => props.text ? '8.5vw' : null} !important;
  display: flex;
  margin-top: 1vw;
  border-bottom: ${props => props.bottom ? '0.1vw solid #ccc' : null};
  border-bottom: ${props => props.wrap ? '0.1vw solid #ccc' : null};
  margin-left: ${props => props.bottom ? '4.5vw' : null};
  flex-wrap: ${props => props.wrap ? 'wrap' : null};
  padding-bottom: ${props => props.wrap ? '1.5vw' : null};
`;

export const MentorSkill = styled.text`
  width:${props => props.nocolor ? '48vw' : null};
  font-family: Filson;
  font-size: ${props => props.nocolor ? '1.1vw' : '1vw'};
  background-color: ${props => props.nocolor ? null : '#ace4e9'};
  color: #35363a;
  font-weight: 900;
  padding: 0.5vw 1vw;
  margin-right: 0.5vw;
  margin-left: ${props => props.nocolor ? '3vw' : '0.5vw'};
`;

export const Input = styled.select`
  width: 100vw;
  height: 3.5vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #35363a;
  color: #000;
  font-size: 1.1vw;
  padding-left: 2vw;
`;

export const TextBox = styled.textarea`
  width: ${props => props.size ? '53.7vw' : '100vw'};
  height: ${props => props.size ? '8vw' : '5vw'};
  background-color: #ecf0f1;
  border: ${props => props.size ? '0.1vw solid #777' : '0.1vw solid #35363a'};
  border-radius: ${props => props.size ? null : '0.2vw'};
  color: #000;
  font-family: Filson;
  font-size: 1.1vw;
  padding-left: 1vw;
  padding-top: 1vw;
  width: ${props => props.confirm ? '43vw' : null} !important;
  height: ${props => props.confirm ? '10vw' : null} !important;
  border: ${props => props.confirm ? '0.1vw solid #35363a' : null} !important;
  margin-top: ${props => props.confirm ? '0.5vw' : null} !important;
`;

export const DateTime = styled.input`
  height: 3.5vw;
  font-family: FilsonBold;
  font-size: 1vw;
  color: #35363a;
  background-color: #CCC;
  border: 0;
  border: 0.1vw solid #777;
  margin-left: 0.5vw;
  margin-bottom: 1vw;
  margin-right: 0.5vw;
  padding: 0vw 1vw;
`;

export const DateOk = styled.div`
  width: 15vw;
  height: 3.7vw;
  font-family: FilsonBold;
  font-size: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #35363a;
  background-color: #439bd7;
  margin-left: 0.5vw;
  margin-bottom: 1vw;
  margin-right: 0.5vw;
`;

export const BottomButtons = styled.div`
  width: 90vw;
  height: 8vw;
  display: flex;
  justify-content: space-between;
  position: ${props => props.details ? 'absolute' : null};
  margin-left: ${props => props.details ? '-61vw' : '-2.5vw'};
  margin-top: ${props => props.details ? '50vw' : null};
  margin-left: ${props => props.confirm ? '-7.5vw' : null} !important;
  margin-top: ${props => props.confirm ? '-2vw' : null} !important;
  margin-bottom: ${props => props.confirm ? '2vw' : null} !important;
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
  background-color: rgba(236, 240, 241, 0.7);
  transition: visibility 0s, opacity 1s linear;
`;

export const SignUpDiv = styled.div`
  width: 60vw;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(236, 240, 241);
  border: 0.1vw solid #000;
`;

export const Details = styled.div`
  width: 85vw;
  display: ${props => props.display ? 'flex' : 'none'};
  justify-content: center;
`;

export const DetailsDiv = styled.div`
  width:  ${props => props.left ? '30vw' : '55vw'};
  display: flex;
  flex-direction: column;
  padding: ${props => props.left ? null : '4vw 0'};
  padding-top: ${props => props.left ? '19.2vw' : null};
  padding-left: ${props => props.left ? '3vw' : null};
`;

export const DetailsLine = styled.div`
  width: ${props => props.left ? '35vw' : '50vw'};
  display: flex;
  flex-direction: ${props => props.direction ? 'column' : null};
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
  height: ${props => props.big ? '13vw' : null} !important;
  height: ${props => props.erro ? '1.5vw' : null} !important;
  font-family:  ${props => props.type ? 'Filson' : 'FilsonBold'};
  font-size: ${props => props.type ? '1vw' : '1.2vw'};
  color: red;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin-left: ${props => props.type ? '-35.5vw' : null};
`;

export const Label = styled.label`
  width: ${props => props.input ? null : '47.5vw'};
  height: 1.5vw;
  font-family: Filson;
  font-size: 1vw;
  color: #000;
  margin-bottom: 0.5vw;
  margin-top: ${props => props.top ? '1vw' : '2.5vw'};
`;

export const Form = styled.input`
  width: ${props => props.input ? '77.5vw' : '45vw'};
  width: ${props => props.small ? '24.65vw' : null} !important;
  width: ${props => props.big ? '52.69vw' : null} !important;
  height: 3.5vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #777;
  color: #000;
  font-size: 1.1vw;
  padding-left: 2vw;
`;

export const Bottom = styled.div`
  height: ${props => props.welcome ? '5vw' : '3vw'}
  margin-top: 1vw;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.welcome ? 'column' : null}
`;

export const Check = styled.input`
  width: ${props => props.skill ? '1.15vw' : '1.3vw'};
  height: ${props => props.skill ? '1.15vw' : '1.3vw'};
  margin-right: ${props => props.skill ? '0.5vw' : '1vw'};
  margin-left: ${props => props.skill ? '1vw' : null};
  margin-top: ${props => props.skill ? '0.4vw' : null};
  &:hover{
    cursor: pointer;
  }
`;

export const Info = styled.text`
  font-family: Filson;
  font-size: 1.2vw;
  color: ${props => props.color ? '#cecece' : '#000'};
  margin-top: ${props => props.color ? '1vw' : null};
  text-align: center;
  font-weight: ${props => props.click ? 900 : null};
  margin-left: ${props => props.left ? '0.3vw' : null};
  text-decoration: ${props => props.click ? 'underline' : null};
  &:hover {
    cursor: ${props => props.click ? 'pointer' : null};
    opacity: ${props => props.click ? '0.7' : null}
  }
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
  background-color: ${props => props.on ? '#000' : '#CCCC'};
  transition: background-color 0.5s ease;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const RadioButtons = styled.input`
  width: 1.3vw;
  height: 1.3vw;
  margin-right: 0.5vw;
  &:hover{
     cursor: pointer;
 }
`;

export const Confirm = styled.div`
  width: 75vw;
  display: ${props => props.display ? 'flex' : 'none'};
  flex-direction: column
`;

export const ConfirmLine = styled.div`
  width: 85vw;
  height: 0.05vw;
  background-color: #CCC;
  margin-top: 2vw;
  margin-bottom: 3vw;
`;

export const BottomConfirm = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vw;
  margin-top: 2vw;
`;

export const ButtonConfirm = styled.div`
  width: 15vw;
  height: 3.5vw;
  border: ${props => props.color ? '0.1vw solid #439bd7' : '0.1vw solid #35363a'};
  font-family: FilsonBold;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color ? '#439bd7' : '#ecf0f1'};
  transition: background-color 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #35363a;
    color: #FFF;
    border: 0.1vw solid #35363a;
  }
`;

export const ButtonUp = styled.div`
  width: 12vw;
  height: 3.5vw;
  border: 0.1vw solid #777;
  font-family: FilsonBold;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  background-color: #ecf0f1;
  transition: background-color 0.5s ease;
  margin-top: 5.5vw;
  margin-left: 3vw;
  &:hover {
    cursor: pointer;
    background-color: #35363a;
    color: #FFF;
  }
`;

export const InputUp = styled.input`
  opacity: 0;
  margin-left: 4vw;
  position: absolute;
  &:hover {
    cursor: pointer
  }
`;

export const MentorModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 0s, opacity 0.2s linear;
`;

export const MentorDiv = styled.div`
  width: 55vw;
  height: 40.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(236, 240, 241);
  border: 0.1vw solid #ccc;
  padding-top: 2vw;
  border-radius: 0.2vw;
`;

export const Close = styled.img`
  width: 1.1vw;
  position: absolute;
  margin-left: 51.5vw;
  margin-top: -40.5vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const MentorSide = styled.div`
  width: ${props => props.size ? '22vw' : '27vw'};
  height: 39vw;
  display: flex;
  flex-direction: column;
  padding-left: 1.5vw;
  margin-top: -2vw;
`;

export const MentorImg = styled.img`
  width: 25vw;
  height: 26vw;
  margin-left: -1.5vw
`;

export const Image = styled.img`
  width: 17vw;
  height: 18vw;
  margin-top: 5vw;
  margin-bottom: 3vw;
`;

export const IconOk = styled.img`
  width: 1vw;
  height: 1vw;
`;

export const Ok = styled.div`
  width: 2vw;
  height: 3.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CCC;
  margin-left: -0.5vw;
  margin-bottom: 1vw;
  border: 0.1vw solid #777;
  transition: background-color 0.5s ease;
  border-left: 0;
  &:hover {
    cursor: pointer;
    background-color: #777;
  }
`;