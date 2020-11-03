import styled from 'styled-components/macro';

const ButtonTemplate = styled.button`
  position: ${(props) => props.navigation && 'absolute'};
  bottom: ${(props) => props.navigation && '50px'};
  right: ${(props) => props.navigation && '150px'};
  border: none;
  margin: 20px;
  background: aquamarine;
  border-radius: 50%;
  font-size: 3rem;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-shadow: 0 10px 20px lightblue;
  color: white;
`;
// eslint-disable-next-line
export default ButtonTemplate;
