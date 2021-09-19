import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.6rem;
  margin: 0.5rem;
  color: #4661e6;
  background-color: #f2f4ff;
  border: none;
  border-radius: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const FilterButtonSelected = styled(Button)`
  color: #ffffff;
  background-color: #4661e6;
  cursor: pointer;
`;

export const FilterButton = styled(Button)`
  &:hover {
    background-color: #cfd7ff;
    color: #4661e6;
    cursor: pointer;
  }
`;
