import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 12vh;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  position: fixed;
  // top: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
  transition: top 0.5s;
`;

export const LogoContainer = styled.div`
  max-width: 350px;
  height: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Options = styled.div`
  display: flex;
  font-weight: 200;
  cursor: pointer;
`;

export const Option = styled.div`
  align-self: center;
  padding: 0 0.9rem;
  font-size: 0.9rem;
  width: 100%;

  &:hover{
    color: #d81e5b;
  }
`;
