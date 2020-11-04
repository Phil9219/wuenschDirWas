/* eslint-disable jsx-a11y/accessible-emoji */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import WishList from './pages/WishList';
import Wishes from './pages/Wishes';
// import BGIMG from './assets/BGIMG.jpeg';

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
    // <div>
    //   styles={{ backgroundimage: `url(${BGIMG})` }}
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishList />
        </Route>

        <Route path="/wish/:name">
          <Wishes />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
    // </div>
  );
}

export default App;

// {/* <Router>
// <UL>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/contact">Contacts</Link>
//   </li>
//   <li>
//     <Link to="/aboutUs">About Us</Link>
//   </li>
//   <li>
//     <Link to="/imprint">Imprint</Link>
//   </li>
// </UL>
// <GlobalStyle />
// <Switch>
//   <Route path="/contact">
//     Contacts
//     <h3>Numbers - Email - and other stuff</h3>
//     <p>This is the part of the website where you find my contacs </p>
//     <ol>
//       <li>XXX</li>
//       <li>OOO</li>
//       <li>III</li>
//     </ol>
//   </Route>
//   <Route path="/aboutUs">About Us</Route>
//   <Route path="/imprint">
//     Imprint
//     <h3>REALLY IMPORTANT</h3>
//   </Route>

//   <Route path="/">
//     <WishListItem title="Make a Wish" />

//     <Button>🎁</Button>
//   </Route>
// </Switch>
// </Router> */}
