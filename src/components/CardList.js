import React from 'react';
import Card from './Card';

//Ola's solution
const CardList = ({ robots }) => {
  return robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
        username={robot.username}
      />
    );
  });
};

// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((user, idx) => {
//     return (
//       <Card
//         key={idx}
//         id={robots[idx].id}
//         name={robots[idx].name}
//         email={robots[idx].email}
//       />
//     );
//   });

//   return <div>{cardComponent}</div>;
// };

export default CardList;
