import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';

import { getListsById } from '../api/lists';

export default function Wishes() {
  const { listId } = useParams();
  const [wishItem, setWishItem] = useState(null);
  useEffect(async () => {
    const lists = await getListsById(listId);
    setWishItem(lists);
  }, []);
  return (
    <div>
      <h2>List Of {wishItem?.title}</h2>
      {/* <ul>
        <li>{wishItem?.wishes[0]}</li>
        <li>{wishItem?.wishes[1]}</li>
    </ul> */}
      <ul>
        <p>Ich wünsche mir </p>
        {/* <li>{wishItem?.wishes[0]}</li>
        <li>{wishItem?.wishes[1]}</li> */}
        {wishItem?.wishes?.map((wish) => (
          <li>{wish}</li>
        ))}
      </ul>

      <Link to="/add">
        <Button>{/* <span>🎁</span> */}⬅</Button>
      </Link>
    </div>
  );
}
