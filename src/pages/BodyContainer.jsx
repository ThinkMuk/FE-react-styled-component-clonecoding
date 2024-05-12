import React from 'react';
import styled from 'styled-components';
import WildCard from '../components/WildCard.jsx';

export default function BodyContainer() {
  const WrapContainer = styled.div`
    background-color: #f8f9fa;
    height: 1326px;
    display: flex;
    justify-content: center;
    padding: 30px;
  `;
  const WrapCard = styled.div`
    height: 1326px;
    width: 1140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  `;
  const cardData = [
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
    {
      txt: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      time: '9 mins',
    },
  ];
  return (
    <WrapContainer>
      <WrapCard>
        {cardData.map((card, idx) => (
          <WildCard key={idx} txt={card.txt} time={card.time} />
        ))}
      </WrapCard>
    </WrapContainer>
  );
}
