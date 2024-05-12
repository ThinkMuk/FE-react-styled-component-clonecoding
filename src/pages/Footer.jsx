import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  const WrapFooter = styled.div`
    width: 100%;
    height: 152px;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    color: #6c757d;
  `;
  const WrapText = styled.div`
    margin-left: 50px;
  `;
  const BackToTop = styled.a`
    color: #007bff;
    margin-right: 50px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;
  const KeyColor = styled.span`
    color: #007bff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <WrapFooter>
      <WrapText>
        Album example is © Bootstrap, but please download and customize it for yourself! <br></br>New to Bootstrap?
        <KeyColor> Visit the homepage</KeyColor> or read our <KeyColor>getting started guide</KeyColor>.
      </WrapText>
      <BackToTop>Back to top</BackToTop>
    </WrapFooter>
  );
}
