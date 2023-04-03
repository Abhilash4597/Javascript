import React from 'react';
import './keeper.css';

export default function Note({ data }) {
  return (
    <>
      {data.map(data => {
        return (
          <div className="note" key={data.key}>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
          </div>
        );
      })}
    </>
  );
}