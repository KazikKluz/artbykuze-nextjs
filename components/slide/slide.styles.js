import styled from "styled-components";

export const SlideContainer = styled.div`
  display: ${(props) => (props.show === props.id ? "block" : "none")};
`;

export const TheSlide = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  //background-position: top;
  animation: fade 1.5s;
  animation: blowUp 8s ease-in-out;
  animation-fill-mode: forwards;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  @keyframes blowUp {
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
