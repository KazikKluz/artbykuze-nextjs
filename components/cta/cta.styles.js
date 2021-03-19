import styled from "styled-components";

export const Container = styled.div`
  background-color: #510860;
  width: 100%;
  height: 55vh;
  display: flex;
  color: #fff;
  text-align: left;
  justify-content: center;
  align-content: center;
`;

export const InnerBox = styled.div`
  width: 300px;
  height: 500px;
  padding-top: 80px;
  padding-right: 80px;
  transform: translateX(50px);
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  line-height: 1.5rem;
  padding-bottom: 1rem;
  font-weight: 500;
`;

export const Heading = styled.h5`
  padding: 1.5rem 4rem 1.5rem 0;
  text-align: left;
  font-size: 0.8rem;
`;
