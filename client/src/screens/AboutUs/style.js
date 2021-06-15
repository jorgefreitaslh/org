import styled from 'styled-components';

import img from '../../assets/img/imgtop.jpeg';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  height: 230vw;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 38vw;
  margin-top: 6vw;
  background: ${props => props.dois ? `linear-gradient(280deg, transparent 0%, #364C55 50%), url(${img})` : '#364C55'};
  background-repeat: no-repeat;
  background-position: right;
`;

export const Text = styled.text`
  font-family: FilsonBold;
  font-size: 3.8vw;
  color: #fff;
  font-weight: 900;
  margin-left: 9vw;
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
  flex-direction: column;
  width: 90vw;
  padding: 0 5vw;
  margin-top: 5vw;
  margin-bottom: 4vw;
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: ${props => props.size ? '1.3vw' : '2vw'};
  color: #35363a;
  font-weight: 900;
  margin-bottom: ${props => props.team ? null : '1vw'};
  margin-top: ${props => props.size ? '0.5vw' : '1vw'};
`;

export const Info = styled.text`
  font-family: Filson;
  font-size: ${props => props.size ? '1.1vw' : '1.3vw'};
  color: #35363a;
  font-weight: 900;
  line-height: ${props => props.size ? null : '2vw'};
  margin-top: ${props => props.top ? '2vw' : null};
  margin-top: ${props => props.topper ? '1vw' : null};
  margin-top: ${props => props.margin ? '0.5vw' : null} !important;
  margin-bottom: ${props => props.margin ? '0.3vw' : null} !important;
  &:hover {
    cursor:${props => props.click ? 'pointer' : null};
    opacity:${props => props.click ? '0.8' : null};
  }
`;

export const Team = styled.div`
  display: flex;
  width: 90vw;
  margin-top: 1.5vw;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TeamInfo = styled.div`
  width: ${props => props.size ? '19.5vw' : '22vw'};
  height: ${props => props.size ? '10vw' : null};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.size ? '#DBEAF5' : null};
  padding: ${props => props.size ? '1vw' : null};
  margin-bottom: ${props => props.size ? '1.5vw' : null};
`;

export const ImageTeam = styled.img`
  width: 15vw;
  filter: grayscale(100%);
`;