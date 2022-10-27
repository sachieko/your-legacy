
const AbilityScore = (props) => {
  const { name, value } = props;
  const score = props.name.toLowerCase();

  return (
    <div className='ability-score'>
      <span className='ability-name'>{name}</span>
      <span className='ability-value'>{value}</span>
      <span className='ability-modifier'>{Math.floor((value - 10) / 2)}</span>
      <div className='ability-btn'>
        <button onClick={() => props.setter(score, value - 1)}>-</button>
        <button onClick={() => props.setter(score, value + 1)}>+</button>
      </div>
    </div>
  );
};

export default AbilityScore;