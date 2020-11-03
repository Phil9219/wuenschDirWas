import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Add() {
  return (
    <div>
      <h2>Hallo</h2>
      <Link to="/">
        <Button>⬅</Button>
        {/* <button type="button">Get Back</button> */}
      </Link>
    </div>
  );
}
