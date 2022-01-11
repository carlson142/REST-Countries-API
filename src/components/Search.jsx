import React from "react";
import styled from "styled-components";

import { IoSearchSharp } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);

  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  box-shadow: var(--shadow);

  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 28rem;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  outline: none;
  border: none;
  color: var(--color-text);
  background-color: var(--color-ui-base);
  font-size: var(--fs-md);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearchSharp size={20} />
      <Input onChange={(e) => setSearch(e.target.value)} value={search}></Input>
    </InputContainer>
  );
};

export default Search;
