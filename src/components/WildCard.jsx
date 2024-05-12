import React from 'react';
import styled from 'styled-components';

export default function WildCard({ txt, time }) {
  const Thumbnail = styled.div`
    background-color: rgb(85, 89, 92);
    width: 348px;
    height: 225px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `;
  const CardBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    width: 348px;
    height: 159px;
    background-color: white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: -1px 5px 16px -1px rgba(0, 0, 0, 0.37);
    -webkit-box-shadow: -1px 5px 16px -1px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: -1px 5px 16px -1px rgba(0, 0, 0, 0.37);
  `;
  const CardText = styled.div`
    font-size: 17px;
    margin-bottom: 20px;
  `;
  const CardItems = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const WrapButton = styled.div`
    display: flex;
  `;
  const ViewButton = styled.button`
    display: inline-block;
    padding: 7px;
    background-color: transparent;
    border: 1px solid transparent;
    color: #6c757d;
    border-color: #6c757d;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: #6c757d;
      color: white;
    }
  `;
  const EditButton = styled.button`
    display: inline-block;
    padding: 7px;
    background-color: transparent;
    border: 1px solid transparent;
    color: #6c757d;
    border-color: #6c757d;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: #6c757d;
      color: white;
    }
  `;
  const TimeText = styled.div`
    display: inline-block;
    padding: 7px;
    color: #6c757d;
    font-size: 13px;
  `;
  return (
    <div>
      <Thumbnail>Thumbnail</Thumbnail>
      <CardBody>
        <CardText>{txt}</CardText>
        <CardItems>
          <WrapButton>
            <ViewButton>View</ViewButton>
            <EditButton>Edit</EditButton>
          </WrapButton>
          <TimeText>{time}</TimeText>
        </CardItems>
      </CardBody>
    </div>
  );
}
