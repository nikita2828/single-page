import React from 'react';
import './index.scss';
export default function Animation() {
  return (
    <div className='wrapper'>
      <div className='loader'>
        <div className='text'>Loading</div>
        <div className='dots'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
