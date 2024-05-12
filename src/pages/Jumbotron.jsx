import React from 'react';
import styled from 'styled-components';

export default function Jumbotron() {
  const WrapJumbotron = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 458px;
  `;
  const JumbotronHeading = styled.div`
    font-size: 40px;
  `;
  const JumbotronInnerText = styled.div`
    margin: 10px;
    color: #6c757d;
    text-align: center;
    width: 45%;
    font-size: 20px;
  `;
  const WrapButton = styled.div`
    margin: 15px;
    display: flex;
  `;
  const JumbotronFirstButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    margin: 5px;
    cursor: pointer;
    filter: brightness(1);
    transition: 0.25s;
    &:hover {
      filter: brightness(0.85);
    }
  `;
  const JumbotronSecondButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: #6c757d;
    border: none;
    border-radius: 5px;
    color: white;
    margin: 5px;
    cursor: pointer;
    filter: brightness(1);
    transition: 0.25s;
    &:hover {
      filter: brightness(0.85);
    }
  `;
  return (
    <WrapJumbotron>
      <JumbotronHeading>Album example</JumbotronHeading>
      <JumbotronInnerText>
        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet,
        but not too short so folks don’t simply skip over it entirely.
      </JumbotronInnerText>
      <WrapButton>
        <JumbotronFirstButton>Main call to action</JumbotronFirstButton>
        <JumbotronSecondButton>Secondary Action</JumbotronSecondButton>
      </WrapButton>
    </WrapJumbotron>
  );
}
