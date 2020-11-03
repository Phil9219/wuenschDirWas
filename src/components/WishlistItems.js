import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px auto;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 70px lightblue;
  font-size: 25px;
  display: flex;
  justify-content: center;
  width: 20%;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
