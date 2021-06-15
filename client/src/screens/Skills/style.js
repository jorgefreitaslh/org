import styled from 'styled-components';

export const App = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Body = styled.div`
  border: 0;
  width: 100vw;
  height: 148vw;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100vw;
  height: 24vw;
  margin-top: 7vw;
  filter: grayscale(100%);
`;

export const Title = styled.text`
  font-family: FilsonBold;
  font-size: 5vw;
  color: #35363a;
  line-height: 5.9vw;
  position: absolute;
  margin-top: 12vw;
  margin-left: 5vw;
`;

export const Arrow = styled.img`
  width: 1.5vw;
  position: absolute;
  margin-top: 25.1vw;
  margin-left: 5vw;
  transform: rotate(180deg);
`;

export const Back = styled.text`
  font-family: Filson;
  font-size: 1.4vw;
  color: #FFF;
  font-weight: 900;
  position: absolute;
  margin-top: 25vw;
  margin-left: 7vw;
  &:hover {
      cursor: pointer;
      opacity: 0.8;
  }
`;

export const SubTitle = styled.text`
  font-family: FilsonBold;
  font-size: 2.7vw;
  color: #35363a;
  margin-top: 5vw;
  margin-left: 3vw;
`;

export const Skills = styled.div`
  width: 93vw;
  padding: 1vw 3.5vw;
  display: flex;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  font-family: FilsonBold;
  font-size: 1.3vw;
  color: #35363a;
  text-decoration: underline;
  margin: 1.3vw 0.5vw;
`;

export const Options = styled.div`
  width: 97vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 3vw;
`;

export const Option = styled.div`
  width: 29vw;
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  margin-right: ${props => props.left ? '4vw' : '3vw'};
`;

export const OptionImg = styled.img`
  width: 29vw;
  height: 20vw;
`;

export const OptionText = styled.text`
  font-family: ${props => props.title ? 'FilsonBold' : 'Filson'};
  font-size: ${props => props.title ? '1.5vw' : '1.1vw'};
  color: #35363a;
  margin-top: ${props => props.title ? null : '1vw'};
  text-decoration: ${props => props.underline ? 'underline' : null};
  margin-left: ${props => props.left ? '1.5vw' : null};
  margin-bottom: ${props => props.bottom ? '4vw' : null};
  font-size: ${props => props.bottom ? '1.3vw' : null} !important;
  line-height: ${props => props.bottom ? '1.8vw' : null} !important;
`;