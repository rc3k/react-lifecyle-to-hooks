import React, { useState, useEffect } from 'react';

export default () => {
  const [collection, setData] = useState({ items: [] });

  useEffect(() => {
    setData({ items: [1, 2, 3] });
  }, []);

  return (
    <div>
      {collection.items.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}
