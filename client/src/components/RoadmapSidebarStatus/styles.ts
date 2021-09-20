import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  margin-bottom: 0.8rem;
`;

export const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  place-self: center start;
  margin-right: 1.6rem;
`;

export const StatusText = styled.span`
  font-size: 1.6rem;
  color: #647196;
`;

export const SuggestionCount = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: #647196;
`;
