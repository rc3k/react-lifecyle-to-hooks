import React, { useState, useEffect } from 'react';

export default () => {
    const [{ items, counter }, setData] = useState({ items: [], counter: 0 });

    useEffect(() => {
        setData({ items: [...Array(counter).keys()], counter } );
    }, [counter]);

    return (
      <div>
        <div>
            {counter}
            <input type="button" onClick={() => setData({ items, counter: counter + 1 } )} value="Increment" />
        </div>
        {items.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    );
}
