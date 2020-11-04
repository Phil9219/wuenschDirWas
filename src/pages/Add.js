import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Add() {
  return (
    <div>
      <h2>ADD</h2>
      <input />
      <Link to="/">
        <Button>⬅</Button>
      </Link>
    </div>
  );
}
