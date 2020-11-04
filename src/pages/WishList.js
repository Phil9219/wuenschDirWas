import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishListItem from '../components/WishlistItems';

export default function Wishlist() {
  return (
    <div>
      <Link to="/wish/Philipp">
        <WishListItem title="Philipp's List" />
      </Link>
      <Link to="/wish/Alexis">
        <WishListItem title="Alexis List" />
      </Link>
      <Link to="/wish/Atahans">
        <WishListItem title="Atahans List" />
      </Link>
      <Link to="/add">
        <Button>{/* <span>🎁</span> */}+</Button>
      </Link>
    </div>
  );
}
