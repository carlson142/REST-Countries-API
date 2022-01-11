import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);

  cursor: pointer;

  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  height: 15rem;
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h2`
  font-size: var(--fs-md);
  margin-bottom: 2rem;
`;

const CardList = styled.ul`
  list-style: none;
`;

const CardItem = styled.li`
  font-size: var(--fs-sm);
  font-weight: var(--fw-md);
  margin: 1rem 0;
`;

const Card = ({ img, name, info = [], onClick }) => (
  <Wrapper onClick={onClick}>
    <CardImage src={img} alt="name"></CardImage>
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardList>
        {info.map((value, idx) => {
          return (
            <CardItem key={idx}>
              <span style={{ fontWeight: "bold" }}>{value.title}</span>:{" "}
              {value.description}
            </CardItem>
          );
        })}
      </CardList>
    </CardBody>
  </Wrapper>
);

export default Card;
