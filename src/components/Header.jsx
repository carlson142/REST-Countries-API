import React from "react";
import styled from "styled-components";

import { useState, useEffect } from "react";

import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-bg);
`;

const Wrapper = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: var(--color-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-lg);

  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-md);

  cursor: pointer;

  text-transform: capitalize;
`;

const Header = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoonSharp />}
            <span style={{ marginLeft: "0.75rem" }}> {theme} mode</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
