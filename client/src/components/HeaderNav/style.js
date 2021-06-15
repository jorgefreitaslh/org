import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  width: 92%;
  height: 7vw;
  background-color: #ecf0f1;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

export const Logo = styled.img`
  width: 14vw;
  margin-left: -5vw;
  margin-top: 1vw;
  &: hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const TxtHeader = styled.div`
  display: flex;
  margin-left: 60vw;
  justify-content: flex-end;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ImageUser = styled.img`
  width: 2vw;
  height: 2vw;
  border-radius: 1vw;
  margin-top: 0.6vw;
`;

export const Txt = styled.text`
  font-family: FilsonBold;
  font-size: 1.1vw;
  color: #000;
  font-weight: 900;
  margin-left: 0.8vw;
  margin-top: ${props => props.business ? '0.5vw' : '1vw'};
  &: hover {
    cursor: ${props => props.business ? 'pointer' : null};
    opacity: ${props => props.business ? '0.8' : null};
    border-bottom: ${props => props.business ? '0.2vw solid #afe097' : null};
  }
`;

export const Menu = styled.span`
  font-family: FilsonBold;
  font-size: 1.1vw;
  color: #000;
  font-weight: 900;
  margin-left: 0.8vw;
  margin-top: 1vw;
  line-height: 2vw;
  &:hover {
      cursor: pointer;
      background-color: #afe097;
      display: inline;
  }
`;


export const Seta = styled.img`
  width: 1vw;
  height: 1vw;
  margin-top: 1.2vw;
  margin-left: 0.2vw;
`;

export const Modal = styled.div`
  width: 8vw;
  height: 8vw;
  display: flex;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  flex-direction: column;
  position: absolute;
  margin-left: 85.4vw;
  margin-top: 10.5vw;
  transition: visibility 0s, opacity 1s linear;
`;