/* eslint-disable jsx-a11y/accessible-emoji */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './components/Button';
import WishListItem from './components/WishlistItems';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';

// const UL = styled.ul`
//   list-style-type: none;
//   display: flex;
//   justify-content: center;
//   padding: 0;
//   & > * {
//     margin: 1rem;
//   }
// `;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishListItem title="Make a Wish" />
          <Link to="/add">
            <Button navigation>🎁</Button>
          </Link>
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
