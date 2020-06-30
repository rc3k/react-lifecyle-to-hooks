import React, { useState } from 'react';

const MemoisedComponent = React.memo(({ counter }) => (
  <div>{counter}</div>
), (oldProps, newProps) => newProps.counter > 3);

export default () => {
  const [{ items, counter }, setData] = useState({ items: [], counter: 0 });

  return (
    <div>
      <div>
        {counter}
        <input type="button" onClick={() => setData({ items, counter: counter + 1 })} value="Increment" />
      </div>
      <MemoisedComponent counter={counter} />
    </div>
  );
};
