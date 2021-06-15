import styled from 'styled-components';

//Images
import image1 from '../../assets/img/1.jpeg';
import image2 from '../../assets/img/2.png';
import image3 from '../../assets/img/3.jpeg';
import image4 from '../../assets/img/4.jpeg';


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
  padding-top: ${props => props.top ? '10vw' : '15vw'};
  padding-bottom: ${props => props.bottom ? '10vw' : null};
`;

export const Section = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  display: ${props => props.display ? 'none' : null};
  margin-bottom: 5vw;
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
  font-size: ${props => props.profile ? '1.2vw' : '2.5vw'};
  color: ${props => props.option ? '#FFF' : '#35363a'};
  font-weight: 900;
  margin-top: ${props => props.profile ? '1.5vw' : null};
  text-align: ${props => props.welcome ? 'center' : null};
`;

export const Space = styled.div`
  height: ${props => props.size ? '1vw' : '2.5vw'};
  font-family: FilsonBold;
  font-size: 1.2vw;
  color: red;
  font-weight: 900;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: ${props => props.input ? null : '47.5vw'};
  height: 1.5vw;
  font-family: Filson;
  font-size: 1vw;
  color: #000;
  margin-bottom: 0.5vw;
  margin-top: ${props => props.input ? '1vw' : '2vw'};
`;

export const Input = styled.input`
  width: ${props => props.input ? '77.5vw' : '45vw'};
  height: 3.5vw;
  background-color: #ecf0f1;
  border: 0.1vw solid #35363a;
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

export const Radio = styled.input`
  width: ${props => props.skill ? '1.15vw' : '1.3vw'};
  height: ${props => props.skill ? '1.15vw' : '1.3vw'};
  margin-right: ${props => props.skill ? '0.5vw' : '1vw'};
  margin-left: ${props => props.skill ? '1vw' : null};
  margin-top: ${props => props.skill ? '0.4vw' : null};
  &:hover{
    cursor: pointer;
  }
`;

export const Text = styled.text`
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

export const Button = styled.button`
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

export const Photo = styled.div`
  width: 80vw;
  box-shadow: 0.3vw 0.3vw 0.3vw #E5E3E3;
  border-radius: 0.5vw;
  margin-top: 1vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonUp = styled.div`
  width: ${props => props.welcome ? '18vw' : '13vw'};
  height: ${props => props.welcome ? '3.5vw' : '2.5vw'};
  border-radius: ${props => props.welcome ? null : '1.5vw'};
  font-family: ${props => props.welcome ? 'FilsonBold' : 'Filson'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.welcome ? '1.2vw' : '1vw'};
  font-weight: 900;
  color: ${props => props.welcome ? '#35363a' : '#ecf0f1'};
  margin-top: ${props => props.welcome ? null : '4vw'};
  margin-bottom: ${props => props.welcome ? '-3.5vw' : '4vw'};
  letter-spacing: 0.1vw;
  background-color: ${props => props.welcome ? '#afe097' : '#35363a'};
  transition: background-color 0.5s ease;
  border: 0;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.welcome ? '#35363a' : null};
    color: ${props => props.welcome ? '#ecf0f1' : null};

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
  width: ${props => props.img ? '15vw' : null};
  height: ${props => props.img ? '15vw' : null};
  margin-bottom: ${props => props.img ? '5vw' : null};
  border: ${props => props.img ? '0.1vw solid #d1dbe4' : null};
  background-color: ${props => props.img ? '#edf2f6' : null};
  padding: ${props => props.img ? '1vw' : null};
  box-shadow: ${props => props.img ? '0.1vw 0.1vw 1vw #d1dbe4' : null};
`;

export const Close = styled.img`
  width: ${props => props.img ? '2.5vw' : '0vw'};
  height: ${props => props.img ? '2.5vw' : '0vw'};
  position: absolute;
  margin-top: 9.5vw;
  margin-left: 8vw;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Question = styled.text`
  font-family: Filson;
  font-size: 1.2vw;
  color: ${props => props.white ? '#FFF' : '#000'};
  text-align: center;
  font-weight: ${props => props.font ? null : 900};
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-left: ${props => props.left ? '1vw' : null}
`;

export const Option = styled.div`
  height: ${props => props.hour ? null : '3vw'};
  margin-bottom: ${props => props.bottom ? '1vw' : '0.5vw'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.hour ? '25vw' : null};
  flex-wrap: ${props => props.hour ? 'wrap' : null};
  margin-bottom: ${props => props.hour ? '2vw' : null};
`;

export const Line = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.input`
  width: 3vw;
  height: 1.5vw;
  margin-left: 1vw;
  &:hover{
     cursor: pointer;
 }
`;

export const Buttons = styled.input`
  width: 1.3vw;
  height: 1.3vw;
  margin-left: ${props => props.left ? 'null' : '1vw'};
  margin-top: -0.05vw;
  &:hover{
     cursor: pointer;
 }
`;

export const Selected = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SelectOption = styled.div`
  height: 3vw
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2C597A;
  padding: 0.6vw 0.8vw;
  margin-left: 0.7vw;
  margin-right: 0.7vw;
  margin-bottom: 1.4vw;
`;

export const Areas = styled.div`
  width: 69vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vw;
  margin-bottom: 2vw;
`;

export const Area = styled.div`
  width: 23vw;
`;

export const AreaOption = styled.div`
  width: 18.5vw;
  height: 6vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-bottom: 0.8vw;
  padding: 0.5vw;
  padding-right: 3vw;
  background-image: url(${props => props.img === 'digital' ?
    image1
    :
    props => props.img === 'design' ?
      image2
      :
      props => props.img === 'service' ?
        image3
        :
        props => props.img === 'ecommerce' ?
          image4
          :
          image1
  });
  background-size: 100%;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const IconArea = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  position: absolute;
  margin-left: 19.7vw;
  margin-top: 0.2vw;
`;

export const AreaSelect = styled.div`
  width: 22vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-bottom: 0.5vw;
  border-bottom: 0.1vw solid #CCCC;
  display: none;
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