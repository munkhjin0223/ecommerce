import React, { useState } from 'react';
import './style.css';
import { list } from './list';

const List = ({ filter }) => {
  const filteredList = list.filter((entry) => entry.name.toLowerCase().includes(filter.toLowerCase()));

  sleep(100);

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
};

const sleep = (ms) => {
  const start = performance.now();

  while (performance.now() - start < ms);
};

export default function ConcurrentTest() {
  const [filter, setFilter] = useState('');

  return (
    <div className='con-container'>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <br />

      <List filter={filter} />
    </div>
  );
}
