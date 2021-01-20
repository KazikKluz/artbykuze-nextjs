import styled from "styled-components";

export const Frame = styled.div`
  background-color: #2b1d00;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  color: #fff;
  display: inline-block;
  padding-top: 35px;
`
export const Buttons = styled.div`
  padding-top: 25px;
  display: inline-block;
  margin-right: 200px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  transform: translateX(50px);
`

export const TopButton = styled.button`
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */

  &:hover {
    background-color: #555;
  }

`
