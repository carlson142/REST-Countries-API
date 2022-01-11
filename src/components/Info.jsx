import React from "react";

import styled from "styled-components";

import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "./config";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;

  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(10rem, 40rem) 1fr;
    align-items: center;
    grid-gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(40rem, 60rem) 1fr;
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Container = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  font-size: var(--fs-md);
  font-weight: var(--fw-md);

  margin: 1rem 0;
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  font-weight: var(--fw-md);
  cursor: pointer;

  font-size: var(--fs-sm);
`;

const Info = ({ country }) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flag,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = country;

  const [neighb, setNeighb] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    if (borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighb(data.map((v) => v.name)));
    }
  }, [borders]);

  return (
    <Wrapper>
      <Image src={flag} alt={name}></Image>
      <Container>
        <Title>{name}</Title>
        <ListGroup>
          <List>
            <Item>
              <span style={{ fontWeight: "bold" }}>Native Name</span>:{" "}
              {nativeName}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Population</span>:{" "}
              {population}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Region</span>: {region}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Sub Region</span>:{" "}
              {subregion}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Capital</span>: {capital}
            </Item>
          </List>

          <List>
            <Item>
              <span style={{ fontWeight: "bold" }}>Top Level Domain</span>:{" "}
              {topLevelDomain}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Currencies</span>:{" "}
              {currencies.map((v) => (
                <span key={v.name}>{v.name} </span>
              ))}
            </Item>
            <Item>
              <span style={{ fontWeight: "bold" }}>Languages</span>:{" "}
              {languages.map((v) => (
                <span key={v.name}>{v.name} </span>
              ))}
            </Item>
          </List>
        </ListGroup>

        <Meta>
          <span style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
            Border Countries:
          </span>
          {!borders.length ? (
            <span>Извеняй...</span>
          ) : (
            <TagGroup>
              {neighb.map((v, idx) => (
                <Tag
                  key={idx}
                  onClick={() => {
                    nav(`/country/:${v}`);
                  }}
                >
                  {v}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </Container>
    </Wrapper>
  );
};

export default Info;
