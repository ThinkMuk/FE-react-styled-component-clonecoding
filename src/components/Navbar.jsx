import React from 'react';
import styled from 'styled-components';
import { IoCameraOutline } from 'react-icons/io5';
import { HiBars3 } from 'react-icons/hi2';

export default function Navbar() {
  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    overflow: hidden;
    background-color: #343a40;
    color: white;
    width: 100%;
    height: 50px;
    z-index: 1000;
  `;
  const NavWrapText = styled.h3`
    display: flex;
    align-items: center;
    margin-left: 20px;
    float: left;
    cursor: pointer;
  `;
  const NavMoreInfo = styled.button`
    background-color: transparent;
    border: 0.25px solid grey;
    border-radius: 0.25rem;
    margin-right: 20px;
    padding: 2px 7px;
    float: right;
    cursor: pointer;
  `;
  const Camera = styled(IoCameraOutline)`
    font-size: 25px;
    margin: 7px;
    float: left;
  `;
  return (
    <NavContainer>
      <NavWrapText>
        <Camera />
        Album
      </NavWrapText>
      <NavMoreInfo>
        <HiBars3 color='grey' size='30' />
      </NavMoreInfo>
    </NavContainer>
  );
}
