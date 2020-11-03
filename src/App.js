/* eslint-disable jsx-a11y/accessible-emoji */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './components/Button';
import WishListItem from './components/WishlistItems';
import GlobalStyle from './GlobalStyle';

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  & > * {
    margin: 1rem;
  }
`;

function App() {
  return (
    <Router>
      <UL>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/imprint">Imprint</Link>
        </li>
      </UL>
      <GlobalStyle />
      <Switch>
        <Route path="/contact">
          Contacts
          <h3>Numbers - Email - and other stuff</h3>
          <p>This is the part of the website where you find my contacs </p>
          <ol>
            <li>XXX</li>
            <li>OOO</li>
            <li>III</li>
          </ol>
        </Route>
        <Route path="/aboutUs">About Us</Route>
        <Route path="/imprint">
          Imprint
          <h3>REALLY IMPORTANT</h3>
        </Route>

        <Route path="/">
          <WishListItem title="Make a Wish" />

          <Button>🎁</Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
