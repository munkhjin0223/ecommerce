import React, { useState, memo, useRef, useDeferredValue, useLayoutEffect } from 'react';
import { list } from './list';
import './style.css';

export default function App() {
  // This state will be updated by
  // HIGH priority updates
  const [filter, setFilter] = useState('');
  // This state will be updated by
  // LOW priority updates
  const deferredFilter = useDeferredValue(filter);

  useDebug({ filter, deferredFilter });

  return (
    <div className='container'>
      <input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <List filter={deferredFilter} />
    </div>
  );
}

const List = memo(({ filter }) => {
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
});

const sleep = (ms) => {
  const start = performance.now();

  while (performance.now() - start < ms);
};

const useDebug = ({ filter, deferredFilter }) =>
  useDebugConcurrent({
    onLowPriorityStart: () => {
      console.log(
        `%c Low Priority Start - %cfilter: "${filter}" deferredFilter: "${deferredFilter}"`,
        'color: teal;',
        'color: white'
      );
    },
    onLowPriorityEnd: () => {
      console.log(
        `%c Low Priority End - %cfilter: "${filter}" deferredFilter: "${deferredFilter}"`,
        'color: teal;',
        'color: white'
      );
    },
    onHighPriorityStart: () => {
      console.log(
        `%c High Priority Start - %cfilter: "${filter}" deferredFilter: "${deferredFilter}"`,
        'color: green;',
        'color: white'
      );
    },
    onHighPriorityEnd: () => {
      console.log(
        `%c High Priority End - %cfilter: "${filter}" deferredFilter: "${deferredFilter}"`,
        'color: green;',
        'color: white'
      );
    },
    onLowPriorityInterrupted: () => console.log('%c Low Priority Interrupted!', 'color: red'),
  });

const useDebugConcurrent = ({
  onLowPriorityStart,
  onLowPriorityEnd,
  onHighPriorityStart,
  onHighPriorityEnd,
  onLowPriorityInterrupted,
}) => {
  const probeRef = useRef({});
  const deferredProbe = useDeferredValue(probeRef.current);
  const renderStateRef = useRef('High Start');

  const isFirstRenderRef = useRef(true);
  const isFirstRender = isFirstRenderRef.current;
  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
  }

  const isLowPriority = probeRef.current === deferredProbe && !isFirstRender;

  if (isLowPriority) {
    renderStateRef.current = 'Low Start';
    probeRef.current = {};
    onLowPriorityStart?.();
  } else {
    if (renderStateRef.current === 'Low Start') {
      onLowPriorityInterrupted?.();
    }

    renderStateRef.current = 'High Start';
    probeRef.current = {};
    onHighPriorityStart?.();
  }

  useLayoutEffect(() => {
    if (isLowPriority) {
      renderStateRef.current = 'Low End';
      onLowPriorityEnd?.();
    } else {
      renderStateRef.current = 'High End';
      onHighPriorityEnd?.();
    }
  });
};
