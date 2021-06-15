import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  width: ${props => props.width ? '50vw' : '100vw'};
  height: ${props => props.width ? '15vw' : '20vw'};
  background-color: #3e9ad9;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.width ? 'column' : null};
  border-right: 0.1vw solid #ecf0f1;
`;

export const Logo = styled.img`
  width: 10vw;
`;

export const Text = styled.text`
  font-family: FilsonBold;
  font-size: 0.8vw;
  font-weight: 900;
  color: #ecf0f1;
  text-align: center;
  letter-spacing: 0.1vw;
  line-height: 1.2vw;
  padding: 0.5vw;
  &: hover{
    background-color:  ${props => props.button ? '#FFF' : null};
    color:  ${props => props.button ? '#3e9ad9' : null};
    cursor: ${props => props.button ? 'pointer' : null};
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 15vw;
`;

export const SocialMedia = styled.img`
  width: ${props => props.top ? '1.8vw' : '1.4vw'};
  margin-bottom: ${props => props.top ? '-0.2vw' : null};
  margin-top: 0.5vw;
  padding: 0.3vw;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;