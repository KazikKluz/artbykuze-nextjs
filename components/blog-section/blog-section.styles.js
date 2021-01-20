import styled, { css } from "styled-components";

const Container = css`
  padding: 70px;
  max-height: 490px;
  max-width: 1190px;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 45px;
`;

export const BlogPart = styled.div`
  background-color: #f7f7f7;
  text-align: center;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 50px 100px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid grey;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

export const BlogCardContainer = styled.div`
  ${Container}
`;
