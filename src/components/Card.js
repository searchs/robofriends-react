import React from 'react';

const Card = ({ name, email, id, username }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
      <img alt={`Robot ${name}`} src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name}</h2>
        <h4>{username}</h4>
        <p> {email}</p>
      </div>
    </div>
  );
};

export default Card;
