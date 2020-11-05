import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishListItem from '../components/WishlistItems';
import { getLists, getListsById } from '../api/lists';

export default function Wishlist() {
  const [list, setList] = useState(null);

  useEffect(async () => {
    const lists = await getLists();
    setList(lists);
  }, []);

  return (
    <div>
      {list?.map((item) => (
        <Link to={`/wish/${item.id}`} key={item.id}>
          <WishListItem title={item.title} />{' '}
        </Link>
      ))}
      <Link to="/add">
        <Button>+</Button>
      </Link>

      {/* // <Link to="/wish/Philipp">
      //   <WishListItem title="Philipp's List" />
      // </Link>
      // <Link to="/wish/Alexis">
      //   <WishListItem title="Alexis List" />
      // </Link>
      // <Link to="/wish/Atahans">
      //   <WishListItem title="Atahans List" />
      // </Link> */}
    </div>
  );
}
