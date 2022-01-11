import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../components/config";

import Info from "../components/Info";

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: var(--color-ui-base);
  color: var(--color-text);

  border: none;
  font-family: var(--font);
  font-size: var(--fs-md);
  font-weight: var(--fw-md);

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: var(--shadow);
  border-radius: 0.5rem;

  cursor: pointer;
`;

const Details = () => {
  const { name } = useParams();

  const newName = name.replace(":", "");

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [country, setCountry] = useState("");

  useEffect(() => {
    axios.get(searchByCountry(newName)).then(({ data }) => {
      console.log(data[0]);
      setCountry(data[0]);
    });
  }, [newName]);

  return (
    <>
      <Button onClick={goBack}>
        {" "}
        <IoArrowBack size={20} style={{ marginRight: "1rem" }} /> Back
      </Button>
      {country && <Info country={country}></Info>}
    </>
  );
};

export default Details;
