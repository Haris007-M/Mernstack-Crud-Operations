import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Image({name}) {
    const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (name) {
      axios.get(`http://localhost:8002/students/${name}`)
        .then(res => {
          setImageUrl(res.data.url);
        })
        .catch(console.error);
    }
  }, [name]);

  return (
    <>
      <img src={imageUrl} alt={name} />
    </>
  )
}
