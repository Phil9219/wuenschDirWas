import styled from 'styled-components/macro';

const ButtonTemplate = styled.button`
  /* display: flex; */
  position: absolute;
  bottom: 0;
  right: 70px;
  border: none;
  margin: 30px auto;
  background: aquamarine;
  border-radius: 50%;
  font-size: 3rem;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-shadow: 0 10px 20px lightblue;
`;
// eslint-disable-next-line
export default function Button({ children }) {
  return <ButtonTemplate> {children} </ButtonTemplate>;
}
