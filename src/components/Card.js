const Card = ({ name, email, id, username }) => {
  return (
    <div className='tc bg-washed-green dib br3 pa3 ma2 grow shadow-5'>
      <img alt={`Robot ${name}`} src={`https://robohash.org/${id}?150x150`} />
      <div>
        <h2 className={`tracked-m`}> {name}</h2>
        <h4 className={`tracked-tight f3 dark-blue`}>{username}</h4>
        <h6 className={`fw6 f5 white bg-dark-blue pa2 br3 shdaow-5`}>{email}</h6>
      </div>
    </div>
  );
};

export default Card;
