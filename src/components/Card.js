import React from 'react';

const Card = ({ name, email, id, username }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
      <img alt={`Robot ${name}`} src={`https://robohash.org/${id}?150x150`} />
      <div>
        <h2> {name}</h2>
        <h4>{username}</h4>
      </div>
    </div>
  );
};

export default Card;
