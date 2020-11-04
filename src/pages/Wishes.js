import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';

export default function Wishes() {
  const { name } = useParams();
  return (
    <div>
      <h2>List Of {name}</h2>
      <Link to="/add">
        <Button>{/* <span>🎁</span> */}+</Button>
      </Link>
    </div>
  );
}
