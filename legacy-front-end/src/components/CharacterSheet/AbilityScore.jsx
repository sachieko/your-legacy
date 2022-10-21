
const AbilityScore = (props) => {

  return (
    <div className='ability-score'>
      <span className='ability-name'>{props.name}</span>
      <span className='ability-value'>{props.value}</span>
      <span className='ability-modifier'>{Math.floor((props.value - 10) / 2)}</span>
      <div className='ability-btn'>
        <button onClick={() => props.setter(prev => prev -= 1)}>-</button>
        <button onClick={() => props.setter(prev => prev += 1)}>+</button>
      </div>
    </div>
  );
};

export default AbilityScore;