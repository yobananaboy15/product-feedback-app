import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 16px;
  margin: 5px;
  color: #4661e6;
  background-color: #f2f4ff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: #cfd7ff;
    color: #4661e6;
    cursor: pointer;
  }
`;

export const AllButton = styled(Button)`
  color: #ffffff;
  background-color: #4661e6;
`;
