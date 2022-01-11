import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => {
      return {
        ...provided,
        backgroundColor: "var(--color-ui-base)",
        color: "var(--color--text)",
        border: "none",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        boxShadow: "var(--shadow)",
        height: "5rem",
      };
    },
    option: (provided, state) => {
      return {
        ...provided,
        cursor: "pointer",
        color: "var(--color-text)",
        backgroundColor: state.isSelected
          ? "var(--color-bg)"
          : "var(--color-ui-base)",
      };
    },
  },
})`
  width: 20rem;
  border-radius: 0.5rem;
  font-size: var(--fs-md);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--color-text) !important;
  }

  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;
